import {
  MenuService,
  NzIsMenuInsideDropdownToken,
  NzMenuModule
} from "./chunk-ODJV4T5O.js";
import {
  NzNoAnimationDirective,
  slideAnimationEnter,
  slideAnimationLeave
} from "./chunk-7NOIAAII.js";
import {
  POSITION_MAP,
  TOOLTIP_OFFSET_MAP,
  getPlacementName,
  setConnectedPositionOffset
} from "./chunk-WZF5QFUD.js";
import {
  ConnectionPositionPair,
  createCloseScrollStrategy,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-EV2WHLOQ.js";
import {
  TemplatePortal
} from "./chunk-WLI7HIYI.js";
import {
  ESCAPE,
  hasModifierKey
} from "./chunk-PKUWSVS6.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-BWIWCH2F.js";
import {
  Platform
} from "./chunk-HV4ZTFQC.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import {
  fromEventOutsideAngular
} from "./chunk-D3TBJI5I.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  auditTime,
  booleanAttribute,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  fromEvent,
  inject,
  map,
  merge,
  setClassMetadata,
  switchMap,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵanimateLeaveListener,
  ɵɵclassMap,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
var _c0 = ["*"];
function NzDropdownMenuComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275animateLeave(function NzDropdownMenuComponent_ng_template_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropdownAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzDropdownMenuComponent_ng_template_0_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropdownAnimationEnter());
    });
    \u0275\u0275animateLeaveListener(function NzDropdownMenuComponent_ng_template_0_Template_div_animateleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEvent($event));
    });
    \u0275\u0275listener("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMouseState(true));
    })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMouseState(false));
    });
    \u0275\u0275conditionalCreate(1, NzDropdownMenuComponent_ng_template_0_Conditional_1_Template, 1, 0, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzOverlayStyle);
    \u0275\u0275classMap(ctx_r1.nzOverlayClassName);
    \u0275\u0275classProp("ant-dropdown-rtl", ctx_r1.dir === "rtl")("ant-dropdown-show-arrow", ctx_r1.nzArrow)("ant-dropdown-placement-bottomLeft", ctx_r1.placement === "bottomLeft")("ant-dropdown-placement-bottomRight", ctx_r1.placement === "bottomRight")("ant-dropdown-placement-bottom", ctx_r1.placement === "bottom")("ant-dropdown-placement-topLeft", ctx_r1.placement === "topLeft")("ant-dropdown-placement-topRight", ctx_r1.placement === "topRight")("ant-dropdown-placement-top", ctx_r1.placement === "top");
    \u0275\u0275property("nzNoAnimation", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzArrow ? 1 : -1);
  }
}
var NZ_CONFIG_MODULE_NAME = "dropdown";
var listOfPositions = ["bottomLeft", "bottomRight", "topRight", "topLeft"];
var normalizePlacementForClass = (p) => {
  if (p === "topCenter") {
    return "top";
  }
  if (p === "bottomCenter") {
    return "bottom";
  }
  return p;
};
var NzDropdownDirective = (() => {
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzDropdownDirective2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService = inject(NzConfigService);
    renderer = inject(Renderer2);
    viewContainerRef = inject(ViewContainerRef);
    platform = inject(Platform);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    elementRef = inject(ElementRef);
    injector = inject(Injector);
    portal;
    overlayRef = null;
    inputVisible$ = new BehaviorSubject(false);
    nzTrigger$ = new BehaviorSubject("hover");
    overlayClose$ = new Subject();
    nzDropdownMenu = null;
    nzTrigger = "hover";
    nzMatchWidthElement = null;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzClickHide = (__runInitializers(this, _nzBackdrop_extraInitializers), true);
    nzDisabled = false;
    nzVisible = false;
    nzArrow = false;
    nzOverlayClassName = "";
    nzOverlayStyle = {};
    nzPlacement = "bottomLeft";
    nzVisibleChange = new EventEmitter();
    constructor() {
      this.destroyRef.onDestroy(() => {
        this.overlayRef?.dispose();
        this.overlayRef = null;
      });
    }
    setDropdownMenuValue(key, value) {
      this.nzDropdownMenu?.setValue(key, value);
    }
    ngAfterViewInit() {
      if (this.nzDropdownMenu) {
        const nativeElement = this.elementRef.nativeElement;
        const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(map(() => true)), fromEvent(nativeElement, "mouseleave").pipe(map(() => false)));
        const menuMouseState$ = this.nzDropdownMenu.mouseState$;
        const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
        const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
        const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((trigger) => {
          if (trigger === "hover") {
            return mergedMouseState$;
          } else if (trigger === "click") {
            return hostClickState$;
          } else {
            return EMPTY;
          }
        }));
        const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), map(() => false));
        const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.nzDisabled));
        const visible$ = merge(this.inputVisible$, domTriggerVisible$);
        combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntilDestroyed(this.destroyRef)).subscribe((visible) => {
          const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
          const triggerWidth = element.getBoundingClientRect().width;
          if (this.nzVisible !== visible) {
            this.nzVisibleChange.emit(visible);
          }
          this.nzVisible = visible;
          if (visible) {
            const positionStrategy = createFlexibleConnectedPositionStrategy(this.injector, this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
            positionStrategy.positionChanges.pipe(filter(() => Boolean(this.overlayRef)), map((change) => getPlacementName(change)), takeUntilDestroyed(this.destroyRef)).subscribe((placement) => {
              if (placement) {
                this.setDropdownMenuValue("placement", normalizePlacementForClass(placement));
              }
            });
            if (!this.overlayRef) {
              this.overlayRef = createOverlayRef(this.injector, {
                positionStrategy,
                minWidth: triggerWidth,
                disposeOnNavigation: true,
                hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
                scrollStrategy: createRepositionScrollStrategy(this.injector)
              });
              merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === ESCAPE && !hasModifierKey(e)))).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
                this.overlayClose$.next(false);
              });
            } else {
              const overlayConfig = this.overlayRef.getConfig();
              overlayConfig.minWidth = triggerWidth;
            }
            const positions = [this.nzPlacement, ...listOfPositions].map((position) => {
              return this.nzArrow ? setConnectedPositionOffset(POSITION_MAP[position], TOOLTIP_OFFSET_MAP[position]) : POSITION_MAP[position];
            });
            positionStrategy.withPositions(positions);
            if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
              this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
            }
            this.setDropdownMenuValue("nzArrow", this.nzArrow);
            this.setDropdownMenuValue("placement", normalizePlacementForClass(this.nzPlacement));
            this.overlayRef.attach(this.portal);
          } else {
            this.overlayRef?.detach();
          }
        });
        this.nzDropdownMenu.animationStateChange$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
          this.overlayRef?.dispose();
          this.overlayRef = null;
          event.animationComplete();
        });
      }
    }
    ngOnChanges(changes) {
      const {
        nzVisible,
        nzDisabled,
        nzOverlayClassName,
        nzOverlayStyle,
        nzTrigger,
        nzArrow,
        nzPlacement
      } = changes;
      if (nzTrigger) {
        this.nzTrigger$.next(this.nzTrigger);
      }
      if (nzVisible) {
        this.inputVisible$.next(this.nzVisible);
      }
      if (nzDisabled) {
        const nativeElement = this.elementRef.nativeElement;
        if (this.nzDisabled) {
          this.renderer.setAttribute(nativeElement, "disabled", "");
          this.inputVisible$.next(false);
        } else {
          this.renderer.removeAttribute(nativeElement, "disabled");
        }
      }
      if (nzOverlayClassName) {
        this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
      }
      if (nzOverlayStyle) {
        this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
      }
      if (nzArrow) {
        this.setDropdownMenuValue("nzArrow", this.nzArrow);
      }
      if (nzPlacement) {
        this.setDropdownMenuValue("placement", normalizePlacementForClass(this.nzPlacement));
      }
    }
    static \u0275fac = function NzDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDropdownDirective2)();
    };
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: NzDropdownDirective2,
      selectors: [["", "nz-dropdown", ""]],
      hostAttrs: [1, "ant-dropdown-trigger"],
      inputs: {
        nzDropdownMenu: "nzDropdownMenu",
        nzTrigger: "nzTrigger",
        nzMatchWidthElement: "nzMatchWidthElement",
        nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute],
        nzClickHide: [2, "nzClickHide", "nzClickHide", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzVisible: [2, "nzVisible", "nzVisible", booleanAttribute],
        nzArrow: [2, "nzArrow", "nzArrow", booleanAttribute],
        nzOverlayClassName: "nzOverlayClassName",
        nzOverlayStyle: "nzOverlayStyle",
        nzPlacement: "nzPlacement"
      },
      outputs: {
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzDropdown"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-dropdown]",
      exportAs: "nzDropdown",
      host: {
        class: "ant-dropdown-trigger"
      }
    }]
  }], () => [], {
    nzDropdownMenu: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzMatchWidthElement: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClickHide: [{
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
    nzVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }]
  });
})();
var NzContextMenuServiceModule = class _NzContextMenuServiceModule {
  static \u0275fac = function NzContextMenuServiceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContextMenuServiceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzContextMenuServiceModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{
    type: NgModule
  }], null, null);
})();
var NzDropdownADirective = class _NzDropdownADirective {
  static \u0275fac = function NzDropdownADirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropdownADirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDropdownADirective,
    selectors: [["a", "nz-dropdown", ""]],
    hostAttrs: [1, "ant-dropdown-link"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownADirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-dropdown]",
      host: {
        class: "ant-dropdown-link"
      }
    }]
  }], null, null);
})();
var NzDropdownMenuComponent = class _NzDropdownMenuComponent {
  cdr = inject(ChangeDetectorRef);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  viewContainerRef = inject(ViewContainerRef);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  nzMenuService = inject(MenuService);
  isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
  descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
  mouseState$ = new BehaviorSubject(false);
  animationStateChange$ = new EventEmitter();
  templateRef;
  nzOverlayClassName = "";
  nzOverlayStyle = {};
  nzArrow = false;
  placement = "bottomLeft";
  dir = "ltr";
  dropdownAnimationEnter = slideAnimationEnter();
  dropdownAnimationLeave = slideAnimationLeave();
  onAnimationEvent(event) {
    const element = event.target;
    const onAnimationEnd = () => {
      element.removeEventListener("animationend", onAnimationEnd);
      this.animationStateChange$.emit(event);
    };
    element.addEventListener("animationend", onAnimationEnd);
  }
  setMouseState(visible) {
    this.mouseState$.next(visible);
  }
  setValue(key, value) {
    this[key] = value;
    this.cdr.markForCheck();
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
  }
  static \u0275fac = function NzDropdownMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropdownMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzDropdownMenuComponent,
    selectors: [["nz-dropdown-menu"]],
    viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    exportAs: ["nzDropdownMenu"],
    features: [\u0275\u0275ProvidersFeature([
      MenuService,
      /** menu is inside dropdown-menu component **/
      {
        provide: NzIsMenuInsideDropdownToken,
        useValue: true
      }
    ])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    consts: [[1, "ant-dropdown", 3, "mouseenter", "mouseleave", "nzNoAnimation"], [1, "ant-dropdown-arrow"]],
    template: function NzDropdownMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzDropdownMenuComponent_ng_template_0_Template, 3, 22, "ng-template");
      }
    },
    dependencies: [NzNoAnimationDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
    type: Component,
    args: [{
      selector: `nz-dropdown-menu`,
      exportAs: `nzDropdownMenu`,
      providers: [
        MenuService,
        /** menu is inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropdownToken,
          useValue: true
        }
      ],
      template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [class.ant-dropdown-show-arrow]="nzArrow"
        [class.ant-dropdown-placement-bottomLeft]="placement === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomRight]="placement === 'bottomRight'"
        [class.ant-dropdown-placement-bottom]="placement === 'bottom'"
        [class.ant-dropdown-placement-topLeft]="placement === 'topLeft'"
        [class.ant-dropdown-placement-topRight]="placement === 'topRight'"
        [class.ant-dropdown-placement-top]="placement === 'top'"
        [class]="nzOverlayClassName"
        [style]="nzOverlayStyle"
        [animate.enter]="dropdownAnimationEnter()"
        [animate.leave]="dropdownAnimationLeave()"
        (animate.leave)="onAnimationEvent($event)"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        @if (nzArrow) {
          <div class="ant-dropdown-arrow"></div>
        }
        <ng-content />
      </div>
    </ng-template>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzNoAnimationDirective]
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NzDropdownModule = class _NzDropdownModule {
  static \u0275fac = function NzDropdownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDropdownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzDropdownModule,
    imports: [NzDropdownDirective, NzDropdownADirective, NzDropdownMenuComponent, NzContextMenuServiceModule],
    exports: [NzMenuModule, NzDropdownDirective, NzDropdownADirective, NzDropdownMenuComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzContextMenuServiceModule, NzMenuModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [NzDropdownDirective, NzDropdownADirective, NzDropdownMenuComponent, NzContextMenuServiceModule],
      exports: [NzMenuModule, NzDropdownDirective, NzDropdownADirective, NzDropdownMenuComponent]
    }]
  }], null, null);
})();
var NzDropDownModule = NzDropdownModule;
var LIST_OF_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "top"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "top"
})];
var NzContextMenuService = class _NzContextMenuService {
  ngZone = inject(NgZone);
  injector = inject(Injector);
  overlayRef = null;
  closeSubscription = Subscription.EMPTY;
  create($event, nzDropdownMenuComponent) {
    this.close(true);
    const {
      x,
      y
    } = $event;
    if ($event instanceof MouseEvent) {
      $event.preventDefault();
    }
    this.overlayRef = createOverlayRef(this.injector, {
      positionStrategy: createFlexibleConnectedPositionStrategy(this.injector, {
        x,
        y
      }).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown"),
      disposeOnNavigation: true,
      scrollStrategy: createCloseScrollStrategy(this.injector)
    });
    this.closeSubscription = new Subscription();
    this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
    this.closeSubscription.add(merge(fromEventOutsideAngular(document, "click").pipe(
      filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)),
      /** handle firefox contextmenu event **/
      filter((event) => event.button !== 2)
    ), fromEventOutsideAngular(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close())));
    return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
  }
  close(clear = false) {
    if (this.overlayRef) {
      this.overlayRef.detach();
      if (clear) {
        this.overlayRef.dispose();
      }
      this.overlayRef = null;
      this.closeSubscription.unsubscribe();
    }
  }
  static \u0275fac = function NzContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzContextMenuService,
    factory: _NzContextMenuService.\u0275fac,
    providedIn: NzContextMenuServiceModule
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
    type: Injectable,
    args: [{
      providedIn: NzContextMenuServiceModule
    }]
  }], null, null);
})();

export {
  NzDropdownDirective,
  NzDropdownMenuComponent,
  NzDropdownModule,
  NzDropDownModule
};
//# sourceMappingURL=chunk-F6AHQ5QX.js.map
