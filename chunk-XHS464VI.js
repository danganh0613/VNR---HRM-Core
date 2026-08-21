import {
  NzSkeletonComponent,
  NzSkeletonModule
} from "./chunk-CQQHL6Z5.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import {
  BidiModule,
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
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  booleanAttribute,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-card.mjs
function NzCardMetaComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzCardMetaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, NzCardMetaComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzAvatar);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, NzCardMetaComponent_Conditional_1_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzDescription);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, NzCardMetaComponent_Conditional_1_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzCardMetaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, NzCardMetaComponent_Conditional_1_Conditional_1_Template, 2, 1, "div", 3);
    \u0275\u0275conditionalCreate(2, NzCardMetaComponent_Conditional_1_Conditional_2_Template, 2, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzTitle ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzDescription ? 2 : -1);
  }
}
var _c0 = ["*"];
function NzCardTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c1 = () => ({
  rows: 4
});
function NzCardComponent_Conditional_0_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzCardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, NzCardComponent_Conditional_0_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzCardComponent_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzExtra);
  }
}
function NzCardComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, NzCardComponent_Conditional_0_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzCardComponent_Conditional_0_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NzCardComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzCardComponent_Conditional_0_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.listOfNzCardTabComponent.template);
  }
}
function NzCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 5);
    \u0275\u0275conditionalCreate(2, NzCardComponent_Conditional_0_Conditional_2_Template, 2, 1, "div", 6);
    \u0275\u0275conditionalCreate(3, NzCardComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NzCardComponent_Conditional_0_Conditional_4_Template, 1, 1, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.nzTitle ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzExtra ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.listOfNzCardTabComponent ? 4 : -1);
  }
}
function NzCardComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NzCardComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzCover);
  }
}
function NzCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-skeleton", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("nzActive", true)("nzTitle", false)("nzParagraph", \u0275\u0275pureFunction0(3, _c1));
  }
}
function NzCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzCardComponent_Conditional_5_For_2_ng_template_2_Template(rf, ctx) {
}
function NzCardComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275template(2, NzCardComponent_Conditional_5_For_2_ng_template_2_Template, 0, 0, "ng-template", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const $count_r3 = ctx.$count;
    \u0275\u0275styleProp("width", 100 / $count_r3, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", action_r2);
  }
}
function NzCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, NzCardComponent_Conditional_5_For_2_Template, 3, 3, "li", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.nzActions);
  }
}
var NzCardGridDirective = class _NzCardGridDirective {
  nzHoverable = true;
  static \u0275fac = function NzCardGridDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCardGridDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCardGridDirective,
    selectors: [["", "nz-card-grid", ""]],
    hostAttrs: [1, "ant-card-grid"],
    hostVars: 2,
    hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-card-hoverable", ctx.nzHoverable);
      }
    },
    inputs: {
      nzHoverable: [2, "nzHoverable", "nzHoverable", booleanAttribute]
    },
    exportAs: ["nzCardGrid"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardGridDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-card-grid]",
      exportAs: "nzCardGrid",
      host: {
        class: "ant-card-grid",
        "[class.ant-card-hoverable]": "nzHoverable"
      }
    }]
  }], null, {
    nzHoverable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzCardMetaComponent = class _NzCardMetaComponent {
  nzTitle = null;
  nzDescription = null;
  nzAvatar = null;
  static \u0275fac = function NzCardMetaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCardMetaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCardMetaComponent,
    selectors: [["nz-card-meta"]],
    hostAttrs: [1, "ant-card-meta"],
    inputs: {
      nzTitle: "nzTitle",
      nzDescription: "nzDescription",
      nzAvatar: "nzAvatar"
    },
    exportAs: ["nzCardMeta"],
    decls: 2,
    vars: 2,
    consts: [[1, "ant-card-meta-avatar"], [1, "ant-card-meta-detail"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-title"], [1, "ant-card-meta-description"], [4, "nzStringTemplateOutlet"]],
    template: function NzCardMetaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzCardMetaComponent_Conditional_0_Template, 2, 1, "div", 0);
        \u0275\u0275conditionalCreate(1, NzCardMetaComponent_Conditional_1_Template, 3, 2, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzAvatar ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzTitle || ctx.nzDescription ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-card-meta",
      exportAs: "nzCardMeta",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzAvatar) {
      <div class="ant-card-meta-avatar">
        <ng-template [ngTemplateOutlet]="nzAvatar" />
      </div>
    }

    @if (nzTitle || nzDescription) {
      <div class="ant-card-meta-detail">
        @if (nzTitle) {
          <div class="ant-card-meta-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        }
        @if (nzDescription) {
          <div class="ant-card-meta-description">
            <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
          </div>
        }
      </div>
    }
  `,
      host: {
        class: "ant-card-meta"
      },
      imports: [NgTemplateOutlet, NzOutletModule]
    }]
  }], null, {
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzAvatar: [{
      type: Input
    }]
  });
})();
var NzCardTabComponent = class _NzCardTabComponent {
  template;
  static \u0275fac = function NzCardTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCardTabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCardTabComponent,
    selectors: [["nz-card-tab"]],
    viewQuery: function NzCardTabComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    exportAs: ["nzCardTab"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzCardTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardTabComponent, [{
    type: Component,
    args: [{
      selector: "nz-card-tab",
      exportAs: "nzCardTab",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template>
      <ng-content />
    </ng-template>
  `
    }]
  }], null, {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "card";
var NzCardComponent = (() => {
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzHoverable_decorators;
  let _nzHoverable_initializers = [];
  let _nzHoverable_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  return class NzCardComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBordered_decorators = [WithConfig()];
      _nzHoverable_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
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
      __esDecorate(null, null, _nzHoverable_decorators, {
        kind: "field",
        name: "nzHoverable",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHoverable" in obj,
          get: (obj) => obj.nzHoverable,
          set: (obj, value) => {
            obj.nzHoverable = value;
          }
        },
        metadata: _metadata
      }, _nzHoverable_initializers, _nzHoverable_extraInitializers);
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    cdr = inject(ChangeDetectorRef);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzBordered = __runInitializers(this, _nzBordered_initializers, true);
    nzLoading = (__runInitializers(this, _nzBordered_extraInitializers), false);
    nzHoverable = __runInitializers(this, _nzHoverable_initializers, false);
    nzBodyStyle = (__runInitializers(this, _nzHoverable_extraInitializers), null);
    nzCover;
    nzActions = [];
    nzType = null;
    nzSize = __runInitializers(this, _nzSize_initializers, "default");
    nzTitle = __runInitializers(this, _nzSize_extraInitializers);
    nzExtra;
    listOfNzCardTabComponent;
    listOfNzCardGridDirective;
    dir = "ltr";
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
    }
    ngOnInit() {
      this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    static \u0275fac = function NzCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzCardComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzCardComponent2,
      selectors: [["nz-card"]],
      contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzCardTabComponent, 5)(dirIndex, NzCardGridDirective, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzCardTabComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzCardGridDirective = _t);
        }
      },
      hostAttrs: [1, "ant-card"],
      hostVars: 16,
      hostBindings: function NzCardComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent)("ant-card-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzHoverable: [2, "nzHoverable", "nzHoverable", booleanAttribute],
        nzBodyStyle: "nzBodyStyle",
        nzCover: "nzCover",
        nzActions: "nzActions",
        nzType: "nzType",
        nzSize: "nzSize",
        nzTitle: "nzTitle",
        nzExtra: "nzExtra"
      },
      exportAs: ["nzCard"],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 6,
      consts: [[1, "ant-card-head"], [1, "ant-card-cover"], [1, "ant-card-body"], [3, "nzActive", "nzTitle", "nzParagraph"], [1, "ant-card-actions"], [1, "ant-card-head-wrapper"], [1, "ant-card-head-title"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], [3, "width"]],
      template: function NzCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275conditionalCreate(0, NzCardComponent_Conditional_0_Template, 5, 3, "div", 0);
          \u0275\u0275conditionalCreate(1, NzCardComponent_Conditional_1_Template, 2, 1, "div", 1);
          \u0275\u0275elementStart(2, "div", 2);
          \u0275\u0275conditionalCreate(3, NzCardComponent_Conditional_3_Template, 1, 4, "nz-skeleton", 3)(4, NzCardComponent_Conditional_4_Template, 1, 0);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(5, NzCardComponent_Conditional_5_Template, 3, 0, "ul", 4);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzCover ? 1 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleMap(ctx.nzBodyStyle);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzLoading ? 3 : 4);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzActions.length ? 5 : -1);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NzSkeletonModule, NzSkeletonComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardComponent, [{
    type: Component,
    args: [{
      selector: "nz-card",
      exportAs: "nzCard",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzTitle || nzExtra || listOfNzCardTabComponent) {
      <div class="ant-card-head">
        <div class="ant-card-head-wrapper">
          @if (nzTitle) {
            <div class="ant-card-head-title">
              <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
            </div>
          }
          @if (nzExtra) {
            <div class="ant-card-extra">
              <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
            </div>
          }
        </div>
        @if (listOfNzCardTabComponent) {
          <ng-template [ngTemplateOutlet]="listOfNzCardTabComponent.template" />
        }
      </div>
    }

    @if (nzCover) {
      <div class="ant-card-cover">
        <ng-template [ngTemplateOutlet]="nzCover" />
      </div>
    }

    <div class="ant-card-body" [style]="nzBodyStyle">
      @if (nzLoading) {
        <nz-skeleton [nzActive]="true" [nzTitle]="false" [nzParagraph]="{ rows: 4 }" />
      } @else {
        <ng-content />
      }
    </div>
    @if (nzActions.length) {
      <ul class="ant-card-actions">
        @for (action of nzActions; track $index) {
          <li [style.width.%]="100 / $count">
            <span><ng-template [ngTemplateOutlet]="action" /></span>
          </li>
        }
      </ul>
    }
  `,
      host: {
        class: "ant-card",
        "[class.ant-card-loading]": "nzLoading",
        "[class.ant-card-bordered]": "nzBordered",
        "[class.ant-card-hoverable]": "nzHoverable",
        "[class.ant-card-small]": 'nzSize === "small"',
        "[class.ant-card-contain-grid]": "listOfNzCardGridDirective && listOfNzCardGridDirective.length",
        "[class.ant-card-type-inner]": 'nzType === "inner"',
        "[class.ant-card-contain-tabs]": "!!listOfNzCardTabComponent",
        "[class.ant-card-rtl]": `dir === 'rtl'`
      },
      imports: [NzOutletModule, NgTemplateOutlet, NzSkeletonModule]
    }]
  }], () => [], {
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHoverable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzCover: [{
      type: Input
    }],
    nzActions: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    listOfNzCardTabComponent: [{
      type: ContentChild,
      args: [NzCardTabComponent, {
        static: false
      }]
    }],
    listOfNzCardGridDirective: [{
      type: ContentChildren,
      args: [NzCardGridDirective]
    }]
  });
})();
var NzCardModule = class _NzCardModule {
  static \u0275fac = function NzCardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCardModule,
    imports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent],
    exports: [BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCardComponent, NzCardMetaComponent, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardModule, [{
    type: NgModule,
    args: [{
      imports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent],
      exports: [BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-card.ts
var _c02 = ["*", [["", "cardActions", ""]]];
var _c12 = ["*", "[cardActions]"];
function HrmCard_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275element(1, "tabler-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-tone", ctx_r0.iconTone());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon())("size", 18);
  }
}
function HrmCard_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle());
  }
}
function HrmCard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, HrmCard_Conditional_1_Conditional_2_Template, 2, 3, "span", 3);
    \u0275\u0275elementStart(3, "span", 4)(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrmCard_Conditional_1_Conditional_6_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275projection(8, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.icon() ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.subtitle() ? 6 : -1);
  }
}
var HrmCard = class _HrmCard {
  constructor() {
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(null, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.iconTone = input("neutral", ...ngDevMode ? [{ debugName: "iconTone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tone = input("default", ...ngDevMode ? [{ debugName: "tone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hasHead = computed(() => !!this.title() || !!this.icon(), ...ngDevMode ? [{ debugName: "hasHead" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bordered = input(true, ...ngDevMode ? [{ debugName: "bordered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.hoverable = input(false, ...ngDevMode ? [{ debugName: "hoverable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.flush = input(false, ...ngDevMode ? [{ debugName: "flush" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clickable = input(false, ...ngDevMode ? [{ debugName: "clickable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectable = input(false, ...ngDevMode ? [{ debugName: "selectable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selected = model(false, ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pressed = output();
  }
  onPress(e) {
    if (!this.clickable() && !this.selectable())
      return;
    e?.preventDefault();
    if (this.selectable())
      this.selected.set(!this.selected());
    this.pressed.emit();
  }
  static {
    this.\u0275fac = function HrmCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCard, selectors: [["hrm-card"]], hostAttrs: [1, "hrm-card"], hostVars: 10, hostBindings: function HrmCard_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function HrmCard_click_HostBindingHandler() {
          return ctx.onPress();
        })("keydown.enter", function HrmCard_keydown_enter_HostBindingHandler() {
          return ctx.onPress();
        })("keydown.space", function HrmCard_keydown_space_HostBindingHandler($event) {
          return ctx.onPress($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-tone", ctx.tone() !== "default" ? ctx.tone() : null)("role", ctx.clickable() || ctx.selectable() ? "button" : null)("tabindex", ctx.clickable() || ctx.selectable() ? 0 : null)("aria-pressed", ctx.selectable() ? ctx.selected() : null);
        \u0275\u0275classProp("hrm-card--flush", ctx.flush())("hrm-card--clickable", ctx.clickable() || ctx.selectable())("hrm-card--selected", ctx.selectable() && ctx.selected());
      }
    }, inputs: { title: [1, "title"], subtitle: [1, "subtitle"], icon: [1, "icon"], iconTone: [1, "iconTone"], tone: [1, "tone"], bordered: [1, "bordered"], hoverable: [1, "hoverable"], size: [1, "size"], flush: [1, "flush"], clickable: [1, "clickable"], selectable: [1, "selectable"], selected: [1, "selected"] }, outputs: { selected: "selectedChange", pressed: "pressed" }, ngContentSelectors: _c12, decls: 3, vars: 4, consts: [[3, "nzBordered", "nzHoverable", "nzSize"], [1, "hc-bar"], [1, "hc-head"], [1, "hc-ic"], [1, "hc-tt"], [1, "hc-title"], [1, "hc-sub"], [1, "hc-actions"], [3, "icon", "size"]], template: function HrmCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "nz-card", 0);
        \u0275\u0275conditionalCreate(1, HrmCard_Conditional_1_Template, 9, 3, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzBordered", ctx.bordered())("nzHoverable", ctx.hoverable())("nzSize", ctx.size());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasHead() ? 1 : -1);
      }
    }, dependencies: [NzCardModule, NzCardComponent, TablerIconComponent], styles: [`
[_nghost-%COMP%] {
  position: relative;
  display: block;
  border-radius: var(--radius-md);
}
[data-tone][_nghost-%COMP%]     .ant-card {
  border-left-width: 3px;
}
[data-tone="muted"][_nghost-%COMP%]     .ant-card {
  background: var(--bg-surface-muted);
  border-left-color: var(--border-strong, var(--neutral-300));
}
[data-tone="primary"][_nghost-%COMP%]     .ant-card {
  background: var(--primary-bg-subtle);
  border-left-color: var(--primary-base);
}
[data-tone="success"][_nghost-%COMP%]     .ant-card {
  background: var(--success-bg);
  border-left-color: var(--success-base);
}
[data-tone="warning"][_nghost-%COMP%]     .ant-card {
  background: var(--warning-bg);
  border-left-color: var(--warning-base);
}
[data-tone="info"][_nghost-%COMP%]     .ant-card {
  background: var(--info-bg);
  border-left-color: var(--info-base);
}
[_nghost-%COMP%]:focus {
  outline: none;
}
.hc-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-3)) var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--border-sub);
}
.hc-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--space-2-5);
  min-width: 0;
}
.hc-ic[_ngcontent-%COMP%] {
  flex: none;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-subtle);
  color: var(--text-sub);
}
.hc-ic[data-tone=success][_ngcontent-%COMP%] {
  background: var(--success-bg);
  color: var(--success-base);
}
.hc-ic[data-tone=warning][_ngcontent-%COMP%] {
  background: var(--warning-bg);
  color: var(--warning-base);
}
.hc-ic[data-tone=info][_ngcontent-%COMP%] {
  background: var(--info-bg);
  color: var(--info-base);
}
.hc-ic[data-tone=error][_ngcontent-%COMP%] {
  background: var(--error-bg);
  color: var(--error-base);
}
.hc-tt[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.hc-title[_ngcontent-%COMP%] {
  font-size: var(--fs-15);
  font-weight: var(--font-semibold);
  line-height: 1.35;
  color: var(--text-strong);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hc-sub[_ngcontent-%COMP%] {
  font-size: var(--fs-12);
  font-weight: 400;
  color: var(--text-sub);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hc-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: flex-end;
}
[_nghost-%COMP%]     .ant-card-body {
  padding: var(--space-3);
}
.hrm-card--flush[_nghost-%COMP%]     .ant-card-body {
  padding: 0;
  overflow: hidden;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
.hrm-card--flush[_nghost-%COMP%]     .ant-card-body .ant-table-wrapper .ant-table {
  border: 0;
  border-radius: 0;
}
.hrm-card--clickable[_nghost-%COMP%]     .ant-card {
  cursor: pointer;
  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);
}
.hrm-card--clickable[_nghost-%COMP%]:hover     .ant-card {
  border-color: var(--primary-border, var(--primary-base));
  box-shadow: var(--shadow-regular-sm);
}
.hrm-card--clickable[_nghost-%COMP%]:focus-visible     .ant-card {
  border-color: var(--primary-base);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base) 25%, transparent);
}
.hrm-card--selected[_nghost-%COMP%]     .ant-card {
  border-color: var(--primary-base);
  box-shadow: 0 0 0 1px var(--primary-base);
}
.hrm-card--selected[_nghost-%COMP%]::before {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  z-index: 2;
  border-radius: var(--radius-full);
  background: var(--primary-base);
}
.hrm-card--selected[_nghost-%COMP%]::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  z-index: 3;
  background-color: var(--text-on-primary, #fff);
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 9.5 L8 12.5 L13 6.5'/%3E%3C/svg%3E") center/contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 9.5 L8 12.5 L13 6.5'/%3E%3C/svg%3E") center/contain no-repeat;
}
/*# sourceMappingURL=hrm-card.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCard, [{
    type: Component,
    args: [{ selector: "hrm-card", imports: [NzCardModule, TablerIconComponent], template: `
    <nz-card
      [nzBordered]="bordered()"
      [nzHoverable]="hoverable()"
      [nzSize]="size()">
      <!-- Header render TR\u1EF0C TI\u1EBEP trong body (kh\xF4ng qua nzTitle/nzExtra ng-template)
           \u2014 tr\xE1nh nz re-stamp template l\xE0m origin overlay c\u1EE7a [cardActions] (vd hrm-select)
           th\xE0nh null \u2192 l\u1ED7i cdk "Cannot read properties of null (reading 'classList')". -->
      @if (hasHead()) {
        <div class="hc-bar">
          <div class="hc-head">
            @if (icon()) {
              <span class="hc-ic" [attr.data-tone]="iconTone()">
                <tabler-icon [icon]="$any(icon())" [size]="18" />
              </span>
            }
            <span class="hc-tt">
              <span class="hc-title">{{ title() }}</span>
              @if (subtitle()) { <span class="hc-sub">{{ subtitle() }}</span> }
            </span>
          </div>
          <div class="hc-actions"><ng-content select="[cardActions]" /></div>
        </div>
      }
      <ng-content />
    </nz-card>
  `, host: {
      class: "hrm-card",
      "[attr.data-tone]": "tone() !== 'default' ? tone() : null",
      "[class.hrm-card--flush]": "flush()",
      "[class.hrm-card--clickable]": "clickable() || selectable()",
      "[class.hrm-card--selected]": "selectable() && selected()",
      "[attr.role]": "clickable() || selectable() ? 'button' : null",
      "[attr.tabindex]": "clickable() || selectable() ? 0 : null",
      "[attr.aria-pressed]": "selectable() ? selected() : null",
      "(click)": "onPress()",
      "(keydown.enter)": "onPress()",
      "(keydown.space)": "onPress($event)"
    }, styles: [`/* angular:styles/component:css;894ca63f15368d83501db9fde8c2add5956ccbc3bc7780704c57393497c3159d;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-card.ts */
