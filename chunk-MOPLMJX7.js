import {
  HrmOrgChart
} from "./chunk-WVYFEABW.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/diagram/org-chart.ts
var SgDocOrgChart = class _SgDocOrgChart {
  constructor() {
    this.t = inject(TranslateService);
    this.sel = signal("ceo", ...ngDevMode ? [{ debugName: "sel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = signal("employee", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.orgChart.when1",
      "docs.orgChart.when2",
      "docs.orgChart.when3"
    ];
    this.orgRaw = {
      id: "ceo",
      name: "Nguy\u1EC5n Trung Hi\u1EBFu",
      title: "T\u1ED5ng gi\xE1m \u0111\u1ED1c",
      meta: "Ban \u0111i\u1EC1u h\xE0nh",
      initials: "NH",
      badge: 128,
      unit: "T\u1EADp \u0111o\xE0n VNR Group",
      headcount: 128,
      position: "T\u1ED5ng gi\xE1m \u0111\u1ED1c",
      filled: 1,
      slots: 1,
      holders: [{ name: "Nguy\u1EC5n Trung Hi\u1EBFu", type: "FTE", dept: "Ban \u0111i\u1EC1u h\xE0nh", initials: "NH" }],
      children: [
        {
          id: "hr",
          name: "Tr\u1EA7n Thu H\xE0",
          title: "Gi\xE1m \u0111\u1ED1c Nh\xE2n s\u1EF1",
          meta: "Kh\u1ED1i Nh\xE2n s\u1EF1",
          badge: 24,
          unit: "Kh\u1ED1i Nh\xE2n s\u1EF1",
          headcount: 24,
          position: "Gi\xE1m \u0111\u1ED1c Nh\xE2n s\u1EF1",
          filled: 1,
          slots: 1,
          holders: [{ name: "Tr\u1EA7n Thu H\xE0", type: "FTE", dept: "Kh\u1ED1i Nh\xE2n s\u1EF1" }],
          children: [
            {
              id: "hr-rec",
              name: "L\xEA Minh Anh",
              title: "TP. Tuy\u1EC3n d\u1EE5ng",
              meta: "Tuy\u1EC3n d\u1EE5ng",
              badge: 6,
              unit: "Ph\xF2ng Tuy\u1EC3n d\u1EE5ng",
              headcount: 6,
              position: "Tr\u01B0\u1EDFng ph\xF2ng",
              filled: 5,
              slots: 6,
              hiring: 1,
              breakdown: [{ type: "FTE", count: 1 }, { type: "PTE", count: 1 }, { type: "INT", count: 1 }, { type: "SC", count: 1 }, { type: "PC", count: 1 }],
              holders: [
                { name: "\u0110\u1ED7 Th\u1ECB Thu H\xE0", type: "FTE", dept: "Ph\xF2ng ban nh\xE2n s\u1EF1" },
                { name: "Ho\xE0ng V\u0103n Minh", type: "PTE", dept: "Ph\xF2ng ban thi\u1EBFt k\u1EBF" },
                { name: "B\xF9i Th\u1ECB Thu", type: "INT", dept: "Ph\xF2ng ban kinh doanh" },
                { name: "L\xEA V\u0103n Hi\u1EBFu", type: "SC", dept: "Ph\xF2ng ban k\u1EBF to\xE1n" },
                { name: "Nguy\u1EC5n Th\u1ECB Tuy\u1EBFt Nga", type: "PC", dept: "Ph\xF2ng ban s\u1EA3n xu\u1EA5t" }
              ],
              children: [
                { id: "hr-rec-1", name: "Ph\u1EA1m Gia B\u1EA3o", title: "CV. Tuy\u1EC3n d\u1EE5ng", meta: "Tuy\u1EC3n k\u1EF9 thu\u1EADt", dottedReports: ["tech"] },
                { id: "hr-rec-2", name: "\u0110\u1ED7 Kh\xE1nh Chi", title: "CV. Tuy\u1EC3n d\u1EE5ng", meta: "Tuy\u1EC3n v\u0103n ph\xF2ng" }
              ]
            },
            {
              id: "hr-cb",
              name: "V\u0169 \u0110\u1EE9c Duy",
              title: "TP. C&B",
              meta: "L\u01B0\u01A1ng th\u01B0\u1EDFng",
              badge: 4,
              unit: "Ph\xF2ng C&B",
              headcount: 4,
              position: "Tr\u01B0\u1EDFng ph\xF2ng C&B",
              filled: 4,
              slots: 4,
              breakdown: [{ type: "FTE", count: 3 }, { type: "PTE", count: 1 }],
              holders: [
                { name: "V\u0169 \u0110\u1EE9c Duy", type: "FTE", dept: "L\u01B0\u01A1ng th\u01B0\u1EDFng" },
                { name: "Ng\xF4 Thanh T\xF9ng", type: "FTE", dept: "Ph\xFAc l\u1EE3i" },
                { name: "L\xFD Thu Trang", type: "FTE", dept: "B\u1EA3o hi\u1EC3m" },
                { name: "H\u1ED3 B\u1EA3o Long", type: "PTE", dept: "L\u01B0\u01A1ng th\u01B0\u1EDFng" }
              ]
            }
          ]
        },
        {
          id: "fin",
          name: "Ho\xE0ng V\u0103n Nam",
          title: "Gi\xE1m \u0111\u1ED1c T\xE0i ch\xEDnh",
          meta: "Kh\u1ED1i T\xE0i ch\xEDnh",
          badge: 18,
          unit: "Kh\u1ED1i T\xE0i ch\xEDnh",
          headcount: 18,
          position: "Gi\xE1m \u0111\u1ED1c T\xE0i ch\xEDnh",
          filled: 1,
          slots: 1,
          holders: [{ name: "Ho\xE0ng V\u0103n Nam", type: "FTE", dept: "Kh\u1ED1i T\xE0i ch\xEDnh" }],
          children: [
            {
              id: "fin-acc",
              name: "B\xF9i Th\u1ECB Lan",
              title: "TP. K\u1EBF to\xE1n",
              meta: "K\u1EBF to\xE1n",
              unit: "Ph\xF2ng K\u1EBF to\xE1n",
              headcount: 7,
              position: "Tr\u01B0\u1EDFng ph\xF2ng K\u1EBF to\xE1n",
              filled: 6,
              slots: 7,
              hiring: 1,
              breakdown: [{ type: "FTE", count: 5 }, { type: "INT", count: 1 }],
              holders: [
                { name: "B\xF9i Th\u1ECB Lan", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "Tr\u1EA7n V\u0103n An", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "L\xEA Th\u1ECB H\u1ED3ng", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "Phan \u0110\u1EE9c H\u1EA3i", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "V\u0169 Minh Ch\xE2u", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "\u0110\u1EB7ng Thu Uy\xEAn", type: "INT", dept: "K\u1EBF to\xE1n" }
              ]
            },
            {
              id: "fin-pay",
              name: "Ng\xF4 Quang Huy",
              title: "TP. Thanh to\xE1n",
              meta: "Ng\xE2n qu\u1EF9",
              unit: "Ph\xF2ng Ng\xE2n qu\u1EF9",
              headcount: 5,
              position: "Tr\u01B0\u1EDFng ph\xF2ng Ng\xE2n qu\u1EF9",
              filled: 5,
              slots: 5,
              breakdown: [{ type: "FTE", count: 4 }, { type: "PTE", count: 1 }],
              holders: [
                { name: "Ng\xF4 Quang Huy", type: "FTE", dept: "Ng\xE2n qu\u1EF9" },
                { name: "Tr\u1ECBnh B\u1EA3o Nam", type: "FTE", dept: "Ng\xE2n qu\u1EF9" },
                { name: "L\u01B0u H\xE0 My", type: "FTE", dept: "Ng\xE2n qu\u1EF9" },
                { name: "Cao Minh Kh\xF4i", type: "PTE", dept: "Ng\xE2n qu\u1EF9" }
              ]
            }
          ]
        },
        {
          id: "tech",
          name: "\u0110\u1EB7ng V\u0169",
          title: "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7",
          meta: "Kh\u1ED1i C\xF4ng ngh\u1EC7",
          badge: 52,
          initials: "\u0110V",
          unit: "Kh\u1ED1i C\xF4ng ngh\u1EC7",
          headcount: 52,
          position: "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7",
          filled: 1,
          slots: 1,
          holders: [{ name: "\u0110\u1EB7ng V\u0169", type: "FTE", dept: "Kh\u1ED1i C\xF4ng ngh\u1EC7", initials: "\u0110V" }],
          children: [
            {
              id: "tech-dev",
              name: "Tr\u1ECBnh H\u1EA3i \u0110\u0103ng",
              title: "TP. Ph\xE1t tri\u1EC3n",
              meta: "K\u1EF9 thu\u1EADt",
              badge: 30,
              unit: "Ph\xF2ng Ph\xE1t tri\u1EC3n",
              headcount: 30,
              position: "Tr\u01B0\u1EDFng ph\xF2ng Ph\xE1t tri\u1EC3n",
              filled: 8,
              slots: 10,
              hiring: 2,
              breakdown: [{ type: "FTE", count: 6 }, { type: "PTE", count: 1 }, { type: "INT", count: 1 }],
              holders: [
                { name: "Tr\u1ECBnh H\u1EA3i \u0110\u0103ng", type: "FTE", dept: "Ph\xE1t tri\u1EC3n" },
                { name: "Nguy\u1EC5n Th\xE0nh \u0110\u1EA1t", type: "FTE", dept: "Backend" },
                { name: "L\xEA Qu\u1ED1c B\u1EA3o", type: "FTE", dept: "Frontend" },
                { name: "Ph\u1EA1m Anh T\xFA", type: "FTE", dept: "Mobile" },
                { name: "V\u0169 H\u1EA3i Nam", type: "FTE", dept: "DevOps" },
                { name: "\u0110inh Thu Hi\u1EC1n", type: "FTE", dept: "QA" },
                { name: "Ho\xE0ng Gia Khang", type: "PTE", dept: "Frontend" },
                { name: "Mai Ti\u1EBFn D\u0169ng", type: "INT", dept: "Backend" }
              ]
            },
            {
              id: "tech-data",
              name: "Mai Ph\u01B0\u01A1ng Th\u1EA3o",
              title: "TP. D\u1EEF li\u1EC7u",
              meta: "Ph\xE2n t\xEDch",
              badge: 12,
              unit: "Ph\xF2ng D\u1EEF li\u1EC7u",
              headcount: 12,
              position: "Tr\u01B0\u1EDFng ph\xF2ng D\u1EEF li\u1EC7u",
              filled: 4,
              slots: 5,
              hiring: 1,
              breakdown: [{ type: "FTE", count: 3 }, { type: "INT", count: 1 }],
              holders: [
                { name: "Mai Ph\u01B0\u01A1ng Th\u1EA3o", type: "FTE", dept: "D\u1EEF li\u1EC7u" },
                { name: "B\xF9i Kh\xE1nh Linh", type: "FTE", dept: "BI" },
                { name: "T\xF4 Minh Qu\xE2n", type: "FTE", dept: "ML" },
                { name: "H\xE0 Thu Trang", type: "INT", dept: "BI" }
              ]
            }
          ]
        },
        {
          id: "sale",
          name: "L\xFD Tu\u1EA5n Ki\u1EC7t",
          title: "Gi\xE1m \u0111\u1ED1c Kinh doanh",
          meta: "Kh\u1ED1i Kinh doanh",
          badge: 34,
          unit: "Kh\u1ED1i Kinh doanh",
          headcount: 34,
          position: "Gi\xE1m \u0111\u1ED1c Kinh doanh",
          filled: 1,
          slots: 1,
          holders: [{ name: "L\xFD Tu\u1EA5n Ki\u1EC7t", type: "FTE", dept: "Kh\u1ED1i Kinh doanh" }]
        }
      ]
    };
    this.matrixRaw = {
      id: "ceo",
      name: "Nguy\u1EC5n Trung Hi\u1EBFu",
      title: "T\u1ED5ng gi\xE1m \u0111\u1ED1c",
      initials: "NH",
      children: [
        { id: "hr", name: "Tr\u1EA7n Thu H\xE0", title: "Gi\xE1m \u0111\u1ED1c Nh\xE2n s\u1EF1", badge: 6, children: [
          { id: "hr-rec-1", name: "Ph\u1EA1m Gia B\u1EA3o", title: "CV. Tuy\u1EC3n d\u1EE5ng", meta: "Tuy\u1EC3n k\u1EF9 thu\u1EADt", dottedReports: ["tech"] },
          { id: "hr-rec-2", name: "\u0110\u1ED7 Kh\xE1nh Chi", title: "CV. Tuy\u1EC3n d\u1EE5ng", meta: "Tuy\u1EC3n kh\u1ED1i v\u0103n ph\xF2ng" }
        ] },
        { id: "tech", name: "\u0110\u1EB7ng V\u0169", title: "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7", meta: "Kh\u1ED1i C\xF4ng ngh\u1EC7", badge: 52 }
      ]
    };
  }
  /** Từ điển dịch nhãn nghiệp vụ (chức danh / phòng ban / đơn vị / vị trí) — key nguồn = chuỗi gốc tiếng Việt.
   *  Danh từ riêng (tên người) KHÔNG nằm ở đây nên giữ nguyên. Mã loại HĐ (FTE/PTE/INT/SC/PC) giữ nguyên. */
  dict() {
    const m = (k) => this.t.instant("docs.orgChart." + k);
    return {
      // chức danh (title)
      "T\u1ED5ng gi\xE1m \u0111\u1ED1c": m("tCeo"),
      "Gi\xE1m \u0111\u1ED1c Nh\xE2n s\u1EF1": m("tChro"),
      "Gi\xE1m \u0111\u1ED1c T\xE0i ch\xEDnh": m("tCfo"),
      "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7": m("tCto"),
      "Gi\xE1m \u0111\u1ED1c Kinh doanh": m("tCco"),
      "TP. Tuy\u1EC3n d\u1EE5ng": m("tRecHead"),
      "TP. C&B": m("tCbHead"),
      "TP. K\u1EBF to\xE1n": m("tAccHead"),
      "TP. Thanh to\xE1n": m("tPayHead"),
      "TP. Ph\xE1t tri\u1EC3n": m("tDevHead"),
      "TP. D\u1EEF li\u1EC7u": m("tDataHead"),
      "CV. Tuy\u1EC3n d\u1EE5ng": m("tRecSpec"),
      // meta (dòng phụ node)
      "Ban \u0111i\u1EC1u h\xE0nh": m("mExec"),
      "Kh\u1ED1i Nh\xE2n s\u1EF1": m("mHrDiv"),
      "Kh\u1ED1i T\xE0i ch\xEDnh": m("mFinDiv"),
      "Kh\u1ED1i C\xF4ng ngh\u1EC7": m("mTechDiv"),
      "Kh\u1ED1i Kinh doanh": m("mSalesDiv"),
      "Tuy\u1EC3n d\u1EE5ng": m("mRec"),
      "L\u01B0\u01A1ng th\u01B0\u1EDFng": m("mComp"),
      "K\u1EBF to\xE1n": m("mAcc"),
      "Ng\xE2n qu\u1EF9": m("mTreasury"),
      "K\u1EF9 thu\u1EADt": m("mEng"),
      "Ph\xE2n t\xEDch": m("mAnalytics"),
      "Tuy\u1EC3n k\u1EF9 thu\u1EADt": m("mRecTech"),
      "Tuy\u1EC3n v\u0103n ph\xF2ng": m("mRecOffice"),
      "Tuy\u1EC3n kh\u1ED1i v\u0103n ph\xF2ng": m("mRecOfficeDiv"),
      // unit (tên đơn vị — view Phòng ban)
      "T\u1EADp \u0111o\xE0n VNR Group": m("uGroup"),
      "Ph\xF2ng Tuy\u1EC3n d\u1EE5ng": m("uRec"),
      "Ph\xF2ng C&B": m("uCb"),
      "Ph\xF2ng K\u1EBF to\xE1n": m("uAcc"),
      "Ph\xF2ng Ng\xE2n qu\u1EF9": m("uTreasury"),
      "Ph\xF2ng Ph\xE1t tri\u1EC3n": m("uDev"),
      "Ph\xF2ng D\u1EEF li\u1EC7u": m("uData"),
      // position (tên vị trí — view Vị trí)
      "Tr\u01B0\u1EDFng ph\xF2ng": m("pHead"),
      "Tr\u01B0\u1EDFng ph\xF2ng C&B": m("pCbHead"),
      "Tr\u01B0\u1EDFng ph\xF2ng K\u1EBF to\xE1n": m("pAccHead"),
      "Tr\u01B0\u1EDFng ph\xF2ng Ng\xE2n qu\u1EF9": m("pTreasuryHead"),
      "Tr\u01B0\u1EDFng ph\xF2ng Ph\xE1t tri\u1EC3n": m("pDevHead"),
      "Tr\u01B0\u1EDFng ph\xF2ng D\u1EEF li\u1EC7u": m("pDataHead"),
      // holders[].dept (phòng ban của người giữ vị trí)
      "Ph\xF2ng ban nh\xE2n s\u1EF1": m("dHr"),
      "Ph\xF2ng ban thi\u1EBFt k\u1EBF": m("dDesign"),
      "Ph\xF2ng ban kinh doanh": m("dSales"),
      "Ph\xF2ng ban k\u1EBF to\xE1n": m("dAcc"),
      "Ph\xF2ng ban s\u1EA3n xu\u1EA5t": m("dProduction"),
      "Ph\xFAc l\u1EE3i": m("dBenefits"),
      "B\u1EA3o hi\u1EC3m": m("dInsurance"),
      "Backend": "Backend",
      "Frontend": "Frontend",
      "Mobile": "Mobile",
      "DevOps": "DevOps",
      "QA": "QA",
      "BI": "BI",
      "ML": "ML",
      "Ph\xE1t tri\u1EC3n": m("dDev"),
      "D\u1EEF li\u1EC7u": m("dData")
    };
  }
  /** Dịch một chuỗi nhãn nghiệp vụ; không có trong từ điển (VD tên người) thì giữ nguyên. */
  tx(s) {
    if (s == null)
      return s;
    const d = this.dict();
    return d[s] ?? s;
  }
  /** Dịch sâu một node: title/meta/unit/position + holders[].dept. Tên người, mã loại HĐ, số giữ nguyên. */
  txNode(n) {
    return __spreadProps(__spreadValues({}, n), {
      title: this.tx(n.title),
      meta: this.tx(n.meta),
      unit: this.tx(n.unit),
      position: this.tx(n.position),
      holders: n.holders?.map((h) => __spreadProps(__spreadValues({}, h), { dept: this.tx(h.dept) })),
      children: n.children?.map((c) => this.txNode(c))
    });
  }
  get lbl() {
    const m = (k) => this.t.instant("docs.orgChart." + k);
    return {
      vertical: m("lblVertical"),
      horizontal: m("lblHorizontal"),
      compact: m("lblCompact"),
      expandAll: m("lblExpandAll"),
      collapseAll: m("lblCollapseAll"),
      zoomIn: m("lblZoomIn"),
      zoomOut: m("lblZoomOut"),
      fit: m("lblFit"),
      search: m("lblSearch"),
      prevMatch: m("lblPrevMatch"),
      nextMatch: m("lblNextMatch"),
      home: m("lblHome"),
      directLine: m("lblDirectLine"),
      dottedLine: m("lblDottedLine"),
      modeEmployee: m("lblModeEmployee"),
      modePosition: m("lblModePosition"),
      modeDepartment: m("lblModeDepartment"),
      employees: m("lblEmployees"),
      hiring: "Hiring",
      moreHolders: m("lblMoreHolders")
    };
  }
  get org() {
    return this.txNode(this.orgRaw);
  }
  get matrix() {
    return this.txNode(this.matrixRaw);
  }
  findNode(id) {
    const dfs = (n) => {
      if (n.id === id)
        return n;
      for (const c of n.children ?? []) {
        const r = dfs(c);
        if (r)
          return r;
      }
      return null;
    };
    return dfs(this.orgRaw);
  }
  parentOf(id) {
    const dfs = (n) => {
      for (const c of n.children ?? []) {
        if (c.id === id)
          return n;
        const r = dfs(c);
        if (r)
          return r;
      }
      return null;
    };
    return dfs(this.orgRaw);
  }
  selName() {
    if (!this.sel())
      return "\u2014";
    return this.findNode(this.sel())?.name ?? "\u2014";
  }
  /** " · báo cáo cho: <quản lý>" — ai ở trên node đang chọn (tên người giữ nguyên). */
  selReport() {
    if (!this.sel())
      return "";
    const p = this.parentOf(this.sel());
    return p ? ` \xB7 ${this.t.instant("docs.orgChart.selReportTo")}: ${p.name}` : ` \xB7 ${this.t.instant("docs.orgChart.selTop")}`;
  }
  modeName() {
    const m = {
      employee: this.t.instant("docs.orgChart.lblModeEmployee"),
      position: this.t.instant("docs.orgChart.lblModePosition"),
      department: this.t.instant("docs.orgChart.lblModeDepartment")
    };
    return m[this.mode()];
  }
  onPick(n) {
    void n;
  }
  static {
    this.\u0275fac = function SgDocOrgChart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocOrgChart)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocOrgChart, selectors: [["sg-doc-org-chart"]], decls: 51, vars: 91, consts: [["category", "Diagram", 3, "title", "desc"], ["sgOverview", ""], [3, "selectedIdChange", "viewModeChange", "nodeClick", "data", "selectedId", "viewMode", "labels", "showModes", "searchable", "showCounts", "focusable", "showLegend", "highlightPath"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "margin", "12px 0 0"], [2, "color", "var(--text-strong)"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["orientation", "horizontal", 3, "data", "labels"], [3, "data", "highlightPath", "showLegend", "labels"], [3, "data", "searchable", "showCounts", "focusable", "showLegend", "labels"], [3, "data", "compact", "showToolbar", "zoomable", "labels"]], template: function SgDocOrgChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-org-chart", 2);
        \u0275\u0275twoWayListener("selectedIdChange", function SgDocOrgChart_Template_hrm_org_chart_selectedIdChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sel, $event) || (ctx.sel = $event);
          return $event;
        })("viewModeChange", function SgDocOrgChart_Template_hrm_org_chart_viewModeChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
          return $event;
        });
        \u0275\u0275listener("nodeClick", function SgDocOrgChart_Template_hrm_org_chart_nodeClick_4_listener($event) {
          return ctx.onPick($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "b", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementStart(12, "b", 4);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 5);
        \u0275\u0275element(17, "sg-use", 6);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7)(22, "sg-do");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-do");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "sg-do");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "sg-dont");
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 8)(35, "sg-example", 9);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275element(38, "hrm-org-chart", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "sg-example", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275element(42, "hrm-org-chart", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "sg-example", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275element(46, "hrm-org-chart", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "sg-example", 9);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275element(50, "hrm-org-chart", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 51, "docs.orgChart.title"))("desc", \u0275\u0275pipeBind1(2, 53, "docs.orgChart.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.org);
        \u0275\u0275twoWayProperty("selectedId", ctx.sel)("viewMode", ctx.mode);
        \u0275\u0275property("labels", ctx.lbl)("showModes", true)("searchable", true)("showCounts", true)("focusable", true)("showLegend", true)("highlightPath", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 55, "docs.orgChart.ovMode"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.modeName());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind1(11, 57, "docs.orgChart.ovSelecting"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selName());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("", ctx.selReport(), " \u2014 ", \u0275\u0275pipeBind1(15, 59, "docs.orgChart.ovHint"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(18, 61, "docs.orgChart.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(19, 63, "docs.orgChart.behavior"))("avoid", \u0275\u0275pipeBind1(20, 65, "docs.orgChart.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 67, "docs.orgChart.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 69, "docs.orgChart.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 71, "docs.orgChart.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 73, "docs.orgChart.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(36, 75, "docs.orgChart.exHorizT"))("desc", \u0275\u0275pipeBind1(37, 77, "docs.orgChart.exHorizD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.org)("labels", ctx.lbl);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 79, "docs.orgChart.exMatrixT"))("desc", \u0275\u0275pipeBind1(41, 81, "docs.orgChart.exMatrixD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.matrix)("highlightPath", true)("showLegend", true)("labels", ctx.lbl);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 83, "docs.orgChart.exSearchT"))("desc", \u0275\u0275pipeBind1(45, 85, "docs.orgChart.exSearchD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.org)("searchable", true)("showCounts", true)("focusable", true)("showLegend", true)("labels", ctx.lbl);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 87, "docs.orgChart.exCompactT"))("desc", \u0275\u0275pipeBind1(49, 89, "docs.orgChart.exCompactD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.org)("compact", true)("showToolbar", false)("zoomable", false)("labels", ctx.lbl);
      }
    }, dependencies: [TranslateModule, HrmOrgChart, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocOrgChart, [{
    type: Component,
    args: [{
      selector: "sg-doc-org-chart",
      imports: [TranslateModule, HrmOrgChart, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Diagram" [title]="'docs.orgChart.title' | translate"
      [desc]="'docs.orgChart.desc' | translate">

      <div sgOverview>
        <hrm-org-chart [data]="org" [(selectedId)]="sel" [(viewMode)]="mode" [labels]="lbl"
          [showModes]="true" [searchable]="true" [showCounts]="true" [focusable]="true"
          [showLegend]="true" [highlightPath]="true" (nodeClick)="onPick($event)" />
        <p style="font-size: var(--fs-13);color:var(--text-sub);margin:12px 0 0">
          {{ 'docs.orgChart.ovMode' | translate }} <b style="color:var(--text-strong)">{{ modeName() }}</b> \xB7 {{ 'docs.orgChart.ovSelecting' | translate }}
          <b style="color:var(--text-strong)">{{ selName() }}</b>{{ selReport() }} \u2014 {{ 'docs.orgChart.ovHint' | translate }}
        </p>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.orgChart.purpose' | translate"
          [when]="when"
          [behavior]="'docs.orgChart.behavior' | translate"
          [avoid]="'docs.orgChart.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.orgChart.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.orgChart.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.orgChart.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.orgChart.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.orgChart.exHorizT' | translate"
          [desc]="'docs.orgChart.exHorizD' | translate">
          <hrm-org-chart [data]="org" orientation="horizontal" [labels]="lbl" />
        </sg-example>

        <sg-example [title]="'docs.orgChart.exMatrixT' | translate"
          [desc]="'docs.orgChart.exMatrixD' | translate">
          <hrm-org-chart [data]="matrix" [highlightPath]="true" [showLegend]="true" [labels]="lbl" />
        </sg-example>

        <sg-example [title]="'docs.orgChart.exSearchT' | translate"
          [desc]="'docs.orgChart.exSearchD' | translate">
          <hrm-org-chart [data]="org" [searchable]="true" [showCounts]="true" [focusable]="true" [showLegend]="true" [labels]="lbl" />
        </sg-example>

        <sg-example [title]="'docs.orgChart.exCompactT' | translate"
          [desc]="'docs.orgChart.exCompactD' | translate">
          <hrm-org-chart [data]="org" [compact]="true" [showToolbar]="false" [zoomable]="false" [labels]="lbl" />
        </sg-example>
      </div>
    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocOrgChart, { className: "SgDocOrgChart", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/diagram/org-chart.ts", lineNumber: 64 });
})();
export {
  SgDocOrgChart
};
//# sourceMappingURL=chunk-MOPLMJX7.js.map
