import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  HrmDatePicker
} from "./chunk-7D3VWBTS.js";
import "./chunk-P2RGU6CH.js";
import "./chunk-7NG4UTD7.js";
import "./chunk-INGBAYOP.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/date-picker.ts
var SgDocDatePicker = class _SgDocDatePicker {
  constructor() {
    this.startDate = null;
    this.startDate2 = null;
    this.birthDate = null;
    this.birthDate2 = null;
    this.signDate = null;
    this.expired = new Date(2020, 0, 1);
    this.validDate = new Date(2026, 0, 6);
    this.noFuture = (d) => d.getTime() > Date.now();
    this.noPast = (d) => {
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      return d.getTime() < today.getTime();
    };
    this.when = [
      "docs.datePicker.when1",
      "docs.datePicker.when2",
      "docs.datePicker.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDatePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDatePicker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDatePicker, selectors: [["sg-doc-date-picker"]], decls: 94, vars: 129, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "280px"], [3, "label", "help"], ["placeholder", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "280px"], [3, "label"], [2, "width", "200px"], ["placeholder", "dd/MM/yyyy", 3, "ngModel"], [2, "width", "240px"], ["placeholder", "dd/MM/yyyy HH:mm", 3, "showTime", "ngModel"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "190px"], ["size", "sm", 3, "placeholder", "ngModel"], ["size", "md", 3, "placeholder", "ngModel"], ["size", "lg", 3, "placeholder", "ngModel"], ["placeholder", "dd/MM/yyyy", 3, "ngModelChange", "ngModel", "disabledDate"], [3, "label", "required", "error"], ["status", "error", "placeholder", "dd/MM/yyyy", 3, "ngModel"], ["status", "warning", "placeholder", "dd/MM/yyyy", 3, "ngModel"], ["status", "success", "placeholder", "dd/MM/yyyy", 3, "ngModel"]], template: function SgDocDatePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-date-picker", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocDatePicker_Template_hrm_date_picker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
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
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "sg-example", 10);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 11)(33, "hrm-form-field", 3);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "hrm-date-picker", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocDatePicker_Template_hrm_date_picker_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.birthDate, $event) || (ctx.birthDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 11)(38, "hrm-form-field", 3);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "hrm-date-picker", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocDatePicker_Template_hrm_date_picker_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.signDate, $event) || (ctx.signDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "sg-example", 10);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row", 12);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "div", 13);
        \u0275\u0275element(48, "hrm-date-picker", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 15);
        \u0275\u0275element(50, "hrm-date-picker", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "sg-row", 17)(52, "div", 18);
        \u0275\u0275element(53, "hrm-date-picker", 19);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 18);
        \u0275\u0275element(56, "hrm-date-picker", 20);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 18);
        \u0275\u0275element(59, "hrm-date-picker", 21);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "sg-example", 10);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row")(65, "div", 11)(66, "hrm-form-field", 3);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementStart(69, "hrm-date-picker", 22);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocDatePicker_Template_hrm_date_picker_ngModelChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.birthDate2, $event) || (ctx.birthDate2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 11)(71, "hrm-form-field", 3);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementStart(74, "hrm-date-picker", 22);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocDatePicker_Template_hrm_date_picker_ngModelChange_74_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.startDate2, $event) || (ctx.startDate2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(75, "sg-example", 10);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementStart(78, "sg-row")(79, "div", 11)(80, "hrm-form-field", 23);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275element(83, "hrm-date-picker", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 11)(85, "hrm-form-field", 3);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275element(88, "hrm-date-picker", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 11)(90, "hrm-form-field", 3);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275element(93, "hrm-date-picker", 26);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 55, "docs.datePicker.title"))("desc", \u0275\u0275pipeBind1(2, 57, "docs.datePicker.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 59, "docs.datePicker.ovLabel"))("help", \u0275\u0275pipeBind1(7, 61, "docs.datePicker.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 63, "docs.datePicker.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 65, "docs.datePicker.behavior"))("avoid", \u0275\u0275pipeBind1(13, 67, "docs.datePicker.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 69, "docs.datePicker.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 71, "docs.datePicker.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 73, "docs.datePicker.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 75, "docs.datePicker.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 77, "docs.datePicker.exDescT"))("desc", \u0275\u0275pipeBind1(30, 79, "docs.datePicker.exDescD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 81, "docs.datePicker.birthLabel"))("help", \u0275\u0275pipeBind1(35, 83, "docs.datePicker.birthHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.birthDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(39, 85, "docs.datePicker.signLabel"))("help", \u0275\u0275pipeBind1(40, 87, "docs.datePicker.signHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.signDate);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 89, "docs.datePicker.exFormatT"))("desc", \u0275\u0275pipeBind1(44, 91, "docs.datePicker.exFormatD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(46, 93, "docs.datePicker.formatRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("showTime", true)("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(54, 95, "docs.datePicker.small"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 97, "docs.datePicker.medium"))("ngModel", null);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 99, "docs.datePicker.large"))("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 101, "docs.datePicker.exMinMaxT"))("desc", \u0275\u0275pipeBind1(63, 103, "docs.datePicker.exMinMaxD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(67, 105, "docs.datePicker.birthLabel"))("help", \u0275\u0275pipeBind1(68, 107, "docs.datePicker.noFutureHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.birthDate2);
        \u0275\u0275property("disabledDate", ctx.noFuture);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(72, 109, "docs.datePicker.ovLabel"))("help", \u0275\u0275pipeBind1(73, 111, "docs.datePicker.noPastHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.startDate2);
        \u0275\u0275property("disabledDate", ctx.noPast);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(76, 113, "docs.datePicker.exStateT"))("desc", \u0275\u0275pipeBind1(77, 115, "docs.datePicker.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(81, 117, "docs.datePicker.ovLabel"))("required", true)("error", \u0275\u0275pipeBind1(82, 119, "docs.datePicker.errStart"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(86, 121, "docs.datePicker.expireLabel"))("help", \u0275\u0275pipeBind1(87, 123, "docs.datePicker.expireHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.expired);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(91, 125, "docs.datePicker.ovLabel"))("help", \u0275\u0275pipeBind1(92, 127, "docs.datePicker.validHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.validDate);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmDatePicker, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDatePicker, [{
    type: Component,
    args: [{
      selector: "sg-doc-date-picker",
      imports: [FormsModule, TranslateModule, HrmDatePicker, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.datePicker.title' | translate" [desc]="'docs.datePicker.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:280px">
          <hrm-form-field [label]="'docs.datePicker.ovLabel' | translate" [help]="'docs.datePicker.ovHelp' | translate">
            <hrm-date-picker [(ngModel)]="startDate" placeholder="dd/MM/yyyy" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.datePicker.purpose' | translate"
          [when]="when"
          [behavior]="'docs.datePicker.behavior' | translate"
          [avoid]="'docs.datePicker.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.datePicker.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.datePicker.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.datePicker.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.datePicker.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.datePicker.exDescT' | translate"
          [desc]="'docs.datePicker.exDescD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.birthLabel' | translate" [help]="'docs.datePicker.birthHelp' | translate">
                <hrm-date-picker [(ngModel)]="birthDate" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.signLabel' | translate" [help]="'docs.datePicker.signHelp' | translate">
                <hrm-date-picker [(ngModel)]="signDate" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.datePicker.exFormatT' | translate"
          [desc]="'docs.datePicker.exFormatD' | translate">
          <sg-row [label]="'docs.datePicker.formatRow' | translate">
            <div style="width:200px"><hrm-date-picker placeholder="dd/MM/yyyy" [ngModel]="null" /></div>
            <div style="width:240px"><hrm-date-picker [showTime]="true" placeholder="dd/MM/yyyy HH:mm" [ngModel]="null" /></div>
          </sg-row>
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:190px"><hrm-date-picker size="sm" [placeholder]="'docs.datePicker.small' | translate" [ngModel]="null" /></div>
            <div style="width:190px"><hrm-date-picker size="md" [placeholder]="'docs.datePicker.medium' | translate" [ngModel]="null" /></div>
            <div style="width:190px"><hrm-date-picker size="lg" [placeholder]="'docs.datePicker.large' | translate" [ngModel]="null" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.datePicker.exMinMaxT' | translate"
          [desc]="'docs.datePicker.exMinMaxD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.birthLabel' | translate" [help]="'docs.datePicker.noFutureHelp' | translate">
                <hrm-date-picker [(ngModel)]="birthDate2" [disabledDate]="noFuture" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.ovLabel' | translate" [help]="'docs.datePicker.noPastHelp' | translate">
                <hrm-date-picker [(ngModel)]="startDate2" [disabledDate]="noPast" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.datePicker.exStateT' | translate"
          [desc]="'docs.datePicker.exStateD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.ovLabel' | translate" [required]="true" [error]="'docs.datePicker.errStart' | translate">
                <hrm-date-picker status="error" [ngModel]="null" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.expireLabel' | translate" [help]="'docs.datePicker.expireHelp' | translate">
                <hrm-date-picker status="warning" [ngModel]="expired" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.datePicker.ovLabel' | translate" [help]="'docs.datePicker.validHelp' | translate">
                <hrm-date-picker status="success" [ngModel]="validDate" placeholder="dd/MM/yyyy" />
              </hrm-form-field>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDatePicker, { className: "SgDocDatePicker", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/date-picker.ts", lineNumber: 109 });
})();
export {
  SgDocDatePicker
};
//# sourceMappingURL=chunk-JQZBLUCT.js.map
