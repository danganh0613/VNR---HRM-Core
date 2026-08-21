import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-progress-cell.ts
function HrmProgressCell_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
function HrmProgressCell_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.display());
  }
}
var HrmProgressCell = class _HrmProgressCell {
  constructor() {
    this.value = input(0, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(100, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.color = input("primary", ...ngDevMode ? [{ debugName: "color" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showValue = input(true, ...ngDevMode ? [{ debugName: "showValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.suffix = input("%", ...ngDevMode ? [{ debugName: "suffix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pct = computed(() => {
      const m = this.max() || 100;
      return Math.max(0, Math.min(100, this.value() / m * 100));
    }, ...ngDevMode ? [{ debugName: "pct" }] : (
      /* istanbul ignore next */
      []
    ));
    this.display = computed(() => `${Math.round(this.pct())}${this.suffix()}`, ...ngDevMode ? [{ debugName: "display" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmProgressCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmProgressCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmProgressCell, selectors: [["hrm-progress-cell"]], hostAttrs: [1, "hrm-progress-cell"], hostVars: 1, hostBindings: function HrmProgressCell_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-color", ctx.color());
      }
    }, inputs: { value: [1, "value"], max: [1, "max"], color: [1, "color"], showValue: [1, "showValue"], label: [1, "label"], suffix: [1, "suffix"] }, decls: 4, vars: 4, consts: [[1, "pc-label"], [1, "pc-track"], [1, "pc-fill"], [1, "pc-val"]], template: function HrmProgressCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmProgressCell_Conditional_0_Template, 2, 1, "span", 0);
        \u0275\u0275domElementStart(1, "span", 1);
        \u0275\u0275domElement(2, "span", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, HrmProgressCell_Conditional_3_Template, 2, 1, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.label() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.pct(), "%");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showValue() ? 3 : -1);
      }
    }, styles: ['\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 120px;\n  width: 100%;\n  --_c: var(--primary-base);\n}\n[data-color="blue"][_nghost-%COMP%] {\n  --_c: var(--blue-600);\n}\n[data-color="green"][_nghost-%COMP%] {\n  --_c: var(--success-base);\n}\n[data-color="amber"][_nghost-%COMP%] {\n  --_c: var(--warning-base);\n}\n[data-color="red"][_nghost-%COMP%] {\n  --_c: var(--error-base);\n}\n.pc-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  flex: none;\n}\n.pc-track[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--track);\n  overflow: hidden;\n}\n.pc-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  height: 100%;\n  border-radius: var(--radius-full);\n  background: var(--_c);\n  transition: width var(--duration-slow) var(--ease-out);\n}\n.pc-val[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 34px;\n  text-align: right;\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-progress-cell.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmProgressCell, [{
    type: Component,
    args: [{ selector: "hrm-progress-cell", template: `
    @if (label()) { <span class="pc-label">{{ label() }}</span> }
    <span class="pc-track"><span class="pc-fill" [style.width.%]="pct()"></span></span>
    @if (showValue()) { <span class="pc-val">{{ display() }}</span> }
  `, host: { class: "hrm-progress-cell", "[attr.data-color]": "color()" }, styles: ['/* angular:styles/component:css;ff0699ae533b9655821feacfadfe933c3a01c502775841b5482d116c66284ef9;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-progress-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 120px;\n  width: 100%;\n  --_c: var(--primary-base);\n}\n:host([data-color="blue"]) {\n  --_c: var(--blue-600);\n}\n:host([data-color="green"]) {\n  --_c: var(--success-base);\n}\n:host([data-color="amber"]) {\n  --_c: var(--warning-base);\n}\n:host([data-color="red"]) {\n  --_c: var(--error-base);\n}\n.pc-label {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  flex: none;\n}\n.pc-track {\n  position: relative;\n  flex: 1;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--track);\n  overflow: hidden;\n}\n.pc-fill {\n  position: absolute;\n  inset: 0 auto 0 0;\n  height: 100%;\n  border-radius: var(--radius-full);\n  background: var(--_c);\n  transition: width var(--duration-slow) var(--ease-out);\n}\n.pc-val {\n  flex: none;\n  min-width: 34px;\n  text-align: right;\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-progress-cell.css.map */\n'] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }], showValue: [{ type: Input, args: [{ isSignal: true, alias: "showValue", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], suffix: [{ type: Input, args: [{ isSignal: true, alias: "suffix", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmProgressCell, { className: "HrmProgressCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-progress-cell.ts", lineNumber: 29 });
})();

export {
  HrmProgressCell
};
//# sourceMappingURL=chunk-YN6HMLUF.js.map
