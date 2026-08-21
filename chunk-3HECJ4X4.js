import {
  HrmTimePicker
} from "./chunk-3AU7CXEW.js";
import {
  HrmRadioGroup
} from "./chunk-7AHIDTQC.js";
import {
  HrmDatePicker
} from "./chunk-RKQLONQG.js";
import {
  HrmInputNumber
} from "./chunk-QRKELULO.js";
import {
  HrmRate
} from "./chunk-CWO3PAW4.js";
import {
  HrmSwitch
} from "./chunk-53LQTSVF.js";
import {
  HrmCheckbox
} from "./chunk-V63HCRKY.js";
import {
  HrmTextarea
} from "./chunk-MXHRUBSQ.js";
import {
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import {
  HrmSegmented
} from "./chunk-IETGC4TN.js";
import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "./chunk-KLLXE4WM.js";
import {
  HrmInput
} from "./chunk-XC26CQEC.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import {
  CdkTrapFocus
} from "./chunk-6KJOFSCV.js";
import {
  AlertTriangle,
  AlignLeft,
  ArrowBackUp,
  ArrowForwardUp,
  Bolt,
  Building,
  Calendar,
  Checkbox,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  Clock,
  CloudUpload,
  Coin,
  Copy,
  Database,
  DeviceDesktop,
  DeviceFloppy,
  DeviceMobile,
  DeviceTablet,
  Eye,
  EyeOff,
  Forms,
  GripVertical,
  Hash,
  Language,
  LayoutSidebar,
  LayoutSidebarRight,
  LetterCase,
  ListCheck,
  ListDetails,
  Lock,
  Mail,
  MapPin,
  Microphone,
  Minus,
  Moon,
  Pencil,
  Percentage,
  Phone,
  Photo,
  PictureInPicture,
  Plus,
  Restore,
  Search,
  Section,
  ShieldCheck,
  SortAscendingNumbers,
  Sparkles,
  Star,
  Sun,
  TablerIconComponent,
  ToggleLeft,
  Trash,
  Upload,
  User,
  X
} from "./chunk-QL2Z65KF.js";
import {
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/_form-schema.ts
function fbRuleHit(r, test) {
  if (!r.conditions.length)
    return false;
  return r.match === "any" ? r.conditions.some(test) : r.conditions.every(test);
}
var FB_LOCALE_REGISTRY = [
  { key: "vi", native: "Ti\u1EBFng Vi\u1EC7t" },
  { key: "en", native: "English" },
  { key: "cn", native: "\u4E2D\u6587" },
  { key: "ja", native: "\u65E5\u672C\u8A9E" },
  { key: "ko", native: "\uD55C\uAD6D\uC5B4" }
];
var FB_DEFAULT_LOCALES = ["vi", "en"];
function fbLabelOf(f2, locale, defaultLocale = "vi") {
  if (locale === defaultLocale)
    return f2.label;
  const v = f2.labels?.[locale] || (locale === "en" ? f2.labelEn : locale === "cn" ? f2.labelCn : "");
  return v || f2.label;
}
var FB_THEMES = [
  { key: "default", vi: "M\u1EB7c \u0111\u1ECBnh", en: "Default", header: "none" },
  { key: "emerald", vi: "Ng\u1ECDc l\u1EE5c", en: "Emerald", primary: "#16A34A", sheetBg: "#F0FDF4", header: "solid" },
  { key: "ocean", vi: "\u0110\u1EA1i d\u01B0\u01A1ng", en: "Ocean", primary: "#2563EB", sheetBg: "#EFF6FF", header: "solid" },
  { key: "sunset", vi: "Ho\xE0ng h\xF4n", en: "Sunset", primary: "#EA580C", sheetBg: "#FFF7ED", header: "solid", radius: "rounded" },
  { key: "orchid", vi: "Lan t\xEDm", en: "Orchid", primary: "#7C3AED", sheetBg: "#FAF5FF", header: "solid", radius: "rounded" },
  { key: "midnight", vi: "Ban \u0111\xEAm", en: "Midnight", primary: "#8B5CF6", header: "solid", dark: true },
  { key: "slate", vi: "T\u1ED1i gi\u1EA3n", en: "Minimal", primary: "#475569", sheetBg: "#F8FAFC", header: "none", radius: "sharp" }
];
function fbResolveTheme(t) {
  if (t?.preset)
    return FB_THEMES.find((x) => x.key === t.preset) ?? FB_THEMES[0];
  if (t && (t.primary || t.sheetBg || t.radius)) {
    return { key: "custom", vi: "Tu\u1EF3 ch\u1EC9nh", en: "Custom", primary: t.primary, sheetBg: t.sheetBg, radius: t.radius, header: "none" };
  }
  return FB_THEMES[0];
}
var FB_HOLIDAYS = ["01/01", "30/04", "01/05", "02/09", "16/02/2026", "17/02/2026", "18/02/2026", "19/02/2026", "20/02/2026"];
function fbIsHoliday(d) {
  const dd = String(d.getDate()).padStart(2, "0"), mm = String(d.getMonth() + 1).padStart(2, "0");
  return FB_HOLIDAYS.includes(`${dd}/${mm}`) || FB_HOLIDAYS.includes(`${dd}/${mm}/${d.getFullYear()}`);
}
var FB_SQL_PROCS = ["sp_DanhMucPhongBan", "sp_DanhMucChucVu", "sp_DanhMucLoaiHopDong", "sp_DanhMucCaLamViec", "sp_DanhMucDonViTinh"];
var FB_SQL_PROC_META = {
  sp_DanhMucPhongBan: { cols: ["PhongBanId", "MaPhongBan", "TenPhongBan", "TenTiengAnh"], params: ["@ChiNhanhId"] },
  sp_DanhMucChucVu: { cols: ["ChucVuId", "MaCode", "TenChucVu", "TenTiengAnh"], params: ["@PhongBanId"] },
  sp_DanhMucLoaiHopDong: { cols: ["LoaiHDId", "TenLoaiHD"], params: [] },
  sp_DanhMucCaLamViec: { cols: ["CaId", "TenCa", "GioBatDau"], params: ["@DonViId"] },
  sp_DanhMucDonViTinh: { cols: ["DonViTinhId", "TenDonVi"], params: [] }
};
var FB_SQL_DATA = {
  sp_DanhMucPhongBan: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"],
  sp_DanhMucChucVu: ["Nh\xE2n vi\xEAn", "Chuy\xEAn vi\xEAn", "Tr\u01B0\u1EDFng nh\xF3m", "Tr\u01B0\u1EDFng ph\xF2ng", "Gi\xE1m \u0111\u1ED1c"],
  sp_DanhMucLoaiHopDong: ["Th\u1EED vi\u1EC7c", "X\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n", "V\xF4 th\u1EDDi h\u1EA1n", "Th\u1EDDi v\u1EE5"],
  sp_DanhMucCaLamViec: ["Ca h\xE0nh ch\xEDnh", "Ca s\xE1ng", "Ca chi\u1EC1u", "Ca \u0111\xEAm"],
  sp_DanhMucDonViTinh: ["VN\u0110", "USD", "EUR", "JPY"]
};
var FB_API_CATALOG = {
  "API Danh m\u1EE5c ph\xF2ng ban (HR)": { url: "/api/danh-muc/phong-ban", method: "GET", path: "data.items", fields: ["id", "code", "name", "nameEn"], params: ["branchId"], data: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"] },
  "API Chi nh\xE1nh c\xF4ng ty": { url: "/api/danh-muc/chi-nhanh", method: "GET", path: "data.items", fields: ["id", "name", "address"], params: [], data: ["H\xE0 N\u1ED9i", "\u0110\xE0 N\u1EB5ng", "TP. H\u1ED3 Ch\xED Minh"] },
  "API Ng\xE2n h\xE0ng (NAPAS)": { url: "/api/danh-muc/ngan-hang", method: "GET", path: "data", fields: ["bankId", "shortName", "fullName"], params: [], data: ["Vietcombank", "Techcombank", "BIDV", "ACB"] }
};
var FB_API_SAMPLES = {
  "/api/danh-muc/phong-ban": ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"],
  "/api/danh-muc/chi-nhanh": ["H\xE0 N\u1ED9i", "\u0110\xE0 N\u1EB5ng", "TP. H\u1ED3 Ch\xED Minh"],
  "/api/danh-muc/ngan-hang": ["Vietcombank", "Techcombank", "BIDV", "ACB"]
};
var FB_ENUMS = {
  EnumLoaiHopDong: ["Th\u1EED vi\u1EC7c", "X\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n", "V\xF4 th\u1EDDi h\u1EA1n", "Th\u1EDDi v\u1EE5"],
  EnumTrangThaiNV: ["\u0110ang l\xE0m vi\u1EC7c", "Th\u1EED vi\u1EC7c", "Ngh\u1EC9 thai s\u1EA3n", "\u0110\xE3 ngh\u1EC9 vi\u1EC7c"],
  EnumPhongBan: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"],
  EnumLoaiBaoHiem: ["BHXH b\u1EAFt bu\u1ED9c", "BHYT", "BH th\u1EA5t nghi\u1EC7p", "BH tai n\u1EA1n 24/24"]
};
function fbListOptions(f2) {
  const ds = f2.datasource || "custom";
  if (ds === "custom")
    return f2.options || [];
  if (ds === "enum")
    return FB_ENUMS[f2.dsMeta?.enumName || ""] || null;
  if (ds === "sql")
    return FB_SQL_DATA[f2.dsMeta?.proc || ""] || null;
  if (ds === "api") {
    const an = f2.dsMeta?.apiName;
    if (an && an !== "__custom")
      return FB_API_CATALOG[an]?.data || null;
    const url = (f2.dsMeta?.url || "").trim();
    if (!url)
      return null;
    return FB_API_SAMPLES[url] || ["D\u1EEF li\u1EC7u API m\u1EABu 1", "D\u1EEF li\u1EC7u API m\u1EABu 2", "D\u1EEF li\u1EC7u API m\u1EABu 3"];
  }
  return null;
}
var FB_PALETTE = [
  { type: "text", label: "V\u0103n b\u1EA3n ng\u1EAFn", labelEn: "Short text", icon: LetterCase, group: "basic", defaults: { label: "V\u0103n b\u1EA3n ng\u1EAFn", placeholder: "Nh\u1EADp n\u1ED9i dung", span: "half" } },
  { type: "textarea", label: "V\u0103n b\u1EA3n d\xE0i", labelEn: "Long text", icon: AlignLeft, group: "basic", defaults: { label: "V\u0103n b\u1EA3n d\xE0i", placeholder: "Nh\u1EADp m\xF4 t\u1EA3 chi ti\u1EBFt", span: "full" } },
  { type: "number", label: "S\u1ED1", labelEn: "Number", icon: Hash, group: "basic", defaults: { label: "S\u1ED1", placeholder: "0", span: "half" } },
  { type: "percent", label: "Ph\u1EA7n tr\u0103m (%)", labelEn: "Percentage (%)", icon: Percentage, group: "basic", defaults: { label: "Ph\u1EA7n tr\u0103m", placeholder: "0", span: "half" } },
  { type: "email", label: "Email", labelEn: "Email", icon: Mail, group: "basic", defaults: { label: "Email", placeholder: "ten@congty.vn", span: "half" } },
  { type: "phone", label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", labelEn: "Phone", icon: Phone, group: "basic", defaults: { label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", placeholder: "09xx xxx xxx", span: "half" } },
  { type: "date", label: "Ng\xE0y", labelEn: "Date", icon: Calendar, group: "basic", defaults: { label: "Ng\xE0y", placeholder: "dd/mm/yyyy", span: "half" } },
  { type: "time", label: "Gi\u1EDD", labelEn: "Time", icon: Clock, group: "basic", defaults: { label: "Gi\u1EDD", placeholder: "hh:mm", span: "half" } },
  { type: "select", label: "Danh s\xE1ch ch\u1ECDn", labelEn: "Dropdown", icon: ChevronDown, group: "choice", defaults: { label: "Danh s\xE1ch ch\u1ECDn", placeholder: "Ch\u1ECDn gi\xE1 tr\u1ECB", span: "half", options: ["L\u1EF1a ch\u1ECDn 1", "L\u1EF1a ch\u1ECDn 2", "L\u1EF1a ch\u1ECDn 3"] } },
  { type: "multiselect", label: "Ch\u1ECDn nhi\u1EC1u", labelEn: "Multi-select", icon: ListCheck, group: "choice", defaults: { label: "Ch\u1ECDn nhi\u1EC1u", placeholder: "Ch\u1ECDn nhi\u1EC1u gi\xE1 tr\u1ECB", span: "half", options: ["L\u1EF1a ch\u1ECDn 1", "L\u1EF1a ch\u1ECDn 2", "L\u1EF1a ch\u1ECDn 3"] } },
  { type: "radio", label: "Ch\u1ECDn m\u1ED9t", labelEn: "Radio group", icon: ListDetails, group: "choice", defaults: { label: "Ch\u1ECDn m\u1ED9t", span: "half", options: ["L\u1EF1a ch\u1ECDn 1", "L\u1EF1a ch\u1ECDn 2"] } },
  { type: "checkbox", label: "H\u1ED9p ki\u1EC3m", labelEn: "Checkbox", icon: Checkbox, group: "choice", defaults: { label: "H\u1ED9p ki\u1EC3m", span: "half", options: ["\u0110\u1ED3ng \xFD \u0111i\u1EC1u kho\u1EA3n"] } },
  { type: "toggle", label: "B\u1EADt/T\u1EAFt", labelEn: "Toggle", icon: ToggleLeft, group: "choice", defaults: { label: "B\u1EADt/T\u1EAFt", span: "half" } },
  { type: "user", label: "Nh\xE2n vi\xEAn", labelEn: "Employee", icon: User, group: "advanced", defaults: { label: "Nh\xE2n vi\xEAn", placeholder: "Ch\u1ECDn nh\xE2n vi\xEAn", span: "half" } },
  // Field SẴN CÓ của hệ thống (đặc tả mục 3) — select cấu hình sẵn danh mục demo
  { type: "select", label: "Ph\xF2ng ban", labelEn: "Department", icon: Building, group: "advanced", defaults: { label: "Ph\xF2ng ban", placeholder: "Ch\u1ECDn ph\xF2ng ban", span: "half", options: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"] } },
  { type: "select", label: "Lo\u1EA1i b\u1EA3o hi\u1EC3m", labelEn: "Insurance type", icon: ShieldCheck, group: "advanced", defaults: { label: "Lo\u1EA1i b\u1EA3o hi\u1EC3m", placeholder: "Ch\u1ECDn lo\u1EA1i b\u1EA3o hi\u1EC3m", span: "half", options: ["BHXH b\u1EAFt bu\u1ED9c", "BHYT", "BH th\u1EA5t nghi\u1EC7p", "BH tai n\u1EA1n 24/24", "BH s\u1EE9c kho\u1EBB m\u1EDF r\u1ED9ng"] } },
  { type: "money", label: "S\u1ED1 ti\u1EC1n (\u0111\u01A1n v\u1ECB)", labelEn: "Money (unit)", icon: Coin, group: "advanced", defaults: { label: "S\u1ED1 ti\u1EC1n", placeholder: "0", span: "half", unitOptions: "VN\u0110,USD,EUR", defaultUnit: "VN\u0110" } },
  { type: "address", label: "\u0110\u1ECBa ch\u1EC9", labelEn: "Address", icon: MapPin, group: "advanced", defaults: { label: "\u0110\u1ECBa ch\u1EC9", placeholder: "S\u1ED1 nh\xE0, \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/x\xE3, qu\u1EADn/huy\u1EC7n, t\u1EC9nh/TP", span: "full" } },
  { type: "autocode", label: "M\xE3 t\u1EF1 sinh", labelEn: "Auto code", icon: SortAscendingNumbers, group: "advanced", defaults: { label: "M\xE3 t\u1EF1 sinh", span: "half", codePrefix: "G-" } },
  { type: "rating", label: "\u0110\xE1nh gi\xE1 sao", labelEn: "Star rating", icon: Star, group: "advanced", defaults: { label: "\u0110\xE1nh gi\xE1", span: "half" } },
  { type: "upload", label: "T\u1EC7p \u0111\xEDnh k\xE8m", labelEn: "File upload", icon: Upload, group: "advanced", defaults: { label: "T\u1EC7p \u0111\xEDnh k\xE8m", span: "full", constraints: { maxFiles: 5, maxSizeMb: 10, fileTypes: "pdf,docx,xlsx" } } },
  { type: "image", label: "H\xECnh \u1EA3nh", labelEn: "Image", icon: Photo, group: "advanced", defaults: { label: "H\xECnh \u1EA3nh", span: "full" } },
  { type: "heading", label: "Ti\xEAu \u0111\u1EC1 nh\xF3m", labelEn: "Section heading", icon: Section, group: "layout", defaults: { label: "Ti\xEAu \u0111\u1EC1 nh\xF3m", span: "full" } },
  { type: "divider", label: "\u0110\u01B0\u1EDDng k\u1EBB", labelEn: "Divider", icon: Minus, group: "layout", defaults: { label: "", span: "full" } }
];
var FB_GROUPS = [
  { key: "basic", label: "C\u01A1 b\u1EA3n", labelEn: "Basic" },
  { key: "choice", label: "L\u1EF1a ch\u1ECDn", labelEn: "Choice" },
  { key: "advanced", label: "N\xE2ng cao", labelEn: "Advanced" },
  { key: "layout", label: "B\u1ED1 c\u1EE5c", labelEn: "Layout" }
];
var FB_OP_LABELS = {
  eq: { vi: "b\u1EB1ng", en: "equals" },
  ne: { vi: "kh\xE1c", en: "not equals" },
  empty: { vi: "\u0111ang tr\u1ED1ng", en: "is empty" },
  notEmpty: { vi: "c\xF3 gi\xE1 tr\u1ECB", en: "has value" },
  contains: { vi: "ch\u1EE9a", en: "contains" },
  notContains: { vi: "kh\xF4ng ch\u1EE9a", en: "does not contain" },
  startsWith: { vi: "b\u1EAFt \u0111\u1EA7u b\u1EB1ng", en: "starts with" },
  notStartsWith: { vi: "kh\xF4ng b\u1EAFt \u0111\u1EA7u b\u1EB1ng", en: "does not start with" },
  endsWith: { vi: "k\u1EBFt th\xFAc b\u1EB1ng", en: "ends with" },
  notEndsWith: { vi: "kh\xF4ng k\u1EBFt th\xFAc b\u1EB1ng", en: "does not end with" },
  gt: { vi: "l\u1EDBn h\u01A1n", en: "greater than" },
  gte: { vi: "l\u1EDBn h\u01A1n ho\u1EB7c b\u1EB1ng", en: "greater or equal" },
  lt: { vi: "nh\u1ECF h\u01A1n", en: "less than" },
  lte: { vi: "nh\u1ECF h\u01A1n ho\u1EB7c b\u1EB1ng", en: "less or equal" },
  dayEq: { vi: "b\u1EB1ng th\u1EE9 (trong tu\u1EA7n)", en: "weekday equals" },
  dayNe: { vi: "kh\xE1c th\u1EE9 (trong tu\u1EA7n)", en: "weekday not equals" },
  inList: { vi: "thu\u1ED9c danh s\xE1ch", en: "in list" }
};
function fbOpsForType(t) {
  switch (t) {
    case "number":
    case "percent":
    case "money":
    case "time":
    case "rating":
      return ["empty", "notEmpty", "eq", "ne", "gt", "gte", "lt", "lte"];
    case "date":
      return ["empty", "notEmpty", "eq", "ne", "gt", "gte", "lt", "lte", "dayEq", "dayNe"];
    case "select":
    case "multiselect":
    case "radio":
    case "checkbox":
    case "user":
      return ["empty", "notEmpty", "eq", "ne", "inList"];
    case "toggle":
    case "upload":
    case "image":
      return ["empty", "notEmpty"];
    default:
      return ["empty", "notEmpty", "eq", "ne", "contains", "notContains", "startsWith", "notStartsWith", "endsWith", "notEndsWith"];
  }
}
var FB_ACTION_LABELS = {
  show: { vi: "Hi\u1EC3n th\u1ECB tr\u01B0\u1EDDng", en: "Show fields" },
  hide: { vi: "\u1EA8n tr\u01B0\u1EDDng", en: "Hide fields" },
  require: { vi: "B\u1EAFt bu\u1ED9c nh\u1EADp", en: "Make required" },
  unrequire: { vi: "B\u1ECF b\u1EAFt bu\u1ED9c", en: "Remove required" },
  readonly: { vi: "Ch\u1EC9 \u0111\u1ECDc", en: "Read-only" },
  enable: { vi: "Cho ph\xE9p s\u1EEDa", en: "Enable editing" },
  setValue: { vi: "G\xE1n gi\xE1 tr\u1ECB", en: "Set value" },
  copyValue: { vi: "Sao ch\xE9p gi\xE1 tr\u1ECB t\u1EEB tr\u01B0\u1EDDng", en: "Copy from field" },
  compute: { vi: "T\xEDnh to\xE1n c\xF4ng th\u1EE9c", en: "Compute formula" },
  warn: { vi: "Hi\u1EC3n th\u1ECB c\u1EA3nh b\xE1o", en: "Show warning" }
};
var seq = 100;
function fbId(prefix) {
  return `${prefix}${++seq}`;
}
function fbSeedSeqFrom(s) {
  const bump = (id) => {
    const n = Number((/(\d+)$/.exec(id) ?? [])[1] ?? 0);
    if (n > seq)
      seq = n;
  };
  for (const sec of s.sections) {
    bump(sec.id);
    for (const f2 of sec.fields)
      bump(f2.id);
  }
  for (const r of s.rules)
    bump(r.id);
}
function fbKeyFrom(label) {
  const ascii = label.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
  const words = ascii.toLowerCase().replace(/[^a-z0-9 ]/g, " ").trim().split(/\s+/);
  if (!words.length || !words[0])
    return "field" + Date.now() % 1e3;
  return words[0] + words.slice(1).map((w) => w[0].toUpperCase() + w.slice(1)).join("");
}
function fbRhsOf(c) {
  return c.rhs ?? { kind: "value", value: c.value ?? "" };
}
function fbDefaultSchema() {
  return {
    version: 2,
    name: "Th\xEAm nh\xE2n vi\xEAn",
    desc: "Form \u0111\u0103ng k\xFD nh\xE2n vi\xEAn m\u1EDBi \u2014 sinh t\u1EEB Form Builder.",
    sections: [
      {
        id: "sec1",
        title: "Th\xF4ng tin c\u01A1 b\u1EA3n",
        fields: [
          { id: "f1", type: "text", key: "fullName", label: "H\u1ECD v\xE0 t\xEAn", labelEn: "Full name", placeholder: "Nguy\u1EC5n V\u0103n A", span: "half", required: true },
          { id: "f2", type: "email", key: "email", label: "Email", labelEn: "Email", placeholder: "ten@congty.vn", span: "half", required: true },
          { id: "f3", type: "phone", key: "phone", label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", labelEn: "Phone", placeholder: "09xx xxx xxx", span: "half" },
          { id: "f4", type: "date", key: "joinDate", label: "Ng\xE0y v\xE0o l\xE0m", labelEn: "Join date", placeholder: "dd/mm/yyyy", span: "half" }
        ]
      },
      {
        id: "sec2",
        title: "H\u1EE3p \u0111\u1ED3ng",
        fields: [
          { id: "f5", type: "select", key: "dept", label: "Ph\xF2ng ban", labelEn: "Department", placeholder: "Ch\u1ECDn ph\xF2ng ban", span: "half", required: true, options: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Ban gi\xE1m \u0111\u1ED1c"] },
          { id: "f6", type: "radio", key: "contractType", label: "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng", labelEn: "Contract type", span: "half", options: ["Th\u1EED vi\u1EC7c", "Ch\xEDnh th\u1EE9c", "V\xF4 th\u1EDDi h\u1EA1n"] },
          { id: "f7", type: "number", key: "term", label: "Th\u1EDDi h\u1EA1n H\u0110", labelEn: "Term", placeholder: "0", span: "third", constraints: { min: "0", numberFormat: "int" } },
          { id: "f8", type: "select", key: "termUnit", label: "\u0110\u01A1n v\u1ECB th\u1EDDi gian", labelEn: "Term unit", placeholder: "Ch\u1ECDn", span: "third", options: ["Ng\xE0y", "Th\xE1ng", "N\u0103m"] },
          { id: "f9", type: "date", key: "startDate", label: "Ng\xE0y b\u1EAFt \u0111\u1EA7u H\u0110", labelEn: "Start date", placeholder: "dd/mm/yyyy", span: "third" },
          { id: "f10", type: "date", key: "endDate", label: "Ng\xE0y k\u1EBFt th\xFAc H\u0110", labelEn: "End date", placeholder: "T\u1EF1 t\xEDnh", span: "third", readonly: true },
          { id: "f11", type: "money", key: "salary", label: "L\u01B0\u01A1ng c\u01A1 b\u1EA3n", labelEn: "Base salary", placeholder: "0", span: "half", unitOptions: "VN\u0110,USD", defaultUnit: "VN\u0110" },
          { id: "f12", type: "textarea", key: "note", label: "Ghi ch\xFA", labelEn: "Note", placeholder: "Ghi ch\xFA n\u1ED9i b\u1ED9 (tu\u1EF3 ch\u1ECDn)", span: "full" }
        ]
      }
    ],
    rules: [
      {
        id: "r1",
        name: "Th\u1EED vi\u1EC7c \u2192 th\u1EDDi h\u1EA1n 2 Th\xE1ng",
        conditions: [{ field: "contractType", op: "eq", rhs: { kind: "value", value: "Th\u1EED vi\u1EC7c" } }],
        actions: [
          { type: "setValue", targets: ["term"], value: "2" },
          { type: "setValue", targets: ["termUnit"], value: "Th\xE1ng" }
        ]
      },
      {
        id: "r2",
        name: "T\xEDnh Ng\xE0y k\u1EBFt th\xFAc H\u0110",
        conditions: [
          { field: "term", op: "notEmpty" },
          { field: "termUnit", op: "notEmpty" },
          { field: "startDate", op: "notEmpty" }
        ],
        actions: [{
          type: "compute",
          targets: ["endDate"],
          formula: "IF([termUnit]=='N\u0103m', ADDYEAR([startDate],[term]), IF([termUnit]=='Th\xE1ng', ADDMONTH([startDate],[term]), ADDDAY([startDate],[term])))"
        }]
      },
      {
        id: "r3",
        name: "Ban gi\xE1m \u0111\u1ED1c \u2192 H\u0110 v\xF4 th\u1EDDi h\u1EA1n",
        conditions: [{ field: "dept", op: "inList", rhs: { kind: "value", value: "Ban gi\xE1m \u0111\u1ED1c, Ban \u0111i\u1EC1u h\xE0nh" } }],
        actions: [
          { type: "setValue", targets: ["contractType"], value: "V\xF4 th\u1EDDi h\u1EA1n" },
          { type: "hide", targets: ["term", "termUnit"] }
        ]
      }
    ]
  };
}
function fbCoerceDefault(t, v) {
  if (v == null || v === "")
    return void 0;
  switch (t) {
    case "toggle":
      return v === "true" || v === "1" || v === "B\u1EADt" || v === "On";
    case "number":
    case "percent":
    case "money":
    case "rating": {
      const n = Number(v.replace(/,/g, ""));
      return Number.isNaN(n) ? void 0 : n;
    }
    case "multiselect":
    case "checkbox":
      return v.split(",").map((x) => x.trim()).filter(Boolean);
    case "date": {
      const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(v.trim());
      if (!m)
        return void 0;
      const d = new Date(+m[3], +m[2] - 1, +m[1]);
      return d.getDate() === +m[1] ? d : void 0;
    }
    case "time": {
      const m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(v.trim());
      if (!m)
        return void 0;
      const d = new Date(2e3, 0, 1, +m[1], +m[2], +(m[3] || 0));
      return d;
    }
    default:
      return v;
  }
}
function fbCoerceForType(t, v) {
  if (typeof v !== "string" || !t)
    return v;
  const out = fbCoerceDefault(t, v);
  return out === void 0 ? v : out;
}
function fbRenameInFormula(formula, oldK, newK) {
  return formula.split(`[${oldK}]`).join(`[${newK}]`);
}
function fbRenameKey(schema, oldK, newK) {
  const fixCond = (c) => __spreadProps(__spreadValues({}, c), {
    field: c.field === oldK ? newK : c.field,
    rhs: c.rhs?.kind === "field" && c.rhs.field === oldK ? __spreadProps(__spreadValues({}, c.rhs), { field: newK }) : c.rhs
  });
  return __spreadProps(__spreadValues({}, schema), {
    sections: schema.sections.map((sec) => __spreadProps(__spreadValues({}, sec), {
      fields: sec.fields.map((f2) => __spreadProps(__spreadValues({}, f2), {
        visibleWhen: f2.visibleWhen ? fixCond(f2.visibleWhen) : f2.visibleWhen,
        requiredWhen: f2.requiredWhen ? fixCond(f2.requiredWhen) : f2.requiredWhen,
        onChange: f2.onChange?.map((a) => a.set === oldK ? __spreadProps(__spreadValues({}, a), { set: newK }) : a)
      }))
    })),
    rules: schema.rules.map((r) => __spreadProps(__spreadValues({}, r), {
      conditions: r.conditions.map(fixCond),
      actions: r.actions.map((a) => __spreadProps(__spreadValues({}, a), {
        targets: (a.targets || []).map((t) => t === oldK ? newK : t),
        fromField: a.fromField === oldK ? newK : a.fromField,
        formula: a.formula ? fbRenameInFormula(a.formula, oldK, newK) : a.formula
      }))
    }))
  });
}
function fbCleanupKey(schema, k) {
  return __spreadProps(__spreadValues({}, schema), {
    sections: schema.sections.map((sec) => __spreadProps(__spreadValues({}, sec), {
      fields: sec.fields.map((f2) => __spreadProps(__spreadValues({}, f2), {
        visibleWhen: f2.visibleWhen?.field === k || f2.visibleWhen?.rhs?.field === k ? null : f2.visibleWhen,
        requiredWhen: f2.requiredWhen?.field === k || f2.requiredWhen?.rhs?.field === k ? null : f2.requiredWhen,
        onChange: f2.onChange?.filter((a) => a.set !== k)
      }))
    })),
    rules: schema.rules.map((r) => __spreadProps(__spreadValues({}, r), {
      conditions: r.conditions.filter((c) => c.field !== k && c.rhs?.field !== k),
      actions: r.actions.map((a) => __spreadProps(__spreadValues({}, a), { targets: (a.targets || []).filter((t) => t !== k) })).filter((a) => a.targets.length && a.fromField !== k && !(a.formula || "").includes(`[${k}]`))
    })).filter((r) => r.conditions.length && r.actions.length)
  });
}
var FB_STORE_KEY = "ds.formBuilder.schema";
function fbMigrate(parsed) {
  if (!Array.isArray(parsed?.sections))
    return null;
  if (parsed.version === 2 && Array.isArray(parsed.rules)) {
    const sc = parsed;
    if (!Array.isArray(sc.locales) || !sc.locales.length)
      sc.locales = [...FB_DEFAULT_LOCALES];
    for (const sec of sc.sections)
      for (const f2 of sec.fields) {
        if (!f2.labels) {
          const m = {};
          if (f2.labelEn)
            m["en"] = f2.labelEn;
          if (f2.labelCn)
            m["cn"] = f2.labelCn;
          if (Object.keys(m).length)
            f2.labels = m;
        }
      }
    return sc;
  }
  if (parsed.version === 1)
    return __spreadProps(__spreadValues({}, parsed), { version: 2, rules: [] });
  return null;
}
function fbLoadSchema() {
  try {
    const raw = localStorage.getItem(FB_STORE_KEY);
    if (!raw)
      return fbDefaultSchema();
    const migrated = fbMigrate(JSON.parse(raw));
    if (migrated) {
      fbSeedSeqFrom(migrated);
      return migrated;
    }
    return fbDefaultSchema();
  } catch {
    return fbDefaultSchema();
  }
}
function fbSaveSchema(s) {
  try {
    localStorage.setItem(FB_STORE_KEY, JSON.stringify(s));
  } catch {
  }
}

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/_form-expr.ts
function fbDaysInMonth(y, m) {
  return new Date(y, m, 0).getDate();
}
function fbParseDmy(v) {
  if (v instanceof Date) {
    return Number.isNaN(v.getTime()) ? null : v;
  }
  if (typeof v !== "string") {
    return null;
  }
  const m = /^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/.exec(v);
  if (!m) {
    return null;
  }
  const d = +m[1], mo = +m[2], y = +m[3];
  if (mo < 1 || mo > 12 || d < 1 || d > fbDaysInMonth(y, mo)) {
    return null;
  }
  return new Date(y, mo - 1, d);
}
function fbFmtDmy(d) {
  const p2 = (n) => String(n).padStart(2, "0");
  return `${p2(d.getDate())}/${p2(d.getMonth() + 1)}/${d.getFullYear()}`;
}
function fbAddMonths(d, n) {
  const total = d.getMonth() + n;
  const y = d.getFullYear() + Math.floor(total / 12);
  const m = (total % 12 + 12) % 12;
  return new Date(y, m, Math.min(d.getDate(), fbDaysInMonth(y, m + 1)));
}
function fbIsNum(v) {
  if (typeof v === "number") {
    return true;
  }
  if (typeof v !== "string" || v.trim() === "") {
    return false;
  }
  return !Number.isNaN(Number(v));
}
function fbToNum(v) {
  if (typeof v === "number") {
    return v;
  }
  return fbIsNum(v) ? Number(v) : NaN;
}
function fbTruthy(v) {
  return v !== false && v !== 0 && v !== "" && v != null;
}
function fbCompare(a, b) {
  const da = fbParseDmy(a), db = fbParseDmy(b);
  if (da && db) {
    return da.getTime() - db.getTime();
  }
  if (fbIsNum(a) && fbIsNum(b)) {
    return fbToNum(a) - fbToNum(b);
  }
  const sa = String(a), sb = String(b);
  return sa < sb ? -1 : sa > sb ? 1 : 0;
}
function fbNormField(v) {
  if (v == null) {
    return "";
  }
  if (v instanceof Date) {
    return fbFmtDmy(v);
  }
  if (typeof v === "number" || typeof v === "boolean" || typeof v === "string") {
    return v;
  }
  return String(v);
}
function fbToDate(v) {
  const d = fbParseDmy(v);
  if (!d) {
    throw new Error(`ng\xE0y kh\xF4ng h\u1EE3p l\u1EC7: ${String(v)}`);
  }
  return d;
}
function fbToInt(v) {
  const n = fbToNum(v);
  if (Number.isNaN(n)) {
    throw new Error(`kh\xF4ng ph\u1EA3i s\u1ED1: ${String(v)}`);
  }
  return Math.trunc(n);
}
function fbCallFn(name, args) {
  const need = (n) => {
    if (args.length !== n) {
      throw new Error(`${name} c\u1EA7n ${n} tham s\u1ED1`);
    }
  };
  switch (name.toUpperCase()) {
    case "IF":
      need(3);
      return fbTruthy(args[0]()) ? args[1]() : args[2]();
    case "TODAY":
      need(0);
      return fbFmtDmy(/* @__PURE__ */ new Date());
    case "ADDDAY": {
      need(2);
      const d = fbToDate(args[0]());
      return fbFmtDmy(new Date(d.getFullYear(), d.getMonth(), d.getDate() + fbToInt(args[1]())));
    }
    case "ADDMONTH":
      need(2);
      return fbFmtDmy(fbAddMonths(fbToDate(args[0]()), fbToInt(args[1]())));
    case "ADDYEAR":
      need(2);
      return fbFmtDmy(fbAddMonths(fbToDate(args[0]()), fbToInt(args[1]()) * 12));
    default:
      throw new Error(`h\xE0m kh\xF4ng h\u1ED7 tr\u1EE3: ${name}`);
  }
}
function fbTokenize(src) {
  const toks = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    if (c === "[") {
      const end = src.indexOf("]", i + 1);
      if (end < 0) {
        throw new Error("thi\u1EBFu ]");
      }
      toks.push({ t: "field", v: src.slice(i + 1, end).trim() });
      i = end + 1;
      continue;
    }
    if (c === "'" || c === '"') {
      const end = src.indexOf(c, i + 1);
      if (end < 0) {
        throw new Error("thi\u1EBFu \u0111\xF3ng nh\xE1y");
      }
      toks.push({ t: "str", v: src.slice(i + 1, end) });
      i = end + 1;
      continue;
    }
    if (/\d/.test(c)) {
      const m = /^\d+(\.\d+)?/.exec(src.slice(i));
      toks.push({ t: "num", v: m[0] });
      i += m[0].length;
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      const m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i));
      toks.push({ t: "ident", v: m[0] });
      i += m[0].length;
      continue;
    }
    const two = src.slice(i, i + 2);
    if (["||", "&&", "==", "!=", "<=", ">="].includes(two)) {
      toks.push({ t: "op", v: two });
      i += 2;
      continue;
    }
    if ("<>+-*/%(),".includes(c)) {
      toks.push({ t: "op", v: c });
      i++;
      continue;
    }
    if (c === "=") {
      toks.push({ t: "op", v: "==" });
      i++;
      continue;
    }
    throw new Error(`k\xFD t\u1EF1 l\u1EA1: ${c}`);
  }
  return toks;
}
function fbEvalFormula(formula, get) {
  try {
    const toks = fbTokenize(formula);
    let pos = 0;
    const peek = () => toks[pos];
    const isOp = (...ops) => {
      const t = peek();
      return !!t && t.t === "op" && ops.includes(t.v);
    };
    const expectOp = (op) => {
      if (!isOp(op)) {
        throw new Error(`c\u1EA7n '${op}'`);
      }
      pos++;
    };
    const parsePrimary = () => {
      const t = peek();
      if (!t) {
        throw new Error("h\u1EBFt token");
      }
      if (t.t === "num") {
        pos++;
        const v = Number(t.v);
        return () => v;
      }
      if (t.t === "str") {
        pos++;
        const v = t.v;
        return () => v;
      }
      if (t.t === "field") {
        pos++;
        const key = t.v;
        return () => fbNormField(get(key));
      }
      if (t.t === "ident") {
        pos++;
        const name = t.v;
        expectOp("(");
        const args = [];
        if (!isOp(")")) {
          args.push(parseOr());
          while (isOp(",")) {
            pos++;
            args.push(parseOr());
          }
        }
        expectOp(")");
        return () => fbCallFn(name, args);
      }
      if (isOp("(")) {
        pos++;
        const v = parseOr();
        expectOp(")");
        return v;
      }
      throw new Error(`token l\u1EA1: ${t.v}`);
    };
    const parseUnary = () => {
      if (isOp("-")) {
        pos++;
        const inner = parseUnary();
        return () => {
          const n = fbToNum(inner());
          if (Number.isNaN(n)) {
            throw new Error("unary - c\u1EA7n s\u1ED1");
          }
          return -n;
        };
      }
      return parsePrimary();
    };
    const parseMul = () => {
      let v = parseUnary();
      while (isOp("*", "/", "%")) {
        const op = toks[pos++].v;
        const left = v, right = parseUnary();
        v = () => {
          const a = fbToNum(left()), b = fbToNum(right());
          if (Number.isNaN(a) || Number.isNaN(b)) {
            throw new Error(`${op} c\u1EA7n s\u1ED1`);
          }
          return op === "*" ? a * b : op === "/" ? a / b : a % b;
        };
      }
      return v;
    };
    const parseAdd = () => {
      let v = parseMul();
      while (isOp("+", "-")) {
        const op = toks[pos++].v;
        const left = v, right = parseMul();
        v = () => {
          const lv = left(), rv = right();
          if (op === "+") {
            return fbIsNum(lv) && fbIsNum(rv) ? fbToNum(lv) + fbToNum(rv) : String(lv) + String(rv);
          }
          const a = fbToNum(lv), b = fbToNum(rv);
          if (Number.isNaN(a) || Number.isNaN(b)) {
            throw new Error("- c\u1EA7n s\u1ED1");
          }
          return a - b;
        };
      }
      return v;
    };
    const parseCmp = () => {
      let v = parseAdd();
      while (isOp("<", "<=", ">", ">=")) {
        const op = toks[pos++].v;
        const left = v, right = parseAdd();
        v = () => {
          const c = fbCompare(left(), right());
          return op === "<" ? c < 0 : op === "<=" ? c <= 0 : op === ">" ? c > 0 : c >= 0;
        };
      }
      return v;
    };
    const parseEq = () => {
      let v = parseCmp();
      while (isOp("==", "!=")) {
        const op = toks[pos++].v;
        const left = v, right = parseCmp();
        v = () => {
          const c = fbCompare(left(), right());
          return op === "==" ? c === 0 : c !== 0;
        };
      }
      return v;
    };
    const parseAnd = () => {
      let v = parseEq();
      while (isOp("&&")) {
        pos++;
        const left = v, right = parseEq();
        v = () => fbTruthy(left()) ? fbTruthy(right()) : false;
      }
      return v;
    };
    const parseOr = () => {
      let v = parseAnd();
      while (isOp("||")) {
        pos++;
        const left = v, right = parseAnd();
        v = () => fbTruthy(left()) ? true : fbTruthy(right());
      }
      return v;
    };
    const resultThunk = parseOr();
    if (pos < toks.length) {
      throw new Error("th\u1EEBa token cu\u1ED1i c\xF4ng th\u1EE9c");
    }
    return resultThunk();
  } catch {
    return "";
  }
}

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/_fb-i18n.ts
var D = {
  // ── topbar ──
  brand: { vi: "Form Builder", en: "Form Builder" },
  formNamePh: { vi: "T\xEAn bi\u1EC3u m\u1EABu", en: "Form name" },
  undo: { vi: "Ho\xE0n t\xE1c", en: "Undo" },
  redo: { vi: "L\xE0m l\u1EA1i", en: "Redo" },
  desktop: { vi: "Desktop", en: "Desktop" },
  tablet: { vi: "Tablet", en: "Tablet" },
  mobile: { vi: "Mobile", en: "Mobile" },
  lightMode: { vi: "N\u1EC1n s\xE1ng", en: "Light mode" },
  darkMode: { vi: "N\u1EC1n t\u1ED1i", en: "Dark mode" },
  rules: { vi: "Quy t\u1EAFc", en: "Rules" },
  themeBtn: { vi: "Giao di\u1EC7n", en: "Design" },
  preview: { vi: "Xem tr\u01B0\u1EDBc", en: "Preview" },
  save: { vi: "L\u01B0u nh\xE1p", en: "Save draft" },
  closeBuilder: { vi: "\u0110\xF3ng builder", en: "Close builder" },
  // ── palette ──
  searchPh: { vi: "T\xECm th\xE0nh ph\u1EA7n\u2026", en: "Search elements\u2026" },
  palHint: { vi: "B\u1EA5m ho\u1EB7c k\xE9o v\xE0o bi\u1EC3u m\u1EABu", en: "Click or drag into the form" },
  // ── canvas ──
  untitled: { vi: "Bi\u1EC3u m\u1EABu ch\u01B0a \u0111\u1EB7t t\xEAn", en: "Untitled form" },
  secTitlePh: { vi: "Ti\xEAu \u0111\u1EC1 nh\xF3m", en: "Section title" },
  addSecBelow: { vi: "Th\xEAm nh\xF3m d\u01B0\u1EDBi", en: "Add section below" },
  delSec: { vi: "Xo\xE1 nh\xF3m", en: "Delete section" },
  addSection: { vi: "Th\xEAm nh\xF3m th\xF4ng tin", en: "Add section" },
  emptySec: { vi: "K\xE9o th\xE0nh ph\u1EA7n t\u1EEB panel tr\xE1i v\xE0o \u0111\xE2y", en: "Drag an element from the left panel here" },
  dragMove: { vi: "K\xE9o \u0111\u1EC3 di chuy\u1EC3n", en: "Drag to move" },
  duplicate: { vi: "Nh\xE2n b\u1EA3n", en: "Duplicate" },
  delField: { vi: "Xo\xE1 tr\u01B0\u1EDDng", en: "Delete field" },
  tagLogic: { vi: "Logic", en: "Logic" },
  tagHidden: { vi: "\u1EA8n", en: "Hidden" },
  collapseLeft: { vi: "Thu g\u1ECDn panel th\xE0nh ph\u1EA7n", en: "Collapse elements panel" },
  expandLeft: { vi: "M\u1EDF panel th\xE0nh ph\u1EA7n", en: "Expand elements panel" },
  collapseRight: { vi: "Thu g\u1ECDn panel thu\u1ED9c t\xEDnh", en: "Collapse properties panel" },
  expandRight: { vi: "M\u1EDF panel thu\u1ED9c t\xEDnh", en: "Expand properties panel" },
  // ── props panel ──
  propsOf: { vi: "Thu\u1ED9c t\xEDnh bi\u1EC3u m\u1EABu", en: "Form properties" },
  deselect: { vi: "B\u1ECF ch\u1ECDn", en: "Deselect" },
  secProps: { vi: "Thu\u1ED9c t\xEDnh", en: "Properties" },
  secData: { vi: "D\u1EEF li\u1EC7u", en: "Data" },
  secLayout: { vi: "B\u1ED1 c\u1EE5c", en: "Layout" },
  secValid: { vi: "R\xE0ng bu\u1ED9c d\u1EEF li\u1EC7u", en: "Data constraints" },
  secCond: { vi: "\u0110i\u1EC1u ki\u1EC7n hi\u1EC3n th\u1ECB", en: "Visibility conditions" },
  secEvent: { vi: "S\u1EF1 ki\u1EC7n", en: "Events" },
  labelMain: { vi: "Nh\xE3n", en: "Label" },
  translations: { vi: "B\u1EA3n d\u1ECBch", en: "Translations" },
  transMissing: { vi: "Ch\u01B0a d\u1ECBch", en: "Not translated" },
  autoTranslate: { vi: "D\u1ECBch t\u1EF1 \u0111\u1ED9ng (s\u1EAFp c\xF3)", en: "Auto-translate (coming soon)" },
  projLocales: { vi: "Ng\xF4n ng\u1EEF d\u1EF1 \xE1n", en: "Project languages" },
  projLocalesHint: { vi: "Ng\xF4n ng\u1EEF \u0110\u1EA6U danh s\xE1ch l\xE0 ng\xF4n ng\u1EEF ch\xEDnh \u2014 b\u1EA3n d\u1ECBch thi\u1EBFu s\u1EBD fallback v\u1EC1 n\xF3. Production: c\u1EA5u h\xECnh theo tenant.", en: "The FIRST language is the primary one \u2014 missing translations fall back to it. Production: tenant-level config." },
  labelVi: { vi: "Nh\xE3n (VN)", en: "Label (VN)" },
  labelEn: { vi: "Nh\xE3n (EN)", en: "Label (EN)" },
  labelCn: { vi: "Nh\xE3n (CN)", en: "Label (CN)" },
  dataKey: { vi: "Kho\xE1 d\u1EEF li\u1EC7u (t\xEAn c\u1ED9t)", en: "Data key (name)" },
  placeholder: { vi: "Ch\u1EEF g\u1EE3i \xFD trong \xF4", en: "Placeholder" },
  helper: { vi: "M\xF4 t\u1EA3 d\u01B0\u1EDBi tr\u01B0\u1EDDng", en: "Helper text" },
  hiddenToggle: { vi: "\u1EA8n tr\u01B0\u1EDDng (quy t\u1EAFc c\xF3 th\u1EC3 hi\u1EC7n l\u1EA1i)", en: "Hidden (rules can show it)" },
  logicTipTitle: { vi: "Quy t\u1EAFc & s\u1EF1 ki\u1EC7n \xE1p d\u1EE5ng", en: "Applied logic" },
  evFxPh: { vi: "VD: IF([term] > 12, 'D\xE0i h\u1EA1n', 'Ng\u1EAFn h\u1EA1n')", en: "e.g. IF([term] > 12, 'Long', 'Short')" },
  scriptTitle: { vi: "Script n\xE2ng cao (JavaScript)", en: "Advanced script (JavaScript)" },
  scriptPh: { vi: "// Ch\u1EA1y khi tr\u01B0\u1EDDng n\xE0y \u0111\u1ED5i gi\xE1 tr\u1ECB\n// API: form.get('kho\xE1') \xB7 form.set('kho\xE1', gi\xE1_tr\u1ECB) \xB7 value \xB7 oldValue\nif (value && !form.get('email')) {\n  form.set('note', 'Thi\u1EBFu email');\n}", en: "// Runs when this field changes\n// API: form.get(key) \xB7 form.set(key, value) \xB7 value \xB7 oldValue" },
  scriptHint: { vi: "Low-code cho dev \u2014 API b\u1EA3o h\u1ED9 form.get/form.set, l\u1ED7i script kh\xF4ng l\xE0m v\u1EE1 bi\u1EC3u m\u1EABu. B\u1EA3n demo ch\u1EA1y sandbox tr\xECnh duy\u1EC7t; b\u1EA3n ch\xEDnh th\u1EE9c ch\u1EA1y trong sandbox ri\xEAng.", en: "Low-code for devs \u2014 guarded form.get/form.set API; script errors never break the form. Demo runs in a browser sandbox; production uses an isolated sandbox." },
  exclNum: { vi: "Kh\xE1c c\xE1c gi\xE1 tr\u1ECB (c\u1EA5m nh\u1EADp)", en: "Excluded values" },
  exclDates: { vi: "Lo\u1EA1i tr\u1EEB ng\xE0y c\u1EE5 th\u1EC3", en: "Excluded dates" },
  weekdaysAllow: { vi: "Ch\u1EC9 cho ch\u1ECDn th\u1EE9", en: "Allowed weekdays" },
  weekdaysAllowPh: { vi: "M\u1EB7c \u0111\u1ECBnh: m\u1ECDi th\u1EE9", en: "Default: any day" },
  noHolidays: { vi: "Ch\u1EB7n ng\xE0y l\u1EC5/T\u1EBFt/ngh\u1EC9 c\xF4ng ty", en: "Block holidays/company days off" },
  customFmt: { vi: "Pattern t\xF9y ch\u1EC9nh", en: "Custom pattern" },
  rNumExcluded: { vi: "Gi\xE1 tr\u1ECB {n} kh\xF4ng \u0111\u01B0\u1EE3c ph\xE9p", en: "Value {n} is not allowed" },
  rDateExcluded: { vi: "Ng\xE0y n\xE0y \u0111\xE3 b\u1ECB lo\u1EA1i tr\u1EEB", en: "This date is excluded" },
  rWeekdayNot: { vi: "Kh\xF4ng r\u01A1i v\xE0o th\u1EE9 cho ph\xE9p", en: "Not an allowed weekday" },
  rHoliday: { vi: "Tr\xF9ng ng\xE0y l\u1EC5/T\u1EBFt/ngh\u1EC9 c\xF4ng ty", en: "Falls on a holiday/company day off" },
  rMaxFilesHit: { vi: "\u0110\xE3 \u0111\u1EA1t t\u1ED1i \u0111a {n} t\u1EC7p", en: "Reached the {n}-file limit" },
  tagDraft: { vi: "Nh\xE1p", en: "Draft" },
  publish: { vi: "Xu\u1EA5t b\u1EA3n", en: "Publish" },
  publishTitle: { vi: "Xu\u1EA5t b\u1EA3n tr\u01B0\u1EDDng m\u1EDBi \u2014 sinh c\u1ED9t d\u1EEF li\u1EC7u", en: "Publish new fields \u2014 create data columns" },
  publishDesc: { vi: "C\xE1c tr\u01B0\u1EDDng Nh\xE1p d\u01B0\u1EDBi \u0111\xE2y s\u1EBD \u0111\u01B0\u1EE3c t\u1EA1o C\u1ED8T TH\u1EACT trong b\u1EA3ng d\u1EEF li\u1EC7u. Sau xu\u1EA5t b\u1EA3n: kho\xE1 d\u1EEF li\u1EC7u b\u1ECB KHO\xC1, xo\xE1 tr\u01B0\u1EDDng ch\u1EC9 c\xF2n d\u1EA1ng \u1EA8N \u2014 d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c gi\u1EEF.", en: "Draft fields below will get REAL COLUMNS in the data table. After publishing: the data key is LOCKED and deleting only HIDES the field \u2014 data is kept." },
  publishEmpty: { vi: "Kh\xF4ng c\xF3 tr\u01B0\u1EDDng Nh\xE1p \u2014 m\u1ECDi tr\u01B0\u1EDDng \u0111\xE3 c\xF3 c\u1ED9t d\u1EEF li\u1EC7u.", en: "No draft fields \u2014 every field already has a data column." },
  publishN: { vi: "Xu\u1EA5t b\u1EA3n {n} tr\u01B0\u1EDDng", en: "Publish {n} fields" },
  pubColLabel: { vi: "Nh\xE3n", en: "Label" },
  pubColKey: { vi: "Kho\xE1", en: "Key" },
  pubColType: { vi: "Lo\u1EA1i", en: "Type" },
  pubColSql: { vi: "Ki\u1EC3u c\u1ED9t", en: "Column type" },
  pubSqlPreview: { vi: "Xem tr\u01B0\u1EDBc migration (m\xF4 ph\u1ECFng)", en: "Migration preview (simulated)" },
  keyLocked: { vi: "\u0110\xE3 xu\u1EA5t b\u1EA3n \u2014 kho\xE1 l\xE0 T\xCAN C\u1ED8T d\u1EEF li\u1EC7u th\u1EADt, kh\xF4ng \u0111\u1ED5i \u0111\u01B0\u1EE3c. Nh\xE3n v\u1EABn s\u1EEDa t\u1EF1 do.", en: "Published \u2014 the key is the real COLUMN NAME and cannot change. The label stays editable." },
  usedAt: { vi: "\u0110ang s\u1EED d\u1EE5ng t\u1EA1i", en: "Used in" },
  archTitle: { vi: "Tr\u01B0\u1EDDng \u0111\xE3 c\xF3 c\u1ED9t d\u1EEF li\u1EC7u", en: "Field has a data column" },
  archDesc: { vi: "\xAB{label}\xBB \u0111\xE3 xu\u1EA5t b\u1EA3n \u2014 c\u1ED9t v\xE0 d\u1EEF li\u1EC7u th\u1EADt \u0111\u01B0\u1EE3c GI\u1EEE NGUY\xCAN. Ch\u1EC9 c\xF3 th\u1EC3 \u1EA8N tr\u01B0\u1EDDng kh\u1ECFi bi\u1EC3u m\u1EABu, kh\xF4ng xo\xE1 v\u0129nh vi\u1EC5n.", en: "\u201C{label}\u201D is published \u2014 its column and data are KEPT. You can only HIDE it from the form, not delete it permanently." },
  archHide: { vi: "\u1EA8n tr\u01B0\u1EDDng", en: "Hide field" },
  cancel: { vi: "Hu\u1EF7", en: "Cancel" },
  close: { vi: "\u0110\xF3ng", en: "Close" },
  datasource: { vi: "Ngu\u1ED3n d\u1EEF li\u1EC7u", en: "Data source" },
  dsCustom: { vi: "T\u1EF1 thi\u1EBFt l\u1EADp", en: "Custom list" },
  dsSql: { vi: "T\u1EEB SQL", en: "From SQL" },
  dsApi: { vi: "API", en: "API" },
  dsEnum: { vi: "Enum", en: "Enum" },
  dsConfigSql: { vi: "C\xE2u truy v\u1EA5n SQL (VD: SELECT id, name FROM dm_phong_ban)", en: "SQL query (e.g. SELECT id, name FROM departments)" },
  dsConfigApi: { vi: "URL API tr\u1EA3 v\u1EC1 danh s\xE1ch (VD: /api/catalogs/departments)", en: "API URL returning the list" },
  dsConfigEnum: { vi: "T\xEAn Enum h\u1EC7 th\u1ED1ng (VD: ContractType)", en: "System enum name (e.g. ContractType)" },
  dsNote: { vi: "Ngu\u1ED3n ngo\xE0i k\u1EBFt n\u1ED1i khi ch\u1EA1y th\u1EADt \u2014 b\u1EA3n demo hi\u1EC3n th\u1ECB ch\u1EEF g\u1EE3i \xFD.", en: "External sources connect at runtime \u2014 demo shows a placeholder." },
  optDup: { vi: "Tr\xF9ng", en: "Duplicate" },
  minGtMax: { vi: "Min \u0111ang l\u1EDBn h\u01A1n Max", en: "Min is greater than Max" },
  optionsList: { vi: "Danh s\xE1ch l\u1EF1a ch\u1ECDn (t\u1EF1 thi\u1EBFt l\u1EADp)", en: "Options (custom list)" },
  addOption: { vi: "Th\xEAm l\u1EF1a ch\u1ECDn", en: "Add option" },
  delOption: { vi: "Xo\xE1 l\u1EF1a ch\u1ECDn", en: "Remove option" },
  moneyUnits: { vi: "\u0110\u01A1n v\u1ECB ti\u1EC1n t\u1EC7 (ph\u1EA9y)", en: "Currency units (comma-separated)" },
  moneyUnitDefault: { vi: "\u0110\u01A1n v\u1ECB m\u1EB7c \u0111\u1ECBnh", en: "Default unit" },
  codePrefix: { vi: "Ti\u1EC1n t\u1ED1 m\xE3 (VD G-)", en: "Code prefix (e.g. G-)" },
  codeHint: { vi: "M\xE3 sinh t\u1EF1 \u0111\u1ED9ng theo quy t\u1EAFc: {p}[S\u1ED1 t\u0103ng d\u1EA7n] \u2014 d\xF9ng l\u1EA1i b\u1ED9 sinh m\xE3 c\u1EE7a h\u1EC7 th\u1ED1ng.", en: "Auto-generated code: {p}[incrementing number] \u2014 reuses the system code generator." },
  defaultValue: { vi: "Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh", en: "Default value" },
  widthCols: { vi: "\u0110\u1ED9 r\u1ED9ng (c\u1ED9t)", en: "Width (columns)" },
  fullRow: { vi: "C\u1EA3 h\xE0ng", en: "Full row" },
  required: { vi: "B\u1EAFt bu\u1ED9c nh\u1EADp", en: "Required" },
  requiredMsg: { vi: "Th\xF4ng b\xE1o b\u1EAFt bu\u1ED9c nh\u1EADp", en: "Required message" },
  readonly: { vi: "Ch\u1EC9 \u0111\u1ECDc", en: "Read-only" },
  minLen: { vi: "\u0110\u1ED9 d\xE0i t\u1ED1i thi\u1EC3u", en: "Min length" },
  maxLen: { vi: "\u0110\u1ED9 d\xE0i t\u1ED1i \u0111a", en: "Max length" },
  forbidden: { vi: "Kh\xF4ng ch\u1EE9a c\xE1c gi\xE1 tr\u1ECB (ph\u1EA9y)", en: "Must not contain (comma-separated)" },
  minVal: { vi: "Gi\xE1 tr\u1ECB Min", en: "Min value" },
  maxVal: { vi: "Gi\xE1 tr\u1ECB Max", en: "Max value" },
  numFmt: { vi: "\u0110\u1ECBnh d\u1EA1ng s\u1ED1", en: "Number format" },
  intOnly: { vi: "S\u1ED1 nguy\xEAn", en: "Integer" },
  decimalFmt: { vi: "Th\u1EADp ph\xE2n", en: "Decimal" },
  fromDate: { vi: "T\u1EEB ng\xE0y", en: "From date (min)" },
  toDate: { vi: "\u0110\u1EBFn ng\xE0y", en: "To date (max)" },
  displayFmt: { vi: "\u0110\u1ECBnh d\u1EA1ng hi\u1EC3n th\u1ECB", en: "Display format" },
  maxFiles: { vi: "S\u1ED1 file t\u1ED1i \u0111a", en: "Max files" },
  maxSize: { vi: "Dung l\u01B0\u1EE3ng (MB)", en: "Max size (MB)" },
  fileTypes: { vi: "\u0110\u1ECBnh d\u1EA1ng file (ph\u1EA9y)", en: "File types (comma-separated)" },
  showWhen: { vi: "Ch\u1EC9 hi\u1EC7n khi tho\u1EA3 \u0111i\u1EC1u ki\u1EC7n", en: "Show only when condition matches" },
  pickField: { vi: "Ch\u1ECDn tr\u01B0\u1EDDng", en: "Select field" },
  cmpValue: { vi: "Gi\xE1 tr\u1ECB so s\xE1nh", en: "Comparison value" },
  condHint: { vi: "\u0110i\u1EC1u ki\u1EC7n nhi\u1EC1u v\u1EBF / nhi\u1EC1u h\xE0nh \u0111\u1ED9ng \u2192 d\xF9ng n\xFAt Quy t\u1EAFc tr\xEAn thanh c\xF4ng c\u1EE5.", en: "Multi-condition / multi-action logic \u2192 use the Rules button in the toolbar." },
  onChangeTitle: { vi: "Khi \u0111\u1ED5i gi\xE1 tr\u1ECB", en: "On value change" },
  setField: { vi: "\u0110\u1EB7t tr\u01B0\u1EDDng", en: "Set field" },
  toValue: { vi: "= gi\xE1 tr\u1ECB", en: "= value" },
  valuePh: { vi: "Gi\xE1 tr\u1ECB", en: "Value" },
  addEvent: { vi: "Th\xEAm s\u1EF1 ki\u1EC7n", en: "Add event" },
  delEvent: { vi: "Xo\xE1 s\u1EF1 ki\u1EC7n", en: "Remove event" },
  eventHint: { vi: "Sao ch\xE9p gi\xE1 tr\u1ECB / c\xF4ng th\u1EE9c t\xEDnh to\xE1n \u2192 d\xF9ng n\xFAt Quy t\u1EAFc.", en: "Copy values / computed formulas \u2192 use the Rules button." },
  formName: { vi: "T\xEAn bi\u1EC3u m\u1EABu", en: "Form name" },
  formDesc: { vi: "M\xF4 t\u1EA3", en: "Description" },
  formHint: { vi: "B\u1EA5m m\u1ED9t tr\u01B0\u1EDDng tr\xEAn canvas \u0111\u1EC3 m\u1EDF thu\u1ED9c t\xEDnh, d\u1EEF li\u1EC7u, b\u1ED1 c\u1EE5c, ki\u1EC3m tra, \u0111i\u1EC1u ki\u1EC7n v\xE0 s\u1EF1 ki\u1EC7n. Quy t\u1EAFc nghi\u1EC7p v\u1EE5 t\u1EADp trung (\u0111a \u0111i\u1EC1u ki\u1EC7n, \u0111a h\xE0nh \u0111\u1ED9ng) \u1EDF n\xFAt Quy t\u1EAFc.", en: "Click a field on the canvas to edit its properties, data, layout, validation, conditions and events. Centralized business rules (multi-condition, multi-action) live under the Rules button." },
  resetForm: { vi: "Kh\xF4i ph\u1EE5c bi\u1EC3u m\u1EABu m\u1EB7c \u0111\u1ECBnh", en: "Restore default form" },
  // ── AI Assistant (tham khảo Vueform) ──
  aiBtn: { vi: "Tr\u1EE3 l\xFD VNAI", en: "VNAI Assistant" },
  aiTitle: { vi: "Tr\u1EE3 l\xFD VNAI \u2014 t\u1EA1o bi\u1EC3u m\u1EABu t\u1EEB m\xF4 t\u1EA3", en: "VNAI Assistant \u2014 generate a form from a description" },
  aiPromptPh: { vi: "M\xF4 t\u1EA3 bi\u1EC3u m\u1EABu b\u1EA1n mu\u1ED1n t\u1EA1o\u2026 (VD: Bi\u1EC3u m\u1EABu c\xF4ng t\xE1c g\u1ED3m: nh\xE2n vi\xEAn, ng\xE0y \u0111i, ng\xE0y v\u1EC1, chi ph\xED, l\xFD do b\u1EAFt bu\u1ED9c)", en: "Describe the form you want\u2026 (e.g. Business trip form with: employee, start date, end date, budget, reason required)" },
  aiSuggest: { vi: "G\u1EE3i \xFD:", en: "Try:" },
  aiGenerate: { vi: "T\u1EA1o bi\u1EC3u m\u1EABu", en: "Generate form" },
  aiFail: { vi: 'Ch\u01B0a hi\u1EC3u m\xF4 t\u1EA3 \u2014 th\u1EED th\xEAm "g\u1ED3m: tr\u01B0\u1EDDng A, tr\u01B0\u1EDDng B\u2026" ho\u1EB7c ch\u1ECDn 1 g\u1EE3i \xFD.', en: 'Could not parse \u2014 try adding "with: field A, field B\u2026" or pick a suggestion.' },
  aiNote: { vi: "B\u1EA3n demo ch\u1EA1y offline (ph\xE2n t\xEDch t\u1EEB kho\xE1) \u2014 b\u1EA3n ch\xEDnh th\u1EE9c s\u1EBD n\u1ED1i model AI, schema kh\xF4ng \u0111\u1ED5i. Bi\u1EC3u m\u1EABu hi\u1EC7n t\u1EA1i s\u1EBD \u0111\u01B0\u1EE3c thay th\u1EBF (Ho\xE0n t\xE1c \u0111\u01B0\u1EE3c).", en: "Demo runs offline (keyword parsing) \u2014 production plugs in an AI model, same schema. The current form will be replaced (undoable)." },
  aiSpecialist: { vi: "Chuy\xEAn gia bi\u1EC3u m\u1EABu VnResource", en: "VnResource Form Specialist" },
  aiGreeting: { vi: "Xin ch\xE0o! M\xF4 t\u1EA3 bi\u1EC3u m\u1EABu b\u1EA1n mu\u1ED1n t\u1EA1o, t\xF4i s\u1EBD d\u1EF1ng ngay tr\xEAn canvas. B\u1EA1n c\xF3 th\u1EC3 th\u1EED m\u1ED9t g\u1EE3i \xFD b\xEAn d\u01B0\u1EDBi.", en: "Hi! Describe the form you want and I will build it on the canvas. You can try a suggestion below." },
  aiDone: { vi: '\u0110\xE3 t\u1EA1o bi\u1EC3u m\u1EABu "{name}" v\u1EDBi {n} tr\u01B0\u1EDDng. Canvas \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt \u2014 b\u1EA1n c\xF3 th\u1EC3 Ho\xE0n t\xE1c n\u1EBFu mu\u1ED1n quay l\u1EA1i.', en: 'Created "{name}" with {n} fields. The canvas has been updated \u2014 use Undo to go back.' },
  aiAsk: { vi: "H\u1ECFi Tr\u1EE3 l\xFD VNAI\u2026", en: "Ask VNAI\u2026" },
  aiTalk: { vi: "N\xF3i", en: "Talk" },
  aiDraw: { vi: "V\u1EBD & S\u1EEDa", en: "Draw & Edit" },
  aiSoon: { vi: "T\xEDnh n\u0103ng n\xE0y \u0111ang ph\xE1t tri\u1EC3n trong b\u1EA3n demo.", en: "This feature is under development in the demo." },
  aiAttach: { vi: "\u0110\xEDnh k\xE8m", en: "Attach" },
  aiCollapse: { vi: "Thu g\u1ECDn", en: "Collapse" },
  aiDockTitle: { vi: "V\u1ECB tr\xED khung chat", en: "Panel position" },
  aiDockRight: { vi: "B\xEAn ph\u1EA3i", en: "Right side" },
  aiDockLeft: { vi: "B\xEAn tr\xE1i", en: "Left side" },
  aiDockFloat: { vi: "N\u1ED5i", en: "Floating" },
  // ── theme panel (trang trí giao diện form) ──
  themeSection: { vi: "Giao di\u1EC7n", en: "Theme" },
  themeTitle: { vi: "Trang tr\xED bi\u1EC3u m\u1EABu", en: "Form design" },
  themePrimary: { vi: "M\xE0u ch\u1EE7 \u0111\u1EA1o", en: "Primary color" },
  themeSheetBg: { vi: "N\u1EC1n bi\u1EC3u m\u1EABu", en: "Form background" },
  themeRadius: { vi: "Bo g\xF3c", en: "Corner radius" },
  radiusSharp: { vi: "Vu\xF4ng", en: "Sharp" },
  radiusDefault: { vi: "M\u1EB7c \u0111\u1ECBnh", en: "Default" },
  radiusRounded: { vi: "Bo tr\xF2n", en: "Rounded" },
  themeHint: { vi: "\xC1p cho bi\u1EC3u m\u1EABu khi ch\u1EA1y (T\u1EA1o m\u1EDBi/S\u1EEDa/Chi ti\u1EBFt) v\xE0 Xem tr\u01B0\u1EDBc \u2014 l\u01B0u c\xF9ng thi\u1EBFt k\u1EBF.", en: "Applies to the runtime form (Create/Edit/Detail) and Preview \u2014 saved with the schema." },
  themeReset: { vi: "B\u1ECF trang tr\xED (theo m\u1EB7c \u0111\u1ECBnh h\u1EC7 th\u1ED1ng)", en: "Clear design (use system defaults)" },
  // ── rules modal ──
  rulesTitle: { vi: "Quy t\u1EAFc nghi\u1EC7p v\u1EE5", en: "Business rules" },
  ruleNamePh: { vi: "T\xEAn quy t\u1EAFc (VD: Th\u1EED vi\u1EC7c \u2192 th\u1EDDi h\u1EA1n 2 th\xE1ng)", en: "Rule name (e.g. Probation \u2192 2-month term)" },
  ifKw: { vi: "N\u1EBEU", en: "IF" },
  andKw: { vi: "AND", en: "AND" },
  doKw: { vi: "TH\u1EF0C HI\u1EC6N", en: "THEN" },
  addCond: { vi: "Th\xEAm \u0111i\u1EC1u ki\u1EC7n", en: "Add condition" },
  orKw: { vi: "OR", en: "OR" },
  dsProc: { vi: "Stored procedure", en: "Stored procedure" },
  dsProcPh: { vi: "Ch\u1ECDn t\u1EEB danh m\u1EE5c h\u1EC7 th\u1ED1ng", en: "Pick from system catalog" },
  dsValueCol: { vi: "C\u1ED9t gi\xE1 tr\u1ECB", en: "Value column" },
  dsLabelCol: { vi: "C\u1ED9t hi\u1EC3n th\u1ECB", en: "Label column" },
  dsParams: { vi: "Tham s\u1ED1 (tu\u1EF3 ch\u1ECDn)", en: "Parameters (optional)" },
  dsParamOf: { vi: "Tham s\u1ED1 {p}", en: "Parameter {p}" },
  dsConstPh: { vi: "VD: 'HN'", en: "e.g. 'HN'" },
  dsParamsPh: { vi: "VD: @DonViId = [dept]", en: "e.g. @UnitId = [dept]" },
  dsApiPick: { vi: "API \u0111\xE3 \u0111\u0103ng k\xFD", en: "Registered API" },
  dsUrl: { vi: "URL API", en: "API URL" },
  dsMethod: { vi: "Ph\u01B0\u01A1ng th\u1EE9c", en: "Method" },
  dsPath: { vi: "\u0110\u01B0\u1EDDng d\u1EABn danh s\xE1ch trong JSON", en: "List path in JSON" },
  dsValueField: { vi: "Tr\u01B0\u1EDDng gi\xE1 tr\u1ECB", en: "Value field" },
  dsLabelField: { vi: "Tr\u01B0\u1EDDng hi\u1EC3n th\u1ECB", en: "Label field" },
  dsEnumPick: { vi: "B\u1ED9 enum h\u1EC7 th\u1ED1ng", en: "System enum set" },
  dsEnumPh: { vi: "Ch\u1ECDn enum", en: "Pick an enum" },
  dsEnumNote: { vi: "Enum \u0111\u1ECDc t\u1EEB danh m\u1EE5c h\u1EC7 th\u1ED1ng \u2014 demo load danh s\xE1ch th\u1EADt t\u1EEB registry.", en: "Enums come from the system catalog \u2014 the demo loads real lists from the registry." },
  dsPreview: { vi: "Xem tr\u01B0\u1EDBc danh s\xE1ch ({n} m\u1EE5c \u2014 data m\u1EABu)", en: "List preview ({n} items \u2014 sample data)" },
  delCond: { vi: "Xo\xE1 \u0111i\u1EC1u ki\u1EC7n", en: "Remove condition" },
  addAction: { vi: "Th\xEAm h\xE0nh \u0111\u1ED9ng", en: "Add action" },
  delAction: { vi: "Xo\xE1 h\xE0nh \u0111\u1ED9ng", en: "Remove action" },
  delRule: { vi: "Xo\xE1 quy t\u1EAFc", en: "Delete rule" },
  addRule: { vi: "Th\xEAm quy t\u1EAFc", en: "Add rule" },
  noRules: { vi: 'Ch\u01B0a c\xF3 quy t\u1EAFc n\xE0o \u2014 b\u1EA5m "Th\xEAm quy t\u1EAFc" \u0111\u1EC3 t\u1EA1o nghi\u1EC7p v\u1EE5 \u1EA8n/Hi\u1EC7n \xB7 T\xEDnh to\xE1n \xB7 Ki\u1EC3m tra.', en: 'No rules yet \u2014 click "Add rule" to build Show/Hide \xB7 Compute \xB7 Validation logic.' },
  rhsValue: { vi: "Gi\xE1 tr\u1ECB", en: "Value" },
  rhsField: { vi: "Tr\u01B0\u1EDDng", en: "Field" },
  targetsPh: { vi: "Ch\u1ECDn tr\u01B0\u1EDDng (nhi\u1EC1u)", en: "Select fields (multiple)" },
  setValuePh: { vi: "Gi\xE1 tr\u1ECB g\xE1n", en: "Value to set" },
  copyFromPh: { vi: "Sao ch\xE9p t\u1EEB tr\u01B0\u1EDDng", en: "Copy from field" },
  warnMsgPh: { vi: "N\u1ED9i dung c\u1EA3nh b\xE1o", en: "Warning message" },
  cmpFieldPh: { vi: "Tr\u01B0\u1EDDng so s\xE1nh", en: "Field to compare" },
  inListPh: { vi: "Danh s\xE1ch, ph\u1EA9y", en: "List, comma-separated" },
  dowPh: { vi: "Th\u1EE9 2-8 (8=CN)", en: "Weekday 2-8 (8=Sun)" },
  fxHint: { vi: "H\xE0m: IF \xB7 ADDDAY \xB7 ADDMONTH \xB7 ADDYEAR \xB7 TODAY \u2014 tham chi\u1EBFu tr\u01B0\u1EDDng b\u1EB1ng [kho\xE1]", en: "Functions: IF \xB7 ADDDAY \xB7 ADDMONTH \xB7 ADDYEAR \xB7 TODAY \u2014 reference fields with [key]" },
  closeRules: { vi: "\u0110\xF3ng", en: "Close" },
  // ── preview ──
  pvTitle: { vi: "Xem tr\u01B0\u1EDBc", en: "Preview" },
  pvCreate: { vi: "T\u1EA1o m\u1EDBi", en: "Create" },
  pvDetail: { vi: "Chi ti\u1EBFt", en: "Detail" },
  closePv: { vi: "\u0110\xF3ng xem tr\u01B0\u1EDBc", en: "Close preview" },
  // ── renderer (runtime form) ──
  rSelectPh: { vi: "Ch\u1ECDn gi\xE1 tr\u1ECB", en: "Select a value" },
  rMultiPh: { vi: "Ch\u1ECDn nhi\u1EC1u gi\xE1 tr\u1ECB", en: "Select values" },
  rUserPh: { vi: "Ch\u1ECDn nh\xE2n vi\xEAn", en: "Select employee" },
  rUpload1: { vi: "K\xE9o th\u1EA3 ho\u1EB7c", en: "Drag & drop or" },
  rUpload2: { vi: "ch\u1ECDn t\u1EC7p", en: "browse files" },
  rImage: { vi: "Th\xEAm h\xECnh \u1EA3nh", en: "Add image" },
  rAutoGen: { vi: "(t\u1EF1 sinh khi l\u01B0u)", en: "(generated on save)" },
  rOn: { vi: "B\u1EADt", en: "On" },
  rOff: { vi: "T\u1EAFt", en: "Off" },
  rMaxPerFile: { vi: "t\u1ED1i \u0111a {n}MB/t\u1EC7p", en: "max {n}MB/file" },
  rMaxFiles: { vi: "t\u1ED1i \u0111a {n} t\u1EC7p", en: "max {n} files" },
  rRequired: { vi: "Th\xF4ng tin b\u1EAFt bu\u1ED9c nh\u1EADp", en: "This field is required" },
  rIntOnly: { vi: "Ch\u1EC9 cho ph\xE9p s\u1ED1 nguy\xEAn", en: "Integers only" },
  rMinVal: { vi: "Gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u {n}", en: "Minimum value is {n}" },
  rMaxVal: { vi: "Gi\xE1 tr\u1ECB kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 {n}", en: "Value must not exceed {n}" },
  rNotBefore: { vi: "Kh\xF4ng \u0111\u01B0\u1EE3c tr\u01B0\u1EDBc {n}", en: "Must not be before {n}" },
  rNotAfter: { vi: "Kh\xF4ng \u0111\u01B0\u1EE3c sau {n}", en: "Must not be after {n}" },
  rMinLen: { vi: "T\u1ED1i thi\u1EC3u {n} k\xFD t\u1EF1", en: "At least {n} characters" },
  rMaxLen: { vi: "T\u1ED1i \u0111a {n} k\xFD t\u1EF1", en: "At most {n} characters" },
  rForbidden: { vi: 'Kh\xF4ng \u0111\u01B0\u1EE3c ch\u1EE9a "{n}"', en: 'Must not contain "{n}"' },
  rEmailFmt: { vi: "Email kh\xF4ng \u0111\xFAng \u0111\u1ECBnh d\u1EA1ng", en: "Invalid email format" },
  rPhoneFmt: { vi: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7", en: "Invalid phone number" },
  rTimeMin: { vi: "Kh\xF4ng \u0111\u01B0\u1EE3c tr\u01B0\u1EDBc {n}", en: "Must not be before {n}" },
  rTimeMax: { vi: "Kh\xF4ng \u0111\u01B0\u1EE3c sau {n}", en: "Must not be after {n}" },
  rUploadPicked: { vi: "\u0110\xE3 \u0111\xEDnh k\xE8m (demo)", en: "Attached (demo)" },
  rHiddenWarn: { vi: "C\u1EA3nh b\xE1o (tr\u01B0\u1EDDng \u0111ang \u1EA9n):", en: "Warning (hidden field):" },
  dsRuntime: { vi: "\u2014 Ngu\u1ED3n {ds} (k\u1EBFt n\u1ED1i khi ch\u1EA1y th\u1EADt) \u2014", en: "\u2014 {ds} source (connected at runtime) \u2014" }
};
function fbT(lang, key, params) {
  const e = D[key];
  let s = e ? lang === "vi" ? e.vi : e.en : key;
  if (params)
    for (const [k, v] of Object.entries(params))
      s = s.replace(`{${k}}`, String(v));
  return s;
}

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-renderer.ts
var _c0 = () => [];
var _c1 = (a0) => ({ n: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function SgFormRenderer_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.schema().desc);
  }
}
function SgFormRenderer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SgFormRenderer_Conditional_0_Conditional_3_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.thPrimary() || "var(--primary-base)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.schema().name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schema().desc ? 3 : -1);
  }
}
function SgFormRenderer_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icWarn)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.tr("rHiddenWarn"), " ", w_r2);
  }
}
function SgFormRenderer_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sec_r3.title);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.labelOf(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 11);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 15);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fbr-ro--boxed", ctx_r0.mode() !== "detail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayValue(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 35);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_0_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("placeholder", f_r4.placeholder || "")("maxlength", (f_r4.constraints == null ? null : f_r4.constraints.maxLen) || null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 35);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_1_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("placeholder", f_r4.placeholder || "")("maxlength", (f_r4.constraints == null ? null : f_r4.constraints.maxLen) || null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 36);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_2_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("placeholder", f_r4.placeholder || "")("maxlength", (f_r4.constraints == null ? null : f_r4.constraints.maxLen) || null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 37);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_3_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("placeholder", f_r4.placeholder || "")("maxlength", (f_r4.constraints == null ? null : f_r4.constraints.maxLen) || null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 38);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_4_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.num(f_r4))("placeholder", f_r4.placeholder || "")("min", ctx_r0.conMinNum(f_r4))("max", ctx_r0.conMaxNum(f_r4))("precision", (f_r4.constraints == null ? null : f_r4.constraints.numberFormat) === "int" ? 0 : null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 39);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_5_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.num(f_r4))("placeholder", f_r4.placeholder || "")("min", ctx_r0.conMinNum(f_r4))("max", ctx_r0.conMaxNum(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 24)(1, "hrm-input-number", 40);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_6_Template_hrm_input_number_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "hrm-select", 41);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_6_Template_hrm_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setUnit(f_r4, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.num(f_r4))("placeholder", f_r4.placeholder || "0")("min", ctx_r0.conMinNum(f_r4))("max", ctx_r0.conMaxNum(f_r4));
    \u0275\u0275advance();
    \u0275\u0275property("name", f_r4.id + "Unit")("ngModel", ctx_r0.unitVal(f_r4))("options", ctx_r0.unitOpts(f_r4))("allowClear", false)("showSearch", false);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.autoCode(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-textarea", 35);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_8_Template_hrm_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("placeholder", f_r4.placeholder || "")("maxlength", (f_r4.constraints == null ? null : f_r4.constraints.maxLen) || null);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 42);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_9_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4) || null)("options", ctx_r0.opts(f_r4))("placeholder", f_r4.placeholder || ctx_r0.tr("rSelectPh"));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 43);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_10_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("multiple", true)("ngModel", ctx_r0.arr(f_r4))("options", ctx_r0.opts(f_r4))("placeholder", f_r4.placeholder || ctx_r0.tr("rMultiPh"));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-radio-group", 44);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_11_Template_hrm_radio_group_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4))("options", ctx_r0.opts(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-checkbox", 46);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_12_For_2_Template_hrm_checkbox_ngModelChange_0_listener($event) {
      const o_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const f_r4 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleCheck(f_r4, o_r17, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r17 = ctx.$implicit;
    const f_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id + o_r17)("ngModel", ctx_r0.isChecked(f_r4, o_r17));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r17);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275repeaterCreate(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_12_For_2_Template, 2, 3, "hrm-checkbox", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(f_r4.options || \u0275\u0275pureFunction0(0, _c0));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30)(1, "hrm-switch", 46);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_13_Template_hrm_switch_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.bool(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-date-picker", 47);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_14_Template_hrm_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.anyVal(f_r4))("placeholder", f_r4.placeholder || "dd/MM/yyyy")("format", ctx_r0.dateFmt(f_r4))("disabledDate", ctx_r0.dateDisabled(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-time-picker", 48);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_15_Template_hrm_time_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.anyVal(f_r4))("placeholder", f_r4.placeholder || "hh:mm")("format", ctx_r0.timeFormat(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 42);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_16_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.str(f_r4) || null)("options", (f_r4.options == null ? null : f_r4.options.length) ? ctx_r0.opts(f_r4) : ctx_r0.userOpts)("placeholder", f_r4.placeholder || ctx_r0.tr("rUserPh"));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 33)(1, "hrm-rate", 49);
    \u0275\u0275listener("ngModelChange", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_17_Template_hrm_rate_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const f_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setVal(f_r4, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", f_r4.id)("ngModel", ctx_r0.num(f_r4) || 0)("count", ctx_r0.conMaxNum(f_r4) === ctx_r0.Infinity ? 5 : ctx_r0.conMaxNum(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 54);
    \u0275\u0275listener("click", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_0_For_2_Template_button_click_2_listener($event) {
      const fn_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const f_r4 = \u0275\u0275nextContext(6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.removeFile(f_r4, fn_r24);
      $event.preventDefault();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fn_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", fn_r24, " ");
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275repeaterCreate(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_0_For_2_Template, 4, 1, "span", 53, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.arr(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const f_r4 = \u0275\u0275nextContext(5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.pickDemoFile(f_r4);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icUpload)("size", 22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.tr("rUpload1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.tr("rUpload2"));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.tr("rMaxFilesHit", \u0275\u0275pureFunction1(1, _c1, ctx_r0.maxFilesOf(f_r4))));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_0_Template, 3, 0, "span", 50);
    \u0275\u0275conditionalCreate(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_1_Template, 6, 4, "span", 51)(2, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Conditional_2_Template, 2, 3, "span", 52);
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.arr(f_r4).length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.arr(f_r4).length < ctx_r0.maxFilesOf(f_r4) ? 1 : 2);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icPhoto)("size", 22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.tr("rImage"));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_0_Template, 1, 4, "hrm-input", 19)(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_1_Template, 1, 4, "hrm-input", 19)(2, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_2_Template, 1, 4, "hrm-input", 20)(3, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_3_Template, 1, 4, "hrm-input", 21)(4, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_4_Template, 1, 6, "hrm-input-number", 22)(5, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_5_Template, 1, 5, "hrm-input-number", 23)(6, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_6_Template, 3, 10, "span", 24)(7, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_7_Template, 2, 1, "span", 25)(8, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_8_Template, 1, 4, "hrm-textarea", 19)(9, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_9_Template, 1, 4, "hrm-select", 26)(10, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_10_Template, 1, 5, "hrm-select", 27)(11, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_11_Template, 1, 3, "hrm-radio-group", 28)(12, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_12_Template, 3, 1, "span", 29)(13, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_13_Template, 2, 2, "span", 30)(14, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_14_Template, 1, 5, "hrm-date-picker", 31)(15, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_15_Template, 1, 4, "hrm-time-picker", 32)(16, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_16_Template, 1, 4, "hrm-select", 26)(17, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_17_Template, 2, 3, "span", 33)(18, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_18_Template, 3, 2)(19, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Case_19_Template, 4, 3, "span", 34);
  }
  if (rf & 2) {
    let tmp_23_0;
    const f_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275conditional((tmp_23_0 = f_r4.type) === "text" ? 0 : tmp_23_0 === "address" ? 1 : tmp_23_0 === "email" ? 2 : tmp_23_0 === "phone" ? 3 : tmp_23_0 === "number" ? 4 : tmp_23_0 === "percent" ? 5 : tmp_23_0 === "money" ? 6 : tmp_23_0 === "autocode" ? 7 : tmp_23_0 === "textarea" ? 8 : tmp_23_0 === "select" ? 9 : tmp_23_0 === "multiselect" ? 10 : tmp_23_0 === "radio" ? 11 : tmp_23_0 === "checkbox" ? 12 : tmp_23_0 === "toggle" ? 13 : tmp_23_0 === "date" ? 14 : tmp_23_0 === "time" ? 15 : tmp_23_0 === "user" ? 16 : tmp_23_0 === "rating" ? 17 : tmp_23_0 === "upload" ? 18 : tmp_23_0 === "image" ? 19 : -1);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.helper);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icWarn)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icWarn)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r26 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icWarn)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r26);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Conditional_0_Template, 3, 3, "span", 57)(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Conditional_1_Template, 3, 3, "span", 57);
    \u0275\u0275repeaterCreate(2, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_For_3_Template, 3, 3, "span", 57, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    let tmp_23_0;
    const f_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_23_0 = ctx_r0.requiredError(f_r4)) ? 0 : (tmp_23_0 = ctx_r0.constraintError(f_r4)) ? 1 : -1, tmp_23_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warnsOf(f_r4));
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_3_Template, 2, 0, "b", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_4_Template, 2, 3, "span", 16)(5, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_5_Template, 20, 1);
    \u0275\u0275conditionalCreate(6, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_6_Template, 2, 1, "span", 17);
    \u0275\u0275conditionalCreate(7, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_7_Template, 2, 1, "span", 17);
    \u0275\u0275conditionalCreate(8, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Conditional_8_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_26_0;
    const f_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("grid-column", "span " + ctx_r0.spanCols(f_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.labelOf(f_r4), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isRequired(f_r4) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mode() === "detail" || ctx_r0.isReadonly(f_r4) ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_26_0 = ctx_r0.uploadLimit(f_r4)) ? 6 : -1, tmp_26_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r4.helper && ctx_r0.mode() !== "detail" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mode() !== "detail" ? 8 : -1);
  }
}
function SgFormRenderer_For_5_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormRenderer_For_5_For_4_Conditional_0_Case_0_Template, 2, 1, "div", 10)(1, SgFormRenderer_For_5_For_4_Conditional_0_Case_1_Template, 1, 0, "hr", 11)(2, SgFormRenderer_For_5_For_4_Conditional_0_Case_2_Template, 9, 8, "label", 12);
  }
  if (rf & 2) {
    let tmp_21_0;
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_21_0 = f_r4.type) === "heading" ? 0 : tmp_21_0 === "divider" ? 1 : 2);
  }
}
function SgFormRenderer_For_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormRenderer_For_5_For_4_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isVisible(f_r4) ? 0 : -1);
  }
}
function SgFormRenderer_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275conditionalCreate(1, SgFormRenderer_For_5_Conditional_1_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275repeaterCreate(3, SgFormRenderer_For_5_For_4_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sec_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(sec_r3.title ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(sec_r3.fields);
  }
}
function fbParseDMY(s) {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s.trim());
  if (!m)
    return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  return d.getDate() === +m[1] && d.getMonth() === +m[2] - 1 ? d : null;
}
function fbFmtDMY(d) {
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}
function fbFmtHM(d) {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
function fbIsTextType(t) {
  return !t || ["text", "textarea", "email", "phone", "address", "autocode", "select", "multiselect", "radio", "checkbox", "user"].includes(t);
}
function fbDayOfWeek(s) {
  const d = fbParseDMY(s);
  if (!d)
    return null;
  const wd = d.getDay();
  return wd === 0 ? 8 : wd + 1;
}
function fbCmpVals(a, b) {
  const da = fbParseDMY(a), db = fbParseDMY(b);
  if (da && db)
    return da.getTime() - db.getTime();
  const na = a.trim() !== "" ? Number(a) : NaN, nb = b.trim() !== "" ? Number(b) : NaN;
  if (!Number.isNaN(na) && !Number.isNaN(nb))
    return na - nb;
  return a < b ? -1 : a > b ? 1 : 0;
}
function fbValToStr(v, isTime) {
  if (v == null)
    return "";
  if (typeof v === "boolean")
    return v ? "true" : "";
  if (Array.isArray(v))
    return [...v].sort().join(",");
  if (v instanceof Date)
    return isTime ? fbFmtHM(v) : fbFmtDMY(v);
  return String(v);
}
function fbMatchCond(c, vals, typeOf) {
  if (!c || !c.field)
    return false;
  const ls = fbValToStr(vals[c.field], typeOf(c.field) === "time");
  const rhs = fbRhsOf(c);
  const rs = rhs.kind === "field" ? fbValToStr(vals[rhs.field || ""], typeOf(rhs.field || "") === "time") : rhs.value ?? "";
  switch (c.op) {
    case "empty":
      return ls === "";
    case "notEmpty":
      return ls !== "";
    case "eq":
      return fbIsTextType(typeOf(c.field)) ? ls === rs : fbCmpVals(ls, rs) === 0;
    case "ne":
      return fbIsTextType(typeOf(c.field)) ? ls !== rs : fbCmpVals(ls, rs) !== 0;
    case "contains":
      return ls.includes(rs);
    case "notContains":
      return !ls.includes(rs);
    case "startsWith":
      return ls.startsWith(rs);
    case "notStartsWith":
      return !ls.startsWith(rs);
    case "endsWith":
      return ls.endsWith(rs);
    case "notEndsWith":
      return !ls.endsWith(rs);
    case "gt":
      return fbCmpVals(ls, rs) > 0;
    case "gte":
      return fbCmpVals(ls, rs) >= 0;
    case "lt":
      return ls !== "" && fbCmpVals(ls, rs) < 0;
    case "lte":
      return ls !== "" && fbCmpVals(ls, rs) <= 0;
    case "dayEq":
      return fbDayOfWeek(ls) !== null && String(fbDayOfWeek(ls)) === rs.trim();
    case "dayNe":
      return fbDayOfWeek(ls) !== null && String(fbDayOfWeek(ls)) !== rs.trim();
    case "inList": {
      const list = rs.split(",").map((x) => x.trim()).filter(Boolean);
      const raw = vals[c.field];
      if (Array.isArray(raw))
        return raw.some((x) => list.includes(String(x).trim()));
      return list.includes(ls.trim());
    }
    default:
      return false;
  }
}
function fbRuleReferences(r, dirty) {
  for (const c of r.conditions) {
    if (dirty.has(c.field))
      return true;
    const rhs = fbRhsOf(c);
    if (rhs.kind === "field" && rhs.field && dirty.has(rhs.field))
      return true;
  }
  for (const a of r.actions) {
    if (a.type === "copyValue" && a.fromField && dirty.has(a.fromField))
      return true;
    if (a.type === "compute" && a.formula) {
      const refs = a.formula.match(/\[([^\]]+)\]/g) || [];
      if (refs.some((x) => dirty.has(x.slice(1, -1))))
        return true;
    }
  }
  return false;
}
function fbApplyDataRules(rules, typeOf, start, dirty) {
  let cur = start;
  const dset = new Set(dirty);
  for (let pass = 0; pass < 3; pass++) {
    let changed = false;
    const next = __spreadValues({}, cur);
    for (const r of rules) {
      if (!fbRuleReferences(r, dset))
        continue;
      if (!fbRuleHit(r, (c) => fbMatchCond(c, next, typeOf)))
        continue;
      for (const a of r.actions) {
        for (const t of a.targets || []) {
          let nv;
          if (a.type === "setValue")
            nv = fbCoerceForType(typeOf(t), a.value ?? "");
          else if (a.type === "copyValue")
            nv = next[a.fromField || ""] ?? "";
          else if (a.type === "compute")
            nv = fbCoerceForType(typeOf(t), fbEvalFormula(a.formula || "", (k) => next[k]));
          else
            continue;
          if (next[t] !== nv) {
            next[t] = nv;
            changed = true;
            dset.add(t);
          }
        }
      }
    }
    cur = next;
    if (!changed)
      break;
  }
  return cur;
}
function fbTypeOfSchema(schema) {
  const m = /* @__PURE__ */ new Map();
  for (const s of schema.sections)
    for (const f2 of s.fields)
      m.set(f2.key, f2.type);
  return (k) => m.get(k);
}
function fbSeedDefaults(schema) {
  const out = {};
  for (const sec of schema.sections)
    for (const f2 of sec.fields) {
      if (f2.defaultValue != null && f2.defaultValue !== "") {
        const v = fbCoerceDefault(f2.type, f2.defaultValue);
        if (v !== void 0)
          out[f2.key] = v;
      }
      if (f2.type === "money" && f2.defaultUnit)
        out[f2.key + "Unit"] = f2.defaultUnit;
    }
  return out;
}
function fbSeedRuleValues(schema, value) {
  const allKeys = /* @__PURE__ */ new Set();
  for (const s of schema.sections)
    for (const f2 of s.fields)
      allKeys.add(f2.key);
  return fbApplyDataRules(schema.rules || [], fbTypeOfSchema(schema), value, allKeys);
}
var SgFormRenderer = class _SgFormRenderer {
  constructor() {
    this.schema = input.required(...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("create", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lang = input("vi", ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.value = model({}, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icUpload = CloudUpload;
    this.icPhoto = Photo;
    this.icWarn = AlertTriangle;
    this.userOpts = [
      "Nguy\u1EC5n V\u0103n A",
      "Tr\u1EA7n Th\u1ECB B",
      "L\xEA V\u0103n C",
      "Ph\u1EA1m Thu D",
      "\u0110\u1ED7 Minh E",
      "V\u0169 H\u1EA3i F"
    ].map((n) => ({ value: n, label: n }));
    this.submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.typeOfFn = computed(() => fbTypeOfSchema(this.schema()), ...ngDevMode ? [{ debugName: "typeOfFn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thPreset = computed(() => fbResolveTheme(this.schema().theme), ...ngDevMode ? [{ debugName: "thPreset" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thPrimary = computed(() => this.thPreset().primary || null, ...ngDevMode ? [{ debugName: "thPrimary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thBg = computed(() => {
      const t = this.thPreset();
      if (t.dark)
        return "var(--bg-surface)";
      return t.sheetBg || null;
    }, ...ngDevMode ? [{ debugName: "thBg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thRadiusMd = computed(() => {
      const r = this.thPreset().radius;
      return r === "sharp" ? "2px" : r === "rounded" ? "10px" : null;
    }, ...ngDevMode ? [{ debugName: "thRadiusMd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thRadiusLg = computed(() => {
      const r = this.thPreset().radius;
      return r === "sharp" ? "4px" : r === "rounded" ? "14px" : null;
    }, ...ngDevMode ? [{ debugName: "thRadiusLg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ruleState = computed(() => {
      const st = {
        show: /* @__PURE__ */ new Set(),
        hide: /* @__PURE__ */ new Set(),
        require: /* @__PURE__ */ new Set(),
        unrequire: /* @__PURE__ */ new Set(),
        readonly: /* @__PURE__ */ new Set(),
        enable: /* @__PURE__ */ new Set(),
        warns: /* @__PURE__ */ new Map()
      };
      const vals = this.value();
      const typeOf = this.typeOfFn();
      for (const r of this.schema().rules || []) {
        if (!fbRuleHit(r, (c) => fbMatchCond(c, vals, typeOf)))
          continue;
        for (const a of r.actions) {
          for (const t of a.targets || []) {
            switch (a.type) {
              case "show":
                st.show.add(t);
                st.hide.delete(t);
                break;
              case "hide":
                st.hide.add(t);
                st.show.delete(t);
                break;
              case "require":
                st.require.add(t);
                st.unrequire.delete(t);
                break;
              case "unrequire":
                st.unrequire.add(t);
                st.require.delete(t);
                break;
              case "readonly":
                st.readonly.add(t);
                st.enable.delete(t);
                break;
              case "enable":
                st.enable.add(t);
                st.readonly.delete(t);
                break;
              case "warn": {
                const list = st.warns.get(t) || [];
                if (a.message)
                  list.push(a.message);
                st.warns.set(t, list);
                break;
              }
            }
          }
        }
      }
      return st;
    }, ...ngDevMode ? [{ debugName: "ruleState" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenWarns = computed(() => {
      const out = [];
      for (const sec of this.schema().sections)
        for (const f2 of sec.fields) {
          if (!this.isVisible(f2))
            out.push(...this.warnsOf(f2));
        }
      return out;
    }, ...ngDevMode ? [{ debugName: "hiddenWarns" }] : (
      /* istanbul ignore next */
      []
    ));
    this._ddCache = /* @__PURE__ */ new Map();
  }
  /** Chuỗi UI theo ngôn ngữ (dict _fb-i18n — VI thuần Việt · EN thuần Anh, không trộn). */
  tr(key, params) {
    return fbT(this.lang(), key, params);
  }
  /** Nhãn theo locale đang chọn — fallback về ngôn ngữ CHÍNH của dự án (schema.locales[0]). */
  labelOf(f2) {
    const def = this.schema().locales?.[0] ?? "vi";
    return fbLabelOf(f2, this.lang(), def);
  }
  /** Map field.options → HrmOption[]. Datasource NGOÀI (sql/api/enum) → option placeholder
   *  disabled ghi rõ nguồn (demo — runtime nối nguồn thật). */
  opts(f2) {
    const list = fbListOptions(f2);
    if (list === null) {
      const ds = (f2.datasource || "custom").toUpperCase();
      return [{ value: "", label: this.tr("dsRuntime", { ds }), disabled: true }];
    }
    return list.map((o) => ({ value: o, label: o }));
  }
  unitOpts(f2) {
    return (f2.unitOptions || "VN\u0110").split(",").map((u) => u.trim()).filter(Boolean).map((u) => ({ value: u, label: u }));
  }
  /** span → số cột trên lưới 6 (Vueform columns). */
  spanCols(f2) {
    return f2.span === "third" ? 2 : f2.span === "twothirds" ? 4 : f2.span === "full" ? 6 : 3;
  }
  /** Format Giờ hiệu lực — chỉ nhận 3 giá trị hợp lệ (schema có thể lưu format của loại field
   *  KHÁC sau khi builder đổi type field) — sai/thiếu → HH:mm mặc định. */
  timeFormat(f2) {
    const fmt = f2.constraints?.dateFormat;
    return fmt === "HH:mm:ss" || fmt === "mm:ss" ? fmt : "HH:mm";
  }
  // ── đọc giá trị theo kiểu — check "key CÓ trong map" (không phải "== null") để:
  // (a) defaultValue hiện đúng cho MỌI loại field (không chỉ text), (b) select bị CLEAR
  // (giá trị null tường minh) không bị defaultValue "hồi sinh" lại mỗi lần render. ──
  anyVal(f2) {
    const vals = this.value();
    if (f2.key in vals)
      return vals[f2.key] ?? null;
    if (f2.defaultValue && f2.type === "date")
      return fbParseDMY(f2.defaultValue);
    return null;
  }
  str(f2) {
    const vals = this.value();
    if (!(f2.key in vals))
      return f2.defaultValue ?? "";
    const v = vals[f2.key];
    return v == null ? "" : String(v);
  }
  num(f2) {
    const vals = this.value();
    const raw = f2.key in vals ? vals[f2.key] : f2.defaultValue;
    if (typeof raw === "number")
      return raw;
    if (typeof raw === "string" && raw.trim() !== "" && !Number.isNaN(Number(raw)))
      return Number(raw);
    return null;
  }
  bool(f2) {
    const vals = this.value();
    if (!(f2.key in vals))
      return f2.defaultValue === "true";
    return vals[f2.key] === true;
  }
  arr(f2) {
    const v = this.value()[f2.key];
    return Array.isArray(v) ? v : [];
  }
  unitVal(f2) {
    return String(this.value()[f2.key + "Unit"] ?? f2.defaultUnit ?? "VN\u0110");
  }
  isChecked(f2, o) {
    const v = this.value()[f2.key];
    return Array.isArray(v) && v.includes(o);
  }
  /** Mã tự sinh: hiện giá trị đã sinh (host điền lúc mở form Tạo mới), hoặc placeholder khi
   *  chưa có (VD canvas builder — chưa gắn vào form runtime nào). */
  autoCode(f2) {
    const v = this.value()[f2.key];
    return v != null && v !== "" ? String(v) : `${f2.codePrefix || "AUTO-"}${this.tr("rAutoGen")}`;
  }
  /** Text mô tả giới hạn upload từ constraints (đặc tả: số file/dung lượng/định dạng). */
  uploadLimit(f2) {
    if (f2.type !== "upload" || this.mode() === "detail")
      return null;
    const c = f2.constraints;
    if (!c)
      return null;
    const parts = [];
    if (c.fileTypes)
      parts.push(c.fileTypes.toUpperCase().split(",").map((x) => x.trim()).join(", "));
    if (c.maxSizeMb)
      parts.push(this.tr("rMaxPerFile", { n: c.maxSizeMb }));
    if (c.maxFiles)
      parts.push(this.tr("rMaxFiles", { n: c.maxFiles }));
    return parts.length ? parts.join(" \xB7 ") : null;
  }
  /** Ghi giá trị + chạy RULES (gán/copy/công thức) CHỈ cho rule tham chiếu field vừa đổi
   *  (dirty-key filtering — field khác không hề "nghe" field này thì không bị đè lại). */
  setVal(f2, v) {
    const oldValue = this.value()[f2.key];
    let next = __spreadProps(__spreadValues({}, this.value()), { [f2.key]: v });
    const tof = this.typeOfFn();
    for (const act of f2.onChange || []) {
      if (!act.set)
        continue;
      const raw = act.mode === "formula" ? fbEvalFormula(act.formula || "", (k) => next[k]) : act.toValue;
      next[act.set] = fbCoerceForType(tof(act.set), raw);
    }
    if (f2.onChangeScript?.trim()) {
      try {
        const api = {
          get: (k) => next[k],
          set: (k, val) => {
            next[k] = fbCoerceForType(tof(k), val == null ? "" : String(val));
          }
        };
        new Function("form", "value", "oldValue", f2.onChangeScript)(api, next[f2.key], oldValue);
      } catch {
      }
    }
    next = fbApplyDataRules(this.schema().rules || [], this.typeOfFn(), next, /* @__PURE__ */ new Set([f2.key]));
    this.value.set(next);
  }
  setUnit(f2, u) {
    const key = f2.key + "Unit";
    const next = fbApplyDataRules(this.schema().rules || [], this.typeOfFn(), __spreadProps(__spreadValues({}, this.value()), { [key]: u }), /* @__PURE__ */ new Set([key]));
    this.value.set(next);
  }
  toggleCheck(f2, o, on) {
    const cur = this.value()[f2.key];
    const list = Array.isArray(cur) ? [...cur] : [];
    const i = list.indexOf(o);
    if (on && i < 0)
      list.push(o);
    if (!on && i >= 0)
      list.splice(i, 1);
    this.setVal(f2, list);
  }
  // ── hiển thị / bắt buộc / readonly (tĩnh + v1 field-level + rules) ──
  isVisible(f2) {
    const st = this.ruleState();
    if (st.hide.has(f2.key))
      return false;
    if (st.show.has(f2.key))
      return true;
    if (f2.hidden)
      return false;
    return f2.visibleWhen ? fbMatchCond(f2.visibleWhen, this.value(), this.typeOfFn()) : true;
  }
  isRequired(f2) {
    const st = this.ruleState();
    if (st.unrequire.has(f2.key))
      return false;
    if (st.require.has(f2.key))
      return true;
    return !!f2.required || (f2.requiredWhen ? fbMatchCond(f2.requiredWhen, this.value(), this.typeOfFn()) : false);
  }
  isReadonly(f2) {
    const st = this.ruleState();
    if (st.enable.has(f2.key))
      return false;
    if (st.readonly.has(f2.key))
      return true;
    return !!f2.readonly || f2.type === "autocode";
  }
  warnsOf(f2) {
    return this.ruleState().warns.get(f2.key) || [];
  }
  /** Field bắt buộc còn TRỐNG không (mảng rỗng/chuỗi rỗng/null; toggle luôn có giá trị hợp lệ). */
  isEmptyValue(f2) {
    const v = this.value()[f2.key];
    if (Array.isArray(v))
      return v.length === 0;
    if (typeof v === "boolean")
      return false;
    return v == null || v === "";
  }
  /** Lỗi "bắt buộc nhập" — CHỈ hiện sau khi đã bấm Lưu 1 lần (submitted); dùng requiredMsg
   *  tuỳ chỉnh nếu có, else thông báo mặc định. */
  requiredError(f2) {
    if (!this.submitted() || this.mode() === "detail")
      return null;
    if (!this.isVisible(f2) || !this.isRequired(f2) || this.isReadonly(f2))
      return null;
    if (!this.isEmptyValue(f2))
      return null;
    return f2.requiredMsg || this.tr("rRequired", { label: this.labelOf(f2) });
  }
  /** Host gọi khi MỞ form mới — tắt hiện lỗi bắt buộc của lần Lưu trước. */
  resetValidation() {
    this.submitted.set(false);
  }
  /** Host gọi TRƯỚC khi lưu — trả false nếu có field bắt buộc còn trống / vi phạm ràng buộc
   *  (và bật hiện lỗi trên form). true → cho phép lưu. */
  validate() {
    this.submitted.set(true);
    let ok = true;
    for (const s of this.schema().sections) {
      for (const f2 of s.fields) {
        if (f2.type === "heading" || f2.type === "divider")
          continue;
        if (!this.isVisible(f2))
          continue;
        if (this.requiredError(f2) || this.constraintError(f2))
          ok = false;
      }
    }
    return ok;
  }
  // ── VALIDATE ràng buộc per-type (sống — chỉ khi ĐÃ có giá trị vi phạm) ──
  constraintError(f2) {
    const raw = this.value()[f2.key];
    const s = raw == null ? "" : raw instanceof Date ? fbFmtDMY(raw) : String(raw);
    if (s === "")
      return null;
    if (f2.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))
      return this.tr("rEmailFmt");
    if (f2.type === "phone" && !/^[0-9+()\s.-]{8,15}$/.test(s))
      return this.tr("rPhoneFmt");
    const c = f2.constraints;
    if (!c)
      return null;
    const isNum = f2.type === "number" || f2.type === "percent" || f2.type === "money" || f2.type === "rating";
    if (isNum) {
      const n = Number(s);
      if (!Number.isNaN(n)) {
        if (c.numberFormat === "int" && !Number.isInteger(n))
          return this.tr("rIntOnly");
        if (c.min != null && c.min !== "" && n < Number(c.min))
          return this.tr("rMinVal", { n: c.min });
        if (c.max != null && c.max !== "" && n > Number(c.max))
          return this.tr("rMaxVal", { n: c.max });
        if (c.excluded && c.excluded.split(",").some((x) => x.trim() !== "" && Number(x) === n))
          return this.tr("rNumExcluded", { n: s });
      }
      return null;
    }
    if (f2.type === "date") {
      const d = fbParseDMY(s);
      if (!d)
        return null;
      const mn = c.min ? fbParseDMY(c.min) : null;
      const mx = c.max ? fbParseDMY(c.max) : null;
      if (mn && d.getTime() < mn.getTime())
        return this.tr("rNotBefore", { n: c.min });
      if (mx && d.getTime() > mx.getTime())
        return this.tr("rNotAfter", { n: c.max });
      const wds = (c.weekdays || "").split(",").map((x) => x.trim()).filter(Boolean);
      if (wds.length) {
        const wd = d.getDay() === 0 ? "8" : String(d.getDay() + 1);
        if (!wds.includes(wd))
          return this.tr("rWeekdayNot");
      }
      if (c.noHolidays && fbIsHoliday(d))
        return this.tr("rHoliday");
      if (c.excluded && c.excluded.split(",").map((x) => x.trim()).includes(fbFmtDMY(d)))
        return this.tr("rDateExcluded");
      return null;
    }
    if (f2.type === "time") {
      const hm = raw instanceof Date ? `${String(raw.getHours()).padStart(2, "0")}:${String(raw.getMinutes()).padStart(2, "0")}` : s;
      if (c.min && hm < c.min)
        return this.tr("rTimeMin", { n: c.min });
      if (c.max && hm > c.max)
        return this.tr("rTimeMax", { n: c.max });
      return null;
    }
    if (c.minLen != null && c.minLen > 0 && s.length < c.minLen)
      return this.tr("rMinLen", { n: c.minLen });
    if (c.maxLen != null && c.maxLen > 0 && s.length > c.maxLen)
      return this.tr("rMaxLen", { n: c.maxLen });
    if (c.forbidden) {
      const bad = c.forbidden.split(",").map((x) => x.trim()).filter(Boolean).find((x) => s.includes(x));
      if (bad)
        return this.tr("rForbidden", { n: bad });
    }
    return null;
  }
  dateDisabled(f2) {
    const c = f2.constraints;
    if (!c?.min && !c?.max && !c?.weekdays && !c?.noHolidays && !c?.excluded)
      return void 0;
    const k = [c.min, c.max, c.weekdays, c.noHolidays ? "H" : "", c.excluded].map((x) => x || "").join("|");
    let fn = this._ddCache.get(k);
    if (!fn) {
      const mn = c.min ? fbParseDMY(c.min) : null;
      const mx = c.max ? fbParseDMY(c.max) : null;
      const wds = (c.weekdays || "").split(",").map((x) => x.trim()).filter(Boolean);
      const excl = new Set((c.excluded || "").split(",").map((x) => x.trim()).filter(Boolean));
      const noHol = !!c.noHolidays;
      fn = (d) => {
        if (mn && d.getTime() < mn.getTime())
          return true;
        if (mx && d.getTime() > mx.getTime())
          return true;
        if (wds.length) {
          const wd = d.getDay() === 0 ? "8" : String(d.getDay() + 1);
          if (!wds.includes(wd))
            return true;
        }
        if (noHol && fbIsHoliday(d))
          return true;
        if (excl.size && excl.has(fbFmtDMY(d)))
          return true;
        return false;
      };
      this._ddCache.set(k, fn);
    }
    return fn;
  }
  /** Format hiển thị date: preset hoặc pattern Tùy chỉnh (đặc tả Format → Tùy chỉnh). */
  dateFmt(f2) {
    const c = f2.constraints;
    if (c?.dateFormat === "custom")
      return c.customFormat || "dd/MM/yyyy";
    return c?.dateFormat || "dd/MM/yyyy";
  }
  /** Upload demo: đính tệp mẫu — TÔN TRỌNG giới hạn Số lượng file (đặc tả Upload). */
  pickDemoFile(f2) {
    if (this.arr(f2).length >= this.maxFilesOf(f2))
      return;
    const n = this.arr(f2).length + 1;
    this.setVal(f2, [...this.arr(f2), `tai-lieu-demo-${n}.pdf`]);
  }
  maxFilesOf(f2) {
    const m = Number(f2.constraints?.maxFiles);
    return !Number.isNaN(m) && m > 0 ? m : 3;
  }
  removeFile(f2, name) {
    this.setVal(f2, this.arr(f2).filter((x) => x !== name));
  }
  // helpers cho template (min/max number)
  conMinNum(f2) {
    const m = f2.constraints?.min;
    return m != null && m !== "" && !Number.isNaN(Number(m)) ? Number(m) : -Infinity;
  }
  conMaxNum(f2) {
    const m = f2.constraints?.max;
    return m != null && m !== "" && !Number.isNaN(Number(m)) ? Number(m) : Infinity;
  }
  /** Giá trị hiển thị ở chế độ CHI TIẾT / readonly. */
  displayValue(f2) {
    const v = this.value()[f2.key];
    if (f2.type === "autocode")
      return this.autoCode(f2);
    if (v == null || v === "")
      return "\u2014";
    if (Array.isArray(v))
      return v.join(", ") || "\u2014";
    if (v instanceof Date)
      return f2.type === "time" ? fbFmtHM(v) : fbFmtDMY(v);
    if (typeof v === "boolean")
      return v ? this.tr("rOn") : this.tr("rOff");
    if (f2.type === "money")
      return `${v} ${this.unitVal(f2)}`;
    if (f2.type === "percent")
      return `${v}%`;
    return String(v);
  }
  static {
    this.\u0275fac = function SgFormRenderer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgFormRenderer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgFormRenderer, selectors: [["sg-form-renderer"]], hostAttrs: [1, "sg-form-renderer"], hostVars: 6, hostBindings: function SgFormRenderer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("--primary-base", ctx.thPrimary())("--radius-md", ctx.thRadiusMd())("--radius-lg", ctx.thRadiusLg());
      }
    }, inputs: { schema: [1, "schema"], mode: [1, "mode"], lang: [1, "lang"], value: [1, "value"] }, outputs: { value: "valueChange" }, decls: 6, vars: 5, consts: [[1, "fbr-head", 3, "background"], [1, "fbr-body"], [1, "fbr-err", "fbr-err--top"], [1, "fbr-sec"], [1, "fbr-head"], [1, "fbr-head-t"], [1, "fbr-head-d"], [3, "icon", "size"], [1, "fbr-sec-h"], [1, "fbr-grid"], [1, "fbr-heading", "fbr-span-full"], [1, "fbr-divider", "fbr-span-full"], [1, "fbr-field", 3, "gridColumn"], [1, "fbr-field"], [1, "fbr-lbl"], [1, "fbr-req"], [1, "fbr-ro", 3, "fbr-ro--boxed"], [1, "fbr-help"], [1, "fbr-ro"], [3, "name", "ngModel", "placeholder", "maxlength"], ["htmlType", "email", 3, "name", "ngModel", "placeholder", "maxlength"], ["htmlType", "tel", 3, "name", "ngModel", "placeholder", "maxlength"], [3, "name", "ngModel", "placeholder", "min", "max", "precision"], ["unit", "%", 3, "name", "ngModel", "placeholder", "min", "max"], [1, "fbr-money"], [1, "fbr-ro", "fbr-ro--boxed", "fbr-mono"], [3, "name", "ngModel", "options", "placeholder"], [3, "name", "multiple", "ngModel", "options", "placeholder"], [3, "name", "ngModel", "options"], [1, "fbr-checks"], [1, "fbr-toggle"], [3, "name", "ngModel", "placeholder", "format", "disabledDate"], [3, "name", "ngModel", "placeholder", "format"], [1, "fbr-rate"], [1, "fbr-upload", "fbr-upload--img"], [3, "ngModelChange", "name", "ngModel", "placeholder", "maxlength"], ["htmlType", "email", 3, "ngModelChange", "name", "ngModel", "placeholder", "maxlength"], ["htmlType", "tel", 3, "ngModelChange", "name", "ngModel", "placeholder", "maxlength"], [3, "ngModelChange", "name", "ngModel", "placeholder", "min", "max", "precision"], ["unit", "%", 3, "ngModelChange", "name", "ngModel", "placeholder", "min", "max"], [1, "fbr-money-n", 3, "ngModelChange", "name", "ngModel", "placeholder", "min", "max"], [1, "fbr-money-u", 3, "ngModelChange", "name", "ngModel", "options", "allowClear", "showSearch"], [3, "ngModelChange", "name", "ngModel", "options", "placeholder"], [3, "ngModelChange", "name", "multiple", "ngModel", "options", "placeholder"], [3, "ngModelChange", "name", "ngModel", "options"], [3, "name", "ngModel"], [3, "ngModelChange", "name", "ngModel"], [3, "ngModelChange", "name", "ngModel", "placeholder", "format", "disabledDate"], [3, "ngModelChange", "name", "ngModel", "placeholder", "format"], [3, "ngModelChange", "name", "ngModel", "count"], [1, "fbr-files"], [1, "fbr-upload"], [1, "fbr-hint"], [1, "fbr-file"], ["type", "button", 1, "fbr-file-x", 3, "click"], [1, "fbr-upload", 3, "click"], [1, "fbr-upload-t"], [1, "fbr-err"]], template: function SgFormRenderer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgFormRenderer_Conditional_0_Template, 4, 4, "div", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275repeaterCreate(2, SgFormRenderer_For_3_Template, 3, 4, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(4, SgFormRenderer_For_5_Template, 5, 1, "section", 3, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.thPreset().header === "solid" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.thBg());
        \u0275\u0275classProp("dark", ctx.thPreset().dark);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.hiddenWarns());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.schema().sections);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      MaxLengthValidator,
      NgModel,
      TablerIconComponent,
      HrmInput,
      HrmInputNumber,
      HrmTextarea,
      HrmSelect,
      HrmRadioGroup,
      HrmCheckbox,
      HrmSwitch,
      HrmDatePicker,
      HrmTimePicker,
      HrmRate
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.fbr-head[_ngcontent-%COMP%] {\n  padding: 16px 20px 14px;\n  color: var(--static-white, #fff);\n}\n.fbr-head-t[_ngcontent-%COMP%] {\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-bold, 700);\n}\n.fbr-head-d[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--fs-12, 12px);\n  opacity: .85;\n}\n.fbr-body[_ngcontent-%COMP%] {\n  padding: var(--space-5, 20px) var(--space-5, 20px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6, 24px);\n}\n.fbr-sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.fbr-sec-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.fbr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px 10px;\n}\n.fbr-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.fbr-span-full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.fbr-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.fbr-req[_ngcontent-%COMP%] {\n  color: var(--error-base);\n  font-weight: var(--font-bold, 700);\n}\n.fbr-help[_ngcontent-%COMP%] {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.fbr-err[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--error-base);\n}\n.fbr-heading[_ngcontent-%COMP%] {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-top: 4px;\n}\n.fbr-divider[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 2px 0;\n  width: 100%;\n}\n.fbr-checks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 2px;\n}\n.fbr-toggle[_ngcontent-%COMP%], \n.fbr-rate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n}\n.fbr-money[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  min-width: 0;\n}\n.fbr-money-n[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.fbr-money-u[_ngcontent-%COMP%] {\n  flex: 0 0 96px;\n}\n.fbr-mono[_ngcontent-%COMP%] {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.fbr-upload[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 74px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  cursor: pointer;\n  transition: border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);\n}\n.fbr-upload[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fbr-upload-t[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n}\n.fbr-ro[_ngcontent-%COMP%] {\n  font-size: var(--fs-14, 14px);\n  color: var(--text-body);\n  min-height: 22px;\n  white-space: pre-wrap;\n}\n.fbr-err--top[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid color-mix(in srgb, var(--error-base) 35%, transparent);\n  border-radius: var(--radius-md);\n  background: color-mix(in srgb, var(--error-base) 6%, var(--bg-surface));\n}\n.fbr-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fbr-files[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.fbr-file[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-12);\n  color: var(--text-body);\n}\n.fbr-file-x[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--text-soft);\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0;\n}\n.fbr-file-x[_ngcontent-%COMP%]:hover {\n  color: var(--error-base);\n}\n.fbr-ro--boxed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=sg-form-renderer.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgFormRenderer, [{
    type: Component,
    args: [{ selector: "sg-form-renderer", imports: [
      FormsModule,
      TablerIconComponent,
      HrmInput,
      HrmInputNumber,
      HrmTextarea,
      HrmSelect,
      HrmRadioGroup,
      HrmCheckbox,
      HrmSwitch,
      HrmDatePicker,
      HrmTimePicker,
      HrmRate
    ], template: `
    <!-- Header SOLID theo theme preset \u2014 t\xEAn + m\xF4 t\u1EA3 form tr\xEAn n\u1EC1n m\xE0u ch\u1EE7 \u0111\u1EA1o -->
    @if (thPreset().header === 'solid') {
      <div class="fbr-head" [style.background]="thPrimary() || 'var(--primary-base)'">
        <div class="fbr-head-t">{{ schema().name }}</div>
        @if (schema().desc) { <div class="fbr-head-d">{{ schema().desc }}</div> }
      </div>
    }
    <div class="fbr-body" [class.dark]="thPreset().dark" [style.background]="thBg()">
      @for (w of hiddenWarns(); track w) {
        <div class="fbr-err fbr-err--top"><tabler-icon [icon]="icWarn" [size]="13" /> {{ tr('rHiddenWarn') }} {{ w }}</div>
      }
      @for (sec of schema().sections; track sec.id) {
        <section class="fbr-sec">
          @if (sec.title) { <div class="fbr-sec-h">{{ sec.title }}</div> }
          <div class="fbr-grid">
            @for (f of sec.fields; track f.id) {
              @if (isVisible(f)) {
                @switch (f.type) {
                  @case ('heading') { <div class="fbr-heading fbr-span-full">{{ labelOf(f) }}</div> }
                  @case ('divider') { <hr class="fbr-divider fbr-span-full" /> }
                  @default {
                    <label class="fbr-field" [style.gridColumn]="'span ' + spanCols(f)">
                      <span class="fbr-lbl">{{ labelOf(f) }}
                        @if (isRequired(f)) { <b class="fbr-req">*</b> }
                      </span>

                      @if (mode() === 'detail' || isReadonly(f)) {
                        <span class="fbr-ro" [class.fbr-ro--boxed]="mode() !== 'detail'">{{ displayValue(f) }}</span>
                      } @else {
                        @switch (f.type) {
                          @case ('text') { <hrm-input [name]="f.id" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [maxlength]="f.constraints?.maxLen || null" /> }
                          @case ('address') { <hrm-input [name]="f.id" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [maxlength]="f.constraints?.maxLen || null" /> }
                          @case ('email') { <hrm-input [name]="f.id" htmlType="email" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [maxlength]="f.constraints?.maxLen || null" /> }
                          @case ('phone') { <hrm-input [name]="f.id" htmlType="tel" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [maxlength]="f.constraints?.maxLen || null" /> }
                          @case ('number') { <hrm-input-number [name]="f.id" [ngModel]="num(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [min]="conMinNum(f)" [max]="conMaxNum(f)" [precision]="f.constraints?.numberFormat === 'int' ? 0 : null" /> }
                          @case ('percent') { <hrm-input-number [name]="f.id" [ngModel]="num(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [min]="conMinNum(f)" [max]="conMaxNum(f)" unit="%" /> }
                          @case ('money') {
                            <span class="fbr-money">
                              <hrm-input-number class="fbr-money-n" [name]="f.id" [ngModel]="num(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || '0'" [min]="conMinNum(f)" [max]="conMaxNum(f)" />
                              <hrm-select class="fbr-money-u" [name]="f.id + 'Unit'" [ngModel]="unitVal(f)" (ngModelChange)="setUnit(f, $event)" [options]="unitOpts(f)" [allowClear]="false" [showSearch]="false" />
                            </span>
                          }
                          @case ('autocode') { <span class="fbr-ro fbr-ro--boxed fbr-mono">{{ autoCode(f) }}</span> }
                          @case ('textarea') { <hrm-textarea [name]="f.id" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || ''" [maxlength]="f.constraints?.maxLen || null" /> }
                          @case ('select') { <hrm-select [name]="f.id" [ngModel]="str(f) || null" (ngModelChange)="setVal(f, $event)" [options]="opts(f)" [placeholder]="f.placeholder || tr('rSelectPh')" /> }
                          @case ('multiselect') { <hrm-select [name]="f.id" [multiple]="true" [ngModel]="arr(f)" (ngModelChange)="setVal(f, $event)" [options]="opts(f)" [placeholder]="f.placeholder || tr('rMultiPh')" /> }
                          @case ('radio') { <hrm-radio-group [name]="f.id" [ngModel]="str(f)" (ngModelChange)="setVal(f, $event)" [options]="opts(f)" /> }
                          @case ('checkbox') {
                            <span class="fbr-checks">
                              @for (o of f.options || []; track o) {
                                <hrm-checkbox [name]="f.id + o" [ngModel]="isChecked(f, o)" (ngModelChange)="toggleCheck(f, o, $event)">{{ o }}</hrm-checkbox>
                              }
                            </span>
                          }
                          @case ('toggle') { <span class="fbr-toggle"><hrm-switch [name]="f.id" [ngModel]="bool(f)" (ngModelChange)="setVal(f, $event)" /></span> }
                          @case ('date') { <hrm-date-picker [name]="f.id" [ngModel]="anyVal(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || 'dd/MM/yyyy'" [format]="dateFmt(f)" [disabledDate]="dateDisabled(f)" /> }
                          @case ('time') { <hrm-time-picker [name]="f.id" [ngModel]="anyVal(f)" (ngModelChange)="setVal(f, $event)" [placeholder]="f.placeholder || 'hh:mm'" [format]="timeFormat(f)" /> }
                          @case ('user') { <hrm-select [name]="f.id" [ngModel]="str(f) || null" (ngModelChange)="setVal(f, $event)" [options]="f.options?.length ? opts(f) : userOpts" [placeholder]="f.placeholder || tr('rUserPh')" /> }
                          @case ('rating') { <span class="fbr-rate"><hrm-rate [name]="f.id" [ngModel]="num(f) || 0" (ngModelChange)="setVal(f, $event)" [count]="conMaxNum(f) === Infinity ? 5 : conMaxNum(f)" /></span> }
                          @case ('upload') {
                            @if (arr(f).length) {
                              <span class="fbr-files">
                                @for (fn of arr(f); track fn) {
                                  <span class="fbr-file">{{ fn }}
                                    <!-- preventDefault: ch\u1EB7n label forward click sang n\xFAt \xD7 (labelable \u0111\u1EA7u ti\xEAn) -->
                                    <button type="button" class="fbr-file-x" (click)="removeFile(f, fn); $event.preventDefault(); $event.stopPropagation()">\xD7</button>
                                  </span>
                                }
                              </span>
                            }
                            <!-- V\xF9ng th\u1EA3 c\xF2n hi\u1EC7n t\u1EDBi khi \u0110\u1EE6 S\u1ED1 l\u01B0\u1EE3ng file (\u0111\u1EB7c t\u1EA3 Upload \u2192 Gi\u1EDBi h\u1EA1n) -->
                            @if (arr(f).length < maxFilesOf(f)) {
                              <span class="fbr-upload" (click)="pickDemoFile(f); $event.preventDefault()">
                                <tabler-icon [icon]="icUpload" [size]="22" />
                                <span class="fbr-upload-t">{{ tr('rUpload1') }} <b>{{ tr('rUpload2') }}</b></span>
                              </span>
                            } @else {
                              <span class="fbr-hint">{{ tr('rMaxFilesHit', { n: maxFilesOf(f) }) }}</span>
                            }
                          }
                          @case ('image') {
                            <span class="fbr-upload fbr-upload--img">
                              <tabler-icon [icon]="icPhoto" [size]="22" />
                              <span class="fbr-upload-t">{{ tr('rImage') }}</span>
                            </span>
                          }
                        }
                      }

                      @if (uploadLimit(f); as lim) { <span class="fbr-help">{{ lim }}</span> }
                      @if (f.helper && mode() !== 'detail') { <span class="fbr-help">{{ f.helper }}</span> }
                      @if (mode() !== 'detail') {
                        @if (requiredError(f); as rerr) {
                          <span class="fbr-err"><tabler-icon [icon]="icWarn" [size]="13" /> {{ rerr }}</span>
                        } @else if (constraintError(f); as err) {
                          <span class="fbr-err"><tabler-icon [icon]="icWarn" [size]="13" /> {{ err }}</span>
                        }
                        @for (w of warnsOf(f); track w) {
                          <span class="fbr-err"><tabler-icon [icon]="icWarn" [size]="13" /> {{ w }}</span>
                        }
                      }
                    </label>
                  }
                }
              }
            }
          </div>
        </section>
      }
    </div>
  `, host: {
      class: "sg-form-renderer",
      // Trang trí form (schema.theme) — override CSS vars CỤC BỘ trong phạm vi form.
      "[style.--primary-base]": "thPrimary()",
      "[style.--radius-md]": "thRadiusMd()",
      "[style.--radius-lg]": "thRadiusLg()"
    }, styles: ["/* angular:styles/component:css;0ea037e083c7bdfd67b9c44a62f94df365c653013f9d474a6741021fcd4358b1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-renderer.ts */\n:host {\n  display: block;\n}\n.fbr-head {\n  padding: 16px 20px 14px;\n  color: var(--static-white, #fff);\n}\n.fbr-head-t {\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-bold, 700);\n}\n.fbr-head-d {\n  margin-top: 2px;\n  font-size: var(--fs-12, 12px);\n  opacity: .85;\n}\n.fbr-body {\n  padding: var(--space-5, 20px) var(--space-5, 20px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6, 24px);\n}\n.fbr-sec {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.fbr-sec-h {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.fbr-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 14px 10px;\n}\n.fbr-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.fbr-span-full {\n  grid-column: 1 / -1;\n}\n.fbr-lbl {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.fbr-req {\n  color: var(--error-base);\n  font-weight: var(--font-bold, 700);\n}\n.fbr-help {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.fbr-err {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--error-base);\n}\n.fbr-heading {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-top: 4px;\n}\n.fbr-divider {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 2px 0;\n  width: 100%;\n}\n.fbr-checks {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 2px;\n}\n.fbr-toggle,\n.fbr-rate {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n}\n.fbr-money {\n  display: flex;\n  gap: 8px;\n  min-width: 0;\n}\n.fbr-money-n {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.fbr-money-u {\n  flex: 0 0 96px;\n}\n.fbr-mono {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.fbr-upload {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 74px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  cursor: pointer;\n  transition: border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);\n}\n.fbr-upload:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fbr-upload-t b {\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n}\n.fbr-ro {\n  font-size: var(--fs-14, 14px);\n  color: var(--text-body);\n  min-height: 22px;\n  white-space: pre-wrap;\n}\n.fbr-err--top {\n  padding: 8px 10px;\n  border: 1px solid color-mix(in srgb, var(--error-base) 35%, transparent);\n  border-radius: var(--radius-md);\n  background: color-mix(in srgb, var(--error-base) 6%, var(--bg-surface));\n}\n.fbr-hint {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fbr-files {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.fbr-file {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-12);\n  color: var(--text-body);\n}\n.fbr-file-x {\n  border: 0;\n  background: transparent;\n  color: var(--text-soft);\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0;\n}\n.fbr-file-x:hover {\n  color: var(--error-base);\n}\n.fbr-ro--boxed {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=sg-form-renderer.css.map */\n"] }]
  }], null, { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: true }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgFormRenderer, { className: "SgFormRenderer", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-renderer.ts", lineNumber: 373 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/_fb-ai.ts
function norm(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase();
}
var aiSeq = 0;
function f(partial) {
  return __spreadValues({ id: fbId("f"), span: "half" }, partial);
}
function guessType(phrase) {
  const p = norm(phrase);
  if (/(email|thu dien tu)/.test(p))
    return "email";
  if (/(dien thoai|sdt|phone)/.test(p))
    return "phone";
  if (/(ngay|date|sinh nhat|han)/.test(p))
    return "date";
  if (/(gio|time)/.test(p))
    return "time";
  if (/(luong|tien|thu nhap|chi phi|salary|money|budget)/.test(p))
    return "money";
  if (/(phan tram|%|percent|trong so)/.test(p))
    return "percent";
  if (/(mo ta|ghi chu|noi dung|ly do|note|description|comment)/.test(p))
    return "textarea";
  if (/(so luong|so nam|so thang|so ngay|number|tuoi)/.test(p))
    return "number";
  if (/(dinh kem|tep|file|upload|cv|ho so)/.test(p))
    return "upload";
  if (/(hinh|anh|image|photo)/.test(p))
    return "image";
  if (/(danh gia|rating|sao)/.test(p))
    return "rating";
  if (/(dia chi|address)/.test(p))
    return "address";
  if (/(nhan vien|nguoi phu trach|quan ly|employee|manager)/.test(p))
    return "user";
  if (/(ma so|ma tu sinh|ma\b|code)/.test(p))
    return "autocode";
  if (/(dong y|xac nhan|checkbox|check)/.test(p))
    return "checkbox";
  if (/(bat|tat|toggle|kich hoat)/.test(p))
    return "toggle";
  if (/(chon nhieu|multi)/.test(p))
    return "multiselect";
  if (/(phong ban|chuc vu|loai|trang thai|nhom|select|danh sach|don vi|hinh thuc)/.test(p))
    return "select";
  return "text";
}
function cap(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}
function tplLeave() {
  return {
    version: 2,
    name: "\u0110\u01A1n xin ngh\u1EC9 ph\xE9p",
    desc: "Form sinh b\u1EDFi Tr\u1EE3 l\xFD AI.",
    sections: [
      { id: fbId("sec"), title: "Th\xF4ng tin nh\xE2n vi\xEAn", fields: [
        f({ type: "user", key: "employee", label: "Nh\xE2n vi\xEAn", labelEn: "Employee", required: true }),
        f({ type: "select", key: "dept", label: "Ph\xF2ng ban", labelEn: "Department", options: ["Kinh doanh", "K\u1EF9 thu\u1EADt", "Nh\xE2n s\u1EF1", "K\u1EBF to\xE1n"] })
      ] },
      { id: fbId("sec"), title: "Chi ti\u1EBFt ngh\u1EC9 ph\xE9p", fields: [
        f({ type: "select", key: "leaveType", label: "Lo\u1EA1i ngh\u1EC9 ph\xE9p", labelEn: "Leave type", required: true, options: ["Ph\xE9p n\u0103m", "Ngh\u1EC9 \u1ED1m", "Thai s\u1EA3n", "Kh\xF4ng l\u01B0\u01A1ng"] }),
        f({ type: "number", key: "days", label: "S\u1ED1 ng\xE0y ngh\u1EC9", labelEn: "Days", constraints: { min: "0.5", numberFormat: "decimal" } }),
        f({ type: "date", key: "fromDate", label: "T\u1EEB ng\xE0y", labelEn: "From date", required: true }),
        f({ type: "date", key: "toDate", label: "\u0110\u1EBFn ng\xE0y", labelEn: "To date", readonly: true }),
        f({ type: "textarea", key: "reason", label: "L\xFD do", labelEn: "Reason", span: "full", required: true })
      ] }
    ],
    rules: [
      {
        id: fbId("r"),
        name: "T\xEDnh \u0110\u1EBFn ng\xE0y t\u1EEB s\u1ED1 ng\xE0y ngh\u1EC9",
        conditions: [{ field: "fromDate", op: "notEmpty" }, { field: "days", op: "notEmpty" }],
        actions: [{ type: "compute", targets: ["toDate"], formula: "ADDDAY([fromDate], [days])" }]
      }
    ]
  };
}
function tplCandidate() {
  return {
    version: 2,
    name: "H\u1ED3 s\u01A1 \u1EE9ng vi\xEAn",
    desc: "Form sinh b\u1EDFi Tr\u1EE3 l\xFD AI.",
    sections: [
      { id: fbId("sec"), title: "Th\xF4ng tin \u1EE9ng vi\xEAn", fields: [
        f({ type: "text", key: "fullName", label: "H\u1ECD v\xE0 t\xEAn", labelEn: "Full name", required: true }),
        f({ type: "email", key: "email", label: "Email", labelEn: "Email", required: true }),
        f({ type: "phone", key: "phone", label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", labelEn: "Phone" }),
        f({ type: "date", key: "dob", label: "Ng\xE0y sinh", labelEn: "Date of birth" }),
        f({ type: "address", key: "address", label: "\u0110\u1ECBa ch\u1EC9", labelEn: "Address", span: "full" })
      ] },
      { id: fbId("sec"), title: "V\u1ECB tr\xED \u1EE9ng tuy\u1EC3n", fields: [
        f({ type: "select", key: "position", label: "V\u1ECB tr\xED", labelEn: "Position", required: true, options: ["L\u1EADp tr\xECnh vi\xEAn", "Chuy\xEAn vi\xEAn nh\xE2n s\u1EF1", "K\u1EBF to\xE1n", "Kinh doanh"] }),
        f({ type: "money", key: "expectedSalary", label: "M\u1EE9c l\u01B0\u01A1ng mong mu\u1ED1n", labelEn: "Expected salary", unitOptions: "VN\u0110,USD", defaultUnit: "VN\u0110" }),
        f({ type: "rating", key: "selfRating", label: "T\u1EF1 \u0111\xE1nh gi\xE1 kinh nghi\u1EC7m", labelEn: "Self rating" }),
        f({ type: "upload", key: "cv", label: "CV \u0111\xEDnh k\xE8m", labelEn: "CV attachment", span: "full", constraints: { maxFiles: 3, maxSizeMb: 10, fileTypes: "pdf,docx" } })
      ] }
    ],
    rules: []
  };
}
function tplContract() {
  return {
    version: 2,
    name: "\u0110\u0103ng k\xFD h\u1EE3p \u0111\u1ED3ng",
    desc: "Form sinh b\u1EDFi Tr\u1EE3 l\xFD AI.",
    sections: [
      { id: fbId("sec"), title: "Th\xF4ng tin h\u1EE3p \u0111\u1ED3ng", fields: [
        f({ type: "autocode", key: "contractNo", label: "S\u1ED1 h\u1EE3p \u0111\u1ED3ng", labelEn: "Contract no.", codePrefix: "H\u0110-" }),
        f({ type: "user", key: "employee", label: "Nh\xE2n vi\xEAn", labelEn: "Employee", required: true }),
        f({ type: "select", key: "contractType", label: "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng", labelEn: "Contract type", required: true, options: ["Th\u1EED vi\u1EC7c", "X\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n", "V\xF4 th\u1EDDi h\u1EA1n"] }),
        f({ type: "money", key: "salary", label: "L\u01B0\u01A1ng c\u01A1 b\u1EA3n", labelEn: "Base salary", unitOptions: "VN\u0110,USD", defaultUnit: "VN\u0110" }),
        f({ type: "date", key: "startDate", label: "Ng\xE0y b\u1EAFt \u0111\u1EA7u", labelEn: "Start date", required: true, span: "third" }),
        f({ type: "number", key: "term", label: "Th\u1EDDi h\u1EA1n (th\xE1ng)", labelEn: "Term (months)", span: "third", constraints: { min: "0", numberFormat: "int" } }),
        f({ type: "date", key: "endDate", label: "Ng\xE0y k\u1EBFt th\xFAc", labelEn: "End date", readonly: true, span: "third" })
      ] }
    ],
    rules: [
      {
        id: fbId("r"),
        name: "T\xEDnh ng\xE0y k\u1EBFt th\xFAc",
        conditions: [{ field: "startDate", op: "notEmpty" }, { field: "term", op: "notEmpty" }],
        actions: [{ type: "compute", targets: ["endDate"], formula: "ADDMONTH([startDate], [term])" }]
      }
    ]
  };
}
function tplSurvey() {
  return {
    version: 2,
    name: "Kh\u1EA3o s\xE1t nh\xE2n vi\xEAn",
    desc: "Form sinh b\u1EDFi Tr\u1EE3 l\xFD AI.",
    sections: [
      { id: fbId("sec"), title: "\u0110\xE1nh gi\xE1", fields: [
        f({ type: "rating", key: "satisfaction", label: "M\u1EE9c \u0111\u1ED9 h\xE0i l\xF2ng", labelEn: "Satisfaction", required: true }),
        f({ type: "select", key: "aspect", label: "Kh\xEDa c\u1EA1nh \u0111\xE1nh gi\xE1", labelEn: "Aspect", options: ["M\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c", "Ph\xFAc l\u1EE3i", "\u0110\xE0o t\u1EA1o", "L\xE3nh \u0111\u1EA1o"] }),
        f({ type: "radio", key: "recommend", label: "Gi\u1EDBi thi\u1EC7u c\xF4ng ty cho b\u1EA1n b\xE8?", labelEn: "Recommend to a friend?", span: "full", options: ["C\xF3", "Kh\xF4ng", "Ch\u01B0a ch\u1EAFc"] }),
        f({ type: "textarea", key: "feedback", label: "G\xF3p \xFD", labelEn: "Feedback", span: "full" }),
        f({ type: "toggle", key: "anonymous", label: "G\u1EEDi \u1EA9n danh", labelEn: "Anonymous" })
      ] }
    ],
    rules: []
  };
}
function extractFields(prompt) {
  const m = /(?:gồm|bao gồm|có|với|:)([^.。]*)$/i.exec(prompt) || [null, prompt];
  const tail = m[1] || prompt;
  const parts = tail.split(/,|;|\bvà\b|\band\b/i).map((x) => x.trim()).filter((x) => x.length > 1 && x.length < 60);
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const raw of parts.slice(0, 14)) {
    const required = /bắt buộc|\*|required/i.test(raw);
    const label = cap(raw.replace(/bắt buộc|\(|\)|\*|required/gi, "").trim());
    if (!label)
      continue;
    let key = fbKeyFrom(label);
    while (seen.has(key))
      key += String(++aiSeq);
    seen.add(key);
    const type = guessType(label);
    out.push(f({
      type,
      key,
      label,
      required: required || void 0,
      span: type === "textarea" || type === "upload" || type === "address" ? "full" : "half",
      options: type === "select" || type === "multiselect" || type === "radio" ? ["L\u1EF1a ch\u1ECDn 1", "L\u1EF1a ch\u1ECDn 2", "L\u1EF1a ch\u1ECDn 3"] : void 0
    }));
  }
  return out;
}
function fbAiGenerate(prompt, _lang) {
  const p = prompt.trim();
  if (p.length < 4)
    return null;
  const n = norm(p);
  if (/(nghi phep|xin nghi|don nghi|leave)/.test(n))
    return tplLeave();
  if (/(ung vien|tuyen dung|candidate|recruit)/.test(n))
    return tplCandidate();
  if (/(hop dong|contract)/.test(n))
    return tplContract();
  if (/(khao sat|danh gia|survey|feedback)/.test(n))
    return tplSurvey();
  const fields = extractFields(p);
  if (!fields.length)
    return null;
  const nameM = /^(.*?)(?:\s+(?:gồm|bao gồm|có|với)\b|:|$)/i.exec(p);
  const name = cap((nameM?.[1] || "Bi\u1EC3u m\u1EABu m\u1EDBi").trim()).slice(0, 60) || "Bi\u1EC3u m\u1EABu m\u1EDBi";
  return {
    version: 2,
    name,
    desc: "Form sinh b\u1EDFi Tr\u1EE3 l\xFD AI.",
    sections: [{ id: fbId("sec"), title: "Th\xF4ng tin chung", fields }],
    rules: []
  };
}
var FB_AI_SUGGESTIONS = [
  { vi: "\u0110\u01A1n xin ngh\u1EC9 ph\xE9p", en: "Leave request form" },
  { vi: "H\u1ED3 s\u01A1 \u1EE9ng vi\xEAn tuy\u1EC3n d\u1EE5ng", en: "Job candidate profile" },
  { vi: "\u0110\u0103ng k\xFD h\u1EE3p \u0111\u1ED3ng lao \u0111\u1ED9ng", en: "Labor contract registration" },
  { vi: "Kh\u1EA3o s\xE1t m\u1EE9c \u0111\u1ED9 h\xE0i l\xF2ng nh\xE2n vi\xEAn", en: "Employee satisfaction survey" },
  { vi: "Form c\xF4ng t\xE1c g\u1ED3m: nh\xE2n vi\xEAn ph\u1EE5 tr\xE1ch, ng\xE0y \u0111i, ng\xE0y v\u1EC1, chi ph\xED d\u1EF1 ki\u1EBFn, l\xFD do b\u1EAFt bu\u1ED9c", en: "Business trip form with: employee, start date, end date, budget, reason required" }
];

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-vnai-mascot.ts
function SgVnaiMascot_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 4)(1, "span", 5)(2, "span", 6)(3, "span", 7)(4, "span", 8)(5, "span", 9)(6, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-blink", ctx_r0.blinking());
    \u0275\u0275advance();
    \u0275\u0275classProp("is-blink", ctx_r0.blinking());
  }
}
function SgVnaiMascot_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 11);
    \u0275\u0275domElement(2, "path", 12);
    \u0275\u0275domElementEnd()();
  }
}
function SgVnaiMascot_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 13);
    \u0275\u0275domElement(2, "path", 14)(3, "path", 15);
    \u0275\u0275domElementEnd()();
  }
}
var SgVnaiMascot = class _SgVnaiMascot {
  constructor() {
    this.size = input(56, ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.state = input("idle", ...ngDevMode ? [{ debugName: "state" }] : (
      /* istanbul ignore next */
      []
    ));
    this.imgOk = signal(true, ...ngDevMode ? [{ debugName: "imgOk" }] : (
      /* istanbul ignore next */
      []
    ));
    this.blinking = signal(false, ...ngDevMode ? [{ debugName: "blinking" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pressed = signal(false, ...ngDevMode ? [{ debugName: "pressed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paused = signal(false, ...ngDevMode ? [{ debugName: "paused" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tilt = signal(0, ...ngDevMode ? [{ debugName: "tilt" }] : (
      /* istanbul ignore next */
      []
    ));
    this.el = inject(ElementRef);
    this.motionOn = typeof matchMedia === "undefined" || !matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.blinkTimer = null;
    this.io = null;
    if (this.motionOn)
      this.scheduleBlink();
    try {
      this.io = new IntersectionObserver(([e]) => this.paused.set(!e.isIntersecting));
      this.io.observe(this.el.nativeElement);
    } catch {
    }
    effect(() => {
      const host = this.el.nativeElement;
      host.style.transform = this.pressed() ? "scale(.96)" : "";
      host.style.transition = "transform .1s ease-out";
    });
  }
  /** Chớp mắt ngẫu nhiên 3–4s (thỉnh thoảng chớp đúp) — chỉ khi hiện trong viewport. */
  scheduleBlink() {
    const delay = 3e3 + Math.random() * 1e3;
    this.blinkTimer = setTimeout(() => {
      if (!this.paused()) {
        this.blink();
        if (Math.random() < 0.25)
          setTimeout(() => this.blink(), 260);
      }
      this.scheduleBlink();
    }, delay);
  }
  blink() {
    this.blinking.set(true);
    setTimeout(() => this.blinking.set(false), 170);
  }
  onEnter() {
  }
  onLeave() {
    this.tilt.set(0);
    this.pressed.set(false);
  }
  /** pointerX → nghiêng thân về phía con trỏ (mô phỏng "nhìn theo"). */
  onMove(e) {
    if (!this.motionOn)
      return;
    const r = this.el.nativeElement.getBoundingClientRect();
    const rel = (e.clientX - r.left) / r.width - 0.5;
    this.tilt.set(Math.round(rel * 6 * 10) / 10);
  }
  ngOnDestroy() {
    if (this.blinkTimer)
      clearTimeout(this.blinkTimer);
    this.io?.disconnect();
  }
  static {
    this.\u0275fac = function SgVnaiMascot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgVnaiMascot)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgVnaiMascot, selectors: [["sg-vnai-mascot"]], hostBindings: function SgVnaiMascot_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function SgVnaiMascot_mouseenter_HostBindingHandler() {
          return ctx.onEnter();
        })("mouseleave", function SgVnaiMascot_mouseleave_HostBindingHandler() {
          return ctx.onLeave();
        })("mousemove", function SgVnaiMascot_mousemove_HostBindingHandler($event) {
          return ctx.onMove($event);
        })("mousedown", function SgVnaiMascot_mousedown_HostBindingHandler() {
          return ctx.pressed.set(true);
        })("mouseup", function SgVnaiMascot_mouseup_HostBindingHandler() {
          return ctx.pressed.set(false);
        });
      }
    }, inputs: { size: [1, "size"], state: [1, "state"] }, decls: 5, vars: 15, consts: [[1, "vm"], ["src", "/assets/vnai-mascot.png", "alt", "VNAI", "draggable", "false", 1, "vm-img", 3, "error"], ["aria-hidden", "true", 1, "vm-badge", "vm-badge--ok"], ["aria-hidden", "true", 1, "vm-badge", "vm-badge--err"], [1, "vm-lid", "vm-lid--l"], [1, "vm-lid", "vm-lid--r"], [1, "vm-glow", "vm-glow--l"], [1, "vm-glow", "vm-glow--r"], [1, "vm-dot", "vm-dot--1"], [1, "vm-dot", "vm-dot--2"], [1, "vm-dot", "vm-dot--3"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 12.5 9.5 18 20 6.5"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 11a8 8 0 1 0-2.5 6.5"], ["d", "M20 5v6h-6"]], template: function SgVnaiMascot_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "img", 1);
        \u0275\u0275domListener("error", function SgVnaiMascot_Template_img_error_1_listener() {
          return ctx.imgOk.set(false);
        });
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, SgVnaiMascot_Conditional_2_Template, 7, 4);
        \u0275\u0275conditionalCreate(3, SgVnaiMascot_Conditional_3_Template, 3, 0, "span", 2);
        \u0275\u0275conditionalCreate(4, SgVnaiMascot_Conditional_4_Template, 4, 0, "span", 3);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.size(), "px")("--tilt", ctx.tilt(), "deg");
        \u0275\u0275classProp("vm--paused", ctx.paused())("vm--think", ctx.state() === "thinking")("vm--error", ctx.state() === "error")("vm--success", ctx.state() === "success");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.imgOk() && ctx.motionOn ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state() === "success" ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state() === "error" ? 4 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n  line-height: 0;\n}\n.vm[_ngcontent-%COMP%] {\n  position: relative;\n  transform: rotate(var(--tilt, 0deg));\n  will-change: transform;\n  transition: transform .18s var(--ease-out, ease-out);\n}\n.vm-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.vm[_ngcontent-%COMP%]:not(.vm--paused):not(.vm--error)   .vm-img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vm-breath 3.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_vm-breath {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-1px);\n  }\n}\n.vm-lid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 34%;\n  width: 12.5%;\n  height: 10%;\n  background: #0F1B3D;\n  border-radius: 46% 46% 50% 50%;\n  transform: scaleY(0);\n  transform-origin: center top;\n  pointer-events: none;\n}\n.vm-lid--l[_ngcontent-%COMP%] {\n  left: 33.9%;\n}\n.vm-lid--r[_ngcontent-%COMP%] {\n  left: 58.4%;\n}\n.vm-lid.is-blink[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vm-blink .15s ease-in;\n}\n@keyframes _ngcontent-%COMP%_vm-blink {\n  0% {\n    transform: scaleY(0);\n  }\n  45% {\n    transform: scaleY(1);\n  }\n  100% {\n    transform: scaleY(0);\n  }\n}\n.vm-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35.5%;\n  width: 10.5%;\n  height: 8%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgb(96 165 250 / .95),\n      rgb(96 165 250 / 0) 68%);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease-out, ease-out);\n}\n.vm-glow--l[_ngcontent-%COMP%] {\n  left: 34.9%;\n}\n.vm-glow--r[_ngcontent-%COMP%] {\n  left: 59.4%;\n}\n[_nghost-%COMP%]:hover   .vm-glow[_ngcontent-%COMP%] {\n  opacity: .55;\n}\n.vm--think[_ngcontent-%COMP%]   .vm-glow[_ngcontent-%COMP%] {\n  opacity: .8;\n  animation: _ngcontent-%COMP%_vm-dart 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_vm-dart {\n  0%, 100% {\n    transform: translateX(-14%);\n  }\n  50% {\n    transform: translateX(14%);\n  }\n}\n.vm-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7%;\n  height: 7%;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background:\n    radial-gradient(\n      circle,\n      #93C5FD,\n      rgb(147 197 253 / 0) 72%);\n}\n.vm--think[_ngcontent-%COMP%]   .vm-dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vm-orbit 1.8s ease-in-out infinite;\n}\n.vm-dot--1[_ngcontent-%COMP%] {\n  left: 6%;\n  top: 12%;\n}\n.vm-dot--2[_ngcontent-%COMP%] {\n  left: 46%;\n  top: -6%;\n  animation-delay: .3s !important;\n}\n.vm-dot--3[_ngcontent-%COMP%] {\n  left: 84%;\n  top: 12%;\n  animation-delay: .6s !important;\n}\n@keyframes _ngcontent-%COMP%_vm-orbit {\n  0%, 100% {\n    opacity: 0;\n    transform: translateY(2px) scale(.6);\n  }\n  40% {\n    opacity: .95;\n    transform: translateY(-3px) scale(1);\n  }\n  70% {\n    opacity: .4;\n  }\n}\n.vm--error[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vm-shake .4s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_vm-shake {\n  0%, 100% {\n    transform: translateX(0) rotate(var(--tilt, 0deg));\n  }\n  25% {\n    transform: translateX(-2px) rotate(var(--tilt, 0deg));\n  }\n  75% {\n    transform: translateX(2px) rotate(var(--tilt, 0deg));\n  }\n}\n.vm--success[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vm-hop .45s var(--ease-out, ease-out);\n}\n@keyframes _ngcontent-%COMP%_vm-hop {\n  0%, 100% {\n    transform: translateY(0) rotate(var(--tilt, 0deg));\n  }\n  40% {\n    transform: translateY(-4px) rotate(var(--tilt, 0deg));\n  }\n}\n.vm-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6%;\n  right: -10%;\n  display: grid;\n  place-items: center;\n  width: 38%;\n  height: 38%;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / .22);\n  animation: _ngcontent-%COMP%_vm-pop .3s var(--ease-out, ease-out);\n}\n.vm-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 62%;\n  height: 62%;\n}\n.vm-badge--ok[_ngcontent-%COMP%] {\n  background: var(--success-base, #16A34A);\n}\n.vm-badge--err[_ngcontent-%COMP%] {\n  background: var(--warning-base, #F59E0B);\n}\n@keyframes _ngcontent-%COMP%_vm-pop {\n  from {\n    transform: scale(.4);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.vm--paused[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  animation-play-state: paused !important;\n}\n@media (prefers-reduced-motion: reduce) {\n  .vm[_ngcontent-%COMP%], \n   .vm[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: opacity .2s ease !important;\n  }\n}\n/*# sourceMappingURL=sg-vnai-mascot.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgVnaiMascot, [{
    type: Component,
    args: [{ selector: "sg-vnai-mascot", template: `
    <div class="vm" [class.vm--paused]="paused()" [class.vm--think]="state() === 'thinking'"
      [class.vm--error]="state() === 'error'" [class.vm--success]="state() === 'success'"
      [style.width.px]="size()" [style.--tilt.deg]="tilt()">
      <img class="vm-img" src="/assets/vnai-mascot.png" alt="VNAI" draggable="false" (error)="imgOk.set(false)" />

      @if (imgOk() && motionOn) {
        <!-- M\xED m\u1EAFt (ch\u1EDBp) \u2014 m\xE0u m\xE0n h\xECnh m\u1EB7t robot, \u0111\xE8 \u0111\xFAng to\u1EA1 \u0111\u1ED9 2 m\u1EAFt -->
        <span class="vm-lid vm-lid--l" [class.is-blink]="blinking()"></span>
        <span class="vm-lid vm-lid--r" [class.is-blink]="blinking()"></span>
        <!-- Glow m\u1EAFt: s\xE1ng h\u01A1n khi hover \xB7 \u0111\u1EA3o tr\xE1i-ph\u1EA3i khi thinking -->
        <span class="vm-glow vm-glow--l"></span>
        <span class="vm-glow vm-glow--r"></span>
        <!-- 3 h\u1EA1t s\xE1ng quanh \u0111\u1EA7u (thinking) -->
        <span class="vm-dot vm-dot--1"></span>
        <span class="vm-dot vm-dot--2"></span>
        <span class="vm-dot vm-dot--3"></span>
      }

      <!-- Badge k\u1EBFt qu\u1EA3 (success/error) -->
      @if (state() === 'success') {
        <span class="vm-badge vm-badge--ok" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 9.5 18 20 6.5" /></svg>
        </span>
      }
      @if (state() === 'error') {
        <span class="vm-badge vm-badge--err" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.5 6.5" /><path d="M20 5v6h-6" /></svg>
        </span>
      }
    </div>
  `, host: {
      "(mouseenter)": "onEnter()",
      "(mouseleave)": "onLeave()",
      "(mousemove)": "onMove($event)",
      "(mousedown)": "pressed.set(true)",
      "(mouseup)": "pressed.set(false)"
    }, styles: ["/* angular:styles/component:css;7b8153944733eed55d3c4e9b6d45c28704a0e193c752fe27a72a0fe44ff49ab9;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-vnai-mascot.ts */\n:host {\n  display: inline-block;\n  line-height: 0;\n}\n.vm {\n  position: relative;\n  transform: rotate(var(--tilt, 0deg));\n  will-change: transform;\n  transition: transform .18s var(--ease-out, ease-out);\n}\n.vm-img {\n  width: 100%;\n  height: auto;\n  display: block;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.vm:not(.vm--paused):not(.vm--error) .vm-img {\n  animation: vm-breath 3.4s ease-in-out infinite;\n}\n@keyframes vm-breath {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-1px);\n  }\n}\n.vm-lid {\n  position: absolute;\n  top: 34%;\n  width: 12.5%;\n  height: 10%;\n  background: #0F1B3D;\n  border-radius: 46% 46% 50% 50%;\n  transform: scaleY(0);\n  transform-origin: center top;\n  pointer-events: none;\n}\n.vm-lid--l {\n  left: 33.9%;\n}\n.vm-lid--r {\n  left: 58.4%;\n}\n.vm-lid.is-blink {\n  animation: vm-blink .15s ease-in;\n}\n@keyframes vm-blink {\n  0% {\n    transform: scaleY(0);\n  }\n  45% {\n    transform: scaleY(1);\n  }\n  100% {\n    transform: scaleY(0);\n  }\n}\n.vm-glow {\n  position: absolute;\n  top: 35.5%;\n  width: 10.5%;\n  height: 8%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgb(96 165 250 / .95),\n      rgb(96 165 250 / 0) 68%);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease-out, ease-out);\n}\n.vm-glow--l {\n  left: 34.9%;\n}\n.vm-glow--r {\n  left: 59.4%;\n}\n:host(:hover) .vm-glow {\n  opacity: .55;\n}\n.vm--think .vm-glow {\n  opacity: .8;\n  animation: vm-dart 1.5s ease-in-out infinite;\n}\n@keyframes vm-dart {\n  0%, 100% {\n    transform: translateX(-14%);\n  }\n  50% {\n    transform: translateX(14%);\n  }\n}\n.vm-dot {\n  position: absolute;\n  width: 7%;\n  height: 7%;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  background:\n    radial-gradient(\n      circle,\n      #93C5FD,\n      rgb(147 197 253 / 0) 72%);\n}\n.vm--think .vm-dot {\n  animation: vm-orbit 1.8s ease-in-out infinite;\n}\n.vm-dot--1 {\n  left: 6%;\n  top: 12%;\n}\n.vm-dot--2 {\n  left: 46%;\n  top: -6%;\n  animation-delay: .3s !important;\n}\n.vm-dot--3 {\n  left: 84%;\n  top: 12%;\n  animation-delay: .6s !important;\n}\n@keyframes vm-orbit {\n  0%, 100% {\n    opacity: 0;\n    transform: translateY(2px) scale(.6);\n  }\n  40% {\n    opacity: .95;\n    transform: translateY(-3px) scale(1);\n  }\n  70% {\n    opacity: .4;\n  }\n}\n.vm--error {\n  animation: vm-shake .4s ease-in-out;\n}\n@keyframes vm-shake {\n  0%, 100% {\n    transform: translateX(0) rotate(var(--tilt, 0deg));\n  }\n  25% {\n    transform: translateX(-2px) rotate(var(--tilt, 0deg));\n  }\n  75% {\n    transform: translateX(2px) rotate(var(--tilt, 0deg));\n  }\n}\n.vm--success {\n  animation: vm-hop .45s var(--ease-out, ease-out);\n}\n@keyframes vm-hop {\n  0%, 100% {\n    transform: translateY(0) rotate(var(--tilt, 0deg));\n  }\n  40% {\n    transform: translateY(-4px) rotate(var(--tilt, 0deg));\n  }\n}\n.vm-badge {\n  position: absolute;\n  top: -6%;\n  right: -10%;\n  display: grid;\n  place-items: center;\n  width: 38%;\n  height: 38%;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / .22);\n  animation: vm-pop .3s var(--ease-out, ease-out);\n}\n.vm-badge svg {\n  width: 62%;\n  height: 62%;\n}\n.vm-badge--ok {\n  background: var(--success-base, #16A34A);\n}\n.vm-badge--err {\n  background: var(--warning-base, #F59E0B);\n}\n@keyframes vm-pop {\n  from {\n    transform: scale(.4);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.vm--paused * {\n  animation-play-state: paused !important;\n}\n@media (prefers-reduced-motion: reduce) {\n  .vm,\n  .vm * {\n    animation: none !important;\n    transition: opacity .2s ease !important;\n  }\n}\n/*# sourceMappingURL=sg-vnai-mascot.css.map */\n"] }]
  }], () => [], { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], state: [{ type: Input, args: [{ isSignal: true, alias: "state", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgVnaiMascot, { className: "SgVnaiMascot", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-vnai-mascot.ts", lineNumber: 135 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-builder.ts
var _c02 = ["aiLog"];
var _c12 = () => [];
var _c2 = (a0) => ({ p: a0 });
var _c3 = (a0) => ({ n: a0 });
var _c4 = (a0) => ({ label: a0 });
var _forTrack02 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
function SgFormBuilder_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.schema().rules.length);
  }
}
function SgFormBuilder_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.draftFields().length);
  }
}
function SgFormBuilder_Conditional_0_For_50_For_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 40);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", p_r4.icon)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
  }
}
function SgFormBuilder_Conditional_0_For_50_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_50_For_3_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.appendField(p_r4));
    });
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SgFormBuilder_Conditional_0_For_50_For_3_div_7_Template, 5, 3, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cdkDragData", p_r4);
    \u0275\u0275attribute("title", ctx_r1.tr("palHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", p_r4.icon)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
  }
}
function SgFormBuilder_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, SgFormBuilder_Conditional_0_For_50_For_3_Template, 8, 7, "button", 38, _forTrack2);
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r5.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r5.items);
  }
}
function SgFormBuilder_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.schema().desc);
  }
}
function SgFormBuilder_Conditional_0_For_58_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_58_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const sec_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSection(sec_r7.id));
    });
    \u0275\u0275element(1, "tabler-icon", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r1.tr("delSec"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 14);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.label);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 62);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 66);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r13);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80)(1, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Conditional_2_For_4_Template, 2, 1, "span", 82, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("logicTipTitle"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.logicLines(f_r11));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275listener("mouseenter", function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Template_span_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r12);
      const f_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.logicTipFor.set(f_r11.id));
    })("mouseleave", function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Template_span_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.logicTipFor.set(null));
    });
    \u0275\u0275element(1, "tabler-icon", 5);
    \u0275\u0275conditionalCreate(2, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Conditional_2_Template, 5, 1, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icBolt)("size", 12);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.logicTipFor() === f_r11.id ? 2 : -1);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("tagHidden"));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("tagDraft"));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || " ");
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "tabler-icon", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || ctx_r1.tr("rSelectPh"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "tabler-icon", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || ctx_r1.tr("rMultiPh"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "tabler-icon", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || ctx_r1.tr("rUserPh"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275element(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r14 = ctx.$implicit;
    const f_r11 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", o_r14 === f_r11.defaultValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r14);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275repeaterCreate(1, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_11_For_2_Template, 3, 3, "span", 84, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(f_r11.options || \u0275\u0275pureFunction0(0, _c12));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275element(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r15);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275repeaterCreate(1, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_12_For_2_Template, 3, 1, "span", 86, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(f_r11.options || \u0275\u0275pureFunction0(0, _c12));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275element(1, "span", 88);
    \u0275\u0275elementEnd();
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("icon", ctx_r1.icStar)("size", 17);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275repeaterCreate(1, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_14_For_2_Template, 1, 2, "tabler-icon", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.starsOf(f_r11));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3, "%");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || "0");
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75)(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 91);
    \u0275\u0275text(4);
    \u0275\u0275element(5, "tabler-icon", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.placeholder || "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.defaultUnit || "VN\u0110");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 14);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((f_r11.codePrefix || "AUTO-") + "###");
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.tr("rUpload1"), " ", ctx_r1.tr("rUpload2"));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("rImage"));
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.placeholder || " ");
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11.helper);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_3_Template, 2, 0, "b", 66);
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_4_Template, 3, 3, "span", 67);
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_5_Template, 2, 1, "hrm-tag", 68);
    \u0275\u0275conditionalCreate(6, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_6_Template, 2, 1, "hrm-tag", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_7_Template, 2, 1, "span", 70)(8, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_8_Template, 3, 3, "span", 71)(9, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_9_Template, 3, 3, "span", 71)(10, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_10_Template, 3, 3, "span", 71)(11, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_11_Template, 3, 1, "span", 72)(12, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_12_Template, 3, 1, "span", 72)(13, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_13_Template, 2, 0, "span", 73)(14, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_14_Template, 3, 0, "span", 74)(15, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_15_Template, 4, 1, "span", 71)(16, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_16_Template, 6, 4, "span", 75)(17, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_17_Template, 2, 1, "span", 76)(18, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_18_Template, 2, 2, "span", 77)(19, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_19_Template, 2, 1, "span", 77)(20, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Case_20_Template, 2, 1, "span", 71);
    \u0275\u0275conditionalCreate(21, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Conditional_21_Template, 2, 1, "span", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_28_0;
    const f_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r11.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r11.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasLogic(f_r11) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r11.hidden ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r11.draft ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_28_0 = f_r11.type) === "textarea" ? 7 : tmp_28_0 === "select" ? 8 : tmp_28_0 === "multiselect" ? 9 : tmp_28_0 === "user" ? 10 : tmp_28_0 === "radio" ? 11 : tmp_28_0 === "checkbox" ? 12 : tmp_28_0 === "toggle" ? 13 : tmp_28_0 === "rating" ? 14 : tmp_28_0 === "percent" ? 15 : tmp_28_0 === "money" ? 16 : tmp_28_0 === "autocode" ? 17 : tmp_28_0 === "upload" ? 18 : tmp_28_0 === "image" ? 19 : 20);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(f_r11.helper ? 21 : -1);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 92);
  }
}
function SgFormBuilder_Conditional_0_For_58_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_58_For_9_Template_div_click_1_listener() {
      const f_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.select(f_r11.id));
    });
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57)(5, "span", 58);
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 59);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_58_For_9_Template_button_click_7_listener($event) {
      const f_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const sec_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.duplicate(f_r11, sec_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(8, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 60);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_58_For_9_Template_button_click_9_listener($event) {
      const f_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const sec_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.removeField(f_r11, sec_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, SgFormBuilder_Conditional_0_For_58_For_9_Case_11_Template, 2, 1, "div", 61)(12, SgFormBuilder_Conditional_0_For_58_For_9_Case_12_Template, 1, 0, "hr", 62)(13, SgFormBuilder_Conditional_0_For_58_For_9_Case_13_Template, 22, 7, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, SgFormBuilder_Conditional_0_For_58_For_9_div_14_Template, 1, 0, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_35_0;
    const f_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("grid-column", "span " + ctx_r1.spanCols(f_r11));
    \u0275\u0275property("cdkDragData", f_r11);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.selectedId() === f_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.label || ctx_r1.typeLabel(f_r11.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.tr("dragMove"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icGrip)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("duplicate"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icCopy)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("delField"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_35_0 = f_r11.type) === "heading" ? 11 : tmp_35_0 === "divider" ? 12 : 13);
  }
}
function SgFormBuilder_Conditional_0_For_58_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("emptySec"));
  }
}
function SgFormBuilder_Conditional_0_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 30)(1, "div", 45)(2, "input", 46);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_For_58_Template_input_ngModelChange_2_listener($event) {
      const sec_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchSection(sec_r7.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47)(4, "button", 48);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_For_58_Template_button_click_4_listener() {
      const \u0275$index_141_r8 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSection(\u0275$index_141_r8));
    });
    \u0275\u0275element(5, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SgFormBuilder_Conditional_0_For_58_Conditional_6_Template, 2, 3, "button", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50);
    \u0275\u0275listener("cdkDropListDropped", function SgFormBuilder_Conditional_0_For_58_Template_div_cdkDropListDropped_7_listener($event) {
      const sec_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event, sec_r7));
    });
    \u0275\u0275repeaterCreate(8, SgFormBuilder_Conditional_0_For_58_For_9_Template, 15, 16, "div", 51, _forTrack1);
    \u0275\u0275conditionalCreate(10, SgFormBuilder_Conditional_0_For_58_Conditional_10_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sec_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", sec_r7.title)("placeholder", ctx_r1.tr("secTitlePh"));
    \u0275\u0275attribute("aria-label", ctx_r1.tr("secTitlePh"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.tr("addSecBelow"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schema().sections.length > 1 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", sec_r7.fields);
    \u0275\u0275advance();
    \u0275\u0275repeater(sec_r7.fields);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!sec_r7.fields.length ? 10 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.transOpen.set(ctx_r1.transOpen() === f_r18.id ? null : f_r18.id));
    });
    \u0275\u0275element(1, "tabler-icon", 5);
    \u0275\u0275elementStart(2, "span", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r1.transOpen() === f_r18.id);
    \u0275\u0275property("title", ctx_r1.tr("translations"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icLang)("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.transCount(f_r18), "/", ctx_r1.activeLocales().length);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("transMissing"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_For_2_Conditional_3_Template, 2, 1, "span", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-input", 115);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_For_2_Template_hrm_input_ngModelChange_4_listener($event) {
      const lc_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchLabelLocale(f_r18, lc_r21.key, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lc_r21 = ctx.$implicit;
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", lc_r21.native, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.transVal(f_r18, lc_r21.key) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.transVal(f_r18, lc_r21.key))("placeholder", lc_r21.native);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275repeaterCreate(1, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_For_2_Template, 5, 4, "label", 103, _forTrack02);
    \u0275\u0275elementStart(3, "div", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.subLocales());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("autoTranslate"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 116);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_0_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchFieldKey(f_r18, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dataKey"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.key);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 117);
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dataKey"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icLock)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r18.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("keyLocked"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_2_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r24);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { placeholder: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.placeholder || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_0_Template, 4, 2, "label", 103)(1, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_1_Template, 8, 5);
    \u0275\u0275conditionalCreate(2, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Conditional_2_Template, 4, 2, "label", 103);
    \u0275\u0275elementStart(3, "label", 103)(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Template_hrm_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r22);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { helper: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(f_r18.draft ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasPlaceholder(f_r18.type) ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("helper"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.helper || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_4_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r26);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { requiredMsg: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("requiredMsg"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.requiredMsg || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 127);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_12_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event ?? "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", f_r18.defaultValue || null)("options", ctx_r1.customOpts(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 127);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_13_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event ?? "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", f_r18.defaultValue || null)("options", ctx_r1.customOpts(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 127);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_14_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event ?? "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", f_r18.defaultValue || null)("options", ctx_r1.customOpts(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 128);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_15_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: ($event || []).join(",") }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("multiple", true)("ngModel", ctx_r1.csvArr(f_r18.defaultValue))("options", ctx_r1.customOpts(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 128);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_16_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: ($event || []).join(",") }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("multiple", true)("ngModel", ctx_r1.csvArr(f_r18.defaultValue))("options", ctx_r1.customOpts(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_17_Template_hrm_switch_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r32);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event ? "true" : "" }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.defaultValue === "true");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_18_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.defaultValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 129);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_19_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.defaultValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_20_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.defaultValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 130);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_21_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.defaultValue))("min", 0)("precision", 0);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-date-picker", 131);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_22_Template_hrm_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r37);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: ctx_r1.dateToDmy($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.dmyToDate(f_r18.defaultValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-time-picker", 132);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_23_Template_hrm_time_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r38);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: ctx_r1.dateToHm($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.hmToDate(f_r18.defaultValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-textarea", 133);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_24_Template_hrm_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", f_r18.defaultValue || "")("minRows", 2)("maxRows", 4);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_25_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r40);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultValue: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", f_r18.defaultValue || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 126);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("optDup"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Template_hrm_input_ngModelChange_1_listener($event) {
      const $index_r44 = \u0275\u0275restoreView(_r43).$index;
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOption(f_r18, $index_r44, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Conditional_2_Template, 2, 1, "span", 114);
    \u0275\u0275elementStart(3, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Template_button_click_3_listener() {
      const $index_r44 = \u0275\u0275restoreView(_r43).$index;
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeOption(f_r18, $index_r44));
    });
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r45 = ctx.$implicit;
    const $index_r44 = ctx.$index;
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", o_r45);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDupOption(f_r18, $index_r44) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("delOption"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 13);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_For_3_Template, 5, 5, "div", 106, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(4, "button", 136);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r42);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addOption(f_r18));
    });
    \u0275\u0275element(5, "tabler-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("optionsList"));
    \u0275\u0275advance();
    \u0275\u0275repeater(f_r18.options || \u0275\u0275pureFunction0(4, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addOption"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 145);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_4_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r50);
      const pn_r49 = \u0275\u0275nextContext().$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r49, { val: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r49 = \u0275\u0275nextContext().$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.paramOf(f_r18, pn_r49).val || null)("options", ctx_r1.otherFieldOpts(f_r18))("placeholder", ctx_r1.tr("pickField"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 146);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_5_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const pn_r49 = \u0275\u0275nextContext().$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r49, { val: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r49 = \u0275\u0275nextContext().$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.paramOf(f_r18, pn_r49).val)("placeholder", ctx_r1.tr("dsConstPh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 141)(3, "hrm-segmented", 142);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Template_hrm_segmented_ngModelChange_3_listener($event) {
      const pn_r49 = \u0275\u0275restoreView(_r48).$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r49, { kind: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_4_Template, 1, 3, "hrm-select", 143)(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Conditional_5_Template, 1, 2, "hrm-input", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r49 = ctx.$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("dsParamOf", \u0275\u0275pureFunction1(5, _c2, pn_r49)));
    \u0275\u0275advance(2);
    \u0275\u0275property("block", true)("options", ctx_r1.paramKindOpts())("ngModel", ctx_r1.paramOf(f_r18, pn_r49).kind);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paramOf(f_r18, pn_r49).kind === "field" ? 4 : 5);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-select", 139);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_Template_hrm_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r47);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { valueCol: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-select", 139);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_Template_hrm_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r47);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { labelCol: $event }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(9, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_For_10_Template, 6, 7, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsValueCol"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.valueCol) || null)("options", ctx_r1.procColOpts(f_r18))("allowClear", false)("showSearch", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsLabelCol"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.labelCol) || null)("options", ctx_r1.procColOpts(f_r18))("allowClear", false)("showSearch", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.procParams(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r52 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r52);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275repeaterCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_5_For_4_Template, 2, 1, "hrm-tag", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pv_r53 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("dsPreview", \u0275\u0275pureFunction1(1, _c3, pv_r53.length)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(pv_r53);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 137);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Template_hrm_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r46);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickProc(f_r18, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_4_Template, 11, 10);
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Conditional_5_Template, 5, 3);
    \u0275\u0275elementStart(6, "div", 113);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsProc"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.proc) || null)("options", ctx_r1.sqlProcOpts())("placeholder", ctx_r1.tr("dsProcPh"));
    \u0275\u0275advance();
    \u0275\u0275conditional((f_r18.dsMeta == null ? null : f_r18.dsMeta.proc) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.dsPreview(f_r18)) ? 5 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsNote"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 148);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r55);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { url: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 103)(5, "span", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "hrm-segmented", 134);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template_hrm_segmented_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r55);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { method: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 103)(9, "span", 104);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "hrm-input", 149);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template_hrm_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r55);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { path: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 138)(13, "label", 103)(14, "span", 104);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "hrm-input", 150);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template_hrm_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r55);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { valueField: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 103)(18, "span", 104);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "hrm-input", 151);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template_hrm_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r55);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { labelField: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsUrl"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.url) || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsMethod"));
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.methodOpts())("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.method) || "GET");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsPath"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.path) || "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsValueField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.valueField) || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsLabelField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.labelField) || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 145);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_4_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r59);
      const pn_r58 = \u0275\u0275nextContext().$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r58, { val: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r58 = \u0275\u0275nextContext().$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.paramOf(f_r18, pn_r58).val || null)("options", ctx_r1.otherFieldOpts(f_r18))("placeholder", ctx_r1.tr("pickField"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 146);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_5_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r60);
      const pn_r58 = \u0275\u0275nextContext().$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r58, { val: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r58 = \u0275\u0275nextContext().$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.paramOf(f_r18, pn_r58).val)("placeholder", ctx_r1.tr("dsConstPh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 141)(3, "hrm-segmented", 142);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Template_hrm_segmented_ngModelChange_3_listener($event) {
      const pn_r58 = \u0275\u0275restoreView(_r57).$implicit;
      const f_r18 = \u0275\u0275nextContext(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchParam(f_r18, pn_r58, { kind: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_4_Template, 1, 3, "hrm-select", 143)(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Conditional_5_Template, 1, 2, "hrm-input", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pn_r58 = ctx.$implicit;
    const f_r18 = \u0275\u0275nextContext(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("dsParamOf", \u0275\u0275pureFunction1(5, _c2, pn_r58)));
    \u0275\u0275advance(2);
    \u0275\u0275property("block", true)("options", ctx_r1.paramKindOpts())("ngModel", ctx_r1.paramOf(f_r18, pn_r58).kind);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.paramOf(f_r18, pn_r58).kind === "field" ? 4 : 5);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 138)(3, "label", 103)(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "hrm-select", 139);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_Template_hrm_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r56);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { valueField: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label", 103)(8, "span", 104);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "hrm-select", 139);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_Template_hrm_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r56);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { labelField: $event }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(11, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_For_12_Template, 6, 7, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.apiUrlOf(f_r18));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsValueField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.valueField) || null)("options", ctx_r1.apiFieldOpts(f_r18))("allowClear", false)("showSearch", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsLabelField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.labelField) || null)("options", ctx_r1.apiFieldOpts(f_r18))("allowClear", false)("showSearch", false);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.apiParams(f_r18));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r61 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r61);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275repeaterCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_6_For_4_Template, 2, 1, "hrm-tag", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pv_r62 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("dsPreview", \u0275\u0275pureFunction1(1, _c3, pv_r62.length)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(pv_r62);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 145);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Template_hrm_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r54);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickApi(f_r18, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_4_Template, 21, 11)(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_5_Template, 13, 11);
    \u0275\u0275conditionalCreate(6, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Conditional_6_Template, 5, 3);
    \u0275\u0275elementStart(7, "div", 113);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsApiPick"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.apiName) || null)("options", ctx_r1.apiCatalogOpts())("placeholder", ctx_r1.tr("dsProcPh"));
    \u0275\u0275advance();
    \u0275\u0275conditional((f_r18.dsMeta == null ? null : f_r18.dsMeta.apiName) === "__custom" ? 4 : (f_r18.dsMeta == null ? null : f_r18.dsMeta.apiName) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.dsPreview(f_r18)) ? 6 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsNote"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r64 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r64);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275repeaterCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Conditional_4_For_4_Template, 2, 1, "hrm-tag", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pv_r65 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("dsPreview", \u0275\u0275pureFunction1(1, _c3, pv_r65.length)));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(pv_r65);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 137);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Template_hrm_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r63);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchDsMeta(f_r18, { enumName: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Conditional_4_Template, 5, 3);
    \u0275\u0275elementStart(5, "div", 113);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsEnumPick"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.dsMeta == null ? null : f_r18.dsMeta.enumName) || null)("options", ctx_r1.enumOpts())("placeholder", ctx_r1.tr("dsEnumPh"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.dsPreview(f_r18)) ? 4 : -1, tmp_11_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("dsEnumNote"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-segmented", 134);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Template_hrm_segmented_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r41);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { datasource: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_4_Template, 7, 5)(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_5_Template, 8, 7)(6, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_6_Template, 9, 7)(7, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Conditional_7_Template, 7, 6);
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("datasource"));
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.dsOpts())("ngModel", f_r18.datasource || "custom");
    \u0275\u0275advance();
    \u0275\u0275conditional((f_r18.datasource || "custom") === "custom" ? 4 : f_r18.datasource === "sql" ? 5 : f_r18.datasource === "api" ? 6 : 7);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 153);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_28_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r66);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { unitOptions: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "label", 103)(5, "span", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "hrm-select", 154);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_28_Template_hrm_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r66);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { defaultUnit: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("moneyUnits"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.unitOptions || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("moneyUnitDefault"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.defaultUnit || null)("options", ctx_r1.unitOptsOf(f_r18))("allowClear", false)("showSearch", false);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 155);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_29_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r67);
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { codePrefix: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("codePrefix"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.codePrefix || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("codeHint", \u0275\u0275pureFunction1(3, _c2, f_r18.codePrefix || "G-")));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Template_hrm_switch_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchRequired(f_r18, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_4_Template, 4, 2, "label", 103);
    \u0275\u0275elementStart(5, "div", 110)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Template_hrm_switch_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r25);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { readonly: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 103)(10, "span", 104);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_12_Template, 1, 2, "hrm-select", 118)(13, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_13_Template, 1, 2, "hrm-select", 118)(14, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_14_Template, 1, 2, "hrm-select", 118)(15, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_15_Template, 1, 3, "hrm-select", 119)(16, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_16_Template, 1, 3, "hrm-select", 119)(17, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_17_Template, 2, 1, "span")(18, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_18_Template, 1, 1, "hrm-input-number", 120)(19, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_19_Template, 1, 1, "hrm-input-number", 121)(20, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_20_Template, 1, 1, "hrm-input-number", 120)(21, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_21_Template, 1, 3, "hrm-input-number", 122)(22, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_22_Template, 1, 1, "hrm-date-picker", 123)(23, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_23_Template, 1, 1, "hrm-time-picker", 124)(24, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_24_Template, 1, 3, "hrm-textarea", 125)(25, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Case_25_Template, 1, 1, "hrm-input", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_26_Template, 1, 0, "hr", 126);
    \u0275\u0275conditionalCreate(27, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_27_Template, 8, 4);
    \u0275\u0275conditionalCreate(28, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_28_Template, 8, 7);
    \u0275\u0275conditionalCreate(29, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Conditional_29_Template, 6, 5);
  }
  if (rf & 2) {
    let tmp_11_0;
    const f_r18 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!f_r18.required);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.required ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("readonly"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!f_r18.readonly);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("defaultValue"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = f_r18.type) === "select" ? 12 : tmp_11_0 === "radio" ? 13 : tmp_11_0 === "user" ? 14 : tmp_11_0 === "multiselect" ? 15 : tmp_11_0 === "checkbox" ? 16 : tmp_11_0 === "toggle" ? 17 : tmp_11_0 === "number" ? 18 : tmp_11_0 === "percent" ? 19 : tmp_11_0 === "money" ? 20 : tmp_11_0 === "rating" ? 21 : tmp_11_0 === "date" ? 22 : tmp_11_0 === "time" ? 23 : tmp_11_0 === "textarea" ? 24 : 25);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r1.hasOptions(f_r18.type) || f_r18.type === "money" || f_r18.type === "autocode" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasOptions(f_r18.type) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "money" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "autocode" ? 29 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "hrm-tag", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Template_hrm_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r17);
      const f_r18 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { label: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_8_Template, 4, 7, "button", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_9_Template, 5, 1, "div", 109);
    \u0275\u0275conditionalCreate(10, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_10_Template, 7, 4);
    \u0275\u0275elementStart(11, "div", 110)(12, "span", 104);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Template_hrm_switch_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r17);
      const f_r18 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { hidden: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Conditional_15_Template, 30, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.tr("labelMain"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.defLocaleNative());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r18.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subLocales().length ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.transOpen() === f_r18.id ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type !== "heading" && f_r18.type !== "divider" ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("hiddenToggle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!f_r18.hidden);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type !== "heading" && f_r18.type !== "divider" ? 15 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-segmented", 156);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_5_Template_hrm_segmented_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r69);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { span: $event }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("widthCols"));
    \u0275\u0275advance();
    \u0275\u0275property("block", true)("options", ctx_r1.spanOpts())("ngModel", f_r18.span);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-input-number", 157);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_1_Template_hrm_input_number_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r71);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { minLen: $event ?? void 0 }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-input-number", 158);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_1_Template_hrm_input_number_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r71);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { maxLen: $event ?? void 0 }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "label", 103)(10, "span", 104);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "hrm-input", 159);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_1_Template_hrm_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r71);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { forbidden: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("minLen"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.minLen) ?? null)("min", 0)("precision", 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("maxLen"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.maxLen) ?? null)("min", 0)("precision", 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("forbidden"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.forbidden) || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("minGtMax"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-input-number", 160);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template_hrm_input_number_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r72);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { min: $event != null ? ctx_r1.String($event) : void 0 }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-input-number", 161);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template_hrm_input_number_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r72);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { max: $event != null ? ctx_r1.String($event) : void 0 }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Conditional_9_Template, 2, 1, "span", 114);
    \u0275\u0275elementStart(10, "label", 103)(11, "span", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "hrm-input", 162);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template_hrm_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r72);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { excluded: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 103)(15, "span", 104);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "hrm-segmented", 134);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template_hrm_segmented_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r72);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { numberFormat: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("minVal"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.constraints == null ? null : f_r18.constraints.min));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("maxVal"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(f_r18.constraints == null ? null : f_r18.constraints.max));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.minGtMax(f_r18) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("exclNum"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.excluded) || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("numFmt"));
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.numFmtOpts())("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.numberFormat) || "decimal");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-date-picker", 131);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_0_Template_hrm_date_picker_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r74);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { min: ctx_r1.dateToDmy($event) }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-date-picker", 131);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_0_Template_hrm_date_picker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r74);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { max: ctx_r1.dateToDmy($event) }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("fromDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.dmyToDate(f_r18.constraints == null ? null : f_r18.constraints.min));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("toDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.dmyToDate(f_r18.constraints == null ? null : f_r18.constraints.max));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 164);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_1_Template_hrm_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r75);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { weekdays: ($event || []).join(",") }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 110)(5, "span", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_1_Template_hrm_switch_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r75);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { noHolidays: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 103)(9, "span", 104);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "hrm-input", 165);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_1_Template_hrm_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r75);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { excluded: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("weekdaysAllow"));
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("ngModel", ctx_r1.csvArr(f_r18.constraints == null ? null : f_r18.constraints.weekdays))("options", ctx_r1.weekdayOpts())("placeholder", ctx_r1.tr("weekdaysAllowPh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("noHolidays"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !!(f_r18.constraints == null ? null : f_r18.constraints.noHolidays));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("exclDates"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.excluded) || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-time-picker", 132);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_2_Template_hrm_time_picker_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r76);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { min: ctx_r1.dateToHm($event) }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-time-picker", 132);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_2_Template_hrm_time_picker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r76);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { max: ctx_r1.dateToHm($event) }));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("minVal"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.hmToDate(f_r18.constraints == null ? null : f_r18.constraints.min));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("maxVal"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.hmToDate(f_r18.constraints == null ? null : f_r18.constraints.max));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 103)(1, "span", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-input", 166);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_7_Template_hrm_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r77);
      const f_r18 = \u0275\u0275nextContext(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { customFormat: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("customFmt"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.customFormat) || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_0_Template, 9, 4, "div", 138);
    \u0275\u0275conditionalCreate(1, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_1_Template, 12, 9);
    \u0275\u0275conditionalCreate(2, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_2_Template, 9, 4, "div", 138);
    \u0275\u0275elementStart(3, "div", 103)(4, "span", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "hrm-select", 163);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Template_hrm_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r73);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { dateFormat: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Conditional_7_Template, 4, 2, "label", 103);
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(f_r18.type === "date" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "date" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "time" ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("displayFmt"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.dateFormat) || (f_r18.type === "date" ? "dd/MM/yyyy" : "HH:mm"))("options", f_r18.type === "date" ? ctx_r1.dateFmtOpts() : ctx_r1.timeFmtOpts())("allowClear", false);
    \u0275\u0275advance();
    \u0275\u0275conditional((f_r18.constraints == null ? null : f_r18.constraints.dateFormat) === "custom" ? 7 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "label", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-input-number", 167);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_4_Template_hrm_input_number_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r78);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { maxFiles: $event ?? void 0 }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 103)(6, "span", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-input-number", 168);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_4_Template_hrm_input_number_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r78);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { maxSizeMb: $event ?? void 0 }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "label", 103)(10, "span", 104);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "hrm-input", 169);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_4_Template_hrm_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r78);
      const f_r18 = \u0275\u0275nextContext(4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchCon(f_r18, { fileTypes: $event }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("maxFiles"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.maxFiles) ?? null)("min", 1)("precision", 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("maxSize"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.maxSizeMb) ?? null)("min", 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("fileTypes"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (f_r18.constraints == null ? null : f_r18.constraints.fileTypes) || "");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275conditionalCreate(1, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_1_Template, 13, 10);
    \u0275\u0275conditionalCreate(2, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_2_Template, 18, 10);
    \u0275\u0275conditionalCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_3_Template, 8, 8);
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Conditional_4_Template, 13, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isTextType(f_r18.type) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isNumType(f_r18.type) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "date" || f_r18.type === "time" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type === "upload" ? 4 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "button", 100);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r70);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleSec("valid"));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "tabler-icon", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Conditional_5_Template, 5, 4, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("secValid"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r1.isSecOpen("valid"));
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSecOpen("valid") ? 5 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-textarea", 170);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_5_Template_hrm_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r82);
      const $index_r81 = \u0275\u0275nextContext().$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { formula: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 173)(4, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r82);
      const $index_r81 = \u0275\u0275nextContext().$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeChange(f_r18, $index_r81));
    });
    \u0275\u0275element(5, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", a_r83.formula || "")("minRows", 2)("maxRows", 4)("placeholder", ctx_r1.tr("evFxPh"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("fxHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.tr("delEvent"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 13);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 174)(1, "hrm-switch", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_3_Template_hrm_switch_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r85);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: $event ? "true" : "" }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", a_r83.toValue === "true");
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 115);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_4_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r86);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(a_r83.toValue))("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-date-picker", 131);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_5_Template_hrm_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: ctx_r1.dateToDmy($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", ctx_r1.dmyToDate(a_r83.toValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-time-picker", 132);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_6_Template_hrm_time_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r88);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: ctx_r1.dateToHm($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", ctx_r1.hmToDate(a_r83.toValue));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 145);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_7_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r89);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: $event ?? "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", a_r83.toValue || null)("options", ctx_r1.condFieldOptions(a_r83.set))("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 164);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_8_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r90);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: ($event || []).join(",") }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("multiple", true)("ngModel", ctx_r1.csvArr(a_r83.toValue))("options", ctx_r1.condFieldOptions(a_r83.set))("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 115);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_9_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r91);
      const $index_r81 = \u0275\u0275nextContext(2).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { toValue: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngModel", a_r83.toValue)("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 171);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 106);
    \u0275\u0275conditionalCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_3_Template, 2, 1, "span", 174)(4, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_4_Template, 1, 2, "hrm-input-number", 175)(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_5_Template, 1, 1, "hrm-date-picker", 123)(6, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_6_Template, 1, 1, "hrm-time-picker", 124)(7, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_7_Template, 1, 3, "hrm-select", 143)(8, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_8_Template, 1, 4, "hrm-select", 176)(9, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Case_9_Template, 1, 2, "hrm-input", 175);
    \u0275\u0275elementStart(10, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r84);
      const $index_r81 = \u0275\u0275nextContext().$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeChange(f_r18, $index_r81));
    });
    \u0275\u0275element(11, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const a_r83 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("toValue"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.evControl(a_r83.set)) === "toggle" ? 3 : tmp_17_0 === "number" ? 4 : tmp_17_0 === "date" ? 5 : tmp_17_0 === "time" ? 6 : tmp_17_0 === "options" ? 7 : tmp_17_0 === "multi" ? 8 : 9);
    \u0275\u0275advance(7);
    \u0275\u0275property("title", ctx_r1.tr("delEvent"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 13);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 171);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 145);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Template_hrm_select_ngModelChange_3_listener($event) {
      const $index_r81 = \u0275\u0275restoreView(_r80).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { set: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-segmented", 172);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Template_hrm_segmented_ngModelChange_4_listener($event) {
      const $index_r81 = \u0275\u0275restoreView(_r80).$index;
      const f_r18 = \u0275\u0275nextContext(3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchChange(f_r18, $index_r81, { mode: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_5_Template, 6, 8)(6, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Conditional_6_Template, 12, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r83 = ctx.$implicit;
    const f_r18 = \u0275\u0275nextContext(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("setField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", a_r83.set || null)("options", ctx_r1.otherFieldOpts(f_r18))("placeholder", ctx_r1.tr("pickField"));
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.evModeOpts())("ngModel", a_r83.mode || "value");
    \u0275\u0275advance();
    \u0275\u0275conditional((a_r83.mode || "value") === "formula" ? 5 : 6);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_For_4_Template, 7, 7, "div", 141, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(5, "button", 136);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r79);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addChange(f_r18));
    });
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 113);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "hr", 126);
    \u0275\u0275elementStart(11, "div", 135);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "hrm-textarea", 170);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_Template_hrm_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r79);
      const f_r18 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchField(f_r18.id, { onChangeScript: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 113);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("onChangeTitle"));
    \u0275\u0275advance();
    \u0275\u0275repeater(f_r18.onChange || \u0275\u0275pureFunction0(11, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addEvent"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("eventHint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("scriptTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", f_r18.onChangeScript || "")("minRows", 3)("maxRows", 8)("placeholder", ctx_r1.tr("scriptPh"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("scriptHint"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "button", 100);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r68);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSec("layout"));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "tabler-icon", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_5_Template, 5, 4, "div", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_6_Template, 6, 6, "div", 99);
    \u0275\u0275elementStart(7, "div", 99)(8, "button", 100);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r68);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSec("event"));
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "tabler-icon", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Conditional_12_Template, 16, 12, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("secLayout"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r1.isSecOpen("layout"));
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSecOpen("layout") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasConstraints(f_r18.type) ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("secEvent"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r1.isSecOpen("event"));
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSecOpen("event") ? 12 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 94);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 97);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.select(null));
    });
    \u0275\u0275element(8, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 98)(10, "div", 99)(11, "button", 100);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_67_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSec("props"));
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "tabler-icon", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SgFormBuilder_Conditional_0_Conditional_67_Conditional_15_Template, 16, 9, "div", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SgFormBuilder_Conditional_0_Conditional_67_Conditional_16_Template, 13, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r18 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.typeIcon(f_r18.type))("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(f_r18.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r18.key);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("deselect"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 16);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tr("secProps"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r1.isSecOpen("props"));
    \u0275\u0275property("icon", ctx_r1.icChev)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSecOpen("props") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r18.type !== "heading" && f_r18.type !== "divider" ? 16 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_68_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 182);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_68_For_20_Template_button_click_0_listener() {
      const t_r94 = \u0275\u0275restoreView(_r93).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPreset(t_r94.key));
    });
    \u0275\u0275elementStart(1, "span", 183);
    \u0275\u0275element(2, "span", 184)(3, "span", 185)(4, "span", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 187);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r94 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", ctx_r1.curPreset() === t_r94.key);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r94.dark ? "#1E293B" : t_r94.sheetBg || "var(--bg-surface)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r94.header === "solid" ? t_r94.primary || "var(--primary-base)" : "transparent");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", t_r94.primary || "var(--primary-base)");
    \u0275\u0275advance();
    \u0275\u0275classProp("thp-line--dark", t_r94.dark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fbLang() === "vi" ? t_r94.vi : t_r94.en);
  }
}
function SgFormBuilder_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 94);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 98)(6, "div", 177)(7, "label", 103)(8, "span", 104);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "hrm-input", 107);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_68_Template_hrm_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r92);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.renameForm($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label", 103)(12, "span", 104);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "hrm-textarea", 133);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_68_Template_hrm_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r92);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.patchSchema({ desc: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "hr", 126);
    \u0275\u0275elementStart(16, "div", 135);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 178);
    \u0275\u0275repeaterCreate(19, SgFormBuilder_Conditional_0_Conditional_68_For_20_Template, 7, 11, "button", 179, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "hr", 126);
    \u0275\u0275elementStart(22, "div", 135);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "hrm-select", 180);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_68_Template_hrm_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r92);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setLocales($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 113);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "hr", 126);
    \u0275\u0275elementStart(28, "div", 113);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "hr", 126);
    \u0275\u0275elementStart(31, "button", 181);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_68_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r92);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetSchema());
    });
    \u0275\u0275element(32, "tabler-icon", 5);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icForms)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("propsOf"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tr("formName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.schema().name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("formDesc"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.schema().desc || "")("minRows", 2)("maxRows", 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("themeSection"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.THEMES);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("projLocales"));
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("ngModel", ctx_r1.activeLocales())("options", ctx_r1.localeOpts)("allowClear", false)("showSearch", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("projLocalesHint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("formHint"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icReset)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("resetForm"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 198);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 198);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r97 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r97.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r97.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeNameOf(f_r97.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sqlTypeOf(f_r97.type));
  }
}
function SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 194);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "table", 195)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_For_15_Template, 9, 4, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 196)(17, "div", 197);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "pre", 198);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 199)(22, "hrm-button", 15);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_Template_hrm_button_click_22_listener() {
      \u0275\u0275restoreView(_r96);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.publishOpen.set(false));
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "hrm-button", 18);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_Template_hrm_button_click_24_listener() {
      \u0275\u0275restoreView(_r96);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.publishDrafts());
    });
    \u0275\u0275element(25, "tabler-icon", 5);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("publishDesc"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.tr("pubColLabel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("pubColKey"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("pubColType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("pubColSql"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.draftFields());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("pubSqlPreview"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.publishSql());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icDb)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("publishN", \u0275\u0275pureFunction1(11, _c3, ctx_r1.draftFields().length)));
  }
}
function SgFormBuilder_Conditional_0_Conditional_69_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 193);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("publishEmpty"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r95);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.publishOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 189)(2, "div", 190)(3, "span", 191);
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_69_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r95);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.publishOpen.set(false));
    });
    \u0275\u0275element(7, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 192);
    \u0275\u0275conditionalCreate(9, SgFormBuilder_Conditional_0_Conditional_69_Conditional_9_Template, 27, 13)(10, SgFormBuilder_Conditional_0_Conditional_69_Conditional_10_Template, 2, 1, "p", 193);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("publishTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icDb)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("publishTitle"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("close"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.draftFields().length ? 9 : 10);
  }
}
function SgFormBuilder_Conditional_0_Conditional_70_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r99 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r99);
  }
}
function SgFormBuilder_Conditional_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archAsk.set(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 200)(2, "div", 190)(3, "span", 191);
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_70_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archAsk.set(null));
    });
    \u0275\u0275element(7, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 192)(9, "p", 194);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 135);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 147);
    \u0275\u0275repeaterCreate(14, SgFormBuilder_Conditional_0_Conditional_70_For_15_Template, 2, 1, "hrm-tag", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 199)(17, "hrm-button", 15);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_70_Template_hrm_button_click_17_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archAsk.set(null));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "hrm-button", 18);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_70_Template_hrm_button_click_19_listener() {
      \u0275\u0275restoreView(_r98);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveField());
    });
    \u0275\u0275element(20, "tabler-icon", 5);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ask_r100 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("archTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icLock)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("archTitle"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("close"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("archDesc", \u0275\u0275pureFunction1(13, _c4, ask_r100.f.label)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("usedAt"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.usedAt(ask_r100.f));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icEyeOff)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("archHide"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 217);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_1_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r105);
      const r_r103 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRule(r_r103.id, { match: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r103 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", r_r103.match || "all")("options", ctx_r1.matchOpts())("allowClear", false)("showSearch", false);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 220);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_1_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r108);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(2).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { field: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.rhsField(c_r109) || null)("options", ctx_r1.compatFieldOpts(c_r109.field))("placeholder", ctx_r1.tr("cmpFieldPh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 226);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_0_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r110);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(3).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.rhsValue(c_r109) || null)("options", ctx_r1.weekdayOpts())("allowClear", false)("showSearch", false);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 227);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_1_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r111);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(3).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: $event != null ? ctx_r1.String($event) : "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.numOrNull(ctx_r1.rhsValue(c_r109)))("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-date-picker", 228);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_2_Template_hrm_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r112);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(3).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: ctx_r1.dateToDmy($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.dmyToDate(ctx_r1.rhsValue(c_r109)));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-time-picker", 229);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_3_Template_hrm_time_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r113);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(3).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: ctx_r1.dateToHm($event) }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.hmToDate(ctx_r1.rhsValue(c_r109)));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 230);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_4_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r114);
      const ctx_r114 = \u0275\u0275nextContext(3);
      const c_r109 = ctx_r114.$implicit;
      const \u0275$index_1251_r106 = ctx_r114.$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: c_r109.op === "inList" ? ($event || []).join(",") : $event ?? "" }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("multiple", c_r109.op === "inList")("ngModel", c_r109.op === "inList" ? ctx_r1.csvArr(ctx_r1.rhsValue(c_r109)) : ctx_r1.rhsValue(c_r109) || null)("options", ctx_r1.condFieldOptions(c_r109.field))("placeholder", ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 227);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_5_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r116);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext(3).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRhs(r_r103.id, \u0275$index_1251_r106, { value: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.rhsValue(c_r109))("placeholder", c_r109.op === "inList" ? ctx_r1.tr("inListPh") : ctx_r1.tr("valuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_0_Template, 1, 4, "hrm-select", 221)(1, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_1_Template, 1, 2, "hrm-input-number", 222)(2, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_2_Template, 1, 1, "hrm-date-picker", 223)(3, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_3_Template, 1, 1, "hrm-time-picker", 224)(4, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_4_Template, 1, 4, "hrm-select", 225)(5, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Case_5_Template, 1, 2, "hrm-input", 222);
  }
  if (rf & 2) {
    let tmp_26_0;
    const c_r109 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_26_0 = ctx_r1.rhsControl(c_r109)) === "weekday" ? 0 : tmp_26_0 === "number" ? 1 : tmp_26_0 === "date" ? 2 : tmp_26_0 === "time" ? 3 : tmp_26_0 === "options" ? 4 : 5);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-segmented", 218);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Template_hrm_segmented_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r107);
      const \u0275$index_1251_r106 = \u0275\u0275nextContext().$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setRhsKind(r_r103.id, \u0275$index_1251_r106, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_1_Template, 1, 3, "hrm-select", 219)(2, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Conditional_2_Template, 6, 1);
  }
  if (rf & 2) {
    const c_r109 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("options", ctx_r1.rhsKindOpts())("ngModel", ctx_r1.rhsKind(c_r109));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rhsKind(c_r109) === "field" ? 1 : 2);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211);
    \u0275\u0275conditionalCreate(1, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_1_Template, 1, 4, "hrm-select", 214);
    \u0275\u0275elementStart(2, "hrm-select", 215);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Template_hrm_select_ngModelChange_2_listener($event) {
      const \u0275$index_1251_r106 = \u0275\u0275restoreView(_r104).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchCondField(r_r103.id, \u0275$index_1251_r106, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-select", 216);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Template_hrm_select_ngModelChange_3_listener($event) {
      const \u0275$index_1251_r106 = \u0275\u0275restoreView(_r104).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleCond(r_r103.id, \u0275$index_1251_r106, { op: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Conditional_4_Template, 3, 3);
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Template_button_click_5_listener() {
      const \u0275$index_1251_r106 = \u0275\u0275restoreView(_r104).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeRuleCond(r_r103.id, \u0275$index_1251_r106));
    });
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r109 = ctx.$implicit;
    const \u0275$index_1251_r106 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_1251_r106 > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", c_r109.field || null)("options", ctx_r1.allFieldOpts())("placeholder", ctx_r1.tr("pickField"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", c_r109.op)("options", ctx_r1.opOptsFor(c_r109.field))("allowClear", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.needsRhs(c_r109.op) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("delCond"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 13);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 227);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_3_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r119);
      const \u0275$index_1302_r118 = \u0275\u0275nextContext().$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { value: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r120 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", a_r120.value || "")("placeholder", ctx_r1.tr("setValuePh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 220);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_4_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r121);
      const \u0275$index_1302_r118 = \u0275\u0275nextContext().$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { fromField: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r120 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", a_r120.fromField || null)("options", ctx_r1.allFieldOpts())("placeholder", ctx_r1.tr("copyFromPh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 227);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_5_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r122);
      const \u0275$index_1302_r118 = \u0275\u0275nextContext().$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { message: $event }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r120 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", a_r120.message || "")("placeholder", ctx_r1.tr("warnMsgPh"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-textarea", 232);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_8_Template_hrm_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r123);
      const \u0275$index_1302_r118 = \u0275\u0275nextContext().$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { formula: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "span", 233);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r120 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", a_r120.formula || "")("minRows", 2)("maxRows", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("fxHint"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 213)(1, "hrm-select", 216);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Template_hrm_select_ngModelChange_1_listener($event) {
      const \u0275$index_1302_r118 = \u0275\u0275restoreView(_r117).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { type: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "hrm-select", 231);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Template_hrm_select_ngModelChange_2_listener($event) {
      const \u0275$index_1302_r118 = \u0275\u0275restoreView(_r117).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRuleAction(r_r103.id, \u0275$index_1302_r118, { targets: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_3_Template, 1, 2, "hrm-input", 222);
    \u0275\u0275conditionalCreate(4, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_4_Template, 1, 3, "hrm-select", 219);
    \u0275\u0275conditionalCreate(5, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_5_Template, 1, 2, "hrm-input", 222);
    \u0275\u0275elementStart(6, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Template_button_click_6_listener() {
      const \u0275$index_1302_r118 = \u0275\u0275restoreView(_r117).$index;
      const r_r103 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeRuleAction(r_r103.id, \u0275$index_1302_r118));
    });
    \u0275\u0275element(7, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Conditional_8_Template, 3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r120 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", a_r120.type)("options", ctx_r1.actionOpts())("allowClear", false);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true)("ngModel", a_r120.targets)("options", ctx_r1.allFieldOpts())("placeholder", ctx_r1.tr("targetsPh"));
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r120.type === "setValue" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r120.type === "copyValue" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r120.type === "warn" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("delAction"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r120.type === "compute" ? 8 : -1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 203)(1, "div", 205)(2, "span", 206);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 207);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_71_For_10_Template_input_ngModelChange_4_listener($event) {
      const r_r103 = \u0275\u0275restoreView(_r102).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.patchRule(r_r103.id, { name: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_For_10_Template_button_click_5_listener() {
      const r_r103 = \u0275\u0275restoreView(_r102).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeRule(r_r103.id));
    });
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 208)(8, "span", 209);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 210);
    \u0275\u0275repeaterCreate(11, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_12_Template, 7, 11, "div", 211, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(13, "button", 136);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_For_10_Template_button_click_13_listener() {
      const r_r103 = \u0275\u0275restoreView(_r102).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addRuleCond(r_r103.id));
    });
    \u0275\u0275element(14, "tabler-icon", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 208)(17, "span", 212);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 210);
    \u0275\u0275repeaterCreate(20, SgFormBuilder_Conditional_0_Conditional_71_For_10_For_21_Template, 9, 14, "div", 213, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(22, "button", 136);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_For_10_Template_button_click_22_listener() {
      const r_r103 = \u0275\u0275restoreView(_r102).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addRuleAction(r_r103.id));
    });
    \u0275\u0275element(23, "tabler-icon", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r103 = ctx.$implicit;
    const \u0275$index_1230_r124 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_1230_r124 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", r_r103.name)("placeholder", ctx_r1.tr("ruleNamePh"));
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("delRule"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("ifKw"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r103.conditions);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addCond"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tr("doKw"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r103.actions);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addAction"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tr("noRules"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rulesOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 201)(2, "div", 190)(3, "span", 191);
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 97);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rulesOpen.set(false));
    });
    \u0275\u0275element(7, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 202);
    \u0275\u0275repeaterCreate(9, SgFormBuilder_Conditional_0_Conditional_71_For_10_Template, 25, 14, "div", 203, _forTrack1);
    \u0275\u0275conditionalCreate(11, SgFormBuilder_Conditional_0_Conditional_71_Conditional_11_Template, 2, 1, "div", 204);
    \u0275\u0275elementStart(12, "hrm-button", 15);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_71_Template_hrm_button_click_12_listener() {
      \u0275\u0275restoreView(_r101);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addRule());
    });
    \u0275\u0275element(13, "tabler-icon", 5);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("rulesTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icBolt)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.tr("rulesTitle"), " \u2014 ", ctx_r1.schema().name);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("closeRules"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.schema().rules);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.schema().rules.length ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addRule"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 234);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r125);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiOpenPanel());
    });
    \u0275\u0275element(1, "sg-vnai-mascot", 235);
    \u0275\u0275elementStart(2, "span", 236);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.tr("aiBtn"));
    \u0275\u0275attribute("aria-label", ctx_r1.tr("aiBtn"));
    \u0275\u0275advance();
    \u0275\u0275property("size", 56)("state", ctx_r1.aiState());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tr("aiBtn"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 257);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.aiDockMenu.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 258)(2, "button", 259);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDock("right"));
    });
    \u0275\u0275element(3, "tabler-icon", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 259);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDock("left"));
    });
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 259);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r127);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDock("float"));
    });
    \u0275\u0275element(9, "tabler-icon", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r1.aiDock() === "right");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icDockR)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("aiDockRight"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.aiDock() === "left");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icDockL)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("aiDockLeft"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.aiDock() === "float");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icDockF)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("aiDockFloat"), " ");
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_For_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 260);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r128 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r128.text);
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r128 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r128.text);
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgFormBuilder_Conditional_0_Conditional_73_For_19_Conditional_0_Template, 2, 1, "div", 260)(1, SgFormBuilder_Conditional_0_Conditional_73_For_19_Conditional_1_Template, 2, 1, "div", 261);
  }
  if (rf & 2) {
    const m_r128 = ctx.$implicit;
    \u0275\u0275conditional(m_r128.role === "user" ? 0 : 1);
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 263);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Conditional_20_For_2_Template_button_click_0_listener() {
      const sg_r130 = \u0275\u0275restoreView(_r129).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.aiUse(sg_r130));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sg_r130 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sg_r130);
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248);
    \u0275\u0275repeaterCreate(1, SgFormBuilder_Conditional_0_Conditional_73_Conditional_20_For_2_Template, 2, 1, "button", 262, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.aiSuggestions());
  }
}
function SgFormBuilder_Conditional_0_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "sg-vnai-mascot", 239);
    \u0275\u0275elementStart(3, "div", 240)(4, "div", 241);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 242);
    \u0275\u0275text(7, "AI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 243);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 244);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.aiDockMenu.set(!ctx_r1.aiDockMenu());
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(11, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 245);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiOpen.set(false));
    });
    \u0275\u0275element(13, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, SgFormBuilder_Conditional_0_Conditional_73_Conditional_14_Template, 11, 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 246)(16, "div", 247, 0);
    \u0275\u0275repeaterCreate(18, SgFormBuilder_Conditional_0_Conditional_73_For_19_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(20, SgFormBuilder_Conditional_0_Conditional_73_Conditional_20_Template, 3, 0, "div", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 249)(22, "div", 250)(23, "hrm-textarea", 251);
    \u0275\u0275twoWayListener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_73_Template_hrm_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.aiPromptModel, $event) || (ctx_r1.aiPromptModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SgFormBuilder_Conditional_0_Conditional_73_Template_hrm_textarea_keydown_enter_23_listener($event) {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.aiSend());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 252)(25, "button", 253);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiSoonMsg());
    });
    \u0275\u0275element(26, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 254);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiSoonMsg());
    });
    \u0275\u0275element(28, "tabler-icon", 5);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "span", 255);
    \u0275\u0275elementStart(31, "button", 256);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_73_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r126);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.aiSend());
    });
    \u0275\u0275element(32, "tabler-icon", 5);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ai-panel--right", ctx_r1.aiDock() === "right")("ai-panel--left", ctx_r1.aiDock() === "left");
    \u0275\u0275attribute("aria-label", ctx_r1.tr("aiBtn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 82)("state", ctx_r1.aiState());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.tr("aiBtn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.tr("aiSpecialist"));
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.tr("aiDockTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.aiDock() === "left" ? ctx_r1.icDockL : ctx_r1.aiDock() === "right" ? ctx_r1.icDockR : ctx_r1.icDockF)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("closeRules"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiDockMenu() ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.aiMsgs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aiMsgs().length <= 1 ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aiPromptModel);
    \u0275\u0275property("placeholder", ctx_r1.tr("aiAsk"))("minRows", 2)("maxRows", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.tr("aiAttach"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icPencil)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("aiDraw"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icMic)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("aiTalk"));
  }
}
function SgFormBuilder_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_74_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 264)(2, "div", 190)(3, "span", 191);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "hrm-segmented", 265);
    \u0275\u0275twoWayListener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_74_Template_hrm_segmented_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pvLangModel, $event) || (ctx_r1.pvLangModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "hrm-segmented", 265);
    \u0275\u0275twoWayListener("ngModelChange", function SgFormBuilder_Conditional_0_Conditional_74_Template_hrm_segmented_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pvModeModel, $event) || (ctx_r1.pvModeModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 97);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Conditional_74_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewOpen.set(false));
    });
    \u0275\u0275element(8, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 266)(10, "sg-form-renderer", 267);
    \u0275\u0275twoWayListener("valueChange", function SgFormBuilder_Conditional_0_Conditional_74_Template_sg_form_renderer_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r131);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.pvValueModel, $event) || (ctx_r1.pvValueModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("pvTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.tr("pvTitle"), " \u2014 ", ctx_r1.schema().name);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.pvLangs());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pvLangModel);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.pvModes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pvModeModel);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.tr("closePv"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("schema", ctx_r1.schema())("mode", ctx_r1.pvMode())("lang", ctx_r1.pvLang());
    \u0275\u0275twoWayProperty("value", ctx_r1.pvValueModel);
  }
}
function SgFormBuilder_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "button", 4);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(4, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275element(6, "tabler-icon", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "span", 7);
    \u0275\u0275elementStart(9, "input", 8);
    \u0275\u0275listener("ngModelChange", function SgFormBuilder_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.renameForm($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10)(12, "button", 11);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.undo());
    });
    \u0275\u0275element(13, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.redo());
    });
    \u0275\u0275element(15, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "span", 7);
    \u0275\u0275elementStart(17, "span", 12)(18, "button", 13);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.device.set("desktop"));
    });
    \u0275\u0275element(19, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 13);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.device.set("tablet"));
    });
    \u0275\u0275element(21, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 13);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.device.set("mobile"));
    });
    \u0275\u0275element(23, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 12)(25, "button", 13);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.canvasDark.set(false));
    });
    \u0275\u0275element(26, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.canvasDark.set(true));
    });
    \u0275\u0275element(28, "tabler-icon", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 14)(30, "hrm-button", 15);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_hrm_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rulesOpen.set(true));
    });
    \u0275\u0275element(31, "tabler-icon", 5);
    \u0275\u0275text(32);
    \u0275\u0275conditionalCreate(33, SgFormBuilder_Conditional_0_Conditional_33_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "hrm-button", 15);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_hrm_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPreview());
    });
    \u0275\u0275element(35, "tabler-icon", 5);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "hrm-button", 17);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_hrm_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275element(38, "tabler-icon", 5);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "hrm-button", 18);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_hrm_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publishOpen.set(true));
    });
    \u0275\u0275element(41, "tabler-icon", 5);
    \u0275\u0275text(42);
    \u0275\u0275conditionalCreate(43, SgFormBuilder_Conditional_0_Conditional_43_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 20)(45, "aside", 21)(46, "div", 22)(47, "hrm-input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SgFormBuilder_Conditional_0_Template_hrm_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.palQueryModel, $event) || (ctx_r1.palQueryModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 24);
    \u0275\u0275repeaterCreate(49, SgFormBuilder_Conditional_0_For_50_Template, 4, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "main", 25);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_main_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select(null));
    });
    \u0275\u0275elementStart(52, "div", 26);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_div_click_52_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(53, "div", 27);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_div_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select("__form"));
    });
    \u0275\u0275elementStart(54, "div", 28);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, SgFormBuilder_Conditional_0_Conditional_56_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(57, SgFormBuilder_Conditional_0_For_58_Template, 11, 9, "section", 30, _forTrack1);
    \u0275\u0275elementStart(59, "button", 31);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSection(ctx_r1.schema().sections.length - 1));
    });
    \u0275\u0275element(60, "tabler-icon", 5);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "button", 32);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.leftOpen.set(!ctx_r1.leftOpen());
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(63, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 33);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_button_click_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.rightOpen.set(!ctx_r1.rightOpen());
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(65, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "aside", 34);
    \u0275\u0275listener("click", function SgFormBuilder_Conditional_0_Template_aside_click_66_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(67, SgFormBuilder_Conditional_0_Conditional_67_Template, 17, 14)(68, SgFormBuilder_Conditional_0_Conditional_68_Template, 34, 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(69, SgFormBuilder_Conditional_0_Conditional_69_Template, 11, 8);
    \u0275\u0275conditionalCreate(70, SgFormBuilder_Conditional_0_Conditional_70_Template, 22, 15);
    \u0275\u0275conditionalCreate(71, SgFormBuilder_Conditional_0_Conditional_71_Template, 15, 12);
    \u0275\u0275conditionalCreate(72, SgFormBuilder_Conditional_0_Conditional_72_Template, 4, 5, "button", 35);
    \u0275\u0275conditionalCreate(73, SgFormBuilder_Conditional_0_Conditional_73_Template, 34, 30, "div", 36);
    \u0275\u0275conditionalCreate(74, SgFormBuilder_Conditional_0_Conditional_74_Template, 11, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_83_0;
    let tmp_85_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.tr("closeBuilder"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icForms)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("brand"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.schema().name)("placeholder", ctx_r1.tr("formNamePh"));
    \u0275\u0275attribute("aria-label", ctx_r1.tr("formNamePh"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.undoCount())("title", ctx_r1.tr("undo"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icUndo)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.redoCount())("title", ctx_r1.tr("redo"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icRedo)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", ctx_r1.device() === "desktop");
    \u0275\u0275property("title", ctx_r1.tr("desktop"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icDesk)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.device() === "tablet");
    \u0275\u0275property("title", ctx_r1.tr("tablet"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTab)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.device() === "mobile");
    \u0275\u0275property("title", ctx_r1.tr("mobile"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icMob)("size", 17);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", !ctx_r1.canvasDark());
    \u0275\u0275property("title", ctx_r1.tr("lightMode"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icSun)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.canvasDark());
    \u0275\u0275property("title", ctx_r1.tr("darkMode"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icMoon)("size", 17);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icBolt)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("rules"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schema().rules.length ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icEye)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("preview"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icSave)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("save"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icDb)("size", 17);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("publish"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.draftFields().length ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("grid-template-columns", ctx_r1.mainCols());
    \u0275\u0275advance();
    \u0275\u0275classProp("is-closed", !ctx_r1.leftOpen());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.palQueryModel);
    \u0275\u0275property("placeholder", ctx_r1.tr("searchPh"))("prefixIcon", ctx_r1.icSearch);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", ctx_r1.PALETTE)("cdkDropListEnterPredicate", ctx_r1.denyDrop);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groups());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dark", ctx_r1.canvasDark());
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-width", ctx_r1.sheetW(), "px")("--primary-base", ctx_r1.cvTheme().primary || null)("--radius-md", ctx_r1.thRadiusMd())("--radius-lg", ctx_r1.thRadiusLg())("background", ctx_r1.cvTheme().dark ? "var(--bg-surface)" : ctx_r1.cvTheme().sheetBg || null);
    \u0275\u0275classProp("dark", ctx_r1.cvTheme().dark);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.cvTheme().header === "solid" ? ctx_r1.cvTheme().primary || "var(--primary-base)" : null);
    \u0275\u0275classProp("is-on", ctx_r1.selectedId() === "__form")("is-solid", ctx_r1.cvTheme().header === "solid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.schema().name || ctx_r1.tr("untitled"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schema().desc ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.schema().sections);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tr("addSection"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.leftOpen() ? ctx_r1.tr("collapseLeft") : ctx_r1.tr("expandLeft"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.leftOpen() ? ctx_r1.icChevL : ctx_r1.icChevR)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.rightOpen() ? ctx_r1.tr("collapseRight") : ctx_r1.tr("expandRight"));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.rightOpen() ? ctx_r1.icChevR : ctx_r1.icChevL)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-closed", !ctx_r1.rightOpen());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_83_0 = ctx_r1.selectedField()) ? 67 : 68, tmp_83_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.publishOpen() ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_85_0 = ctx_r1.archAsk()) ? 70 : -1, tmp_85_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rulesOpen() ? 71 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.aiOpen() ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiOpen() ? 73 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewOpen() ? 74 : -1);
  }
}
var SgFormBuilder = class _SgFormBuilder {
  constructor() {
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saved = output();
    this.translate = inject(TranslateService);
    this.langSig = signal(this.translate.currentLang || "vi", ...ngDevMode ? [{ debugName: "langSig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fbLang = computed(() => {
      const l = this.langSig();
      return l === "en" ? "en" : l === "cn" ? "cn" : "vi";
    }, ...ngDevMode ? [{ debugName: "fbLang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icX = X;
    this.icEye = Eye;
    this.icSave = DeviceFloppy;
    this.icSearch = Search;
    this.icGrip = GripVertical;
    this.icCopy = Copy;
    this.icTrash = Trash;
    this.icPlus = Plus;
    this.icForms = Forms;
    this.icReset = Restore;
    this.icChev = ChevronDown;
    this.icBolt = Bolt;
    this.icLock = Lock;
    this.icDb = Database;
    this.icEyeOff = EyeOff;
    this.icDesk = DeviceDesktop;
    this.icTab = DeviceTablet;
    this.icMob = DeviceMobile;
    this.icUndo = ArrowBackUp;
    this.icRedo = ArrowForwardUp;
    this.icSun = Sun;
    this.icMoon = Moon;
    this.icAi = Sparkles;
    this.icMic = Microphone;
    this.icPencil = Pencil;
    this.icLang = Language;
    this.icDockR = LayoutSidebarRight;
    this.icDockL = LayoutSidebar;
    this.icDockF = PictureInPicture;
    this.icChevL = ChevronsLeft;
    this.icChevR = ChevronsRight;
    this.icStar = Star;
    this.STARS = [1, 2, 3, 4, 5];
    this.PALETTE = FB_PALETTE;
    this.denyDrop = () => false;
    this.schema = signal(fbLoadSchema(), ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    ));
    this.undoStack = [];
    this.redoStack = [];
    this.undoCount = signal(0, ...ngDevMode ? [{ debugName: "undoCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.redoCount = signal(0, ...ngDevMode ? [{ debugName: "redoCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedId = signal(null, ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedField = computed(() => {
      const id = this.selectedId();
      if (!id || id === "__form")
        return null;
      for (const s of this.schema().sections) {
        const f2 = s.fields.find((x) => x.id === id);
        if (f2)
          return f2;
      }
      return null;
    }, ...ngDevMode ? [{ debugName: "selectedField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.device = signal("desktop", ...ngDevMode ? [{ debugName: "device" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sheetW = computed(() => this.device() === "mobile" ? 400 : this.device() === "tablet" ? 600 : 760, ...ngDevMode ? [{ debugName: "sheetW" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canvasDark = signal(false, ...ngDevMode ? [{ debugName: "canvasDark" }] : (
      /* istanbul ignore next */
      []
    ));
    this.leftOpen = signal(true, ...ngDevMode ? [{ debugName: "leftOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rightOpen = signal(true, ...ngDevMode ? [{ debugName: "rightOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mainCols = computed(() => `${this.leftOpen() ? "264px" : "0px"} 1fr ${this.rightOpen() ? "356px" : "0px"}`, ...ngDevMode ? [{ debugName: "mainCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.THEMES = FB_THEMES;
    this.cvTheme = computed(() => fbResolveTheme(this.schema().theme), ...ngDevMode ? [{ debugName: "cvTheme" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiOpen = signal(false, ...ngDevMode ? [{ debugName: "aiOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiImgOk = signal(true, ...ngDevMode ? [{ debugName: "aiImgOk" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiDock = signal("float", ...ngDevMode ? [{ debugName: "aiDock" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiDockMenu = signal(false, ...ngDevMode ? [{ debugName: "aiDockMenu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiPrompt = signal("", ...ngDevMode ? [{ debugName: "aiPrompt" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiMsgs = signal([], ...ngDevMode ? [{ debugName: "aiMsgs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiLogEl = viewChild("aiLog", ...ngDevMode ? [{ debugName: "aiLogEl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiSuggestions = computed(() => FB_AI_SUGGESTIONS.map((x) => this.fbLang() === "vi" ? x.vi : x.en), ...ngDevMode ? [{ debugName: "aiSuggestions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiState = signal("idle", ...ngDevMode ? [{ debugName: "aiState" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiStateTimer = null;
    this.activeLocales = computed(() => {
      const ls = this.schema().locales;
      return ls && ls.length ? ls : [...FB_DEFAULT_LOCALES];
    }, ...ngDevMode ? [{ debugName: "activeLocales" }] : (
      /* istanbul ignore next */
      []
    ));
    this.defLocale = computed(() => this.activeLocales()[0], ...ngDevMode ? [{ debugName: "defLocale" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subLocales = computed(() => this.activeLocales().slice(1).map((k) => FB_LOCALE_REGISTRY.find((l) => l.key === k) ?? { key: k, native: k }), ...ngDevMode ? [{ debugName: "subLocales" }] : (
      /* istanbul ignore next */
      []
    ));
    this.localeOpts = FB_LOCALE_REGISTRY.map((l) => ({ value: l.key, label: l.native }));
    this.transOpen = signal(null, ...ngDevMode ? [{ debugName: "transOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.palQuery = signal("", ...ngDevMode ? [{ debugName: "palQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groups = computed(() => {
      const q = this.palQuery().trim().toLowerCase();
      const en = this.fbLang() !== "vi";
      return FB_GROUPS.map((g) => ({
        key: g.key,
        label: en ? g.labelEn : g.label,
        items: FB_PALETTE.filter((p) => p.group === g.key).map((p) => __spreadProps(__spreadValues({}, p), { name: en ? p.labelEn : p.label })).filter((p) => !q || p.name.toLowerCase().includes(q) || p.label.toLowerCase().includes(q) || p.type.includes(q))
      })).filter((g) => g.items.length);
    }, ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openSecs = signal(/* @__PURE__ */ new Set(["props"]), ...ngDevMode ? [{ debugName: "openSecs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.spanOpts = computed(() => [
      { label: "1/3", value: "third" },
      { label: "1/2", value: "half" },
      { label: "2/3", value: "twothirds" },
      { label: this.tr("fullRow"), value: "full" }
    ], ...ngDevMode ? [{ debugName: "spanOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.numFmtOpts = computed(() => [
      { label: this.tr("intOnly"), value: "int" },
      { label: this.tr("decimalFmt"), value: "decimal" }
    ], ...ngDevMode ? [{ debugName: "numFmtOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dateFmtOpts = computed(() => this.fbLang() === "vi" ? [{ value: "dd/MM/yyyy", label: "Ng\xE0y/Th\xE1ng/N\u0103m" }, { value: "MM/yyyy", label: "Th\xE1ng/N\u0103m" }, { value: "yyyy", label: "N\u0103m" }, { value: "custom", label: "T\xF9y ch\u1EC9nh" }] : [{ value: "dd/MM/yyyy", label: "Day/Month/Year" }, { value: "MM/yyyy", label: "Month/Year" }, { value: "yyyy", label: "Year" }, { value: "custom", label: "Custom" }], ...ngDevMode ? [{ debugName: "dateFmtOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.timeFmtOpts = computed(() => this.fbLang() === "vi" ? [{ value: "HH:mm:ss", label: "Gi\u1EDD:Ph\xFAt:Gi\xE2y" }, { value: "HH:mm", label: "Gi\u1EDD:Ph\xFAt" }, { value: "mm:ss", label: "Ph\xFAt:Gi\xE2y" }] : [{ value: "HH:mm:ss", label: "Hour:Min:Sec" }, { value: "HH:mm", label: "Hour:Min" }, { value: "mm:ss", label: "Min:Sec" }], ...ngDevMode ? [{ debugName: "timeFmtOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dsOpts = computed(() => [
      { label: this.tr("dsCustom"), value: "custom" },
      { label: this.tr("dsSql"), value: "sql" },
      { label: this.tr("dsApi"), value: "api" },
      { label: this.tr("dsEnum"), value: "enum" }
    ], ...ngDevMode ? [{ debugName: "dsOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this._optCache = /* @__PURE__ */ new Map();
    this.sqlProcOpts = computed(() => FB_SQL_PROCS.map((p) => ({ value: p, label: p })), ...ngDevMode ? [{ debugName: "sqlProcOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.apiCatalogOpts = computed(() => [
      ...Object.keys(FB_API_CATALOG).map((n) => ({ value: n, label: n })),
      { value: "__custom", label: this.fbLang() === "vi" ? "\u2014 URL tu\u1EF3 ch\u1EC9nh\u2026 \u2014" : "\u2014 Custom URL\u2026 \u2014" }
    ], ...ngDevMode ? [{ debugName: "apiCatalogOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.paramKindOpts = computed(() => this.fbLang() === "vi" ? [{ value: "field", label: "Tr\u01B0\u1EDDng tr\xEAn form" }, { value: "const", label: "Gi\xE1 tr\u1ECB c\u1ED1 \u0111\u1ECBnh" }] : [{ value: "field", label: "Form field" }, { value: "const", label: "Fixed value" }], ...ngDevMode ? [{ debugName: "paramKindOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this._pmCache = /* @__PURE__ */ new Map();
    this.enumOpts = computed(() => Object.keys(FB_ENUMS).map((e) => ({ value: e, label: e })), ...ngDevMode ? [{ debugName: "enumOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.methodOpts = computed(() => [{ value: "GET", label: "GET" }, { value: "POST", label: "POST" }], ...ngDevMode ? [{ debugName: "methodOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this._csvCache = /* @__PURE__ */ new Map();
    this._dateCache = /* @__PURE__ */ new Map();
    this.weekdayOpts = computed(() => this.fbLang() === "vi" ? [2, 3, 4, 5, 6, 7].map((n) => ({ value: String(n), label: `Th\u1EE9 ${n}` })).concat([{ value: "8", label: "Ch\u1EE7 nh\u1EADt" }]) : [{ value: "2", label: "Monday" }, { value: "3", label: "Tuesday" }, { value: "4", label: "Wednesday" }, { value: "5", label: "Thursday" }, { value: "6", label: "Friday" }, { value: "7", label: "Saturday" }, { value: "8", label: "Sunday" }], ...ngDevMode ? [{ debugName: "weekdayOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rhsKindOpts = computed(() => [
      { label: this.tr("rhsValue"), value: "value" },
      { label: this.tr("rhsField"), value: "field" }
    ], ...ngDevMode ? [{ debugName: "rhsKindOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.radiusOpts = computed(() => [
      { label: this.tr("radiusSharp"), value: "sharp" },
      { label: this.tr("radiusDefault"), value: "default" },
      { label: this.tr("radiusRounded"), value: "rounded" }
    ], ...ngDevMode ? [{ debugName: "radiusOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.actionOpts = computed(() => {
      const en = this.fbLang() !== "vi";
      return Object.keys(FB_ACTION_LABELS).map((k) => ({ value: k, label: en ? FB_ACTION_LABELS[k].en : FB_ACTION_LABELS[k].vi }));
    }, ...ngDevMode ? [{ debugName: "actionOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rulesOpen = signal(false, ...ngDevMode ? [{ debugName: "rulesOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.publishOpen = signal(false, ...ngDevMode ? [{ debugName: "publishOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.archAsk = signal(null, ...ngDevMode ? [{ debugName: "archAsk" }] : (
      /* istanbul ignore next */
      []
    ));
    this.draftFields = computed(() => this.schema().sections.flatMap((s) => s.fields).filter((f2) => f2.draft && f2.type !== "heading" && f2.type !== "divider"), ...ngDevMode ? [{ debugName: "draftFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.publishSql = computed(() => {
      const rows = this.draftFields().map((f2) => `  ADD COLUMN ${f2.key} ${this.sqlTypeOf(f2.type)}`);
      return rows.length ? `ALTER TABLE hr_employee
${rows.join(",\n")};` : "";
    }, ...ngDevMode ? [{ debugName: "publishSql" }] : (
      /* istanbul ignore next */
      []
    ));
    this.previewOpen = signal(false, ...ngDevMode ? [{ debugName: "previewOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pvMode = signal("create", ...ngDevMode ? [{ debugName: "pvMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pvModes = computed(() => [
      { label: this.tr("pvCreate"), value: "create" },
      { label: this.tr("pvDetail"), value: "detail" }
    ], ...ngDevMode ? [{ debugName: "pvModes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pvLang = signal("vi", ...ngDevMode ? [{ debugName: "pvLang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pvLangs = computed(() => this.activeLocales().map((k) => ({
      label: FB_LOCALE_REGISTRY.find((l) => l.key === k)?.native ?? k,
      value: k
    })), ...ngDevMode ? [{ debugName: "pvLangs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pvValue = signal({}, ...ngDevMode ? [{ debugName: "pvValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.logicTipFor = signal(null, ...ngDevMode ? [{ debugName: "logicTipFor" }] : (
      /* istanbul ignore next */
      []
    ));
    this.matchOpts = computed(() => [{ value: "all", label: "AND" }, { value: "any", label: "OR" }], ...ngDevMode ? [{ debugName: "matchOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lastTextPush = 0;
    this.evModeOpts = computed(() => this.fbLang() === "vi" ? [{ value: "value", label: "Gi\xE1 tr\u1ECB" }, { value: "formula", label: "C\xF4ng th\u1EE9c \u0192x" }] : [{ value: "value", label: "Value" }, { value: "formula", label: "Formula \u0192x" }], ...ngDevMode ? [{ debugName: "evModeOpts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.translate.onLangChange.subscribe((e) => this.langSig.set(e.lang));
  }
  /** Chuỗi UI builder theo ngôn ngữ (dict _fb-i18n). */
  tr(key, params) {
    return fbT(this.fbLang(), key, params);
  }
  /** Esc đóng modal trên cùng (Xem trước → Quy tắc) — modal tự dựng nên phải tự xử phím. */
  onEsc() {
    if (!this.open())
      return;
    if (this.previewOpen())
      this.previewOpen.set(false);
    else if (this.archAsk())
      this.archAsk.set(null);
    else if (this.publishOpen())
      this.publishOpen.set(false);
    else if (this.aiOpen())
      this.aiOpen.set(false);
    else if (this.rulesOpen())
      this.rulesOpen.set(false);
  }
  mut(next) {
    this.undoStack.push(structuredClone(this.schema()));
    if (this.undoStack.length > 60)
      this.undoStack.shift();
    this.redoStack = [];
    this.schema.set(next);
    this.undoCount.set(this.undoStack.length);
    this.redoCount.set(0);
  }
  undo() {
    const prev = this.undoStack.pop();
    if (!prev)
      return;
    this.redoStack.push(structuredClone(this.schema()));
    this.schema.set(prev);
    this.undoCount.set(this.undoStack.length);
    this.redoCount.set(this.redoStack.length);
  }
  redo() {
    const next = this.redoStack.pop();
    if (!next)
      return;
    this.undoStack.push(structuredClone(this.schema()));
    this.schema.set(next);
    this.undoCount.set(this.undoStack.length);
    this.redoCount.set(this.redoStack.length);
  }
  curPreset() {
    return this.cvTheme().key;
  }
  setPreset(k) {
    if (k === "default") {
      const next = __spreadValues({}, this.schema());
      delete next.theme;
      this.mut(next);
      return;
    }
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { theme: { preset: k } }));
  }
  thRadiusMd() {
    const r = this.cvTheme().radius;
    return r === "sharp" ? "2px" : r === "rounded" ? "10px" : null;
  }
  thRadiusLg() {
    const r = this.cvTheme().radius;
    return r === "sharp" ? "4px" : r === "rounded" ? "14px" : null;
  }
  setDock(d) {
    this.aiDock.set(d);
    this.aiDockMenu.set(false);
  }
  get aiPromptModel() {
    return this.aiPrompt();
  }
  set aiPromptModel(v) {
    this.aiPrompt.set(v);
  }
  aiUse(sg) {
    this.aiPrompt.set(sg);
  }
  aiPush(role, text) {
    this.aiMsgs.update((l) => [...l, { role, text }]);
    queueMicrotask(() => {
      const el = this.aiLogEl()?.nativeElement;
      if (el)
        el.scrollTop = el.scrollHeight;
    });
  }
  /** Mở panel — lời chào 1 lần đầu. */
  aiOpenPanel() {
    if (!this.aiMsgs().length)
      this.aiPush("bot", this.tr("aiGreeting"));
    this.aiOpen.set(true);
  }
  setAiState(st, backToIdleMs) {
    if (this.aiStateTimer) {
      clearTimeout(this.aiStateTimer);
      this.aiStateTimer = null;
    }
    this.aiState.set(st);
    if (backToIdleMs)
      this.aiStateTimer = setTimeout(() => this.aiState.set("idle"), backToIdleMs);
  }
  /** Gửi prompt (Enter/Nói). Trống → nhắc tính năng voice đang phát triển.
   *  Mascot: thinking trong lúc "xử lý" (demo offline nên giả lập 700ms) → success 900ms / error 1200ms. */
  aiSend() {
    const q = this.aiPrompt().trim();
    if (!q) {
      this.aiSoonMsg();
      return;
    }
    this.aiPush("user", q);
    this.aiPrompt.set("");
    this.setAiState("thinking");
    setTimeout(() => {
      const out = fbAiGenerate(q, this.fbLang());
      if (!out) {
        this.setAiState("error", 1200);
        this.aiPush("bot", this.tr("aiFail"));
        return;
      }
      this.mut(out);
      this.select(null);
      const n = out.sections.reduce((a, sc) => a + sc.fields.length, 0);
      this.setAiState("success", 900);
      this.aiPush("bot", this.tr("aiDone", { name: out.name, n }));
    }, 700);
  }
  aiSoonMsg() {
    this.aiPush("bot", this.tr("aiSoon"));
  }
  defLocaleNative() {
    return FB_LOCALE_REGISTRY.find((l) => l.key === this.defLocale())?.native ?? this.defLocale();
  }
  /** Giá trị bản dịch 1 locale phụ (đọc labels map, fallback legacy labelEn/labelCn). */
  transVal(f2, k) {
    return f2.labels?.[k] ?? (k === "en" ? f2.labelEn ?? "" : k === "cn" ? f2.labelCn ?? "" : "");
  }
  patchLabelLocale(f2, k, v) {
    this.patchField(f2.id, { labels: __spreadProps(__spreadValues({}, f2.labels || {}), { [k]: v }) });
  }
  /** Số bản đã có / tổng (chính luôn tính là có). */
  transCount(f2) {
    return 1 + this.subLocales().filter((lc) => !!this.transVal(f2, lc.key)).length;
  }
  /** Đổi tập ngôn ngữ dự án — giữ THỨ TỰ registry (vi luôn chính khi được bật). */
  setLocales(keys) {
    if (!keys?.length)
      return;
    const sorted = FB_LOCALE_REGISTRY.filter((l) => keys.includes(l.key)).map((l) => l.key);
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { locales: sorted }));
  }
  get palQueryModel() {
    return this.palQuery();
  }
  set palQueryModel(v) {
    this.palQuery.set(v);
  }
  isSecOpen(k) {
    return this.openSecs().has(k);
  }
  toggleSec(k) {
    this.openSecs.update((s) => {
      const n = new Set(s);
      n.has(k) ? n.delete(k) : n.add(k);
      return n;
    });
  }
  dsConfigLabel(f2) {
    const d = f2.datasource;
    return this.tr(d === "sql" ? "dsConfigSql" : d === "api" ? "dsConfigApi" : "dsConfigEnum");
  }
  /** Options của field danh sách — custom/enum/sql/api đều qua fbListOptions (data giả demo). */
  customOpts(f2) {
    const list = fbListOptions(f2) || [];
    const k = "o:" + (f2.datasource || "custom") + ":" + (f2.dsMeta?.enumName || f2.dsMeta?.proc || f2.dsMeta?.url || "") + ":" + list.join("");
    let a = this._optCache.get(k);
    if (!a) {
      a = list.filter(Boolean).map((o) => ({ value: o, label: o }));
      this._optCache.set(k, a);
    }
    return a;
  }
  /** Chọn proc → TỰ FILL cột giá trị (cột Id đầu) + cột hiển thị (cột Ten* đầu) + reset tham số. */
  pickProc(f2, proc) {
    const meta = FB_SQL_PROC_META[proc];
    const valueCol = meta?.cols[0] || "";
    const labelCol = meta?.cols.find((c) => c.startsWith("Ten")) || meta?.cols[1] || "";
    this.patchField(f2.id, { dsMeta: __spreadProps(__spreadValues({}, f2.dsMeta || {}), { proc, valueCol, labelCol, paramMap: {} }) });
  }
  procColOpts(f2) {
    return (FB_SQL_PROC_META[f2.dsMeta?.proc || ""]?.cols || []).map((c) => ({ value: c, label: c }));
  }
  procParams(f2) {
    return FB_SQL_PROC_META[f2.dsMeta?.proc || ""]?.params || [];
  }
  /** Chọn API từ danh mục → TỰ FILL url/method/path + trường giá trị/hiển thị + reset tham số. */
  pickApi(f2, name) {
    if (!name || name === "__custom") {
      this.patchField(f2.id, { dsMeta: __spreadProps(__spreadValues({}, f2.dsMeta || {}), { apiName: name || void 0 }) });
      return;
    }
    const m = FB_API_CATALOG[name];
    const valueField = m?.fields[0] || "";
    const labelField = m?.fields.find((x) => /name|ten/i.test(x)) || m?.fields[1] || "";
    this.patchField(f2.id, { dsMeta: __spreadProps(__spreadValues({}, f2.dsMeta || {}), { apiName: name, url: m?.url, method: m?.method, path: m?.path, valueField, labelField, paramMap: {} }) });
  }
  apiFieldOpts(f2) {
    return (FB_API_CATALOG[f2.dsMeta?.apiName || ""]?.fields || []).map((c) => ({ value: c, label: c }));
  }
  apiParams(f2) {
    return FB_API_CATALOG[f2.dsMeta?.apiName || ""]?.params || [];
  }
  apiUrlOf(f2) {
    const m = FB_API_CATALOG[f2.dsMeta?.apiName || ""];
    return m ? `${m.method} ${m.url} \xB7 ${m.path}` : "";
  }
  paramOf(f2, pn) {
    const cur = f2.dsMeta?.paramMap?.[pn];
    if (cur)
      return cur;
    const k = f2.id + ":" + pn;
    let d = this._pmCache.get(k);
    if (!d) {
      d = { kind: "field", val: "" };
      this._pmCache.set(k, d);
    }
    return d;
  }
  patchParam(f2, pn, patch) {
    const cur = this.paramOf(f2, pn);
    this.patchField(f2.id, { dsMeta: __spreadProps(__spreadValues({}, f2.dsMeta || {}), { paramMap: __spreadProps(__spreadValues({}, f2.dsMeta?.paramMap || {}), { [pn]: __spreadValues(__spreadValues({}, cur), patch) }) }) });
  }
  patchDsMeta(f2, meta) {
    this.patchField(f2.id, { dsMeta: __spreadValues(__spreadValues({}, f2.dsMeta || {}), meta) });
  }
  /** Preview options nguồn ngoài (data giả) — null khi chưa cấu hình. */
  dsPreview(f2) {
    if ((f2.datasource || "custom") === "custom")
      return null;
    return fbListOptions(f2);
  }
  unitOptsOf(f2) {
    const k = "u:" + (f2.unitOptions || "VN\u0110");
    let a = this._optCache.get(k);
    if (!a) {
      a = (f2.unitOptions || "VN\u0110").split(",").map((u) => u.trim()).filter(Boolean).map((u) => ({ value: u, label: u }));
      this._optCache.set(k, a);
    }
    return a;
  }
  csvArr(v) {
    const k = v || "";
    let a = this._csvCache.get(k);
    if (!a) {
      a = k.split(",").map((x) => x.trim()).filter(Boolean);
      this._csvCache.set(k, a);
    }
    return a;
  }
  isDupOption(f2, i) {
    const o = (f2.options || [])[i];
    return !!o && (f2.options || []).filter((x) => x === o).length > 1;
  }
  starsOf(f2) {
    const m = Number(f2.constraints?.max);
    const n = !Number.isNaN(m) && m > 0 && m <= 10 ? m : 5;
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  minGtMax(f2) {
    const a = Number(f2.constraints?.min), b = Number(f2.constraints?.max);
    return !Number.isNaN(a) && !Number.isNaN(b) && f2.constraints?.min !== "" && f2.constraints?.max !== "" && a > b;
  }
  dmyToDate(v) {
    const k = "d:" + (v || "");
    if (!this._dateCache.has(k)) {
      const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((v || "").trim());
      this._dateCache.set(k, m ? new Date(+m[3], +m[2] - 1, +m[1]) : null);
    }
    return this._dateCache.get(k) ?? null;
  }
  dateToDmy(d) {
    if (!(d instanceof Date) || Number.isNaN(d.getTime()))
      return "";
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }
  hmToDate(v) {
    const k = "t:" + (v || "");
    if (!this._dateCache.has(k)) {
      const m = /^(\d{1,2}):(\d{2})/.exec((v || "").trim());
      this._dateCache.set(k, m ? new Date(2e3, 0, 1, +m[1], +m[2]) : null);
    }
    return this._dateCache.get(k) ?? null;
  }
  dateToHm(d) {
    if (!(d instanceof Date) || Number.isNaN(d.getTime()))
      return "";
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  /** Kiểu control cho GIÁ TRỊ SỰ KIỆN theo field đích (options chỉ khi nguồn tự thiết lập có dữ liệu). */
  evControl(k) {
    const f2 = this.fieldByKey(k);
    const t = f2?.type;
    if (t === "toggle")
      return "toggle";
    if (t === "number" || t === "percent" || t === "money" || t === "rating")
      return "number";
    if (t === "date")
      return "date";
    if (t === "time")
      return "time";
    const hasList = !!f2 && (fbListOptions(f2) || []).length > 0;
    if ((t === "multiselect" || t === "checkbox") && hasList)
      return "multi";
    if ((t === "select" || t === "radio" || t === "user") && hasList)
      return "options";
    return "text";
  }
  /** Kiểu control cho VẾ PHẢI rule theo field trái + toán tử. */
  rhsControl(c) {
    if (c.op === "dayEq" || c.op === "dayNe")
      return "weekday";
    const t = this.typeOfKey(c.field);
    if (t === "number" || t === "percent" || t === "money" || t === "rating")
      return "number";
    if (t === "date")
      return "date";
    if (t === "time")
      return "time";
    const lf = this.fieldByKey(c.field);
    if ((t === "select" || t === "multiselect" || t === "radio" || t === "checkbox") && lf && (fbListOptions(lf) || []).length)
      return "options";
    return "text";
  }
  fieldByKey(k) {
    for (const sec of this.schema().sections)
      for (const f2 of sec.fields)
        if (f2.key === k)
          return f2;
    return void 0;
  }
  typeOfKey(k) {
    return this.fieldByKey(k)?.type;
  }
  condFieldOptions(k) {
    const f2 = this.fieldByKey(k);
    return f2 ? this.customOpts(f2) : [];
  }
  /** Nhóm kiểu tương thích để so field-với-field. */
  compatGroup(t) {
    if (t === "number" || t === "percent" || t === "money" || t === "rating")
      return "num";
    if (t === "date")
      return "date";
    if (t === "time")
      return "time";
    return "text";
  }
  compatFieldOpts(leftKey) {
    const all = this.allFieldOpts();
    const k = "c:" + (leftKey || "") + ":" + all.map((o) => o.value).join("");
    let a = this._optCache.get(k);
    if (!a) {
      const g = this.compatGroup(this.typeOfKey(leftKey));
      a = all.filter((o) => o.value !== leftKey && this.compatGroup(this.typeOfKey(String(o.value))) === g);
      this._optCache.set(k, a);
    }
    return a;
  }
  /** Sửa key: chống trùng + CASCADE mọi tham chiếu (rules/công thức/onChange/logic). */
  /** Bật Bắt buộc → TỰ ĐIỀN thông báo mặc định (fill thật, user sửa đè được). */
  patchRequired(f2, on) {
    this.patchField(f2.id, { required: on, requiredMsg: on && !f2.requiredMsg ? this.tr("rRequired") : f2.requiredMsg });
  }
  patchFieldKey(f2, raw) {
    const newK = raw.trim();
    if (!newK || newK === f2.key)
      return;
    const keys = new Set(this.schema().sections.flatMap((sec) => sec.fields.filter((x) => x.id !== f2.id).map((x) => x.key)));
    let k = newK;
    for (let n = 2; keys.has(k); n++)
      k = newK + n;
    const renamed = fbRenameKey(this.schema(), f2.key, k);
    this.mut(__spreadProps(__spreadValues({}, renamed), {
      sections: renamed.sections.map((sec) => __spreadProps(__spreadValues({}, sec), { fields: sec.fields.map((x) => x.id === f2.id ? __spreadProps(__spreadValues({}, x), { key: k }) : x) }))
    }));
  }
  /** Kiểu cột SQL mô phỏng theo loại field (demo — BE thật do dev quyết). */
  sqlTypeOf(t) {
    if (t === "number" || t === "percent" || t === "money" || t === "rating")
      return "DECIMAL(18,2)";
    if (t === "date")
      return "DATE";
    if (t === "time")
      return "TIME";
    if (t === "toggle")
      return "BIT";
    if (t === "textarea")
      return "NVARCHAR(MAX)";
    return "NVARCHAR(255)";
  }
  typeNameOf(t) {
    const p = FB_PALETTE.find((x) => x.type === t);
    return p ? this.fbLang() === "vi" ? p.label : p.labelEn : t;
  }
  /** Xuất bản: mọi field Nháp → cột "thật" (demo: chỉ gỡ cờ draft, khoá key từ đây). */
  publishDrafts() {
    this.mut(__spreadProps(__spreadValues({}, this.schema()), {
      sections: this.schema().sections.map((s) => __spreadProps(__spreadValues({}, s), {
        fields: s.fields.map((f2) => f2.draft ? __spreadProps(__spreadValues({}, f2), { draft: void 0 }) : f2)
      }))
    }));
    this.publishOpen.set(false);
  }
  archiveField() {
    const ask = this.archAsk();
    if (ask) {
      this.patchField(ask.f.id, { hidden: true });
      this.archAsk.set(null);
    }
  }
  /** Field đã xuất bản đang được dùng ở đâu (demo mock theo đặc tả XMind mục 3). */
  usedAt(f2) {
    const en = this.fbLang() !== "vi";
    const out = [en ? "List grid" : "L\u01B0\u1EDBi danh s\xE1ch", en ? "Data export" : "Xu\u1EA5t d\u1EEF li\u1EC7u", en ? "Notifications" : "Th\xF4ng b\xE1o"];
    if (f2.key === "fullName" || f2.key === "email")
      out.push(en ? "Email templates" : "M\u1EABu email");
    const n = (this.schema().rules || []).filter((r) => r.conditions.some((c) => c.field === f2.key) || r.actions.some((a) => (a.targets || []).includes(f2.key))).length;
    if (n)
      out.push((en ? "Rules" : "Quy t\u1EAFc") + ` (${n})`);
    return out;
  }
  get pvModeModel() {
    return this.pvMode();
  }
  set pvModeModel(v) {
    this.pvMode.set(v);
  }
  get pvLangModel() {
    return this.pvLang();
  }
  set pvLangModel(v) {
    this.pvLang.set(v);
  }
  get pvValueModel() {
    return this.pvValue();
  }
  set pvValueModel(v) {
    this.pvValue.set(v);
  }
  /** Mở Xem trước: seed defaultValue + mã tự sinh demo + CHẠY RULES 1 lần. */
  openPreview() {
    const v = fbSeedDefaults(this.schema());
    for (const s of this.schema().sections)
      for (const f2 of s.fields) {
        if (f2.type === "autocode" && v[f2.key] == null)
          v[f2.key] = (f2.codePrefix || "G-") + "101";
      }
    this.pvValue.set(fbSeedRuleValues(this.schema(), v));
    const langs = this.activeLocales();
    this.pvLang.set(langs.includes(this.fbLang()) ? this.fbLang() : langs[0]);
    this.previewOpen.set(true);
  }
  // ── palette meta helpers ──
  typeLabel(t) {
    const p = FB_PALETTE.find((x) => x.type === t);
    if (!p)
      return t;
    return this.fbLang() === "vi" ? p.label : p.labelEn;
  }
  typeIcon(t) {
    return FB_PALETTE.find((p) => p.type === t)?.icon ?? Forms;
  }
  hasOptions(t) {
    return t === "select" || t === "multiselect" || t === "radio" || t === "checkbox";
  }
  hasPlaceholder(t) {
    return ["text", "textarea", "number", "percent", "money", "email", "phone", "address", "select", "multiselect", "date", "time", "user"].includes(t);
  }
  isTextType(t) {
    return ["text", "textarea", "email", "phone", "address"].includes(t);
  }
  isNumType(t) {
    return ["number", "percent", "money", "rating"].includes(t);
  }
  /** Loại field có ràng buộc per-type riêng (section Ràng buộc dữ liệu). */
  hasConstraints(t) {
    return this.isTextType(t) || this.isNumType(t) || ["date", "time", "upload", "image", "email", "phone", "address"].includes(t);
  }
  spanCols(f2) {
    return f2.span === "third" ? 2 : f2.span === "twothirds" ? 4 : f2.span === "full" ? 6 : 3;
  }
  /** Diễn giải logic áp lên field — mỗi dòng 1 quy tắc/sự kiện, song ngữ. */
  logicLines(f2) {
    const en = this.fbLang() !== "vi";
    const lbl = (k) => this.fieldByKey(k)?.label || k || "?";
    const opL = (op) => en ? FB_OP_LABELS[op].en : FB_OP_LABELS[op].vi;
    const condText = (c) => {
      const rhs = fbRhsOf(c);
      const noVal = c.op === "empty" || c.op === "notEmpty";
      const v = noVal ? "" : rhs.kind === "field" ? en ? ` value of \xAB${lbl(rhs.field)}\xBB` : ` gi\xE1 tr\u1ECB c\u1EE7a \xAB${lbl(rhs.field)}\xBB` : ` ${rhs.value ?? ""}`;
      return `\xAB${lbl(c.field)}\xBB ${opL(c.op)}${v}`.trim();
    };
    const out = [];
    if (f2.visibleWhen)
      out.push((en ? "Visible when: " : "Hi\u1EC3n th\u1ECB khi: ") + condText(f2.visibleWhen));
    if (f2.requiredWhen)
      out.push((en ? "Required when: " : "B\u1EAFt bu\u1ED9c khi: ") + condText(f2.requiredWhen));
    for (const e of f2.onChange || []) {
      out.push(en ? `Event: on change \u2192 set \xAB${lbl(e.set)}\xBB = ${e.toValue}` : `S\u1EF1 ki\u1EC7n: \u0111\u1ED5i gi\xE1 tr\u1ECB \u2192 g\xE1n \xAB${lbl(e.set)}\xBB = ${e.toValue}`);
    }
    for (const r of this.schema().rules || []) {
      const name = r.name || r.id;
      if (r.conditions.some((c) => c.field === f2.key)) {
        out.push(en ? `Condition of rule \xAB${name}\xBB` : `\u0110i\u1EC1u ki\u1EC7n c\u1EE7a quy t\u1EAFc \xAB${name}\xBB`);
      }
      for (const a of r.actions) {
        if ((a.targets || []).includes(f2.key)) {
          const al = en ? FB_ACTION_LABELS[a.type].en : FB_ACTION_LABELS[a.type].vi;
          out.push(en ? `Rule \xAB${name}\xBB \u2192 ${al}` : `Quy t\u1EAFc \xAB${name}\xBB \u2192 ${al}`);
        }
      }
    }
    return out;
  }
  /** Field có logic động không (rule tham chiếu/nhắm tới, hoặc field-level v1) — hiện tag DS. */
  hasLogic(f2) {
    if (f2.visibleWhen || f2.requiredWhen || f2.onChange && f2.onChange.length)
      return true;
    return (this.schema().rules || []).some((r) => r.conditions.some((c) => c.field === f2.key) || r.actions.some((a) => (a.targets || []).includes(f2.key)));
  }
  otherFieldOpts(cur) {
    return this.allFieldOpts().filter((o) => o.value !== cur.key);
  }
  allFieldOpts() {
    const out = [];
    for (const s of this.schema().sections)
      for (const f2 of s.fields) {
        if (f2.type !== "heading" && f2.type !== "divider")
          out.push({ value: f2.key, label: f2.label || f2.key });
      }
    return out;
  }
  /** Toán tử theo LOẠI của field trong điều kiện — nhãn song ngữ. */
  opOptsFor(fieldKey) {
    let t = "text";
    for (const s of this.schema().sections)
      for (const f2 of s.fields)
        if (f2.key === fieldKey)
          t = f2.type;
    const en = this.fbLang() !== "vi";
    return fbOpsForType(t).map((op) => ({ value: op, label: en ? FB_OP_LABELS[op].en : FB_OP_LABELS[op].vi }));
  }
  needsRhs(op) {
    return op !== "empty" && op !== "notEmpty";
  }
  /** Đổi trường trái của điều kiện: op giữ nếu còn hợp lệ với LOẠI mới, không thì reset;
   *  vế phải xoá (giá trị cũ vô nghĩa với trường khác). */
  patchCondField(ruleId, ci, field) {
    const t = this.typeOfKey(field) || "text";
    const valid = fbOpsForType(t);
    const cur = this.schema().rules.find((r) => r.id === ruleId)?.conditions[ci];
    const op = cur && valid.includes(cur.op) ? cur.op : valid.includes("eq") ? "eq" : valid[0];
    this.patchRuleCond(ruleId, ci, { field, op, rhs: { kind: "value", value: "" }, value: "" });
  }
  rhsKind(c) {
    return fbRhsOf(c).kind;
  }
  rhsValue(c) {
    return fbRhsOf(c).value ?? "";
  }
  rhsField(c) {
    return fbRhsOf(c).field ?? "";
  }
  // ── mutations (immutable rebuild qua mut → có undo/redo) ──
  patchSchema(patch) {
    this.mut(__spreadValues(__spreadValues({}, this.schema()), patch));
  }
  mutCoalesced(next) {
    const now = Date.now();
    if (now - this.lastTextPush > 800) {
      this.undoStack.push(structuredClone(this.schema()));
      if (this.undoStack.length > 60)
        this.undoStack.shift();
      this.lastTextPush = now;
    }
    this.redoStack = [];
    this.schema.set(next);
    this.undoCount.set(this.undoStack.length);
    this.redoCount.set(0);
  }
  renameForm(name) {
    this.mutCoalesced(__spreadProps(__spreadValues({}, this.schema()), { name }));
  }
  patchSection(id, title) {
    this.mutCoalesced(__spreadProps(__spreadValues({}, this.schema()), { sections: this.schema().sections.map((x) => x.id === id ? __spreadProps(__spreadValues({}, x), { title }) : x) }));
  }
  patchField(id, patch) {
    this.mut(__spreadProps(__spreadValues({}, this.schema()), {
      sections: this.schema().sections.map((sec) => __spreadProps(__spreadValues({}, sec), { fields: sec.fields.map((f2) => f2.id === id ? __spreadValues(__spreadValues({}, f2), patch) : f2) }))
    }));
  }
  patchCon(f2, patch) {
    this.patchField(f2.id, { constraints: __spreadValues(__spreadValues({}, f2.constraints || {}), patch) });
  }
  /** Chuỗi min/max (schema lưu string) → số cho hrm-input-number; không phải số → null. */
  numOrNull(v) {
    return v != null && v !== "" && !Number.isNaN(Number(v)) ? Number(v) : null;
  }
  select(id) {
    this.selectedId.set(id);
    if (id && id !== "__form") {
      this.openSecs.set(/* @__PURE__ */ new Set(["props"]));
      this.rightOpen.set(true);
    }
  }
  appendField(p) {
    const f2 = this.newField(p);
    const secs = [...this.schema().sections];
    const target = secs[secs.length - 1];
    secs[secs.length - 1] = __spreadProps(__spreadValues({}, target), { fields: [...target.fields, f2] });
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { sections: secs }));
    this.select(f2.id);
  }
  newField(p) {
    const label = p.defaults.label ?? p.label;
    return {
      id: fbId("f"),
      type: p.type,
      key: fbKeyFrom(label) + Math.floor(Math.random() * 90 + 10),
      label,
      labelEn: p.labelEn,
      span: p.defaults.span ?? "half",
      placeholder: p.defaults.placeholder,
      helper: p.defaults.helper,
      options: p.defaults.options ? [...p.defaults.options] : void 0,
      constraints: p.defaults.constraints ? __spreadValues({}, p.defaults.constraints) : void 0,
      unitOptions: p.defaults.unitOptions,
      defaultUnit: p.defaults.defaultUnit,
      codePrefix: p.defaults.codePrefix,
      draft: true
      // field mới = NHÁP — chỉ thành cột DB thật sau khi Xuất bản
    };
  }
  onDrop(e, sec) {
    const data = e.item.data;
    if (data && "defaults" in data) {
      const f2 = this.newField(data);
      this.mut(__spreadProps(__spreadValues({}, this.schema()), {
        sections: this.schema().sections.map((x) => {
          if (x.id !== sec.id)
            return x;
          const fields = [...x.fields];
          fields.splice(e.currentIndex, 0, f2);
          return __spreadProps(__spreadValues({}, x), { fields });
        })
      }));
      this.select(f2.id);
      return;
    }
    const before = structuredClone(this.schema());
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
    }
    this.undoStack.push(before);
    if (this.undoStack.length > 60)
      this.undoStack.shift();
    this.redoStack = [];
    this.undoCount.set(this.undoStack.length);
    this.redoCount.set(0);
    this.schema.update((s) => __spreadValues({}, s));
  }
  duplicate(f2, sec) {
    const keys = new Set(this.schema().sections.flatMap((s) => s.fields.map((y) => y.key)));
    let key = f2.key + "Copy";
    for (let n = 2; keys.has(key); n++)
      key = f2.key + "Copy" + n;
    const copy = __spreadProps(__spreadValues({}, structuredClone(f2)), { id: fbId("f"), key, label: f2.label + " (2)", draft: true });
    this.mut(__spreadProps(__spreadValues({}, this.schema()), {
      sections: this.schema().sections.map((x) => {
        if (x.id !== sec.id)
          return x;
        const i = x.fields.findIndex((y) => y.id === f2.id);
        const fields = [...x.fields];
        fields.splice(i + 1, 0, copy);
        return __spreadProps(__spreadValues({}, x), { fields });
      })
    }));
    this.select(copy.id);
  }
  removeField(f2, sec) {
    if (!f2.draft && f2.type !== "heading" && f2.type !== "divider") {
      this.archAsk.set({ f: f2, sec });
      return;
    }
    this.hardRemoveField(f2, sec);
  }
  hardRemoveField(f2, sec) {
    const cleaned = fbCleanupKey(this.schema(), f2.key);
    this.mut(__spreadProps(__spreadValues({}, cleaned), {
      sections: cleaned.sections.map((x) => x.id === sec.id ? __spreadProps(__spreadValues({}, x), { fields: x.fields.filter((y) => y.id !== f2.id) }) : x)
    }));
    if (this.selectedId() === f2.id)
      this.select(null);
  }
  addSection(afterIndex) {
    const sec = { id: fbId("sec"), title: this.tr("secTitlePh"), fields: [] };
    const secs = [...this.schema().sections];
    secs.splice(afterIndex + 1, 0, sec);
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { sections: secs }));
  }
  removeSection(id) {
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { sections: this.schema().sections.filter((x) => x.id !== id) }));
  }
  // ── options editor ──
  setOption(f2, i, v) {
    const old = (f2.options || [])[i];
    const options = [...f2.options || []];
    options[i] = v;
    let next = __spreadValues({}, this.schema());
    if (old && old !== v) {
      const fixCsv = (csv) => (csv || "").split(",").map((x) => x.trim() === old ? v : x.trim()).filter(Boolean).join(",");
      next = __spreadProps(__spreadValues({}, next), {
        rules: next.rules.map((r) => __spreadProps(__spreadValues({}, r), {
          conditions: r.conditions.map((c) => {
            if (c.field !== f2.key)
              return c;
            const rhs = fbRhsOf(c);
            if (rhs.kind !== "value")
              return c;
            const nv = c.op === "inList" ? fixCsv(rhs.value) : rhs.value === old ? v : rhs.value;
            return __spreadProps(__spreadValues({}, c), { rhs: __spreadProps(__spreadValues({}, rhs), { value: nv }) });
          })
        }))
      });
    }
    const dv = old && f2.defaultValue ? f2.options && (f2.type === "multiselect" || f2.type === "checkbox") ? (f2.defaultValue || "").split(",").map((x) => x.trim() === old ? v : x.trim()).filter(Boolean).join(",") : f2.defaultValue === old ? v : f2.defaultValue : f2.defaultValue;
    this.mut(__spreadProps(__spreadValues({}, next), {
      sections: next.sections.map((sec) => __spreadProps(__spreadValues({}, sec), {
        fields: sec.fields.map((x) => {
          const base = x.id === f2.id ? __spreadProps(__spreadValues({}, x), { options, defaultValue: dv }) : x;
          if (old && old !== v && base.onChange?.some((a) => a.set === f2.key)) {
            return __spreadProps(__spreadValues({}, base), {
              onChange: base.onChange.map((a) => a.set === f2.key ? __spreadProps(__spreadValues({}, a), { toValue: f2.type === "multiselect" || f2.type === "checkbox" ? (a.toValue || "").split(",").map((y) => y.trim() === old ? v : y.trim()).filter(Boolean).join(",") : a.toValue === old ? v : a.toValue }) : a)
            });
          }
          return base;
        })
      }))
    }));
  }
  addOption(f2) {
    this.patchField(f2.id, { options: [...f2.options || [], `${this.fbLang() === "vi" ? "L\u1EF1a ch\u1ECDn" : "Option"} ${(f2.options?.length || 0) + 1}`] });
  }
  removeOption(f2, i) {
    const options = [...f2.options || []];
    options.splice(i, 1);
    this.patchField(f2.id, { options });
  }
  // ── field-level logic v1 (điều kiện đơn + sự kiện gán nhanh) ──
  toggleFieldCond(f2, kind, on) {
    this.patchField(f2.id, { [kind]: on ? { field: "", op: "eq", value: "" } : null });
  }
  patchFieldCond(f2, kind, patch) {
    const cur = (kind === "visibleWhen" ? f2.visibleWhen : f2.requiredWhen) || { field: "", op: "eq", value: "" };
    this.patchField(f2.id, { [kind]: __spreadValues(__spreadValues({}, cur), patch) });
  }
  addChange(f2) {
    this.patchField(f2.id, { onChange: [...f2.onChange || [], { set: "", toValue: "" }] });
  }
  patchChange(f2, i, patch) {
    const onChange = [...f2.onChange || []];
    onChange[i] = __spreadValues(__spreadValues({}, onChange[i]), patch);
    this.patchField(f2.id, { onChange });
  }
  removeChange(f2, i) {
    const onChange = [...f2.onChange || []];
    onChange.splice(i, 1);
    this.patchField(f2.id, { onChange });
  }
  // ── QUY TẮC nghiệp vụ editor ──
  mapRules(fn) {
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { rules: this.schema().rules.map(fn) }));
  }
  addRule() {
    const r = { id: fbId("r"), name: "", conditions: [{ field: "", op: "eq", rhs: { kind: "value", value: "" } }], actions: [{ type: "hide", targets: [] }] };
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { rules: [...this.schema().rules, r] }));
  }
  removeRule(id) {
    this.mut(__spreadProps(__spreadValues({}, this.schema()), { rules: this.schema().rules.filter((r) => r.id !== id) }));
  }
  patchRule(id, patch) {
    this.mapRules((r) => r.id === id ? __spreadValues(__spreadValues({}, r), patch) : r);
  }
  addRuleCond(rid) {
    this.mapRules((r) => r.id === rid ? __spreadProps(__spreadValues({}, r), { conditions: [...r.conditions, { field: "", op: "eq", rhs: { kind: "value", value: "" } }] }) : r);
  }
  removeRuleCond(rid, i) {
    this.mapRules((r) => {
      if (r.id !== rid)
        return r;
      const conditions = [...r.conditions];
      conditions.splice(i, 1);
      return __spreadProps(__spreadValues({}, r), { conditions });
    });
  }
  patchRuleCond(rid, i, patch) {
    this.mapRules((r) => {
      if (r.id !== rid)
        return r;
      const conditions = [...r.conditions];
      conditions[i] = __spreadValues(__spreadValues({}, conditions[i]), patch);
      return __spreadProps(__spreadValues({}, r), { conditions });
    });
  }
  setRhsKind(rid, i, kind) {
    this.patchRuleCond(rid, i, { rhs: { kind, value: "", field: "" } });
  }
  patchRhs(rid, i, patch) {
    this.mapRules((r) => {
      if (r.id !== rid)
        return r;
      const conditions = [...r.conditions];
      const cur = fbRhsOf(conditions[i]);
      conditions[i] = __spreadProps(__spreadValues({}, conditions[i]), { rhs: __spreadValues(__spreadValues({}, cur), patch) });
      return __spreadProps(__spreadValues({}, r), { conditions });
    });
  }
  addRuleAction(rid) {
    this.mapRules((r) => r.id === rid ? __spreadProps(__spreadValues({}, r), { actions: [...r.actions, { type: "setValue", targets: [] }] }) : r);
  }
  removeRuleAction(rid, i) {
    this.mapRules((r) => {
      if (r.id !== rid)
        return r;
      const actions = [...r.actions];
      actions.splice(i, 1);
      return __spreadProps(__spreadValues({}, r), { actions });
    });
  }
  patchRuleAction(rid, i, patch) {
    this.mapRules((r) => {
      if (r.id !== rid)
        return r;
      const actions = [...r.actions];
      actions[i] = __spreadValues(__spreadValues({}, actions[i]), patch);
      return __spreadProps(__spreadValues({}, r), { actions });
    });
  }
  resetSchema() {
    this.mut(fbDefaultSchema());
    this.select(null);
  }
  // ── vòng đời ──
  save() {
    fbSaveSchema(this.schema());
    this.saved.emit(this.schema());
    this.open.set(false);
  }
  close() {
    this.open.set(false);
  }
  static {
    this.\u0275fac = function SgFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgFormBuilder)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgFormBuilder, selectors: [["sg-form-builder"]], viewQuery: function SgFormBuilder_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.aiLogEl, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function SgFormBuilder_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function SgFormBuilder_keydown_escape_HostBindingHandler() {
          return ctx.onEsc();
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { open: [1, "open"] }, outputs: { open: "openChange", saved: "saved" }, decls: 1, vars: 1, consts: [["aiLog", ""], ["cdkDropListGroup", "", 1, "fb"], [1, "fb-top"], [1, "fb-top-l"], ["type", "button", 1, "fb-ico", 3, "click"], [3, "icon", "size"], [1, "fb-brand"], [1, "fb-top-sep"], [1, "fb-name", 3, "ngModelChange", "ngModel", "placeholder"], [1, "fb-top-c"], [1, "fb-hist"], ["type", "button", 1, "fb-ico", 3, "click", "disabled", "title"], [1, "fb-dev"], ["type", "button", 1, "fb-dev-b", 3, "click", "title"], [1, "fb-top-r"], ["variant", "default", 3, "click"], [1, "fb-rules-n"], ["variant", "default", 1, "fb-btn-sec", 3, "click"], ["variant", "primary", 3, "click"], [1, "fb-rules-n", "fb-rules-n--onp"], [1, "fb-main"], [1, "fb-pal"], [1, "fb-pal-search"], [3, "ngModelChange", "ngModel", "placeholder", "prefixIcon"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "fb-pal-scroll", 3, "cdkDropListData", "cdkDropListEnterPredicate"], [1, "fb-canvas", 3, "click"], [1, "fb-sheet", 3, "click"], [1, "fb-sheet-head", 3, "click"], [1, "fb-sheet-title"], [1, "fb-sheet-desc"], [1, "fb-sec"], ["type", "button", 1, "fb-addsec", 3, "click"], ["type", "button", 1, "fb-side-tg", "fb-side-tg--l", 3, "click", "title"], ["type", "button", 1, "fb-side-tg", "fb-side-tg--r", 3, "click", "title"], [1, "fb-props", 3, "click"], ["type", "button", 1, "ai-fab", 3, "title"], ["role", "dialog", 1, "ai-panel", 3, "ai-panel--right", "ai-panel--left"], [1, "fb-pal-grp"], ["type", "button", "cdkDrag", "", 1, "fb-pal-item", 3, "cdkDragData"], ["type", "button", "cdkDrag", "", 1, "fb-pal-item", 3, "click", "cdkDragData"], [1, "fb-pal-ic"], [1, "fb-pal-lb"], [1, "fb-pal-add"], ["class", "fb-pal-item is-ghost", 4, "cdkDragPlaceholder"], [1, "fb-pal-item", "is-ghost"], [1, "fb-sec-bar"], [1, "fb-sec-title", 3, "ngModelChange", "ngModel", "placeholder"], [1, "fb-sec-acts"], ["type", "button", 1, "fb-mini", 3, "click", "title"], ["type", "button", 1, "fb-mini", "fb-mini--danger", 3, "title"], ["cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "fb-sec-grid", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "fb-cell", 3, "gridColumn", "cdkDragData"], [1, "fb-empty"], ["type", "button", 1, "fb-mini", "fb-mini--danger", 3, "click", "title"], ["cdkDrag", "", 1, "fb-cell", 3, "cdkDragData"], [1, "fb-item", 3, "click"], [1, "fb-tag"], [1, "fb-chip"], ["cdkDragHandle", "", 1, "fb-chip-b", "fb-chip-drag", 3, "title"], ["type", "button", 1, "fb-chip-b", 3, "click", "title"], ["type", "button", 1, "fb-chip-b", "fb-chip-b--danger", 3, "click", "title"], [1, "cv-heading"], [1, "cv-divider"], [1, "cv-field"], ["class", "fb-cell-ph", 4, "cdkDragPlaceholder"], [1, "cv-lbl"], [1, "cv-req"], [1, "cv-logic"], ["color", "gray", "variant", "stroke"], ["color", "gold", "variant", "stroke"], [1, "cv-box", "cv-box--area"], [1, "cv-box"], [1, "cv-opts"], [1, "cv-toggle"], [1, "cv-stars"], [1, "cv-money"], [1, "cv-box", "cv-mono"], [1, "cv-drop"], [1, "cv-help"], [1, "cv-logic", 3, "mouseenter", "mouseleave"], [1, "cv-logic-tip"], [1, "cv-logic-t"], [1, "cv-logic-line"], [1, "cv-chev", 3, "icon", "size"], [1, "cv-radio"], [1, "cv-radio-dot"], [1, "cv-check"], [1, "cv-check-box"], [1, "cv-toggle-knob"], [1, "cv-suffix"], [1, "cv-box", "cv-money-n"], [1, "cv-box", "cv-money-u"], [1, "fb-cell-ph"], [1, "fb-props-h"], [1, "fb-props-ic"], [1, "fb-props-t"], [1, "fb-props-key"], ["type", "button", 1, "fb-ico", "fb-ico--sm", 3, "click"], [1, "fb-props-scroll"], [1, "fa-sec"], ["type", "button", 1, "fa-h", 3, "click"], [1, "fa-caret", 3, "icon", "size"], [1, "fa-body"], [1, "fp-row"], [1, "fp-lbl"], ["color", "blue", "variant", "stroke", 1, "fp-lang-tag"], [1, "fp-opt"], [3, "ngModelChange", "ngModel"], ["type", "button", 1, "fb-mini", "fp-globe", 3, "on", "title"], [1, "fp-trans"], [1, "fp-row", "fp-row--inline"], ["type", "button", 1, "fb-mini", "fp-globe", 3, "click", "title"], [1, "fp-globe-n"], [1, "fp-hint"], [1, "fp-miss"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "fp-mono", 3, "ngModelChange", "ngModel"], [1, "fp-keylock"], [3, "ngModel", "options"], [3, "multiple", "ngModel", "options"], [3, "ngModel"], ["unit", "%", 3, "ngModel"], [3, "ngModel", "min", "precision"], ["placeholder", "dd/MM/yyyy", 3, "ngModel"], ["placeholder", "HH:mm", 3, "ngModel"], [3, "ngModel", "minRows", "maxRows"], [1, "fp-sep"], [3, "ngModelChange", "ngModel", "options"], [3, "ngModelChange", "multiple", "ngModel", "options"], ["unit", "%", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel", "min", "precision"], ["placeholder", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["placeholder", "HH:mm", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel", "minRows", "maxRows"], [3, "ngModelChange", "options", "ngModel"], [1, "fp-lbl", "fp-lbl--solo"], ["type", "button", 1, "fp-add", 3, "click"], [1, "fp-mono", 3, "ngModelChange", "ngModel", "options", "placeholder"], [1, "fp-2col"], [1, "fp-mono", 3, "ngModelChange", "ngModel", "options", "allowClear", "showSearch"], [1, "fp-lbl", "fp-lbl--solo", "fp-mono"], [1, "fp-cond", "fp-cond--act"], [1, "fp-seg-param", 3, "ngModelChange", "block", "options", "ngModel"], [3, "ngModel", "options", "placeholder"], [1, "fp-mono", 3, "ngModel", "placeholder"], [3, "ngModelChange", "ngModel", "options", "placeholder"], [1, "fp-mono", 3, "ngModelChange", "ngModel", "placeholder"], [1, "fp-used"], ["placeholder", "/api/danh-muc/phong-ban", 1, "fp-mono", 3, "ngModelChange", "ngModel"], ["placeholder", "data.items", 1, "fp-mono", 3, "ngModelChange", "ngModel"], ["placeholder", "id", 1, "fp-mono", 3, "ngModelChange", "ngModel"], ["placeholder", "name", 1, "fp-mono", 3, "ngModelChange", "ngModel"], [1, "fp-hint", "fp-mono"], ["placeholder", "VN\u0110,USD,EUR", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel", "options", "allowClear", "showSearch"], ["placeholder", "G-", 1, "fp-mono", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "block", "options", "ngModel"], ["placeholder", "T\u1ED1i thi\u1EC3u", 3, "ngModelChange", "ngModel", "min", "precision"], ["placeholder", "T\u1ED1i \u0111a", 3, "ngModelChange", "ngModel", "min", "precision"], ["placeholder", "VD: admin, test", 3, "ngModelChange", "ngModel"], ["placeholder", "T\u1ED1i thi\u1EC3u", 3, "ngModelChange", "ngModel"], ["placeholder", "T\u1ED1i \u0111a", 3, "ngModelChange", "ngModel"], ["placeholder", "VD: 0, 13, 999", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel", "options", "allowClear"], [3, "ngModelChange", "multiple", "ngModel", "options", "placeholder"], ["placeholder", "VD: 25/12/2026, 31/12/2026", 3, "ngModelChange", "ngModel"], ["placeholder", "VD: dd-MM-yyyy", 1, "fp-mono", 3, "ngModelChange", "ngModel"], ["placeholder", "5", 3, "ngModelChange", "ngModel", "min", "precision"], ["placeholder", "10", 3, "ngModelChange", "ngModel", "min"], ["placeholder", "pdf,docx,xlsx", 3, "ngModelChange", "ngModel"], [1, "fp-mono", 3, "ngModelChange", "ngModel", "minRows", "maxRows", "placeholder"], [1, "fp-mini-lbl"], [1, "fp-seg-full", 3, "ngModelChange", "options", "ngModel"], [1, "fp-opt", "fp-opt--right"], [1, "fp-ev-sw"], [3, "ngModel", "placeholder"], [3, "multiple", "ngModel", "options", "placeholder"], [1, "fa-body", "fa-body--flat"], [1, "thp-grid"], ["type", "button", 1, "thp", 3, "on"], [3, "ngModelChange", "multiple", "ngModel", "options", "allowClear", "showSearch"], ["type", "button", 1, "fp-reset", 3, "click"], ["type", "button", 1, "thp", 3, "click"], [1, "thp-prev"], [1, "thp-head"], [1, "thp-line"], [1, "thp-line", "thp-line--2"], [1, "thp-name"], [1, "fb-pv-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 1, "fb-pv", "fb-pub"], [1, "fb-pv-h"], [1, "fb-pv-t"], [1, "fb-pv-body", "fb-pub-body"], [1, "fb-pub-empty"], [1, "fb-pub-desc"], [1, "fb-pub-tbl"], [1, "fb-pub-sql"], [1, "fb-pub-sql-t"], [1, "fb-pub-mono"], [1, "fb-pub-foot"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 1, "fb-pv", "fb-pub", "fb-arch"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 1, "fb-pv", "fb-rules"], [1, "fb-pv-body", "fb-rules-body"], [1, "rl"], [1, "fb-empty", 2, "min-height", "90px"], [1, "rl-head"], [1, "rl-no"], [1, "rl-name", 3, "ngModelChange", "ngModel", "placeholder"], [1, "rl-sec"], [1, "rl-kw"], [1, "rl-rows"], [1, "rl-row"], [1, "rl-kw", "rl-kw--do"], [1, "rl-row", "rl-row--act"], [1, "rl-and-sel", 3, "ngModel", "options", "allowClear", "showSearch"], [1, "rl-w-f", 3, "ngModelChange", "ngModel", "options", "placeholder"], [1, "rl-w-op", 3, "ngModelChange", "ngModel", "options", "allowClear"], [1, "rl-and-sel", 3, "ngModelChange", "ngModel", "options", "allowClear", "showSearch"], [1, "rl-w-kind", 3, "ngModelChange", "options", "ngModel"], [1, "rl-w-v", 3, "ngModel", "options", "placeholder"], [1, "rl-w-v", 3, "ngModelChange", "ngModel", "options", "placeholder"], [1, "rl-w-v", 3, "ngModel", "options", "allowClear", "showSearch"], [1, "rl-w-v", 3, "ngModel", "placeholder"], ["placeholder", "dd/MM/yyyy", 1, "rl-w-v", 3, "ngModel"], ["placeholder", "HH:mm", 1, "rl-w-v", 3, "ngModel"], [1, "rl-w-v", 3, "multiple", "ngModel", "options", "placeholder"], [1, "rl-w-v", 3, "ngModelChange", "ngModel", "options", "allowClear", "showSearch"], [1, "rl-w-v", 3, "ngModelChange", "ngModel", "placeholder"], ["placeholder", "dd/MM/yyyy", 1, "rl-w-v", 3, "ngModelChange", "ngModel"], ["placeholder", "HH:mm", 1, "rl-w-v", 3, "ngModelChange", "ngModel"], [1, "rl-w-v", 3, "ngModelChange", "multiple", "ngModel", "options", "placeholder"], [1, "rl-w-f", 3, "ngModelChange", "multiple", "ngModel", "options", "placeholder"], ["resize", "vertical", "placeholder", "IF([termUnit]=='N\u0103m', ADDYEAR([startDate],[term]), ADDDAY([startDate],[term]))", 1, "rl-formula", 3, "ngModelChange", "ngModel", "minRows", "maxRows"], [1, "rl-fx-hint"], ["type", "button", 1, "ai-fab", 3, "click", "title"], [1, "ai-fab-img", 3, "size", "state"], [1, "ai-fab-txt"], ["role", "dialog", 1, "ai-panel"], [1, "ai-head"], [1, "ai-mascot", 3, "size", "state"], [1, "ai-head-t"], [1, "ai-head-name"], [1, "ai-badge"], [1, "ai-head-sub"], ["type", "button", 1, "fb-ico", "fb-ico--sm", "ai-head-ico", 3, "click", "title"], ["type", "button", 1, "fb-ico", "fb-ico--sm", "ai-head-ico", 3, "click"], [1, "ai-body"], [1, "ai-log"], [1, "ai-sug"], [1, "ai-input"], [1, "ai-input-box"], [3, "ngModelChange", "keydown.enter", "ngModel", "placeholder", "minRows", "maxRows"], [1, "ai-input-bar"], ["type", "button", 1, "ai-rnd", 3, "click", "title"], ["type", "button", 1, "ai-chip-b", 3, "click"], [1, "ai-spacer"], ["type", "button", 1, "ai-talk", 3, "click"], [1, "ai-dock-bd", 3, "click"], ["role", "menu", 1, "ai-dock-menu"], ["type", "button", 1, "ai-dock-it", 3, "click"], [1, "ai-m", "ai-m--u"], [1, "ai-m", "ai-m--b"], ["type", "button", 1, "fb-ai-chip"], ["type", "button", 1, "fb-ai-chip", 3, "click"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 1, "fb-pv"], ["size", "sm", 3, "ngModelChange", "options", "ngModel"], [1, "fb-pv-body"], [3, "valueChange", "schema", "mode", "lang", "value"]], template: function SgFormBuilder_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgFormBuilder_Conditional_0_Template, 75, 105, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.open() ? 0 : -1);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TablerIconComponent,
      CdkDropListGroup,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      CdkDragPlaceholder,
      CdkTrapFocus,
      HrmButton,
      HrmDatePicker,
      HrmInput,
      HrmInputNumber,
      HrmSegmented,
      HrmSelect,
      HrmSwitch,
      HrmTag,
      HrmTextarea,
      HrmTimePicker,
      SgFormRenderer,
      SgVnaiMascot
    ], styles: ['\n.fb[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-body, var(--bg-surface-subtle));\n  color: var(--text-body);\n  font-family: var(--font-sans);\n}\n.fb-top[_ngcontent-%COMP%] {\n  flex: none;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 14px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-top-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  flex: 1;\n}\n.fb-top-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: none;\n}\n.fb-top-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  justify-content: flex-end;\n}\n.fb-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.fb-brand[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n}\n.fb-top-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 22px;\n  background: var(--border-sub);\n}\n.fb-name[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-14);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  padding: 5px 8px;\n  border-radius: var(--radius-md);\n  min-width: 0;\n  width: 220px;\n}\n.fb-name[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-sub);\n}\n.fb-name[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.fb-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-ico[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-ico[_ngcontent-%COMP%]:disabled {\n  color: var(--icon-disabled, var(--text-soft));\n  opacity: .45;\n  cursor: not-allowed;\n}\n.fb-ico--sm[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n.fb-hist[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n}\n.fb-dev[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  padding: 2px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fb-dev-b[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 26px;\n  border: 0;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-dev-b[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n.fb-dev-b.on[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.fb-rules-n[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  margin-left: 2px;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  line-height: 1;\n}\n.fb-main[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  transition: grid-template-columns .24s var(--ease-out, ease);\n}\n.fb-pal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n}\n.fb-pal.is-closed[_ngcontent-%COMP%] {\n  border-right: 0;\n}\n.fb-pal-search[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 12px 12px 8px;\n}\n.fb-pal-scroll[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 12px 16px;\n}\n.fb-pal-grp[_ngcontent-%COMP%] {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n  margin: 14px 2px 6px;\n}\n.fb-pal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 7px 8px;\n  margin-bottom: 4px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  cursor: grab;\n  text-align: left;\n  transition:\n    border-color var(--duration-fast) var(--ease-out),\n    box-shadow var(--duration-fast) var(--ease-out),\n    transform var(--duration-fast) var(--ease-out);\n}\n.fb-pal-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n  transform: translateY(-1px);\n}\n.fb-pal-item[_ngcontent-%COMP%]:hover   .fb-pal-add[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.fb-pal-ic[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-sm);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.fb-pal-lb[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-pal-add[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity var(--duration-fast) var(--ease-out);\n}\n.fb-pal-item.is-ghost[_ngcontent-%COMP%] {\n  opacity: .9;\n  box-shadow: var(--shadow-regular-md);\n  border-color: var(--primary-base);\n}\n.fb-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 22px 26px 60px;\n  background: var(--bg-body, var(--bg-surface-subtle));\n  transition: background .2s var(--ease-out, ease);\n}\n.fb-sheet[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-sm);\n  padding: 6px 26px 22px;\n  transition: max-width .28s var(--ease-out, ease);\n}\n.fb-sheet-head[_ngcontent-%COMP%] {\n  padding: 18px 10px 6px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  border: 1.5px dashed transparent;\n}\n.fb-sheet-head[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-sub);\n}\n.fb-sheet-head.is-on[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n.fb-sheet-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-18, 18px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.fb-sheet-desc[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.fb-sheet-head.is-solid[_ngcontent-%COMP%] {\n  margin: -6px -26px 10px;\n  padding: 18px 26px 14px;\n  border-radius: var(--radius-xl) var(--radius-xl) 0 0;\n  border-color: transparent;\n}\n.fb-sheet-head.is-solid[_ngcontent-%COMP%]   .fb-sheet-title[_ngcontent-%COMP%] {\n  color: var(--static-white, #fff);\n}\n.fb-sheet-head.is-solid[_ngcontent-%COMP%]   .fb-sheet-desc[_ngcontent-%COMP%] {\n  color: var(--static-white, #fff);\n  opacity: .85;\n}\n.fb-side-tg[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 18px;\n  z-index: 5;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  box-shadow: var(--shadow-regular-sm);\n}\n.fb-side-tg[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.fb-side-tg--l[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -14px;\n}\n.fb-side-tg--r[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: -14px;\n}\n.fb-sec[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.fb-sec-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.fb-sec-title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding: 4px 6px;\n  border-radius: var(--radius-sm);\n}\n.fb-sec-title[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-sub);\n}\n.fb-sec-title[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-base);\n}\n.fb-sec-acts[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 4px;\n}\n.fb-mini[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  flex: none;\n}\n.fb-mini[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fb-mini--danger[_ngcontent-%COMP%]:hover {\n  border-color: var(--error-base);\n  color: var(--error-base);\n}\n.fb-sec-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px 10px;\n  min-height: 44px;\n}\n.fb-cell[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.fb-cell-ph[_ngcontent-%COMP%] {\n  border: 1.5px dashed var(--primary-base);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  min-height: 58px;\n  grid-column: span 3;\n}\n.fb-cell.cdk-drag-preview[_ngcontent-%COMP%] {\n  z-index: 1300;\n}\n.fb-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px 10px;\n  border: 1.5px dashed transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);\n}\n.fb-item[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--primary-base) 45%, transparent);\n}\n.fb-item.is-on[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: var(--primary-base);\n  background: color-mix(in srgb, var(--primary-base) 4%, var(--bg-surface));\n}\n.fb-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: 8px;\n  z-index: 2;\n  display: none;\n  max-width: 70%;\n  padding: 1px 7px;\n  border-radius: var(--radius-sm);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-item[_ngcontent-%COMP%]:hover   .fb-tag[_ngcontent-%COMP%], \n.fb-item.is-on[_ngcontent-%COMP%]   .fb-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.fb-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  right: 8px;\n  z-index: 3;\n  display: none;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-sm);\n}\n.fb-item.is-on[_ngcontent-%COMP%]   .fb-chip[_ngcontent-%COMP%], \n.fb-item[_ngcontent-%COMP%]:hover   .fb-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.fb-chip-b[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-chip-b[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-chip-b--danger[_ngcontent-%COMP%]:hover {\n  color: var(--error-base);\n  background: color-mix(in srgb, var(--error-base) 10%, transparent);\n}\n.fb-chip-drag[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.fb-empty[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 64px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  color: var(--text-soft);\n  font-size: var(--fs-13);\n  grid-column: 1 / -1;\n}\n.fb-addsec[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 16px;\n  padding: 9px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-addsec[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cv-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.cv-lbl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.cv-lbl[_ngcontent-%COMP%]     .ant-tag {\n  margin: 0;\n  line-height: 1.3;\n  padding-inline: 5px;\n  font-size: 10px;\n  border-radius: var(--radius-sm);\n}\n.cv-logic[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: var(--radius-sm);\n  background: var(--secondary, var(--bg-surface-subtle));\n  color: var(--text-sub);\n  cursor: help;\n}\n.cv-logic[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n}\n.cv-logic-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 7px);\n  left: -6px;\n  z-index: 40;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 230px;\n  max-width: 320px;\n  width: max-content;\n  padding: 9px 11px;\n  border-radius: var(--radius-md);\n  background: var(--text-strong);\n  color: var(--bg-surface);\n  font-size: var(--fs-12);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: normal;\n  box-shadow: 0 8px 24px rgb(0 0 0 / .22);\n  pointer-events: none;\n}\n.cv-logic-tip[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: 11px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(45deg);\n  background: var(--text-strong);\n}\n.cv-logic-t[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold, 600);\n  opacity: .85;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.cv-logic-line[_ngcontent-%COMP%] {\n  display: block;\n}\n.fp-ev-sw[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n}\n.fp-opt--right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.fp-seg-param[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fp-seg-param[_ngcontent-%COMP%]     .ant-segmented {\n  background: var(--bg-body, #EDF1F5);\n  border: 1px solid var(--border-sub);\n}\n.fp-seg-param[_ngcontent-%COMP%]     .ant-segmented-item-selected {\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-sm, 0 1px 3px rgb(0 0 0 / .12));\n}\n.fb-rules-n--gold[_ngcontent-%COMP%] {\n  background: var(--warning-base, #F59E0B);\n}\n.fb-btn-sec[_ngcontent-%COMP%]     button.ant-btn {\n  background: var(--secondary, var(--bg-surface-subtle));\n  border-color: transparent;\n  color: var(--text-strong);\n}\n.fb-btn-sec[_ngcontent-%COMP%]     button.ant-btn:hover {\n  background: var(--bg-surface-subtle);\n  border-color: var(--border-sub);\n  color: var(--text-strong);\n}\n.fb-rules-n--onp[_ngcontent-%COMP%] {\n  background: rgb(255 255 255 / .28);\n  color: #fff;\n}\n.fp-keylock[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fp-used[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.fp-used[_ngcontent-%COMP%]     .ant-tag {\n  margin: 0;\n  line-height: 1.4;\n  padding-inline: 6px;\n  font-size: 11px;\n  border-radius: var(--radius-sm);\n}\n.fb-pub[_ngcontent-%COMP%] {\n  width: min(680px, calc(100vw - 48px));\n}\n.fb-pub-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px 18px;\n  overflow: auto;\n}\n.fb-pub-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.fb-pub-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  line-height: 1.6;\n}\n.fb-pub-empty[_ngcontent-%COMP%] {\n  margin: 4px 0 8px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  text-align: center;\n}\n.fb-pub-tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-13);\n}\n.fb-pub-tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  padding: 6px 10px;\n  border-bottom: 1px solid var(--border-sub);\n  white-space: nowrap;\n}\n.fb-pub-tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-sub);\n  color: var(--text-body);\n}\n.fb-pub-mono[_ngcontent-%COMP%] {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n}\n.fb-pub-sql[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  overflow: hidden;\n}\n.fb-pub-sql-t[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-pub-sql[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 12px;\n  white-space: pre-wrap;\n  color: var(--text-strong);\n}\n.fb-pub-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-top: 2px;\n}\n.fb-arch[_ngcontent-%COMP%] {\n  width: min(520px, calc(100vw - 48px));\n}\n.cv-req[_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n.cv-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n}\n.cv-box--area[_ngcontent-%COMP%] {\n  min-height: 74px;\n  align-items: flex-start;\n  padding-top: 7px;\n}\n.cv-chev[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9px;\n  color: var(--text-soft);\n}\n.cv-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 9px;\n  color: var(--text-soft);\n  font-size: var(--fs-12);\n}\n.cv-money[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cv-money-n[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.cv-money-u[_ngcontent-%COMP%] {\n  flex: 0 0 84px;\n  padding-right: 24px;\n}\n.cv-mono[_ngcontent-%COMP%] {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.cv-opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 2px;\n}\n.cv-radio[_ngcontent-%COMP%], \n.cv-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.cv-radio-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.cv-radio-dot.is-on[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  box-shadow: inset 0 0 0 3px var(--bg-surface);\n  background: var(--primary-base);\n}\n.cv-check-box[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: var(--radius-xs, 3px);\n  border: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.cv-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n  border-radius: 999px;\n  background: var(--primary-base);\n}\n.cv-toggle-knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n}\n.cv-stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 3px;\n  color: var(--warning-base);\n}\n.cv-drop[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 64px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n.cv-help[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.cv-heading[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.cv-divider[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 8px 0 2px;\n}\n.fb-props[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border-left: 1px solid var(--border-sub);\n}\n.fb-props.is-closed[_ngcontent-%COMP%] {\n  border-left: 0;\n}\n.fb-props-h[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-props-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.fb-props-t[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.fb-props-key[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-props-scroll[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fa-sec[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-soft);\n}\n.fa-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 11px 14px;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fa-h[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.fa-caret[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  transition: transform var(--duration-fast) var(--ease-out);\n}\n.fa-caret.is-open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.fa-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 4px 14px 16px;\n}\n.fa-body--flat[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.fp-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fp-row--inline[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.fp-2col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.fp-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.fp-lbl--solo[_ngcontent-%COMP%] {\n  margin-bottom: -4px;\n}\n.fp-mono[_ngcontent-%COMP%]     input {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.fp-lang-tag[_ngcontent-%COMP%]     .ant-tag {\n  margin: 0;\n  line-height: 1.3;\n  padding-inline: 5px;\n  font-size: 10px;\n  border-radius: var(--radius-sm);\n}\n.fp-lang-tag-old[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-soft);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm);\n  padding: 0 4px;\n  margin-left: 4px;\n}\n.fp-globe[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 24px;\n  padding: 0 5px;\n  gap: 3px;\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n}\n.fp-globe.on[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fp-globe-n[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: var(--font-semibold, 600);\n}\n.fp-trans[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fp-miss[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--warning-base);\n  margin-left: 6px;\n}\n.fp-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fp-opt[_ngcontent-%COMP%]   hrm-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.fp-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  align-self: flex-start;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--primary-base);\n  cursor: pointer;\n  padding: 2px 0;\n}\n.fp-add[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.fp-sep[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 2px 0;\n  width: 100%;\n}\n.fp-cond[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fp-mini-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.fp-hint[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  line-height: 1.55;\n}\n.fp-reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  cursor: pointer;\n  padding: 7px 10px;\n}\n.fp-reset[_ngcontent-%COMP%]:hover {\n  color: var(--error-base);\n  border-color: var(--error-base);\n}\n.th-swatches[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 6px;\n}\n.th-sw[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: var(--radius-full, 999px);\n  border: 2px solid transparent;\n  cursor: pointer;\n  padding: 0;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.08);\n}\n.th-sw.on[_ngcontent-%COMP%] {\n  border-color: var(--text-strong);\n}\n.th-sw--bg[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n}\n.th-sw--custom[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  background:\n    conic-gradient(\n      from 90deg,\n      #f43f5e,\n      #eab308,\n      #22c55e,\n      #06b6d4,\n      #6366f1,\n      #d946ef,\n      #f43f5e);\n}\n.th-sw--custom[_ngcontent-%COMP%]   input[type=color][_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.fb-pv-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1400;\n  background: rgb(0 0 0 / .45);\n}\n.fb-pv[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1410;\n  width: min(780px, calc(100vw - 48px));\n  max-height: 86vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg, var(--shadow-regular-md));\n}\n.fb-rules[_ngcontent-%COMP%] {\n  width: min(920px, calc(100vw - 48px));\n}\n.fb-pv-h[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-pv-t[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-14);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-pv-t[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n}\n.fb-pv-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fb-rules-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n}\n.fb-rules-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.thp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.thp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 6px;\n  border: 1.5px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  cursor: pointer;\n  font: inherit;\n}\n.thp[_ngcontent-%COMP%]:hover {\n  border-color: color-mix(in srgb, var(--primary-base) 50%, transparent);\n}\n.thp.on[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.thp-prev[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  height: 44px;\n  padding: 0 0 5px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.thp-head[_ngcontent-%COMP%] {\n  height: 12px;\n  flex: none;\n}\n.thp-line[_ngcontent-%COMP%] {\n  height: 4px;\n  margin: 2px 6px 0;\n  border-radius: 2px;\n  opacity: .8;\n}\n.thp-line--2[_ngcontent-%COMP%] {\n  background: var(--border-sub);\n  width: 60%;\n}\n.thp-line--dark[_ngcontent-%COMP%] {\n  background: rgb(255 255 255 / .25);\n}\n.thp-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  text-align: left;\n}\n@property --fab-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }\n.ai-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 1340;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 22px 11px 12px;\n  border: 0;\n  border-radius: 18px 18px 4px 18px;\n  background: var(--bg-surface);\n  box-shadow:\n    0 6px 22px rgb(37 99 235 / .24),\n    0 6px 24px rgb(240 101 58 / .22),\n    0 2px 10px rgb(139 92 246 / .18);\n  cursor: pointer;\n  font: inherit;\n  transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);\n}\n.ai-fab[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.ai-fab[_ngcontent-%COMP%]::before, \n.ai-fab[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: inherit;\n  padding: 2px;\n  pointer-events: none;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n.ai-fab[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      100deg,\n      #2563EB 0%,\n      #8B5CF6 38%,\n      #FBBF24 70%,\n      #F0653A 100%);\n  opacity: .35;\n}\n.ai-fab[_ngcontent-%COMP%]::after {\n  background:\n    conic-gradient(\n      from var(--fab-angle),\n      transparent 0 64%,\n      rgb(37 99 235 / .35) 72%,\n      #2563EB 79%,\n      #8B5CF6 86%,\n      #FBBF24 93%,\n      #F0653A 98%,\n      #FFD9C4 100%);\n  animation: _ngcontent-%COMP%_fab-border-move 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_fab-border-move {\n  to {\n    --fab-angle: 360deg;\n  }\n}\n.ai-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow:\n    0 10px 30px rgb(37 99 235 / .32),\n    0 10px 32px rgb(240 101 58 / .28),\n    0 4px 14px rgb(139 92 246 / .24);\n}\n.ai-fab[_ngcontent-%COMP%]:hover::after {\n  animation-duration: 1.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-fab[_ngcontent-%COMP%]::after {\n    animation: none;\n    opacity: 0;\n  }\n  .ai-fab[_ngcontent-%COMP%]::before {\n    opacity: .6;\n  }\n}\n.ai-fab[_ngcontent-%COMP%]:active {\n  transform: scale(.98);\n}\n.ai-fab-img[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin: -26px 0 -9.5px;\n  flex: none;\n}\n.ai-fab-txt[_ngcontent-%COMP%] {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: #1E2A5A;\n  white-space: nowrap;\n}\n.ai-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 18px;\n  bottom: 18px;\n  z-index: 1350;\n  width: 380px;\n  max-width: calc(100vw - 36px);\n  height: min(600px, calc(100vh - 96px));\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #E7F0FE 0%,\n      #EDEAFB 48%,\n      #FCE8DC 100%);\n  border: 1px solid rgb(255 255 255 / .65);\n  border-radius: var(--radius-2xl, 16px);\n  box-shadow: var(--shadow-regular-lg, var(--shadow-regular-md));\n  overflow: visible;\n  animation: _ngcontent-%COMP%_ai-pop .28s var(--ease-out, ease-out);\n}\n@keyframes _ngcontent-%COMP%_ai-pop {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.ai-panel--right[_ngcontent-%COMP%] {\n  top: 54px;\n  right: 0;\n  bottom: 0;\n  height: auto;\n  border-radius: 0;\n  border: 0;\n  border-left: 1px solid var(--border-sub);\n}\n.ai-panel--left[_ngcontent-%COMP%] {\n  top: 54px;\n  left: 0;\n  right: auto;\n  bottom: 0;\n  height: auto;\n  border-radius: 0;\n  border: 0;\n  border-right: 1px solid var(--border-sub);\n}\n.ai-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  margin: 0 8px 8px;\n  background: var(--bg-surface);\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 -2px 8px rgb(0 0 0 / .05);\n}\n.ai-panel--right[_ngcontent-%COMP%]   .ai-body[_ngcontent-%COMP%], \n.ai-panel--left[_ngcontent-%COMP%]   .ai-body[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0 0;\n  margin-bottom: 0;\n}\n.ai-dock-bd[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1;\n}\n.ai-dock-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 52px;\n  right: 40px;\n  z-index: 2;\n  min-width: 168px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-md);\n}\n.ai-dock-it[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 11px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  cursor: pointer;\n  text-align: left;\n}\n.ai-dock-it[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.ai-dock-it.on[_ngcontent-%COMP%] {\n  background: #EDEAFB;\n  color: #1E2A5A;\n}\n.ai-head[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 76px;\n  padding: 10px 12px 10px 98px;\n}\n.ai-mascot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 9px;\n  z-index: 0;\n}\n.ai-mascot--fb[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  left: 20px;\n  top: 12px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #1D4ED8);\n  color: #fff;\n}\n.ai-head-t[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ai-head-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-bold, 700);\n  color: #1E2A5A;\n}\n.ai-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.4;\n  background: #1E2A5A;\n  color: #fff;\n  border-radius: 6px;\n  padding: 1px 6px;\n}\n.ai-head-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: #1E2A5A;\n  opacity: .72;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ai-head-ico[_ngcontent-%COMP%] {\n  color: #1E2A5A;\n}\n.ai-head-ico[_ngcontent-%COMP%]:hover {\n  background: rgb(30 42 90 / .08);\n  color: #1E2A5A;\n}\n.ai-log[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ai-input[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.ai-m[_ngcontent-%COMP%] {\n  max-width: 88%;\n  font-size: var(--fs-13);\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n.ai-m--u[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background: var(--secondary, var(--bg-surface-subtle));\n  color: var(--text-strong);\n  padding: 8px 12px;\n  border-radius: var(--radius-lg);\n}\n.ai-m--b[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  color: var(--text-body);\n}\n.ai-sug[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n}\n.fb-ai-chip[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  padding: 4px 11px;\n  font: inherit;\n  font-size: var(--fs-12);\n  color: var(--text-body);\n  cursor: pointer;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n}\n.fb-ai-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-input[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 10px 12px 12px;\n}\n.ai-input-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 4px 10px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: 16px;\n  background: var(--bg-surface);\n  transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);\n}\n.ai-input-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base) 12%, transparent);\n}\n.ai-input-box[_ngcontent-%COMP%]     .ant-input {\n  border: 0 !important;\n  box-shadow: none !important;\n  background: transparent;\n  padding-inline: 2px;\n}\n.ai-input-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ai-rnd[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: 50%;\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  flex: none;\n}\n.ai-rnd[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-chip-b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  padding: 5px 12px;\n  font: inherit;\n  font-size: var(--fs-12);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  cursor: pointer;\n}\n.ai-chip-b[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ai-talk[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 0;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  padding: 7px 16px;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  cursor: pointer;\n}\n.ai-talk[_ngcontent-%COMP%]:hover {\n  filter: brightness(.95);\n}\n.rl[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.rl-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-soft);\n}\n.rl-no[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-12);\n  font-weight: var(--font-bold, 700);\n}\n.rl-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  padding: 4px 6px;\n  border-radius: var(--radius-sm);\n}\n.rl-name[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-sub);\n}\n.rl-name[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.rl-sec[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n}\n.rl-sec[_ngcontent-%COMP%]    + .rl-sec[_ngcontent-%COMP%] {\n  border-top: 1px dashed var(--border-soft);\n}\n.rl-kw[_ngcontent-%COMP%] {\n  flex: none;\n  width: 84px;\n  padding-top: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--warning-base);\n}\n.rl-kw--do[_ngcontent-%COMP%] {\n  color: var(--success-base, var(--primary-base));\n}\n.rl-rows[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rl-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: nowrap;\n}\n@media (max-width: 720px) {\n  .rl-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.rl-row--act[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.rl-and[_ngcontent-%COMP%] {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.rl-and-sel[_ngcontent-%COMP%]     .ant-select-selection-item {\n  font-size: var(--fs-12);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.rl-w-f[_ngcontent-%COMP%] {\n  flex: 1 1 190px;\n  min-width: 150px;\n}\n.rl-w-op[_ngcontent-%COMP%] {\n  flex: 0 1 170px;\n  min-width: 132px;\n}\n.rl-w-kind[_ngcontent-%COMP%] {\n  flex: none;\n}\n.rl-w-v[_ngcontent-%COMP%] {\n  flex: 1 1 170px;\n  min-width: 132px;\n}\n.rl-and-sel[_ngcontent-%COMP%] {\n  width: 84px;\n  flex: 0 0 84px;\n}\n.rl-formula[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n.rl-formula[_ngcontent-%COMP%]     textarea {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n}\n.rl-fx-hint[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=sg-form-builder.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgFormBuilder, [{
    type: Component,
    args: [{ selector: "sg-form-builder", imports: [
      FormsModule,
      TablerIconComponent,
      CdkDropListGroup,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      CdkDragPlaceholder,
      CdkTrapFocus,
      HrmButton,
      HrmDatePicker,
      HrmInput,
      HrmInputNumber,
      HrmSegmented,
      HrmSelect,
      HrmSwitch,
      HrmTag,
      HrmTextarea,
      HrmTimePicker,
      SgFormRenderer,
      SgVnaiMascot
    ], template: `
    @if (open()) {
      <div class="fb" cdkDropListGroup>
        <!-- \u2550\u2550\u2550 TOP BAR \u2550\u2550\u2550 -->
        <header class="fb-top">
          <div class="fb-top-l">
            <button type="button" class="fb-ico" [attr.aria-label]="tr('closeBuilder')" (click)="close()"><tabler-icon [icon]="icX" [size]="20" /></button>
            <span class="fb-brand"><tabler-icon [icon]="icForms" [size]="18" /> {{ tr('brand') }}</span>
            <span class="fb-top-sep"></span>
            <input class="fb-name" [ngModel]="schema().name" (ngModelChange)="renameForm($event)" [placeholder]="tr('formNamePh')" [attr.aria-label]="tr('formNamePh')" />
          </div>
          <div class="fb-top-c">
            <span class="fb-hist">
              <button type="button" class="fb-ico" [disabled]="!undoCount()" [title]="tr('undo')" (click)="undo()"><tabler-icon [icon]="icUndo" [size]="18" /></button>
              <button type="button" class="fb-ico" [disabled]="!redoCount()" [title]="tr('redo')" (click)="redo()"><tabler-icon [icon]="icRedo" [size]="18" /></button>
            </span>
            <span class="fb-top-sep"></span>
            <span class="fb-dev">
              <button type="button" class="fb-dev-b" [class.on]="device() === 'desktop'" [title]="tr('desktop')" (click)="device.set('desktop')"><tabler-icon [icon]="icDesk" [size]="17" /></button>
              <button type="button" class="fb-dev-b" [class.on]="device() === 'tablet'" [title]="tr('tablet')" (click)="device.set('tablet')"><tabler-icon [icon]="icTab" [size]="17" /></button>
              <button type="button" class="fb-dev-b" [class.on]="device() === 'mobile'" [title]="tr('mobile')" (click)="device.set('mobile')"><tabler-icon [icon]="icMob" [size]="17" /></button>
            </span>
            <!-- Xem form theo 2 ch\u1EBF \u0111\u1ED9 S\xC1NG/T\u1ED0I (c\u1EE5c b\u1ED9 canvas \u2014 builder gi\u1EEF theme app) -->
            <span class="fb-dev">
              <button type="button" class="fb-dev-b" [class.on]="!canvasDark()" [title]="tr('lightMode')" (click)="canvasDark.set(false)"><tabler-icon [icon]="icSun" [size]="17" /></button>
              <button type="button" class="fb-dev-b" [class.on]="canvasDark()" [title]="tr('darkMode')" (click)="canvasDark.set(true)"><tabler-icon [icon]="icMoon" [size]="17" /></button>
            </span>
          </div>
          <div class="fb-top-r">
            <hrm-button variant="default" (click)="rulesOpen.set(true)">
              <tabler-icon [icon]="icBolt" [size]="17" /> {{ tr('rules') }}
              @if (schema().rules.length) { <span class="fb-rules-n">{{ schema().rules.length }}</span> }
            </hrm-button>
            <hrm-button variant="default" (click)="openPreview()"><tabler-icon [icon]="icEye" [size]="17" /> {{ tr('preview') }}</hrm-button>
            <!-- L\u01B0u nh\xE1p = secondary (n\u1EC1n x\xE1m token) \xB7 Xu\u1EA5t b\u1EA3n = primary CTA -->
            <hrm-button class="fb-btn-sec" variant="default" (click)="save()"><tabler-icon [icon]="icSave" [size]="17" /> {{ tr('save') }}</hrm-button>
            <hrm-button variant="primary" (click)="publishOpen.set(true)">
              <tabler-icon [icon]="icDb" [size]="17" /> {{ tr('publish') }}
              @if (draftFields().length) { <span class="fb-rules-n fb-rules-n--onp">{{ draftFields().length }}</span> }
            </hrm-button>
          </div>
        </header>

        <div class="fb-main" [style.gridTemplateColumns]="mainCols()">
          <!-- \u2550\u2550\u2550 PANEL TH\xC0NH PH\u1EA6N TR\xC1I (thu g\u1ECDn \u0111\u01B0\u1EE3c) \u2550\u2550\u2550 -->
          <aside class="fb-pal" [class.is-closed]="!leftOpen()">
            <div class="fb-pal-search">
              <hrm-input [(ngModel)]="palQueryModel" [placeholder]="tr('searchPh')" [prefixIcon]="icSearch" />
            </div>
            <div class="fb-pal-scroll" cdkDropList [cdkDropListData]="PALETTE" cdkDropListSortingDisabled [cdkDropListEnterPredicate]="denyDrop">
              @for (g of groups(); track g.key) {
                <div class="fb-pal-grp">{{ g.label }}</div>
                @for (p of g.items; track p.label) {
                  <button type="button" class="fb-pal-item" cdkDrag [cdkDragData]="p" (click)="appendField(p)" [attr.title]="tr('palHint')">
                    <span class="fb-pal-ic"><tabler-icon [icon]="$any(p.icon)" [size]="16" /></span>
                    <span class="fb-pal-lb">{{ p.name }}</span>
                    <span class="fb-pal-add"><tabler-icon [icon]="icPlus" [size]="14" /></span>
                    <div class="fb-pal-item is-ghost" *cdkDragPlaceholder>
                      <span class="fb-pal-ic"><tabler-icon [icon]="$any(p.icon)" [size]="16" /></span>
                      <span class="fb-pal-lb">{{ p.name }}</span>
                    </div>
                  </button>
                }
              }
            </div>
          </aside>

          <!-- \u2550\u2550\u2550 CANVAS GI\u1EEEA (class dark \u2192 token t\u1EF1 flip c\u1EE5c b\u1ED9) \u2550\u2550\u2550 -->
          <main class="fb-canvas" [class.dark]="canvasDark()" (click)="select(null)">
            <div class="fb-sheet" [style.maxWidth.px]="sheetW()" [class.dark]="cvTheme().dark"
              [style.--primary-base]="cvTheme().primary || null"
              [style.--radius-md]="thRadiusMd()"
              [style.--radius-lg]="thRadiusLg()"
              [style.background]="cvTheme().dark ? 'var(--bg-surface)' : (cvTheme().sheetBg || null)"
              (click)="$event.stopPropagation()">
              <div class="fb-sheet-head" [class.is-on]="selectedId() === '__form'"
                [class.is-solid]="cvTheme().header === 'solid'"
                [style.background]="cvTheme().header === 'solid' ? (cvTheme().primary || 'var(--primary-base)') : null"
                (click)="select('__form')">
                <div class="fb-sheet-title">{{ schema().name || tr('untitled') }}</div>
                @if (schema().desc) { <div class="fb-sheet-desc">{{ schema().desc }}</div> }
              </div>

              @for (sec of schema().sections; track sec.id; let si = $index) {
                <section class="fb-sec">
                  <div class="fb-sec-bar">
                    <input class="fb-sec-title" [ngModel]="sec.title" (ngModelChange)="patchSection(sec.id, $event)" [placeholder]="tr('secTitlePh')" [attr.aria-label]="tr('secTitlePh')" />
                    <span class="fb-sec-acts">
                      <button type="button" class="fb-mini" [title]="tr('addSecBelow')" (click)="addSection(si)"><tabler-icon [icon]="icPlus" [size]="14" /></button>
                      @if (schema().sections.length > 1) {
                        <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delSec')" (click)="removeSection(sec.id)"><tabler-icon [icon]="icTrash" [size]="14" /></button>
                      }
                    </span>
                  </div>

                  <div class="fb-sec-grid" cdkDropList cdkDropListOrientation="mixed"
                    [cdkDropListData]="sec.fields" (cdkDropListDropped)="onDrop($event, sec)">
                    @for (f of sec.fields; track f.id) {
                      <div class="fb-cell" [style.gridColumn]="'span ' + spanCols(f)" cdkDrag [cdkDragData]="f">
                        <div class="fb-item" [class.is-on]="selectedId() === f.id" (click)="select(f.id)">
                          <span class="fb-tag">{{ f.label || typeLabel(f.type) }}</span>
                          <span class="fb-chip">
                            <span class="fb-chip-b fb-chip-drag" cdkDragHandle [title]="tr('dragMove')"><tabler-icon [icon]="icGrip" [size]="14" /></span>
                            <button type="button" class="fb-chip-b" [title]="tr('duplicate')" (click)="duplicate(f, sec); $event.stopPropagation()"><tabler-icon [icon]="icCopy" [size]="14" /></button>
                            <button type="button" class="fb-chip-b fb-chip-b--danger" [title]="tr('delField')" (click)="removeField(f, sec); $event.stopPropagation()"><tabler-icon [icon]="icTrash" [size]="14" /></button>
                          </span>

                          @switch (f.type) {
                            @case ('heading') { <div class="cv-heading">{{ f.label }}</div> }
                            @case ('divider') { <hr class="cv-divider" /> }
                            @default {
                              <div class="cv-field">
                                <!-- Label + * \u0111\u1ECF + tag DS (Logic/\u1EA8n) K\u1EBE B\xCAN label \u2014 theo y\xEAu c\u1EA7u audit -->
                                <span class="cv-lbl">{{ f.label }} @if (f.required) { <b class="cv-req">*</b> }
                                  @if (hasLogic(f)) {
                                    <!-- Chip s\u1EA5m s\xE9t n\u1EC1n secondary \u2014 hover hi\u1EC7n logic l\xE0 QUY T\u1EAEC/S\u1EF0 KI\u1EC6N g\xEC -->
                                    <span class="cv-logic" (mouseenter)="logicTipFor.set(f.id)" (mouseleave)="logicTipFor.set(null)">
                                      <tabler-icon [icon]="icBolt" [size]="12" />
                                      @if (logicTipFor() === f.id) {
                                        <span class="cv-logic-tip">
                                          <span class="cv-logic-t">{{ tr('logicTipTitle') }}</span>
                                          @for (l of logicLines(f); track $index) { <span class="cv-logic-line">{{ l }}</span> }
                                        </span>
                                      }
                                    </span>
                                  }
                                  @if (f.hidden) { <hrm-tag color="gray" variant="stroke">{{ tr('tagHidden') }}</hrm-tag> }
                                  @if (f.draft) { <hrm-tag color="gold" variant="stroke">{{ tr('tagDraft') }}</hrm-tag> }
                                </span>
                                @switch (f.type) {
                                  @case ('textarea') { <span class="cv-box cv-box--area">{{ f.placeholder || ' ' }}</span> }
                                  @case ('select') { <span class="cv-box">{{ f.placeholder || tr('rSelectPh') }}<tabler-icon class="cv-chev" [icon]="icChev" [size]="15" /></span> }
                                  @case ('multiselect') { <span class="cv-box">{{ f.placeholder || tr('rMultiPh') }}<tabler-icon class="cv-chev" [icon]="icChev" [size]="15" /></span> }
                                  @case ('user') { <span class="cv-box">{{ f.placeholder || tr('rUserPh') }}<tabler-icon class="cv-chev" [icon]="icChev" [size]="15" /></span> }
                                  @case ('radio') {
                                    <span class="cv-opts">
                                      @for (o of f.options || []; track o) {
                                        <span class="cv-radio"><span class="cv-radio-dot" [class.is-on]="o === f.defaultValue"></span>{{ o }}</span>
                                      }
                                    </span>
                                  }
                                  @case ('checkbox') {
                                    <span class="cv-opts">
                                      @for (o of f.options || []; track o) { <span class="cv-check"><span class="cv-check-box"></span>{{ o }}</span> }
                                    </span>
                                  }
                                  @case ('toggle') { <span class="cv-toggle"><span class="cv-toggle-knob"></span></span> }
                                  @case ('rating') {
                                    <span class="cv-stars">
                                      @for (s of starsOf(f); track s) { <tabler-icon [icon]="icStar" [size]="17" /> }
                                    </span>
                                  }
                                  @case ('percent') { <span class="cv-box">{{ f.placeholder || '0' }}<span class="cv-suffix">%</span></span> }
                                  @case ('money') {
                                    <span class="cv-money">
                                      <span class="cv-box cv-money-n">{{ f.placeholder || '0' }}</span>
                                      <span class="cv-box cv-money-u">{{ f.defaultUnit || 'VN\u0110' }}<tabler-icon class="cv-chev" [icon]="icChev" [size]="14" /></span>
                                    </span>
                                  }
                                  @case ('autocode') { <span class="cv-box cv-mono">{{ (f.codePrefix || 'AUTO-') + '###' }}</span> }
                                  @case ('upload') { <span class="cv-drop">{{ tr('rUpload1') }} {{ tr('rUpload2') }}</span> }
                                  @case ('image') { <span class="cv-drop">{{ tr('rImage') }}</span> }
                                  @default { <span class="cv-box">{{ f.placeholder || ' ' }}</span> }
                                }
                                @if (f.helper) { <span class="cv-help">{{ f.helper }}</span> }
                              </div>
                            }
                          }
                        </div>
                        <div class="fb-cell-ph" *cdkDragPlaceholder></div>
                      </div>
                    }
                    @if (!sec.fields.length) {
                      <div class="fb-empty">{{ tr('emptySec') }}</div>
                    }
                  </div>
                </section>
              }

              <button type="button" class="fb-addsec" (click)="addSection(schema().sections.length - 1)">
                <tabler-icon [icon]="icPlus" [size]="15" /> {{ tr('addSection') }}
              </button>
            </div>

            <!-- N\xFAt THU G\u1ECCN 2 panel \u2014 g\xF3c d\u01B0\u1EDBi tr\xE1i/ph\u1EA3i (ki\u1EC3u Vueform) -->
            <button type="button" class="fb-side-tg fb-side-tg--l" [title]="leftOpen() ? tr('collapseLeft') : tr('expandLeft')" (click)="leftOpen.set(!leftOpen()); $event.stopPropagation()">
              <tabler-icon [icon]="leftOpen() ? icChevL : icChevR" [size]="16" />
            </button>
            <button type="button" class="fb-side-tg fb-side-tg--r" [title]="rightOpen() ? tr('collapseRight') : tr('expandRight')" (click)="rightOpen.set(!rightOpen()); $event.stopPropagation()">
              <tabler-icon [icon]="rightOpen() ? icChevR : icChevL" [size]="16" />
            </button>
          </main>

          <!-- \u2550\u2550\u2550 PANEL PH\u1EA2I: THU\u1ED8C T\xCDNH (accordion) HO\u1EB6C TRANG TR\xCD (Giao di\u1EC7n) \u2550\u2550\u2550 -->
          <aside class="fb-props" [class.is-closed]="!rightOpen()" (click)="$event.stopPropagation()">
            @if (selectedField(); as f) {
              <div class="fb-props-h">
                <span class="fb-props-ic"><tabler-icon [icon]="$any(typeIcon(f.type))" [size]="16" /></span>
                <span class="fb-props-t">{{ typeLabel(f.type) }}</span>
                <code class="fb-props-key">{{ f.key }}</code>
                <button type="button" class="fb-ico fb-ico--sm" [attr.aria-label]="tr('deselect')" (click)="select(null)"><tabler-icon [icon]="icX" [size]="16" /></button>
              </div>

              <div class="fb-props-scroll">
                <!-- \u2500\u2500 THU\u1ED8C T\xCDNH \u2500\u2500 -->
                <div class="fa-sec">
                  <button type="button" class="fa-h" (click)="toggleSec('props')">
                    <span>{{ tr('secProps') }}</span><tabler-icon class="fa-caret" [class.is-open]="isSecOpen('props')" [icon]="icChev" [size]="15" />
                  </button>
                  @if (isSecOpen('props')) {
                    <div class="fa-body">
                      <!-- Nh\xE3n NG\xD4N NG\u1EEE CH\xCDNH + n\xFAt \u{1F310} (badge \u0111\xE3 d\u1ECBch/t\u1ED5ng) m\u1EDF b\u1EA3n d\u1ECBch c\xE1c ng\xF4n ng\u1EEF ph\u1EE5 -->
                      <div class="fp-row"><span class="fp-lbl">{{ tr('labelMain') }} <hrm-tag class="fp-lang-tag" color="blue" variant="stroke">{{ defLocaleNative() }}</hrm-tag></span>
                        <div class="fp-opt">
                          <hrm-input [ngModel]="f.label" (ngModelChange)="patchField(f.id, { label: $event })" />
                          @if (subLocales().length) {
                            <button type="button" class="fb-mini fp-globe" [class.on]="transOpen() === f.id" [title]="tr('translations')"
                              (click)="transOpen.set(transOpen() === f.id ? null : f.id)">
                              <tabler-icon [icon]="icLang" [size]="14" />
                              <span class="fp-globe-n">{{ transCount(f) }}/{{ activeLocales().length }}</span>
                            </button>
                          }
                        </div>
                      </div>
                      @if (transOpen() === f.id) {
                        <div class="fp-trans">
                          @for (lc of subLocales(); track lc.key) {
                            <label class="fp-row"><span class="fp-lbl">{{ lc.native }}
                              @if (!transVal(f, lc.key)) { <span class="fp-miss">{{ tr('transMissing') }}</span> }
                            </span>
                              <hrm-input [ngModel]="transVal(f, lc.key)" (ngModelChange)="patchLabelLocale(f, lc.key, $event)" [placeholder]="lc.native" /></label>
                          }
                          <div class="fp-hint">{{ tr('autoTranslate') }}</div>
                        </div>
                      }
                      @if (f.type !== 'heading' && f.type !== 'divider') {
                        @if (f.draft) {
                          <label class="fp-row"><span class="fp-lbl">{{ tr('dataKey') }}</span>
                            <hrm-input class="fp-mono" [ngModel]="f.key" (ngModelChange)="patchFieldKey(f, $event)" /></label>
                        } @else {
                          <!-- \u0110\xE3 xu\u1EA5t b\u1EA3n = c\u1ED9t DB th\u1EADt \u2192 kho\xE1 key (\u0111\u1ED5i t\xEAn c\u1ED9t l\xE0 migration r\u1EE7i ro) -->
                          <div class="fp-row"><span class="fp-lbl">{{ tr('dataKey') }}</span>
                            <span class="fp-keylock"><tabler-icon [icon]="icLock" [size]="13" /> {{ f.key }}</span></div>
                          <div class="fp-hint">{{ tr('keyLocked') }}</div>
                        }
                        @if (hasPlaceholder(f.type)) {
                          <label class="fp-row"><span class="fp-lbl">{{ tr('placeholder') }}</span>
                            <hrm-input [ngModel]="f.placeholder || ''" (ngModelChange)="patchField(f.id, { placeholder: $event })" /></label>
                        }
                        <label class="fp-row"><span class="fp-lbl">{{ tr('helper') }}</span>
                          <hrm-input [ngModel]="f.helper || ''" (ngModelChange)="patchField(f.id, { helper: $event })" /></label>
                      }
                      <div class="fp-row fp-row--inline">
                        <span class="fp-lbl">{{ tr('hiddenToggle') }}</span>
                        <hrm-switch [ngModel]="!!f.hidden" (ngModelChange)="patchField(f.id, { hidden: $event })" />
                      </div>
                      @if (f.type !== 'heading' && f.type !== 'divider') {
                        <!-- Th\u1EE9 t\u1EF1 c\u1ED1 \u0111\u1ECBnh: B\u1EAFt bu\u1ED9c nh\u1EADp \xB7 Ch\u1EC9 \u0111\u1ECDc \xB7 Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh -->
                        <div class="fp-row fp-row--inline">
                          <span class="fp-lbl">{{ tr('required') }}</span>
                          <hrm-switch [ngModel]="!!f.required" (ngModelChange)="patchRequired(f, $event)" />
                        </div>
                        @if (f.required) {
                          <label class="fp-row"><span class="fp-lbl">{{ tr('requiredMsg') }}</span>
                            <hrm-input [ngModel]="f.requiredMsg || ''" (ngModelChange)="patchField(f.id, { requiredMsg: $event })" /></label>
                        }
                        <div class="fp-row fp-row--inline">
                          <span class="fp-lbl">{{ tr('readonly') }}</span>
                          <hrm-switch [ngModel]="!!f.readonly" (ngModelChange)="patchField(f.id, { readonly: $event })" />
                        </div>
                        <!-- Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh \u2014 CONTROL \u0110\xDANG KI\u1EC2U field -->
                        <label class="fp-row"><span class="fp-lbl">{{ tr('defaultValue') }}</span>
                          @switch (f.type) {
                            @case ('select') { <hrm-select [ngModel]="f.defaultValue || null" (ngModelChange)="patchField(f.id, { defaultValue: $event ?? '' })" [options]="customOpts(f)" /> }
                            @case ('radio') { <hrm-select [ngModel]="f.defaultValue || null" (ngModelChange)="patchField(f.id, { defaultValue: $event ?? '' })" [options]="customOpts(f)" /> }
                            @case ('user') { <hrm-select [ngModel]="f.defaultValue || null" (ngModelChange)="patchField(f.id, { defaultValue: $event ?? '' })" [options]="customOpts(f)" /> }
                            @case ('multiselect') { <hrm-select [multiple]="true" [ngModel]="csvArr(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: ($event || []).join(',') })" [options]="customOpts(f)" /> }
                            @case ('checkbox') { <hrm-select [multiple]="true" [ngModel]="csvArr(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: ($event || []).join(',') })" [options]="customOpts(f)" /> }
                            @case ('toggle') { <span><hrm-switch [ngModel]="f.defaultValue === 'true'" (ngModelChange)="patchField(f.id, { defaultValue: $event ? 'true' : '' })" /></span> }
                            @case ('number') { <hrm-input-number [ngModel]="numOrNull(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: $event != null ? String($event) : '' })" /> }
                            @case ('percent') { <hrm-input-number [ngModel]="numOrNull(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: $event != null ? String($event) : '' })" unit="%" /> }
                            @case ('money') { <hrm-input-number [ngModel]="numOrNull(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: $event != null ? String($event) : '' })" /> }
                            @case ('rating') { <hrm-input-number [ngModel]="numOrNull(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: $event != null ? String($event) : '' })" [min]="0" [precision]="0" /> }
                            @case ('date') { <hrm-date-picker [ngModel]="dmyToDate(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: dateToDmy($event) })" placeholder="dd/MM/yyyy" /> }
                            @case ('time') { <hrm-time-picker [ngModel]="hmToDate(f.defaultValue)" (ngModelChange)="patchField(f.id, { defaultValue: dateToHm($event) })" placeholder="HH:mm" /> }
                            @case ('textarea') { <hrm-textarea [ngModel]="f.defaultValue || ''" (ngModelChange)="patchField(f.id, { defaultValue: $event })" [minRows]="2" [maxRows]="4" /> }
                            @default { <hrm-input [ngModel]="f.defaultValue || ''" (ngModelChange)="patchField(f.id, { defaultValue: $event })" /> }
                          }
                        </label>
                        @if (hasOptions(f.type) || f.type === 'money' || f.type === 'autocode') { <hr class="fp-sep" /> }
                        @if (hasOptions(f.type)) {
                          <!-- \u0110\u1EB6C T\u1EA2 Datasource: T\u1EF1 thi\u1EBFt l\u1EADp \xB7 SQL \xB7 API \xB7 Enum -->
                          <div class="fp-row"><span class="fp-lbl">{{ tr('datasource') }}</span>
                            <hrm-segmented [options]="dsOpts()" [ngModel]="f.datasource || 'custom'" (ngModelChange)="patchField(f.id, { datasource: $event })" /></div>
                          @if ((f.datasource || 'custom') === 'custom') {
                            <div class="fp-lbl fp-lbl--solo">{{ tr('optionsList') }}</div>
                            @for (o of f.options || []; track $index) {
                              <div class="fp-opt">
                                <hrm-input [ngModel]="o" (ngModelChange)="setOption(f, $index, $event)" />
                                @if (isDupOption(f, $index)) { <span class="fp-miss">{{ tr('optDup') }}</span> }
                                <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delOption')" (click)="removeOption(f, $index)"><tabler-icon [icon]="icTrash" [size]="13" /></button>
                              </div>
                            }
                            <button type="button" class="fp-add" (click)="addOption(f)"><tabler-icon [icon]="icPlus" [size]="14" /> {{ tr('addOption') }}</button>
                          } @else if (f.datasource === 'sql') {
                            <!-- SQL: ch\u1ECDn STORED PROCEDURE t\u1EEB danh m\u1EE5c h\u1EC7 th\u1ED1ng + mapping c\u1ED9t -->
                            <label class="fp-row"><span class="fp-lbl">{{ tr('dsProc') }}</span>
                              <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.proc || null" (ngModelChange)="pickProc(f, $event)" [options]="sqlProcOpts()" [placeholder]="tr('dsProcPh')" /></label>
                            @if (f.dsMeta?.proc) {
                              <!-- C\u1ED9t = CH\u1ECCN trong t\u1EADp c\u1ED9t proc tr\u1EA3 v\u1EC1 (t\u1EF1 \u0111i\u1EC1n s\u1EB5n m\xE3/t\xEAn) \u2014 kh\xF4ng g\xF5 tay -->
                              <div class="fp-2col">
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsValueCol') }}</span>
                                  <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.valueCol || null" (ngModelChange)="patchDsMeta(f, { valueCol: $event })" [options]="procColOpts(f)" [allowClear]="false" [showSearch]="false" /></label>
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsLabelCol') }}</span>
                                  <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.labelCol || null" (ngModelChange)="patchDsMeta(f, { labelCol: $event })" [options]="procColOpts(f)" [allowClear]="false" [showSearch]="false" /></label>
                              </div>
                              <!-- Tham s\u1ED1 proc Y\xCAU C\u1EA6U (t\xEAn c\u1ED1 \u0111\u1ECBnh) \u2014 gi\xE1 tr\u1ECB ch\u1ECDn: tr\u01B0\u1EDDng form / c\u1ED1 \u0111\u1ECBnh -->
                              @for (pn of procParams(f); track pn) {
                                <div class="fp-lbl fp-lbl--solo fp-mono">{{ tr('dsParamOf', { p: pn }) }}</div>
                                <div class="fp-cond fp-cond--act">
                                  <hrm-segmented class="fp-seg-param" [block]="true" [options]="paramKindOpts()" [ngModel]="paramOf(f, pn).kind" (ngModelChange)="patchParam(f, pn, { kind: $event })" />
                                  @if (paramOf(f, pn).kind === 'field') {
                                    <hrm-select [ngModel]="paramOf(f, pn).val || null" (ngModelChange)="patchParam(f, pn, { val: $event })" [options]="otherFieldOpts(f)" [placeholder]="tr('pickField')" />
                                  } @else {
                                    <hrm-input class="fp-mono" [ngModel]="paramOf(f, pn).val" (ngModelChange)="patchParam(f, pn, { val: $event })" [placeholder]="tr('dsConstPh')" />
                                  }
                                </div>
                              }
                            }
                            @if (dsPreview(f); as pv) {
                              <div class="fp-lbl fp-lbl--solo">{{ tr('dsPreview', { n: pv.length }) }}</div>
                              <div class="fp-used">@for (o of pv; track o) { <hrm-tag color="gray" variant="stroke">{{ o }}</hrm-tag> }</div>
                            }
                            <div class="fp-hint">{{ tr('dsNote') }}</div>
                          } @else if (f.datasource === 'api') {
                            <!-- API: ch\u1ECDn t\u1EEB DANH M\u1EE4C \u0110\u0102NG K\xDD (nh\u01B0 proc) \u2014 dev ki\u1EC3m so\xE1t endpoint; c\xF3 tho\xE1t hi\u1EC3m URL tu\u1EF3 ch\u1EC9nh -->
                            <label class="fp-row"><span class="fp-lbl">{{ tr('dsApiPick') }}</span>
                              <hrm-select [ngModel]="f.dsMeta?.apiName || null" (ngModelChange)="pickApi(f, $event)" [options]="apiCatalogOpts()" [placeholder]="tr('dsProcPh')" /></label>
                            @if (f.dsMeta?.apiName === '__custom') {
                              <label class="fp-row"><span class="fp-lbl">{{ tr('dsUrl') }}</span>
                                <hrm-input class="fp-mono" [ngModel]="f.dsMeta?.url || ''" (ngModelChange)="patchDsMeta(f, { url: $event })" placeholder="/api/danh-muc/phong-ban" /></label>
                              <div class="fp-row"><span class="fp-lbl">{{ tr('dsMethod') }}</span>
                                <hrm-segmented [options]="methodOpts()" [ngModel]="f.dsMeta?.method || 'GET'" (ngModelChange)="patchDsMeta(f, { method: $event })" /></div>
                              <label class="fp-row"><span class="fp-lbl">{{ tr('dsPath') }}</span>
                                <hrm-input class="fp-mono" [ngModel]="f.dsMeta?.path || ''" (ngModelChange)="patchDsMeta(f, { path: $event })" placeholder="data.items" /></label>
                              <div class="fp-2col">
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsValueField') }}</span>
                                  <hrm-input class="fp-mono" [ngModel]="f.dsMeta?.valueField || ''" (ngModelChange)="patchDsMeta(f, { valueField: $event })" placeholder="id" /></label>
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsLabelField') }}</span>
                                  <hrm-input class="fp-mono" [ngModel]="f.dsMeta?.labelField || ''" (ngModelChange)="patchDsMeta(f, { labelField: $event })" placeholder="name" /></label>
                              </div>
                            } @else if (f.dsMeta?.apiName) {
                              <div class="fp-hint fp-mono">{{ apiUrlOf(f) }}</div>
                              <div class="fp-2col">
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsValueField') }}</span>
                                  <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.valueField || null" (ngModelChange)="patchDsMeta(f, { valueField: $event })" [options]="apiFieldOpts(f)" [allowClear]="false" [showSearch]="false" /></label>
                                <label class="fp-row"><span class="fp-lbl">{{ tr('dsLabelField') }}</span>
                                  <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.labelField || null" (ngModelChange)="patchDsMeta(f, { labelField: $event })" [options]="apiFieldOpts(f)" [allowClear]="false" [showSearch]="false" /></label>
                              </div>
                              @for (pn of apiParams(f); track pn) {
                                <div class="fp-lbl fp-lbl--solo fp-mono">{{ tr('dsParamOf', { p: pn }) }}</div>
                                <div class="fp-cond fp-cond--act">
                                  <hrm-segmented class="fp-seg-param" [block]="true" [options]="paramKindOpts()" [ngModel]="paramOf(f, pn).kind" (ngModelChange)="patchParam(f, pn, { kind: $event })" />
                                  @if (paramOf(f, pn).kind === 'field') {
                                    <hrm-select [ngModel]="paramOf(f, pn).val || null" (ngModelChange)="patchParam(f, pn, { val: $event })" [options]="otherFieldOpts(f)" [placeholder]="tr('pickField')" />
                                  } @else {
                                    <hrm-input class="fp-mono" [ngModel]="paramOf(f, pn).val" (ngModelChange)="patchParam(f, pn, { val: $event })" [placeholder]="tr('dsConstPh')" />
                                  }
                                </div>
                              }
                            }
                            @if (dsPreview(f); as pv) {
                              <div class="fp-lbl fp-lbl--solo">{{ tr('dsPreview', { n: pv.length }) }}</div>
                              <div class="fp-used">@for (o of pv; track o) { <hrm-tag color="gray" variant="stroke">{{ o }}</hrm-tag> }</div>
                            }
                            <div class="fp-hint">{{ tr('dsNote') }}</div>
                          } @else {
                            <!-- ENUM: ch\u1ECDn t\u1EEB danh m\u1EE5c Enum h\u1EC7 th\u1ED1ng \u2014 demo load options TH\u1EACT -->
                            <label class="fp-row"><span class="fp-lbl">{{ tr('dsEnumPick') }}</span>
                              <hrm-select class="fp-mono" [ngModel]="f.dsMeta?.enumName || null" (ngModelChange)="patchDsMeta(f, { enumName: $event })" [options]="enumOpts()" [placeholder]="tr('dsEnumPh')" /></label>
                            @if (dsPreview(f); as pv) {
                              <div class="fp-lbl fp-lbl--solo">{{ tr('dsPreview', { n: pv.length }) }}</div>
                              <div class="fp-used">@for (o of pv; track o) { <hrm-tag color="gray" variant="stroke">{{ o }}</hrm-tag> }</div>
                            }
                            <div class="fp-hint">{{ tr('dsEnumNote') }}</div>
                          }
                        }
                        @if (f.type === 'money') {
                          <label class="fp-row"><span class="fp-lbl">{{ tr('moneyUnits') }}</span>
                            <hrm-input [ngModel]="f.unitOptions || ''" (ngModelChange)="patchField(f.id, { unitOptions: $event })" placeholder="VN\u0110,USD,EUR" /></label>
                          <label class="fp-row"><span class="fp-lbl">{{ tr('moneyUnitDefault') }}</span>
                            <hrm-select [ngModel]="f.defaultUnit || null" (ngModelChange)="patchField(f.id, { defaultUnit: $event })" [options]="unitOptsOf(f)" [allowClear]="false" [showSearch]="false" /></label>
                        }
                        @if (f.type === 'autocode') {
                          <label class="fp-row"><span class="fp-lbl">{{ tr('codePrefix') }}</span>
                            <hrm-input class="fp-mono" [ngModel]="f.codePrefix || ''" (ngModelChange)="patchField(f.id, { codePrefix: $event })" placeholder="G-" /></label>
                          <div class="fp-hint">{{ tr('codeHint', { p: f.codePrefix || 'G-' }) }}</div>
                        }
                      }
                    </div>
                  }
                </div>

                @if (f.type !== 'heading' && f.type !== 'divider') {
                  <!-- \u2500\u2500 B\u1ED0 C\u1EE4C \u2500\u2500 -->
                  <div class="fa-sec">
                    <button type="button" class="fa-h" (click)="toggleSec('layout')">
                      <span>{{ tr('secLayout') }}</span><tabler-icon class="fa-caret" [class.is-open]="isSecOpen('layout')" [icon]="icChev" [size]="15" />
                    </button>
                    @if (isSecOpen('layout')) {
                      <div class="fa-body">
                        <div class="fp-row"><span class="fp-lbl">{{ tr('widthCols') }}</span>
                          <hrm-segmented [block]="true" [options]="spanOpts()" [ngModel]="f.span" (ngModelChange)="patchField(f.id, { span: $event })" /></div>
                      </div>
                    }
                  </div>

                  <!-- \u2500\u2500 R\xC0NG BU\u1ED8C D\u1EEE LI\u1EC6U (ch\u1EC9 hi\u1EC7n khi lo\u1EA1i field C\xD3 r\xE0ng bu\u1ED9c ri\xEAng) \u2500\u2500 -->
                  @if (hasConstraints(f.type)) {
                  <div class="fa-sec">
                    <button type="button" class="fa-h" (click)="toggleSec('valid')">
                      <span>{{ tr('secValid') }}</span><tabler-icon class="fa-caret" [class.is-open]="isSecOpen('valid')" [icon]="icChev" [size]="15" />
                    </button>
                    @if (isSecOpen('valid')) {
                      <div class="fa-body">

                        @if (isTextType(f.type)) {
                          <div class="fp-2col">
                            <label class="fp-row"><span class="fp-lbl">{{ tr('minLen') }}</span>
                              <hrm-input-number [ngModel]="f.constraints?.minLen ?? null" (ngModelChange)="patchCon(f, { minLen: $event ?? undefined })" [min]="0" [precision]="0" placeholder="T\u1ED1i thi\u1EC3u" /></label>
                            <label class="fp-row"><span class="fp-lbl">{{ tr('maxLen') }}</span>
                              <hrm-input-number [ngModel]="f.constraints?.maxLen ?? null" (ngModelChange)="patchCon(f, { maxLen: $event ?? undefined })" [min]="0" [precision]="0" placeholder="T\u1ED1i \u0111a" /></label>
                          </div>
                          <label class="fp-row"><span class="fp-lbl">{{ tr('forbidden') }}</span>
                            <hrm-input [ngModel]="f.constraints?.forbidden || ''" (ngModelChange)="patchCon(f, { forbidden: $event })" placeholder="VD: admin, test" /></label>
                        }
                        @if (isNumType(f.type)) {
                          <div class="fp-2col">
                            <label class="fp-row"><span class="fp-lbl">{{ tr('minVal') }}</span>
                              <hrm-input-number [ngModel]="numOrNull(f.constraints?.min)" (ngModelChange)="patchCon(f, { min: $event != null ? String($event) : undefined })" placeholder="T\u1ED1i thi\u1EC3u" /></label>
                            <label class="fp-row"><span class="fp-lbl">{{ tr('maxVal') }}</span>
                              <hrm-input-number [ngModel]="numOrNull(f.constraints?.max)" (ngModelChange)="patchCon(f, { max: $event != null ? String($event) : undefined })" placeholder="T\u1ED1i \u0111a" /></label>
                          </div>
                          @if (minGtMax(f)) { <span class="fp-miss">{{ tr('minGtMax') }}</span> }
                          <!-- \u0110\u1EB6C T\u1EA2 Number \xABKh\xE1c c\xE1c gi\xE1 tr\u1ECB c\u1EE5 th\u1EC3\xBB -->
                          <label class="fp-row"><span class="fp-lbl">{{ tr('exclNum') }}</span>
                            <hrm-input [ngModel]="f.constraints?.excluded || ''" (ngModelChange)="patchCon(f, { excluded: $event })" placeholder="VD: 0, 13, 999" /></label>
                          <div class="fp-row"><span class="fp-lbl">{{ tr('numFmt') }}</span>
                            <hrm-segmented [options]="numFmtOpts()" [ngModel]="f.constraints?.numberFormat || 'decimal'" (ngModelChange)="patchCon(f, { numberFormat: $event })" /></div>
                        }
                        @if (f.type === 'date' || f.type === 'time') {
                          @if (f.type === 'date') {
                            <!-- Min/Max ng\xE0y = DATE PICKER (kh\xF4ng c\xF2n \xF4 text t\u1EF1 do) -->
                            <div class="fp-2col">
                              <label class="fp-row"><span class="fp-lbl">{{ tr('fromDate') }}</span>
                                <hrm-date-picker [ngModel]="dmyToDate(f.constraints?.min)" (ngModelChange)="patchCon(f, { min: dateToDmy($event) })" placeholder="dd/MM/yyyy" /></label>
                              <label class="fp-row"><span class="fp-lbl">{{ tr('toDate') }}</span>
                                <hrm-date-picker [ngModel]="dmyToDate(f.constraints?.max)" (ngModelChange)="patchCon(f, { max: dateToDmy($event) })" placeholder="dd/MM/yyyy" /></label>
                            </div>
                          }
                          @if (f.type === 'date') {
                            <!-- \u0110\u1EB6C T\u1EA2 Date: Th\u1EE9 trong tu\u1EA7n \xB7 Ng\xE0y l\u1EC5/T\u1EBFt \xB7 Kh\xE1c c\xE1c gi\xE1 tr\u1ECB c\u1EE5 th\u1EC3 -->
                            <label class="fp-row"><span class="fp-lbl">{{ tr('weekdaysAllow') }}</span>
                              <hrm-select [multiple]="true" [ngModel]="csvArr(f.constraints?.weekdays)" (ngModelChange)="patchCon(f, { weekdays: ($event || []).join(',') })" [options]="weekdayOpts()" [placeholder]="tr('weekdaysAllowPh')" /></label>
                            <div class="fp-row fp-row--inline">
                              <span class="fp-lbl">{{ tr('noHolidays') }}</span>
                              <hrm-switch [ngModel]="!!f.constraints?.noHolidays" (ngModelChange)="patchCon(f, { noHolidays: $event })" />
                            </div>
                            <label class="fp-row"><span class="fp-lbl">{{ tr('exclDates') }}</span>
                              <hrm-input [ngModel]="f.constraints?.excluded || ''" (ngModelChange)="patchCon(f, { excluded: $event })" placeholder="VD: 25/12/2026, 31/12/2026" /></label>
                          }
                          @if (f.type === 'time') {
                            <div class="fp-2col">
                              <label class="fp-row"><span class="fp-lbl">{{ tr('minVal') }}</span>
                                <hrm-time-picker [ngModel]="hmToDate(f.constraints?.min)" (ngModelChange)="patchCon(f, { min: dateToHm($event) })" placeholder="HH:mm" /></label>
                              <label class="fp-row"><span class="fp-lbl">{{ tr('maxVal') }}</span>
                                <hrm-time-picker [ngModel]="hmToDate(f.constraints?.max)" (ngModelChange)="patchCon(f, { max: dateToHm($event) })" placeholder="HH:mm" /></label>
                            </div>
                          }
                          <div class="fp-row"><span class="fp-lbl">{{ tr('displayFmt') }}</span>
                            <hrm-select [ngModel]="f.constraints?.dateFormat || (f.type === 'date' ? 'dd/MM/yyyy' : 'HH:mm')" (ngModelChange)="patchCon(f, { dateFormat: $event })" [options]="f.type === 'date' ? dateFmtOpts() : timeFmtOpts()" [allowClear]="false" /></div>
                          @if (f.constraints?.dateFormat === 'custom') {
                            <label class="fp-row"><span class="fp-lbl">{{ tr('customFmt') }}</span>
                              <hrm-input class="fp-mono" [ngModel]="f.constraints?.customFormat || ''" (ngModelChange)="patchCon(f, { customFormat: $event })" placeholder="VD: dd-MM-yyyy" /></label>
                          }
                        }
                        @if (f.type === 'upload') {
                          <div class="fp-2col">
                            <label class="fp-row"><span class="fp-lbl">{{ tr('maxFiles') }}</span>
                              <hrm-input-number [ngModel]="f.constraints?.maxFiles ?? null" (ngModelChange)="patchCon(f, { maxFiles: $event ?? undefined })" [min]="1" [precision]="0" placeholder="5" /></label>
                            <label class="fp-row"><span class="fp-lbl">{{ tr('maxSize') }}</span>
                              <hrm-input-number [ngModel]="f.constraints?.maxSizeMb ?? null" (ngModelChange)="patchCon(f, { maxSizeMb: $event ?? undefined })" [min]="1" placeholder="10" /></label>
                          </div>
                          <label class="fp-row"><span class="fp-lbl">{{ tr('fileTypes') }}</span>
                            <hrm-input [ngModel]="f.constraints?.fileTypes || ''" (ngModelChange)="patchCon(f, { fileTypes: $event })" placeholder="pdf,docx,xlsx" /></label>
                        }
                      </div>
                    }
                  </div>

                  }

                  <!-- \u2500\u2500 S\u1EF0 KI\u1EC6N \u2500\u2500 -->
                  <div class="fa-sec">
                    <button type="button" class="fa-h" (click)="toggleSec('event')">
                      <span>{{ tr('secEvent') }}</span><tabler-icon class="fa-caret" [class.is-open]="isSecOpen('event')" [icon]="icChev" [size]="15" />
                    </button>
                    @if (isSecOpen('event')) {
                      <div class="fa-body">
                        <div class="fp-lbl fp-lbl--solo">{{ tr('onChangeTitle') }}</div>
                        @for (a of f.onChange || []; track $index) {
                          <div class="fp-cond fp-cond--act">
                            <span class="fp-mini-lbl">{{ tr('setField') }}</span>
                            <hrm-select [ngModel]="a.set || null" (ngModelChange)="patchChange(f, $index, { set: $event })" [options]="otherFieldOpts(f)" [placeholder]="tr('pickField')" />
                            <!-- LOW-CODE A (ki\u1EC3u Power Fx): g\xE1n gi\xE1 tr\u1ECB c\u1ED1 \u0111\u1ECBnh HO\u1EB6C c\xF4ng th\u1EE9c -->
                            <hrm-segmented class="fp-seg-full" [options]="evModeOpts()" [ngModel]="a.mode || 'value'" (ngModelChange)="patchChange(f, $index, { mode: $event })" />
                            @if ((a.mode || 'value') === 'formula') {
                              <hrm-textarea class="fp-mono" [ngModel]="a.formula || ''" (ngModelChange)="patchChange(f, $index, { formula: $event })" [minRows]="2" [maxRows]="4" [placeholder]="tr('evFxPh')" />
                              <div class="fp-hint">{{ tr('fxHint') }}</div>
                              <div class="fp-opt fp-opt--right">
                                <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delEvent')" (click)="removeChange(f, $index)"><tabler-icon [icon]="icTrash" [size]="13" /></button>
                              </div>
                            } @else {
                            <span class="fp-mini-lbl">{{ tr('toValue') }}</span>
                            <div class="fp-opt">
                              <!-- Gi\xE1 tr\u1ECB g\xE1n \u0110\xDANG KI\u1EC2U field \u0111\xEDch \u2014 \u0111\u1ED3ng b\u1ED9 chu\u1EA9n defaultValue/RHS quy t\u1EAFc -->
                              @switch (evControl(a.set)) {
                                @case ('toggle') { <span class="fp-ev-sw"><hrm-switch [ngModel]="a.toValue === 'true'" (ngModelChange)="patchChange(f, $index, { toValue: $event ? 'true' : '' })" /></span> }
                                @case ('number') { <hrm-input-number [ngModel]="numOrNull(a.toValue)" (ngModelChange)="patchChange(f, $index, { toValue: $event != null ? String($event) : '' })" [placeholder]="tr('valuePh')" /> }
                                @case ('date') { <hrm-date-picker [ngModel]="dmyToDate(a.toValue)" (ngModelChange)="patchChange(f, $index, { toValue: dateToDmy($event) })" placeholder="dd/MM/yyyy" /> }
                                @case ('time') { <hrm-time-picker [ngModel]="hmToDate(a.toValue)" (ngModelChange)="patchChange(f, $index, { toValue: dateToHm($event) })" placeholder="HH:mm" /> }
                                @case ('options') { <hrm-select [ngModel]="a.toValue || null" (ngModelChange)="patchChange(f, $index, { toValue: $event ?? '' })" [options]="condFieldOptions(a.set)" [placeholder]="tr('valuePh')" /> }
                                @case ('multi') { <hrm-select [multiple]="true" [ngModel]="csvArr(a.toValue)" (ngModelChange)="patchChange(f, $index, { toValue: ($event || []).join(',') })" [options]="condFieldOptions(a.set)" [placeholder]="tr('valuePh')" /> }
                                @default { <hrm-input [ngModel]="a.toValue" (ngModelChange)="patchChange(f, $index, { toValue: $event })" [placeholder]="tr('valuePh')" /> }
                              }
                              <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delEvent')" (click)="removeChange(f, $index)"><tabler-icon [icon]="icTrash" [size]="13" /></button>
                            </div>
                            }
                          </div>
                        }
                        <button type="button" class="fp-add" (click)="addChange(f)"><tabler-icon [icon]="icPlus" [size]="14" /> {{ tr('addEvent') }}</button>
                        <div class="fp-hint">{{ tr('eventHint') }}</div>
                        <hr class="fp-sep" />
                        <!-- LOW-CODE B (ki\u1EC3u ServiceNow Client Script): JavaScript v\u1EDBi API b\u1EA3o h\u1ED9 -->
                        <div class="fp-lbl fp-lbl--solo">{{ tr('scriptTitle') }}</div>
                        <hrm-textarea class="fp-mono" [ngModel]="f.onChangeScript || ''" (ngModelChange)="patchField(f.id, { onChangeScript: $event })" [minRows]="3" [maxRows]="8" [placeholder]="tr('scriptPh')" />
                        <div class="fp-hint">{{ tr('scriptHint') }}</div>
                      </div>
                    }
                  </div>
                }
              </div>
            } @else {
              <div class="fb-props-h">
                <span class="fb-props-ic"><tabler-icon [icon]="icForms" [size]="16" /></span>
                <span class="fb-props-t">{{ tr('propsOf') }}</span>
              </div>
              <div class="fb-props-scroll">
                <div class="fa-body fa-body--flat">
                  <label class="fp-row"><span class="fp-lbl">{{ tr('formName') }}</span>
                    <hrm-input [ngModel]="schema().name" (ngModelChange)="renameForm($event)" /></label>
                  <label class="fp-row"><span class="fp-lbl">{{ tr('formDesc') }}</span>
                    <hrm-textarea [ngModel]="schema().desc || ''" (ngModelChange)="patchSchema({ desc: $event })" [minRows]="2" [maxRows]="4" /></label>
                  <hr class="fp-sep" />
                  <!-- THEME preset \u2014 \u0111\u1ED5i trang tr\xED form (n\u1EC1n, header solid, m\xE0u ch\u1EE7 \u0111\u1EA1o, bo g\xF3c) -->
                  <div class="fp-lbl fp-lbl--solo">{{ tr('themeSection') }}</div>
                  <div class="thp-grid">
                    @for (t of THEMES; track t.key) {
                      <button type="button" class="thp" [class.on]="curPreset() === t.key" (click)="setPreset(t.key)">
                        <span class="thp-prev" [style.background]="t.dark ? '#1E293B' : (t.sheetBg || 'var(--bg-surface)')">
                          <span class="thp-head" [style.background]="t.header === 'solid' ? (t.primary || 'var(--primary-base)') : 'transparent'"></span>
                          <span class="thp-line" [style.background]="t.primary || 'var(--primary-base)'"></span>
                          <span class="thp-line thp-line--2" [class.thp-line--dark]="t.dark"></span>
                        </span>
                        <span class="thp-name">{{ fbLang() === 'vi' ? t.vi : t.en }}</span>
                      </button>
                    }
                  </div>
                  <hr class="fp-sep" />
                  <!-- NG\xD4N NG\u1EEE D\u1EF0 \xC1N (demo: l\u01B0u t\u1EA1i schema; production = tenant config) -->
                  <div class="fp-lbl fp-lbl--solo">{{ tr('projLocales') }}</div>
                  <hrm-select [multiple]="true" [ngModel]="activeLocales()" (ngModelChange)="setLocales($event)" [options]="localeOpts" [allowClear]="false" [showSearch]="false" />
                  <div class="fp-hint">{{ tr('projLocalesHint') }}</div>
                  <hr class="fp-sep" />
                  <div class="fp-hint">{{ tr('formHint') }}</div>
                  <hr class="fp-sep" />
                  <button type="button" class="fp-reset" (click)="resetSchema()"><tabler-icon [icon]="icReset" [size]="14" /> {{ tr('resetForm') }}</button>
                </div>
              </div>
            }
          </aside>
        </div>

        <!-- \u2550\u2550\u2550 MODAL XU\u1EA4T B\u1EA2N (m\xF4 ph\u1ECFng sinh c\u1ED9t DB \u2014 SAP Custom Fields & Logic) \u2550\u2550\u2550 -->
        @if (publishOpen()) {
          <div class="fb-pv-backdrop" (click)="publishOpen.set(false)"></div>
          <div class="fb-pv fb-pub" role="dialog" aria-modal="true" [attr.aria-label]="tr('publishTitle')" cdkTrapFocus cdkTrapFocusAutoCapture>
            <div class="fb-pv-h">
              <span class="fb-pv-t"><tabler-icon [icon]="icDb" [size]="16" /> {{ tr('publishTitle') }}</span>
              <button type="button" class="fb-ico fb-ico--sm" [attr.aria-label]="tr('close')" (click)="publishOpen.set(false)"><tabler-icon [icon]="icX" [size]="16" /></button>
            </div>
            <div class="fb-pv-body fb-pub-body">
              @if (draftFields().length) {
                <p class="fb-pub-desc">{{ tr('publishDesc') }}</p>
                <table class="fb-pub-tbl">
                  <thead><tr><th>{{ tr('pubColLabel') }}</th><th>{{ tr('pubColKey') }}</th><th>{{ tr('pubColType') }}</th><th>{{ tr('pubColSql') }}</th></tr></thead>
                  <tbody>
                    @for (f of draftFields(); track f.id) {
                      <tr>
                        <td>{{ f.label }}</td>
                        <td class="fb-pub-mono">{{ f.key }}</td>
                        <td>{{ typeNameOf(f.type) }}</td>
                        <td class="fb-pub-mono">{{ sqlTypeOf(f.type) }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
                <div class="fb-pub-sql">
                  <div class="fb-pub-sql-t">{{ tr('pubSqlPreview') }}</div>
                  <pre class="fb-pub-mono">{{ publishSql() }}</pre>
                </div>
                <div class="fb-pub-foot">
                  <hrm-button variant="default" (click)="publishOpen.set(false)">{{ tr('cancel') }}</hrm-button>
                  <hrm-button variant="primary" (click)="publishDrafts()"><tabler-icon [icon]="icDb" [size]="16" /> {{ tr('publishN', { n: draftFields().length }) }}</hrm-button>
                </div>
              } @else {
                <p class="fb-pub-empty">{{ tr('publishEmpty') }}</p>
              }
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550 MODAL \u1EA8N-THAY-XO\xC1 (field \u0111\xE3 xu\u1EA5t b\u1EA3n \u2014 c\u1ED9t + d\u1EEF li\u1EC7u th\u1EADt gi\u1EEF nguy\xEAn) \u2550\u2550\u2550 -->
        @if (archAsk(); as ask) {
          <div class="fb-pv-backdrop" (click)="archAsk.set(null)"></div>
          <div class="fb-pv fb-pub fb-arch" role="dialog" aria-modal="true" [attr.aria-label]="tr('archTitle')" cdkTrapFocus cdkTrapFocusAutoCapture>
            <div class="fb-pv-h">
              <span class="fb-pv-t"><tabler-icon [icon]="icLock" [size]="16" /> {{ tr('archTitle') }}</span>
              <button type="button" class="fb-ico fb-ico--sm" [attr.aria-label]="tr('close')" (click)="archAsk.set(null)"><tabler-icon [icon]="icX" [size]="16" /></button>
            </div>
            <div class="fb-pv-body fb-pub-body">
              <p class="fb-pub-desc">{{ tr('archDesc', { label: ask.f.label }) }}</p>
              <div class="fp-lbl fp-lbl--solo">{{ tr('usedAt') }}</div>
              <div class="fp-used">
                @for (u of usedAt(ask.f); track u) { <hrm-tag color="gray" variant="stroke">{{ u }}</hrm-tag> }
              </div>
              <div class="fb-pub-foot">
                <hrm-button variant="default" (click)="archAsk.set(null)">{{ tr('cancel') }}</hrm-button>
                <hrm-button variant="primary" (click)="archiveField()"><tabler-icon [icon]="icEyeOff" [size]="16" /> {{ tr('archHide') }}</hrm-button>
              </div>
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550 MODAL QUY T\u1EAEC NGHI\u1EC6P V\u1EE4 \u2550\u2550\u2550 -->
        @if (rulesOpen()) {
          <div class="fb-pv-backdrop" (click)="rulesOpen.set(false)"></div>
          <div class="fb-pv fb-rules" role="dialog" aria-modal="true" [attr.aria-label]="tr('rulesTitle')" cdkTrapFocus cdkTrapFocusAutoCapture>
            <div class="fb-pv-h">
              <span class="fb-pv-t"><tabler-icon [icon]="icBolt" [size]="16" /> {{ tr('rulesTitle') }} \u2014 {{ schema().name }}</span>
              <button type="button" class="fb-ico fb-ico--sm" [attr.aria-label]="tr('closeRules')" (click)="rulesOpen.set(false)"><tabler-icon [icon]="icX" [size]="16" /></button>
            </div>
            <div class="fb-pv-body fb-rules-body">
              @for (r of schema().rules; track r.id; let ri = $index) {
                <div class="rl">
                  <div class="rl-head">
                    <span class="rl-no">{{ ri + 1 }}</span>
                    <input class="rl-name" [ngModel]="r.name" (ngModelChange)="patchRule(r.id, { name: $event })" [placeholder]="tr('ruleNamePh')" />
                    <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delRule')" (click)="removeRule(r.id)"><tabler-icon [icon]="icTrash" [size]="14" /></button>
                  </div>

                  <div class="rl-sec">
                    <span class="rl-kw">{{ tr('ifKw') }}</span>
                    <div class="rl-rows">
                      @for (c of r.conditions; track $index; let ci = $index) {
                        <div class="rl-row">
                          @if (ci > 0) {
                            <!-- \u0110\u1ED5i \u1EDE B\u1EA4T K\u1EF2 d\xF2ng n\xE0o \u2192 C\u1EA2 quy t\u1EAFc \u0111\u1ED5i theo (1 model chung, kh\xF4ng m\u01A1 h\u1ED3) -->
                            <hrm-select class="rl-and-sel" [ngModel]="r.match || 'all'" (ngModelChange)="patchRule(r.id, { match: $event })" [options]="matchOpts()" [allowClear]="false" [showSearch]="false" />
                          }
                          <!-- \u0110\u1ED5i tr\u01B0\u1EDDng tr\xE1i \u2192 op RESET v\u1EC1 h\u1EE3p l\u1EC7 v\u1EDBi LO\u1EA0I m\u1EDBi + xo\xE1 v\u1EBF ph\u1EA3i c\u0169 -->
                          <hrm-select class="rl-w-f" [ngModel]="c.field || null" (ngModelChange)="patchCondField(r.id, ci, $event)" [options]="allFieldOpts()" [placeholder]="tr('pickField')" />
                          <hrm-select class="rl-w-op" [ngModel]="c.op" (ngModelChange)="patchRuleCond(r.id, ci, { op: $event })" [options]="opOptsFor(c.field)" [allowClear]="false" />
                          @if (needsRhs(c.op)) {
                            <hrm-segmented class="rl-w-kind" [options]="rhsKindOpts()" [ngModel]="rhsKind(c)" (ngModelChange)="setRhsKind(r.id, ci, $event)" />
                            @if (rhsKind(c) === 'field') {
                              <!-- Ch\u1EC9 li\u1EC7t k\xEA field C\xD9NG NH\xD3M KI\u1EC2U (s\u1ED1 v\u1EDBi s\u1ED1, ng\xE0y v\u1EDBi ng\xE0y\u2026) -->
                              <hrm-select class="rl-w-v" [ngModel]="rhsField(c) || null" (ngModelChange)="patchRhs(r.id, ci, { field: $event })" [options]="compatFieldOpts(c.field)" [placeholder]="tr('cmpFieldPh')" />
                            } @else {
                              <!-- V\u1EBE PH\u1EA2I \u0110\xDANG KI\u1EC2U theo field tr\xE1i + to\xE1n t\u1EED -->
                              @switch (rhsControl(c)) {
                                @case ('weekday') { <hrm-select class="rl-w-v" [ngModel]="rhsValue(c) || null" (ngModelChange)="patchRhs(r.id, ci, { value: $event })" [options]="weekdayOpts()" [allowClear]="false" [showSearch]="false" /> }
                                @case ('number') { <hrm-input-number class="rl-w-v" [ngModel]="numOrNull(rhsValue(c))" (ngModelChange)="patchRhs(r.id, ci, { value: $event != null ? String($event) : '' })" [placeholder]="tr('valuePh')" /> }
                                @case ('date') { <hrm-date-picker class="rl-w-v" [ngModel]="dmyToDate(rhsValue(c))" (ngModelChange)="patchRhs(r.id, ci, { value: dateToDmy($event) })" placeholder="dd/MM/yyyy" /> }
                                @case ('time') { <hrm-time-picker class="rl-w-v" [ngModel]="hmToDate(rhsValue(c))" (ngModelChange)="patchRhs(r.id, ci, { value: dateToHm($event) })" placeholder="HH:mm" /> }
                                @case ('options') { <hrm-select class="rl-w-v" [multiple]="c.op === 'inList'" [ngModel]="c.op === 'inList' ? csvArr(rhsValue(c)) : (rhsValue(c) || null)" (ngModelChange)="patchRhs(r.id, ci, { value: c.op === 'inList' ? ($event || []).join(',') : ($event ?? '') })" [options]="condFieldOptions(c.field)" [placeholder]="tr('valuePh')" /> }
                                @default { <hrm-input class="rl-w-v" [ngModel]="rhsValue(c)" (ngModelChange)="patchRhs(r.id, ci, { value: $event })" [placeholder]="c.op === 'inList' ? tr('inListPh') : tr('valuePh')" /> }
                              }
                            }
                          }
                          <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delCond')" (click)="removeRuleCond(r.id, ci)"><tabler-icon [icon]="icTrash" [size]="13" /></button>
                        </div>
                      }
                      <button type="button" class="fp-add" (click)="addRuleCond(r.id)"><tabler-icon [icon]="icPlus" [size]="14" /> {{ tr('addCond') }}</button>
                    </div>
                  </div>

                  <div class="rl-sec">
                    <span class="rl-kw rl-kw--do">{{ tr('doKw') }}</span>
                    <div class="rl-rows">
                      @for (a of r.actions; track $index; let ai = $index) {
                        <div class="rl-row rl-row--act">
                          <hrm-select class="rl-w-op" [ngModel]="a.type" (ngModelChange)="patchRuleAction(r.id, ai, { type: $event })" [options]="actionOpts()" [allowClear]="false" />
                          <hrm-select class="rl-w-f" [multiple]="true" [ngModel]="a.targets" (ngModelChange)="patchRuleAction(r.id, ai, { targets: $event })" [options]="allFieldOpts()" [placeholder]="tr('targetsPh')" />
                          @if (a.type === 'setValue') {
                            <hrm-input class="rl-w-v" [ngModel]="a.value || ''" (ngModelChange)="patchRuleAction(r.id, ai, { value: $event })" [placeholder]="tr('setValuePh')" />
                          }
                          @if (a.type === 'copyValue') {
                            <hrm-select class="rl-w-v" [ngModel]="a.fromField || null" (ngModelChange)="patchRuleAction(r.id, ai, { fromField: $event })" [options]="allFieldOpts()" [placeholder]="tr('copyFromPh')" />
                          }
                          @if (a.type === 'warn') {
                            <hrm-input class="rl-w-v" [ngModel]="a.message || ''" (ngModelChange)="patchRuleAction(r.id, ai, { message: $event })" [placeholder]="tr('warnMsgPh')" />
                          }
                          <button type="button" class="fb-mini fb-mini--danger" [title]="tr('delAction')" (click)="removeRuleAction(r.id, ai)"><tabler-icon [icon]="icTrash" [size]="13" /></button>
                          @if (a.type === 'compute') {
                            <hrm-textarea class="rl-formula" [ngModel]="a.formula || ''" (ngModelChange)="patchRuleAction(r.id, ai, { formula: $event })"
                              [minRows]="2" [maxRows]="5" resize="vertical"
                              placeholder="IF([termUnit]=='N\u0103m', ADDYEAR([startDate],[term]), ADDDAY([startDate],[term]))" />
                            <span class="rl-fx-hint">{{ tr('fxHint') }}</span>
                          }
                        </div>
                      }
                      <button type="button" class="fp-add" (click)="addRuleAction(r.id)"><tabler-icon [icon]="icPlus" [size]="14" /> {{ tr('addAction') }}</button>
                    </div>
                  </div>
                </div>
              }
              @if (!schema().rules.length) {
                <div class="fb-empty" style="min-height:90px">{{ tr('noRules') }}</div>
              }
              <hrm-button variant="default" (click)="addRule()"><tabler-icon [icon]="icPlus" [size]="16" /> {{ tr('addRule') }}</hrm-button>
            </div>
          </div>
        }

        <!-- N\xFAt TR\u1EE2 L\xDD VNAI \u2014 pill ki\u1EC3u bong b\xF3ng tin nh\u1EAFn (3 g\xF3c bo, g\xF3c d\u01B0\u1EDBi-ph\u1EA3i vu\xF4ng),
             mascot \u0111\u1EE9ng TRONG n\xFAt, vi\u1EC1n gradient m\u1ECFng xanh\u2192t\xEDm\u2192v\xE0ng\u2192cam \u0111\u1ECF + spark l\u1EA5p l\xE1nh. -->
        @if (!aiOpen()) {
          <button type="button" class="ai-fab" [title]="tr('aiBtn')" [attr.aria-label]="tr('aiBtn')" (click)="aiOpenPanel()">
            <sg-vnai-mascot class="ai-fab-img" [size]="56" [state]="aiState()" />
            <span class="ai-fab-txt">{{ tr('aiBtn') }}</span>
          </button>
        }

        <!-- \u2550\u2550\u2550 TR\u1EE2 L\xDD AI \u2014 CHATBOT PANEL ki\u1EC3u Form Copilot (n\u1ED5i g\xF3c ph\u1EA3i, KH\xD4NG backdrop:
             form ph\xEDa sau v\u1EABn thao t\xE1c \u0111\u01B0\u1EE3c; mascot /assets/vnai-mascot.png, fallback icon) \u2550\u2550\u2550 -->
        @if (aiOpen()) {
          <div class="ai-panel" [class.ai-panel--right]="aiDock() === 'right'" [class.ai-panel--left]="aiDock() === 'left'" role="dialog" [attr.aria-label]="tr('aiBtn')">
            <div class="ai-head">
              <sg-vnai-mascot class="ai-mascot" [size]="82" [state]="aiState()" />
              <div class="ai-head-t">
                <div class="ai-head-name">{{ tr('aiBtn') }} <span class="ai-badge">AI</span></div>
                <div class="ai-head-sub">{{ tr('aiSpecialist') }}</div>
              </div>
              <button type="button" class="fb-ico fb-ico--sm ai-head-ico" [title]="tr('aiDockTitle')" (click)="aiDockMenu.set(!aiDockMenu()); $event.stopPropagation()">
                <tabler-icon [icon]="aiDock() === 'left' ? icDockL : aiDock() === 'right' ? icDockR : icDockF" [size]="17" />
              </button>
              <button type="button" class="fb-ico fb-ico--sm ai-head-ico" [attr.aria-label]="tr('closeRules')" (click)="aiOpen.set(false)"><tabler-icon [icon]="icX" [size]="18" /></button>

              <!-- Dropdown ch\u1ECDn V\u1ECA TR\xCD khung chat: B\xEAn ph\u1EA3i/B\xEAn tr\xE1i (drawer) \xB7 N\u1ED5i -->
              @if (aiDockMenu()) {
                <div class="ai-dock-bd" (click)="aiDockMenu.set(false)"></div>
                <div class="ai-dock-menu" role="menu">
                  <button type="button" class="ai-dock-it" [class.on]="aiDock() === 'right'" (click)="setDock('right')">
                    <tabler-icon [icon]="icDockR" [size]="17" /> {{ tr('aiDockRight') }}
                  </button>
                  <button type="button" class="ai-dock-it" [class.on]="aiDock() === 'left'" (click)="setDock('left')">
                    <tabler-icon [icon]="icDockL" [size]="17" /> {{ tr('aiDockLeft') }}
                  </button>
                  <button type="button" class="ai-dock-it" [class.on]="aiDock() === 'float'" (click)="setDock('float')">
                    <tabler-icon [icon]="icDockF" [size]="17" /> {{ tr('aiDockFloat') }}
                  </button>
                </div>
              }
            </div>

            <div class="ai-body">
            <div class="ai-log" #aiLog>
              @for (m of aiMsgs(); track $index) {
                @if (m.role === 'user') { <div class="ai-m ai-m--u">{{ m.text }}</div> }
                @else { <div class="ai-m ai-m--b">{{ m.text }}</div> }
              }
              @if (aiMsgs().length <= 1) {
                <div class="ai-sug">
                  @for (sg of aiSuggestions(); track sg) {
                    <button type="button" class="fb-ai-chip" (click)="aiUse(sg)">{{ sg }}</button>
                  }
                </div>
              }
            </div>

            <div class="ai-input">
              <div class="ai-input-box">
              <hrm-textarea [(ngModel)]="aiPromptModel" [placeholder]="tr('aiAsk')" [minRows]="2" [maxRows]="4"
                (keydown.enter)="$any($event).preventDefault(); aiSend()" />
              <div class="ai-input-bar">
                <button type="button" class="ai-rnd" [title]="tr('aiAttach')" (click)="aiSoonMsg()"><tabler-icon [icon]="icPlus" [size]="16" /></button>
                <button type="button" class="ai-chip-b" (click)="aiSoonMsg()"><tabler-icon [icon]="icPencil" [size]="15" /> {{ tr('aiDraw') }}</button>
                <span class="ai-spacer"></span>
                <button type="button" class="ai-talk" (click)="aiSend()"><tabler-icon [icon]="icMic" [size]="16" /> {{ tr('aiTalk') }}</button>
              </div>
              </div>
            </div>
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550 XEM TR\u01AF\u1EDAC (renderer TH\u1EACT + logic s\u1ED1ng + \u0111\u1ED5i ng\xF4n ng\u1EEF label) \u2550\u2550\u2550 -->
        @if (previewOpen()) {
          <div class="fb-pv-backdrop" (click)="previewOpen.set(false)"></div>
          <div class="fb-pv" role="dialog" aria-modal="true" [attr.aria-label]="tr('pvTitle')" cdkTrapFocus cdkTrapFocusAutoCapture>
            <div class="fb-pv-h">
              <span class="fb-pv-t">{{ tr('pvTitle') }} \u2014 {{ schema().name }}</span>
              <hrm-segmented [options]="pvLangs()" [(ngModel)]="pvLangModel" size="sm" />
              <hrm-segmented [options]="pvModes()" [(ngModel)]="pvModeModel" size="sm" />
              <button type="button" class="fb-ico fb-ico--sm" [attr.aria-label]="tr('closePv')" (click)="previewOpen.set(false)"><tabler-icon [icon]="icX" [size]="16" /></button>
            </div>
            <div class="fb-pv-body">
              <sg-form-renderer [schema]="schema()" [mode]="pvMode()" [lang]="pvLang()" [(value)]="pvValueModel" />
            </div>
          </div>
        }
      </div>
    }
  `, host: { "(document:keydown.escape)": "onEsc()" }, styles: ['/* angular:styles/component:css;34f19e9e8c908d9fbb9dcdc1c68549a0c198f5491700a7d74398eb97c7493da1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-builder.ts */\n.fb {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-body, var(--bg-surface-subtle));\n  color: var(--text-body);\n  font-family: var(--font-sans);\n}\n.fb-top {\n  flex: none;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 14px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-top-l {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  flex: 1;\n}\n.fb-top-c {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: none;\n}\n.fb-top-r {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  justify-content: flex-end;\n}\n.fb-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.fb-brand tabler-icon {\n  color: var(--primary-base);\n}\n.fb-top-sep {\n  width: 1px;\n  height: 22px;\n  background: var(--border-sub);\n}\n.fb-name {\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-14);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  padding: 5px 8px;\n  border-radius: var(--radius-md);\n  min-width: 0;\n  width: 220px;\n}\n.fb-name:hover {\n  border-color: var(--border-sub);\n}\n.fb-name:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.fb-ico {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-ico:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-ico:disabled {\n  color: var(--icon-disabled, var(--text-soft));\n  opacity: .45;\n  cursor: not-allowed;\n}\n.fb-ico--sm {\n  width: 26px;\n  height: 26px;\n}\n.fb-hist {\n  display: inline-flex;\n  gap: 2px;\n}\n.fb-dev {\n  display: inline-flex;\n  gap: 2px;\n  padding: 2px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fb-dev-b {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 26px;\n  border: 0;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-dev-b:hover {\n  color: var(--text-strong);\n}\n.fb-dev-b.on {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.fb-rules-n {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  margin-left: 2px;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  line-height: 1;\n}\n.fb-main {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  transition: grid-template-columns .24s var(--ease-out, ease);\n}\n.fb-pal {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n}\n.fb-pal.is-closed {\n  border-right: 0;\n}\n.fb-pal-search {\n  flex: none;\n  padding: 12px 12px 8px;\n}\n.fb-pal-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 0 12px 16px;\n}\n.fb-pal-grp {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n  margin: 14px 2px 6px;\n}\n.fb-pal-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 7px 8px;\n  margin-bottom: 4px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  cursor: grab;\n  text-align: left;\n  transition:\n    border-color var(--duration-fast) var(--ease-out),\n    box-shadow var(--duration-fast) var(--ease-out),\n    transform var(--duration-fast) var(--ease-out);\n}\n.fb-pal-item:hover {\n  border-color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n  transform: translateY(-1px);\n}\n.fb-pal-item:hover .fb-pal-add {\n  opacity: 1;\n}\n.fb-pal-ic {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-sm);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.fb-pal-lb {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-pal-add {\n  flex: none;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity var(--duration-fast) var(--ease-out);\n}\n.fb-pal-item.is-ghost {\n  opacity: .9;\n  box-shadow: var(--shadow-regular-md);\n  border-color: var(--primary-base);\n}\n.fb-canvas {\n  position: relative;\n  min-width: 0;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 22px 26px 60px;\n  background: var(--bg-body, var(--bg-surface-subtle));\n  transition: background .2s var(--ease-out, ease);\n}\n.fb-sheet {\n  margin: 0 auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-sm);\n  padding: 6px 26px 22px;\n  transition: max-width .28s var(--ease-out, ease);\n}\n.fb-sheet-head {\n  padding: 18px 10px 6px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  border: 1.5px dashed transparent;\n}\n.fb-sheet-head:hover {\n  border-color: var(--border-sub);\n}\n.fb-sheet-head.is-on {\n  border-color: var(--primary-base);\n}\n.fb-sheet-title {\n  font-size: var(--fs-18, 18px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.fb-sheet-desc {\n  margin-top: 3px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.fb-sheet-head.is-solid {\n  margin: -6px -26px 10px;\n  padding: 18px 26px 14px;\n  border-radius: var(--radius-xl) var(--radius-xl) 0 0;\n  border-color: transparent;\n}\n.fb-sheet-head.is-solid .fb-sheet-title {\n  color: var(--static-white, #fff);\n}\n.fb-sheet-head.is-solid .fb-sheet-desc {\n  color: var(--static-white, #fff);\n  opacity: .85;\n}\n.fb-side-tg {\n  position: sticky;\n  bottom: 18px;\n  z-index: 5;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  box-shadow: var(--shadow-regular-sm);\n}\n.fb-side-tg:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.fb-side-tg--l {\n  float: left;\n  margin-left: -14px;\n}\n.fb-side-tg--r {\n  float: right;\n  margin-right: -14px;\n}\n.fb-sec {\n  margin-top: 14px;\n}\n.fb-sec-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.fb-sec-title {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding: 4px 6px;\n  border-radius: var(--radius-sm);\n}\n.fb-sec-title:hover {\n  border-color: var(--border-sub);\n}\n.fb-sec-title:focus {\n  outline: none;\n  border-color: var(--primary-base);\n}\n.fb-sec-acts {\n  display: inline-flex;\n  gap: 4px;\n}\n.fb-mini {\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  flex: none;\n}\n.fb-mini:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fb-mini--danger:hover {\n  border-color: var(--error-base);\n  color: var(--error-base);\n}\n.fb-sec-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px 10px;\n  min-height: 44px;\n}\n.fb-cell {\n  min-width: 0;\n}\n.fb-cell-ph {\n  border: 1.5px dashed var(--primary-base);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  min-height: 58px;\n  grid-column: span 3;\n}\n.fb-cell.cdk-drag-preview {\n  z-index: 1300;\n}\n.fb-item {\n  position: relative;\n  padding: 8px 10px;\n  border: 1.5px dashed transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: border-color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out);\n}\n.fb-item:hover {\n  border-color: color-mix(in srgb, var(--primary-base) 45%, transparent);\n}\n.fb-item.is-on {\n  border-style: solid;\n  border-color: var(--primary-base);\n  background: color-mix(in srgb, var(--primary-base) 4%, var(--bg-surface));\n}\n.fb-tag {\n  position: absolute;\n  top: -10px;\n  left: 8px;\n  z-index: 2;\n  display: none;\n  max-width: 70%;\n  padding: 1px 7px;\n  border-radius: var(--radius-sm);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-item:hover .fb-tag,\n.fb-item.is-on .fb-tag {\n  display: inline-block;\n}\n.fb-chip {\n  position: absolute;\n  top: -13px;\n  right: 8px;\n  z-index: 3;\n  display: none;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-sm);\n}\n.fb-item.is-on .fb-chip,\n.fb-item:hover .fb-chip {\n  display: inline-flex;\n}\n.fb-chip-b {\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-chip-b:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-chip-b--danger:hover {\n  color: var(--error-base);\n  background: color-mix(in srgb, var(--error-base) 10%, transparent);\n}\n.fb-chip-drag {\n  cursor: grab;\n}\n.fb-empty {\n  display: grid;\n  place-items: center;\n  min-height: 64px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  color: var(--text-soft);\n  font-size: var(--fs-13);\n  grid-column: 1 / -1;\n}\n.fb-addsec {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 16px;\n  padding: 9px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fb-addsec:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cv-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.cv-lbl {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.cv-lbl ::ng-deep .ant-tag {\n  margin: 0;\n  line-height: 1.3;\n  padding-inline: 5px;\n  font-size: 10px;\n  border-radius: var(--radius-sm);\n}\n.cv-logic {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: var(--radius-sm);\n  background: var(--secondary, var(--bg-surface-subtle));\n  color: var(--text-sub);\n  cursor: help;\n}\n.cv-logic:hover {\n  color: var(--primary-base);\n}\n.cv-logic-tip {\n  position: absolute;\n  top: calc(100% + 7px);\n  left: -6px;\n  z-index: 40;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 230px;\n  max-width: 320px;\n  width: max-content;\n  padding: 9px 11px;\n  border-radius: var(--radius-md);\n  background: var(--text-strong);\n  color: var(--bg-surface);\n  font-size: var(--fs-12);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: normal;\n  box-shadow: 0 8px 24px rgb(0 0 0 / .22);\n  pointer-events: none;\n}\n.cv-logic-tip::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: 11px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(45deg);\n  background: var(--text-strong);\n}\n.cv-logic-t {\n  font-weight: var(--font-semibold, 600);\n  opacity: .85;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.cv-logic-line {\n  display: block;\n}\n.fp-ev-sw {\n  display: inline-flex;\n  align-items: center;\n  min-height: 32px;\n}\n.fp-opt--right {\n  justify-content: flex-end;\n}\n.fp-seg-param {\n  width: 100%;\n}\n.fp-seg-param ::ng-deep .ant-segmented {\n  background: var(--bg-body, #EDF1F5);\n  border: 1px solid var(--border-sub);\n}\n.fp-seg-param ::ng-deep .ant-segmented-item-selected {\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-sm, 0 1px 3px rgb(0 0 0 / .12));\n}\n.fb-rules-n--gold {\n  background: var(--warning-base, #F59E0B);\n}\n.fb-btn-sec ::ng-deep button.ant-btn {\n  background: var(--secondary, var(--bg-surface-subtle));\n  border-color: transparent;\n  color: var(--text-strong);\n}\n.fb-btn-sec ::ng-deep button.ant-btn:hover {\n  background: var(--bg-surface-subtle);\n  border-color: var(--border-sub);\n  color: var(--text-strong);\n}\n.fb-rules-n--onp {\n  background: rgb(255 255 255 / .28);\n  color: #fff;\n}\n.fp-keylock {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fp-used {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.fp-used ::ng-deep .ant-tag {\n  margin: 0;\n  line-height: 1.4;\n  padding-inline: 6px;\n  font-size: 11px;\n  border-radius: var(--radius-sm);\n}\n.fb-pub {\n  width: min(680px, calc(100vw - 48px));\n}\n.fb-pub-body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px 18px;\n  overflow: auto;\n}\n.fb-pub-body > * {\n  flex-shrink: 0;\n}\n.fb-pub-desc {\n  margin: 0;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  line-height: 1.6;\n}\n.fb-pub-empty {\n  margin: 4px 0 8px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  text-align: center;\n}\n.fb-pub-tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--fs-13);\n}\n.fb-pub-tbl th {\n  text-align: left;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  padding: 6px 10px;\n  border-bottom: 1px solid var(--border-sub);\n  white-space: nowrap;\n}\n.fb-pub-tbl td {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-sub);\n  color: var(--text-body);\n}\n.fb-pub-mono {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n}\n.fb-pub-sql {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  overflow: hidden;\n}\n.fb-pub-sql-t {\n  padding: 7px 12px;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-pub-sql pre {\n  margin: 0;\n  padding: 10px 12px;\n  white-space: pre-wrap;\n  color: var(--text-strong);\n}\n.fb-pub-foot {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-top: 2px;\n}\n.fb-arch {\n  width: min(520px, calc(100vw - 48px));\n}\n.cv-req {\n  color: var(--error-base);\n}\n.cv-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n}\n.cv-box--area {\n  min-height: 74px;\n  align-items: flex-start;\n  padding-top: 7px;\n}\n.cv-chev {\n  position: absolute;\n  right: 9px;\n  color: var(--text-soft);\n}\n.cv-suffix {\n  position: absolute;\n  right: 9px;\n  color: var(--text-soft);\n  font-size: var(--fs-12);\n}\n.cv-money {\n  display: flex;\n  gap: 8px;\n}\n.cv-money-n {\n  flex: 1 1 auto;\n}\n.cv-money-u {\n  flex: 0 0 84px;\n  padding-right: 24px;\n}\n.cv-mono {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.cv-opts {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 2px;\n}\n.cv-radio,\n.cv-check {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.cv-radio-dot {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.cv-radio-dot.is-on {\n  border-color: var(--primary-base);\n  box-shadow: inset 0 0 0 3px var(--bg-surface);\n  background: var(--primary-base);\n}\n.cv-check-box {\n  width: 14px;\n  height: 14px;\n  border-radius: var(--radius-xs, 3px);\n  border: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.cv-toggle {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 20px;\n  border-radius: 999px;\n  background: var(--primary-base);\n}\n.cv-toggle-knob {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #fff;\n}\n.cv-stars {\n  display: inline-flex;\n  gap: 3px;\n  color: var(--warning-base);\n}\n.cv-drop {\n  display: grid;\n  place-items: center;\n  min-height: 64px;\n  border: 1.5px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n.cv-help {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.cv-heading {\n  font-size: var(--fs-14);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.cv-divider {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 8px 0 2px;\n}\n.fb-props {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border-left: 1px solid var(--border-sub);\n}\n.fb-props.is-closed {\n  border-left: 0;\n}\n.fb-props-h {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-props-ic {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.fb-props-t {\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.fb-props-key {\n  flex: 1;\n  min-width: 0;\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-props-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fa-sec {\n  border-bottom: 1px solid var(--border-soft);\n}\n.fa-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 11px 14px;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-12);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.fa-h:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.fa-caret {\n  color: var(--text-soft);\n  transition: transform var(--duration-fast) var(--ease-out);\n}\n.fa-caret.is-open {\n  transform: rotate(180deg);\n}\n.fa-body {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 4px 14px 16px;\n}\n.fa-body--flat {\n  padding: 14px;\n}\n.fp-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fp-row--inline {\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.fp-2col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.fp-lbl {\n  font-size: var(--fs-12);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.fp-lbl--solo {\n  margin-bottom: -4px;\n}\n.fp-mono ::ng-deep input {\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.fp-lang-tag ::ng-deep .ant-tag {\n  margin: 0;\n  line-height: 1.3;\n  padding-inline: 5px;\n  font-size: 10px;\n  border-radius: var(--radius-sm);\n}\n.fp-lang-tag-old {\n  font-size: 10px;\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-soft);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm);\n  padding: 0 4px;\n  margin-left: 4px;\n}\n.fp-globe {\n  width: auto;\n  min-width: 24px;\n  padding: 0 5px;\n  gap: 3px;\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n}\n.fp-globe.on {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.fp-globe-n {\n  font-size: 10px;\n  font-weight: var(--font-semibold, 600);\n}\n.fp-trans {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fp-miss {\n  font-size: 10px;\n  color: var(--warning-base);\n  margin-left: 6px;\n}\n.fp-opt {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.fp-opt hrm-input {\n  flex: 1;\n  min-width: 0;\n}\n.fp-add {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  align-self: flex-start;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--primary-base);\n  cursor: pointer;\n  padding: 2px 0;\n}\n.fp-add:hover {\n  text-decoration: underline;\n}\n.fp-sep {\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  margin: 2px 0;\n  width: 100%;\n}\n.fp-cond {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.fp-mini-lbl {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.fp-hint {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  line-height: 1.55;\n}\n.fp-reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  cursor: pointer;\n  padding: 7px 10px;\n}\n.fp-reset:hover {\n  color: var(--error-base);\n  border-color: var(--error-base);\n}\n.th-swatches {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 6px;\n}\n.th-sw {\n  aspect-ratio: 1;\n  border-radius: var(--radius-full, 999px);\n  border: 2px solid transparent;\n  cursor: pointer;\n  padding: 0;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.08);\n}\n.th-sw.on {\n  border-color: var(--text-strong);\n}\n.th-sw--bg {\n  border-radius: var(--radius-md);\n}\n.th-sw--custom {\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  background:\n    conic-gradient(\n      from 90deg,\n      #f43f5e,\n      #eab308,\n      #22c55e,\n      #06b6d4,\n      #6366f1,\n      #d946ef,\n      #f43f5e);\n}\n.th-sw--custom input[type=color] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.fb-pv-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1400;\n  background: rgb(0 0 0 / .45);\n}\n.fb-pv {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1410;\n  width: min(780px, calc(100vw - 48px));\n  max-height: 86vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg, var(--shadow-regular-md));\n}\n.fb-rules {\n  width: min(920px, calc(100vw - 48px));\n}\n.fb-pv-h {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.fb-pv-t {\n  flex: 1;\n  min-width: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-14);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fb-pv-t tabler-icon {\n  color: var(--primary-base);\n}\n.fb-pv-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fb-rules-body {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n}\n.fb-rules-body > * {\n  flex-shrink: 0;\n}\n.thp-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.thp {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 6px;\n  border: 1.5px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  cursor: pointer;\n  font: inherit;\n}\n.thp:hover {\n  border-color: color-mix(in srgb, var(--primary-base) 50%, transparent);\n}\n.thp.on {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.thp-prev {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  height: 44px;\n  padding: 0 0 5px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.thp-head {\n  height: 12px;\n  flex: none;\n}\n.thp-line {\n  height: 4px;\n  margin: 2px 6px 0;\n  border-radius: 2px;\n  opacity: .8;\n}\n.thp-line--2 {\n  background: var(--border-sub);\n  width: 60%;\n}\n.thp-line--dark {\n  background: rgb(255 255 255 / .25);\n}\n.thp-name {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  text-align: left;\n}\n@property --fab-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }\n.ai-fab {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 1340;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 22px 11px 12px;\n  border: 0;\n  border-radius: 18px 18px 4px 18px;\n  background: var(--bg-surface);\n  box-shadow:\n    0 6px 22px rgb(37 99 235 / .24),\n    0 6px 24px rgb(240 101 58 / .22),\n    0 2px 10px rgb(139 92 246 / .18);\n  cursor: pointer;\n  font: inherit;\n  transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);\n}\n.ai-fab > * {\n  position: relative;\n  z-index: 1;\n}\n.ai-fab::before,\n.ai-fab::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  border-radius: inherit;\n  padding: 2px;\n  pointer-events: none;\n  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n}\n.ai-fab::before {\n  background:\n    linear-gradient(\n      100deg,\n      #2563EB 0%,\n      #8B5CF6 38%,\n      #FBBF24 70%,\n      #F0653A 100%);\n  opacity: .35;\n}\n.ai-fab::after {\n  background:\n    conic-gradient(\n      from var(--fab-angle),\n      transparent 0 64%,\n      rgb(37 99 235 / .35) 72%,\n      #2563EB 79%,\n      #8B5CF6 86%,\n      #FBBF24 93%,\n      #F0653A 98%,\n      #FFD9C4 100%);\n  animation: fab-border-move 3s linear infinite;\n}\n@keyframes fab-border-move {\n  to {\n    --fab-angle: 360deg;\n  }\n}\n.ai-fab:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow:\n    0 10px 30px rgb(37 99 235 / .32),\n    0 10px 32px rgb(240 101 58 / .28),\n    0 4px 14px rgb(139 92 246 / .24);\n}\n.ai-fab:hover::after {\n  animation-duration: 1.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-fab::after {\n    animation: none;\n    opacity: 0;\n  }\n  .ai-fab::before {\n    opacity: .6;\n  }\n}\n.ai-fab:active {\n  transform: scale(.98);\n}\n.ai-fab-img {\n  align-self: flex-end;\n  margin: -26px 0 -9.5px;\n  flex: none;\n}\n.ai-fab-txt {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: #1E2A5A;\n  white-space: nowrap;\n}\n.ai-panel {\n  position: fixed;\n  right: 18px;\n  bottom: 18px;\n  z-index: 1350;\n  width: 380px;\n  max-width: calc(100vw - 36px);\n  height: min(600px, calc(100vh - 96px));\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #E7F0FE 0%,\n      #EDEAFB 48%,\n      #FCE8DC 100%);\n  border: 1px solid rgb(255 255 255 / .65);\n  border-radius: var(--radius-2xl, 16px);\n  box-shadow: var(--shadow-regular-lg, var(--shadow-regular-md));\n  overflow: visible;\n  animation: ai-pop .28s var(--ease-out, ease-out);\n}\n@keyframes ai-pop {\n  from {\n    opacity: 0;\n    transform: translateY(16px) scale(.97);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-panel {\n    animation: none;\n  }\n}\n.ai-panel--right {\n  top: 54px;\n  right: 0;\n  bottom: 0;\n  height: auto;\n  border-radius: 0;\n  border: 0;\n  border-left: 1px solid var(--border-sub);\n}\n.ai-panel--left {\n  top: 54px;\n  left: 0;\n  right: auto;\n  bottom: 0;\n  height: auto;\n  border-radius: 0;\n  border: 0;\n  border-right: 1px solid var(--border-sub);\n}\n.ai-body {\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  margin: 0 8px 8px;\n  background: var(--bg-surface);\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 -2px 8px rgb(0 0 0 / .05);\n}\n.ai-panel--right .ai-body,\n.ai-panel--left .ai-body {\n  border-radius: 14px 14px 0 0;\n  margin-bottom: 0;\n}\n.ai-dock-bd {\n  position: fixed;\n  inset: 0;\n  z-index: 1;\n}\n.ai-dock-menu {\n  position: absolute;\n  top: 52px;\n  right: 40px;\n  z-index: 2;\n  min-width: 168px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-md);\n}\n.ai-dock-it {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 11px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  cursor: pointer;\n  text-align: left;\n}\n.ai-dock-it:hover {\n  background: var(--bg-surface-subtle);\n}\n.ai-dock-it.on {\n  background: #EDEAFB;\n  color: #1E2A5A;\n}\n.ai-head {\n  position: relative;\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 76px;\n  padding: 10px 12px 10px 98px;\n}\n.ai-mascot {\n  position: absolute;\n  left: 8px;\n  top: 9px;\n  z-index: 0;\n}\n.ai-mascot--fb {\n  display: grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  left: 20px;\n  top: 12px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3B82F6,\n      #1D4ED8);\n  color: #fff;\n}\n.ai-head-t {\n  flex: 1;\n  min-width: 0;\n}\n.ai-head-name {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-bold, 700);\n  color: #1E2A5A;\n}\n.ai-badge {\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.4;\n  background: #1E2A5A;\n  color: #fff;\n  border-radius: 6px;\n  padding: 1px 6px;\n}\n.ai-head-sub {\n  font-size: var(--fs-12);\n  color: #1E2A5A;\n  opacity: .72;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ai-head-ico {\n  color: #1E2A5A;\n}\n.ai-head-ico:hover {\n  background: rgb(30 42 90 / .08);\n  color: #1E2A5A;\n}\n.ai-log {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ai-input {\n  background: var(--bg-surface);\n}\n.ai-m {\n  max-width: 88%;\n  font-size: var(--fs-13);\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n.ai-m--u {\n  align-self: flex-end;\n  background: var(--secondary, var(--bg-surface-subtle));\n  color: var(--text-strong);\n  padding: 8px 12px;\n  border-radius: var(--radius-lg);\n}\n.ai-m--b {\n  align-self: flex-start;\n  color: var(--text-body);\n}\n.ai-sug {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n}\n.fb-ai-chip {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  padding: 4px 11px;\n  font: inherit;\n  font-size: var(--fs-12);\n  color: var(--text-body);\n  cursor: pointer;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n}\n.fb-ai-chip:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-input {\n  flex: none;\n  padding: 10px 12px 12px;\n}\n.ai-input-box {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 4px 10px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: 16px;\n  background: var(--bg-surface);\n  transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);\n}\n.ai-input-box:focus-within {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base) 12%, transparent);\n}\n.ai-input-box ::ng-deep .ant-input {\n  border: 0 !important;\n  box-shadow: none !important;\n  background: transparent;\n  padding-inline: 2px;\n}\n.ai-input-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ai-rnd {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: 50%;\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n  flex: none;\n}\n.ai-rnd:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-chip-b {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full, 999px);\n  background: var(--bg-surface);\n  padding: 5px 12px;\n  font: inherit;\n  font-size: var(--fs-12);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  cursor: pointer;\n}\n.ai-chip-b:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ai-spacer {\n  flex: 1;\n}\n.ai-talk {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 0;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  padding: 7px 16px;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  cursor: pointer;\n}\n.ai-talk:hover {\n  filter: brightness(.95);\n}\n.rl {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.rl-head {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-soft);\n}\n.rl-no {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-full, 999px);\n  background: var(--primary-base);\n  color: var(--static-white, #fff);\n  font-size: var(--fs-12);\n  font-weight: var(--font-bold, 700);\n}\n.rl-name {\n  flex: 1;\n  min-width: 0;\n  border: 1px solid transparent;\n  background: transparent;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  padding: 4px 6px;\n  border-radius: var(--radius-sm);\n}\n.rl-name:hover {\n  border-color: var(--border-sub);\n}\n.rl-name:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.rl-sec {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n}\n.rl-sec + .rl-sec {\n  border-top: 1px dashed var(--border-soft);\n}\n.rl-kw {\n  flex: none;\n  width: 84px;\n  padding-top: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--warning-base);\n}\n.rl-kw--do {\n  color: var(--success-base, var(--primary-base));\n}\n.rl-rows {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rl-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: nowrap;\n}\n@media (max-width: 720px) {\n  .rl-row {\n    flex-wrap: wrap;\n  }\n}\n.rl-row--act {\n  flex-wrap: wrap;\n}\n.rl-and {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.rl-and-sel ::ng-deep .ant-select-selection-item {\n  font-size: var(--fs-12);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.rl-w-f {\n  flex: 1 1 190px;\n  min-width: 150px;\n}\n.rl-w-op {\n  flex: 0 1 170px;\n  min-width: 132px;\n}\n.rl-w-kind {\n  flex: none;\n}\n.rl-w-v {\n  flex: 1 1 170px;\n  min-width: 132px;\n}\n.rl-and-sel {\n  width: 84px;\n  flex: 0 0 84px;\n}\n.rl-formula {\n  flex: 1 1 100%;\n}\n.rl-formula ::ng-deep textarea {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-12);\n}\n.rl-fx-hint {\n  flex: 1 1 100%;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=sg-form-builder.css.map */\n'] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], saved: [{ type: Output, args: ["saved"] }], aiLogEl: [{ type: ViewChild, args: ["aiLog", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgFormBuilder, { className: "SgFormBuilder", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feature/sg-form-builder.ts", lineNumber: 1336 });
})();

export {
  fbLoadSchema,
  fbSeedDefaults,
  fbSeedRuleValues,
  SgFormRenderer,
  SgFormBuilder
};
//# sourceMappingURL=chunk-3HECJ4X4.js.map
