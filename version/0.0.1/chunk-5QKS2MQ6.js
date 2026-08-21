import {
  ArrowBackUp,
  Ban,
  Check,
  Exchange,
  Pencil,
  Refresh,
  X
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/shared/hrm-workflow-status.ts
var HRM_WORKFLOW_STATUS = {
  pending: { tone: "warning", vi: "Ch\u1EDD duy\u1EC7t", en: "Pending approval" },
  approved: { tone: "success", vi: "\u0110\xE3 duy\u1EC7t", en: "Approved" },
  rejected: { tone: "error", vi: "\u0110\xE3 t\u1EEB ch\u1ED1i", en: "Rejected" },
  pendingCancel: { tone: "warning", vi: "Ch\u1EDD h\u1EE7y", en: "Pending cancellation" },
  cancelled: { tone: "error", vi: "\u0110\xE3 h\u1EE7y", en: "Cancelled" },
  changeRequested: { tone: "violet", vi: "Y\xEAu c\u1EA7u thay \u0111\u1ED5i", en: "Change requested" }
};
var HRM_WORKFLOW_ACTIONS = {
  // Chờ duyệt → Duyệt(xanh) | Từ chối(đỏ) | Yêu cầu thay đổi(tím)
  pending: [
    { key: "approve", vi: "Duy\u1EC7t", en: "Approve", to: "approved", variant: "primary", tone: "primary", icon: Check },
    { key: "reject", vi: "T\u1EEB ch\u1ED1i", en: "Reject", to: "rejected", variant: "primary", tone: "error", danger: true, icon: X },
    { key: "requestChange", vi: "Y\xEAu c\u1EA7u thay \u0111\u1ED5i", en: "Request change", to: "changeRequested", variant: "primary", tone: "violet", icon: Exchange }
  ],
  // Đã duyệt → Yêu cầu hủy(vàng) | Hủy(đỏ)
  approved: [
    { key: "requestCancel", vi: "Y\xEAu c\u1EA7u h\u1EE7y", en: "Request cancel", to: "pendingCancel", variant: "primary", tone: "warning", icon: Ban },
    { key: "cancel", vi: "H\u1EE7y", en: "Cancel", to: "cancelled", variant: "primary", tone: "error", danger: true, icon: X }
  ],
  // Đã từ chối → Đăng ký lại (→ Chờ duyệt)
  rejected: [
    { key: "resubmit", vi: "\u0110\u0103ng k\xFD l\u1EA1i", en: "Resubmit", to: "pending", variant: "primary", tone: "primary", icon: Refresh }
  ],
  // Chờ hủy → Duyệt hủy(đỏ) | Bỏ yêu cầu hủy(trung tính)
  pendingCancel: [
    { key: "approveCancel", vi: "Duy\u1EC7t h\u1EE7y", en: "Approve cancel", to: "cancelled", variant: "primary", tone: "error", danger: true, icon: Check },
    { key: "dismissCancel", vi: "B\u1ECF y\xEAu c\u1EA7u h\u1EE7y", en: "Dismiss cancel", to: "approved", variant: "default", tone: "neutral", icon: ArrowBackUp }
  ],
  // Đã hủy → (kết thúc) — không hành động
  cancelled: [],
  // Yêu cầu thay đổi → Chỉnh sửa(xanh) | Rút đơn(đỏ)
  changeRequested: [
    { key: "edit", vi: "Ch\u1EC9nh s\u1EEDa", en: "Edit", to: "pending", variant: "primary", tone: "primary", icon: Pencil },
    { key: "withdraw", vi: "R\xFAt \u0111\u01A1n", en: "Withdraw", to: "cancelled", variant: "primary", tone: "error", danger: true, icon: ArrowBackUp }
  ]
};

// libs/hrm-ui/src/lib/table-cells/hrm-status-cell.ts
function HrmStatusCell_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 0);
  }
}
var HrmStatusCell = class _HrmStatusCell {
  constructor() {
    this.status = input("neutral", ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("dot", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dot = input(false, ...ngDevMode ? [{ debugName: "dot" }] : (
      /* istanbul ignore next */
      []
    ));
    this.preset = input("", ...ngDevMode ? [{ debugName: "preset" }] : (
      /* istanbul ignore next */
      []
    ));
    this._tone = computed(() => {
      const p = this.preset();
      return p ? HRM_WORKFLOW_STATUS[p].tone : this.status();
    }, ...ngDevMode ? [{ debugName: "_tone" }] : (
      /* istanbul ignore next */
      []
    ));
    this._label = computed(() => this.label() || (this.preset() ? HRM_WORKFLOW_STATUS[this.preset()].vi : ""), ...ngDevMode ? [{ debugName: "_label" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmStatusCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmStatusCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmStatusCell, selectors: [["hrm-status-cell"], ["hrm-status"]], hostAttrs: [1, "hrm-status-cell"], hostVars: 2, hostBindings: function HrmStatusCell_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-status", ctx._tone())("data-variant", ctx.variant());
      }
    }, inputs: { status: [1, "status"], label: [1, "label"], variant: [1, "variant"], dot: [1, "dot"], preset: [1, "preset"] }, decls: 3, vars: 2, consts: [[1, "st-dot"], [1, "st-label"]], template: function HrmStatusCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmStatusCell_Conditional_0_Template, 1, 0, "span", 0);
        \u0275\u0275domElementStart(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant() === "dot" || ctx.variant() === "badge" && ctx.dot() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx._label());
      }
    }, styles: ['\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n  line-height: 1.4;\n}\n[data-status="success"][_nghost-%COMP%] {\n  --_c: var(--success-base);\n  --_bg: var(--success-bg);\n  --_tx: var(--success-text);\n}\n[data-status="warning"][_nghost-%COMP%] {\n  --_c: var(--warning-base);\n  --_bg: var(--warning-bg);\n  --_tx: var(--warning-text);\n}\n[data-status="error"][_nghost-%COMP%] {\n  --_c: var(--error-base);\n  --_bg: var(--error-bg);\n  --_tx: var(--error-text);\n}\n[data-status="info"][_nghost-%COMP%] {\n  --_c: var(--info-base);\n  --_bg: var(--info-bg);\n  --_tx: var(--info-text);\n}\n[data-status="processing"][_nghost-%COMP%] {\n  --_c: var(--info-base);\n  --_bg: var(--info-bg);\n  --_tx: var(--info-text);\n}\n[data-status="neutral"][_nghost-%COMP%] {\n  --_c: var(--text-sub);\n  --_bg: var(--bg-surface-subtle);\n  --_tx: var(--text-body);\n}\n[data-status="violet"][_nghost-%COMP%] {\n  --_c: var(--purple-500);\n  --_bg: var(--purple-100);\n  --_tx: var(--purple-600);\n}\n.st-dot[_ngcontent-%COMP%] {\n  flex: none;\n  width: 6px;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--_c);\n}\n[data-status="processing"][_nghost-%COMP%]   .st-dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_st-pulse 1.4s var(--ease-in-out) infinite;\n}\n[data-variant="dot"][_nghost-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--text-body);\n  font-weight: 400;\n}\n[data-variant="plain"][_nghost-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--_c);\n  font-weight: 400;\n}\n[data-variant="badge"][_nghost-%COMP%] {\n  background: color-mix(in srgb, var(--_c) 15%, var(--bg-surface));\n  color: var(--_tx);\n  padding: 2px 10px;\n  border-radius: var(--radius-sm);\n}\n[data-variant="badge"][_nghost-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--_tx);\n  font-weight: 500;\n}\n[data-variant="badge"][_nghost-%COMP%]   .st-dot[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n}\n[data-variant="solid"][_nghost-%COMP%] {\n  background: var(--_c);\n  padding: 2px 10px;\n  border-radius: var(--radius-sm);\n}\n[data-variant="solid"][_nghost-%COMP%]   .st-label[_ngcontent-%COMP%] {\n  color: var(--static-white, #fff);\n  font-weight: 400;\n}\n[data-variant="solid"][data-status="neutral"][_nghost-%COMP%] {\n  background: var(--neutral-500, var(--_c));\n}\n@keyframes _ngcontent-%COMP%_st-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n/*# sourceMappingURL=hrm-status-cell.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmStatusCell, [{
    type: Component,
    args: [{ selector: "hrm-status-cell, hrm-status", template: `
    @if (variant() === 'dot' || (variant() === 'badge' && dot())) {
      <span class="st-dot"></span>
    }
    <span class="st-label">{{ _label() }}</span>
  `, host: { class: "hrm-status-cell", "[attr.data-status]": "_tone()", "[attr.data-variant]": "variant()" }, styles: ['/* angular:styles/component:css;55765309be93138543c849ab024803f06ac38454c7013e35ecc46f30dae8fbef;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-status-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n  line-height: 1.4;\n}\n:host([data-status="success"]) {\n  --_c: var(--success-base);\n  --_bg: var(--success-bg);\n  --_tx: var(--success-text);\n}\n:host([data-status="warning"]) {\n  --_c: var(--warning-base);\n  --_bg: var(--warning-bg);\n  --_tx: var(--warning-text);\n}\n:host([data-status="error"]) {\n  --_c: var(--error-base);\n  --_bg: var(--error-bg);\n  --_tx: var(--error-text);\n}\n:host([data-status="info"]) {\n  --_c: var(--info-base);\n  --_bg: var(--info-bg);\n  --_tx: var(--info-text);\n}\n:host([data-status="processing"]) {\n  --_c: var(--info-base);\n  --_bg: var(--info-bg);\n  --_tx: var(--info-text);\n}\n:host([data-status="neutral"]) {\n  --_c: var(--text-sub);\n  --_bg: var(--bg-surface-subtle);\n  --_tx: var(--text-body);\n}\n:host([data-status="violet"]) {\n  --_c: var(--purple-500);\n  --_bg: var(--purple-100);\n  --_tx: var(--purple-600);\n}\n.st-dot {\n  flex: none;\n  width: 6px;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--_c);\n}\n:host([data-status="processing"]) .st-dot {\n  animation: st-pulse 1.4s var(--ease-in-out) infinite;\n}\n:host([data-variant="dot"]) .st-label {\n  color: var(--text-body);\n  font-weight: 400;\n}\n:host([data-variant="plain"]) .st-label {\n  color: var(--_c);\n  font-weight: 400;\n}\n:host([data-variant="badge"]) {\n  background: color-mix(in srgb, var(--_c) 15%, var(--bg-surface));\n  color: var(--_tx);\n  padding: 2px 10px;\n  border-radius: var(--radius-sm);\n}\n:host([data-variant="badge"]) .st-label {\n  color: var(--_tx);\n  font-weight: 500;\n}\n:host([data-variant="badge"]) .st-dot {\n  width: 5px;\n  height: 5px;\n}\n:host([data-variant="solid"]) {\n  background: var(--_c);\n  padding: 2px 10px;\n  border-radius: var(--radius-sm);\n}\n:host([data-variant="solid"]) .st-label {\n  color: var(--static-white, #fff);\n  font-weight: 400;\n}\n:host([data-variant="solid"][data-status="neutral"]) {\n  background: var(--neutral-500, var(--_c));\n}\n@keyframes st-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.35;\n  }\n}\n/*# sourceMappingURL=hrm-status-cell.css.map */\n'] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], dot: [{ type: Input, args: [{ isSignal: true, alias: "dot", required: false }] }], preset: [{ type: Input, args: [{ isSignal: true, alias: "preset", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmStatusCell, { className: "HrmStatusCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-status-cell.ts", lineNumber: 60 });
})();

export {
  HRM_WORKFLOW_STATUS,
  HRM_WORKFLOW_ACTIONS,
  HrmStatusCell
};
//# sourceMappingURL=chunk-5QKS2MQ6.js.map
