import {
  NzTimePickerComponent,
  NzTimePickerModule
} from "./chunk-7O54XKAF.js";
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

// libs/hrm-ui/src/lib/data-entry/hrm-time-picker.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmTimePicker = class _HrmTimePicker extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.format = input("HH:mm", ...ngDevMode ? [{ debugName: "format" }] : (
      /* istanbul ignore next */
      []
    ));
    this.use12Hours = input(false, ...ngDevMode ? [{ debugName: "use12Hours" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minuteStep = input(1, ...ngDevMode ? [{ debugName: "minuteStep" }] : (
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
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmTimePicker_BaseFactory;
      return function HrmTimePicker_Factory(__ngFactoryType__) {
        return (\u0275HrmTimePicker_BaseFactory || (\u0275HrmTimePicker_BaseFactory = \u0275\u0275getInheritedFactory(_HrmTimePicker)))(__ngFactoryType__ || _HrmTimePicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTimePicker, selectors: [["hrm-time-picker"]], hostAttrs: [1, "hrm-time-picker"], hostVars: 2, hostBindings: function HrmTimePicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], format: [1, "format"], use12Hours: [1, "use12Hours"], minuteStep: [1, "minuteStep"], size: [1, "size"], status: [1, "status"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmTimePicker), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 8, consts: [[2, "width", "100%", 3, "ngModelChange", "ngModel", "nzFormat", "nzUse12Hours", "nzMinuteStep", "nzPlaceHolder", "nzDisabled", "nzSize", "nzStatus"]], template: function HrmTimePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-time-picker", 0);
        \u0275\u0275listener("ngModelChange", function HrmTimePicker_Template_nz_time_picker_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzFormat", ctx.format())("nzUse12Hours", ctx.use12Hours())("nzMinuteStep", ctx.minuteStep())("nzPlaceHolder", ctx.placeholder())("nzDisabled", ctx.disabled())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzTimePickerModule, NzTimePickerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTimePicker, [{
    type: Component,
    args: [{
      selector: "hrm-time-picker",
      imports: [FormsModule, NzTimePickerModule],
      template: `
    <nz-time-picker
      style="width:100%"
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzFormat]="format()"
      [nzUse12Hours]="use12Hours()"
      [nzMinuteStep]="minuteStep()"
      [nzPlaceHolder]="placeholder()"
      [nzDisabled]="disabled()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())"></nz-time-picker>
  `,
      host: { class: "hrm-time-picker", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmTimePicker), multi: true }]
    }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }], use12Hours: [{ type: Input, args: [{ isSignal: true, alias: "use12Hours", required: false }] }], minuteStep: [{ type: Input, args: [{ isSignal: true, alias: "minuteStep", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTimePicker, { className: "HrmTimePicker", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-time-picker.ts", lineNumber: 29 });
})();

export {
  HrmTimePicker
};
//# sourceMappingURL=chunk-3AU7CXEW.js.map
