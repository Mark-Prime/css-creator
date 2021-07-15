const focusReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_FOCUS_STYLE':
        return action.payload;
      case 'UNSET_FOCUS_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default focusReducer;
  