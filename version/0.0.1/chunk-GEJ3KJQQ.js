import {
  HrmTableToolbar
} from "./chunk-HJ57LY37.js";
import {
  HrmPageHeader
} from "./chunk-XLN4ABX5.js";
import {
  HrmBreadcrumb
} from "./chunk-TE5BFWZ7.js";
import {
  HrmPagination
} from "./chunk-CVBIZBQ2.js";
import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "./chunk-647OXKCN.js";
import {
  HrmGrid
} from "./chunk-HICBXL5G.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ChartBar,
  LayoutGrid,
  LayoutKanban,
  Table,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  ContentChild,
  Directive,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  contentChild,
  effect,
  forwardRef,
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
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-board.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.key;
function _forTrack1($index, $item) {
  return this.rowId($item);
}
function HrmBoard_For_2_For_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function HrmBoard_For_2_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275listener("click", function HrmBoard_For_2_For_9_Conditional_2_Template_label_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "input", 16);
    \u0275\u0275listener("change", function HrmBoard_For_2_For_9_Conditional_2_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSel(row_r5, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSel(row_r5));
  }
}
function HrmBoard_For_2_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.cardTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, row_r5));
  }
}
function HrmBoard_For_2_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5[ctx_r2.titleField()]);
  }
}
function HrmBoard_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HrmBoard_For_2_For_9_Template_div_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cardClick.emit(row_r5));
    });
    \u0275\u0275template(1, HrmBoard_For_2_For_9_div_1_Template, 1, 0, "div", 10);
    \u0275\u0275conditionalCreate(2, HrmBoard_For_2_For_9_Conditional_2_Template, 2, 1, "label", 11);
    \u0275\u0275conditionalCreate(3, HrmBoard_For_2_For_9_Conditional_3_Template, 1, 4, "ng-container", 12)(4, HrmBoard_For_2_For_9_Conditional_4_Template, 2, 1, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-sel", ctx_r2.isSel(row_r5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.cardTemplate() ? 3 : 4);
  }
}
function HrmBoard_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function HrmBoard_For_2_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const g_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCard.emit(g_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", ctx_r2.addLabel());
  }
}
function HrmBoard_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "header", 2);
    \u0275\u0275element(2, "span", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275listener("cdkDropListDropped", function HrmBoard_For_2_Template_div_cdkDropListDropped_7_listener($event) {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event, g_r2.key));
    });
    \u0275\u0275repeaterCreate(8, HrmBoard_For_2_For_9_Template, 5, 4, "div", 7, _forTrack1, true);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, HrmBoard_For_2_Conditional_10_Template, 2, 1, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("data-tone", g_r2.tone || "neutral");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.items.length);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListData", g_r2.items);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r2.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.addLabel() ? 10 : -1);
  }
}
var HrmBoard = class _HrmBoard {
  constructor() {
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupBy = input("status", ...ngDevMode ? [{ debugName: "groupBy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groups = input([], ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardTemplate = input(null, ...ngDevMode ? [{ debugName: "cardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowKey = input("id", ...ngDevMode ? [{ debugName: "rowKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.titleField = input("name", ...ngDevMode ? [{ debugName: "titleField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKeys = model([], ...ngDevMode ? [{ debugName: "selectedKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addCard = output();
    this.cardClick = output();
    this.groupChange = output();
    this.buckets = signal({}, ...ngDevMode ? [{ debugName: "buckets" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupsView = computed(() => this.groups().map((g) => __spreadProps(__spreadValues({}, g), { items: this.buckets()[g.key] ?? [] })), ...ngDevMode ? [{ debugName: "groupsView" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const by = this.groupBy(), gs = this.groups(), rows = this.data();
      const map = {};
      for (const g of gs)
        map[g.key] = [];
      for (const r of rows) {
        const k = String(r[by] ?? "");
        (map[k] ??= []).push(r);
      }
      this.buckets.set(map);
    });
  }
  rowId(row) {
    return row[this.rowKey()];
  }
  isSel(row) {
    return this.selectedKeys().includes(this.rowId(row));
  }
  toggleSel(row, checked) {
    const k = this.rowId(row);
    const cur = this.selectedKeys();
    this.selectedKeys.set(checked ? [...cur, k] : cur.filter((x) => x !== k));
  }
  onDrop(e, toKey) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      const row = e.previousContainer.data[e.previousIndex];
      const from = String(row[this.groupBy()] ?? "");
      transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
      row[this.groupBy()] = toKey;
      this.groupChange.emit({ row, from, to: toKey });
    }
    this.buckets.set(__spreadValues({}, this.buckets()));
  }
  static {
    this.\u0275fac = function HrmBoard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmBoard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmBoard, selectors: [["hrm-board"]], hostAttrs: [1, "hrm-board"], inputs: { data: [1, "data"], groupBy: [1, "groupBy"], groups: [1, "groups"], cardTemplate: [1, "cardTemplate"], rowKey: [1, "rowKey"], titleField: [1, "titleField"], selectable: [1, "selectable"], selectedKeys: [1, "selectedKeys"], addLabel: [1, "addLabel"] }, outputs: { selectedKeys: "selectedKeysChange", addCard: "addCard", cardClick: "cardClick", groupChange: "groupChange" }, decls: 3, vars: 0, consts: [["cdkDropListGroup", "", 1, "bd"], [1, "bd-col"], [1, "bd-col-h"], [1, "bd-dot"], [1, "bd-col-title"], [1, "bd-col-count"], ["cdkDropList", "", 1, "bd-list", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "bd-card", 3, "is-sel"], ["type", "button", 1, "bd-add"], ["cdkDrag", "", 1, "bd-card", 3, "click"], ["class", "bd-card-ph", 4, "cdkDragPlaceholder"], [1, "bd-check"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "bd-card-t"], [1, "bd-card-ph"], [1, "bd-check", 3, "click"], ["type", "checkbox", 3, "change", "checked"], ["type", "button", 1, "bd-add", 3, "click"]], template: function HrmBoard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, HrmBoard_For_2_Template, 11, 5, "section", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.groupsView());
      }
    }, dependencies: [NgTemplateOutlet, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragPlaceholder], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.bd[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: stretch;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 100%;\n  padding-bottom: 4px;\n}\n.bd-col[_ngcontent-%COMP%] {\n  flex: 0 0 288px;\n  width: 288px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.bd-col-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n}\n.bd-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  flex: none;\n  background: var(--neutral-400);\n}\n.bd-col-h[data-tone=success][_ngcontent-%COMP%]   .bd-dot[_ngcontent-%COMP%] {\n  background: var(--success-base);\n}\n.bd-col-h[data-tone=warning][_ngcontent-%COMP%]   .bd-dot[_ngcontent-%COMP%] {\n  background: var(--warning-base);\n}\n.bd-col-h[data-tone=error][_ngcontent-%COMP%]   .bd-dot[_ngcontent-%COMP%] {\n  background: var(--error-base);\n}\n.bd-col-h[data-tone=info][_ngcontent-%COMP%]   .bd-dot[_ngcontent-%COMP%] {\n  background: var(--info-base);\n}\n.bd-col-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.bd-col-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  padding: 0 7px;\n  border-radius: var(--radius-full);\n}\n.bd-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 8px 10px;\n  min-height: 40px;\n  flex: 1 1 auto;\n  overflow-y: auto;\n}\n.bd-col-h[_ngcontent-%COMP%] {\n  flex: none;\n}\n.bd-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  padding: 10px 12px;\n  cursor: pointer;\n  color: var(--text-body);\n  box-shadow: var(--shadow-regular-xs);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n}\n.bd-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.bd-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.bd-card[_ngcontent-%COMP%]:hover   .bd-check[_ngcontent-%COMP%], \n.bd-card.is-sel[_ngcontent-%COMP%]   .bd-check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.bd-card.is-sel[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n.bd-card-t[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.bd-add[_ngcontent-%COMP%] {\n  flex: none;\n  margin: 0 8px 8px;\n  padding: 7px 10px;\n  text-align: left;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-add[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface);\n  color: var(--text-strong);\n}\n.bd-card.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-regular-md);\n  border-color: var(--primary-base);\n}\n.bd-card.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.bd-card-ph[_ngcontent-%COMP%] {\n  height: 44px;\n  border: 1px dashed var(--primary-border);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .bd-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform var(--duration-normal, .2s) var(--ease-out, ease);\n}\n.bd-list.cdk-drop-list-receiving[_ngcontent-%COMP%], \n.bd-list.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n}\n/*# sourceMappingURL=hrm-board.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmBoard, [{
    type: Component,
    args: [{ selector: "hrm-board", imports: [NgTemplateOutlet, CdkDropListGroup, CdkDropList, CdkDrag, CdkDragPlaceholder], template: `
    <div class="bd" cdkDropListGroup>
      @for (g of groupsView(); track g.key) {
        <section class="bd-col">
          <header class="bd-col-h" [attr.data-tone]="g.tone || 'neutral'">
            <span class="bd-dot"></span>
            <span class="bd-col-title">{{ g.label }}</span>
            <span class="bd-col-count">{{ g.items.length }}</span>
          </header>
          <div class="bd-list" cdkDropList [cdkDropListData]="g.items"
            (cdkDropListDropped)="onDrop($event, g.key)">
            @for (row of g.items; track rowId(row)) {
              <div class="bd-card" [class.is-sel]="isSel(row)" cdkDrag (click)="cardClick.emit(row)">
                <div class="bd-card-ph" *cdkDragPlaceholder></div>
                @if (selectable()) {
                  <label class="bd-check" (click)="$event.stopPropagation()">
                    <input type="checkbox" [checked]="isSel(row)"
                      (change)="toggleSel(row, $any($event.target).checked)" />
                  </label>
                }
                @if (cardTemplate()) {
                  <ng-container [ngTemplateOutlet]="cardTemplate()!" [ngTemplateOutletContext]="{ $implicit: row }" />
                } @else {
                  <span class="bd-card-t">{{ row[titleField()] }}</span>
                }
              </div>
            }
          </div>
          @if (addLabel()) {
            <button type="button" class="bd-add" (click)="addCard.emit(g.key)">+ {{ addLabel() }}</button>
          }
        </section>
      }
    </div>
  `, host: { class: "hrm-board" }, styles: ["/* angular:styles/component:css;8eae7b9fe5bb7fac7e6aaf6a7634c0d55dd6f97e3fb0310d5817b843ea35dbed;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-board.ts */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.bd {\n  display: flex;\n  gap: 12px;\n  align-items: stretch;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 100%;\n  padding-bottom: 4px;\n}\n.bd-col {\n  flex: 0 0 288px;\n  width: 288px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  max-height: 100%;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.bd-col-h {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n}\n.bd-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  flex: none;\n  background: var(--neutral-400);\n}\n.bd-col-h[data-tone=success] .bd-dot {\n  background: var(--success-base);\n}\n.bd-col-h[data-tone=warning] .bd-dot {\n  background: var(--warning-base);\n}\n.bd-col-h[data-tone=error] .bd-dot {\n  background: var(--error-base);\n}\n.bd-col-h[data-tone=info] .bd-dot {\n  background: var(--info-base);\n}\n.bd-col-title {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.bd-col-count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  padding: 0 7px;\n  border-radius: var(--radius-full);\n}\n.bd-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 8px 10px;\n  min-height: 40px;\n  flex: 1 1 auto;\n  overflow-y: auto;\n}\n.bd-col-h {\n  flex: none;\n}\n.bd-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  padding: 10px 12px;\n  cursor: pointer;\n  color: var(--text-body);\n  box-shadow: var(--shadow-regular-xs);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-card:hover {\n  border-color: var(--primary-border);\n}\n.bd-card {\n  position: relative;\n}\n.bd-check {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-check input {\n  width: 13px;\n  height: 13px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.bd-card:hover .bd-check,\n.bd-card.is-sel .bd-check {\n  opacity: 1;\n}\n.bd-card.is-sel {\n  border-color: var(--primary-base);\n}\n.bd-card-t {\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.bd-add {\n  flex: none;\n  margin: 0 8px 8px;\n  padding: 7px 10px;\n  text-align: left;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.bd-add:hover {\n  background: var(--bg-surface);\n  color: var(--text-strong);\n}\n.bd-card.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n  border-color: var(--primary-base);\n}\n.bd-card.cdk-drag-placeholder {\n  opacity: 0;\n}\n.bd-card-ph {\n  height: 44px;\n  border: 1px dashed var(--primary-border);\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n}\n.cdk-drop-list-dragging .bd-card:not(.cdk-drag-placeholder) {\n  transition: transform var(--duration-normal, .2s) var(--ease-out, ease);\n}\n.bd-list.cdk-drop-list-receiving,\n.bd-list.cdk-drop-list-dragging {\n  border-radius: var(--radius-md);\n}\n/*# sourceMappingURL=hrm-board.css.map */\n"] }]
  }], () => [], { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], groupBy: [{ type: Input, args: [{ isSignal: true, alias: "groupBy", required: false }] }], groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: false }] }], cardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "cardTemplate", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], titleField: [{ type: Input, args: [{ isSignal: true, alias: "titleField", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], addCard: [{ type: Output, args: ["addCard"] }], cardClick: [{ type: Output, args: ["cardClick"] }], groupChange: [{ type: Output, args: ["groupChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmBoard, { className: "HrmBoard", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-board.ts", lineNumber: 119 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-gantt.ts
var _c02 = (a0) => ({ $implicit: a0 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.t;
function HrmGantt_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22);
    \u0275\u0275listener("click", function HrmGantt_For_9_Conditional_1_Template_label_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "input", 23);
    \u0275\u0275listener("change", function HrmGantt_For_9_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const b_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSel(b_r2.row, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSel(b_r2.row));
  }
}
function HrmGantt_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 19);
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.labelTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, b_r2.row));
  }
}
function HrmGantt_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.label);
  }
}
function HrmGantt_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function HrmGantt_For_9_Template_div_click_0_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.barClick.emit(b_r2.row));
    });
    \u0275\u0275conditionalCreate(1, HrmGantt_For_9_Conditional_1_Template, 2, 1, "label", 17);
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275conditionalCreate(3, HrmGantt_For_9_Conditional_3_Template, 1, 4, "ng-container", 19)(4, HrmGantt_For_9_Conditional_4_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-sel", ctx_r2.isSel(b_r2.row));
    \u0275\u0275attribute("title", b_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectable() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.labelTemplate() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-late", b_r2.late);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.endText);
  }
}
function HrmGantt_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", m_r5.count * ctx_r2.dayWidth(), "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.label);
  }
}
function HrmGantt_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.dayWidth(), "px");
    \u0275\u0275classProp("is-weekend", d_r6.weekend)("is-today", d_r6.today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.day);
  }
}
function HrmGantt_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r2.todayLeft(), "px");
  }
}
function HrmGantt_For_21_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", b_r8.progress, "%");
  }
}
function HrmGantt_For_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function HrmGantt_For_21_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const b_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.barClick.emit(b_r8.row));
    });
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275conditionalCreate(2, HrmGantt_For_21_Conditional_1_Conditional_2_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("left", b_r8.left, "px")("width", b_r8.width, "px");
    \u0275\u0275attribute("data-tone", b_r8.tone || null)("title", b_r8.label + " \xB7 " + b_r8.progress + "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", b_r8.progress, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r8.progress > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", b_r8.left + b_r8.width + 8, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r8.label);
  }
}
function HrmGantt_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, HrmGantt_For_21_Conditional_1_Template, 5, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r8.width > 0 ? 1 : -1);
  }
}
var DAY = 864e5;
var toDate = (v) => {
  if (v instanceof Date)
    return v;
  if (v == null || v === "")
    return null;
  const d = new Date(String(v));
  return isNaN(d.getTime()) ? null : d;
};
var floorDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
var daysBetween = (a, b) => Math.round((floorDay(b).getTime() - floorDay(a).getTime()) / DAY);
var sameDay = (a, b) => floorDay(a).getTime() === floorDay(b).getTime();
var HrmGantt = class _HrmGantt {
  constructor() {
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.startField = input("start", ...ngDevMode ? [{ debugName: "startField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.endField = input("end", ...ngDevMode ? [{ debugName: "endField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelField = input("name", ...ngDevMode ? [{ debugName: "labelField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.progressField = input("", ...ngDevMode ? [{ debugName: "progressField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowKey = input("id", ...ngDevMode ? [{ debugName: "rowKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dayWidth = input(36, ...ngDevMode ? [{ debugName: "dayWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelWidth = input(240, ...ngDevMode ? [{ debugName: "labelWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelHeader = input("", ...ngDevMode ? [{ debugName: "labelHeader" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dateHeader = input("", ...ngDevMode ? [{ debugName: "dateHeader" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelTemplate = input(null, ...ngDevMode ? [{ debugName: "labelTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.barTone = input(null, ...ngDevMode ? [{ debugName: "barTone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKeys = model([], ...ngDevMode ? [{ debugName: "selectedKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.barClick = output();
    this.range = computed(() => {
      const ds = [];
      for (const r of this.data()) {
        const s = toDate(r[this.startField()]), e = toDate(r[this.endField()]);
        if (s)
          ds.push(s);
        if (e)
          ds.push(e);
      }
      if (!ds.length)
        return null;
      let min = ds[0], max = ds[0];
      for (const d of ds) {
        if (d < min)
          min = d;
        if (d > max)
          max = d;
      }
      const start = floorDay(new Date(min.getTime() - DAY));
      const end = floorDay(new Date(max.getTime() + DAY));
      return { start, days: daysBetween(start, end) + 1 };
    }, ...ngDevMode ? [{ debugName: "range" }] : (
      /* istanbul ignore next */
      []
    ));
    this.days = computed(() => {
      const r = this.range();
      if (!r)
        return [];
      const now = /* @__PURE__ */ new Date();
      const out = [];
      for (let i = 0; i < r.days; i++) {
        const d = new Date(r.start.getTime() + i * DAY);
        const wd = d.getDay();
        out.push({ t: d.getTime(), day: d.getDate(), weekend: wd === 0 || wd === 6, today: sameDay(d, now) });
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.months = computed(() => {
      const r = this.range();
      if (!r)
        return [];
      const out = [];
      for (let i = 0; i < r.days; i++) {
        const d = new Date(r.start.getTime() + i * DAY);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        const last = out[out.length - 1];
        if (last && last.key === key)
          last.count++;
        else
          out.push({ key, label: `Th\xE1ng ${d.getMonth() + 1}, ${d.getFullYear()}`, count: 1 });
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "months" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bars = computed(() => {
      const r = this.range();
      if (!r)
        return [];
      const w = this.dayWidth(), sf = this.startField(), ef = this.endField();
      const lf = this.labelField(), pf = this.progressField(), rk = this.rowKey();
      const tone = this.barTone();
      const now = /* @__PURE__ */ new Date();
      return this.data().map((row) => {
        const s = toDate(row[sf]), e = toDate(row[ef]);
        const left = s ? daysBetween(r.start, s) * w : 0;
        const dur = s && e ? daysBetween(s, e) + 1 : 0;
        const p = pf ? Number(row[pf]) || 0 : 0;
        const progress = Math.max(0, Math.min(100, p));
        return {
          id: row[rk],
          row,
          label: String(row[lf] ?? ""),
          left,
          width: dur * w,
          progress,
          tone: tone ? tone(row) : "",
          endText: e ? this.fmtDate(e) : "",
          /** Quá hạn = hết hạn trước hôm nay mà chưa xong. */
          late: !!e && e < floorDay(now) && progress < 100
        };
      });
    }, ...ngDevMode ? [{ debugName: "bars" }] : (
      /* istanbul ignore next */
      []
    ));
    this.todayLeft = computed(() => {
      const r = this.range();
      if (!r)
        return null;
      const off = daysBetween(r.start, /* @__PURE__ */ new Date());
      return off >= 0 && off < r.days ? off * this.dayWidth() + this.dayWidth() / 2 : null;
    }, ...ngDevMode ? [{ debugName: "todayLeft" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  isSel(row) {
    return this.selectedKeys().includes(row[this.rowKey()]);
  }
  toggleSel(row, checked) {
    const k = row[this.rowKey()];
    const cur = this.selectedKeys();
    this.selectedKeys.set(checked ? [...cur, k] : cur.filter((x) => x !== k));
  }
  /** dd/MM — cố định, không theo locale trình duyệt (tránh en-US đảo thành MM/dd). */
  fmtDate(d) {
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  static {
    this.\u0275fac = function HrmGantt_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmGantt)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmGantt, selectors: [["hrm-gantt"]], hostAttrs: [1, "hrm-gantt"], inputs: { data: [1, "data"], startField: [1, "startField"], endField: [1, "endField"], labelField: [1, "labelField"], progressField: [1, "progressField"], rowKey: [1, "rowKey"], dayWidth: [1, "dayWidth"], labelWidth: [1, "labelWidth"], labelHeader: [1, "labelHeader"], dateHeader: [1, "dateHeader"], labelTemplate: [1, "labelTemplate"], barTone: [1, "barTone"], selectable: [1, "selectable"], selectedKeys: [1, "selectedKeys"] }, outputs: { selectedKeys: "selectedKeysChange", barClick: "barClick" }, decls: 22, vars: 9, consts: [[1, "gt"], [1, "gt-in"], [1, "gt-labels"], [1, "gt-lh"], [1, "gt-lh-t"], [1, "gt-lh-d"], [1, "gt-lrow", 3, "is-sel"], [1, "gt-track"], [1, "gt-head"], [1, "gt-months"], [1, "gt-month", 3, "width"], [1, "gt-days"], [1, "gt-day", 3, "is-weekend", "is-today", "width"], [1, "gt-body"], [1, "gt-today", 3, "left"], [1, "gt-row"], [1, "gt-lrow", 3, "click"], [1, "gt-check"], [1, "gt-lrow-main"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gt-lrow-t"], [1, "gt-lrow-d"], [1, "gt-check", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "gt-month"], [1, "gt-day"], [1, "gt-today"], [1, "gt-bar", 3, "click"], [1, "gt-fill"], [1, "gt-bar-p"], [1, "gt-bar-l"]], template: function HrmGantt_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(8, HrmGantt_For_9_Template, 7, 8, "div", 6, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275repeaterCreate(13, HrmGantt_For_14_Template, 2, 3, "div", 10, _forTrack12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11);
        \u0275\u0275repeaterCreate(16, HrmGantt_For_17_Template, 2, 7, "div", 12, _forTrack2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 13);
        \u0275\u0275conditionalCreate(19, HrmGantt_Conditional_19_Template, 1, 2, "div", 14);
        \u0275\u0275repeaterCreate(20, HrmGantt_For_21_Template, 2, 1, "div", 15, _forTrack02);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("--gt-dw", ctx.dayWidth() + "px");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.labelWidth(), "px");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.labelHeader());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dateHeader());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bars());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.days().length * ctx.dayWidth(), "px");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.months());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.todayLeft() !== null ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bars());
      }
    }, dependencies: [NgTemplateOutlet], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.gt[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n}\n.gt-in[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n}\n.gt-labels[_ngcontent-%COMP%] {\n  flex: none;\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n}\n.gt-lh[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 12px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-sub);\n}\n.gt-lrow[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 12px;\n  border-bottom: 1px solid var(--border-soft);\n  cursor: pointer;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-lrow[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.gt-lrow.is-sel[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n}\n.gt-check[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: none;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.gt-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.gt-lrow-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.gt-lrow-t[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.gt-lrow-d[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.gt-lrow-d.is-late[_ngcontent-%COMP%] {\n  color: var(--error-base);\n  font-weight: 600;\n}\n.gt-track[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n}\n.gt-head[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n}\n.gt-months[_ngcontent-%COMP%] {\n  display: flex;\n  height: 28px;\n}\n.gt-month[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-strong);\n  border-right: 1px solid var(--border-sub);\n  white-space: nowrap;\n  overflow: hidden;\n}\n.gt-days[_ngcontent-%COMP%] {\n  display: flex;\n  height: 28px;\n}\n.gt-day[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  border-right: 1px solid var(--border-soft);\n  font-variant-numeric: tabular-nums;\n}\n.gt-day.is-weekend[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  background: var(--bg-surface-muted, var(--bg-surface-subtle));\n}\n.gt-day.is-today[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  font-weight: 700;\n}\n.gt-body[_ngcontent-%COMP%] {\n  position: relative;\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      var(--border-soft) 0 1px,\n      transparent 1px var(--gt-dw, 36px));\n}\n.gt-row[_ngcontent-%COMP%] {\n  height: 40px;\n  border-bottom: 1px solid var(--border-soft);\n  position: relative;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-row[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--bg-surface-subtle) 70%, transparent);\n}\n.gt-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  height: 24px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  border: 1px solid var(--primary-border);\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-bar[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-regular-sm);\n  border-color: var(--primary-base);\n}\n.gt-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  background: var(--primary-base);\n  opacity: .9;\n}\n.gt-bar-p[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  color: var(--static-white, #fff);\n  padding-left: 8px;\n}\n.gt-bar-l[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  pointer-events: none;\n}\n.gt-bar[data-tone=success][_ngcontent-%COMP%] {\n  border-color: var(--success-base);\n}\n.gt-bar[data-tone=success][_ngcontent-%COMP%]   .gt-fill[_ngcontent-%COMP%] {\n  background: var(--success-base);\n}\n.gt-bar[data-tone=info][_ngcontent-%COMP%] {\n  border-color: var(--info-base);\n}\n.gt-bar[data-tone=info][_ngcontent-%COMP%]   .gt-fill[_ngcontent-%COMP%] {\n  background: var(--info-base);\n}\n.gt-bar[data-tone=warning][_ngcontent-%COMP%] {\n  border-color: var(--warning-base);\n}\n.gt-bar[data-tone=warning][_ngcontent-%COMP%]   .gt-fill[_ngcontent-%COMP%] {\n  background: var(--warning-base);\n}\n.gt-bar[data-tone=error][_ngcontent-%COMP%] {\n  border-color: var(--error-base);\n}\n.gt-bar[data-tone=error][_ngcontent-%COMP%]   .gt-fill[_ngcontent-%COMP%] {\n  background: var(--error-base);\n}\n.gt-bar[data-tone=neutral][_ngcontent-%COMP%] {\n  border-color: var(--border-sub);\n}\n.gt-bar[data-tone=neutral][_ngcontent-%COMP%]   .gt-fill[_ngcontent-%COMP%] {\n  background: var(--neutral-400);\n}\n.gt-today[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--error-base);\n  z-index: 2;\n}\n/*# sourceMappingURL=hrm-gantt.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmGantt, [{
    type: Component,
    args: [{ selector: "hrm-gantt", imports: [NgTemplateOutlet], template: `
    <div class="gt" [style.--gt-dw]="dayWidth() + 'px'">
      <div class="gt-in">
        <!-- C\u1ED9t nh\xE3n tr\xE1i (ghim tr\xE1i) -->
        <div class="gt-labels" [style.width.px]="labelWidth()">
          <div class="gt-lh">
            <span class="gt-lh-t">{{ labelHeader() }}</span>
            <span class="gt-lh-d">{{ dateHeader() }}</span>
          </div>
          @for (b of bars(); track b.id) {
            <div class="gt-lrow" [class.is-sel]="isSel(b.row)" (click)="barClick.emit(b.row)" [attr.title]="b.label">
              @if (selectable()) {
                <label class="gt-check" (click)="$event.stopPropagation()">
                  <input type="checkbox" [checked]="isSel(b.row)"
                    (change)="toggleSel(b.row, $any($event.target).checked)" />
                </label>
              }
              <span class="gt-lrow-main">
                @if (labelTemplate()) {
                  <ng-container [ngTemplateOutlet]="labelTemplate()!" [ngTemplateOutletContext]="{ $implicit: b.row }" />
                } @else {
                  <span class="gt-lrow-t">{{ b.label }}</span>
                }
              </span>
              <span class="gt-lrow-d" [class.is-late]="b.late">{{ b.endText }}</span>
            </div>
          }
        </div>

        <!-- Timeline -->
        <div class="gt-track" [style.width.px]="days().length * dayWidth()">
          <!-- Header: d\u1EA3i th\xE1ng + d\u1EA3i ng\xE0y (ghim tr\xEAn) -->
          <div class="gt-head">
            <div class="gt-months">
              @for (m of months(); track m.key) {
                <div class="gt-month" [style.width.px]="m.count * dayWidth()">{{ m.label }}</div>
              }
            </div>
            <div class="gt-days">
              @for (d of days(); track d.t) {
                <div class="gt-day" [class.is-weekend]="d.weekend" [class.is-today]="d.today"
                  [style.width.px]="dayWidth()">{{ d.day }}</div>
              }
            </div>
          </div>

          <!-- Th\xE2n: gridline ng\xE0y + thanh -->
          <div class="gt-body">
            @if (todayLeft() !== null) { <div class="gt-today" [style.left.px]="todayLeft()"></div> }
            @for (b of bars(); track b.id) {
              <div class="gt-row">
                @if (b.width > 0) {
                  <div class="gt-bar" [style.left.px]="b.left" [style.width.px]="b.width"
                    [attr.data-tone]="b.tone || null"
                    (click)="barClick.emit(b.row)" [attr.title]="b.label + ' \xB7 ' + b.progress + '%'">
                    <div class="gt-fill" [style.width.%]="b.progress"></div>
                    @if (b.progress > 0) { <span class="gt-bar-p">{{ b.progress }}%</span> }
                  </div>
                  <!-- Nh\xE3n task c\u1EA1nh thanh (nh\u01B0 ClickUp) -->
                  <span class="gt-bar-l" [style.left.px]="b.left + b.width + 8">{{ b.label }}</span>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `, host: { class: "hrm-gantt" }, styles: ["/* angular:styles/component:css;f567fa5129e735bb174bd19a3bb406b40689bcb223fd33bbac43f3c45914eae2;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-gantt.ts */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.gt {\n  height: 100%;\n  overflow: auto;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n}\n.gt-in {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n}\n.gt-labels {\n  flex: none;\n  position: sticky;\n  left: 0;\n  z-index: 3;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n}\n.gt-lh {\n  position: sticky;\n  top: 0;\n  z-index: 4;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 12px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-sub);\n}\n.gt-lrow {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 12px;\n  border-bottom: 1px solid var(--border-soft);\n  cursor: pointer;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-lrow:hover {\n  background: var(--bg-surface-subtle);\n}\n.gt-lrow.is-sel {\n  background: var(--primary-bg-subtle);\n}\n.gt-check {\n  display: grid;\n  place-items: center;\n  flex: none;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.gt-check input {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.gt-lrow-main {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n.gt-lrow-t {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.gt-lrow-d {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.gt-lrow-d.is-late {\n  color: var(--error-base);\n  font-weight: 600;\n}\n.gt-track {\n  position: relative;\n  flex: none;\n}\n.gt-head {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n}\n.gt-months {\n  display: flex;\n  height: 28px;\n}\n.gt-month {\n  flex: none;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-strong);\n  border-right: 1px solid var(--border-sub);\n  white-space: nowrap;\n  overflow: hidden;\n}\n.gt-days {\n  display: flex;\n  height: 28px;\n}\n.gt-day {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  border-right: 1px solid var(--border-soft);\n  font-variant-numeric: tabular-nums;\n}\n.gt-day.is-weekend {\n  color: var(--text-soft);\n  background: var(--bg-surface-muted, var(--bg-surface-subtle));\n}\n.gt-day.is-today {\n  color: var(--primary-base);\n  font-weight: 700;\n}\n.gt-body {\n  position: relative;\n  background-image:\n    repeating-linear-gradient(\n      to right,\n      var(--border-soft) 0 1px,\n      transparent 1px var(--gt-dw, 36px));\n}\n.gt-row {\n  height: 40px;\n  border-bottom: 1px solid var(--border-soft);\n  position: relative;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-row:hover {\n  background: color-mix(in srgb, var(--bg-surface-subtle) 70%, transparent);\n}\n.gt-bar {\n  position: absolute;\n  top: 8px;\n  height: 24px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  border: 1px solid var(--primary-border);\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.gt-bar:hover {\n  box-shadow: var(--shadow-regular-sm);\n  border-color: var(--primary-base);\n}\n.gt-fill {\n  position: absolute;\n  inset: 0 auto 0 0;\n  background: var(--primary-base);\n  opacity: .9;\n}\n.gt-bar-p {\n  position: relative;\n  z-index: 1;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  color: var(--static-white, #fff);\n  padding-left: 8px;\n}\n.gt-bar-l {\n  position: absolute;\n  top: 8px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  pointer-events: none;\n}\n.gt-bar[data-tone=success] {\n  border-color: var(--success-base);\n}\n.gt-bar[data-tone=success] .gt-fill {\n  background: var(--success-base);\n}\n.gt-bar[data-tone=info] {\n  border-color: var(--info-base);\n}\n.gt-bar[data-tone=info] .gt-fill {\n  background: var(--info-base);\n}\n.gt-bar[data-tone=warning] {\n  border-color: var(--warning-base);\n}\n.gt-bar[data-tone=warning] .gt-fill {\n  background: var(--warning-base);\n}\n.gt-bar[data-tone=error] {\n  border-color: var(--error-base);\n}\n.gt-bar[data-tone=error] .gt-fill {\n  background: var(--error-base);\n}\n.gt-bar[data-tone=neutral] {\n  border-color: var(--border-sub);\n}\n.gt-bar[data-tone=neutral] .gt-fill {\n  background: var(--neutral-400);\n}\n.gt-today {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: var(--error-base);\n  z-index: 2;\n}\n/*# sourceMappingURL=hrm-gantt.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], startField: [{ type: Input, args: [{ isSignal: true, alias: "startField", required: false }] }], endField: [{ type: Input, args: [{ isSignal: true, alias: "endField", required: false }] }], labelField: [{ type: Input, args: [{ isSignal: true, alias: "labelField", required: false }] }], progressField: [{ type: Input, args: [{ isSignal: true, alias: "progressField", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], dayWidth: [{ type: Input, args: [{ isSignal: true, alias: "dayWidth", required: false }] }], labelWidth: [{ type: Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], labelHeader: [{ type: Input, args: [{ isSignal: true, alias: "labelHeader", required: false }] }], dateHeader: [{ type: Input, args: [{ isSignal: true, alias: "dateHeader", required: false }] }], labelTemplate: [{ type: Input, args: [{ isSignal: true, alias: "labelTemplate", required: false }] }], barTone: [{ type: Input, args: [{ isSignal: true, alias: "barTone", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], barClick: [{ type: Output, args: ["barClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmGantt, { className: "HrmGantt", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-gantt.ts", lineNumber: 192 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts
var _c03 = [[["", "dvActions", ""]]];
var _c1 = ["[dvActions]"];
var _c2 = (a0) => ({ $implicit: a0 });
var _forTrack03 = ($index, $item) => $item.mode;
function _forTrack13($index, $item) {
  return this.rowId($item);
}
function HrmDataView_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function HrmDataView_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function HrmDataView_Conditional_4_For_2_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.mode.set(t_r2.mode));
    });
    \u0275\u0275element(1, "tabler-icon", 10);
    \u0275\u0275conditionalCreate(2, HrmDataView_Conditional_4_For_2_Conditional_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-on", ctx_r2.mode() === t_r2.mode);
    \u0275\u0275attribute("aria-selected", ctx_r2.mode() === t_r2.mode)("aria-label", t_r2.label || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", t_r2.icon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r2.label ? 2 : -1);
  }
}
function HrmDataView_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, HrmDataView_Conditional_4_For_2_Template, 3, 7, "button", 8, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.tabs());
  }
}
function HrmDataView_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-grid", 12);
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_5_Template_hrm_grid_selectedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedKeys.set($event));
    })("rowClick", function HrmDataView_Case_5_Template_hrm_grid_rowClick_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecord.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("columns", ctx_r2.columns())("data", ctx_r2.data())("rowKey", ctx_r2.rowKey())("minWidth", ctx_r2.tableMinWidth())("size", ctx_r2.size())("selectable", ctx_r2.selectable())("showPagination", false)("selectedKeys", ctx_r2.selectedKeys());
  }
}
function HrmDataView_Case_6_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 18);
    \u0275\u0275listener("click", function HrmDataView_Case_6_For_2_Conditional_1_Template_label_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "input", 19);
    \u0275\u0275listener("change", function HrmDataView_Case_6_For_2_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSel(row_r6, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isSel(row_r6));
  }
}
function HrmDataView_Case_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 17);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.cardTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, row_r6));
  }
}
function HrmDataView_Case_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function HrmDataView_Case_6_For_2_Template_button_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openRecord.emit(row_r6));
    });
    \u0275\u0275conditionalCreate(1, HrmDataView_Case_6_For_2_Conditional_1_Template, 2, 1, "label", 16);
    \u0275\u0275conditionalCreate(2, HrmDataView_Case_6_For_2_Conditional_2_Template, 1, 4, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-sel", ctx_r2.isSel(row_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.cardTemplate() ? 2 : -1);
  }
}
function HrmDataView_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, HrmDataView_Case_6_For_2_Template, 3, 4, "button", 14, _forTrack13, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--dv-min", ctx_r2.cardMin(), "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data());
  }
}
function HrmDataView_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-board", 20);
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_7_Template_hrm_board_selectedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedKeys.set($event));
    })("cardClick", function HrmDataView_Case_7_Template_hrm_board_cardClick_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecord.emit($event));
    })("groupChange", function HrmDataView_Case_7_Template_hrm_board_groupChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.groupChange.emit($event));
    })("addCard", function HrmDataView_Case_7_Template_hrm_board_addCard_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.boardAdd.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.data())("groupBy", ctx_r2.groupBy())("groups", ctx_r2.boardGroups())("rowKey", ctx_r2.rowKey())("cardTemplate", ctx_r2.boardCard())("addLabel", ctx_r2.boardAddLabel())("selectable", ctx_r2.selectable())("selectedKeys", ctx_r2.selectedKeys());
  }
}
function HrmDataView_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-gantt", 21);
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_8_Template_hrm_gantt_selectedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedKeys.set($event));
    })("barClick", function HrmDataView_Case_8_Template_hrm_gantt_barClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecord.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r2.data())("startField", ctx_r2.startField())("endField", ctx_r2.endField())("labelField", ctx_r2.ganttLabelField())("progressField", ctx_r2.progressField())("rowKey", ctx_r2.rowKey())("labelHeader", ctx_r2.ganttHeader())("dateHeader", ctx_r2.ganttDateHeader())("labelTemplate", ctx_r2.ganttLabelTemplate())("barTone", ctx_r2.ganttBarTone())("selectable", ctx_r2.selectable())("selectedKeys", ctx_r2.selectedKeys());
  }
}
var HrmDataView = class _HrmDataView {
  constructor() {
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowKey = input("id", ...ngDevMode ? [{ debugName: "rowKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = model("table", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modes = input(["table", "card"], ...ngDevMode ? [{ debugName: "modes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardTemplate = input(null, ...ngDevMode ? [{ debugName: "cardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardCardTemplate = input(null, ...ngDevMode ? [{ debugName: "boardCardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardCard = computed(() => this.boardCardTemplate() ?? this.cardTemplate(), ...ngDevMode ? [{ debugName: "boardCard" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardMin = input(260, ...ngDevMode ? [{ debugName: "cardMin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableMinWidth = input("", ...ngDevMode ? [{ debugName: "tableMinWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("small", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKeys = model([], ...ngDevMode ? [{ debugName: "selectedKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupBy = input("status", ...ngDevMode ? [{ debugName: "groupBy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardGroups = input([], ...ngDevMode ? [{ debugName: "boardGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.startField = input("start", ...ngDevMode ? [{ debugName: "startField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.endField = input("end", ...ngDevMode ? [{ debugName: "endField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.progressField = input("", ...ngDevMode ? [{ debugName: "progressField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttLabelField = input("name", ...ngDevMode ? [{ debugName: "ganttLabelField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttHeader = input("", ...ngDevMode ? [{ debugName: "ganttHeader" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttDateHeader = input("", ...ngDevMode ? [{ debugName: "ganttDateHeader" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttLabelTemplate = input(null, ...ngDevMode ? [{ debugName: "ganttLabelTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttBarTone = input(null, ...ngDevMode ? [{ debugName: "ganttBarTone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableLabel = input("", ...ngDevMode ? [{ debugName: "tableLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardLabel = input("", ...ngDevMode ? [{ debugName: "cardLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kanbanLabel = input("", ...ngDevMode ? [{ debugName: "kanbanLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ganttLabel = input("", ...ngDevMode ? [{ debugName: "ganttLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openRecord = output();
    this.boardAddLabel = input("", ...ngDevMode ? [{ debugName: "boardAddLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardAdd = output();
    this.groupChange = output();
    this.icons = {
      table: Table,
      card: LayoutGrid,
      kanban: LayoutKanban,
      gantt: ChartBar
    };
    this.tabs = computed(() => {
      const lbl = {
        table: this.tableLabel(),
        card: this.cardLabel(),
        kanban: this.kanbanLabel(),
        gantt: this.ganttLabel()
      };
      return this.modes().map((m) => ({ mode: m, icon: this.icons[m], label: lbl[m] }));
    }, ...ngDevMode ? [{ debugName: "tabs" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  rowId(row) {
    return row[this.rowKey()];
  }
  isSel(row) {
    return this.selectedKeys().includes(this.rowId(row));
  }
  toggleSel(row, checked) {
    const k = this.rowId(row);
    const cur = this.selectedKeys();
    this.selectedKeys.set(checked ? [...cur, k] : cur.filter((x) => x !== k));
  }
  static {
    this.\u0275fac = function HrmDataView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDataView)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDataView, selectors: [["hrm-data-view"]], hostAttrs: [1, "hrm-data-view"], inputs: { columns: [1, "columns"], data: [1, "data"], rowKey: [1, "rowKey"], mode: [1, "mode"], modes: [1, "modes"], cardTemplate: [1, "cardTemplate"], boardCardTemplate: [1, "boardCardTemplate"], cardMin: [1, "cardMin"], tableMinWidth: [1, "tableMinWidth"], size: [1, "size"], selectable: [1, "selectable"], selectedKeys: [1, "selectedKeys"], groupBy: [1, "groupBy"], boardGroups: [1, "boardGroups"], startField: [1, "startField"], endField: [1, "endField"], progressField: [1, "progressField"], ganttLabelField: [1, "ganttLabelField"], ganttHeader: [1, "ganttHeader"], ganttDateHeader: [1, "ganttDateHeader"], ganttLabelTemplate: [1, "ganttLabelTemplate"], ganttBarTone: [1, "ganttBarTone"], tableLabel: [1, "tableLabel"], cardLabel: [1, "cardLabel"], kanbanLabel: [1, "kanbanLabel"], ganttLabel: [1, "ganttLabel"], boardAddLabel: [1, "boardAddLabel"] }, outputs: { mode: "modeChange", selectedKeys: "selectedKeysChange", openRecord: "openRecord", boardAdd: "boardAdd", groupChange: "groupChange" }, ngContentSelectors: _c1, decls: 9, vars: 2, consts: [[1, "dv-bar"], [1, "dv-actions"], [1, "dv-spacer"], ["role", "tablist", 1, "dv-tabs"], [3, "columns", "data", "rowKey", "minWidth", "size", "selectable", "showPagination", "selectedKeys"], [1, "dv-cards", 3, "--dv-min"], [3, "data", "groupBy", "groups", "rowKey", "cardTemplate", "addLabel", "selectable", "selectedKeys"], [3, "data", "startField", "endField", "labelField", "progressField", "rowKey", "labelHeader", "dateHeader", "labelTemplate", "barTone", "selectable", "selectedKeys"], ["type", "button", "role", "tab", 1, "dv-tab", 3, "is-on"], ["type", "button", "role", "tab", 1, "dv-tab", 3, "click"], [3, "icon", "size"], [1, "dv-tab-t"], [3, "selectedKeysChange", "rowClick", "columns", "data", "rowKey", "minWidth", "size", "selectable", "showPagination", "selectedKeys"], [1, "dv-cards"], ["type", "button", 1, "dv-card", 3, "is-sel"], ["type", "button", 1, "dv-card", 3, "click"], [1, "dv-check"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dv-check", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [3, "selectedKeysChange", "cardClick", "groupChange", "addCard", "data", "groupBy", "groups", "rowKey", "cardTemplate", "addLabel", "selectable", "selectedKeys"], [3, "selectedKeysChange", "barClick", "data", "startField", "endField", "labelField", "progressField", "rowKey", "labelHeader", "dateHeader", "labelTemplate", "barTone", "selectable", "selectedKeys"]], template: function HrmDataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 2);
        \u0275\u0275conditionalCreate(4, HrmDataView_Conditional_4_Template, 3, 0, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmDataView_Case_5_Template, 1, 8, "hrm-grid", 4)(6, HrmDataView_Case_6_Template, 3, 2, "div", 5)(7, HrmDataView_Case_7_Template, 1, 8, "hrm-board", 6)(8, HrmDataView_Case_8_Template, 1, 12, "hrm-gantt", 7);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.tabs().length > 1 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.mode()) === "table" ? 5 : tmp_1_0 === "card" ? 6 : tmp_1_0 === "kanban" ? 7 : tmp_1_0 === "gantt" ? 8 : -1);
      }
    }, dependencies: [NgTemplateOutlet, TablerIconComponent, HrmGrid, HrmBoard, HrmGantt], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.dv-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.dv-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.dv-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dv-tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  flex: none;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.dv-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n.dv-tab.is-on[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.dv-tab-t[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.dv-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(var(--dv-min, 260px), 1fr));\n  gap: 12px;\n}\n.dv-card[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font: inherit;\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-regular-sm);\n}\n.dv-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring);\n  outline-offset: 1px;\n}\n.dv-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dv-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.dv-card[_ngcontent-%COMP%]:hover   .dv-check[_ngcontent-%COMP%], \n.dv-card.is-sel[_ngcontent-%COMP%]   .dv-check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.dv-card.is-sel[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-data-view.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDataView, [{
    type: Component,
    args: [{ selector: "hrm-data-view", imports: [NgTemplateOutlet, TablerIconComponent, HrmGrid, HrmBoard, HrmGantt], template: `
    <div class="dv-bar">
      <div class="dv-actions"><ng-content select="[dvActions]" /></div>
      <div class="dv-spacer"></div>
      @if (tabs().length > 1) {
        <div class="dv-tabs" role="tablist">
          @for (t of tabs(); track t.mode) {
            <button type="button" class="dv-tab" [class.is-on]="mode() === t.mode"
              role="tab" [attr.aria-selected]="mode() === t.mode" [attr.aria-label]="t.label || null"
              (click)="mode.set(t.mode)">
              <tabler-icon [icon]="$any(t.icon)" [size]="16" />
              @if (t.label) { <span class="dv-tab-t">{{ t.label }}</span> }
            </button>
          }
        </div>
      }
    </div>

    @switch (mode()) {
      @case ('table') {
        <hrm-grid [columns]="columns()" [data]="data()" [rowKey]="rowKey()" [minWidth]="tableMinWidth()"
          [size]="size()" [selectable]="selectable()" [showPagination]="false"
          [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (rowClick)="openRecord.emit($event)" />
      }
      @case ('card') {
        <div class="dv-cards" [style.--dv-min.px]="cardMin()">
          @for (row of data(); track rowId(row)) {
            <button type="button" class="dv-card" [class.is-sel]="isSel(row)" (click)="openRecord.emit(row)">
              @if (selectable()) {
                <label class="dv-check" (click)="$event.stopPropagation()">
                  <input type="checkbox" [checked]="isSel(row)"
                    (change)="toggleSel(row, $any($event.target).checked)" />
                </label>
              }
              @if (cardTemplate()) {
                <ng-container [ngTemplateOutlet]="cardTemplate()!" [ngTemplateOutletContext]="{ $implicit: row }" />
              }
            </button>
          }
        </div>
      }
      @case ('kanban') {
        <hrm-board [data]="data()" [groupBy]="groupBy()" [groups]="boardGroups()" [rowKey]="rowKey()"
          [cardTemplate]="boardCard()" [addLabel]="boardAddLabel()"
          [selectable]="selectable()" [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (cardClick)="openRecord.emit($event)" (groupChange)="groupChange.emit($event)"
          (addCard)="boardAdd.emit($event)" />
      }
      @case ('gantt') {
        <hrm-gantt [data]="data()" [startField]="startField()" [endField]="endField()"
          [labelField]="ganttLabelField()" [progressField]="progressField()" [rowKey]="rowKey()"
          [labelHeader]="ganttHeader()" [dateHeader]="ganttDateHeader()"
          [labelTemplate]="ganttLabelTemplate()" [barTone]="ganttBarTone()"
          [selectable]="selectable()" [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (barClick)="openRecord.emit($event)" />
      }
    }
  `, host: { class: "hrm-data-view" }, styles: ["/* angular:styles/component:css;1fef4862e9606e76e552d03b18502b89fc4e175e377d235ce9d65a2bf39da72e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.dv-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.dv-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.dv-spacer {\n  flex: 1;\n}\n.dv-tabs {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  flex: none;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.dv-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-tab:hover {\n  color: var(--text-strong);\n}\n.dv-tab.is-on {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.dv-tab-t {\n  white-space: nowrap;\n}\n.dv-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(var(--dv-min, 260px), 1fr));\n  gap: 12px;\n}\n.dv-card {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font: inherit;\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-card:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-regular-sm);\n}\n.dv-card:focus-visible {\n  outline: 2px solid var(--primary-focus-ring);\n  outline-offset: 1px;\n}\n.dv-card {\n  position: relative;\n}\n.dv-check {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-check input {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.dv-card:hover .dv-check,\n.dv-card.is-sel .dv-check {\n  opacity: 1;\n}\n.dv-card.is-sel {\n  border-color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-data-view.css.map */\n"] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }, { type: Output, args: ["modeChange"] }], modes: [{ type: Input, args: [{ isSignal: true, alias: "modes", required: false }] }], cardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "cardTemplate", required: false }] }], boardCardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "boardCardTemplate", required: false }] }], cardMin: [{ type: Input, args: [{ isSignal: true, alias: "cardMin", required: false }] }], tableMinWidth: [{ type: Input, args: [{ isSignal: true, alias: "tableMinWidth", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], groupBy: [{ type: Input, args: [{ isSignal: true, alias: "groupBy", required: false }] }], boardGroups: [{ type: Input, args: [{ isSignal: true, alias: "boardGroups", required: false }] }], startField: [{ type: Input, args: [{ isSignal: true, alias: "startField", required: false }] }], endField: [{ type: Input, args: [{ isSignal: true, alias: "endField", required: false }] }], progressField: [{ type: Input, args: [{ isSignal: true, alias: "progressField", required: false }] }], ganttLabelField: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelField", required: false }] }], ganttHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttHeader", required: false }] }], ganttDateHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttDateHeader", required: false }] }], ganttLabelTemplate: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelTemplate", required: false }] }], ganttBarTone: [{ type: Input, args: [{ isSignal: true, alias: "ganttBarTone", required: false }] }], tableLabel: [{ type: Input, args: [{ isSignal: true, alias: "tableLabel", required: false }] }], cardLabel: [{ type: Input, args: [{ isSignal: true, alias: "cardLabel", required: false }] }], kanbanLabel: [{ type: Input, args: [{ isSignal: true, alias: "kanbanLabel", required: false }] }], ganttLabel: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabel", required: false }] }], openRecord: [{ type: Output, args: ["openRecord"] }], boardAddLabel: [{ type: Input, args: [{ isSignal: true, alias: "boardAddLabel", required: false }] }], boardAdd: [{ type: Output, args: ["boardAdd"] }], groupChange: [{ type: Output, args: ["groupChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDataView, { className: "HrmDataView", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts", lineNumber: 130 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-list-page.ts
var _c04 = [[["", "headerActions", ""]], [["", "filters", ""]], [["", "actions", ""]], "*", [["", "lpDetail", ""]], [["", "lpTabs", ""]], [["", "pagerInfo", ""]]];
var _c12 = ["[headerActions]", "[filters]", "[actions]", "*", "[lpDetail]", "[lpTabs]", "[pagerInfo]"];
function HrmListPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-breadcrumb", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r0.breadcrumb());
  }
}
function HrmListPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 5);
    \u0275\u0275elementEnd();
  }
}
function HrmListPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275projection(2, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-pagination", 11);
    \u0275\u0275listener("pageIndexChange", function HrmListPage_Conditional_14_Template_hrm_pagination_pageIndexChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pageIndex.set($event));
    })("pageSizeChange", function HrmListPage_Conditional_14_Template_hrm_pagination_pageSizeChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pageSize.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-pagination", 12);
    \u0275\u0275listener("pageIndexChange", function HrmListPage_Conditional_14_Template_hrm_pagination_pageIndexChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pageIndex.set($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("responsive", true)("pageIndex", ctx_r0.pageIndex())("total", ctx_r0.total())("pageSize", ctx_r0.pageSize())("showSizeChanger", ctx_r0.showSizeChanger());
    \u0275\u0275advance();
    \u0275\u0275property("simple", true)("pageIndex", ctx_r0.pageIndex())("total", ctx_r0.total())("pageSize", ctx_r0.pageSize());
  }
}
var HrmListPageTabs = class _HrmListPageTabs {
  static {
    this.\u0275fac = function HrmListPageTabs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmListPageTabs)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmListPageTabs, selectors: [["", "lpTabs", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmListPageTabs, [{
    type: Directive,
    args: [{ selector: "[lpTabs]" }]
  }], null, null);
})();
var HrmListPage = class _HrmListPage {
  constructor() {
    this.breadcrumb = input([], ...ngDevMode ? [{ debugName: "breadcrumb" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBack = input(false, ...ngDevMode ? [{ debugName: "showBack" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = input(0, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageIndex = model(1, ...ngDevMode ? [{ debugName: "pageIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = model(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSizeChanger = input(false, ...ngDevMode ? [{ debugName: "showSizeChanger" }] : (
      /* istanbul ignore next */
      []
    ));
    this.panel = input(true, ...ngDevMode ? [{ debugName: "panel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.back = output();
    this.tabs = contentChild(HrmListPageTabs, ...ngDevMode ? [{ debugName: "tabs" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmListPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmListPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmListPage, selectors: [["hrm-list-page"]], contentQueries: function HrmListPage_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.tabs, HrmListPageTabs, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-list-page"], inputs: { breadcrumb: [1, "breadcrumb"], title: [1, "title"], subtitle: [1, "subtitle"], showBack: [1, "showBack"], total: [1, "total"], pageIndex: [1, "pageIndex"], pageSize: [1, "pageSize"], showSizeChanger: [1, "showSizeChanger"], panel: [1, "panel"] }, outputs: { pageIndex: "pageIndexChange", pageSize: "pageSizeChange", back: "back" }, ngContentSelectors: _c12, decls: 16, vars: 8, consts: [[1, "lp"], [1, "lp-head"], [1, "lp-crumb", 3, "items"], [3, "back", "title", "subtitle", "showBack"], [1, "lp-tabs"], [1, "lp-split"], [1, "lp-panel"], [1, "lp-toolbar"], [1, "lp-body"], [1, "lp-pager"], [1, "lp-pager-info"], ["size", "small", 1, "lp-pg-full", 3, "pageIndexChange", "pageSizeChange", "responsive", "pageIndex", "total", "pageSize", "showSizeChanger"], ["size", "small", 1, "lp-pg-simple", 3, "pageIndexChange", "simple", "pageIndex", "total", "pageSize"]], template: function HrmListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c04);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, HrmListPage_Conditional_2_Template, 1, 1, "hrm-breadcrumb", 2);
        \u0275\u0275elementStart(3, "hrm-page-header", 3);
        \u0275\u0275listener("back", function HrmListPage_Template_hrm_page_header_back_3_listener() {
          return ctx.back.emit();
        });
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmListPage_Conditional_5_Template, 2, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "hrm-table-toolbar");
        \u0275\u0275projection(10, 1);
        \u0275\u0275projection(11, 2, ["ngProjectAs", "[tbActions]", 5, ["", "tbActions", ""]]);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275projection(13, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, HrmListPage_Conditional_14_Template, 5, 9, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(15, 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.breadcrumb().length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.title())("subtitle", ctx.subtitle())("showBack", ctx.showBack());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tabs() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("lp-panel--flat", !ctx.panel());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.total() > 0 ? 14 : -1);
      }
    }, dependencies: [HrmBreadcrumb, HrmPageHeader, HrmTableToolbar, HrmPagination], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  height: 100%;\n}\n.lp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100%;\n}\n.lp-crumb[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.lp[_ngcontent-%COMP%]     .ant-page-header {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.lp-split[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 16px;\n  margin: 16px;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n}\n.lp-panel[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1 1 auto;\n  min-width: 180px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  container-type: inline-size;\n}\n.lp-pg-simple[_ngcontent-%COMP%] {\n  display: none;\n}\n.lp-panel--flat[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  overflow: visible;\n}\n.lp-panel--flat[_ngcontent-%COMP%]   .lp-toolbar[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  margin-bottom: var(--space-3);\n}\n.lp-head[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 10px 16px;\n  flex: none;\n}\n.lp-tabs[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.lp-tabs[_ngcontent-%COMP%]     .ant-tabs-nav {\n  margin-bottom: 0;\n}\n.lp-toolbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-sub);\n}\n.lp-body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n}\n.lp-body[_ngcontent-%COMP%]     .ant-table {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.lp-pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-sub);\n  flex-wrap: nowrap;\n}\n.lp-pager-info[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lp-pager[_ngcontent-%COMP%]     .ant-pagination {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  flex: none;\n}\n.lp-pager[_ngcontent-%COMP%]     .ant-pagination li {\n  margin-inline-end: 2px;\n}\n.lp-pg-full[_ngcontent-%COMP%], \n.lp-pg-simple[_ngcontent-%COMP%] {\n  flex: none;\n}\n@container (max-width: 560px) {\n  .lp-pager-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lp-pg-full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lp-pg-simple[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .lp-pager[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding-inline: var(--space-2);\n  }\n}\n/*# sourceMappingURL=hrm-list-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmListPage, [{
    type: Component,
    args: [{ selector: "hrm-list-page", imports: [HrmBreadcrumb, HrmPageHeader, HrmTableToolbar, HrmPagination], template: `
    <div class="lp">
      <div class="lp-head">
        @if (breadcrumb().length) {
          <hrm-breadcrumb class="lp-crumb" [items]="breadcrumb()" />
        }

        <hrm-page-header
          [title]="title()"
          [subtitle]="subtitle()"
          [showBack]="showBack()"
          (back)="back.emit()">
          <ng-content select="[headerActions]" />
        </hrm-page-header>

        @if (tabs()) {
          <div class="lp-tabs"><ng-content select="[lpTabs]" /></div>
        }
      </div>

      <!-- H\xE0ng flex: section danh s\xE1ch (tr\xE1i) \xB7 section chi ti\u1EBFt master [lpDetail] (ph\u1EA3i) \u2014
           2 KH\u1ED0I RI\xCANG c\u1EA1nh nhau, toolbar/ph\xE2n trang thu\u1ED9c kh\u1ED1i danh s\xE1ch. -->
      <div class="lp-split">
      <div class="lp-panel" [class.lp-panel--flat]="!panel()">
        <div class="lp-toolbar">
          <hrm-table-toolbar>
            <ng-content select="[filters]" />
            <ng-content select="[actions]" ngProjectAs="[tbActions]" />
          </hrm-table-toolbar>
        </div>

        <div class="lp-body">
          <ng-content />
        </div>

        @if (total() > 0) {
          <div class="lp-pager">
            <div class="lp-pager-info"><ng-content select="[pagerInfo]" /></div>
            <!-- Pager \u0110\u1EA6Y \u0110\u1EE6 (s\u1ED1 trang) \u2014 panel r\u1ED9ng. -->
            <hrm-pagination class="lp-pg-full"
              size="small"
              [responsive]="true"
              [pageIndex]="pageIndex()"
              [total]="total()"
              [pageSize]="pageSize()"
              [showSizeChanger]="showSizeChanger()"
              (pageIndexChange)="pageIndex.set($event)"
              (pageSizeChange)="pageSize.set($event)" />
            <!-- Pager G\u1ECCN (\u2039 1/N \u203A) \u2014 panel h\u1EB9p: LU\xD4N 1 h\xE0ng, kh\xF4ng r\u1EDBt. Toggle b\u1EB1ng container query. -->
            <hrm-pagination class="lp-pg-simple"
              size="small"
              [simple]="true"
              [pageIndex]="pageIndex()"
              [total]="total()"
              [pageSize]="pageSize()"
              (pageIndexChange)="pageIndex.set($event)" />
          </div>
        }
      </div>

      <!-- Section chi ti\u1EBFt master \u2014 kh\u1ED1i RI\xCANG c\u1EA1nh section danh s\xE1ch (kh\xF4ng chung khung/ph\xE2n trang) -->
      <ng-content select="[lpDetail]" />
      </div>
    </div>
  `, host: { class: "hrm-list-page" }, styles: ["/* angular:styles/component:css;722c98b0fb7d282f27a6921258e3a4bef9024d6cf83ad9014d44dfbced547edd;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-list-page.ts */\n:host {\n  display: block;\n  min-width: 0;\n  height: 100%;\n}\n.lp {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: 100%;\n}\n.lp-crumb {\n  display: block;\n  margin-bottom: 2px;\n}\n.lp ::ng-deep .ant-page-header {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.lp-split {\n  display: flex;\n  align-items: stretch;\n  gap: 16px;\n  margin: 16px;\n  flex: 1 1 auto;\n  min-height: 0;\n  min-width: 0;\n}\n.lp-panel {\n  margin: 0;\n  flex: 1 1 auto;\n  min-width: 180px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  container-type: inline-size;\n}\n.lp-pg-simple {\n  display: none;\n}\n.lp-panel--flat {\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  overflow: visible;\n}\n.lp-panel--flat .lp-toolbar {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  margin-bottom: var(--space-3);\n}\n.lp-head {\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 10px 16px;\n  flex: none;\n}\n.lp-tabs {\n  margin-top: 0;\n}\n.lp-tabs ::ng-deep .ant-tabs-nav {\n  margin-bottom: 0;\n}\n.lp-toolbar {\n  border-bottom: 1px solid var(--border-sub);\n}\n.lp-body {\n  min-width: 0;\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n}\n.lp-body ::ng-deep .ant-table {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.lp-pager {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-sub);\n  flex-wrap: nowrap;\n}\n.lp-pager-info {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lp-pager ::ng-deep .ant-pagination {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  flex: none;\n}\n.lp-pager ::ng-deep .ant-pagination li {\n  margin-inline-end: 2px;\n}\n.lp-pg-full,\n.lp-pg-simple {\n  flex: none;\n}\n@container (max-width: 560px) {\n  .lp-pager-info {\n    display: none;\n  }\n  .lp-pg-full {\n    display: none;\n  }\n  .lp-pg-simple {\n    display: block;\n  }\n  .lp-pager {\n    justify-content: center;\n    padding-inline: var(--space-2);\n  }\n}\n/*# sourceMappingURL=hrm-list-page.css.map */\n"] }]
  }], null, { breadcrumb: [{ type: Input, args: [{ isSignal: true, alias: "breadcrumb", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], showBack: [{ type: Input, args: [{ isSignal: true, alias: "showBack", required: false }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }, { type: Output, args: ["pageIndexChange"] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }, { type: Output, args: ["pageSizeChange"] }], showSizeChanger: [{ type: Input, args: [{ isSignal: true, alias: "showSizeChanger", required: false }] }], panel: [{ type: Input, args: [{ isSignal: true, alias: "panel", required: false }] }], back: [{ type: Output, args: ["back"] }], tabs: [{ type: ContentChild, args: [forwardRef(() => HrmListPageTabs), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmListPage, { className: "HrmListPage", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-list-page.ts", lineNumber: 199 });
})();

export {
  HrmDataView,
  HrmListPageTabs,
  HrmListPage
};
//# sourceMappingURL=chunk-GEJ3KJQQ.js.map
