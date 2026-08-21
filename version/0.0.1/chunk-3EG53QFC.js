import {
  HrmAvatar
} from "./chunk-DY3W2GRF.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-display/hrm-avatar-group.ts
function HrmAvatarGroup_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-avatar", 0);
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", it_r1.src || "")("text", it_r1.text || ctx_r1.initials(it_r1.name))("colorful", ctx_r1.colorful())("colorSeed", it_r1.name)("size", ctx_r1.avatarSize())("shape", ctx_r1.shape());
  }
}
function HrmAvatarGroup_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-avatar", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "+" + ctx_r1.overflow())("size", ctx_r1.avatarSize())("shape", ctx_r1.shape());
  }
}
var HrmAvatarGroup = class _HrmAvatarGroup {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(4, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input(32, ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shape = input("circle", ...ngDevMode ? [{ debugName: "shape" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colorful = input(true, ...ngDevMode ? [{ debugName: "colorful" }] : (
      /* istanbul ignore next */
      []
    ));
    this.compact = input(false, ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visible = computed(() => this.items().slice(0, this.max()), ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.overflow = computed(() => Math.max(0, this.items().length - this.max()), ...ngDevMode ? [{ debugName: "overflow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avatarSize = computed(() => {
      const s = this.size();
      return this.compact() && s === 32 ? 24 : s;
    }, ...ngDevMode ? [{ debugName: "avatarSize" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  initials(name) {
    const n = (name || "").trim();
    if (!n)
      return "";
    const parts = n.split(/\s+/);
    const first = parts[0][0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
  }
  static {
    this.\u0275fac = function HrmAvatarGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAvatarGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAvatarGroup, selectors: [["hrm-avatar-group"]], hostAttrs: [1, "hrm-avatar-group"], hostVars: 2, hostBindings: function HrmAvatarGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-avatar-group--compact", ctx.compact());
      }
    }, inputs: { items: [1, "items"], max: [1, "max"], size: [1, "size"], shape: [1, "shape"], colorful: [1, "colorful"], compact: [1, "compact"] }, decls: 3, vars: 1, consts: [[1, "ag-item", 3, "src", "text", "colorful", "colorSeed", "size", "shape"], [1, "ag-item", "ag-more", 3, "text", "size", "shape"]], template: function HrmAvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmAvatarGroup_For_1_Template, 1, 6, "hrm-avatar", 0, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(2, HrmAvatarGroup_Conditional_2_Template, 1, 3, "hrm-avatar", 1);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.visible());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.overflow() > 0 ? 2 : -1);
      }
    }, dependencies: [HrmAvatar], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.ag-item[_ngcontent-%COMP%]    + .ag-item[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n.hrm-avatar-group--compact[_nghost-%COMP%]   .ag-item[_ngcontent-%COMP%]    + .ag-item[_ngcontent-%COMP%] {\n  margin-left: -8px;\n}\n.ag-item[_ngcontent-%COMP%]     .ant-avatar {\n  box-shadow: 0 0 0 2px var(--bg-surface);\n}\n.ag-more[_ngcontent-%COMP%]     .ant-avatar {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-avatar-group.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAvatarGroup, [{
    type: Component,
    args: [{ selector: "hrm-avatar-group", imports: [HrmAvatar], template: `
    @for (it of visible(); track $index) {
      <hrm-avatar
        class="ag-item"
        [src]="it.src || ''"
        [text]="it.text || initials(it.name)"
        [colorful]="colorful()"
        [colorSeed]="it.name"
        [size]="avatarSize()"
        [shape]="shape()" />
    }
    @if (overflow() > 0) {
      <hrm-avatar class="ag-item ag-more" [text]="'+' + overflow()" [size]="avatarSize()" [shape]="shape()" />
    }
  `, host: { class: "hrm-avatar-group", "[class.hrm-avatar-group--compact]": "compact()" }, styles: ["/* angular:styles/component:css;be988734b48e0e47b531df8627afa75223e331faeb5d2e6aae70fc8587ac6e79;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-avatar-group.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n}\n.ag-item + .ag-item {\n  margin-left: -10px;\n}\n:host(.hrm-avatar-group--compact) .ag-item + .ag-item {\n  margin-left: -8px;\n}\n.ag-item ::ng-deep .ant-avatar {\n  box-shadow: 0 0 0 2px var(--bg-surface);\n}\n.ag-more ::ng-deep .ant-avatar {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-avatar-group.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], shape: [{ type: Input, args: [{ isSignal: true, alias: "shape", required: false }] }], colorful: [{ type: Input, args: [{ isSignal: true, alias: "colorful", required: false }] }], compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAvatarGroup, { className: "HrmAvatarGroup", filePath: "libs/hrm-ui/src/lib/data-display/hrm-avatar-group.ts", lineNumber: 42 });
})();

export {
  HrmAvatarGroup
};
//# sourceMappingURL=chunk-3EG53QFC.js.map