:host {
  position: relative;
  display: block;
  border-radius: var(--radius-md);
}
:host([data-tone]) ::ng-deep .ant-card {
  border-left-width: 3px;
}
:host([data-tone="muted"]) ::ng-deep .ant-card {
  background: var(--bg-surface-muted);
  border-left-color: var(--border-strong, var(--neutral-300));
}
:host([data-tone="primary"]) ::ng-deep .ant-card {
  background: var(--primary-bg-subtle);
  border-left-color: var(--primary-base);
}
:host([data-tone="success"]) ::ng-deep .ant-card {
  background: var(--success-bg);
  border-left-color: var(--success-base);
}
:host([data-tone="warning"]) ::ng-deep .ant-card {
  background: var(--warning-bg);
  border-left-color: var(--warning-base);
}
:host([data-tone="info"]) ::ng-deep .ant-card {
  background: var(--info-bg);
  border-left-color: var(--info-base);
}
:host:focus {
  outline: none;
}
.hc-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin: calc(-1 * var(--space-3)) calc(-1 * var(--space-3)) var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--border-sub);
}
.hc-head {
  display: flex;
  align-items: center;
  gap: var(--space-2-5);
  min-width: 0;
}
.hc-ic {
  flex: none;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-md);
  background: var(--bg-surface-subtle);
  color: var(--text-sub);
}
.hc-ic[data-tone=success] {
  background: var(--success-bg);
  color: var(--success-base);
}
.hc-ic[data-tone=warning] {
  background: var(--warning-bg);
  color: var(--warning-base);
}
.hc-ic[data-tone=info] {
  background: var(--info-bg);
  color: var(--info-base);
}
.hc-ic[data-tone=error] {
  background: var(--error-bg);
  color: var(--error-base);
}
.hc-tt {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.hc-title {
  font-size: var(--fs-15);
  font-weight: var(--font-semibold);
  line-height: 1.35;
  color: var(--text-strong);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hc-sub {
  font-size: var(--fs-12);
  font-weight: 400;
  color: var(--text-sub);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hc-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: flex-end;
}
:host ::ng-deep .ant-card-body {
  padding: var(--space-3);
}
:host(.hrm-card--flush) ::ng-deep .ant-card-body {
  padding: 0;
  overflow: hidden;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
:host(.hrm-card--flush) ::ng-deep .ant-card-body .ant-table-wrapper .ant-table {
  border: 0;
  border-radius: 0;
}
:host(.hrm-card--clickable) ::ng-deep .ant-card {
  cursor: pointer;
  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);
}
:host(.hrm-card--clickable:hover) ::ng-deep .ant-card {
  border-color: var(--primary-border, var(--primary-base));
  box-shadow: var(--shadow-regular-sm);
}
:host(.hrm-card--clickable:focus-visible) ::ng-deep .ant-card {
  border-color: var(--primary-base);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-base) 25%, transparent);
}
:host(.hrm-card--selected) ::ng-deep .ant-card {
  border-color: var(--primary-base);
  box-shadow: 0 0 0 1px var(--primary-base);
}
:host(.hrm-card--selected)::before {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  z-index: 2;
  border-radius: var(--radius-full);
  background: var(--primary-base);
}
:host(.hrm-card--selected)::after {
  content: "";
  position: absolute;
  top: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  z-index: 3;
  background-color: var(--text-on-primary, #fff);
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 9.5 L8 12.5 L13 6.5'/%3E%3C/svg%3E") center/contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 9.5 L8 12.5 L13 6.5'/%3E%3C/svg%3E") center/contain no-repeat;
}
/*# sourceMappingURL=hrm-card.css.map */
`] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], iconTone: [{ type: Input, args: [{ isSignal: true, alias: "iconTone", required: false }] }], tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }], hoverable: [{ type: Input, args: [{ isSignal: true, alias: "hoverable", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], flush: [{ type: Input, args: [{ isSignal: true, alias: "flush", required: false }] }], clickable: [{ type: Input, args: [{ isSignal: true, alias: "clickable", required: false }] }], selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }, { type: Output, args: ["selectedChange"] }], pressed: [{ type: Output, args: ["pressed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCard, { className: "HrmCard", filePath: "libs/hrm-ui/src/lib/data-display/hrm-card.ts", lineNumber: 145 });
})();

export {
  HrmCard
};
//# sourceMappingURL=chunk-XHS464VI.js.map
