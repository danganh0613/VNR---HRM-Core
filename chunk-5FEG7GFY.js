import {
  HrmFlex
} from "./chunk-U33NSKCD.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-W3HXIMCC.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/flex.ts
function SgDocFlex_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function SgDocFlex_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
var SgDocFlex = class _SgDocFlex {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.flex.when1",
      "docs.flex.when2",
      "docs.flex.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.flex." + key);
  }
  get tags() {
    return [
      this.tr("tagDept"),
      this.tr("tagPosition"),
      this.tr("tagStatus"),
      this.tr("tagContract"),
      this.tr("tagBranch"),
      this.tr("tagShift")
    ];
  }
  static {
    this.\u0275fac = function SgDocFlex_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocFlex)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocFlex, selectors: [["sg-doc-flex"]], decls: 87, vars: 72, consts: [["category", "Layout", 3, "title", "desc"], ["sgOverview", ""], ["gap", "md", "justify", "between", 2, "width", "100%"], [1, "c"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["gap", "md", "justify", "start", 2, "width", "100%"], ["gap", "md", "justify", "center", 2, "width", "100%"], ["direction", "column", "gap", "sm", "align", "start"], ["gap", "sm", 2, "width", "100%", "max-width", "360px", 3, "wrap"], ["gap", "lg", 2, "width", "100%", "max-width", "360px", 3, "wrap"]], template: function SgDocFlex_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-flex", 2)(5, "div", 3);
        \u0275\u0275text(6, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275text(8, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275text(10, "C");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 4);
        \u0275\u0275element(12, "sg-use", 5);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 6)(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 7)(30, "sg-example", 8);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row", 9);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "hrm-flex", 10)(36, "div", 3);
        \u0275\u0275text(37, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 3);
        \u0275\u0275text(39, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 3);
        \u0275\u0275text(41, "C");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-row", 9);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "hrm-flex", 11)(45, "div", 3);
        \u0275\u0275text(46, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 3);
        \u0275\u0275text(48, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 3);
        \u0275\u0275text(50, "C");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "sg-row", 9);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementStart(53, "hrm-flex", 2)(54, "div", 3);
        \u0275\u0275text(55, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 3);
        \u0275\u0275text(57, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 3);
        \u0275\u0275text(59, "C");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "sg-example", 8);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "sg-row")(64, "hrm-flex", 12)(65, "div", 3);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 3);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 3);
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "sg-example", 8);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementStart(77, "sg-row", 9);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementStart(79, "hrm-flex", 13);
        \u0275\u0275repeaterCreate(80, SgDocFlex_For_81_Template, 2, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "sg-row", 9);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementStart(84, "hrm-flex", 14);
        \u0275\u0275repeaterCreate(85, SgDocFlex_For_86_Template, 2, 1, "div", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 26, "docs.flex.title"))("desc", \u0275\u0275pipeBind1(2, 28, "docs.flex.desc"));
        \u0275\u0275advance(12);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(13, 30, "docs.flex.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(14, 32, "docs.flex.behavior"))("avoid", \u0275\u0275pipeBind1(15, 34, "docs.flex.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 36, "docs.flex.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 38, "docs.flex.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 40, "docs.flex.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 42, "docs.flex.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 44, "docs.flex.exJustifyT"))("desc", \u0275\u0275pipeBind1(32, 46, "docs.flex.exJustifyD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 48, "docs.flex.exJustifyStart"));
        \u0275\u0275advance(9);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(43, 50, "docs.flex.exJustifyCenter"));
        \u0275\u0275advance(9);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(52, 52, "docs.flex.exJustifyBetween"));
        \u0275\u0275advance(9);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(61, 54, "docs.flex.exColumnT"))("desc", \u0275\u0275pipeBind1(62, 56, "docs.flex.exColumnD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 58, "docs.flex.line1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 60, "docs.flex.line2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 62, "docs.flex.line3"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(75, 64, "docs.flex.exWrapT"))("desc", \u0275\u0275pipeBind1(76, 66, "docs.flex.exWrapD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(78, 68, "docs.flex.exWrapSm"));
        \u0275\u0275advance(2);
        \u0275\u0275property("wrap", true);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.tags);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(83, 70, "docs.flex.exWrapLg"));
        \u0275\u0275advance(2);
        \u0275\u0275property("wrap", true);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.tags);
      }
    }, dependencies: [TranslateModule, HrmFlex, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.c[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border-radius: var(--radius-md);\n  padding: 10px 16px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.dark[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=flex.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocFlex, [{
    type: Component,
    args: [{ selector: "sg-doc-flex", imports: [TranslateModule, HrmFlex, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Layout" [title]="'docs.flex.title' | translate" [desc]="'docs.flex.desc' | translate">

      <div sgOverview>
        <hrm-flex gap="md" justify="between" style="width:100%">
          <div class="c">A</div><div class="c">B</div><div class="c">C</div>
        </hrm-flex>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.flex.purpose' | translate"
          [when]="when"
          [behavior]="'docs.flex.behavior' | translate"
          [avoid]="'docs.flex.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.flex.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.flex.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.flex.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.flex.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.flex.exJustifyT' | translate"
          [desc]="'docs.flex.exJustifyD' | translate">
          <sg-row [label]="'docs.flex.exJustifyStart' | translate">
            <hrm-flex gap="md" justify="start" style="width:100%">
              <div class="c">A</div><div class="c">B</div><div class="c">C</div>
            </hrm-flex>
          </sg-row>
          <sg-row [label]="'docs.flex.exJustifyCenter' | translate">
            <hrm-flex gap="md" justify="center" style="width:100%">
              <div class="c">A</div><div class="c">B</div><div class="c">C</div>
            </hrm-flex>
          </sg-row>
          <sg-row [label]="'docs.flex.exJustifyBetween' | translate">
            <hrm-flex gap="md" justify="between" style="width:100%">
              <div class="c">A</div><div class="c">B</div><div class="c">C</div>
            </hrm-flex>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.flex.exColumnT' | translate"
          [desc]="'docs.flex.exColumnD' | translate">
          <sg-row>
            <hrm-flex direction="column" gap="sm" align="start">
              <div class="c">{{ 'docs.flex.line1' | translate }}</div><div class="c">{{ 'docs.flex.line2' | translate }}</div><div class="c">{{ 'docs.flex.line3' | translate }}</div>
            </hrm-flex>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.flex.exWrapT' | translate"
          [desc]="'docs.flex.exWrapD' | translate">
          <sg-row [label]="'docs.flex.exWrapSm' | translate">
            <hrm-flex gap="sm" [wrap]="true" style="width:100%;max-width:360px">
              @for (t of tags; track t) { <div class="c">{{ t }}</div> }
            </hrm-flex>
          </sg-row>
          <sg-row [label]="'docs.flex.exWrapLg' | translate">
            <hrm-flex gap="lg" [wrap]="true" style="width:100%;max-width:360px">
              @for (t of tags; track t) { <div class="c">{{ t }}</div> }
            </hrm-flex>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;9e87eef433d92b35d7e9e48c7176e4191ffa10bc45cb41a8003853a6b1835e15;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/flex.ts */\n.c {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border-radius: var(--radius-md);\n  padding: 10px 16px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.dark .c {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=flex.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocFlex, { className: "SgDocFlex", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/flex.ts", lineNumber: 90 });
})();
export {
  SgDocFlex
};
//# sourceMappingURL=chunk-5FEG7GFY.js.map
