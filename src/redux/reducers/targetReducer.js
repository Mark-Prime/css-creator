const targetReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_TARGET_STYLE':
        return action.payload;
      case 'UNSET_TARGET_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default targetReducer;
  