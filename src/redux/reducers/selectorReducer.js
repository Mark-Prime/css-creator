const selectorReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_SELECTOR':
        return action.payload;
      case 'UNSET_SELECTOR':
        return '';
      default:
        return state;
    }
  };
  
  export default selectorReducer;
  