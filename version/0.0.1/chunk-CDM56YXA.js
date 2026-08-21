import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  HrmSwitch
} from "./chunk-T4LJYRS4.js";
import {
  HrmCard
} from "./chunk-XPLMSQMT.js";
import "./chunk-PRQ7GH7J.js";
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
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/switch.ts
var SgDocSwitch = class _SgDocSwitch {
  constructor() {
    this.on = true;
    this.notify = true;
    this.setEmail = true;
    this.setPush = false;
    this.setWeekly = true;
    this.when = [
      "docs.switch.when1",
      "docs.switch.when2",
      "docs.switch.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSwitch)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSwitch, selectors: [["sg-doc-switch"]], decls: 86, vars: 98, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [3, "ngModelChange", "ngModel"], [2, "font-size", "var(--fs-14)"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "display", "flex", "gap", "12px", "align-items", "flex-start"], [2, "font-size", "var(--fs-14)", "font-weight", "500", "color", "var(--text-strong)"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin-top", "2px"], [2, "width", "100%", "max-width", "420px"], [3, "title"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "10px 0"], [2, "font-size", "var(--fs-14)", "color", "var(--text-body)"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "padding", "10px 0", "border-top", "1px solid var(--border-soft)"], [3, "disabled", "ngModel"], [2, "font-size", "var(--fs-14)", "font-weight", "500", "color", "var(--text-soft)"], [2, "width", "100%", "max-width", "360px"], [3, "label", "required", "error"], [3, "ngModel"], [3, "label", "help"]], template: function SgDocSwitch_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row")(5, "hrm-switch", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSwitch_Template_hrm_switch_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.on, $event) || (ctx.on = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275element(10, "sg-use", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6)(15, "sg-do");
        \u0275\u0275element(16, "span", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275element(22, "span", 7);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "sg-example", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row")(29, "div", 10)(30, "hrm-switch", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSwitch_Template_hrm_switch_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.notify, $event) || (ctx.notify = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "div", 11);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 12);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "sg-example", 9);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row")(42, "div", 13)(43, "hrm-card", 14);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "div", 15)(46, "span", 16);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "hrm-switch", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSwitch_Template_hrm_switch_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.setEmail, $event) || (ctx.setEmail = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 17)(51, "span", 16);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "hrm-switch", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSwitch_Template_hrm_switch_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.setPush, $event) || (ctx.setPush = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 17)(56, "span", 16);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "hrm-switch", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSwitch_Template_hrm_switch_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.setWeekly, $event) || (ctx.setWeekly = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(60, "sg-example", 9);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "sg-row")(64, "div", 10);
        \u0275\u0275element(65, "hrm-switch", 18);
        \u0275\u0275elementStart(66, "div")(67, "div", 19);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 12);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "sg-example", 9);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementStart(76, "sg-row")(77, "div", 20)(78, "hrm-form-field", 21);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275element(81, "hrm-switch", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "hrm-form-field", 23);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275element(85, "hrm-switch", 22);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 40, "docs.switch.title"))("desc", \u0275\u0275pipeBind1(2, 42, "docs.switch.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.on);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 44, "docs.switch.active"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 46, "docs.switch.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 48, "docs.switch.behavior"))("avoid", \u0275\u0275pipeBind1(13, 50, "docs.switch.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 52, "docs.switch.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 54, "docs.switch.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 56, "docs.switch.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 58, "docs.switch.exDescT"))("desc", \u0275\u0275pipeBind1(27, 60, "docs.switch.exDescD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.notify);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 62, "docs.switch.emailNotify"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 64, "docs.switch.emailNotifyDesc"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 66, "docs.switch.exPanelT"))("desc", \u0275\u0275pipeBind1(40, 68, "docs.switch.exPanelD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 70, "docs.switch.notifySettings"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 72, "docs.switch.setEmail"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.setEmail);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 74, "docs.switch.setPush"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.setPush);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 76, "docs.switch.setWeekly"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.setWeekly);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(61, 78, "docs.switch.exDisabledT"))("desc", \u0275\u0275pipeBind1(62, 80, "docs.switch.exDisabledD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", true)("ngModel", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 82, "docs.switch.twoFa"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 84, "docs.switch.twoFaDesc"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(74, 86, "docs.switch.exStateT"))("desc", \u0275\u0275pipeBind1(75, 88, "docs.switch.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(79, 90, "docs.switch.agreeTerms"))("required", true)("error", \u0275\u0275pipeBind1(80, 92, "docs.switch.errAgree"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", false);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(83, 94, "docs.switch.allowSync"))("help", \u0275\u0275pipeBind1(84, 96, "docs.switch.helpSync"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", true);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmSwitch, HrmCard, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSwitch, [{
    type: Component,
    args: [{
      selector: "sg-doc-switch",
      imports: [FormsModule, TranslateModule, HrmSwitch, HrmCard, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.switch.title' | translate" [desc]="'docs.switch.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-switch [(ngModel)]="on" />
          <span style="font-size: var(--fs-14)">{{ 'docs.switch.active' | translate }}</span>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.switch.purpose' | translate"
          [when]="when"
          [behavior]="'docs.switch.behavior' | translate"
          [avoid]="'docs.switch.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.switch.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.switch.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.switch.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.switch.exDescT' | translate"
          [desc]="'docs.switch.exDescD' | translate">
          <sg-row>
            <div style="display:flex;gap:12px;align-items:flex-start">
              <hrm-switch [(ngModel)]="notify" />
              <div>
                <div style="font-size: var(--fs-14);font-weight:500;color:var(--text-strong)">{{ 'docs.switch.emailNotify' | translate }}</div>
                <div style="font-size: var(--fs-13);color:var(--text-sub);margin-top:2px">{{ 'docs.switch.emailNotifyDesc' | translate }}</div>
              </div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.switch.exPanelT' | translate"
          [desc]="'docs.switch.exPanelD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-card [title]="'docs.switch.notifySettings' | translate">
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0">
                  <span style="font-size: var(--fs-14);color:var(--text-body)">{{ 'docs.switch.setEmail' | translate }}</span>
                  <hrm-switch [(ngModel)]="setEmail" />
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-top:1px solid var(--border-soft)">
                  <span style="font-size: var(--fs-14);color:var(--text-body)">{{ 'docs.switch.setPush' | translate }}</span>
                  <hrm-switch [(ngModel)]="setPush" />
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-top:1px solid var(--border-soft)">
                  <span style="font-size: var(--fs-14);color:var(--text-body)">{{ 'docs.switch.setWeekly' | translate }}</span>
                  <hrm-switch [(ngModel)]="setWeekly" />
                </div>
              </hrm-card>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.switch.exDisabledT' | translate"
          [desc]="'docs.switch.exDisabledD' | translate">
          <sg-row>
            <div style="display:flex;gap:12px;align-items:flex-start">
              <hrm-switch [disabled]="true" [ngModel]="false" />
              <div>
                <div style="font-size: var(--fs-14);font-weight:500;color:var(--text-soft)">{{ 'docs.switch.twoFa' | translate }}</div>
                <div style="font-size: var(--fs-13);color:var(--text-sub);margin-top:2px">{{ 'docs.switch.twoFaDesc' | translate }}</div>
              </div>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.switch.exStateT' | translate"
          [desc]="'docs.switch.exStateD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <hrm-form-field [label]="'docs.switch.agreeTerms' | translate" [required]="true" [error]="'docs.switch.errAgree' | translate">
                <hrm-switch [ngModel]="false" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.switch.allowSync' | translate" [help]="'docs.switch.helpSync' | translate">
                <hrm-switch [ngModel]="true" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSwitch, { className: "SgDocSwitch", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/switch.ts", lineNumber: 105 });
})();
export {
  SgDocSwitch
};
//# sourceMappingURL=chunk-CDM56YXA.js.map
