import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import {
  HrmAvatar
} from "./chunk-KS5WOU2W.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/_data.ts
var EMPLOYEES = [
  { id: "E01", name: "Nguy\u1EC5n V\u0103n An", email: "an.nguyen@vnr.vn", role: "Tr\u01B0\u1EDFng ph\xF2ng", dept: "Nh\xE2n s\u1EF1", status: "active", kpi: 92, skills: ["Qu\u1EA3n l\xFD", "Tuy\u1EC3n d\u1EE5ng", "C&B"], phone: "0901 234 567", joined: "2021-03-01", location: "H\xE0 N\u1ED9i", manager: "Tr\u1EA7n Qu\u1ED1c B\u1EA3o" },
  { id: "E02", name: "Tr\u1EA7n Th\u1ECB B\xECnh", email: "binh.tran@vnr.vn", role: "Chuy\xEAn vi\xEAn", dept: "K\u1EBF to\xE1n", status: "active", kpi: 68, skills: ["Excel", "B\xE1o c\xE1o"], phone: "0902 345 678", joined: "2022-07-12", location: "H\xE0 N\u1ED9i", manager: "L\xEA Thu H\xE0" },
  { id: "E03", name: "L\xEA V\u0103n C\u01B0\u1EDDng", email: "cuong.le@vnr.vn", role: "Th\u1EF1c t\u1EADp sinh", dept: "K\u1EF9 thu\u1EADt", status: "probation", kpi: 45, skills: ["Angular", "Figma"], phone: "0903 456 789", joined: "2024-11-01", location: "TP.HCM", manager: "Ph\u1EA1m Minh \u0110\u1EE9c" },
  { id: "E04", name: "Ph\u1EA1m Thu Dung", email: "dung.pham@vnr.vn", role: "Qu\u1EA3n l\xFD", dept: "Kinh doanh", status: "active", kpi: 81, skills: ["K\u1EBF ho\u1EA1ch", "Ng\xE2n s\xE1ch"], phone: "0904 567 890", joined: "2020-01-15", location: "TP.HCM", manager: "Tr\u1EA7n Qu\u1ED1c B\u1EA3o" },
  { id: "E05", name: "\u0110\u1ED7 Minh Em", email: "em.do@vnr.vn", role: "Nh\xE2n vi\xEAn", dept: "Ch\u1EA5m c\xF4ng", status: "active", kpi: 74, skills: ["Ch\u1EA5m c\xF4ng", "H\u1ED3 s\u01A1"], phone: "0905 678 901", joined: "2023-02-20", location: "\u0110\xE0 N\u1EB5ng", manager: "Nguy\u1EC5n V\u0103n An" },
  { id: "E06", name: "V\u0169 H\u1EA3i Phong", email: "phong.vu@vnr.vn", role: "Qu\u1EA3n l\xFD", dept: "\u0110\u1ED1i ngo\u1EA1i", status: "leave", kpi: 58, skills: ["\u0110\u1ED1i ngo\u1EA1i", "H\u1EE3p \u0111\u1ED3ng"], phone: "0906 789 012", joined: "2019-06-10", location: "H\xE0 N\u1ED9i", manager: "Tr\u1EA7n Qu\u1ED1c B\u1EA3o" },
  { id: "E07", name: "Ho\xE0ng Th\u1ECB Giang", email: "giang.hoang@vnr.vn", role: "Chuy\xEAn vi\xEAn", dept: "\u0110\xE0o t\u1EA1o", status: "active", kpi: 88, skills: ["\u0110\xE0o t\u1EA1o", "N\u1ED9i dung"], phone: "0907 890 123", joined: "2021-09-05", location: "TP.HCM", manager: "Ph\u1EA1m Thu Dung" },
  { id: "E08", name: "B\xF9i Quang Huy", email: "huy.bui@vnr.vn", role: "Nh\xE2n vi\xEAn", dept: "K\u1EF9 thu\u1EADt", status: "probation", kpi: 63, skills: ["Node", "SQL"], phone: "0908 901 234", joined: "2024-08-18", location: "\u0110\xE0 N\u1EB5ng", manager: "L\xEA V\u0103n C\u01B0\u1EDDng" }
];
function findEmployee(id) {
  if (!id)
    return null;
  return EMPLOYEES.find((e) => e.id === id) ?? null;
}
var STATUS_META = {
  active: { label: "\u0110ang l\xE0m", tone: "success" },
  leave: { label: "Ngh\u1EC9 ph\xE9p", tone: "warning" },
  probation: { label: "Th\u1EED vi\u1EC7c", tone: "neutral" }
};

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/employee-detail.ts
var _forTrack0 = ($index, $item) => $item.label;
function SgEmployeeDetail_Conditional_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r1.value);
  }
}
function SgEmployeeDetail_Conditional_0_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2);
  }
}
function SgEmployeeDetail_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "hrm-avatar", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "hrm-tag", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "span");
    \u0275\u0275text(13, "Hi\u1EC7u su\u1EA5t KPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275element(17, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275repeaterCreate(19, SgEmployeeDetail_Conditional_0_For_20_Template, 5, 2, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15)(22, "div", 16);
    \u0275\u0275text(23, "K\u1EF9 n\u0103ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275repeaterCreate(25, SgEmployeeDetail_Conditional_0_For_26_Template, 2, 1, "hrm-tag", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r3 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ed--full", ctx_r3.full());
    \u0275\u0275advance(2);
    \u0275\u0275property("text", ctx_r3.initials(e_r3.name))("colorSeed", e_r3.name)("colorful", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r3.role, " \xB7 ", e_r3.dept);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r3.tone(e_r3))("dot", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(e_r3));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", e_r3.kpi, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", e_r3.kpi, "%")("background", ctx_r3.kpiColor(e_r3.kpi));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.fields(e_r3));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(e_r3.skills);
  }
}
var SgEmployeeDetail = class _SgEmployeeDetail {
  constructor() {
    this.emp = input(null, ...ngDevMode ? [{ debugName: "emp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.full = input(false, ...ngDevMode ? [{ debugName: "full" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  initials(name) {
    const p = name.trim().split(/\s+/);
    return ((p[0]?.[0] ?? "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  tone(e) {
    return e.status === "active" ? "green" : e.status === "leave" ? "yellow" : "gray";
  }
  statusLabel(e) {
    return STATUS_META[e.status].label;
  }
  kpiColor(v) {
    return v >= 80 ? "var(--success-base)" : v >= 60 ? "var(--warning-base)" : "var(--error-base)";
  }
  fields(e) {
    return [
      { label: "Email", value: e.email },
      { label: "\u0110i\u1EC7n tho\u1EA1i", value: e.phone },
      { label: "Ph\xF2ng ban", value: e.dept },
      { label: "Qu\u1EA3n l\xFD", value: e.manager },
      { label: "N\u01A1i l\xE0m vi\u1EC7c", value: e.location },
      { label: "Ng\xE0y v\xE0o", value: e.joined }
    ];
  }
  static {
    this.\u0275fac = function SgEmployeeDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgEmployeeDetail)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgEmployeeDetail, selectors: [["sg-employee-detail"]], inputs: { emp: [1, "emp"], full: [1, "full"] }, decls: 1, vars: 1, consts: [[1, "ed", 3, "ed--full"], [1, "ed"], [1, "ed-hero"], ["size", "large", 3, "text", "colorSeed", "colorful"], [1, "ed-hero-info"], [1, "ed-name"], [1, "ed-role"], ["variant", "light", 3, "color", "dot"], [1, "ed-kpi"], [1, "ed-kpi-top"], [1, "ed-kpi-v"], [1, "ed-bar"], [1, "ed-bar-fill"], [1, "ed-fields"], [1, "ed-field"], [1, "ed-block"], [1, "ed-blabel"], [1, "ed-skills"], ["color", "blue", "variant", "light", "size", "sm"], [1, "ed-flabel"], [1, "ed-fvalue"]], template: function SgEmployeeDetail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgEmployeeDetail_Conditional_0_Template, 27, 16, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.emp()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [HrmAvatar, HrmTag], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.ed[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ed-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ed-hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ed-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-18);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ed-role[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-top: 2px;\n}\n.ed-kpi-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-bottom: 6px;\n}\n.ed-kpi-v[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ed-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: var(--skeleton);\n  overflow: hidden;\n}\n.ed-bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: var(--radius-full);\n}\n.ed-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n}\n.ed--full[_ngcontent-%COMP%]   .ed-fields[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.ed-flabel[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-bottom: 2px;\n}\n.ed-fvalue[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.ed-blabel[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-bottom: 8px;\n}\n.ed-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n/*# sourceMappingURL=employee-detail.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgEmployeeDetail, [{
    type: Component,
    args: [{ selector: "sg-employee-detail", imports: [HrmAvatar, HrmTag], template: `
    @if (emp(); as e) {
      <div class="ed" [class.ed--full]="full()">
        <div class="ed-hero">
          <hrm-avatar [text]="initials(e.name)" [colorSeed]="e.name" [colorful]="true" size="large" />
          <div class="ed-hero-info">
            <div class="ed-name">{{ e.name }}</div>
            <div class="ed-role">{{ e.role }} \xB7 {{ e.dept }}</div>
          </div>
          <hrm-tag [color]="tone(e)" variant="light" [dot]="true">{{ statusLabel(e) }}</hrm-tag>
        </div>

        <div class="ed-kpi">
          <div class="ed-kpi-top"><span>Hi\u1EC7u su\u1EA5t KPI</span><span class="ed-kpi-v">{{ e.kpi }}%</span></div>
          <div class="ed-bar"><span class="ed-bar-fill" [style.width.%]="e.kpi" [style.background]="kpiColor(e.kpi)"></span></div>
        </div>

        <div class="ed-fields">
          @for (f of fields(e); track f.label) {
            <div class="ed-field">
              <div class="ed-flabel">{{ f.label }}</div>
              <div class="ed-fvalue">{{ f.value }}</div>
            </div>
          }
        </div>

        <div class="ed-block">
          <div class="ed-blabel">K\u1EF9 n\u0103ng</div>
          <div class="ed-skills">
            @for (s of e.skills; track s) { <hrm-tag color="blue" variant="light" size="sm">{{ s }}</hrm-tag> }
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;e17551ed8970b372e3a4c5d3a62897ddf5e01c00046c4d8caef5e4da8a564847;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/employee-detail.ts */\n:host {\n  display: block;\n}\n.ed {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.ed-hero {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.ed-hero-info {\n  flex: 1;\n  min-width: 0;\n}\n.ed-name {\n  font-size: var(--fs-18);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ed-role {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-top: 2px;\n}\n.ed-kpi-top {\n  display: flex;\n  justify-content: space-between;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-bottom: 6px;\n}\n.ed-kpi-v {\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ed-bar {\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: var(--skeleton);\n  overflow: hidden;\n}\n.ed-bar-fill {\n  display: block;\n  height: 100%;\n  border-radius: var(--radius-full);\n}\n.ed-fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 20px;\n}\n.ed--full .ed-fields {\n  grid-template-columns: repeat(3, 1fr);\n}\n.ed-flabel {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-bottom: 2px;\n}\n.ed-fvalue {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.ed-blabel {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-bottom: 8px;\n}\n.ed-skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n/*# sourceMappingURL=employee-detail.css.map */\n"] }]
  }], null, { emp: [{ type: Input, args: [{ isSignal: true, alias: "emp", required: false }] }], full: [{ type: Input, args: [{ isSignal: true, alias: "full", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgEmployeeDetail, { className: "SgEmployeeDetail", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-list/employee-detail.ts", lineNumber: 64 });
})();

export {
  EMPLOYEES,
  findEmployee,
  STATUS_META,
  SgEmployeeDetail
};
//# sourceMappingURL=chunk-NURUCK6A.js.map
