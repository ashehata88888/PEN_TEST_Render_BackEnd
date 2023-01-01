CREATE TABLE market_potentials(
id SERIAL PRIMARY KEY,
session_created_at TIMESTAMPTZ  DEFAULT NOW(),
user_id INTEGER REFERENCES users(id),
bl_id INTEGER REFERENCES bls(id),
bu_id INTEGER REFERENCES bus(id),
account_type_id INTEGER REFERENCES account_types(id),
account_id INTEGER REFERENCES accounts(id),
knee_replacement INTEGER,
hip_replacement INTEGER,
number_of_operation_rooms INTEGER,
number_of_Trauma_cases_month INTEGER,
neuro_surgery INTEGER,
cardiothoracic INTEGER,
oncology INTEGER,
urology INTEGER,
liver_transplant INTEGER,
kidney_transplant INTEGER,
gynecology INTEGER,
general_surgery INTEGER,
number_of_plasma_bags_dispensed INTEGER,
open_heart INTEGER,
number_of_ICU_beds INTEGER,
number_of_Plasma_Autoclaves INTEGER,
load_of_Plasma_autoclave_day INTEGER,
rate_of_pouches_load_day_of_Instruments INTEGER,
number_of_Steam_Autoclaves INTEGER,
load_of_Steam_autoclave_day INTEGER,
rate_of_pouches_load_day_of_Dressings INTEGER,
ortho INTEGER,
cardio INTEGER,
neuro INTEGER,
transplant INTEGER,
ostomy INTEGER,
diabetic_Foot_Ulcers INTEGER,
pressure_Ulcers INTEGER,
burns INTEGER,
spinal_Chord_Injury INTEGER,
pcnl INTEGER,
furs INTEGER,
total_ed_cases INTEGER,
number_of_ed_cases_operated INTEGER,
number_of_ed_recurrent_cases INTEGER,
cycle_rate INTEGER,
total_number_of_operations_per INTEGER,
total_number_of_operations_per_month INTEGER,
number_of_renting_cases_month INTEGER,
cost_of_renting_case INTEGER,
open_surgery INTEGER,
basic_laproscopy INTEGER,
advanced_laproscopy INTEGER,
nose INTEGER,
ear INTEGER,
larynx INTEGER,
diagnostic INTEGER,
chest_adult_cases INTEGER,
chest_Pediatric_cases INTEGER,
thorax_adult_cases INTEGER,
thorax_Pediatric_cases INTEGER,
myomectomy INTEGER,
hysterectomy INTEGER,
laproscopic_gyn INTEGER,
diagnostic_hysteroscopy INTEGER,
operative_hysteroscopy INTEGER,
number_of_kidney_stone_cases INTEGER,
endoscopy INTEGER,
cranial_navigation INTEGER,
neuro_biopsy INTEGER,
stereotactic_neurosurgery INTEGER,
number_of_inpatient_beds INTEGER,
bariatric_surgery INTEGER,
uro_surgery INTEGER,
gyn_surgery INTEGER,
pediatric_surgery INTEGER,
cardiovascular_surgery INTEGER,
ent_surgery INTEGER,
ophthalmolgy INTEGER,
ortho_surgery INTEGER,
number_of_devices_tested_year INTEGER 
)
