import {
  CHART_PERIOD_OPTS
} from "./chunk-7EZFLEAQ.js";
import {
  HrmCard
} from "./chunk-XHS464VI.js";
import "./chunk-CQQHL6Z5.js";
import {
  HrmChart,
  chartTokenReader
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
  CalendarStats,
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
  Input,
  computed,
  inject,
  input,
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/chart/hrm-attendance-heatmap.ts
var HrmAttendanceHeatmap = class _HrmAttendanceHeatmap {
  constructor() {
    this.xLabels = input([], ...ngDevMode ? [{ debugName: "xLabels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.yLabels = input([], ...ngDevMode ? [{ debugName: "yLabels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(null, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(300, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.option = computed(() => {
      const tk = chartTokenReader();
      const ramp = [tk("--seq-blue-1", "--data-2"), tk("--seq-blue-3", "--data-2"), tk("--seq-blue-5", "--data-2")].filter(Boolean);
      const maxV = this.max() ?? Math.max(...this.data().map((d) => d[2]), 1);
      return {
        tooltip: { position: "top" },
        grid: { left: 8, right: 12, top: 8, bottom: 60, containLabel: true },
        xAxis: { type: "category", data: this.xLabels(), splitArea: { show: true } },
        yAxis: { type: "category", data: this.yLabels(), splitArea: { show: true } },
        visualMap: {
          min: 0,
          max: maxV,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: 8,
          inRange: { color: ramp }
        },
        series: [{
          type: "heatmap",
          data: this.data(),
          label: { show: false },
          itemStyle: { borderColor: tk("--bg-surface", "--static-white"), borderWidth: 2, borderRadius: 3 }
        }]
      };
    }, ...ngDevMode ? [{ debugName: "option" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmAttendanceHeatmap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAttendanceHeatmap)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAttendanceHeatmap, selectors: [["hrm-attendance-heatmap"]], hostAttrs: [1, "hrm-attendance-heatmap"], inputs: { xLabels: [1, "xLabels"], yLabels: [1, "yLabels"], data: [1, "data"], max: [1, "max"], height: [1, "height"] }, decls: 1, vars: 2, consts: [[3, "option", "height"]], template: function HrmAttendanceHeatmap_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "hrm-chart", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("option", ctx.option())("height", ctx.height());
      }
    }, dependencies: [HrmChart], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAttendanceHeatmap, [{
    type: Component,
    args: [{
      selector: "hrm-attendance-heatmap",
      imports: [HrmChart],
      template: `<hrm-chart [option]="option()" [height]="height()" />`,
      host: { class: "hrm-attendance-heatmap" }
    }]
  }], null, { xLabels: [{ type: Input, args: [{ isSignal: true, alias: "xLabels", required: false }] }], yLabels: [{ type: Input, args: [{ isSignal: true, alias: "yLabels", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAttendanceHeatmap, { className: "HrmAttendanceHeatmap", filePath: "libs/hrm-ui/src/lib/chart/hrm-attendance-heatmap.ts", lineNumber: 15 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/attendance-heatmap.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/chart/tracker" });
var _c1 = (a0) => [a0];
var SgDocAttendanceHeatmap = class _SgDocAttendanceHeatmap {
  constructor() {
    this.t = inject(TranslateService);
    this.heatmapIcon = CalendarStats;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.hours = ["7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"];
    this.data = this.build();
    this.when = [
      "docs.attendanceHeatmap.when1",
      "docs.attendanceHeatmap.when2",
      "docs.attendanceHeatmap.when3"
    ];
  }
  get days() {
    return ["dMon", "dTue", "dWed", "dThu", "dFri", "dSat", "dSun"].map((k) => this.t.instant("docs.attendanceHeatmap." + k));
  }
  build() {
    const out = [];
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 12; x++) {
        const weekend = y >= 5;
        const peak = x === 1 || x === 2 || x === 10 || x === 11 ? 1 : x === 5 || x === 6 ? 0.5 : 0.7;
        const base = weekend ? 6 : 60;
        const v = Math.round(base * peak * (0.7 + (x * 7 + y * 3) % 6 / 10));
        out.push([x, y, v]);
      }
    }
    return out;
  }
  static {
    this.\u0275fac = function SgDocAttendanceHeatmap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAttendanceHeatmap)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAttendanceHeatmap, selectors: [["sg-doc-attendance-heatmap"]], decls: 37, vars: 64, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%"], [3, "xLabels", "yLabels", "data", "height"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "flex", "1", "min-width", "340px"], [3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"]], template: function SgDocAttendanceHeatmap_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2);
        \u0275\u0275element(6, "hrm-attendance-heatmap", 3);
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
        \u0275\u0275elementStart(26, "div", 2);
        \u0275\u0275element(27, "hrm-attendance-heatmap", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 9)(33, "hrm-card", 10);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "hrm-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocAttendanceHeatmap_Template_hrm_select_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "hrm-attendance-heatmap", 3);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 32, "docs.attendanceHeatmap.title"))("related", \u0275\u0275pureFunction1(62, _c1, \u0275\u0275pureFunction1(60, _c0, \u0275\u0275pipeBind1(2, 34, "docs.attendanceHeatmap.relTracker"))))("desc", \u0275\u0275pipeBind1(3, 36, "docs.attendanceHeatmap.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("xLabels", ctx.hours)("yLabels", ctx.days)("data", ctx.data)("height", 300);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 38, "docs.attendanceHeatmap.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 40, "docs.attendanceHeatmap.behavior"))("avoid", \u0275\u0275pipeBind1(11, 42, "docs.attendanceHeatmap.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "docs.attendanceHeatmap.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 46, "docs.attendanceHeatmap.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 48, "docs.attendanceHeatmap.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 50, "docs.attendanceHeatmap.exWeekT"))("desc", \u0275\u0275pipeBind1(25, 52, "docs.attendanceHeatmap.exWeekD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("xLabels", ctx.hours)("yLabels", ctx.days)("data", ctx.data)("height", 300);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 54, "docs.attendanceHeatmap.exCardT"))("desc", \u0275\u0275pipeBind1(30, 56, "docs.attendanceHeatmap.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.heatmapIcon)("title", \u0275\u0275pipeBind1(34, 58, "docs.attendanceHeatmap.cardTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("xLabels", ctx.hours)("yLabels", ctx.days)("data", ctx.data)("height", 280);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmAttendanceHeatmap, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAttendanceHeatmap, [{
    type: Component,
    args: [{
      selector: "sg-doc-attendance-heatmap",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmAttendanceHeatmap, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.attendanceHeatmap.title' | translate" [related]="[{label:('docs.attendanceHeatmap.relTracker' | translate), route:'hrm/chart/tracker'}]"
      [desc]="'docs.attendanceHeatmap.desc' | translate">

      <div sgOverview>
        <div style="width:100%">
          <hrm-attendance-heatmap [xLabels]="hours" [yLabels]="days" [data]="data" [height]="300" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.attendanceHeatmap.purpose' | translate"
          [when]="when"
          [behavior]="'docs.attendanceHeatmap.behavior' | translate"
          [avoid]="'docs.attendanceHeatmap.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.attendanceHeatmap.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.attendanceHeatmap.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.attendanceHeatmap.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.attendanceHeatmap.exWeekT' | translate"
          [desc]="'docs.attendanceHeatmap.exWeekD' | translate">
          <div style="width:100%">
            <hrm-attendance-heatmap [xLabels]="hours" [yLabels]="days" [data]="data" [height]="300" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.attendanceHeatmap.exCardT' | translate"
          [desc]="'docs.attendanceHeatmap.exCardD' | translate">
          <sg-row>
            <div style="flex:1;min-width:340px">
              <hrm-card [icon]="heatmapIcon" [title]="'docs.attendanceHeatmap.cardTitle' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-attendance-heatmap [xLabels]="hours" [yLabels]="days" [data]="data" [height]="280" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAttendanceHeatmap, { className: "SgDocAttendanceHeatmap", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/attendance-heatmap.ts", lineNumber: 62 });
})();
export {
  SgDocAttendanceHeatmap
};
//# sourceMappingURL=chunk-DHRRMCKY.js.map
