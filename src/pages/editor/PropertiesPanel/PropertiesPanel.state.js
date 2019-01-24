import { SET_TEXT_MASKING } from "../Editor.state";

const SET_ACTIVE_CONTROL =
  "formbuilder/pages/editor/propertiesPanel/setActiveControl";

export default (state = { formId: 0, ctrlId: 0 }, action) => {
  switch (action.type) {
    case SET_ACTIVE_CONTROL:
      return {
        ...state,
        formId: action.formId,
        ctrlId: action.ctrlId
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

export function controlSelector(state) {
  const { formId, ctrlId } = state.activeControl;

  return state.forms[formId] ? state.forms[formId][ctrlId] : null;
}

export function setInputFormat(config) {
  return (dispatch, getState) => {
    const state = getState();
    const { formId, ctrlId } = state.activeControl;
    if (config.type === "date") {
      config.type = "tel";
    }
    dispatch({
      type: SET_TEXT_MASKING,
      formId,
      ctrlId,
      config
    });
  };
}

export function setAdvancedInputFormat(e) {
  let { value } = e.target;
  let newValue = "";
  // reduces all spaces to single space
  value = value.replace(/^\s+|\s+$/g, " ");

  // only allows characters x, _, and whitespace
  for (let i = 0; i < value.length; i++) {
    if (value[i].match(/[x_\s]/i)) {
      newValue += value[i];
    }
  }

  // update the advanced input masking box
  e.target.value = newValue;

  return (dispatch, getState) => {
    const state = getState();
    const { formId, ctrlId } = state.activeControl;

    dispatch({
      type: SET_TEXT_MASKING,
      formId,
      ctrlId,
      config: { placeholder: newValue }
    });
  };
}
