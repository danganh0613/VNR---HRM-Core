import {
  HrmAlert
} from "./chunk-H656EMSP.js";
import {
  HrmProgress
} from "./chunk-XC3RAI3E.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
  computed,
  input,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function VnrEditableFormTable_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("inline-size", ctx_r1.widthOf(c_r1));
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.label);
  }
}
function VnrEditableFormTable_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "th", 4);
  }
}
function VnrEditableFormTable_For_11_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.display(r_r4, c_r3));
  }
}
function VnrEditableFormTable_For_11_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 14);
    \u0275\u0275domListener("change", function VnrEditableFormTable_For_11_For_4_Conditional_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCell(r_r4.id, c_r3, $event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    const r_r4 = ctx_r5.$implicit;
    const \u0275$index_21_r7 = ctx_r5.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("type", c_r3.type === "number" ? "number" : "text")("value", ctx_r1.raw(r_r4, c_r3.key));
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r3))("aria-label", c_r3.label + ", d\xF2ng " + (\u0275$index_21_r7 + 1));
  }
}
function VnrEditableFormTable_For_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275conditionalCreate(1, VnrEditableFormTable_For_11_For_4_Conditional_1_Template, 2, 1, "span", 12)(2, VnrEditableFormTable_For_11_For_4_Conditional_2_Template, 1, 4, "input", 13);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.readonly() || c_r3.readonly ? 1 : 2);
  }
}
function VnrEditableFormTable_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "td", 10)(1, "button", 15);
    \u0275\u0275domListener("click", function VnrEditableFormTable_For_11_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicateRow.emit(r_r4.id));
    });
    \u0275\u0275text(2, "\u29C9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 16);
    \u0275\u0275domListener("click", function VnrEditableFormTable_For_11_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeRow.emit(r_r4.id));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_21_r7 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275domProperty("title", "Nh\xE2n b\u1EA3n d\xF2ng " + (\u0275$index_21_r7 + 1));
    \u0275\u0275attribute("aria-label", "Nh\xE2n b\u1EA3n d\xF2ng " + (\u0275$index_21_r7 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("title", "Xo\xE1 d\xF2ng " + (\u0275$index_21_r7 + 1));
    \u0275\u0275attribute("aria-label", "Xo\xE1 d\xF2ng " + (\u0275$index_21_r7 + 1));
  }
}
function VnrEditableFormTable_For_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 11)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.colSpan());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.error);
  }
}
function VnrEditableFormTable_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 2);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, VnrEditableFormTable_For_11_For_4_Template, 3, 2, "td", null, _forTrack0);
    \u0275\u0275conditionalCreate(5, VnrEditableFormTable_For_11_Conditional_5_Template, 5, 4, "td", 10);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, VnrEditableFormTable_For_11_Conditional_6_Template, 3, 2, "tr", 11);
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const \u0275$index_21_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("has-err", !!r_r4.error);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_21_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r4.error ? 6 : -1);
  }
}
function VnrEditableFormTable_ForEmpty_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.colSpan());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function VnrEditableFormTable_Conditional_13_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "b", 17);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.totalOf(c_r9.key)));
  }
}
function VnrEditableFormTable_Conditional_13_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.totalLabel());
  }
}
function VnrEditableFormTable_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "td");
    \u0275\u0275conditionalCreate(1, VnrEditableFormTable_Conditional_13_For_4_Conditional_1_Template, 2, 1, "b", 17)(2, VnrEditableFormTable_Conditional_13_For_4_Conditional_2_Template, 2, 1, "span", 18);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const \u0275$index_65_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.totalOf(c_r9.key) !== null ? 1 : \u0275$index_65_r10 === 0 ? 2 : -1);
  }
}
function VnrEditableFormTable_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "td", 10);
  }
}
function VnrEditableFormTable_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tfoot")(1, "tr");
    \u0275\u0275domElement(2, "td", 2);
    \u0275\u0275repeaterCreate(3, VnrEditableFormTable_Conditional_13_For_4_Template, 3, 2, "td", null, _forTrack0);
    \u0275\u0275conditionalCreate(5, VnrEditableFormTable_Conditional_13_Conditional_5_Template, 1, 0, "td", 10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 5 : -1);
  }
}
function VnrEditableFormTable_For_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 25);
    \u0275\u0275domListener("click", function VnrEditableFormTable_For_16_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicateRow.emit(r_r12.id));
    });
    \u0275\u0275text(1, "Nh\xE2n b\u1EA3n");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "button", 26);
    \u0275\u0275domListener("click", function VnrEditableFormTable_For_16_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeRow.emit(r_r12.id));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const \u0275$index_81_r13 = \u0275\u0275nextContext().$index;
    \u0275\u0275attribute("aria-label", "Nh\xE2n b\u1EA3n d\xF2ng " + (\u0275$index_81_r13 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Xo\xE1 d\xF2ng " + (\u0275$index_81_r13 + 1));
  }
}
function VnrEditableFormTable_For_16_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    const r_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r14));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.display(r_r12, c_r14));
  }
}
function VnrEditableFormTable_For_16_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "input", 14);
    \u0275\u0275domListener("change", function VnrEditableFormTable_For_16_For_8_Conditional_4_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const c_r14 = \u0275\u0275nextContext().$implicit;
      const r_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCell(r_r12.id, c_r14, $event));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    const r_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("type", c_r14.type === "number" ? "number" : "text")("value", ctx_r1.raw(r_r12, c_r14.key));
    \u0275\u0275attribute("data-align", ctx_r1.alignOf(c_r14));
  }
}
function VnrEditableFormTable_For_16_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "label", 23)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, VnrEditableFormTable_For_16_For_8_Conditional_3_Template, 2, 2, "span", 12)(4, VnrEditableFormTable_For_16_For_8_Conditional_4_Template, 1, 3, "input", 13);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.readonly() || c_r14.readonly ? 3 : 4);
  }
}
function VnrEditableFormTable_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.error);
  }
}
function VnrEditableFormTable_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19)(1, "div", 20)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(4, "span", 21);
    \u0275\u0275conditionalCreate(5, VnrEditableFormTable_For_16_Conditional_5_Template, 4, 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 22);
    \u0275\u0275repeaterCreate(7, VnrEditableFormTable_For_16_For_8_Template, 5, 2, "label", 23, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, VnrEditableFormTable_For_16_Conditional_9_Template, 2, 1, "div", 24);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const \u0275$index_81_r13 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("has-err", !!r_r12.error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_81_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.readonly() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.columns());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r12.error ? 9 : -1);
  }
}
function VnrEditableFormTable_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function VnrEditableFormTable_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.labelOf(t_r16.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(t_r16.value));
  }
}
function VnrEditableFormTable_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "button", 28);
    \u0275\u0275domListener("click", function VnrEditableFormTable_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRow.emit());
    });
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.addLabel());
  }
}
var _forTrack2 = ($index, $item) => $item.task.id;
function VnrChecklistGroup_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "hrm-alert", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("message", "C\xF2n " + ctx_r0.requiredPendingCount() + " vi\u1EC7c b\u1EAFt bu\u1ED9c ch\u01B0a ho\xE0n th\xE0nh \u2014 ch\u01B0a th\u1EC3 ch\u1ED1t quy tr\xECnh.");
  }
}
function VnrChecklistGroup_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "B\u1EAFt bu\u1ED9c");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1, "B\u1EAFt bu\u1ED9c \xB7 \u0111\xE3 xong");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Ph\u1EE5 tr\xE1ch: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r3.task.assignee);
  }
}
function VnrChecklistGroup_For_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Ch\u01B0a giao ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch");
    \u0275\u0275elementEnd();
  }
}
function VnrChecklistGroup_For_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "H\u1EA1n: ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r3.task.dueDate);
  }
}
function VnrChecklistGroup_For_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r3.blockedReason);
  }
}
function VnrChecklistGroup_For_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r3.task.note);
  }
}
function VnrChecklistGroup_For_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25);
    \u0275\u0275listener("click", function VnrChecklistGroup_For_10_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const v_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.assign.emit(v_r3.task.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function VnrChecklistGroup_For_10_Conditional_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const v_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove.emit(v_r3.task.id));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", v_r3.task.assignee ? "\u0110\u1ED5i ng\u01B0\u1EDDi" : "Giao vi\u1EC7c", " ");
  }
}
function VnrChecklistGroup_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "button", 12);
    \u0275\u0275listener("click", function VnrChecklistGroup_For_10_Template_button_click_1_listener() {
      const v_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle.emit(v_r3.task.id));
    });
    \u0275\u0275conditionalCreate(2, VnrChecklistGroup_For_10_Conditional_2_Template, 2, 0, "span", 13)(3, VnrChecklistGroup_For_10_Conditional_3_Template, 2, 0, "span", 13)(4, VnrChecklistGroup_For_10_Conditional_4_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, VnrChecklistGroup_For_10_Conditional_9_Template, 2, 0, "span", 17)(10, VnrChecklistGroup_For_10_Conditional_10_Template, 2, 0, "span", 18);
    \u0275\u0275elementStart(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20);
    \u0275\u0275conditionalCreate(14, VnrChecklistGroup_For_10_Conditional_14_Template, 4, 1, "span")(15, VnrChecklistGroup_For_10_Conditional_15_Template, 2, 0, "span", 21);
    \u0275\u0275conditionalCreate(16, VnrChecklistGroup_For_10_Conditional_16_Template, 4, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, VnrChecklistGroup_For_10_Conditional_17_Template, 2, 1, "div", 22);
    \u0275\u0275conditionalCreate(18, VnrChecklistGroup_For_10_Conditional_18_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, VnrChecklistGroup_For_10_Conditional_19_Template, 5, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-blocked", !!v_r3.blockedReason)("is-req", v_r3.requiredPending);
    \u0275\u0275attribute("data-st", v_r3.task.status);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.readonly() || !!v_r3.blockedReason);
    \u0275\u0275attribute("data-st", v_r3.task.status)("aria-pressed", v_r3.task.status === "done")("aria-label", "\u0110\xE1nh d\u1EA5u ho\xE0n th\xE0nh: " + v_r3.task.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r3.task.status === "done" ? 2 : v_r3.task.status === "doing" ? 3 : v_r3.task.status === "blocked" ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(v_r3.task.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r3.requiredPending ? 9 : v_r3.task.required ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-st", v_r3.task.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r3.statusLabel);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(v_r3.task.assignee ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(v_r3.task.dueDate ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r3.blockedReason ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r3.showNote ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.readonly() ? 19 : -1);
  }
}
function VnrChecklistGroup_ForEmpty_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyText());
  }
}
function VnrChecklistGroup_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function VnrChecklistGroup_Conditional_12_Template_button_click_0_listener() {
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
function VnrFormSectionNav_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function VnrFormSectionNav_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.meta);
  }
}
function VnrFormSectionNav_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.lockedReason || "\u0110ang kho\xE1 \u2014 c\u1EA7n ho\xE0n th\xE0nh ph\u1EA7n tr\u01B0\u1EDBc.");
  }
}
function VnrFormSectionNav_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275text(1, "C\xF3 l\u1ED7i c\u1EA7n s\u1EEDa");
    \u0275\u0275domElementEnd();
  }
}
function VnrFormSectionNav_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 3)(1, "button", 5);
    \u0275\u0275domListener("click", function VnrFormSectionNav_For_4_Template_button_click_1_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.go(s_r3));
    });
    \u0275\u0275domElement(2, "i", 6);
    \u0275\u0275domElementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, VnrFormSectionNav_For_4_Conditional_5_Template, 2, 1, "span", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, VnrFormSectionNav_For_4_Conditional_6_Template, 2, 1, "div", 9)(7, VnrFormSectionNav_For_4_Conditional_7_Template, 2, 0, "div", 10);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("is-active", s_r3.id === ctx_r0.activeId());
    \u0275\u0275domProperty("disabled", s_r3.state === "locked");
    \u0275\u0275attribute("data-st", s_r3.state)("aria-current", s_r3.id === ctx_r0.activeId() ? "true" : null)("aria-label", s_r3.label + " \u2014 " + ctx_r0.stateLabel(s_r3.state));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-st", s_r3.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.meta ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.state === "locked" ? 6 : s_r3.state === "error" ? 7 : -1);
  }
}
function VnrFormSectionNav_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 4);
    \u0275\u0275text(1, "Ch\u01B0a c\xF3 ph\u1EA7n n\xE0o.");
    \u0275\u0275domElementEnd();
  }
}
var VnrEditableFormTable = class _VnrEditableFormTable {
  constructor() {
    this.columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.addLabel = input("Th\xEAm d\xF2ng", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalLabel = input("T\u1ED5ng c\u1ED9ng", ...ngDevMode ? [{ debugName: "totalLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Ch\u01B0a c\xF3 d\xF2ng n\xE0o.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cellChange = output();
    this.addRow = output();
    this.removeRow = output();
    this.duplicateRow = output();
    this.totalMap = computed(() => {
      const m = /* @__PURE__ */ new Map();
      for (const t of this.totals())
        m.set(t.key, t.value);
      return m;
    }, ...ngDevMode ? [{ debugName: "totalMap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labelMap = computed(() => {
      const m = /* @__PURE__ */ new Map();
      for (const c of this.columns())
        m.set(c.key, c.label);
      return m;
    }, ...ngDevMode ? [{ debugName: "labelMap" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Số ô của một hàng đầy đủ: cột STT + các cột dữ liệu + cột thao tác. */
  colSpan() {
    return 1 + this.columns().length + (this.readonly() ? 0 : 1);
  }
  alignOf(c) {
    return c.align ?? (c.type === "number" ? "end" : "start");
  }
  widthOf(c) {
    const w = c.width;
    if (w == null || w === "")
      return null;
    return typeof w === "number" ? `${w}px` : w;
  }
  labelOf(key) {
    return this.labelMap().get(key) ?? key;
  }
  /** Giá trị thô để đổ vào input (không định dạng, tránh phá thao tác gõ). */
  raw(row, key) {
    const v = row.cells[key];
    return v === void 0 ? null : v;
  }
  totalOf(key) {
    const v = this.totalMap().get(key);
    return v === void 0 ? null : v;
  }
  /** Chỉ ĐỊNH DẠNG hiển thị — không phải tính toán nghiệp vụ. */
  display(row, c) {
    return this.fmt(this.raw(row, c.key)) || "\u2014";
  }
  fmt(v) {
    if (v == null || v === "")
      return "";
    return typeof v === "number" ? new Intl.NumberFormat("vi-VN").format(v) : String(v);
  }
  onCell(rowId, c, e) {
    const text = e.target.value;
    const value = c.type === "number" ? text === "" ? null : Number(text) : text;
    this.cellChange.emit({ rowId, key: c.key, value });
  }
  static {
    this.\u0275fac = function VnrEditableFormTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrEditableFormTable)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrEditableFormTable, selectors: [["vnr-editable-form-table"]], inputs: { columns: [1, "columns"], rows: [1, "rows"], totals: [1, "totals"], readonly: [1, "readonly"], addLabel: [1, "addLabel"], totalLabel: [1, "totalLabel"], emptyText: [1, "emptyText"] }, outputs: { cellChange: "cellChange", addRow: "addRow", removeRow: "removeRow", duplicateRow: "duplicateRow" }, decls: 21, vars: 5, consts: [[1, "vnr-eft"], [1, "vnr-eft__tb"], [1, "ix"], [3, "inline-size"], ["aria-label", "Thao t\xE1c tr\xEAn d\xF2ng", 1, "ac"], [1, "vnr-eft__cards"], [1, "vnr-eft__card", 3, "has-err"], [1, "vnr-eft__empty"], [1, "vnr-eft__ct"], [1, "vnr-eft__ft"], [1, "ac"], [1, "vnr-eft__er"], [1, "vnr-eft__ro"], [1, "vnr-eft__in", 3, "type", "value"], [1, "vnr-eft__in", 3, "change", "type", "value"], ["type", "button", 1, "vnr-eft__b", 3, "click", "title"], ["type", "button", 1, "vnr-eft__b", "is-danger", 3, "click", "title"], [1, "tv"], [1, "tl"], [1, "vnr-eft__card"], [1, "hd"], [1, "sp"], [1, "bd"], [1, "fl"], [1, "er"], ["type", "button", 1, "vnr-eft__b", 3, "click"], ["type", "button", 1, "vnr-eft__b", "is-danger", 3, "click"], [1, "lb"], ["type", "button", 1, "vnr-eft__add", 3, "click"]], template: function VnrEditableFormTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2);
        \u0275\u0275text(5, "#");
        \u0275\u0275domElementEnd();
        \u0275\u0275repeaterCreate(6, VnrEditableFormTable_For_7_Template, 2, 4, "th", 3, _forTrack0);
        \u0275\u0275conditionalCreate(8, VnrEditableFormTable_Conditional_8_Template, 1, 0, "th", 4);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "tbody");
        \u0275\u0275repeaterCreate(10, VnrEditableFormTable_For_11_Template, 7, 5, null, null, _forTrack1, false, VnrEditableFormTable_ForEmpty_12_Template, 3, 2, "tr");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(13, VnrEditableFormTable_Conditional_13_Template, 6, 1, "tfoot");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(14, "div", 5);
        \u0275\u0275repeaterCreate(15, VnrEditableFormTable_For_16_Template, 10, 5, "div", 6, _forTrack1, false, VnrEditableFormTable_ForEmpty_17_Template, 2, 1, "div", 7);
        \u0275\u0275repeaterCreate(18, VnrEditableFormTable_For_19_Template, 5, 2, "div", 8, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(20, VnrEditableFormTable_Conditional_20_Template, 3, 1, "div", 9);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.columns());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.readonly() ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.totals().length ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rows());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.totals());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.readonly() ? 20 : -1);
      }
    }, styles: ["/* angular:styles/component:css;abd69f1cba02eeb0d9e4b1b933b8373fb18c39b33c9ed1b2d0536f1a2e670dc9;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-editable-form-table {\n  display: block;\n  min-inline-size: 0;\n}\n.vnr-fg > vnr-editable-form-table {\n  grid-column: 1 / -1;\n}\n.vnr-eft__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.vnr-eft__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n  border-block-end: 1px solid var(--border-soft);\n  white-space: nowrap;\n}\n.vnr-eft__tb td {\n  padding: var(--space-1, 4px) var(--space-2-5, 10px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-eft__tb th.ix,\n.vnr-eft__tb td.ix {\n  inline-size: 34px;\n  text-align: center;\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb th.ac,\n.vnr-eft__tb td.ac {\n  inline-size: 66px;\n  text-align: center;\n  white-space: nowrap;\n}\n.vnr-eft__tb th[data-align=end],\n.vnr-eft__tb td[data-align=end] {\n  text-align: end;\n}\n.vnr-eft__tb td[data-align=end],\n.vnr-eft__in[data-align=end],\n.vnr-eft__ro[data-align=end] {\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb tbody tr:hover {\n  background: var(--bg-surface-subtle);\n}\n.vnr-eft__tb tr.has-err {\n  background: var(--error-bg);\n}\n.vnr-eft__tb tr.has-err:hover {\n  background: var(--error-bg);\n}\n.vnr-eft__er td {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding-block: var(--space-1, 4px);\n  padding-block-end: var(--space-2, 8px);\n}\n.vnr-eft__ro {\n  display: inline-block;\n  padding-block: 5px;\n  color: var(--text-strong);\n}\n.vnr-eft__in {\n  inline-size: 100%;\n  block-size: 28px;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs, 4px);\n  background: transparent;\n  padding: 0 6px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-strong);\n}\n.vnr-eft__in[data-align=end] {\n  text-align: end;\n}\n.vnr-eft__in:hover {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-eft__in:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-eft__in:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.vnr-eft__tb tfoot td {\n  background: var(--bg-surface-subtle);\n  border-block-start: 1px solid var(--border-sub);\n  border-block-end: none;\n  padding-block: var(--space-2, 8px);\n}\n.vnr-eft__tb tfoot .tv {\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb tfoot .tl {\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.vnr-eft__b {\n  border: none;\n  background: none;\n  color: var(--text-soft);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 6px;\n}\n.vnr-eft__b:hover {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-eft__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-eft__empty {\n  text-align: center;\n  color: var(--text-soft);\n  padding: var(--space-4, 16px);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-eft__ft {\n  padding-block-start: var(--space-2, 8px);\n}\n.vnr-eft__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px var(--space-3, 12px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-eft__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-eft__cards {\n  display: none;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-eft__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-eft__card.has-err {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-eft__card .hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: 6px var(--space-2-5, 10px);\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-eft__card .hd .ix {\n  inline-size: 20px;\n  block-size: 20px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  flex: none;\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__card .hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-eft__card .bd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  padding: var(--space-2-5, 10px);\n}\n.vnr-eft__card .fl {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.vnr-eft__card .lb {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.vnr-eft__card .fl .vnr-eft__in {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n  block-size: 30px;\n}\n.vnr-eft__card .er {\n  padding: 6px var(--space-2-5, 10px);\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-eft__ct {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: var(--space-2-5, 10px);\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-eft__ct b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-eft__tb {\n    display: none;\n  }\n  .vnr-eft__cards {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrEditableFormTable, [{
    type: Component,
    args: [{ selector: "vnr-editable-form-table", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <div class="vnr-eft">
      <table class="vnr-eft__tb">
        <thead>
          <tr>
            <th class="ix">#</th>
            @for (c of columns(); track c.key) {
              <th [attr.data-align]="alignOf(c)" [style.inline-size]="widthOf(c)">{{ c.label }}</th>
            }
            <!-- aria-label thay cho ch\u1EEF \u1EA9n: c\u1ED9t n\xE0y kh\xF4ng c\xF3 ti\xEAu \u0111\u1EC1 nh\xECn th\u1EA5y \u0111\u01B0\u1EE3c, nh\u01B0ng \u0111\u1EC3 tr\u1ED1ng
                 th\xEC tr\xECnh \u0111\u1ECDc m\xE0n h\xECnh \u0111\u1ECDc \xF4 cu\u1ED1i m\u1ED7i d\xF2ng l\xE0 "c\u1ED9t tr\u1ED1ng". D\xF9ng aria-label thay v\xEC
                 span .sr-only v\xEC file n\xE0y l\xE0 \u1EE9ng vi\xEAn chuy\u1EC3n l\xEAn libs/hrm-ui (n\u01A1i kh\xF4ng c\xF3 Tailwind). -->
            @if (!readonly()) { <th class="ac" aria-label="Thao t\xE1c tr\xEAn d\xF2ng"></th> }
          </tr>
        </thead>
        <tbody>
          @for (r of rows(); track r.id; let i = $index) {
            <tr [class.has-err]="!!r.error">
              <td class="ix">{{ i + 1 }}</td>
              @for (c of columns(); track c.key) {
                <td [attr.data-align]="alignOf(c)">
                  @if (readonly() || c.readonly) {
                    <span class="vnr-eft__ro">{{ display(r, c) }}</span>
                  } @else {
                    <!-- Nh\xE3n K\xC8M S\u1ED0 D\xD2NG: b\u1EA3ng nhi\u1EC1u d\xF2ng m\xE0 ch\u1EC9 \u0111\u1ECDc "S\u1ED1 l\u01B0\u1EE3ng" th\xEC ng\u01B0\u1EDDi d\xF9ng
                         tr\xECnh \u0111\u1ECDc m\xE0n h\xECnh kh\xF4ng bi\u1EBFt \u0111ang \u1EDF d\xF2ng n\xE0o. -->
                    <input class="vnr-eft__in" [attr.data-align]="alignOf(c)"
                      [type]="c.type === 'number' ? 'number' : 'text'"
                      [value]="raw(r, c.key)" [attr.aria-label]="c.label + ', d\xF2ng ' + (i + 1)"
                      (change)="onCell(r.id, c, $event)" />
                  }
                </td>
              }
              @if (!readonly()) {
                <td class="ac">
                  <button type="button" class="vnr-eft__b" [title]="'Nh\xE2n b\u1EA3n d\xF2ng ' + (i + 1)"
                    [attr.aria-label]="'Nh\xE2n b\u1EA3n d\xF2ng ' + (i + 1)" (click)="duplicateRow.emit(r.id)">\u29C9</button>
                  <button type="button" class="vnr-eft__b is-danger" [title]="'Xo\xE1 d\xF2ng ' + (i + 1)"
                    [attr.aria-label]="'Xo\xE1 d\xF2ng ' + (i + 1)" (click)="removeRow.emit(r.id)">\u2715</button>
                </td>
              }
            </tr>
            @if (r.error) {
              <!-- D\xF2ng l\u1ED7i: t\xF4 n\u1EC1n K\xC8M CH\u1EEE l\u1ED7i \u2014 kh\xF4ng ch\u1EC9 d\u1EF1a v\xE0o m\xE0u -->
              <tr class="vnr-eft__er">
                <td [attr.colspan]="colSpan()">{{ r.error }}</td>
              </tr>
            }
          } @empty {
            <tr><td class="vnr-eft__empty" [attr.colspan]="colSpan()">{{ emptyText() }}</td></tr>
          }
        </tbody>
        @if (totals().length) {
          <tfoot>
            <tr>
              <td class="ix"></td>
              @for (c of columns(); track c.key; let first = $first) {
                <td [attr.data-align]="alignOf(c)">
                  @if (totalOf(c.key) !== null) { <b class="tv">{{ fmt(totalOf(c.key)) }}</b> }
                  @else if (first) { <span class="tl">{{ totalLabel() }}</span> }
                </td>
              }
              @if (!readonly()) { <td class="ac"></td> }
            </tr>
          </tfoot>
        }
      </table>

      <!-- Th\u1EBB thay th\u1EBF khi container h\u1EB9p \u2014 V\u1EAAN NH\u1EACP \u0110\u01AF\u1EE2C, c\xF9ng d\u1EEF li\u1EC7u, kh\xF4ng cu\u1ED9n ngang -->
      <div class="vnr-eft__cards">
        @for (r of rows(); track r.id; let i = $index) {
          <div class="vnr-eft__card" [class.has-err]="!!r.error">
            <div class="hd">
              <span class="ix">{{ i + 1 }}</span>
              <span class="sp"></span>
              @if (!readonly()) {
                <button type="button" class="vnr-eft__b" [attr.aria-label]="'Nh\xE2n b\u1EA3n d\xF2ng ' + (i + 1)"
                  (click)="duplicateRow.emit(r.id)">Nh\xE2n b\u1EA3n</button>
                <button type="button" class="vnr-eft__b is-danger" [attr.aria-label]="'Xo\xE1 d\xF2ng ' + (i + 1)"
                  (click)="removeRow.emit(r.id)">\u2715</button>
              }
            </div>
            <div class="bd">
              @for (c of columns(); track c.key) {
                <label class="fl">
                  <span class="lb">{{ c.label }}</span>
                  @if (readonly() || c.readonly) {
                    <span class="vnr-eft__ro" [attr.data-align]="alignOf(c)">{{ display(r, c) }}</span>
                  } @else {
                    <input class="vnr-eft__in" [attr.data-align]="alignOf(c)"
                      [type]="c.type === 'number' ? 'number' : 'text'"
                      [value]="raw(r, c.key)" (change)="onCell(r.id, c, $event)" />
                  }
                </label>
              }
            </div>
            @if (r.error) { <div class="er">{{ r.error }}</div> }
          </div>
        } @empty {
          <div class="vnr-eft__empty">{{ emptyText() }}</div>
        }
        @for (t of totals(); track t.key) {
          <div class="vnr-eft__ct"><span>{{ labelOf(t.key) }}</span><b>{{ fmt(t.value) }}</b></div>
        }
      </div>

      @if (!readonly()) {
        <div class="vnr-eft__ft">
          <button type="button" class="vnr-eft__add" (click)="addRow.emit()">+ {{ addLabel() }}</button>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;abd69f1cba02eeb0d9e4b1b933b8373fb18c39b33c9ed1b2d0536f1a2e670dc9;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-editable-form-table {\n  display: block;\n  min-inline-size: 0;\n}\n.vnr-fg > vnr-editable-form-table {\n  grid-column: 1 / -1;\n}\n.vnr-eft__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.vnr-eft__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n  border-block-end: 1px solid var(--border-soft);\n  white-space: nowrap;\n}\n.vnr-eft__tb td {\n  padding: var(--space-1, 4px) var(--space-2-5, 10px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-eft__tb th.ix,\n.vnr-eft__tb td.ix {\n  inline-size: 34px;\n  text-align: center;\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb th.ac,\n.vnr-eft__tb td.ac {\n  inline-size: 66px;\n  text-align: center;\n  white-space: nowrap;\n}\n.vnr-eft__tb th[data-align=end],\n.vnr-eft__tb td[data-align=end] {\n  text-align: end;\n}\n.vnr-eft__tb td[data-align=end],\n.vnr-eft__in[data-align=end],\n.vnr-eft__ro[data-align=end] {\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb tbody tr:hover {\n  background: var(--bg-surface-subtle);\n}\n.vnr-eft__tb tr.has-err {\n  background: var(--error-bg);\n}\n.vnr-eft__tb tr.has-err:hover {\n  background: var(--error-bg);\n}\n.vnr-eft__er td {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding-block: var(--space-1, 4px);\n  padding-block-end: var(--space-2, 8px);\n}\n.vnr-eft__ro {\n  display: inline-block;\n  padding-block: 5px;\n  color: var(--text-strong);\n}\n.vnr-eft__in {\n  inline-size: 100%;\n  block-size: 28px;\n  border: 1px solid transparent;\n  border-radius: var(--radius-xs, 4px);\n  background: transparent;\n  padding: 0 6px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-strong);\n}\n.vnr-eft__in[data-align=end] {\n  text-align: end;\n}\n.vnr-eft__in:hover {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n}\n.vnr-eft__in:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-eft__in:focus {\n  outline: none;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.vnr-eft__tb tfoot td {\n  background: var(--bg-surface-subtle);\n  border-block-start: 1px solid var(--border-sub);\n  border-block-end: none;\n  padding-block: var(--space-2, 8px);\n}\n.vnr-eft__tb tfoot .tv {\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__tb tfoot .tl {\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n}\n.vnr-eft__b {\n  border: none;\n  background: none;\n  color: var(--text-soft);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 6px;\n}\n.vnr-eft__b:hover {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-eft__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-eft__empty {\n  text-align: center;\n  color: var(--text-soft);\n  padding: var(--space-4, 16px);\n  font-size: var(--fs-12, 12px);\n}\n.vnr-eft__ft {\n  padding-block-start: var(--space-2, 8px);\n}\n.vnr-eft__add {\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px var(--space-3, 12px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-eft__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-eft__cards {\n  display: none;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-eft__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-eft__card.has-err {\n  border-color: var(--error-base);\n  background: var(--error-bg);\n}\n.vnr-eft__card .hd {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: 6px var(--space-2-5, 10px);\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-eft__card .hd .ix {\n  inline-size: 20px;\n  block-size: 20px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-sub);\n  flex: none;\n  font-variant-numeric: tabular-nums;\n}\n.vnr-eft__card .hd .sp {\n  margin-inline-start: auto;\n}\n.vnr-eft__card .bd {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  padding: var(--space-2-5, 10px);\n}\n.vnr-eft__card .fl {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.vnr-eft__card .lb {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.vnr-eft__card .fl .vnr-eft__in {\n  border-color: var(--border-sub);\n  background: var(--bg-surface);\n  block-size: 30px;\n}\n.vnr-eft__card .er {\n  padding: 6px var(--space-2-5, 10px);\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-eft__ct {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: var(--space-2-5, 10px);\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-eft__ct b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-eft__tb {\n    display: none;\n  }\n  .vnr-eft__cards {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true }] }], totals: [{ type: Input, args: [{ isSignal: true, alias: "totals", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], totalLabel: [{ type: Input, args: [{ isSignal: true, alias: "totalLabel", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], cellChange: [{ type: Output, args: ["cellChange"] }], addRow: [{ type: Output, args: ["addRow"] }], removeRow: [{ type: Output, args: ["removeRow"] }], duplicateRow: [{ type: Output, args: ["duplicateRow"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrEditableFormTable, { className: "VnrEditableFormTable", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts", lineNumber: 295 });
})();
var VnrChecklistGroup = class _VnrChecklistGroup {
  constructor() {
    this.tasks = input.required(...ngDevMode ? [{ debugName: "tasks" }] : (
      /* istanbul ignore next */
      []
    ));
    this.readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("Danh s\xE1ch c\xF4ng vi\u1EC7c", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addLabel = input("Th\xEAm c\xF4ng vi\u1EC7c", ...ngDevMode ? [{ debugName: "addLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = input("Ch\u01B0a c\xF3 c\xF4ng vi\u1EC7c n\xE0o.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toggle = output();
    this.assign = output();
    this.remove = output();
    this.add = output();
    this.totalCount = computed(() => this.tasks().length, ...ngDevMode ? [{ debugName: "totalCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.doneCount = computed(() => this.tasks().filter((t) => t.status === "done").length, ...ngDevMode ? [{ debugName: "doneCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.percent = computed(() => {
      const total = this.totalCount();
      return total === 0 ? 0 : Math.round(this.doneCount() / total * 100);
    }, ...ngDevMode ? [{ debugName: "percent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.requiredPendingCount = computed(() => this.tasks().filter((t) => t.required && t.status !== "done").length, ...ngDevMode ? [{ debugName: "requiredPendingCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = computed(() => {
      const all = this.tasks();
      const byId = new Map(all.map((t) => [t.id, t]));
      return all.map((task) => {
        let blockedReason = null;
        if (task.status !== "done") {
          if (task.status === "blocked") {
            blockedReason = task.note ? `\u0110ang b\u1ECB ch\u1EB7n: ${task.note}` : "\u0110ang b\u1ECB ch\u1EB7n \u2014 ch\u01B0a th\u1EC3 th\u1EF1c hi\u1EC7n.";
          } else if (task.dependsOn) {
            const dep = byId.get(task.dependsOn);
            if (!dep) {
              blockedReason = `Ch\u1EDD m\u1ED9t c\xF4ng vi\u1EC7c ph\u1EE5 thu\u1ED9c kh\xF4ng c\xF2n trong danh s\xE1ch (m\xE3 ${task.dependsOn}).`;
            } else if (dep.status !== "done") {
              blockedReason = `Ch\u1EDD ho\xE0n th\xE0nh tr\u01B0\u1EDBc: ${dep.title}.`;
            }
          }
        }
        return {
          task,
          statusLabel: this.statusLabel(task.status),
          blockedReason,
          showNote: !!task.note && task.status !== "blocked",
          requiredPending: !!task.required && task.status !== "done"
        };
      });
    }, ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  statusLabel(s) {
    switch (s) {
      case "done":
        return "Ho\xE0n th\xE0nh";
      case "doing":
        return "\u0110ang l\xE0m";
      case "blocked":
        return "B\u1ECB ch\u1EB7n";
      default:
        return "Ch\u01B0a l\xE0m";
    }
  }
  static {
    this.\u0275fac = function VnrChecklistGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrChecklistGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrChecklistGroup, selectors: [["vnr-checklist-group"]], inputs: { tasks: [1, "tasks"], readonly: [1, "readonly"], title: [1, "title"], addLabel: [1, "addLabel"], emptyText: [1, "emptyText"] }, outputs: { toggle: "toggle", assign: "assign", remove: "remove", add: "add" }, decls: 13, vars: 9, consts: [[1, "vnr-ckl"], [1, "vnr-ckl__hd"], [1, "t"], [1, "pg"], ["type", "line", "size", "small", 3, "percent", "status", "showInfo"], ["role", "status", "aria-live", "polite"], [1, "vnr-ckl__ls"], [1, "vnr-ckl__it", 3, "is-blocked", "is-req"], [1, "vnr-ckl__empty"], ["type", "button", 1, "vnr-ckl__add"], ["type", "warning", 3, "message"], [1, "vnr-ckl__it"], ["type", "button", 1, "ck", 3, "click", "disabled"], [1, "mk"], [1, "bd"], [1, "ti"], [1, "tx"], [1, "rq"], [1, "rq", "is-ok"], [1, "st"], [1, "mt"], [1, "none"], [1, "bl"], [1, "nt"], [1, "ac"], ["type", "button", 1, "vnr-ckl__b", 3, "click"], ["type", "button", "aria-label", "Xo\xE1 vi\u1EC7c", 1, "vnr-ckl__b", "is-danger", 3, "click"], ["type", "button", 1, "vnr-ckl__add", 3, "click"]], template: function VnrChecklistGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "hrm-progress", 4);
        \u0275\u0275conditionalCreate(7, VnrChecklistGroup_Conditional_7_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(8, "ul", 6);
        \u0275\u0275repeaterCreate(9, VnrChecklistGroup_For_10_Template, 20, 19, "li", 7, _forTrack2, false, VnrChecklistGroup_ForEmpty_11_Template, 2, 1, "li", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, VnrChecklistGroup_Conditional_12_Template, 2, 1, "button", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.doneCount(), "/", ctx.totalCount(), " ho\xE0n th\xE0nh");
        \u0275\u0275advance();
        \u0275\u0275property("percent", ctx.percent())("status", ctx.percent() === 100 ? "success" : "active")("showInfo", false);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.requiredPendingCount() > 0 ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.readonly() ? 12 : -1);
      }
    }, dependencies: [HrmProgress, HrmAlert], styles: ["/* angular:styles/component:css;fa4b647ca6effa58cacacd426f6bee434350b838a2a1749e75137cf42ae7243b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-checklist-group {\n  display: block;\n  min-inline-size: 0;\n}\n.vnr-fg > vnr-checklist-group {\n  grid-column: 1 / -1;\n}\n.vnr-ckl {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__hd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__hd .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-ckl__hd .pg {\n  margin-inline-start: auto;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ckl__ls {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__it {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2-5, 10px);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n}\n.vnr-ckl__it[data-st=done] {\n  background: var(--bg-surface-subtle);\n}\n.vnr-ckl__it[data-st=done] .tx {\n  color: var(--text-soft);\n  text-decoration: line-through;\n}\n.vnr-ckl__it.is-blocked {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it.is-req {\n  border-inline-start: 3px solid var(--warning-base);\n}\n.vnr-ckl__it .ck {\n  flex: none;\n  inline-size: 20px;\n  block-size: 20px;\n  margin-block-start: 1px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius-xs, 4px);\n  background: var(--bg-surface);\n  color: var(--text-soft);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  line-height: 1;\n  padding: 0;\n}\n.vnr-ckl__it .ck:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-ckl__it .ck:disabled {\n  cursor: not-allowed;\n}\n.vnr-ckl__it .ck[data-st=done] {\n  background: var(--success-base);\n  border-color: var(--success-base);\n  color: var(--text-on-primary);\n}\n.vnr-ckl__it .ck[data-st=doing] {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-ckl__it .ck[data-st=blocked] {\n  border-color: var(--warning-base);\n  color: var(--warning-base);\n  font-weight: var(--font-bold, 700);\n}\n.vnr-ckl__it .bd {\n  flex: 1 1 auto;\n  min-inline-size: 0;\n}\n.vnr-ckl__it .ti {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n.vnr-ckl__it .tx {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  word-break: break-word;\n}\n.vnr-ckl__it .rq {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n  color: var(--warning-base);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it .rq.is-ok {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-ckl__it .st {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n  color: var(--text-sub);\n  background: var(--faded-bg);\n}\n.vnr-ckl__it .st[data-st=doing] {\n  color: var(--info-base);\n  background: var(--info-bg);\n}\n.vnr-ckl__it .st[data-st=done] {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-ckl__it .st[data-st=blocked] {\n  color: var(--warning-base);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it .mt {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3, 12px);\n  margin-block-start: 3px;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-ckl__it .mt b {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ckl__it .mt .none {\n  color: var(--text-soft);\n  font-style: italic;\n}\n.vnr-ckl__it .bl {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-ckl__it .nt {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-ckl__it .ac {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.vnr-ckl__b {\n  border: none;\n  background: none;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-ckl__b:hover {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-ckl__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-ckl__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: var(--space-4, 16px);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--radius-sm, 6px);\n}\n.vnr-ckl__add {\n  align-self: flex-start;\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px var(--space-3, 12px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-ckl__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n@container vnrform (max-width: 559px) {\n  .vnr-ckl__it {\n    flex-wrap: wrap;\n  }\n  .vnr-ckl__it .st {\n    margin-inline-start: 0;\n  }\n  .vnr-ckl__it .ac {\n    inline-size: 100%;\n    justify-content: flex-end;\n    border-block-start: 1px dashed var(--border-sub);\n    padding-block-start: 6px;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrChecklistGroup, [{
    type: Component,
    args: [{ selector: "vnr-checklist-group", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [HrmProgress, HrmAlert], template: `
    <div class="vnr-ckl">
      <div class="vnr-ckl__hd">
        <span class="t">{{ title() }}</span>
        <!-- Ti\u1EBFn \u0111\u1ED9: ch\u1EC9 \u0110\u1EBEM \u0111\u1EC3 hi\u1EC3n th\u1ECB, kh\xF4ng ph\u1EA3i lu\u1EADt nghi\u1EC7p v\u1EE5 -->
        <span class="pg">{{ doneCount() }}/{{ totalCount() }} ho\xE0n th\xE0nh</span>
      </div>
      <!-- Thanh ti\u1EBFn \u0111\u1ED9 d\xF9ng component design system; s\u1ED1 li\u1EC7u "x/y" \u0111\xE3 hi\u1EC7n \u1EDF tr\xEAn \u21D2 t\u1EAFt showInfo -->
      <hrm-progress
        [percent]="percent()"
        [status]="percent() === 100 ? 'success' : 'active'"
        [showInfo]="false"
        type="line"
        size="small" />
      <!-- C\u1EA3nh b\xE1o d\xF9ng hrm-alert (c\xF3 icon) cho \u0110\u1ED2NG NH\u1EA4T v\u1EDBi m\u1ECDi c\u1EA3nh b\xE1o kh\xE1c trong m\xE0n h\xECnh;
           h\u1ED9p t\u1EF1 v\u1EBD tr\u01B0\u1EDBc \u0111\xE2y ch\u1EC9 c\xF3 m\xE0u + ch\u1EEF \u0111\u1EADm, kh\xF4ng icon, n\xEAn tr\xF4ng l\u1EC7ch chu\u1EA9n khi \u0111\u1EB7t c\u1EA1nh alert th\u1EADt. -->
      @if (requiredPendingCount() > 0) {
        <div role="status" aria-live="polite">
          <hrm-alert type="warning"
            [message]="'C\xF2n ' + requiredPendingCount() + ' vi\u1EC7c b\u1EAFt bu\u1ED9c ch\u01B0a ho\xE0n th\xE0nh \u2014 ch\u01B0a th\u1EC3 ch\u1ED1t quy tr\xECnh.'" />
        </div>
      }

      <ul class="vnr-ckl__ls">
        @for (v of view(); track v.task.id) {
          <li class="vnr-ckl__it" [attr.data-st]="v.task.status"
            [class.is-blocked]="!!v.blockedReason" [class.is-req]="v.requiredPending">
            <button type="button" class="ck" [attr.data-st]="v.task.status"
              [disabled]="readonly() || !!v.blockedReason"
              [attr.aria-pressed]="v.task.status === 'done'"
              [attr.aria-label]="'\u0110\xE1nh d\u1EA5u ho\xE0n th\xE0nh: ' + v.task.title"
              (click)="toggle.emit(v.task.id)">
              @if (v.task.status === 'done') { <span class="mk">\u2713</span> }
              @else if (v.task.status === 'doing') { <span class="mk">\u2022</span> }
              @else if (v.task.status === 'blocked') { <span class="mk">!</span> }
            </button>

            <div class="bd">
              <div class="ti">
                <span class="tx">{{ v.task.title }}</span>
                @if (v.requiredPending) { <span class="rq">B\u1EAFt bu\u1ED9c</span> }
                @else if (v.task.required) { <span class="rq is-ok">B\u1EAFt bu\u1ED9c \xB7 \u0111\xE3 xong</span> }
                <span class="st" [attr.data-st]="v.task.status">{{ v.statusLabel }}</span>
              </div>
              <div class="mt">
                @if (v.task.assignee) { <span>Ph\u1EE5 tr\xE1ch: <b>{{ v.task.assignee }}</b></span> }
                @else { <span class="none">Ch\u01B0a giao ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch</span> }
                @if (v.task.dueDate) { <span>H\u1EA1n: <b>{{ v.task.dueDate }}</b></span> }
              </div>
              <!-- L\xFD do ch\u01B0a l\xE0m \u0111\u01B0\u1EE3c lu\xF4n vi\u1EBFt b\u1EB1ng CH\u1EEE, kh\xF4ng ch\u1EC9 \u0111\u1ED5i m\xE0u -->
              @if (v.blockedReason) { <div class="bl">{{ v.blockedReason }}</div> }
              @if (v.showNote) { <div class="nt">{{ v.task.note }}</div> }
            </div>

            @if (!readonly()) {
              <div class="ac">
                <button type="button" class="vnr-ckl__b" (click)="assign.emit(v.task.id)">
                  {{ v.task.assignee ? '\u0110\u1ED5i ng\u01B0\u1EDDi' : 'Giao vi\u1EC7c' }}
                </button>
                <button type="button" class="vnr-ckl__b is-danger" aria-label="Xo\xE1 vi\u1EC7c"
                  (click)="remove.emit(v.task.id)">\u2715</button>
              </div>
            }
          </li>
        } @empty {
          <li class="vnr-ckl__empty">{{ emptyText() }}</li>
        }
      </ul>

      @if (!readonly()) {
        <button type="button" class="vnr-ckl__add" (click)="add.emit()">+ {{ addLabel() }}</button>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;fa4b647ca6effa58cacacd426f6bee434350b838a2a1749e75137cf42ae7243b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-checklist-group {\n  display: block;\n  min-inline-size: 0;\n}\n.vnr-fg > vnr-checklist-group {\n  grid-column: 1 / -1;\n}\n.vnr-ckl {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__hd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__hd .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-ckl__hd .pg {\n  margin-inline-start: auto;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ckl__ls {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.vnr-ckl__it {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2-5, 10px);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: var(--space-2, 8px) var(--space-2-5, 10px);\n}\n.vnr-ckl__it[data-st=done] {\n  background: var(--bg-surface-subtle);\n}\n.vnr-ckl__it[data-st=done] .tx {\n  color: var(--text-soft);\n  text-decoration: line-through;\n}\n.vnr-ckl__it.is-blocked {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it.is-req {\n  border-inline-start: 3px solid var(--warning-base);\n}\n.vnr-ckl__it .ck {\n  flex: none;\n  inline-size: 20px;\n  block-size: 20px;\n  margin-block-start: 1px;\n  border: 1px solid var(--border-strong);\n  border-radius: var(--radius-xs, 4px);\n  background: var(--bg-surface);\n  color: var(--text-soft);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  line-height: 1;\n  padding: 0;\n}\n.vnr-ckl__it .ck:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-ckl__it .ck:disabled {\n  cursor: not-allowed;\n}\n.vnr-ckl__it .ck[data-st=done] {\n  background: var(--success-base);\n  border-color: var(--success-base);\n  color: var(--text-on-primary);\n}\n.vnr-ckl__it .ck[data-st=doing] {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-ckl__it .ck[data-st=blocked] {\n  border-color: var(--warning-base);\n  color: var(--warning-base);\n  font-weight: var(--font-bold, 700);\n}\n.vnr-ckl__it .bd {\n  flex: 1 1 auto;\n  min-inline-size: 0;\n}\n.vnr-ckl__it .ti {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n.vnr-ckl__it .tx {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n  word-break: break-word;\n}\n.vnr-ckl__it .rq {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n  color: var(--warning-base);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it .rq.is-ok {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-ckl__it .st {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  border-radius: var(--radius-full);\n  padding: 1px 8px;\n  color: var(--text-sub);\n  background: var(--faded-bg);\n}\n.vnr-ckl__it .st[data-st=doing] {\n  color: var(--info-base);\n  background: var(--info-bg);\n}\n.vnr-ckl__it .st[data-st=done] {\n  color: var(--success-base);\n  background: var(--success-bg);\n}\n.vnr-ckl__it .st[data-st=blocked] {\n  color: var(--warning-base);\n  background: var(--warning-bg);\n}\n.vnr-ckl__it .mt {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3, 12px);\n  margin-block-start: 3px;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-ckl__it .mt b {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-ckl__it .mt .none {\n  color: var(--text-soft);\n  font-style: italic;\n}\n.vnr-ckl__it .bl {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-ckl__it .nt {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-ckl__it .ac {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.vnr-ckl__b {\n  border: none;\n  background: none;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 7px;\n}\n.vnr-ckl__b:hover {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.vnr-ckl__b.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.vnr-ckl__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: var(--space-4, 16px);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--radius-sm, 6px);\n}\n.vnr-ckl__add {\n  align-self: flex-start;\n  border: 1px dashed var(--border-strong);\n  background: none;\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px var(--space-3, 12px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  cursor: pointer;\n}\n.vnr-ckl__add:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n@container vnrform (max-width: 559px) {\n  .vnr-ckl__it {\n    flex-wrap: wrap;\n  }\n  .vnr-ckl__it .st {\n    margin-inline-start: 0;\n  }\n  .vnr-ckl__it .ac {\n    inline-size: 100%;\n    justify-content: flex-end;\n    border-block-start: 1px dashed var(--border-sub);\n    padding-block-start: 6px;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"] }]
  }], null, { tasks: [{ type: Input, args: [{ isSignal: true, alias: "tasks", required: true }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], addLabel: [{ type: Input, args: [{ isSignal: true, alias: "addLabel", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], toggle: [{ type: Output, args: ["toggle"] }], assign: [{ type: Output, args: ["assign"] }], remove: [{ type: Output, args: ["remove"] }], add: [{ type: Output, args: ["add"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrChecklistGroup, { className: "VnrChecklistGroup", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts", lineNumber: 571 });
})();
var VnrFormSectionNav = class _VnrFormSectionNav {
  constructor() {
    this.sections = input.required(...ngDevMode ? [{ debugName: "sections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeId = input(null, ...ngDevMode ? [{ debugName: "activeId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("N\u1ED9i dung form", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.navigate = output();
  }
  go(s) {
    if (s.state === "locked")
      return;
    this.navigate.emit(s.id);
  }
  /** Nhãn trạng thái đọc được bằng CHỮ — phục vụ aria-label và trình đọc màn hình. */
  stateLabel(s) {
    switch (s) {
      case "complete":
        return "\u0110\xE3 ho\xE0n th\xE0nh";
      case "partial":
        return "\u0110ang nh\u1EADp d\u1EDF";
      case "error":
        return "C\xF3 l\u1ED7i";
      case "locked":
        return "\u0110ang kho\xE1";
      default:
        return "Ch\u01B0a nh\u1EADp";
    }
  }
  static {
    this.\u0275fac = function VnrFormSectionNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrFormSectionNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrFormSectionNav, selectors: [["vnr-form-section-nav"]], inputs: { sections: [1, "sections"], activeId: [1, "activeId"], title: [1, "title"] }, outputs: { navigate: "navigate" }, decls: 6, vars: 3, consts: [[1, "vnr-fsn"], [1, "vnr-fsn__hd"], [1, "vnr-fsn__ls"], [1, "vnr-fsn__li"], [1, "vnr-fsn__empty"], ["type", "button", 1, "vnr-fsn__it", 3, "click", "disabled"], ["aria-hidden", "true", 1, "dot"], [1, "lb"], [1, "mt"], [1, "vnr-fsn__nt", "is-lock"], [1, "vnr-fsn__nt", "is-err"]], template: function VnrFormSectionNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "nav", 0);
        \u0275\u0275conditionalCreate(1, VnrFormSectionNav_Conditional_1_Template, 2, 1, "div", 1);
        \u0275\u0275domElementStart(2, "ul", 2);
        \u0275\u0275repeaterCreate(3, VnrFormSectionNav_For_4_Template, 8, 10, "li", 3, _forTrack1, false, VnrFormSectionNav_ForEmpty_5_Template, 2, 0, "li", 4);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.title() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.sections());
      }
    }, styles: ["/* angular:styles/component:css;f9d22d918f45ae46774802d3ea73e5afe56d3ca8159cacfc7ec0017e41626624;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-form-section-nav {\n  display: block;\n  min-inline-size: 0;\n  align-self: start;\n}\n.vnr-fsn {\n  position: sticky;\n  top: 0;\n  inset-block-start: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1, 4px);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  padding: var(--space-2, 8px);\n}\n.vnr-fsn__hd {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  padding: var(--space-1, 4px) var(--space-2, 8px);\n}\n.vnr-fsn__ls {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.vnr-fsn__li {\n  display: flex;\n  flex-direction: column;\n}\n.vnr-fsn__it {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  inline-size: 100%;\n  border: none;\n  background: none;\n  text-align: start;\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 6px var(--space-2, 8px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n}\n.vnr-fsn__it:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.vnr-fsn__it.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-fsn__it:disabled {\n  cursor: not-allowed;\n  color: var(--text-soft);\n}\n.vnr-fsn__it .lb {\n  flex: 1 1 auto;\n  min-inline-size: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vnr-fsn__it .mt {\n  flex: none;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-fsn__it.is-active .mt {\n  color: var(--primary-base);\n}\n.vnr-fsn__it .dot {\n  flex: none;\n  inline-size: 8px;\n  block-size: 8px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n}\n.vnr-fsn__it .dot[data-st=partial] {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n}\n.vnr-fsn__it .dot[data-st=complete] {\n  background: var(--success-base);\n  border-color: var(--success-base);\n}\n.vnr-fsn__it .dot[data-st=error] {\n  background: var(--error-base);\n  border-color: var(--error-base);\n}\n.vnr-fsn__it .dot[data-st=locked] {\n  background: var(--faded-base);\n  border-color: var(--faded-base);\n}\n.vnr-fsn__nt {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  padding: 0 var(--space-2, 8px) var(--space-1, 4px) 24px;\n}\n.vnr-fsn__nt.is-lock {\n  color: var(--text-soft);\n}\n.vnr-fsn__nt.is-err {\n  color: var(--error-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-fsn__empty {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  padding: var(--space-2, 8px);\n  text-align: center;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-fsn__ls {\n    flex-direction: row;\n    overflow-x: auto;\n    gap: var(--space-1, 4px);\n  }\n  .vnr-fsn__li {\n    flex: none;\n  }\n  .vnr-fsn__it .lb {\n    white-space: nowrap;\n  }\n  .vnr-fsn__nt {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrFormSectionNav, [{
    type: Component,
    args: [{ selector: "vnr-form-section-nav", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <nav class="vnr-fsn" [attr.aria-label]="title()">
      @if (title()) { <div class="vnr-fsn__hd">{{ title() }}</div> }
      <ul class="vnr-fsn__ls">
        @for (s of sections(); track s.id) {
          <li class="vnr-fsn__li">
            <button type="button" class="vnr-fsn__it" [attr.data-st]="s.state"
              [class.is-active]="s.id === activeId()"
              [disabled]="s.state === 'locked'"
              [attr.aria-current]="s.id === activeId() ? 'true' : null"
              [attr.aria-label]="s.label + ' \u2014 ' + stateLabel(s.state)"
              (click)="go(s)">
              <i class="dot" [attr.data-st]="s.state" aria-hidden="true"></i>
              <span class="lb">{{ s.label }}</span>
              @if (s.meta) { <span class="mt">{{ s.meta }}</span> }
            </button>
            <!-- Tr\u1EA1ng th\xE1i \u0111\u1EB7c bi\u1EC7t lu\xF4n k\xE8m CH\u1EEE, kh\xF4ng ch\u1EC9 d\u1EF1a v\xE0o m\xE0u ch\u1EA5m -->
            @if (s.state === 'locked') {
              <div class="vnr-fsn__nt is-lock">{{ s.lockedReason || '\u0110ang kho\xE1 \u2014 c\u1EA7n ho\xE0n th\xE0nh ph\u1EA7n tr\u01B0\u1EDBc.' }}</div>
            } @else if (s.state === 'error') {
              <div class="vnr-fsn__nt is-err">C\xF3 l\u1ED7i c\u1EA7n s\u1EEDa</div>
            }
          </li>
        } @empty {
          <li class="vnr-fsn__empty">Ch\u01B0a c\xF3 ph\u1EA7n n\xE0o.</li>
        }
      </ul>
    </nav>
  `, styles: ["/* angular:styles/component:css;f9d22d918f45ae46774802d3ea73e5afe56d3ca8159cacfc7ec0017e41626624;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts */\nvnr-form-section-nav {\n  display: block;\n  min-inline-size: 0;\n  align-self: start;\n}\n.vnr-fsn {\n  position: sticky;\n  top: 0;\n  inset-block-start: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1, 4px);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  padding: var(--space-2, 8px);\n}\n.vnr-fsn__hd {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  padding: var(--space-1, 4px) var(--space-2, 8px);\n}\n.vnr-fsn__ls {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.vnr-fsn__li {\n  display: flex;\n  flex-direction: column;\n}\n.vnr-fsn__it {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  inline-size: 100%;\n  border: none;\n  background: none;\n  text-align: start;\n  cursor: pointer;\n  border-radius: var(--radius-xs, 4px);\n  padding: 6px var(--space-2, 8px);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n}\n.vnr-fsn__it:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.vnr-fsn__it.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-fsn__it:disabled {\n  cursor: not-allowed;\n  color: var(--text-soft);\n}\n.vnr-fsn__it .lb {\n  flex: 1 1 auto;\n  min-inline-size: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vnr-fsn__it .mt {\n  flex: none;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-fsn__it.is-active .mt {\n  color: var(--primary-base);\n}\n.vnr-fsn__it .dot {\n  flex: none;\n  inline-size: 8px;\n  block-size: 8px;\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n}\n.vnr-fsn__it .dot[data-st=partial] {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n}\n.vnr-fsn__it .dot[data-st=complete] {\n  background: var(--success-base);\n  border-color: var(--success-base);\n}\n.vnr-fsn__it .dot[data-st=error] {\n  background: var(--error-base);\n  border-color: var(--error-base);\n}\n.vnr-fsn__it .dot[data-st=locked] {\n  background: var(--faded-base);\n  border-color: var(--faded-base);\n}\n.vnr-fsn__nt {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  padding: 0 var(--space-2, 8px) var(--space-1, 4px) 24px;\n}\n.vnr-fsn__nt.is-lock {\n  color: var(--text-soft);\n}\n.vnr-fsn__nt.is-err {\n  color: var(--error-base);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-fsn__empty {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  padding: var(--space-2, 8px);\n  text-align: center;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-fsn__ls {\n    flex-direction: row;\n    overflow-x: auto;\n    gap: var(--space-1, 4px);\n  }\n  .vnr-fsn__li {\n    flex: none;\n  }\n  .vnr-fsn__it .lb {\n    white-space: nowrap;\n  }\n  .vnr-fsn__nt {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-layout.css.map */\n"] }]
  }], null, { sections: [{ type: Input, args: [{ isSignal: true, alias: "sections", required: true }] }], activeId: [{ type: Input, args: [{ isSignal: true, alias: "activeId", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], navigate: [{ type: Output, args: ["navigate"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrFormSectionNav, { className: "VnrFormSectionNav", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-layout.ts", lineNumber: 744 });
})();

export {
  VnrEditableFormTable,
  VnrChecklistGroup,
  VnrFormSectionNav
};
//# sourceMappingURL=chunk-AOMSA6YR.js.map
