import {
  RouterLink
} from "./chunk-WH372SY7.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  ElementRef,
  Input,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/doc/sg-doc.ts
var _c0 = [[["", "sgOverview", ""]], [["", "sgUsage", ""]], [["", "sgBest", ""]], [["", "sgExamples", ""]]];
var _c1 = ["[sgOverview]", "[sgUsage]", "[sgBest]", "[sgExamples]"];
var _forTrack0 = ($index, $item) => $item.route;
function SgDoc_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.category());
  }
}
function SgDoc_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", "/styleguide/" + r_r2.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.label);
  }
}
function SgDoc_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SgDoc_Conditional_6_For_5_Template, 2, 2, "a", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sg.doc.related"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.related());
  }
}
var SgDoc = class _SgDoc {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.desc = input("", ...ngDevMode ? [{ debugName: "desc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.category = input("", ...ngDevMode ? [{ debugName: "category" }] : (
      /* istanbul ignore next */
      []
    ));
    this.related = input([], ...ngDevMode ? [{ debugName: "related" }] : (
      /* istanbul ignore next */
      []
    ));
    this.active = signal("overview", ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    ));
    this.el = inject(ElementRef);
  }
  go(id) {
    this.active.set(id);
    this.el.nativeElement.querySelector(`#doc-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  static {
    this.\u0275fac = function SgDoc_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDoc)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDoc, selectors: [["sg-doc"]], inputs: { title: [1, "title"], desc: [1, "desc"], category: [1, "category"], related: [1, "related"] }, ngContentSelectors: _c1, decls: 40, vars: 36, consts: [[1, "doc-head"], [1, "doc-cat"], [1, "doc-title"], [1, "doc-desc"], [1, "doc-related"], [1, "doc-subnav"], ["type", "button", 3, "click"], ["id", "doc-overview", 1, "doc-sec"], [1, "doc-h2"], ["id", "doc-usage", 1, "doc-sec"], ["id", "doc-best", 1, "doc-sec"], ["id", "doc-examples", 1, "doc-sec"], [1, "doc-related-l"], [1, "doc-related-link", 3, "routerLink"]], template: function SgDoc_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, SgDoc_Conditional_1_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, SgDoc_Conditional_6_Template, 6, 3, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "nav", 5)(8, "button", 6);
        \u0275\u0275listener("click", function SgDoc_Template_button_click_8_listener() {
          return ctx.go("overview");
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function SgDoc_Template_button_click_11_listener() {
          return ctx.go("usage");
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function SgDoc_Template_button_click_14_listener() {
          return ctx.go("best");
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 6);
        \u0275\u0275listener("click", function SgDoc_Template_button_click_17_listener() {
          return ctx.go("examples");
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "section", 7)(21, "h2", 8);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275projection(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "section", 9)(26, "h2", 8);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275projection(29, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "section", 10)(31, "h2", 8);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275projection(34, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "section", 11)(36, "h2", 8);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275projection(39, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.category() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.desc());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.related().length ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.active() === "overview");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "sg.doc.tab.overview"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.active() === "usage");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 22, "sg.doc.tab.usage"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.active() === "best");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 24, "sg.doc.tab.best"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.active() === "examples");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, "sg.doc.tab.examples"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "sg.doc.sec.overview"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 30, "sg.doc.sec.usage"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 32, "sg.doc.sec.best"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 34, "sg.doc.sec.examples"));
      }
    }, dependencies: [TranslateModule, RouterLink, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.doc-head[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.doc-cat[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--primary-base);\n}\n.doc-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-30);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 6px 0 8px;\n}\n.doc-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  color: var(--text-sub);\n  line-height: 1.6;\n  margin: 0;\n  max-width: 720px;\n}\n.doc-related[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n}\n.doc-related-l[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.doc-related-link[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--primary-base);\n  text-decoration: none;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-subtle);\n  transition: background var(--duration-fast) var(--ease-out);\n}\n.doc-related-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg-soft);\n}\n.doc-subnav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -32px;\n  z-index: 2;\n  display: flex;\n  gap: 4px;\n  padding: 12px 0;\n  margin-bottom: 8px;\n  background: var(--bg-app);\n  border-bottom: 1px solid var(--border-sub);\n}\n.doc-subnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: var(--radius-md);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-sub);\n}\n.doc-subnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.doc-subnav[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.dark[_ngcontent-%COMP%]   .doc-subnav[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n.doc-sec[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-bottom: 1px solid var(--border-soft);\n  scroll-margin-top: 60px;\n}\n.doc-h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 16px;\n}\n/*# sourceMappingURL=sg-doc.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDoc, [{
    type: Component,
    args: [{ selector: "sg-doc", imports: [TranslateModule, RouterLink], template: `
    <div class="doc-head">
      @if (category()) { <span class="doc-cat">{{ category() }}</span> }
      <h1 class="doc-title">{{ title() }}</h1>
      <p class="doc-desc">{{ desc() }}</p>
      @if (related().length) {
        <div class="doc-related">
          <span class="doc-related-l">{{ 'sg.doc.related' | translate }}</span>
          @for (r of related(); track r.route) {
            <a class="doc-related-link" [routerLink]="'/styleguide/' + r.route">{{ r.label }}</a>
          }
        </div>
      }
    </div>

    <nav class="doc-subnav">
      <button type="button" [class.on]="active() === 'overview'" (click)="go('overview')">{{ 'sg.doc.tab.overview' | translate }}</button>
      <button type="button" [class.on]="active() === 'usage'" (click)="go('usage')">{{ 'sg.doc.tab.usage' | translate }}</button>
      <button type="button" [class.on]="active() === 'best'" (click)="go('best')">{{ 'sg.doc.tab.best' | translate }}</button>
      <button type="button" [class.on]="active() === 'examples'" (click)="go('examples')">{{ 'sg.doc.tab.examples' | translate }}</button>
    </nav>

    <section id="doc-overview" class="doc-sec">
      <h2 class="doc-h2">{{ 'sg.doc.sec.overview' | translate }}</h2>
      <ng-content select="[sgOverview]" />
    </section>
    <section id="doc-usage" class="doc-sec">
      <h2 class="doc-h2">{{ 'sg.doc.sec.usage' | translate }}</h2>
      <ng-content select="[sgUsage]" />
    </section>
    <section id="doc-best" class="doc-sec">
      <h2 class="doc-h2">{{ 'sg.doc.sec.best' | translate }}</h2>
      <ng-content select="[sgBest]" />
    </section>
    <section id="doc-examples" class="doc-sec">
      <h2 class="doc-h2">{{ 'sg.doc.sec.examples' | translate }}</h2>
      <ng-content select="[sgExamples]" />
    </section>
  `, styles: ["/* angular:styles/component:css;545e8c874f306c5a9f1eb73519f3fd47deab9d6cb7a2ce1d2ad810ac8e74da4b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-doc.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n.doc-head {\n  margin-bottom: 20px;\n}\n.doc-cat {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--primary-base);\n}\n.doc-title {\n  font-size: var(--fs-30);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 6px 0 8px;\n}\n.doc-desc {\n  font-size: var(--fs-15);\n  color: var(--text-sub);\n  line-height: 1.6;\n  margin: 0;\n  max-width: 720px;\n}\n.doc-related {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n}\n.doc-related-l {\n  font-size: var(--fs-12);\n  font-weight: 600;\n  color: var(--text-soft);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.doc-related-link {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--primary-base);\n  text-decoration: none;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-subtle);\n  transition: background var(--duration-fast) var(--ease-out);\n}\n.doc-related-link:hover {\n  background: var(--primary-bg-soft);\n}\n.doc-subnav {\n  position: sticky;\n  top: -32px;\n  z-index: 2;\n  display: flex;\n  gap: 4px;\n  padding: 12px 0;\n  margin-bottom: 8px;\n  background: var(--bg-app);\n  border-bottom: 1px solid var(--border-sub);\n}\n.doc-subnav button {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: var(--radius-md);\n  font-family: var(--font-sans);\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-sub);\n}\n.doc-subnav button:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.doc-subnav button.on {\n  color: var(--primary-base);\n  background: var(--primary-bg-subtle);\n}\n.dark .doc-subnav button.on {\n  color: var(--text-strong);\n}\n.doc-sec {\n  padding: 24px 0;\n  border-bottom: 1px solid var(--border-soft);\n  scroll-margin-top: 60px;\n}\n.doc-h2 {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 16px;\n}\n/*# sourceMappingURL=sg-doc.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], desc: [{ type: Input, args: [{ isSignal: true, alias: "desc", required: false }] }], category: [{ type: Input, args: [{ isSignal: true, alias: "category", required: false }] }], related: [{ type: Input, args: [{ isSignal: true, alias: "related", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDoc, { className: "SgDoc", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-doc.ts", lineNumber: 85 });
})();

// apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts
var _c02 = ["*"];
function SgDemo_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
function SgUse_Conditional_6_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const w_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, w_r1));
  }
}
function SgUse_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "ul", 3);
    \u0275\u0275repeaterCreate(5, SgUse_Conditional_6_For_6_Template, 3, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sg.doc.use.when"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.when());
  }
}
function SgUse_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "sg.doc.use.behavior"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.behavior());
  }
}
function SgUse_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "sg.doc.use.avoid"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.avoid());
  }
}
function SgExampleGroup_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.desc());
  }
}
function SgRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
function SgExample_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "sg.doc.ex.desc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.desc());
  }
}
var SgDemo = class _SgDemo {
  constructor() {
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgDemo_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDemo)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDemo, selectors: [["sg-demo"]], inputs: { label: [1, "label"] }, ngContentSelectors: _c02, decls: 3, vars: 1, consts: [[1, "d-label"], [1, "d-surface"]], template: function SgDemo_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, SgDemo_Conditional_0_Template, 2, 1, "div", 0);
        \u0275\u0275domElementStart(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.label() ? 0 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n}\n.d-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  margin-bottom: 8px;\n}\n.d-surface[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  padding: 24px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDemo, [{
    type: Component,
    args: [{ selector: "sg-demo", template: `
    @if (label()) { <div class="d-label">{{ label() }}</div> }
    <div class="d-surface"><ng-content /></div>
  `, styles: ["/* angular:styles/component:css;41edfcf0637e6c17956246c9fe2617e9a546cb59fb8b554d40275246cfbbd0a0;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n:host {\n  display: block;\n  margin-bottom: 16px;\n}\n.d-label {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  margin-bottom: 8px;\n}\n.d-surface {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n  padding: 24px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDemo, { className: "SgDemo", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 23 });
})();
var SgCode = class _SgCode {
  constructor() {
    this.code = input("", ...ngDevMode ? [{ debugName: "code" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgCode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgCode)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgCode, selectors: [["sg-code"]], inputs: { code: [1, "code"] }, decls: 0, vars: 0, template: function SgCode_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgCode, [{
    type: Component,
    args: [{ selector: "sg-code", template: `` }]
  }], null, { code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgCode, { className: "SgCode", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 30 });
})();
var SgApi = class _SgApi {
  constructor() {
    this.rows = input([], ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgApi)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgApi, selectors: [["sg-api"]], inputs: { rows: [1, "rows"] }, decls: 0, vars: 0, template: function SgApi_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgApi, [{
    type: Component,
    args: [{ selector: "sg-api", template: `` }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgApi, { className: "SgApi", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 36 });
})();
var SgUse = class _SgUse {
  constructor() {
    this.purpose = input("", ...ngDevMode ? [{ debugName: "purpose" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = input([], ...ngDevMode ? [{ debugName: "when" }] : (
      /* istanbul ignore next */
      []
    ));
    this.behavior = input("", ...ngDevMode ? [{ debugName: "behavior" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avoid = input("", ...ngDevMode ? [{ debugName: "avoid" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgUse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgUse)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgUse, selectors: [["sg-use"]], inputs: { purpose: [1, "purpose"], when: [1, "when"], behavior: [1, "behavior"], avoid: [1, "avoid"] }, decls: 9, vars: 7, consts: [[1, "u-row"], [1, "u-k"], [1, "u-v"], [1, "u-list"]], template: function SgUse_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(6, SgUse_Conditional_6_Template, 7, 3, "div", 0);
        \u0275\u0275conditionalCreate(7, SgUse_Conditional_7_Template, 6, 4, "div", 0);
        \u0275\u0275conditionalCreate(8, SgUse_Conditional_8_Template, 6, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "sg.doc.use.purpose"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.purpose());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.when().length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.behavior() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.avoid() ? 8 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.u-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 16px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.u-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.u-k[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-sub);\n}\n.u-v[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  line-height: 1.55;\n}\n.u-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgUse, [{
    type: Component,
    args: [{ selector: "sg-use", imports: [TranslateModule], template: `
    <div class="u-row"><div class="u-k">{{ 'sg.doc.use.purpose' | translate }}</div><div class="u-v">{{ purpose() }}</div></div>
    @if (when().length) {
      <div class="u-row"><div class="u-k">{{ 'sg.doc.use.when' | translate }}</div>
        <ul class="u-list">@for (w of when(); track w) { <li>{{ w | translate }}</li> }</ul>
      </div>
    }
    @if (behavior()) { <div class="u-row"><div class="u-k">{{ 'sg.doc.use.behavior' | translate }}</div><div class="u-v">{{ behavior() }}</div></div> }
    @if (avoid()) { <div class="u-row"><div class="u-k">{{ 'sg.doc.use.avoid' | translate }}</div><div class="u-v">{{ avoid() }}</div></div> }
  `, styles: ["/* angular:styles/component:css;a0bff0ce2bd6cc2f84642e3596bd3bb4f2d3f27759e554a4a4e959dbbb79d801;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n:host {\n  display: block;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.u-row {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 16px;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.u-row:last-child {\n  border-bottom: 0;\n}\n.u-k {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-sub);\n}\n.u-v {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  line-height: 1.55;\n}\n.u-list {\n  margin: 0;\n  padding-left: 18px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, { purpose: [{ type: Input, args: [{ isSignal: true, alias: "purpose", required: false }] }], when: [{ type: Input, args: [{ isSignal: true, alias: "when", required: false }] }], behavior: [{ type: Input, args: [{ isSignal: true, alias: "behavior", required: false }] }], avoid: [{ type: Input, args: [{ isSignal: true, alias: "avoid", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgUse, { className: "SgUse", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 63 });
})();
var SgDo = class _SgDo {
  static {
    this.\u0275fac = function SgDo_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDo)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDo, selectors: [["sg-do"]], ngContentSelectors: _c02, decls: 6, vars: 3, consts: [[1, "bp", "bp-do"], [1, "bp-tag"]], template: function SgDo_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "span");
        \u0275\u0275projection(5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sg.doc.bp.do"));
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n.bp[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  line-height: 1.5;\n  margin-bottom: 8px;\n}\n.bp-do[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  border: 1px solid var(--success-border);\n  color: var(--success-text);\n}\n.dark[_nghost-%COMP%]   .bp-do[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bp-do[_ngcontent-%COMP%] {\n  background: var(--success-bg-dark);\n  border-color: var(--success-border-dark);\n  color: var(--success-text-dark);\n}\n.bp-tag[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: var(--radius-xs);\n  height: fit-content;\n  background: var(--success-base);\n  color: var(--text-on-primary);\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDo, [{
    type: Component,
    args: [{ selector: "sg-do", imports: [TranslateModule], template: `<div class="bp bp-do"><span class="bp-tag">{{ 'sg.doc.bp.do' | translate }}</span><span><ng-content /></span></div>`, styles: ["/* angular:styles/component:css;46e8508c89b12c83904bdaeec5e5f3b5cd3138722e244769c327028c5524a379;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n.bp {\n  display: flex;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  line-height: 1.5;\n  margin-bottom: 8px;\n}\n.bp-do {\n  background: var(--success-bg);\n  border: 1px solid var(--success-border);\n  color: var(--success-text);\n}\n:host-context(.dark) .bp-do {\n  background: var(--success-bg-dark);\n  border-color: var(--success-border-dark);\n  color: var(--success-text-dark);\n}\n.bp-tag {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: var(--radius-xs);\n  height: fit-content;\n  background: var(--success-base);\n  color: var(--text-on-primary);\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDo, { className: "SgDo", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 80 });
})();
var SgDont = class _SgDont {
  static {
    this.\u0275fac = function SgDont_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDont)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDont, selectors: [["sg-dont"]], ngContentSelectors: _c02, decls: 6, vars: 3, consts: [[1, "bp", "bp-dont"], [1, "bp-tag"]], template: function SgDont_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "span");
        \u0275\u0275projection(5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "sg.doc.bp.dont"));
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n.bp[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  line-height: 1.5;\n  margin-bottom: 8px;\n}\n.bp-dont[_ngcontent-%COMP%] {\n  background: var(--error-bg);\n  border: 1px solid var(--error-border);\n  color: var(--error-text);\n}\n.dark[_nghost-%COMP%]   .bp-dont[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bp-dont[_ngcontent-%COMP%] {\n  background: var(--error-bg-dark);\n  border-color: var(--error-border-dark);\n  color: var(--error-text-dark);\n}\n.bp-tag[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: var(--radius-xs);\n  height: fit-content;\n  background: var(--error-base);\n  color: var(--text-on-primary);\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDont, [{
    type: Component,
    args: [{ selector: "sg-dont", imports: [TranslateModule], template: `<div class="bp bp-dont"><span class="bp-tag">{{ 'sg.doc.bp.dont' | translate }}</span><span><ng-content /></span></div>`, styles: ["/* angular:styles/component:css;1aa79ac249addaa0e297ba9da1efd10cf919711e3eccb96a97147316413c39c5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n.bp {\n  display: flex;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: var(--radius-lg);\n  font-size: var(--fs-14);\n  line-height: 1.5;\n  margin-bottom: 8px;\n}\n.bp-dont {\n  background: var(--error-bg);\n  border: 1px solid var(--error-border);\n  color: var(--error-text);\n}\n:host-context(.dark) .bp-dont {\n  background: var(--error-bg-dark);\n  border-color: var(--error-border-dark);\n  color: var(--error-text-dark);\n}\n.bp-tag {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: var(--radius-xs);\n  height: fit-content;\n  background: var(--error-base);\n  color: var(--text-on-primary);\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDont, { className: "SgDont", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 91 });
})();
var SgExampleGroup = class _SgExampleGroup {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.desc = input("", ...ngDevMode ? [{ debugName: "desc" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgExampleGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgExampleGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgExampleGroup, selectors: [["sg-example-group"]], inputs: { title: [1, "title"], desc: [1, "desc"] }, ngContentSelectors: _c02, decls: 6, vars: 2, consts: [[1, "eg"], [1, "eg-h"], [1, "eg-d"], [1, "eg-body"]], template: function SgExampleGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, SgExampleGroup_Conditional_3_Template, 2, 1, "p", 2);
        \u0275\u0275domElementStart(4, "div", 3);
        \u0275\u0275projection(5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.desc() ? 3 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 24px;\n}\n.eg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 4px;\n}\n.eg-d[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n.eg-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgExampleGroup, [{
    type: Component,
    args: [{ selector: "sg-example-group", template: `
    <div class="eg">
      <h3 class="eg-h">{{ title() }}</h3>
      @if (desc()) { <p class="eg-d">{{ desc() }}</p> }
      <div class="eg-body"><ng-content /></div>
    </div>
  `, styles: ["/* angular:styles/component:css;7f3fb0220129e5b76a6361807e020ce555f6005a7f880d9f2f3f77cd37001bdf;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n:host {\n  display: block;\n  margin-bottom: 24px;\n}\n.eg-h {\n  font-size: var(--fs-15);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 4px;\n}\n.eg-d {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin: 0 0 12px;\n  line-height: 1.5;\n}\n.eg-body {\n  display: grid;\n  gap: 14px;\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], desc: [{ type: Input, args: [{ isSignal: true, alias: "desc", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgExampleGroup, { className: "SgExampleGroup", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 110 });
})();
var SgRow = class _SgRow {
  constructor() {
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgRow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgRow, selectors: [["sg-row"]], inputs: { label: [1, "label"] }, ngContentSelectors: _c02, decls: 3, vars: 1, consts: [[1, "r-l"], [1, "r-items"]], template: function SgRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, SgRow_Conditional_0_Template, 2, 1, "div", 0);
        \u0275\u0275domElementStart(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.label() ? 0 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]    + -shadowcsshost {\n  margin-top: 28px;\n}\n.r-l[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  margin-bottom: 12px;\n}\n.r-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgRow, [{
    type: Component,
    args: [{ selector: "sg-row", template: `
    @if (label()) { <div class="r-l">{{ label() }}</div> }
    <div class="r-items"><ng-content /></div>
  `, styles: ["/* angular:styles/component:css;5d9d4eb0c138b720fabbb5b7433e90f6d40e86fa07dc653d6cfaee8114d46293;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n:host {\n  display: block;\n}\n:host + :host {\n  margin-top: 28px;\n}\n.r-l {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  margin-bottom: 12px;\n}\n.r-items {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgRow, { className: "SgRow", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 129 });
})();
var SgExample = class _SgExample {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.desc = input("", ...ngDevMode ? [{ debugName: "desc" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgExample_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgExample)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgExample, selectors: [["sg-example"]], inputs: { title: [1, "title"], desc: [1, "desc"] }, ngContentSelectors: _c02, decls: 6, vars: 2, consts: [[1, "ex"], [1, "ex-title"], [1, "ex-surface"], [1, "ex-foot"], [1, "ex-foot-l"], [1, "ex-desc"]], template: function SgExample_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 2);
        \u0275\u0275projection(4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(5, SgExample_Conditional_5_Template, 6, 4, "div", 3);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.desc() ? 5 : -1);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n}\n.ex[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.ex-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n  padding: 12px 16px;\n}\n.ex-surface[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  padding: 24px 16px;\n  border-top: 1px solid var(--border-soft);\n  border-bottom: 1px solid var(--border-soft);\n}\n.ex-foot[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.ex-foot-l[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n}\n.ex-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  line-height: 1.6;\n  margin: 4px 0 0;\n}\n/*# sourceMappingURL=sg-blocks.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgExample, [{
    type: Component,
    args: [{ selector: "sg-example", imports: [TranslateModule], template: `
    <div class="ex">
      <div class="ex-title">{{ title() }}</div>
      <div class="ex-surface"><ng-content /></div>
      @if (desc()) {
        <div class="ex-foot">
          <span class="ex-foot-l">{{ 'sg.doc.ex.desc' | translate }}</span>
          <p class="ex-desc">{{ desc() }}</p>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;6f9cf938df4a0a42c07c4e2e4d72532c30590cd50ea658a922c9441e58d3748e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts */\n:host {\n  display: block;\n  margin-bottom: 14px;\n}\n.ex {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.ex-title {\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n  padding: 12px 16px;\n}\n.ex-surface {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n  padding: 24px 16px;\n  border-top: 1px solid var(--border-soft);\n  border-bottom: 1px solid var(--border-soft);\n}\n.ex-foot {\n  padding: 12px 16px;\n}\n.ex-foot-l {\n  font-size: var(--fs-11);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n}\n.ex-desc {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  line-height: 1.6;\n  margin: 4px 0 0;\n}\n/*# sourceMappingURL=sg-blocks.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], desc: [{ type: Input, args: [{ isSignal: true, alias: "desc", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgExample, { className: "SgExample", filePath: "apps/ds-demo/src/app/features/styleguide/doc/sg-blocks.ts", lineNumber: 160 });
})();

export {
  SgDoc,
  SgDemo,
  SgUse,
  SgDo,
  SgDont,
  SgRow,
  SgExample
};
//# sourceMappingURL=chunk-SZV2GIDV.js.map
