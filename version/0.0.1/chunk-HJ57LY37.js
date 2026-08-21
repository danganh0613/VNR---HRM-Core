import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts
var _c0 = [[["", "tbTitle", ""]], "*", [["", "tbActions", ""]]];
var _c1 = ["[tbTitle]", "*", "[tbActions]"];
function HrmTableToolbar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function HrmTableToolbar_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.countLabel());
  }
}
function HrmTableToolbar_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmTableToolbar_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.count());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.countLabel() ? 2 : -1);
  }
}
var HrmTableToolbar = class _HrmTableToolbar {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.count = input(null, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countLabel = input("", ...ngDevMode ? [{ debugName: "countLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divided = input(false, ...ngDevMode ? [{ debugName: "divided" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTableToolbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTableToolbar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTableToolbar, selectors: [["hrm-table-toolbar"]], hostAttrs: [1, "hrm-table-toolbar"], hostVars: 2, hostBindings: function HrmTableToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-table-toolbar--divided", ctx.divided());
      }
    }, inputs: { title: [1, "title"], count: [1, "count"], countLabel: [1, "countLabel"], divided: [1, "divided"] }, ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "tb-left"], [1, "tb-title"], [1, "tb-count"], [1, "tb-mid"], [1, "tb-right"]], template: function HrmTableToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275conditionalCreate(2, HrmTableToolbar_Conditional_2_Template, 2, 1, "span", 1);
        \u0275\u0275conditionalCreate(3, HrmTableToolbar_Conditional_3_Template, 3, 2, "span", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "div", 3);
        \u0275\u0275projection(5, 1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 4);
        \u0275\u0275projection(7, 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.title() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.count() !== null ? 3 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  min-width: 0;\n}\n.hrm-table-toolbar--divided[_nghost-%COMP%] {\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.tb-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-width: 0;\n}\n.tb-left[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.tb-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.tb-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.tb-mid[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.tb-right[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=hrm-table-toolbar.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTableToolbar, [{
    type: Component,
    args: [{ selector: "hrm-table-toolbar", template: `
    <div class="tb-left">
      <ng-content select="[tbTitle]" />
      @if (title()) { <span class="tb-title">{{ title() }}</span> }
      @if (count() !== null) {
        <span class="tb-count">{{ count() }}@if (countLabel()) {&ngsp;{{ countLabel() }}}</span>
      }
    </div>
    <div class="tb-mid"><ng-content /></div>
    <div class="tb-right"><ng-content select="[tbActions]" /></div>
  `, host: { class: "hrm-table-toolbar", "[class.hrm-table-toolbar--divided]": "divided()" }, styles: ["/* angular:styles/component:css;4941615aad3a944c186717cbedc2b25b40a644f9f6ecdeb5057ad4b0bf02bb4b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  min-width: 0;\n}\n:host(.hrm-table-toolbar--divided) {\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.tb-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-width: 0;\n}\n.tb-left:empty {\n  display: none;\n}\n.tb-title {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.tb-count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.tb-mid {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.tb-right {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=hrm-table-toolbar.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], countLabel: [{ type: Input, args: [{ isSignal: true, alias: "countLabel", required: false }] }], divided: [{ type: Input, args: [{ isSignal: true, alias: "divided", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTableToolbar, { className: "HrmTableToolbar", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts", lineNumber: 38 });
})();

export {
  HrmTableToolbar
};
//# sourceMappingURL=chunk-HJ57LY37.js.map
