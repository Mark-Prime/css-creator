const styleReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STYLE':
        return action.payload;
      case 'UNSET_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default styleReducer;
  