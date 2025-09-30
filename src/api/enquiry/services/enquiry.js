"use strict";

module.exports = {
  async find(params, populate) {
    return strapi.query("enquiry").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("enquiry").findOne(params, populate);
  },

  async create(data) {
    return strapi.query("enquiry").create(data);
  },

  async update(params, data) {
    return strapi.query("enquiry").update(params, data);
  },

  async delete(params) {
    return strapi.query("enquiry").delete(params);
  },
};
