import {
  HrmFormField
} from "./chunk-27J25YLX.js";
import {
  HrmDatePicker
} from "./chunk-RKQLONQG.js";
import "./chunk-HFOJ6MC3.js";
import "./chunk-7O54XKAF.js";
import {
  HrmSwitch
} from "./chunk-53LQTSVF.js";
import {
  HrmTextarea
} from "./chunk-MXHRUBSQ.js";
import "./chunk-JUFZRQMG.js";
import {
  HrmSelect
} from "./chunk-H3B7M4KL.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import {
  HrmInput
} from "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
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
import "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
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
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/form-field.ts
var SgDocFormField = class _SgDocFormField {
  constructor() {
    this.email = "";
    this.when = [
      "docs.formField.when1",
      "docs.formField.when2",
      "docs.formField.when3"
    ];
    this.departments = [
      { label: "Nh\xE2n s\u1EF1", value: "hr" },
      { label: "K\u1EBF to\xE1n", value: "acc" },
      { label: "K\u1EF9 thu\u1EADt", value: "eng" },
      { label: "Kinh doanh", value: "sales" }
    ];
  }
  static {
    this.\u0275fac = function SgDocFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocFormField)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocFormField, selectors: [["sg-doc-form-field"]], decls: 100, vars: 150, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "360px"], [3, "label", "required", "help"], ["htmlType", "email", "placeholder", "ten@congty.vn", 3, "ngModelChange", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "280px"], [3, "label", "help"], ["htmlType", "password", 3, "ngModel"], ["htmlType", "email", "placeholder", "ten@gmail.com", 3, "ngModel"], [3, "label", "required"], ["placeholder", "Nguy\u1EC5n V\u0103n A", 3, "ngModel"], [3, "label", "optional", "optionalLabel"], [3, "placeholder", "ngModel"], [3, "label", "required", "error"], ["status", "error", 3, "ngModel"], ["status", "warning", 3, "ngModel"], ["status", "success", 3, "ngModel"], [2, "width", "100%", "max-width", "380px"], [3, "options", "placeholder", "ngModel"], [3, "ngModel"]], template: function SgDocFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocFormField_Template_hrm_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "sg-use", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "sg-do");
        \u0275\u0275element(16, "span", 8);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 8);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275element(22, "span", 8);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-dont");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "sg-example", 10);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 11)(36, "hrm-form-field", 12);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275element(39, "hrm-input", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 11)(41, "hrm-form-field", 12);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275element(44, "hrm-input", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "sg-example", 10);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row")(49, "div", 11)(50, "hrm-form-field", 15);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275element(52, "hrm-input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 11)(54, "hrm-form-field", 17);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "hrm-input", 18);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "sg-example", 10);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "sg-row")(63, "div", 11)(64, "hrm-form-field", 19);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275element(67, "hrm-input", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 11)(69, "hrm-form-field", 12);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275element(72, "hrm-input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 11)(74, "hrm-form-field", 12);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275element(77, "hrm-input", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "sg-example", 10);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementStart(81, "sg-row")(82, "div", 23)(83, "hrm-form-field", 3);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275element(86, "hrm-select", 24);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "hrm-form-field", 15);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275element(90, "hrm-date-picker", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "hrm-form-field", 12);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275element(94, "hrm-switch", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "hrm-form-field", 17);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275element(98, "hrm-textarea", 18);
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 64, "docs.formField.title"))("desc", \u0275\u0275pipeBind1(2, 66, "docs.formField.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 68, "docs.formField.ovLabel"))("required", true)("help", \u0275\u0275pipeBind1(7, 70, "docs.formField.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 72, "docs.formField.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 74, "docs.formField.behavior"))("avoid", \u0275\u0275pipeBind1(13, 76, "docs.formField.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 78, "docs.formField.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 80, "docs.formField.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 82, "docs.formField.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 84, "docs.formField.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 86, "docs.formField.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 88, "docs.formField.exDescT"))("desc", \u0275\u0275pipeBind1(33, 90, "docs.formField.exDescD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 92, "docs.formField.pwLabel"))("help", \u0275\u0275pipeBind1(38, 94, "docs.formField.pwHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 96, "docs.formField.personalEmailLabel"))("help", \u0275\u0275pipeBind1(43, 98, "docs.formField.personalEmailHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "");
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 100, "docs.formField.exReqT"))("desc", \u0275\u0275pipeBind1(47, 102, "docs.formField.exReqD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(51, 104, "docs.formField.nameLabel"))("required", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(55, 106, "docs.formField.nickLabel"))("optional", true)("optionalLabel", \u0275\u0275pipeBind1(56, 108, "docs.formField.optionalLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(58, 110, "docs.formField.nickPh"))("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(60, 112, "docs.formField.exStateT"))("desc", \u0275\u0275pipeBind1(61, 114, "docs.formField.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(65, 116, "docs.formField.emailLabel"))("required", true)("error", \u0275\u0275pipeBind1(66, 118, "docs.formField.errEmail"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "abc");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(70, 120, "docs.formField.codeLabel"))("help", \u0275\u0275pipeBind1(71, 122, "docs.formField.codeHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "NV-001");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(75, 124, "docs.formField.emailLabel"))("help", \u0275\u0275pipeBind1(76, 126, "docs.formField.okHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "ten@congty.vn");
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(79, 128, "docs.formField.exControlsT"))("desc", \u0275\u0275pipeBind1(80, 130, "docs.formField.exControlsD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(84, 132, "docs.formField.deptLabel"))("required", true)("help", \u0275\u0275pipeBind1(85, 134, "docs.formField.deptHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("options", ctx.departments)("placeholder", \u0275\u0275pipeBind1(87, 136, "docs.formField.deptPh"))("ngModel", null);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(89, 138, "docs.formField.startLabel"))("required", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", null);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(92, 140, "docs.formField.notifyLabel"))("help", \u0275\u0275pipeBind1(93, 142, "docs.formField.notifyHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", true);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(96, 144, "docs.formField.noteLabel"))("optional", true)("optionalLabel", \u0275\u0275pipeBind1(97, 146, "docs.formField.optionalLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(99, 148, "docs.formField.notePh"))("ngModel", "");
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmFormField, HrmInput, HrmSelect, HrmTextarea, HrmSwitch, HrmDatePicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocFormField, [{
    type: Component,
    args: [{
      selector: "sg-doc-form-field",
      imports: [FormsModule, TranslateModule, HrmFormField, HrmInput, HrmSelect, HrmTextarea, HrmSwitch, HrmDatePicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.formField.title' | translate" [desc]="'docs.formField.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:360px">
          <hrm-form-field [label]="'docs.formField.ovLabel' | translate" [required]="true" [help]="'docs.formField.ovHelp' | translate">
            <hrm-input htmlType="email" placeholder="ten@congty.vn" [(ngModel)]="email" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.formField.purpose' | translate"
          [when]="when"
          [behavior]="'docs.formField.behavior' | translate"
          [avoid]="'docs.formField.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.formField.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.formField.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.formField.do3' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.formField.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.formField.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.formField.exDescT' | translate"
          [desc]="'docs.formField.exDescD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.pwLabel' | translate" [help]="'docs.formField.pwHelp' | translate">
                <hrm-input htmlType="password" [ngModel]="''" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.personalEmailLabel' | translate" [help]="'docs.formField.personalEmailHelp' | translate">
                <hrm-input htmlType="email" placeholder="ten@gmail.com" [ngModel]="''" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.formField.exReqT' | translate"
          [desc]="'docs.formField.exReqD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.nameLabel' | translate" [required]="true">
                <hrm-input placeholder="Nguy\u1EC5n V\u0103n A" [ngModel]="''" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.nickLabel' | translate" [optional]="true" [optionalLabel]="'docs.formField.optionalLabel' | translate">
                <hrm-input [placeholder]="'docs.formField.nickPh' | translate" [ngModel]="''" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.formField.exStateT' | translate"
          [desc]="'docs.formField.exStateD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.emailLabel' | translate" [required]="true" [error]="'docs.formField.errEmail' | translate">
                <hrm-input status="error" [ngModel]="'abc'" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.codeLabel' | translate" [help]="'docs.formField.codeHelp' | translate">
                <hrm-input status="warning" [ngModel]="'NV-001'" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.formField.emailLabel' | translate" [help]="'docs.formField.okHelp' | translate">
                <hrm-input status="success" [ngModel]="'ten@congty.vn'" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.formField.exControlsT' | translate"
          [desc]="'docs.formField.exControlsD' | translate">
          <sg-row>
            <div style="width:100%;max-width:380px">
              <hrm-form-field [label]="'docs.formField.deptLabel' | translate" [required]="true" [help]="'docs.formField.deptHelp' | translate">
                <hrm-select [options]="departments" [placeholder]="'docs.formField.deptPh' | translate" [ngModel]="null" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.formField.startLabel' | translate" [required]="true">
                <hrm-date-picker [ngModel]="null" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.formField.notifyLabel' | translate" [help]="'docs.formField.notifyHelp' | translate">
                <hrm-switch [ngModel]="true" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.formField.noteLabel' | translate" [optional]="true" [optionalLabel]="'docs.formField.optionalLabel' | translate">
                <hrm-textarea [placeholder]="'docs.formField.notePh' | translate" [ngModel]="''" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocFormField, { className: "SgDocFormField", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/form-field.ts", lineNumber: 117 });
})();
export {
  SgDocFormField
};
//# sourceMappingURL=chunk-PE644ZOH.js.map
