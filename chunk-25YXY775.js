import {
  HrmFormField
} from "./chunk-27J25YLX.js";
import {
  HrmTextarea
} from "./chunk-MXHRUBSQ.js";
import "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
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
import {
  MessageCircle,
  Pencil,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/textarea.ts
var SgDocTextarea = class _SgDocTextarea {
  constructor() {
    this.chat = MessageCircle;
    this.pencil = Pencil;
    this.note = "";
    this.bio = "";
    this.msg = "";
    this.memo = "";
    this.draft = "";
    this.draft2 = "";
    this.draft3 = "";
    this.when = [
      "docs.textarea.when1",
      "docs.textarea.when2",
      "docs.textarea.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTextarea_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTextarea)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTextarea, selectors: [["sg-doc-textarea"]], decls: 110, vars: 174, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "420px"], [3, "label", "help"], [2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder", "minRows"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", 3, "ngModelChange", "ngModel", "showCount", "countMax", "placeholder", "minRows"], [2, "width", "280px"], [3, "label", "required"], [2, "width", "100%", 3, "placeholder", "minRows", "ngModel"], [2, "width", "100%", 3, "disabled", "ngModel", "minRows"], [2, "width", "100%", 3, "readonly", "ngModel", "minRows"], [3, "label", "required", "error"], ["status", "error", 2, "width", "100%", 3, "placeholder", "minRows", "ngModel"], ["status", "warning", 2, "width", "100%", 3, "ngModel", "minRows"], ["status", "success", 2, "width", "100%", 3, "ngModel", "minRows"], ["label", "vertical \xB7 both \xB7 none"], [2, "width", "260px"], ["resize", "vertical", 2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder", "minRows"], ["resize", "both", 2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder", "minRows"], ["resize", "none", 2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder", "minRows"], [1, "ta-iconlabel"], [3, "icon", "size"]], template: function SgDocTextarea_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-textarea", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.note, $event) || (ctx.note = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "sg-use", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "sg-do");
        \u0275\u0275element(17, "span", 8);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275element(20, "span", 8);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-do");
        \u0275\u0275element(23, "span", 8);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275element(26, "span", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "sg-example", 10);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 2)(34, "hrm-textarea", 11);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.bio, $event) || (ctx.bio = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "sg-example", 10);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row")(40, "div", 12)(41, "hrm-form-field", 13);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275element(43, "hrm-textarea", 14);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 12)(46, "hrm-form-field", 3);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275element(49, "hrm-textarea", 15);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 12)(52, "hrm-form-field", 3);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275element(55, "hrm-textarea", 16);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "sg-example", 10);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "sg-row")(61, "div", 12)(62, "hrm-form-field", 17);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275element(65, "hrm-textarea", 18);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 12)(68, "hrm-form-field", 3);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275element(71, "hrm-textarea", 19);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 12)(74, "hrm-form-field", 3);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275element(77, "hrm-textarea", 20);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "sg-example", 10);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementStart(82, "sg-row", 21)(83, "div", 22)(84, "hrm-textarea", 23);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_84_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 22)(87, "hrm-textarea", 24);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_87_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.draft2, $event) || (ctx.draft2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 22)(90, "hrm-textarea", 25);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_90_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.draft3, $event) || (ctx.draft3 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(92, "sg-example", 10);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementStart(95, "sg-row")(96, "div", 12)(97, "label", 26);
        \u0275\u0275element(98, "tabler-icon", 27);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "hrm-textarea", 4);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_101_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.msg, $event) || (ctx.msg = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 12)(104, "label", 26);
        \u0275\u0275element(105, "tabler-icon", 27);
        \u0275\u0275text(106);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "hrm-textarea", 4);
        \u0275\u0275pipe(109, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocTextarea_Template_hrm_textarea_ngModelChange_108_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.memo, $event) || (ctx.memo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 80, "docs.textarea.title"))("desc", \u0275\u0275pipeBind1(2, 82, "docs.textarea.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 84, "docs.textarea.note"))("help", \u0275\u0275pipeBind1(7, 86, "docs.textarea.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.note);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 88, "docs.textarea.phNote"))("minRows", 3);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 90, "docs.textarea.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 92, "docs.textarea.behavior"))("avoid", \u0275\u0275pipeBind1(14, 94, "docs.textarea.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 96, "docs.textarea.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(21, 98, "docs.textarea.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(24, 100, "docs.textarea.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(27, 102, "docs.textarea.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 104, "docs.textarea.exCountT"))("desc", \u0275\u0275pipeBind1(31, 106, "docs.textarea.exCountD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.bio);
        \u0275\u0275property("showCount", true)("countMax", 120)("placeholder", \u0275\u0275pipeBind1(35, 108, "docs.textarea.phBio"))("minRows", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 110, "docs.textarea.exStateT"))("desc", \u0275\u0275pipeBind1(38, 112, "docs.textarea.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 114, "docs.textarea.leaveReason"))("required", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 116, "docs.textarea.phReason"))("minRows", 3)("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(47, 118, "docs.textarea.systemNote"))("help", \u0275\u0275pipeBind1(48, 120, "docs.textarea.helpReadonly"));
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", true)("ngModel", \u0275\u0275pipeBind1(50, 122, "docs.textarea.sampleApproved"))("minRows", 3);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(53, 124, "docs.textarea.templateContent"))("help", \u0275\u0275pipeBind1(54, 126, "docs.textarea.helpViewOnly"));
        \u0275\u0275advance(3);
        \u0275\u0275property("readonly", true)("ngModel", \u0275\u0275pipeBind1(56, 128, "docs.textarea.sampleGreeting"))("minRows", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 130, "docs.textarea.exValidT"))("desc", \u0275\u0275pipeBind1(59, 132, "docs.textarea.exValidD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 134, "docs.textarea.rejectReason"))("required", true)("error", \u0275\u0275pipeBind1(64, 136, "docs.textarea.errReject"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(66, 138, "docs.textarea.phReason"))("minRows", 3)("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(69, 140, "docs.textarea.comment"))("help", \u0275\u0275pipeBind1(70, 142, "docs.textarea.helpShort"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(72, 144, "docs.textarea.sampleOk"))("minRows", 3);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(75, 146, "docs.textarea.leaveReason"))("help", \u0275\u0275pipeBind1(76, 148, "docs.textarea.helpValid"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(78, 150, "docs.textarea.sampleLeave"))("minRows", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(80, 152, "docs.textarea.exResizeT"))("desc", \u0275\u0275pipeBind1(81, 154, "docs.textarea.exResizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.draft);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(85, 156, "docs.textarea.phResizeV"))("minRows", 3);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.draft2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(88, 158, "docs.textarea.phResizeBoth"))("minRows", 3);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.draft3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(91, 160, "docs.textarea.phResizeNone"))("minRows", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(93, 162, "docs.textarea.exIconT"))("desc", \u0275\u0275pipeBind1(94, 164, "docs.textarea.exIconD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("icon", ctx.chat)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 166, "docs.textarea.message"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.msg);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(102, 168, "docs.textarea.phMessage"))("minRows", 3);
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.pencil)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(107, 170, "docs.textarea.note"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.memo);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(109, 172, "docs.textarea.phNote"))("minRows", 3);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, TablerIconComponent, HrmTextarea, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.ta-iconlabel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: var(--space-1-5, 6px);\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.ta-iconlabel[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  color: var(--icon-secondary, var(--text-sub));\n}\n/*# sourceMappingURL=textarea.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTextarea, [{
    type: Component,
    args: [{ selector: "sg-doc-textarea", imports: [FormsModule, TranslateModule, TablerIconComponent, HrmTextarea, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Data Input" [title]="'docs.textarea.title' | translate" [desc]="'docs.textarea.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:420px">
          <hrm-form-field [label]="'docs.textarea.note' | translate" [help]="'docs.textarea.ovHelp' | translate">
            <hrm-textarea [(ngModel)]="note" [placeholder]="'docs.textarea.phNote' | translate" [minRows]="3" style="width:100%" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.textarea.purpose' | translate"
          [when]="when"
          [behavior]="'docs.textarea.behavior' | translate"
          [avoid]="'docs.textarea.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.textarea.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.textarea.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.textarea.do3' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.textarea.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.textarea.exCountT' | translate"
          [desc]="'docs.textarea.exCountD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-textarea [(ngModel)]="bio" [showCount]="true" [countMax]="120"
                [placeholder]="'docs.textarea.phBio' | translate" [minRows]="3" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.textarea.exStateT' | translate"
          [desc]="'docs.textarea.exStateD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.leaveReason' | translate" [required]="true">
                <hrm-textarea [placeholder]="'docs.textarea.phReason' | translate" [minRows]="3" style="width:100%" [ngModel]="''" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.systemNote' | translate" [help]="'docs.textarea.helpReadonly' | translate">
                <hrm-textarea [disabled]="true" [ngModel]="'docs.textarea.sampleApproved' | translate" [minRows]="3" style="width:100%" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.templateContent' | translate" [help]="'docs.textarea.helpViewOnly' | translate">
                <hrm-textarea [readonly]="true" [ngModel]="'docs.textarea.sampleGreeting' | translate" [minRows]="3" style="width:100%" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.textarea.exValidT' | translate"
          [desc]="'docs.textarea.exValidD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.rejectReason' | translate" [required]="true" [error]="'docs.textarea.errReject' | translate">
                <hrm-textarea status="error" [placeholder]="'docs.textarea.phReason' | translate" [minRows]="3" style="width:100%" [ngModel]="''" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.comment' | translate" [help]="'docs.textarea.helpShort' | translate">
                <hrm-textarea status="warning" [ngModel]="'docs.textarea.sampleOk' | translate" [minRows]="3" style="width:100%" />
              </hrm-form-field>
            </div>
            <div style="width:280px">
              <hrm-form-field [label]="'docs.textarea.leaveReason' | translate" [help]="'docs.textarea.helpValid' | translate">
                <hrm-textarea status="success" [ngModel]="'docs.textarea.sampleLeave' | translate" [minRows]="3" style="width:100%" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.textarea.exResizeT' | translate"
          [desc]="'docs.textarea.exResizeD' | translate">
          <sg-row label="vertical \xB7 both \xB7 none">
            <div style="width:260px">
              <hrm-textarea [(ngModel)]="draft" resize="vertical" [placeholder]="'docs.textarea.phResizeV' | translate" [minRows]="3" style="width:100%" />
            </div>
            <div style="width:260px">
              <hrm-textarea [(ngModel)]="draft2" resize="both" [placeholder]="'docs.textarea.phResizeBoth' | translate" [minRows]="3" style="width:100%" />
            </div>
            <div style="width:260px">
              <hrm-textarea [(ngModel)]="draft3" resize="none" [placeholder]="'docs.textarea.phResizeNone' | translate" [minRows]="3" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.textarea.exIconT' | translate"
          [desc]="'docs.textarea.exIconD' | translate">
          <sg-row>
            <div style="width:280px">
              <label class="ta-iconlabel"><tabler-icon [icon]="$any(chat)" [size]="16" /> {{ 'docs.textarea.message' | translate }}</label>
              <hrm-textarea [(ngModel)]="msg" [placeholder]="'docs.textarea.phMessage' | translate" [minRows]="3" style="width:100%" />
            </div>
            <div style="width:280px">
              <label class="ta-iconlabel"><tabler-icon [icon]="$any(pencil)" [size]="16" /> {{ 'docs.textarea.note' | translate }}</label>
              <hrm-textarea [(ngModel)]="memo" [placeholder]="'docs.textarea.phNote' | translate" [minRows]="3" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;cf5b42346872b191137017d07b4646e75c34d9a413cbfc39badc8fc405958c5b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/textarea.ts */\n.ta-iconlabel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: var(--space-1-5, 6px);\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.ta-iconlabel tabler-icon {\n  color: var(--icon-secondary, var(--text-sub));\n}\n/*# sourceMappingURL=textarea.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTextarea, { className: "SgDocTextarea", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/textarea.ts", lineNumber: 133 });
})();
export {
  SgDocTextarea
};
//# sourceMappingURL=chunk-25YXY775.js.map
