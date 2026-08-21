import {
  VnrApprovalPanel,
  VnrChangeComparison,
  VnrDocumentGroup,
  VnrExpenseTable,
  VnrFormField,
  VnrFormGrid,
  VnrFormSection,
  VnrFormShell,
  VnrHrCalendar,
  VnrRepeatableGroup
} from "./chunk-FMTJNLTR.js";
import "./chunk-H656EMSP.js";
import {
  HrmActionBar
} from "./chunk-5MREAVB4.js";
import "./chunk-FJLQWKKP.js";
import {
  HrmDetailPeek
} from "./chunk-DZBGXDE2.js";
import "./chunk-UZ3ETBYP.js";
import {
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import "./chunk-6VCEDPDY.js";
import "./chunk-647OXKCN.js";
import {
  HrmTextarea
} from "./chunk-IBXTICOI.js";
import "./chunk-Z3IELLHT.js";
import {
  DEFAULT_NAV_SECTIONS
} from "./chunk-R6YXEZBF.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
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
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Pencil,
  Plus,
  Settings,
  TablerIconComponent
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/form-entry-page.ts
var _c0 = ["formTemplate"];
var _c1 = ["footerTemplate"];
var _c2 = ["participantTemplate"];
var _c3 = () => ["master", "side", "center"];
var _c4 = () => ["Ng\xE2n s\xE1ch ph\xF2ng ban", "T\u1EA1m \u1EE9ng"];
var _c5 = () => ["T\u1EA1m \u1EE9ng", "Quy\u1EBFt to\xE1n", "Ng\xE2n s\xE1ch ph\xF2ng ban"];
var _forTrack0 = ($index, $item) => $item.id;
function SgTemplateFormEntry_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateFormEntry_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, SgTemplateFormEntry_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateFormEntry_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateFormEntry_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 5)(1, "div", 7)(2, "div", 8);
    \u0275\u0275template(3, SgTemplateFormEntry_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "a", 10)(6, "hrm-button", 11);
    \u0275\u0275element(7, "tabler-icon", 12);
    \u0275\u0275text(8, " M\u1EDF to\xE0n m\xE0n h\xECnh");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275element(10, "sg-use", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "sg-do");
    \u0275\u0275text(13, "Khai k\xEDch th\u01B0\u1EDBc field theo NG\u1EEE NGH\u0128A (sm/md/lg/full), \u0111\u1EC3 shell t\u1EF1 quy \u0111\u1ED5i s\u1ED1 c\u1ED9t.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "sg-do");
    \u0275\u0275text(15, "\u0110\u1EB7t c\xF4ng th\u1EE9c (th\xE0nh ti\u1EC1n, h\u1EA1n m\u1EE9c, s\u1ED1 ng\xE0y c\xF4ng) \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5; component ch\u1EC9 hi\u1EC3n th\u1ECB.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "sg-do");
    \u0275\u0275text(17, "C\xF9ng m\u1ED9t form cho T\u1EA1o m\u1EDBi v\xE0 Ch\u1EC9nh s\u1EEDa \u2014 ch\u1EC9 kh\xE1c d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o v\xE0 ph\u1EA7n \u0111\u1ED1i chi\u1EBFu.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "sg-dont");
    \u0275\u0275text(19, "\u0110\u1EEBng g\xE1n s\u1ED1 c\u1ED9t c\u1EE9ng theo t\xEAn ch\u1EBF \u0111\u1ED9 m\u1EDF (side = 1 c\u1ED9t, full = 3 c\u1ED9t\u2026).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "sg-dont");
    \u0275\u0275text(21, '\u0110\u1EEBng b\u1EADt ch\u1EBF \u0111\u1ED9 "to\xE0n trang/tab m\u1EDBi" khi ch\u01B0a khai routeUrl \u2014 b\u1EA5m s\u1EBD kh\xF4ng c\xF3 ph\u1EA3n h\u1ED3i.');
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
function SgTemplateFormEntry_ng_template_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "span", 34);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4, "T\xE0i kho\u1EA3n doanh nghi\u1EC7p");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "tabler-icon", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", ctx_r1.chevDown)("size", 16);
  }
}
function SgTemplateFormEntry_ng_template_2_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "hrm-status", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 30)(14, "hrm-button", 40);
    \u0275\u0275listener("click", function SgTemplateFormEntry_ng_template_2_For_44_Template_hrm_button_click_14_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(r_r5));
    });
    \u0275\u0275element(15, "tabler-icon", 12);
    \u0275\u0275text(16, " Ch\u1EC9nh s\u1EEDa ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", ctx_r1.editingId() === r_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.destination);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.days);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.money(r_r5.budget));
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r1.statusTone(r_r5.status))("label", ctx_r1.statusLabel(r_r5.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.pencil)("size", 15);
  }
}
function SgTemplateFormEntry_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 16)(1, "hrm-side-nav", 17);
    \u0275\u0275twoWayListener("collapsedChange", function SgTemplateFormEntry_ng_template_2_Template_hrm_side_nav_collapsedChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collapsedModel, $event) || (ctx_r1.collapsedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275element(3, "tabler-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19)(5, "span", 20);
    \u0275\u0275element(6, "tabler-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgTemplateFormEntry_ng_template_2_Conditional_7_Template, 6, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22)(10, "header", 23)(11, "div")(12, "h1", 24);
    \u0275\u0275text(13, "\u0110\u0103ng k\xFD c\xF4ng t\xE1c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 25);
    \u0275\u0275text(15, "B\u1EA5m ");
    \u0275\u0275elementStart(16, "b");
    \u0275\u0275text(17, "T\u1EA1o m\u1EDBi");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " ho\u1EB7c ");
    \u0275\u0275elementStart(19, "b");
    \u0275\u0275text(20, "Ch\u1EC9nh s\u1EEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " \u0111\u1EC3 m\u1EDF form. \u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB \u1EDF g\xF3c form \u0111\u1EC3 xem b\u1ED1 c\u1EE5c t\u1EF1 th\xEDch \u1EE9ng.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "hrm-button", 26);
    \u0275\u0275listener("click", function SgTemplateFormEntry_ng_template_2_Template_hrm_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275element(23, "tabler-icon", 12);
    \u0275\u0275text(24, " T\u1EA1o m\u1EDBi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 27)(26, "table", 28)(27, "thead")(28, "tr")(29, "th");
    \u0275\u0275text(30, "M\xE3 chuy\u1EBFn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "M\u1EE5c \u0111\xEDch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "\u0110i\u1EC3m \u0111\u1EBFn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 29);
    \u0275\u0275text(36, "S\u1ED1 ng\xE0y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 29);
    \u0275\u0275text(38, "D\u1EF1 to\xE1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Tr\u1EA1ng th\xE1i");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "th", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, SgTemplateFormEntry_ng_template_2_For_44_Template, 17, 11, "tr", 31, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "hrm-detail-peek", 32);
    \u0275\u0275twoWayListener("openChange", function SgTemplateFormEntry_ng_template_2_Template_hrm_detail_peek_openChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekOpen, $event) || (ctx_r1.peekOpen = $event);
      return \u0275\u0275resetView($event);
    })("peekModeChange", function SgTemplateFormEntry_ng_template_2_Template_hrm_detail_peek_peekModeChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.peekMode, $event) || (ctx_r1.peekMode = $event);
      return \u0275\u0275resetView($event);
    });
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
    \u0275\u0275advance(16);
    \u0275\u0275property("icon", ctx_r1.plus)("size", 16);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.rows());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("open", ctx_r1.peekOpen)("peekMode", ctx_r1.peekMode);
    \u0275\u0275property("modes", \u0275\u0275pureFunction0(28, _c3))("expandable", false)("title", ctx_r1.peekTitle())("content", ctx_r1.formTpl())("footer", ctx_r1.footerTpl())("masterWidth", 560)("width", 520)("modalWidth", 900);
  }
}
function SgTemplateFormEntry_ng_template_4_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "vnr-form-section", 67);
    \u0275\u0275element(1, "vnr-change-comparison", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r1.comparison())("impacted", \u0275\u0275pureFunction0(2, _c5));
  }
}
function SgTemplateFormEntry_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "vnr-form-shell")(1, "vnr-form-section", 41)(2, "vnr-form-grid")(3, "vnr-form-field", 42)(4, "hrm-input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "vnr-form-field", 44)(6, "hrm-input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.purpose, $event) || (ctx_r1.form.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "vnr-form-field", 46)(8, "hrm-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.kind, $event) || (ctx_r1.form.kind = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "vnr-form-field", 48)(10, "hrm-input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destination, $event) || (ctx_r1.form.destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "vnr-form-field", 50)(12, "hrm-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.transport, $event) || (ctx_r1.form.transport = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "vnr-form-field", 52)(14, "hrm-input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.handover, $event) || (ctx_r1.form.handover = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "vnr-form-field", 54)(16, "hrm-textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function SgTemplateFormEntry_ng_template_4_Template_hrm_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.note, $event) || (ctx_r1.form.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "vnr-form-section", 56)(18, "vnr-form-grid")(19, "vnr-form-field", 57)(20, "vnr-hr-calendar", 58);
    \u0275\u0275twoWayListener("selectedChange", function SgTemplateFormEntry_ng_template_4_Template_vnr_hr_calendar_selectedChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.picked, $event) || (ctx_r1.picked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "vnr-form-section", 59)(22, "vnr-expense-table", 60);
    \u0275\u0275listener("cellChange", function SgTemplateFormEntry_ng_template_4_Template_vnr_expense_table_cellChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExpenseCell($event));
    })("addRow", function SgTemplateFormEntry_ng_template_4_Template_vnr_expense_table_addRow_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addExpense());
    })("removeRow", function SgTemplateFormEntry_ng_template_4_Template_vnr_expense_table_removeRow_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeExpense($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "vnr-form-section", 61)(24, "vnr-repeatable-group", 62);
    \u0275\u0275listener("add", function SgTemplateFormEntry_ng_template_4_Template_vnr_repeatable_group_add_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addParticipant());
    })("remove", function SgTemplateFormEntry_ng_template_4_Template_vnr_repeatable_group_remove_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeParticipant($event));
    })("setPrimary", function SgTemplateFormEntry_ng_template_4_Template_vnr_repeatable_group_setPrimary_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.leadId.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "vnr-form-section", 63)(26, "vnr-document-group", 64);
    \u0275\u0275listener("add", function SgTemplateFormEntry_ng_template_4_Template_vnr_document_group_add_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDocument());
    })("remove", function SgTemplateFormEntry_ng_template_4_Template_vnr_document_group_remove_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeDocument($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "vnr-form-section", 65);
    \u0275\u0275element(28, "vnr-approval-panel", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, SgTemplateFormEntry_ng_template_4_Conditional_29_Template, 2, 3, "vnr-form-section", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.filledMeta());
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.code);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.kind);
    \u0275\u0275property("options", ctx_r1.kindOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destination);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.transport);
    \u0275\u0275property("options", ctx_r1.transportOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.handover);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.note);
    \u0275\u0275property("minRows", 2)("maxRows", 4);
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.daysMeta());
    \u0275\u0275advance(3);
    \u0275\u0275property("days", ctx_r1.calendarDays);
    \u0275\u0275twoWayProperty("selected", ctx_r1.picked);
    \u0275\u0275property("summary", ctx_r1.calSummary());
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.budgetMeta());
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r1.expenses())("totals", ctx_r1.expenseTotals());
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.peopleMeta());
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.participants())("itemTemplate", ctx_r1.participantTpl())("max", 5)("allowPrimary", true)("primaryId", ctx_r1.leadId());
    \u0275\u0275advance();
    \u0275\u0275property("meta", ctx_r1.docsMeta());
    \u0275\u0275advance();
    \u0275\u0275property("documents", ctx_r1.documents());
    \u0275\u0275advance(2);
    \u0275\u0275property("steps", ctx_r1.approvalSteps())("warnings", ctx_r1.policyWarnings())("impacted", \u0275\u0275pureFunction0(31, _c4));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode() === "edit" ? 29 : -1);
  }
}
function SgTemplateFormEntry_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "vnr-form-grid")(1, "vnr-form-field", 69)(2, "hrm-input", 70);
    \u0275\u0275listener("ngModelChange", function SgTemplateFormEntry_ng_template_6_Template_hrm_input_ngModelChange_2_listener($event) {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setParticipant(p_r8.id, "name", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "vnr-form-field", 71)(4, "hrm-input", 70);
    \u0275\u0275listener("ngModelChange", function SgTemplateFormEntry_ng_template_6_Template_hrm_input_ngModelChange_4_listener($event) {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setParticipant(p_r8.id, "title", $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", p_r8.name)("name", "pname" + i_r9);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", p_r8.title)("name", "ptitle" + i_r9);
  }
}
function SgTemplateFormEntry_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-action-bar", 72);
    \u0275\u0275listener("action", function SgTemplateFormEntry_ng_template_8_Template_hrm_action_bar_action_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFooter($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("actions", ctx_r1.footerActions);
  }
}
var SEED = [
  { id: "t1", code: "CT-2026-0148", purpose: "Kh\u1EA3o s\xE1t nh\xE0 m\xE1y B\xECnh D\u01B0\u01A1ng", kind: "Trong n\u01B0\u1EDBc", destination: "B\xECnh D\u01B0\u01A1ng", days: 4, budget: 66e5, status: "pending" },
  { id: "t2", code: "CT-2026-0151", purpose: "\u0110\xE0o t\u1EA1o h\u1EC7 th\u1ED1ng ERP", kind: "Trong n\u01B0\u1EDBc", destination: "H\xE0 N\u1ED9i", days: 3, budget: 82e5, status: "approved" },
  { id: "t3", code: "CT-2026-0155", purpose: "L\xE0m vi\u1EC7c v\u1EDBi \u0111\u1ED1i t\xE1c Singapore", kind: "Qu\u1ED1c t\u1EBF", destination: "Singapore", days: 5, budget: 425e5, status: "draft" }
];
var POLICY_LIMIT = { "L\u01B0u tr\xFA": 1e6, "\u0110i l\u1EA1i": 3e6, "Ph\u1EE5 c\u1EA5p ng\xE0y": 4e5 };
function recalcExpenses(rows) {
  return rows.map((r) => {
    const amount = r.quantity != null && r.unitPrice != null ? r.quantity * r.unitPrice : null;
    const limit = POLICY_LIMIT[r.category];
    const over = limit != null && r.unitPrice != null && r.unitPrice > limit;
    return __spreadProps(__spreadValues({}, r), {
      amount,
      policyState: over ? "over" : "ok",
      policyMessage: over ? `V\u01B0\u1EE3t h\u1EA1n m\u1EE9c ${new Intl.NumberFormat("vi-VN").format(limit)}/\u0111\u01A1n v\u1ECB theo c\u1EA5p b\u1EADc` : null
    });
  });
}
function totalOf(rows) {
  return [{ currency: "VND", amount: rows.reduce((s, r) => s + (r.amount ?? 0), 0) }];
}
function buildMonth() {
  const out = [];
  const holidays = /* @__PURE__ */ new Set(["2026-08-18"]);
  const conflicts = /* @__PURE__ */ new Map([["2026-08-11", "Tr\xF9ng \u0111\u01A1n ngh\u1EC9 ph\xE9p \u0111\xE3 duy\u1EC7t"]]);
  const locked = /* @__PURE__ */ new Set(["2026-08-20", "2026-08-21"]);
  const shifts = /* @__PURE__ */ new Map([["2026-08-12", "Ca2"]]);
  for (let d = 27; d <= 31; d++)
    out.push({ date: `2026-07-${d}`, day: d, kind: "workday" });
  for (let d = 1; d <= 31; d++) {
    const iso = `2026-08-${String(d).padStart(2, "0")}`;
    const dow = out.length % 7;
    const kind = locked.has(iso) ? "locked" : holidays.has(iso) ? "holiday" : dow >= 5 ? "weekend" : "workday";
    out.push({
      date: iso,
      day: d,
      kind,
      conflict: conflicts.get(iso) ?? null,
      shift: shifts.get(iso) ?? null,
      portion: iso === "2026-08-10" ? 0.5 : 1
    });
  }
  return out;
}
var SgTemplateFormEntry = class _SgTemplateFormEntry {
  constructor() {
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.rows = signal(SEED.map((r) => __spreadValues({}, r)), ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.editingId = signal(null, ...ngDevMode ? [{ debugName: "editingId" }] : (
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
    this.mode = signal("create", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekTitle = computed(() => this.mode() === "create" ? "T\u1EA1o m\u1EDBi \u0111\u0103ng k\xFD c\xF4ng t\xE1c" : `Ch\u1EC9nh s\u1EEDa \xB7 ${this.form.code}`, ...ngDevMode ? [{ debugName: "peekTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.formTemplateRef = viewChild.required("formTemplate");
    this.footerTemplateRef = viewChild.required("footerTemplate");
    this.form = { code: "", purpose: "", kind: "Trong n\u01B0\u1EDBc", destination: "", transport: "\xD4 t\xF4 c\xF4ng ty", handover: "", note: "" };
    this.calendarDays = buildMonth();
    this.picked = signal([], ...ngDevMode ? [{ debugName: "picked" }] : (
      /* istanbul ignore next */
      []
    ));
    this.calSummary = computed(() => {
      const n = this.countedDays();
      return [
        { label: "S\u1ED1 ng\xE0y t\xEDnh c\xF4ng", value: n.toLocaleString("vi-VN") },
        { label: "Ng\xE0y l\u1EC5 trong kho\u1EA3ng", value: String(this.holidaysInRange()) },
        ...n > 5 ? [{ label: "V\u01B0\u1EE3t ng\u01B0\u1EE1ng duy\u1EC7t 1 c\u1EA5p", value: "C\xF3", tone: "warn" }] : []
      ];
    }, ...ngDevMode ? [{ debugName: "calSummary" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countedDays = computed(() => {
      const s = this.picked();
      if (s.length === 0)
        return 0;
      const from = s[0], to = s[s.length - 1];
      return this.calendarDays.filter((d) => d.date >= from && d.date <= to && d.kind === "workday").reduce((acc, d) => acc + (d.portion ?? 1), 0);
    }, ...ngDevMode ? [{ debugName: "countedDays" }] : (
      /* istanbul ignore next */
      []
    ));
    this.holidaysInRange = computed(() => {
      const s = this.picked();
      if (s.length === 0)
        return 0;
      const from = s[0], to = s[s.length - 1];
      return this.calendarDays.filter((d) => d.date >= from && d.date <= to && d.kind === "holiday").length;
    }, ...ngDevMode ? [{ debugName: "holidaysInRange" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expenses = signal([], ...ngDevMode ? [{ debugName: "expenses" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expenseTotals = computed(() => totalOf(this.expenses()), ...ngDevMode ? [{ debugName: "expenseTotals" }] : (
      /* istanbul ignore next */
      []
    ));
    this.participantTplRef = viewChild.required("participantTemplate");
    this.people = signal([], ...ngDevMode ? [{ debugName: "people" }] : (
      /* istanbul ignore next */
      []
    ));
    this.leadId = signal(null, ...ngDevMode ? [{ debugName: "leadId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.participants = computed(() => this.people().map((p) => ({
      id: p.id,
      title: p.name || null,
      // Validate của NGHIỆP VỤ nằm ở đây, không nằm trong shell.
      error: p.name.trim() === "" ? "Ch\u01B0a nh\u1EADp h\u1ECD t\xEAn" : null,
      data: p
    })), ...ngDevMode ? [{ debugName: "participants" }] : (
      /* istanbul ignore next */
      []
    ));
    this.documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : (
      /* istanbul ignore next */
      []
    ));
    this.approvalSteps = computed(() => [
      { title: "G\u1EEDi y\xEAu c\u1EA7u", name: "\u0110\u1EB7ng Anh", role: "Chuy\xEAn vi\xEAn", time: "04/08/2026 09:12", state: "approved" },
      { title: "Tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn", name: "L\xEA Thu H\xE0", role: "Tr\u01B0\u1EDFng ph\xF2ng K\u1EF9 thu\u1EADt", time: "04/08/2026 14:30", state: "approved" },
      { title: "Gi\xE1m \u0111\u1ED1c kh\u1ED1i", name: "Nguy\u1EC5n V\u0103n B\xECnh", role: "Gi\xE1m \u0111\u1ED1c Kh\u1ED1i V\u1EADn h\xE0nh", state: "current" },
      { title: "T\xE0i ch\xEDnh", name: "Ph\u1EA1m Thu Trang", role: "K\u1EBF to\xE1n tr\u01B0\u1EDFng", state: "waiting" }
    ], ...ngDevMode ? [{ debugName: "approvalSteps" }] : (
      /* istanbul ignore next */
      []
    ));
    this.policyWarnings = computed(() => {
      const out = [];
      if (this.expenses().some((r) => r.policyState === "over")) {
        out.push({ level: "warn", message: "C\xF3 kho\u1EA3n chi v\u01B0\u1EE3t h\u1EA1n m\u1EE9c theo c\u1EA5p b\u1EADc \u2014 c\u1EA7n Gi\xE1m \u0111\u1ED1c kh\u1ED1i duy\u1EC7t." });
      }
      if (this.countedDays() > 5) {
        out.push({ level: "info", message: "V\u1EAFng tr\xEAn 5 ng\xE0y c\xF4ng \u2014 b\u1EAFt bu\u1ED9c c\xF3 ng\u01B0\u1EDDi b\xE0n giao." });
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "policyWarnings" }] : (
      /* istanbul ignore next */
      []
    ));
    this.comparison = computed(() => {
      const orig = this.rows().find((r) => r.id === this.editingId());
      if (!orig)
        return [];
      const newBudget = this.expenseTotals()[0]?.amount ?? 0;
      const diff = newBudget - orig.budget;
      return [
        { label: "M\u1EE5c \u0111\xEDch", current: orig.purpose, proposed: this.form.purpose, changed: orig.purpose !== this.form.purpose },
        { label: "\u0110i\u1EC3m \u0111\u1EBFn", current: orig.destination, proposed: this.form.destination, changed: orig.destination !== this.form.destination },
        { label: "S\u1ED1 ng\xE0y", current: String(orig.days), proposed: String(this.countedDays() || orig.days), changed: this.countedDays() !== 0 && this.countedDays() !== orig.days },
        {
          label: "D\u1EF1 to\xE1n",
          current: this.money(orig.budget),
          proposed: this.money(newBudget),
          delta: diff === 0 ? null : (diff > 0 ? "+" : "\u2212") + this.money(Math.abs(diff)),
          // "tăng chi phí" là điều cần lưu ý ⇒ tone warn (do NGHIỆP VỤ quyết, không suy từ dấu)
          tone: diff > 0 ? "warn" : diff < 0 ? "up" : "neutral",
          changed: diff !== 0
        }
      ];
    }, ...ngDevMode ? [{ debugName: "comparison" }] : (
      /* istanbul ignore next */
      []
    ));
    this.footerActions = [
      { key: "save", label: "L\u01B0u", tone: "primary" },
      { key: "draft", label: "L\u01B0u nh\xE1p" },
      { key: "cancel", label: "Hu\u1EF7" }
    ];
    this.kindOptions = [
      { label: "Trong n\u01B0\u1EDBc", value: "Trong n\u01B0\u1EDBc" },
      { label: "Qu\u1ED1c t\u1EBF", value: "Qu\u1ED1c t\u1EBF" }
    ];
    this.transportOptions = [
      { label: "\xD4 t\xF4 c\xF4ng ty", value: "\xD4 t\xF4 c\xF4ng ty" },
      { label: "M\xE1y bay", value: "M\xE1y bay" },
      { label: "T\xE0u ho\u1EA3", value: "T\xE0u ho\u1EA3" }
    ];
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
    this.plus = Plus;
    this.pencil = Pencil;
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.navUser = { name: "\u0110\u1EB7ng Anh", email: "danganh@vnr.vn" };
    this.when = [
      "Form nh\u1EADp li\u1EC7u nghi\u1EC7p v\u1EE5 c\xF3 nhi\u1EC1u nh\xF3m th\xF4ng tin",
      "T\u1EA1o m\u1EDBi v\xE0 ch\u1EC9nh s\u1EEDa d\xF9ng chung m\u1ED9t form",
      "Form ph\u1EA3i m\u1EDF \u0111\u01B0\u1EE3c \u1EDF nhi\u1EC1u ch\u1EBF \u0111\u1ED9 (c\u1EA1nh danh s\xE1ch / gi\u1EEFa m\xE0n h\xECnh / to\xE0n trang)"
    ];
  }
  formTpl() {
    return this.formTemplateRef();
  }
  footerTpl() {
    return this.footerTemplateRef();
  }
  onExpenseCell(c) {
    const next = this.expenses().map((r) => r.id === c.rowId ? __spreadProps(__spreadValues({}, r), { [c.key]: c.value }) : r);
    this.expenses.set(recalcExpenses(next));
  }
  addExpense() {
    const id = "e" + (this.expenses().length + 1) + "-" + this.expenses().length;
    this.expenses.set(recalcExpenses([...this.expenses(), { id, category: "", quantity: 1, unitPrice: null, amount: null }]));
  }
  removeExpense(id) {
    this.expenses.set(recalcExpenses(this.expenses().filter((r) => r.id !== id)));
  }
  participantTpl() {
    return this.participantTplRef();
  }
  addParticipant() {
    const id = "p" + (this.people().length + 1) + "-" + Date.now().toString().slice(-4);
    this.people.set([...this.people(), { id, name: "", title: "" }]);
    if (!this.leadId())
      this.leadId.set(id);
  }
  removeParticipant(id) {
    this.people.set(this.people().filter((p) => p.id !== id));
    if (this.leadId() === id)
      this.leadId.set(this.people()[0]?.id ?? null);
  }
  setParticipant(id, key, v) {
    this.people.set(this.people().map((p) => p.id === id ? __spreadProps(__spreadValues({}, p), { [key]: v }) : p));
  }
  peopleMeta() {
    const n = this.people().length;
    return n ? `${n} ng\u01B0\u1EDDi` : "ch\u1EC9 m\xECnh t\xF4i";
  }
  addDocument() {
    const id = "d" + (this.documents().length + 1) + "-" + Date.now().toString().slice(-4);
    this.documents.set([...this.documents(), {
      id,
      type: "T\xE0i li\u1EC7u m\u1EDBi",
      number: null,
      issueDate: null,
      expiryDate: null,
      authority: null,
      fileName: null,
      expiryState: null,
      verification: "pending"
    }]);
  }
  removeDocument(id) {
    this.documents.set(this.documents().filter((d) => d.id !== id));
  }
  docsMeta() {
    const n = this.documents().length;
    const bad = this.documents().filter((d) => d.expiryState === "expired" || d.expiryState === "soon").length;
    return bad ? `${n} t\xE0i li\u1EC7u \xB7 ${bad} c\u1EA7n ch\xFA \xFD` : `${n} t\xE0i li\u1EC7u`;
  }
  // ── mở form ────────────────────────────────────────────────────────────────
  openCreate() {
    this.mode.set("create");
    this.editingId.set(null);
    this.form = { code: this.nextCode(), purpose: "", kind: "Trong n\u01B0\u1EDBc", destination: "", transport: "\xD4 t\xF4 c\xF4ng ty", handover: "", note: "" };
    this.picked.set([]);
    this.expenses.set(recalcExpenses([
      { id: "e1", category: "\u0110i l\u1EA1i", quantity: 1, unitPrice: null, amount: null }
    ]));
    this.people.set([]);
    this.leadId.set(null);
    this.documents.set([]);
    this.peekOpen.set(true);
  }
  openEdit(r) {
    this.mode.set("edit");
    this.editingId.set(r.id);
    this.form = { code: r.code, purpose: r.purpose, kind: r.kind, destination: r.destination, transport: "\xD4 t\xF4 c\xF4ng ty", handover: "Tr\u1EA7n Minh Khoa", note: "" };
    this.picked.set(["2026-08-05", "2026-08-10"]);
    this.expenses.set(recalcExpenses([
      { id: "e1", category: "\u0110i l\u1EA1i", quantity: 1, unitPrice: 18e5, amount: null },
      { id: "e2", category: "L\u01B0u tr\xFA", quantity: 3, unitPrice: 12e5, amount: null },
      { id: "e3", category: "Ph\u1EE5 c\u1EA5p ng\xE0y", quantity: 4, unitPrice: 3e5, amount: null }
    ]));
    this.people.set([
      { id: "p1", name: "Tr\u1EA7n Minh Khoa", title: "Chuy\xEAn vi\xEAn k\u1EF9 thu\u1EADt" },
      { id: "p2", name: "V\u0169 H\u1EA3i Y\u1EBFn", title: "Tr\u1EE3 l\xFD d\u1EF1 \xE1n" }
    ]);
    this.leadId.set("p1");
    this.documents.set([
      {
        id: "d1",
        type: "C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n",
        number: "079201004531",
        issueDate: "12/03/2021",
        expiryDate: "12/03/2031",
        authority: "C\u1EE5c CSQLHC",
        fileName: "cccd-scan.pdf",
        expiryState: "valid",
        verification: "verified",
        sensitive: true,
        canDownload: false
      },
      {
        id: "d2",
        type: "H\u1ED9 chi\u1EBFu",
        number: "C4821990",
        issueDate: "02/09/2022",
        expiryDate: "02/09/2026",
        authority: "C\u1EE5c QLXNC",
        fileName: "passport.pdf",
        expiryState: "soon",
        expiryNote: "H\u1EBFt h\u1EA1n trong 29 ng\xE0y \u2014 c\u1EA7n gia h\u1EA1n tr\u01B0\u1EDBc chuy\u1EBFn qu\u1ED1c t\u1EBF.",
        verification: "verified",
        sensitive: true,
        canDownload: true
      },
      {
        id: "d3",
        type: "Quy\u1EBFt \u0111\u1ECBnh c\u1EED \u0111i c\xF4ng t\xE1c",
        fileName: null,
        expiryState: null,
        verification: "pending"
      }
    ]);
    this.peekOpen.set(true);
  }
  nextCode() {
    return "CT-2026-" + String(148 + this.rows().length + 1).padStart(4, "0");
  }
  onFooter(key) {
    if (key === "cancel") {
      this.peekOpen.set(false);
      return;
    }
    const budget = this.expenseTotals()[0]?.amount ?? 0;
    const days = this.countedDays();
    if (this.mode() === "create") {
      this.rows.set([...this.rows(), {
        id: "n" + (this.rows().length + 1),
        code: this.form.code,
        purpose: this.form.purpose || "(ch\u01B0a \u0111\u1EB7t t\xEAn)",
        kind: this.form.kind,
        destination: this.form.destination,
        days,
        budget,
        status: key === "draft" ? "draft" : "pending"
      }]);
    } else {
      const id = this.editingId();
      this.rows.set(this.rows().map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { purpose: this.form.purpose, destination: this.form.destination, days: days || r.days, budget }) : r));
    }
    this.peekOpen.set(false);
  }
  // ── meta hiển thị ở đầu section ────────────────────────────────────────────
  filledMeta() {
    const f = this.form;
    const vals = [f.code, f.purpose, f.kind, f.destination, f.transport, f.handover, f.note];
    return `${vals.filter((v) => !!v).length}/${vals.length}`;
  }
  daysMeta() {
    const n = this.countedDays();
    return n ? `${n.toLocaleString("vi-VN")} ng\xE0y c\xF4ng` : "ch\u01B0a ch\u1ECDn";
  }
  budgetMeta() {
    return this.money(this.expenseTotals()[0]?.amount ?? 0) + " \u20AB";
  }
  money(v) {
    return new Intl.NumberFormat("vi-VN").format(v);
  }
  statusLabel(s) {
    return s === "draft" ? "Nh\xE1p" : s === "pending" ? "Ch\u1EDD duy\u1EC7t" : "\u0110\xE3 duy\u1EC7t";
  }
  statusTone(s) {
    return s === "draft" ? "neutral" : s === "pending" ? "warning" : "success";
  }
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  static {
    this.\u0275fac = function SgTemplateFormEntry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateFormEntry)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateFormEntry, selectors: [["sg-template-form-entry"]], viewQuery: function SgTemplateFormEntry_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.formTemplateRef, _c0, 5)(ctx.footerTemplateRef, _c1, 5)(ctx.participantTplRef, _c2, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    }, decls: 10, vars: 1, consts: [["screen", ""], ["formTemplate", ""], ["participantTemplate", ""], ["footerTemplate", ""], [1, "lp-desktop", "lp-desktop--full"], ["category", "Template", "title", "T\u1EA1o m\u1EDBi & Ch\u1EC9nh s\u1EEDa", "desc", "Template chu\u1EA9n cho form nh\u1EADp li\u1EC7u HRM. B\u1EA5m 'T\u1EA1o m\u1EDBi' ho\u1EB7c 'Ch\u1EC9nh s\u1EEDa' \u0111\u1EC3 m\u1EDF c\xF9ng m\u1ED9t form; s\u1ED1 c\u1ED9t t\u1EF1 \u0111\u1ED5i theo b\u1EC1 r\u1ED9ng v\xF9ng ch\u1EE9a (Container Queries), d\xF9ng chung cho m\u1ECDi ch\u1EBF \u0111\u1ED9 m\u1EDF."], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "lp-desktop"], [1, "lp-full"], ["href", "/preview/form-entry", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], ["purpose", "Nh\u1EADp li\u1EC7u nghi\u1EC7p v\u1EE5 HRM: t\u1EA1o m\u1EDBi v\xE0 ch\u1EC9nh s\u1EEDa d\xF9ng CHUNG m\u1ED9t form, chung validation v\xE0 business rule.", "behavior", "B\u1EA5m T\u1EA1o m\u1EDBi / Ch\u1EC9nh s\u1EEDa \u2192 m\u1EDF form trong detail-peek. \u0110\u1ED5i ch\u1EBF \u0111\u1ED9 hi\u1EC3n th\u1ECB (b\u1EA3ng+chi ti\u1EBFt \xB7 c\u1EA1nh danh s\xE1ch \xB7 gi\u1EEFa m\xE0n h\xECnh) \u2192 s\u1ED1 c\u1ED9t form t\u1EF1 th\xEDch \u1EE9ng theo b\u1EC1 r\u1ED9ng v\xF9ng ch\u1EE9a, kh\xF4ng ph\u1EA3i theo t\xEAn ch\u1EBF \u0111\u1ED9.", "avoid", "\u0110\u1EEBng vi\u1EBFt form ri\xEAng cho t\u1EEBng ch\u1EBF \u0111\u1ED9 m\u1EDF, v\xE0 \u0111\u1EEBng \u0111\u1EB7t c\xF4ng th\u1EE9c t\xEDnh ti\u1EC1n trong component UI.", 3, "when"], ["sgBest", ""], ["contentPad", "none"], ["appSideNav", "", "selectedKey", "requests", "switchLabel", "C\xE0i \u0111\u1EB7t", 3, "collapsedChange", "sections", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchIcon"], ["snActions", "", "type", "button", "aria-label", "Th\xF4ng b\xE1o", 1, "as-ico"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], [1, "fe-wrap"], [1, "fe-main"], [1, "fe-head"], [1, "fe-h1"], [1, "fe-sub"], ["variant", "primary", 3, "click"], [1, "fe-grid"], [1, "fe-tb"], [1, "n"], [1, "a"], [3, "is-active"], ["switchLabel", "\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB", "closeLabel", "\u0110\xF3ng", "resizeLabel", "K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng", 3, "openChange", "peekModeChange", "open", "peekMode", "modes", "expandable", "title", "content", "footer", "masterWidth", "width", "modalWidth"], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"], [1, "mono"], [1, "n", "mono"], [3, "status", "label"], ["variant", "default", "size", "sm", 3, "click"], ["title", "Th\xF4ng tin chuy\u1EBFn c\xF4ng t\xE1c", 3, "meta"], ["label", "M\xE3 chuy\u1EBFn", "size", "md", "required", ""], ["name", "code", "placeholder", "CT-2026-\u2026", 3, "ngModelChange", "ngModel"], ["label", "M\u1EE5c \u0111\xEDch c\xF4ng t\xE1c", "size", "lg", "required", ""], ["name", "purpose", "placeholder", "N\u1ED9i dung ch\xEDnh c\u1EE7a chuy\u1EBFn \u0111i", 3, "ngModelChange", "ngModel"], ["label", "Lo\u1EA1i c\xF4ng t\xE1c", "size", "md", "required", ""], ["name", "kind", 3, "ngModelChange", "ngModel", "options"], ["label", "\u0110i\u1EC3m \u0111\u1EBFn", "size", "md"], ["name", "destination", 3, "ngModelChange", "ngModel"], ["label", "Ph\u01B0\u01A1ng ti\u1EC7n", "size", "md"], ["name", "transport", 3, "ngModelChange", "ngModel", "options"], ["label", "Ng\u01B0\u1EDDi b\xE0n giao", "size", "md", "hint", "B\u1EAFt bu\u1ED9c khi v\u1EAFng tr\xEAn 3 ng\xE0y"], ["name", "handover", 3, "ngModelChange", "ngModel"], ["label", "N\u1ED9i dung c\xF4ng vi\u1EC7c", "size", "full"], ["name", "note", 3, "ngModelChange", "ngModel", "minRows", "maxRows"], ["title", "Th\u1EDDi gian", 3, "meta"], ["label", "Ch\u1ECDn ng\xE0y c\xF4ng t\xE1c", "size", "lg", "required", ""], ["monthLabel", "Th\xE1ng 8, 2026", 3, "selectedChange", "days", "selected", "summary"], ["title", "D\u1EF1 to\xE1n chi ph\xED", 3, "meta"], [3, "cellChange", "addRow", "removeRow", "rows", "totals"], ["title", "Ng\u01B0\u1EDDi \u0111i c\xF9ng", 3, "meta"], ["itemLabel", "Ng\u01B0\u1EDDi \u0111i c\xF9ng", "addLabel", "Th\xEAm ng\u01B0\u1EDDi \u0111i c\xF9ng", "emptyText", "Ch\u01B0a c\xF3 ai \u0111i c\xF9ng \u2014 b\u1EA5m th\xEAm n\u1EBFu \u0111i theo \u0111o\xE0n.", 3, "add", "remove", "setPrimary", "items", "itemTemplate", "max", "allowPrimary", "primaryId"], ["title", "H\u1ED3 s\u01A1 \u0111\xEDnh k\xE8m", 3, "meta"], ["addLabel", "Th\xEAm t\xE0i li\u1EC7u", "emptyText", "Ch\u01B0a c\xF3 t\xE0i li\u1EC7u n\xE0o.", 3, "add", "remove", "documents"], ["title", "Lu\u1ED3ng ph\xEA duy\u1EC7t"], [3, "steps", "warnings", "impacted"], ["title", "\u0110\u1ED1i chi\u1EBFu thay \u0111\u1ED5i"], ["currentLabel", "\u0110\xE3 duy\u1EC7t", "proposedLabel", "Sau ch\u1EC9nh s\u1EEDa", 3, "rows", "impacted"], ["label", "H\u1ECD t\xEAn", "size", "md"], [3, "ngModelChange", "ngModel", "name"], ["label", "Ch\u1EE9c danh", "size", "md"], ["moreLabel", "Th\xEAm thao t\xE1c", 3, "action", "actions"]], template: function SgTemplateFormEntry_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateFormEntry_Conditional_0_Template, 2, 1, "div", 4)(1, SgTemplateFormEntry_Conditional_1_Template, 22, 4, "sg-doc", 5);
        \u0275\u0275template(2, SgTemplateFormEntry_ng_template_2_Template, 46, 29, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, SgTemplateFormEntry_ng_template_4_Template, 30, 32, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, SgTemplateFormEntry_ng_template_6_Template, 5, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, SgTemplateFormEntry_ng_template_8_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
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
      HrmDetailPeek,
      HrmStatusCell,
      HrmActionBar,
      VnrFormShell,
      VnrFormGrid,
      VnrFormSection,
      VnrFormField,
      VnrHrCalendar,
      VnrExpenseTable,
      VnrChangeComparison,
      VnrRepeatableGroup,
      VnrDocumentGroup,
      VnrApprovalPanel,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], styles: ["\n.lp-desktop[_ngcontent-%COMP%] {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-desktop[_ngcontent-%COMP%]     .shell-content {\n  padding: 0;\n}\n.lp-full[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.fe-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  min-height: 0;\n}\n.fe-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: auto;\n  padding: 20px 24px 32px;\n}\n.fe-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.fe-h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-20, 20px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: -.01em;\n}\n.fe-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  margin-top: 3px;\n  max-width: 620px;\n}\n.fe-grid[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-gutter: stable;\n  background-image:\n    linear-gradient(\n      to left,\n      rgb(0 0 0 / .06),\n      transparent 24px);\n  background-attachment: local, scroll;\n}\n.fe-tb[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.fe-tb[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: left;\n  padding: 9px 12px;\n  border-bottom: 1px solid var(--border-soft);\n  white-space: nowrap;\n}\n.fe-tb[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-bottom: 1px solid var(--border-soft);\n  font-size: var(--fs-13, 13px);\n}\n.fe-tb[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.fe-tb[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.fe-tb[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n}\n.fe-tb[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.fe-tb[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%] {\n  width: 130px;\n  text-align: right;\n}\n.fe-tb[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n.fe-tb[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%]   hrm-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n.fe-tb[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%]   hrm-button[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  margin-right: var(--space-1, 4px);\n  vertical-align: -2px;\n}\n/*# sourceMappingURL=form-entry-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateFormEntry, [{
    type: Component,
    args: [{ selector: "sg-template-form-entry", imports: [
      NgTemplateOutlet,
      FormsModule,
      TablerIconComponent,
      HrmAppShell,
      HrmSideNav,
      HrmButton,
      HrmInput,
      HrmSelect,
      HrmTextarea,
      HrmDetailPeek,
      HrmStatusCell,
      HrmActionBar,
      VnrFormShell,
      VnrFormGrid,
      VnrFormSection,
      VnrFormField,
      VnrHrCalendar,
      VnrExpenseTable,
      VnrChangeComparison,
      VnrRepeatableGroup,
      VnrDocumentGroup,
      VnrApprovalPanel,
      SgDoc,
      SgUse,
      SgDo,
      SgDont
    ], template: `
    @if (preview) {
      <div class="lp-desktop lp-desktop--full"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
    <sg-doc category="Template" title="T\u1EA1o m\u1EDBi & Ch\u1EC9nh s\u1EEDa"
      desc="Template chu\u1EA9n cho form nh\u1EADp li\u1EC7u HRM. B\u1EA5m 'T\u1EA1o m\u1EDBi' ho\u1EB7c 'Ch\u1EC9nh s\u1EEDa' \u0111\u1EC3 m\u1EDF c\xF9ng m\u1ED9t form; s\u1ED1 c\u1ED9t t\u1EF1 \u0111\u1ED5i theo b\u1EC1 r\u1ED9ng v\xF9ng ch\u1EE9a (Container Queries), d\xF9ng chung cho m\u1ECDi ch\u1EBF \u0111\u1ED9 m\u1EDF.">
      <div sgOverview>
        <div class="lp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
        <div class="lp-full">
          <a class="lp-full-link" href="/preview/form-entry" target="_blank" rel="noopener">
            <hrm-button variant="default"><tabler-icon [icon]="maximize" [size]="16" /> M\u1EDF to\xE0n m\xE0n h\xECnh</hrm-button>
          </a>
        </div>
      </div>
      <div sgUsage>
        <sg-use purpose="Nh\u1EADp li\u1EC7u nghi\u1EC7p v\u1EE5 HRM: t\u1EA1o m\u1EDBi v\xE0 ch\u1EC9nh s\u1EEDa d\xF9ng CHUNG m\u1ED9t form, chung validation v\xE0 business rule."
          [when]="when"
          behavior="B\u1EA5m T\u1EA1o m\u1EDBi / Ch\u1EC9nh s\u1EEDa \u2192 m\u1EDF form trong detail-peek. \u0110\u1ED5i ch\u1EBF \u0111\u1ED9 hi\u1EC3n th\u1ECB (b\u1EA3ng+chi ti\u1EBFt \xB7 c\u1EA1nh danh s\xE1ch \xB7 gi\u1EEFa m\xE0n h\xECnh) \u2192 s\u1ED1 c\u1ED9t form t\u1EF1 th\xEDch \u1EE9ng theo b\u1EC1 r\u1ED9ng v\xF9ng ch\u1EE9a, kh\xF4ng ph\u1EA3i theo t\xEAn ch\u1EBF \u0111\u1ED9."
          avoid="\u0110\u1EEBng vi\u1EBFt form ri\xEAng cho t\u1EEBng ch\u1EBF \u0111\u1ED9 m\u1EDF, v\xE0 \u0111\u1EEBng \u0111\u1EB7t c\xF4ng th\u1EE9c t\xEDnh ti\u1EC1n trong component UI." />
      </div>
      <div sgBest>
        <sg-do>Khai k\xEDch th\u01B0\u1EDBc field theo NG\u1EEE NGH\u0128A (sm/md/lg/full), \u0111\u1EC3 shell t\u1EF1 quy \u0111\u1ED5i s\u1ED1 c\u1ED9t.</sg-do>
        <sg-do>\u0110\u1EB7t c\xF4ng th\u1EE9c (th\xE0nh ti\u1EC1n, h\u1EA1n m\u1EE9c, s\u1ED1 ng\xE0y c\xF4ng) \u1EDF t\u1EA7ng nghi\u1EC7p v\u1EE5; component ch\u1EC9 hi\u1EC3n th\u1ECB.</sg-do>
        <sg-do>C\xF9ng m\u1ED9t form cho T\u1EA1o m\u1EDBi v\xE0 Ch\u1EC9nh s\u1EEDa \u2014 ch\u1EC9 kh\xE1c d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o v\xE0 ph\u1EA7n \u0111\u1ED1i chi\u1EBFu.</sg-do>
        <sg-dont>\u0110\u1EEBng g\xE1n s\u1ED1 c\u1ED9t c\u1EE9ng theo t\xEAn ch\u1EBF \u0111\u1ED9 m\u1EDF (side = 1 c\u1ED9t, full = 3 c\u1ED9t\u2026).</sg-dont>
        <sg-dont>\u0110\u1EEBng b\u1EADt ch\u1EBF \u0111\u1ED9 "to\xE0n trang/tab m\u1EDBi" khi ch\u01B0a khai routeUrl \u2014 b\u1EA5m s\u1EBD kh\xF4ng c\xF3 ph\u1EA3n h\u1ED3i.</sg-dont>
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

        <div class="fe-wrap">
          <div class="fe-main">
            <header class="fe-head">
              <div>
                <h1 class="fe-h1">\u0110\u0103ng k\xFD c\xF4ng t\xE1c</h1>
                <p class="fe-sub">B\u1EA5m <b>T\u1EA1o m\u1EDBi</b> ho\u1EB7c <b>Ch\u1EC9nh s\u1EEDa</b> \u0111\u1EC3 m\u1EDF form. \u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB \u1EDF g\xF3c form \u0111\u1EC3 xem b\u1ED1 c\u1EE5c t\u1EF1 th\xEDch \u1EE9ng.</p>
              </div>
              <hrm-button variant="primary" (click)="openCreate()">
                <tabler-icon [icon]="plus" [size]="16" /> T\u1EA1o m\u1EDBi
              </hrm-button>
            </header>

            <div class="fe-grid">
              <table class="fe-tb">
                <thead><tr>
                  <th>M\xE3 chuy\u1EBFn</th><th>M\u1EE5c \u0111\xEDch</th><th>\u0110i\u1EC3m \u0111\u1EBFn</th>
                  <th class="n">S\u1ED1 ng\xE0y</th><th class="n">D\u1EF1 to\xE1n</th><th>Tr\u1EA1ng th\xE1i</th><th class="a"></th>
                </tr></thead>
                <tbody>
                  @for (r of rows(); track r.id) {
                    <tr [class.is-active]="editingId() === r.id">
                      <td class="mono">{{ r.code }}</td>
                      <td>{{ r.purpose }}</td>
                      <td>{{ r.destination }}</td>
                      <td class="n">{{ r.days }}</td>
                      <td class="n mono">{{ money(r.budget) }}</td>
                      <td><hrm-status [status]="statusTone(r.status)" [label]="statusLabel(r.status)" /></td>
                      <td class="a">
                        <hrm-button variant="default" size="sm" (click)="openEdit(r)">
                          <tabler-icon [icon]="pencil" [size]="15" /> Ch\u1EC9nh s\u1EEDa
                        </hrm-button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

          <!-- C\xD9NG m\u1ED9t form cho T\u1EA1o m\u1EDBi v\xE0 Ch\u1EC9nh s\u1EEDa, tr\xEAn m\u1ECDi surface.
               Ch\u1EC9 b\u1EADt master/side/center \u2014 full/tab c\u1EA7n routeUrl, kh\xF4ng khai th\xEC b\u1EA5m s\u1EBD im l\u1EB7ng. -->
          <hrm-detail-peek [(open)]="peekOpen" [(peekMode)]="peekMode"
            [modes]="['master','side','center']" [expandable]="false"
            [title]="peekTitle()" [content]="formTpl()" [footer]="footerTpl()"
            [masterWidth]="560" [width]="520" [modalWidth]="900"
            switchLabel="\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB" closeLabel="\u0110\xF3ng" resizeLabel="K\xE9o \u0111\u1ED5i \u0111\u1ED9 r\u1ED9ng" />
        </div>
      </hrm-app-shell>
    </ng-template>

    <!-- \u2550\u2550 FORM \u2014 d\u1EF1ng b\u1EB1ng Form Design System, d\xF9ng chung m\u1ECDi ch\u1EBF \u0111\u1ED9 m\u1EDF \u2550\u2550 -->
    <ng-template #formTemplate>
      <vnr-form-shell>
        <vnr-form-section title="Th\xF4ng tin chuy\u1EBFn c\xF4ng t\xE1c" [meta]="filledMeta()">
          <vnr-form-grid>
            <vnr-form-field label="M\xE3 chuy\u1EBFn" size="md" required>
              <hrm-input [(ngModel)]="form.code" name="code" placeholder="CT-2026-\u2026" />
            </vnr-form-field>
            <vnr-form-field label="M\u1EE5c \u0111\xEDch c\xF4ng t\xE1c" size="lg" required>
              <hrm-input [(ngModel)]="form.purpose" name="purpose" placeholder="N\u1ED9i dung ch\xEDnh c\u1EE7a chuy\u1EBFn \u0111i" />
            </vnr-form-field>
            <vnr-form-field label="Lo\u1EA1i c\xF4ng t\xE1c" size="md" required>
              <hrm-select [(ngModel)]="form.kind" name="kind" [options]="kindOptions" />
            </vnr-form-field>
            <vnr-form-field label="\u0110i\u1EC3m \u0111\u1EBFn" size="md">
              <hrm-input [(ngModel)]="form.destination" name="destination" />
            </vnr-form-field>
            <vnr-form-field label="Ph\u01B0\u01A1ng ti\u1EC7n" size="md">
              <hrm-select [(ngModel)]="form.transport" name="transport" [options]="transportOptions" />
            </vnr-form-field>
            <vnr-form-field label="Ng\u01B0\u1EDDi b\xE0n giao" size="md" hint="B\u1EAFt bu\u1ED9c khi v\u1EAFng tr\xEAn 3 ng\xE0y">
              <hrm-input [(ngModel)]="form.handover" name="handover" />
            </vnr-form-field>
            <vnr-form-field label="N\u1ED9i dung c\xF4ng vi\u1EC7c" size="full">
              <hrm-textarea [(ngModel)]="form.note" name="note" [minRows]="2" [maxRows]="4" />
            </vnr-form-field>
          </vnr-form-grid>
        </vnr-form-section>

        <!-- TRAIT calendar-context -->
        <vnr-form-section title="Th\u1EDDi gian" [meta]="daysMeta()">
          <vnr-form-grid>
            <vnr-form-field label="Ch\u1ECDn ng\xE0y c\xF4ng t\xE1c" size="lg" required>
              <vnr-hr-calendar [days]="calendarDays" monthLabel="Th\xE1ng 8, 2026"
                [(selected)]="picked" [summary]="calSummary()" />
            </vnr-form-field>
          </vnr-form-grid>
        </vnr-form-section>

        <!-- TRAIT money-policy \u2014 c\xF4ng th\u1EE9c n\u1EB1m \u1EDF recalcExpenses(), kh\xF4ng n\u1EB1m trong component -->
        <vnr-form-section title="D\u1EF1 to\xE1n chi ph\xED" [meta]="budgetMeta()">
          <vnr-expense-table [rows]="expenses()" [totals]="expenseTotals()"
            (cellChange)="onExpenseCell($event)" (addRow)="addExpense()" (removeRow)="removeExpense($event)" />
        </vnr-form-section>

        <!-- LAYOUT repeatable \u2014 n\u1ED9i dung item do trang n\xE0y c\u1EA5p qua template -->
        <vnr-form-section title="Ng\u01B0\u1EDDi \u0111i c\xF9ng" [meta]="peopleMeta()">
          <vnr-repeatable-group
            [items]="participants()" [itemTemplate]="participantTpl()"
            itemLabel="Ng\u01B0\u1EDDi \u0111i c\xF9ng" addLabel="Th\xEAm ng\u01B0\u1EDDi \u0111i c\xF9ng"
            emptyText="Ch\u01B0a c\xF3 ai \u0111i c\xF9ng \u2014 b\u1EA5m th\xEAm n\u1EBFu \u0111i theo \u0111o\xE0n."
            [max]="5" [allowPrimary]="true" [primaryId]="leadId()"
            (add)="addParticipant()" (remove)="removeParticipant($event)" (setPrimary)="leadId.set($event)" />
        </vnr-form-section>

        <!-- TRAIT attachment \u2014 h\u1ED3 s\u01A1 gi\u1EA5y t\u1EDD, c\xF3 c\u1EA3nh b\xE1o h\u1EBFt h\u1EA1n + che d\u1EEF li\u1EC7u nh\u1EA1y c\u1EA3m -->
        <vnr-form-section title="H\u1ED3 s\u01A1 \u0111\xEDnh k\xE8m" [meta]="docsMeta()">
          <vnr-document-group [documents]="documents()"
            addLabel="Th\xEAm t\xE0i li\u1EC7u" emptyText="Ch\u01B0a c\xF3 t\xE0i li\u1EC7u n\xE0o."
            (add)="addDocument()" (remove)="removeDocument($event)" />
        </vnr-form-section>

        <!-- TRAIT approval \u2014 b\u1ECDc hrm-approval-flow c\xF3 s\u1EB5n -->
        <vnr-form-section title="Lu\u1ED3ng ph\xEA duy\u1EC7t">
          <vnr-approval-panel [steps]="approvalSteps()" [warnings]="policyWarnings()"
            [impacted]="['Ng\xE2n s\xE1ch ph\xF2ng ban', 'T\u1EA1m \u1EE9ng']" />
        </vnr-form-section>

        <!-- TRAIT comparison \u2014 ch\u1EC9 c\xF3 ngh\u0129a khi CH\u1EC8NH S\u1EECA (c\xF3 gi\xE1 tr\u1ECB c\u0169 \u0111\u1EC3 \u0111\u1ED1i chi\u1EBFu) -->
        @if (mode() === 'edit') {
          <vnr-form-section title="\u0110\u1ED1i chi\u1EBFu thay \u0111\u1ED5i">
            <vnr-change-comparison [rows]="comparison()" currentLabel="\u0110\xE3 duy\u1EC7t" proposedLabel="Sau ch\u1EC9nh s\u1EEDa"
              [impacted]="['T\u1EA1m \u1EE9ng', 'Quy\u1EBFt to\xE1n', 'Ng\xE2n s\xE1ch ph\xF2ng ban']" />
          </vnr-form-section>
        }
      </vnr-form-shell>
    </ng-template>

    <!-- N\u1ED9i dung M\u1ED8T item c\u1EE7a nh\xF3m l\u1EB7p \u2014 do trang c\u1EA5p, shell ch\u1EC9 lo add/xo\xE1/ch\xEDnh -->
    <ng-template #participantTemplate let-p let-i="index">
      <vnr-form-grid>
        <vnr-form-field label="H\u1ECD t\xEAn" size="md">
          <hrm-input [ngModel]="$any(p).name" [name]="'pname' + i"
            (ngModelChange)="setParticipant($any(p).id, 'name', $event)" />
        </vnr-form-field>
        <vnr-form-field label="Ch\u1EE9c danh" size="md">
          <hrm-input [ngModel]="$any(p).title" [name]="'ptitle' + i"
            (ngModelChange)="setParticipant($any(p).id, 'title', $event)" />
        </vnr-form-field>
      </vnr-form-grid>
    </ng-template>

    <ng-template #footerTemplate>
      <hrm-action-bar [actions]="footerActions" moreLabel="Th\xEAm thao t\xE1c" (action)="onFooter($event)" />
    </ng-template>
  `, styles: ["/* angular:styles/component:css;33591973b5f0b74d845ae3efda769d248fcef959b0c901d99632a74d6781347c;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/form-entry-page.ts */\n.lp-desktop {\n  position: relative;\n  height: 760px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.lp-desktop--full {\n  position: relative;\n  height: 100vh;\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.lp-desktop ::ng-deep .shell-content {\n  padding: 0;\n}\n.lp-full {\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n}\n.fe-wrap {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n  min-height: 0;\n}\n.fe-main {\n  flex: 1;\n  min-width: 0;\n  overflow: auto;\n  padding: 20px 24px 32px;\n}\n.fe-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.fe-h1 {\n  font-size: var(--fs-20, 20px);\n  font-weight: var(--font-bold, 700);\n  letter-spacing: -.01em;\n}\n.fe-sub {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n  margin-top: 3px;\n  max-width: 620px;\n}\n.fe-grid {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg, 10px);\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-gutter: stable;\n  background-image:\n    linear-gradient(\n      to left,\n      rgb(0 0 0 / .06),\n      transparent 24px);\n  background-attachment: local, scroll;\n}\n.fe-tb {\n  width: 100%;\n  border-collapse: collapse;\n}\n.fe-tb th {\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-11, 11px);\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: var(--text-soft);\n  font-weight: var(--font-semibold, 600);\n  text-align: left;\n  padding: 9px 12px;\n  border-bottom: 1px solid var(--border-soft);\n  white-space: nowrap;\n}\n.fe-tb td {\n  padding: 9px 12px;\n  border-bottom: 1px solid var(--border-soft);\n  font-size: var(--fs-13, 13px);\n}\n.fe-tb tbody tr:last-child td {\n  border-bottom: none;\n}\n.fe-tb tbody tr:hover {\n  background: var(--bg-surface-subtle);\n}\n.fe-tb tbody tr.is-active {\n  background: var(--primary-bg-subtle);\n}\n.fe-tb .n {\n  text-align: right;\n}\n.fe-tb .a {\n  width: 130px;\n  text-align: right;\n}\n.fe-tb .mono {\n  font-variant-numeric: tabular-nums;\n}\n.fe-tb .a hrm-button {\n  display: inline-flex;\n  vertical-align: middle;\n}\n.fe-tb .a hrm-button tabler-icon {\n  margin-right: var(--space-1, 4px);\n  vertical-align: -2px;\n}\n/*# sourceMappingURL=form-entry-page.css.map */\n"] }]
  }], null, { formTemplateRef: [{ type: ViewChild, args: ["formTemplate", { isSignal: true }] }], footerTemplateRef: [{ type: ViewChild, args: ["footerTemplate", { isSignal: true }] }], participantTplRef: [{ type: ViewChild, args: ["participantTemplate", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateFormEntry, { className: "SgTemplateFormEntry", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/form-entry-page.ts", lineNumber: 340 });
})();
export {
  SgTemplateFormEntry
};
//# sourceMappingURL=chunk-SP537F6D.js.map
