import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-KX7AUY7O.js";
import {
  NzWaveDirective
} from "./chunk-LMW5SXOA.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/general/hrm-button.ts
var _c0 = ["*"];
var HrmButton = class _HrmButton {
  constructor() {
    this.variant = input("default", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("default", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
    this.danger = input(false, ...ngDevMode ? [{ debugName: "danger" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.block = input(false, ...ngDevMode ? [{ debugName: "block" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.iconOnly = input(false, ...ngDevMode ? [{ debugName: "iconOnly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ariaLabel = input("", ...ngDevMode ? [{ debugName: "ariaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.htmlType = input("button", ...ngDevMode ? [{ debugName: "htmlType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nzSize = computed(() => this.size() === "sm" ? "small" : this.size() === "lg" ? "large" : "default", ...ngDevMode ? [{ debugName: "nzSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nzShape = computed(() => this.shape() === "default" ? null : this.shape(), ...ngDevMode ? [{ debugName: "nzShape" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmButton, selectors: [["hrm-button"]], hostAttrs: [1, "hrm-button"], inputs: { variant: [1, "variant"], size: [1, "size"], shape: [1, "shape"], danger: [1, "danger"], loading: [1, "loading"], block: [1, "block"], disabled: [1, "disabled"], iconOnly: [1, "iconOnly"], ariaLabel: [1, "ariaLabel"], htmlType: [1, "htmlType"] }, ngContentSelectors: _c0, decls: 2, vars: 11, consts: [["nz-button", "", 3, "nzType", "nzSize", "nzDanger", "nzLoading", "nzBlock", "nzShape", "disabled"]], template: function HrmButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("hrm-btn-icon-only", ctx.iconOnly());
        \u0275\u0275property("nzType", ctx.variant())("nzSize", ctx.nzSize())("nzDanger", ctx.danger())("nzLoading", ctx.loading())("nzBlock", ctx.block())("nzShape", ctx.nzShape())("disabled", ctx.disabled());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel() || null)("type", ctx.htmlType());
      }
    }, dependencies: [NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmButton, [{
    type: Component,
    args: [{
      selector: "hrm-button",
      imports: [NzButtonModule],
      template: `
    <button
      nz-button
      [nzType]="variant()"
      [nzSize]="nzSize()"
      [nzDanger]="danger()"
      [nzLoading]="loading()"
      [nzBlock]="block()"
      [nzShape]="nzShape()"
      [disabled]="disabled()"
      [class.hrm-btn-icon-only]="iconOnly()"
      [attr.aria-label]="ariaLabel() || null"
      [attr.type]="htmlType()">
      <ng-content />
    </button>
  `,
      host: { class: "hrm-button" }
    }]
  }], null, { variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }], danger: [{ type: Input, args: [{ isSignal: true, alias: "danger", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], block: [{ type: Input, args: [{ isSignal: true, alias: "block", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], iconOnly: [{ type: Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], htmlType: [{ type: Input, args: [{ isSignal: true, alias: "htmlType", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmButton, { className: "HrmButton", filePath: "libs/hrm-ui/src/lib/general/hrm-button.ts", lineNumber: 33 });
})();

export {
  HrmButton
};
//# sourceMappingURL=chunk-Z7JSW4RV.js.map
