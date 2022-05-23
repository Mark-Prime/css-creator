const disabledReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DISABLED_STYLE':
        return action.payload;
      case 'UNSET_DISABLED_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default disabledReducer;
  