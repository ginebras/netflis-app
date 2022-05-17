const app=require('./app');
const mongoose=require('mongoose');
const port=process.env.PORT || 8000;

mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGOOSE_URL,{useUnifiedTopology:true,useNewUrlParser:true})
	.then(()=>{
		console.log('Mongo connection ok');

		app.listen(port,()=>{
			console.log(`Server listening at localhost:${port}`);
		})
	})