import {
  HrmSegmented
} from "./chunk-IETGC4TN.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
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
  ɵɵsanitizeHtml,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/segmented.ts
var SgDocSegmented = class _SgDocSegmented {
  constructor() {
    this.t = inject(TranslateService);
    this.view = "week";
    this.scope = "team";
    this.layoutMode = "list";
    this.layoutOpts = [
      { value: "list", icon: "file" },
      { value: "group", icon: "folder" }
    ];
    this.status = "active";
    this.period = "month";
    this.when = [
      "docs.segmented.when1",
      "docs.segmented.when2",
      "docs.segmented.when3"
    ];
  }
  get viewOpts() {
    return [
      { label: this.t.instant("docs.segmented.optDay"), value: "day" },
      { label: this.t.instant("docs.segmented.optWeek"), value: "week" },
      { label: this.t.instant("docs.segmented.optMonth"), value: "month" },
      { label: this.t.instant("docs.segmented.optYear"), value: "year" }
    ];
  }
  get scopeOpts() {
    return [
      { label: this.t.instant("docs.segmented.scopeMe"), value: "me", icon: "user" },
      { label: this.t.instant("docs.segmented.scopeTeam"), value: "team", icon: "team" },
      { label: this.t.instant("docs.segmented.scopeDept"), value: "dept", icon: "folder" }
    ];
  }
  get statusOpts() {
    return [
      { label: this.t.instant("docs.segmented.statusAll"), value: "all" },
      { label: this.t.instant("docs.segmented.statusActive"), value: "active" },
      { label: this.t.instant("docs.segmented.statusLeft"), value: "left" }
    ];
  }
  get periodOpts() {
    return [
      { label: this.t.instant("docs.segmented.periodMonth"), value: "month" },
      { label: this.t.instant("docs.segmented.periodQuarter"), value: "quarter" },
      { label: this.t.instant("docs.segmented.periodYear"), value: "year", disabled: true }
    ];
  }
  static {
    this.\u0275fac = function SgDocSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSegmented)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSegmented, selectors: [["sg-doc-segmented"]], decls: 62, vars: 83, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "ngModelChange", "ngModel", "options"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "420px"], [2, "width", "200px"], [3, "ngModelChange", "ngModel", "options", "block"], ["label", "sm \xB7 md \xB7 lg"], ["size", "sm", 3, "ngModel", "options"], ["size", "md", 3, "ngModel", "options"], ["size", "lg", 3, "ngModel", "options"]], template: function SgDocSegmented_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-segmented", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275element(13, "span", 7);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275element(16, "span", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275element(19, "span", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275element(22, "span", 7);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "sg-example", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row")(29, "div", 2)(30, "hrm-segmented", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "sg-example", 9);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 10)(36, "hrm-segmented", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.scope, $event) || (ctx.scope = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "sg-example", 9);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "div", 11)(42, "hrm-segmented", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_42_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.layoutMode, $event) || (ctx.layoutMode = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "sg-example", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "div", 10)(48, "hrm-segmented", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "sg-example", 9);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row", 13);
        \u0275\u0275element(53, "hrm-segmented", 14)(54, "hrm-segmented", 15)(55, "hrm-segmented", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "sg-example", 9);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementStart(59, "sg-row")(60, "div", 2)(61, "hrm-segmented", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSegmented_Template_hrm_segmented_ngModelChange_61_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 41, "docs.segmented.title"))("desc", \u0275\u0275pipeBind1(2, 43, "docs.segmented.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.view);
        \u0275\u0275property("options", ctx.viewOpts);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 45, "docs.segmented.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 47, "docs.segmented.behavior"))("avoid", \u0275\u0275pipeBind1(10, 49, "docs.segmented.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(14, 51, "docs.segmented.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 53, "docs.segmented.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 55, "docs.segmented.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 57, "docs.segmented.dont2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 59, "docs.segmented.exBasicT"))("desc", \u0275\u0275pipeBind1(27, 61, "docs.segmented.exBasicD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.view);
        \u0275\u0275property("options", ctx.viewOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 63, "docs.segmented.exIconT"))("desc", \u0275\u0275pipeBind1(33, 65, "docs.segmented.exIconD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.scope);
        \u0275\u0275property("options", ctx.scopeOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 67, "docs.segmented.exIconOnlyT"))("desc", \u0275\u0275pipeBind1(39, 69, "docs.segmented.exIconOnlyD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.layoutMode);
        \u0275\u0275property("options", ctx.layoutOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 71, "docs.segmented.exFillT"))("desc", \u0275\u0275pipeBind1(45, 73, "docs.segmented.exFillD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.status);
        \u0275\u0275property("options", ctx.statusOpts)("block", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 75, "docs.segmented.exSizeT"))("desc", \u0275\u0275pipeBind1(51, 77, "docs.segmented.exSizeD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", "week")("options", ctx.viewOpts);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", "week")("options", ctx.viewOpts);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", "week")("options", ctx.viewOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(57, 79, "docs.segmented.exDisabledT"))("desc", \u0275\u0275pipeBind1(58, 81, "docs.segmented.exDisabledD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275property("options", ctx.periodOpts);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmSegmented, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSegmented, [{
    type: Component,
    args: [{
      selector: "sg-doc-segmented",
      imports: [FormsModule, TranslateModule, HrmSegmented, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.segmented.title' | translate" [desc]="'docs.segmented.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-segmented [(ngModel)]="view" [options]="viewOpts" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.segmented.purpose' | translate"
          [when]="when"
          [behavior]="'docs.segmented.behavior' | translate"
          [avoid]="'docs.segmented.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.segmented.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.segmented.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.segmented.dont1' | translate"></span></sg-dont>
        <sg-dont><span [innerHTML]="'docs.segmented.dont2' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.segmented.exBasicT' | translate"
          [desc]="'docs.segmented.exBasicD' | translate">
          <sg-row>
            <div style="width:100%;max-width:340px"><hrm-segmented [(ngModel)]="view" [options]="viewOpts" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.segmented.exIconT' | translate"
          [desc]="'docs.segmented.exIconD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-segmented [(ngModel)]="scope" [options]="scopeOpts" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.segmented.exIconOnlyT' | translate"
          [desc]="'docs.segmented.exIconOnlyD' | translate">
          <sg-row>
            <div style="width:200px"><hrm-segmented [(ngModel)]="layoutMode" [options]="layoutOpts" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.segmented.exFillT' | translate"
          [desc]="'docs.segmented.exFillD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-segmented [(ngModel)]="status" [options]="statusOpts" [block]="true" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.segmented.exSizeT' | translate"
          [desc]="'docs.segmented.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <hrm-segmented size="sm" [ngModel]="'week'" [options]="viewOpts" />
            <hrm-segmented size="md" [ngModel]="'week'" [options]="viewOpts" />
            <hrm-segmented size="lg" [ngModel]="'week'" [options]="viewOpts" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.segmented.exDisabledT' | translate"
          [desc]="'docs.segmented.exDisabledD' | translate">
          <sg-row>
            <div style="width:100%;max-width:340px"><hrm-segmented [(ngModel)]="period" [options]="periodOpts" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSegmented, { className: "SgDocSegmented", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/segmented.ts", lineNumber: 85 });
})();
export {
  SgDocSegmented
};
//# sourceMappingURL=chunk-UCJYACHL.js.map
