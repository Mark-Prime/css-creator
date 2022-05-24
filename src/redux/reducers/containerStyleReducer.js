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

export const container_hover = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_HOVER_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_HOVER_STYLE':
      return {};
    default:
      return state;
  }
};

export const container_active = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_ACTIVE_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_ACTIVE_STYLE':
      return {};
    default:
      return state;
  }
};

export const container_focus = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_FOCUS_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_FOCUS_STYLE':
      return {};
    default:
      return state;
  }
};

export const container_target = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_TARGET_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_TARGET_STYLE':
      return {};
    default:
      return state;
  }
};

export const container_disabled = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_DISABLED_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_DISABLED_STYLE':
      return {};
    default:
      return state;
  }
};

export const container_invalid = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTAINER_INVALID_STYLE':
      return action.payload;
    case 'UNSET_CONTAINER_INVALID_STYLE':
      return {};
    default:
      return state;
  }
};

export default containerStyleReducer;
  