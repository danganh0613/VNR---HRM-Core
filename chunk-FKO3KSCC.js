import {
  NzResizeObserver
} from "./chunk-JUFZRQMG.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import {
  NzDragService,
  NzResizeService
} from "./chunk-MBPTEHMI.js";
import "./chunk-LQM5UC6B.js";
import {
  LEFT_ARROW,
  RIGHT_ARROW
} from "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-4363XCMO.js";
import {
  Platform
} from "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  fromEventOutsideAngular
} from "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  booleanAttribute,
  contentChildren,
  debounceTime,
  distinctUntilChanged,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-carousel.mjs
var _c0 = ["slickList"];
var _c1 = ["slickTrack"];
var _c2 = ["*"];
var _c3 = (a0) => ({
  $implicit: a0
});
function NzCarouselComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function NzCarouselComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pre());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("slick-disabled", ctx_r1.activeIndex === 0);
  }
}
function NzCarouselComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function NzCarouselComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("slick-disabled", ctx_r1.activeIndex === ctx_r1.carouselContents.length - 1);
  }
}
function NzCarouselComponent_Conditional_8_For_2_ng_template_1_Template(rf, ctx) {
}
function NzCarouselComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275listener("click", function NzCarouselComponent_Conditional_8_For_2_Template_li_click_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goTo($index_r5));
    });
    \u0275\u0275template(1, NzCarouselComponent_Conditional_8_For_2_ng_template_1_Template, 0, 0, "ng-template", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    const renderDotTemplate_r6 = \u0275\u0275reference(10);
    \u0275\u0275classProp("slick-active", $index_r5 === ctx_r1.activeIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nzDotRender || renderDotTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c3, $index_r5));
  }
}
function NzCarouselComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 11);
    \u0275\u0275repeaterCreate(1, NzCarouselComponent_Conditional_8_For_2_Template, 2, 6, "li", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("slick-dots-top", ctx_r1.nzDotPosition === "top")("slick-dots-bottom", ctx_r1.nzDotPosition === "bottom")("slick-dots-left", ctx_r1.nzDotPosition === "left")("slick-dots-right", ctx_r1.nzDotPosition === "right");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.carouselContents);
  }
}
function NzCarouselComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const index_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(index_r7 + 1);
  }
}
var NzCarouselContentDirective = class _NzCarouselContentDirective {
  renderer = inject(Renderer2);
  el = inject(ElementRef).nativeElement;
  set isActive(value) {
    this._active = value;
    if (this.isActive) {
      this.renderer.addClass(this.el, "slick-active");
    } else {
      this.renderer.removeClass(this.el, "slick-active");
    }
  }
  get isActive() {
    return this._active;
  }
  _active = false;
  static \u0275fac = function NzCarouselContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCarouselContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCarouselContentDirective,
    selectors: [["", "nz-carousel-content", ""]],
    hostAttrs: [1, "slick-slide"],
    exportAs: ["nzCarouselContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-carousel-content]",
      exportAs: "nzCarouselContent",
      host: {
        class: "slick-slide"
      }
    }]
  }], null, null);
})();
var NzCarouselBaseStrategy = class {
  cdr;
  renderer;
  platform;
  options;
  // Properties that strategies may want to use.
  carouselComponent;
  contents;
  slickListEl;
  slickTrackEl;
  length;
  unitWidth;
  unitHeight;
  get maxIndex() {
    return this.length - 1;
  }
  get firstEl() {
    return this.contents[0].el;
  }
  get lastEl() {
    return this.contents[this.maxIndex].el;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.platform = platform;
    this.options = options;
    this.carouselComponent = carouselComponent;
  }
  /**
   * Initialize dragging sequences.
   *
   * @param contents
   */
  withCarouselContents(contents) {
    const carousel = this.carouselComponent;
    this.slickListEl = carousel.slickListEl;
    this.slickTrackEl = carousel.slickTrackEl;
    this.contents = contents?.toArray() || [];
    this.length = this.contents.length;
    if (this.platform.isBrowser) {
      const rect = carousel.el.getBoundingClientRect();
      this.unitWidth = rect.width;
      this.unitHeight = rect.height;
    } else {
      contents?.forEach((content, index) => {
        if (index === 0) {
          this.renderer.setStyle(content.el, "width", "100%");
        } else {
          this.renderer.setStyle(content.el, "display", "none");
        }
      });
    }
  }
  /**
   * When user drag the carousel component.
   *
   * @optional
   */
  dragging(_vector) {
  }
  /**
   * Destroy a scroll strategy.
   */
  dispose() {
  }
  getFromToInBoundary(f, t) {
    const length = this.maxIndex + 1;
    return {
      from: (f + length) % length,
      to: (t + length) % length
    };
  }
};
var NzCarouselOpacityStrategy = class extends NzCarouselBaseStrategy {
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    if (this.contents) {
      this.slickTrackEl.style.width = `${this.length * this.unitWidth}px`;
      this.contents.forEach((content, i) => {
        this.renderer.setStyle(content.el, "opacity", this.carouselComponent.activeIndex === i ? "1" : "0");
        this.renderer.setStyle(content.el, "position", "relative");
        this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, "left", `${-this.unitWidth * i}px`);
        this.renderer.setStyle(content.el, "transition", ["opacity 500ms ease 0s", "visibility 500ms ease 0s"]);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new Subject();
    this.contents.forEach((content, i) => {
      this.renderer.setStyle(content.el, "opacity", t === i ? "1" : "0");
    });
    setTimeout(() => {
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$;
  }
  dispose() {
    this.contents.forEach((content) => {
      this.renderer.setStyle(content.el, "transition", null);
      this.renderer.setStyle(content.el, "opacity", null);
      this.renderer.setStyle(content.el, "width", null);
      this.renderer.setStyle(content.el, "left", null);
    });
    super.dispose();
  }
};
var NzCarouselTransformStrategy = class extends NzCarouselBaseStrategy {
  isDragging = false;
  isTransitioning = false;
  get vertical() {
    return this.carouselComponent.vertical;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    super(carouselComponent, cdr, renderer, platform, options);
  }
  dispose() {
    super.dispose();
    this.renderer.setStyle(this.slickTrackEl, "transform", null);
  }
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    const carousel = this.carouselComponent;
    const activeIndex = carousel.activeIndex;
    if (this.platform.isBrowser && this.contents.length) {
      this.renderer.setStyle(this.slickListEl, "height", `${this.unitHeight}px`);
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, "height", `${this.length * this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, "height", `${this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, "width", `${this.length * this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
      }
      this.contents.forEach((content) => {
        this.renderer.setStyle(content.el, "position", "relative");
        this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, "height", `${this.unitHeight}px`);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new Subject();
    this.renderer.setStyle(this.slickTrackEl, "transition", `transform ${this.carouselComponent.nzTransitionSpeed}ms ease`);
    if (this.vertical) {
      this.verticalTransform(_f, _t);
    } else {
      this.horizontalTransform(_f, _t);
    }
    this.isTransitioning = true;
    this.isDragging = false;
    setTimeout(() => {
      this.renderer.setStyle(this.slickTrackEl, "transition", null);
      this.contents.forEach((content) => {
        this.renderer.setStyle(content.el, this.vertical ? "top" : "left", null);
      });
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-t * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-t * this.unitWidth}px, 0, 0)`);
      }
      this.isTransitioning = false;
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$.asObservable();
  }
  dragging(_vector) {
    if (this.isTransitioning) {
      return;
    }
    const activeIndex = this.carouselComponent.activeIndex;
    if (this.carouselComponent.vertical) {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareVerticalContext(true);
        } else if (activeIndex === 0) {
          this.prepareVerticalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
    } else {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareHorizontalContext(true);
        } else if (activeIndex === 0) {
          this.prepareHorizontalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
    }
    this.isDragging = true;
  }
  verticalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareVerticalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-t * this.unitHeight}px, 0`);
    }
  }
  horizontalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareHorizontalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-t * this.unitWidth}px, 0, 0`);
    }
  }
  prepareVerticalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, "top", `${this.length * this.unitHeight}px`);
      this.renderer.setStyle(this.lastEl, "top", null);
    } else {
      this.renderer.setStyle(this.firstEl, "top", null);
      this.renderer.setStyle(this.lastEl, "top", `${-this.unitHeight * this.length}px`);
    }
  }
  prepareHorizontalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, "left", `${this.length * this.unitWidth}px`);
      this.renderer.setStyle(this.lastEl, "left", null);
    } else {
      this.renderer.setStyle(this.firstEl, "left", null);
      this.renderer.setStyle(this.lastEl, "left", `${-this.unitWidth * this.length}px`);
    }
  }
};
var NZ_CAROUSEL_CUSTOM_STRATEGIES = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-carousel-custom-strategies" : "");
var NZ_CONFIG_MODULE_NAME = "carousel";
var NzCarouselComponent = (() => {
  let _nzEffect_decorators;
  let _nzEffect_initializers = [];
  let _nzEffect_extraInitializers = [];
  let _nzEnableSwipe_decorators;
  let _nzEnableSwipe_initializers = [];
  let _nzEnableSwipe_extraInitializers = [];
  let _nzDots_decorators;
  let _nzDots_initializers = [];
  let _nzDots_extraInitializers = [];
  let _nzAutoPlay_decorators;
  let _nzAutoPlay_initializers = [];
  let _nzAutoPlay_extraInitializers = [];
  let _nzAutoPlaySpeed_decorators;
  let _nzAutoPlaySpeed_initializers = [];
  let _nzAutoPlaySpeed_extraInitializers = [];
  let _nzLoop_decorators;
  let _nzLoop_initializers = [];
  let _nzLoop_extraInitializers = [];
  let _nzDotPosition_decorators;
  let _nzDotPosition_initializers = [];
  let _nzDotPosition_extraInitializers = [];
  return class NzCarouselComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzEffect_decorators = [WithConfig()];
      _nzEnableSwipe_decorators = [WithConfig()];
      _nzDots_decorators = [WithConfig()];
      _nzAutoPlay_decorators = [WithConfig()];
      _nzAutoPlaySpeed_decorators = [WithConfig()];
      _nzLoop_decorators = [WithConfig()];
      _nzDotPosition_decorators = [WithConfig()];
      __esDecorate(null, null, _nzEffect_decorators, {
        kind: "field",
        name: "nzEffect",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzEffect" in obj,
          get: (obj) => obj.nzEffect,
          set: (obj, value) => {
            obj.nzEffect = value;
          }
        },
        metadata: _metadata
      }, _nzEffect_initializers, _nzEffect_extraInitializers);
      __esDecorate(null, null, _nzEnableSwipe_decorators, {
        kind: "field",
        name: "nzEnableSwipe",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzEnableSwipe" in obj,
          get: (obj) => obj.nzEnableSwipe,
          set: (obj, value) => {
            obj.nzEnableSwipe = value;
          }
        },
        metadata: _metadata
      }, _nzEnableSwipe_initializers, _nzEnableSwipe_extraInitializers);
      __esDecorate(null, null, _nzDots_decorators, {
        kind: "field",
        name: "nzDots",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDots" in obj,
          get: (obj) => obj.nzDots,
          set: (obj, value) => {
            obj.nzDots = value;
          }
        },
        metadata: _metadata
      }, _nzDots_initializers, _nzDots_extraInitializers);
      __esDecorate(null, null, _nzAutoPlay_decorators, {
        kind: "field",
        name: "nzAutoPlay",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAutoPlay" in obj,
          get: (obj) => obj.nzAutoPlay,
          set: (obj, value) => {
            obj.nzAutoPlay = value;
          }
        },
        metadata: _metadata
      }, _nzAutoPlay_initializers, _nzAutoPlay_extraInitializers);
      __esDecorate(null, null, _nzAutoPlaySpeed_decorators, {
        kind: "field",
        name: "nzAutoPlaySpeed",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAutoPlaySpeed" in obj,
          get: (obj) => obj.nzAutoPlaySpeed,
          set: (obj, value) => {
            obj.nzAutoPlaySpeed = value;
          }
        },
        metadata: _metadata
      }, _nzAutoPlaySpeed_initializers, _nzAutoPlaySpeed_extraInitializers);
      __esDecorate(null, null, _nzLoop_decorators, {
        kind: "field",
        name: "nzLoop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzLoop" in obj,
          get: (obj) => obj.nzLoop,
          set: (obj, value) => {
            obj.nzLoop = value;
          }
        },
        metadata: _metadata
      }, _nzLoop_initializers, _nzLoop_extraInitializers);
      __esDecorate(null, null, _nzDotPosition_decorators, {
        kind: "field",
        name: "nzDotPosition",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDotPosition" in obj,
          get: (obj) => obj.nzDotPosition,
          set: (obj, value) => {
            obj.nzDotPosition = value;
          }
        },
        metadata: _metadata
      }, _nzDotPosition_initializers, _nzDotPosition_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzConfigService = inject(NzConfigService);
    ngZone = inject(NgZone);
    renderer = inject(Renderer2);
    cdr = inject(ChangeDetectorRef);
    platform = inject(Platform);
    resizeService = inject(NzResizeService);
    nzDragService = inject(NzDragService);
    nzResizeObserver = inject(NzResizeObserver);
    destroyRef = inject(DestroyRef);
    carouselContents;
    slickList;
    slickTrack;
    nzDotRender;
    nzEffect = __runInitializers(this, _nzEffect_initializers, "scrollx");
    nzEnableSwipe = (__runInitializers(this, _nzEffect_extraInitializers), __runInitializers(this, _nzEnableSwipe_initializers, true));
    nzDots = (__runInitializers(this, _nzEnableSwipe_extraInitializers), __runInitializers(this, _nzDots_initializers, true));
    nzAutoPlay = (__runInitializers(this, _nzDots_extraInitializers), __runInitializers(this, _nzAutoPlay_initializers, false));
    nzAutoPlaySpeed = (__runInitializers(this, _nzAutoPlay_extraInitializers), __runInitializers(this, _nzAutoPlaySpeed_initializers, 3e3));
    nzTransitionSpeed = (__runInitializers(this, _nzAutoPlaySpeed_extraInitializers), 500);
    nzLoop = __runInitializers(this, _nzLoop_initializers, true);
    nzArrows = (__runInitializers(this, _nzLoop_extraInitializers), false);
    /**
     * this property is passed directly to an NzCarouselBaseStrategy
     */
    nzStrategyOptions = void 0;
    nzDotPosition = __runInitializers(this, _nzDotPosition_initializers, "bottom");
    nzBeforeChange = (__runInitializers(this, _nzDotPosition_extraInitializers), new EventEmitter());
    nzAfterChange = new EventEmitter();
    activeIndex = 0;
    el = inject(ElementRef).nativeElement;
    slickListEl;
    slickTrackEl;
    strategy;
    vertical = false;
    transitionInProgress;
    dir = "ltr";
    gestureRect = null;
    pointerDelta = null;
    isTransiting = false;
    isDragging = false;
    directionality = inject(Directionality);
    customStrategies = inject(NZ_CAROUSEL_CUSTOM_STRATEGIES, {
      optional: true
    });
    constructor() {
      this.nzDotPosition = "bottom";
      this.destroyRef.onDestroy(() => {
        this.clearScheduledTransition();
        this.strategy?.dispose();
      });
    }
    ngOnInit() {
      this.slickListEl = this.slickList.nativeElement;
      this.slickTrackEl = this.slickTrack.nativeElement;
      this.dir = this.directionality.value;
      this.directionality.change.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
        this.markContentActive(this.activeIndex);
        this.cdr.detectChanges();
      });
      fromEventOutsideAngular(this.slickListEl, "keydown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        const {
          keyCode
        } = event;
        if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === LEFT_ARROW) {
            this.pre();
          } else {
            this.next();
          }
          this.cdr.markForCheck();
        });
      });
      this.nzResizeObserver.observe(this.el).pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.layout());
    }
    ngAfterContentInit() {
      this.markContentActive(0);
    }
    ngAfterViewInit() {
      this.carouselContents.changes.subscribe(() => {
        this.markContentActive(0);
        this.layout();
      });
      this.resizeService.connect().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.layout());
      this.switchStrategy();
      this.markContentActive(0);
      this.layout();
      Promise.resolve().then(() => this.layout());
    }
    ngOnChanges(changes) {
      const {
        nzEffect,
        nzDotPosition
      } = changes;
      if (nzEffect && !nzEffect.isFirstChange()) {
        this.switchStrategy();
        this.markContentActive(0);
        this.layout();
      }
      if (nzDotPosition) {
        this.vertical = nzDotPosition.currentValue === "left" || nzDotPosition.currentValue === "right";
        if (!nzDotPosition.isFirstChange()) {
          this.switchStrategy();
          this.markContentActive(0);
          this.layout();
        }
      }
      if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
        this.clearScheduledTransition();
      } else {
        this.scheduleNextTransition();
      }
    }
    next() {
      this.goTo(this.activeIndex + 1);
    }
    pre() {
      this.goTo(this.activeIndex - 1);
    }
    goTo(index) {
      if (this.carouselContents && this.carouselContents.length && !this.isTransiting && (this.nzLoop || index >= 0 && index < this.carouselContents.length)) {
        const length = this.carouselContents.length;
        const from = this.activeIndex;
        const to = (index + length) % length;
        this.isTransiting = true;
        this.nzBeforeChange.emit({
          from,
          to
        });
        this.strategy.switch(this.activeIndex, index).subscribe(() => {
          this.scheduleNextTransition();
          this.nzAfterChange.emit(to);
          this.isTransiting = false;
        });
        this.markContentActive(to);
        this.cdr.markForCheck();
      }
    }
    switchStrategy() {
      if (this.strategy) {
        this.strategy.dispose();
      }
      const customStrategy = this.customStrategies ? this.customStrategies.find((s) => s.name === this.nzEffect) : null;
      if (customStrategy) {
        this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer, this.platform);
        return;
      }
      this.strategy = this.nzEffect === "scrollx" ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer, this.platform) : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer, this.platform);
    }
    scheduleNextTransition() {
      this.clearScheduledTransition();
      if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
        this.transitionInProgress = setTimeout(() => {
          this.goTo(this.activeIndex + 1);
        }, this.nzAutoPlaySpeed);
      }
    }
    clearScheduledTransition() {
      if (this.transitionInProgress) {
        clearTimeout(this.transitionInProgress);
        this.transitionInProgress = void 0;
      }
    }
    markContentActive(index) {
      this.activeIndex = index;
      this.carouselContents?.forEach((slide, i) => slide.isActive = index === i);
      this.cdr.markForCheck();
    }
    /**
     * Drag carousel.
     */
    pointerDown = (event) => {
      if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
        this.clearScheduledTransition();
        this.gestureRect = this.slickListEl.getBoundingClientRect();
        this.nzDragService.requestDraggingSequence(event).subscribe({
          next: (delta) => {
            this.pointerDelta = delta;
            this.isDragging = true;
            this.strategy?.dragging(this.pointerDelta);
          },
          complete: () => {
            if (this.nzEnableSwipe && this.isDragging) {
              const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
              if (Math.abs(xDelta) > this.gestureRect.width / 3 && (this.nzLoop || xDelta <= 0 && this.activeIndex + 1 < this.carouselContents.length || xDelta > 0 && this.activeIndex > 0)) {
                this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
              } else {
                this.goTo(this.activeIndex);
              }
              this.gestureRect = null;
              this.pointerDelta = null;
            }
            this.isDragging = false;
          }
        });
      }
    };
    layout() {
      this.strategy?.withCarouselContents(this.carouselContents);
    }
    static \u0275fac = function NzCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzCarouselComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzCarouselComponent2,
      selectors: [["nz-carousel"]],
      contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzCarouselContentDirective, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.carouselContents = _t);
        }
      },
      viewQuery: function NzCarouselComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 7)(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slickList = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slickTrack = _t.first);
        }
      },
      hostAttrs: [1, "ant-carousel"],
      hostVars: 4,
      hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-carousel-vertical", ctx.vertical)("ant-carousel-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzDotRender: "nzDotRender",
        nzEffect: "nzEffect",
        nzEnableSwipe: [2, "nzEnableSwipe", "nzEnableSwipe", booleanAttribute],
        nzDots: [2, "nzDots", "nzDots", booleanAttribute],
        nzAutoPlay: [2, "nzAutoPlay", "nzAutoPlay", booleanAttribute],
        nzAutoPlaySpeed: [2, "nzAutoPlaySpeed", "nzAutoPlaySpeed", numberAttribute],
        nzTransitionSpeed: [2, "nzTransitionSpeed", "nzTransitionSpeed", numberAttribute],
        nzLoop: "nzLoop",
        nzArrows: [2, "nzArrows", "nzArrows", booleanAttribute],
        nzStrategyOptions: "nzStrategyOptions",
        nzDotPosition: "nzDotPosition"
      },
      outputs: {
        nzBeforeChange: "nzBeforeChange",
        nzAfterChange: "nzAfterChange"
      },
      exportAs: ["nzCarousel"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 11,
      vars: 5,
      consts: [["slickList", ""], ["slickTrack", ""], ["renderDotTemplate", ""], ["dir", "ltr", 1, "slick-initialized", "slick-slider"], ["type", "button", "aria-label", "prev", 1, "slick-prev", "slick-arrow", 3, "slick-disabled"], ["tabindex", "-1", 1, "slick-list", 3, "mousedown", "touchstart"], [1, "slick-track"], ["type", "button", "aria-label", "next", 1, "slick-next", "slick-arrow", 3, "slick-disabled"], [1, "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right"], ["type", "button", "aria-label", "prev", 1, "slick-prev", "slick-arrow", 3, "click"], ["type", "button", "aria-label", "next", 1, "slick-next", "slick-arrow", 3, "click"], [1, "slick-dots"], [3, "slick-active"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NzCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 3);
          \u0275\u0275conditionalCreate(1, NzCarouselComponent_Conditional_1_Template, 1, 2, "button", 4);
          \u0275\u0275elementStart(2, "div", 5, 0);
          \u0275\u0275listener("mousedown", function NzCarouselComponent_Template_div_mousedown_2_listener($event) {
            return ctx.pointerDown($event);
          })("touchstart", function NzCarouselComponent_Template_div_touchstart_2_listener($event) {
            return ctx.pointerDown($event);
          });
          \u0275\u0275elementStart(4, "div", 6, 1);
          \u0275\u0275projection(6);
          \u0275\u0275elementEnd()();
          \u0275\u0275conditionalCreate(7, NzCarouselComponent_Conditional_7_Template, 1, 2, "button", 7);
          \u0275\u0275conditionalCreate(8, NzCarouselComponent_Conditional_8_Template, 3, 8, "ul", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275template(9, NzCarouselComponent_ng_template_9_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          \u0275\u0275classProp("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzArrows ? 1 : -1);
          \u0275\u0275advance(6);
          \u0275\u0275conditional(ctx.nzArrows ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzDots ? 8 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-carousel",
      exportAs: "nzCarousel",
      template: `
    <div
      class="slick-initialized slick-slider"
      [class.slick-vertical]="nzDotPosition === 'left' || nzDotPosition === 'right'"
      dir="ltr"
    >
      @if (nzArrows) {
        <button
          type="button"
          aria-label="prev"
          class="slick-prev slick-arrow"
          [class.slick-disabled]="this.activeIndex === 0"
          (click)="pre()"
        ></button>
      }
      <div
        #slickList
        class="slick-list"
        tabindex="-1"
        (mousedown)="pointerDown($event)"
        (touchstart)="pointerDown($event)"
      >
        <!-- Render carousel items. -->
        <div class="slick-track" #slickTrack>
          <ng-content />
        </div>
      </div>
      @if (nzArrows) {
        <button
          type="button"
          aria-label="next"
          class="slick-next slick-arrow"
          [class.slick-disabled]="this.activeIndex === this.carouselContents.length - 1"
          (click)="next()"
        ></button>
      }
      <!-- Render dots. -->
      @if (nzDots) {
        <ul
          class="slick-dots"
          [class.slick-dots-top]="nzDotPosition === 'top'"
          [class.slick-dots-bottom]="nzDotPosition === 'bottom'"
          [class.slick-dots-left]="nzDotPosition === 'left'"
          [class.slick-dots-right]="nzDotPosition === 'right'"
        >
          @for (content of carouselContents; track content) {
            <li [class.slick-active]="$index === activeIndex" (click)="goTo($index)">
              <ng-template
                [ngTemplateOutlet]="nzDotRender || renderDotTemplate"
                [ngTemplateOutletContext]="{ $implicit: $index }"
              />
            </li>
          }
        </ul>
      }
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{ index + 1 }}</button>
    </ng-template>
  `,
      host: {
        class: "ant-carousel",
        "[class.ant-carousel-vertical]": "vertical",
        "[class.ant-carousel-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [], {
    carouselContents: [{
      type: ContentChildren,
      args: [NzCarouselContentDirective]
    }],
    slickList: [{
      type: ViewChild,
      args: ["slickList", {
        static: true
      }]
    }],
    slickTrack: [{
      type: ViewChild,
      args: ["slickTrack", {
        static: true
      }]
    }],
    nzDotRender: [{
      type: Input
    }],
    nzEffect: [{
      type: Input
    }],
    nzEnableSwipe: [{
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
    nzAutoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoPlaySpeed: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzTransitionSpeed: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzLoop: [{
      type: Input
    }],
    nzArrows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStrategyOptions: [{
      type: Input
    }],
    nzDotPosition: [{
      type: Input
    }],
    nzBeforeChange: [{
      type: Output
    }],
    nzAfterChange: [{
      type: Output
    }]
  });
})();
var NzCarouselModule = class _NzCarouselModule {
  static \u0275fac = function NzCarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCarouselModule,
    imports: [NzCarouselComponent, NzCarouselContentDirective],
    exports: [NzCarouselComponent, NzCarouselContentDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [NzCarouselComponent, NzCarouselContentDirective],
      exports: [NzCarouselComponent, NzCarouselContentDirective]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-carousel.ts
var _c02 = ["tpl"];
var _c12 = ["*"];
function HrmCarouselSlide_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function HrmCarousel_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", s_r1.tpl());
  }
}
var HrmCarouselSlide = class _HrmCarouselSlide {
  constructor() {
    this.tpl = viewChild.required("tpl");
  }
  static {
    this.\u0275fac = function HrmCarouselSlide_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCarouselSlide)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCarouselSlide, selectors: [["hrm-carousel-slide"]], viewQuery: function HrmCarouselSlide_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.tpl, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, ngContentSelectors: _c12, decls: 2, vars: 0, consts: [["tpl", ""]], template: function HrmCarouselSlide_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, HrmCarouselSlide_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCarouselSlide, [{
    type: Component,
    args: [{
      selector: "hrm-carousel-slide",
      template: `<ng-template #tpl><ng-content /></ng-template>`
    }]
  }], null, { tpl: [{ type: ViewChild, args: ["tpl", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCarouselSlide, { className: "HrmCarouselSlide", filePath: "libs/hrm-ui/src/lib/data-display/hrm-carousel.ts", lineNumber: 10 });
})();
var HrmCarousel = class _HrmCarousel {
  constructor() {
    this.slides = contentChildren(HrmCarouselSlide, ...ngDevMode ? [{ debugName: "slides" }] : (
      /* istanbul ignore next */
      []
    ));
    this.effect = input("scrollx", ...ngDevMode ? [{ debugName: "effect" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dotPosition = input("bottom", ...ngDevMode ? [{ debugName: "dotPosition" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dots = input(true, ...ngDevMode ? [{ debugName: "dots" }] : (
      /* istanbul ignore next */
      []
    ));
    this.arrows = input(false, ...ngDevMode ? [{ debugName: "arrows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autoplay = input(false, ...ngDevMode ? [{ debugName: "autoplay" }] : (
      /* istanbul ignore next */
      []
    ));
    this.autoplaySpeed = input(3e3, ...ngDevMode ? [{ debugName: "autoplaySpeed" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCarousel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCarousel, selectors: [["hrm-carousel"]], contentQueries: function HrmCarousel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.slides, HrmCarouselSlide, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-carousel"], inputs: { effect: [1, "effect"], dotPosition: [1, "dotPosition"], dots: [1, "dots"], arrows: [1, "arrows"], autoplay: [1, "autoplay"], autoplaySpeed: [1, "autoplaySpeed"] }, decls: 3, vars: 6, consts: [[3, "nzEffect", "nzDotPosition", "nzDots", "nzArrows", "nzAutoPlay", "nzAutoPlaySpeed"], ["nz-carousel-content", ""], [3, "ngTemplateOutlet"]], template: function HrmCarousel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-carousel", 0);
        \u0275\u0275repeaterCreate(1, HrmCarousel_For_2_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzEffect", ctx.effect())("nzDotPosition", ctx.dotPosition())("nzDots", ctx.dots())("nzArrows", ctx.arrows())("nzAutoPlay", ctx.autoplay())("nzAutoPlaySpeed", ctx.autoplaySpeed());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.slides());
      }
    }, dependencies: [NzCarouselModule, NzCarouselComponent, NzCarouselContentDirective, NgTemplateOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCarousel, [{
    type: Component,
    args: [{
      selector: "hrm-carousel",
      imports: [NzCarouselModule, NgTemplateOutlet],
      template: `
    <nz-carousel
      [nzEffect]="effect()"
      [nzDotPosition]="dotPosition()"
      [nzDots]="dots()"
      [nzArrows]="arrows()"
      [nzAutoPlay]="autoplay()"
      [nzAutoPlaySpeed]="autoplaySpeed()">
      @for (s of slides(); track $index) {
        <div nz-carousel-content>
          <ng-container [ngTemplateOutlet]="s.tpl()" />
        </div>
      }
    </nz-carousel>
  `,
      host: { class: "hrm-carousel" }
    }]
  }], null, { slides: [{ type: ContentChildren, args: [forwardRef(() => HrmCarouselSlide), { isSignal: true }] }], effect: [{ type: Input, args: [{ isSignal: true, alias: "effect", required: false }] }], dotPosition: [{ type: Input, args: [{ isSignal: true, alias: "dotPosition", required: false }] }], dots: [{ type: Input, args: [{ isSignal: true, alias: "dots", required: false }] }], arrows: [{ type: Input, args: [{ isSignal: true, alias: "arrows", required: false }] }], autoplay: [{ type: Input, args: [{ isSignal: true, alias: "autoplay", required: false }] }], autoplaySpeed: [{ type: Input, args: [{ isSignal: true, alias: "autoplaySpeed", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCarousel, { className: "HrmCarousel", filePath: "libs/hrm-ui/src/lib/data-display/hrm-carousel.ts", lineNumber: 35 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/carousel.ts
var SgDocCarousel = class _SgDocCarousel {
  constructor() {
    this.when = [
      "docs.carousel.when1",
      "docs.carousel.when2",
      "docs.carousel.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCarousel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCarousel, selectors: [["sg-doc-carousel"]], decls: 112, vars: 103, consts: [["category", "Container", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "480px"], [1, "s", 2, "background", "#2267E8"], [1, "s", 2, "background", "#16A34A"], [1, "s", 2, "background", "#D97706"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "autoplay", "autoplaySpeed"], [1, "s", 2, "background", "#0EA5E9"], ["effect", "fade"], [1, "s", 2, "background", "#7C3AED"], [1, "s", 2, "background", "#DB2777"], [3, "arrows"], [1, "s", 2, "background", "#0F766E"], [1, "s", 2, "background", "#B45309"], [1, "s", 2, "background", "#4F46E5"]], template: function SgDocCarousel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-carousel")(6, "hrm-carousel-slide")(7, "div", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "hrm-carousel-slide")(11, "div", 4);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "hrm-carousel-slide")(15, "div", 5);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275element(19, "sg-use", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8)(24, "sg-do");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-do");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-do");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-dont");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "sg-dont");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 9)(40, "sg-example", 10);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row")(44, "div", 2)(45, "hrm-carousel")(46, "hrm-carousel-slide")(47, "div", 3);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "hrm-carousel-slide")(51, "div", 4);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "hrm-carousel-slide")(55, "div", 5);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(58, "sg-example", 10);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementStart(61, "sg-row")(62, "div", 2)(63, "hrm-carousel", 11)(64, "hrm-carousel-slide")(65, "div", 3);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "hrm-carousel-slide")(69, "div", 12);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "hrm-carousel-slide")(73, "div", 4);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(76, "sg-example", 10);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementStart(79, "sg-row")(80, "div", 2)(81, "hrm-carousel", 13)(82, "hrm-carousel-slide")(83, "div", 14);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "hrm-carousel-slide")(87, "div", 15);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "hrm-carousel-slide")(91, "div", 3);
        \u0275\u0275text(92);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(94, "sg-example", 10);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275elementStart(97, "sg-row")(98, "div", 2)(99, "hrm-carousel", 16)(100, "hrm-carousel-slide")(101, "div", 17);
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "hrm-carousel-slide")(105, "div", 18);
        \u0275\u0275text(106);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "hrm-carousel-slide")(109, "div", 19);
        \u0275\u0275text(110);
        \u0275\u0275pipe(111, "translate");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 37, "docs.carousel.title"))("desc", \u0275\u0275pipeBind1(2, 39, "docs.carousel.desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 41, "docs.carousel.ovSlide1"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 43, "docs.carousel.ovSlide2"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 45, "docs.carousel.ovSlide3"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(20, 47, "docs.carousel.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(21, 49, "docs.carousel.behavior"))("avoid", \u0275\u0275pipeBind1(22, 51, "docs.carousel.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 53, "docs.carousel.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 55, "docs.carousel.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 57, "docs.carousel.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 59, "docs.carousel.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 61, "docs.carousel.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 63, "docs.carousel.exDotsT"))("desc", \u0275\u0275pipeBind1(42, 65, "docs.carousel.exDotsD"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 67, "docs.carousel.notice1"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 69, "docs.carousel.notice2"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 71, "docs.carousel.notice3"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(59, 73, "docs.carousel.exAutoplayT"))("desc", \u0275\u0275pipeBind1(60, 75, "docs.carousel.exAutoplayD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("autoplay", true)("autoplaySpeed", 2500);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 77, "docs.carousel.auto1"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 79, "docs.carousel.auto2"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 81, "docs.carousel.auto3"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(77, 83, "docs.carousel.exFadeT"))("desc", \u0275\u0275pipeBind1(78, 85, "docs.carousel.exFadeD"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 87, "docs.carousel.fade1"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 89, "docs.carousel.fade2"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 91, "docs.carousel.fade3"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(95, 93, "docs.carousel.exArrowsT"))("desc", \u0275\u0275pipeBind1(96, 95, "docs.carousel.exArrowsD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("arrows", true);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 97, "docs.carousel.arrow1"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 99, "docs.carousel.arrow2"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 101, "docs.carousel.arrow3"));
      }
    }, dependencies: [TranslateModule, HrmCarousel, HrmCarouselSlide, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.s[_ngcontent-%COMP%] {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: var(--radius-lg);\n  font-weight: 500;\n}\n/*# sourceMappingURL=carousel.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCarousel, [{
    type: Component,
    args: [{ selector: "sg-doc-carousel", imports: [TranslateModule, HrmCarousel, HrmCarouselSlide, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Container" [title]="'docs.carousel.title' | translate" [desc]="'docs.carousel.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:480px">
          <hrm-carousel>
            <hrm-carousel-slide><div class="s" style="background:#2267E8">{{ 'docs.carousel.ovSlide1' | translate }}</div></hrm-carousel-slide>
            <hrm-carousel-slide><div class="s" style="background:#16A34A">{{ 'docs.carousel.ovSlide2' | translate }}</div></hrm-carousel-slide>
            <hrm-carousel-slide><div class="s" style="background:#D97706">{{ 'docs.carousel.ovSlide3' | translate }}</div></hrm-carousel-slide>
          </hrm-carousel>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.carousel.purpose' | translate"
          [when]="when"
          [behavior]="'docs.carousel.behavior' | translate"
          [avoid]="'docs.carousel.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.carousel.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.carousel.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.carousel.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.carousel.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.carousel.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.carousel.exDotsT' | translate"
          [desc]="'docs.carousel.exDotsD' | translate">
          <sg-row>
            <div style="width:100%;max-width:480px">
              <hrm-carousel>
                <hrm-carousel-slide><div class="s" style="background:#2267E8">{{ 'docs.carousel.notice1' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#16A34A">{{ 'docs.carousel.notice2' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#D97706">{{ 'docs.carousel.notice3' | translate }}</div></hrm-carousel-slide>
              </hrm-carousel>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.carousel.exAutoplayT' | translate"
          [desc]="'docs.carousel.exAutoplayD' | translate">
          <sg-row>
            <div style="width:100%;max-width:480px">
              <hrm-carousel [autoplay]="true" [autoplaySpeed]="2500">
                <hrm-carousel-slide><div class="s" style="background:#2267E8">{{ 'docs.carousel.auto1' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#0EA5E9">{{ 'docs.carousel.auto2' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#16A34A">{{ 'docs.carousel.auto3' | translate }}</div></hrm-carousel-slide>
              </hrm-carousel>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.carousel.exFadeT' | translate"
          [desc]="'docs.carousel.exFadeD' | translate">
          <sg-row>
            <div style="width:100%;max-width:480px">
              <hrm-carousel effect="fade">
                <hrm-carousel-slide><div class="s" style="background:#7C3AED">{{ 'docs.carousel.fade1' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#DB2777">{{ 'docs.carousel.fade2' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#2267E8">{{ 'docs.carousel.fade3' | translate }}</div></hrm-carousel-slide>
              </hrm-carousel>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.carousel.exArrowsT' | translate"
          [desc]="'docs.carousel.exArrowsD' | translate">
          <sg-row>
            <div style="width:100%;max-width:480px">
              <hrm-carousel [arrows]="true">
                <hrm-carousel-slide><div class="s" style="background:#0F766E">{{ 'docs.carousel.arrow1' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#B45309">{{ 'docs.carousel.arrow2' | translate }}</div></hrm-carousel-slide>
                <hrm-carousel-slide><div class="s" style="background:#4F46E5">{{ 'docs.carousel.arrow3' | translate }}</div></hrm-carousel-slide>
              </hrm-carousel>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;9295a0121bb0a10cc4c004ddce6475e80e80b2af24837e4a2a57ff413a8e3405;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/carousel.ts */\n.s {\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: var(--radius-lg);\n  font-weight: 500;\n}\n/*# sourceMappingURL=carousel.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCarousel, { className: "SgDocCarousel", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/carousel.ts", lineNumber: 98 });
})();
export {
  SgDocCarousel
};
//# sourceMappingURL=chunk-FKO3KSCC.js.map
