import {
  HrmQuickFilter
} from "./chunk-CJKFUWVC.js";
import "./chunk-KGPHHG27.js";
import "./chunk-BKAPBN54.js";
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
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
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
import "./chunk-QL2Z65KF.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/quick-filter.ts
var SgDocQuickFilter = class _SgDocQuickFilter {
  constructor() {
    this.when = ["docs.quickFilter.when1", "docs.quickFilter.when2", "docs.quickFilter.when3"];
    this.langs = [
      { value: "en", label: "English" },
      { value: "af", label: "Afrikaans" },
      { value: "ar", label: "Arabic" },
      { value: "hy", label: "Armenian" },
      { value: "az", label: "Azerbaijani" },
      { value: "be", label: "Belarusian" },
      { value: "bs", label: "Bosnian" },
      { value: "bg", label: "Bulgarian" },
      { value: "ca", label: "Catalan" },
      { value: "vi", label: "Ti\u1EBFng Vi\u1EC7t" }
    ];
    this.sorts = [
      { value: "newest", label: "M\u1EDBi nh\u1EA5t" },
      { value: "oldest", label: "C\u0169 nh\u1EA5t" },
      { value: "az", label: "T\xEAn A\u2192Z" },
      { value: "za", label: "T\xEAn Z\u2192A" }
    ];
    this.depts = [
      { value: "it", label: "K\u1EF9 thu\u1EADt" },
      { value: "biz", label: "Kinh doanh" },
      { value: "hr", label: "Nh\xE2n s\u1EF1" },
      { value: "acc", label: "K\u1EBF to\xE1n" },
      { value: "mkt", label: "Marketing" }
    ];
    this.statuses = [
      { value: "active", label: "\u0110ang l\xE0m vi\u1EC7c" },
      { value: "leave", label: "Ngh\u1EC9 ph\xE9p" },
      { value: "off", label: "\u0110\xE3 ngh\u1EC9 vi\u1EC7c" }
    ];
    this.langSel = ["en", "af", "ar", "az", "bs"];
    this.sortSel = [];
    this.exMulti = [];
    this.exSingle = ["newest"];
    this.exDept = [];
    this.exStatus = [];
  }
  static {
    this.\u0275fac = function SgDocQuickFilter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocQuickFilter)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocQuickFilter, selectors: [["sg-doc-quick-filter"]], decls: 72, vars: 145, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [1, "tb"], [3, "valueChange", "label", "unit", "options", "value", "searchPlaceholder", "selectAllLabel", "deselectAllLabel", "emptyText"], ["mode", "single", 3, "valueChange", "label", "options", "value", "searchable", "selectAllLabel", "deselectAllLabel", "emptyText"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], ["mode", "single", 3, "valueChange", "label", "options", "value", "searchable", "emptyText"]], template: function SgDocQuickFilter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row")(5, "div", 2)(6, "hrm-quick-filter", 3);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.langSel, $event) || (ctx.langSel = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "hrm-quick-filter", 4);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortSel, $event) || (ctx.sortSel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 5);
        \u0275\u0275element(19, "sg-use", 6);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7)(24, "sg-do");
        \u0275\u0275element(25, "span", 8);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-do");
        \u0275\u0275element(28, "span", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-dont");
        \u0275\u0275element(31, "span", 8);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-dont");
        \u0275\u0275element(34, "span", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 9)(37, "sg-example", 10);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "hrm-quick-filter", 3);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exMulti, $event) || (ctx.exMulti = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "sg-example", 10);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "sg-row")(52, "hrm-quick-filter", 4);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_52_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exSingle, $event) || (ctx.exSingle = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "sg-example", 10);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "sg-row")(61, "div", 2)(62, "hrm-quick-filter", 3);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exDept, $event) || (ctx.exDept = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "hrm-quick-filter", 11);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocQuickFilter_Template_hrm_quick_filter_valueChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.exStatus, $event) || (ctx.exStatus = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 59, "docs.quickFilter.title"))("desc", \u0275\u0275pipeBind1(2, 61, "docs.quickFilter.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 63, "docs.quickFilter.demoLang"))("unit", \u0275\u0275pipeBind1(8, 65, "docs.quickFilter.demoLangUnit"))("options", ctx.langs);
        \u0275\u0275twoWayProperty("value", ctx.langSel);
        \u0275\u0275property("searchPlaceholder", \u0275\u0275pipeBind1(9, 67, "docs.quickFilter.searchPh"))("selectAllLabel", \u0275\u0275pipeBind1(10, 69, "docs.quickFilter.selectAll"))("deselectAllLabel", \u0275\u0275pipeBind1(11, 71, "docs.quickFilter.deselectAll"))("emptyText", \u0275\u0275pipeBind1(12, 73, "docs.quickFilter.empty"));
        \u0275\u0275advance(7);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 75, "docs.quickFilter.demoSort"))("options", ctx.sorts);
        \u0275\u0275twoWayProperty("value", ctx.sortSel);
        \u0275\u0275property("searchable", false)("selectAllLabel", \u0275\u0275pipeBind1(15, 77, "docs.quickFilter.selectAll"))("deselectAllLabel", \u0275\u0275pipeBind1(16, 79, "docs.quickFilter.deselectAll"))("emptyText", \u0275\u0275pipeBind1(17, 81, "docs.quickFilter.empty"));
        \u0275\u0275advance(6);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(20, 83, "docs.quickFilter.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(21, 85, "docs.quickFilter.behavior"))("avoid", \u0275\u0275pipeBind1(22, 87, "docs.quickFilter.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 89, "docs.quickFilter.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(29, 91, "docs.quickFilter.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(32, 93, "docs.quickFilter.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(35, 95, "docs.quickFilter.dont2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 97, "docs.quickFilter.exMultiT"))("desc", \u0275\u0275pipeBind1(39, 99, "docs.quickFilter.exMultiD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 101, "docs.quickFilter.demoLang"))("unit", \u0275\u0275pipeBind1(43, 103, "docs.quickFilter.demoLangUnit"))("options", ctx.langs);
        \u0275\u0275twoWayProperty("value", ctx.exMulti);
        \u0275\u0275property("searchPlaceholder", \u0275\u0275pipeBind1(44, 105, "docs.quickFilter.searchPh"))("selectAllLabel", \u0275\u0275pipeBind1(45, 107, "docs.quickFilter.selectAll"))("deselectAllLabel", \u0275\u0275pipeBind1(46, 109, "docs.quickFilter.deselectAll"))("emptyText", \u0275\u0275pipeBind1(47, 111, "docs.quickFilter.empty"));
        \u0275\u0275advance(7);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(49, 113, "docs.quickFilter.exSingleT"))("desc", \u0275\u0275pipeBind1(50, 115, "docs.quickFilter.exSingleD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(53, 117, "docs.quickFilter.demoSort"))("options", ctx.sorts);
        \u0275\u0275twoWayProperty("value", ctx.exSingle);
        \u0275\u0275property("searchable", false)("selectAllLabel", \u0275\u0275pipeBind1(54, 119, "docs.quickFilter.selectAll"))("deselectAllLabel", \u0275\u0275pipeBind1(55, 121, "docs.quickFilter.deselectAll"))("emptyText", \u0275\u0275pipeBind1(56, 123, "docs.quickFilter.empty"));
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(58, 125, "docs.quickFilter.exGroupT"))("desc", \u0275\u0275pipeBind1(59, 127, "docs.quickFilter.exGroupD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(63, 129, "docs.quickFilter.demoDept"))("unit", \u0275\u0275pipeBind1(64, 131, "docs.quickFilter.demoDeptUnit"))("options", ctx.depts);
        \u0275\u0275twoWayProperty("value", ctx.exDept);
        \u0275\u0275property("searchPlaceholder", \u0275\u0275pipeBind1(65, 133, "docs.quickFilter.searchPh"))("selectAllLabel", \u0275\u0275pipeBind1(66, 135, "docs.quickFilter.selectAll"))("deselectAllLabel", \u0275\u0275pipeBind1(67, 137, "docs.quickFilter.deselectAll"))("emptyText", \u0275\u0275pipeBind1(68, 139, "docs.quickFilter.empty"));
        \u0275\u0275advance(7);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(70, 141, "docs.quickFilter.demoStatus"))("options", ctx.statuses);
        \u0275\u0275twoWayProperty("value", ctx.exStatus);
        \u0275\u0275property("searchable", false)("emptyText", \u0275\u0275pipeBind1(71, 143, "docs.quickFilter.empty"));
      }
    }, dependencies: [TranslateModule, HrmQuickFilter, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.tb[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=quick-filter.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocQuickFilter, [{
    type: Component,
    args: [{ selector: "sg-doc-quick-filter", imports: [TranslateModule, HrmQuickFilter, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Data Input" [title]="'docs.quickFilter.title' | translate" [desc]="'docs.quickFilter.desc' | translate">

      <div sgOverview>
        <sg-row>
          <div class="tb">
            <hrm-quick-filter [label]="'docs.quickFilter.demoLang' | translate" [unit]="'docs.quickFilter.demoLangUnit' | translate"
              [options]="langs" [(value)]="langSel"
              [searchPlaceholder]="'docs.quickFilter.searchPh' | translate"
              [selectAllLabel]="'docs.quickFilter.selectAll' | translate"
              [deselectAllLabel]="'docs.quickFilter.deselectAll' | translate"
              [emptyText]="'docs.quickFilter.empty' | translate" />
            <hrm-quick-filter [label]="'docs.quickFilter.demoSort' | translate" mode="single"
              [options]="sorts" [(value)]="sortSel" [searchable]="false"
              [selectAllLabel]="'docs.quickFilter.selectAll' | translate"
              [deselectAllLabel]="'docs.quickFilter.deselectAll' | translate"
              [emptyText]="'docs.quickFilter.empty' | translate" />
          </div>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.quickFilter.purpose' | translate"
          [when]="when"
          [behavior]="'docs.quickFilter.behavior' | translate"
          [avoid]="'docs.quickFilter.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.quickFilter.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.quickFilter.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.quickFilter.dont1' | translate"></span></sg-dont>
        <sg-dont><span [innerHTML]="'docs.quickFilter.dont2' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.quickFilter.exMultiT' | translate" [desc]="'docs.quickFilter.exMultiD' | translate">
          <sg-row>
            <hrm-quick-filter [label]="'docs.quickFilter.demoLang' | translate" [unit]="'docs.quickFilter.demoLangUnit' | translate"
              [options]="langs" [(value)]="exMulti"
              [searchPlaceholder]="'docs.quickFilter.searchPh' | translate"
              [selectAllLabel]="'docs.quickFilter.selectAll' | translate"
              [deselectAllLabel]="'docs.quickFilter.deselectAll' | translate"
              [emptyText]="'docs.quickFilter.empty' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.quickFilter.exSingleT' | translate" [desc]="'docs.quickFilter.exSingleD' | translate">
          <sg-row>
            <hrm-quick-filter [label]="'docs.quickFilter.demoSort' | translate" mode="single"
              [options]="sorts" [(value)]="exSingle" [searchable]="false"
              [selectAllLabel]="'docs.quickFilter.selectAll' | translate"
              [deselectAllLabel]="'docs.quickFilter.deselectAll' | translate"
              [emptyText]="'docs.quickFilter.empty' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.quickFilter.exGroupT' | translate" [desc]="'docs.quickFilter.exGroupD' | translate">
          <sg-row>
            <div class="tb">
              <hrm-quick-filter [label]="'docs.quickFilter.demoDept' | translate" [unit]="'docs.quickFilter.demoDeptUnit' | translate"
                [options]="depts" [(value)]="exDept"
                [searchPlaceholder]="'docs.quickFilter.searchPh' | translate"
                [selectAllLabel]="'docs.quickFilter.selectAll' | translate"
                [deselectAllLabel]="'docs.quickFilter.deselectAll' | translate"
                [emptyText]="'docs.quickFilter.empty' | translate" />
              <hrm-quick-filter [label]="'docs.quickFilter.demoStatus' | translate" mode="single"
                [options]="statuses" [(value)]="exStatus" [searchable]="false"
                [emptyText]="'docs.quickFilter.empty' | translate" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;e272e778abba342daed945571006cd7d2359b8551dcf6ce8f8ad63ece3b9d9c6;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/quick-filter.ts */\n.tb {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=quick-filter.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocQuickFilter, { className: "SgDocQuickFilter", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/quick-filter.ts", lineNumber: 94 });
})();
export {
  SgDocQuickFilter
};
//# sourceMappingURL=chunk-LHQKXMO2.js.map
