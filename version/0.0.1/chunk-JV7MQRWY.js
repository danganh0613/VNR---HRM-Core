import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-SPBU533T.js";
import {
  toNzStatus
} from "./chunk-7IBNPHRP.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
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
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-entry/hrm-input-number.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmInputNumber = class _HrmInputNumber extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
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
    this.min = input(-Infinity, ...ngDevMode ? [{ debugName: "min" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(Infinity, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.step = input(1, ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.precision = input(null, ...ngDevMode ? [{ debugName: "precision" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unit = input("", ...ngDevMode ? [{ debugName: "unit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
    this.formatter = (v) => {
      if (v == null || isNaN(v))
        return "";
      const u = this.unit();
      return u ? `${v} ${u}` : `${v}`;
    };
    this.parser = (v) => {
      const raw = v.replace(/[^\d.-]/g, "");
      return raw === "" || raw === "-" ? 0 : Number(raw);
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmInputNumber_BaseFactory;
      return function HrmInputNumber_Factory(__ngFactoryType__) {
        return (\u0275HrmInputNumber_BaseFactory || (\u0275HrmInputNumber_BaseFactory = \u0275\u0275getInheritedFactory(_HrmInputNumber)))(__ngFactoryType__ || _HrmInputNumber);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmInputNumber, selectors: [["hrm-input-number"]], hostAttrs: [1, "hrm-input-number"], hostVars: 2, hostBindings: function HrmInputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], size: [1, "size"], status: [1, "status"], min: [1, "min"], max: [1, "max"], step: [1, "step"], precision: [1, "precision"], unit: [1, "unit"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmInputNumber), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 11, consts: [[2, "width", "100%", 3, "ngModelChange", "nzBlur", "ngModel", "nzMin", "nzMax", "nzStep", "nzPrecision", "nzSize", "nzStatus", "nzDisabled", "nzPlaceHolder", "nzFormatter", "nzParser"]], template: function HrmInputNumber_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-input-number", 0);
        \u0275\u0275listener("ngModelChange", function HrmInputNumber_Template_nz_input_number_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        })("nzBlur", function HrmInputNumber_Template_nz_input_number_nzBlur_0_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzMin", ctx.min())("nzMax", ctx.max())("nzStep", ctx.step())("nzPrecision", ctx.precision())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()))("nzDisabled", ctx.disabled())("nzPlaceHolder", ctx.placeholder())("nzFormatter", ctx.formatter)("nzParser", ctx.parser);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzInputNumberModule, NzInputNumberComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmInputNumber, [{
    type: Component,
    args: [{
      selector: "hrm-input-number",
      imports: [FormsModule, NzInputNumberModule],
      template: `
    <nz-input-number
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      (nzBlur)="markTouched()"
      [nzMin]="min()"
      [nzMax]="max()"
      [nzStep]="step()"
      [nzPrecision]="precision()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())"
      [nzDisabled]="disabled()"
      [nzPlaceHolder]="placeholder()"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      style="width:100%"></nz-input-number>
  `,
      host: { class: "hrm-input-number", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmInputNumber), multi: true }]
    }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], precision: [{ type: Input, args: [{ isSignal: true, alias: "precision", required: false }] }], unit: [{ type: Input, args: [{ isSignal: true, alias: "unit", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmInputNumber, { className: "HrmInputNumber", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-input-number.ts", lineNumber: 34 });
})();

export {
  HrmInputNumber
};
//# sourceMappingURL=chunk-JV7MQRWY.js.map
