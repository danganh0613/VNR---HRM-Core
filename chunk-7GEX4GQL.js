import {
  HrmTopNav
} from "./chunk-XEH4BVZD.js";
import {
  HrmDropdown
} from "./chunk-JSQXPTMM.js";
import "./chunk-BJZQPX5Z.js";
import {
  NzDropDownModule,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import "./chunk-NGY4ECW2.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  Bell,
  CalendarTime,
  ChevronDown,
  LayoutDashboard,
  Plus,
  ReportAnalytics,
  Search,
  Star,
  TablerIconComponent,
  Users
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/top-nav.ts
var _forTrack0 = ($index, $item) => $item.name;
function SgDocTopNav_For_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "span", 40);
    \u0275\u0275element(2, "tabler-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", p_r1.icon)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.desc);
  }
}
function SgDocTopNav_For_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "span", 40);
    \u0275\u0275element(2, "tabler-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", p_r2.icon)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.desc);
  }
}
var SgDocTopNav = class _SgDocTopNav {
  constructor() {
    this.t = inject(TranslateService);
    this.bell = Bell;
    this.search = Search;
    this.chev = ChevronDown;
    this.plus = Plus;
    this.star = Star;
    this.logo = "/assets/vnr-logo-full.svg";
    this.sel = signal("dash", ...ngDevMode ? [{ debugName: "sel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tnSearchOpen = signal(false, ...ngDevMode ? [{ debugName: "tnSearchOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selC = signal("dash", ...ngDevMode ? [{ debugName: "selC" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selE = signal("dash", ...ngDevMode ? [{ debugName: "selE" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.topNav.when1",
      "docs.topNav.when2",
      "docs.topNav.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.topNav." + key);
  }
  get items() {
    return [
      { key: "dash", label: this.tr("navDashboard") },
      { key: "hr", label: this.tr("navStaff") },
      { key: "att", label: this.tr("navAttendance") },
      { key: "pay", label: this.tr("navPayroll") },
      { key: "rep", label: this.tr("navReport") }
    ];
  }
  get items2() {
    return [
      { key: "dash", label: this.tr("navDashboard") },
      { key: "price", label: this.tr("navPricing") }
    ];
  }
  get iconItems() {
    return [
      { key: "dash", label: this.tr("navDashboard"), icon: LayoutDashboard },
      { key: "hr", label: this.tr("navStaff"), icon: Users },
      { key: "att", label: this.tr("navAttendance"), icon: CalendarTime },
      { key: "rep", label: this.tr("navReport"), icon: ReportAnalytics }
    ];
  }
  get products() {
    return [
      { name: this.tr("prodAttendance"), desc: this.tr("prodAttendanceDesc"), icon: CalendarTime },
      { name: this.tr("prodStaff"), desc: this.tr("prodStaffDesc"), icon: Users },
      { name: this.tr("prodReport"), desc: this.tr("prodReportDesc"), icon: ReportAnalytics },
      { name: this.tr("prodDashboard"), desc: this.tr("prodDashboardDesc"), icon: LayoutDashboard }
    ];
  }
  static {
    this.\u0275fac = function SgDocTopNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTopNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTopNav, selectors: [["sg-doc-top-nav"]], decls: 165, vars: 173, consts: [["mProd", "nzDropdownMenu"], ["mSol", "nzDropdownMenu"], ["mRes", "nzDropdownMenu"], ["mHover", "nzDropdownMenu"], ["mMega", "nzDropdownMenu"], ["category", "Appshell", 3, "title", "desc"], ["sgOverview", ""], [1, "tn-frame"], [3, "itemClick", "items", "selectedKey", "logoSrc"], ["tnActions", "", "type", "button", 1, "tn-ico"], [3, "icon", "size"], ["tnActions", "", 1, "tn-av"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "12px 0 0", "max-width", "56ch", "line-height", "1.5"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [1, "tn-frame", 2, "width", "100%"], ["align", "center", 3, "itemClick", "items", "selectedKey", "logoSrc"], ["tnActions", "", "type", "button", 1, "tn-ghost"], ["tnActions", "", "variant", "primary", "size", "sm"], ["tnActions", "", 1, "tn-search", 3, "click"], [3, "click", "placeholder"], [3, "logoSrc"], ["tnNav", "", "type", "button", "hrmDropdownTrigger", "hover", 1, "tn-navbtn", 3, "hrmDropdown"], ["selectedKey", "dash", 3, "items", "logoSrc"], ["tnActions", "", "type", "button", "hrmDropdownTrigger", "hover", 1, "tn-navbtn", 3, "hrmDropdown"], ["tnNav", "", "type", "button", 1, "tn-navbtn"], [1, "dd"], [1, "dd-row"], [1, "dd", "dd-rich"], [1, "dd-item"], [1, "mega"], [1, "mega-grid"], [1, "mega-promo"], [1, "mega-promo-t"], [1, "mega-promo-d"], [1, "mega-promo-c"], [1, "dd-ic"], [1, "dd-name"], [1, "dd-desc"]], template: function SgDocTopNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 5);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "hrm-top-nav", 8);
        \u0275\u0275listener("itemClick", function SgDocTopNav_Template_hrm_top_nav_itemClick_5_listener($event) {
          return ctx.sel.set($event.key);
        });
        \u0275\u0275elementStart(6, "button", 9);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275element(8, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 11);
        \u0275\u0275text(10, "\u0110V");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "p", 12);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275element(15, "sg-use", 14);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 15)(20, "sg-do");
        \u0275\u0275element(21, "span", 16);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275element(24, "span", 16);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 17)(30, "sg-example", 18);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row")(34, "div", 19)(35, "hrm-top-nav", 20);
        \u0275\u0275listener("itemClick", function SgDocTopNav_Template_hrm_top_nav_itemClick_35_listener($event) {
          return ctx.selC.set($event.key);
        });
        \u0275\u0275elementStart(36, "button", 21);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "hrm-button", 22);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "sg-example", 18);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row")(46, "div", 19)(47, "hrm-top-nav", 8);
        \u0275\u0275listener("itemClick", function SgDocTopNav_Template_hrm_top_nav_itemClick_47_listener($event) {
          return ctx.selE.set($event.key);
        });
        \u0275\u0275elementStart(48, "span", 23);
        \u0275\u0275listener("click", function SgDocTopNav_Template_span_click_48_listener() {
          return ctx.tnSearchOpen.set(!ctx.tnSearchOpen());
        });
        \u0275\u0275element(49, "tabler-icon", 10);
        \u0275\u0275elementStart(50, "input", 24);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275listener("click", function SgDocTopNav_Template_input_click_50_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "button", 9);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275element(54, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "hrm-button", 22);
        \u0275\u0275element(56, "tabler-icon", 10);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(59, "sg-example", 18);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "sg-row")(63, "div", 19)(64, "hrm-top-nav", 25)(65, "button", 26);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275element(68, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "button", 26);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275element(72, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 26);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275element(76, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "button", 21);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "sg-example", 18);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementStart(83, "sg-row")(84, "div", 19)(85, "hrm-top-nav", 27)(86, "button", 28);
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275element(89, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "span", 11);
        \u0275\u0275text(91, "\u0110V");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(92, "sg-example", 18);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementStart(95, "sg-row")(96, "div", 19)(97, "hrm-top-nav", 25)(98, "button", 26);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275element(101, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "button", 29);
        \u0275\u0275text(103);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "hrm-button", 22);
        \u0275\u0275text(106);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(108, "nz-dropdown-menu", null, 0)(110, "div", 30)(111, "a", 31);
        \u0275\u0275text(112);
        \u0275\u0275pipe(113, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "a", 31);
        \u0275\u0275text(115);
        \u0275\u0275pipe(116, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "a", 31);
        \u0275\u0275text(118);
        \u0275\u0275pipe(119, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "nz-dropdown-menu", null, 1)(122, "div", 30)(123, "a", 31);
        \u0275\u0275text(124);
        \u0275\u0275pipe(125, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "a", 31);
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "a", 31);
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "nz-dropdown-menu", null, 2)(134, "div", 30)(135, "a", 31);
        \u0275\u0275text(136);
        \u0275\u0275pipe(137, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "a", 31);
        \u0275\u0275text(139);
        \u0275\u0275pipe(140, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "a", 31);
        \u0275\u0275text(142);
        \u0275\u0275pipe(143, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(144, "nz-dropdown-menu", null, 3)(146, "div", 32);
        \u0275\u0275repeaterCreate(147, SgDocTopNav_For_148_Template, 8, 4, "a", 33, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "nz-dropdown-menu", null, 4)(151, "div", 34)(152, "div", 35);
        \u0275\u0275repeaterCreate(153, SgDocTopNav_For_154_Template, 8, 4, "a", 33, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 36);
        \u0275\u0275element(156, "tabler-icon", 10);
        \u0275\u0275elementStart(157, "span", 37);
        \u0275\u0275text(158, "VnResource 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "span", 38);
        \u0275\u0275text(160);
        \u0275\u0275pipe(161, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "span", 39);
        \u0275\u0275text(163);
        \u0275\u0275pipe(164, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const mProd_r3 = \u0275\u0275reference(109);
        const mSol_r4 = \u0275\u0275reference(121);
        const mRes_r5 = \u0275\u0275reference(133);
        const mHover_r6 = \u0275\u0275reference(145);
        const mMega_r7 = \u0275\u0275reference(150);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 85, "docs.topNav.title"))("desc", \u0275\u0275pipeBind1(2, 87, "docs.topNav.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.items)("selectedKey", ctx.sel())("logoSrc", ctx.logo);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 89, "docs.topNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 91, "docs.topNav.ovNote"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(16, 93, "docs.topNav.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(17, 95, "docs.topNav.behavior"))("avoid", \u0275\u0275pipeBind1(18, 97, "docs.topNav.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 99, "docs.topNav.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 101, "docs.topNav.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 103, "docs.topNav.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 105, "docs.topNav.exCenterT"))("desc", \u0275\u0275pipeBind1(32, 107, "docs.topNav.exCenterD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.items)("selectedKey", ctx.selC())("logoSrc", ctx.logo);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 109, "docs.topNav.login"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 111, "docs.topNav.tryFree"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 113, "docs.topNav.exEnterpriseT"))("desc", \u0275\u0275pipeBind1(44, 115, "docs.topNav.exEnterpriseD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.iconItems)("selectedKey", ctx.selE())("logoSrc", ctx.logo);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-open", ctx.tnSearchOpen());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.search)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 117, "docs.topNav.searchPh"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(53, 119, "docs.topNav.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.plus)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 121, "docs.topNav.create"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(60, 123, "docs.topNav.exMultiT"))("desc", \u0275\u0275pipeBind1(61, 125, "docs.topNav.exMultiD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("logoSrc", ctx.logo);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", mProd_r3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(67, 127, "docs.topNav.navProduct"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", mSol_r4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(71, 129, "docs.topNav.navSolution"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", mRes_r5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 131, "docs.topNav.navResource"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 15);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 133, "docs.topNav.login"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(81, 135, "docs.topNav.exHoverT"))("desc", \u0275\u0275pipeBind1(82, 137, "docs.topNav.exHoverD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.items2)("logoSrc", ctx.logo);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", mHover_r6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(88, 139, "docs.topNav.navProduct"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 15);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(93, 141, "docs.topNav.exMegaT"))("desc", \u0275\u0275pipeBind1(94, 143, "docs.topNav.exMegaD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("logoSrc", ctx.logo);
        \u0275\u0275advance();
        \u0275\u0275property("hrmDropdown", mMega_r7);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(100, 145, "docs.topNav.navExplore"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 15);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 147, "docs.topNav.navPricing"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 149, "docs.topNav.tryFree"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 151, "docs.topNav.ddAttendance"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 153, "docs.topNav.ddPayroll"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 155, "docs.topNav.ddRecruit"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 157, "docs.topNav.ddForEnterprise"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 159, "docs.topNav.ddForRetail"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 161, "docs.topNav.ddForFactory"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 163, "docs.topNav.ddDocs"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 165, "docs.topNav.ddGuide"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 167, "docs.topNav.ddBlog"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.products);
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.star)("size", 22);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(161, 169, "docs.topNav.promoDesc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(164, 171, "docs.topNav.promoCta"));
      }
    }, dependencies: [TranslateModule, TablerIconComponent, NzDropDownModule, NzDropdownMenuComponent, HrmTopNav, HrmButton, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.tn-frame[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.tn-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.tn-ico[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-av[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-base);\n  color: #fff;\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.tn-search[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.tn-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  width: 160px;\n}\n  .tn--narrow .tn-search {\n  flex: none;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  justify-content: center;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  color: var(--text-sub);\n}\n  .tn--narrow .tn-search:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n  .tn--narrow .tn-search.is-open {\n  width: auto;\n  height: auto;\n  padding: 6px 10px;\n  justify-content: flex-start;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n}\n  .tn--narrow .tn-search.is-open input {\n  display: inline;\n}\n  .tn--narrow .tn-search input {\n  display: none;\n}\n.tn-ghost[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  padding: 7px 12px;\n  border-radius: var(--radius-lg);\n}\n.tn-ghost[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-navbtn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  padding: 7px 12px;\n  border-radius: var(--radius-lg);\n  white-space: nowrap;\n}\n.tn-navbtn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n  .dd {\n  min-width: 200px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n  .dd-row {\n  display: block;\n  padding: 8px 12px;\n  border-radius: var(--radius-md);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  cursor: pointer;\n  text-decoration: none;\n}\n  .dd-row:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n  .dd-rich {\n  min-width: 320px;\n}\n  .dd-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-decoration: none;\n}\n  .dd-item:hover {\n  background: var(--bg-surface-subtle);\n}\n  .dd-ic {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n  .dd-name {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n  .dd-desc {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n  .mega {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  min-width: 560px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg);\n}\n  .mega-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  flex: 1;\n}\n  .mega-promo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 200px;\n  padding: 16px;\n  border-radius: var(--radius-lg);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n  .mega-promo-t {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n  .mega-promo-d {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n  .mega-promo-c {\n  margin-top: auto;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=top-nav.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTopNav, [{
    type: Component,
    args: [{ selector: "sg-doc-top-nav", imports: [TranslateModule, TablerIconComponent, NzDropDownModule, HrmTopNav, HrmButton, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Appshell" [title]="'docs.topNav.title' | translate" [desc]="'docs.topNav.desc' | translate">

      <div sgOverview>
        <div class="tn-frame">
          <hrm-top-nav [items]="items" [selectedKey]="sel()" (itemClick)="sel.set($event.key)" [logoSrc]="logo">
            <button tnActions type="button" class="tn-ico" [attr.aria-label]="'docs.topNav.ariaNotify' | translate"><tabler-icon [icon]="bell" [size]="20" /></button>
            <span tnActions class="tn-av">\u0110V</span>
          </hrm-top-nav>
        </div>
        <p style="font-size: var(--fs-13);color:var(--text-sub);margin:12px 0 0;max-width:56ch;line-height:1.5">{{ 'docs.topNav.ovNote' | translate }}</p>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.topNav.purpose' | translate"
          [when]="when"
          [behavior]="'docs.topNav.behavior' | translate"
          [avoid]="'docs.topNav.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.topNav.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.topNav.do2' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.topNav.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.topNav.exCenterT' | translate"
          [desc]="'docs.topNav.exCenterD' | translate">
          <sg-row>
            <div class="tn-frame" style="width:100%">
              <hrm-top-nav align="center" [items]="items" [selectedKey]="selC()" (itemClick)="selC.set($event.key)" [logoSrc]="logo">
                <button tnActions type="button" class="tn-ghost">{{ 'docs.topNav.login' | translate }}</button>
                <hrm-button tnActions variant="primary" size="sm">{{ 'docs.topNav.tryFree' | translate }}</hrm-button>
              </hrm-top-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.topNav.exEnterpriseT' | translate"
          [desc]="'docs.topNav.exEnterpriseD' | translate">
          <sg-row>
            <div class="tn-frame" style="width:100%">
              <hrm-top-nav [items]="iconItems" [selectedKey]="selE()" (itemClick)="selE.set($event.key)" [logoSrc]="logo">
                <span tnActions class="tn-search" [class.is-open]="tnSearchOpen()" (click)="tnSearchOpen.set(!tnSearchOpen())"><tabler-icon [icon]="search" [size]="16" /><input [placeholder]="'docs.topNav.searchPh' | translate" (click)="$event.stopPropagation()" /></span>
                <button tnActions type="button" class="tn-ico" [attr.aria-label]="'docs.topNav.ariaNotify' | translate"><tabler-icon [icon]="bell" [size]="20" /></button>
                <hrm-button tnActions variant="primary" size="sm"><tabler-icon [icon]="plus" [size]="16" /> {{ 'docs.topNav.create' | translate }}</hrm-button>
              </hrm-top-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.topNav.exMultiT' | translate"
          [desc]="'docs.topNav.exMultiD' | translate">
          <sg-row>
            <div class="tn-frame" style="width:100%">
              <hrm-top-nav [logoSrc]="logo">
                <button tnNav type="button" class="tn-navbtn" [hrmDropdown]="mProd" hrmDropdownTrigger="hover">{{ 'docs.topNav.navProduct' | translate }} <tabler-icon [icon]="chev" [size]="15" /></button>
                <button tnNav type="button" class="tn-navbtn" [hrmDropdown]="mSol" hrmDropdownTrigger="hover">{{ 'docs.topNav.navSolution' | translate }} <tabler-icon [icon]="chev" [size]="15" /></button>
                <button tnNav type="button" class="tn-navbtn" [hrmDropdown]="mRes" hrmDropdownTrigger="hover">{{ 'docs.topNav.navResource' | translate }} <tabler-icon [icon]="chev" [size]="15" /></button>
                <button tnActions type="button" class="tn-ghost">{{ 'docs.topNav.login' | translate }}</button>
              </hrm-top-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.topNav.exHoverT' | translate"
          [desc]="'docs.topNav.exHoverD' | translate">
          <sg-row>
            <div class="tn-frame" style="width:100%">
              <hrm-top-nav [items]="items2" selectedKey="dash" [logoSrc]="logo">
                <button tnActions type="button" class="tn-navbtn" [hrmDropdown]="mHover" hrmDropdownTrigger="hover">{{ 'docs.topNav.navProduct' | translate }} <tabler-icon [icon]="chev" [size]="15" /></button>
                <span tnActions class="tn-av">\u0110V</span>
              </hrm-top-nav>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.topNav.exMegaT' | translate"
          [desc]="'docs.topNav.exMegaD' | translate">
          <sg-row>
            <div class="tn-frame" style="width:100%">
              <hrm-top-nav [logoSrc]="logo">
                <button tnNav type="button" class="tn-navbtn" [hrmDropdown]="mMega" hrmDropdownTrigger="hover">{{ 'docs.topNav.navExplore' | translate }} <tabler-icon [icon]="chev" [size]="15" /></button>
                <button tnNav type="button" class="tn-navbtn">{{ 'docs.topNav.navPricing' | translate }}</button>
                <hrm-button tnActions variant="primary" size="sm">{{ 'docs.topNav.tryFree' | translate }}</hrm-button>
              </hrm-top-nav>
            </div>
          </sg-row>
        </sg-example>
      </div>
    </sg-doc>

    <!-- Multiple Dropdowns: 3 menu link \u0111\u01A1n gi\u1EA3n -->
    <nz-dropdown-menu #mProd="nzDropdownMenu"><div class="dd">
      <a class="dd-row">{{ 'docs.topNav.ddAttendance' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddPayroll' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddRecruit' | translate }}</a>
    </div></nz-dropdown-menu>
    <nz-dropdown-menu #mSol="nzDropdownMenu"><div class="dd">
      <a class="dd-row">{{ 'docs.topNav.ddForEnterprise' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddForRetail' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddForFactory' | translate }}</a>
    </div></nz-dropdown-menu>
    <nz-dropdown-menu #mRes="nzDropdownMenu"><div class="dd">
      <a class="dd-row">{{ 'docs.topNav.ddDocs' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddGuide' | translate }}</a><a class="dd-row">{{ 'docs.topNav.ddBlog' | translate }}</a>
    </div></nz-dropdown-menu>

    <!-- Hover Menu: s\u1EA3n ph\u1EA9m icon + m\xF4 t\u1EA3 -->
    <nz-dropdown-menu #mHover="nzDropdownMenu"><div class="dd dd-rich">
      @for (p of products; track p.name) {
        <a class="dd-item">
          <span class="dd-ic"><tabler-icon [icon]="$any(p.icon)" [size]="18" /></span>
          <span><span class="dd-name">{{ p.name }}</span><span class="dd-desc">{{ p.desc }}</span></span>
        </a>
      }
    </div></nz-dropdown-menu>

    <!-- Mega Menu: l\u01B0\u1EDBi s\u1EA3n ph\u1EA9m + th\u1EBB n\u1ED5i b\u1EADt -->
    <nz-dropdown-menu #mMega="nzDropdownMenu"><div class="mega">
      <div class="mega-grid">
        @for (p of products; track p.name) {
          <a class="dd-item">
            <span class="dd-ic"><tabler-icon [icon]="$any(p.icon)" [size]="18" /></span>
            <span><span class="dd-name">{{ p.name }}</span><span class="dd-desc">{{ p.desc }}</span></span>
          </a>
        }
      </div>
      <div class="mega-promo">
        <tabler-icon [icon]="star" [size]="22" />
        <span class="mega-promo-t">VnResource 2026</span>
        <span class="mega-promo-d">{{ 'docs.topNav.promoDesc' | translate }}</span>
        <span class="mega-promo-c">{{ 'docs.topNav.promoCta' | translate }}</span>
      </div>
    </div></nz-dropdown-menu>
  `, styles: ["/* angular:styles/component:css;2e9205853f403dd72efcde308337b27fb84959e225ac5792f1b29c15922feba2;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/top-nav.ts */\n.tn-frame {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.tn-ico {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.tn-ico:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-av {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: var(--primary-base);\n  color: #fff;\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.tn-search {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.tn-search input {\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  width: 160px;\n}\n::ng-deep .tn--narrow .tn-search {\n  flex: none;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  justify-content: center;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  color: var(--text-sub);\n}\n::ng-deep .tn--narrow .tn-search:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n::ng-deep .tn--narrow .tn-search.is-open {\n  width: auto;\n  height: auto;\n  padding: 6px 10px;\n  justify-content: flex-start;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n}\n::ng-deep .tn--narrow .tn-search.is-open input {\n  display: inline;\n}\n::ng-deep .tn--narrow .tn-search input {\n  display: none;\n}\n.tn-ghost {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  padding: 7px 12px;\n  border-radius: var(--radius-lg);\n}\n.tn-ghost:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-navbtn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  padding: 7px 12px;\n  border-radius: var(--radius-lg);\n  white-space: nowrap;\n}\n.tn-navbtn:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n::ng-deep .dd {\n  min-width: 200px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n::ng-deep .dd-row {\n  display: block;\n  padding: 8px 12px;\n  border-radius: var(--radius-md);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  cursor: pointer;\n  text-decoration: none;\n}\n::ng-deep .dd-row:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n::ng-deep .dd-rich {\n  min-width: 320px;\n}\n::ng-deep .dd-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-decoration: none;\n}\n::ng-deep .dd-item:hover {\n  background: var(--bg-surface-subtle);\n}\n::ng-deep .dd-ic {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n::ng-deep .dd-name {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n::ng-deep .dd-desc {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n::ng-deep .mega {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  min-width: 560px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg);\n}\n::ng-deep .mega-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  flex: 1;\n}\n::ng-deep .mega-promo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 200px;\n  padding: 16px;\n  border-radius: var(--radius-lg);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n::ng-deep .mega-promo-t {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n::ng-deep .mega-promo-d {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n::ng-deep .mega-promo-c {\n  margin-top: auto;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=top-nav.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTopNav, { className: "SgDocTopNav", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/appshell/top-nav.ts", lineNumber: 188 });
})();
export {
  SgDocTopNav
};
//# sourceMappingURL=chunk-7GEX4GQL.js.map
