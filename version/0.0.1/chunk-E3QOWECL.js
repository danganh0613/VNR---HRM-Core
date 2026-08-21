import {
  HrmAffix
} from "./chunk-HZXI4BWV.js";
import "./chunk-BOGSDCUG.js";
import "./chunk-INGBAYOP.js";
import "./chunk-ZUH7BZUU.js";
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/affix.ts
var SgDocAffix = class _SgDocAffix {
  constructor() {
    this.when = [
      "docs.affix.when1",
      "docs.affix.when2"
    ];
  }
  static {
    this.\u0275fac = function SgDocAffix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAffix)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAffix, selectors: [["sg-doc-affix"]], decls: 40, vars: 49, consts: [["category", "Layout", 3, "title", "desc"], ["sgOverview", ""], [3, "offsetTop"], ["variant", "primary"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["label", "offsetTop = 16"], ["label", "offsetBottom = 16"], [3, "offsetBottom"], ["variant", "default"]], template: function SgDocAffix_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-affix", 2)(5, "hrm-button", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "sg-use", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6)(14, "sg-do");
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "sg-example", 8);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "sg-row", 9)(28, "hrm-affix", 2)(29, "hrm-button", 3);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "sg-example", 8);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "sg-row", 10)(36, "hrm-affix", 11)(37, "hrm-button", 12);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 19, "docs.affix.title"))("desc", \u0275\u0275pipeBind1(2, 21, "docs.affix.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("offsetTop", 16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 23, "docs.affix.ovBtn"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 25, "docs.affix.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 27, "docs.affix.behavior"))("avoid", \u0275\u0275pipeBind1(12, 29, "docs.affix.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 31, "docs.affix.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 33, "docs.affix.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 35, "docs.affix.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 37, "docs.affix.exTopT"))("desc", \u0275\u0275pipeBind1(26, 39, "docs.affix.exTopD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("offsetTop", 16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 41, "docs.affix.exTopBtn"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 43, "docs.affix.exBottomT"))("desc", \u0275\u0275pipeBind1(34, 45, "docs.affix.exBottomD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("offsetBottom", 16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 47, "docs.affix.exBottomBtn"));
      }
    }, dependencies: [TranslateModule, HrmAffix, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAffix, [{
    type: Component,
    args: [{
      selector: "sg-doc-affix",
      imports: [TranslateModule, HrmAffix, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Layout" [title]="'docs.affix.title' | translate" [desc]="'docs.affix.desc' | translate">

      <div sgOverview>
        <hrm-affix [offsetTop]="16"><hrm-button variant="primary">{{ 'docs.affix.ovBtn' | translate }}</hrm-button></hrm-affix>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.affix.purpose' | translate"
          [when]="when"
          [behavior]="'docs.affix.behavior' | translate"
          [avoid]="'docs.affix.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.affix.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.affix.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.affix.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.affix.exTopT' | translate"
          [desc]="'docs.affix.exTopD' | translate">
          <sg-row label="offsetTop = 16">
            <hrm-affix [offsetTop]="16"><hrm-button variant="primary">{{ 'docs.affix.exTopBtn' | translate }}</hrm-button></hrm-affix>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.affix.exBottomT' | translate"
          [desc]="'docs.affix.exBottomD' | translate">
          <sg-row label="offsetBottom = 16">
            <hrm-affix [offsetBottom]="16"><hrm-button variant="default">{{ 'docs.affix.exBottomBtn' | translate }}</hrm-button></hrm-affix>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAffix, { className: "SgDocAffix", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/affix.ts", lineNumber: 51 });
})();
export {
  SgDocAffix
};
//# sourceMappingURL=chunk-E3QOWECL.js.map
