import {
  HrmSideNav
} from "./chunk-VG3ZZH26.js";
import {
  Bell,
  Briefcase,
  Building,
  CalendarEvent,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  FileText,
  LayoutDashboard,
  LayoutSidebarLeftCollapse,
  LayoutSidebarLeftExpand,
  Settings,
  Sitemap,
  TablerIconComponent,
  UserPlus,
  Users,
  Wallet
} from "./chunk-QL2Z65KF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  model,
  output,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_template-nav.ts
function buildNavSections(t) {
  const l = (k) => t.instant("docs.appShell." + k);
  return [
    { header: l("navMain"), items: [
      { key: "dashboard", label: l("navDashboard"), icon: LayoutDashboard },
      { key: "employee", label: l("navHr"), icon: Users, children: [
        { key: "emp-list", label: l("navEmpList"), icon: Users },
        { key: "org", label: l("navOrg"), icon: Sitemap },
        { key: "contract", label: l("navContract"), icon: FileText }
      ] },
      { key: "attendance", label: l("navAttendance"), icon: Clock, children: [
        { key: "timesheet", label: l("navTimesheet"), icon: Clock },
        { key: "shift", label: l("navShift"), icon: CalendarEvent }
      ] },
      { key: "requests", label: l("navRequests"), icon: ClipboardList },
      { key: "recruit", label: l("navRecruit"), icon: UserPlus, children: [
        { key: "jobs", label: l("navJobs"), icon: Briefcase },
        { key: "candidates", label: l("navCandidates"), icon: Users }
      ] },
      { key: "evaluation", label: l("navEvaluation"), icon: ClipboardCheck },
      { key: "payroll", label: l("navPayroll"), icon: Wallet },
      { key: "catalog", label: l("navCatalog"), icon: Database }
    ] }
  ];
}

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_template-side-nav.ts
function SgTemplateSideNav_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5)(1, "span", 6);
    \u0275\u0275text(2, "T\u1EADp \u0111o\xE0n VNR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "tabler-icon", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "docs.appShell.acctEnterprise"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r0.chevDown)("size", 16);
  }
}
var SgTemplateSideNav = class _SgTemplateSideNav {
  constructor() {
    this.selectedKey = input("", ...ngDevMode ? [{ debugName: "selectedKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sections = input(null, ...ngDevMode ? [{ debugName: "sections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = input({ name: "\u0110\u1EB7ng Anh", email: "danganh@vnr.vn" }, ...ngDevMode ? [{ debugName: "user" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsed = model(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemClick = output();
    this.t = inject(TranslateService);
    this.lang = signal(this.t.currentLang, ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.defaultSections = computed(() => (this.lang(), buildNavSections(this.t)), ...ngDevMode ? [{ debugName: "defaultSections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.logo = "/assets/vnr-logo-full.svg";
    this.logoMark = "/assets/vnr-logo-mark.svg";
    this.caret = ChevronRight;
    this.chevDown = ChevronDown;
    this.bell = Bell;
    this.building = Building;
    this.gear = Settings;
    this.sbCollapse = LayoutSidebarLeftCollapse;
    this.sbExpand = LayoutSidebarLeftExpand;
    this.t.onLangChange.subscribe((e) => this.lang.set(e.lang));
  }
  /** Two-way [(collapsed)] cần get/set (bind bare signal không tự .set — idiom codebase). */
  get collapsedModel() {
    return this.collapsed();
  }
  set collapsedModel(v) {
    this.collapsed.set(v);
  }
  static {
    this.\u0275fac = function SgTemplateSideNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTemplateSideNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTemplateSideNav, selectors: [["sg-template-side-nav"]], inputs: { selectedKey: [1, "selectedKey"], sections: [1, "sections"], user: [1, "user"], collapsed: [1, "collapsed"] }, outputs: { collapsed: "collapsedChange", itemClick: "itemClick" }, decls: 9, vars: 23, consts: [[3, "collapsedChange", "itemClick", "sections", "selectedKey", "caretIcon", "logoSrc", "logoMarkSrc", "toggleIcon", "expandIcon", "collapsed", "user", "switchIcon", "switchLabel"], ["snActions", "", "type", "button", 1, "as-ico"], [3, "icon", "size"], ["snHead", "", "type", "button", 1, "sn-acct"], [1, "sn-acct-ic"], [1, "sn-acct-info"], [1, "sn-acct-name"], [1, "sn-acct-sub"], [2, "color", "var(--text-soft)", 3, "icon", "size"]], template: function SgTemplateSideNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "hrm-side-nav", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275twoWayListener("collapsedChange", function SgTemplateSideNav_Template_hrm_side_nav_collapsedChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.collapsedModel, $event) || (ctx.collapsedModel = $event);
          return $event;
        });
        \u0275\u0275listener("itemClick", function SgTemplateSideNav_Template_hrm_side_nav_itemClick_0_listener($event) {
          return ctx.itemClick.emit($event);
        });
        \u0275\u0275elementStart(2, "button", 1);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275element(4, "tabler-icon", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3)(6, "span", 4);
        \u0275\u0275element(7, "tabler-icon", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SgTemplateSideNav_Conditional_8_Template, 7, 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("sections", ctx.sections() ?? ctx.defaultSections())("selectedKey", ctx.selectedKey())("caretIcon", ctx.caret)("logoSrc", ctx.logo)("logoMarkSrc", ctx.logoMark)("toggleIcon", ctx.sbCollapse)("expandIcon", ctx.sbExpand);
        \u0275\u0275twoWayProperty("collapsed", ctx.collapsedModel);
        \u0275\u0275property("user", ctx.user())("switchIcon", ctx.gear)("switchLabel", \u0275\u0275pipeBind1(1, 19, "docs.appShell.navSettings"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 21, "docs.appShell.ariaNotify"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.bell)("size", 20);
        \u0275\u0275advance();
        \u0275\u0275classProp("sn-acct--mini", ctx.collapsed());
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.building)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.collapsed() ? 8 : -1);
      }
    }, dependencies: [HrmSideNav, TablerIconComponent, TranslateModule, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n.as-ico[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-acct-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=_template-side-nav.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTemplateSideNav, [{
    type: Component,
    args: [{ selector: "sg-template-side-nav", imports: [HrmSideNav, TablerIconComponent, TranslateModule], template: `
    <hrm-side-nav [sections]="sections() ?? defaultSections()" [selectedKey]="selectedKey()"
      [caretIcon]="caret" [logoSrc]="logo" [logoMarkSrc]="logoMark"
      [toggleIcon]="sbCollapse" [expandIcon]="sbExpand" [(collapsed)]="collapsedModel"
      [user]="user()" [switchIcon]="gear" [switchLabel]="'docs.appShell.navSettings' | translate"
      (itemClick)="itemClick.emit($event)">
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
  `, styles: ["/* angular:styles/component:css;f73dfedf19f4253162dea37ad9536d41f41b349c33059be654940684416e1119;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_template-side-nav.ts */\n:host {\n  display: contents;\n}\n.as-ico {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-acct {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-acct--mini {\n  width: auto;\n  padding: 4px;\n  border-color: transparent;\n  background: transparent;\n}\n.sn-acct-ic {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  flex: none;\n}\n.sn-acct-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-acct-name {\n  font-size: var(--fs-13);\n  font-weight: var(--font-semibold, 600);\n  color: var(--text-strong);\n}\n.sn-acct-sub {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=_template-side-nav.css.map */\n"] }]
  }], () => [], { selectedKey: [{ type: Input, args: [{ isSignal: true, alias: "selectedKey", required: false }] }], sections: [{ type: Input, args: [{ isSignal: true, alias: "sections", required: false }] }], user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }, { type: Output, args: ["collapsedChange"] }], itemClick: [{ type: Output, args: ["itemClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTemplateSideNav, { className: "SgTemplateSideNav", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_template-side-nav.ts", lineNumber: 51 });
})();

export {
  SgTemplateSideNav
};
//# sourceMappingURL=chunk-X6VZUPSO.js.map
