import {
  HrmStepper
} from "./chunk-CYIL2WSS.js";
import {
  VnrEditableFormTable
} from "./chunk-AOMSA6YR.js";
import {
  VnrFormField,
  VnrFormGrid,
  VnrFormSection,
  VnrFormShell
} from "./chunk-FMTJNLTR.js";
import {
  HrmAlert
} from "./chunk-H656EMSP.js";
import "./chunk-FJLQWKKP.js";
import "./chunk-5QKS2MQ6.js";
import {
  HrmTextarea
} from "./chunk-IBXTICOI.js";
import {
  HrmEmpty
} from "./chunk-Z3IELLHT.js";
import {
  DEFAULT_NAV_SECTIONS
} from "./chunk-R6YXEZBF.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import {
  HrmProgress
} from "./chunk-XC3RAI3E.js";
import "./chunk-ZTARLCQN.js";
import {
  HrmSelect
} from "./chunk-BI6MDT2Y.js";
import "./chunk-OVPA4RAH.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import {
  HrmInput
} from "./chunk-7IBNPHRP.js";
import "./chunk-EGUSTVRG.js";
import "./chunk-ZUH7BZUU.js";
import "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgUse
} from "./chunk-SZV2GIDV.js";
import {
  HrmAppShell
} from "./chunk-IY223FV3.js";
import {
  HrmSideNav
} from "./chunk-5JLQGRFF.js";
import {
  ActivatedRoute
} from "./chunk-WH372SY7.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ArrowsMaximize,
  Bell,
  Building,
  ChevronDown,
  ChevronRight,
  FileImport,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  ListCheck,
  Settings,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import "./chunk-JVYAKZTD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts
