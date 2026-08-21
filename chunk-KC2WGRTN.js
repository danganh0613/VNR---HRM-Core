import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
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
  Check,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  Output,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/navigation/hrm-stepper.ts
var _forTrack0 = ($index, $item) => $item.key;
function HrmStepper_For_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("icon", ctx_r2.check)("size", 14);
  }
}
function HrmStepper_For_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_1_r2 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_1_r2 + 1);
  }
}
function HrmStepper_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmStepper_For_1_Conditional_2_Conditional_0_Template, 1, 2, "tabler-icon", 4)(1, HrmStepper_For_1_Conditional_2_Conditional_1_Template, 2, 1, "span", 5);
  }
  if (rf & 2) {
    const \u0275$index_1_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.stateOf(\u0275$index_1_r2) === "done" ? 0 : 1);
  }
}
function HrmStepper_For_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.desc);
  }
}
function HrmStepper_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmStepper_For_1_Conditional_3_Conditional_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4.desc && ctx_r2.variant() === "vertical" ? 3 : -1);
  }
}
function HrmStepper_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
  if (rf & 2) {
    const \u0275$index_1_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-done", \u0275$index_1_r2 < ctx_r2.activeIndex());
  }
}
function HrmStepper_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function HrmStepper_For_1_Template_button_click_0_listener() {
      const \u0275$index_1_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.go(\u0275$index_1_r2));
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275conditionalCreate(2, HrmStepper_For_1_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmStepper_For_1_Conditional_3_Template, 4, 2, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmStepper_For_1_Conditional_4_Template, 1, 1, "span", 3);
  }
  if (rf & 2) {
    const \u0275$index_1_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canClick(\u0275$index_1_r2));
    \u0275\u0275attribute("data-state", ctx_r2.stateOf(\u0275$index_1_r2))("aria-current", \u0275$index_1_r2 === ctx_r2.activeIndex() ? "step" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.variant() !== "dot" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.variant() !== "dot" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_1_r2 < ctx_r2.steps().length - 1 ? 4 : -1);
  }
}
var HrmStepper = class _HrmStepper {
  constructor() {
    this.check = Check;
    this.steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeIndex = model(0, ...ngDevMode ? [{ debugName: "activeIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("horizontal", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clickableBack = input(true, ...ngDevMode ? [{ debugName: "clickableBack" }] : (
      /* istanbul ignore next */
      []
    ));
    this.stepClick = output();
  }
  stateOf(i) {
    const a = this.activeIndex();
    return i < a ? "done" : i === a ? "current" : "upcoming";
  }
  canClick(i) {
    return this.clickableBack() && i < this.activeIndex();
  }
  go(i) {
    if (!this.canClick(i))
      return;
    this.activeIndex.set(i);
    this.stepClick.emit(this.steps()[i]);
  }
  static {
    this.\u0275fac = function HrmStepper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmStepper)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmStepper, selectors: [["hrm-stepper"]], hostAttrs: [1, "hrm-stepper"], hostVars: 1, hostBindings: function HrmStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-variant", ctx.variant());
      }
    }, inputs: { steps: [1, "steps"], activeIndex: [1, "activeIndex"], variant: [1, "variant"], clickableBack: [1, "clickableBack"] }, outputs: { activeIndex: "activeIndexChange", stepClick: "stepClick" }, decls: 2, vars: 0, consts: [["type", "button", 1, "st-step", 3, "click", "disabled"], [1, "st-marker"], [1, "st-body"], [1, "st-line"], [3, "icon", "size"], [1, "st-num"], [1, "st-label"], [1, "st-desc"]], template: function HrmStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmStepper_For_1_Template, 5, 6, null, null, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.steps());
      }
    }, dependencies: [TablerIconComponent], styles: ['\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n[data-variant="vertical"][_nghost-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n}\n.st-step[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 0;\n  background: transparent;\n  padding: 2px;\n  cursor: default;\n  text-align: left;\n  font-family: var(--font-sans);\n  min-width: 0;\n}\n.st-step[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\n.st-marker[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-full);\n  display: grid;\n  place-items: center;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  border: 1.5px solid var(--border-input);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.st-step[data-state=done][_ngcontent-%COMP%]   .st-marker[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.st-step[data-state=current][_ngcontent-%COMP%]   .st-marker[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  box-shadow: 0 0 0 4px var(--primary-bg-subtle);\n}\n.st-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.st-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  white-space: nowrap;\n}\n.st-step[data-state=current][_ngcontent-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n  font-weight: 600;\n}\n.st-step[data-state=done][_ngcontent-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--text-body);\n}\n.st-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.st-line[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 24px;\n  height: 1.5px;\n  background: var(--border-sub);\n  border-radius: 1px;\n}\n.st-line[data-done=true][_ngcontent-%COMP%] {\n  background: var(--primary-base);\n}\n[data-variant="vertical"][_nghost-%COMP%]   .st-line[_ngcontent-%COMP%] {\n  flex: none;\n  width: 1.5px;\n  min-width: 0;\n  height: 20px;\n  margin-left: 14px;\n}\n[data-variant="dot"][_nghost-%COMP%]   .st-marker[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-width: 0;\n  background: var(--border-sub);\n}\n[data-variant="dot"][_nghost-%COMP%]   .st-step[data-state=done][_ngcontent-%COMP%]   .st-marker[_ngcontent-%COMP%], \n[data-variant="dot"][_nghost-%COMP%]   .st-step[data-state=current][_ngcontent-%COMP%]   .st-marker[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n}\n[data-variant="dot"][_nghost-%COMP%]   .st-step[data-state=current][_ngcontent-%COMP%]   .st-marker[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px var(--primary-bg-subtle);\n}\n[data-variant="dot"][_nghost-%COMP%]   .st-line[_ngcontent-%COMP%] {\n  min-width: 16px;\n}\n/*# sourceMappingURL=hrm-stepper.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmStepper, [{
    type: Component,
    args: [{ selector: "hrm-stepper", imports: [TablerIconComponent], template: `
    @for (s of steps(); track s.key; let i = $index) {
      <button type="button" class="st-step" [attr.data-state]="stateOf(i)"
        [disabled]="!canClick(i)"
        [attr.aria-current]="i === activeIndex() ? 'step' : null"
        (click)="go(i)">
        <span class="st-marker">
          @if (variant() !== 'dot') {
            @if (stateOf(i) === 'done') { <tabler-icon [icon]="check" [size]="14" /> }
            @else { <span class="st-num">{{ i + 1 }}</span> }
          }
        </span>
        @if (variant() !== 'dot') {
          <span class="st-body">
            <span class="st-label">{{ s.label }}</span>
            @if (s.desc && variant() === 'vertical') { <span class="st-desc">{{ s.desc }}</span> }
          </span>
        }
      </button>
      @if (i < steps().length - 1) { <span class="st-line" [attr.data-done]="i < activeIndex()"></span> }
    }
  `, host: { class: "hrm-stepper", "[attr.data-variant]": "variant()" }, styles: ['/* angular:styles/component:css;ca9a38253fdea4899720b58577a9a1739685011e27275949fd60cabb9f7ee4a2;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/navigation/hrm-stepper.ts */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host([data-variant="vertical"]) {\n  flex-direction: column;\n  align-items: stretch;\n}\n.st-step {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 0;\n  background: transparent;\n  padding: 2px;\n  cursor: default;\n  text-align: left;\n  font-family: var(--font-sans);\n  min-width: 0;\n}\n.st-step:not(:disabled) {\n  cursor: pointer;\n}\n.st-marker {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: var(--radius-full);\n  display: grid;\n  place-items: center;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  border: 1.5px solid var(--border-input);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.st-step[data-state=done] .st-marker {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.st-step[data-state=current] .st-marker {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  box-shadow: 0 0 0 4px var(--primary-bg-subtle);\n}\n.st-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.st-label {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  white-space: nowrap;\n}\n.st-step[data-state=current] .st-label {\n  color: var(--text-strong);\n  font-weight: 600;\n}\n.st-step[data-state=done] .st-label {\n  color: var(--text-body);\n}\n.st-desc {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.st-line {\n  flex: 1;\n  min-width: 24px;\n  height: 1.5px;\n  background: var(--border-sub);\n  border-radius: 1px;\n}\n.st-line[data-done=true] {\n  background: var(--primary-base);\n}\n:host([data-variant="vertical"]) .st-line {\n  flex: none;\n  width: 1.5px;\n  min-width: 0;\n  height: 20px;\n  margin-left: 14px;\n}\n:host([data-variant="dot"]) .st-marker {\n  width: 10px;\n  height: 10px;\n  border-width: 0;\n  background: var(--border-sub);\n}\n:host([data-variant="dot"]) .st-step[data-state=done] .st-marker,\n:host([data-variant="dot"]) .st-step[data-state=current] .st-marker {\n  background: var(--primary-base);\n}\n:host([data-variant="dot"]) .st-step[data-state=current] .st-marker {\n  box-shadow: 0 0 0 4px var(--primary-bg-subtle);\n}\n:host([data-variant="dot"]) .st-line {\n  min-width: 16px;\n}\n/*# sourceMappingURL=hrm-stepper.css.map */\n'] }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], activeIndex: [{ type: Input, args: [{ isSignal: true, alias: "activeIndex", required: false }] }, { type: Output, args: ["activeIndexChange"] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], clickableBack: [{ type: Input, args: [{ isSignal: true, alias: "clickableBack", required: false }] }], stepClick: [{ type: Output, args: ["stepClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmStepper, { className: "HrmStepper", filePath: "libs/hrm-ui/src/lib/navigation/hrm-stepper.ts", lineNumber: 79 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/navigation/steps" });
var _c1 = (a0) => [a0];
var SgDocStepper = class _SgDocStepper {
  constructor() {
    this.t = inject(TranslateService);
    this.idx = signal(1, ...ngDevMode ? [{ debugName: "idx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.idxV = signal(1, ...ngDevMode ? [{ debugName: "idxV" }] : (
      /* istanbul ignore next */
      []
    ));
    this.idxD = signal(2, ...ngDevMode ? [{ debugName: "idxD" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.stepper.when1",
      "docs.stepper.when2",
      "docs.stepper.when3"
    ];
  }
  get steps() {
    return [
      { key: "type", label: this.t.instant("docs.stepper.stTypeLabel"), desc: this.t.instant("docs.stepper.stTypeDesc") },
      { key: "info", label: this.t.instant("docs.stepper.stInfoLabel"), desc: this.t.instant("docs.stepper.stInfoDesc") },
      { key: "confirm", label: this.t.instant("docs.stepper.stConfirmLabel"), desc: this.t.instant("docs.stepper.stConfirmDesc") }
    ];
  }
  get idxModel() {
    return this.idx();
  }
  set idxModel(v) {
    this.idx.set(v);
  }
  next() {
    this.idx.update((i) => Math.min(i + 1, this.steps.length - 1));
  }
  prev() {
    this.idx.update((i) => Math.max(i - 1, 0));
  }
  get idxVModel() {
    return this.idxV();
  }
  set idxVModel(v) {
    this.idxV.set(v);
  }
  get idxDModel() {
    return this.idxD();
  }
  set idxDModel(v) {
    this.idxD.set(v);
  }
  static {
    this.\u0275fac = function SgDocStepper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocStepper)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocStepper, selectors: [["sg-doc-stepper"]], decls: 47, vars: 67, consts: [["category", "Navigation", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "560px"], [3, "activeIndexChange", "steps", "activeIndex"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "560px", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "wz-body"], [3, "click", "disabled"], ["variant", "primary", 3, "click", "disabled"], ["variant", "vertical", 3, "activeIndexChange", "steps", "activeIndex"], ["variant", "dot", 3, "activeIndexChange", "steps", "activeIndex"]], template: function SgDocStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2)(6, "hrm-stepper", 3);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxModel, $event) || (ctx.idxModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "sg-use", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 7)(23, "sg-example", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "div", 9)(27, "hrm-stepper", 3);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxModel, $event) || (ctx.idxModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-row")(31, "hrm-button", 11);
        \u0275\u0275listener("click", function SgDocStepper_Template_hrm_button_click_31_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "hrm-button", 12);
        \u0275\u0275listener("click", function SgDocStepper_Template_hrm_button_click_34_listener() {
          return ctx.next();
        });
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "sg-example", 8);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "hrm-stepper", 13);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxVModel, $event) || (ctx.idxVModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-example", 8);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row")(46, "hrm-stepper", 14);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxDModel, $event) || (ctx.idxDModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 29, "docs.stepper.title"))("related", \u0275\u0275pureFunction1(65, _c1, \u0275\u0275pureFunction1(63, _c0, \u0275\u0275pipeBind1(2, 31, "docs.stepper.relSteps"))))("desc", \u0275\u0275pipeBind1(3, 33, "docs.stepper.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxModel);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 35, "docs.stepper.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 37, "docs.stepper.behavior"))("avoid", \u0275\u0275pipeBind1(11, 39, "docs.stepper.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 41, "docs.stepper.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 43, "docs.stepper.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 45, "docs.stepper.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 47, "docs.stepper.exWizardT"))("desc", \u0275\u0275pipeBind1(25, 49, "docs.stepper.exWizardD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxModel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.steps[ctx.idx()].desc);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.idx() === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 51, "docs.stepper.btnPrev"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.idx() === ctx.steps.length - 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 53, "docs.stepper.btnNext"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 55, "docs.stepper.exVertT"))("desc", \u0275\u0275pipeBind1(39, 57, "docs.stepper.exVertD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxVModel);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 59, "docs.stepper.exDotT"))("desc", \u0275\u0275pipeBind1(44, 61, "docs.stepper.exDotD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxDModel);
      }
    }, dependencies: [TranslateModule, HrmStepper, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.wz-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n/*# sourceMappingURL=stepper.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocStepper, [{
    type: Component,
    args: [{ selector: "sg-doc-stepper", imports: [TranslateModule, HrmStepper, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Navigation" [title]="'docs.stepper.title' | translate" [related]="[{label:('docs.stepper.relSteps' | translate), route:'hrm/navigation/steps'}]"
      [desc]="'docs.stepper.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:560px">
          <hrm-stepper [steps]="steps" [(activeIndex)]="idxModel" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.stepper.purpose' | translate"
          [when]="when"
          [behavior]="'docs.stepper.behavior' | translate"
          [avoid]="'docs.stepper.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.stepper.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.stepper.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.stepper.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.stepper.exWizardT' | translate"
          [desc]="'docs.stepper.exWizardD' | translate">
          <div style="width:100%;max-width:560px;display:flex;flex-direction:column;gap:16px">
            <hrm-stepper [steps]="steps" [(activeIndex)]="idxModel" />
            <div class="wz-body">{{ steps[idx()].desc }}</div>
            <sg-row>
              <hrm-button [disabled]="idx() === 0" (click)="prev()">{{ 'docs.stepper.btnPrev' | translate }}</hrm-button>
              <hrm-button variant="primary" [disabled]="idx() === steps.length - 1" (click)="next()">{{ 'docs.stepper.btnNext' | translate }}</hrm-button>
            </sg-row>
          </div>
        </sg-example>

        <sg-example [title]="'docs.stepper.exVertT' | translate"
          [desc]="'docs.stepper.exVertD' | translate">
          <sg-row>
            <hrm-stepper variant="vertical" [steps]="steps" [(activeIndex)]="idxVModel" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.stepper.exDotT' | translate"
          [desc]="'docs.stepper.exDotD' | translate">
          <sg-row>
            <hrm-stepper variant="dot" [steps]="steps" [(activeIndex)]="idxDModel" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;0844b4ce333be8d33832e8b8534c9d26a60b9d4a6e36ae55db5ad1cebac83b1e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts */\n.wz-body {\n  padding: 20px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n/*# sourceMappingURL=stepper.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocStepper, { className: "SgDocStepper", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts", lineNumber: 72 });
})();
export {
  SgDocStepper
};
//# sourceMappingURL=chunk-KC2WGRTN.js.map
