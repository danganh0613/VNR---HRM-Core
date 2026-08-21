import {
  HrmQuickFilter
} from "./chunk-CJKFUWVC.js";
import {
  HrmDataView,
  HrmListPage,
  HrmListPageTabs
} from "./chunk-JKYPLKJT.js";
import {
  HrmSortConfig
} from "./chunk-NSTKLO3O.js";
import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  HrmSegmented
} from "./chunk-IETGC4TN.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray
} from "./chunk-KLLXE4WM.js";
import {
  HrmInput
} from "./chunk-XC26CQEC.js";
import {
  NzMenuDirective,
  NzMenuDividerDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-LIWX2G7Z.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import {
  AlertTriangle,
  ArrowsMaximize,
  ArrowsSort,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Coin,
  Columns3,
  Dots,
  DotsVertical,
  Download,
  Eye,
  EyeOff,
  FileImport,
  GripVertical,
  Hash,
  LayoutColumns,
  LayoutList,
  LetterCase,
  MathFunction,
  Pencil,
  Percentage,
  Plus,
  Printer,
  Search,
  Settings,
  Sparkles,
  TablerIconComponent,
  ToggleLeft,
  Trash,
  User,
  X
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  forwardRef,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/enterprise-data/hrm-data-config.types.ts
var HRM_FORMAT_OPTIONS = {
  text: [
    { value: "default", label: "M\u1EB7c \u0111\u1ECBnh", sample: "Nguy\u1EC5n V\u0103n A" },
    { value: "upper", label: "IN HOA", sample: "NGUY\u1EC4N V\u0102N A" },
    { value: "lower", label: "in th\u01B0\u1EDDng", sample: "nguy\u1EC5n v\u0103n a" },
    { value: "capitalize", label: "Vi\u1EBFt Hoa \u0110\u1EA7u", sample: "Nguy\u1EC5n V\u0103n A" }
  ],
  number: [
    { value: "plain", label: "1234", sample: "1234" },
    { value: "thousand", label: "1.234", sample: "1.234" },
    { value: "decimal2", label: "1.234,00", sample: "1.234,00" }
  ],
  money: [
    { value: "vnd", label: "\u20AB (VND)", sample: "1.000.000 \u20AB" },
    { value: "usd", label: "$ (USD)", sample: "$1,000.00" },
    { value: "plain", label: "Kh\xF4ng k\xFD hi\u1EC7u", sample: "1.000.000" }
  ],
  percent: [
    { value: "p0", label: "0%", sample: "75%" },
    { value: "p1", label: "0.0%", sample: "75.0%" }
  ],
  date: [
    { value: "dmy", label: "DD/MM/YYYY", sample: "31/12/2026" },
    { value: "dmyhm", label: "DD/MM/YYYY HH:mm", sample: "31/12/2026 09:30" },
    { value: "relative", label: "Ng\xE0y t\u01B0\u01A1ng \u0111\u1ED1i", sample: "2 ng\xE0y tr\u01B0\u1EDBc" }
  ],
  status: [
    { value: "text", label: "Ch\u1EEF", sample: "\u0110ang l\xE0m" },
    { value: "badge", label: "Badge", sample: "\u25CF \u0110ang l\xE0m" },
    { value: "badge-icon", label: "Badge + icon", sample: "\u2713 \u0110ang l\xE0m" }
  ],
  user: [
    { value: "avatar-name", label: "Avatar + t\xEAn", sample: "\u{1F7E2} Nguy\u1EC5n V\u0103n A" },
    { value: "name", label: "Ch\u1EC9 t\xEAn", sample: "Nguy\u1EC5n V\u0103n A" }
  ],
  boolean: [
    { value: "check", label: "D\u1EA5u t\xEDch", sample: "\u2713 / \u2014" },
    { value: "yesno", label: "C\xF3 / Kh\xF4ng", sample: "C\xF3" },
    { value: "onoff", label: "B\u1EADt / T\u1EAFt", sample: "B\u1EADt" }
  ]
};
function hrmAutoAlign(type) {
  switch (type) {
    case "number":
    case "money":
    case "percent":
      return "right";
    case "boolean":
      return "center";
    default:
      return "left";
  }
}
function hrmTypeIcon(type) {
  switch (type) {
    case "number":
      return "Hash";
    case "money":
      return "Coin";
    case "percent":
      return "Percentage";
    case "date":
      return "Calendar";
    case "status":
      return "CircleDot";
    case "user":
      return "User";
    case "boolean":
      return "ToggleLeft";
    default:
      return "Letter-case";
  }
}

// libs/hrm-ui/src/lib/enterprise-data/hrm-column-manager.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function HrmColumnManager_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyText());
  }
}
function HrmColumnManager_Conditional_18_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 30);
    \u0275\u0275listener("input", function HrmColumnManager_Conditional_18_For_2_Conditional_4_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.renameText.set($event.target.value));
    })("keydown.enter", function HrmColumnManager_Conditional_18_For_2_Conditional_4_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r4);
      const g_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitRename(g_r5.id));
    })("keydown.escape", function HrmColumnManager_Conditional_18_For_2_Conditional_4_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.renaming.set(null));
    })("blur", function HrmColumnManager_Conditional_18_For_2_Conditional_4_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r4);
      const g_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitRename(g_r5.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.renameText());
    \u0275\u0275attribute("aria-label", ctx_r0.renameLabel());
  }
}
function HrmColumnManager_Conditional_18_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.membersOf(g_r5.id).length);
  }
}
function HrmColumnManager_Conditional_18_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 33);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const g_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startRename(g_r5));
    });
    \u0275\u0275element(2, "tabler-icon", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const g_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeGroup(g_r5.id));
    });
    \u0275\u0275element(5, "tabler-icon", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icPencil)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.renameLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icTrash)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.removeGroupLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.keepColumnsHint());
  }
}
function HrmColumnManager_Conditional_18_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_For_12_Template_div_click_0_listener() {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.configColumn.emit(col_r8.key));
    })("keydown.enter", function HrmColumnManager_Conditional_18_For_2_For_12_Template_div_keydown_enter_0_listener() {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.configColumn.emit(col_r8.key));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_For_12_Template_span_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "tabler-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 38);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_For_12_Template_label_click_3_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(4, "input", 39);
    \u0275\u0275listener("change", function HrmColumnManager_Conditional_18_For_2_For_12_Template_input_change_4_listener() {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleVisible(col_r8.key));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cdkDragData", col_r8.key)("cdkDragDisabled", ctx_r0.isFiltering());
    \u0275\u0275attribute("aria-label", col_r8.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-off", ctx_r0.isFiltering());
    \u0275\u0275attribute("aria-label", ctx_r0.reorderColLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icGrip)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", col_r8.visible !== false)("disabled", col_r8.hideable === false);
    \u0275\u0275attribute("aria-label", col_r8.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-off", col_r8.visible === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r8.title);
  }
}
function HrmColumnManager_Conditional_18_For_2_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyGroupText());
  }
}
function HrmColumnManager_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 21)(1, "header", 22)(2, "span", 23);
    \u0275\u0275element(3, "tabler-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmColumnManager_Conditional_18_For_2_Conditional_4_Template, 1, 2, "input", 24)(5, HrmColumnManager_Conditional_18_For_2_Conditional_5_Template, 4, 2);
    \u0275\u0275elementStart(6, "div", 25)(7, "button", 26);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_2_Template_button_click_7_listener() {
      const g_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMenu.set(ctx_r0.openMenu() === g_r5.id ? null : g_r5.id));
    });
    \u0275\u0275element(8, "tabler-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HrmColumnManager_Conditional_18_For_2_Conditional_9_Template, 9, 7, "div", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275listener("cdkDropListEntered", function HrmColumnManager_Conditional_18_For_2_Template_div_cdkDropListEntered_10_listener() {
      const g_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hover.set(g_r5.id));
    })("cdkDropListDropped", function HrmColumnManager_Conditional_18_For_2_Template_div_cdkDropListDropped_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onColDrop($event));
    });
    \u0275\u0275repeaterCreate(11, HrmColumnManager_Conditional_18_For_2_For_12_Template, 7, 14, "div", 19, _forTrack1, false, HrmColumnManager_Conditional_18_For_2_ForEmpty_13_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-hot", ctx_r0.hover() === g_r5.id);
    \u0275\u0275property("cdkDragDisabled", ctx_r0.isFiltering());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-off", ctx_r0.isFiltering());
    \u0275\u0275attribute("aria-label", ctx_r0.reorderGroupLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icGrip)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.renaming() === g_r5.id ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r0.groupMenuLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icDots)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.openMenu() === g_r5.id ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("id", "mem-" + g_r5.id)("cdkDropListData", g_r5.id)("cdkDropListConnectedTo", ctx_r0.memberListIds())("cdkDropListDisabled", ctx_r0.isFiltering());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.displayMembers(g_r5.id));
  }
}
function HrmColumnManager_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ungroupedLabel());
  }
}
function HrmColumnManager_Conditional_18_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_6_Template_div_click_0_listener() {
      const col_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.configColumn.emit(col_r10.key));
    })("keydown.enter", function HrmColumnManager_Conditional_18_For_6_Template_div_keydown_enter_0_listener() {
      const col_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.configColumn.emit(col_r10.key));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_6_Template_span_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "tabler-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 38);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_For_6_Template_label_click_3_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(4, "input", 39);
    \u0275\u0275listener("change", function HrmColumnManager_Conditional_18_For_6_Template_input_change_4_listener() {
      const col_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleVisible(col_r10.key));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkDragData", col_r10.key)("cdkDragDisabled", ctx_r0.isFiltering());
    \u0275\u0275attribute("aria-label", col_r10.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-off", ctx_r0.isFiltering());
    \u0275\u0275attribute("aria-label", ctx_r0.reorderColLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icGrip)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", col_r10.visible !== false)("disabled", col_r10.hideable === false);
    \u0275\u0275attribute("aria-label", col_r10.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-off", col_r10.visible === false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r10.title);
  }
}
function HrmColumnManager_Conditional_18_ForEmpty_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyFlatText());
  }
}
function HrmColumnManager_Conditional_18_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmColumnManager_Conditional_18_ForEmpty_7_Conditional_0_Template, 2, 1, "div", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.groups().length ? 0 : -1);
  }
}
function HrmColumnManager_Conditional_18_Conditional_8_For_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formulaEmptyText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formulaEmptySummary(col_r12.title));
  }
}
function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275element(3, "tabler-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 45)(5, "input", 39);
    \u0275\u0275listener("change", function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template_input_change_5_listener() {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleVisible(col_r12.key));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 46);
    \u0275\u0275listener("input", function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template_input_input_6_listener($event) {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setComputedTitle(col_r12.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 47);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template_button_click_7_listener() {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeComputed(col_r12.key));
    });
    \u0275\u0275element(8, "tabler-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "textarea", 49);
    \u0275\u0275listener("input", function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template_textarea_input_10_listener($event) {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setFormula(col_r12.key, $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 50);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_18_Conditional_8_For_8_Template_button_click_11_listener() {
      const col_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.configFormula.emit(col_r12.key));
    });
    \u0275\u0275element(12, "tabler-icon", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, HrmColumnManager_Conditional_18_Conditional_8_For_8_Conditional_13_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r0.icSigma)("size", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", col_r12.visible !== false)("disabled", col_r12.hideable === false);
    \u0275\u0275attribute("aria-label", col_r12.title);
    \u0275\u0275advance();
    \u0275\u0275property("value", col_r12.title);
    \u0275\u0275attribute("placeholder", ctx_r0.computedNamePlaceholder())("aria-label", ctx_r0.computedNameLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.removeComputedLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icTrash)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", col_r12.formula ?? "");
    \u0275\u0275attribute("placeholder", ctx_r0.formulaPlaceholder())("aria-label", ctx_r0.formulaFieldLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.expandFormulaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icExpand)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(col_r12.formula == null ? null : col_r12.formula.trim()) ? 13 : -1);
  }
}
function HrmColumnManager_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "header", 41);
    \u0275\u0275element(2, "tabler-icon", 8);
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, HrmColumnManager_Conditional_18_Conditional_8_For_8_Template, 14, 18, "div", 42, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icSigma)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.computedTitle());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.computedCols().length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.displayComputed());
  }
}
function HrmColumnManager_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("cdkDropListDropped", function HrmColumnManager_Conditional_18_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSectionDrop($event));
    });
    \u0275\u0275repeaterCreate(1, HrmColumnManager_Conditional_18_For_2_Template, 14, 18, "section", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmColumnManager_Conditional_18_Conditional_3_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275listener("cdkDropListEntered", function HrmColumnManager_Conditional_18_Template_div_cdkDropListEntered_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hover.set(ctx_r0.flatId));
    })("cdkDropListDropped", function HrmColumnManager_Conditional_18_Template_div_cdkDropListDropped_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onColDrop($event));
    });
    \u0275\u0275repeaterCreate(5, HrmColumnManager_Conditional_18_For_6_Template, 7, 14, "div", 19, _forTrack1, false, HrmColumnManager_Conditional_18_ForEmpty_7_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HrmColumnManager_Conditional_18_Conditional_8_Template, 9, 4, "section", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListDisabled", ctx_r0.isFiltering());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.groups());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.groups().length && ctx_r0.displayFlat().length ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-hot", ctx_r0.hover() === ctx_r0.flatId);
    \u0275\u0275property("id", ctx_r0.flatId)("cdkDropListData", null)("cdkDropListConnectedTo", ctx_r0.memberListIds())("cdkDropListDisabled", ctx_r0.isFiltering());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.displayFlat());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.computedCols().length ? 8 : -1);
  }
}
function HrmColumnManager_Conditional_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58)(1, "input", 62);
    \u0275\u0275listener("change", function HrmColumnManager_Conditional_20_For_9_Template_input_change_1_listener() {
      const col_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePick(col_r15.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isPicked(col_r15.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r15.title);
  }
}
function HrmColumnManager_Conditional_20_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.noColumnsText());
  }
}
function HrmColumnManager_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 53)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 55);
    \u0275\u0275listener("input", function HrmColumnManager_Conditional_20_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newGroupName.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275repeaterCreate(8, HrmColumnManager_Conditional_20_For_9_Template, 4, 2, "label", 58, _forTrack1, false, HrmColumnManager_Conditional_20_ForEmpty_10_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 59)(12, "button", 60);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelCreate());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 61);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createGroup());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.createGroupLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.newGroupNameLabel());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.newGroupName());
    \u0275\u0275attribute("placeholder", ctx_r0.newGroupNamePlaceholder());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pickColumnsLabel());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.nonComputedCols());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.cancelLabel());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.canCreate());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.createLabel());
  }
}
function HrmColumnManager_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function HrmColumnManager_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeOverlays());
    });
    \u0275\u0275elementEnd();
  }
}
var FLAT = "mem-flat";
var HrmColumnManager = class _HrmColumnManager {
  constructor() {
    this.columns = model([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groups = model([], ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.configColumn = output();
    this.configFormula = output();
    this.addComputed = output();
    this.saveView = output();
    this.title = model("C\u1EA5u h\xECnh c\u1ED9t", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = model("Ch\u1ECDn c\u1ED9t hi\u1EC3n th\u1ECB, s\u1EAFp x\u1EBFp v\xE0 t\u1ED5 ch\u1EE9c ti\xEAu \u0111\u1EC1 b\u1EA3ng.", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saveViewLabel = model("L\u01B0u th\xE0nh ch\u1EBF \u0111\u1ED9 xem", ...ngDevMode ? [{ debugName: "saveViewLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = model("T\xECm c\u1ED9t\u2026", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colsShownLabel = model("c\u1ED9t \u0111ang hi\u1EC3n th\u1ECB", ...ngDevMode ? [{ debugName: "colsShownLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showAllLabel = model("Hi\u1EC7n t\u1EA5t c\u1EA3", ...ngDevMode ? [{ debugName: "showAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hideAllLabel = model("\u1EA8n t\u1EA5t c\u1EA3", ...ngDevMode ? [{ debugName: "hideAllLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyText = model("Ch\u01B0a c\xF3 c\u1ED9t n\xE0o \u0111\u1EC3 c\u1EA5u h\xECnh.", ...ngDevMode ? [{ debugName: "emptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyGroupText = model("K\xE9o c\u1ED9t v\xE0o nh\xF3m n\xE0y", ...ngDevMode ? [{ debugName: "emptyGroupText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyFlatText = model("K\xE9o c\u1ED9t ra \u0111\xE2y \u0111\u1EC3 b\u1ECF kh\u1ECFi nh\xF3m", ...ngDevMode ? [{ debugName: "emptyFlatText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ungroupedLabel = model("Kh\xF4ng thu\u1ED9c nh\xF3m", ...ngDevMode ? [{ debugName: "ungroupedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.computedTitle = model("C\u1ED9t t\xEDnh to\xE1n", ...ngDevMode ? [{ debugName: "computedTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaTag = model("C\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "formulaTag" }] : (
      /* istanbul ignore next */
      []
    ));
    this.computedNameLabel = model("T\xEAn c\u1ED9t t\xEDnh to\xE1n", ...ngDevMode ? [{ debugName: "computedNameLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.computedNamePlaceholder = model("T\xEAn c\u1ED9t\u2026", ...ngDevMode ? [{ debugName: "computedNamePlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.removeComputedLabel = model("Xo\xE1 c\u1ED9t t\xEDnh to\xE1n", ...ngDevMode ? [{ debugName: "removeComputedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaFieldLabel = model("C\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "formulaFieldLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaPlaceholder = model('V\xED d\u1EE5: N\u1ED0I([H\u1ECD t\xEAn]; " \xB7 "; [Email])', ...ngDevMode ? [{ debugName: "formulaPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expandFormulaLabel = model("M\u1EDF r\u1ED9ng c\u1EA5u h\xECnh c\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "expandFormulaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaEmptyText = model("Ch\u01B0a c\xF3 c\xF4ng th\u1EE9c \u2014 b\u1EA5m \u0111\u1EC3 so\u1EA1n (ch\u1ECDn tr\u01B0\u1EDDng, h\xE0m ho\u1EB7c g\xF5 tr\u1EF1c ti\u1EBFp).", ...ngDevMode ? [{ debugName: "formulaEmptyText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.createGroupLabel = model("T\u1EA1o nh\xF3m c\u1ED9t", ...ngDevMode ? [{ debugName: "createGroupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addComputedLabel = model("Th\xEAm c\u1ED9t t\xEDnh to\xE1n", ...ngDevMode ? [{ debugName: "addComputedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.renameLabel = model("\u0110\u1ED5i t\xEAn", ...ngDevMode ? [{ debugName: "renameLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.removeGroupLabel = model("G\u1EE1 nh\xF3m", ...ngDevMode ? [{ debugName: "removeGroupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.keepColumnsHint = model("(gi\u1EEF c\u1ED9t)", ...ngDevMode ? [{ debugName: "keepColumnsHint" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupMenuLabel = model("Tu\u1EF3 ch\u1ECDn nh\xF3m", ...ngDevMode ? [{ debugName: "groupMenuLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newGroupNameLabel = model("T\xEAn nh\xF3m", ...ngDevMode ? [{ debugName: "newGroupNameLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newGroupNamePlaceholder = model("VD: Th\xF4ng tin l\u01B0\u01A1ng", ...ngDevMode ? [{ debugName: "newGroupNamePlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pickColumnsLabel = model("Ch\u1ECDn c\u1ED9t \u0111\u01B0a v\xE0o nh\xF3m", ...ngDevMode ? [{ debugName: "pickColumnsLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.noColumnsText = model("Ch\u01B0a c\xF3 c\u1ED9t \u0111\u1EC3 ch\u1ECDn.", ...ngDevMode ? [{ debugName: "noColumnsText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cancelLabel = model("Hu\u1EF7", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.createLabel = model("T\u1EA1o nh\xF3m", ...ngDevMode ? [{ debugName: "createLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.configColumnLabel = model("C\u1EA5u h\xECnh c\u1ED9t", ...ngDevMode ? [{ debugName: "configColumnLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.configFormulaLabel = model("S\u1EEDa c\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "configFormulaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderColLabel = model("K\xE9o \u0111\u1ED5i th\u1EE9 t\u1EF1 c\u1ED9t", ...ngDevMode ? [{ debugName: "reorderColLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reorderGroupLabel = model("K\xE9o \u0111\u1ED5i v\u1ECB tr\xED nh\xF3m", ...ngDevMode ? [{ debugName: "reorderGroupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icGrip = GripVertical;
    this.icCog = Settings;
    this.icDots = Dots;
    this.icPlus = Plus;
    this.icSearch = Search;
    this.icSigma = MathFunction;
    this.icEye = Eye;
    this.icEyeOff = EyeOff;
    this.icPencil = Pencil;
    this.icTrash = Trash;
    this.icLayout = LayoutColumns;
    this.icExpand = ArrowsMaximize;
    this.typeIconMap = {
      "Hash": Hash,
      "Coin": Coin,
      "Percentage": Percentage,
      "Calendar": Calendar,
      "CircleDot": CircleDot,
      "User": User,
      "ToggleLeft": ToggleLeft,
      "Letter-case": LetterCase
    };
    this.flatId = FLAT;
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openMenu = signal(null, ...ngDevMode ? [{ debugName: "openMenu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.renaming = signal(null, ...ngDevMode ? [{ debugName: "renaming" }] : (
      /* istanbul ignore next */
      []
    ));
    this.renameText = signal("", ...ngDevMode ? [{ debugName: "renameText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hover = signal(null, ...ngDevMode ? [{ debugName: "hover" }] : (
      /* istanbul ignore next */
      []
    ));
    this.creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newGroupName = signal("", ...ngDevMode ? [{ debugName: "newGroupName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newGroupPicks = signal([], ...ngDevMode ? [{ debugName: "newGroupPicks" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isFiltering = computed(() => this.query().trim().length > 0, ...ngDevMode ? [{ debugName: "isFiltering" }] : (
      /* istanbul ignore next */
      []
    ));
    this.buckets = computed(() => {
      const flat = [];
      const byId = /* @__PURE__ */ new Map();
      for (const g of this.groups())
        byId.set(g.id, []);
      const comp = [];
      for (const c of this.columns()) {
        if (c.computed) {
          comp.push(c);
          continue;
        }
        const gid = c.groupId ?? null;
        if (gid && byId.has(gid))
          byId.get(gid).push(c);
        else
          flat.push(c);
      }
      return { flat, byId, comp };
    }, ...ngDevMode ? [{ debugName: "buckets" }] : (
      /* istanbul ignore next */
      []
    ));
    this.memberListIds = computed(() => [FLAT, ...this.groups().map((g) => "mem-" + g.id)], ...ngDevMode ? [{ debugName: "memberListIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalCount = computed(() => this.columns().length, ...ngDevMode ? [{ debugName: "totalCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visibleCount = computed(() => this.columns().filter((c) => c.visible !== false).length, ...ngDevMode ? [{ debugName: "visibleCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.computedCols = computed(() => this.buckets().comp, ...ngDevMode ? [{ debugName: "computedCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nonComputedCols = computed(() => this.columns().filter((c) => !c.computed), ...ngDevMode ? [{ debugName: "nonComputedCols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canCreate = computed(() => this.newGroupName().trim().length > 0, ...ngDevMode ? [{ debugName: "canCreate" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Chuẩn hoá chuỗi để so khớp tìm kiếm. */
  norm(s) {
    return (s ?? "").toLowerCase().trim();
  }
  keep(c) {
    const q = this.norm(this.query());
    return !q || this.norm(c.title).includes(q);
  }
  /** Thành viên nhóm (đầy đủ, chưa lọc) — dùng cho đếm + rebuild. */
  membersOf(gid) {
    return this.buckets().byId.get(gid) ?? [];
  }
  /** Danh sách hiển thị (đã lọc theo tìm kiếm). */
  displayMembers(gid) {
    return this.membersOf(gid).filter((c) => this.keep(c));
  }
  displayFlat() {
    return this.buckets().flat.filter((c) => this.keep(c));
  }
  displayComputed() {
    return this.buckets().comp.filter((c) => this.keep(c));
  }
  /** Icon theo kiểu dữ liệu (mặc định IconLetterCase). */
  typeIcon(col) {
    return this.typeIconMap[hrmTypeIcon(col.type)] ?? LetterCase;
  }
  // ---- Hiển thị cột ----------------------------------------------------------
  toggleVisible(key) {
    this.columns.set(this.columns().map((c) => c.key === key ? __spreadProps(__spreadValues({}, c), { visible: !(c.visible !== false) }) : c));
  }
  showAll() {
    this.columns.set(this.columns().map((c) => __spreadProps(__spreadValues({}, c), { visible: true })));
  }
  hideAll() {
    this.columns.set(this.columns().map((c) => c.hideable === false ? c : __spreadProps(__spreadValues({}, c), { visible: false })));
  }
  // ---- Cột tính toán: sửa tên / công thức inline · xoá ----------------------
  /** Ghi công thức inline vào cột tính toán (two-way columns). */
  setFormula(key, value) {
    this.columns.update((cols) => cols.map((c) => c.key === key ? __spreadProps(__spreadValues({}, c), { formula: value }) : c));
  }
  /** Đổi tên cột tính toán (two-way columns). */
  setComputedTitle(key, value) {
    this.columns.update((cols) => cols.map((c) => c.key === key ? __spreadProps(__spreadValues({}, c), { title: value }) : c));
  }
  /** Xoá hẳn 1 cột tính toán khỏi columns. */
  removeComputed(key) {
    this.columns.update((cols) => cols.filter((c) => c.key !== key));
  }
  /** Câu tóm tắt khi ô công thức còn trống. */
  formulaEmptySummary(title) {
    return 'C\u1ED9t "' + (title || "\u2026") + '" ch\u01B0a c\xF3 c\xF4ng th\u1EE9c n\xEAn ch\u01B0a hi\u1EC7n \u0111\u01B0\u1EE3c gi\xE1 tr\u1ECB n\xE0o.';
  }
  // ---- Kéo-thả cột (reorder + into/out group) --------------------------------
  onColDrop(e) {
    if (this.isFiltering()) {
      this.hover.set(null);
      return;
    }
    const from = e.previousContainer.data ?? null;
    const to = e.container.data ?? null;
    const b = this.buckets();
    const srcArr = (from == null ? b.flat : b.byId.get(from) ?? []).map((c) => __spreadValues({}, c));
    if (from === to) {
      moveItemInArray(srcArr, e.previousIndex, e.currentIndex);
      this.rebuildAndSet(/* @__PURE__ */ new Map([[from, srcArr]]));
    } else {
      const dstArr = (to == null ? b.flat : b.byId.get(to) ?? []).map((c) => __spreadValues({}, c));
      const [moved] = srcArr.splice(e.previousIndex, 1);
      moved.groupId = to;
      dstArr.splice(e.currentIndex, 0, moved);
      this.rebuildAndSet(/* @__PURE__ */ new Map([[from, srcArr], [to, dstArr]]));
    }
    this.hover.set(null);
  }
  /** Kéo section đổi vị trí nhóm ⇒ reorder groups() + đồng bộ thứ tự columns. */
  onSectionDrop(e) {
    if (this.isFiltering())
      return;
    const gs = [...this.groups()];
    moveItemInArray(gs, e.previousIndex, e.currentIndex);
    this.groups.set(gs);
    this.rebuildAndSet(/* @__PURE__ */ new Map());
  }
  /** Dựng lại mảng columns theo thứ tự hiển thị: các nhóm (theo groups) → cột phẳng → cột tính toán. */
  rebuildAndSet(overrides) {
    const b = this.buckets();
    const pick = (id) => overrides.has(id) ? overrides.get(id) : id == null ? b.flat : b.byId.get(id) ?? [];
    const out = [];
    for (const g of this.groups())
      out.push(...pick(g.id));
    out.push(...pick(null));
    out.push(...b.comp);
    this.columns.set(out);
  }
  // ---- Menu nhóm: đổi tên / gỡ nhóm -----------------------------------------
  startRename(g) {
    this.renaming.set(g.id);
    this.renameText.set(g.title);
    this.openMenu.set(null);
  }
  commitRename(id) {
    if (this.renaming() !== id)
      return;
    const name = this.renameText().trim();
    if (name)
      this.groups.set(this.groups().map((g) => g.id === id ? __spreadProps(__spreadValues({}, g), { title: name }) : g));
    this.renaming.set(null);
  }
  removeGroup(id) {
    this.columns.set(this.columns().map((c) => c.groupId === id ? __spreadProps(__spreadValues({}, c), { groupId: null }) : c));
    this.groups.set(this.groups().filter((g) => g.id !== id));
    this.openMenu.set(null);
    this.rebuildAndSet(/* @__PURE__ */ new Map());
  }
  // ---- Popover tạo nhóm ------------------------------------------------------
  /** PUBLIC: mở/đóng popover tạo nhóm — gọi từ footer modal của workspace qua viewChild. */
  toggleCreate() {
    this.creating.set(!this.creating());
    if (this.creating()) {
      this.newGroupName.set("");
      this.newGroupPicks.set([]);
      this.openMenu.set(null);
    }
  }
  cancelCreate() {
    this.creating.set(false);
  }
  isPicked(key) {
    return this.newGroupPicks().includes(key);
  }
  togglePick(key) {
    this.newGroupPicks.set(this.isPicked(key) ? this.newGroupPicks().filter((k) => k !== key) : [...this.newGroupPicks(), key]);
  }
  createGroup() {
    const name = this.newGroupName().trim();
    if (!name)
      return;
    const id = "g-" + Math.random().toString(36).slice(2, 9);
    const picks = new Set(this.newGroupPicks());
    this.groups.set([...this.groups(), { id, title: name }]);
    this.columns.set(this.columns().map((c) => picks.has(c.key) && !c.computed ? __spreadProps(__spreadValues({}, c), { groupId: id }) : c));
    this.rebuildAndSet(/* @__PURE__ */ new Map());
    this.creating.set(false);
    this.newGroupName.set("");
    this.newGroupPicks.set([]);
  }
  /** Đóng menu/popover khi bấm ra ngoài. */
  closeOverlays() {
    this.openMenu.set(null);
    this.creating.set(false);
    this.renaming.set(null);
  }
  static {
    this.\u0275fac = function HrmColumnManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmColumnManager)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmColumnManager, selectors: [["hrm-column-manager"]], inputs: { columns: [1, "columns"], groups: [1, "groups"], title: [1, "title"], subtitle: [1, "subtitle"], saveViewLabel: [1, "saveViewLabel"], searchPlaceholder: [1, "searchPlaceholder"], colsShownLabel: [1, "colsShownLabel"], showAllLabel: [1, "showAllLabel"], hideAllLabel: [1, "hideAllLabel"], emptyText: [1, "emptyText"], emptyGroupText: [1, "emptyGroupText"], emptyFlatText: [1, "emptyFlatText"], ungroupedLabel: [1, "ungroupedLabel"], computedTitle: [1, "computedTitle"], formulaTag: [1, "formulaTag"], computedNameLabel: [1, "computedNameLabel"], computedNamePlaceholder: [1, "computedNamePlaceholder"], removeComputedLabel: [1, "removeComputedLabel"], formulaFieldLabel: [1, "formulaFieldLabel"], formulaPlaceholder: [1, "formulaPlaceholder"], expandFormulaLabel: [1, "expandFormulaLabel"], formulaEmptyText: [1, "formulaEmptyText"], createGroupLabel: [1, "createGroupLabel"], addComputedLabel: [1, "addComputedLabel"], renameLabel: [1, "renameLabel"], removeGroupLabel: [1, "removeGroupLabel"], keepColumnsHint: [1, "keepColumnsHint"], groupMenuLabel: [1, "groupMenuLabel"], newGroupNameLabel: [1, "newGroupNameLabel"], newGroupNamePlaceholder: [1, "newGroupNamePlaceholder"], pickColumnsLabel: [1, "pickColumnsLabel"], noColumnsText: [1, "noColumnsText"], cancelLabel: [1, "cancelLabel"], createLabel: [1, "createLabel"], configColumnLabel: [1, "configColumnLabel"], configFormulaLabel: [1, "configFormulaLabel"], reorderColLabel: [1, "reorderColLabel"], reorderGroupLabel: [1, "reorderGroupLabel"] }, outputs: { columns: "columnsChange", groups: "groupsChange", configColumn: "configColumn", configFormula: "configFormula", addComputed: "addComputed", saveView: "saveView", title: "titleChange", subtitle: "subtitleChange", saveViewLabel: "saveViewLabelChange", searchPlaceholder: "searchPlaceholderChange", colsShownLabel: "colsShownLabelChange", showAllLabel: "showAllLabelChange", hideAllLabel: "hideAllLabelChange", emptyText: "emptyTextChange", emptyGroupText: "emptyGroupTextChange", emptyFlatText: "emptyFlatTextChange", ungroupedLabel: "ungroupedLabelChange", computedTitle: "computedTitleChange", formulaTag: "formulaTagChange", computedNameLabel: "computedNameLabelChange", computedNamePlaceholder: "computedNamePlaceholderChange", removeComputedLabel: "removeComputedLabelChange", formulaFieldLabel: "formulaFieldLabelChange", formulaPlaceholder: "formulaPlaceholderChange", expandFormulaLabel: "expandFormulaLabelChange", formulaEmptyText: "formulaEmptyTextChange", createGroupLabel: "createGroupLabelChange", addComputedLabel: "addComputedLabelChange", renameLabel: "renameLabelChange", removeGroupLabel: "removeGroupLabelChange", keepColumnsHint: "keepColumnsHintChange", groupMenuLabel: "groupMenuLabelChange", newGroupNameLabel: "newGroupNameLabelChange", newGroupNamePlaceholder: "newGroupNamePlaceholderChange", pickColumnsLabel: "pickColumnsLabelChange", noColumnsText: "noColumnsTextChange", cancelLabel: "cancelLabelChange", createLabel: "createLabelChange", configColumnLabel: "configColumnLabelChange", configFormulaLabel: "configFormulaLabelChange", reorderColLabel: "reorderColLabelChange", reorderGroupLabel: "reorderGroupLabelChange" }, decls: 22, vars: 18, consts: [["role", "group", 1, "cm"], [1, "cm-tools"], [1, "cm-search"], [1, "cm-search-ic", 3, "icon", "size"], ["type", "text", 1, "cm-search-in", 3, "input", "value"], [1, "cm-count"], [1, "cm-bulk"], ["type", "button", 3, "click"], [3, "icon", "size"], [1, "cm-dot"], [1, "cm-scroll"], [1, "cm-empty"], [1, "cm-create-anchor"], ["role", "dialog", 1, "cm-pop"], [1, "cm-backdrop"], ["cdkDropList", "", 1, "cm-sections", 3, "cdkDropListDropped", "cdkDropListDisabled"], ["cdkDrag", "", 1, "cm-group", 3, "cdkDragDisabled", "is-hot"], [1, "cm-flat-lbl"], ["cdkDropList", "", 1, "cm-members", "cm-flat", 3, "cdkDropListEntered", "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDisabled"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "cm-row", "cm-row--click", 3, "cdkDragData", "cdkDragDisabled"], [1, "cm-computed"], ["cdkDrag", "", 1, "cm-group", 3, "cdkDragDisabled"], [1, "cm-ghead"], ["cdkDragHandle", "", 1, "cm-ghandle"], ["autofocus", "", 1, "cm-rename", 3, "value"], [1, "cm-gmenu-wrap"], ["type", "button", 1, "cm-icobtn", 3, "click"], ["role", "menu", 1, "cm-menu"], ["cdkDropList", "", 1, "cm-members", 3, "cdkDropListEntered", "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDisabled"], [1, "cm-slot"], ["autofocus", "", 1, "cm-rename", 3, "input", "keydown.enter", "keydown.escape", "blur", "value"], [1, "cm-gname"], [1, "cm-gcnt"], ["type", "button", "role", "menuitem", 3, "click"], ["type", "button", "role", "menuitem", 1, "is-danger", 3, "click"], [1, "cm-hint"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "cm-row", "cm-row--click", 3, "click", "keydown.enter", "cdkDragData", "cdkDragDisabled"], ["cdkDragHandle", "", 1, "cm-grip", 3, "click"], [1, "cm-chk", 3, "click"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "cm-cname"], [1, "cm-chead"], [1, "cm-comp-card"], [1, "cm-comp-top"], [1, "cm-comp-sigma"], [1, "cm-chk"], [1, "cm-comp-name", 3, "input", "value"], ["type", "button", 1, "cm-icobtn", "is-danger", 3, "click"], [1, "cm-fx-wrap"], ["rows", "2", 1, "cm-fx", 3, "input", "value"], ["type", "button", 1, "cm-fx-expand", 3, "click"], [1, "cm-fx-empty"], [1, "cm-fx-summary"], [1, "cm-field"], [1, "cm-field-lbl"], ["type", "text", 1, "cm-field-in", 3, "input", "value"], [1, "cm-pick-lbl"], [1, "cm-pick-list"], [1, "cm-pick"], [1, "cm-pop-ft"], ["type", "button", 1, "cm-btn", "is-ghost", 3, "click"], ["type", "button", 1, "cm-btn", "is-primary", 3, "click", "disabled"], ["type", "checkbox", 3, "change", "checked"], [1, "cm-backdrop", 3, "click"]], template: function HrmColumnManager_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "tabler-icon", 3);
        \u0275\u0275elementStart(4, "input", 4);
        \u0275\u0275listener("input", function HrmColumnManager_Template_input_input_4_listener($event) {
          return ctx.query.set($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function HrmColumnManager_Template_button_click_8_listener() {
          return ctx.showAll();
        });
        \u0275\u0275element(9, "tabler-icon", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "\xB7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function HrmColumnManager_Template_button_click_13_listener() {
          return ctx.hideAll();
        });
        \u0275\u0275element(14, "tabler-icon", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275conditionalCreate(17, HrmColumnManager_Conditional_17_Template, 2, 1, "div", 11)(18, HrmColumnManager_Conditional_18_Template, 9, 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275conditionalCreate(20, HrmColumnManager_Conditional_20_Template, 16, 9, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, HrmColumnManager_Conditional_21_Template, 1, 0, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.title());
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.icSearch)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.query());
        \u0275\u0275attribute("placeholder", ctx.searchPlaceholder())("aria-label", ctx.searchPlaceholder());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate3("", ctx.visibleCount(), "/", ctx.totalCount(), " ", ctx.colsShownLabel());
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.icEye)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.showAllLabel());
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.icEyeOff)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.hideAllLabel());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.totalCount() ? 17 : 18);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.creating() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.openMenu() || ctx.creating() ? 21 : -1);
      }
    }, dependencies: [FormsModule, CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], styles: ["/* angular:styles/component:css;44517aa03aa24a84c3468fb30c8eccd997010f4e71968c403f80bfccd33e5516;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-column-manager.ts */\n.cm {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n  font-family: var(--font-sans, inherit);\n  color: var(--text-body);\n}\n.cm-create-anchor {\n  position: absolute;\n  inset-inline-start: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n}\n.cm-head {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-4, 16px);\n  padding-bottom: var(--space-3, 12px);\n}\n.cm-head-txt {\n  flex: 1;\n  min-width: 0;\n}\n.cm-title {\n  margin: 0;\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.cm-sub {\n  margin: 2px 0 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.cm-tools {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  padding: var(--space-2, 8px) 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cm-search {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  max-width: 300px;\n}\n.cm-search-ic {\n  position: absolute;\n  inset-inline-start: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.cm-search-in {\n  width: 100%;\n  height: 32px;\n  padding: 0 10px 0 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-search-in:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-count {\n  flex: none;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.cm-bulk {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  margin-inline-start: auto;\n}\n.cm-bulk button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  padding: 4px 6px;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.cm-bulk button:hover {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cm-dot {\n  color: var(--text-soft);\n}\n.cm-scroll {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: var(--space-2, 8px) 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-scroll > * {\n  flex: 0 0 auto;\n}\n.cm-empty {\n  padding: 32px 16px;\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.cm-sections {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-group {\n  border-radius: var(--radius-md, 8px);\n  transition: background .12s ease, box-shadow .12s ease;\n}\n.cm-group.is-hot {\n  background: var(--primary-bg-subtle);\n  box-shadow: inset 0 0 0 1px var(--primary-border);\n}\n.cm-ghead {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 30px;\n  padding: 0 var(--space-1, 4px);\n}\n.cm-gname {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-sub);\n}\n.cm-gcnt {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 16px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface-subtle);\n  color: var(--text-soft);\n  font-size: var(--fs-10, 10px);\n  font-variant-numeric: tabular-nums;\n}\n.cm-gmenu-wrap {\n  position: relative;\n  margin-inline-start: auto;\n}\n.cm-rename {\n  flex: 1;\n  height: 24px;\n  padding: 0 8px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-rename:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-members {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-inline-start: var(--space-3, 12px);\n  padding-inline-start: var(--space-2, 8px);\n  border-inline-start: 1px solid var(--border-soft);\n  min-height: 4px;\n}\n.cm-flat {\n  margin-inline-start: 0;\n  padding-inline-start: 0;\n  border-inline-start: 0;\n}\n.cm-members.is-hot {\n  border-inline-start-color: var(--primary-border);\n}\n.cm-flat-lbl {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  letter-spacing: .03em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n  padding: var(--space-2, 8px) var(--space-1, 4px) 2px;\n}\n.cm-slot {\n  padding: 10px 12px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  text-align: center;\n}\n.cm-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 34px;\n  padding: 0 var(--space-1, 4px);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.cm-row:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-row.is-comp:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-row--click {\n  cursor: pointer;\n}\n.cm-row--click:focus-visible {\n  outline: 2px solid var(--primary-500, var(--primary-strong));\n  outline-offset: -2px;\n}\n.cm-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.cm-grip:hover {\n  color: var(--text-body);\n}\n.cm-grip:active {\n  cursor: grabbing;\n}\n.cm-grip.is-off {\n  opacity: .35;\n  cursor: default;\n  pointer-events: none;\n}\n.cm-grip.is-static {\n  cursor: default;\n  color: var(--text-soft);\n  opacity: .7;\n}\n.cm-ghandle {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 24px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.cm-ghandle:hover {\n  color: var(--text-body);\n}\n.cm-ghandle:active {\n  cursor: grabbing;\n}\n.cm-ghandle.is-off {\n  opacity: .35;\n  cursor: default;\n  pointer-events: none;\n}\n.cm-chk {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n}\n.cm-chk input {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary-base);\n  cursor: pointer;\n  margin: 0;\n}\n.cm-chk input:disabled {\n  cursor: not-allowed;\n  opacity: .6;\n}\n.cm-cname {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.cm-cname.is-off {\n  color: var(--text-soft);\n}\n.cm-ctype {\n  flex: none;\n  color: var(--text-soft);\n}\n.cm-tag {\n  flex: none;\n  border: 1px solid var(--primary-border);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border-radius: var(--radius-full);\n  padding: 1px 9px;\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.cm-tag:hover {\n  background: var(--primary-bg-soft, var(--primary-bg-subtle));\n}\n.cm-icobtn {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.cm-icobtn:hover {\n  background: var(--bg-surface);\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n  color: var(--text-strong);\n}\n.cm-row:hover .cm-icobtn {\n  color: var(--text-sub);\n}\n.cm-computed {\n  border-top: 1px solid var(--border-soft);\n  padding-top: var(--space-2, 8px);\n  margin-top: var(--space-1, 4px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-chead {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 28px;\n  padding: 0 var(--space-1, 4px);\n  color: var(--primary-base);\n}\n.cm-comp-card {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  padding: var(--space-2, 8px) var(--space-3, 12px) var(--space-3, 12px);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n}\n.cm-comp-top {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.cm-comp-sigma {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--primary-base);\n}\n.cm-comp-name {\n  flex: 1;\n  min-width: 0;\n  height: 30px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n}\n.cm-comp-name:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-icobtn.is-danger {\n  color: var(--text-soft);\n}\n.cm-icobtn.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n  box-shadow: inset 0 0 0 1px var(--error-border, var(--error-base));\n}\n.cm-fx-wrap {\n  display: flex;\n  align-items: stretch;\n  gap: var(--space-2, 8px);\n}\n.cm-fx {\n  flex: 1;\n  min-width: 0;\n  min-height: 44px;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n  resize: none;\n  font-size: var(--fs-13, 13px);\n  line-height: 1.5;\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace);\n}\n.cm-fx::placeholder {\n  color: var(--text-soft);\n}\n.cm-fx {\n  resize: vertical;\n}\n.cm-fx:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  background: var(--bg-surface);\n}\n.cm-fx-expand {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  align-self: stretch;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.cm-fx-expand:hover {\n  border-color: var(--primary-border);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cm-fx-expand:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  border-color: var(--primary-base);\n}\n.cm-fx-empty {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border: 1px solid var(--warning-border, var(--warning-base));\n  border-radius: var(--radius-sm, 6px);\n  background: var(--warning-bg);\n  color: var(--warning-base);\n  font-size: var(--fs-12, 12px);\n}\n.cm-fx-summary {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.cm-menu {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  z-index: 30;\n  min-width: 180px;\n  padding: 4px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.12));\n}\n.cm-menu button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 7px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  text-align: start;\n}\n.cm-menu button:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-menu button.is-danger {\n  color: var(--error-base);\n}\n.cm-menu button.is-danger:hover {\n  background: var(--error-bg);\n}\n.cm-hint {\n  color: var(--text-soft);\n  font-size: var(--fs-11, 11px);\n}\n.cm-foot {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  padding-top: var(--space-3, 12px);\n  border-top: 1px solid var(--border-soft);\n}\n.cm-create-wrap {\n  position: relative;\n}\n.cm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.cm-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  border-color: var(--primary-base);\n}\n.cm-btn.is-ghost {\n  border-color: transparent;\n  background: transparent;\n  color: var(--text-sub);\n}\n.cm-btn.is-ghost:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.cm-btn.is-dashed {\n  border-style: dashed;\n  color: var(--text-sub);\n}\n.cm-btn.is-dashed:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.cm-btn.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.cm-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.cm-btn.is-primary:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.cm-pop {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  inset-inline-start: 0;\n  z-index: 40;\n  width: 320px;\n  max-width: 88vw;\n  padding: 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-lg, 0 10px 30px rgba(0,0,0,.16));\n}\n.cm-field {\n  display: block;\n}\n.cm-field-lbl {\n  display: block;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  margin-bottom: 4px;\n}\n.cm-field-in {\n  width: 100%;\n  height: 34px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-field-in:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-pick-lbl {\n  margin: 10px 0 6px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.cm-pick-list {\n  max-height: 220px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md, 8px);\n  padding: 4px;\n}\n.cm-pick {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 6px;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n}\n.cm-pick:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-pick input {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary-base);\n  cursor: pointer;\n  margin: 0;\n}\n.cm-pick span {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.cm-pop-ft {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 12px;\n}\n.cm-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 20;\n}\n.cm-row.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.14));\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.cm-group.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-lg, 0 10px 30px rgba(0,0,0,.16));\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n}\n.cdk-drag-placeholder {\n  opacity: .35;\n}\n.cm-members.cdk-drop-list-dragging .cm-row:not(.cdk-drag-placeholder) {\n  transition: transform .16s cubic-bezier(0, 0, .2, 1);\n}\n/*# sourceMappingURL=hrm-column-manager.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmColumnManager, [{
    type: Component,
    args: [{ selector: "hrm-column-manager", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [FormsModule, CdkDropList, CdkDrag, CdkDragHandle, TablerIconComponent], template: `
    <section class="cm" role="group" [attr.aria-label]="title()">
      <!-- H\xC0NG C\xD4NG C\u1EE4: t\xECm c\u1ED9t \xB7 \u0111\u1EBFm hi\u1EC3n th\u1ECB \xB7 hi\u1EC7n/\u1EA9n t\u1EA5t c\u1EA3 -->
      <div class="cm-tools">
        <div class="cm-search">
          <tabler-icon class="cm-search-ic" [icon]="icSearch" [size]="16" />
          <input type="text" class="cm-search-in" [value]="query()"
            (input)="query.set($any($event.target).value)" [attr.placeholder]="searchPlaceholder()"
            [attr.aria-label]="searchPlaceholder()" />
        </div>
        <span class="cm-count">{{ visibleCount() }}/{{ totalCount() }} {{ colsShownLabel() }}</span>
        <div class="cm-bulk">
          <button type="button" (click)="showAll()"><tabler-icon [icon]="icEye" [size]="15" /> {{ showAllLabel() }}</button>
          <span class="cm-dot">\xB7</span>
          <button type="button" (click)="hideAll()"><tabler-icon [icon]="icEyeOff" [size]="15" /> {{ hideAllLabel() }}</button>
        </div>
      </div>

      <!-- DANH S\xC1CH -->
      <div class="cm-scroll">
        @if (!totalCount()) {
          <div class="cm-empty">{{ emptyText() }}</div>
        } @else {
          <!-- C\xC1C NH\xD3M C\u1ED8T: k\xE9o section \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED nh\xF3m -->
          <div class="cm-sections" cdkDropList [cdkDropListDisabled]="isFiltering()" (cdkDropListDropped)="onSectionDrop($event)">
            @for (g of groups(); track g.id) {
              <section class="cm-group" cdkDrag [cdkDragDisabled]="isFiltering()" [class.is-hot]="hover() === g.id">
                <header class="cm-ghead">
                  <span class="cm-ghandle" cdkDragHandle [attr.aria-label]="reorderGroupLabel()" [class.is-off]="isFiltering()">
                    <tabler-icon [icon]="icGrip" [size]="16" />
                  </span>
                  @if (renaming() === g.id) {
                    <input class="cm-rename" [value]="renameText()" autofocus
                      (input)="renameText.set($any($event.target).value)"
                      (keydown.enter)="commitRename(g.id)" (keydown.escape)="renaming.set(null)"
                      (blur)="commitRename(g.id)" [attr.aria-label]="renameLabel()" />
                  } @else {
                    <span class="cm-gname">{{ g.title }}</span>
                    <span class="cm-gcnt">{{ membersOf(g.id).length }}</span>
                  }
                  <div class="cm-gmenu-wrap">
                    <button type="button" class="cm-icobtn" [attr.aria-label]="groupMenuLabel()"
                      (click)="openMenu.set(openMenu() === g.id ? null : g.id)">
                      <tabler-icon [icon]="icDots" [size]="16" />
                    </button>
                    @if (openMenu() === g.id) {
                      <div class="cm-menu" role="menu">
                        <button type="button" role="menuitem" (click)="startRename(g)">
                          <tabler-icon [icon]="icPencil" [size]="15" /> {{ renameLabel() }}
                        </button>
                        <button type="button" role="menuitem" class="is-danger" (click)="removeGroup(g.id)">
                          <tabler-icon [icon]="icTrash" [size]="15" /> {{ removeGroupLabel() }} <span class="cm-hint">{{ keepColumnsHint() }}</span>
                        </button>
                      </div>
                    }
                  </div>
                </header>

                <div class="cm-members" [id]="'mem-' + g.id" cdkDropList [cdkDropListData]="g.id"
                  [cdkDropListConnectedTo]="memberListIds()" [cdkDropListDisabled]="isFiltering()"
                  (cdkDropListEntered)="hover.set(g.id)" (cdkDropListDropped)="onColDrop($event)">
                  @for (col of displayMembers(g.id); track col.key) {
                    <div class="cm-row cm-row--click" cdkDrag [cdkDragData]="col.key" [cdkDragDisabled]="isFiltering()"
                      (click)="configColumn.emit(col.key)" [attr.aria-label]="col.title" role="button" tabindex="0"
                      (keydown.enter)="configColumn.emit(col.key)">
                      <span class="cm-grip" cdkDragHandle [attr.aria-label]="reorderColLabel()" [class.is-off]="isFiltering()"
                        (click)="$event.stopPropagation()">
                        <tabler-icon [icon]="icGrip" [size]="16" />
                      </span>
                      <label class="cm-chk" (click)="$event.stopPropagation()">
                        <input type="checkbox" [checked]="col.visible !== false"
                          [disabled]="col.hideable === false" (change)="toggleVisible(col.key)"
                          [attr.aria-label]="col.title" />
                      </label>
                      <span class="cm-cname" [class.is-off]="col.visible === false">{{ col.title }}</span>
                    </div>
                  } @empty {
                    <div class="cm-slot">{{ emptyGroupText() }}</div>
                  }
                </div>
              </section>
            }
          </div>

          <!-- C\u1ED8T PH\u1EB2NG: kh\xF4ng thu\u1ED9c nh\xF3m -->
          @if (groups().length && displayFlat().length) {
            <div class="cm-flat-lbl">{{ ungroupedLabel() }}</div>
          }
          <div class="cm-members cm-flat" [id]="flatId" cdkDropList [cdkDropListData]="null"
            [cdkDropListConnectedTo]="memberListIds()" [cdkDropListDisabled]="isFiltering()"
            [class.is-hot]="hover() === flatId"
            (cdkDropListEntered)="hover.set(flatId)" (cdkDropListDropped)="onColDrop($event)">
            @for (col of displayFlat(); track col.key) {
              <div class="cm-row cm-row--click" cdkDrag [cdkDragData]="col.key" [cdkDragDisabled]="isFiltering()"
                (click)="configColumn.emit(col.key)" [attr.aria-label]="col.title" role="button" tabindex="0"
                (keydown.enter)="configColumn.emit(col.key)">
                <span class="cm-grip" cdkDragHandle [attr.aria-label]="reorderColLabel()" [class.is-off]="isFiltering()"
                  (click)="$event.stopPropagation()">
                  <tabler-icon [icon]="icGrip" [size]="16" />
                </span>
                <label class="cm-chk" (click)="$event.stopPropagation()">
                  <input type="checkbox" [checked]="col.visible !== false"
                    [disabled]="col.hideable === false" (change)="toggleVisible(col.key)"
                    [attr.aria-label]="col.title" />
                </label>
                <span class="cm-cname" [class.is-off]="col.visible === false">{{ col.title }}</span>
              </div>
            } @empty {
              @if (groups().length) { <div class="cm-slot">{{ emptyFlatText() }}</div> }
            }
          </div>

          <!-- C\u1ED8T T\xCDNH TO\xC1N: m\u1ED7i c\u1ED9t = 1 card c\xF3 \xF4 nh\u1EADp c\xF4ng th\u1EE9c inline -->
          @if (computedCols().length) {
            <section class="cm-computed">
              <header class="cm-chead">
                <tabler-icon [icon]="icSigma" [size]="16" />
                <span class="cm-gname">{{ computedTitle() }}</span>
                <span class="cm-gcnt">{{ computedCols().length }}</span>
              </header>
              @for (col of displayComputed(); track col.key) {
                <div class="cm-comp-card">
                  <!-- D\xF2ng 1: \u03A3 + t\xEAn c\u1ED9t (s\u1EEDa \u0111\u01B0\u1EE3c) + hi\u1EC7n/\u1EA9n + th\xF9ng r\xE1c -->
                  <div class="cm-comp-top">
                    <span class="cm-comp-sigma"><tabler-icon [icon]="icSigma" [size]="15" /></span>
                    <label class="cm-chk">
                      <input type="checkbox" [checked]="col.visible !== false"
                        [disabled]="col.hideable === false" (change)="toggleVisible(col.key)"
                        [attr.aria-label]="col.title" />
                    </label>
                    <input class="cm-comp-name" [value]="col.title"
                      (input)="setComputedTitle(col.key, $any($event.target).value)"
                      [attr.placeholder]="computedNamePlaceholder()" [attr.aria-label]="computedNameLabel()" />
                    <button type="button" class="cm-icobtn is-danger" [attr.aria-label]="removeComputedLabel()"
                      (click)="removeComputed(col.key)">
                      <tabler-icon [icon]="icTrash" [size]="16" />
                    </button>
                  </div>

                  <!-- D\xF2ng 2: \xF4 c\xF4ng th\u1EE9c inline + n\xFAt m\u1EDF r\u1ED9ng -->
                  <div class="cm-fx-wrap">
                    <textarea class="cm-fx" rows="2" [value]="col.formula ?? ''"
                      (input)="setFormula(col.key, $any($event.target).value)"
                      [attr.placeholder]="formulaPlaceholder()" [attr.aria-label]="formulaFieldLabel()"></textarea>
                    <button type="button" class="cm-fx-expand" (click)="configFormula.emit(col.key)"
                      [attr.aria-label]="expandFormulaLabel()">
                      <tabler-icon [icon]="icExpand" [size]="16" />
                    </button>
                  </div>

                  <!-- Empty-state: \xF4 c\xF4ng th\u1EE9c c\xF2n tr\u1ED1ng -->
                  @if (!col.formula?.trim()) {
                    <div class="cm-fx-empty">{{ formulaEmptyText() }}</div>
                    <div class="cm-fx-summary">{{ formulaEmptySummary(col.title) }}</div>
                  }
                </div>
              }
            </section>
          }
        }
      </div>

      <!-- Popover T\u1EA0O NH\xD3M C\u1ED8T \u2014 trigger t\u1EEB footer modal (workspace) qua toggleCreate(); anchor \u0111\xE1y panel, m\u1EDF L\xCAN. -->
      <div class="cm-create-anchor">
        @if (creating()) {
          <div class="cm-pop" role="dialog" [attr.aria-label]="createGroupLabel()">
            <label class="cm-field">
              <span class="cm-field-lbl">{{ newGroupNameLabel() }}</span>
              <input type="text" class="cm-field-in" [value]="newGroupName()"
                (input)="newGroupName.set($any($event.target).value)"
                [attr.placeholder]="newGroupNamePlaceholder()" />
            </label>
            <div class="cm-pick-lbl">{{ pickColumnsLabel() }}</div>
            <div class="cm-pick-list">
              @for (col of nonComputedCols(); track col.key) {
                <label class="cm-pick">
                  <input type="checkbox" [checked]="isPicked(col.key)" (change)="togglePick(col.key)" />
                  <span>{{ col.title }}</span>
                </label>
              } @empty {
                <div class="cm-slot">{{ noColumnsText() }}</div>
              }
            </div>
            <div class="cm-pop-ft">
              <button type="button" class="cm-btn is-ghost" (click)="cancelCreate()">{{ cancelLabel() }}</button>
              <button type="button" class="cm-btn is-primary" [disabled]="!canCreate()" (click)="createGroup()">{{ createLabel() }}</button>
            </div>
          </div>
        }
      </div>

      <!-- backdrop \u0111\xF3ng menu/popover khi b\u1EA5m ra ngo\xE0i -->
      @if (openMenu() || creating()) {
        <div class="cm-backdrop" (click)="closeOverlays()"></div>
      }
    </section>
  `, styles: ["/* angular:styles/component:css;44517aa03aa24a84c3468fb30c8eccd997010f4e71968c403f80bfccd33e5516;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-column-manager.ts */\n.cm {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: 100%;\n  font-family: var(--font-sans, inherit);\n  color: var(--text-body);\n}\n.cm-create-anchor {\n  position: absolute;\n  inset-inline-start: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n}\n.cm-head {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-4, 16px);\n  padding-bottom: var(--space-3, 12px);\n}\n.cm-head-txt {\n  flex: 1;\n  min-width: 0;\n}\n.cm-title {\n  margin: 0;\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.cm-sub {\n  margin: 2px 0 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.cm-tools {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  padding: var(--space-2, 8px) 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cm-search {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  max-width: 300px;\n}\n.cm-search-ic {\n  position: absolute;\n  inset-inline-start: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.cm-search-in {\n  width: 100%;\n  height: 32px;\n  padding: 0 10px 0 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-search-in:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-count {\n  flex: none;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.cm-bulk {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-1, 4px);\n  margin-inline-start: auto;\n}\n.cm-bulk button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: 0;\n  background: transparent;\n  padding: 4px 6px;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.cm-bulk button:hover {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cm-dot {\n  color: var(--text-soft);\n}\n.cm-scroll {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding: var(--space-2, 8px) 0;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-scroll > * {\n  flex: 0 0 auto;\n}\n.cm-empty {\n  padding: 32px 16px;\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n}\n.cm-sections {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-group {\n  border-radius: var(--radius-md, 8px);\n  transition: background .12s ease, box-shadow .12s ease;\n}\n.cm-group.is-hot {\n  background: var(--primary-bg-subtle);\n  box-shadow: inset 0 0 0 1px var(--primary-border);\n}\n.cm-ghead {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 30px;\n  padding: 0 var(--space-1, 4px);\n}\n.cm-gname {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-sub);\n}\n.cm-gcnt {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 16px;\n  padding: 0 5px;\n  border-radius: var(--radius-full);\n  background: var(--bg-surface-subtle);\n  color: var(--text-soft);\n  font-size: var(--fs-10, 10px);\n  font-variant-numeric: tabular-nums;\n}\n.cm-gmenu-wrap {\n  position: relative;\n  margin-inline-start: auto;\n}\n.cm-rename {\n  flex: 1;\n  height: 24px;\n  padding: 0 8px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-rename:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-members {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-inline-start: var(--space-3, 12px);\n  padding-inline-start: var(--space-2, 8px);\n  border-inline-start: 1px solid var(--border-soft);\n  min-height: 4px;\n}\n.cm-flat {\n  margin-inline-start: 0;\n  padding-inline-start: 0;\n  border-inline-start: 0;\n}\n.cm-members.is-hot {\n  border-inline-start-color: var(--primary-border);\n}\n.cm-flat-lbl {\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  letter-spacing: .03em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n  padding: var(--space-2, 8px) var(--space-1, 4px) 2px;\n}\n.cm-slot {\n  padding: 10px 12px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  border: 1px dashed var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  text-align: center;\n}\n.cm-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 34px;\n  padding: 0 var(--space-1, 4px);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n}\n.cm-row:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-row.is-comp:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-row--click {\n  cursor: pointer;\n}\n.cm-row--click:focus-visible {\n  outline: 2px solid var(--primary-500, var(--primary-strong));\n  outline-offset: -2px;\n}\n.cm-grip {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.cm-grip:hover {\n  color: var(--text-body);\n}\n.cm-grip:active {\n  cursor: grabbing;\n}\n.cm-grip.is-off {\n  opacity: .35;\n  cursor: default;\n  pointer-events: none;\n}\n.cm-grip.is-static {\n  cursor: default;\n  color: var(--text-soft);\n  opacity: .7;\n}\n.cm-ghandle {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 24px;\n  color: var(--text-soft);\n  cursor: grab;\n  border-radius: var(--radius-sm, 6px);\n}\n.cm-ghandle:hover {\n  color: var(--text-body);\n}\n.cm-ghandle:active {\n  cursor: grabbing;\n}\n.cm-ghandle.is-off {\n  opacity: .35;\n  cursor: default;\n  pointer-events: none;\n}\n.cm-chk {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n}\n.cm-chk input {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary-base);\n  cursor: pointer;\n  margin: 0;\n}\n.cm-chk input:disabled {\n  cursor: not-allowed;\n  opacity: .6;\n}\n.cm-cname {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.cm-cname.is-off {\n  color: var(--text-soft);\n}\n.cm-ctype {\n  flex: none;\n  color: var(--text-soft);\n}\n.cm-tag {\n  flex: none;\n  border: 1px solid var(--primary-border);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border-radius: var(--radius-full);\n  padding: 1px 9px;\n  font: inherit;\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.cm-tag:hover {\n  background: var(--primary-bg-soft, var(--primary-bg-subtle));\n}\n.cm-icobtn {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.cm-icobtn:hover {\n  background: var(--bg-surface);\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n  color: var(--text-strong);\n}\n.cm-row:hover .cm-icobtn {\n  color: var(--text-sub);\n}\n.cm-computed {\n  border-top: 1px solid var(--border-soft);\n  padding-top: var(--space-2, 8px);\n  margin-top: var(--space-1, 4px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.cm-chead {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  height: 28px;\n  padding: 0 var(--space-1, 4px);\n  color: var(--primary-base);\n}\n.cm-comp-card {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n  padding: var(--space-2, 8px) var(--space-3, 12px) var(--space-3, 12px);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n}\n.cm-comp-top {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.cm-comp-sigma {\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  width: 20px;\n  height: 26px;\n  color: var(--primary-base);\n}\n.cm-comp-name {\n  flex: 1;\n  min-width: 0;\n  height: 30px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n}\n.cm-comp-name:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-icobtn.is-danger {\n  color: var(--text-soft);\n}\n.cm-icobtn.is-danger:hover {\n  background: var(--error-bg);\n  color: var(--error-base);\n  box-shadow: inset 0 0 0 1px var(--error-border, var(--error-base));\n}\n.cm-fx-wrap {\n  display: flex;\n  align-items: stretch;\n  gap: var(--space-2, 8px);\n}\n.cm-fx {\n  flex: 1;\n  min-width: 0;\n  min-height: 44px;\n  padding: 8px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n  resize: none;\n  font-size: var(--fs-13, 13px);\n  line-height: 1.5;\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace);\n}\n.cm-fx::placeholder {\n  color: var(--text-soft);\n}\n.cm-fx {\n  resize: vertical;\n}\n.cm-fx:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  background: var(--bg-surface);\n}\n.cm-fx-expand {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  align-self: stretch;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  cursor: pointer;\n}\n.cm-fx-expand:hover {\n  border-color: var(--primary-border);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.cm-fx-expand:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  border-color: var(--primary-base);\n}\n.cm-fx-empty {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border: 1px solid var(--warning-border, var(--warning-base));\n  border-radius: var(--radius-sm, 6px);\n  background: var(--warning-bg);\n  color: var(--warning-base);\n  font-size: var(--fs-12, 12px);\n}\n.cm-fx-summary {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.cm-menu {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  z-index: 30;\n  min-width: 180px;\n  padding: 4px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.12));\n}\n.cm-menu button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 7px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  text-align: start;\n}\n.cm-menu button:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-menu button.is-danger {\n  color: var(--error-base);\n}\n.cm-menu button.is-danger:hover {\n  background: var(--error-bg);\n}\n.cm-hint {\n  color: var(--text-soft);\n  font-size: var(--fs-11, 11px);\n}\n.cm-foot {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-2, 8px);\n  padding-top: var(--space-3, 12px);\n  border-top: 1px solid var(--border-soft);\n}\n.cm-create-wrap {\n  position: relative;\n}\n.cm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n}\n.cm-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-btn:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n  border-color: var(--primary-base);\n}\n.cm-btn.is-ghost {\n  border-color: transparent;\n  background: transparent;\n  color: var(--text-sub);\n}\n.cm-btn.is-ghost:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.cm-btn.is-dashed {\n  border-style: dashed;\n  color: var(--text-sub);\n}\n.cm-btn.is-dashed:hover {\n  border-color: var(--primary-border);\n  color: var(--text-strong);\n}\n.cm-btn.is-primary {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.cm-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.cm-btn.is-primary:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.cm-pop {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  inset-inline-start: 0;\n  z-index: 40;\n  width: 320px;\n  max-width: 88vw;\n  padding: 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-lg, 0 10px 30px rgba(0,0,0,.16));\n}\n.cm-field {\n  display: block;\n}\n.cm-field-lbl {\n  display: block;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n  margin-bottom: 4px;\n}\n.cm-field-in {\n  width: 100%;\n  height: 34px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.cm-field-in:focus-visible {\n  outline: none;\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 2px var(--primary-bg-subtle);\n}\n.cm-pick-lbl {\n  margin: 10px 0 6px;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-sub);\n}\n.cm-pick-list {\n  max-height: 220px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md, 8px);\n  padding: 4px;\n}\n.cm-pick {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 6px;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n}\n.cm-pick:hover {\n  background: var(--bg-surface-subtle);\n}\n.cm-pick input {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary-base);\n  cursor: pointer;\n  margin: 0;\n}\n.cm-pick span {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n}\n.cm-pop-ft {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 12px;\n}\n.cm-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 20;\n}\n.cm-row.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.14));\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.cm-group.cdk-drag-preview {\n  box-shadow: var(--shadow-regular-lg, 0 10px 30px rgba(0,0,0,.16));\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n}\n.cdk-drag-placeholder {\n  opacity: .35;\n}\n.cm-members.cdk-drop-list-dragging .cm-row:not(.cdk-drag-placeholder) {\n  transition: transform .16s cubic-bezier(0, 0, .2, 1);\n}\n/*# sourceMappingURL=hrm-column-manager.css.map */\n"] }]
  }], null, { columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }, { type: Output, args: ["columnsChange"] }], groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: false }] }, { type: Output, args: ["groupsChange"] }], configColumn: [{ type: Output, args: ["configColumn"] }], configFormula: [{ type: Output, args: ["configFormula"] }], addComputed: [{ type: Output, args: ["addComputed"] }], saveView: [{ type: Output, args: ["saveView"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }, { type: Output, args: ["titleChange"] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }, { type: Output, args: ["subtitleChange"] }], saveViewLabel: [{ type: Input, args: [{ isSignal: true, alias: "saveViewLabel", required: false }] }, { type: Output, args: ["saveViewLabelChange"] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }, { type: Output, args: ["searchPlaceholderChange"] }], colsShownLabel: [{ type: Input, args: [{ isSignal: true, alias: "colsShownLabel", required: false }] }, { type: Output, args: ["colsShownLabelChange"] }], showAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "showAllLabel", required: false }] }, { type: Output, args: ["showAllLabelChange"] }], hideAllLabel: [{ type: Input, args: [{ isSignal: true, alias: "hideAllLabel", required: false }] }, { type: Output, args: ["hideAllLabelChange"] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }, { type: Output, args: ["emptyTextChange"] }], emptyGroupText: [{ type: Input, args: [{ isSignal: true, alias: "emptyGroupText", required: false }] }, { type: Output, args: ["emptyGroupTextChange"] }], emptyFlatText: [{ type: Input, args: [{ isSignal: true, alias: "emptyFlatText", required: false }] }, { type: Output, args: ["emptyFlatTextChange"] }], ungroupedLabel: [{ type: Input, args: [{ isSignal: true, alias: "ungroupedLabel", required: false }] }, { type: Output, args: ["ungroupedLabelChange"] }], computedTitle: [{ type: Input, args: [{ isSignal: true, alias: "computedTitle", required: false }] }, { type: Output, args: ["computedTitleChange"] }], formulaTag: [{ type: Input, args: [{ isSignal: true, alias: "formulaTag", required: false }] }, { type: Output, args: ["formulaTagChange"] }], computedNameLabel: [{ type: Input, args: [{ isSignal: true, alias: "computedNameLabel", required: false }] }, { type: Output, args: ["computedNameLabelChange"] }], computedNamePlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "computedNamePlaceholder", required: false }] }, { type: Output, args: ["computedNamePlaceholderChange"] }], removeComputedLabel: [{ type: Input, args: [{ isSignal: true, alias: "removeComputedLabel", required: false }] }, { type: Output, args: ["removeComputedLabelChange"] }], formulaFieldLabel: [{ type: Input, args: [{ isSignal: true, alias: "formulaFieldLabel", required: false }] }, { type: Output, args: ["formulaFieldLabelChange"] }], formulaPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "formulaPlaceholder", required: false }] }, { type: Output, args: ["formulaPlaceholderChange"] }], expandFormulaLabel: [{ type: Input, args: [{ isSignal: true, alias: "expandFormulaLabel", required: false }] }, { type: Output, args: ["expandFormulaLabelChange"] }], formulaEmptyText: [{ type: Input, args: [{ isSignal: true, alias: "formulaEmptyText", required: false }] }, { type: Output, args: ["formulaEmptyTextChange"] }], createGroupLabel: [{ type: Input, args: [{ isSignal: true, alias: "createGroupLabel", required: false }] }, { type: Output, args: ["createGroupLabelChange"] }], addComputedLabel: [{ type: Input, args: [{ isSignal: true, alias: "addComputedLabel", required: false }] }, { type: Output, args: ["addComputedLabelChange"] }], renameLabel: [{ type: Input, args: [{ isSignal: true, alias: "renameLabel", required: false }] }, { type: Output, args: ["renameLabelChange"] }], removeGroupLabel: [{ type: Input, args: [{ isSignal: true, alias: "removeGroupLabel", required: false }] }, { type: Output, args: ["removeGroupLabelChange"] }], keepColumnsHint: [{ type: Input, args: [{ isSignal: true, alias: "keepColumnsHint", required: false }] }, { type: Output, args: ["keepColumnsHintChange"] }], groupMenuLabel: [{ type: Input, args: [{ isSignal: true, alias: "groupMenuLabel", required: false }] }, { type: Output, args: ["groupMenuLabelChange"] }], newGroupNameLabel: [{ type: Input, args: [{ isSignal: true, alias: "newGroupNameLabel", required: false }] }, { type: Output, args: ["newGroupNameLabelChange"] }], newGroupNamePlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "newGroupNamePlaceholder", required: false }] }, { type: Output, args: ["newGroupNamePlaceholderChange"] }], pickColumnsLabel: [{ type: Input, args: [{ isSignal: true, alias: "pickColumnsLabel", required: false }] }, { type: Output, args: ["pickColumnsLabelChange"] }], noColumnsText: [{ type: Input, args: [{ isSignal: true, alias: "noColumnsText", required: false }] }, { type: Output, args: ["noColumnsTextChange"] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }, { type: Output, args: ["cancelLabelChange"] }], createLabel: [{ type: Input, args: [{ isSignal: true, alias: "createLabel", required: false }] }, { type: Output, args: ["createLabelChange"] }], configColumnLabel: [{ type: Input, args: [{ isSignal: true, alias: "configColumnLabel", required: false }] }, { type: Output, args: ["configColumnLabelChange"] }], configFormulaLabel: [{ type: Input, args: [{ isSignal: true, alias: "configFormulaLabel", required: false }] }, { type: Output, args: ["configFormulaLabelChange"] }], reorderColLabel: [{ type: Input, args: [{ isSignal: true, alias: "reorderColLabel", required: false }] }, { type: Output, args: ["reorderColLabelChange"] }], reorderGroupLabel: [{ type: Input, args: [{ isSignal: true, alias: "reorderGroupLabel", required: false }] }, { type: Output, args: ["reorderGroupLabelChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmColumnManager, { className: "HrmColumnManager", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-column-manager.ts", lineNumber: 408 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-column-inspector.ts
var _forTrack02 = ($index, $item) => $item.value;
var _forTrack12 = ($index, $item) => $item.id;
function HrmColumnInspector_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyLabel());
  }
}
function HrmColumnInspector_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 26);
    \u0275\u0275listener("input", function HrmColumnInspector_Conditional_1_Conditional_3_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nameDraft.set($event.target.value));
    })("keydown.enter", function HrmColumnInspector_Conditional_1_Conditional_3_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitName());
    })("keydown.escape", function HrmColumnInspector_Conditional_1_Conditional_3_Template_input_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelName());
    })("blur", function HrmColumnInspector_Conditional_1_Conditional_3_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commitName());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.nameDraft());
    \u0275\u0275attribute("aria-label", ctx_r0.renameLabel());
  }
}
function HrmColumnInspector_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.column().title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.column().title);
  }
}
function HrmColumnInspector_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startName());
    });
    \u0275\u0275element(1, "tabler-icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r0.renameLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icPencil)("size", 16);
  }
}
function HrmColumnInspector_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", w_r5.value)("selected", w_r5.value === ctx_r0.widthValue());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r5.label);
  }
}
function HrmColumnInspector_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r0.autoByTypeLabel(), ": ", ctx_r0.autoAlignWord(), ")");
  }
}
function HrmColumnInspector_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.currentFormat().sample);
  }
}
function HrmColumnInspector_Conditional_1_Conditional_49_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r8.sample);
  }
}
function HrmColumnInspector_Conditional_1_Conditional_49_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 32);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Conditional_49_For_3_Template_li_click_0_listener() {
      const o_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.setFormat(o_r8.value));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmColumnInspector_Conditional_1_Conditional_49_For_3_Conditional_3_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("sel", o_r8.value === ctx_r0.currentFormat().value);
    \u0275\u0275attribute("aria-selected", o_r8.value === ctx_r0.currentFormat().value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r8.sample ? 3 : -1);
  }
}
function HrmColumnInspector_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.fmtOpen.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ul", 30);
    \u0275\u0275repeaterCreate(2, HrmColumnInspector_Conditional_1_Conditional_49_For_3_Template, 4, 5, "li", 31, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.formatOptions());
  }
}
function HrmColumnInspector_Conditional_1_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", g_r9.id)("selected", g_r9.id === ctx_r0.groupValue());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r9.title);
  }
}
function HrmColumnInspector_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, HrmColumnInspector_Conditional_1_Conditional_3_Template, 1, 2, "input", 4)(4, HrmColumnInspector_Conditional_1_Conditional_4_Template, 2, 2, "div", 5);
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, HrmColumnInspector_Conditional_1_Conditional_7_Template, 2, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "select", 12);
    \u0275\u0275listener("change", function HrmColumnInspector_Conditional_1_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ width: $event.target.value }));
    });
    \u0275\u0275repeaterCreate(15, HrmColumnInspector_Conditional_1_For_16_Template, 2, 3, "option", 13, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "tabler-icon", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 9)(19, "span", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ align: "auto" }));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ align: "left" }));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ align: "center" }));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ align: "right" }));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, HrmColumnInspector_Conditional_1_Conditional_31_Template, 2, 2, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "span", 10);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 19)(36, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ content: "truncate" }));
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ content: "wrap" }));
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 9)(41, "span", 10);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 20)(44, "button", 21);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fmtOpen.set(!ctx_r0.fmtOpen()));
    });
    \u0275\u0275elementStart(45, "span", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, HrmColumnInspector_Conditional_1_Conditional_47_Template, 2, 1, "span", 23);
    \u0275\u0275element(48, "tabler-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, HrmColumnInspector_Conditional_1_Conditional_49_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 8);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 9)(53, "span", 10);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 11)(56, "select", 12);
    \u0275\u0275listener("change", function HrmColumnInspector_Conditional_1_Template_select_change_56_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ groupId: $event.target.value || null }));
    });
    \u0275\u0275elementStart(57, "option", 25);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(59, HrmColumnInspector_Conditional_1_For_60_Template, 2, 3, "option", 13, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "tabler-icon", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 9)(63, "span", 10);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 19)(66, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ pin: "none" }));
    });
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ pin: "left" }));
    });
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 17);
    \u0275\u0275listener("click", function HrmColumnInspector_Conditional_1_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.patch({ pin: "right" }));
    });
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.editingName() ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.columnWordLabel(), " ", ctx_r0.typeWord());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.editingName() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.displaySectionLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.widthLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.widthValue());
    \u0275\u0275attribute("aria-label", ctx_r0.widthLabel());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.widthOptions());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icChevron)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.alignLabel());
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r0.alignLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.align() === "auto");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alignAutoLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.align() === "left");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alignLeftLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.align() === "center");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alignCenterLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.align() === "right");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alignRightLabel());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.align() === "auto" ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contentLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.contentLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.content() === "truncate");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.contentTruncateLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.content() === "wrap");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.contentWrapLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r0.fmtOpen());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r0.fmtOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentFormat().label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.currentFormat().sample ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icChevron)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fmtOpen() ? 49 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.positionSectionLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.groupLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.groupValue());
    \u0275\u0275attribute("aria-label", ctx_r0.groupLabel());
    \u0275\u0275advance();
    \u0275\u0275property("selected", ctx_r0.groupValue() === "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.noGroupLabel());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.groups());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icChevron)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pinLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.pinLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.pin() === "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pinNoneLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.pin() === "left");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pinLeftLabel());
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r0.pin() === "right");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pinRightLabel());
  }
}
var HrmColumnInspector = class _HrmColumnInspector {
  constructor() {
    this.column = model(null, ...ngDevMode ? [{ debugName: "column" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groups = input([], ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.emptyLabel = input("Ch\u1ECDn m\u1ED9t c\u1ED9t \u0111\u1EC3 xem c\u1EA5u h\xECnh.", ...ngDevMode ? [{ debugName: "emptyLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.renameLabel = input("\u0110\u1ED5i t\xEAn c\u1ED9t", ...ngDevMode ? [{ debugName: "renameLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnWordLabel = input("C\u1ED9t", ...ngDevMode ? [{ debugName: "columnWordLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.displaySectionLabel = input("HI\u1EC2N TH\u1ECA", ...ngDevMode ? [{ debugName: "displaySectionLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.positionSectionLabel = input("V\u1ECA TR\xCD", ...ngDevMode ? [{ debugName: "positionSectionLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widthLabel = input("\u0110\u1ED9 r\u1ED9ng", ...ngDevMode ? [{ debugName: "widthLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignLabel = input("C\u0103n l\u1EC1", ...ngDevMode ? [{ debugName: "alignLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contentLabel = input("N\u1ED9i dung", ...ngDevMode ? [{ debugName: "contentLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formatLabel = input("\u0110\u1ECBnh d\u1EA1ng", ...ngDevMode ? [{ debugName: "formatLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupLabel = input("Nh\xF3m c\u1ED9t", ...ngDevMode ? [{ debugName: "groupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinLabel = input("Ghim", ...ngDevMode ? [{ debugName: "pinLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autoLabel = input("T\u1EF1 \u0111\u1ED9ng", ...ngDevMode ? [{ debugName: "autoLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autoByTypeLabel = input("theo ki\u1EC3u d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "autoByTypeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.noGroupLabel = input("Kh\xF4ng thu\u1ED9c nh\xF3m", ...ngDevMode ? [{ debugName: "noGroupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignAutoLabel = input("T\u1EF1 \u0111\u1ED9ng", ...ngDevMode ? [{ debugName: "alignAutoLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignLeftLabel = input("Tr\xE1i", ...ngDevMode ? [{ debugName: "alignLeftLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignCenterLabel = input("Gi\u1EEFa", ...ngDevMode ? [{ debugName: "alignCenterLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alignRightLabel = input("Ph\u1EA3i", ...ngDevMode ? [{ debugName: "alignRightLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contentTruncateLabel = input("C\u1EAFt m\u1ED9t d\xF2ng", ...ngDevMode ? [{ debugName: "contentTruncateLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contentWrapLabel = input("Xu\u1ED1ng d\xF2ng", ...ngDevMode ? [{ debugName: "contentWrapLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinNoneLabel = input("Kh\xF4ng", ...ngDevMode ? [{ debugName: "pinNoneLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinLeftLabel = input("Tr\xE1i", ...ngDevMode ? [{ debugName: "pinLeftLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinRightLabel = input("Ph\u1EA3i", ...ngDevMode ? [{ debugName: "pinRightLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icPencil = Pencil;
    this.icChevron = ChevronDown;
    this.fmtOpen = signal(false, ...ngDevMode ? [{ debugName: "fmtOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingName = signal(false, ...ngDevMode ? [{ debugName: "editingName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nameDraft = signal("", ...ngDevMode ? [{ debugName: "nameDraft" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widthPresets = ["120px", "160px", "200px", "240px"];
    this.type = computed(() => this.column()?.type ?? "text", ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    ));
    this.align = computed(() => this.column()?.align ?? "auto", ...ngDevMode ? [{ debugName: "align" }] : (
      /* istanbul ignore next */
      []
    ));
    this.content = computed(() => this.column()?.content ?? "truncate", ...ngDevMode ? [{ debugName: "content" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pin = computed(() => this.column()?.pin ?? "none", ...ngDevMode ? [{ debugName: "pin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widthValue = computed(() => {
      const w = this.column()?.width;
      return !w || w === "auto" ? "" : w;
    }, ...ngDevMode ? [{ debugName: "widthValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupValue = computed(() => this.column()?.groupId ?? "", ...ngDevMode ? [{ debugName: "groupValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widthOptions = computed(() => {
      const opts = [{ value: "", label: this.autoLabel() }, ...this.widthPresets.map((p) => ({ value: p, label: p }))];
      const w = this.widthValue();
      if (w && !this.widthPresets.includes(w))
        opts.splice(1, 0, { value: w, label: w });
      return opts;
    }, ...ngDevMode ? [{ debugName: "widthOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formatOptions = computed(() => [
      { value: "", label: this.autoLabel(), sample: "" },
      ...HRM_FORMAT_OPTIONS[this.type()]
    ], ...ngDevMode ? [{ debugName: "formatOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentFormat = computed(() => {
      const v = this.column()?.format ?? "";
      const opts = this.formatOptions();
      return opts.find((o) => o.value === v) ?? opts[0];
    }, ...ngDevMode ? [{ debugName: "currentFormat" }] : (
      /* istanbul ignore next */
      []
    ));
    this.typeWord = computed(() => {
      switch (this.type()) {
        case "number":
          return "s\u1ED1";
        case "money":
          return "ti\u1EC1n";
        case "date":
          return "ng\xE0y";
        case "percent":
          return "ph\u1EA7n tr\u0103m";
        case "status":
          return "tr\u1EA1ng th\xE1i";
        case "user":
          return "ng\u01B0\u1EDDi d\xF9ng";
        case "boolean":
          return "\u0111\xFAng/sai";
        default:
          return "v\u0103n b\u1EA3n";
      }
    }, ...ngDevMode ? [{ debugName: "typeWord" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autoAlignWord = computed(() => {
      switch (hrmAutoAlign(this.column()?.type)) {
        case "right":
          return "ph\u1EA3i";
        case "center":
          return "gi\u1EEFa";
        default:
          return "tr\xE1i";
      }
    }, ...ngDevMode ? [{ debugName: "autoAlignWord" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** Ghi 1 phần thay đổi vào column (two-way) — bỏ qua khi chưa chọn cột. */
  patch(p) {
    const c = this.column();
    if (!c)
      return;
    this.column.set(__spreadValues(__spreadValues({}, c), p));
  }
  /** Chọn định dạng ('' = Tự động) rồi đóng dropdown. */
  setFormat(value) {
    this.patch({ format: value });
    this.fmtOpen.set(false);
  }
  /** Đổi tên cột inline. */
  startName() {
    this.nameDraft.set(this.column()?.title ?? "");
    this.editingName.set(true);
  }
  commitName() {
    if (!this.editingName())
      return;
    const next = this.nameDraft().trim();
    if (next)
      this.patch({ title: next });
    this.editingName.set(false);
  }
  cancelName() {
    this.editingName.set(false);
  }
  static {
    this.\u0275fac = function HrmColumnInspector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmColumnInspector)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmColumnInspector, selectors: [["hrm-column-inspector"]], hostAttrs: [1, "hrm-column-inspector"], inputs: { column: [1, "column"], groups: [1, "groups"], emptyLabel: [1, "emptyLabel"], renameLabel: [1, "renameLabel"], columnWordLabel: [1, "columnWordLabel"], displaySectionLabel: [1, "displaySectionLabel"], positionSectionLabel: [1, "positionSectionLabel"], widthLabel: [1, "widthLabel"], alignLabel: [1, "alignLabel"], contentLabel: [1, "contentLabel"], formatLabel: [1, "formatLabel"], groupLabel: [1, "groupLabel"], pinLabel: [1, "pinLabel"], autoLabel: [1, "autoLabel"], autoByTypeLabel: [1, "autoByTypeLabel"], noGroupLabel: [1, "noGroupLabel"], alignAutoLabel: [1, "alignAutoLabel"], alignLeftLabel: [1, "alignLeftLabel"], alignCenterLabel: [1, "alignCenterLabel"], alignRightLabel: [1, "alignRightLabel"], contentTruncateLabel: [1, "contentTruncateLabel"], contentWrapLabel: [1, "contentWrapLabel"], pinNoneLabel: [1, "pinNoneLabel"], pinLeftLabel: [1, "pinLeftLabel"], pinRightLabel: [1, "pinRightLabel"] }, outputs: { column: "columnChange" }, decls: 2, vars: 1, consts: [[1, "ci-empty"], [1, "ci"], [1, "ci-head"], [1, "ci-head-main"], ["type", "text", "autofocus", "", 1, "ci-name-inp", 3, "value"], [1, "ci-name", 3, "title"], [1, "ci-type"], ["type", "button", 1, "ci-pen"], [1, "ci-sec"], [1, "ci-row"], [1, "ci-lb"], [1, "ci-sel", "ci-ctl"], [3, "change", "value"], [3, "value", "selected"], [1, "ci-sel-ic", 3, "icon", "size"], [1, "ci-ctl", "ci-ctl-col"], ["role", "group", 1, "ci-seg"], ["type", "button", 3, "click"], [1, "ci-hint"], ["role", "group", 1, "ci-seg", "ci-ctl"], [1, "ci-dd", "ci-ctl"], ["type", "button", 1, "ci-dd-tg", 3, "click"], [1, "ci-dd-lb"], [1, "ci-dd-sample"], [1, "ci-dd-ic", 3, "icon", "size"], ["value", "", 3, "selected"], ["type", "text", "autofocus", "", 1, "ci-name-inp", 3, "input", "keydown.enter", "keydown.escape", "blur", "value"], ["type", "button", 1, "ci-pen", 3, "click"], [3, "icon", "size"], ["type", "button", "tabindex", "-1", "aria-hidden", "true", 1, "ci-scrim", 3, "click"], ["role", "listbox", 1, "ci-pop"], ["role", "option", 3, "sel"], ["role", "option", 3, "click"], [1, "ci-opt-lb"], [1, "ci-opt-sample"]], template: function HrmColumnInspector_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmColumnInspector_Conditional_0_Template, 2, 1, "div", 0)(1, HrmColumnInspector_Conditional_1_Template, 72, 61, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.column() ? 0 : 1);
      }
    }, dependencies: [TablerIconComponent], styles: ["/* angular:styles/component:css;6f279beeabc647ff97e4e13b07fc681f60b39056d52a691e2bc0aaa9e5283bf3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-column-inspector.ts */\n.hrm-column-inspector {\n  display: block;\n  background: var(--bg-surface);\n  font-family: var(--font-sans);\n}\n.ci-empty {\n  padding: var(--space-6, 24px) var(--space-4, 16px);\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n.ci {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-4, 16px);\n}\n.ci-head {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2, 8px);\n  padding-bottom: var(--space-3, 12px);\n  border-bottom: 1px solid var(--border-soft);\n}\n.ci-head-main {\n  flex: 1;\n  min-width: 0;\n}\n.ci-name {\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ci-type {\n  margin-top: 2px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.ci-name-inp {\n  width: 100%;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n}\n.ci-name-inp:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.ci-pen {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.ci-pen:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.ci-sec {\n  margin: var(--space-4, 16px) 0 var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.ci-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3, 12px);\n  min-height: 36px;\n  padding: var(--space-1, 4px) 0;\n}\n.ci-lb {\n  flex: none;\n  padding-top: 8px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.ci-ctl {\n  flex: 0 0 auto;\n}\n.ci-ctl-col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: var(--space-1, 4px);\n}\n.ci-hint {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.ci-sel {\n  position: relative;\n  width: 176px;\n}\n.ci-sel select {\n  width: 100%;\n  height: 34px;\n  padding: 0 30px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.ci-sel select:hover {\n  border-color: var(--primary-border, var(--border-sub));\n}\n.ci-sel select:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.ci-sel-ic {\n  position: absolute;\n  inset-inline-end: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.ci-seg {\n  display: inline-flex;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  overflow: hidden;\n}\n.ci-seg button {\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ci-seg button + button {\n  border-inline-start: 1px solid var(--border-sub);\n}\n.ci-seg button:hover {\n  color: var(--text-strong);\n}\n.ci-seg button.on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.ci-seg button:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: -2px;\n}\n.ci-dd {\n  position: relative;\n  width: 200px;\n}\n.ci-dd-tg {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  height: 34px;\n  padding: 0 8px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  text-align: start;\n}\n.ci-dd-tg:hover {\n  border-color: var(--primary-border, var(--border-sub));\n}\n.ci-dd.open .ci-dd-tg,\n.ci-dd-tg:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.ci-dd-lb {\n  flex: none;\n  color: var(--text-body);\n}\n.ci-dd-sample {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: end;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n}\n.ci-dd-ic {\n  flex: none;\n  margin-inline-start: auto;\n  color: var(--text-soft);\n}\n.ci-dd.open .ci-dd-ic {\n  color: var(--primary-base);\n}\n.ci-scrim {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  border: 0;\n  background: transparent;\n  cursor: default;\n}\n.ci-pop {\n  position: absolute;\n  z-index: 41;\n  top: calc(100% + 4px);\n  inset-inline-end: 0;\n  min-width: 100%;\n  margin: 0;\n  padding: var(--space-1, 4px);\n  list-style: none;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.12));\n  max-height: 260px;\n  overflow-y: auto;\n}\n.ci-pop li {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  min-height: 32px;\n  padding: 0 10px;\n  border-radius: var(--radius-sm, 6px);\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  cursor: pointer;\n}\n.ci-pop li:hover {\n  background: var(--bg-surface-subtle);\n}\n.ci-pop li.sel {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.ci-opt-lb {\n  flex: none;\n}\n.ci-opt-sample {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: end;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n}\n.ci-pop li.sel .ci-opt-sample {\n  color: var(--primary-base);\n  opacity: .7;\n}\n/*# sourceMappingURL=hrm-column-inspector.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmColumnInspector, [{
    type: Component,
    args: [{ selector: "hrm-column-inspector", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [TablerIconComponent], template: `
    @if (!column()) {
      <div class="ci-empty">{{ emptyLabel() }}</div>
    } @else {
      <div class="ci">
        <!-- \u0110\u1EA7u panel: t\xEAn c\u1ED9t + ki\u1EC3u + n\xFAt \u0111\u1ED5i t\xEAn inline -->
        <header class="ci-head">
          <div class="ci-head-main">
            @if (editingName()) {
              <input class="ci-name-inp" type="text" [value]="nameDraft()" autofocus
                [attr.aria-label]="renameLabel()"
                (input)="nameDraft.set($any($event.target).value)"
                (keydown.enter)="commitName()" (keydown.escape)="cancelName()" (blur)="commitName()" />
            } @else {
              <div class="ci-name" [title]="column()!.title">{{ column()!.title }}</div>
            }
            <div class="ci-type">{{ columnWordLabel() }} {{ typeWord() }}</div>
          </div>
          @if (!editingName()) {
            <button type="button" class="ci-pen" [attr.aria-label]="renameLabel()" (click)="startName()">
              <tabler-icon [icon]="icPencil" [size]="16" />
            </button>
          }
        </header>

        <!-- Nh\xF3m HI\u1EC2N TH\u1ECA -->
        <div class="ci-sec">{{ displaySectionLabel() }}</div>

        <div class="ci-row">
          <span class="ci-lb">{{ widthLabel() }}</span>
          <div class="ci-sel ci-ctl">
            <select [value]="widthValue()" [attr.aria-label]="widthLabel()"
              (change)="patch({ width: $any($event.target).value })">
              @for (w of widthOptions(); track w.value) {
                <option [value]="w.value" [selected]="w.value === widthValue()">{{ w.label }}</option>
              }
            </select>
            <tabler-icon class="ci-sel-ic" [icon]="icChevron" [size]="16" />
          </div>
        </div>

        <div class="ci-row">
          <span class="ci-lb">{{ alignLabel() }}</span>
          <div class="ci-ctl ci-ctl-col">
            <div class="ci-seg" role="group" [attr.aria-label]="alignLabel()">
              <button type="button" [class.on]="align() === 'auto'" (click)="patch({ align: 'auto' })">{{ alignAutoLabel() }}</button>
              <button type="button" [class.on]="align() === 'left'" (click)="patch({ align: 'left' })">{{ alignLeftLabel() }}</button>
              <button type="button" [class.on]="align() === 'center'" (click)="patch({ align: 'center' })">{{ alignCenterLabel() }}</button>
              <button type="button" [class.on]="align() === 'right'" (click)="patch({ align: 'right' })">{{ alignRightLabel() }}</button>
            </div>
            @if (align() === 'auto') {
              <span class="ci-hint">({{ autoByTypeLabel() }}: {{ autoAlignWord() }})</span>
            }
          </div>
        </div>

        <div class="ci-row">
          <span class="ci-lb">{{ contentLabel() }}</span>
          <div class="ci-seg ci-ctl" role="group" [attr.aria-label]="contentLabel()">
            <button type="button" [class.on]="content() === 'truncate'" (click)="patch({ content: 'truncate' })">{{ contentTruncateLabel() }}</button>
            <button type="button" [class.on]="content() === 'wrap'" (click)="patch({ content: 'wrap' })">{{ contentWrapLabel() }}</button>
          </div>
        </div>

        <div class="ci-row">
          <span class="ci-lb">{{ formatLabel() }}</span>
          <!-- Dropdown tu\u1EF3 bi\u1EBFn \u0111\u1EC3 hi\u1EC7n label + m\u1EABu (sample) m\u1EDD b\xEAn ph\u1EA3i m\u1ED7i option -->
          <div class="ci-dd ci-ctl" [class.open]="fmtOpen()">
            <button type="button" class="ci-dd-tg" [attr.aria-expanded]="fmtOpen()" (click)="fmtOpen.set(!fmtOpen())">
              <span class="ci-dd-lb">{{ currentFormat().label }}</span>
              @if (currentFormat().sample) { <span class="ci-dd-sample">{{ currentFormat().sample }}</span> }
              <tabler-icon class="ci-dd-ic" [icon]="icChevron" [size]="16" />
            </button>
            @if (fmtOpen()) {
              <button type="button" class="ci-scrim" tabindex="-1" aria-hidden="true" (click)="fmtOpen.set(false)"></button>
              <ul class="ci-pop" role="listbox">
                @for (o of formatOptions(); track o.value) {
                  <li role="option" [attr.aria-selected]="o.value === currentFormat().value"
                    [class.sel]="o.value === currentFormat().value" (click)="setFormat(o.value)">
                    <span class="ci-opt-lb">{{ o.label }}</span>
                    @if (o.sample) { <span class="ci-opt-sample">{{ o.sample }}</span> }
                  </li>
                }
              </ul>
            }
          </div>
        </div>

        <!-- Nh\xF3m V\u1ECA TR\xCD -->
        <div class="ci-sec">{{ positionSectionLabel() }}</div>

        <div class="ci-row">
          <span class="ci-lb">{{ groupLabel() }}</span>
          <div class="ci-sel ci-ctl">
            <select [value]="groupValue()" [attr.aria-label]="groupLabel()"
              (change)="patch({ groupId: $any($event.target).value || null })">
              <option value="" [selected]="groupValue() === ''">{{ noGroupLabel() }}</option>
              @for (g of groups(); track g.id) {
                <option [value]="g.id" [selected]="g.id === groupValue()">{{ g.title }}</option>
              }
            </select>
            <tabler-icon class="ci-sel-ic" [icon]="icChevron" [size]="16" />
          </div>
        </div>

        <div class="ci-row">
          <span class="ci-lb">{{ pinLabel() }}</span>
          <div class="ci-seg ci-ctl" role="group" [attr.aria-label]="pinLabel()">
            <button type="button" [class.on]="pin() === 'none'" (click)="patch({ pin: 'none' })">{{ pinNoneLabel() }}</button>
            <button type="button" [class.on]="pin() === 'left'" (click)="patch({ pin: 'left' })">{{ pinLeftLabel() }}</button>
            <button type="button" [class.on]="pin() === 'right'" (click)="patch({ pin: 'right' })">{{ pinRightLabel() }}</button>
          </div>
        </div>
      </div>
    }
  `, host: { class: "hrm-column-inspector" }, styles: ["/* angular:styles/component:css;6f279beeabc647ff97e4e13b07fc681f60b39056d52a691e2bc0aaa9e5283bf3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-column-inspector.ts */\n.hrm-column-inspector {\n  display: block;\n  background: var(--bg-surface);\n  font-family: var(--font-sans);\n}\n.ci-empty {\n  padding: var(--space-6, 24px) var(--space-4, 16px);\n  text-align: center;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-soft);\n}\n.ci {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-4, 16px);\n}\n.ci-head {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-2, 8px);\n  padding-bottom: var(--space-3, 12px);\n  border-bottom: 1px solid var(--border-soft);\n}\n.ci-head-main {\n  flex: 1;\n  min-width: 0;\n}\n.ci-name {\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ci-type {\n  margin-top: 2px;\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.ci-name-inp {\n  width: 100%;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font: inherit;\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n}\n.ci-name-inp:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.ci-pen {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.ci-pen:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.ci-sec {\n  margin: var(--space-4, 16px) 0 var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.ci-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3, 12px);\n  min-height: 36px;\n  padding: var(--space-1, 4px) 0;\n}\n.ci-lb {\n  flex: none;\n  padding-top: 8px;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.ci-ctl {\n  flex: 0 0 auto;\n}\n.ci-ctl-col {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: var(--space-1, 4px);\n}\n.ci-hint {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.ci-sel {\n  position: relative;\n  width: 176px;\n}\n.ci-sel select {\n  width: 100%;\n  height: 34px;\n  padding: 0 30px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n.ci-sel select:hover {\n  border-color: var(--primary-border, var(--border-sub));\n}\n.ci-sel select:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.ci-sel-ic {\n  position: absolute;\n  inset-inline-end: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.ci-seg {\n  display: inline-flex;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  overflow: hidden;\n}\n.ci-seg button {\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  padding: 0 10px;\n  border: 0;\n  background: transparent;\n  color: var(--text-sub);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ci-seg button + button {\n  border-inline-start: 1px solid var(--border-sub);\n}\n.ci-seg button:hover {\n  color: var(--text-strong);\n}\n.ci-seg button.on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.ci-seg button:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: -2px;\n}\n.ci-dd {\n  position: relative;\n  width: 200px;\n}\n.ci-dd-tg {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  width: 100%;\n  height: 34px;\n  padding: 0 8px 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  cursor: pointer;\n  text-align: start;\n}\n.ci-dd-tg:hover {\n  border-color: var(--primary-border, var(--border-sub));\n}\n.ci-dd.open .ci-dd-tg,\n.ci-dd-tg:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.ci-dd-lb {\n  flex: none;\n  color: var(--text-body);\n}\n.ci-dd-sample {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: end;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n}\n.ci-dd-ic {\n  flex: none;\n  margin-inline-start: auto;\n  color: var(--text-soft);\n}\n.ci-dd.open .ci-dd-ic {\n  color: var(--primary-base);\n}\n.ci-scrim {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  border: 0;\n  background: transparent;\n  cursor: default;\n}\n.ci-pop {\n  position: absolute;\n  z-index: 41;\n  top: calc(100% + 4px);\n  inset-inline-end: 0;\n  min-width: 100%;\n  margin: 0;\n  padding: var(--space-1, 4px);\n  list-style: none;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  box-shadow: var(--shadow-regular-md, 0 6px 20px rgba(0,0,0,.12));\n  max-height: 260px;\n  overflow-y: auto;\n}\n.ci-pop li {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  min-height: 32px;\n  padding: 0 10px;\n  border-radius: var(--radius-sm, 6px);\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  cursor: pointer;\n}\n.ci-pop li:hover {\n  background: var(--bg-surface-subtle);\n}\n.ci-pop li.sel {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: var(--font-medium, 500);\n}\n.ci-opt-lb {\n  flex: none;\n}\n.ci-opt-sample {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: end;\n  color: var(--text-soft);\n  font-size: var(--fs-12, 12px);\n}\n.ci-pop li.sel .ci-opt-sample {\n  color: var(--primary-base);\n  opacity: .7;\n}\n/*# sourceMappingURL=hrm-column-inspector.css.map */\n"] }]
  }], null, { column: [{ type: Input, args: [{ isSignal: true, alias: "column", required: false }] }, { type: Output, args: ["columnChange"] }], groups: [{ type: Input, args: [{ isSignal: true, alias: "groups", required: false }] }], emptyLabel: [{ type: Input, args: [{ isSignal: true, alias: "emptyLabel", required: false }] }], renameLabel: [{ type: Input, args: [{ isSignal: true, alias: "renameLabel", required: false }] }], columnWordLabel: [{ type: Input, args: [{ isSignal: true, alias: "columnWordLabel", required: false }] }], displaySectionLabel: [{ type: Input, args: [{ isSignal: true, alias: "displaySectionLabel", required: false }] }], positionSectionLabel: [{ type: Input, args: [{ isSignal: true, alias: "positionSectionLabel", required: false }] }], widthLabel: [{ type: Input, args: [{ isSignal: true, alias: "widthLabel", required: false }] }], alignLabel: [{ type: Input, args: [{ isSignal: true, alias: "alignLabel", required: false }] }], contentLabel: [{ type: Input, args: [{ isSignal: true, alias: "contentLabel", required: false }] }], formatLabel: [{ type: Input, args: [{ isSignal: true, alias: "formatLabel", required: false }] }], groupLabel: [{ type: Input, args: [{ isSignal: true, alias: "groupLabel", required: false }] }], pinLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinLabel", required: false }] }], autoLabel: [{ type: Input, args: [{ isSignal: true, alias: "autoLabel", required: false }] }], autoByTypeLabel: [{ type: Input, args: [{ isSignal: true, alias: "autoByTypeLabel", required: false }] }], noGroupLabel: [{ type: Input, args: [{ isSignal: true, alias: "noGroupLabel", required: false }] }], alignAutoLabel: [{ type: Input, args: [{ isSignal: true, alias: "alignAutoLabel", required: false }] }], alignLeftLabel: [{ type: Input, args: [{ isSignal: true, alias: "alignLeftLabel", required: false }] }], alignCenterLabel: [{ type: Input, args: [{ isSignal: true, alias: "alignCenterLabel", required: false }] }], alignRightLabel: [{ type: Input, args: [{ isSignal: true, alias: "alignRightLabel", required: false }] }], contentTruncateLabel: [{ type: Input, args: [{ isSignal: true, alias: "contentTruncateLabel", required: false }] }], contentWrapLabel: [{ type: Input, args: [{ isSignal: true, alias: "contentWrapLabel", required: false }] }], pinNoneLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinNoneLabel", required: false }] }], pinLeftLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinLeftLabel", required: false }] }], pinRightLabel: [{ type: Input, args: [{ isSignal: true, alias: "pinRightLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmColumnInspector, { className: "HrmColumnInspector", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-column-inspector.ts", lineNumber: 224 });
})();

// libs/hrm-ui/src/lib/enterprise-data/hrm-formula-builder.ts
var _c0 = ["editor"];
var _forTrack03 = ($index, $item) => $item.key;
var _forTrack13 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
function HrmFormulaBuilder_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.columnLabel(), ": ", ctx_r1.columnName());
  }
}
function HrmFormulaBuilder_Conditional_0_For_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r4.type);
  }
}
function HrmFormulaBuilder_Conditional_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_For_19_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertField(f_r4));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmFormulaBuilder_Conditional_0_For_19_Conditional_3_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r4.type ? 3 : -1);
  }
}
function HrmFormulaBuilder_Conditional_0_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fieldsEmpty());
  }
}
function HrmFormulaBuilder_Conditional_0_Case_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hintEmpty());
  }
}
function HrmFormulaBuilder_Conditional_0_Case_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.sampleLabel(), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewValue());
  }
}
function HrmFormulaBuilder_Conditional_0_Case_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmFormulaBuilder_Conditional_0_Case_28_Conditional_3_Template, 4, 2, "span", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icCheck)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.validText());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewValue() !== null ? 3 : -1);
  }
}
function HrmFormulaBuilder_Conditional_0_Case_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icAlert)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status().msg);
  }
}
function HrmFormulaBuilder_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "textarea", 37);
    \u0275\u0275listener("input", function HrmFormulaBuilder_Conditional_0_Conditional_35_Template_textarea_input_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAiInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Conditional_35_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runAi());
    });
    \u0275\u0275element(3, "tabler-icon", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.aiDesc())("placeholder", ctx_r1.aiPlaceholder());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.aiDesc().trim());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icSparkles)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aiGenerateLabel(), " ");
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_0_For_2_Template_button_click_0_listener() {
      const it_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const g_r7 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickItem(g_r7, it_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r9 = ctx.$implicit;
    \u0275\u0275attribute("title", it_r9.desc);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r9.label);
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_0_For_2_Template, 2, 2, "button", 41, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r7.items);
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_1_For_1_Template_button_click_0_listener() {
      const it_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const g_r7 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickItem(g_r7, it_r11));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", it_r11.label, "()");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r11.desc);
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_1_For_1_Template, 5, 2, "button", 43, _forTrack2);
  }
  if (rf & 2) {
    const g_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(g_r7.items);
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_0_Template, 3, 0, "div", 40)(1, HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const g_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(g_r7.variant === "ops" ? 0 : 1);
  }
}
function HrmFormulaBuilder_Conditional_0_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 39);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_For_44_Template_button_click_1_listener() {
      const g_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(g_r7.id));
    });
    \u0275\u0275element(2, "tabler-icon", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmFormulaBuilder_Conditional_0_For_44_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", g_r7.open ? ctx_r1.icChevDown : ctx_r1.icChevRight)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r7.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r7.open ? 4 : -1);
  }
}
function HrmFormulaBuilder_Conditional_0_ForEmpty_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.funcsEmpty());
  }
}
function HrmFormulaBuilder_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3)(3, "header", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, HrmFormulaBuilder_Conditional_0_Conditional_7_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(9, "tabler-icon", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "section", 11)(12, "div", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275element(15, "tabler-icon", 14);
    \u0275\u0275elementStart(16, "input", 15);
    \u0275\u0275listener("input", function HrmFormulaBuilder_Conditional_0_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLeftSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16);
    \u0275\u0275repeaterCreate(18, HrmFormulaBuilder_Conditional_0_For_19_Template, 4, 2, "button", 17, _forTrack03, false, HrmFormulaBuilder_Conditional_0_ForEmpty_20_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "section", 19)(22, "div", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 20, 0);
    \u0275\u0275listener("input", function HrmFormulaBuilder_Conditional_0_Template_textarea_input_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditorInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 21);
    \u0275\u0275conditionalCreate(27, HrmFormulaBuilder_Conditional_0_Case_27_Template, 2, 1, "span", 22)(28, HrmFormulaBuilder_Conditional_0_Case_28_Template, 4, 4)(29, HrmFormulaBuilder_Conditional_0_Case_29_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 24)(31, "button", 25);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAi());
    });
    \u0275\u0275element(32, "tabler-icon", 9);
    \u0275\u0275text(33);
    \u0275\u0275element(34, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, HrmFormulaBuilder_Conditional_0_Conditional_35_Template, 5, 6, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "section", 11)(37, "div", 12);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 13);
    \u0275\u0275element(40, "tabler-icon", 14);
    \u0275\u0275elementStart(41, "input", 15);
    \u0275\u0275listener("input", function HrmFormulaBuilder_Conditional_0_Template_input_input_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRightSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16);
    \u0275\u0275repeaterCreate(43, HrmFormulaBuilder_Conditional_0_For_44_Template, 5, 4, "div", 27, _forTrack13, false, HrmFormulaBuilder_Conditional_0_ForEmpty_45_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "footer", 28);
    \u0275\u0275element(47, "span", 29);
    \u0275\u0275elementStart(48, "button", 30);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 31);
    \u0275\u0275listener("click", function HrmFormulaBuilder_Conditional_0_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r1.title());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.columnName() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.closeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.icX)("size", 18);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fieldsTitle());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icSearch)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.leftQuery())("placeholder", ctx_r1.fieldsSearchPlaceholder());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredFields());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formulaTitle());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.formula())("placeholder", ctx_r1.editorPlaceholder());
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_17_0 = ctx_r1.status().kind) === "empty" ? 27 : tmp_17_0 === "ok" ? 28 : tmp_17_0 === "error" ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.icSparkles)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.aiToggleLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.aiOpen() ? ctx_r1.icChevDown : ctx_r1.icChevRight)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.aiOpen() ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.funcsTitle());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icSearch)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.rightQuery())("placeholder", ctx_r1.funcsSearchPlaceholder());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.rightGroups());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.cancelLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.saveLabel());
  }
}
var HRM_FORMULA_CATALOG = [
  {
    id: "ops",
    title: "To\xE1n t\u1EED",
    variant: "ops",
    items: [
      { label: "+", insert: " + ", desc: "C\u1ED9ng" },
      { label: "\u2212", insert: " - ", desc: "Tr\u1EEB" },
      { label: "\xD7", insert: " * ", desc: "Nh\xE2n" },
      { label: "\xF7", insert: " / ", desc: "Chia" },
      { label: "(", insert: "(", desc: "M\u1EDF ngo\u1EB7c" },
      { label: ")", insert: ")", desc: "\u0110\xF3ng ngo\u1EB7c" }
    ]
  },
  {
    id: "text",
    title: "V\u0103n b\u1EA3n",
    variant: "fns",
    items: [
      { label: "NOI", desc: "N\u1ED1i nhi\u1EC1u chu\u1ED7i v\u0103n b\u1EA3n" },
      { label: "TR\xC1I", desc: "L\u1EA5y k\xFD t\u1EF1 b\xEAn tr\xE1i" },
      { label: "PH\u1EA2I", desc: "L\u1EA5y k\xFD t\u1EF1 b\xEAn ph\u1EA3i" },
      { label: "HOA", desc: "Chuy\u1EC3n th\xE0nh ch\u1EEF IN HOA" },
      { label: "TH\u01AF\u1EDCNG", desc: "Chuy\u1EC3n th\xE0nh ch\u1EEF th\u01B0\u1EDDng" }
    ]
  },
  {
    id: "num",
    title: "S\u1ED1",
    variant: "fns",
    items: [
      { label: "LAM_TRON", desc: "L\xE0m tr\xF2n s\u1ED1 theo s\u1ED1 l\u1EBB" },
      { label: "TUYET_DOI", desc: "Gi\xE1 tr\u1ECB tuy\u1EC7t \u0111\u1ED1i" },
      { label: "TONG", desc: "T\u1ED5ng c\xE1c gi\xE1 tr\u1ECB" },
      { label: "TRUNG_BINH", desc: "Trung b\xECnh c\u1ED9ng" }
    ]
  },
  {
    id: "date",
    title: "Ng\xE0y th\xE1ng",
    variant: "fns",
    items: [
      { label: "HOM_NAY", desc: "Ng\xE0y h\xF4m nay" },
      { label: "NGAY", desc: "L\u1EA5y ng\xE0y trong th\xE1ng" },
      { label: "THANG", desc: "L\u1EA5y th\xE1ng c\u1EE7a ng\xE0y" },
      { label: "NAM", desc: "L\u1EA5y n\u0103m c\u1EE7a ng\xE0y" }
    ]
  },
  {
    id: "logic",
    title: "Logic",
    variant: "fns",
    items: [
      { label: "VA", desc: "\u0110\xFAng khi t\u1EA5t c\u1EA3 \u0111i\u1EC1u ki\u1EC7n \u0111\xFAng" },
      { label: "HOAC", desc: "\u0110\xFAng khi m\u1ED9t \u0111i\u1EC1u ki\u1EC7n \u0111\xFAng" },
      { label: "KHONG", desc: "Ph\u1EE7 \u0111\u1ECBnh \u0111i\u1EC1u ki\u1EC7n" }
    ]
  },
  {
    id: "cond",
    title: "\u0110i\u1EC1u ki\u1EC7n",
    variant: "fns",
    items: [
      { label: "NEU", desc: "Tr\u1EA3 k\u1EBFt qu\u1EA3 theo \u0111i\u1EC1u ki\u1EC7n" }
    ]
  }
];
function hrmValidateFormula(raw) {
  const f = raw.trim();
  if (!f)
    return { kind: "empty", msg: "" };
  let paren = 0, brack = 0;
  for (const ch of raw) {
    if (ch === "(")
      paren++;
    else if (ch === ")") {
      paren--;
      if (paren < 0)
        return { kind: "error", msg: "Th\u1EEBa d\u1EA5u ) \u2014 thi\u1EBFu d\u1EA5u ( m\u1EDF ngo\u1EB7c." };
    } else if (ch === "[")
      brack++;
    else if (ch === "]") {
      brack--;
      if (brack < 0)
        return { kind: "error", msg: "Th\u1EEBa d\u1EA5u ] \u2014 thi\u1EBFu d\u1EA5u [ m\u1EDF t\xEAn tr\u01B0\u1EDDng." };
    }
  }
  if (paren > 0)
    return { kind: "error", msg: "Thi\u1EBFu d\u1EA5u ) \u0111\xF3ng ngo\u1EB7c." };
  if (brack > 0)
    return { kind: "error", msg: "Thi\u1EBFu d\u1EA5u ] \u0111\xF3ng t\xEAn tr\u01B0\u1EDDng." };
  return { kind: "ok", msg: "" };
}
var HrmFormulaBuilder = class _HrmFormulaBuilder {
  constructor() {
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnName = input("", ...ngDevMode ? [{ debugName: "columnName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fields = input([], ...ngDevMode ? [{ debugName: "fields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formula = model("", ...ngDevMode ? [{ debugName: "formula" }] : (
      /* istanbul ignore next */
      []
    ));
    this.previewValue = input(null, ...ngDevMode ? [{ debugName: "previewValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.apply = output();
    this.aiRequest = output();
    this.title = input("C\u1EA5u h\xECnh c\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnLabel = input("C\u1ED9t", ...ngDevMode ? [{ debugName: "columnLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fieldsTitle = input("Tr\u01B0\u1EDDng", ...ngDevMode ? [{ debugName: "fieldsTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fieldsSearchPlaceholder = input("T\xECm tr\u01B0\u1EDDng\u2026", ...ngDevMode ? [{ debugName: "fieldsSearchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fieldsEmpty = input("Kh\xF4ng c\xF3 tr\u01B0\u1EDDng ph\xF9 h\u1EE3p.", ...ngDevMode ? [{ debugName: "fieldsEmpty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaTitle = input("C\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "formulaTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editorPlaceholder = input("Nh\u1EADp c\xF4ng th\u1EE9c ho\u1EB7c ch\u1ECDn tr\u01B0\u1EDDng, h\xE0m b\xEAn c\u1EA1nh\u2026", ...ngDevMode ? [{ debugName: "editorPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hintEmpty = input("B\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch ch\u1ECDn m\u1ED9t tr\u01B0\u1EDDng ho\u1EB7c nh\u1EADp c\xF4ng th\u1EE9c.", ...ngDevMode ? [{ debugName: "hintEmpty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.validText = input("Ngo\u1EB7c c\xE2n \u0111\u1ED1i", ...ngDevMode ? [{ debugName: "validText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sampleLabel = input("K\u1EBFt qu\u1EA3 m\u1EABu", ...ngDevMode ? [{ debugName: "sampleLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiToggleLabel = input("T\u1EA1o c\xF4ng th\u1EE9c b\u1EB1ng m\xF4 t\u1EA3", ...ngDevMode ? [{ debugName: "aiToggleLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiPlaceholder = input("M\xF4 t\u1EA3 k\u1EBFt qu\u1EA3 b\u1EA1n mu\u1ED1n", ...ngDevMode ? [{ debugName: "aiPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiGenerateLabel = input("T\u1EA1o c\xF4ng th\u1EE9c", ...ngDevMode ? [{ debugName: "aiGenerateLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.funcsTitle = input("To\xE1n t\u1EED & H\xE0m", ...ngDevMode ? [{ debugName: "funcsTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.funcsSearchPlaceholder = input("T\xECm h\xE0m\u2026", ...ngDevMode ? [{ debugName: "funcsSearchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.funcsEmpty = input("Kh\xF4ng c\xF3 h\xE0m ph\xF9 h\u1EE3p.", ...ngDevMode ? [{ debugName: "funcsEmpty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cancelLabel = input("Hu\u1EF7", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saveLabel = input("L\u01B0u", ...ngDevMode ? [{ debugName: "saveLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeLabel = input("\u0110\xF3ng", ...ngDevMode ? [{ debugName: "closeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icSearch = Search;
    this.icX = X;
    this.icSparkles = Sparkles;
    this.icChevDown = ChevronDown;
    this.icChevRight = ChevronRight;
    this.icCheck = Check;
    this.icAlert = AlertTriangle;
    this.editorRef = viewChild("editor", ...ngDevMode ? [{ debugName: "editorRef" }] : (
      /* istanbul ignore next */
      []
    ));
    this.leftQuery = signal("", ...ngDevMode ? [{ debugName: "leftQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rightQuery = signal("", ...ngDevMode ? [{ debugName: "rightQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiOpen = signal(false, ...ngDevMode ? [{ debugName: "aiOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.aiDesc = signal("", ...ngDevMode ? [{ debugName: "aiDesc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openGroups = signal({ ops: true, text: true, num: false, date: false, logic: false, cond: true }, ...ngDevMode ? [{ debugName: "openGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.wasOpen = false;
    this.fxSnapshot = "";
    this.status = computed(() => hrmValidateFormula(this.formula()), ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredFields = computed(() => {
      const q = this.leftQuery().trim().toLowerCase();
      const list = this.fields();
      return q ? list.filter((f) => f.title.toLowerCase().includes(q)) : list;
    }, ...ngDevMode ? [{ debugName: "filteredFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rightGroups = computed(() => {
      const q = this.rightQuery().trim().toLowerCase();
      const openMap = this.openGroups();
      return HRM_FORMULA_CATALOG.map((g) => {
        const items = q ? g.items.filter((it) => it.label.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q)) : g.items;
        const open = q ? items.length > 0 : openMap[g.id] ?? true;
        return __spreadProps(__spreadValues({}, g), { items, open, hidden: q ? items.length === 0 : false });
      }).filter((g) => !g.hidden);
    }, ...ngDevMode ? [{ debugName: "rightGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const o = this.open();
      if (o && !this.wasOpen) {
        this.fxSnapshot = this.formula();
        this.leftQuery.set("");
        this.rightQuery.set("");
        this.aiOpen.set(false);
        this.aiDesc.set("");
      }
      this.wasOpen = o;
    });
  }
  // ---- Sự kiện nhập ----------------------------------------------------------
  onEditorInput(e) {
    this.formula.set(e.target.value);
  }
  onLeftSearch(e) {
    this.leftQuery.set(e.target.value);
  }
  onRightSearch(e) {
    this.rightQuery.set(e.target.value);
  }
  onAiInput(e) {
    this.aiDesc.set(e.target.value);
  }
  // ---- Chèn tại con trỏ ------------------------------------------------------
  /**
   * Chèn text vào công thức tại vị trí con trỏ (thay vùng chọn nếu có).
   * caretInside = độ lệch con trỏ so với đầu đoạn chèn (mặc định = cuối đoạn).
   */
  insertAtCaret(text, caretInside) {
    const el = this.editorRef()?.nativeElement;
    const cur = this.formula();
    let start = cur.length, end = cur.length;
    if (el) {
      start = el.selectionStart ?? cur.length;
      end = el.selectionEnd ?? start;
    }
    const next = cur.slice(0, start) + text + cur.slice(end);
    const caret = start + (caretInside ?? text.length);
    this.formula.set(next);
    setTimeout(() => {
      const e2 = this.editorRef()?.nativeElement;
      if (!e2)
        return;
      e2.focus();
      e2.setSelectionRange(caret, caret);
    });
  }
  /** Bấm 1 trường ⇒ chèn token [Tiêu đề]. */
  insertField(f) {
    this.insertAtCaret("[" + f.title + "]");
  }
  /** Bấm 1 mục vùng phải: toán tử chèn ký tự; hàm chèn TÊN() và đặt con trỏ giữa ngoặc. */
  pickItem(g, it) {
    if (g.variant === "ops") {
      this.insertAtCaret(it.insert ?? it.label);
    } else {
      const t = it.label + "()";
      this.insertAtCaret(t, it.label.length + 1);
    }
  }
  // ---- Nhóm / AI / hành động -------------------------------------------------
  toggleGroup(id) {
    this.openGroups.update((m) => __spreadProps(__spreadValues({}, m), { [id]: !(m[id] ?? true) }));
  }
  toggleAi() {
    this.aiOpen.update((v) => !v);
  }
  runAi() {
    const d = this.aiDesc().trim();
    if (d)
      this.aiRequest.emit(d);
  }
  cancel() {
    this.formula.set(this.fxSnapshot);
    this.open.set(false);
  }
  save() {
    this.apply.emit(this.formula());
    this.open.set(false);
  }
  static {
    this.\u0275fac = function HrmFormulaBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmFormulaBuilder)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmFormulaBuilder, selectors: [["hrm-formula-builder"]], viewQuery: function HrmFormulaBuilder_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.editorRef, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { open: [1, "open"], columnName: [1, "columnName"], fields: [1, "fields"], formula: [1, "formula"], previewValue: [1, "previewValue"], title: [1, "title"], columnLabel: [1, "columnLabel"], fieldsTitle: [1, "fieldsTitle"], fieldsSearchPlaceholder: [1, "fieldsSearchPlaceholder"], fieldsEmpty: [1, "fieldsEmpty"], formulaTitle: [1, "formulaTitle"], editorPlaceholder: [1, "editorPlaceholder"], hintEmpty: [1, "hintEmpty"], validText: [1, "validText"], sampleLabel: [1, "sampleLabel"], aiToggleLabel: [1, "aiToggleLabel"], aiPlaceholder: [1, "aiPlaceholder"], aiGenerateLabel: [1, "aiGenerateLabel"], funcsTitle: [1, "funcsTitle"], funcsSearchPlaceholder: [1, "funcsSearchPlaceholder"], funcsEmpty: [1, "funcsEmpty"], cancelLabel: [1, "cancelLabel"], saveLabel: [1, "saveLabel"], closeLabel: [1, "closeLabel"] }, outputs: { open: "openChange", formula: "formulaChange", apply: "apply", aiRequest: "aiRequest" }, decls: 1, vars: 1, consts: [["editor", ""], [1, "fb-ov"], [1, "fb-bd", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fb-dlg"], [1, "fb-hd"], [1, "fb-hd-tt"], [1, "fb-hd-title"], [1, "fb-hd-sub"], ["type", "button", 1, "fb-x", 3, "click"], [3, "icon", "size"], [1, "fb-body"], [1, "fb-col"], [1, "fb-col-hd"], [1, "fb-search"], [1, "fb-search-ic", 3, "icon", "size"], ["type", "text", 3, "input", "value", "placeholder"], [1, "fb-list"], ["type", "button", 1, "fb-field"], [1, "fb-none"], [1, "fb-col", "fb-mid"], ["spellcheck", "false", 1, "fb-ed", 3, "input", "value", "placeholder"], [1, "fb-status"], [1, "fb-hint"], [1, "fb-err"], [1, "fb-ai"], ["type", "button", 1, "fb-ai-toggle", 3, "click"], [1, "fb-ai-panel"], [1, "fb-grp"], [1, "fb-ft"], [1, "fb-ft-sp"], ["type", "button", 1, "fb-btn", 3, "click"], ["type", "button", 1, "fb-btn", "is-primary", 3, "click"], ["type", "button", 1, "fb-field", 3, "click"], [1, "fb-field-name"], [1, "fb-field-type"], [1, "fb-ok"], [1, "fb-sample"], [1, "fb-ai-input", 3, "input", "value", "placeholder"], ["type", "button", 1, "fb-ai-go", 3, "click", "disabled"], ["type", "button", 1, "fb-grp-hd", 3, "click"], [1, "fb-ops"], ["type", "button", 1, "fb-op"], ["type", "button", 1, "fb-op", 3, "click"], ["type", "button", 1, "fb-fn"], ["type", "button", 1, "fb-fn", 3, "click"], [1, "fb-fn-name"], [1, "fb-fn-desc"]], template: function HrmFormulaBuilder_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmFormulaBuilder_Conditional_0_Template, 52, 30, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.open() ? 0 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["/* angular:styles/component:css;bdf99373b6d0b68d1b8230b0327318c63d7b16c70f2dea6c3fcc4b99af4e7620;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-formula-builder.ts */\n.fb-ov {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  display: grid;\n  place-items: center;\n  padding: var(--space-6, 24px);\n}\n.fb-bd {\n  position: absolute;\n  inset: 0;\n  background: var(--overlay);\n}\n.fb-dlg {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 88vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface, #fff);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-lg, 0 12px 32px rgba(0,0,0,.18));\n  font-family: var(--font-sans);\n  overflow: hidden;\n}\n.fb-hd {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3, 12px);\n  padding: var(--space-4, 16px) var(--space-5, 20px);\n  border-bottom: 1px solid var(--border-soft);\n}\n.fb-hd-tt {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fb-hd-title {\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.fb-hd-sub {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.fb-x {\n  margin-inline-start: auto;\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.fb-x:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-body {\n  flex: 1;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: 224px minmax(0, 1fr) 288px;\n}\n.fb-col {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n.fb-col + .fb-col {\n  border-inline-start: 1px solid var(--border-soft);\n}\n.fb-col-hd {\n  padding: var(--space-3, 12px) var(--space-4, 16px) var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.fb-search {\n  position: relative;\n  margin: 0 var(--space-3, 12px) var(--space-2, 8px);\n}\n.fb-search-ic {\n  position: absolute;\n  inset-inline-start: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.fb-search input {\n  width: 100%;\n  height: 34px;\n  padding: 0 10px 0 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.fb-search input:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.fb-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 var(--space-3, 12px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fb-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: start;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n  color: var(--text-body);\n}\n.fb-field:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-field-name {\n  flex: 1;\n  min-width: 0;\n  font-size: var(--fs-13, 13px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fb-field-type {\n  flex: none;\n  font-size: var(--fs-10, 10px);\n  color: var(--text-soft);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.fb-none {\n  padding: var(--space-4, 16px) var(--space-3, 12px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  text-align: center;\n}\n.fb-mid {\n  min-height: 0;\n  padding-bottom: var(--space-3, 12px);\n}\n.fb-ed {\n  flex: 1;\n  min-height: 180px;\n  margin: 0 var(--space-4, 16px);\n  padding: var(--space-3, 12px);\n  resize: none;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: var(--fs-14, 14px);\n  line-height: 1.6;\n}\n.fb-ed:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.fb-ed::placeholder {\n  color: var(--text-soft);\n}\n.fb-status {\n  margin: var(--space-3, 12px) var(--space-4, 16px) 0;\n  min-height: 22px;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  flex-wrap: wrap;\n  font-size: var(--fs-12, 12px);\n}\n.fb-hint {\n  color: var(--text-soft);\n}\n.fb-ok {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--success-base);\n  font-weight: var(--font-medium, 500);\n}\n.fb-sample {\n  color: var(--text-sub);\n}\n.fb-sample b {\n  color: var(--text-strong);\n  font-weight: var(--font-semibold, 600);\n}\n.fb-err {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--error-base);\n}\n.fb-ai {\n  margin: var(--space-3, 12px) var(--space-4, 16px) 0;\n}\n.fb-ai-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.fb-ai-toggle:hover {\n  background: var(--primary-bg-subtle);\n}\n.fb-ai-panel {\n  margin-top: var(--space-2, 8px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.fb-ai-input {\n  min-height: 60px;\n  padding: var(--space-3, 12px);\n  resize: vertical;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.fb-ai-input:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.fb-ai-go {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 14px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-md, 8px);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.fb-ai-go:hover:not(:disabled) {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.fb-ai-go:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.fb-grp {\n  display: flex;\n  flex-direction: column;\n}\n.fb-grp-hd {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  text-align: start;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n}\n.fb-grp-hd:hover {\n  color: var(--text-strong);\n}\n.fb-grp-hd tabler-icon {\n  color: var(--text-soft);\n}\n.fb-ops {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 2px 10px 10px;\n}\n.fb-op {\n  width: 38px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font-size: var(--fs-15, 15px);\n  cursor: pointer;\n}\n.fb-op:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.fb-fn {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  width: 100%;\n  text-align: start;\n  padding: 6px 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n}\n.fb-fn:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-fn-name {\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.fb-fn-desc {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.fb-ft {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: var(--space-3, 12px) var(--space-5, 20px);\n  border-top: 1px solid var(--border-soft);\n}\n.fb-ft-sp {\n  flex: 1;\n}\n.fb-btn {\n  height: 36px;\n  padding: 0 16px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.fb-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-btn.is-primary {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  border-color: var(--primary-base);\n}\n.fb-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.fb-btn:focus-visible,\n.fb-x:focus-visible,\n.fb-field:focus-visible,\n.fb-op:focus-visible,\n.fb-fn:focus-visible,\n.fb-grp-hd:focus-visible,\n.fb-ai-toggle:focus-visible,\n.fb-ai-go:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n/*# sourceMappingURL=hrm-formula-builder.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmFormulaBuilder, [{
    type: Component,
    args: [{ selector: "hrm-formula-builder", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [TablerIconComponent], template: `
    @if (open()) {
      <div class="fb-ov">
        <div class="fb-bd" (click)="cancel()"></div>
        <div class="fb-dlg" role="dialog" aria-modal="true" [attr.aria-label]="title()">

          <header class="fb-hd">
            <div class="fb-hd-tt">
              <span class="fb-hd-title">{{ title() }}</span>
              @if (columnName()) { <span class="fb-hd-sub">{{ columnLabel() }}: {{ columnName() }}</span> }
            </div>
            <button type="button" class="fb-x" [attr.aria-label]="closeLabel()" (click)="cancel()">
              <tabler-icon [icon]="icX" [size]="18" />
            </button>
          </header>

          <div class="fb-body">

            <!-- V\xD9NG TR\xC1I: TR\u01AF\u1EDCNG -->
            <section class="fb-col">
              <div class="fb-col-hd">{{ fieldsTitle() }}</div>
              <div class="fb-search">
                <tabler-icon class="fb-search-ic" [icon]="icSearch" [size]="15" />
                <input type="text" [value]="leftQuery()" (input)="onLeftSearch($event)" [placeholder]="fieldsSearchPlaceholder()" />
              </div>
              <div class="fb-list">
                @for (f of filteredFields(); track f.key) {
                  <button type="button" class="fb-field" (click)="insertField(f)">
                    <span class="fb-field-name">{{ f.title }}</span>
                    @if (f.type) { <span class="fb-field-type">{{ f.type }}</span> }
                  </button>
                } @empty {
                  <div class="fb-none">{{ fieldsEmpty() }}</div>
                }
              </div>
            </section>

            <!-- V\xD9NG GI\u1EEEA: C\xD4NG TH\u1EE8C (tr\u1ECDng t\xE2m) -->
            <section class="fb-col fb-mid">
              <div class="fb-col-hd">{{ formulaTitle() }}</div>
              <textarea #editor class="fb-ed" spellcheck="false" [value]="formula()"
                        (input)="onEditorInput($event)" [placeholder]="editorPlaceholder()"></textarea>

              <div class="fb-status">
                @switch (status().kind) {
                  @case ('empty') {
                    <span class="fb-hint">{{ hintEmpty() }}</span>
                  }
                  @case ('ok') {
                    <span class="fb-ok"><tabler-icon [icon]="icCheck" [size]="15" /> {{ validText() }}</span>
                    @if (previewValue() !== null) {
                      <span class="fb-sample">{{ sampleLabel() }}: <b>{{ previewValue() }}</b></span>
                    }
                  }
                  @case ('error') {
                    <span class="fb-err"><tabler-icon [icon]="icAlert" [size]="15" /> {{ status().msg }}</span>
                  }
                }
              </div>

              <div class="fb-ai">
                <button type="button" class="fb-ai-toggle" (click)="toggleAi()">
                  <tabler-icon [icon]="icSparkles" [size]="15" />
                  {{ aiToggleLabel() }}
                  <tabler-icon [icon]="aiOpen() ? icChevDown : icChevRight" [size]="14" />
                </button>
                @if (aiOpen()) {
                  <div class="fb-ai-panel">
                    <textarea class="fb-ai-input" [value]="aiDesc()" (input)="onAiInput($event)" [placeholder]="aiPlaceholder()"></textarea>
                    <button type="button" class="fb-ai-go" [disabled]="!aiDesc().trim()" (click)="runAi()">
                      <tabler-icon [icon]="icSparkles" [size]="15" /> {{ aiGenerateLabel() }}
                    </button>
                  </div>
                }
              </div>
            </section>

            <!-- V\xD9NG PH\u1EA2I: TO\xC1N T\u1EEC & H\xC0M -->
            <section class="fb-col">
              <div class="fb-col-hd">{{ funcsTitle() }}</div>
              <div class="fb-search">
                <tabler-icon class="fb-search-ic" [icon]="icSearch" [size]="15" />
                <input type="text" [value]="rightQuery()" (input)="onRightSearch($event)" [placeholder]="funcsSearchPlaceholder()" />
              </div>
              <div class="fb-list">
                @for (g of rightGroups(); track g.id) {
                  <div class="fb-grp">
                    <button type="button" class="fb-grp-hd" (click)="toggleGroup(g.id)">
                      <tabler-icon [icon]="g.open ? icChevDown : icChevRight" [size]="15" />
                      {{ g.title }}
                    </button>
                    @if (g.open) {
                      @if (g.variant === 'ops') {
                        <div class="fb-ops">
                          @for (it of g.items; track it.label) {
                            <button type="button" class="fb-op" [attr.title]="it.desc" (click)="pickItem(g, it)">{{ it.label }}</button>
                          }
                        </div>
                      } @else {
                        @for (it of g.items; track it.label) {
                          <button type="button" class="fb-fn" (click)="pickItem(g, it)">
                            <span class="fb-fn-name">{{ it.label }}()</span>
                            <span class="fb-fn-desc">{{ it.desc }}</span>
                          </button>
                        }
                      }
                    }
                  </div>
                } @empty {
                  <div class="fb-none">{{ funcsEmpty() }}</div>
                }
              </div>
            </section>

          </div>

          <footer class="fb-ft">
            <span class="fb-ft-sp"></span>
            <button type="button" class="fb-btn" (click)="cancel()">{{ cancelLabel() }}</button>
            <button type="button" class="fb-btn is-primary" (click)="save()">{{ saveLabel() }}</button>
          </footer>

        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;bdf99373b6d0b68d1b8230b0327318c63d7b16c70f2dea6c3fcc4b99af4e7620;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/enterprise-data/hrm-formula-builder.ts */\n.fb-ov {\n  position: fixed;\n  inset: 0;\n  z-index: 1200;\n  display: grid;\n  place-items: center;\n  padding: var(--space-6, 24px);\n}\n.fb-bd {\n  position: absolute;\n  inset: 0;\n  background: var(--overlay);\n}\n.fb-dlg {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 88vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface, #fff);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  box-shadow: var(--shadow-regular-lg, 0 12px 32px rgba(0,0,0,.18));\n  font-family: var(--font-sans);\n  overflow: hidden;\n}\n.fb-hd {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--space-3, 12px);\n  padding: var(--space-4, 16px) var(--space-5, 20px);\n  border-bottom: 1px solid var(--border-soft);\n}\n.fb-hd-tt {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fb-hd-title {\n  font-size: var(--fs-16, 16px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.fb-hd-sub {\n  font-size: var(--fs-12, 12px);\n  color: var(--text-sub);\n}\n.fb-x {\n  margin-inline-start: auto;\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  color: var(--text-soft);\n  cursor: pointer;\n}\n.fb-x:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.fb-body {\n  flex: 1;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: 224px minmax(0, 1fr) 288px;\n}\n.fb-col {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  min-width: 0;\n}\n.fb-col + .fb-col {\n  border-inline-start: 1px solid var(--border-soft);\n}\n.fb-col-hd {\n  padding: var(--space-3, 12px) var(--space-4, 16px) var(--space-2, 8px);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  letter-spacing: .04em;\n  text-transform: uppercase;\n  color: var(--text-soft);\n}\n.fb-search {\n  position: relative;\n  margin: 0 var(--space-3, 12px) var(--space-2, 8px);\n}\n.fb-search-ic {\n  position: absolute;\n  inset-inline-start: 9px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-soft);\n  pointer-events: none;\n}\n.fb-search input {\n  width: 100%;\n  height: 34px;\n  padding: 0 10px 0 30px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.fb-search input:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.fb-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 var(--space-3, 12px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.fb-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: start;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n  color: var(--text-body);\n}\n.fb-field:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-field-name {\n  flex: 1;\n  min-width: 0;\n  font-size: var(--fs-13, 13px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.fb-field-type {\n  flex: none;\n  font-size: var(--fs-10, 10px);\n  color: var(--text-soft);\n  text-transform: uppercase;\n  letter-spacing: .03em;\n}\n.fb-none {\n  padding: var(--space-4, 16px) var(--space-3, 12px);\n  font-size: var(--fs-12, 12px);\n  color: var(--text-soft);\n  text-align: center;\n}\n.fb-mid {\n  min-height: 0;\n  padding-bottom: var(--space-3, 12px);\n}\n.fb-ed {\n  flex: 1;\n  min-height: 180px;\n  margin: 0 var(--space-4, 16px);\n  padding: var(--space-3, 12px);\n  resize: none;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: var(--fs-14, 14px);\n  line-height: 1.6;\n}\n.fb-ed:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n}\n.fb-ed::placeholder {\n  color: var(--text-soft);\n}\n.fb-status {\n  margin: var(--space-3, 12px) var(--space-4, 16px) 0;\n  min-height: 22px;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  flex-wrap: wrap;\n  font-size: var(--fs-12, 12px);\n}\n.fb-hint {\n  color: var(--text-soft);\n}\n.fb-ok {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--success-base);\n  font-weight: var(--font-medium, 500);\n}\n.fb-sample {\n  color: var(--text-sub);\n}\n.fb-sample b {\n  color: var(--text-strong);\n  font-weight: var(--font-semibold, 600);\n}\n.fb-err {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--error-base);\n}\n.fb-ai {\n  margin: var(--space-3, 12px) var(--space-4, 16px) 0;\n}\n.fb-ai-toggle {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.fb-ai-toggle:hover {\n  background: var(--primary-bg-subtle);\n}\n.fb-ai-panel {\n  margin-top: var(--space-2, 8px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.fb-ai-input {\n  min-height: 60px;\n  padding: var(--space-3, 12px);\n  resize: vertical;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface-subtle);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n}\n.fb-ai-input:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n  border-color: var(--primary-base);\n  background: var(--bg-surface);\n}\n.fb-ai-go {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 14px;\n  border: 1px solid var(--primary-base);\n  border-radius: var(--radius-md, 8px);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font: inherit;\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  cursor: pointer;\n}\n.fb-ai-go:hover:not(:disabled) {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n}\n.fb-ai-go:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.fb-grp {\n  display: flex;\n  flex-direction: column;\n}\n.fb-grp-hd {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  text-align: start;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-semibold, 600);\n}\n.fb-grp-hd:hover {\n  color: var(--text-strong);\n}\n.fb-grp-hd tabler-icon {\n  color: var(--text-soft);\n}\n.fb-ops {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 2px 10px 10px;\n}\n.fb-op {\n  width: 38px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-sm, 6px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font-size: var(--fs-15, 15px);\n  cursor: pointer;\n}\n.fb-op:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.fb-fn {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  width: 100%;\n  text-align: start;\n  padding: 6px 10px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-sm, 6px);\n  cursor: pointer;\n}\n.fb-fn:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-fn-name {\n  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);\n  font-size: var(--fs-12, 12px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.fb-fn-desc {\n  font-size: var(--fs-11, 11px);\n  color: var(--text-soft);\n}\n.fb-ft {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  padding: var(--space-3, 12px) var(--space-5, 20px);\n  border-top: 1px solid var(--border-soft);\n}\n.fb-ft-sp {\n  flex: 1;\n}\n.fb-btn {\n  height: 36px;\n  padding: 0 16px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md, 8px);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-14, 14px);\n  cursor: pointer;\n}\n.fb-btn:hover {\n  background: var(--bg-surface-subtle);\n}\n.fb-btn.is-primary {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  border-color: var(--primary-base);\n}\n.fb-btn.is-primary:hover {\n  background: var(--primary-strong, var(--primary-base));\n}\n.fb-btn:focus-visible,\n.fb-x:focus-visible,\n.fb-field:focus-visible,\n.fb-op:focus-visible,\n.fb-fn:focus-visible,\n.fb-grp-hd:focus-visible,\n.fb-ai-toggle:focus-visible,\n.fb-ai-go:focus-visible {\n  outline: 2px solid var(--primary-base);\n  outline-offset: 1px;\n}\n/*# sourceMappingURL=hrm-formula-builder.css.map */\n"] }]
  }], () => [], { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], columnName: [{ type: Input, args: [{ isSignal: true, alias: "columnName", required: false }] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }], formula: [{ type: Input, args: [{ isSignal: true, alias: "formula", required: false }] }, { type: Output, args: ["formulaChange"] }], previewValue: [{ type: Input, args: [{ isSignal: true, alias: "previewValue", required: false }] }], apply: [{ type: Output, args: ["apply"] }], aiRequest: [{ type: Output, args: ["aiRequest"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], columnLabel: [{ type: Input, args: [{ isSignal: true, alias: "columnLabel", required: false }] }], fieldsTitle: [{ type: Input, args: [{ isSignal: true, alias: "fieldsTitle", required: false }] }], fieldsSearchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "fieldsSearchPlaceholder", required: false }] }], fieldsEmpty: [{ type: Input, args: [{ isSignal: true, alias: "fieldsEmpty", required: false }] }], formulaTitle: [{ type: Input, args: [{ isSignal: true, alias: "formulaTitle", required: false }] }], editorPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "editorPlaceholder", required: false }] }], hintEmpty: [{ type: Input, args: [{ isSignal: true, alias: "hintEmpty", required: false }] }], validText: [{ type: Input, args: [{ isSignal: true, alias: "validText", required: false }] }], sampleLabel: [{ type: Input, args: [{ isSignal: true, alias: "sampleLabel", required: false }] }], aiToggleLabel: [{ type: Input, args: [{ isSignal: true, alias: "aiToggleLabel", required: false }] }], aiPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "aiPlaceholder", required: false }] }], aiGenerateLabel: [{ type: Input, args: [{ isSignal: true, alias: "aiGenerateLabel", required: false }] }], funcsTitle: [{ type: Input, args: [{ isSignal: true, alias: "funcsTitle", required: false }] }], funcsSearchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "funcsSearchPlaceholder", required: false }] }], funcsEmpty: [{ type: Input, args: [{ isSignal: true, alias: "funcsEmpty", required: false }] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], saveLabel: [{ type: Input, args: [{ isSignal: true, alias: "saveLabel", required: false }] }], closeLabel: [{ type: Input, args: [{ isSignal: true, alias: "closeLabel", required: false }] }], editorRef: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmFormulaBuilder, { className: "HrmFormulaBuilder", filePath: "libs/hrm-ui/src/lib/enterprise-data/hrm-formula-builder.ts", lineNumber: 336 });
})();

// libs/hrm-ui/src/lib/templates/hrm-data-workspace.ts
var _c02 = [[["", "wsHeaderActions", ""]], [["", "wsTopCard", ""]], [["", "wsDetail", ""]], [["", "wsPagerInfo", ""]], [["", "wsFilterPanel", ""]], [["", "wsToolbarExtra", ""]], [["", "wsBulkActions", ""]], [["", "wsMenuTop", ""]], [["", "wsMenuExtra", ""]]];
var _c1 = ["[wsHeaderActions]", "[wsTopCard]", "[wsDetail]", "[wsPagerInfo]", "[wsFilterPanel]", "[wsToolbarExtra]", "[wsBulkActions]", "[wsMenuTop]", "[wsMenuExtra]"];
var _forTrack04 = ($index, $item) => $item.key;
function HrmDataWorkspace_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-segmented", 13);
    \u0275\u0275listener("ngModelChange", function HrmDataWorkspace_Conditional_2_Template_hrm_segmented_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mode.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r2.segmentOptions())("ngModel", ctx_r2.mode());
  }
}
function HrmDataWorkspace_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 16);
    \u0275\u0275listener("ngModelChange", function HrmDataWorkspace_Conditional_7_Conditional_0_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.search.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.search())("placeholder", ctx_r2.searchPlaceholder());
  }
}
function HrmDataWorkspace_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-quick-filter", 17);
    \u0275\u0275listener("valueChange", function HrmDataWorkspace_Conditional_7_For_2_Template_hrm_quick_filter_valueChange_0_listener($event) {
      const qf_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setQf(qf_r6.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qf_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", qf_r6.label)("unit", qf_r6.unit || "")("searchable", qf_r6.searchable ?? true)("options", qf_r6.options)("value", ctx_r2.qfValue(qf_r6.key));
  }
}
function HrmDataWorkspace_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmDataWorkspace_Conditional_7_Conditional_0_Template, 1, 2, "hrm-input", 14);
    \u0275\u0275repeaterCreate(1, HrmDataWorkspace_Conditional_7_For_2_Template, 1, 5, "hrm-quick-filter", 15, _forTrack04);
    \u0275\u0275projection(3, 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.searchable() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.quickFilters());
  }
}
function HrmDataWorkspace_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedKeys.set([]));
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r2.clearSelectionLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icX)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedKeys().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bulkUnit());
  }
}
function HrmDataWorkspace_Conditional_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rowGroups().length);
  }
}
function HrmDataWorkspace_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 24);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_10_Conditional_1_Template_hrm_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showGroupPanel.set(!ctx_r2.showGroupPanel()));
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, HrmDataWorkspace_Conditional_10_Conditional_1_Conditional_3_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hdw-sel", ctx_r2.showGroupPanel() || ctx_r2.rowGroups().length > 0);
    \u0275\u0275attribute("aria-pressed", ctx_r2.showGroupPanel() || ctx_r2.rowGroups().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icGroup)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.groupLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rowGroups().length ? 3 : -1);
  }
}
function HrmDataWorkspace_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 26);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_10_Conditional_2_Template_hrm_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icDownload)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.exportLabel(), " ");
  }
}
function HrmDataWorkspace_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const wsMenu_r10 = \u0275\u0275reference(16);
    \u0275\u0275property("nzDropdownMenu", wsMenu_r10);
    \u0275\u0275attribute("aria-label", ctx_r2.moreLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icMore)("size", 18);
  }
}
function HrmDataWorkspace_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 5);
    \u0275\u0275conditionalCreate(1, HrmDataWorkspace_Conditional_10_Conditional_1_Template, 4, 7, "hrm-button", 21);
    \u0275\u0275conditionalCreate(2, HrmDataWorkspace_Conditional_10_Conditional_2_Template, 3, 3, "hrm-button", 22);
    \u0275\u0275conditionalCreate(3, HrmDataWorkspace_Conditional_10_Conditional_3_Template, 2, 4, "button", 23);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.groupable() && ctx_r2.mode() === "table" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.exportable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasMenu() ? 3 : -1);
  }
}
function HrmDataWorkspace_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 6);
  }
}
function HrmDataWorkspace_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 10);
  }
}
function HrmDataWorkspace_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 7);
    \u0275\u0275conditionalCreate(1, HrmDataWorkspace_Conditional_18_Conditional_1_Template, 1, 0, "li", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasMenu() ? 1 : -1);
  }
}
function HrmDataWorkspace_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_19_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.importClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icImport)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.importLabel());
  }
}
function HrmDataWorkspace_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_20_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.printClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icPrint)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.printLabel());
  }
}
function HrmDataWorkspace_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 10);
  }
}
function HrmDataWorkspace_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_22_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.colOpen.set(true));
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icColumns)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.columnConfigLabel());
  }
}
function HrmDataWorkspace_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_23_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortOpen.set(true));
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icSort)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.sortConfigLabel());
  }
}
function HrmDataWorkspace_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_24_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.formConfigClick.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icSettings)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formConfigLabel());
  }
}
function HrmDataWorkspace_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 10);
  }
}
function HrmDataWorkspace_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmDataWorkspace_Conditional_25_Conditional_0_Template, 1, 0, "li", 10);
    \u0275\u0275projection(1, 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.hasMenu() ? 0 : -1);
  }
}
function HrmDataWorkspace_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cmCancel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("keydown.escape", function HrmDataWorkspace_Conditional_26_Template_div_keydown_escape_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cmCancel());
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cmCancel());
    });
    \u0275\u0275element(6, "tabler-icon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 33)(8, "hrm-column-manager", 34);
    \u0275\u0275twoWayListener("columnsChange", function HrmDataWorkspace_Conditional_26_Template_hrm_column_manager_columnsChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cols, $event) || (ctx_r2.cols = $event);
      return \u0275\u0275resetView($event);
    })("groupsChange", function HrmDataWorkspace_Conditional_26_Template_hrm_column_manager_groupsChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.columnGroups, $event) || (ctx_r2.columnGroups = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("configColumn", function HrmDataWorkspace_Conditional_26_Template_hrm_column_manager_configColumn_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.inspectorKey.set($event));
    })("configFormula", function HrmDataWorkspace_Conditional_26_Template_hrm_column_manager_configFormula_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openFormula($event));
    })("addComputed", function HrmDataWorkspace_Conditional_26_Template_hrm_column_manager_addComputed_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addComputed());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "hrm-column-inspector", 35);
    \u0275\u0275listener("columnChange", function HrmDataWorkspace_Conditional_26_Template_hrm_column_inspector_columnChange_9_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInspectorChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 36)(11, "div", 37)(12, "hrm-button", 38);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_hrm_button_click_12_listener() {
      let tmp_3_0;
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_3_0 = ctx_r2.cmRef()) == null ? null : tmp_3_0.toggleCreate());
    });
    \u0275\u0275element(13, "tabler-icon", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "hrm-button", 38);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_hrm_button_click_15_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addComputed());
    });
    \u0275\u0275element(16, "tabler-icon", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 39)(19, "hrm-button", 26);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_hrm_button_click_19_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cmCancel());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "hrm-button", 40);
    \u0275\u0275listener("click", function HrmDataWorkspace_Conditional_26_Template_hrm_button_click_21_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cmSave());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.columnConfigLabel());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r2.closeLabel());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.icX)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("columns", ctx_r2.cols)("groups", ctx_r2.columnGroups);
    \u0275\u0275advance();
    \u0275\u0275property("column", ctx_r2.inspectorCol())("groups", ctx_r2.columnGroups());
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r2.icPlus)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.createGroupLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.icFx)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.addComputedLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.cancelLabel());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.cmDirty());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.saveLabel());
  }
}
var HrmDataWorkspace = class _HrmDataWorkspace {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cellTemplates = input({}, ...ngDevMode ? [{ debugName: "cellTemplates" }] : (
      /* istanbul ignore next */
      []
    ));
    this.computedCell = input(null, ...ngDevMode ? [{ debugName: "computedCell" }] : (
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
    this.modes = input(["table"], ...ngDevMode ? [{ debugName: "modes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = model("table", ...ngDevMode ? [{ debugName: "mode" }] : (
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
    this.bulkUnit = input("m\u1EE5c", ...ngDevMode ? [{ debugName: "bulkUnit" }] : (
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
    this.tableMinWidth = input("", ...ngDevMode ? [{ debugName: "tableMinWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("small", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = model("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchable = input(true, ...ngDevMode ? [{ debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = input("T\xECm ki\u1EBFm\u2026", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.quickFilters = input([], ...ngDevMode ? [{ debugName: "quickFilters" }] : (
      /* istanbul ignore next */
      []
    ));
    this.quickFilterValues = model({}, ...ngDevMode ? [{ debugName: "quickFilterValues" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupable = input(false, ...ngDevMode ? [{ debugName: "groupable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exportable = input(false, ...ngDevMode ? [{ debugName: "exportable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importable = input(false, ...ngDevMode ? [{ debugName: "importable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.printable = input(false, ...ngDevMode ? [{ debugName: "printable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnConfig = input(false, ...ngDevMode ? [{ debugName: "columnConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortConfig = input(false, ...ngDevMode ? [{ debugName: "sortConfig" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formConfig = input(false, ...ngDevMode ? [{ debugName: "formConfig" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.showGroupPanel = model(false, ...ngDevMode ? [{ debugName: "showGroupPanel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnGroups = model([], ...ngDevMode ? [{ debugName: "columnGroups" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupLabelFormatter = input(null, ...ngDevMode ? [{ debugName: "groupLabelFormatter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.exportLabel = input("Xu\u1EA5t d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "exportLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.groupLabel = input("Nh\xF3m d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "groupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.importLabel = input("Nh\u1EADp d\u1EEF li\u1EC7u", ...ngDevMode ? [{ debugName: "importLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.printLabel = input("In danh s\xE1ch", ...ngDevMode ? [{ debugName: "printLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columnConfigLabel = input("C\u1EA5u h\xECnh b\u1EA3ng", ...ngDevMode ? [{ debugName: "columnConfigLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortConfigLabel = input("C\u1EA5u h\xECnh s\u1EAFp x\u1EBFp", ...ngDevMode ? [{ debugName: "sortConfigLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formConfigLabel = input("C\u1EA5u h\xECnh bi\u1EC3u m\u1EABu", ...ngDevMode ? [{ debugName: "formConfigLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreLabel = input("Th\xEAm thao t\xE1c", ...ngDevMode ? [{ debugName: "moreLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeLabel = input("\u0110\xF3ng", ...ngDevMode ? [{ debugName: "closeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saveLabel = input("L\u01B0u", ...ngDevMode ? [{ debugName: "saveLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cancelLabel = input("Hu\u1EF7", ...ngDevMode ? [{ debugName: "cancelLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unsavedLabel = input("Thay \u0111\u1ED5i ch\u01B0a l\u01B0u", ...ngDevMode ? [{ debugName: "unsavedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.createGroupLabel = input("T\u1EA1o nh\xF3m c\u1ED9t", ...ngDevMode ? [{ debugName: "createGroupLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addComputedLabel = input("Th\xEAm c\u1ED9t t\xEDnh to\xE1n", ...ngDevMode ? [{ debugName: "addComputedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedLabel = input("\u0110\xE3 ch\u1ECDn", ...ngDevMode ? [{ debugName: "selectedLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearSelectionLabel = input("B\u1ECF ch\u1ECDn", ...ngDevMode ? [{ debugName: "clearSelectionLabel" }] : (
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
    this.cardTemplate = input(null, ...ngDevMode ? [{ debugName: "cardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardCardTemplate = input(null, ...ngDevMode ? [{ debugName: "boardCardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.boardAddLabel = input("", ...ngDevMode ? [{ debugName: "boardAddLabel" }] : (
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
    this.exportClick = output();
    this.importClick = output();
    this.printClick = output();
    this.formConfigClick = output();
    this.rowClick = output();
    this.boardAdd = output();
    this.groupChange = output();
    this.hasMenuExtra = input(false, ...ngDevMode ? [{ debugName: "hasMenuExtra" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasMenuTop = input(false, ...ngDevMode ? [{ debugName: "hasMenuTop" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icMore = DotsVertical;
    this.icDownload = Download;
    this.icGroup = LayoutList;
    this.icImport = FileImport;
    this.icPrint = Printer;
    this.icColumns = Columns3;
    this.icSort = ArrowsSort;
    this.icSettings = Settings;
    this.icX = X;
    this.icPlus = Plus;
    this.icFx = MathFunction;
    this.cmRef = viewChild(HrmColumnManager, ...ngDevMode ? [{ debugName: "cmRef" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cols = signal([], ...ngDevMode ? [{ debugName: "cols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colOpen = signal(false, ...ngDevMode ? [{ debugName: "colOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortOpen = signal(false, ...ngDevMode ? [{ debugName: "sortOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.inspectorKey = signal(null, ...ngDevMode ? [{ debugName: "inspectorKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaOpen = signal(false, ...ngDevMode ? [{ debugName: "formulaOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaKey = signal(null, ...ngDevMode ? [{ debugName: "formulaKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.colsSeeded = false;
    this.formulaWasNew = false;
    this.fbWasOpen = false;
    this.cmSnapshot = signal(null, ...ngDevMode ? [{ debugName: "cmSnapshot" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cmWasOpen = false;
    this.cmDirty = computed(() => {
      const s = this.cmSnapshot();
      if (!s)
        return false;
      return JSON.stringify(this.cols()) !== s.cols || JSON.stringify(this.columnGroups()) !== s.groups;
    }, ...ngDevMode ? [{ debugName: "cmDirty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modeLabels = {
      table: "B\u1EA3ng",
      card: "Th\u1EBB",
      kanban: "Kanban",
      gantt: "Gantt"
    };
    this.segmentOptions = computed(() => this.modes().map((m) => ({ label: this.modeLabels[m], value: m })), ...ngDevMode ? [{ debugName: "segmentOptions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.inspectorCol = computed(() => this.cols().find((c) => c.key === this.inspectorKey()) ?? null, ...ngDevMode ? [{ debugName: "inspectorCol" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaColName = computed(() => this.cols().find((c) => c.key === this.formulaKey())?.title ?? "", ...ngDevMode ? [{ debugName: "formulaColName" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formulaFields = computed(() => this.cols().filter((c) => !c.computed).map((c) => ({ key: c.key, title: c.title, type: c.type })), ...ngDevMode ? [{ debugName: "formulaFields" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortColumns = computed(() => this.cols().filter((c) => c.visible !== false && !c.computed && c.sortable !== false && c.key !== "act").map((c) => ({ key: c.key, title: c.title })), ...ngDevMode ? [{ debugName: "sortColumns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasMenu = computed(() => this.importable() || this.printable() || this.columnConfig() || this.sortConfig() || this.formConfig(), ...ngDevMode ? [{ debugName: "hasMenu" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gridCols = computed(() => {
      const cellByKey = this.cellTemplates();
      const computedTpl = this.computedCell();
      return this.cols().filter((c) => c.visible !== false).map((c) => ({
        key: c.key,
        title: c.title,
        width: c.width || void 0,
        align: c.align && c.align !== "auto" ? c.align : hrmAutoAlign(c.type),
        fixed: c.pin === "left" ? "left" : c.pin === "right" ? "right" : void 0,
        sortable: c.sortable !== false && c.key !== "act" && !c.computed,
        computed: c.computed,
        groupId: c.groupId ?? void 0,
        cell: cellByKey[c.key] ?? (c.computed ? computedTpl ?? void 0 : void 0)
      }));
    }, ...ngDevMode ? [{ debugName: "gridCols" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const c = this.columns();
      if (this.colsSeeded || !c.length)
        return;
      this.cols.set(c.map((x) => __spreadValues({}, x)));
      this.colsSeeded = true;
    });
    effect(() => {
      const hidden = this.cols().filter((c) => c.visible === false).map((c) => c.key);
      this.hiddenKeys.set(hidden);
    });
    effect(() => {
      const o = this.formulaOpen();
      if (!o && this.fbWasOpen && this.formulaWasNew) {
        const key = this.formulaKey();
        const col = this.cols().find((c) => c.key === key);
        if (col && !(col.formula ?? "").trim()) {
          this.cols.update((cs) => cs.filter((c) => c.key !== key));
        }
        this.formulaWasNew = false;
      }
      this.fbWasOpen = o;
    });
    effect(() => {
      const open = this.colOpen();
      if (open && !this.cmWasOpen) {
        this.cmSnapshot.set({
          cols: JSON.stringify(untracked(() => this.cols())),
          groups: JSON.stringify(untracked(() => this.columnGroups()))
        });
      }
      this.cmWasOpen = open;
    });
  }
  /** Huỷ: khôi phục snapshot (revert mọi thay đổi cấu hình) rồi đóng. */
  cmCancel() {
    const s = this.cmSnapshot();
    if (s) {
      this.cols.set(JSON.parse(s.cols));
      this.columnGroups.set(JSON.parse(s.groups));
    }
    this.inspectorKey.set(null);
    this.colOpen.set(false);
  }
  /** Lưu: giữ nguyên thay đổi (đã áp live) rồi đóng. */
  cmSave() {
    this.inspectorKey.set(null);
    this.colOpen.set(false);
  }
  /** Accessor 2 chiều cho [(formula)]: đọc/ghi col.formula LIVE vào cols (đồng bộ ô inline của Column Manager). */
  get formulaVal() {
    return this.cols().find((c) => c.key === this.formulaKey())?.formula ?? "";
  }
  set formulaVal(v) {
    this.cols.update((cs) => cs.map((c) => c.key === this.formulaKey() ? __spreadProps(__spreadValues({}, c), { formula: v }) : c));
  }
  /** Giá trị lọc nhanh 1 key (mảng rỗng nếu chưa chọn). */
  qfValue(key) {
    return this.quickFilterValues()[key] ?? [];
  }
  /** Ghi giá trị lọc nhanh 1 key vào quickFilterValues (two-way). */
  setQf(key, value) {
    this.quickFilterValues.update((o) => __spreadProps(__spreadValues({}, o), { [key]: value }));
  }
  /** Mở modal Formula Builder cho 1 cột tính toán (nút mở rộng / tag Công thức ở card cột tính toán). */
  openFormula(key) {
    this.formulaWasNew = false;
    this.formulaKey.set(key);
    this.formulaOpen.set(true);
  }
  /** Column Manager: "Thêm cột tính toán" → tạo cột computed rỗng rồi mở Formula Builder cho cột đó. */
  addComputed() {
    let n = this.cols().length + 1;
    let id = "calc_" + n;
    while (this.cols().some((c) => c.key === id)) {
      n++;
      id = "calc_" + n;
    }
    this.cols.update((cs) => [...cs, { key: id, title: "C\u1ED9t t\xEDnh to\xE1n", type: "number", computed: true, visible: true, formula: "" }]);
    this.openFormula(id);
    this.formulaWasNew = true;
  }
  /** AI: demo → sinh 1 công thức mẫu ghi vào cột (consumer thật sẽ gọi LLM rồi set formulaVal). */
  onAiFormula(prompt) {
    void prompt;
    this.formulaVal = 'NOI([H\u1ECD t\xEAn]; " \xB7 "; [Email])';
  }
  /** Inspector sửa 1 cột (two-way) → ghi lại vào cols theo key. */
  onInspectorChange(col) {
    this.cols.update((cs) => cs.map((c) => c.key === col.key ? __spreadValues({}, col) : c));
  }
  static {
    this.\u0275fac = function HrmDataWorkspace_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDataWorkspace)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDataWorkspace, selectors: [["hrm-data-workspace"]], viewQuery: function HrmDataWorkspace_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.cmRef, HrmColumnManager, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-data-workspace"], inputs: { title: [1, "title"], subtitle: [1, "subtitle"], columns: [1, "columns"], cellTemplates: [1, "cellTemplates"], computedCell: [1, "computedCell"], data: [1, "data"], rowKey: [1, "rowKey"], modes: [1, "modes"], mode: [1, "mode"], selectable: [1, "selectable"], selectedKeys: [1, "selectedKeys"], bulkUnit: [1, "bulkUnit"], total: [1, "total"], pageIndex: [1, "pageIndex"], pageSize: [1, "pageSize"], showSizeChanger: [1, "showSizeChanger"], tableMinWidth: [1, "tableMinWidth"], size: [1, "size"], search: [1, "search"], searchable: [1, "searchable"], searchPlaceholder: [1, "searchPlaceholder"], quickFilters: [1, "quickFilters"], quickFilterValues: [1, "quickFilterValues"], groupable: [1, "groupable"], exportable: [1, "exportable"], importable: [1, "importable"], printable: [1, "printable"], columnConfig: [1, "columnConfig"], sortConfig: [1, "sortConfig"], formConfig: [1, "formConfig"], sortLevels: [1, "sortLevels"], hiddenKeys: [1, "hiddenKeys"], rowGroups: [1, "rowGroups"], showGroupPanel: [1, "showGroupPanel"], columnGroups: [1, "columnGroups"], groupLabelFormatter: [1, "groupLabelFormatter"], exportLabel: [1, "exportLabel"], groupLabel: [1, "groupLabel"], importLabel: [1, "importLabel"], printLabel: [1, "printLabel"], columnConfigLabel: [1, "columnConfigLabel"], sortConfigLabel: [1, "sortConfigLabel"], formConfigLabel: [1, "formConfigLabel"], moreLabel: [1, "moreLabel"], closeLabel: [1, "closeLabel"], saveLabel: [1, "saveLabel"], cancelLabel: [1, "cancelLabel"], unsavedLabel: [1, "unsavedLabel"], createGroupLabel: [1, "createGroupLabel"], addComputedLabel: [1, "addComputedLabel"], selectedLabel: [1, "selectedLabel"], clearSelectionLabel: [1, "clearSelectionLabel"], groupBy: [1, "groupBy"], boardGroups: [1, "boardGroups"], cardTemplate: [1, "cardTemplate"], boardCardTemplate: [1, "boardCardTemplate"], boardAddLabel: [1, "boardAddLabel"], startField: [1, "startField"], endField: [1, "endField"], progressField: [1, "progressField"], ganttLabelField: [1, "ganttLabelField"], ganttHeader: [1, "ganttHeader"], ganttDateHeader: [1, "ganttDateHeader"], ganttLabelTemplate: [1, "ganttLabelTemplate"], ganttBarTone: [1, "ganttBarTone"], hasMenuExtra: [1, "hasMenuExtra"], hasMenuTop: [1, "hasMenuTop"] }, outputs: { mode: "modeChange", selectedKeys: "selectedKeysChange", pageIndex: "pageIndexChange", pageSize: "pageSizeChange", search: "searchChange", quickFilterValues: "quickFilterValuesChange", sortLevels: "sortLevelsChange", hiddenKeys: "hiddenKeysChange", rowGroups: "rowGroupsChange", showGroupPanel: "showGroupPanelChange", columnGroups: "columnGroupsChange", exportClick: "exportClick", importClick: "importClick", printClick: "printClick", formConfigClick: "formConfigClick", rowClick: "rowClick", boardAdd: "boardAdd", groupChange: "groupChange" }, ngContentSelectors: _c1, decls: 29, vars: 56, consts: [["wsMenu", "nzDropdownMenu"], [3, "pageIndexChange", "pageSizeChange", "title", "subtitle", "total", "pageIndex", "pageSize", "showSizeChanger", "panel"], ["headerActions", "", 1, "hdw-hdr"], ["size", "md", 3, "options", "ngModel"], ["lpTabs", ""], ["filters", "", 1, "hdw-tbx"], ["actions", "", 1, "hdw-tbx"], [3, "modeChange", "selectedKeysChange", "sortLevelsChange", "hiddenKeysChange", "rowGroupsChange", "showGroupPanelChange", "openRecord", "boardAdd", "groupChange", "columns", "data", "rowKey", "modes", "mode", "selectable", "selectedKeys", "tableMinWidth", "size", "customizable", "reorderable", "sortLevels", "hiddenKeys", "rowGroups", "showGroupPanel", "columnGroups", "groupLabelFormatter", "cardTemplate", "boardCardTemplate", "groupBy", "boardGroups", "boardAddLabel", "startField", "endField", "progressField", "ganttLabelField", "ganttHeader", "ganttDateHeader", "ganttLabelTemplate", "ganttBarTone"], ["nz-menu", "", 1, "hdw-menu"], ["nz-menu-item", ""], ["nz-menu-divider", ""], [3, "openChange", "formulaChange", "aiRequest", "open", "columnName", "fields", "formula"], [3, "openChange", "levelsChange", "open", "columns", "levels"], ["size", "md", 3, "ngModelChange", "options", "ngModel"], [1, "hdw-search", 3, "ngModel", "placeholder"], [3, "label", "unit", "searchable", "options", "value"], [1, "hdw-search", 3, "ngModelChange", "ngModel", "placeholder"], [3, "valueChange", "label", "unit", "searchable", "options", "value"], ["type", "button", 1, "hdw-clear", 3, "click"], [3, "icon", "size"], [1, "hdw-count"], ["variant", "default", 1, "hdw-grp", 3, "hdw-sel"], ["variant", "default"], ["type", "button", "nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "hdw-more", 3, "nzDropdownMenu"], ["variant", "default", 1, "hdw-grp", 3, "click"], [1, "hdw-badge"], ["variant", "default", 3, "click"], ["nz-menu-item", "", 3, "click"], [1, "hdw-cmg-mask", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "hdw-cmg-title", "tabindex", "-1", 1, "hdw-cmg-dialog", 3, "keydown.escape"], [1, "hdw-cmg-head"], ["id", "hdw-cmg-title", 1, "hdw-cmg-title"], ["type", "button", 1, "hdw-cmg-x", 3, "click"], [1, "hdw-cmg-body"], [1, "hdw-cmg-mgr", 3, "columnsChange", "groupsChange", "configColumn", "configFormula", "addComputed", "columns", "groups"], [1, "hdw-cmg-insp", 3, "columnChange", "column", "groups"], [1, "hdw-cmg-foot"], [1, "hdw-cmg-foot-create"], ["variant", "dashed", 3, "click"], [1, "hdw-cmg-foot-act"], ["variant", "primary", 3, "click", "disabled"]], template: function HrmDataWorkspace_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "hrm-list-page", 1);
        \u0275\u0275twoWayListener("pageIndexChange", function HrmDataWorkspace_Template_hrm_list_page_pageIndexChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
          return \u0275\u0275resetView($event);
        })("pageSizeChange", function HrmDataWorkspace_Template_hrm_list_page_pageSizeChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275conditionalCreate(2, HrmDataWorkspace_Conditional_2_Template, 1, 2, "hrm-segmented", 3);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275projection(5, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275conditionalCreate(7, HrmDataWorkspace_Conditional_7_Template, 4, 1)(8, HrmDataWorkspace_Conditional_8_Template, 7, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275conditionalCreate(10, HrmDataWorkspace_Conditional_10_Template, 4, 3)(11, HrmDataWorkspace_Conditional_11_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "hrm-data-view", 7);
        \u0275\u0275twoWayListener("modeChange", function HrmDataWorkspace_Template_hrm_data_view_modeChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectedKeysChange", function HrmDataWorkspace_Template_hrm_data_view_selectedKeysChange_12_listener($event) {
          return ctx.selectedKeys.set($event);
        });
        \u0275\u0275twoWayListener("sortLevelsChange", function HrmDataWorkspace_Template_hrm_data_view_sortLevelsChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sortLevels, $event) || (ctx.sortLevels = $event);
          return \u0275\u0275resetView($event);
        })("hiddenKeysChange", function HrmDataWorkspace_Template_hrm_data_view_hiddenKeysChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.hiddenKeys, $event) || (ctx.hiddenKeys = $event);
          return \u0275\u0275resetView($event);
        })("rowGroupsChange", function HrmDataWorkspace_Template_hrm_data_view_rowGroupsChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.rowGroups, $event) || (ctx.rowGroups = $event);
          return \u0275\u0275resetView($event);
        })("showGroupPanelChange", function HrmDataWorkspace_Template_hrm_data_view_showGroupPanelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.showGroupPanel, $event) || (ctx.showGroupPanel = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("openRecord", function HrmDataWorkspace_Template_hrm_data_view_openRecord_12_listener($event) {
          return ctx.rowClick.emit($event);
        })("boardAdd", function HrmDataWorkspace_Template_hrm_data_view_boardAdd_12_listener($event) {
          return ctx.boardAdd.emit($event);
        })("groupChange", function HrmDataWorkspace_Template_hrm_data_view_groupChange_12_listener($event) {
          return ctx.groupChange.emit($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275projection(13, 2, ["ngProjectAs", "[lpDetail]", 5, ["", "lpDetail", ""]]);
        \u0275\u0275projection(14, 3, ["ngProjectAs", "[pagerInfo]", 5, ["", "pagerInfo", ""]]);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "nz-dropdown-menu", null, 0)(17, "ul", 8);
        \u0275\u0275conditionalCreate(18, HrmDataWorkspace_Conditional_18_Template, 2, 1);
        \u0275\u0275conditionalCreate(19, HrmDataWorkspace_Conditional_19_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(20, HrmDataWorkspace_Conditional_20_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(21, HrmDataWorkspace_Conditional_21_Template, 1, 0, "li", 10);
        \u0275\u0275conditionalCreate(22, HrmDataWorkspace_Conditional_22_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(23, HrmDataWorkspace_Conditional_23_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(24, HrmDataWorkspace_Conditional_24_Template, 3, 3, "li", 9);
        \u0275\u0275conditionalCreate(25, HrmDataWorkspace_Conditional_25_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(26, HrmDataWorkspace_Conditional_26_Template, 23, 17);
        \u0275\u0275elementStart(27, "hrm-formula-builder", 11);
        \u0275\u0275twoWayListener("openChange", function HrmDataWorkspace_Template_hrm_formula_builder_openChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.formulaOpen, $event) || (ctx.formulaOpen = $event);
          return \u0275\u0275resetView($event);
        })("formulaChange", function HrmDataWorkspace_Template_hrm_formula_builder_formulaChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.formulaVal, $event) || (ctx.formulaVal = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("aiRequest", function HrmDataWorkspace_Template_hrm_formula_builder_aiRequest_27_listener($event) {
          return ctx.onAiFormula($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "hrm-sort-config", 12);
        \u0275\u0275twoWayListener("openChange", function HrmDataWorkspace_Template_hrm_sort_config_openChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sortOpen, $event) || (ctx.sortOpen = $event);
          return \u0275\u0275resetView($event);
        })("levelsChange", function HrmDataWorkspace_Template_hrm_sort_config_levelsChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.sortLevels, $event) || (ctx.sortLevels = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("title", ctx.title())("subtitle", ctx.subtitle())("total", ctx.total());
        \u0275\u0275twoWayProperty("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize);
        \u0275\u0275property("showSizeChanger", ctx.showSizeChanger())("panel", ctx.mode() === "table");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.modes().length > 1 ? 2 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.selectedKeys().length === 0 ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedKeys().length === 0 ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275property("columns", ctx.gridCols())("data", ctx.data())("rowKey", ctx.rowKey())("modes", ctx.modes());
        \u0275\u0275twoWayProperty("mode", ctx.mode);
        \u0275\u0275property("selectable", ctx.selectable())("selectedKeys", ctx.selectedKeys())("tableMinWidth", ctx.tableMinWidth())("size", ctx.size())("customizable", false)("reorderable", false);
        \u0275\u0275twoWayProperty("sortLevels", ctx.sortLevels)("hiddenKeys", ctx.hiddenKeys)("rowGroups", ctx.rowGroups)("showGroupPanel", ctx.showGroupPanel);
        \u0275\u0275property("columnGroups", ctx.columnGroups())("groupLabelFormatter", ctx.groupLabelFormatter())("cardTemplate", ctx.cardTemplate())("boardCardTemplate", ctx.boardCardTemplate())("groupBy", ctx.groupBy())("boardGroups", ctx.boardGroups())("boardAddLabel", ctx.boardAddLabel())("startField", ctx.startField())("endField", ctx.endField())("progressField", ctx.progressField())("ganttLabelField", ctx.ganttLabelField())("ganttHeader", ctx.ganttHeader())("ganttDateHeader", ctx.ganttDateHeader())("ganttLabelTemplate", ctx.ganttLabelTemplate())("ganttBarTone", ctx.ganttBarTone());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.hasMenuTop() ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.importable() ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.printable() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.importable() || ctx.printable()) && (ctx.columnConfig() || ctx.sortConfig() || ctx.formConfig()) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.columnConfig() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sortConfig() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.formConfig() ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasMenuExtra() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.colOpen() ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("open", ctx.formulaOpen);
        \u0275\u0275property("columnName", ctx.formulaColName())("fields", ctx.formulaFields());
        \u0275\u0275twoWayProperty("formula", ctx.formulaVal);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("open", ctx.sortOpen);
        \u0275\u0275property("columns", ctx.sortColumns());
        \u0275\u0275twoWayProperty("levels", ctx.sortLevels);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      TablerIconComponent,
      NzDropDownModule,
      NzMenuDirective,
      NzMenuItemComponent,
      NzMenuDividerDirective,
      NzDropdownDirective,
      NzDropdownMenuComponent,
      NzMenuModule,
      HrmListPage,
      HrmListPageTabs,
      HrmDataView,
      HrmQuickFilter,
      HrmColumnManager,
      HrmColumnInspector,
      HrmFormulaBuilder,
      HrmSortConfig,
      HrmButton,
      HrmInput,
      HrmSegmented
    ], styles: ["/* angular:styles/component:css;9e9f734f67b51470a6bc3daeab71a8ea2b945c47e6def8083ce7ab80b1d5a936;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/templates/hrm-data-workspace.ts */\n.hrm-data-workspace {\n  display: block;\n  min-width: 0;\n  height: 100%;\n}\n.hrm-data-workspace hrm-data-view .dv-bar {\n  display: none;\n}\n.hdw-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2, 8px);\n}\n.hdw-tbx {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  min-width: 0;\n}\n.hdw-search {\n  width: 280px;\n  max-width: 100%;\n}\n.hdw-clear {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-clear:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.hdw-count {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  background: var(--primary-bg-subtle);\n  padding: 4px 10px;\n  border-radius: var(--radius-full, 999px);\n  white-space: nowrap;\n}\n.hdw-count b {\n  color: var(--primary-base);\n}\n.hdw-more {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-more:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.hdw-sel .ant-btn {\n  box-shadow: inset 0 0 0 999px var(--primary-base) !important;\n  border-color: var(--primary-base) !important;\n  color: var(--text-on-primary) !important;\n}\n.hdw-sel .ant-btn:hover {\n  box-shadow: inset 0 0 0 999px var(--primary-hover, var(--primary-base)) !important;\n  border-color: var(--primary-hover, var(--primary-base)) !important;\n  color: var(--text-on-primary) !important;\n}\n.hdw-sel .ant-btn tabler-icon {\n  color: var(--icon-on-primary, var(--text-on-primary)) !important;\n}\n.hdw-badge {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  margin-left: 2px;\n  border-radius: var(--radius-full);\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n.hdw-menu tabler-icon {\n  color: var(--icon-secondary, var(--text-sub));\n}\n.hdw-cmg-mask {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay);\n  z-index: 1000;\n}\n.hdw-cmg-dialog {\n  position: fixed;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(920px, 94vw);\n  height: min(640px, 88vh);\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl, 12px);\n  box-shadow: var(--shadow-regular-lg, 0 12px 32px rgba(0,0,0,.18));\n  overflow: hidden;\n}\n.hdw-cmg-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.hdw-cmg-title {\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.hdw-cmg-x {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-cmg-x:hover {\n  background: var(--bg-surface-subtle);\n}\n.hdw-cmg-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 320px);\n}\n.hdw-cmg-mgr {\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--border-soft);\n  padding: var(--space-2, 8px) 16px 16px;\n}\n.hdw-cmg-insp {\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n  overflow: auto;\n}\n.hdw-cmg-foot {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n}\n.hdw-cmg-foot-create {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.hdw-cmg-foot-act {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-inline-start: auto;\n}\n@media (max-width: 640px) {\n  .hdw-cmg-body {\n    grid-template-columns: 1fr;\n    grid-template-rows: minmax(0, 1fr) auto;\n  }\n  .hdw-cmg-mgr {\n    border-right: 0;\n    border-bottom: 1px solid var(--border-soft);\n    padding: 12px;\n  }\n  .hdw-cmg-insp {\n    max-height: 220px;\n  }\n  .hdw-cmg-foot {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=hrm-data-workspace.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDataWorkspace, [{
    type: Component,
    args: [{ selector: "hrm-data-workspace", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      NzDropDownModule,
      NzMenuModule,
      HrmListPage,
      HrmListPageTabs,
      HrmDataView,
      HrmQuickFilter,
      HrmColumnManager,
      HrmColumnInspector,
      HrmFormulaBuilder,
      HrmSortConfig,
      HrmButton,
      HrmInput,
      HrmSegmented
    ], template: `
    <hrm-list-page
      [title]="title()" [subtitle]="subtitle()"
      [total]="total()" [(pageIndex)]="pageIndex" [(pageSize)]="pageSize"
      [showSizeChanger]="showSizeChanger()" [panel]="mode() === 'table'">

      <!-- C\u1EE5m \u0111i\u1EC1u khi\u1EC3n c\u1EA1nh ti\xEAu \u0111\u1EC1: segmented \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 (n\u1EBFu >1) + slot domain. -->
      <div headerActions class="hdw-hdr">
        @if (modes().length > 1) {
          <hrm-segmented [options]="segmentOptions()" [ngModel]="mode()"
            (ngModelChange)="mode.set($any($event))" size="md" />
        }
        <ng-content select="[wsHeaderActions]" />
      </div>

      <!-- Card tr\xEAn toolbar+b\u1EA3ng (AI card\u2026) qua slot tabs c\u1EE7a list-page. -->
      <div lpTabs><ng-content select="[wsTopCard]" /></div>

      <!-- Toolbar TR\xC1I: b\xECnh th\u01B0\u1EDDng = t\xECm + l\u1ECDc nhanh + panel l\u1ECDc; C\xD3 CH\u1ECCN = \u0111\u1EBFm + b\u1ECF ch\u1ECDn. -->
      <div filters class="hdw-tbx">
        @if (selectedKeys().length === 0) {
          @if (searchable()) {
            <hrm-input class="hdw-search" [ngModel]="search()" (ngModelChange)="search.set($event)"
              [placeholder]="searchPlaceholder()" />
          }
          @for (qf of quickFilters(); track qf.key) {
            <hrm-quick-filter [label]="qf.label" [unit]="qf.unit || ''"
              [searchable]="qf.searchable ?? true" [options]="qf.options"
              [value]="qfValue(qf.key)" (valueChange)="setQf(qf.key, $event)" />
          }
          <ng-content select="[wsFilterPanel]" />
        } @else {
          <button type="button" class="hdw-clear" [attr.aria-label]="clearSelectionLabel()"
            (click)="selectedKeys.set([])">
            <tabler-icon [icon]="icX" [size]="16" />
          </button>
          <span class="hdw-count">{{ selectedLabel() }} <b>{{ selectedKeys().length }}</b> {{ bulkUnit() }}</span>
        }
      </div>

      <!-- Toolbar PH\u1EA2I: b\xECnh th\u01B0\u1EDDng = slot extra + Nh\xF3m/Xu\u1EA5t/\u22EE; C\xD3 CH\u1ECCN = slot bulk. -->
      <div actions class="hdw-tbx">
        @if (selectedKeys().length === 0) {
          <ng-content select="[wsToolbarExtra]" />
          @if (groupable() && mode() === 'table') {
            <hrm-button variant="default" class="hdw-grp" [class.hdw-sel]="showGroupPanel() || rowGroups().length > 0"
              [attr.aria-pressed]="showGroupPanel() || rowGroups().length > 0" (click)="showGroupPanel.set(!showGroupPanel())">
              <tabler-icon [icon]="icGroup" [size]="18" /> {{ groupLabel() }}
              @if (rowGroups().length) { <span class="hdw-badge">{{ rowGroups().length }}</span> }
            </hrm-button>
          }
          @if (exportable()) {
            <hrm-button variant="default" (click)="exportClick.emit()">
              <tabler-icon [icon]="icDownload" [size]="18" /> {{ exportLabel() }}
            </hrm-button>
          }
          @if (hasMenu()) {
            <button type="button" class="hdw-more" [attr.aria-label]="moreLabel()"
              nz-dropdown [nzDropdownMenu]="wsMenu" nzTrigger="click" nzPlacement="bottomRight">
              <tabler-icon [icon]="icMore" [size]="18" />
            </button>
          }
        } @else {
          <ng-content select="[wsBulkActions]" />
        }
      </div>

      <hrm-data-view
        [columns]="gridCols()" [data]="data()" [rowKey]="rowKey()"
        [modes]="modes()" [(mode)]="mode"
        [selectable]="selectable()" [selectedKeys]="selectedKeys()" (selectedKeysChange)="selectedKeys.set($event)"
        [tableMinWidth]="tableMinWidth()" [size]="size()"
        [customizable]="false" [reorderable]="false"
        [(sortLevels)]="sortLevels" [(hiddenKeys)]="hiddenKeys" [(rowGroups)]="rowGroups" [(showGroupPanel)]="showGroupPanel"
        [columnGroups]="columnGroups()"
        [groupLabelFormatter]="groupLabelFormatter()"
        [cardTemplate]="cardTemplate()" [boardCardTemplate]="boardCardTemplate()"
        [groupBy]="groupBy()" [boardGroups]="boardGroups()" [boardAddLabel]="boardAddLabel()"
        [startField]="startField()" [endField]="endField()" [progressField]="progressField()"
        [ganttLabelField]="ganttLabelField()" [ganttHeader]="ganttHeader()" [ganttDateHeader]="ganttDateHeader()"
        [ganttLabelTemplate]="ganttLabelTemplate()" [ganttBarTone]="$any(ganttBarTone())"
        (openRecord)="rowClick.emit($event)" (boardAdd)="boardAdd.emit($event)" (groupChange)="groupChange.emit($event)" />

      <!-- Chi ti\u1EBFt master c\u1EA1nh danh s\xE1ch. -->
      <ng-content select="[wsDetail]" ngProjectAs="[lpDetail]" />
      <!-- Text ph\xE2n trang tu\u1EF3 consumer (vd "Hi\u1EC3n th\u1ECB X-Y trong Z"). -->
      <ng-content select="[wsPagerInfo]" ngProjectAs="[pagerInfo]" />
    </hrm-list-page>

    <!-- Menu \u22EE \u2014 thao t\xE1c ph\u1EE5 (import/print) + c\u1EA5u h\xECnh (c\u1ED9t/s\u1EAFp x\u1EBFp/bi\u1EC3u m\u1EABu) + slot domain. -->
    <nz-dropdown-menu #wsMenu="nzDropdownMenu">
      <ul nz-menu class="hdw-menu">
        @if (hasMenuTop()) {
          <ng-content select="[wsMenuTop]" />
          @if (hasMenu()) { <li nz-menu-divider></li> }
        }
        @if (importable()) {
          <li nz-menu-item (click)="importClick.emit()"><tabler-icon [icon]="icImport" [size]="16" /> {{ importLabel() }}</li>
        }
        @if (printable()) {
          <li nz-menu-item (click)="printClick.emit()"><tabler-icon [icon]="icPrint" [size]="16" /> {{ printLabel() }}</li>
        }
        @if ((importable() || printable()) && (columnConfig() || sortConfig() || formConfig())) {
          <li nz-menu-divider></li>
        }
        @if (columnConfig()) {
          <li nz-menu-item (click)="colOpen.set(true)"><tabler-icon [icon]="icColumns" [size]="16" /> {{ columnConfigLabel() }}</li>
        }
        @if (sortConfig()) {
          <li nz-menu-item (click)="sortOpen.set(true)"><tabler-icon [icon]="icSort" [size]="16" /> {{ sortConfigLabel() }}</li>
        }
        @if (formConfig()) {
          <li nz-menu-item (click)="formConfigClick.emit()"><tabler-icon [icon]="icSettings" [size]="16" /> {{ formConfigLabel() }}</li>
        }
        @if (hasMenuExtra()) {
          @if (hasMenu()) { <li nz-menu-divider></li> }
          <ng-content select="[wsMenuExtra]" />
        }
      </ul>
    </nz-dropdown-menu>

    <!-- Overlay C\u1EA5u h\xECnh c\u1ED9t: Column Manager (panel inline) + Inspector, d\u1EF1ng modal t\u1EF1 lo. -->
    @if (colOpen()) {
      <div class="hdw-cmg-mask" (click)="cmCancel()"></div>
      <div class="hdw-cmg-dialog" role="dialog" aria-modal="true" aria-labelledby="hdw-cmg-title" tabindex="-1"
        (keydown.escape)="cmCancel()">
        <div class="hdw-cmg-head">
          <span class="hdw-cmg-title" id="hdw-cmg-title">{{ columnConfigLabel() }}</span>
          <button type="button" class="hdw-cmg-x" [attr.aria-label]="closeLabel()" (click)="cmCancel()">
            <tabler-icon [icon]="icX" [size]="18" />
          </button>
        </div>
        <div class="hdw-cmg-body">
          <hrm-column-manager class="hdw-cmg-mgr" [(columns)]="cols" [(groups)]="columnGroups"
            (configColumn)="inspectorKey.set($event)" (configFormula)="openFormula($event)"
            (addComputed)="addComputed()" />
          <hrm-column-inspector class="hdw-cmg-insp" [column]="inspectorCol()" [groups]="columnGroups()"
            (columnChange)="onInspectorChange($event)" />
        </div>
        <div class="hdw-cmg-foot">
          <div class="hdw-cmg-foot-create">
            <hrm-button variant="dashed" (click)="cmRef()?.toggleCreate()">
              <tabler-icon [icon]="icPlus" [size]="15" /> {{ createGroupLabel() }}
            </hrm-button>
            <hrm-button variant="dashed" (click)="addComputed()">
              <tabler-icon [icon]="icFx" [size]="15" /> {{ addComputedLabel() }}
            </hrm-button>
          </div>
          <div class="hdw-cmg-foot-act">
            <hrm-button variant="default" (click)="cmCancel()">{{ cancelLabel() }}</hrm-button>
            <hrm-button variant="primary" [disabled]="!cmDirty()" (click)="cmSave()">{{ saveLabel() }}</hrm-button>
          </div>
        </div>
      </div>
    }

    <!-- Formula Builder (LIB) cho c\u1ED9t t\xEDnh to\xE1n \u2014 m\u1EDF t\u1EEB n\xFAt m\u1EDF r\u1ED9ng / th\xEAm c\u1ED9t t\xEDnh to\xE1n; ghi LIVE v\xE0o cols. -->
    <hrm-formula-builder [(open)]="formulaOpen" [columnName]="formulaColName()" [fields]="formulaFields()"
      [(formula)]="formulaVal" (aiRequest)="onAiFormula($event)" />

    <!-- Dialog C\u1EA5u h\xECnh s\u1EAFp x\u1EBFp \u0111a c\u1EA5p (t\u1EF1 b\u1ECDc modal). -->
    <hrm-sort-config [(open)]="sortOpen" [columns]="sortColumns()" [(levels)]="sortLevels" />
  `, host: { class: "hrm-data-workspace" }, styles: ["/* angular:styles/component:css;9e9f734f67b51470a6bc3daeab71a8ea2b945c47e6def8083ce7ab80b1d5a936;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/templates/hrm-data-workspace.ts */\n.hrm-data-workspace {\n  display: block;\n  min-width: 0;\n  height: 100%;\n}\n.hrm-data-workspace hrm-data-view .dv-bar {\n  display: none;\n}\n.hdw-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2, 8px);\n}\n.hdw-tbx {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  min-width: 0;\n}\n.hdw-search {\n  width: 280px;\n  max-width: 100%;\n}\n.hdw-clear {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-clear:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.hdw-count {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  background: var(--primary-bg-subtle);\n  padding: 4px 10px;\n  border-radius: var(--radius-full, 999px);\n  white-space: nowrap;\n}\n.hdw-count b {\n  color: var(--primary-base);\n}\n.hdw-more {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-more:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.hdw-sel .ant-btn {\n  box-shadow: inset 0 0 0 999px var(--primary-base) !important;\n  border-color: var(--primary-base) !important;\n  color: var(--text-on-primary) !important;\n}\n.hdw-sel .ant-btn:hover {\n  box-shadow: inset 0 0 0 999px var(--primary-hover, var(--primary-base)) !important;\n  border-color: var(--primary-hover, var(--primary-base)) !important;\n  color: var(--text-on-primary) !important;\n}\n.hdw-sel .ant-btn tabler-icon {\n  color: var(--icon-on-primary, var(--text-on-primary)) !important;\n}\n.hdw-badge {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  margin-left: 2px;\n  border-radius: var(--radius-full);\n  background: var(--primary-base);\n  color: var(--text-on-primary);\n  font-size: var(--fs-11, 11px);\n  font-weight: var(--font-semibold, 600);\n  line-height: 1;\n}\n.hdw-menu tabler-icon {\n  color: var(--icon-secondary, var(--text-sub));\n}\n.hdw-cmg-mask {\n  position: fixed;\n  inset: 0;\n  background: var(--overlay);\n  z-index: 1000;\n}\n.hdw-cmg-dialog {\n  position: fixed;\n  z-index: 1001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: min(920px, 94vw);\n  height: min(640px, 88vh);\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl, 12px);\n  box-shadow: var(--shadow-regular-lg, 0 12px 32px rgba(0,0,0,.18));\n  overflow: hidden;\n}\n.hdw-cmg-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.hdw-cmg-title {\n  font-size: var(--fs-15, 15px);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.hdw-cmg-x {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md, 8px);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.hdw-cmg-x:hover {\n  background: var(--bg-surface-subtle);\n}\n.hdw-cmg-body {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 320px);\n}\n.hdw-cmg-mgr {\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid var(--border-soft);\n  padding: var(--space-2, 8px) 16px 16px;\n}\n.hdw-cmg-insp {\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n  overflow: auto;\n}\n.hdw-cmg-foot {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3, 12px);\n  padding: 10px 16px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--bg-surface);\n}\n.hdw-cmg-foot-create {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n.hdw-cmg-foot-act {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  margin-inline-start: auto;\n}\n@media (max-width: 640px) {\n  .hdw-cmg-body {\n    grid-template-columns: 1fr;\n    grid-template-rows: minmax(0, 1fr) auto;\n  }\n  .hdw-cmg-mgr {\n    border-right: 0;\n    border-bottom: 1px solid var(--border-soft);\n    padding: 12px;\n  }\n  .hdw-cmg-insp {\n    max-height: 220px;\n  }\n  .hdw-cmg-foot {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=hrm-data-workspace.css.map */\n"] }]
  }], () => [], { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], cellTemplates: [{ type: Input, args: [{ isSignal: true, alias: "cellTemplates", required: false }] }], computedCell: [{ type: Input, args: [{ isSignal: true, alias: "computedCell", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], modes: [{ type: Input, args: [{ isSignal: true, alias: "modes", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }, { type: Output, args: ["modeChange"] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], selectedKeys: [{ type: Input, args: [{ isSignal: true, alias: "selectedKeys", required: false }] }, { type: Output, args: ["selectedKeysChange"] }], bulkUnit: [{ type: Input, args: [{ isSignal: true, alias: "bulkUnit", required: false }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }, { type: Output, args: ["pageIndexChange"] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }, { type: Output, args: ["pageSizeChange"] }], showSizeChanger: [{ type: Input, args: [{ isSignal: true, alias: "showSizeChanger", required: false }] }], tableMinWidth: [{ type: Input, args: [{ isSignal: true, alias: "tableMinWidth", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], quickFilters: [{ type: Input, args: [{ isSignal: true, alias: "quickFilters", required: false }] }], quickFilterValues: [{ type: Input, args: [{ isSignal: true, alias: "quickFilterValues", required: false }] }, { type: Output, args: ["quickFilterValuesChange"] }], groupable: [{ type: Input, args: [{ isSignal: true, alias: "groupable", required: false }] }], exportable: [{ type: Input, args: [{ isSignal: true, alias: "exportable", required: false }] }], importable: [{ type: Input, args: [{ isSignal: true, alias: "importable", required: false }] }], printable: [{ type: Input, args: [{ isSignal: true, alias: "printable", required: false }] }], columnConfig: [{ type: Input, args: [{ isSignal: true, alias: "columnConfig", required: false }] }], sortConfig: [{ type: Input, args: [{ isSignal: true, alias: "sortConfig", required: false }] }], formConfig: [{ type: Input, args: [{ isSignal: true, alias: "formConfig", required: false }] }], sortLevels: [{ type: Input, args: [{ isSignal: true, alias: "sortLevels", required: false }] }, { type: Output, args: ["sortLevelsChange"] }], hiddenKeys: [{ type: Input, args: [{ isSignal: true, alias: "hiddenKeys", required: false }] }, { type: Output, args: ["hiddenKeysChange"] }], rowGroups: [{ type: Input, args: [{ isSignal: true, alias: "rowGroups", required: false }] }, { type: Output, args: ["rowGroupsChange"] }], showGroupPanel: [{ type: Input, args: [{ isSignal: true, alias: "showGroupPanel", required: false }] }, { type: Output, args: ["showGroupPanelChange"] }], columnGroups: [{ type: Input, args: [{ isSignal: true, alias: "columnGroups", required: false }] }, { type: Output, args: ["columnGroupsChange"] }], groupLabelFormatter: [{ type: Input, args: [{ isSignal: true, alias: "groupLabelFormatter", required: false }] }], exportLabel: [{ type: Input, args: [{ isSignal: true, alias: "exportLabel", required: false }] }], groupLabel: [{ type: Input, args: [{ isSignal: true, alias: "groupLabel", required: false }] }], importLabel: [{ type: Input, args: [{ isSignal: true, alias: "importLabel", required: false }] }], printLabel: [{ type: Input, args: [{ isSignal: true, alias: "printLabel", required: false }] }], columnConfigLabel: [{ type: Input, args: [{ isSignal: true, alias: "columnConfigLabel", required: false }] }], sortConfigLabel: [{ type: Input, args: [{ isSignal: true, alias: "sortConfigLabel", required: false }] }], formConfigLabel: [{ type: Input, args: [{ isSignal: true, alias: "formConfigLabel", required: false }] }], moreLabel: [{ type: Input, args: [{ isSignal: true, alias: "moreLabel", required: false }] }], closeLabel: [{ type: Input, args: [{ isSignal: true, alias: "closeLabel", required: false }] }], saveLabel: [{ type: Input, args: [{ isSignal: true, alias: "saveLabel", required: false }] }], cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], unsavedLabel: [{ type: Input, args: [{ isSignal: true, alias: "unsavedLabel", required: false }] }], createGroupLabel: [{ type: Input, args: [{ isSignal: true, alias: "createGroupLabel", required: false }] }], addComputedLabel: [{ type: Input, args: [{ isSignal: true, alias: "addComputedLabel", required: false }] }], selectedLabel: [{ type: Input, args: [{ isSignal: true, alias: "selectedLabel", required: false }] }], clearSelectionLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearSelectionLabel", required: false }] }], groupBy: [{ type: Input, args: [{ isSignal: true, alias: "groupBy", required: false }] }], boardGroups: [{ type: Input, args: [{ isSignal: true, alias: "boardGroups", required: false }] }], cardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "cardTemplate", required: false }] }], boardCardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "boardCardTemplate", required: false }] }], boardAddLabel: [{ type: Input, args: [{ isSignal: true, alias: "boardAddLabel", required: false }] }], startField: [{ type: Input, args: [{ isSignal: true, alias: "startField", required: false }] }], endField: [{ type: Input, args: [{ isSignal: true, alias: "endField", required: false }] }], progressField: [{ type: Input, args: [{ isSignal: true, alias: "progressField", required: false }] }], ganttLabelField: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelField", required: false }] }], ganttHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttHeader", required: false }] }], ganttDateHeader: [{ type: Input, args: [{ isSignal: true, alias: "ganttDateHeader", required: false }] }], ganttLabelTemplate: [{ type: Input, args: [{ isSignal: true, alias: "ganttLabelTemplate", required: false }] }], ganttBarTone: [{ type: Input, args: [{ isSignal: true, alias: "ganttBarTone", required: false }] }], exportClick: [{ type: Output, args: ["exportClick"] }], importClick: [{ type: Output, args: ["importClick"] }], printClick: [{ type: Output, args: ["printClick"] }], formConfigClick: [{ type: Output, args: ["formConfigClick"] }], rowClick: [{ type: Output, args: ["rowClick"] }], boardAdd: [{ type: Output, args: ["boardAdd"] }], groupChange: [{ type: Output, args: ["groupChange"] }], hasMenuExtra: [{ type: Input, args: [{ isSignal: true, alias: "hasMenuExtra", required: false }] }], hasMenuTop: [{ type: Input, args: [{ isSignal: true, alias: "hasMenuTop", required: false }] }], cmRef: [{ type: ViewChild, args: [forwardRef(() => HrmColumnManager), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDataWorkspace, { className: "HrmDataWorkspace", filePath: "libs/hrm-ui/src/lib/templates/hrm-data-workspace.ts", lineNumber: 321 });
})();

export {
  HrmColumnManager,
  HrmDataWorkspace
};
//# sourceMappingURL=chunk-EODVU4Y5.js.map
