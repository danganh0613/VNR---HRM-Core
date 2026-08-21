import {
  NzBadgeComponent,
  NzBadgeModule
} from "./chunk-HD5R6J3K.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-display/hrm-badge.ts
var _c0 = ["*"];
function HrmBadge_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-badge", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzStatus", ctx_r0.status())("nzText", ctx_r0.text());
  }
}
function HrmBadge_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-badge", 1);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzCount", ctx_r0.count())("nzShowZero", ctx_r0.showZero())("nzDot", ctx_r0.dot())("nzOverflowCount", ctx_r0.overflowCount());
  }
}
var HrmBadge = class _HrmBadge {
  constructor() {
    this.count = input(0, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showZero = input(false, ...ngDevMode ? [{ debugName: "showZero" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dot = input(false, ...ngDevMode ? [{ debugName: "dot" }] : (
      /* istanbul ignore next */
      []
    ));
    this.overflowCount = input(99, ...ngDevMode ? [{ debugName: "overflowCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input(null, ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.text = input("", ...ngDevMode ? [{ debugName: "text" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("default", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmBadge)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmBadge, selectors: [["hrm-badge"]], hostAttrs: [1, "hrm-badge"], hostVars: 1, hostBindings: function HrmBadge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-shape", ctx.shape());
      }
    }, inputs: { count: [1, "count"], showZero: [1, "showZero"], dot: [1, "dot"], overflowCount: [1, "overflowCount"], status: [1, "status"], text: [1, "text"], shape: [1, "shape"] }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "nzStatus", "nzText"], [3, "nzCount", "nzShowZero", "nzDot", "nzOverflowCount"]], template: function HrmBadge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, HrmBadge_Conditional_0_Template, 1, 2, "nz-badge", 0)(1, HrmBadge_Conditional_1_Template, 2, 4, "nz-badge", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.status() ? 0 : 1);
      }
    }, dependencies: [NzBadgeModule, NzBadgeComponent], styles: ['\n[data-shape="square"][_nghost-%COMP%]     .ant-badge-count {\n  border-radius: var(--radius-sm);\n}\n/*# sourceMappingURL=hrm-badge.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmBadge, [{
    type: Component,
    args: [{ selector: "hrm-badge", imports: [NzBadgeModule], template: `
    @if (status()) {
      <nz-badge [nzStatus]="status()!" [nzText]="text()"></nz-badge>
    } @else {
      <nz-badge [nzCount]="count()" [nzShowZero]="showZero()" [nzDot]="dot()" [nzOverflowCount]="overflowCount()">
        <ng-content />
      </nz-badge>
    }
  `, host: { class: "hrm-badge", "[attr.data-shape]": "shape()" }, styles: ['/* angular:styles/component:css;3c4765eb6b72c43cc611b5f2a59fa6fd36a0dadd4a9ae1c5fff774d45b90d7cd;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-badge.ts */\n:host([data-shape="square"]) ::ng-deep .ant-badge-count {\n  border-radius: var(--radius-sm);\n}\n/*# sourceMappingURL=hrm-badge.css.map */\n'] }]
  }], null, { count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], showZero: [{ type: Input, args: [{ isSignal: true, alias: "showZero", required: false }] }], dot: [{ type: Input, args: [{ isSignal: true, alias: "dot", required: false }] }], overflowCount: [{ type: Input, args: [{ isSignal: true, alias: "overflowCount", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmBadge, { className: "HrmBadge", filePath: "libs/hrm-ui/src/lib/data-display/hrm-badge.ts", lineNumber: 25 });
})();

export {
  HrmBadge
};
//# sourceMappingURL=chunk-MEB7WEQC.js.map
