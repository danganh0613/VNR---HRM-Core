import {
  HrmPagination
} from "./chunk-NJREMSLK.js";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-U557YZUX.js";
import "./chunk-PSR5ADGK.js";
import "./chunk-KGPHHG27.js";
import "./chunk-JUFZRQMG.js";
import "./chunk-TUHU6AB5.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
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
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/pagination.ts
var _forTrack0 = ($index, $item) => $item.code;
function SgDocPagination_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.dept);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.salary);
  }
}
var SgDocPagination = class _SgDocPagination {
  constructor() {
    this.t = inject(TranslateService);
    this.when = ["docs.pagination.when1", "docs.pagination.when2"];
    this.pageIndex = signal(1, ...ngDevMode ? [{ debugName: "pageIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = signal(5, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageRows = computed(() => {
      const start = (this.pageIndex() - 1) * this.pageSize();
      return this.emps.slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "pageRows" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  get emps() {
    const dSales = this.t.instant("docs.pagination.deptSales");
    const dEng = this.t.instant("docs.pagination.deptEng");
    const dFinance = this.t.instant("docs.pagination.deptFinance");
    const dHR = this.t.instant("docs.pagination.deptHR");
    return [
      { code: "NV-001", name: "Nguy\u1EC5n Minh Tu\u1EA5n", dept: dSales, salary: "32.000.000 \u20AB" },
      { code: "NV-002", name: "Tr\u1EA7n Thu H\xE0", dept: dSales, salary: "18.000.000 \u20AB" },
      { code: "NV-003", name: "L\xEA Qu\u1ED1c B\u1EA3o", dept: dEng, salary: "25.000.000 \u20AB" },
      { code: "NV-004", name: "\u0110\u1ED7 V\u0103n Nam", dept: dEng, salary: "24.000.000 \u20AB" },
      { code: "NV-005", name: "V\xF5 Th\xE0nh Trung", dept: dEng, salary: "8.000.000 \u20AB" },
      { code: "NV-006", name: "B\xF9i H\u1EA3i Y\u1EBFn", dept: dFinance, salary: "20.000.000 \u20AB" },
      { code: "NV-007", name: "Ph\u1EA1m Gia Huy", dept: dHR, salary: "17.000.000 \u20AB" },
      { code: "NV-008", name: "\u0110\u1EB7ng Kh\xE1nh Linh", dept: dHR, salary: "19.000.000 \u20AB" },
      { code: "NV-009", name: "Ho\xE0ng Anh D\u0169ng", dept: dSales, salary: "22.000.000 \u20AB" },
      { code: "NV-010", name: "Ng\xF4 B\xEDch Ng\u1ECDc", dept: dFinance, salary: "21.000.000 \u20AB" },
      { code: "NV-011", name: "V\u0169 \u0110\u1EE9c Th\u1ECBnh", dept: dEng, salary: "26.000.000 \u20AB" },
      { code: "NV-012", name: "L\xFD Thanh Mai", dept: dHR, salary: "16.000.000 \u20AB" }
    ];
  }
  static {
    this.\u0275fac = function SgDocPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocPagination)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocPagination, selectors: [["sg-doc-pagination"]], decls: 59, vars: 78, consts: [["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], [3, "pageIndex", "total", "showSizeChanger"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "simple", "pageIndex", "total"], [3, "showSizeChanger", "pageIndex", "total"], [3, "pageIndex", "total"], [2, "width", "100%"], ["nzSize", "small", 3, "nzData", "nzShowPagination", "nzBordered"], [2, "text-align", "right"], [2, "display", "flex", "justify-content", "flex-end", "margin-top", "12px"], ["size", "small", 3, "pageIndexChange", "pageIndex", "pageSize", "total"]], template: function SgDocPagination_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275element(4, "hrm-pagination", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "sg-use", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "sg-do");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "sg-do");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-dont");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "sg-example", 7);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementStart(24, "sg-row");
        \u0275\u0275element(25, "hrm-pagination", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "sg-example", 7);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275element(31, "hrm-pagination", 9)(32, "hrm-pagination", 10)(33, "hrm-pagination", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "sg-example", 7);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row")(38, "div", 12)(39, "nz-table", 13)(40, "thead")(41, "tr")(42, "th");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "th", 14);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "tbody");
        \u0275\u0275repeaterCreate(55, SgDocPagination_For_56_Template, 9, 4, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 15)(58, "hrm-pagination", 16);
        \u0275\u0275listener("pageIndexChange", function SgDocPagination_Template_hrm_pagination_pageIndexChange_58_listener($event) {
          return ctx.pageIndex.set($event);
        });
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 40, "docs.pagination.title"))("desc", \u0275\u0275pipeBind1(2, 42, "docs.pagination.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("pageIndex", 1)("total", 200)("showSizeChanger", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(7, 44, "docs.pagination.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(8, 46, "docs.pagination.behavior"))("avoid", \u0275\u0275pipeBind1(9, 48, "docs.pagination.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 50, "docs.pagination.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 52, "docs.pagination.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 54, "docs.pagination.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(22, 56, "docs.pagination.exSizeT"))("desc", \u0275\u0275pipeBind1(23, 58, "docs.pagination.exSizeD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("pageIndex", 2)("total", 530)("showSizeChanger", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 60, "docs.pagination.exVarT"))("desc", \u0275\u0275pipeBind1(28, 62, "docs.pagination.exVarD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(30, 64, "docs.pagination.exVarRow"));
        \u0275\u0275advance(2);
        \u0275\u0275property("simple", true)("pageIndex", 2)("total", 200);
        \u0275\u0275advance();
        \u0275\u0275property("showSizeChanger", true)("pageIndex", 2)("total", 200);
        \u0275\u0275advance();
        \u0275\u0275property("pageIndex", 3)("total", 500);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 66, "docs.pagination.exTableT"))("desc", \u0275\u0275pipeBind1(36, 68, "docs.pagination.exTableD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("nzData", ctx.pageRows())("nzShowPagination", false)("nzBordered", true);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 70, "docs.pagination.colCode"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 72, "docs.pagination.colName"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 74, "docs.pagination.colDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 76, "docs.pagination.colSalary"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.pageRows());
        \u0275\u0275advance(3);
        \u0275\u0275property("pageIndex", ctx.pageIndex())("pageSize", ctx.pageSize())("total", ctx.emps.length);
      }
    }, dependencies: [TranslateModule, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, HrmPagination, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocPagination, [{
    type: Component,
    args: [{
      selector: "sg-doc-pagination",
      imports: [TranslateModule, NzTableModule, HrmPagination, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.pagination.title' | translate" [desc]="'docs.pagination.desc' | translate">

      <div sgOverview>
        <hrm-pagination [pageIndex]="1" [total]="200" [showSizeChanger]="true" />
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.pagination.purpose' | translate"
          [when]="when"
          [behavior]="'docs.pagination.behavior' | translate"
          [avoid]="'docs.pagination.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.pagination.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.pagination.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.pagination.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.pagination.exSizeT' | translate"
          [desc]="'docs.pagination.exSizeD' | translate">
          <sg-row>
            <hrm-pagination [pageIndex]="2" [total]="530" [showSizeChanger]="true" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.pagination.exVarT' | translate"
          [desc]="'docs.pagination.exVarD' | translate">
          <sg-row [label]="'docs.pagination.exVarRow' | translate">
            <hrm-pagination [simple]="true" [pageIndex]="2" [total]="200" />
            <hrm-pagination [showSizeChanger]="true" [pageIndex]="2" [total]="200" />
            <hrm-pagination [pageIndex]="3" [total]="500" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.pagination.exTableT' | translate"
          [desc]="'docs.pagination.exTableD' | translate">
          <sg-row>
            <div style="width:100%">
              <nz-table [nzData]="pageRows()" [nzShowPagination]="false" nzSize="small" [nzBordered]="true">
                <thead><tr><th>{{ 'docs.pagination.colCode' | translate }}</th><th>{{ 'docs.pagination.colName' | translate }}</th><th>{{ 'docs.pagination.colDept' | translate }}</th><th style="text-align:right">{{ 'docs.pagination.colSalary' | translate }}</th></tr></thead>
                <tbody>
                  @for (r of pageRows(); track r.code) {
                    <tr><td>{{ r.code }}</td><td>{{ r.name }}</td><td>{{ r.dept }}</td><td style="text-align:right">{{ r.salary }}</td></tr>
                  }
                </tbody>
              </nz-table>
              <div style="display:flex;justify-content:flex-end;margin-top:12px">
                <hrm-pagination
                  size="small"
                  [pageIndex]="pageIndex()"
                  [pageSize]="pageSize()"
                  [total]="emps.length"
                  (pageIndexChange)="pageIndex.set($event)" />
              </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocPagination, { className: "SgDocPagination", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/pagination.ts", lineNumber: 80 });
})();
export {
  SgDocPagination
};
//# sourceMappingURL=chunk-WUSHUHO5.js.map
