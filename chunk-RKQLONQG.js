import {
  NzDatePickerComponent,
  NzDatePickerModule
} from "./chunk-HFOJ6MC3.js";
import {
  toNzStatus
} from "./chunk-XC26CQEC.js";
import {
  HrmControl
} from "./chunk-KOD2JY6G.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import {
  Component,
  Input,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-date-picker.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmDatePicker = class _HrmDatePicker extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
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
      let \u0275HrmDatePicker_BaseFactory;
      return function HrmDatePicker_Factory(__ngFactoryType__) {
        return (\u0275HrmDatePicker_BaseFactory || (\u0275HrmDatePicker_BaseFactory = \u0275\u0275getInheritedFactory(_HrmDatePicker)))(__ngFactoryType__ || _HrmDatePicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDatePicker, selectors: [["hrm-date-picker"]], hostAttrs: [1, "hrm-date-picker"], hostVars: 2, hostBindings: function HrmDatePicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], format: [1, "format"], size: [1, "size"], status: [1, "status"], showTime: [1, "showTime"], disabledDate: [1, "disabledDate"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmDatePicker), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 8, consts: [[2, "width", "100%", 3, "ngModelChange", "nzOnOpenChange", "ngModel", "nzFormat", "nzPlaceHolder", "nzDisabled", "nzSize", "nzStatus", "nzShowTime", "nzDisabledDate"]], template: function HrmDatePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-date-picker", 0);
        \u0275\u0275listener("ngModelChange", function HrmDatePicker_Template_nz_date_picker_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        })("nzOnOpenChange", function HrmDatePicker_Template_nz_date_picker_nzOnOpenChange_0_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzFormat", ctx.format())("nzPlaceHolder", ctx.placeholder())("nzDisabled", ctx.disabled())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()))("nzShowTime", ctx.showTime())("nzDisabledDate", ctx.disabledDate());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzDatePickerModule, NzDatePickerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDatePicker, [{
    type: Component,
    args: [{
      selector: "hrm-date-picker",
      imports: [FormsModule, NzDatePickerModule],
      template: `
    <nz-date-picker
      style="width:100%"
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      (nzOnOpenChange)="markTouched()"
      [nzFormat]="format()"
      [nzPlaceHolder]="placeholder()"
      [nzDisabled]="disabled()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())"
      [nzShowTime]="showTime()"
      [nzDisabledDate]="disabledDate()"></nz-date-picker>
  `,
      host: { class: "hrm-date-picker", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmDatePicker), multi: true }]
    }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], showTime: [{ type: Input, args: [{ isSignal: true, alias: "showTime", required: false }] }], disabledDate: [{ type: Input, args: [{ isSignal: true, alias: "disabledDate", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDatePicker, { className: "HrmDatePicker", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-date-picker.ts", lineNumber: 30 });
})();

export {
  HrmDatePicker
};
//# sourceMappingURL=chunk-RKQLONQG.js.map
