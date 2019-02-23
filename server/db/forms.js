import * as fp from "lodash/fp";
import db from "./db";
import validateSchema from "../schemas/validate";
import formSchema from "../schemas/formSchema";

const forms = db.use("forms");

function updateForm(form) {
  return forms.update(form);
}

export default {
  update: fp.compose(
    updateForm,
    fp.curry(validateSchema)(formSchema)
  )
};
