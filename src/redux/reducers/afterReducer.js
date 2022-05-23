const afterReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_AFTER_STYLE':
        return action.payload;
      case 'UNSET_AFTER_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default afterReducer;
  