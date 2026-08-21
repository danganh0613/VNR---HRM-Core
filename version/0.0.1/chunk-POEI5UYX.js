import {
  HrmAlert
} from "./chunk-H656EMSP.js";
import "./chunk-7NOIAAII.js";
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
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/alert.ts
function SgDocAlert_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-button", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.alert.acBtn"));
  }
}
var SgDocAlert = class _SgDocAlert {
  constructor() {
    this.when = [
      "docs.alert.when1",
      "docs.alert.when2",
      "docs.alert.when3",
      "docs.alert.when4"
    ];
  }
  static {
    this.\u0275fac = function SgDocAlert_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAlert)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAlert, selectors: [["sg-doc-alert"]], decls: 78, vars: 108, consts: [["renew", ""], ["category", "Feedback & Status", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], ["type", "info", 2, "width", "100%", 3, "message", "description", "closeable"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%"], ["type", "info", 2, "width", "100%", 3, "message", "description"], ["type", "success", 2, "width", "100%", 3, "message", "description"], ["type", "warning", 2, "width", "100%", 3, "message", "description"], ["type", "error", 2, "width", "100%", 3, "message", "description"], ["type", "warning", 2, "width", "100%", 3, "message", "description", "action"], ["type", "info", 2, "width", "100%", 3, "message", "banner"], ["type", "warning", 2, "width", "100%", 3, "message", "banner"], ["variant", "primary", "size", "sm"]], template: function SgDocAlert_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "hrm-alert", 4);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "sg-use", 6);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7)(14, "sg-do");
        \u0275\u0275element(15, "span", 8);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275element(18, "span", 8);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275element(21, "span", 8);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-dont");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 9)(30, "sg-example", 10);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row")(34, "div", 11);
        \u0275\u0275element(35, "hrm-alert", 12);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 11);
        \u0275\u0275element(39, "hrm-alert", 13);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 11);
        \u0275\u0275element(43, "hrm-alert", 14);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 11);
        \u0275\u0275element(47, "hrm-alert", 15);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "sg-example", 10);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementStart(53, "sg-row")(54, "div", 11);
        \u0275\u0275element(55, "hrm-alert", 16);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275template(58, SgDocAlert_ng_template_58_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "sg-example", 10);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "sg-row")(64, "div", 11);
        \u0275\u0275element(65, "hrm-alert", 4);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "sg-example", 10);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "sg-row")(72, "div", 11);
        \u0275\u0275element(73, "hrm-alert", 17);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 11);
        \u0275\u0275element(76, "hrm-alert", 18);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const renew_r1 = \u0275\u0275reference(59);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 40, "docs.alert.title"))("desc", \u0275\u0275pipeBind1(2, 42, "docs.alert.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(6, 44, "docs.alert.ovMsg"))("description", \u0275\u0275pipeBind1(7, 46, "docs.alert.ovDesc"))("closeable", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 48, "docs.alert.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 50, "docs.alert.behavior"))("avoid", \u0275\u0275pipeBind1(12, 52, "docs.alert.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 54, "docs.alert.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(19, 56, "docs.alert.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 58, "docs.alert.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 60, "docs.alert.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 62, "docs.alert.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 64, "docs.alert.exStatusT"))("desc", \u0275\u0275pipeBind1(32, 66, "docs.alert.exStatusD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(36, 68, "docs.alert.st1Msg"))("description", \u0275\u0275pipeBind1(37, 70, "docs.alert.st1Desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(40, 72, "docs.alert.st2Msg"))("description", \u0275\u0275pipeBind1(41, 74, "docs.alert.st2Desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(44, 76, "docs.alert.st3Msg"))("description", \u0275\u0275pipeBind1(45, 78, "docs.alert.st3Desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(48, 80, "docs.alert.st4Msg"))("description", \u0275\u0275pipeBind1(49, 82, "docs.alert.st4Desc"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(51, 84, "docs.alert.exActionT"))("desc", \u0275\u0275pipeBind1(52, 86, "docs.alert.exActionD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(56, 88, "docs.alert.acMsg"))("description", \u0275\u0275pipeBind1(57, 90, "docs.alert.acDesc"))("action", renew_r1);
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(61, 92, "docs.alert.exCloseT"))("desc", \u0275\u0275pipeBind1(62, 94, "docs.alert.exCloseD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(66, 96, "docs.alert.clMsg"))("description", \u0275\u0275pipeBind1(67, 98, "docs.alert.clDesc"))("closeable", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(69, 100, "docs.alert.exBannerT"))("desc", \u0275\u0275pipeBind1(70, 102, "docs.alert.exBannerD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(74, 104, "docs.alert.bn1Msg"))("banner", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("message", \u0275\u0275pipeBind1(77, 106, "docs.alert.bn2Msg"))("banner", true);
      }
    }, dependencies: [TranslateModule, HrmAlert, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAlert, [{
    type: Component,
    args: [{
      selector: "sg-doc-alert",
      imports: [TranslateModule, HrmAlert, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Feedback & Status" [title]="'docs.alert.title' | translate" [desc]="'docs.alert.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-alert type="info" [message]="'docs.alert.ovMsg' | translate" [description]="'docs.alert.ovDesc' | translate" [closeable]="true" style="width:100%" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.alert.purpose' | translate"
          [when]="when"
          [behavior]="'docs.alert.behavior' | translate"
          [avoid]="'docs.alert.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.alert.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.alert.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.alert.do3' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.alert.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.alert.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.alert.exStatusT' | translate"
          [desc]="'docs.alert.exStatusD' | translate">
          <sg-row>
            <div style="width:100%"><hrm-alert type="info" [message]="'docs.alert.st1Msg' | translate" [description]="'docs.alert.st1Desc' | translate" style="width:100%" /></div>
            <div style="width:100%"><hrm-alert type="success" [message]="'docs.alert.st2Msg' | translate" [description]="'docs.alert.st2Desc' | translate" style="width:100%" /></div>
            <div style="width:100%"><hrm-alert type="warning" [message]="'docs.alert.st3Msg' | translate" [description]="'docs.alert.st3Desc' | translate" style="width:100%" /></div>
            <div style="width:100%"><hrm-alert type="error" [message]="'docs.alert.st4Msg' | translate" [description]="'docs.alert.st4Desc' | translate" style="width:100%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.alert.exActionT' | translate"
          [desc]="'docs.alert.exActionD' | translate">
          <sg-row>
            <div style="width:100%">
              <hrm-alert type="warning" [message]="'docs.alert.acMsg' | translate" [description]="'docs.alert.acDesc' | translate" [action]="renew" style="width:100%" />
              <ng-template #renew><hrm-button variant="primary" size="sm">{{ 'docs.alert.acBtn' | translate }}</hrm-button></ng-template>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.alert.exCloseT' | translate"
          [desc]="'docs.alert.exCloseD' | translate">
          <sg-row>
            <div style="width:100%"><hrm-alert type="info" [message]="'docs.alert.clMsg' | translate" [description]="'docs.alert.clDesc' | translate" [closeable]="true" style="width:100%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.alert.exBannerT' | translate"
          [desc]="'docs.alert.exBannerD' | translate">
          <sg-row>
            <div style="width:100%"><hrm-alert type="info" [message]="'docs.alert.bn1Msg' | translate" [banner]="true" style="width:100%" /></div>
            <div style="width:100%"><hrm-alert type="warning" [message]="'docs.alert.bn2Msg' | translate" [banner]="true" style="width:100%" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAlert, { className: "SgDocAlert", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/alert.ts", lineNumber: 76 });
})();
export {
  SgDocAlert
};
//# sourceMappingURL=chunk-POEI5UYX.js.map
