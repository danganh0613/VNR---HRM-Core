import {
  HrmDataToolbar,
  HrmTableToolbar
} from "./chunk-NSTKLO3O.js";
import {
  NzDrawerComponent,
  NzDrawerContentDirective,
  NzDrawerModule
} from "./chunk-VEP4KFOV.js";
import {
  HrmPageHeader
} from "./chunk-UNX4IGOQ.js";
import {
  HrmBreadcrumb
} from "./chunk-H3ARSMO3.js";
import {
  HrmPagination
} from "./chunk-NJREMSLK.js";
import {
  HrmGrid
} from "./chunk-IHUB5HQS.js";
import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-WLLYRHZ5.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "./chunk-KLLXE4WM.js";
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-LIWX2G7Z.js";
import {
  Router
} from "./chunk-LVO4IPRO.js";
import {
  AppWindow,
  ArrowDown,
  ArrowGuide,
  ArrowRight,
  ArrowUp,
  ArrowsDiagonal,
  ChartBar,
  Check,
  ChevronDown,
  ChevronRight,
  DotsVertical,
  ExternalLink,
  GripVertical,
  Layout,
  LayoutColumns,
  LayoutGrid,
  LayoutKanban,
  LayoutSidebarRight,
  Maximize,
  Plus,
  Table,
  TablerIconComponent,
  X
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  Output,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
  contentChild,
  effect,
  forwardRef,
  inject,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

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

// libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts
var _forTrack03 = ($index, $item) => $item.key;
function HrmRowGrouping_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icGuide)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.emptyText());
  }
}
function HrmRowGrouping_Conditional_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("icon", ctx_r0.icArrowRight)("size", 14);
  }
}
function HrmRowGrouping_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, HrmRowGrouping_Conditional_3_For_1_Conditional_0_Template, 1, 2, "tabler-icon", 12);
    \u0275\u0275elementStart(1, "div", 13)(2, "span", 14);
    \u0275\u0275element(3, "tabler-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_3_For_1_Template_button_click_6_listener() {
      const \u0275$index_14_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDir(\u0275$index_14_r3));
    });
    \u0275\u0275element(7, "tabler-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_3_For_1_Template_button_click_8_listener() {
      const \u0275$index_14_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLevel(\u0275$index_14_r3));
    });
    \u0275\u0275element(9, "tabler-icon", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lv_r4 = ctx.$implicit;
    const \u0275$index_14_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275$index_14_r3 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDragData", lv_r4.key);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.reorderLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icGrip)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lv_r4.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.dirLabel())("aria-pressed", lv_r4.dir === "asc");
    \u0275\u0275advance();
    \u0275\u0275property("icon", lv_r4.dir === "asc" ? ctx_r0.icUp : ctx_r0.icDown)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.removeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icX)("size", 14);
  }
}
function HrmRowGrouping_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmRowGrouping_Conditional_3_For_1_Template, 10, 13, null, null, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.chips());
  }
}
function HrmRowGrouping_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_11_For_2_Template_button_click_0_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLevel(c_r7.key));
    });
    \u0275\u0275element(1, "tabler-icon", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icPlus)("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.title);
  }
}
function HrmRowGrouping_Conditional_11_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.allUsedText());
  }
}
function HrmRowGrouping_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stop($event));
    });
    \u0275\u0275repeaterCreate(1, HrmRowGrouping_Conditional_11_For_2_Template, 4, 3, "button", 19, _forTrack03, false, HrmRowGrouping_Conditional_11_ForEmpty_3_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.availableColumns());
  }
}
function HrmRowGrouping_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_15_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.stop($event));
    });
    \u0275\u0275elementStart(1, "label", 22)(2, "input", 23);
    \u0275\u0275listener("change", function HrmRowGrouping_Conditional_15_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCount.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 22)(6, "input", 23);
    \u0275\u0275listener("change", function HrmRowGrouping_Conditional_15_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collapsedDefault.set($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 24);
    \u0275\u0275elementStart(10, "button", 25);
    \u0275\u0275listener("click", function HrmRowGrouping_Conditional_15_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearAll());
    });
    \u0275\u0275element(11, "tabler-icon", 6);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.showCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showCountLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.collapsedDefault());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.collapsedLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.levels().length);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icX)("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.clearAllLabel());
  }
}
var _c03 = (a0, a1) => ({ $implicit: a0, depth: a1 });
var _c1 = (a0) => ({ $implicit: a0 });
var _c2 = (a0) => ({ $implicit: a0, depth: 0 });
function HrmGroupedRows_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r2.count);
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const depth_r5 = \u0275\u0275nextContext(3).depth;
    \u0275\u0275nextContext();
    const nodeTpl_r6 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", nodeTpl_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c03, child_r4, depth_r5 + 1));
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_1_For_1_Template, 1, 5, "ng-container", 2, _forTrack03);
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(node_r2.children);
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const depth_r5 = \u0275\u0275nextContext(3).depth;
    \u0275\u0275styleProp("--gr-depth", depth_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c1, row_r7));
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const depth_r5 = \u0275\u0275nextContext(3).depth;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--gr-depth", depth_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fallbackRow(row_r7));
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Conditional_0_Template, 2, 6, "div", 10)(1, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Conditional_1_Template, 2, 3, "div", 11);
  }
  if (rf & 2) {
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_16_0 = ctx_r2.rowTemplate()) ? 0 : 1, tmp_16_0);
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_For_1_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(node_r2.rows);
  }
}
function HrmGroupedRows_ng_template_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_1_Template, 2, 0)(2, HrmGroupedRows_ng_template_0_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r2.children.length ? 1 : 2);
  }
}
function HrmGroupedRows_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function HrmGroupedRows_ng_template_0_Template_button_click_1_listener() {
      const node_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(node_r2.key));
    });
    \u0275\u0275element(2, "tabler-icon", 6);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, HrmGroupedRows_ng_template_0_Conditional_5_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrmGroupedRows_ng_template_0_Conditional_6_Template, 3, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const depth_r5 = ctx.depth;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("--gr-depth", depth_r5);
    \u0275\u0275attribute("aria-expanded", !ctx_r2.isCollapsed(node_r2.key));
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.isCollapsed(node_r2.key) ? ctx_r2.icRight : ctx_r2.icDown)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showCount() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isCollapsed(node_r2.key) ? 6 : -1);
  }
}
function HrmGroupedRows_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const node_r8 = ctx.$implicit;
    \u0275\u0275nextContext();
    const nodeTpl_r6 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", nodeTpl_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, node_r8));
  }
}
function HrmGroupedRows_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.emptyText());
  }
}
var HrmRowGrouping = class _HrmRowGrouping {
  constructor() {
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.levels = model([], ...ngDevMode ? [{ debugName: "levels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showCount = model(true, ...ngDevMode ? [{ debugName: "showCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedDefault = model(false, ...ngDevMode ? [{ debugName: "collapsedDefault" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dropListId = input("hrm-row-grouping-list", ...ngDevMode ? [{ debugName: "dropListId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("K\xE9o ti\xEAu \u0111\u1EC1 c\u1ED9t v\xE0o \u0111\xE2y \u0111\u1EC3 nh\xF3m d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm c\u1EA5p nh\xF3m", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderLabel = input("K\xE9o \u0111\u1ED5i th\u1EE9 t\u1EF1 l\u1ED3ng nh\xF3m", ...ngDevMode ? [{ debugName: "reorderLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dirLabel = input("\u0110\u1ED5i h\u01B0\u1EDBng s\u1EAFp x\u1EBFp nh\xF3m", ...ngDevMode ? [{ debugName: "dirLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.removeLabel = input("B\u1ECF c\u1EA5p nh\xF3m", ...ngDevMode ? [{ debugName: "removeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.optionsLabel = input("Tu\u1EF3 ch\u1ECDn nh\xF3m", ...ngDevMode ? [{ debugName: "optionsLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showCountLabel = input("Hi\u1EC3n th\u1ECB s\u1ED1 b\u1EA3n ghi", ...ngDevMode ? [{ debugName: "showCountLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedLabel = input("M\u1EB7c \u0111\u1ECBnh thu g\u1ECDn nh\xF3m", ...ngDevMode ? [{ debugName: "collapsedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearAllLabel = input("B\u1ECF t\u1EA5t c\u1EA3 nh\xF3m", ...ngDevMode ? [{ debugName: "clearAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allUsedText = input("\u0110\xE3 nh\xF3m theo m\u1ECDi c\u1ED9t", ...ngDevMode ? [{ debugName: "allUsedText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icGrip = GripVertical;
    this.icX = X;
    this.icUp = ArrowUp;
    this.icDown = ArrowDown;
    this.icArrowRight = ArrowRight;
    this.icChevronDown = ChevronDown;
    this.icPlus = Plus;
    this.icGuide = ArrowGuide;
    this.icDots = DotsVertical;
    this.addMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "addMenuOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "moreMenuOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.levelKeySet = computed(() => new Set(this.levels().map((l) => l.key)), ...ngDevMode ? [{ debugName: "levelKeySet" }] : (
      /* istanbul ignore next */
      []
    ));
    this.availableColumns = computed(() => this.columns().filter((c) => !this.levelKeySet().has(c.key)), ...ngDevMode ? [{ debugName: "availableColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canAdd = computed(() => this.availableColumns().length > 0, ...ngDevMode ? [{ debugName: "canAdd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.chips = computed(() => {
      const titleOf = new Map(this.columns().map((c) => [c.key, c.title]));
      return this.levels().map((l) => ({ key: l.key, dir: l.dir, title: titleOf.get(l.key) ?? l.key }));
    }, ...ngDevMode ? [{ debugName: "chips" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Thêm 1 cấp nhóm từ key cột (bỏ qua nếu đã nhóm). */
  addLevel(key) {
    if (this.levelKeySet().has(key))
      return;
    this.levels.update((arr) => [...arr, { key, dir: "asc" }]);
    this.addMenuOpen.set(false);
  }
  removeLevel(i) {
    this.levels.set(this.levels().filter((_, j) => j !== i));
  }
  /** Đảo hướng sắp xếp của 1 cấp (asc <-> desc). */
  toggleDir(i) {
    this.levels.update((arr) => arr.map((l, j) => j === i ? __spreadProps(__spreadValues({}, l), { dir: l.dir === "asc" ? "desc" : "asc" }) : l));
  }
  clearAll() {
    this.levels.set([]);
    this.moreMenuOpen.set(false);
  }
  /**
   * Xử lý drop: nội bộ = đổi thứ tự lồng (moveItemInArray). Từ danh sách khác (header bảng) = thêm cấp mới
   * theo key cột được thả (best-effort: đọc cdkDragData dạng string hoặc object có .key).
   */
  onDrop(e) {
    if (e.previousContainer === e.container) {
      const arr = [...this.levels()];
      moveItemInArray(arr, e.previousIndex, e.currentIndex);
      this.levels.set(arr);
      return;
    }
    const data = e.item.data;
    let key = null;
    if (typeof data === "string")
      key = data;
    else if (data && typeof data === "object" && "key" in data) {
      key = String(data["key"]);
    }
    if (key && this.columns().some((c) => c.key === key) && !this.levelKeySet().has(key)) {
      this.addLevel(key);
    }
  }
  /* --- điều khiển dropdown --- */
  toggleAddMenu(e) {
    e.stopPropagation();
    this.moreMenuOpen.set(false);
    this.addMenuOpen.update((v) => !v);
  }
  toggleMoreMenu(e) {
    e.stopPropagation();
    this.addMenuOpen.set(false);
    this.moreMenuOpen.update((v) => !v);
  }
  stop(e) {
    e.stopPropagation();
  }
  closeMenus() {
    this.addMenuOpen.set(false);
    this.moreMenuOpen.set(false);
  }
  static {
    this.\u0275fac = function HrmRowGrouping_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmRowGrouping)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRowGrouping, selectors: [["hrm-row-grouping"]], hostAttrs: [1, "hrm-row-grouping"], hostBindings: function HrmRowGrouping_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function HrmRowGrouping_click_HostBindingHandler() {
          return ctx.closeMenus();
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { columns: [1, "columns"], levels: [1, "levels"], showCount: [1, "showCount"], collapsedDefault: [1, "collapsedDefault"], dropListId: [1, "dropListId"], emptyText: [1, "emptyText"], addLabel: [1, "addLabel"], reorderLabel: [1, "reorderLabel"], dirLabel: [1, "dirLabel"], removeLabel: [1, "removeLabel"], optionsLabel: [1, "optionsLabel"], showCountLabel: [1, "showCountLabel"], collapsedLabel: [1, "collapsedLabel"], clearAllLabel: [1, "clearAllLabel"], allUsedText: [1, "allUsedText"] }, outputs: { levels: "levelsChange", showCount: "showCountChange", collapsedDefault: "collapsedDefaultChange" }, decls: 16, vars: 24, consts: [[1, "rg-panel"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "rg-main", 3, "cdkDropListDropped", "id", "cdkDropListData"], [1, "rg-hint"], [1, "rg-actions"], [1, "rg-add-wrap"], ["type", "button", 1, "rg-add", 3, "click", "disabled"], [3, "icon", "size"], [1, "rg-add-caret", 3, "icon", "size"], ["role", "menu", 1, "rg-menu", "rg-menu-end"], [1, "rg-opts-wrap"], ["type", "button", 1, "rg-icon-btn", 3, "click"], [1, "rg-hint-ic", 3, "icon", "size"], [1, "rg-arrow", 3, "icon", "size"], ["cdkDrag", "", 1, "rg-chip", 3, "cdkDragData"], ["cdkDragHandle", "", 1, "rg-grip"], [1, "rg-chip-title"], ["type", "button", 1, "rg-chip-dir", 3, "click"], ["type", "button", 1, "rg-chip-x", 3, "click"], ["role", "menu", 1, "rg-menu", "rg-menu-end", 3, "click"], ["type", "button", "role", "menuitem", 1, "rg-menu-item"], [1, "rg-menu-empty"], ["type", "button", "role", "menuitem", 1, "rg-menu-item", 3, "click"], [1, "rg-menu-opt"], ["type", "checkbox", 3, "change", "checked"], [1, "rg-menu-sep"], ["type", "button", 1, "rg-menu-item", "rg-menu-danger", 3, "click", "disabled"]], template: function HrmRowGrouping_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("cdkDropListDropped", function HrmRowGrouping_Template_div_cdkDropListDropped_1_listener($event) {
          return ctx.onDrop($event);
        });
        \u0275\u0275conditionalCreate(2, HrmRowGrouping_Conditional_2_Template, 4, 3, "div", 2)(3, HrmRowGrouping_Conditional_3_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function HrmRowGrouping_Template_button_click_6_listener($event) {
          return ctx.toggleAddMenu($event);
        });
        \u0275\u0275element(7, "tabler-icon", 6);
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "tabler-icon", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, HrmRowGrouping_Conditional_11_Template, 4, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
        \u0275\u0275listener("click", function HrmRowGrouping_Template_button_click_13_listener($event) {
          return ctx.toggleMoreMenu($event);
        });
        \u0275\u0275element(14, "tabler-icon", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, HrmRowGrouping_Conditional_15_Template, 14, 8, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("is-empty", !ctx.levels().length);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-empty", !ctx.levels().length);
        \u0275\u0275property("id", ctx.dropListId())("cdkDropListData", ctx.levels());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.levels().length ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("is-open", ctx.addMenuOpen());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canAdd());
        \u0275\u0275attribute("aria-expanded", ctx.addMenuOpen());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icPlus)("size", 14);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.addLabel());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icChevronDown)("size", 14);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.addMenuOpen() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("is-open", ctx.moreMenuOpen());
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.optionsLabel())("aria-expanded", ctx.moreMenuOpen());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icDots)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.moreMenuOpen() ? 15 : -1);
      }
    }, dependencies: [CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], styles: ["/* angular:styles/component:css;4247e8e09fbc69d71e21f2cd988b45db9051f9acb85ad47d7e04a0ad0b7e2718;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts */\n.hrm-row-grouping {\n  display: block;\n}\n.rg-panel {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: nowrap;\n  gap: 0;\n  min-height: 46px;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: var(--bg-surface);\n  font-family: var(--font-sans);\n}\n.rg-panel.is-empty {\n  background: var(--bg-surface-subtle);\n}\n.rg-main {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-inline: var(--space-3, 12px);\n}\n.rg-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex: none;\n  padding-inline: var(--space-2, 8px) var(--space-3, 12px);\n}\n.rg-hint {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: var(--space-2, 8px);\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-block: var(--space-2, 8px);\n  color: var(--text-soft);\n  font-size: var(--fs-13, 13px);\n}\n.rg-hint-ic {\n  flex: none;\n  color: var(--text-soft);\n  opacity: .8;\n}\n.rg-main.cdk-drop-list-receiving,\n.rg-main.cdk-drop-list-dragging {\n  background: var(--primary-bg-subtle);\n  box-shadow: inset 0 0 0 1px var(--primary-border);\n}\n.rg-arrow {\n  flex: none;\n  color: var(--text-soft);\n  opacity: .7;\n}\n.rg-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  flex: none;\n  height: 30px;\n  padding: 0 var(--space-1, 4px) 0 2px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n}\n.rg-chip.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n  background: var(--bg-surface);\n}\n.rg-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.rg-grip:hover {\n  color: var(--text-body);\n  background: var(--bg-surface);\n}\n.rg-grip:active {\n  cursor: grabbing;\n}\n.rg-chip-title {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  white-space: nowrap;\n  padding: 0 var(--space-1, 4px);\n}\n.rg-chip-dir,\n.rg-chip-x {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.rg-chip-dir:hover {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.rg-chip-x:hover {\n  color: var(--error-base);\n  background: var(--bg-surface);\n}\n.rg-chip-dir:focus-visible,\n.rg-chip-x:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.rg-add-wrap,\n.rg-opts-wrap {\n  position: relative;\n  flex: none;\n}\n.rg-add {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  height: 30px;\n  padding: 0 var(--space-2, 8px);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.rg-add:hover:not(:disabled) {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.rg-add:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.rg-add-caret {\n  color: var(--text-soft);\n}\n.rg-add:focus-visible,\n.rg-icon-btn:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.rg-icon-btn {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.rg-icon-btn:hover,\n.rg-opts-wrap.is-open .rg-icon-btn {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.rg-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  inset-inline-start: 0;\n  z-index: 30;\n  min-width: 200px;\n  max-height: 280px;\n  overflow-y: auto;\n  padding: var(--space-1, 4px);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-md);\n}\n.rg-menu-end {\n  inset-inline-start: auto;\n  inset-inline-end: 0;\n}\n.rg-menu-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  height: 34px;\n  padding: 0 var(--space-2, 8px);\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  text-align: start;\n  cursor: pointer;\n}\n.rg-menu-item:hover:not(:disabled) {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.rg-menu-item > tabler-icon {\n  color: var(--text-soft);\n}\n.rg-menu-item:hover:not(:disabled) > tabler-icon {\n  color: inherit;\n}\n.rg-menu-item:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.rg-menu-danger:hover:not(:disabled) {\n  background: var(--error-bg, var(--bg-surface-subtle));\n  color: var(--error-base);\n}\n.rg-menu-empty {\n  padding: var(--space-3, 12px) var(--space-2, 8px);\n  text-align: center;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.rg-menu-opt {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 34px;\n  padding: 0 var(--space-2, 8px);\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.rg-menu-opt:hover {\n  background: var(--bg-surface-subtle);\n}\n.rg-menu-opt input {\n  accent-color: var(--primary-base);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.rg-menu-sep {\n  height: 1px;\n  margin: var(--space-1, 4px) 0;\n  background: var(--border-soft);\n}\n.cdk-drag-placeholder {\n  opacity: .35;\n}\n/*# sourceMappingURL=hrm-row-grouping.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRowGrouping, [{
    type: Component,
    args: [{ selector: "hrm-row-grouping", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], host: { class: "hrm-row-grouping", "(document:click)": "closeMenus()" }, template: `
    <div class="rg-panel" [class.is-empty]="!levels().length">
      <!-- V\xD9NG DRAG full-bleed: nh\u1EADn th\u1EA3 header c\u1ED9t + ch\u1EE9a chip (drop target = rg-main). -->
      <div class="rg-main" [class.is-empty]="!levels().length"
        cdkDropList [id]="dropListId()" cdkDropListOrientation="horizontal"
        [cdkDropListData]="levels()" (cdkDropListDropped)="onDrop($event)">
        @if (!levels().length) {
          <!-- R\u1ED6NG: d\u1EA3i g\u1EE3i \xFD x\xE1m nh\u1EA1t + icon guide (\u2935) \u2014 \u0111\u01B0\u1EDDng "k\xE9o ti\xEAu \u0111\u1EC1 c\u1ED9t v\xE0o \u0111\xE2y". -->
          <div class="rg-hint">
            <tabler-icon class="rg-hint-ic" [icon]="icGuide" [size]="16" />
            <span>{{ emptyText() }}</span>
          </div>
        } @else {
          <!-- C\xD3 LEVELS: m\u1ED7i c\u1EA5p = 1 chip; c\xE1c chip n\u1ED1i b\u1EB1ng m\u0169i t\xEAn \u2192 (th\u1EE9 t\u1EF1 chip = th\u1EE9 t\u1EF1 l\u1ED3ng). -->
          @for (lv of chips(); track lv.key; let i = $index) {
            @if (i > 0) { <tabler-icon class="rg-arrow" [icon]="icArrowRight" [size]="14" /> }
            <div class="rg-chip" cdkDrag [cdkDragData]="lv.key">
              <span class="rg-grip" cdkDragHandle [attr.aria-label]="reorderLabel()">
                <tabler-icon [icon]="icGrip" [size]="16" />
              </span>
              <span class="rg-chip-title">{{ lv.title }}</span>
              <button type="button" class="rg-chip-dir" [attr.aria-label]="dirLabel()"
                [attr.aria-pressed]="lv.dir === 'asc'" (click)="toggleDir(i)">
                <tabler-icon [icon]="lv.dir === 'asc' ? icUp : icDown" [size]="14" />
              </button>
              <button type="button" class="rg-chip-x" [attr.aria-label]="removeLabel()" (click)="removeLevel(i)">
                <tabler-icon [icon]="icX" [size]="14" />
              </button>
            </div>
          }
        }
      </div>

      <!-- C\u1EE4M H\xC0NH \u0110\u1ED8NG canh PH\u1EA2I: "+ Th\xEAm c\u1EA5p nh\xF3m" k\u1EC1 button \u22EF t\xF9y ch\u1ECDn. -->
      <div class="rg-actions">
        <!-- \u0110\u01AF\u1EDCNG TH\xCAM KH\xD4NG-C\u1EA6N-K\xC9O: n\xFAt "+ Th\xEAm c\u1EA5p nh\xF3m" m\u1EDF dropdown ch\u1ECDn c\u1ED9t ch\u01B0a nh\xF3m. -->
        <div class="rg-add-wrap" [class.is-open]="addMenuOpen()">
          <button type="button" class="rg-add" [disabled]="!canAdd()" [attr.aria-expanded]="addMenuOpen()"
            (click)="toggleAddMenu($event)">
            <tabler-icon [icon]="icPlus" [size]="14" />
            <span>{{ addLabel() }}</span>
            <tabler-icon class="rg-add-caret" [icon]="icChevronDown" [size]="14" />
          </button>
          @if (addMenuOpen()) {
            <div class="rg-menu rg-menu-end" role="menu" (click)="stop($event)">
              @for (c of availableColumns(); track c.key) {
                <button type="button" class="rg-menu-item" role="menuitem" (click)="addLevel(c.key)">
                  <tabler-icon [icon]="icPlus" [size]="14" />
                  <span>{{ c.title }}</span>
                </button>
              } @empty {
                <div class="rg-menu-empty">{{ allUsedText() }}</div>
              }
            </div>
          }
        </div>

        <!-- T\xD9Y CH\u1ECCN PH\u1EE4: menu \u22EF (s\u1ED1 b\u1EA3n ghi \xB7 m\u1EB7c \u0111\u1ECBnh thu g\u1ECDn \xB7 b\u1ECF t\u1EA5t c\u1EA3 nh\xF3m). -->
        <div class="rg-opts-wrap" [class.is-open]="moreMenuOpen()">
          <button type="button" class="rg-icon-btn" [attr.aria-label]="optionsLabel()"
            [attr.aria-expanded]="moreMenuOpen()" (click)="toggleMoreMenu($event)">
            <tabler-icon [icon]="icDots" [size]="16" />
          </button>
          @if (moreMenuOpen()) {
            <div class="rg-menu rg-menu-end" role="menu" (click)="stop($event)">
              <label class="rg-menu-opt">
                <input type="checkbox" [checked]="showCount()"
                  (change)="showCount.set($any($event.target).checked)" />
                <span>{{ showCountLabel() }}</span>
              </label>
              <label class="rg-menu-opt">
                <input type="checkbox" [checked]="collapsedDefault()"
                  (change)="collapsedDefault.set($any($event.target).checked)" />
                <span>{{ collapsedLabel() }}</span>
              </label>
              <div class="rg-menu-sep"></div>
              <button type="button" class="rg-menu-item rg-menu-danger" [disabled]="!levels().length"
                (click)="clearAll()">
                <tabler-icon [icon]="icX" [size]="14" />
                <span>{{ clearAllLabel() }}</span>
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;4247e8e09fbc69d71e21f2cd988b45db9051f9acb85ad47d7e04a0ad0b7e2718;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts */\n.hrm-row-grouping {\n  display: block;\n}\n.rg-panel {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: nowrap;\n  gap: 0;\n  min-height: 46px;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: var(--bg-surface);\n  font-family: var(--font-sans);\n}\n.rg-panel.is-empty {\n  background: var(--bg-surface-subtle);\n}\n.rg-main {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-inline: var(--space-3, 12px);\n}\n.rg-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex: none;\n  padding-inline: var(--space-2, 8px) var(--space-3, 12px);\n}\n.rg-hint {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: var(--space-2, 8px);\n  flex: 1 1 auto;\n  min-width: 0;\n  padding-block: var(--space-2, 8px);\n  color: var(--text-soft);\n  font-size: var(--fs-13, 13px);\n}\n.rg-hint-ic {\n  flex: none;\n  color: var(--text-soft);\n  opacity: .8;\n}\n.rg-main.cdk-drop-list-receiving,\n.rg-main.cdk-drop-list-dragging {\n  background: var(--primary-bg-subtle);\n  box-shadow: inset 0 0 0 1px var(--primary-border);\n}\n.rg-arrow {\n  flex: none;\n  color: var(--text-soft);\n  opacity: .7;\n}\n.rg-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  flex: none;\n  height: 30px;\n  padding: 0 var(--space-1, 4px) 0 2px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n}\n.rg-chip.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md);\n  background: var(--bg-surface);\n}\n.rg-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.rg-grip:hover {\n  color: var(--text-body);\n  background: var(--bg-surface);\n}\n.rg-grip:active {\n  cursor: grabbing;\n}\n.rg-chip-title {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  white-space: nowrap;\n  padding: 0 var(--space-1, 4px);\n}\n.rg-chip-dir,\n.rg-chip-x {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.rg-chip-dir:hover {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.rg-chip-x:hover {\n  color: var(--error-base);\n  background: var(--bg-surface);\n}\n.rg-chip-dir:focus-visible,\n.rg-chip-x:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.rg-add-wrap,\n.rg-opts-wrap {\n  position: relative;\n  flex: none;\n}\n.rg-add {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  height: 30px;\n  padding: 0 var(--space-2, 8px);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.rg-add:hover:not(:disabled) {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.rg-add:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.rg-add-caret {\n  color: var(--text-soft);\n}\n.rg-add:focus-visible,\n.rg-icon-btn:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.rg-icon-btn {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.rg-icon-btn:hover,\n.rg-opts-wrap.is-open .rg-icon-btn {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.rg-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  inset-inline-start: 0;\n  z-index: 30;\n  min-width: 200px;\n  max-height: 280px;\n  overflow-y: auto;\n  padding: var(--space-1, 4px);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-md);\n}\n.rg-menu-end {\n  inset-inline-start: auto;\n  inset-inline-end: 0;\n}\n.rg-menu-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  height: 34px;\n  padding: 0 var(--space-2, 8px);\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  text-align: start;\n  cursor: pointer;\n}\n.rg-menu-item:hover:not(:disabled) {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.rg-menu-item > tabler-icon {\n  color: var(--text-soft);\n}\n.rg-menu-item:hover:not(:disabled) > tabler-icon {\n  color: inherit;\n}\n.rg-menu-item:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.rg-menu-danger:hover:not(:disabled) {\n  background: var(--error-bg, var(--bg-surface-subtle));\n  color: var(--error-base);\n}\n.rg-menu-empty {\n  padding: var(--space-3, 12px) var(--space-2, 8px);\n  text-align: center;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n}\n.rg-menu-opt {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 34px;\n  padding: 0 var(--space-2, 8px);\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.rg-menu-opt:hover {\n  background: var(--bg-surface-subtle);\n}\n.rg-menu-opt input {\n  accent-color: var(--primary-base);\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n.rg-menu-sep {\n  height: 1px;\n  margin: var(--space-1, 4px) 0;\n  background: var(--border-soft);\n}\n.cdk-drag-placeholder {\n  opacity: .35;\n}\n/*# sourceMappingURL=hrm-row-grouping.css.map */\n"] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], levels: [{ type: Input, args: [{ isSignal: true, alias: "levels", required: false }] }, { type: Output, args: ["levelsChange"] }], showCount: [{ type: Input, args: [{ isSignal: true, alias: "showCount", required: false }] }, { type: Output, args: ["showCountChange"] }], collapsedDefault: [{ type: Input, args: [{ isSignal: true, alias: "collapsedDefault", required: false }] }, { type: Output, args: ["collapsedDefaultChange"] }], dropListId: [{ type: Input, args: [{ isSignal: true, alias: "dropListId", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], reorderLabel: [{ type: Input, args: [{ isSignal: true, alias: "reorderLabel", required: false }] }], dirLabel: [{ type: Input, args: [{ isSignal: true, alias: "dirLabel", required: false }] }], removeLabel: [{ type: Input, args: [{ isSignal: true, alias: "removeLabel", required: false }] }], optionsLabel: [{ type: Input, args: [{ isSignal: true, alias: "optionsLabel", required: false }] }], showCountLabel: [{ type: Input, args: [{ isSignal: true, alias: "showCountLabel", required: false }] }], collapsedLabel: [{ type: Input, args: [{ isSignal: true, alias: "collapsedLabel", required: false }] }], clearAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearAllLabel", required: false }] }], allUsedText: [{ type: Input, args: [{ isSignal: true, alias: "allUsedText", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRowGrouping, { className: "HrmRowGrouping", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts", lineNumber: 221 });
})();
var HrmGroupedRows = class _HrmGroupedRows {
  constructor() {
    this.nodes = input([], ...ngDevMode ? [{ debugName: "nodes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowTemplate = input(null, ...ngDevMode ? [{ debugName: "rowTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showCount = input(true, ...ngDevMode ? [{ debugName: "showCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedDefault = input(false, ...ngDevMode ? [{ debugName: "collapsedDefault" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u \u0111\u1EC3 hi\u1EC3n th\u1ECB", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icDown = ChevronDown;
    this.icRight = ChevronRight;
    this.flipped = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "flipped" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  isCollapsed(key) {
    return this.collapsedDefault() !== this.flipped().has(key);
  }
  toggle(key) {
    this.flipped.update((prev) => {
      const next = new Set(prev);
      if (next.has(key))
        next.delete(key);
      else
        next.add(key);
      return next;
    });
  }
  /** Fallback khi không truyền rowTemplate: nối các giá trị bản ghi (bỏ rỗng). */
  fallbackRow(row) {
    return Object.values(row).map((v) => v === null || v === void 0 ? "" : String(v)).filter((s) => s !== "").join("  \xB7  ");
  }
  static {
    this.\u0275fac = function HrmGroupedRows_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmGroupedRows)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmGroupedRows, selectors: [["hrm-grouped-rows"]], hostAttrs: [1, "hrm-grouped-rows"], inputs: { nodes: [1, "nodes"], rowTemplate: [1, "rowTemplate"], showCount: [1, "showCount"], collapsedDefault: [1, "collapsedDefault"], emptyText: [1, "emptyText"] }, decls: 6, vars: 1, consts: [["nodeTpl", ""], [1, "gr-root"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "gr-empty"], [1, "gr-group"], ["type", "button", 1, "gr-head", 3, "click"], [1, "gr-caret", 3, "icon", "size"], [1, "gr-label"], [1, "gr-count"], [1, "gr-body"], [1, "gr-row", 3, "--gr-depth"], [1, "gr-row", "gr-row-fallback", 3, "--gr-depth"], [1, "gr-row"], [1, "gr-row", "gr-row-fallback"]], template: function HrmGroupedRows_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HrmGroupedRows_ng_template_0_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275repeaterCreate(3, HrmGroupedRows_For_4_Template, 1, 4, "ng-container", 2, _forTrack03, false, HrmGroupedRows_ForEmpty_5_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.nodes());
      }
    }, dependencies: [NgTemplateOutlet, TablerIconComponent], styles: ["/* angular:styles/component:css;92906cf6246a97842c762f5486822f8a7d67337cc2b43f92fb248f5a4be5010f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts */\n.hrm-grouped-rows {\n  display: block;\n  font-family: var(--font-sans);\n}\n.gr-root {\n  display: flex;\n  flex-direction: column;\n}\n.gr-group {\n  display: flex;\n  flex-direction: column;\n}\n.gr-head {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  min-height: 38px;\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  padding-inline-start: calc(var(--space-3, 12px) + var(--gr-depth, 0) * var(--space-5, 20px));\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font: inherit;\n  text-align: start;\n  cursor: pointer;\n}\n.gr-head:hover {\n  background: var(--bg-surface);\n}\n.gr-head:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: -2px;\n}\n.gr-caret {\n  flex: none;\n  color: var(--text-soft);\n}\n.gr-label {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  white-space: nowrap;\n}\n.gr-count {\n  display: inline-grid;\n  place-items: center;\n  min-width: 20px;\n  height: 18px;\n  padding: 0 6px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n.gr-body {\n  display: flex;\n  flex-direction: column;\n  animation: gr-reveal var(--duration-fast, .16s) var(--ease-out, ease);\n}\n@keyframes gr-reveal {\n  from {\n    opacity: 0;\n    transform: translateY(-3px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gr-row {\n  padding-inline-start: 0;\n}\n.gr-row-fallback {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  padding-block: var(--space-2, 8px);\n  padding-inline-end: var(--space-3, 12px);\n  padding-inline-start: calc(var(--space-3, 12px) + var(--gr-depth, 0) * var(--space-5, 20px));\n  border-top: 1px solid var(--border-soft);\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.gr-empty {\n  padding: var(--space-6, 24px) var(--space-4, 16px);\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=hrm-row-grouping.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmGroupedRows, [{
    type: Component,
    args: [{ selector: "hrm-grouped-rows", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NgTemplateOutlet, TablerIconComponent], host: { class: "hrm-grouped-rows" }, template: `
    <!-- Template \u0111\u1EC7 quy 1 n\xFAt: header (thu/m\u1EDF) + body (children \u0111\u1EC7 quy | h\xE0ng l\xE1). -->
    <ng-template #nodeTpl let-node let-depth="depth">
      <div class="gr-group">
        <button type="button" class="gr-head" [style.--gr-depth]="depth" (click)="toggle(node.key)"
          [attr.aria-expanded]="!isCollapsed(node.key)">
          <tabler-icon class="gr-caret" [icon]="isCollapsed(node.key) ? icRight : icDown" [size]="16" />
          <span class="gr-label">{{ node.label }}</span>
          @if (showCount()) { <span class="gr-count">{{ node.count }}</span> }
        </button>

        @if (!isCollapsed(node.key)) {
          <div class="gr-body">
            @if (node.children.length) {
              @for (child of node.children; track child.key) {
                <ng-container [ngTemplateOutlet]="nodeTpl"
                  [ngTemplateOutletContext]="{ $implicit: child, depth: depth + 1 }" />
              }
            } @else {
              @for (row of node.rows; track $index) {
                @if (rowTemplate(); as tpl) {
                  <div class="gr-row" [style.--gr-depth]="depth + 1">
                    <ng-container [ngTemplateOutlet]="tpl" [ngTemplateOutletContext]="{ $implicit: row }" />
                  </div>
                } @else {
                  <div class="gr-row gr-row-fallback" [style.--gr-depth]="depth + 1">{{ fallbackRow(row) }}</div>
                }
              }
            }
          </div>
        }
      </div>
    </ng-template>

    <div class="gr-root">
      @for (node of nodes(); track node.key) {
        <ng-container [ngTemplateOutlet]="nodeTpl" [ngTemplateOutletContext]="{ $implicit: node, depth: 0 }" />
      } @empty {
        <div class="gr-empty">{{ emptyText() }}</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;92906cf6246a97842c762f5486822f8a7d67337cc2b43f92fb248f5a4be5010f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts */\n.hrm-grouped-rows {\n  display: block;\n  font-family: var(--font-sans);\n}\n.gr-root {\n  display: flex;\n  flex-direction: column;\n}\n.gr-group {\n  display: flex;\n  flex-direction: column;\n}\n.gr-head {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  min-height: 38px;\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  padding-inline-start: calc(var(--space-3, 12px) + var(--gr-depth, 0) * var(--space-5, 20px));\n  border: 0;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font: inherit;\n  text-align: start;\n  cursor: pointer;\n}\n.gr-head:hover {\n  background: var(--bg-surface);\n}\n.gr-head:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: -2px;\n}\n.gr-caret {\n  flex: none;\n  color: var(--text-soft);\n}\n.gr-label {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  white-space: nowrap;\n}\n.gr-count {\n  display: inline-grid;\n  place-items: center;\n  min-width: 20px;\n  height: 18px;\n  padding: 0 6px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n.gr-body {\n  display: flex;\n  flex-direction: column;\n  animation: gr-reveal var(--duration-fast, .16s) var(--ease-out, ease);\n}\n@keyframes gr-reveal {\n  from {\n    opacity: 0;\n    transform: translateY(-3px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gr-row {\n  padding-inline-start: 0;\n}\n.gr-row-fallback {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  padding-block: var(--space-2, 8px);\n  padding-inline-end: var(--space-3, 12px);\n  padding-inline-start: calc(var(--space-3, 12px) + var(--gr-depth, 0) * var(--space-5, 20px));\n  border-top: 1px solid var(--border-soft);\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.gr-empty {\n  padding: var(--space-6, 24px) var(--space-4, 16px);\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=hrm-row-grouping.css.map */\n"] }]
  }], null, { nodes: [{ type: Input, args: [{ isSignal: true, alias: "nodes", required: false }] }], rowTemplate: [{ type: Input, args: [{ isSignal: true, alias: "rowTemplate", required: false }] }], showCount: [{ type: Input, args: [{ isSignal: true, alias: "showCount", required: false }] }], collapsedDefault: [{ type: Input, args: [{ isSignal: true, alias: "collapsedDefault", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmGroupedRows, { className: "HrmGroupedRows", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-row-grouping.ts", lineNumber: 500 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts
var _c04 = [[["", "dvActions", ""]], [["", "dvActions", ""]]];
var _c12 = ["[dvActions]", "[dvActions]"];
var _c22 = () => [];
var _c3 = (a0) => [a0];
var _c4 = (a0) => ({ $implicit: a0 });
var _forTrack04 = ($index, $item) => $item.mode;
function _forTrack13($index, $item) {
  return this.rowId($item);
}
function HrmDataView_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-data-toolbar", 6);
    \u0275\u0275twoWayListener("searchChange", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_searchChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("searchChange", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_searchChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchChange.emit($event));
    })("filterClick", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_filterClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterClick.emit());
    })("exportClick", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_exportClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportClick.emit());
    });
    \u0275\u0275twoWayListener("sortLevelsChange", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_sortLevelsChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortLevels, $event) || (ctx_r1.sortLevels = $event);
      return \u0275\u0275resetView($event);
    })("hiddenKeysChange", function HrmDataView_Conditional_2_Template_hrm_data_toolbar_hiddenKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hiddenKeys, $event) || (ctx_r1.hiddenKeys = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275projection(1, 0, ["ngProjectAs", "[tbFilters]", 5, ["", "tbFilters", ""]]);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("count", ctx_r1.viewData().length)("countLabel", ctx_r1.countLabel())("searchable", ctx_r1.searchable());
    \u0275\u0275twoWayProperty("search", ctx_r1.search);
    \u0275\u0275property("searchPlaceholder", ctx_r1.searchPlaceholder())("filterable", ctx_r1.filterable())("exportable", ctx_r1.exportable())("sortColumns", ctx_r1.mode() === "table" ? ctx_r1.toolbarColumns() : \u0275\u0275pureFunction0(11, _c22));
    \u0275\u0275twoWayProperty("sortLevels", ctx_r1.sortLevels);
    \u0275\u0275property("columns", ctx_r1.mode() === "table" ? ctx_r1.toolbarColumns() : \u0275\u0275pureFunction0(12, _c22));
    \u0275\u0275twoWayProperty("hiddenKeys", ctx_r1.hiddenKeys);
  }
}
function HrmDataView_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 8);
  }
}
function HrmDataView_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4.label);
  }
}
function HrmDataView_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function HrmDataView_Conditional_4_For_2_Template_button_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mode.set(t_r4.mode));
    });
    \u0275\u0275element(1, "tabler-icon", 11);
    \u0275\u0275conditionalCreate(2, HrmDataView_Conditional_4_For_2_Conditional_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-on", ctx_r1.mode() === t_r4.mode);
    \u0275\u0275attribute("aria-selected", ctx_r1.mode() === t_r4.mode)("aria-label", t_r4.label || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", t_r4.icon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r4.label ? 2 : -1);
  }
}
function HrmDataView_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, HrmDataView_Conditional_4_For_2_Template, 3, 7, "button", 9, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tabs());
  }
}
function HrmDataView_Case_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-row-grouping", 15);
    \u0275\u0275twoWayListener("levelsChange", function HrmDataView_Case_6_Conditional_0_Template_hrm_row_grouping_levelsChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rowGroups, $event) || (ctx_r1.rowGroups = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r1.rowGroupColumns());
    \u0275\u0275twoWayProperty("levels", ctx_r1.rowGroups);
    \u0275\u0275property("dropListId", ctx_r1.groupDropId);
  }
}
function HrmDataView_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, HrmDataView_Case_6_Conditional_0_Template, 1, 3, "hrm-row-grouping", 13);
    \u0275\u0275elementStart(1, "hrm-grid", 14);
    \u0275\u0275twoWayListener("sortLevelsChange", function HrmDataView_Case_6_Template_hrm_grid_sortLevelsChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortLevels, $event) || (ctx_r1.sortLevels = $event);
      return \u0275\u0275resetView($event);
    })("hiddenKeysChange", function HrmDataView_Case_6_Template_hrm_grid_hiddenKeysChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hiddenKeys, $event) || (ctx_r1.hiddenKeys = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_6_Template_hrm_grid_selectedKeysChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedKeys.set($event));
    })("rowClick", function HrmDataView_Case_6_Template_hrm_grid_rowClick_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRecord.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.showGroupPanel() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.columns())("data", ctx_r1.viewData())("rowKey", ctx_r1.rowKey())("minWidth", ctx_r1.tableMinWidth())("size", ctx_r1.size())("selectable", ctx_r1.selectable())("showPagination", false)("customizable", ctx_r1.customizable())("reorderable", ctx_r1.reorderable())("resizable", ctx_r1.resizable());
    \u0275\u0275twoWayProperty("sortLevels", ctx_r1.sortLevels)("hiddenKeys", ctx_r1.hiddenKeys);
    \u0275\u0275property("rowGroups", ctx_r1.mode() === "table" ? ctx_r1.rowGroups() : \u0275\u0275pureFunction0(18, _c22))("columnGroups", ctx_r1.mode() === "table" ? ctx_r1.columnGroups() : \u0275\u0275pureFunction0(19, _c22))("groupConnectedTo", ctx_r1.showGroupPanel() && ctx_r1.mode() === "table" ? \u0275\u0275pureFunction1(20, _c3, ctx_r1.groupDropId) : \u0275\u0275pureFunction0(22, _c22))("groupLabelFormatter", ctx_r1.groupLabelFormatter())("selectedKeys", ctx_r1.selectedKeys());
  }
}
function HrmDataView_Case_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 21);
    \u0275\u0275listener("click", function HrmDataView_Case_7_For_2_Conditional_1_Template_label_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "input", 22);
    \u0275\u0275listener("change", function HrmDataView_Case_7_For_2_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSel(row_r8, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSel(row_r8));
  }
}
function HrmDataView_Case_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 20);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cardTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, row_r8));
  }
}
function HrmDataView_Case_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function HrmDataView_Case_7_For_2_Template_button_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRecord.emit(row_r8));
    });
    \u0275\u0275conditionalCreate(1, HrmDataView_Case_7_For_2_Conditional_1_Template, 2, 1, "label", 19);
    \u0275\u0275conditionalCreate(2, HrmDataView_Case_7_For_2_Conditional_2_Template, 1, 4, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-sel", ctx_r1.isSel(row_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cardTemplate() ? 2 : -1);
  }
}
function HrmDataView_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, HrmDataView_Case_7_For_2_Template, 3, 4, "button", 17, _forTrack13, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--dv-min", ctx_r1.cardMin(), "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.viewData());
  }
}
function HrmDataView_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-board", 23);
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_8_Template_hrm_board_selectedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedKeys.set($event));
    })("cardClick", function HrmDataView_Case_8_Template_hrm_board_cardClick_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRecord.emit($event));
    })("groupChange", function HrmDataView_Case_8_Template_hrm_board_groupChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.groupChange.emit($event));
    })("addCard", function HrmDataView_Case_8_Template_hrm_board_addCard_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.boardAdd.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.viewData())("groupBy", ctx_r1.groupBy())("groups", ctx_r1.boardGroups())("rowKey", ctx_r1.rowKey())("cardTemplate", ctx_r1.boardCard())("addLabel", ctx_r1.boardAddLabel())("selectable", ctx_r1.selectable())("selectedKeys", ctx_r1.selectedKeys());
  }
}
function HrmDataView_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-gantt", 24);
    \u0275\u0275listener("selectedKeysChange", function HrmDataView_Case_9_Template_hrm_gantt_selectedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedKeys.set($event));
    })("barClick", function HrmDataView_Case_9_Template_hrm_gantt_barClick_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRecord.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.viewData())("startField", ctx_r1.startField())("endField", ctx_r1.endField())("labelField", ctx_r1.ganttLabelField())("progressField", ctx_r1.progressField())("rowKey", ctx_r1.rowKey())("labelHeader", ctx_r1.ganttHeader())("dateHeader", ctx_r1.ganttDateHeader())("labelTemplate", ctx_r1.ganttLabelTemplate())("barTone", ctx_r1.ganttBarTone())("selectable", ctx_r1.selectable())("selectedKeys", ctx_r1.selectedKeys());
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
    this.toolbar = input(false, ...ngDevMode ? [{ debugName: "toolbar" }] : (
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
    this.searchFields = input([], ...ngDevMode ? [{ debugName: "searchFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countLabel = input("", ...ngDevMode ? [{ debugName: "countLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filterable = input(false, ...ngDevMode ? [{ debugName: "filterable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exportable = input(false, ...ngDevMode ? [{ debugName: "exportable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchChange = output();
    this.filterClick = output();
    this.exportClick = output();
    this.sortLevels = model([], ...ngDevMode ? [{ debugName: "sortLevels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenKeys = model([], ...ngDevMode ? [{ debugName: "hiddenKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowGroups = model([], ...ngDevMode ? [{ debugName: "rowGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnGroups = input([], ...ngDevMode ? [{ debugName: "columnGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showGroupPanel = model(false, ...ngDevMode ? [{ debugName: "showGroupPanel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupDropId = "hrm-dv-rowgroup";
    this.rowGroupColumns = computed(() => this.columns().filter((c) => !!c.title && !c.fixed && !c.computed).map((c) => ({ key: c.key, title: String(c.title) })), ...ngDevMode ? [{ debugName: "rowGroupColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isFlat = computed(() => this.mode() === "kanban" || this.mode() === "gantt", ...ngDevMode ? [{ debugName: "isFlat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toolbarColumns = computed(() => this.columns().filter((c) => c.title && c.title.trim()).map((c) => ({ key: c.key, title: c.title })), ...ngDevMode ? [{ debugName: "toolbarColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewData = computed(() => {
      const q = this.search().trim().toLowerCase();
      const fields = this.searchFields();
      if (!q || !fields.length)
        return this.data();
      return this.data().filter((r) => fields.some((f) => String(r[f] ?? "").toLowerCase().includes(q)));
    }, ...ngDevMode ? [{ debugName: "viewData" }] : (
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
    this.customizable = input(true, ...ngDevMode ? [{ debugName: "customizable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderable = input(true, ...ngDevMode ? [{ debugName: "reorderable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resizable = input(true, ...ngDevMode ? [{ debugName: "resizable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupLabelFormatter = input(null, ...ngDevMode ? [{ debugName: "groupLabelFormatter" }] : (
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDataView, selectors: [["hrm-data-view"]], hostAttrs: [1, "hrm-data-view"], inputs: { columns: [1, "columns"], data: [1, "data"], rowKey: [1, "rowKey"], toolbar: [1, "toolbar"], searchable: [1, "searchable"], search: [1, "search"], searchPlaceholder: [1, "searchPlaceholder"], searchFields: [1, "searchFields"], countLabel: [1, "countLabel"], filterable: [1, "filterable"], exportable: [1, "exportable"], sortLevels: [1, "sortLevels"], hiddenKeys: [1, "hiddenKeys"], rowGroups: [1, "rowGroups"], columnGroups: [1, "columnGroups"], showGroupPanel: [1, "showGroupPanel"], mode: [1, "mode"], modes: [1, "modes"], cardTemplate: [1, "cardTemplate"], boardCardTemplate: [1, "boardCardTemplate"], cardMin: [1, "cardMin"], tableMinWidth: [1, "tableMinWidth"], size: [1, "size"], selectable: [1, "selectable"], customizable: [1, "customizable"], reorderable: [1, "reorderable"], resizable: [1, "resizable"], groupLabelFormatter: [1, "groupLabelFormatter"], selectedKeys: [1, "selectedKeys"], groupBy: [1, "groupBy"], boardGroups: [1, "boardGroups"], startField: [1, "startField"], endField: [1, "endField"], progressField: [1, "progressField"], ganttLabelField: [1, "ganttLabelField"], ganttHeader: [1, "ganttHeader"], ganttDateHeader: [1, "ganttDateHeader"], ganttLabelTemplate: [1, "ganttLabelTemplate"], ganttBarTone: [1, "ganttBarTone"], tableLabel: [1, "tableLabel"], cardLabel: [1, "cardLabel"], kanbanLabel: [1, "kanbanLabel"], ganttLabel: [1, "ganttLabel"], boardAddLabel: [1, "boardAddLabel"] }, outputs: { search: "searchChange", searchChange: "searchChange", filterClick: "filterClick", exportClick: "exportClick", sortLevels: "sortLevelsChange", hiddenKeys: "hiddenKeysChange", rowGroups: "rowGroupsChange", showGroupPanel: "showGroupPanelChange", mode: "modeChange", selectedKeys: "selectedKeysChange", openRecord: "openRecord", boardAdd: "boardAdd", groupChange: "groupChange" }, ngContentSelectors: _c12, decls: 10, vars: 11, consts: [[1, "dv-bar"], [1, "dv-tb", 3, "count", "countLabel", "searchable", "search", "searchPlaceholder", "filterable", "exportable", "sortColumns", "sortLevels", "columns", "hiddenKeys"], ["role", "tablist", 1, "dv-tabs"], [1, "dv-cards", 3, "--dv-min"], [3, "data", "groupBy", "groups", "rowKey", "cardTemplate", "addLabel", "selectable", "selectedKeys"], [3, "data", "startField", "endField", "labelField", "progressField", "rowKey", "labelHeader", "dateHeader", "labelTemplate", "barTone", "selectable", "selectedKeys"], [1, "dv-tb", 3, "searchChange", "filterClick", "exportClick", "sortLevelsChange", "hiddenKeysChange", "count", "countLabel", "searchable", "search", "searchPlaceholder", "filterable", "exportable", "sortColumns", "sortLevels", "columns", "hiddenKeys"], [1, "dv-actions"], [1, "dv-spacer"], ["type", "button", "role", "tab", 1, "dv-tab", 3, "is-on"], ["type", "button", "role", "tab", 1, "dv-tab", 3, "click"], [3, "icon", "size"], [1, "dv-tab-t"], [1, "dv-grp", 3, "columns", "levels", "dropListId"], [3, "sortLevelsChange", "hiddenKeysChange", "selectedKeysChange", "rowClick", "columns", "data", "rowKey", "minWidth", "size", "selectable", "showPagination", "customizable", "reorderable", "resizable", "sortLevels", "hiddenKeys", "rowGroups", "columnGroups", "groupConnectedTo", "groupLabelFormatter", "selectedKeys"], [1, "dv-grp", 3, "levelsChange", "columns", "levels", "dropListId"], [1, "dv-cards"], ["type", "button", 1, "dv-card", 3, "is-sel"], ["type", "button", 1, "dv-card", 3, "click"], [1, "dv-check"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dv-check", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [3, "selectedKeysChange", "cardClick", "groupChange", "addCard", "data", "groupBy", "groups", "rowKey", "cardTemplate", "addLabel", "selectable", "selectedKeys"], [3, "selectedKeysChange", "barClick", "data", "startField", "endField", "labelField", "progressField", "rowKey", "labelHeader", "dateHeader", "labelTemplate", "barTone", "selectable", "selectedKeys"]], template: function HrmDataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c04);
        \u0275\u0275elementStart(0, "div")(1, "div", 0);
        \u0275\u0275conditionalCreate(2, HrmDataView_Conditional_2_Template, 2, 13, "hrm-data-toolbar", 1)(3, HrmDataView_Conditional_3_Template, 3, 0);
        \u0275\u0275conditionalCreate(4, HrmDataView_Conditional_4_Template, 3, 0, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275conditionalCreate(6, HrmDataView_Case_6_Template, 2, 23)(7, HrmDataView_Case_7_Template, 3, 2, "div", 3)(8, HrmDataView_Case_8_Template, 1, 8, "hrm-board", 4)(9, HrmDataView_Case_9_Template, 1, 12, "hrm-gantt", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275classProp("dv-panel", ctx.toolbar())("dv-panel--flat", ctx.toolbar() && ctx.isFlat());
        \u0275\u0275advance();
        \u0275\u0275classProp("dv-bar--attached", ctx.toolbar());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toolbar() ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tabs().length > 1 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("dv-view", ctx.toolbar());
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_6_0 = ctx.mode()) === "table" ? 6 : tmp_6_0 === "card" ? 7 : tmp_6_0 === "kanban" ? 8 : tmp_6_0 === "gantt" ? 9 : -1);
      }
    }, dependencies: [NgTemplateOutlet, TablerIconComponent, HrmGrid, HrmBoard, HrmGantt, HrmDataToolbar, HrmRowGrouping], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.dv-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.dv-tb[_ngcontent-%COMP%] {\n  flex: 1 1 320px;\n  min-width: 0;\n}\n.dv-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.dv-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.dv-panel[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.dv-bar--attached[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.dv-view[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n}\n.dv-view[_ngcontent-%COMP%]     .ant-table {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.dv-view[_ngcontent-%COMP%]    > .dv-cards[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.dv-grp[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0;\n  border-bottom: 1px solid var(--border-sub);\n}\n.dv-panel--flat[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  overflow: visible;\n}\n.dv-panel--flat[_ngcontent-%COMP%]   .dv-bar--attached[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  margin-bottom: 12px;\n}\n.dv-panel--flat[_ngcontent-%COMP%]   .dv-view[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.dv-tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  flex: none;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.dv-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n.dv-tab.is-on[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.dv-tab-t[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.dv-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(var(--dv-min, 260px), 1fr));\n  gap: 12px;\n}\n.dv-card[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font: inherit;\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-regular-sm);\n}\n.dv-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring);\n  outline-offset: 1px;\n}\n.dv-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dv-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.dv-card[_ngcontent-%COMP%]:hover   .dv-check[_ngcontent-%COMP%], \n.dv-card.is-sel[_ngcontent-%COMP%]   .dv-check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.dv-card.is-sel[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-data-view.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDataView, [{
    type: Component,
    args: [{ selector: "hrm-data-view", imports: [NgTemplateOutlet, TablerIconComponent, HrmGrid, HrmBoard, HrmGantt, HrmDataToolbar, HrmRowGrouping], template: `
    <!-- [toolbar] B\u1EACT \u2192 g\xF3i toolbar + b\u1EA3ng trong 1 PANEL vi\u1EC1n chung (toolbar g\u1EA1ch d\u01B0\u1EDBi, b\u1EA3ng ph\u1EB3ng)
         nh\u01B0 template hrm-list-page \u2192 toolbar D\xCDNH b\u1EA3ng, kh\xF4ng r\u1EDDi. Kanban/gantt: panel ph\u1EB3ng (board t\u1EF1 l\xE0 th\u1EBB). -->
    <div [class.dv-panel]="toolbar()" [class.dv-panel--flat]="toolbar() && isFlat()">
      <div class="dv-bar" [class.dv-bar--attached]="toolbar()">
        @if (toolbar()) {
          <hrm-data-toolbar class="dv-tb"
            [count]="viewData().length" [countLabel]="countLabel()"
            [searchable]="searchable()" [(search)]="search" [searchPlaceholder]="searchPlaceholder()" (searchChange)="searchChange.emit($event)"
            [filterable]="filterable()" (filterClick)="filterClick.emit()"
            [exportable]="exportable()" (exportClick)="exportClick.emit()"
            [sortColumns]="mode() === 'table' ? toolbarColumns() : []" [(sortLevels)]="sortLevels"
            [columns]="mode() === 'table' ? toolbarColumns() : []" [(hiddenKeys)]="hiddenKeys">
            <ng-content select="[dvActions]" ngProjectAs="[tbFilters]" />
          </hrm-data-toolbar>
        } @else {
          <div class="dv-actions"><ng-content select="[dvActions]" /></div>
          <div class="dv-spacer"></div>
        }
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

      <div [class.dv-view]="toolbar()">
      @switch (mode()) {
      @case ('table') {
        @if (showGroupPanel()) {
          <hrm-row-grouping class="dv-grp" [columns]="rowGroupColumns()" [(levels)]="rowGroups" [dropListId]="groupDropId" />
        }
        <hrm-grid [columns]="columns()" [data]="viewData()" [rowKey]="rowKey()" [minWidth]="tableMinWidth()"
          [size]="size()" [selectable]="selectable()" [showPagination]="false"
          [customizable]="customizable()" [reorderable]="reorderable()" [resizable]="resizable()"
          [(sortLevels)]="sortLevels" [(hiddenKeys)]="hiddenKeys"
          [rowGroups]="mode() === 'table' ? rowGroups() : []"
          [columnGroups]="mode() === 'table' ? columnGroups() : []"
          [groupConnectedTo]="(showGroupPanel() && mode() === 'table') ? [groupDropId] : []"
          [groupLabelFormatter]="groupLabelFormatter()"
          [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (rowClick)="openRecord.emit($event)" />
      }
      @case ('card') {
        <div class="dv-cards" [style.--dv-min.px]="cardMin()">
          @for (row of viewData(); track rowId(row)) {
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
        <hrm-board [data]="viewData()" [groupBy]="groupBy()" [groups]="boardGroups()" [rowKey]="rowKey()"
          [cardTemplate]="boardCard()" [addLabel]="boardAddLabel()"
          [selectable]="selectable()" [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (cardClick)="openRecord.emit($event)" (groupChange)="groupChange.emit($event)"
          (addCard)="boardAdd.emit($event)" />
      }
      @case ('gantt') {
        <hrm-gantt [data]="viewData()" [startField]="startField()" [endField]="endField()"
          [labelField]="ganttLabelField()" [progressField]="progressField()" [rowKey]="rowKey()"
          [labelHeader]="ganttHeader()" [dateHeader]="ganttDateHeader()"
          [labelTemplate]="ganttLabelTemplate()" [barTone]="ganttBarTone()"
          [selectable]="selectable()" [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
          (barClick)="openRecord.emit($event)" />
      }
      }
      </div>
    </div>
  `, host: { class: "hrm-data-view" }, styles: ["/* angular:styles/component:css;24209d9751c67647e777fa4ad35b46459cd7df9aae09fcc90bed4a9bbeeacadd;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.dv-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.dv-tb {\n  flex: 1 1 320px;\n  min-width: 0;\n}\n.dv-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.dv-spacer {\n  flex: 1;\n}\n.dv-panel {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.dv-bar--attached {\n  margin-bottom: 0;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.dv-view {\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n}\n.dv-view ::ng-deep .ant-table {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.dv-view > .dv-cards {\n  padding: 12px;\n}\n.dv-grp {\n  display: block;\n  padding: 0;\n  border-bottom: 1px solid var(--border-sub);\n}\n.dv-panel--flat {\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  overflow: visible;\n}\n.dv-panel--flat .dv-bar--attached {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  margin-bottom: 12px;\n}\n.dv-panel--flat .dv-view {\n  overflow: visible;\n}\n.dv-tabs {\n  display: inline-flex;\n  gap: 2px;\n  padding: 3px;\n  flex: none;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.dv-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n  font: inherit;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-tab:hover {\n  color: var(--text-strong);\n}\n.dv-tab.is-on {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n  box-shadow: var(--shadow-regular-xs);\n}\n.dv-tab-t {\n  white-space: nowrap;\n}\n.dv-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(var(--dv-min, 260px), 1fr));\n  gap: 12px;\n}\n.dv-card {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 14px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font: inherit;\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-card:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-regular-sm);\n}\n.dv-card:focus-visible {\n  outline: 2px solid var(--primary-focus-ring);\n  outline-offset: 1px;\n}\n.dv-card {\n  position: relative;\n}\n.dv-check {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.dv-check input {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  cursor: pointer;\n  accent-color: var(--primary-base);\n}\n.dv-card:hover .dv-check,\n.dv-card.is-sel .dv-check {\n  opacity: 1;\n}\n.dv-card.is-sel {\n  border-color: var(--primary-base);\n}\n/*# sourceMappingURL=hrm-data-view.css.map */\n"] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], toolbar: [{ type: Input, args: [{ isSignal: true, alias: "toolbar", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], searchFields: [{ type: Input, args: [{ isSignal: true, alias: "searchFields", required: false }] }], countLabel: [{ type: Input, args: [{ isSignal: true, alias: "countLabel", required: false }] }], filterable: [{ type: Input, args: [{ isSignal: true, alias: "filterable", required: false }] }], exportable: [{ type: Input, args: [{ isSignal: true, alias: "exportable", required: false }] }], searchChange: [{ type: Output, args: ["searchChange"] }], filterClick: [{ type: Output, args: ["filterClick"] }], exportClick: [{ type: Output, args: ["exportClick"] }], sortLevels: [{ type: Input, args: [{ isSignal: true, alias: "sortLevels", required: false }] }, { type: Output, args: ["sortLevelsChange"] }], hiddenKeys: [{ type: Input, args: [{ isSignal: true, alias: "hiddenKeys", required: false }] }, { type: Output, args: ["hiddenKeysChange"] }], rowGroups: [{ type: Input, args: [{ isSignal: true, alias: "rowGroups", required: false }] }, { type: Output, args: ["rowGroupsChange"] }], columnGroups: [{ type: Input, args: [{ isSignal: true, alias: "columnGroups", required: false }] }], showGroupPanel: [{ type: Input, args: [{ isSignal: true, alias: "showGroupPanel", required: false }] }, { type: Output, args: ["showGroupPanelChange"] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }, { type: Output, args: ["modeChange"] }], modes: [{ type: Input, args: [{ isSignal: true, alias: "modes", required: false }] }], cardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "cardTemplate", required: false }] }], boardCardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "boardCardTemplate", required: false }] }], cardMin: [{ type: Input, args: [{ isSignal: true, alias: "cardMin", required: false }] }], tableMinWidth: [{ type: Input, args: [{ isSignal: true, alias: "tableMinWidth", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], customizable: [{ type: Input, args: [{ isSignal: true, alias: "customizable", required: false }] }], reorderable: [{ type: Input, args: [{ isSignal: true, alias: "reorderable", required: false }] }], resizable: [{ type: Input, args: [{ isSignal: true, alias: "resizable", required: false }] }], groupLabelFormatter: [{ type: Input, args: [{ isSignal: true, alias: "groupLabelFormatter", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], groupBy: [{ type: Input, args: [{ isSignal: true, alias: "groupBy", required: false }] }], boardGroups: [{ type: Input, args: [{ isSignal: true, alias: "boardGroups", required: false }] }], startField: [{ type: Input, args: [{ isSignal: true, alias: "startField", required: false }] }], endField: [{ type: Input, args: [{ isSignal: true, alias: "endField", required: false }] }], progressField: [{ type: Input, args: [{ isSignal: true, alias: "progressField", required: false }] }], ganttLabelField: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelField", required: false }] }], ganttHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttHeader", required: false }] }], ganttDateHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttDateHeader", required: false }] }], ganttLabelTemplate: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelTemplate", required: false }] }], ganttBarTone: [{ type: Input, args: [{ isSignal: true, alias: "ganttBarTone", required: false }] }], tableLabel: [{ type: Input, args: [{ isSignal: true, alias: "tableLabel", required: false }] }], cardLabel: [{ type: Input, args: [{ isSignal: true, alias: "cardLabel", required: false }] }], kanbanLabel: [{ type: Input, args: [{ isSignal: true, alias: "kanbanLabel", required: false }] }], ganttLabel: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabel", required: false }] }], openRecord: [{ type: Output, args: ["openRecord"] }], boardAddLabel: [{ type: Input, args: [{ isSignal: true, alias: "boardAddLabel", required: false }] }], boardAdd: [{ type: Output, args: ["boardAdd"] }], groupChange: [{ type: Output, args: ["groupChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDataView, { className: "HrmDataView", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-data-view.ts", lineNumber: 186 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-list-page.ts
var _c05 = [[["", "headerActions", ""]], [["", "filters", ""]], [["", "actions", ""]], "*", [["", "lpDetail", ""]], [["", "lpTabs", ""]], [["", "pagerInfo", ""]]];
var _c13 = ["[headerActions]", "[filters]", "[actions]", "*", "[lpDetail]", "[lpTabs]", "[pagerInfo]"];
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
    }, hostAttrs: [1, "hrm-list-page"], inputs: { breadcrumb: [1, "breadcrumb"], title: [1, "title"], subtitle: [1, "subtitle"], showBack: [1, "showBack"], total: [1, "total"], pageIndex: [1, "pageIndex"], pageSize: [1, "pageSize"], showSizeChanger: [1, "showSizeChanger"], panel: [1, "panel"] }, outputs: { pageIndex: "pageIndexChange", pageSize: "pageSizeChange", back: "back" }, ngContentSelectors: _c13, decls: 16, vars: 8, consts: [[1, "lp"], [1, "lp-head"], [1, "lp-crumb", 3, "items"], [3, "back", "title", "subtitle", "showBack"], [1, "lp-tabs"], [1, "lp-split"], [1, "lp-panel"], [1, "lp-toolbar"], [1, "lp-body"], [1, "lp-pager"], [1, "lp-pager-info"], ["size", "small", 1, "lp-pg-full", 3, "pageIndexChange", "pageSizeChange", "responsive", "pageIndex", "total", "pageSize", "showSizeChanger"], ["size", "small", 1, "lp-pg-simple", 3, "pageIndexChange", "simple", "pageIndex", "total", "pageSize"]], template: function HrmListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c05);
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

// libs/hrm-ui/src/lib/overlays/hrm-detail-peek.ts
var _c06 = () => ({ "max-height": "70vh", "overflow-y": "auto" });
var _c14 = (a0) => ({ $implicit: a0 });
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
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c14, ctx_r1.peekMode()));
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
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c14, ctx_r1.peekMode()));
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
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.bodyTpl())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, ctx_r1.peekMode()));
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
        \u0275\u0275property("nzVisible", ctx.open() && ctx.peekMode() === "center")("nzWidth", ctx.modalWidth())("nzTitle", peekHead_r3)("nzClosable", false)("nzBodyStyle", \u0275\u0275pureFunction0(13, _c06))("nzFooter", ctx.footer() ?? null);
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
  HrmDataView,
  HrmListPageTabs,
  HrmListPage,
  HrmDetailPeek
};
//# sourceMappingURL=chunk-JKYPLKJT.js.map
