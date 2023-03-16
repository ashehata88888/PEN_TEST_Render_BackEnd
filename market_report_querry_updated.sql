    SELECT 
market_potentials.id,
market_potentials.session_created_at,
users.user_name,
users.user_mail,
bls.bl_name,
bus.bu_name,
account_types.account_type,
accounts.account_name,
accounts.account_area,
market_potentials.knee_replacement,
market_potentials.hip_replacement,
market_potentials.number_of_operation_rooms,
market_potentials.number_of_Trauma_cases_month,
market_potentials.neuro_surgery,
market_potentials.cardiothoracic,
market_potentials.oncology,
market_potentials.urology,
market_potentials.liver_transplant,
market_potentials.kidney_transplant,
market_potentials.gynecology,
market_potentials.general_surgery,
market_potentials.number_of_plasma_bags_dispensed,
market_potentials.open_heart,
market_potentials.number_of_ICU_beds,
market_potentials.number_of_Plasma_Autoclaves,
market_potentials.load_of_Plasma_autoclave_day,
market_potentials.rate_of_pouches_load_day_of_Instruments,
market_potentials.number_of_Steam_Autoclaves,
market_potentials.load_of_Steam_autoclave_day,
market_potentials.rate_of_pouches_load_day_of_Dressings,
market_potentials.ortho,
market_potentials.cardio,
market_potentials.neuro,
market_potentials.transplant,
market_potentials.ostomy,
market_potentials.diabetic_Foot_Ulcers,
market_potentials.pressure_Ulcers,
market_potentials.burns,
market_potentials.spinal_Chord_Injury,
market_potentials.pcnl,
market_potentials.furs,
market_potentials.total_ed_cases,
market_potentials.number_of_ed_cases_operated,
market_potentials.number_of_ed_recurrent_cases,
market_potentials.cycle_rate,
market_potentials.total_number_of_operations_per,
market_potentials.total_number_of_operations_per_month,
market_potentials.number_of_renting_cases_month,
market_potentials.cost_of_renting_case,
market_potentials.open_surgery,
market_potentials.basic_laproscopy,
market_potentials.advanced_laproscopy,
market_potentials.nose,
market_potentials.ear,
market_potentials.larynx,
market_potentials.diagnostic,
market_potentials.chest_adult_cases,
market_potentials.chest_Pediatric_cases,
market_potentials.thorax_adult_cases,
market_potentials.thorax_Pediatric_cases,
market_potentials.myomectomy,
market_potentials.hysterectomy,
market_potentials.laproscopic_gyn,
market_potentials.diagnostic_hysteroscopy,
market_potentials.operative_hysteroscopy,
market_potentials.number_of_kidney_stone_cases,
market_potentials.endoscopy,
market_potentials.cranial_navigation,
market_potentials.neuro_biopsy,
market_potentials.stereotactic_neurosurgery,
market_potentials.number_of_inpatient_beds,
market_potentials.bariatric_surgery,
market_potentials.uro_surgery,
market_potentials.gyn_surgery,
market_potentials.pediatric_surgery,
market_potentials.cardiovascular_surgery,
market_potentials.ent_surgery,
market_potentials.ophthalmolgy,
market_potentials.ortho_surgery,
market_potentials.number_of_devices_tested_year,
market_size.id as Market_size_ID,
suppliers.supplier_name,
product_families.product_family,
item_groups.item_group,
market_size_records.id as Market_size_Record_id,
market_size_records.egmed_consumption as EGMED_consumption,
market_size_records.total_consumption,
competitors.competitor_name,
market_size_records.item_qty1,
product_status.product_status_name as Item_Status1,
market_size_records.item_qty2,
product_status2.product_status_name as Item_Status2

     FROM market_potentials

     LEFT JOIN users ON (users.id = market_potentials.user_id)
         LEFT JOIN bls ON (bls.id = market_potentials.bl_id)
         LEFT JOIN bus ON (bus.id = market_potentials.bu_id)
         LEFT JOIN account_types ON (account_types.id = market_potentials.account_type_id)
         LEFT JOIN accounts ON (accounts.id = market_potentials.account_id)

    Right JOIN market_size ON (market_size.market_potential_id = market_potentials.id)
         LEFT JOIN suppliers ON (suppliers.id = market_size.supplier_id)
         LEFT JOIN product_families ON (product_families.id = market_size.product_family_id)
         

    Right JOIN market_size_records ON (market_size_records.market_size_id = market_size.id) 
         LEFT JOIN competitors ON (competitors.id = market_size_records.competitor_id)
         LEFT JOIN product_status ON (product_status.id = market_size_records.item_status1_id)
         LEFT JOIN product_status2 ON (product_status2.id = market_size_records.item_status2_id)
         LEFT JOIN item_groups ON (item_groups.id = market_size_records.item_group_id) 
         
 ORDER BY market_potentials.id ASC;



















-- these comment from activity sql

         -- LEFT JOIN call_products ON (call_products.id IN (SELECT call_products.id FROM call_products WHERE call_products.activity_id = activities.id))
         -- LEFT JOIN suppliers ON (suppliers.id IN (SELECT  DISTINCT suppliers.id FROM call_products WHERE call_products.activity_id = activities.id AND call_products.supplier_id = suppliers.id))
         -- LEFT JOIN product_families ON (product_families.id IN (SELECT DISTINCT product_families.id FROM call_products WHERE call_products.activity_id = activities.id AND call_products.product_family_id = product_families.id AND call_products.supplier_id = suppliers.id))
         -- LEFT JOIN item_groups ON (item_groups.id IN (select item_groups.id FROM call_products WHERE call_products.activity_id = activities.id AND call_products.item_group_id = item_groups.id))
         -- LEFT JOIN objectives ON (objectives.id IN (select objectives.id FROM call_products WHERE call_products.activity_id = activities.id AND call_products.objective_id = objectives.id))
         -- LEFT JOIN statuses ON (statuses.id IN (select statuses.id FROM call_products WHERE call_products.activity_id = activities.id AND call_products.status_id = statuses.id
         -- LIMIT ( SELECT MAX(id) FROM activities)))

        --  ORDER BY activities.id ASC;





         --          )

-- to 'D:/PEN/PEN_DEV/git-packup/git/db/tables13_10/export/FirstMarket_Report.csv' csv header;