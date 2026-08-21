import {
  NzPopoverDirective
} from "./chunk-GKLVT5NB.js";
import {
  NzTooltipBaseDirective,
  NzTooltipComponent,
  NzTooltipDirective
} from "./chunk-UDAG7UB6.js";
import {
  NzDropdownDirective
} from "./chunk-F6AHQ5QX.js";
import {
  NzNoAnimationDirective
} from "./chunk-7NOIAAII.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-WZF5QFUD.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-EV2WHLOQ.js";
import {
  NzI18nModule,
  NzI18nPipe
} from "./chunk-B5XVGUQ7.js";
import {
  A11yModule,
  CdkTrapFocus
} from "./chunk-3BG2BWBR.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-IMWVUFP6.js";
import {
  NzWaveDirective
} from "./chunk-ICAAXTRA.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-NXJVNWYP.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LHDJXUQP.js";
import {
  WithConfig
} from "./chunk-BWIWCH2F.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import {
  wrapIntoObservable
} from "./chunk-D3TBJI5I.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Subject,
  ViewChildren,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  filter,
  finalize,
  first,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popconfirm.mjs
var _c0 = ["okBtn"];
var _c1 = ["cancelBtn"];
function NzPopconfirmComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", icon_r3 || "exclamation-circle");
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275template(1, NzPopconfirmComponent_ng_template_0_Conditional_7_ng_container_1_Template, 2, 1, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzIcon);
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.nzTitle, " ");
  }
}
function NzPopconfirmComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275animateLeave(function NzPopconfirmComponent_ng_template_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzPopconfirmComponent_ng_template_0_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomAnimationEnter());
    });
    \u0275\u0275conditionalCreate(1, NzPopconfirmComponent_ng_template_0_Conditional_1_Template, 1, 0, "div", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "div", 7)(4, "div")(5, "div", 8)(6, "div", 9);
    \u0275\u0275conditionalCreate(7, NzPopconfirmComponent_ng_template_0_Conditional_7_Template, 2, 1, "span", 10);
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275template(9, NzPopconfirmComponent_ng_template_0_ng_container_9_Template, 2, 1, "ng-container", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13)(11, "button", 14, 1);
    \u0275\u0275listener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275declareLet(13);
    \u0275\u0275pipe(14, "nzI18n");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 15, 2);
    \u0275\u0275listener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275declareLet(18);
    \u0275\u0275pipe(19, "nzI18n");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzOverlayStyle);
    \u0275\u0275classMap(ctx_r1._classMap);
    \u0275\u0275classProp("ant-popover-rtl", ctx_r1.dir() === "rtl");
    \u0275\u0275property("cdkTrapFocusAutoCapture", ctx_r1.nzAutoFocus !== null)("nzNoAnimation", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzPopconfirmShowArrow ? 1 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.nzIcon !== null ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", ctx_r1.nzTitleContext);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzDanger", (tmp_13_0 = ctx_r1.nzCancelButtonProps()) == null ? null : tmp_13_0.nzDanger)("disabled", (tmp_14_0 = ctx_r1.nzCancelButtonProps()) == null ? null : tmp_14_0.nzDisabled);
    \u0275\u0275attribute("cdkFocusInitial", ctx_r1.nzAutoFocus === "cancel" || null);
    const cancelText_r4 = ctx_r1.nzCancelText() || \u0275\u0275pipeBind1(14, 22, "Modal.cancelText");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", cancelText_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275property("nzType", ctx_r1.nzOkButtonProps().nzType)("nzDanger", ctx_r1.nzOkButtonProps().nzDanger)("nzLoading", ctx_r1.confirmLoading)("disabled", ctx_r1.nzOkButtonProps().nzDisabled);
    \u0275\u0275attribute("cdkFocusInitial", ctx_r1.nzAutoFocus === "ok" || null);
    const okText_r5 = ctx_r1.nzOkText() || \u0275\u0275pipeBind1(19, 24, "Modal.okText");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", okText_r5, " ");
  }
}
var NZ_CONFIG_MODULE_NAME = "popconfirm";
var NzPopconfirmDirective = (() => {
  let _classSuper = NzTooltipBaseDirective;
  let _nzPopconfirmBackdrop_decorators;
  let _nzPopconfirmBackdrop_initializers = [];
  let _nzPopconfirmBackdrop_extraInitializers = [];
  let _nzAutofocus_decorators;
  let _nzAutofocus_initializers = [];
  let _nzAutofocus_extraInitializers = [];
  return class NzPopconfirmDirective2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzPopconfirmBackdrop_decorators = [WithConfig()];
      _nzAutofocus_decorators = [WithConfig()];
      __esDecorate(null, null, _nzPopconfirmBackdrop_decorators, {
        kind: "field",
        name: "nzPopconfirmBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPopconfirmBackdrop" in obj,
          get: (obj) => obj.nzPopconfirmBackdrop,
          set: (obj, value) => {
            obj.nzPopconfirmBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzPopconfirmBackdrop_initializers, _nzPopconfirmBackdrop_extraInitializers);
      __esDecorate(null, null, _nzAutofocus_decorators, {
        kind: "field",
        name: "nzAutofocus",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAutofocus" in obj,
          get: (obj) => obj.nzAutofocus,
          set: (obj, value) => {
            obj.nzAutofocus = value;
          }
        },
        metadata: _metadata
      }, _nzAutofocus_initializers, _nzAutofocus_extraInitializers);
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
    directiveTitle;
    trigger = "click";
    placement = "top";
    origin;
    mouseEnterDelay;
    mouseLeaveDelay;
    overlayClassName;
    overlayStyle;
    visible;
    nzBeforeConfirm;
    nzIcon;
    nzCondition = false;
    nzPopconfirmShowArrow = true;
    nzPopconfirmBackdrop = __runInitializers(this, _nzPopconfirmBackdrop_initializers, false);
    nzAutofocus = (__runInitializers(this, _nzPopconfirmBackdrop_extraInitializers), __runInitializers(this, _nzAutofocus_initializers, null));
    nzOkText = (__runInitializers(this, _nzAutofocus_extraInitializers), input(null, ...ngDevMode ? [{
      debugName: "nzOkText"
    }] : []));
    nzOkType = input("primary", ...ngDevMode ? [{
      debugName: "nzOkType"
    }] : []);
    nzCancelText = input(null, ...ngDevMode ? [{
      debugName: "nzCancelText"
    }] : []);
    nzOkButtonProps = input(null, ...ngDevMode ? [{
      debugName: "nzOkButtonProps"
    }] : []);
    nzCancelButtonProps = input(null, ...ngDevMode ? [{
      debugName: "nzCancelButtonProps"
    }] : []);
    /**
     * @deprecated v21
     * please use the nzOkButton object input to describe option of the ok button
     */
    nzOkDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "nzOkDisabled"
    } : {}), {
      transform: booleanAttribute
    }));
    /**
     * @deprecated v21
     * please use the nzOkButton object input to describe option of the ok button
     */
    nzOkDanger = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "nzOkDanger"
    } : {}), {
      transform: booleanAttribute
    }));
    okButtonProps = computed(() => __spreadProps(__spreadValues({}, this.nzOkButtonProps()), {
      nzType: this.nzOkButtonProps()?.nzType || this.nzOkType() === "danger" ? "primary" : this.nzOkType(),
      nzDanger: this.nzOkDanger() || this.nzOkButtonProps()?.nzDanger || this.nzOkType() === "danger",
      nzDisabled: this.nzOkDisabled() || this.nzOkButtonProps()?.nzDisabled
    }), ...ngDevMode ? [{
      debugName: "okButtonProps"
    }] : []);
    cancelButtonProps = computed(() => __spreadValues({}, this.nzCancelButtonProps()), ...ngDevMode ? [{
      debugName: "cancelButtonProps"
    }] : []);
    directiveContent = null;
    content = null;
    overlayClickable;
    visibleChange = new EventEmitter();
    nzOnCancel = new EventEmitter();
    nzOnConfirm = new EventEmitter();
    getProxyPropertyMap() {
      return __spreadValues({
        nzOkText: ["nzOkText", () => this.nzOkText],
        nzCancelText: ["nzCancelText", () => this.nzCancelText],
        nzOkButtonProps: ["nzOkButtonProps", () => this.okButtonProps],
        nzCancelButtonProps: ["nzCancelButtonProps", () => this.cancelButtonProps],
        nzBeforeConfirm: ["nzBeforeConfirm", () => this.nzBeforeConfirm],
        nzCondition: ["nzCondition", () => this.nzCondition],
        nzIcon: ["nzIcon", () => this.nzIcon],
        nzPopconfirmShowArrow: ["nzPopconfirmShowArrow", () => this.nzPopconfirmShowArrow],
        nzPopconfirmBackdrop: ["nzBackdrop", () => this.nzPopconfirmBackdrop],
        nzPopconfirmContext: ["nzTitleContext", () => this.titleContext],
        nzAutoFocus: ["nzAutoFocus", () => this.nzAutofocus]
      }, super.getProxyPropertyMap());
    }
    constructor() {
      super(NzPopconfirmComponent);
    }
    /**
     * @override
     */
    createComponent() {
      super.createComponent();
      this.component.nzOnCancel.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.nzOnCancel.emit();
      });
      this.component.nzOnConfirm.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.nzOnConfirm.emit();
      });
    }
    static \u0275fac = function NzPopconfirmDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzPopconfirmDirective2)();
    };
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: NzPopconfirmDirective2,
      selectors: [["", "nz-popconfirm", ""]],
      hostVars: 2,
      hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-popover-open", ctx.visible);
        }
      },
      inputs: {
        arrowPointAtCenter: [2, "nzPopconfirmArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
        title: [0, "nzPopconfirmTitle", "title"],
        titleContext: [0, "nzPopconfirmTitleContext", "titleContext"],
        directiveTitle: [0, "nz-popconfirm", "directiveTitle"],
        trigger: [0, "nzPopconfirmTrigger", "trigger"],
        placement: [0, "nzPopconfirmPlacement", "placement"],
        origin: [0, "nzPopconfirmOrigin", "origin"],
        mouseEnterDelay: [0, "nzPopconfirmMouseEnterDelay", "mouseEnterDelay"],
        mouseLeaveDelay: [0, "nzPopconfirmMouseLeaveDelay", "mouseLeaveDelay"],
        overlayClassName: [0, "nzPopconfirmOverlayClassName", "overlayClassName"],
        overlayStyle: [0, "nzPopconfirmOverlayStyle", "overlayStyle"],
        visible: [0, "nzPopconfirmVisible", "visible"],
        nzBeforeConfirm: "nzBeforeConfirm",
        nzIcon: "nzIcon",
        nzCondition: [2, "nzCondition", "nzCondition", booleanAttribute],
        nzPopconfirmShowArrow: [2, "nzPopconfirmShowArrow", "nzPopconfirmShowArrow", booleanAttribute],
        nzPopconfirmBackdrop: "nzPopconfirmBackdrop",
        nzAutofocus: "nzAutofocus",
        nzOkText: [1, "nzOkText"],
        nzOkType: [1, "nzOkType"],
        nzCancelText: [1, "nzCancelText"],
        nzOkButtonProps: [1, "nzOkButtonProps"],
        nzCancelButtonProps: [1, "nzCancelButtonProps"],
        nzOkDisabled: [1, "nzOkDisabled"],
        nzOkDanger: [1, "nzOkDanger"]
      },
      outputs: {
        visibleChange: "nzPopconfirmVisibleChange",
        nzOnCancel: "nzOnCancel",
        nzOnConfirm: "nzOnConfirm"
      },
      exportAs: ["nzPopconfirm"],
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popconfirm]",
      exportAs: "nzPopconfirm",
      host: {
        "[class.ant-popover-open]": "visible"
      }
    }]
  }], () => [], {
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzPopconfirmArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input,
      args: ["nzPopconfirmTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzPopconfirmTitleContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popconfirm"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopconfirmTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopconfirmPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopconfirmOrigin"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopconfirmOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopconfirmOverlayStyle"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopconfirmVisible"]
    }],
    nzBeforeConfirm: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzCondition: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPopconfirmShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPopconfirmBackdrop: [{
      type: Input
    }],
    nzAutofocus: [{
      type: Input
    }],
    nzOkText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOkText",
        required: false
      }]
    }],
    nzOkType: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOkType",
        required: false
      }]
    }],
    nzCancelText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzCancelText",
        required: false
      }]
    }],
    nzOkButtonProps: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOkButtonProps",
        required: false
      }]
    }],
    nzCancelButtonProps: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzCancelButtonProps",
        required: false
      }]
    }],
    nzOkDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOkDisabled",
        required: false
      }]
    }],
    nzOkDanger: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOkDanger",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopconfirmVisibleChange"]
    }],
    nzOnCancel: [{
      type: Output
    }],
    nzOnConfirm: [{
      type: Output
    }]
  });
})();
var NzPopconfirmComponent = class _NzPopconfirmComponent extends NzTooltipComponent {
  _animationPrefix = "ant-zoom-big";
  okBtn;
  cancelBtn;
  nzCondition = false;
  nzPopconfirmShowArrow = true;
  nzIcon;
  nzAutoFocus = null;
  nzBeforeConfirm = null;
  nzOkText = signal(null, ...ngDevMode ? [{
    debugName: "nzOkText"
  }] : []);
  nzCancelText = signal(null, ...ngDevMode ? [{
    debugName: "nzCancelText"
  }] : []);
  nzOkButtonProps = signal({
    nzType: "primary"
  }, ...ngDevMode ? [{
    debugName: "nzOkButtonProps"
  }] : []);
  nzCancelButtonProps = signal(null, ...ngDevMode ? [{
    debugName: "nzCancelButtonProps"
  }] : []);
  nzOnCancel = new Subject();
  nzOnConfirm = new Subject();
  _trigger = "click";
  elementFocusedBeforeModalWasOpened = null;
  document = inject(DOCUMENT);
  _prefix = "ant-popover";
  confirmLoading = false;
  constructor() {
    super();
    this.destroyRef.onDestroy(() => {
      this.nzVisibleChange.complete();
    });
  }
  show() {
    if (!this.nzCondition) {
      this.capturePreviouslyFocusedElement();
      super.show();
    } else {
      this.onConfirm();
    }
  }
  hide() {
    super.hide();
    this.restoreFocus();
  }
  handleConfirm() {
    this.nzOnConfirm.next();
    super.hide();
  }
  onCancel() {
    this.nzOnCancel.next();
    super.hide();
  }
  onConfirm() {
    if (this.nzBeforeConfirm) {
      this.confirmLoading = true;
      this.cdr.markForCheck();
      wrapIntoObservable(this.nzBeforeConfirm()).pipe(first(), filter(Boolean), finalize(() => {
        this.confirmLoading = false;
        this.cdr.markForCheck();
      })).subscribe(() => this.handleConfirm());
    } else {
      this.handleConfirm();
    }
  }
  capturePreviouslyFocusedElement() {
    if (this.document) {
      this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
    }
  }
  restoreFocus() {
    this.elementFocusedBeforeModalWasOpened?.focus();
  }
  static \u0275fac = function NzPopconfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPopconfirmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPopconfirmComponent,
    selectors: [["nz-popconfirm"]],
    viewQuery: function NzPopconfirmComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, ElementRef)(_c1, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.okBtn = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancelBtn = _t);
      }
    },
    exportAs: ["nzPopconfirmComponent"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 6,
    consts: [["overlay", "cdkConnectedOverlay"], ["cancelBtn", ""], ["okBtn", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], ["cdkTrapFocus", "", 1, "ant-popover", 3, "cdkTrapFocusAutoCapture", "nzNoAnimation"], [1, "ant-popover-arrow"], [1, "ant-popover-content"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [1, "ant-popover-message-icon"], [1, "ant-popover-message-title"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-popover-buttons"], ["nz-button", "", "nzSize", "small", 3, "click", "nzDanger", "disabled"], ["nz-button", "", "nzSize", "small", 3, "click", "nzType", "nzDanger", "nzLoading", "disabled"], [4, "nzStringTemplateOutlet"], ["nzTheme", "fill", 3, "nzType"]],
    template: function NzPopconfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzPopconfirmComponent_ng_template_0_Template, 21, 26, "ng-template", 3, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275listener("overlayOutsideClick", function NzPopconfirmComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          return ctx.onClickOutside($event);
        })("detach", function NzPopconfirmComponent_Template_ng_template_detach_0_listener() {
          return ctx.hide();
        })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_0_listener($event) {
          return ctx.onPositionChange($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
      }
    },
    dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, A11yModule, CdkTrapFocus, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzI18nModule, NzI18nPipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmComponent, [{
    type: Component,
    args: [{
      selector: "nz-popconfirm",
      exportAs: "nzPopconfirmComponent",
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
    >
      <div
        cdkTrapFocus
        [cdkTrapFocusAutoCapture]="nzAutoFocus !== null"
        class="ant-popover"
        [class]="_classMap"
        [class.ant-popover-rtl]="dir() === 'rtl'"
        [style]="nzOverlayStyle"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        [animate.enter]="zoomAnimationEnter()"
        [animate.leave]="zoomAnimationLeave()"
      >
        @if (nzPopconfirmShowArrow) {
          <div class="ant-popover-arrow"></div>
        }
        <div class="ant-popover-content">
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  @if (nzIcon !== null) {
                    <span class="ant-popover-message-icon">
                      <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                        <nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill" />
                      </ng-container>
                    </span>
                  }
                  <div class="ant-popover-message-title">
                    <ng-container *nzStringTemplateOutlet="nzTitle; context: nzTitleContext">
                      {{ nzTitle }}
                    </ng-container>
                  </div>
                </div>
                <div class="ant-popover-buttons">
                  <button
                    nz-button
                    #cancelBtn
                    nzSize="small"
                    [nzDanger]="nzCancelButtonProps()?.nzDanger"
                    (click)="onCancel()"
                    [disabled]="nzCancelButtonProps()?.nzDisabled"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'cancel' || null"
                  >
                    @let cancelText = nzCancelText() || ('Modal.cancelText' | nzI18n);
                    {{ cancelText }}
                  </button>
                  <button
                    nz-button
                    #okBtn
                    nzSize="small"
                    [nzType]="nzOkButtonProps().nzType"
                    [nzDanger]="nzOkButtonProps().nzDanger"
                    [nzLoading]="confirmLoading"
                    [disabled]="nzOkButtonProps().nzDisabled"
                    (click)="onConfirm()"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'ok' || null"
                  >
                    @let okText = nzOkText() || ('Modal.okText' | nzI18n);
                    {{ okText }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, A11yModule, NzNoAnimationDirective, NzOutletModule, NzIconModule, NzButtonModule, NzI18nModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    okBtn: [{
      type: ViewChildren,
      args: ["okBtn", {
        read: ElementRef
      }]
    }],
    cancelBtn: [{
      type: ViewChildren,
      args: ["cancelBtn", {
        read: ElementRef
      }]
    }]
  });
})();
var NzPopconfirmModule = class _NzPopconfirmModule {
  static \u0275fac = function NzPopconfirmModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPopconfirmModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzPopconfirmModule,
    imports: [NzPopconfirmComponent, NzPopconfirmDirective],
    exports: [NzPopconfirmComponent, NzPopconfirmDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzPopconfirmComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopconfirmComponent, NzPopconfirmDirective],
      exports: [NzPopconfirmComponent, NzPopconfirmDirective]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/overlays/hrm-overlay-directives.ts
var HrmTooltip = class _HrmTooltip {
  static {
    this.\u0275fac = function HrmTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTooltip)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmTooltip, selectors: [["", "hrmTooltip", ""]], features: [\u0275\u0275HostDirectivesFeature([{ directive: NzTooltipDirective, inputs: ["nzTooltipTitle", "hrmTooltip", "nzTooltipPlacement", "hrmTooltipPlacement", "nzTooltipTrigger", "hrmTooltipTrigger"] }])] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTooltip, [{
    type: Directive,
    args: [{
      selector: "[hrmTooltip]",
      hostDirectives: [{
        directive: NzTooltipDirective,
        inputs: ["nzTooltipTitle: hrmTooltip", "nzTooltipPlacement: hrmTooltipPlacement", "nzTooltipTrigger: hrmTooltipTrigger"]
      }]
    }]
  }], null, null);
})();
var HrmPopover = class _HrmPopover {
  static {
    this.\u0275fac = function HrmPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPopover)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmPopover, selectors: [["", "hrmPopover", ""]], features: [\u0275\u0275HostDirectivesFeature([{ directive: NzPopoverDirective, inputs: ["nzPopoverTitle", "hrmPopoverTitle", "nzPopoverContent", "hrmPopoverContent", "nzPopoverPlacement", "hrmPopoverPlacement", "nzPopoverTrigger", "hrmPopoverTrigger"] }])] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPopover, [{
    type: Directive,
    args: [{
      selector: "[hrmPopover]",
      hostDirectives: [{
        directive: NzPopoverDirective,
        inputs: ["nzPopoverTitle: hrmPopoverTitle", "nzPopoverContent: hrmPopoverContent", "nzPopoverPlacement: hrmPopoverPlacement", "nzPopoverTrigger: hrmPopoverTrigger"]
      }]
    }]
  }], null, null);
})();
var HrmPopconfirm = class _HrmPopconfirm {
  static {
    this.\u0275fac = function HrmPopconfirm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmPopconfirm)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmPopconfirm, selectors: [["", "hrmPopconfirm", ""]], features: [\u0275\u0275HostDirectivesFeature([{ directive: NzPopconfirmDirective, inputs: ["nzPopconfirmTitle", "hrmPopconfirm", "nzOkText", "hrmOkText", "nzCancelText", "hrmCancelText", "nzOkDanger", "hrmDanger", "nzPopconfirmPlacement", "hrmPopconfirmPlacement"], outputs: ["nzOnConfirm", "hrmConfirm", "nzOnCancel", "hrmCancel"] }])] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPopconfirm, [{
    type: Directive,
    args: [{
      selector: "[hrmPopconfirm]",
      hostDirectives: [{
        directive: NzPopconfirmDirective,
        inputs: ["nzPopconfirmTitle: hrmPopconfirm", "nzOkText: hrmOkText", "nzCancelText: hrmCancelText", "nzOkDanger: hrmDanger", "nzPopconfirmPlacement: hrmPopconfirmPlacement"],
        outputs: ["nzOnConfirm: hrmConfirm", "nzOnCancel: hrmCancel"]
      }]
    }]
  }], null, null);
})();
var HrmDropdown = class _HrmDropdown {
  static {
    this.\u0275fac = function HrmDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDropdown)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HrmDropdown, selectors: [["", "hrmDropdown", ""]], features: [\u0275\u0275HostDirectivesFeature([{ directive: NzDropdownDirective, inputs: ["nzDropdownMenu", "hrmDropdown", "nzTrigger", "hrmDropdownTrigger", "nzPlacement", "hrmDropdownPlacement"] }])] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDropdown, [{
    type: Directive,
    args: [{
      selector: "[hrmDropdown]",
      hostDirectives: [{
        directive: NzDropdownDirective,
        inputs: ["nzDropdownMenu: hrmDropdown", "nzTrigger: hrmDropdownTrigger", "nzPlacement: hrmDropdownPlacement"]
      }]
    }]
  }], null, null);
})();

export {
  HrmTooltip,
  HrmPopover,
  HrmPopconfirm,
  HrmDropdown
};
//# sourceMappingURL=chunk-ORJB2TMU.js.map
