import {
  HrmAlert
} from "./chunk-H656EMSP.js";
import {
  HrmApprovalFlow
} from "./chunk-FJLQWKKP.js";
import {
  HrmEmpty
} from "./chunk-Z3IELLHT.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
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
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts
var _c0 = ["*"];
var _c1 = [[["", "secActions", ""]], "*"];
var _c2 = ["[secActions]", "*"];
function VnrFormSection_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meta());
  }
}
function VnrFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275domElementEnd();
  }
}
function VnrFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function VnrFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint());
  }
}
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.kind;
var _forTrack2 = ($index, $item) => $item.label;
function VnrHrCalendar_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 9);
    \u0275\u0275domListener("click", function VnrHrCalendar_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("B\u1ECF ch\u1ECDn (", ctx_r1.selected().length, ")");
  }
}
function VnrHrCalendar_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3);
  }
}
function VnrHrCalendar_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r5.shift);
  }
}
function VnrHrCalendar_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 12);
  }
}
function VnrHrCalendar_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 13);
  }
}
function VnrHrCalendar_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function VnrHrCalendar_For_9_Template_button_click_0_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick(d_r5));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, VnrHrCalendar_For_9_Conditional_3_Template, 2, 1, "span", 11);
    \u0275\u0275conditionalCreate(4, VnrHrCalendar_For_9_Conditional_4_Template, 1, 0, "span", 12);
    \u0275\u0275conditionalCreate(5, VnrHrCalendar_For_9_Conditional_5_Template, 1, 0, "span", 13);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-sel", ctx_r1.isSel(d_r5.date))("is-range", ctx_r1.inRange(d_r5.date));
    \u0275\u0275domProperty("disabled", d_r5.kind === "locked")("title", d_r5.conflict || "");
    \u0275\u0275attribute("data-kind", d_r5.kind)("aria-label", ctx_r1.dayLabel(d_r5))("aria-pressed", ctx_r1.isSel(d_r5.date) || ctx_r1.inRange(d_r5.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.day);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r5.shift ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r5.portion === 0.5 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r5.conflict ? 5 : -1);
  }
}
function VnrHrCalendar_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-kind", l_r6.kind);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r6.label);
  }
}
function VnrHrCalendar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275domElement(1, "i", 14);
    \u0275\u0275text(2, "Xung \u0111\u1ED9t l\u1ECBch");
    \u0275\u0275domElementEnd();
  }
}
function VnrHrCalendar_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275attribute("data-tone", s_r7.tone || "normal");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.value);
  }
}
function VnrHrCalendar_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, VnrHrCalendar_Conditional_14_For_2_Template, 5, 3, "div", null, _forTrack2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.summary());
  }
}
var _forTrack3 = ($index, $item) => $item.id;
var _forTrack4 = ($index, $item) => $item.currency;
function VnrExpenseTable_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 3);
  }
}
function VnrExpenseTable_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.category);
  }
}
function VnrExpenseTable_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 14);
    \u0275\u0275domListener("change", function VnrExpenseTable_For_15_Conditional_3_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cell(r_r2.id, "category", ctx_r0.str($event)));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const r_r2 = ctx_r3.$implicit;
    const \u0275$index_26_r5 = ctx_r3.$index;
    \u0275\u0275domProperty("value", r_r2.category);
    \u0275\u0275attribute("aria-label", "Kho\u1EA3n m\u1EE5c, d\xF2ng " + (\u0275$index_26_r5 + 1));
  }
}
function VnrExpenseTable_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-s", r_r2.policyState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.policyMessage);
  }
}
function VnrExpenseTable_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.quantity);
  }
}
function VnrExpenseTable_For_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 15);
    \u0275\u0275domListener("change", function VnrExpenseTable_For_15_Conditional_7_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cell(r_r2.id, "quantity", ctx_r0.num($event)));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const r_r2 = ctx_r3.$implicit;
    const \u0275$index_26_r5 = ctx_r3.$index;
    \u0275\u0275domProperty("value", r_r2.quantity);
    \u0275\u0275attribute("aria-label", "S\u1ED1 l\u01B0\u1EE3ng, d\xF2ng " + (\u0275$index_26_r5 + 1));
  }
}
function VnrExpenseTable_For_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r2.unitPrice));
  }
}
function VnrExpenseTable_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 15);
    \u0275\u0275domListener("change", function VnrExpenseTable_For_15_Conditional_10_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cell(r_r2.id, "unitPrice", ctx_r0.num($event)));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const r_r2 = ctx_r3.$implicit;
    const \u0275$index_26_r5 = ctx_r3.$index;
    \u0275\u0275domProperty("value", r_r2.unitPrice);
    \u0275\u0275attribute("aria-label", "\u0110\u01A1n gi\xE1, d\xF2ng " + (\u0275$index_26_r5 + 1));
  }
}
function VnrExpenseTable_For_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 13)(1, "button", 16);
    \u0275\u0275domListener("click", function VnrExpenseTable_For_15_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeRow.emit(r_r2.id));
    });
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_26_r5 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Xo\xE1 d\xF2ng " + (\u0275$index_26_r5 + 1));
  }
}
function VnrExpenseTable_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, VnrExpenseTable_For_15_Conditional_2_Template, 2, 1, "span")(3, VnrExpenseTable_For_15_Conditional_3_Template, 1, 2, "input", 9);
    \u0275\u0275conditionalCreate(4, VnrExpenseTable_For_15_Conditional_4_Template, 2, 2, "span", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 2);
    \u0275\u0275conditionalCreate(6, VnrExpenseTable_For_15_Conditional_6_Template, 2, 1, "span")(7, VnrExpenseTable_For_15_Conditional_7_Template, 1, 2, "input", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td", 2);
    \u0275\u0275conditionalCreate(9, VnrExpenseTable_For_15_Conditional_9_Template, 2, 1, "span")(10, VnrExpenseTable_For_15_Conditional_10_Template, 1, 2, "input", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 12);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(13, VnrExpenseTable_For_15_Conditional_13_Template, 3, 1, "td", 13);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-policy", r_r2.policyState || "ok");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.readonly() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r2.policyMessage ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.readonly() ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.readonly() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r2.amount));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.readonly() ? 13 : -1);
  }
}
function VnrExpenseTable_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 6);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 kho\u1EA3n chi ph\xED n\xE0o.");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.readonly() ? 4 : 5);
  }
}
function VnrExpenseTable_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "td");
  }
}
function VnrExpenseTable_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 12);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, VnrExpenseTable_For_19_Conditional_5_Template, 1, 0, "td");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r9.label || "T\u1ED5ng c\u1ED9ng", " (", t_r9.currency, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r9.amount));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.readonly() ? 5 : -1);
  }
}
function VnrExpenseTable_For_22_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-s", r_r10.policyState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.policyMessage);
  }
}
function VnrExpenseTable_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 20)(7, "span");
    \u0275\u0275text(8, "SL: ");
    \u0275\u0275domElementStart(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "span");
    \u0275\u0275text(12, "\u0110\u01A1n gi\xE1: ");
    \u0275\u0275domElementStart(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(15, VnrExpenseTable_For_22_Conditional_15_Template, 2, 2, "div", 10);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-policy", r_r10.policyState || "ok");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r10.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r10.amount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r10.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r10.unitPrice));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r10.policyMessage ? 15 : -1);
  }
}
function VnrExpenseTable_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1, "Ch\u01B0a c\xF3 kho\u1EA3n chi ph\xED n\xE0o.");
    \u0275\u0275domElementEnd();
  }
}
function VnrExpenseTable_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r11.label || "T\u1ED5ng c\u1ED9ng", " (", t_r11.currency, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r11.amount));
  }
}
function VnrExpenseTable_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 8)(1, "button", 21);
    \u0275\u0275domListener("click", function VnrExpenseTable_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRow.emit());
    });
    \u0275\u0275text(2, "+ Th\xEAm kho\u1EA3n chi ph\xED");
    \u0275\u0275domElementEnd()();
  }
}
var _forTrack5 = ($index, $item) => $item.effectiveDate;
function VnrChangeComparison_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1, "L\xEAn l\u1ECBch tr\u01B0\u1EDBc");
    \u0275\u0275domElementEnd();
  }
}
function VnrChangeComparison_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "span", 6);
    \u0275\u0275text(2, "Hi\u1EC7u l\u1EF1c t\u1EEB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, VnrChangeComparison_Conditional_1_Conditional_5_Template, 2, 0, "span", 8);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.effectiveDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFuture() ? 5 : -1);
  }
}
function VnrChangeComparison_For_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.delta);
  }
}
function VnrChangeComparison_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 13);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 10)(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(13, VnrChangeComparison_For_9_Conditional_13_Template, 2, 1, "span", 16);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275classProp("is-same", r_r2.changed === false);
    \u0275\u0275attribute("data-tone", r_r2.tone || "neutral");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.current || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.proposed || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.delta ? 13 : -1);
  }
}
function VnrChangeComparison_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3);
  }
}
function VnrChangeComparison_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "span", 17);
    \u0275\u0275text(2, "\u1EA2nh h\u01B0\u1EDFng t\u1EDBi");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, VnrChangeComparison_Conditional_10_For_4_Template, 2, 1, "span", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.impacted());
  }
}
function VnrChangeComparison_Conditional_11_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 23);
    \u0275\u0275text(1, "Tr\xF9ng ng\xE0y hi\u1EC7u l\u1EF1c");
    \u0275\u0275domElementEnd();
  }
}
function VnrChangeComparison_Conditional_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, VnrChangeComparison_Conditional_11_For_4_Conditional_5_Template, 2, 0, "span", 23);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275classProp("cf", s_r4.conflict);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.effectiveDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.summary);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r4.conflict ? 5 : -1);
  }
}
function VnrChangeComparison_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 17);
    \u0275\u0275text(2, "Thay \u0111\u1ED5i \u0111\xE3 l\xEAn l\u1ECBch");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, VnrChangeComparison_Conditional_11_For_4_Template, 6, 5, "div", 19, _forTrack5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.scheduled());
  }
}
var _c3 = (a0, a1, a2) => ({ $implicit: a0, index: a1, id: a2 });
function VnrRepeatableGroup_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Ch\xEDnh");
    \u0275\u0275elementEnd();
  }
}
function VnrRepeatableGroup_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function VnrRepeatableGroup_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const it_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPrimary.emit(it_r3.id));
    });
    \u0275\u0275text(1, "\u0110\u1EB7t l\xE0m ch\xEDnh");
    \u0275\u0275elementEnd();
  }
}
function VnrRepeatableGroup_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function VnrRepeatableGroup_For_2_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const it_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.duplicate.emit(it_r3.id));
    });
    \u0275\u0275text(1, "Nh\xE2n b\u1EA3n");
    \u0275\u0275elementEnd();
  }
}
function VnrRepeatableGroup_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function VnrRepeatableGroup_For_2_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const it_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove.emit(it_r3.id));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function VnrRepeatableGroup_For_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VnrRepeatableGroup_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r3.error);
  }
}
function VnrRepeatableGroup_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, VnrRepeatableGroup_For_2_Conditional_6_Template, 2, 0, "span", 9);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275conditionalCreate(8, VnrRepeatableGroup_For_2_Conditional_8_Template, 2, 0, "button", 11);
    \u0275\u0275conditionalCreate(9, VnrRepeatableGroup_For_2_Conditional_9_Template, 2, 0, "button", 11);
    \u0275\u0275conditionalCreate(10, VnrRepeatableGroup_For_2_Conditional_10_Template, 2, 0, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275template(12, VnrRepeatableGroup_For_2_ng_container_12_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, VnrRepeatableGroup_For_2_Conditional_13_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r3 = ctx.$implicit;
    const \u0275$index_3_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-primary", it_r3.id === ctx_r0.primaryId())("has-err", !!it_r3.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_3_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r3.title || ctx_r0.itemLabel() + " " + (\u0275$index_3_r6 + 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r3.id === ctx_r0.primaryId() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allowPrimary() && it_r3.id !== ctx_r0.primaryId() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allowDuplicate() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canRemove() ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction3(13, _c3, it_r3.data, \u0275$index_3_r6, it_r3.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r3.error ? 13 : -1);
  }
}
function VnrRepeatableGroup_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-empty", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("description", ctx_r0.emptyText());
  }
}
function VnrRepeatableGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function VnrRepeatableGroup_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", ctx_r0.addLabel());
  }
}
function VnrRepeatableGroup_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u0110\xE3 \u0111\u1EA1t t\u1ED1i \u0111a ", ctx_r0.max(), " ", ctx_r0.itemLabel().toLowerCase(), ".");
  }
}
function VnrDocumentGroup_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.sensitive ? ctx_r0.mask(d_r2.number) : d_r2.number);
  }
}
function VnrDocumentGroup_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-v", d_r2.verification);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.verifLabel(d_r2.verification));
  }
}
function VnrDocumentGroup_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function VnrDocumentGroup_For_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const d_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove.emit(d_r2.id));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function VnrDocumentGroup_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Ng\xE0y c\u1EA5p: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.issueDate);
  }
}
function VnrDocumentGroup_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "H\u1EBFt h\u1EA1n: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.expiryDate);
  }
}
function VnrDocumentGroup_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "N\u01A1i c\u1EA5p: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.authority);
  }
}
function VnrDocumentGroup_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-exp", d_r2.expiryState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.expiryNote);
  }
}
function VnrDocumentGroup_For_2_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Kh\xF4ng \u0111\u1EE7 quy\u1EC1n t\u1EA3i xu\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function VnrDocumentGroup_For_2_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function VnrDocumentGroup_For_2_Conditional_14_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const d_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.download.emit(d_r2.id));
    });
    \u0275\u0275text(1, "T\u1EA3i xu\u1ED1ng");
    \u0275\u0275elementEnd();
  }
}
function VnrDocumentGroup_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, VnrDocumentGroup_For_2_Conditional_14_Conditional_2_Template, 2, 0, "span", 16)(3, VnrDocumentGroup_For_2_Conditional_14_Conditional_3_Template, 2, 0, "button", 17);
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.fileName);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.sensitive && d_r2.canDownload === false ? 2 : 3);
  }
}
function VnrDocumentGroup_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ch\u01B0a \u0111\xEDnh k\xE8m t\u1EC7p");
    \u0275\u0275elementEnd();
  }
}
function VnrDocumentGroup_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, VnrDocumentGroup_For_2_Conditional_4_Template, 2, 1, "span", 6);
    \u0275\u0275conditionalCreate(5, VnrDocumentGroup_For_2_Conditional_5_Template, 2, 2, "span", 7);
    \u0275\u0275element(6, "span", 8);
    \u0275\u0275conditionalCreate(7, VnrDocumentGroup_For_2_Conditional_7_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275conditionalCreate(9, VnrDocumentGroup_For_2_Conditional_9_Template, 4, 1, "span");
    \u0275\u0275conditionalCreate(10, VnrDocumentGroup_For_2_Conditional_10_Template, 4, 1, "span");
    \u0275\u0275conditionalCreate(11, VnrDocumentGroup_For_2_Conditional_11_Template, 4, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, VnrDocumentGroup_For_2_Conditional_12_Template, 2, 2, "div", 11);
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275conditionalCreate(14, VnrDocumentGroup_For_2_Conditional_14_Template, 4, 2)(15, VnrDocumentGroup_For_2_Conditional_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-exp", d_r2.expiryState || "valid");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r2.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.number ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.verification ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.readonly() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r2.issueDate ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.expiryDate ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.authority ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.expiryNote ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(d_r2.fileName ? 14 : 15);
  }
}
function VnrDocumentGroup_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-empty", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("description", ctx_r0.emptyText());
  }
}
function VnrDocumentGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function VnrDocumentGroup_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", ctx_r0.addLabel());
  }
}
var _forTrack6 = ($index, $item) => $item.message;
function VnrApprovalPanel_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-alert", 4);
  }
  if (rf & 2) {
    const w_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("type", ctx_r1.alertType(w_r1.level))("message", w_r1.message);
  }
}
function VnrApprovalPanel_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, VnrApprovalPanel_Conditional_1_For_2_Template, 1, 2, "hrm-alert", 4, _forTrack6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.warnings());
  }
}
function VnrApprovalPanel_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3);
  }
}
function VnrApprovalPanel_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "T\xE1c \u0111\u1ED9ng khi duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, VnrApprovalPanel_Conditional_3_For_4_Template, 2, 1, "span", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.impacted());
  }
}
var VnrFormShell = class _VnrFormShell {
  constructor() {
    this.compact = input(false, ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function VnrFormShell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrFormShell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrFormShell, selectors: [["vnr-form-shell"]], inputs: { compact: [1, "compact"] }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "vnr-fs"]], template: function VnrFormShell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("is-compact", ctx.compact());
      }
    }, styles: ["/* angular:styles/component:css;4dcaa6e5e3bd5adaecb088f482af0142e7a291343de6469a8ba1374b683c322a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-fs {\n  container-type: inline-size;\n  container-name: vnrform;\n  --vnr-gx: var(--space-4, 16px);\n  --vnr-gy: var(--space-4, 16px);\n  inline-size: 100%;\n}\n.vnr-fs.is-compact {\n  --vnr-gx: var(--space-3, 12px);\n  --vnr-gy: var(--space-2-5, 10px);\n}\n.vnr-fg {\n  --vnr-cols: 1;\n  display: grid;\n  grid-template-columns: repeat(var(--vnr-cols), minmax(0, 1fr));\n  column-gap: var(--vnr-gx);\n  row-gap: var(--vnr-gy);\n  align-items: start;\n}\n@container vnrform (min-width: 480px) {\n  .vnr-fg {\n    --vnr-cols: 2;\n  }\n}\n@container vnrform (min-width: 760px) {\n  .vnr-fg {\n    --vnr-cols: 3;\n  }\n}\n@container vnrform (min-width: 1080px) {\n  .vnr-fg {\n    --vnr-cols: 4;\n  }\n}\n.vnr-fg > vnr-form-field {\n  grid-column: span 1;\n  min-inline-size: 0;\n  display: block;\n}\n.vnr-fg > vnr-form-field[data-size=full] {\n  grid-column: 1 / -1;\n}\n@container vnrform (min-width: 480px) {\n  .vnr-fg > vnr-form-field[data-size=lg] {\n    grid-column: span 2;\n  }\n}\n.vnr-ff {\n  min-inline-size: 0;\n}\n.vnr-sec {\n  border-block-end: 1px solid var(--border-soft);\n  padding-block: var(--space-4, 16px);\n}\n.vnr-sec:last-of-type {\n  border-block-end: none;\n}\n.vnr-sec__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-block-end: var(--space-3, 12px);\n}\n.vnr-sec__t {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-sec__m {\n  margin-inline-start: auto;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ff__lb {\n  display: block;\n}\n.vnr-ff__lbt {\n  display: block;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  margin-block-end: var(--space-1, 4px);\n}\n.vnr-ff__lbt .rq {\n  color: var(--error-base);\n  margin-inline-start: 2px;\n}\n.vnr-ff__hint {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  margin-block-start: var(--space-1, 4px);\n}\n.vnr-ff__err {\n  font-size: var(--fs-11, 11px);\n  color: var(--error-base);\n  margin-block-start: var(--space-1, 4px);\n}\n.vnr-ff hrm-input,\n.vnr-ff hrm-select,\n.vnr-ff hrm-textarea,\n.vnr-ff hrm-date-picker,\n.vnr-ff hrm-input-number {\n  display: block;\n  inline-size: 100%;\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrFormShell, [{
    type: Component,
    args: [{ selector: "vnr-form-shell", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `<div class="vnr-fs" [class.is-compact]="compact()"><ng-content /></div>`, styles: ["/* angular:styles/component:css;4dcaa6e5e3bd5adaecb088f482af0142e7a291343de6469a8ba1374b683c322a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-fs {\n  container-type: inline-size;\n  container-name: vnrform;\n  --vnr-gx: var(--space-4, 16px);\n  --vnr-gy: var(--space-4, 16px);\n  inline-size: 100%;\n}\n.vnr-fs.is-compact {\n  --vnr-gx: var(--space-3, 12px);\n  --vnr-gy: var(--space-2-5, 10px);\n}\n.vnr-fg {\n  --vnr-cols: 1;\n  display: grid;\n  grid-template-columns: repeat(var(--vnr-cols), minmax(0, 1fr));\n  column-gap: var(--vnr-gx);\n  row-gap: var(--vnr-gy);\n  align-items: start;\n}\n@container vnrform (min-width: 480px) {\n  .vnr-fg {\n    --vnr-cols: 2;\n  }\n}\n@container vnrform (min-width: 760px) {\n  .vnr-fg {\n    --vnr-cols: 3;\n  }\n}\n@container vnrform (min-width: 1080px) {\n  .vnr-fg {\n    --vnr-cols: 4;\n  }\n}\n.vnr-fg > vnr-form-field {\n  grid-column: span 1;\n  min-inline-size: 0;\n  display: block;\n}\n.vnr-fg > vnr-form-field[data-size=full] {\n  grid-column: 1 / -1;\n}\n@container vnrform (min-width: 480px) {\n  .vnr-fg > vnr-form-field[data-size=lg] {\n    grid-column: span 2;\n  }\n}\n.vnr-ff {\n  min-inline-size: 0;\n}\n.vnr-sec {\n  border-block-end: 1px solid var(--border-soft);\n  padding-block: var(--space-4, 16px);\n}\n.vnr-sec:last-of-type {\n  border-block-end: none;\n}\n.vnr-sec__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-block-end: var(--space-3, 12px);\n}\n.vnr-sec__t {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-sec__m {\n  margin-inline-start: auto;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ff__lb {\n  display: block;\n}\n.vnr-ff__lbt {\n  display: block;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-body);\n  margin-block-end: var(--space-1, 4px);\n}\n.vnr-ff__lbt .rq {\n  color: var(--error-base);\n  margin-inline-start: 2px;\n}\n.vnr-ff__hint {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  margin-block-start: var(--space-1, 4px);\n}\n.vnr-ff__err {\n  font-size: var(--fs-11, 11px);\n  color: var(--error-base);\n  margin-block-start: var(--space-1, 4px);\n}\n.vnr-ff hrm-input,\n.vnr-ff hrm-select,\n.vnr-ff hrm-textarea,\n.vnr-ff hrm-date-picker,\n.vnr-ff hrm-input-number {\n  display: block;\n  inline-size: 100%;\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrFormShell, { className: "VnrFormShell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 78 });
})();
var VnrFormGrid = class _VnrFormGrid {
  static {
    this.\u0275fac = function VnrFormGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrFormGrid)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrFormGrid, selectors: [["vnr-form-grid"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "vnr-fg"]], template: function VnrFormGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrFormGrid, [{
    type: Component,
    args: [{
      selector: "vnr-form-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="vnr-fg"><ng-content /></div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrFormGrid, { className: "VnrFormGrid", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 87 });
})();
var VnrFormSection = class _VnrFormSection {
  constructor() {
    this.title = input.required(...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.meta = input(null, ...ngDevMode ? [{ debugName: "meta" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function VnrFormSection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrFormSection)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrFormSection, selectors: [["vnr-form-section"]], inputs: { title: [1, "title"], meta: [1, "meta"] }, ngContentSelectors: _c2, decls: 7, vars: 2, consts: [[1, "vnr-sec"], [1, "vnr-sec__hd"], [1, "vnr-sec__t"], [1, "vnr-sec__m"]], template: function VnrFormSection_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, VnrFormSection_Conditional_4_Template, 2, 1, "span", 3);
        \u0275\u0275projection(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275projection(6, 1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.meta() ? 4 : -1);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrFormSection, [{
    type: Component,
    args: [{
      selector: "vnr-form-section",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="vnr-sec">
      <header class="vnr-sec__hd">
        <span class="vnr-sec__t">{{ title() }}</span>
        @if (meta()) { <span class="vnr-sec__m">{{ meta() }}</span> }
        <ng-content select="[secActions]" />
      </header>
      <ng-content />
    </section>
  `
    }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], meta: [{ type: Input, args: [{ isSignal: true, alias: "meta", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrFormSection, { className: "VnrFormSection", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 103 });
})();
var VnrFormField = class _VnrFormField {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.required = input(false, ...ngDevMode ? [{ debugName: "required" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hint = input(null, ...ngDevMode ? [{ debugName: "hint" }] : (
      /* istanbul ignore next */
      []
    ));
    this.error = input(null, ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function VnrFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrFormField)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrFormField, selectors: [["vnr-form-field"]], hostVars: 1, hostBindings: function VnrFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-size", ctx.size());
      }
    }, inputs: { label: [1, "label"], size: [1, "size"], required: [1, "required"], hint: [1, "hint"], error: [1, "error"] }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "vnr-ff"], [1, "vnr-ff__lb"], [1, "vnr-ff__lbt"], [1, "rq"], [1, "vnr-ff__err"], [1, "vnr-ff__hint"]], template: function VnrFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0)(1, "label", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275conditionalCreate(4, VnrFormField_Conditional_4_Template, 2, 0, "span", 3);
        \u0275\u0275domElementEnd();
        \u0275\u0275projection(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, VnrFormField_Conditional_6_Template, 2, 1, "div", 4)(7, VnrFormField_Conditional_7_Template, 2, 1, "div", 5);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.required() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 6 : ctx.hint() ? 7 : -1);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrFormField, [{
    type: Component,
    args: [{
      selector: "vnr-form-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      // data-size đặt trên HOST vì host mới là grid item của .vnr-fg
      host: { "[attr.data-size]": "size()" },
      // <label> BỌC control (thay vì để control ngoài label) ⇒ liên kết nhãn–ô nhập theo chuẩn HTML:
      // bấm nhãn là focus vào ô, và trình đọc màn hình đọc đúng tên trường. Không cần sinh id.
      template: `
    <div class="vnr-ff">
      <label class="vnr-ff__lb">
        <span class="vnr-ff__lbt">{{ label() }}@if (required()) {<span class="rq">*</span>}</span>
        <ng-content />
      </label>
      @if (error()) { <div class="vnr-ff__err">{{ error() }}</div> }
      @else if (hint()) { <div class="vnr-ff__hint">{{ hint() }}</div> }
    </div>
  `
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrFormField, { className: "VnrFormField", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 127 });
})();
var VnrHrCalendar = class _VnrHrCalendar {
  constructor() {
    this.days = input.required(...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.monthLabel = input.required(...ngDevMode ? [{ debugName: "monthLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selected = model([], ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.summary = input([], ...ngDevMode ? [{ debugName: "summary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectionChange = output();
    this.dow = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    this.legend = computed(() => {
      const label = {
        workday: "Ng\xE0y l\xE0m vi\u1EC7c",
        weekend: "Ng\xE0y ngh\u1EC9 tu\u1EA7n",
        holiday: "Ng\xE0y l\u1EC5",
        locked: "\u0110\xE3 kho\xE1"
      };
      return [...new Set(this.days().map((d) => d.kind))].map((kind) => ({ kind, label: label[kind] }));
    }, ...ngDevMode ? [{ debugName: "legend" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasConflict = computed(() => this.days().some((d) => !!d.conflict), ...ngDevMode ? [{ debugName: "hasConflict" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Nhãn đọc được cho MỘT ô ngày — gộp mọi thông tin đang chỉ truyền bằng màu/hình.
   *  Trước đây nút chỉ chứa con số nên trình đọc màn hình đọc "18", không biết lễ/khoá/xung đột. */
  dayLabel(d) {
    const kind = {
      workday: "ng\xE0y l\xE0m vi\u1EC7c",
      weekend: "ng\xE0y ngh\u1EC9 tu\u1EA7n",
      holiday: "ng\xE0y l\u1EC5",
      locked: "\u0111\xE3 kho\xE1"
    };
    const parts = [`Ng\xE0y ${d.day}`, kind[d.kind]];
    if (d.portion === 0.5)
      parts.push("n\u1EEDa ng\xE0y");
    if (d.shift)
      parts.push(`ca ${d.shift}`);
    if (d.conflict)
      parts.push(`xung \u0111\u1ED9t: ${d.conflict}`);
    if (this.isSel(d.date))
      parts.push("\u0111\xE3 ch\u1ECDn");
    else if (this.inRange(d.date))
      parts.push("trong kho\u1EA3ng \u0111\xE3 ch\u1ECDn");
    return parts.join(", ");
  }
  isSel(iso) {
    const s = this.selected();
    return s.length > 0 && (iso === s[0] || iso === s[s.length - 1]);
  }
  inRange(iso) {
    const s = this.selected();
    return s.length >= 2 && iso > s[0] && iso < s[s.length - 1];
  }
  pick(d) {
    if (d.kind === "locked")
      return;
    const cur = [...this.selected()];
    const next = cur.length === 1 ? [cur[0], d.date].sort() : [d.date];
    this.selected.set(next);
    this.selectionChange.emit(next);
  }
  clear() {
    this.selected.set([]);
    this.selectionChange.emit([]);
  }
  static {
    this.\u0275fac = function VnrHrCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrHrCalendar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrHrCalendar, selectors: [["vnr-hr-calendar"]], inputs: { days: [1, "days"], monthLabel: [1, "monthLabel"], selected: [1, "selected"], summary: [1, "summary"] }, outputs: { selected: "selectedChange", selectionChange: "selectionChange" }, decls: 15, vars: 4, consts: [[1, "vnr-cal"], [1, "vnr-cal__bar"], [1, "vnr-cal__title"], ["type", "button", 1, "vnr-cal__clear"], [1, "vnr-cal__grid"], [1, "vnr-cal__dow"], ["type", "button", 1, "vnr-cal__day", 3, "is-sel", "is-range", "disabled", "title"], [1, "vnr-cal__lg"], [1, "vnr-cal__sum"], ["type", "button", 1, "vnr-cal__clear", 3, "click"], ["type", "button", 1, "vnr-cal__day", 3, "click", "disabled", "title"], [1, "vnr-cal__shift"], [1, "vnr-cal__half"], [1, "vnr-cal__cf"], [1, "cf"], [1, "k"], [1, "v"]], template: function VnrHrCalendar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(4, VnrHrCalendar_Conditional_4_Template, 2, 1, "button", 3);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 4);
        \u0275\u0275repeaterCreate(6, VnrHrCalendar_For_7_Template, 2, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(8, VnrHrCalendar_For_9_Template, 6, 13, "button", 6, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(10, "div", 7);
        \u0275\u0275repeaterCreate(11, VnrHrCalendar_For_12_Template, 3, 2, "span", null, _forTrack1);
        \u0275\u0275conditionalCreate(13, VnrHrCalendar_Conditional_13_Template, 3, 0, "span");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(14, VnrHrCalendar_Conditional_14_Template, 3, 0, "div", 8);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.monthLabel());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected().length ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.dow);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.legend());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasConflict() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.summary().length ? 14 : -1);
      }
    }, styles: ["/* angular:styles/component:css;8b864f575c9131b8528e212287e19e4e22c33dac48d56c582fc4c4fda01c1759;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-cal {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-cal__bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-cal__title {\n  font-weight: var(--font-semibold, 600);\n  font-size: var(--fs-13, 13px);\n}\n.vnr-cal__clear {\n  margin-inline-start: auto;\n  border: none;\n  background: none;\n  color: var(--primary-base);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.vnr-cal__dow {\n  text-align: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-soft);\n  background: var(--bg-surface-subtle);\n  padding-block: 6px;\n}\n.vnr-cal__day {\n  position: relative;\n  block-size: clamp(32px, 6cqi, 48px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-block-start: 1px solid var(--border-soft);\n  border-inline-end: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-cal__day:focus-visible {\n  outline: 2px solid var(--text-strong);\n  outline-offset: -3px;\n  z-index: 1;\n}\n.vnr-cal__day:hover:not(:disabled) {\n  background: var(--primary-bg-subtle);\n}\n.vnr-cal__day:disabled {\n  cursor: not-allowed;\n}\n.vnr-cal__day[data-kind=weekend] {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.vnr-cal__day[data-kind=holiday] {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-cal__day[data-kind=locked] {\n  background: var(--faded-bg);\n  color: var(--text-soft);\n  text-decoration: line-through;\n}\n.vnr-cal__day.is-range {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-cal__day.is-sel {\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-cal__shift {\n  position: absolute;\n  inset-block-end: 2px;\n  font-size: var(--fs-10, 10px);\n  opacity: .85;\n}\n.vnr-cal__half {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 50%,\n      currentColor 50%);\n  opacity: .22;\n  pointer-events: none;\n}\n.vnr-cal__cf {\n  position: absolute;\n  inset-block-start: 3px;\n  inset-inline-end: 3px;\n  inline-size: 6px;\n  block-size: 6px;\n  border-radius: var(--radius-full);\n  background: var(--warning-base);\n}\n.vnr-cal__lg {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 8px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-cal__lg i {\n  inline-size: 10px;\n  block-size: 10px;\n  border-radius: var(--radius-2xs, 2px);\n  display: inline-block;\n  margin-inline-end: var(--space-1, 4px);\n  vertical-align: -1px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-cal__lg i[data-kind=weekend] {\n  background: var(--bg-surface-subtle);\n}\n.vnr-cal__lg i[data-kind=holiday] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-cal__lg i[data-kind=locked] {\n  background: var(--faded-bg);\n}\n.vnr-cal__lg i.cf {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  border-radius: var(--radius-full);\n}\n.vnr-cal__sum {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n}\n.vnr-cal__sum > div {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-cal__sum .k {\n  color: var(--text-sub);\n}\n.vnr-cal__sum .v {\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cal__sum > div[data-tone=warn] .v {\n  color: var(--warning-base);\n}\n.vnr-cal__sum > div[data-tone=success] .v {\n  color: var(--success-base);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrHrCalendar, [{
    type: Component,
    args: [{ selector: "vnr-hr-calendar", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <div class="vnr-cal">
      <div class="vnr-cal__bar">
        <span class="vnr-cal__title">{{ monthLabel() }}</span>
        @if (selected().length) {
          <button type="button" class="vnr-cal__clear" (click)="clear()">B\u1ECF ch\u1ECDn ({{ selected().length }})</button>
        }
      </div>
      <div class="vnr-cal__grid">
        @for (d of dow; track d) { <div class="vnr-cal__dow">{{ d }}</div> }
        @for (d of days(); track d.date) {
          <button type="button" class="vnr-cal__day"
            [class.is-sel]="isSel(d.date)" [class.is-range]="inRange(d.date)"
            [attr.data-kind]="d.kind" [disabled]="d.kind === 'locked'"
            [attr.aria-label]="dayLabel(d)" [attr.aria-pressed]="isSel(d.date) || inRange(d.date)"
            [title]="d.conflict || ''" (click)="pick(d)">
            <span>{{ d.day }}</span>
            @if (d.shift) { <span class="vnr-cal__shift">{{ d.shift }}</span> }
            @if (d.portion === 0.5) { <span class="vnr-cal__half"></span> }
            @if (d.conflict) { <span class="vnr-cal__cf"></span> }
          </button>
        }
      </div>
      <div class="vnr-cal__lg">
        @for (l of legend(); track l.kind) { <span><i [attr.data-kind]="l.kind"></i>{{ l.label }}</span> }
        @if (hasConflict()) { <span><i class="cf"></i>Xung \u0111\u1ED9t l\u1ECBch</span> }
      </div>
      @if (summary().length) {
        <div class="vnr-cal__sum">
          @for (s of summary(); track s.label) {
            <div [attr.data-tone]="s.tone || 'normal'"><span class="k">{{ s.label }}</span><span class="v">{{ s.value }}</span></div>
          }
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;8b864f575c9131b8528e212287e19e4e22c33dac48d56c582fc4c4fda01c1759;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-cal {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-cal__bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-cal__title {\n  font-weight: var(--font-semibold, 600);\n  font-size: var(--fs-13, 13px);\n}\n.vnr-cal__clear {\n  margin-inline-start: auto;\n  border: none;\n  background: none;\n  color: var(--primary-base);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-cal__grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.vnr-cal__dow {\n  text-align: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-soft);\n  background: var(--bg-surface-subtle);\n  padding-block: 6px;\n}\n.vnr-cal__day {\n  position: relative;\n  block-size: clamp(32px, 6cqi, 48px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-block-start: 1px solid var(--border-soft);\n  border-inline-end: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-cal__day:focus-visible {\n  outline: 2px solid var(--text-strong);\n  outline-offset: -3px;\n  z-index: 1;\n}\n.vnr-cal__day:hover:not(:disabled) {\n  background: var(--primary-bg-subtle);\n}\n.vnr-cal__day:disabled {\n  cursor: not-allowed;\n}\n.vnr-cal__day[data-kind=weekend] {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.vnr-cal__day[data-kind=holiday] {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-cal__day[data-kind=locked] {\n  background: var(--faded-bg);\n  color: var(--text-soft);\n  text-decoration: line-through;\n}\n.vnr-cal__day.is-range {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-cal__day.is-sel {\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-cal__shift {\n  position: absolute;\n  inset-block-end: 2px;\n  font-size: var(--fs-10, 10px);\n  opacity: .85;\n}\n.vnr-cal__half {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 50%,\n      currentColor 50%);\n  opacity: .22;\n  pointer-events: none;\n}\n.vnr-cal__cf {\n  position: absolute;\n  inset-block-start: 3px;\n  inset-inline-end: 3px;\n  inline-size: 6px;\n  block-size: 6px;\n  border-radius: var(--radius-full);\n  background: var(--warning-base);\n}\n.vnr-cal__lg {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 8px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-cal__lg i {\n  inline-size: 10px;\n  block-size: 10px;\n  border-radius: var(--radius-2xs, 2px);\n  display: inline-block;\n  margin-inline-end: var(--space-1, 4px);\n  vertical-align: -1px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-cal__lg i[data-kind=weekend] {\n  background: var(--bg-surface-subtle);\n}\n.vnr-cal__lg i[data-kind=holiday] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-cal__lg i[data-kind=locked] {\n  background: var(--faded-bg);\n}\n.vnr-cal__lg i.cf {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  border-radius: var(--radius-full);\n}\n.vnr-cal__sum {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n}\n.vnr-cal__sum > div {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-cal__sum .k {\n  color: var(--text-sub);\n}\n.vnr-cal__sum .v {\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cal__sum > div[data-tone=warn] .v {\n  color: var(--warning-base);\n}\n.vnr-cal__sum > div[data-tone=success] .v {\n  color: var(--success-base);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { days: [{ type: Input, args: [{ isSignal: true, alias: "days", required: true }] }], monthLabel: [{ type: Input, args: [{ isSignal: true, alias: "monthLabel", required: true }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }, { type: Output, args: ["selectedChange"] }], summary: [{ type: Input, args: [{ isSignal: true, alias: "summary", required: false }] }], selectionChange: [{ type: Output, args: ["selectionChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrHrCalendar, { className: "VnrHrCalendar", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 246 });
})();
var VnrExpenseTable = class _VnrExpenseTable {
  constructor() {
    this.rows = input.required(...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totals = input([], ...ngDevMode ? [{ debugName: "totals" }] : (
      /* istanbul ignore next */
      []
    ));
    this.readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cellChange = output();
    this.addRow = output();
    this.removeRow = output();
  }
  cell(rowId, key, value) {
    this.cellChange.emit({ rowId, key, value });
  }
  str(e) {
    return e.target.value;
  }
  num(e) {
    const v = e.target.value;
    return v === "" ? null : Number(v);
  }
  /** Chỉ ĐỊNH DẠNG hiển thị — không phải tính toán nghiệp vụ. */
  fmt(v) {
    return v == null ? "\u2014" : new Intl.NumberFormat("vi-VN").format(v);
  }
  static {
    this.\u0275fac = function VnrExpenseTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrExpenseTable)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrExpenseTable, selectors: [["vnr-expense-table"]], inputs: { rows: [1, "rows"], totals: [1, "totals"], readonly: [1, "readonly"] }, outputs: { cellChange: "cellChange", addRow: "addRow", removeRow: "removeRow" }, decls: 27, vars: 4, consts: [[1, "vnr-xt"], [1, "vnr-xt__tb"], [1, "n"], ["aria-label", "Thao t\xE1c tr\xEAn d\xF2ng", 1, "a"], [1, "vnr-xt__cards"], [1, "vnr-xt__card"], [1, "vnr-xt__empty"], [1, "vnr-xt__ct"], [1, "vnr-xt__ft"], [1, "vnr-xt__in", 3, "value"], [1, "vnr-xt__pol"], ["type", "number", "min", "0", 1, "vnr-xt__in", "n", 3, "value"], [1, "n", "amt"], [1, "a"], [1, "vnr-xt__in", 3, "change", "value"], ["type", "number", "min", "0", 1, "vnr-xt__in", "n", 3, "change", "value"], ["type", "button", 1, "vnr-xt__x", 3, "click"], [1, "hd"], [1, "nm"], [1, "am"], [1, "bd"], ["type", "button", 1, "vnr-xt__add", 3, "click"]], template: function VnrExpenseTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
        \u0275\u0275text(5, "Kho\u1EA3n m\u1EE5c");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "th", 2);
        \u0275\u0275text(7, "SL");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(8, "th", 2);
        \u0275\u0275text(9, "\u0110\u01A1n gi\xE1");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(10, "th", 2);
        \u0275\u0275text(11, "Th\xE0nh ti\u1EC1n");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(12, VnrExpenseTable_Conditional_12_Template, 1, 0, "th", 3);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(13, "tbody");
        \u0275\u0275repeaterCreate(14, VnrExpenseTable_For_15_Template, 14, 7, "tr", null, _forTrack3, false, VnrExpenseTable_ForEmpty_16_Template, 3, 1, "tr");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "tfoot");
        \u0275\u0275repeaterCreate(18, VnrExpenseTable_For_19_Template, 6, 5, "tr", null, _forTrack4);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(20, "div", 4);
        \u0275\u0275repeaterCreate(21, VnrExpenseTable_For_22_Template, 16, 6, "div", 5, _forTrack3, false, VnrExpenseTable_ForEmpty_23_Template, 2, 0, "div", 6);
        \u0275\u0275repeaterCreate(24, VnrExpenseTable_For_25_Template, 5, 3, "div", 7, _forTrack4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(26, VnrExpenseTable_Conditional_26_Template, 3, 0, "div", 8);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(!ctx.readonly() ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.totals());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.totals());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.readonly() ? 26 : -1);
      }
    }, styles: ["/* angular:styles/component:css;ba6382319386176463609770cbd1a30e9c87c83aef10872c983556b5e5d6a4c6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-xt__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n}\n.vnr-xt__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 8px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-xt__tb td {\n  padding: 6px 10px;\n  border-block-end: 1px solid var(--border-soft);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-xt__tb tbody tr:last-child td {\n  border-block-end: none;\n}\n.vnr-xt__tb .n {\n  text-align: end;\n  inline-size: 108px;\n}\n.vnr-xt__tb .a {\n  inline-size: 38px;\n  text-align: center;\n}\n.vnr-xt__tb .amt,\n.vnr-xt__in.n {\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__tb .amt {\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-xt__tb tr[data-policy=warn] {\n  background: var(--warning-bg);\n}\n.vnr-xt__tb tr[data-policy=over] {\n  background: var(--error-bg);\n}\n.vnr-xt__pol {\n  display: block;\n  margin-block-start: 3px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-xt__pol[data-s=warn] {\n  color: var(--warning-base);\n}\n.vnr-xt__pol[data-s=over] {\n  color: var(--error-base);\n}\n.vnr-xt__in {\n  inline-size: 100%;\n  block-size: 28px;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs, 4px);\n  background: transparent;\n  padding: 0 6px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-strong);\n}\n.vnr-xt__in.n {\n  text-align: end;\n}\n.vnr-xt__in:hover {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-xt__in:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-xt__in:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.vnr-xt__tb tfoot td {\n  background: var(--bg-surface-subtle);\n  font-weight: var(--font-bold, 700);\n  border-block-start: 1px solid var(--border-sub);\n}\n.vnr-xt__empty {\n  text-align: center;\n  color: var(--text-soft);\n  padding: 16px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-xt__x {\n  border: none;\n  background: none;\n  color: var(--text-soft);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  inline-size: 24px;\n  block-size: 24px;\n}\n.vnr-xt__x:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-xt__ft {\n  padding-block-start: 8px;\n}\n.vnr-xt__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-xt__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-xt__cards {\n  display: none;\n  flex-direction: column;\n  gap: 8px;\n}\n.vnr-xt__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  padding: 10px 12px;\n  background: var(--bg-surface);\n}\n.vnr-xt__card[data-policy=warn] {\n  background: var(--warning-bg);\n}\n.vnr-xt__card[data-policy=over] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-xt__card .hd {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n.vnr-xt__card .nm {\n  font-weight: var(--font-semibold, 600);\n  font-size: var(--fs-13, 13px);\n}\n.vnr-xt__card .am {\n  font-weight: var(--font-bold, 700);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__card .bd {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-xt__card .bd b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__ct {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 12px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  font-weight: var(--font-bold, 700);\n}\n.vnr-xt__ct b {\n  font-variant-numeric: tabular-nums;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-xt__tb {\n    display: none;\n  }\n  .vnr-xt__cards {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrExpenseTable, [{
    type: Component,
    args: [{ selector: "vnr-expense-table", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <div class="vnr-xt">
      <table class="vnr-xt__tb">
        <thead><tr>
          <th>Kho\u1EA3n m\u1EE5c</th><th class="n">SL</th><th class="n">\u0110\u01A1n gi\xE1</th><th class="n">Th\xE0nh ti\u1EC1n</th>
          <!-- C\u1ED9t thao t\xE1c kh\xF4ng c\xF3 ti\xEAu \u0111\u1EC1 nh\xECn th\u1EA5y \u21D2 \u0111\u1EB7t aria-label, tr\xE1nh b\u1ECB \u0111\u1ECDc l\xE0 "c\u1ED9t tr\u1ED1ng" -->
          @if (!readonly()) { <th class="a" aria-label="Thao t\xE1c tr\xEAn d\xF2ng"></th> }
        </tr></thead>
        <tbody>
          @for (r of rows(); track r.id; let i = $index) {
            <tr [attr.data-policy]="r.policyState || 'ok'">
              <td>
                @if (readonly()) { <span>{{ r.category }}</span> }
                <!-- M\u1ECDi \xF4 nh\u1EADp \u0111\u1EC1u ph\u1EA3i c\xF3 nh\xE3n K\xC8M S\u1ED0 D\xD2NG: b\u1EA3ng n\xE0y kh\xF4ng c\xF3 <label> n\xE0o,
                     thi\u1EBFu aria-label th\xEC tr\xECnh \u0111\u1ECDc m\xE0n h\xECnh ch\u1EC9 \u0111\u1ECDc "\xF4 nh\u1EADp v\u0103n b\u1EA3n", kh\xF4ng r\xF5 c\u1ED9t n\xE0o d\xF2ng n\xE0o. -->
                @else { <input class="vnr-xt__in" [value]="r.category"
                  [attr.aria-label]="'Kho\u1EA3n m\u1EE5c, d\xF2ng ' + (i + 1)" (change)="cell(r.id, 'category', str($event))" /> }
                @if (r.policyMessage) { <span class="vnr-xt__pol" [attr.data-s]="r.policyState">{{ r.policyMessage }}</span> }
              </td>
              <td class="n">
                @if (readonly()) { <span>{{ r.quantity }}</span> }
                @else { <input class="vnr-xt__in n" type="number" min="0" [value]="r.quantity"
                  [attr.aria-label]="'S\u1ED1 l\u01B0\u1EE3ng, d\xF2ng ' + (i + 1)" (change)="cell(r.id, 'quantity', num($event))" /> }
              </td>
              <td class="n">
                @if (readonly()) { <span>{{ fmt(r.unitPrice) }}</span> }
                @else { <input class="vnr-xt__in n" type="number" min="0" [value]="r.unitPrice"
                  [attr.aria-label]="'\u0110\u01A1n gi\xE1, d\xF2ng ' + (i + 1)" (change)="cell(r.id, 'unitPrice', num($event))" /> }
              </td>
              <!-- Th\xE0nh ti\u1EC1n LU\xD4N read-only: c\xF4ng th\u1EE9c thu\u1ED9c business-rule layer -->
              <td class="n amt">{{ fmt(r.amount) }}</td>
              @if (!readonly()) { <td class="a"><button type="button" class="vnr-xt__x"
                (click)="removeRow.emit(r.id)" [attr.aria-label]="'Xo\xE1 d\xF2ng ' + (i + 1)">\u2715</button></td> }
            </tr>
          } @empty {
            <tr><td class="vnr-xt__empty" [attr.colspan]="readonly() ? 4 : 5">Ch\u01B0a c\xF3 kho\u1EA3n chi ph\xED n\xE0o.</td></tr>
          }
        </tbody>
        <tfoot>
          @for (t of totals(); track t.currency) {
            <tr><td [attr.colspan]="3">{{ t.label || 'T\u1ED5ng c\u1ED9ng' }} ({{ t.currency }})</td>
              <td class="n amt">{{ fmt(t.amount) }}</td>@if (!readonly()) { <td></td> }</tr>
          }
        </tfoot>
      </table>

      <!-- Card fallback (container h\u1EB9p) \u2014 c\xF9ng d\u1EEF li\u1EC7u, kh\xF4ng cu\u1ED9n ngang -->
      <div class="vnr-xt__cards">
        @for (r of rows(); track r.id) {
          <div class="vnr-xt__card" [attr.data-policy]="r.policyState || 'ok'">
            <div class="hd"><span class="nm">{{ r.category }}</span><span class="am">{{ fmt(r.amount) }}</span></div>
            <div class="bd"><span>SL: <b>{{ r.quantity }}</b></span><span>\u0110\u01A1n gi\xE1: <b>{{ fmt(r.unitPrice) }}</b></span></div>
            @if (r.policyMessage) { <div class="vnr-xt__pol" [attr.data-s]="r.policyState">{{ r.policyMessage }}</div> }
          </div>
        } @empty { <div class="vnr-xt__empty">Ch\u01B0a c\xF3 kho\u1EA3n chi ph\xED n\xE0o.</div> }
        @for (t of totals(); track t.currency) {
          <div class="vnr-xt__ct"><span>{{ t.label || 'T\u1ED5ng c\u1ED9ng' }} ({{ t.currency }})</span><b>{{ fmt(t.amount) }}</b></div>
        }
      </div>

      @if (!readonly()) {
        <div class="vnr-xt__ft"><button type="button" class="vnr-xt__add" (click)="addRow.emit()">+ Th\xEAm kho\u1EA3n chi ph\xED</button></div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;ba6382319386176463609770cbd1a30e9c87c83aef10872c983556b5e5d6a4c6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-xt__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n}\n.vnr-xt__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 8px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-xt__tb td {\n  padding: 6px 10px;\n  border-block-end: 1px solid var(--border-soft);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-xt__tb tbody tr:last-child td {\n  border-block-end: none;\n}\n.vnr-xt__tb .n {\n  text-align: end;\n  inline-size: 108px;\n}\n.vnr-xt__tb .a {\n  inline-size: 38px;\n  text-align: center;\n}\n.vnr-xt__tb .amt,\n.vnr-xt__in.n {\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__tb .amt {\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-xt__tb tr[data-policy=warn] {\n  background: var(--warning-bg);\n}\n.vnr-xt__tb tr[data-policy=over] {\n  background: var(--error-bg);\n}\n.vnr-xt__pol {\n  display: block;\n  margin-block-start: 3px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-xt__pol[data-s=warn] {\n  color: var(--warning-base);\n}\n.vnr-xt__pol[data-s=over] {\n  color: var(--error-base);\n}\n.vnr-xt__in {\n  inline-size: 100%;\n  block-size: 28px;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs, 4px);\n  background: transparent;\n  padding: 0 6px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-strong);\n}\n.vnr-xt__in.n {\n  text-align: end;\n}\n.vnr-xt__in:hover {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-xt__in:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-xt__in:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.vnr-xt__tb tfoot td {\n  background: var(--bg-surface-subtle);\n  font-weight: var(--font-bold, 700);\n  border-block-start: 1px solid var(--border-sub);\n}\n.vnr-xt__empty {\n  text-align: center;\n  color: var(--text-soft);\n  padding: 16px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-xt__x {\n  border: none;\n  background: none;\n  color: var(--text-soft);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  inline-size: 24px;\n  block-size: 24px;\n}\n.vnr-xt__x:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-xt__ft {\n  padding-block-start: 8px;\n}\n.vnr-xt__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-xt__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-xt__cards {\n  display: none;\n  flex-direction: column;\n  gap: 8px;\n}\n.vnr-xt__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  padding: 10px 12px;\n  background: var(--bg-surface);\n}\n.vnr-xt__card[data-policy=warn] {\n  background: var(--warning-bg);\n}\n.vnr-xt__card[data-policy=over] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-xt__card .hd {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 10px;\n}\n.vnr-xt__card .nm {\n  font-weight: var(--font-semibold, 600);\n  font-size: var(--fs-13, 13px);\n}\n.vnr-xt__card .am {\n  font-weight: var(--font-bold, 700);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__card .bd {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-xt__card .bd b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-xt__ct {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 12px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  font-weight: var(--font-bold, 700);\n}\n.vnr-xt__ct b {\n  font-variant-numeric: tabular-nums;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-xt__tb {\n    display: none;\n  }\n  .vnr-xt__cards {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true }] }], totals: [{ type: Input, args: [{ isSignal: true, alias: "totals", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], cellChange: [{ type: Output, args: ["cellChange"] }], addRow: [{ type: Output, args: ["addRow"] }], removeRow: [{ type: Output, args: ["removeRow"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrExpenseTable, { className: "VnrExpenseTable", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 449 });
})();
var VnrChangeComparison = class _VnrChangeComparison {
  constructor() {
    this.rows = input.required(...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentLabel = input("Hi\u1EC7n t\u1EA1i", ...ngDevMode ? [{ debugName: "currentLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.proposedLabel = input("\u0110\u1EC1 xu\u1EA5t", ...ngDevMode ? [{ debugName: "proposedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.effectiveDate = input(null, ...ngDevMode ? [{ debugName: "effectiveDate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isFuture = input(false, ...ngDevMode ? [{ debugName: "isFuture" }] : (
      /* istanbul ignore next */
      []
    ));
    this.impacted = input([], ...ngDevMode ? [{ debugName: "impacted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.scheduled = input([], ...ngDevMode ? [{ debugName: "scheduled" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function VnrChangeComparison_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrChangeComparison)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrChangeComparison, selectors: [["vnr-change-comparison"]], inputs: { rows: [1, "rows"], currentLabel: [1, "currentLabel"], proposedLabel: [1, "proposedLabel"], effectiveDate: [1, "effectiveDate"], isFuture: [1, "isFuture"], impacted: [1, "impacted"], scheduled: [1, "scheduled"] }, decls: 12, vars: 5, consts: [[1, "vnr-cc"], [1, "vnr-cc__eff"], [1, "vnr-cc__hd"], [1, "vnr-cc__row", 3, "is-same"], [1, "vnr-cc__im"], [1, "vnr-cc__sc"], [1, "k"], [1, "v"], [1, "vnr-cc__bg"], [1, "vnr-cc__row"], [1, "c"], [1, "lb"], [1, "val"], [1, "ar"], [1, "lb", "lbm"], [1, "val", "new"], [1, "dl"], [1, "t"], [1, "chip"], [1, "r", 3, "cf"], [1, "r"], [1, "d"], [1, "s"], [1, "w"]], template: function VnrChangeComparison_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, VnrChangeComparison_Conditional_1_Template, 6, 2, "div", 1);
        \u0275\u0275domElementStart(2, "div", 2)(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(5, "span");
        \u0275\u0275domElementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275domElementEnd()();
        \u0275\u0275repeaterCreate(8, VnrChangeComparison_For_9_Template, 14, 8, "div", 3, _forTrack2);
        \u0275\u0275conditionalCreate(10, VnrChangeComparison_Conditional_10_Template, 5, 0, "div", 4);
        \u0275\u0275conditionalCreate(11, VnrChangeComparison_Conditional_11_Template, 5, 0, "div", 5);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.effectiveDate() ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.currentLabel());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.proposedLabel());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.impacted().length ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.scheduled().length ? 11 : -1);
      }
    }, styles: ["/* angular:styles/component:css;be94e7a01a81c01d9fed677781ea1229df3ac697dd347605d1b114760756c15a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-cc {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-cc__eff {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--primary-bg-subtle);\n  border-block-end: 1px solid var(--border-soft);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-cc__eff .k {\n  color: var(--text-sub);\n}\n.vnr-cc__eff .v {\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cc__bg {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 2px 9px;\n}\n.vnr-cc__hd {\n  display: grid;\n  grid-template-columns: 1fr 26px 1fr;\n  gap: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-cc__row {\n  display: grid;\n  grid-template-columns: 1fr 26px 1fr;\n  gap: 8px;\n  align-items: center;\n  padding: 9px 12px;\n  border-block-start: 1px solid var(--border-soft);\n}\n.vnr-cc__row.is-same {\n  opacity: .55;\n}\n.vnr-cc__row .c {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-cc__row .lb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-cc__row .lbm {\n  display: none;\n}\n.vnr-cc__row .val {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  word-break: break-word;\n}\n.vnr-cc__row .val.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-cc__row .ar {\n  text-align: center;\n  color: var(--text-soft);\n}\n.vnr-cc__row .dl {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cc__row[data-tone=up] .val.new,\n.vnr-cc__row[data-tone=up] .dl {\n  color: var(--success-base);\n}\n.vnr-cc__row[data-tone=down] .val.new,\n.vnr-cc__row[data-tone=down] .dl {\n  color: var(--error-base);\n}\n.vnr-cc__row[data-tone=warn] .val.new,\n.vnr-cc__row[data-tone=warn] .dl {\n  color: var(--warning-base);\n}\n.vnr-cc__im {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n}\n.vnr-cc__im .t,\n.vnr-cc__sc .t {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-cc__im .chip {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 3px 10px;\n}\n.vnr-cc__sc {\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n}\n.vnr-cc__sc .r {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  font-size: var(--fs-12, 12px);\n  margin-block-start: 5px;\n}\n.vnr-cc__sc .d {\n  font-variant-numeric: tabular-nums;\n  color: var(--text-sub);\n  flex: none;\n}\n.vnr-cc__sc .r.cf .s {\n  color: var(--warning-base);\n  font-weight: var(--font-medium, 500);\n}\n.vnr-cc__sc .w {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n  background: var(--warning-bg);\n  border-radius: var(--radius-full);\n  padding: 2px 8px;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-cc__hd {\n    display: none;\n  }\n  .vnr-cc__row {\n    grid-template-columns: 1fr;\n    gap: 2px;\n  }\n  .vnr-cc__row .ar {\n    text-align: start;\n    transform: rotate(90deg);\n    inline-size: 16px;\n  }\n  .vnr-cc__row .lbm {\n    display: block;\n  }\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrChangeComparison, [{
    type: Component,
    args: [{ selector: "vnr-change-comparison", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <div class="vnr-cc">
      @if (effectiveDate()) {
        <div class="vnr-cc__eff">
          <span class="k">Hi\u1EC7u l\u1EF1c t\u1EEB</span><span class="v">{{ effectiveDate() }}</span>
          @if (isFuture()) { <span class="vnr-cc__bg">L\xEAn l\u1ECBch tr\u01B0\u1EDBc</span> }
        </div>
      }
      <div class="vnr-cc__hd"><span>{{ currentLabel() }}</span><span></span><span>{{ proposedLabel() }}</span></div>
      @for (r of rows(); track r.label) {
        <div class="vnr-cc__row" [class.is-same]="r.changed === false" [attr.data-tone]="r.tone || 'neutral'">
          <div class="c"><span class="lb">{{ r.label }}</span><span class="val">{{ r.current || '\u2014' }}</span></div>
          <div class="ar">\u2192</div>
          <div class="c"><span class="lb lbm">{{ r.label }}</span><span class="val new">{{ r.proposed || '\u2014' }}</span>
            @if (r.delta) { <span class="dl">{{ r.delta }}</span> }</div>
        </div>
      }
      @if (impacted().length) {
        <div class="vnr-cc__im"><span class="t">\u1EA2nh h\u01B0\u1EDFng t\u1EDBi</span>
          @for (m of impacted(); track m) { <span class="chip">{{ m }}</span> }</div>
      }
      @if (scheduled().length) {
        <div class="vnr-cc__sc"><span class="t">Thay \u0111\u1ED5i \u0111\xE3 l\xEAn l\u1ECBch</span>
          @for (s of scheduled(); track s.effectiveDate) {
            <div class="r" [class.cf]="s.conflict"><span class="d">{{ s.effectiveDate }}</span><span class="s">{{ s.summary }}</span>
              @if (s.conflict) { <span class="w">Tr\xF9ng ng\xE0y hi\u1EC7u l\u1EF1c</span> }</div>
          }</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;be94e7a01a81c01d9fed677781ea1229df3ac697dd347605d1b114760756c15a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-cc {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-cc__eff {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--primary-bg-subtle);\n  border-block-end: 1px solid var(--border-soft);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-cc__eff .k {\n  color: var(--text-sub);\n}\n.vnr-cc__eff .v {\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cc__bg {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 2px 9px;\n}\n.vnr-cc__hd {\n  display: grid;\n  grid-template-columns: 1fr 26px 1fr;\n  gap: 8px;\n  padding: 6px 12px;\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-cc__row {\n  display: grid;\n  grid-template-columns: 1fr 26px 1fr;\n  gap: 8px;\n  align-items: center;\n  padding: 9px 12px;\n  border-block-start: 1px solid var(--border-soft);\n}\n.vnr-cc__row.is-same {\n  opacity: .55;\n}\n.vnr-cc__row .c {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-cc__row .lb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-cc__row .lbm {\n  display: none;\n}\n.vnr-cc__row .val {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  word-break: break-word;\n}\n.vnr-cc__row .val.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-cc__row .ar {\n  text-align: center;\n  color: var(--text-soft);\n}\n.vnr-cc__row .dl {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-cc__row[data-tone=up] .val.new,\n.vnr-cc__row[data-tone=up] .dl {\n  color: var(--success-base);\n}\n.vnr-cc__row[data-tone=down] .val.new,\n.vnr-cc__row[data-tone=down] .dl {\n  color: var(--error-base);\n}\n.vnr-cc__row[data-tone=warn] .val.new,\n.vnr-cc__row[data-tone=warn] .dl {\n  color: var(--warning-base);\n}\n.vnr-cc__im {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n}\n.vnr-cc__im .t,\n.vnr-cc__sc .t {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-cc__im .chip {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 3px 10px;\n}\n.vnr-cc__sc {\n  padding: 10px 12px;\n  border-block-start: 1px solid var(--border-soft);\n  background: var(--bg-surface-subtle);\n}\n.vnr-cc__sc .r {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  font-size: var(--fs-12, 12px);\n  margin-block-start: 5px;\n}\n.vnr-cc__sc .d {\n  font-variant-numeric: tabular-nums;\n  color: var(--text-sub);\n  flex: none;\n}\n.vnr-cc__sc .r.cf .s {\n  color: var(--warning-base);\n  font-weight: var(--font-medium, 500);\n}\n.vnr-cc__sc .w {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n  background: var(--warning-bg);\n  border-radius: var(--radius-full);\n  padding: 2px 8px;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-cc__hd {\n    display: none;\n  }\n  .vnr-cc__row {\n    grid-template-columns: 1fr;\n    gap: 2px;\n  }\n  .vnr-cc__row .ar {\n    text-align: start;\n    transform: rotate(90deg);\n    inline-size: 16px;\n  }\n  .vnr-cc__row .lbm {\n    display: block;\n  }\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true }] }], currentLabel: [{ type: Input, args: [{ isSignal: true, alias: "currentLabel", required: false }] }], proposedLabel: [{ type: Input, args: [{ isSignal: true, alias: "proposedLabel", required: false }] }], effectiveDate: [{ type: Input, args: [{ isSignal: true, alias: "effectiveDate", required: false }] }], isFuture: [{ type: Input, args: [{ isSignal: true, alias: "isFuture", required: false }] }], impacted: [{ type: Input, args: [{ isSignal: true, alias: "impacted", required: false }] }], scheduled: [{ type: Input, args: [{ isSignal: true, alias: "scheduled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrChangeComparison, { className: "VnrChangeComparison", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 572 });
})();
var VnrRepeatableGroup = class _VnrRepeatableGroup {
  constructor() {
    this.items = input.required(...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemTemplate = input.required(...ngDevMode ? [{ debugName: "itemTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemLabel = input("M\u1EE5c", ...ngDevMode ? [{ debugName: "itemLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm m\u1EE5c", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Ch\u01B0a c\xF3 m\u1EE5c n\xE0o.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.primaryId = input(null, ...ngDevMode ? [{ debugName: "primaryId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allowPrimary = input(false, ...ngDevMode ? [{ debugName: "allowPrimary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allowDuplicate = input(false, ...ngDevMode ? [{ debugName: "allowDuplicate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(null, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minItems = input(0, ...ngDevMode ? [{ debugName: "minItems" }] : (
      /* istanbul ignore next */
      []
    ));
    this.add = output();
    this.remove = output();
    this.duplicate = output();
    this.setPrimary = output();
  }
  canAdd() {
    const m = this.max();
    return m == null || this.items().length < m;
  }
  canRemove() {
    return this.items().length > this.minItems();
  }
  static {
    this.\u0275fac = function VnrRepeatableGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrRepeatableGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrRepeatableGroup, selectors: [["vnr-repeatable-group"]], inputs: { items: [1, "items"], itemTemplate: [1, "itemTemplate"], itemLabel: [1, "itemLabel"], addLabel: [1, "addLabel"], emptyText: [1, "emptyText"], primaryId: [1, "primaryId"], allowPrimary: [1, "allowPrimary"], allowDuplicate: [1, "allowDuplicate"], max: [1, "max"], minItems: [1, "minItems"] }, outputs: { add: "add", remove: "remove", duplicate: "duplicate", setPrimary: "setPrimary" }, decls: 6, vars: 2, consts: [[1, "vnr-rp"], [1, "vnr-rp__it", 3, "is-primary", "has-err"], ["preset", "no-data", 3, "description"], ["type", "button", 1, "vnr-rp__add"], [1, "vnr-rp__limit"], [1, "vnr-rp__it"], [1, "vnr-rp__hd"], [1, "ix"], [1, "ti"], [1, "pm"], [1, "sp"], ["type", "button", 1, "vnr-rp__b"], ["type", "button", "aria-label", "Xo\xE1", 1, "vnr-rp__b", "is-danger"], [1, "vnr-rp__bd"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "vnr-rp__err"], ["type", "button", 1, "vnr-rp__b", 3, "click"], ["type", "button", "aria-label", "Xo\xE1", 1, "vnr-rp__b", "is-danger", 3, "click"], ["type", "button", 1, "vnr-rp__add", 3, "click"]], template: function VnrRepeatableGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, VnrRepeatableGroup_For_2_Template, 14, 17, "div", 1, _forTrack3, false, VnrRepeatableGroup_ForEmpty_3_Template, 1, 1, "hrm-empty", 2);
        \u0275\u0275conditionalCreate(4, VnrRepeatableGroup_Conditional_4_Template, 2, 1, "button", 3)(5, VnrRepeatableGroup_Conditional_5_Template, 2, 2, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.canAdd() ? 4 : 5);
      }
    }, dependencies: [NgTemplateOutlet, HrmEmpty], styles: ["/* angular:styles/component:css;922ba28c1029ab561f5260d293cf2e278bc38ff1e56f13400001c6cab0fd543a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-rp {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-rp__it {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-rp__it.is-primary {\n  border-color: var(--primary-base);\n}\n.vnr-rp__it.has-err {\n  border-color: var(--error-base);\n}\n.vnr-rp__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: 7px 10px;\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-rp__hd .ix {\n  inline-size: 20px;\n  block-size: 20px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  flex: none;\n}\n.vnr-rp__hd .ti {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-rp__hd .pm {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n}\n.vnr-rp__hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-rp__b {\n  border: none;\n  background: none;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-rp__b:hover {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n}\n.vnr-rp__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-rp__bd {\n  padding: 10px;\n}\n.vnr-rp__err {\n  padding: 6px 10px;\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-rp__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 7px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-rp__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-rp__limit {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrRepeatableGroup, [{
    type: Component,
    args: [{ selector: "vnr-repeatable-group", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NgTemplateOutlet, HrmEmpty], template: `
    <div class="vnr-rp">
      @for (it of items(); track it.id; let i = $index) {
        <div class="vnr-rp__it" [class.is-primary]="it.id === primaryId()" [class.has-err]="!!it.error">
          <div class="vnr-rp__hd">
            <span class="ix">{{ i + 1 }}</span>
            <span class="ti">{{ it.title || (itemLabel() + ' ' + (i + 1)) }}</span>
            @if (it.id === primaryId()) { <span class="pm">Ch\xEDnh</span> }
            <span class="sp"></span>
            @if (allowPrimary() && it.id !== primaryId()) {
              <button type="button" class="vnr-rp__b" (click)="setPrimary.emit(it.id)">\u0110\u1EB7t l\xE0m ch\xEDnh</button>
            }
            @if (allowDuplicate()) {
              <button type="button" class="vnr-rp__b" (click)="duplicate.emit(it.id)">Nh\xE2n b\u1EA3n</button>
            }
            @if (canRemove()) {
              <button type="button" class="vnr-rp__b is-danger" (click)="remove.emit(it.id)" aria-label="Xo\xE1">\u2715</button>
            }
          </div>
          <div class="vnr-rp__bd">
            <ng-container *ngTemplateOutlet="itemTemplate(); context: { $implicit: it.data, index: i, id: it.id }" />
          </div>
          @if (it.error) { <div class="vnr-rp__err">{{ it.error }}</div> }
        </div>
      } @empty {
        <hrm-empty preset="no-data" [description]="emptyText()" />
      }

      @if (canAdd()) {
        <button type="button" class="vnr-rp__add" (click)="add.emit()">+ {{ addLabel() }}</button>
      } @else {
        <div class="vnr-rp__limit">\u0110\xE3 \u0111\u1EA1t t\u1ED1i \u0111a {{ max() }} {{ itemLabel().toLowerCase() }}.</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;922ba28c1029ab561f5260d293cf2e278bc38ff1e56f13400001c6cab0fd543a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-rp {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-rp__it {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-rp__it.is-primary {\n  border-color: var(--primary-base);\n}\n.vnr-rp__it.has-err {\n  border-color: var(--error-base);\n}\n.vnr-rp__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: 7px 10px;\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-rp__hd .ix {\n  inline-size: 20px;\n  block-size: 20px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  flex: none;\n}\n.vnr-rp__hd .ti {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-rp__hd .pm {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n}\n.vnr-rp__hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-rp__b {\n  border: none;\n  background: none;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-rp__b:hover {\n  background: var(--bg-surface);\n  color: var(--primary-base);\n}\n.vnr-rp__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-rp__bd {\n  padding: 10px;\n}\n.vnr-rp__err {\n  padding: 6px 10px;\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-rp__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 7px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-rp__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-rp__limit {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: true }] }], itemTemplate: [{ type: Input, args: [{ isSignal: true, alias: "itemTemplate", required: true }] }], itemLabel: [{ type: Input, args: [{ isSignal: true, alias: "itemLabel", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], primaryId: [{ type: Input, args: [{ isSignal: true, alias: "primaryId", required: false }] }], allowPrimary: [{ type: Input, args: [{ isSignal: true, alias: "allowPrimary", required: false }] }], allowDuplicate: [{ type: Input, args: [{ isSignal: true, alias: "allowDuplicate", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], minItems: [{ type: Input, args: [{ isSignal: true, alias: "minItems", required: false }] }], add: [{ type: Output, args: ["add"] }], remove: [{ type: Output, args: ["remove"] }], duplicate: [{ type: Output, args: ["duplicate"] }], setPrimary: [{ type: Output, args: ["setPrimary"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrRepeatableGroup, { className: "VnrRepeatableGroup", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 660 });
})();
var VnrDocumentGroup = class _VnrDocumentGroup {
  constructor() {
    this.documents = input.required(...ngDevMode ? [{ debugName: "documents" }] : (
      /* istanbul ignore next */
      []
    ));
    this.readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm t\xE0i li\u1EC7u", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Ch\u01B0a c\xF3 t\xE0i li\u1EC7u n\xE0o.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.add = output();
    this.remove = output();
    this.download = output();
  }
  /** Che bớt số giấy tờ nhạy cảm — chỉ hiển thị, dữ liệu gốc không đổi. */
  mask(v) {
    return v.length <= 4 ? "\u2022\u2022\u2022\u2022" : "\u2022".repeat(Math.max(0, v.length - 4)) + v.slice(-4);
  }
  verifLabel(v) {
    return v === "verified" ? "\u0110\xE3 x\xE1c minh" : v === "rejected" ? "B\u1ECB t\u1EEB ch\u1ED1i" : "Ch\u1EDD x\xE1c minh";
  }
  static {
    this.\u0275fac = function VnrDocumentGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrDocumentGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrDocumentGroup, selectors: [["vnr-document-group"]], inputs: { documents: [1, "documents"], readonly: [1, "readonly"], addLabel: [1, "addLabel"], emptyText: [1, "emptyText"] }, outputs: { add: "add", remove: "remove", download: "download" }, decls: 5, vars: 2, consts: [[1, "vnr-dg"], [1, "vnr-dg__it"], ["preset", "no-data", 3, "description"], ["type", "button", 1, "vnr-dg__add"], [1, "vnr-dg__hd"], [1, "ty"], [1, "no"], [1, "vf"], [1, "sp"], ["type", "button", "aria-label", "Xo\xE1 t\xE0i li\u1EC7u", 1, "vnr-dg__b", "is-danger"], [1, "vnr-dg__meta"], [1, "vnr-dg__warn"], [1, "vnr-dg__file"], [1, "fn", "is-none"], ["type", "button", "aria-label", "Xo\xE1 t\xE0i li\u1EC7u", 1, "vnr-dg__b", "is-danger", 3, "click"], [1, "fn"], [1, "lk"], ["type", "button", 1, "vnr-dg__b"], ["type", "button", 1, "vnr-dg__b", 3, "click"], ["type", "button", 1, "vnr-dg__add", 3, "click"]], template: function VnrDocumentGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, VnrDocumentGroup_For_2_Template, 16, 10, "div", 1, _forTrack3, false, VnrDocumentGroup_ForEmpty_3_Template, 1, 1, "hrm-empty", 2);
        \u0275\u0275conditionalCreate(4, VnrDocumentGroup_Conditional_4_Template, 2, 1, "button", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.documents());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.readonly() ? 4 : -1);
      }
    }, dependencies: [HrmEmpty], styles: ["/* angular:styles/component:css;2a2c282838aaa16adf85e3dd9f759c7d4ddb428bf10e293eb57668ddee0262f1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-dg {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-dg__it {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: 9px 11px;\n}\n.vnr-dg__it[data-exp=soon] {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-dg__it[data-exp=expired] {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-dg__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.vnr-dg__hd .ty {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-dg__hd .no {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-dg__hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-dg__hd .vf {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n}\n.vnr-dg__hd .vf[data-v=verified] {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-dg__hd .vf[data-v=pending] {\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n.vnr-dg__hd .vf[data-v=rejected] {\n  color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-dg__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-dg__meta b {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-dg__warn {\n  margin-block-start: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-dg__warn[data-exp=soon] {\n  color: var(--warning-base);\n}\n.vnr-dg__warn[data-exp=expired] {\n  color: var(--error-base);\n}\n.vnr-dg__file {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-block-start: 6px;\n  padding-block-start: 6px;\n  border-block-start: 1px dashed var(--border-sub);\n}\n.vnr-dg__file .fn {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n}\n.vnr-dg__file .fn.is-none {\n  color: var(--text-soft);\n  font-style: italic;\n}\n.vnr-dg__file .lk {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-dg__b {\n  border: none;\n  background: none;\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-dg__b:hover {\n  background: var(--primary-bg-subtle);\n}\n.vnr-dg__b.is-danger {\n  color: var(--text-soft);\n}\n.vnr-dg__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-dg__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 7px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-dg__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrDocumentGroup, [{
    type: Component,
    args: [{ selector: "vnr-document-group", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [HrmEmpty], template: `
    <div class="vnr-dg">
      @for (d of documents(); track d.id) {
        <div class="vnr-dg__it" [attr.data-exp]="d.expiryState || 'valid'">
          <div class="vnr-dg__hd">
            <span class="ty">{{ d.type }}</span>
            @if (d.number) {
              <span class="no">{{ d.sensitive ? mask(d.number) : d.number }}</span>
            }
            @if (d.verification) {
              <span class="vf" [attr.data-v]="d.verification">{{ verifLabel(d.verification) }}</span>
            }
            <span class="sp"></span>
            @if (!readonly()) {
              <button type="button" class="vnr-dg__b is-danger" (click)="remove.emit(d.id)" aria-label="Xo\xE1 t\xE0i li\u1EC7u">\u2715</button>
            }
          </div>
          <div class="vnr-dg__meta">
            @if (d.issueDate)  { <span>Ng\xE0y c\u1EA5p: <b>{{ d.issueDate }}</b></span> }
            @if (d.expiryDate) { <span>H\u1EBFt h\u1EA1n: <b>{{ d.expiryDate }}</b></span> }
            @if (d.authority)  { <span>N\u01A1i c\u1EA5p: <b>{{ d.authority }}</b></span> }
          </div>
          @if (d.expiryNote) {
            <div class="vnr-dg__warn" [attr.data-exp]="d.expiryState">{{ d.expiryNote }}</div>
          }
          <div class="vnr-dg__file">
            @if (d.fileName) {
              <span class="fn">{{ d.fileName }}</span>
              @if (d.sensitive && d.canDownload === false) {
                <span class="lk">Kh\xF4ng \u0111\u1EE7 quy\u1EC1n t\u1EA3i xu\u1ED1ng</span>
              } @else {
                <button type="button" class="vnr-dg__b" (click)="download.emit(d.id)">T\u1EA3i xu\u1ED1ng</button>
              }
            } @else {
              <span class="fn is-none">Ch\u01B0a \u0111\xEDnh k\xE8m t\u1EC7p</span>
            }
          </div>
        </div>
      } @empty {
        <hrm-empty preset="no-data" [description]="emptyText()" />
      }
      @if (!readonly()) {
        <button type="button" class="vnr-dg__add" (click)="add.emit()">+ {{ addLabel() }}</button>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;2a2c282838aaa16adf85e3dd9f759c7d4ddb428bf10e293eb57668ddee0262f1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-dg {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-dg__it {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: 9px 11px;\n}\n.vnr-dg__it[data-exp=soon] {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-dg__it[data-exp=expired] {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-dg__hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.vnr-dg__hd .ty {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-dg__hd .no {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-dg__hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-dg__hd .vf {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n}\n.vnr-dg__hd .vf[data-v=verified] {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-dg__hd .vf[data-v=pending] {\n  color: var(--text-sub);\n  background: var(--bg-surface-subtle);\n}\n.vnr-dg__hd .vf[data-v=rejected] {\n  color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-dg__meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-dg__meta b {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-dg__warn {\n  margin-block-start: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-dg__warn[data-exp=soon] {\n  color: var(--warning-base);\n}\n.vnr-dg__warn[data-exp=expired] {\n  color: var(--error-base);\n}\n.vnr-dg__file {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-block-start: 6px;\n  padding-block-start: 6px;\n  border-block-start: 1px dashed var(--border-sub);\n}\n.vnr-dg__file .fn {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n}\n.vnr-dg__file .fn.is-none {\n  color: var(--text-soft);\n  font-style: italic;\n}\n.vnr-dg__file .lk {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-dg__b {\n  border: none;\n  background: none;\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-dg__b:hover {\n  background: var(--primary-bg-subtle);\n}\n.vnr-dg__b.is-danger {\n  color: var(--text-soft);\n}\n.vnr-dg__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-dg__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 7px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-dg__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { documents: [{ type: Input, args: [{ isSignal: true, alias: "documents", required: true }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], add: [{ type: Output, args: ["add"] }], remove: [{ type: Output, args: ["remove"] }], download: [{ type: Output, args: ["download"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrDocumentGroup, { className: "VnrDocumentGroup", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 806 });
})();
var VnrApprovalPanel = class _VnrApprovalPanel {
  constructor() {
    this.steps = input.required(...ngDevMode ? [{ debugName: "steps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.warnings = input([], ...ngDevMode ? [{ debugName: "warnings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.impacted = input([], ...ngDevMode ? [{ debugName: "impacted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedCount = input(0, ...ngDevMode ? [{ debugName: "collapsedCount" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Quy đổi mức cảnh báo NGHIỆP VỤ sang kiểu của hrm-alert — chỉ khác tên ('warn' ↔ 'warning'),
   *  giữ nguyên 3 mức đang dùng thay vì ép tất cả về một màu. */
  alertType(level) {
    return level === "warn" ? "warning" : level;
  }
  static {
    this.\u0275fac = function VnrApprovalPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrApprovalPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrApprovalPanel, selectors: [["vnr-approval-panel"]], inputs: { steps: [1, "steps"], warnings: [1, "warnings"], impacted: [1, "impacted"], collapsedCount: [1, "collapsedCount"] }, ngContentSelectors: _c0, decls: 5, vars: 4, consts: [[1, "vnr-ap"], [1, "vnr-ap__warns"], [3, "steps", "collapsedCount"], [1, "vnr-ap__im"], [3, "type", "message"], [1, "t"], [1, "chip"]], template: function VnrApprovalPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, VnrApprovalPanel_Conditional_1_Template, 3, 0, "div", 1);
        \u0275\u0275element(2, "hrm-approval-flow", 2);
        \u0275\u0275conditionalCreate(3, VnrApprovalPanel_Conditional_3_Template, 5, 0, "div", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.warnings().length ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("steps", ctx.steps())("collapsedCount", ctx.collapsedCount());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.impacted().length ? 3 : -1);
      }
    }, dependencies: [HrmApprovalFlow, HrmAlert], styles: ["/* angular:styles/component:css;b7bfa6074baf2230910881127c5169e33446f458880d32e18607e2a40a597ff5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-ap {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-ap__warns {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1-5, 6px);\n}\n.vnr-ap__im {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.vnr-ap__im .t {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-ap__im .chip {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 3px 10px;\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrApprovalPanel, [{
    type: Component,
    args: [{ selector: "vnr-approval-panel", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [HrmApprovalFlow, HrmAlert], template: `
    <div class="vnr-ap">
      @if (warnings().length) {
        <div class="vnr-ap__warns">
          @for (w of warnings(); track w.message) {
            <hrm-alert [type]="alertType(w.level)" [message]="w.message" />
          }
        </div>
      }

      <hrm-approval-flow [steps]="steps()" [collapsedCount]="collapsedCount()" />

      @if (impacted().length) {
        <div class="vnr-ap__im">
          <span class="t">T\xE1c \u0111\u1ED9ng khi duy\u1EC7t</span>
          @for (m of impacted(); track m) { <span class="chip">{{ m }}</span> }
        </div>
      }

      <!-- Slot cho thanh quy\u1EBFt \u0111\u1ECBnh (Duy\u1EC7t / T\u1EEB ch\u1ED1i / Y\xEAu c\u1EA7u ch\u1EC9nh s\u1EEDa / U\u1EF7 quy\u1EC1n) -->
      <ng-content />
    </div>
  `, styles: ["/* angular:styles/component:css;b7bfa6074baf2230910881127c5169e33446f458880d32e18607e2a40a597ff5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts */\n.vnr-ap {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-ap__warns {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1-5, 6px);\n}\n.vnr-ap__im {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.vnr-ap__im .t {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n}\n.vnr-ap__im .chip {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--info-base);\n  background: var(--info-bg);\n  border-radius: var(--radius-full);\n  padding: 3px 10px;\n}\n/*# sourceMappingURL=_form-ds.css.map */\n"] }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: true }] }], warnings: [{ type: Input, args: [{ isSignal: true, alias: "warnings", required: false }] }], impacted: [{ type: Input, args: [{ isSignal: true, alias: "impacted", required: false }] }], collapsedCount: [{ type: Input, args: [{ isSignal: true, alias: "collapsedCount", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrApprovalPanel, { className: "VnrApprovalPanel", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds.ts", lineNumber: 881 });
})();

export {
  VnrFormShell,
  VnrFormGrid,
  VnrFormSection,
  VnrFormField,
  VnrHrCalendar,
  VnrExpenseTable,
  VnrChangeComparison,
  VnrRepeatableGroup,
  VnrDocumentGroup,
  VnrApprovalPanel
};
//# sourceMappingURL=chunk-FMTJNLTR.js.map
