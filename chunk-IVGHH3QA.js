import {
  HrmBadge
} from "./chunk-MEB7WEQC.js";
import "./chunk-HD5R6J3K.js";
import {
  HrmCheckbox
} from "./chunk-V63HCRKY.js";
import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import "./chunk-BKAPBN54.js";
import "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
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
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/checkbox.ts
var _forTrack0 = ($index, $item) => $item.id;
function SgDocCheckbox_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-checkbox", 3);
    \u0275\u0275listener("ngModelChange", function SgDocCheckbox_For_41_Template_hrm_checkbox_ngModelChange_0_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setItem(item_r2.id, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngModel", item_r2.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, item_r2.name));
  }
}
function SgDocCheckbox_For_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", opt_r5.hue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r5.tag));
  }
}
function SgDocCheckbox_For_48_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-badge", 18);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const opt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("status", opt_r5.status)("text", \u0275\u0275pipeBind1(1, 2, opt_r5.price));
  }
}
function SgDocCheckbox_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "hrm-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function SgDocCheckbox_For_48_Template_hrm_checkbox_ngModelChange_1_listener($event) {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(opt_r5.checked, $event) || (opt_r5.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgDocCheckbox_For_48_Conditional_4_Template, 3, 4, "hrm-tag", 17)(5, SgDocCheckbox_For_48_Conditional_5_Template, 2, 4, "hrm-badge", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", opt_r5.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, opt_r5.name));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(opt_r5.tag ? 4 : 5);
  }
}
var SgDocCheckbox = class _SgDocCheckbox {
  constructor() {
    this.agree = true;
    this.when = [
      "docs.checkbox.when1",
      "docs.checkbox.when2",
      "docs.checkbox.when3"
    ];
    this.items = signal([
      { id: 1, name: "docs.checkbox.person1", checked: true },
      { id: 2, name: "docs.checkbox.person2", checked: false },
      { id: 3, name: "docs.checkbox.person3", checked: false }
    ], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allChecked = computed(() => this.items().every((i) => i.checked), ...ngDevMode ? [{ debugName: "allChecked" }] : (
      /* istanbul ignore next */
      []
    ));
    this.someChecked = computed(() => {
      const list = this.items();
      return list.some((i) => i.checked) && !list.every((i) => i.checked);
    }, ...ngDevMode ? [{ debugName: "someChecked" }] : (
      /* istanbul ignore next */
      []
    ));
    this.options = signal([
      { id: 1, name: "docs.checkbox.planBasic", price: "docs.checkbox.priceFree", status: "default", tag: "", hue: "gray", checked: false },
      { id: 2, name: "docs.checkbox.planStandard", price: "docs.checkbox.priceStandard", status: "processing", tag: "", hue: "blue", checked: true },
      { id: 3, name: "docs.checkbox.planPremium", price: "", status: "success", tag: "docs.checkbox.tagRecommended", hue: "green", checked: false }
    ], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  toggleAll(checked) {
    this.items.update((list) => list.map((i) => __spreadProps(__spreadValues({}, i), { checked })));
  }
  setItem(id, checked) {
    this.items.update((list) => list.map((i) => i.id === id ? __spreadProps(__spreadValues({}, i), { checked }) : i));
  }
  static {
    this.\u0275fac = function SgDocCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCheckbox)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCheckbox, selectors: [["sg-doc-checkbox"]], decls: 49, vars: 58, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [3, "label"], [3, "ngModelChange", "ngModel"], [3, "ngModel"], [3, "disabled", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "display", "flex", "flex-direction", "column", "gap", "10px"], [3, "ngModelChange", "ngModel", "indeterminate"], [2, "height", "1px", "background", "var(--border-soft)", "margin", "2px 0"], [2, "display", "flex", "flex-direction", "column", "gap", "12px", "min-width", "280px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "16px"], [3, "color"], [3, "status", "text"]], template: function SgDocCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "hrm-checkbox", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCheckbox_Template_hrm_checkbox_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
          return $event;
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "hrm-checkbox", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "hrm-checkbox", 5);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275element(16, "sg-use", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "sg-do");
        \u0275\u0275element(22, "span", 9);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-do");
        \u0275\u0275element(25, "span", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-dont");
        \u0275\u0275element(28, "span", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 10)(31, "sg-example", 11);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 12)(36, "hrm-checkbox", 13);
        \u0275\u0275listener("ngModelChange", function SgDocCheckbox_Template_hrm_checkbox_ngModelChange_36_listener($event) {
          return ctx.toggleAll($event);
        });
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "div", 14);
        \u0275\u0275repeaterCreate(40, SgDocCheckbox_For_41_Template, 3, 4, "hrm-checkbox", 4, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-example", 11);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row")(46, "div", 15);
        \u0275\u0275repeaterCreate(47, SgDocCheckbox_For_48_Template, 6, 5, "div", 16, _forTrack0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 24, "docs.checkbox.title"))("desc", \u0275\u0275pipeBind1(2, 26, "docs.checkbox.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 28, "docs.checkbox.ovRow"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.agree);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 30, "docs.checkbox.checked"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 32, "docs.checkbox.unchecked"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", true)("ngModel", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 34, "docs.checkbox.locked"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(17, 36, "docs.checkbox.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(18, 38, "docs.checkbox.behavior"))("avoid", \u0275\u0275pipeBind1(19, 40, "docs.checkbox.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 42, "docs.checkbox.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 44, "docs.checkbox.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(29, 46, "docs.checkbox.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 48, "docs.checkbox.exAllT"))("desc", \u0275\u0275pipeBind1(33, 50, "docs.checkbox.exAllD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.allChecked())("indeterminate", ctx.someChecked());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 52, "docs.checkbox.selectAll"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.items());
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 54, "docs.checkbox.exEndT"))("desc", \u0275\u0275pipeBind1(44, 56, "docs.checkbox.exEndD"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.options());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmCheckbox, HrmBadge, HrmTag, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCheckbox, [{
    type: Component,
    args: [{
      selector: "sg-doc-checkbox",
      imports: [FormsModule, TranslateModule, HrmCheckbox, HrmBadge, HrmTag, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.checkbox.title' | translate" [desc]="'docs.checkbox.desc' | translate">

      <div sgOverview>
        <sg-row [label]="'docs.checkbox.ovRow' | translate">
          <hrm-checkbox [(ngModel)]="agree">{{ 'docs.checkbox.checked' | translate }}</hrm-checkbox>
          <hrm-checkbox [ngModel]="false">{{ 'docs.checkbox.unchecked' | translate }}</hrm-checkbox>
          <hrm-checkbox [disabled]="true" [ngModel]="true">{{ 'docs.checkbox.locked' | translate }}</hrm-checkbox>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.checkbox.purpose' | translate"
          [when]="when"
          [behavior]="'docs.checkbox.behavior' | translate"
          [avoid]="'docs.checkbox.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.checkbox.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.checkbox.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.checkbox.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.checkbox.exAllT' | translate"
          [desc]="'docs.checkbox.exAllD' | translate">
          <sg-row>
            <div style="display:flex;flex-direction:column;gap:10px">
              <hrm-checkbox
                [ngModel]="allChecked()"
                (ngModelChange)="toggleAll($event)"
                [indeterminate]="someChecked()">{{ 'docs.checkbox.selectAll' | translate }}</hrm-checkbox>
              <div style="height:1px;background:var(--border-soft);margin:2px 0"></div>
              @for (item of items(); track item.id) {
                <hrm-checkbox [ngModel]="item.checked" (ngModelChange)="setItem(item.id, $event)">{{ item.name | translate }}</hrm-checkbox>
              }
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.checkbox.exEndT' | translate"
          [desc]="'docs.checkbox.exEndD' | translate">
          <sg-row>
            <div style="display:flex;flex-direction:column;gap:12px;min-width:280px">
              @for (opt of options(); track opt.id) {
                <div style="display:flex;align-items:center;justify-content:space-between;gap:16px">
                  <hrm-checkbox [(ngModel)]="opt.checked">{{ opt.name | translate }}</hrm-checkbox>
                  @if (opt.tag) {
                    <hrm-tag [color]="opt.hue">{{ opt.tag | translate }}</hrm-tag>
                  } @else {
                    <hrm-badge [status]="opt.status" [text]="opt.price | translate" />
                  }
                </div>
              }
            </div>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCheckbox, { className: "SgDocCheckbox", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/checkbox.ts", lineNumber: 88 });
})();
export {
  SgDocCheckbox
};
//# sourceMappingURL=chunk-IVGHH3QA.js.map
