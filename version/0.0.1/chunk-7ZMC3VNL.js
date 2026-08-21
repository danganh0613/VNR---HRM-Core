import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-OCA5G42J.js";
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
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-entry/hrm-checkbox.ts
var _c0 = ["*"];
var HrmCheckbox = class _HrmCheckbox extends HrmControl {
  constructor() {
    super(...arguments);
    this.indeterminate = input(false, ...ngDevMode ? [{ debugName: "indeterminate" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmCheckbox_BaseFactory;
      return function HrmCheckbox_Factory(__ngFactoryType__) {
        return (\u0275HrmCheckbox_BaseFactory || (\u0275HrmCheckbox_BaseFactory = \u0275\u0275getInheritedFactory(_HrmCheckbox)))(__ngFactoryType__ || _HrmCheckbox);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCheckbox, selectors: [["hrm-checkbox"]], hostAttrs: [1, "hrm-checkbox"], inputs: { indeterminate: [1, "indeterminate"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmCheckbox), multi: true }]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 3, consts: [["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "nzDisabled"]], template: function HrmCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "label", 0);
        \u0275\u0275listener("ngModelChange", function HrmCheckbox_Template_label_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzIndeterminate", ctx.indeterminate())("nzDisabled", ctx.disabled());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzCheckboxModule, NzCheckboxComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCheckbox, [{
    type: Component,
    args: [{
      selector: "hrm-checkbox",
      imports: [FormsModule, NzCheckboxModule],
      template: `
    <label nz-checkbox
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzIndeterminate]="indeterminate()"
      [nzDisabled]="disabled()">
      <ng-content />
    </label>
  `,
      host: { class: "hrm-checkbox" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmCheckbox), multi: true }]
    }]
  }], null, { indeterminate: [{ type: Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCheckbox, { className: "HrmCheckbox", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-checkbox.ts", lineNumber: 23 });
})();

export {
  HrmCheckbox
};
//# sourceMappingURL=chunk-7ZMC3VNL.js.map
