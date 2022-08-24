// 枠 画面上の列の数（何列目か） ※ステータスコードではない
const FLAME_QEEG_ONLINE = 12; // オンライン相談　11列目
const FLAME_QEEG_PAID_FREE = 11; // 無料・有料QEEG　12列目

// table:status_codes
// 予約種別 st_reserve_class
const STATUS_QEEG_FIRST_VISIT = 20;
const STATUS_QEEG_PAID_FREE = 21;
const STATUS_QEEG_ONLINE = 22;
const STATUS_PSYCHIATRY = 23;
const STATUS_TMS = 24;
const STATUS_TMS_FIRST_VISIT = 25;
const STATUS_CONSULTATION = 26;
const STATUS_DUMMY_CARD = 27;

//初診／再診
const REGULARLY_FIRST = 8;
const REGULARLY_RE = 9;

//流入元
const STATUS_OTHER = 7;
const STATUS_COUBIC = 4;
const STATUS_RECEPTION = 5;

// 権限
const ROLE_SYSTEM_ADMINISTRATOR = 35;
const ROLE_CALLCENTER_FULL_ACCESS = 36;
const ROLE_READ_ONLY_ACCESS = 37;
const ROLE_CALLCENTER_ACCESS = 38;
const ROLE_CLINIC_FULL_ACCESS = 39;

window.commonConst = {
    STATUS_QEEG_FIRST_VISIT,
    STATUS_QEEG_PAID_FREE,
    STATUS_QEEG_ONLINE,
    STATUS_PSYCHIATRY,
    STATUS_TMS,
    STATUS_TMS_FIRST_VISIT,
    STATUS_CONSULTATION,
    FLAME_QEEG_ONLINE,
    FLAME_QEEG_PAID_FREE,
    REGULARLY_FIRST,
    REGULARLY_RE,
    ROLE_SYSTEM_ADMINISTRATOR,
    ROLE_CALLCENTER_FULL_ACCESS,
    ROLE_READ_ONLY_ACCESS,
    ROLE_CALLCENTER_ACCESS,
    ROLE_CLINIC_FULL_ACCESS,
    STATUS_DUMMY_CARD,
    STATUS_OTHER,
    STATUS_COUBIC,
    STATUS_RECEPTION
}