export const SET_TEXT_MASKING = "formbuilder/pages/editor/setTextMasking";
export const CREATE_NEW_CONTROL = "formbuilder/pages/editor/createNewControl";
export const CREATE_NEW_FORM_COLUMN =
  "formbuilder/pages/editor/createNewFormColumn";

const initialState = { formCols: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_FORM_COLUMN:
      return {
        ...state,
        formCols: { ...state.formCols, [action.data]: {} }
      };
    case CREATE_NEW_CONTROL:
      return {
        ...state,
        formCols: {
          ...state.formCols,
          [action.formId]: {
            ...state.formCols[action.formId],
            [action.ctrlId]: action.data
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

export function createNewFormColumn(data) {
  return {
    type: CREATE_NEW_FORM_COLUMN,
    data
  };
}
