import {
  HrmButtonGroup
} from "./chunk-C3KJDM54.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-IMWVUFP6.js";
import {
  NzWaveDirective
} from "./chunk-ICAAXTRA.js";
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
import "./chunk-D2BVEXVI.js";
import {
  Bold,
  Columns,
  Italic,
  LayoutGrid,
  List,
  Star,
  StarFilled,
  TablerIconComponent,
  Underline
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  model,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/general/hrm-toggle-button.ts
var _c0 = ["*"];
var HrmToggleButton = class _HrmToggleButton {
  constructor() {
    this.pressed = model(false, ...ngDevMode ? [{ debugName: "pressed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.iconOnly = input(false, ...ngDevMode ? [{ debugName: "iconOnly" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ariaLabel = input("", ...ngDevMode ? [{ debugName: "ariaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nzSize = computed(() => this.size() === "sm" ? "small" : this.size() === "lg" ? "large" : "default", ...ngDevMode ? [{ debugName: "nzSize" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  toggle() {
    if (!this.disabled())
      this.pressed.update((v) => !v);
  }
  static {
    this.\u0275fac = function HrmToggleButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmToggleButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmToggleButton, selectors: [["hrm-toggle-button"]], hostAttrs: [1, "hrm-toggle-button"], inputs: { pressed: [1, "pressed"], size: [1, "size"], disabled: [1, "disabled"], iconOnly: [1, "iconOnly"], ariaLabel: [1, "ariaLabel"] }, outputs: { pressed: "pressedChange" }, ngContentSelectors: _c0, decls: 2, vars: 7, consts: [["nz-button", "", 3, "click", "nzType", "nzSize", "disabled"]], template: function HrmToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function HrmToggleButton_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("hrm-btn-icon-only", ctx.iconOnly());
        \u0275\u0275property("nzType", ctx.pressed() ? "primary" : "default")("nzSize", ctx.nzSize())("disabled", ctx.disabled());
        \u0275\u0275attribute("aria-pressed", ctx.pressed())("aria-label", ctx.ariaLabel() || null);
      }
    }, dependencies: [NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmToggleButton, [{
    type: Component,
    args: [{
      selector: "hrm-toggle-button",
      imports: [NzButtonModule],
      template: `
    <button
      nz-button
      [nzType]="pressed() ? 'primary' : 'default'"
      [nzSize]="nzSize()"
      [disabled]="disabled()"
      [class.hrm-btn-icon-only]="iconOnly()"
      [attr.aria-pressed]="pressed()"
      [attr.aria-label]="ariaLabel() || null"
      (click)="toggle()">
      <ng-content />
    </button>
  `,
      host: { class: "hrm-toggle-button" }
    }]
  }], null, { pressed: [{ type: Input, args: [{ isSignal: true, alias: "pressed", required: false }] }, { type: Output, args: ["pressedChange"] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], iconOnly: [{ type: Input, args: [{ isSignal: true, alias: "iconOnly", required: false }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmToggleButton, { className: "HrmToggleButton", filePath: "libs/hrm-ui/src/lib/general/hrm-toggle-button.ts", lineNumber: 26 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/general/toggle-button.ts
function SgDocToggleButton_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.starFilled)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "docs.toggleButton.saved"), " ");
  }
}
function SgDocToggleButton_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.star)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "docs.toggleButton.save"), " ");
  }
}
var SgDocToggleButton = class _SgDocToggleButton {
  constructor() {
    this.grid = LayoutGrid;
    this.list = List;
    this.columns = Columns;
    this.boldIc = Bold;
    this.italicIc = Italic;
    this.underlineIc = Underline;
    this.star = Star;
    this.starFilled = StarFilled;
    this.notify = signal(true, ...ngDevMode ? [{ debugName: "notify" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pinned = signal(false, ...ngDevMode ? [{ debugName: "pinned" }] : (
      /* istanbul ignore next */
      []
    ));
    this.compact = signal(false, ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = signal("grid", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bold = signal(true, ...ngDevMode ? [{ debugName: "bold" }] : (
      /* istanbul ignore next */
      []
    ));
    this.italic = signal(false, ...ngDevMode ? [{ debugName: "italic" }] : (
      /* istanbul ignore next */
      []
    ));
    this.underline = signal(false, ...ngDevMode ? [{ debugName: "underline" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fav = signal(false, ...ngDevMode ? [{ debugName: "fav" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.toggleButton.when1",
      "docs.toggleButton.when2",
      "docs.toggleButton.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocToggleButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocToggleButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocToggleButton, selectors: [["sg-doc-toggle-button"]], decls: 73, vars: 115, consts: [["category", "Action", 3, "title", "desc"], ["sgOverview", ""], [3, "pressedChange", "pressed"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "pressedChange", "iconOnly", "ariaLabel", "pressed"], [3, "icon", "size"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "align-self", "center"], [3, "pressedChange", "pressed", "ariaLabel"]], template: function SgDocToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-toggle-button", 2);
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.notify, $event) || (ctx.notify = $event);
          return $event;
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275element(9, "sg-use", 4);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5)(14, "sg-do");
        \u0275\u0275element(15, "span", 6);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275element(18, "span", 6);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-dont");
        \u0275\u0275element(21, "span", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 7)(24, "sg-example", 8);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "sg-row")(28, "hrm-toggle-button", 2);
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pinned, $event) || (ctx.pinned = $event);
          return $event;
        });
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "hrm-toggle-button", 2);
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.compact, $event) || (ctx.compact = $event);
          return $event;
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row")(38, "hrm-button-group")(39, "hrm-toggle-button", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275listener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_39_listener() {
          return ctx.view.set("grid");
        });
        \u0275\u0275element(41, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "hrm-toggle-button", 9);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275listener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_42_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275element(44, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "hrm-toggle-button", 9);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275listener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_45_listener() {
          return ctx.view.set("columns");
        });
        \u0275\u0275element(47, "tabler-icon", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "span", 11);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "sg-example", 8);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "sg-row")(55, "hrm-button-group")(56, "hrm-toggle-button", 9);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_56_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.bold, $event) || (ctx.bold = $event);
          return $event;
        });
        \u0275\u0275element(58, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "hrm-toggle-button", 9);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.italic, $event) || (ctx.italic = $event);
          return $event;
        });
        \u0275\u0275element(61, "tabler-icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "hrm-toggle-button", 9);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_62_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.underline, $event) || (ctx.underline = $event);
          return $event;
        });
        \u0275\u0275element(64, "tabler-icon", 10);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(65, "sg-example", 8);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementStart(68, "sg-row")(69, "hrm-toggle-button", 12);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275twoWayListener("pressedChange", function SgDocToggleButton_Template_hrm_toggle_button_pressedChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.fav, $event) || (ctx.fav = $event);
          return $event;
        });
        \u0275\u0275conditionalCreate(71, SgDocToggleButton_Conditional_71_Template, 3, 5)(72, SgDocToggleButton_Conditional_72_Template, 3, 5);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 59, "docs.toggleButton.title"))("desc", \u0275\u0275pipeBind1(2, 61, "docs.toggleButton.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("pressed", ctx.notify);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 63, "docs.toggleButton.notifyLabel"), " ", \u0275\u0275pipeBind1(7, 65, ctx.notify() ? "docs.toggleButton.on" : "docs.toggleButton.off"));
        \u0275\u0275advance(4);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 67, "docs.toggleButton.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 69, "docs.toggleButton.behavior"))("avoid", \u0275\u0275pipeBind1(12, 71, "docs.toggleButton.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 73, "docs.toggleButton.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(19, 75, "docs.toggleButton.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 77, "docs.toggleButton.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 79, "docs.toggleButton.exBasicT"))("desc", \u0275\u0275pipeBind1(26, 81, "docs.toggleButton.exBasicD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("pressed", ctx.pinned);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 83, "docs.toggleButton.pinTop"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("pressed", ctx.compact);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 85, "docs.toggleButton.compactView"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 87, "docs.toggleButton.exSingleT"))("desc", \u0275\u0275pipeBind1(36, 89, "docs.toggleButton.exSingleD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(40, 91, "docs.toggleButton.ariaGrid"))("pressed", ctx.view() === "grid");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.grid)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(43, 93, "docs.toggleButton.ariaList"))("pressed", ctx.view() === "list");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.list)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(46, 95, "docs.toggleButton.ariaColumns"))("pressed", ctx.view() === "columns");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.columns)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(50, 97, "docs.toggleButton.viewing"), " ", ctx.view());
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(52, 99, "docs.toggleButton.exMultiT"))("desc", \u0275\u0275pipeBind1(53, 101, "docs.toggleButton.exMultiD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(57, 103, "docs.toggleButton.ariaBold"));
        \u0275\u0275twoWayProperty("pressed", ctx.bold);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.boldIc)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(60, 105, "docs.toggleButton.ariaItalic"));
        \u0275\u0275twoWayProperty("pressed", ctx.italic);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.italicIc)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(63, 107, "docs.toggleButton.ariaUnderline"));
        \u0275\u0275twoWayProperty("pressed", ctx.underline);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.underlineIc)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(66, 109, "docs.toggleButton.exIconT"))("desc", \u0275\u0275pipeBind1(67, 111, "docs.toggleButton.exIconD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("pressed", ctx.fav);
        \u0275\u0275property("ariaLabel", \u0275\u0275pipeBind1(70, 113, "docs.toggleButton.ariaFav"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.fav() ? 71 : 72);
      }
    }, dependencies: [TablerIconComponent, TranslateModule, HrmToggleButton, HrmButtonGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocToggleButton, [{
    type: Component,
    args: [{
      selector: "sg-doc-toggle-button",
      imports: [TablerIconComponent, TranslateModule, HrmToggleButton, HrmButtonGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Action" [title]="'docs.toggleButton.title' | translate" [desc]="'docs.toggleButton.desc' | translate">

      <div sgOverview>
        <hrm-toggle-button [(pressed)]="notify">{{ 'docs.toggleButton.notifyLabel' | translate }} {{ (notify() ? 'docs.toggleButton.on' : 'docs.toggleButton.off') | translate }}</hrm-toggle-button>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.toggleButton.purpose' | translate" [when]="when"
          [behavior]="'docs.toggleButton.behavior' | translate"
          [avoid]="'docs.toggleButton.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.toggleButton.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.toggleButton.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.toggleButton.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.toggleButton.exBasicT' | translate"
          [desc]="'docs.toggleButton.exBasicD' | translate">
          <sg-row>
            <hrm-toggle-button [(pressed)]="pinned">{{ 'docs.toggleButton.pinTop' | translate }}</hrm-toggle-button>
            <hrm-toggle-button [(pressed)]="compact">{{ 'docs.toggleButton.compactView' | translate }}</hrm-toggle-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.toggleButton.exSingleT' | translate"
          [desc]="'docs.toggleButton.exSingleD' | translate">
          <sg-row>
            <hrm-button-group>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaGrid' | translate" [pressed]="view()==='grid'" (pressedChange)="view.set('grid')"><tabler-icon [icon]="grid" [size]="18" /></hrm-toggle-button>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaList' | translate" [pressed]="view()==='list'" (pressedChange)="view.set('list')"><tabler-icon [icon]="list" [size]="18" /></hrm-toggle-button>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaColumns' | translate" [pressed]="view()==='columns'" (pressedChange)="view.set('columns')"><tabler-icon [icon]="columns" [size]="18" /></hrm-toggle-button>
            </hrm-button-group>
            <span style="font-size: var(--fs-13);color:var(--text-sub);align-self:center">{{ 'docs.toggleButton.viewing' | translate }} {{ view() }}</span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.toggleButton.exMultiT' | translate"
          [desc]="'docs.toggleButton.exMultiD' | translate">
          <sg-row>
            <hrm-button-group>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaBold' | translate" [(pressed)]="bold"><tabler-icon [icon]="boldIc" [size]="18" /></hrm-toggle-button>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaItalic' | translate" [(pressed)]="italic"><tabler-icon [icon]="italicIc" [size]="18" /></hrm-toggle-button>
              <hrm-toggle-button [iconOnly]="true" [ariaLabel]="'docs.toggleButton.ariaUnderline' | translate" [(pressed)]="underline"><tabler-icon [icon]="underlineIc" [size]="18" /></hrm-toggle-button>
            </hrm-button-group>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.toggleButton.exIconT' | translate"
          [desc]="'docs.toggleButton.exIconD' | translate">
          <sg-row>
            <hrm-toggle-button [(pressed)]="fav" [ariaLabel]="'docs.toggleButton.ariaFav' | translate">
              @if (fav()) { <tabler-icon [icon]="starFilled" [size]="18" /> {{ 'docs.toggleButton.saved' | translate }} }
              @else { <tabler-icon [icon]="star" [size]="18" /> {{ 'docs.toggleButton.save' | translate }} }
            </hrm-toggle-button>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocToggleButton, { className: "SgDocToggleButton", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/general/toggle-button.ts", lineNumber: 79 });
})();
export {
  SgDocToggleButton
};
//# sourceMappingURL=chunk-VCKZPDVG.js.map
