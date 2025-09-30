"use strict";

module.exports = {
  async find(ctx) {
    const teamMembers = await strapi.services["team-member"].find(ctx.query);
    return teamMembers;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const teamMember = await strapi.services["team-member"].findOne({ id });
    if (!teamMember) {
      return ctx.notFound("Team member not found");
    }
    return teamMember;
  },

  async create(ctx) {
    const teamMember = await strapi.services["team-member"].create(
      ctx.request.body
    );
    return teamMember;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const teamMember = await strapi.services["team-member"].update(
      { id },
      ctx.request.body
    );
    return teamMember;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const deleted = await strapi.services["team-member"].delete({ id });
    return deleted;
  },
};
