import {
  HrmCard
} from "./chunk-XPLMSQMT.js";
import "./chunk-PRQ7GH7J.js";
import {
  HrmSelect
} from "./chunk-BI6MDT2Y.js";
import "./chunk-OVPA4RAH.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-7IBNPHRP.js";
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
  SgRow,
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
  ArrowsSort,
  ChartBar,
  DotsVertical,
  Filter,
  TablerIconComponent,
  Users
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/card.ts
var _forTrack0 = ($index, $item) => $item.key;
function SgDocCard_For_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-card", 38);
    \u0275\u0275twoWayListener("selectedChange", function SgDocCard_For_145_Template_hrm_card_selectedChange_0_listener($event) {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(s_r2.sel, $event) || (s_r2.sel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("selectable", true);
    \u0275\u0275twoWayProperty("selected", s_r2.sel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, s_r2.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.time);
  }
}
var SgDocCard = class _SgDocCard {
  constructor() {
    this.chartIcon = ChartBar;
    this.usersIcon = Users;
    this.filterIcon = Filter;
    this.sortIcon = ArrowsSort;
    this.moreIcon = DotsVertical;
    this.periodOpts = [
      { label: "Theo tu\u1EA7n", value: "week" },
      { label: "Theo th\xE1ng", value: "month" }
    ];
    this.period = "week";
    this.clicks = 0;
    this.shifts = [
      { key: "morning", label: "docs.card.shiftMorning", time: "06:00 \u2013 14:00", sel: true },
      { key: "afternoon", label: "docs.card.shiftAfternoon", time: "14:00 \u2013 22:00", sel: false },
      { key: "night", label: "docs.card.shiftNight", time: "22:00 \u2013 06:00", sel: false }
    ];
    this.when = [
      "docs.card.when1",
      "docs.card.when2",
      "docs.card.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCard, selectors: [["sg-doc-card"]], decls: 146, vars: 175, consts: [["category", "Container", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "280px", 3, "title"], [2, "color", "var(--text-sub)", "font-size", "var(--fs-13)"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "flex", "1", "min-width", "320px", 3, "icon", "title", "subtitle"], ["cardActions", "", "type", "button", 1, "cd-btn"], [3, "icon", "size"], ["cardActions", "", "type", "button", 1, "cd-ico"], [1, "cd-kpi"], [1, "cd-kpi-v"], [1, "cd-kpi-d"], [2, "flex", "1", "min-width", "280px", 3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"], [3, "label"], ["tone", "default", 2, "width", "200px", 3, "title"], ["tone", "muted", 2, "width", "200px", 3, "title"], ["tone", "primary", 2, "width", "200px", 3, "title"], ["tone", "success", 2, "width", "200px", 3, "title"], ["tone", "warning", 2, "width", "200px", 3, "title"], ["tone", "info", 2, "width", "200px", 3, "title"], [2, "width", "360px", 3, "title"], [2, "display", "flex", "flex-direction", "column", "gap", "6px", "font-size", "var(--fs-13)", "color", "var(--text-body)"], [2, "color", "var(--text-sub)"], [2, "display", "flex", "justify-content", "flex-end", "gap", "8px", "margin-top", "16px", "padding-top", "12px", "border-top", "1px solid var(--border-soft)"], ["variant", "default", "size", "sm"], ["variant", "primary", "size", "sm"], [2, "width", "360px", "background", "var(--bg-surface-muted)", 3, "bordered"], [2, "font-weight", "600", "font-size", "var(--fs-13)", "color", "var(--text-strong)", "margin-bottom", "4px"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "line-height", "1.6"], [2, "width", "280px", 3, "pressed", "clickable"], [2, "font-weight", "600", "color", "var(--text-strong)", "margin-bottom", "4px"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)"], [2, "width", "200px", 3, "selectable", "selected"], [2, "width", "200px", 3, "selectedChange", "selectable", "selected"]], template: function SgDocCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-card", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275element(10, "sg-use", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 7)(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "hrm-card", 9);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "button", 10);
        \u0275\u0275element(36, "tabler-icon", 11);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 10);
        \u0275\u0275element(40, "tabler-icon", 11);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 12);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 13)(47, "span", 14);
        \u0275\u0275text(48, "$ 9,257.51");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 15);
        \u0275\u0275text(50, "\u25B2 15.8%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "hrm-card", 16);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementStart(53, "hrm-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCard_Template_hrm_select_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 13)(55, "span", 14);
        \u0275\u0275text(56, "24,473");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 15);
        \u0275\u0275text(58, "\u25B2 8.3%");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(59, "sg-example", 8);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "sg-row", 18);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "hrm-card", 19);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementStart(66, "div", 3);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "hrm-card", 20);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "div", 3);
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "hrm-card", 21);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementStart(76, "div", 3);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "hrm-card", 22);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementStart(81, "div", 3);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "hrm-card", 23);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementStart(86, "div", 3);
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "hrm-card", 24);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275elementStart(91, "div", 3);
        \u0275\u0275text(92);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(94, "sg-example", 8);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275elementStart(97, "sg-row")(98, "hrm-card", 25);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementStart(100, "div", 26)(101, "div");
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div");
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 27);
        \u0275\u0275text(108);
        \u0275\u0275pipe(109, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 28)(111, "hrm-button", 29);
        \u0275\u0275text(112);
        \u0275\u0275pipe(113, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "hrm-button", 30);
        \u0275\u0275text(115);
        \u0275\u0275pipe(116, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(117, "sg-example", 8);
        \u0275\u0275pipe(118, "translate");
        \u0275\u0275pipe(119, "translate");
        \u0275\u0275elementStart(120, "sg-row")(121, "hrm-card", 31)(122, "div", 32);
        \u0275\u0275text(123);
        \u0275\u0275pipe(124, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 33);
        \u0275\u0275text(126);
        \u0275\u0275pipe(127, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(128, "sg-example", 8);
        \u0275\u0275pipe(129, "translate");
        \u0275\u0275pipe(130, "translate");
        \u0275\u0275elementStart(131, "sg-row")(132, "hrm-card", 34);
        \u0275\u0275listener("pressed", function SgDocCard_Template_hrm_card_pressed_132_listener() {
          return ctx.clicks = ctx.clicks + 1;
        });
        \u0275\u0275elementStart(133, "div", 35);
        \u0275\u0275text(134);
        \u0275\u0275pipe(135, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 36);
        \u0275\u0275text(137);
        \u0275\u0275pipe(138, "translate");
        \u0275\u0275pipe(139, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(140, "sg-example", 8);
        \u0275\u0275pipe(141, "translate");
        \u0275\u0275pipe(142, "translate");
        \u0275\u0275elementStart(143, "sg-row");
        \u0275\u0275repeaterCreate(144, SgDocCard_For_145_Template, 6, 6, "hrm-card", 37, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 69, "docs.card.title"))("desc", \u0275\u0275pipeBind1(2, 71, "docs.card.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 73, "docs.card.ovName"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 75, "docs.card.ovRole"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 77, "docs.card.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 79, "docs.card.behavior"))("avoid", \u0275\u0275pipeBind1(13, 81, "docs.card.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 83, "docs.card.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 85, "docs.card.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 87, "docs.card.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 89, "docs.card.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 91, "docs.card.exHeadT"))("desc", \u0275\u0275pipeBind1(30, 93, "docs.card.exHeadD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.chartIcon)("title", \u0275\u0275pipeBind1(33, 95, "docs.card.hdSalesT"))("subtitle", \u0275\u0275pipeBind1(34, 97, "docs.card.hdSalesS"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.filterIcon)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 99, "docs.card.hdFilter"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.sortIcon)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 101, "docs.card.hdSort"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(44, 103, "docs.card.hdMore"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.moreIcon)("size", 16);
        \u0275\u0275advance(6);
        \u0275\u0275property("icon", ctx.usersIcon)("title", \u0275\u0275pipeBind1(52, 105, "docs.card.hdSubsT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance(6);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(60, 107, "docs.card.exVariantsT"))("desc", \u0275\u0275pipeBind1(61, 109, "docs.card.exVariantsD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 111, "docs.card.rowVariants"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(65, 113, "docs.card.cardPlainT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 115, "docs.card.cardPlainB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(70, 117, "docs.card.cardMutedT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 119, "docs.card.cardMutedB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(75, 121, "docs.card.cardProjectT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 123, "docs.card.cardProjectB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(80, 125, "docs.card.cardApprovedT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 127, "docs.card.cardApprovedB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(85, 129, "docs.card.cardWarnT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 131, "docs.card.cardWarnB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(90, 133, "docs.card.cardInfoT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 135, "docs.card.cardInfoB"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(95, 137, "docs.card.exLayoutT"))("desc", \u0275\u0275pipeBind1(96, 139, "docs.card.exLayoutD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(99, 141, "docs.card.leaveTitle"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 143, "docs.card.leaveSender"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 145, "docs.card.leaveTime"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 147, "docs.card.leaveReason"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 149, "docs.card.btnReject"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 151, "docs.card.btnApprove"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(118, 153, "docs.card.exNoteT"))("desc", \u0275\u0275pipeBind1(119, 155, "docs.card.exNoteD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("bordered", false);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 157, "docs.card.tipLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 159, "docs.card.tipBody"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(129, 161, "docs.card.exClickT"))("desc", \u0275\u0275pipeBind1(130, 163, "docs.card.exClickD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("clickable", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(135, 165, "docs.card.clickTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(138, 167, "docs.card.clickBody1"), " ", ctx.clicks, " ", \u0275\u0275pipeBind1(139, 169, "docs.card.clickBody2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(141, 171, "docs.card.exSelectT"))("desc", \u0275\u0275pipeBind1(142, 173, "docs.card.exSelectD"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.shifts);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, TablerIconComponent, HrmCard, HrmButton, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.cd-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1-5);\n  height: 32px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  cursor: pointer;\n}\n.cd-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.cd-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.cd-ico[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.cd-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2-5);\n}\n.cd-kpi-v[_ngcontent-%COMP%] {\n  font-size: var(--fs-28);\n  font-weight: 700;\n  color: var(--text-strong);\n  letter-spacing: -.01em;\n}\n.cd-kpi-d[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  background: var(--success-bg);\n  color: var(--success-text, var(--success-base));\n}\n/*# sourceMappingURL=card.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCard, [{
    type: Component,
    args: [{ selector: "sg-doc-card", imports: [FormsModule, TranslateModule, TablerIconComponent, HrmCard, HrmButton, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Container" [title]="'docs.card.title' | translate" [desc]="'docs.card.desc' | translate">

      <div sgOverview>
        <hrm-card [title]="'docs.card.ovName' | translate" style="width:280px">
          <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.ovRole' | translate }}</div>
        </hrm-card>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.card.purpose' | translate"
          [when]="when"
          [behavior]="'docs.card.behavior' | translate"
          [avoid]="'docs.card.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.card.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.card.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.card.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.card.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <!-- Header n\xE2ng cao: \xF4 icon + ti\xEAu \u0111\u1EC1 \u0111\u1EADm + h\xE0nh \u0111\u1ED9ng ph\u1EA3i (l\u1ECDc/s\u1EAFp x\u1EBFp/\u22EE/k\u1EF3/xem t\u1EA5t c\u1EA3). -->
        <sg-example [title]="'docs.card.exHeadT' | translate"
          [desc]="'docs.card.exHeadD' | translate">
          <sg-row>
            <hrm-card [icon]="chartIcon" [title]="'docs.card.hdSalesT' | translate"
              [subtitle]="'docs.card.hdSalesS' | translate" style="flex:1;min-width:320px">
              <button cardActions type="button" class="cd-btn"><tabler-icon [icon]="filterIcon" [size]="15" /> {{ 'docs.card.hdFilter' | translate }}</button>
              <button cardActions type="button" class="cd-btn"><tabler-icon [icon]="sortIcon" [size]="15" /> {{ 'docs.card.hdSort' | translate }}</button>
              <button cardActions type="button" class="cd-ico" [attr.aria-label]="'docs.card.hdMore' | translate"><tabler-icon [icon]="moreIcon" [size]="16" /></button>
              <div class="cd-kpi">
                <span class="cd-kpi-v">$ 9,257.51</span>
                <span class="cd-kpi-d">\u25B2 15.8%</span>
              </div>
            </hrm-card>

            <hrm-card [icon]="usersIcon" [title]="'docs.card.hdSubsT' | translate" style="flex:1;min-width:280px">
              <hrm-select cardActions style="width:130px" size="md"
                [options]="periodOpts" [allowClear]="false" [showSearch]="false"
                [(ngModel)]="period" />
              <div class="cd-kpi">
                <span class="cd-kpi-v">24,473</span>
                <span class="cd-kpi-d">\u25B2 8.3%</span>
              </div>
            </hrm-card>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.card.exVariantsT' | translate"
          [desc]="'docs.card.exVariantsD' | translate">
          <sg-row [label]="'docs.card.rowVariants' | translate">
            <hrm-card tone="default" [title]="'docs.card.cardPlainT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardPlainB' | translate }}</div>
            </hrm-card>
            <hrm-card tone="muted" [title]="'docs.card.cardMutedT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardMutedB' | translate }}</div>
            </hrm-card>
            <hrm-card tone="primary" [title]="'docs.card.cardProjectT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardProjectB' | translate }}</div>
            </hrm-card>
            <hrm-card tone="success" [title]="'docs.card.cardApprovedT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardApprovedB' | translate }}</div>
            </hrm-card>
            <hrm-card tone="warning" [title]="'docs.card.cardWarnT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardWarnB' | translate }}</div>
            </hrm-card>
            <hrm-card tone="info" [title]="'docs.card.cardInfoT' | translate" style="width:200px">
              <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.card.cardInfoB' | translate }}</div>
            </hrm-card>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.card.exLayoutT' | translate"
          [desc]="'docs.card.exLayoutD' | translate">
          <sg-row>
            <hrm-card [title]="'docs.card.leaveTitle' | translate" style="width:360px">
              <div style="display:flex;flex-direction:column;gap:6px;font-size: var(--fs-13);color:var(--text-body)">
                <div>{{ 'docs.card.leaveSender' | translate }}</div>
                <div>{{ 'docs.card.leaveTime' | translate }}</div>
                <div style="color:var(--text-sub)">{{ 'docs.card.leaveReason' | translate }}</div>
              </div>
              <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;padding-top:12px;border-top:1px solid var(--border-soft)">
                <hrm-button variant="default" size="sm">{{ 'docs.card.btnReject' | translate }}</hrm-button>
                <hrm-button variant="primary" size="sm">{{ 'docs.card.btnApprove' | translate }}</hrm-button>
              </div>
            </hrm-card>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.card.exNoteT' | translate"
          [desc]="'docs.card.exNoteD' | translate">
          <sg-row>
            <hrm-card [bordered]="false" style="width:360px;background:var(--bg-surface-muted)">
              <div style="font-weight:600;font-size: var(--fs-13);color:var(--text-strong);margin-bottom:4px">{{ 'docs.card.tipLabel' | translate }}</div>
              <div style="font-size: var(--fs-13);color:var(--text-sub);line-height:1.6">{{ 'docs.card.tipBody' | translate }}</div>
            </hrm-card>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.card.exClickT' | translate"
          [desc]="'docs.card.exClickD' | translate">
          <sg-row>
            <hrm-card [clickable]="true" (pressed)="clicks = clicks + 1" style="width:280px">
              <div style="font-weight:600;color:var(--text-strong);margin-bottom:4px">{{ 'docs.card.clickTitle' | translate }}</div>
              <div style="font-size: var(--fs-13);color:var(--text-sub)">{{ 'docs.card.clickBody1' | translate }} {{ clicks }} {{ 'docs.card.clickBody2' | translate }}</div>
            </hrm-card>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.card.exSelectT' | translate"
          [desc]="'docs.card.exSelectD' | translate">
          <sg-row>
            @for (s of shifts; track s.key) {
              <hrm-card [selectable]="true" [(selected)]="s.sel" style="width:200px">
                <div style="font-weight:600;color:var(--text-strong);margin-bottom:4px">{{ s.label | translate }}</div>
                <div style="font-size: var(--fs-13);color:var(--text-sub)">{{ s.time }}</div>
              </hrm-card>
            }
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;5e16ffaf0fd5b7b11175fa4a3e295d7b3af491b3a120fe3c8aaf507e0c1f4223;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/card.ts */\n.cd-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1-5);\n  height: 32px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  cursor: pointer;\n}\n.cd-btn:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.cd-ico {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.cd-ico:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.cd-kpi {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2-5);\n}\n.cd-kpi-v {\n  font-size: var(--fs-28);\n  font-weight: 700;\n  color: var(--text-strong);\n  letter-spacing: -.01em;\n}\n.cd-kpi-d {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: var(--radius-full);\n  background: var(--success-bg);\n  color: var(--success-text, var(--success-base));\n}\n/*# sourceMappingURL=card.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCard, { className: "SgDocCard", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/card.ts", lineNumber: 156 });
})();
export {
  SgDocCard
};
//# sourceMappingURL=chunk-33KYVJPQ.js.map
