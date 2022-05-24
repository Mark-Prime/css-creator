const afterReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_AFTER_STYLE':
        return action.payload;
      case 'UNSET_AFTER_STYLE':
        return {};
      default:
        return state;
    }
  };

export const after_hover = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_HOVER_STYLE':
      return action.payload;
    case 'UNSET_AFTER_HOVER_STYLE':
      return {};
    default:
      return state;
  }
};

export const after_active = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_ACTIVE_STYLE':
      return action.payload;
    case 'UNSET_AFTER_ACTIVE_STYLE':
      return {};
    default:
      return state;
  }
};

export const after_focus = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_FOCUS_STYLE':
      return action.payload;
    case 'UNSET_AFTER_FOCUS_STYLE':
      return {};
    default:
      return state;
  }
};

export const after_target = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_TARGET_STYLE':
      return action.payload;
    case 'UNSET_AFTER_TARGET_STYLE':
      return {};
    default:
      return state;
  }
};

export const after_disabled = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_DISABLED_STYLE':
      return action.payload;
    case 'UNSET_AFTER_DISABLED_STYLE':
      return {};
    default:
      return state;
  }
};

export const after_invalid = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AFTER_INVALID_STYLE':
      return action.payload;
    case 'UNSET_AFTER_INVALID_STYLE':
      return {};
    default:
      return state;
  }
};
  
export default afterReducer;
  