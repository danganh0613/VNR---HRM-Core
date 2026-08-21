import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-F6AHQ5QX.js";
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-ODJV4T5O.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import {
  DotsVertical,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  afterEveryRender,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
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
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/action/hrm-action-bar.ts
var _c0 = ["bar"];
var _c1 = ["btn"];
var _forTrack0 = ($index, $item) => $item.key;
function HrmActionBar_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 6);
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", a_r2.icon)("size", 15);
  }
}
function HrmActionBar_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 5, 1);
    \u0275\u0275listener("click", function HrmActionBar_For_3_Template_hrm_button_click_0_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.action.emit(a_r2.key));
    });
    \u0275\u0275conditionalCreate(2, HrmActionBar_For_3_Conditional_2_Template, 1, 2, "tabler-icon", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const \u0275$index_3_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", a_r2.tone === "neutral" ? "default" : "primary")("hidden", \u0275$index_3_r4 >= ctx_r2.visibleCount());
    \u0275\u0275attribute("data-tone", a_r2.tone);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r2.icon ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r2.label, " ");
  }
}
function HrmActionBar_Conditional_4_For_6_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 6);
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("icon", a_r6.icon)("size", 16);
  }
}
function HrmActionBar_Conditional_4_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function HrmActionBar_Conditional_4_For_6_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const a_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.action.emit(a_r6.key));
    });
    \u0275\u0275conditionalCreate(1, HrmActionBar_Conditional_4_For_6_Conditional_0_Conditional_1_Template, 1, 2, "tabler-icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("ab-mi-danger", a_r6.danger || a_r6.tone === "error");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r6.icon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r6.label, " ");
  }
}
function HrmActionBar_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmActionBar_Conditional_4_For_6_Conditional_0_Template, 3, 4, "li", 9);
  }
  if (rf & 2) {
    const \u0275$index_19_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275$index_19_r7 >= ctx_r2.visibleCount() ? 0 : -1);
  }
}
function HrmActionBar_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275element(1, "tabler-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "nz-dropdown-menu", null, 2)(4, "ul", 8);
    \u0275\u0275repeaterCreate(5, HrmActionBar_Conditional_4_For_6_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const moreMenu_r8 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzDropdownMenu", moreMenu_r8);
    \u0275\u0275attribute("aria-label", ctx_r2.moreLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icMore)("size", 16);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.actions());
  }
}
var HrmActionBar = class _HrmActionBar {
  constructor() {
    this.actions = input([], ...ngDevMode ? [{ debugName: "actions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreLabel = input("", ...ngDevMode ? [{ debugName: "moreLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.action = output();
    this.icMore = DotsVertical;
    this.bar = viewChild("bar", ...ngDevMode ? [{ debugName: "bar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.btns = viewChildren("btn", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "btns" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this.visibleCount = signal(99, ...ngDevMode ? [{ debugName: "visibleCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widths = [];
    effect(() => {
      this.actions();
      this.widths = [];
      this.visibleCount.set(99);
    });
    afterEveryRender(() => this.recompute());
  }
  /** Đo bề rộng nút + so bề rộng thanh → set số nút hiển thị; phần dư vào ⋮. */
  recompute() {
    const bar = this.bar()?.nativeElement;
    const btns = this.btns();
    if (!bar || !btns.length)
      return;
    btns.forEach((b, i) => {
      const w = b.nativeElement.offsetWidth;
      if (w > 0)
        this.widths[i] = w;
    });
    const n = this.actions().length;
    const gap = 8, moreW = 34 + gap;
    const avail = bar.clientWidth;
    const full = this.widths.slice(0, n).reduce((s, w, i) => s + (w || 0) + (i ? gap : 0), 0);
    let count;
    if (full <= avail) {
      count = n;
    } else {
      let used = 0;
      count = 0;
      for (let i = 0; i < n; i++) {
        const w = (this.widths[i] || 0) + (i ? gap : 0);
        if (used + w + moreW > avail)
          break;
        used += w;
        count++;
      }
      count = Math.max(1, count);
    }
    this.visibleCount.set(count);
  }
  static {
    this.\u0275fac = function HrmActionBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmActionBar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmActionBar, selectors: [["hrm-action-bar"]], viewQuery: function HrmActionBar_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.bar, _c0, 5)(ctx.btns, _c1, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, hostAttrs: [1, "hrm-action-bar"], inputs: { actions: [1, "actions"], moreLabel: [1, "moreLabel"] }, outputs: { action: "action" }, decls: 5, vars: 1, consts: [["bar", ""], ["btn", ""], ["moreMenu", "nzDropdownMenu"], [1, "ab"], ["size", "md", 3, "variant", "hidden"], ["size", "md", 3, "click", "variant", "hidden"], [3, "icon", "size"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ab-more", 3, "nzDropdownMenu"], ["nz-menu", "", 1, "ab-menu"], ["nz-menu-item", "", 3, "ab-mi-danger"], ["nz-menu-item", "", 3, "click"]], template: function HrmActionBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3, 0);
        \u0275\u0275repeaterCreate(2, HrmActionBar_For_3_Template, 4, 5, "hrm-button", 4, _forTrack0);
        \u0275\u0275conditionalCreate(4, HrmActionBar_Conditional_4_Template, 7, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.actions());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.visibleCount() < ctx.actions().length ? 4 : -1);
      }
    }, dependencies: [HrmButton, TablerIconComponent, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownDirective, NzDropdownMenuComponent, NzMenuModule], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n.ab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: nowrap;\n  min-width: 0;\n  width: 100%;\n}\nhrm-button[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\nhrm-button[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  margin-right: var(--space-0-5);\n}\nhrm-button[_ngcontent-%COMP%]     .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n  white-space: nowrap;\n}\n.ab-more[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ab-more[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\nhrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\n[_nghost-%COMP%]     .ab-menu .ant-dropdown-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ab-mi-danger[_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-action-bar.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmActionBar, [{
    type: Component,
    args: [{ selector: "hrm-action-bar", imports: [HrmButton, TablerIconComponent, NzDropDownModule, NzMenuModule], template: `
    <div class="ab" #bar>
      @for (a of actions(); track a.key; let i = $index) {
        <hrm-button #btn [variant]="a.tone === 'neutral' ? 'default' : 'primary'" size="md"
          [attr.data-tone]="a.tone" [hidden]="i >= visibleCount()" (click)="action.emit(a.key)">
          @if (a.icon) { <tabler-icon [icon]="$any(a.icon)" [size]="15" /> }
          {{ a.label }}
        </hrm-button>
      }
      @if (visibleCount() < actions().length) {
        <button type="button" class="ab-more" [attr.aria-label]="moreLabel() || null"
          nz-dropdown [nzDropdownMenu]="moreMenu" nzTrigger="click" nzPlacement="bottomRight">
          <tabler-icon [icon]="icMore" [size]="16" />
        </button>
        <nz-dropdown-menu #moreMenu="nzDropdownMenu">
          <ul nz-menu class="ab-menu">
            @for (a of actions(); track a.key; let i = $index) {
              @if (i >= visibleCount()) {
                <li nz-menu-item [class.ab-mi-danger]="a.danger || a.tone === 'error'" (click)="action.emit(a.key)">
                  @if (a.icon) { <tabler-icon [icon]="$any(a.icon)" [size]="16" /> }
                  {{ a.label }}
                </li>
              }
            }
          </ul>
        </nz-dropdown-menu>
      }
    </div>
  `, host: { class: "hrm-action-bar" }, styles: ["/* angular:styles/component:css;65db955b0cfe12aaa45b7e35d50bbd5cc333cad6e6829c243ae46665e6b15cdb;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/action/hrm-action-bar.ts */\n:host {\n  display: block;\n  min-width: 0;\n  width: 100%;\n}\n.ab {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: nowrap;\n  min-width: 0;\n  width: 100%;\n}\nhrm-button[hidden] {\n  display: none;\n}\nhrm-button tabler-icon {\n  margin-right: var(--space-0-5);\n}\nhrm-button ::ng-deep .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n  white-space: nowrap;\n}\n.ab-more {\n  margin-left: auto;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ab-more:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\nhrm-button[data-tone=error] ::ng-deep .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=error] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=warning] ::ng-deep .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=warning] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=violet] ::ng-deep .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=violet] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\n:host ::ng-deep .ab-menu .ant-dropdown-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ab-mi-danger {\n  color: var(--error-base);\n}\n/*# sourceMappingURL=hrm-action-bar.css.map */\n"] }]
  }], () => [], { actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false }] }], moreLabel: [{ type: Input, args: [{ isSignal: true, alias: "moreLabel", required: false }] }], action: [{ type: Output, args: ["action"] }], bar: [{ type: ViewChild, args: ["bar", { isSignal: true }] }], btns: [{ type: ViewChildren, args: ["btn", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmActionBar, { className: "HrmActionBar", filePath: "libs/hrm-ui/src/lib/action/hrm-action-bar.ts", lineNumber: 85 });
})();

export {
  HrmActionBar
};
//# sourceMappingURL=chunk-5MREAVB4.js.map
