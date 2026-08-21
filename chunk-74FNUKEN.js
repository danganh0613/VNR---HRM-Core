import {
  HrmStatusCell
} from "./chunk-6PIPPRJM.js";
import {
  HrmAvatar
} from "./chunk-KS5WOU2W.js";
import {
  Check,
  TablerIconComponent,
  X
} from "./chunk-QL2Z65KF.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/domain-hrm/hrm-approval-flow.ts
function HrmApprovalFlow_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.icCheck)("size", 14);
  }
}
function HrmApprovalFlow_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.icX)("size", 14);
  }
}
function HrmApprovalFlow_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_3_r2 = \u0275\u0275nextContext().$index;
    \u0275\u0275textInterpolate1(" ", \u0275$index_3_r2 + 1, " ");
  }
}
function HrmApprovalFlow_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.title);
  }
}
function HrmApprovalFlow_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.role);
  }
}
function HrmApprovalFlow_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.time);
  }
}
function HrmApprovalFlow_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 3);
    \u0275\u0275conditionalCreate(2, HrmApprovalFlow_For_2_Conditional_2_Template, 1, 2, "tabler-icon", 4)(3, HrmApprovalFlow_For_2_Conditional_3_Template, 1, 2, "tabler-icon", 4)(4, HrmApprovalFlow_For_2_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275conditionalCreate(7, HrmApprovalFlow_For_2_Conditional_7_Template, 2, 1, "span", 7);
    \u0275\u0275element(8, "hrm-status", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275element(10, "hrm-avatar", 10);
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, HrmApprovalFlow_For_2_Conditional_14_Template, 2, 1, "div", 13);
    \u0275\u0275conditionalCreate(15, HrmApprovalFlow_For_2_Conditional_15_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-state", s_r3.state);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(s_r3.state === "approved" ? 2 : s_r3.state === "rejected" ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(s_r3.title ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r0.statusToneOf(s_r3.state))("label", ctx_r0.stepLabel(s_r3))("dot", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", ctx_r0.initialsOf(s_r3.name))("size", 36)("colorful", true)("colorSeed", s_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.role ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.time ? 15 : -1);
  }
}
function HrmApprovalFlow_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function HrmApprovalFlow_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.expanded() ? ctx_r0.collapseLabel() : ctx_r0.moreLabel(), " ");
  }
}
var HrmApprovalFlow = class _HrmApprovalFlow {
  constructor() {
    this.steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreLabel = input("", ...ngDevMode ? [{ debugName: "moreLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapseLabel = input("Thu g\u1ECDn", ...ngDevMode ? [{ debugName: "collapseLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedCount = input(0, ...ngDevMode ? [{ debugName: "collapsedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreClick = output();
    this.expanded = signal(false, ...ngDevMode ? [{ debugName: "expanded" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canToggle = computed(() => this.collapsedCount() > 0 && this.steps().length > this.collapsedCount(), ...ngDevMode ? [{ debugName: "canToggle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visibleSteps = computed(() => {
      const all = this.steps();
      if (this.expanded() || !this.canToggle())
        return all;
      return all.slice(0, this.collapsedCount());
    }, ...ngDevMode ? [{ debugName: "visibleSteps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icCheck = Check;
    this.icX = X;
  }
  toggle() {
    this.expanded.update((v) => !v);
    this.moreClick.emit();
  }
  /** Nhãn status của bước (pill) — theo ảnh mẫu MỌI bước đều có pill. Dùng stateLabel bên gọi cấp;
   *  thiếu → suy mặc định theo state. Vị trí pill: phải-trên (timeline) / dưới cùng (stepper). */
  stepLabel(s) {
    if (s.stateLabel)
      return s.stateLabel;
    return s.state === "approved" ? "\u0110\xE3 duy\u1EC7t" : s.state === "current" ? "\u0110ang x\u1EED l\xFD" : s.state === "rejected" ? "T\u1EEB ch\u1ED1i" : "Ch\u1EDD";
  }
  /** Map trạng thái bước → tông status hệ thống (đồng bộ hrm-status). */
  statusToneOf(s) {
    return s === "approved" ? "success" : s === "current" ? "warning" : s === "rejected" ? "error" : "neutral";
  }
  /** Chữ cái đầu (từ đầu + từ cuối) — khớp cách hrm-user-cell suy initials. */
  initialsOf(name) {
    const p = name.trim().split(/\s+/);
    return ((p[0]?.[0] ?? "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  static {
    this.\u0275fac = function HrmApprovalFlow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmApprovalFlow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmApprovalFlow, selectors: [["hrm-approval-flow"]], hostAttrs: [1, "hrm-approval-flow"], inputs: { steps: [1, "steps"], moreLabel: [1, "moreLabel"], collapseLabel: [1, "collapseLabel"], collapsedCount: [1, "collapsedCount"] }, outputs: { moreClick: "moreClick" }, decls: 4, vars: 1, consts: [[1, "af"], [1, "af-step"], ["type", "button", 1, "af-more"], [1, "af-node"], [3, "icon", "size"], [1, "af-body"], [1, "af-head"], [1, "af-title"], ["variant", "badge", 1, "af-status", 3, "status", "label", "dot"], [1, "af-person"], [3, "text", "size", "colorful", "colorSeed"], [1, "af-who"], [1, "af-name"], [1, "af-role"], [1, "af-time"], ["type", "button", 1, "af-more", 3, "click"]], template: function HrmApprovalFlow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, HrmApprovalFlow_For_2_Template, 16, 13, "div", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(3, HrmApprovalFlow_Conditional_3_Template, 2, 1, "button", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.visibleSteps());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canToggle() ? 3 : -1);
      }
    }, dependencies: [TablerIconComponent, HrmStatusCell, HrmAvatar], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  container: hrm-af / inline-size;\n}\n.af[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.af-step[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 12px;\n  padding-bottom: 18px;\n}\n.af-step[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.af-node[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  border-radius: var(--radius-full);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  border: 1.5px solid transparent;\n}\n.af-step[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  background: var(--border-sub);\n  border-radius: var(--radius-full);\n  left: 11px;\n  top: 28px;\n  bottom: 6px;\n  width: 2px;\n}\n.af-step[data-state=approved][_ngcontent-%COMP%]   .af-node[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.af-step[data-state=approved][_ngcontent-%COMP%]:not(:last-child)::after {\n  background: var(--primary-base);\n}\n.af-step[data-state=current][_ngcontent-%COMP%]   .af-node[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--static-white, #fff);\n}\n.af-step[data-state=current][_ngcontent-%COMP%]   .af-node[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -5px;\n  border-radius: var(--radius-full);\n  border: 1.5px dashed var(--primary-base);\n  animation: _ngcontent-%COMP%_hrm-af-spin 6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_hrm-af-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .af-step[data-state=current][_ngcontent-%COMP%]   .af-node[_ngcontent-%COMP%]::before {\n    animation: none;\n  }\n}\n.af-step[data-state=rejected][_ngcontent-%COMP%]   .af-node[_ngcontent-%COMP%] {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.af-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.af-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  min-width: 0;\n}\n.af-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-soft);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.af-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: none;\n}\n.af-person[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  min-width: 0;\n  margin-top: 2px;\n}\n.af-who[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.af-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.af-role[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.af-time[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.af-more[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin: 8px 0 0 36px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--primary-base);\n}\n.af-more[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@container hrm-af (min-width: 400px) {\n  .af[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .af-step[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    min-width: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n    gap: 10px;\n    padding-bottom: 0;\n  }\n  .af-step[_ngcontent-%COMP%]:not(:last-child)::after {\n    left: 12px;\n    right: auto;\n    top: 11px;\n    bottom: auto;\n    width: 100%;\n    height: 2px;\n  }\n  .af-body[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 6px;\n    width: 100%;\n  }\n  .af-head[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .af-title[_ngcontent-%COMP%] {\n    line-height: 1.3;\n    white-space: normal;\n  }\n  .af-status[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .af-person[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    max-width: 100%;\n  }\n  .af-who[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    min-width: 0;\n  }\n  .af-name[_ngcontent-%COMP%], \n   .af-role[_ngcontent-%COMP%], \n   .af-time[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .af-more[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=hrm-approval-flow.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmApprovalFlow, [{
    type: Component,
    args: [{ selector: "hrm-approval-flow", imports: [TablerIconComponent, HrmStatusCell, HrmAvatar], template: `
    <div class="af">
      @for (s of visibleSteps(); track $index; let i = $index) {
        <div class="af-step" [attr.data-state]="s.state">
          <span class="af-node">
            @if (s.state === 'approved') { <tabler-icon [icon]="icCheck" [size]="14" /> }
            @else if (s.state === 'rejected') { <tabler-icon [icon]="icX" [size]="14" /> }
            @else { {{ i + 1 }} }
          </span>
          <div class="af-body">
            <div class="af-head">
              @if (s.title) { <span class="af-title">{{ s.title }}</span> }
              <hrm-status class="af-status" [status]="statusToneOf(s.state)" [label]="stepLabel(s)" variant="badge" [dot]="true" />
            </div>
            <div class="af-person">
              <hrm-avatar [text]="initialsOf(s.name)" [size]="36" [colorful]="true" [colorSeed]="s.name" />
              <div class="af-who">
                <div class="af-name">{{ s.name }}</div>
                @if (s.role) { <div class="af-role">{{ s.role }}</div> }
                @if (s.time) { <div class="af-time">{{ s.time }}</div> }
              </div>
            </div>
          </div>
        </div>
      }
      @if (canToggle()) {
        <button type="button" class="af-more" (click)="toggle()">
          {{ expanded() ? collapseLabel() : moreLabel() }}
        </button>
      }
    </div>
  `, host: { class: "hrm-approval-flow" }, styles: ['/* angular:styles/component:css;c795cd825d7cf292451b16339bc6f816c16439b63b7efb54cd8cc17dacbb771b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/domain-hrm/hrm-approval-flow.ts */\n:host {\n  display: block;\n  container: hrm-af / inline-size;\n}\n.af {\n  display: flex;\n  flex-direction: column;\n}\n.af-step {\n  position: relative;\n  display: flex;\n  gap: 12px;\n  padding-bottom: 18px;\n}\n.af-step:last-child {\n  padding-bottom: 0;\n}\n.af-node {\n  position: relative;\n  z-index: 1;\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 24px;\n  height: 24px;\n  border-radius: var(--radius-full);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  border: 1.5px solid transparent;\n}\n.af-step:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  background: var(--border-sub);\n  border-radius: var(--radius-full);\n  left: 11px;\n  top: 28px;\n  bottom: 6px;\n  width: 2px;\n}\n.af-step[data-state=approved] .af-node {\n  background: var(--bg-surface);\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.af-step[data-state=approved]:not(:last-child)::after {\n  background: var(--primary-base);\n}\n.af-step[data-state=current] .af-node {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--static-white, #fff);\n}\n.af-step[data-state=current] .af-node::before {\n  content: "";\n  position: absolute;\n  inset: -5px;\n  border-radius: var(--radius-full);\n  border: 1.5px dashed var(--primary-base);\n  animation: hrm-af-spin 6s linear infinite;\n}\n@keyframes hrm-af-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .af-step[data-state=current] .af-node::before {\n    animation: none;\n  }\n}\n.af-step[data-state=rejected] .af-node {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.af-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.af-head {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  min-width: 0;\n}\n.af-title {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-soft);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.af-status {\n  margin-left: auto;\n  flex: none;\n}\n.af-person {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  min-width: 0;\n  margin-top: 2px;\n}\n.af-who {\n  flex: 1;\n  min-width: 0;\n}\n.af-name {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.af-role {\n  margin-top: 1px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.af-time {\n  margin-top: 1px;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.af-more {\n  align-self: flex-start;\n  margin: 8px 0 0 36px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--primary-base);\n}\n.af-more:hover {\n  text-decoration: underline;\n}\n@container hrm-af (min-width: 400px) {\n  .af {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .af-step {\n    flex: 1 1 0;\n    min-width: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n    gap: 10px;\n    padding-bottom: 0;\n  }\n  .af-step:not(:last-child)::after {\n    left: 12px;\n    right: auto;\n    top: 11px;\n    bottom: auto;\n    width: 100%;\n    height: 2px;\n  }\n  .af-body {\n    align-items: flex-start;\n    gap: 6px;\n    width: 100%;\n  }\n  .af-head {\n    justify-content: flex-start;\n  }\n  .af-title {\n    line-height: 1.3;\n    white-space: normal;\n  }\n  .af-status {\n    margin-left: 0;\n  }\n  .af-person {\n    justify-content: flex-start;\n    max-width: 100%;\n  }\n  .af-who {\n    flex: 0 1 auto;\n    min-width: 0;\n  }\n  .af-name,\n  .af-role,\n  .af-time {\n    white-space: normal;\n  }\n  .af-more {\n    align-self: flex-start;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=hrm-approval-flow.css.map */\n'] }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], moreLabel: [{ type: Input, args: [{ isSignal: true, alias: "moreLabel", required: false }] }], collapseLabel: [{ type: Input, args: [{ isSignal: true, alias: "collapseLabel", required: false }] }], collapsedCount: [{ type: Input, args: [{ isSignal: true, alias: "collapsedCount", required: false }] }], moreClick: [{ type: Output, args: ["moreClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmApprovalFlow, { className: "HrmApprovalFlow", filePath: "libs/hrm-ui/src/lib/domain-hrm/hrm-approval-flow.ts", lineNumber: 134 });
})();

export {
  HrmApprovalFlow
};
//# sourceMappingURL=chunk-74FNUKEN.js.map
