import {
  HrmCommandPaletteService
} from "./chunk-3LQVI5HK.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/command-palette.ts
var SgDocCommandPalette = class _SgDocCommandPalette {
  constructor() {
    this.palette = inject(HrmCommandPaletteService);
    this.when = [
      "docs.commandPalette.when1",
      "docs.commandPalette.when2",
      "docs.commandPalette.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocCommandPalette_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCommandPalette)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCommandPalette, selectors: [["sg-doc-command-palette"]], decls: 36, vars: 43, consts: [["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "primary", 3, "click"], [1, "kbd-hint", 3, "innerHTML"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "click"]], template: function SgDocCommandPalette_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row")(5, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocCommandPalette_Template_hrm_button_click_5_listener() {
          return ctx.palette.open();
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "span", 3);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275element(11, "sg-use", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-do");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "hrm-button", 9);
        \u0275\u0275listener("click", function SgDocCommandPalette_Template_hrm_button_click_33_listener() {
          return ctx.palette.open();
        });
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 15, "docs.commandPalette.title"))("desc", \u0275\u0275pipeBind1(2, 17, "docs.commandPalette.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, "docs.commandPalette.ovOpen"));
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(9, 21, "docs.commandPalette.kbdHint"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 23, "docs.commandPalette.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 25, "docs.commandPalette.behavior"))("avoid", \u0275\u0275pipeBind1(14, 27, "docs.commandPalette.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 29, "docs.commandPalette.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 31, "docs.commandPalette.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 33, "docs.commandPalette.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 35, "docs.commandPalette.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 37, "docs.commandPalette.exTryT"))("desc", \u0275\u0275pipeBind1(31, 39, "docs.commandPalette.exTryD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 41, "docs.commandPalette.exTryOpen"));
      }
    }, dependencies: [TranslateModule, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.kbd-hint[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\nkbd[_ngcontent-%COMP%] {\n  font-family: var(--font-sans);\n  font-size: var(--fs-12);\n  color: var(--text-body);\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-bottom-width: 2px;\n  border-radius: var(--radius-sm);\n  padding: 1px 6px;\n}\n/*# sourceMappingURL=command-palette.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCommandPalette, [{
    type: Component,
    args: [{ selector: "sg-doc-command-palette", imports: [TranslateModule, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Overlay" [title]="'docs.commandPalette.title' | translate" [desc]="'docs.commandPalette.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-button variant="primary" (click)="palette.open()">{{ 'docs.commandPalette.ovOpen' | translate }}</hrm-button>
          <span class="kbd-hint" [innerHTML]="'docs.commandPalette.kbdHint' | translate"></span>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.commandPalette.purpose' | translate"
          [when]="when"
          [behavior]="'docs.commandPalette.behavior' | translate"
          [avoid]="'docs.commandPalette.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.commandPalette.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.commandPalette.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.commandPalette.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.commandPalette.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.commandPalette.exTryT' | translate"
          [desc]="'docs.commandPalette.exTryD' | translate">
          <sg-row>
            <hrm-button (click)="palette.open()">{{ 'docs.commandPalette.exTryOpen' | translate }}</hrm-button>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;f7a9b052302383ec9822a0a80823d2852335effbcebd69687e69267fec0290ac;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/command-palette.ts */\n.kbd-hint {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\nkbd {\n  font-family: var(--font-sans);\n  font-size: var(--fs-12);\n  color: var(--text-body);\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-bottom-width: 2px;\n  border-radius: var(--radius-sm);\n  padding: 1px 6px;\n}\n/*# sourceMappingURL=command-palette.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCommandPalette, { className: "SgDocCommandPalette", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/command-palette.ts", lineNumber: 57 });
})();
export {
  SgDocCommandPalette
};
//# sourceMappingURL=chunk-ERMUC43W.js.map
