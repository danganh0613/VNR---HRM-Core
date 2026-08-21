import {
  HrmProgressCell
} from "./chunk-JKQTIUU3.js";
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/progress-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/feedback/progress" });
var _c1 = (a0) => [a0];
var SgDocProgressCell = class _SgDocProgressCell {
  constructor() {
    this.when = [
      "docs.progressCell.when1",
      "docs.progressCell.when2",
      "docs.progressCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocProgressCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocProgressCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocProgressCell, selectors: [["sg-doc-progress-cell"]], decls: 82, vars: 92, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [1, "w"], [3, "value"], ["color", "amber", 3, "value"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [1, "col"], [3, "label"], ["color", "red", 3, "value"], ["color", "green", 3, "value"], ["color", "blue", 3, "label", "value"], ["color", "amber", 3, "label", "value"], ["color", "red", 3, "label", "value"], ["color", "green", 3, "value", "showValue"], [3, "value", "showValue"], ["color", "amber", 3, "value", "showValue"]], template: function SgDocProgressCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row")(6, "div", 2);
        \u0275\u0275element(7, "hrm-progress-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275element(9, "hrm-progress-cell", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "sg-use", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "sg-do");
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
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "sg-dont");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 8)(32, "sg-example", 9);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "sg-row")(36, "div", 10)(37, "div", 2);
        \u0275\u0275element(38, "hrm-progress-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 2);
        \u0275\u0275element(40, "hrm-progress-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 2);
        \u0275\u0275element(42, "hrm-progress-cell", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 2);
        \u0275\u0275element(44, "hrm-progress-cell", 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "sg-example", 9);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row", 11);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "div", 10)(51, "div", 2);
        \u0275\u0275element(52, "hrm-progress-cell", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 2);
        \u0275\u0275element(54, "hrm-progress-cell", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 2);
        \u0275\u0275element(56, "hrm-progress-cell", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "sg-example", 9);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "sg-row")(61, "div", 10)(62, "div", 2);
        \u0275\u0275element(63, "hrm-progress-cell", 14);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 2);
        \u0275\u0275element(66, "hrm-progress-cell", 15);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 2);
        \u0275\u0275element(69, "hrm-progress-cell", 16);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(71, "sg-example", 9);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementStart(74, "sg-row")(75, "div", 10)(76, "div", 2);
        \u0275\u0275element(77, "hrm-progress-cell", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 2);
        \u0275\u0275element(79, "hrm-progress-cell", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 2);
        \u0275\u0275element(81, "hrm-progress-cell", 19);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 42, "docs.progressCell.title"))("related", \u0275\u0275pureFunction1(90, _c1, \u0275\u0275pureFunction1(88, _c0, \u0275\u0275pipeBind1(2, 44, "docs.progressCell.relProgress"))))("desc", \u0275\u0275pipeBind1(3, 46, "docs.progressCell.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275property("value", 72);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 35);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 48, "docs.progressCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 50, "docs.progressCell.behavior"))("avoid", \u0275\u0275pipeBind1(14, 52, "docs.progressCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 54, "docs.progressCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 56, "docs.progressCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 58, "docs.progressCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 60, "docs.progressCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 62, "docs.progressCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 64, "docs.progressCell.exGoalT"))("desc", \u0275\u0275pipeBind1(34, 66, "docs.progressCell.exGoalD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("value", 92);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 68);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 41);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 15);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 68, "docs.progressCell.exThresholdT"))("desc", \u0275\u0275pipeBind1(47, 70, "docs.progressCell.exThresholdD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 72, "docs.progressCell.rowThreshold"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 22);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 55);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 88);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 74, "docs.progressCell.exLabelT"))("desc", \u0275\u0275pipeBind1(59, 76, "docs.progressCell.exLabelD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(64, 78, "docs.progressCell.lblStorage"))("value", 47);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(67, 80, "docs.progressCell.lblStorage"))("value", 83);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(70, 82, "docs.progressCell.lblStorage"))("value", 96);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(72, 84, "docs.progressCell.exBarT"))("desc", \u0275\u0275pipeBind1(73, 86, "docs.progressCell.exBarD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("value", 78)("showValue", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 52)("showValue", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 29)("showValue", false);
      }
    }, dependencies: [TranslateModule, HrmProgressCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.w[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=progress-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocProgressCell, [{
    type: Component,
    args: [{ selector: "sg-doc-progress-cell", imports: [TranslateModule, HrmProgressCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.progressCell.title' | translate" [related]="[{label:('docs.progressCell.relProgress' | translate), route:'hrm/feedback/progress'}]"
      [desc]="'docs.progressCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <div class="w"><hrm-progress-cell [value]="72" /></div>
          <div class="w"><hrm-progress-cell [value]="35" color="amber" /></div>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.progressCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.progressCell.behavior' | translate"
          [avoid]="'docs.progressCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.progressCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.progressCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.progressCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.progressCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.progressCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.progressCell.exGoalT' | translate"
          [desc]="'docs.progressCell.exGoalD' | translate">
          <sg-row>
            <div class="col">
              <div class="w"><hrm-progress-cell [value]="92" /></div>
              <div class="w"><hrm-progress-cell [value]="68" /></div>
              <div class="w"><hrm-progress-cell [value]="41" /></div>
              <div class="w"><hrm-progress-cell [value]="15" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.progressCell.exThresholdT' | translate"
          [desc]="'docs.progressCell.exThresholdD' | translate">
          <sg-row [label]="'docs.progressCell.rowThreshold' | translate">
            <div class="col">
              <div class="w"><hrm-progress-cell [value]="22" color="red" /></div>
              <div class="w"><hrm-progress-cell [value]="55" color="amber" /></div>
              <div class="w"><hrm-progress-cell [value]="88" color="green" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.progressCell.exLabelT' | translate"
          [desc]="'docs.progressCell.exLabelD' | translate">
          <sg-row>
            <div class="col">
              <div class="w"><hrm-progress-cell [label]="'docs.progressCell.lblStorage' | translate" [value]="47" color="blue" /></div>
              <div class="w"><hrm-progress-cell [label]="'docs.progressCell.lblStorage' | translate" [value]="83" color="amber" /></div>
              <div class="w"><hrm-progress-cell [label]="'docs.progressCell.lblStorage' | translate" [value]="96" color="red" /></div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.progressCell.exBarT' | translate"
          [desc]="'docs.progressCell.exBarD' | translate">
          <sg-row>
            <div class="col">
              <div class="w"><hrm-progress-cell [value]="78" [showValue]="false" color="green" /></div>
              <div class="w"><hrm-progress-cell [value]="52" [showValue]="false" /></div>
              <div class="w"><hrm-progress-cell [value]="29" [showValue]="false" color="amber" /></div>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;ba0c411a4055583d4a6088061c0d172cf11da56f1e46748572a964da955965ff;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/progress-cell.ts */\n.w {\n  width: 240px;\n}\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=progress-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocProgressCell, { className: "SgDocProgressCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/progress-cell.ts", lineNumber: 92 });
})();
export {
  SgDocProgressCell
};
//# sourceMappingURL=chunk-YX3NJXOQ.js.map
