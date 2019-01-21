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
