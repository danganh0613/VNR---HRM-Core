import {
  HrmTagsCell
} from "./chunk-OSSXLHFH.js";
import {
  HrmAmountCell
} from "./chunk-E7SUKZ7E.js";
import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import {
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-63BVE4AM.js";
import "./chunk-UGXOFJ2W.js";
import "./chunk-MT7CL62E.js";
import "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-OCA5G42J.js";
import "./chunk-INGBAYOP.js";
import "./chunk-OVPA4RAH.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-ZUH7BZUU.js";
import "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
import {
  DecimalPipe,
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate4
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/grouped.ts
var _c0 = () => ({ label: "User Cell", route: "hrm/table-cells/user" });
var _c1 = () => ({ label: "Status Cell", route: "hrm/table-cells/status" });
var _c2 = () => ({ label: "Amount Cell", route: "hrm/table-cells/amount" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _forTrack0 = ($index, $item) => $item.dept;
var _forTrack1 = ($index, $item) => $item.name;
function SgDocGrouped_ng_template_27_For_17_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "hrm-user-cell", 14);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "hrm-tags-cell", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 11);
    \u0275\u0275element(7, "hrm-amount-cell", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "hrm-status-cell", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", r_r1.name)("sub", \u0275\u0275pipeBind1(3, 10, r_r1.pos))("colorful", true)("avatarSize", 34);
    \u0275\u0275advance(3);
    \u0275\u0275property("tags", ctx_r1.skillsOf(r_r1))("max", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", r_r1.salary);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r1.tone(r_r1.status))("label", ctx_r1.label(r_r1.status))("dot", true);
  }
}
function SgDocGrouped_ng_template_27_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 13)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, SgDocGrouped_ng_template_27_For_17_For_10_Template, 10, 12, "tr", null, _forTrack1);
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, g_r3.dept));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" \xB7 ", g_r3.rows.length, " ", \u0275\u0275pipeBind1(6, 7, "docs.gridGrouped.people"), " \xB7 ", \u0275\u0275pipeBind1(7, 9, "docs.gridGrouped.total"), " ", \u0275\u0275pipeBind2(8, 11, ctx_r1.groupTotal(g_r3), "1.0-0"), " \u20AB");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(g_r3.rows);
  }
}
function SgDocGrouped_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-table", 10)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, SgDocGrouped_ng_template_27_For_17_Template, 11, 14, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r1.groups)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "docs.gridGrouped.colEmployee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "docs.gridGrouped.colSkills"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "docs.gridGrouped.colSalary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "docs.gridGrouped.colStatus"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.groups);
  }
}
var SgDocGrouped = class _SgDocGrouped {
  constructor() {
    this.t = inject(TranslateService);
    this.groups = [
      { dept: "docs.gridGrouped.deptSales", rows: [
        { name: "Nguy\u1EC5n Minh Tu\u1EA5n", pos: "docs.gridGrouped.posManager", salary: 32e6, status: "active", skills: [{ label: "docs.gridGrouped.skillManagement", color: "blue" }, { label: "docs.gridGrouped.skillNegotiation", color: "purple" }] },
        { name: "Tr\u1EA7n Thu H\xE0", pos: "docs.gridGrouped.posStaff", salary: 18e6, status: "leave", skills: [{ label: "CRM", color: "green" }, { label: "Excel", color: "teal" }] }
      ] },
      { dept: "docs.gridGrouped.deptEng", rows: [
        { name: "L\xEA Qu\u1ED1c B\u1EA3o", pos: "docs.gridGrouped.posEngineer", salary: 25e6, status: "active", skills: [{ label: "Angular", color: "blue" }, { label: "Node", color: "green" }] },
        { name: "\u0110\u1ED7 V\u0103n Nam", pos: "docs.gridGrouped.posEngineer", salary: 24e6, status: "active", skills: [{ label: "Java", color: "orange" }, { label: "SQL", color: "cyan" }] },
        { name: "V\xF5 Th\xE0nh Trung", pos: "docs.gridGrouped.posIntern", salary: 8e6, status: "absent", skills: [{ label: "Git", color: "red" }] }
      ] },
      { dept: "docs.gridGrouped.deptFinance", rows: [
        { name: "B\xF9i H\u1EA3i Y\u1EBFn", pos: "docs.gridGrouped.posAccountant", salary: 2e7, status: "active", skills: [{ label: "docs.gridGrouped.skillAudit", color: "purple" }, { label: "Excel", color: "teal" }] }
      ] }
    ];
    this.when = ["docs.gridGrouped.when1", "docs.gridGrouped.when2"];
  }
  /** Nhãn kỹ năng: key domain → dịch qua translate; proper noun (Angular, Excel…) giữ literal. */
  skillsOf(r) {
    return r.skills.map((s) => __spreadProps(__spreadValues({}, s), { label: this.t.instant(s.label) }));
  }
  groupTotal(g) {
    return g.rows.reduce((s, r) => s + r.salary, 0);
  }
  tone(s) {
    return s === "active" ? "success" : s === "leave" ? "warning" : "error";
  }
  label(s) {
    return this.t.instant(s === "active" ? "docs.gridGrouped.statusActive" : s === "leave" ? "docs.gridGrouped.statusLeave" : "docs.gridGrouped.statusAbsent");
  }
  static {
    this.\u0275fac = function SgDocGrouped_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocGrouped)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocGrouped, selectors: [["sg-doc-grouped"]], decls: 29, vars: 41, consts: [["grid", ""], ["category", "Table & List", 3, "title", "desc", "related"], ["sgOverview", ""], [2, "width", "100%"], [3, "ngTemplateOutlet"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [2, "text-align", "right"], [1, "grp"], ["colspan", "4"], [3, "name", "sub", "colorful", "avatarSize"], [3, "tags", "max"], ["currency", "\u20AB", 3, "value"], ["variant", "badge", 3, "status", "label", "dot"]], template: function SgDocGrouped_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275elementContainer(5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "sg-use", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "sg-do");
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
        \u0275\u0275elementStart(21, "div", 8)(22, "sg-example", 9);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "div", 3);
        \u0275\u0275elementContainer(26, 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, SgDocGrouped_ng_template_27_Template, 18, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const grid_r4 = \u0275\u0275reference(28);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 14, "docs.gridGrouped.title"))("desc", \u0275\u0275pipeBind1(2, 16, "docs.gridGrouped.desc"))("related", \u0275\u0275pureFunction3(37, _c3, \u0275\u0275pureFunction0(34, _c0), \u0275\u0275pureFunction0(35, _c1), \u0275\u0275pureFunction0(36, _c2)));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngTemplateOutlet", grid_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 18, "docs.gridGrouped.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 20, "docs.gridGrouped.behavior"))("avoid", \u0275\u0275pipeBind1(10, 22, "docs.gridGrouped.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "docs.gridGrouped.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "docs.gridGrouped.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "docs.gridGrouped.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 30, "docs.gridGrouped.exT"))("desc", \u0275\u0275pipeBind1(24, 32, "docs.gridGrouped.exD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", grid_r4);
      }
    }, dependencies: [NgTemplateOutlet, TranslateModule, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, HrmUserCell, HrmTagsCell, HrmAmountCell, HrmStatusCell, SgDoc, SgUse, SgDo, SgDont, SgExample, DecimalPipe, TranslatePipe], styles: ["\n[_nghost-%COMP%]     tr.grp td {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-size: var(--fs-13);\n}\n/*# sourceMappingURL=grouped.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocGrouped, [{
    type: Component,
    args: [{ selector: "sg-doc-grouped", imports: [NgTemplateOutlet, DecimalPipe, TranslateModule, NzTableModule, HrmUserCell, HrmTagsCell, HrmAmountCell, HrmStatusCell, SgDoc, SgUse, SgDo, SgDont, SgExample], template: `
    <sg-doc category="Table & List" [title]="'docs.gridGrouped.title' | translate" [desc]="'docs.gridGrouped.desc' | translate"
      [related]="[{label:'User Cell', route:'hrm/table-cells/user'},{label:'Status Cell', route:'hrm/table-cells/status'},{label:'Amount Cell', route:'hrm/table-cells/amount'}]">

      <div sgOverview>
        <div style="width:100%"><ng-container [ngTemplateOutlet]="grid" /></div>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.gridGrouped.purpose' | translate" [when]="when"
          [behavior]="'docs.gridGrouped.behavior' | translate"
          [avoid]="'docs.gridGrouped.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.gridGrouped.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.gridGrouped.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.gridGrouped.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.gridGrouped.exT' | translate"
          [desc]="'docs.gridGrouped.exD' | translate">
          <div style="width:100%"><ng-container [ngTemplateOutlet]="grid" /></div>
        </sg-example>
      </div>

      <ng-template #grid>
        <nz-table [nzData]="groups" [nzShowPagination]="false" nzSize="small">
          <thead><tr><th>{{ 'docs.gridGrouped.colEmployee' | translate }}</th><th>{{ 'docs.gridGrouped.colSkills' | translate }}</th><th style="text-align:right">{{ 'docs.gridGrouped.colSalary' | translate }}</th><th>{{ 'docs.gridGrouped.colStatus' | translate }}</th></tr></thead>
          <tbody>
            @for (g of groups; track g.dept) {
              <tr class="grp">
                <td colspan="4"><b>{{ g.dept | translate }}</b> \xB7 {{ g.rows.length }} {{ 'docs.gridGrouped.people' | translate }} \xB7 {{ 'docs.gridGrouped.total' | translate }} {{ groupTotal(g) | number:'1.0-0' }} \u20AB</td>
              </tr>
              @for (r of g.rows; track r.name) {
                <tr>
                  <td><hrm-user-cell [name]="r.name" [sub]="r.pos | translate" [colorful]="true" [avatarSize]="34" /></td>
                  <td><hrm-tags-cell [tags]="skillsOf(r)" [max]="2" /></td>
                  <td style="text-align:right"><hrm-amount-cell [value]="r.salary" currency="\u20AB" /></td>
                  <td><hrm-status-cell [status]="tone(r.status)" [label]="label(r.status)" variant="badge" [dot]="true" /></td>
                </tr>
              }
            }
          </tbody>
        </nz-table>
      </ng-template>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;67b92999d66c8b68f8cacb846dd2bb3b1d8e580ad7e1402e7bb97536b27abb9b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/grouped.ts */\n:host ::ng-deep tr.grp td {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n  font-size: var(--fs-13);\n}\n/*# sourceMappingURL=grouped.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocGrouped, { className: "SgDocGrouped", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/grouped.ts", lineNumber: 69 });
})();
export {
  SgDocGrouped
};
//# sourceMappingURL=chunk-PREWZP7C.js.map
