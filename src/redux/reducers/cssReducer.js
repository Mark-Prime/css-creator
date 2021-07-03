const cssReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CSS':
        return action.payload;
      case 'UNSET_CSS':
        return '';
      default:
        return state;
    }
  };
  
  export default cssReducer;
  