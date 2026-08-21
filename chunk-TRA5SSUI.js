import {
  HrmMessageService
} from "./chunk-GXX6IYPA.js";
import "./chunk-B5HSHKIZ.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import "./chunk-MBPTEHMI.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
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
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/message.ts
var SgDocMessage = class _SgDocMessage {
  constructor() {
    this.msg = inject(HrmMessageService);
    this.t = inject(TranslateService);
    this.when = [
      "docs.message.when1",
      "docs.message.when2",
      "docs.message.when3"
    ];
  }
  ovSave() {
    this.msg.success(this.t.instant("docs.message.ovMsg"));
  }
  tSuccess() {
    this.msg.success(this.t.instant("docs.message.tSuccessMsg"));
  }
  tError() {
    this.msg.error(this.t.instant("docs.message.tErrorMsg"));
  }
  tInfo() {
    this.msg.info(this.t.instant("docs.message.tInfoMsg"));
  }
  tWarning() {
    this.msg.warning(this.t.instant("docs.message.tWarningMsg"));
  }
  durShort() {
    this.msg.success(this.t.instant("docs.message.durShortMsg"), 1500);
  }
  durLong() {
    this.msg.error(this.t.instant("docs.message.durLongMsg"), 8e3);
  }
  /** Đang xử lý (giữ tới khi xong) → đóng rồi báo thành công. */
  exportReport() {
    const id = this.msg.loading(this.t.instant("docs.message.ldLoading"), 0);
    setTimeout(() => {
      this.msg.remove(id);
      this.msg.success(this.t.instant("docs.message.ldDone"));
    }, 1800);
  }
  /** Bắn liên tiếp nhiều thông báo để minh họa xếp chồng. */
  stack() {
    this.msg.success(this.t.instant("docs.message.stMsg1"));
    setTimeout(() => this.msg.success(this.t.instant("docs.message.stMsg2")), 350);
    setTimeout(() => this.msg.success(this.t.instant("docs.message.stMsg3")), 700);
  }
  static {
    this.\u0275fac = function SgDocMessage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMessage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMessage, selectors: [["sg-doc-message"]], decls: 71, vars: 90, consts: [["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "primary", 3, "click"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["variant", "default", 3, "click"], ["variant", "default", 3, "click", "danger"]], template: function SgDocMessage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_4_listener() {
          return ctx.ovSave();
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "sg-use", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275element(17, "span", 6);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row", 9);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_34_listener() {
          return ctx.tSuccess();
        });
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "hrm-button", 11);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_37_listener() {
          return ctx.tError();
        });
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_40_listener() {
          return ctx.tInfo();
        });
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_43_listener() {
          return ctx.tWarning();
        });
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "sg-example", 8);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row")(50, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_50_listener() {
          return ctx.exportReport();
        });
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "sg-example", 8);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementStart(56, "sg-row")(57, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_57_listener() {
          return ctx.stack();
        });
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "sg-example", 8);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "sg-row", 9);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementStart(65, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_65_listener() {
          return ctx.durShort();
        });
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "hrm-button", 11);
        \u0275\u0275listener("click", function SgDocMessage_Template_hrm_button_click_68_listener() {
          return ctx.durLong();
        });
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 32, "docs.message.title"))("desc", \u0275\u0275pipeBind1(2, 34, "docs.message.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 36, "docs.message.ovBtn"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 38, "docs.message.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 40, "docs.message.behavior"))("avoid", \u0275\u0275pipeBind1(11, 42, "docs.message.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "docs.message.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 46, "docs.message.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 48, "docs.message.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 50, "docs.message.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 52, "docs.message.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 54, "docs.message.exTypesT"))("desc", \u0275\u0275pipeBind1(31, 56, "docs.message.exTypesD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(33, 58, "docs.message.rowTypes"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 60, "docs.message.success"));
        \u0275\u0275advance(2);
        \u0275\u0275property("danger", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 62, "docs.message.error"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 64, "docs.message.info"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 66, "docs.message.warning"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 68, "docs.message.exLoadingT"))("desc", \u0275\u0275pipeBind1(48, 70, "docs.message.exLoadingD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 72, "docs.message.ldBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(54, 74, "docs.message.exStackT"))("desc", \u0275\u0275pipeBind1(55, 76, "docs.message.exStackD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 78, "docs.message.stBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(61, 80, "docs.message.exDurationT"))("desc", \u0275\u0275pipeBind1(62, 82, "docs.message.exDurationD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(64, 84, "docs.message.rowDuration"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 86, "docs.message.durShort"));
        \u0275\u0275advance(2);
        \u0275\u0275property("danger", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 88, "docs.message.durLong"));
      }
    }, dependencies: [TranslateModule, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMessage, [{
    type: Component,
    args: [{
      selector: "sg-doc-message",
      imports: [TranslateModule, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.message.title' | translate" [desc]="'docs.message.desc' | translate">

      <div sgOverview>
        <hrm-button variant="primary" (click)="ovSave()">{{ 'docs.message.ovBtn' | translate }}</hrm-button>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.message.purpose' | translate"
          [when]="when"
          [behavior]="'docs.message.behavior' | translate"
          [avoid]="'docs.message.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.message.do1' | translate }}</sg-do>
        <sg-do><span [innerHTML]="'docs.message.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.message.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.message.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.message.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.message.exTypesT' | translate"
          [desc]="'docs.message.exTypesD' | translate">
          <sg-row [label]="'docs.message.rowTypes' | translate">
            <hrm-button variant="default" (click)="tSuccess()">{{ 'docs.message.success' | translate }}</hrm-button>
            <hrm-button variant="default" [danger]="true" (click)="tError()">{{ 'docs.message.error' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="tInfo()">{{ 'docs.message.info' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="tWarning()">{{ 'docs.message.warning' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.message.exLoadingT' | translate"
          [desc]="'docs.message.exLoadingD' | translate">
          <sg-row>
            <hrm-button variant="primary" (click)="exportReport()">{{ 'docs.message.ldBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.message.exStackT' | translate"
          [desc]="'docs.message.exStackD' | translate">
          <sg-row>
            <hrm-button variant="default" (click)="stack()">{{ 'docs.message.stBtn' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.message.exDurationT' | translate"
          [desc]="'docs.message.exDurationD' | translate">
          <sg-row [label]="'docs.message.rowDuration' | translate">
            <hrm-button variant="default" (click)="durShort()">{{ 'docs.message.durShort' | translate }}</hrm-button>
            <hrm-button variant="default" [danger]="true" (click)="durLong()">{{ 'docs.message.durLong' | translate }}</hrm-button>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMessage, { className: "SgDocMessage", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/message.ts", lineNumber: 71 });
})();
export {
  SgDocMessage
};
//# sourceMappingURL=chunk-TRA5SSUI.js.map
