import {
  NzSpinComponent,
  NzSpinModule
} from "./chunk-TUHU6AB5.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/feedback/hrm-spin.ts
var _c0 = ["*"];
var HrmSpin = class _HrmSpin {
  constructor() {
    this.spinning = input(true, ...ngDevMode ? [{ debugName: "spinning" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.simple = input(false, ...ngDevMode ? [{ debugName: "simple" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tip = input("", ...ngDevMode ? [{ debugName: "tip" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSpin)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSpin, selectors: [["hrm-spin"]], hostAttrs: [1, "hrm-spin"], inputs: { spinning: [1, "spinning"], size: [1, "size"], simple: [1, "simple"], tip: [1, "tip"] }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[3, "nzSpinning", "nzSize", "nzSimple", "nzTip"]], template: function HrmSpin_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-spin", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzSpinning", ctx.spinning())("nzSize", ctx.size())("nzSimple", ctx.simple())("nzTip", ctx.tip());
      }
    }, dependencies: [NzSpinModule, NzSpinComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSpin, [{
    type: Component,
    args: [{
      selector: "hrm-spin",
      imports: [NzSpinModule],
      template: `
    <nz-spin [nzSpinning]="spinning()" [nzSize]="size()" [nzSimple]="simple()" [nzTip]="tip()">
      <ng-content />
    </nz-spin>
  `,
      host: { class: "hrm-spin" }
    }]
  }], null, { spinning: [{ type: Input, args: [{ isSignal: true, alias: "spinning", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], simple: [{ type: Input, args: [{ isSignal: true, alias: "simple", required: false }] }], tip: [{ type: Input, args: [{ isSignal: true, alias: "tip", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSpin, { className: "HrmSpin", filePath: "libs/hrm-ui/src/lib/feedback/hrm-spin.ts", lineNumber: 15 });
})();

export {
  HrmSpin
};
//# sourceMappingURL=chunk-HP57NQ5P.js.map
