import {
  Directive,
  setClassMetadata,
  signal,
  ɵɵdefineDirective
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/shared/hrm-control.ts
var HrmControl = class _HrmControl {
  constructor() {
    this.value = signal(null, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
  }
  writeValue(v) {
    this.value.set(v);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  /** con gọi khi user đổi giá trị */
  emit(v) {
    this.value.set(v);
    this._onChange(v);
  }
  markTouched() {
    this._onTouched();
  }
  static {
    this.\u0275fac = function HrmControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmControl)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmControl });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmControl, [{
    type: Directive
  }], null, null);
})();

export {
  HrmControl
};
//# sourceMappingURL=chunk-Q7XZAXLL.js.map
