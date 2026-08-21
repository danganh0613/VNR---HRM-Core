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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/table-cells/hrm-media-cell.ts
function HrmMediaCell_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.src(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.label());
  }
}
function HrmMediaCell_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.icon())("size", 18);
  }
}
function HrmMediaCell_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sub());
  }
}
var HrmMediaCell = class _HrmMediaCell {
  constructor() {
    this.src = input("", ...ngDevMode ? [{ debugName: "src" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(null, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sub = input("", ...ngDevMode ? [{ debugName: "sub" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("square", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmMediaCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmMediaCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmMediaCell, selectors: [["hrm-media-cell"]], hostAttrs: [1, "hrm-media-cell"], inputs: { src: [1, "src"], icon: [1, "icon"], label: [1, "label"], sub: [1, "sub"], shape: [1, "shape"] }, decls: 7, vars: 4, consts: [[1, "mc-media"], [3, "src", "alt"], [3, "icon", "size"], [1, "mc-body"], [1, "mc-label"], [1, "mc-sub"]], template: function HrmMediaCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275conditionalCreate(1, HrmMediaCell_Conditional_1_Template, 1, 2, "img", 1)(2, HrmMediaCell_Conditional_2_Template, 1, 2, "tabler-icon", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 3)(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, HrmMediaCell_Conditional_6_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-shape", ctx.shape());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.src() ? 1 : ctx.icon() ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sub() ? 6 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.mc-media[_ngcontent-%COMP%] {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  background: var(--bg-surface-subtle);\n  color: var(--icon-secondary);\n  overflow: hidden;\n}\n.mc-media[data-shape=square][_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n}\n.mc-media[data-shape=circle][_ngcontent-%COMP%] {\n  border-radius: var(--radius-full);\n}\n.mc-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.mc-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mc-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-media-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmMediaCell, [{
    type: Component,
    args: [{ selector: "hrm-media-cell", imports: [TablerIconComponent], template: `
    <span class="mc-media" [attr.data-shape]="shape()">
      @if (src()) {
        <img [src]="src()" [alt]="label()" />
      } @else if (icon()) {
        <tabler-icon [icon]="$any(icon())" [size]="18" />
      }
    </span>
    <span class="mc-body">
      <span class="mc-label">{{ label() }}</span>
      @if (sub()) { <span class="mc-sub">{{ sub() }}</span> }
    </span>
  `, host: { class: "hrm-media-cell" }, styles: ["/* angular:styles/component:css;5e4f53bec09fe658c6d3bc009f411ed2d0a813042cc80bc3b4f85cb974a33653;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-media-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.mc-media {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  background: var(--bg-surface-subtle);\n  color: var(--icon-secondary);\n  overflow: hidden;\n}\n.mc-media[data-shape=square] {\n  border-radius: var(--radius-md);\n}\n.mc-media[data-shape=circle] {\n  border-radius: var(--radius-full);\n}\n.mc-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mc-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.mc-label {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mc-sub {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-media-cell.css.map */\n"] }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], sub: [{ type: Input, args: [{ isSignal: true, alias: "sub", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmMediaCell, { className: "HrmMediaCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-media-cell.ts", lineNumber: 37 });
})();

export {
  HrmMediaCell
};
//# sourceMappingURL=chunk-6AVRHYY2.js.map
