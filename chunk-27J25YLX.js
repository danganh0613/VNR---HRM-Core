import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-form-field.ts
var _c0 = ["*"];
function HrmFormField_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, "*");
    \u0275\u0275domElementEnd();
  }
}
function HrmFormField_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.optionalLabel());
  }
}
function HrmFormField_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "label", 0);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmFormField_Conditional_0_Conditional_2_Template, 2, 0, "span", 4)(3, HrmFormField_Conditional_0_Conditional_3_Template, 2, 1, "span", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.required() ? 2 : ctx_r0.optional() && ctx_r0.optionalLabel() ? 3 : -1);
  }
}
function HrmFormField_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HrmFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.help());
  }
}
var HrmFormField = class _HrmFormField {
  constructor() {
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.required = input(false, ...ngDevMode ? [{ debugName: "required" }] : (
      /* istanbul ignore next */
      []
    ));
    this.optional = input(false, ...ngDevMode ? [{ debugName: "optional" }] : (
      /* istanbul ignore next */
      []
    ));
    this.optionalLabel = input("", ...ngDevMode ? [{ debugName: "optionalLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = input("", ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
    this.help = input("", ...ngDevMode ? [{ debugName: "help" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmFormField)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmFormField, selectors: [["hrm-form-field"]], hostAttrs: [1, "hrm-form-field"], inputs: { label: [1, "label"], required: [1, "required"], optional: [1, "optional"], optionalLabel: [1, "optionalLabel"], error: [1, "error"], help: [1, "help"] }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "ff-label"], [1, "ff-control"], [1, "ff-error"], [1, "ff-help"], [1, "ff-req"], [1, "ff-opt"]], template: function HrmFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, HrmFormField_Conditional_0_Template, 4, 2, "label", 0);
        \u0275\u0275domElementStart(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, HrmFormField_Conditional_3_Template, 2, 1, "div", 2)(4, HrmFormField_Conditional_4_Template, 2, 1, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.label() ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error() ? 3 : ctx.help() ? 4 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: var(--space-4);\n}\n.ff-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--space-1-5);\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.ff-req[_ngcontent-%COMP%] {\n  color: var(--error-base);\n  margin-left: 2px;\n}\n.ff-opt[_ngcontent-%COMP%] {\n  margin-left: var(--space-1-5);\n  font-size: var(--fs-12);\n  font-weight: 400;\n  color: var(--text-sub);\n}\n.ff-error[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: var(--fs-12);\n  color: var(--error-base);\n}\n.ff-help[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-form-field.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmFormField, [{
    type: Component,
    args: [{ selector: "hrm-form-field", template: `
    @if (label()) {
      <label class="ff-label">
        {{ label() }}
        @if (required()) { <span class="ff-req">*</span> }
        @else if (optional() && optionalLabel()) { <span class="ff-opt">{{ optionalLabel() }}</span> }
      </label>
    }
    <div class="ff-control"><ng-content /></div>
    @if (error()) {
      <div class="ff-error">{{ error() }}</div>
    } @else if (help()) {
      <div class="ff-help">{{ help() }}</div>
    }
  `, host: { class: "hrm-form-field" }, styles: ["/* angular:styles/component:css;85bff07a4206ffd61c7a8d0fb75894deeb5fecfb6313f9371bfef97fa5ac2079;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-entry/hrm-form-field.ts */\n:host {\n  display: block;\n  margin-bottom: var(--space-4);\n}\n.ff-label {\n  display: block;\n  margin-bottom: var(--space-1-5);\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.ff-req {\n  color: var(--error-base);\n  margin-left: 2px;\n}\n.ff-opt {\n  margin-left: var(--space-1-5);\n  font-size: var(--fs-12);\n  font-weight: 400;\n  color: var(--text-sub);\n}\n.ff-error {\n  margin-top: var(--space-1);\n  font-size: var(--fs-12);\n  color: var(--error-base);\n}\n.ff-help {\n  margin-top: var(--space-1);\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-form-field.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], optional: [{ type: Input, args: [{ isSignal: true, alias: "optional", required: false }] }], optionalLabel: [{ type: Input, args: [{ isSignal: true, alias: "optionalLabel", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], help: [{ type: Input, args: [{ isSignal: true, alias: "help", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmFormField, { className: "HrmFormField", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-form-field.ts", lineNumber: 36 });
})();

export {
  HrmFormField
};
//# sourceMappingURL=chunk-27J25YLX.js.map
