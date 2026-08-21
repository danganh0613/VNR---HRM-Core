import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LHDJXUQP.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  isPresetColor,
  isStatusColor,
  presetColors,
  statusColors
} from "./chunk-BWIWCH2F.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
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
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
var _c0 = ["*"];
function NzTagComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-icon", 1);
    \u0275\u0275listener("click", function NzTagComponent_Conditional_1_Template_nz_icon_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeTag($event));
    });
    \u0275\u0275elementEnd();
  }
}
var NzTagComponent = class _NzTagComponent {
  cdr = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  el = inject(ElementRef).nativeElement;
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  nzMode = "default";
  nzColor;
  nzChecked = false;
  nzBordered = true;
  nzOnClose = new EventEmitter();
  nzCheckedChange = new EventEmitter();
  dir = "ltr";
  isPresetColor = false;
  updateCheckedStatus() {
    if (this.nzMode === "checkable") {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.el), this.el);
    }
  }
  clearPresetColor() {
    const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
    const classname = this.el.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    this.el.classList.remove(...matches);
  }
  setPresetColor() {
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
    }
    if (this.isPresetColor) {
      this.el.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  static \u0275fac = function NzTagComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTagComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTagComponent,
    selectors: [["nz-tag"]],
    hostAttrs: [1, "ant-tag"],
    hostVars: 12,
    hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzTagComponent_click_HostBindingHandler() {
          return ctx.updateCheckedStatus();
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        \u0275\u0275classProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl")("ant-tag-borderless", !ctx.nzBordered);
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzColor: "nzColor",
      nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
      nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute]
    },
    outputs: {
      nzOnClose: "nzOnClose",
      nzCheckedChange: "nzCheckedChange"
    },
    exportAs: ["nzTag"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon"], ["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
    template: function NzTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, NzTagComponent_Conditional_1_Template, 1, 0, "nz-icon", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzMode === "closeable" ? 1 : -1);
      }
    },
    dependencies: [NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
    type: Component,
    args: [{
      selector: "nz-tag",
      exportAs: "nzTag",
      template: `
    <ng-content />
    @if (nzMode === 'closeable') {
      <nz-icon nzType="close" class="ant-tag-close-icon" tabindex="-1" (click)="closeTag($event)" />
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-tag",
        "[style.background-color]": `isPresetColor ? '' : nzColor`,
        "[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
        "[class.ant-tag-checkable]": `nzMode === 'checkable'`,
        "[class.ant-tag-checkable-checked]": `nzChecked`,
        "[class.ant-tag-rtl]": `dir === 'rtl'`,
        "[class.ant-tag-borderless]": `!nzBordered`,
        "(click)": "updateCheckedStatus()"
      },
      imports: [NzIconModule]
    }]
  }], null, {
    nzMode: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnClose: [{
      type: Output
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var NzTagModule = class _NzTagModule {
  static \u0275fac = function NzTagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTagModule,
    imports: [NzTagComponent],
    exports: [NzTagComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTagComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
    type: NgModule,
    args: [{
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-tag.ts
var _c02 = ["*"];
function HrmTag_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
}
var HRM_TAG_HUES = ["gray", "blue", "cyan", "green", "yellow", "orange", "red", "pink", "purple", "teal"];
var HUE_SET = new Set(HRM_TAG_HUES);
var HrmTag = class _HrmTag {
  constructor() {
    this.color = input("default", ...ngDevMode ? [{ debugName: "color" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("light", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dot = input(false, ...ngDevMode ? [{ debugName: "dot" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closeable = input(false, ...ngDevMode ? [{ debugName: "closeable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closed = output();
    this.hue = computed(() => HUE_SET.has(this.color()) ? this.color() : null, ...ngDevMode ? [{ debugName: "hue" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nzColor = computed(() => HUE_SET.has(this.color()) ? "default" : this.color(), ...ngDevMode ? [{ debugName: "nzColor" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTag_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTag)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTag, selectors: [["hrm-tag"]], hostAttrs: [1, "hrm-tag"], hostVars: 3, hostBindings: function HrmTag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-hue", ctx.hue())("data-variant", ctx.hue() ? ctx.variant() : null)("data-size", ctx.size());
      }
    }, inputs: { color: [1, "color"], variant: [1, "variant"], size: [1, "size"], dot: [1, "dot"], closeable: [1, "closeable"] }, outputs: { closed: "closed" }, ngContentSelectors: _c02, decls: 3, vars: 3, consts: [[3, "nzOnClose", "nzColor", "nzMode"], [1, "hrm-tag-dot"]], template: function HrmTag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-tag", 0);
        \u0275\u0275listener("nzOnClose", function HrmTag_Template_nz_tag_nzOnClose_0_listener() {
          return ctx.closed.emit();
        });
        \u0275\u0275conditionalCreate(1, HrmTag_Conditional_1_Template, 1, 0, "span", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzColor", ctx.nzColor())("nzMode", ctx.closeable() ? "closeable" : "default");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.dot() ? 1 : -1);
      }
    }, dependencies: [NzTagModule, NzTagComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTag, [{
    type: Component,
    args: [{
      selector: "hrm-tag",
      imports: [NzTagModule],
      template: `
    <nz-tag
      [nzColor]="nzColor()"
      [nzMode]="closeable() ? 'closeable' : 'default'"
      (nzOnClose)="closed.emit()">
      @if (dot()) { <span class="hrm-tag-dot"></span> }
      <ng-content />
    </nz-tag>
  `,
      host: {
        class: "hrm-tag",
        "[attr.data-hue]": "hue()",
        "[attr.data-variant]": "hue() ? variant() : null",
        "[attr.data-size]": "size()"
      }
    }]
  }], null, { color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], dot: [{ type: Input, args: [{ isSignal: true, alias: "dot", required: false }] }], closeable: [{ type: Input, args: [{ isSignal: true, alias: "closeable", required: false }] }], closed: [{ type: Output, args: ["closed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTag, { className: "HrmTag", filePath: "libs/hrm-ui/src/lib/data-display/hrm-tag.ts", lineNumber: 39 });
})();

export {
  HRM_TAG_HUES,
  HrmTag
};
//# sourceMappingURL=chunk-5U2K2VEK.js.map
