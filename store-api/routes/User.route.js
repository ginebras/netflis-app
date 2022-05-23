const router=require('express').Router();
const multer=require('multer');
const User=require('../models/User.model');
const { verifyToken,authorize,isAdmin }=require('../helpers/jwtVerify');

const MYMES_TIPES={
	'image/png':'png',
	'image/jpeg':'jpeg',
	'image/jpg':'jpg'
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid=MYMES_TIPES[file.mimetype];
    let error=new Error('invalid image type');

    if(isValid) error=null;

    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    const field=file.originalname;
    cb(null,`${Date.now()}-${field}`);
  }
})

const upload = multer({ storage: storage })

router.put('/update/:id',upload.single('image'),authorize,async(req,res)=>{
	try{
		if(req.body.password)
			req.body.password=await bcrypt.hashSync(req.body.password);

		if(req.file){
			const basename=`${req.protocol}://${req.get('host')}/public/uploads/`;
			const name=req.file.filename;
			req.body.profilePic=`${basename}${name}`;
		}
		let saved=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

		if(!saved) return res.status(400).send({msg:'Could not update'});
		return res.status(200).send(saved);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.delete('/delete/:id',authorize,async(req,res)=>{
	try{
		let deleted=await User.findByIdAndDelete(req.params.id);

		if(!deleted) return res.status(404).send({msg:'No found user'});
		return res.status(200).send({msg:'Deleted user',deleted:deleted});

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/user/:id',authorize,async(req,res)=>{
	try{
		let user=await User.findById(req.params.id);

		if(!user) return res.status(404).send({msg:'No founded user'});
		return res.status(200).send(user);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/users/all',isAdmin,async(req,res)=>{
	const query=req.query.news;
	try{
		const users=query ? await  User.find().sort({ _id:-1 }).limit(10) : await User.find();

		if(!users) return res.status(404).send('No founded user');
		return res.status(200).send(users);

	}catch(error){
		return res.status(500).send(error);
	}
});

router.get('/users/stats',isAdmin,async(req,res)=>{
	const today=new Date();
	const lastYear=today.setFullYear(today.setFullYear() -1);

	try{
		const data=await User.aggregate([
			{
				$project:{
					month:{ $month:'$createdAt' },
				}
			},
			{
				$group:{
					_id:'$month',
					total:{ $sum:1 },
				}
			}
		])

		return res.status(200).send(data);

	}catch(error){
		return res.status(500).send(error);
	}
});

module.exports=router;