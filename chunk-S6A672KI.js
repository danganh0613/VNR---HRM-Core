import {
  HrmRangePicker
} from "./chunk-N5JCH7W2.js";
import {
  HrmDatePicker
} from "./chunk-RKQLONQG.js";
import {
  HrmInputNumber
} from "./chunk-QRKELULO.js";
import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import {
  HrmSegmented
} from "./chunk-IETGC4TN.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-BKAPBN54.js";
import {
  HrmInput
} from "./chunk-XC26CQEC.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VA24G7CQ.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import {
  Filter,
  Plus,
  Restore,
  Search,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  input,
  model,
  output,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-entry/hrm-filter-panel.ts
var _c0 = ["panelEl"];
var _c1 = () => [];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
function HrmFilterPanel_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeCount());
  }
}
function HrmFilterPanel_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.panelSubtitle());
  }
}
function HrmFilterPanel_For_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 25);
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("icon", f_r2.icon)("size", 16);
  }
}
function HrmFilterPanel_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 31);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Conditional_5_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const f_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setOp(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r0.opFlatOptions(f_r2))("groups", ctx_r0.opGroupOptions(f_r2))("allowClear", false)("showSearch", false)("ngModel", ctx_r0.rowOf(f_r2.key).operator);
  }
}
function HrmFilterPanel_For_19_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.noValueText());
  }
}
function HrmFilterPanel_For_19_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "hrm-input-number", 32);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_8_Template_hrm_input_number_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const f_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setNumRange(f_r2.key, 0, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-input-number", 32);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_8_Template_hrm_input_number_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const f_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setNumRange(f_r2.key, 1, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.numRange(f_r2.key)[0]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.numRange(f_r2.key)[1]);
  }
}
function HrmFilterPanel_For_19_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-date-picker", 32);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_9_Template_hrm_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const f_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 38);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_0_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", f_r2.placeholder ?? "")("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 39);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_1_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", f_r2.options ?? \u0275\u0275pureFunction0(3, _c1))("placeholder", f_r2.placeholder ?? "")("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-select", 40);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_2_Template_hrm_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("multiple", true)("options", f_r2.options ?? \u0275\u0275pureFunction0(4, _c1))("placeholder", f_r2.placeholder ?? "")("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input-number", 38);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_3_Template_hrm_input_number_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", f_r2.placeholder ?? "")("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-range-picker", 32);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_4_Template_hrm_range_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-segmented", 41);
    \u0275\u0275listener("ngModelChange", function HrmFilterPanel_For_19_Case_10_Case_5_Template_hrm_segmented_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const f_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setVal(f_r2.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", f_r2.options ?? \u0275\u0275pureFunction0(2, _c1))("ngModel", ctx_r0.rowOf(f_r2.key).value);
  }
}
function HrmFilterPanel_For_19_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmFilterPanel_For_19_Case_10_Case_0_Template, 1, 2, "hrm-input", 34)(1, HrmFilterPanel_For_19_Case_10_Case_1_Template, 1, 4, "hrm-select", 35)(2, HrmFilterPanel_For_19_Case_10_Case_2_Template, 1, 5, "hrm-select", 36)(3, HrmFilterPanel_For_19_Case_10_Case_3_Template, 1, 2, "hrm-input-number", 34)(4, HrmFilterPanel_For_19_Case_10_Case_4_Template, 1, 1, "hrm-range-picker", 30)(5, HrmFilterPanel_For_19_Case_10_Case_5_Template, 1, 3, "hrm-segmented", 37);
  }
  if (rf & 2) {
    let tmp_14_0;
    const f_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_14_0 = f_r2.type) === "text" ? 0 : tmp_14_0 === "select" ? 1 : tmp_14_0 === "multi" ? 2 : tmp_14_0 === "number" ? 3 : tmp_14_0 === "date-range" ? 4 : tmp_14_0 === "segmented" ? 5 : -1);
  }
}
function HrmFilterPanel_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 24);
    \u0275\u0275conditionalCreate(2, HrmFilterPanel_For_19_Conditional_2_Template, 1, 2, "tabler-icon", 25);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, HrmFilterPanel_For_19_Conditional_5_Template, 1, 5, "hrm-select", 26);
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275conditionalCreate(7, HrmFilterPanel_For_19_Case_7_Template, 2, 1, "span", 28)(8, HrmFilterPanel_For_19_Case_8_Template, 5, 2, "div", 29)(9, HrmFilterPanel_For_19_Case_9_Template, 1, 1, "hrm-date-picker", 30)(10, HrmFilterPanel_For_19_Case_10_Template, 6, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const f_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(f_r2.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.opsOf(f_r2).length ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("fp-row-value--full", !ctx_r0.opsOf(f_r2).length);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r0.inputKind(f_r2, ctx_r0.rowOf(f_r2.key).operator)) === "none" ? 7 : tmp_17_0 === "range" ? 8 : tmp_17_0 === "date" ? 9 : 10);
  }
}
function HrmFilterPanel_For_37_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function HrmFilterPanel_For_37_For_3_Template_button_click_0_listener() {
      const f_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleField(f_r13.key));
    });
    \u0275\u0275element(1, "label", 45);
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzChecked", ctx_r0.shownKeys().has(f_r13.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r13.label);
  }
}
function HrmFilterPanel_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, HrmFilterPanel_For_37_For_3_Template, 4, 2, "button", 43, _forTrack0);
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r14.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r14.fields);
  }
}
var EMPTY_OPS = [
  { id: "empty", label: "\u0110\u1EC3 tr\u1ED1ng", input: "none" },
  { id: "notEmpty", label: "Kh\xF4ng tr\u1ED1ng", input: "none" }
];
var DEFAULT_OPS = {
  text: [
    { id: "contains", label: "Ch\u1EE9a" },
    { id: "notContains", label: "Kh\xF4ng ch\u1EE9a" },
    { id: "startsWith", label: "B\u1EAFt \u0111\u1EA7u b\u1EB1ng" },
    ...EMPTY_OPS
  ],
  select: [
    { id: "is", label: "L\xE0" },
    { id: "isNot", label: "Kh\xE1c" },
    ...EMPTY_OPS
  ],
  multi: [
    { id: "in", label: "L\xE0 m\u1ED9t trong" },
    { id: "notIn", label: "Kh\xF4ng thu\u1ED9c" },
    ...EMPTY_OPS
  ],
  number: [
    { id: "eq", label: "B\u1EB1ng" },
    { id: "gte", label: "T\u1EEB (\u2265)" },
    { id: "lte", label: "\u0110\u1EBFn (\u2264)" },
    { id: "between", label: "Trong kho\u1EA3ng", input: "range" }
  ],
  "date-range": [
    { id: "between", label: "Trong kho\u1EA3ng" },
    { id: "onOrAfter", label: "T\u1EEB ng\xE0y", input: "date" },
    { id: "before", label: "Tr\u01B0\u1EDBc ng\xE0y", input: "date" },
    { id: "today", label: "H\xF4m nay", input: "none" },
    { id: "thisWeek", label: "Tu\u1EA7n n\xE0y", input: "none" },
    { id: "thisMonth", label: "Th\xE1ng n\xE0y", input: "none" },
    { id: "lastMonth", label: "Th\xE1ng tr\u01B0\u1EDBc", input: "none" },
    { id: "next30d", label: "30 ng\xE0y t\u1EDBi", input: "none" }
  ],
  segmented: []
};
var HrmFilterPanel = class _HrmFilterPanel {
  constructor() {
    this.label = input("B\u1ED9 l\u1ECDc", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.panelTitle = input("", ...ngDevMode ? [{ debugName: "panelTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.panelSubtitle = input("", ...ngDevMode ? [{ debugName: "panelSubtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(Filter, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fields = input([], ...ngDevMode ? [{ debugName: "fields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.conditions = model([], ...ngDevMode ? [{ debugName: "conditions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resetLabel = input("\u0110\u1EB7t l\u1EA1i", ...ngDevMode ? [{ debugName: "resetLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applyLabel = input("\xC1p d\u1EE5ng", ...ngDevMode ? [{ debugName: "applyLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cancelLabel = input("H\u1EE7y", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm \u0111i\u1EC1u ki\u1EC7n", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = input("T\xECm \u0111i\u1EC1u ki\u1EC7n", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.noValueText = input("Kh\xF4ng c\u1EA7n nh\u1EADp gi\xE1 tr\u1ECB", ...ngDevMode ? [{ debugName: "noValueText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.opGroupCompare = input("So s\xE1nh", ...ngDevMode ? [{ debugName: "opGroupCompare" }] : (
      /* istanbul ignore next */
      []
    ));
    this.opGroupQuick = input("Ch\u1ECDn nhanh", ...ngDevMode ? [{ debugName: "opGroupQuick" }] : (
      /* istanbul ignore next */
      []
    ));
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.apply = output();
    this.clear = output();
    this.restoreIcon = Restore;
    this.searchIcon = Search;
    this.plusIcon = Plus;
    this.pickerOpen = signal(false, ...ngDevMode ? [{ debugName: "pickerOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pickerQuery = signal("", ...ngDevMode ? [{ debugName: "pickerQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shownKeys = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "shownKeys" }] : (
      /* istanbul ignore next */
      []
    ));
    this.draft = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "draft" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeCount = computed(() => this.conditions().length, ...ngDevMode ? [{ debugName: "activeCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shownFields = computed(() => this.fields().filter((f) => this.shownKeys().has(f.key)), ...ngDevMode ? [{ debugName: "shownFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pickerGroups = computed(() => {
      const q = this.norm(this.pickerQuery().trim());
      const groups = [];
      for (const f of this.fields()) {
        if (f.fixed)
          continue;
        if (q && !this.norm(f.label).includes(q))
          continue;
        const label = f.group ?? "";
        let g = groups.find((x) => x.label === label);
        if (!g) {
          g = { label, fields: [] };
          groups.push(g);
        }
        g.fields.push(f);
      }
      return groups;
    }, ...ngDevMode ? [{ debugName: "pickerGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.panelEl = viewChild("panelEl", ...ngDevMode ? [{ debugName: "panelEl" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  opsOf(f) {
    return f.operators ?? DEFAULT_OPS[f.type];
  }
  opDef(f, id) {
    return this.opsOf(f).find((o) => o.id === id);
  }
  /** Loại ô giá trị cho toán tử hiện tại. */
  inputKind(f, opId) {
    return this.opDef(f, opId)?.input ?? "default";
  }
  /** Dropdown toán tử: có preset/valueless → chia 2 nhóm (So sánh / Chọn nhanh) cho rõ mô hình. */
  opGroupOptions(f) {
    const ops = this.opsOf(f);
    const quick = ops.filter((o) => o.input === "none");
    if (!quick.length)
      return [];
    const compare = ops.filter((o) => o.input !== "none");
    return [
      { label: this.opGroupCompare(), options: compare.map((o) => ({ value: o.id, label: o.label })) },
      { label: this.opGroupQuick(), options: quick.map((o) => ({ value: o.id, label: o.label })) }
    ];
  }
  opFlatOptions(f) {
    if (this.opGroupOptions(f).length)
      return [];
    return this.opsOf(f).map((o) => ({ value: o.id, label: o.label }));
  }
  rowOf(key) {
    return this.draft().get(key) ?? this.emptyRow(this.fields().find((f) => f.key === key));
  }
  /** Toán tử mặc định của field: defaultOperator → toán tử ĐẦU TIÊN có ô giá trị (không lấy valueless). */
  defaultOp(f) {
    const ops = this.opsOf(f);
    if (f.defaultOperator && ops.some((o) => o.id === f.defaultOperator))
      return f.defaultOperator;
    return (ops.find((o) => (o.input ?? "default") !== "none") ?? ops[0])?.id ?? "";
  }
  emptyRow(f) {
    if (!f)
      return { operator: "", value: null };
    const op = this.defaultOp(f);
    switch (f.type) {
      case "text":
        return { operator: op, value: "" };
      case "multi":
        return { operator: op, value: [] };
      case "segmented":
        return { operator: op, value: f.options?.[0]?.value ?? "" };
      default:
        return { operator: op, value: null };
    }
  }
  /** Hàng coi là "chưa lọc" (không commit, không đếm). Toán tử valueless → LUÔN là điều kiện.
   *  Segmented: option đầu = tất cả. Number khoảng: cần ít nhất 1 đầu. */
  isEmpty(f, r) {
    const kind = this.inputKind(f, r.operator);
    if (kind === "none")
      return false;
    const v = r.value;
    if (v == null)
      return true;
    if (kind === "range")
      return !Array.isArray(v) || v[0] == null && v[1] == null;
    if (kind === "date")
      return false;
    if (f.type === "text")
      return String(v).trim() === "";
    if (f.type === "multi")
      return !Array.isArray(v) || v.length === 0;
    if (f.type === "segmented")
      return v === (f.options?.[0]?.value ?? "");
    if (f.type === "date-range")
      return !Array.isArray(v) || v.length !== 2;
    return v === "";
  }
  onVisible(v) {
    this.open.set(v);
    if (v) {
      this.seedDraft();
      this.nudgeOverlay();
    } else {
      this.pickerOpen.set(false);
    }
  }
  /** Mở panel: dựng draft từ điều kiện ĐÃ áp + trường mặc định. */
  seedDraft() {
    const applied = new Map(this.conditions().map((c) => [c.key, c]));
    const shown = /* @__PURE__ */ new Set();
    const draft = /* @__PURE__ */ new Map();
    for (const f of this.fields()) {
      const isShown = f.fixed || f.visible || applied.has(f.key);
      if (!isShown)
        continue;
      shown.add(f.key);
      const a = applied.get(f.key);
      draft.set(f.key, a ? { operator: a.operator, value: a.value } : this.emptyRow(f));
    }
    this.shownKeys.set(shown);
    this.draft.set(draft);
  }
  setOp(key, op) {
    const f = this.fields().find((x) => x.key === key);
    const cur = this.rowOf(key);
    const m = new Map(this.draft());
    const shapeChanged = !!f && this.inputKind(f, op) !== this.inputKind(f, cur.operator);
    m.set(key, { operator: op, value: shapeChanged ? this.emptyRow(f).value : cur.value });
    this.draft.set(m);
  }
  setVal(key, val) {
    const m = new Map(this.draft());
    m.set(key, __spreadProps(__spreadValues({}, this.rowOf(key)), { value: val }));
    this.draft.set(m);
  }
  numRange(key) {
    const v = this.rowOf(key).value;
    return Array.isArray(v) ? [v[0] ?? null, v[1] ?? null] : [null, null];
  }
  setNumRange(key, idx, val) {
    const cur = this.numRange(key);
    const next = idx === 0 ? [val, cur[1]] : [cur[0], val];
    this.setVal(key, next);
  }
  commit() {
    const out = [];
    for (const f of this.shownFields()) {
      const r = this.rowOf(f.key);
      if (!this.isEmpty(f, r))
        out.push({ key: f.key, operator: r.operator, value: r.value });
    }
    this.conditions.set(out);
    this.apply.emit(out);
    this.open.set(false);
  }
  cancel() {
    this.open.set(false);
  }
  resetDraft() {
    const draft = /* @__PURE__ */ new Map();
    for (const f of this.shownFields())
      draft.set(f.key, this.emptyRow(f));
    this.draft.set(draft);
    this.clear.emit();
  }
  /* ---- Picker ---- */
  onPickerSearch(e) {
    this.pickerQuery.set(e.target.value);
  }
  norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111]/g, "d");
  }
  toggleField(key) {
    const shown = new Set(this.shownKeys());
    const m = new Map(this.draft());
    if (shown.has(key)) {
      shown.delete(key);
      m.delete(key);
    } else {
      shown.add(key);
      if (!m.has(key))
        m.set(key, this.emptyRow(this.fields().find((f) => f.key === key)));
    }
    this.shownKeys.set(shown);
    this.draft.set(m);
    this.nudgeOverlay();
  }
  /** Panel đổi chiều cao SAU khi overlay đã mở (thêm/gỡ hàng) — CDK không tự reposition nên
   *  footer có thể trôi khỏi viewport (bug: không bấm được Áp dụng). Tự đo khoảng trống còn lại
   *  dưới mép trên panel và GHIM max-height theo đó: body cuộn, footer luôn trong màn.
   *  Overlay attach bất đồng bộ → đo trễ 2 nhịp; viewChild có thể chưa thấy template trong
   *  overlay → fallback query DOM (chỉ 1 dropdown mở tại 1 thời điểm). */
  nudgeOverlay() {
    if (typeof window === "undefined")
      return;
    setTimeout(() => {
      const el = this.panelEl()?.nativeElement ?? document.querySelector(".fp-panel");
      if (!el)
        return;
      const top = el.getBoundingClientRect().top;
      const room = Math.max(260, window.innerHeight - top - 16);
      el.style.maxHeight = `${room}px`;
    }, 80);
  }
  static {
    this.\u0275fac = function HrmFilterPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmFilterPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmFilterPanel, selectors: [["hrm-filter-panel"]], viewQuery: function HrmFilterPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.panelEl, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-filter-panel"], inputs: { label: [1, "label"], panelTitle: [1, "panelTitle"], panelSubtitle: [1, "panelSubtitle"], icon: [1, "icon"], fields: [1, "fields"], conditions: [1, "conditions"], resetLabel: [1, "resetLabel"], applyLabel: [1, "applyLabel"], cancelLabel: [1, "cancelLabel"], addLabel: [1, "addLabel"], searchPlaceholder: [1, "searchPlaceholder"], noValueText: [1, "noValueText"], opGroupCompare: [1, "opGroupCompare"], opGroupQuick: [1, "opGroupQuick"], open: [1, "open"] }, outputs: { conditions: "conditionsChange", open: "openChange", apply: "apply", clear: "clear" }, decls: 38, vars: 25, consts: [["panel", ""], ["panelEl", ""], ["picker", ""], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "fp", 3, "nzVisibleChange", "nzDropdownMenu", "nzVisible"], [1, "fp-ic", 3, "icon", "size"], [1, "fp-label"], [1, "fp-panel"], [1, "fp-head"], [1, "fp-head-l"], [1, "fp-head-t"], [1, "fp-head-s"], ["type", "button", 1, "fp-reset-link", 3, "click"], [3, "icon", "size"], [1, "fp-body"], [1, "fp-row"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", 1, "fp-add", 3, "nzVisibleChange", "nzDropdownMenu", "nzVisible"], [1, "fp-foot"], ["type", "button", 1, "fp-btn", 3, "click"], ["type", "button", 1, "fp-btn", "fp-btn--primary", 3, "click"], [1, "fp-picker"], [1, "fp-picker-search"], ["nz-input", "", "type", "text", 3, "input", "value"], [1, "fp-sep"], [1, "fp-count"], [1, "fp-row-label"], [1, "fp-row-ic", 3, "icon", "size"], [1, "fp-row-op", 3, "options", "groups", "allowClear", "showSearch", "ngModel"], [1, "fp-row-value"], [1, "fp-row-novalue"], [1, "fp-num-range"], [3, "ngModel"], [1, "fp-row-op", 3, "ngModelChange", "options", "groups", "allowClear", "showSearch", "ngModel"], [3, "ngModelChange", "ngModel"], [1, "fp-num-sep"], [3, "placeholder", "ngModel"], [3, "options", "placeholder", "ngModel"], [3, "multiple", "options", "placeholder", "ngModel"], [3, "options", "ngModel"], [3, "ngModelChange", "placeholder", "ngModel"], [3, "ngModelChange", "options", "placeholder", "ngModel"], [3, "ngModelChange", "multiple", "options", "placeholder", "ngModel"], [3, "ngModelChange", "options", "ngModel"], [1, "fp-picker-group"], ["type", "button", 1, "fp-picker-row"], ["type", "button", 1, "fp-picker-row", 3, "click"], ["nz-checkbox", "", 1, "fp-picker-cb", 3, "nzChecked"], [1, "fp-picker-label"]], template: function HrmFilterPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 3);
        \u0275\u0275listener("nzVisibleChange", function HrmFilterPanel_Template_button_nzVisibleChange_0_listener($event) {
          return ctx.onVisible($event);
        });
        \u0275\u0275element(1, "tabler-icon", 4);
        \u0275\u0275elementStart(2, "span", 5);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, HrmFilterPanel_Conditional_4_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nz-dropdown-menu", null, 0)(7, "div", 6, 1)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, HrmFilterPanel_Conditional_13_Template, 2, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 11);
        \u0275\u0275listener("click", function HrmFilterPanel_Template_button_click_14_listener() {
          return ctx.resetDraft();
        });
        \u0275\u0275element(15, "tabler-icon", 12);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275repeaterCreate(18, HrmFilterPanel_For_19_Template, 11, 6, "div", 14, _forTrack0);
        \u0275\u0275elementStart(20, "button", 15);
        \u0275\u0275listener("nzVisibleChange", function HrmFilterPanel_Template_button_nzVisibleChange_20_listener($event) {
          return ctx.pickerOpen.set($event);
        });
        \u0275\u0275element(21, "tabler-icon", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 16)(24, "button", 17);
        \u0275\u0275listener("click", function HrmFilterPanel_Template_button_click_24_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 17);
        \u0275\u0275listener("click", function HrmFilterPanel_Template_button_click_26_listener() {
          return ctx.resetDraft();
        });
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 18);
        \u0275\u0275listener("click", function HrmFilterPanel_Template_button_click_28_listener() {
          return ctx.commit();
        });
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "nz-dropdown-menu", null, 2)(32, "div", 19)(33, "div", 20);
        \u0275\u0275element(34, "tabler-icon", 12);
        \u0275\u0275elementStart(35, "input", 21);
        \u0275\u0275listener("input", function HrmFilterPanel_Template_input_input_35_listener($event) {
          return ctx.onPickerSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(36, HrmFilterPanel_For_37_Template, 4, 1, null, null, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const panel_r15 = \u0275\u0275reference(6);
        const picker_r16 = \u0275\u0275reference(31);
        \u0275\u0275classProp("fp--active", ctx.activeCount() > 0);
        \u0275\u0275property("nzDropdownMenu", panel_r15)("nzVisible", ctx.open());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icon())("size", 15);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeCount() > 0 ? 4 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.panelTitle() || ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.panelSubtitle() ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.restoreIcon)("size", 14);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.resetLabel(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shownFields());
        \u0275\u0275advance(2);
        \u0275\u0275property("nzDropdownMenu", picker_r16)("nzVisible", ctx.pickerOpen());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.plusIcon)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.addLabel(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.cancelLabel());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.resetLabel());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.applyLabel());
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.searchIcon)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.pickerQuery());
        \u0275\u0275attribute("placeholder", ctx.searchPlaceholder() || null);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.pickerGroups());
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      NzDropDownModule,
      NzDropdownDirective,
      NzDropdownMenuComponent,
      NzCheckboxModule,
      NzCheckboxComponent,
      NzInputModule,
      NzInputDirective,
      TablerIconComponent,
      HrmInput,
      HrmInputNumber,
      HrmSelect,
      HrmSegmented,
      HrmDatePicker,
      HrmRangePicker
    ], styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.fp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.fp[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp--active[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n}\n.fp-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-sub);\n}\n.fp-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.fp-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  align-self: stretch;\n  margin: 1px 2px;\n  background: var(--border-sub);\n}\n.fp-count[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.fp[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.fp-panel[_ngcontent-%COMP%] {\n  width: min(640px, 94vw);\n  max-height: min(72vh, 620px);\n  display: flex;\n  flex-direction: column;\n  padding: 14px 16px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.fp-head[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.fp-head-t[_ngcontent-%COMP%] {\n  font-size: var(--fs-16);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.fp-head-s[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fp-reset-link[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  padding: 2px 0;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.fp-reset-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.fp-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fp-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 185px 148px 1fr;\n  gap: 10px;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.fp-row[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid var(--border-soft);\n  margin-top: 8px;\n}\n.fp-row-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.fp-row-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-sub);\n}\n.fp-row-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: normal;\n  line-height: 1.35;\n}\n.fp-row-op[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.fp-row-value[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.fp-row-value--full[_ngcontent-%COMP%] {\n  grid-column: 2 / -1;\n}\n.fp-row-novalue[_ngcontent-%COMP%] {\n  display: block;\n  padding: 4px 2px;\n  font-size: var(--fs-13);\n  color: var(--text-disabled);\n  font-style: italic;\n}\n.fp-num-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n.fp-num-range[_ngcontent-%COMP%]   hrm-input-number[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.fp-num-sep[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n}\n.fp-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 12px;\n  padding: 9px 12px;\n  cursor: pointer;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.fp-add[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.fp-foot[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-top: 12px;\n}\n.fp-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp-btn--primary[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--primary-foreground);\n  font-weight: 500;\n}\n.fp-btn--primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n  border-color: var(--primary-hover);\n  color: var(--primary-foreground);\n}\n.fp-picker[_ngcontent-%COMP%] {\n  min-width: 240px;\n  max-width: 300px;\n  max-height: 380px;\n  overflow-y: auto;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.fp-picker-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 10px 8px;\n  border-bottom: 1px solid var(--border-soft);\n  color: var(--text-soft);\n}\n.fp-picker-search[_ngcontent-%COMP%]   input.ant-input.ant-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-picker-group[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.fp-picker-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  text-align: left;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-picker-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp-picker-cb[_ngcontent-%COMP%] {\n  flex: none;\n  pointer-events: none;\n}\n.fp-picker-label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-filter-panel.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmFilterPanel, [{
    type: Component,
    args: [{ selector: "hrm-filter-panel", imports: [
      FormsModule,
      NzDropDownModule,
      NzCheckboxModule,
      NzInputModule,
      TablerIconComponent,
      HrmInput,
      HrmInputNumber,
      HrmSelect,
      HrmSegmented,
      HrmDatePicker,
      HrmRangePicker
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <button type="button" class="fp" [class.fp--active]="activeCount() > 0"
      nz-dropdown [nzDropdownMenu]="panel" nzTrigger="click" [nzVisible]="open()" (nzVisibleChange)="onVisible($event)">
      <tabler-icon class="fp-ic" [icon]="$any(icon())" [size]="15" />
      <span class="fp-label">{{ label() }}</span>
      @if (activeCount() > 0) {
        <span class="fp-sep"></span>
        <span class="fp-count">{{ activeCount() }}</span>
      }
    </button>

    <nz-dropdown-menu #panel>
      <div class="fp-panel" #panelEl>
        <div class="fp-head">
          <div class="fp-head-l">
            <div class="fp-head-t">{{ panelTitle() || label() }}</div>
            @if (panelSubtitle()) { <div class="fp-head-s">{{ panelSubtitle() }}</div> }
          </div>
          <button type="button" class="fp-reset-link" (click)="resetDraft()">
            <tabler-icon [icon]="restoreIcon" [size]="14" /> {{ resetLabel() }}
          </button>
        </div>

        <div class="fp-body">
          @for (f of shownFields(); track f.key) {
            <div class="fp-row">
              <div class="fp-row-label">
                @if (f.icon) { <tabler-icon class="fp-row-ic" [icon]="$any(f.icon)" [size]="16" /> }
                <span>{{ f.label }}</span>
              </div>
              @if (opsOf(f).length) {
                <hrm-select class="fp-row-op" [options]="opFlatOptions(f)" [groups]="opGroupOptions(f)"
                  [allowClear]="false" [showSearch]="false"
                  [ngModel]="rowOf(f.key).operator" (ngModelChange)="setOp(f.key, $event)" />
              }
              <div class="fp-row-value" [class.fp-row-value--full]="!opsOf(f).length">
                @switch (inputKind(f, rowOf(f.key).operator)) {
                  @case ('none') {
                    <!-- To\xE1n t\u1EED t\u1EF1 \u0111\u1EE7 ngh\u0129a (H\xF4m nay, \u0110\u1EC3 tr\u1ED1ng\u2026) \u2014 gi\u1EEF slot \u0111\u1EC3 layout kh\xF4ng nh\u1EA3y. -->
                    <span class="fp-row-novalue">{{ noValueText() }}</span>
                  }
                  @case ('range') {
                    <div class="fp-num-range">
                      <hrm-input-number [ngModel]="$any(numRange(f.key)[0])" (ngModelChange)="setNumRange(f.key, 0, $event)" />
                      <span class="fp-num-sep">\u2013</span>
                      <hrm-input-number [ngModel]="$any(numRange(f.key)[1])" (ngModelChange)="setNumRange(f.key, 1, $event)" />
                    </div>
                  }
                  @case ('date') {
                    <hrm-date-picker [ngModel]="$any(rowOf(f.key).value)" (ngModelChange)="setVal(f.key, $event)" />
                  }
                  @default {
                    @switch (f.type) {
                      @case ('text') {
                        <hrm-input [placeholder]="f.placeholder ?? ''"
                          [ngModel]="$any(rowOf(f.key).value)" (ngModelChange)="setVal(f.key, $event)" />
                      }
                      @case ('select') {
                        <hrm-select [options]="f.options ?? []" [placeholder]="f.placeholder ?? ''"
                          [ngModel]="rowOf(f.key).value" (ngModelChange)="setVal(f.key, $event)" />
                      }
                      @case ('multi') {
                        <hrm-select [multiple]="true" [options]="f.options ?? []" [placeholder]="f.placeholder ?? ''"
                          [ngModel]="rowOf(f.key).value" (ngModelChange)="setVal(f.key, $event)" />
                      }
                      @case ('number') {
                        <hrm-input-number [placeholder]="f.placeholder ?? ''"
                          [ngModel]="$any(rowOf(f.key).value)" (ngModelChange)="setVal(f.key, $event)" />
                      }
                      @case ('date-range') {
                        <hrm-range-picker
                          [ngModel]="$any(rowOf(f.key).value)" (ngModelChange)="setVal(f.key, $event)" />
                      }
                      @case ('segmented') {
                        <hrm-segmented [options]="$any(f.options ?? [])"
                          [ngModel]="$any(rowOf(f.key).value)" (ngModelChange)="setVal(f.key, $event)" />
                      }
                    }
                  }
                }
              </div>
            </div>
          }

          <!-- Th\xEAm/g\u1EE1 tr\u01B0\u1EDDng \u2014 picker nested dropdown: t\xECm + tick theo nh\xF3m. -->
          <button type="button" class="fp-add" nz-dropdown [nzDropdownMenu]="picker" nzTrigger="click"
            [nzVisible]="pickerOpen()" (nzVisibleChange)="pickerOpen.set($event)">
            <tabler-icon [icon]="plusIcon" [size]="15" /> {{ addLabel() }}
          </button>
        </div>

        <div class="fp-foot">
          <button type="button" class="fp-btn" (click)="cancel()">{{ cancelLabel() }}</button>
          <button type="button" class="fp-btn" (click)="resetDraft()">{{ resetLabel() }}</button>
          <button type="button" class="fp-btn fp-btn--primary" (click)="commit()">{{ applyLabel() }}</button>
        </div>
      </div>
    </nz-dropdown-menu>

    <nz-dropdown-menu #picker>
      <div class="fp-picker">
        <div class="fp-picker-search">
          <tabler-icon [icon]="searchIcon" [size]="15" />
          <input nz-input type="text" [value]="pickerQuery()" (input)="onPickerSearch($event)"
            [attr.placeholder]="searchPlaceholder() || null" />
        </div>
        @for (g of pickerGroups(); track g.label) {
          <div class="fp-picker-group">{{ g.label }}</div>
          @for (f of g.fields; track f.key) {
            <button type="button" class="fp-picker-row" (click)="toggleField(f.key)">
              <label nz-checkbox class="fp-picker-cb" [nzChecked]="shownKeys().has(f.key)"></label>
              <span class="fp-picker-label">{{ f.label }}</span>
            </button>
          }
        }
      </div>
    </nz-dropdown-menu>
  `, host: { class: "hrm-filter-panel" }, styles: ["/* angular:styles/component:css;97521139495e544d8bb639f5d46bc4cd7d4ad18311e8a3a136dd36e3c5faa0b3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-entry/hrm-filter-panel.ts */\n:host {\n  display: inline-block;\n}\n.fp {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.fp:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp--active {\n  border-color: var(--primary-base);\n}\n.fp-ic {\n  flex: none;\n  color: var(--text-sub);\n}\n.fp-label {\n  white-space: nowrap;\n}\n.fp-sep {\n  width: 1px;\n  align-self: stretch;\n  margin: 1px 2px;\n  background: var(--border-sub);\n}\n.fp-count {\n  white-space: nowrap;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.fp:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.fp-panel {\n  width: min(640px, 94vw);\n  max-height: min(72vh, 620px);\n  display: flex;\n  flex-direction: column;\n  padding: 14px 16px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.fp-head {\n  flex: none;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.fp-head-t {\n  font-size: var(--fs-16);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.fp-head-s {\n  margin-top: 2px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.fp-reset-link {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  padding: 2px 0;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.fp-reset-link:hover {\n  text-decoration: underline;\n}\n.fp-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.fp-row {\n  display: grid;\n  grid-template-columns: 185px 148px 1fr;\n  gap: 10px;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.fp-row:first-child {\n  border-top: 1px solid var(--border-soft);\n  margin-top: 8px;\n}\n.fp-row-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.fp-row-ic {\n  flex: none;\n  color: var(--text-sub);\n}\n.fp-row-label span {\n  white-space: normal;\n  line-height: 1.35;\n}\n.fp-row-op {\n  min-width: 0;\n}\n.fp-row-value {\n  min-width: 0;\n}\n.fp-row-value--full {\n  grid-column: 2 / -1;\n}\n.fp-row-novalue {\n  display: block;\n  padding: 4px 2px;\n  font-size: var(--fs-13);\n  color: var(--text-disabled);\n  font-style: italic;\n}\n.fp-num-range {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n.fp-num-range hrm-input-number {\n  flex: 1;\n  min-width: 0;\n}\n.fp-num-sep {\n  flex: none;\n  color: var(--text-soft);\n}\n.fp-add {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  margin-top: 12px;\n  padding: 9px 12px;\n  cursor: pointer;\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-md);\n  background: transparent;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.fp-add:hover {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.fp-foot {\n  flex: none;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding-top: 12px;\n}\n.fp-btn {\n  padding: 6px 16px;\n  cursor: pointer;\n  text-align: center;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-btn:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp-btn--primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--primary-foreground);\n  font-weight: 500;\n}\n.fp-btn--primary:hover {\n  background: var(--primary-hover);\n  border-color: var(--primary-hover);\n  color: var(--primary-foreground);\n}\n.fp-picker {\n  min-width: 240px;\n  max-width: 300px;\n  max-height: 380px;\n  overflow-y: auto;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n  font-family: var(--font-sans);\n}\n.fp-picker-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 10px 8px;\n  border-bottom: 1px solid var(--border-soft);\n  color: var(--text-soft);\n}\n.fp-picker-search input.ant-input.ant-input {\n  flex: 1;\n  min-width: 0;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-picker-group {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.fp-picker-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  text-align: left;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.fp-picker-row:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fp-picker-cb {\n  flex: none;\n  pointer-events: none;\n}\n.fp-picker-label {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=hrm-filter-panel.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], panelTitle: [{ type: Input, args: [{ isSignal: true, alias: "panelTitle", required: false }] }], panelSubtitle: [{ type: Input, args: [{ isSignal: true, alias: "panelSubtitle", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }], conditions: [{ type: Input, args: [{ isSignal: true, alias: "conditions", required: false }] }, { type: Output, args: ["conditionsChange"] }], resetLabel: [{ type: Input, args: [{ isSignal: true, alias: "resetLabel", required: false }] }], applyLabel: [{ type: Input, args: [{ isSignal: true, alias: "applyLabel", required: false }] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], noValueText: [{ type: Input, args: [{ isSignal: true, alias: "noValueText", required: false }] }], opGroupCompare: [{ type: Input, args: [{ isSignal: true, alias: "opGroupCompare", required: false }] }], opGroupQuick: [{ type: Input, args: [{ isSignal: true, alias: "opGroupQuick", required: false }] }], open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], apply: [{ type: Output, args: ["apply"] }], clear: [{ type: Output, args: ["clear"] }], panelEl: [{ type: ViewChild, args: ["panelEl", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmFilterPanel, { className: "HrmFilterPanel", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-filter-panel.ts", lineNumber: 352 });
})();

export {
  HrmFilterPanel
};
//# sourceMappingURL=chunk-S6A672KI.js.map
