const beforeReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_BEFORE_STYLE':
        return action.payload;
      case 'UNSET_BEFORE_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default beforeReducer;
  