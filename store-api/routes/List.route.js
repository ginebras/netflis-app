const router=require('express').Router();
const List=require('../models/List.model');
const { isAdmin,verifyToken }=require('../helpers/jwtVerify');

router.post('/create',isAdmin,async(req,res)=>{
	let list=new List(req.body)
	try{
		let saved=await list.save();

		if(!saved) return res.status(400).send('could not create list');
		return res.status(200).send(saved);
	}catch(error){
		return res.status(500).send(error);
	}
});

router.delete('/delete/:id',isAdmin,async(req,res)=>{
	try{
		await Movie.findByIdAndDelete(req.params.id);

		return res.status(200).send('deleted list');

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/',verifyToken,async(req,res)=>{
	const typeQuery=req.query.type;
	const genreQuery=req.query.genre;
	let list;
	try{
		if(typeQuery){
			if(genreQuery){
				list=await List.aggregate([
					{	$sample:{size:7} },
					{ $match:{ type:typeQuery,genre:genreQuery } }
				]);
			}else{
				list=await List.aggregate([
					{$sample:{size:7}},
					{$match:{type:typeQuery}}
				])
			}
		}else{
			list=await List.aggregate([{$sample:{size:3}}]);
		}

		return res.status(200).send(list);

	}catch(error){
		return res.status(500).send(error);
	}
});

module.exports=router;