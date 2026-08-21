import {
  NzResizeObserver
} from "./chunk-JUFZRQMG.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-Y56K4O2M.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-4363XCMO.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  Location
} from "./chunk-XYGM7GOW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  contentChild,
  forwardRef,
  inject,
  input,
  map,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-page-header.mjs
var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
function NzPageHeaderComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const backIcon_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", backIcon_r3 || ctx_r1.getBackIcon());
  }
}
function NzPageHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function NzPageHeaderComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275template(2, NzPageHeaderComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzBackIcon);
  }
}
function NzPageHeaderComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275template(1, NzPageHeaderComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 6);
  }
}
function NzPageHeaderComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, NzPageHeaderComponent_Conditional_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 7);
  }
}
var NzPageHeaderTitleDirective = class _NzPageHeaderTitleDirective {
  static \u0275fac = function NzPageHeaderTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderTitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderTitleDirective,
    selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
    hostAttrs: [1, "ant-page-header-heading-title"],
    exportAs: ["nzPageHeaderTitle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-title, [nz-page-header-title]",
      exportAs: "nzPageHeaderTitle",
      host: {
        class: "ant-page-header-heading-title"
      }
    }]
  }], null, null);
})();
var NzPageHeaderSubtitleDirective = class _NzPageHeaderSubtitleDirective {
  static \u0275fac = function NzPageHeaderSubtitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderSubtitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderSubtitleDirective,
    selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
    hostAttrs: [1, "ant-page-header-heading-sub-title"],
    exportAs: ["nzPageHeaderSubtitle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-subtitle, [nz-page-header-subtitle]",
      exportAs: "nzPageHeaderSubtitle",
      host: {
        class: "ant-page-header-heading-sub-title"
      }
    }]
  }], null, null);
})();
var NzPageHeaderContentDirective = class _NzPageHeaderContentDirective {
  static \u0275fac = function NzPageHeaderContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderContentDirective,
    selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
    hostAttrs: [1, "ant-page-header-content"],
    exportAs: ["nzPageHeaderContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-content, [nz-page-header-content]",
      exportAs: "nzPageHeaderContent",
      host: {
        class: "ant-page-header-content"
      }
    }]
  }], null, null);
})();
var NzPageHeaderTagDirective = class _NzPageHeaderTagDirective {
  static \u0275fac = function NzPageHeaderTagDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderTagDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderTagDirective,
    selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
    hostAttrs: [1, "ant-page-header-heading-tags"],
    exportAs: ["nzPageHeaderTags"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTagDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-tags, [nz-page-header-tags]",
      exportAs: "nzPageHeaderTags",
      host: {
        class: "ant-page-header-heading-tags"
      }
    }]
  }], null, null);
})();
var NzPageHeaderExtraDirective = class _NzPageHeaderExtraDirective {
  static \u0275fac = function NzPageHeaderExtraDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderExtraDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderExtraDirective,
    selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
    hostAttrs: [1, "ant-page-header-heading-extra"],
    exportAs: ["nzPageHeaderExtra"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderExtraDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-extra, [nz-page-header-extra]",
      exportAs: "nzPageHeaderExtra",
      host: {
        class: "ant-page-header-heading-extra"
      }
    }]
  }], null, null);
})();
var NzPageHeaderFooterDirective = class _NzPageHeaderFooterDirective {
  static \u0275fac = function NzPageHeaderFooterDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderFooterDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderFooterDirective,
    selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
    hostAttrs: [1, "ant-page-header-footer"],
    exportAs: ["nzPageHeaderFooter"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderFooterDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-footer, [nz-page-header-footer]",
      exportAs: "nzPageHeaderFooter",
      host: {
        class: "ant-page-header-footer"
      }
    }]
  }], null, null);
})();
var NzPageHeaderBreadcrumbDirective = class _NzPageHeaderBreadcrumbDirective {
  static \u0275fac = function NzPageHeaderBreadcrumbDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderBreadcrumbDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderBreadcrumbDirective,
    selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
    exportAs: ["nzPageHeaderBreadcrumb"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderBreadcrumbDirective, [{
    type: Directive,
    args: [{
      selector: "nz-breadcrumb[nz-page-header-breadcrumb]",
      exportAs: "nzPageHeaderBreadcrumb"
    }]
  }], null, null);
})();
var NzPageHeaderAvatarDirective = class _NzPageHeaderAvatarDirective {
  static \u0275fac = function NzPageHeaderAvatarDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderAvatarDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzPageHeaderAvatarDirective,
    selectors: [["nz-avatar", "nz-page-header-avatar", ""]],
    exportAs: ["nzPageHeaderAvatar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-page-header-avatar]",
      exportAs: "nzPageHeaderAvatar"
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "pageHeader";
var NzPageHeaderComponent = (() => {
  let _nzGhost_decorators;
  let _nzGhost_initializers = [];
  let _nzGhost_extraInitializers = [];
  return class NzPageHeaderComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzGhost_decorators = [WithConfig()];
      __esDecorate(null, null, _nzGhost_decorators, {
        kind: "field",
        name: "nzGhost",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGhost" in obj,
          get: (obj) => obj.nzGhost,
          set: (obj, value) => {
            obj.nzGhost = value;
          }
        },
        metadata: _metadata
      }, _nzGhost_initializers, _nzGhost_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService;
    elementRef;
    nzResizeObserver;
    cdr;
    directionality;
    location = inject(Location);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzBackIcon = null;
    nzTitle;
    nzSubtitle;
    nzGhost = __runInitializers(this, _nzGhost_initializers, true);
    nzBack = (__runInitializers(this, _nzGhost_extraInitializers), new EventEmitter());
    nzPageHeaderFooter;
    nzPageHeaderBreadcrumb;
    compact = false;
    dir = "ltr";
    enableBackButton = true;
    constructor(nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
      this.nzConfigService = nzConfigService;
      this.elementRef = elementRef;
      this.nzResizeObserver = nzResizeObserver;
      this.cdr = cdr;
      this.directionality = directionality;
    }
    ngOnInit() {
      this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
      if (!this.nzBack.observers.length) {
        this.enableBackButton = this.location.getState()?.navigationId > 1;
        const subscription = this.location.subscribe(() => {
          this.enableBackButton = true;
          this.cdr.detectChanges();
        });
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
      }
      this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => entry.contentRect.width), takeUntilDestroyed(this.destroyRef)).subscribe((width) => {
        this.compact = width < 768;
        this.cdr.markForCheck();
      });
    }
    onBack() {
      if (this.nzBack.observers.length) {
        this.nzBack.emit();
      } else {
        this.location.back();
      }
    }
    getBackIcon() {
      if (this.dir === "rtl") {
        return "arrow-right";
      }
      return "arrow-left";
    }
    static \u0275fac = function NzPageHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzPageHeaderComponent2)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NzResizeObserver), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality));
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzPageHeaderComponent2,
      selectors: [["nz-page-header"]],
      contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzPageHeaderFooterDirective, 5)(dirIndex, NzPageHeaderBreadcrumbDirective, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
        }
      },
      hostAttrs: [1, "ant-page-header"],
      hostVars: 10,
      hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzBackIcon: "nzBackIcon",
        nzTitle: "nzTitle",
        nzSubtitle: "nzSubtitle",
        nzGhost: "nzGhost"
      },
      outputs: {
        nzBack: "nzBack"
      },
      exportAs: ["nzPageHeader"],
      ngContentSelectors: _c1,
      decls: 13,
      vars: 3,
      consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], [1, "ant-page-header-back"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nzTheme", "outline", 3, "nzType"]],
      template: function NzPageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c0);
          \u0275\u0275projection(0);
          \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
          \u0275\u0275conditionalCreate(3, NzPageHeaderComponent_Conditional_3_Template, 3, 1, "div", 2);
          \u0275\u0275projection(4, 1);
          \u0275\u0275conditionalCreate(5, NzPageHeaderComponent_Conditional_5_Template, 2, 1, "span", 3)(6, NzPageHeaderComponent_Conditional_6_Template, 1, 0);
          \u0275\u0275conditionalCreate(7, NzPageHeaderComponent_Conditional_7_Template, 2, 1, "span", 4)(8, NzPageHeaderComponent_Conditional_8_Template, 1, 0);
          \u0275\u0275projection(9, 2);
          \u0275\u0275elementEnd();
          \u0275\u0275projection(10, 3);
          \u0275\u0275elementEnd();
          \u0275\u0275projection(11, 4);
          \u0275\u0275projection(12, 5);
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.nzBackIcon !== null && ctx.enableBackButton ? 3 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzTitle ? 5 : 6);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzSubtitle ? 7 : 8);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-page-header",
      exportAs: "nzPageHeader",
      template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]" />

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        @if (nzBackIcon !== null && enableBackButton) {
          <div (click)="onBack()" class="ant-page-header-back">
            <div role="button" tabindex="0" class="ant-page-header-back-button">
              <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
                <nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline" />
              </ng-container>
            </div>
          </div>
        }

        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]" />
        <!--title-->
        @if (nzTitle) {
          <span class="ant-page-header-heading-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-title, [nz-page-header-title]" />
        }

        <!--subtitle-->
        @if (nzSubtitle) {
          <span class="ant-page-header-heading-sub-title">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-subtitle, [nz-page-header-subtitle]" />
        }
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]" />
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]" />
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]" />
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]" />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-page-header",
        "[class.has-footer]": "nzPageHeaderFooter",
        "[class.ant-page-header-ghost]": "nzGhost",
        "[class.has-breadcrumb]": "nzPageHeaderBreadcrumb",
        "[class.ant-page-header-compact]": "compact",
        "[class.ant-page-header-rtl]": `dir === 'rtl'`
      },
      imports: [NzOutletModule, NzIconModule]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzBackIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzBack: [{
      type: Output
    }],
    nzPageHeaderFooter: [{
      type: ContentChild,
      args: [NzPageHeaderFooterDirective, {
        static: false
      }]
    }],
    nzPageHeaderBreadcrumb: [{
      type: ContentChild,
      args: [NzPageHeaderBreadcrumbDirective, {
        static: false
      }]
    }]
  });
})();
var NzPageHeaderCells = [NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
var NzPageHeaderModule = class _NzPageHeaderModule {
  static \u0275fac = function NzPageHeaderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPageHeaderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzPageHeaderModule,
    imports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective],
    exports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzPageHeaderComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzPageHeaderComponent, NzPageHeaderCells],
      exports: [NzPageHeaderComponent, NzPageHeaderCells]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/navigation/hrm-page-header.ts
