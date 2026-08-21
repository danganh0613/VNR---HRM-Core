import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
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
  Lock,
  Mail,
  Search,
  User
} from "./chunk-LRW4ARR4.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/input.ts
var SgDocInput = class _SgDocInput {
  constructor() {
    this.search = Search;
    this.mail = Mail;
    this.lock = Lock;
    this.user = User;
    this.q = "";
    this.q2 = "";
    this.name = "";
    this.when = [
      "docs.input.when1",
      "docs.input.when2",
      "docs.input.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocInput)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocInput, selectors: [["sg-doc-input"]], decls: 98, vars: 149, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "label", "help"], [3, "ngModelChange", "prefixIcon", "clearable", "clearLabel", "placeholder", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "220px"], ["htmlType", "email", 3, "prefixIcon", "placeholder", "ngModel"], ["htmlType", "password", 3, "prefixIcon", "placeholder", "ngModel"], [3, "prefixIcon", "placeholder", "ngModel"], [2, "width", "300px"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "180px"], ["size", "sm", 3, "placeholder", "ngModel"], ["size", "md", 3, "placeholder", "ngModel"], ["size", "lg", 3, "placeholder", "ngModel"], [2, "width", "240px"], ["label", "Email", 3, "required", "error"], ["status", "error", 3, "ngModel"], ["status", "warning", 3, "ngModel"], ["status", "success", 3, "ngModel"], [2, "width", "100%", "max-width", "360px"], [3, "label", "required", "help"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "label", "required"], ["htmlType", "password", 3, "ngModel"], [3, "label"], [3, "disabled", "ngModel"]], template: function SgDocInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-input", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInput_Template_hrm_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.q, $event) || (ctx.q = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "sg-use", 6);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7)(17, "sg-do");
        \u0275\u0275element(18, "span", 8);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275element(21, "span", 8);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275element(24, "span", 8);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275element(27, "span", 8);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 9)(30, "sg-example", 10);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row")(34, "div", 11);
        \u0275\u0275element(35, "hrm-input", 12);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 11);
        \u0275\u0275element(38, "hrm-input", 13);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 11);
        \u0275\u0275element(41, "hrm-input", 14);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "sg-example", 10);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "div", 15)(48, "hrm-input", 4);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInput_Template_hrm_input_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.q2, $event) || (ctx.q2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "sg-example", 10);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "sg-row", 16)(55, "div", 17);
        \u0275\u0275element(56, "hrm-input", 18);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 17);
        \u0275\u0275element(59, "hrm-input", 19);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 17);
        \u0275\u0275element(62, "hrm-input", 20);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "sg-example", 10);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementStart(67, "sg-row")(68, "div", 21)(69, "hrm-form-field", 22);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275element(71, "hrm-input", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 21)(73, "hrm-form-field", 3);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275element(76, "hrm-input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 21)(78, "hrm-form-field", 3);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275element(81, "hrm-input", 25);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "sg-example", 10);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementStart(85, "sg-row")(86, "div", 26)(87, "hrm-form-field", 27);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementStart(90, "hrm-input", 28);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocInput_Template_hrm_input_ngModelChange_90_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "hrm-form-field", 29);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275element(94, "hrm-input", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "hrm-form-field", 31);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275element(97, "hrm-input", 32);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 67, "docs.input.title"))("desc", \u0275\u0275pipeBind1(2, 69, "docs.input.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 71, "docs.input.ovLabel"))("help", \u0275\u0275pipeBind1(7, 73, "docs.input.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("prefixIcon", ctx.search)("clearable", true)("clearLabel", \u0275\u0275pipeBind1(9, 75, "docs.input.clear"))("placeholder", \u0275\u0275pipeBind1(10, 77, "docs.input.ovPh"));
        \u0275\u0275twoWayProperty("ngModel", ctx.q);
        \u0275\u0275advance(4);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(13, 79, "docs.input.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(14, 81, "docs.input.behavior"))("avoid", \u0275\u0275pipeBind1(15, 83, "docs.input.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(19, 85, "docs.input.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 87, "docs.input.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 89, "docs.input.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(28, 91, "docs.input.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 93, "docs.input.exIconT"))("desc", \u0275\u0275pipeBind1(32, 95, "docs.input.exIconD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("prefixIcon", ctx.mail)("placeholder", \u0275\u0275pipeBind1(36, 97, "docs.input.phEmail"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("prefixIcon", ctx.lock)("placeholder", \u0275\u0275pipeBind1(39, 99, "docs.input.phPassword"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("prefixIcon", ctx.user)("placeholder", \u0275\u0275pipeBind1(42, 101, "docs.input.phUsername"))("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 103, "docs.input.exSearchT"))("desc", \u0275\u0275pipeBind1(45, 105, "docs.input.exSearchD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("prefixIcon", ctx.search)("clearable", true)("clearLabel", \u0275\u0275pipeBind1(49, 107, "docs.input.clear"))("placeholder", \u0275\u0275pipeBind1(50, 109, "docs.input.phSearch"));
        \u0275\u0275twoWayProperty("ngModel", ctx.q2);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(52, 111, "docs.input.exSizeT"))("desc", \u0275\u0275pipeBind1(53, 113, "docs.input.exSizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 115, "docs.input.small"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 117, "docs.input.medium"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(63, 119, "docs.input.large"))("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(65, 121, "docs.input.exStateT"))("desc", \u0275\u0275pipeBind1(66, 123, "docs.input.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("required", true)("error", \u0275\u0275pipeBind1(70, 125, "docs.input.errEmail"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", "abc");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(74, 127, "docs.input.taxCode"))("help", \u0275\u0275pipeBind1(75, 129, "docs.input.helpTax"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "12345");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(79, 131, "docs.input.username"))("help", \u0275\u0275pipeBind1(80, 133, "docs.input.helpUsername"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "nguyenvana");
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(83, 135, "docs.input.exTypeT"))("desc", \u0275\u0275pipeBind1(84, 137, "docs.input.exTypeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(88, 139, "docs.input.fullName"))("required", true)("help", \u0275\u0275pipeBind1(89, 141, "docs.input.helpFullName"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.name);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(91, 143, "docs.input.ovPh"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(93, 145, "docs.input.password"))("required", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", "secret");
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(96, 147, "docs.input.empCode"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", true)("ngModel", "NV-000-001");
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmInput, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocInput, [{
    type: Component,
    args: [{
      selector: "sg-doc-input",
      imports: [FormsModule, TranslateModule, HrmInput, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.input.title' | translate" [desc]="'docs.input.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-form-field [label]="'docs.input.ovLabel' | translate" [help]="'docs.input.ovHelp' | translate">
            <hrm-input [prefixIcon]="search" [clearable]="true" [clearLabel]="'docs.input.clear' | translate" [placeholder]="'docs.input.ovPh' | translate" [(ngModel)]="q" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.input.purpose' | translate"
          [when]="when"
          [behavior]="'docs.input.behavior' | translate"
          [avoid]="'docs.input.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.input.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.input.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.input.do3' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.input.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.input.exIconT' | translate"
          [desc]="'docs.input.exIconD' | translate">
          <sg-row>
            <div style="width:220px"><hrm-input [prefixIcon]="mail" htmlType="email" [placeholder]="'docs.input.phEmail' | translate" [ngModel]="''" /></div>
            <div style="width:220px"><hrm-input [prefixIcon]="lock" htmlType="password" [placeholder]="'docs.input.phPassword' | translate" [ngModel]="''" /></div>
            <div style="width:220px"><hrm-input [prefixIcon]="user" [placeholder]="'docs.input.phUsername' | translate" [ngModel]="''" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.input.exSearchT' | translate"
          [desc]="'docs.input.exSearchD' | translate">
          <sg-row>
            <div style="width:300px"><hrm-input [prefixIcon]="search" [clearable]="true" [clearLabel]="'docs.input.clear' | translate" [placeholder]="'docs.input.phSearch' | translate" [(ngModel)]="q2" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.input.exSizeT' | translate"
          [desc]="'docs.input.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:180px"><hrm-input size="sm" [placeholder]="'docs.input.small' | translate" [ngModel]="''" /></div>
            <div style="width:180px"><hrm-input size="md" [placeholder]="'docs.input.medium' | translate" [ngModel]="''" /></div>
            <div style="width:180px"><hrm-input size="lg" [placeholder]="'docs.input.large' | translate" [ngModel]="''" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.input.exStateT' | translate"
          [desc]="'docs.input.exStateD' | translate">
          <sg-row>
            <div style="width:240px">
              <hrm-form-field label="Email" [required]="true" [error]="'docs.input.errEmail' | translate">
                <hrm-input status="error" [ngModel]="'abc'" />
              </hrm-form-field>
            </div>
            <div style="width:240px">
              <hrm-form-field [label]="'docs.input.taxCode' | translate" [help]="'docs.input.helpTax' | translate">
                <hrm-input status="warning" [ngModel]="'12345'" />
              </hrm-form-field>
            </div>
            <div style="width:240px">
              <hrm-form-field [label]="'docs.input.username' | translate" [help]="'docs.input.helpUsername' | translate">
                <hrm-input status="success" [ngModel]="'nguyenvana'" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.input.exTypeT' | translate"
          [desc]="'docs.input.exTypeD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <hrm-form-field [label]="'docs.input.fullName' | translate" [required]="true" [help]="'docs.input.helpFullName' | translate">
                <hrm-input [(ngModel)]="name" [placeholder]="'docs.input.ovPh' | translate" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.input.password' | translate" [required]="true">
                <hrm-input htmlType="password" [ngModel]="'secret'" />
              </hrm-form-field>
              <hrm-form-field [label]="'docs.input.empCode' | translate">
                <hrm-input [disabled]="true" [ngModel]="'NV-000-001'" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocInput, { className: "SgDocInput", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/input.ts", lineNumber: 107 });
})();
export {
  SgDocInput
};
//# sourceMappingURL=chunk-3O5JIDBB.js.map
