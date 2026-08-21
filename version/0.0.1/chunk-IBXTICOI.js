import {
  toNzStatus
} from "./chunk-7IBNPHRP.js";
import {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputModule,
  NzTextareaCountComponent
} from "./chunk-EGUSTVRG.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-entry/hrm-textarea.ts
function HrmTextarea_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-textarea-count", 0)(1, "textarea", 2);
    \u0275\u0275listener("ngModelChange", function HrmTextarea_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emit($event));
    })("blur", function HrmTextarea_Conditional_0_Template_textarea_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markTouched());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMaxCharacterCount", ctx_r1.countMax());
    \u0275\u0275advance();
    \u0275\u0275styleProp("resize", ctx_r1.resizeCss());
    \u0275\u0275property("ngModel", ctx_r1.value())("placeholder", ctx_r1.placeholder())("nzStatus", ctx_r1.toNzStatus(ctx_r1.status()))("readOnly", ctx_r1.readonly())("disabled", ctx_r1.disabled())("nzAutosize", ctx_r1.autosize());
    \u0275\u0275attribute("rows", ctx_r1.rowsAttr());
  }
}
function HrmTextarea_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 2);
    \u0275\u0275listener("ngModelChange", function HrmTextarea_Conditional_1_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.emit($event));
    })("blur", function HrmTextarea_Conditional_1_Template_textarea_blur_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markTouched());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("resize", ctx_r1.resizeCss());
    \u0275\u0275property("ngModel", ctx_r1.value())("placeholder", ctx_r1.placeholder())("nzStatus", ctx_r1.toNzStatus(ctx_r1.status()))("readOnly", ctx_r1.readonly())("disabled", ctx_r1.disabled())("nzAutosize", ctx_r1.autosize());
    \u0275\u0275attribute("rows", ctx_r1.rowsAttr())("maxlength", ctx_r1.maxlength());
  }
}
var HrmTextarea = class _HrmTextarea extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
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
    this.minRows = input(3, ...ngDevMode ? [{ debugName: "minRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.maxRows = input(6, ...ngDevMode ? [{ debugName: "maxRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.maxlength = input(null, ...ngDevMode ? [{ debugName: "maxlength" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resize = input("auto", ...ngDevMode ? [{ debugName: "resize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showCount = input(false, ...ngDevMode ? [{ debugName: "showCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countMax = input(0, ...ngDevMode ? [{ debugName: "countMax" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toNzStatus = toNzStatus;
    this.autosize = computed(() => this.resize() === "auto" ? { minRows: this.minRows(), maxRows: this.maxRows() } : false, ...ngDevMode ? [{ debugName: "autosize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowsAttr = computed(() => this.resize() === "auto" ? null : this.minRows(), ...ngDevMode ? [{ debugName: "rowsAttr" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resizeCss = computed(() => this.resize() === "auto" ? null : this.resize(), ...ngDevMode ? [{ debugName: "resizeCss" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isOver = computed(() => {
      const max = this.countMax();
      return this.showCount() && max > 0 && (this.value()?.length ?? 0) > max;
    }, ...ngDevMode ? [{ debugName: "isOver" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasGrip = computed(() => {
      const r = this.resize();
      return this.showCount() || r === "vertical" || r === "both";
    }, ...ngDevMode ? [{ debugName: "hasGrip" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmTextarea_BaseFactory;
      return function HrmTextarea_Factory(__ngFactoryType__) {
        return (\u0275HrmTextarea_BaseFactory || (\u0275HrmTextarea_BaseFactory = \u0275\u0275getInheritedFactory(_HrmTextarea)))(__ngFactoryType__ || _HrmTextarea);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTextarea, selectors: [["hrm-textarea"]], hostAttrs: [1, "hrm-textarea"], hostVars: 6, hostBindings: function HrmTextarea_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-textarea--over", ctx.isOver())("hrm-textarea--grip", ctx.hasGrip())("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], status: [1, "status"], readonly: [1, "readonly"], minRows: [1, "minRows"], maxRows: [1, "maxRows"], maxlength: [1, "maxlength"], resize: [1, "resize"], showCount: [1, "showCount"], countMax: [1, "countMax"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmTextarea), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[3, "nzMaxCharacterCount"], ["nz-input", "", 3, "ngModel", "placeholder", "nzStatus", "readOnly", "disabled", "nzAutosize", "resize"], ["nz-input", "", 3, "ngModelChange", "blur", "ngModel", "placeholder", "nzStatus", "readOnly", "disabled", "nzAutosize"]], template: function HrmTextarea_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmTextarea_Conditional_0_Template, 2, 10, "nz-textarea-count", 0)(1, HrmTextarea_Conditional_1_Template, 1, 10, "textarea", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showCount() ? 0 : 1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzInputModule, NzTextareaCountComponent, NzInputDirective, NzAutosizeDirective], styles: [`
[_nghost-%COMP%] {
  position: relative;
}
[_nghost-%COMP%]     textarea::-webkit-resizer {
  display: none;
}
[_nghost-%COMP%]     .ant-input-textarea-show-count {
  position: relative;
}
[_nghost-%COMP%]     .ant-input-textarea-show-count textarea {
  padding-bottom: 24px;
}
[_nghost-%COMP%]     .ant-input-textarea-show-count::after {
  position: absolute;
  right: 6px;
  bottom: 6px;
  padding: 0;
  margin: 0;
  font-size: var(--fs-12);
  line-height: 12px;
  pointer-events: none;
}
.hrm-textarea--grip[_nghost-%COMP%]     .ant-input-textarea-show-count::after {
  right: 26px;
}
.hrm-textarea--grip[_nghost-%COMP%]::after {
  content: "";
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 12px;
  height: 12px;
  z-index: 2;
  pointer-events: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23c2c5cc' stroke-width='1.5' stroke-linecap='round'%3E%3Cpath d='M10.5 3.5 L3.5 10.5'/%3E%3Cpath d='M10.5 7.5 L7.5 10.5'/%3E%3C/svg%3E") center/contain no-repeat;
}
.hrm-textarea--over[_nghost-%COMP%]     .ant-input-textarea-show-count::after {
  color: var(--error-base, #ff4d4f);
}
/*# sourceMappingURL=hrm-textarea.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTextarea, [{
    type: Component,
    args: [{ selector: "hrm-textarea", imports: [FormsModule, NzInputModule], template: `
    @if (showCount()) {
      <nz-textarea-count [nzMaxCharacterCount]="countMax()">
        <textarea
          nz-input
          [ngModel]="value()"
          (ngModelChange)="emit($event)"
          (blur)="markTouched()"
          [placeholder]="placeholder()"
          [nzStatus]="toNzStatus(status())"
          [readOnly]="readonly()"
          [disabled]="disabled()"
          [nzAutosize]="autosize()"
          [attr.rows]="rowsAttr()"
          [style.resize]="resizeCss()"></textarea>
      </nz-textarea-count>
    } @else {
      <textarea
        nz-input
        [ngModel]="value()"
        (ngModelChange)="emit($event)"
        (blur)="markTouched()"
        [placeholder]="placeholder()"
        [nzStatus]="toNzStatus(status())"
        [readOnly]="readonly()"
        [disabled]="disabled()"
        [nzAutosize]="autosize()"
        [attr.rows]="rowsAttr()"
        [style.resize]="resizeCss()"
        [attr.maxlength]="maxlength()"></textarea>
    }
  `, host: {
      class: "hrm-textarea",
      "[class.hrm-textarea--over]": "isOver()",
      "[class.hrm-textarea--grip]": "hasGrip()",
      "[class.hrm-status-success]": "status() === 'success'"
    }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmTextarea), multi: true }], styles: [`/* angular:styles/component:css;d04bc7277a1782c3d3afd99b650801f355d7bec190f1783fb0a480a898d37ac6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-entry/hrm-textarea.ts */
:host {
  position: relative;
}
:host ::ng-deep textarea::-webkit-resizer {
  display: none;
}
:host ::ng-deep .ant-input-textarea-show-count {
  position: relative;
}
:host ::ng-deep .ant-input-textarea-show-count textarea {
  padding-bottom: 24px;
}
:host ::ng-deep .ant-input-textarea-show-count::after {
  position: absolute;
  right: 6px;
  bottom: 6px;
  padding: 0;
  margin: 0;
  font-size: var(--fs-12);
  line-height: 12px;
  pointer-events: none;
}
:host.hrm-textarea--grip ::ng-deep .ant-input-textarea-show-count::after {
  right: 26px;
}
:host.hrm-textarea--grip::after {
  content: "";
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 12px;
  height: 12px;
  z-index: 2;
  pointer-events: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23c2c5cc' stroke-width='1.5' stroke-linecap='round'%3E%3Cpath d='M10.5 3.5 L3.5 10.5'/%3E%3Cpath d='M10.5 7.5 L7.5 10.5'/%3E%3C/svg%3E") center/contain no-repeat;
}
:host.hrm-textarea--over ::ng-deep .ant-input-textarea-show-count::after {
  color: var(--error-base, #ff4d4f);
}
/*# sourceMappingURL=hrm-textarea.css.map */
`] }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], minRows: [{ type: Input, args: [{ isSignal: true, alias: "minRows", required: false }] }], maxRows: [{ type: Input, args: [{ isSignal: true, alias: "maxRows", required: false }] }], maxlength: [{ type: Input, args: [{ isSignal: true, alias: "maxlength", required: false }] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], showCount: [{ type: Input, args: [{ isSignal: true, alias: "showCount", required: false }] }], countMax: [{ type: Input, args: [{ isSignal: true, alias: "countMax", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTextarea, { className: "HrmTextarea", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-textarea.ts", lineNumber: 80 });
})();

export {
  HrmTextarea
};
//# sourceMappingURL=chunk-IBXTICOI.js.map
