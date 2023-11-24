module.exports = (sequelize, DataTypes) => {
  const brands = sequelize.define(
    "brands",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  brands.associate = (models) => {
    brands.hasMany(models.products, {
      onDelete: "cascade",
    });
  };

  return brands;
};
