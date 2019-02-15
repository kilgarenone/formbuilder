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

  return async function validation(doc) {
    try {
      await schema.validate(doc);
      await fn.call(null, doc);
    } catch (err) {
      throw new Error(err.reason);
    }
  };
}
