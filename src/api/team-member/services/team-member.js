"use strict";

module.exports = {
  async find(params, populate) {
    return strapi.query("team-member").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("team-member").findOne(params, populate);
  },

  async create(data) {
    return strapi.query("team-member").create(data);
  },

  async update(params, data) {
    return strapi.query("team-member").update(params, data);
  },

  async delete(params) {
    return strapi.query("team-member").delete(params);
  },
};
