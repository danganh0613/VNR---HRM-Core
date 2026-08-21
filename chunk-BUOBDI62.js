import {
  CHART_PERIOD_OPTS
} from "./chunk-7EZFLEAQ.js";
import {
  HrmCard
} from "./chunk-XHS464VI.js";
import "./chunk-CQQHL6Z5.js";
import {
  HrmChart
} from "./chunk-IGN7GAYR.js";
import {
  HrmGrid
} from "./chunk-IHUB5HQS.js";
import "./chunk-U557YZUX.js";
import "./chunk-PSR5ADGK.js";
import "./chunk-KGPHHG27.js";
import "./chunk-JUFZRQMG.js";
import "./chunk-TUHU6AB5.js";
import {
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-NGY4ECW2.js";
import "./chunk-KLLXE4WM.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import "./chunk-BKAPBN54.js";
import "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
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
import {
  Table,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/chart-table.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/chart/echart" });
var _c1 = (a0) => ({ label: a0, route: "hrm/enterprise/grid" });
var _c2 = (a0, a1) => [a0, a1];
var SgDocChartTable = class _SgDocChartTable {
  constructor() {
    this.t = inject(TranslateService);
    this.tableIcon = Table;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.when = [
      "docs.chartTable.when1",
      "docs.chartTable.when2",
      "docs.chartTable.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.chartTable." + key);
  }
  get rows() {
    return [
      { dept: this.tr("deptTech"), head: 86, official: 72, probation: 14 },
      { dept: this.tr("deptSales"), head: 64, official: 54, probation: 10 },
      { dept: this.tr("deptHr"), head: 32, official: 28, probation: 4 },
      { dept: this.tr("deptFin"), head: 28, official: 24, probation: 4 },
      { dept: this.tr("deptAdmin"), head: 18, official: 15, probation: 3 }
    ];
  }
  get cols() {
    return [
      { key: "dept", title: this.tr("colDept") },
      { key: "head", title: this.tr("colTotal"), align: "right" },
      { key: "official", title: this.tr("colOfficial"), align: "right" },
      { key: "probation", title: this.tr("colProbation"), align: "right" }
    ];
  }
  get deptBar() {
    const rows = this.rows;
    return {
      tooltip: { trigger: "axis" },
      legend: { data: [this.tr("colOfficial"), this.tr("colProbation")], bottom: 0 },
      grid: { left: 8, right: 12, top: 16, bottom: 40, containLabel: true },
      xAxis: { type: "category", data: rows.map((r) => r.dept) },
      yAxis: { type: "value" },
      series: [
        { name: this.tr("colOfficial"), type: "bar", stack: "x", data: rows.map((r) => r.official) },
        { name: this.tr("colProbation"), type: "bar", stack: "x", data: rows.map((r) => r.probation) }
      ]
    };
  }
  get deptDonut() {
    const rows = this.rows;
    return {
      tooltip: { trigger: "item" },
      legend: { bottom: 0 },
      series: [{
        name: this.tr("sHeadcount"),
        type: "pie",
        radius: ["46%", "68%"],
        center: ["50%", "44%"],
        label: { formatter: "{d}%" },
        data: rows.map((r) => ({ value: r.head, name: r.dept }))
      }]
    };
  }
  static {
    this.\u0275fac = function SgDocChartTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocChartTable)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocChartTable, selectors: [["sg-doc-chart-table"]], decls: 45, vars: 81, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "icon", "title", "flush"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"], [3, "option", "height"], [2, "margin-top", "12px"], [3, "columns", "data", "showPagination"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "display", "flex", "gap", "16px", "flex-wrap", "wrap", "width", "100%"], [2, "flex", "1.2", "min-width", "300px"], [2, "flex", "1", "min-width", "300px"], [3, "icon", "title"]], template: function SgDocChartTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "div", 1)(6, "hrm-card", 2);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocChartTable_Template_hrm_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "hrm-chart", 4);
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "hrm-grid", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275element(13, "sg-use", 8);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9)(18, "sg-do");
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "sg-example", 11);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
        \u0275\u0275element(33, "hrm-chart", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 14);
        \u0275\u0275element(35, "hrm-grid", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "sg-example", 11);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "hrm-card", 15);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "hrm-select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocChartTable_Template_hrm_select_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "hrm-chart", 4);
        \u0275\u0275elementStart(43, "div", 5);
        \u0275\u0275element(44, "hrm-grid", 6);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 42, "docs.chartTable.title"))("related", \u0275\u0275pureFunction2(78, _c2, \u0275\u0275pureFunction1(74, _c0, \u0275\u0275pipeBind1(2, 44, "docs.chartTable.relChart")), \u0275\u0275pureFunction1(76, _c1, \u0275\u0275pipeBind1(3, 46, "docs.chartTable.relTable"))))("desc", \u0275\u0275pipeBind1(4, 48, "docs.chartTable.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("icon", ctx.tableIcon)("title", \u0275\u0275pipeBind1(7, 50, "docs.chartTable.cardDept"))("flush", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("option", ctx.deptBar)("height", 260);
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.cols)("data", ctx.rows)("showPagination", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(14, 52, "docs.chartTable.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(15, 54, "docs.chartTable.behavior"))("avoid", \u0275\u0275pipeBind1(16, 56, "docs.chartTable.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 58, "docs.chartTable.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 60, "docs.chartTable.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 62, "docs.chartTable.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 64, "docs.chartTable.exHorizT"))("desc", \u0275\u0275pipeBind1(30, 66, "docs.chartTable.exHorizD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("option", ctx.deptDonut)("height", 300);
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.cols)("data", ctx.rows)("showPagination", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 68, "docs.chartTable.exVertT"))("desc", \u0275\u0275pipeBind1(38, 70, "docs.chartTable.exVertD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.tableIcon)("title", \u0275\u0275pipeBind1(40, 72, "docs.chartTable.cardStructure"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("option", ctx.deptBar)("height", 240);
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.cols)("data", ctx.rows)("showPagination", false);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmChart, HrmCard, HrmGrid, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocChartTable, [{
    type: Component,
    args: [{
      selector: "sg-doc-chart-table",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmChart, HrmCard, HrmGrid, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample],
      template: `
    <sg-doc category="Chart" [title]="'docs.chartTable.title' | translate" [related]="[{label:('docs.chartTable.relChart' | translate), route:'hrm/chart/echart'},{label:('docs.chartTable.relTable' | translate), route:'hrm/enterprise/grid'}]"
      [desc]="'docs.chartTable.desc' | translate">

      <div sgOverview>
        <hrm-card [icon]="tableIcon" [title]="'docs.chartTable.cardDept' | translate" [flush]="false">
          <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
          <hrm-chart [option]="deptBar" [height]="260" />
          <div style="margin-top:12px">
            <hrm-grid [columns]="cols" [data]="rows" [showPagination]="false" />
          </div>
        </hrm-card>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.chartTable.purpose' | translate"
          [when]="when"
          [behavior]="'docs.chartTable.behavior' | translate"
          [avoid]="'docs.chartTable.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.chartTable.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.chartTable.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.chartTable.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.chartTable.exHorizT' | translate"
          [desc]="'docs.chartTable.exHorizD' | translate">
          <div style="display:flex;gap:16px;flex-wrap:wrap;width:100%">
            <div style="flex:1.2;min-width:300px"><hrm-chart [option]="deptDonut" [height]="300" /></div>
            <div style="flex:1;min-width:300px"><hrm-grid [columns]="cols" [data]="rows" [showPagination]="false" /></div>
          </div>
        </sg-example>

        <sg-example [title]="'docs.chartTable.exVertT' | translate"
          [desc]="'docs.chartTable.exVertD' | translate">
          <hrm-card [icon]="tableIcon" [title]="'docs.chartTable.cardStructure' | translate">
            <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
            <hrm-chart [option]="deptBar" [height]="240" />
            <div style="margin-top:12px"><hrm-grid [columns]="cols" [data]="rows" [showPagination]="false" /></div>
          </hrm-card>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocChartTable, { className: "SgDocChartTable", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/chart-table.ts", lineNumber: 67 });
})();
export {
  SgDocChartTable
};
//# sourceMappingURL=chunk-BUOBDI62.js.map
