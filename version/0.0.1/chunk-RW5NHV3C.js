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
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/chart/hrm-category-bar.ts
var _forTrack0 = ($index, $item) => $item.label;
function HrmCategoryBar_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 3);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275styleProp("flex-grow", s_r1.value)("background", s_r1.color);
  }
}
function HrmCategoryBar_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275domElement(1, "span", 5);
    \u0275\u0275domElementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", s_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r2.pct, "%");
  }
}
function HrmCategoryBar_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, HrmCategoryBar_Conditional_3_For_2_Template, 6, 4, "span", 4, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.segs());
  }
}
var HrmCategoryBar = class _HrmCategoryBar {
  constructor() {
    this.segments = input([], ...ngDevMode ? [{ debugName: "segments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showLegend = input(true, ...ngDevMode ? [{ debugName: "showLegend" }] : (
      /* istanbul ignore next */
      []
    ));
    this.segs = computed(() => {
      const items = this.segments();
      const total = items.reduce((s, i) => s + i.value, 0) || 1;
      return items.map((i, idx) => ({
        label: i.label,
        value: i.value,
        pct: Math.round(i.value / total * 1e3) / 10,
        // Mặc định xoay vòng bảng màu dữ liệu --data-1..10.
        color: i.color || `var(--data-${idx % 10 + 1})`
      }));
    }, ...ngDevMode ? [{ debugName: "segs" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmCategoryBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCategoryBar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCategoryBar, selectors: [["hrm-category-bar"]], hostAttrs: [1, "hrm-category-bar"], inputs: { segments: [1, "segments"], showLegend: [1, "showLegend"] }, decls: 4, vars: 1, consts: [[1, "cb-bar"], [1, "cb-seg", 3, "flex-grow", "background"], [1, "cb-legend"], [1, "cb-seg"], [1, "cb-item"], [1, "cb-dot"], [1, "cb-lbl"], [1, "cb-pct"]], template: function HrmCategoryBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, HrmCategoryBar_For_2_Template, 1, 4, "div", 1, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(3, HrmCategoryBar_Conditional_3_Template, 3, 0, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.segs());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showLegend() ? 3 : -1);
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n.cb-bar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 12px;\n  border-radius: var(--radius-full);\n  overflow: hidden;\n  gap: 2px;\n}\n.cb-seg[_ngcontent-%COMP%] {\n  min-width: 4px;\n}\n.cb-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 16px;\n}\n.cb-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n}\n.cb-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  flex: none;\n}\n.cb-lbl[_ngcontent-%COMP%] {\n  color: var(--text-body);\n}\n.cb-pct[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-category-bar.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCategoryBar, [{
    type: Component,
    args: [{ selector: "hrm-category-bar", template: `
    <div class="cb-bar">
      @for (s of segs(); track s.label) {
        <div class="cb-seg" [style.flex-grow]="s.value" [style.background]="s.color"></div>
      }
    </div>
    @if (showLegend()) {
      <div class="cb-legend">
        @for (s of segs(); track s.label) {
          <span class="cb-item">
            <span class="cb-dot" [style.background]="s.color"></span>
            <span class="cb-lbl">{{ s.label }}</span>
            <span class="cb-pct">{{ s.pct }}%</span>
          </span>
        }
      </div>
    }
  `, host: { class: "hrm-category-bar" }, styles: ["/* angular:styles/component:css;f4fde72199d0c914f952d4297412e3e1630c876c9787a0023816c35b8300b656;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/chart/hrm-category-bar.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n.cb-bar {\n  display: flex;\n  height: 12px;\n  border-radius: var(--radius-full);\n  overflow: hidden;\n  gap: 2px;\n}\n.cb-seg {\n  min-width: 4px;\n}\n.cb-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 16px;\n}\n.cb-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n}\n.cb-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  flex: none;\n}\n.cb-lbl {\n  color: var(--text-body);\n}\n.cb-pct {\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-category-bar.css.map */\n"] }]
  }], null, { segments: [{ type: Input, args: [{ isSignal: true, alias: "segments", required: false }] }], showLegend: [{ type: Input, args: [{ isSignal: true, alias: "showLegend", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCategoryBar, { className: "HrmCategoryBar", filePath: "libs/hrm-ui/src/lib/chart/hrm-category-bar.ts", lineNumber: 44 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/category-bar.ts
var SgDocCategoryBar = class _SgDocCategoryBar {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.categoryBar.when1",
      "docs.categoryBar.when2",
      "docs.categoryBar.when3"
    ];
  }
  tr(key) {
    return this.t.instant("docs.categoryBar." + key);
  }
  get contract() {
    return [
      { label: this.tr("segOfficial"), value: 182 },
      { label: this.tr("segProbation"), value: 34 },
      { label: this.tr("segSeasonal"), value: 22 },
      { label: this.tr("segIntern"), value: 10 }
    ];
  }
  get requests() {
    return [
      { label: this.tr("segApproved"), value: 64, color: "var(--success-base)" },
      { label: this.tr("segPending"), value: 21, color: "var(--warning-base)" },
      { label: this.tr("segRejected"), value: 8, color: "var(--error-base)" }
    ];
  }
  static {
    this.\u0275fac = function SgDocCategoryBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCategoryBar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCategoryBar, selectors: [["sg-doc-category-bar"]], decls: 40, vars: 48, consts: [["category", "Chart", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "460px"], [3, "segments"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "260px"], [3, "segments", "showLegend"]], template: function SgDocCategoryBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-category-bar", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "sg-example", 8);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "sg-row")(26, "div", 2);
        \u0275\u0275element(27, "hrm-category-bar", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 2);
        \u0275\u0275element(33, "hrm-category-bar", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row")(38, "div", 9);
        \u0275\u0275element(39, "hrm-category-bar", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 20, "docs.categoryBar.title"))("desc", \u0275\u0275pipeBind1(2, 22, "docs.categoryBar.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("segments", ctx.contract);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 24, "docs.categoryBar.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 26, "docs.categoryBar.behavior"))("avoid", \u0275\u0275pipeBind1(10, 28, "docs.categoryBar.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 30, "docs.categoryBar.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 32, "docs.categoryBar.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 34, "docs.categoryBar.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 36, "docs.categoryBar.exContractT"))("desc", \u0275\u0275pipeBind1(24, 38, "docs.categoryBar.exContractD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("segments", ctx.contract);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 40, "docs.categoryBar.exColorT"))("desc", \u0275\u0275pipeBind1(30, 42, "docs.categoryBar.exColorD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("segments", ctx.requests);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 44, "docs.categoryBar.exNoLegendT"))("desc", \u0275\u0275pipeBind1(36, 46, "docs.categoryBar.exNoLegendD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("segments", ctx.contract)("showLegend", false);
      }
    }, dependencies: [TranslateModule, HrmCategoryBar, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCategoryBar, [{
    type: Component,
    args: [{
      selector: "sg-doc-category-bar",
      imports: [TranslateModule, HrmCategoryBar, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Chart" [title]="'docs.categoryBar.title' | translate" [desc]="'docs.categoryBar.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:460px">
          <hrm-category-bar [segments]="contract" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.categoryBar.purpose' | translate"
          [when]="when"
          [behavior]="'docs.categoryBar.behavior' | translate"
          [avoid]="'docs.categoryBar.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.categoryBar.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.categoryBar.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.categoryBar.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.categoryBar.exContractT' | translate"
          [desc]="'docs.categoryBar.exContractD' | translate">
          <sg-row>
            <div style="width:100%;max-width:460px"><hrm-category-bar [segments]="contract" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.categoryBar.exColorT' | translate"
          [desc]="'docs.categoryBar.exColorD' | translate">
          <sg-row>
            <div style="width:100%;max-width:460px"><hrm-category-bar [segments]="requests" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.categoryBar.exNoLegendT' | translate"
          [desc]="'docs.categoryBar.exNoLegendD' | translate">
          <sg-row>
            <div style="width:260px"><hrm-category-bar [segments]="contract" [showLegend]="false" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCategoryBar, { className: "SgDocCategoryBar", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/category-bar.ts", lineNumber: 60 });
})();
export {
  SgDocCategoryBar
};
//# sourceMappingURL=chunk-RW5NHV3C.js.map
