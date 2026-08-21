import {
  HrmOrgChart
} from "./chunk-N3BDDVAA.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgUse
} from "./chunk-SZV2GIDV.js";
import {
  HrmAppShell
} from "./chunk-IY223FV3.js";
import {
  HrmSideNav
} from "./chunk-5JLQGRFF.js";
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
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ArrowsMaximize,
  Bell,
  Briefcase,
  Building,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  LayoutDashboard,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Sitemap,
  TablerIconComponent,
  UserPlus,
  Users,
  Wallet
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/org-chart-page.ts
function SgTemplateOrgChart_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateOrgChart_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, SgTemplateOrgChart_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
  }
}
function SgTemplateOrgChart_Conditional_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SgTemplateOrgChart_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sg-doc", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
    \u0275\u0275template(5, SgTemplateOrgChart_Conditional_1_ng_container_5_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "a", 7)(8, "hrm-button", 8);
    \u0275\u0275element(9, "tabler-icon", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275element(13, "sg-use", 11);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "sg-do");
    \u0275\u0275element(19, "span", 13);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "sg-do");
    \u0275\u0275element(22, "span", 13);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "sg-do");
    \u0275\u0275element(25, "span", 13);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "sg-dont");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const screen_r1 = \u0275\u0275reference(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 14, "docs.orgChartTpl.title"))("desc", \u0275\u0275pipeBind1(2, 16, "docs.orgChartTpl.desc"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngTemplateOutlet", screen_r1);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.maximize)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "sg.openFull"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("purpose", \u0275\u0275pipeBind1(14, 20, "docs.orgChartTpl.purpose"))("when", ctx_r1.when)("behavior", \u0275\u0275pipeBind1(15, 22, "docs.orgChartTpl.behavior"))("avoid", \u0275\u0275pipeBind1(16, 24, "docs.orgChartTpl.avoid"));
    \u0275\u0275advance(6);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 26, "docs.orgChartTpl.do1"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 28, "docs.orgChartTpl.do2"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 30, "docs.orgChartTpl.do3"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 32, "docs.orgChartTpl.dont1"));
  }
}
function SgTemplateOrgChart_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 27);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "tabler-icon", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "docs.appShell.acctEnterprise"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.chevDown)("size", 16);
  }
}
function SgTemplateOrgChart_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-app-shell", 14)(1, "hrm-side-nav", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("collapsedChange", function SgTemplateOrgChart_ng_template_2_Template_hrm_side_nav_collapsedChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collapsedModel, $event) || (ctx_r1.collapsedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 17)(7, "span", 18);
    \u0275\u0275element(8, "tabler-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SgTemplateOrgChart_ng_template_2_Conditional_9_Template, 7, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20)(12, "div", 21)(13, "h1", 22);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 23);
    \u0275\u0275element(17, "tabler-icon", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 24)(21, "hrm-org-chart", 25);
    \u0275\u0275twoWayListener("viewModeChange", function SgTemplateOrgChart_ng_template_2_Template_hrm_org_chart_viewModeChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mode, $event) || (ctx_r1.mode = $event);
      return \u0275\u0275resetView($event);
    })("selectedIdChange", function SgTemplateOrgChart_ng_template_2_Template_hrm_org_chart_selectedIdChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sel, $event) || (ctx_r1.sel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("nodeClick", function SgTemplateOrgChart_ng_template_2_Template_hrm_org_chart_nodeClick_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPick($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("contentPad", "none");
    \u0275\u0275advance();
    \u0275\u0275property("sections", ctx_r1.navSections())("caretIcon", ctx_r1.caret)("logoSrc", ctx_r1.logo)("logoMarkSrc", ctx_r1.logoMark)("toggleIcon", ctx_r1.sbCollapse)("expandIcon", ctx_r1.sbExpand);
    \u0275\u0275twoWayProperty("collapsed", ctx_r1.collapsedModel);
    \u0275\u0275property("user", ctx_r1.navUser)("switchLabel", \u0275\u0275pipeBind1(2, 32, "docs.appShell.switchAccount"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 34, "docs.appShell.ariaNotify"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.bell)("size", 20);
    \u0275\u0275advance();
    \u0275\u0275classProp("sn-acct--mini", ctx_r1.collapsed());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.building)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.collapsed() ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 36, "docs.orgChartTpl.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.download)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 38, "docs.orgChartTpl.export"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.org);
    \u0275\u0275twoWayProperty("viewMode", ctx_r1.mode)("selectedId", ctx_r1.sel);
    \u0275\u0275property("labels", ctx_r1.lbl)("showModes", true)("searchable", true)("showCounts", true)("focusable", true)("showLegend", true)("highlightPath", true);
  }
}
var SgTemplateOrgChart = class _SgTemplateOrgChart {
  constructor() {
    this.t = inject(TranslateService);
    this.lang = signal(this.t.currentLang, ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.preview = inject(ActivatedRoute).snapshot.data["preview"] === true;
    this.caret = ChevronRight;
    this.chevDown = ChevronDown;
    this.download = Download;
    this.maximize = ArrowsMaximize;
    this.bell = Bell;
    this.building = Building;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.collapsed = signal(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.navUser = { name: "\u0110\u1EB7ng V\u0169", role: "HR Manager" };
    this.navSections = computed(() => (this.lang(), [
      { header: this.t.instant("docs.listPage.navMain"), items: [
        { key: "dashboard", label: this.t.instant("docs.listPage.navDashboard"), icon: LayoutDashboard },
        { key: "employee", label: this.t.instant("docs.appShell.navHr"), icon: Users, children: [
          { key: "emp-list", label: this.t.instant("docs.appShell.navEmpList"), icon: Users },
          { key: "org", label: this.t.instant("docs.appShell.navOrg"), icon: Sitemap },
          { key: "contract", label: this.t.instant("docs.appShell.navContract"), icon: FileText }
        ] },
        { key: "attendance", label: this.t.instant("docs.listPage.navAttendance"), icon: Clock },
        { key: "recruit", label: this.t.instant("docs.appShell.navRecruit"), icon: UserPlus, children: [
          { key: "jobs", label: this.t.instant("docs.appShell.navJobs"), icon: Briefcase },
          { key: "candidates", label: this.t.instant("docs.appShell.navCandidates"), icon: Users }
        ] },
        { key: "payroll", label: this.t.instant("docs.listPage.navPayroll"), icon: Wallet }
      ] }
    ]), ...ngDevMode ? [{ debugName: "navSections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = signal("department", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sel = signal("", ...ngDevMode ? [{ debugName: "sel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.orgChartTpl.when1",
      "docs.orgChartTpl.when2",
      "docs.orgChartTpl.when3"
    ];
    this.org = {
      id: "grp",
      name: "Nguy\u1EC5n Trung Hi\u1EBFu",
      title: "T\u1ED5ng gi\xE1m \u0111\u1ED1c",
      meta: "Ban \u0111i\u1EC1u h\xE0nh",
      initials: "NH",
      unit: "T\u1EADp \u0111o\xE0n VNR",
      headcount: 138,
      badge: 138,
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
              title: "Tr\u01B0\u1EDFng ph\xF2ng",
              meta: "Tuy\u1EC3n d\u1EE5ng",
              unit: "Ph\xF2ng Tuy\u1EC3n d\u1EE5ng",
              headcount: 8,
              position: "Tr\u01B0\u1EDFng ph\xF2ng Tuy\u1EC3n d\u1EE5ng",
              filled: 7,
              slots: 8,
              hiring: 1,
              breakdown: [{ type: "FTE", count: 5 }, { type: "PTE", count: 2 }],
              dottedReports: ["tech"],
              holders: [
                { name: "L\xEA Minh Anh", type: "FTE", dept: "Tuy\u1EC3n d\u1EE5ng" },
                { name: "\u0110\u1ED7 Kh\xE1nh Chi", type: "FTE", dept: "Tuy\u1EC3n d\u1EE5ng" },
                { name: "Ph\u1EA1m Gia B\u1EA3o", type: "PTE", dept: "Tuy\u1EC3n d\u1EE5ng" }
              ]
            },
            {
              id: "hr-cb",
              name: "V\u0169 \u0110\u1EE9c Duy",
              title: "Tr\u01B0\u1EDFng ph\xF2ng",
              meta: "L\u01B0\u01A1ng th\u01B0\u1EDFng",
              unit: "Ph\xF2ng C&B",
              headcount: 7,
              position: "Tr\u01B0\u1EDFng ph\xF2ng C&B",
              filled: 7,
              slots: 7,
              breakdown: [{ type: "FTE", count: 6 }, { type: "PTE", count: 1 }],
              holders: [
                { name: "V\u0169 \u0110\u1EE9c Duy", type: "FTE", dept: "L\u01B0\u01A1ng th\u01B0\u1EDFng" },
                { name: "Ng\xF4 Thanh T\xF9ng", type: "FTE", dept: "Ph\xFAc l\u1EE3i" }
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
              title: "Tr\u01B0\u1EDFng ph\xF2ng",
              meta: "K\u1EBF to\xE1n",
              unit: "Ph\xF2ng K\u1EBF to\xE1n",
              headcount: 10,
              position: "Tr\u01B0\u1EDFng ph\xF2ng K\u1EBF to\xE1n",
              filled: 9,
              slots: 10,
              hiring: 1,
              breakdown: [{ type: "FTE", count: 8 }, { type: "INT", count: 1 }],
              holders: [
                { name: "B\xF9i Th\u1ECB Lan", type: "FTE", dept: "K\u1EBF to\xE1n" },
                { name: "Tr\u1EA7n V\u0103n An", type: "FTE", dept: "K\u1EBF to\xE1n" }
              ]
            }
          ]
        },
        {
          id: "tech",
          name: "\u0110\u1EB7ng V\u0169",
          title: "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7",
          meta: "Kh\u1ED1i K\u1EF9 thu\u1EADt",
          initials: "\u0110V",
          badge: 52,
          unit: "Kh\u1ED1i K\u1EF9 thu\u1EADt",
          headcount: 52,
          position: "Gi\xE1m \u0111\u1ED1c C\xF4ng ngh\u1EC7",
          filled: 1,
          slots: 1,
          holders: [{ name: "\u0110\u1EB7ng V\u0169", type: "FTE", dept: "Kh\u1ED1i K\u1EF9 thu\u1EADt", initials: "\u0110V" }],
          children: [
            {
              id: "tech-rd",
              name: "Tr\u1ECBnh H\u1EA3i \u0110\u0103ng",
              title: "Gi\xE1m \u0111\u1ED1c Trung t\xE2m",
              meta: "R&D",
              unit: "Trung t\xE2m R&D",
              headcount: 30,
              position: "Gi\xE1m \u0111\u1ED1c Trung t\xE2m R&D",
              filled: 8,
              slots: 10,
              hiring: 2,
              breakdown: [{ type: "FTE", count: 7 }, { type: "INT", count: 1 }],
              holders: [
                { name: "Tr\u1ECBnh H\u1EA3i \u0110\u0103ng", type: "FTE", dept: "R&D" },
                { name: "Nguy\u1EC5n Th\xE0nh \u0110\u1EA1t", type: "FTE", dept: "Backend" }
              ]
            },
            {
              id: "tech-infra",
              name: "V\u0169 H\u1EA3i Nam",
              title: "Tr\u01B0\u1EDFng ph\xF2ng",
              meta: "H\u1EA1 t\u1EA7ng",
              unit: "Ph\xF2ng H\u1EA1 t\u1EA7ng",
              headcount: 12,
              position: "Tr\u01B0\u1EDFng ph\xF2ng H\u1EA1 t\u1EA7ng",
              filled: 6,
              slots: 6,
              breakdown: [{ type: "FTE", count: 6 }],
              holders: [{ name: "V\u0169 H\u1EA3i Nam", type: "FTE", dept: "H\u1EA1 t\u1EA7ng" }]
            }
          ]
        },
        {
          id: "sale",
          name: "L\xFD Tu\u1EA5n Ki\u1EC7t",
          title: "Gi\xE1m \u0111\u1ED1c Kinh doanh",
          meta: "Kh\u1ED1i Kinh doanh",
          badge: 28,
          unit: "Kh\u1ED1i Kinh doanh",
          headcount: 28,
          position: "Gi\xE1m \u0111\u1ED1c Kinh doanh",
          filled: 1,
          slots: 1,
          holders: [{ name: "L\xFD Tu\u1EA5n Ki\u1EC7t", type: "FTE", dept: "Kh\u1ED1i Kinh doanh" }],
          children: [
            {
              id: "sale-hn",
              name: "Ph\u1EA1m Anh T\xFA",
              title: "Gi\xE1m \u0111\u1ED1c Chi nh\xE1nh",
              meta: "Mi\u1EC1n B\u1EAFc",
              unit: "Chi nh\xE1nh H\xE0 N\u1ED9i",
              headcount: 14,
              position: "Gi\xE1m \u0111\u1ED1c Chi nh\xE1nh H\xE0 N\u1ED9i",
              filled: 12,
              slots: 14,
              hiring: 2,
              breakdown: [{ type: "FTE", count: 10 }, { type: "PTE", count: 2 }],
              holders: [{ name: "Ph\u1EA1m Anh T\xFA", type: "FTE", dept: "Mi\u1EC1n B\u1EAFc" }]
            }
          ]
        }
      ]
    };
    this.t.onLangChange.subscribe((e) => this.lang.set(e.lang));
  }
  /** Two-way [(collapsed)] cần get/set (bind bare signal không tự .set — idiom codebase). */
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  /** Nhãn nút/legend/tìm kiếm (i18n) — tái dùng đúng bộ khoá của component org chart. */
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
  onPick(n) {
    void n;
  }
  static {
    this.\u0275fac = function SgTemplateOrgChart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateOrgChart)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateOrgChart, selectors: [["sg-tpl-org-chart"]], decls: 4, vars: 1, consts: [["screen", ""], [1, "ocp-preview"], ["category", "Template", 3, "title", "desc"], [4, "ngTemplateOutlet"], ["sgOverview", ""], [1, "ocp-desktop"], [1, "ocp-actions"], ["href", "/preview/org-chart", "target", "_blank", "rel", "noopener", 1, "ocp-full-link"], ["variant", "default"], [3, "icon", "size"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], [3, "contentPad"], ["appSideNav", "", "selectedKey", "org", 3, "collapsedChange", "sections", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchLabel"], ["snActions", "", "type", "button", 1, "as-ico"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], [1, "ocp"], [1, "ocp-head"], [1, "ocp-titlebar"], [1, "ocp-title"], ["type", "button", 1, "ocp-export"], [1, "ocp-body"], [3, "viewModeChange", "selectedIdChange", "nodeClick", "data", "viewMode", "selectedId", "labels", "showModes", "searchable", "showCounts", "focusable", "showLegend", "highlightPath"], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"]], template: function SgTemplateOrgChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgTemplateOrgChart_Conditional_0_Template, 2, 1, "div", 1)(1, SgTemplateOrgChart_Conditional_1_Template, 30, 34, "sg-doc", 2);
        \u0275\u0275template(2, SgTemplateOrgChart_ng_template_2_Template, 22, 40, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.preview ? 0 : 1);
      }
    }, dependencies: [NgTemplateOutlet, TranslateModule, TablerIconComponent, HrmOrgChart, HrmAppShell, HrmSideNav, HrmButton, SgDoc, SgUse, SgDo, SgDont, TranslatePipe], styles: ["\n.ocp-desktop[_ngcontent-%COMP%] {\n  height: 720px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.ocp-actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.ocp-full-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.ocp-preview[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .shell-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.ocp[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n}\n.ocp-head[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.ocp-titlebar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ocp-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ocp-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font-size: var(--fs-13);\n  font-weight: 500;\n  cursor: pointer;\n}\n.ocp-export[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.ocp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background: var(--bg-canvas);\n}\n.ocp-body[_ngcontent-%COMP%]     hrm-org-chart {\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.ocp-body[_ngcontent-%COMP%]     hrm-org-chart .oc {\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n}\n.ocp-body[_ngcontent-%COMP%]     hrm-org-chart .oc-viewport {\n  flex: 1;\n  min-height: 0;\n  height: auto;\n}\n.as-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.as-ico[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-acct[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-acct[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n}\n.sn-acct--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sn-acct-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.sn-acct-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=org-chart-page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateOrgChart, [{
    type: Component,
    args: [{ selector: "sg-tpl-org-chart", imports: [NgTemplateOutlet, TranslateModule, TablerIconComponent, HrmOrgChart, HrmAppShell, HrmSideNav, HrmButton, SgDoc, SgUse, SgDo, SgDont], template: `
    @if (preview) {
      <!-- Ch\u1EBF \u0111\u1ED9 preview (route /preview/org-chart, tab m\u1EDBi) \u2014 full viewport th\u1EADt. -->
      <div class="ocp-preview"><ng-container *ngTemplateOutlet="screen" /></div>
    } @else {
      <sg-doc category="Template" [title]="'docs.orgChartTpl.title' | translate"
        [desc]="'docs.orgChartTpl.desc' | translate">

        <div sgOverview>
          <!-- M\xC0N CHU\u1EA8N "S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c": App Shell (Side Nav) + header trang + component DS l\u1EA5p \u0111\u1EA7y. -->
          <div class="ocp-desktop"><ng-container *ngTemplateOutlet="screen" /></div>
          <div class="ocp-actions">
            <a class="ocp-full-link" href="/preview/org-chart" target="_blank" rel="noopener">
              <hrm-button variant="default">
                <tabler-icon [icon]="maximize" [size]="16" /> {{ 'sg.openFull' | translate }}
              </hrm-button>
            </a>
          </div>
        </div>

        <div sgUsage>
          <sg-use
            [purpose]="'docs.orgChartTpl.purpose' | translate"
            [when]="when"
            [behavior]="'docs.orgChartTpl.behavior' | translate"
            [avoid]="'docs.orgChartTpl.avoid' | translate" />
        </div>

        <div sgBest>
          <sg-do><span [innerHTML]="'docs.orgChartTpl.do1' | translate"></span></sg-do>
          <sg-do><span [innerHTML]="'docs.orgChartTpl.do2' | translate"></span></sg-do>
          <sg-do><span [innerHTML]="'docs.orgChartTpl.do3' | translate"></span></sg-do>
          <sg-dont>{{ 'docs.orgChartTpl.dont1' | translate }}</sg-dont>
        </div>
      </sg-doc>
    }

    <!-- M\xE0n S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c (App Shell + header + component DS) \u2014 d\xF9ng chung cho doc & preview. -->
    <ng-template #screen>
      <hrm-app-shell [contentPad]="'none'">
        <hrm-side-nav appSideNav [sections]="navSections()" selectedKey="org"
          [caretIcon]="caret" [logoSrc]="logo" [logoMarkSrc]="logoMark"
          [toggleIcon]="sbCollapse" [expandIcon]="sbExpand" [(collapsed)]="collapsedModel"
          [user]="navUser" [switchLabel]="'docs.appShell.switchAccount' | translate">
          <button snActions type="button" class="as-ico" [attr.aria-label]="'docs.appShell.ariaNotify' | translate"><tabler-icon [icon]="bell" [size]="20" /></button>
          <button snHead type="button" class="sn-acct" [class.sn-acct--mini]="collapsed()">
            <span class="sn-acct-ic"><tabler-icon [icon]="building" [size]="18" /></span>
            @if (!collapsed()) {
              <span class="sn-acct-info">
                <span class="sn-acct-name">T\u1EADp \u0111o\xE0n VNR</span>
                <span class="sn-acct-sub">{{ 'docs.appShell.acctEnterprise' | translate }}</span>
              </span>
              <tabler-icon [icon]="chevDown" [size]="16" style="color:var(--text-soft)" />
            }
          </button>
        </hrm-side-nav>

        <!-- N\u1ED9i dung: m\xE0n S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c (header trang + component DS). -->
        <div class="ocp">
          <div class="ocp-head">
            <div class="ocp-titlebar">
              <h1 class="ocp-title">{{ 'docs.orgChartTpl.title' | translate }}</h1>
              <button type="button" class="ocp-export">
                <tabler-icon [icon]="download" [size]="16" /> {{ 'docs.orgChartTpl.export' | translate }}
              </button>
            </div>
          </div>
          <div class="ocp-body">
            <!-- \u0110\xDANG c\xE1ch: component hrm-org-chart c\u1EE7a Design System (kh\xF4ng t\u1EF1 d\u1EF1ng HTML/CSS). -->
            <hrm-org-chart [data]="org" [(viewMode)]="mode" [(selectedId)]="sel" [labels]="lbl"
              [showModes]="true" [searchable]="true" [showCounts]="true" [focusable]="true"
              [showLegend]="true" [highlightPath]="true" (nodeClick)="onPick($event)" />
          </div>
        </div>
      </hrm-app-shell>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;7eaaee5b380ec3088a6872fff7cb088c4e8a93ee6829fc5d1e8b376d5e025410;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/org-chart-page.ts */\n.ocp-desktop {\n  height: 720px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-regular-sm);\n}\n.ocp-actions {\n  margin-top: 14px;\n}\n.ocp-full-link {\n  text-decoration: none;\n}\n.ocp-preview {\n  height: 100vh;\n  overflow: hidden;\n}\n:host ::ng-deep .shell-content {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.ocp {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-surface);\n}\n.ocp-head {\n  flex: none;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n}\n.ocp-titlebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.ocp-title {\n  margin: 0;\n  font-size: var(--fs-20);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.ocp-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font-size: var(--fs-13);\n  font-weight: 500;\n  cursor: pointer;\n}\n.ocp-export:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.ocp-body {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background: var(--bg-canvas);\n}\n.ocp-body ::ng-deep hrm-org-chart {\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.ocp-body ::ng-deep hrm-org-chart .oc {\n  flex: 1;\n  min-height: 0;\n  min-width: 0;\n}\n.ocp-body ::ng-deep hrm-org-chart .oc-viewport {\n  flex: 1;\n  min-height: 0;\n  height: auto;\n}\n.as-ico {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.as-ico:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-acct {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-acct:hover {\n  border-color: var(--primary-base);\n}\n.sn-acct--mini {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info {\n  flex: 1;\n  min-width: 0;\n}\n.sn-acct-name {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.sn-acct-sub {\n  display: block;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=org-chart-page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateOrgChart, { className: "SgTemplateOrgChart", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/org-chart-page.ts", lineNumber: 136 });
})();
export {
  SgTemplateOrgChart
};
//# sourceMappingURL=chunk-7BPMBOYO.js.map
