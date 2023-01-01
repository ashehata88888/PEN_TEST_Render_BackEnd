SELECT 
 activities.id as Activity_ID, 
     activities.session_created_at,
     users.user_name,
     users.user_mail,
     bls.bl_name,
     bl_manager_name,
     bus.bu_name,
     activities.activity_date_from,
     activities.activity_date_to,
     activity_types.activity_type,
     account_types.account_type,
     accounts.account_name,
     accounts.account_area,
     purchase_methods.purchase_method,
     activities.comment,
     call_products.id AS Product_Call_ID,
     suppliers.supplier_name,
     product_families.product_family,
     item_groups.item_group,
     call_products.item_name,
     call_products.item_stock,
     objectives.objective_name,
     statuses.status_name,
     call_contacts.id as Call_Contact_ID,
     call_contacts.contact_person,
     call_contacts.mobile_number,
     authorities.authority_name,
     specialities.speciality_name,
     positions.position_name

     FROM activities

     LEFT JOIN users ON (users.id = activities.user_id) 
         LEFT JOIN bls ON (bls.id = activities.bl_id)
         LEFT JOIN bus ON (bus.id = activities.bu_id)
         LEFT JOIN activity_types ON (activity_types.id = activities.activity_type_id )
         LEFT  JOIN  account_types ON (account_types.id = activities.account_type_id) 
         LEFT  JOIN  accounts ON (accounts.id = activities.account_id ) 
         LEFT  JOIN  purchase_methods ON (purchase_methods.id = activities.purchase_method_id ) 
      
         Right  JOIN call_products ON (call_products.activity_id = activities.id)
         LEFT  JOIN suppliers ON (suppliers.id = call_products.supplier_id)
         LEFT  JOIN product_families ON (product_families.id = call_products.product_family_id)
         LEFT  JOIN item_groups ON (item_groups.id = call_products.item_group_id)
         LEFT  JOIN objectives ON (objectives.id = call_products.objective_id)
         LEFT  JOIN statuses ON (statuses.id = call_products.status_id)

         Right  JOIN call_contacts ON (call_contacts.call_product_id = call_products.id)
         LEFT  JOIN authorities ON (authorities.id = call_contacts.authority_id)
         LEFT  JOIN specialities ON (specialities.id = call_contacts.speciality_id)
         LEFT  JOIN positions ON (positions.id = call_contacts.position_id)

             
  ORDER BY activities.id ASC;
  
