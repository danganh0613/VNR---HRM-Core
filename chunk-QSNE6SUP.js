import {
  NzAnimationCollapseDirective
} from "./chunk-KGTZ2LIT.js";
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
  WithConfig,
  onConfigChangeEventForComponent
} from "./chunk-4363XCMO.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  fromEventOutsideAngular
} from "./chunk-VUIKJ27O.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  filter,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  viewChild,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _c0 = ["*"];
var _c1 = ["collapseHeader"];
var _c2 = ["collapseIcon"];
function NzCollapsePanelComponent_Conditional_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const expandedIcon_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.active() ? 90 : 0);
  }
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3, 1);
    \u0275\u0275template(2, NzCollapsePanelComponent_Conditional_2_ng_container_2_Template, 2, 2, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
  }
}
function NzCollapsePanelComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzHeader);
  }
}
function NzCollapsePanelComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzExtra);
  }
}
function NzCollapsePanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, NzCollapsePanelComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var NzCollapseComponent = (() => {
  let _nzAccordion_decorators;
  let _nzAccordion_initializers = [];
  let _nzAccordion_extraInitializers = [];
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzGhost_decorators;
  let _nzGhost_initializers = [];
  let _nzGhost_extraInitializers = [];
  return class NzCollapseComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzAccordion_decorators = [WithConfig()];
      _nzBordered_decorators = [WithConfig()];
      _nzGhost_decorators = [WithConfig()];
      __esDecorate(null, null, _nzAccordion_decorators, {
        kind: "field",
        name: "nzAccordion",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAccordion" in obj,
          get: (obj) => obj.nzAccordion,
          set: (obj, value) => {
            obj.nzAccordion = value;
          }
        },
        metadata: _metadata
      }, _nzAccordion_initializers, _nzAccordion_extraInitializers);
      __esDecorate(null, null, _nzBordered_decorators, {
        kind: "field",
        name: "nzBordered",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBordered" in obj,
          get: (obj) => obj.nzBordered,
          set: (obj, value) => {
            obj.nzBordered = value;
          }
        },
        metadata: _metadata
      }, _nzBordered_initializers, _nzBordered_extraInitializers);
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
    cdr = inject(ChangeDetectorRef);
    dir = inject(Directionality).valueSignal;
    _nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    nzAccordion = __runInitializers(this, _nzAccordion_initializers, false);
    nzBordered = (__runInitializers(this, _nzAccordion_extraInitializers), __runInitializers(this, _nzBordered_initializers, true));
    nzGhost = (__runInitializers(this, _nzBordered_extraInitializers), __runInitializers(this, _nzGhost_initializers, false));
    nzExpandIconPosition = (__runInitializers(this, _nzGhost_extraInitializers), "start");
    nzSize = "middle";
    listOfNzCollapsePanelComponent = [];
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1, () => this.cdr.markForCheck());
    }
    addPanel(value) {
      this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
      this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
      const active = collapse.active();
      if (this.nzAccordion && !active) {
        this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse && item.active()).forEach((item) => item.activate(false));
      }
      collapse.activate(!active);
    }
    static \u0275fac = function NzCollapseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzCollapseComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzCollapseComponent2,
      selectors: [["nz-collapse"]],
      hostAttrs: [1, "ant-collapse"],
      hostVars: 14,
      hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-collapse-icon-placement-start", ctx.nzExpandIconPosition === "start")("ant-collapse-icon-placement-end", ctx.nzExpandIconPosition === "end")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir() === "rtl")("ant-collapse-small", ctx.nzSize === "small")("ant-collapse-large", ctx.nzSize === "large");
        }
      },
      inputs: {
        nzAccordion: [2, "nzAccordion", "nzAccordion", booleanAttribute],
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzGhost: [2, "nzGhost", "nzGhost", booleanAttribute],
        nzExpandIconPosition: "nzExpandIconPosition",
        nzSize: "nzSize"
      },
      exportAs: ["nzCollapse"],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzCollapseComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse",
      exportAs: "nzCollapse",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<ng-content />`,
      host: {
        class: "ant-collapse",
        "[class.ant-collapse-icon-placement-start]": `nzExpandIconPosition === 'start'`,
        "[class.ant-collapse-icon-placement-end]": `nzExpandIconPosition === 'end'`,
        "[class.ant-collapse-ghost]": `nzGhost`,
        "[class.ant-collapse-borderless]": "!nzBordered",
        "[class.ant-collapse-rtl]": `dir() === 'rtl'`,
        "[class.ant-collapse-small]": `nzSize === 'small'`,
        "[class.ant-collapse-large]": `nzSize === 'large'`
      }
    }]
  }], () => [], {
    nzAccordion: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGhost: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandIconPosition: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "collapsePanel";
var NzCollapsePanelComponent = (() => {
  let _nzShowArrow_decorators;
  let _nzShowArrow_initializers = [];
  let _nzShowArrow_extraInitializers = [];
  return class NzCollapsePanelComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShowArrow_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShowArrow_decorators, {
        kind: "field",
        name: "nzShowArrow",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowArrow" in obj,
          get: (obj) => obj.nzShowArrow,
          set: (obj, value) => {
            obj.nzShowArrow = value;
          }
        },
        metadata: _metadata
      }, _nzShowArrow_initializers, _nzShowArrow_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    ngZone = inject(NgZone);
    cdr = inject(ChangeDetectorRef);
    destroyRef = inject(DestroyRef);
    nzCollapseComponent = inject(NzCollapseComponent, {
      host: true
    });
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzActive = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "nzActive"
    } : {}), {
      transform: booleanAttribute
    }));
    /**
     * @deprecated Will be removed in v22, please use `nzCollapsible` with the value `'disabled'` instead.
     */
    nzDisabled = false;
    nzShowArrow = __runInitializers(this, _nzShowArrow_initializers, true);
    nzExtra = __runInitializers(this, _nzShowArrow_extraInitializers);
    nzHeader;
    nzExpandedIcon;
    nzCollapsible;
    nzActiveChange = output();
    /**
     * @description Actual active state of the panel.
     */
    active = linkedSignal(() => this.nzActive(), ...ngDevMode ? [{
      debugName: "active"
    }] : []);
    collapseHeader = viewChild.required("collapseHeader", {
      read: ElementRef
    });
    collapseIcon = viewChild("collapseIcon", __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "collapseIcon"
    } : {}), {
      read: ElementRef
    }));
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
      this.nzCollapseComponent.addPanel(this);
      this.destroyRef.onDestroy(() => {
        this.nzCollapseComponent.removePanel(this);
      });
    }
    ngAfterViewInit() {
      const icon = this.collapseIcon();
      const header = this.collapseHeader();
      const element = this.nzShowArrow && this.nzCollapsible === "icon" && icon ? icon.nativeElement : header.nativeElement;
      fromEventOutsideAngular(element, "click").pipe(filter(() => !this.nzDisabled && this.nzCollapsible !== "disabled"), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.ngZone.run(() => {
          this.nzCollapseComponent.click(this);
        });
      });
    }
    activate(active) {
      this.active.set(active);
      this.nzActiveChange.emit(active);
    }
    static \u0275fac = function NzCollapsePanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzCollapsePanelComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzCollapsePanelComponent2,
      selectors: [["nz-collapse-panel"]],
      viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuerySignal(ctx.collapseHeader, _c1, 5, ElementRef)(ctx.collapseIcon, _c2, 5, ElementRef);
        }
        if (rf & 2) {
          \u0275\u0275queryAdvance(2);
        }
      },
      hostAttrs: [1, "ant-collapse-item"],
      hostVars: 6,
      hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.active())("ant-collapse-item-disabled", ctx.nzDisabled || ctx.nzCollapsible === "disabled");
        }
      },
      inputs: {
        nzActive: [1, "nzActive"],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute],
        nzExtra: "nzExtra",
        nzHeader: "nzHeader",
        nzExpandedIcon: "nzExpandedIcon",
        nzCollapsible: "nzCollapsible"
      },
      outputs: {
        nzActiveChange: "nzActiveChange"
      },
      exportAs: ["nzCollapsePanel"],
      ngContentSelectors: _c0,
      decls: 9,
      vars: 13,
      consts: [["collapseHeader", ""], ["collapseIcon", ""], ["role", "button", 1, "ant-collapse-header"], ["role", "button", 1, "ant-collapse-expand-icon"], [1, "ant-collapse-title"], [4, "nzStringTemplateOutlet"], [1, "ant-collapse-extra"], ["animation-collapse", "", "leavedClassName", "ant-collapse-panel-hidden", 1, "ant-collapse-panel", 3, "open"], [1, "ant-collapse-body"], [1, "ant-collapse-arrow", 3, "nzType", "nzRotate"]],
      template: function NzCollapsePanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2, 0);
          \u0275\u0275conditionalCreate(2, NzCollapsePanelComponent_Conditional_2_Template, 3, 1, "div", 3);
          \u0275\u0275elementStart(3, "span", 4);
          \u0275\u0275template(4, NzCollapsePanelComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(5, NzCollapsePanelComponent_Conditional_5_Template, 2, 1, "div", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
          \u0275\u0275projection(8);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275classProp("ant-collapse-collapsible-icon", ctx.nzCollapsible === "icon")("ant-collapse-collapsible-header", ctx.nzCollapsible === "header");
          \u0275\u0275attribute("aria-expanded", ctx.active())("aria-disabled", ctx.nzDisabled || ctx.nzCollapsible === "disabled")("tabindex", ctx.nzDisabled || ctx.nzCollapsible === "disabled" ? -1 : 0);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzShowArrow ? 2 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("nzStringTemplateOutlet", ctx.nzHeader);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzExtra ? 5 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("ant-collapse-panel-active", ctx.active());
          \u0275\u0275property("open", ctx.active());
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzAnimationCollapseDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse-panel",
      exportAs: "nzCollapsePanel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <div
      #collapseHeader
      role="button"
      [attr.aria-expanded]="active()"
      [attr.aria-disabled]="nzDisabled || nzCollapsible === 'disabled'"
      [attr.tabindex]="nzDisabled || nzCollapsible === 'disabled' ? -1 : 0"
      class="ant-collapse-header"
      [class.ant-collapse-collapsible-icon]="nzCollapsible === 'icon'"
      [class.ant-collapse-collapsible-header]="nzCollapsible === 'header'"
    >
      @if (nzShowArrow) {
        <div role="button" #collapseIcon class="ant-collapse-expand-icon">
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <nz-icon [nzType]="expandedIcon || 'right'" class="ant-collapse-arrow" [nzRotate]="active() ? 90 : 0" />
          </ng-container>
        </div>
      }
      <span class="ant-collapse-title">
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </span>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-panel"
      [class.ant-collapse-panel-active]="active()"
      animation-collapse
      [open]="active()"
      leavedClassName="ant-collapse-panel-hidden"
    >
      <div class="ant-collapse-body">
        <ng-content />
      </div>
    </div>
  `,
      host: {
        class: "ant-collapse-item",
        "[class.ant-collapse-no-arrow]": "!nzShowArrow",
        "[class.ant-collapse-item-active]": "active()",
        "[class.ant-collapse-item-disabled]": `nzDisabled || nzCollapsible === 'disabled'`
      },
      imports: [NzOutletModule, NzIconModule, NzAnimationCollapseDirective]
    }]
  }], () => [], {
    nzActive: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzActive",
        required: false
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExtra: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzCollapsible: [{
      type: Input
    }],
    nzActiveChange: [{
      type: Output,
      args: ["nzActiveChange"]
    }],
    collapseHeader: [{
      type: ViewChild,
      args: ["collapseHeader", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    collapseIcon: [{
      type: ViewChild,
      args: ["collapseIcon", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var NzCollapseModule = class _NzCollapseModule {
  static \u0275fac = function NzCollapseModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCollapseModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCollapseModule,
    imports: [NzCollapsePanelComponent, NzCollapseComponent],
    exports: [NzCollapsePanelComponent, NzCollapseComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCollapsePanelComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    }]
  }], null, null);
})();

export {
  NzCollapseComponent,
  NzCollapsePanelComponent,
  NzCollapseModule
};
//# sourceMappingURL=chunk-QSNE6SUP.js.map
