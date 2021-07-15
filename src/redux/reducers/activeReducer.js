const activeReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_STYLE':
        return action.payload;
      case 'UNSET_ACTIVE_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default activeReducer;
  