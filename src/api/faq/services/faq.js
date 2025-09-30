"use strict";

module.exports = {
  async find(params, populate) {
    return strapi.query("faq").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("faq").findOne(params, populate);
  },

  async create(data) {
    return strapi.query("faq").create(data);
  },

  async update(params, data) {
    return strapi.query("faq").update(params, data);
  },

  async delete(params) {
    return strapi.query("faq").delete(params);
  },
};
