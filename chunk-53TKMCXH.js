import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/appshell/hrm-app-shell.ts
var _c0 = [[["", "appSideNav", ""]], [["", "appTopNav", ""]], [["", "appBanner", ""]], "*"];
var _c1 = ["[appSideNav]", "[appTopNav]", "[appBanner]", "*"];
var HrmAppShell = class _HrmAppShell {
  constructor() {
    this.contentPad = input("md", ...ngDevMode ? [{ debugName: "contentPad" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  padClass() {
    const p = this.contentPad();
    return p === "none" ? "" : "pad-" + p;
  }
  static {
    this.\u0275fac = function HrmAppShell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAppShell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAppShell, selectors: [["hrm-app-shell"]], hostAttrs: [1, "hrm-app-shell"], inputs: { contentPad: [1, "contentPad"] }, ngContentSelectors: _c1, decls: 10, vars: 2, consts: [[1, "shell"], [1, "shell-side"], [1, "shell-main"], [1, "shell-top"], [1, "shell-banner"], [1, "shell-content"]], template: function HrmAppShell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275projection(5, 1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 4);
        \u0275\u0275projection(7, 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "div", 5);
        \u0275\u0275projection(9, 3);
        \u0275\u0275domElementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275classMap(ctx.padClass());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  min-height: 0;\n  background: var(--bg-app);\n}\n.shell-side[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n}\n.shell-side[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.shell-side[_ngcontent-%COMP%]     .hrm-side-nav {\n  display: flex;\n  height: 100%;\n}\n.shell-side[_ngcontent-%COMP%]     .sn {\n  height: 100%;\n}\n.shell-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n}\n.shell-top[_ngcontent-%COMP%] {\n  flex: none;\n}\n.shell-top[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.shell-banner[_ngcontent-%COMP%] {\n  flex: none;\n}\n.shell-banner[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.shell-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.shell-content.pad-sm[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.shell-content.pad-md[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.shell-content.pad-lg[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n/*# sourceMappingURL=hrm-app-shell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAppShell, [{
    type: Component,
    args: [{ selector: "hrm-app-shell", template: `
    <div class="shell">
      <div class="shell-side"><ng-content select="[appSideNav]" /></div>
      <div class="shell-main">
        <div class="shell-top"><ng-content select="[appTopNav]" /></div>
        <div class="shell-banner"><ng-content select="[appBanner]" /></div>
        <div class="shell-content" [class]="padClass()"><ng-content /></div>
      </div>
    </div>
  `, host: { class: "hrm-app-shell" }, styles: ["/* angular:styles/component:css;39600d1a42444949a561c087fe15788af7be94384e5718c359d8f130d32d9fe3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/appshell/hrm-app-shell.ts */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.shell {\n  display: flex;\n  height: 100%;\n  min-height: 0;\n  background: var(--bg-app);\n}\n.shell-side {\n  flex: none;\n  display: flex;\n}\n.shell-side:empty {\n  display: none;\n}\n.shell-side ::ng-deep .hrm-side-nav {\n  display: flex;\n  height: 100%;\n}\n.shell-side ::ng-deep .sn {\n  height: 100%;\n}\n.shell-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n}\n.shell-top {\n  flex: none;\n}\n.shell-top:empty {\n  display: none;\n}\n.shell-banner {\n  flex: none;\n}\n.shell-banner:empty {\n  display: none;\n}\n.shell-content {\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n.shell-content.pad-sm {\n  padding: 12px;\n}\n.shell-content.pad-md {\n  padding: 20px;\n}\n.shell-content.pad-lg {\n  padding: 32px;\n}\n/*# sourceMappingURL=hrm-app-shell.css.map */\n"] }]
  }], null, { contentPad: [{ type: Input, args: [{ isSignal: true, alias: "contentPad", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAppShell, { className: "HrmAppShell", filePath: "libs/hrm-ui/src/lib/appshell/hrm-app-shell.ts", lineNumber: 48 });
})();

export {
  HrmAppShell
};
//# sourceMappingURL=chunk-53TKMCXH.js.map
