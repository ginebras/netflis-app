export default (state,action)=>{
	switch(action.type){
		case 'LISTS_SUCCESS':
			return{
				lists:action.payload
			}

		case 'DELETE_SUCCESS':
			return{
				lists:state.lists.filter((l)=>l._id!==action.payload)
			}

		default:
			return state;
	}
}