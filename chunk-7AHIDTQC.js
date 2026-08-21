import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-PSR5ADGK.js";
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
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-radio-group.ts
var _forTrack0 = ($index, $item) => $item.value;
function HrmRadioGroup_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzValue", o_r1.value)("nzDisabled", o_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.label);
  }
}
function HrmRadioGroup_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzValue", o_r1.value)("nzDisabled", o_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.label);
  }
}
function HrmRadioGroup_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmRadioGroup_For_2_Conditional_0_Template, 2, 3, "label", 1)(1, HrmRadioGroup_For_2_Conditional_1_Template, 2, 3, "label", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.variant() === "button" ? 0 : 1);
  }
}
var HrmRadioGroup = class _HrmRadioGroup extends HrmControl {
  constructor() {
    super(...arguments);
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("default", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmRadioGroup_BaseFactory;
      return function HrmRadioGroup_Factory(__ngFactoryType__) {
        return (\u0275HrmRadioGroup_BaseFactory || (\u0275HrmRadioGroup_BaseFactory = \u0275\u0275getInheritedFactory(_HrmRadioGroup)))(__ngFactoryType__ || _HrmRadioGroup);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRadioGroup, selectors: [["hrm-radio-group"]], hostAttrs: [1, "hrm-radio-group"], inputs: { options: [1, "options"], variant: [1, "variant"], size: [1, "size"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmRadioGroup), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "ngModelChange", "ngModel", "nzDisabled", "nzButtonStyle", "nzSize"], ["nz-radio-button", "", 3, "nzValue", "nzDisabled"], ["nz-radio", "", 3, "nzValue", "nzDisabled"]], template: function HrmRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-radio-group", 0);
        \u0275\u0275listener("ngModelChange", function HrmRadioGroup_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275repeaterCreate(1, HrmRadioGroup_For_2_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzDisabled", ctx.disabled())("nzButtonStyle", "solid")("nzSize", ctx.size() === "sm" ? "small" : ctx.size() === "lg" ? "large" : "default");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzRadioModule, NzRadioComponent, NzRadioGroupComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRadioGroup, [{
    type: Component,
    args: [{
      selector: "hrm-radio-group",
      imports: [FormsModule, NzRadioModule],
      template: `
    <nz-radio-group
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzDisabled]="disabled()"
      [nzButtonStyle]="'solid'"
      [nzSize]="size() === 'sm' ? 'small' : size() === 'lg' ? 'large' : 'default'">
      @for (o of options(); track o.value) {
        @if (variant() === 'button') {
          <label nz-radio-button [nzValue]="o.value" [nzDisabled]="o.disabled">{{ o.label }}</label>
        } @else {
          <label nz-radio [nzValue]="o.value" [nzDisabled]="o.disabled">{{ o.label }}</label>
        }
      }
    </nz-radio-group>
  `,
      host: { class: "hrm-radio-group" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmRadioGroup), multi: true }]
    }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRadioGroup, { className: "HrmRadioGroup", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-radio-group.ts", lineNumber: 30 });
})();

export {
  HrmRadioGroup
};
//# sourceMappingURL=chunk-7AHIDTQC.js.map
