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
  Minus,
  TablerIconComponent,
  TrendingDown,
  TrendingUp
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-trend-cell.ts
function HrmTrendCell_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value());
  }
}
var HrmTrendCell = class _HrmTrendCell {
  constructor() {
    this.value = input("", ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.delta = input(0, ...ngDevMode ? [{ debugName: "delta" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unit = input("%", ...ngDevMode ? [{ debugName: "unit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showValue = input(true, ...ngDevMode ? [{ debugName: "showValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dir = computed(() => this.delta() > 0 ? "up" : this.delta() < 0 ? "down" : "flat", ...ngDevMode ? [{ debugName: "dir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = computed(() => this.delta() > 0 ? TrendingUp : this.delta() < 0 ? TrendingDown : Minus, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deltaDisplay = computed(() => {
      const d = this.delta();
      const sign = d > 0 ? "+" : d < 0 ? "\u2212" : "";
      return `${sign}${Math.abs(d)}${this.unit()}`;
    }, ...ngDevMode ? [{ debugName: "deltaDisplay" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTrendCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTrendCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTrendCell, selectors: [["hrm-trend-cell"]], hostAttrs: [1, "hrm-trend-cell"], inputs: { value: [1, "value"], delta: [1, "delta"], unit: [1, "unit"], showValue: [1, "showValue"] }, decls: 5, vars: 5, consts: [[1, "tr-val"], [1, "tr-delta"], [3, "icon", "size"], [1, "tr-num"]], template: function HrmTrendCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmTrendCell_Conditional_0_Template, 2, 1, "span", 0);
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275element(2, "tabler-icon", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showValue() && ctx.value() !== "" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("data-dir", ctx.dir());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icon())("size", 14);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.deltaDisplay());
      }
    }, dependencies: [TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.tr-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.tr-delta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n.tr-delta[data-dir=up][_ngcontent-%COMP%] {\n  color: var(--success-base);\n}\n.tr-delta[data-dir=down][_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n.tr-delta[data-dir=flat][_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-trend-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTrendCell, [{
    type: Component,
    args: [{ selector: "hrm-trend-cell", imports: [TablerIconComponent], template: `
    @if (showValue() && value() !== '') { <span class="tr-val">{{ value() }}</span> }
    <span class="tr-delta" [attr.data-dir]="dir()">
      <tabler-icon [icon]="icon()" [size]="14" />
      <span class="tr-num">{{ deltaDisplay() }}</span>
    </span>
  `, host: { class: "hrm-trend-cell" }, styles: ["/* angular:styles/component:css;fd8958c7d611183646989ab650da11fb9e3c5a3e854645aa18ad0a4d2ccb6fd2;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-trend-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.tr-val {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.tr-delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  font-variant-numeric: tabular-nums;\n}\n.tr-delta[data-dir=up] {\n  color: var(--success-base);\n}\n.tr-delta[data-dir=down] {\n  color: var(--error-base);\n}\n.tr-delta[data-dir=flat] {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-trend-cell.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], delta: [{ type: Input, args: [{ isSignal: true, alias: "delta", required: false }] }], unit: [{ type: Input, args: [{ isSignal: true, alias: "unit", required: false }] }], showValue: [{ type: Input, args: [{ isSignal: true, alias: "showValue", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTrendCell, { className: "HrmTrendCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-trend-cell.ts", lineNumber: 27 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/trend-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/statistic" });
var _c1 = (a0) => [a0];
var SgDocTrendCell = class _SgDocTrendCell {
  constructor() {
    this.when = [
      "docs.trendCell.when1",
      "docs.trendCell.when2",
      "docs.trendCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTrendCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTrendCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTrendCell, selectors: [["sg-doc-trend-cell"]], decls: 69, vars: 118, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "value", "delta"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "delta", "showValue"], [3, "value", "delta", "unit"], [1, "col"]], template: function SgDocTrendCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-trend-cell", 2)(7, "hrm-trend-cell", 2)(8, "hrm-trend-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275element(10, "sg-use", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-dont");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 6)(31, "sg-example", 7);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275element(36, "hrm-trend-cell", 2)(37, "hrm-trend-cell", 2)(38, "hrm-trend-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "sg-example", 7);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row");
        \u0275\u0275element(43, "hrm-trend-cell", 9)(44, "hrm-trend-cell", 9)(45, "hrm-trend-cell", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "sg-example", 7);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row", 8);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275element(51, "hrm-trend-cell", 10);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275element(53, "hrm-trend-cell", 10);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275element(55, "hrm-trend-cell", 10);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "sg-example", 7);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "sg-row")(61, "div", 11);
        \u0275\u0275element(62, "hrm-trend-cell", 10);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275element(64, "hrm-trend-cell", 2)(65, "hrm-trend-cell", 10);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275element(67, "hrm-trend-cell", 10);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 60, "docs.trendCell.title"))("related", \u0275\u0275pureFunction1(116, _c1, \u0275\u0275pureFunction1(114, _c0, \u0275\u0275pipeBind1(2, 62, "docs.trendCell.relStatistic"))))("desc", \u0275\u0275pipeBind1(3, 64, "docs.trendCell.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("value", 248)("delta", 12);
        \u0275\u0275advance();
        \u0275\u0275property("value", 216)("delta", -8);
        \u0275\u0275advance();
        \u0275\u0275property("value", 180)("delta", 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 66, "docs.trendCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 68, "docs.trendCell.behavior"))("avoid", \u0275\u0275pipeBind1(13, 70, "docs.trendCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 72, "docs.trendCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 74, "docs.trendCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 76, "docs.trendCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 78, "docs.trendCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 80, "docs.trendCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 82, "docs.trendCell.exPctT"))("desc", \u0275\u0275pipeBind1(33, 84, "docs.trendCell.exPctD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(35, 86, "docs.trendCell.rowThreeDir"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 92)("delta", 5);
        \u0275\u0275advance();
        \u0275\u0275property("value", 78)("delta", -6);
        \u0275\u0275advance();
        \u0275\u0275property("value", 85)("delta", 0);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 88, "docs.trendCell.exDeltaOnlyT"))("desc", \u0275\u0275pipeBind1(41, 90, "docs.trendCell.exDeltaOnlyD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("delta", 12)("showValue", false);
        \u0275\u0275advance();
        \u0275\u0275property("delta", -4)("showValue", false);
        \u0275\u0275advance();
        \u0275\u0275property("delta", 0)("showValue", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 92, "docs.trendCell.exUnitT"))("desc", \u0275\u0275pipeBind1(48, 94, "docs.trendCell.exUnitD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(50, 96, "docs.trendCell.rowUnits"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 124)("delta", 7)("unit", \u0275\u0275pipeBind1(52, 98, "docs.trendCell.unitPeople"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 118)("delta", -3)("unit", \u0275\u0275pipeBind1(54, 100, "docs.trendCell.unitPeople"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 160)("delta", 12)("unit", \u0275\u0275pipeBind1(56, 102, "docs.trendCell.unitHours"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 104, "docs.trendCell.exColumnT"))("desc", \u0275\u0275pipeBind1(59, 106, "docs.trendCell.exColumnD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 248)("delta", 12)("unit", \u0275\u0275pipeBind1(63, 108, "docs.trendCell.unitPeople"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 96)("delta", 2);
        \u0275\u0275advance();
        \u0275\u0275property("value", 4)("delta", -1)("unit", \u0275\u0275pipeBind1(66, 110, "docs.trendCell.unitPeople"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 320)("delta", 0)("unit", \u0275\u0275pipeBind1(68, 112, "docs.trendCell.unitHours"));
      }
    }, dependencies: [TranslateModule, HrmTrendCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=trend-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTrendCell, [{
    type: Component,
    args: [{ selector: "sg-doc-trend-cell", imports: [TranslateModule, HrmTrendCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.trendCell.title' | translate" [related]="[{label:('docs.trendCell.relStatistic' | translate), route:'hrm/data-display/statistic'}]"
      [desc]="'docs.trendCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-trend-cell [value]="248" [delta]="12" />
          <hrm-trend-cell [value]="216" [delta]="-8" />
          <hrm-trend-cell [value]="180" [delta]="0" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.trendCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.trendCell.behavior' | translate"
          [avoid]="'docs.trendCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.trendCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.trendCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.trendCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.trendCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.trendCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.trendCell.exPctT' | translate"
          [desc]="'docs.trendCell.exPctD' | translate">
          <sg-row [label]="'docs.trendCell.rowThreeDir' | translate">
            <hrm-trend-cell [value]="92" [delta]="5" />
            <hrm-trend-cell [value]="78" [delta]="-6" />
            <hrm-trend-cell [value]="85" [delta]="0" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.trendCell.exDeltaOnlyT' | translate"
          [desc]="'docs.trendCell.exDeltaOnlyD' | translate">
          <sg-row>
            <hrm-trend-cell [delta]="12" [showValue]="false" />
            <hrm-trend-cell [delta]="-4" [showValue]="false" />
            <hrm-trend-cell [delta]="0" [showValue]="false" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.trendCell.exUnitT' | translate"
          [desc]="'docs.trendCell.exUnitD' | translate">
          <sg-row [label]="'docs.trendCell.rowUnits' | translate">
            <hrm-trend-cell [value]="124" [delta]="7" [unit]="'docs.trendCell.unitPeople' | translate" />
            <hrm-trend-cell [value]="118" [delta]="-3" [unit]="'docs.trendCell.unitPeople' | translate" />
            <hrm-trend-cell [value]="160" [delta]="12" [unit]="'docs.trendCell.unitHours' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.trendCell.exColumnT' | translate"
          [desc]="'docs.trendCell.exColumnD' | translate">
          <sg-row>
            <div class="col">
              <hrm-trend-cell [value]="248" [delta]="12" [unit]="'docs.trendCell.unitPeople' | translate" />
              <hrm-trend-cell [value]="96" [delta]="2" />
              <hrm-trend-cell [value]="4" [delta]="-1" [unit]="'docs.trendCell.unitPeople' | translate" />
              <hrm-trend-cell [value]="320" [delta]="0" [unit]="'docs.trendCell.unitHours' | translate" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;64b37c3b65b9958fe7af5ff8565d208752985a1610f992015853471dd0c65207;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/trend-cell.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=trend-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTrendCell, { className: "SgDocTrendCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/trend-cell.ts", lineNumber: 84 });
})();
export {
  SgDocTrendCell
};
//# sourceMappingURL=chunk-FI3F7GDW.js.map
