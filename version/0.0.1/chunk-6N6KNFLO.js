import {
  HrmMessageService
} from "./chunk-WKDCGAQZ.js";
import "./chunk-I3UTBD2V.js";
import {
  HrmPopconfirm
} from "./chunk-ORJB2TMU.js";
import "./chunk-GKLVT5NB.js";
import "./chunk-UDAG7UB6.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-ZUH7BZUU.js";
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
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/popconfirm.ts
var SgDocPopconfirm = class _SgDocPopconfirm {
  constructor() {
    this.msg = inject(HrmMessageService);
    this.t = inject(TranslateService);
    this.when = [
      "docs.popconfirm.when1",
      "docs.popconfirm.when2",
      "docs.popconfirm.when3"
    ];
  }
  toast(key) {
    this.msg.success(this.t.instant(key));
  }
  toastInfo(key) {
    this.msg.info(this.t.instant(key));
  }
  static {
    this.\u0275fac = function SgDocPopconfirm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocPopconfirm)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocPopconfirm, selectors: [["sg-doc-popconfirm"]], decls: 104, vars: 197, consts: [["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "default", 3, "hrmConfirm", "danger", "hrmPopconfirm", "hrmOkText", "hrmCancelText", "hrmDanger"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["variant", "default", 3, "hrmConfirm", "hrmCancel", "danger", "hrmPopconfirm", "hrmOkText", "hrmCancelText", "hrmDanger"], ["variant", "text", 3, "hrmConfirm", "danger", "hrmPopconfirm", "hrmOkText", "hrmCancelText", "hrmDanger"], ["variant", "default", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"], [3, "label"], ["variant", "primary", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"], ["variant", "default", "hrmPopconfirmPlacement", "top", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"], ["variant", "default", "hrmPopconfirmPlacement", "bottom", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"], ["variant", "default", "hrmPopconfirmPlacement", "left", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"], ["variant", "default", "hrmPopconfirmPlacement", "right", 3, "hrmConfirm", "hrmPopconfirm", "hrmOkText", "hrmCancelText"]], template: function SgDocPopconfirm_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_4_listener() {
          return ctx.toast("docs.popconfirm.ovToast");
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3);
        \u0275\u0275element(11, "sg-use", 4);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 6)(26, "sg-example", 7);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "hrm-button", 8);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_30_listener() {
          return ctx.toast("docs.popconfirm.delRowToast");
        })("hrmCancel", function SgDocPopconfirm_Template_hrm_button_hrmCancel_30_listener() {
          return ctx.toastInfo("docs.popconfirm.delRowCancelToast");
        });
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "hrm-button", 9);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_36_listener() {
          return ctx.toast("docs.popconfirm.delFileToast");
        });
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-example", 7);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row")(46, "hrm-button", 2);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_46_listener() {
          return ctx.toast("docs.popconfirm.revokeToast");
        });
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "hrm-button", 10);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_52_listener() {
          return ctx.toast("docs.popconfirm.leaveToast");
        });
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "sg-example", 7);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementStart(61, "sg-row", 11);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "hrm-button", 2);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_63_listener() {
          return ctx.toast("docs.popconfirm.permDelToast");
        });
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "hrm-button", 12);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_69_listener() {
          return ctx.toast("docs.popconfirm.submitToast");
        });
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "sg-example", 7);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementStart(78, "sg-row", 11);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementStart(80, "hrm-button", 13);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_80_listener() {
          return ctx.toast("docs.popconfirm.top");
        });
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "hrm-button", 14);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_86_listener() {
          return ctx.toast("docs.popconfirm.bottom");
        });
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "hrm-button", 15);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_92_listener() {
          return ctx.toast("docs.popconfirm.left");
        });
        \u0275\u0275text(96);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "hrm-button", 16);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275pipe(101, "translate");
        \u0275\u0275listener("hrmConfirm", function SgDocPopconfirm_Template_hrm_button_hrmConfirm_98_listener() {
          return ctx.toast("docs.popconfirm.right");
        });
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 73, "docs.popconfirm.title"))("desc", \u0275\u0275pipeBind1(2, 75, "docs.popconfirm.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("danger", true)("hrmPopconfirm", \u0275\u0275pipeBind1(5, 77, "docs.popconfirm.ovConfirm"))("hrmOkText", \u0275\u0275pipeBind1(6, 79, "docs.popconfirm.ovOk"))("hrmCancelText", \u0275\u0275pipeBind1(7, 81, "docs.popconfirm.ovCancel"))("hrmDanger", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 83, "docs.popconfirm.ovLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 85, "docs.popconfirm.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 87, "docs.popconfirm.behavior"))("avoid", \u0275\u0275pipeBind1(14, 89, "docs.popconfirm.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 91, "docs.popconfirm.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 93, "docs.popconfirm.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 95, "docs.popconfirm.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 97, "docs.popconfirm.exDeleteT"))("desc", \u0275\u0275pipeBind1(28, 99, "docs.popconfirm.exDeleteD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("danger", true)("hrmPopconfirm", \u0275\u0275pipeBind1(31, 101, "docs.popconfirm.delRowConfirm"))("hrmOkText", \u0275\u0275pipeBind1(32, 103, "docs.popconfirm.delOk"))("hrmCancelText", \u0275\u0275pipeBind1(33, 105, "docs.popconfirm.cancel"))("hrmDanger", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 107, "docs.popconfirm.delRowLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("danger", true)("hrmPopconfirm", \u0275\u0275pipeBind1(37, 109, "docs.popconfirm.delFileConfirm"))("hrmOkText", \u0275\u0275pipeBind1(38, 111, "docs.popconfirm.delOk"))("hrmCancelText", \u0275\u0275pipeBind1(39, 113, "docs.popconfirm.cancel"))("hrmDanger", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 115, "docs.popconfirm.delFileLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 117, "docs.popconfirm.exLabelT"))("desc", \u0275\u0275pipeBind1(44, 119, "docs.popconfirm.exLabelD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("danger", true)("hrmPopconfirm", \u0275\u0275pipeBind1(47, 121, "docs.popconfirm.revokeConfirm"))("hrmOkText", \u0275\u0275pipeBind1(48, 123, "docs.popconfirm.revokeOk"))("hrmCancelText", \u0275\u0275pipeBind1(49, 125, "docs.popconfirm.revokeCancel"))("hrmDanger", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 127, "docs.popconfirm.revokeLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(53, 129, "docs.popconfirm.leaveConfirm"))("hrmOkText", \u0275\u0275pipeBind1(54, 131, "docs.popconfirm.leaveOk"))("hrmCancelText", \u0275\u0275pipeBind1(55, 133, "docs.popconfirm.leaveCancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 135, "docs.popconfirm.leaveLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(59, 137, "docs.popconfirm.exDangerT"))("desc", \u0275\u0275pipeBind1(60, 139, "docs.popconfirm.exDangerD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(62, 141, "docs.popconfirm.rowDanger"));
        \u0275\u0275advance(2);
        \u0275\u0275property("danger", true)("hrmPopconfirm", \u0275\u0275pipeBind1(64, 143, "docs.popconfirm.permDelConfirm"))("hrmOkText", \u0275\u0275pipeBind1(65, 145, "docs.popconfirm.permDelOk"))("hrmCancelText", \u0275\u0275pipeBind1(66, 147, "docs.popconfirm.cancel"))("hrmDanger", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 149, "docs.popconfirm.permDelLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(70, 151, "docs.popconfirm.submitConfirm"))("hrmOkText", \u0275\u0275pipeBind1(71, 153, "docs.popconfirm.submitOk"))("hrmCancelText", \u0275\u0275pipeBind1(72, 155, "docs.popconfirm.submitCancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 157, "docs.popconfirm.submitLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(76, 159, "docs.popconfirm.exPlaceT"))("desc", \u0275\u0275pipeBind1(77, 161, "docs.popconfirm.exPlaceD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(79, 163, "docs.popconfirm.rowPlace"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(81, 165, "docs.popconfirm.placeConfirm"))("hrmOkText", \u0275\u0275pipeBind1(82, 167, "docs.popconfirm.ok"))("hrmCancelText", \u0275\u0275pipeBind1(83, 169, "docs.popconfirm.cancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 171, "docs.popconfirm.top"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(87, 173, "docs.popconfirm.placeConfirm"))("hrmOkText", \u0275\u0275pipeBind1(88, 175, "docs.popconfirm.ok"))("hrmCancelText", \u0275\u0275pipeBind1(89, 177, "docs.popconfirm.cancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 179, "docs.popconfirm.bottom"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(93, 181, "docs.popconfirm.placeConfirm"))("hrmOkText", \u0275\u0275pipeBind1(94, 183, "docs.popconfirm.ok"))("hrmCancelText", \u0275\u0275pipeBind1(95, 185, "docs.popconfirm.cancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 187, "docs.popconfirm.left"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmPopconfirm", \u0275\u0275pipeBind1(99, 189, "docs.popconfirm.placeConfirm"))("hrmOkText", \u0275\u0275pipeBind1(100, 191, "docs.popconfirm.ok"))("hrmCancelText", \u0275\u0275pipeBind1(101, 193, "docs.popconfirm.cancel"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 195, "docs.popconfirm.right"));
      }
    }, dependencies: [TranslateModule, HrmButton, HrmPopconfirm, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocPopconfirm, [{
    type: Component,
    args: [{
      selector: "sg-doc-popconfirm",
      imports: [TranslateModule, HrmButton, HrmPopconfirm, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.popconfirm.title' | translate" [desc]="'docs.popconfirm.desc' | translate">

      <div sgOverview>
        <hrm-button variant="default" [danger]="true"
          [hrmPopconfirm]="'docs.popconfirm.ovConfirm' | translate"
          [hrmOkText]="'docs.popconfirm.ovOk' | translate" [hrmCancelText]="'docs.popconfirm.ovCancel' | translate" [hrmDanger]="true"
          (hrmConfirm)="toast('docs.popconfirm.ovToast')">{{ 'docs.popconfirm.ovLabel' | translate }}</hrm-button>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.popconfirm.purpose' | translate"
          [when]="when"
          [behavior]="'docs.popconfirm.behavior' | translate"
          [avoid]="'docs.popconfirm.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.popconfirm.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.popconfirm.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.popconfirm.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.popconfirm.exDeleteT' | translate"
          [desc]="'docs.popconfirm.exDeleteD' | translate">
          <sg-row>
            <hrm-button variant="default" [danger]="true"
              [hrmPopconfirm]="'docs.popconfirm.delRowConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.delOk' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate" [hrmDanger]="true"
              (hrmConfirm)="toast('docs.popconfirm.delRowToast')" (hrmCancel)="toastInfo('docs.popconfirm.delRowCancelToast')">{{ 'docs.popconfirm.delRowLabel' | translate }}</hrm-button>
            <hrm-button variant="text" [danger]="true"
              [hrmPopconfirm]="'docs.popconfirm.delFileConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.delOk' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate" [hrmDanger]="true"
              (hrmConfirm)="toast('docs.popconfirm.delFileToast')">{{ 'docs.popconfirm.delFileLabel' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.popconfirm.exLabelT' | translate"
          [desc]="'docs.popconfirm.exLabelD' | translate">
          <sg-row>
            <hrm-button variant="default" [danger]="true"
              [hrmPopconfirm]="'docs.popconfirm.revokeConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.revokeOk' | translate" [hrmCancelText]="'docs.popconfirm.revokeCancel' | translate" [hrmDanger]="true"
              (hrmConfirm)="toast('docs.popconfirm.revokeToast')">{{ 'docs.popconfirm.revokeLabel' | translate }}</hrm-button>
            <hrm-button variant="default"
              [hrmPopconfirm]="'docs.popconfirm.leaveConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.leaveOk' | translate" [hrmCancelText]="'docs.popconfirm.leaveCancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.leaveToast')">{{ 'docs.popconfirm.leaveLabel' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.popconfirm.exDangerT' | translate"
          [desc]="'docs.popconfirm.exDangerD' | translate">
          <sg-row [label]="'docs.popconfirm.rowDanger' | translate">
            <hrm-button variant="default" [danger]="true"
              [hrmPopconfirm]="'docs.popconfirm.permDelConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.permDelOk' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate" [hrmDanger]="true"
              (hrmConfirm)="toast('docs.popconfirm.permDelToast')">{{ 'docs.popconfirm.permDelLabel' | translate }}</hrm-button>
            <hrm-button variant="primary"
              [hrmPopconfirm]="'docs.popconfirm.submitConfirm' | translate"
              [hrmOkText]="'docs.popconfirm.submitOk' | translate" [hrmCancelText]="'docs.popconfirm.submitCancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.submitToast')">{{ 'docs.popconfirm.submitLabel' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.popconfirm.exPlaceT' | translate"
          [desc]="'docs.popconfirm.exPlaceD' | translate">
          <sg-row [label]="'docs.popconfirm.rowPlace' | translate">
            <hrm-button variant="default"
              [hrmPopconfirm]="'docs.popconfirm.placeConfirm' | translate" hrmPopconfirmPlacement="top"
              [hrmOkText]="'docs.popconfirm.ok' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.top')">{{ 'docs.popconfirm.top' | translate }}</hrm-button>
            <hrm-button variant="default"
              [hrmPopconfirm]="'docs.popconfirm.placeConfirm' | translate" hrmPopconfirmPlacement="bottom"
              [hrmOkText]="'docs.popconfirm.ok' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.bottom')">{{ 'docs.popconfirm.bottom' | translate }}</hrm-button>
            <hrm-button variant="default"
              [hrmPopconfirm]="'docs.popconfirm.placeConfirm' | translate" hrmPopconfirmPlacement="left"
              [hrmOkText]="'docs.popconfirm.ok' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.left')">{{ 'docs.popconfirm.left' | translate }}</hrm-button>
            <hrm-button variant="default"
              [hrmPopconfirm]="'docs.popconfirm.placeConfirm' | translate" hrmPopconfirmPlacement="right"
              [hrmOkText]="'docs.popconfirm.ok' | translate" [hrmCancelText]="'docs.popconfirm.cancel' | translate"
              (hrmConfirm)="toast('docs.popconfirm.right')">{{ 'docs.popconfirm.right' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocPopconfirm, { className: "SgDocPopconfirm", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/popconfirm.ts", lineNumber: 106 });
})();
export {
  SgDocPopconfirm
};
//# sourceMappingURL=chunk-6N6KNFLO.js.map
