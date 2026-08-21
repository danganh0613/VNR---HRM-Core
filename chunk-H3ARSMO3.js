import {
  NzDropdownDirective,
  NzDropdownModule
} from "./chunk-KGPHHG27.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink
} from "./chunk-LVO4IPRO.js";
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
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  PREFIX
} from "./chunk-VUIKJ27O.js";
import {
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  Input,
  NgModule,
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  filter,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs
var _c0 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    \u0275\u0275element(2, "nz-icon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const noMenuTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("nzDropdownMenu", ctx_r0.nzOverlay);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const noMenuTpl_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-breadcrumb-separator");
    \u0275\u0275template(1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-breadcrumb-item")(1, "a", 0);
    \u0275\u0275listener("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const breadcrumb_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigate(breadcrumb_r2.url, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("href", breadcrumb_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.breadcrumbs);
  }
}
var NzBreadcrumb = class {
};
var NzBreadCrumbSeparatorComponent = class _NzBreadCrumbSeparatorComponent {
  static \u0275fac = function NzBreadCrumbSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbSeparatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbSeparatorComponent,
    selectors: [["nz-breadcrumb-separator"]],
    hostAttrs: [1, "ant-breadcrumb-separator"],
    exportAs: ["nzBreadcrumbSeparator"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-breadcrumb-separator",
      exportAs: "nzBreadcrumbSeparator",
      template: `<ng-content />`,
      host: {
        class: "ant-breadcrumb-separator"
      }
    }]
  }], null, null);
})();
var NzBreadCrumbItemComponent = class _NzBreadCrumbItemComponent {
  nzBreadCrumbComponent = inject(NzBreadcrumb);
  /**
   * Dropdown content of a breadcrumb item.
   */
  nzOverlay;
  static \u0275fac = function NzBreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbItemComponent,
    selectors: [["nz-breadcrumb-item"]],
    inputs: {
      nzOverlay: "nzOverlay"
    },
    exportAs: ["nzBreadcrumbItem"],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
    template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 1)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1, null, 2);
        \u0275\u0275conditionalCreate(2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator");
        \u0275\u0275template(3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!!ctx.nzOverlay ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropdownModule, NzDropdownDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-breadcrumb-item",
      exportAs: "nzBreadcrumbItem",
      imports: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropdownModule, NzIconModule, NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl" />
        <nz-icon nzType="down" />
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], null, {
    nzOverlay: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbComponent = class _NzBreadCrumbComponent {
  injector = inject(Injector);
  cdr = inject(ChangeDetectorRef);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  nzAutoGenerate = false;
  nzSeparator = "/";
  nzRouteLabel = "breadcrumb";
  nzRouteLabelFn = (label) => label;
  nzRouteFn = (route) => route;
  breadcrumbs = [];
  dir = "ltr";
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
        startWith(true)
        // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch {
      throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl = child.snapshot.url.map((segment) => segment.path).filter((path) => path).join("/");
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        const shapedUrl = this.nzRouteFn(nextUrl);
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: shapedUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    }
  }
  static \u0275fac = function NzBreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBreadCrumbComponent,
    selectors: [["nz-breadcrumb"]],
    hostAttrs: [1, "ant-breadcrumb"],
    inputs: {
      nzAutoGenerate: [2, "nzAutoGenerate", "nzAutoGenerate", booleanAttribute],
      nzSeparator: "nzSeparator",
      nzRouteLabel: "nzRouteLabel",
      nzRouteLabelFn: "nzRouteLabelFn",
      nzRouteFn: "nzRouteFn"
    },
    exportAs: ["nzBreadcrumb"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NzBreadcrumb,
      useExisting: forwardRef(() => _NzBreadCrumbComponent)
    }])],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [[3, "click"]],
    template: function NzBreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
      }
    },
    dependencies: [NzBreadCrumbItemComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-breadcrumb",
      exportAs: "nzBreadcrumb",
      providers: [{
        provide: NzBreadcrumb,
        useExisting: forwardRef(() => NzBreadCrumbComponent)
      }],
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: "ant-breadcrumb"
      }
    }]
  }], null, {
    nzAutoGenerate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSeparator: [{
      type: Input
    }],
    nzRouteLabel: [{
      type: Input
    }],
    nzRouteLabelFn: [{
      type: Input
    }],
    nzRouteFn: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbModule = class _NzBreadCrumbModule {
  static \u0275fac = function NzBreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBreadCrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzBreadCrumbModule,
    imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
    exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbModule, [{
    type: NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/navigation/hrm-breadcrumb.ts
var _forTrack02 = ($index, $item) => $item.title;
function HrmBreadcrumb_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 2);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("icon", c_r1.icon)("size", 16);
  }
}
function HrmBreadcrumb_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275conditionalCreate(1, HrmBreadcrumb_For_2_Conditional_1_Conditional_1_Template, 1, 2, "tabler-icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", c_r1.link);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.icon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r1.title, " ");
  }
}
function HrmBreadcrumb_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 2);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("icon", c_r1.icon)("size", 16);
  }
}
function HrmBreadcrumb_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmBreadcrumb_For_2_Conditional_2_Conditional_0_Template, 1, 2, "tabler-icon", 2);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(c_r1.icon ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r1.title, " ");
  }
}
function HrmBreadcrumb_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-breadcrumb-item");
    \u0275\u0275conditionalCreate(1, HrmBreadcrumb_For_2_Conditional_1_Template, 3, 3, "a", 1)(2, HrmBreadcrumb_For_2_Conditional_2_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.link ? 1 : 2);
  }
}
var HrmBreadcrumb = class _HrmBreadcrumb {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.separator = input("", ...ngDevMode ? [{ debugName: "separator" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmBreadcrumb_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmBreadcrumb)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmBreadcrumb, selectors: [["hrm-breadcrumb"]], hostAttrs: [1, "hrm-breadcrumb"], inputs: { items: [1, "items"], separator: [1, "separator"] }, decls: 3, vars: 1, consts: [[3, "nzSeparator"], [3, "routerLink"], [1, "hrm-bc-ic", 3, "icon", "size"]], template: function HrmBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-breadcrumb", 0);
        \u0275\u0275repeaterCreate(1, HrmBreadcrumb_For_2_Template, 3, 1, "nz-breadcrumb-item", null, _forTrack02);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzSeparator", ctx.separator() || "/");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
      }
    }, dependencies: [NzBreadCrumbModule, NzBreadCrumbComponent, NzBreadCrumbItemComponent, RouterLink, TablerIconComponent], styles: ["\n.hrm-bc-ic[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: text-bottom;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=hrm-breadcrumb.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmBreadcrumb, [{
    type: Component,
    args: [{ selector: "hrm-breadcrumb", imports: [NzBreadCrumbModule, RouterLink, TablerIconComponent], template: `
    <nz-breadcrumb [nzSeparator]="separator() || '/'">
      @for (c of items(); track c.title) {
        <nz-breadcrumb-item>
          @if (c.link) {
            <a [routerLink]="c.link">
              @if (c.icon) { <tabler-icon class="hrm-bc-ic" [icon]="$any(c.icon)" [size]="16" /> }{{ c.title }}
            </a>
          } @else {
            @if (c.icon) { <tabler-icon class="hrm-bc-ic" [icon]="$any(c.icon)" [size]="16" /> }{{ c.title }}
          }
        </nz-breadcrumb-item>
      }
    </nz-breadcrumb>
  `, host: { class: "hrm-breadcrumb" }, styles: ["/* angular:styles/component:css;55ec1842a9b945809a8f4e28f492c59a0563cdcf4318f019280776156e5c6bb3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/navigation/hrm-breadcrumb.ts */\n.hrm-bc-ic {\n  display: inline-flex;\n  vertical-align: text-bottom;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=hrm-breadcrumb.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], separator: [{ type: Input, args: [{ isSignal: true, alias: "separator", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmBreadcrumb, { className: "HrmBreadcrumb", filePath: "libs/hrm-ui/src/lib/navigation/hrm-breadcrumb.ts", lineNumber: 37 });
})();

export {
  HrmBreadcrumb
};
//# sourceMappingURL=chunk-H3ARSMO3.js.map
