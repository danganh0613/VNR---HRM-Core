import {
  HrmTagsCell
} from "./chunk-OSSXLHFH.js";
import {
  HrmProgressCell
} from "./chunk-YN6HMLUF.js";
import {
  HrmTextCell
} from "./chunk-ENOSDACK.js";
import {
  HrmActionCell
} from "./chunk-PNALB3TE.js";
import {
  HrmTableToolbar
} from "./chunk-HJ57LY37.js";
import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import {
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import {
  HrmCard
} from "./chunk-XPLMSQMT.js";
import "./chunk-PRQ7GH7J.js";
import {
  HrmGrid
} from "./chunk-HICBXL5G.js";
import "./chunk-63BVE4AM.js";
import "./chunk-UGXOFJ2W.js";
import "./chunk-UDAG7UB6.js";
import "./chunk-MT7CL62E.js";
import "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-OCA5G42J.js";
import "./chunk-INGBAYOP.js";
import "./chunk-OVPA4RAH.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import {
  HrmInput
} from "./chunk-7IBNPHRP.js";
import "./chunk-EGUSTVRG.js";
import "./chunk-ZUH7BZUU.js";
import "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  Edit,
  Eye,
  Plus,
  TablerIconComponent,
  Trash
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/grid.ts
var _c0 = ["userCell"];
var _c1 = ["roleCell"];
var _c2 = ["skillCell"];
var _c3 = ["kpiCell"];
var _c4 = ["statusCell"];
var _c5 = ["actionCell"];
function SgDocGridEnt_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-user-cell", 32);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("name", r_r2.name)("sub", r_r2.email)("colorful", true)("avatarSize", 36);
  }
}
function SgDocGridEnt_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-text-cell", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("primary", \u0275\u0275pipeBind1(1, 2, r_r3.role))("secondary", \u0275\u0275pipeBind1(2, 4, r_r3.tenure));
  }
}
function SgDocGridEnt_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-tags-cell", 34);
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("tags", ctx_r4.skillsOf(r_r4))("max", 2);
  }
}
function SgDocGridEnt_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-progress-cell", 35);
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("value", r_r6.kpi)("color", ctx_r4.kpiColor(r_r6.kpi));
  }
}
function SgDocGridEnt_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-status-cell", 36);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("status", r_r7.status === "active" ? "success" : "error")("label", \u0275\u0275pipeBind1(1, 3, r_r7.status === "active" ? "docs.enterpriseGrid.statusActive" : "docs.enterpriseGrid.statusAbsent"))("dot", true);
  }
}
function SgDocGridEnt_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-action-cell", 37);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("actions", ctx_r4.rowActions)("moreLabel", \u0275\u0275pipeBind1(1, 2, "docs.enterpriseGrid.moreLabel"));
  }
}
var SgDocGridEnt = class _SgDocGridEnt {
  constructor() {
    this.t = inject(TranslateService);
    this.lang = signal(this.t.currentLang, ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.plus = Plus;
    this.kw = "";
    this.plainCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee") },
      { key: "email", title: this.t.instant("docs.enterpriseGrid.colEmail") },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole") },
      { key: "tenure", title: this.t.instant("docs.enterpriseGrid.colTenure") }
    ]), ...ngDevMode ? [{ debugName: "plainCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.truncCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), width: "130px" },
      { key: "email", title: this.t.instant("docs.enterpriseGrid.colEmail") },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), width: "100px" }
    ]), ...ngDevMode ? [{ debugName: "truncCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.people = [
      {
        id: 1,
        name: "Nguy\u1EC5n V\u0103n A",
        email: "a.nguyen@vnr.vn",
        role: "docs.enterpriseGrid.roleManager",
        tenure: "docs.enterpriseGrid.tenure1",
        kpi: 92,
        status: "active",
        skills: [{ label: "docs.enterpriseGrid.skillManagement", color: "blue" }, { label: "docs.enterpriseGrid.skillRecruit", color: "green" }, { label: "docs.enterpriseGrid.skillTraining", color: "teal" }]
      },
      {
        id: 2,
        name: "Tr\u1EA7n Th\u1ECB B",
        email: "b.tran@vnr.vn",
        role: "docs.enterpriseGrid.roleSpecialist",
        tenure: "docs.enterpriseGrid.tenure2",
        kpi: 68,
        status: "active",
        skills: [{ label: "Excel", color: "green" }, { label: "docs.enterpriseGrid.skillReport", color: "purple" }]
      },
      {
        id: 3,
        name: "L\xEA V\u0103n C",
        email: "c.le@vnr.vn",
        role: "docs.enterpriseGrid.roleIntern",
        tenure: "docs.enterpriseGrid.tenure3",
        kpi: 45,
        status: "absent",
        skills: [{ label: "Angular", color: "blue" }, { label: "Figma", color: "pink" }]
      },
      {
        id: 4,
        name: "Ph\u1EA1m Thu D",
        email: "d.pham@vnr.vn",
        role: "docs.enterpriseGrid.roleLead",
        tenure: "docs.enterpriseGrid.tenure4",
        kpi: 81,
        status: "active",
        skills: [{ label: "docs.enterpriseGrid.skillPlanning", color: "orange" }, { label: "docs.enterpriseGrid.skillBudget", color: "cyan" }]
      },
      {
        id: 5,
        name: "\u0110\u1ED7 Minh E",
        email: "e.do@vnr.vn",
        role: "docs.enterpriseGrid.roleStaff",
        tenure: "docs.enterpriseGrid.tenure5",
        kpi: 74,
        status: "active",
        skills: [{ label: "docs.enterpriseGrid.skillTimekeeping", color: "blue" }, { label: "docs.enterpriseGrid.skillRecords", color: "purple" }]
      },
      {
        id: 6,
        name: "V\u0169 H\u1EA3i F",
        email: "f.vu@vnr.vn",
        role: "docs.enterpriseGrid.roleLead",
        tenure: "docs.enterpriseGrid.tenure6",
        kpi: 58,
        status: "absent",
        skills: [{ label: "docs.enterpriseGrid.skillExternal", color: "teal" }, { label: "docs.enterpriseGrid.skillContract", color: "pink" }]
      }
    ];
    this.peopleShort = this.people.slice(0, 3);
    this.userCell = viewChild("userCell", ...ngDevMode ? [{ debugName: "userCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.roleCell = viewChild("roleCell", ...ngDevMode ? [{ debugName: "roleCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.skillCell = viewChild("skillCell", ...ngDevMode ? [{ debugName: "skillCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kpiCell = viewChild("kpiCell", ...ngDevMode ? [{ debugName: "kpiCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusCell = viewChild("statusCell", ...ngDevMode ? [{ debugName: "statusCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.actionCell = viewChild("actionCell", ...ngDevMode ? [{ debugName: "actionCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.richCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), cell: this.userCell() },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), cell: this.roleCell() },
      { key: "skills", title: this.t.instant("docs.enterpriseGrid.colSkills"), cell: this.skillCell() },
      { key: "kpi", title: this.t.instant("docs.enterpriseGrid.colKpi"), width: "180px", cell: this.kpiCell() },
      { key: "status", title: this.t.instant("docs.enterpriseGrid.colStatus"), cell: this.statusCell() },
      { key: "act", title: "", align: "right", width: "96px", cell: this.actionCell() }
    ]), ...ngDevMode ? [{ debugName: "richCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortRichCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), sortable: true, cell: this.userCell() },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), cell: this.roleCell() },
      { key: "kpi", title: this.t.instant("docs.enterpriseGrid.colKpi"), width: "180px", sortable: true, cell: this.kpiCell() },
      { key: "status", title: this.t.instant("docs.enterpriseGrid.colStatus"), cell: this.statusCell() }
    ]), ...ngDevMode ? [{ debugName: "sortRichCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), cell: this.userCell() },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), cell: this.roleCell() },
      { key: "status", title: this.t.instant("docs.enterpriseGrid.colStatus"), cell: this.statusCell() }
    ]), ...ngDevMode ? [{ debugName: "selCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.stripedCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), cell: this.userCell() },
      { key: "skills", title: this.t.instant("docs.enterpriseGrid.colSkills"), cell: this.skillCell() },
      { key: "kpi", title: this.t.instant("docs.enterpriseGrid.colKpi"), width: "180px", cell: this.kpiCell() },
      { key: "status", title: this.t.instant("docs.enterpriseGrid.colStatus"), cell: this.statusCell() }
    ]), ...ngDevMode ? [{ debugName: "stripedCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.recordCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), cell: this.userCell() },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), cell: this.roleCell() },
      { key: "skills", title: this.t.instant("docs.enterpriseGrid.colSkills"), cell: this.skillCell() },
      { key: "kpi", title: this.t.instant("docs.enterpriseGrid.colKpi"), cell: this.kpiCell() },
      { key: "status", title: this.t.instant("docs.enterpriseGrid.colStatus"), cell: this.statusCell() }
    ]), ...ngDevMode ? [{ debugName: "recordCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.inCardCols = computed(() => (this.lang(), [
      { key: "name", title: this.t.instant("docs.enterpriseGrid.colEmployee"), cell: this.userCell() },
      { key: "role", title: this.t.instant("docs.enterpriseGrid.colRole"), cell: this.roleCell() },
      { key: "act", title: "", align: "right", width: "96px", cell: this.actionCell() }
    ]), ...ngDevMode ? [{ debugName: "inCardCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.picked = signal([1], ...ngDevMode ? [{ debugName: "picked" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = ["docs.enterpriseGrid.when1", "docs.enterpriseGrid.when2"];
    this.t.onLangChange.subscribe((e) => this.lang.set(e.lang));
  }
  get rowActions() {
    return [
      { key: "view", icon: Eye, label: this.t.instant("docs.enterpriseGrid.actView") },
      { key: "edit", icon: Edit, label: this.t.instant("docs.enterpriseGrid.actEdit") },
      { key: "delete", icon: Trash, label: this.t.instant("docs.enterpriseGrid.actDelete"), danger: true }
    ];
  }
  /** Nhãn kỹ năng: key domain → dịch qua translate; proper noun (Angular, Excel, Figma) giữ literal. */
  skillsOf(r) {
    return r["skills"].map((s) => __spreadProps(__spreadValues({}, s), { label: this.t.instant(s.label) }));
  }
  kpiColor(v) {
    return v >= 80 ? "green" : v >= 60 ? "amber" : "red";
  }
  get pickedModel() {
    return this.picked();
  }
  set pickedModel(v) {
    this.picked.set(v);
  }
  static {
    this.\u0275fac = function SgDocGridEnt_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocGridEnt)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocGridEnt, selectors: [["sg-doc-grid-ent"]], viewQuery: function SgDocGridEnt_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.userCell, _c0, 5)(ctx.roleCell, _c1, 5)(ctx.skillCell, _c2, 5)(ctx.kpiCell, _c3, 5)(ctx.statusCell, _c4, 5)(ctx.actionCell, _c5, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(6);
      }
    }, decls: 116, vars: 160, consts: [["userCell", ""], ["roleCell", ""], ["skillCell", ""], ["kpiCell", ""], ["statusCell", ""], ["actionCell", ""], ["category", "Table & List", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%"], [3, "columns", "data", "showPagination"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "560px"], ["variant", "record", 3, "columns", "record"], [3, "title", "count", "countLabel", "divided"], [2, "width", "260px", 3, "ngModelChange", "ngModel", "placeholder"], ["variant", "primary", "tbActions", ""], [3, "icon", "size"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "0 0 8px"], ["rowKey", "id", 3, "selectedKeysChange", "columns", "data", "showPagination", "selectable", "selectedKeys"], [3, "columns", "data", "striped", "showPagination"], [2, "width", "100%", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "dv-cap"], ["dividers", "columns", 3, "columns", "data", "showPagination"], ["dividers", "grid", 3, "columns", "data", "showPagination"], ["dividers", "none", 3, "columns", "data", "showPagination"], [2, "width", "340px"], ["textOverflow", "truncate", 3, "columns", "data", "showPagination"], [3, "title", "flush"], [3, "name", "sub", "colorful", "avatarSize"], [3, "primary", "secondary"], [3, "tags", "max"], [3, "value", "color"], ["variant", "badge", 3, "status", "label", "dot"], [3, "actions", "moreLabel"]], template: function SgDocGridEnt_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "sg-doc", 6);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 7)(4, "div", 8);
        \u0275\u0275element(5, "hrm-grid", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 10);
        \u0275\u0275element(7, "sg-use", 11);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 12)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "sg-example", 14);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "div", 15);
        \u0275\u0275element(26, "hrm-grid", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "sg-example", 14);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "div", 8)(31, "hrm-table-toolbar", 17);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "hrm-input", 18);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocGridEnt_Template_hrm_input_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.kw, $event) || (ctx.kw = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "hrm-button", 19);
        \u0275\u0275element(37, "tabler-icon", 20);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(40, "hrm-grid", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "sg-example", 14);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "div", 8);
        \u0275\u0275element(45, "hrm-grid", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "sg-example", 14);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "div", 8);
        \u0275\u0275element(50, "hrm-grid", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "sg-example", 14);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "div", 8)(55, "p", 21);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementStart(58, "b");
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "hrm-grid", 22);
        \u0275\u0275twoWayListener("selectedKeysChange", function SgDocGridEnt_Template_hrm_grid_selectedKeysChange_62_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pickedModel, $event) || (ctx.pickedModel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "sg-example", 14);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementStart(66, "div", 8);
        \u0275\u0275element(67, "hrm-grid", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "sg-example", 14);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "div", 24)(72, "div")(73, "p", 25);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "hrm-grid", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div")(78, "p", 25);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(81, "hrm-grid", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div")(83, "p", 25);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(86, "hrm-grid", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div")(88, "p", 25);
        \u0275\u0275text(89);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(91, "hrm-grid", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "sg-example", 14);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementStart(95, "div", 29);
        \u0275\u0275element(96, "hrm-grid", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "sg-example", 14);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementStart(100, "div", 8)(101, "hrm-card", 31);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275element(103, "hrm-grid", 9);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(104, SgDocGridEnt_ng_template_104_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(106, SgDocGridEnt_ng_template_106_Template, 3, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(108, SgDocGridEnt_ng_template_108_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(110, SgDocGridEnt_ng_template_110_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(112, SgDocGridEnt_ng_template_112_Template, 2, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(114, SgDocGridEnt_ng_template_114_Template, 2, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 86, "docs.enterpriseGrid.title"))("desc", \u0275\u0275pipeBind1(2, 88, "docs.enterpriseGrid.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("columns", ctx.richCols())("data", ctx.people)("showPagination", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 90, "docs.enterpriseGrid.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 92, "docs.enterpriseGrid.behavior"))("avoid", \u0275\u0275pipeBind1(10, 94, "docs.enterpriseGrid.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 96, "docs.enterpriseGrid.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 98, "docs.enterpriseGrid.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 100, "docs.enterpriseGrid.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 102, "docs.enterpriseGrid.exRecordT"))("desc", \u0275\u0275pipeBind1(24, 104, "docs.enterpriseGrid.exRecordD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("columns", ctx.recordCols())("record", ctx.people[0]);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(28, 106, "docs.enterpriseGrid.exToolbarT"))("desc", \u0275\u0275pipeBind1(29, 108, "docs.enterpriseGrid.exToolbarD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 110, "docs.enterpriseGrid.toolbarTitle"))("count", ctx.people.length)("countLabel", \u0275\u0275pipeBind1(33, 112, "docs.enterpriseGrid.countLabel"))("divided", true);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.kw);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 114, "docs.enterpriseGrid.searchPh"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.plus)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 116, "docs.enterpriseGrid.addEmployee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.selCols())("data", ctx.people)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 118, "docs.enterpriseGrid.exRichT"))("desc", \u0275\u0275pipeBind1(43, 120, "docs.enterpriseGrid.exRichD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("columns", ctx.richCols())("data", ctx.people)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 122, "docs.enterpriseGrid.exSortT"))("desc", \u0275\u0275pipeBind1(48, 124, "docs.enterpriseGrid.exSortD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("columns", ctx.sortRichCols())("data", ctx.people)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(52, 126, "docs.enterpriseGrid.exSelectT"))("desc", \u0275\u0275pipeBind1(53, 128, "docs.enterpriseGrid.exSelectD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(57, 130, "docs.enterpriseGrid.selectedPre"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.picked().length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 132, "docs.enterpriseGrid.selectedPost"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.selCols())("data", ctx.people)("showPagination", false)("selectable", true);
        \u0275\u0275twoWayProperty("selectedKeys", ctx.pickedModel);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(64, 134, "docs.enterpriseGrid.exStripedT"))("desc", \u0275\u0275pipeBind1(65, 136, "docs.enterpriseGrid.exStripedD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("columns", ctx.stripedCols())("data", ctx.people)("striped", true)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(69, 138, "docs.enterpriseGrid.exDividersT"))("desc", \u0275\u0275pipeBind1(70, 140, "docs.enterpriseGrid.exDividersD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 142, "docs.enterpriseGrid.capRows"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.plainCols())("data", ctx.peopleShort)("showPagination", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 144, "docs.enterpriseGrid.capColumns"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.plainCols())("data", ctx.peopleShort)("showPagination", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 146, "docs.enterpriseGrid.capGrid"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.plainCols())("data", ctx.peopleShort)("showPagination", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 148, "docs.enterpriseGrid.capNone"));
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.plainCols())("data", ctx.peopleShort)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(93, 150, "docs.enterpriseGrid.exTruncT"))("desc", \u0275\u0275pipeBind1(94, 152, "docs.enterpriseGrid.exTruncD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("columns", ctx.truncCols())("data", ctx.people)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(98, 154, "docs.enterpriseGrid.exInCardT"))("desc", \u0275\u0275pipeBind1(99, 156, "docs.enterpriseGrid.exInCardD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(102, 158, "docs.enterpriseGrid.cardTitle"))("flush", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.inCardCols())("data", ctx.people)("showPagination", false);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      TablerIconComponent,
      TranslateModule,
      HrmGrid,
      HrmCard,
      HrmTableToolbar,
      HrmInput,
      HrmButton,
      HrmUserCell,
      HrmTextCell,
      HrmTagsCell,
      HrmProgressCell,
      HrmStatusCell,
      HrmActionCell,
      SgDoc,
      SgUse,
      SgDo,
      SgDont,
      SgExample,
      TranslatePipe
    ], styles: ["\n.dv-cap[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-sub);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n/*# sourceMappingURL=grid.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocGridEnt, [{
    type: Component,
    args: [{ selector: "sg-doc-grid-ent", imports: [
      FormsModule,
      TablerIconComponent,
      TranslateModule,
      HrmGrid,
      HrmCard,
      HrmTableToolbar,
      HrmInput,
      HrmButton,
      HrmUserCell,
      HrmTextCell,
      HrmTagsCell,
      HrmProgressCell,
      HrmStatusCell,
      HrmActionCell,
      SgDoc,
      SgUse,
      SgDo,
      SgDont,
      SgExample
    ], template: `
    <sg-doc category="Table & List" [title]="'docs.enterpriseGrid.title' | translate" [desc]="'docs.enterpriseGrid.desc' | translate">

      <div sgOverview>
        <div style="width:100%">
          <hrm-grid [columns]="richCols()" [data]="people" [showPagination]="false" />
        </div>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.enterpriseGrid.purpose' | translate" [when]="when"
          [behavior]="'docs.enterpriseGrid.behavior' | translate"
          [avoid]="'docs.enterpriseGrid.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.enterpriseGrid.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.enterpriseGrid.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.enterpriseGrid.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.enterpriseGrid.exRecordT' | translate"
          [desc]="'docs.enterpriseGrid.exRecordD' | translate">
          <div style="width:100%;max-width:560px">
            <hrm-grid variant="record" [columns]="recordCols()" [record]="people[0]" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exToolbarT' | translate"
          [desc]="'docs.enterpriseGrid.exToolbarD' | translate">
          <div style="width:100%">
            <hrm-table-toolbar [title]="'docs.enterpriseGrid.toolbarTitle' | translate" [count]="people.length" [countLabel]="'docs.enterpriseGrid.countLabel' | translate" [divided]="true">
              <hrm-input [(ngModel)]="kw" [placeholder]="'docs.enterpriseGrid.searchPh' | translate" style="width:260px" />
              <hrm-button variant="primary" tbActions><tabler-icon [icon]="plus" [size]="16" /> {{ 'docs.enterpriseGrid.addEmployee' | translate }}</hrm-button>
            </hrm-table-toolbar>
            <hrm-grid [columns]="selCols()" [data]="people" [showPagination]="false" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exRichT' | translate"
          [desc]="'docs.enterpriseGrid.exRichD' | translate">
          <div style="width:100%">
            <hrm-grid [columns]="richCols()" [data]="people" [showPagination]="false" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exSortT' | translate"
          [desc]="'docs.enterpriseGrid.exSortD' | translate">
          <div style="width:100%">
            <hrm-grid [columns]="sortRichCols()" [data]="people" [showPagination]="false" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exSelectT' | translate"
          [desc]="'docs.enterpriseGrid.exSelectD' | translate">
          <div style="width:100%">
            <p style="font-size: var(--fs-13);color:var(--text-sub);margin:0 0 8px">{{ 'docs.enterpriseGrid.selectedPre' | translate }} <b>{{ picked().length }}</b> {{ 'docs.enterpriseGrid.selectedPost' | translate }}</p>
            <hrm-grid [columns]="selCols()" [data]="people" [showPagination]="false"
              [selectable]="true" rowKey="id" [(selectedKeys)]="pickedModel" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exStripedT' | translate"
          [desc]="'docs.enterpriseGrid.exStripedD' | translate">
          <div style="width:100%">
            <hrm-grid [columns]="stripedCols()" [data]="people" [striped]="true" [showPagination]="false" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exDividersT' | translate"
          [desc]="'docs.enterpriseGrid.exDividersD' | translate">
          <div style="width:100%;display:flex;flex-direction:column;gap:16px">
            <div>
              <p class="dv-cap">{{ 'docs.enterpriseGrid.capRows' | translate }}</p>
              <hrm-grid [columns]="plainCols()" [data]="peopleShort" [showPagination]="false" />
            </div>
            <div>
              <p class="dv-cap">{{ 'docs.enterpriseGrid.capColumns' | translate }}</p>
              <hrm-grid dividers="columns" [columns]="plainCols()" [data]="peopleShort" [showPagination]="false" />
            </div>
            <div>
              <p class="dv-cap">{{ 'docs.enterpriseGrid.capGrid' | translate }}</p>
              <hrm-grid dividers="grid" [columns]="plainCols()" [data]="peopleShort" [showPagination]="false" />
            </div>
            <div>
              <p class="dv-cap">{{ 'docs.enterpriseGrid.capNone' | translate }}</p>
              <hrm-grid dividers="none" [columns]="plainCols()" [data]="peopleShort" [showPagination]="false" />
            </div>
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exTruncT' | translate"
          [desc]="'docs.enterpriseGrid.exTruncD' | translate">
          <div style="width:340px">
            <hrm-grid textOverflow="truncate" [columns]="truncCols()" [data]="people" [showPagination]="false" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.enterpriseGrid.exInCardT' | translate"
          [desc]="'docs.enterpriseGrid.exInCardD' | translate">
          <div style="width:100%">
            <hrm-card [title]="'docs.enterpriseGrid.cardTitle' | translate" [flush]="true">
              <hrm-grid [columns]="inCardCols()" [data]="people" [showPagination]="false" />
            </hrm-card>
          </div>
        </sg-example>
      </div>

    </sg-doc>

    <!-- \xD4 gi\xE0u \u2014 c\u1EAFm th\u1EB3ng th\xE0nh ph\u1EA7n Table Cells -->
    <!-- B\u1EA3ng m\u1EB7c \u0111\u1ECBnh: avatar + t\xEAn + sub, KH\xD4NG ch\u1EA5m hi\u1EC7n di\u1EC7n (status l\xE0 opt-in cho m\xE0n ch\u1EA5m c\xF4ng). -->
    <ng-template #userCell let-r>
      <hrm-user-cell [name]="$any(r.name)" [sub]="$any(r.email)" [colorful]="true" [avatarSize]="36" />
    </ng-template>
    <ng-template #roleCell let-r>
      <hrm-text-cell [primary]="$any(r.role) | translate" [secondary]="$any(r.tenure) | translate" />
    </ng-template>
    <ng-template #skillCell let-r>
      <hrm-tags-cell [tags]="skillsOf($any(r))" [max]="2" />
    </ng-template>
    <ng-template #kpiCell let-r>
      <hrm-progress-cell [value]="$any(r.kpi)" [color]="kpiColor($any(r.kpi))" />
    </ng-template>
    <!-- badge (tint + ch\u1EEF \u0111\u1EADm + ch\u1EA5m): tr\u1EA1ng th\xE1i quy tr\xECnh n\u1ED5i b\u1EADt m\xE0 kh\xF4ng nh\u1EA7m button. -->
    <ng-template #statusCell let-r>
      <hrm-status-cell [status]="r.status === 'active' ? 'success' : 'error'"
        [label]="(r.status === 'active' ? 'docs.enterpriseGrid.statusActive' : 'docs.enterpriseGrid.statusAbsent') | translate" variant="badge" [dot]="true" />
    </ng-template>
    <ng-template #actionCell>
      <hrm-action-cell [actions]="rowActions" [moreLabel]="'docs.enterpriseGrid.moreLabel' | translate" />
    </ng-template>
  `, styles: ["/* angular:styles/component:css;098e944c184bdc8c74704d9098379ce82d38e22274f5c6d3c6455dc87d3fb6a8;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/grid.ts */\n.dv-cap {\n  margin: 0 0 6px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-sub);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n/*# sourceMappingURL=grid.css.map */\n"] }]
  }], () => [], { userCell: [{ type: ViewChild, args: ["userCell", { isSignal: true }] }], roleCell: [{ type: ViewChild, args: ["roleCell", { isSignal: true }] }], skillCell: [{ type: ViewChild, args: ["skillCell", { isSignal: true }] }], kpiCell: [{ type: ViewChild, args: ["kpiCell", { isSignal: true }] }], statusCell: [{ type: ViewChild, args: ["statusCell", { isSignal: true }] }], actionCell: [{ type: ViewChild, args: ["actionCell", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocGridEnt, { className: "SgDocGridEnt", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/grid.ts", lineNumber: 162 });
})();
export {
  SgDocGridEnt
};
//# sourceMappingURL=chunk-UOJ254ED.js.map
