module.exports = function (sequelize, DataTypes) {
    var Soil = sequelize.define("soil", {
        Record_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Contributor: {
            type: DataTypes.STRING,
            allowNull: false
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
        MyUnknownColumn: {
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
        Elevation: {
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
        SOil_type: {
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Partition_method: {
            type: DataTypes.STRING,
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

