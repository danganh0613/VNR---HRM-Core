import {
  HrmAmountCell
} from "./chunk-F4FDPHKF.js";
import {
  HrmUserCell
} from "./chunk-QLXCS5IB.js";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-U557YZUX.js";
import "./chunk-PSR5ADGK.js";
import "./chunk-KGPHHG27.js";
import "./chunk-JUFZRQMG.js";
import "./chunk-TUHU6AB5.js";
import "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-KS5WOU2W.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import "./chunk-BKAPBN54.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIWX2G7Z.js";
import "./chunk-KXHKNX77.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
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
  ChevronRight,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  computed,
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
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/tree-list.ts
var _c0 = () => ({ label: "User Cell", route: "hrm/table-cells/user" });
var _c1 = () => ({ label: "Amount Cell", route: "hrm/table-cells/amount" });
var _c2 = (a0, a1) => [a0, a1];
var _forTrack0 = ($index, $item) => $item.key;
function SgDocTreeList_ng_template_27_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SgDocTreeList_ng_template_27_For_14_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(r_r2.key));
    });
    \u0275\u0275element(2, "tabler-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("open", ctx_r2.isOpen(r_r2.key));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 5, "docs.treeList.ariaToggle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.chev)("size", 14);
  }
}
function SgDocTreeList_ng_template_27_For_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function SgDocTreeList_ng_template_27_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 12);
    \u0275\u0275conditionalCreate(3, SgDocTreeList_ng_template_27_For_14_Conditional_3_Template, 3, 7, "button", 13)(4, SgDocTreeList_ng_template_27_For_14_Conditional_4_Template, 1, 0, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "hrm-user-cell", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 11);
    \u0275\u0275element(10, "hrm-amount-cell", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", r_r2.level * 22, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r2.hasChildren ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, r_r2.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", r_r2.head)("colorful", true)("avatarSize", 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", r_r2.count);
  }
}
function SgDocTreeList_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-table", 10)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, SgDocTreeList_ng_template_27_For_14_Template, 11, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r2.visible())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "docs.treeList.colUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "docs.treeList.colHead"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "docs.treeList.colCount"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.visible());
  }
}
var SgDocTreeList = class _SgDocTreeList {
  constructor() {
    this.chev = ChevronRight;
    this.tree = [
      { key: "vnr", name: "docs.treeList.nodeVnr", head: "\u0110\u1EB7ng V\u0169", count: 1596, children: [
        { key: "hr", name: "docs.treeList.nodeHr", head: "Tr\u1EA7n Thu H\xE0", count: 45, children: [
          { key: "rec", name: "docs.treeList.nodeRec", head: "L\xEA Qu\u1ED1c B\u1EA3o", count: 12 },
          { key: "cb", name: "docs.treeList.nodeCb", head: "Ph\u1EA1m Ng\u1ECDc Anh", count: 18 }
        ] },
        { key: "it", name: "docs.treeList.nodeIt", head: "Nguy\u1EC5n Minh Tu\u1EA5n", count: 98, children: [
          { key: "be", name: "docs.treeList.nodeBe", head: "\u0110\u1ED7 V\u0103n Nam", count: 40 },
          { key: "fe", name: "docs.treeList.nodeFe", head: "B\xF9i H\u1EA3i Y\u1EBFn", count: 35 }
        ] },
        { key: "fin", name: "docs.treeList.nodeFin", head: "V\xF5 Th\xE0nh Trung", count: 60 }
      ] }
    ];
    this.open = signal(/* @__PURE__ */ new Set(["vnr", "hr", "it"]), ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visible = computed(() => {
      const openSet = this.open();
      const out = [];
      const walk = (nodes, level) => {
        for (const n of nodes) {
          const hasChildren = !!n.children?.length;
          out.push({ key: n.key, name: n.name, head: n.head, count: n.count, level, hasChildren });
          if (hasChildren && openSet.has(n.key))
            walk(n.children, level + 1);
        }
      };
      walk(this.tree, 0);
      return out;
    }, ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = ["docs.treeList.when1", "docs.treeList.when2"];
  }
  isOpen(key) {
    return this.open().has(key);
  }
  toggle(key) {
    const s = new Set(this.open());
    s.has(key) ? s.delete(key) : s.add(key);
    this.open.set(s);
  }
  static {
    this.\u0275fac = function SgDocTreeList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTreeList)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTreeList, selectors: [["sg-doc-tree-list"]], decls: 29, vars: 39, consts: [["grid", ""], ["category", "Table & List", 3, "title", "desc", "related"], ["sgOverview", ""], [2, "width", "100%"], [3, "ngTemplateOutlet"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [2, "text-align", "right"], [2, "display", "inline-flex", "align-items", "center", "gap", "6px"], ["type", "button", 1, "tl-toggle", 3, "open"], [1, "tl-dot"], [3, "name", "colorful", "avatarSize"], [3, "value"], ["type", "button", 1, "tl-toggle", 3, "click"], [3, "icon", "size"]], template: function SgDocTreeList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275elementContainer(5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "sg-use", 6);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "sg-example", 9);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementStart(25, "div", 3);
        \u0275\u0275elementContainer(26, 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, SgDocTreeList_ng_template_27_Template, 15, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const grid_r4 = \u0275\u0275reference(28);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 14, "docs.treeList.title"))("desc", \u0275\u0275pipeBind1(2, 16, "docs.treeList.desc"))("related", \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pureFunction0(34, _c0), \u0275\u0275pureFunction0(35, _c1)));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngTemplateOutlet", grid_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 18, "docs.treeList.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 20, "docs.treeList.behavior"))("avoid", \u0275\u0275pipeBind1(10, 22, "docs.treeList.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "docs.treeList.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "docs.treeList.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "docs.treeList.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(23, 30, "docs.treeList.exT"))("desc", \u0275\u0275pipeBind1(24, 32, "docs.treeList.exD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", grid_r4);
      }
    }, dependencies: [NgTemplateOutlet, TranslateModule, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, TablerIconComponent, HrmUserCell, HrmAmountCell, SgDoc, SgUse, SgDo, SgDont, SgExample, TranslatePipe], styles: ["\n.tl-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-sm);\n}\n.tl-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tl-toggle[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  transition: transform var(--duration-fast,.15s) var(--ease-out,ease);\n}\n.tl-toggle.open[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.tl-dot[_ngcontent-%COMP%] {\n  width: 20px;\n  display: inline-block;\n}\n/*# sourceMappingURL=tree-list.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTreeList, [{
    type: Component,
    args: [{ selector: "sg-doc-tree-list", imports: [NgTemplateOutlet, TranslateModule, NzTableModule, TablerIconComponent, HrmUserCell, HrmAmountCell, SgDoc, SgUse, SgDo, SgDont, SgExample], template: `
    <sg-doc category="Table & List" [title]="'docs.treeList.title' | translate" [desc]="'docs.treeList.desc' | translate"
      [related]="[{label:'User Cell', route:'hrm/table-cells/user'},{label:'Amount Cell', route:'hrm/table-cells/amount'}]">

      <div sgOverview>
        <div style="width:100%">
          <ng-container [ngTemplateOutlet]="grid" />
        </div>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.treeList.purpose' | translate" [when]="when"
          [behavior]="'docs.treeList.behavior' | translate"
          [avoid]="'docs.treeList.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.treeList.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.treeList.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.treeList.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.treeList.exT' | translate"
          [desc]="'docs.treeList.exD' | translate">
          <div style="width:100%">
            <ng-container [ngTemplateOutlet]="grid" />
          </div>
        </sg-example>
      </div>

      <ng-template #grid>
        <nz-table [nzData]="visible()" [nzShowPagination]="false" nzSize="small">
          <thead><tr><th>{{ 'docs.treeList.colUnit' | translate }}</th><th>{{ 'docs.treeList.colHead' | translate }}</th><th style="text-align:right">{{ 'docs.treeList.colCount' | translate }}</th></tr></thead>
          <tbody>
            @for (r of visible(); track r.key) {
              <tr>
                <td>
                  <span [style.padding-left.px]="r.level * 22" style="display:inline-flex;align-items:center;gap:6px">
                    @if (r.hasChildren) {
                      <button type="button" class="tl-toggle" [class.open]="isOpen(r.key)" (click)="toggle(r.key)" [attr.aria-label]="'docs.treeList.ariaToggle' | translate">
                        <tabler-icon [icon]="chev" [size]="14" />
                      </button>
                    } @else { <span class="tl-dot"></span> }
                    {{ r.name | translate }}
                  </span>
                </td>
                <td><hrm-user-cell [name]="r.head" [colorful]="true" [avatarSize]="30" /></td>
                <td style="text-align:right"><hrm-amount-cell [value]="r.count" /></td>
              </tr>
            }
          </tbody>
        </nz-table>
      </ng-template>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;ea8a6dcc4a3cf844828d9603b331984ed09357a7981709e113ad804c47434ef2;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/tree-list.ts */\n.tl-toggle {\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-sm);\n}\n.tl-toggle:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.tl-toggle tabler-icon {\n  transition: transform var(--duration-fast,.15s) var(--ease-out,ease);\n}\n.tl-toggle.open tabler-icon {\n  transform: rotate(90deg);\n}\n.tl-dot {\n  width: 20px;\n  display: inline-block;\n}\n/*# sourceMappingURL=tree-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTreeList, { className: "SgDocTreeList", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/enterprise/tree-list.ts", lineNumber: 83 });
})();
export {
  SgDocTreeList
};
//# sourceMappingURL=chunk-SHP3LELG.js.map
