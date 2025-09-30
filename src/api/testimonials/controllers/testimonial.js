"use strict";

module.exports = {
  async find(ctx) {
    const testimonial = await strapi.services.testimonial.find(ctx.query);
    return testimonial;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const testimonial = await strapi.services.testimonial.findOne({ id });
    if (!testimonial) {
      return ctx.notFound("Testimonial not found");
    }
    return testimonial;
  },

  async create(ctx) {
    const testimonial = await strapi.services.testimonial.create(
      ctx.request.body
    );
    return testimonial;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const testimonial = await strapi.services.testimonial.update(
      { id },
      ctx.request.body
    );
    return testimonial;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deleted = await strapi.services.testimonial.delete({ id });
    return deleted;
  },
};
