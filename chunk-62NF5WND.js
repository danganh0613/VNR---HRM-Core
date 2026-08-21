import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/feedback/hrm-toast.service.ts
var HrmToastService = class _HrmToastService {
  constructor() {
    this.list = signal([], ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toasts = this.list.asReadonly();
    this.seq = 0;
    this.timers = /* @__PURE__ */ new Map();
  }
  /** Hiện 1 toast; duration>0 tự đóng sau duration(ms), =0 giữ đến khi bấm X. Trả về id. */
  show(tone, title, subtitle, duration = 4e3) {
    const id = ++this.seq;
    this.list.set([...this.list(), { id, tone, title, subtitle }]);
    if (duration > 0) {
      this.timers.set(id, setTimeout(() => this.dismiss(id), duration));
    }
    return id;
  }
  /** Tiện ích theo tone (title, phụ đề?, thời lượng?). */
  neutral(title, subtitle, duration) {
    return this.show("neutral", title, subtitle, duration);
  }
  info(title, subtitle, duration) {
    return this.show("info", title, subtitle, duration);
  }
  success(title, subtitle, duration) {
    return this.show("success", title, subtitle, duration);
  }
  warning(title, subtitle, duration) {
    return this.show("warning", title, subtitle, duration);
  }
  error(title, subtitle, duration) {
    return this.show("error", title, subtitle, duration);
  }
  /** Đóng 1 toast theo id. */
  dismiss(id) {
    const h = this.timers.get(id);
    if (h !== void 0) {
      clearTimeout(h);
      this.timers.delete(id);
    }
    this.list.set(this.list().filter((t) => t.id !== id));
  }
  /** Xoá toàn bộ toast. */
  clear() {
    this.timers.forEach((h) => clearTimeout(h));
    this.timers.clear();
    this.list.set([]);
  }
  static {
    this.\u0275fac = function HrmToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmToastService, factory: _HrmToastService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HrmToastService
};
//# sourceMappingURL=chunk-62NF5WND.js.map
