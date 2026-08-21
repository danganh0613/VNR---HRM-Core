import {
  HrmSteps
} from "./chunk-LXKCA6RD.js";
import "./chunk-TYDFDITO.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/steps.ts
var SgDocSteps = class _SgDocSteps {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.steps.when1",
      "docs.steps.when2",
      "docs.steps.when3"
    ];
  }
  get onboarding() {
    return [
      { title: this.t.instant("docs.steps.stSubmit") },
      { title: this.t.instant("docs.steps.stInterview") },
      { title: this.t.instant("docs.steps.stSign") },
      { title: this.t.instant("docs.steps.stStart") }
    ];
  }
  get onboardingDetail() {
    return [
      { title: this.t.instant("docs.steps.stSubmit"), description: this.t.instant("docs.steps.stSubmitDesc") },
      { title: this.t.instant("docs.steps.stInterview"), description: this.t.instant("docs.steps.stInterviewDesc") },
      { title: this.t.instant("docs.steps.stSign"), description: this.t.instant("docs.steps.stSignDesc") },
      { title: this.t.instant("docs.steps.stStart"), description: this.t.instant("docs.steps.stStartDesc") }
    ];
  }
  static {
    this.\u0275fac = function SgDocSteps_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSteps)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSteps, selectors: [["sg-doc-steps"]], decls: 52, vars: 72, consts: [["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], [2, "max-width", "640px"], [3, "items", "current"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [2, "width", "100%", "max-width", "680px"], [2, "width", "100%", "max-width", "360px"], ["direction", "vertical", 3, "items", "current"], [3, "items", "current", "dot"], ["status", "error", 3, "items", "current"]], template: function SgDocSteps_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-steps", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
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
        \u0275\u0275elementStart(28, "sg-row", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275element(31, "hrm-steps", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "sg-example", 8);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "sg-row")(36, "div", 11);
        \u0275\u0275element(37, "hrm-steps", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "sg-example", 8);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row", 9);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "div", 10);
        \u0275\u0275element(44, "hrm-steps", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "sg-example", 8);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row", 9);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "div", 10);
        \u0275\u0275element(51, "hrm-steps", 14);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 32, "docs.steps.title"))("desc", \u0275\u0275pipeBind1(2, 34, "docs.steps.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.onboarding)("current", 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 36, "docs.steps.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 38, "docs.steps.behavior"))("avoid", \u0275\u0275pipeBind1(10, 40, "docs.steps.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 42, "docs.steps.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 44, "docs.steps.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 46, "docs.steps.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 48, "docs.steps.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 50, "docs.steps.exProcT"))("desc", \u0275\u0275pipeBind1(27, 52, "docs.steps.exProcD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(29, 54, "docs.steps.exProcRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.onboarding)("current", 1);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 56, "docs.steps.exVertT"))("desc", \u0275\u0275pipeBind1(34, 58, "docs.steps.exVertD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.onboardingDetail)("current", 2);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 60, "docs.steps.exDotT"))("desc", \u0275\u0275pipeBind1(40, 62, "docs.steps.exDotD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 64, "docs.steps.exDotRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.onboarding)("current", 2)("dot", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 66, "docs.steps.exErrT"))("desc", \u0275\u0275pipeBind1(47, 68, "docs.steps.exErrD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 70, "docs.steps.exErrRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.onboarding)("current", 1);
      }
    }, dependencies: [TranslateModule, HrmSteps, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSteps, [{
    type: Component,
    args: [{
      selector: "sg-doc-steps",
      imports: [TranslateModule, HrmSteps, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.steps.title' | translate" [desc]="'docs.steps.desc' | translate">

      <div sgOverview>
        <div style="max-width:640px">
          <hrm-steps [items]="onboarding" [current]="1" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.steps.purpose' | translate"
          [when]="when"
          [behavior]="'docs.steps.behavior' | translate"
          [avoid]="'docs.steps.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.steps.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.steps.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.steps.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.steps.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.steps.exProcT' | translate"
          [desc]="'docs.steps.exProcD' | translate">
          <sg-row [label]="'docs.steps.exProcRow' | translate">
            <div style="width:100%;max-width:680px"><hrm-steps [items]="onboarding" [current]="1" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.steps.exVertT' | translate"
          [desc]="'docs.steps.exVertD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px"><hrm-steps [items]="onboardingDetail" [current]="2" direction="vertical" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.steps.exDotT' | translate"
          [desc]="'docs.steps.exDotD' | translate">
          <sg-row [label]="'docs.steps.exDotRow' | translate">
            <div style="width:100%;max-width:680px"><hrm-steps [items]="onboarding" [current]="2" [dot]="true" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.steps.exErrT' | translate"
          [desc]="'docs.steps.exErrD' | translate">
          <sg-row [label]="'docs.steps.exErrRow' | translate">
            <div style="width:100%;max-width:680px"><hrm-steps [items]="onboarding" [current]="1" status="error" /></div>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSteps, { className: "SgDocSteps", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/steps.ts", lineNumber: 70 });
})();
export {
  SgDocSteps
};
//# sourceMappingURL=chunk-WYE62HZA.js.map
