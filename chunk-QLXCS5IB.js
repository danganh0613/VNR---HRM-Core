import {
  HrmAvatar
} from "./chunk-KS5WOU2W.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// libs/hrm-ui/src/lib/table-cells/hrm-user-cell.ts
function HrmUserCell_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sub());
  }
}
var HrmUserCell = class _HrmUserCell {
  constructor() {
    this.src = input("", ...ngDevMode ? [{ debugName: "src" }] : (
      /* istanbul ignore next */
      []
    ));
    this.name = input("", ...ngDevMode ? [{ debugName: "name" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sub = input("", ...ngDevMode ? [{ debugName: "sub" }] : (
      /* istanbul ignore next */
      []
    ));
    this.initials = input("", ...ngDevMode ? [{ debugName: "initials" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input(null, ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colorful = input(true, ...ngDevMode ? [{ debugName: "colorful" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("circle", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avatarSize = input("default", ...ngDevMode ? [{ debugName: "avatarSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.displayInitials = computed(() => {
      if (this.initials())
        return this.initials();
      const n = this.name().trim();
      if (!n)
        return "";
      const parts = n.split(/\s+/);
      const first = parts[0][0] ?? "";
      const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
      return (first + last).toUpperCase();
    }, ...ngDevMode ? [{ debugName: "displayInitials" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmUserCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmUserCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmUserCell, selectors: [["hrm-user-cell"]], hostAttrs: [1, "hrm-user-cell"], inputs: { src: [1, "src"], name: [1, "name"], sub: [1, "sub"], initials: [1, "initials"], status: [1, "status"], colorful: [1, "colorful"], shape: [1, "shape"], avatarSize: [1, "avatarSize"] }, decls: 5, vars: 9, consts: [[3, "src", "text", "colorSeed", "colorful", "status", "size", "shape"], [1, "uc-body"], [1, "uc-name"], [1, "uc-sub"]], template: function HrmUserCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "hrm-avatar", 0);
        \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, HrmUserCell_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("src", ctx.src())("text", ctx.displayInitials())("colorSeed", ctx.name())("colorful", ctx.colorful())("status", ctx.status())("size", ctx.avatarSize())("shape", ctx.shape());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.name());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sub() ? 4 : -1);
      }
    }, dependencies: [HrmAvatar], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.uc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.uc-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.uc-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-user-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmUserCell, [{
    type: Component,
    args: [{ selector: "hrm-user-cell", imports: [HrmAvatar], template: `
    <hrm-avatar
      [src]="src()"
      [text]="displayInitials()"
      [colorSeed]="name()"
      [colorful]="colorful()"
      [status]="status()"
      [size]="avatarSize()"
      [shape]="shape()" />
    <span class="uc-body">
      <span class="uc-name">{{ name() }}</span>
      @if (sub()) { <span class="uc-sub">{{ sub() }}</span> }
    </span>
  `, host: { class: "hrm-user-cell" }, styles: ["/* angular:styles/component:css;62759be4da241d5554c52ce150caba35bf0ee4a8159df5ff56ddf1d254b2779d;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-user-cell.ts */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.uc-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.uc-name {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.uc-sub {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-user-cell.css.map */\n"] }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], sub: [{ type: Input, args: [{ isSignal: true, alias: "sub", required: false }] }], initials: [{ type: Input, args: [{ isSignal: true, alias: "initials", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], colorful: [{ type: Input, args: [{ isSignal: true, alias: "colorful", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }], avatarSize: [{ type: Input, args: [{ isSignal: true, alias: "avatarSize", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmUserCell, { className: "HrmUserCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-user-cell.ts", lineNumber: 36 });
})();

export {
  HrmUserCell
};
//# sourceMappingURL=chunk-QLXCS5IB.js.map
