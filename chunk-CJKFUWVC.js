import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-BKAPBN54.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VA24G7CQ.js";
import {
  Bolt,
  Check,
  Checks,
  Minus,
  Search,
  TablerIconComponent,
  X
} from "./chunk-QL2Z65KF.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  computed,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-quick-filter.ts
var _forTrack0 = ($index, $item) => $item.value;
function HrmQuickFilter_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function HrmQuickFilter_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275element(1, "tabler-icon", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.clearLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.xIcon)("size", 14);
  }
}
function HrmQuickFilter_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r1.icon())("size", 15);
  }
}
function HrmQuickFilter_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.display());
  }
}
function HrmQuickFilter_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "tabler-icon", 15);
    \u0275\u0275elementStart(2, "input", 16);
    \u0275\u0275listener("input", function HrmQuickFilter_Conditional_9_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.searchIcon)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.query());
    \u0275\u0275attribute("placeholder", ctx_r1.searchPlaceholder() || null)("aria-label", ctx_r1.searchPlaceholder() || null);
  }
}
function HrmQuickFilter_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function HrmQuickFilter_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll());
    });
    \u0275\u0275element(1, "tabler-icon", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("qf-all--clear", ctx_r1.allState() === "all");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.allState() === "all" ? ctx_r1.minusIcon : ctx_r1.checksIcon)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.allState() === "all" ? ctx_r1.deselectAllLabel() : ctx_r1.selectAllLabel());
  }
}
function HrmQuickFilter_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "label", 21);
  }
  if (rf & 2) {
    const o_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzChecked", ctx_r1.isPicked(o_r6.value))("nzDisabled", o_r6.disabled ?? false);
  }
}
function HrmQuickFilter_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.checkIcon)("size", 16);
  }
}
function HrmQuickFilter_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function HrmQuickFilter_For_13_Template_button_click_0_listener() {
      const o_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick(o_r6));
    });
    \u0275\u0275conditionalCreate(1, HrmQuickFilter_For_13_Conditional_1_Template, 1, 2, "label", 21);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmQuickFilter_For_13_Conditional_4_Template, 1, 2, "tabler-icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("qf-row--picked", ctx_r1.isPicked(o_r6.value));
    \u0275\u0275property("disabled", o_r6.disabled ?? false);
    \u0275\u0275attribute("aria-selected", ctx_r1.isPicked(o_r6.value));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "multiple" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r6.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "single" && ctx_r1.isPicked(o_r6.value) ? 4 : -1);
  }
}
function HrmQuickFilter_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
var HrmQuickFilter = class _HrmQuickFilter {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("multiple", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.value = model([], ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(Bolt, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unit = input("", ...ngDevMode ? [{ debugName: "unit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchable = input(true, ...ngDevMode ? [{ debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = input("T\xECm ki\u1EBFm...", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectAllLabel = input("Ch\u1ECDn t\u1EA5t c\u1EA3", ...ngDevMode ? [{ debugName: "selectAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deselectAllLabel = input("B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3", ...ngDevMode ? [{ debugName: "deselectAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearLabel = input("", ...ngDevMode ? [{ debugName: "clearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cleared = output();
    this.xIcon = X;
    this.checkIcon = Check;
    this.checksIcon = Checks;
    this.minusIcon = Minus;
    this.searchIcon = Search;
    this.open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered = computed(() => {
      const q = this.norm(this.query().trim());
      const opts = this.options();
      if (!q)
        return opts;
      return opts.filter((o) => this.norm(o.label).includes(q));
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allState = computed(() => {
      const n = this.value().length;
      const total = this.options().filter((o) => !o.disabled).length;
      return n === 0 ? "none" : n >= total ? "all" : "some";
    }, ...ngDevMode ? [{ debugName: "allState" }] : (
      /* istanbul ignore next */
      []
    ));
    this.display = computed(() => {
      const v = this.value();
      if (v.length === 1) {
        return this.options().find((o) => o.value === v[0])?.label ?? v[0];
      }
      return `${v.length} ${this.unit() || this.label().toLowerCase()}`;
    }, ...ngDevMode ? [{ debugName: "display" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  onVisible(v) {
    this.open.set(v);
    if (!v)
      this.query.set("");
  }
  onSearch(e) {
    this.query.set(e.target.value);
  }
  /** Chuẩn hoá bỏ dấu tiếng Việt — tìm không phân biệt dấu/hoa-thường. */
  norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111]/g, "d");
  }
  isPicked(v) {
    return this.value().includes(v);
  }
  pick(o) {
    if (o.disabled)
      return;
    if (this.mode() === "single") {
      this.value.set([o.value]);
      this.open.set(false);
      return;
    }
    const cur = this.value();
    this.value.set(cur.includes(o.value) ? cur.filter((x) => x !== o.value) : [...cur, o.value]);
  }
  toggleAll() {
    const all = this.options().filter((o) => !o.disabled).map((o) => o.value);
    this.value.set(this.allState() === "all" ? [] : all);
  }
  clear(e) {
    e.stopPropagation();
    this.value.set([]);
    this.open.set(false);
    this.cleared.emit();
  }
  static {
    this.\u0275fac = function HrmQuickFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmQuickFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmQuickFilter, selectors: [["hrm-quick-filter"]], hostAttrs: [1, "hrm-quick-filter"], inputs: { label: [1, "label"], options: [1, "options"], mode: [1, "mode"], value: [1, "value"], icon: [1, "icon"], unit: [1, "unit"], searchable: [1, "searchable"], searchPlaceholder: [1, "searchPlaceholder"], selectAllLabel: [1, "selectAllLabel"], deselectAllLabel: [1, "deselectAllLabel"], emptyText: [1, "emptyText"], clearLabel: [1, "clearLabel"] }, outputs: { value: "valueChange", cleared: "cleared" }, decls: 15, vars: 11, consts: [["panel", ""], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "qf", 3, "nzVisibleChange", "nzDropdownMenu", "nzVisible"], ["role", "button", 1, "qf-x"], [1, "qf-ic", 3, "icon", "size"], [1, "qf-label"], [1, "qf-panel"], [1, "qf-search"], ["type", "button", 1, "qf-row", "qf-all", 3, "qf-all--clear"], ["role", "listbox", 1, "qf-list"], ["type", "button", "role", "option", 1, "qf-row", 3, "qf-row--picked", "disabled"], [1, "qf-empty"], ["role", "button", 1, "qf-x", 3, "click"], [3, "icon", "size"], [1, "qf-sep"], [1, "qf-count"], [1, "qf-search-ic", 3, "icon", "size"], ["nz-input", "", "type", "text", 1, "qf-search-in", 3, "input", "value"], ["type", "button", 1, "qf-row", "qf-all", 3, "click"], [1, "qf-all-ic", 3, "icon", "size"], [1, "qf-row-label"], ["type", "button", "role", "option", 1, "qf-row", 3, "click", "disabled"], ["nz-checkbox", "", 1, "qf-cb", 3, "nzChecked", "nzDisabled"], [1, "qf-tick", 3, "icon", "size"]], template: function HrmQuickFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("nzVisibleChange", function HrmQuickFilter_Template_button_nzVisibleChange_0_listener($event) {
          return ctx.onVisible($event);
        });
        \u0275\u0275conditionalCreate(1, HrmQuickFilter_Conditional_1_Template, 2, 3, "span", 2)(2, HrmQuickFilter_Conditional_2_Template, 1, 2, "tabler-icon", 3);
        \u0275\u0275elementStart(3, "span", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmQuickFilter_Conditional_5_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "nz-dropdown-menu", null, 0)(8, "div", 5);
        \u0275\u0275conditionalCreate(9, HrmQuickFilter_Conditional_9_Template, 3, 5, "div", 6);
        \u0275\u0275conditionalCreate(10, HrmQuickFilter_Conditional_10_Template, 4, 5, "button", 7);
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275repeaterCreate(12, HrmQuickFilter_For_13_Template, 5, 7, "button", 9, _forTrack0);
        \u0275\u0275conditionalCreate(14, HrmQuickFilter_Conditional_14_Template, 2, 1, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const panel_r7 = \u0275\u0275reference(7);
        \u0275\u0275classProp("qf--active", ctx.value().length > 0);
        \u0275\u0275property("nzDropdownMenu", panel_r7)("nzVisible", ctx.open());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value().length > 0 ? 1 : 2);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value().length > 0 ? 5 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.searchable() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode() === "multiple" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-multiselectable", ctx.mode() === "multiple");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filtered().length ? 14 : -1);
      }
    }, dependencies: [NzDropDownModule, NzDropdownDirective, NzDropdownMenuComponent, NzInputModule, NzInputDirective, NzCheckboxModule, NzCheckboxComponent, TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.qf[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.qf[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.qf--active[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n.qf-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-sub);\n}\n.qf-x[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 16px;\n  height: 16px;\n  border-radius: var(--radius-full);\n  color: var(--text-sub);\n}\n.qf-x[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.qf-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.qf-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  align-self: stretch;\n  margin: 1px 2px;\n  background: var(--border-sub);\n}\n.qf-count[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.qf[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.qf-panel[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 320px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.qf-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 10px 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.qf-search-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n}\n.qf-search-in.ant-input.ant-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.qf-search-in.ant-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n.qf-row.qf-all[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 1px solid var(--border-soft);\n  border-radius: 0;\n  margin-bottom: 4px;\n}\n.qf-all-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-sub);\n}\n.qf-row.qf-all--clear[_ngcontent-%COMP%], \n.qf-row.qf-all--clear[_ngcontent-%COMP%]:hover:not(:disabled), \n.qf-row.qf-all--clear[_ngcontent-%COMP%]   .qf-all-ic[_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n.qf-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.qf-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  text-align: left;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.qf-row[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.qf-row[_ngcontent-%COMP%]:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.qf-row--picked[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n.qf-cb[_ngcontent-%COMP%] {\n  flex: none;\n  pointer-events: none;\n}\n.qf-cb[_ngcontent-%COMP%]     .ant-checkbox + span {\n  display: none;\n}\n.qf-row-label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qf-tick[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-strong);\n}\n.qf-empty[_ngcontent-%COMP%] {\n  padding: 14px 10px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n/*# sourceMappingURL=hrm-quick-filter.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmQuickFilter, [{
    type: Component,
    args: [{ selector: "hrm-quick-filter", imports: [NzDropDownModule, NzInputModule, NzCheckboxModule, TablerIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <button type="button" class="qf" [class.qf--active]="value().length > 0"
      nz-dropdown [nzDropdownMenu]="panel" nzTrigger="click" [nzVisible]="open()" (nzVisibleChange)="onVisible($event)">
      @if (value().length > 0) {
        <span class="qf-x" role="button" [attr.aria-label]="clearLabel() || null"
          (click)="clear($event)"><tabler-icon [icon]="xIcon" [size]="14" /></span>
      } @else {
        <tabler-icon class="qf-ic" [icon]="$any(icon())" [size]="15" />
      }
      <span class="qf-label">{{ label() }}</span>
      @if (value().length > 0) {
        <span class="qf-sep"></span>
        <span class="qf-count">{{ display() }}</span>
      }
    </button>

    <nz-dropdown-menu #panel>
      <div class="qf-panel">
        @if (searchable()) {
          <div class="qf-search">
            <tabler-icon class="qf-search-ic" [icon]="searchIcon" [size]="15" />
            <input nz-input class="qf-search-in" type="text" [value]="query()" (input)="onSearch($event)"
              [attr.placeholder]="searchPlaceholder() || null" [attr.aria-label]="searchPlaceholder() || null" />
          </div>
        }
        @if (mode() === 'multiple') {
          <!-- Ch\u1ECDn t\u1EA5t c\u1EA3: KH\xD4NG checkbox, c\xF3 divider d\u01B0\u1EDBi. Ch\u01B0a \u0111\u1EE7/ch\u01B0a ch\u1ECDn \u2192 \u2713\u2713 "Ch\u1ECDn t\u1EA5t c\u1EA3";
               \u0111\xE3 ch\u1ECDn h\u1EBFt \u2192 \u2212 \u0111\u1ECF "B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3". -->
          <button type="button" class="qf-row qf-all" [class.qf-all--clear]="allState() === 'all'" (click)="toggleAll()">
            <tabler-icon class="qf-all-ic" [icon]="allState() === 'all' ? minusIcon : checksIcon" [size]="16" />
            <span class="qf-row-label">{{ allState() === 'all' ? deselectAllLabel() : selectAllLabel() }}</span>
          </button>
        }
        <div class="qf-list" role="listbox" [attr.aria-multiselectable]="mode() === 'multiple'">
          @for (o of filtered(); track o.value) {
            <button type="button" class="qf-row" role="option" [attr.aria-selected]="isPicked(o.value)"
              [class.qf-row--picked]="isPicked(o.value)" [disabled]="o.disabled ?? false" (click)="pick(o)">
              @if (mode() === 'multiple') {
                <label nz-checkbox class="qf-cb" [nzChecked]="isPicked(o.value)" [nzDisabled]="o.disabled ?? false"></label>
              }
              <span class="qf-row-label">{{ o.label }}</span>
              <!-- Ch\u1ECDn 1: kh\xF4ng checkbox \u2014 \u2713 b\xEAn ph\u1EA3i \u0111\xE1nh d\u1EA5u m\u1EE5c \u0111ang ch\u1ECDn. -->
              @if (mode() === 'single' && isPicked(o.value)) { <tabler-icon class="qf-tick" [icon]="checkIcon" [size]="16" /> }
            </button>
          }
          @if (!filtered().length) { <div class="qf-empty">{{ emptyText() }}</div> }
        </div>
      </div>
    </nz-dropdown-menu>
  `, host: { class: "hrm-quick-filter" }, styles: ["/* angular:styles/component:css;e402f3eec8ce2c377ad263778c869c727c40f49a926d429d742cfddf4d5c2dc5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-entry/hrm-quick-filter.ts */\n:host {\n  display: inline-block;\n}\n.qf {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.qf:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.qf--active {\n  border-color: var(--primary-base);\n}\n.qf-ic {\n  flex: none;\n  color: var(--text-sub);\n}\n.qf-x {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 16px;\n  height: 16px;\n  border-radius: var(--radius-full);\n  color: var(--text-sub);\n}\n.qf-x:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.qf-label {\n  white-space: nowrap;\n}\n.qf-sep {\n  width: 1px;\n  align-self: stretch;\n  margin: 1px 2px;\n  background: var(--border-sub);\n}\n.qf-count {\n  white-space: nowrap;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.qf:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.qf-panel {\n  min-width: 240px;\n  max-width: 320px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.qf-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 10px 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.qf-search-ic {\n  flex: none;\n  color: var(--text-soft);\n}\n.qf-search-in.ant-input.ant-input {\n  flex: 1;\n  min-width: 0;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.qf-search-in.ant-input::placeholder {\n  color: var(--text-soft);\n}\n.qf-row.qf-all {\n  border: 0;\n  border-bottom: 1px solid var(--border-soft);\n  border-radius: 0;\n  margin-bottom: 4px;\n}\n.qf-all-ic {\n  flex: none;\n  color: var(--text-sub);\n}\n.qf-row.qf-all--clear,\n.qf-row.qf-all--clear:hover:not(:disabled),\n.qf-row.qf-all--clear .qf-all-ic {\n  color: var(--error-base);\n}\n.qf-list {\n  max-height: 300px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.qf-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  text-align: left;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.qf-row:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.qf-row:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.qf-row--picked {\n  color: var(--text-strong);\n}\n.qf-cb {\n  flex: none;\n  pointer-events: none;\n}\n.qf-cb ::ng-deep .ant-checkbox + span {\n  display: none;\n}\n.qf-row-label {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.qf-tick {\n  flex: none;\n  color: var(--text-strong);\n}\n.qf-empty {\n  padding: 14px 10px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n/*# sourceMappingURL=hrm-quick-filter.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], unit: [{ type: Input, args: [{ isSignal: true, alias: "unit", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], selectAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "selectAllLabel", required: false }] }], deselectAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "deselectAllLabel", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }], cleared: [{ type: Output, args: ["cleared"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmQuickFilter, { className: "HrmQuickFilter", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-quick-filter.ts", lineNumber: 146 });
})();

export {
  HrmQuickFilter
};
//# sourceMappingURL=chunk-CJKFUWVC.js.map
