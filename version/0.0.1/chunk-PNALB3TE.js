import {
  Dots,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-action-cell.ts
var _forTrack0 = ($index, $item) => $item.key;
function HrmActionCell_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function HrmActionCell_For_1_Template_button_click_0_listener($event) {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fire(a_r2.key, $event));
    });
    \u0275\u0275element(1, "tabler-icon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275classProp("ac-danger", a_r2.danger);
    \u0275\u0275property("disabled", a_r2.disabled);
    \u0275\u0275attribute("aria-label", a_r2.label || null)("title", a_r2.label || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", a_r2.icon)("size", 18);
  }
}
function HrmActionCell_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function HrmActionCell_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fire("__more__", $event));
    });
    \u0275\u0275element(1, "tabler-icon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r2.moreLabel() || null)("title", ctx_r2.moreLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.dots)("size", 18);
  }
}
var HrmActionCell = class _HrmActionCell {
  constructor() {
    this.actions = input([], ...ngDevMode ? [{ debugName: "actions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(3, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bordered = input(false, ...ngDevMode ? [{ debugName: "bordered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreLabel = input("", ...ngDevMode ? [{ debugName: "moreLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.action = output();
    this.dots = Dots;
    this.visible = computed(() => this.actions().slice(0, this.max()), ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasOverflow = computed(() => this.actions().length > this.max(), ...ngDevMode ? [{ debugName: "hasOverflow" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  fire(key, e) {
    e.stopPropagation();
    this.action.emit(key);
  }
  static {
    this.\u0275fac = function HrmActionCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmActionCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmActionCell, selectors: [["hrm-action-cell"]], hostAttrs: [1, "hrm-action-cell"], hostVars: 2, hostBindings: function HrmActionCell_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-action-cell--bordered", ctx.bordered());
      }
    }, inputs: { actions: [1, "actions"], max: [1, "max"], bordered: [1, "bordered"], moreLabel: [1, "moreLabel"] }, outputs: { action: "action" }, decls: 3, vars: 1, consts: [["type", "button", 1, "ac-btn", 3, "ac-danger", "disabled"], ["type", "button", 1, "ac-btn"], ["type", "button", 1, "ac-btn", 3, "click", "disabled"], [3, "icon", "size"], ["type", "button", 1, "ac-btn", 3, "click"]], template: function HrmActionCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmActionCell_For_1_Template, 2, 7, "button", 0, _forTrack0);
        \u0275\u0275conditionalCreate(2, HrmActionCell_Conditional_2_Template, 2, 4, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.visible());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasOverflow() ? 2 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.ac-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: var(--icon-secondary);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition:\n    background var(--duration-fast) var(--ease-out),\n    color var(--duration-fast) var(--ease-out),\n    border-color var(--duration-fast) var(--ease-out);\n}\n.ac-btn[_ngcontent-%COMP%]:hover {\n  background: var(--overlay-hover);\n  color: var(--icon-primary);\n}\n.ac-btn[_ngcontent-%COMP%]:disabled {\n  color: var(--icon-disabled);\n  cursor: not-allowed;\n  background: transparent;\n}\n.ac-btn.ac-danger[_ngcontent-%COMP%]:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.hrm-action-cell--bordered[_nghost-%COMP%] {\n  gap: var(--space-2);\n}\n.hrm-action-cell--bordered[_nghost-%COMP%]   .ac-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.hrm-action-cell--bordered[_nghost-%COMP%]   .ac-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n  color: var(--primary-base);\n}\n.hrm-action-cell--bordered[_nghost-%COMP%]   .ac-btn.ac-danger[_ngcontent-%COMP%]:hover {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-action-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmActionCell, [{
    type: Component,
    args: [{ selector: "hrm-action-cell", imports: [TablerIconComponent], template: `
    @for (a of visible(); track a.key) {
      <button type="button" class="ac-btn" [class.ac-danger]="a.danger" [disabled]="a.disabled"
        [attr.aria-label]="a.label || null" [attr.title]="a.label || null" (click)="fire(a.key, $event)">
        <tabler-icon [icon]="$any(a.icon)" [size]="18" />
      </button>
    }
    @if (hasOverflow()) {
      <button type="button" class="ac-btn" [attr.aria-label]="moreLabel() || null" [attr.title]="moreLabel() || null"
        (click)="fire('__more__', $event)">
        <tabler-icon [icon]="dots" [size]="18" />
      </button>
    }
  `, host: { class: "hrm-action-cell", "[class.hrm-action-cell--bordered]": "bordered()" }, styles: ["/* angular:styles/component:css;e6999be044c3d255f2a9eb59f7952d28972e224bb953435b67e94b99c42e412b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-action-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.ac-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: var(--icon-secondary);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition:\n    background var(--duration-fast) var(--ease-out),\n    color var(--duration-fast) var(--ease-out),\n    border-color var(--duration-fast) var(--ease-out);\n}\n.ac-btn:hover {\n  background: var(--overlay-hover);\n  color: var(--icon-primary);\n}\n.ac-btn:disabled {\n  color: var(--icon-disabled);\n  cursor: not-allowed;\n  background: transparent;\n}\n.ac-btn.ac-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n:host(.hrm-action-cell--bordered) {\n  gap: var(--space-2);\n}\n:host(.hrm-action-cell--bordered) .ac-btn {\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n:host(.hrm-action-cell--bordered) .ac-btn:hover {\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n  color: var(--primary-base);\n}\n:host(.hrm-action-cell--bordered) .ac-btn.ac-danger:hover {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-action-cell.css.map */\n"] }]
  }], null, { actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }], moreLabel: [{ type: Input, args: [{ isSignal: true, alias: "moreLabel", required: false }] }], action: [{ type: Output, args: ["action"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmActionCell, { className: "HrmActionCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-action-cell.ts", lineNumber: 51 });
})();

export {
  HrmActionCell
};
//# sourceMappingURL=chunk-PNALB3TE.js.map
