import {
  isAnimationEnabled,
  withAnimationCheck
} from "./chunk-7NOIAAII.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import {
  _IdGenerator
} from "./chunk-DWLT6DTW.js";
import {
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW
} from "./chunk-PKUWSVS6.js";
import {
  requestAnimationFrame
} from "./chunk-LQM5UC6B.js";
import {
  NzOutletModule
} from "./chunk-NXJVNWYP.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LHDJXUQP.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  WithConfig
} from "./chunk-BWIWCH2F.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-F2S6JWCU.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ReplaySubject,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChildren,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-segmented.mjs
var _c0 = ["content"];
var _c1 = ["nz-segmented-item", ""];
var _c2 = ["*"];
function NzSegmentedItemComponent_Conditional_2_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NzSegmentedItemComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, NzSegmentedItemComponent_Conditional_2_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const content_r1 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", content_r1);
  }
}
function NzSegmentedItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275element(1, "nz-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, NzSegmentedItemComponent_Conditional_2_Conditional_2_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzType", ctx);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasLabel() ? 2 : -1);
  }
}
function NzSegmentedItemComponent_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzSegmentedItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSegmentedItemComponent_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const content_r1 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", content_r1);
  }
}
function NzSegmentedItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _forTrack0 = ($index, $item) => $item.value;
function NzSegmentedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275animateEnter(function NzSegmentedComponent_Conditional_1_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.thumbAnimationEnter());
    });
    \u0275\u0275listener("transitionend", function NzSegmentedComponent_Conditional_1_Template_div_transitionend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTransitionEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.thumbStyle());
  }
}
function NzSegmentedComponent_ProjectionFallback_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("nzIcon", item_r3.icon)("nzValue", item_r3.value)("nzDisabled", item_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
function NzSegmentedComponent_ProjectionFallback_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzSegmentedComponent_ProjectionFallback_2_For_1_Template, 2, 4, "label", 3, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.normalizedOptions);
  }
}
var NzSegmentedService = class _NzSegmentedService {
  defaultName = inject(_IdGenerator).getId("segmented_");
  name = signal(this.defaultName, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  selected$ = new ReplaySubject(1);
  activated$ = new ReplaySubject(1);
  change$ = new Subject();
  disabled$ = new ReplaySubject(1);
  animating$ = new BehaviorSubject(false);
  keydown$ = new Subject();
  _animating = toSignal(this.animating$, {
    initialValue: false
  });
  animationEnabled = isAnimationEnabled(() => true);
  showThumb = computed(() => this.animationEnabled() && this._animating(), ...ngDevMode ? [{
    debugName: "showThumb"
  }] : []);
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.selected$.complete();
      this.activated$.complete();
      this.change$.complete();
      this.disabled$.complete();
      this.animating$.complete();
      this.keydown$.complete();
    });
  }
  setName(name) {
    this.name.set(typeof name === "undefined" ? this.defaultName : name);
  }
  static \u0275fac = function NzSegmentedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSegmentedService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzSegmentedService,
    factory: _NzSegmentedService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedService, [{
    type: Injectable
  }], () => [], null);
})();
var NzSegmentedItemComponent = class _NzSegmentedItemComponent {
  service = inject(NzSegmentedService);
  elementRef = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  templateRef = viewChild.required("content", {
    read: TemplateRef
  });
  nzValue = input.required(...ngDevMode ? [{
    debugName: "nzValue"
  }] : []);
  nzIcon = input(...ngDevMode ? [void 0, {
    debugName: "nzIcon"
  }] : []);
  nzDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzDisabled"
  } : {}), {
    transform: booleanAttribute
  }));
  hasLabel = computed(() => this.templateRef().createEmbeddedView({}).rootNodes.some((node) => node.textContent.trim().length > 0), ...ngDevMode ? [{
    debugName: "hasLabel"
  }] : []);
  showThumb = this.service.showThumb;
  name = this.service.name.asReadonly();
  isChecked = signal(false, ...ngDevMode ? [{
    debugName: "isChecked"
  }] : []);
  parentDisabled = toSignal(this.service.disabled$, {
    initialValue: false
  });
  finalDisabled = computed(() => this.nzDisabled() || this.parentDisabled(), ...ngDevMode ? [{
    debugName: "finalDisabled"
  }] : []);
  ngOnInit() {
    this.service.selected$.pipe(tap((value) => {
      this.isChecked.set(false);
      if (value === this.nzValue()) {
        this.service.activated$.next(this.elementRef.nativeElement);
      }
    }), switchMap((value) => {
      if (!this.service.animationEnabled()) {
        return of(value);
      }
      return this.service.animating$.pipe(
        filter((animating) => !animating),
        // done
        take(1),
        map(() => value)
      );
    }), filter((value) => value === this.nzValue()), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.isChecked.set(true));
  }
  handleClick() {
    if (!this.nzDisabled() && !this.parentDisabled()) {
      this.service.selected$.next(this.nzValue());
      this.service.change$.next(this.nzValue());
    }
  }
  handleKeydown(event) {
    if (this.finalDisabled()) {
      return;
    }
    if (event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW || event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
      this.service.keydown$.next(event);
    }
  }
  static \u0275fac = function NzSegmentedItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSegmentedItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSegmentedItemComponent,
    selectors: [["label", "nz-segmented-item", ""], ["label", "nzSegmentedItem", ""]],
    viewQuery: function NzSegmentedItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.templateRef, _c0, 5, TemplateRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostAttrs: [1, "ant-segmented-item"],
    hostVars: 4,
    hostBindings: function NzSegmentedItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzSegmentedItemComponent_click_HostBindingHandler() {
          return ctx.handleClick();
        })("keydown", function NzSegmentedItemComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-segmented-item-selected", !ctx.showThumb() && ctx.isChecked())("ant-segmented-item-disabled", ctx.finalDisabled());
      }
    },
    inputs: {
      nzValue: [1, "nzValue"],
      nzIcon: [1, "nzIcon"],
      nzDisabled: [1, "nzDisabled"]
    },
    exportAs: ["nzSegmentedItem"],
    attrs: _c1,
    ngContentSelectors: _c2,
    decls: 6,
    vars: 5,
    consts: [["content", ""], ["type", "radio", 1, "ant-segmented-item-input", 3, "click", "disabled", "checked"], [1, "ant-segmented-item-label"], [3, "ngTemplateOutlet"], [1, "ant-segmented-item-icon"], [3, "nzType"]],
    template: function NzSegmentedItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "input", 1);
        \u0275\u0275listener("click", function NzSegmentedItemComponent_Template_input_click_0_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275conditionalCreate(2, NzSegmentedItemComponent_Conditional_2_Template, 3, 2)(3, NzSegmentedItemComponent_Conditional_3_Template, 1, 1, null, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NzSegmentedItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_5_0;
        \u0275\u0275property("disabled", ctx.finalDisabled())("checked", ctx.isChecked());
        \u0275\u0275attribute("name", ctx.name());
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-selected", ctx.isChecked());
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_5_0 = ctx.nzIcon()) ? 2 : 3, tmp_5_0);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedItemComponent, [{
    type: Component,
    args: [{
      selector: "label[nz-segmented-item],label[nzSegmentedItem]",
      exportAs: "nzSegmentedItem",
      imports: [NzIconModule, NgTemplateOutlet],
      template: `
    <input
      class="ant-segmented-item-input"
      type="radio"
      [disabled]="finalDisabled()"
      [checked]="isChecked()"
      [attr.name]="name()"
      (click)="$event.stopPropagation()"
    />
    <div class="ant-segmented-item-label" [attr.aria-selected]="isChecked()">
      @if (nzIcon(); as icon) {
        <span class="ant-segmented-item-icon">
          <nz-icon [nzType]="icon" />
        </span>
        @if (hasLabel()) {
          <span>
            <ng-template [ngTemplateOutlet]="content" />
          </span>
        }
      } @else {
        <ng-template [ngTemplateOutlet]="content" />
      }
    </div>

    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
      host: {
        class: "ant-segmented-item",
        "[class.ant-segmented-item-selected]": "!showThumb() && isChecked()",
        "[class.ant-segmented-item-disabled]": "finalDisabled()",
        "(click)": "handleClick()",
        "(keydown)": "handleKeydown($event)"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: ["content", __spreadProps(__spreadValues({}, {
        read: TemplateRef
      }), {
        isSignal: true
      })]
    }],
    nzValue: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzValue",
        required: true
      }]
    }],
    nzIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzIcon",
        required: false
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzDisabled",
        required: false
      }]
    }]
  });
})();
function normalizeOptions(unnormalized) {
  return unnormalized.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return {
        label: `${item}`,
        value: item
      };
    }
    return item;
  });
}
var NZ_CONFIG_MODULE_NAME = "segmented";
var NzSegmentedComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  return class NzSegmentedComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    service = inject(NzSegmentedService);
    injector = inject(Injector);
    dir = inject(Directionality).valueSignal;
    nzBlock = false;
    nzDisabled = false;
    nzOptions = [];
    nzVertical = false;
    nzShape = "default";
    nzSize = __runInitializers(this, _nzSize_initializers, "default");
    /**
     * @description set the `name` attribute of the segmented item native `input[type="radio"]`
     * @since 20.3.0
     */
    nzName = __runInitializers(this, _nzSize_extraInitializers);
    nzValueChange = new EventEmitter();
    viewItemCmps = viewChildren(NzSegmentedItemComponent, ...ngDevMode ? [{
      debugName: "viewItemCmps"
    }] : []);
    contentItemCmps = contentChildren(NzSegmentedItemComponent, ...ngDevMode ? [{
      debugName: "contentItemCmps"
    }] : []);
    renderedItemCmps = computed(() => this.viewItemCmps().concat(this.contentItemCmps()), ...ngDevMode ? [{
      debugName: "renderedItemCmps"
    }] : []);
    isDisabledFirstChange = true;
    value;
    thumbStyle = signal(null, ...ngDevMode ? [{
      debugName: "thumbStyle"
    }] : []);
    thumbAnimationEnter = withAnimationCheck(() => "ant-segmented-thumb-motion-appear-active");
    showThumb = this.service.showThumb;
    normalizedOptions = [];
    onChange = () => {
    };
    onTouched = () => {
    };
    constructor() {
      this.service.selected$.pipe(takeUntilDestroyed()).subscribe((value) => {
        this.value = value;
      });
      this.service.activated$.pipe(takeUntilDestroyed()).subscribe((element) => {
        this.thumbStyle.update((prevStyle) => {
          const nextStyle = this.calcThumbStyle(element);
          if (prevStyle && nextStyle) {
            requestAnimationFrame(() => {
              this.thumbStyle.set(this.getThumbStyle(nextStyle));
            });
          } else if (nextStyle) {
            return this.getThumbStyle(nextStyle);
          }
          return prevStyle;
        });
      });
      this.service.change$.pipe(takeUntilDestroyed()).subscribe((value) => {
        this.nzValueChange.emit(value);
        this.onChange(value);
        this.service.animating$.next(true);
      });
      this.service.keydown$.pipe(filter(() => !this.nzDisabled), takeUntilDestroyed()).subscribe((event) => this.onKeyDown(event));
      afterNextRender(() => {
        effect(() => {
          const itemCmps = this.renderedItemCmps();
          if (!itemCmps.length) {
            return;
          }
          if (this.value === void 0 || // If no value is set, select the first item
          !itemCmps.some((item) => item.nzValue() === this.value)) {
            this.service.selected$.next(itemCmps[0].nzValue());
          }
        }, {
          injector: this.injector
        });
      });
    }
    ngOnChanges(changes) {
      const {
        nzName,
        nzOptions,
        nzDisabled
      } = changes;
      if (nzName) {
        this.service.setName(this.nzName);
      }
      if (nzOptions) {
        this.normalizedOptions = normalizeOptions(nzOptions.currentValue);
      }
      if (nzDisabled) {
        this.service.disabled$.next(nzDisabled.currentValue);
      }
    }
    onOffset(offset) {
      const items = this.renderedItemCmps();
      const total = items.length;
      const originIndex = items.findIndex((item) => item.nzValue() === this.value);
      let nextIndex = (originIndex + offset + total) % total;
      while (items[nextIndex].nzDisabled()) {
        nextIndex = (nextIndex + Math.sign(offset) + total) % total;
        if (nextIndex === originIndex) {
          break;
        }
      }
      const nextOption = items[nextIndex];
      if (nextOption) {
        this.service.selected$.next(nextOption.nzValue());
        this.service.change$.next(nextOption.nzValue());
      }
    }
    // change selected item by direction keyboard interaction
    onKeyDown(event) {
      switch (event.keyCode) {
        case UP_ARROW:
          this.onOffset(-1);
          break;
        case LEFT_ARROW:
          this.onOffset(this.dir() === "rtl" ? 1 : -1);
          break;
        case DOWN_ARROW:
          this.onOffset(1);
          break;
        case RIGHT_ARROW:
          this.onOffset(this.dir() === "rtl" ? -1 : 1);
          break;
      }
    }
    writeValue(value) {
      this.service.selected$.next(value);
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(disabled) {
      this.nzDisabled = this.isDisabledFirstChange && this.nzDisabled || disabled;
      this.isDisabledFirstChange = false;
    }
    /************* Thumb Animation *************/
    calcThumbStyle(element) {
      if (!element || !element.offsetParent) {
        return null;
      }
      const parentElement = element.parentElement;
      if (!parentElement) {
        return null;
      }
      const style = {
        left: element.offsetLeft,
        right: parentElement.clientWidth - element.clientWidth - element.offsetLeft,
        width: element.clientWidth,
        top: element.offsetTop,
        bottom: parentElement.clientHeight - element.clientHeight - element.offsetTop,
        height: element.clientHeight
      };
      if (this.nzVertical) {
        return {
          left: 0,
          right: 0,
          width: 0,
          top: style.top,
          bottom: style.bottom,
          height: style.height
        };
      }
      return {
        left: style.left,
        right: style.right,
        width: style.width,
        top: 0,
        bottom: 0,
        height: 0
      };
    }
    getThumbStyle(targetStyle) {
      if (this.nzVertical) {
        return {
          transform: `translateY(${targetStyle.top}px)`,
          width: "100%",
          height: `${targetStyle.height}px`
        };
      }
      const isRtl = this.dir() === "rtl";
      const transformValue = isRtl ? -targetStyle.right : targetStyle.left;
      return {
        transform: `translateX(${transformValue}px)`,
        width: `${targetStyle.width}px`,
        height: "100%"
      };
    }
    handleTransitionEnd(event) {
      if (event.propertyName === "transform") {
        this.service.animating$.next(false);
      }
    }
    static \u0275fac = function NzSegmentedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSegmentedComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzSegmentedComponent2,
      selectors: [["nz-segmented"]],
      contentQueries: function NzSegmentedComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuerySignal(dirIndex, ctx.contentItemCmps, NzSegmentedItemComponent, 4);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      viewQuery: function NzSegmentedComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.viewItemCmps, NzSegmentedItemComponent, 5);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance();
        }
      },
      hostAttrs: ["role", "radiogroup", "aria-label", "segmented control", 1, "ant-segmented"],
      hostVars: 15,
      hostBindings: function NzSegmentedComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("tabindex", ctx.nzDisabled ? void 0 : 0);
          \u0275\u0275classProp("ant-segmented-disabled", ctx.nzDisabled)("ant-segmented-rtl", ctx.dir() === "rtl")("ant-segmented-lg", ctx.nzSize === "large")("ant-segmented-sm", ctx.nzSize === "small")("ant-segmented-block", ctx.nzBlock)("ant-segmented-vertical", ctx.nzVertical)("ant-segmented-shape-round", ctx.nzShape === "round");
        }
      },
      inputs: {
        nzBlock: [2, "nzBlock", "nzBlock", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzOptions: "nzOptions",
        nzVertical: [2, "nzVertical", "nzVertical", booleanAttribute],
        nzShape: "nzShape",
        nzSize: "nzSize",
        nzName: "nzName"
      },
      outputs: {
        nzValueChange: "nzValueChange"
      },
      exportAs: ["nzSegmented"],
      features: [\u0275\u0275ProvidersFeature([NzSegmentedService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSegmentedComponent2),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 4,
      vars: 1,
      consts: [[1, "ant-segmented-group"], [1, "ant-segmented-thumb", 3, "style"], [1, "ant-segmented-thumb", 3, "transitionend"], ["nz-segmented-item", "", 3, "nzIcon", "nzValue", "nzDisabled"]],
      template: function NzSegmentedComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275conditionalCreate(1, NzSegmentedComponent_Conditional_1_Template, 1, 2, "div", 1);
          \u0275\u0275projection(2, 0, null, NzSegmentedComponent_ProjectionFallback_2_Template, 2, 0);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showThumb() ? 1 : -1);
        }
      },
      dependencies: [NzIconModule, NzOutletModule, NzSegmentedItemComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-segmented",
      exportAs: "nzSegmented",
      template: `
    <!-- thumb motion div -->
    <div class="ant-segmented-group">
      @if (showThumb()) {
        <div
          class="ant-segmented-thumb"
          [style]="thumbStyle()"
          [animate.enter]="thumbAnimationEnter()"
          (transitionend)="handleTransitionEnd($event)"
        ></div>
      }

      <ng-content>
        @for (item of normalizedOptions; track item.value) {
          <label nz-segmented-item [nzIcon]="item.icon" [nzValue]="item.value" [nzDisabled]="item.disabled">
            {{ item.label }}
          </label>
        }
      </ng-content>
    </div>
  `,
      host: {
        class: "ant-segmented",
        "[class.ant-segmented-disabled]": "nzDisabled",
        "[class.ant-segmented-rtl]": `dir() === 'rtl'`,
        "[class.ant-segmented-lg]": `nzSize === 'large'`,
        "[class.ant-segmented-sm]": `nzSize === 'small'`,
        "[class.ant-segmented-block]": `nzBlock`,
        "[class.ant-segmented-vertical]": `nzVertical`,
        "[class.ant-segmented-shape-round]": `nzShape === 'round'`,
        // a11y
        role: "radiogroup",
        "aria-label": "segmented control",
        "[attr.tabindex]": "nzDisabled ? undefined : 0"
      },
      providers: [NzSegmentedService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSegmentedComponent),
        multi: true
      }],
      imports: [NzIconModule, NzOutletModule, NzSegmentedItemComponent]
    }]
  }], () => [], {
    nzBlock: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOptions: [{
      type: Input
    }],
    nzVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }],
    nzValueChange: [{
      type: Output
    }],
    viewItemCmps: [{
      type: ViewChildren,
      args: [forwardRef(() => NzSegmentedItemComponent), {
        isSignal: true
      }]
    }],
    contentItemCmps: [{
      type: ContentChildren,
      args: [forwardRef(() => NzSegmentedItemComponent), {
        isSignal: true
      }]
    }]
  });
})();
var NzSegmentedModule = class _NzSegmentedModule {
  static \u0275fac = function NzSegmentedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSegmentedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzSegmentedModule,
    imports: [NzSegmentedComponent, NzSegmentedItemComponent],
    exports: [NzSegmentedComponent, NzSegmentedItemComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSegmentedComponent, NzSegmentedItemComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedModule, [{
    type: NgModule,
    args: [{
      imports: [NzSegmentedComponent, NzSegmentedItemComponent],
      exports: [NzSegmentedComponent, NzSegmentedItemComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-entry/hrm-segmented.ts
var _c02 = () => [];
var HrmSegmented = class _HrmSegmented extends HrmControl {
  constructor() {
    super(...arguments);
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.block = input(false, ...ngDevMode ? [{ debugName: "block" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmSegmented_BaseFactory;
      return function HrmSegmented_Factory(__ngFactoryType__) {
        return (\u0275HrmSegmented_BaseFactory || (\u0275HrmSegmented_BaseFactory = \u0275\u0275getInheritedFactory(_HrmSegmented)))(__ngFactoryType__ || _HrmSegmented);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSegmented, selectors: [["hrm-segmented"]], hostAttrs: [1, "hrm-segmented"], inputs: { options: [1, "options"], size: [1, "size"], block: [1, "block"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmSegmented), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 6, consts: [[3, "ngModelChange", "ngModel", "nzOptions", "nzBlock", "nzDisabled", "nzSize"]], template: function HrmSegmented_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-segmented", 0);
        \u0275\u0275listener("ngModelChange", function HrmSegmented_Template_nz_segmented_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzOptions", ctx.options() ?? \u0275\u0275pureFunction0(5, _c02))("nzBlock", ctx.block())("nzDisabled", ctx.disabled())("nzSize", ctx.size() === "sm" ? "small" : ctx.size() === "lg" ? "large" : "default");
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzSegmentedModule, NzSegmentedComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSegmented, [{
    type: Component,
    args: [{
      selector: "hrm-segmented",
      imports: [FormsModule, NzSegmentedModule],
      template: `
    <nz-segmented
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzOptions]="options() ?? []"
      [nzBlock]="block()"
      [nzDisabled]="disabled()"
      [nzSize]="size() === 'sm' ? 'small' : size() === 'lg' ? 'large' : 'default'"></nz-segmented>
  `,
      host: { class: "hrm-segmented" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmSegmented), multi: true }]
    }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], block: [{ type: Input, args: [{ isSignal: true, alias: "block", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSegmented, { className: "HrmSegmented", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-segmented.ts", lineNumber: 22 });
})();

export {
  HrmSegmented
};
//# sourceMappingURL=chunk-FCCBRISQ.js.map
