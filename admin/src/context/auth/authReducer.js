export default (state,action)=>{
	switch(action.type){

		case "LOGIN_SUCCESS":
			localStorage.setItem('token',action.payload.token);
			JSON.stringify(localStorage.setItem('user',action.payload.user));
			return{
				user:action.payload.user,
				token:action.payload.token
			}

		case 'TOKEN_NOT_VALID':
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			return{
				token:null,
				user:null
			}

		default:
			return {...state};
	}
}