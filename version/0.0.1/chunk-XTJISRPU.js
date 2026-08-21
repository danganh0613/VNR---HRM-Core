import {
  HrmBarList
} from "./chunk-V2DHIQKM.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/bar-list.ts
var SgDocBarList = class _SgDocBarList {
  constructor() {
    this.t = inject(TranslateService);
    this.hours = (v) => `${v} ${this.tr("unitHours")}`;
    this.when = [
      "docs.barList.when1",
      "docs.barList.when2",
      "docs.barList.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.barList." + key);
  }
  get headcount() {
    return [
      { label: this.tr("deptTech"), value: 86 },
      { label: this.tr("deptSales"), value: 64 },
      { label: this.tr("deptHr"), value: 32 },
      { label: this.tr("deptFin"), value: 28 },
      { label: this.tr("deptAdmin"), value: 18 }
    ];
  }
  get overtime() {
    return [
      { label: this.tr("deptTech"), value: 320, color: "var(--error-base)" },
      { label: this.tr("deptSales"), value: 180 },
      { label: this.tr("deptFin"), value: 96 },
      { label: this.tr("deptHr"), value: 54 }
    ];
  }
  static {
    this.\u0275fac = function SgDocBarList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocBarList)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocBarList, selectors: [["sg-doc-bar-list"]], decls: 34, vars: 41, consts: [["category", "Chart", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "420px"], [3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "items", "format"]], template: function SgDocBarList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-bar-list", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "sg-example", 8);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "sg-row")(26, "div", 2);
        \u0275\u0275element(27, "hrm-bar-list", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 2);
        \u0275\u0275element(33, "hrm-bar-list", 9);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 17, "docs.barList.title"))("desc", \u0275\u0275pipeBind1(2, 19, "docs.barList.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.headcount);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 21, "docs.barList.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 23, "docs.barList.behavior"))("avoid", \u0275\u0275pipeBind1(10, 25, "docs.barList.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 27, "docs.barList.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 29, "docs.barList.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 31, "docs.barList.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 33, "docs.barList.exHeadcountT"))("desc", \u0275\u0275pipeBind1(24, 35, "docs.barList.exHeadcountD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.headcount);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 37, "docs.barList.exHighlightT"))("desc", \u0275\u0275pipeBind1(30, 39, "docs.barList.exHighlightD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.overtime)("format", ctx.hours);
      }
    }, dependencies: [TranslateModule, HrmBarList, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocBarList, [{
    type: Component,
    args: [{
      selector: "sg-doc-bar-list",
      imports: [TranslateModule, HrmBarList, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.barList.title' | translate" [desc]="'docs.barList.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:420px">
          <hrm-bar-list [items]="headcount" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.barList.purpose' | translate"
          [when]="when"
          [behavior]="'docs.barList.behavior' | translate"
          [avoid]="'docs.barList.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.barList.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.barList.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.barList.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.barList.exHeadcountT' | translate"
          [desc]="'docs.barList.exHeadcountD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-bar-list [items]="headcount" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.barList.exHighlightT' | translate"
          [desc]="'docs.barList.exHighlightD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-bar-list [items]="overtime" [format]="hours" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocBarList, { className: "SgDocBarList", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/bar-list.ts", lineNumber: 53 });
})();
export {
  SgDocBarList
};
//# sourceMappingURL=chunk-XTJISRPU.js.map
