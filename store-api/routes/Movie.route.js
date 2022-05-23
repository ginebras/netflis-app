const router=require('express').Router();
const Movie=require('../models/Movie.model');
const { verifyToken }=require('../helpers/jwtVerify');

router.post('/create',verifyToken,async(req,res)=>{
	let movie=new Movie(req.body);
	
	try{
		let savedMovie=await movie.save();

		if(!savedMovie) return res.status(400).send({msg:'could not save movie'});
		return res.status(200).send(savedMovie);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.put('/update/:id',verifyToken,async(req,res)=>{
	try{
		const movie=await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

		if(!movie) return res.status(400).send({msg:'could not update movie'});
		return res.status(200).send(movie);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.delete('/delete/:id',verifyToken,async(req,res)=>{
	try{
		const movie=await Movie.findByIdAndDelete(req.params.id);

		return res.status(200).send({msg:'deleted movie'});
	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/find/:id',verifyToken,async(req,res)=>{
	try{
		const movie=await Movie.findById(req.params.id);

		if(!movie) return res.status(404).send('movie not exist');
		return res.status(200).send(movie);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/random',verifyToken,async(req,res)=>{
	const type=req.query.type;
	let movies;
	try{
		if(type==='series'){
			movies=await Movie.aggregate([
				{ $match:{ isSeries:true }},
				{ $sample:{ size:1 }}
			]);
		}else{
			movies=await Movie.aggregate([
				{ $match: { isSeries:false}},
				{$sample:{size:1}}
			]);
		}

		return res.status(200).send(movies);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/all',verifyToken,async(req,res)=>{
	try{
		let movie=await Movie.find();

		if(!movie) return res.status(404).send('no movies');
		return res.status(200).send(movie);

	}catch(error){
		return res.status(500).send(error);
	}
});

module.exports=router;
