"use strict";

module.exports = {
  async find(params, populate) {
    return strapi.query("page").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("page").findOne(params, populate);
  },

  async create(data) {
    return strapi.query("page").create(data);
  },

  async update(params, data) {
    return strapi.query("page").update(params, data);
  },

  async delete(params) {
    return strapi.query("page").delete(params);
  },
};
