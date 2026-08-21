import {
  PEOPLE,
  SgEmpDetail
} from "./chunk-TUUBJ2RH.js";
import "./chunk-2VWX42WS.js";
import "./chunk-YN6HMLUF.js";
import "./chunk-FJLQWKKP.js";
import "./chunk-VLFJLHOW.js";
import "./chunk-5QKS2MQ6.js";
import "./chunk-5U2K2VEK.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-LQM5UC6B.js";
import {
  ActivatedRoute
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
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  Location
} from "./chunk-D2BVEXVI.js";
import {
  ArrowLeft,
  Check,
  Edit,
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import "./chunk-JVYAKZTD.js";
import {
  Component,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/list-record.ts
function SgListRecord_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "hrm-button", 11);
    \u0275\u0275element(2, "tabler-icon", 5);
    \u0275\u0275text(3, " Duy\u1EC7t ch\xEDnh th\u1EE9c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "hrm-button", 12);
    \u0275\u0275element(5, "tabler-icon", 5);
    \u0275\u0275text(6, " S\u1EEDa h\u1ED3 s\u01A1");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.icCheck)("size", 15);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r0.icEdit)("size", 15);
  }
}
function SgListRecord_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "sg-emp-detail", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("emp", ctx_r0.row)("pageMode", true);
  }
}
function SgListRecord_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi.");
    \u0275\u0275elementEnd();
  }
}
var SgListRecord = class _SgListRecord {
  constructor() {
    this.location = inject(Location);
    this.icBack = ArrowLeft;
    this.icCheck = Check;
    this.icEdit = Edit;
    this.row = PEOPLE.find((p) => String(p["id"]) === (inject(ActivatedRoute).snapshot.queryParamMap.get("id") ?? "")) ?? null;
  }
  back() {
    this.location.back();
  }
  static {
    this.\u0275fac = function SgListRecord_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgListRecord)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgListRecord, selectors: [["sg-list-record"]], hostAttrs: [1, "sg-list-record"], decls: 12, vars: 5, consts: [[1, "lr"], [1, "lr-nav"], [1, "lr-nav-in"], [1, "lr-nav-l"], ["size", "sm", "ariaLabel", "Quay l\u1EA1i", 3, "click", "iconOnly"], [3, "icon", "size"], [1, "lr-t"], [1, "lr-nav-r"], [1, "lr-body"], [1, "lr-card"], [1, "lr-empty"], ["variant", "primary", "size", "md"], ["size", "md"], [3, "emp", "pageMode"]], template: function SgListRecord_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "hrm-button", 4);
        \u0275\u0275listener("click", function SgListRecord_Template_hrm_button_click_4_listener() {
          return ctx.back();
        });
        \u0275\u0275element(5, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 6);
        \u0275\u0275text(7, "Chi ti\u1EBFt nh\xE2n vi\xEAn");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, SgListRecord_Conditional_8_Template, 7, 4, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275conditionalCreate(10, SgListRecord_Conditional_10_Template, 2, 2, "div", 9)(11, SgListRecord_Conditional_11_Template, 2, 0, "p", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icBack)("size", 18);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.row ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.row ? 10 : 11);
      }
    }, dependencies: [TablerIconComponent, HrmButton, SgEmpDetail], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n  .shell-content:has(sg-list-record) {\n  padding: 0 !important;\n}\n.lr[_ngcontent-%COMP%] {\n  display: block;\n}\n.lr-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.lr-nav-in[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-3) var(--space-4);\n}\n.lr-nav-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-width: 0;\n}\n.lr-nav-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex: none;\n}\n.lr-t[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.lr-body[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-2);\n}\n.lr-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  padding: var(--space-5);\n}\n.lr-empty[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=list-record.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgListRecord, [{
    type: Component,
    args: [{ selector: "sg-list-record", imports: [TablerIconComponent, HrmButton, SgEmpDetail], template: `
    <div class="lr">
      <!-- TOPNAV full-width, STICKY s\xE1t \u0111\u1EC9nh v\xF9ng cu\u1ED9n: back + ti\xEAu \u0111\u1EC1 (tr\xE1i) + h\xE0nh \u0111\u1ED9ng (ph\u1EA3i).
           margin-inline \xE2m \u0111\u1EC3 tr\u1EA3i h\u1EBFt b\u1EC1 r\u1ED9ng content shell (tho\xE1t padding + canh gi\u1EEFa). -->
      <div class="lr-nav">
        <div class="lr-nav-in">
          <div class="lr-nav-l">
            <hrm-button size="sm" [iconOnly]="true" ariaLabel="Quay l\u1EA1i" (click)="back()"><tabler-icon [icon]="icBack" [size]="18" /></hrm-button>
            <h1 class="lr-t">Chi ti\u1EBFt nh\xE2n vi\xEAn</h1>
          </div>
          @if (row) {
            <div class="lr-nav-r">
              <hrm-button variant="primary" size="md"><tabler-icon [icon]="icCheck" [size]="15" /> Duy\u1EC7t ch\xEDnh th\u1EE9c</hrm-button>
              <hrm-button size="md"><tabler-icon [icon]="icEdit" [size]="15" /> S\u1EEDa h\u1ED3 s\u01A1</hrm-button>
            </div>
          }
        </div>
      </div>

      <!-- N\u1ED9i dung: card canh gi\u1EEFa, r\u1ED9ng theo page content. -->
      <div class="lr-body">
        @if (row) {
          <div class="lr-card"><sg-emp-detail [emp]="row" [pageMode]="true" /></div>
        } @else {
          <p class="lr-empty">Kh\xF4ng t\xECm th\u1EA5y b\u1EA3n ghi.</p>
        }
      </div>
    </div>
  `, host: { class: "sg-list-record" }, styles: ["/* angular:styles/component:css;29fdf45aedbad2e7d20583be1fef6f61644ba2404c1c8b292bedb59e1ca04e55;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/list-record.ts */\n:host {\n  display: block;\n}\n::ng-deep .shell-content:has(sg-list-record) {\n  padding: 0 !important;\n}\n.lr {\n  display: block;\n}\n.lr-nav {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-sub);\n}\n.lr-nav-in {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-3) var(--space-4);\n}\n.lr-nav-l {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-width: 0;\n}\n.lr-nav-r {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex: none;\n}\n.lr-t {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n}\n.lr-body {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: var(--space-5) var(--space-4) var(--space-2);\n}\n.lr-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  padding: var(--space-5);\n}\n.lr-empty {\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=list-record.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgListRecord, { className: "SgListRecord", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/list-record.ts", lineNumber: 79 });
})();
export {
  SgListRecord
};
//# sourceMappingURL=chunk-L5TDCUC4.js.map
