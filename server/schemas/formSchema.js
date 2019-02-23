import * as yup from "yup";

export default yup.object().shape({
  _id: yup.string(),
  _rev: yup.string()
});
