import {
  REQ_TYPES,
  SgRequestDetail,
  reqStatusMeta,
  requestRows
} from "./chunk-BQV5ODMM.js";
import {
  HrmActionBar
} from "./chunk-5MREAVB4.js";
import "./chunk-FJLQWKKP.js";
import {
  HrmDataView,
  HrmListPage,
  HrmListPageTabs
} from "./chunk-GEJ3KJQQ.js";
import "./chunk-HJ57LY37.js";
import "./chunk-XLN4ABX5.js";
import "./chunk-TE5BFWZ7.js";
import "./chunk-CVBIZBQ2.js";
import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import {
  HrmSegmented
} from "./chunk-FCCBRISQ.js";
import {
  HrmDetailPeek
} from "./chunk-DZBGXDE2.js";
import "./chunk-UZ3ETBYP.js";
import {
  HRM_WORKFLOW_ACTIONS,
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import "./chunk-6VCEDPDY.js";
import "./chunk-647OXKCN.js";
import {
  DEFAULT_NAV_SECTIONS
} from "./chunk-R6YXEZBF.js";
import "./chunk-HICBXL5G.js";
import "./chunk-63BVE4AM.js";
import "./chunk-UGXOFJ2W.js";
import "./chunk-UDAG7UB6.js";
import "./chunk-MT7CL62E.js";
import {
  HrmTag
} from "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-OCA5G42J.js";
import "./chunk-INGBAYOP.js";
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
  CalendarStats,
  Check,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Settings,
  TablerIconComponent,
  X
} from "./chunk-LRW4ARR4.js";
import "./chunk-JVYAKZTD.js";
import {
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-approval-page.ts
var _c0 = ["reqDetail"];
var _c1 = ["userCell"];
var _c2 = ["codeCell"];
var _c3 = ["typeCell"];
var _c4 = ["timeCell"];
var _c5 = ["daysCell"];
var _c6 = ["sentCell"];
var _c7 = ["statusCell"];
var _c8 = ["actionCell"];
var _c9 = () => ["table", "card", "kanban", "gantt"];
var _c10 = () => ["master", "side", "center", "full", "tab"];
function SgTemplateRequestApproval_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateRequestApproval_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, SgTemplateRequestApproval_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateRequestApproval_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateRequestApproval_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 14)(1, "div", 16)(2, "div", 17);
    \u0275\u0275template(3, SgTemplateRequestApproval_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "a", 19)(6, "hrm-button", 20);
    \u0275\u0275element(7, "tabler-icon", 21);
    \u0275\u0275text(8, " M\u1EDF to\xE0n m\xE0n h\xECnh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "sg-use", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 24)(12, "sg-do");
    \u0275\u0275text(13, "M\u1EB7c \u0111\u1ECBnh v\xE0o tab 'Ch\u1EDD duy\u1EC7t' \u2014 \u0111\u01B0a vi\u1EC7c c\u1EA7n x\u1EED l\xFD l\xEAn tr\u01B0\u1EDBc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "sg-do");
    \u0275\u0275text(15, "Cho ph\xE9p duy\u1EC7t/t\u1EEB ch\u1ED1i ngay tr\xEAn d\xF2ng + h\xE0ng lo\u1EA1t \u0111\u1EC3 x\u1EED l\xFD nhanh.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "sg-dont");
    \u0275\u0275text(17, "\u0110\u1EEBng \u1EA9n l\xFD do/ng\u1EEF c\u1EA3nh \u2014 ng\u01B0\u1EDDi duy\u1EC7t c\u1EA7n \u0111\u1EE7 th\xF4ng tin \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh.");
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
function SgTemplateRequestApproval_ng_template_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40)(1, "span", 41);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4, "T\xE0i kho\u1EA3n doanh nghi\u1EC7p");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.chevDown)("size", 16);
  }
}
function SgTemplateRequestApproval_ng_template_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateRequestApproval_ng_template_2_Conditional_14_Template_hrm_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.kwModel, $event) || (ctx_r1.kwModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kwModel);
  }
}
function SgTemplateRequestApproval_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selKeys.set([]));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3, "\u0110\xE3 ch\u1ECDn ");
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u0111\u01A1n ch\u1EDD duy\u1EC7t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.close)("size", 16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selKeys().length);
  }
}
function SgTemplateRequestApproval_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-button", 20);
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275text(2, " Xu\u1EA5t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.download)("size", 18);
  }
}
function SgTemplateRequestApproval_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 47);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_2_Conditional_18_Template_hrm_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulk("approve"));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275text(2, " Duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-button", 48);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_2_Conditional_18_Template_hrm_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.bulk("reject"));
    });
    \u0275\u0275element(4, "tabler-icon", 21);
    \u0275\u0275text(5, " T\u1EEB ch\u1ED1i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.check)("size", 16);
    \u0275\u0275advance(2);
    \u0275\u0275property("danger", true);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.close)("size", 16);
  }
}
function SgTemplateRequestApproval_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 25)(1, "hrm-side-nav", 26);
    \u0275\u0275twoWayListener("collapsedChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_side_nav_collapsedChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collapsedModel, $event) || (ctx_r1.collapsedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28)(5, "span", 29);
    \u0275\u0275element(6, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgTemplateRequestApproval_ng_template_2_Conditional_7_Template, 6, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "hrm-list-page", 30);
    \u0275\u0275twoWayListener("pageIndexChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_list_page_pageIndexChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.page, $event) || (ctx_r1.page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "div", 31)(10, "hrm-segmented", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_segmented_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modeModel, $event) || (ctx_r1.modeModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 33)(12, "hrm-segmented", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_segmented_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tabModel, $event) || (ctx_r1.tabModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34);
    \u0275\u0275conditionalCreate(14, SgTemplateRequestApproval_ng_template_2_Conditional_14_Template, 1, 1, "hrm-input", 35)(15, SgTemplateRequestApproval_ng_template_2_Conditional_15_Template, 7, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36);
    \u0275\u0275conditionalCreate(17, SgTemplateRequestApproval_ng_template_2_Conditional_17_Template, 3, 2, "hrm-button", 20)(18, SgTemplateRequestApproval_ng_template_2_Conditional_18_Template, 6, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "hrm-data-view", 37);
    \u0275\u0275listener("selectedKeysChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_data_view_selectedKeysChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selKeys.set($event));
    })("modeChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_data_view_modeChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode.set($event));
    })("openRecord", function SgTemplateRequestApproval_ng_template_2_Template_hrm_data_view_openRecord_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "hrm-detail-peek", 38);
    \u0275\u0275twoWayListener("openChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_detail_peek_openChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekOpen, $event) || (ctx_r1.peekOpen = $event);
      return \u0275\u0275resetView($event);
    })("peekModeChange", function SgTemplateRequestApproval_ng_template_2_Template_hrm_detail_peek_peekModeChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekMode, $event) || (ctx_r1.peekMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_55_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const peekFooter_r7 = \u0275\u0275reference(7);
    const dvCard_r8 = \u0275\u0275reference(25);
    const gtLabel_r9 = \u0275\u0275reference(27);
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
    \u0275\u0275property("subtitle", ctx_r1.subtitle())("total", ctx_r1.mode() === "table" ? ctx_r1.filteredRows().length : 0);
    \u0275\u0275twoWayProperty("pageIndex", ctx_r1.page);
    \u0275\u0275property("pageSize", 10)("panel", ctx_r1.mode() === "table");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.viewSegments);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modeModel);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.tabSegments());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tabModel);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selKeys().length === 0 ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selKeys().length === 0 ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("columns", ctx_r1.cols())("data", ctx_r1.filteredRows())("selectable", true)("selectedKeys", ctx_r1.selKeys())("modes", \u0275\u0275pureFunction0(48, _c9))("mode", ctx_r1.mode())("boardGroups", ctx_r1.boardGroups)("boardCardTemplate", dvCard_r8)("ganttLabelTemplate", gtLabel_r9)("ganttBarTone", ctx_r1.ganttTone)("cardTemplate", dvCard_r8);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("open", ctx_r1.peekOpen)("peekMode", ctx_r1.peekMode);
    \u0275\u0275property("modes", \u0275\u0275pureFunction0(49, _c10))("expandable", false)("title", ((tmp_55_0 = ctx_r1.selectedRow()) == null ? null : tmp_55_0.code) ?? "")("content", ctx_r1.reqDetailTpl() ?? null)("footer", peekFooter_r7)("modeLabels", ctx_r1.peekLabels)("routeUrl", ctx_r1.peekRoute());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hi\u1EC3n th\u1ECB ", ctx_r1.filteredRows().length, " \u0111\u01A1n");
  }
}
function SgTemplateRequestApproval_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sg-request-detail", 49);
  }
  if (rf & 2) {
    \u0275\u0275property("req", ctx);
  }
}
function SgTemplateRequestApproval_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgTemplateRequestApproval_ng_template_4_Conditional_0_Template, 1, 1, "sg-request-detail", 49);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.selectedRow()) ? 0 : -1, tmp_14_0);
  }
}
function SgTemplateRequestApproval_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-action-bar", 51);
    \u0275\u0275listener("action", function SgTemplateRequestApproval_ng_template_6_Conditional_0_Template_hrm_action_bar_action_0_listener($event) {
      const r_r11 = \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyWf(r_r11, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("actions", ctx_r1.wfActions(ctx.status));
  }
}
function SgTemplateRequestApproval_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgTemplateRequestApproval_ng_template_6_Conditional_0_Template, 1, 1, "hrm-action-bar", 50);
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.selectedRow()) ? 0 : -1, tmp_14_0);
  }
}
function SgTemplateRequestApproval_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-user-cell", 52);
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    \u0275\u0275property("name", r_r12.applicant)("sub", r_r12.dept)("colorful", true)("avatarSize", 30);
  }
}
function SgTemplateRequestApproval_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13.code);
  }
}
function SgTemplateRequestApproval_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.REQ_TYPES[r_r14.type]);
  }
}
function SgTemplateRequestApproval_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r15.from, " \u2192 ", r_r15.to);
  }
}
function SgTemplateRequestApproval_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", r_r16.days, " ", r_r16.unit);
  }
}
function SgTemplateRequestApproval_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r17.submittedAt);
  }
}
function SgTemplateRequestApproval_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-status", 56);
  }
  if (rf & 2) {
    const r_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r1.meta(r_r18.status).tone)("label", ctx_r1.meta(r_r18.status).vi)("dot", true);
  }
}
function SgTemplateRequestApproval_ng_template_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 57)(1, "button", 59);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_22_Conditional_0_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const r_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.row(r_r20, "approve");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_22_Conditional_0_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const r_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.row(r_r20, "reject");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(4, "tabler-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.check)("size", 17);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.close)("size", 17);
  }
}
function SgTemplateRequestApproval_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_22_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const r_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openDetail(r_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.eye)("size", 17);
  }
}
function SgTemplateRequestApproval_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgTemplateRequestApproval_ng_template_22_Conditional_0_Template, 5, 4, "span", 57)(1, SgTemplateRequestApproval_ng_template_22_Conditional_1_Template, 2, 2, "button", 58);
  }
  if (rf & 2) {
    const r_r20 = ctx.$implicit;
    \u0275\u0275conditional(r_r20.status === "pending" ? 0 : 1);
  }
}
function SgTemplateRequestApproval_ng_template_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "hrm-button", 67);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_24_Conditional_13_Template_hrm_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const r_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.row(r_r23, "approve");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "tabler-icon", 21);
    \u0275\u0275text(3, " Duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-button", 68);
    \u0275\u0275listener("click", function SgTemplateRequestApproval_ng_template_24_Conditional_13_Template_hrm_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const r_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.row(r_r23, "reject");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(5, "tabler-icon", 21);
    \u0275\u0275text(6, " T\u1EEB ch\u1ED1i");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.check)("size", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("danger", true);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.close)("size", 15);
  }
}
function SgTemplateRequestApproval_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "hrm-user-cell", 52)(3, "hrm-status", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "hrm-tag", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 65);
    \u0275\u0275element(10, "tabler-icon", 21);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, SgTemplateRequestApproval_ng_template_24_Conditional_13_Template, 7, 5, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", r_r23.applicant)("sub", r_r23.dept)("colorful", true)("avatarSize", 34);
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r1.meta(r_r23.status).tone)("label", ctx_r1.meta(r_r23.status).vi)("dot", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r23.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.REQ_TYPES[r_r23.type]);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.icCal)("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", r_r23.from, " \u2192 ", r_r23.to, " \xB7 ", r_r23.days, " ", r_r23.unit);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r23.status === "pending" ? 13 : -1);
  }
}
function SgTemplateRequestApproval_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-user-cell", 52);
  }
  if (rf & 2) {
    const r_r24 = ctx.$implicit;
    \u0275\u0275property("name", r_r24.applicant)("sub", r_r24.dept)("colorful", true)("avatarSize", 26);
  }
}
var SgTemplateRequestApproval = class _SgTemplateRequestApproval {
  constructor() {
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.REQ_TYPES = REQ_TYPES;
    this.caret = ChevronRight;
    this.maximize = ArrowsMaximize;
    this.chevDown = ChevronDown;
    this.bell = Bell;
    this.building = Building;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.download = Download;
    this.check = Check;
    this.close = X;
    this.icCal = CalendarStats;
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.collapsed = signal(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.navUser = { name: "\u0110\u1EB7ng Anh", email: "danganh@vnr.vn" };
    this.gear = Settings;
    this.when = ["H\u1ED9p duy\u1EC7t \u0111\u01A1n t\u1EEB / \u0111\u1EC1 xu\u1EA5t", "X\u1EED l\xFD h\xE0ng lo\u1EA1t b\u1EA3n ghi ch\u1EDD quy\u1EBFt \u0111\u1ECBnh", "Vai tr\xF2 qu\u1EA3n l\xFD / ng\u01B0\u1EDDi ph\xEA duy\u1EC7t"];
    this.navSections = DEFAULT_NAV_SECTIONS;
    this.rows = signal(requestRows(), ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = signal("table", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = 1;
    this._kw = signal("", ...ngDevMode ? [{ debugName: "_kw" }] : (
      /* istanbul ignore next */
      []
    ));
    this._tab = signal("pending", ...ngDevMode ? [{ debugName: "_tab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.submitted = computed(() => this.rows().filter((r) => r.status !== "draft"), ...ngDevMode ? [{ debugName: "submitted" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pendingCount = computed(() => this.rows().filter((r) => r.status === "pending").length, ...ngDevMode ? [{ debugName: "pendingCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = computed(() => `${this.pendingCount()} \u0111\u01A1n ch\u1EDD b\u1EA1n duy\u1EC7t`, ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tabSegments = computed(() => [
      { label: `Ch\u1EDD duy\u1EC7t (${this.pendingCount()})`, value: "pending" },
      { label: "\u0110\xE3 x\u1EED l\xFD", value: "processed" },
      { label: "T\u1EA5t c\u1EA3", value: "all" }
    ], ...ngDevMode ? [{ debugName: "tabSegments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredRows = computed(() => {
      const kw = this._kw().trim().toLowerCase();
      const tab = this._tab();
      return this.submitted().filter((r) => {
        if (tab === "pending" && r.status !== "pending")
          return false;
        if (tab === "processed" && r.status === "pending")
          return false;
        if (kw && !`${r.code} ${r.applicant} ${REQ_TYPES[r.type]}`.toLowerCase().includes(kw))
          return false;
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewSegments = [
      { label: "B\u1EA3ng", value: "table" },
      { label: "Th\u1EBB", value: "card" },
      { label: "Kanban", value: "kanban" },
      { label: "Gantt", value: "gantt" }
    ];
    this.ganttTone = (r) => reqStatusMeta(r["status"]).tone;
    this.boardGroups = [
      { key: "pending", label: "Ch\u1EDD duy\u1EC7t", tone: "warning" },
      { key: "changeRequested", label: "Y\xEAu c\u1EA7u thay \u0111\u1ED5i", tone: "info" },
      { key: "approved", label: "\u0110\xE3 duy\u1EC7t", tone: "success" },
      { key: "rejected", label: "\u0110\xE3 t\u1EEB ch\u1ED1i", tone: "error" },
      { key: "pendingCancel", label: "Ch\u1EDD h\u1EE7y", tone: "warning" },
      { key: "cancelled", label: "\u0110\xE3 h\u1EE7y", tone: "error" }
    ];
    this.eye = Eye;
    this.selKeys = signal([], ...ngDevMode ? [{ debugName: "selKeys" }] : (
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
    this.peekLabels = {
      master: "B\u1EA3ng + chi ti\u1EBFt",
      side: "C\u1EA1nh danh s\xE1ch",
      center: "Gi\u1EEFa m\xE0n h\xECnh",
      full: "To\xE0n trang",
      tab: "Tab m\u1EDBi"
    };
    this.peekRoute = computed(() => {
      const id = this.selectedId();
      return id == null ? "" : `/styleguide/hrm/template/request-record?id=${id}&kind=approval`;
    }, ...ngDevMode ? [{ debugName: "peekRoute" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedId = signal(null, ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedRow = computed(() => {
      const id = this.selectedId();
      return id == null ? null : this.rows().find((r) => r.id === id) ?? null;
    }, ...ngDevMode ? [{ debugName: "selectedRow" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reqDetailTpl = viewChild("reqDetail", ...ngDevMode ? [{ debugName: "reqDetailTpl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.userCell = viewChild("userCell", ...ngDevMode ? [{ debugName: "userCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.codeCell = viewChild("codeCell", ...ngDevMode ? [{ debugName: "codeCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.typeCell = viewChild("typeCell", ...ngDevMode ? [{ debugName: "typeCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.timeCell = viewChild("timeCell", ...ngDevMode ? [{ debugName: "timeCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.daysCell = viewChild("daysCell", ...ngDevMode ? [{ debugName: "daysCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sentCell = viewChild("sentCell", ...ngDevMode ? [{ debugName: "sentCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.statusCell = viewChild("statusCell", ...ngDevMode ? [{ debugName: "statusCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.actionCell = viewChild("actionCell", ...ngDevMode ? [{ debugName: "actionCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cols = computed(() => [
      { key: "code", title: "M\xE3 \u0111\u01A1n", width: "140px", cell: this.codeCell() },
      { key: "applicant", title: "Ng\u01B0\u1EDDi g\u1EEDi", width: "220px", cell: this.userCell() },
      { key: "type", title: "Lo\u1EA1i \u0111\u01A1n", width: "150px", cell: this.typeCell() },
      { key: "time", title: "Th\u1EDDi gian", width: "190px", cell: this.timeCell() },
      { key: "days", title: "S\u1ED1 l\u01B0\u1EE3ng", width: "100px", cell: this.daysCell() },
      { key: "submittedAt", title: "Ng\xE0y g\u1EEDi", width: "120px", cell: this.sentCell() },
      { key: "status", title: "Tr\u1EA1ng th\xE1i", width: "140px", cell: this.statusCell() },
      { key: "act", title: "", align: "right", width: "120px", fixed: "right", cell: this.actionCell() }
    ], ...ngDevMode ? [{ debugName: "cols" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  meta(s) {
    return reqStatusMeta(s);
  }
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  get modeModel() {
    return this.mode();
  }
  set modeModel(v) {
    this.mode.set(v);
  }
  get kwModel() {
    return this._kw();
  }
  set kwModel(v) {
    this._kw.set(v);
  }
  get tabModel() {
    return this._tab();
  }
  set tabModel(v) {
    this._tab.set(v);
    this.selKeys.set([]);
  }
  /** Duyệt/Từ chối nhanh 1 dòng. */
  row(r, key) {
    this.setStatus(r.id, key === "approve" ? "approved" : "rejected");
  }
  bulk(key) {
    const ids = new Set(this.selKeys().map(Number));
    const to = key === "approve" ? "approved" : "rejected";
    this.rows.update((l) => l.map((r) => ids.has(r.id) && r.status === "pending" ? __spreadProps(__spreadValues({}, r), { status: to }) : r));
    this.selKeys.set([]);
  }
  openDetail(r) {
    this.selectedId.set(r.id);
    this.peekOpen.set(true);
  }
  // ── workflow (State Machine chuẩn DS) ──
  setStatus(id, s) {
    this.rows.update((l) => l.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { status: s }) : r));
  }
  /** Cụm hành động footer theo trạng thái = đúng các mũi tên State Machine. */
  wfActions(s) {
    if (s === "draft")
      return [];
    return (HRM_WORKFLOW_ACTIONS[s] ?? []).map((a) => ({
      key: a.key,
      label: a.vi,
      tone: a.tone,
      icon: a.icon
    }));
  }
  applyWf(r, key) {
    if (r.status === "draft")
      return;
    const act = (HRM_WORKFLOW_ACTIONS[r.status] ?? []).find((a) => a.key === key);
    if (!act || act.to === "end")
      return;
    this.setStatus(r.id, act.to);
  }
  static {
    this.\u0275fac = function SgTemplateRequestApproval_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateRequestApproval)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateRequestApproval, selectors: [["sg-template-request-approval"]], viewQuery: function SgTemplateRequestApproval_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.reqDetailTpl, _c0, 5)(ctx.userCell, _c1, 5)(ctx.codeCell, _c2, 5)(ctx.typeCell, _c3, 5)(ctx.timeCell, _c4, 5)(ctx.daysCell, _c5, 5)(ctx.sentCell, _c6, 5)(ctx.statusCell, _c7, 5)(ctx.actionCell, _c8, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(9);
      }
    }, decls: 28, vars: 1, consts: [["screen", ""], ["reqDetail", ""], ["peekFooter", ""], ["userCell", ""], ["codeCell", ""], ["typeCell", ""], ["timeCell", ""], ["daysCell", ""], ["sentCell", ""], ["statusCell", ""], ["actionCell", ""], ["dvCard", ""], ["gtLabel", ""], [1, "lp-desktop", "lp-desktop--full"], ["category", "Template", "title", "Ch\u1EBF \u0111\u1ED9 xem d\u1EEF li\u1EC7u \u2014 Ph\xEA duy\u1EC7t", "desc", "Bi\u1EBFn th\u1EC3 'ng\u01B0\u1EDDi duy\u1EC7t' c\u1EE7a template danh s\xE1ch: h\u1ED9p duy\u1EC7t \u0111\u01A1n t\u1EEB theo tab (Ch\u1EDD duy\u1EC7t / \u0110\xE3 x\u1EED l\xFD / T\u1EA5t c\u1EA3), \u0111a ch\u1EBF \u0111\u1ED9, duy\u1EC7t/t\u1EEB ch\u1ED1i ngay tr\xEAn d\xF2ng + h\xE0ng lo\u1EA1t, chi ti\u1EBFt c\xF3 c\u1EE5m h\xE0nh \u0111\u1ED9ng quy tr\xECnh chu\u1EA9n DS."], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "lp-desktop"], [1, "lp-full"], ["href", "/preview/request-approval", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], ["purpose", "Cho NG\u01AF\u1EDCI DUY\u1EC6T x\u1EED l\xFD h\xE0ng lo\u1EA1t b\u1EA3n ghi ch\u1EDD quy\u1EBFt \u0111\u1ECBnh (\u0111\u01A1n t\u1EEB, \u0111\u1EC1 xu\u1EA5t): duy\u1EC7t/t\u1EEB ch\u1ED1i nhanh tr\xEAn d\xF2ng ho\u1EB7c m\u1EDF chi ti\u1EBFt \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh c\xF3 ng\u1EEF c\u1EA3nh.", "behavior", "M\u1EB7c \u0111\u1ECBnh l\u1ECDc 'Ch\u1EDD duy\u1EC7t'; m\u1ED7i d\xF2ng c\xF3 n\xFAt Duy\u1EC7t/T\u1EEB ch\u1ED1i; ch\u1ECDn nhi\u1EC1u \u2192 duy\u1EC7t/t\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t; chi ti\u1EBFt d\xF9ng c\u1EE5m h\xE0nh \u0111\u1ED9ng State Machine (Duy\u1EC7t \xB7 T\u1EEB ch\u1ED1i \xB7 Y\xEAu c\u1EA7u thay \u0111\u1ED5i).", "avoid", "Kh\xF4ng d\xF9ng cho ng\u01B0\u1EDDi t\u1EA1o \u0111\u01A1n (d\xF9ng bi\u1EBFn th\u1EC3 \u0110\u0103ng k\xFD); kh\xF4ng \u0111\u1EC3 l\u1EABn \u0111\u01A1n Nh\xE1p ch\u01B0a g\u1EEDi v\xE0o h\u1ED9p duy\u1EC7t.", 3, "when"], ["sgBest", ""], ["contentPad", "none"], ["appSideNav", "", "selectedKey", "requests", "switchLabel", "C\xE0i \u0111\u1EB7t", 3, "collapsedChange", "sections", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchIcon"], ["snActions", "", "type", "button", "aria-label", "Th\xF4ng b\xE1o", 1, "as-ico"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], ["title", "Ph\xEA duy\u1EC7t \u0111\u01A1n t\u1EEB", 3, "pageIndexChange", "subtitle", "total", "pageIndex", "pageSize", "panel"], ["headerActions", "", 1, "lp-hdr"], ["size", "md", 3, "ngModelChange", "options", "ngModel"], ["lpTabs", "", 1, "lp-tabsrow"], ["filters", "", 1, "tbx"], ["placeholder", "T\xECm m\xE3 \u0111\u01A1n, ng\u01B0\u1EDDi g\u1EEDi\u2026", 2, "width", "260px", 3, "ngModel"], ["actions", "", 1, "tbx"], ["rowKey", "id", "tableMinWidth", "880px", "groupBy", "status", "startField", "start", "endField", "end", "ganttLabelField", "applicant", "ganttHeader", "Ng\u01B0\u1EDDi g\u1EEDi", "ganttDateHeader", "Th\u1EDDi gian", "tableLabel", "B\u1EA3ng", "cardLabel", "Th\u1EBB", "kanbanLabel", "Kanban", "ganttLabel", "Gantt", 3, "selectedKeysChange", "modeChange", "openRecord", "columns", "data", "selectable", "selectedKeys", "modes", "mode", "boardGroups", "boardCardTemplate", "ganttLabelTemplate", "ganttBarTone", "cardTemplate"], ["lpDetail", "", "switchLabel", "\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB", "expandLabel", "M\u1EDF to\xE0n trang", "closeLabel", "\u0110\xF3ng", "resizeLabel", "K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng", 3, "openChange", "peekModeChange", "open", "peekMode", "modes", "expandable", "title", "content", "footer", "modeLabels", "routeUrl"], ["pagerInfo", ""], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"], ["placeholder", "T\xECm m\xE3 \u0111\u01A1n, ng\u01B0\u1EDDi g\u1EEDi\u2026", 2, "width", "260px", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "B\u1ECF ch\u1ECDn", 1, "bx-clear", 3, "click"], [1, "bx-count"], ["variant", "primary", 3, "click"], ["variant", "default", 3, "click", "danger"], [3, "req"], ["moreLabel", "Th\xEAm", 3, "actions"], ["moreLabel", "Th\xEAm", 3, "action", "actions"], [3, "name", "sub", "colorful", "avatarSize"], [1, "c-code"], ["color", "blue"], [1, "c-mut"], ["variant", "badge", 3, "status", "label", "dot"], [1, "aq"], ["type", "button", "aria-label", "Xem chi ti\u1EBFt", "title", "Xem chi ti\u1EBFt", 1, "aq-btn", "aq-view"], ["type", "button", "aria-label", "Duy\u1EC7t", "title", "Duy\u1EC7t", 1, "aq-btn", "aq-ok", 3, "click"], ["type", "button", "aria-label", "T\u1EEB ch\u1ED1i", "title", "T\u1EEB ch\u1ED1i", 1, "aq-btn", "aq-no", 3, "click"], ["type", "button", "aria-label", "Xem chi ti\u1EBFt", "title", "Xem chi ti\u1EBFt", 1, "aq-btn", "aq-view", 3, "click"], [1, "rc"], [1, "rc-top"], [1, "rc-line"], [1, "rc-row"], [1, "rc-foot"], ["size", "sm", "variant", "primary", 3, "click"], ["size", "sm", "variant", "primary", 3, "click", "danger"]], template: function SgTemplateRequestApproval_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateRequestApproval_Conditional_0_Template, 2, 1, "div", 13)(1, SgTemplateRequestApproval_Conditional_1_Template, 18, 4, "sg-doc", 14);
        \u0275\u0275template(2, SgTemplateRequestApproval_ng_template_2_Template, 23, 50, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, SgTemplateRequestApproval_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, SgTemplateRequestApproval_ng_template_6_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, SgTemplateRequestApproval_ng_template_8_Template, 1, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, SgTemplateRequestApproval_ng_template_10_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, SgTemplateRequestApproval_ng_template_12_Template, 2, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(14, SgTemplateRequestApproval_ng_template_14_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(16, SgTemplateRequestApproval_ng_template_16_Template, 2, 2, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(18, SgTemplateRequestApproval_ng_template_18_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(20, SgTemplateRequestApproval_ng_template_20_Template, 1, 3, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(22, SgTemplateRequestApproval_ng_template_22_Template, 2, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(24, SgTemplateRequestApproval_ng_template_24_Template, 14, 16, "ng-template", null, 11, \u0275\u0275templateRefExtractor)(26, SgTemplateRequestApproval_ng_template_26_Template, 1, 4, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
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
      HrmSegmented,
      HrmInput,
      HrmDataView,
      HrmStatusCell,
      HrmTag,
      HrmUserCell,
      HrmListPage,
      HrmListPageTabs,
      HrmDetailPeek,
      HrmActionBar,
      SgRequestDetail,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], styles: ["\n.lp-desktop[_ngcontent-%COMP%] {\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full[_ngcontent-%COMP%] {\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.lp-full-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content hrm-list-page {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.lp-desktop[_ngcontent-%COMP%]     hrm-data-view .dv-bar {\n  display: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .ant-table-tbody > tr > td, \n.lp-desktop[_ngcontent-%COMP%]     .ant-table-thead > tr > th {\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .ant-tag {\n  margin: 0;\n}\n.lp-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n.lp-tabsrow[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tbx[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 0;\n}\n.bx-clear[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.bx-clear[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.bx-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  background: var(--primary-bg-subtle);\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.bx-count[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n}\n.aq[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: var(--space-2, 8px);\n}\n.aq-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition:\n    filter .12s,\n    background-color .12s,\n    border-color .12s,\n    color .12s;\n}\n.aq-ok[_ngcontent-%COMP%] {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--static-white, #fff);\n}\n.aq-no[_ngcontent-%COMP%] {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.aq-ok[_ngcontent-%COMP%]:hover, \n.aq-no[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.95);\n}\n.aq-view[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.c-code[_ngcontent-%COMP%] {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-13);\n  color: var(--text-strong);\n  font-weight: var(--font-medium, 500);\n}\n.c-mut[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.rc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.rc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.rc-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.rc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.rc-row[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n}\n.rc-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2, 8px);\n  padding-top: var(--space-2, 8px);\n  border-top: 1px solid var(--border-soft);\n}\n.as-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sn-acct-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=request-approval-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateRequestApproval, [{
    type: Component,
    args: [{ selector: "sg-template-request-approval", imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      HrmAppShell,
      HrmSideNav,
      HrmButton,
      HrmSegmented,
      HrmInput,
      HrmDataView,
      HrmStatusCell,
      HrmTag,
      HrmUserCell,
      HrmListPage,
      HrmListPageTabs,
      HrmDetailPeek,
      HrmActionBar,
      SgRequestDetail,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], template: `
    @if (preview) {
      <div class="lp-desktop lp-desktop--full"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
    <sg-doc category="Template" title="Ch\u1EBF \u0111\u1ED9 xem d\u1EEF li\u1EC7u \u2014 Ph\xEA duy\u1EC7t"
      desc="Bi\u1EBFn th\u1EC3 'ng\u01B0\u1EDDi duy\u1EC7t' c\u1EE7a template danh s\xE1ch: h\u1ED9p duy\u1EC7t \u0111\u01A1n t\u1EEB theo tab (Ch\u1EDD duy\u1EC7t / \u0110\xE3 x\u1EED l\xFD / T\u1EA5t c\u1EA3), \u0111a ch\u1EBF \u0111\u1ED9, duy\u1EC7t/t\u1EEB ch\u1ED1i ngay tr\xEAn d\xF2ng + h\xE0ng lo\u1EA1t, chi ti\u1EBFt c\xF3 c\u1EE5m h\xE0nh \u0111\u1ED9ng quy tr\xECnh chu\u1EA9n DS.">
      <div sgOverview>
        <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
        <div class="lp-full">
          <a class="lp-full-link" href="/preview/request-approval" target="_blank" rel="noopener">
            <hrm-button variant="default"><tabler-icon [icon]="maximize" [size]="16" /> M\u1EDF to\xE0n m\xE0n h\xECnh</hrm-button>
          </a>
        </div>
      </div>
      <div sgUsage>
        <sg-use purpose="Cho NG\u01AF\u1EDCI DUY\u1EC6T x\u1EED l\xFD h\xE0ng lo\u1EA1t b\u1EA3n ghi ch\u1EDD quy\u1EBFt \u0111\u1ECBnh (\u0111\u01A1n t\u1EEB, \u0111\u1EC1 xu\u1EA5t): duy\u1EC7t/t\u1EEB ch\u1ED1i nhanh tr\xEAn d\xF2ng ho\u1EB7c m\u1EDF chi ti\u1EBFt \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh c\xF3 ng\u1EEF c\u1EA3nh."
          [when]="when"
          behavior="M\u1EB7c \u0111\u1ECBnh l\u1ECDc 'Ch\u1EDD duy\u1EC7t'; m\u1ED7i d\xF2ng c\xF3 n\xFAt Duy\u1EC7t/T\u1EEB ch\u1ED1i; ch\u1ECDn nhi\u1EC1u \u2192 duy\u1EC7t/t\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t; chi ti\u1EBFt d\xF9ng c\u1EE5m h\xE0nh \u0111\u1ED9ng State Machine (Duy\u1EC7t \xB7 T\u1EEB ch\u1ED1i \xB7 Y\xEAu c\u1EA7u thay \u0111\u1ED5i)."
          avoid="Kh\xF4ng d\xF9ng cho ng\u01B0\u1EDDi t\u1EA1o \u0111\u01A1n (d\xF9ng bi\u1EBFn th\u1EC3 \u0110\u0103ng k\xFD); kh\xF4ng \u0111\u1EC3 l\u1EABn \u0111\u01A1n Nh\xE1p ch\u01B0a g\u1EEDi v\xE0o h\u1ED9p duy\u1EC7t." />
      </div>
      <div sgBest>
        <sg-do>M\u1EB7c \u0111\u1ECBnh v\xE0o tab 'Ch\u1EDD duy\u1EC7t' \u2014 \u0111\u01B0a vi\u1EC7c c\u1EA7n x\u1EED l\xFD l\xEAn tr\u01B0\u1EDBc.</sg-do>
        <sg-do>Cho ph\xE9p duy\u1EC7t/t\u1EEB ch\u1ED1i ngay tr\xEAn d\xF2ng + h\xE0ng lo\u1EA1t \u0111\u1EC3 x\u1EED l\xFD nhanh.</sg-do>
        <sg-dont>\u0110\u1EEBng \u1EA9n l\xFD do/ng\u1EEF c\u1EA3nh \u2014 ng\u01B0\u1EDDi duy\u1EC7t c\u1EA7n \u0111\u1EE7 th\xF4ng tin \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh.</sg-dont>
      </div>
    </sg-doc>
    }

    <ng-template #screen>
      <hrm-app-shell contentPad="none">
        <hrm-side-nav appSideNav [sections]="navSections" selectedKey="requests"
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

        <hrm-list-page title="Ph\xEA duy\u1EC7t \u0111\u01A1n t\u1EEB" [subtitle]="subtitle()"
          [total]="mode() === 'table' ? filteredRows().length : 0" [(pageIndex)]="page" [pageSize]="10" [panel]="mode() === 'table'">

          <div headerActions class="lp-hdr">
            <hrm-segmented [options]="viewSegments" [(ngModel)]="modeModel" size="md" />
          </div>

          <!-- Tab l\u1ECDc tr\u1EA1ng th\xE1i x\u1EED l\xFD -->
          <div lpTabs class="lp-tabsrow">
            <hrm-segmented [options]="tabSegments()" [(ngModel)]="tabModel" size="md" />
          </div>

          <div filters class="tbx">
            @if (selKeys().length === 0) {
              <hrm-input [(ngModel)]="kwModel" placeholder="T\xECm m\xE3 \u0111\u01A1n, ng\u01B0\u1EDDi g\u1EEDi\u2026" style="width:260px" />
            } @else {
              <button type="button" class="bx-clear" aria-label="B\u1ECF ch\u1ECDn" (click)="selKeys.set([])"><tabler-icon [icon]="close" [size]="16" /></button>
              <span class="bx-count">\u0110\xE3 ch\u1ECDn <b>{{ selKeys().length }}</b> \u0111\u01A1n ch\u1EDD duy\u1EC7t</span>
            }
          </div>
          <div actions class="tbx">
            @if (selKeys().length === 0) {
              <hrm-button variant="default"><tabler-icon [icon]="download" [size]="18" /> Xu\u1EA5t</hrm-button>
            } @else {
              <hrm-button variant="primary" (click)="bulk('approve')"><tabler-icon [icon]="check" [size]="16" /> Duy\u1EC7t</hrm-button>
              <hrm-button variant="default" [danger]="true" (click)="bulk('reject')"><tabler-icon [icon]="close" [size]="16" /> T\u1EEB ch\u1ED1i</hrm-button>
            }
          </div>

          <hrm-data-view
            [columns]="cols()" [data]="filteredRows()" rowKey="id" tableMinWidth="880px"
            [selectable]="true" [selectedKeys]="selKeys()" (selectedKeysChange)="selKeys.set($event)"
            [modes]="['table','card','kanban','gantt']" [mode]="mode()" (modeChange)="mode.set($any($event))"
            groupBy="status" [boardGroups]="boardGroups" [boardCardTemplate]="dvCard"
            startField="start" endField="end" ganttLabelField="applicant" ganttHeader="Ng\u01B0\u1EDDi g\u1EEDi" ganttDateHeader="Th\u1EDDi gian"
            [ganttLabelTemplate]="gtLabel" [ganttBarTone]="ganttTone"
            [cardTemplate]="dvCard"
            (openRecord)="openDetail($any($event))"
            tableLabel="B\u1EA3ng" cardLabel="Th\u1EBB" kanbanLabel="Kanban" ganttLabel="Gantt" />

          <hrm-detail-peek lpDetail [(open)]="peekOpen" [(peekMode)]="peekMode"
            [modes]="['master','side','center','full','tab']" [expandable]="false"
            [title]="selectedRow()?.code ?? ''" [content]="reqDetailTpl() ?? null" [footer]="peekFooter"
            [modeLabels]="peekLabels" [routeUrl]="peekRoute()"
            switchLabel="\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB" expandLabel="M\u1EDF to\xE0n trang" closeLabel="\u0110\xF3ng" resizeLabel="K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng" />
          <span pagerInfo>Hi\u1EC3n th\u1ECB {{ filteredRows().length }} \u0111\u01A1n</span>
        </hrm-list-page>
      </hrm-app-shell>
    </ng-template>

    <ng-template #reqDetail>
      @if (selectedRow(); as r) { <sg-request-detail [req]="r" /> }
    </ng-template>

    <!-- FOOTER chi ti\u1EBFt \u2014 c\u1EE5m h\xE0nh \u0111\u1ED9ng QUY TR\xCCNH chu\u1EA9n DS theo tr\u1EA1ng th\xE1i. -->
    <ng-template #peekFooter>
      @if (selectedRow(); as r) {
        <hrm-action-bar [actions]="wfActions(r.status)" moreLabel="Th\xEAm" (action)="applyWf(r, $event)" />
      }
    </ng-template>

    <!-- Cells -->
    <ng-template #userCell let-r><hrm-user-cell [name]="$any(r.applicant)" [sub]="$any(r.dept)" [colorful]="true" [avatarSize]="30" /></ng-template>
    <ng-template #codeCell let-r><span class="c-code">{{ r.code }}</span></ng-template>
    <ng-template #typeCell let-r><hrm-tag color="blue">{{ REQ_TYPES[r.type] }}</hrm-tag></ng-template>
    <ng-template #timeCell let-r><span class="c-mut">{{ r.from }} \u2192 {{ r.to }}</span></ng-template>
    <ng-template #daysCell let-r><span>{{ r.days }} {{ r.unit }}</span></ng-template>
    <ng-template #sentCell let-r><span class="c-mut">{{ r.submittedAt }}</span></ng-template>
    <ng-template #statusCell let-r>
      <hrm-status [status]="meta(r.status).tone" [label]="meta(r.status).vi" variant="badge" [dot]="true" />
    </ng-template>
    <!-- C\u1ED9t h\xE0nh \u0111\u1ED9ng \u2014 n\xFAt M\xC0U NG\u1EEE NGH\u0128A (duy\u1EC7t xanh \xB7 t\u1EEB ch\u1ED1i \u0111\u1ECF), \u0111\u1ED3ng b\u1ED9 ng\xF4n ng\u1EEF m\xE0u v\u1EDBi footer. -->
    <ng-template #actionCell let-r>
      @if (r.status === 'pending') {
        <span class="aq">
          <button type="button" class="aq-btn aq-ok" aria-label="Duy\u1EC7t" title="Duy\u1EC7t"
            (click)="row(r, 'approve'); $event.stopPropagation()"><tabler-icon [icon]="check" [size]="17" /></button>
          <button type="button" class="aq-btn aq-no" aria-label="T\u1EEB ch\u1ED1i" title="T\u1EEB ch\u1ED1i"
            (click)="row(r, 'reject'); $event.stopPropagation()"><tabler-icon [icon]="close" [size]="17" /></button>
        </span>
      } @else {
        <button type="button" class="aq-btn aq-view" aria-label="Xem chi ti\u1EBFt" title="Xem chi ti\u1EBFt"
          (click)="openDetail(r); $event.stopPropagation()"><tabler-icon [icon]="eye" [size]="17" /></button>
      }
    </ng-template>

    <ng-template #dvCard let-r>
      <div class="rc">
        <div class="rc-top">
          <hrm-user-cell [name]="$any(r.applicant)" [sub]="$any(r.dept)" [colorful]="true" [avatarSize]="34" />
          <hrm-status [status]="meta(r.status).tone" [label]="meta(r.status).vi" variant="badge" [dot]="true" />
        </div>
        <div class="rc-line"><span class="c-code">{{ r.code }}</span><hrm-tag color="blue">{{ REQ_TYPES[r.type] }}</hrm-tag></div>
        <div class="rc-row"><tabler-icon [icon]="icCal" [size]="14" /><span>{{ r.from }} \u2192 {{ r.to }} \xB7 {{ r.days }} {{ r.unit }}</span></div>
        @if (r.status === 'pending') {
          <div class="rc-foot">
            <hrm-button size="sm" variant="primary" (click)="row(r, 'approve'); $event.stopPropagation()"><tabler-icon [icon]="check" [size]="15" /> Duy\u1EC7t</hrm-button>
            <hrm-button size="sm" variant="primary" [danger]="true" (click)="row(r, 'reject'); $event.stopPropagation()"><tabler-icon [icon]="close" [size]="15" /> T\u1EEB ch\u1ED1i</hrm-button>
          </div>
        }
      </div>
    </ng-template>

    <!-- Nh\xE3n tr\xE1i Gantt \u2014 ng\u01B0\u1EDDi g\u1EEDi (avatar + t\xEAn + ph\xF2ng ban). -->
    <ng-template #gtLabel let-r>
      <hrm-user-cell [name]="$any(r.applicant)" [sub]="$any(r.dept)" [colorful]="true" [avatarSize]="26" />
    </ng-template>
  `, styles: ["/* angular:styles/component:css;a0b0a54140d3e1f0a55e422cd877d1a0f16073326a223050f1c57a864a7f4719;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-approval-page.ts */\n.lp-desktop {\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full {\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-full {\n  margin-top: 14px;\n}\n.lp-full-link {\n  text-decoration: none;\n}\n.lp-desktop ::ng-deep .shell-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.lp-desktop ::ng-deep .shell-content hrm-list-page {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n.lp-desktop ::ng-deep hrm-data-view .dv-bar {\n  display: none;\n}\n.lp-desktop ::ng-deep .ant-table-tbody > tr > td,\n.lp-desktop ::ng-deep .ant-table-thead > tr > th {\n  white-space: nowrap;\n}\n:host ::ng-deep .ant-tag {\n  margin: 0;\n}\n.lp-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--space-2);\n}\n.lp-tabsrow {\n  display: flex;\n}\n.tbx {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-width: 0;\n}\n.bx-clear {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.bx-clear:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.bx-count {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  background: var(--primary-bg-subtle);\n  padding: 4px 10px;\n  border-radius: var(--radius-full);\n  white-space: nowrap;\n}\n.bx-count b {\n  color: var(--primary-base);\n}\n.aq {\n  display: inline-flex;\n  gap: var(--space-2, 8px);\n}\n.aq-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  transition:\n    filter .12s,\n    background-color .12s,\n    border-color .12s,\n    color .12s;\n}\n.aq-ok {\n  background: var(--primary-base);\n  border-color: var(--primary-base);\n  color: var(--static-white, #fff);\n}\n.aq-no {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.aq-ok:hover,\n.aq-no:hover {\n  filter: brightness(0.95);\n}\n.aq-view:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.c-code {\n  font-family: var(--font-mono, ui-monospace, monospace);\n  font-size: var(--fs-13);\n  color: var(--text-strong);\n  font-weight: var(--font-medium, 500);\n}\n.c-mut {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.rc {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2, 8px);\n}\n.rc-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.rc-line {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2, 8px);\n}\n.rc-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.rc-row tabler-icon {\n  flex: none;\n  color: var(--text-soft);\n}\n.rc-foot {\n  display: flex;\n  gap: var(--space-2, 8px);\n  padding-top: var(--space-2, 8px);\n  border-top: 1px solid var(--border-soft);\n}\n.as-ico {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info {\n  flex: 1;\n  min-width: 0;\n}\n.sn-acct-name {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=request-approval-page.css.map */\n"] }]
  }], null, { reqDetailTpl: [{ type: ViewChild, args: ["reqDetail", { isSignal: true }] }], userCell: [{ type: ViewChild, args: ["userCell", { isSignal: true }] }], codeCell: [{ type: ViewChild, args: ["codeCell", { isSignal: true }] }], typeCell: [{ type: ViewChild, args: ["typeCell", { isSignal: true }] }], timeCell: [{ type: ViewChild, args: ["timeCell", { isSignal: true }] }], daysCell: [{ type: ViewChild, args: ["daysCell", { isSignal: true }] }], sentCell: [{ type: ViewChild, args: ["sentCell", { isSignal: true }] }], statusCell: [{ type: ViewChild, args: ["statusCell", { isSignal: true }] }], actionCell: [{ type: ViewChild, args: ["actionCell", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateRequestApproval, { className: "SgTemplateRequestApproval", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/request-approval-page.ts", lineNumber: 237 });
})();
export {
  SgTemplateRequestApproval
};
//# sourceMappingURL=chunk-ERCNAGVB.js.map
