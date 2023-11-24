"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          name: "Almond",
          code: "#eaddca",
        },
        {
          name: "Black",
          code: "#000000",
        },
        {
          name: "Aura Glow",
          code: "#c0a89e",
        },
        {
          name: "White",
          code: "#ffffff",
        },
        {
          name: "Gray",
          code: "#545454",
        },
        {
          name: "Blue",
          code: "#1981e3",
        },
        {
          name: "Purple",
          code: "#c48bc4",
        },
        {
          name: "Red",
          code: "#e32424",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
