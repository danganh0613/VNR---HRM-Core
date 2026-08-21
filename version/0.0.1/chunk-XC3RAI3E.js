import {
  NzProgressComponent,
  NzProgressModule
} from "./chunk-ZTARLCQN.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/feedback/hrm-progress.ts
var HrmProgress = class _HrmProgress {
  constructor() {
    this.percent = input(0, ...ngDevMode ? [{ debugName: "percent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input("normal", ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.type = input("line", ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.steps = input(0, ...ngDevMode ? [{ debugName: "steps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showInfo = input(true, ...ngDevMode ? [{ debugName: "showInfo" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmProgress_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmProgress)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmProgress, selectors: [["hrm-progress"]], hostAttrs: [1, "hrm-progress"], inputs: { percent: [1, "percent"], status: [1, "status"], type: [1, "type"], size: [1, "size"], steps: [1, "steps"], showInfo: [1, "showInfo"] }, decls: 1, vars: 6, consts: [[3, "nzPercent", "nzStatus", "nzType", "nzSize", "nzSteps", "nzShowInfo"]], template: function HrmProgress_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzPercent", ctx.percent())("nzStatus", ctx.status())("nzType", ctx.type())("nzSize", ctx.size())("nzSteps", ctx.steps())("nzShowInfo", ctx.showInfo());
      }
    }, dependencies: [NzProgressModule, NzProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmProgress, [{
    type: Component,
    args: [{
      selector: "hrm-progress",
      imports: [NzProgressModule],
      template: `
    <nz-progress
      [nzPercent]="percent()"
      [nzStatus]="status()"
      [nzType]="type()"
      [nzSize]="size()"
      [nzSteps]="steps()"
      [nzShowInfo]="showInfo()"></nz-progress>
  `,
      host: { class: "hrm-progress" }
    }]
  }], null, { percent: [{ type: Input, args: [{ isSignal: true, alias: "percent", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], showInfo: [{ type: Input, args: [{ isSignal: true, alias: "showInfo", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmProgress, { className: "HrmProgress", filePath: "libs/hrm-ui/src/lib/feedback/hrm-progress.ts", lineNumber: 22 });
})();

export {
  HrmProgress
};
//# sourceMappingURL=chunk-XC3RAI3E.js.map
