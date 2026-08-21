import {
  SgTemplateSideNav
} from "./chunk-X6VZUPSO.js";
import {
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import {
  HrmAvatar
} from "./chunk-KS5WOU2W.js";
import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  transferArrayItem
} from "./chunk-KLLXE4WM.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgUse
} from "./chunk-2SR4XMAS.js";
import {
  HrmAppShell
} from "./chunk-53TKMCXH.js";
import "./chunk-VG3ZZH26.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KXHKNX77.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import {
  ActivatedRoute
} from "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
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
  ArrowsMaximize,
  ChevronLeft,
  ChevronRight,
  ClipboardText,
  Clock,
  Copy,
  GripVertical,
  List,
  Plus,
  TablerIconComponent,
  Trash,
  User
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/domain-hrm/hrm-shift-cell.ts
function HrmShiftCell_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function HrmShiftCell_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.time());
  }
}
function HrmShiftCell_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.count());
  }
}
var HrmShiftCell = class _HrmShiftCell {
  constructor() {
    this.variant = input("shift", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tone = input("opening", ...ngDevMode ? [{ debugName: "tone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.time = input("", ...ngDevMode ? [{ debugName: "time" }] : (
      /* istanbul ignore next */
      []
    ));
    this.count = input(null, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.muted = input(false, ...ngDevMode ? [{ debugName: "muted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cls = computed(() => `sc v-${this.variant()} t-${this.tone()}${this.muted() ? " is-muted" : ""}`, ...ngDevMode ? [{ debugName: "cls" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmShiftCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmShiftCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmShiftCell, selectors: [["hrm-shift-cell"]], hostAttrs: [1, "hrm-shift-cell"], inputs: { variant: [1, "variant"], tone: [1, "tone"], title: [1, "title"], time: [1, "time"], count: [1, "count"], muted: [1, "muted"] }, decls: 5, vars: 6, consts: [[1, "sc-body"], [1, "sc-title"], [1, "sc-time"], [1, "sc-badge"]], template: function HrmShiftCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div")(1, "span", 0);
        \u0275\u0275conditionalCreate(2, HrmShiftCell_Conditional_2_Template, 2, 1, "span", 1);
        \u0275\u0275conditionalCreate(3, HrmShiftCell_Conditional_3_Template, 2, 1, "span", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, HrmShiftCell_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cls());
        \u0275\u0275attribute("title", ctx.title() + (ctx.time() ? " \xB7 " + ctx.time() : ""));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.title() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.time() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.count() !== null ? 4 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.sc[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 100%;\n  min-height: 48px;\n  box-sizing: border-box;\n  padding: var(--space-2, 8px) var(--space-3, 10px);\n  border-radius: var(--radius-md);\n}\n.sc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n  flex: 1;\n}\n.sc-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sc-time[_ngcontent-%COMP%] {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n.sc-badge[_ngcontent-%COMP%] {\n  flex: none;\n  align-self: flex-start;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 5px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-sm);\n  background: color-mix(in srgb, var(--sh) 16%, transparent);\n  color: var(--sh);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  line-height: 1;\n}\n.v-shift[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-left: 3px solid var(--sh);\n  box-shadow: var(--shadow-regular-xs, none);\n}\n.v-coverage[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--sh) 5%, var(--bg-surface));\n  border: 1.5px dashed color-mix(in srgb, var(--sh) 50%, var(--border-sub));\n}\n.v-coverage.is-muted[_ngcontent-%COMP%] {\n  opacity: .45;\n}\n.v-coverage[_ngcontent-%COMP%]   .sc-time[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n.v-block[_ngcontent-%COMP%], \n.v-rest[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  border: 0;\n  background: color-mix(in srgb, var(--sh) 22%, var(--bg-surface));\n}\n.v-block[_ngcontent-%COMP%]   .sc-body[_ngcontent-%COMP%], \n.v-rest[_ngcontent-%COMP%]   .sc-body[_ngcontent-%COMP%] {\n  flex: none;\n  align-items: center;\n}\n.v-block[_ngcontent-%COMP%]   .sc-title[_ngcontent-%COMP%], \n.v-rest[_ngcontent-%COMP%]   .sc-title[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium, 500);\n  color: color-mix(in srgb, var(--sh) 72%, var(--text-strong));\n}\n.t-opening[_ngcontent-%COMP%] {\n  --sh: var(--data-7);\n}\n.t-afternoon[_ngcontent-%COMP%] {\n  --sh: var(--data-1);\n}\n.t-night[_ngcontent-%COMP%] {\n  --sh: var(--data-3);\n}\n.t-admin[_ngcontent-%COMP%] {\n  --sh: var(--data-4);\n}\n.t-rest[_ngcontent-%COMP%] {\n  --sh: var(--data-5);\n}\n.t-holiday[_ngcontent-%COMP%] {\n  --sh: var(--data-8);\n}\n.t-absence[_ngcontent-%COMP%] {\n  --sh: var(--warning-base);\n}\n.t-neutral[_ngcontent-%COMP%] {\n  --sh: var(--data-neutral);\n}\n/*# sourceMappingURL=hrm-shift-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmShiftCell, [{
    type: Component,
    args: [{ selector: "hrm-shift-cell", template: `
    <div [class]="cls()" [attr.title]="title() + (time() ? ' \xB7 ' + time() : '')">
      <span class="sc-body">
        @if (title()) { <span class="sc-title">{{ title() }}</span> }
        @if (time()) { <span class="sc-time">{{ time() }}</span> }
      </span>
      @if (count() !== null) { <span class="sc-badge">{{ count() }}</span> }
    </div>
  `, host: { class: "hrm-shift-cell" }, styles: ["/* angular:styles/component:css;356f0532bed06ab71a7a018451a1241f917f45b1ec1e1bc73876b7ecd9ba1188;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/domain-hrm/hrm-shift-cell.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.sc {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 100%;\n  min-height: 48px;\n  box-sizing: border-box;\n  padding: var(--space-2, 8px) var(--space-3, 10px);\n  border-radius: var(--radius-md);\n}\n.sc-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n  flex: 1;\n}\n.sc-title {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sc-time {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n.sc-badge {\n  flex: none;\n  align-self: flex-start;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 5px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-sm);\n  background: color-mix(in srgb, var(--sh) 16%, transparent);\n  color: var(--sh);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  line-height: 1;\n}\n.v-shift {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-left: 3px solid var(--sh);\n  box-shadow: var(--shadow-regular-xs, none);\n}\n.v-coverage {\n  background: color-mix(in srgb, var(--sh) 5%, var(--bg-surface));\n  border: 1.5px dashed color-mix(in srgb, var(--sh) 50%, var(--border-sub));\n}\n.v-coverage.is-muted {\n  opacity: .45;\n}\n.v-coverage .sc-time {\n  color: var(--text-soft);\n}\n.v-block,\n.v-rest {\n  justify-content: center;\n  text-align: center;\n  border: 0;\n  background: color-mix(in srgb, var(--sh) 22%, var(--bg-surface));\n}\n.v-block .sc-body,\n.v-rest .sc-body {\n  flex: none;\n  align-items: center;\n}\n.v-block .sc-title,\n.v-rest .sc-title {\n  font-weight: var(--font-medium, 500);\n  color: color-mix(in srgb, var(--sh) 72%, var(--text-strong));\n}\n.t-opening {\n  --sh: var(--data-7);\n}\n.t-afternoon {\n  --sh: var(--data-1);\n}\n.t-night {\n  --sh: var(--data-3);\n}\n.t-admin {\n  --sh: var(--data-4);\n}\n.t-rest {\n  --sh: var(--data-5);\n}\n.t-holiday {\n  --sh: var(--data-8);\n}\n.t-absence {\n  --sh: var(--warning-base);\n}\n.t-neutral {\n  --sh: var(--data-neutral);\n}\n/*# sourceMappingURL=hrm-shift-cell.css.map */\n"] }]
  }], null, { variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], muted: [{ type: Input, args: [{ isSignal: true, alias: "muted", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmShiftCell, { className: "HrmShiftCell", filePath: "libs/hrm-ui/src/lib/domain-hrm/hrm-shift-cell.ts", lineNumber: 71 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/shift-schedule-page.ts
var _c0 = () => ({ k: "opening", copy: true });
var _c1 = () => ({ k: "afternoon", copy: true });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.k;
function SgTemplateShiftSchedule_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateShiftSchedule_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, SgTemplateShiftSchedule_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateShiftSchedule_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateShiftSchedule_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 2)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, SgTemplateShiftSchedule_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "a", 7)(6, "hrm-button", 8);
    \u0275\u0275element(7, "tabler-icon", 9);
    \u0275\u0275text(8, " M\u1EDF to\xE0n m\xE0n h\xECnh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "sg-use", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "sg-do");
    \u0275\u0275text(13, "K\xE9o-th\u1EA3 b\u1EB1ng CDK DragDrop (chu\u1EA9n ho\xE1 c\xF9ng hrm-board): \xF4 \u0111\xEDch tr\u1ED1ng \u2192 chuy\u1EC3n, c\xF3 ca \u2192 ho\xE1n \u0111\u1ED5i.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "sg-do");
    \u0275\u0275text(15, "Th\xEAm/\u0111\u1ED5i ca qua 1 popover ch\u1ECDn lo\u1EA1i (token m\xE0u theo ");
    \u0275\u0275elementStart(16, "code");
    \u0275\u0275text(17, "hrm-shift-cell");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ").");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "sg-do");
    \u0275\u0275text(20, "State l\xE0 ");
    \u0275\u0275elementStart(21, "code");
    \u0275\u0275text(22, "signal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " \u2192 \u0111\u1EA7u ng\u01B0\u1EDDi/\u0111\u1ECBnh bi\xEAn c\u1EADp nh\u1EADt realtime khi s\u1EEDa l\u1ECBch.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "sg-dont");
    \u0275\u0275text(25, '\u0110\u1EEBng \u0111\u1EC3 thao t\xE1c \u1EA9n \u2014 \xF4 tr\u1ED1ng c\xF3 "\uFF0B", \xF4 ca k\xE9o \u0111\u01B0\u1EE3c (con tr\u1ECF grab), d\xF2ng NV c\xF3 n\xFAt xo\xE1 khi hover.');
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.maximize)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("when", ctx_r1.when);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 57);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "hrm-shift-cell", 55);
    \u0275\u0275template(2, SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_1_div_2_Template, 1, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cv_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkDragData", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("time", ctx_r1.opTime)("count", cv_r4.remOp);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 57);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "hrm-shift-cell", 58);
    \u0275\u0275template(2, SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_2_div_2_Template, 1, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cv_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkDragData", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("time", ctx_r1.afTime)("count", cv_r4.remAf);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275conditionalCreate(1, SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_1_Template, 3, 4, "div", 54);
    \u0275\u0275conditionalCreate(2, SgTemplateShiftSchedule_ng_template_2_For_58_Conditional_2_Template, 3, 4, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cv_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkDropListData", ctx_r1.covData)("cdkDropListEnterPredicate", ctx_r1.rejectDrop);
    \u0275\u0275advance();
    \u0275\u0275conditional(cv_r4.remOp > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cv_r4.remAf > 0 ? 2 : -1);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275element(4, "tabler-icon", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cv_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.clock)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cv_r5.heads * 8, "H 00M ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.user)("size", 13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cv_r5.heads);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wd_r6 = ctx.$implicit;
    const \u0275$index_199_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dows[\u0275$index_199_r7]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", wd_r6.getDate(), "/", wd_r6.getMonth() + 1);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_For_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 75);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_For_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const \u0275$index_227_r12 = \u0275\u0275nextContext().$index;
      const \u0275$index_208_r9 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(\u0275$index_208_r9, \u0275$index_227_r12, $event));
    });
    \u0275\u0275element(1, "hrm-shift-cell", 73);
    \u0275\u0275template(2, SgTemplateShiftSchedule_ng_template_2_For_69_For_11_For_2_div_2_Template, 1, 0, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("variant", ctx_r1.KIND[c_r13.k].variant)("tone", ctx_r1.KIND[c_r13.k].tone)("title", ctx_r1.KIND[c_r13.k].title)("time", c_r13.t || "");
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const \u0275$index_227_r12 = \u0275\u0275nextContext().$index;
      const \u0275$index_208_r9 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAdd(\u0275$index_208_r9, \u0275$index_227_r12, $event));
    });
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.plus)("size", 16);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("cdkDropListDropped", function SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275repeaterCreate(1, SgTemplateShiftSchedule_ng_template_2_For_69_For_11_For_2_Template, 3, 4, "div", 70, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Conditional_3_Template, 2, 2, "button", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r15 = ctx.$implicit;
    \u0275\u0275property("cdkDropListData", day_r15);
    \u0275\u0275advance();
    \u0275\u0275repeater(day_r15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!day_r15.length ? 3 : -1);
  }
}
function SgTemplateShiftSchedule_ng_template_2_For_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 62);
    \u0275\u0275element(2, "hrm-avatar", 63);
    \u0275\u0275elementStart(3, "span", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 67);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_For_69_Template_button_click_8_listener() {
      const \u0275$index_208_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeEmp(\u0275$index_208_r9));
    });
    \u0275\u0275element(9, "tabler-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(10, SgTemplateShiftSchedule_ng_template_2_For_69_For_11_Template, 4, 2, "div", 68, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", e_r16.av)("colorSeed", e_r16.name)("colorful", true)("size", 34);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", e_r16.ph, "h \xB7 H\u0110 40h");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.trash)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275repeater(e_r16.shifts);
  }
}
function SgTemplateShiftSchedule_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 13);
    \u0275\u0275element(1, "sg-template-side-nav", 14);
    \u0275\u0275elementStart(2, "div", 15)(3, "div", 16)(4, "div", 17)(5, "p", 18);
    \u0275\u0275text(6, "Ch\u1EA5m c\xF4ng \xB7 X\u1EBFp ca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 19);
    \u0275\u0275text(8, "L\u1ECBch x\u1EBFp ca");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "div", 21)(11, "div", 22)(12, "div", 23)(13, "button", 24);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPeriod());
    });
    \u0275\u0275element(14, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPeriod());
    });
    \u0275\u0275element(18, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 27);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.today());
    });
    \u0275\u0275text(20, "Tu\u1EA7n n\xE0y");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "hrm-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateShiftSchedule_ng_template_2_Template_hrm_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "hrm-select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateShiftSchedule_ng_template_2_Template_hrm_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.empView, $event) || (ctx_r1.empView = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 30);
    \u0275\u0275element(24, "tabler-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 31)(26, "hrm-button", 8);
    \u0275\u0275element(27, "tabler-icon", 9);
    \u0275\u0275text(28, " Ch\xE9p tu\u1EA7n tr\u01B0\u1EDBc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "hrm-button", 32);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_hrm_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEmp());
    });
    \u0275\u0275element(30, "tabler-icon", 9);
    \u0275\u0275text(31, " Th\xEAm nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 33);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearWeek());
    });
    \u0275\u0275element(33, "tabler-icon", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 34)(35, "div", 35)(36, "div", 36)(37, "div", 37);
    \u0275\u0275text(38, "\u0110\u1ECBnh bi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 38)(40, "span", 39);
    \u0275\u0275element(41, "i", 40);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 39);
    \u0275\u0275element(44, "i", 41);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 39);
    \u0275\u0275element(47, "tabler-icon", 9);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 39);
    \u0275\u0275element(50, "tabler-icon", 9);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 42)(53, "div", 43)(54, "hrm-button", 44);
    \u0275\u0275element(55, "tabler-icon", 9);
    \u0275\u0275text(56, " Xem \u0111\u1ECBnh bi\xEAn");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(57, SgTemplateShiftSchedule_ng_template_2_For_58_Template, 3, 4, "div", 45, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 46);
    \u0275\u0275element(60, "div", 47);
    \u0275\u0275repeaterCreate(61, SgTemplateShiftSchedule_ng_template_2_For_62_Template, 6, 6, "div", 48, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 49)(64, "div", 50);
    \u0275\u0275text(65, "L\u1ECBch: Nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(66, SgTemplateShiftSchedule_ng_template_2_For_67_Template, 5, 3, "div", 51, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(68, SgTemplateShiftSchedule_ng_template_2_For_69_Template, 12, 8, "div", 52, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "button", 53);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_ng_template_2_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEmp());
    });
    \u0275\u0275element(71, "tabler-icon", 9);
    \u0275\u0275text(72, " Th\xEAm nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("icon", ctx_r1.chevLeft)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.periodLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.caret)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.filterOpts);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.empOpts);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.empView);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.notes)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.copy)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.plus)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.trash)("size", 18);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" Ca s\xE1ng: ", ctx_r1.early());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Ca chi\u1EC1u: ", ctx_r1.late());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.clock)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.totalHours(), "H 00M");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.user)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.headcount());
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.list)("size", 15);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.cov());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.cov());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.weekDates());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.emps());
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.plus)("size", 16);
  }
}
function SgTemplateShiftSchedule_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_Conditional_4_For_5_Template_button_click_0_listener() {
      const pr_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pick(pr_r19.k));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pr_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("pk-dot pkd-" + pr_r19.k);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", pr_r19.label, " ");
  }
}
function SgTemplateShiftSchedule_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 82);
    \u0275\u0275elementStart(1, "button", 83);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_Conditional_4_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearCell());
    });
    \u0275\u0275element(2, "tabler-icon", 9);
    \u0275\u0275text(3, " Xo\xE1 ca");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.trash)("size", 14);
  }
}
function SgTemplateShiftSchedule_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function SgTemplateShiftSchedule_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.picker.set(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 78)(2, "div", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SgTemplateShiftSchedule_Conditional_4_For_5_Template, 3, 3, "button", 80, _forTrack1);
    \u0275\u0275conditionalCreate(6, SgTemplateShiftSchedule_Conditional_4_Conditional_6_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r21 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", p_r21.x, "px")("top", p_r21.y, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r21.mode === "add" ? "Th\xEAm ca" : "\u0110\u1ED5i ca");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.presets);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r21.mode === "edit" ? 6 : -1);
  }
}
var SgTemplateShiftSchedule = class _SgTemplateShiftSchedule {
  constructor() {
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.caret = ChevronRight;
    this.chevLeft = ChevronLeft;
    this.maximize = ArrowsMaximize;
    this.notes = ClipboardText;
    this.copy = Copy;
    this.plus = Plus;
    this.trash = Trash;
    this.list = List;
    this.clock = Clock;
    this.user = User;
    this.grip = GripVertical;
    this.when = ["K\xE9o-th\u1EA3 x\u1EBFp ca theo tu\u1EA7n \u0111\u1ED1i chi\u1EBFu \u0111\u1ECBnh bi\xEAn", "Th\xEAm/\u0111\u1ED5i/xo\xE1 ca nhanh trong l\u01B0\u1EDBi", "Th\xEAm/xo\xE1 nh\xE2n vi\xEAn khi c\xE2n ng\u01B0\u1EDDi"];
    this._filter = signal("all", ...ngDevMode ? [{ debugName: "_filter" }] : (
      /* istanbul ignore next */
      []
    ));
    this._empView = signal("emp", ...ngDevMode ? [{ debugName: "_empView" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ref = signal(new Date(2026, 7, 17), ...ngDevMode ? [{ debugName: "ref" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterOpts = [{ value: "all", label: "B\u1ED9 l\u1ECDc" }, { value: "open", label: "C\xF2n tr\u1ED1ng" }, { value: "conflict", label: "Tr\xF9ng ca" }];
    this.empOpts = [{ value: "emp", label: "Nh\xE2n vi\xEAn" }, { value: "dept", label: "B\u1ED9 ph\u1EADn" }, { value: "role", label: "V\u1ECB tr\xED" }];
    this.dows = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    this.weekDates = computed(() => {
      const m = this.mondayOf(this.ref());
      return Array.from({ length: 7 }, (_, i) => this.addDays(m, i));
    }, ...ngDevMode ? [{ debugName: "weekDates" }] : (
      /* istanbul ignore next */
      []
    ));
    this.periodLabel = computed(() => {
      const w = this.weekDates();
      const p = (n) => String(n).padStart(2, "0");
      return `${p(w[0].getDate())}/${p(w[0].getMonth() + 1)} \u2013 ${p(w[6].getDate())}/${p(w[6].getMonth() + 1)}/${w[6].getFullYear()}`;
    }, ...ngDevMode ? [{ debugName: "periodLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.KIND = {
      opening: { variant: "shift", tone: "opening", title: "Ca S\xE1ng" },
      afternoon: { variant: "shift", tone: "afternoon", title: "Chi\u1EC1u" },
      night: { variant: "shift", tone: "night", title: "\u0110\xEAm" },
      admin: { variant: "shift", tone: "admin", title: "H\xE0nh ch\xEDnh" },
      rest: { variant: "rest", tone: "rest", title: "Ng\xE0y ngh\u1EC9" },
      holiday: { variant: "block", tone: "holiday", title: "Ngh\u1EC9 l\u1EC5" },
      absence: { variant: "block", tone: "absence", title: "V\u1EAFng m\u1EB7t" }
    };
    this.DTIME = {
      opening: "08:00\u201313:00",
      afternoon: "15:00\u201320:00",
      night: "22:00\u201306:00",
      admin: "08:00\u201317:00",
      rest: "",
      holiday: "",
      absence: ""
    };
    this.presets = [
      { k: "opening", label: "Ca S\xE1ng \xB7 08:00\u201313:00" },
      { k: "afternoon", label: "Chi\u1EC1u \xB7 15:00\u201320:00" },
      { k: "night", label: "\u0110\xEAm \xB7 22:00\u201306:00" },
      { k: "admin", label: "H\xE0nh ch\xEDnh \xB7 08:00\u201317:00" },
      { k: "rest", label: "Ng\xE0y ngh\u1EC9" },
      { k: "holiday", label: "Ngh\u1EC9 l\u1EC5" },
      { k: "absence", label: "V\u1EAFng m\u1EB7t" }
    ];
    this.opTime = "08:00\u201313:00";
    this.afTime = "15:00\u201320:00";
    this.reqOp = [2, 3, 3, 3, 4, 3, 0];
    this.reqAf = [3, 4, 2, 3, 4, 5, 0];
    this.cov = computed(() => {
      const list = this.emps();
      return this.dows.map((_, di) => {
        const asgOp = list.filter((e) => e.shifts[di].some((s) => s.k === "opening")).length;
        const asgAf = list.filter((e) => e.shifts[di].some((s) => s.k === "afternoon")).length;
        const remOp = Math.max(0, this.reqOp[di] - asgOp);
        const remAf = Math.max(0, this.reqAf[di] - asgAf);
        return { remOp, remAf, heads: remOp + remAf };
      });
    }, ...ngDevMode ? [{ debugName: "cov" }] : (
      /* istanbul ignore next */
      []
    ));
    this.early = computed(() => this.cov().reduce((a, c) => a + c.remOp, 0), ...ngDevMode ? [{ debugName: "early" }] : (
      /* istanbul ignore next */
      []
    ));
    this.late = computed(() => this.cov().reduce((a, c) => a + c.remAf, 0), ...ngDevMode ? [{ debugName: "late" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalHours = computed(() => this.cov().reduce((a, c) => a + c.heads * 8, 0), ...ngDevMode ? [{ debugName: "totalHours" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emps = signal([
      { id: 1, name: "Nguy\u1EC5n Th\u1ECB Mai Anh", role: "L\u1EC5 t\xE2n", av: "NA", ph: "0,0", shifts: [[], [], [{ k: "holiday" }], [{ k: "absence" }], [{ k: "absence" }], [], []] },
      { id: 2, name: "Tr\u1EA7n V\u0103n H\xF9ng", role: "Thu ng\xE2n", av: "TH", ph: "15,0", shifts: [[{ k: "rest" }], [{ k: "opening", t: "08:00\u201313:00" }], [], [{ k: "opening", t: "08:00\u201313:00" }], [{ k: "opening", t: "08:00\u201313:00" }], [], []] },
      { id: 3, name: "L\xEA Qu\u1ED1c B\u1EA3o", role: "B\xE1n h\xE0ng", av: "LB", ph: "20,0", shifts: [[{ k: "rest" }], [{ k: "afternoon", t: "15:00\u201320:00" }], [], [{ k: "afternoon", t: "15:00\u201320:00" }], [{ k: "afternoon", t: "15:00\u201320:00" }], [{ k: "afternoon", t: "15:00\u201320:00" }], []] },
      { id: 4, name: "Ph\u1EA1m H\u1ED3ng Nhung", role: "CSKH", av: "PN", ph: "20,0", shifts: [[{ k: "opening", t: "08:00\u201313:00" }], [{ k: "opening", t: "08:00\u201313:00" }], [{ k: "opening", t: "08:00\u201313:00" }], [], [{ k: "opening", t: "08:00\u201313:00" }], [], []] },
      { id: 5, name: "\u0110\u1ED7 Minh Khoa", role: "Kho v\u1EADn", av: "MK", ph: "5,0", shifts: [[{ k: "afternoon", t: "15:00\u201320:00" }], [], [], [], [{ k: "absence" }], [{ k: "holiday" }], [{ k: "absence" }]] },
      { id: 6, name: "V\u0169 Thanh T\xE2m", role: "L\u1EC5 t\xE2n", av: "TT", ph: "10,0", shifts: [[], [{ k: "afternoon", t: "15:00\u201320:00" }], [{ k: "opening", t: "08:00\u201313:00" }], [{ k: "opening", t: "08:00\u201313:00" }], [], [], []] }
    ], ...ngDevMode ? [{ debugName: "emps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.empSeq = 7;
    this.headcount = computed(() => this.emps().filter((e) => e.shifts.some((day) => day.some((s) => s.k === "opening" || s.k === "afternoon" || s.k === "night" || s.k === "admin"))).length, ...ngDevMode ? [{ debugName: "headcount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.picker = signal(null, ...ngDevMode ? [{ debugName: "picker" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rejectDrop = () => false;
    this.covData = [];
  }
  get filter() {
    return this._filter();
  }
  set filter(v) {
    this._filter.set(v);
  }
  get empView() {
    return this._empView();
  }
  set empView(v) {
    this._empView.set(v);
  }
  // ── Điều hướng tuần (‹ › + Tuần này + nhãn khoảng) ──
  addDays(d, n) {
    const r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
  }
  dowIndex(d) {
    return (d.getDay() + 6) % 7;
  }
  // Mon=0..Sun=6
  mondayOf(d) {
    return this.addDays(d, -this.dowIndex(d));
  }
  prevPeriod() {
    this.ref.set(this.addDays(this.ref(), -7));
  }
  nextPeriod() {
    this.ref.set(this.addDays(this.ref(), 7));
  }
  today() {
    this.ref.set(new Date(2026, 7, 17));
  }
  openAdd(ei, di, ev) {
    this.openPicker(ei, di, "add", ev);
  }
  openEdit(ei, di, ev) {
    this.openPicker(ei, di, "edit", ev);
  }
  openPicker(ei, di, mode, ev) {
    ev.stopPropagation();
    const r = ev.currentTarget.getBoundingClientRect();
    const x = Math.min(r.left, window.innerWidth - 230);
    const y = Math.min(r.bottom + 4, window.innerHeight - 320);
    this.picker.set({ ei, di, mode, x, y });
  }
  pick(k) {
    const p = this.picker();
    if (!p)
      return;
    const t = this.DTIME[k];
    this.setCell(p.ei, p.di, t ? { k, t } : { k });
    this.picker.set(null);
  }
  clearCell() {
    const p = this.picker();
    if (!p)
      return;
    this.setCell(p.ei, p.di, null);
    this.picker.set(null);
  }
  setCell(ei, di, cell) {
    const day = this.emps()[ei].shifts[di];
    day.length = 0;
    if (cell)
      day.push(cell);
    this.bump();
  }
  onDrop(e) {
    const data = e.item.data;
    if (data?.copy) {
      const t = this.DTIME[data.k];
      const to2 = e.container.data;
      to2.length = 0;
      to2.push(t ? { k: data.k, t } : { k: data.k });
      this.bump();
      return;
    }
    if (e.previousContainer === e.container)
      return;
    const from = e.previousContainer.data;
    const to = e.container.data;
    if (to.length === 0) {
      transferArrayItem(from, to, e.previousIndex, 0);
    } else {
      const moved = from[e.previousIndex];
      from[e.previousIndex] = to[0];
      to[0] = moved;
    }
    this.bump();
  }
  // ── thêm / xoá nhân viên · xoá tuần ──
  addEmp() {
    const id = this.empSeq++;
    this.emps.update((list) => [...list, {
      id,
      name: "Nh\xE2n vi\xEAn m\u1EDBi",
      role: "Ch\u01B0a x\u1EBFp ca",
      av: "NV",
      ph: "0,0",
      shifts: Array.from({ length: 7 }, () => [])
    }]);
  }
  removeEmp(ei) {
    this.emps.update((list) => list.filter((_, i) => i !== ei));
  }
  clearWeek() {
    this.emps.update((list) => list.map((e) => __spreadProps(__spreadValues({}, e), { shifts: e.shifts.map(() => []) })));
  }
  /** Ép re-render sau khi mutate mảng lồng (signal shallow). */
  bump() {
    this.emps.set([...this.emps()]);
  }
  static {
    this.\u0275fac = function SgTemplateShiftSchedule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateShiftSchedule)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateShiftSchedule, selectors: [["sg-template-shift-schedule"]], decls: 5, vars: 2, consts: [["screen", ""], [1, "lp-desktop", "lp-desktop--full"], ["category", "Template", "title", "X\u1EBFp ca c\u1EEDa h\xE0ng", "desc", "L\u1ECBch x\u1EBFp ca d\u1EA1ng scheduler T\u01AF\u01A0NG T\xC1C: k\xE9o-th\u1EA3 \xF4 ca gi\u1EEFa ng\xE0y/nh\xE2n vi\xEAn (\u0111\u1ED5i ch\u1ED7 \xB7 ho\xE1n \u0111\u1ED5i), b\u1EA5m \xF4 tr\u1ED1ng \u0111\u1EC3 th\xEAm ca, b\u1EA5m \xF4 ca \u0111\u1EC3 \u0111\u1ED5i/xo\xE1, th\xEAm/xo\xE1 nh\xE2n vi\xEAn. D\u1EA3i \u0110\u1ECANH BI\xCAN (coverage) tr\xEAn l\u01B0\u1EDBi NH\xC2N VI\xCAN \xD7 7 ng\xE0y. \xD4 ca = hrm-shift-cell."], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "lp-desktop"], [1, "lp-full"], ["href", "/preview/shift-schedule", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], ["purpose", "Ph\xE2n & theo d\xF5i ca theo tu\u1EA7n \u0111\u1ED1i chi\u1EBFu \u0111\u1ECBnh bi\xEAn (coverage). Ng\u01B0\u1EDDi x\u1EBFp l\u1ECBch K\xC9O-TH\u1EA2 ca gi\u1EEFa c\xE1c \xF4, th\xEAm/\u0111\u1ED5i/xo\xE1 ca, th\xEAm/xo\xE1 nh\xE2n vi\xEAn \u2014 c\xE2n ng\u01B0\u1EDDi theo khung gi\u1EDD.", "behavior", "K\xE9o 1 \xF4 ca sang \xF4 kh\xE1c \u2192 chuy\u1EC3n ca (\xF4 \u0111\xEDch tr\u1ED1ng) ho\u1EB7c HO\xC1N \u0110\u1ED4I (\xF4 \u0111\xEDch \u0111\xE3 c\xF3 ca). B\u1EA5m \xF4 tr\u1ED1ng \u2192 menu ch\u1ECDn lo\u1EA1i ca (Ca S\xE1ng/Chi\u1EC1u/\u0110\xEAm/H\xE0nh ch\xEDnh/Ng\xE0y ngh\u1EC9/Ngh\u1EC9 l\u1EC5/V\u1EAFng m\u1EB7t). B\u1EA5m \xF4 ca \u2192 \u0111\u1ED5i lo\u1EA1i ho\u1EB7c Xo\xE1 ca. N\xFAt Th\xEAm nh\xE2n vi\xEAn ch\xE8n d\xF2ng m\u1EDBi; di chu\u1ED9t v\xE0o d\xF2ng \u2192 n\xFAt xo\xE1.", "avoid", "Kh\xF4ng cho 1 \xF4 ch\u1EE9a >1 ca (m\u1ED7i \xF4 = 1 ca/ng\xE0y). Kh\xF4ng k\xE9o-th\u1EA3 v\xE0o d\u1EA3i \u0110\u1ECANH BI\xCAN (ch\u1EC9 l\xE0 nhu c\u1EA7u, kh\xF4ng ph\u1EA3i ph\xE2n c\xF4ng).", 3, "when"], ["sgBest", ""], ["contentPad", "none"], ["appSideNav", "", "selectedKey", "shift"], [1, "ssh-scroll"], [1, "sch-page"], [1, "sch-head"], [1, "sch-eyebrow"], [1, "sch-h1"], [1, "sch-panel"], [1, "sch-toolbar"], [1, "tb-left"], [1, "sch-nav"], ["type", "button", "aria-label", "Tu\u1EA7n tr\u01B0\u1EDBc", 1, "dy-nav", 3, "click"], [1, "sch-period"], ["type", "button", "aria-label", "Tu\u1EA7n sau", 1, "dy-nav", 3, "click"], ["type", "button", 1, "sch-today", 3, "click"], [2, "width", "120px", 3, "ngModelChange", "options", "ngModel"], [2, "width", "140px", 3, "ngModelChange", "options", "ngModel"], ["type", "button", "aria-label", "Ghi ch\xFA", 1, "tb-ico"], [1, "tb-right"], ["variant", "primary", 3, "click"], ["type", "button", "aria-label", "Xo\xE1 tu\u1EA7n", 1, "tb-ico", "tb-ico--danger", 3, "click"], [1, "sch-wrap"], ["cdkDropListGroup", "", 1, "sch-grid"], [1, "band", "cov-head"], [1, "cov-eyebrow"], [1, "cov-stats"], [1, "cov-stat"], [1, "dot", "dot--early"], [1, "dot", "dot--late"], [1, "band", "cov-cells"], [1, "cov-views"], ["variant", "default", "size", "small"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "cov-day", 3, "cdkDropListData", "cdkDropListEnterPredicate"], [1, "band", "cov-foot"], [1, "cov-foot-lead"], [1, "cov-fday"], [1, "band", "day-head"], [1, "day-lead"], [1, "sch-dh"], [1, "band", "emp-row"], ["type", "button", 1, "sch-add", 3, "click"], ["cdkDrag", "", 1, "cov-drag", 3, "cdkDragData"], ["variant", "coverage", "tone", "opening", "title", "Ca S\xE1ng", 3, "time", "count"], ["class", "cov-ph", 4, "cdkDragPlaceholder"], [1, "cov-ph"], ["variant", "coverage", "tone", "afternoon", "title", "Chi\u1EC1u", 3, "time", "count"], [1, "heads"], [1, "sch-dow"], [1, "sch-date"], [1, "emp-info"], [3, "text", "colorSeed", "colorful", "size"], [1, "emp-meta"], [1, "emp-name"], [1, "emp-hrs"], ["type", "button", "aria-label", "Xo\xE1 nh\xE2n vi\xEAn", 1, "emp-x", 3, "click"], ["cdkDropList", "", 1, "sch-cell", 3, "cdkDropListData"], ["cdkDropList", "", 1, "sch-cell", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "sch-card"], ["type", "button", "aria-label", "Th\xEAm ca", 1, "sch-empty"], ["cdkDrag", "", 1, "sch-card", 3, "click"], [3, "variant", "tone", "title", "time"], ["class", "sch-card-ph", 4, "cdkDragPlaceholder"], [1, "sch-card-ph"], ["type", "button", "aria-label", "Th\xEAm ca", 1, "sch-empty", 3, "click"], [1, "pk-backdrop", 3, "click"], [1, "pk"], [1, "pk-h"], ["type", "button", 1, "pk-item"], ["type", "button", 1, "pk-item", 3, "click"], [1, "pk-sep"], ["type", "button", 1, "pk-item", "pk-del", 3, "click"]], template: function SgTemplateShiftSchedule_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateShiftSchedule_Conditional_0_Template, 2, 1, "div", 1)(1, SgTemplateShiftSchedule_Conditional_1_Template, 26, 4, "sg-doc", 2);
        \u0275\u0275template(2, SgTemplateShiftSchedule_ng_template_2_Template, 73, 29, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(4, SgTemplateShiftSchedule_Conditional_4_Template, 7, 6);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275conditional(ctx.preview ? 0 : 1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_2_0 = ctx.picker()) ? 4 : -1, tmp_2_0);
      }
    }, dependencies: [
      NgTemplateOutlet,
      FormsModule,
      NgControlStatus,
      NgModel,
      TablerIconComponent,
      CdkDropListGroup,
      CdkDropList,
      CdkDrag,
      CdkDragPlaceholder,
      HrmAppShell,
      SgTemplateSideNav,
      HrmButton,
      HrmSelect,
      HrmAvatar,
      HrmShiftCell,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], styles: ["\n.lp-desktop[_ngcontent-%COMP%] {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.lp-full-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content {\n  padding: 0;\n}\n.ssh-scroll[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  background: var(--bg-canvas, var(--bg-surface-subtle));\n}\n.sch-page[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: var(--space-5, 20px) var(--space-6, 24px) var(--space-10, 40px);\n}\n.sch-head[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3, 12px);\n}\n.sch-eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-soft);\n}\n.sch-h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-22, 22px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  letter-spacing: -.01em;\n}\n.sch-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n}\n.sch-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3, 12px);\n  padding: var(--space-2-5, 10px) var(--space-3-5, 14px);\n  border-bottom: 1px solid var(--border-sub);\n  flex-wrap: wrap;\n}\n.tb-left[_ngcontent-%COMP%], \n.tb-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.tb-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.tb-ico[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.tb-ico--danger[_ngcontent-%COMP%]:hover {\n  color: var(--error-base);\n  border-color: var(--error-base);\n}\n.sch-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sch-today[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  cursor: pointer;\n}\n.sch-today[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.sch-period[_ngcontent-%COMP%] {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  margin-left: 4px;\n  white-space: nowrap;\n}\n.sch-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.sch-grid[_ngcontent-%COMP%] {\n  width: max-content;\n  min-width: 100%;\n  --cols: 220px repeat(7, minmax(158px, 1fr));\n}\n.band[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: var(--cols);\n}\n.band[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n  border-right: 1px solid var(--border-sub);\n}\n.band[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  border-left: 0;\n}\n.cov-head[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  align-items: center;\n}\n.cov-head[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background: var(--bg-surface-subtle);\n}\n.cov-eyebrow[_ngcontent-%COMP%] {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--text-soft);\n  text-transform: uppercase;\n}\n.cov-stats[_ngcontent-%COMP%] {\n  grid-column: 2 / -1;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4, 16px);\n  padding: var(--space-2, 8px) var(--space-3-5, 14px);\n  flex-wrap: wrap;\n}\n.cov-stat[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex: none;\n}\n.dot--early[_ngcontent-%COMP%] {\n  background: var(--data-7);\n}\n.dot--late[_ngcontent-%COMP%] {\n  background: var(--data-1);\n}\n.cov-cells[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-sub);\n}\n.cov-views[_ngcontent-%COMP%] {\n  padding: var(--space-3, 12px);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: flex-start;\n}\n.cov-day[_ngcontent-%COMP%] {\n  padding: var(--space-2, 8px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  border-left: 1px solid var(--border-sub);\n}\n.cov-drag[_ngcontent-%COMP%] {\n  cursor: grab;\n  border-radius: var(--radius-md);\n}\n.cov-drag[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.cov-drag.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-regular-md);\n}\n.cov-drag.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: .4;\n}\n.cov-foot[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n}\n.cov-foot[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background: var(--bg-surface-subtle);\n}\n.cov-fday[_ngcontent-%COMP%] {\n  padding: var(--space-2, 7px) var(--space-2-5, 10px);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border-left: 1px solid var(--border-sub);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.cov-fday[_ngcontent-%COMP%]   .heads[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.day-head[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.day-head[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  background: var(--bg-surface);\n}\n.day-lead[_ngcontent-%COMP%] {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--text-soft);\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.sch-dh[_ngcontent-%COMP%] {\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n  border-left: 1px solid var(--border-sub);\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.sch-dow[_ngcontent-%COMP%] {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.sch-date[_ngcontent-%COMP%] {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.emp-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-sub);\n}\n.emp-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.emp-info[_ngcontent-%COMP%] {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n}\n.emp-row[_ngcontent-%COMP%]:hover   .emp-info[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n}\n.emp-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.emp-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-hrs[_ngcontent-%COMP%] {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.emp-x[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  color: var(--text-soft);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity .12s;\n}\n.emp-row[_ngcontent-%COMP%]:hover   .emp-x[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.emp-x[_ngcontent-%COMP%]:hover {\n  color: var(--error-base);\n  background: color-mix(in srgb, var(--error-base) 12%, transparent);\n}\n.sch-cell[_ngcontent-%COMP%] {\n  padding: var(--space-2, 8px);\n  border-left: 1px solid var(--border-sub);\n  min-height: 66px;\n  display: flex;\n}\n.sch-card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  cursor: grab;\n  border-radius: var(--radius-md);\n}\n.sch-card[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.sch-card[_ngcontent-%COMP%]   hrm-shift-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sch-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px dashed transparent;\n  border-radius: var(--radius-md);\n  background: transparent;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity .12s;\n}\n.sch-cell[_ngcontent-%COMP%]:hover   .sch-empty[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: var(--border-sub);\n}\n.sch-empty[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.sch-card.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-regular-md);\n}\n.sch-card.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .sch-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform var(--duration-normal, .18s) var(--ease-out, ease);\n}\n.sch-cell.cdk-drop-list-receiving[_ngcontent-%COMP%], \n.sch-cell.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform var(--duration-normal, .2s) var(--ease-out, ease);\n}\n.sch-add[_ngcontent-%COMP%] {\n  margin-top: var(--space-3, 12px);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px dashed var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  color: var(--text-sub);\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.sch-add[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.dy-nav[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.dy-nav[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.pk-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n}\n.pk[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 41;\n  min-width: 214px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-lg);\n  padding: 6px;\n}\n.pk-h[_ngcontent-%COMP%] {\n  padding: 6px 8px 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.pk-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 7px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-strong);\n  text-align: left;\n}\n.pk-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.pk-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex: none;\n}\n.pk-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border-sub);\n  margin: 4px 6px;\n}\n.pk-del[_ngcontent-%COMP%] {\n  color: var(--error-base);\n  gap: 7px;\n}\n.pk-del[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--error-base) 10%, transparent);\n}\n.pkd-opening[_ngcontent-%COMP%] {\n  background: var(--data-7);\n}\n.pkd-afternoon[_ngcontent-%COMP%] {\n  background: var(--data-1);\n}\n.pkd-night[_ngcontent-%COMP%] {\n  background: var(--data-3);\n}\n.pkd-admin[_ngcontent-%COMP%] {\n  background: var(--data-4);\n}\n.pkd-rest[_ngcontent-%COMP%] {\n  background: var(--data-5);\n}\n.pkd-holiday[_ngcontent-%COMP%] {\n  background: var(--data-8);\n}\n.pkd-absence[_ngcontent-%COMP%] {\n  background: var(--warning-base);\n}\n/*# sourceMappingURL=shift-schedule-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateShiftSchedule, [{
    type: Component,
    args: [{ selector: "sg-template-shift-schedule", imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      CdkDropListGroup,
      CdkDropList,
      CdkDrag,
      CdkDragPlaceholder,
      HrmAppShell,
      SgTemplateSideNav,
      HrmButton,
      HrmSelect,
      HrmAvatar,
      HrmShiftCell,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], template: `
    @if (preview) {
      <div class="lp-desktop lp-desktop--full"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
    <sg-doc category="Template" title="X\u1EBFp ca c\u1EEDa h\xE0ng"
      desc="L\u1ECBch x\u1EBFp ca d\u1EA1ng scheduler T\u01AF\u01A0NG T\xC1C: k\xE9o-th\u1EA3 \xF4 ca gi\u1EEFa ng\xE0y/nh\xE2n vi\xEAn (\u0111\u1ED5i ch\u1ED7 \xB7 ho\xE1n \u0111\u1ED5i), b\u1EA5m \xF4 tr\u1ED1ng \u0111\u1EC3 th\xEAm ca, b\u1EA5m \xF4 ca \u0111\u1EC3 \u0111\u1ED5i/xo\xE1, th\xEAm/xo\xE1 nh\xE2n vi\xEAn. D\u1EA3i \u0110\u1ECANH BI\xCAN (coverage) tr\xEAn l\u01B0\u1EDBi NH\xC2N VI\xCAN \xD7 7 ng\xE0y. \xD4 ca = hrm-shift-cell.">
      <div sgOverview>
        <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
        <div class="lp-full">
          <a class="lp-full-link" href="/preview/shift-schedule" target="_blank" rel="noopener">
            <hrm-button variant="default"><tabler-icon [icon]="maximize" [size]="16" /> M\u1EDF to\xE0n m\xE0n h\xECnh</hrm-button>
          </a>
        </div>
      </div>
      <div sgUsage>
        <sg-use purpose="Ph\xE2n & theo d\xF5i ca theo tu\u1EA7n \u0111\u1ED1i chi\u1EBFu \u0111\u1ECBnh bi\xEAn (coverage). Ng\u01B0\u1EDDi x\u1EBFp l\u1ECBch K\xC9O-TH\u1EA2 ca gi\u1EEFa c\xE1c \xF4, th\xEAm/\u0111\u1ED5i/xo\xE1 ca, th\xEAm/xo\xE1 nh\xE2n vi\xEAn \u2014 c\xE2n ng\u01B0\u1EDDi theo khung gi\u1EDD."
          [when]="when"
          behavior="K\xE9o 1 \xF4 ca sang \xF4 kh\xE1c \u2192 chuy\u1EC3n ca (\xF4 \u0111\xEDch tr\u1ED1ng) ho\u1EB7c HO\xC1N \u0110\u1ED4I (\xF4 \u0111\xEDch \u0111\xE3 c\xF3 ca). B\u1EA5m \xF4 tr\u1ED1ng \u2192 menu ch\u1ECDn lo\u1EA1i ca (Ca S\xE1ng/Chi\u1EC1u/\u0110\xEAm/H\xE0nh ch\xEDnh/Ng\xE0y ngh\u1EC9/Ngh\u1EC9 l\u1EC5/V\u1EAFng m\u1EB7t). B\u1EA5m \xF4 ca \u2192 \u0111\u1ED5i lo\u1EA1i ho\u1EB7c Xo\xE1 ca. N\xFAt Th\xEAm nh\xE2n vi\xEAn ch\xE8n d\xF2ng m\u1EDBi; di chu\u1ED9t v\xE0o d\xF2ng \u2192 n\xFAt xo\xE1."
          avoid="Kh\xF4ng cho 1 \xF4 ch\u1EE9a >1 ca (m\u1ED7i \xF4 = 1 ca/ng\xE0y). Kh\xF4ng k\xE9o-th\u1EA3 v\xE0o d\u1EA3i \u0110\u1ECANH BI\xCAN (ch\u1EC9 l\xE0 nhu c\u1EA7u, kh\xF4ng ph\u1EA3i ph\xE2n c\xF4ng)." />
      </div>
      <div sgBest>
        <sg-do>K\xE9o-th\u1EA3 b\u1EB1ng CDK DragDrop (chu\u1EA9n ho\xE1 c\xF9ng hrm-board): \xF4 \u0111\xEDch tr\u1ED1ng \u2192 chuy\u1EC3n, c\xF3 ca \u2192 ho\xE1n \u0111\u1ED5i.</sg-do>
        <sg-do>Th\xEAm/\u0111\u1ED5i ca qua 1 popover ch\u1ECDn lo\u1EA1i (token m\xE0u theo <code>hrm-shift-cell</code>).</sg-do>
        <sg-do>State l\xE0 <code>signal</code> \u2192 \u0111\u1EA7u ng\u01B0\u1EDDi/\u0111\u1ECBnh bi\xEAn c\u1EADp nh\u1EADt realtime khi s\u1EEDa l\u1ECBch.</sg-do>
        <sg-dont>\u0110\u1EEBng \u0111\u1EC3 thao t\xE1c \u1EA9n \u2014 \xF4 tr\u1ED1ng c\xF3 "\uFF0B", \xF4 ca k\xE9o \u0111\u01B0\u1EE3c (con tr\u1ECF grab), d\xF2ng NV c\xF3 n\xFAt xo\xE1 khi hover.</sg-dont>
      </div>
    </sg-doc>
    }

    <ng-template #screen>
      <hrm-app-shell contentPad="none">
        <sg-template-side-nav appSideNav selectedKey="shift" />

        <div class="ssh-scroll">
          <div class="sch-page">
            <div class="sch-head">
              <p class="sch-eyebrow">Ch\u1EA5m c\xF4ng \xB7 X\u1EBFp ca</p>
              <h1 class="sch-h1">L\u1ECBch x\u1EBFp ca</h1>
            </div>

            <!-- Toolbar + l\u01B0\u1EDBi trong 1 panel tr\u1EAFng (\u0111\u1ED3ng b\u1ED9 toolbar ch\u1EBF \u0111\u1ED9 xem th\u1EBB/kanban) -->
            <div class="sch-panel">
            <div class="sch-toolbar">
              <div class="tb-left">
                <div class="sch-nav">
                  <button class="dy-nav" type="button" (click)="prevPeriod()" aria-label="Tu\u1EA7n tr\u01B0\u1EDBc"><tabler-icon [icon]="chevLeft" [size]="18" /></button>
                  <span class="sch-period">{{ periodLabel() }}</span>
                  <button class="dy-nav" type="button" (click)="nextPeriod()" aria-label="Tu\u1EA7n sau"><tabler-icon [icon]="caret" [size]="18" /></button>
                  <button class="sch-today" type="button" (click)="today()">Tu\u1EA7n n\xE0y</button>
                </div>
                <hrm-select [options]="filterOpts" [(ngModel)]="filter" style="width:120px" />
                <hrm-select [options]="empOpts" [(ngModel)]="empView" style="width:140px" />
                <button class="tb-ico" type="button" aria-label="Ghi ch\xFA"><tabler-icon [icon]="notes" [size]="18" /></button>
              </div>
              <div class="tb-right">
                <hrm-button variant="default"><tabler-icon [icon]="copy" [size]="16" /> Ch\xE9p tu\u1EA7n tr\u01B0\u1EDBc</hrm-button>
                <hrm-button variant="primary" (click)="addEmp()"><tabler-icon [icon]="plus" [size]="16" /> Th\xEAm nh\xE2n vi\xEAn</hrm-button>
                <button class="tb-ico tb-ico--danger" type="button" aria-label="Xo\xE1 tu\u1EA7n" (click)="clearWeek()"><tabler-icon [icon]="trash" [size]="18" /></button>
              </div>
            </div>

            <!-- L\u01B0\u1EDBi x\u1EBFp ca theo tu\u1EA7n -->
            <div class="sch-wrap">
              <div class="sch-grid" cdkDropListGroup>
                <!-- Coverage header: eyebrow + stats -->
                <div class="band cov-head">
                  <div class="cov-eyebrow">\u0110\u1ECBnh bi\xEAn</div>
                  <div class="cov-stats">
                    <span class="cov-stat"><i class="dot dot--early"></i> Ca s\xE1ng: {{ early() }}</span>
                    <span class="cov-stat"><i class="dot dot--late"></i> Ca chi\u1EC1u: {{ late() }}</span>
                    <span class="cov-stat"><tabler-icon [icon]="clock" [size]="14" /> {{ totalHours() }}H 00M</span>
                    <span class="cov-stat"><tabler-icon [icon]="user" [size]="14" /> {{ headcount() }}</span>
                  </div>
                </div>

                <!-- Coverage cells: 2 demand blocks per day -->
                <div class="band cov-cells">
                  <div class="cov-views">
                    <hrm-button variant="default" size="small"><tabler-icon [icon]="list" [size]="15" /> Xem \u0111\u1ECBnh bi\xEAn</hrm-button>
                  </div>
                  @for (cv of cov(); track $index) {
                    <div class="cov-day" cdkDropList [cdkDropListData]="covData" [cdkDropListEnterPredicate]="rejectDrop" cdkDropListSortingDisabled>
                      @if (cv.remOp > 0) {
                        <div class="cov-drag" cdkDrag [cdkDragData]="{ k: 'opening', copy: true }">
                          <hrm-shift-cell variant="coverage" tone="opening" title="Ca S\xE1ng" [time]="opTime" [count]="cv.remOp" />
                          <div class="cov-ph" *cdkDragPlaceholder></div>
                        </div>
                      }
                      @if (cv.remAf > 0) {
                        <div class="cov-drag" cdkDrag [cdkDragData]="{ k: 'afternoon', copy: true }">
                          <hrm-shift-cell variant="coverage" tone="afternoon" title="Chi\u1EC1u" [time]="afTime" [count]="cv.remAf" />
                          <div class="cov-ph" *cdkDragPlaceholder></div>
                        </div>
                      }
                    </div>
                  }
                </div>

                <!-- Coverage totals per day -->
                <div class="band cov-foot">
                  <div class="cov-foot-lead"></div>
                  @for (cv of cov(); track $index) {
                    <div class="cov-fday">
                      <tabler-icon [icon]="clock" [size]="13" /> {{ cv.heads * 8 }}H 00M
                      <span class="heads"><tabler-icon [icon]="user" [size]="13" /> {{ cv.heads }}</span>
                    </div>
                  }
                </div>

                <!-- Day header -->
                <div class="band day-head">
                  <div class="day-lead">L\u1ECBch: Nh\xE2n vi\xEAn</div>
                  @for (wd of weekDates(); track $index; let i = $index) {
                    <div class="sch-dh"><span class="sch-dow">{{ dows[i] }}</span><span class="sch-date">{{ wd.getDate() }}/{{ wd.getMonth() + 1 }}</span></div>
                  }
                </div>

                <!-- Employee rows -->
                @for (e of emps(); track e.id; let ei = $index) {
                  <div class="band emp-row">
                    <div class="emp-info">
                      <hrm-avatar [text]="e.av" [colorSeed]="e.name" [colorful]="true" [size]="34" />
                      <span class="emp-meta">
                        <span class="emp-name">{{ e.name }}</span>
                        <span class="emp-hrs">{{ e.ph }}h \xB7 H\u0110 40h</span>
                      </span>
                      <button class="emp-x" type="button" (click)="removeEmp(ei)" aria-label="Xo\xE1 nh\xE2n vi\xEAn"><tabler-icon [icon]="trash" [size]="14" /></button>
                    </div>
                    @for (day of e.shifts; track $index; let di = $index) {
                      <div class="sch-cell" cdkDropList [cdkDropListData]="day" (cdkDropListDropped)="onDrop($event)">
                        @for (c of day; track $index) {
                          <div class="sch-card" cdkDrag (click)="openEdit(ei, di, $event)">
                            <hrm-shift-cell [variant]="KIND[c.k].variant" [tone]="KIND[c.k].tone"
                              [title]="KIND[c.k].title" [time]="c.t || ''" />
                            <div class="sch-card-ph" *cdkDragPlaceholder></div>
                          </div>
                        }
                        @if (!day.length) {
                          <button class="sch-empty" type="button" (click)="openAdd(ei, di, $event)" aria-label="Th\xEAm ca"><tabler-icon [icon]="plus" [size]="16" /></button>
                        }
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
            </div>

            <button class="sch-add" type="button" (click)="addEmp()"><tabler-icon [icon]="plus" [size]="16" /> Th\xEAm nh\xE2n vi\xEAn</button>
          </div>
        </div>
      </hrm-app-shell>
    </ng-template>

    <!-- Shift-type picker (th\xEAm / \u0111\u1ED5i ca) -->
    @if (picker(); as p) {
      <div class="pk-backdrop" (click)="picker.set(null)"></div>
      <div class="pk" [style.left.px]="p.x" [style.top.px]="p.y">
        <div class="pk-h">{{ p.mode === 'add' ? 'Th\xEAm ca' : '\u0110\u1ED5i ca' }}</div>
        @for (pr of presets; track pr.k) {
          <button class="pk-item" type="button" (click)="pick(pr.k)">
            <i [class]="'pk-dot pkd-' + pr.k"></i>{{ pr.label }}
          </button>
        }
        @if (p.mode === 'edit') {
          <div class="pk-sep"></div>
          <button class="pk-item pk-del" type="button" (click)="clearCell()"><tabler-icon [icon]="trash" [size]="14" /> Xo\xE1 ca</button>
        }
      </div>
    }
  `, styles: ["/* angular:styles/component:css;bfcf6e594b09a8d6f4495aa115efbe1e4c591141d9047c904d43a855347f71b0;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/shift-schedule-page.ts */\n.lp-desktop {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full {\n  margin-top: 14px;\n}\n.lp-full-link {\n  text-decoration: none;\n}\n.lp-desktop ::ng-deep .shell-content {\n  padding: 0;\n}\n.ssh-scroll {\n  height: 100%;\n  overflow-y: auto;\n  background: var(--bg-canvas, var(--bg-surface-subtle));\n}\n.sch-page {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: var(--space-5, 20px) var(--space-6, 24px) var(--space-10, 40px);\n}\n.sch-head {\n  margin-bottom: var(--space-3, 12px);\n}\n.sch-eyebrow {\n  margin: 0 0 2px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-soft);\n}\n.sch-h1 {\n  margin: 0;\n  font-size: var(--fs-22, 22px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  letter-spacing: -.01em;\n}\n.sch-panel {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n}\n.sch-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-3, 12px);\n  padding: var(--space-2-5, 10px) var(--space-3-5, 14px);\n  border-bottom: 1px solid var(--border-sub);\n  flex-wrap: wrap;\n}\n.tb-left,\n.tb-right {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.tb-ico {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.tb-ico:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.tb-ico--danger:hover {\n  color: var(--error-base);\n  border-color: var(--error-base);\n}\n.sch-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.sch-today {\n  padding: 6px 12px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  cursor: pointer;\n}\n.sch-today:hover {\n  background: var(--bg-surface-subtle);\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.sch-period {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  margin-left: 4px;\n  white-space: nowrap;\n}\n.sch-wrap {\n  overflow-x: auto;\n}\n.sch-grid {\n  width: max-content;\n  min-width: 100%;\n  --cols: 220px repeat(7, minmax(158px, 1fr));\n}\n.band {\n  display: grid;\n  grid-template-columns: var(--cols);\n}\n.band > :first-child {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n  border-right: 1px solid var(--border-sub);\n}\n.band > :nth-child(2) {\n  border-left: 0;\n}\n.cov-head {\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  align-items: center;\n}\n.cov-head > :first-child {\n  background: var(--bg-surface-subtle);\n}\n.cov-eyebrow {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--text-soft);\n  text-transform: uppercase;\n}\n.cov-stats {\n  grid-column: 2 / -1;\n  justify-self: end;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4, 16px);\n  padding: var(--space-2, 8px) var(--space-3-5, 14px);\n  flex-wrap: wrap;\n}\n.cov-stat {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n}\n.dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  flex: none;\n}\n.dot--early {\n  background: var(--data-7);\n}\n.dot--late {\n  background: var(--data-1);\n}\n.cov-cells {\n  border-bottom: 1px solid var(--border-sub);\n}\n.cov-views {\n  padding: var(--space-3, 12px);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: flex-start;\n}\n.cov-day {\n  padding: var(--space-2, 8px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  border-left: 1px solid var(--border-sub);\n}\n.cov-drag {\n  cursor: grab;\n  border-radius: var(--radius-md);\n}\n.cov-drag:active {\n  cursor: grabbing;\n}\n.cov-drag.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n}\n.cov-drag.cdk-drag-placeholder {\n  opacity: .4;\n}\n.cov-foot {\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n}\n.cov-foot > :first-child {\n  background: var(--bg-surface-subtle);\n}\n.cov-fday {\n  padding: var(--space-2, 7px) var(--space-2-5, 10px);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border-left: 1px solid var(--border-sub);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.cov-fday .heads {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.day-head {\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.day-head > :first-child {\n  background: var(--bg-surface);\n}\n.day-lead {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .05em;\n  color: var(--text-soft);\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n}\n.sch-dh {\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n  border-left: 1px solid var(--border-sub);\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n}\n.sch-dow {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.sch-date {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.emp-row {\n  border-bottom: 1px solid var(--border-sub);\n}\n.emp-row:last-child {\n  border-bottom: 0;\n}\n.emp-info {\n  padding: var(--space-2-5, 10px) var(--space-3, 12px);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n}\n.emp-row:hover .emp-info {\n  background: var(--bg-surface-subtle);\n}\n.emp-meta {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.emp-name {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.emp-hrs {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.emp-x {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  color: var(--text-soft);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity .12s;\n}\n.emp-row:hover .emp-x {\n  opacity: 1;\n}\n.emp-x:hover {\n  color: var(--error-base);\n  background: color-mix(in srgb, var(--error-base) 12%, transparent);\n}\n.sch-cell {\n  padding: var(--space-2, 8px);\n  border-left: 1px solid var(--border-sub);\n  min-height: 66px;\n  display: flex;\n}\n.sch-card {\n  flex: 1;\n  display: flex;\n  cursor: grab;\n  border-radius: var(--radius-md);\n}\n.sch-card:active {\n  cursor: grabbing;\n}\n.sch-card hrm-shift-cell {\n  flex: 1;\n}\n.sch-empty {\n  flex: 1;\n  border: 1px dashed transparent;\n  border-radius: var(--radius-md);\n  background: transparent;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity .12s;\n}\n.sch-cell:hover .sch-empty {\n  opacity: 1;\n  border-color: var(--border-sub);\n}\n.sch-empty:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.sch-card.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n}\n.sch-card.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drop-list-dragging .sch-card:not(.cdk-drag-placeholder) {\n  transition: transform var(--duration-normal, .18s) var(--ease-out, ease);\n}\n.sch-cell.cdk-drop-list-receiving,\n.sch-cell.cdk-drop-list-dragging {\n  background: var(--primary-bg-subtle);\n}\n.cdk-drag-animating {\n  transition: transform var(--duration-normal, .2s) var(--ease-out, ease);\n}\n.sch-add {\n  margin-top: var(--space-3, 12px);\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px dashed var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  color: var(--text-sub);\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.sch-add:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.dy-nav {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.dy-nav:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.pk-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n}\n.pk {\n  position: fixed;\n  z-index: 41;\n  min-width: 214px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-lg);\n  padding: 6px;\n}\n.pk-h {\n  padding: 6px 8px 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.pk-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  width: 100%;\n  padding: 7px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-strong);\n  text-align: left;\n}\n.pk-item:hover {\n  background: var(--bg-surface-subtle);\n}\n.pk-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex: none;\n}\n.pk-sep {\n  height: 1px;\n  background: var(--border-sub);\n  margin: 4px 6px;\n}\n.pk-del {\n  color: var(--error-base);\n  gap: 7px;\n}\n.pk-del:hover {\n  background: color-mix(in srgb, var(--error-base) 10%, transparent);\n}\n.pkd-opening {\n  background: var(--data-7);\n}\n.pkd-afternoon {\n  background: var(--data-1);\n}\n.pkd-night {\n  background: var(--data-3);\n}\n.pkd-admin {\n  background: var(--data-4);\n}\n.pkd-rest {\n  background: var(--data-5);\n}\n.pkd-holiday {\n  background: var(--data-8);\n}\n.pkd-absence {\n  background: var(--warning-base);\n}\n/*# sourceMappingURL=shift-schedule-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateShiftSchedule, { className: "SgTemplateShiftSchedule", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/shift-schedule-page.ts", lineNumber: 323 });
})();
export {
  SgTemplateShiftSchedule
};
//# sourceMappingURL=chunk-US2QFOEG.js.map
