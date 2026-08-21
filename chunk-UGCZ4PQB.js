import {
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  Component,
  Input,
  input,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/table-cells/hrm-text-cell.ts
function HrmTextCell_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275element(1, "tabler-icon", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon())("size", 18);
  }
}
function HrmTextCell_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.secondary());
  }
}
var HrmTextCell = class _HrmTextCell {
  constructor() {
    this.primary = input("", ...ngDevMode ? [{ debugName: "primary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.secondary = input("", ...ngDevMode ? [{ debugName: "secondary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(null, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.align = input("left", ...ngDevMode ? [{ debugName: "align" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTextCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTextCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTextCell, selectors: [["hrm-text-cell"]], hostAttrs: [1, "hrm-text-cell"], hostVars: 1, hostBindings: function HrmTextCell_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-align", ctx.align());
      }
    }, inputs: { primary: [1, "primary"], secondary: [1, "secondary"], icon: [1, "icon"], align: [1, "align"] }, decls: 5, vars: 3, consts: [[1, "tc-ic"], [1, "tc-body"], [1, "tc-primary"], [1, "tc-secondary"], [3, "icon", "size"]], template: function HrmTextCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmTextCell_Conditional_0_Template, 2, 2, "span", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, HrmTextCell_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.icon() ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.primary());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.secondary() ? 4 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ['\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  max-width: 100%;\n}\n[data-align="right"][_nghost-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n.tc-ic[_ngcontent-%COMP%] {\n  display: inline-flex;\n  color: var(--icon-secondary);\n  flex: none;\n}\n.tc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tc-primary[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tc-secondary[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-text-cell.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTextCell, [{
    type: Component,
    args: [{ selector: "hrm-text-cell", imports: [TablerIconComponent], template: `
    @if (icon()) {
      <span class="tc-ic"><tabler-icon [icon]="$any(icon())" [size]="18" /></span>
    }
    <span class="tc-body">
      <span class="tc-primary">{{ primary() }}</span>
      @if (secondary()) { <span class="tc-secondary">{{ secondary() }}</span> }
    </span>
  `, host: { class: "hrm-text-cell", "[attr.data-align]": "align()" }, styles: ['/* angular:styles/component:css;2dbcf3367e9adcccd41dd9641cd5b0d26711dc0c85efbb7d3e8f84ec5e63bfc6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-text-cell.ts */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  max-width: 100%;\n}\n:host([data-align="right"]) {\n  justify-content: flex-end;\n  text-align: right;\n}\n.tc-ic {\n  display: inline-flex;\n  color: var(--icon-secondary);\n  flex: none;\n}\n.tc-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tc-primary {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tc-secondary {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-text-cell.css.map */\n'] }]
  }], null, { primary: [{ type: Input, args: [{ isSignal: true, alias: "primary", required: false }] }], secondary: [{ type: Input, args: [{ isSignal: true, alias: "secondary", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTextCell, { className: "HrmTextCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-text-cell.ts", lineNumber: 31 });
})();

export {
  HrmTextCell
};
//# sourceMappingURL=chunk-UGCZ4PQB.js.map
