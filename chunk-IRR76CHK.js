import {
  HrmSparkline
} from "./chunk-4Z53O5DA.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/sparkline.ts
var SgDocSparkline = class _SgDocSparkline {
  constructor() {
    this.headcount = [212, 218, 215, 224, 231, 229, 238, 244, 241, 248];
    this.up = [10, 12, 11, 14, 16, 15, 18, 21];
    this.down = [21, 19, 20, 17, 15, 16, 12, 10];
    this.when = [
      "docs.sparkline.when1",
      "docs.sparkline.when2",
      "docs.sparkline.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocSparkline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSparkline)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSparkline, selectors: [["sg-doc-sparkline"]], decls: 46, vars: 64, consts: [["category", "Chart", 3, "title", "desc"], ["sgOverview", ""], [3, "data"], ["variant", "area", 3, "data"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["label", "line \xB7 area"], [3, "data", "width", "height"], ["variant", "area", 3, "data", "width", "height"], [3, "label"], ["color", "var(--success-base)", 3, "data", "width"], ["color", "var(--error-base)", 3, "data", "width"], [1, "inline-demo"]], template: function SgDocSparkline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row");
        \u0275\u0275element(5, "hrm-sparkline", 2)(6, "hrm-sparkline", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "sg-use", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 7)(23, "sg-example", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "sg-row", 9);
        \u0275\u0275element(27, "hrm-sparkline", 10)(28, "hrm-sparkline", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row", 12);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275element(34, "hrm-sparkline", 13)(35, "hrm-sparkline", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "sg-example", 8);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row")(40, "span", 15);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "b");
        \u0275\u0275text(44, "248");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "hrm-sparkline", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 32, "docs.sparkline.title"))("desc", \u0275\u0275pipeBind1(2, 34, "docs.sparkline.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("data", ctx.headcount);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.headcount);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 36, "docs.sparkline.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 38, "docs.sparkline.behavior"))("avoid", \u0275\u0275pipeBind1(11, 40, "docs.sparkline.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 42, "docs.sparkline.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 44, "docs.sparkline.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 46, "docs.sparkline.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 48, "docs.sparkline.exLineT"))("desc", \u0275\u0275pipeBind1(25, 50, "docs.sparkline.exLineD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.headcount)("width", 160)("height", 40);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.headcount)("width", 160)("height", 40);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 52, "docs.sparkline.exColorT"))("desc", \u0275\u0275pipeBind1(31, 54, "docs.sparkline.exColorD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(33, 56, "docs.sparkline.rowColor"));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.up)("width", 140);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.down)("width", 140);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 58, "docs.sparkline.exInlineT"))("desc", \u0275\u0275pipeBind1(38, 60, "docs.sparkline.exInlineD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 62, "docs.sparkline.inlineText"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.headcount)("width", 80)("height", 20);
      }
    }, dependencies: [TranslateModule, HrmSparkline, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.inline-demo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.inline-demo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=sparkline.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSparkline, [{
    type: Component,
    args: [{ selector: "sg-doc-sparkline", imports: [TranslateModule, HrmSparkline, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Chart" [title]="'docs.sparkline.title' | translate" [desc]="'docs.sparkline.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-sparkline [data]="headcount" />
          <hrm-sparkline [data]="headcount" variant="area" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.sparkline.purpose' | translate"
          [when]="when"
          [behavior]="'docs.sparkline.behavior' | translate"
          [avoid]="'docs.sparkline.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.sparkline.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.sparkline.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.sparkline.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.sparkline.exLineT' | translate"
          [desc]="'docs.sparkline.exLineD' | translate">
          <sg-row label="line \xB7 area">
            <hrm-sparkline [data]="headcount" [width]="160" [height]="40" />
            <hrm-sparkline [data]="headcount" variant="area" [width]="160" [height]="40" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.sparkline.exColorT' | translate"
          [desc]="'docs.sparkline.exColorD' | translate">
          <sg-row [label]="'docs.sparkline.rowColor' | translate">
            <hrm-sparkline [data]="up" color="var(--success-base)" [width]="140" />
            <hrm-sparkline [data]="down" color="var(--error-base)" [width]="140" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.sparkline.exInlineT' | translate"
          [desc]="'docs.sparkline.exInlineD' | translate">
          <sg-row>
            <span class="inline-demo">{{ 'docs.sparkline.inlineText' | translate }} <b>248</b> <hrm-sparkline [data]="headcount" [width]="80" [height]="20" /></span>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;83ebf2059455dfe9711c51f538477cdbcdc861204157985e408f42cf3ae388b8;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/sparkline.ts */\n.inline-demo {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.inline-demo b {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=sparkline.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSparkline, { className: "SgDocSparkline", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/sparkline.ts", lineNumber: 67 });
})();
export {
  SgDocSparkline
};
//# sourceMappingURL=chunk-IRR76CHK.js.map
