import {
  CHART_PERIOD_OPTS
} from "./chunk-7EZFLEAQ.js";
import {
  HrmCompetencyRadar
} from "./chunk-HCZ4IQ7J.js";
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
  ChartRadar,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/competency-radar.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/chart/echart" });
var _c1 = (a0) => [a0];
var SgDocCompetencyRadar = class _SgDocCompetencyRadar {
  constructor() {
    this.t = inject(TranslateService);
    this.radarIcon = ChartRadar;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.current = [4, 3, 2, 4, 4, 3];
    this.required = [5, 4, 4, 4, 3, 4];
    this.when = [
      "docs.competencyRadar.when1",
      "docs.competencyRadar.when2",
      "docs.competencyRadar.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.competencyRadar." + key);
  }
  get comps() {
    return [
      { name: this.tr("axSkill") },
      { name: this.tr("axComm") },
      { name: this.tr("axLead") },
      { name: this.tr("axProblem") },
      { name: this.tr("axTeam") },
      { name: this.tr("axLang") }
    ];
  }
  static {
    this.\u0275fac = function SgDocCompetencyRadar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCompetencyRadar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCompetencyRadar, selectors: [["sg-doc-competency-radar"]], decls: 37, vars: 64, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], [3, "competencies", "current", "required", "height"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "flex", "1", "min-width", "300px"], [3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"]], template: function SgDocCompetencyRadar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2);
        \u0275\u0275element(6, "hrm-competency-radar", 3);
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
        \u0275\u0275element(27, "hrm-competency-radar", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 9)(33, "hrm-card", 10);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "hrm-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCompetencyRadar_Template_hrm_select_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "hrm-competency-radar", 3);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 32, "docs.competencyRadar.title"))("related", \u0275\u0275pureFunction1(62, _c1, \u0275\u0275pureFunction1(60, _c0, \u0275\u0275pipeBind1(2, 34, "docs.competencyRadar.relChart"))))("desc", \u0275\u0275pipeBind1(3, 36, "docs.competencyRadar.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("competencies", ctx.comps)("current", ctx.current)("required", ctx.required)("height", 340);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 38, "docs.competencyRadar.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 40, "docs.competencyRadar.behavior"))("avoid", \u0275\u0275pipeBind1(11, 42, "docs.competencyRadar.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "docs.competencyRadar.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 46, "docs.competencyRadar.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 48, "docs.competencyRadar.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 50, "docs.competencyRadar.exGapT"))("desc", \u0275\u0275pipeBind1(25, 52, "docs.competencyRadar.exGapD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("competencies", ctx.comps)("current", ctx.current)("required", ctx.required)("height", 340);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 54, "docs.competencyRadar.exCardT"))("desc", \u0275\u0275pipeBind1(30, 56, "docs.competencyRadar.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.radarIcon)("title", \u0275\u0275pipeBind1(34, 58, "docs.competencyRadar.cardTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("competencies", ctx.comps)("current", ctx.current)("required", ctx.required)("height", 300);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmCompetencyRadar, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCompetencyRadar, [{
    type: Component,
    args: [{
      selector: "sg-doc-competency-radar",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmCompetencyRadar, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.competencyRadar.title' | translate" [related]="[{label:('docs.competencyRadar.relChart' | translate), route:'hrm/chart/echart'}]"
      [desc]="'docs.competencyRadar.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-competency-radar [competencies]="comps" [current]="current" [required]="required" [height]="340" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.competencyRadar.purpose' | translate"
          [when]="when"
          [behavior]="'docs.competencyRadar.behavior' | translate"
          [avoid]="'docs.competencyRadar.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.competencyRadar.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.competencyRadar.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.competencyRadar.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.competencyRadar.exGapT' | translate"
          [desc]="'docs.competencyRadar.exGapD' | translate">
          <div style="width:100%;max-width:520px">
            <hrm-competency-radar [competencies]="comps" [current]="current" [required]="required" [height]="340" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.competencyRadar.exCardT' | translate"
          [desc]="'docs.competencyRadar.exCardD' | translate">
          <sg-row>
            <div style="flex:1;min-width:300px">
              <hrm-card [icon]="radarIcon" [title]="'docs.competencyRadar.cardTitle' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-competency-radar [competencies]="comps" [current]="current" [required]="required" [height]="300" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCompetencyRadar, { className: "SgDocCompetencyRadar", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/competency-radar.ts", lineNumber: 62 });
})();
export {
  SgDocCompetencyRadar
};
//# sourceMappingURL=chunk-AZZ36VHR.js.map
