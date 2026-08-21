import {
  EMPLOYEES,
  STATUS_META,
  SgEmployeeDetail
} from "./chunk-NURUCK6A.js";
import {
  HrmTagsCell
} from "./chunk-BM6XDEDJ.js";
import {
  HrmProgressCell
} from "./chunk-JKQTIUU3.js";
import {
  HrmDataView,
  HrmDetailPeek,
  HrmListPage
} from "./chunk-JKYPLKJT.js";
import "./chunk-NSTKLO3O.js";
import "./chunk-VEP4KFOV.js";
import "./chunk-UNX4IGOQ.js";
import "./chunk-H3ARSMO3.js";
import "./chunk-NJREMSLK.js";
import {
  HrmStatusCell
} from "./chunk-6PIPPRJM.js";
import {
  HrmUserCell
} from "./chunk-QLXCS5IB.js";
import "./chunk-IHUB5HQS.js";
import "./chunk-U557YZUX.js";
import "./chunk-PSR5ADGK.js";
import "./chunk-KGPHHG27.js";
import "./chunk-JUFZRQMG.js";
import "./chunk-TUHU6AB5.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-NGY4ECW2.js";
import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import "./chunk-KS5WOU2W.js";
import "./chunk-WLLYRHZ5.js";
import "./chunk-KLLXE4WM.js";
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
import "./chunk-KXHKNX77.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
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
import {
  Filter,
  Plus,
  Search,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/templates/hrm-list-screen.ts
var _c0 = [[["", "lsHeaderActions", ""]], [["", "lsFilters", ""]], [["", "lsActions", ""]], [["", "lsPagerInfo", ""]]];
var _c1 = ["[lsHeaderActions]", "[lsFilters]", "[lsActions]", "[lsPagerInfo]"];
var _c2 = (a0) => ({ $implicit: a0 });
function HrmListScreen_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.detailContent())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r1.selected()));
  }
}
function HrmListScreen_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmListScreen_ng_template_7_Conditional_0_Template, 1, 4, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.detailContent() ? 0 : -1);
  }
}
var HrmListScreen = class _HrmListScreen {
  constructor() {
    this.breadcrumb = input([], ...ngDevMode ? [{ debugName: "breadcrumb" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBack = input(false, ...ngDevMode ? [{ debugName: "showBack" }] : (
      /* istanbul ignore next */
      []
    ));
    this.back = output();
    this.total = input(0, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageIndex = model(1, ...ngDevMode ? [{ debugName: "pageIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = model(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSizeChanger = input(false, ...ngDevMode ? [{ debugName: "showSizeChanger" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = input([], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rowKey = input("id", ...ngDevMode ? [{ debugName: "rowKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewMode = model("table", ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewModes = input(["table", "card"], ...ngDevMode ? [{ debugName: "viewModes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardTemplate = input(null, ...ngDevMode ? [{ debugName: "cardTemplate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardMin = input(260, ...ngDevMode ? [{ debugName: "cardMin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("small", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tableLabel = input("", ...ngDevMode ? [{ debugName: "tableLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardLabel = input("", ...ngDevMode ? [{ debugName: "cardLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailContent = input(null, ...ngDevMode ? [{ debugName: "detailContent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailModes = input(["side", "center", "full", "tab"], ...ngDevMode ? [{ debugName: "detailModes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.defaultMode = input("side", ...ngDevMode ? [{ debugName: "defaultMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailTitleField = input("name", ...ngDevMode ? [{ debugName: "detailTitleField" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailRoute = input(null, ...ngDevMode ? [{ debugName: "detailRoute" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailWidth = input(440, ...ngDevMode ? [{ debugName: "detailWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailModalWidth = input(680, ...ngDevMode ? [{ debugName: "detailModalWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.modeLabels = input({}, ...ngDevMode ? [{ debugName: "modeLabels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.switchLabel = input("", ...ngDevMode ? [{ debugName: "switchLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expandLabel = input("", ...ngDevMode ? [{ debugName: "expandLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeLabel = input("", ...ngDevMode ? [{ debugName: "closeLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openRecord = output();
    this.selected = signal(null, ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekOpen = signal(false, ...ngDevMode ? [{ debugName: "peekOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.peekMode = signal("side", ...ngDevMode ? [{ debugName: "peekMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailTitle = computed(() => {
      const r = this.selected();
      return r ? String(r[this.detailTitleField()] ?? "") : "";
    }, ...ngDevMode ? [{ debugName: "detailTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.routeUrl = computed(() => {
      const fn = this.detailRoute();
      const r = this.selected();
      return fn && r ? fn(r) : "";
    }, ...ngDevMode ? [{ debugName: "routeUrl" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  onOpen(row) {
    this.selected.set(row);
    this.peekMode.set(this.defaultMode());
    this.peekOpen.set(true);
    this.openRecord.emit(row);
  }
  static {
    this.\u0275fac = function HrmListScreen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmListScreen)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmListScreen, selectors: [["hrm-list-screen"]], hostAttrs: [1, "hrm-list-screen"], inputs: { breadcrumb: [1, "breadcrumb"], title: [1, "title"], subtitle: [1, "subtitle"], showBack: [1, "showBack"], total: [1, "total"], pageIndex: [1, "pageIndex"], pageSize: [1, "pageSize"], showSizeChanger: [1, "showSizeChanger"], columns: [1, "columns"], data: [1, "data"], rowKey: [1, "rowKey"], viewMode: [1, "viewMode"], viewModes: [1, "viewModes"], cardTemplate: [1, "cardTemplate"], cardMin: [1, "cardMin"], size: [1, "size"], selectable: [1, "selectable"], tableLabel: [1, "tableLabel"], cardLabel: [1, "cardLabel"], detailContent: [1, "detailContent"], detailModes: [1, "detailModes"], defaultMode: [1, "defaultMode"], detailTitleField: [1, "detailTitleField"], detailRoute: [1, "detailRoute"], detailWidth: [1, "detailWidth"], detailModalWidth: [1, "detailModalWidth"], modeLabels: [1, "modeLabels"], switchLabel: [1, "switchLabel"], expandLabel: [1, "expandLabel"], closeLabel: [1, "closeLabel"] }, outputs: { back: "back", pageIndex: "pageIndexChange", pageSize: "pageSizeChange", viewMode: "viewModeChange", openRecord: "openRecord" }, ngContentSelectors: _c1, decls: 9, vars: 31, consts: [["peekBody", ""], [3, "back", "pageIndexChange", "pageSizeChange", "breadcrumb", "title", "subtitle", "showBack", "total", "pageIndex", "pageSize", "showSizeChanger"], [3, "modeChange", "openRecord", "columns", "data", "rowKey", "mode", "modes", "cardTemplate", "cardMin", "size", "selectable", "tableLabel", "cardLabel"], [3, "openChange", "peekModeChange", "open", "peekMode", "modes", "title", "content", "routeUrl", "width", "modalWidth", "modeLabels", "switchLabel", "expandLabel", "closeLabel"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function HrmListScreen_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "hrm-list-page", 1);
        \u0275\u0275listener("back", function HrmListScreen_Template_hrm_list_page_back_0_listener() {
          return ctx.back.emit();
        });
        \u0275\u0275twoWayListener("pageIndexChange", function HrmListScreen_Template_hrm_list_page_pageIndexChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pageIndex, $event) || (ctx.pageIndex = $event);
          return \u0275\u0275resetView($event);
        })("pageSizeChange", function HrmListScreen_Template_hrm_list_page_pageSizeChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275projection(1, 0, ["ngProjectAs", "[headerActions]", 5, ["", "headerActions", ""]]);
        \u0275\u0275projection(2, 1, ["ngProjectAs", "[filters]", 5, ["", "filters", ""]]);
        \u0275\u0275projection(3, 2, ["ngProjectAs", "[actions]", 5, ["", "actions", ""]]);
        \u0275\u0275projection(4, 3, ["ngProjectAs", "[pagerInfo]", 5, ["", "pagerInfo", ""]]);
        \u0275\u0275elementStart(5, "hrm-data-view", 2);
        \u0275\u0275twoWayListener("modeChange", function HrmListScreen_Template_hrm_data_view_modeChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.viewMode, $event) || (ctx.viewMode = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("openRecord", function HrmListScreen_Template_hrm_data_view_openRecord_5_listener($event) {
          return ctx.onOpen($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "hrm-detail-peek", 3);
        \u0275\u0275twoWayListener("openChange", function HrmListScreen_Template_hrm_detail_peek_openChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.peekOpen, $event) || (ctx.peekOpen = $event);
          return \u0275\u0275resetView($event);
        })("peekModeChange", function HrmListScreen_Template_hrm_detail_peek_peekModeChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.peekMode, $event) || (ctx.peekMode = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, HrmListScreen_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const peekBody_r3 = \u0275\u0275reference(8);
        \u0275\u0275property("breadcrumb", ctx.breadcrumb())("title", ctx.title())("subtitle", ctx.subtitle())("showBack", ctx.showBack())("total", ctx.total());
        \u0275\u0275twoWayProperty("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize);
        \u0275\u0275property("showSizeChanger", ctx.showSizeChanger());
        \u0275\u0275advance(5);
        \u0275\u0275property("columns", ctx.columns())("data", ctx.data())("rowKey", ctx.rowKey());
        \u0275\u0275twoWayProperty("mode", ctx.viewMode);
        \u0275\u0275property("modes", ctx.viewModes())("cardTemplate", ctx.cardTemplate())("cardMin", ctx.cardMin())("size", ctx.size())("selectable", ctx.selectable())("tableLabel", ctx.tableLabel())("cardLabel", ctx.cardLabel());
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("open", ctx.peekOpen)("peekMode", ctx.peekMode);
        \u0275\u0275property("modes", ctx.detailModes())("title", ctx.detailTitle())("content", peekBody_r3)("routeUrl", ctx.routeUrl())("width", ctx.detailWidth())("modalWidth", ctx.detailModalWidth())("modeLabels", ctx.modeLabels())("switchLabel", ctx.switchLabel())("expandLabel", ctx.expandLabel())("closeLabel", ctx.closeLabel());
      }
    }, dependencies: [NgTemplateOutlet, HrmListPage, HrmDataView, HrmDetailPeek], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmListScreen, [{
    type: Component,
    args: [{
      selector: "hrm-list-screen",
      imports: [NgTemplateOutlet, HrmListPage, HrmDataView, HrmDetailPeek],
      template: `
    <hrm-list-page
      [breadcrumb]="breadcrumb()" [title]="title()" [subtitle]="subtitle()"
      [showBack]="showBack()" (back)="back.emit()"
      [total]="total()" [(pageIndex)]="pageIndex" [(pageSize)]="pageSize" [showSizeChanger]="showSizeChanger()">

      <ng-content select="[lsHeaderActions]" ngProjectAs="[headerActions]" />
      <ng-content select="[lsFilters]" ngProjectAs="[filters]" />
      <ng-content select="[lsActions]" ngProjectAs="[actions]" />
      <ng-content select="[lsPagerInfo]" ngProjectAs="[pagerInfo]" />

      <hrm-data-view
        [columns]="columns()" [data]="data()" [rowKey]="rowKey()"
        [(mode)]="viewMode" [modes]="viewModes()" [cardTemplate]="cardTemplate()"
        [cardMin]="cardMin()" [size]="size()" [selectable]="selectable()"
        [tableLabel]="tableLabel()" [cardLabel]="cardLabel()"
        (openRecord)="onOpen($event)" />
    </hrm-list-page>

    <hrm-detail-peek
      [(open)]="peekOpen" [(peekMode)]="peekMode" [modes]="detailModes()"
      [title]="detailTitle()" [content]="peekBody" [routeUrl]="routeUrl()"
      [width]="detailWidth()" [modalWidth]="detailModalWidth()" [modeLabels]="modeLabels()"
      [switchLabel]="switchLabel()" [expandLabel]="expandLabel()" [closeLabel]="closeLabel()" />

    <!-- B\u1ECDc n\u1ED9i dung chi ti\u1EBFt c\u1EE7a b\xEAn g\u1ECDi + truy\u1EC1n b\u1EA3n ghi \u0111ang ch\u1ECDn qua context $implicit. -->
    <ng-template #peekBody>
      @if (detailContent()) {
        <ng-container [ngTemplateOutlet]="detailContent()!" [ngTemplateOutletContext]="{ $implicit: selected() }" />
      }
    </ng-template>
  `,
      host: { class: "hrm-list-screen" }
    }]
  }], null, { breadcrumb: [{ type: Input, args: [{ isSignal: true, alias: "breadcrumb", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], showBack: [{ type: Input, args: [{ isSignal: true, alias: "showBack", required: false }] }], back: [{ type: Output, args: ["back"] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }, { type: Output, args: ["pageIndexChange"] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }, { type: Output, args: ["pageSizeChange"] }], showSizeChanger: [{ type: Input, args: [{ isSignal: true, alias: "showSizeChanger", required: false }] }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], rowKey: [{ type: Input, args: [{ isSignal: true, alias: "rowKey", required: false }] }], viewMode: [{ type: Input, args: [{ isSignal: true, alias: "viewMode", required: false }] }, { type: Output, args: ["viewModeChange"] }], viewModes: [{ type: Input, args: [{ isSignal: true, alias: "viewModes", required: false }] }], cardTemplate: [{ type: Input, args: [{ isSignal: true, alias: "cardTemplate", required: false }] }], cardMin: [{ type: Input, args: [{ isSignal: true, alias: "cardMin", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], tableLabel: [{ type: Input, args: [{ isSignal: true, alias: "tableLabel", required: false }] }], cardLabel: [{ type: Input, args: [{ isSignal: true, alias: "cardLabel", required: false }] }], detailContent: [{ type: Input, args: [{ isSignal: true, alias: "detailContent", required: false }] }], detailModes: [{ type: Input, args: [{ isSignal: true, alias: "detailModes", required: false }] }], defaultMode: [{ type: Input, args: [{ isSignal: true, alias: "defaultMode", required: false }] }], detailTitleField: [{ type: Input, args: [{ isSignal: true, alias: "detailTitleField", required: false }] }], detailRoute: [{ type: Input, args: [{ isSignal: true, alias: "detailRoute", required: false }] }], detailWidth: [{ type: Input, args: [{ isSignal: true, alias: "detailWidth", required: false }] }], detailModalWidth: [{ type: Input, args: [{ isSignal: true, alias: "detailModalWidth", required: false }] }], modeLabels: [{ type: Input, args: [{ isSignal: true, alias: "modeLabels", required: false }] }], switchLabel: [{ type: Input, args: [{ isSignal: true, alias: "switchLabel", required: false }] }], expandLabel: [{ type: Input, args: [{ isSignal: true, alias: "expandLabel", required: false }] }], closeLabel: [{ type: Input, args: [{ isSignal: true, alias: "closeLabel", required: false }] }], openRecord: [{ type: Output, args: ["openRecord"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmListScreen, { className: "HrmListScreen", filePath: "libs/hrm-ui/src/lib/templates/hrm-list-screen.ts", lineNumber: 64 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/data-view.ts
var _c02 = ["cUser"];
var _c12 = ["cSkills"];
var _c22 = ["cKpi"];
var _c3 = ["cStatus"];
var _c4 = ["tplCard"];
var _c5 = ["tplDetail"];
var _c6 = () => ["table"];
var _c7 = () => ["table", "card"];
var _c8 = () => ["name", "email", "role"];
function SgDocDataView_ng_template_57_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function SgDocDataView_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "hrm-user-cell", 27);
    \u0275\u0275elementStart(3, "hrm-tag", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29)(6, "span", 30);
    \u0275\u0275text(7, "KPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 31);
    \u0275\u0275element(9, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34);
    \u0275\u0275repeaterCreate(13, SgDocDataView_ng_template_57_For_14_Template, 2, 1, "hrm-tag", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", row_r2.name)("sub", row_r2.role);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r2.toneHue(row_r2))("dot", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(row_r2));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", row_r2.kpi, "%")("background", ctx_r2.kpiColor(row_r2.kpi));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r2.kpi, "%");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r2.skills);
  }
}
function SgDocDataView_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-user-cell", 27);
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275property("name", row_r4.name)("sub", row_r4.email);
  }
}
function SgDocDataView_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-tags-cell", 36);
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("tags", ctx_r2.skillTags(row_r5))("max", 2);
  }
}
function SgDocDataView_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-progress-cell", 37);
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", row_r6.kpi)("color", ctx_r2.kpiTone(row_r6.kpi));
  }
}
function SgDocDataView_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-status-cell", 38);
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r2.tone(row_r7))("label", ctx_r2.statusLabel(row_r7));
  }
}
function SgDocDataView_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sg-employee-detail", 39);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275property("emp", row_r8);
  }
}
var SgDocDataView = class _SgDocDataView {
  constructor() {
    this.data = EMPLOYEES;
    this.icSearch = Search;
    this.icPlus = Plus;
    this.icFilter = Filter;
    this.crumbs = [{ title: "Nh\xE2n s\u1EF1" }, { title: "Danh s\xE1ch" }];
    this.modeLabels = {
      side: "C\u1EA1nh b\u1EA3ng (drawer)",
      center: "Gi\u1EEFa m\xE0n h\xECnh",
      full: "To\xE0n trang",
      tab: "Tab m\u1EDBi"
    };
    this.routeFor = (row) => `/styleguide/hrm/template/record?id=${row["id"]}`;
    this.cUser = viewChild("cUser", ...ngDevMode ? [{ debugName: "cUser" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cSkills = viewChild("cSkills", ...ngDevMode ? [{ debugName: "cSkills" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cKpi = viewChild("cKpi", ...ngDevMode ? [{ debugName: "cKpi" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cStatus = viewChild("cStatus", ...ngDevMode ? [{ debugName: "cStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cardTpl = viewChild("tplCard", ...ngDevMode ? [{ debugName: "cardTpl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.detailTpl = viewChild("tplDetail", ...ngDevMode ? [{ debugName: "detailTpl" }] : (
      /* istanbul ignore next */
      []
    ));
    this.columns = computed(() => [
      { key: "name", title: "Nh\xE2n vi\xEAn", cell: this.cUser(), width: "240px" },
      { key: "dept", title: "Ph\xF2ng ban" },
      { key: "skills", title: "K\u1EF9 n\u0103ng", cell: this.cSkills() },
      { key: "kpi", title: "KPI", cell: this.cKpi(), width: "150px" },
      { key: "status", title: "Tr\u1EA1ng th\xE1i", cell: this.cStatus(), width: "140px" }
    ], ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "B\u1EA5t k\u1EF3 m\xE0n h\xECnh danh s\xE1ch b\u1EA3n ghi n\xE0o (nh\xE2n s\u1EF1, \u0111\u01A1n t\u1EEB, h\u1EE3p \u0111\u1ED3ng\u2026)",
      "C\u1EA7n xem chi ti\u1EBFt nhanh m\xE0 kh\xF4ng r\u1EDDi danh s\xE1ch",
      "Mu\u1ED1n c\u1EA3 b\u1EA3ng (qu\xE9t c\u1ED9t) l\u1EABn th\u1EBB (tr\u1EF1c quan) + m\u1EDF chi ti\u1EBFt linh ho\u1EA1t"
    ];
  }
  tone(e) {
    return STATUS_META[e.status].tone;
  }
  toneHue(e) {
    return e.status === "active" ? "green" : e.status === "leave" ? "yellow" : "gray";
  }
  statusLabel(e) {
    return STATUS_META[e.status].label;
  }
  kpiColor(v) {
    return v >= 80 ? "var(--success-base)" : v >= 60 ? "var(--warning-base)" : "var(--error-base)";
  }
  kpiTone(v) {
    return v >= 80 ? "green" : v >= 60 ? "amber" : "red";
  }
  skillTags(e) {
    return e.skills.map((s) => ({ label: s, color: "blue" }));
  }
  static {
    this.\u0275fac = function SgDocDataView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDataView)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDataView, selectors: [["sg-doc-data-view"]], viewQuery: function SgDocDataView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.cUser, _c02, 5)(ctx.cSkills, _c12, 5)(ctx.cKpi, _c22, 5)(ctx.cStatus, _c3, 5)(ctx.cardTpl, _c4, 5)(ctx.detailTpl, _c5, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(6);
      }
    }, decls: 69, vars: 34, consts: [["tplCard", ""], ["cUser", ""], ["cSkills", ""], ["cKpi", ""], ["cStatus", ""], ["tplDetail", ""], ["category", "Template", "title", "M\xE0n h\xECnh Danh s\xE1ch + Chi ti\u1EBFt", "desc", "Template s\u1EB5n d\xF9ng cho m\u1ECDi m\xE0n h\xECnh danh s\xE1ch d\u1EEF li\u1EC7u: chrome (ti\xEAu \u0111\u1EC1, toolbar, ph\xE2n trang) + danh s\xE1ch 2 ch\u1EBF \u0111\u1ED9 B\u1EA3ng/Th\u1EBB + m\u1EDF chi ti\u1EBFt \u0111a-surface (c\u1EA1nh b\u1EA3ng, gi\u1EEFa m\xE0n h\xECnh, to\xE0n trang, tab m\u1EDBi). \u0110i\u1EC1n d\u1EEF li\u1EC7u l\xE0 ch\u1EA1y."], ["sgOverview", ""], [1, "tpl-frame"], ["title", "Nh\xE2n s\u1EF1", "subtitle", "Qu\u1EA3n l\xFD h\u1ED3 s\u01A1 nh\xE2n vi\xEAn to\xE0n c\xF4ng ty", "rowKey", "id", "detailTitleField", "name", "tableLabel", "Xem d\u1EA1ng b\u1EA3ng", "cardLabel", "Xem d\u1EA1ng th\u1EBB", "switchLabel", "\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB", "expandLabel", "M\u1EDF to\xE0n trang", "closeLabel", "\u0110\xF3ng", 3, "breadcrumb", "columns", "data", "cardTemplate", "detailContent", "detailRoute", "total", "pageSize", "modeLabels"], ["lsFilters", "", 1, "tpl-search"], [3, "icon", "size"], ["placeholder", "T\xECm nh\xE2n vi\xEAn\u2026"], ["lsActions", "", "type", "button", 1, "tpl-btn-ghost"], ["lsActions", "", "variant", "primary", "size", "sm"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "14px 0 0", "max-width", "66ch", "line-height", "1.55"], ["sgUsage", ""], ["purpose", "Template chu\u1EA9n cho M\u1ECCI m\xE0n h\xECnh danh s\xE1ch d\u1EEF li\u1EC7u (nh\xE2n s\u1EF1, \u0111\u01A1n t\u1EEB, h\u1EE3p \u0111\u1ED3ng\u2026). D\xF9ng nh\u01B0 app-shell: drop-in, \u0111i\u1EC1n d\u1EEF li\u1EC7u, kh\xF4ng d\u1EF1ng l\u1EA1i chrome/list/detail.", "behavior", "hrm-list-screen gh\xE9p s\u1EB5n hrm-list-page (chrome) + hrm-data-view (B\u1EA3ng/Th\u1EBB) + hrm-detail-peek (4 surface). T\u1EF1 qu\u1EA3n b\u1EA3n ghi \u0111ang ch\u1ECDn + tr\u1EA1ng th\xE1i m\u1EDF.", "avoid", "M\xE0n h\xECnh kh\xF4ng ph\u1EA3i danh s\xE1ch (dashboard, form nh\u1EADp) \u2014 d\xF9ng recipe kh\xE1c. Danh s\xE1ch si\xEAu \u0111\u01A1n gi\u1EA3n kh\xF4ng c\u1EA7n chi ti\u1EBFt \u2192 ch\u1EC9 hrm-grid.", 3, "when"], ["sgBest", ""], ["sgExamples", ""], ["title", "Ch\u1EC9 B\u1EA3ng \u2014 m\u1EDF th\u1EB3ng To\xE0n trang", "desc", "\u1EA8n ch\u1EBF \u0111\u1ED9 Th\u1EBB (viewModes ch\u1EC9 table), m\u1EB7c \u0111\u1ECBnh m\u1EDF chi ti\u1EBFt To\xE0n trang thay v\xEC drawer. H\u1EE3p b\u1EA3n ghi nhi\u1EC1u tr\u01B0\u1EDDng c\u1EA7n kh\xF4ng gian r\u1ED9ng."], ["title", "Nh\xE2n s\u1EF1", "rowKey", "id", "defaultMode", "full", "detailTitleField", "name", 3, "columns", "data", "viewModes", "detailContent", "detailRoute", "modeLabels"], ["title", "Toolbar t\xEDch h\u1EE3p (search \xB7 s\u1EAFp x\u1EBFp \xB7 c\u1ED9t \xB7 xu\u1EA5t)", "desc", "hrm-data-view [toolbar]=true \u2192 thanh c\xF4ng c\u1EE5 d\xF9ng chung tr\xEAn M\u1ECCI ch\u1EBF \u0111\u1ED9 xem: t\xECm ki\u1EBFm l\u1ECDc d\u1EEF li\u1EC7u, B\u1ED9 l\u1ECDc/Xu\u1EA5t ph\xE1t event; n\xFAt S\u1EAFp x\u1EBFp (\u0111a c\u1EA5p) + C\u1ED9t ch\u1EC9 hi\u1EC7n \u1EDF ch\u1EBF \u0111\u1ED9 B\u1EA3ng, n\u1ED1i chung state v\u1EDBi b\u1EA3ng."], [1, "tpl-frame", 2, "padding", "16px"], ["rowKey", "id", "searchPlaceholder", "T\xECm theo t\xEAn ho\u1EB7c email\u2026", "countLabel", "nh\xE2n vi\xEAn", "tableLabel", "B\u1EA3ng", "cardLabel", "Th\u1EBB", 3, "toolbar", "modes", "columns", "data", "searchable", "searchFields", "filterable", "exportable", "cardTemplate"], [1, "ec"], [1, "ec-top"], [3, "name", "sub"], ["variant", "light", "size", "sm", 3, "color", "dot"], [1, "ec-kpi"], [1, "ec-kpi-l"], [1, "ec-bar"], [1, "ec-bar-f"], [1, "ec-kpi-v"], [1, "ec-skills"], ["color", "blue", "variant", "lighter", "size", "sm"], [3, "tags", "max"], [3, "value", "color"], ["variant", "dot", 3, "status", "label"], [3, "emp"]], template: function SgDocDataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 6)(1, "div", 7)(2, "div", 8)(3, "hrm-list-screen", 9)(4, "span", 10);
        \u0275\u0275element(5, "tabler-icon", 11)(6, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 13);
        \u0275\u0275element(8, "tabler-icon", 11);
        \u0275\u0275text(9, " L\u1ECDc");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "hrm-button", 14);
        \u0275\u0275element(11, "tabler-icon", 11);
        \u0275\u0275text(12, " Th\xEAm nh\xE2n vi\xEAn");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "p", 15);
        \u0275\u0275text(14, " \u0110\xE2y l\xE0 ");
        \u0275\u0275elementStart(15, "b");
        \u0275\u0275text(16, "1 component");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "code");
        \u0275\u0275text(18, "hrm-list-screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " \u2014 \u0111i\u1EC1n ");
        \u0275\u0275elementStart(20, "code");
        \u0275\u0275text(21, "columns");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, ", ");
        \u0275\u0275elementStart(23, "code");
        \u0275\u0275text(24, "data");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " v\xE0 2 template (th\u1EBB \xB7 chi ti\u1EBFt) l\xE0 ra m\xE0n h\xECnh \u0111\u1EA7y \u0111\u1EE7. B\u1EA5m d\xF2ng/th\u1EBB \u2192 m\u1EDF ");
        \u0275\u0275elementStart(26, "b");
        \u0275\u0275text(27, "drawer c\u1EA1nh b\u1EA3ng");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "; \u0111\u1ED5i sang gi\u1EEFa m\xE0n h\xECnh \xB7 to\xE0n trang \xB7 tab m\u1EDBi \u1EDF \u0111\u1EA7u h\u1ED9p chi ti\u1EBFt. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 16);
        \u0275\u0275element(30, "sg-use", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 18)(32, "sg-do");
        \u0275\u0275text(33, "D\xF9ng ");
        \u0275\u0275elementStart(34, "b");
        \u0275\u0275text(35, "hrm-list-screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " l\xE0m \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u cho m\xE0n danh s\xE1ch \u2014 kh\xF4ng t\u1EF1 gh\xE9p l\u1EA1i list + detail.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "sg-do");
        \u0275\u0275text(38, "\u0110\u1EB7t trong content c\u1EE7a ");
        \u0275\u0275elementStart(39, "b");
        \u0275\u0275text(40, "hrm-app-shell");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " (side nav l\u1EA5y t\u1EEB shell, kh\xF4ng l\u1EB7p).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "sg-do");
        \u0275\u0275text(43, "C\u1EA5p ");
        \u0275\u0275elementStart(44, "b");
        \u0275\u0275text(45, "detailRoute");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " \u0111\u1EC3 b\u1EADt mode To\xE0n trang / Tab m\u1EDBi (route b\u1EA3n ghi \u0111\u1ED9c l\u1EADp, chia s\u1EBB link \u0111\u01B0\u1EE3c).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "sg-dont");
        \u0275\u0275text(48, "\u0110\u1EEBng nh\u1ED3i logic ri\xEAng v\xE0o template \u2014 d\u1EEF li\u1EC7u/columns/chi ti\u1EBFt truy\u1EC1n v\xE0o qua input/slot.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 19)(50, "sg-example", 20)(51, "sg-row")(52, "div", 8);
        \u0275\u0275element(53, "hrm-list-screen", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "sg-example", 22)(55, "div", 23);
        \u0275\u0275element(56, "hrm-data-view", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(57, SgDocDataView_ng_template_57_Template, 15, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(59, SgDocDataView_ng_template_59_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(61, SgDocDataView_ng_template_61_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(63, SgDocDataView_ng_template_63_Template, 1, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(65, SgDocDataView_ng_template_65_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(67, SgDocDataView_ng_template_67_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("breadcrumb", ctx.crumbs)("columns", ctx.columns())("data", ctx.data)("cardTemplate", ctx.cardTpl())("detailContent", ctx.detailTpl())("detailRoute", ctx.routeFor)("total", ctx.data.length)("pageSize", 8)("modeLabels", ctx.modeLabels);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.icSearch)("size", 16);
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.icFilter)("size", 16);
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.icPlus)("size", 16);
        \u0275\u0275advance(19);
        \u0275\u0275property("when", ctx.when);
        \u0275\u0275advance(23);
        \u0275\u0275property("columns", ctx.columns())("data", ctx.data.slice(0, 4))("viewModes", \u0275\u0275pureFunction0(31, _c6))("detailContent", ctx.detailTpl())("detailRoute", ctx.routeFor)("modeLabels", ctx.modeLabels);
        \u0275\u0275advance(3);
        \u0275\u0275property("toolbar", true)("modes", \u0275\u0275pureFunction0(32, _c7))("columns", ctx.columns())("data", ctx.data)("searchable", true)("searchFields", \u0275\u0275pureFunction0(33, _c8))("filterable", true)("exportable", true)("cardTemplate", ctx.cardTpl());
      }
    }, dependencies: [
      HrmListScreen,
      HrmDataView,
      HrmUserCell,
      HrmStatusCell,
      HrmProgressCell,
      HrmTagsCell,
      HrmTag,
      HrmButton,
      TablerIconComponent,
      SgEmployeeDetail,
      SgDoc,
      SgUse,
      SgDo,
      SgDont,
      SgExample,
      SgRow
    ], styles: ["\n.tpl-frame[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: var(--bg-canvas);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.tpl-search[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n}\n.tpl-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  width: 160px;\n}\n.tpl-btn-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.tpl-btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n}\n.ec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ec-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.ec-kpi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.ec-kpi-l[_ngcontent-%COMP%] {\n  flex: none;\n}\n.ec-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--skeleton);\n  overflow: hidden;\n}\n.ec-bar-f[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: var(--radius-full);\n}\n.ec-kpi-v[_ngcontent-%COMP%] {\n  flex: none;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.ec-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n/*# sourceMappingURL=data-view.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDataView, [{
    type: Component,
    args: [{ selector: "sg-doc-data-view", imports: [
      HrmListScreen,
      HrmDataView,
      HrmUserCell,
      HrmStatusCell,
      HrmProgressCell,
      HrmTagsCell,
      HrmTag,
      HrmButton,
      TablerIconComponent,
      SgEmployeeDetail,
      SgDoc,
      SgUse,
      SgDo,
      SgDont,
      SgExample,
      SgRow
    ], template: `
    <sg-doc category="Template" title="M\xE0n h\xECnh Danh s\xE1ch + Chi ti\u1EBFt"
      desc="Template s\u1EB5n d\xF9ng cho m\u1ECDi m\xE0n h\xECnh danh s\xE1ch d\u1EEF li\u1EC7u: chrome (ti\xEAu \u0111\u1EC1, toolbar, ph\xE2n trang) + danh s\xE1ch 2 ch\u1EBF \u0111\u1ED9 B\u1EA3ng/Th\u1EBB + m\u1EDF chi ti\u1EBFt \u0111a-surface (c\u1EA1nh b\u1EA3ng, gi\u1EEFa m\xE0n h\xECnh, to\xE0n trang, tab m\u1EDBi). \u0110i\u1EC1n d\u1EEF li\u1EC7u l\xE0 ch\u1EA1y.">

      <div sgOverview>
        <div class="tpl-frame">
          <hrm-list-screen
            title="Nh\xE2n s\u1EF1" subtitle="Qu\u1EA3n l\xFD h\u1ED3 s\u01A1 nh\xE2n vi\xEAn to\xE0n c\xF4ng ty"
            [breadcrumb]="crumbs" [columns]="columns()" [data]="$any(data)" rowKey="id"
            [cardTemplate]="$any(cardTpl())" [detailContent]="$any(detailTpl())"
            [detailRoute]="routeFor" detailTitleField="name"
            [total]="data.length" [pageSize]="8"
            tableLabel="Xem d\u1EA1ng b\u1EA3ng" cardLabel="Xem d\u1EA1ng th\u1EBB"
            [modeLabels]="modeLabels" switchLabel="\u0110\u1ED5i c\xE1ch hi\u1EC3n th\u1ECB" expandLabel="M\u1EDF to\xE0n trang" closeLabel="\u0110\xF3ng">
            <span lsFilters class="tpl-search"><tabler-icon [icon]="icSearch" [size]="16" /><input placeholder="T\xECm nh\xE2n vi\xEAn\u2026" /></span>
            <button lsActions type="button" class="tpl-btn-ghost"><tabler-icon [icon]="icFilter" [size]="16" /> L\u1ECDc</button>
            <hrm-button lsActions variant="primary" size="sm"><tabler-icon [icon]="icPlus" [size]="16" /> Th\xEAm nh\xE2n vi\xEAn</hrm-button>
          </hrm-list-screen>
        </div>
        <p style="font-size: var(--fs-13);color:var(--text-sub);margin:14px 0 0;max-width:66ch;line-height:1.55">
          \u0110\xE2y l\xE0 <b>1 component</b> <code>hrm-list-screen</code> \u2014 \u0111i\u1EC1n <code>columns</code>, <code>data</code>
          v\xE0 2 template (th\u1EBB \xB7 chi ti\u1EBFt) l\xE0 ra m\xE0n h\xECnh \u0111\u1EA7y \u0111\u1EE7. B\u1EA5m d\xF2ng/th\u1EBB \u2192 m\u1EDF <b>drawer c\u1EA1nh b\u1EA3ng</b>;
          \u0111\u1ED5i sang gi\u1EEFa m\xE0n h\xECnh \xB7 to\xE0n trang \xB7 tab m\u1EDBi \u1EDF \u0111\u1EA7u h\u1ED9p chi ti\u1EBFt.
        </p>
      </div>

      <div sgUsage>
        <sg-use
          purpose="Template chu\u1EA9n cho M\u1ECCI m\xE0n h\xECnh danh s\xE1ch d\u1EEF li\u1EC7u (nh\xE2n s\u1EF1, \u0111\u01A1n t\u1EEB, h\u1EE3p \u0111\u1ED3ng\u2026). D\xF9ng nh\u01B0 app-shell: drop-in, \u0111i\u1EC1n d\u1EEF li\u1EC7u, kh\xF4ng d\u1EF1ng l\u1EA1i chrome/list/detail."
          [when]="when"
          behavior="hrm-list-screen gh\xE9p s\u1EB5n hrm-list-page (chrome) + hrm-data-view (B\u1EA3ng/Th\u1EBB) + hrm-detail-peek (4 surface). T\u1EF1 qu\u1EA3n b\u1EA3n ghi \u0111ang ch\u1ECDn + tr\u1EA1ng th\xE1i m\u1EDF."
          avoid="M\xE0n h\xECnh kh\xF4ng ph\u1EA3i danh s\xE1ch (dashboard, form nh\u1EADp) \u2014 d\xF9ng recipe kh\xE1c. Danh s\xE1ch si\xEAu \u0111\u01A1n gi\u1EA3n kh\xF4ng c\u1EA7n chi ti\u1EBFt \u2192 ch\u1EC9 hrm-grid." />
      </div>

      <div sgBest>
        <sg-do>D\xF9ng <b>hrm-list-screen</b> l\xE0m \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u cho m\xE0n danh s\xE1ch \u2014 kh\xF4ng t\u1EF1 gh\xE9p l\u1EA1i list + detail.</sg-do>
        <sg-do>\u0110\u1EB7t trong content c\u1EE7a <b>hrm-app-shell</b> (side nav l\u1EA5y t\u1EEB shell, kh\xF4ng l\u1EB7p).</sg-do>
        <sg-do>C\u1EA5p <b>detailRoute</b> \u0111\u1EC3 b\u1EADt mode To\xE0n trang / Tab m\u1EDBi (route b\u1EA3n ghi \u0111\u1ED9c l\u1EADp, chia s\u1EBB link \u0111\u01B0\u1EE3c).</sg-do>
        <sg-dont>\u0110\u1EEBng nh\u1ED3i logic ri\xEAng v\xE0o template \u2014 d\u1EEF li\u1EC7u/columns/chi ti\u1EBFt truy\u1EC1n v\xE0o qua input/slot.</sg-dont>
      </div>

      <div sgExamples>
        <sg-example title="Ch\u1EC9 B\u1EA3ng \u2014 m\u1EDF th\u1EB3ng To\xE0n trang"
          desc="\u1EA8n ch\u1EBF \u0111\u1ED9 Th\u1EBB (viewModes ch\u1EC9 table), m\u1EB7c \u0111\u1ECBnh m\u1EDF chi ti\u1EBFt To\xE0n trang thay v\xEC drawer. H\u1EE3p b\u1EA3n ghi nhi\u1EC1u tr\u01B0\u1EDDng c\u1EA7n kh\xF4ng gian r\u1ED9ng.">
          <sg-row>
            <div class="tpl-frame">
              <hrm-list-screen
                title="Nh\xE2n s\u1EF1" [columns]="columns()" [data]="$any(data.slice(0,4))" rowKey="id"
                [viewModes]="['table']" defaultMode="full" [detailContent]="$any(detailTpl())"
                [detailRoute]="routeFor" detailTitleField="name" [modeLabels]="modeLabels" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example title="Toolbar t\xEDch h\u1EE3p (search \xB7 s\u1EAFp x\u1EBFp \xB7 c\u1ED9t \xB7 xu\u1EA5t)"
          desc="hrm-data-view [toolbar]=true \u2192 thanh c\xF4ng c\u1EE5 d\xF9ng chung tr\xEAn M\u1ECCI ch\u1EBF \u0111\u1ED9 xem: t\xECm ki\u1EBFm l\u1ECDc d\u1EEF li\u1EC7u, B\u1ED9 l\u1ECDc/Xu\u1EA5t ph\xE1t event; n\xFAt S\u1EAFp x\u1EBFp (\u0111a c\u1EA5p) + C\u1ED9t ch\u1EC9 hi\u1EC7n \u1EDF ch\u1EBF \u0111\u1ED9 B\u1EA3ng, n\u1ED1i chung state v\u1EDBi b\u1EA3ng.">
          <div class="tpl-frame" style="padding:16px">
            <hrm-data-view [toolbar]="true" [modes]="['table','card']"
              [columns]="columns()" [data]="$any(data)" rowKey="id"
              [searchable]="true" [searchFields]="['name','email','role']" searchPlaceholder="T\xECm theo t\xEAn ho\u1EB7c email\u2026"
              countLabel="nh\xE2n vi\xEAn" [filterable]="true" [exportable]="true"
              [cardTemplate]="$any(cardTpl())" tableLabel="B\u1EA3ng" cardLabel="Th\u1EBB" />
          </div>
        </sg-example>
      </div>
    </sg-doc>

    <!-- Template th\u1EBB (ch\u1EBF \u0111\u1ED9 Th\u1EBB) \u2014 context: row -->
    <ng-template #tplCard let-row>
      <div class="ec">
        <div class="ec-top">
          <hrm-user-cell [name]="row.name" [sub]="row.role" />
          <hrm-tag [color]="toneHue(row)" variant="light" [dot]="true" size="sm">{{ statusLabel(row) }}</hrm-tag>
        </div>
        <div class="ec-kpi">
          <span class="ec-kpi-l">KPI</span>
          <span class="ec-bar"><span class="ec-bar-f" [style.width.%]="row.kpi" [style.background]="kpiColor(row.kpi)"></span></span>
          <span class="ec-kpi-v">{{ row.kpi }}%</span>
        </div>
        <div class="ec-skills">
          @for (s of row.skills; track s) { <hrm-tag color="blue" variant="lighter" size="sm">{{ s }}</hrm-tag> }
        </div>
      </div>
    </ng-template>

    <!-- Cell B\u1EA3ng -->
    <ng-template #cUser let-row><hrm-user-cell [name]="row.name" [sub]="row.email" /></ng-template>
    <ng-template #cSkills let-row><hrm-tags-cell [tags]="skillTags(row)" [max]="2" /></ng-template>
    <ng-template #cKpi let-row><hrm-progress-cell [value]="row.kpi" [color]="kpiTone(row.kpi)" /></ng-template>
    <ng-template #cStatus let-row><hrm-status-cell [status]="tone(row)" [label]="statusLabel(row)" variant="dot" /></ng-template>

    <!-- N\u1ED9i dung chi ti\u1EBFt d\xF9ng chung m\u1ECDi surface \u2014 row = b\u1EA3n ghi \u0111ang ch\u1ECDn -->
    <ng-template #tplDetail let-row><sg-employee-detail [emp]="row" /></ng-template>
  `, styles: ["/* angular:styles/component:css;5acb74398561f1743216749183d5a2ee1d9f9bed451b23c00c8149056bfaa50f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/data-view.ts */\n.tpl-frame {\n  padding: 16px;\n  background: var(--bg-canvas);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.tpl-search {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n}\n.tpl-search input {\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  width: 160px;\n}\n.tpl-btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.tpl-btn-ghost:hover {\n  border-color: var(--primary-border);\n}\n.ec {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ec-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.ec-kpi {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.ec-kpi-l {\n  flex: none;\n}\n.ec-bar {\n  flex: 1;\n  height: 6px;\n  border-radius: var(--radius-full);\n  background: var(--skeleton);\n  overflow: hidden;\n}\n.ec-bar-f {\n  display: block;\n  height: 100%;\n  border-radius: var(--radius-full);\n}\n.ec-kpi-v {\n  flex: none;\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.ec-skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n/*# sourceMappingURL=data-view.css.map */\n"] }]
  }], null, { cUser: [{ type: ViewChild, args: ["cUser", { isSignal: true }] }], cSkills: [{ type: ViewChild, args: ["cSkills", { isSignal: true }] }], cKpi: [{ type: ViewChild, args: ["cKpi", { isSignal: true }] }], cStatus: [{ type: ViewChild, args: ["cStatus", { isSignal: true }] }], cardTpl: [{ type: ViewChild, args: ["tplCard", { isSignal: true }] }], detailTpl: [{ type: ViewChild, args: ["tplDetail", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDataView, { className: "SgDocDataView", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/data-view.ts", lineNumber: 134 });
})();
export {
  SgDocDataView
};
//# sourceMappingURL=chunk-4H6GGOQC.js.map
