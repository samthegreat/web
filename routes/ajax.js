var express = require('express');
var router = express.Router();
const pug = require('pug');
var mongoose = require( 'mongoose' );
var Todo = mongoose.model( 'Todo' );
var Stats = mongoose.model( 'Stats' );
var Progress = mongoose.model( 'Progress' );

router.get('/getQuestion', function(req, res, next) {
  
  Todo.count(function(err, count) {
    if (err) {
		res.statusCode = 404;
		return res.send('Error 404: No count found');
    }
    var random = Math.floor(Math.random() * count);
    Todo.findOne().skip(random).exec(function (err, result) {
		
		res.writeHead(200, {"Content-Type": "application/json"});
		
		var json = JSON.stringify(result);
		res.end(json);
		});
	});
  
});

router.get('/getExamenQ/:dom', function(req, res, next) {
	
	Todo.count({ 'theme': req.params.dom }, function(err, count) {
    if (err) {
		res.statusCode = 404;
		return res.send('Error 404: No count found');
    }
    var random = Math.floor(Math.random() * count);
    Todo.findOne({ 'theme': req.params.dom }).skip(random).exec(function (err, result) {
		
		res.writeHead(200, {"Content-Type": "application/json"});
		
		var json = JSON.stringify(result);
		res.end(json);
		});
	});
	
});

router.post('/addQuest/:dom', function(req, res) {
	
	console.log("POST received.");
	console.log(req.body);
	
	new Todo({
		theme    : req.params.dom,
		question : req.body.question,
		choix1	 : req.body.choix1,
		choix2   : req.body.choix2,
		choix3   : req.body.choix3,
		choix4   : req.body.choix4,
		reponse  : req.body.reponse,
		updated_at : Date.now()
		}).save( function( err, todo, count ){
			res.redirect(200, '/tableaubord');
			res.end();
		});
});

router.post('/validate', function(req, res, next) {
	
	Todo.count({ 'question': req.body.question, 'reponse': req.body.reponse }, function(err, count) {
		
		if (err) {
			console.log(err); 
			res.statusCode = 404;
			return res.send('Error 404: No question/answer found');
		}
		
		console.log("Question = " + req.body.question);
		console.log("Reponse = " + req.body.reponse);
		console.log("Count = " + count);
		
		if (count > 0)
		{
			console.log("Right answer");
			
			// Update stats in DB accordingly
			Stats.update({user_id: "main"}, {$inc: {tRapideReussi: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
				return res.send("Succesfully saved");
			});
		}
		else
		{
			console.log("Wrong answer.");
			
			// Update stats in DB accordingly
			Stats.update({user_id: "main"}, {$inc: {tRapideFail: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
				
				res.statusCode = 404;
				return res.send('Error 404: Wrong answer');
			});
		}
	});
	
});

router.post('/validateExam', function(req, res, next) {
	
	Todo.count({ 'question': req.body.question, 'reponse': req.body.reponse }, function(err, count) {
		
		if (err) {
			console.log(err); 
			res.statusCode = 404;
			return res.send('Error 404: No question/answer found');
		}
		
		console.log("Question = " + req.body.question);
		console.log("Reponse = " + req.body.reponse);
		console.log("Count = " + count);
		
		if (count > 0)
		{
			console.log("Right answer");
			
			// Update stats in DB accordingly
			Progress.update({user_id: "main"}, {$inc: {bonnesReponses: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
				return res.send("Succesfully saved");
			});
		}
		else
		{
			console.log("Bad answer.");
			res.statusCode = 404;
			return res.send('Error 404: Wrong answer');
		}
	
	});
	
});

router.delete('/delQuest', function(req, res) {
	
	console.log("DELETE received.");
	res.end('success');
	
	Todo.remove({},
	 function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
        }
    );
});

router.get('/trueInitStats', function(req, res, next) {
	
	Stats.count(function(err, count) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error 500: No count found');
		}

		if (count == 0)
		{
			var stats = new Stats({
			
			user_id: "main",
			tRapideReussi: 0,
			tRapideFail: 0,
			questExamTot: 0,
			questExamBon: 0,
			examsReussiHTML: 0,
			examsTotalHTML: 0,
			examsReussiCSS: 0,
			examsTotalCSS: 0,
			examsReussiJS: 0,
			examsTotalJS: 0
			});

			var upsertData = stats.toObject();
			delete upsertData._id;
			Stats.update({user_id: "main"}, upsertData, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
				return res.send("Succesfully created");
			});
		}
		else
		{
			return res.send("Nothing to create");
		}
	});
});

router.get('/initStats', function(req, res, next) {
	
	
	
	var stats = new Stats({
		
		user_id: "main",
		tRapideReussi: 0,
		tRapideFail: 0,
		questExamTot: 0,
		questExamBon: 0,
		examsReussiHTML: 0,
		examsTotalHTML: 0,
		examsReussiCSS: 0,
		examsTotalCSS: 0,
		examsReussiJS: 0,
		examsTotalJS: 0
	});

	var upsertData = stats.toObject();
	delete upsertData._id;
	Stats.update({user_id: "main"}, upsertData, {upsert: true}, function(err, doc){
		if (err)
		{
			console.log(err);
			return res.send(500, { error: err });
		}
		return res.send("Succesfully saved");
    });
});

