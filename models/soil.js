<<<<<<< HEAD
// module.exports = function(sequelize, DataTypes){
//     var Soil = sequelize.define("soil", {
//         Record_number: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true
//         },
//         Entry_date: {
//             type: DataTypes.STRING,
//         },
//         Study_number: {
//             type: DataTypes.INTEGER,
//             defaultValue: null
//         },
//         Author: {
//             type: DataTypes.STRING
//         },
//         Duplicate_record: {
//             type: DataTypes.STRING
//         },
//         Quality_flag: {
//             type: DataTypes.STRING
//         },
//         Contributor: {
//             type: DataTypes.STRING
//         },
//         Country: {
//             type: DataTypes.STRING
//         },
//         Region: {
//             type: DataTypes.STRING
//         },
//         Site_name: {
//             type: DataTypes.STRING
//         },
//         Study_midyear: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         YearsOfData: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Latitude: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Longitude: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Elevation: {
//             type: DataTypes.STRING,
//         },
//         Manipulation: {
//             type: DataTypes.STRING
//         },
//         Manipulation_level: {
//             type: DataTypes.STRING
//         },
//         Age_ecosystem: {
//             type: DataTypes.STRING
//         },
//         Age_disturbance: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Species: {
//             type: DataTypes.STRING
//         },
//         Biome: {
//             type: DataTypes.STRING
//         },
//         Ecosystem_type: {
//             type: DataTypes.STRING
//         },
//         Ecosystem_state: {
//             type: DataTypes.STRING
//         },
//         Leaf_habit: {
//             type: DataTypes.STRING
//         },
//         Stage: {
//             type: DataTypes.STRING
//         },
//         Soil_type: {
//             type: DataTypes.STRING
//         },
//         Soil_drainage: {
//             type: DataTypes.STRING
//         },
//         Soil_BD: {
//             type: DataTypes.STRING
//         },
//         Soil_CN: {
//             type: DataTypes.STRING
//         },
//         Soil_sand: {
//             type: DataTypes.STRING
//         },
//         Soil_silt: {
//             type: DataTypes.STRING
//         },
//         Soil_clay: {
//             type: DataTypes.STRING
//         },
//         MAT: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         MAP: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         PET: {
//             type: DataTypes.STRING
//         },
//         Study_temp: {
//             type: DataTypes.STRING
//         },
//         Study_precip: {
//             type: DataTypes.STRING
//         },
//         Meas_method: {
//             type: DataTypes.STRING
//         },
//         Annual_coverage: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Partition_method: {
//             type: DataTypes.STRING
//         },
//         Rs_annual: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Rs_annual_err: {
//             type: DataTypes.STRING
//         },
//         Rs_interann_err: {
//             type: DataTypes.STRING
//         },
//         Rs_max: {
//             type: DataTypes.STRING
//         },
//         Rs_maxday: {
//             type: DataTypes.STRING
//         },
//         Rs_min: {
//             type: DataTypes.STRING
//         },
//         Rs_minday: {
//             type: DataTypes.STRING
//         },
//         Rlitter_annual: {
//             type: DataTypes.STRING
//         },
//         Ra_annual: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Rh_annual: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         RC_annual: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Rs_spring: {
//             type: DataTypes.STRING
//         },
//         Rs_summer: {
//             type: DataTypes.STRING
//         },
//         Rs_autumn: {
//             type: DataTypes.STRING
//         },
//         Rs_winter: {
//             type: DataTypes.STRING
//         },
//         Rs_growingseason: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null  
//         },
//         Rs_wet: {
//             type: DataTypes.STRING
//         },
//         Rs_dry: {
//             type: DataTypes.STRING
//         },
//         RC_seasonal: {
//             type: DataTypes.STRING
//         },
//         RC_season: {
//             type: DataTypes.STRING
//         },
//         Model_type: {
//             type: DataTypes.STRING
//         },
//         Temp_effect: {
//             type: DataTypes.STRING
//         },
//         Model_output_units: {
//             type: DataTypes.STRING
//         },
//         Model_temp_min: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_temp_max: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_N: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_R2: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         T_depth: {
//             type: DataTypes.STRING,
//             defaultValue: null
//         },
//         Model_paramA: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_paramB: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_paramC: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_paramD: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Model_paramE: {
//             type: DataTypes.STRING
//         },
//         WC_effect: {
//             type: DataTypes.STRING
//         },
//         R10: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Q10_0_10: {
//             type: DataTypes.STRING  
//         },
//         Q10_5_15: {
//             type: DataTypes.STRING
//         },
//         Q10_other1: {
//             type: DataTypes.STRING
//         },
//         Q10_10_20: {
//             type: DataTypes.STRING
//         },
//         Q10_0_20: {
//             type: DataTypes.STRING
//         },
//         Q10_other1_temp_min: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Q10_other1_temp_max: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Q10_other2: {
//             type: DataTypes.STRING
//         },
//         Q10_other2_temp_min: {
//             type: DataTypes.INTEGER,
//             defaultValue: null
//         },
//         Q10_other2_temp_max: {
//             type: DataTypes.INTEGER,
//             defaultValue: null
//         },
//         GPP: {
//             type: DataTypes.STRING
//         },
//         ER: {
//             type: DataTypes.STRING
//         },
//         NEP: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         NPP: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         ANPP: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         BNPP: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         NPP_FR: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         TBCA: {
//             type: DataTypes.STRING
//         },
//         Litter_flux: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Rootlitter_flux: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         TotDet_flux: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         Ndep: {
//             type: DataTypes.STRING
//         },
//         LAI: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         BA: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_veg_total: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_AG: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_BG: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_CR: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_FR: {
//             type: DataTypes.DOUBLE,
//             defaultValue: null
//         },
//         C_litter: {
//             type: DataTypes.STRING
//         },
//         C_soilmineral: {
//             type: DataTypes.STRING
//         },
//         C_soildepth: {
//             type: DataTypes.STRING
//         },
//         Notes: {
//             type: DataTypes.STRING
//         }
//     });
//     return Soil;
// }
=======
module.exports = function(sequelize, DataTypes){
    var Soil = sequelize.define("soil", {
        Record_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Entry_date: {
            type: DataTypes.STRING,
        },
        Study_number: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        Author: {
            type: DataTypes.STRING
        },
        Duplicate_record: {
            type: DataTypes.STRING
        },
        Quality_flag: {
            type: DataTypes.STRING
        },
        Contributor: {
            type: DataTypes.STRING
        },
        Country: {
            type: DataTypes.STRING
        },
        Region: {
            type: DataTypes.STRING
        },
        Site_name: {
            type: DataTypes.STRING
        },
        Study_midyear: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        YearsOfData: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Latitude: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Longitude: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Elevation: {
            type: DataTypes.STRING,
        },
        Manipulation: {
            type: DataTypes.STRING
        },
        Manipulation_level: {
            type: DataTypes.STRING
        },
        Age_ecosystem: {
            type: DataTypes.STRING
        },
        Age_disturbance: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Species: {
            type: DataTypes.STRING
        },
        Biome: {
            type: DataTypes.STRING
        },
        Ecosystem_type: {
            type: DataTypes.STRING
        },
        Ecosystem_state: {
            type: DataTypes.STRING
        },
        Leaf_habit: {
            type: DataTypes.STRING
        },
        Stage: {
            type: DataTypes.STRING
        },
        Soil_type: {
            type: DataTypes.STRING
        },
        Soil_drainage: {
            type: DataTypes.STRING
        },
        Soil_BD: {
            type: DataTypes.STRING
        },
        Soil_CN: {
            type: DataTypes.STRING
        },
        Soil_sand: {
            type: DataTypes.STRING
        },
        Soil_silt: {
            type: DataTypes.STRING
        },
        Soil_clay: {
            type: DataTypes.STRING
        },
        MAT: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        MAP: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        PET: {
            type: DataTypes.STRING
        },
        Study_temp: {
            type: DataTypes.STRING
        },
        Study_precip: {
            type: DataTypes.STRING
        },
        Meas_method: {
            type: DataTypes.STRING
        },
        Annual_coverage: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Partition_method: {
            type: DataTypes.STRING
        },
        Rs_annual: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Rs_annual_err: {
            type: DataTypes.STRING
        },
        Rs_interann_err: {
            type: DataTypes.STRING
        },
        Rs_max: {
            type: DataTypes.STRING
        },
        Rs_maxday: {
            type: DataTypes.STRING
        },
        Rs_min: {
            type: DataTypes.STRING
        },
        Rs_minday: {
            type: DataTypes.STRING
        },
        Rlitter_annual: {
            type: DataTypes.STRING
        },
        Ra_annual: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Rh_annual: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        RC_annual: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Rs_spring: {
            type: DataTypes.STRING
        },
        Rs_summer: {
            type: DataTypes.STRING
        },
        Rs_autumn: {
            type: DataTypes.STRING
        },
        Rs_winter: {
            type: DataTypes.STRING
        },
        Rs_growingseason: {
            type: DataTypes.DOUBLE,
            defaultValue: null  
        },
        Rs_wet: {
            type: DataTypes.STRING
        },
        Rs_dry: {
            type: DataTypes.STRING
        },
        RC_seasonal: {
            type: DataTypes.STRING
        },
        RC_season: {
            type: DataTypes.STRING
        },
        Model_type: {
            type: DataTypes.STRING
        },
        Temp_effect: {
            type: DataTypes.STRING
        },
        Model_output_units: {
            type: DataTypes.STRING
        },
        Model_temp_min: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_temp_max: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_N: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_R2: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        T_depth: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        Model_paramA: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_paramB: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_paramC: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_paramD: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Model_paramE: {
            type: DataTypes.STRING
        },
        WC_effect: {
            type: DataTypes.STRING
        },
        R10: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Q10_0_10: {
            type: DataTypes.STRING  
        },
        Q10_5_15: {
            type: DataTypes.STRING
        },
        Q10_other1: {
            type: DataTypes.STRING
        },
        Q10_10_20: {
            type: DataTypes.STRING
        },
        Q10_0_20: {
            type: DataTypes.STRING
        },
        Q10_other1_temp_min: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Q10_other1_temp_max: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Q10_other2: {
            type: DataTypes.STRING
        },
        Q10_other2_temp_min: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        Q10_other2_temp_max: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        GPP: {
            type: DataTypes.STRING
        },
        ER: {
            type: DataTypes.STRING
        },
        NEP: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        NPP: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        ANPP: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        BNPP: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        NPP_FR: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        TBCA: {
            type: DataTypes.STRING
        },
        Litter_flux: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Rootlitter_flux: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        TotDet_flux: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        Ndep: {
            type: DataTypes.STRING
        },
        LAI: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        BA: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_veg_total: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_AG: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_BG: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_CR: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_FR: {
            type: DataTypes.DOUBLE,
            defaultValue: null
        },
        C_litter: {
            type: DataTypes.STRING
        },
        C_soilmineral: {
            type: DataTypes.STRING
        },
        C_soildepth: {
            type: DataTypes.TEXT
        },
        Notes: {
            type: DataTypes.TEXT
        }
    });
    return Soil;
}
>>>>>>> master
