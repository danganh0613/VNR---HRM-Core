import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/pivot.ts
var _forTrack0 = ($index, $item) => $item.dept;
function SgDocPivot_For_24_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r1);
  }
}
function SgDocPivot_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SgDocPivot_For_24_For_5_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "td", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, r_r2.dept));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r2.q);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sum(r_r2.q));
  }
}
function SgDocPivot_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
  }
}
function SgDocPivot_For_71_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r5);
  }
}
function SgDocPivot_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SgDocPivot_For_71_For_5_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "td", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, r_r6.dept));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r6.q);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sum(r_r6.q));
  }
}
function SgDocPivot_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
var SgDocPivot = class _SgDocPivot {
  constructor() {
    this.rows = [
      { dept: "docs.gridPivot.deptSales", q: [12, 14, 15, 16] },
      { dept: "docs.gridPivot.deptEng", q: [20, 22, 25, 24] },
      { dept: "docs.gridPivot.deptHR", q: [6, 6, 7, 7] },
      { dept: "docs.gridPivot.deptFinance", q: [4, 4, 5, 5] }
    ];
    this.when = ["docs.gridPivot.when1", "docs.gridPivot.when2"];
  }
  sum(a) {
    return a.reduce((s, v) => s + v, 0);
  }
  get colTotals() {
    return [0, 1, 2, 3].map((i) => this.rows.reduce((s, r) => s + r.q[i], 0));
  }
  get grand() {
    return this.rows.reduce((s, r) => s + this.sum(r.q), 0);
  }
  static {
    this.\u0275fac = function SgDocPivot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocPivot)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocPivot, selectors: [["sg-doc-pivot"]], decls: 80, vars: 51, consts: [["category", "Table & List", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "overflow-x", "auto"], [1, "pv"], [1, "pv-corner"], [1, "pv-tot"], [1, "pv-total"], [1, "pv-row"], [2, "font-size", "var(--fs-13)", "color", "var(--warning-text)", "background", "var(--warning-bg)", "border", "1px solid var(--warning-border)", "border-radius", "var(--radius-md)", "padding", "8px 12px", "margin", "14px 0 0", 3, "innerHTML"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"]], template: function SgDocPivot_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "table", 3)(6, "thead")(7, "tr")(8, "th", 4);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Q1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Q2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "Q3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "th");
        \u0275\u0275text(18, "Q4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 5);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, SgDocPivot_For_24_Template, 8, 4, "tr", null, _forTrack0);
        \u0275\u0275elementStart(25, "tr", 6)(26, "th", 7);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, SgDocPivot_For_30_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(31, "td", 5);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(33, "p", 8);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 9);
        \u0275\u0275element(36, "sg-use", 10);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 11)(41, "sg-do");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "sg-dont");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 12)(48, "sg-example", 13);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "div", 2)(52, "table", 3)(53, "thead")(54, "tr")(55, "th", 4);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Q1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Q2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Q3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Q4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "th", 5);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "tbody");
        \u0275\u0275repeaterCreate(70, SgDocPivot_For_71_Template, 8, 4, "tr", null, _forTrack0);
        \u0275\u0275elementStart(72, "tr", 6)(73, "th", 7);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(76, SgDocPivot_For_77_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(78, "td", 5);
        \u0275\u0275text(79);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 19, "docs.gridPivot.title"))("desc", \u0275\u0275pipeBind1(2, 21, "docs.gridPivot.desc"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 23, "docs.gridPivot.corner"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 25, "docs.gridPivot.total"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.rows);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "docs.gridPivot.total"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.colTotals);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.grand);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(34, 29, "docs.gridPivot.mockNote"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(37, 31, "docs.gridPivot.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(38, 33, "docs.gridPivot.behavior"))("avoid", \u0275\u0275pipeBind1(39, 35, "docs.gridPivot.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 37, "docs.gridPivot.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 39, "docs.gridPivot.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(49, 41, "docs.gridPivot.exT"))("desc", \u0275\u0275pipeBind1(50, 43, "docs.gridPivot.exD"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 45, "docs.gridPivot.corner"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 47, "docs.gridPivot.total"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.rows);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 49, "docs.gridPivot.total"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.colTotals);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.grand);
      }
    }, dependencies: [TranslateModule, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], styles: ["\n.pv[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  font-size: var(--fs-13);\n  min-width: 480px;\n}\n.pv[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pv[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  padding: 8px 14px;\n  text-align: right;\n  color: var(--text-body);\n}\n.pv[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-weight: 600;\n  text-align: right;\n}\n.pv[_ngcontent-%COMP%]   .pv-corner[_ngcontent-%COMP%], \n.pv[_ngcontent-%COMP%]   .pv-row[_ngcontent-%COMP%] {\n  text-align: left;\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-weight: 600;\n}\n.pv[_ngcontent-%COMP%]   .pv-tot[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 600;\n}\n.pv[_ngcontent-%COMP%]   .pv-total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pv[_ngcontent-%COMP%]   .pv-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-surface-muted);\n  color: var(--text-strong);\n  font-weight: 600;\n}\n/*# sourceMappingURL=pivot.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocPivot, [{
    type: Component,
    args: [{ selector: "sg-doc-pivot", imports: [TranslateModule, SgDoc, SgUse, SgDo, SgDont, SgExample], template: `
    <sg-doc category="Table & List" [title]="'docs.gridPivot.title' | translate" [desc]="'docs.gridPivot.desc' | translate">

      <div sgOverview>
        <div style="width:100%;overflow-x:auto">
          <table class="pv">
            <thead>
              <tr><th class="pv-corner">{{ 'docs.gridPivot.corner' | translate }}</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th class="pv-tot">{{ 'docs.gridPivot.total' | translate }}</th></tr>
            </thead>
            <tbody>
              @for (r of rows; track r.dept) {
                <tr><th class="pv-row">{{ r.dept | translate }}</th>
                  @for (v of r.q; track $index) { <td>{{ v }}</td> }
                  <td class="pv-tot">{{ sum(r.q) }}</td>
                </tr>
              }
              <tr class="pv-total"><th class="pv-row">{{ 'docs.gridPivot.total' | translate }}</th>
                @for (c of colTotals; track $index) { <td>{{ c }}</td> }
                <td class="pv-tot">{{ grand }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: var(--fs-13);color:var(--warning-text);background:var(--warning-bg);border:1px solid var(--warning-border);border-radius:var(--radius-md);padding:8px 12px;margin:14px 0 0" [innerHTML]="'docs.gridPivot.mockNote' | translate"></p>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.gridPivot.purpose' | translate" [when]="when"
          [behavior]="'docs.gridPivot.behavior' | translate"
          [avoid]="'docs.gridPivot.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.gridPivot.do1' | translate }}</sg-do>
        <sg-dont>{{ 'docs.gridPivot.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.gridPivot.exT' | translate"
          [desc]="'docs.gridPivot.exD' | translate">
          <div style="width:100%;overflow-x:auto">
            <table class="pv">
              <thead><tr><th class="pv-corner">{{ 'docs.gridPivot.corner' | translate }}</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th class="pv-tot">{{ 'docs.gridPivot.total' | translate }}</th></tr></thead>
              <tbody>
                @for (r of rows; track r.dept) {
                  <tr><th class="pv-row">{{ r.dept | translate }}</th>@for (v of r.q; track $index) { <td>{{ v }}</td> }<td class="pv-tot">{{ sum(r.q) }}</td></tr>
                }
                <tr class="pv-total"><th class="pv-row">{{ 'docs.gridPivot.total' | translate }}</th>@for (c of colTotals; track $index) { <td>{{ c }}</td> }<td class="pv-tot">{{ grand }}</td></tr>
              </tbody>
            </table>
          </div>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;96bb22962dce181050de4f9acfe8b3f43571e68ce0f4e1942223968eb1f06036;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/pivot.ts */\n.pv {\n  border-collapse: collapse;\n  font-size: var(--fs-13);\n  min-width: 480px;\n}\n.pv th,\n.pv td {\n  border: 1px solid var(--border-sub);\n  padding: 8px 14px;\n  text-align: right;\n  color: var(--text-body);\n}\n.pv thead th {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-weight: 600;\n  text-align: right;\n}\n.pv .pv-corner,\n.pv .pv-row {\n  text-align: left;\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-weight: 600;\n}\n.pv .pv-tot {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 600;\n}\n.pv .pv-total th,\n.pv .pv-total td {\n  background: var(--bg-surface-muted);\n  color: var(--text-strong);\n  font-weight: 600;\n}\n/*# sourceMappingURL=pivot.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocPivot, { className: "SgDocPivot", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/pivot.ts", lineNumber: 76 });
})();
export {
  SgDocPivot
};
//# sourceMappingURL=chunk-MZRMQZ5Q.js.map
