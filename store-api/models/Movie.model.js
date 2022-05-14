const mongoose=require('mongoose');

const MovieSchema=new mongoose.Schema(
	{
		title:{type:String,required:true,unique:true},
		desc:{type:String},
		img:{type:String},
		imgTitle:{type:String},
		imgSm:{type:String},
		trailer:{type:String},
		video:{type:String},
		year:{type:String},
		limit:{type:Number},
		genre:{type:String},
		isSeries:{type:String,default:false}
	},
	{timestamps:true}
);

module.exports=mongoose.model('movie',MovieSchema);