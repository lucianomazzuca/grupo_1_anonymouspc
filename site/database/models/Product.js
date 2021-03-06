module.exports = (sequelize, dataTypes) => {

    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: dataTypes.INTEGER,
        },
        brand_id: {
            type: dataTypes.INTEGER,
        },
        model: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(8, 2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        features: {
            type: dataTypes.STRING(500),
        },
        status: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Categories,{
            as: "categories",
            foreignKey: "category_id"
        })

        Product.belongsTo(models.Brands,{
            as: "brands",
            foreignKey: "brand_id"
        })
    }

    // Product.associate = function(models){
    //     Product.belongsTo(models.Brands,{
    //         as: "brands",
    //         foreignKey: "id_brand"
    //     })
    // }

    return Product;
}