import {
  HrmControl
} from "./chunk-KOD2JY6G.js";
import {
  NzInputDirective,
  NzInputGroupComponent,
  NzInputGroupWhitSuffixOrPrefixDirective,
  NzInputModule
} from "./chunk-VA24G7CQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import {
  TablerIconComponent,
  X
} from "./chunk-QL2Z65KF.js";
import {
  Component,
  Input,
  computed,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-input.ts
function HrmInput_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.prefixIcon())("size", 16);
  }
}
function HrmInput_Conditional_0_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function HrmInput_Conditional_0_ng_template_4_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275element(1, "tabler-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r1.clearLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.xIcon)("size", 14);
  }
}
function HrmInput_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmInput_Conditional_0_ng_template_4_Conditional_0_Template, 2, 3, "button", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.clearable() && !!ctx_r1.value() ? 0 : -1);
  }
}
function HrmInput_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-input-group", 3)(1, "input", 4);
    \u0275\u0275listener("ngModelChange", function HrmInput_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emit($event));
    })("blur", function HrmInput_Conditional_0_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markTouched());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(2, HrmInput_Conditional_0_ng_template_2_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, HrmInput_Conditional_0_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const preTpl_r4 = \u0275\u0275reference(3);
    const sufTpl_r5 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzPrefix", ctx_r1.prefixIcon() ? preTpl_r4 : void 0)("nzSuffix", sufTpl_r5)("nzSize", ctx_r1.toNz(ctx_r1.size()))("nzStatus", ctx_r1.toNzStatus(ctx_r1.status()));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.value())("placeholder", ctx_r1.placeholder())("readOnly", ctx_r1.readonly())("disabled", ctx_r1.disabled())("type", ctx_r1.htmlType());
    \u0275\u0275attribute("maxlength", ctx_r1.maxlength());
  }
}
function HrmInput_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9);
    \u0275\u0275listener("ngModelChange", function HrmInput_Conditional_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emit($event));
    })("blur", function HrmInput_Conditional_1_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markTouched());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.value())("placeholder", ctx_r1.placeholder())("nzSize", ctx_r1.toNz(ctx_r1.size()))("nzStatus", ctx_r1.toNzStatus(ctx_r1.status()))("readOnly", ctx_r1.readonly())("disabled", ctx_r1.disabled())("type", ctx_r1.htmlType());
    \u0275\u0275attribute("maxlength", ctx_r1.maxlength());
  }
}
var toNzStatus = (s) => s === "success" ? "" : s;
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmInput = class _HrmInput extends HrmControl {
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
    this.readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.htmlType = input("text", ...ngDevMode ? [{ debugName: "htmlType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.maxlength = input(null, ...ngDevMode ? [{ debugName: "maxlength" }] : (
      /* istanbul ignore next */
      []
    ));
    this.prefixIcon = input(null, ...ngDevMode ? [{ debugName: "prefixIcon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearable = input(false, ...ngDevMode ? [{ debugName: "clearable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearLabel = input("", ...ngDevMode ? [{ debugName: "clearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
    this.xIcon = X;
    this.hasAffix = computed(() => !!this.prefixIcon() || this.clearable(), ...ngDevMode ? [{ debugName: "hasAffix" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  clear() {
    this.emit("");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmInput_BaseFactory;
      return function HrmInput_Factory(__ngFactoryType__) {
        return (\u0275HrmInput_BaseFactory || (\u0275HrmInput_BaseFactory = \u0275\u0275getInheritedFactory(_HrmInput)))(__ngFactoryType__ || _HrmInput);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmInput, selectors: [["hrm-input"]], hostAttrs: [1, "hrm-input"], hostVars: 2, hostBindings: function HrmInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], size: [1, "size"], status: [1, "status"], readonly: [1, "readonly"], htmlType: [1, "htmlType"], maxlength: [1, "maxlength"], prefixIcon: [1, "prefixIcon"], clearable: [1, "clearable"], clearLabel: [1, "clearLabel"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmInput), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["preTpl", ""], ["sufTpl", ""], ["nz-input", "", 3, "ngModel", "placeholder", "nzSize", "nzStatus", "readOnly", "disabled", "type"], [3, "nzPrefix", "nzSuffix", "nzSize", "nzStatus"], ["nz-input", "", 3, "ngModelChange", "blur", "ngModel", "placeholder", "readOnly", "disabled", "type"], [1, "hrm-input-pre", 3, "icon", "size"], ["type", "button", 1, "hrm-input-clear"], ["type", "button", 1, "hrm-input-clear", 3, "click"], [3, "icon", "size"], ["nz-input", "", 3, "ngModelChange", "blur", "ngModel", "placeholder", "nzSize", "nzStatus", "readOnly", "disabled", "type"]], template: function HrmInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmInput_Conditional_0_Template, 6, 10)(1, HrmInput_Conditional_1_Template, 1, 8, "input", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasAffix() ? 0 : 1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzInputModule, NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective, TablerIconComponent], styles: ["\n.hrm-input-pre[_ngcontent-%COMP%] {\n  color: var(--icon-secondary, var(--text-sub));\n  display: inline-flex;\n}\n.hrm-input-clear[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--icon-secondary, var(--text-sub));\n  border-radius: var(--radius-sm);\n}\n.hrm-input-clear[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=hrm-input.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmInput, [{
    type: Component,
    args: [{ selector: "hrm-input", imports: [FormsModule, NzInputModule, TablerIconComponent], template: `
    @if (hasAffix()) {
      <nz-input-group [nzPrefix]="prefixIcon() ? preTpl : undefined" [nzSuffix]="sufTpl"
        [nzSize]="toNz(size())" [nzStatus]="toNzStatus(status())">
        <input
          nz-input
          [ngModel]="value()"
          (ngModelChange)="emit($event)"
          (blur)="markTouched()"
          [placeholder]="placeholder()"
          [readOnly]="readonly()"
          [disabled]="disabled()"
          [type]="htmlType()"
          [attr.maxlength]="maxlength()" />
      </nz-input-group>
      <ng-template #preTpl><tabler-icon [icon]="$any(prefixIcon())" [size]="16" class="hrm-input-pre" /></ng-template>
      <ng-template #sufTpl>
        @if (clearable() && !!value()) {
          <button type="button" class="hrm-input-clear" (click)="clear()" [attr.aria-label]="clearLabel() || null">
            <tabler-icon [icon]="xIcon" [size]="14" />
          </button>
        }
      </ng-template>
    } @else {
      <input
        nz-input
        [ngModel]="value()"
        (ngModelChange)="emit($event)"
        (blur)="markTouched()"
        [placeholder]="placeholder()"
        [nzSize]="toNz(size())"
        [nzStatus]="toNzStatus(status())"
        [readOnly]="readonly()"
        [disabled]="disabled()"
        [type]="htmlType()"
        [attr.maxlength]="maxlength()" />
    }
  `, host: { class: "hrm-input", "[class.hrm-status-success]": "status() === 'success'" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmInput), multi: true }], styles: ["/* angular:styles/component:css;ada727fb6327392aec1a3937ef8f1584487f81fe03beeac1b45849ea62aad629;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-entry/hrm-input.ts */\n.hrm-input-pre {\n  color: var(--icon-secondary, var(--text-sub));\n  display: inline-flex;\n}\n.hrm-input-clear {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--icon-secondary, var(--text-sub));\n  border-radius: var(--radius-sm);\n}\n.hrm-input-clear:hover {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=hrm-input.css.map */\n"] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], htmlType: [{ type: Input, args: [{ isSignal: true, alias: "htmlType", required: false }] }], maxlength: [{ type: Input, args: [{ isSignal: true, alias: "maxlength", required: false }] }], prefixIcon: [{ type: Input, args: [{ isSignal: true, alias: "prefixIcon", required: false }] }], clearable: [{ type: Input, args: [{ isSignal: true, alias: "clearable", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmInput, { className: "HrmInput", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-input.ts", lineNumber: 71 });
})();

export {
  toNzStatus,
  HrmInput
};
//# sourceMappingURL=chunk-XC26CQEC.js.map
