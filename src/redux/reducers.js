import { combineReducers } from "redux";
import forms from "../pages/editor/Editor.state";
import activeControl from "../pages/editor/PropertiesPanel/PropertiesPanel.state";

export default combineReducers({
  forms,
  activeControl
});
