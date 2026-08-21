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
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
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
  ChartDonut,
  ChartLine,
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/echart.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/stat-card" });
var _c1 = (a0) => ({ label: a0, route: "hrm/chart/chart-table" });
var _c2 = (a0, a1) => [a0, a1];
var SgDocEChart = class _SgDocEChart {
  constructor() {
    this.t = inject(TranslateService);
    this.lineIcon = ChartLine;
    this.donutIcon = ChartDonut;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.when = [
      "docs.echart.when1",
      "docs.echart.when2",
      "docs.echart.when3"
    ];
    this.months = ["T1", "T2", "T3", "T4", "T5", "T6"];
  }
  tr(key) {
    return this.t.instant("docs.echart." + key);
  }
  get lineArea() {
    return {
      tooltip: { trigger: "axis" },
      legend: { data: [this.tr("sOnTime"), this.tr("sLate")], bottom: 0 },
      grid: { left: 8, right: 12, top: 16, bottom: 40, containLabel: true },
      xAxis: { type: "category", boundaryGap: false, data: this.months },
      yAxis: { type: "value" },
      series: [
        { name: this.tr("sOnTime"), type: "line", smooth: true, areaStyle: { opacity: 0.1 }, data: [1180, 1210, 1195, 1240, 1260, 1248] },
        { name: this.tr("sLate"), type: "line", smooth: true, data: [120, 96, 108, 78, 64, 86] }
      ]
    };
  }
  get bar() {
    return {
      tooltip: { trigger: "axis" },
      grid: { left: 8, right: 12, top: 20, bottom: 8, containLabel: true },
      xAxis: { type: "category", data: [this.tr("deptTech"), this.tr("deptSales"), this.tr("deptHr"), this.tr("deptFin"), this.tr("deptAdmin")] },
      yAxis: { type: "value" },
      series: [{ name: this.tr("sHeadcount"), type: "bar", barWidth: "52%", data: [86, 64, 32, 28, 18] }]
    };
  }
  get stacked() {
    return {
      tooltip: { trigger: "axis" },
      legend: { data: [this.tr("sOfficial"), this.tr("sProbation")], bottom: 0 },
      grid: { left: 8, right: 12, top: 16, bottom: 40, containLabel: true },
      xAxis: { type: "category", data: [this.tr("deptTech"), this.tr("deptSales"), this.tr("deptHr"), this.tr("deptFin")] },
      yAxis: { type: "value" },
      series: [
        { name: this.tr("sOfficial"), type: "bar", stack: "x", data: [72, 54, 28, 24] },
        { name: this.tr("sProbation"), type: "bar", stack: "x", data: [14, 10, 4, 4] }
      ]
    };
  }
  get pie() {
    return {
      tooltip: { trigger: "item" },
      legend: { bottom: 0 },
      series: [{
        name: this.tr("sContractType"),
        type: "pie",
        radius: "64%",
        center: ["50%", "44%"],
        data: [
          { value: 182, name: this.tr("sOfficial") },
          { value: 34, name: this.tr("sProbation") },
          { value: 22, name: this.tr("sSeasonal") },
          { value: 10, name: this.tr("sIntern") }
        ]
      }]
    };
  }
  get donut() {
    return {
      tooltip: { trigger: "item" },
      legend: { bottom: 0 },
      series: [{
        name: this.tr("sContractType"),
        type: "pie",
        radius: ["46%", "68%"],
        center: ["50%", "44%"],
        label: { show: true, formatter: "{d}%" },
        data: [
          { value: 182, name: this.tr("sOfficial") },
          { value: 34, name: this.tr("sProbation") },
          { value: 22, name: this.tr("sSeasonal") },
          { value: 10, name: this.tr("sIntern") }
        ]
      }]
    };
  }
  get combo() {
    return {
      tooltip: { trigger: "axis" },
      legend: { data: [this.tr("sLeaveReq"), this.tr("sApprovalRate")], bottom: 0 },
      grid: { left: 8, right: 12, top: 16, bottom: 40, containLabel: true },
      xAxis: { type: "category", data: this.months },
      yAxis: [
        { type: "value", name: this.tr("axisReq") },
        { type: "value", name: "%", min: 0, max: 100, axisLabel: { formatter: "{value}%" } }
      ],
      series: [
        { name: this.tr("sLeaveReq"), type: "bar", barWidth: "48%", data: [48, 62, 55, 40, 33, 42] },
        { name: this.tr("sApprovalRate"), type: "line", yAxisIndex: 1, smooth: true, data: [88, 84, 90, 92, 95, 91] }
      ]
    };
  }
  static {
    this.\u0275fac = function SgDocEChart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocEChart)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocEChart, selectors: [["sg-doc-echart"]], decls: 64, vars: 101, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%"], [3, "option", "height"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "flex", "1", "min-width", "280px"], [2, "flex", "1", "min-width", "260px"], [2, "flex", "1", "min-width", "300px"], [3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"]], template: function SgDocEChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "div", 1)(6, "div", 2);
        \u0275\u0275element(7, "hrm-chart", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "sg-use", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6)(14, "sg-do");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-dont");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "sg-example", 8);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "div", 2);
        \u0275\u0275element(28, "hrm-chart", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 9);
        \u0275\u0275element(34, "hrm-chart", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 9);
        \u0275\u0275element(36, "hrm-chart", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "sg-example", 8);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "div", 10);
        \u0275\u0275element(42, "hrm-chart", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 10);
        \u0275\u0275element(44, "hrm-chart", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "sg-example", 8);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "div", 2);
        \u0275\u0275element(49, "hrm-chart", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "sg-example", 8);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementStart(53, "sg-row")(54, "div", 11)(55, "hrm-card", 12);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "hrm-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocEChart_Template_hrm_select_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(58, "hrm-chart", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 11)(60, "hrm-card", 12);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "hrm-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocEChart_Template_hrm_select_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "hrm-chart", 3);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 50, "docs.echart.title"))("related", \u0275\u0275pureFunction2(98, _c2, \u0275\u0275pureFunction1(94, _c0, \u0275\u0275pipeBind1(2, 52, "docs.echart.relStat")), \u0275\u0275pureFunction1(96, _c1, \u0275\u0275pipeBind1(3, 54, "docs.echart.relChartTable"))))("desc", \u0275\u0275pipeBind1(4, 56, "docs.echart.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275property("option", ctx.lineArea)("height", 300);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 58, "docs.echart.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 60, "docs.echart.behavior"))("avoid", \u0275\u0275pipeBind1(12, 62, "docs.echart.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 64, "docs.echart.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 66, "docs.echart.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 68, "docs.echart.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 70, "docs.echart.exLineT"))("desc", \u0275\u0275pipeBind1(26, 72, "docs.echart.exLineD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("option", ctx.lineArea)("height", 300);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 74, "docs.echart.exBarT"))("desc", \u0275\u0275pipeBind1(31, 76, "docs.echart.exBarD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("option", ctx.bar)("height", 280);
        \u0275\u0275advance(2);
        \u0275\u0275property("option", ctx.stacked)("height", 280);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 78, "docs.echart.exPieT"))("desc", \u0275\u0275pipeBind1(39, 80, "docs.echart.exPieD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("option", ctx.pie)("height", 280);
        \u0275\u0275advance(2);
        \u0275\u0275property("option", ctx.donut)("height", 280);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 82, "docs.echart.exComboT"))("desc", \u0275\u0275pipeBind1(47, 84, "docs.echart.exComboD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("option", ctx.combo)("height", 320);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(51, 86, "docs.echart.exCardT"))("desc", \u0275\u0275pipeBind1(52, 88, "docs.echart.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.lineIcon)("title", \u0275\u0275pipeBind1(56, 90, "docs.echart.cardAttendance"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("option", ctx.lineArea)("height", 240);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.donutIcon)("title", \u0275\u0275pipeBind1(61, 92, "docs.echart.cardContract"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("option", ctx.donut)("height", 240);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmChart, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocEChart, [{
    type: Component,
    args: [{
      selector: "sg-doc-echart",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmChart, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.echart.title' | translate" [related]="[{label:('docs.echart.relStat' | translate), route:'hrm/data-display/stat-card'},{label:('docs.echart.relChartTable' | translate), route:'hrm/chart/chart-table'}]"
      [desc]="'docs.echart.desc' | translate">

      <div sgOverview>
        <div style="width:100%"><hrm-chart [option]="lineArea" [height]="300" /></div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.echart.purpose' | translate"
          [when]="when"
          [behavior]="'docs.echart.behavior' | translate"
          [avoid]="'docs.echart.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.echart.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.echart.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.echart.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.echart.exLineT' | translate"
          [desc]="'docs.echart.exLineD' | translate">
          <div style="width:100%"><hrm-chart [option]="lineArea" [height]="300" /></div>
        </sg-example>

        <sg-example [title]="'docs.echart.exBarT' | translate"
          [desc]="'docs.echart.exBarD' | translate">
          <sg-row>
            <div style="flex:1;min-width:280px"><hrm-chart [option]="bar" [height]="280" /></div>
            <div style="flex:1;min-width:280px"><hrm-chart [option]="stacked" [height]="280" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.echart.exPieT' | translate"
          [desc]="'docs.echart.exPieD' | translate">
          <sg-row>
            <div style="flex:1;min-width:260px"><hrm-chart [option]="pie" [height]="280" /></div>
            <div style="flex:1;min-width:260px"><hrm-chart [option]="donut" [height]="280" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.echart.exComboT' | translate"
          [desc]="'docs.echart.exComboD' | translate">
          <div style="width:100%"><hrm-chart [option]="combo" [height]="320" /></div>
        </sg-example>

        <sg-example [title]="'docs.echart.exCardT' | translate"
          [desc]="'docs.echart.exCardD' | translate">
          <sg-row>
            <div style="flex:1;min-width:300px">
              <hrm-card [icon]="lineIcon" [title]="'docs.echart.cardAttendance' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-chart [option]="lineArea" [height]="240" />
              </hrm-card>
            </div>
            <div style="flex:1;min-width:300px">
              <hrm-card [icon]="donutIcon" [title]="'docs.echart.cardContract' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-chart [option]="donut" [height]="240" />
              </hrm-card>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocEChart, { className: "SgDocEChart", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/echart.ts", lineNumber: 86 });
})();
export {
  SgDocEChart
};
//# sourceMappingURL=chunk-LP2QOGMZ.js.map
