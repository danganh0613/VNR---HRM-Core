import {
  HrmMessageService
} from "./chunk-WKDCGAQZ.js";
import "./chunk-I3UTBD2V.js";
import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  HrmModalService
} from "./chunk-JU7ANAEO.js";
import "./chunk-6VCEDPDY.js";
import "./chunk-647OXKCN.js";
import {
  HrmTextarea
} from "./chunk-IBXTICOI.js";
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
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
import "./chunk-D2BVEXVI.js";
import "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/modal.ts
var _c0 = ["formTpl"];
var _c1 = ["requiredTpl"];
var _c2 = ["sizedTpl"];
var _c3 = ["longTpl"];
var _c4 = (a0) => ({ n: a0 });
function SgDocModal_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-form-field", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "hrm-input", 17);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SgDocModal_ng_template_89_Template_hrm_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formName, $event) || (ctx_r1.formName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "hrm-form-field", 14);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "hrm-input", 18);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SgDocModal_ng_template_89_Template_hrm_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formPhone, $event) || (ctx_r1.formPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "hrm-form-field", 14);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "hrm-textarea", 17);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SgDocModal_ng_template_89_Template_hrm_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formNote, $event) || (ctx_r1.formNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 10, "docs.modal.fldName"))("required", true);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 12, "docs.modal.phName"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 14, "docs.modal.fldPhone"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formPhone);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 16, "docs.modal.phPhone"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 18, "docs.modal.fldNote"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formNote);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 20, "docs.modal.phNote"));
  }
}
function SgDocModal_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "docs.modal.rqBody"), " ");
  }
}
function SgDocModal_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "docs.modal.szBody"), " ");
  }
}
function SgDocModal_ng_template_95_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "docs.modal.clauseLabel", \u0275\u0275pureFunction1(7, _c4, i_r3)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "docs.modal.clauseBody"));
  }
}
function SgDocModal_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, SgDocModal_ng_template_95_For_2_Template, 6, 9, "p", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.clauses);
  }
}
var SgDocModal = class _SgDocModal {
  constructor() {
    this.modal = inject(HrmModalService);
    this.msg = inject(HrmMessageService);
    this.t = inject(TranslateService);
    this.formTpl = viewChild.required("formTpl");
    this.requiredTpl = viewChild.required("requiredTpl");
    this.sizedTpl = viewChild.required("sizedTpl");
    this.longTpl = viewChild.required("longTpl");
    this.formName = "Nguy\u1EC5n V\u0103n A";
    this.formPhone = "";
    this.formNote = "";
    this.clauses = [1, 2, 3, 4, 5, 6, 7, 8];
    this.when = [
      "docs.modal.when1",
      "docs.modal.when2",
      "docs.modal.when3"
    ];
  }
  ovInfo() {
    this.modal.info(this.t.instant("docs.modal.ovInfoTitle"), this.t.instant("docs.modal.ovInfoContent"));
  }
  nfInfo() {
    this.modal.info(this.t.instant("docs.modal.nfInfoTitle"), this.t.instant("docs.modal.nfInfoContent"));
  }
  nfSuccess() {
    this.modal.success(this.t.instant("docs.modal.nfSuccessTitle"), this.t.instant("docs.modal.nfSuccessContent"));
  }
  nfWarning() {
    this.modal.warning(this.t.instant("docs.modal.nfWarningTitle"), this.t.instant("docs.modal.nfWarningContent"));
  }
  confirmDelete() {
    this.modal.confirm({
      title: this.t.instant("docs.modal.cfTitle"),
      content: this.t.instant("docs.modal.cfContent"),
      danger: true,
      okText: this.t.instant("docs.modal.cfOk"),
      onOk: () => this.msg.success(this.t.instant("docs.modal.cfDone"))
    });
  }
  openForm() {
    const ref = this.modal.open({
      title: this.t.instant("docs.modal.fmTitle"),
      content: this.formTpl(),
      width: 480,
      maskClosable: false,
      footer: [
        { label: this.t.instant("docs.modal.cancel"), onClick: () => ref.close() },
        { label: this.t.instant("docs.modal.save"), type: "primary", onClick: () => {
          this.msg.success(this.t.instant("docs.modal.fmDone"));
          ref.close();
        } }
      ]
    });
  }
  openRequired() {
    const ref = this.modal.open({
      title: this.t.instant("docs.modal.rqTitle"),
      content: this.requiredTpl(),
      width: 440,
      maskClosable: false,
      keyboard: false,
      closable: false,
      footer: [
        { label: this.t.instant("docs.modal.rqLater"), onClick: () => ref.close() },
        { label: this.t.instant("docs.modal.rqNow"), type: "primary", onClick: () => {
          this.msg.success(this.t.instant("docs.modal.rqDone"));
          ref.close();
        } }
      ]
    });
  }
  openSized(width) {
    const ref = this.modal.open({
      title: this.t.instant("docs.modal.szTitle", { w: width }),
      content: this.sizedTpl(),
      width,
      footer: [{ label: this.t.instant("docs.modal.close"), type: "primary", onClick: () => ref.close() }]
    });
  }
  openFullscreen() {
    const ref = this.modal.open({
      title: this.t.instant("docs.modal.fsTitle"),
      content: this.sizedTpl(),
      width: "100vw",
      centered: false,
      footer: [{ label: this.t.instant("docs.modal.close"), type: "primary", onClick: () => ref.close() }]
    });
  }
  openScrolling() {
    const ref = this.modal.open({
      title: this.t.instant("docs.modal.scTitle"),
      content: this.longTpl(),
      width: 560,
      bodyStyle: { "max-height": "52vh", "overflow-y": "auto" },
      footer: [
        { label: this.t.instant("docs.modal.close"), onClick: () => ref.close() },
        { label: this.t.instant("docs.modal.scAgree"), type: "primary", onClick: () => {
          this.msg.success(this.t.instant("docs.modal.scDone"));
          ref.close();
        } }
      ]
    });
  }
  static {
    this.\u0275fac = function SgDocModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocModal)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocModal, selectors: [["sg-doc-modal"]], viewQuery: function SgDocModal_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.formTpl, _c0, 5)(ctx.requiredTpl, _c1, 5)(ctx.sizedTpl, _c2, 5)(ctx.longTpl, _c3, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
      }
    }, decls: 97, vars: 111, consts: [["formTpl", ""], ["requiredTpl", ""], ["sizedTpl", ""], ["longTpl", ""], ["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "primary", 3, "click", "danger"], ["variant", "default", 3, "click"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["variant", "primary", 3, "click"], [3, "label", "required"], [3, "ngModelChange", "ngModel", "placeholder"], ["htmlType", "tel", 3, "ngModelChange", "ngModel", "placeholder"], [2, "margin", "0", "color", "var(--text-body)", "line-height", "1.6"], [2, "color", "var(--text-body)", "line-height", "1.7"], [2, "margin", "0 0 12px"]], template: function SgDocModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 4);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 5)(4, "sg-row")(5, "hrm-button", 6);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_5_listener() {
          return ctx.confirmDelete();
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_8_listener() {
          return ctx.ovInfo();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275element(12, "sg-use", 9);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10)(17, "sg-do");
        \u0275\u0275element(18, "span", 11);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-dont");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 12)(33, "sg-example", 13);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row")(37, "hrm-button", 6);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_37_listener() {
          return ctx.confirmDelete();
        });
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "sg-example", 13);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row", 14);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_45_listener() {
          return ctx.nfInfo();
        });
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_48_listener() {
          return ctx.nfSuccess();
        });
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_51_listener() {
          return ctx.nfWarning();
        });
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "sg-example", 13);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "sg-row")(58, "hrm-button", 15);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_58_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "sg-example", 13);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row")(65, "hrm-button", 15);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_65_listener() {
          return ctx.openRequired();
        });
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "sg-example", 13);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "sg-row", 14);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementStart(73, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_73_listener() {
          return ctx.openSized(400);
        });
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_76_listener() {
          return ctx.openSized(640);
        });
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_79_listener() {
          return ctx.openFullscreen();
        });
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "sg-example", 13);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementStart(85, "sg-row")(86, "hrm-button", 7);
        \u0275\u0275listener("click", function SgDocModal_Template_hrm_button_click_86_listener() {
          return ctx.openScrolling();
        });
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(89, SgDocModal_ng_template_89_Template, 12, 22, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(91, SgDocModal_ng_template_91_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(93, SgDocModal_ng_template_93_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(95, SgDocModal_ng_template_95_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 39, "docs.modal.title"))("desc", \u0275\u0275pipeBind1(2, 41, "docs.modal.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("danger", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 43, "docs.modal.ovDelete"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 45, "docs.modal.ovInfo"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(13, 47, "docs.modal.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(14, 49, "docs.modal.behavior"))("avoid", \u0275\u0275pipeBind1(15, 51, "docs.modal.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(19, 53, "docs.modal.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 55, "docs.modal.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 57, "docs.modal.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 59, "docs.modal.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 61, "docs.modal.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 63, "docs.modal.exConfirmT"))("desc", \u0275\u0275pipeBind1(35, 65, "docs.modal.exConfirmD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("danger", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 67, "docs.modal.cfBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 69, "docs.modal.exNotifyT"))("desc", \u0275\u0275pipeBind1(42, 71, "docs.modal.exNotifyD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 73, "docs.modal.rowNotify"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 75, "docs.modal.info"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 77, "docs.modal.success"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 79, "docs.modal.warning"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(55, 81, "docs.modal.exFormT"))("desc", \u0275\u0275pipeBind1(56, 83, "docs.modal.exFormD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 85, "docs.modal.fmBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 87, "docs.modal.exRequiredT"))("desc", \u0275\u0275pipeBind1(63, 89, "docs.modal.exRequiredD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 91, "docs.modal.rqBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(69, 93, "docs.modal.exSizeT"))("desc", \u0275\u0275pipeBind1(70, 95, "docs.modal.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(72, 97, "docs.modal.rowSize"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 99, "docs.modal.szSmall"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 101, "docs.modal.szMedium"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 103, "docs.modal.szFull"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(83, 105, "docs.modal.exScrollT"))("desc", \u0275\u0275pipeBind1(84, 107, "docs.modal.exScrollD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 109, "docs.modal.scBtn"));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmButton, HrmFormField, HrmInput, HrmTextarea, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocModal, [{
    type: Component,
    args: [{
      selector: "sg-doc-modal",
      imports: [FormsModule, TranslateModule, HrmButton, HrmFormField, HrmInput, HrmTextarea, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.modal.title' | translate" [desc]="'docs.modal.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-button variant="primary" [danger]="true" (click)="confirmDelete()">{{ 'docs.modal.ovDelete' | translate }}</hrm-button>
          <hrm-button variant="default" (click)="ovInfo()">{{ 'docs.modal.ovInfo' | translate }}</hrm-button>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.modal.purpose' | translate"
          [when]="when"
          [behavior]="'docs.modal.behavior' | translate"
          [avoid]="'docs.modal.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.modal.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.modal.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.modal.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.modal.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.modal.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.modal.exConfirmT' | translate"
          [desc]="'docs.modal.exConfirmD' | translate">
          <sg-row>
            <hrm-button variant="primary" [danger]="true" (click)="confirmDelete()">{{ 'docs.modal.cfBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.modal.exNotifyT' | translate"
          [desc]="'docs.modal.exNotifyD' | translate">
          <sg-row [label]="'docs.modal.rowNotify' | translate">
            <hrm-button variant="default" (click)="nfInfo()">{{ 'docs.modal.info' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="nfSuccess()">{{ 'docs.modal.success' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="nfWarning()">{{ 'docs.modal.warning' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.modal.exFormT' | translate"
          [desc]="'docs.modal.exFormD' | translate">
          <sg-row>
            <hrm-button variant="primary" (click)="openForm()">{{ 'docs.modal.fmBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.modal.exRequiredT' | translate"
          [desc]="'docs.modal.exRequiredD' | translate">
          <sg-row>
            <hrm-button variant="primary" (click)="openRequired()">{{ 'docs.modal.rqBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.modal.exSizeT' | translate"
          [desc]="'docs.modal.exSizeD' | translate">
          <sg-row [label]="'docs.modal.rowSize' | translate">
            <hrm-button variant="default" (click)="openSized(400)">{{ 'docs.modal.szSmall' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="openSized(640)">{{ 'docs.modal.szMedium' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="openFullscreen()">{{ 'docs.modal.szFull' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.modal.exScrollT' | translate"
          [desc]="'docs.modal.exScrollD' | translate">
          <sg-row>
            <hrm-button variant="default" (click)="openScrolling()">{{ 'docs.modal.scBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

      </div>
    </sg-doc>

    <!-- Templates n\u1ED9i dung cho c\xE1c h\u1ED9p tho\u1EA1i open() -->
    <ng-template #formTpl>
      <hrm-form-field [label]="'docs.modal.fldName' | translate" [required]="true">
        <hrm-input [(ngModel)]="formName" [placeholder]="'docs.modal.phName' | translate" />
      </hrm-form-field>
      <hrm-form-field [label]="'docs.modal.fldPhone' | translate">
        <hrm-input [(ngModel)]="formPhone" htmlType="tel" [placeholder]="'docs.modal.phPhone' | translate" />
      </hrm-form-field>
      <hrm-form-field [label]="'docs.modal.fldNote' | translate">
        <hrm-textarea [(ngModel)]="formNote" [placeholder]="'docs.modal.phNote' | translate" />
      </hrm-form-field>
    </ng-template>

    <ng-template #requiredTpl>
      <p style="margin:0;color:var(--text-body);line-height:1.6">
        {{ 'docs.modal.rqBody' | translate }}
      </p>
    </ng-template>

    <ng-template #sizedTpl>
      <p style="margin:0;color:var(--text-body);line-height:1.6">
        {{ 'docs.modal.szBody' | translate }}
      </p>
    </ng-template>

    <ng-template #longTpl>
      <div style="color:var(--text-body);line-height:1.7">
        @for (i of clauses; track i) {
          <p style="margin:0 0 12px"><b>{{ 'docs.modal.clauseLabel' | translate:{ n: i } }}</b> {{ 'docs.modal.clauseBody' | translate }}</p>
        }
      </div>
    </ng-template>`
    }]
  }], null, { formTpl: [{ type: ViewChild, args: ["formTpl", { isSignal: true }] }], requiredTpl: [{ type: ViewChild, args: ["requiredTpl", { isSignal: true }] }], sizedTpl: [{ type: ViewChild, args: ["sizedTpl", { isSignal: true }] }], longTpl: [{ type: ViewChild, args: ["longTpl", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocModal, { className: "SgDocModal", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/modal.ts", lineNumber: 122 });
})();
export {
  SgDocModal
};
//# sourceMappingURL=chunk-RBV6NCD7.js.map
