SELECT
	USER_PRIVILEGES.USER_PRIVILEGE AS BL,
    CONCAT(
    	CONCAT(UCASE(SUBSTRING(SUBSTRING_INDEX(SUBSTRING_INDEX(
            USERS_LIST.USERNAME, '.', 1), '.', -1), 1, 1)), LOWER(SUBSTRING(
            SUBSTRING_INDEX(SUBSTRING_INDEX(USERS_LIST.USERNAME, '.', 1), '.',
            -1), 2))), ' ', CONCAT(UCASE(SUBSTRING(SUBSTRING_INDEX(
            SUBSTRING_INDEX(USERS_LIST.USERNAME, '.', 2), '.', -1), 1, 1)),
            LOWER(SUBSTRING(SUBSTRING_INDEX(SUBSTRING_INDEX(USERS_LIST.USERNAME,
            '.', 2), '.', -1), 2)))) AS Name
FROM
	USERS_LIST
    	LEFT JOIN USER_PRIVILEGES ON
            (USER_PRIVILEGES.PRIVILEGE_ID = USERS_LIST.PRIVILEGE_ID)
WHERE
	USERS_LIST.USERNAME <> 'DEVOP'
    AND USERS_LIST.PRIVILEGE_ID <> 7
    AND USERS_LIST.UID NOT IN (
        SELECT
            USERS_LIST.UID
        FROM
            USERS_LIST
        WHERE
            USERS_LIST.USERNAME IN ('soha.abadeer',
                                    'Ahmed.Anas',
									'Yomna.Amr',
									'Mohamed.Abbas',
									'Agamal',
									'Islam.Moustafa',
									'Ahmed.Salaheldin',
									'Mohamed.Zakaria',
									'Hesham.Ebrahim',
									'khaled.gamal',
									'ahmed',
									'basant.mostafa',
									'amr.badr',
									'tawfik.elsrogy',
									'lamis.ibrahim',
									'said.ibrahem',
									'hisham.mohamed',
									'ossama.abdullah',
									'mostafa.awadallah',
									'salaam',
									'nayera.khaled',
									'mohamed.nasef',
									'hossam.shahawy',
									'mohamed.sheta',
									'mohamed.adel',
									'youssef.elwan')
    )
    AND USERS_LIST.UID NOT IN (
        SELECT
            DISTINCT(ACTIVITIES.UID)
        FROM
            ACTIVITIES
        WHERE
            ACTIVITIES.ACTIVITY_DATE >= DATE_SUB(CURRENT_DATE(), INTERVAL 1 Day)
    )
    AND USERS_LIST.UID NOT IN (42, 51, 57, 64, 78, 84, 86, 88, 108, 111, 112,
                            113, 117, 118, 119, 120, 121, 122, 123, 124, 125,
                            126, 127, 128, 130, 133, 137, 138, 139, 142, 143,
                            144, 145, 146, 147, 148, 149, 150, 151, 155, 156,
                            157, 158, 159, 160, 162, 163, 164, 165, 166, 167,
                            168, 169, 171, 172, 173)






















                            SELECT
	ACTIVITIES.ACTIVITY_ID,
    ACTIVITIES.ACTIVITY_DATE,
    USERS_LIST.USERNAME,
    USER_PRIVILEGES.USER_PRIVILEGE,
    ACTIVITY_TYPE.ACTIVITY_TYPE,
    ACCOUNT_TYPE.ACCOUNT_TYPE,
    ACCOUNTS.ACCOUNT_NAME,
    AREAS.AREA_NAME,
    CHAINS.CHAIN_NAME,
    BRANCHES.BRANCH_NAME,
    METHODS.METHOD_NAME,
    ACTIVITIES.ACTIVITY_COMMENT,
    SUPPLIERS.SUPPLIER_NAME,
    FAMILIES.FAMILY_NAME,
    ITEMS.ITEM_NAME AS ITEM_GROUP,
    ACTIVITY_DATA.ITEM_NAME,
    ACTIVITY_DATA.ITEM_STOCK,
    OBJECTIVES.OBJECTIVE AS CALL_OBJECTIVE,
    STATUS.CALL_STATUS
