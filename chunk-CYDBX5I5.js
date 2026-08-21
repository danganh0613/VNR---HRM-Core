import {
  HrmCard
} from "./chunk-XHS464VI.js";
import "./chunk-CQQHL6Z5.js";
import {
  HrmEmpty
} from "./chunk-OSPNOUAS.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
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
  FileText,
  Inbox,
  TablerIconComponent,
  Users
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/empty.ts
function SgDocEmpty_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-button", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.empty.createOrder"));
  }
}
function SgDocEmpty_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.users)("size", 48);
  }
}
function SgDocEmpty_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.file)("size", 48);
  }
}
function SgDocEmpty_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.inbox)("size", 48);
  }
}
function SgDocEmpty_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-button", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.empty.addEmp"));
  }
}
var SgDocEmpty = class _SgDocEmpty {
  constructor() {
    this.users = Users;
    this.file = FileText;
    this.inbox = Inbox;
    this.when = [
      "docs.empty.when1",
      "docs.empty.when2",
      "docs.empty.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocEmpty_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocEmpty)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocEmpty, selectors: [["sg-doc-empty"]], decls: 85, vars: 96, consts: [["createOrderAct", ""], ["usersImg", ""], ["fileImg", ""], ["inboxImg", ""], ["addEmpAct", ""], ["category", "Content", 3, "title", "desc"], ["sgOverview", ""], [2, "max-width", "360px"], [3, "description"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "320px"], ["label", "no-data \xB7 no-results \xB7 error \xB7 first-use"], [2, "width", "220px"], ["preset", "no-data", 3, "description"], ["preset", "no-results", 3, "description"], ["preset", "error", 3, "description"], ["preset", "first-use", 3, "description"], [2, "width", "340px"], [3, "description", "action"], [3, "image", "description"], [2, "width", "400px"], [3, "title"], [3, "image", "description", "action"], ["variant", "primary"], [1, "sg-empty-icon", 3, "icon", "size"]], template: function SgDocEmpty_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 5);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 6)(4, "div", 7);
        \u0275\u0275element(5, "hrm-empty", 8);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 9);
        \u0275\u0275element(8, "sg-use", 10);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "sg-example", 13);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "div", 14);
        \u0275\u0275element(31, "hrm-empty", 8);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "sg-example", 13);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row", 15)(37, "div", 16);
        \u0275\u0275element(38, "hrm-empty", 17);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 16);
        \u0275\u0275element(41, "hrm-empty", 18);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 16);
        \u0275\u0275element(44, "hrm-empty", 19);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 16);
        \u0275\u0275element(47, "hrm-empty", 20);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "sg-example", 13);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row")(53, "div", 21);
        \u0275\u0275element(54, "hrm-empty", 22);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275template(56, SgDocEmpty_ng_template_56_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "sg-example", 13);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementStart(61, "sg-row")(62, "div", 14);
        \u0275\u0275element(63, "hrm-empty", 23);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275template(65, SgDocEmpty_ng_template_65_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 14);
        \u0275\u0275element(68, "hrm-empty", 23);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275template(70, SgDocEmpty_ng_template_70_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "sg-example", 13);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementStart(75, "sg-row")(76, "div", 24)(77, "hrm-card", 25);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275element(79, "hrm-empty", 26);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275template(81, SgDocEmpty_ng_template_81_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(83, SgDocEmpty_ng_template_83_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const createOrderAct_r2 = \u0275\u0275reference(57);
        const usersImg_r3 = \u0275\u0275reference(66);
        const fileImg_r4 = \u0275\u0275reference(71);
        const inboxImg_r5 = \u0275\u0275reference(82);
        const addEmpAct_r6 = \u0275\u0275reference(84);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 36, "docs.empty.title"))("desc", \u0275\u0275pipeBind1(2, 38, "docs.empty.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(6, 40, "docs.empty.ovDesc"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 42, "docs.empty.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 44, "docs.empty.behavior"))("avoid", \u0275\u0275pipeBind1(11, 46, "docs.empty.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 48, "docs.empty.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 50, "docs.empty.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 52, "docs.empty.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 54, "docs.empty.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 56, "docs.empty.ex1T"))("desc", \u0275\u0275pipeBind1(28, 58, "docs.empty.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(32, 60, "docs.empty.ovDesc"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 62, "docs.empty.ex2T"))("desc", \u0275\u0275pipeBind1(35, 64, "docs.empty.ex2D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(39, 66, "docs.empty.ex2NoData"));
        \u0275\u0275advance(3);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(42, 68, "docs.empty.ex2NoResults"));
        \u0275\u0275advance(3);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(45, 70, "docs.empty.ex2Error"));
        \u0275\u0275advance(3);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(48, 72, "docs.empty.ex2FirstUse"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 74, "docs.empty.ex3T"))("desc", \u0275\u0275pipeBind1(51, 76, "docs.empty.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("description", \u0275\u0275pipeBind1(55, 78, "docs.empty.ex3Desc"))("action", createOrderAct_r2);
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(59, 80, "docs.empty.ex4T"))("desc", \u0275\u0275pipeBind1(60, 82, "docs.empty.ex4D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("image", usersImg_r3)("description", \u0275\u0275pipeBind1(64, 84, "docs.empty.ex4Users"));
        \u0275\u0275advance(5);
        \u0275\u0275property("image", fileImg_r4)("description", \u0275\u0275pipeBind1(69, 86, "docs.empty.ex4Contracts"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(73, 88, "docs.empty.ex5T"))("desc", \u0275\u0275pipeBind1(74, 90, "docs.empty.ex5D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(78, 92, "docs.empty.ex5CardTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("image", inboxImg_r5)("description", \u0275\u0275pipeBind1(80, 94, "docs.empty.ex5Desc"))("action", addEmpAct_r6);
      }
    }, dependencies: [TranslateModule, TablerIconComponent, HrmEmpty, HrmButton, HrmCard, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.sg-empty-icon[_ngcontent-%COMP%] {\n  color: var(--icon-secondary, var(--text-sub));\n  display: inline-flex;\n}\n/*# sourceMappingURL=empty.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocEmpty, [{
    type: Component,
    args: [{ selector: "sg-doc-empty", imports: [TranslateModule, TablerIconComponent, HrmEmpty, HrmButton, HrmCard, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Content" [title]="'docs.empty.title' | translate" [desc]="'docs.empty.desc' | translate">

      <div sgOverview>
        <div style="max-width:360px"><hrm-empty [description]="'docs.empty.ovDesc' | translate" /></div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.empty.purpose' | translate"
          [when]="when"
          [behavior]="'docs.empty.behavior' | translate"
          [avoid]="'docs.empty.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.empty.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.empty.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.empty.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.empty.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.empty.ex1T' | translate"
          [desc]="'docs.empty.ex1D' | translate">
          <sg-row>
            <div style="width:320px"><hrm-empty [description]="'docs.empty.ovDesc' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.empty.ex2T' | translate"
          [desc]="'docs.empty.ex2D' | translate">
          <sg-row label="no-data \xB7 no-results \xB7 error \xB7 first-use">
            <div style="width:220px"><hrm-empty preset="no-data" [description]="'docs.empty.ex2NoData' | translate" /></div>
            <div style="width:220px"><hrm-empty preset="no-results" [description]="'docs.empty.ex2NoResults' | translate" /></div>
            <div style="width:220px"><hrm-empty preset="error" [description]="'docs.empty.ex2Error' | translate" /></div>
            <div style="width:220px"><hrm-empty preset="first-use" [description]="'docs.empty.ex2FirstUse' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.empty.ex3T' | translate"
          [desc]="'docs.empty.ex3D' | translate">
          <sg-row>
            <div style="width:340px">
              <hrm-empty [description]="'docs.empty.ex3Desc' | translate" [action]="createOrderAct" />
              <ng-template #createOrderAct>
                <hrm-button variant="primary">{{ 'docs.empty.createOrder' | translate }}</hrm-button>
              </ng-template>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.empty.ex4T' | translate"
          [desc]="'docs.empty.ex4D' | translate">
          <sg-row>
            <div style="width:320px">
              <hrm-empty [image]="usersImg" [description]="'docs.empty.ex4Users' | translate" />
              <ng-template #usersImg><tabler-icon [icon]="$any(users)" [size]="48" class="sg-empty-icon" /></ng-template>
            </div>
            <div style="width:320px">
              <hrm-empty [image]="fileImg" [description]="'docs.empty.ex4Contracts' | translate" />
              <ng-template #fileImg><tabler-icon [icon]="$any(file)" [size]="48" class="sg-empty-icon" /></ng-template>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.empty.ex5T' | translate"
          [desc]="'docs.empty.ex5D' | translate">
          <sg-row>
            <div style="width:400px">
              <hrm-card [title]="'docs.empty.ex5CardTitle' | translate">
                <hrm-empty [image]="inboxImg" [description]="'docs.empty.ex5Desc' | translate" [action]="addEmpAct" />
                <ng-template #inboxImg><tabler-icon [icon]="$any(inbox)" [size]="48" class="sg-empty-icon" /></ng-template>
                <ng-template #addEmpAct><hrm-button variant="primary">{{ 'docs.empty.addEmp' | translate }}</hrm-button></ng-template>
              </hrm-card>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;fdcd0d096dab96f6d30cb88a237ce5db0c96aa571a76e96052cf181847697bd5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/empty.ts */\n.sg-empty-icon {\n  color: var(--icon-secondary, var(--text-sub));\n  display: inline-flex;\n}\n/*# sourceMappingURL=empty.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocEmpty, { className: "SgDocEmpty", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/empty.ts", lineNumber: 96 });
})();
export {
  SgDocEmpty
};
//# sourceMappingURL=chunk-CYDBX5I5.js.map
