import {
  Check,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  Output,
  input,
  model,
  output,
  setClassMetadata,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

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

export {
  HrmStepper
};
//# sourceMappingURL=chunk-CYIL2WSS.js.map
