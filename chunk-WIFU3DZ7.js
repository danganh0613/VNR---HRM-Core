import {
  HrmTimePicker
} from "./chunk-3AU7CXEW.js";
import "./chunk-7O54XKAF.js";
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
import "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
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
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/time-picker.ts
var SgDocTimePicker = class _SgDocTimePicker {
  constructor() {
    this.t = null;
    this.clocked = new Date(2026, 0, 1, 8, 30);
    this.validTime = new Date(2026, 0, 1, 17, 30);
    this.when = [
      "docs.timePicker.when1",
      "docs.timePicker.when2",
      "docs.timePicker.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTimePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTimePicker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTimePicker, selectors: [["sg-doc-time-picker"]], decls: 90, vars: 128, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "200px"], [3, "ngModelChange", "ngModel", "placeholder"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "200px"], [3, "placeholder", "ngModel"], [3, "label"], ["format", "HH:mm", 3, "placeholder", "ngModel"], ["format", "h:mm a", 3, "use12Hours", "placeholder", "ngModel"], ["format", "HH:mm:ss", 3, "placeholder", "ngModel"], [3, "minuteStep", "placeholder", "ngModel"], ["status", "error", 3, "placeholder", "ngModel"], ["status", "warning", 3, "placeholder", "ngModel"], ["status", "success", 3, "placeholder", "ngModel"], [3, "disabled", "ngModel"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "180px"], ["size", "sm", 3, "placeholder", "ngModel"], ["size", "md", 3, "placeholder", "ngModel"], ["size", "lg", 3, "placeholder", "ngModel"]], template: function SgDocTimePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-time-picker", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTimePicker_Template_hrm_time_picker_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.t, $event) || (ctx.t = $event);
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
        \u0275\u0275element(14, "span", 7);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275element(17, "span", 7);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "sg-example", 9);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "div", 10);
        \u0275\u0275element(31, "hrm-time-picker", 11);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "sg-example", 9);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row", 12);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementStart(38, "div", 10);
        \u0275\u0275element(39, "hrm-time-picker", 13);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 10);
        \u0275\u0275element(42, "hrm-time-picker", 14);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 10);
        \u0275\u0275element(45, "hrm-time-picker", 15);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "sg-example", 9);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "sg-row", 12);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "div", 10);
        \u0275\u0275element(53, "hrm-time-picker", 16);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 10);
        \u0275\u0275element(56, "hrm-time-picker", 16);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "sg-example", 9);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementStart(61, "sg-row", 12);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "div", 10);
        \u0275\u0275element(64, "hrm-time-picker", 11);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 10);
        \u0275\u0275element(67, "hrm-time-picker", 17);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 10);
        \u0275\u0275element(70, "hrm-time-picker", 18);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 10);
        \u0275\u0275element(73, "hrm-time-picker", 19);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 10);
        \u0275\u0275element(76, "hrm-time-picker", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "sg-example", 9);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementStart(80, "sg-row", 21)(81, "div", 22);
        \u0275\u0275element(82, "hrm-time-picker", 23);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 22);
        \u0275\u0275element(85, "hrm-time-picker", 24);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 22);
        \u0275\u0275element(88, "hrm-time-picker", 25);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 56, "docs.timePicker.title"))("desc", \u0275\u0275pipeBind1(2, 58, "docs.timePicker.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.t);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 60, "docs.timePicker.ovPh"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 62, "docs.timePicker.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 64, "docs.timePicker.behavior"))("avoid", \u0275\u0275pipeBind1(11, 66, "docs.timePicker.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 68, "docs.timePicker.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 70, "docs.timePicker.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 72, "docs.timePicker.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 74, "docs.timePicker.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 76, "docs.timePicker.exBasicT"))("desc", \u0275\u0275pipeBind1(28, 78, "docs.timePicker.exBasicD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 80, "docs.timePicker.shiftInPh"))("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 82, "docs.timePicker.exFormatT"))("desc", \u0275\u0275pipeBind1(35, 84, "docs.timePicker.exFormatD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 86, "docs.timePicker.formatRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 88, "docs.timePicker.f24"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("use12Hours", true)("placeholder", \u0275\u0275pipeBind1(43, 90, "docs.timePicker.f12"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 92, "docs.timePicker.fSec"))("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 94, "docs.timePicker.exStepT"))("desc", \u0275\u0275pipeBind1(49, 96, "docs.timePicker.exStepD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(51, 98, "docs.timePicker.stepRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("minuteStep", 5)("placeholder", \u0275\u0275pipeBind1(54, 100, "docs.timePicker.step5"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("minuteStep", 15)("placeholder", \u0275\u0275pipeBind1(57, 102, "docs.timePicker.step15"))("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(59, 104, "docs.timePicker.exStateT"))("desc", \u0275\u0275pipeBind1(60, 106, "docs.timePicker.exStateD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(62, 108, "docs.timePicker.stateRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 110, "docs.timePicker.stNormal"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(68, 112, "docs.timePicker.stError"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 114, "docs.timePicker.stWarning"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(74, 116, "docs.timePicker.stSuccess"))("ngModel", ctx.validTime);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", true)("ngModel", ctx.clocked);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(78, 118, "docs.timePicker.exSizeT"))("desc", \u0275\u0275pipeBind1(79, 120, "docs.timePicker.exSizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(83, 122, "docs.timePicker.small"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(86, 124, "docs.timePicker.medium"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(89, 126, "docs.timePicker.large"))("ngModel", null);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmTimePicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTimePicker, [{
    type: Component,
    args: [{
      selector: "sg-doc-time-picker",
      imports: [FormsModule, TranslateModule, HrmTimePicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.timePicker.title' | translate" [desc]="'docs.timePicker.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:200px">
          <hrm-time-picker [(ngModel)]="t" [placeholder]="'docs.timePicker.ovPh' | translate" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.timePicker.purpose' | translate"
          [when]="when"
          [behavior]="'docs.timePicker.behavior' | translate"
          [avoid]="'docs.timePicker.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.timePicker.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.timePicker.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.timePicker.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.timePicker.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.timePicker.exBasicT' | translate"
          [desc]="'docs.timePicker.exBasicD' | translate">
          <sg-row>
            <div style="width:200px"><hrm-time-picker [placeholder]="'docs.timePicker.shiftInPh' | translate" [ngModel]="null" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timePicker.exFormatT' | translate"
          [desc]="'docs.timePicker.exFormatD' | translate">
          <sg-row [label]="'docs.timePicker.formatRow' | translate">
            <div style="width:200px"><hrm-time-picker format="HH:mm" [placeholder]="'docs.timePicker.f24' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker format="h:mm a" [use12Hours]="true" [placeholder]="'docs.timePicker.f12' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker format="HH:mm:ss" [placeholder]="'docs.timePicker.fSec' | translate" [ngModel]="null" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timePicker.exStepT' | translate"
          [desc]="'docs.timePicker.exStepD' | translate">
          <sg-row [label]="'docs.timePicker.stepRow' | translate">
            <div style="width:200px"><hrm-time-picker [minuteStep]="5" [placeholder]="'docs.timePicker.step5' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker [minuteStep]="15" [placeholder]="'docs.timePicker.step15' | translate" [ngModel]="null" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timePicker.exStateT' | translate"
          [desc]="'docs.timePicker.exStateD' | translate">
          <sg-row [label]="'docs.timePicker.stateRow' | translate">
            <div style="width:200px"><hrm-time-picker [placeholder]="'docs.timePicker.stNormal' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker status="error" [placeholder]="'docs.timePicker.stError' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker status="warning" [placeholder]="'docs.timePicker.stWarning' | translate" [ngModel]="null" /></div>
            <div style="width:200px"><hrm-time-picker status="success" [placeholder]="'docs.timePicker.stSuccess' | translate" [ngModel]="validTime" /></div>
            <div style="width:200px"><hrm-time-picker [disabled]="true" [ngModel]="clocked" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timePicker.exSizeT' | translate"
          [desc]="'docs.timePicker.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:180px"><hrm-time-picker size="sm" [placeholder]="'docs.timePicker.small' | translate" [ngModel]="null" /></div>
            <div style="width:180px"><hrm-time-picker size="md" [placeholder]="'docs.timePicker.medium' | translate" [ngModel]="null" /></div>
            <div style="width:180px"><hrm-time-picker size="lg" [placeholder]="'docs.timePicker.large' | translate" [ngModel]="null" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTimePicker, { className: "SgDocTimePicker", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/time-picker.ts", lineNumber: 85 });
})();
export {
  SgDocTimePicker
};
//# sourceMappingURL=chunk-WIFU3DZ7.js.map
