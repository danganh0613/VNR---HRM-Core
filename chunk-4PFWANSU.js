import {
  HrmBreadcrumb
} from "./chunk-H3ARSMO3.js";
import "./chunk-KGPHHG27.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  Folder,
  Home,
  Users
} from "./chunk-QL2Z65KF.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/breadcrumb.ts
var SgDocBreadcrumb = class _SgDocBreadcrumb {
  constructor() {
    this.t = inject(TranslateService);
    this.home = Home;
    this.users = Users;
    this.folder = Folder;
    this.when = [
      "docs.breadcrumb.when1",
      "docs.breadcrumb.when2",
      "docs.breadcrumb.when3"
    ];
  }
  get basic() {
    return [
      { title: this.t.instant("docs.breadcrumb.crHome"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crPeople"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crEmpList") }
    ];
  }
  get withIcons() {
    return [
      { title: this.t.instant("docs.breadcrumb.crHome"), link: "/", icon: this.home },
      { title: this.t.instant("docs.breadcrumb.crPeople"), link: "/", icon: this.users },
      { title: this.t.instant("docs.breadcrumb.crEmpProfile"), icon: this.folder }
    ];
  }
  get deep() {
    return [
      { title: this.t.instant("docs.breadcrumb.crHome"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crOrg"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crBranchHN"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crDeptEng"), link: "/" },
      { title: this.t.instant("docs.breadcrumb.crPersonName") }
    ];
  }
  static {
    this.\u0275fac = function SgDocBreadcrumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocBreadcrumb)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocBreadcrumb, selectors: [["sg-doc-breadcrumb"]], decls: 49, vars: 62, consts: [["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], [3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["label", "/ \xB7 \u203A \xB7 \u2022"], ["separator", "\u203A", 3, "items"], ["separator", "\u2022", 3, "items"]], template: function SgDocBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275element(4, "hrm-breadcrumb", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "sg-use", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "sg-do");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "sg-do");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-dont");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-dont");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 6)(27, "sg-example", 7);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "sg-row");
        \u0275\u0275element(31, "hrm-breadcrumb", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "sg-example", 7);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "sg-row");
        \u0275\u0275element(36, "hrm-breadcrumb", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "sg-example", 7);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row", 8);
        \u0275\u0275element(41, "hrm-breadcrumb", 2)(42, "hrm-breadcrumb", 9)(43, "hrm-breadcrumb", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "sg-example", 7);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "sg-row");
        \u0275\u0275element(48, "hrm-breadcrumb", 2);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 26, "docs.breadcrumb.title"))("desc", \u0275\u0275pipeBind1(2, 28, "docs.breadcrumb.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.basic);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(7, 30, "docs.breadcrumb.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(8, 32, "docs.breadcrumb.behavior"))("avoid", \u0275\u0275pipeBind1(9, 34, "docs.breadcrumb.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 36, "docs.breadcrumb.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 38, "docs.breadcrumb.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 40, "docs.breadcrumb.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 42, "docs.breadcrumb.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 44, "docs.breadcrumb.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(28, 46, "docs.breadcrumb.exBasicT"))("desc", \u0275\u0275pipeBind1(29, 48, "docs.breadcrumb.exBasicD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 50, "docs.breadcrumb.exIconsT"))("desc", \u0275\u0275pipeBind1(34, 52, "docs.breadcrumb.exIconsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.withIcons);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 54, "docs.breadcrumb.exSepT"))("desc", \u0275\u0275pipeBind1(39, 56, "docs.breadcrumb.exSepD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(45, 58, "docs.breadcrumb.exDeepT"))("desc", \u0275\u0275pipeBind1(46, 60, "docs.breadcrumb.exDeepD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.deep);
      }
    }, dependencies: [TranslateModule, HrmBreadcrumb, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocBreadcrumb, [{
    type: Component,
    args: [{
      selector: "sg-doc-breadcrumb",
      imports: [TranslateModule, HrmBreadcrumb, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.breadcrumb.title' | translate" [desc]="'docs.breadcrumb.desc' | translate">

      <div sgOverview>
        <hrm-breadcrumb [items]="basic" />
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.breadcrumb.purpose' | translate"
          [when]="when"
          [behavior]="'docs.breadcrumb.behavior' | translate"
          [avoid]="'docs.breadcrumb.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.breadcrumb.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.breadcrumb.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.breadcrumb.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.breadcrumb.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.breadcrumb.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.breadcrumb.exBasicT' | translate"
          [desc]="'docs.breadcrumb.exBasicD' | translate">
          <sg-row>
            <hrm-breadcrumb [items]="basic" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.breadcrumb.exIconsT' | translate"
          [desc]="'docs.breadcrumb.exIconsD' | translate">
          <sg-row>
            <hrm-breadcrumb [items]="withIcons" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.breadcrumb.exSepT' | translate"
          [desc]="'docs.breadcrumb.exSepD' | translate">
          <sg-row label="/ \xB7 \u203A \xB7 \u2022">
            <hrm-breadcrumb [items]="basic" />
            <hrm-breadcrumb [items]="basic" separator="\u203A" />
            <hrm-breadcrumb [items]="basic" separator="\u2022" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.breadcrumb.exDeepT' | translate"
          [desc]="'docs.breadcrumb.exDeepD' | translate">
          <sg-row>
            <hrm-breadcrumb [items]="deep" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocBreadcrumb, { className: "SgDocBreadcrumb", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/breadcrumb.ts", lineNumber: 70 });
})();
export {
  SgDocBreadcrumb
};
//# sourceMappingURL=chunk-4PFWANSU.js.map
