import {
  HrmApprovalFlow
} from "./chunk-FJLQWKKP.js";
import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import {
  HRM_WORKFLOW_STATUS,
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
import {
  HrmTag
} from "./chunk-5U2K2VEK.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_requests.ts
var REQ_TYPES = {
  leave: "Ngh\u1EC9 ph\xE9p n\u0103m",
  business: "\u0110i c\xF4ng t\xE1c",
  ot: "\u0110\u0103ng k\xFD t\u0103ng ca",
  remote: "L\xE0m vi\u1EC7c t\u1EEB xa",
  unpaid: "Ngh\u1EC9 kh\xF4ng l\u01B0\u01A1ng"
};
function parseDMY(s) {
  const [d, m, y] = s.split("/").map(Number);
  return new Date(y || 2026, (m || 1) - 1, d || 1);
}
function requestRows() {
  return REQUESTS.map((r) => __spreadProps(__spreadValues({}, r), { start: parseDMY(r.from), end: parseDMY(r.to) }));
}
function reqStatusMeta(s) {
  if (s === "draft")
    return { tone: "neutral", vi: "Nh\xE1p" };
  return HRM_WORKFLOW_STATUS[s];
}
var REQUESTS = [
  { id: 1, code: "NP-2026-0042", type: "leave", applicant: "Nguy\u1EC5n Th\u1ECB Mai Anh", dept: "Nh\xE2n s\u1EF1", from: "05/08/2026", to: "07/08/2026", days: 3, unit: "ng\xE0y", reason: "V\u1EC1 qu\xEA c\xF3 vi\u1EC7c gia \u0111\xECnh.", status: "pending", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "01/08/2026" },
  { id: 2, code: "CT-2026-0119", type: "business", applicant: "L\xEA Qu\u1ED1c B\u1EA3o", dept: "Kinh doanh", from: "10/08/2026", to: "12/08/2026", days: 3, unit: "ng\xE0y", reason: "C\xF4ng t\xE1c k\xFD h\u1EE3p \u0111\u1ED3ng kh\xE1ch h\xE0ng \u0110\xE0 N\u1EB5ng.", status: "pending", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "02/08/2026" },
  { id: 3, code: "TC-2026-0203", type: "ot", applicant: "Ph\u1EA1m H\u1ED3ng Nhung", dept: "K\u1EF9 thu\u1EADt", from: "03/08/2026", to: "03/08/2026", days: 4, unit: "gi\u1EDD", reason: "X\u1EED l\xFD s\u1EF1 c\u1ED1 h\u1EC7 th\u1ED1ng ngo\xE0i gi\u1EDD.", status: "approved", approver: "V\u0169 \u0110\xECnh Nam", submittedAt: "02/08/2026" },
  { id: 4, code: "NP-2026-0041", type: "leave", applicant: "\u0110\u1EB7ng Anh", dept: "Nh\xE2n s\u1EF1", from: "28/07/2026", to: "29/07/2026", days: 2, unit: "ng\xE0y", reason: "Kh\xE1m s\u1EE9c kh\u1ECFe \u0111\u1ECBnh k\u1EF3.", status: "rejected", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "25/07/2026" },
  { id: 5, code: "RM-2026-0087", type: "remote", applicant: "Ho\xE0ng Minh Tu\u1EA5n", dept: "K\u1EF9 thu\u1EADt", from: "06/08/2026", to: "06/08/2026", days: 1, unit: "ng\xE0y", reason: "L\xE0m t\u1EEB xa do b\u1EADn vi\u1EC7c c\xE1 nh\xE2n.", status: "changeRequested", approver: "V\u0169 \u0110\xECnh Nam", submittedAt: "03/08/2026" },
  { id: 6, code: "NP-2026-0040", type: "leave", applicant: "Tr\u1ECBnh Thu H\xE0", dept: "K\u1EBF to\xE1n", from: "15/08/2026", to: "19/08/2026", days: 5, unit: "ng\xE0y", reason: "Ngh\u1EC9 ph\xE9p n\u0103m \u2014 du l\u1ECBch c\xF9ng gia \u0111\xECnh.", status: "draft", approver: "Ng\xF4 Th\u1ECB Lan", submittedAt: "\u2014" },
  { id: 7, code: "CT-2026-0118", type: "business", applicant: "B\xF9i Thanh S\u01A1n", dept: "Kinh doanh", from: "20/08/2026", to: "22/08/2026", days: 3, unit: "ng\xE0y", reason: "Tham d\u1EF1 h\u1ED9i ch\u1EE3 tri\u1EC3n l\xE3m t\u1EA1i H\xE0 N\u1ED9i.", status: "draft", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "\u2014" },
  { id: 8, code: "NP-2026-0039", type: "leave", applicant: "\u0110\u1ED7 Kh\xE1nh Linh", dept: "Marketing", from: "30/07/2026", to: "30/07/2026", days: 1, unit: "ng\xE0y", reason: "Vi\u1EC7c c\xE1 nh\xE2n \u0111\u1ED9t xu\u1EA5t.", status: "approved", approver: "Ng\xF4 Th\u1ECB Lan", submittedAt: "28/07/2026" },
  { id: 9, code: "UP-2026-0007", type: "unpaid", applicant: "Mai Xu\xE2n Tr\u01B0\u1EDDng", dept: "K\u1EF9 thu\u1EADt", from: "01/09/2026", to: "15/09/2026", days: 15, unit: "ng\xE0y", reason: "Ngh\u1EC9 kh\xF4ng l\u01B0\u01A1ng \u2014 l\xFD do gia \u0111\xECnh.", status: "pending", approver: "V\u0169 \u0110\xECnh Nam", submittedAt: "03/08/2026" },
  { id: 10, code: "TC-2026-0202", type: "ot", applicant: "L\xFD B\u1EA3o Ch\xE2u", dept: "K\u1EBF to\xE1n", from: "31/07/2026", to: "31/07/2026", days: 3, unit: "gi\u1EDD", reason: "Ch\u1ED1t s\u1ED5 cu\u1ED1i th\xE1ng.", status: "approved", approver: "Ng\xF4 Th\u1ECB Lan", submittedAt: "30/07/2026" },
  { id: 11, code: "NP-2026-0038", type: "leave", applicant: "Cao Vi\u1EC7t D\u0169ng", dept: "Kinh doanh", from: "08/08/2026", to: "09/08/2026", days: 2, unit: "ng\xE0y", reason: "Ngh\u1EC9 ph\xE9p n\u0103m.", status: "pending", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "04/08/2026" },
  { id: 12, code: "RM-2026-0086", type: "remote", applicant: "Phan Th\xF9y D\u01B0\u01A1ng", dept: "Marketing", from: "04/08/2026", to: "05/08/2026", days: 2, unit: "ng\xE0y", reason: "L\xE0m t\u1EEB xa \u2014 ch\u0103m con nh\u1ECF.", status: "rejected", approver: "Ng\xF4 Th\u1ECB Lan", submittedAt: "01/08/2026" },
  { id: 13, code: "CT-2026-0117", type: "business", applicant: "\u0110inh Gia Huy", dept: "K\u1EF9 thu\u1EADt", from: "25/08/2026", to: "27/08/2026", days: 3, unit: "ng\xE0y", reason: "Kh\u1EA3o s\xE1t d\u1EF1 \xE1n t\u1EA1i nh\xE0 m\xE1y B\xECnh D\u01B0\u01A1ng.", status: "draft", approver: "V\u0169 \u0110\xECnh Nam", submittedAt: "\u2014" },
  { id: 14, code: "NP-2026-0037", type: "leave", applicant: "T\xF4 Ng\u1ECDc B\xEDch", dept: "Nh\xE2n s\u1EF1", from: "12/08/2026", to: "14/08/2026", days: 3, unit: "ng\xE0y", reason: "Ngh\u1EC9 ph\xE9p \u2014 vi\u1EC7c gia \u0111\xECnh.", status: "pending", approver: "Tr\u1EA7n V\u0103n H\xF9ng", submittedAt: "05/08/2026" }
];

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/sg-request-detail.ts
function SgRequestDetail_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "hrm-user-cell", 2)(3, "hrm-status", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 4)(5, "h4", 5);
    \u0275\u0275text(6, "Th\xF4ng tin \u0111\u01A1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dl", 6)(8, "dt");
    \u0275\u0275text(9, "Lo\u1EA1i \u0111\u01A1n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd")(11, "hrm-tag", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "dt");
    \u0275\u0275text(14, "Th\u1EDDi gian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dt");
    \u0275\u0275text(18, "S\u1ED1 l\u01B0\u1EE3ng");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dt");
    \u0275\u0275text(22, "Ng\u01B0\u1EDDi duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dt");
    \u0275\u0275text(26, "Ng\xE0y g\u1EEDi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "section", 4)(30, "h4", 5);
    \u0275\u0275text(31, "L\xFD do");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 8);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "section", 4)(35, "h4", 5);
    \u0275\u0275text(36, "Quy tr\xECnh ph\xEA duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "hrm-approval-flow", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", r_r1.applicant)("sub", r_r1.code + " \xB7 " + r_r1.dept)("colorful", true)("avatarSize", 44);
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r1.meta(r_r1.status).tone)("label", ctx_r1.meta(r_r1.status).vi)("dot", true);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.REQ_TYPES[r_r1.type]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r1.from, " \u2192 ", r_r1.to);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", r_r1.days, " ", r_r1.unit);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.approver);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r1.submittedAt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r1.reason);
    \u0275\u0275advance(4);
    \u0275\u0275property("steps", ctx_r1.steps());
  }
}
var SgRequestDetail = class _SgRequestDetail {
  constructor() {
    this.req = input.required(...ngDevMode ? [{ debugName: "req" }] : (
      /* istanbul ignore next */
      []
    ));
    this.REQ_TYPES = REQ_TYPES;
    this.steps = computed(() => {
      const r = this.req();
      const sent = {
        title: "G\u1EEDi \u0111\u01A1n",
        name: r.applicant,
        role: r.dept,
        state: r.status === "draft" ? "current" : "approved",
        stateLabel: r.status === "draft" ? "B\u1EA3n nh\xE1p" : "\u0110\xE3 g\u1EEDi",
        time: r.submittedAt !== "\u2014" ? r.submittedAt : void 0
      };
      const approve = { title: "Ph\xEA duy\u1EC7t", name: r.approver, role: "Ng\u01B0\u1EDDi duy\u1EC7t", state: "waiting" };
      switch (r.status) {
        case "draft":
          approve.state = "waiting";
          break;
        case "pending":
          approve.state = "current";
          approve.stateLabel = "Ch\u1EDD duy\u1EC7t";
          break;
        case "approved":
          approve.state = "approved";
          approve.stateLabel = "\u0110\xE3 duy\u1EC7t";
          break;
        case "rejected":
          approve.state = "rejected";
          approve.stateLabel = "\u0110\xE3 t\u1EEB ch\u1ED1i";
          break;
        case "changeRequested":
          approve.state = "current";
          approve.stateLabel = "Y\xEAu c\u1EA7u thay \u0111\u1ED5i";
          break;
        case "pendingCancel":
          approve.state = "current";
          approve.stateLabel = "Ch\u1EDD duy\u1EC7t h\u1EE7y";
          break;
        case "cancelled":
          approve.state = "rejected";
          approve.stateLabel = "\u0110\xE3 h\u1EE7y";
          break;
      }
      return [sent, approve];
    }, ...ngDevMode ? [{ debugName: "steps" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  meta(s) {
    return reqStatusMeta(s);
  }
  static {
    this.\u0275fac = function SgRequestDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgRequestDetail)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgRequestDetail, selectors: [["sg-request-detail"]], hostAttrs: [1, "sg-request-detail"], inputs: { req: [1, "req"] }, decls: 1, vars: 1, consts: [[1, "pk"], [1, "pk-head2"], [3, "name", "sub", "colorful", "avatarSize"], ["variant", "badge", 3, "status", "label", "dot"], [1, "pk-sec"], [1, "pk-h"], [1, "pk-list"], ["color", "blue"], [1, "pk-reason"], [3, "steps"]], template: function SgRequestDetail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgRequestDetail_Conditional_0_Template, 38, 16, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.req()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [HrmUserCell, HrmStatusCell, HrmTag, HrmApprovalFlow], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     .ant-tag {\n  margin: 0;\n}\n.pk[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3-5, 14px);\n  padding: var(--space-4, 16px) var(--space-5, 20px) var(--space-5, 20px);\n}\n.pk-head2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2, 8px);\n}\n.pk-sec[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-soft, var(--border-sub));\n  padding-top: var(--space-3, 12px);\n}\n.pk-sec[_ngcontent-%COMP%]:first-child {\n  border-top: 0;\n  padding-top: 0;\n}\n.pk-h[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: var(--fs-12, 12px);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n}\n.pk-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 118px 1fr;\n  gap: 8px 12px;\n  margin: 0;\n  align-items: center;\n}\n.pk-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.pk-list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  min-width: 0;\n}\n.pk-reason[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  line-height: 1.55;\n}\n/*# sourceMappingURL=sg-request-detail.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgRequestDetail, [{
    type: Component,
    args: [{ selector: "sg-request-detail", imports: [HrmUserCell, HrmStatusCell, HrmTag, HrmApprovalFlow], template: `
    @if (req(); as r) {
      <div class="pk">
        <!-- Nh\u1EADn di\u1EC7n + TR\u1EA0NG TH\xC1I (chip, gi\u1ED1ng Ch\u1EBF \u0111\u1ED9 xem d\u1EEF li\u1EC7u). -->
        <div class="pk-head2">
          <hrm-user-cell [name]="r.applicant" [sub]="r.code + ' \xB7 ' + r.dept" [colorful]="true" [avatarSize]="44" />
          <hrm-status [status]="meta(r.status).tone" [label]="meta(r.status).vi" variant="badge" [dot]="true" />
        </div>

        <section class="pk-sec">
          <h4 class="pk-h">Th\xF4ng tin \u0111\u01A1n</h4>
          <dl class="pk-list">
            <dt>Lo\u1EA1i \u0111\u01A1n</dt><dd><hrm-tag color="blue">{{ REQ_TYPES[r.type] }}</hrm-tag></dd>
            <dt>Th\u1EDDi gian</dt><dd>{{ r.from }} \u2192 {{ r.to }}</dd>
            <dt>S\u1ED1 l\u01B0\u1EE3ng</dt><dd>{{ r.days }} {{ r.unit }}</dd>
            <dt>Ng\u01B0\u1EDDi duy\u1EC7t</dt><dd>{{ r.approver }}</dd>
            <dt>Ng\xE0y g\u1EEDi</dt><dd>{{ r.submittedAt }}</dd>
          </dl>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">L\xFD do</h4>
          <p class="pk-reason">{{ r.reason }}</p>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">Quy tr\xECnh ph\xEA duy\u1EC7t</h4>
          <hrm-approval-flow [steps]="steps()" />
        </section>
      </div>
    }
  `, host: { class: "sg-request-detail" }, styles: ["/* angular:styles/component:css;446f7a5529f9390c122b040d282f64708ce823f153b3d83deaa5262fbc590857;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/sg-request-detail.ts */\n:host {\n  display: block;\n}\n:host ::ng-deep .ant-tag {\n  margin: 0;\n}\n.pk {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3-5, 14px);\n  padding: var(--space-4, 16px) var(--space-5, 20px) var(--space-5, 20px);\n}\n.pk-head2 {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2, 8px);\n}\n.pk-sec {\n  border-top: 1px solid var(--border-soft, var(--border-sub));\n  padding-top: var(--space-3, 12px);\n}\n.pk-sec:first-child {\n  border-top: 0;\n  padding-top: 0;\n}\n.pk-h {\n  margin: 0 0 8px;\n  font-size: var(--fs-12, 12px);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n}\n.pk-list {\n  display: grid;\n  grid-template-columns: 118px 1fr;\n  gap: 8px 12px;\n  margin: 0;\n  align-items: center;\n}\n.pk-list dt {\n  font-size: var(--fs-13, 13px);\n  color: var(--text-sub);\n}\n.pk-list dd {\n  margin: 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  min-width: 0;\n}\n.pk-reason {\n  margin: 0;\n  font-size: var(--fs-13, 13px);\n  color: var(--text-body);\n  line-height: 1.55;\n}\n/*# sourceMappingURL=sg-request-detail.css.map */\n"] }]
  }], null, { req: [{ type: Input, args: [{ isSignal: true, alias: "req", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgRequestDetail, { className: "SgRequestDetail", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/sg-request-detail.ts", lineNumber: 59 });
})();

export {
  REQ_TYPES,
  requestRows,
  reqStatusMeta,
  REQUESTS,
  SgRequestDetail
};
//# sourceMappingURL=chunk-BQV5ODMM.js.map
