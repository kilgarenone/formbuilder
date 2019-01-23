export const CREATE_NEW_CONTROL = "formbuilder/pages/editor/createNewControl";
export const SET_CONTROL_LABEL = "formbuilder/pages/editor/setControlLabel";
export const CREATE_NEW_FORM_COLUMN =
  "formbuilder/pages/editor/createNewFormColumn";
export const SET_TEXT_MASKING =
  "formbuilder/pages/editor/propertiesPanel/setTextMasking";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_FORM_COLUMN:
      return {
        ...state,
        [action.data]: {}
      };
    case CREATE_NEW_CONTROL:
      return {
        ...state,
        [action.formId]: {
          ...state[action.formId],
          [action.ctrlId]: action.data
        }
      };
    case SET_CONTROL_LABEL:
      return {
        ...state,
        [action.formId]: {
          ...state[action.formId],
          [action.ctrlId]: {
            ...state[action.formId][action.ctrlId],
            label: action.label
          }
        }
      };
    case SET_TEXT_MASKING:
      return {
        ...state,
        [action.formId]: {
          ...state[action.formId],
          [action.ctrlId]: {
            ...state[action.formId][action.ctrlId],
            ...action.config
          }
        }
      };
    default:
      return state;
  }
};

export function createNewControlActionCreator(ctrlId, formId, data) {
  return {
    type: CREATE_NEW_CONTROL,
    data,
    formId,
    ctrlId
  };
}

export function createNewFormColumnActionCreator(data) {
  return {
    type: CREATE_NEW_FORM_COLUMN,
    data
  };
}

export function setControlLabel(formId, ctrlId, label) {
  return {
    type: SET_CONTROL_LABEL,
    formId,
    ctrlId,
    label
  };
}

export function controlSelectorViaFormIdAndCtrlId(state, formId, ctrlId) {
  return state.forms[formId] ? state.forms[formId][ctrlId] : null;
}
