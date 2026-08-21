import {
  REQUESTS,
  SgRequestDetail
} from "./chunk-BQV5ODMM.js";
import {
  HrmActionBar
} from "./chunk-5MREAVB4.js";
import "./chunk-FJLQWKKP.js";
import "./chunk-VLFJLHOW.js";
import {
  HRM_WORKFLOW_ACTIONS
} from "./chunk-5QKS2MQ6.js";
import "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-LQM5UC6B.js";
import {
  ActivatedRoute
} from "./chunk-WH372SY7.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  Location
} from "./chunk-D2BVEXVI.js";
import {
  ArrowBackUp,
  ArrowLeft,
  Pencil,
  Refresh,
  Send,
  TablerIconComponent,
  X
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-record-page.ts
function SgRequestRecord_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "hrm-action-bar", 11);
    \u0275\u0275listener("action", function SgRequestRecord_Conditional_8_Template_hrm_action_bar_action_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAction());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.actions());
  }
}
function SgRequestRecord_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "sg-request-detail", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("req", ctx_r1.row);
  }
}
function SgRequestRecord_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Kh\xF4ng t\xECm th\u1EA5y \u0111\u01A1n.");
    \u0275\u0275elementEnd();
  }
}
var SgRequestRecord = class _SgRequestRecord {
  constructor() {
    this.location = inject(Location);
    this.route = inject(ActivatedRoute);
    this.icBack = ArrowLeft;
    this.kind = this.route.snapshot.queryParamMap.get("kind") ?? "approval";
    this.row = REQUESTS.find((r) => String(r.id) === (this.route.snapshot.queryParamMap.get("id") ?? "")) ?? null;
  }
  /** Hành động topnav theo vai trò + trạng thái (demo — no-op). */
  actions() {
    const r = this.row;
    if (!r)
      return [];
    if (this.kind === "register")
      return this.regActions(r.status);
    if (r.status === "draft")
      return [];
    return (HRM_WORKFLOW_ACTIONS[r.status] ?? []).map((a) => ({ key: a.key, label: a.vi, tone: a.tone, icon: a.icon }));
  }
  regActions(s) {
    switch (s) {
      case "draft":
        return [
          { key: "submit", label: "G\u1EEDi duy\u1EC7t", tone: "primary", icon: Send },
          { key: "edit", label: "S\u1EEDa", tone: "neutral", icon: Pencil }
        ];
      case "pending":
        return [{ key: "withdraw", label: "Thu h\u1ED3i", tone: "warning", icon: ArrowBackUp }];
      case "rejected":
        return [{ key: "resubmit", label: "\u0110\u0103ng k\xFD l\u1EA1i", tone: "primary", icon: Refresh }];
      case "changeRequested":
        return [{ key: "edit", label: "Ch\u1EC9nh s\u1EEDa & g\u1EEDi l\u1EA1i", tone: "primary", icon: Pencil }];
      case "approved":
        return [{ key: "cancel", label: "Y\xEAu c\u1EA7u h\u1EE7y", tone: "warning", icon: X }];
      default:
        return [];
    }
  }
  onAction() {
  }
  back() {
    this.location.back();
  }
  static {
    this.\u0275fac = function SgRequestRecord_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgRequestRecord)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgRequestRecord, selectors: [["sg-request-record"]], hostAttrs: [1, "sg-request-record"], decls: 12, vars: 6, consts: [[1, "lr"], [1, "lr-nav"], [1, "lr-nav-in"], [1, "lr-nav-l"], ["size", "sm", "ariaLabel", "Quay l\u1EA1i", 3, "click", "iconOnly"], [3, "icon", "size"], [1, "lr-t"], [1, "lr-nav-r"], [1, "lr-body"], [1, "lr-card"], [1, "lr-empty"], ["moreLabel", "Th\xEAm", 3, "action", "actions"], [3, "req"]], template: function SgRequestRecord_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "hrm-button", 4);
        \u0275\u0275listener("click", function SgRequestRecord_Template_hrm_button_click_4_listener() {
          return ctx.back();
        });
        \u0275\u0275element(5, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, SgRequestRecord_Conditional_8_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275conditionalCreate(10, SgRequestRecord_Conditional_10_Template, 2, 1, "div", 9)(11, SgRequestRecord_Conditional_11_Template, 2, 0, "p", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icBack)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.row == null ? null : ctx.row.code) ?? "\u0110\u01A1n t\u1EEB");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.row ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.row ? 10 : 11);
      }
    }, dependencies: [TablerIconComponent, HrmButton, HrmActionBar, SgRequestDetail], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n  .shell-content:has(sg-request-record) {\n  padding: 0 !important;\n}\n.lr[_ngcontent-%COMP%] {\n  display: block;\n}\n.lr-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.lr-nav-in[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-12) var(--space-4);\n}\n.lr-nav-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-12);\n  min-width: 0;\n}\n.lr-nav-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-8);\n  flex: none;\n  min-width: 0;\n}\n.lr-t[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.lr-body[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: var(--space-20) var(--space-4) var(--space-8);\n}\n.lr-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.lr-empty[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=request-record-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgRequestRecord, [{
    type: Component,
    args: [{ selector: "sg-request-record", imports: [TablerIconComponent, HrmButton, HrmActionBar, SgRequestDetail], template: `
    <div class="lr">
      <div class="lr-nav">
        <div class="lr-nav-in">
          <div class="lr-nav-l">
            <hrm-button size="sm" [iconOnly]="true" ariaLabel="Quay l\u1EA1i" (click)="back()"><tabler-icon [icon]="icBack" [size]="18" /></hrm-button>
            <h1 class="lr-t">{{ row?.code ?? '\u0110\u01A1n t\u1EEB' }}</h1>
          </div>
          @if (row) {
            <div class="lr-nav-r"><hrm-action-bar [actions]="actions()" moreLabel="Th\xEAm" (action)="onAction()" /></div>
          }
        </div>
      </div>

      <div class="lr-body">
        @if (row) {
          <div class="lr-card"><sg-request-detail [req]="row" /></div>
        } @else {
          <p class="lr-empty">Kh\xF4ng t\xECm th\u1EA5y \u0111\u01A1n.</p>
        }
      </div>
    </div>
  `, host: { class: "sg-request-record" }, styles: ["/* angular:styles/component:css;5575a9c233f1aedac6f2838a59ca6923ab71b9caefcfed1e519dd9858eaa41cf;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-record-page.ts */\n:host {\n  display: block;\n}\n::ng-deep .shell-content:has(sg-request-record) {\n  padding: 0 !important;\n}\n.lr {\n  display: block;\n}\n.lr-nav {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.lr-nav-in {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-12) var(--space-4);\n}\n.lr-nav-l {\n  display: flex;\n  align-items: center;\n  gap: var(--space-12);\n  min-width: 0;\n}\n.lr-nav-r {\n  display: flex;\n  align-items: center;\n  gap: var(--space-8);\n  flex: none;\n  min-width: 0;\n}\n.lr-t {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  font-family: var(--font-mono, ui-monospace, monospace);\n}\n.lr-body {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: var(--space-20) var(--space-4) var(--space-8);\n}\n.lr-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.lr-empty {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=request-record-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgRequestRecord, { className: "SgRequestRecord", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-record-page.ts", lineNumber: 56 });
})();
export {
  SgRequestRecord
};
//# sourceMappingURL=chunk-ECHIOEF6.js.map
