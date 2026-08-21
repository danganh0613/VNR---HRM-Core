import {
  NzDrawerComponent,
  NzDrawerContentDirective,
  NzDrawerModule
} from "./chunk-UZ3ETBYP.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-6VCEDPDY.js";
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
  Router
} from "./chunk-WH372SY7.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  AppWindow,
  ArrowsDiagonal,
  Check,
  ExternalLink,
  Layout,
  LayoutColumns,
  LayoutSidebarRight,
  Maximize,
  TablerIconComponent,
  X
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  model,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/overlays/hrm-detail-peek.ts
var _c0 = () => ({ "max-height": "70vh", "overflow-y": "auto" });
var _c1 = (a0) => ({ $implicit: a0 });
function HrmDetailPeek_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275elementContainer(1, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footer());
  }
}
function HrmDetailPeek_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 10)(1, "div", 11);
    \u0275\u0275listener("pointerdown", function HrmDetailPeek_Conditional_0_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "master"));
    });
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275elementContainer(4, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275elementContainer(6, 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, HrmDetailPeek_Conditional_0_Conditional_7_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const peekHead_r3 = \u0275\u0275reference(7);
    \u0275\u0275styleProp("width", ctx_r1.masterW(), "px");
    \u0275\u0275classProp("dp-resizing", ctx_r1.resizing());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.resizeLabel() || null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", peekHead_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c1, ctx_r1.peekMode()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.footer() ? 7 : -1);
  }
}
function HrmDetailPeek_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275listener("pointerdown", function HrmDetailPeek_ng_container_3_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "side"));
    });
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(3, 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("dp-resizing", ctx_r1.resizing());
    \u0275\u0275attribute("aria-label", ctx_r1.resizeLabel() || null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c1, ctx_r1.peekMode()));
  }
}
function HrmDetailPeek_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctx_r1.peekMode()));
  }
}
function HrmDetailPeek_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function HrmDetailPeek_ng_template_6_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMode("full"));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.expandLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icExpand)("size", 17);
  }
}
function HrmDetailPeek_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, HrmDetailPeek_ng_template_6_Conditional_1_Template, 3, 3);
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 23);
    \u0275\u0275listener("click", function HrmDetailPeek_ng_template_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(7, "tabler-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const modeMenu_r7 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("nzDropdownMenu", modeMenu_r7);
    \u0275\u0275attribute("aria-label", ctx_r1.switchLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icLayout)("size", 17);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.closeLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icClose)("size", 17);
  }
}
function HrmDetailPeek_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.icCheck)("size", 16);
  }
}
function HrmDetailPeek_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275listener("click", function HrmDetailPeek_For_12_Template_li_click_0_listener() {
      const m_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMode(m_r9));
    });
    \u0275\u0275elementStart(1, "span", 27);
    \u0275\u0275element(2, "tabler-icon", 28);
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, HrmDetailPeek_For_12_Conditional_5_Template, 1, 2, "tabler-icon", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.iconOf(m_r9))("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.labelOf(m_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r9 === ctx_r1.peekMode() && (m_r9 === "master" || m_r9 === "side" || m_r9 === "center") ? 5 : -1);
  }
}
var HrmDetailPeek = class _HrmDetailPeek {
  constructor() {
    this.router = inject(Router);
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekMode = model("side", ...ngDevMode ? [{ debugName: "peekMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modes = input(["side", "center", "full", "tab"], ...ngDevMode ? [{ debugName: "modes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.content = input(null, ...ngDevMode ? [{ debugName: "content" }] : (
      /* istanbul ignore next */
      []
    ));
    this.footer = input(null, ...ngDevMode ? [{ debugName: "footer" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = input(440, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masterWidth = input(400, ...ngDevMode ? [{ debugName: "masterWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modalWidth = input(680, ...ngDevMode ? [{ debugName: "modalWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.routeUrl = input("", ...ngDevMode ? [{ debugName: "routeUrl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modeLabels = input({}, ...ngDevMode ? [{ debugName: "modeLabels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.switchLabel = input("", ...ngDevMode ? [{ debugName: "switchLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expandLabel = input("", ...ngDevMode ? [{ debugName: "expandLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expandable = input(true, ...ngDevMode ? [{ debugName: "expandable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeLabel = input("", ...ngDevMode ? [{ debugName: "closeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resizeLabel = input("", ...ngDevMode ? [{ debugName: "resizeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masterWWrite = signal(null, ...ngDevMode ? [{ debugName: "masterWWrite" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sideWWrite = signal(null, ...ngDevMode ? [{ debugName: "sideWWrite" }] : (
      /* istanbul ignore next */
      []
    ));
    this.masterW = computed(() => this.masterWWrite() ?? this.masterWidth(), ...ngDevMode ? [{ debugName: "masterW" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sideW = computed(() => this.sideWWrite() ?? this.width(), ...ngDevMode ? [{ debugName: "sideW" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resizing = signal(false, ...ngDevMode ? [{ debugName: "resizing" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icExpand = ArrowsDiagonal;
    this.icLayout = Layout;
    this.icClose = X;
    this.icCheck = Check;
    this.icons = {
      master: LayoutColumns,
      side: LayoutSidebarRight,
      center: AppWindow,
      full: Maximize,
      tab: ExternalLink
    };
    this.bodyTpl = computed(() => this.content(), ...ngDevMode ? [{ debugName: "bodyTpl" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Bắt đầu kéo: neo phải nên kéo sang TRÁI = rộng ra. Clamp [320, 760] (đơn giản, luôn kéo được). */
  startResize(e, target) {
    e.preventDefault();
    const startW = target === "master" ? this.masterW() : this.sideW();
    const startX = e.clientX;
    this.resizing.set(true);
    const move = (ev) => {
      const nw = Math.max(320, Math.min(760, startW + (startX - ev.clientX)));
      if (target === "master")
        this.masterWWrite.set(nw);
      else
        this.sideWWrite.set(nw);
    };
    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
      this.resizing.set(false);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }
  iconOf(m) {
    return this.icons[m];
  }
  labelOf(m) {
    return this.modeLabels()[m] ?? m;
  }
  close() {
    this.open.set(false);
  }
  /** Chọn mode: side/center render tại chỗ; full điều hướng route; tab mở tab browser mới. */
  setMode(m) {
    const url = this.routeUrl();
    if (m === "full") {
      if (url) {
        this.router.navigateByUrl(url);
        this.open.set(false);
      }
      return;
    }
    if (m === "tab") {
      if (url)
        window.open(url, "_blank", "noopener");
      return;
    }
    this.peekMode.set(m);
  }
  static {
    this.\u0275fac = function HrmDetailPeek_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDetailPeek)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDetailPeek, selectors: [["hrm-detail-peek"]], hostAttrs: [1, "hrm-detail-peek"], inputs: { open: [1, "open"], peekMode: [1, "peekMode"], modes: [1, "modes"], title: [1, "title"], content: [1, "content"], footer: [1, "footer"], width: [1, "width"], masterWidth: [1, "masterWidth"], modalWidth: [1, "modalWidth"], routeUrl: [1, "routeUrl"], modeLabels: [1, "modeLabels"], switchLabel: [1, "switchLabel"], expandLabel: [1, "expandLabel"], expandable: [1, "expandable"], closeLabel: [1, "closeLabel"], resizeLabel: [1, "resizeLabel"] }, outputs: { open: "openChange", peekMode: "peekModeChange" }, decls: 13, vars: 14, consts: [["peekHead", ""], ["modeMenu", "nzDropdownMenu"], [1, "dp-master", 3, "dp-resizing", "width"], [1, "dp-anchors"], ["nzWrapClassName", "dp-side-wrap", "nzPlacement", "right", 3, "nzOnClose", "nzVisible", "nzWidth", "nzMask", "nzClosable", "nzTitle", "nzFooter"], [4, "nzDrawerContent"], ["nzCentered", "", 3, "nzOnCancel", "nzVisible", "nzWidth", "nzTitle", "nzClosable", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], ["nz-menu", "", 1, "pk-menu"], ["nz-menu-item", ""], [1, "dp-master"], ["role", "separator", "aria-orientation", "vertical", 1, "dp-resize", 3, "pointerdown"], [1, "dp-grip"], [1, "dp-mhead"], [3, "ngTemplateOutlet"], [1, "dp-mbody"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dp-mfoot"], ["role", "separator", "aria-orientation", "vertical", 1, "dp-resize", "dp-resize--drawer", 3, "pointerdown"], [1, "pk-head"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomLeft", 1, "pk-ic", 3, "nzDropdownMenu"], [3, "icon", "size"], [1, "pk-title"], ["type", "button", 1, "pk-ic", "pk-close", 3, "click"], ["type", "button", 1, "pk-ic", 3, "click"], [1, "pk-sep"], ["nz-menu-item", "", 3, "click"], [1, "pk-mi"], [1, "pk-mi-ic", 3, "icon", "size"], [1, "pk-mi-l"], [1, "pk-mi-ck", 3, "icon", "size"]], template: function HrmDetailPeek_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmDetailPeek_Conditional_0_Template, 8, 11, "aside", 2);
        \u0275\u0275elementStart(1, "div", 3)(2, "nz-drawer", 4);
        \u0275\u0275listener("nzOnClose", function HrmDetailPeek_Template_nz_drawer_nzOnClose_2_listener() {
          return ctx.close();
        });
        \u0275\u0275template(3, HrmDetailPeek_ng_container_3_Template, 4, 7, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nz-modal", 6);
        \u0275\u0275listener("nzOnCancel", function HrmDetailPeek_Template_nz_modal_nzOnCancel_4_listener() {
          return ctx.close();
        });
        \u0275\u0275template(5, HrmDetailPeek_ng_container_5_Template, 2, 4, "ng-container", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, HrmDetailPeek_ng_template_6_Template, 8, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(8, "nz-dropdown-menu", null, 1)(10, "ul", 8);
        \u0275\u0275repeaterCreate(11, HrmDetailPeek_For_12_Template, 6, 4, "li", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const peekHead_r3 = \u0275\u0275reference(7);
        \u0275\u0275conditional(ctx.open() && ctx.peekMode() === "master" ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzVisible", ctx.open() && ctx.peekMode() === "side")("nzWidth", ctx.sideW())("nzMask", false)("nzClosable", false)("nzTitle", peekHead_r3)("nzFooter", ctx.footer() ?? null);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzVisible", ctx.open() && ctx.peekMode() === "center")("nzWidth", ctx.modalWidth())("nzTitle", peekHead_r3)("nzClosable", false)("nzBodyStyle", \u0275\u0275pureFunction0(13, _c0))("nzFooter", ctx.footer() ?? null);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.modes());
      }
    }, dependencies: [NgTemplateOutlet, NzDrawerModule, NzDrawerComponent, NzDrawerContentDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownDirective, NzDropdownMenuComponent, NzMenuModule, TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.dp-anchors[_ngcontent-%COMP%] {\n  display: none;\n}\n.dp-master[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.dp-master.dp-resizing[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.dp-resize[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 12px;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: col-resize;\n  touch-action: none;\n}\n.dp-grip[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  background: var(--border-strong, var(--border-sub));\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), height var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dp-resize[_ngcontent-%COMP%]:hover   .dp-grip[_ngcontent-%COMP%], \n.dp-resizing[_ngcontent-%COMP%]   .dp-grip[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n  height: 60px;\n}\n[_nghost-%COMP%]     .dp-side-wrap .ant-drawer-body {\n  position: relative;\n}\n[_nghost-%COMP%]     .dp-side-wrap .ant-drawer-header-title {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n[_nghost-%COMP%]     .dp-side-wrap .ant-drawer-title {\n  flex: 1 1 auto;\n  min-width: 0;\n  width: 100%;\n}\n.dp-resize--drawer[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n.dp-mhead[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.dp-mbody[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding: 16px;\n}\n.dp-mfoot[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.pk-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n}\n.pk-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  flex: none;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.pk-ic[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--icon-primary);\n}\n.pk-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background: var(--border-soft);\n  margin: 0 4px;\n  flex: none;\n}\n.pk-title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  margin-left: 6px;\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pk-close[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.pk-mi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 168px;\n}\n.pk-mi-ic[_ngcontent-%COMP%] {\n  color: var(--icon-secondary);\n  flex: none;\n}\n.pk-mi-l[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pk-mi-ck[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  flex: none;\n}\n/*# sourceMappingURL=hrm-detail-peek.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDetailPeek, [{
    type: Component,
    args: [{ selector: "hrm-detail-peek", imports: [NgTemplateOutlet, NzDrawerModule, NzModalModule, NzDropDownModule, NzMenuModule, TablerIconComponent], template: `
    <!-- MASTER: panel inline c\u1ED1 \u0111\u1ECBnh b\xEAn ph\u1EA3i danh s\xE1ch (\u0111\u1EB7t component NGAY SAU danh s\xE1ch
         trong 1 h\xE0ng flex \u2014 b\u1EA3ng tr\xE1i, chi ti\u1EBFt ph\u1EA3i, kh\xF4ng che n\u1ED9i dung). -->
    @if (open() && peekMode() === 'master') {
      <aside class="dp-master" [class.dp-resizing]="resizing()" [style.width.px]="masterW()">
        <!-- Tay k\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng (m\xE9p tr\xE1i) \u2014 c\xF3 grip \u0111\u1EC3 user nh\u1EADn bi\u1EBFt k\xE9o \u0111\u01B0\u1EE3c. -->
        <div class="dp-resize" role="separator" aria-orientation="vertical" [attr.aria-label]="resizeLabel() || null"
          (pointerdown)="startResize($event, 'master')"><span class="dp-grip"></span></div>
        <div class="dp-mhead"><ng-container [ngTemplateOutlet]="peekHead" /></div>
        <div class="dp-mbody"><ng-container [ngTemplateOutlet]="bodyTpl()" [ngTemplateOutletContext]="{ $implicit: peekMode() }" /></div>
        <!-- FOOTER ghim \u0111\xE1y (fix c\u1ED1 \u0111\u1ECBnh) \u2014 c\u1EE5m h\xE0nh \u0111\u1ED9ng; \u0111\u1ED3ng b\u1ED9 v\u1EDBi drawer/modal. -->
        @if (footer()) {
          <div class="dp-mfoot"><ng-container [ngTemplateOutlet]="footer()!" /></div>
        }
      </aside>
    }

    <!-- Anchor drawer/modal \u2014 GI\u1EA4U kh\u1ECFi layout (display:none): n\u1ED9i dung render qua CDK overlay
         tr\xEAn body, element t\u1EA1i ch\u1ED7 ch\u1EC9 l\xE0 ch\u1ED7 neo; \u0111\u1EC3 tr\u1EA7n s\u1EBD th\xE0nh flex-item ma \u0103n gap c\u1EE7a .lp-split. -->
    <div class="dp-anchors">
    <!-- SIDE peek: drawer ph\u1EA3i, KH\xD4NG mask (non-modal) \u2192 b\u1EA3ng/th\u1EBB ph\xEDa sau v\u1EABn d\xF9ng \u0111\u01B0\u1EE3c -->
    <nz-drawer
      [nzVisible]="open() && peekMode() === 'side'"
      [nzWidth]="sideW()"
      nzWrapClassName="dp-side-wrap"
      nzPlacement="right"
      [nzMask]="false"
      [nzClosable]="false"
      [nzTitle]="peekHead"
      [nzFooter]="footer() ?? null"
      (nzOnClose)="close()">
      <ng-container *nzDrawerContent>
        <!-- Tay k\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng drawer (m\xE9p tr\xE1i) \u2014 grip cho user nh\u1EADn bi\u1EBFt. -->
        <div class="dp-resize dp-resize--drawer" [class.dp-resizing]="resizing()" role="separator"
          aria-orientation="vertical" [attr.aria-label]="resizeLabel() || null"
          (pointerdown)="startResize($event, 'side')"><span class="dp-grip"></span></div>
        <ng-container [ngTemplateOutlet]="bodyTpl()" [ngTemplateOutletContext]="{ $implicit: peekMode() }" />
      </ng-container>
    </nz-drawer>

    <!-- CENTER peek: modal gi\u1EEFa m\xE0n h\xECnh \u2014 body cu\u1ED9n (kh\xF4ng v\u01B0\u1EE3t qu\xE1 m\xE0n h\xECnh), h\xE0nh \u0111\u1ED9ng \u1EDF FOOTER
         (chu\u1EA9n modal design system). Truy\u1EC1n mode v\xE0o content \u0111\u1EC3 n\u1ED9i dung \u1EA9n action bar n\u1ED9i b\u1ED9. -->
    <nz-modal
      [nzVisible]="open() && peekMode() === 'center'"
      nzCentered
      [nzWidth]="modalWidth()"
      [nzTitle]="peekHead"
      [nzClosable]="false"
      [nzBodyStyle]="{ 'max-height': '70vh', 'overflow-y': 'auto' }"
      [nzFooter]="footer() ?? null"
      (nzOnCancel)="close()">
      <ng-container *nzModalContent>
        <ng-container [ngTemplateOutlet]="bodyTpl()" [ngTemplateOutletContext]="{ $implicit: peekMode() }" />
      </ng-container>
    </nz-modal>
    </div>

    <!-- Header d\xF9ng chung (Notion-style): m\u1EDF r\u1ED9ng \xB7 \u0111\u1ED5i mode \xB7 ti\xEAu \u0111\u1EC1 \xB7 \u0111\xF3ng -->
    <ng-template #peekHead>
      <div class="pk-head">
        @if (expandable()) {
          <button type="button" class="pk-ic" [attr.aria-label]="expandLabel() || null"
            (click)="setMode('full')">
            <tabler-icon [icon]="icExpand" [size]="17" />
          </button>
          <span class="pk-sep"></span>
        }
        <button type="button" class="pk-ic" nz-dropdown [nzDropdownMenu]="modeMenu"
          nzTrigger="click" nzPlacement="bottomLeft" [attr.aria-label]="switchLabel() || null">
          <tabler-icon [icon]="icLayout" [size]="17" />
        </button>
        <span class="pk-title">{{ title() }}</span>
        <button type="button" class="pk-ic pk-close" [attr.aria-label]="closeLabel() || null" (click)="close()">
          <tabler-icon [icon]="icClose" [size]="17" />
        </button>
      </div>
    </ng-template>

    <nz-dropdown-menu #modeMenu="nzDropdownMenu">
      <ul nz-menu class="pk-menu">
        @for (m of modes(); track m) {
          <li nz-menu-item (click)="setMode(m)">
            <span class="pk-mi">
              <tabler-icon [icon]="$any(iconOf(m))" [size]="16" class="pk-mi-ic" />
              <span class="pk-mi-l">{{ labelOf(m) }}</span>
              @if (m === peekMode() && (m === 'master' || m === 'side' || m === 'center')) {
                <tabler-icon [icon]="icCheck" [size]="16" class="pk-mi-ck" />
              }
            </span>
          </li>
        }
      </ul>
    </nz-dropdown-menu>
  `, host: { class: "hrm-detail-peek" }, styles: ["/* angular:styles/component:css;140b25ab51e72e59a5599876a2c821b57b720647b178947925374e7a3b7e384e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/overlays/hrm-detail-peek.ts */\n:host {\n  display: contents;\n}\n.dp-anchors {\n  display: none;\n}\n.dp-master {\n  position: relative;\n  flex: none;\n  height: 100%;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.dp-master.dp-resizing {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.dp-resize {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 12px;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: col-resize;\n  touch-action: none;\n}\n.dp-grip {\n  width: 4px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  background: var(--border-strong, var(--border-sub));\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), height var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dp-resize:hover .dp-grip,\n.dp-resizing .dp-grip {\n  background: var(--primary-base);\n  height: 60px;\n}\n:host ::ng-deep .dp-side-wrap .ant-drawer-body {\n  position: relative;\n}\n:host ::ng-deep .dp-side-wrap .ant-drawer-header-title {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n:host ::ng-deep .dp-side-wrap .ant-drawer-title {\n  flex: 1 1 auto;\n  min-width: 0;\n  width: 100%;\n}\n.dp-resize--drawer {\n  z-index: 20;\n}\n.dp-mhead {\n  flex: none;\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.dp-mbody {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding: 16px;\n}\n.dp-mfoot {\n  flex: none;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\n.pk-head {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  width: 100%;\n}\n.pk-ic {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  flex: none;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.pk-ic:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--icon-primary);\n}\n.pk-sep {\n  width: 1px;\n  height: 18px;\n  background: var(--border-soft);\n  margin: 0 4px;\n  flex: none;\n}\n.pk-title {\n  flex: 1;\n  min-width: 0;\n  margin-left: 6px;\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pk-close {\n  margin-left: 4px;\n}\n.pk-mi {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 168px;\n}\n.pk-mi-ic {\n  color: var(--icon-secondary);\n  flex: none;\n}\n.pk-mi-l {\n  flex: 1;\n}\n.pk-mi-ck {\n  color: var(--primary-base);\n  flex: none;\n}\n/*# sourceMappingURL=hrm-detail-peek.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], peekMode: [{ type: Input, args: [{ isSignal: true, alias: "peekMode", required: false }] }, { type: Output, args: ["peekModeChange"] }], modes: [{ type: Input, args: [{ isSignal: true, alias: "modes", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], footer: [{ type: Input, args: [{ isSignal: true, alias: "footer", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], masterWidth: [{ type: Input, args: [{ isSignal: true, alias: "masterWidth", required: false }] }], modalWidth: [{ type: Input, args: [{ isSignal: true, alias: "modalWidth", required: false }] }], routeUrl: [{ type: Input, args: [{ isSignal: true, alias: "routeUrl", required: false }] }], modeLabels: [{ type: Input, args: [{ isSignal: true, alias: "modeLabels", required: false }] }], switchLabel: [{ type: Input, args: [{ isSignal: true, alias: "switchLabel", required: false }] }], expandLabel: [{ type: Input, args: [{ isSignal: true, alias: "expandLabel", required: false }] }], expandable: [{ type: Input, args: [{ isSignal: true, alias: "expandable", required: false }] }], closeLabel: [{ type: Input, args: [{ isSignal: true, alias: "closeLabel", required: false }] }], resizeLabel: [{ type: Input, args: [{ isSignal: true, alias: "resizeLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDetailPeek, { className: "HrmDetailPeek", filePath: "libs/hrm-ui/src/lib/overlays/hrm-detail-peek.ts", lineNumber: 190 });
})();

export {
  HrmDetailPeek
};
//# sourceMappingURL=chunk-DZBGXDE2.js.map
