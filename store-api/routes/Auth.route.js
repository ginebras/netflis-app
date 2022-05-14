const router=require('express').Router();
const User=require('../models/User.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const multer=require('multer');

const MYMES_TIPES={
	'image/png':'png',
	'image/jpg':'jpg',
	'image/jpeg':'jpeg'
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

router.post('/register',upload.single('image'),async (req,res)=>{
	
	if(req.file){
		const basename=`${req.protocol}://${req.get('host')}/public/uploads/`;
		const name=req.file.filename;
		req.body.profilePic=`${basename}${name}`;
	}

	let newUser=new User({
		username:req.body.username,
		email:req.body.email,
		password:bcrypt.hashSync(req.body.password),
		isAdmin:req.body.isAdmin,
		profilePic:req.file ? req.body.profilePic : '' 
	});

	let saved=await newUser.save();

	if(!saved) return res.status(400).send({msg:'Not registed',error:saved});
	return res.status(200).send(saved);
});

router.post('/login',async (req,res)=>{
	let find=await User.findOne({email:req.body.email});
	if(!find) return res.status(404).send({msg:'No user found'});

	if(bcrypt.compareSync(req.body.password,find.password)){
		const token=jwt.sign(
			{userID:find.id,isAdmin:find.isAdmin},
			process.env.TOKEN_SECRET,
			{expiresIn:'2d'}
		);

		const { password,...others }=find._doc;

		return res.status(200).send({user:others,token:token});
	}else{
		return res.status(400).send({msg:'Wrong password'});
	}
});

module.exports=router;