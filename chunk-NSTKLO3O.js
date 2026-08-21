import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray
} from "./chunk-KLLXE4WM.js";
import {
  NzMenuDirective,
  NzMenuDividerDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-LIWX2G7Z.js";
import {
  ArrowDown,
  ArrowUp,
  ArrowsSort,
  ChevronDown,
  Columns,
  Download,
  Eye,
  EyeOff,
  Filter,
  GripVertical,
  Plus,
  Search,
  TablerIconComponent,
  Trash,
  X
} from "./chunk-QL2Z65KF.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  input,
  model,
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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-sort-config.ts
var _forTrack0 = ($index, $item) => $item.key;
function HrmSortConfig_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function HrmSortConfig_Conditional_0_Conditional_12_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const lv_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", c_r6.key)("selected", c_r6.key === lv_r7.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.title);
  }
}
function HrmSortConfig_Conditional_0_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "select", 21);
    \u0275\u0275listener("change", function HrmSortConfig_Conditional_0_Conditional_12_For_2_Template_select_change_6_listener($event) {
      const \u0275$index_29_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setKey(\u0275$index_29_r5, $event.target.value));
    });
    \u0275\u0275repeaterCreate(7, HrmSortConfig_Conditional_0_Conditional_12_For_2_For_8_Template, 2, 3, "option", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "tabler-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24)(11, "button", 25);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Conditional_12_For_2_Template_button_click_11_listener() {
      const \u0275$index_29_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDir(\u0275$index_29_r5, "asc"));
    });
    \u0275\u0275element(12, "tabler-icon", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Conditional_12_For_2_Template_button_click_14_listener() {
      const \u0275$index_29_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setDir(\u0275$index_29_r5, "desc"));
    });
    \u0275\u0275element(15, "tabler-icon", 5);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Conditional_12_For_2_Template_button_click_17_listener() {
      const \u0275$index_29_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.remove(\u0275$index_29_r5));
    });
    \u0275\u0275element(18, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lv_r7 = ctx.$implicit;
    const \u0275$index_29_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.reorderLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icGrip)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_29_r5 === 0 ? ctx_r1.byLabel() : ctx_r1.thenLabel());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.byLabel());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icChevron)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.byLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", lv_r7.dir === "asc");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icUp)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ascLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", lv_r7.dir === "desc");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icDown)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.descLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.removeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icTrash)("size", 16);
  }
}
function HrmSortConfig_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("cdkDropListDropped", function HrmSortConfig_Conditional_0_Conditional_12_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275repeaterCreate(1, HrmSortConfig_Conditional_0_Conditional_12_For_2_Template, 19, 21, "div", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.draft());
  }
}
function HrmSortConfig_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "span", 4);
    \u0275\u0275element(5, "tabler-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(8, "tabler-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, HrmSortConfig_Conditional_0_Conditional_11_Template, 2, 1, "div", 8)(12, HrmSortConfig_Conditional_0_Conditional_12_Template, 3, 0, "div", 9);
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275element(14, "tabler-icon", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "footer", 11)(17, "button", 12);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "span", 13);
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 15);
    \u0275\u0275listener("click", function HrmSortConfig_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.apply());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.title());
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.icSort)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.closeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.subtitle());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.draft().length ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canAdd());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPlus)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.clearLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cancelLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.applyLabel());
  }
}
var HrmSortConfig = class _HrmSortConfig {
  constructor() {
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.levels = model([], ...ngDevMode ? [{ debugName: "levels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applied = output();
    this.title = input("C\u1EA5u h\xECnh s\u1EAFp x\u1EBFp", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("X\u1EBFp theo nhi\u1EC1u c\u1EA5p \u01B0u ti\xEAn; c\u1EA5p tr\xEAn ho\xE0 nhau m\u1EDBi x\xE9t c\u1EA5p d\u01B0\u1EDBi.", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Ch\u01B0a c\xF3 c\u1EA5p s\u1EAFp x\u1EBFp n\xE0o. Th\xEAm m\u1ED9t c\u1EA5p \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.byLabel = input("X\u1EBFp theo", ...ngDevMode ? [{ debugName: "byLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.thenLabel = input("r\u1ED3i theo", ...ngDevMode ? [{ debugName: "thenLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ascLabel = input("T\u0103ng", ...ngDevMode ? [{ debugName: "ascLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.descLabel = input("Gi\u1EA3m", ...ngDevMode ? [{ debugName: "descLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm c\u1EA5p s\u1EAFp x\u1EBFp", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearLabel = input("Xo\xE1 h\u1EBFt", ...ngDevMode ? [{ debugName: "clearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cancelLabel = input("Hu\u1EF7", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applyLabel = input("\xC1p d\u1EE5ng", ...ngDevMode ? [{ debugName: "applyLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeLabel = input("\u0110\xF3ng", ...ngDevMode ? [{ debugName: "closeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderLabel = input("K\xE9o \u0111\u1ED5i th\u1EE9 t\u1EF1 \u01B0u ti\xEAn", ...ngDevMode ? [{ debugName: "reorderLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.removeLabel = input("Xo\xE1 c\u1EA5p", ...ngDevMode ? [{ debugName: "removeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icSort = ArrowsSort;
    this.icX = X;
    this.icGrip = GripVertical;
    this.icTrash = Trash;
    this.icPlus = Plus;
    this.icUp = ArrowUp;
    this.icDown = ArrowDown;
    this.icChevron = ChevronDown;
    this.draft = signal([], ...ngDevMode ? [{ debugName: "draft" }] : (
      /* istanbul ignore next */
      []
    ));
    this.wasOpen = false;
    this.canAdd = computed(() => this.draft().length < this.columns().length, ...ngDevMode ? [{ debugName: "canAdd" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const o = this.open();
      if (o && !this.wasOpen)
        this.draft.set(this.levels().map((l) => __spreadValues({}, l)));
      this.wasOpen = o;
    });
  }
  setKey(i, key) {
    const next = this.draft().map((l, j) => j === i ? __spreadProps(__spreadValues({}, l), { key }) : l);
    this.draft.set(next);
  }
  setDir(i, dir) {
    const next = this.draft().map((l, j) => j === i ? __spreadProps(__spreadValues({}, l), { dir }) : l);
    this.draft.set(next);
  }
  remove(i) {
    this.draft.set(this.draft().filter((_, j) => j !== i));
  }
  clearAll() {
    this.draft.set([]);
  }
  add() {
    this.draft.update((cur) => {
      const used = new Set(cur.map((l) => l.key));
      const first = this.columns().find((c) => !used.has(c.key));
      return first ? [...cur, { key: first.key, dir: "asc" }] : cur;
    });
  }
  onDrop(e) {
    const arr = [...this.draft()];
    moveItemInArray(arr, e.previousIndex, e.currentIndex);
    this.draft.set(arr);
  }
  cancel() {
    this.open.set(false);
  }
  apply() {
    const clean = this.draft().map((l) => __spreadValues({}, l));
    this.levels.set(clean);
    this.applied.emit(clean);
    this.open.set(false);
  }
  static {
    this.\u0275fac = function HrmSortConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSortConfig)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSortConfig, selectors: [["hrm-sort-config"]], inputs: { open: [1, "open"], columns: [1, "columns"], levels: [1, "levels"], title: [1, "title"], subtitle: [1, "subtitle"], emptyText: [1, "emptyText"], byLabel: [1, "byLabel"], thenLabel: [1, "thenLabel"], ascLabel: [1, "ascLabel"], descLabel: [1, "descLabel"], addLabel: [1, "addLabel"], clearLabel: [1, "clearLabel"], cancelLabel: [1, "cancelLabel"], applyLabel: [1, "applyLabel"], closeLabel: [1, "closeLabel"], reorderLabel: [1, "reorderLabel"], removeLabel: [1, "removeLabel"] }, outputs: { open: "openChange", levels: "levelsChange", applied: "applied" }, decls: 1, vars: 1, consts: [[1, "sc-ov"], [1, "sc-bd", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "sc-dlg"], [1, "sc-hd"], [1, "sc-t"], [3, "icon", "size"], ["type", "button", 1, "sc-x", 3, "click"], [1, "sc-sub"], [1, "sc-empty"], ["cdkDropList", "", 1, "sc-list"], ["type", "button", 1, "sc-add", 3, "click", "disabled"], [1, "sc-ft"], ["type", "button", 1, "sc-clear", 3, "click"], [1, "sc-sp"], ["type", "button", 1, "sc-btn", 3, "click"], ["type", "button", 1, "sc-btn", "is-primary", 3, "click"], ["cdkDropList", "", 1, "sc-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "sc-row"], ["cdkDragHandle", "", 1, "sc-grip"], [1, "sc-lead"], [1, "sc-sel"], [3, "change"], [3, "value", "selected"], [1, "sc-sel-ic", 3, "icon", "size"], ["role", "group", 1, "sc-dir"], ["type", "button", 3, "click"], ["type", "button", 1, "sc-del", 3, "click"]], template: function HrmSortConfig_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmSortConfig_Conditional_0_Template, 24, 16, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.open() ? 0 : -1);
      }
    }, dependencies: [CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], styles: ["/* angular:styles/component:css;102919fd8bd06428537c669b9be1811ee519e65471fb2e8e61287620a67b2547;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-sort-config.ts */\n.sc-ov {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n}\n.sc-bd {\n  position: absolute;\n  inset: 0;\n  background: var(--overlay-bg, rgba(0,0,0,.45));\n}\n.sc-dlg {\n  position: relative;\n  width: 100%;\n  max-width: 560px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl, 12px);\n  box-shadow: var(--shadow-regular-lg);\n  font-family: var(--font-sans);\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n}\n.sc-hd {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px 0;\n}\n.sc-t {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sc-x {\n  margin-inline-start: auto;\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.sc-x:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sc-sub {\n  margin: 6px 16px 14px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.sc-empty {\n  margin: 0 16px;\n  padding: 28px 16px;\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.sc-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n  overflow-y: auto;\n}\n.sc-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n}\n.sc-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 22px;\n  height: 34px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.sc-grip:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n}\n.sc-grip:active {\n  cursor: grabbing;\n}\n.sc-lead {\n  flex: none;\n  width: 64px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n.sc-sel {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n.sc-sel select {\n  width: 100%;\n  height: 36px;\n  padding: 0 30px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.sc-sel select:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.sc-sel-ic {\n  position: absolute;\n  inset-inline-end: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.sc-dir {\n  flex: none;\n  display: inline-flex;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  overflow: hidden;\n}\n.sc-dir button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 34px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.sc-dir button + button {\n  border-inline-start: 1px solid var(--border-sub);\n}\n.sc-dir button.on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.sc-del {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.sc-del:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.sc-add {\n  margin: 12px 16px 4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 40px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.sc-add:hover:not(:disabled) {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.sc-add:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.sc-ft {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-top: 8px;\n  border-top: 1px solid var(--border-soft);\n}\n.sc-sp {\n  flex: 1;\n}\n.sc-clear {\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  padding: 6px 4px;\n}\n.sc-clear:hover {\n  color: var(--text-strong);\n}\n.sc-btn {\n  height: 36px;\n  padding: 0 14px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.sc-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.sc-btn.is-primary {\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  border-color: var(--primary-base);\n}\n.sc-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.sc-btn:focus-visible,\n.sc-clear:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.cdk-drag-preview .sc-row,\n.sc-row.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n  border-radius: var(--radius-md, 8px);\n}\n.cdk-drag-placeholder {\n  opacity: .4;\n}\n/*# sourceMappingURL=hrm-sort-config.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSortConfig, [{
    type: Component,
    args: [{ selector: "hrm-sort-config", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], template: `
    @if (open()) {
      <div class="sc-ov">
        <div class="sc-bd" (click)="cancel()"></div>
        <div class="sc-dlg" role="dialog" aria-modal="true" [attr.aria-label]="title()">
          <header class="sc-hd">
            <span class="sc-t"><tabler-icon [icon]="icSort" [size]="18" /> {{ title() }}</span>
            <button type="button" class="sc-x" [attr.aria-label]="closeLabel()" (click)="cancel()"><tabler-icon [icon]="icX" [size]="18" /></button>
          </header>
          <p class="sc-sub">{{ subtitle() }}</p>

          @if (!draft().length) {
            <div class="sc-empty">{{ emptyText() }}</div>
          } @else {
            <div class="sc-list" cdkDropList (cdkDropListDropped)="onDrop($event)">
              @for (lv of draft(); track $index; let i = $index) {
                <div class="sc-row" cdkDrag>
                  <span class="sc-grip" cdkDragHandle [attr.aria-label]="reorderLabel()"><tabler-icon [icon]="icGrip" [size]="16" /></span>
                  <span class="sc-lead">{{ i === 0 ? byLabel() : thenLabel() }}</span>
                  <div class="sc-sel">
                    <select (change)="setKey(i, $any($event.target).value)" [attr.aria-label]="byLabel()">
                      @for (c of columns(); track c.key) { <option [value]="c.key" [selected]="c.key === lv.key">{{ c.title }}</option> }
                    </select>
                    <tabler-icon class="sc-sel-ic" [icon]="icChevron" [size]="16" />
                  </div>
                  <div class="sc-dir" role="group" [attr.aria-label]="byLabel()">
                    <button type="button" [class.on]="lv.dir === 'asc'" (click)="setDir(i, 'asc')"><tabler-icon [icon]="icUp" [size]="14" /> {{ ascLabel() }}</button>
                    <button type="button" [class.on]="lv.dir === 'desc'" (click)="setDir(i, 'desc')"><tabler-icon [icon]="icDown" [size]="14" /> {{ descLabel() }}</button>
                  </div>
                  <button type="button" class="sc-del" [attr.aria-label]="removeLabel()" (click)="remove(i)"><tabler-icon [icon]="icTrash" [size]="16" /></button>
                </div>
              }
            </div>
          }

          <button type="button" class="sc-add" [disabled]="!canAdd()" (click)="add()">
            <tabler-icon [icon]="icPlus" [size]="15" /> {{ addLabel() }}
          </button>

          <footer class="sc-ft">
            <button type="button" class="sc-clear" (click)="clearAll()">{{ clearLabel() }}</button>
            <span class="sc-sp"></span>
            <button type="button" class="sc-btn" (click)="cancel()">{{ cancelLabel() }}</button>
            <button type="button" class="sc-btn is-primary" (click)="apply()">{{ applyLabel() }}</button>
          </footer>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;102919fd8bd06428537c669b9be1811ee519e65471fb2e8e61287620a67b2547;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-sort-config.ts */\n.sc-ov {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n}\n.sc-bd {\n  position: absolute;\n  inset: 0;\n  background: var(--overlay-bg, rgba(0,0,0,.45));\n}\n.sc-dlg {\n  position: relative;\n  width: 100%;\n  max-width: 560px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl, 12px);\n  box-shadow: var(--shadow-regular-lg);\n  font-family: var(--font-sans);\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n}\n.sc-hd {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px 0;\n}\n.sc-t {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sc-x {\n  margin-inline-start: auto;\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.sc-x:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sc-sub {\n  margin: 6px 16px 14px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.sc-empty {\n  margin: 0 16px;\n  padding: 28px 16px;\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.sc-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 16px;\n  overflow-y: auto;\n}\n.sc-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--bg-surface);\n}\n.sc-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 22px;\n  height: 34px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.sc-grip:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n}\n.sc-grip:active {\n  cursor: grabbing;\n}\n.sc-lead {\n  flex: none;\n  width: 64px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n.sc-sel {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n.sc-sel select {\n  width: 100%;\n  height: 36px;\n  padding: 0 30px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.sc-sel select:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.sc-sel-ic {\n  position: absolute;\n  inset-inline-end: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.sc-dir {\n  flex: none;\n  display: inline-flex;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  overflow: hidden;\n}\n.sc-dir button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  height: 34px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.sc-dir button + button {\n  border-inline-start: 1px solid var(--border-sub);\n}\n.sc-dir button.on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.sc-del {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.sc-del:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.sc-add {\n  margin: 12px 16px 4px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 40px;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.sc-add:hover:not(:disabled) {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.sc-add:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.sc-ft {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  margin-top: 8px;\n  border-top: 1px solid var(--border-soft);\n}\n.sc-sp {\n  flex: 1;\n}\n.sc-clear {\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  padding: 6px 4px;\n}\n.sc-clear:hover {\n  color: var(--text-strong);\n}\n.sc-btn {\n  height: 36px;\n  padding: 0 14px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.sc-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.sc-btn.is-primary {\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  border-color: var(--primary-base);\n}\n.sc-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.sc-btn:focus-visible,\n.sc-clear:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.cdk-drag-preview .sc-row,\n.sc-row.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n  border-radius: var(--radius-md, 8px);\n}\n.cdk-drag-placeholder {\n  opacity: .4;\n}\n/*# sourceMappingURL=hrm-sort-config.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], levels: [{ type: Input, args: [{ isSignal: true, alias: "levels", required: false }] }, { type: Output, args: ["levelsChange"] }], applied: [{ type: Output, args: ["applied"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], byLabel: [{ type: Input, args: [{ isSignal: true, alias: "byLabel", required: false }] }], thenLabel: [{ type: Input, args: [{ isSignal: true, alias: "thenLabel", required: false }] }], ascLabel: [{ type: Input, args: [{ isSignal: true, alias: "ascLabel", required: false }] }], descLabel: [{ type: Input, args: [{ isSignal: true, alias: "descLabel", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], applyLabel: [{ type: Input, args: [{ isSignal: true, alias: "applyLabel", required: false }] }], closeLabel: [{ type: Input, args: [{ isSignal: true, alias: "closeLabel", required: false }] }], reorderLabel: [{ type: Input, args: [{ isSignal: true, alias: "reorderLabel", required: false }] }], removeLabel: [{ type: Input, args: [{ isSignal: true, alias: "removeLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSortConfig, { className: "HrmSortConfig", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-sort-config.ts", lineNumber: 130 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-data-toolbar.ts
var _c0 = [[["", "tbFilters", ""]], [["", "tbActions", ""]], [["", "tbMore", ""]]];
var _c1 = ["[tbFilters]", "[tbActions]", "[tbMore]"];
var _forTrack02 = ($index, $item) => $item.key;
function HrmDataToolbar_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_1_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearch(""));
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.clearLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 14);
  }
}
function HrmDataToolbar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275element(1, "tabler-icon", 7);
    \u0275\u0275elementStart(2, "input", 8);
    \u0275\u0275listener("input", function HrmDataToolbar_Conditional_1_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmDataToolbar_Conditional_1_Conditional_3_Template, 2, 3, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icSearch)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.search())("placeholder", ctx_r1.searchPlaceholder());
    \u0275\u0275attribute("aria-label", ctx_r1.searchPlaceholder());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.search() ? 3 : -1);
  }
}
function HrmDataToolbar_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.filterCount());
  }
}
function HrmDataToolbar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmDataToolbar_Conditional_2_Conditional_4_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icFilter)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.filterLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filterCount() > 0 ? 4 : -1);
  }
}
function HrmDataToolbar_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.countLabel());
  }
}
function HrmDataToolbar_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmDataToolbar_Conditional_5_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.count());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.countLabel() ? 2 : -1);
  }
}
function HrmDataToolbar_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sortLevels().length);
  }
}
function HrmDataToolbar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortOpen.set(true));
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmDataToolbar_Conditional_6_Conditional_4_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icSort)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sortLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sortLevels().length ? 4 : -1);
  }
}
function HrmDataToolbar_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hiddenKeys().length);
  }
}
function HrmDataToolbar_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_7_For_9_Template_li_click_0_listener($event) {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCol(c_r8.key, $event));
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("dt-off", ctx_r1.isHidden(c_r8.key));
    \u0275\u0275property("icon", ctx_r1.isHidden(c_r8.key) ? ctx_r1.icEyeOff : ctx_r1.icEye)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r8.title);
  }
}
function HrmDataToolbar_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmDataToolbar_Conditional_7_Conditional_4_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-dropdown-menu", null, 0)(7, "ul", 15);
    \u0275\u0275repeaterCreate(8, HrmDataToolbar_Conditional_7_For_9_Template, 4, 5, "li", 16, _forTrack02);
    \u0275\u0275element(10, "li", 17);
    \u0275\u0275elementStart(11, "li", 18);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_7_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAll());
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const colsMenu_r9 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzDropdownMenu", colsMenu_r9);
    \u0275\u0275attribute("aria-label", ctx_r1.columnsLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icColumns)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.columnsLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hiddenKeys().length ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.showAllLabel());
  }
}
function HrmDataToolbar_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function HrmDataToolbar_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icExport)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.exportLabel());
  }
}
var HrmDataToolbar = class _HrmDataToolbar {
  constructor() {
    this.count = input(null, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countLabel = input("", ...ngDevMode ? [{ debugName: "countLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchable = input(true, ...ngDevMode ? [{ debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = model("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = input("T\xECm ki\u1EBFm\u2026", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchChange = output();
    this.filterable = input(false, ...ngDevMode ? [{ debugName: "filterable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterCount = input(0, ...ngDevMode ? [{ debugName: "filterCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterClick = output();
    this.exportable = input(false, ...ngDevMode ? [{ debugName: "exportable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exportClick = output();
    this.sortColumns = input([], ...ngDevMode ? [{ debugName: "sortColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortLevels = model([], ...ngDevMode ? [{ debugName: "sortLevels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenKeys = model([], ...ngDevMode ? [{ debugName: "hiddenKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterLabel = input("B\u1ED9 l\u1ECDc", ...ngDevMode ? [{ debugName: "filterLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortLabel = input("S\u1EAFp x\u1EBFp", ...ngDevMode ? [{ debugName: "sortLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnsLabel = input("C\u1ED9t", ...ngDevMode ? [{ debugName: "columnsLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exportLabel = input("Xu\u1EA5t d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "exportLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showAllLabel = input("Hi\u1EC7n t\u1EA5t c\u1EA3", ...ngDevMode ? [{ debugName: "showAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearLabel = input("Xo\xE1", ...ngDevMode ? [{ debugName: "clearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortOpen = model(false, ...ngDevMode ? [{ debugName: "sortOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icSearch = Search;
    this.icFilter = Filter;
    this.icSort = ArrowsSort;
    this.icColumns = Columns;
    this.icExport = Download;
    this.icX = X;
    this.icEye = Eye;
    this.icEyeOff = EyeOff;
    this.hiddenSet = computed(() => new Set(this.hiddenKeys()), ...ngDevMode ? [{ debugName: "hiddenSet" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  isHidden(key) {
    return this.hiddenSet().has(key);
  }
  onSearch(v) {
    this.search.set(v);
    this.searchChange.emit(v);
  }
  toggleCol(key, e) {
    e?.stopPropagation();
    this.hiddenKeys.update((a) => a.includes(key) ? a.filter((k) => k !== key) : [...a, key]);
  }
  showAll() {
    this.hiddenKeys.set([]);
  }
  static {
    this.\u0275fac = function HrmDataToolbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDataToolbar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDataToolbar, selectors: [["hrm-data-toolbar"]], hostAttrs: [1, "hrm-data-toolbar"], inputs: { count: [1, "count"], countLabel: [1, "countLabel"], searchable: [1, "searchable"], search: [1, "search"], searchPlaceholder: [1, "searchPlaceholder"], filterable: [1, "filterable"], filterCount: [1, "filterCount"], exportable: [1, "exportable"], sortColumns: [1, "sortColumns"], sortLevels: [1, "sortLevels"], columns: [1, "columns"], hiddenKeys: [1, "hiddenKeys"], filterLabel: [1, "filterLabel"], sortLabel: [1, "sortLabel"], columnsLabel: [1, "columnsLabel"], exportLabel: [1, "exportLabel"], showAllLabel: [1, "showAllLabel"], clearLabel: [1, "clearLabel"], sortOpen: [1, "sortOpen"] }, outputs: { search: "searchChange", searchChange: "searchChange", filterClick: "filterClick", exportClick: "exportClick", sortLevels: "sortLevelsChange", hiddenKeys: "hiddenKeysChange", sortOpen: "sortOpenChange" }, ngContentSelectors: _c1, decls: 12, vars: 9, consts: [["colsMenu", "nzDropdownMenu"], [1, "dt-bar"], [1, "dt-search"], ["type", "button", 1, "dt-btn"], [1, "dt-sp"], [1, "dt-count"], [3, "openChange", "levelsChange", "open", "columns", "levels"], [1, "dt-search-ic", 3, "icon", "size"], ["type", "search", 3, "input", "value", "placeholder"], ["type", "button", 1, "dt-search-clr"], ["type", "button", 1, "dt-search-clr", 3, "click"], [3, "icon", "size"], ["type", "button", 1, "dt-btn", 3, "click"], [1, "dt-n"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "dt-btn", 3, "nzDropdownMenu"], ["nz-menu", "", 1, "dt-menu"], ["nz-menu-item", ""], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"]], template: function HrmDataToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, HrmDataToolbar_Conditional_1_Template, 4, 6, "label", 2);
        \u0275\u0275conditionalCreate(2, HrmDataToolbar_Conditional_2_Template, 5, 4, "button", 3);
        \u0275\u0275projection(3);
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275conditionalCreate(5, HrmDataToolbar_Conditional_5_Template, 3, 2, "span", 5);
        \u0275\u0275conditionalCreate(6, HrmDataToolbar_Conditional_6_Template, 5, 4, "button", 3);
        \u0275\u0275conditionalCreate(7, HrmDataToolbar_Conditional_7_Template, 14, 7);
        \u0275\u0275conditionalCreate(8, HrmDataToolbar_Conditional_8_Template, 4, 3, "button", 3);
        \u0275\u0275projection(9, 1);
        \u0275\u0275projection(10, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "hrm-sort-config", 6);
        \u0275\u0275twoWayListener("openChange", function HrmDataToolbar_Template_hrm_sort_config_openChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortOpen, $event) || (ctx.sortOpen = $event);
          return $event;
        })("levelsChange", function HrmDataToolbar_Template_hrm_sort_config_levelsChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortLevels, $event) || (ctx.sortLevels = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.searchable() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filterable() ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.count() !== null ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sortColumns().length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.columns().length ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.exportable() ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("open", ctx.sortOpen);
        \u0275\u0275property("columns", ctx.sortColumns());
        \u0275\u0275twoWayProperty("levels", ctx.sortLevels);
      }
    }, dependencies: [NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzMenuDividerDirective, NzDropdownDirective, NzDropdownMenuComponent, NzMenuModule, TablerIconComponent, HrmSortConfig], styles: ["/* angular:styles/component:css;7f337a22dcdadbbd33e0e326f412298375794391e0bfba6417d5c9fad94619a1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-data-toolbar.ts */\n.dt-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  flex-wrap: wrap;\n}\n.dt-sp {\n  flex: 1 1 0;\n  min-width: 0;\n}\n.dt-count {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.dt-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 180px;\n  min-width: 140px;\n  max-width: 420px;\n  height: 38px;\n  padding: 0 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.dt-search:focus-within {\n  border-color: var(--primary-base);\n}\n.dt-search-ic {\n  flex: none;\n  color: var(--text-soft);\n}\n.dt-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  color: var(--text-body);\n}\n.dt-search input::placeholder {\n  color: var(--text-soft);\n}\n.dt-search input::-webkit-search-cancel-button {\n  display: none;\n}\n.dt-search-clr {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  border: 0;\n  background: transparent;\n  color: var(--text-soft);\n  cursor: pointer;\n  border-radius: var(--radius-sm, 6px);\n}\n.dt-search-clr:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.dt-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 12px;\n  flex: none;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dt-btn:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.dt-btn:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.dt-n {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n:host ::ng-deep .dt-menu li[nz-menu-item] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host ::ng-deep .dt-menu .dt-off {\n  opacity: .5;\n}\n/*# sourceMappingURL=hrm-data-toolbar.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDataToolbar, [{
    type: Component,
    args: [{ selector: "hrm-data-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzDropDownModule, NzMenuModule, TablerIconComponent, HrmSortConfig], template: `
    <div class="dt-bar">
      @if (searchable()) {
        <label class="dt-search">
          <tabler-icon class="dt-search-ic" [icon]="icSearch" [size]="16" />
          <input type="search" [value]="search()" [placeholder]="searchPlaceholder()"
            [attr.aria-label]="searchPlaceholder()" (input)="onSearch($any($event.target).value)" />
          @if (search()) {
            <button type="button" class="dt-search-clr" [attr.aria-label]="clearLabel()" (click)="onSearch('')"><tabler-icon [icon]="icX" [size]="14" /></button>
          }
        </label>
      }
      @if (filterable()) {
        <button type="button" class="dt-btn" (click)="filterClick.emit()">
          <tabler-icon [icon]="icFilter" [size]="16" /> <span>{{ filterLabel() }}</span>
          @if (filterCount() > 0) { <span class="dt-n">{{ filterCount() }}</span> }
        </button>
      }
      <ng-content select="[tbFilters]" />

      <span class="dt-sp"></span>

      @if (count() !== null) { <span class="dt-count">{{ count() }}@if (countLabel()) {&ngsp;{{ countLabel() }}}</span> }

      @if (sortColumns().length) {
        <button type="button" class="dt-btn" (click)="sortOpen.set(true)">
          <tabler-icon [icon]="icSort" [size]="16" /> <span>{{ sortLabel() }}</span>
          @if (sortLevels().length) { <span class="dt-n">{{ sortLevels().length }}</span> }
        </button>
      }
      @if (columns().length) {
        <button type="button" class="dt-btn" nz-dropdown [nzDropdownMenu]="colsMenu" nzTrigger="click" [attr.aria-label]="columnsLabel()">
          <tabler-icon [icon]="icColumns" [size]="16" /> <span>{{ columnsLabel() }}</span>
          @if (hiddenKeys().length) { <span class="dt-n">{{ hiddenKeys().length }}</span> }
        </button>
        <nz-dropdown-menu #colsMenu="nzDropdownMenu">
          <ul nz-menu class="dt-menu">
            @for (c of columns(); track c.key) {
              <li nz-menu-item (click)="toggleCol(c.key, $event)">
                <tabler-icon [icon]="isHidden(c.key) ? icEyeOff : icEye" [size]="16" [class.dt-off]="isHidden(c.key)" />
                <span>{{ c.title }}</span>
              </li>
            }
            <li nz-menu-divider></li>
            <li nz-menu-item (click)="showAll()"><span>{{ showAllLabel() }}</span></li>
          </ul>
        </nz-dropdown-menu>
      }
      @if (exportable()) {
        <button type="button" class="dt-btn" (click)="exportClick.emit()">
          <tabler-icon [icon]="icExport" [size]="16" /> <span>{{ exportLabel() }}</span>
        </button>
      }
      <ng-content select="[tbActions]" />
      <ng-content select="[tbMore]" />
    </div>

    <hrm-sort-config [(open)]="sortOpen" [columns]="sortColumns()" [(levels)]="sortLevels" />
  `, host: { class: "hrm-data-toolbar" }, styles: ["/* angular:styles/component:css;7f337a22dcdadbbd33e0e326f412298375794391e0bfba6417d5c9fad94619a1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-data-toolbar.ts */\n.dt-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  flex-wrap: wrap;\n}\n.dt-sp {\n  flex: 1 1 0;\n  min-width: 0;\n}\n.dt-count {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.dt-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 180px;\n  min-width: 140px;\n  max-width: 420px;\n  height: 38px;\n  padding: 0 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.dt-search:focus-within {\n  border-color: var(--primary-base);\n}\n.dt-search-ic {\n  flex: none;\n  color: var(--text-soft);\n}\n.dt-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  color: var(--text-body);\n}\n.dt-search input::placeholder {\n  color: var(--text-soft);\n}\n.dt-search input::-webkit-search-cancel-button {\n  display: none;\n}\n.dt-search-clr {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  border: 0;\n  background: transparent;\n  color: var(--text-soft);\n  cursor: pointer;\n  border-radius: var(--radius-sm, 6px);\n}\n.dt-search-clr:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.dt-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 12px;\n  flex: none;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dt-btn:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.dt-btn:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.dt-n {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n:host ::ng-deep .dt-menu li[nz-menu-item] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host ::ng-deep .dt-menu .dt-off {\n  opacity: .5;\n}\n/*# sourceMappingURL=hrm-data-toolbar.css.map */\n"] }]
  }], null, { count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], countLabel: [{ type: Input, args: [{ isSignal: true, alias: "countLabel", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], searchChange: [{ type: Output, args: ["searchChange"] }], filterable: [{ type: Input, args: [{ isSignal: true, alias: "filterable", required: false }] }], filterCount: [{ type: Input, args: [{ isSignal: true, alias: "filterCount", required: false }] }], filterClick: [{ type: Output, args: ["filterClick"] }], exportable: [{ type: Input, args: [{ isSignal: true, alias: "exportable", required: false }] }], exportClick: [{ type: Output, args: ["exportClick"] }], sortColumns: [{ type: Input, args: [{ isSignal: true, alias: "sortColumns", required: false }] }], sortLevels: [{ type: Input, args: [{ isSignal: true, alias: "sortLevels", required: false }] }, { type: Output, args: ["sortLevelsChange"] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], hiddenKeys: [{ type: Input, args: [{ isSignal: true, alias: "hiddenKeys", required: false }] }, { type: Output, args: ["hiddenKeysChange"] }], filterLabel: [{ type: Input, args: [{ isSignal: true, alias: "filterLabel", required: false }] }], sortLabel: [{ type: Input, args: [{ isSignal: true, alias: "sortLabel", required: false }] }], columnsLabel: [{ type: Input, args: [{ isSignal: true, alias: "columnsLabel", required: false }] }], exportLabel: [{ type: Input, args: [{ isSignal: true, alias: "exportLabel", required: false }] }], showAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "showAllLabel", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }], sortOpen: [{ type: Input, args: [{ isSignal: true, alias: "sortOpen", required: false }] }, { type: Output, args: ["sortOpenChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDataToolbar, { className: "HrmDataToolbar", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-data-toolbar.ts", lineNumber: 116 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts
var _c02 = [[["", "tbTitle", ""]], "*", [["", "tbActions", ""]]];
var _c12 = ["[tbTitle]", "*", "[tbActions]"];
function HrmTableToolbar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function HrmTableToolbar_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.countLabel());
  }
}
function HrmTableToolbar_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmTableToolbar_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.count());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.countLabel() ? 2 : -1);
  }
}
var HrmTableToolbar = class _HrmTableToolbar {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.count = input(null, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countLabel = input("", ...ngDevMode ? [{ debugName: "countLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.divided = input(false, ...ngDevMode ? [{ debugName: "divided" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTableToolbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTableToolbar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTableToolbar, selectors: [["hrm-table-toolbar"]], hostAttrs: [1, "hrm-table-toolbar"], hostVars: 2, hostBindings: function HrmTableToolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-table-toolbar--divided", ctx.divided());
      }
    }, inputs: { title: [1, "title"], count: [1, "count"], countLabel: [1, "countLabel"], divided: [1, "divided"] }, ngContentSelectors: _c12, decls: 8, vars: 2, consts: [[1, "tb-left"], [1, "tb-title"], [1, "tb-count"], [1, "tb-mid"], [1, "tb-right"]], template: function HrmTableToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275conditionalCreate(2, HrmTableToolbar_Conditional_2_Template, 2, 1, "span", 1);
        \u0275\u0275conditionalCreate(3, HrmTableToolbar_Conditional_3_Template, 3, 2, "span", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "div", 3);
        \u0275\u0275projection(5, 1);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "div", 4);
        \u0275\u0275projection(7, 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.title() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.count() !== null ? 3 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  min-width: 0;\n}\n.hrm-table-toolbar--divided[_nghost-%COMP%] {\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.tb-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-width: 0;\n}\n.tb-left[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.tb-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.tb-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.tb-mid[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.tb-right[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=hrm-table-toolbar.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTableToolbar, [{
    type: Component,
    args: [{ selector: "hrm-table-toolbar", template: `
    <div class="tb-left">
      <ng-content select="[tbTitle]" />
      @if (title()) { <span class="tb-title">{{ title() }}</span> }
      @if (count() !== null) {
        <span class="tb-count">{{ count() }}@if (countLabel()) {&ngsp;{{ countLabel() }}}</span>
      }
    </div>
    <div class="tb-mid"><ng-content /></div>
    <div class="tb-right"><ng-content select="[tbActions]" /></div>
  `, host: { class: "hrm-table-toolbar", "[class.hrm-table-toolbar--divided]": "divided()" }, styles: ["/* angular:styles/component:css;4941615aad3a944c186717cbedc2b25b40a644f9f6ecdeb5057ad4b0bf02bb4b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts */\n:host {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  min-width: 0;\n}\n:host(.hrm-table-toolbar--divided) {\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.tb-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-width: 0;\n}\n.tb-left:empty {\n  display: none;\n}\n.tb-title {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.tb-count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n  padding: 1px 8px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.tb-mid {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.tb-right {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=hrm-table-toolbar.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], countLabel: [{ type: Input, args: [{ isSignal: true, alias: "countLabel", required: false }] }], divided: [{ type: Input, args: [{ isSignal: true, alias: "divided", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTableToolbar, { className: "HrmTableToolbar", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-table-toolbar.ts", lineNumber: 38 });
})();

export {
  HrmSortConfig,
  HrmDataToolbar,
  HrmTableToolbar
};
//# sourceMappingURL=chunk-NSTKLO3O.js.map
