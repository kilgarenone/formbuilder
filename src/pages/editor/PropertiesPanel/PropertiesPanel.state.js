import { SET_CONTROL_PROPS } from "../Editor.state";

export function controlSelector(state) {
  const { activeFormId, activeCtrlId } = state.forms;

  return state.forms[activeFormId]
    ? state.forms[activeFormId][activeCtrlId]
    : {};
}

export function setControlProps(config) {
  if (config.dataType === "date") {
    config.type = "tel";
  }

  return {
    type: SET_CONTROL_PROPS,
    config
  };
}

export function setAdvancedInputFormat(e) {
  let { value } = e.target;
  let newValue = "";
  // reduces all spaces to single space
  value = value.replace(/^\s+|\s+$/g, " ");

  // only allows characters x, _, whitespace, (), -, +
  for (let i = 0; i < value.length; i++) {
    if (value[i].match(/[x_\s()-+]/i)) {
      newValue += value[i];
    }
  }

  // update the advanced input masking box
  e.target.value = newValue;

  return {
    type: SET_CONTROL_PROPS,
    config: {
      placeholder: newValue.toUpperCase().replace(/_/i, "X"),
      charset: newValue
    }
  };
}
