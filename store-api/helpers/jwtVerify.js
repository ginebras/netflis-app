const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{	
	const token=req.headers['token'];

	if(token){
		const value=token.split(" ")[1];

		jwt.verify(value,process.env.TOKEN_SECRET,(error,user)=>{
			if(error) return res.status(403).send('token not valid');
			req.user=user;
			next();
		})
	}else{
		return res.status(401).send({mgs:'No token authorization'});
	}
}

const authorize=(req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.userID===req.params.id || req.user.isAdmin){
			next();
		}else{
			return res.status(403).send({msg:'not allowed'});
		}
	});
}

const isAdmin=(req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.isAdmin){
			next();
		}else{
			return res.status(403).send({msg:'Not admin'});
		}
	});
}

module.exports={verifyToken,authorize,isAdmin};