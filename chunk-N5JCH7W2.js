import {
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
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

export {
  HrmRangePicker
};
//# sourceMappingURL=chunk-N5JCH7W2.js.map
