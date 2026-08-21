import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
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
import {
  DomSanitizer
} from "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  ArrowsMaximize,
  TablerIconComponent
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/login-page.ts
var SgDocLoginPage = class _SgDocLoginPage {
  constructor(sanitizer) {
    this.maximize = ArrowsMaximize;
    this.when = [
      "docs.loginPage.when1",
      "docs.loginPage.when2",
      "docs.loginPage.when3"
    ];
    this.src = sanitizer.bypassSecurityTrustResourceUrl("/login");
  }
  static {
    this.\u0275fac = function SgDocLoginPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocLoginPage)(\u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocLoginPage, selectors: [["sg-doc-login-page"]], decls: 36, vars: 40, consts: [["category", "Template", 3, "title", "desc"], ["sgOverview", ""], [1, "lp-frame"], ["title", "Login Page preview", 3, "src"], [1, "lp-actions"], ["href", "/login", "target", "_blank", "rel", "noopener", 1, "lp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["href", "/login", "target", "_blank", "rel", "noopener"], ["variant", "primary"]], template: function SgDocLoginPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "iframe", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "a", 5)(8, "hrm-button", 6);
        \u0275\u0275element(9, "tabler-icon", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275element(13, "sg-use", 9);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 11)(28, "sg-example", 12);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "div", 4)(32, "a", 13)(33, "hrm-button", 14);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 16, "docs.loginPage.title"))("desc", \u0275\u0275pipeBind1(2, 18, "docs.loginPage.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.src, \u0275\u0275sanitizeResourceUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.maximize)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "sg.openFull"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(14, 22, "docs.loginPage.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(15, 24, "docs.loginPage.behavior"))("avoid", \u0275\u0275pipeBind1(16, 26, "docs.loginPage.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "docs.loginPage.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "docs.loginPage.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 32, "docs.loginPage.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 34, "docs.loginPage.exFullT"))("desc", \u0275\u0275pipeBind1(30, 36, "docs.loginPage.exFullD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 38, "docs.loginPage.openRoute"));
      }
    }, dependencies: [TranslateModule, TablerIconComponent, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], styles: ["\n.lp-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface-subtle);\n}\n.lp-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.lp-actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.lp-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=login-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocLoginPage, [{
    type: Component,
    args: [{ selector: "sg-doc-login-page", imports: [TranslateModule, TablerIconComponent, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample], template: `
    <sg-doc category="Template" [title]="'docs.loginPage.title' | translate"
      [desc]="'docs.loginPage.desc' | translate">

      <div sgOverview>
        <div class="lp-frame">
          <iframe [src]="src" title="Login Page preview"></iframe>
        </div>
        <div class="lp-actions">
          <a class="lp-full-link" href="/login" target="_blank" rel="noopener">
            <hrm-button variant="default">
              <tabler-icon [icon]="maximize" [size]="16" /> {{ 'sg.openFull' | translate }}
            </hrm-button>
          </a>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.loginPage.purpose' | translate"
          [when]="when"
          [behavior]="'docs.loginPage.behavior' | translate"
          [avoid]="'docs.loginPage.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.loginPage.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.loginPage.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.loginPage.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.loginPage.exFullT' | translate"
          [desc]="'docs.loginPage.exFullD' | translate">
          <div class="lp-actions">
            <a href="/login" target="_blank" rel="noopener"><hrm-button variant="primary">{{ 'docs.loginPage.openRoute' | translate }}</hrm-button></a>
          </div>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;3a431aa41e29e0da3a808830c54d698c75a8996413afb68b2cb79c709b424c5b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/login-page.ts */\n.lp-frame {\n  width: 100%;\n  aspect-ratio: 16 / 10;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface-subtle);\n}\n.lp-frame iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.lp-actions {\n  margin-top: 14px;\n}\n.lp-actions a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=login-page.css.map */\n"] }]
  }], () => [{ type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocLoginPage, { className: "SgDocLoginPage", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/login-page.ts", lineNumber: 65 });
})();
export {
  SgDocLoginPage
};
//# sourceMappingURL=chunk-CHPX3VA7.js.map
