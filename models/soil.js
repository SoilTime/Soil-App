module.exports = function (sequelize, DataTypes) {
    var Soil = sequelize.define("Soil", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autIncrement:true,
            primaryKey: true
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Site_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Latitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Longitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Age_disturbance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Biome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Ecosystem_type: {
            type: DataTypes.STRING,   
        },
        Ecosystem_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Leaf_habit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Stage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Soil_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Soil_drainage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        MAT: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        MAP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Meas_method: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Meas_interval: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Annual_coverage: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Rs_annual: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Temp_effect: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Soil;
}

