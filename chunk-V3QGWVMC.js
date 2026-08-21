import {
  HrmButtonGroup
} from "./chunk-6CB2I2EG.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
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
  Columns,
  LayoutGrid,
  List,
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
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/general/button-group.ts
var SgDocButtonGroup = class _SgDocButtonGroup {
  constructor() {
    this.grid = LayoutGrid;
    this.list = List;
    this.columns = Columns;
    this.when = [
      "docs.buttonGroup.when1",
      "docs.buttonGroup.when2",
      "docs.buttonGroup.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocButtonGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocButtonGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocButtonGroup, selectors: [["sg-doc-button-group"]], decls: 87, vars: 104, consts: [["category", "Action", 3, "title", "desc"], ["sgOverview", ""], ["variant", "primary"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "iconOnly", "ariaLabel"], [3, "icon", "size"], ["direction", "vertical"], [2, "width", "320px"], [3, "block"]], template: function SgDocButtonGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button-group")(5, "hrm-button");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "hrm-button", 2);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "hrm-button");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 3);
        \u0275\u0275element(15, "sg-use", 4);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 5)(20, "sg-do");
        \u0275\u0275element(21, "span", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275element(24, "span", 6);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275element(27, "span", 6);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 7)(30, "sg-example", 8);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row")(34, "hrm-button-group")(35, "hrm-button");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "hrm-button");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "hrm-button");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "sg-example", 8);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "sg-row")(48, "hrm-button-group")(49, "hrm-button", 9);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275element(51, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "hrm-button", 9);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275element(54, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "hrm-button", 9);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "tabler-icon", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "sg-example", 8);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementStart(61, "sg-row")(62, "hrm-button-group", 11)(63, "hrm-button");
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "hrm-button");
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "hrm-button");
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "sg-example", 8);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementStart(75, "sg-row")(76, "div", 12)(77, "hrm-button-group", 13)(78, "hrm-button");
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "hrm-button", 2);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "hrm-button");
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 42, "docs.buttonGroup.title"))("desc", \u0275\u0275pipeBind1(2, 44, "docs.buttonGroup.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 46, "docs.buttonGroup.ovDay"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 48, "docs.buttonGroup.ovWeek"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 50, "docs.buttonGroup.ovMonth"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(16, 52, "docs.buttonGroup.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(17, 54, "docs.buttonGroup.behavior"))("avoid", \u0275\u0275pipeBind1(18, 56, "docs.buttonGroup.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 58, "docs.buttonGroup.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 60, "docs.buttonGroup.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(28, 62, "docs.buttonGroup.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 64, "docs.buttonGroup.exBasicT"))("desc", \u0275\u0275pipeBind1(32, 66, "docs.buttonGroup.exBasicD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 68, "docs.buttonGroup.left"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 70, "docs.buttonGroup.center"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 72, "docs.buttonGroup.right"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(45, 74, "docs.buttonGroup.exViewT"))("desc", \u0275\u0275pipeBind1(46, 76, "docs.buttonGroup.exViewD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(50, 78, "docs.buttonGroup.ariaGrid"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.grid)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(53, 80, "docs.buttonGroup.ariaList"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.list)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(56, 82, "docs.buttonGroup.ariaColumns"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.columns)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(59, 84, "docs.buttonGroup.exVertT"))("desc", \u0275\u0275pipeBind1(60, 86, "docs.buttonGroup.exVertD"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 88, "docs.buttonGroup.edit"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 90, "docs.buttonGroup.duplicate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 92, "docs.buttonGroup.delete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(73, 94, "docs.buttonGroup.exBlockT"))("desc", \u0275\u0275pipeBind1(74, 96, "docs.buttonGroup.exBlockD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("block", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 98, "docs.buttonGroup.prev"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 100, "docs.buttonGroup.today"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 102, "docs.buttonGroup.next"));
      }
    }, dependencies: [TablerIconComponent, TranslateModule, HrmButton, HrmButtonGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocButtonGroup, [{
    type: Component,
    args: [{
      selector: "sg-doc-button-group",
      imports: [TablerIconComponent, TranslateModule, HrmButton, HrmButtonGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Action" [title]="'docs.buttonGroup.title' | translate" [desc]="'docs.buttonGroup.desc' | translate">

      <div sgOverview>
        <hrm-button-group>
          <hrm-button>{{ 'docs.buttonGroup.ovDay' | translate }}</hrm-button>
          <hrm-button variant="primary">{{ 'docs.buttonGroup.ovWeek' | translate }}</hrm-button>
          <hrm-button>{{ 'docs.buttonGroup.ovMonth' | translate }}</hrm-button>
        </hrm-button-group>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.buttonGroup.purpose' | translate" [when]="when"
          [behavior]="'docs.buttonGroup.behavior' | translate"
          [avoid]="'docs.buttonGroup.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.buttonGroup.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.buttonGroup.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.buttonGroup.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.buttonGroup.exBasicT' | translate"
          [desc]="'docs.buttonGroup.exBasicD' | translate">
          <sg-row>
            <hrm-button-group>
              <hrm-button>{{ 'docs.buttonGroup.left' | translate }}</hrm-button>
              <hrm-button>{{ 'docs.buttonGroup.center' | translate }}</hrm-button>
              <hrm-button>{{ 'docs.buttonGroup.right' | translate }}</hrm-button>
            </hrm-button-group>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.buttonGroup.exViewT' | translate"
          [desc]="'docs.buttonGroup.exViewD' | translate">
          <sg-row>
            <hrm-button-group>
              <hrm-button [iconOnly]="true" [ariaLabel]="'docs.buttonGroup.ariaGrid' | translate"><tabler-icon [icon]="grid" [size]="18" /></hrm-button>
              <hrm-button [iconOnly]="true" [ariaLabel]="'docs.buttonGroup.ariaList' | translate"><tabler-icon [icon]="list" [size]="18" /></hrm-button>
              <hrm-button [iconOnly]="true" [ariaLabel]="'docs.buttonGroup.ariaColumns' | translate"><tabler-icon [icon]="columns" [size]="18" /></hrm-button>
            </hrm-button-group>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.buttonGroup.exVertT' | translate"
          [desc]="'docs.buttonGroup.exVertD' | translate">
          <sg-row>
            <hrm-button-group direction="vertical">
              <hrm-button>{{ 'docs.buttonGroup.edit' | translate }}</hrm-button>
              <hrm-button>{{ 'docs.buttonGroup.duplicate' | translate }}</hrm-button>
              <hrm-button>{{ 'docs.buttonGroup.delete' | translate }}</hrm-button>
            </hrm-button-group>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.buttonGroup.exBlockT' | translate"
          [desc]="'docs.buttonGroup.exBlockD' | translate">
          <sg-row>
            <div style="width:320px">
              <hrm-button-group [block]="true">
                <hrm-button>{{ 'docs.buttonGroup.prev' | translate }}</hrm-button>
                <hrm-button variant="primary">{{ 'docs.buttonGroup.today' | translate }}</hrm-button>
                <hrm-button>{{ 'docs.buttonGroup.next' | translate }}</hrm-button>
              </hrm-button-group>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocButtonGroup, { className: "SgDocButtonGroup", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/general/button-group.ts", lineNumber: 86 });
})();
export {
  SgDocButtonGroup
};
//# sourceMappingURL=chunk-V3QGWVMC.js.map
