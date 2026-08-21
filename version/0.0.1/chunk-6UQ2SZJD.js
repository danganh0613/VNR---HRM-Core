import {
  SgEmployeeDetail,
  findEmployee
} from "./chunk-6YH2KIL3.js";
import "./chunk-5U2K2VEK.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-WH372SY7.js";
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import {
  toSignal
} from "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  ArrowLeft,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/record.ts
function SgDocRecord_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "sg-employee-detail", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("emp", ctx)("full", true);
  }
}
function SgDocRecord_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi. ");
    \u0275\u0275elementStart(2, "a", 8);
    \u0275\u0275listener("click", function SgDocRecord_Conditional_8_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(3, "V\u1EC1 danh s\xE1ch");
    \u0275\u0275elementEnd()();
  }
}
var SgDocRecord = class _SgDocRecord {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.params = toSignal(this.route.queryParams, { initialValue: {} });
    this.emp = computed(() => findEmployee(this.params()["id"] ?? null), ...ngDevMode ? [{ debugName: "emp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icBack = ArrowLeft;
  }
  back() {
    this.router.navigateByUrl("/styleguide/hrm/template/list-screen");
  }
  static {
    this.\u0275fac = function SgDocRecord_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRecord)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRecord, selectors: [["sg-doc-record"]], decls: 9, vars: 3, consts: [[1, "rec"], [1, "rec-bar"], ["variant", "text", "size", "sm", 3, "click"], [3, "icon", "size"], [1, "rec-crumb"], [1, "rec-card"], [1, "rec-empty"], [3, "emp", "full"], [3, "click"]], template: function SgDocRecord_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocRecord_Template_hrm_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275element(3, "tabler-icon", 3);
        \u0275\u0275text(4, " Danh s\xE1ch ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Nh\xE2n s\u1EF1 / Chi ti\u1EBFt");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, SgDocRecord_Conditional_7_Template, 2, 2, "div", 5)(8, SgDocRecord_Conditional_8_Template, 4, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.icBack)("size", 17);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_2_0 = ctx.emp()) ? 7 : 8, tmp_2_0);
      }
    }, dependencies: [HrmButton, TablerIconComponent, SgEmployeeDetail], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.rec[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n  padding: 8px 4px;\n}\n.rec-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.rec-crumb[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n}\n.rec-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n}\n.rec-empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-sub);\n}\n.rec-empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  cursor: pointer;\n}\n/*# sourceMappingURL=record.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRecord, [{
    type: Component,
    args: [{ selector: "sg-doc-record", imports: [HrmButton, TablerIconComponent, SgEmployeeDetail], template: `
    <div class="rec">
      <div class="rec-bar">
        <hrm-button variant="text" size="sm" (click)="back()">
          <tabler-icon [icon]="icBack" [size]="17" /> Danh s\xE1ch
        </hrm-button>
        <span class="rec-crumb">Nh\xE2n s\u1EF1 / Chi ti\u1EBFt</span>
      </div>

      @if (emp(); as e) {
        <div class="rec-card">
          <sg-employee-detail [emp]="e" [full]="true" />
        </div>
      } @else {
        <div class="rec-empty">Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi. <a (click)="back()">V\u1EC1 danh s\xE1ch</a></div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;1e77bdc885ce4d835989e26041c844174b557086c048b2dd67405eb4ab60c77c;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/record.ts */\n:host {\n  display: block;\n}\n.rec {\n  max-width: 920px;\n  margin: 0 auto;\n  padding: 8px 4px;\n}\n.rec-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.rec-crumb {\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n}\n.rec-card {\n  padding: 24px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n}\n.rec-empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-sub);\n}\n.rec-empty a {\n  color: var(--primary-base);\n  cursor: pointer;\n}\n/*# sourceMappingURL=record.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRecord, { className: "SgDocRecord", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/record.ts", lineNumber: 42 });
})();
export {
  SgDocRecord
};
//# sourceMappingURL=chunk-6UQ2SZJD.js.map
