import {
  HrmStepper
} from "./chunk-CYIL2WSS.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
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
import "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/navigation/steps" });
var _c1 = (a0) => [a0];
var SgDocStepper = class _SgDocStepper {
  constructor() {
    this.t = inject(TranslateService);
    this.idx = signal(1, ...ngDevMode ? [{ debugName: "idx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.idxV = signal(1, ...ngDevMode ? [{ debugName: "idxV" }] : (
      /* istanbul ignore next */
      []
    ));
    this.idxD = signal(2, ...ngDevMode ? [{ debugName: "idxD" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.stepper.when1",
      "docs.stepper.when2",
      "docs.stepper.when3"
    ];
  }
  get steps() {
    return [
      { key: "type", label: this.t.instant("docs.stepper.stTypeLabel"), desc: this.t.instant("docs.stepper.stTypeDesc") },
      { key: "info", label: this.t.instant("docs.stepper.stInfoLabel"), desc: this.t.instant("docs.stepper.stInfoDesc") },
      { key: "confirm", label: this.t.instant("docs.stepper.stConfirmLabel"), desc: this.t.instant("docs.stepper.stConfirmDesc") }
    ];
  }
  get idxModel() {
    return this.idx();
  }
  set idxModel(v) {
    this.idx.set(v);
  }
  next() {
    this.idx.update((i) => Math.min(i + 1, this.steps.length - 1));
  }
  prev() {
    this.idx.update((i) => Math.max(i - 1, 0));
  }
  get idxVModel() {
    return this.idxV();
  }
  set idxVModel(v) {
    this.idxV.set(v);
  }
  get idxDModel() {
    return this.idxD();
  }
  set idxDModel(v) {
    this.idxD.set(v);
  }
  static {
    this.\u0275fac = function SgDocStepper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocStepper)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocStepper, selectors: [["sg-doc-stepper"]], decls: 47, vars: 67, consts: [["category", "Navigation", 3, "title", "related", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "560px"], [3, "activeIndexChange", "steps", "activeIndex"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "560px", "display", "flex", "flex-direction", "column", "gap", "16px"], [1, "wz-body"], [3, "click", "disabled"], ["variant", "primary", 3, "click", "disabled"], ["variant", "vertical", 3, "activeIndexChange", "steps", "activeIndex"], ["variant", "dot", 3, "activeIndexChange", "steps", "activeIndex"]], template: function SgDocStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2)(6, "hrm-stepper", 3);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxModel, $event) || (ctx.idxModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
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
        \u0275\u0275elementStart(26, "div", 9)(27, "hrm-stepper", 3);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxModel, $event) || (ctx.idxModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-row")(31, "hrm-button", 11);
        \u0275\u0275listener("click", function SgDocStepper_Template_hrm_button_click_31_listener() {
          return ctx.prev();
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "hrm-button", 12);
        \u0275\u0275listener("click", function SgDocStepper_Template_hrm_button_click_34_listener() {
          return ctx.next();
        });
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "sg-example", 8);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "hrm-stepper", 13);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxVModel, $event) || (ctx.idxVModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-example", 8);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row")(46, "hrm-stepper", 14);
        \u0275\u0275twoWayListener("activeIndexChange", function SgDocStepper_Template_hrm_stepper_activeIndexChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.idxDModel, $event) || (ctx.idxDModel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 29, "docs.stepper.title"))("related", \u0275\u0275pureFunction1(65, _c1, \u0275\u0275pureFunction1(63, _c0, \u0275\u0275pipeBind1(2, 31, "docs.stepper.relSteps"))))("desc", \u0275\u0275pipeBind1(3, 33, "docs.stepper.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxModel);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 35, "docs.stepper.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 37, "docs.stepper.behavior"))("avoid", \u0275\u0275pipeBind1(11, 39, "docs.stepper.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 41, "docs.stepper.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 43, "docs.stepper.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 45, "docs.stepper.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 47, "docs.stepper.exWizardT"))("desc", \u0275\u0275pipeBind1(25, 49, "docs.stepper.exWizardD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxModel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.steps[ctx.idx()].desc);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.idx() === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 51, "docs.stepper.btnPrev"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.idx() === ctx.steps.length - 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 53, "docs.stepper.btnNext"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 55, "docs.stepper.exVertT"))("desc", \u0275\u0275pipeBind1(39, 57, "docs.stepper.exVertD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxVModel);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 59, "docs.stepper.exDotT"))("desc", \u0275\u0275pipeBind1(44, 61, "docs.stepper.exDotD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("steps", ctx.steps);
        \u0275\u0275twoWayProperty("activeIndex", ctx.idxDModel);
      }
    }, dependencies: [TranslateModule, HrmStepper, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.wz-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n/*# sourceMappingURL=stepper.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocStepper, [{
    type: Component,
    args: [{ selector: "sg-doc-stepper", imports: [TranslateModule, HrmStepper, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Navigation" [title]="'docs.stepper.title' | translate" [related]="[{label:('docs.stepper.relSteps' | translate), route:'hrm/navigation/steps'}]"
      [desc]="'docs.stepper.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:560px">
          <hrm-stepper [steps]="steps" [(activeIndex)]="idxModel" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.stepper.purpose' | translate"
          [when]="when"
          [behavior]="'docs.stepper.behavior' | translate"
          [avoid]="'docs.stepper.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.stepper.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.stepper.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.stepper.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.stepper.exWizardT' | translate"
          [desc]="'docs.stepper.exWizardD' | translate">
          <div style="width:100%;max-width:560px;display:flex;flex-direction:column;gap:16px">
            <hrm-stepper [steps]="steps" [(activeIndex)]="idxModel" />
            <div class="wz-body">{{ steps[idx()].desc }}</div>
            <sg-row>
              <hrm-button [disabled]="idx() === 0" (click)="prev()">{{ 'docs.stepper.btnPrev' | translate }}</hrm-button>
              <hrm-button variant="primary" [disabled]="idx() === steps.length - 1" (click)="next()">{{ 'docs.stepper.btnNext' | translate }}</hrm-button>
            </sg-row>
          </div>
        </sg-example>

        <sg-example [title]="'docs.stepper.exVertT' | translate"
          [desc]="'docs.stepper.exVertD' | translate">
          <sg-row>
            <hrm-stepper variant="vertical" [steps]="steps" [(activeIndex)]="idxVModel" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.stepper.exDotT' | translate"
          [desc]="'docs.stepper.exDotD' | translate">
          <sg-row>
            <hrm-stepper variant="dot" [steps]="steps" [(activeIndex)]="idxDModel" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;0844b4ce333be8d33832e8b8534c9d26a60b9d4a6e36ae55db5ad1cebac83b1e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts */\n.wz-body {\n  padding: 20px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n/*# sourceMappingURL=stepper.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocStepper, { className: "SgDocStepper", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/stepper.ts", lineNumber: 72 });
})();
export {
  SgDocStepper
};
//# sourceMappingURL=chunk-77WKM6N7.js.map
