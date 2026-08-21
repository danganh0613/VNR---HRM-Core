import {
  NzModalService
} from "./chunk-6VCEDPDY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/overlays/hrm-modal.service.ts
var HrmModalService = class _HrmModalService {
  constructor() {
    this.nz = inject(NzModalService);
  }
  confirm(opts) {
    this.nz.confirm({
      nzTitle: opts.title,
      nzContent: opts.content,
      nzOkText: opts.okText ?? "\u0110\u1ED3ng \xFD",
      nzCancelText: opts.cancelText ?? "Hu\u1EF7",
      nzOkDanger: opts.danger ?? false,
      // danger → icon cảnh báo tông đỏ (destructive), khớp badge nút Xoá. Bridge tô .hrm-confirm-danger.
      nzIconType: opts.danger ? "exclamation-circle" : void 0,
      nzWrapClassName: opts.danger ? "hrm-confirm-danger" : void 0,
      nzOnOk: opts.onOk,
      nzOnCancel: opts.onCancel
    });
  }
  /** Mở hộp thoại tuỳ biến (biểu mẫu, nội dung dài, toàn màn...). Trả về NzModalRef để đóng chủ động. */
  open(opts) {
    return this.nz.create({
      nzTitle: opts.title,
      nzContent: opts.content,
      nzWidth: opts.width,
      nzFooter: opts.footer === void 0 ? null : opts.footer,
      nzMaskClosable: opts.maskClosable ?? true,
      nzKeyboard: opts.keyboard ?? true,
      nzClosable: opts.closable ?? true,
      nzCentered: opts.centered ?? false,
      nzBodyStyle: opts.bodyStyle,
      nzWrapClassName: opts.wrapClassName
    });
  }
  info(title, content) {
    this.nz.info({ nzTitle: title, nzContent: content });
  }
  success(title, content) {
    this.nz.success({ nzTitle: title, nzContent: content });
  }
  error(title, content) {
    this.nz.error({ nzTitle: title, nzContent: content });
  }
  warning(title, content) {
    this.nz.warning({ nzTitle: title, nzContent: content });
  }
  static {
    this.\u0275fac = function HrmModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmModalService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmModalService, factory: _HrmModalService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmModalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HrmModalService
};
//# sourceMappingURL=chunk-JU7ANAEO.js.map
