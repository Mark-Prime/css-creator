const containerReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CONTAINER_CSS':
        return action.payload;
      case 'UNSET_CONTAINER_CSS':
        return '';
      default:
        return state;
    }
  };
  
  export default containerReducer;
  