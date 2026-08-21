import {
  NzOptionComponent,
  NzOptionGroupComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-WX4JWWTZ.js";
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
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-select.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.value;
function HrmSelect_Conditional_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 2);
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r1.value)("nzLabel", o_r1.label)("nzDisabled", o_r1.disabled ?? false);
  }
}
function HrmSelect_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-option-group", 1);
    \u0275\u0275repeaterCreate(1, HrmSelect_Conditional_1_For_1_For_2_Template, 1, 3, "nz-option", 2, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    \u0275\u0275property("nzLabel", g_r2.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r2.options);
  }
}
function HrmSelect_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmSelect_Conditional_1_For_1_Template, 3, 1, "nz-option-group", 1, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.groups());
  }
}
function HrmSelect_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 2);
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r4.value)("nzLabel", o_r4.label)("nzDisabled", o_r4.disabled ?? false);
  }
}
function HrmSelect_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmSelect_Conditional_2_For_1_Template, 1, 3, "nz-option", 2, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.options());
  }
}
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmSelect = class _HrmSelect extends HrmControl {
  constructor() {
    super(...arguments);
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groups = input([], ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.multiple = input(false, ...ngDevMode ? [{ debugName: "multiple" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allowClear = input(true, ...ngDevMode ? [{ debugName: "allowClear" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSearch = input(true, ...ngDevMode ? [{ debugName: "showSearch" }] : (
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
      let \u0275HrmSelect_BaseFactory;
      return function HrmSelect_Factory(__ngFactoryType__) {
        return (\u0275HrmSelect_BaseFactory || (\u0275HrmSelect_BaseFactory = \u0275\u0275getInheritedFactory(_HrmSelect)))(__ngFactoryType__ || _HrmSelect);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSelect, selectors: [["hrm-select"]], hostAttrs: [1, "hrm-select"], hostVars: 2, hostBindings: function HrmSelect_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { options: [1, "options"], groups: [1, "groups"], placeholder: [1, "placeholder"], multiple: [1, "multiple"], allowClear: [1, "allowClear"], showSearch: [1, "showSearch"], size: [1, "size"], status: [1, "status"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmSelect), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 3, vars: 9, consts: [[2, "width", "100%", 3, "ngModelChange", "nzBlur", "ngModel", "nzMode", "nzPlaceHolder", "nzAllowClear", "nzShowSearch", "nzDisabled", "nzSize", "nzStatus"], [3, "nzLabel"], [3, "nzValue", "nzLabel", "nzDisabled"]], template: function HrmSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-select", 0);
        \u0275\u0275listener("ngModelChange", function HrmSelect_Template_nz_select_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        })("nzBlur", function HrmSelect_Template_nz_select_nzBlur_0_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275conditionalCreate(1, HrmSelect_Conditional_1_Template, 2, 0)(2, HrmSelect_Conditional_2_Template, 2, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzMode", ctx.multiple() ? "multiple" : "default")("nzPlaceHolder", ctx.placeholder())("nzAllowClear", ctx.allowClear())("nzShowSearch", ctx.showSearch())("nzDisabled", ctx.disabled())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.groups().length ? 1 : 2);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzSelectModule, NzOptionComponent, NzSelectComponent, NzOptionGroupComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSelect, [{
    type: Component,
    args: [{
      selector: "hrm-select",
      imports: [FormsModule, NzSelectModule],
      template: `
    <nz-select
      style="width:100%"
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      (nzBlur)="markTouched()"
      [nzMode]="multiple() ? 'multiple' : 'default'"
      [nzPlaceHolder]="placeholder()"
      [nzAllowClear]="allowClear()"
      [nzShowSearch]="showSearch()"
      [nzDisabled]="disabled()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())">
      @if (groups().length) {
        @for (g of groups(); track g.label) {
          <nz-option-group [nzLabel]="g.label">
            @for (o of g.options; track o.value) {
              <nz-option [nzValue]="o.value" [nzLabel]="o.label" [nzDisabled]="o.disabled ?? false"></nz-option>
            }
          </nz-option-group>
        }
      } @else {
        @for (o of options(); track o.value) {
          <nz-option [nzValue]="o.value" [nzLabel]="o.label" [nzDisabled]="o.disabled ?? false"></nz-option>
        }
      }
    </nz-select>
  `,
      host: { class: "hrm-select", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmSelect), multi: true }]
    }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], multiple: [{ type: Input, args: [{ isSignal: true, alias: "multiple", required: false }] }], allowClear: [{ type: Input, args: [{ isSignal: true, alias: "allowClear", required: false }] }], showSearch: [{ type: Input, args: [{ isSignal: true, alias: "showSearch", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSelect, { className: "HrmSelect", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-select.ts", lineNumber: 46 });
})();

export {
  HrmSelect
};
//# sourceMappingURL=chunk-H3B7M4KL.js.map
