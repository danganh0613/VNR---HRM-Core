import {
  NzAffixComponent,
  NzAffixModule
} from "./chunk-BOGSDCUG.js";
import "./chunk-INGBAYOP.js";
import {
  NzScrollService
} from "./chunk-ZUH7BZUU.js";
import "./chunk-L5ZKGN3K.js";
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
import "./chunk-C5E47IHV.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-BWIWCH2F.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import {
  fromEventOutsideAngular,
  numberAttributeWithZeroFallback
} from "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  takeUntil,
  throttleTime,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-anchor.mjs
var _c0 = ["ink"];
var _c1 = ["*"];
var _c2 = (a0) => ({
  "ant-anchor-wrapper-horizontal": a0
});
var _c3 = (a0) => ({
  "ant-anchor-fixed": a0
});
function NzAnchorComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-affix", 2);
    \u0275\u0275template(1, NzAnchorComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const content_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("nzOffsetTop", ctx_r0.nzOffsetTop)("nzTarget", ctx_r0.container);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzAnchorComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const content_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "div", 7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.wrapperStyle);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(6, _c2, ctx_r0.nzDirection === "horizontal"));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction1(8, _c3, !ctx_r0.nzAffix && !ctx_r0.nzShowInkInFixed));
  }
}
var _c4 = ["nzTemplate"];
var _c5 = ["linkTitle"];
function NzAnchorLinkComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.titleStr);
  }
}
function NzAnchorLinkComponent_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzAnchorLinkComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzAnchorLinkComponent_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTpl || ctx_r0.nzTemplate);
  }
}
function NzAnchorLinkComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function getOffsetTop(element, container) {
  if (!element || !element.getClientRects().length) {
    return 0;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      const documentElement = element.ownerDocument.documentElement;
      return rect.top - documentElement.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
var VISIBLE_CLASSNAME = "ant-anchor-ink-ball-visible";
var NZ_CONFIG_MODULE_NAME = "anchor";
var sharpMatcherRegx = /#([^#]+)$/;
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var NzAnchorComponent = (() => {
  let _nzShowInkInFixed_decorators;
  let _nzShowInkInFixed_initializers = [];
  let _nzShowInkInFixed_extraInitializers = [];
  let _nzBounds_decorators;
  let _nzBounds_initializers = [];
  let _nzBounds_extraInitializers = [];
  let _nzOffsetTop_decorators;
  let _nzOffsetTop_initializers = [];
  let _nzOffsetTop_extraInitializers = [];
  let _nzTargetOffset_decorators;
  let _nzTargetOffset_initializers = [];
  let _nzTargetOffset_extraInitializers = [];
  return class NzAnchorComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShowInkInFixed_decorators = [WithConfig()];
      _nzBounds_decorators = [WithConfig()];
      _nzOffsetTop_decorators = [WithConfig()];
      _nzTargetOffset_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShowInkInFixed_decorators, {
        kind: "field",
        name: "nzShowInkInFixed",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowInkInFixed" in obj,
          get: (obj) => obj.nzShowInkInFixed,
          set: (obj, value) => {
            obj.nzShowInkInFixed = value;
          }
        },
        metadata: _metadata
      }, _nzShowInkInFixed_initializers, _nzShowInkInFixed_extraInitializers);
      __esDecorate(null, null, _nzBounds_decorators, {
        kind: "field",
        name: "nzBounds",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBounds" in obj,
          get: (obj) => obj.nzBounds,
          set: (obj, value) => {
            obj.nzBounds = value;
          }
        },
        metadata: _metadata
      }, _nzBounds_initializers, _nzBounds_extraInitializers);
      __esDecorate(null, null, _nzOffsetTop_decorators, {
        kind: "field",
        name: "nzOffsetTop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOffsetTop" in obj,
          get: (obj) => obj.nzOffsetTop,
          set: (obj, value) => {
            obj.nzOffsetTop = value;
          }
        },
        metadata: _metadata
      }, _nzOffsetTop_initializers, _nzOffsetTop_extraInitializers);
      __esDecorate(null, null, _nzTargetOffset_decorators, {
        kind: "field",
        name: "nzTargetOffset",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzTargetOffset" in obj,
          get: (obj) => obj.nzTargetOffset,
          set: (obj, value) => {
            obj.nzTargetOffset = value;
          }
        },
        metadata: _metadata
      }, _nzTargetOffset_initializers, _nzTargetOffset_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService = inject(NzConfigService);
    scrollSrv = inject(NzScrollService);
    cdr = inject(ChangeDetectorRef);
    platform = inject(Platform);
    renderer = inject(Renderer2);
    doc = inject(DOCUMENT);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    ink;
    nzAffix = true;
    nzShowInkInFixed = __runInitializers(this, _nzShowInkInFixed_initializers, false);
    nzBounds = (__runInitializers(this, _nzShowInkInFixed_extraInitializers), __runInitializers(this, _nzBounds_initializers, 5));
    nzOffsetTop = (__runInitializers(this, _nzBounds_extraInitializers), __runInitializers(this, _nzOffsetTop_initializers, void 0));
    nzTargetOffset = (__runInitializers(this, _nzOffsetTop_extraInitializers), __runInitializers(this, _nzTargetOffset_initializers, void 0));
    nzContainer = __runInitializers(this, _nzTargetOffset_extraInitializers);
    nzCurrentAnchor;
    nzDirection = "vertical";
    nzClick = new EventEmitter();
    nzChange = new EventEmitter();
    nzScroll = new EventEmitter();
    visible = false;
    wrapperStyle = {
      "max-height": "100vh"
    };
    container;
    activeLink;
    links = [];
    animating = false;
    destroy$ = new Subject();
    handleScrollTimeoutID;
    constructor() {
      this.destroyRef.onDestroy(() => {
        clearTimeout(this.handleScrollTimeoutID);
        this.destroy$.next(true);
        this.destroy$.complete();
      });
    }
    registerLink(link) {
      this.links.push(link);
    }
    unregisterLink(link) {
      this.links.splice(this.links.indexOf(link), 1);
    }
    getContainer() {
      return this.container || window;
    }
    ngAfterViewInit() {
      this.registerScrollEvent();
    }
    registerScrollEvent() {
      if (!this.platform.isBrowser) {
        return;
      }
      this.destroy$.next(true);
      fromEventOutsideAngular(this.getContainer(), "scroll", passiveEventListenerOptions).pipe(throttleTime(50), takeUntil(this.destroy$)).subscribe(() => this.handleScroll());
      this.handleScrollTimeoutID = setTimeout(() => this.handleScroll());
    }
    handleScroll() {
      if (typeof document === "undefined" || this.animating) {
        return;
      }
      const sections = [];
      const offsetTop = this.nzTargetOffset ? this.nzTargetOffset : this.nzOffsetTop || 0;
      const scope = offsetTop + this.nzBounds;
      this.links.forEach((comp) => {
        const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
        if (!sharpLinkMatch) {
          return;
        }
        const target = this.doc.getElementById(sharpLinkMatch[1]);
        if (target) {
          const top = getOffsetTop(target, this.getContainer());
          if (top < scope) {
            sections.push({
              top,
              comp
            });
          }
        }
      });
      this.visible = !!sections.length;
      if (!this.visible) {
        this.clearActive();
        this.cdr.detectChanges();
      } else {
        const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
        this.handleActive(maxSection.comp);
      }
      this.setVisible();
    }
    clearActive() {
      this.links.forEach((i) => {
        i.unsetActive();
      });
    }
    setActive(comp) {
      const originalActiveLink = this.activeLink;
      const targetComp = this.nzCurrentAnchor && this.links.find((n) => n.nzHref === this.nzCurrentAnchor) || comp;
      if (!targetComp) return;
      targetComp.setActive();
      const linkNode = targetComp.getLinkTitleElement();
      if (this.nzDirection === "vertical") {
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
      } else {
        this.ink.nativeElement.style.left = `${linkNode.offsetLeft + linkNode.clientWidth / 2}px`;
      }
      this.activeLink = (comp || targetComp).nzHref;
      if (originalActiveLink !== this.activeLink) {
        this.nzChange.emit(this.activeLink);
      }
    }
    handleActive(comp) {
      this.clearActive();
      this.setActive(comp);
      this.visible = true;
      this.setVisible();
      this.nzScroll.emit(comp);
    }
    setVisible() {
      if (this.ink) {
        const visible = this.visible;
        if (visible) {
          this.renderer.addClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
        } else {
          this.renderer.removeClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
        }
      }
    }
    handleScrollTo(linkComp) {
      const id = linkComp.nzHref.replace(/^#/, "");
      const el = this.doc.getElementById(id);
      if (!el) {
        return;
      }
      this.animating = true;
      const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
      const elOffsetTop = getOffsetTop(el, this.getContainer());
      let targetScrollTop = containerScrollTop + elOffsetTop;
      targetScrollTop -= this.nzTargetOffset !== void 0 ? this.nzTargetOffset : this.nzOffsetTop || 0;
      this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, {
        callback: () => {
          this.animating = false;
          this.handleActive(linkComp);
        }
      });
      this.nzClick.emit(linkComp.nzHref);
    }
    ngOnChanges(changes) {
      const {
        nzOffsetTop,
        nzContainer,
        nzCurrentAnchor
      } = changes;
      if (nzOffsetTop) {
        this.wrapperStyle = {
          "max-height": `calc(100vh - ${this.nzOffsetTop}px)`
        };
      }
      if (nzContainer) {
        const container = this.nzContainer;
        this.container = typeof container === "string" ? this.doc.querySelector(container) : container;
        this.registerScrollEvent();
      }
      if (nzCurrentAnchor) {
        this.setActive();
      }
    }
    static \u0275fac = function NzAnchorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzAnchorComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzAnchorComponent2,
      selectors: [["nz-anchor"]],
      viewQuery: function NzAnchorComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ink = _t.first);
        }
      },
      inputs: {
        nzAffix: [2, "nzAffix", "nzAffix", booleanAttribute],
        nzShowInkInFixed: [2, "nzShowInkInFixed", "nzShowInkInFixed", booleanAttribute],
        nzBounds: [2, "nzBounds", "nzBounds", numberAttribute],
        nzOffsetTop: [2, "nzOffsetTop", "nzOffsetTop", numberAttributeWithZeroFallback],
        nzTargetOffset: [2, "nzTargetOffset", "nzTargetOffset", numberAttributeWithZeroFallback],
        nzContainer: "nzContainer",
        nzCurrentAnchor: "nzCurrentAnchor",
        nzDirection: "nzDirection"
      },
      outputs: {
        nzClick: "nzClick",
        nzChange: "nzChange",
        nzScroll: "nzScroll"
      },
      exportAs: ["nzAnchor"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 1,
      consts: [["content", ""], ["ink", ""], [3, "nzOffsetTop", "nzTarget"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper"], [1, "ant-anchor"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"]],
      template: function NzAnchorComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275conditionalCreate(0, NzAnchorComponent_Conditional_0_Template, 2, 3, "nz-affix", 2)(1, NzAnchorComponent_Conditional_1_Template, 1, 1, null, 3);
          \u0275\u0275template(2, NzAnchorComponent_ng_template_2_Template, 6, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.nzAffix ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, NzAffixModule, NzAffixComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorComponent, [{
    type: Component,
    args: [{
      selector: "nz-anchor",
      exportAs: "nzAnchor",
      imports: [NgTemplateOutlet, NzAffixModule],
      template: `
    @if (nzAffix) {
      <nz-affix [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
        <ng-template [ngTemplateOutlet]="content" />
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="content" />
    }

    <ng-template #content>
      <div
        class="ant-anchor-wrapper"
        [class]="{ 'ant-anchor-wrapper-horizontal': nzDirection === 'horizontal' }"
        [style]="wrapperStyle"
      >
        <div class="ant-anchor" [class]="{ 'ant-anchor-fixed': !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content />
        </div>
      </div>
    </ng-template>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], {
    ink: [{
      type: ViewChild,
      args: ["ink", {
        static: false
      }]
    }],
    nzAffix: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowInkInFixed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBounds: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzOffsetTop: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzTargetOffset: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzContainer: [{
      type: Input
    }],
    nzCurrentAnchor: [{
      type: Input
    }],
    nzDirection: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }],
    nzChange: [{
      type: Output
    }],
    nzScroll: [{
      type: Output
    }]
  });
})();
var NzAnchorLinkComponent = class _NzAnchorLinkComponent {
  elementRef = inject(ElementRef);
  anchorComp = inject(NzAnchorComponent);
  platform = inject(Platform);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  nzHref = "#";
  nzTarget;
  titleStr = "";
  titleTpl;
  nzDirection = "vertical";
  set nzTitle(value) {
    if (value instanceof TemplateRef) {
      this.titleStr = null;
      this.titleTpl = value;
    } else {
      this.titleStr = value;
    }
  }
  nzTemplate;
  linkTitle;
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.anchorComp.unregisterLink(this);
    });
  }
  ngOnInit() {
    this.anchorComp.registerLink(this);
    this.nzDirection = this.anchorComp.nzDirection;
  }
  getLinkTitleElement() {
    return this.linkTitle.nativeElement;
  }
  setActive() {
    this.renderer.addClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  unsetActive() {
    this.renderer.removeClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  goToClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.platform.isBrowser) {
      this.anchorComp.handleScrollTo(this);
    }
  }
  static \u0275fac = function NzAnchorLinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAnchorLinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzAnchorLinkComponent,
    selectors: [["nz-link"]],
    contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzTemplate = _t.first);
      }
    },
    viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.linkTitle = _t.first);
      }
    },
    hostAttrs: [1, "ant-anchor-link"],
    inputs: {
      nzHref: "nzHref",
      nzTarget: "nzTarget",
      nzTitle: "nzTitle"
    },
    exportAs: ["nzLink"],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 5,
    consts: [["linkTitle", ""], [1, "ant-anchor-link-title", 3, "click", "href", "target"], [3, "ngTemplateOutlet"]],
    template: function NzAnchorLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "a", 1, 0);
        \u0275\u0275listener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) {
          return ctx.goToClick($event);
        });
        \u0275\u0275conditionalCreate(2, NzAnchorLinkComponent_Conditional_2_Template, 2, 1, "span")(3, NzAnchorLinkComponent_Conditional_3_Template, 1, 1, null, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, NzAnchorLinkComponent_Conditional_4_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275property("href", ctx.nzHref, \u0275\u0275sanitizeUrl)("target", ctx.nzTarget);
        \u0275\u0275attribute("title", ctx.titleStr);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.titleStr ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzDirection === "vertical" ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorLinkComponent, [{
    type: Component,
    args: [{
      selector: "nz-link",
      exportAs: "nzLink",
      imports: [NgTemplateOutlet],
      template: `
    <a
      #linkTitle
      class="ant-anchor-link-title"
      [href]="nzHref"
      [attr.title]="titleStr"
      [target]="nzTarget"
      (click)="goToClick($event)"
    >
      @if (titleStr) {
        <span>{{ titleStr }}</span>
      } @else {
        <ng-template [ngTemplateOutlet]="titleTpl || nzTemplate" />
      }
    </a>
    @if (nzDirection === 'vertical') {
      <ng-content />
    }
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-anchor-link"
      }
    }]
  }], () => [], {
    nzHref: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzTemplate: [{
      type: ContentChild,
      args: ["nzTemplate", {
        static: false
      }]
    }],
    linkTitle: [{
      type: ViewChild,
      args: ["linkTitle"]
    }]
  });
})();
var NzAnchorModule = class _NzAnchorModule {
  static \u0275fac = function NzAnchorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAnchorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzAnchorModule,
    imports: [NzAnchorComponent, NzAnchorLinkComponent],
    exports: [NzAnchorComponent, NzAnchorLinkComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzAnchorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorModule, [{
    type: NgModule,
    args: [{
      exports: [NzAnchorComponent, NzAnchorLinkComponent],
      imports: [NzAnchorComponent, NzAnchorLinkComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/navigation/hrm-anchor.ts
var _forTrack0 = ($index, $item) => $item.href;
function HrmAnchor_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-link", 1);
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275property("nzHref", l_r1.href)("nzTitle", l_r1.title);
  }
}
var HrmAnchor = class _HrmAnchor {
  constructor() {
    this.links = input([], ...ngDevMode ? [{ debugName: "links" }] : (
      /* istanbul ignore next */
      []
    ));
    this.affix = input(false, ...ngDevMode ? [{ debugName: "affix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.direction = input("vertical", ...ngDevMode ? [{ debugName: "direction" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmAnchor)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmAnchor, selectors: [["hrm-anchor"]], hostAttrs: [1, "hrm-anchor"], inputs: { links: [1, "links"], affix: [1, "affix"], direction: [1, "direction"] }, decls: 3, vars: 2, consts: [[3, "nzAffix", "nzDirection"], [3, "nzHref", "nzTitle"]], template: function HrmAnchor_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-anchor", 0);
        \u0275\u0275repeaterCreate(1, HrmAnchor_For_2_Template, 1, 2, "nz-link", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzAffix", ctx.affix())("nzDirection", ctx.direction());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.links());
      }
    }, dependencies: [NzAnchorModule, NzAnchorComponent, NzAnchorLinkComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmAnchor, [{
    type: Component,
    args: [{
      selector: "hrm-anchor",
      imports: [NzAnchorModule],
      template: `
    <nz-anchor [nzAffix]="affix()" [nzDirection]="direction()">
      @for (l of links(); track l.href) {
        <nz-link [nzHref]="l.href" [nzTitle]="l.title"></nz-link>
      }
    </nz-anchor>
  `,
      host: { class: "hrm-anchor" }
    }]
  }], null, { links: [{ type: Input, args: [{ isSignal: true, alias: "links", required: false }] }], affix: [{ type: Input, args: [{ isSignal: true, alias: "affix", required: false }] }], direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmAnchor, { className: "HrmAnchor", filePath: "libs/hrm-ui/src/lib/navigation/hrm-anchor.ts", lineNumber: 21 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/anchor.ts
var SgDocAnchor = class _SgDocAnchor {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.anchor.when1",
      "docs.anchor.when2",
      "docs.anchor.when3"
    ];
  }
  get profile() {
    return [
      { href: "#ho-so-chung", title: this.t.instant("docs.anchor.lnkGeneral") },
      { href: "#ho-so-hop-dong", title: this.t.instant("docs.anchor.lnkContract") },
      { href: "#ho-so-luong", title: this.t.instant("docs.anchor.lnkSalary") },
      { href: "#ho-so-phu-cap", title: this.t.instant("docs.anchor.lnkAllowance") }
    ];
  }
  static {
    this.\u0275fac = function SgDocAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAnchor)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAnchor, selectors: [["sg-doc-anchor"]], decls: 40, vars: 54, consts: [["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], [3, "links"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["direction", "horizontal", 3, "links"], [3, "label"], [3, "affix", "links"]], template: function SgDocAnchor_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275element(4, "hrm-anchor", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "sg-use", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "sg-do");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "sg-do");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-dont");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "sg-example", 7);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "sg-row");
        \u0275\u0275element(28, "hrm-anchor", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "sg-example", 7);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row");
        \u0275\u0275element(33, "hrm-anchor", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "sg-example", 7);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row", 9);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275element(39, "hrm-anchor", 10);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 22, "docs.anchor.title"))("desc", \u0275\u0275pipeBind1(2, 24, "docs.anchor.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("links", ctx.profile);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(7, 26, "docs.anchor.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(8, 28, "docs.anchor.behavior"))("avoid", \u0275\u0275pipeBind1(9, 30, "docs.anchor.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 32, "docs.anchor.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 34, "docs.anchor.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 36, "docs.anchor.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 38, "docs.anchor.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 40, "docs.anchor.exVertT"))("desc", \u0275\u0275pipeBind1(26, 42, "docs.anchor.exVertD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("links", ctx.profile);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 44, "docs.anchor.exHorizT"))("desc", \u0275\u0275pipeBind1(31, 46, "docs.anchor.exHorizD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("links", ctx.profile);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 48, "docs.anchor.exAffixT"))("desc", \u0275\u0275pipeBind1(36, 50, "docs.anchor.exAffixD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(38, 52, "docs.anchor.exAffixRow"));
        \u0275\u0275advance(2);
        \u0275\u0275property("affix", true)("links", ctx.profile);
      }
    }, dependencies: [TranslateModule, HrmAnchor, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAnchor, [{
    type: Component,
    args: [{
      selector: "sg-doc-anchor",
      imports: [TranslateModule, HrmAnchor, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.anchor.title' | translate" [desc]="'docs.anchor.desc' | translate">

      <div sgOverview>
        <hrm-anchor [links]="profile" />
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.anchor.purpose' | translate"
          [when]="when"
          [behavior]="'docs.anchor.behavior' | translate"
          [avoid]="'docs.anchor.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.anchor.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.anchor.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.anchor.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.anchor.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.anchor.exVertT' | translate"
          [desc]="'docs.anchor.exVertD' | translate">
          <sg-row>
            <hrm-anchor [links]="profile" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.anchor.exHorizT' | translate"
          [desc]="'docs.anchor.exHorizD' | translate">
          <sg-row>
            <hrm-anchor direction="horizontal" [links]="profile" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.anchor.exAffixT' | translate"
          [desc]="'docs.anchor.exAffixD' | translate">
          <sg-row [label]="'docs.anchor.exAffixRow' | translate">
            <hrm-anchor [affix]="true" [links]="profile" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAnchor, { className: "SgDocAnchor", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/anchor.ts", lineNumber: 59 });
})();
export {
  SgDocAnchor
};
//# sourceMappingURL=chunk-J7FAYOF4.js.map
