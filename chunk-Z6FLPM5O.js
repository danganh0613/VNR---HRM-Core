import {
  NzTooltipDirective,
  NzTooltipModule
} from "./chunk-NGY4ECW2.js";
import {
  HrmControl
} from "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import {
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW
} from "./chunk-PKUWSVS6.js";
import "./chunk-T7NAGNI6.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import {
  Platform
} from "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  arraysEqual,
  ensureNumberInRange,
  getElementOffset,
  getPercent,
  getPrecision,
  isNil,
  numberAttributeWithZeroFallback,
  silentEvent
} from "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  distinctUntilChanged,
  filter,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-slider.mjs
var _c0 = ["handle"];
var _c1 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.value;
function NzSliderMarksComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 1);
  }
  if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    \u0275\u0275styleMap(attr_r1.style);
    \u0275\u0275classProp("ant-slider-mark-active", attr_r1.active);
    \u0275\u0275domProperty("innerHTML", attr_r1.label, \u0275\u0275sanitizeHtml);
  }
}
function NzSliderStepComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 1);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275styleMap(step_r1.style);
    \u0275\u0275classProp("ant-slider-dot-active", step_r1.active);
  }
}
function NzSliderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-slider-step", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
function NzSliderComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-slider-handle", 4);
    \u0275\u0275listener("focusin", function NzSliderComponent_For_4_Template_nz_slider_handle_focusin_0_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onHandleFocusIn($index_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("vertical", ctx_r0.nzVertical)("reverse", ctx_r0.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r0.nzTipFormatter)("tooltipVisible", ctx_r0.nzTooltipVisible)("tooltipPlacement", ctx_r0.nzTooltipPlacement)("dragging", ctx_r0.dragging())("dir", ctx_r0.dir);
  }
}
function NzSliderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-slider-marks", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
var NzSliderHandleComponent = class _NzSliderHandleComponent {
  cdr = inject(ChangeDetectorRef);
  handleEl;
  tooltip;
  vertical;
  reverse;
  offset;
  value;
  tooltipVisible = "default";
  tooltipPlacement;
  tooltipFormatter;
  active = false;
  dir = "ltr";
  dragging;
  tooltipTitle;
  style = {};
  ngOnChanges(changes) {
    const {
      offset,
      value,
      active,
      tooltipVisible,
      reverse,
      dir
    } = changes;
    if (offset || reverse || dir) {
      this.updateStyle();
    }
    if (value) {
      this.updateTooltipTitle();
      this.updateTooltipPosition();
    }
    if (active) {
      if (active.currentValue) {
        this.toggleTooltip(true);
      } else {
        this.toggleTooltip(false);
      }
    }
    if (tooltipVisible?.currentValue === "always") {
      Promise.resolve().then(() => this.toggleTooltip(true, true));
    }
  }
  enterHandle = () => {
    if (!this.dragging) {
      this.toggleTooltip(true);
      this.updateTooltipPosition();
      this.cdr.detectChanges();
    }
  };
  leaveHandle = () => {
    if (!this.dragging) {
      this.toggleTooltip(false);
      this.cdr.detectChanges();
    }
  };
  focus() {
    this.handleEl?.nativeElement.focus();
  }
  toggleTooltip(show, force = false) {
    if (!force && (this.tooltipVisible !== "default" || !this.tooltip)) {
      return;
    }
    if (show) {
      this.tooltip?.show();
    } else {
      this.tooltip?.hide();
    }
  }
  updateTooltipTitle() {
    if (this.tooltipFormatter) {
      this.tooltipTitle = typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.tooltipFormatter;
    } else {
      this.tooltipTitle = `${this.value}`;
    }
  }
  updateTooltipPosition() {
    if (this.tooltip) {
      Promise.resolve().then(() => this.tooltip?.updatePosition());
    }
  }
  updateStyle() {
    if (this.vertical) {
      this.style = {
        [this.reverse ? "top" : "bottom"]: `${this.offset}%`,
        [this.reverse ? "bottom" : "top"]: "auto",
        transform: this.reverse ? null : `translateY(+50%)`
      };
    } else {
      this.style = __spreadProps(__spreadValues({}, this.getHorizontalStylePosition()), {
        transform: `translateX(${this.reverse ? this.dir === "rtl" ? "-" : "+" : this.dir === "rtl" ? "+" : "-"}50%)`
      });
    }
    this.cdr.markForCheck();
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? "auto" : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : "auto";
    if (this.dir === "rtl") {
      [left, right] = [right, left];
    }
    return {
      left,
      right
    };
  }
  static \u0275fac = function NzSliderHandleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderHandleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSliderHandleComponent,
    selectors: [["nz-slider-handle"]],
    viewQuery: function NzSliderHandleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(NzTooltipDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.handleEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tooltip = _t.first);
      }
    },
    hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() {
          return ctx.enterHandle();
        })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() {
          return ctx.leaveHandle();
        });
      }
    },
    inputs: {
      vertical: [2, "vertical", "vertical", booleanAttribute],
      reverse: [2, "reverse", "reverse", booleanAttribute],
      offset: [2, "offset", "offset", numberAttributeWithZeroFallback],
      value: [2, "value", "value", numberAttributeWithZeroFallback],
      tooltipVisible: "tooltipVisible",
      tooltipPlacement: "tooltipPlacement",
      tooltipFormatter: "tooltipFormatter",
      active: [2, "active", "active", booleanAttribute],
      dir: "dir",
      dragging: "dragging"
    },
    exportAs: ["nzSliderHandle"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 8,
    consts: [["handle", ""], ["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "nzTooltipTitle", "nzTooltipTitleContext", "nzTooltipTrigger", "nzTooltipPlacement"]],
    template: function NzSliderHandleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTitleContext", \u0275\u0275pureFunction1(6, _c1, ctx.value))("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
      }
    },
    dependencies: [NzTooltipModule, NzTooltipDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderHandleComponent, [{
    type: Component,
    args: [{
      selector: "nz-slider-handle",
      exportAs: "nzSliderHandle",
      template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [style]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTitleContext]="{ $implicit: value }"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
      host: {
        "(mouseenter)": "enterHandle()",
        "(mouseleave)": "leaveHandle()"
      },
      imports: [NzTooltipModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    handleEl: [{
      type: ViewChild,
      args: ["handle", {
        static: false
      }]
    }],
    tooltip: [{
      type: ViewChild,
      args: [NzTooltipDirective, {
        static: false
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    offset: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    tooltipVisible: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipFormatter: [{
      type: Input
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dir: [{
      type: Input
    }],
    dragging: [{
      type: Input
    }]
  });
})();
var NzSliderMarksComponent = class _NzSliderMarksComponent {
  lowerBound = null;
  upperBound = null;
  marksArray = [];
  min;
  max;
  vertical = false;
  included = false;
  reverse;
  marks = [];
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildMarks();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildMarks() {
    const range = this.max - this.min;
    this.marks = this.marksArray.map((mark) => {
      const {
        value,
        offset,
        config
      } = mark;
      const style = this.getMarkStyles(value, range, config);
      const label = isConfigObject(config) ? config.label : config;
      return {
        label,
        offset,
        style,
        value,
        config,
        active: false
      };
    });
  }
  getMarkStyles(value, range, config) {
    let style;
    const markValue = this.reverse ? this.max + this.min - value : value;
    if (this.vertical) {
      style = {
        marginBottom: "-50%",
        bottom: `${(markValue - this.min) / range * 100}%`
      };
    } else {
      style = {
        transform: `translate3d(-50%, 0, 0)`,
        left: `${(markValue - this.min) / range * 100}%`
      };
    }
    if (isConfigObject(config) && config.style) {
      style = __spreadValues(__spreadValues({}, style), config.style);
    }
    return style;
  }
  togglePointActive() {
    if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
      this.marks.forEach((mark) => {
        const value = mark.value;
        mark.active = this.included ? value <= this.upperBound && value >= this.lowerBound : value === this.upperBound;
      });
    }
  }
  static \u0275fac = function NzSliderMarksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderMarksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSliderMarksComponent,
    selectors: [["nz-slider-marks"]],
    hostAttrs: [1, "ant-slider-mark"],
    inputs: {
      lowerBound: "lowerBound",
      upperBound: "upperBound",
      marksArray: "marksArray",
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      vertical: [2, "vertical", "vertical", booleanAttribute],
      included: [2, "included", "included", booleanAttribute],
      reverse: [2, "reverse", "reverse", booleanAttribute]
    },
    exportAs: ["nzSliderMarks"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [[1, "ant-slider-mark-text", 3, "ant-slider-mark-active", "style", "innerHTML"], [1, "ant-slider-mark-text", 3, "innerHTML"]],
    template: function NzSliderMarksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, NzSliderMarksComponent_For_1_Template, 1, 5, "span", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.marks);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderMarksComponent, [{
    type: Component,
    args: [{
      selector: "nz-slider-marks",
      exportAs: "nzSliderMarks",
      template: `
    @for (attr of marks; track attr.value) {
      <span
        class="ant-slider-mark-text"
        [class.ant-slider-mark-active]="attr.active"
        [style]="attr.style"
        [innerHTML]="attr.label"
      ></span>
    }
  `,
      host: {
        class: "ant-slider-mark"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    lowerBound: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    marksArray: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function isConfigObject(config) {
  return typeof config !== "string";
}
var NzSliderStepComponent = class _NzSliderStepComponent {
  lowerBound = null;
  upperBound = null;
  marksArray = [];
  min;
  max;
  vertical = false;
  included = false;
  reverse;
  steps = [];
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildSteps();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildSteps() {
    const orient = this.vertical ? "bottom" : "left";
    this.steps = this.marksArray.map((mark) => {
      const {
        value,
        config
      } = mark;
      let offset = mark.offset;
      const range = this.max - this.min;
      if (this.reverse) {
        offset = (this.max - value) / range * 100;
      }
      return {
        value,
        offset,
        config,
        active: false,
        style: {
          [orient]: `${offset}%`,
          transform: this.vertical ? "translateY(50%)" : "translateX(-50%)"
        }
      };
    });
  }
  togglePointActive() {
    if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
      this.steps.forEach((step) => {
        const value = step.value;
        step.active = this.included ? value <= this.upperBound && value >= this.lowerBound : value === this.upperBound;
      });
    }
  }
  static \u0275fac = function NzSliderStepComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderStepComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSliderStepComponent,
    selectors: [["nz-slider-step"]],
    hostAttrs: [1, "ant-slider-step"],
    inputs: {
      lowerBound: "lowerBound",
      upperBound: "upperBound",
      marksArray: "marksArray",
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      vertical: [2, "vertical", "vertical", booleanAttribute],
      included: [2, "included", "included", booleanAttribute],
      reverse: [2, "reverse", "reverse", booleanAttribute]
    },
    exportAs: ["nzSliderStep"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [[1, "ant-slider-dot", 3, "ant-slider-dot-active", "style"], [1, "ant-slider-dot"]],
    template: function NzSliderStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, NzSliderStepComponent_For_1_Template, 1, 4, "span", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.steps);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderStepComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-slider-step",
      exportAs: "nzSliderStep",
      template: `
    @for (step of steps; track step.value) {
      <span class="ant-slider-dot" [class.ant-slider-dot-active]="step.active" [style]="step.style!"></span>
    }
  `,
      host: {
        class: "ant-slider-step"
      }
    }]
  }], null, {
    lowerBound: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    marksArray: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSliderTrackComponent = class _NzSliderTrackComponent {
  offset = 0;
  reverse = false;
  dir = "ltr";
  length = 0;
  vertical = false;
  included = false;
  style = {};
  ngOnChanges() {
    const visibility = this.included ? "visible" : "hidden";
    if (this.vertical) {
      this.style = {
        [this.reverse ? "top" : "bottom"]: `${this.offset}%`,
        [this.reverse ? "bottom" : "top"]: "auto",
        height: `${this.length}%`,
        visibility
      };
    } else {
      this.style = __spreadProps(__spreadValues({}, this.getHorizontalStylePosition()), {
        width: `${this.length}%`,
        visibility
      });
    }
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? "auto" : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : "auto";
    if (this.dir === "rtl") {
      [left, right] = [right, left];
    }
    return {
      left,
      right
    };
  }
  static \u0275fac = function NzSliderTrackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderTrackComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSliderTrackComponent,
    selectors: [["nz-slider-track"]],
    inputs: {
      offset: [2, "offset", "offset", numberAttribute],
      reverse: [2, "reverse", "reverse", booleanAttribute],
      dir: "dir",
      length: [2, "length", "length", numberAttribute],
      vertical: [2, "vertical", "vertical", booleanAttribute],
      included: [2, "included", "included", booleanAttribute]
    },
    exportAs: ["nzSliderTrack"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 1,
    vars: 2,
    consts: [[1, "ant-slider-track"]],
    template: function NzSliderTrackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderTrackComponent, [{
    type: Component,
    args: [{
      selector: "nz-slider-track",
      exportAs: "nzSliderTrack",
      template: `<div class="ant-slider-track" [style]="style"></div>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    offset: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dir: [{
      type: Input
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSliderComponent = class _NzSliderComponent {
  slider = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  platform = inject(Platform);
  directionality = inject(Directionality);
  handlerComponents;
  nzDisabled = false;
  nzDots = false;
  nzIncluded = true;
  nzRange = false;
  nzVertical = false;
  nzReverse = false;
  nzDefaultValue;
  nzMarks = null;
  nzMax = 100;
  nzMin = 0;
  nzStep = 1;
  nzTooltipVisible = "default";
  nzTooltipPlacement = "top";
  nzTipFormatter;
  nzOnAfterChange = new EventEmitter();
  value = null;
  cacheSliderStart = null;
  cacheSliderLength = null;
  activeValueIndex = void 0;
  // Current activated handle's index ONLY for range=true
  track = {
    offset: null,
    length: null
  };
  // Track's offset and length
  handles = [];
  // Handles' offset
  marksArray = null;
  // "steps" in array type with more data & FILTER out the invalid mark
  bounds = {
    lower: null,
    upper: null
  };
  // now for nz-slider-step
  dir = "ltr";
  dragging = signal(false, ...ngDevMode ? [{
    debugName: "dragging"
  }] : []);
  dragStart$;
  dragMove$;
  dragEnd$;
  dragStart_;
  dragMove_;
  dragEnd_;
  isNzDisableFirstChange = true;
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    });
    this.handles = generateHandlers(this.nzRange ? 2 : 1);
    this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    this.bindDraggingHandlers();
    this.toggleDragDisabled(this.nzDisabled);
    if (this.getValue() === null) {
      this.setValue(this.formatValue(null));
    }
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzMarks,
      nzRange
    } = changes;
    if (nzDisabled && !nzDisabled.firstChange) {
      this.toggleDragDisabled(nzDisabled.currentValue);
    } else if (nzMarks && !nzMarks.firstChange) {
      this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    } else if (nzRange && !nzRange.firstChange) {
      this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
      this.setValue(this.formatValue(null));
    }
  }
  writeValue(val) {
    this.setValue(val, true);
  }
  onValueChange(_value) {
  }
  onTouched() {
  }
  registerOnChange(fn) {
    this.onValueChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.toggleDragDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  /**
   * Event handler is only triggered when a slider handler is focused.
   */
  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }
    const code = e.keyCode;
    const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
    const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
    if (!(isIncrease || isDecrease)) {
      return;
    }
    e.preventDefault();
    const step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1) * (this.dir === "rtl" ? -1 : 1);
    const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
    this.setActiveValue(ensureNumberInRange(newVal, this.nzMin, this.nzMax));
    this.nzOnAfterChange.emit(this.getValue(true));
  }
  onHandleFocusIn(index) {
    this.activeValueIndex = index;
  }
  setValue(value, isWriteValue = false) {
    if (isWriteValue) {
      this.value = this.formatValue(value);
      this.updateTrackAndHandles();
    } else if (!valuesEqual(this.value, value)) {
      this.value = value;
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    }
  }
  getValue(cloneAndSort = false) {
    if (cloneAndSort && this.value && isValueRange(this.value)) {
      return [...this.value].sort((a, b) => a - b);
    }
    return this.value;
  }
  /**
   * Clone & sort current value and convert them to offsets, then return the new one.
   */
  getValueToOffset(value) {
    let normalizedValue = value;
    if (typeof normalizedValue === "undefined") {
      normalizedValue = this.getValue(true);
    }
    return isValueRange(normalizedValue) ? normalizedValue.map((val) => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
  }
  /**
   * Find the closest value to be activated.
   */
  setActiveValueIndex(pointerValue) {
    const value = this.getValue();
    if (isValueRange(value)) {
      let minimal = null;
      let gap;
      let activeIndex = -1;
      value.forEach((val, index) => {
        gap = Math.abs(pointerValue - val);
        if (minimal === null || gap < minimal) {
          minimal = gap;
          activeIndex = index;
        }
      });
      this.activeValueIndex = activeIndex;
      this.handlerComponents.toArray()[activeIndex].focus();
    } else {
      this.handlerComponents.toArray()[0].focus();
    }
  }
  setActiveValue(pointerValue) {
    if (isValueRange(this.value)) {
      const newValue = [...this.value];
      newValue[this.activeValueIndex] = pointerValue;
      this.setValue(newValue);
    } else {
      this.setValue(pointerValue);
    }
  }
  /**
   * Update track and handles' position and length.
   */
  updateTrackAndHandles() {
    const value = this.getValue();
    const offset = this.getValueToOffset(value);
    const valueSorted = this.getValue(true);
    const offsetSorted = this.getValueToOffset(valueSorted);
    const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
    const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
    this.handles.forEach((handle, index) => {
      handle.offset = isValueRange(offset) ? offset[index] : offset;
      handle.value = isValueRange(value) ? value[index] : value || 0;
    });
    [this.bounds.lower, this.bounds.upper] = boundParts;
    [this.track.offset, this.track.length] = trackParts;
    this.cdr.markForCheck();
  }
  onDragStart(value) {
    this.toggleDragMoving(true);
    this.cacheSliderProperty();
    this.setActiveValueIndex(this.getLogicalValue(value));
    this.setActiveValue(this.getLogicalValue(value));
    this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
  }
  onDragMove(value) {
    this.setActiveValue(this.getLogicalValue(value));
    this.cdr.markForCheck();
  }
  getLogicalValue(value) {
    if (this.nzReverse) {
      if (!this.nzVertical && this.dir === "rtl") {
        return value;
      }
      return this.nzMax - value + this.nzMin;
    }
    if (!this.nzVertical && this.dir === "rtl") {
      return this.nzMax - value + this.nzMin;
    }
    return value;
  }
  onDragEnd() {
    this.nzOnAfterChange.emit(this.getValue(true));
    this.toggleDragMoving(false);
    this.cacheSliderProperty(true);
    this.hideAllHandleTooltip();
    this.cdr.markForCheck();
  }
  /**
   * Create user interactions handles.
   */
  bindDraggingHandlers() {
    if (!this.platform.isBrowser) {
      return;
    }
    const pluckFunc = (keys) => (event) => keys.reduce((acc, key) => acc[key] || acc, event);
    const sliderDOM = this.slider.nativeElement;
    const orientField = this.nzVertical ? "pageY" : "pageX";
    const mouse = {
      start: "mousedown",
      move: "mousemove",
      end: "mouseup",
      pluckKey: [orientField]
    };
    const touch = {
      start: "touchstart",
      move: "touchmove",
      end: "touchend",
      pluckKey: ["touches", "0", orientField],
      filter: (e) => e instanceof TouchEvent
    };
    [mouse, touch].forEach((source) => {
      const {
        start,
        move,
        end,
        pluckKey,
        filter: filterFunc = () => true
      } = source;
      source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), map(pluckFunc(pluckKey)), map((position) => this.findClosestValue(position)));
      source.end$ = fromEvent(document, end);
      source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), map(pluckFunc(pluckKey)), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
    });
    this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = merge(mouse.end$, touch.end$);
  }
  subscribeDrag(periods = ["start", "move", "end"]) {
    if (periods.indexOf("start") !== -1 && this.dragStart$ && !this.dragStart_) {
      this.dragStart_ = this.dragStart$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onDragStart.bind(this));
    }
    if (periods.indexOf("move") !== -1 && this.dragMove$ && !this.dragMove_) {
      this.dragMove_ = this.dragMove$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onDragMove.bind(this));
    }
    if (periods.indexOf("end") !== -1 && this.dragEnd$ && !this.dragEnd_) {
      this.dragEnd_ = this.dragEnd$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.onDragEnd.bind(this));
    }
  }
  unsubscribeDrag(periods = ["start", "move", "end"]) {
    if (periods.includes("start")) {
      this.dragStart_?.unsubscribe();
      this.dragStart_ = null;
    }
    if (periods.includes("move")) {
      this.dragMove_?.unsubscribe();
      this.dragMove_ = null;
    }
    if (periods.includes("end")) {
      this.dragEnd_?.unsubscribe();
      this.dragEnd_ = null;
    }
  }
  toggleDragMoving(movable) {
    const periods = ["move", "end"];
    if (movable) {
      this.dragging.set(true);
      this.subscribeDrag(periods);
    } else {
      this.dragging.set(false);
      this.unsubscribeDrag(periods);
    }
  }
  toggleDragDisabled(disabled) {
    if (disabled) {
      this.unsubscribeDrag();
    } else {
      this.subscribeDrag(["start"]);
    }
  }
  findClosestValue(position) {
    const sliderStart = this.getSliderStartPosition();
    const sliderLength = this.getSliderLength();
    const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
    const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
    const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat).sort((a, b) => a - b);
    if (this.nzStep !== 0 && !this.nzDots) {
      const closestOne = Math.round(val / this.nzStep) * this.nzStep;
      points.push(closestOne);
    }
    const gaps = points.map((point) => Math.abs(val - point));
    const closest = points[gaps.indexOf(Math.min(...gaps))];
    return this.nzStep === 0 ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
  }
  valueToOffset(value) {
    return getPercent(this.nzMin, this.nzMax, value);
  }
  getSliderStartPosition() {
    if (this.cacheSliderStart !== null) {
      return this.cacheSliderStart;
    }
    const offset = getElementOffset(this.slider.nativeElement);
    return this.nzVertical ? offset.top : offset.left;
  }
  getSliderLength() {
    if (this.cacheSliderLength !== null) {
      return this.cacheSliderLength;
    }
    const sliderDOM = this.slider.nativeElement;
    return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
  }
  /**
   * Cache DOM layout/reflow operations for performance (may not necessary?)
   */
  cacheSliderProperty(remove = false) {
    this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
    this.cacheSliderLength = remove ? null : this.getSliderLength();
  }
  formatValue(value) {
    if (isNil(value)) {
      return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    } else if (assertValueValid(value, this.nzRange)) {
      return isValueRange(value) ? value.map((val) => ensureNumberInRange(val, this.nzMin, this.nzMax)) : ensureNumberInRange(value, this.nzMin, this.nzMax);
    } else {
      return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    }
  }
  /**
   * Show one handle's tooltip and hide others'.
   */
  showHandleTooltip(handleIndex = 0) {
    this.handles.forEach((handle, index) => handle.active = index === handleIndex);
  }
  hideAllHandleTooltip() {
    this.handles.forEach((handle) => handle.active = false);
  }
  generateMarkItems(marks) {
    const marksArray = [];
    for (const key in marks) {
      if (marks.hasOwnProperty(key)) {
        const mark = marks[key];
        const val = typeof key === "number" ? key : parseFloat(key);
        if (val >= this.nzMin && val <= this.nzMax) {
          marksArray.push({
            value: val,
            offset: this.valueToOffset(val),
            config: mark
          });
        }
      }
    }
    return marksArray.length ? marksArray : null;
  }
  static \u0275fac = function NzSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSliderComponent,
    selectors: [["nz-slider"]],
    viewQuery: function NzSliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(NzSliderHandleComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.handlerComponents = _t);
      }
    },
    hostAttrs: [1, "ant-slider"],
    hostVars: 8,
    hostBindings: function NzSliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
      }
    },
    inputs: {
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzDots: [2, "nzDots", "nzDots", booleanAttribute],
      nzIncluded: [2, "nzIncluded", "nzIncluded", booleanAttribute],
      nzRange: [2, "nzRange", "nzRange", booleanAttribute],
      nzVertical: [2, "nzVertical", "nzVertical", booleanAttribute],
      nzReverse: [2, "nzReverse", "nzReverse", booleanAttribute],
      nzDefaultValue: "nzDefaultValue",
      nzMarks: "nzMarks",
      nzMax: [2, "nzMax", "nzMax", numberAttribute],
      nzMin: [2, "nzMin", "nzMin", numberAttribute],
      nzStep: [2, "nzStep", "nzStep", numberAttributeWithZeroFallback],
      nzTooltipVisible: "nzTooltipVisible",
      nzTooltipPlacement: "nzTooltipPlacement",
      nzTipFormatter: "nzTipFormatter"
    },
    outputs: {
      nzOnAfterChange: "nzOnAfterChange"
    },
    exportAs: ["nzSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzSliderComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 8,
    consts: [[1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dragging", "dir"], [3, "focusin", "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dragging", "dir"]],
    template: function NzSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0)(1, "nz-slider-track", 1);
        \u0275\u0275conditionalCreate(2, NzSliderComponent_Conditional_2_Template, 1, 8, "nz-slider-step", 2);
        \u0275\u0275repeaterCreate(3, NzSliderComponent_For_4_Template, 1, 10, "nz-slider-handle", 3, _forTrack0);
        \u0275\u0275conditionalCreate(5, NzSliderComponent_Conditional_5_Template, 1, 8, "nz-slider-marks", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse)("dir", ctx.dir);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.marksArray ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.handles);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.marksArray ? 5 : -1);
      }
    },
    dependencies: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-slider",
      exportAs: "nzSlider",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSliderComponent),
        multi: true
      }],
      template: `
    <div class="ant-slider-rail"></div>
    <nz-slider-track
      [vertical]="nzVertical"
      [included]="nzIncluded"
      [offset]="track.offset!"
      [length]="track.length!"
      [reverse]="nzReverse"
      [dir]="dir"
    />
    @if (marksArray) {
      <nz-slider-step
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      />
    }
    @for (handle of handles; track handle.value) {
      <nz-slider-handle
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
        [dragging]="dragging()"
        [dir]="dir"
        (focusin)="onHandleFocusIn($index)"
      />
    }
    @if (marksArray) {
      <nz-slider-marks
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      />
    }
  `,
      imports: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
      host: {
        class: "ant-slider",
        "[class.ant-slider-rtl]": `dir === 'rtl'`,
        "[class.ant-slider-disabled]": "nzDisabled",
        "[class.ant-slider-vertical]": "nzVertical",
        "[class.ant-slider-with-marks]": "marksArray",
        "(keydown)": "onKeyDown($event)"
      }
    }]
  }], null, {
    handlerComponents: [{
      type: ViewChildren,
      args: [NzSliderHandleComponent]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDots: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIncluded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzReverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultValue: [{
      type: Input
    }],
    nzMarks: [{
      type: Input
    }],
    nzMax: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMin: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStep: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzTooltipVisible: [{
      type: Input
    }],
    nzTooltipPlacement: [{
      type: Input
    }],
    nzTipFormatter: [{
      type: Input
    }],
    nzOnAfterChange: [{
      type: Output
    }]
  });
})();
function getValueTypeNotMatchError() {
  return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
  if (value instanceof Array) {
    return value.length === 2;
  } else {
    return false;
  }
}
function generateHandlers(amount) {
  return Array(amount).fill(0).map(() => ({
    offset: null,
    value: null,
    active: false
  }));
}
function assertValueValid(value, isRange) {
  if (!isValueRange(value) && isNaN(value) || isValueRange(value) && value.some((v) => isNaN(v))) {
    return false;
  }
  return assertValueTypeMatch(value, isRange);
}
function assertValueTypeMatch(value, isRange = false) {
  if (isValueRange(value) !== isRange) {
    throw getValueTypeNotMatchError();
  }
  return true;
}
function valuesEqual(valA, valB) {
  if (typeof valA !== typeof valB) {
    return false;
  }
  return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}
var NzSliderModule = class _NzSliderModule {
  static \u0275fac = function NzSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzSliderModule,
    imports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
    exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSliderComponent, NzSliderHandleComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderModule, [{
    type: NgModule,
    args: [{
      imports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
      exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-entry/hrm-slider.ts
var HrmSlider = class _HrmSlider extends HrmControl {
  constructor() {
    super(...arguments);
    this.min = input(0, ...ngDevMode ? [{ debugName: "min" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(100, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.step = input(1, ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.range = input(false, ...ngDevMode ? [{ debugName: "range" }] : (
      /* istanbul ignore next */
      []
    ));
    this.marks = input(null, ...ngDevMode ? [{ debugName: "marks" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dots = input(false, ...ngDevMode ? [{ debugName: "dots" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmSlider_BaseFactory;
      return function HrmSlider_Factory(__ngFactoryType__) {
        return (\u0275HrmSlider_BaseFactory || (\u0275HrmSlider_BaseFactory = \u0275\u0275getInheritedFactory(_HrmSlider)))(__ngFactoryType__ || _HrmSlider);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSlider, selectors: [["hrm-slider"]], hostAttrs: [1, "hrm-slider"], inputs: { min: [1, "min"], max: [1, "max"], step: [1, "step"], range: [1, "range"], marks: [1, "marks"], dots: [1, "dots"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmSlider), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 8, consts: [[3, "ngModelChange", "ngModel", "nzMin", "nzMax", "nzStep", "nzRange", "nzMarks", "nzDots", "nzDisabled"]], template: function HrmSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-slider", 0);
        \u0275\u0275listener("ngModelChange", function HrmSlider_Template_nz_slider_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzMin", ctx.min())("nzMax", ctx.max())("nzStep", ctx.step())("nzRange", ctx.range())("nzMarks", ctx.marks())("nzDots", ctx.dots())("nzDisabled", ctx.disabled());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzSliderModule, NzSliderComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSlider, [{
    type: Component,
    args: [{
      selector: "hrm-slider",
      imports: [FormsModule, NzSliderModule],
      template: `
    <nz-slider
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzMin]="min()"
      [nzMax]="max()"
      [nzStep]="step()"
      [nzRange]="range()"
      [nzMarks]="marks()"
      [nzDots]="dots()"
      [nzDisabled]="disabled()"></nz-slider>
  `,
      host: { class: "hrm-slider" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmSlider), multi: true }]
    }]
  }], null, { min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], marks: [{ type: Input, args: [{ isSignal: true, alias: "marks", required: false }] }], dots: [{ type: Input, args: [{ isSignal: true, alias: "dots", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSlider, { className: "HrmSlider", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-slider.ts", lineNumber: 25 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/slider.ts
var SgDocSlider = class _SgDocSlider {
  constructor() {
    this.t = inject(TranslateService);
    this.basic = 40;
    this.salary = [12, 25];
    this.age = [24, 35];
    this.salaryMark = 20;
    this.rating = 3;
    this.ratingMarks = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" };
    this.when = [
      "docs.slider.when1",
      "docs.slider.when2",
      "docs.slider.when3"
    ];
  }
  get salaryMarks() {
    const m = this.t.instant("docs.slider.markMillion");
    return { 0: "0", 10: `10${m}`, 20: `20${m}`, 30: `30${m}`, 40: `40${m}` };
  }
  static {
    this.\u0275fac = function SgDocSlider_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSlider)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSlider, selectors: [["sg-doc-slider"]], decls: 59, vars: 90, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "360px"], [3, "ngModelChange", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "340px"], [3, "label"], [3, "ngModelChange", "ngModel", "range", "min", "max", "step"], [3, "ngModelChange", "ngModel", "min", "max", "step", "marks"], [3, "ngModelChange", "ngModel", "min", "max", "step", "dots", "marks"]], template: function SgDocSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-slider", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basic, $event) || (ctx.basic = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275element(13, "span", 7);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275element(16, "span", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275element(22, "span", 7);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275element(25, "span", 7);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "sg-example", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 10)(33, "hrm-slider", 3);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.basic, $event) || (ctx.basic = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "sg-example", 9);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row", 11);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "div", 10)(40, "hrm-slider", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_40_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.salary, $event) || (ctx.salary = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "sg-row", 11);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "div", 10)(44, "hrm-slider", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.age, $event) || (ctx.age = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "sg-example", 9);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row", 11);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "div", 10)(51, "hrm-slider", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.salaryMark, $event) || (ctx.salaryMark = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "sg-example", 9);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "sg-row", 11);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "div", 10)(58, "hrm-slider", 14);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocSlider_Template_hrm_slider_ngModelChange_58_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.rating, $event) || (ctx.rating = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 46, "docs.slider.title"))("desc", \u0275\u0275pipeBind1(2, 48, "docs.slider.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.basic);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 50, "docs.slider.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 52, "docs.slider.behavior"))("avoid", \u0275\u0275pipeBind1(10, 54, "docs.slider.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(14, 56, "docs.slider.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 58, "docs.slider.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 60, "docs.slider.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 62, "docs.slider.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 64, "docs.slider.dont2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 66, "docs.slider.exBasicT"))("desc", \u0275\u0275pipeBind1(30, 68, "docs.slider.exBasicD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.basic);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 70, "docs.slider.exRangeT"))("desc", \u0275\u0275pipeBind1(36, 72, "docs.slider.exRangeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(38, 74, "docs.slider.rowSalary"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.salary);
        \u0275\u0275property("range", true)("min", 5)("max", 50)("step", 1);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 76, "docs.slider.rowAge"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.age);
        \u0275\u0275property("range", true)("min", 18)("max", 60)("step", 1);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 78, "docs.slider.exMarksT"))("desc", \u0275\u0275pipeBind1(47, 80, "docs.slider.exMarksD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 82, "docs.slider.rowSalaryMark"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.salaryMark);
        \u0275\u0275property("min", 0)("max", 40)("step", 5)("marks", ctx.salaryMarks);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(53, 84, "docs.slider.exStepT"))("desc", \u0275\u0275pipeBind1(54, 86, "docs.slider.exStepD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 88, "docs.slider.rowRating"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.rating);
        \u0275\u0275property("min", 1)("max", 5)("step", 1)("dots", true)("marks", ctx.ratingMarks);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmSlider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSlider, [{
    type: Component,
    args: [{
      selector: "sg-doc-slider",
      imports: [FormsModule, TranslateModule, HrmSlider, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.slider.title' | translate" [desc]="'docs.slider.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:360px">
          <hrm-slider [(ngModel)]="basic" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.slider.purpose' | translate"
          [when]="when"
          [behavior]="'docs.slider.behavior' | translate"
          [avoid]="'docs.slider.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.slider.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.slider.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.slider.do3' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.slider.dont1' | translate"></span></sg-dont>
        <sg-dont><span [innerHTML]="'docs.slider.dont2' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.slider.exBasicT' | translate"
          [desc]="'docs.slider.exBasicD' | translate">
          <sg-row>
            <div style="width:100%;max-width:340px"><hrm-slider [(ngModel)]="basic" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.slider.exRangeT' | translate"
          [desc]="'docs.slider.exRangeD' | translate">
          <sg-row [label]="'docs.slider.rowSalary' | translate">
            <div style="width:100%;max-width:340px"><hrm-slider [(ngModel)]="salary" [range]="true" [min]="5" [max]="50" [step]="1" /></div>
          </sg-row>
          <sg-row [label]="'docs.slider.rowAge' | translate">
            <div style="width:100%;max-width:340px"><hrm-slider [(ngModel)]="age" [range]="true" [min]="18" [max]="60" [step]="1" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.slider.exMarksT' | translate"
          [desc]="'docs.slider.exMarksD' | translate">
          <sg-row [label]="'docs.slider.rowSalaryMark' | translate">
            <div style="width:100%;max-width:340px"><hrm-slider [(ngModel)]="salaryMark" [min]="0" [max]="40" [step]="5" [marks]="salaryMarks" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.slider.exStepT' | translate"
          [desc]="'docs.slider.exStepD' | translate">
          <sg-row [label]="'docs.slider.rowRating' | translate">
            <div style="width:100%;max-width:340px"><hrm-slider [(ngModel)]="rating" [min]="1" [max]="5" [step]="1" [dots]="true" [marks]="ratingMarks" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSlider, { className: "SgDocSlider", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/slider.ts", lineNumber: 73 });
})();
export {
  SgDocSlider
};
//# sourceMappingURL=chunk-Z6FLPM5O.js.map
