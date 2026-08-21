import {
  NzMessageService
} from "./chunk-I3UTBD2V.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/feedback/hrm-message.service.ts
var HrmMessageService = class _HrmMessageService {
  constructor() {
    this.nz = inject(NzMessageService);
  }
  success(content, duration) {
    this.nz.success(content, this.opts(duration));
  }
  info(content, duration) {
    this.nz.info(content, this.opts(duration));
  }
  warning(content, duration) {
    this.nz.warning(content, this.opts(duration));
  }
  error(content, duration) {
    this.nz.error(content, this.opts(duration));
  }
  /** Thông báo đang xử lý. duration=0 → giữ tới khi remove(). Trả messageId để đóng thủ công. */
  loading(content, duration) {
    return this.nz.loading(content, this.opts(duration)).messageId;
  }
  /** Đóng 1 thông báo theo id (từ loading), hoặc đóng tất cả nếu bỏ trống. */
  remove(id) {
    this.nz.remove(id);
  }
  opts(duration) {
    return duration === void 0 ? void 0 : { nzDuration: duration };
  }
  static {
    this.\u0275fac = function HrmMessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmMessageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmMessageService, factory: _HrmMessageService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmMessageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HrmMessageService
};
//# sourceMappingURL=chunk-WKDCGAQZ.js.map
