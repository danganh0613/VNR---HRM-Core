import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule,
  NzSubMenuComponent
} from "./chunk-ODJV4T5O.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  Output,
  inject,
  input,
  output,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/navigation/hrm-menu.ts
var _forTrack0 = ($index, $item) => $item.key;
function HrmMenu_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275listener("click", function HrmMenu_For_2_Conditional_0_For_3_Template_li_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.itemClick.emit(c_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzSelected", c_r2.key === ctx_r2.selectedKey())("nzDisabled", c_r2.disabled ?? false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.label);
  }
}
function HrmMenu_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1)(1, "ul");
    \u0275\u0275repeaterCreate(2, HrmMenu_For_2_Conditional_0_For_3_Template, 2, 3, "li", 2, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzTitle", item_r4.label)("nzDisabled", item_r4.disabled ?? false);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r4.children);
  }
}
function HrmMenu_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275listener("click", function HrmMenu_For_2_Conditional_1_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.itemClick.emit(item_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSelected", item_r4.key === ctx_r2.selectedKey())("nzDisabled", item_r4.disabled ?? false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function HrmMenu_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmMenu_For_2_Conditional_0_Template, 4, 2, "li", 1)(1, HrmMenu_For_2_Conditional_1_Template, 2, 3, "li", 2);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional((item_r4.children == null ? null : item_r4.children.length) ? 0 : 1);
  }
}
var HrmMenu = class _HrmMenu {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("inline", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKey = input("", ...ngDevMode ? [{ debugName: "selectedKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsed = input(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemClick = output();
  }
  static {
    this.\u0275fac = function HrmMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmMenu)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmMenu, selectors: [["hrm-menu"]], hostAttrs: [1, "hrm-menu"], inputs: { items: [1, "items"], mode: [1, "mode"], selectedKey: [1, "selectedKey"], collapsed: [1, "collapsed"] }, outputs: { itemClick: "itemClick" }, decls: 3, vars: 2, consts: [["nz-menu", "", 3, "nzMode", "nzInlineCollapsed"], ["nz-submenu", "", 3, "nzTitle", "nzDisabled"], ["nz-menu-item", "", 3, "nzSelected", "nzDisabled"], ["nz-menu-item", "", 3, "click", "nzSelected", "nzDisabled"]], template: function HrmMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, HrmMenu_For_2_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzMode", ctx.mode())("nzInlineCollapsed", ctx.collapsed());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
      }
    }, dependencies: [NzMenuModule, NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmMenu, [{
    type: Component,
    args: [{
      selector: "hrm-menu",
      imports: [NzMenuModule],
      template: `
    <ul nz-menu [nzMode]="mode()" [nzInlineCollapsed]="collapsed()">
      @for (item of items(); track item.key) {
        @if (item.children?.length) {
          <li nz-submenu [nzTitle]="item.label" [nzDisabled]="item.disabled ?? false">
            <ul>
              @for (c of item.children!; track c.key) {
                <li nz-menu-item [nzSelected]="c.key === selectedKey()" [nzDisabled]="c.disabled ?? false" (click)="itemClick.emit(c)">{{ c.label }}</li>
              }
            </ul>
          </li>
        } @else {
          <li nz-menu-item [nzSelected]="item.key === selectedKey()" [nzDisabled]="item.disabled ?? false" (click)="itemClick.emit(item)">{{ item.label }}</li>
        }
      }
    </ul>
  `,
      host: { class: "hrm-menu" }
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], selectedKey: [{ type: Input, args: [{ isSignal: true, alias: "selectedKey", required: false }] }], collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }], itemClick: [{ type: Output, args: ["itemClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmMenu, { className: "HrmMenu", filePath: "libs/hrm-ui/src/lib/navigation/hrm-menu.ts", lineNumber: 34 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/menu.ts
var SgDocMenu = class _SgDocMenu {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.menu.when1",
      "docs.menu.when2",
      "docs.menu.when3"
    ];
  }
  /** Module cấp cao — dùng cho thanh ngang. */
  get moduleItems() {
    return [
      { key: "dash", label: this.t.instant("docs.menu.itemOverview") },
      { key: "staff", label: this.t.instant("docs.menu.itemStaff") },
      { key: "attend", label: this.t.instant("docs.menu.itemAttend") },
      { key: "payroll", label: this.t.instant("docs.menu.itemPayroll") },
      { key: "report", label: this.t.instant("docs.menu.itemReport") }
    ];
  }
  /** Menu phòng ban với 1 nhóm con. */
  get deptItems() {
    return [
      { key: "overview", label: this.t.instant("docs.menu.itemOverview") },
      {
        key: "people",
        label: this.t.instant("docs.menu.itemPeople"),
        children: [
          { key: "recruit", label: this.t.instant("docs.menu.itemRecruit") },
          { key: "attend", label: this.t.instant("docs.menu.itemAttend") }
        ]
      },
      { key: "contract", label: this.t.instant("docs.menu.itemContract") }
    ];
  }
  /** Trang cài đặt — nhiều nhóm con song song. */
  get settingsItems() {
    return [
      {
        key: "org",
        label: this.t.instant("docs.menu.itemOrg"),
        children: [
          { key: "dept", label: this.t.instant("docs.menu.itemDept") },
          { key: "title", label: this.t.instant("docs.menu.itemTitle") }
        ]
      },
      {
        key: "comp",
        label: this.t.instant("docs.menu.itemComp"),
        children: [
          { key: "payroll", label: this.t.instant("docs.menu.itemPayrollTable") },
          { key: "bonus", label: this.t.instant("docs.menu.itemBonus") }
        ]
      },
      {
        key: "sys",
        label: this.t.instant("docs.menu.itemSys"),
        children: [
          { key: "role", label: this.t.instant("docs.menu.itemRole") },
          { key: "log", label: this.t.instant("docs.menu.itemLog") }
        ]
      }
    ];
  }
  /** Menu có 1 mục bị khóa. */
  get lockedItems() {
    return [
      { key: "dash", label: this.t.instant("docs.menu.itemOverview") },
      { key: "staff", label: this.t.instant("docs.menu.itemStaff") },
      { key: "approve", label: this.t.instant("docs.menu.itemApprove"), disabled: true }
    ];
  }
  static {
    this.\u0275fac = function SgDocMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMenu)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMenu, selectors: [["sg-doc-menu"]], decls: 55, vars: 65, consts: [["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], [2, "max-width", "280px"], ["selectedKey", "recruit", "mode", "inline", 3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%"], ["selectedKey", "staff", "mode", "horizontal", 3, "items"], [2, "width", "260px"], ["selectedKey", "payroll", "mode", "inline", 3, "items"], [3, "label"], [2, "width", "80px"], ["selectedKey", "staff", "mode", "inline", 3, "items", "collapsed"], ["selectedKey", "dash", "mode", "inline", 3, "items"]], template: function SgDocMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-menu", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "sg-example", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 10);
        \u0275\u0275element(33, "hrm-menu", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 9);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row")(38, "div", 12);
        \u0275\u0275element(39, "hrm-menu", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "sg-example", 9);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row")(44, "div", 12);
        \u0275\u0275element(45, "hrm-menu", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "sg-example", 9);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row", 14);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "div", 15);
        \u0275\u0275element(52, "hrm-menu", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 12);
        \u0275\u0275element(54, "hrm-menu", 17);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 27, "docs.menu.title"))("desc", \u0275\u0275pipeBind1(2, 29, "docs.menu.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.deptItems);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 31, "docs.menu.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 33, "docs.menu.behavior"))("avoid", \u0275\u0275pipeBind1(10, 35, "docs.menu.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 37, "docs.menu.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 39, "docs.menu.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 41, "docs.menu.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 43, "docs.menu.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 45, "docs.menu.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 47, "docs.menu.exHorizT"))("desc", \u0275\u0275pipeBind1(30, 49, "docs.menu.exHorizD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.moduleItems);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 51, "docs.menu.exVertT"))("desc", \u0275\u0275pipeBind1(36, 53, "docs.menu.exVertD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.deptItems);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 55, "docs.menu.exGroupsT"))("desc", \u0275\u0275pipeBind1(42, 57, "docs.menu.exGroupsD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.settingsItems);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 59, "docs.menu.exCollapseT"))("desc", \u0275\u0275pipeBind1(48, 61, "docs.menu.exCollapseD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(50, 63, "docs.menu.exCollapseRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.moduleItems)("collapsed", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.lockedItems);
      }
    }, dependencies: [TranslateModule, HrmMenu, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMenu, [{
    type: Component,
    args: [{
      selector: "sg-doc-menu",
      imports: [TranslateModule, HrmMenu, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.menu.title' | translate" [desc]="'docs.menu.desc' | translate">

      <div sgOverview>
        <div style="max-width:280px">
          <hrm-menu [items]="deptItems" selectedKey="recruit" mode="inline" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.menu.purpose' | translate"
          [when]="when"
          [behavior]="'docs.menu.behavior' | translate"
          [avoid]="'docs.menu.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.menu.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.menu.do2' | translate }}</sg-do>
        <sg-do><span [innerHTML]="'docs.menu.do3' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.menu.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.menu.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.menu.exHorizT' | translate"
          [desc]="'docs.menu.exHorizD' | translate">
          <sg-row>
            <div style="width:100%"><hrm-menu [items]="moduleItems" selectedKey="staff" mode="horizontal" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.menu.exVertT' | translate"
          [desc]="'docs.menu.exVertD' | translate">
          <sg-row>
            <div style="width:260px"><hrm-menu [items]="deptItems" selectedKey="recruit" mode="inline" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.menu.exGroupsT' | translate"
          [desc]="'docs.menu.exGroupsD' | translate">
          <sg-row>
            <div style="width:260px"><hrm-menu [items]="settingsItems" selectedKey="payroll" mode="inline" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.menu.exCollapseT' | translate"
          [desc]="'docs.menu.exCollapseD' | translate">
          <sg-row [label]="'docs.menu.exCollapseRow' | translate">
            <div style="width:80px"><hrm-menu [items]="moduleItems" selectedKey="staff" mode="inline" [collapsed]="true" /></div>
            <div style="width:260px"><hrm-menu [items]="lockedItems" selectedKey="dash" mode="inline" /></div>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMenu, { className: "SgDocMenu", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/menu.ts", lineNumber: 74 });
})();
export {
  SgDocMenu
};
//# sourceMappingURL=chunk-BQHN7ILE.js.map
