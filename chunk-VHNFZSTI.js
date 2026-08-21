import {
  HrmFilterPanel
} from "./chunk-S6A672KI.js";
import "./chunk-N5JCH7W2.js";
import {
  HrmQuickFilter
} from "./chunk-CJKFUWVC.js";
import "./chunk-RKQLONQG.js";
import "./chunk-HFOJ6MC3.js";
import "./chunk-7O54XKAF.js";
import "./chunk-QRKELULO.js";
import "./chunk-3HHHYBKP.js";
import "./chunk-KGPHHG27.js";
import "./chunk-JUFZRQMG.js";
import "./chunk-H3B7M4KL.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-IETGC4TN.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import "./chunk-BKAPBN54.js";
import "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-VA24G7CQ.js";
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
  Briefcase,
  Building,
  CalendarEvent,
  Clock,
  Id,
  Mail,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Tag,
  User,
  Wallet
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/filter-panel.ts
var SgDocFilterPanel = class _SgDocFilterPanel {
  constructor() {
    this.when = ["docs.filterPanel.when1", "docs.filterPanel.when2", "docs.filterPanel.when3"];
    this.deptOpts = [
      { value: "it", label: "K\u1EF9 thu\u1EADt" },
      { value: "biz", label: "Kinh doanh" },
      { value: "hr", label: "Nh\xE2n s\u1EF1" },
      { value: "acc", label: "K\u1EBF to\xE1n" },
      { value: "mkt", label: "Marketing" }
    ];
    this.sorts = [
      { value: "newest", label: "M\u1EDBi nh\u1EA5t" },
      { value: "oldest", label: "C\u0169 nh\u1EA5t" },
      { value: "az", label: "T\xEAn A\u2192Z" }
    ];
    this.fields = [
      {
        key: "kw",
        label: "T\u1EEB kh\xF3a",
        icon: Search,
        type: "text",
        fixed: true,
        placeholder: "Nh\u1EADp t\u1EEB kh\xF3a (h\u1ECD t\xEAn, email, m\xE3 NV...)"
      },
      {
        key: "dept",
        label: "Ph\xF2ng ban",
        icon: Building,
        type: "multi",
        visible: true,
        group: "Th\u01B0\u1EDDng d\xF9ng",
        options: this.deptOpts,
        placeholder: "Ch\u1ECDn ph\xF2ng ban"
      },
      {
        key: "status",
        label: "Tr\u1EA1ng th\xE1i",
        icon: Tag,
        type: "multi",
        visible: true,
        group: "Th\u01B0\u1EDDng d\xF9ng",
        options: [
          { value: "active", label: "\u0110ang l\xE0m" },
          { value: "trial", label: "Th\u1EED vi\u1EC7c" },
          { value: "leave", label: "Ngh\u1EC9 ph\xE9p" },
          { value: "off", label: "\u0110\xE3 ngh\u1EC9" }
        ],
        placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i"
      },
      {
        key: "position",
        label: "V\u1ECB tr\xED c\xF4ng vi\u1EC7c",
        icon: Briefcase,
        type: "select",
        visible: true,
        group: "Th\u01B0\u1EDDng d\xF9ng",
        options: [
          { value: "dev", label: "L\u1EADp tr\xECnh vi\xEAn" },
          { value: "ba", label: "BA" },
          { value: "qa", label: "QA" },
          { value: "pm", label: "PM" },
          { value: "sale", label: "Nh\xE2n vi\xEAn kinh doanh" }
        ],
        placeholder: "Ch\u1ECDn v\u1ECB tr\xED c\xF4ng vi\u1EC7c"
      },
      { key: "joinDate", label: "Ng\xE0y v\xE0o", icon: CalendarEvent, type: "date-range", visible: true, group: "Th\u01B0\u1EDDng d\xF9ng" },
      { key: "birthday", label: "Ng\xE0y sinh", icon: CalendarEvent, type: "date-range", group: "Th\u01B0\u1EDDng d\xF9ng" },
      {
        key: "contract",
        label: "C\xF3 h\u1EE3p \u0111\u1ED3ng ch\xEDnh th\u1EE9c",
        icon: ShieldCheck,
        type: "segmented",
        visible: true,
        group: "C\xF4ng vi\u1EC7c",
        options: [{ value: "", label: "T\u1EA5t c\u1EA3" }, { value: "yes", label: "C\xF3" }, { value: "no", label: "Kh\xF4ng" }]
      },
      { key: "name", label: "H\u1ECD t\xEAn", icon: User, type: "text", group: "Th\xF4ng tin nh\xE2n vi\xEAn" },
      { key: "email", label: "Email", icon: Mail, type: "text", group: "Th\xF4ng tin nh\xE2n vi\xEAn" },
      { key: "phone", label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", icon: Phone, type: "text", group: "Th\xF4ng tin nh\xE2n vi\xEAn" },
      { key: "code", label: "M\xE3 nh\xE2n vi\xEAn", icon: Id, type: "text", group: "Th\xF4ng tin nh\xE2n vi\xEAn" },
      { key: "title", label: "Ch\u1EE9c danh", icon: Briefcase, type: "text", group: "C\xF4ng vi\u1EC7c" },
      {
        key: "level",
        label: "C\u1EA5p b\u1EADc",
        icon: Briefcase,
        type: "select",
        group: "C\xF4ng vi\u1EC7c",
        options: [{ value: "staff", label: "Nh\xE2n vi\xEAn" }, { value: "lead", label: "Tr\u01B0\u1EDFng nh\xF3m" }, { value: "manager", label: "Qu\u1EA3n l\xFD" }]
      },
      { key: "manager", label: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp", icon: User, type: "text", group: "C\xF4ng vi\u1EC7c" },
      { key: "salary", label: "L\u01B0\u01A1ng c\u01A1 b\u1EA3n (tri\u1EC7u)", icon: Wallet, type: "number", group: "C\xF4ng vi\u1EC7c", defaultOperator: "between" },
      { key: "seniority", label: "Th\xE2m ni\xEAn (n\u0103m)", icon: Clock, type: "number", group: "C\xF4ng vi\u1EC7c" },
      {
        key: "score",
        label: "\u0110i\u1EC3m \u0111\xE1nh gi\xE1",
        icon: Star,
        type: "select",
        group: "Kh\xE1c",
        options: [{ value: "a", label: "Xu\u1EA5t s\u1EAFc" }, { value: "b", label: "\u0110\u1EA1t" }, { value: "c", label: "C\u1EA7n c\u1EA3i thi\u1EC7n" }]
      },
      { key: "updated", label: "Ng\xE0y c\u1EADp nh\u1EADt", icon: Clock, type: "date-range", group: "Kh\xE1c" }
    ];
    this.conds = [];
    this.conds2 = [];
    this.sortSel = [];
    this.sortSel2 = [];
    this.quickDepts = [];
  }
  condsText() {
    const c = this.conds;
    return c.length ? c.map((x) => `${x.key} ${x.operator}`).join(" \xB7 ") : "\u2014";
  }
  static {
    this.\u0275fac = function SgDocFilterPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocFilterPanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocFilterPanel, selectors: [["sg-doc-filter-panel"]], decls: 58, vars: 110, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [1, "tb"], [3, "conditionsChange", "label", "panelTitle", "panelSubtitle", "fields", "conditions", "resetLabel", "applyLabel", "cancelLabel", "addLabel", "searchPlaceholder"], ["mode", "single", 3, "valueChange", "label", "options", "value", "searchable"], [1, "dm-note"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "valueChange", "label", "unit", "options", "value"]], template: function SgDocFilterPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row")(5, "div", 2)(6, "hrm-filter-panel", 3);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("conditionsChange", function SgDocFilterPanel_Template_hrm_filter_panel_conditionsChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.conds, $event) || (ctx.conds = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "hrm-quick-filter", 4);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocFilterPanel_Template_hrm_quick_filter_valueChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortSel, $event) || (ctx.sortSel = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "p", 5);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6);
        \u0275\u0275element(21, "sg-use", 7);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "sg-do");
        \u0275\u0275element(27, "span", 9);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-do");
        \u0275\u0275element(30, "span", 9);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "sg-dont");
        \u0275\u0275element(33, "span", 9);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "sg-dont");
        \u0275\u0275element(36, "span", 9);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 10)(39, "sg-example", 11);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row")(43, "div", 2)(44, "hrm-quick-filter", 12);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocFilterPanel_Template_hrm_quick_filter_valueChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.quickDepts, $event) || (ctx.quickDepts = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "hrm-quick-filter", 4);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275twoWayListener("valueChange", function SgDocFilterPanel_Template_hrm_quick_filter_valueChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortSel2, $event) || (ctx.sortSel2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "hrm-filter-panel", 3);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275twoWayListener("conditionsChange", function SgDocFilterPanel_Template_hrm_filter_panel_conditionsChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.conds2, $event) || (ctx.conds2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 46, "docs.filterPanel.title"))("desc", \u0275\u0275pipeBind1(2, 48, "docs.filterPanel.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 50, "docs.filterPanel.demoBtn"))("panelTitle", \u0275\u0275pipeBind1(8, 52, "docs.filterPanel.demoTitle"))("panelSubtitle", \u0275\u0275pipeBind1(9, 54, "docs.filterPanel.demoSub"))("fields", ctx.fields);
        \u0275\u0275twoWayProperty("conditions", ctx.conds);
        \u0275\u0275property("resetLabel", \u0275\u0275pipeBind1(10, 56, "docs.filterPanel.reset"))("applyLabel", \u0275\u0275pipeBind1(11, 58, "docs.filterPanel.apply"))("cancelLabel", \u0275\u0275pipeBind1(12, 60, "docs.filterPanel.cancel"))("addLabel", \u0275\u0275pipeBind1(13, 62, "docs.filterPanel.addCond"))("searchPlaceholder", \u0275\u0275pipeBind1(14, 64, "docs.filterPanel.searchCond"));
        \u0275\u0275advance(9);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 66, "docs.filterPanel.demoQuick"))("options", ctx.sorts);
        \u0275\u0275twoWayProperty("value", ctx.sortSel);
        \u0275\u0275property("searchable", false);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(19, 68, "docs.filterPanel.demoNote"), " \u2014 ", ctx.condsText());
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(22, 70, "docs.filterPanel.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(23, 72, "docs.filterPanel.behavior"))("avoid", \u0275\u0275pipeBind1(24, 74, "docs.filterPanel.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(28, 76, "docs.filterPanel.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(31, 78, "docs.filterPanel.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(34, 80, "docs.filterPanel.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(37, 82, "docs.filterPanel.dont2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 84, "docs.filterPanel.exToolbarT"))("desc", \u0275\u0275pipeBind1(41, 86, "docs.filterPanel.exToolbarD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(45, 88, "docs.filterPanel.fDept"))("unit", \u0275\u0275pipeBind1(46, 90, "docs.filterPanel.fDeptUnit"))("options", ctx.deptOpts);
        \u0275\u0275twoWayProperty("value", ctx.quickDepts);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 92, "docs.filterPanel.demoQuick"))("options", ctx.sorts);
        \u0275\u0275twoWayProperty("value", ctx.sortSel2);
        \u0275\u0275property("searchable", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(50, 94, "docs.filterPanel.demoBtn"))("panelTitle", \u0275\u0275pipeBind1(51, 96, "docs.filterPanel.demoTitle"))("panelSubtitle", \u0275\u0275pipeBind1(52, 98, "docs.filterPanel.demoSub"))("fields", ctx.fields);
        \u0275\u0275twoWayProperty("conditions", ctx.conds2);
        \u0275\u0275property("resetLabel", \u0275\u0275pipeBind1(53, 100, "docs.filterPanel.reset"))("applyLabel", \u0275\u0275pipeBind1(54, 102, "docs.filterPanel.apply"))("cancelLabel", \u0275\u0275pipeBind1(55, 104, "docs.filterPanel.cancel"))("addLabel", \u0275\u0275pipeBind1(56, 106, "docs.filterPanel.addCond"))("searchPlaceholder", \u0275\u0275pipeBind1(57, 108, "docs.filterPanel.searchCond"));
      }
    }, dependencies: [TranslateModule, HrmFilterPanel, HrmQuickFilter, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.tb[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.dm-note[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=filter-panel.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocFilterPanel, [{
    type: Component,
    args: [{ selector: "sg-doc-filter-panel", imports: [TranslateModule, HrmFilterPanel, HrmQuickFilter, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Data Input" [title]="'docs.filterPanel.title' | translate" [desc]="'docs.filterPanel.desc' | translate">

      <div sgOverview>
        <sg-row>
          <div class="tb">
            <hrm-filter-panel [label]="'docs.filterPanel.demoBtn' | translate"
              [panelTitle]="'docs.filterPanel.demoTitle' | translate"
              [panelSubtitle]="'docs.filterPanel.demoSub' | translate"
              [fields]="fields" [(conditions)]="conds"
              [resetLabel]="'docs.filterPanel.reset' | translate"
              [applyLabel]="'docs.filterPanel.apply' | translate"
              [cancelLabel]="'docs.filterPanel.cancel' | translate"
              [addLabel]="'docs.filterPanel.addCond' | translate"
              [searchPlaceholder]="'docs.filterPanel.searchCond' | translate" />
            <hrm-quick-filter [label]="'docs.filterPanel.demoQuick' | translate" mode="single"
              [options]="sorts" [(value)]="sortSel" [searchable]="false" />
          </div>
        </sg-row>
        <p class="dm-note">{{ 'docs.filterPanel.demoNote' | translate }} \u2014 {{ condsText() }}</p>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.filterPanel.purpose' | translate"
          [when]="when"
          [behavior]="'docs.filterPanel.behavior' | translate"
          [avoid]="'docs.filterPanel.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.filterPanel.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.filterPanel.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.filterPanel.dont1' | translate"></span></sg-dont>
        <sg-dont><span [innerHTML]="'docs.filterPanel.dont2' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.filterPanel.exToolbarT' | translate" [desc]="'docs.filterPanel.exToolbarD' | translate">
          <sg-row>
            <div class="tb">
              <hrm-quick-filter [label]="'docs.filterPanel.fDept' | translate" [unit]="'docs.filterPanel.fDeptUnit' | translate"
                [options]="deptOpts" [(value)]="quickDepts" />
              <hrm-quick-filter [label]="'docs.filterPanel.demoQuick' | translate" mode="single"
                [options]="sorts" [(value)]="sortSel2" [searchable]="false" />
              <hrm-filter-panel [label]="'docs.filterPanel.demoBtn' | translate"
                [panelTitle]="'docs.filterPanel.demoTitle' | translate"
                [panelSubtitle]="'docs.filterPanel.demoSub' | translate"
                [fields]="fields" [(conditions)]="conds2"
                [resetLabel]="'docs.filterPanel.reset' | translate"
                [applyLabel]="'docs.filterPanel.apply' | translate"
                [cancelLabel]="'docs.filterPanel.cancel' | translate"
                [addLabel]="'docs.filterPanel.addCond' | translate"
                [searchPlaceholder]="'docs.filterPanel.searchCond' | translate" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;c30383d5d2802310592e9461d8c72b6c2534605d11c14eaf26328b0c836312fa;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/filter-panel.ts */\n.tb {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.dm-note {\n  margin: 10px 0 0;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n/*# sourceMappingURL=filter-panel.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocFilterPanel, { className: "SgDocFilterPanel", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/filter-panel.ts", lineNumber: 83 });
})();
export {
  SgDocFilterPanel
};
//# sourceMappingURL=chunk-VHNFZSTI.js.map
