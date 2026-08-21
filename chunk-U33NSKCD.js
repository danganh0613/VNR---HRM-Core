import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/layout/hrm-flex.ts
var _c0 = ["*"];
var GAP = {
  xs: "var(--space-1)",
  sm: "var(--space-2)",
  md: "var(--space-4)",
  lg: "var(--space-6)",
  xl: "var(--space-8)"
};
var HrmFlex = class _HrmFlex {
  constructor() {
    this.direction = input("row", ...ngDevMode ? [{ debugName: "direction" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gap = input("md", ...ngDevMode ? [{ debugName: "gap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.justify = input("start", ...ngDevMode ? [{ debugName: "justify" }] : (
      /* istanbul ignore next */
      []
    ));
    this.align = input("center", ...ngDevMode ? [{ debugName: "align" }] : (
      /* istanbul ignore next */
      []
    ));
    this.wrap = input(false, ...ngDevMode ? [{ debugName: "wrap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gapValue = computed(() => GAP[this.gap()], ...ngDevMode ? [{ debugName: "gapValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.justifyValue = computed(() => {
      const j = this.justify();
      return j === "between" ? "space-between" : j === "around" ? "space-around" : `flex-${j === "start" ? "start" : j === "end" ? "end" : "center"}`.replace("flex-center", "center");
    }, ...ngDevMode ? [{ debugName: "justifyValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignValue = computed(() => {
      const a = this.align();
      return a === "stretch" ? "stretch" : `flex-${a}`.replace("flex-center", "center");
    }, ...ngDevMode ? [{ debugName: "alignValue" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmFlex_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmFlex)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmFlex, selectors: [["hrm-flex"]], hostAttrs: [1, "hrm-flex"], hostVars: 12, hostBindings: function HrmFlex_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("display", "flex")("flex-direction", ctx.direction())("gap", ctx.gapValue())("justify-content", ctx.justifyValue())("align-items", ctx.alignValue())("flex-wrap", ctx.wrap() ? "wrap" : "nowrap");
      }
    }, inputs: { direction: [1, "direction"], gap: [1, "gap"], justify: [1, "justify"], align: [1, "align"], wrap: [1, "wrap"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HrmFlex_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmFlex, [{
    type: Component,
    args: [{
      selector: "hrm-flex",
      template: `<ng-content />`,
      host: {
        class: "hrm-flex",
        "[style.display]": '"flex"',
        "[style.flexDirection]": "direction()",
        "[style.gap]": "gapValue()",
        "[style.justifyContent]": "justifyValue()",
        "[style.alignItems]": "alignValue()",
        "[style.flexWrap]": 'wrap() ? "wrap" : "nowrap"'
      }
    }]
  }], null, { direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: false }] }], gap: [{ type: Input, args: [{ isSignal: true, alias: "gap", required: false }] }], justify: [{ type: Input, args: [{ isSignal: true, alias: "justify", required: false }] }], align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false }] }], wrap: [{ type: Input, args: [{ isSignal: true, alias: "wrap", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmFlex, { className: "HrmFlex", filePath: "libs/hrm-ui/src/lib/layout/hrm-flex.ts", lineNumber: 24 });
})();
var HrmSpace = class _HrmSpace {
  constructor() {
    this.direction = input("row", ...ngDevMode ? [{ debugName: "direction" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gap = input("sm", ...ngDevMode ? [{ debugName: "gap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gapValue = computed(() => GAP[this.gap()], ...ngDevMode ? [{ debugName: "gapValue" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmSpace_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSpace)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSpace, selectors: [["hrm-space"]], hostAttrs: [1, "hrm-space"], hostVars: 10, hostBindings: function HrmSpace_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("display", "inline-flex")("flex-direction", ctx.direction())("gap", ctx.gapValue())("align-items", "center")("flex-wrap", "wrap");
      }
    }, inputs: { direction: [1, "direction"], gap: [1, "gap"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HrmSpace_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSpace, [{
    type: Component,
    args: [{
      selector: "hrm-space",
      template: `<ng-content />`,
      host: {
        class: "hrm-space",
        "[style.display]": '"inline-flex"',
        "[style.flexDirection]": "direction()",
        "[style.gap]": "gapValue()",
        "[style.alignItems]": '"center"',
        "[style.flexWrap]": '"wrap"'
      }
    }]
  }], null, { direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: false }] }], gap: [{ type: Input, args: [{ isSignal: true, alias: "gap", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSpace, { className: "HrmSpace", filePath: "libs/hrm-ui/src/lib/layout/hrm-flex.ts", lineNumber: 55 });
})();

export {
  HrmFlex,
  HrmSpace
};
//# sourceMappingURL=chunk-U33NSKCD.js.map
