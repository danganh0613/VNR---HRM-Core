import {
  NzDividerComponent,
  NzDividerModule
} from "./chunk-ONEDVTQ4.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/layout/hrm-divider.ts
var HrmDivider = class _HrmDivider {
  constructor() {
    this.text = input("", ...ngDevMode ? [{ debugName: "text" }] : (
      /* istanbul ignore next */
      []
    ));
    this.orientation = input("center", ...ngDevMode ? [{ debugName: "orientation" }] : (
      /* istanbul ignore next */
      []
    ));
    this.type = input("horizontal", ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dashed = input(false, ...ngDevMode ? [{ debugName: "dashed" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDivider)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDivider, selectors: [["hrm-divider"]], hostAttrs: [1, "hrm-divider"], inputs: { text: [1, "text"], orientation: [1, "orientation"], type: [1, "type"], dashed: [1, "dashed"] }, decls: 1, vars: 4, consts: [[3, "nzText", "nzOrientation", "nzType", "nzDashed"]], template: function HrmDivider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-divider", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzText", ctx.text())("nzOrientation", ctx.orientation())("nzType", ctx.type())("nzDashed", ctx.dashed());
      }
    }, dependencies: [NzDividerModule, NzDividerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDivider, [{
    type: Component,
    args: [{
      selector: "hrm-divider",
      imports: [NzDividerModule],
      template: `
    <nz-divider
      [nzText]="text()"
      [nzOrientation]="orientation()"
      [nzType]="type()"
      [nzDashed]="dashed()"></nz-divider>
  `,
      host: { class: "hrm-divider" }
    }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], orientation: [{ type: Input, args: [{ isSignal: true, alias: "orientation", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], dashed: [{ type: Input, args: [{ isSignal: true, alias: "dashed", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDivider, { className: "HrmDivider", filePath: "libs/hrm-ui/src/lib/layout/hrm-divider.ts", lineNumber: 17 });
})();

export {
  HrmDivider
};
//# sourceMappingURL=chunk-PCXDK26M.js.map
