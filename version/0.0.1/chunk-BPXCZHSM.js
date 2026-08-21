import {
  CHART_PERIOD_OPTS
} from "./chunk-7EZFLEAQ.js";
import {
  HrmChart
} from "./chunk-MJMMZ5ZY.js";
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
  Filter,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
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
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/chart/hrm-recruitment-funnel.ts
var HrmRecruitmentFunnel = class _HrmRecruitmentFunnel {
  constructor() {
    this.stages = input([], ...ngDevMode ? [{ debugName: "stages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showValue = input(true, ...ngDevMode ? [{ debugName: "showValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(320, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.option = computed(() => {
      const s = this.stages();
      const top = Math.max(...s.map((x) => x.value), 1);
      return {
        tooltip: { trigger: "item", formatter: "{b}: {c}" },
        legend: { bottom: 0 },
        series: [{
          type: "funnel",
          top: 10,
          bottom: 40,
          left: "8%",
          right: "8%",
          minSize: "24%",
          gap: 2,
          sort: "descending",
          label: { show: this.showValue(), formatter: (p) => `${p.name} ${p.value} (${Math.round((p.value ?? 0) / top * 100)}%)` },
          labelLine: { show: false },
          itemStyle: { borderWidth: 0 },
          data: s.map((x) => ({ name: x.name, value: x.value }))
        }]
      };
    }, ...ngDevMode ? [{ debugName: "option" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmRecruitmentFunnel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmRecruitmentFunnel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRecruitmentFunnel, selectors: [["hrm-recruitment-funnel"]], hostAttrs: [1, "hrm-recruitment-funnel"], inputs: { stages: [1, "stages"], showValue: [1, "showValue"], height: [1, "height"] }, decls: 1, vars: 2, consts: [[3, "option", "height"]], template: function HrmRecruitmentFunnel_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRecruitmentFunnel, [{
    type: Component,
    args: [{
      selector: "hrm-recruitment-funnel",
      imports: [HrmChart],
      template: `<hrm-chart [option]="option()" [height]="height()" />`,
      host: { class: "hrm-recruitment-funnel" }
    }]
  }], null, { stages: [{ type: Input, args: [{ isSignal: true, alias: "stages", required: false }] }], showValue: [{ type: Input, args: [{ isSignal: true, alias: "showValue", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRecruitmentFunnel, { className: "HrmRecruitmentFunnel", filePath: "libs/hrm-ui/src/lib/chart/hrm-recruitment-funnel.ts", lineNumber: 20 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/recruitment-funnel.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/chart/echart" });
var _c1 = (a0) => [a0];
var SgDocRecruitmentFunnel = class _SgDocRecruitmentFunnel {
  constructor() {
    this.t = inject(TranslateService);
    this.funnelIcon = Filter;
    this.periodOpts = CHART_PERIOD_OPTS;
    this.period = "month";
    this.when = [
      "docs.recruitmentFunnel.when1",
      "docs.recruitmentFunnel.when2",
      "docs.recruitmentFunnel.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.recruitmentFunnel." + key);
  }
  get stages() {
    return [
      { name: this.tr("stApply"), value: 480 },
      { name: this.tr("stScreen"), value: 210 },
      { name: this.tr("stInterview"), value: 96 },
      { name: this.tr("stOffer"), value: 34 },
      { name: this.tr("stHired"), value: 22 }
    ];
  }
  static {
    this.\u0275fac = function SgDocRecruitmentFunnel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRecruitmentFunnel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRecruitmentFunnel, selectors: [["sg-doc-recruitment-funnel"]], decls: 37, vars: 58, consts: [["category", "Chart", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], [3, "stages", "height"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "flex", "1", "min-width", "320px"], [3, "icon", "title"], ["cardActions", "", "size", "md", 2, "width", "130px", 3, "ngModelChange", "options", "allowClear", "showSearch", "ngModel"]], template: function SgDocRecruitmentFunnel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2);
        \u0275\u0275element(6, "hrm-recruitment-funnel", 3);
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
        \u0275\u0275element(27, "hrm-recruitment-funnel", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 9)(33, "hrm-card", 10);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "hrm-select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRecruitmentFunnel_Template_hrm_select_ngModelChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "hrm-recruitment-funnel", 3);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 26, "docs.recruitmentFunnel.title"))("related", \u0275\u0275pureFunction1(56, _c1, \u0275\u0275pureFunction1(54, _c0, \u0275\u0275pipeBind1(2, 28, "docs.recruitmentFunnel.relChart"))))("desc", \u0275\u0275pipeBind1(3, 30, "docs.recruitmentFunnel.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("stages", ctx.stages)("height", 340);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 32, "docs.recruitmentFunnel.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 34, "docs.recruitmentFunnel.behavior"))("avoid", \u0275\u0275pipeBind1(11, 36, "docs.recruitmentFunnel.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 38, "docs.recruitmentFunnel.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 40, "docs.recruitmentFunnel.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 42, "docs.recruitmentFunnel.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 44, "docs.recruitmentFunnel.exProcessT"))("desc", \u0275\u0275pipeBind1(25, 46, "docs.recruitmentFunnel.exProcessD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("stages", ctx.stages)("height", 340);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 48, "docs.recruitmentFunnel.exCardT"))("desc", \u0275\u0275pipeBind1(30, 50, "docs.recruitmentFunnel.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.funnelIcon)("title", \u0275\u0275pipeBind1(34, 52, "docs.recruitmentFunnel.cardTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.periodOpts)("allowClear", false)("showSearch", false);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275property("stages", ctx.stages)("height", 300);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmRecruitmentFunnel, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRecruitmentFunnel, [{
    type: Component,
    args: [{
      selector: "sg-doc-recruitment-funnel",
      imports: [FormsModule, TranslateModule, TablerIconComponent, HrmRecruitmentFunnel, HrmCard, HrmSelect, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.recruitmentFunnel.title' | translate" [related]="[{label:('docs.recruitmentFunnel.relChart' | translate), route:'hrm/chart/echart'}]"
      [desc]="'docs.recruitmentFunnel.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-recruitment-funnel [stages]="stages" [height]="340" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.recruitmentFunnel.purpose' | translate"
          [when]="when"
          [behavior]="'docs.recruitmentFunnel.behavior' | translate"
          [avoid]="'docs.recruitmentFunnel.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.recruitmentFunnel.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.recruitmentFunnel.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.recruitmentFunnel.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.recruitmentFunnel.exProcessT' | translate"
          [desc]="'docs.recruitmentFunnel.exProcessD' | translate">
          <div style="width:100%;max-width:520px">
            <hrm-recruitment-funnel [stages]="stages" [height]="340" />
          </div>
        </sg-example>

        <sg-example [title]="'docs.recruitmentFunnel.exCardT' | translate"
          [desc]="'docs.recruitmentFunnel.exCardD' | translate">
          <sg-row>
            <div style="flex:1;min-width:320px">
              <hrm-card [icon]="funnelIcon" [title]="'docs.recruitmentFunnel.cardTitle' | translate">
                <hrm-select cardActions size="md" style="width:130px" [options]="periodOpts" [allowClear]="false" [showSearch]="false" [(ngModel)]="period" />
                <hrm-recruitment-funnel [stages]="stages" [height]="300" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRecruitmentFunnel, { className: "SgDocRecruitmentFunnel", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/recruitment-funnel.ts", lineNumber: 62 });
})();
export {
  SgDocRecruitmentFunnel
};
//# sourceMappingURL=chunk-BPXCZHSM.js.map
