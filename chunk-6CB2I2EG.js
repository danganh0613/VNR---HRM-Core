import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/general/hrm-button-group.ts
var _c0 = ["*"];
var HrmButtonGroup = class _HrmButtonGroup {
  constructor() {
    this.direction = input("horizontal", ...ngDevMode ? [{ debugName: "direction" }] : (
      /* istanbul ignore next */
      []
    ));
    this.block = input(false, ...ngDevMode ? [{ debugName: "block" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmButtonGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmButtonGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmButtonGroup, selectors: [["hrm-button-group"]], hostAttrs: [1, "hrm-button-group"], hostVars: 4, hostBindings: function HrmButtonGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-button-group--vertical", ctx.direction() === "vertical")("hrm-button-group--block", ctx.block());
      }
    }, inputs: { direction: [1, "direction"], block: [1, "block"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HrmButtonGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.hrm-button-group--vertical[_nghost-%COMP%] {\n  flex-direction: column;\n}\n.hrm-button-group--block[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.hrm-button-group--block[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button) {\n  flex: 1;\n}\n.hrm-button-group--block[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  width: 100%;\n}\n[_nghost-%COMP%]:not(.hrm-button-group--vertical)     :is(.hrm-button, .hrm-toggle-button) + :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  margin-left: -1px;\n}\n[_nghost-%COMP%]:not(.hrm-button-group--vertical)     :is(.hrm-button, .hrm-toggle-button):not(:first-child) .ant-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[_nghost-%COMP%]:not(.hrm-button-group--vertical)     :is(.hrm-button, .hrm-toggle-button):not(:last-child) .ant-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.hrm-button-group--vertical[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button) + :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  margin-top: -1px;\n}\n.hrm-button-group--vertical[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button):not(:first-child) .ant-btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.hrm-button-group--vertical[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button):not(:last-child) .ant-btn {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button):hover .ant-btn, \n[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button):focus-within .ant-btn, \n[_nghost-%COMP%]     :is(.hrm-button, .hrm-toggle-button) .ant-btn-primary {\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=hrm-button-group.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmButtonGroup, [{
    type: Component,
    args: [{ selector: "hrm-button-group", template: `<ng-content />`, host: {
      class: "hrm-button-group",
      "[class.hrm-button-group--vertical]": "direction() === 'vertical'",
      "[class.hrm-button-group--block]": "block()"
    }, styles: ["/* angular:styles/component:css;f41f716fbb816c8305f11e2216e2b6ee304d8e03003a4398e4cc1dc4e331b3ca;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/general/hrm-button-group.ts */\n:host {\n  display: inline-flex;\n}\n:host(.hrm-button-group--vertical) {\n  flex-direction: column;\n}\n:host(.hrm-button-group--block) {\n  display: flex;\n  width: 100%;\n}\n:host(.hrm-button-group--block) ::ng-deep :is(.hrm-button, .hrm-toggle-button) {\n  flex: 1;\n}\n:host(.hrm-button-group--block) ::ng-deep :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  width: 100%;\n}\n:host(:not(.hrm-button-group--vertical)) ::ng-deep :is(.hrm-button, .hrm-toggle-button) + :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  margin-left: -1px;\n}\n:host(:not(.hrm-button-group--vertical)) ::ng-deep :is(.hrm-button, .hrm-toggle-button):not(:first-child) .ant-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n:host(:not(.hrm-button-group--vertical)) ::ng-deep :is(.hrm-button, .hrm-toggle-button):not(:last-child) .ant-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host(.hrm-button-group--vertical) ::ng-deep :is(.hrm-button, .hrm-toggle-button) + :is(.hrm-button, .hrm-toggle-button) .ant-btn {\n  margin-top: -1px;\n}\n:host(.hrm-button-group--vertical) ::ng-deep :is(.hrm-button, .hrm-toggle-button):not(:first-child) .ant-btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n:host(.hrm-button-group--vertical) ::ng-deep :is(.hrm-button, .hrm-toggle-button):not(:last-child) .ant-btn {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host ::ng-deep :is(.hrm-button, .hrm-toggle-button):hover .ant-btn,\n:host ::ng-deep :is(.hrm-button, .hrm-toggle-button):focus-within .ant-btn,\n:host ::ng-deep :is(.hrm-button, .hrm-toggle-button) .ant-btn-primary {\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=hrm-button-group.css.map */\n"] }]
  }], null, { direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: false }] }], block: [{ type: Input, args: [{ isSignal: true, alias: "block", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmButtonGroup, { className: "HrmButtonGroup", filePath: "libs/hrm-ui/src/lib/general/hrm-button-group.ts", lineNumber: 40 });
})();

export {
  HrmButtonGroup
};
//# sourceMappingURL=chunk-6CB2I2EG.js.map
