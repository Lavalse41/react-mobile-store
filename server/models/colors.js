module.exports = (sequelize, DataTypes) => {
  const colors = sequelize.define(
    "colors",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING },
      code: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return colors;
};
