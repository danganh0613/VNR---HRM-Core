import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
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
import "./chunk-7IBNPHRP.js";
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/select.ts
var SgDocSelect = class _SgDocSelect {
  constructor() {
    this.dept = null;
    this.cleared = "hr";
    this.role = null;
    this.depts = [
      { label: "Nh\xE2n s\u1EF1", value: "hr" },
      { label: "K\u1EF9 thu\u1EADt", value: "it" },
      { label: "T\xE0i ch\xEDnh", value: "fin" },
      { label: "Kinh doanh", value: "sales" }
    ];
    this.branches = [
      { label: "H\xE0 N\u1ED9i", value: "hn" },
      { label: "TP. H\u1ED3 Ch\xED Minh", value: "hcm" },
      { label: "\u0110\xE0 N\u1EB5ng", value: "dn" }
    ];
    this.roles = [
      { label: "Nh\xE2n vi\xEAn", value: "staff" },
      { label: "Tr\u01B0\u1EDFng nh\xF3m", value: "lead" },
      { label: "Qu\u1EA3n l\xFD", value: "manager" }
    ];
    this.roleGroups = [
      { label: "Kh\u1ED1i Nh\xE2n s\u1EF1", options: [
        { label: "Chuy\xEAn vi\xEAn tuy\u1EC3n d\u1EE5ng", value: "recruiter" },
        { label: "Chuy\xEAn vi\xEAn C&B", value: "cb" }
      ] },
      { label: "Kh\u1ED1i K\u1EF9 thu\u1EADt", options: [
        { label: "L\u1EADp tr\xECnh vi\xEAn", value: "dev" },
        { label: "Ki\u1EC3m th\u1EED", value: "qa" },
        { label: "Tr\u01B0\u1EDFng nh\xF3m k\u1EF9 thu\u1EADt", value: "techlead" }
      ] },
      { label: "Kh\u1ED1i Kinh doanh", options: [
        { label: "Nh\xE2n vi\xEAn kinh doanh", value: "sale" },
        { label: "Tr\u01B0\u1EDFng ph\xF2ng kinh doanh", value: "salesmanager" }
      ] }
    ];
    this.when = [
      "docs.select.when1",
      "docs.select.when2",
      "docs.select.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSelect)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSelect, selectors: [["sg-doc-select"]], decls: 63, vars: 95, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "label", "help"], [3, "ngModelChange", "ngModel", "options", "placeholder"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "260px"], [3, "ngModelChange", "ngModel", "options", "allowClear", "placeholder"], [2, "width", "280px"], [3, "ngModelChange", "ngModel", "groups", "placeholder"], [3, "label", "required", "error"], ["status", "error", 3, "options", "placeholder"], ["status", "warning", 3, "ngModel", "options"], ["status", "success", 3, "ngModel", "options"]], template: function SgDocSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-select", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSelect_Template_hrm_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dept, $event) || (ctx.dept = $event);
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
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275element(20, "span", 8);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-do");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "sg-example", 10);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 11)(34, "hrm-select", 12);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSelect_Template_hrm_select_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.cleared, $event) || (ctx.cleared = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "sg-example", 10);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row")(40, "div", 13)(41, "hrm-select", 14);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSelect_Template_hrm_select_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "sg-example", 10);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "div", 11)(48, "hrm-form-field", 15);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275element(51, "hrm-select", 16);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 11)(54, "hrm-form-field", 3);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "hrm-select", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 11)(59, "hrm-form-field", 3);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275element(62, "hrm-select", 18);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 41, "docs.select.title"))("desc", \u0275\u0275pipeBind1(2, 43, "docs.select.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 45, "docs.select.ovLabel"))("help", \u0275\u0275pipeBind1(7, 47, "docs.select.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.dept);
        \u0275\u0275property("options", ctx.depts)("placeholder", \u0275\u0275pipeBind1(9, 49, "docs.select.ovPh"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 51, "docs.select.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 53, "docs.select.behavior"))("avoid", \u0275\u0275pipeBind1(14, 55, "docs.select.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 57, "docs.select.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(21, 59, "docs.select.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 61, "docs.select.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 63, "docs.select.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 65, "docs.select.exClearT"))("desc", \u0275\u0275pipeBind1(31, 67, "docs.select.exClearD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.cleared);
        \u0275\u0275property("options", ctx.depts)("allowClear", true)("placeholder", \u0275\u0275pipeBind1(35, 69, "docs.select.ovPh"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 71, "docs.select.exGroupT"))("desc", \u0275\u0275pipeBind1(38, 73, "docs.select.exGroupD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.role);
        \u0275\u0275property("groups", ctx.roleGroups)("placeholder", \u0275\u0275pipeBind1(42, 75, "docs.select.rolePh"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 77, "docs.select.exStateT"))("desc", \u0275\u0275pipeBind1(45, 79, "docs.select.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 81, "docs.select.ovLabel"))("required", true)("error", \u0275\u0275pipeBind1(50, 83, "docs.select.errDept"));
        \u0275\u0275advance(3);
        \u0275\u0275property("options", ctx.depts)("placeholder", \u0275\u0275pipeBind1(52, 85, "docs.select.ovPh"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(55, 87, "docs.select.branchLabel"))("help", \u0275\u0275pipeBind1(56, 89, "docs.select.branchHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "hcm")("options", ctx.branches);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(60, 91, "docs.select.roleLabel"))("help", \u0275\u0275pipeBind1(61, 93, "docs.select.roleHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "staff")("options", ctx.roles);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmSelect, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSelect, [{
    type: Component,
    args: [{
      selector: "sg-doc-select",
      imports: [FormsModule, TranslateModule, HrmSelect, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.select.title' | translate" [desc]="'docs.select.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-form-field [label]="'docs.select.ovLabel' | translate" [help]="'docs.select.ovHelp' | translate">
            <hrm-select [(ngModel)]="dept" [options]="depts" [placeholder]="'docs.select.ovPh' | translate" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.select.purpose' | translate"
          [when]="when"
          [behavior]="'docs.select.behavior' | translate"
          [avoid]="'docs.select.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.select.do1' | translate }}</sg-do>
        <sg-do><span [innerHTML]="'docs.select.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.select.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.select.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.select.exClearT' | translate"
          [desc]="'docs.select.exClearD' | translate">
          <sg-row>
            <div style="width:260px">
              <hrm-select [(ngModel)]="cleared" [options]="depts" [allowClear]="true" [placeholder]="'docs.select.ovPh' | translate" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.select.exGroupT' | translate"
          [desc]="'docs.select.exGroupD' | translate">
          <sg-row>
            <div style="width:280px">
              <hrm-select [(ngModel)]="role" [groups]="roleGroups" [placeholder]="'docs.select.rolePh' | translate" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.select.exStateT' | translate"
          [desc]="'docs.select.exStateD' | translate">
          <sg-row>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.select.ovLabel' | translate" [required]="true" [error]="'docs.select.errDept' | translate">
                <hrm-select status="error" [options]="depts" [placeholder]="'docs.select.ovPh' | translate" />
              </hrm-form-field>
            </div>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.select.branchLabel' | translate" [help]="'docs.select.branchHelp' | translate">
                <hrm-select status="warning" [ngModel]="'hcm'" [options]="branches" />
              </hrm-form-field>
            </div>
            <div style="width:260px">
              <hrm-form-field [label]="'docs.select.roleLabel' | translate" [help]="'docs.select.roleHelp' | translate">
                <hrm-select status="success" [ngModel]="'staff'" [options]="roles" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSelect, { className: "SgDocSelect", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/select.ts", lineNumber: 82 });
})();
export {
  SgDocSelect
};
//# sourceMappingURL=chunk-2CQEWNY6.js.map
