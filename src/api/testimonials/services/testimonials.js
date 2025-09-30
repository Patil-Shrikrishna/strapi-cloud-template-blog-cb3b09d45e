"use strict";

module.exports = {
  async find(params, populate) {
    return strapi.query("testimonial").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("testimonial").findOne(params, populate);
  },

  async create(data) {
    return strapi.query("testimonial").create(data);
  },

  async update(params, data) {
    return strapi.query("testimonial").update(params, data);
  },

  async delete(params) {
    return strapi.query("testimonial").delete(params);
  },
};
