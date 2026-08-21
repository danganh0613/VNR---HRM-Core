import {
  NzTooltipDirective
} from "./chunk-NGY4ECW2.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/chart/hrm-tracker.ts
function HrmTracker_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275property("nzTooltipTitle", it_r1.tooltip || null);
    \u0275\u0275attribute("data-tone", it_r1.tone);
  }
}
var HrmTracker = class _HrmTracker {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cellW = input(10, ...ngDevMode ? [{ debugName: "cellW" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cellH = input(24, ...ngDevMode ? [{ debugName: "cellH" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gap = input(3, ...ngDevMode ? [{ debugName: "gap" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTracker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTracker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTracker, selectors: [["hrm-tracker"]], hostAttrs: [1, "hrm-tracker"], hostVars: 6, hostBindings: function HrmTracker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("--_w", ctx.cellW() + "px")("--_h", ctx.cellH() + "px")("--_gap", ctx.gap() + "px");
      }
    }, inputs: { items: [1, "items"], cellW: [1, "cellW"], cellH: [1, "cellH"], gap: [1, "gap"] }, decls: 2, vars: 0, consts: [["nz-tooltip", "", 1, "tk-cell", 3, "nzTooltipTitle"]], template: function HrmTracker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmTracker_For_1_Template, 1, 2, "span", 0, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.items());
      }
    }, dependencies: [NzTooltipDirective], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--_gap, 3px);\n  max-width: 100%;\n  flex-wrap: wrap;\n}\n.tk-cell[_ngcontent-%COMP%] {\n  flex: none;\n  width: var(--_w, 10px);\n  height: var(--_h, 24px);\n  border-radius: var(--radius-xs, 2px);\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tk-cell[_ngcontent-%COMP%]:hover {\n  opacity: .75;\n}\n.tk-cell[data-tone=success][_ngcontent-%COMP%] {\n  background: var(--success-base);\n}\n.tk-cell[data-tone=warning][_ngcontent-%COMP%] {\n  background: var(--warning-base);\n}\n.tk-cell[data-tone=error][_ngcontent-%COMP%] {\n  background: var(--error-base);\n}\n.tk-cell[data-tone=info][_ngcontent-%COMP%] {\n  background: var(--info-base);\n}\n.tk-cell[data-tone=neutral][_ngcontent-%COMP%] {\n  background: var(--neutral-300, var(--border-sub));\n}\n/*# sourceMappingURL=hrm-tracker.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTracker, [{
    type: Component,
    args: [{ selector: "hrm-tracker", imports: [NzTooltipDirective], template: `
    @for (it of items(); track $index) {
      <span class="tk-cell" [attr.data-tone]="it.tone"
        nz-tooltip [nzTooltipTitle]="it.tooltip || null"></span>
    }
  `, host: {
      class: "hrm-tracker",
      "[style.--_w]": "cellW() + 'px'",
      "[style.--_h]": "cellH() + 'px'",
      "[style.--_gap]": "gap() + 'px'"
    }, styles: ["/* angular:styles/component:css;2669e0e9065202d79a3895f8668fc6b89870a31c776918d904053333a3f04dd3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/chart/hrm-tracker.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--_gap, 3px);\n  max-width: 100%;\n  flex-wrap: wrap;\n}\n.tk-cell {\n  flex: none;\n  width: var(--_w, 10px);\n  height: var(--_h, 24px);\n  border-radius: var(--radius-xs, 2px);\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.tk-cell:hover {\n  opacity: .75;\n}\n.tk-cell[data-tone=success] {\n  background: var(--success-base);\n}\n.tk-cell[data-tone=warning] {\n  background: var(--warning-base);\n}\n.tk-cell[data-tone=error] {\n  background: var(--error-base);\n}\n.tk-cell[data-tone=info] {\n  background: var(--info-base);\n}\n.tk-cell[data-tone=neutral] {\n  background: var(--neutral-300, var(--border-sub));\n}\n/*# sourceMappingURL=hrm-tracker.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], cellW: [{ type: Input, args: [{ isSignal: true, alias: "cellW", required: false }] }], cellH: [{ type: Input, args: [{ isSignal: true, alias: "cellH", required: false }] }], gap: [{ type: Input, args: [{ isSignal: true, alias: "gap", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTracker, { className: "HrmTracker", filePath: "libs/hrm-ui/src/lib/chart/hrm-tracker.ts", lineNumber: 43 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/tracker.ts
var _forTrack0 = ($index, $item) => $item.name;
function SgDocTracker_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hrm-tracker", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("items", r_r1.items)("cellW", 9)("cellH", 18);
  }
}
var SgDocTracker = class _SgDocTracker {
  constructor() {
    this.month = this.buildMonth(0);
    this.teamRows = [
      { name: "Nguy\u1EC5n V\u0103n An", items: this.buildMonth(1) },
      { name: "Tr\u1EA7n Thu H\xE0", items: this.buildMonth(2) },
      { name: "L\xEA Minh Qu\xE2n", items: this.buildMonth(3) }
    ];
    this.when = [
      "docs.tracker.when1",
      "docs.tracker.when2",
      "docs.tracker.when3"
    ];
  }
  /** Sinh 30 ngày mẫu, seed đổi nhịp giữa các dòng. */
  buildMonth(seed) {
    const t = inject(TranslateService);
    const weekend = t.instant("docs.tracker.tipWeekend");
    const present = t.instant("docs.tracker.tipPresent");
    const late = t.instant("docs.tracker.tipLate");
    const absent = t.instant("docs.tracker.tipAbsent");
    const out = [];
    for (let d = 1; d <= 30; d++) {
      const wd = (d + seed) % 7;
      if (wd === 0 || wd === 6) {
        out.push({ tone: "neutral", tooltip: `${String(d).padStart(2, "0")}/06 \u2014 ${weekend}` });
        continue;
      }
      const r = (d * 7 + seed * 13) % 10;
      const tone = r < 7 ? "success" : r < 9 ? "warning" : "error";
      const label = tone === "success" ? present : tone === "warning" ? late : absent;
      out.push({ tone, tooltip: `${String(d).padStart(2, "0")}/06 \u2014 ${label}` });
    }
    return out;
  }
  static {
    this.\u0275fac = function SgDocTracker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTracker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTracker, selectors: [["sg-doc-tracker"]], decls: 43, vars: 57, consts: [["category", "Chart", 3, "title", "desc"], ["sgOverview", ""], [3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [1, "col"], [1, "trow"], [3, "label"], [3, "items", "cellW", "cellH", "gap"], [1, "tname"], [3, "items", "cellW", "cellH"]], template: function SgDocTracker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row");
        \u0275\u0275element(5, "hrm-tracker", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275element(7, "sg-use", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "sg-do");
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
        \u0275\u0275elementStart(21, "div", 6)(22, "sg-example", 7);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "sg-row");
        \u0275\u0275element(26, "hrm-tracker", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "sg-example", 7);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "sg-row")(31, "div", 8);
        \u0275\u0275repeaterCreate(32, SgDocTracker_For_33_Template, 4, 4, "div", 9, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 7);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row", 10);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "div", 8);
        \u0275\u0275element(40, "hrm-tracker", 11)(41, "hrm-tracker", 2)(42, "hrm-tracker", 11);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 27, "docs.tracker.title"))("desc", \u0275\u0275pipeBind1(2, 29, "docs.tracker.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.month);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 31, "docs.tracker.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 33, "docs.tracker.behavior"))("avoid", \u0275\u0275pipeBind1(10, 35, "docs.tracker.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 37, "docs.tracker.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 39, "docs.tracker.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 41, "docs.tracker.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 43, "docs.tracker.exMonthT"))("desc", \u0275\u0275pipeBind1(24, 45, "docs.tracker.exMonthD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.month);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(28, 47, "docs.tracker.exTeamT"))("desc", \u0275\u0275pipeBind1(29, 49, "docs.tracker.exTeamD"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.teamRows);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 51, "docs.tracker.exSizeT"))("desc", \u0275\u0275pipeBind1(36, 53, "docs.tracker.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(38, 55, "docs.tracker.rowSize"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.month.slice(0, 14))("cellW", 14)("cellH", 32)("gap", 4);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.month.slice(0, 14));
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.month.slice(0, 14))("cellW", 6)("cellH", 12)("gap", 2);
      }
    }, dependencies: [TranslateModule, HrmTracker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: flex-start;\n}\n.trow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tname[_ngcontent-%COMP%] {\n  width: 120px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=tracker.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTracker, [{
    type: Component,
    args: [{ selector: "sg-doc-tracker", imports: [TranslateModule, HrmTracker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Chart" [title]="'docs.tracker.title' | translate" [desc]="'docs.tracker.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-tracker [items]="month" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.tracker.purpose' | translate"
          [when]="when"
          [behavior]="'docs.tracker.behavior' | translate"
          [avoid]="'docs.tracker.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.tracker.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.tracker.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.tracker.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.tracker.exMonthT' | translate"
          [desc]="'docs.tracker.exMonthD' | translate">
          <sg-row>
            <hrm-tracker [items]="month" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tracker.exTeamT' | translate"
          [desc]="'docs.tracker.exTeamD' | translate">
          <sg-row>
            <div class="col">
              @for (r of teamRows; track r.name) {
                <div class="trow">
                  <span class="tname">{{ r.name }}</span>
                  <hrm-tracker [items]="r.items" [cellW]="9" [cellH]="18" />
                </div>
              }
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tracker.exSizeT' | translate"
          [desc]="'docs.tracker.exSizeD' | translate">
          <sg-row [label]="'docs.tracker.rowSize' | translate">
            <div class="col">
              <hrm-tracker [items]="month.slice(0, 14)" [cellW]="14" [cellH]="32" [gap]="4" />
              <hrm-tracker [items]="month.slice(0, 14)" />
              <hrm-tracker [items]="month.slice(0, 14)" [cellW]="6" [cellH]="12" [gap]="2" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;abf019fc161ef327700eef022fbd9795cdfa8f98e3514fd137e7c40ebf1a637e;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/tracker.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: flex-start;\n}\n.trow {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tname {\n  width: 120px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=tracker.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTracker, { className: "SgDocTracker", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/chart/tracker.ts", lineNumber: 76 });
})();
export {
  SgDocTracker
};
//# sourceMappingURL=chunk-K5BFPL66.js.map
