"use strict";

module.exports = {
  async find(ctx) {
    const enquiries = await strapi.services.enquiry.find(ctx.query);
    return enquiries;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const enquiry = await strapi.services.enquiry.findOne({ id });
    if (!enquiry) {
      return ctx.notFound("Enquiry not found");
    }
    return enquiry;
  },

  async create(ctx) {
    const enquiry = await strapi.services.enquiry.create(ctx.request.body);
    return enquiry;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const enquiry = await strapi.services.enquiry.update(
      { id },
      ctx.request.body
    );
    return enquiry;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deleted = await strapi.services.enquiry.delete({ id });
    return deleted;
  },
};