router.post('/setProgress', function(req, res, next) {
	
	var nbQuest = Number(req.body.qmax);
	
	var progress = new Progress({
		
		user_id: "main",
		theme: req.body.theme,
		questCourante: 1,
		questMax: nbQuest,
		bonnesReponses: 0
	});

	var upsertData = progress.toObject();
	delete upsertData._id;
	Progress.update({user_id: "main"}, upsertData, {upsert: true}, function(err, doc){
		if (err)
		{
			console.log(err);
			return res.send(500, { error: err });
		}
		console.log("success");
		var json = "{}";
		res.end(json);
    });
});

router.get('/getProgress', function(req, res, next) {
	
    Progress.findOne({ 'user_id': 'main' }).exec(function (err, result) {
		
		res.writeHead(200, {"Content-Type": "application/json"});
		
		console.log(result);
		
		var json = JSON.stringify(result);
		res.end(json);
		});
});

router.get('/getStats', function(req, res, next) {
	
    Stats.findOne({ 'user_id': 'main' }).exec(function (err, result) {
		
		res.writeHead(200, {"Content-Type": "application/json"});
				
		var json = JSON.stringify(result);
		res.end(json);
		});
});

router.post('/nextQuestion', function(req, res, next) {
	
	Progress.findOne({ 'user_id': 'main' }, function (err, doc){
	  
	  if (doc.questCourante < doc.questMax)
	  {
		  Progress.update({user_id: "main"}, {$inc: {questCourante: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
				
				var result = {success : "Updated Successfully", status : 200};
				
				var json = JSON.stringify(result);
				res.end(json);
			});
	  }
	  else
	  {
		  res.end('{"success" : "No updates", "status" : 304}');
	  }
	});

});

router.post('/incrStats', function(req, res, next) {
	
	console.log("Theme: " + req.body.theme);
	console.log("Note: " + req.body.score);
	
	var result;
	var note = req.body.score;
	note = parseFloat(note);
	var totQuest = req.body.totQuest;
	totQuest = parseInt(totQuest);
	var goodQuest = req.body.goodQuest;
	goodQuest = parseInt(goodQuest);
	
	// TOTAL
	
	Stats.update({user_id: "main"}, {$inc: {questExamTot: totQuest}}, {upsert: true}, function(err, doc){
		if (err)
		{
			console.log(err);
			return res.send(500, { error: err });
		}
	});
	
	Stats.update({user_id: "main"}, {$inc: {questExamBon: goodQuest}}, {upsert: true}, function(err, doc){
		if (err)
		{
			console.log(err);
			return res.send(500, { error: err });
		}
	});
	
	// PAR THEME
	
	if (req.body.theme == "HTML")
	{
		Stats.update({user_id: "main"}, {$inc: {examsTotalHTML: 1}}, {upsert: true}, function(err, doc){
			if (err)
			{
				console.log(err);
				return res.send(500, { error: err });
			}
		});
		
		if (note > 50.0)
		{
			Stats.update({user_id: "main"}, {$inc: {examsReussiHTML: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
			});
		}
		
		result = {success : "Success", status : 200};
	}
	else if (req.body.theme == "CSS")
	{
		Stats.update({user_id: "main"}, {$inc: {examsTotalCSS: 1}}, {upsert: true}, function(err, doc){
			if (err)
			{
				console.log(err);
				return res.send(500, { error: err });
			}
		});
		
		if (note > 50.0)
		{
			Stats.update({user_id: "main"}, {$inc: {examsReussiCSS: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
			});
		}
		
		result = {success : "Success", status : 200};
	}
	else if (req.body.theme == "Javascript")
	{
		Stats.update({user_id: "main"}, {$inc: {examsTotalJS: 1}}, {upsert: true}, function(err, doc){
			if (err)
			{
				console.log(err);
				return res.send(500, { error: err });
			}
		});
		
		if (note > 50.0)
		{
			Stats.update({user_id: "main"}, {$inc: {examsReussiJS: 1}}, {upsert: true}, function(err, doc){
				if (err)
				{
					console.log(err);
					return res.send(500, { error: err });
				}
			});
		}
		
		result = {success : "Success", status : 200};
	}
	else
	{
		var result = {success : "Error", status : 500};
	}
	
	var json = JSON.stringify(result);
	res.end(json);
});

router.post('/getNbQuestbyTheme', function(req,res,next) {
	
	console.log("POST received.");
	console.log(req.body.theme);
	Todo.count({ 'theme': req.body.theme}, function(err, count) {
    if (err) {
		res.statusCode = 404;
		return res.send('Error 404: No count found');
    }
    console.log(count);
    var json = JSON.stringify(count);
    res.end(json);
	});
});

router.get('/getNbQuest', function(req,res,next) {
	
	Todo.count(function(err, count) {
		if (err) {
			res.statusCode = 500;
			return res.send('Error.');
		}
		
		console.log(count);
		var json = JSON.stringify(count);
		res.end(json);
	});
});

router.post('/abandon', function(req,res,next) {
	
	Progress.update({user_id: "main"}, {$set: { questExamBon: 0 }}, {upsert: false}, function(err, doc){
		if (err)
		{
			console.log(err);
			return res.send(500, { error: err });
		}
	});
	
	var result = {success : "Success", status : 200};
	var json = JSON.stringify(result);
	res.end(json);

});

module.exports = router;
