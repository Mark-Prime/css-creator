const invalidReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_INVALID_STYLE':
        return action.payload;
      case 'UNSET_INVALID_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default invalidReducer;
  