import {
  HrmCheckbox
} from "./chunk-7ZMC3VNL.js";
import {
  HrmPopover
} from "./chunk-ORJB2TMU.js";
import "./chunk-GKLVT5NB.js";
import {
  HrmSwitch
} from "./chunk-T4LJYRS4.js";
import {
  HrmDivider
} from "./chunk-25CHKTPS.js";
import "./chunk-X6QEURYF.js";
import "./chunk-UDAG7UB6.js";
import {
  HrmTag
} from "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import {
  HrmAvatar
} from "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-OCA5G42J.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
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
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  setClassMetadata,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/popover.ts
function SgDocPopover_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.popover.ovContent"));
  }
}
function SgDocPopover_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.popover.posTip"));
  }
}
function SgDocPopover_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "hrm-avatar", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 29)(10, "hrm-tag", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 40);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "docs.popover.profileRole"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "docs.popover.profileDept"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "docs.popover.profileStatus"));
  }
}
function SgDocPopover_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "hrm-checkbox", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_70_Template_hrm_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fActive, $event) || (ctx_r1.fActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "hrm-checkbox", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_70_Template_hrm_checkbox_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fLeave, $event) || (ctx_r1.fLeave = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-checkbox", 33);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_70_Template_hrm_checkbox_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fProbation, $event) || (ctx_r1.fProbation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hrm-divider");
    \u0275\u0275elementStart(12, "div", 34)(13, "hrm-button", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "hrm-button", 36);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "docs.popover.fActive"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fLeave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "docs.popover.fLeave"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fProbation);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "docs.popover.fProbation"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "docs.popover.reset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "docs.popover.apply"));
  }
}
function SgDocPopover_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "hrm-button", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-button", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "docs.popover.confirmBody"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "docs.popover.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("danger", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "docs.popover.delete"));
  }
}
function SgDocPopover_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "hrm-switch", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_90_Template_hrm_switch_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sNotify, $event) || (ctx_r1.sNotify = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "hrm-switch", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_90_Template_hrm_switch_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sEmail, $event) || (ctx_r1.sEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "hrm-switch", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocPopover_ng_template_90_Template_hrm_switch_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sSound, $event) || (ctx_r1.sSound = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "docs.popover.sNotify"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sNotify);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "docs.popover.sEmail"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "docs.popover.sSound"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sSound);
  }
}
var SgDocPopover = class _SgDocPopover {
  constructor() {
    this.fActive = true;
    this.fLeave = false;
    this.fProbation = false;
    this.sNotify = true;
    this.sEmail = false;
    this.sSound = true;
    this.when = [
      "docs.popover.when1",
      "docs.popover.when2",
      "docs.popover.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocPopover)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocPopover, selectors: [["sg-doc-popover"]], decls: 92, vars: 125, consts: [["ovContent", ""], ["posTip", ""], ["profile", ""], ["filter", ""], ["confirm", ""], ["settings", ""], ["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "default", "hrmPopover", "", "hrmPopoverTrigger", "click", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["variant", "default", "hrmPopover", "", "hrmPopoverPlacement", "top", "hrmPopoverTrigger", "click", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "default", "hrmPopover", "", "hrmPopoverPlacement", "bottom", "hrmPopoverTrigger", "click", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "default", "hrmPopover", "", "hrmPopoverPlacement", "left", "hrmPopoverTrigger", "click", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "default", "hrmPopover", "", "hrmPopoverPlacement", "right", "hrmPopoverTrigger", "click", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "link", "hrmPopover", "", "hrmPopoverTrigger", "hover", "hrmPopoverPlacement", "bottom", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "default", "hrmPopover", "", "hrmPopoverTrigger", "click", "hrmPopoverPlacement", "bottom", 3, "hrmPopoverTitle", "hrmPopoverContent"], ["variant", "default", "hrmPopover", "", "hrmPopoverTrigger", "click", "hrmPopoverPlacement", "top", 3, "danger", "hrmPopoverTitle", "hrmPopoverContent"], [2, "max-width", "220px", "font-size", "var(--fs-13)", "color", "var(--text-body)", "line-height", "1.55"], [2, "max-width", "180px", "font-size", "var(--fs-13)", "color", "var(--text-body)"], [2, "display", "flex", "gap", "12px", "max-width", "260px"], ["text", "A", 3, "size"], [2, "font-size", "var(--fs-13)", "line-height", "1.5"], [2, "font-weight", "600", "color", "var(--text-strong)"], [2, "color", "var(--text-sub)"], [2, "margin-top", "6px"], ["color", "success"], [2, "min-width", "200px"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], [3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "8px", "justify-content", "flex-end"], ["variant", "text", "size", "sm"], ["variant", "primary", "size", "sm"], [2, "max-width", "220px"], [2, "font-size", "var(--fs-13)", "color", "var(--text-body)", "line-height", "1.5"], [2, "display", "flex", "gap", "8px", "justify-content", "flex-end", "margin-top", "12px"], ["variant", "primary", "size", "sm", 3, "danger"], [2, "min-width", "220px", "display", "flex", "flex-direction", "column", "gap", "10px", "font-size", "var(--fs-13)", "color", "var(--text-body)"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "16px"], ["size", "sm", 3, "ngModelChange", "ngModel"]], template: function SgDocPopover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 6);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 7)(4, "hrm-button", 8);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, SgDocPopover_ng_template_8_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275element(11, "sg-use", 10);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "sg-example", 13);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row", 14);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "hrm-button", 15);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "hrm-button", 16);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "hrm-button", 17);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "hrm-button", 18);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(50, SgDocPopover_ng_template_50_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "sg-example", 13);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "sg-row")(56, "hrm-button", 19);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(60, SgDocPopover_ng_template_60_Template, 13, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "sg-example", 13);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementStart(65, "sg-row")(66, "hrm-button", 20);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(70, SgDocPopover_ng_template_70_Template, 19, 18, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "sg-example", 13);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementStart(75, "sg-row")(76, "hrm-button", 21);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(80, SgDocPopover_ng_template_80_Template, 11, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "sg-example", 13);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementStart(85, "sg-row")(86, "hrm-button", 20);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(90, SgDocPopover_ng_template_90_Template, 16, 12, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const ovContent_r4 = \u0275\u0275reference(9);
        const posTip_r5 = \u0275\u0275reference(51);
        const profile_r6 = \u0275\u0275reference(61);
        const filter_r7 = \u0275\u0275reference(71);
        const confirm_r8 = \u0275\u0275reference(81);
        const settings_r9 = \u0275\u0275reference(91);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 49, "docs.popover.title"))("desc", \u0275\u0275pipeBind1(2, 51, "docs.popover.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(5, 53, "docs.popover.ovTitle"))("hrmPopoverContent", ovContent_r4);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 55, "docs.popover.ovLabel"));
        \u0275\u0275advance(5);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 57, "docs.popover.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 59, "docs.popover.behavior"))("avoid", \u0275\u0275pipeBind1(14, 61, "docs.popover.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 63, "docs.popover.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 65, "docs.popover.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 67, "docs.popover.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 69, "docs.popover.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 71, "docs.popover.exPlaceT"))("desc", \u0275\u0275pipeBind1(31, 73, "docs.popover.exPlaceD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(33, 75, "docs.popover.rowPlace"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(35, 77, "docs.popover.titleTop"))("hrmPopoverContent", posTip_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 79, "docs.popover.top"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(39, 81, "docs.popover.titleBottom"))("hrmPopoverContent", posTip_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 83, "docs.popover.bottom"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(43, 85, "docs.popover.titleLeft"))("hrmPopoverContent", posTip_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 87, "docs.popover.left"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(47, 89, "docs.popover.titleRight"))("hrmPopoverContent", posTip_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 91, "docs.popover.right"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(53, 93, "docs.popover.exProfileT"))("desc", \u0275\u0275pipeBind1(54, 95, "docs.popover.exProfileD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(57, 97, "docs.popover.profileName"))("hrmPopoverContent", profile_r6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 99, "docs.popover.profileName"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(63, 101, "docs.popover.exFilterT"))("desc", \u0275\u0275pipeBind1(64, 103, "docs.popover.exFilterD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(67, 105, "docs.popover.filterTitle"))("hrmPopoverContent", filter_r7);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 107, "docs.popover.filterLabel"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(73, 109, "docs.popover.exConfirmT"))("desc", \u0275\u0275pipeBind1(74, 111, "docs.popover.exConfirmD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("danger", true)("hrmPopoverTitle", \u0275\u0275pipeBind1(77, 113, "docs.popover.confirmTitle"))("hrmPopoverContent", confirm_r8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 115, "docs.popover.confirmLabel"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(83, 117, "docs.popover.exSettingsT"))("desc", \u0275\u0275pipeBind1(84, 119, "docs.popover.exSettingsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmPopoverTitle", \u0275\u0275pipeBind1(87, 121, "docs.popover.settingsTitle"))("hrmPopoverContent", settings_r9);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 123, "docs.popover.settingsLabel"));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmButton, HrmPopover, HrmSwitch, HrmCheckbox, HrmTag, HrmAvatar, HrmDivider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocPopover, [{
    type: Component,
    args: [{
      selector: "sg-doc-popover",
      imports: [FormsModule, TranslateModule, HrmButton, HrmPopover, HrmSwitch, HrmCheckbox, HrmTag, HrmAvatar, HrmDivider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.popover.title' | translate" [desc]="'docs.popover.desc' | translate">

      <div sgOverview>
        <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.ovTitle' | translate" hrmPopover [hrmPopoverContent]="ovContent" hrmPopoverTrigger="click">{{ 'docs.popover.ovLabel' | translate }}</hrm-button>
        <ng-template #ovContent>
          <div style="max-width:220px;font-size: var(--fs-13);color:var(--text-body);line-height:1.55">{{ 'docs.popover.ovContent' | translate }}</div>
        </ng-template>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.popover.purpose' | translate"
          [when]="when"
          [behavior]="'docs.popover.behavior' | translate"
          [avoid]="'docs.popover.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.popover.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.popover.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.popover.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.popover.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.popover.exPlaceT' | translate"
          [desc]="'docs.popover.exPlaceD' | translate">
          <sg-row [label]="'docs.popover.rowPlace' | translate">
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.titleTop' | translate" hrmPopover [hrmPopoverContent]="posTip" hrmPopoverPlacement="top" hrmPopoverTrigger="click">{{ 'docs.popover.top' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.titleBottom' | translate" hrmPopover [hrmPopoverContent]="posTip" hrmPopoverPlacement="bottom" hrmPopoverTrigger="click">{{ 'docs.popover.bottom' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.titleLeft' | translate" hrmPopover [hrmPopoverContent]="posTip" hrmPopoverPlacement="left" hrmPopoverTrigger="click">{{ 'docs.popover.left' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.titleRight' | translate" hrmPopover [hrmPopoverContent]="posTip" hrmPopoverPlacement="right" hrmPopoverTrigger="click">{{ 'docs.popover.right' | translate }}</hrm-button>
          </sg-row>
          <ng-template #posTip>
            <div style="max-width:180px;font-size: var(--fs-13);color:var(--text-body)">{{ 'docs.popover.posTip' | translate }}</div>
          </ng-template>
        </sg-example>

        <sg-example [title]="'docs.popover.exProfileT' | translate"
          [desc]="'docs.popover.exProfileD' | translate">
          <sg-row>
            <hrm-button variant="link" [hrmPopoverTitle]="'docs.popover.profileName' | translate" hrmPopover [hrmPopoverContent]="profile" hrmPopoverTrigger="hover" hrmPopoverPlacement="bottom">{{ 'docs.popover.profileName' | translate }}</hrm-button>
          </sg-row>
          <ng-template #profile>
            <div style="display:flex;gap:12px;max-width:260px">
              <hrm-avatar text="A" [size]="40" />
              <div style="font-size: var(--fs-13);line-height:1.5">
                <div style="font-weight:600;color:var(--text-strong)">{{ 'docs.popover.profileRole' | translate }}</div>
                <div style="color:var(--text-sub)">{{ 'docs.popover.profileDept' | translate }}</div>
                <div style="margin-top:6px"><hrm-tag color="success">{{ 'docs.popover.profileStatus' | translate }}</hrm-tag></div>
              </div>
            </div>
          </ng-template>
        </sg-example>

        <sg-example [title]="'docs.popover.exFilterT' | translate"
          [desc]="'docs.popover.exFilterD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.filterTitle' | translate" hrmPopover [hrmPopoverContent]="filter" hrmPopoverTrigger="click" hrmPopoverPlacement="bottom">{{ 'docs.popover.filterLabel' | translate }}</hrm-button>
          </sg-row>
          <ng-template #filter>
            <div style="min-width:200px">
              <div style="display:flex;flex-direction:column;gap:8px">
                <hrm-checkbox [(ngModel)]="fActive">{{ 'docs.popover.fActive' | translate }}</hrm-checkbox>
                <hrm-checkbox [(ngModel)]="fLeave">{{ 'docs.popover.fLeave' | translate }}</hrm-checkbox>
                <hrm-checkbox [(ngModel)]="fProbation">{{ 'docs.popover.fProbation' | translate }}</hrm-checkbox>
              </div>
              <hrm-divider />
              <div style="display:flex;gap:8px;justify-content:flex-end">
                <hrm-button variant="text" size="sm">{{ 'docs.popover.reset' | translate }}</hrm-button>
                <hrm-button variant="primary" size="sm">{{ 'docs.popover.apply' | translate }}</hrm-button>
              </div>
            </div>
          </ng-template>
        </sg-example>

        <sg-example [title]="'docs.popover.exConfirmT' | translate"
          [desc]="'docs.popover.exConfirmD' | translate">
          <sg-row>
            <hrm-button variant="default" [danger]="true" [hrmPopoverTitle]="'docs.popover.confirmTitle' | translate" hrmPopover [hrmPopoverContent]="confirm" hrmPopoverTrigger="click" hrmPopoverPlacement="top">{{ 'docs.popover.confirmLabel' | translate }}</hrm-button>
          </sg-row>
          <ng-template #confirm>
            <div style="max-width:220px">
              <div style="font-size: var(--fs-13);color:var(--text-body);line-height:1.5">{{ 'docs.popover.confirmBody' | translate }}</div>
              <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
                <hrm-button variant="text" size="sm">{{ 'docs.popover.cancel' | translate }}</hrm-button>
                <hrm-button variant="primary" size="sm" [danger]="true">{{ 'docs.popover.delete' | translate }}</hrm-button>
              </div>
            </div>
          </ng-template>
        </sg-example>

        <sg-example [title]="'docs.popover.exSettingsT' | translate"
          [desc]="'docs.popover.exSettingsD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmPopoverTitle]="'docs.popover.settingsTitle' | translate" hrmPopover [hrmPopoverContent]="settings" hrmPopoverTrigger="click" hrmPopoverPlacement="bottom">{{ 'docs.popover.settingsLabel' | translate }}</hrm-button>
          </sg-row>
          <ng-template #settings>
            <div style="min-width:220px;display:flex;flex-direction:column;gap:10px;font-size: var(--fs-13);color:var(--text-body)">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px"><span>{{ 'docs.popover.sNotify' | translate }}</span><hrm-switch size="sm" [(ngModel)]="sNotify" /></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px"><span>{{ 'docs.popover.sEmail' | translate }}</span><hrm-switch size="sm" [(ngModel)]="sEmail" /></div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px"><span>{{ 'docs.popover.sSound' | translate }}</span><hrm-switch size="sm" [(ngModel)]="sSound" /></div>
            </div>
          </ng-template>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocPopover, { className: "SgDocPopover", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/popover.ts", lineNumber: 125 });
})();
export {
  SgDocPopover
};
//# sourceMappingURL=chunk-2ZVJHOUQ.js.map
