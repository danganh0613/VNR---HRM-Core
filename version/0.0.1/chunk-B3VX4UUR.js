import {
  HrmDivider
} from "./chunk-25CHKTPS.js";
import "./chunk-X6QEURYF.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-NXJVNWYP.js";
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/divider.ts
var SgDocDivider = class _SgDocDivider {
  constructor() {
    this.when = [
      "docs.divider.when1",
      "docs.divider.when2",
      "docs.divider.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDivider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDivider)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDivider, selectors: [["sg-doc-divider"]], decls: 82, vars: 96, consts: [["category", "Layout", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "360px"], ["orientation", "left", 3, "text"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "text"], ["orientation", "right", 3, "text"], ["type", "vertical"], [3, "dashed"], ["orientation", "left", 3, "text", "dashed"]], template: function SgDocDivider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "hrm-divider", 3);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275element(14, "sg-use", 5);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6)(19, "sg-do");
        \u0275\u0275text(20);
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
        \u0275\u0275elementStart(28, "div", 7)(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 2)(34, "span");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "hrm-divider");
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "sg-example", 8);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row", 9);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "div", 2);
        \u0275\u0275element(47, "hrm-divider", 10);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275element(49, "hrm-divider", 3);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275element(51, "hrm-divider", 11);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "sg-example", 8);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementStart(56, "sg-row")(57, "span");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "hrm-divider", 12);
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(64, "hrm-divider", 12);
        \u0275\u0275elementStart(65, "span");
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "sg-example", 8);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementStart(71, "sg-row")(72, "div", 2)(73, "span");
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "hrm-divider", 13);
        \u0275\u0275elementStart(77, "span");
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "hrm-divider", 14);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 34, "docs.divider.title"))("desc", \u0275\u0275pipeBind1(2, 36, "docs.divider.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 38, "docs.divider.ovPersonal"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(9, 40, "docs.divider.ovContract"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 42, "docs.divider.ovContractSub"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(15, 44, "docs.divider.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(16, 46, "docs.divider.behavior"))("avoid", \u0275\u0275pipeBind1(17, 48, "docs.divider.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 50, "docs.divider.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 52, "docs.divider.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 54, "docs.divider.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 56, "docs.divider.exHorizT"))("desc", \u0275\u0275pipeBind1(31, 58, "docs.divider.exHorizD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 60, "docs.divider.exHorizDept"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 62, "docs.divider.exHorizRole"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 64, "docs.divider.exTextT"))("desc", \u0275\u0275pipeBind1(43, 66, "docs.divider.exTextD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(45, 68, "docs.divider.exTextRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(48, 70, "docs.divider.exTextGeneral"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(50, 72, "docs.divider.exTextContract"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(52, 74, "docs.divider.exTextSalary"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(54, 76, "docs.divider.exVertT"))("desc", \u0275\u0275pipeBind1(55, 78, "docs.divider.exVertD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 80, "docs.divider.exVertActive"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 82, "docs.divider.exVertProbation"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 84, "docs.divider.exVertLeave"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(69, 86, "docs.divider.exDashedT"))("desc", \u0275\u0275pipeBind1(70, 88, "docs.divider.exDashedD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 90, "docs.divider.exDashedMain"));
        \u0275\u0275advance(2);
        \u0275\u0275property("dashed", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 92, "docs.divider.exDashedNote"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(81, 94, "docs.divider.exDashedOptional"))("dashed", true);
      }
    }, dependencies: [TranslateModule, HrmDivider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDivider, [{
    type: Component,
    args: [{
      selector: "sg-doc-divider",
      imports: [TranslateModule, HrmDivider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Layout" [title]="'docs.divider.title' | translate" [desc]="'docs.divider.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:360px">
          <span>{{ 'docs.divider.ovPersonal' | translate }}</span>
          <hrm-divider [text]="'docs.divider.ovContract' | translate" orientation="left" />
          <span>{{ 'docs.divider.ovContractSub' | translate }}</span>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.divider.purpose' | translate"
          [when]="when"
          [behavior]="'docs.divider.behavior' | translate"
          [avoid]="'docs.divider.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.divider.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.divider.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.divider.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.divider.exHorizT' | translate"
          [desc]="'docs.divider.exHorizD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <span>{{ 'docs.divider.exHorizDept' | translate }}</span>
              <hrm-divider />
              <span>{{ 'docs.divider.exHorizRole' | translate }}</span>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.divider.exTextT' | translate"
          [desc]="'docs.divider.exTextD' | translate">
          <sg-row [label]="'docs.divider.exTextRow' | translate">
            <div style="width:100%;max-width:360px">
              <hrm-divider [text]="'docs.divider.exTextGeneral' | translate" />
              <hrm-divider [text]="'docs.divider.exTextContract' | translate" orientation="left" />
              <hrm-divider [text]="'docs.divider.exTextSalary' | translate" orientation="right" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.divider.exVertT' | translate"
          [desc]="'docs.divider.exVertD' | translate">
          <sg-row>
            <span>{{ 'docs.divider.exVertActive' | translate }}</span>
            <hrm-divider type="vertical" />
            <span>{{ 'docs.divider.exVertProbation' | translate }}</span>
            <hrm-divider type="vertical" />
            <span>{{ 'docs.divider.exVertLeave' | translate }}</span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.divider.exDashedT' | translate"
          [desc]="'docs.divider.exDashedD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <span>{{ 'docs.divider.exDashedMain' | translate }}</span>
              <hrm-divider [dashed]="true" />
              <span>{{ 'docs.divider.exDashedNote' | translate }}</span>
              <hrm-divider [text]="'docs.divider.exDashedOptional' | translate" orientation="left" [dashed]="true" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDivider, { className: "SgDocDivider", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/divider.ts", lineNumber: 86 });
})();
export {
  SgDocDivider
};
//# sourceMappingURL=chunk-B3VX4UUR.js.map
