import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  Star,
  StarFilled,
  StarHalfFilled,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/table-cells/hrm-rating-cell.ts
function HrmRatingCell_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 4);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rc-on", s_r1 > 0);
    \u0275\u0275property("icon", s_r1 === 2 ? ctx_r1.full : s_r1 === 1 ? ctx_r1.half : ctx_r1.empty)("size", ctx_r1.starSize());
  }
}
function HrmRatingCell_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value().toFixed(1));
  }
}
function HrmRatingCell_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.count(), ")");
  }
}
var HrmRatingCell = class _HrmRatingCell {
  constructor() {
    this.value = input(0, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(5, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.starSize = input(16, ...ngDevMode ? [{ debugName: "starSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showValue = input(false, ...ngDevMode ? [{ debugName: "showValue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.count = input(null, ...ngDevMode ? [{ debugName: "count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.full = StarFilled;
    this.half = StarHalfFilled;
    this.empty = Star;
    this.stars = computed(() => {
      const v = this.value();
      return Array.from({ length: this.max() }, (_, i) => v >= i + 1 ? 2 : v >= i + 0.5 ? 1 : 0);
    }, ...ngDevMode ? [{ debugName: "stars" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmRatingCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmRatingCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRatingCell, selectors: [["hrm-rating-cell"]], hostAttrs: [1, "hrm-rating-cell"], inputs: { value: [1, "value"], max: [1, "max"], starSize: [1, "starSize"], showValue: [1, "showValue"], count: [1, "count"] }, decls: 5, vars: 2, consts: [[1, "rc-stars"], [1, "rc-star", 3, "rc-on", "icon", "size"], [1, "rc-val"], [1, "rc-count"], [1, "rc-star", 3, "icon", "size"]], template: function HrmRatingCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275repeaterCreate(1, HrmRatingCell_For_2_Template, 1, 4, "tabler-icon", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, HrmRatingCell_Conditional_3_Template, 2, 1, "span", 2);
        \u0275\u0275conditionalCreate(4, HrmRatingCell_Conditional_4_Template, 2, 1, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stars());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showValue() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.count() != null ? 4 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.rc-stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n  color: var(--text-disabled);\n}\n.rc-star.rc-on[_ngcontent-%COMP%] {\n  color: var(--yellow-500);\n}\n.rc-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.rc-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-rating-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRatingCell, [{
    type: Component,
    args: [{ selector: "hrm-rating-cell", imports: [TablerIconComponent], template: `
    <span class="rc-stars">
      @for (s of stars(); track $index) {
        <tabler-icon
          class="rc-star"
          [class.rc-on]="s > 0"
          [icon]="s === 2 ? full : s === 1 ? half : empty"
          [size]="starSize()" />
      }
    </span>
    @if (showValue()) { <span class="rc-val">{{ value().toFixed(1) }}</span> }
    @if (count() != null) { <span class="rc-count">({{ count() }})</span> }
  `, host: { class: "hrm-rating-cell" }, styles: ["/* angular:styles/component:css;ef5fb6d8faa992c8808ef3b1da26f498a86d034f114dbdbde738e27c61806191;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-rating-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.rc-stars {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n  color: var(--text-disabled);\n}\n.rc-star.rc-on {\n  color: var(--yellow-500);\n}\n.rc-val {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n.rc-count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hrm-rating-cell.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], starSize: [{ type: Input, args: [{ isSignal: true, alias: "starSize", required: false }] }], showValue: [{ type: Input, args: [{ isSignal: true, alias: "showValue", required: false }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRatingCell, { className: "HrmRatingCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-rating-cell.ts", lineNumber: 31 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/rating-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-entry/rate" });
var _c1 = (a0) => [a0];
var SgDocRatingCell = class _SgDocRatingCell {
  constructor() {
    this.when = [
      "docs.ratingCell.when1",
      "docs.ratingCell.when2",
      "docs.ratingCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocRatingCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRatingCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRatingCell, selectors: [["sg-doc-rating-cell"]], decls: 61, vars: 97, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "value", "showValue", "count"], [3, "value"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["label", "5 \xB7 4,5 \xB7 3 \xB7 2,5"], [3, "value", "showValue"], [1, "col"]], template: function SgDocRatingCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-rating-cell", 2)(7, "hrm-rating-cell", 3);
        \u0275\u0275elementEnd()();
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
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-dont");
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
        \u0275\u0275element(34, "hrm-rating-cell", 3)(35, "hrm-rating-cell", 3)(36, "hrm-rating-cell", 3)(37, "hrm-rating-cell", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "sg-example", 8);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row");
        \u0275\u0275element(42, "hrm-rating-cell", 10)(43, "hrm-rating-cell", 10)(44, "hrm-rating-cell", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "sg-example", 8);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row");
        \u0275\u0275element(49, "hrm-rating-cell", 2)(50, "hrm-rating-cell", 2)(51, "hrm-rating-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "sg-example", 8);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "sg-row")(56, "div", 11);
        \u0275\u0275element(57, "hrm-rating-cell", 2)(58, "hrm-rating-cell", 2)(59, "hrm-rating-cell", 2)(60, "hrm-rating-cell", 2);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 55, "docs.ratingCell.title"))("related", \u0275\u0275pureFunction1(95, _c1, \u0275\u0275pureFunction1(93, _c0, \u0275\u0275pipeBind1(2, 57, "docs.ratingCell.relRate"))))("desc", \u0275\u0275pipeBind1(3, 59, "docs.ratingCell.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("value", 4.5)("showValue", true)("count", 128);
        \u0275\u0275advance();
        \u0275\u0275property("value", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 61, "docs.ratingCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 63, "docs.ratingCell.behavior"))("avoid", \u0275\u0275pipeBind1(12, 65, "docs.ratingCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 67, "docs.ratingCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 69, "docs.ratingCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 71, "docs.ratingCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 73, "docs.ratingCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 75, "docs.ratingCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 77, "docs.ratingCell.exLevelsT"))("desc", \u0275\u0275pipeBind1(32, 79, "docs.ratingCell.exLevelsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275property("value", 4.5);
        \u0275\u0275advance();
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275property("value", 2.5);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 81, "docs.ratingCell.exValueT"))("desc", \u0275\u0275pipeBind1(40, 83, "docs.ratingCell.exValueD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 4.5)("showValue", true);
        \u0275\u0275advance();
        \u0275\u0275property("value", 3.5)("showValue", true);
        \u0275\u0275advance();
        \u0275\u0275property("value", 2)("showValue", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 85, "docs.ratingCell.exCountT"))("desc", \u0275\u0275pipeBind1(47, 87, "docs.ratingCell.exCountD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("value", 4.5)("showValue", true)("count", 128);
        \u0275\u0275advance();
        \u0275\u0275property("value", 4)("showValue", true)("count", 36);
        \u0275\u0275advance();
        \u0275\u0275property("value", 5)("showValue", true)("count", 3);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(53, 89, "docs.ratingCell.exColumnT"))("desc", \u0275\u0275pipeBind1(54, 91, "docs.ratingCell.exColumnD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 4.5)("showValue", true)("count", 24);
        \u0275\u0275advance();
        \u0275\u0275property("value", 4)("showValue", true)("count", 24);
        \u0275\u0275advance();
        \u0275\u0275property("value", 3.5)("showValue", true)("count", 18);
        \u0275\u0275advance();
        \u0275\u0275property("value", 2.5)("showValue", true)("count", 12);
      }
    }, dependencies: [TranslateModule, HrmRatingCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=rating-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRatingCell, [{
    type: Component,
    args: [{ selector: "sg-doc-rating-cell", imports: [TranslateModule, HrmRatingCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.ratingCell.title' | translate" [related]="[{label:('docs.ratingCell.relRate' | translate), route:'hrm/data-entry/rate'}]"
      [desc]="'docs.ratingCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-rating-cell [value]="4.5" [showValue]="true" [count]="128" />
          <hrm-rating-cell [value]="3" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.ratingCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.ratingCell.behavior' | translate"
          [avoid]="'docs.ratingCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.ratingCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.ratingCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.ratingCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.ratingCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.ratingCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.ratingCell.exLevelsT' | translate"
          [desc]="'docs.ratingCell.exLevelsD' | translate">
          <sg-row label="5 \xB7 4,5 \xB7 3 \xB7 2,5">
            <hrm-rating-cell [value]="5" />
            <hrm-rating-cell [value]="4.5" />
            <hrm-rating-cell [value]="3" />
            <hrm-rating-cell [value]="2.5" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.ratingCell.exValueT' | translate"
          [desc]="'docs.ratingCell.exValueD' | translate">
          <sg-row>
            <hrm-rating-cell [value]="4.5" [showValue]="true" />
            <hrm-rating-cell [value]="3.5" [showValue]="true" />
            <hrm-rating-cell [value]="2" [showValue]="true" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.ratingCell.exCountT' | translate"
          [desc]="'docs.ratingCell.exCountD' | translate">
          <sg-row>
            <hrm-rating-cell [value]="4.5" [showValue]="true" [count]="128" />
            <hrm-rating-cell [value]="4" [showValue]="true" [count]="36" />
            <hrm-rating-cell [value]="5" [showValue]="true" [count]="3" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.ratingCell.exColumnT' | translate"
          [desc]="'docs.ratingCell.exColumnD' | translate">
          <sg-row>
            <div class="col">
              <hrm-rating-cell [value]="4.5" [showValue]="true" [count]="24" />
              <hrm-rating-cell [value]="4" [showValue]="true" [count]="24" />
              <hrm-rating-cell [value]="3.5" [showValue]="true" [count]="18" />
              <hrm-rating-cell [value]="2.5" [showValue]="true" [count]="12" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;64b37c3b65b9958fe7af5ff8565d208752985a1610f992015853471dd0c65207;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/rating-cell.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=rating-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRatingCell, { className: "SgDocRatingCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/rating-cell.ts", lineNumber: 84 });
})();
export {
  SgDocRatingCell
};
//# sourceMappingURL=chunk-63IQJAPE.js.map
