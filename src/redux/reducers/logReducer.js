const logReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_LOG':
        return action.payload;
      case 'UNSET_LOG':
        return '';
      default:
        return state;
    }
  };
  
  export default logReducer;
  