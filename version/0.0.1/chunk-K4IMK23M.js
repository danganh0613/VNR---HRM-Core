import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
} from "./chunk-P2RGU6CH.js";
import "./chunk-7NG4UTD7.js";
import "./chunk-INGBAYOP.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import {
  toNzStatus
} from "./chunk-7IBNPHRP.js";
import "./chunk-EGUSTVRG.js";
import "./chunk-ZUH7BZUU.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
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
  Input,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
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

// libs/hrm-ui/src/lib/data-entry/hrm-range-picker.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmRangePicker = class _HrmRangePicker extends HrmControl {
  constructor() {
    super(...arguments);
    this.format = input("dd/MM/yyyy", ...ngDevMode ? [{ debugName: "format" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input("", ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showTime = input(false, ...ngDevMode ? [{ debugName: "showTime" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabledDate = input(void 0, ...ngDevMode ? [{ debugName: "disabledDate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmRangePicker_BaseFactory;
      return function HrmRangePicker_Factory(__ngFactoryType__) {
        return (\u0275HrmRangePicker_BaseFactory || (\u0275HrmRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_HrmRangePicker)))(__ngFactoryType__ || _HrmRangePicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRangePicker, selectors: [["hrm-range-picker"]], hostAttrs: [1, "hrm-range-picker"], hostVars: 2, hostBindings: function HrmRangePicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { format: [1, "format"], size: [1, "size"], status: [1, "status"], showTime: [1, "showTime"], disabledDate: [1, "disabledDate"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmRangePicker), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 7, consts: [[2, "width", "100%", 3, "ngModelChange", "ngModel", "nzFormat", "nzDisabled", "nzSize", "nzStatus", "nzShowTime", "nzDisabledDate"]], template: function HrmRangePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-range-picker", 0);
        \u0275\u0275listener("ngModelChange", function HrmRangePicker_Template_nz_range_picker_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzFormat", ctx.format())("nzDisabled", ctx.disabled())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()))("nzShowTime", ctx.showTime())("nzDisabledDate", ctx.disabledDate());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzDatePickerModule, NzDatePickerComponent, NzRangePickerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRangePicker, [{
    type: Component,
    args: [{
      selector: "hrm-range-picker",
      imports: [FormsModule, NzDatePickerModule],
      template: `
    <nz-range-picker
      style="width:100%"
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzFormat]="format()"
      [nzDisabled]="disabled()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())"
      [nzShowTime]="showTime()"
      [nzDisabledDate]="disabledDate()"></nz-range-picker>
  `,
      host: { class: "hrm-range-picker", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmRangePicker), multi: true }]
    }]
  }], null, { format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], showTime: [{ type: Input, args: [{ isSignal: true, alias: "showTime", required: false }] }], disabledDate: [{ type: Input, args: [{ isSignal: true, alias: "disabledDate", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRangePicker, { className: "HrmRangePicker", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-range-picker.ts", lineNumber: 28 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/range-picker.ts
var SgDocRangePicker = class _SgDocRangePicker {
  constructor() {
    this.leave = [];
    this.shift = [];
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.s1 = [];
    this.s2 = [];
    this.s3 = [];
    this.when = [
      "docs.rangePicker.when1",
      "docs.rangePicker.when2",
      "docs.rangePicker.when3"
    ];
    this.noPast = (d) => {
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      return d.getTime() < today.getTime();
    };
  }
  static {
    this.\u0275fac = function SgDocRangePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRangePicker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRangePicker, selectors: [["sg-doc-range-picker"]], decls: 78, vars: 104, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "label", "help"], [3, "ngModelChange", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "320px"], [3, "label", "required", "help"], [3, "ngModelChange", "ngModel", "disabledDate"], [2, "width", "360px"], ["format", "dd/MM/yyyy HH:mm", 3, "ngModelChange", "ngModel", "showTime"], [2, "width", "300px"], [3, "label", "required", "error"], ["status", "error", 3, "ngModelChange", "ngModel"], ["status", "warning", 3, "ngModelChange", "ngModel"], ["status", "success", 3, "ngModelChange", "ngModel"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "260px"], ["size", "sm", 3, "ngModelChange", "ngModel"], ["size", "md", 3, "ngModelChange", "ngModel"], ["size", "lg", 3, "ngModelChange", "ngModel"]], template: function SgDocRangePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-range-picker", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.leave, $event) || (ctx.leave = $event);
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
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-dont");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "sg-example", 10);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 11)(36, "hrm-form-field", 12);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "hrm-range-picker", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.leave, $event) || (ctx.leave = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "sg-example", 10);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row")(44, "div", 14)(45, "hrm-form-field", 3);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "hrm-range-picker", 15);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shift, $event) || (ctx.shift = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(49, "sg-example", 10);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row")(53, "div", 16)(54, "hrm-form-field", 17);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "hrm-range-picker", 18);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.r1, $event) || (ctx.r1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 16)(59, "hrm-form-field", 3);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "hrm-range-picker", 19);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.r2, $event) || (ctx.r2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 16)(64, "hrm-form-field", 3);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementStart(67, "hrm-range-picker", 20);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_67_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.r3, $event) || (ctx.r3 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(68, "sg-example", 10);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "sg-row", 21)(72, "div", 22)(73, "hrm-range-picker", 23);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_73_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.s1, $event) || (ctx.s1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 22)(75, "hrm-range-picker", 24);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_75_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.s2, $event) || (ctx.s2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 22)(77, "hrm-range-picker", 25);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRangePicker_Template_hrm_range_picker_ngModelChange_77_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.s3, $event) || (ctx.s3 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 44, "docs.rangePicker.title"))("desc", \u0275\u0275pipeBind1(2, 46, "docs.rangePicker.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 48, "docs.rangePicker.ovLabel"))("help", \u0275\u0275pipeBind1(7, 50, "docs.rangePicker.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.leave);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 52, "docs.rangePicker.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 54, "docs.rangePicker.behavior"))("avoid", \u0275\u0275pipeBind1(13, 56, "docs.rangePicker.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 58, "docs.rangePicker.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 60, "docs.rangePicker.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 62, "docs.rangePicker.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 64, "docs.rangePicker.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 66, "docs.rangePicker.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 68, "docs.rangePicker.exLeaveT"))("desc", \u0275\u0275pipeBind1(33, 70, "docs.rangePicker.exLeaveD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 72, "docs.rangePicker.ovLabel"))("required", true)("help", \u0275\u0275pipeBind1(38, 74, "docs.rangePicker.leaveHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.leave);
        \u0275\u0275property("disabledDate", ctx.noPast);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 76, "docs.rangePicker.exTimeT"))("desc", \u0275\u0275pipeBind1(42, 78, "docs.rangePicker.exTimeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(46, 80, "docs.rangePicker.shiftLabel"))("help", \u0275\u0275pipeBind1(47, 82, "docs.rangePicker.shiftHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.shift);
        \u0275\u0275property("showTime", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 84, "docs.rangePicker.exStateT"))("desc", \u0275\u0275pipeBind1(51, 86, "docs.rangePicker.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(55, 88, "docs.rangePicker.leaveLabel"))("required", true)("error", \u0275\u0275pipeBind1(56, 90, "docs.rangePicker.errRange"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.r1);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(60, 92, "docs.rangePicker.payLabel"))("help", \u0275\u0275pipeBind1(61, 94, "docs.rangePicker.payHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(65, 96, "docs.rangePicker.filterLabel"))("help", \u0275\u0275pipeBind1(66, 98, "docs.rangePicker.filterHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.r3);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(69, 100, "docs.rangePicker.exSizeT"))("desc", \u0275\u0275pipeBind1(70, 102, "docs.rangePicker.exSizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.s1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.s2);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.s3);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmRangePicker, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRangePicker, [{
    type: Component,
    args: [{
      selector: "sg-doc-range-picker",
      imports: [FormsModule, TranslateModule, HrmRangePicker, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.rangePicker.title' | translate" [desc]="'docs.rangePicker.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-form-field [label]="'docs.rangePicker.ovLabel' | translate" [help]="'docs.rangePicker.ovHelp' | translate">
            <hrm-range-picker [(ngModel)]="leave" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.rangePicker.purpose' | translate"
          [when]="when"
          [behavior]="'docs.rangePicker.behavior' | translate"
          [avoid]="'docs.rangePicker.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.rangePicker.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.rangePicker.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.rangePicker.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.rangePicker.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.rangePicker.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.rangePicker.exLeaveT' | translate"
          [desc]="'docs.rangePicker.exLeaveD' | translate">
          <sg-row>
            <div style="width:320px">
              <hrm-form-field [label]="'docs.rangePicker.ovLabel' | translate" [required]="true" [help]="'docs.rangePicker.leaveHelp' | translate">
                <hrm-range-picker [(ngModel)]="leave" [disabledDate]="noPast" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rangePicker.exTimeT' | translate"
          [desc]="'docs.rangePicker.exTimeD' | translate">
          <sg-row>
            <div style="width:360px">
              <hrm-form-field [label]="'docs.rangePicker.shiftLabel' | translate" [help]="'docs.rangePicker.shiftHelp' | translate">
                <hrm-range-picker [(ngModel)]="shift" [showTime]="true" format="dd/MM/yyyy HH:mm" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rangePicker.exStateT' | translate"
          [desc]="'docs.rangePicker.exStateD' | translate">
          <sg-row>
            <div style="width:300px">
              <hrm-form-field [label]="'docs.rangePicker.leaveLabel' | translate" [required]="true" [error]="'docs.rangePicker.errRange' | translate">
                <hrm-range-picker status="error" [(ngModel)]="r1" />
              </hrm-form-field>
            </div>
            <div style="width:300px">
              <hrm-form-field [label]="'docs.rangePicker.payLabel' | translate" [help]="'docs.rangePicker.payHelp' | translate">
                <hrm-range-picker status="warning" [(ngModel)]="r2" />
              </hrm-form-field>
            </div>
            <div style="width:300px">
              <hrm-form-field [label]="'docs.rangePicker.filterLabel' | translate" [help]="'docs.rangePicker.filterHelp' | translate">
                <hrm-range-picker status="success" [(ngModel)]="r3" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.rangePicker.exSizeT' | translate"
          [desc]="'docs.rangePicker.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:260px"><hrm-range-picker size="sm" [(ngModel)]="s1" /></div>
            <div style="width:260px"><hrm-range-picker size="md" [(ngModel)]="s2" /></div>
            <div style="width:260px"><hrm-range-picker size="lg" [(ngModel)]="s3" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRangePicker, { className: "SgDocRangePicker", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/range-picker.ts", lineNumber: 96 });
})();
export {
  SgDocRangePicker
};
//# sourceMappingURL=chunk-K4IMK23M.js.map
