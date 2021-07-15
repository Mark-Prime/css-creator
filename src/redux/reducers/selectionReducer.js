const selectionReducer = (state = 'content', action) => {
    switch (action.type) {
      case 'SET_SELECTION':
        return action.payload;
      case 'UNSET_SELECTION':
        return '';
      default:
        return state;
    }
  };
  
  export default selectionReducer;
  