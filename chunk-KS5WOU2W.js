import {
  NzAvatarComponent,
  NzAvatarModule
} from "./chunk-KXHKNX77.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-display/hrm-avatar.ts
function HrmAvatar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-status", ctx_r0.status());
  }
}
var HrmAvatar = class _HrmAvatar {
  constructor() {
    this.text = input("", ...ngDevMode ? [{ debugName: "text" }] : (
      /* istanbul ignore next */
      []
    ));
    this.src = input("", ...ngDevMode ? [{ debugName: "src" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input("", ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("circle", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colorful = input(false, ...ngDevMode ? [{ debugName: "colorful" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colorSeed = input("", ...ngDevMode ? [{ debugName: "colorSeed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input(null, ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusPosition = input("bottom", ...ngDevMode ? [{ debugName: "statusPosition" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hueIdx = computed(() => {
      if (!this.colorful())
        return null;
      const seed = this.colorSeed() || this.text();
      if (!seed)
        return null;
      let h = 0;
      for (let i = 0; i < seed.length; i++)
        h = (h + seed.charCodeAt(i)) % 8;
      return h;
    }, ...ngDevMode ? [{ debugName: "hueIdx" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAvatar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAvatar, selectors: [["hrm-avatar"]], hostAttrs: [1, "hrm-avatar"], hostVars: 2, hostBindings: function HrmAvatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-hue", ctx.hueIdx())("data-status-pos", ctx.status() ? ctx.statusPosition() : null);
      }
    }, inputs: { text: [1, "text"], src: [1, "src"], icon: [1, "icon"], size: [1, "size"], shape: [1, "shape"], colorful: [1, "colorful"], colorSeed: [1, "colorSeed"], status: [1, "status"], statusPosition: [1, "statusPosition"] }, decls: 2, vars: 6, consts: [[3, "nzText", "nzSrc", "nzIcon", "nzSize", "nzShape"], [1, "av-status"]], template: function HrmAvatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-avatar", 0);
        \u0275\u0275conditionalCreate(1, HrmAvatar_Conditional_1_Template, 1, 1, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("nzText", ctx.text() || void 0)("nzSrc", ctx.src() || void 0)("nzIcon", ctx.icon() || void 0)("nzSize", ctx.size())("nzShape", ctx.shape());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.status() ? 1 : -1);
      }
    }, dependencies: [NzAvatarModule, NzAvatarComponent], styles: ['\n[_nghost-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n[data-hue="0"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--blue-600);\n  color: var(--static-white);\n}\n[data-hue="1"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--green-600);\n  color: var(--static-white);\n}\n[data-hue="2"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--amber-600);\n  color: var(--static-white);\n}\n[data-hue="3"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--red-600);\n  color: var(--static-white);\n}\n[data-hue="4"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--purple-600);\n  color: var(--static-white);\n}\n[data-hue="5"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--teal-600);\n  color: var(--static-white);\n}\n[data-hue="6"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--cyan-600);\n  color: var(--static-white);\n}\n[data-hue="7"][_nghost-%COMP%]     .ant-avatar {\n  background: var(--pink-600);\n  color: var(--static-white);\n}\n.av-status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 28%;\n  height: 28%;\n  min-width: 8px;\n  min-height: 8px;\n  max-width: 14px;\n  max-height: 14px;\n  border-radius: var(--radius-full);\n  box-shadow: 0 0 0 2px var(--bg-surface);\n}\n[data-status-pos="bottom"][_nghost-%COMP%]   .av-status[_ngcontent-%COMP%] {\n  bottom: 4%;\n}\n[data-status-pos="top"][_nghost-%COMP%]   .av-status[_ngcontent-%COMP%] {\n  top: 4%;\n}\n.av-status[data-status=online][_ngcontent-%COMP%] {\n  background: var(--success-base);\n}\n.av-status[data-status=offline][_ngcontent-%COMP%] {\n  background: var(--neutral-400);\n}\n.av-status[data-status=busy][_ngcontent-%COMP%] {\n  background: var(--error-base);\n}\n.av-status[data-status=away][_ngcontent-%COMP%] {\n  background: var(--away-base);\n}\n/*# sourceMappingURL=hrm-avatar.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAvatar, [{
    type: Component,
    args: [{ selector: "hrm-avatar", imports: [NzAvatarModule], template: `
    <nz-avatar
      [nzText]="text() || undefined"
      [nzSrc]="src() || undefined"
      [nzIcon]="icon() || undefined"
      [nzSize]="size()"
      [nzShape]="shape()"></nz-avatar>
    @if (status()) {
      <span class="av-status" [attr.data-status]="status()"></span>
    }
  `, host: {
      class: "hrm-avatar",
      "[attr.data-hue]": "hueIdx()",
      "[attr.data-status-pos]": "status() ? statusPosition() : null"
    }, styles: ['/* angular:styles/component:css;2a18e71ff5ee0cc046303e2a968165e47aabf66585671562dffd433f825a15d6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-avatar.ts */\n:host {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n:host([data-hue="0"]) ::ng-deep .ant-avatar {\n  background: var(--blue-600);\n  color: var(--static-white);\n}\n:host([data-hue="1"]) ::ng-deep .ant-avatar {\n  background: var(--green-600);\n  color: var(--static-white);\n}\n:host([data-hue="2"]) ::ng-deep .ant-avatar {\n  background: var(--amber-600);\n  color: var(--static-white);\n}\n:host([data-hue="3"]) ::ng-deep .ant-avatar {\n  background: var(--red-600);\n  color: var(--static-white);\n}\n:host([data-hue="4"]) ::ng-deep .ant-avatar {\n  background: var(--purple-600);\n  color: var(--static-white);\n}\n:host([data-hue="5"]) ::ng-deep .ant-avatar {\n  background: var(--teal-600);\n  color: var(--static-white);\n}\n:host([data-hue="6"]) ::ng-deep .ant-avatar {\n  background: var(--cyan-600);\n  color: var(--static-white);\n}\n:host([data-hue="7"]) ::ng-deep .ant-avatar {\n  background: var(--pink-600);\n  color: var(--static-white);\n}\n.av-status {\n  position: absolute;\n  right: 0;\n  width: 28%;\n  height: 28%;\n  min-width: 8px;\n  min-height: 8px;\n  max-width: 14px;\n  max-height: 14px;\n  border-radius: var(--radius-full);\n  box-shadow: 0 0 0 2px var(--bg-surface);\n}\n:host([data-status-pos="bottom"]) .av-status {\n  bottom: 4%;\n}\n:host([data-status-pos="top"]) .av-status {\n  top: 4%;\n}\n.av-status[data-status=online] {\n  background: var(--success-base);\n}\n.av-status[data-status=offline] {\n  background: var(--neutral-400);\n}\n.av-status[data-status=busy] {\n  background: var(--error-base);\n}\n.av-status[data-status=away] {\n  background: var(--away-base);\n}\n/*# sourceMappingURL=hrm-avatar.css.map */\n'] }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }], colorful: [{ type: Input, args: [{ isSignal: true, alias: "colorful", required: false }] }], colorSeed: [{ type: Input, args: [{ isSignal: true, alias: "colorSeed", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], statusPosition: [{ type: Input, args: [{ isSignal: true, alias: "statusPosition", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAvatar, { className: "HrmAvatar", filePath: "libs/hrm-ui/src/lib/data-display/hrm-avatar.ts", lineNumber: 58 });
})();

export {
  HrmAvatar
};
//# sourceMappingURL=chunk-KS5WOU2W.js.map
