var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
	user_id    : String,
	theme      : String,
	question   : String,
	choix1     : String,
	choix2     : String,
	choix3     : String,
	choix4     : String,
	reponse    : String,
	updated_at : Date
});

var Stats = new Schema({
	user_id    			: String,
	tRapideReussi    	: Number,
	tRapideFail      	: Number,
	questExamTot   		: Number,
	questExamBon   		: Number,
	examsReussiHTML     : Number,
	examsTotalHTML     	: Number,
	examsReussiCSS     	: Number,
	examsTotalCSS     	: Number,
	examsReussiJS     	: Number,
	examsTotalJS     	: Number,
	updated_at 			: Date
});

var Progress = new Schema({
	user_id    			: String,
	theme				: String,
	questCourante    	: Number,
	questMax			: Number,
	bonnesReponses		: Number,
	updated_at 			: Date
});

mongoose.model( 'Todo', Todo );
mongoose.model( 'Stats', Stats );
mongoose.model( 'Progress', Progress );
mongoose.connect( 'mongodb://samila:r2t6h7@ds143707.mlab.com:43707/log4420' );
