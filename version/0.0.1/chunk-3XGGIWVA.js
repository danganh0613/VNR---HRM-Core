import {
  HrmTagsCell
} from "./chunk-OSSXLHFH.js";
import "./chunk-5U2K2VEK.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/tags-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/tag" });
var _c1 = (a0) => [a0];
var SgDocTagsCell = class _SgDocTagsCell {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.tagsCell.when1",
      "docs.tagsCell.when2",
      "docs.tagsCell.when3"
    ];
  }
  get skills() {
    return [
      { label: "Angular", color: "blue" },
      { label: "Figma", color: "purple" },
      { label: this.t.instant("docs.tagsCell.skRecruitment"), color: "green" },
      { label: this.t.instant("docs.tagsCell.skTraining"), color: "teal" },
      { label: "Excel", color: "orange" },
      { label: this.t.instant("docs.tagsCell.skPresentation"), color: "pink" }
    ];
  }
  get depts() {
    return [
      { label: this.t.instant("docs.tagsCell.deptHr"), color: "blue" },
      { label: this.t.instant("docs.tagsCell.deptAccounting"), color: "green" },
      { label: this.t.instant("docs.tagsCell.deptEngineering"), color: "purple" },
      { label: this.t.instant("docs.tagsCell.deptSales"), color: "orange" }
    ];
  }
  static {
    this.\u0275fac = function SgDocTagsCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTagsCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTagsCell, selectors: [["sg-doc-tags-cell"]], decls: 44, vars: 64, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "tags", "max"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["label", "max = 2"], ["label", "filled"], ["variant", "filled", 3, "tags", "max"], ["label", "light"], ["variant", "light", 3, "tags", "max"], ["label", "lighter"], ["variant", "lighter", 3, "tags", "max"], ["label", "stroke"], ["variant", "stroke", 3, "tags", "max"]], template: function SgDocTagsCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-tags-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "sg-use", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "sg-do");
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 6)(23, "sg-example", 7);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "sg-row");
        \u0275\u0275element(27, "hrm-tags-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "sg-example", 7);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row", 8);
        \u0275\u0275element(32, "hrm-tags-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "sg-example", 7);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row", 9);
        \u0275\u0275element(37, "hrm-tags-cell", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "sg-row", 11);
        \u0275\u0275element(39, "hrm-tags-cell", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "sg-row", 13);
        \u0275\u0275element(41, "hrm-tags-cell", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "sg-row", 15);
        \u0275\u0275element(43, "hrm-tags-cell", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 30, "docs.tagsCell.title"))("related", \u0275\u0275pureFunction1(62, _c1, \u0275\u0275pureFunction1(60, _c0, \u0275\u0275pipeBind1(2, 32, "docs.tagsCell.relTag"))))("desc", \u0275\u0275pipeBind1(3, 34, "docs.tagsCell.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("tags", ctx.skills)("max", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 36, "docs.tagsCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 38, "docs.tagsCell.behavior"))("avoid", \u0275\u0275pipeBind1(11, 40, "docs.tagsCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 42, "docs.tagsCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 44, "docs.tagsCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 46, "docs.tagsCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 48, "docs.tagsCell.exSkillsT"))("desc", \u0275\u0275pipeBind1(25, 50, "docs.tagsCell.exSkillsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("tags", ctx.skills)("max", 4);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 52, "docs.tagsCell.exMaxT"))("desc", \u0275\u0275pipeBind1(30, 54, "docs.tagsCell.exMaxD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("tags", ctx.skills)("max", 2);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 56, "docs.tagsCell.exVariantT"))("desc", \u0275\u0275pipeBind1(35, 58, "docs.tagsCell.exVariantD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("tags", ctx.depts)("max", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("tags", ctx.depts)("max", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("tags", ctx.depts)("max", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("tags", ctx.depts)("max", 3);
      }
    }, dependencies: [TranslateModule, HrmTagsCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTagsCell, [{
    type: Component,
    args: [{
      selector: "sg-doc-tags-cell",
      imports: [TranslateModule, HrmTagsCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Table Cells" [title]="'docs.tagsCell.title' | translate" [related]="[{label:('docs.tagsCell.relTag' | translate), route:'hrm/data-display/tag'}]"
      [desc]="'docs.tagsCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-tags-cell [tags]="skills" [max]="3" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.tagsCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.tagsCell.behavior' | translate"
          [avoid]="'docs.tagsCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.tagsCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.tagsCell.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.tagsCell.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.tagsCell.exSkillsT' | translate"
          [desc]="'docs.tagsCell.exSkillsD' | translate">
          <sg-row>
            <hrm-tags-cell [tags]="skills" [max]="4" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tagsCell.exMaxT' | translate"
          [desc]="'docs.tagsCell.exMaxD' | translate">
          <sg-row label="max = 2">
            <hrm-tags-cell [tags]="skills" [max]="2" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tagsCell.exVariantT' | translate"
          [desc]="'docs.tagsCell.exVariantD' | translate">
          <sg-row label="filled">
            <hrm-tags-cell [tags]="depts" variant="filled" [max]="3" />
          </sg-row>
          <sg-row label="light">
            <hrm-tags-cell [tags]="depts" variant="light" [max]="3" />
          </sg-row>
          <sg-row label="lighter">
            <hrm-tags-cell [tags]="depts" variant="lighter" [max]="3" />
          </sg-row>
          <sg-row label="stroke">
            <hrm-tags-cell [tags]="depts" variant="stroke" [max]="3" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTagsCell, { className: "SgDocTagsCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/tags-cell.ts", lineNumber: 70 });
})();
export {
  SgDocTagsCell
};
//# sourceMappingURL=chunk-3XGGIWVA.js.map
