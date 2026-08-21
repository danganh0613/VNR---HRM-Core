import {
  HrmMediaCell
} from "./chunk-AWALIPWS.js";
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
  NzTableFixedRowComponent,
  NzTableModule,
  NzTbodyComponent,
  NzTdAddOnComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective,
  NzTrExpandDirective
} from "./chunk-63BVE4AM.js";
import "./chunk-UGXOFJ2W.js";
import "./chunk-MT7CL62E.js";
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
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  Receipt
} from "./chunk-LRW4ARR4.js";
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/master-detail.ts
var _c0 = () => ({ label: "Media Cell", route: "hrm/table-cells/media" });
var _c1 = () => ({ label: "User Cell", route: "hrm/table-cells/user" });
var _c2 = () => ({ label: "Amount Cell", route: "hrm/table-cells/amount" });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _forTrack0 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.item;
function SgDocMasterDetail_ng_template_27_For_18_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 13);
    \u0275\u0275element(7, "hrm-amount-cell", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, l_r3.item));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r3.qty);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", l_r3.amount);
  }
}
function SgDocMasterDetail_ng_template_27_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275twoWayListener("nzExpandChange", function SgDocMasterDetail_ng_template_27_For_18_Template_td_nzExpandChange_1_listener($event) {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(o_r2.expand, $event) || (o_r2.expand = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275element(3, "hrm-media-cell", 15);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "hrm-user-cell", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275element(8, "hrm-amount-cell", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "hrm-status-cell", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr", 19)(12, "nz-table", 20)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 13);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, SgDocMasterDetail_ng_template_27_For_18_For_26_Template, 8, 5, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("nzExpand", o_r2.expand);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r3.receipt)("label", o_r2.code)("sub", \u0275\u0275pipeBind1(4, 17, o_r2.dept));
    \u0275\u0275advance(3);
    \u0275\u0275property("name", o_r2.requester)("colorful", true)("avatarSize", 32);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", o_r2.total);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r3.tone(o_r2.status))("label", ctx_r3.label(o_r2.status))("dot", true);
    \u0275\u0275advance();
    \u0275\u0275property("nzExpand", o_r2.expand);
    \u0275\u0275advance();
    \u0275\u0275property("nzData", o_r2.lines)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "docs.gridMasterDetail.colItem"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "docs.gridMasterDetail.colQty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, "docs.gridMasterDetail.colLineTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(o_r2.lines);
  }
}
function SgDocMasterDetail_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-table", 11)(1, "thead")(2, "tr");
    \u0275\u0275element(3, "th", 12);
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SgDocMasterDetail_ng_template_27_For_18_Template, 27, 25, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r3.orders)("nzShowPagination", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "docs.gridMasterDetail.colCode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "docs.gridMasterDetail.colRequester"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "docs.gridMasterDetail.colTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "docs.gridMasterDetail.colStatus"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.orders);
  }
}
var SgDocMasterDetail = class _SgDocMasterDetail {
  constructor() {
    this.t = inject(TranslateService);
    this.receipt = Receipt;
    this.orders = [
      { code: "PO-1024", dept: "docs.gridMasterDetail.deptEng", requester: "Nguy\u1EC5n Minh Tu\u1EA5n", total: 42e6, status: "approved", expand: true, lines: [
        { item: "docs.gridMasterDetail.itemLaptop", qty: 2, amount: 4e7 },
        { item: "docs.gridMasterDetail.itemMouse", qty: 4, amount: 2e6 }
      ] },
      { code: "PO-1025", dept: "docs.gridMasterDetail.deptSales", requester: "Tr\u1EA7n Thu H\xE0", total: 15e6, status: "pending", expand: false, lines: [
        { item: "docs.gridMasterDetail.itemPhone", qty: 1, amount: 15e6 }
      ] },
      { code: "PO-1026", dept: "docs.gridMasterDetail.deptFinance", requester: "B\xF9i H\u1EA3i Y\u1EBFn", total: 6e6, status: "rejected", expand: false, lines: [
        { item: "docs.gridMasterDetail.itemPrinter", qty: 1, amount: 6e6 }
      ] }
    ];
    this.when = ["docs.gridMasterDetail.when1", "docs.gridMasterDetail.when2"];
  }
  tone(s) {
    return s === "approved" ? "success" : s === "pending" ? "processing" : "error";
  }
  label(s) {
    return this.t.instant(s === "approved" ? "docs.gridMasterDetail.statusApproved" : s === "pending" ? "docs.gridMasterDetail.statusPending" : "docs.gridMasterDetail.statusRejected");
  }
  static {
    this.\u0275fac = function SgDocMasterDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMasterDetail)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMasterDetail, selectors: [["sg-doc-master-detail"]], decls: 29, vars: 41, consts: [["grid", ""], ["category", "Table & List", 3, "title", "desc", "related"], ["sgOverview", ""], [2, "width", "100%"], [3, "ngTemplateOutlet"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "12px 0 0"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [2, "width", "44px"], [2, "text-align", "right"], ["nzShowExpand", "", 3, "nzExpandChange", "nzExpand"], [3, "icon", "label", "sub"], [3, "name", "colorful", "avatarSize"], ["currency", "\u20AB", 3, "value"], ["variant", "badge", 3, "status", "label", "dot"], [3, "nzExpand"], ["nzSize", "small", 2, "display", "block", "width", "100%", 3, "nzData", "nzShowPagination"]], template: function SgDocMasterDetail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275elementContainer(5, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "sg-use", 7);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "sg-example", 10);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "div", 3);
        \u0275\u0275elementContainer(26, 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, SgDocMasterDetail_ng_template_27_Template, 19, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const grid_r5 = \u0275\u0275reference(28);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 14, "docs.gridMasterDetail.title"))("desc", \u0275\u0275pipeBind1(2, 16, "docs.gridMasterDetail.desc"))("related", \u0275\u0275pureFunction3(37, _c3, \u0275\u0275pureFunction0(34, _c0), \u0275\u0275pureFunction0(35, _c1), \u0275\u0275pureFunction0(36, _c2)));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngTemplateOutlet", grid_r5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 18, "docs.gridMasterDetail.openHint"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 20, "docs.gridMasterDetail.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 22, "docs.gridMasterDetail.behavior"))("avoid", \u0275\u0275pipeBind1(13, 24, "docs.gridMasterDetail.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "docs.gridMasterDetail.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "docs.gridMasterDetail.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 30, "docs.gridMasterDetail.exT"))("desc", \u0275\u0275pipeBind1(24, 32, "docs.gridMasterDetail.exD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", grid_r5);
      }
    }, dependencies: [NgTemplateOutlet, TranslateModule, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableFixedRowComponent, HrmMediaCell, HrmUserCell, HrmAmountCell, HrmStatusCell, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMasterDetail, [{
    type: Component,
    args: [{
      selector: "sg-doc-master-detail",
      imports: [NgTemplateOutlet, TranslateModule, NzTableModule, HrmMediaCell, HrmUserCell, HrmAmountCell, HrmStatusCell, SgDoc, SgUse, SgDo, SgDont, SgExample],
      template: `
    <sg-doc category="Table & List" [title]="'docs.gridMasterDetail.title' | translate" [desc]="'docs.gridMasterDetail.desc' | translate"
      [related]="[{label:'Media Cell', route:'hrm/table-cells/media'},{label:'User Cell', route:'hrm/table-cells/user'},{label:'Amount Cell', route:'hrm/table-cells/amount'}]">

      <div sgOverview>
        <div style="width:100%"><ng-container [ngTemplateOutlet]="grid" /></div>
        <p style="font-size: var(--fs-13);color:var(--text-sub);margin:12px 0 0">{{ 'docs.gridMasterDetail.openHint' | translate }}</p>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.gridMasterDetail.purpose' | translate" [when]="when"
          [behavior]="'docs.gridMasterDetail.behavior' | translate"
          [avoid]="'docs.gridMasterDetail.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.gridMasterDetail.do1' | translate }}</sg-do>
        <sg-dont>{{ 'docs.gridMasterDetail.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.gridMasterDetail.exT' | translate"
          [desc]="'docs.gridMasterDetail.exD' | translate">
          <div style="width:100%"><ng-container [ngTemplateOutlet]="grid" /></div>
        </sg-example>
      </div>

      <ng-template #grid>
        <!-- nzData th\u1EADt (kh\xF4ng []) \u0111\u1EC3 nz kh\xF4ng hi\u1EC7n empty-state "Tr\u1ED1ng" d\u01B0\u1EDBi b\u1EA3ng. -->
        <nz-table [nzData]="orders" [nzShowPagination]="false" nzSize="small">
          <thead><tr>
            <th style="width:44px"></th><th>{{ 'docs.gridMasterDetail.colCode' | translate }}</th><th>{{ 'docs.gridMasterDetail.colRequester' | translate }}</th>
            <th style="text-align:right">{{ 'docs.gridMasterDetail.colTotal' | translate }}</th><th>{{ 'docs.gridMasterDetail.colStatus' | translate }}</th>
          </tr></thead>
          <tbody>
            @for (o of orders; track o.code) {
              <tr>
                <td nzShowExpand [(nzExpand)]="o.expand"></td>
                <td><hrm-media-cell [icon]="receipt" [label]="o.code" [sub]="o.dept | translate" /></td>
                <td><hrm-user-cell [name]="o.requester" [colorful]="true" [avatarSize]="32" /></td>
                <td style="text-align:right"><hrm-amount-cell [value]="o.total" currency="\u20AB" /></td>
                <td><hrm-status-cell [status]="tone(o.status)" [label]="label(o.status)" variant="badge" [dot]="true" /></td>
              </tr>
              <!-- tr[nzExpand]: nz t\u1EF1 b\u1ECDc n\u1ED9i dung v\xE0o 1 td colspan FULL \u2014 kh\xF4ng t\u1EF1 th\xEAm td, tr\xE1nh v\xF9ng detail b\u1ECB b\xF3 h\u1EB9p. -->
              <tr [nzExpand]="o.expand">
                <nz-table [nzData]="o.lines" [nzShowPagination]="false" nzSize="small" style="display:block;width:100%">
                  <thead><tr><th>{{ 'docs.gridMasterDetail.colItem' | translate }}</th><th style="text-align:right">{{ 'docs.gridMasterDetail.colQty' | translate }}</th><th style="text-align:right">{{ 'docs.gridMasterDetail.colLineTotal' | translate }}</th></tr></thead>
                  <tbody>
                    @for (l of o.lines; track l.item) {
                      <tr>
                        <td>{{ l.item | translate }}</td>
                        <td style="text-align:right">{{ l.qty }}</td>
                        <td style="text-align:right"><hrm-amount-cell [value]="l.amount" currency="\u20AB" /></td>
                      </tr>
                    }
                  </tbody>
                </nz-table>
              </tr>
            }
          </tbody>
        </nz-table>
      </ng-template>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMasterDetail, { className: "SgDocMasterDetail", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/grid/master-detail.ts", lineNumber: 84 });
})();
export {
  SgDocMasterDetail
};
//# sourceMappingURL=chunk-3GR7FPH3.js.map
