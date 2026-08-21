import {
  NzCellFixedDirective,
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzTdAddOnComponent,
  NzThAddOnComponent,
  NzThMeasureDirective,
  NzThSelectionComponent,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-63BVE4AM.js";
import {
  NzTooltipDirective
} from "./chunk-UDAG7UB6.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  Component,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts
var _c0 = (a0, a1) => ({ $implicit: a0, value: a1 });
var _forTrack0 = ($index, $item) => $item.key;
function _forTrack1($index, $item) {
  return this.rowKeyOf($item);
}
function HrmGrid_Conditional_0_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 5);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", c_r1.cell)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, ctx_r1.recordRow(), ctx_r1.recordRow()[c_r1.key]));
  }
}
function HrmGrid_Conditional_0_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.recordRow()[c_r1.key], " ");
  }
}
function HrmGrid_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 4);
    \u0275\u0275conditionalCreate(4, HrmGrid_Conditional_0_For_3_Conditional_4_Template, 1, 5, "ng-container", 5)(5, HrmGrid_Conditional_0_For_3_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.labelWidth());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("text-align", c_r1.align || "left");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.cell ? 4 : 5);
  }
}
function HrmGrid_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-table", 1)(1, "tbody");
    \u0275\u0275repeaterCreate(2, HrmGrid_Conditional_0_For_3_Template, 6, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r1.columns())("nzShowPagination", false)("nzSize", ctx_r1.size());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.columns());
  }
}
function HrmGrid_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275listener("nzCheckedChange", function HrmGrid_Conditional_1_Conditional_4_Template_th_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkAll($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzChecked", ctx_r1.allChecked())("nzIndeterminate", ctx_r1.indeterminate());
  }
}
function HrmGrid_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", c_r4.width)("text-align", c_r4.align || "left");
    \u0275\u0275property("nzRight", c_r4.fixed === "right")("nzLeft", c_r4.fixed === "left")("nzSortFn", c_r4.sortable ? ctx_r1.sortFns()[c_r4.key] ?? null : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.title);
  }
}
function HrmGrid_Conditional_1_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 14);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_9_Conditional_1_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    })("nzCheckedChange", function HrmGrid_Conditional_1_For_9_Conditional_1_Template_td_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkOne(row_r6, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzChecked", ctx_r1.isChecked(row_r6));
  }
}
function HrmGrid_Conditional_1_For_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 5);
  }
  if (rf & 2) {
    const c_r8 = \u0275\u0275nextContext().$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngTemplateOutlet", c_r8.cell)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, row_r6, row_r6[c_r8.key]));
  }
}
function HrmGrid_Conditional_1_For_9_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275listener("mouseenter", function HrmGrid_Conditional_1_For_9_For_3_Conditional_2_Template_span_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const c_r8 = \u0275\u0275nextContext().$implicit;
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTruncEnter($event, row_r6[c_r8.key]));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = \u0275\u0275nextContext().$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzTooltipTitle", ctx_r1.truncTip());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6[c_r8.key]);
  }
}
function HrmGrid_Conditional_1_For_9_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r8 = \u0275\u0275nextContext().$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r6[c_r8.key], " ");
  }
}
function HrmGrid_Conditional_1_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_For_9_For_3_Conditional_1_Template, 1, 5, "ng-container", 5)(2, HrmGrid_Conditional_1_For_9_For_3_Conditional_2_Template, 2, 2, "span", 16)(3, HrmGrid_Conditional_1_For_9_For_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("text-align", c_r8.align || "left");
    \u0275\u0275property("nzRight", c_r8.fixed === "right")("nzLeft", c_r8.fixed === "left");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r8.cell ? 1 : ctx_r1.textOverflow() === "truncate" ? 2 : 3);
  }
}
function HrmGrid_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 11);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_9_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rowClick.emit(row_r6));
    });
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_For_9_Conditional_1_Template, 1, 1, "td", 12);
    \u0275\u0275repeaterCreate(2, HrmGrid_Conditional_1_For_9_For_3_Template, 4, 5, "td", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns());
  }
}
function HrmGrid_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-table", 6, 0)(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, HrmGrid_Conditional_1_Conditional_4_Template, 1, 2, "th", 7);
    \u0275\u0275repeaterCreate(5, HrmGrid_Conditional_1_For_6_Template, 2, 8, "th", 8, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, HrmGrid_Conditional_1_For_9_Template, 4, 1, "tr", null, _forTrack1, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r10 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hrm-grid--striped", ctx_r1.striped());
    \u0275\u0275property("nzData", ctx_r1.data())("nzLoading", ctx_r1.loading())("nzBordered", ctx_r1.bordered())("nzSize", ctx_r1.size())("nzShowPagination", ctx_r1.showPagination())("nzPageSize", ctx_r1.pageSize())("nzScroll", ctx_r1.scrollObj())("nzTableLayout", ctx_r1.textOverflow() === "truncate" ? "fixed" : "auto");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectable() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(t_r10.data);
  }
}
var HrmGrid = class _HrmGrid {
  constructor() {
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bordered = input(false, ...ngDevMode ? [{ debugName: "bordered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("small", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showPagination = input(true, ...ngDevMode ? [{ debugName: "showPagination" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = input(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.scroll = input({}, ...ngDevMode ? [{ debugName: "scroll" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minWidth = input("", ...ngDevMode ? [{ debugName: "minWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.scrollObj = computed(() => {
      const s = this.scroll();
      const x = this.minWidth() || s.x;
      return x ? __spreadProps(__spreadValues({}, s), { x }) : s;
    }, ...ngDevMode ? [{ debugName: "scrollObj" }] : (
      /* istanbul ignore next */
      []
    ));
    this.striped = input(false, ...ngDevMode ? [{ debugName: "striped" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowKey = input("id", ...ngDevMode ? [{ debugName: "rowKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("grid", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.record = input(null, ...ngDevMode ? [{ debugName: "record" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelWidth = input("200px", ...ngDevMode ? [{ debugName: "labelWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.density = input("auto", ...ngDevMode ? [{ debugName: "density" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dividers = input("rows", ...ngDevMode ? [{ debugName: "dividers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.textOverflow = input("wrap", ...ngDevMode ? [{ debugName: "textOverflow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKeys = model([], ...ngDevMode ? [{ debugName: "selectedKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowClick = output();
    this.truncTip = signal(null, ...ngDevMode ? [{ debugName: "truncTip" }] : (
      /* istanbul ignore next */
      []
    ));
    this.recordRow = computed(() => this.record() ?? this.data()[0] ?? {}, ...ngDevMode ? [{ debugName: "recordRow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allChecked = computed(() => {
      const d = this.data();
      return d.length > 0 && d.every((r) => this.selectedKeys().includes(this.rowKeyOf(r)));
    }, ...ngDevMode ? [{ debugName: "allChecked" }] : (
      /* istanbul ignore next */
      []
    ));
    this.indeterminate = computed(() => {
      const some = this.data().some((r) => this.selectedKeys().includes(this.rowKeyOf(r)));
      return some && !this.allChecked();
    }, ...ngDevMode ? [{ debugName: "indeterminate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortFns = computed(() => {
      const map = {};
      for (const c of this.columns()) {
        if (!c.sortable)
          continue;
        const key = c.key;
        map[key] = (a, b) => {
          const av = a[key], bv = b[key];
          if (typeof av === "number" && typeof bv === "number")
            return av - bv;
          return String(av ?? "").localeCompare(String(bv ?? ""), "vi");
        };
      }
      return map;
    }, ...ngDevMode ? [{ debugName: "sortFns" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  onTruncEnter(e, value) {
    const el = e.target;
    this.truncTip.set(el.scrollWidth > el.clientWidth ? String(value ?? "") : null);
  }
  rowKeyOf(row) {
    return row[this.rowKey()];
  }
  isChecked(row) {
    return this.selectedKeys().includes(this.rowKeyOf(row));
  }
  checkOne(row, checked) {
    const k = this.rowKeyOf(row);
    const cur = this.selectedKeys();
    this.selectedKeys.set(checked ? [...cur, k] : cur.filter((x) => x !== k));
  }
  checkAll(checked) {
    this.selectedKeys.set(checked ? this.data().map((r) => this.rowKeyOf(r)) : []);
  }
  static {
    this.\u0275fac = function HrmGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmGrid)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmGrid, selectors: [["hrm-grid"]], hostAttrs: [1, "hrm-grid"], hostVars: 8, hostBindings: function HrmGrid_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-density", ctx.density() === "auto" ? null : ctx.density())("data-dividers", ctx.dividers());
        \u0275\u0275classProp("hrm-grid--card", ctx.variant() === "card")("hrm-grid--record", ctx.variant() === "record")("hrm-grid--truncate", ctx.textOverflow() === "truncate");
      }
    }, inputs: { columns: [1, "columns"], data: [1, "data"], loading: [1, "loading"], bordered: [1, "bordered"], size: [1, "size"], showPagination: [1, "showPagination"], pageSize: [1, "pageSize"], scroll: [1, "scroll"], minWidth: [1, "minWidth"], striped: [1, "striped"], selectable: [1, "selectable"], rowKey: [1, "rowKey"], variant: [1, "variant"], record: [1, "record"], labelWidth: [1, "labelWidth"], density: [1, "density"], dividers: [1, "dividers"], textOverflow: [1, "textOverflow"], selectedKeys: [1, "selectedKeys"] }, outputs: { selectedKeys: "selectedKeysChange", rowClick: "rowClick" }, decls: 2, vars: 1, consts: [["t", ""], ["nzTableLayout", "fixed", 3, "nzData", "nzShowPagination", "nzSize"], [3, "nzData", "nzLoading", "nzBordered", "nzSize", "nzShowPagination", "nzPageSize", "nzScroll", "nzTableLayout", "hrm-grid--striped"], [1, "hg-rec-label"], [1, "hg-rec-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzData", "nzLoading", "nzBordered", "nzSize", "nzShowPagination", "nzPageSize", "nzScroll", "nzTableLayout"], ["nzWidth", "48px", "nzShowCheckbox", "", 3, "nzChecked", "nzIndeterminate"], [3, "width", "textAlign", "nzRight", "nzLeft", "nzSortFn"], ["nzWidth", "48px", "nzShowCheckbox", "", 3, "nzCheckedChange", "nzChecked", "nzIndeterminate"], [3, "nzRight", "nzLeft", "nzSortFn"], [3, "click"], ["nzShowCheckbox", "", 3, "nzChecked"], [3, "textAlign", "nzRight", "nzLeft"], ["nzShowCheckbox", "", 3, "click", "nzCheckedChange", "nzChecked"], [3, "nzRight", "nzLeft"], ["nz-tooltip", "", 1, "hg-trunc", 3, "nzTooltipTitle"], ["nz-tooltip", "", 1, "hg-trunc", 3, "mouseenter", "nzTooltipTitle"]], template: function HrmGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmGrid_Conditional_0_Template, 4, 3, "nz-table", 1)(1, HrmGrid_Conditional_1_Template, 10, 11, "nz-table", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant() === "record" ? 0 : 1);
      }
    }, dependencies: [NzTableModule, NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCellFixedDirective, NzThSelectionComponent, NgTemplateOutlet, NzTooltipDirective], styles: ['\n.hrm-grid--striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n}\n.hrm-grid--striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%] {\n  background: var(--bg-surface-hover, var(--bg-surface-subtle));\n}\n.hrm-grid--card[_nghost-%COMP%]     .ant-table {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  overflow: visible;\n}\n.hrm-grid--card[_nghost-%COMP%]     .ant-table table {\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.hrm-grid--card[_nghost-%COMP%]     thead th {\n  background: transparent;\n  border: 0 !important;\n  color: var(--text-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  padding: 4px 14px;\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-sub);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 12px 14px;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td:first-child {\n  border-left: 1px solid var(--border-sub);\n  border-top-left-radius: var(--radius-lg);\n  border-bottom-left-radius: var(--radius-lg);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td:last-child {\n  border-right: 1px solid var(--border-sub);\n  border-top-right-radius: var(--radius-lg);\n  border-bottom-right-radius: var(--radius-lg);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr:hover > td {\n  background: var(--bg-surface-subtle);\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td, \n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th {\n  padding: var(--table-cell-pad, 8px 12px);\n  font-size: var(--table-font-size, 13px);\n}\n[data-density="compact"][_nghost-%COMP%] {\n  --table-cell-pad: 4px 10px;\n  --table-font-size: var(--fs-12);\n}\n[data-density="balanced"][_nghost-%COMP%] {\n  --table-cell-pad: 8px 12px;\n  --table-font-size: var(--fs-13);\n}\n[data-density="spacious"][_nghost-%COMP%] {\n  --table-cell-pad: 14px 16px;\n  --table-font-size: var(--fs-14);\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th {\n  background: var(--bg-surface-subtle);\n  font-weight: 600;\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n[_nghost-%COMP%]     .ant-table-content, \n[_nghost-%COMP%]     .ant-table-body {\n  overflow-x: auto;\n}\n[_nghost-%COMP%]     .ant-table-cell-fix-right {\n  right: 0 !important;\n}\n[_nghost-%COMP%]     .ant-table-cell-fix-left {\n  left: 0 !important;\n}\n[_nghost-%COMP%]     .ant-table-cell-fix-right, \n[_nghost-%COMP%]     .ant-table-cell-fix-left {\n  background: var(--bg-surface);\n  z-index: 3;\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-right, \n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-left {\n  background: var(--bg-surface-subtle);\n}\n[_nghost-%COMP%]     .ant-table-tbody > tr:hover > td, \n[_nghost-%COMP%]     .ant-table-tbody > tr.ant-table-row:hover > td {\n  background: var(--table-row-hover-bg, var(--bg-surface-subtle)) !important;\n}\n[_nghost-%COMP%]     .ant-table-thead > tr > th::before {\n  display: none !important;\n}\n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child), \n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n[data-dividers="grid"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child), \n[data-dividers="grid"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n[data-dividers="none"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table table {\n  table-layout: fixed;\n}\n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table-tbody > tr > td, \n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table-thead > tr > th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-trunc[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-label {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-weight: 500;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-value {\n  color: var(--text-body);\n  vertical-align: middle;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-label {\n  border-right: 1px solid var(--border-sub);\n}\n/*# sourceMappingURL=hrm-grid.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmGrid, [{
    type: Component,
    args: [{ selector: "hrm-grid", imports: [NzTableModule, NgTemplateOutlet, NzTooltipDirective], template: `
    @if (variant() === 'record') {
      <!-- B\u1EA3ng b\u1EA3n ghi \u0111\u01A1n: m\u1ED7i c\u1ED9t th\xE0nh M\u1ED8T D\xD2NG (nh\xE3n | gi\xE1 tr\u1ECB) cho m\u1ED9t record.
           T\xE1i d\xF9ng HrmGridColumn (title=nh\xE3n, cell=\xF4 Table Cells) \u2192 xem chi ti\u1EBFt 1 nh\xE2n vi\xEAn/\u0111\u01A1n. -->
      <nz-table [nzData]="columns()" [nzShowPagination]="false" [nzSize]="size()" nzTableLayout="fixed">
        <tbody>
          @for (c of columns(); track c.key) {
            <tr>
              <td class="hg-rec-label" [style.width]="labelWidth()">{{ c.title }}</td>
              <td class="hg-rec-value" [style.textAlign]="c.align || 'left'">
                @if (c.cell) {
                  <ng-container [ngTemplateOutlet]="c.cell" [ngTemplateOutletContext]="{ $implicit: recordRow(), value: recordRow()[c.key] }" />
                } @else {
                  {{ recordRow()[c.key] }}
                }
              </td>
            </tr>
          }
        </tbody>
      </nz-table>
    } @else {
    <nz-table
      #t
      [nzData]="data()"
      [nzLoading]="loading()"
      [nzBordered]="bordered()"
      [nzSize]="size()"
      [nzShowPagination]="showPagination()"
      [nzPageSize]="pageSize()"
      [nzScroll]="scrollObj()"
      [nzTableLayout]="textOverflow() === 'truncate' ? 'fixed' : 'auto'"
      [class.hrm-grid--striped]="striped()">
      <thead>
        <tr>
          @if (selectable()) {
            <th nzWidth="48px" nzShowCheckbox
              [nzChecked]="allChecked()" [nzIndeterminate]="indeterminate()"
              (nzCheckedChange)="checkAll($event)"></th>
          }
          @for (c of columns(); track c.key) {
            <th [style.width]="c.width" [style.textAlign]="c.align || 'left'"
              [nzRight]="c.fixed === 'right'" [nzLeft]="c.fixed === 'left'"
              [nzSortFn]="c.sortable ? (sortFns()[c.key] ?? null) : null">{{ c.title }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of t.data; track rowKeyOf(row)) {
          <tr (click)="rowClick.emit(row)">
            @if (selectable()) {
              <td nzShowCheckbox [nzChecked]="isChecked(row)"
                (click)="$event.stopPropagation()"
                (nzCheckedChange)="checkOne(row, $event)"></td>
            }
            @for (c of columns(); track c.key) {
              <td [style.textAlign]="c.align || 'left'"
                [nzRight]="c.fixed === 'right'" [nzLeft]="c.fixed === 'left'">
                @if (c.cell) {
                  <ng-container [ngTemplateOutlet]="c.cell" [ngTemplateOutletContext]="{ $implicit: row, value: row[c.key] }" />
                } @else if (textOverflow() === 'truncate') {
                  <!-- \xD4 b\u1ECB c\u1EAFt "\u2026" \u2192 r\xEA chu\u1ED9t hi\u1EC7n tooltip full n\u1ED9i dung (ch\u1EC9 khi th\u1EADt s\u1EF1 tr\xE0n). -->
                  <span class="hg-trunc" nz-tooltip [nzTooltipTitle]="truncTip()"
                    (mouseenter)="onTruncEnter($event, row[c.key])">{{ row[c.key] }}</span>
                } @else {
                  {{ row[c.key] }}
                }
              </td>
            }
          </tr>
        }
      </tbody>
    </nz-table>
    }
  `, host: {
      class: "hrm-grid",
      "[class.hrm-grid--card]": "variant() === 'card'",
      "[class.hrm-grid--record]": "variant() === 'record'",
      "[class.hrm-grid--truncate]": "textOverflow() === 'truncate'",
      "[attr.data-density]": "density() === 'auto' ? null : density()",
      "[attr.data-dividers]": "dividers()"
    }, styles: ['/* angular:styles/component:css;05471fe7294a2b0e09ad4b7ec2a408e40e86e37fe5246e145a31157c45989fe6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts */\n.hrm-grid--striped tbody tr:nth-child(even) > td {\n  background: var(--bg-surface-subtle);\n}\n.hrm-grid--striped tbody tr:hover > td {\n  background: var(--bg-surface-hover, var(--bg-surface-subtle));\n}\n:host(.hrm-grid--card) ::ng-deep .ant-table {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  overflow: visible;\n}\n:host(.hrm-grid--card) ::ng-deep .ant-table table {\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n:host(.hrm-grid--card) ::ng-deep thead th {\n  background: transparent;\n  border: 0 !important;\n  color: var(--text-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  padding: 4px 14px;\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-sub);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 12px 14px;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td:first-child {\n  border-left: 1px solid var(--border-sub);\n  border-top-left-radius: var(--radius-lg);\n  border-bottom-left-radius: var(--radius-lg);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td:last-child {\n  border-right: 1px solid var(--border-sub);\n  border-top-right-radius: var(--radius-lg);\n  border-bottom-right-radius: var(--radius-lg);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr:hover > td {\n  background: var(--bg-surface-subtle);\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td,\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th {\n  padding: var(--table-cell-pad, 8px 12px);\n  font-size: var(--table-font-size, 13px);\n}\n:host([data-density="compact"]) {\n  --table-cell-pad: 4px 10px;\n  --table-font-size: var(--fs-12);\n}\n:host([data-density="balanced"]) {\n  --table-cell-pad: 8px 12px;\n  --table-font-size: var(--fs-13);\n}\n:host([data-density="spacious"]) {\n  --table-cell-pad: 14px 16px;\n  --table-font-size: var(--fs-14);\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th {\n  background: var(--bg-surface-subtle);\n  font-weight: 600;\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n:host ::ng-deep .ant-table-content,\n:host ::ng-deep .ant-table-body {\n  overflow-x: auto;\n}\n:host ::ng-deep .ant-table-cell-fix-right {\n  right: 0 !important;\n}\n:host ::ng-deep .ant-table-cell-fix-left {\n  left: 0 !important;\n}\n:host ::ng-deep .ant-table-cell-fix-right,\n:host ::ng-deep .ant-table-cell-fix-left {\n  background: var(--bg-surface);\n  z-index: 3;\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-right,\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-left {\n  background: var(--bg-surface-subtle);\n}\n:host ::ng-deep .ant-table-tbody > tr:hover > td,\n:host ::ng-deep .ant-table-tbody > tr.ant-table-row:hover > td {\n  background: var(--table-row-hover-bg, var(--bg-surface-subtle)) !important;\n}\n:host ::ng-deep .ant-table-thead > tr > th::before {\n  display: none !important;\n}\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child),\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n:host([data-dividers="grid"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child),\n:host([data-dividers="grid"]) ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n:host([data-dividers="none"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n:host(.hrm-grid--truncate) ::ng-deep .ant-table table {\n  table-layout: fixed;\n}\n:host(.hrm-grid--truncate) ::ng-deep .ant-table-tbody > tr > td,\n:host(.hrm-grid--truncate) ::ng-deep .ant-table-thead > tr > th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-trunc {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-label {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-weight: 500;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-value {\n  color: var(--text-body);\n  vertical-align: middle;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-label {\n  border-right: 1px solid var(--border-sub);\n}\n/*# sourceMappingURL=hrm-grid.css.map */\n'] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showPagination: [{ type: Input, args: [{ isSignal: true, alias: "showPagination", required: false }] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }], scroll: [{ type: Input, args: [{ isSignal: true, alias: "scroll", required: false }] }], minWidth: [{ type: Input, args: [{ isSignal: true, alias: "minWidth", required: false }] }], striped: [{ type: Input, args: [{ isSignal: true, alias: "striped", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], record: [{ type: Input, args: [{ isSignal: true, alias: "record", required: false }] }], labelWidth: [{ type: Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], density: [{ type: Input, args: [{ isSignal: true, alias: "density", required: false }] }], dividers: [{ type: Input, args: [{ isSignal: true, alias: "dividers", required: false }] }], textOverflow: [{ type: Input, args: [{ isSignal: true, alias: "textOverflow", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], rowClick: [{ type: Output, args: ["rowClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmGrid, { className: "HrmGrid", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts", lineNumber: 205 });
})();

export {
  HrmGrid
};
//# sourceMappingURL=chunk-HICBXL5G.js.map
