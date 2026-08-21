import {
  HrmAmountCell
} from "./chunk-F4FDPHKF.js";
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/amount-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/statistic" });
var _c1 = (a0) => [a0];
var SgDocAmountCell = class _SgDocAmountCell {
  constructor() {
    this.when = [
      "docs.amountCell.when1",
      "docs.amountCell.when2",
      "docs.amountCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocAmountCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAmountCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAmountCell, selectors: [["sg-doc-amount-cell"]], decls: 92, vars: 118, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [1, "w160"], ["currency", "\u20AB", 3, "value"], ["currency", "\u20AB", 3, "value", "signed"], [3, "value", "currency"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [1, "col"], [3, "value", "currency", "signed"]], template: function SgDocAmountCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row")(6, "div", 2);
        \u0275\u0275element(7, "hrm-amount-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275element(9, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 2);
        \u0275\u0275element(11, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 2);
        \u0275\u0275element(13, "hrm-amount-cell", 5);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275element(16, "sg-use", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-do");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-do");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-dont");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-dont");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 9)(37, "sg-example", 10);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row", 11);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "div", 12)(43, "div", 2);
        \u0275\u0275element(44, "hrm-amount-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 2);
        \u0275\u0275element(46, "hrm-amount-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 2);
        \u0275\u0275element(48, "hrm-amount-cell", 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "sg-example", 10);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row", 11);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "div", 12)(55, "div", 2);
        \u0275\u0275element(56, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 2);
        \u0275\u0275element(58, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 2);
        \u0275\u0275element(60, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 2);
        \u0275\u0275element(62, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "sg-example", 10);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementStart(66, "sg-row", 11);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementStart(68, "div", 12)(69, "div", 2);
        \u0275\u0275element(70, "hrm-amount-cell", 5);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 2);
        \u0275\u0275element(73, "hrm-amount-cell", 5);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 2);
        \u0275\u0275element(76, "hrm-amount-cell", 5);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "sg-example", 10);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementStart(81, "sg-row", 11);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementStart(83, "div", 12)(84, "div", 2);
        \u0275\u0275element(85, "hrm-amount-cell", 13);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 2);
        \u0275\u0275element(88, "hrm-amount-cell", 13);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 2);
        \u0275\u0275element(91, "hrm-amount-cell", 4);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 56, "docs.amountCell.title"))("related", \u0275\u0275pureFunction1(116, _c1, \u0275\u0275pureFunction1(114, _c0, \u0275\u0275pipeBind1(2, 58, "docs.amountCell.relStatistic"))))("desc", \u0275\u0275pipeBind1(3, 60, "docs.amountCell.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275property("value", 185e5);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 15e5)("signed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", -25e4)("signed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 176)("currency", \u0275\u0275pipeBind1(14, 62, "docs.amountCell.unitHour"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(17, 64, "docs.amountCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(18, 66, "docs.amountCell.behavior"))("avoid", \u0275\u0275pipeBind1(19, 68, "docs.amountCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 70, "docs.amountCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 72, "docs.amountCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 74, "docs.amountCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 76, "docs.amountCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 78, "docs.amountCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 80, "docs.amountCell.exSalaryT"))("desc", \u0275\u0275pipeBind1(39, 82, "docs.amountCell.exSalaryD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(41, 84, "docs.amountCell.rowNetPay"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 185e5);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 24e6);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 725e4);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 86, "docs.amountCell.exBonusT"))("desc", \u0275\u0275pipeBind1(51, 88, "docs.amountCell.exBonusD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(53, 90, "docs.amountCell.rowBonusPenalty"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 2e6)("signed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5e5)("signed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", -3e5)("signed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", -15e4)("signed", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(64, 92, "docs.amountCell.exHoursT"))("desc", \u0275\u0275pipeBind1(65, 94, "docs.amountCell.exHoursD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(67, 96, "docs.amountCell.rowWorkHours"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 176)("currency", \u0275\u0275pipeBind1(71, 98, "docs.amountCell.unitHour"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 184)("currency", \u0275\u0275pipeBind1(74, 100, "docs.amountCell.unitHour"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 22)("currency", \u0275\u0275pipeBind1(77, 102, "docs.amountCell.unitDay"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(79, 104, "docs.amountCell.exDiffT"))("desc", \u0275\u0275pipeBind1(80, 106, "docs.amountCell.exDiffD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(82, 108, "docs.amountCell.rowDiff"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 8)("currency", \u0275\u0275pipeBind1(86, 110, "docs.amountCell.unitHour"))("signed", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", -4)("currency", \u0275\u0275pipeBind1(89, 112, "docs.amountCell.unitHour"))("signed", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 12e5)("signed", true);
      }
    }, dependencies: [TranslateModule, HrmAmountCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.w160[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=amount-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAmountCell, [{
    type: Component,
    args: [{ selector: "sg-doc-amount-cell", imports: [TranslateModule, HrmAmountCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.amountCell.title' | translate" [related]="[{label:('docs.amountCell.relStatistic' | translate), route:'hrm/data-display/statistic'}]"
      [desc]="'docs.amountCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <div class="w160"><hrm-amount-cell [value]="18500000" currency="\u20AB" /></div>
          <div class="w160"><hrm-amount-cell [value]="1500000" currency="\u20AB" [signed]="true" /></div>
          <div class="w160"><hrm-amount-cell [value]="-250000" currency="\u20AB" [signed]="true" /></div>
          <div class="w160"><hrm-amount-cell [value]="176" [currency]="'docs.amountCell.unitHour' | translate" /></div>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.amountCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.amountCell.behavior' | translate"
          [avoid]="'docs.amountCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.amountCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.amountCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.amountCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.amountCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.amountCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.amountCell.exSalaryT' | translate"
          [desc]="'docs.amountCell.exSalaryD' | translate">
          <sg-row [label]="'docs.amountCell.rowNetPay' | translate">
            <div class="col">
              <div class="w160"><hrm-amount-cell [value]="18500000" currency="\u20AB" /></div>
              <div class="w160"><hrm-amount-cell [value]="24000000" currency="\u20AB" /></div>
              <div class="w160"><hrm-amount-cell [value]="7250000" currency="\u20AB" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.amountCell.exBonusT' | translate"
          [desc]="'docs.amountCell.exBonusD' | translate">
          <sg-row [label]="'docs.amountCell.rowBonusPenalty' | translate">
            <div class="col">
              <div class="w160"><hrm-amount-cell [value]="2000000" currency="\u20AB" [signed]="true" /></div>
              <div class="w160"><hrm-amount-cell [value]="500000" currency="\u20AB" [signed]="true" /></div>
              <div class="w160"><hrm-amount-cell [value]="-300000" currency="\u20AB" [signed]="true" /></div>
              <div class="w160"><hrm-amount-cell [value]="-150000" currency="\u20AB" [signed]="true" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.amountCell.exHoursT' | translate"
          [desc]="'docs.amountCell.exHoursD' | translate">
          <sg-row [label]="'docs.amountCell.rowWorkHours' | translate">
            <div class="col">
              <div class="w160"><hrm-amount-cell [value]="176" [currency]="'docs.amountCell.unitHour' | translate" /></div>
              <div class="w160"><hrm-amount-cell [value]="184" [currency]="'docs.amountCell.unitHour' | translate" /></div>
              <div class="w160"><hrm-amount-cell [value]="22" [currency]="'docs.amountCell.unitDay' | translate" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.amountCell.exDiffT' | translate"
          [desc]="'docs.amountCell.exDiffD' | translate">
          <sg-row [label]="'docs.amountCell.rowDiff' | translate">
            <div class="col">
              <div class="w160"><hrm-amount-cell [value]="8" [currency]="'docs.amountCell.unitHour' | translate" [signed]="true" /></div>
              <div class="w160"><hrm-amount-cell [value]="-4" [currency]="'docs.amountCell.unitHour' | translate" [signed]="true" /></div>
              <div class="w160"><hrm-amount-cell [value]="1200000" currency="\u20AB" [signed]="true" /></div>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;7c1e67fa305f8bf3afcbf6085d9e23cadef878f0fcae4cc0526d2305863fefe8;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/amount-cell.ts */\n.w160 {\n  width: 160px;\n}\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=amount-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAmountCell, { className: "SgDocAmountCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/amount-cell.ts", lineNumber: 94 });
})();
export {
  SgDocAmountCell
};
//# sourceMappingURL=chunk-4TCTK4K4.js.map
