import {
  CdkDrag,
  CdkDragHandle
} from "./chunk-KLLXE4WM.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import {
  OverlayRef,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef
} from "./chunk-44R6GU63.js";
import {
  ComponentPortal
} from "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import {
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  hasModifierKey
} from "./chunk-PKUWSVS6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  fromEventOutsideAngular,
  generateClassName,
  isNotNil
} from "./chunk-VUIKJ27O.js";
import {
  DomSanitizer
} from "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadValues,
  booleanAttribute,
  filter,
  fromEvent,
  inject,
  input,
  map,
  merge,
  setClassMetadata,
  signal,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-image.mjs
var _c0 = ["*"];
var _c1 = ["imgRef"];
var _c2 = ["imagePreviewWrapper"];
function NzImagePreviewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function NzImagePreviewComponent_Conditional_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSwitchLeft($event));
    });
    \u0275\u0275element(1, "nz-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275listener("click", function NzImagePreviewComponent_Conditional_2_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSwitchRight($event));
    });
    \u0275\u0275element(3, "nz-icon", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-image-preview-switch-left-disabled", ctx_r1.index <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ant-image-preview-switch-right-disabled", ctx_r1.index >= ctx_r1.images.length - 1);
  }
}
function NzImagePreviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.index + 1, " / ", ctx_r1.images.length);
  }
}
function NzImagePreviewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("click", function NzImagePreviewComponent_For_6_Template_li_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(option_r4.onClick());
    });
    \u0275\u0275element(1, "nz-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-image-preview-operations-operation-disabled", ctx_r1.zoomOutDisabled && option_r4.type === "zoomOut");
    \u0275\u0275advance();
    \u0275\u0275property("nzType", option_r4.icon)("nzRotate", option_r4.rotate ?? 0);
  }
}
function NzImagePreviewComponent_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20, 1);
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", image_r5.width)("height", image_r5.height)("transform", ctx_r1.previewImageTransform());
    \u0275\u0275attribute("src", ctx_r1.sanitizerResourceUrl(image_r5.src), \u0275\u0275sanitizeUrl)("srcset", image_r5.srcset)("alt", image_r5.alt);
  }
}
function NzImagePreviewComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzImagePreviewComponent_For_15_Conditional_0_Template, 2, 9, "img", 19);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional($index_r6 === ctx_r1.index ? 0 : -1);
  }
}
var NzImageGroupComponent = class _NzImageGroupComponent {
  nzScaleStep = null;
  images = [];
  addImage(image) {
    this.images.push(image);
  }
  static \u0275fac = function NzImageGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzImageGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzImageGroupComponent,
    selectors: [["nz-image-group"]],
    inputs: {
      nzScaleStep: "nzScaleStep"
    },
    exportAs: ["nzImageGroup"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzImageGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-group",
      exportAs: "nzImageGroup",
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME$1 = "image";
var NzImagePreviewOptions = class {
  nzKeyboard = true;
  nzNoAnimation = false;
  nzMaskClosable = true;
  nzCloseOnNavigation = true;
  nzZIndex;
  nzZoom;
  nzRotate;
  nzFlipHorizontally;
  nzFlipVertically;
  nzScaleStep;
  nzDirection;
};
function getFitContentPosition(params) {
  let fixPos = {};
  if (params.width <= params.clientWidth && params.height <= params.clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  }
  if (params.width > params.clientWidth || params.height > params.clientHeight) {
    fixPos = {
      x: fitPoint(params.left, params.width, params.clientWidth),
      y: fitPoint(params.top, params.height, params.clientHeight)
    };
  }
  return fixPos;
}
function getOffset(node) {
  const box = node.getBoundingClientRect();
  const docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height
  };
}
function fitPoint(start, size, clientSize) {
  const startAddSize = start + size;
  const offsetStart = (size - clientSize) / 2;
  let distance = null;
  if (size > clientSize) {
    if (start > 0) {
      distance = offsetStart;
    }
    if (start < 0 && startAddSize < clientSize) {
      distance = -offsetStart;
    }
  } else {
    if (start < 0 || startAddSize > clientSize) {
      distance = start < 0 ? offsetStart : -offsetStart;
    }
  }
  return distance;
}
var initialPosition = {
  x: 0,
  y: 0
};
var NZ_DEFAULT_SCALE_STEP = 0.5;
var NZ_DEFAULT_ZOOM = 1;
var NZ_DEFAULT_ROTATE = 0;
var NzImagePreviewComponent = class _NzImagePreviewComponent {
  document = inject(DOCUMENT);
  ngZone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  nzConfigService = inject(NzConfigService);
  sanitizer = inject(DomSanitizer);
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  config = inject(NzImagePreviewOptions);
  _defaultNzZoom = NZ_DEFAULT_ZOOM;
  _defaultNzScaleStep = NZ_DEFAULT_SCALE_STEP;
  _defaultNzRotate = NZ_DEFAULT_ROTATE;
  isDragging = signal(false, ...ngDevMode ? [{
    debugName: "isDragging"
  }] : []);
  images = [];
  index = 0;
  visible = true;
  scaleStepMap = /* @__PURE__ */ new Map();
  previewImageTransform = signal("", ...ngDevMode ? [{
    debugName: "previewImageTransform"
  }] : []);
  previewImageWrapperTransform = signal("", ...ngDevMode ? [{
    debugName: "previewImageWrapperTransform"
  }] : []);
  operations = [{
    icon: "close",
    onClick: () => {
      this.onClose();
    },
    type: "close"
  }, {
    icon: "zoom-in",
    onClick: () => {
      this.onZoomIn();
    },
    type: "zoomIn"
  }, {
    icon: "zoom-out",
    onClick: () => {
      this.onZoomOut();
    },
    type: "zoomOut"
  }, {
    icon: "rotate-right",
    onClick: () => {
      this.onRotateRight();
    },
    type: "rotateRight"
  }, {
    icon: "rotate-left",
    onClick: () => {
      this.onRotateLeft();
    },
    type: "rotateLeft"
  }, {
    icon: "swap",
    onClick: () => {
      this.onHorizontalFlip();
    },
    type: "flipHorizontally"
  }, {
    icon: "swap",
    onClick: () => {
      this.onVerticalFlip();
    },
    type: "flipVertically",
    rotate: 90
  }];
  zoomOutDisabled = false;
  position = __spreadValues({}, initialPosition);
  previewRef;
  closeClick = new EventEmitter();
  imageRef;
  imagePreviewWrapper;
  zoom = this.config.nzZoom ?? this._defaultNzZoom;
  rotate = this.config.nzRotate ?? this._defaultNzRotate;
  scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
  flipHorizontally = this.config.nzFlipHorizontally ?? false;
  flipVertically = this.config.nzFlipVertically ?? false;
  get maskClosable() {
    const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    return this.config.nzMaskClosable ?? defaultConfig.nzMaskClosable ?? true;
  }
  constructor() {
    this.updateZoomOutDisabled();
    this.updatePreviewImageTransform();
    this.updatePreviewImageWrapperTransform();
  }
  ngOnInit() {
    merge(fromEventOutsideAngular(this.imagePreviewWrapper.nativeElement, "mousedown").pipe(map(() => true)), fromEventOutsideAngular(this.imagePreviewWrapper.nativeElement, "mouseup").pipe(map(() => false))).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((dragging) => this.isDragging.set(dragging));
    fromEventOutsideAngular(this.imagePreviewWrapper.nativeElement, "wheel").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.ngZone.run(() => this.wheelZoomEventHandler(event));
    });
    fromEventOutsideAngular(this.document, "keydown").pipe(filter((event) => event.keyCode === ESCAPE), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.ngZone.run(() => {
        this.onClose();
        this.markForCheck();
      });
    });
  }
  setImages(images, scaleStepMap) {
    if (scaleStepMap) this.scaleStepMap = scaleStepMap;
    this.images = images;
    this.markForCheck();
  }
  switchTo(index) {
    this.index = index;
    this.markForCheck();
  }
  next() {
    if (this.index < this.images.length - 1) {
      this.reset();
      this.index++;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.markForCheck();
    }
  }
  prev() {
    if (this.index > 0) {
      this.reset();
      this.index--;
      this.updatePreviewImageTransform();
      this.updatePreviewImageWrapperTransform();
      this.updateZoomOutDisabled();
      this.markForCheck();
    }
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  onClose() {
    this.visible = false;
    this.closeClick.emit();
  }
  onZoomIn() {
    const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
    this.zoom += zoomStep;
    this.updatePreviewImageTransform();
    this.updateZoomOutDisabled();
  }
  onZoomOut() {
    if (this.zoom > 1) {
      const zoomStep = this.scaleStepMap.get(this.images[this.index].src ?? this.images[this.index].srcset) ?? this.scaleStep;
      this.zoom -= zoomStep;
      this.updatePreviewImageTransform();
      this.updateZoomOutDisabled();
      if (this.zoom <= 1) {
        this.reCenterImage();
      }
    }
  }
  onRotateRight() {
    this.rotate += 90;
    this.updatePreviewImageTransform();
  }
  onRotateLeft() {
    this.rotate -= 90;
    this.updatePreviewImageTransform();
  }
  onSwitchLeft(event) {
    event.preventDefault();
    event.stopPropagation();
    this.prev();
  }
  onSwitchRight(event) {
    event.preventDefault();
    event.stopPropagation();
    this.next();
  }
  onHorizontalFlip() {
    this.flipHorizontally = !this.flipHorizontally;
    this.updatePreviewImageTransform();
  }
  onVerticalFlip() {
    this.flipVertically = !this.flipVertically;
    this.updatePreviewImageTransform();
  }
  wheelZoomEventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.handlerImageTransformationWhileZoomingWithMouse(event, event.deltaY);
    this.handleImageScaleWhileZoomingWithMouse(event.deltaY);
    this.updatePreviewImageWrapperTransform();
    this.updatePreviewImageTransform();
    this.markForCheck();
  }
  onDragEnd(event) {
    this.isDragging.set(false);
    const width = this.imageRef.nativeElement.offsetWidth * this.zoom;
    const height = this.imageRef.nativeElement.offsetHeight * this.zoom;
    const {
      left,
      top
    } = getOffset(this.imageRef.nativeElement);
    const {
      width: clientWidth,
      height: clientHeight
    } = getClientSize();
    const isRotate = this.rotate % 180 !== 0;
    const fitContentParams = {
      width: isRotate ? height : width,
      height: isRotate ? width : height,
      left,
      top,
      clientWidth,
      clientHeight
    };
    const fitContentPos = getFitContentPosition(fitContentParams);
    if (isNotNil(fitContentPos.x) || isNotNil(fitContentPos.y)) {
      this.position = __spreadValues(__spreadValues({}, this.position), fitContentPos);
    } else if (!isNotNil(fitContentPos.x) && !isNotNil(fitContentPos.y)) {
      this.position = {
        x: event.source.getFreeDragPosition().x,
        y: event.source.getFreeDragPosition().y
      };
    }
  }
  sanitizerResourceUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  updatePreviewImageTransform() {
    this.previewImageTransform.set(`scale3d(${this.zoom * (this.flipHorizontally ? -1 : 1)}, ${this.zoom * (this.flipVertically ? -1 : 1)}, 1) rotate(${this.rotate}deg)`);
  }
  updatePreviewImageWrapperTransform() {
    this.previewImageWrapperTransform.set(`translate3d(${this.position.x}px, ${this.position.y}px, 0)`);
  }
  updateZoomOutDisabled() {
    this.zoomOutDisabled = this.zoom <= 1;
  }
  handlerImageTransformationWhileZoomingWithMouse(event, deltaY) {
    let scaleValue;
    const imageElement = this.imageRef.nativeElement;
    const elementTransform = getComputedStyle(imageElement).transform;
    const matrixValue = elementTransform.match(/matrix.*\((.+)\)/);
    if (matrixValue) {
      scaleValue = +matrixValue[1].split(", ")[0];
    } else {
      scaleValue = this.zoom;
    }
    const x = (event.clientX - imageElement.getBoundingClientRect().x) / scaleValue;
    const y = (event.clientY - imageElement.getBoundingClientRect().y) / scaleValue;
    const halfOfScaleStepValue = deltaY < 0 ? this.scaleStep / 2 : -this.scaleStep / 2;
    this.position.x += -x * halfOfScaleStepValue * 2 + imageElement.offsetWidth * halfOfScaleStepValue;
    this.position.y += -y * halfOfScaleStepValue * 2 + imageElement.offsetHeight * halfOfScaleStepValue;
  }
  handleImageScaleWhileZoomingWithMouse(deltaY) {
    if (this.isZoomedInWithMouseWheel(deltaY)) {
      this.onZoomIn();
    } else {
      this.onZoomOut();
    }
    if (this.zoom <= 1) {
      this.reCenterImage();
    }
  }
  isZoomedInWithMouseWheel(delta) {
    return delta < 0;
  }
  reset() {
    this.zoom = this.config.nzZoom ?? this._defaultNzZoom;
    this.scaleStep = this.config.nzScaleStep ?? this._defaultNzScaleStep;
    this.rotate = this.config.nzRotate ?? this._defaultNzRotate;
    this.flipHorizontally = false;
    this.flipVertically = false;
    this.reCenterImage();
  }
  reCenterImage() {
    this.position = __spreadValues({}, initialPosition);
  }
  static \u0275fac = function NzImagePreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzImagePreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzImagePreviewComponent,
    selectors: [["nz-image-preview"]],
    viewQuery: function NzImagePreviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5)(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imagePreviewWrapper = _t.first);
      }
    },
    hostAttrs: [1, "ant-image-preview-root"],
    hostVars: 4,
    hostBindings: function NzImagePreviewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("z-index", ctx.config.nzZIndex);
        \u0275\u0275classProp("ant-image-preview-moving", ctx.isDragging());
      }
    },
    exportAs: ["nzImagePreview"],
    decls: 17,
    vars: 5,
    consts: [["imagePreviewWrapper", ""], ["imgRef", ""], [1, "ant-image-preview-mask"], [1, "ant-image-preview-operations-wrapper"], [1, "ant-image-preview-operations"], [1, "ant-image-preview-operations-progress"], [1, "ant-image-preview-operations-operation", 3, "ant-image-preview-operations-operation-disabled"], ["tabindex", "-1", 1, "ant-image-preview-wrap", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "ant-image-preview"], ["tabindex", "0", "aria-hidden", "true", 1, "ant-image-preview-focus-trap"], [1, "ant-image-preview-content"], [1, "ant-image-preview-body"], ["cdkDrag", "", 1, "ant-image-preview-img-wrapper", 3, "cdkDragEnded", "cdkDragFreeDragPosition"], [1, "ant-image-preview-switch-left", 3, "click"], ["nzType", "left", "nzTheme", "outline"], [1, "ant-image-preview-switch-right", 3, "click"], ["nzType", "right", "nzTheme", "outline"], [1, "ant-image-preview-operations-operation", 3, "click"], ["nzTheme", "outline", 1, "ant-image-preview-operations-icon", 3, "nzType", "nzRotate"], ["cdkDragHandle", "", 1, "ant-image-preview-img", 3, "width", "height", "transform"], ["cdkDragHandle", "", 1, "ant-image-preview-img"]],
    template: function NzImagePreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275conditionalCreate(2, NzImagePreviewComponent_Conditional_2_Template, 4, 4);
        \u0275\u0275elementStart(3, "ul", 4);
        \u0275\u0275conditionalCreate(4, NzImagePreviewComponent_Conditional_4_Template, 2, 2, "li", 5);
        \u0275\u0275repeaterCreate(5, NzImagePreviewComponent_For_6_Template, 2, 4, "li", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275listener("click", function NzImagePreviewComponent_Template_div_click_7_listener($event) {
          return ctx.maskClosable && $event.target === $event.currentTarget && ctx.onClose();
        });
        \u0275\u0275elementStart(8, "div", 8);
        \u0275\u0275element(9, "div", 9);
        \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12, 0);
        \u0275\u0275listener("cdkDragEnded", function NzImagePreviewComponent_Template_div_cdkDragEnded_12_listener($event) {
          return ctx.onDragEnd($event);
        });
        \u0275\u0275repeaterCreate(14, NzImagePreviewComponent_For_15_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(16, "div", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.images.length > 1 ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.images.length > 1 ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.operations);
        \u0275\u0275advance(7);
        \u0275\u0275styleProp("transform", ctx.previewImageWrapperTransform());
        \u0275\u0275property("cdkDragFreeDragPosition", ctx.position);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.images);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, CdkDragHandle, CdkDrag],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImagePreviewComponent, [{
    type: Component,
    args: [{
      selector: "nz-image-preview",
      exportAs: "nzImagePreview",
      template: `
    <div class="ant-image-preview-mask"></div>

    <div class="ant-image-preview-operations-wrapper">
      @if (images.length > 1) {
        <div
          class="ant-image-preview-switch-left"
          [class.ant-image-preview-switch-left-disabled]="index <= 0"
          (click)="onSwitchLeft($event)"
        >
          <nz-icon nzType="left" nzTheme="outline" />
        </div>
        <div
          class="ant-image-preview-switch-right"
          [class.ant-image-preview-switch-right-disabled]="index >= images.length - 1"
          (click)="onSwitchRight($event)"
        >
          <nz-icon nzType="right" nzTheme="outline" />
        </div>
      }

      <ul class="ant-image-preview-operations">
        @if (images.length > 1) {
          <li class="ant-image-preview-operations-progress">{{ index + 1 }} / {{ images.length }}</li>
        }

        @for (option of operations; track option) {
          <li
            class="ant-image-preview-operations-operation"
            [class.ant-image-preview-operations-operation-disabled]="zoomOutDisabled && option.type === 'zoomOut'"
            (click)="option.onClick()"
          >
            <nz-icon
              class="ant-image-preview-operations-icon"
              [nzType]="option.icon"
              [nzRotate]="option.rotate ?? 0"
              nzTheme="outline"
            />
          </li>
        }
      </ul>
    </div>

    <div
      class="ant-image-preview-wrap"
      tabindex="-1"
      (click)="maskClosable && $event.target === $event.currentTarget && onClose()"
    >
      <div class="ant-image-preview" role="dialog" aria-modal="true">
        <div tabindex="0" aria-hidden="true" class="ant-image-preview-focus-trap"></div>
        <div class="ant-image-preview-content">
          <div class="ant-image-preview-body">
            <div
              class="ant-image-preview-img-wrapper"
              #imagePreviewWrapper
              cdkDrag
              [style.transform]="previewImageWrapperTransform()"
              [cdkDragFreeDragPosition]="position"
              (cdkDragEnded)="onDragEnd($event)"
            >
              @for (image of images; track image) {
                @if ($index === index) {
                  <img
                    cdkDragHandle
                    class="ant-image-preview-img"
                    #imgRef
                    [attr.src]="sanitizerResourceUrl(image.src)"
                    [attr.srcset]="image.srcset"
                    [attr.alt]="image.alt"
                    [style.width]="image.width"
                    [style.height]="image.height"
                    [style.transform]="previewImageTransform()"
                  />
                }
              }
            </div>
          </div>
        </div>
        <div tabindex="0" aria-hidden="true" class="ant-image-preview-focus-trap"></div>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-image-preview-root",
        "[class.ant-image-preview-moving]": "isDragging()",
        "[style.zIndex]": "config.nzZIndex"
      },
      imports: [NzIconModule, CdkDragHandle, CdkDrag]
    }]
  }], () => [], {
    imageRef: [{
      type: ViewChild,
      args: ["imgRef"]
    }],
    imagePreviewWrapper: [{
      type: ViewChild,
      args: ["imagePreviewWrapper", {
        static: true
      }]
    }]
  });
})();
var CLASS_NAME = "ant-image-preview";
var FADE_CLASS_NAME_MAP = {
  enter: generateClassName(CLASS_NAME, "fade-motion-enter"),
  leave: generateClassName(CLASS_NAME, "fade-motion-leave")
};
var FADE_OUT_KEYFRAME_NAME = "antFadeOut";
var NzImagePreviewRef = class {
  previewInstance;
  config;
  overlayRef;
  destroy$ = new Subject();
  constructor(previewInstance, config, overlayRef) {
    this.previewInstance = previewInstance;
    this.config = config;
    this.overlayRef = overlayRef;
    if (config.nzKeyboard) {
      overlayRef.keydownEvents().pipe(filter((event) => (event.keyCode === ESCAPE || event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW) && !hasModifierKey(event))).subscribe((event) => {
        event.preventDefault();
        if (event.keyCode === ESCAPE) {
          previewInstance.onClose();
        }
        if (event.keyCode === LEFT_ARROW) {
          this.prev();
        }
        if (event.keyCode === RIGHT_ARROW) {
          this.next();
        }
      });
    }
    overlayRef.detachments().subscribe(() => this.overlayRef.dispose());
    previewInstance.closeClick.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => this.close());
    this._startEnterAnimation();
  }
  get element() {
    return this.previewInstance.elementRef.nativeElement;
  }
  get _animationsEnabled() {
    return !(this.config.nzNoAnimation ?? false);
  }
  _startEnterAnimation() {
    if (this._animationsEnabled) {
      this.element.classList.add(FADE_CLASS_NAME_MAP.enter);
    }
  }
  _startLeaveAnimation() {
    if (this._animationsEnabled) {
      this.element.classList.remove(FADE_CLASS_NAME_MAP.enter);
      this.element.classList.add(FADE_CLASS_NAME_MAP.leave);
    }
  }
  switchTo(index) {
    this.previewInstance.switchTo(index);
  }
  next() {
    this.previewInstance.next();
  }
  prev() {
    this.previewInstance.prev();
  }
  close() {
    if (this._animationsEnabled) {
      const onAnimationEnd = (event) => {
        if (event.animationName === FADE_OUT_KEYFRAME_NAME) {
          this.element.removeEventListener("animationend", onAnimationEnd);
          this._doClose();
        }
      };
      this.element.addEventListener("animationend", onAnimationEnd);
      this._startLeaveAnimation();
    } else {
      this._doClose();
    }
  }
  _doClose() {
    this.destroy$.next();
    this.overlayRef.dispose();
    this.previewInstance = null;
  }
};
var NzImageService = class _NzImageService {
  injector = inject(Injector);
  nzConfigService = inject(NzConfigService);
  directionality = inject(Directionality);
  preview(images, options, zoomMap) {
    return this.display(images, options, zoomMap);
  }
  display(images, config, scaleStepMap) {
    const configMerged = __spreadValues(__spreadValues({}, new NzImagePreviewOptions()), config ?? {});
    const overlayRef = this.createOverlay(configMerged);
    const previewComponent = this.attachPreviewComponent(overlayRef, configMerged);
    previewComponent.setImages(images, scaleStepMap);
    const previewRef = new NzImagePreviewRef(previewComponent, configMerged, overlayRef);
    previewComponent.previewRef = previewRef;
    return previewRef;
  }
  attachPreviewComponent(overlayRef, config) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [{
        provide: OverlayRef,
        useValue: overlayRef
      }, {
        provide: NzImagePreviewOptions,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(NzImagePreviewComponent, null, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
  createOverlay(config) {
    const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME$1) || {};
    return createOverlayRef(this.injector, {
      scrollStrategy: createBlockScrollStrategy(this.injector),
      positionStrategy: createGlobalPositionStrategy(this.injector),
      disposeOnNavigation: config.nzCloseOnNavigation ?? globalConfig.nzCloseOnNavigation ?? true,
      direction: config.nzDirection || globalConfig.nzDirection || this.directionality.value
    });
  }
  static \u0275fac = function NzImageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzImageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzImageService,
    factory: _NzImageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "image";
var NzImageDirective = (() => {
  let _nzDisablePreview_decorators;
  let _nzDisablePreview_initializers = [];
  let _nzDisablePreview_extraInitializers = [];
  let _nzFallback_decorators;
  let _nzFallback_initializers = [];
  let _nzFallback_extraInitializers = [];
  let _nzPlaceholder_decorators;
  let _nzPlaceholder_initializers = [];
  let _nzPlaceholder_extraInitializers = [];
  let _nzScaleStep_decorators;
  let _nzScaleStep_initializers = [];
  let _nzScaleStep_extraInitializers = [];
  return class NzImageDirective2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzDisablePreview_decorators = [WithConfig()];
      _nzFallback_decorators = [WithConfig()];
      _nzPlaceholder_decorators = [WithConfig()];
      _nzScaleStep_decorators = [WithConfig()];
      __esDecorate(null, null, _nzDisablePreview_decorators, {
        kind: "field",
        name: "nzDisablePreview",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDisablePreview" in obj,
          get: (obj) => obj.nzDisablePreview,
          set: (obj, value) => {
            obj.nzDisablePreview = value;
          }
        },
        metadata: _metadata
      }, _nzDisablePreview_initializers, _nzDisablePreview_extraInitializers);
      __esDecorate(null, null, _nzFallback_decorators, {
        kind: "field",
        name: "nzFallback",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzFallback" in obj,
          get: (obj) => obj.nzFallback,
          set: (obj, value) => {
            obj.nzFallback = value;
          }
        },
        metadata: _metadata
      }, _nzFallback_initializers, _nzFallback_extraInitializers);
      __esDecorate(null, null, _nzPlaceholder_decorators, {
        kind: "field",
        name: "nzPlaceholder",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPlaceholder" in obj,
          get: (obj) => obj.nzPlaceholder,
          set: (obj, value) => {
            obj.nzPlaceholder = value;
          }
        },
        metadata: _metadata
      }, _nzPlaceholder_initializers, _nzPlaceholder_extraInitializers);
      __esDecorate(null, null, _nzScaleStep_decorators, {
        kind: "field",
        name: "nzScaleStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzScaleStep" in obj,
          get: (obj) => obj.nzScaleStep,
          set: (obj, value) => {
            obj.nzScaleStep = value;
          }
        },
        metadata: _metadata
      }, _nzScaleStep_initializers, _nzScaleStep_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    document = inject(DOCUMENT);
    nzConfigService = inject(NzConfigService);
    elementRef = inject(ElementRef);
    nzImageService = inject(NzImageService);
    cdr = inject(ChangeDetectorRef);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzSrc = "";
    nzSrcset = "";
    nzDisablePreview = __runInitializers(this, _nzDisablePreview_initializers, false);
    nzFallback = (__runInitializers(this, _nzDisablePreview_extraInitializers), __runInitializers(this, _nzFallback_initializers, null));
    nzPlaceholder = (__runInitializers(this, _nzFallback_extraInitializers), __runInitializers(this, _nzPlaceholder_initializers, null));
    nzScaleStep = (__runInitializers(this, _nzPlaceholder_extraInitializers), __runInitializers(this, _nzScaleStep_initializers, null));
    dir = __runInitializers(this, _nzScaleStep_extraInitializers);
    backLoadImage;
    status = "normal";
    backLoadDestroy$ = new Subject();
    parentGroup = inject(NzImageGroupComponent, {
      optional: true
    });
    get previewable() {
      return !this.nzDisablePreview && this.status !== "error";
    }
    ngOnInit() {
      this.backLoad();
      if (this.parentGroup) {
        this.parentGroup.addImage(this);
      }
      if (this.directionality) {
        this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
          this.dir = direction;
          this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
      }
    }
    onPreview() {
      if (!this.previewable) {
        return;
      }
      if (this.parentGroup) {
        const previewAbleImages = this.parentGroup.images.filter((e) => e.previewable);
        const previewImages = previewAbleImages.map((e) => ({
          src: e.nzSrc,
          srcset: e.nzSrcset
        }));
        const previewIndex = previewAbleImages.findIndex((el) => this === el);
        const scaleStepMap = /* @__PURE__ */ new Map();
        previewAbleImages.forEach((imageDirective) => {
          scaleStepMap.set(imageDirective.nzSrc ?? imageDirective.nzSrcset, imageDirective.nzScaleStep ?? this.parentGroup.nzScaleStep ?? this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP);
        });
        const previewRef = this.nzImageService.preview(previewImages, {
          nzDirection: this.dir
        }, scaleStepMap);
        previewRef.switchTo(previewIndex);
      } else {
        const previewImages = [{
          src: this.nzSrc,
          srcset: this.nzSrcset
        }];
        this.nzImageService.preview(previewImages, {
          nzDirection: this.dir,
          nzScaleStep: this.nzScaleStep ?? NZ_DEFAULT_SCALE_STEP
        });
      }
    }
    getElement() {
      return this.elementRef;
    }
    ngOnChanges(changes) {
      const {
        nzSrc
      } = changes;
      if (nzSrc) {
        this.getElement().nativeElement.src = nzSrc.currentValue;
        this.backLoad();
      }
    }
    /**
     * use internal Image object handle fallback & placeholder
     *
     * @private
     */
    backLoad() {
      this.backLoadImage = this.document.createElement("img");
      this.backLoadImage.src = this.nzSrc;
      this.backLoadImage.srcset = this.nzSrcset;
      this.status = "loading";
      this.backLoadDestroy$.next();
      this.backLoadDestroy$.complete();
      this.backLoadDestroy$ = new Subject();
      if (this.backLoadImage.complete) {
        this.status = "normal";
        this.getElement().nativeElement.src = this.nzSrc;
        this.getElement().nativeElement.srcset = this.nzSrcset;
      } else {
        if (this.nzPlaceholder) {
          this.getElement().nativeElement.src = this.nzPlaceholder;
          this.getElement().nativeElement.srcset = "";
        } else {
          this.getElement().nativeElement.src = this.nzSrc;
          this.getElement().nativeElement.srcset = this.nzSrcset;
        }
        fromEvent(this.backLoadImage, "load").pipe(takeUntil(this.backLoadDestroy$), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
          this.status = "normal";
          this.getElement().nativeElement.src = this.nzSrc;
          this.getElement().nativeElement.srcset = this.nzSrcset;
        });
        fromEvent(this.backLoadImage, "error").pipe(takeUntil(this.backLoadDestroy$), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
          this.status = "error";
          if (this.nzFallback) {
            this.getElement().nativeElement.src = this.nzFallback;
            this.getElement().nativeElement.srcset = "";
          }
        });
      }
    }
    static \u0275fac = function NzImageDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzImageDirective2)();
    };
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: NzImageDirective2,
      selectors: [["img", "nz-image", ""]],
      hostBindings: function NzImageDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NzImageDirective_click_HostBindingHandler() {
            return ctx.onPreview();
          });
        }
      },
      inputs: {
        nzSrc: "nzSrc",
        nzSrcset: "nzSrcset",
        nzDisablePreview: [2, "nzDisablePreview", "nzDisablePreview", booleanAttribute],
        nzFallback: "nzFallback",
        nzPlaceholder: "nzPlaceholder",
        nzScaleStep: "nzScaleStep"
      },
      exportAs: ["nzImage"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageDirective, [{
    type: Directive,
    args: [{
      selector: "img[nz-image]",
      exportAs: "nzImage",
      host: {
        "(click)": "onPreview()"
      }
    }]
  }], null, {
    nzSrc: [{
      type: Input
    }],
    nzSrcset: [{
      type: Input
    }],
    nzDisablePreview: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzFallback: [{
      type: Input
    }],
    nzPlaceholder: [{
      type: Input
    }],
    nzScaleStep: [{
      type: Input
    }]
  });
})();
var NzImageModule = class _NzImageModule {
  static \u0275fac = function NzImageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzImageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzImageModule,
    imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
    exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [NzImageService],
    imports: [NzImagePreviewComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzImageModule, [{
    type: NgModule,
    args: [{
      imports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
      providers: [NzImageService]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-image.ts
var HrmImage = class _HrmImage {
  constructor() {
    this.src = input("", ...ngDevMode ? [{ debugName: "src" }] : (
      /* istanbul ignore next */
      []
    ));
    this.alt = input("", ...ngDevMode ? [{ debugName: "alt" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = input(null, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(null, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.preview = input(true, ...ngDevMode ? [{ debugName: "preview" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fallback = input("", ...ngDevMode ? [{ debugName: "fallback" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmImage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmImage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmImage, selectors: [["hrm-image"]], hostAttrs: [1, "hrm-image"], inputs: { src: [1, "src"], alt: [1, "alt"], width: [1, "width"], height: [1, "height"], preview: [1, "preview"], fallback: [1, "fallback"] }, decls: 1, vars: 12, consts: [["nz-image", "", 3, "nzSrc", "nzFallback", "nzDisablePreview", "alt"]], template: function HrmImage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "img", 0);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.width(), "px")("height", ctx.height(), "px")("border-radius", "var(--radius-lg)")("object-fit", "cover");
        \u0275\u0275property("nzSrc", ctx.src())("nzFallback", ctx.fallback() || null)("nzDisablePreview", !ctx.preview())("alt", ctx.alt());
      }
    }, dependencies: [NzImageModule, NzImageDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmImage, [{
    type: Component,
    args: [{
      selector: "hrm-image",
      imports: [NzImageModule],
      template: `
    <img
      nz-image
      [nzSrc]="src()"
      [nzFallback]="fallback() || null"
      [nzDisablePreview]="!preview()"
      [alt]="alt()"
      [style.width.px]="width()"
      [style.height.px]="height()"
      [style.border-radius]="'var(--radius-lg)'"
      [style.object-fit]="'cover'" />
  `,
      host: { class: "hrm-image" }
    }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], alt: [{ type: Input, args: [{ isSignal: true, alias: "alt", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }], preview: [{ type: Input, args: [{ isSignal: true, alias: "preview", required: false }] }], fallback: [{ type: Input, args: [{ isSignal: true, alias: "fallback", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmImage, { className: "HrmImage", filePath: "libs/hrm-ui/src/lib/data-display/hrm-image.ts", lineNumber: 22 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/image.ts
var SgDocImage = class _SgDocImage {
  constructor() {
    this.when = [
      "docs.image.when1",
      "docs.image.when2",
      "docs.image.when3"
    ];
    this.photo = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="240" height="240" fill="%232267E8"/><circle cx="120" cy="96" r="44" fill="white" opacity="0.9"/><rect x="60" y="150" width="120" height="70" rx="34" fill="white" opacity="0.9"/></svg>';
    this.doc = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="220"><rect width="320" height="220" fill="%23E8EEFB"/><rect x="40" y="36" width="240" height="18" rx="4" fill="%232267E8"/><rect x="40" y="74" width="200" height="10" rx="3" fill="%2394A3B8"/><rect x="40" y="96" width="220" height="10" rx="3" fill="%2394A3B8"/><rect x="40" y="118" width="160" height="10" rx="3" fill="%2394A3B8"/><rect x="40" y="150" width="120" height="34" rx="6" fill="%232267E8"/></svg>';
    this.broken = "https://invalid.example/khong-ton-tai.png";
    this.fallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="240" height="240" fill="%23F1F5F9"/><rect x="70" y="70" width="100" height="100" rx="10" fill="none" stroke="%2394A3B8" stroke-width="6"/><circle cx="102" cy="104" r="12" fill="%2394A3B8"/><path d="M78 158 L118 116 L150 148 L166 132 L166 162 Z" fill="%2394A3B8"/></svg>';
    this.paperA = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="168"><rect width="240" height="168" fill="%23DBEAFE"/><rect x="20" y="24" width="90" height="90" rx="6" fill="%2394A3B8"/><rect x="126" y="30" width="94" height="12" rx="3" fill="%232267E8"/><rect x="126" y="54" width="80" height="9" rx="3" fill="%2394A3B8"/><rect x="126" y="72" width="88" height="9" rx="3" fill="%2394A3B8"/></svg>';
    this.paperB = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="168"><rect width="240" height="168" fill="%23DCFCE7"/><rect x="30" y="24" width="180" height="16" rx="4" fill="%2316A34A"/><rect x="50" y="54" width="140" height="9" rx="3" fill="%2394A3B8"/><rect x="50" y="72" width="140" height="9" rx="3" fill="%2394A3B8"/><circle cx="120" cy="120" r="24" fill="none" stroke="%2316A34A" stroke-width="5"/></svg>';
    this.paperC = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="168"><rect width="240" height="168" fill="%23FEF3C7"/><rect x="30" y="22" width="120" height="14" rx="4" fill="%23D97706"/><rect x="30" y="48" width="180" height="8" rx="3" fill="%2394A3B8"/><rect x="30" y="64" width="180" height="8" rx="3" fill="%2394A3B8"/><rect x="30" y="80" width="150" height="8" rx="3" fill="%2394A3B8"/><rect x="150" y="118" width="60" height="30" rx="4" fill="none" stroke="%23D97706" stroke-width="3"/></svg>';
  }
  static {
    this.\u0275fac = function SgDocImage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocImage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocImage, selectors: [["sg-doc-image"]], decls: 56, vars: 102, consts: [["category", "Content", 3, "title", "desc"], ["sgOverview", ""], [3, "src", "width", "height", "alt"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "src", "width", "height", "preview", "alt"], [3, "src", "fallback", "width", "height", "alt"]], template: function SgDocImage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row");
        \u0275\u0275element(5, "hrm-image", 2);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "sg-use", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "sg-do");
        \u0275\u0275element(14, "span", 6);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275element(17, "span", 6);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "sg-example", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row");
        \u0275\u0275element(30, "hrm-image", 2);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "sg-example", 8);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "sg-row", 9);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275element(37, "hrm-image", 10);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "sg-example", 8);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row");
        \u0275\u0275element(43, "hrm-image", 11);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "sg-example", 8);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row", 9);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275element(50, "hrm-image", 2);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275element(52, "hrm-image", 2);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275element(54, "hrm-image", 2);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 50, "docs.image.title"))("desc", \u0275\u0275pipeBind1(2, 52, "docs.image.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.photo)("width", 120)("height", 120)("alt", \u0275\u0275pipeBind1(6, 54, "docs.image.altPhoto"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 56, "docs.image.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 58, "docs.image.behavior"))("avoid", \u0275\u0275pipeBind1(11, 60, "docs.image.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 62, "docs.image.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 64, "docs.image.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 66, "docs.image.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 68, "docs.image.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 70, "docs.image.ex1T"))("desc", \u0275\u0275pipeBind1(28, 72, "docs.image.ex1D"));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.photo)("width", 120)("height", 120)("alt", \u0275\u0275pipeBind1(31, 74, "docs.image.altPortrait"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(33, 76, "docs.image.ex2T"))("desc", \u0275\u0275pipeBind1(34, 78, "docs.image.ex2D"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(36, 80, "docs.image.ex2Row"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.doc)("width", 160)("height", 110)("preview", true)("alt", \u0275\u0275pipeBind1(38, 82, "docs.image.altDoc"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 84, "docs.image.ex3T"))("desc", \u0275\u0275pipeBind1(41, 86, "docs.image.ex3D"));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.broken)("fallback", ctx.fallback)("width", 120)("height", 120)("alt", \u0275\u0275pipeBind1(44, 88, "docs.image.altMissing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 90, "docs.image.ex4T"))("desc", \u0275\u0275pipeBind1(47, 92, "docs.image.ex4D"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 94, "docs.image.ex4Row"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.paperA)("width", 120)("height", 84)("alt", \u0275\u0275pipeBind1(51, 96, "docs.image.altId"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.paperB)("width", 120)("height", 84)("alt", \u0275\u0275pipeBind1(53, 98, "docs.image.altDegree"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.paperC)("width", 120)("height", 84)("alt", \u0275\u0275pipeBind1(55, 100, "docs.image.altContract"));
      }
    }, dependencies: [TranslateModule, HrmImage, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocImage, [{
    type: Component,
    args: [{
      selector: "sg-doc-image",
      imports: [TranslateModule, HrmImage, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.image.title' | translate" [desc]="'docs.image.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-image [src]="photo" [width]="120" [height]="120" [alt]="'docs.image.altPhoto' | translate" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.image.purpose' | translate"
          [when]="when"
          [behavior]="'docs.image.behavior' | translate"
          [avoid]="'docs.image.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.image.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.image.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.image.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.image.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.image.ex1T' | translate"
          [desc]="'docs.image.ex1D' | translate">
          <sg-row>
            <hrm-image [src]="photo" [width]="120" [height]="120" [alt]="'docs.image.altPortrait' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.image.ex2T' | translate"
          [desc]="'docs.image.ex2D' | translate">
          <sg-row [label]="'docs.image.ex2Row' | translate">
            <hrm-image [src]="doc" [width]="160" [height]="110" [preview]="true" [alt]="'docs.image.altDoc' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.image.ex3T' | translate"
          [desc]="'docs.image.ex3D' | translate">
          <sg-row>
            <hrm-image [src]="broken" [fallback]="fallback" [width]="120" [height]="120" [alt]="'docs.image.altMissing' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.image.ex4T' | translate"
          [desc]="'docs.image.ex4D' | translate">
          <sg-row [label]="'docs.image.ex4Row' | translate">
            <hrm-image [src]="paperA" [width]="120" [height]="84" [alt]="'docs.image.altId' | translate" />
            <hrm-image [src]="paperB" [width]="120" [height]="84" [alt]="'docs.image.altDegree' | translate" />
            <hrm-image [src]="paperC" [width]="120" [height]="84" [alt]="'docs.image.altContract' | translate" />
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocImage, { className: "SgDocImage", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/image.ts", lineNumber: 72 });
})();
export {
  SgDocImage
};
//# sourceMappingURL=chunk-QBZND26R.js.map
