import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  HrmInputNumber
} from "./chunk-JV7MQRWY.js";
import "./chunk-SPBU533T.js";
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
import "./chunk-LRW4ARR4.js";
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
  ɵɵsanitizeHtml,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/input-number.ts
var SgDocInputNumber = class _SgDocInputNumber {
  constructor() {
    this.days = 3;
    this.kpi = 80;
    this.ot = 4;
    this.when = [
      "docs.inputNumber.when1",
      "docs.inputNumber.when2",
      "docs.inputNumber.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocInputNumber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocInputNumber)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocInputNumber, selectors: [["sg-doc-input-number"]], decls: 84, vars: 145, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "label", "help"], [3, "ngModelChange", "ngModel", "min", "max", "step", "unit"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "260px"], [3, "label", "required", "error"], ["status", "error", 3, "ngModel", "min", "max"], ["status", "warning", 3, "ngModel", "min", "max"], ["status", "success", 3, "ngModel", "min", "max"], [2, "width", "280px"], [3, "ngModelChange", "ngModel", "min", "max", "step"], [2, "width", "240px"], ["help", "0 \u2013 100%", 3, "label"], ["unit", "%", 3, "ngModelChange", "ngModel", "min", "max", "step"], [3, "ngModelChange", "ngModel", "min", "max", "step", "precision", "unit"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "180px"], ["size", "sm", 3, "ngModel", "min", "max", "precision", "unit"], ["size", "md", 3, "ngModel", "min", "max", "precision", "unit"], ["size", "lg", 3, "ngModel", "min", "max", "precision", "unit"]], template: function SgDocInputNumber_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-input-number", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInputNumber_Template_hrm_input_number_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.days, $event) || (ctx.days = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "sg-use", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "sg-do");
        \u0275\u0275element(17, "span", 8);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275element(20, "span", 8);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275element(23, "span", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275element(26, "span", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "sg-example", 10);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 11)(34, "hrm-form-field", 12);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275element(37, "hrm-input-number", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 11)(39, "hrm-form-field", 3);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275element(42, "hrm-input-number", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 11)(44, "hrm-form-field", 3);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275element(47, "hrm-input-number", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "sg-example", 10);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "sg-row")(52, "div", 16)(53, "hrm-form-field", 3);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementStart(56, "hrm-input-number", 17);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInputNumber_Template_hrm_input_number_ngModelChange_56_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.days, $event) || (ctx.days = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(57, "sg-example", 10);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "sg-row")(61, "div", 18)(62, "hrm-form-field", 19);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "hrm-input-number", 20);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInputNumber_Template_hrm_input_number_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.kpi, $event) || (ctx.kpi = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 18)(66, "hrm-form-field", 3);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementStart(69, "hrm-input-number", 21);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInputNumber_Template_hrm_input_number_ngModelChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.ot, $event) || (ctx.ot = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(71, "sg-example", 10);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementStart(74, "sg-row", 22)(75, "div", 23);
        \u0275\u0275element(76, "hrm-input-number", 24);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 23);
        \u0275\u0275element(79, "hrm-input-number", 25);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 23);
        \u0275\u0275element(82, "hrm-input-number", 26);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 75, "docs.inputNumber.title"))("desc", \u0275\u0275pipeBind1(2, 77, "docs.inputNumber.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 79, "docs.inputNumber.ovLabel"))("help", \u0275\u0275pipeBind1(7, 81, "docs.inputNumber.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.days);
        \u0275\u0275property("min", 0)("max", 12)("step", 1)("unit", \u0275\u0275pipeBind1(9, 83, "docs.inputNumber.unitDay"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 85, "docs.inputNumber.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 87, "docs.inputNumber.behavior"))("avoid", \u0275\u0275pipeBind1(14, 89, "docs.inputNumber.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 91, "docs.inputNumber.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(21, 93, "docs.inputNumber.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(24, 95, "docs.inputNumber.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(27, 97, "docs.inputNumber.dont2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 99, "docs.inputNumber.exStateT"))("desc", \u0275\u0275pipeBind1(31, 101, "docs.inputNumber.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(35, 103, "docs.inputNumber.leaveDays"))("required", true)("error", \u0275\u0275pipeBind1(36, 105, "docs.inputNumber.errLeave"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 18)("min", 0)("max", 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 107, "docs.inputNumber.age"))("help", \u0275\u0275pipeBind1(41, 109, "docs.inputNumber.helpAge"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 17)("min", 16)("max", 60);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(45, 111, "docs.inputNumber.leaveDays"))("help", \u0275\u0275pipeBind1(46, 113, "docs.inputNumber.helpValid"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 10)("min", 0)("max", 12);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(49, 115, "docs.inputNumber.exRangeT"))("desc", \u0275\u0275pipeBind1(50, 117, "docs.inputNumber.exRangeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(54, 119, "docs.inputNumber.ovLabel"))("help", \u0275\u0275pipeBind1(55, 121, "docs.inputNumber.helpStep"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.days);
        \u0275\u0275property("min", 0)("max", 12)("step", 1);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 123, "docs.inputNumber.exUnitT"))("desc", \u0275\u0275pipeBind1(59, 125, "docs.inputNumber.exUnitD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 127, "docs.inputNumber.kpiRate"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.kpi);
        \u0275\u0275property("min", 0)("max", 100)("step", 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(67, 129, "docs.inputNumber.otHours"))("help", \u0275\u0275pipeBind1(68, 131, "docs.inputNumber.helpOt"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.ot);
        \u0275\u0275property("min", 0)("max", 12)("step", 0.5)("precision", 1)("unit", \u0275\u0275pipeBind1(70, 133, "docs.inputNumber.unitHour"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(72, 135, "docs.inputNumber.exIntT"))("desc", \u0275\u0275pipeBind1(73, 137, "docs.inputNumber.exIntD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", 5)("min", 1)("max", 30)("precision", 0)("unit", \u0275\u0275pipeBind1(77, 139, "docs.inputNumber.unitDay"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 5)("min", 1)("max", 30)("precision", 0)("unit", \u0275\u0275pipeBind1(80, 141, "docs.inputNumber.unitDay"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 5)("min", 1)("max", 30)("precision", 0)("unit", \u0275\u0275pipeBind1(83, 143, "docs.inputNumber.unitDay"));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmInputNumber, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocInputNumber, [{
    type: Component,
    args: [{
      selector: "sg-doc-input-number",
      imports: [FormsModule, TranslateModule, HrmInputNumber, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.inputNumber.title' | translate" [desc]="'docs.inputNumber.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-form-field [label]="'docs.inputNumber.ovLabel' | translate" [help]="'docs.inputNumber.ovHelp' | translate">
            <hrm-input-number [(ngModel)]="days" [min]="0" [max]="12" [step]="1" [unit]="'docs.inputNumber.unitDay' | translate" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.inputNumber.purpose' | translate"
          [when]="when"
          [behavior]="'docs.inputNumber.behavior' | translate"
          [avoid]="'docs.inputNumber.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.inputNumber.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.inputNumber.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.inputNumber.dont1' | translate"></span></sg-dont>
        <sg-dont><span [innerHTML]="'docs.inputNumber.dont2' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.inputNumber.exStateT' | translate"
          [desc]="'docs.inputNumber.exStateD' | translate">
          <sg-row>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.inputNumber.leaveDays' | translate" [required]="true" [error]="'docs.inputNumber.errLeave' | translate">
                <hrm-input-number status="error" [ngModel]="18" [min]="0" [max]="12" />
              </hrm-form-field>
            </div>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.inputNumber.age' | translate" [help]="'docs.inputNumber.helpAge' | translate">
                <hrm-input-number status="warning" [ngModel]="17" [min]="16" [max]="60" />
              </hrm-form-field>
            </div>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.inputNumber.leaveDays' | translate" [help]="'docs.inputNumber.helpValid' | translate">
                <hrm-input-number status="success" [ngModel]="10" [min]="0" [max]="12" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.inputNumber.exRangeT' | translate"
          [desc]="'docs.inputNumber.exRangeD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.inputNumber.ovLabel' | translate" [help]="'docs.inputNumber.helpStep' | translate">
                <hrm-input-number [(ngModel)]="days" [min]="0" [max]="12" [step]="1" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.inputNumber.exUnitT' | translate"
          [desc]="'docs.inputNumber.exUnitD' | translate">
          <sg-row>
            <div style="width:240px">
              <hrm-form-field [label]="'docs.inputNumber.kpiRate' | translate" help="0 \u2013 100%">
                <hrm-input-number [(ngModel)]="kpi" [min]="0" [max]="100" [step]="5" unit="%" />
              </hrm-form-field>
            </div>
            <div style="width:240px">
              <hrm-form-field [label]="'docs.inputNumber.otHours' | translate" [help]="'docs.inputNumber.helpOt' | translate">
                <hrm-input-number [(ngModel)]="ot" [min]="0" [max]="12" [step]="0.5" [precision]="1" [unit]="'docs.inputNumber.unitHour' | translate" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.inputNumber.exIntT' | translate"
          [desc]="'docs.inputNumber.exIntD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:180px"><hrm-input-number size="sm" [ngModel]="5" [min]="1" [max]="30" [precision]="0" [unit]="'docs.inputNumber.unitDay' | translate" /></div>
            <div style="width:180px"><hrm-input-number size="md" [ngModel]="5" [min]="1" [max]="30" [precision]="0" [unit]="'docs.inputNumber.unitDay' | translate" /></div>
            <div style="width:180px"><hrm-input-number size="lg" [ngModel]="5" [min]="1" [max]="30" [precision]="0" [unit]="'docs.inputNumber.unitDay' | translate" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocInputNumber, { className: "SgDocInputNumber", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/input-number.ts", lineNumber: 100 });
})();
export {
  SgDocInputNumber
};
//# sourceMappingURL=chunk-T7R6NLJD.js.map
