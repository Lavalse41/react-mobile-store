module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.STRING,
      },
      brandId: {
        type: DataTypes.UUID,
        field: "brand_id",
        references: {
          model: "brands", // Use the model name as a string
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  //   Products.associate = (models) => {
  //     Products.belongsTo(models.Brands, { foreignKey: "brandId" });
  //   };

  return Products;
};
