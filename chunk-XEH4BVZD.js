import {
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  Input,
  NgZone,
  Output,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/appshell/hrm-top-nav.ts
var _c0 = [[["", "tnBrand", ""]], [["", "tnNav", ""]], [["", "tnActions", ""]]];
var _c1 = ["[tnBrand]", "[tnNav]", "[tnActions]"];
var _forTrack0 = ($index, $item) => $item.key;
function HrmTopNav_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.logoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function HrmTopNav_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 9);
  }
  if (rf & 2) {
    const it_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", it_r3.icon)("size", 18);
  }
}
function HrmTopNav_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r3.badge);
  }
}
function HrmTopNav_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function HrmTopNav_For_7_Template_button_click_0_listener() {
      const it_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pick(it_r3));
    });
    \u0275\u0275conditionalCreate(1, HrmTopNav_For_7_Conditional_1_Template, 1, 2, "tabler-icon", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmTopNav_For_7_Conditional_4_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", it_r3.key === ctx_r0.selectedKey());
    \u0275\u0275property("disabled", it_r3.disabled ?? false);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r3.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r3.badge != null ? 4 : -1);
  }
}
function HrmTopNav_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function HrmTopNav_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleMenu($event));
    });
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-open", ctx_r0.menuOpen());
    \u0275\u0275attribute("aria-expanded", ctx_r0.menuOpen())("aria-label", ctx_r0.menuLabel() || null);
  }
}
function HrmTopNav_Conditional_11_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 9);
  }
  if (rf & 2) {
    const it_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", it_r6.icon)("size", 18);
  }
}
function HrmTopNav_Conditional_11_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r6.badge);
  }
}
function HrmTopNav_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function HrmTopNav_Conditional_11_For_2_Template_button_click_0_listener() {
      const it_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pick(it_r6));
    });
    \u0275\u0275conditionalCreate(1, HrmTopNav_Conditional_11_For_2_Conditional_1_Template, 1, 2, "tabler-icon", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmTopNav_Conditional_11_For_2_Conditional_4_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", it_r6.key === ctx_r0.selectedKey());
    \u0275\u0275property("disabled", it_r6.disabled ?? false);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r6.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r6.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r6.badge != null ? 4 : -1);
  }
}
function HrmTopNav_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, HrmTopNav_Conditional_11_For_2_Template, 5, 6, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.items());
  }
}
var HrmTopNav = class _HrmTopNav {
  /** Đo lại theo bề rộng THỰC của header → bật compact (<820, menu→hamburger) + narrow
   *  (<400, app thu search→icon). Gọi ở: ngAfterViewInit (initial), window:resize, ResizeObserver
   *  (đổi container không do window — VD gập side nav). offsetWidth luôn cho width thật (khác
   *  container-type từng làm sập layout). */
  measure() {
    const w = this.host.offsetWidth;
    if (w <= 0)
      return;
    this.compact.set(w < this.mobileBreakpoint());
    this.narrow.set(w < this.narrowBreakpoint());
    if (w >= this.mobileBreakpoint())
      this.menuOpen.set(false);
  }
  onResize() {
    this.measure();
  }
  ngAfterViewInit() {
    this.measure();
  }
  constructor() {
    this.host = inject(ElementRef).nativeElement;
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKey = input("", ...ngDevMode ? [{ debugName: "selectedKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.align = input("start", ...ngDevMode ? [{ debugName: "align" }] : (
      /* istanbul ignore next */
      []
    ));
    this.logoSrc = input("", ...ngDevMode ? [{ debugName: "logoSrc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ariaLabel = input("", ...ngDevMode ? [{ debugName: "ariaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.menuLabel = input("", ...ngDevMode ? [{ debugName: "menuLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mobileBreakpoint = input(820, ...ngDevMode ? [{ debugName: "mobileBreakpoint" }] : (
      /* istanbul ignore next */
      []
    ));
    this.narrowBreakpoint = input(400, ...ngDevMode ? [{ debugName: "narrowBreakpoint" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemClick = output();
    this.compact = signal(false, ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    ));
    this.narrow = signal(false, ...ngDevMode ? [{ debugName: "narrow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.menuOpen = signal(false, ...ngDevMode ? [{ debugName: "menuOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    const host = this.host;
    const zone = inject(NgZone);
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => zone.run(() => this.measure()));
      ro.observe(host);
      inject(DestroyRef).onDestroy(() => ro.disconnect());
    }
    const onDoc = (e) => {
      if (this.menuOpen() && !host.contains(e.target))
        this.menuOpen.set(false);
    };
    document.addEventListener("click", onDoc, true);
    inject(DestroyRef).onDestroy(() => document.removeEventListener("click", onDoc, true));
  }
  toggleMenu(e) {
    e.stopPropagation();
    this.menuOpen.update((v) => !v);
  }
  pick(it) {
    if (it.disabled)
      return;
    this.menuOpen.set(false);
    this.itemClick.emit(it);
  }
  static {
    this.\u0275fac = function HrmTopNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTopNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTopNav, selectors: [["hrm-top-nav"]], hostAttrs: [1, "hrm-top-nav"], hostBindings: function HrmTopNav_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function HrmTopNav_resize_HostBindingHandler() {
          return ctx.onResize();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { items: [1, "items"], selectedKey: [1, "selectedKey"], align: [1, "align"], logoSrc: [1, "logoSrc"], ariaLabel: [1, "ariaLabel"], menuLabel: [1, "menuLabel"], mobileBreakpoint: [1, "mobileBreakpoint"], narrowBreakpoint: [1, "narrowBreakpoint"] }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c1, decls: 12, vars: 10, consts: [[1, "tn"], [1, "tn-brand"], ["alt", "logo", 1, "tn-logo", 3, "src"], [1, "tn-items"], ["type", "button", 1, "tn-item", 3, "is-active", "disabled"], [1, "tn-flex"], ["type", "button", "aria-haspopup", "menu", 1, "tn-burger", 3, "is-open"], ["role", "menu", 1, "tn-drawer"], ["type", "button", 1, "tn-item", 3, "click", "disabled"], [3, "icon", "size"], [1, "tn-badge"], ["type", "button", "aria-haspopup", "menu", 1, "tn-burger", 3, "click"], [1, "tn-burger-ic"], ["type", "button", "role", "menuitem", 1, "tn-drawer-item", 3, "is-active", "disabled"], ["type", "button", "role", "menuitem", 1, "tn-drawer-item", 3, "click", "disabled"]], template: function HrmTopNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, HrmTopNav_Conditional_2_Template, 1, 1, "img", 2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3);
        \u0275\u0275projection(5, 1);
        \u0275\u0275repeaterCreate(6, HrmTopNav_For_7_Template, 5, 6, "button", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275projection(9, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, HrmTopNav_Conditional_10_Template, 2, 4, "button", 6);
        \u0275\u0275conditionalCreate(11, HrmTopNav_Conditional_11_Template, 3, 0, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("tn--center", ctx.align() === "center")("tn--compact", ctx.compact())("tn--narrow", ctx.narrow());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel() || null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.logoSrc() ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.compact() && ctx.items().length ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.compact() && ctx.menuOpen() ? 11 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.tn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  height: 56px;\n  padding: 0 16px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n}\n.tn-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n.tn-logo[_ngcontent-%COMP%] {\n  height: 28px;\n  width: auto;\n}\n.tn-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tn-items[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tn-item[_ngcontent-%COMP%] {\n  flex: none;\n}\n.tn--center[_ngcontent-%COMP%]   .tn-items[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.tn-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font-size: var(--fs-14);\n  font-weight: 400;\n  color: var(--text-body);\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tn-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-item[_ngcontent-%COMP%]:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.tn-item.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.dark[_nghost-%COMP%]   .tn-item.is-active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .tn-item.is-active[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n.tn-badge[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.tn-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 0 1 auto;\n  min-width: 0;\n  margin-left: auto;\n}\n.tn-burger[_ngcontent-%COMP%] {\n  flex: none;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  margin-left: 4px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-body);\n}\n.tn-burger[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.tn-burger[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.tn-burger-ic[_ngcontent-%COMP%], \n.tn-burger-ic[_ngcontent-%COMP%]::before, \n.tn-burger-ic[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: var(--radius-full);\n  background: currentColor;\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease), opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tn-burger-ic[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tn-burger-ic[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -6px;\n  left: 0;\n}\n.tn-burger-ic[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 6px;\n  left: 0;\n}\n.tn-burger.is-open[_ngcontent-%COMP%]   .tn-burger-ic[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.tn-burger.is-open[_ngcontent-%COMP%]   .tn-burger-ic[_ngcontent-%COMP%]::before {\n  transform: translateY(6px) rotate(45deg);\n}\n.tn-burger.is-open[_ngcontent-%COMP%]   .tn-burger-ic[_ngcontent-%COMP%]::after {\n  transform: translateY(-6px) rotate(-45deg);\n}\n.tn-drawer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 8px;\n  right: 8px;\n  z-index: 40;\n  margin-top: 6px;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n.tn-drawer-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  font-family: inherit;\n  text-align: left;\n}\n.tn-drawer-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-drawer-item[_ngcontent-%COMP%]:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.tn-drawer-item.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.tn-drawer-item[_ngcontent-%COMP%]   .tn-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.tn-burger[_ngcontent-%COMP%], \n.tn-drawer[_ngcontent-%COMP%] {\n  display: none;\n}\n.tn--compact[_ngcontent-%COMP%]   .tn-items[_ngcontent-%COMP%] {\n  display: none;\n}\n.tn--compact[_ngcontent-%COMP%]   .tn-burger[_ngcontent-%COMP%] {\n  display: grid;\n}\n.tn--compact[_ngcontent-%COMP%]   .tn-drawer[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=hrm-top-nav.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTopNav, [{
    type: Component,
    args: [{ selector: "hrm-top-nav", imports: [TablerIconComponent], template: `
    <header class="tn" [class.tn--center]="align() === 'center'"
      [class.tn--compact]="compact()" [class.tn--narrow]="narrow()"
      [attr.aria-label]="ariaLabel() || null">
      <div class="tn-brand">
        @if (logoSrc()) { <img class="tn-logo" [src]="logoSrc()" alt="logo" /> }
        <ng-content select="[tnBrand]" />
      </div>
      <!-- Menu inline (desktop) \u2014 \u1EA9n khi compact, gom v\xE0o hamburger. -->
      <nav class="tn-items">
        <ng-content select="[tnNav]" />
        @for (it of items(); track it.key) {
          <button type="button" class="tn-item" [class.is-active]="it.key === selectedKey()"
            [disabled]="it.disabled ?? false" (click)="pick(it)">
            @if (it.icon) { <tabler-icon [icon]="$any(it.icon)" [size]="18" /> }
            <span>{{ it.label }}</span>
            @if (it.badge != null) { <span class="tn-badge">{{ it.badge }}</span> }
          </button>
        }
      </nav>
      <div class="tn-flex"><ng-content select="[tnActions]" /></div>
      <!-- N\xFAt hamburger \u2014 ch\u1EC9 HI\u1EC6N khi h\u1EB9p (compact). M\u1EDF drawer menu d\u1ECDc. -->
      @if (compact() && items().length) {
        <button type="button" class="tn-burger" [class.is-open]="menuOpen()"
          [attr.aria-expanded]="menuOpen()" aria-haspopup="menu"
          [attr.aria-label]="menuLabel() || null" (click)="toggleMenu($event)">
          <span class="tn-burger-ic"></span>
        </button>
      }
      @if (compact() && menuOpen()) {
        <div class="tn-drawer" role="menu">
          @for (it of items(); track it.key) {
            <button type="button" class="tn-drawer-item" role="menuitem"
              [class.is-active]="it.key === selectedKey()"
              [disabled]="it.disabled ?? false" (click)="pick(it)">
              @if (it.icon) { <tabler-icon [icon]="$any(it.icon)" [size]="18" /> }
              <span>{{ it.label }}</span>
              @if (it.badge != null) { <span class="tn-badge">{{ it.badge }}</span> }
            </button>
          }
        </div>
      }
    </header>
  `, host: { class: "hrm-top-nav", "(window:resize)": "onResize()" }, styles: ['/* angular:styles/component:css;d02a98826452b5645e29e5126cce8a2d4c77a812850fa462d8ae663e598ce3c0;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/appshell/hrm-top-nav.ts */\n:host {\n  display: block;\n}\n.tn {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  height: 56px;\n  padding: 0 16px;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n}\n.tn-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n.tn-logo {\n  height: 28px;\n  width: auto;\n}\n.tn-items {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tn-items::-webkit-scrollbar {\n  display: none;\n}\n.tn-item {\n  flex: none;\n}\n.tn--center .tn-items {\n  justify-content: center;\n}\n.tn-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font-size: var(--fs-14);\n  font-weight: 400;\n  color: var(--text-body);\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tn-item:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-item:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.tn-item.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n:host-context(.dark) .tn-item.is-active {\n  color: var(--text-strong);\n}\n.tn-badge {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.tn-flex {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 0 1 auto;\n  min-width: 0;\n  margin-left: auto;\n}\n.tn-burger {\n  flex: none;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  margin-left: 4px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-body);\n}\n.tn-burger:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.tn-burger:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.tn-burger-ic,\n.tn-burger-ic::before,\n.tn-burger-ic::after {\n  content: "";\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: var(--radius-full);\n  background: currentColor;\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease), opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tn-burger-ic {\n  position: relative;\n}\n.tn-burger-ic::before {\n  position: absolute;\n  top: -6px;\n  left: 0;\n}\n.tn-burger-ic::after {\n  position: absolute;\n  top: 6px;\n  left: 0;\n}\n.tn-burger.is-open .tn-burger-ic {\n  background: transparent;\n}\n.tn-burger.is-open .tn-burger-ic::before {\n  transform: translateY(6px) rotate(45deg);\n}\n.tn-burger.is-open .tn-burger-ic::after {\n  transform: translateY(-6px) rotate(-45deg);\n}\n.tn-drawer {\n  position: absolute;\n  top: 100%;\n  left: 8px;\n  right: 8px;\n  z-index: 40;\n  margin-top: 6px;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n.tn-drawer-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 12px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  font-family: inherit;\n  text-align: left;\n}\n.tn-drawer-item:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tn-drawer-item:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.tn-drawer-item.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.tn-drawer-item .tn-badge {\n  margin-left: auto;\n}\n.tn-burger,\n.tn-drawer {\n  display: none;\n}\n.tn--compact .tn-items {\n  display: none;\n}\n.tn--compact .tn-burger {\n  display: grid;\n}\n.tn--compact .tn-drawer {\n  display: flex;\n}\n/*# sourceMappingURL=hrm-top-nav.css.map */\n'] }]
  }], () => [], { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], selectedKey: [{ type: Input, args: [{ isSignal: true, alias: "selectedKey", required: false }] }], align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false }] }], logoSrc: [{ type: Input, args: [{ isSignal: true, alias: "logoSrc", required: false }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], menuLabel: [{ type: Input, args: [{ isSignal: true, alias: "menuLabel", required: false }] }], mobileBreakpoint: [{ type: Input, args: [{ isSignal: true, alias: "mobileBreakpoint", required: false }] }], narrowBreakpoint: [{ type: Input, args: [{ isSignal: true, alias: "narrowBreakpoint", required: false }] }], itemClick: [{ type: Output, args: ["itemClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTopNav, { className: "HrmTopNav", filePath: "libs/hrm-ui/src/lib/appshell/hrm-top-nav.ts", lineNumber: 136 });
})();

export {
  HrmTopNav
};
//# sourceMappingURL=chunk-XEH4BVZD.js.map
