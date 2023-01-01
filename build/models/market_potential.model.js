"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class Market_potentialModel {
    // create new Market_potential
    createMarket_potential(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `INSERT INTO market_potentials(user_id,bl_id,bu_id,account_type_id,account_id,account_area,knee_replacement,hip_replacement,number_of_operation_rooms,number_of_Trauma_cases_month,neuro_surgery,cardiothoracic,oncology,urology,liver_transplant,kidney_transplant,gynecology,general_surgery,number_of_plasma_bags_dispensed,open_heart,number_of_ICU_beds,number_of_Plasma_Autoclaves,load_of_Plasma_autoclave_day,rate_of_pouches_load_day_of_Instruments,number_of_Steam_Autoclaves,load_of_Steam_autoclave_day,rate_of_pouches_load_day_of_Dressings,ortho,cardio,neuro,transplant,ostomy,diabetic_Foot_Ulcers,pressure_Ulcers,burns,spinal_Chord_Injury,pcnl,furs,total_ed_cases,number_of_ed_cases_operated,number_of_ed_recurrent_cases,cycle_rate,total_number_of_operations_per,total_number_of_operations_per_month,number_of_renting_cases_month,cost_of_renting_case,open_surgery,basic_laproscopy,advanced_laproscopy,nose,ear,larynx,diagnostic,chest_adult_cases,chest_Pediatric_cases,thorax_adult_cases,thorax_Pediatric_cases,myomectomy,hysterectomy,laproscopic_gyn,diagnostic_hysteroscopy,operative_hysteroscopy,number_of_kidney_stone_cases,endoscopy,cranial_navigation,neuro_biopsy,stereotactic_neurosurgery,number_of_inpatient_beds,bariatric_surgery,uro_surgery,gyn_surgery,pediatric_surgery,cardiovascular_surgery,ent_surgery,ophthalmolgy,ortho_surgery,number_of_devices_tested_year) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76,$77) RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.account_type_id, b.account_id, b.account_area, b.knee_replacement, b.hip_replacement, b.number_of_operation_rooms, b.number_of_Trauma_cases_month, b.neuro_surgery, b.cardiothoracic, b.oncology, b.urology, b.liver_transplant, b.kidney_transplant, b.gynecology, b.general_surgery, b.number_of_plasma_bags_dispensed, b.open_heart, b.number_of_ICU_beds, b.number_of_Plasma_Autoclaves, b.load_of_Plasma_autoclave_day, b.rate_of_pouches_load_day_of_Instruments, b.number_of_Steam_Autoclaves, b.load_of_Steam_autoclave_day, b.rate_of_pouches_load_day_of_Dressings, b.ortho, b.cardio, b.neuro, b.transplant, b.ostomy, b.diabetic_Foot_Ulcers, b.pressure_Ulcers, b.burns, b.spinal_Chord_Injury, b.pcnl, b.furs, b.total_ed_cases, b.number_of_ed_cases_operated, b.number_of_ed_recurrent_cases, b.cycle_rate, b.total_number_of_operations_per, b.total_number_of_operations_per_month, b.number_of_renting_cases_month, b.cost_of_renting_case, b.open_surgery, b.basic_laproscopy, b.advanced_laproscopy, b.nose, b.ear, b.larynx, b.diagnostic, b.chest_adult_cases, b.chest_Pediatric_cases, b.thorax_adult_cases, b.thorax_Pediatric_cases, b.myomectomy, b.hysterectomy, b.laproscopic_gyn, b.diagnostic_hysteroscopy, b.operative_hysteroscopy, b.number_of_kidney_stone_cases, b.endoscopy, b.cranial_navigation, b.neuro_biopsy, b.stereotactic_neurosurgery, b.number_of_inpatient_beds, b.bariatric_surgery, b.uro_surgery, b.gyn_surgery, b.pediatric_surgery, b.cardiovascular_surgery, b.ent_surgery, b.ophthalmolgy, b.ortho_surgery, b.number_of_devices_tested_year,]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to create this Market_potential Error : ${err.message}`);
            }
        });
    }
    // get one Market_potential by id
    getOneMarket_potential(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_potentials WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to get this Market_potential by id Error : ${err.message}`);
            }
        });
    }
    // get all Market_potentials
    getAllMarket_potentials() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * from market_potentials`;
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Unable to get these Market_potentials Error : ${err.message}`);
            }
        });
    }
    // udate one Market_potential by id
    updateMarket_potential(b) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `UPDATE market_potentials SET user_id=$1,bl_id=$2,bu_id=$3,account_type_id=$4,account_id=$5,account_area=$6,knee_replacement=$7,hip_replacement=$8,number_of_operation_rooms=$9,number_of_Trauma_cases_month=$10,neuro_surgery=$11,cardiothoracic=$12,oncology=$13,urology=$14,liver_transplant=$15,kidney_transplant=$16,gynecology=$17,general_surgery=$18,number_of_plasma_bags_dispensed=$19,open_heart=$20,number_of_ICU_beds=$21,number_of_Plasma_Autoclaves=$22,load_of_Plasma_autoclave_day=$23,rate_of_pouches_load_day_of_Instruments=$24,number_of_Steam_Autoclaves=$25,load_of_Steam_autoclave_day=$26,rate_of_pouches_load_day_of_Dressings=$27,ortho=$28,cardio=$29,neuro=$30,transplant=$31,ostomy=$32,diabetic_Foot_Ulcers=$33,pressure_Ulcers=$34,burns=$35,spinal_Chord_Injury=$36,pcnl=$37,furs=$38,total_ed_cases=$39,number_of_ed_cases_operated=$40,number_of_ed_recurrent_cases=$41,cycle_rate=$42,total_number_of_operations_per=$43,total_number_of_operations_per_month=$44,number_of_renting_cases_month=$45,cost_of_renting_case=$46,open_surgery=$47,basic_laproscopy=$48,advanced_laproscopy=$49,nose=$50,ear=$51,larynx=$52,diagnostic=$53,chest_adult_cases=$54,chest_Pediatric_cases=$55,thorax_adult_cases=$56,thorax_Pediatric_cases=$57,myomectomy=$58,hysterectomy=$59,laproscopic_gyn=$60,diagnostic_hysteroscopy=$61,operative_hysteroscopy=$62,number_of_kidney_stone_cases=$63,endoscopy=$64,cranial_navigation=$65,neuro_biopsy=$66,stereotactic_neurosurgery=$67,number_of_inpatient_beds=$68,bariatric_surgery=$69,uro_surgery=$70,gyn_surgery=$71,pediatric_surgery=$72,cardiovascular_surgery=$73,ent_surgery=$74,ophthalmolgy=$75,ortho_surgery=$76,number_of_devices_tested_year=$77 WHERE id=$78 RETURNING *`;
                const result = yield conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.account_type_id, b.account_id, b.account_area, b.knee_replacement, b.hip_replacement, b.number_of_operation_rooms, b.number_of_Trauma_cases_month, b.neuro_surgery, b.cardiothoracic, b.oncology, b.urology, b.liver_transplant, b.kidney_transplant, b.gynecology, b.general_surgery, b.number_of_plasma_bags_dispensed, b.open_heart, b.number_of_ICU_beds, b.number_of_Plasma_Autoclaves, b.load_of_Plasma_autoclave_day, b.rate_of_pouches_load_day_of_Instruments, b.number_of_Steam_Autoclaves, b.load_of_Steam_autoclave_day, b.rate_of_pouches_load_day_of_Dressings, b.ortho, b.cardio, b.neuro, b.transplant, b.ostomy, b.diabetic_Foot_Ulcers, b.pressure_Ulcers, b.burns, b.spinal_Chord_Injury, b.pcnl, b.furs, b.total_ed_cases, b.number_of_ed_cases_operated, b.number_of_ed_recurrent_cases, b.cycle_rate, b.total_number_of_operations_per, b.total_number_of_operations_per_month, b.number_of_renting_cases_month, b.cost_of_renting_case, b.open_surgery, b.basic_laproscopy, b.advanced_laproscopy, b.nose, b.ear, b.larynx, b.diagnostic, b.chest_adult_cases, b.chest_Pediatric_cases, b.thorax_adult_cases, b.thorax_Pediatric_cases, b.myomectomy, b.hysterectomy, b.laproscopic_gyn, b.diagnostic_hysteroscopy, b.operative_hysteroscopy, b.number_of_kidney_stone_cases, b.endoscopy, b.cranial_navigation, b.neuro_biopsy, b.stereotactic_neurosurgery, b.number_of_inpatient_beds, b.bariatric_surgery, b.uro_surgery, b.gyn_surgery, b.pediatric_surgery, b.cardiovascular_surgery, b.ent_surgery, b.ophthalmolgy, b.ortho_surgery, b.number_of_devices_tested_year, b.id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to update this Market_potential Error : ${err.message}`);
            }
        });
    }
    // delete one Market_potential by id
    deleteMarket_potential(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `DELETE FROM market_potentials WHERE id=($1) RETURNING *`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Unable to Delete this Market_potential Error : ${err.message}`);
            }
        });
    }
}
exports.default = Market_potentialModel;
