import {
  CHART_PERIOD_OPTS
} from "./chunk-7EZFLEAQ.js";
import {
  HrmKpiGauge
} from "./chunk-E2PSBEUF.js";
import "./chunk-MJMMZ5ZY.js";
import {
  HrmCard
} from "./chunk-XPLMSQMT.js";
import "./chunk-PRQ7GH7J.js";
import {
  HrmSelect
} from "./chunk-BI6MDT2Y.js";
import "./chunk-OVPA4RAH.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-7IBNPHRP.js";
import "./chunk-EGUSTVRG.js";
import "./chunk-ZUH7BZUU.js";
import "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  Gauge,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/kpi-gauge.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/stat-card" });
var _c1 = (a0) => [a0];
var SgDocKpiGauge = class _SgDocKpiGauge {
  constructor() {
    this.gaugeIcon = Gauge;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.when = [
      "docs.kpiGauge.when1",
      "docs.kpiGauge.when2",
      "docs.kpiGauge.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocKpiGauge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocKpiGauge)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocKpiGauge, selectors: [["sg-doc-kpi-gauge"]], decls: 48, vars: 72, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "220px"], [3, "value", "label"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "200px"], [2, "flex", "1", "min-width", "240px"], [3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"]], template: function SgDocKpiGauge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row")(6, "div", 2);
        \u0275\u0275element(7, "hrm-kpi-gauge", 3);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275element(10, "sg-use", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 7)(25, "sg-example", 8);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row")(29, "div", 9);
        \u0275\u0275element(30, "hrm-kpi-gauge", 3);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 9);
        \u0275\u0275element(33, "hrm-kpi-gauge", 3);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 9);
        \u0275\u0275element(36, "hrm-kpi-gauge", 3);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "sg-example", 8);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row")(42, "div", 10)(43, "hrm-card", 11);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "hrm-select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocKpiGauge_Template_hrm_select_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "hrm-kpi-gauge", 3);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 30, "docs.kpiGauge.title"))("related", \u0275\u0275pureFunction1(70, _c1, \u0275\u0275pureFunction1(68, _c0, \u0275\u0275pipeBind1(2, 32, "docs.kpiGauge.relStat"))))("desc", \u0275\u0275pipeBind1(3, 34, "docs.kpiGauge.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275property("value", 78)("label", \u0275\u0275pipeBind1(8, 36, "docs.kpiGauge.lblKpi"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 38, "docs.kpiGauge.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 40, "docs.kpiGauge.behavior"))("avoid", \u0275\u0275pipeBind1(13, 42, "docs.kpiGauge.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 44, "docs.kpiGauge.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 46, "docs.kpiGauge.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 48, "docs.kpiGauge.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 50, "docs.kpiGauge.exLevelsT"))("desc", \u0275\u0275pipeBind1(27, 52, "docs.kpiGauge.exLevelsD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 38)("label", \u0275\u0275pipeBind1(31, 54, "docs.kpiGauge.lblRecruit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 64)("label", \u0275\u0275pipeBind1(34, 56, "docs.kpiGauge.lblTraining"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 88)("label", \u0275\u0275pipeBind1(37, 58, "docs.kpiGauge.lblAttendance"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 60, "docs.kpiGauge.exCardT"))("desc", \u0275\u0275pipeBind1(40, 62, "docs.kpiGauge.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.gaugeIcon)("title", \u0275\u0275pipeBind1(44, 64, "docs.kpiGauge.cardTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("value", 72)("label", \u0275\u0275pipeBind1(47, 66, "docs.kpiGauge.lblCompany"));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmKpiGauge, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocKpiGauge, [{
    type: Component,
    args: [{
      selector: "sg-doc-kpi-gauge",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmKpiGauge, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.kpiGauge.title' | translate" [related]="[{label:('docs.kpiGauge.relStat' | translate), route:'hrm/data-display/stat-card'}]"
      [desc]="'docs.kpiGauge.desc' | translate">

      <div sgOverview>
        <sg-row>
          <div style="width:220px"><hrm-kpi-gauge [value]="78" [label]="'docs.kpiGauge.lblKpi' | translate" /></div>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.kpiGauge.purpose' | translate"
          [when]="when"
          [behavior]="'docs.kpiGauge.behavior' | translate"
          [avoid]="'docs.kpiGauge.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.kpiGauge.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.kpiGauge.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.kpiGauge.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.kpiGauge.exLevelsT' | translate"
          [desc]="'docs.kpiGauge.exLevelsD' | translate">
          <sg-row>
            <div style="width:200px"><hrm-kpi-gauge [value]="38" [label]="'docs.kpiGauge.lblRecruit' | translate" /></div>
            <div style="width:200px"><hrm-kpi-gauge [value]="64" [label]="'docs.kpiGauge.lblTraining' | translate" /></div>
            <div style="width:200px"><hrm-kpi-gauge [value]="88" [label]="'docs.kpiGauge.lblAttendance' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.kpiGauge.exCardT' | translate"
          [desc]="'docs.kpiGauge.exCardD' | translate">
          <sg-row>
            <div style="flex:1;min-width:240px">
              <hrm-card [icon]="gaugeIcon" [title]="'docs.kpiGauge.cardTitle' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-kpi-gauge [value]="72" [label]="'docs.kpiGauge.lblCompany' | translate" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocKpiGauge, { className: "SgDocKpiGauge", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/kpi-gauge.ts", lineNumber: 64 });
})();
export {
  SgDocKpiGauge
};
//# sourceMappingURL=chunk-IZK7XMNO.js.map
