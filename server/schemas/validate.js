const Boom = require("boom");

export default function validateSchema(schema, doc) {
  if (!schema) {
    throw new Error(`Missing schema`);
  }

  try {
    schema.validateSync(doc);
    return doc;
  } catch (err) {
    throw Boom.boomify(err);
  }
}
