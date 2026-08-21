import {
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  HostListener,
  Injectable,
  Input,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/core/auth/current-user.service.ts
var MOCK_USER = {
  Id: "mock-user",
  Email: "demo@vnresource.vn",
  DisplayName: "Nguy\u1EC5n Minh Tu\u1EA5n",
  ProfileId: null,
  Roles: ["Admin"],
  Permissions: ["*"]
};
var CurrentUserService = class _CurrentUserService {
  constructor() {
    this._user = signal(MOCK_USER, ...ngDevMode ? [{ debugName: "_user" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = this._user.asReadonly();
  }
  has(_permission) {
    return true;
  }
  getActiveUserId() {
    return MOCK_USER.Id;
  }
  setActiveUserId(_id) {
  }
  clearActiveUser() {
    this._user.set(null);
  }
  async load() {
    this._user.set(MOCK_USER);
  }
  static {
    this.\u0275fac = function CurrentUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrentUserService, factory: _CurrentUserService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/overlays/hrm-command-palette.ts
var _c0 = ["inp"];
var _forTrack0 = ($index, $item) => $item.key;
function HrmCommandPalette_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.group);
  }
}
function HrmCommandPalette_Conditional_0_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 8);
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", c_r4.icon)("size", 16);
  }
}
function HrmCommandPalette_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, HrmCommandPalette_Conditional_0_For_6_Conditional_0_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(1, "button", 7);
    \u0275\u0275listener("mouseenter", function HrmCommandPalette_Conditional_0_For_6_Template_button_mouseenter_1_listener() {
      const \u0275$index_10_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeIdx.set(\u0275$index_10_r5));
    })("click", function HrmCommandPalette_Conditional_0_For_6_Template_button_click_1_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.run(c_r4));
    });
    \u0275\u0275conditionalCreate(2, HrmCommandPalette_Conditional_0_For_6_Conditional_2_Template, 1, 2, "tabler-icon", 8);
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const \u0275$index_10_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(c_r4.group && (\u0275$index_10_r5 === 0 || ctx_r1.filtered()[\u0275$index_10_r5 - 1].group !== c_r4.group) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-active", \u0275$index_10_r5 === ctx_r1.activeIdx());
    \u0275\u0275attribute("aria-selected", \u0275$index_10_r5 === ctx_r1.activeIdx());
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r4.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.label);
  }
}
function HrmCommandPalette_Conditional_0_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function HrmCommandPalette_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function HrmCommandPalette_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
    \u0275\u0275listener("input", function HrmCommandPalette_Conditional_0_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onQuery($event));
    })("keydown", function HrmCommandPalette_Conditional_0_Template_input_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKey($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, HrmCommandPalette_Conditional_0_For_6_Template, 5, 6, null, null, _forTrack0, false, HrmCommandPalette_Conditional_0_ForEmpty_7_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", ctx_r1.placeholder())("value", ctx_r1.query());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
var HrmCommandPaletteService = class _HrmCommandPaletteService {
  constructor() {
    this.visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    ));
    this._commands = signal([], ...ngDevMode ? [{ debugName: "_commands" }] : (
      /* istanbul ignore next */
      []
    ));
    this.commands = this._commands.asReadonly();
  }
  /** Đăng ký (cộng dồn theo key — key trùng thì ghi đè). */
  register(cmds) {
    const map = new Map(this._commands().map((c) => [c.key, c]));
    for (const c of cmds)
      map.set(c.key, c);
    this._commands.set([...map.values()]);
  }
  unregister(keys) {
    const drop = new Set(keys);
    this._commands.update((list) => list.filter((c) => !drop.has(c.key)));
  }
  open() {
    this.visible.set(true);
  }
  close() {
    this.visible.set(false);
  }
  toggle() {
    this.visible.update((v) => !v);
  }
  static {
    this.\u0275fac = function HrmCommandPaletteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCommandPaletteService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmCommandPaletteService, factory: _HrmCommandPaletteService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCommandPaletteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var HrmCommandPalette = class _HrmCommandPalette {
  constructor() {
    this.svc = inject(HrmCommandPaletteService);
    this.user = inject(CurrentUserService);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hotkey = input(true, ...ngDevMode ? [{ debugName: "hotkey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeIdx = signal(0, ...ngDevMode ? [{ debugName: "activeIdx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.inp = viewChild("inp", ...ngDevMode ? [{ debugName: "inp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      return this.svc.commands().filter((c) => !c.perm || this.user.has(c.perm)).filter((c) => !q || c.label.toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      if (this.svc.visible()) {
        this.query.set("");
        this.activeIdx.set(0);
        setTimeout(() => this.inp()?.nativeElement.focus());
      }
    });
  }
  onDocKey(e) {
    if (this.hotkey() && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      this.svc.toggle();
    } else if (e.key === "Escape" && this.svc.visible()) {
      this.svc.close();
    }
  }
  onQuery(e) {
    this.query.set(e.target.value);
    this.activeIdx.set(0);
  }
  onKey(e) {
    const n = this.filtered().length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      this.activeIdx.update((i) => (i + 1) % Math.max(n, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this.activeIdx.update((i) => (i - 1 + Math.max(n, 1)) % Math.max(n, 1));
    } else if (e.key === "Enter") {
      const c = this.filtered()[this.activeIdx()];
      if (c)
        this.run(c);
    }
  }
  run(c) {
    this.svc.close();
    c.action();
  }
  static {
    this.\u0275fac = function HrmCommandPalette_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCommandPalette)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCommandPalette, selectors: [["hrm-command-palette"]], viewQuery: function HrmCommandPalette_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.inp, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-command-palette"], hostBindings: function HrmCommandPalette_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function HrmCommandPalette_keydown_HostBindingHandler($event) {
          return ctx.onDocKey($event);
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { placeholder: [1, "placeholder"], emptyText: [1, "emptyText"], hotkey: [1, "hotkey"] }, decls: 1, vars: 1, consts: [["inp", ""], [1, "cp-mask", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "cp-box"], ["type", "text", 1, "cp-input", 3, "input", "keydown", "placeholder", "value"], ["role", "listbox", 1, "cp-list"], [1, "cp-empty"], [1, "cp-group"], ["type", "button", "role", "option", 1, "cp-item", 3, "mouseenter", "click"], [1, "cp-ic", 3, "icon", "size"], [1, "cp-label"]], template: function HrmCommandPalette_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmCommandPalette_Conditional_0_Template, 8, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.svc.visible() ? 0 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["\n.cp-mask[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay, rgba(0,0,0,.45));\n  z-index: var(--z-modal, 1000);\n}\n.cp-box[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  top: 18vh;\n  transform: translateX(-50%);\n  width: min(560px, calc(100vw - 32px));\n  z-index: calc(var(--z-modal, 1000) + 1);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.cp-input[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  font-size: var(--fs-15);\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cp-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-disabled);\n}\n.cp-list[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 6px;\n}\n.cp-group[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n  padding: 8px 10px 4px;\n}\n.cp-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  font-family: var(--font-sans);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.cp-item.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--text-strong);\n}\n.cp-ic[_ngcontent-%COMP%] {\n  display: inline-flex;\n  color: var(--icon-secondary);\n  flex: none;\n}\n.cp-label[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cp-empty[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  text-align: center;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-command-palette.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCommandPalette, [{
    type: Component,
    args: [{ selector: "hrm-command-palette", imports: [TablerIconComponent], template: `
    @if (svc.visible()) {
      <div class="cp-mask" (click)="svc.close()"></div>
      <div class="cp-box" role="dialog" aria-modal="true">
        <input #inp class="cp-input" type="text"
          [placeholder]="placeholder()"
          [value]="query()"
          (input)="onQuery($event)"
          (keydown)="onKey($event)" />
        <div class="cp-list" role="listbox">
          @for (c of filtered(); track c.key; let i = $index) {
            @if (c.group && (i === 0 || filtered()[i - 1].group !== c.group)) {
              <div class="cp-group">{{ c.group }}</div>
            }
            <button type="button" class="cp-item" role="option"
              [class.is-active]="i === activeIdx()"
              [attr.aria-selected]="i === activeIdx()"
              (mouseenter)="activeIdx.set(i)"
              (click)="run(c)">
              @if (c.icon) { <tabler-icon class="cp-ic" [icon]="$any(c.icon)" [size]="16" /> }
              <span class="cp-label">{{ c.label }}</span>
            </button>
          } @empty {
            <div class="cp-empty">{{ emptyText() }}</div>
          }
        </div>
      </div>
    }
  `, host: { class: "hrm-command-palette" }, styles: ["/* angular:styles/component:css;a6a8bffdb6395bee26ba41bda9c6cabf223bd7c1f9f96cb00b1689bcb794dd1c;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/overlays/hrm-command-palette.ts */\n.cp-mask {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay, rgba(0,0,0,.45));\n  z-index: var(--z-modal, 1000);\n}\n.cp-box {\n  position: fixed;\n  left: 50%;\n  top: 18vh;\n  transform: translateX(-50%);\n  width: min(560px, calc(100vw - 32px));\n  z-index: calc(var(--z-modal, 1000) + 1);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-lg);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.cp-input {\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  font-size: var(--fs-15);\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cp-input::placeholder {\n  color: var(--text-disabled);\n}\n.cp-list {\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 6px;\n}\n.cp-group {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n  padding: 8px 10px 4px;\n}\n.cp-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  font-family: var(--font-sans);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.cp-item.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--text-strong);\n}\n.cp-ic {\n  display: inline-flex;\n  color: var(--icon-secondary);\n  flex: none;\n}\n.cp-label {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cp-empty {\n  padding: 20px 12px;\n  text-align: center;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-command-palette.css.map */\n"] }]
  }], () => [], { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], hotkey: [{ type: Input, args: [{ isSignal: true, alias: "hotkey", required: false }] }], inp: [{ type: ViewChild, args: ["inp", { isSignal: true }] }], onDocKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCommandPalette, { className: "HrmCommandPalette", filePath: "libs/hrm-ui/src/lib/overlays/hrm-command-palette.ts", lineNumber: 107 });
})();

export {
  CurrentUserService,
  HrmCommandPaletteService,
  HrmCommandPalette
};
//# sourceMappingURL=chunk-6L2QNJGR.js.map