var _forTrack0 = ($index, $item) => $item.id;
function VnrBulkTargetPanel_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.ineligibleCount(), " kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n");
  }
}
function VnrBulkTargetPanel_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function VnrBulkTargetPanel_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAll());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.allSelected() ? "B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3" : "Ch\u1ECDn t\u1EA5t c\u1EA3 \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n", " ");
  }
}
function VnrBulkTargetPanel_For_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4.sub);
  }
}
function VnrBulkTargetPanel_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4.reason || "Kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n \xE1p d\u1EE5ng");
  }
}
function VnrBulkTargetPanel_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 16)(1, "input", 17);
    \u0275\u0275listener("change", function VnrBulkTargetPanel_For_14_Template_input_change_1_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle(t_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VnrBulkTargetPanel_For_14_Conditional_5_Template, 2, 1, "span", 20);
    \u0275\u0275conditionalCreate(6, VnrBulkTargetPanel_For_14_Conditional_6_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-sel", ctx_r0.isSel(t_r4.id))("is-off", !t_r4.eligible);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isSel(t_r4.id))("disabled", !t_r4.eligible);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(t_r4.sub ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!t_r4.eligible ? 6 : -1);
  }
}
function VnrBulkTargetPanel_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-empty", 7);
  }
}
function VnrBulkTargetPanel_Conditional_22_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275classProp("is-same", !r_r5.changed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.before);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r5.after);
  }
}
function VnrBulkTargetPanel_Conditional_22_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u xem tr\u01B0\u1EDBc.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4);
  }
}
function VnrBulkTargetPanel_Conditional_22_For_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Kh\xF4ng \u0111\u1ED5i");
    \u0275\u0275elementEnd();
  }
}
function VnrBulkTargetPanel_Conditional_22_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, VnrBulkTargetPanel_Conditional_22_For_22_Conditional_10_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275classProp("is-same", !r_r6.changed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.before);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r6.after);
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r6.changed ? 10 : -1);
  }
}
function VnrBulkTargetPanel_Conditional_22_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, "Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u xem tr\u01B0\u1EDBc.");
    \u0275\u0275elementEnd();
  }
}
function VnrBulkTargetPanel_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "Xem tr\u01B0\u1EDBc thay \u0111\u1ED5i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 25)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "N\u1ED9i dung");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Hi\u1EC7n t\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 26);
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Sau khi \xE1p d\u1EE5ng");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, VnrBulkTargetPanel_Conditional_22_For_18_Template, 9, 5, "tr", 27, _forTrack0, false, VnrBulkTargetPanel_Conditional_22_ForEmpty_19_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 28);
    \u0275\u0275repeaterCreate(21, VnrBulkTargetPanel_Conditional_22_For_22_Template, 11, 6, "div", 29, _forTrack0, false, VnrBulkTargetPanel_Conditional_22_ForEmpty_23_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.changedCount(), "/", ctx_r0.previewRows().length, " d\xF2ng th\u1EF1c s\u1EF1 thay \u0111\u1ED5i");
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r0.previewRows());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.previewRows());
  }
}
function VnrBulkTargetPanel_Conditional_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.failedNote);
  }
}
function VnrBulkTargetPanel_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3, "Th\xE0nh c\xF4ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9, "Th\u1EA5t b\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "b", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, VnrBulkTargetPanel_Conditional_23_Conditional_12_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-tone", r_r7.failed > 0 ? "partial" : "ok");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r7.ok));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r7.failed));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r7.failedNote ? 12 : -1);
  }
}
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.rowNo;
function VnrImportMapper_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-progress", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("percent", ctx_r0.progress())("status", ctx_r0.progress() === 100 ? "success" : "active");
  }
}
function VnrImportMapper_Case_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fileName());
  }
}
function VnrImportMapper_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 3)(1, "input", 4);
    \u0275\u0275listener("change", function VnrImportMapper_Case_3_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFile($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "Ch\u1ECDn t\u1EC7p d\u1EEF li\u1EC7u \u0111\u1EC3 nh\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "H\u1ED7 tr\u1EE3 t\u1EC7p theo m\u1EABu c\u1EE7a h\u1EC7 th\u1ED1ng. T\u1EC7p s\u1EBD \u0111\u01B0\u1EE3c \u0111\u1ECDc v\xE0 ki\u1EC3m tra \u1EDF b\u01B0\u1EDBc ti\u1EBFp theo.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, VnrImportMapper_Case_3_Conditional_6_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.fileName() ? 6 : -1);
  }
}
function VnrImportMapper_Case_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-alert", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("message", "C\xF2n " + ctx_r0.missingRequired().length + " tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c ch\u01B0a \u0111\u01B0\u1EE3c gh\xE9p c\u1ED9t")("description", ctx_r0.missingRequiredLabels());
  }
}
function VnrImportMapper_Case_4_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_4_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "B\u1EAFt bu\u1ED9c \u2014 ch\u01B0a gh\xE9p c\u1ED9t");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_4_For_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", c_r6)("selected", ctx_r0.mapping()[f_r5.key] === c_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6);
  }
}
function VnrImportMapper_Case_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19)(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, VnrImportMapper_Case_4_For_8_Conditional_4_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VnrImportMapper_Case_4_For_8_Conditional_5_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 23);
    \u0275\u0275listener("change", function VnrImportMapper_Case_4_For_8_Template_select_change_6_listener($event) {
      const f_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pick(f_r5.key, $event));
    });
    \u0275\u0275elementStart(7, "option", 24);
    \u0275\u0275text(8, "\u2014 Ch\u01B0a gh\xE9p \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, VnrImportMapper_Case_4_For_8_For_10_Template, 2, 3, "option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-miss", ctx_r0.isMissing(f_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r5.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r5.required ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMissing(f_r5) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "C\u1ED9t ngu\u1ED3n cho tr\u01B0\u1EDDng " + f_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("selected", !ctx_r0.mapping()[f_r5.key]);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.sourceColumns());
  }
}
function VnrImportMapper_Case_4_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-empty", 13);
  }
}
function VnrImportMapper_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 5);
    \u0275\u0275text(2, "Gh\xE9p c\u1ED9t trong t\u1EC7p v\u1EDBi tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, VnrImportMapper_Case_4_Conditional_5_Template, 1, 2, "hrm-alert", 10);
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275repeaterCreate(7, VnrImportMapper_Case_4_For_8_Template, 11, 7, "div", 12, _forTrack1, false, VnrImportMapper_Case_4_ForEmpty_9_Template, 1, 0, "hrm-empty", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "button", 15);
    \u0275\u0275listener("click", function VnrImportMapper_Case_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(12, "Quay l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "span", 16);
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275listener("click", function VnrImportMapper_Case_4_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.step.set("preview"));
    });
    \u0275\u0275text(15, "Xem tr\u01B0\u1EDBc d\u1EEF li\u1EC7u");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("\u0110\xE3 gh\xE9p ", ctx_r0.mappedCount(), "/", ctx_r0.targetFields().length, " tr\u01B0\u1EDDng");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.missingRequired().length ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.targetFields());
  }
}
function VnrImportMapper_Case_5_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.label);
  }
}
function VnrImportMapper_Case_5_For_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r9 = ctx.$implicit;
    const r_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.cells[f_r9.key] || "\u2014");
  }
}
function VnrImportMapper_Case_5_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.colCount());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.error);
  }
}
function VnrImportMapper_Case_5_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, VnrImportMapper_Case_5_For_15_For_4_Template, 2, 1, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VnrImportMapper_Case_5_For_15_Conditional_5_Template, 3, 2, "tr", 33);
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-err", r_r10.error ? "yes" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.rowNo);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.targetFields());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r10.error ? 5 : -1);
  }
}
function VnrImportMapper_Case_5_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2, "Ch\u01B0a c\xF3 d\xF2ng d\u1EEF li\u1EC7u n\xE0o.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.colCount());
  }
}
function VnrImportMapper_Case_5_For_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    const r_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r11.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.cells[f_r11.key] || "\u2014");
  }
}
function VnrImportMapper_Case_5_For_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r12.error);
  }
}
function VnrImportMapper_Case_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 34)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275repeaterCreate(5, VnrImportMapper_Case_5_For_19_For_6_Template, 5, 2, "span", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, VnrImportMapper_Case_5_For_19_Conditional_7_Template, 2, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-err", r_r12.error ? "yes" : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("D\xF2ng ", r_r12.rowNo);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.targetFields());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r12.error ? 7 : -1);
  }
}
function VnrImportMapper_Case_5_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Ch\u01B0a c\xF3 d\xF2ng d\u1EEF li\u1EC7u n\xE0o.");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function VnrImportMapper_Case_5_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadErrors.emit());
    });
    \u0275\u0275text(1, "T\u1EA3i file l\u1ED7i");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 5);
    \u0275\u0275text(2, "Ki\u1EC3m tra d\u1EEF li\u1EC7u tr\u01B0\u1EDBc khi nh\u1EADp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26)(6, "table", 27)(7, "thead")(8, "tr")(9, "th", 28);
    \u0275\u0275text(10, "D\xF2ng");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, VnrImportMapper_Case_5_For_12_Template, 2, 1, "th", null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, VnrImportMapper_Case_5_For_15_Template, 6, 3, null, null, _forTrack2, false, VnrImportMapper_Case_5_ForEmpty_16_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 29);
    \u0275\u0275repeaterCreate(18, VnrImportMapper_Case_5_For_19_Template, 8, 3, "div", 30, _forTrack2, false, VnrImportMapper_Case_5_ForEmpty_20_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function VnrImportMapper_Case_5_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(23, "Quay l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, VnrImportMapper_Case_5_Conditional_24_Template, 2, 0, "button", 32);
    \u0275\u0275element(25, "span", 16);
    \u0275\u0275elementStart(26, "button", 17);
    \u0275\u0275listener("click", function VnrImportMapper_Case_5_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.runImport.emit());
    });
    \u0275\u0275text(27, "B\u1EAFt \u0111\u1EA7u nh\u1EADp");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.previewRows().length, " d\xF2ng \xB7 ", ctx_r0.errorCount(), " d\xF2ng l\u1ED7i");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.targetFields());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.previewRows());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.previewRows());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.errorCount() ? 24 : -1);
  }
}
function VnrImportMapper_Case_6_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-alert", 42);
  }
  if (rf & 2) {
    const r_r15 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("message", ctx_r0.fmt(r_r15.failed) + " d\xF2ng ch\u01B0a \u0111\u01B0\u1EE3c nh\u1EADp");
  }
}
function VnrImportMapper_Case_6_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "span", 16);
    \u0275\u0275elementStart(1, "button", 17);
    \u0275\u0275listener("click", function VnrImportMapper_Case_6_Conditional_0_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadErrors.emit());
    });
    \u0275\u0275text(2, "T\u1EA3i file l\u1ED7i");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 36);
    \u0275\u0275text(3, "T\u1ED5ng s\u1ED1 d\xF2ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "span", 36);
    \u0275\u0275text(8, "Nh\u1EADp th\xE0nh c\xF4ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 41)(12, "span", 36);
    \u0275\u0275text(13, "Th\u1EA5t b\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(16, VnrImportMapper_Case_6_Conditional_0_Conditional_16_Template, 1, 1, "hrm-alert", 42);
    \u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
    \u0275\u0275listener("click", function VnrImportMapper_Case_6_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(19, "Quay l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, VnrImportMapper_Case_6_Conditional_0_Conditional_20_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r15 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r15.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r15.ok));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(r_r15.failed));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r15.failed > 0 ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(r_r15.failed > 0 ? 20 : -1);
  }
}
function VnrImportMapper_Case_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "\u0110ang ch\u1EDD k\u1EBFt qu\u1EA3 nh\u1EADp d\u1EEF li\u1EC7u.");
    \u0275\u0275elementEnd();
  }
}
function VnrImportMapper_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VnrImportMapper_Case_6_Conditional_0_Template, 21, 5)(1, VnrImportMapper_Case_6_Conditional_1_Template, 2, 0, "div", 31);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.result()) ? 0 : 1, tmp_1_0);
  }
}
var VnrBulkTargetPanel = class _VnrBulkTargetPanel {
  constructor() {
    this.targets = input.required(...ngDevMode ? [{ debugName: "targets" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedIds = model([], ...ngDevMode ? [{ debugName: "selectedIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.previewRows = input([], ...ngDevMode ? [{ debugName: "previewRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.result = input(null, ...ngDevMode ? [{ debugName: "result" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applyLabel = input("\xC1p d\u1EE5ng", ...ngDevMode ? [{ debugName: "applyLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectionChange = output();
    this.preview = output();
    this.apply = output();
    this.showPreview = signal(false, ...ngDevMode ? [{ debugName: "showPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = computed(() => this.targets().length, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedCount = computed(() => this.selectedIds().length, ...ngDevMode ? [{ debugName: "selectedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ineligibleCount = computed(() => this.targets().filter((t) => !t.eligible).length, ...ngDevMode ? [{ debugName: "ineligibleCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eligibleIds = computed(() => this.targets().filter((t) => t.eligible).map((t) => t.id), ...ngDevMode ? [{ debugName: "eligibleIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.changedCount = computed(() => this.previewRows().filter((r) => r.changed).length, ...ngDevMode ? [{ debugName: "changedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allSelected = computed(() => {
      const e = this.eligibleIds();
      const s = this.selectedIds();
      return e.length > 0 && e.every((id) => s.includes(id));
    }, ...ngDevMode ? [{ debugName: "allSelected" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  isSel(id) {
    return this.selectedIds().includes(id);
  }
  toggle(t) {
    if (!t.eligible)
      return;
    const cur = this.selectedIds();
    const next = cur.includes(t.id) ? cur.filter((x) => x !== t.id) : [...cur, t.id];
    this.selectedIds.set(next);
    this.selectionChange.emit(next);
  }
  toggleAll() {
    const next = this.allSelected() ? [] : this.eligibleIds();
    this.selectedIds.set(next);
    this.selectionChange.emit(next);
  }
  /** Mở/đóng khối xem trước; lần MỞ mới bắn `preview` để caller tính lại before/after. */
  togglePreview() {
    const next = !this.showPreview();
    this.showPreview.set(next);
    if (next)
      this.preview.emit();
  }
  /** Chỉ ĐỊNH DẠNG hiển thị — không phải tính toán nghiệp vụ. */
  fmt(v) {
    return new Intl.NumberFormat("vi-VN").format(v);
  }
  static {
    this.\u0275fac = function VnrBulkTargetPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrBulkTargetPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrBulkTargetPanel, selectors: [["vnr-bulk-target-panel"]], inputs: { targets: [1, "targets"], selectedIds: [1, "selectedIds"], previewRows: [1, "previewRows"], result: [1, "result"], applyLabel: [1, "applyLabel"] }, outputs: { selectedIds: "selectedIdsChange", selectionChange: "selectionChange", preview: "preview", apply: "apply" }, decls: 24, vars: 12, consts: [[1, "vnr-bt"], [1, "vnr-bt__sum"], [1, "c"], [1, "sp"], ["type", "button", 1, "vnr-bt__b"], [1, "vnr-bt__list"], [1, "vnr-bt__it", 3, "is-sel", "is-off"], ["preset", "no-data", "description", "Ch\u01B0a c\xF3 \u0111\u1ED1i t\u01B0\u1EE3ng n\xE0o."], [1, "vnr-bt__ft"], ["type", "button", 1, "vnr-bt__b", 3, "click", "disabled"], ["type", "button", 1, "vnr-bt__b", "is-primary", 3, "click", "disabled"], [1, "vnr-bt__pv"], [1, "vnr-bt__rs"], [1, "dot"], [1, "ne"], ["type", "button", 1, "vnr-bt__b", 3, "click"], [1, "vnr-bt__it"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "tx"], [1, "nm"], [1, "sb"], [1, "rs"], [1, "vnr-bt__pvhd"], [1, "t"], [1, "m"], [1, "vnr-bt__tb"], [1, "ar"], [3, "is-same"], [1, "vnr-bt__cards"], [1, "vnr-bt__card", 3, "is-same"], [1, "vnr-bt__empty"], [1, "lb"], [1, "vl"], [1, "vl", "new"], [1, "vnr-bt__card"], [1, "pair"], [1, "sm"], [1, "line"], [1, "k"], [1, "v", "ok"], [1, "v", "fa"], [1, "nt"]], template: function VnrBulkTargetPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u0110\xE3 ch\u1ECDn ");
        \u0275\u0275elementStart(4, "b");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " / ");
        \u0275\u0275elementStart(7, "b");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, VnrBulkTargetPanel_Conditional_9_Template, 4, 1);
        \u0275\u0275element(10, "span", 3);
        \u0275\u0275conditionalCreate(11, VnrBulkTargetPanel_Conditional_11_Template, 2, 1, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275repeaterCreate(13, VnrBulkTargetPanel_For_14_Template, 7, 9, "label", 6, _forTrack0, false, VnrBulkTargetPanel_ForEmpty_15_Template, 1, 0, "hrm-empty", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
        \u0275\u0275listener("click", function VnrBulkTargetPanel_Template_button_click_17_listener() {
          return ctx.togglePreview();
        });
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "span", 3);
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function VnrBulkTargetPanel_Template_button_click_20_listener() {
          return ctx.apply.emit(ctx.selectedIds());
        });
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, VnrBulkTargetPanel_Conditional_22_Template, 24, 4, "div", 11);
        \u0275\u0275conditionalCreate(23, VnrBulkTargetPanel_Conditional_23_Template, 13, 4, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_10_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.selectedCount());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.ineligibleCount() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.eligibleIds().length ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.targets());
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.selectedCount());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.showPreview() ? "\u1EA8n xem tr\u01B0\u1EDBc" : "Xem tr\u01B0\u1EDBc thay \u0111\u1ED5i", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.selectedCount());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.applyLabel(), " (", ctx.selectedCount(), ") ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPreview() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_10_0 = ctx.result()) ? 23 : -1, tmp_10_0);
      }
    }, dependencies: [HrmEmpty], styles: ["/* angular:styles/component:css;fecc7f5c8b9e005f174f9b9a704e19ab4f09973da42aa122c6080b4197434633;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts */\n.vnr-bt {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-bt__sum {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  padding: 8px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-bt__sum b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__sum .dot {\n  color: var(--text-soft);\n}\n.vnr-bt__sum .ne {\n  color: var(--warning-base);\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__sum .sp {\n  margin-inline-start: auto;\n}\n.vnr-bt__list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 6px;\n}\n@container vnrform (min-width: 760px) {\n  .vnr-bt__list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@container vnrform (min-width: 1080px) {\n  .vnr-bt__list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.vnr-bt__list hrm-empty {\n  grid-column: 1 / -1;\n}\n.vnr-bt__it {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2, 8px);\n  min-inline-size: 0;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.vnr-bt__it:hover {\n  border-color: var(--primary-base);\n}\n.vnr-bt__it.is-sel {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.vnr-bt__it.is-off {\n  background: var(--faded-bg);\n  border-style: dashed;\n  border-color: var(--border-soft);\n  cursor: not-allowed;\n}\n.vnr-bt__it.is-off:hover {\n  border-color: var(--border-soft);\n}\n.vnr-bt__it > input {\n  flex: none;\n  margin: 2px 0 0;\n  accent-color: var(--primary-base);\n}\n.vnr-bt__it .tx {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-bt__it .nm {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  word-break: break-word;\n}\n.vnr-bt__it.is-off .nm {\n  color: var(--text-sub);\n}\n.vnr-bt__it .sb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__it .rs {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-bt__ft {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n}\n.vnr-bt__ft .sp {\n  margin-inline-start: auto;\n}\n.vnr-bt__b {\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-bt__b:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-bt__b:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.vnr-bt__b.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-bt__b.is-primary:hover:not(:disabled) {\n  color: var(--text-on-primary);\n  opacity: .92;\n}\n.vnr-bt__pv {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-bt__pvhd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n  padding: 8px 12px;\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__pvhd .t {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__pvhd .m {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n}\n.vnr-bt__tb th {\n  background: var(--bg-surface);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 7px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__tb td {\n  padding: 7px 10px;\n  font-size: var(--fs-12, 12px);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__tb tbody tr:last-child td {\n  border-block-end: none;\n}\n.vnr-bt__tb .lb {\n  color: var(--text-sub);\n}\n.vnr-bt__tb .vl {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n  word-break: break-word;\n}\n.vnr-bt__tb .vl.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__tb .ar {\n  inline-size: 26px;\n  text-align: center;\n  color: var(--text-soft);\n}\n.vnr-bt__tb tr.is-same {\n  opacity: .55;\n}\n.vnr-bt__cards {\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n  padding: 8px;\n}\n.vnr-bt__card {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-bt__card.is-same {\n  opacity: .55;\n}\n.vnr-bt__card .lb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__card .pair {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.vnr-bt__card .vl {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__card .vl.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__card .ar {\n  color: var(--text-soft);\n}\n.vnr-bt__card .sm {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: 14px;\n}\n.vnr-bt__rs {\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  padding: 9px 12px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-bt__rs[data-tone=ok] {\n  background: var(--success-bg);\n  border-color: var(--success-base);\n}\n.vnr-bt__rs[data-tone=partial] {\n  background: var(--warning-bg);\n  border-color: var(--warning-border);\n}\n.vnr-bt__rs .line {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.vnr-bt__rs .k {\n  color: var(--text-sub);\n}\n.vnr-bt__rs .dot {\n  color: var(--text-soft);\n}\n.vnr-bt__rs .v {\n  font-weight: var(--font-bold, 700);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__rs .v.ok {\n  color: var(--success-base);\n}\n.vnr-bt__rs .v.fa {\n  color: var(--error-base);\n}\n.vnr-bt__rs .nt {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-body);\n}\n@container vnrform (max-width: 559px) {\n  .vnr-bt__tb {\n    display: none;\n  }\n  .vnr-bt__cards {\n    display: flex;\n  }\n  .vnr-bt__ft .vnr-bt__b {\n    flex: 1 1 100%;\n  }\n  .vnr-bt__ft .sp {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-bulk.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrBulkTargetPanel, [{
    type: Component,
    args: [{ selector: "vnr-bulk-target-panel", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [HrmEmpty], template: `
    <div class="vnr-bt">
      <!-- T\xF3m t\u1EAFt: ch\u1EC9 \u0110\u1EBEM thu\u1EA7n tu\xFD tr\xEAn d\u1EEF li\u1EC7u \u0111\xE3 nh\u1EADn, kh\xF4ng suy lu\u1EADn nghi\u1EC7p v\u1EE5 -->
      <div class="vnr-bt__sum">
        <span class="c">\u0110\xE3 ch\u1ECDn <b>{{ selectedCount() }}</b> / <b>{{ total() }}</b></span>
        @if (ineligibleCount()) {
          <span class="dot">\xB7</span>
          <span class="ne">{{ ineligibleCount() }} kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n</span>
        }
        <span class="sp"></span>
        @if (eligibleIds().length) {
          <button type="button" class="vnr-bt__b" (click)="toggleAll()">
            {{ allSelected() ? 'B\u1ECF ch\u1ECDn t\u1EA5t c\u1EA3' : 'Ch\u1ECDn t\u1EA5t c\u1EA3 \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n' }}
          </button>
        }
      </div>

      <div class="vnr-bt__list">
        @for (t of targets(); track t.id) {
          <label class="vnr-bt__it" [class.is-sel]="isSel(t.id)" [class.is-off]="!t.eligible">
            <input type="checkbox" [checked]="isSel(t.id)" [disabled]="!t.eligible" (change)="toggle(t)" />
            <span class="tx">
              <span class="nm">{{ t.name }}</span>
              @if (t.sub) { <span class="sb">{{ t.sub }}</span> }
              <!-- Kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n: n\xEAu L\xDD DO b\u1EB1ng ch\u1EEF, kh\xF4ng ch\u1EC9 l\xE0m m\u1EDD -->
              @if (!t.eligible) { <span class="rs">{{ t.reason || 'Kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n \xE1p d\u1EE5ng' }}</span> }
            </span>
          </label>
        } @empty {
          <hrm-empty preset="no-data" description="Ch\u01B0a c\xF3 \u0111\u1ED1i t\u01B0\u1EE3ng n\xE0o." />
        }
      </div>

      <div class="vnr-bt__ft">
        <button type="button" class="vnr-bt__b" [disabled]="!selectedCount()" (click)="togglePreview()">
          {{ showPreview() ? '\u1EA8n xem tr\u01B0\u1EDBc' : 'Xem tr\u01B0\u1EDBc thay \u0111\u1ED5i' }}
        </button>
        <span class="sp"></span>
        <button type="button" class="vnr-bt__b is-primary" [disabled]="!selectedCount()"
          (click)="apply.emit(selectedIds())">
          {{ applyLabel() }} ({{ selectedCount() }})
        </button>
      </div>

      @if (showPreview()) {
        <div class="vnr-bt__pv">
          <div class="vnr-bt__pvhd">
            <span class="t">Xem tr\u01B0\u1EDBc thay \u0111\u1ED5i</span>
            <span class="m">{{ changedCount() }}/{{ previewRows().length }} d\xF2ng th\u1EF1c s\u1EF1 thay \u0111\u1ED5i</span>
          </div>

          <table class="vnr-bt__tb">
            <thead><tr><th>N\u1ED9i dung</th><th>Hi\u1EC7n t\u1EA1i</th><th class="ar"></th><th>Sau khi \xE1p d\u1EE5ng</th></tr></thead>
            <tbody>
              @for (r of previewRows(); track r.id) {
                <tr [class.is-same]="!r.changed">
                  <td class="lb">{{ r.label }}</td>
                  <td class="vl">{{ r.before }}</td>
                  <td class="ar">\u2192</td>
                  <td class="vl new">{{ r.after }}</td>
                </tr>
              } @empty {
                <tr><td class="vnr-bt__empty" [attr.colspan]="4">Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u xem tr\u01B0\u1EDBc.</td></tr>
              }
            </tbody>
          </table>

          <!-- Card fallback (container h\u1EB9p) \u2014 c\xF9ng d\u1EEF li\u1EC7u, kh\xF4ng cu\u1ED9n ngang -->
          <div class="vnr-bt__cards">
            @for (r of previewRows(); track r.id) {
              <div class="vnr-bt__card" [class.is-same]="!r.changed">
                <span class="lb">{{ r.label }}</span>
                <span class="pair"><span class="vl">{{ r.before }}</span><span class="ar">\u2192</span><span class="vl new">{{ r.after }}</span></span>
                @if (!r.changed) { <span class="sm">Kh\xF4ng \u0111\u1ED5i</span> }
              </div>
            } @empty {
              <div class="vnr-bt__empty">Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u xem tr\u01B0\u1EDBc.</div>
            }
          </div>
        </div>
      }

      @if (result(); as r) {
        <div class="vnr-bt__rs" [attr.data-tone]="r.failed > 0 ? 'partial' : 'ok'">
          <div class="line">
            <span class="k">Th\xE0nh c\xF4ng</span><b class="v ok">{{ fmt(r.ok) }}</b>
            <span class="dot">\xB7</span>
            <span class="k">Th\u1EA5t b\u1EA1i</span><b class="v fa">{{ fmt(r.failed) }}</b>
          </div>
          @if (r.failedNote) { <div class="nt">{{ r.failedNote }}</div> }
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;fecc7f5c8b9e005f174f9b9a704e19ab4f09973da42aa122c6080b4197434633;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts */\n.vnr-bt {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-bt__sum {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  padding: 8px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-bt__sum b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__sum .dot {\n  color: var(--text-soft);\n}\n.vnr-bt__sum .ne {\n  color: var(--warning-base);\n  font-weight: var(--font-semibold, 600);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__sum .sp {\n  margin-inline-start: auto;\n}\n.vnr-bt__list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 6px;\n}\n@container vnrform (min-width: 760px) {\n  .vnr-bt__list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@container vnrform (min-width: 1080px) {\n  .vnr-bt__list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.vnr-bt__list hrm-empty {\n  grid-column: 1 / -1;\n}\n.vnr-bt__it {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2, 8px);\n  min-inline-size: 0;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.vnr-bt__it:hover {\n  border-color: var(--primary-base);\n}\n.vnr-bt__it.is-sel {\n  border-color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.vnr-bt__it.is-off {\n  background: var(--faded-bg);\n  border-style: dashed;\n  border-color: var(--border-soft);\n  cursor: not-allowed;\n}\n.vnr-bt__it.is-off:hover {\n  border-color: var(--border-soft);\n}\n.vnr-bt__it > input {\n  flex: none;\n  margin: 2px 0 0;\n  accent-color: var(--primary-base);\n}\n.vnr-bt__it .tx {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-bt__it .nm {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  word-break: break-word;\n}\n.vnr-bt__it.is-off .nm {\n  color: var(--text-sub);\n}\n.vnr-bt__it .sb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__it .rs {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-bt__ft {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n}\n.vnr-bt__ft .sp {\n  margin-inline-start: auto;\n}\n.vnr-bt__b {\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-bt__b:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-bt__b:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.vnr-bt__b.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-bt__b.is-primary:hover:not(:disabled) {\n  color: var(--text-on-primary);\n  opacity: .92;\n}\n.vnr-bt__pv {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  overflow: hidden;\n}\n.vnr-bt__pvhd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n  padding: 8px 12px;\n  background: var(--bg-surface-subtle);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__pvhd .t {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__pvhd .m {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n}\n.vnr-bt__tb th {\n  background: var(--bg-surface);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 7px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__tb td {\n  padding: 7px 10px;\n  font-size: var(--fs-12, 12px);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-bt__tb tbody tr:last-child td {\n  border-block-end: none;\n}\n.vnr-bt__tb .lb {\n  color: var(--text-sub);\n}\n.vnr-bt__tb .vl {\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n  word-break: break-word;\n}\n.vnr-bt__tb .vl.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__tb .ar {\n  inline-size: 26px;\n  text-align: center;\n  color: var(--text-soft);\n}\n.vnr-bt__tb tr.is-same {\n  opacity: .55;\n}\n.vnr-bt__cards {\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n  padding: 8px;\n}\n.vnr-bt__card {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-bt__card.is-same {\n  opacity: .55;\n}\n.vnr-bt__card .lb {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__card .pair {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.vnr-bt__card .vl {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__card .vl.new {\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-bt__card .ar {\n  color: var(--text-soft);\n}\n.vnr-bt__card .sm {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-bt__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: 14px;\n}\n.vnr-bt__rs {\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm, 6px);\n  padding: 9px 12px;\n  font-size: var(--fs-12, 12px);\n}\n.vnr-bt__rs[data-tone=ok] {\n  background: var(--success-bg);\n  border-color: var(--success-base);\n}\n.vnr-bt__rs[data-tone=partial] {\n  background: var(--warning-bg);\n  border-color: var(--warning-border);\n}\n.vnr-bt__rs .line {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.vnr-bt__rs .k {\n  color: var(--text-sub);\n}\n.vnr-bt__rs .dot {\n  color: var(--text-soft);\n}\n.vnr-bt__rs .v {\n  font-weight: var(--font-bold, 700);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-bt__rs .v.ok {\n  color: var(--success-base);\n}\n.vnr-bt__rs .v.fa {\n  color: var(--error-base);\n}\n.vnr-bt__rs .nt {\n  margin-block-start: 4px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-body);\n}\n@container vnrform (max-width: 559px) {\n  .vnr-bt__tb {\n    display: none;\n  }\n  .vnr-bt__cards {\n    display: flex;\n  }\n  .vnr-bt__ft .vnr-bt__b {\n    flex: 1 1 100%;\n  }\n  .vnr-bt__ft .sp {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-bulk.css.map */\n"] }]
  }], null, { targets: [{ type: Input, args: [{ isSignal: true, alias: "targets", required: true }] }], selectedIds: [{ type: Input, args: [{ isSignal: true, alias: "selectedIds", required: false }] }, { type: Output, args: ["selectedIdsChange"] }], previewRows: [{ type: Input, args: [{ isSignal: true, alias: "previewRows", required: false }] }], result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: false }] }], applyLabel: [{ type: Input, args: [{ isSignal: true, alias: "applyLabel", required: false }] }], selectionChange: [{ type: Output, args: ["selectionChange"] }], preview: [{ type: Output, args: ["preview"] }], apply: [{ type: Output, args: ["apply"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrBulkTargetPanel, { className: "VnrBulkTargetPanel", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts", lineNumber: 270 });
})();
var VnrImportMapper = class _VnrImportMapper {
  constructor() {
    this.step = model("upload", ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileName = input(null, ...ngDevMode ? [{ debugName: "fileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sourceColumns = input([], ...ngDevMode ? [{ debugName: "sourceColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.targetFields = input.required(...ngDevMode ? [{ debugName: "targetFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mapping = model({}, ...ngDevMode ? [{ debugName: "mapping" }] : (
      /* istanbul ignore next */
      []
    ));
    this.previewRows = input([], ...ngDevMode ? [{ debugName: "previewRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.progress = input(null, ...ngDevMode ? [{ debugName: "progress" }] : (
      /* istanbul ignore next */
      []
    ));
    this.result = input(null, ...ngDevMode ? [{ debugName: "result" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileSelect = output();
    this.mappingChange = output();
    this.runImport = output();
    this.downloadErrors = output();
    this.back = output();
    this.steps = [
      { key: "upload", label: "Ch\u1ECDn t\u1EC7p" },
      { key: "mapping", label: "Gh\xE9p c\u1ED9t" },
      { key: "preview", label: "Ki\u1EC3m tra" },
      { key: "result", label: "K\u1EBFt qu\u1EA3" }
    ];
    this.stepIndex = computed(() => {
      const i = this.steps.findIndex((s) => s.key === this.step());
      return i < 0 ? 0 : i;
    }, ...ngDevMode ? [{ debugName: "stepIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.stepperSteps = computed(() => this.steps.map((s) => ({ key: s.key, label: s.label })), ...ngDevMode ? [{ debugName: "stepperSteps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mappedCount = computed(() => this.targetFields().filter((f) => !!this.mapping()[f.key]).length, ...ngDevMode ? [{ debugName: "mappedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.missingRequired = computed(() => this.targetFields().filter((f) => !!f.required && !this.mapping()[f.key]), ...ngDevMode ? [{ debugName: "missingRequired" }] : (
      /* istanbul ignore next */
      []
    ));
    this.missingRequiredLabels = computed(() => this.missingRequired().map((f) => f.label).join(", "), ...ngDevMode ? [{ debugName: "missingRequiredLabels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.errorCount = computed(() => this.previewRows().filter((r) => !!r.error).length, ...ngDevMode ? [{ debugName: "errorCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colCount = computed(() => this.targetFields().length + 1, ...ngDevMode ? [{ debugName: "colCount" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  isMissing(f) {
    return !!f.required && !this.mapping()[f.key];
  }
  /** Chỉ CHUYỂN TIẾP tệp cho caller — component không đọc, không phân tích nội dung. */
  onFile(e) {
    const el = e.target;
    const f = el.files && el.files.length ? el.files[0] : null;
    this.fileSelect.emit(f);
    el.value = "";
  }
  pick(targetKey, e) {
    const raw = e.target.value;
    const sourceColumn = raw === "" ? null : raw;
    this.mapping.set(__spreadProps(__spreadValues({}, this.mapping()), { [targetKey]: sourceColumn }));
    this.mappingChange.emit({ targetKey, sourceColumn });
  }
  /** Lùi về bước liền trước. Mọi điều hướng LÙI đều bắn `back` để caller đồng bộ trạng thái. */
  goBack() {
    const i = this.stepIndex();
    if (i <= 0)
      return;
    this.step.set(this.steps[i - 1].key);
    this.back.emit();
  }
  /** Nhảy về một bước ĐÃ HOÀN THÀNH từ stepper; không cho nhảy tiến. */
  goTo(key) {
    const i = this.steps.findIndex((s) => s.key === key);
    if (i < 0 || i >= this.stepIndex())
      return;
    this.step.set(key);
    this.back.emit();
  }
  /** Chỉ ĐỊNH DẠNG hiển thị — không phải tính toán nghiệp vụ. */
  fmt(v) {
    return new Intl.NumberFormat("vi-VN").format(v);
  }
  static {
    this.\u0275fac = function VnrImportMapper_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VnrImportMapper)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VnrImportMapper, selectors: [["vnr-import-mapper"]], inputs: { step: [1, "step"], fileName: [1, "fileName"], sourceColumns: [1, "sourceColumns"], targetFields: [1, "targetFields"], mapping: [1, "mapping"], previewRows: [1, "previewRows"], progress: [1, "progress"], result: [1, "result"] }, outputs: { step: "stepChange", mapping: "mappingChange", fileSelect: "fileSelect", mappingChange: "mappingChange", runImport: "runImport", downloadErrors: "downloadErrors", back: "back" }, decls: 7, vars: 4, consts: [[1, "vnr-im"], [3, "stepClick", "steps", "activeIndex"], ["size", "small", 3, "percent", "status"], [1, "vnr-im__up"], ["type", "file", 3, "change"], [1, "t"], [1, "h"], [1, "fn"], [1, "vnr-im__hd"], [1, "m"], ["type", "warning", 3, "message", "description"], [1, "vnr-im__mp"], [1, "vnr-im__row", 3, "is-miss"], ["preset", "no-data", "description", "Ch\u01B0a khai b\xE1o tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng n\xE0o."], [1, "vnr-im__ft"], ["type", "button", 1, "vnr-im__b", 3, "click"], [1, "sp"], ["type", "button", 1, "vnr-im__b", "is-primary", 3, "click"], [1, "vnr-im__row"], [1, "fl"], [1, "nm"], [1, "rq"], [1, "ms"], [1, "vnr-im__sel", 3, "change"], ["value", "", 3, "selected"], [3, "value", "selected"], [1, "vnr-im__tbw"], [1, "vnr-im__tb"], [1, "no"], [1, "vnr-im__cards"], [1, "vnr-im__card"], [1, "vnr-im__empty"], ["type", "button", 1, "vnr-im__b"], [1, "er"], [1, "hd"], [1, "bd"], [1, "k"], [1, "vnr-im__rs"], ["data-t", "total"], [1, "v"], ["data-t", "ok"], ["data-t", "failed"], ["type", "warning", "description", "T\u1EA3i t\u1EC7p l\u1ED7i \u0111\u1EC3 s\u1EEDa r\u1ED3i nh\u1EADp l\u1EA1i ph\u1EA7n c\xF2n thi\u1EBFu.", 3, "message"]], template: function VnrImportMapper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "hrm-stepper", 1);
        \u0275\u0275listener("stepClick", function VnrImportMapper_Template_hrm_stepper_stepClick_1_listener($event) {
          return ctx.goTo($event.key);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, VnrImportMapper_Conditional_2_Template, 1, 2, "hrm-progress", 2);
        \u0275\u0275conditionalCreate(3, VnrImportMapper_Case_3_Template, 7, 1, "label", 3)(4, VnrImportMapper_Case_4_Template, 16, 4)(5, VnrImportMapper_Case_5_Template, 28, 5)(6, VnrImportMapper_Case_6_Template, 2, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance();
        \u0275\u0275property("steps", ctx.stepperSteps())("activeIndex", ctx.stepIndex());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.progress() !== null ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_3_0 = ctx.step()) === "upload" ? 3 : tmp_3_0 === "mapping" ? 4 : tmp_3_0 === "preview" ? 5 : tmp_3_0 === "result" ? 6 : -1);
      }
    }, dependencies: [HrmStepper, HrmProgress, HrmAlert, HrmEmpty], styles: ["/* angular:styles/component:css;7265a5c39d1a8b1b5654e19e44b3816403ab2c655455f83406ea3d8df5f4b40a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts */\n.vnr-im {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.vnr-im__up:focus-within {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 2px;\n}\n.vnr-im__up {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 22px 16px;\n  text-align: center;\n  cursor: pointer;\n  background: var(--bg-surface-subtle);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--radius-sm, 6px);\n}\n.vnr-im__up:hover {\n  border-color: var(--primary-base);\n}\n.vnr-im__up input {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  opacity: 0;\n}\n.vnr-im__up .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__up .h {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-im__up .fn {\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 10px;\n}\n.vnr-im__hd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n}\n.vnr-im__hd .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__hd .m {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__mp {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.vnr-im__row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--space-2-5, 10px);\n  align-items: center;\n  padding: 7px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-im__row.is-miss {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-im__row .fl {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-im__row .nm {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__row .rq {\n  color: var(--error-base);\n  margin-inline-start: 2px;\n}\n.vnr-im__row .ms {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-im__sel {\n  inline-size: 100%;\n  block-size: 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xs, 4px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  padding: 0 6px;\n}\n.vnr-im__sel:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-im__sel:focus {\n  outline: none;\n  border-color: var(--primary-base);\n}\n.vnr-im__tbw {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n}\n.vnr-im__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n}\n.vnr-im__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 7px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-im__tb td {\n  padding: 6px 10px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-im__tb .no {\n  inline-size: 56px;\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__tb tr[data-err=yes] td {\n  background: var(--error-bg);\n  border-block-end-color: var(--error-bg);\n}\n.vnr-im__tb tr.er td {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding-block-start: 0;\n}\n.vnr-im__cards {\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n}\n.vnr-im__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: 8px 10px;\n}\n.vnr-im__card[data-err=yes] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-im__card .no {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__card .bd {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-im__card .bd b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__card .er {\n  margin-block-start: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--error-base);\n}\n.vnr-im__rs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-im__rs > div {\n  flex: 1 1 140px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-im__rs .k {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-im__rs .v {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__rs > div[data-t=ok] {\n  background: var(--success-bg);\n  border-color: var(--success-base);\n}\n.vnr-im__rs > div[data-t=ok] .v {\n  color: var(--success-base);\n}\n.vnr-im__rs > div[data-t=failed] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-im__rs > div[data-t=failed] .v {\n  color: var(--error-base);\n}\n.vnr-im__ft {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n}\n.vnr-im__ft .sp {\n  margin-inline-start: auto;\n}\n.vnr-im__b {\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-im__b:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-im__b:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.vnr-im__b.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-im__b.is-primary:hover:not(:disabled) {\n  color: var(--text-on-primary);\n  opacity: .92;\n}\n.vnr-im__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: 14px;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-im__tbw {\n    display: none;\n  }\n  .vnr-im__cards {\n    display: flex;\n  }\n  .vnr-im__row {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 4px;\n  }\n  .vnr-im__ft .vnr-im__b {\n    flex: 1 1 100%;\n  }\n  .vnr-im__ft .sp {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-bulk.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VnrImportMapper, [{
    type: Component,
    args: [{ selector: "vnr-import-mapper", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [HrmStepper, HrmProgress, HrmAlert, HrmEmpty], template: `
    <div class="vnr-im">
      <!-- Stepper c\u1EE7a design system: ch\u1EC9 ph\u1EA3n \xE1nh b\u01B0\u1EDBc hi\u1EC7n t\u1EA1i, kh\xF4ng t\u1EF1 \u0111i\u1EC1u h\u01B0\u1EDBng ti\u1EBFn.
           activeIndex bind M\u1ED8T CHI\u1EC0U v\xEC ngu\u1ED3n s\u1EF1 th\u1EADt l\xE0 model step(); clickableBack (m\u1EB7c \u0111\u1ECBnh true)
           \u0111\xFAng ng\u1EEF ngh\u0129a "ch\u1EC9 cho l\xF9i v\u1EC1 b\u01B0\u1EDBc \u0111\xE3 xong". -->
      <hrm-stepper [steps]="stepperSteps()" [activeIndex]="stepIndex()"
        (stepClick)="goTo($any($event).key)" />

      @if (progress() !== null) {
        <hrm-progress [percent]="progress()!" [status]="progress() === 100 ? 'success' : 'active'" size="small" />
      }

      @switch (step()) {

        @case ('upload') {
          <label class="vnr-im__up">
            <input type="file" (change)="onFile($event)" />
            <span class="t">Ch\u1ECDn t\u1EC7p d\u1EEF li\u1EC7u \u0111\u1EC3 nh\u1EADp</span>
            <span class="h">H\u1ED7 tr\u1EE3 t\u1EC7p theo m\u1EABu c\u1EE7a h\u1EC7 th\u1ED1ng. T\u1EC7p s\u1EBD \u0111\u01B0\u1EE3c \u0111\u1ECDc v\xE0 ki\u1EC3m tra \u1EDF b\u01B0\u1EDBc ti\u1EBFp theo.</span>
            @if (fileName()) { <span class="fn">{{ fileName() }}</span> }
          </label>
        }

        @case ('mapping') {
          <div class="vnr-im__hd">
            <span class="t">Gh\xE9p c\u1ED9t trong t\u1EC7p v\u1EDBi tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng</span>
            <span class="m">\u0110\xE3 gh\xE9p {{ mappedCount() }}/{{ targetFields().length }} tr\u01B0\u1EDDng</span>
          </div>
          @if (missingRequired().length) {
            <!-- C\u1EA3nh b\xE1o b\u1EB1ng CH\u1EEE, kh\xF4ng ch\u1EC9 d\u1EF1a v\xE0o m\xE0u -->
            <hrm-alert type="warning"
              [message]="'C\xF2n ' + missingRequired().length + ' tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c ch\u01B0a \u0111\u01B0\u1EE3c gh\xE9p c\u1ED9t'"
              [description]="missingRequiredLabels()" />
          }
          <div class="vnr-im__mp">
            @for (f of targetFields(); track f.key) {
              <div class="vnr-im__row" [class.is-miss]="isMissing(f)">
                <span class="fl">
                  <span class="nm">{{ f.label }}@if (f.required) {<span class="rq">*</span>}</span>
                  @if (isMissing(f)) { <span class="ms">B\u1EAFt bu\u1ED9c \u2014 ch\u01B0a gh\xE9p c\u1ED9t</span> }
                </span>
                <select class="vnr-im__sel" (change)="pick(f.key, $event)"
                  [attr.aria-label]="'C\u1ED9t ngu\u1ED3n cho tr\u01B0\u1EDDng ' + f.label">
                  <option value="" [selected]="!mapping()[f.key]">\u2014 Ch\u01B0a gh\xE9p \u2014</option>
                  @for (c of sourceColumns(); track c) {
                    <option [value]="c" [selected]="mapping()[f.key] === c">{{ c }}</option>
                  }
                </select>
              </div>
            } @empty {
              <hrm-empty preset="no-data" description="Ch\u01B0a khai b\xE1o tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng n\xE0o." />
            }
          </div>
          <div class="vnr-im__ft">
            <button type="button" class="vnr-im__b" (click)="goBack()">Quay l\u1EA1i</button>
            <span class="sp"></span>
            <button type="button" class="vnr-im__b is-primary" (click)="step.set('preview')">Xem tr\u01B0\u1EDBc d\u1EEF li\u1EC7u</button>
          </div>
        }

        @case ('preview') {
          <div class="vnr-im__hd">
            <span class="t">Ki\u1EC3m tra d\u1EEF li\u1EC7u tr\u01B0\u1EDBc khi nh\u1EADp</span>
            <span class="m">{{ previewRows().length }} d\xF2ng \xB7 {{ errorCount() }} d\xF2ng l\u1ED7i</span>
          </div>

          <div class="vnr-im__tbw">
            <table class="vnr-im__tb">
              <thead><tr>
                <th class="no">D\xF2ng</th>
                @for (f of targetFields(); track f.key) { <th>{{ f.label }}</th> }
              </tr></thead>
              <tbody>
                @for (r of previewRows(); track r.rowNo) {
                  <tr [attr.data-err]="r.error ? 'yes' : null">
                    <td class="no">{{ r.rowNo }}</td>
                    @for (f of targetFields(); track f.key) { <td>{{ r.cells[f.key] || '\u2014' }}</td> }
                  </tr>
                  @if (r.error) {
                    <tr class="er"><td [attr.colspan]="colCount()">{{ r.error }}</td></tr>
                  }
                } @empty {
                  <tr><td class="vnr-im__empty" [attr.colspan]="colCount()">Ch\u01B0a c\xF3 d\xF2ng d\u1EEF li\u1EC7u n\xE0o.</td></tr>
                }
              </tbody>
            </table>
          </div>

          <!-- Card fallback (container h\u1EB9p) \u2014 c\xF9ng d\u1EEF li\u1EC7u, kh\xF4ng cu\u1ED9n ngang -->
          <div class="vnr-im__cards">
            @for (r of previewRows(); track r.rowNo) {
              <div class="vnr-im__card" [attr.data-err]="r.error ? 'yes' : null">
                <div class="hd"><span class="no">D\xF2ng {{ r.rowNo }}</span></div>
                <div class="bd">
                  @for (f of targetFields(); track f.key) {
                    <span><span class="k">{{ f.label }}:</span> <b>{{ r.cells[f.key] || '\u2014' }}</b></span>
                  }
                </div>
                @if (r.error) { <div class="er">{{ r.error }}</div> }
              </div>
            } @empty {
              <div class="vnr-im__empty">Ch\u01B0a c\xF3 d\xF2ng d\u1EEF li\u1EC7u n\xE0o.</div>
            }
          </div>

          <div class="vnr-im__ft">
            <button type="button" class="vnr-im__b" (click)="goBack()">Quay l\u1EA1i</button>
            @if (errorCount()) {
              <button type="button" class="vnr-im__b" (click)="downloadErrors.emit()">T\u1EA3i file l\u1ED7i</button>
            }
            <span class="sp"></span>
            <button type="button" class="vnr-im__b is-primary" (click)="runImport.emit()">B\u1EAFt \u0111\u1EA7u nh\u1EADp</button>
          </div>
        }

        @case ('result') {
          @if (result(); as r) {
            <div class="vnr-im__rs">
              <div data-t="total"><span class="k">T\u1ED5ng s\u1ED1 d\xF2ng</span><span class="v">{{ fmt(r.total) }}</span></div>
              <div data-t="ok"><span class="k">Nh\u1EADp th\xE0nh c\xF4ng</span><span class="v">{{ fmt(r.ok) }}</span></div>
              <div data-t="failed"><span class="k">Th\u1EA5t b\u1EA1i</span><span class="v">{{ fmt(r.failed) }}</span></div>
            </div>
            @if (r.failed > 0) {
              <hrm-alert type="warning"
                [message]="fmt(r.failed) + ' d\xF2ng ch\u01B0a \u0111\u01B0\u1EE3c nh\u1EADp'"
                description="T\u1EA3i t\u1EC7p l\u1ED7i \u0111\u1EC3 s\u1EEDa r\u1ED3i nh\u1EADp l\u1EA1i ph\u1EA7n c\xF2n thi\u1EBFu." />
            }
            <div class="vnr-im__ft">
              <button type="button" class="vnr-im__b" (click)="goBack()">Quay l\u1EA1i</button>
              @if (r.failed > 0) {
                <span class="sp"></span>
                <button type="button" class="vnr-im__b is-primary" (click)="downloadErrors.emit()">T\u1EA3i file l\u1ED7i</button>
              }
            </div>
          } @else {
            <div class="vnr-im__empty">\u0110ang ch\u1EDD k\u1EBFt qu\u1EA3 nh\u1EADp d\u1EEF li\u1EC7u.</div>
          }
        }
      }
    </div>
  `, styles: ["/* angular:styles/component:css;7265a5c39d1a8b1b5654e19e44b3816403ab2c655455f83406ea3d8df5f4b40a;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts */\n.vnr-im {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.vnr-im__up:focus-within {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 2px;\n}\n.vnr-im__up {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 22px 16px;\n  text-align: center;\n  cursor: pointer;\n  background: var(--bg-surface-subtle);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--radius-sm, 6px);\n}\n.vnr-im__up:hover {\n  border-color: var(--primary-base);\n}\n.vnr-im__up input {\n  position: absolute;\n  inline-size: 1px;\n  block-size: 1px;\n  opacity: 0;\n}\n.vnr-im__up .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__up .h {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.vnr-im__up .fn {\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n  border-radius: var(--radius-xs, 4px);\n  padding: 3px 10px;\n}\n.vnr-im__hd {\n  display: flex;\n  align-items: baseline;\n  gap: var(--space-2, 8px);\n}\n.vnr-im__hd .t {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__hd .m {\n  margin-inline-start: auto;\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__mp {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.vnr-im__row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: var(--space-2-5, 10px);\n  align-items: center;\n  padding: 7px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-im__row.is-miss {\n  border-color: var(--warning-border);\n  background: var(--warning-bg);\n}\n.vnr-im__row .fl {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-inline-size: 0;\n}\n.vnr-im__row .nm {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.vnr-im__row .rq {\n  color: var(--error-base);\n  margin-inline-start: 2px;\n}\n.vnr-im__row .ms {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--warning-base);\n}\n.vnr-im__sel {\n  inline-size: 100%;\n  block-size: 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xs, 4px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  padding: 0 6px;\n}\n.vnr-im__sel:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n.vnr-im__sel:focus {\n  outline: none;\n  border-color: var(--primary-base);\n}\n.vnr-im__tbw {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  overflow: hidden;\n}\n.vnr-im__tb {\n  inline-size: 100%;\n  border-collapse: collapse;\n}\n.vnr-im__tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: start;\n  padding: 7px 10px;\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-im__tb td {\n  padding: 6px 10px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  border-block-end: 1px solid var(--border-soft);\n}\n.vnr-im__tb .no {\n  inline-size: 56px;\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__tb tr[data-err=yes] td {\n  background: var(--error-bg);\n  border-block-end-color: var(--error-bg);\n}\n.vnr-im__tb tr.er td {\n  background: var(--error-bg);\n  color: var(--error-base);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding-block-start: 0;\n}\n.vnr-im__cards {\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n}\n.vnr-im__card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  padding: 8px 10px;\n}\n.vnr-im__card[data-err=yes] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-im__card .no {\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__card .bd {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  margin-block-start: 4px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.vnr-im__card .bd b {\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__card .er {\n  margin-block-start: 5px;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--error-base);\n}\n.vnr-im__rs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2-5, 10px);\n}\n.vnr-im__rs > div {\n  flex: 1 1 140px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 10px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.vnr-im__rs .k {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-sub);\n}\n.vnr-im__rs .v {\n  font-size: var(--fs-14, 14px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.vnr-im__rs > div[data-t=ok] {\n  background: var(--success-bg);\n  border-color: var(--success-base);\n}\n.vnr-im__rs > div[data-t=ok] .v {\n  color: var(--success-base);\n}\n.vnr-im__rs > div[data-t=failed] {\n  background: var(--error-bg);\n  border-color: var(--error-base);\n}\n.vnr-im__rs > div[data-t=failed] .v {\n  color: var(--error-base);\n}\n.vnr-im__ft {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n}\n.vnr-im__ft .sp {\n  margin-inline-start: auto;\n}\n.vnr-im__b {\n  border: 1px solid var(--border-strong);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  border-radius: var(--radius-sm, 6px);\n  padding: 6px 12px;\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.vnr-im__b:hover:not(:disabled) {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.vnr-im__b:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.vnr-im__b.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary);\n  font-weight: var(--font-semibold, 600);\n}\n.vnr-im__b.is-primary:hover:not(:disabled) {\n  color: var(--text-on-primary);\n  opacity: .92;\n}\n.vnr-im__empty {\n  text-align: center;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n  padding: 14px;\n}\n@container vnrform (max-width: 559px) {\n  .vnr-im__tbw {\n    display: none;\n  }\n  .vnr-im__cards {\n    display: flex;\n  }\n  .vnr-im__row {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 4px;\n  }\n  .vnr-im__ft .vnr-im__b {\n    flex: 1 1 100%;\n  }\n  .vnr-im__ft .sp {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_form-ds-bulk.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }, { type: Output, args: ["stepChange"] }], fileName: [{ type: Input, args: [{ isSignal: true, alias: "fileName", required: false }] }], sourceColumns: [{ type: Input, args: [{ isSignal: true, alias: "sourceColumns", required: false }] }], targetFields: [{ type: Input, args: [{ isSignal: true, alias: "targetFields", required: true }] }], mapping: [{ type: Input, args: [{ isSignal: true, alias: "mapping", required: false }] }, { type: Output, args: ["mappingChange"] }], previewRows: [{ type: Input, args: [{ isSignal: true, alias: "previewRows", required: false }] }], progress: [{ type: Input, args: [{ isSignal: true, alias: "progress", required: false }] }], result: [{ type: Input, args: [{ isSignal: true, alias: "result", required: false }] }], fileSelect: [{ type: Output, args: ["fileSelect"] }], mappingChange: [{ type: Output, args: ["mappingChange"] }], runImport: [{ type: Output, args: ["runImport"] }], downloadErrors: [{ type: Output, args: ["downloadErrors"] }], back: [{ type: Output, args: ["back"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VnrImportMapper, { className: "VnrImportMapper", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_form-ds-bulk.ts", lineNumber: 609 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/bulk-import-page.ts
function SgTemplateBulkImport_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateBulkImport_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, SgTemplateBulkImport_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateBulkImport_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateBulkImport_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 2)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, SgTemplateBulkImport_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "a", 7)(6, "hrm-button", 8);
    \u0275\u0275element(7, "tabler-icon", 9);
    \u0275\u0275text(8, " M\u1EDF to\xE0n m\xE0n h\xECnh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275element(10, "sg-use", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "sg-do");
    \u0275\u0275text(13, "N\xEAu L\xDD DO b\u1EB1ng ch\u1EEF cho t\u1EEBng \u0111\u1ED1i t\u01B0\u1EE3ng kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n, \u0111\u1EEBng ch\u1EC9 l\xE0m m\u1EDD d\xF2ng.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "sg-do");
    \u0275\u0275text(15, 'B\u1EAFt bu\u1ED9c xem tr\u01B0\u1EDBc "tr\u01B0\u1EDBc \u2192 sau" tr\u01B0\u1EDBc khi \xE1p d\u1EE5ng \u2014 thao t\xE1c h\xE0ng lo\u1EA1t r\u1EA5t kh\xF3 ho\xE0n t\xE1c.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "sg-do");
    \u0275\u0275text(17, "Coi k\u1EBFt qu\u1EA3 l\xE0 TH\xC0NH C\xD4NG M\u1ED8T PH\u1EA6N: n\xF3i r\xF5 bao nhi\xEAu d\xF2ng tr\u01B0\u1EE3t v\xE0 tr\u01B0\u1EE3t v\xEC sao.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "sg-do");
    \u0275\u0275text(19, "\u0110\u1EB7t c\xF4ng th\u1EE9c (l\u01B0\u01A1ng m\u1EDBi, t\u1ED5ng m\u1EE9c t\u0103ng, validate d\xF2ng t\u1EC7p) \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5; shell ch\u1EC9 hi\u1EC3n th\u1ECB.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "sg-dont");
    \u0275\u0275text(21, "\u0110\u1EEBng t\u1EF1 gh\xE9p c\u1ED9t TI\u1EC0N trong b\u01B0\u1EDBc gh\xE9p c\u1ED9t \u2014 gh\xE9p nh\u1EA7m c\u1ED9t l\u01B0\u01A1ng c\u0169 l\xE0 sai c\u1EA3 \u0111\u1EE3t.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "sg-dont");
    \u0275\u0275text(23, '\u0110\u1EEBng nh\u1EA3y th\u1EB3ng t\u1EEB ch\u1ECDn t\u1EC7p sang "\u0111\xE3 nh\u1EADp xong" \u2014 b\u1ECF b\u01B0\u1EDBc ki\u1EC3m tra l\xE0 m\u1EA5t kh\u1EA3 n\u0103ng s\u1EEDa tr\u01B0\u1EDBc khi ghi.');
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.maximize)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("when", ctx_r1.when);
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 30);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, "T\xE0i kho\u1EA3n doanh nghi\u1EC7p");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.chevDown)("size", 16);
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.selected().length + " \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE3 ch\u1ECDn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selected().length);
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "t\u1EC7p");
    \u0275\u0275elementEnd();
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "vnr-form-section", 33)(2, "vnr-form-grid")(3, "vnr-form-field", 34)(4, "hrm-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_hrm_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.batch.round, $event) || (ctx_r1.batch.round = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "vnr-form-field", 36)(6, "hrm-input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_hrm_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.batch.effectiveDate, $event) || (ctx_r1.batch.effectiveDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "vnr-form-field", 38)(8, "hrm-input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_hrm_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.batch.owner, $event) || (ctx_r1.batch.owner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "vnr-form-field", 40)(10, "hrm-textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_hrm_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.batch.reason, $event) || (ctx_r1.batch.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "vnr-form-section", 42)(12, "vnr-bulk-target-panel", 43);
    \u0275\u0275twoWayListener("selectedIdsChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_bulk_target_panel_selectedIdsChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selected, $event) || (ctx_r1.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_bulk_target_panel_selectionChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectionChange($event));
    })("preview", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_bulk_target_panel_preview_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPreview());
    })("apply", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_bulk_target_panel_apply_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApply($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "vnr-form-section", 44)(14, "vnr-editable-form-table", 45);
    \u0275\u0275listener("cellChange", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_editable_form_table_cellChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCell($event));
    })("addRow", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_editable_form_table_addRow_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAddRow());
    })("removeRow", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_editable_form_table_removeRow_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRemoveRow($event));
    })("duplicateRow", function SgTemplateBulkImport_ng_template_2_Conditional_25_Template_vnr_editable_form_table_duplicateRow_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDuplicateRow($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 46);
    \u0275\u0275text(16, " N\xFAt ");
    \u0275\u0275elementStart(17, "b");
    \u0275\u0275text(18, "Nh\xE2n b\u1EA3n");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " tr\xEAn m\u1ED9t d\xF2ng s\u1EBD \xE1p m\u1EE9c t\u0103ng c\u1EE7a d\xF2ng \u0111\xF3 cho t\u1EA5t c\u1EA3 d\xF2ng c\xF2n l\u1EA1i \u2014 l\u1ED1i t\u1EAFt th\u01B0\u1EDDng d\xF9ng khi c\u1EA3 \u0111\u1EE3t t\u0103ng c\xF9ng m\u1ED9t m\u1EE9c. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.roundMeta());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.batch.round);
    \u0275\u0275property("options", ctx_r1.roundOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.batch.effectiveDate);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.batch.owner);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.batch.reason);
    \u0275\u0275property("minRows", 2)("maxRows", 4);
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.selectMeta());
    \u0275\u0275advance();
    \u0275\u0275property("targets", ctx_r1.targets);
    \u0275\u0275twoWayProperty("selectedIds", ctx_r1.selected);
    \u0275\u0275property("previewRows", ctx_r1.previewRows())("result", ctx_r1.bulkResult());
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.tableMeta());
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r1.tableColumns)("rows", ctx_r1.tableRows())("totals", ctx_r1.tableTotals());
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function SgTemplateBulkImport_ng_template_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "vnr-form-section", 47)(2, "vnr-import-mapper", 48);
    \u0275\u0275twoWayListener("stepChange", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_stepChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.importStep, $event) || (ctx_r1.importStep = $event);
      return \u0275\u0275resetView($event);
    })("mappingChange", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_mappingChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.importMapping, $event) || (ctx_r1.importMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("fileSelect", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_fileSelect_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    })("mappingChange", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_mappingChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMappingChange($event));
    })("runImport", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_runImport_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRunImport());
    })("downloadErrors", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_downloadErrors_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDownloadErrors());
    })("back", function SgTemplateBulkImport_ng_template_2_Conditional_26_Template_vnr_import_mapper_back_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImportBack());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SgTemplateBulkImport_ng_template_2_Conditional_26_Conditional_3_Template, 2, 1, "p", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.importMeta());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("step", ctx_r1.importStep);
    \u0275\u0275property("fileName", ctx_r1.importFileName())("sourceColumns", ctx_r1.sourceColumns)("targetFields", ctx_r1.targetFields);
    \u0275\u0275twoWayProperty("mapping", ctx_r1.importMapping);
    \u0275\u0275property("previewRows", ctx_r1.importPreview())("progress", ctx_r1.importProgress())("result", ctx_r1.importResult());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r1.importNotice()) ? 3 : -1, tmp_12_0);
  }
}
function SgTemplateBulkImport_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 13)(1, "hrm-side-nav", 14);
    \u0275\u0275twoWayListener("collapsedChange", function SgTemplateBulkImport_ng_template_2_Template_hrm_side_nav_collapsedChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collapsedModel, $event) || (ctx_r1.collapsedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275element(3, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16)(5, "span", 17);
    \u0275\u0275element(6, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgTemplateBulkImport_ng_template_2_Conditional_7_Template, 6, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "header", 19)(10, "div")(11, "h1", 20);
    \u0275\u0275text(12, "\u0110i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng h\xE0ng lo\u1EA1t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 21);
    \u0275\u0275text(14, " \xC1p m\u1ED9t m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh cho nhi\u1EC1u nh\xE2n vi\xEAn trong c\xF9ng \u0111\u1EE3t. Nh\u1EADp tay theo b\u1EA3ng khi s\u1ED1 l\u01B0\u1EE3ng \xEDt, ho\u1EB7c nh\u1EADp t\u1EEB t\u1EC7p Excel khi ph\xF2ng nh\xE2n s\u1EF1 \u0111\xE3 t\u1ED5ng h\u1EE3p s\u1EB5n. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 22);
    \u0275\u0275listener("keydown", function SgTemplateBulkImport_ng_template_2_Template_div_keydown_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabKey($event));
    });
    \u0275\u0275elementStart(16, "button", 23);
    \u0275\u0275listener("click", function SgTemplateBulkImport_ng_template_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("select"));
    });
    \u0275\u0275element(17, "tabler-icon", 9);
    \u0275\u0275text(18, " Ch\u1ECDn & \xE1p d\u1EE5ng ");
    \u0275\u0275conditionalCreate(19, SgTemplateBulkImport_ng_template_2_Conditional_19_Template, 2, 2, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function SgTemplateBulkImport_ng_template_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("import"));
    });
    \u0275\u0275element(21, "tabler-icon", 9);
    \u0275\u0275text(22, " Import t\u1EEB file ");
    \u0275\u0275conditionalCreate(23, SgTemplateBulkImport_ng_template_2_Conditional_23_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "vnr-form-shell");
    \u0275\u0275conditionalCreate(25, SgTemplateBulkImport_ng_template_2_Conditional_25_Template, 20, 17, "div", 27)(26, SgTemplateBulkImport_ng_template_2_Conditional_26_Template, 4, 10, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("sections", ctx_r1.navSections)("caretIcon", ctx_r1.caret)("logoSrc", ctx_r1.logo)("logoMarkSrc", ctx_r1.logoMark)("toggleIcon", ctx_r1.sbCollapse)("expandIcon", ctx_r1.sbExpand);
    \u0275\u0275twoWayProperty("collapsed", ctx_r1.collapsedModel);
    \u0275\u0275property("user", ctx_r1.navUser)("switchIcon", ctx_r1.gear);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.bell)("size", 20);
    \u0275\u0275advance();
    \u0275\u0275classProp("sn-acct--mini", ctx_r1.collapsed());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.building)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.collapsed() ? 7 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-on", ctx_r1.tab() === "select");
    \u0275\u0275attribute("aria-selected", ctx_r1.tab() === "select")("tabindex", ctx_r1.tab() === "select" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.listIcon)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selected().length ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.tab() === "import");
    \u0275\u0275attribute("aria-selected", ctx_r1.tab() === "import")("tabindex", ctx_r1.tab() === "import" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.importIcon)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importFileName() ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.tab() === "select" ? 25 : 26);
  }
}
var EMPLOYEES = [
  { id: "e1", code: "NV-0107", name: "Nguy\u1EC5n Thu H\xE0", dept: "K\u1EF9 thu\u1EADt \xB7 K\u1EF9 s\u01B0 tr\u01B0\u1EDFng", salary: 245e5, eligible: true },
  { id: "e2", code: "NV-0112", name: "Tr\u1EA7n Minh Khoa", dept: "K\u1EF9 thu\u1EADt \xB7 Chuy\xEAn vi\xEAn", salary: 182e5, eligible: true },
  { id: "e3", code: "NV-0134", name: "V\u0169 H\u1EA3i Y\u1EBFn", dept: "D\u1EF1 \xE1n \xB7 Tr\u1EE3 l\xFD d\u1EF1 \xE1n", salary: 148e5, eligible: true },
  { id: "e4", code: "NV-0141", name: "L\xEA Thu H\u01B0\u01A1ng", dept: "Kinh doanh \xB7 Chuy\xEAn vi\xEAn", salary: 164e5, eligible: false, reason: "\u0110ang th\u1EED vi\u1EC7c \u2014 ch\u01B0a \u0111\u1EE7 2 th\xE1ng ch\xEDnh th\u1EE9c" },
  { id: "e5", code: "NV-0150", name: "Ph\u1EA1m Qu\u1ED1c Duy", dept: "V\u1EADn h\xE0nh \xB7 T\u1ED5 tr\u01B0\u1EDFng", salary: 197e5, eligible: true },
  { id: "e6", code: "NV-0158", name: "\u0110\u1ED7 Kim Ng\xE2n", dept: "Nh\xE2n s\u1EF1 \xB7 Chuy\xEAn vi\xEAn", salary: 153e5, eligible: false, reason: "\u0110\xE3 ngh\u1EC9 vi\u1EC7c t\u1EEB 30/06/2026" }
];
var EMP_BY_ID = new Map(EMPLOYEES.map((e) => [e.id, e]));
var RAISE_WARN_RATIO = 0.3;
var NUMBER_FORMAT = new Intl.NumberFormat("vi-VN");
function money(v) {
  return NUMBER_FORMAT.format(v);
}
function raiseOf(raises, id) {
  const v = raises[id];
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}
function buildTargets(emps) {
  return emps.map((e) => ({
    id: e.id,
    name: e.name,
    sub: `${e.code} \xB7 ${e.dept} \xB7 ${money(e.salary)} \u20AB`,
    eligible: e.eligible,
    reason: e.reason ?? null
  }));
}
function rowError(e, raise) {
  if (raise < 0)
    return "M\u1EE9c t\u0103ng ph\u1EA3i l\xE0 s\u1ED1 d\u01B0\u01A1ng \u2014 \u0111\u1EC3 tr\u1ED1ng n\u1EBFu ch\u01B0a \u0111i\u1EC1u ch\u1EC9nh.";
  if (raise > e.salary * RAISE_WARN_RATIO) {
    return `M\u1EE9c t\u0103ng v\u01B0\u1EE3t ${RAISE_WARN_RATIO * 100}% l\u01B0\u01A1ng hi\u1EC7n t\u1EA1i (${money(Math.round(e.salary * RAISE_WARN_RATIO))} \u20AB) \u2014 c\u1EA7n T\u1ED5ng gi\xE1m \u0111\u1ED1c ph\xEA duy\u1EC7t.`;
  }
  return null;
}
function buildTableRows(ids, raises) {
  const out = [];
  for (const id of ids) {
    const e = EMP_BY_ID.get(id);
    if (!e)
      continue;
    const raise = raiseOf(raises, id);
    out.push({
      id: e.id,
      cells: {
        emp: `${e.name} (${e.code})`,
        current: e.salary,
        raise: raises[id] ?? null,
        next: e.salary + raise
      },
      error: rowError(e, raise)
    });
  }
  return out;
}
function sumRaise(rows) {
  const total = rows.reduce((s, r) => {
    const v = r.cells["raise"];
    return s + (typeof v === "number" && Number.isFinite(v) ? v : 0);
  }, 0);
  return [{ key: "raise", value: total }];
}
function buildPreviewRows(ids, raises) {
  const out = [];
  for (const id of ids) {
    const e = EMP_BY_ID.get(id);
    if (!e)
      continue;
    const raise = raiseOf(raises, id);
    out.push({
      id: e.id,
      label: `${e.name} \xB7 ${e.code}`,
      before: `${money(e.salary)} \u20AB`,
      after: `${money(e.salary + raise)} \u20AB`,
      changed: raise > 0
    });
  }
  return out;
}
function applyAdjustment(ids, raises) {
  const picked = ids.map((id) => EMP_BY_ID.get(id)).filter((e) => !!e);
  const ok = picked.filter((e) => e.eligible && raiseOf(raises, e.id) > 0).length;
  const noRaise = picked.filter((e) => e.eligible && raiseOf(raises, e.id) <= 0).length;
  const blocked = EMPLOYEES.filter((e) => !e.eligible);
  const notes = [];
  if (blocked.length) {
    notes.push(`${blocked.length} nh\xE2n vi\xEAn kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n: ` + blocked.map((e) => `${e.name} (${e.reason})`).join("; "));
  }
  if (noRaise)
    notes.push(`${noRaise} d\xF2ng ch\u01B0a nh\u1EADp m\u1EE9c t\u0103ng n\xEAn b\u1ECB b\u1ECF qua.`);
  return {
    ok,
    failed: noRaise + blocked.length,
    failedNote: notes.length ? notes.join(" \xB7 ") : null
  };
}
var IMPORT_SOURCE_COLUMNS = ["M\xE3 NV", "H\u1ECD t\xEAn", "L\u01B0\u01A1ng m\u1EDBi", "Ghi ch\xFA"];
var IMPORT_TARGET_FIELDS = [
  { key: "code", label: "M\xE3 nh\xE2n vi\xEAn", required: true },
  { key: "name", label: "H\u1ECD t\xEAn" },
  { key: "newSalary", label: "L\u01B0\u01A1ng m\u1EDBi", required: true },
  { key: "effectiveDate", label: "Ng\xE0y hi\u1EC7u l\u1EF1c" },
  { key: "note", label: "Ghi ch\xFA" }
];
var IMPORT_FILE_ROWS = [
  { "M\xE3 NV": "NV-0107", "H\u1ECD t\xEAn": "Nguy\u1EC5n Thu H\xE0", "L\u01B0\u01A1ng m\u1EDBi": "26.500.000", "Ghi ch\xFA": "\u0110\u1EA1t KPI qu\xFD 2" },
  { "M\xE3 NV": "NV-0112", "H\u1ECD t\xEAn": "Tr\u1EA7n Minh Khoa", "L\u01B0\u01A1ng m\u1EDBi": "19.400.000", "Ghi ch\xFA": "" },
  { "M\xE3 NV": "NV-0134", "H\u1ECD t\xEAn": "V\u0169 H\u1EA3i Y\u1EBFn", "L\u01B0\u01A1ng m\u1EDBi": "", "Ghi ch\xFA": "Ch\u1EDD x\xE1c nh\u1EADn t\u1EEB tr\u01B0\u1EDFng d\u1EF1 \xE1n" },
  { "M\xE3 NV": "NV-9999", "H\u1ECD t\xEAn": "Ho\xE0ng Anh Tu\u1EA5n", "L\u01B0\u01A1ng m\u1EDBi": "17.000.000", "Ghi ch\xFA": "Nh\xE2n vi\xEAn m\u1EDBi" },
  { "M\xE3 NV": "NV-0150", "H\u1ECD t\xEAn": "Ph\u1EA1m Qu\u1ED1c Duy", "L\u01B0\u01A1ng m\u1EDBi": "20tr9", "Ghi ch\xFA": "T\u0103ng theo tay ngh\u1EC1" }
];
var COLUMN_HINTS = {
  code: ["M\xE3 NV", "M\xE3 nh\xE2n vi\xEAn"],
  name: ["H\u1ECD t\xEAn", "T\xEAn nh\xE2n vi\xEAn"],
  newSalary: ["L\u01B0\u01A1ng m\u1EDBi", "M\u1EE9c l\u01B0\u01A1ng m\u1EDBi"],
  effectiveDate: ["Ng\xE0y hi\u1EC7u l\u1EF1c", "Hi\u1EC7u l\u1EF1c t\u1EEB"],
  note: ["Ghi ch\xFA", "Di\u1EC5n gi\u1EA3i"]
};
var MANUAL_CONFIRM_FIELDS = ["newSalary"];
function autoMap(columns, fields) {
  const map = {};
  for (const f of fields) {
    if (MANUAL_CONFIRM_FIELDS.includes(f.key)) {
      map[f.key] = null;
      continue;
    }
    const hints = COLUMN_HINTS[f.key] ?? [];
    map[f.key] = columns.find((c) => hints.includes(c)) ?? null;
  }
  return map;
}
function parseMoney(text) {
  const digits = text.replace(/[.\s]/g, "");
  return /^\d+$/.test(digits) ? Number(digits) : null;
}
function validateImportRow(cells) {
  const code = cells["code"];
  if (!code)
    return "Thi\u1EBFu m\xE3 nh\xE2n vi\xEAn \u2014 ch\u01B0a gh\xE9p c\u1ED9t ho\u1EB7c \xF4 tr\u1ED1ng trong t\u1EC7p.";
  if (!EMPLOYEES.some((e) => e.code === code)) {
    return `Kh\xF4ng t\xECm th\u1EA5y m\xE3 nh\xE2n vi\xEAn ${code} trong h\u1EC7 th\u1ED1ng.`;
  }
  const salary = cells["newSalary"];
  if (!salary)
    return "Thi\u1EBFu l\u01B0\u01A1ng m\u1EDBi \u2014 ki\u1EC3m tra l\u1EA1i c\u1ED9t \u0111\xE3 gh\xE9p \u1EDF b\u01B0\u1EDBc tr\u01B0\u1EDBc.";
  if (parseMoney(salary) === null)
    return `Gi\xE1 tr\u1ECB l\u01B0\u01A1ng m\u1EDBi "${salary}" kh\xF4ng ph\u1EA3i s\u1ED1 h\u1EE3p l\u1EC7.`;
  return null;
}
function buildImportPreview(mapping) {
  return IMPORT_FILE_ROWS.map((raw, i) => {
    const cells = {};
    for (const f of IMPORT_TARGET_FIELDS) {
      const col = mapping[f.key];
      cells[f.key] = col ? raw[col] || null : null;
    }
    return { rowNo: i + 1, cells, error: validateImportRow(cells) };
  });
}
function runImportBatch(rows) {
  const total = rows.length;
  const failed = rows.filter((r) => !!r.error).length;
  return { total, ok: total - failed, failed };
}
var SgTemplateBulkImport = class _SgTemplateBulkImport {
  constructor() {
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.tab = signal("select", ...ngDevMode ? [{ debugName: "tab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.targets = buildTargets(EMPLOYEES);
    this.selected = signal(["e1", "e2"], ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.raises = signal({ e1: 2e6, e2: 15e5 }, ...ngDevMode ? [{ debugName: "raises" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bulkResult = signal(null, ...ngDevMode ? [{ debugName: "bulkResult" }] : (
      /* istanbul ignore next */
      []
    ));
    this.batch = {
      round: "q3-2026",
      effectiveDate: "01/09/2026",
      owner: "\u0110\u1EB7ng Anh",
      reason: ""
    };
    this.roundOptions = [
      { label: "\u0110i\u1EC1u ch\u1EC9nh \u0111\u1ECBnh k\u1EF3 qu\xFD 3/2026", value: "q3-2026" },
      { label: "\u0110i\u1EC1u ch\u1EC9nh theo k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1", value: "review" },
      { label: "\u0110i\u1EC1u ch\u1EC9nh theo l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u v\xF9ng", value: "minwage" }
    ];
    this.tableColumns = [
      { key: "emp", label: "Nh\xE2n vi\xEAn", type: "text", readonly: true, width: 260 },
      { key: "current", label: "L\u01B0\u01A1ng hi\u1EC7n t\u1EA1i", type: "number", align: "end", readonly: true, width: 160 },
      { key: "raise", label: "M\u1EE9c t\u0103ng", type: "number", align: "end", width: 150 },
      { key: "next", label: "L\u01B0\u01A1ng m\u1EDBi", type: "number", align: "end", readonly: true, width: 160 }
    ];
    this.tableRows = computed(() => buildTableRows(this.selected(), this.raises()), ...ngDevMode ? [{ debugName: "tableRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableTotals = computed(() => sumRaise(this.tableRows()), ...ngDevMode ? [{ debugName: "tableTotals" }] : (
      /* istanbul ignore next */
      []
    ));
    this.previewRows = computed(() => buildPreviewRows(this.selected(), this.raises()), ...ngDevMode ? [{ debugName: "previewRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sourceColumns = IMPORT_SOURCE_COLUMNS;
    this.targetFields = IMPORT_TARGET_FIELDS;
    this.importStep = signal("upload", ...ngDevMode ? [{ debugName: "importStep" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importFileName = signal(null, ...ngDevMode ? [{ debugName: "importFileName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importMapping = signal({}, ...ngDevMode ? [{ debugName: "importMapping" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importProgress = signal(null, ...ngDevMode ? [{ debugName: "importProgress" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importResult = signal(null, ...ngDevMode ? [{ debugName: "importResult" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importNotice = signal(null, ...ngDevMode ? [{ debugName: "importNotice" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importPreview = computed(() => buildImportPreview(this.importMapping()), ...ngDevMode ? [{ debugName: "importPreview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.navSections = DEFAULT_NAV_SECTIONS;
    this.collapsed = signal(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.caret = ChevronRight;
    this.maximize = ArrowsMaximize;
    this.chevDown = ChevronDown;
    this.bell = Bell;
    this.building = Building;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.gear = Settings;
    this.listIcon = ListCheck;
    this.importIcon = FileImport;
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.navUser = { name: "\u0110\u1EB7ng Anh", email: "danganh@vnr.vn" };
    this.when = [
      "\xC1p m\u1ED9t thay \u0111\u1ED5i cho nhi\u1EC1u b\u1EA3n ghi trong c\xF9ng m\u1ED9t \u0111\u1EE3t",
      "D\u1EEF li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c t\u1ED5ng h\u1EE3p s\u1EB5n trong t\u1EC7p Excel v\xE0 c\u1EA7n \u0111\u01B0a v\xE0o h\u1EC7 th\u1ED1ng",
      "Thao t\xE1c kh\xF3 ho\xE0n t\xE1c, c\u1EA7n xem tr\u01B0\u1EDBc v\xE0 ch\u1EA5p nh\u1EADn th\xE0nh c\xF4ng m\u1ED9t ph\u1EA7n"
    ];
  }
  /** Đổi lựa chọn ⇒ kết quả cũ không còn đúng với dữ liệu đang hiển thị. */
  onSelectionChange(ids) {
    this.selected.set(ids);
    this.bulkResult.set(null);
  }
  /** Panel bắn khi MỞ khối xem trước. `previewRows` đã là computed nên chỉ cần dọn kết quả cũ
   *  để người dùng không đối chiếu bản xem trước mới với kết quả của lần áp dụng trước. */
  onPreview() {
    this.bulkResult.set(null);
  }
  onApply(ids) {
    this.bulkResult.set(applyAdjustment(ids, this.raises()));
  }
  /** Bảng chỉ báo "ô nào đổi"; giá trị lương mới và dòng tổng do hàm nghiệp vụ tính lại. */
  onCell(c) {
    if (c.key !== "raise")
      return;
    const value = typeof c.value === "number" && Number.isFinite(c.value) ? c.value : null;
    this.raises.set(__spreadProps(__spreadValues({}, this.raises()), { [c.rowId]: value }));
    this.bulkResult.set(null);
  }
  /** Thêm dòng = chọn thêm một nhân viên đủ điều kiện chưa có trong danh sách. */
  onAddRow() {
    const cur = this.selected();
    const next = EMPLOYEES.find((e) => e.eligible && !cur.includes(e.id));
    if (!next)
      return;
    this.selected.set([...cur, next.id]);
    this.bulkResult.set(null);
  }
  /** Xoá dòng = bỏ chọn nhân viên đó và xoá luôn mức tăng đã gõ. */
  onRemoveRow(id) {
    this.selected.set(this.selected().filter((x) => x !== id));
    const rest = __spreadValues({}, this.raises());
    delete rest[id];
    this.raises.set(rest);
    this.bulkResult.set(null);
  }
  /** Nhân bản = áp mức tăng của dòng này cho mọi dòng còn lại (cả đợt cùng một mức). */
  onDuplicateRow(id) {
    const value = this.raises()[id] ?? null;
    const next = __spreadValues({}, this.raises());
    for (const target of this.selected())
      next[target] = value;
    this.raises.set(next);
    this.bulkResult.set(null);
  }
  roundMeta() {
    const label = this.roundOptions.find((o) => o.value === this.batch.round)?.label;
    return label ? `${label} \xB7 hi\u1EC7u l\u1EF1c ${this.batch.effectiveDate || "ch\u01B0a \u0111\u1EB7t"}` : "ch\u01B0a ch\u1ECDn \u0111\u1EE3t";
  }
  selectMeta() {
    const n = this.selected().length;
    const blocked = EMPLOYEES.filter((e) => !e.eligible).length;
    return `${n}/${EMPLOYEES.length} nh\xE2n vi\xEAn \xB7 ${blocked} kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n`;
  }
  tableMeta() {
    const total = this.tableTotals()[0]?.value;
    const sum = typeof total === "number" ? total : 0;
    const bad = this.tableRows().filter((r) => !!r.error).length;
    const base = `${money(sum)} \u20AB t\u1ED5ng m\u1EE9c t\u0103ng`;
    return bad ? `${base} \xB7 ${bad} d\xF2ng c\u1EA7n xem l\u1EA1i` : base;
  }
  /** Mapper chỉ chuyển tiếp tệp; việc đọc tệp và gợi ý ghép cột là của tầng nghiệp vụ. */
  onFileSelect(file) {
    if (!file) {
      this.importFileName.set(null);
      this.importMapping.set({});
      this.importResult.set(null);
      this.importProgress.set(null);
      this.importNotice.set(null);
      this.importStep.set("upload");
      return;
    }
    this.importFileName.set(file.name);
    this.importMapping.set(autoMap(IMPORT_SOURCE_COLUMNS, IMPORT_TARGET_FIELDS));
    this.importResult.set(null);
    this.importProgress.set(null);
    this.importNotice.set(`\u0110\xE3 \u0111\u1ECDc ${IMPORT_FILE_ROWS.length} d\xF2ng t\u1EEB "${file.name}". C\u1ED9t l\u01B0\u01A1ng ph\u1EA3i t\u1EF1 x\xE1c nh\u1EADn \u0111\u1EC3 tr\xE1nh gh\xE9p nh\u1EA7m l\u01B0\u01A1ng c\u0169.`);
    this.importStep.set("mapping");
  }
  /** Đổi ghép cột ⇒ dữ liệu xem trước đổi ⇒ kết quả của lần nhập trước hết hiệu lực. */
  onMappingChange(c) {
    this.importResult.set(null);
    this.importProgress.set(null);
    const field = IMPORT_TARGET_FIELDS.find((f) => f.key === c.targetKey);
    this.importNotice.set(c.sourceColumn ? `\u0110\xE3 gh\xE9p "${c.sourceColumn}" v\xE0o tr\u01B0\u1EDDng ${field?.label ?? c.targetKey}.` : `\u0110\xE3 b\u1ECF gh\xE9p c\u1ED9t c\u1EE7a tr\u01B0\u1EDDng ${field?.label ?? c.targetKey}.`);
  }
  onRunImport() {
    const rows = this.importPreview();
    this.importResult.set(runImportBatch(rows));
    this.importProgress.set(100);
    this.importNotice.set(null);
    this.importStep.set("result");
  }
  onDownloadErrors() {
    const bad = this.importPreview().filter((r) => !!r.error).length;
    this.importNotice.set(`\u0110\xE3 xu\u1EA5t ${bad} d\xF2ng l\u1ED7i ra t\u1EC7p "dong-loi-dieu-chinh-luong.xlsx" \u2014 s\u1EEDa r\u1ED3i nh\u1EADp l\u1EA1i ph\u1EA7n c\xF2n thi\u1EBFu.`);
  }
  /** Mapper tự lùi bước rồi bắn `back`; trang dọn kết quả cũ khi đã rời bước Kết quả. */
  onImportBack() {
    if (this.importStep() !== "result") {
      this.importResult.set(null);
      this.importProgress.set(null);
    }
    this.importNotice.set(null);
  }
  importMeta() {
    const name = this.importFileName();
    if (!name)
      return "ch\u01B0a ch\u1ECDn t\u1EC7p";
    const bad = this.importPreview().filter((r) => !!r.error).length;
    return `${name} \xB7 ${this.importPreview().length} d\xF2ng \xB7 ${bad} d\xF2ng l\u1ED7i`;
  }
  // ── chrome ─────────────────────────────────────────────────────────────────
  /** ←/→ đổi tab theo chuẩn WAI-ARIA tabs (roving tabindex đã khai ở template). */
  onTabKey(e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight")
      return;
    e.preventDefault();
    this.tab.set(this.tab() === "select" ? "import" : "select");
    const id = this.tab() === "select" ? "bi-tab-select" : "bi-tab-import";
    queueMicrotask(() => document.getElementById(id)?.focus());
  }
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  static {
    this.\u0275fac = function SgTemplateBulkImport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateBulkImport)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateBulkImport, selectors: [["sg-template-bulk-import"]], decls: 4, vars: 1, consts: [["screen", ""], [1, "lp-desktop", "lp-desktop--full"], ["category", "Template", "title", "Nh\u1EADp li\u1EC7u h\xE0ng lo\u1EA1t & Import", "desc", "Template chu\u1EA9n cho thao t\xE1c tr\xEAn NHI\u1EC0U b\u1EA3n ghi c\xF9ng l\xFAc. M\u1ED9t nghi\u1EC7p v\u1EE5, hai \u0111\u01B0\u1EDDng v\xE0o: ch\u1ECDn \u0111\u1ED1i t\u01B0\u1EE3ng r\u1ED3i nh\u1EADp theo b\u1EA3ng, ho\u1EB7c nh\u1EADp t\u1EEB t\u1EC7p Excel qua 4 b\u01B0\u1EDBc gh\xE9p c\u1ED9t. K\u1EBFt qu\u1EA3 lu\xF4n cho ph\xE9p th\xE0nh c\xF4ng m\u1ED9t ph\u1EA7n."], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "lp-desktop"], [1, "lp-full"], ["href", "/preview/bulk-import", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], ["purpose", "\xC1p m\u1ED9t thay \u0111\u1ED5i cho nhi\u1EC1u nh\xE2n vi\xEAn c\xF9ng l\xFAc \u2014 \u0111i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng, g\xE1n ca, th\xEAm ph\u1EE5 c\u1EA5p, chuy\u1EC3n ph\xF2ng ban \u2014 b\u1EB1ng tay ho\u1EB7c t\u1EEB t\u1EC7p.", "behavior", "Tab 'Ch\u1ECDn & \xE1p d\u1EE5ng': ch\u1ECDn nh\xE2n vi\xEAn \u2192 nh\u1EADp m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh theo b\u1EA3ng \u2192 xem tr\u01B0\u1EDBc tr\u01B0\u1EDBc/sau \u2192 \xE1p d\u1EE5ng, k\u1EBFt qu\u1EA3 t\xE1ch th\xE0nh c\xF4ng / th\u1EA5t b\u1EA1i k\xE8m l\xFD do. Tab 'Import t\u1EEB file': ch\u1ECDn t\u1EC7p \u2192 gh\xE9p c\u1ED9t t\u1EC7p v\u1EDBi tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng \u2192 ki\u1EC3m tra t\u1EEBng d\xF2ng \u2192 nh\u1EADp v\xE0 xem k\u1EBFt qu\u1EA3.", "avoid", "\u0110\u1EEBng \u0111\u1EC3 component t\u1EF1 ch\u1EA5m \u0111i\u1EC1u ki\u1EC7n, t\u1EF1 c\u1ED9ng t\u1ED5ng hay t\u1EF1 validate d\xF2ng import \u2014 lu\u1EADt \u0111\u1ED5i theo t\u1EEBng nghi\u1EC7p v\u1EE5, ph\u1EA3i n\u1EB1m \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5.", 3, "when"], ["sgBest", ""], ["contentPad", "none"], ["appSideNav", "", "selectedKey", "payroll", "switchLabel", "C\xE0i \u0111\u1EB7t", 3, "collapsedChange", "sections", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchIcon"], ["snActions", "", "type", "button", "aria-label", "Th\xF4ng b\xE1o", 1, "as-ico"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], [1, "bi-wrap"], [1, "bi-head"], [1, "bi-h1"], [1, "bi-sub"], ["role", "tablist", "aria-label", "C\xE1ch nh\u1EADp d\u1EEF li\u1EC7u", 1, "bi-tabs", 3, "keydown"], ["type", "button", "role", "tab", "id", "bi-tab-select", "aria-controls", "bi-panel-select", 1, "bi-tab", 3, "click"], [1, "cnt"], ["type", "button", "role", "tab", "id", "bi-tab-import", "aria-controls", "bi-panel-import", 1, "bi-tab", 3, "click"], ["aria-label", "\u0110\xE3 ch\u1ECDn t\u1EC7p", 1, "cnt"], ["role", "tabpanel", "id", "bi-panel-select", "aria-labelledby", "bi-tab-select"], ["role", "tabpanel", "id", "bi-panel-import", "aria-labelledby", "bi-tab-import"], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"], ["title", "Th\xF4ng tin \u0111\u1EE3t \u0111i\u1EC1u ch\u1EC9nh", 3, "meta"], ["label", "\u0110\u1EE3t \u0111i\u1EC1u ch\u1EC9nh", "size", "lg", "required", ""], ["name", "round", 3, "ngModelChange", "ngModel", "options"], ["label", "Ng\xE0y hi\u1EC7u l\u1EF1c", "size", "md", "required", "", "hint", "\xC1p d\u1EE5ng cho k\u1EF3 l\u01B0\u01A1ng g\u1EA7n nh\u1EA5t sau ng\xE0y n\xE0y"], ["name", "effectiveDate", "placeholder", "01/09/2026", 3, "ngModelChange", "ngModel"], ["label", "Ng\u01B0\u1EDDi tr\xECnh", "size", "md"], ["name", "owner", 3, "ngModelChange", "ngModel"], ["label", "C\u0103n c\u1EE9 \u0111i\u1EC1u ch\u1EC9nh", "size", "full"], ["name", "reason", "placeholder", "N\xEAu c\u0103n c\u1EE9: bi\xEAn b\u1EA3n h\u1ECDp, k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1, quy\u1EBFt \u0111\u1ECBnh c\u1EE7a ban l\xE3nh \u0111\u1EA1o\u2026", 3, "ngModelChange", "ngModel", "minRows", "maxRows"], ["title", "Ch\u1ECDn nh\xE2n vi\xEAn \xE1p d\u1EE5ng", 3, "meta"], ["applyLabel", "\xC1p d\u1EE5ng \u0111i\u1EC1u ch\u1EC9nh", 3, "selectedIdsChange", "selectionChange", "preview", "apply", "targets", "selectedIds", "previewRows", "result"], ["title", "Nh\u1EADp m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh theo d\xF2ng", 3, "meta"], ["addLabel", "Ch\u1ECDn th\xEAm nh\xE2n vi\xEAn \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n", "totalLabel", "T\u1ED5ng m\u1EE9c t\u0103ng", "emptyText", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn n\xE0o \u2014 ch\u1ECDn \u1EDF kh\u1ED1i ph\xEDa tr\xEAn ho\u1EB7c b\u1EA5m n\xFAt th\xEAm d\xF2ng.", 3, "cellChange", "addRow", "removeRow", "duplicateRow", "columns", "rows", "totals"], [1, "bi-hint"], ["title", "Nh\u1EADp \u0111i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng t\u1EEB t\u1EC7p Excel", 3, "meta"], [3, "stepChange", "mappingChange", "fileSelect", "runImport", "downloadErrors", "back", "step", "fileName", "sourceColumns", "targetFields", "mapping", "previewRows", "progress", "result"], [1, "bi-note"]], template: function SgTemplateBulkImport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateBulkImport_Conditional_0_Template, 2, 1, "div", 1)(1, SgTemplateBulkImport_Conditional_1_Template, 24, 4, "sg-doc", 2);
        \u0275\u0275template(2, SgTemplateBulkImport_ng_template_2_Template, 27, 31, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.preview ? 0 : 1);
      }
    }, dependencies: [
      NgTemplateOutlet,
      FormsModule,
      NgControlStatus,
      NgModel,
      TablerIconComponent,
      HrmAppShell,
      HrmSideNav,
      HrmButton,
      HrmInput,
      HrmSelect,
      HrmTextarea,
      VnrFormShell,
      VnrFormGrid,
      VnrFormSection,
      VnrFormField,
      VnrBulkTargetPanel,
      VnrImportMapper,
      VnrEditableFormTable,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], styles: ["\n.lp-desktop[_ngcontent-%COMP%] {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content {\n  padding: 0;\n}\n.lp-full[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.bi-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 0;\n  overflow: auto;\n  padding: 20px 24px 32px;\n}\n.bi-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4, 16px);\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.bi-h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-20, 20px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: -.01em;\n  color: var(--text-strong);\n}\n.bi-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  margin-top: 3px;\n  max-width: 720px;\n  line-height: 1.55;\n}\n.bi-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-1, 4px);\n  border-bottom: 1px solid var(--border-sub);\n}\n.bi-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: -1px;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  border-start-start-radius: var(--radius-sm, 6px);\n  border-start-end-radius: var(--radius-sm, 6px);\n}\n.bi-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.bi-tab.is-on[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  border-bottom-color: var(--primary-base);\n  font-weight: var(--font-semibold, 600);\n}\n.bi-tab[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%] {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding: 1px 6px;\n  border-radius: var(--radius-sm, 6px);\n  background: var(--faded-bg);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.bi-tab.is-on[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.bi-hint[_ngcontent-%COMP%] {\n  margin-top: var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.bi-hint[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--text-body);\n  font-weight: var(--font-semibold, 600);\n}\n.bi-note[_ngcontent-%COMP%] {\n  margin-top: var(--space-2-5, 10px);\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  border: 1px solid var(--border-sub);\n  border-inline-start: 3px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--primary-bg-subtle);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=bulk-import-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateBulkImport, [{
    type: Component,
    args: [{ selector: "sg-template-bulk-import", imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      HrmAppShell,
      HrmSideNav,
      HrmButton,
      HrmInput,
      HrmSelect,
      HrmTextarea,
      VnrFormShell,
      VnrFormGrid,
      VnrFormSection,
      VnrFormField,
      VnrBulkTargetPanel,
      VnrImportMapper,
      VnrEditableFormTable,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], template: `
    @if (preview) {
      <div class="lp-desktop lp-desktop--full"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
    <sg-doc category="Template" title="Nh\u1EADp li\u1EC7u h\xE0ng lo\u1EA1t &amp; Import"
      desc="Template chu\u1EA9n cho thao t\xE1c tr\xEAn NHI\u1EC0U b\u1EA3n ghi c\xF9ng l\xFAc. M\u1ED9t nghi\u1EC7p v\u1EE5, hai \u0111\u01B0\u1EDDng v\xE0o: ch\u1ECDn \u0111\u1ED1i t\u01B0\u1EE3ng r\u1ED3i nh\u1EADp theo b\u1EA3ng, ho\u1EB7c nh\u1EADp t\u1EEB t\u1EC7p Excel qua 4 b\u01B0\u1EDBc gh\xE9p c\u1ED9t. K\u1EBFt qu\u1EA3 lu\xF4n cho ph\xE9p th\xE0nh c\xF4ng m\u1ED9t ph\u1EA7n.">
      <div sgOverview>
        <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
        <div class="lp-full">
          <a class="lp-full-link" href="/preview/bulk-import" target="_blank" rel="noopener">
            <hrm-button variant="default"><tabler-icon [icon]="maximize" [size]="16" /> M\u1EDF to\xE0n m\xE0n h\xECnh</hrm-button>
          </a>
        </div>
      </div>
      <div sgUsage>
        <sg-use purpose="\xC1p m\u1ED9t thay \u0111\u1ED5i cho nhi\u1EC1u nh\xE2n vi\xEAn c\xF9ng l\xFAc \u2014 \u0111i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng, g\xE1n ca, th\xEAm ph\u1EE5 c\u1EA5p, chuy\u1EC3n ph\xF2ng ban \u2014 b\u1EB1ng tay ho\u1EB7c t\u1EEB t\u1EC7p."
          [when]="when"
          behavior="Tab 'Ch\u1ECDn & \xE1p d\u1EE5ng': ch\u1ECDn nh\xE2n vi\xEAn \u2192 nh\u1EADp m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh theo b\u1EA3ng \u2192 xem tr\u01B0\u1EDBc tr\u01B0\u1EDBc/sau \u2192 \xE1p d\u1EE5ng, k\u1EBFt qu\u1EA3 t\xE1ch th\xE0nh c\xF4ng / th\u1EA5t b\u1EA1i k\xE8m l\xFD do. Tab 'Import t\u1EEB file': ch\u1ECDn t\u1EC7p \u2192 gh\xE9p c\u1ED9t t\u1EC7p v\u1EDBi tr\u01B0\u1EDDng h\u1EC7 th\u1ED1ng \u2192 ki\u1EC3m tra t\u1EEBng d\xF2ng \u2192 nh\u1EADp v\xE0 xem k\u1EBFt qu\u1EA3."
          avoid="\u0110\u1EEBng \u0111\u1EC3 component t\u1EF1 ch\u1EA5m \u0111i\u1EC1u ki\u1EC7n, t\u1EF1 c\u1ED9ng t\u1ED5ng hay t\u1EF1 validate d\xF2ng import \u2014 lu\u1EADt \u0111\u1ED5i theo t\u1EEBng nghi\u1EC7p v\u1EE5, ph\u1EA3i n\u1EB1m \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5." />
      </div>
      <div sgBest>
        <sg-do>N\xEAu L\xDD DO b\u1EB1ng ch\u1EEF cho t\u1EEBng \u0111\u1ED1i t\u01B0\u1EE3ng kh\xF4ng \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n, \u0111\u1EEBng ch\u1EC9 l\xE0m m\u1EDD d\xF2ng.</sg-do>
        <sg-do>B\u1EAFt bu\u1ED9c xem tr\u01B0\u1EDBc "tr\u01B0\u1EDBc \u2192 sau" tr\u01B0\u1EDBc khi \xE1p d\u1EE5ng \u2014 thao t\xE1c h\xE0ng lo\u1EA1t r\u1EA5t kh\xF3 ho\xE0n t\xE1c.</sg-do>
        <sg-do>Coi k\u1EBFt qu\u1EA3 l\xE0 TH\xC0NH C\xD4NG M\u1ED8T PH\u1EA6N: n\xF3i r\xF5 bao nhi\xEAu d\xF2ng tr\u01B0\u1EE3t v\xE0 tr\u01B0\u1EE3t v\xEC sao.</sg-do>
        <sg-do>\u0110\u1EB7t c\xF4ng th\u1EE9c (l\u01B0\u01A1ng m\u1EDBi, t\u1ED5ng m\u1EE9c t\u0103ng, validate d\xF2ng t\u1EC7p) \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5; shell ch\u1EC9 hi\u1EC3n th\u1ECB.</sg-do>
        <sg-dont>\u0110\u1EEBng t\u1EF1 gh\xE9p c\u1ED9t TI\u1EC0N trong b\u01B0\u1EDBc gh\xE9p c\u1ED9t \u2014 gh\xE9p nh\u1EA7m c\u1ED9t l\u01B0\u01A1ng c\u0169 l\xE0 sai c\u1EA3 \u0111\u1EE3t.</sg-dont>
        <sg-dont>\u0110\u1EEBng nh\u1EA3y th\u1EB3ng t\u1EEB ch\u1ECDn t\u1EC7p sang "\u0111\xE3 nh\u1EADp xong" \u2014 b\u1ECF b\u01B0\u1EDBc ki\u1EC3m tra l\xE0 m\u1EA5t kh\u1EA3 n\u0103ng s\u1EEDa tr\u01B0\u1EDBc khi ghi.</sg-dont>
      </div>
    </sg-doc>
    }

    <ng-template #screen>
      <hrm-app-shell contentPad="none">
        <hrm-side-nav appSideNav [sections]="navSections" selectedKey="payroll"
          [caretIcon]="caret" [logoSrc]="logo" [logoMarkSrc]="logoMark"
          [toggleIcon]="sbCollapse" [expandIcon]="sbExpand" [(collapsed)]="collapsedModel"
          [user]="navUser" [switchIcon]="gear" switchLabel="C\xE0i \u0111\u1EB7t">
          <button snActions type="button" class="as-ico" aria-label="Th\xF4ng b\xE1o"><tabler-icon [icon]="bell" [size]="20" /></button>
          <button snHead type="button" class="sn-acct" [class.sn-acct--mini]="collapsed()">
            <span class="sn-acct-ic"><tabler-icon [icon]="building" [size]="18" /></span>
            @if (!collapsed()) {
              <span class="sn-acct-info">
                <span class="sn-acct-name">T\u1EADp \u0111o\xE0n VNR</span>
                <span class="sn-acct-sub">T\xE0i kho\u1EA3n doanh nghi\u1EC7p</span>
              </span>
              <tabler-icon [icon]="chevDown" [size]="16" style="color:var(--text-soft)" />
            }
          </button>
        </hrm-side-nav>

        <div class="bi-wrap">
          <header class="bi-head">
            <div>
              <h1 class="bi-h1">\u0110i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng h\xE0ng lo\u1EA1t</h1>
              <p class="bi-sub">
                \xC1p m\u1ED9t m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh cho nhi\u1EC1u nh\xE2n vi\xEAn trong c\xF9ng \u0111\u1EE3t. Nh\u1EADp tay theo b\u1EA3ng khi s\u1ED1 l\u01B0\u1EE3ng \xEDt,
                ho\u1EB7c nh\u1EADp t\u1EEB t\u1EC7p Excel khi ph\xF2ng nh\xE2n s\u1EF1 \u0111\xE3 t\u1ED5ng h\u1EE3p s\u1EB5n.
              </p>
            </div>
          </header>

          <!-- Tab t\u1EF1 d\u1EF1ng b\u1EB1ng button \u2014 h\u1EE3p \u0111\u1ED3ng ARIA \u0111\u1EA7y \u0111\u1EE7: tab\u2194tabpanel n\u1ED1i b\u1EB1ng id,
               roving tabindex + ph\xEDm \u2190/\u2192 theo chu\u1EA9n WAI-ARIA tabs. -->
          <div class="bi-tabs" role="tablist" aria-label="C\xE1ch nh\u1EADp d\u1EEF li\u1EC7u" (keydown)="onTabKey($event)">
            <button type="button" role="tab" class="bi-tab" id="bi-tab-select"
              aria-controls="bi-panel-select" [class.is-on]="tab() === 'select'"
              [attr.aria-selected]="tab() === 'select'" [attr.tabindex]="tab() === 'select' ? 0 : -1"
              (click)="tab.set('select')">
              <tabler-icon [icon]="listIcon" [size]="16" /> Ch\u1ECDn &amp; \xE1p d\u1EE5ng
              @if (selected().length) {
                <span class="cnt" [attr.aria-label]="selected().length + ' \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE3 ch\u1ECDn'">{{ selected().length }}</span>
              }
            </button>
            <button type="button" role="tab" class="bi-tab" id="bi-tab-import"
              aria-controls="bi-panel-import" [class.is-on]="tab() === 'import'"
              [attr.aria-selected]="tab() === 'import'" [attr.tabindex]="tab() === 'import' ? 0 : -1"
              (click)="tab.set('import')">
              <tabler-icon [icon]="importIcon" [size]="16" /> Import t\u1EEB file
              @if (importFileName()) { <span class="cnt" aria-label="\u0110\xE3 ch\u1ECDn t\u1EC7p">t\u1EC7p</span> }
            </button>
          </div>

          <!-- B\u1ECDc vnr-form-shell \u0111\u1EC3 c\xE1c shell con nh\u1EADn \u0111\u01B0\u1EE3c container query (s\u1ED1 c\u1ED9t t\u1EF1 \u0111\u1ED5i) -->
          <vnr-form-shell>
            @if (tab() === 'select') {
              <div role="tabpanel" id="bi-panel-select" aria-labelledby="bi-tab-select">
              <vnr-form-section title="Th\xF4ng tin \u0111\u1EE3t \u0111i\u1EC1u ch\u1EC9nh" [meta]="roundMeta()">
                <vnr-form-grid>
                  <vnr-form-field label="\u0110\u1EE3t \u0111i\u1EC1u ch\u1EC9nh" size="lg" required>
                    <hrm-select [(ngModel)]="batch.round" name="round" [options]="roundOptions" />
                  </vnr-form-field>
                  <vnr-form-field label="Ng\xE0y hi\u1EC7u l\u1EF1c" size="md" required hint="\xC1p d\u1EE5ng cho k\u1EF3 l\u01B0\u01A1ng g\u1EA7n nh\u1EA5t sau ng\xE0y n\xE0y">
                    <hrm-input [(ngModel)]="batch.effectiveDate" name="effectiveDate" placeholder="01/09/2026" />
                  </vnr-form-field>
                  <vnr-form-field label="Ng\u01B0\u1EDDi tr\xECnh" size="md">
                    <hrm-input [(ngModel)]="batch.owner" name="owner" />
                  </vnr-form-field>
                  <vnr-form-field label="C\u0103n c\u1EE9 \u0111i\u1EC1u ch\u1EC9nh" size="full">
                    <hrm-textarea [(ngModel)]="batch.reason" name="reason" [minRows]="2" [maxRows]="4"
                      placeholder="N\xEAu c\u0103n c\u1EE9: bi\xEAn b\u1EA3n h\u1ECDp, k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1, quy\u1EBFt \u0111\u1ECBnh c\u1EE7a ban l\xE3nh \u0111\u1EA1o\u2026" />
                  </vnr-form-field>
                </vnr-form-grid>
              </vnr-form-section>

              <!-- TRAIT bulk-target \u2014 \u0111i\u1EC1u ki\u1EC7n \xE1p d\u1EE5ng do buildTargets() c\u1EA5p, panel kh\xF4ng t\u1EF1 ch\u1EA5m -->
              <vnr-form-section title="Ch\u1ECDn nh\xE2n vi\xEAn \xE1p d\u1EE5ng" [meta]="selectMeta()">
                <vnr-bulk-target-panel
                  [targets]="targets" [(selectedIds)]="selected"
                  [previewRows]="previewRows()" [result]="bulkResult()"
                  applyLabel="\xC1p d\u1EE5ng \u0111i\u1EC1u ch\u1EC9nh"
                  (selectionChange)="onSelectionChange($event)"
                  (preview)="onPreview()" (apply)="onApply($event)" />
              </vnr-form-section>

              <!-- LAYOUT table \u2014 "L\u01B0\u01A1ng m\u1EDBi" v\xE0 d\xF2ng t\u1ED5ng do h\xE0m nghi\u1EC7p v\u1EE5 t\xEDnh, b\u1EA3ng ch\u1EC9 hi\u1EC3n th\u1ECB -->
              <vnr-form-section title="Nh\u1EADp m\u1EE9c \u0111i\u1EC1u ch\u1EC9nh theo d\xF2ng" [meta]="tableMeta()">
                <vnr-editable-form-table
                  [columns]="tableColumns" [rows]="tableRows()" [totals]="tableTotals()"
                  addLabel="Ch\u1ECDn th\xEAm nh\xE2n vi\xEAn \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n" totalLabel="T\u1ED5ng m\u1EE9c t\u0103ng"
                  emptyText="Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn n\xE0o \u2014 ch\u1ECDn \u1EDF kh\u1ED1i ph\xEDa tr\xEAn ho\u1EB7c b\u1EA5m n\xFAt th\xEAm d\xF2ng."
                  (cellChange)="onCell($event)" (addRow)="onAddRow()"
                  (removeRow)="onRemoveRow($event)" (duplicateRow)="onDuplicateRow($event)" />
                <p class="bi-hint">
                  N\xFAt <b>Nh\xE2n b\u1EA3n</b> tr\xEAn m\u1ED9t d\xF2ng s\u1EBD \xE1p m\u1EE9c t\u0103ng c\u1EE7a d\xF2ng \u0111\xF3 cho t\u1EA5t c\u1EA3 d\xF2ng c\xF2n l\u1EA1i \u2014
                  l\u1ED1i t\u1EAFt th\u01B0\u1EDDng d\xF9ng khi c\u1EA3 \u0111\u1EE3t t\u0103ng c\xF9ng m\u1ED9t m\u1EE9c.
                </p>
              </vnr-form-section>
              </div>
            } @else {
              <div role="tabpanel" id="bi-panel-import" aria-labelledby="bi-tab-import">
              <!-- TRAIT import-map \u2014 mapper kh\xF4ng \u0111\u1ECDc t\u1EC7p, kh\xF4ng validate; m\u1ECDi th\u1EE9 do trang c\u1EA5p -->
              <vnr-form-section title="Nh\u1EADp \u0111i\u1EC1u ch\u1EC9nh l\u01B0\u01A1ng t\u1EEB t\u1EC7p Excel" [meta]="importMeta()">
                <vnr-import-mapper
                  [(step)]="importStep" [fileName]="importFileName()"
                  [sourceColumns]="sourceColumns" [targetFields]="targetFields"
                  [(mapping)]="importMapping" [previewRows]="importPreview()"
                  [progress]="importProgress()" [result]="importResult()"
                  (fileSelect)="onFileSelect($event)" (mappingChange)="onMappingChange($event)"
                  (runImport)="onRunImport()" (downloadErrors)="onDownloadErrors()"
                  (back)="onImportBack()" />
                @if (importNotice(); as note) {
                  <p class="bi-note">{{ note }}</p>
                }
              </vnr-form-section>
              </div>
            }
          </vnr-form-shell>
        </div>
      </hrm-app-shell>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;b0caacd99debf676583f6405e23f7fe7e48432c592fc44b3b432ce3d382d8100;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/bulk-import-page.ts */\n.lp-desktop {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-desktop ::ng-deep .shell-content {\n  padding: 0;\n}\n.lp-full {\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.bi-wrap {\n  height: 100%;\n  min-height: 0;\n  overflow: auto;\n  padding: 20px 24px 32px;\n}\n.bi-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-4, 16px);\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.bi-h1 {\n  font-size: var(--fs-20, 20px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: -.01em;\n  color: var(--text-strong);\n}\n.bi-sub {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  margin-top: 3px;\n  max-width: 720px;\n  line-height: 1.55;\n}\n.bi-tabs {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--space-1, 4px);\n  border-bottom: 1px solid var(--border-sub);\n}\n.bi-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: -1px;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  border-start-start-radius: var(--radius-sm, 6px);\n  border-start-end-radius: var(--radius-sm, 6px);\n}\n.bi-tab:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.bi-tab.is-on {\n  color: var(--primary-base);\n  border-bottom-color: var(--primary-base);\n  font-weight: var(--font-semibold, 600);\n}\n.bi-tab .cnt {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  padding: 1px 6px;\n  border-radius: var(--radius-sm, 6px);\n  background: var(--faded-bg);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.bi-tab.is-on .cnt {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.bi-hint {\n  margin-top: var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n  line-height: 1.5;\n}\n.bi-hint b {\n  color: var(--text-body);\n  font-weight: var(--font-semibold, 600);\n}\n.bi-note {\n  margin-top: var(--space-2-5, 10px);\n  padding: var(--space-2, 8px) var(--space-3, 12px);\n  border: 1px solid var(--border-sub);\n  border-inline-start: 3px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--primary-bg-subtle);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-body);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=bulk-import-page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateBulkImport, { className: "SgTemplateBulkImport", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/bulk-import-page.ts", lineNumber: 468 });
})();
export {
  SgTemplateBulkImport
};
//# sourceMappingURL=chunk-E5BLQKW2.js.map
