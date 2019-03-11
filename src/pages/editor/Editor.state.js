export const CREATE_NEW_CONTROL = "formbuilder/pages/editor/createNewControl";
export const SET_LABEL_TEXT = "formbuilder/pages/editor/setControlLabel";
export const SET_ACTIVE_CONTROL = "formbuilder/pages/editor/setActiveControl";
export const CREATE_NEW_FORM_COLUMN =
  "formbuilder/pages/editor/createNewFormColumn";
export const UPDATE_FORM_TITLE = "formbuilder/pages/editor/updateFormTitle";
export const SET_TEXT_MASKING =
  "formbuilder/pages/editor/propertiesPanel/setTextMasking";

const initialState = { activeFormId: "", activeCtrlId: "" };

export default (state = initialState, action) => {
  const { activeFormId, activeCtrlId } = state;

  switch (action.type) {
    case SET_ACTIVE_CONTROL:
      return {
        ...state,
        activeFormId: action.formId,
        activeCtrlId: action.ctrlId
      };
    case CREATE_NEW_FORM_COLUMN:
      return {
        ...state,
        [action.data]: {}
      };
    case UPDATE_FORM_TITLE:
      return {
        ...state,
        [action.formId]: {
          ...state[action.formId],
          title: action.data
        }
      };
    case CREATE_NEW_CONTROL:
      return {
        ...state,
        [action.formId]: {
          ...state[action.formId],
          [action.ctrlId]: action.data
        }
      };
    case SET_LABEL_TEXT:
      return {
        ...state,
        [activeFormId]: {
          ...state[activeFormId],
          [activeCtrlId]: {
            ...state[activeFormId][activeCtrlId],
            label: action.label
          }
        }
      };
    case SET_TEXT_MASKING:
      return {
        ...state,
        [activeFormId]: {
          ...state[activeFormId],
          [activeCtrlId]: {
            ...state[activeFormId][activeCtrlId],
            ...action.config
          }
        }
      };
    default:
      return state;
  }
};

export function setActiveControl(formId, ctrlId) {
  return {
    type: SET_ACTIVE_CONTROL,
    formId,
    ctrlId
  };
}

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

export function setLabelText(label) {
  return {
    type: SET_LABEL_TEXT,
    label
  };
}

export function controlSelectorViaFormIdAndCtrlId(state, formId, ctrlId) {
  return state.forms[formId] ? state.forms[formId][ctrlId] : null;
}

export function updateFormTitle(formId, data) {
  return {
    type: UPDATE_FORM_TITLE,
    formId,
    data
  };
}