FROM
	ACTIVITIES
    	LEFT JOIN USERS_LIST ON (USERS_LIST.UID = ACTIVITIES.UID)
        LEFT JOIN USER_PRIVILEGES ON (USER_PRIVILEGES.PRIVILEGE_ID = USERS_LIST.PRIVILEGE_ID)
        LEFT JOIN ACTIVITY_TYPE ON (ACTIVITY_TYPE.ACTIVITY_TYPE_ID = ACTIVITIES.ACTIVITY_TYPE)
        LEFT JOIN ACCOUNT_TYPE ON (ACCOUNT_TYPE.ACCOUNT_TYPE_ID = ACTIVITIES.ACCOUNT_TYPE)
        LEFT JOIN ACCOUNTS ON (ACCOUNTS.ACCOUNT_ID = ACTIVITIES.ACCOUNT_NAME)
        LEFT JOIN AREAS ON (AREAS.AREA_ID = ACTIVITIES.ACCOUNT_AREA)
        LEFT JOIN CHAINS ON (CHAINS.CHAIN_ID = ACTIVITIES.CHAIN_NAME)
        LEFT JOIN BRANCHES ON (BRANCHES.BRANCH_ID = ACTIVITIES.BRANCH_NAME)
        LEFT JOIN METHODS ON (METHODS.METHOD_ID = ACTIVITIES.PURCHASE_METHOD)
        LEFT JOIN ACTIVITY_DATA ON (ACTIVITIES.ACTIVITY_ID = ACTIVITY_DATA.ACTIVITY_ID)
        LEFT JOIN SUPPLIERS on (SUPPLIERS.SUPPLIER_ID = ACTIVITY_DATA.SUPPLIER_ID)
        LEFT JOIN FAMILIES ON (FAMILIES.FAMILY_ID = ACTIVITY_DATA.FAMILY_ID)
        LEFT JOIN ITEMS ON (ITEMS.ITEM_ID = ACTIVITY_DATA.ITEM_ID)
        LEFT JOIN OBJECTIVES ON (OBJECTIVES.OBJECTIVE_ID = ACTIVITY_DATA.OBJECTIVE_ID)
        LEFT JOIN STATUS ON (STATUS.STATUS_ID = ACTIVITY_DATA.STATUS_ID)
ORDER BY
	ACTIVITIES.ACTIVITY_ID DESC;






























 SELECT
	activities.id,
    activities.session_created_at,
    users.user_name,
    bls.bl_name,
    bus.bu_name


    USER_PRIVILEGES.USER_PRIVILEGE,
    ACTIVITY_TYPE.ACTIVITY_TYPE,
    ACCOUNT_TYPE.ACCOUNT_TYPE,
    ACCOUNTS.ACCOUNT_NAME,
    AREAS.AREA_NAME,
    CHAINS.CHAIN_NAME,
    BRANCHES.BRANCH_NAME,
    METHODS.METHOD_NAME,
    ACTIVITIES.ACTIVITY_COMMENT,
    SUPPLIERS.SUPPLIER_NAME,
    FAMILIES.FAMILY_NAME,
    ITEMS.ITEM_NAME AS ITEM_GROUP,
    ACTIVITY_DATA.ITEM_NAME,
    ACTIVITY_DATA.ITEM_STOCK,
    OBJECTIVES.OBJECTIVE AS CALL_OBJECTIVE,
    STATUS.CALL_STATUS
FROM
	ACTIVITIES
    	LEFT JOIN users ON (users.id = activities.user_id)
        LEFT JOIN bls ON (bls.id = users.bl1_id)
        LEFT JOIN bus ON (bus.id = users.bu_id)
        LEFT JOIN ACTIVITY_TYPE ON (ACTIVITY_TYPE.ACTIVITY_TYPE_ID = ACTIVITIES.ACTIVITY_TYPE)
        LEFT JOIN ACCOUNT_TYPE ON (ACCOUNT_TYPE.ACCOUNT_TYPE_ID = ACTIVITIES.ACCOUNT_TYPE)
        LEFT JOIN ACCOUNTS ON (ACCOUNTS.ACCOUNT_ID = ACTIVITIES.ACCOUNT_NAME)
        LEFT JOIN AREAS ON (AREAS.AREA_ID = ACTIVITIES.ACCOUNT_AREA)
        LEFT JOIN CHAINS ON (CHAINS.CHAIN_ID = ACTIVITIES.CHAIN_NAME)
        LEFT JOIN BRANCHES ON (BRANCHES.BRANCH_ID = ACTIVITIES.BRANCH_NAME)
        LEFT JOIN METHODS ON (METHODS.METHOD_ID = ACTIVITIES.PURCHASE_METHOD)
        LEFT JOIN ACTIVITY_DATA ON (ACTIVITIES.ACTIVITY_ID = ACTIVITY_DATA.ACTIVITY_ID)
        LEFT JOIN SUPPLIERS on (SUPPLIERS.SUPPLIER_ID = ACTIVITY_DATA.SUPPLIER_ID)
        LEFT JOIN FAMILIES ON (FAMILIES.FAMILY_ID = ACTIVITY_DATA.FAMILY_ID)
        LEFT JOIN ITEMS ON (ITEMS.ITEM_ID = ACTIVITY_DATA.ITEM_ID)
        LEFT JOIN OBJECTIVES ON (OBJECTIVES.OBJECTIVE_ID = ACTIVITY_DATA.OBJECTIVE_ID)
        LEFT JOIN STATUS ON (STATUS.STATUS_ID = ACTIVITY_DATA.STATUS_ID)
ORDER BY
	ACTIVITIES.ACTIVITY_ID DESC;



     SELECT
	activities.id,
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
    purchase_methods.purchase_method


    FROM
	ACTIVITIES
    	LEFT JOIN users ON (users.id = activities.user_id)
        LEFT JOIN bls ON (bls.id = activities.bl_id)
        LEFT JOIN bus ON (bus.id = activities.bu_id)
        LEFT JOIN activity_types ON (activity_types.id = activities.activity_type_id)
        LEFT JOIN account_types ON (account_types.id = activities.account_type_id)
        LEFT JOIN accounts ON (accounts.id = activities.account_id)
        LEFT JOIN purchase_methods ON (purchase_methods.id = activities.purchase_method);
        
        
      
	