const schemaNames = ["user"];

const schemas = {};

schemaNames.forEach(schemaName => {
  // eslint-disable-next-line
  schemas[schemaName] = require(`./${schemaName}Schema`).default;
});

export default function validateSchema(schemaName, fn) {
  let schema;

  if (typeof schemaName === "string") {
    schema = schemas[schemaName];
  }

  if (!schema) {
    throw new Error(`Unknown schema: ${schemaName}`);
  }

  return async function validation(doc, cb) {
    // console.log(schema);
    try {
      await schema.validate(doc);
      fn.call(null, doc, cb);
    } catch (err) {
      console.error(`Schema validation of ${schemaName} object failed`, err);
    }
  };
}
