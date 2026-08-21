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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-date-cell.ts
function HrmDateCell_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.sub());
  }
}
var HrmDateCell = class _HrmDateCell {
  constructor() {
    this.value = input(null, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("date", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.locale = input("vi-VN", ...ngDevMode ? [{ debugName: "locale" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sub = input("", ...ngDevMode ? [{ debugName: "sub" }] : (
      /* istanbul ignore next */
      []
    ));
    this.main = computed(() => {
      const v = this.value();
      if (v == null || v === "")
        return "";
      const d = v instanceof Date ? v : new Date(v);
      if (isNaN(d.getTime()))
        return String(v);
      const opts = this.mode() === "time" ? { hour: "2-digit", minute: "2-digit" } : this.mode() === "datetime" ? { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" } : { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Intl.DateTimeFormat(this.locale(), opts).format(d);
    }, ...ngDevMode ? [{ debugName: "main" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmDateCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDateCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDateCell, selectors: [["hrm-date-cell"]], hostAttrs: [1, "hrm-date-cell"], inputs: { value: [1, "value"], mode: [1, "mode"], locale: [1, "locale"], sub: [1, "sub"] }, decls: 3, vars: 2, consts: [[1, "dc-main"], [1, "dc-sub"]], template: function HrmDateCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(2, HrmDateCell_Conditional_2_Template, 2, 1, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.main());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sub() ? 2 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.dc-main[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.dc-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=hrm-date-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDateCell, [{
    type: Component,
    args: [{ selector: "hrm-date-cell", template: `
    <span class="dc-main">{{ main() }}</span>
    @if (sub()) { <span class="dc-sub">{{ sub() }}</span> }
  `, host: { class: "hrm-date-cell" }, styles: ["/* angular:styles/component:css;da8be4df46052e2cd8d1d040c248d703eb6fafaa157c2ad7bbccd027508ea6ed;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-date-cell.ts */\n:host {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.dc-main {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n.dc-sub {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=hrm-date-cell.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], locale: [{ type: Input, args: [{ isSignal: true, alias: "locale", required: false }] }], sub: [{ type: Input, args: [{ isSignal: true, alias: "sub", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDateCell, { className: "HrmDateCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-date-cell.ts", lineNumber: 19 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/date-cell.ts
var SgDocDateCell = class _SgDocDateCell {
  constructor() {
    this.d1 = "2026-03-15";
    this.d2 = "2025-11-01";
    this.d3 = "2024-06-30";
    this.now = /* @__PURE__ */ new Date();
    this.clockIn = /* @__PURE__ */ new Date("2026-03-15T08:02:00");
    this.clockOut = /* @__PURE__ */ new Date("2026-03-15T17:31:00");
    this.when = [
      "docs.dateCell.when1",
      "docs.dateCell.when2",
      "docs.dateCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDateCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDateCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDateCell, selectors: [["sg-doc-date-cell"]], decls: 61, vars: 83, consts: [["category", "Table Cells", 3, "title", "desc"], ["sgOverview", ""], [3, "value"], ["mode", "datetime", 3, "value"], ["mode", "time", 3, "value", "sub"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["mode", "time", 3, "value"], [3, "value", "sub"], ["mode", "datetime", 3, "value", "sub"]], template: function SgDocDateCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row");
        \u0275\u0275element(5, "hrm-date-cell", 2)(6, "hrm-date-cell", 3)(7, "hrm-date-cell", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "sg-use", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "sg-do");
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
        \u0275\u0275elementStart(30, "div", 8)(31, "sg-example", 9);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row");
        \u0275\u0275element(35, "hrm-date-cell", 2)(36, "hrm-date-cell", 2)(37, "hrm-date-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "sg-example", 9);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row");
        \u0275\u0275element(42, "hrm-date-cell", 3)(43, "hrm-date-cell", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "sg-example", 9);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "sg-row", 10);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275element(49, "hrm-date-cell", 11)(50, "hrm-date-cell", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "sg-example", 9);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "sg-row");
        \u0275\u0275element(55, "hrm-date-cell", 12);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "hrm-date-cell", 13);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275element(59, "hrm-date-cell", 12);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 37, "docs.dateCell.title"))("desc", \u0275\u0275pipeBind1(2, 39, "docs.dateCell.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.d1);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.now);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.now)("sub", \u0275\u0275pipeBind1(8, 41, "docs.dateCell.subJustNow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 43, "docs.dateCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 45, "docs.dateCell.behavior"))("avoid", \u0275\u0275pipeBind1(13, 47, "docs.dateCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 49, "docs.dateCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 51, "docs.dateCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 53, "docs.dateCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 55, "docs.dateCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 57, "docs.dateCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 59, "docs.dateCell.exDateT"))("desc", \u0275\u0275pipeBind1(33, 61, "docs.dateCell.exDateD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.d1);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.d2);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.d3);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 63, "docs.dateCell.exDatetimeT"))("desc", \u0275\u0275pipeBind1(40, 65, "docs.dateCell.exDatetimeD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.now);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.d2);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(45, 67, "docs.dateCell.exTimeT"))("desc", \u0275\u0275pipeBind1(46, 69, "docs.dateCell.exTimeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 71, "docs.dateCell.rowClock"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.clockIn);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.clockOut);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(52, 73, "docs.dateCell.exSubT"))("desc", \u0275\u0275pipeBind1(53, 75, "docs.dateCell.exSubD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.d1)("sub", \u0275\u0275pipeBind1(56, 77, "docs.dateCell.sub3DaysAgo"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.now)("sub", \u0275\u0275pipeBind1(58, 79, "docs.dateCell.subJustNow"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.d2)("sub", \u0275\u0275pipeBind1(60, 81, "docs.dateCell.subYesterday"));
      }
    }, dependencies: [TranslateModule, HrmDateCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDateCell, [{
    type: Component,
    args: [{
      selector: "sg-doc-date-cell",
      imports: [TranslateModule, HrmDateCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Table Cells" [title]="'docs.dateCell.title' | translate"
      [desc]="'docs.dateCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-date-cell [value]="d1" />
          <hrm-date-cell [value]="now" mode="datetime" />
          <hrm-date-cell [value]="now" mode="time" [sub]="'docs.dateCell.subJustNow' | translate" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.dateCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.dateCell.behavior' | translate"
          [avoid]="'docs.dateCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.dateCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.dateCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.dateCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.dateCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.dateCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.dateCell.exDateT' | translate"
          [desc]="'docs.dateCell.exDateD' | translate">
          <sg-row>
            <hrm-date-cell [value]="d1" />
            <hrm-date-cell [value]="d2" />
            <hrm-date-cell [value]="d3" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dateCell.exDatetimeT' | translate"
          [desc]="'docs.dateCell.exDatetimeD' | translate">
          <sg-row>
            <hrm-date-cell [value]="now" mode="datetime" />
            <hrm-date-cell [value]="d2" mode="datetime" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dateCell.exTimeT' | translate"
          [desc]="'docs.dateCell.exTimeD' | translate">
          <sg-row [label]="'docs.dateCell.rowClock' | translate">
            <hrm-date-cell [value]="clockIn" mode="time" />
            <hrm-date-cell [value]="clockOut" mode="time" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dateCell.exSubT' | translate"
          [desc]="'docs.dateCell.exSubD' | translate">
          <sg-row>
            <hrm-date-cell [value]="d1" [sub]="'docs.dateCell.sub3DaysAgo' | translate" />
            <hrm-date-cell [value]="now" mode="datetime" [sub]="'docs.dateCell.subJustNow' | translate" />
            <hrm-date-cell [value]="d2" [sub]="'docs.dateCell.subYesterday' | translate" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDateCell, { className: "SgDocDateCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/date-cell.ts", lineNumber: 78 });
})();
export {
  SgDocDateCell
};
//# sourceMappingURL=chunk-TJYY7W56.js.map
