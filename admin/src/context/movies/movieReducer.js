export default (state,action)=>{
	switch(action.type){
		case 'MOVIES_SUCCESS':
			return{
				movies:action.payload
			}

		case 'DELETE_SUCCESS':
			return{
				movies:state.movies.filter((m)=>m._id!==action.payload)
			}

		case 'POSTED_MOVIE':
			return{
				movies:[...state.movies,action.payload]
			}
			
		default:
			return {...state}
	}
}