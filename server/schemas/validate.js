const Boom = require("boom");

export default async function validateSchema(schema, doc) {
  if (!schema) {
    throw new Error(`Missing schema`);
  }

  try {
    await schema.validate(doc);
    return doc;
  } catch (err) {
    throw Boom.boomify(err);
  }
}
