"use strict";

module.exports = {
  async find(ctx) {
    const pages = await strapi.services.page.find(ctx.query);
    return pages;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const page = await strapi.services.page.findOne({ id });
    if (!page) {
      return ctx.notFound("Page not found");
    }
    return page;
  },

  async create(ctx) {
    const page = await strapi.services.page.create(ctx.request.body);
    return page;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const page = await strapi.services.page.update({ id }, ctx.request.body);
    return page;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deleted = await strapi.services.page.delete({ id });
    return deleted;
  },
};
