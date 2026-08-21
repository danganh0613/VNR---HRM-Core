import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-amount-cell.ts
var HrmAmountCell = class _HrmAmountCell {
  constructor() {
    this.value = input(0, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currency = input("", ...ngDevMode ? [{ debugName: "currency" }] : (
      /* istanbul ignore next */
      []
    ));
    this.signed = input(false, ...ngDevMode ? [{ debugName: "signed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.decimals = input(0, ...ngDevMode ? [{ debugName: "decimals" }] : (
      /* istanbul ignore next */
      []
    ));
    this.locale = input("vi-VN", ...ngDevMode ? [{ debugName: "locale" }] : (
      /* istanbul ignore next */
      []
    ));
    this.display = computed(() => {
      const v = this.value();
      const n = new Intl.NumberFormat(this.locale(), {
        minimumFractionDigits: this.decimals(),
        maximumFractionDigits: this.decimals()
      }).format(Math.abs(v));
      const sign = this.signed() ? v > 0 ? "+" : v < 0 ? "\u2212" : "" : v < 0 ? "\u2212" : "";
      const cur = this.currency() ? ` ${this.currency()}` : "";
      return `${sign}${n}${cur}`;
    }, ...ngDevMode ? [{ debugName: "display" }] : (
      /* istanbul ignore next */
      []
    ));
    this.signClass = computed(() => this.signed() ? this.value() > 0 ? "pos" : this.value() < 0 ? "neg" : null : null, ...ngDevMode ? [{ debugName: "signClass" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmAmountCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAmountCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAmountCell, selectors: [["hrm-amount-cell"]], hostAttrs: [1, "hrm-amount-cell"], hostVars: 1, hostBindings: function HrmAmountCell_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-sign", ctx.signClass());
      }
    }, inputs: { value: [1, "value"], currency: [1, "currency"], signed: [1, "signed"], decimals: [1, "decimals"], locale: [1, "locale"] }, decls: 2, vars: 1, consts: [[1, "am-val"]], template: function HrmAmountCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.display());
      }
    }, styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n}\n[data-sign="pos"][_nghost-%COMP%]   .am-val[_ngcontent-%COMP%] {\n  color: var(--success-base);\n}\n[data-sign="neg"][_nghost-%COMP%]   .am-val[_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-amount-cell.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAmountCell, [{
    type: Component,
    args: [{ selector: "hrm-amount-cell", template: `<span class="am-val">{{ display() }}</span>`, host: { class: "hrm-amount-cell", "[attr.data-sign]": "signClass()" }, styles: ['/* angular:styles/component:css;866e4c6f45dabae982902df008e467539bf64ff2ccf85655cd2a491d2b39c6dd;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-amount-cell.ts */\n:host {\n  display: block;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n}\n:host([data-sign="pos"]) .am-val {\n  color: var(--success-base);\n}\n:host([data-sign="neg"]) .am-val {\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-amount-cell.css.map */\n'] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], currency: [{ type: Input, args: [{ isSignal: true, alias: "currency", required: false }] }], signed: [{ type: Input, args: [{ isSignal: true, alias: "signed", required: false }] }], decimals: [{ type: Input, args: [{ isSignal: true, alias: "decimals", required: false }] }], locale: [{ type: Input, args: [{ isSignal: true, alias: "locale", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAmountCell, { className: "HrmAmountCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-amount-cell.ts", lineNumber: 16 });
})();

export {
  HrmAmountCell
};
//# sourceMappingURL=chunk-E7SUKZ7E.js.map
