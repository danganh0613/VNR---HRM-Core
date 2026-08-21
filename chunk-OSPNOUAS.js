import {
  NzEmptyComponent,
  NzEmptyModule
} from "./chunk-7MILWWSJ.js";
import {
  AlertTriangle,
  Inbox,
  Sparkles,
  TablerIconComponent,
  ZoomExclamation
} from "./chunk-QL2Z65KF.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-display/hrm-empty.ts
function HrmEmpty_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "tabler-icon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-preset", ctx_r0.preset());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.presetIcon())("size", 40);
  }
}
var HrmEmpty = class _HrmEmpty {
  constructor() {
    this.preset = input("", ...ngDevMode ? [{ debugName: "preset" }] : (
      /* istanbul ignore next */
      []
    ));
    this.description = input("", ...ngDevMode ? [{ debugName: "description" }] : (
      /* istanbul ignore next */
      []
    ));
    this.image = input(null, ...ngDevMode ? [{ debugName: "image" }] : (
      /* istanbul ignore next */
      []
    ));
    this.action = input(null, ...ngDevMode ? [{ debugName: "action" }] : (
      /* istanbul ignore next */
      []
    ));
    this.presetIcon = computed(() => {
      switch (this.preset()) {
        case "no-data":
          return Inbox;
        case "no-results":
          return ZoomExclamation;
        case "error":
          return AlertTriangle;
        case "first-use":
          return Sparkles;
        default:
          return null;
      }
    }, ...ngDevMode ? [{ debugName: "presetIcon" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmEmpty_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmEmpty)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmEmpty, selectors: [["hrm-empty"]], hostAttrs: [1, "hrm-empty"], inputs: { preset: [1, "preset"], description: [1, "description"], image: [1, "image"], action: [1, "action"] }, decls: 3, vars: 3, consts: [["presetTpl", ""], [3, "nzNotFoundImage", "nzNotFoundContent", "nzNotFoundFooter"], [1, "he-ic"], [3, "icon", "size"]], template: function HrmEmpty_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-empty", 1);
        \u0275\u0275template(1, HrmEmpty_ng_template_1_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const presetTpl_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("nzNotFoundImage", ctx.image() ?? (ctx.presetIcon() ? presetTpl_r2 : "default"))("nzNotFoundContent", ctx.description() || void 0)("nzNotFoundFooter", ctx.action() ?? void 0);
      }
    }, dependencies: [NzEmptyModule, NzEmptyComponent, TablerIconComponent], styles: ["\n.he-ic[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface-subtle);\n  color: var(--icon-secondary);\n}\n.he-ic[data-preset=error][_ngcontent-%COMP%] {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.he-ic[data-preset=first-use][_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-empty.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmEmpty, [{
    type: Component,
    args: [{ selector: "hrm-empty", imports: [NzEmptyModule, TablerIconComponent], template: `
    <nz-empty
      [nzNotFoundImage]="image() ?? (presetIcon() ? presetTpl : 'default')"
      [nzNotFoundContent]="description() || undefined"
      [nzNotFoundFooter]="action() ?? undefined">
    </nz-empty>

    <ng-template #presetTpl>
      <span class="he-ic" [attr.data-preset]="preset()">
        <tabler-icon [icon]="$any(presetIcon())" [size]="40" />
      </span>
    </ng-template>
  `, host: { class: "hrm-empty" }, styles: ["/* angular:styles/component:css;6aa0806e545839222bd041602d93f4a9318a34b2bb8b63d869448292716cbd77;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-empty.ts */\n.he-ic {\n  display: inline-grid;\n  place-items: center;\n  width: 72px;\n  height: 72px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface-subtle);\n  color: var(--icon-secondary);\n}\n.he-ic[data-preset=error] {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.he-ic[data-preset=first-use] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-empty.css.map */\n"] }]
  }], null, { preset: [{ type: Input, args: [{ isSignal: true, alias: "preset", required: false }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }], image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }], action: [{ type: Input, args: [{ isSignal: true, alias: "action", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmEmpty, { className: "HrmEmpty", filePath: "libs/hrm-ui/src/lib/data-display/hrm-empty.ts", lineNumber: 41 });
})();

export {
  HrmEmpty
};
//# sourceMappingURL=chunk-OSPNOUAS.js.map