var _c02 = ["*", [["", "phBreadcrumb", ""]], [["", "phTags", ""]], [["", "phFooter", ""]]];
var _c12 = ["*", "[phBreadcrumb]", "[phTags]", "[phFooter]"];
function HrmPageHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-breadcrumb", 1);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function HrmPageHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-page-header-tags");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
function HrmPageHeader_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-page-header-footer");
    \u0275\u0275projection(1, 3);
    \u0275\u0275elementEnd();
  }
}
var HrmPageHeaderBreadcrumb = class _HrmPageHeaderBreadcrumb {
  static {
    this.\u0275fac = function HrmPageHeaderBreadcrumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPageHeaderBreadcrumb)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmPageHeaderBreadcrumb, selectors: [["", "phBreadcrumb", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPageHeaderBreadcrumb, [{
    type: Directive,
    args: [{ selector: "[phBreadcrumb]" }]
  }], null, null);
})();
var HrmPageHeaderTags = class _HrmPageHeaderTags {
  static {
    this.\u0275fac = function HrmPageHeaderTags_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPageHeaderTags)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmPageHeaderTags, selectors: [["", "phTags", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPageHeaderTags, [{
    type: Directive,
    args: [{ selector: "[phTags]" }]
  }], null, null);
})();
var HrmPageHeaderFooter = class _HrmPageHeaderFooter {
  static {
    this.\u0275fac = function HrmPageHeaderFooter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPageHeaderFooter)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmPageHeaderFooter, selectors: [["", "phFooter", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPageHeaderFooter, [{
    type: Directive,
    args: [{ selector: "[phFooter]" }]
  }], null, null);
})();
var HrmPageHeader = class _HrmPageHeader {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ghost = input(true, ...ngDevMode ? [{ debugName: "ghost" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showBack = input(false, ...ngDevMode ? [{ debugName: "showBack" }] : (
      /* istanbul ignore next */
      []
    ));
    this.back = output();
    this.bc = contentChild(HrmPageHeaderBreadcrumb, ...ngDevMode ? [{ debugName: "bc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tags = contentChild(HrmPageHeaderTags, ...ngDevMode ? [{ debugName: "tags" }] : (
      /* istanbul ignore next */
      []
    ));
    this.footer = contentChild(HrmPageHeaderFooter, ...ngDevMode ? [{ debugName: "footer" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmPageHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPageHeader)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmPageHeader, selectors: [["hrm-page-header"]], contentQueries: function HrmPageHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.bc, HrmPageHeaderBreadcrumb, 5)(dirIndex, ctx.tags, HrmPageHeaderTags, 5)(dirIndex, ctx.footer, HrmPageHeaderFooter, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    }, hostAttrs: [1, "hrm-page-header"], inputs: { title: [1, "title"], subtitle: [1, "subtitle"], ghost: [1, "ghost"], showBack: [1, "showBack"] }, outputs: { back: "back" }, ngContentSelectors: _c12, decls: 6, vars: 7, consts: [[3, "nzBack", "nzTitle", "nzSubtitle", "nzGhost", "nzBackIcon"], ["nz-page-header-breadcrumb", ""]], template: function HrmPageHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "nz-page-header", 0);
        \u0275\u0275listener("nzBack", function HrmPageHeader_Template_nz_page_header_nzBack_0_listener() {
          return ctx.back.emit();
        });
        \u0275\u0275conditionalCreate(1, HrmPageHeader_Conditional_1_Template, 2, 0, "nz-breadcrumb", 1);
        \u0275\u0275conditionalCreate(2, HrmPageHeader_Conditional_2_Template, 2, 0, "nz-page-header-tags");
        \u0275\u0275elementStart(3, "nz-page-header-extra");
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmPageHeader_Conditional_5_Template, 2, 0, "nz-page-header-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzTitle", ctx.title())("nzSubtitle", ctx.subtitle())("nzGhost", ctx.ghost())("nzBackIcon", ctx.showBack() ? "" : null);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.bc() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tags() ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.footer() ? 5 : -1);
      }
    }, dependencies: [NzPageHeaderModule, NzPageHeaderComponent, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective], styles: ["\n[_nghost-%COMP%]     .ant-page-header {\n  background: var(--bg-surface);\n}\n[_nghost-%COMP%]     .ant-page-header-heading-left {\n  flex-wrap: wrap;\n  align-items: baseline;\n  row-gap: 2px;\n}\n[_nghost-%COMP%]     .ant-page-header-heading-sub-title {\n  flex: 0 0 100%;\n  margin: 0;\n  padding: 0;\n  white-space: normal;\n  line-height: 1.4;\n}\n[_nghost-%COMP%]     .ant-page-header-back {\n  margin-right: 0;\n}\n/*# sourceMappingURL=hrm-page-header.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPageHeader, [{
    type: Component,
    args: [{ selector: "hrm-page-header", imports: [NzPageHeaderModule], template: `
    <nz-page-header
      [nzTitle]="title()"
      [nzSubtitle]="subtitle()"
      [nzGhost]="ghost()"
      [nzBackIcon]="showBack() ? '' : null"
      (nzBack)="back.emit()">
      @if (bc()) {
        <nz-breadcrumb nz-page-header-breadcrumb><ng-content select="[phBreadcrumb]" /></nz-breadcrumb>
      }
      @if (tags()) {
        <nz-page-header-tags><ng-content select="[phTags]" /></nz-page-header-tags>
      }
      <nz-page-header-extra><ng-content /></nz-page-header-extra>
      @if (footer()) {
        <nz-page-header-footer><ng-content select="[phFooter]" /></nz-page-header-footer>
      }
    </nz-page-header>
  `, host: { class: "hrm-page-header" }, styles: ["/* angular:styles/component:css;9bec156656b546a7caf2854cfd74d44626302997276ce10578a473240a977b00;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/navigation/hrm-page-header.ts */\n:host ::ng-deep .ant-page-header {\n  background: var(--bg-surface);\n}\n:host ::ng-deep .ant-page-header-heading-left {\n  flex-wrap: wrap;\n  align-items: baseline;\n  row-gap: 2px;\n}\n:host ::ng-deep .ant-page-header-heading-sub-title {\n  flex: 0 0 100%;\n  margin: 0;\n  padding: 0;\n  white-space: normal;\n  line-height: 1.4;\n}\n:host ::ng-deep .ant-page-header-back {\n  margin-right: 0;\n}\n/*# sourceMappingURL=hrm-page-header.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], ghost: [{ type: Input, args: [{ isSignal: true, alias: "ghost", required: false }] }], showBack: [{ type: Input, args: [{ isSignal: true, alias: "showBack", required: false }] }], back: [{ type: Output, args: ["back"] }], bc: [{ type: ContentChild, args: [forwardRef(() => HrmPageHeaderBreadcrumb), { isSignal: true }] }], tags: [{ type: ContentChild, args: [forwardRef(() => HrmPageHeaderTags), { isSignal: true }] }], footer: [{ type: ContentChild, args: [forwardRef(() => HrmPageHeaderFooter), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmPageHeader, { className: "HrmPageHeader", filePath: "libs/hrm-ui/src/lib/navigation/hrm-page-header.ts", lineNumber: 56 });
})();

export {
  HrmPageHeaderFooter,
  HrmPageHeader
};
//# sourceMappingURL=chunk-UNX4IGOQ.js.map
