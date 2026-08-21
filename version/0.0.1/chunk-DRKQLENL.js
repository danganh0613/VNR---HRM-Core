import {
  HrmDropdown
} from "./chunk-ORJB2TMU.js";
import "./chunk-GKLVT5NB.js";
import "./chunk-UDAG7UB6.js";
import {
  NzDropDownModule,
  NzDropdownMenuComponent
} from "./chunk-F6AHQ5QX.js";
import {
  NzMenuDirective,
  NzMenuDividerDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-ODJV4T5O.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
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
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import {
  HrmSideNav
} from "./chunk-5JLQGRFF.js";
import "./chunk-WH372SY7.js";
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
  Bell,
  Building,
  ChartBar,
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  LayoutDashboard,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Settings,
  TablerIconComponent,
  Users
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/side-nav.ts
function SgDocSideNav_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31)(1, "span", 32);
    \u0275\u0275text(2, "\u0110\u1EB7ng V\u0169");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, "danganh@vnr.vn");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r0.settings)("size", 16);
  }
}
function SgDocSideNav_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 38);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.account().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.account().sub);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.chevDown)("size", 16);
  }
}
function SgDocSideNav_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31)(1, "span", 32);
    \u0275\u0275text(2, "\u0110\u1EB7ng V\u0169");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4, "danganh@vnr.vn");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r0.settings)("size", 16);
  }
}
var SgDocSideNav = class _SgDocSideNav {
  constructor() {
    this.t = inject(TranslateService);
    this.caret = ChevronRight;
    this.chevDown = ChevronDown;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.bell = Bell;
    this.switcher = Building;
    this.settings = Settings;
    this.logoFull = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.selOv = signal("dash", ...ngDevMode ? [{ debugName: "selOv" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selEnd = signal("dash", ...ngDevMode ? [{ debugName: "selEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selNest = signal("general", ...ngDevMode ? [{ debugName: "selNest" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selHdr = signal("dash", ...ngDevMode ? [{ debugName: "selHdr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colOv = signal(false, ...ngDevMode ? [{ debugName: "colOv" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colHdr = signal(false, ...ngDevMode ? [{ debugName: "colHdr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.account = signal({ name: "T\u1EADp \u0111o\xE0n VNR", sub: this.tr("acctEnterprise") }, ...ngDevMode ? [{ debugName: "account" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selSrch = signal("emp", ...ngDevMode ? [{ debugName: "selSrch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.sideNav.when1",
      "docs.sideNav.when2",
      "docs.sideNav.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.sideNav." + key);
  }
  setAcct(name, sub) {
    this.account.set({ name, sub });
  }
  get overview() {
    return [
      { header: this.tr("secMain"), items: [
        { key: "dash", label: this.tr("itemDashboard"), icon: LayoutDashboard },
        { key: "proj", label: this.tr("itemProject"), icon: Folder },
        { key: "ana", label: this.tr("itemAnalytics"), icon: ChartBar }
      ] },
      { header: this.tr("secDocs"), items: [
        { key: "docs", label: this.tr("itemAllDocs"), icon: FileText }
      ] }
    ];
  }
  get endContent() {
    return [
      { header: this.tr("secMain"), items: [
        { key: "dash", label: this.tr("itemDashboard"), icon: LayoutDashboard },
        { key: "proj", label: this.tr("itemProject"), icon: Folder, badge: 12 },
        { key: "ana", label: this.tr("itemAnalytics"), icon: ChartBar, badge: this.tr("badgeNew") },
        { key: "team", label: this.tr("itemTeam"), icon: Users, trailing: this.tr("trailingMembers") }
      ] }
    ];
  }
  get nested() {
    return [
      { header: this.tr("secMain"), items: [
        { key: "dash", label: this.tr("itemDashboard"), icon: LayoutDashboard },
        { key: "set", label: this.tr("itemSettings"), icon: Settings, children: [
          { key: "general", label: this.tr("itemGeneral") },
          { key: "security", label: this.tr("itemSecurity") },
          { key: "notify", label: this.tr("itemNotify") }
        ] }
      ] }
    ];
  }
  get headerNav() {
    return [
      { header: this.tr("secNavigation"), items: [
        { key: "dash", label: this.tr("itemDashboard"), icon: LayoutDashboard },
        { key: "set", label: this.tr("itemSettings"), icon: Settings }
      ] }
    ];
  }
  get searchNav() {
    return [
      { items: [
        { key: "nhansu", label: this.tr("grpStaff"), icon: Users, keywords: this.kw("kwStaff"), children: [
          { key: "emp", label: this.tr("itemStaffList") },
          { key: "org", label: this.tr("itemOrgChart") },
          { key: "contract", label: this.tr("itemContract") }
        ] },
        { key: "chamcong", label: this.tr("grpAttendance"), icon: ChartBar, keywords: this.kw("kwAttendance"), children: [
          { key: "timesheet", label: this.tr("itemTimesheet") },
          { key: "leave", label: this.tr("itemLeave") },
          { key: "shift", label: this.tr("itemShift") }
        ] },
        { key: "luong", label: this.tr("grpPayroll"), icon: FileText, keywords: this.kw("kwPayroll"), children: [
          { key: "payslip", label: this.tr("itemPayslip") },
          { key: "tax", label: this.tr("itemTax") }
        ] }
      ] }
    ];
  }
  kw(key) {
    return this.tr(key).split("|").map((s) => s.trim()).filter(Boolean);
  }
  static {
    this.\u0275fac = function SgDocSideNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSideNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSideNav, selectors: [["sg-doc-side-nav"]], decls: 131, vars: 182, consts: [["notifyMenu", "nzDropdownMenu"], ["acctMenu", "nzDropdownMenu"], ["userMenu", "nzDropdownMenu"], ["category", "Appshell", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "max-content"], [3, "itemClick", "collapsedChange", "sections", "selectedKey", "collapsed", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon"], ["snActions", "", "type", "button", "hrmDropdownTrigger", "click", 1, "sn-bell", 3, "hrmDropdown"], [3, "icon", "size"], [1, "sn-bell-dot"], ["snFooter", "", "type", "button", "hrmDropdownTrigger", "click", 1, "sn-user", 3, "hrmDropdown"], [1, "sn-user-av"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "12px 0 0", "max-width", "58ch", "line-height", "1.5", 3, "innerHTML"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "itemClick", "sections", "selectedKey", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon"], ["snHead", "", "type", "button", "hrmDropdownTrigger", "click", 1, "sn-acct", 3, "hrmDropdown"], [1, "sn-acct-ic"], [3, "itemClick", "sections", "selectedKey", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "searchable", "searchPlaceholder", "clearLabel", "searchEmpty"], ["nz-menu", "", 2, "min-width", "260px"], ["nz-menu-item", ""], ["nz-menu-divider", ""], ["nz-menu-item", "", 2, "color", "var(--primary-base)"], ["nz-menu", "", 2, "min-width", "220px"], ["nz-menu-item", "", 3, "click"], ["nz-menu", "", 2, "min-width", "200px"], ["nz-menu-item", "", 2, "color", "var(--error-base)"], [1, "sn-user-info"], [1, "sn-user-name"], [1, "sn-user-mail"], [1, "sn-user-gear", 3, "icon", "size"], [2, "flex", "1", "min-width", "0"], [2, "display", "block", "font-size", "var(--fs-14)", "font-weight", "600", "color", "var(--text-strong)"], [2, "display", "block", "font-size", "var(--fs-12)", "color", "var(--text-sub)"], [2, "color", "var(--text-soft)", 3, "icon", "size"]], template: function SgDocSideNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 3);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "hrm-side-nav", 6);
        \u0275\u0275listener("itemClick", function SgDocSideNav_Template_hrm_side_nav_itemClick_5_listener($event) {
          return ctx.selOv.set($event.key);
        })("collapsedChange", function SgDocSideNav_Template_hrm_side_nav_collapsedChange_5_listener($event) {
          return ctx.colOv.set($event);
        });
        \u0275\u0275elementStart(6, "button", 7);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275element(8, "tabler-icon", 8)(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "span", 11);
        \u0275\u0275text(13, "\u0110V");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, SgDocSideNav_Conditional_14_Template, 6, 2);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(15, "p", 12);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275element(18, "sg-use", 14);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15)(23, "sg-do");
        \u0275\u0275element(24, "span", 16);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-do");
        \u0275\u0275element(27, "span", 16);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-dont");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "sg-dont");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 17)(36, "sg-example", 18);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row")(40, "div", 5)(41, "hrm-side-nav", 19);
        \u0275\u0275listener("itemClick", function SgDocSideNav_Template_hrm_side_nav_itemClick_41_listener($event) {
          return ctx.selEnd.set($event.key);
        });
        \u0275\u0275elementStart(42, "button", 7);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275element(44, "tabler-icon", 8)(45, "span", 9);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(46, "sg-example", 18);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row")(50, "div", 5)(51, "hrm-side-nav", 19);
        \u0275\u0275listener("itemClick", function SgDocSideNav_Template_hrm_side_nav_itemClick_51_listener($event) {
          return ctx.selNest.set($event.key);
        });
        \u0275\u0275elementStart(52, "button", 7);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275element(54, "tabler-icon", 8)(55, "span", 9);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(56, "sg-example", 18);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementStart(59, "sg-row")(60, "div", 5)(61, "hrm-side-nav", 6);
        \u0275\u0275listener("itemClick", function SgDocSideNav_Template_hrm_side_nav_itemClick_61_listener($event) {
          return ctx.selHdr.set($event.key);
        })("collapsedChange", function SgDocSideNav_Template_hrm_side_nav_collapsedChange_61_listener($event) {
          return ctx.colHdr.set($event);
        });
        \u0275\u0275elementStart(62, "button", 7);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275element(64, "tabler-icon", 8)(65, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 20);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementStart(68, "span", 21);
        \u0275\u0275element(69, "tabler-icon", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(70, SgDocSideNav_Conditional_70_Template, 6, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 10);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementStart(73, "span", 11);
        \u0275\u0275text(74, "\u0110V");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(75, SgDocSideNav_Conditional_75_Template, 6, 2);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(76, "sg-example", 18);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementStart(79, "sg-row")(80, "div", 5)(81, "hrm-side-nav", 22);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275listener("itemClick", function SgDocSideNav_Template_hrm_side_nav_itemClick_81_listener($event) {
          return ctx.selSrch.set($event.key);
        });
        \u0275\u0275elementStart(85, "button", 7);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275element(87, "tabler-icon", 8)(88, "span", 9);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(89, "nz-dropdown-menu", null, 0)(91, "ul", 23)(92, "li", 24);
        \u0275\u0275element(93, "span", 16);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li", 24)(96, "span");
        \u0275\u0275text(97);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "li", 24)(100, "span");
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(103, "li", 25);
        \u0275\u0275elementStart(104, "li", 26);
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(107, "nz-dropdown-menu", null, 1)(109, "ul", 27)(110, "li", 28);
        \u0275\u0275listener("click", function SgDocSideNav_Template_li_click_110_listener() {
          return ctx.setAcct("T\u1EADp \u0111o\xE0n VNR", ctx.tr("acctEnterprise"));
        });
        \u0275\u0275text(111, "T\u1EADp \u0111o\xE0n VNR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "li", 28);
        \u0275\u0275listener("click", function SgDocSideNav_Template_li_click_112_listener() {
          return ctx.setAcct(ctx.tr("acctHcm"), ctx.tr("acctSouth"));
        });
        \u0275\u0275text(113);
        \u0275\u0275pipe(114, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "li", 28);
        \u0275\u0275listener("click", function SgDocSideNav_Template_li_click_115_listener() {
          return ctx.setAcct(ctx.tr("acctHanoi"), ctx.tr("acctNorth"));
        });
        \u0275\u0275text(116);
        \u0275\u0275pipe(117, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "nz-dropdown-menu", null, 2)(120, "ul", 29)(121, "li", 24);
        \u0275\u0275text(122);
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li", 24);
        \u0275\u0275text(125);
        \u0275\u0275pipe(126, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(127, "li", 25);
        \u0275\u0275elementStart(128, "li", 30);
        \u0275\u0275text(129);
        \u0275\u0275pipe(130, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const notifyMenu_r2 = \u0275\u0275reference(90);
        const acctMenu_r3 = \u0275\u0275reference(108);
        const userMenu_r4 = \u0275\u0275reference(119);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 106, "docs.sideNav.title"))("desc", \u0275\u0275pipeBind1(2, 108, "docs.sideNav.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("sections", ctx.overview)("selectedKey", ctx.selOv())("collapsed", ctx.colOv())("caretIcon", ctx.caret)("logoSrc", ctx.logoFull)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", notifyMenu_r2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 110, "docs.sideNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sn-user--mini", ctx.colOv());
        \u0275\u0275property("hrmDropdown", userMenu_r4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 112, "docs.sideNav.ariaAccount"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.colOv() ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 114, "docs.sideNav.ovNote"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(19, 116, "docs.sideNav.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(20, 118, "docs.sideNav.behavior"))("avoid", \u0275\u0275pipeBind1(21, 120, "docs.sideNav.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 122, "docs.sideNav.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(28, 124, "docs.sideNav.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 126, "docs.sideNav.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 128, "docs.sideNav.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 130, "docs.sideNav.exEndT"))("desc", \u0275\u0275pipeBind1(38, 132, "docs.sideNav.exEndD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("sections", ctx.endContent)("selectedKey", ctx.selEnd())("caretIcon", ctx.caret)("logoSrc", ctx.logoFull)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", notifyMenu_r2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(43, 134, "docs.sideNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 136, "docs.sideNav.exNestedT"))("desc", \u0275\u0275pipeBind1(48, 138, "docs.sideNav.exNestedD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("sections", ctx.nested)("selectedKey", ctx.selNest())("caretIcon", ctx.caret)("logoSrc", ctx.logoFull)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", notifyMenu_r2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(53, 140, "docs.sideNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(57, 142, "docs.sideNav.exSwitchT"))("desc", \u0275\u0275pipeBind1(58, 144, "docs.sideNav.exSwitchD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("sections", ctx.headerNav)("selectedKey", ctx.selHdr())("collapsed", ctx.colHdr())("caretIcon", ctx.caret)("logoSrc", ctx.logoFull)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", notifyMenu_r2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(63, 146, "docs.sideNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sn-acct--mini", ctx.colHdr());
        \u0275\u0275property("hrmDropdown", acctMenu_r3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(67, 148, "docs.sideNav.switchAccount"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.switcher)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.colHdr() ? 70 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("sn-user--mini", ctx.colHdr());
        \u0275\u0275property("hrmDropdown", userMenu_r4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(72, 150, "docs.sideNav.ariaAccount"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.colHdr() ? 75 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(77, 152, "docs.sideNav.exSearchT"))("desc", \u0275\u0275pipeBind1(78, 154, "docs.sideNav.exSearchD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("sections", ctx.searchNav)("selectedKey", ctx.selSrch())("caretIcon", ctx.caret)("logoSrc", ctx.logoFull)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand)("searchable", true)("searchPlaceholder", \u0275\u0275pipeBind1(82, 156, "docs.sideNav.searchPh"))("clearLabel", \u0275\u0275pipeBind1(83, 158, "docs.sideNav.searchClear"))("searchEmpty", \u0275\u0275pipeBind1(84, 160, "docs.sideNav.searchEmpty"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", notifyMenu_r2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 162, "docs.sideNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(94, 164, "docs.sideNav.notifyLeave"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 166, "docs.sideNav.notifyPayroll"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 168, "docs.sideNav.notifyOnboard"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 170, "docs.sideNav.notifyAll"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 172, "docs.sideNav.acctHcm"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 174, "docs.sideNav.acctHanoi"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 176, "docs.sideNav.userProfile"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 178, "docs.sideNav.userSettings"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(130, 180, "docs.sideNav.userLogout"));
      }
    }, dependencies: [TranslateModule, TablerIconComponent, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzMenuDividerDirective, NzDropdownMenuComponent, NzMenuModule, HrmSideNav, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.sn-bell[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-bell[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-bell-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 8px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--error-base);\n  border: 1.5px solid var(--bg-surface);\n}\n.sn-acct[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-acct[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n}\n.sn-acct--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-user[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-user--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n}\n.sn-user-av[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-base);\n  color: #fff;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  flex: none;\n}\n.sn-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sn-user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-user-mail[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-user-gear[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  flex: none;\n}\n/*# sourceMappingURL=side-nav.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSideNav, [{
    type: Component,
    args: [{ selector: "sg-doc-side-nav", imports: [TranslateModule, TablerIconComponent, NzDropDownModule, NzMenuModule, HrmSideNav, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Appshell" [title]="'docs.sideNav.title' | translate" [desc]="'docs.sideNav.desc' | translate">

      <div sgOverview>
        <div style="width:max-content">
          <hrm-side-nav [sections]="overview" [selectedKey]="selOv()" (itemClick)="selOv.set($event.key)"
            [collapsed]="colOv()" (collapsedChange)="colOv.set($event)" [caretIcon]="caret"
            [logoSrc]="logoFull" [logoMarkSrc]="logoMark" [toggleIcon]="sbCollapse" [expandIcon]="sbExpand">
            <button snActions type="button" class="sn-bell" [attr.aria-label]="'docs.sideNav.ariaNotify' | translate" [hrmDropdown]="notifyMenu" hrmDropdownTrigger="click">
              <tabler-icon [icon]="bell" [size]="20" /><span class="sn-bell-dot"></span>
            </button>
            <button snFooter type="button" class="sn-user" [class.sn-user--mini]="colOv()" [hrmDropdown]="userMenu" hrmDropdownTrigger="click" [attr.aria-label]="'docs.sideNav.ariaAccount' | translate">
              <span class="sn-user-av">\u0110V</span>
              @if (!colOv()) {
                <span class="sn-user-info">
                  <span class="sn-user-name">\u0110\u1EB7ng V\u0169</span>
                  <span class="sn-user-mail">danganh&#64;vnr.vn</span>
                </span>
                <tabler-icon [icon]="settings" [size]="16" class="sn-user-gear" />
              }
            </button>
          </hrm-side-nav>
        </div>
        <p style="font-size: var(--fs-13);color:var(--text-sub);margin:12px 0 0;max-width:58ch;line-height:1.5" [innerHTML]="'docs.sideNav.ovNote' | translate"></p>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.sideNav.purpose' | translate"
          [when]="when"
          [behavior]="'docs.sideNav.behavior' | translate"
          [avoid]="'docs.sideNav.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.sideNav.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.sideNav.do2' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.sideNav.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.sideNav.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.sideNav.exEndT' | translate"
          [desc]="'docs.sideNav.exEndD' | translate">
          <sg-row>
            <div style="width:max-content">
              <hrm-side-nav [sections]="endContent" [selectedKey]="selEnd()" (itemClick)="selEnd.set($event.key)" [caretIcon]="caret"
                [logoSrc]="logoFull" [logoMarkSrc]="logoMark" [toggleIcon]="sbCollapse" [expandIcon]="sbExpand">
                <button snActions type="button" class="sn-bell" [attr.aria-label]="'docs.sideNav.ariaNotify' | translate" [hrmDropdown]="notifyMenu" hrmDropdownTrigger="click">
                  <tabler-icon [icon]="bell" [size]="20" /><span class="sn-bell-dot"></span>
                </button>
              </hrm-side-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.sideNav.exNestedT' | translate"
          [desc]="'docs.sideNav.exNestedD' | translate">
          <sg-row>
            <div style="width:max-content">
              <hrm-side-nav [sections]="nested" [selectedKey]="selNest()" (itemClick)="selNest.set($event.key)" [caretIcon]="caret"
                [logoSrc]="logoFull" [logoMarkSrc]="logoMark" [toggleIcon]="sbCollapse" [expandIcon]="sbExpand">
                <button snActions type="button" class="sn-bell" [attr.aria-label]="'docs.sideNav.ariaNotify' | translate" [hrmDropdown]="notifyMenu" hrmDropdownTrigger="click">
                  <tabler-icon [icon]="bell" [size]="20" /><span class="sn-bell-dot"></span>
                </button>
              </hrm-side-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.sideNav.exSwitchT' | translate"
          [desc]="'docs.sideNav.exSwitchD' | translate">
          <sg-row>
            <div style="width:max-content">
              <hrm-side-nav [sections]="headerNav" [selectedKey]="selHdr()" (itemClick)="selHdr.set($event.key)"
                [collapsed]="colHdr()" (collapsedChange)="colHdr.set($event)" [caretIcon]="caret"
                [logoSrc]="logoFull" [logoMarkSrc]="logoMark" [toggleIcon]="sbCollapse" [expandIcon]="sbExpand">
                <button snActions type="button" class="sn-bell" [attr.aria-label]="'docs.sideNav.ariaNotify' | translate" [hrmDropdown]="notifyMenu" hrmDropdownTrigger="click">
                  <tabler-icon [icon]="bell" [size]="20" /><span class="sn-bell-dot"></span>
                </button>
                <button snHead type="button" class="sn-acct" [class.sn-acct--mini]="colHdr()" [hrmDropdown]="acctMenu" hrmDropdownTrigger="click" [attr.aria-label]="'docs.sideNav.switchAccount' | translate">
                  <span class="sn-acct-ic"><tabler-icon [icon]="switcher" [size]="18" /></span>
                  @if (!colHdr()) {
                    <span style="flex:1;min-width:0">
                      <span style="display:block;font-size: var(--fs-14);font-weight:600;color:var(--text-strong)">{{ account().name }}</span>
                      <span style="display:block;font-size: var(--fs-12);color:var(--text-sub)">{{ account().sub }}</span>
                    </span>
                    <tabler-icon [icon]="chevDown" [size]="16" style="color:var(--text-soft)" />
                  }
                </button>
                <button snFooter type="button" class="sn-user" [class.sn-user--mini]="colHdr()" [hrmDropdown]="userMenu" hrmDropdownTrigger="click" [attr.aria-label]="'docs.sideNav.ariaAccount' | translate">
                  <span class="sn-user-av">\u0110V</span>
                  @if (!colHdr()) {
                    <span class="sn-user-info">
                      <span class="sn-user-name">\u0110\u1EB7ng V\u0169</span>
                      <span class="sn-user-mail">danganh&#64;vnr.vn</span>
                    </span>
                    <tabler-icon [icon]="settings" [size]="16" class="sn-user-gear" />
                  }
                </button>
              </hrm-side-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.sideNav.exSearchT' | translate"
          [desc]="'docs.sideNav.exSearchD' | translate">
          <sg-row>
            <div style="width:max-content">
              <hrm-side-nav [sections]="searchNav" [selectedKey]="selSrch()" (itemClick)="selSrch.set($event.key)" [caretIcon]="caret"
                [logoSrc]="logoFull" [logoMarkSrc]="logoMark" [toggleIcon]="sbCollapse" [expandIcon]="sbExpand"
                [searchable]="true" [searchPlaceholder]="'docs.sideNav.searchPh' | translate" [clearLabel]="'docs.sideNav.searchClear' | translate" [searchEmpty]="'docs.sideNav.searchEmpty' | translate">
                <button snActions type="button" class="sn-bell" [attr.aria-label]="'docs.sideNav.ariaNotify' | translate" [hrmDropdown]="notifyMenu" hrmDropdownTrigger="click">
                  <tabler-icon [icon]="bell" [size]="20" /><span class="sn-bell-dot"></span>
                </button>
              </hrm-side-nav>
            </div>
          </sg-row>
        </sg-example>
      </div>
    </sg-doc>

    <!-- Dropdown th\xF4ng b\xE1o (d\xF9ng chung m\u1ECDi chu\xF4ng) -->
    <nz-dropdown-menu #notifyMenu="nzDropdownMenu">
      <ul nz-menu style="min-width:260px">
        <li nz-menu-item><span [innerHTML]="'docs.sideNav.notifyLeave' | translate"></span></li>
        <li nz-menu-item><span>{{ 'docs.sideNav.notifyPayroll' | translate }}</span></li>
        <li nz-menu-item><span>{{ 'docs.sideNav.notifyOnboard' | translate }}</span></li>
        <li nz-menu-divider></li>
        <li nz-menu-item style="color:var(--primary-base)">{{ 'docs.sideNav.notifyAll' | translate }}</li>
      </ul>
    </nz-dropdown-menu>

    <!-- Dropdown \u0111\u1ED5i t\xE0i kho\u1EA3n/t\u1ED5 ch\u1EE9c -->
    <nz-dropdown-menu #acctMenu="nzDropdownMenu">
      <ul nz-menu style="min-width:220px">
        <li nz-menu-item (click)="setAcct('T\u1EADp \u0111o\xE0n VNR', tr('acctEnterprise'))">T\u1EADp \u0111o\xE0n VNR</li>
        <li nz-menu-item (click)="setAcct(tr('acctHcm'), tr('acctSouth'))">{{ 'docs.sideNav.acctHcm' | translate }}</li>
        <li nz-menu-item (click)="setAcct(tr('acctHanoi'), tr('acctNorth'))">{{ 'docs.sideNav.acctHanoi' | translate }}</li>
      </ul>
    </nz-dropdown-menu>

    <!-- Dropdown t\xE0i kho\u1EA3n ng\u01B0\u1EDDi d\xF9ng (\u0111\xE1y) -->
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <ul nz-menu style="min-width:200px">
        <li nz-menu-item>{{ 'docs.sideNav.userProfile' | translate }}</li>
        <li nz-menu-item>{{ 'docs.sideNav.userSettings' | translate }}</li>
        <li nz-menu-divider></li>
        <li nz-menu-item style="color:var(--error-base)">{{ 'docs.sideNav.userLogout' | translate }}</li>
      </ul>
    </nz-dropdown-menu>
  `, styles: ["/* angular:styles/component:css;ead03db853b2753fdd0da4b007dabb2c9c41f410777bd4235ef6d5e8cffab7e7;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/side-nav.ts */\n.sn-bell {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-bell:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-bell-dot {\n  position: absolute;\n  top: 7px;\n  right: 8px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--error-base);\n  border: 1.5px solid var(--bg-surface);\n}\n.sn-acct {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-acct:hover {\n  border-color: var(--primary-base);\n}\n.sn-acct--mini {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-user:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-user--mini {\n  width: auto;\n  padding: 4px;\n}\n.sn-user-av {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-base);\n  color: #fff;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  flex: none;\n}\n.sn-user-info {\n  flex: 1;\n  min-width: 0;\n}\n.sn-user-name {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-user-mail {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-user-gear {\n  color: var(--text-soft);\n  flex: none;\n}\n/*# sourceMappingURL=side-nav.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSideNav, { className: "SgDocSideNav", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/side-nav.ts", lineNumber: 192 });
})();
export {
  SgDocSideNav
};
//# sourceMappingURL=chunk-DRKQLENL.js.map
