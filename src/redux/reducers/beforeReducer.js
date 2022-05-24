const beforeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_hover = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_HOVER_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_HOVER_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_active = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_ACTIVE_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_ACTIVE_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_focus = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_FOCUS_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_FOCUS_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_target = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_TARGET_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_TARGET_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_disabled = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_DISABLED_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_DISABLED_STYLE':
      return {};
    default:
      return state;
  }
};

export const before_invalid = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BEFORE_INVALID_STYLE':
      return action.payload;
    case 'UNSET_BEFORE_INVALID_STYLE':
      return {};
    default:
      return state;
  }
};

export default beforeReducer;
  