import {
  NzTooltipBaseDirective,
  NzTooltipComponent,
  isTooltipEmpty
} from "./chunk-NGY4ECW2.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-KACPPJM2.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-44R6GU63.js";
import {
  NzNoAnimationDirective
} from "./chunk-KGTZ2LIT.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import {
  WithConfig
} from "./chunk-4363XCMO.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadValues,
  booleanAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popover.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzPopoverComponent_ng_template_0_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.nzTitle, " ");
  }
}
function NzPopoverComponent_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, NzPopoverComponent_ng_template_0_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx_r1.nzTitleContext));
  }
}
function NzPopoverComponent_ng_template_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.nzContent, " ");
  }
}
function NzPopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275animateLeave(function NzPopoverComponent_ng_template_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzPopoverComponent_ng_template_0_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomAnimationEnter());
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div");
    \u0275\u0275conditionalCreate(5, NzPopoverComponent_ng_template_0_Conditional_5_Template, 2, 4, "div", 6);
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275template(7, NzPopoverComponent_ng_template_0_ng_container_7_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzOverlayStyle);
    \u0275\u0275classMap(ctx_r1._classMap);
    \u0275\u0275classProp("ant-popover-rtl", ctx_r1.dir() === "rtl");
    \u0275\u0275property("nzNoAnimation", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation()));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.nzTitle ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzContent)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(10, _c0, ctx_r1.nzContentContext));
  }
}
var NZ_CONFIG_MODULE_NAME = "popover";
var NzPopoverDirective = (() => {
  let _classSuper = NzTooltipBaseDirective;
  let _nzPopoverBackdrop_decorators;
  let _nzPopoverBackdrop_initializers = [];
  let _nzPopoverBackdrop_extraInitializers = [];
  return class NzPopoverDirective2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzPopoverBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzPopoverBackdrop_decorators, {
        kind: "field",
        name: "nzPopoverBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPopoverBackdrop" in obj,
          get: (obj) => obj.nzPopoverBackdrop,
          set: (obj, value) => {
            obj.nzPopoverBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzPopoverBackdrop_initializers, _nzPopoverBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    /* eslint-disable @angular-eslint/no-input-rename, @angular-eslint/no-output-rename */
    arrowPointAtCenter;
    title;
    titleContext = null;
    content;
    contentContext = null;
    directiveTitle;
    trigger = "hover";
    placement = "top";
    origin;
    visible;
    mouseEnterDelay;
    mouseLeaveDelay;
    overlayClassName;
    overlayStyle;
    overlayClickable;
    directiveContent = null;
    nzPopoverBackdrop = __runInitializers(this, _nzPopoverBackdrop_initializers, false);
    visibleChange = (__runInitializers(this, _nzPopoverBackdrop_extraInitializers), new EventEmitter());
    getProxyPropertyMap() {
      return __spreadValues({
        nzPopoverBackdrop: ["nzBackdrop", () => this.nzPopoverBackdrop],
        titleContext: ["nzTitleContext", () => this.titleContext],
        contentContext: ["nzContentContext", () => this.contentContext]
      }, super.getProxyPropertyMap());
    }
    constructor() {
      super(NzPopoverComponent);
    }
    static \u0275fac = function NzPopoverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzPopoverDirective2)();
    };
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: NzPopoverDirective2,
      selectors: [["", "nz-popover", ""]],
      hostVars: 2,
      hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-popover-open", ctx.visible);
        }
      },
      inputs: {
        arrowPointAtCenter: [2, "nzPopoverArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
        title: [0, "nzPopoverTitle", "title"],
        titleContext: [0, "nzPopoverTitleContext", "titleContext"],
        content: [0, "nzPopoverContent", "content"],
        contentContext: [0, "nzPopoverContentContext", "contentContext"],
        directiveTitle: [0, "nz-popover", "directiveTitle"],
        trigger: [0, "nzPopoverTrigger", "trigger"],
        placement: [0, "nzPopoverPlacement", "placement"],
        origin: [0, "nzPopoverOrigin", "origin"],
        visible: [0, "nzPopoverVisible", "visible"],
        mouseEnterDelay: [0, "nzPopoverMouseEnterDelay", "mouseEnterDelay"],
        mouseLeaveDelay: [0, "nzPopoverMouseLeaveDelay", "mouseLeaveDelay"],
        overlayClassName: [0, "nzPopoverOverlayClassName", "overlayClassName"],
        overlayStyle: [0, "nzPopoverOverlayStyle", "overlayStyle"],
        overlayClickable: [0, "nzPopoverOverlayClickable", "overlayClickable"],
        nzPopoverBackdrop: "nzPopoverBackdrop"
      },
      outputs: {
        visibleChange: "nzPopoverVisibleChange"
      },
      exportAs: ["nzPopover"],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popover]",
      exportAs: "nzPopover",
      host: {
        "[class.ant-popover-open]": "visible"
      }
    }]
  }], () => [], {
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzPopoverArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input,
      args: ["nzPopoverTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzPopoverTitleContext"]
    }],
    content: [{
      type: Input,
      args: ["nzPopoverContent"]
    }],
    contentContext: [{
      type: Input,
      args: ["nzPopoverContentContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popover"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopoverTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopoverPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopoverOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopoverVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopoverMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopoverMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopoverOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopoverOverlayStyle"]
    }],
    overlayClickable: [{
      type: Input,
      args: ["nzPopoverOverlayClickable"]
    }],
    nzPopoverBackdrop: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopoverVisibleChange"]
    }]
  });
})();
var NzPopoverComponent = class _NzPopoverComponent extends NzTooltipComponent {
  _animationPrefix = "ant-zoom-big";
  _prefix = "ant-popover";
  nzContentContext = null;
  get hasBackdrop() {
    return this.nzTrigger === "click" ? this.nzBackdrop : false;
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NzPopoverComponent_BaseFactory;
    return function NzPopoverComponent_Factory(__ngFactoryType__) {
      return (\u0275NzPopoverComponent_BaseFactory || (\u0275NzPopoverComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NzPopoverComponent)))(__ngFactoryType__ || _NzPopoverComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPopoverComponent,
    selectors: [["nz-popover"]],
    exportAs: ["nzPopoverComponent"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 6,
    consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-popover", 3, "nzNoAnimation"], [1, "ant-popover-arrow"], [1, "ant-popover-content"], ["role", "tooltip", 1, "ant-popover-inner"], [1, "ant-popover-title"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
    template: function NzPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzPopoverComponent_ng_template_0_Template, 8, 12, "ng-template", 1, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275listener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          return ctx.onClickOutside($event);
        })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() {
          return ctx.hide();
        })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) {
          return ctx.onPositionChange($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
      }
    },
    dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverComponent, [{
    type: Component,
    args: [{
      selector: "nz-popover",
      exportAs: "nzPopoverComponent",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir() === 'rtl'"
        [class]="_classMap"
        [style]="nzOverlayStyle"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        [animate.enter]="zoomAnimationEnter()"
        [animate.leave]="zoomAnimationLeave()"
      >
        <div class="ant-popover-arrow"></div>
        <div class="ant-popover-content">
          <div class="ant-popover-inner" role="tooltip">
            <div>
              @if (nzTitle) {
                <div class="ant-popover-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle; context: { $implicit: nzTitleContext }">
                    {{ nzTitle }}
                  </ng-container>
                </div>
              }
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent; context: { $implicit: nzContentContext }">
                  {{ nzContent }}
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, NzNoAnimationDirective, NzOutletModule]
    }]
  }], null, null);
})();
var NzPopoverModule = class _NzPopoverModule {
  static \u0275fac = function NzPopoverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPopoverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzPopoverModule,
    imports: [NzPopoverDirective, NzPopoverComponent],
    exports: [NzPopoverDirective, NzPopoverComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzPopoverComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopoverDirective, NzPopoverComponent],
      exports: [NzPopoverDirective, NzPopoverComponent]
    }]
  }], null, null);
})();

export {
  NzPopoverDirective,
  NzPopoverModule
};
//# sourceMappingURL=chunk-BJZQPX5Z.js.map
