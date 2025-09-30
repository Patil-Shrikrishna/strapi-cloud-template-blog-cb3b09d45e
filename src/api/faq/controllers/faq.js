"use strict";

module.exports = {
  async find(ctx) {
    const faqs = await strapi.services.faq.find(ctx.query);
    return faqs;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const faq = await strapi.services.faq.findOne({ id });
    if (!faq) {
      return ctx.notFound("FAQ not found");
    }
    return faq;
  },

  async create(ctx) {
    const faq = await strapi.services.faq.create(ctx.request.body);
    return faq;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const faq = await strapi.services.faq.update({ id }, ctx.request.body);
    return faq;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deleted = await strapi.services.faq.delete({ id });
    return deleted;
  },
};
