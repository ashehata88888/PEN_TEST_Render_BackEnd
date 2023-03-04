import Market_potential from '../types/market_potential.type'
import db from '../database'

class Market_potentialModel {
    // create new Market_potential
    async createMarket_potential(b: Market_potential): Promise<Market_potential> {
        try {
            const conn = await db.connect()
            const sql = `INSERT INTO market_potentials(user_id,bl_id,bu_id,account_type_id,account_id,knee_replacement,hip_replacement,number_of_operation_rooms,number_of_Trauma_cases_month,neuro_surgery,cardiothoracic,oncology,urology,liver_transplant,kidney_transplant,gynecology,general_surgery,number_of_plasma_bags_dispensed,open_heart,number_of_ICU_beds,number_of_Plasma_Autoclaves,load_of_Plasma_autoclave_day,rate_of_pouches_load_day_of_Instruments,number_of_Steam_Autoclaves,load_of_Steam_autoclave_day,rate_of_pouches_load_day_of_Dressings,ortho,cardio,neuro,transplant,ostomy,diabetic_Foot_Ulcers,pressure_Ulcers,burns,spinal_Chord_Injury,pcnl,furs,total_ed_cases,number_of_ed_cases_operated,number_of_ed_recurrent_cases,cycle_rate,total_number_of_operations_per,total_number_of_operations_per_month,number_of_renting_cases_month,cost_of_renting_case,open_surgery,basic_laproscopy,advanced_laproscopy,nose,ear,larynx,diagnostic,chest_adult_cases,chest_Pediatric_cases,thorax_adult_cases,thorax_Pediatric_cases,myomectomy,hysterectomy,laproscopic_gyn,diagnostic_hysteroscopy,operative_hysteroscopy,number_of_kidney_stone_cases,endoscopy,cranial_navigation,neuro_biopsy,stereotactic_neurosurgery,number_of_inpatient_beds,bariatric_surgery,uro_surgery,gyn_surgery,pediatric_surgery,cardiovascular_surgery,ent_surgery,ophthalmolgy,ortho_surgery,number_of_devices_tested_year) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63,$64,$65,$66,$67,$68,$69,$70,$71,$72,$73,$74,$75,$76) RETURNING *`

            const result = await conn.query(sql,
                [b.user_id, b.bl_id, b.bu_id, b.account_type_id, b.account_id, b.knee_replacement, b.hip_replacement, b.number_of_operation_rooms, b.number_of_Trauma_cases_month, b.neuro_surgery, b.cardiothoracic, b.oncology, b.urology, b.liver_transplant, b.kidney_transplant, b.gynecology, b.general_surgery, b.number_of_plasma_bags_dispensed, b.open_heart, b.number_of_ICU_beds, b.number_of_Plasma_Autoclaves, b.load_of_Plasma_autoclave_day, b.rate_of_pouches_load_day_of_Instruments, b.number_of_Steam_Autoclaves, b.load_of_Steam_autoclave_day, b.rate_of_pouches_load_day_of_Dressings, b.ortho, b.cardio, b.neuro, b.transplant, b.ostomy, b.diabetic_Foot_Ulcers, b.pressure_Ulcers, b.burns, b.spinal_Chord_Injury, b.pcnl, b.furs, b.total_ed_cases, b.number_of_ed_cases_operated, b.number_of_ed_recurrent_cases, b.cycle_rate, b.total_number_of_operations_per, b.total_number_of_operations_per_month, b.number_of_renting_cases_month, b.cost_of_renting_case, b.open_surgery, b.basic_laproscopy, b.advanced_laproscopy, b.nose, b.ear, b.larynx, b.diagnostic, b.chest_adult_cases, b.chest_Pediatric_cases, b.thorax_adult_cases, b.thorax_Pediatric_cases, b.myomectomy, b.hysterectomy, b.laproscopic_gyn, b.diagnostic_hysteroscopy, b.operative_hysteroscopy, b.number_of_kidney_stone_cases, b.endoscopy, b.cranial_navigation, b.neuro_biopsy, b.stereotactic_neurosurgery, b.number_of_inpatient_beds, b.bariatric_surgery, b.uro_surgery, b.gyn_surgery, b.pediatric_surgery, b.cardiovascular_surgery, b.ent_surgery, b.ophthalmolgy, b.ortho_surgery, b.number_of_devices_tested_year,])

            conn.release()

            return result.rows[0]
        } catch (err) {
            throw new Error(`Unable to create this Market_potential Error : ${(err as Error).message}`)
        }
    }
    // get one Market_potential by id
    async getOneMarket_potential(id: string): Promise<Market_potential> {
        try {
            const conn = await db.connect()
            const sql = `SELECT * from market_potentials WHERE id=($1)`
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Unable to get this Market_potential by id Error : ${(err as Error).message}`)
        }
    }

    // get all Market_potentials

    async getAllMarket_potentials(): Promise<Market_potential[]> {
        try {
            const conn = await db.connect()
            const sql = `SELECT * from market_potentials`
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error(`Unable to get these Market_potentials Error : ${(err as Error).message}`)
        }
    }

    // udate one Market_potential by id
    async updateMarket_potential(b: Market_potential): Promise<Market_potential> {
        try {
            const conn = await db.connect()
            const sql = `UPDATE market_potentials SET user_id=$1,bl_id=$2,bu_id=$3,account_type_id=$4,account_id=$5,knee_replacement=$6,hip_replacement=$7,number_of_operation_rooms=$8,number_of_Trauma_cases_month=$9,neuro_surgery=$10,cardiothoracic=$11,oncology=$12,urology=$13,liver_transplant=$14,kidney_transplant=$15,gynecology=$16,general_surgery=$17,number_of_plasma_bags_dispensed=$18,open_heart=$19,number_of_ICU_beds=$20,number_of_Plasma_Autoclaves=$21,load_of_Plasma_autoclave_day=$22,rate_of_pouches_load_day_of_Instruments=$23,number_of_Steam_Autoclaves=$24,load_of_Steam_autoclave_day=$25,rate_of_pouches_load_day_of_Dressings=$26,ortho=$27,cardio=$28,neuro=$29,transplant=$30,ostomy=$31,diabetic_Foot_Ulcers=$32,pressure_Ulcers=$33,burns=$34,spinal_Chord_Injury=$35,pcnl=$36,furs=$37,total_ed_cases=$38,number_of_ed_cases_operated=$39,number_of_ed_recurrent_cases=$40,cycle_rate=$41,total_number_of_operations_per=$42,total_number_of_operations_per_month=$43,number_of_renting_cases_month=$44,cost_of_renting_case=$45,open_surgery=$46,basic_laproscopy=$47,advanced_laproscopy=$48,nose=$49,ear=$50,larynx=$51,diagnostic=$52,chest_adult_cases=$53,chest_Pediatric_cases=$54,thorax_adult_cases=$55,thorax_Pediatric_cases=$56,myomectomy=$57,hysterectomy=$58,laproscopic_gyn=$59,diagnostic_hysteroscopy=$60,operative_hysteroscopy=$61,number_of_kidney_stone_cases=$62,endoscopy=$63,cranial_navigation=$64,neuro_biopsy=$65,stereotactic_neurosurgery=$66,number_of_inpatient_beds=$67,bariatric_surgery=$68,uro_surgery=$69,gyn_surgery=$70,pediatric_surgery=$71,cardiovascular_surgery=$72,ent_surgery=$73,ophthalmolgy=$74,ortho_surgery=$75,number_of_devices_tested_year=$76 WHERE id=$77 RETURNING *`
            const result = await conn.query(sql, [b.user_id, b.bl_id, b.bu_id, b.account_type_id, b.account_id, b.knee_replacement, b.hip_replacement, b.number_of_operation_rooms, b.number_of_Trauma_cases_month, b.neuro_surgery, b.cardiothoracic, b.oncology, b.urology, b.liver_transplant, b.kidney_transplant, b.gynecology, b.general_surgery, b.number_of_plasma_bags_dispensed, b.open_heart, b.number_of_ICU_beds, b.number_of_Plasma_Autoclaves, b.load_of_Plasma_autoclave_day, b.rate_of_pouches_load_day_of_Instruments, b.number_of_Steam_Autoclaves, b.load_of_Steam_autoclave_day, b.rate_of_pouches_load_day_of_Dressings, b.ortho, b.cardio, b.neuro, b.transplant, b.ostomy, b.diabetic_Foot_Ulcers, b.pressure_Ulcers, b.burns, b.spinal_Chord_Injury, b.pcnl, b.furs, b.total_ed_cases, b.number_of_ed_cases_operated, b.number_of_ed_recurrent_cases, b.cycle_rate, b.total_number_of_operations_per, b.total_number_of_operations_per_month, b.number_of_renting_cases_month, b.cost_of_renting_case, b.open_surgery, b.basic_laproscopy, b.advanced_laproscopy, b.nose, b.ear, b.larynx, b.diagnostic, b.chest_adult_cases, b.chest_Pediatric_cases, b.thorax_adult_cases, b.thorax_Pediatric_cases, b.myomectomy, b.hysterectomy, b.laproscopic_gyn, b.diagnostic_hysteroscopy, b.operative_hysteroscopy, b.number_of_kidney_stone_cases, b.endoscopy, b.cranial_navigation, b.neuro_biopsy, b.stereotactic_neurosurgery, b.number_of_inpatient_beds, b.bariatric_surgery, b.uro_surgery, b.gyn_surgery, b.pediatric_surgery, b.cardiovascular_surgery, b.ent_surgery, b.ophthalmolgy, b.ortho_surgery, b.number_of_devices_tested_year, b.id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Unable to update this Market_potential Error : ${(err as Error).message}`)
        }
    }
    // delete one Market_potential by id

    async deleteMarket_potential(id: string): Promise<Market_potential> {
        try {
            const conn = await db.connect()
            const sql = `DELETE FROM market_potentials WHERE id=($1) RETURNING *`
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Unable to Delete this Market_potential Error : ${(err as Error).message}`)
        }
    }


}

export default Market_potentialModel
