const containerStyleReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CONTAINER_STYLE':
        return action.payload;
      case 'UNSET_CONTAINER_STYLE':
        return {};
      default:
        return state;
    }
  };
  
  export default containerStyleReducer;
  