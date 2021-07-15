const hoverReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_HOVER_STYLE':
        return action.payload;
      case 'UNSET_HOVER_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default hoverReducer;
  