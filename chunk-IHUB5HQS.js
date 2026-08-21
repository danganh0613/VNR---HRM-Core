import {
  NzCellFixedDirective,
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzTdAddOnComponent,
  NzThMeasureDirective,
  NzThSelectionComponent,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-U557YZUX.js";
import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  NzTooltipDirective
} from "./chunk-NGY4ECW2.js";
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
  ChevronDown,
  ChevronRight,
  Columns,
  DotsVertical,
  Eye,
  EyeOff,
  GripVertical,
  Pinned,
  PinnedOff,
  Selector,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  afterRenderEffect,
  computed,
  effect,
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
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts
var _c0 = (a0, a1) => ({ $implicit: a0, value: a1 });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function _forTrack2($index, $item) {
  return this.rowKeyOf($item);
}
function HrmGrid_Conditional_0_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 5);
    \u0275\u0275conditionalCreate(4, HrmGrid_Conditional_0_For_3_Conditional_4_Template, 1, 5, "ng-container", 6)(5, HrmGrid_Conditional_0_For_3_Conditional_5_Template, 1, 1);
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
    \u0275\u0275elementStart(0, "nz-table", 3)(1, "tbody");
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
function HrmGrid_Conditional_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.colsBtnLabel());
  }
}
function HrmGrid_Conditional_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hiddenCount());
  }
}
function HrmGrid_Conditional_1_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_0_For_9_Template_li_click_0_listener($event) {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleHidden(c_r6.key, $event));
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzDisabled", c_r6.hideable === false);
    \u0275\u0275advance();
    \u0275\u0275classProp("hg-mi-off", ctx_r1.isHidden(c_r6.key));
    \u0275\u0275property("icon", ctx_r1.isHidden(c_r6.key) ? ctx_r1.icEyeOff : ctx_r1.icEye)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.title);
  }
}
function HrmGrid_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 13);
    \u0275\u0275element(2, "tabler-icon", 14);
    \u0275\u0275conditionalCreate(3, HrmGrid_Conditional_1_Conditional_0_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(4, HrmGrid_Conditional_1_Conditional_0_Conditional_4_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-dropdown-menu", null, 1)(7, "ul", 16);
    \u0275\u0275repeaterCreate(8, HrmGrid_Conditional_1_Conditional_0_For_9_Template, 4, 6, "li", 17, _forTrack0);
    \u0275\u0275element(10, "li", 18);
    \u0275\u0275elementStart(11, "li", 19);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_0_Template_li_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetLayout());
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const colsMenu_r7 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzDropdownMenu", colsMenu_r7);
    \u0275\u0275attribute("aria-label", ctx_r1.colsBtnLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icColumns)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.colsBtnLabel() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hiddenCount() > 0 ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.pickerColumns());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resetLabel());
  }
}
function HrmGrid_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 21);
  }
}
function HrmGrid_Conditional_1_Conditional_4_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r8.title);
  }
}
function HrmGrid_Conditional_1_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_4_For_3_Conditional_1_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = ctx.$implicit;
    \u0275\u0275classProp("hg-gh--empty", !cell_r8.grouped);
    \u0275\u0275attribute("colspan", cell_r8.span);
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r8.grouped ? 1 : -1);
  }
}
function HrmGrid_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 9);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_4_Conditional_1_Template, 1, 0, "th", 21);
    \u0275\u0275repeaterCreate(2, HrmGrid_Conditional_1_Conditional_4_For_3_Template, 2, 4, "th", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.headerGroups().cells);
  }
}
function HrmGrid_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 25);
    \u0275\u0275listener("nzCheckedChange", function HrmGrid_Conditional_1_Conditional_6_Template_th_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
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
function HrmGrid_Conditional_1_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icGrip)("size", 12);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 35);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_3_Conditional_1_Template, 2, 1, "span", 36);
  }
  if (rf & 2) {
    let tmp_16_0;
    const c_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.sortDir(c_r11.key) === "asc" ? ctx_r1.icUp : ctx_r1.icDown)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.sortPriority(c_r11.key)) ? 1 : -1, tmp_16_0);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("icon", ctx_r1.icSortIdle)("size", 14);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cycleSort(c_r11.key));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_3_Template, 2, 3)(4, HrmGrid_Conditional_1_For_8_Conditional_3_Conditional_4_Template, 1, 2, "tabler-icon", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", c_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sortActive(c_r11.key) ? 3 : 4);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.title);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_13_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const c_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPin(c_r11.key, null));
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPinOff)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pinClearLabel());
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "li", 18);
    \u0275\u0275elementStart(1, "li", 19);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_14_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const c_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideCol(c_r11.key));
    });
    \u0275\u0275element(2, "tabler-icon", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icEyeOff)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hideLabel());
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_5_Template_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "nz-dropdown-menu", null, 2)(4, "ul", 38)(5, "li", 20);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_5_Template_li_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPin(c_r11.key, "left"));
    });
    \u0275\u0275element(6, "tabler-icon", 14);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li", 20);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_For_8_Conditional_5_Template_li_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPin(c_r11.key, "right"));
    });
    \u0275\u0275element(10, "tabler-icon", 14);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_13_Template, 4, 3, "li", 39);
    \u0275\u0275conditionalCreate(14, HrmGrid_Conditional_1_For_8_Conditional_5_Conditional_14_Template, 5, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const colMenu_r15 = \u0275\u0275reference(3);
    const c_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzDropdownMenu", colMenu_r15);
    \u0275\u0275attribute("aria-label", c_r11.title);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icMore)("size", 14);
    \u0275\u0275advance(4);
    \u0275\u0275property("nzDisabled", c_r11.fixed === "left");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPinned)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pinLeftLabel());
    \u0275\u0275advance();
    \u0275\u0275property("nzDisabled", c_r11.fixed === "right");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icPinned)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pinRightLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r11.fixed ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r11.hideable !== false ? 14 : -1);
  }
}
function HrmGrid_Conditional_1_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275listener("pointerdown", function HrmGrid_Conditional_1_For_8_Conditional_6_Template_span_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, c_r11.key));
    })("click", function HrmGrid_Conditional_1_For_8_Conditional_6_Template_span_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
  }
}
function HrmGrid_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26)(1, "div", 27);
    \u0275\u0275conditionalCreate(2, HrmGrid_Conditional_1_For_8_Conditional_2_Template, 2, 2, "span", 28);
    \u0275\u0275conditionalCreate(3, HrmGrid_Conditional_1_For_8_Conditional_3_Template, 5, 3, "button", 29)(4, HrmGrid_Conditional_1_For_8_Conditional_4_Template, 3, 1, "span", 30);
    \u0275\u0275conditionalCreate(5, HrmGrid_Conditional_1_For_8_Conditional_5_Template, 15, 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrmGrid_Conditional_1_For_8_Conditional_6_Template, 1, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", ctx_r1.colWidth(c_r11))("min-width", ctx_r1.colMinWidth(c_r11))("text-align", c_r11.align || "left");
    \u0275\u0275property("cdkDragData", c_r11.key)("cdkDragDisabled", !ctx_r1.canDragHeader(c_r11))("nzRight", c_r11.fixed === "right")("nzLeft", c_r11.fixed === "left");
    \u0275\u0275attribute("aria-sort", ctx_r1.ariaSort(c_r11))("data-key", c_r11.key);
    \u0275\u0275advance();
    \u0275\u0275styleProp("justify-content", c_r11.align === "right" ? "flex-end" : c_r11.align === "center" ? "center" : "flex-start");
    \u0275\u0275classProp("hg-th--x", ctx_r1.reorderable() || ctx_r1.customizable() || ctx_r1.groupConnectedTo().length > 0)("hg-th--grab", ctx_r1.canDragHeader(c_r11) && !ctx_r1.canReorder(c_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDragHeader(c_r11) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r11.sortable ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.customizable() && !ctx_r1.isStructural(c_r11) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.resizable() && !ctx_r1.isStructural(c_r11) ? 6 : -1);
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41)(1, "td")(2, "button", 42);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(item_r18.path));
    });
    \u0275\u0275element(3, "tabler-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.colCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.isCollapsed(item_r18.path) ? ctx_r1.icChevRight : ctx_r1.icChevDown)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-left", item_r18.depth * 16, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r18.count);
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Conditional_1_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    })("nzCheckedChange", function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Conditional_1_Template_td_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const item_r18 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.checkOne(item_r18.row, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzChecked", ctx_r1.isChecked(item_r18.row));
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const c_r21 = \u0275\u0275nextContext().$implicit;
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngTemplateOutlet", c_r21.cell)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, item_r18.row, item_r18.row[c_r21.key]));
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275listener("mouseenter", function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_2_Template_span_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const c_r21 = \u0275\u0275nextContext().$implicit;
      const item_r18 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTruncEnter($event, item_r18.row[c_r21.key]));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = \u0275\u0275nextContext().$implicit;
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzTooltipTitle", ctx_r1.truncTip());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.row[c_r21.key]);
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r21 = \u0275\u0275nextContext().$implicit;
    const item_r18 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", item_r18.row[c_r21.key], " ");
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_1_Template, 1, 5, "ng-container", 6)(2, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_2_Template, 2, 2, "span", 50)(3, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("text-align", c_r21.align || "left");
    \u0275\u0275property("nzRight", c_r21.fixed === "right")("nzLeft", c_r21.fixed === "left");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r21.cell ? 1 : ctx_r1.textOverflow() === "truncate" ? 2 : 3);
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Template_tr_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const item_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.rowClick.emit(item_r18.row));
    });
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Conditional_1_Template, 1, 1, "td", 46);
    \u0275\u0275repeaterCreate(2, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_For_3_Template, 4, 5, "td", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.viewColumns());
  }
}
function HrmGrid_Conditional_1_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_0_Template, 8, 7, "tr", 41)(1, HrmGrid_Conditional_1_Conditional_10_For_1_Conditional_1_Template, 4, 1, "tr");
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275conditional(item_r18.kind === "group" ? 0 : 1);
  }
}
function HrmGrid_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmGrid_Conditional_1_Conditional_10_For_1_Template, 2, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.groupedRender());
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_11_For_1_Conditional_1_Template_td_click_0_listener($event) {
      return $event.stopPropagation();
    })("nzCheckedChange", function HrmGrid_Conditional_1_Conditional_11_For_1_Conditional_1_Template_td_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const row_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.checkOne(row_r24, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzChecked", ctx_r1.isChecked(row_r24));
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const c_r26 = \u0275\u0275nextContext().$implicit;
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngTemplateOutlet", c_r26.cell)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, row_r24, row_r24[c_r26.key]));
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275listener("mouseenter", function HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_2_Template_span_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const c_r26 = \u0275\u0275nextContext().$implicit;
      const row_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTruncEnter($event, row_r24[c_r26.key]));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r26 = \u0275\u0275nextContext().$implicit;
    const row_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzTooltipTitle", ctx_r1.truncTip());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r24[c_r26.key]);
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r26 = \u0275\u0275nextContext().$implicit;
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r24[c_r26.key], " ");
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_1_Template, 1, 5, "ng-container", 6)(2, HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_2_Template, 2, 2, "span", 50)(3, HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("text-align", c_r26.align || "left");
    \u0275\u0275property("nzRight", c_r26.fixed === "right")("nzLeft", c_r26.fixed === "left");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r26.cell ? 1 : ctx_r1.textOverflow() === "truncate" ? 2 : 3);
  }
}
function HrmGrid_Conditional_1_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45);
    \u0275\u0275listener("click", function HrmGrid_Conditional_1_Conditional_11_For_1_Template_tr_click_0_listener() {
      const row_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.rowClick.emit(row_r24));
    });
    \u0275\u0275conditionalCreate(1, HrmGrid_Conditional_1_Conditional_11_For_1_Conditional_1_Template, 1, 1, "td", 46);
    \u0275\u0275repeaterCreate(2, HrmGrid_Conditional_1_Conditional_11_For_1_For_3_Template, 4, 5, "td", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.viewColumns());
  }
}
function HrmGrid_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmGrid_Conditional_1_Conditional_11_For_1_Template, 4, 1, "tr", null, _forTrack2, true);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const t_r28 = \u0275\u0275reference(2);
    \u0275\u0275repeater(t_r28.data);
  }
}
function HrmGrid_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, HrmGrid_Conditional_1_Conditional_0_Template, 14, 7, "div", 7);
    \u0275\u0275elementStart(1, "nz-table", 8, 0)(3, "thead");
    \u0275\u0275conditionalCreate(4, HrmGrid_Conditional_1_Conditional_4_Template, 4, 1, "tr", 9);
    \u0275\u0275elementStart(5, "tr", 10);
    \u0275\u0275listener("cdkDropListDropped", function HrmGrid_Conditional_1_Template_tr_cdkDropListDropped_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColDrop($event));
    });
    \u0275\u0275conditionalCreate(6, HrmGrid_Conditional_1_Conditional_6_Template, 1, 2, "th", 11);
    \u0275\u0275repeaterCreate(7, HrmGrid_Conditional_1_For_8_Template, 7, 22, "th", 12, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275conditionalCreate(10, HrmGrid_Conditional_1_Conditional_10_Template, 2, 0)(11, HrmGrid_Conditional_1_Conditional_11_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.customizable() && ctx_r1.isDirty() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("hrm-grid--striped", ctx_r1.striped());
    \u0275\u0275property("nzData", ctx_r1.displayData())("nzLoading", ctx_r1.loading())("nzBordered", ctx_r1.bordered())("nzSize", ctx_r1.size())("nzShowPagination", ctx_r1.showPagination() && ctx_r1.rowGroups().length === 0)("nzPageSize", ctx_r1.pageSize())("nzScroll", ctx_r1.scrollObj())("nzTableLayout", ctx_r1.tableLayout());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.headerGroups().hasGroup ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("cdkDropListConnectedTo", ctx_r1.groupConnectedTo())("cdkDropListDisabled", !ctx_r1.reorderable() && ctx_r1.groupConnectedTo().length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectable() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.viewColumns());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.rowGroups().length ? 10 : 11);
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
    this.rowGroups = input([], ...ngDevMode ? [{ debugName: "rowGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnGroups = input([], ...ngDevMode ? [{ debugName: "columnGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupConnectedTo = input([], ...ngDevMode ? [{ debugName: "groupConnectedTo" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupLabelFormatter = input(null, ...ngDevMode ? [{ debugName: "groupLabelFormatter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderable = input(true, ...ngDevMode ? [{ debugName: "reorderable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.customizable = input(true, ...ngDevMode ? [{ debugName: "customizable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resizable = input(true, ...ngDevMode ? [{ debugName: "resizable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableId = input("", ...ngDevMode ? [{ debugName: "tableId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colsBtnLabel = input("C\u1ED9t", ...ngDevMode ? [{ debugName: "colsBtnLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resetLabel = input("\u0110\u1EB7t l\u1EA1i m\u1EB7c \u0111\u1ECBnh", ...ngDevMode ? [{ debugName: "resetLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinLeftLabel = input("Ghim tr\xE1i", ...ngDevMode ? [{ debugName: "pinLeftLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinRightLabel = input("Ghim ph\u1EA3i", ...ngDevMode ? [{ debugName: "pinRightLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinClearLabel = input("B\u1ECF ghim", ...ngDevMode ? [{ debugName: "pinClearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hideLabel = input("\u1EA8n c\u1ED9t", ...ngDevMode ? [{ debugName: "hideLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icGrip = GripVertical;
    this.icMore = DotsVertical;
    this.icSortIdle = Selector;
    this.icUp = ArrowUp;
    this.icDown = ArrowDown;
    this.icColumns = Columns;
    this.icEye = Eye;
    this.icEyeOff = EyeOff;
    this.icPinned = Pinned;
    this.icPinOff = PinnedOff;
    this.icChevDown = ChevronDown;
    this.icChevRight = ChevronRight;
    this.userOrder = signal(null, ...ngDevMode ? [{ debugName: "userOrder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenKeys = model([], ...ngDevMode ? [{ debugName: "hiddenKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenSet = computed(() => new Set(this.hiddenKeys()), ...ngDevMode ? [{ debugName: "hiddenSet" }] : (
      /* istanbul ignore next */
      []
    ));
    this.userPin = signal({}, ...ngDevMode ? [{ debugName: "userPin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.userWidth = signal({}, ...ngDevMode ? [{ debugName: "userWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortLevels = model([], ...ngDevMode ? [{ debugName: "sortLevels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.host = inject(ElementRef);
    this.loaded = false;
    this.viewColumns = computed(() => {
      const base = this.columns();
      if (!this.reorderable() && !this.customizable())
        return base;
      const order = this.userOrder();
      const hidden = this.hiddenSet();
      const pin = this.userPin();
      let arr = base;
      if (order) {
        const rank = new Map(order.map((k, i) => [k, i]));
        arr = base.map((c, i) => ({ c, r: rank.has(c.key) ? rank.get(c.key) : order.length + i })).sort((a, b) => a.r - b.r).map((x) => x.c);
      }
      arr = arr.map((c) => {
        const p = pin[c.key];
        return p ? __spreadProps(__spreadValues({}, c), { fixed: p }) : c;
      });
      arr = arr.filter((c) => !hidden.has(c.key));
      const grp = (c) => {
        const p = pin[c.key];
        return p === "left" ? 0 : p === "right" ? 2 : 1;
      };
      return arr.map((c, i) => ({ c, i })).sort((a, b) => grp(a.c) - grp(b.c) || a.i - b.i).map((x) => x.c);
    }, ...ngDevMode ? [{ debugName: "viewColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.displayData = computed(() => {
      const levels = this.sortLevels();
      const data = this.data();
      if (!levels.length)
        return data;
      const cmpOne = (a, b, key) => {
        const av = a[key], bv = b[key];
        if (typeof av === "number" && typeof bv === "number")
          return av - bv;
        return String(av ?? "").localeCompare(String(bv ?? ""), "vi");
      };
      return [...data].sort((a, b) => {
        for (const lv of levels) {
          const r = cmpOne(a, b, lv.key) * (lv.dir === "asc" ? 1 : -1);
          if (r !== 0)
            return r;
        }
        return 0;
      });
    }, ...ngDevMode ? [{ debugName: "displayData" }] : (
      /* istanbul ignore next */
      []
    ));
    this.headerGroups = computed(() => {
      const cols = this.viewColumns();
      const titleById = new Map(this.columnGroups().map((g) => [g.id, g.title]));
      const cells = [];
      let hasGroup = false;
      let i = 0;
      while (i < cols.length) {
        const gid = cols[i].groupId;
        if (gid && titleById.has(gid)) {
          let j = i;
          while (j < cols.length && cols[j].groupId === gid)
            j++;
          cells.push({ title: titleById.get(gid), span: j - i, grouped: true });
          hasGroup = true;
          i = j;
        } else {
          let j = i;
          while (j < cols.length && !(cols[j].groupId && titleById.has(cols[j].groupId)))
            j++;
          cells.push({ title: "", span: j - i, grouped: false });
          i = j;
        }
      }
      return { cells, hasGroup };
    }, ...ngDevMode ? [{ debugName: "headerGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colCount = computed(() => this.viewColumns().length + (this.selectable() ? 1 : 0), ...ngDevMode ? [{ debugName: "colCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsed = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupedRender = computed(() => {
      const levels = this.rowGroups();
      const collapsedSet = this.collapsed();
      const data = this.displayData();
      const fmt = this.groupLabelFormatter();
      const out = [];
      if (!levels.length)
        return out;
      const build = (rows, depth, prefix) => {
        if (depth >= levels.length) {
          for (const row of rows) {
            out.push({ kind: "row", id: "r:" + prefix + ":" + String(this.rowKeyOf(row)), depth, row, path: prefix });
          }
          return;
        }
        const key = levels[depth].key;
        const dir = levels[depth].dir;
        const groups = /* @__PURE__ */ new Map();
        for (const row of rows) {
          const v = String(row[key] ?? "");
          const arr = groups.get(v);
          if (arr)
            arr.push(row);
          else
            groups.set(v, [row]);
        }
        const values = Array.from(groups.keys()).sort((a, b) => a.localeCompare(b, "vi") * (dir === "asc" ? 1 : -1));
        for (const v of values) {
          const path = prefix + "/" + v;
          const subset = groups.get(v);
          const label = v === "" ? "\u2014" : fmt ? fmt(key, v) : v;
          out.push({ kind: "group", id: "g:" + path, depth, label, count: subset.length, path });
          if (!collapsedSet.has(path))
            build(subset, depth + 1, path);
        }
      };
      build(data, 0, "");
      return out;
    }, ...ngDevMode ? [{ debugName: "groupedRender" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hiddenCount = computed(() => this.hiddenKeys().length, ...ngDevMode ? [{ debugName: "hiddenCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pickerColumns = computed(() => this.columns().filter((c) => c.title && c.title.trim()), ...ngDevMode ? [{ debugName: "pickerColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isDirty = computed(() => this.userOrder() !== null || this.hiddenKeys().length > 0 || Object.keys(this.userPin()).length > 0 || Object.keys(this.userWidth()).length > 0 || this.sortLevels().length > 0, ...ngDevMode ? [{ debugName: "isDirty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableLayout = computed(() => this.textOverflow() === "truncate" ? "fixed" : "auto", ...ngDevMode ? [{ debugName: "tableLayout" }] : (
      /* istanbul ignore next */
      []
    ));
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
    const loader = effect(() => {
      if (!this.columns().length)
        return;
      this.loadLayout();
      this.loaded = true;
      loader.destroy();
    }, ...ngDevMode ? [{ debugName: "loader" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const snap = {
        o: this.userOrder(),
        h: this.hiddenKeys(),
        p: this.userPin(),
        w: this.userWidth(),
        s: this.sortLevels()
      };
      if (this.loaded)
        this.saveLayout(snap);
    });
    afterRenderEffect(() => {
      this.viewColumns();
      this.userWidth();
      this.displayData();
      this.applyPinOffsets();
    });
  }
  isCollapsed(path) {
    return this.collapsed().has(path);
  }
  toggleGroup(path) {
    const next = new Set(this.collapsed());
    if (next.has(path))
      next.delete(path);
    else
      next.add(path);
    this.collapsed.set(next);
  }
  /** Độ rộng áp cho cột: ưu tiên px người dùng đã kéo, không thì width khai báo. */
  colWidth(c) {
    const w = this.userWidth()[c.key];
    return w != null ? w + "px" : c.width;
  }
  /** min-width CHỈ cho cột người dùng đã kéo → giữ đúng bề rộng; layout 'auto' cho bảng NỚI RA
   *  và CUỘN NGANG (overflow-x:auto sẵn có) thay vì ép cột khác chồng lên nhau. */
  colMinWidth(c) {
    const w = this.userWidth()[c.key];
    return w != null ? w + "px" : null;
  }
  /** ── Sort ── (đa cấp; header hiển thị dir của cột nếu nó nằm trong danh sách cấp) */
  sortOf(key) {
    return this.sortLevels().find((l) => l.key === key);
  }
  sortActive(key) {
    return !!this.sortOf(key);
  }
  sortDir(key) {
    return this.sortOf(key)?.dir ?? null;
  }
  /** Số ưu tiên (1,2,3…) khi sort ≥2 cấp — hiện cạnh mũi tên. 0 = không hiện (0/1 cấp). */
  sortPriority(key) {
    const ls = this.sortLevels();
    if (ls.length < 2)
      return 0;
    const i = ls.findIndex((l) => l.key === key);
    return i < 0 ? 0 : i + 1;
  }
  /** Click tiêu đề = SORT NHANH: đặt lại về DUY NHẤT 1 cấp cột đó, cycle tăng→giảm→bỏ. */
  cycleSort(key) {
    const cur = this.sortLevels();
    const only = cur.length === 1 && cur[0].key === key ? cur[0] : null;
    if (!only) {
      this.sortLevels.set([{ key, dir: "asc" }]);
      return;
    }
    if (only.dir === "asc") {
      this.sortLevels.set([{ key, dir: "desc" }]);
      return;
    }
    this.sortLevels.set([]);
  }
  ariaSort(c) {
    if (!c.sortable)
      return null;
    const d = this.sortDir(c.key);
    return d === "asc" ? "ascending" : d === "desc" ? "descending" : "none";
  }
  /** ── Ghim / ẩn / thứ tự ── */
  /** Cột "cấu trúc" (title rỗng — VD cột thao tác/nút) KHÔNG cho kéo/ghim/ẩn: đưa nó vào
   *  tùy biến chỉ gây rối (grip trên ô trống, dòng trắng trong picker). */
  isStructural(c) {
    return !c.title || !c.title.trim();
  }
  canReorder(c) {
    return this.reorderable() && !c.fixed && !this.isStructural(c);
  }
  /** Header KÉO ĐƯỢC khi: cho đổi thứ tự (reorderable) HOẶC đang nối rổ nhóm (groupConnectedTo) —
   *  để kéo tiêu đề vào rổ nhóm dù đã tắt reorder/grip. Bỏ cột cố định + cột cấu trúc. */
  canDragHeader(c) {
    return (this.reorderable() || this.groupConnectedTo().length > 0) && !c.fixed && !this.isStructural(c);
  }
  setPin(key, side) {
    const next = __spreadValues({}, this.userPin());
    if (side)
      next[key] = side;
    else
      delete next[key];
    this.userPin.set(next);
  }
  isHidden(key) {
    return this.hiddenSet().has(key);
  }
  hideCol(key) {
    this.hiddenKeys.update((a) => a.includes(key) ? a : [...a, key]);
  }
  toggleHidden(key, e) {
    e?.stopPropagation();
    this.hiddenKeys.update((a) => a.includes(key) ? a.filter((k) => k !== key) : [...a, key]);
  }
  resetLayout() {
    this.userOrder.set(null);
    this.hiddenKeys.set([]);
    this.userPin.set({});
    this.userWidth.set({});
    this.sortLevels.set([]);
    this.clearLayout();
  }
  onColDrop(e) {
    if (!this.reorderable())
      return;
    if (e.previousIndex === e.currentIndex)
      return;
    const keys = this.viewColumns().map((c) => c.key);
    moveItemInArray(keys, e.previousIndex, e.currentIndex);
    this.userOrder.set(keys);
  }
  /** ── Kéo độ rộng cột ── setPointerCapture ⇒ mọi pointermove/up sau đó về ĐÚNG tay kéo dù
   *  con trỏ rời phần tử — chắc hơn nghe trên document, không lệ thuộc bubble/CDK. */
  startResize(e, key) {
    e.preventDefault();
    e.stopPropagation();
    const handle = e.currentTarget;
    const th = handle.closest("th");
    if (!th)
      return;
    const startX = e.clientX;
    const startW = Math.round(th.getBoundingClientRect().width);
    try {
      handle.setPointerCapture(e.pointerId);
    } catch {
    }
    const move = (ev) => {
      const w = Math.max(60, startW + (ev.clientX - startX));
      this.userWidth.update((m) => __spreadProps(__spreadValues({}, m), { [key]: Math.round(w) }));
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      try {
        handle.releasePointerCapture(e.pointerId);
      } catch {
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
  }
  /** ── Ghim: offset cộng dồn ── nz đặt inline left:0 cho MỌI cột ghim (không cộng dồn khi
   *  bảng không ở chế độ scroll) ⇒ ghim ≥2 cột chồng nhau. Tự đo bề rộng header rồi ghi
   *  left/right cộng dồn lên th + mọi td cùng cột (đè inline của nz). */
  applyPinOffsets() {
    const root = this.host.nativeElement;
    const headRow = root.querySelector(".ant-table-thead > tr");
    if (!headRow)
      return;
    const ths = Array.from(headRow.children);
    const cols = this.viewColumns();
    const lead = ths.length - cols.length;
    if (lead < 0)
      return;
    const rows = Array.from(root.querySelectorAll(".ant-table-tbody > tr"));
    const setSide = (colIdx, side, px) => {
      const cellIdx = lead + colIdx;
      const other = side === "left" ? "right" : "left";
      const put = (el) => {
        if (el) {
          el.style[side] = px + "px";
          el.style[other] = "";
        }
      };
      put(ths[cellIdx]);
      for (const r of rows)
        put(r.children[cellIdx]);
    };
    let accL = 0;
    for (let i = 0; i < cols.length; i++) {
      if (cols[i].fixed === "left") {
        setSide(i, "left", accL);
        accL += ths[lead + i]?.getBoundingClientRect().width ?? 0;
      }
    }
    let accR = 0;
    for (let i = cols.length - 1; i >= 0; i--) {
      if (cols[i].fixed === "right") {
        setSide(i, "right", accR);
        accR += ths[lead + i]?.getBoundingClientRect().width ?? 0;
      }
    }
  }
  /** ── Autosave (localStorage) ── */
  storageKey() {
    const id = this.tableId();
    if (id)
      return "hg:layout:" + id;
    const path = typeof location !== "undefined" ? location.pathname : "";
    return "hg:layout:" + path + "|" + this.columns().map((c) => c.key).join(",");
  }
  loadLayout() {
    if (typeof localStorage === "undefined")
      return;
    try {
      const raw = localStorage.getItem(this.storageKey());
      if (!raw)
        return;
      const d = JSON.parse(raw);
      if (d.o)
        this.userOrder.set(d.o);
      if (d.h?.length)
        this.hiddenKeys.set(d.h);
      if (d.p && Object.keys(d.p).length)
        this.userPin.set(d.p);
      if (d.w && Object.keys(d.w).length)
        this.userWidth.set(d.w);
      if (Array.isArray(d.s)) {
        if (d.s.length)
          this.sortLevels.set(d.s);
      } else if (d.s)
        this.sortLevels.set([d.s]);
    } catch {
    }
  }
  saveLayout(snap) {
    if (typeof localStorage === "undefined")
      return;
    const empty = !snap.o && !snap.h.length && !Object.keys(snap.p).length && !Object.keys(snap.w).length && !snap.s.length;
    try {
      if (empty)
        localStorage.removeItem(this.storageKey());
      else
        localStorage.setItem(this.storageKey(), JSON.stringify(snap));
    } catch {
    }
  }
  clearLayout() {
    if (typeof localStorage === "undefined")
      return;
    try {
      localStorage.removeItem(this.storageKey());
    } catch {
    }
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
    }, inputs: { columns: [1, "columns"], data: [1, "data"], loading: [1, "loading"], bordered: [1, "bordered"], size: [1, "size"], showPagination: [1, "showPagination"], pageSize: [1, "pageSize"], scroll: [1, "scroll"], minWidth: [1, "minWidth"], striped: [1, "striped"], selectable: [1, "selectable"], rowKey: [1, "rowKey"], variant: [1, "variant"], record: [1, "record"], labelWidth: [1, "labelWidth"], density: [1, "density"], dividers: [1, "dividers"], textOverflow: [1, "textOverflow"], selectedKeys: [1, "selectedKeys"], rowGroups: [1, "rowGroups"], columnGroups: [1, "columnGroups"], groupConnectedTo: [1, "groupConnectedTo"], groupLabelFormatter: [1, "groupLabelFormatter"], reorderable: [1, "reorderable"], customizable: [1, "customizable"], resizable: [1, "resizable"], tableId: [1, "tableId"], colsBtnLabel: [1, "colsBtnLabel"], resetLabel: [1, "resetLabel"], pinLeftLabel: [1, "pinLeftLabel"], pinRightLabel: [1, "pinRightLabel"], pinClearLabel: [1, "pinClearLabel"], hideLabel: [1, "hideLabel"], hiddenKeys: [1, "hiddenKeys"], sortLevels: [1, "sortLevels"] }, outputs: { selectedKeys: "selectedKeysChange", rowClick: "rowClick", hiddenKeys: "hiddenKeysChange", sortLevels: "sortLevelsChange" }, decls: 2, vars: 1, consts: [["t", ""], ["colsMenu", "nzDropdownMenu"], ["colMenu", "nzDropdownMenu"], ["nzTableLayout", "fixed", 3, "nzData", "nzShowPagination", "nzSize"], [1, "hg-rec-label"], [1, "hg-rec-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hg-bar"], [3, "nzData", "nzLoading", "nzBordered", "nzSize", "nzShowPagination", "nzPageSize", "nzScroll", "nzTableLayout"], [1, "hg-grouprow"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped", "cdkDropListConnectedTo", "cdkDropListDisabled"], ["nzWidth", "48px", "nzShowCheckbox", "", 3, "nzChecked", "nzIndeterminate"], ["cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "width", "minWidth", "textAlign", "nzRight", "nzLeft"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "hg-colbtn", 3, "nzDropdownMenu"], [3, "icon", "size"], [1, "hg-colbtn-n"], ["nz-menu", "", 1, "hg-menu", "hg-menu--cols"], ["nz-menu-item", "", 3, "nzDisabled"], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"], ["nz-menu-item", "", 3, "click", "nzDisabled"], ["nzWidth", "48px", 1, "hg-gh", "hg-gh--empty"], [1, "hg-gh", 3, "hg-gh--empty"], [1, "hg-gh"], [1, "hg-gh-t"], ["nzWidth", "48px", "nzShowCheckbox", "", 3, "nzCheckedChange", "nzChecked", "nzIndeterminate"], ["cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "nzRight", "nzLeft"], [1, "hg-th"], ["cdkDragHandle", "", "aria-hidden", "true", 1, "hg-grip"], ["type", "button", 1, "hg-lbl", "hg-lbl--sort"], [1, "hg-lbl"], ["aria-hidden", "true", 1, "hg-resize"], ["type", "button", 1, "hg-lbl", "hg-lbl--sort", 3, "click"], [1, "hg-lbl-t"], [1, "hg-sort", "hg-sort--idle", 3, "icon", "size"], [1, "hg-sort", "hg-sort--on", 3, "icon", "size"], [1, "hg-sort-pri"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "hg-more", 3, "click", "nzDropdownMenu"], ["nz-menu", "", 1, "hg-menu"], ["nz-menu-item", ""], ["aria-hidden", "true", 1, "hg-resize", 3, "pointerdown", "click"], [1, "hg-grp"], ["type", "button", 1, "hg-grp-tog", 3, "click"], [1, "hg-grp-lbl"], [1, "hg-grp-n"], [3, "click"], ["nzShowCheckbox", "", 3, "nzChecked"], [3, "textAlign", "nzRight", "nzLeft"], ["nzShowCheckbox", "", 3, "click", "nzCheckedChange", "nzChecked"], [3, "nzRight", "nzLeft"], ["nz-tooltip", "", 1, "hg-trunc", 3, "nzTooltipTitle"], ["nz-tooltip", "", 1, "hg-trunc", 3, "mouseenter", "nzTooltipTitle"]], template: function HrmGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmGrid_Conditional_0_Template, 4, 3, "nz-table", 3)(1, HrmGrid_Conditional_1_Template, 12, 16);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant() === "record" ? 0 : 1);
      }
    }, dependencies: [
      NzTableModule,
      NzTableComponent,
      NzTableCellDirective,
      NzThMeasureDirective,
      NzTdAddOnComponent,
      NzTheadComponent,
      NzTbodyComponent,
      NzTrDirective,
      NzCellFixedDirective,
      NzThSelectionComponent,
      NgTemplateOutlet,
      NzTooltipDirective,
      NzDropDownModule,
      NzMenuDirective,
      NzMenuItemComponent,
      NzMenuDividerDirective,
      NzDropdownDirective,
      NzDropdownMenuComponent,
      NzMenuModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      TablerIconComponent
    ], styles: ['\n.hrm-grid--striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)    > td[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n}\n.hrm-grid--striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%] {\n  background: var(--bg-surface-hover, var(--bg-surface-subtle));\n}\n.hrm-grid--card[_nghost-%COMP%]     .ant-table {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  overflow: visible;\n}\n.hrm-grid--card[_nghost-%COMP%]     .ant-table table {\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n.hrm-grid--card[_nghost-%COMP%]     thead th {\n  background: transparent;\n  border: 0 !important;\n  color: var(--text-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  padding: 4px 14px;\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-sub);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 12px 14px;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td:first-child {\n  border-left: 1px solid var(--border-sub);\n  border-top-left-radius: var(--radius-lg);\n  border-bottom-left-radius: var(--radius-lg);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr > td:last-child {\n  border-right: 1px solid var(--border-sub);\n  border-top-right-radius: var(--radius-lg);\n  border-bottom-right-radius: var(--radius-lg);\n}\n.hrm-grid--card[_nghost-%COMP%]     tbody > tr:hover > td {\n  background: var(--bg-surface-subtle);\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td, \n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th {\n  padding: var(--table-cell-pad, 8px 12px);\n  font-size: var(--table-font-size, 13px);\n}\n[data-density="compact"][_nghost-%COMP%] {\n  --table-cell-pad: 4px 10px;\n  --table-font-size: var(--fs-12);\n}\n[data-density="balanced"][_nghost-%COMP%] {\n  --table-cell-pad: 8px 12px;\n  --table-font-size: var(--fs-13);\n}\n[data-density="spacious"][_nghost-%COMP%] {\n  --table-cell-pad: 14px 16px;\n  --table-font-size: var(--fs-14);\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th {\n  background: var(--bg-surface-subtle);\n  font-weight: 600;\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n[_nghost-%COMP%]     .ant-table-content, \n[_nghost-%COMP%]     .ant-table-body {\n  overflow-x: auto;\n}\n[_nghost-%COMP%]     .ant-table-cell-fix-right, \n[_nghost-%COMP%]     .ant-table-cell-fix-left {\n  background: var(--bg-surface);\n  z-index: 3;\n}\n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-right, \n[_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-left {\n  background: var(--bg-surface-subtle);\n}\n[_nghost-%COMP%]     .ant-table-tbody > tr:hover > td, \n[_nghost-%COMP%]     .ant-table-tbody > tr.ant-table-row:hover > td {\n  background: var(--table-row-hover-bg, var(--bg-surface-subtle)) !important;\n}\n[_nghost-%COMP%]     .ant-table-thead > tr > th::before {\n  display: none !important;\n}\n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child), \n[data-dividers="columns"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n[data-dividers="grid"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child), \n[data-dividers="grid"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n[data-dividers="none"][_nghost-%COMP%]     .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table table {\n  table-layout: fixed;\n}\n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table-tbody > tr > td, \n.hrm-grid--truncate[_nghost-%COMP%]     .ant-table-thead > tr > th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-trunc[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-label {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-weight: 500;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-value {\n  color: var(--text-body);\n  vertical-align: middle;\n}\n.hrm-grid--record[_nghost-%COMP%]     .hg-rec-label {\n  border-right: 1px solid var(--border-sub);\n}\n.hg-th[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 0;\n}\n.hg-th--grab[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n.hg-th--grab[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.hg-lbl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  color: inherit;\n  font: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-transform: inherit;\n}\n.hg-lbl-t[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-grouprow[_ngcontent-%COMP%]    > th.hg-gh[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 4px 8px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n}\n.hg-grouprow[_ngcontent-%COMP%]    > th.hg-gh[_ngcontent-%COMP%]:not(.hg-gh--empty):not(:last-child)::after {\n  content: "";\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 60%;\n  width: 1px;\n  background: var(--border-sub);\n}\n.hg-grouprow[_ngcontent-%COMP%]    > th.hg-gh--empty[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n}\n.hg-gh-t[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.hg-lbl--sort[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.hg-lbl--sort[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n.hg-lbl--sort[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 2px;\n  border-radius: var(--radius-sm);\n}\n.hg-grip[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-grid;\n  place-items: center;\n  width: 12px;\n  height: 18px;\n  color: var(--text-soft);\n  cursor: grab;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-grip[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.hg-th--x[_ngcontent-%COMP%]:hover   .hg-grip[_ngcontent-%COMP%] {\n  opacity: .7;\n}\n.hg-sort[_ngcontent-%COMP%] {\n  flex: none;\n}\n.hg-sort--idle[_ngcontent-%COMP%] {\n  opacity: .4;\n  color: var(--text-soft);\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-lbl--sort[_ngcontent-%COMP%]:hover   .hg-sort--idle[_ngcontent-%COMP%] {\n  opacity: .75;\n}\n.hg-sort--on[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--primary-base);\n}\n.hg-sort-pri[_ngcontent-%COMP%] {\n  font-size: var(--fs-10, 10px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  line-height: 1;\n  margin-inline-start: 1px;\n}\n.hg-more[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  margin-inline-start: auto;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-th--x[_ngcontent-%COMP%]:hover   .hg-more[_ngcontent-%COMP%], \n.hg-more.ant-dropdown-open[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.hg-more[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface);\n  color: var(--text-strong);\n}\n.hg-more[_ngcontent-%COMP%]:focus-visible {\n  opacity: 1;\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n[_nghost-%COMP%]     .ant-table-thead > tr > th:not(.ant-table-cell-fix-left):not(.ant-table-cell-fix-right) {\n  position: relative;\n}\n.hg-resize[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  inset-inline-end: 0;\n  width: 12px;\n  height: 100%;\n  z-index: 6;\n  cursor: col-resize;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.hg-resize[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  inset-inline-end: 3px;\n  width: 1px;\n  height: 45%;\n  background: var(--border-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ant-table-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:hover   .hg-resize[_ngcontent-%COMP%]::after, \n.hg-resize[_ngcontent-%COMP%]:hover::after {\n  background: var(--text-soft);\n  width: 2px;\n}\n.hg-resize[_ngcontent-%COMP%]:active::after {\n  background: var(--primary-base);\n  width: 2px;\n}\n.hg-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n}\n.hg-colbtn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-colbtn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.hg-colbtn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.hg-colbtn-n[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n}\n[_nghost-%COMP%]     .hg-menu li[nz-menu-item] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n[_nghost-%COMP%]     .hg-menu .hg-mi-off {\n  opacity: .5;\n}\n.hg-grp[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n}\n.hg-grp[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n}\n.hg-grp-tog[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  vertical-align: middle;\n}\n.hg-grp-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.hg-grp-n[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-full, 999px);\n  padding: 0 8px;\n}\n/*# sourceMappingURL=hrm-grid.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmGrid, [{
    type: Component,
    args: [{ selector: "hrm-grid", imports: [
      NzTableModule,
      NgTemplateOutlet,
      NzTooltipDirective,
      NzDropDownModule,
      NzMenuModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      TablerIconComponent
    ], template: `
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
    <!-- v1.4 \u2014 thanh "C\u1ED9t" xu\u1EA5t hi\u1EC7n KHI \u0111\xE3 t\xF9y bi\u1EBFn (\u1EA9n/\u0111\u1ED5i th\u1EE9 t\u1EF1/ghim/\u0111\u1ED5i r\u1ED9ng) \u2192 b\u1EA3ng
         ch\u01B0a \u0111\u1EE5ng KH\xD4NG m\u1ECDc bar. Ch\u1EE9a: hi\u1EC7n l\u1EA1i c\u1ED9t \u0111\xE3 \u1EA9n + n\xFAt \u0110\u1EB7t l\u1EA1i (v\u1EC1 m\u1EB7c \u0111\u1ECBnh). -->
    @if (customizable() && isDirty()) {
      <div class="hg-bar">
        <button type="button" class="hg-colbtn" nz-dropdown [nzDropdownMenu]="colsMenu" nzTrigger="click"
          [attr.aria-label]="colsBtnLabel()">
          <tabler-icon [icon]="icColumns" [size]="16" />
          @if (colsBtnLabel()) { <span>{{ colsBtnLabel() }}</span> }
          @if (hiddenCount() > 0) { <span class="hg-colbtn-n">{{ hiddenCount() }}</span> }
        </button>
        <nz-dropdown-menu #colsMenu="nzDropdownMenu">
          <ul nz-menu class="hg-menu hg-menu--cols">
            @for (c of pickerColumns(); track c.key) {
              <li nz-menu-item [nzDisabled]="c.hideable === false"
                (click)="toggleHidden(c.key, $event)">
                <tabler-icon [icon]="isHidden(c.key) ? icEyeOff : icEye" [size]="16"
                  [class.hg-mi-off]="isHidden(c.key)" />
                <span>{{ c.title }}</span>
              </li>
            }
            <li nz-menu-divider></li>
            <li nz-menu-item (click)="resetLayout()"><span>{{ resetLabel() }}</span></li>
          </ul>
        </nz-dropdown-menu>
      </div>
    }
    <nz-table
      #t
      [nzData]="displayData()"
      [nzLoading]="loading()"
      [nzBordered]="bordered()"
      [nzSize]="size()"
      [nzShowPagination]="showPagination() && rowGroups().length === 0"
      [nzPageSize]="pageSize()"
      [nzScroll]="scrollObj()"
      [nzTableLayout]="tableLayout()"
      [class.hrm-grid--striped]="striped()">
      <thead>
        @if (headerGroups().hasGroup) {
          <tr class="hg-grouprow">
            @if (selectable()) { <th class="hg-gh hg-gh--empty" nzWidth="48px"></th> }
            @for (cell of headerGroups().cells; track $index) {
              <th [attr.colspan]="cell.span" class="hg-gh" [class.hg-gh--empty]="!cell.grouped">
                @if (cell.grouped) { <span class="hg-gh-t">{{ cell.title }}</span> }
              </th>
            }
          </tr>
        }
        <tr cdkDropList cdkDropListOrientation="horizontal"
          [cdkDropListConnectedTo]="groupConnectedTo()"
          [cdkDropListDisabled]="!reorderable() && groupConnectedTo().length === 0" (cdkDropListDropped)="onColDrop($event)">
          @if (selectable()) {
            <th nzWidth="48px" nzShowCheckbox
              [nzChecked]="allChecked()" [nzIndeterminate]="indeterminate()"
              (nzCheckedChange)="checkAll($event)"></th>
          }
          @for (c of viewColumns(); track c.key) {
            <th cdkDrag [cdkDragData]="c.key" [cdkDragDisabled]="!canDragHeader(c)"
              [style.width]="colWidth(c)" [style.minWidth]="colMinWidth(c)" [style.textAlign]="c.align || 'left'"
              [nzRight]="c.fixed === 'right'" [nzLeft]="c.fixed === 'left'"
              [attr.aria-sort]="ariaSort(c)" [attr.data-key]="c.key">
              <div class="hg-th" [class.hg-th--x]="reorderable() || customizable() || groupConnectedTo().length > 0"
                [class.hg-th--grab]="canDragHeader(c) && !canReorder(c)"
                [style.justifyContent]="c.align === 'right' ? 'flex-end' : (c.align === 'center' ? 'center' : 'flex-start')">
                @if (canDragHeader(c)) {
                  <span class="hg-grip" cdkDragHandle aria-hidden="true"><tabler-icon [icon]="icGrip" [size]="12" /></span>
                }
                @if (c.sortable) {
                  <button type="button" class="hg-lbl hg-lbl--sort" (click)="cycleSort(c.key)"
                    [attr.aria-label]="c.title">
                    <span class="hg-lbl-t">{{ c.title }}</span>
                    @if (sortActive(c.key)) {
                      <tabler-icon class="hg-sort hg-sort--on" [icon]="sortDir(c.key) === 'asc' ? icUp : icDown" [size]="14" />
                      @if (sortPriority(c.key); as pr) { <span class="hg-sort-pri">{{ pr }}</span> }
                    } @else {
                      <tabler-icon class="hg-sort hg-sort--idle" [icon]="icSortIdle" [size]="14" />
                    }
                  </button>
                } @else {
                  <span class="hg-lbl"><span class="hg-lbl-t">{{ c.title }}</span></span>
                }
                @if (customizable() && !isStructural(c)) {
                  <button type="button" class="hg-more" nz-dropdown [nzDropdownMenu]="colMenu"
                    nzTrigger="click" (click)="$event.stopPropagation()" [attr.aria-label]="c.title">
                    <tabler-icon [icon]="icMore" [size]="14" />
                  </button>
                  <nz-dropdown-menu #colMenu="nzDropdownMenu">
                    <!-- Menu \u22EF CH\u1EC8 Ghim + \u1EA8n. S\u1EAFp x\u1EBFp = click ti\xEAu \u0111\u1EC1 (m\u0169i t\xEAn hover/ghim);
                         \u0111\u1ED5i th\u1EE9 t\u1EF1 = k\xE9o grip \u283F \u2014 kh\xF4ng l\u1EB7p l\u1EA1i trong menu cho g\u1ECDn. -->
                    <ul nz-menu class="hg-menu">
                      <li nz-menu-item [nzDisabled]="c.fixed === 'left'" (click)="setPin(c.key, 'left')"><tabler-icon [icon]="icPinned" [size]="16" /><span>{{ pinLeftLabel() }}</span></li>
                      <li nz-menu-item [nzDisabled]="c.fixed === 'right'" (click)="setPin(c.key, 'right')"><tabler-icon [icon]="icPinned" [size]="16" /><span>{{ pinRightLabel() }}</span></li>
                      @if (c.fixed) {
                        <li nz-menu-item (click)="setPin(c.key, null)"><tabler-icon [icon]="icPinOff" [size]="16" /><span>{{ pinClearLabel() }}</span></li>
                      }
                      @if (c.hideable !== false) {
                        <li nz-menu-divider></li>
                        <li nz-menu-item (click)="hideCol(c.key)"><tabler-icon [icon]="icEyeOff" [size]="16" /><span>{{ hideLabel() }}</span></li>
                      }
                    </ul>
                  </nz-dropdown-menu>
                }
              </div>
              <!-- Tay k\xE9o \u0111\u1ED9 r\u1ED9ng c\u1ED9t: r\xEA \u1EDF c\u1EA1nh ph\u1EA3i header. pointerdown ch\u1EB7n c\u1EA3 sort(click) l\u1EABn grip(drag). -->
              @if (resizable() && !isStructural(c)) {
                <span class="hg-resize" (pointerdown)="startResize($event, c.key)"
                  (click)="$event.stopPropagation()" aria-hidden="true"></span>
              }
            </th>
          }
        </tr>
      </thead>
      <tbody>
        @if (rowGroups().length) {
          <!-- NH\xD3M D\u1EEE LI\u1EC6U: iterate danh s\xE1ch ph\u1EB3ng (group-header + row) t\u1EEB groupedRender(); KH\xD4NG ph\xE2n trang. -->
          @for (item of groupedRender(); track item.id) {
            @if (item.kind === 'group') {
              <tr class="hg-grp">
                <td [attr.colspan]="colCount()">
                  <button type="button" class="hg-grp-tog" (click)="toggleGroup(item.path!)">
                    <tabler-icon [icon]="isCollapsed(item.path!) ? icChevRight : icChevDown" [size]="14" />
                  </button>
                  <span class="hg-grp-lbl" [style.margin-left.px]="item.depth * 16">{{ item.label }}</span>
                  <span class="hg-grp-n">{{ item.count }}</span>
                </td>
              </tr>
            } @else {
              <tr (click)="rowClick.emit(item.row!)">
                @if (selectable()) {
                  <td nzShowCheckbox [nzChecked]="isChecked(item.row!)"
                    (click)="$event.stopPropagation()"
                    (nzCheckedChange)="checkOne(item.row!, $event)"></td>
                }
                @for (c of viewColumns(); track c.key) {
                  <td [style.textAlign]="c.align || 'left'"
                    [nzRight]="c.fixed === 'right'" [nzLeft]="c.fixed === 'left'">
                    @if (c.cell) {
                      <ng-container [ngTemplateOutlet]="c.cell" [ngTemplateOutletContext]="{ $implicit: item.row!, value: item.row![c.key] }" />
                    } @else if (textOverflow() === 'truncate') {
                      <!-- \xD4 b\u1ECB c\u1EAFt "\u2026" \u2192 r\xEA chu\u1ED9t hi\u1EC7n tooltip full n\u1ED9i dung (ch\u1EC9 khi th\u1EADt s\u1EF1 tr\xE0n). -->
                      <span class="hg-trunc" nz-tooltip [nzTooltipTitle]="truncTip()"
                        (mouseenter)="onTruncEnter($event, item.row![c.key])">{{ item.row![c.key] }}</span>
                    } @else {
                      {{ item.row![c.key] }}
                    }
                  </td>
                }
              </tr>
            }
          }
        } @else {
        @for (row of t.data; track rowKeyOf(row)) {
          <tr (click)="rowClick.emit(row)">
            @if (selectable()) {
              <td nzShowCheckbox [nzChecked]="isChecked(row)"
                (click)="$event.stopPropagation()"
                (nzCheckedChange)="checkOne(row, $event)"></td>
            }
            @for (c of viewColumns(); track c.key) {
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
    }, styles: ['/* angular:styles/component:css;1c062a5c79f474463e6c886fac316748233d59c51a261a8d55da8a9540e92b64;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts */\n.hrm-grid--striped tbody tr:nth-child(even) > td {\n  background: var(--bg-surface-subtle);\n}\n.hrm-grid--striped tbody tr:hover > td {\n  background: var(--bg-surface-hover, var(--bg-surface-subtle));\n}\n:host(.hrm-grid--card) ::ng-deep .ant-table {\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  overflow: visible;\n}\n:host(.hrm-grid--card) ::ng-deep .ant-table table {\n  border-collapse: separate;\n  border-spacing: 0 8px;\n}\n:host(.hrm-grid--card) ::ng-deep thead th {\n  background: transparent;\n  border: 0 !important;\n  color: var(--text-sub);\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .03em;\n  padding: 4px 14px;\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td {\n  background: var(--bg-surface);\n  border-top: 1px solid var(--border-sub);\n  border-bottom: 1px solid var(--border-sub);\n  padding: 12px 14px;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td:first-child {\n  border-left: 1px solid var(--border-sub);\n  border-top-left-radius: var(--radius-lg);\n  border-bottom-left-radius: var(--radius-lg);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr > td:last-child {\n  border-right: 1px solid var(--border-sub);\n  border-top-right-radius: var(--radius-lg);\n  border-bottom-right-radius: var(--radius-lg);\n}\n:host(.hrm-grid--card) ::ng-deep tbody > tr:hover > td {\n  background: var(--bg-surface-subtle);\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td,\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th {\n  padding: var(--table-cell-pad, 8px 12px);\n  font-size: var(--table-font-size, 13px);\n}\n:host([data-density="compact"]) {\n  --table-cell-pad: 4px 10px;\n  --table-font-size: var(--fs-12);\n}\n:host([data-density="balanced"]) {\n  --table-cell-pad: 8px 12px;\n  --table-font-size: var(--fs-13);\n}\n:host([data-density="spacious"]) {\n  --table-cell-pad: 14px 16px;\n  --table-font-size: var(--fs-14);\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th {\n  background: var(--bg-surface-subtle);\n  font-weight: 600;\n  color: var(--text-sub);\n  border-bottom: 1px solid var(--border-sub);\n}\n:host ::ng-deep .ant-table-content,\n:host ::ng-deep .ant-table-body {\n  overflow-x: auto;\n}\n:host ::ng-deep .ant-table-cell-fix-right,\n:host ::ng-deep .ant-table-cell-fix-left {\n  background: var(--bg-surface);\n  z-index: 3;\n}\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-right,\n:host ::ng-deep .ant-table.ant-table-small .ant-table-thead .ant-table-cell-fix-left {\n  background: var(--bg-surface-subtle);\n}\n:host ::ng-deep .ant-table-tbody > tr:hover > td,\n:host ::ng-deep .ant-table-tbody > tr.ant-table-row:hover > td {\n  background: var(--table-row-hover-bg, var(--bg-surface-subtle)) !important;\n}\n:host ::ng-deep .ant-table-thead > tr > th::before {\n  display: none !important;\n}\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child),\n:host([data-dividers="columns"]) ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n:host([data-dividers="grid"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td:not(:last-child),\n:host([data-dividers="grid"]) ::ng-deep .ant-table.ant-table-small .ant-table-thead > tr > th:not(:last-child) {\n  border-right: 1px solid var(--border-sub);\n}\n:host([data-dividers="none"]) ::ng-deep .ant-table.ant-table-small .ant-table-tbody > tr > td {\n  border-bottom: 0;\n}\n:host(.hrm-grid--truncate) ::ng-deep .ant-table table {\n  table-layout: fixed;\n}\n:host(.hrm-grid--truncate) ::ng-deep .ant-table-tbody > tr > td,\n:host(.hrm-grid--truncate) ::ng-deep .ant-table-thead > tr > th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-trunc {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-label {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  font-weight: 500;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-value {\n  color: var(--text-body);\n  vertical-align: middle;\n}\n:host(.hrm-grid--record) ::ng-deep .hg-rec-label {\n  border-right: 1px solid var(--border-sub);\n}\n.hg-th {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 0;\n}\n.hg-th--grab {\n  cursor: grab;\n}\n.hg-th--grab:active {\n  cursor: grabbing;\n}\n.hg-lbl {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  color: inherit;\n  font: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-transform: inherit;\n}\n.hg-lbl-t {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hg-grouprow > th.hg-gh {\n  position: relative;\n  text-align: center;\n  padding: 4px 8px;\n  background: var(--bg-surface-subtle);\n  border-bottom: 1px solid var(--border-sub);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n}\n.hg-grouprow > th.hg-gh:not(.hg-gh--empty):not(:last-child)::after {\n  content: "";\n  position: absolute;\n  inset-inline-end: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 60%;\n  width: 1px;\n  background: var(--border-sub);\n}\n.hg-grouprow > th.hg-gh--empty {\n  background: var(--bg-surface-subtle);\n}\n.hg-gh-t {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.hg-lbl--sort {\n  cursor: pointer;\n}\n.hg-lbl--sort:hover {\n  color: var(--text-strong);\n}\n.hg-lbl--sort:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 2px;\n  border-radius: var(--radius-sm);\n}\n.hg-grip {\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  display: inline-grid;\n  place-items: center;\n  width: 12px;\n  height: 18px;\n  color: var(--text-soft);\n  cursor: grab;\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-grip:active {\n  cursor: grabbing;\n}\n.hg-th--x:hover .hg-grip {\n  opacity: .7;\n}\n.hg-sort {\n  flex: none;\n}\n.hg-sort--idle {\n  opacity: .4;\n  color: var(--text-soft);\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-lbl--sort:hover .hg-sort--idle {\n  opacity: .75;\n}\n.hg-sort--on {\n  opacity: 1;\n  color: var(--primary-base);\n}\n.hg-sort-pri {\n  font-size: var(--fs-10, 10px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  line-height: 1;\n  margin-inline-start: 1px;\n}\n.hg-more {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  margin-inline-start: auto;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--text-soft);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-th--x:hover .hg-more,\n.hg-more.ant-dropdown-open {\n  opacity: 1;\n}\n.hg-more:hover {\n  background: var(--bg-surface);\n  color: var(--text-strong);\n}\n.hg-more:focus-visible {\n  opacity: 1;\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n:host ::ng-deep .ant-table-thead > tr > th:not(.ant-table-cell-fix-left):not(.ant-table-cell-fix-right) {\n  position: relative;\n}\n.hg-resize {\n  position: absolute;\n  top: 0;\n  inset-inline-end: 0;\n  width: 12px;\n  height: 100%;\n  z-index: 6;\n  cursor: col-resize;\n  touch-action: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.hg-resize::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  inset-inline-end: 3px;\n  width: 1px;\n  height: 45%;\n  background: var(--border-sub);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ant-table-thead > tr > th:hover .hg-resize::after,\n.hg-resize:hover::after {\n  background: var(--text-soft);\n  width: 2px;\n}\n.hg-resize:active::after {\n  background: var(--primary-base);\n  width: 2px;\n}\n.hg-bar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n}\n.hg-colbtn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 30px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.hg-colbtn:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.hg-colbtn:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.hg-colbtn-n {\n  display: inline-grid;\n  place-items: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n}\n:host ::ng-deep .hg-menu li[nz-menu-item] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n:host ::ng-deep .hg-menu .hg-mi-off {\n  opacity: .5;\n}\n.hg-grp {\n  background: var(--bg-surface-subtle);\n}\n.hg-grp > td {\n  padding: 6px 12px;\n}\n.hg-grp-tog {\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  vertical-align: middle;\n}\n.hg-grp-lbl {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.hg-grp-n {\n  margin-left: 8px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-full, 999px);\n  padding: 0 8px;\n}\n/*# sourceMappingURL=hrm-grid.css.map */\n'] }]
  }], () => [], { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showPagination: [{ type: Input, args: [{ isSignal: true, alias: "showPagination", required: false }] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }], scroll: [{ type: Input, args: [{ isSignal: true, alias: "scroll", required: false }] }], minWidth: [{ type: Input, args: [{ isSignal: true, alias: "minWidth", required: false }] }], striped: [{ type: Input, args: [{ isSignal: true, alias: "striped", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], record: [{ type: Input, args: [{ isSignal: true, alias: "record", required: false }] }], labelWidth: [{ type: Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], density: [{ type: Input, args: [{ isSignal: true, alias: "density", required: false }] }], dividers: [{ type: Input, args: [{ isSignal: true, alias: "dividers", required: false }] }], textOverflow: [{ type: Input, args: [{ isSignal: true, alias: "textOverflow", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], rowClick: [{ type: Output, args: ["rowClick"] }], rowGroups: [{ type: Input, args: [{ isSignal: true, alias: "rowGroups", required: false }] }], columnGroups: [{ type: Input, args: [{ isSignal: true, alias: "columnGroups", required: false }] }], groupConnectedTo: [{ type: Input, args: [{ isSignal: true, alias: "groupConnectedTo", required: false }] }], groupLabelFormatter: [{ type: Input, args: [{ isSignal: true, alias: "groupLabelFormatter", required: false }] }], reorderable: [{ type: Input, args: [{ isSignal: true, alias: "reorderable", required: false }] }], customizable: [{ type: Input, args: [{ isSignal: true, alias: "customizable", required: false }] }], resizable: [{ type: Input, args: [{ isSignal: true, alias: "resizable", required: false }] }], tableId: [{ type: Input, args: [{ isSignal: true, alias: "tableId", required: false }] }], colsBtnLabel: [{ type: Input, args: [{ isSignal: true, alias: "colsBtnLabel", required: false }] }], resetLabel: [{ type: Input, args: [{ isSignal: true, alias: "resetLabel", required: false }] }], pinLeftLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinLeftLabel", required: false }] }], pinRightLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinRightLabel", required: false }] }], pinClearLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinClearLabel", required: false }] }], hideLabel: [{ type: Input, args: [{ isSignal: true, alias: "hideLabel", required: false }] }], hiddenKeys: [{ type: Input, args: [{ isSignal: true, alias: "hiddenKeys", required: false }] }, { type: Output, args: ["hiddenKeysChange"] }], sortLevels: [{ type: Input, args: [{ isSignal: true, alias: "sortLevels", required: false }] }, { type: Output, args: ["sortLevelsChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmGrid, { className: "HrmGrid", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-grid.ts", lineNumber: 461 });
})();

export {
  HrmGrid
};
//# sourceMappingURL=chunk-IHUB5HQS.js.map
