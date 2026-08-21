import {
  NzAffixComponent,
  NzAffixModule
} from "./chunk-BOGSDCUG.js";
import {
  isPlatformServer
} from "./chunk-D2BVEXVI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  Input,
  NgModule,
  PLATFORM_ID,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-watermark.mjs
var _c0 = ["*"];
function getPixelRatio() {
  return window.devicePixelRatio || 1;
}
function toLowercaseSeparator(key) {
  return key.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function getStyleStr(style) {
  const keys = Object.keys(style);
  const styleCss = keys.map((key) => `${toLowercaseSeparator(key)}: ${style[key]};`);
  return styleCss.join(" ");
}
function reRendering(mutation, watermarkElement) {
  let flag = false;
  if (mutation.removedNodes.length) {
    flag = Array.from(mutation.removedNodes).some((node) => node === watermarkElement);
  }
  if (mutation.type === "attributes" && mutation.target === watermarkElement) {
    flag = true;
  }
  return flag;
}
function rotateWatermark(ctx, rotateX, rotateY, rotate) {
  ctx.translate(rotateX, rotateY);
  ctx.rotate(Math.PI / 180 * Number(rotate));
  ctx.translate(-rotateX, -rotateY);
}
var BaseSize = 2;
var FontGap = 3;
var NzWatermarkComponent = class _NzWatermarkComponent {
  isServer = isPlatformServer(inject(PLATFORM_ID));
  document = inject(DOCUMENT);
  el = inject(ElementRef).nativeElement;
  cdr = inject(ChangeDetectorRef);
  nzWidth = 120;
  nzHeight = 64;
  nzRotate = -22;
  nzZIndex = 9;
  nzImage = "";
  nzContent = "";
  nzFont = {};
  nzGap = [100, 100];
  nzOffset = [this.nzGap[0] / 2, this.nzGap[1] / 2];
  watermarkElement = this.document.createElement("div");
  stopObservation = false;
  observer = null;
  // for test usage
  onImageLoad;
  onImageError;
  constructor() {
    if (this.isServer) {
      return;
    }
    const observer = this.observer = new MutationObserver((mutations) => {
      if (this.stopObservation) {
        return;
      }
      mutations.forEach((mutation) => {
        if (reRendering(mutation, this.watermarkElement)) {
          this.destroyWatermark();
          this.renderWatermark();
        }
      });
    });
    afterNextRender(() => this.renderWatermark());
    inject(DestroyRef).onDestroy(() => observer.disconnect());
  }
  ngOnInit() {
    this.observer?.observe(this.el, {
      subtree: true,
      childList: true,
      attributeFilter: ["style", "class"]
    });
  }
  ngOnChanges(changes) {
    const {
      nzRotate,
      nzZIndex,
      nzWidth,
      nzHeight,
      nzImage,
      nzContent,
      nzFont,
      gapX,
      gapY,
      offsetLeft,
      offsetTop
    } = changes;
    if (nzRotate || nzZIndex || nzWidth || nzHeight || nzImage || nzContent || nzFont || gapX || gapY || offsetLeft || offsetTop) {
      this.renderWatermark();
    }
  }
  getFont() {
    const font = {
      color: "rgba(0,0,0,.15)",
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: "sans-serif",
      fontStyle: "normal"
    };
    this.nzFont = __spreadValues(__spreadValues({}, font), this.nzFont);
    this.cdr.markForCheck();
  }
  getMarkStyle() {
    const markStyle = {
      zIndex: this.nzZIndex,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      backgroundRepeat: "repeat",
      visibility: "visible"
    };
    let positionLeft = (this.nzOffset?.[0] ?? this.nzGap[0] / 2) - this.nzGap[0] / 2;
    let positionTop = (this.nzOffset?.[1] ?? this.nzGap[1] / 2) - this.nzGap[1] / 2;
    if (positionLeft > 0) {
      markStyle.left = `${positionLeft}px`;
      markStyle.width = `calc(100% - ${positionLeft}px)`;
      positionLeft = 0;
    }
    if (positionTop > 0) {
      markStyle.top = `${positionTop}px`;
      markStyle.height = `calc(100% - ${positionTop}px)`;
      positionTop = 0;
    }
    markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;
    return markStyle;
  }
  destroyWatermark() {
    if (this.watermarkElement) {
      this.watermarkElement.remove();
    }
  }
  appendWatermark(base64Url, markWidth) {
    this.stopObservation = true;
    this.watermarkElement.setAttribute("style", getStyleStr(__spreadProps(__spreadValues({}, this.getMarkStyle()), {
      backgroundImage: `url('${base64Url}')`,
      backgroundSize: `${(this.nzGap[0] + markWidth) * BaseSize}px`
    })));
    this.el.append(this.watermarkElement);
    this.cdr.markForCheck();
    setTimeout(() => {
      this.stopObservation = false;
      this.cdr.markForCheck();
    });
  }
  getMarkSize(ctx) {
    let defaultWidth = 120;
    let defaultHeight = 64;
    if (!this.nzImage && ctx.measureText) {
      ctx.font = `${Number(this.nzFont.fontSize)}px ${this.nzFont.fontFamily}`;
      const contents = Array.isArray(this.nzContent) ? this.nzContent : [this.nzContent];
      const widths = contents.map((item) => ctx.measureText(item).width);
      defaultWidth = Math.ceil(Math.max(...widths));
      defaultHeight = Number(this.nzFont.fontSize) * contents.length + (contents.length - 1) * FontGap;
    }
    return [this.nzWidth ?? defaultWidth, this.nzHeight ?? defaultHeight];
  }
  fillTexts(ctx, drawX, drawY, drawWidth, drawHeight) {
    const ratio = getPixelRatio();
    const mergedFontSize = Number(this.nzFont.fontSize) * ratio;
    ctx.font = `${this.nzFont.fontStyle} normal ${this.nzFont.fontWeight} ${mergedFontSize}px/${drawHeight}px ${this.nzFont.fontFamily}`;
    if (this.nzFont.color) ctx.fillStyle = this.nzFont.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.translate(drawWidth / 2, 0);
    const contents = Array.isArray(this.nzContent) ? this.nzContent : [this.nzContent];
    contents?.forEach((item, index) => {
      ctx.fillText(item ?? "", drawX, drawY + index * (mergedFontSize + FontGap * ratio));
    });
  }
  drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth) {
    this.fillTexts(ctx, drawX, drawY, drawWidth, drawHeight);
    ctx.restore();
    rotateWatermark(ctx, alternateRotateX, alternateRotateY, this.nzRotate);
    this.fillTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
    this.appendWatermark(canvas.toDataURL(), markWidth);
  }
  renderWatermark() {
    if (this.isServer) {
      return;
    }
    if (!this.nzContent && !this.nzImage) {
      return;
    }
    const canvas = this.document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      if (!this.watermarkElement) {
        this.watermarkElement = this.document.createElement("div");
      }
      this.getFont();
      const ratio = getPixelRatio();
      const [markWidth, markHeight] = this.getMarkSize(ctx);
      const canvasWidth = (this.nzGap[0] + markWidth) * ratio;
      const canvasHeight = (this.nzGap[1] + markHeight) * ratio;
      canvas.setAttribute("width", `${canvasWidth * BaseSize}px`);
      canvas.setAttribute("height", `${canvasHeight * BaseSize}px`);
      const drawX = this.nzGap[0] * ratio / 2;
      const drawY = this.nzGap[1] * ratio / 2;
      const drawWidth = markWidth * ratio;
      const drawHeight = markHeight * ratio;
      const rotateX = (drawWidth + this.nzGap[0] * ratio) / 2;
      const rotateY = (drawHeight + this.nzGap[1] * ratio) / 2;
      const alternateDrawX = drawX + canvasWidth;
      const alternateDrawY = drawY + canvasHeight;
      const alternateRotateX = rotateX + canvasWidth;
      const alternateRotateY = rotateY + canvasHeight;
      ctx.save();
      rotateWatermark(ctx, rotateX, rotateY, this.nzRotate);
      if (this.nzImage) {
        const img = new Image();
        this.onImageLoad = () => {
          cleanup();
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          ctx.restore();
          rotateWatermark(ctx, alternateRotateX, alternateRotateY, this.nzRotate);
          ctx.drawImage(img, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
          this.appendWatermark(canvas.toDataURL(), markWidth);
        };
        this.onImageError = () => {
          cleanup();
          this.drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth);
        };
        const cleanup = () => {
          img.removeEventListener("load", this.onImageLoad);
          img.removeEventListener("error", this.onImageError);
        };
        img.addEventListener("load", this.onImageLoad);
        img.addEventListener("error", this.onImageError);
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = this.nzImage;
      } else {
        this.drawText(canvas, ctx, drawX, drawY, drawWidth, drawHeight, alternateRotateX, alternateRotateY, alternateDrawX, alternateDrawY, markWidth);
      }
    }
  }
  static \u0275fac = function NzWatermarkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzWatermarkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzWatermarkComponent,
    selectors: [["nz-watermark"]],
    inputs: {
      nzWidth: [2, "nzWidth", "nzWidth", numberAttribute],
      nzHeight: [2, "nzHeight", "nzHeight", numberAttribute],
      nzRotate: [2, "nzRotate", "nzRotate", numberAttribute],
      nzZIndex: [2, "nzZIndex", "nzZIndex", numberAttribute],
      nzImage: "nzImage",
      nzContent: "nzContent",
      nzFont: "nzFont",
      nzGap: "nzGap",
      nzOffset: "nzOffset"
    },
    exportAs: ["nzWatermark"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzWatermarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWatermarkComponent, [{
    type: Component,
    args: [{
      selector: "nz-watermark",
      exportAs: "nzWatermark",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`,
      styles: [":host{position:relative;display:block;overflow:hidden}\n"]
    }]
  }], () => [], {
    nzWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzRotate: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzImage: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzFont: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }]
  });
})();
var NzWatermarkModule = class _NzWatermarkModule {
  static \u0275fac = function NzWatermarkModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzWatermarkModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzWatermarkModule,
    imports: [NzWatermarkComponent],
    exports: [NzWatermarkComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWatermarkModule, [{
    type: NgModule,
    args: [{
      exports: [NzWatermarkComponent],
      imports: [NzWatermarkComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/layout/hrm-affix.ts
var _c02 = ["*"];
var HrmAffix = class _HrmAffix {
  constructor() {
    this.offsetTop = input(null, ...ngDevMode ? [{ debugName: "offsetTop" }] : (
      /* istanbul ignore next */
      []
    ));
    this.offsetBottom = input(null, ...ngDevMode ? [{ debugName: "offsetBottom" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmAffix_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAffix)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAffix, selectors: [["hrm-affix"]], hostAttrs: [1, "hrm-affix"], inputs: { offsetTop: [1, "offsetTop"], offsetBottom: [1, "offsetBottom"] }, ngContentSelectors: _c02, decls: 2, vars: 2, consts: [[3, "nzOffsetTop", "nzOffsetBottom"]], template: function HrmAffix_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-affix", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzOffsetTop", ctx.offsetTop())("nzOffsetBottom", ctx.offsetBottom());
      }
    }, dependencies: [NzAffixModule, NzAffixComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAffix, [{
    type: Component,
    args: [{
      selector: "hrm-affix",
      imports: [NzAffixModule],
      template: `<nz-affix [nzOffsetTop]="offsetTop()" [nzOffsetBottom]="offsetBottom()"><ng-content /></nz-affix>`,
      host: { class: "hrm-affix" }
    }]
  }], null, { offsetTop: [{ type: Input, args: [{ isSignal: true, alias: "offsetTop", required: false }] }], offsetBottom: [{ type: Input, args: [{ isSignal: true, alias: "offsetBottom", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAffix, { className: "HrmAffix", filePath: "libs/hrm-ui/src/lib/layout/hrm-affix.ts", lineNumber: 13 });
})();
var HrmWatermark = class _HrmWatermark {
  constructor() {
    this.content = input("", ...ngDevMode ? [{ debugName: "content" }] : (
      /* istanbul ignore next */
      []
    ));
    this.image = input("", ...ngDevMode ? [{ debugName: "image" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = input(120, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(64, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmWatermark_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmWatermark)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmWatermark, selectors: [["hrm-watermark"]], hostAttrs: [1, "hrm-watermark"], inputs: { content: [1, "content"], image: [1, "image"], width: [1, "width"], height: [1, "height"] }, ngContentSelectors: _c02, decls: 2, vars: 4, consts: [[3, "nzContent", "nzImage", "nzWidth", "nzHeight"]], template: function HrmWatermark_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-watermark", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzContent", ctx.image() ? "" : ctx.content())("nzImage", ctx.image())("nzWidth", ctx.width())("nzHeight", ctx.height());
      }
    }, dependencies: [NzWatermarkModule, NzWatermarkComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmWatermark, [{
    type: Component,
    args: [{
      selector: "hrm-watermark",
      imports: [NzWatermarkModule],
      template: `
    <nz-watermark
      [nzContent]="image() ? '' : content()"
      [nzImage]="image()"
      [nzWidth]="width()"
      [nzHeight]="height()"><ng-content /></nz-watermark>`,
      host: { class: "hrm-watermark" }
    }]
  }], null, { content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], image: [{ type: Input, args: [{ isSignal: true, alias: "image", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmWatermark, { className: "HrmWatermark", filePath: "libs/hrm-ui/src/lib/layout/hrm-affix.ts", lineNumber: 32 });
})();

export {
  HrmAffix,
  HrmWatermark
};
//# sourceMappingURL=chunk-HZXI4BWV.js.map
