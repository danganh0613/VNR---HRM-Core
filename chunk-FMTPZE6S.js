import {
  HrmRate
} from "./chunk-CWO3PAW4.js";
import "./chunk-NGY4ECW2.js";
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
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/rate.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/table-cells/rating" });
var _c1 = (a0) => [a0];
var SgDocRate = class _SgDocRate {
  constructor() {
    this.t = inject(TranslateService);
    this.basic = 3;
    this.perf = 4;
    this.halfStar = 3.5;
    this.when = [
      "docs.rate.when1",
      "docs.rate.when2",
      "docs.rate.when3"
    ];
    this.labeled = signal(4, ...ngDevMode ? [{ debugName: "labeled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.levelKeys = [
      "docs.rate.level0",
      "docs.rate.level1",
      "docs.rate.level2",
      "docs.rate.level3",
      "docs.rate.level4",
      "docs.rate.level5"
    ];
    this.levelLabel = computed(() => {
      const key = this.levelKeys[this.labeled()];
      return key ? this.t.instant(key) : "";
    }, ...ngDevMode ? [{ debugName: "levelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgDocRate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRate)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRate, selectors: [["sg-doc-rate"]], decls: 49, vars: 75, consts: [["category", "Data Input", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "label"], [3, "ngModelChange", "ngModel"], [3, "allowHalf", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "ngModelChange", "ngModel", "count"], [3, "ngModelChange", "allowHalf", "ngModel"], [3, "allowHalf", "disabled", "ngModel"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "min-width", "96px"]], template: function SgDocRate_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row", 2);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "hrm-rate", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRate_Template_hrm_rate_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basic, $event) || (ctx.basic = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "hrm-rate", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "sg-use", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "sg-do");
        \u0275\u0275element(16, "span", 8);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 8);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275element(22, "span", 8);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 9)(25, "sg-example", 10);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row")(29, "hrm-rate", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRate_Template_hrm_rate_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.perf, $event) || (ctx.perf = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "sg-example", 10);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row")(34, "hrm-rate", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRate_Template_hrm_rate_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.halfStar, $event) || (ctx.halfStar = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "sg-example", 10);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementStart(38, "sg-row", 2);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275element(40, "hrm-rate", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "sg-example", 10);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row")(45, "div", 14)(46, "hrm-rate", 11);
        \u0275\u0275listener("ngModelChange", function SgDocRate_Template_hrm_rate_ngModelChange_46_listener($event) {
          return ctx.labeled.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 15);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 33, "docs.rate.title"))("related", \u0275\u0275pureFunction1(73, _c1, \u0275\u0275pureFunction1(71, _c0, \u0275\u0275pipeBind1(2, 35, "docs.rate.relRating"))))("desc", \u0275\u0275pipeBind1(3, 37, "docs.rate.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 39, "docs.rate.ovRow"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("allowHalf", true)("ngModel", 3.5);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 41, "docs.rate.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 43, "docs.rate.behavior"))("avoid", \u0275\u0275pipeBind1(13, 45, "docs.rate.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 47, "docs.rate.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 49, "docs.rate.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 51, "docs.rate.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 53, "docs.rate.exPerfT"))("desc", \u0275\u0275pipeBind1(27, 55, "docs.rate.exPerfD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.perf);
        \u0275\u0275property("count", 5);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 57, "docs.rate.exHalfT"))("desc", \u0275\u0275pipeBind1(32, 59, "docs.rate.exHalfD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("allowHalf", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.halfStar);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(36, 61, "docs.rate.exReadonlyT"))("desc", \u0275\u0275pipeBind1(37, 63, "docs.rate.exReadonlyD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(39, 65, "docs.rate.rowAvg"));
        \u0275\u0275advance(2);
        \u0275\u0275property("allowHalf", true)("disabled", true)("ngModel", 4.5);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 67, "docs.rate.exLabelT"))("desc", \u0275\u0275pipeBind1(43, 69, "docs.rate.exLabelD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.labeled())("count", 5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.levelLabel());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmRate, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRate, [{
    type: Component,
    args: [{
      selector: "sg-doc-rate",
      imports: [FormsModule, TranslateModule, HrmRate, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.rate.title' | translate" [related]="[{label:('docs.rate.relRating' | translate), route:'hrm/table-cells/rating'}]" [desc]="'docs.rate.desc' | translate">

      <div sgOverview>
        <sg-row [label]="'docs.rate.ovRow' | translate">
          <hrm-rate [(ngModel)]="basic" />
          <hrm-rate [allowHalf]="true" [ngModel]="3.5" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.rate.purpose' | translate"
          [when]="when"
          [behavior]="'docs.rate.behavior' | translate"
          [avoid]="'docs.rate.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.rate.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.rate.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.rate.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.rate.exPerfT' | translate"
          [desc]="'docs.rate.exPerfD' | translate">
          <sg-row>
            <hrm-rate [(ngModel)]="perf" [count]="5" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rate.exHalfT' | translate"
          [desc]="'docs.rate.exHalfD' | translate">
          <sg-row>
            <hrm-rate [allowHalf]="true" [(ngModel)]="halfStar" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rate.exReadonlyT' | translate"
          [desc]="'docs.rate.exReadonlyD' | translate">
          <sg-row [label]="'docs.rate.rowAvg' | translate">
            <hrm-rate [allowHalf]="true" [disabled]="true" [ngModel]="4.5" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rate.exLabelT' | translate"
          [desc]="'docs.rate.exLabelD' | translate">
          <sg-row>
            <div style="display:flex;align-items:center;gap:12px">
              <hrm-rate [ngModel]="labeled()" (ngModelChange)="labeled.set($event)" [count]="5" />
              <span style="font-size: var(--fs-13);color:var(--text-sub);min-width:96px">{{ levelLabel() }}</span>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRate, { className: "SgDocRate", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/rate.ts", lineNumber: 74 });
})();
export {
  SgDocRate
};
//# sourceMappingURL=chunk-FMTPZE6S.js.map
