import {
  NzPaginationComponent,
  NzPaginationModule
} from "./chunk-63BVE4AM.js";
import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/navigation/hrm-pagination.ts
var HrmPagination = class _HrmPagination {
  constructor() {
    this.pageIndex = input(1, ...ngDevMode ? [{ debugName: "pageIndex" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = input(0, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = input(10, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSizeChanger = input(false, ...ngDevMode ? [{ debugName: "showSizeChanger" }] : (
      /* istanbul ignore next */
      []
    ));
    this.simple = input(false, ...ngDevMode ? [{ debugName: "simple" }] : (
      /* istanbul ignore next */
      []
    ));
    this.responsive = input(false, ...ngDevMode ? [{ debugName: "responsive" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageIndexChange = output();
    this.pageSizeChange = output();
  }
  static {
    this.\u0275fac = function HrmPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPagination)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmPagination, selectors: [["hrm-pagination"]], hostAttrs: [1, "hrm-pagination"], inputs: { pageIndex: [1, "pageIndex"], total: [1, "total"], pageSize: [1, "pageSize"], showSizeChanger: [1, "showSizeChanger"], simple: [1, "simple"], responsive: [1, "responsive"], size: [1, "size"] }, outputs: { pageIndexChange: "pageIndexChange", pageSizeChange: "pageSizeChange" }, decls: 1, vars: 7, consts: [[3, "nzPageIndexChange", "nzPageSizeChange", "nzPageIndex", "nzTotal", "nzPageSize", "nzShowSizeChanger", "nzSimple", "nzResponsive", "nzSize"]], template: function HrmPagination_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-pagination", 0);
        \u0275\u0275listener("nzPageIndexChange", function HrmPagination_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
          return ctx.pageIndexChange.emit($event);
        })("nzPageSizeChange", function HrmPagination_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
          return ctx.pageSizeChange.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzPageIndex", ctx.pageIndex())("nzTotal", ctx.total())("nzPageSize", ctx.pageSize())("nzShowSizeChanger", ctx.showSizeChanger())("nzSimple", ctx.simple())("nzResponsive", ctx.responsive())("nzSize", ctx.size());
      }
    }, dependencies: [NzPaginationModule, NzPaginationComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPagination, [{
    type: Component,
    args: [{
      selector: "hrm-pagination",
      imports: [NzPaginationModule],
      template: `
    <nz-pagination
      [nzPageIndex]="pageIndex()"
      [nzTotal]="total()"
      [nzPageSize]="pageSize()"
      [nzShowSizeChanger]="showSizeChanger()"
      [nzSimple]="simple()"
      [nzResponsive]="responsive()"
      [nzSize]="size()"
      (nzPageIndexChange)="pageIndexChange.emit($event)"
      (nzPageSizeChange)="pageSizeChange.emit($event)"></nz-pagination>
  `,
      host: { class: "hrm-pagination" }
    }]
  }], null, { pageIndex: [{ type: Input, args: [{ isSignal: true, alias: "pageIndex", required: false }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }], showSizeChanger: [{ type: Input, args: [{ isSignal: true, alias: "showSizeChanger", required: false }] }], simple: [{ type: Input, args: [{ isSignal: true, alias: "simple", required: false }] }], responsive: [{ type: Input, args: [{ isSignal: true, alias: "responsive", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], pageIndexChange: [{ type: Output, args: ["pageIndexChange"] }], pageSizeChange: [{ type: Output, args: ["pageSizeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmPagination, { className: "HrmPagination", filePath: "libs/hrm-ui/src/lib/navigation/hrm-pagination.ts", lineNumber: 22 });
})();

export {
  HrmPagination
};
//# sourceMappingURL=chunk-CVBIZBQ2.js.map
