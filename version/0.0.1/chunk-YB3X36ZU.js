import {
  HrmModalService
} from "./chunk-JU7ANAEO.js";
import {
  HrmTab,
  HrmTabs
} from "./chunk-I4VXSOMI.js";
import {
  HrmActionCell
} from "./chunk-PNALB3TE.js";
import {
  HrmDataView,
  HrmListPage,
  HrmListPageTabs
} from "./chunk-GEJ3KJQQ.js";
import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import {
  HrmSegmented
} from "./chunk-FCCBRISQ.js";
import {
  HrmDetailPeek
} from "./chunk-DZBGXDE2.js";
import {
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import {
  HrmTextarea
} from "./chunk-IBXTICOI.js";
import {
  DEFAULT_NAV_SECTIONS
} from "./chunk-R6YXEZBF.js";
import {
  HrmTag
} from "./chunk-5U2K2VEK.js";
import {
  HrmSelect
} from "./chunk-BI6MDT2Y.js";
import {
  HrmInput
} from "./chunk-7IBNPHRP.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
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
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ArrowsMaximize,
  Bell,
  Building,
  ChevronDown,
  ChevronRight,
  Download,
  Edit,
  FileText,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Plus,
  Settings,
  TablerIconComponent,
  Trash
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  ViewChild,
  __spreadValues,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/contract-mgmt-page.ts
var _c0 = ["empCell"];
var _c1 = ["typeCell"];
var _c2 = ["termCell"];
var _c3 = ["statusCell"];
var _c4 = ["actionsCell"];
var _c5 = ["ctForm"];
var _c6 = ["ctFooter"];
var _c7 = () => ["table"];
var _c8 = () => ["master", "side", "center", "full", "tab"];
function SgTemplateContractMgmt_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateContractMgmt_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, SgTemplateContractMgmt_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateContractMgmt_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateContractMgmt_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, SgTemplateContractMgmt_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateContractMgmt_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateContractMgmt_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 10)(1, "div", 12)(2, "div", 9);
    \u0275\u0275template(3, SgTemplateContractMgmt_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "a", 14)(6, "hrm-button", 15);
    \u0275\u0275element(7, "tabler-icon", 16);
    \u0275\u0275text(8, " M\u1EDF to\xE0n m\xE0n h\xECnh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275element(10, "sg-use", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "sg-do");
    \u0275\u0275text(13, "D\xF9ng TAB cho c\xE1c L\xC1T C\u1EAET nghi\u1EC7p v\u1EE5 lo\u1EA1i tr\u1EEB nhau (t\xECnh tr\u1EA1ng h\u1EE3p \u0111\u1ED3ng) \u2014 \u0111\u1EB7t trong slot ");
    \u0275\u0275elementStart(14, "code");
    \u0275\u0275text(15, "[lpTabs]");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ", ngay d\u01B0\u1EDBi ti\xEAu \u0111\u1EC1.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "sg-do");
    \u0275\u0275text(18, "Header ch\u1EC9 ti\xEAu \u0111\u1EC1 khi m\xE0n \u0111\xE3 c\xF3 tab ph\xE2n lo\u1EA1i \u2014 tr\xE1nh subtitle th\u1EEBa g\xE2y nhi\u1EC5u.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "sg-do");
    \u0275\u0275text(20, "M\u1ED7i tab k\xE8m ");
    \u0275\u0275elementStart(21, "b");
    \u0275\u0275text(22, "s\u1ED1 \u0111\u1EBFm");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " \u0111\u1EC3 th\u1EA5y ngay kh\u1ED1i l\u01B0\u1EE3ng c\u1EA7n x\u1EED l\xFD.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "sg-dont");
    \u0275\u0275text(25, "\u0110\u1EEBng \u0111\u1EC3 tab v\xE0 b\u1ED9 l\u1ECDc tr\u1EA1ng th\xE1i tr\xF9ng vai \u2014 tab \u0111\xE3 l\xE0 filter ch\xEDnh theo t\xECnh tr\u1EA1ng.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.maximize)("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("when", ctx_r1.when);
  }
}
function SgTemplateContractMgmt_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37)(1, "span", 38);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4, "T\xE0i kho\u1EA3n doanh nghi\u1EC7p");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.chevDown)("size", 16);
  }
}
function SgTemplateContractMgmt_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 20)(1, "hrm-side-nav", 21);
    \u0275\u0275twoWayListener("collapsedChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_side_nav_collapsedChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collapsedModel, $event) || (ctx_r1.collapsedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275element(3, "tabler-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23)(5, "span", 24);
    \u0275\u0275element(6, "tabler-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgTemplateContractMgmt_ng_template_3_Conditional_7_Template, 6, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "hrm-list-page", 25);
    \u0275\u0275twoWayListener("pageIndexChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_list_page_pageIndexChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.page, $event) || (ctx_r1.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "div", 26)(10, "hrm-button", 27);
    \u0275\u0275listener("click", function SgTemplateContractMgmt_ng_template_3_Template_hrm_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(11, "tabler-icon", 16);
    \u0275\u0275text(12, " Th\xEAm h\u1EE3p \u0111\u1ED3ng");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 28)(14, "hrm-tabs", 29);
    \u0275\u0275twoWayListener("selectedIndexChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_tabs_selectedIndexChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tabIdxModel, $event) || (ctx_r1.tabIdxModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(15, "hrm-tab", 30)(16, "hrm-tab", 30)(17, "hrm-tab", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 31)(19, "hrm-input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kwModel, $event) || (ctx_r1.kwModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 33)(21, "hrm-button", 15);
    \u0275\u0275element(22, "tabler-icon", 16);
    \u0275\u0275text(23, " Xu\u1EA5t");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "hrm-data-view", 34);
    \u0275\u0275listener("openRecord", function SgTemplateContractMgmt_ng_template_3_Template_hrm_data_view_openRecord_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "hrm-detail-peek", 35);
    \u0275\u0275twoWayListener("openChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_detail_peek_openChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekOpenModel, $event) || (ctx_r1.peekOpenModel = $event);
      return \u0275\u0275resetView($event);
    })("peekModeChange", function SgTemplateContractMgmt_ng_template_3_Template_hrm_detail_peek_peekModeChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekModeModel, $event) || (ctx_r1.peekModeModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 36);
    \u0275\u0275text(27);
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
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r1.filteredRows().length);
    \u0275\u0275twoWayProperty("pageIndex", ctx_r1.page);
    \u0275\u0275property("pageSize", 10)("showSizeChanger", true)("panel", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.plus)("size", 18);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r1.tabIdxModel);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng (" + ctx_r1.countFor("none") + ")");
    \u0275\u0275advance();
    \u0275\u0275property("title", "S\u1EAFp h\u1EBFt h\u1EA1n (" + ctx_r1.countFor("expiring") + ")");
    \u0275\u0275advance();
    \u0275\u0275property("title", "\u0110\xE3 c\xF3 h\u1EE3p \u0111\u1ED3ng (" + ctx_r1.countFor("active") + ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kwModel);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.download)("size", 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r1.cols())("data", ctx_r1.filteredRows())("modes", \u0275\u0275pureFunction0(43, _c7));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.peekOpenModel)("peekMode", ctx_r1.peekModeModel);
    \u0275\u0275property("modes", \u0275\u0275pureFunction0(44, _c8))("expandable", false)("title", ctx_r1.editingId() ? "S\u1EEDa h\u1EE3p \u0111\u1ED3ng" : "Th\xEAm h\u1EE3p \u0111\u1ED3ng")("content", ctx_r1.ctFormTpl() ?? null)("footer", ctx_r1.ctFooterTpl() ?? null)("modeLabels", ctx_r1.peekLabels)("routeUrl", ctx_r1.recordRoute);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hi\u1EC3n th\u1ECB ", ctx_r1.filteredRows().length, " h\u1EE3p \u0111\u1ED3ng");
  }
}
function SgTemplateContractMgmt_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-user-cell", 41);
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275property("name", row_r4.name)("sub", row_r4.empCode + " \xB7 " + row_r4.dept)("colorful", true)("avatarSize", 32);
  }
}
function SgTemplateContractMgmt_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r1.typeColor(row_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(row_r5.type));
  }
}
function SgTemplateContractMgmt_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SgTemplateContractMgmt_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgTemplateContractMgmt_ng_template_7_Conditional_0_Template, 2, 2, "hrm-tag", 42)(1, SgTemplateContractMgmt_ng_template_7_Conditional_1_Template, 2, 0, "span", 43);
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275conditional(row_r5.type ? 0 : 1);
  }
}
function SgTemplateContractMgmt_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Ch\u01B0a thi\u1EBFt l\u1EADp");
    \u0275\u0275elementEnd();
  }
}
function SgTemplateContractMgmt_ng_template_9_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("c-warn", row_r6.status === "expiring");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.end);
  }
}
function SgTemplateContractMgmt_ng_template_9_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Kh\xF4ng th\u1EDDi h\u1EA1n");
    \u0275\u0275elementEnd();
  }
}
function SgTemplateContractMgmt_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SgTemplateContractMgmt_ng_template_9_Conditional_1_Conditional_5_Template, 2, 3, "span", 47)(6, SgTemplateContractMgmt_ng_template_9_Conditional_1_Conditional_6_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.start);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r6.end ? 5 : 6);
  }
}
function SgTemplateContractMgmt_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgTemplateContractMgmt_ng_template_9_Conditional_0_Template, 2, 0, "span", 43)(1, SgTemplateContractMgmt_ng_template_9_Conditional_1_Template, 7, 2, "span", 44);
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275conditional(row_r6.status === "none" ? 0 : 1);
  }
}
function SgTemplateContractMgmt_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-status-cell", 48);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r1.statusTone(row_r7.status))("label", ctx_r1.statusLabel(row_r7.status))("dot", true);
  }
}
function SgTemplateContractMgmt_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-action-cell", 49);
    \u0275\u0275listener("action", function SgTemplateContractMgmt_ng_template_13_Template_hrm_action_cell_action_0_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowAction(row_r9, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("actions", ctx_r1.rowActions)("max", 2);
  }
}
function SgTemplateContractMgmt_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "section", 51)(2, "div", 52);
    \u0275\u0275text(3, "Th\xF4ng tin nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "label", 54)(6, "span", 55);
    \u0275\u0275text(7, "M\xE3 nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "hrm-input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.empCode, $event) || (ctx_r1.form.empCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 54)(10, "span", 55);
    \u0275\u0275text(11, "Ph\xF2ng ban");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "hrm-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dept, $event) || (ctx_r1.form.dept = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 58)(14, "span", 55);
    \u0275\u0275text(15, "H\u1ECD v\xE0 t\xEAn ");
    \u0275\u0275elementStart(16, "b", 59);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "hrm-input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 58)(20, "span", 55);
    \u0275\u0275text(21, "Ch\u1EE9c v\u1EE5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "hrm-input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.position, $event) || (ctx_r1.form.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "section", 51)(24, "div", 52);
    \u0275\u0275text(25, "Th\xF4ng tin h\u1EE3p \u0111\u1ED3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 53)(27, "label", 54)(28, "span", 55);
    \u0275\u0275text(29, "S\u1ED1 h\u1EE3p \u0111\u1ED3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "hrm-input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contractNo, $event) || (ctx_r1.form.contractNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label", 54)(32, "span", 55);
    \u0275\u0275text(33, "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "hrm-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "label", 54)(36, "span", 55);
    \u0275\u0275text(37, "Ng\xE0y b\u1EAFt \u0111\u1EA7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "hrm-input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.start, $event) || (ctx_r1.form.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "label", 54)(40, "span", 55);
    \u0275\u0275text(41, "Ng\xE0y h\u1EBFt h\u1EA1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "hrm-input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.end, $event) || (ctx_r1.form.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "label", 54)(44, "span", 55);
    \u0275\u0275text(45, "L\u01B0\u01A1ng c\u01A1 b\u1EA3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "hrm-input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.salary, $event) || (ctx_r1.form.salary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "label", 54)(48, "span", 55);
    \u0275\u0275text(49, "T\xECnh tr\u1EA1ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "hrm-segmented", 67);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_segmented_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "label", 58)(52, "span", 55);
    \u0275\u0275text(53, "Ghi ch\xFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "hrm-textarea", 68);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateContractMgmt_ng_template_15_Template_hrm_textarea_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.note, $event) || (ctx_r1.form.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.empCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dept);
    \u0275\u0275property("options", ctx_r1.deptOptions);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.position);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contractNo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275property("options", ctx_r1.typeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.start);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.end);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.salary);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.statusSegs);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.note);
  }
}
function SgTemplateContractMgmt_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "hrm-button", 70);
    \u0275\u0275listener("click", function SgTemplateContractMgmt_ng_template_17_Template_hrm_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.peekOpen.set(false));
    });
    \u0275\u0275text(2, "Hu\u1EF7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-button", 27);
    \u0275\u0275listener("click", function SgTemplateContractMgmt_ng_template_17_Template_hrm_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingId() ? "L\u01B0u thay \u0111\u1ED5i" : "Th\xEAm h\u1EE3p \u0111\u1ED3ng");
  }
}
var SgTemplateContractMgmt = class _SgTemplateContractMgmt {
  constructor() {
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.embedded = input(false, ...ngDevMode ? [{ debugName: "embedded" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modal = inject(HrmModalService);
    this.caret = ChevronRight;
    this.maximize = ArrowsMaximize;
    this.chevDown = ChevronDown;
    this.bell = Bell;
    this.building = Building;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.plus = Plus;
    this.download = Download;
    this.fileIcon = FileText;
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.collapsed = signal(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.navUser = { name: "\u0110\u1EB7ng Anh", email: "danganh@vnr.vn" };
    this.gear = Settings;
    this.when = ["Theo d\xF5i hi\u1EC7u l\u1EF1c h\u1EE3p \u0111\u1ED3ng lao \u0111\u1ED9ng to\xE0n c\xF4ng ty", "T\xE1ch nh\xF3m c\u1EA7n x\u1EED l\xFD (ch\u01B0a k\xFD / s\u1EAFp h\u1EBFt h\u1EA1n) kh\u1ECFi nh\xF3m \u1ED5n \u0111\u1ECBnh", "CRUD h\u1EE3p \u0111\u1ED3ng nhanh, ph\xE2n lo\u1EA1i theo t\xECnh tr\u1EA1ng"];
    this.navSections = DEFAULT_NAV_SECTIONS;
    this.page = 1;
    this._kw = signal("", ...ngDevMode ? [{ debugName: "_kw" }] : (
      /* istanbul ignore next */
      []
    ));
    this.IDX_STATUS = ["none", "expiring", "active"];
    this._tabIdx = signal(0, ...ngDevMode ? [{ debugName: "_tabIdx" }] : (
      /* istanbul ignore next */
      []
    ));
    this._tab = computed(() => this.IDX_STATUS[this._tabIdx()] ?? "none", ...ngDevMode ? [{ debugName: "_tab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.TYPE_META = {
      probation: { label: "Th\u1EED vi\u1EC7c", color: "orange" },
      fixed: { label: "X\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n", color: "blue" },
      permanent: { label: "Kh\xF4ng x\xE1c \u0111\u1ECBnh", color: "green" },
      collab: { label: "C\u1ED9ng t\xE1c vi\xEAn", color: "purple" },
      season: { label: "Th\u1EDDi v\u1EE5", color: "cyan" }
    };
    this.empCell = viewChild.required("empCell");
    this.typeCell = viewChild.required("typeCell");
    this.termCell = viewChild.required("termCell");
    this.statusCell = viewChild.required("statusCell");
    this.actionsCell = viewChild.required("actionsCell");
    this.cols = computed(() => [
      { key: "name", title: "Nh\xE2n vi\xEAn", width: "260px", cell: this.empCell() },
      { key: "position", title: "Ch\u1EE9c v\u1EE5", width: "180px" },
      { key: "contractNo", title: "S\u1ED1 h\u1EE3p \u0111\u1ED3ng", width: "150px" },
      { key: "type", title: "Lo\u1EA1i H\u0110", width: "160px", cell: this.typeCell() },
      { key: "term", title: "Hi\u1EC7u l\u1EF1c", width: "220px", cell: this.termCell() },
      { key: "status", title: "T\xECnh tr\u1EA1ng", width: "150px", cell: this.statusCell() },
      { key: "__act", title: "", width: "84px", align: "right", cell: this.actionsCell() }
    ], ...ngDevMode ? [{ debugName: "cols" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowActions = [
      { key: "edit", icon: Edit, label: "S\u1EEDa" },
      { key: "delete", icon: Trash, label: "Xo\xE1", danger: true }
    ];
    this.rows = signal([
      { id: "t1", empCode: "NV0207", name: "Nguy\u1EC5n Minh Anh", dept: "Kinh doanh", position: "Nh\xE2n vi\xEAn th\u1EED vi\u1EC7c", contractNo: "", type: "", start: "", end: "", salary: "", note: "V\u1EEBa nh\u1EADn vi\u1EC7c 01/08 \u2014 ch\u1EDD k\xFD H\u0110 ch\xEDnh th\u1EE9c", status: "none", updated: "04/08/2026" },
      { id: "t2", empCode: "NV0208", name: "Tr\u1EA7n Qu\u1ED1c B\u1EA3o", dept: "K\u1EF9 thu\u1EADt", position: "L\u1EADp tr\xECnh vi\xEAn", contractNo: "", type: "", start: "", end: "", salary: "", note: "H\u1EBFt h\u1EA1n th\u1EED vi\u1EC7c 15/08 \u2014 c\u1EA7n l\u1EADp H\u0110", status: "none", updated: "03/08/2026" },
      { id: "t3", empCode: "NV0199", name: "L\xEA Th\u1ECB C\u1EA9m", dept: "Marketing", position: "Chuy\xEAn vi\xEAn n\u1ED9i dung", contractNo: "", type: "", start: "", end: "", salary: "", note: "", status: "none", updated: "02/08/2026" },
      { id: "t4", empCode: "NV0102", name: "Ph\u1EA1m V\u0103n D\u0169ng", dept: "Kinh doanh", position: "Tr\u01B0\u1EDFng nh\xF3m kinh doanh", contractNo: "H\u0110L\u0110-2024/112", type: "fixed", start: "01/09/2024", end: "31/08/2026", salary: "22.000.000", note: "\u0110\u1EC1 xu\u1EA5t t\xE1i k\xFD tr\u01B0\u1EDBc 20/08", status: "expiring", updated: "01/08/2026" },
      { id: "t5", empCode: "NV0087", name: "V\u0169 H\u1ED3ng H\u1EA1nh", dept: "Nh\xE2n s\u1EF1", position: "Chuy\xEAn vi\xEAn C&B", contractNo: "H\u0110L\u0110-2024/098", type: "fixed", start: "15/08/2024", end: "14/08/2026", salary: "18.500.000", note: "S\u1EAFp h\u1EBFt h\u1EA1n \u2014 ch\u1EDD \u0111\xE1nh gi\xE1", status: "expiring", updated: "30/07/2026" },
      { id: "t6", empCode: "NV0150", name: "\u0110\u1ED7 Th\xE0nh Long", dept: "K\u1EF9 thu\u1EADt", position: "K\u1EF9 s\u01B0 DevOps", contractNo: "H\u0110L\u0110-2025/041", type: "fixed", start: "01/09/2025", end: "30/09/2026", salary: "26.000.000", note: "", status: "expiring", updated: "28/07/2026" },
      { id: "t7", empCode: "NV0035", name: "Ho\xE0ng Thu Mai", dept: "K\u1EBF to\xE1n", position: "K\u1EBF to\xE1n tr\u01B0\u1EDFng", contractNo: "H\u0110L\u0110-2021/007", type: "permanent", start: "01/03/2021", end: "", salary: "32.000.000", note: "", status: "active", updated: "20/07/2026" },
      { id: "t8", empCode: "NV0011", name: "B\xF9i Anh Tu\u1EA5n", dept: "Ban gi\xE1m \u0111\u1ED1c", position: "Gi\xE1m \u0111\u1ED1c v\u1EADn h\xE0nh", contractNo: "H\u0110L\u0110-2020/002", type: "permanent", start: "01/01/2020", end: "", salary: "55.000.000", note: "", status: "active", updated: "18/07/2026" },
      { id: "t9", empCode: "NV0120", name: "\u0110\u1EB7ng Qu\u1EF3nh Nh\u01B0", dept: "Marketing", position: "Tr\u01B0\u1EDFng ph\xF2ng Marketing", contractNo: "H\u0110L\u0110-2025/019", type: "fixed", start: "01/04/2025", end: "31/03/2027", salary: "28.000.000", note: "", status: "active", updated: "15/07/2026" },
      { id: "t10", empCode: "NV0176", name: "Ng\xF4 Gia Huy", dept: "K\u1EF9 thu\u1EADt", position: "L\u1EADp tr\xECnh vi\xEAn Front-end", contractNo: "H\u0110L\u0110-2025/033", type: "fixed", start: "01/06/2025", end: "31/05/2027", salary: "19.000.000", note: "", status: "active", updated: "12/07/2026" },
      { id: "t11", empCode: "NV0210", name: "Tr\u1ECBnh Kh\xE1nh Vy", dept: "Kinh doanh", position: "C\u1ED9ng t\xE1c vi\xEAn b\xE1n h\xE0ng", contractNo: "H\u0110CTV-2026/006", type: "collab", start: "01/07/2026", end: "31/12/2026", salary: "Theo doanh s\u1ED1", note: "", status: "active", updated: "10/07/2026" },
      { id: "t12", empCode: "NV0164", name: "L\xFD Thanh Phong", dept: "Kho v\u1EADn", position: "Nh\xE2n vi\xEAn kho", contractNo: "H\u0110L\u0110-2025/052", type: "season", start: "01/10/2025", end: "31/12/2026", salary: "9.500.000", note: "", status: "active", updated: "08/07/2026" }
    ], ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredRows = computed(() => {
      const kw = this._kw().trim().toLowerCase();
      const tab = this._tab();
      return this.rows().filter((r) => {
        if (r.status !== tab)
          return false;
        if (kw && !`${r.empCode} ${r.name} ${r.contractNo}`.toLowerCase().includes(kw))
          return false;
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekOpen = signal(false, ...ngDevMode ? [{ debugName: "peekOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekMode = signal("master", ...ngDevMode ? [{ debugName: "peekMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekLabels = { master: "C\u1EA1nh b\u1EA3ng", side: "Ng\u0103n c\u1EA1nh", center: "Gi\u1EEFa m\xE0n h\xECnh", full: "To\xE0n trang", tab: "Tab m\u1EDBi" };
    this.recordRoute = "/styleguide/hrm/template/contract-mgmt";
    this.ctFormTpl = viewChild("ctForm", ...ngDevMode ? [{ debugName: "ctFormTpl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ctFooterTpl = viewChild("ctFooter", ...ngDevMode ? [{ debugName: "ctFooterTpl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form = { empCode: "", name: "", dept: "", position: "", contractNo: "", type: "", start: "", end: "", salary: "", status: "active", note: "" };
    this.statusSegs = [
      { label: "Ch\u01B0a c\xF3", value: "none" },
      { label: "S\u1EAFp h\u1EBFt h\u1EA1n", value: "expiring" },
      { label: "C\xF2n hi\u1EC7u l\u1EF1c", value: "active" }
    ];
    this.deptOptions = [
      { value: "Ban gi\xE1m \u0111\u1ED1c", label: "Ban gi\xE1m \u0111\u1ED1c" },
      { value: "Kinh doanh", label: "Kinh doanh" },
      { value: "Marketing", label: "Marketing" },
      { value: "K\u1EF9 thu\u1EADt", label: "K\u1EF9 thu\u1EADt" },
      { value: "Nh\xE2n s\u1EF1", label: "Nh\xE2n s\u1EF1" },
      { value: "K\u1EBF to\xE1n", label: "K\u1EBF to\xE1n" },
      { value: "Kho v\u1EADn", label: "Kho v\u1EADn" }
    ];
    this.typeOptions = [
      { value: "probation", label: "Th\u1EED vi\u1EC7c" },
      { value: "fixed", label: "X\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n" },
      { value: "permanent", label: "Kh\xF4ng x\xE1c \u0111\u1ECBnh th\u1EDDi h\u1EA1n" },
      { value: "collab", label: "C\u1ED9ng t\xE1c vi\xEAn" },
      { value: "season", label: "Th\u1EDDi v\u1EE5" }
    ];
    this.seq = 13;
  }
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  get kwModel() {
    return this._kw();
  }
  set kwModel(v) {
    this._kw.set(v);
  }
  get tabIdxModel() {
    return this._tabIdx();
  }
  set tabIdxModel(v) {
    this._tabIdx.set(v);
    this.page = 1;
  }
  countFor(s) {
    return this.rows().filter((r) => r.status === s).length;
  }
  // ── nhãn / tông màu tình trạng + loại HĐ ──
  statusLabel(s) {
    return s === "active" ? "C\xF2n hi\u1EC7u l\u1EF1c" : s === "expiring" ? "S\u1EAFp h\u1EBFt h\u1EA1n" : "Ch\u01B0a c\xF3 H\u0110";
  }
  statusTone(s) {
    return s === "active" ? "success" : s === "expiring" ? "warning" : "neutral";
  }
  typeLabel(t) {
    return this.TYPE_META[t]?.label ?? t;
  }
  typeColor(t) {
    return this.TYPE_META[t]?.color ?? "gray";
  }
  get peekOpenModel() {
    return this.peekOpen();
  }
  set peekOpenModel(v) {
    this.peekOpen.set(v);
  }
  get peekModeModel() {
    return this.peekMode();
  }
  set peekModeModel(v) {
    this.peekMode.set(v);
  }
  openCreate() {
    this.editingId.set(null);
    this.form = { empCode: `NV${String(200 + this.seq).padStart(4, "0")}`, name: "", dept: "", position: "", contractNo: "", type: "", start: "", end: "", salary: "", status: this._tab(), note: "" };
    this.peekOpen.set(true);
  }
  openEdit(row) {
    this.editingId.set(row.id);
    this.form = { empCode: row.empCode, name: row.name, dept: row.dept, position: row.position, contractNo: row.contractNo, type: row.type, start: row.start, end: row.end, salary: row.salary, status: row.status, note: row.note };
    this.peekOpen.set(true);
  }
  onRowAction(row, key) {
    if (key === "edit")
      this.openEdit(row);
    else if (key === "delete")
      this.confirmDelete(row);
  }
  save() {
    const f = this.form;
    const name = f.name.trim();
    if (!name)
      return;
    const today = "05/08/2026";
    const patch = { empCode: f.empCode, name, dept: f.dept, position: f.position, contractNo: f.contractNo, type: f.type, start: f.start, end: f.end, salary: f.salary, status: f.status, note: f.note, updated: today };
    const id = this.editingId();
    if (id) {
      this.rows.update((rs) => rs.map((r) => r.id === id ? __spreadValues(__spreadValues({}, r), patch) : r));
    } else {
      this.seq++;
      this.rows.update((rs) => [__spreadValues({ id: "t" + Date.now() % 1e5 }, patch), ...rs]);
    }
    this.peekOpen.set(false);
  }
  confirmDelete(row) {
    this.modal.confirm({
      title: `Xo\xE1 h\u1EE3p \u0111\u1ED3ng c\u1EE7a "${row.name}"?`,
      content: "B\u1EA3n ghi h\u1EE3p \u0111\u1ED3ng s\u1EBD b\u1ECB xo\xE1 kh\u1ECFi h\u1EC7 th\u1ED1ng. H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.",
      okText: "Xo\xE1",
      cancelText: "Hu\u1EF7",
      danger: true,
      onOk: () => this.rows.update((rs) => rs.filter((r) => r.id !== row.id))
    });
  }
  static {
    this.\u0275fac = function SgTemplateContractMgmt_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateContractMgmt)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateContractMgmt, selectors: [["sg-template-contract-mgmt"]], viewQuery: function SgTemplateContractMgmt_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.empCell, _c0, 5)(ctx.typeCell, _c1, 5)(ctx.termCell, _c2, 5)(ctx.statusCell, _c3, 5)(ctx.actionsCell, _c4, 5)(ctx.ctFormTpl, _c5, 5)(ctx.ctFooterTpl, _c6, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(7);
      }
    }, inputs: { embedded: [1, "embedded"] }, decls: 19, vars: 1, consts: [["screen", ""], ["empCell", ""], ["typeCell", ""], ["termCell", ""], ["statusCell", ""], ["actionsCell", ""], ["ctForm", ""], ["ctFooter", ""], [1, "lp-desktop", "lp-desktop--full"], [1, "lp-desktop"], ["category", "Template", "title", "Qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng", "desc", "Bi\u1EBFn th\u1EC3 'header d\u1EA1ng tab' c\u1EE7a template danh s\xE1ch: header ch\u1EC9 c\xF3 ti\xEAu \u0111\u1EC1 + d\u1EA3i TAB l\u1ECDc theo t\xECnh tr\u1EA1ng (Ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng \xB7 S\u1EAFp h\u1EBFt h\u1EA1n \xB7 \u0110\xE3 c\xF3 h\u1EE3p \u0111\u1ED3ng). Nghi\u1EC7p v\u1EE5 qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng lao \u0111\u1ED9ng \u2014 theo d\xF5i hi\u1EC7u l\u1EF1c + CRUD \u0111\u1EE7."], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "lp-full"], ["href", "/preview/contract-mgmt", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], ["purpose", "Theo d\xF5i & qu\u1EA3n l\xFD H\u1EE2P \u0110\u1ED2NG lao \u0111\u1ED9ng theo t\xECnh tr\u1EA1ng hi\u1EC7u l\u1EF1c \u2014 t\xE1ch c\xE1c nh\xF3m c\u1EA7n h\xE0nh \u0111\u1ED9ng (ch\u01B0a k\xFD / s\u1EAFp h\u1EBFt h\u1EA1n) kh\u1ECFi nh\xF3m \u1ED5n \u0111\u1ECBnh (\u0111\xE3 c\xF3 H\u0110) b\u1EB1ng TAB, x\u1EED l\xFD CRUD nhanh.", "behavior", "Header ch\u1EC9 ti\xEAu \u0111\u1EC1; d\u01B0\u1EDBi ti\xEAu \u0111\u1EC1 l\xE0 d\u1EA3i TAB l\u1ECDc t\xECnh tr\u1EA1ng (Ch\u01B0a c\xF3 / S\u1EAFp h\u1EBFt h\u1EA1n / \u0110\xE3 c\xF3), m\u1ED7i tab c\xF3 \u0111\u1EBFm. B\u1EA3ng 1 ch\u1EBF \u0111\u1ED9 + T\xECm. Th\xEAm/S\u1EEDa \u2192 drawer form (th\xF4ng tin NV + h\u1EE3p \u0111\u1ED3ng). Xo\xE1 \u2192 popup c\u1EA3nh b\xE1o.", "avoid", "\u0110\u1EEBng d\xF9ng cho danh m\u1EE5c master-data \u0111\u01A1n gi\u1EA3n (d\xF9ng bi\u1EBFn th\u1EC3 C\u01A1 b\u1EA3n danh m\u1EE5c); \u0111\u1EEBng nh\u1ED3i quy tr\xECnh ph\xEA duy\u1EC7t v\xE0o \u0111\xE2y (d\xF9ng bi\u1EBFn th\u1EC3 Ph\xEA duy\u1EC7t).", 3, "when"], ["sgBest", ""], ["contentPad", "none"], ["appSideNav", "", "selectedKey", "contract", "switchLabel", "C\xE0i \u0111\u1EB7t", 3, "collapsedChange", "sections", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchIcon"], ["snActions", "", "type", "button", "aria-label", "Th\xF4ng b\xE1o", 1, "as-ico"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], ["title", "Qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng", 3, "pageIndexChange", "total", "pageIndex", "pageSize", "showSizeChanger", "panel"], ["headerActions", "", 1, "lp-hdr"], ["variant", "primary", 3, "click"], ["lpTabs", "", 1, "lp-tabsrow"], [3, "selectedIndexChange", "selectedIndex"], [3, "title"], ["filters", "", 1, "tbx"], ["placeholder", "T\xECm m\xE3 NV, t\xEAn, s\u1ED1 h\u1EE3p \u0111\u1ED3ng\u2026", 2, "width", "280px", 3, "ngModelChange", "ngModel"], ["actions", "", 1, "tbx"], ["rowKey", "id", "tableMinWidth", "1000px", "mode", "table", "tableLabel", "B\u1EA3ng", 3, "openRecord", "columns", "data", "modes"], ["lpDetail", "", "switchLabel", "\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB", "expandLabel", "M\u1EDF to\xE0n trang", "closeLabel", "\u0110\xF3ng", "resizeLabel", "K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng", 3, "openChange", "peekModeChange", "open", "peekMode", "modes", "expandable", "title", "content", "footer", "modeLabels", "routeUrl"], ["pagerInfo", ""], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"], [3, "name", "sub", "colorful", "avatarSize"], [3, "color"], [1, "c-empty"], [1, "c-term"], [1, "c-mut"], [1, "c-arrow"], [3, "c-warn"], ["variant", "badge", 3, "status", "label", "dot"], [3, "action", "actions", "max"], [1, "cf-body"], [1, "cf-sec"], [1, "cf-sec-h"], [1, "cf-grid"], [1, "cf-field"], [1, "cf-lbl"], ["name", "empCode", "placeholder", "VD: NV0123", 3, "ngModelChange", "ngModel"], ["name", "dept", "placeholder", "Ch\u1ECDn ph\xF2ng ban", 3, "ngModelChange", "ngModel", "options"], [1, "cf-field", "cf-field--full"], [1, "cf-req"], ["name", "name", "placeholder", "Nh\u1EADp h\u1ECD t\xEAn nh\xE2n vi\xEAn", 3, "ngModelChange", "ngModel"], ["name", "position", "placeholder", "VD: Chuy\xEAn vi\xEAn kinh doanh", 3, "ngModelChange", "ngModel"], ["name", "contractNo", "placeholder", "VD: H\u0110L\u0110-2026/045", 3, "ngModelChange", "ngModel"], ["name", "type", "placeholder", "Ch\u1ECDn lo\u1EA1i H\u0110", 3, "ngModelChange", "ngModel", "options"], ["name", "start", "placeholder", "dd/mm/yyyy", 3, "ngModelChange", "ngModel"], ["name", "end", "placeholder", "dd/mm/yyyy (b\u1ECF tr\u1ED1ng n\u1EBFu kh\xF4ng th\u1EDDi h\u1EA1n)", 3, "ngModelChange", "ngModel"], ["name", "salary", "placeholder", "VD: 15.000.000", 3, "ngModelChange", "ngModel"], ["size", "md", 3, "ngModelChange", "options", "ngModel"], ["name", "note", "placeholder", "Ghi ch\xFA n\u1ED9i b\u1ED9 (tu\u1EF3 ch\u1ECDn)", 3, "ngModelChange", "ngModel"], [1, "cf-foot"], ["variant", "default", 3, "click"]], template: function SgTemplateContractMgmt_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateContractMgmt_Conditional_0_Template, 2, 1, "div", 8)(1, SgTemplateContractMgmt_Conditional_1_Template, 2, 1, "div", 9)(2, SgTemplateContractMgmt_Conditional_2_Template, 26, 4, "sg-doc", 10);
        \u0275\u0275template(3, SgTemplateContractMgmt_ng_template_3_Template, 28, 45, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, SgTemplateContractMgmt_ng_template_5_Template, 1, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, SgTemplateContractMgmt_ng_template_7_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, SgTemplateContractMgmt_ng_template_9_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, SgTemplateContractMgmt_ng_template_11_Template, 1, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, SgTemplateContractMgmt_ng_template_13_Template, 1, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(15, SgTemplateContractMgmt_ng_template_15_Template, 55, 14, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(17, SgTemplateContractMgmt_ng_template_17_Template, 5, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.preview ? 0 : ctx.embedded() ? 1 : 2);
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
      HrmSegmented,
      HrmTabs,
      HrmTab,
      HrmListPage,
      HrmListPageTabs,
      HrmDataView,
      HrmStatusCell,
      HrmActionCell,
      HrmUserCell,
      HrmTag,
      HrmDetailPeek,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], styles: ["\n.lp-desktop[_ngcontent-%COMP%] {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.lp-full-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content {\n  padding: 0;\n}\n.lp-desktop[_ngcontent-%COMP%]     .ant-table-tbody > tr > td, \n.lp-desktop[_ngcontent-%COMP%]     .ant-table-thead > tr > th {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .ant-tag {\n  margin: 0;\n}\n.as-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-acct-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.lp-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.lp-tabsrow[_ngcontent-%COMP%] {\n  display: block;\n}\n.lp-tabsrow[_ngcontent-%COMP%]     .ant-tabs-content-holder, \n.lp-tabsrow[_ngcontent-%COMP%]     .ant-tabs-content {\n  display: none;\n}\n.lp-tabsrow[_ngcontent-%COMP%]     .ant-tabs-nav {\n  margin: 0;\n}\n.lp-tabsrow[_ngcontent-%COMP%]     .ant-tabs {\n  overflow: visible;\n}\n.tbx[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]     hrm-data-view .dv-bar {\n  display: none;\n}\n.c-mut[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n.c-empty[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n.c-term[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13, 13px);\n}\n.c-arrow[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n.c-warn[_ngcontent-%COMP%] {\n  color: var(--warning-base);\n  font-weight: var(--font-medium, 500);\n}\n  .ant-drawer-body:has(.cf-body), \n  .ant-modal-body:has(.cf-body), \n  .dp-mbody:has(.cf-body) {\n  padding: 0 !important;\n}\n.cf-body[_ngcontent-%COMP%] {\n  padding: var(--space-5, 20px) var(--space-5, 20px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6, 24px);\n}\n.cf-sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.cf-sec-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cf-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 16px;\n}\n.cf-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.cf-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.cf-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.cf-req[_ngcontent-%COMP%] {\n  color: var(--error-base);\n  font-weight: var(--font-bold, 700);\n}\n.cf-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=contract-mgmt-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateContractMgmt, [{
    type: Component,
    args: [{ selector: "sg-template-contract-mgmt", imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      HrmAppShell,
      HrmSideNav,
      HrmButton,
      HrmInput,
      HrmSelect,
      HrmTextarea,
      HrmSegmented,
      HrmTabs,
      HrmTab,
      HrmListPage,
      HrmListPageTabs,
      HrmDataView,
      HrmStatusCell,
      HrmActionCell,
      HrmUserCell,
      HrmTag,
      HrmDetailPeek,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], template: `
    @if (preview) {
      <div class="lp-desktop lp-desktop--full"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else if (embedded()) {
      <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
    <sg-doc category="Template" title="Qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng"
      desc="Bi\u1EBFn th\u1EC3 'header d\u1EA1ng tab' c\u1EE7a template danh s\xE1ch: header ch\u1EC9 c\xF3 ti\xEAu \u0111\u1EC1 + d\u1EA3i TAB l\u1ECDc theo t\xECnh tr\u1EA1ng (Ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng \xB7 S\u1EAFp h\u1EBFt h\u1EA1n \xB7 \u0110\xE3 c\xF3 h\u1EE3p \u0111\u1ED3ng). Nghi\u1EC7p v\u1EE5 qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng lao \u0111\u1ED9ng \u2014 theo d\xF5i hi\u1EC7u l\u1EF1c + CRUD \u0111\u1EE7.">
      <div sgOverview>
        <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
        <div class="lp-full">
          <a class="lp-full-link" href="/preview/contract-mgmt" target="_blank" rel="noopener">
            <hrm-button variant="default"><tabler-icon [icon]="maximize" [size]="16" /> M\u1EDF to\xE0n m\xE0n h\xECnh</hrm-button>
          </a>
        </div>
      </div>
      <div sgUsage>
        <sg-use purpose="Theo d\xF5i & qu\u1EA3n l\xFD H\u1EE2P \u0110\u1ED2NG lao \u0111\u1ED9ng theo t\xECnh tr\u1EA1ng hi\u1EC7u l\u1EF1c \u2014 t\xE1ch c\xE1c nh\xF3m c\u1EA7n h\xE0nh \u0111\u1ED9ng (ch\u01B0a k\xFD / s\u1EAFp h\u1EBFt h\u1EA1n) kh\u1ECFi nh\xF3m \u1ED5n \u0111\u1ECBnh (\u0111\xE3 c\xF3 H\u0110) b\u1EB1ng TAB, x\u1EED l\xFD CRUD nhanh."
          [when]="when"
          behavior="Header ch\u1EC9 ti\xEAu \u0111\u1EC1; d\u01B0\u1EDBi ti\xEAu \u0111\u1EC1 l\xE0 d\u1EA3i TAB l\u1ECDc t\xECnh tr\u1EA1ng (Ch\u01B0a c\xF3 / S\u1EAFp h\u1EBFt h\u1EA1n / \u0110\xE3 c\xF3), m\u1ED7i tab c\xF3 \u0111\u1EBFm. B\u1EA3ng 1 ch\u1EBF \u0111\u1ED9 + T\xECm. Th\xEAm/S\u1EEDa \u2192 drawer form (th\xF4ng tin NV + h\u1EE3p \u0111\u1ED3ng). Xo\xE1 \u2192 popup c\u1EA3nh b\xE1o."
          avoid="\u0110\u1EEBng d\xF9ng cho danh m\u1EE5c master-data \u0111\u01A1n gi\u1EA3n (d\xF9ng bi\u1EBFn th\u1EC3 C\u01A1 b\u1EA3n danh m\u1EE5c); \u0111\u1EEBng nh\u1ED3i quy tr\xECnh ph\xEA duy\u1EC7t v\xE0o \u0111\xE2y (d\xF9ng bi\u1EBFn th\u1EC3 Ph\xEA duy\u1EC7t)." />
      </div>
      <div sgBest>
        <sg-do>D\xF9ng TAB cho c\xE1c L\xC1T C\u1EAET nghi\u1EC7p v\u1EE5 lo\u1EA1i tr\u1EEB nhau (t\xECnh tr\u1EA1ng h\u1EE3p \u0111\u1ED3ng) \u2014 \u0111\u1EB7t trong slot <code>[lpTabs]</code>, ngay d\u01B0\u1EDBi ti\xEAu \u0111\u1EC1.</sg-do>
        <sg-do>Header ch\u1EC9 ti\xEAu \u0111\u1EC1 khi m\xE0n \u0111\xE3 c\xF3 tab ph\xE2n lo\u1EA1i \u2014 tr\xE1nh subtitle th\u1EEBa g\xE2y nhi\u1EC5u.</sg-do>
        <sg-do>M\u1ED7i tab k\xE8m <b>s\u1ED1 \u0111\u1EBFm</b> \u0111\u1EC3 th\u1EA5y ngay kh\u1ED1i l\u01B0\u1EE3ng c\u1EA7n x\u1EED l\xFD.</sg-do>
        <sg-dont>\u0110\u1EEBng \u0111\u1EC3 tab v\xE0 b\u1ED9 l\u1ECDc tr\u1EA1ng th\xE1i tr\xF9ng vai \u2014 tab \u0111\xE3 l\xE0 filter ch\xEDnh theo t\xECnh tr\u1EA1ng.</sg-dont>
      </div>
    </sg-doc>
    }

    <ng-template #screen>
      <hrm-app-shell contentPad="none">
        <hrm-side-nav appSideNav [sections]="navSections" selectedKey="contract"
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

        <!-- HEADER D\u1EA0NG TAB: ch\u1EC9 truy\u1EC1n title (KH\xD4NG subtitle) \u2192 header g\u1ECDn 1 d\xF2ng ti\xEAu \u0111\u1EC1;
             d\u1EA3i tab t\xECnh tr\u1EA1ng n\u1EB1m slot [lpTabs] ngay d\u01B0\u1EDBi ti\xEAu \u0111\u1EC1. -->
        <hrm-list-page title="Qu\u1EA3n l\xFD h\u1EE3p \u0111\u1ED3ng"
          [total]="filteredRows().length" [(pageIndex)]="page" [pageSize]="10" [showSizeChanger]="true" [panel]="true">

          <div headerActions class="lp-hdr">
            <hrm-button variant="primary" (click)="openCreate()"><tabler-icon [icon]="plus" [size]="18" /> Th\xEAm h\u1EE3p \u0111\u1ED3ng</hrm-button>
          </div>

          <!-- TAB l\u1ECDc theo t\xECnh tr\u1EA1ng h\u1EE3p \u0111\u1ED3ng \u2014 D\xD9NG hrm-tabs (component tab h\u1EC7 th\u1ED1ng, line style),
               m\u1ED7i tab k\xE8m \u0111\u1EBFm. hrm-tabs l\xE0m NAV (th\xE2n tab r\u1ED7ng, \u1EA9n qua CSS). -->
          <div lpTabs class="lp-tabsrow">
            <hrm-tabs [(selectedIndex)]="tabIdxModel">
              <hrm-tab [title]="'Ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng (' + countFor('none') + ')'"></hrm-tab>
              <hrm-tab [title]="'S\u1EAFp h\u1EBFt h\u1EA1n (' + countFor('expiring') + ')'"></hrm-tab>
              <hrm-tab [title]="'\u0110\xE3 c\xF3 h\u1EE3p \u0111\u1ED3ng (' + countFor('active') + ')'"></hrm-tab>
            </hrm-tabs>
          </div>

          <div filters class="tbx">
            <hrm-input [(ngModel)]="kwModel" placeholder="T\xECm m\xE3 NV, t\xEAn, s\u1ED1 h\u1EE3p \u0111\u1ED3ng\u2026" style="width:280px" />
          </div>
          <div actions class="tbx">
            <hrm-button variant="default"><tabler-icon [icon]="download" [size]="18" /> Xu\u1EA5t</hrm-button>
          </div>

          <hrm-data-view
            [columns]="cols()" [data]="filteredRows()" rowKey="id" tableMinWidth="1000px"
            [modes]="['table']" mode="table" tableLabel="B\u1EA3ng"
            (openRecord)="openEdit($any($event))" />

          <!-- Form Th\xEAm/S\u1EEDa h\u1EE3p \u0111\u1ED3ng \u2014 C\xD9NG surface \u0111a ch\u1EBF \u0111\u1ED9 hrm-detail-peek nh\u01B0 c\u1EA3 nh\xF3m template. -->
          <hrm-detail-peek lpDetail [(open)]="peekOpenModel" [(peekMode)]="peekModeModel"
            [modes]="['master','side','center','full','tab']" [expandable]="false"
            [title]="editingId() ? 'S\u1EEDa h\u1EE3p \u0111\u1ED3ng' : 'Th\xEAm h\u1EE3p \u0111\u1ED3ng'"
            [content]="ctFormTpl() ?? null" [footer]="ctFooterTpl() ?? null" [modeLabels]="peekLabels"
            [routeUrl]="recordRoute"
            switchLabel="\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB" expandLabel="M\u1EDF to\xE0n trang" closeLabel="\u0110\xF3ng" resizeLabel="K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng" />

          <span pagerInfo>Hi\u1EC3n th\u1ECB {{ filteredRows().length }} h\u1EE3p \u0111\u1ED3ng</span>
        </hrm-list-page>
      </hrm-app-shell>
    </ng-template>

    <!-- \xD4 Nh\xE2n vi\xEAn -->
    <ng-template #empCell let-row>
      <hrm-user-cell [name]="$any(row.name)" [sub]="$any(row.empCode) + ' \xB7 ' + $any(row.dept)" [colorful]="true" [avatarSize]="32" />
    </ng-template>

    <!-- \xD4 Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng -->
    <ng-template #typeCell let-row>
      @if (row.type) { <hrm-tag [color]="typeColor(row.type)">{{ typeLabel(row.type) }}</hrm-tag> }
      @else { <span class="c-empty">\u2014</span> }
    </ng-template>

    <!-- \xD4 Hi\u1EC7u l\u1EF1c (ng\xE0y b\u1EAFt \u0111\u1EA7u \u2192 h\u1EBFt h\u1EA1n) -->
    <ng-template #termCell let-row>
      @if (row.status === 'none') { <span class="c-empty">Ch\u01B0a thi\u1EBFt l\u1EADp</span> }
      @else {
        <span class="c-term">
          <span class="c-mut">{{ row.start }}</span>
          <span class="c-arrow">\u2192</span>
          @if (row.end) { <span [class.c-warn]="row.status === 'expiring'">{{ row.end }}</span> }
          @else { <span class="c-mut">Kh\xF4ng th\u1EDDi h\u1EA1n</span> }
        </span>
      }
    </ng-template>

    <!-- \xD4 T\xECnh tr\u1EA1ng -->
    <ng-template #statusCell let-row>
      <hrm-status-cell [status]="statusTone(row.status)" [label]="statusLabel(row.status)" variant="badge" [dot]="true" />
    </ng-template>

    <!-- \xD4 Thao t\xE1c (S\u1EEDa \xB7 Xo\xE1) -->
    <ng-template #actionsCell let-row>
      <hrm-action-cell [actions]="rowActions" [max]="2" (action)="onRowAction($any(row), $event)" />
    </ng-template>

    <!-- Form Th\xEAm/S\u1EEDa h\u1EE3p \u0111\u1ED3ng \u2014 CONTENT c\u1EE7a hrm-detail-peek. -->
    <ng-template #ctForm>
      <div class="cf-body">
        <!-- Nh\xF3m 1: Th\xF4ng tin nh\xE2n vi\xEAn -->
        <section class="cf-sec">
          <div class="cf-sec-h">Th\xF4ng tin nh\xE2n vi\xEAn</div>
          <div class="cf-grid">
            <label class="cf-field"><span class="cf-lbl">M\xE3 nh\xE2n vi\xEAn</span>
              <hrm-input name="empCode" [(ngModel)]="form.empCode" placeholder="VD: NV0123" /></label>
            <label class="cf-field"><span class="cf-lbl">Ph\xF2ng ban</span>
              <hrm-select name="dept" [(ngModel)]="form.dept" [options]="deptOptions" placeholder="Ch\u1ECDn ph\xF2ng ban" /></label>
            <label class="cf-field cf-field--full"><span class="cf-lbl">H\u1ECD v\xE0 t\xEAn <b class="cf-req">*</b></span>
              <hrm-input name="name" [(ngModel)]="form.name" placeholder="Nh\u1EADp h\u1ECD t\xEAn nh\xE2n vi\xEAn" /></label>
            <label class="cf-field cf-field--full"><span class="cf-lbl">Ch\u1EE9c v\u1EE5</span>
              <hrm-input name="position" [(ngModel)]="form.position" placeholder="VD: Chuy\xEAn vi\xEAn kinh doanh" /></label>
          </div>
        </section>

        <!-- Nh\xF3m 2: Th\xF4ng tin h\u1EE3p \u0111\u1ED3ng -->
        <section class="cf-sec">
          <div class="cf-sec-h">Th\xF4ng tin h\u1EE3p \u0111\u1ED3ng</div>
          <div class="cf-grid">
            <label class="cf-field"><span class="cf-lbl">S\u1ED1 h\u1EE3p \u0111\u1ED3ng</span>
              <hrm-input name="contractNo" [(ngModel)]="form.contractNo" placeholder="VD: H\u0110L\u0110-2026/045" /></label>
            <label class="cf-field"><span class="cf-lbl">Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng</span>
              <hrm-select name="type" [(ngModel)]="form.type" [options]="typeOptions" placeholder="Ch\u1ECDn lo\u1EA1i H\u0110" /></label>
            <label class="cf-field"><span class="cf-lbl">Ng\xE0y b\u1EAFt \u0111\u1EA7u</span>
              <hrm-input name="start" [(ngModel)]="form.start" placeholder="dd/mm/yyyy" /></label>
            <label class="cf-field"><span class="cf-lbl">Ng\xE0y h\u1EBFt h\u1EA1n</span>
              <hrm-input name="end" [(ngModel)]="form.end" placeholder="dd/mm/yyyy (b\u1ECF tr\u1ED1ng n\u1EBFu kh\xF4ng th\u1EDDi h\u1EA1n)" /></label>
            <label class="cf-field"><span class="cf-lbl">L\u01B0\u01A1ng c\u01A1 b\u1EA3n</span>
              <hrm-input name="salary" [(ngModel)]="form.salary" placeholder="VD: 15.000.000" /></label>
            <label class="cf-field"><span class="cf-lbl">T\xECnh tr\u1EA1ng</span>
              <hrm-segmented [options]="statusSegs" [(ngModel)]="form.status" size="md" /></label>
            <label class="cf-field cf-field--full"><span class="cf-lbl">Ghi ch\xFA</span>
              <hrm-textarea name="note" [(ngModel)]="form.note" placeholder="Ghi ch\xFA n\u1ED9i b\u1ED9 (tu\u1EF3 ch\u1ECDn)" /></label>
          </div>
        </section>
      </div>
    </ng-template>

    <!-- FOOTER form \u2014 ghim \u0111\xE1y m\u1ECDi surface (drawer/modal/master). -->
    <ng-template #ctFooter>
      <div class="cf-foot">
        <hrm-button variant="default" (click)="peekOpen.set(false)">Hu\u1EF7</hrm-button>
        <hrm-button variant="primary" (click)="save()">{{ editingId() ? 'L\u01B0u thay \u0111\u1ED5i' : 'Th\xEAm h\u1EE3p \u0111\u1ED3ng' }}</hrm-button>
      </div>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;c0313004d488fd7db40c7b175bd376809871490cbc5d925cc24d8bbdc09aa5c8;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/contract-mgmt-page.ts */\n.lp-desktop {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full {\n  margin-top: 14px;\n}\n.lp-full-link {\n  text-decoration: none;\n}\n.lp-desktop ::ng-deep .shell-content {\n  padding: 0;\n}\n.lp-desktop ::ng-deep .ant-table-tbody > tr > td,\n.lp-desktop ::ng-deep .ant-table-thead > tr > th {\n  white-space: nowrap;\n}\n:host ::ng-deep .ant-tag {\n  margin: 0;\n}\n.as-ico {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-acct-name {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.lp-hdr {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.lp-tabsrow {\n  display: block;\n}\n.lp-tabsrow ::ng-deep .ant-tabs-content-holder,\n.lp-tabsrow ::ng-deep .ant-tabs-content {\n  display: none;\n}\n.lp-tabsrow ::ng-deep .ant-tabs-nav {\n  margin: 0;\n}\n.lp-tabsrow ::ng-deep .ant-tabs {\n  overflow: visible;\n}\n.tbx {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n  flex-wrap: wrap;\n}\n:host ::ng-deep hrm-data-view .dv-bar {\n  display: none;\n}\n.c-mut {\n  color: var(--text-sub);\n}\n.c-empty {\n  color: var(--text-soft);\n}\n.c-term {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13, 13px);\n}\n.c-arrow {\n  color: var(--text-soft);\n}\n.c-warn {\n  color: var(--warning-base);\n  font-weight: var(--font-medium, 500);\n}\n::ng-deep .ant-drawer-body:has(.cf-body),\n::ng-deep .ant-modal-body:has(.cf-body),\n::ng-deep .dp-mbody:has(.cf-body) {\n  padding: 0 !important;\n}\n.cf-body {\n  padding: var(--space-5, 20px) var(--space-5, 20px) var(--space-3, 12px);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6, 24px);\n}\n.cf-sec {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3, 12px);\n}\n.cf-sec-h {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-bold, 700);\n  color: var(--text-strong);\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.cf-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 16px;\n}\n.cf-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.cf-field--full {\n  grid-column: 1 / -1;\n}\n.cf-lbl {\n  font-size: var(--fs-13, 13px);\n  font-weight: var(--font-medium, 500);\n  color: var(--text-strong);\n}\n.cf-req {\n  color: var(--error-base);\n  font-weight: var(--font-bold, 700);\n}\n.cf-foot {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=contract-mgmt-page.css.map */\n"] }]
  }], null, { embedded: [{ type: Input, args: [{ isSignal: true, alias: "embedded", required: false }] }], empCell: [{ type: ViewChild, args: ["empCell", { isSignal: true }] }], typeCell: [{ type: ViewChild, args: ["typeCell", { isSignal: true }] }], termCell: [{ type: ViewChild, args: ["termCell", { isSignal: true }] }], statusCell: [{ type: ViewChild, args: ["statusCell", { isSignal: true }] }], actionsCell: [{ type: ViewChild, args: ["actionsCell", { isSignal: true }] }], ctFormTpl: [{ type: ViewChild, args: ["ctForm", { isSignal: true }] }], ctFooterTpl: [{ type: ViewChild, args: ["ctFooter", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateContractMgmt, { className: "SgTemplateContractMgmt", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/contract-mgmt-page.ts", lineNumber: 272 });
})();

export {
  SgTemplateContractMgmt
};
//# sourceMappingURL=chunk-YB3X36ZU.js.map
