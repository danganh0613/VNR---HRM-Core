import {
  NzBreakpointEnum,
  NzBreakpointService,
  gridResponsiveMap
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
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-NXJVNWYP.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import {
  warn
} from "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Input,
  NgModule,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  auditTime,
  booleanAttribute,
  inject,
  input,
  merge,
  numberAttribute,
  setClassMetadata,
  startWith,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
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
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-descriptions.mjs
var _c0 = ["*"];
function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzDescriptionsComponent_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
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
function NzDescriptionsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NzDescriptionsComponent_Conditional_0_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzDescriptionsComponent_Conditional_0_Conditional_2_ng_container_1_Template(rf, ctx) {
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
function NzDescriptionsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, NzDescriptionsComponent_Conditional_0_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzDescriptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, NzDescriptionsComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 2);
    \u0275\u0275conditionalCreate(2, NzDescriptionsComponent_Conditional_0_Conditional_2_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzTitle ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzExtra ? 2 : -1);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_template_5_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275template(3, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275template(5, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_template_5_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("colSpan", item_r2.span);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ant-descriptions-item-no-colon", !ctx_r0.nzColon);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", item_r2.content);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 8);
    \u0275\u0275template(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td", 11);
    \u0275\u0275template(3, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", item_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("colSpan", item_r2.span * 2 - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", item_r2.content);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_Template, 6, 5, "td", 6)(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_Template, 4, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r0.nzBordered ? 0 : 1);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5);
    \u0275\u0275repeaterCreate(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3);
  }
}
function NzDescriptionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzDescriptionsComponent_Conditional_4_For_1_Template, 3, 0, "tr", 5, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275template(3, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_ng_container_3_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("colSpan", item_r4.span);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ant-descriptions-item-no-colon", !ctx_r0.nzColon);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", item_r4.title);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_ng_template_3_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 6)(1, "div", 7)(2, "span", 9);
    \u0275\u0275template(3, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_ng_template_3_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("colSpan", item_r5.span);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", item_r5.content);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5);
    \u0275\u0275repeaterCreate(1, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_Template, 4, 4, "td", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "tr", 5);
    \u0275\u0275repeaterCreate(4, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_Template, 4, 2, "td", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r6);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_Template, 6, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 12);
    \u0275\u0275template(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("colSpan", item_r7.span);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", item_r7.title);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_ng_template_1_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 11);
    \u0275\u0275template(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_ng_template_1_Template, 0, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("colSpan", item_r8.span);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", item_r8.content);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 5);
    \u0275\u0275repeaterCreate(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_Template, 2, 2, "td", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "tr", 5);
    \u0275\u0275repeaterCreate(4, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_Template, 2, 2, "td", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r9);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(row_r9);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_Template, 6, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzDescriptionsComponent_Conditional_5_Conditional_0_Template, 2, 0)(1, NzDescriptionsComponent_Conditional_5_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.nzBordered ? 0 : 1);
  }
}
var NzDescriptionsItemComponent = class _NzDescriptionsItemComponent {
  content;
  nzSpan = 1;
  nzTitle = "";
  inputChange$ = new Subject();
  ngOnChanges() {
    this.inputChange$.next();
  }
  ngOnDestroy() {
    this.inputChange$.complete();
  }
  static \u0275fac = function NzDescriptionsItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDescriptionsItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzDescriptionsItemComponent,
    selectors: [["nz-descriptions-item"]],
    viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      nzSpan: [2, "nzSpan", "nzSpan", numberAttribute],
      nzTitle: "nzTitle"
    },
    exportAs: ["nzDescriptionsItem"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzDescriptionsItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-descriptions-item",
      template: `
    <ng-template>
      <ng-content />
    </ng-template>
  `,
      exportAs: "nzDescriptionsItem"
    }]
  }], null, {
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    nzSpan: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzTitle: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "descriptions";
var defaultColumnMap = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
var NzDescriptionsComponent = (() => {
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzColumn_decorators;
  let _nzColumn_initializers = [];
  let _nzColumn_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzColon_decorators;
  let _nzColon_initializers = [];
  let _nzColon_extraInitializers = [];
  return class NzDescriptionsComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBordered_decorators = [WithConfig()];
      _nzColumn_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzColon_decorators = [WithConfig()];
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
      __esDecorate(null, null, _nzColumn_decorators, {
        kind: "field",
        name: "nzColumn",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzColumn" in obj,
          get: (obj) => obj.nzColumn,
          set: (obj, value) => {
            obj.nzColumn = value;
          }
        },
        metadata: _metadata
      }, _nzColumn_initializers, _nzColumn_extraInitializers);
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
      __esDecorate(null, null, _nzColon_decorators, {
        kind: "field",
        name: "nzColon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzColon" in obj,
          get: (obj) => obj.nzColon,
          set: (obj, value) => {
            obj.nzColon = value;
          }
        },
        metadata: _metadata
      }, _nzColon_initializers, _nzColon_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService = inject(NzConfigService);
    cdr = inject(ChangeDetectorRef);
    breakpointService = inject(NzBreakpointService);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    items;
    nzBordered = __runInitializers(this, _nzBordered_initializers, false);
    nzLayout = (__runInitializers(this, _nzBordered_extraInitializers), "horizontal");
    nzColumn = __runInitializers(this, _nzColumn_initializers, defaultColumnMap);
    nzSize = (__runInitializers(this, _nzColumn_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
    nzTitle = (__runInitializers(this, _nzSize_extraInitializers), "");
    nzExtra;
    nzColon = __runInitializers(this, _nzColon_initializers, true);
    itemMatrix = (__runInitializers(this, _nzColon_extraInitializers), []);
    realColumn = 3;
    dir = "ltr";
    breakpoint = NzBreakpointEnum.md;
    ngOnInit() {
      this.dir = this.directionality.value;
      this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
        this.dir = direction;
      });
    }
    ngOnChanges(changes) {
      if (changes.nzColumn) {
        this.prepareMatrix();
      }
    }
    ngAfterContentInit() {
      const contentChange$ = this.items.changes.pipe(startWith(this.items));
      merge(contentChange$, contentChange$.pipe(switchMap(() => merge(...this.items.map((i) => i.inputChange$)).pipe(auditTime(16)))), this.breakpointService.subscribe(gridResponsiveMap).pipe(tap((bp) => this.breakpoint = bp))).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.prepareMatrix();
        this.cdr.markForCheck();
      });
    }
    /**
     * Prepare the render matrix according to description items' spans.
     */
    prepareMatrix() {
      if (!this.items) {
        return;
      }
      let currentRow = [];
      let width = 0;
      const column = this.realColumn = this.getColumn();
      const items = this.items.toArray();
      const length = items.length;
      const matrix = [];
      const flushRow = () => {
        matrix.push(currentRow);
        currentRow = [];
        width = 0;
      };
      for (let i = 0; i < length; i++) {
        const item = items[i];
        const {
          nzTitle: title,
          content,
          nzSpan: span
        } = item;
        width += span;
        if (width >= column) {
          if (width > column) {
            warn(`"nzColumn" is ${column} but we have row length ${width}`);
          }
          currentRow.push({
            title,
            content,
            span: column - (width - span)
          });
          flushRow();
        } else if (i === length - 1) {
          currentRow.push({
            title,
            content,
            span: column - (width - span)
          });
          flushRow();
        } else {
          currentRow.push({
            title,
            content,
            span
          });
        }
      }
      this.itemMatrix = matrix;
    }
    getColumn() {
      if (typeof this.nzColumn !== "number") {
        return this.nzColumn[this.breakpoint];
      }
      return this.nzColumn;
    }
    static \u0275fac = function NzDescriptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDescriptionsComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzDescriptionsComponent2,
      selectors: [["nz-descriptions"]],
      contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzDescriptionsItemComponent, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
        }
      },
      hostAttrs: [1, "ant-descriptions"],
      hostVars: 8,
      hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzLayout: "nzLayout",
        nzColumn: "nzColumn",
        nzSize: "nzSize",
        nzTitle: "nzTitle",
        nzExtra: "nzExtra",
        nzColon: [2, "nzColon", "nzColon", booleanAttribute]
      },
      exportAs: ["nzDescriptions"],
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 6,
      vars: 3,
      consts: [[1, "ant-descriptions-header"], [1, "ant-descriptions-view"], [1, "ant-descriptions-title"], [1, "ant-descriptions-extra"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-row"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]],
      template: function NzDescriptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, NzDescriptionsComponent_Conditional_0_Template, 3, 2, "div", 0);
          \u0275\u0275elementStart(1, "div", 1)(2, "table")(3, "tbody");
          \u0275\u0275conditionalCreate(4, NzDescriptionsComponent_Conditional_4_Template, 2, 0);
          \u0275\u0275conditionalCreate(5, NzDescriptionsComponent_Conditional_5_Template, 2, 1);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.nzTitle || ctx.nzExtra ? 0 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.nzLayout === "horizontal" ? 4 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzLayout === "vertical" ? 5 : -1);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-descriptions",
      exportAs: "nzDescriptions",
      template: `
    @if (nzTitle || nzExtra) {
      <div class="ant-descriptions-header">
        @if (nzTitle) {
          <div class="ant-descriptions-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        }
        @if (nzExtra) {
          <div class="ant-descriptions-extra">
            <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
          </div>
        }
      </div>
    }

    <div class="ant-descriptions-view">
      <table>
        <tbody>
          @if (nzLayout === 'horizontal') {
            @for (row of itemMatrix; track row; let i = $index) {
              <tr class="ant-descriptions-row">
                @for (item of row; track item; let isLast = $last) {
                  @if (!nzBordered) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content" />
                        </span>
                      </div>
                    </td>
                  } @else {
                    <td class="ant-descriptions-item-label">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                    <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                      <ng-template [ngTemplateOutlet]="item.content" />
                    </td>
                  }
                }
              </tr>
            }
          }

          @if (nzLayout === 'vertical') {
            @if (!nzBordered) {
              @for (row of itemMatrix; track row; let i = $index) {
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                      </div>
                    </td>
                  }
                </tr>
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content" />
                        </span>
                      </div>
                    </td>
                  }
                </tr>
              }
            } @else {
              @for (row of itemMatrix; track row; let i = $index) {
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  }
                </tr>
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content" />
                    </td>
                  }
                </tr>
              }
            }
          }
        </tbody>
      </table>
    </div>
  `,
      host: {
        class: "ant-descriptions",
        "[class.ant-descriptions-bordered]": "nzBordered",
        "[class.ant-descriptions-middle]": 'nzSize === "middle"',
        "[class.ant-descriptions-small]": 'nzSize === "small"',
        "[class.ant-descriptions-rtl]": 'dir === "rtl"'
      },
      imports: [NzOutletModule, NgTemplateOutlet]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [NzDescriptionsItemComponent]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLayout: [{
      type: Input
    }],
    nzColumn: [{
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
    nzColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzDescriptionsModule = class _NzDescriptionsModule {
  static \u0275fac = function NzDescriptionsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDescriptionsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzDescriptionsModule,
    imports: [NzDescriptionsComponent, NzDescriptionsItemComponent],
    exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzDescriptionsComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsModule, [{
    type: NgModule,
    args: [{
      imports: [NzDescriptionsComponent, NzDescriptionsItemComponent],
      exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-descriptions.ts
var _forTrack0 = ($index, $item) => $item.label;
function HrmDescriptions_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-descriptions-item", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275property("nzTitle", it_r1.label)("nzSpan", it_r1.span ?? 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r1.value);
  }
}
var HrmDescriptions = class _HrmDescriptions {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bordered = input(true, ...ngDevMode ? [{ debugName: "bordered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.column = input(2, ...ngDevMode ? [{ debugName: "column" }] : (
      /* istanbul ignore next */
      []
    ));
    this.layout = input("horizontal", ...ngDevMode ? [{ debugName: "layout" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmDescriptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDescriptions)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDescriptions, selectors: [["hrm-descriptions"]], hostAttrs: [1, "hrm-descriptions"], inputs: { items: [1, "items"], title: [1, "title"], bordered: [1, "bordered"], column: [1, "column"], layout: [1, "layout"], size: [1, "size"] }, decls: 3, vars: 5, consts: [[3, "nzTitle", "nzBordered", "nzColumn", "nzLayout", "nzSize"], [3, "nzTitle", "nzSpan"]], template: function HrmDescriptions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-descriptions", 0);
        \u0275\u0275repeaterCreate(1, HrmDescriptions_For_2_Template, 2, 3, "nz-descriptions-item", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzTitle", ctx.title())("nzBordered", ctx.bordered())("nzColumn", ctx.column())("nzLayout", ctx.layout())("nzSize", ctx.size());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
      }
    }, dependencies: [NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDescriptions, [{
    type: Component,
    args: [{
      selector: "hrm-descriptions",
      imports: [NzDescriptionsModule],
      template: `
    <nz-descriptions
      [nzTitle]="title()"
      [nzBordered]="bordered()"
      [nzColumn]="column()"
      [nzLayout]="layout()"
      [nzSize]="size()">
      @for (it of items(); track it.label) {
        <nz-descriptions-item [nzTitle]="it.label" [nzSpan]="it.span ?? 1">{{ it.value }}</nz-descriptions-item>
      }
    </nz-descriptions>
  `,
      host: { class: "hrm-descriptions" }
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }], column: [{ type: Input, args: [{ isSignal: true, alias: "column", required: false }] }], layout: [{ type: Input, args: [{ isSignal: true, alias: "layout", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDescriptions, { className: "HrmDescriptions", filePath: "libs/hrm-ui/src/lib/data-display/hrm-descriptions.ts", lineNumber: 24 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/descriptions.ts
var SgDocDescriptions = class _SgDocDescriptions {
  constructor() {
    this.items = [
      { label: "M\xE3 NV", value: "NV-000-018" },
      { label: "H\u1ECD t\xEAn", value: "Nguy\u1EC5n V\u0103n A" },
      { label: "Ph\xF2ng ban", value: "Nh\xE2n s\u1EF1" },
      { label: "Ch\u1EE9c v\u1EE5", value: "Tr\u01B0\u1EDFng ph\xF2ng" }
    ];
    this.basic = [
      { label: "M\xE3 NV", value: "NV-000-018" },
      { label: "H\u1ECD t\xEAn", value: "Nguy\u1EC5n V\u0103n A" },
      { label: "Ph\xF2ng ban", value: "Nh\xE2n s\u1EF1" },
      { label: "Tr\u1EA1ng th\xE1i", value: "\u0110ang l\xE0m" }
    ];
    this.full = [
      { label: "M\xE3 NV", value: "NV-000-018" },
      { label: "H\u1ECD t\xEAn", value: "Nguy\u1EC5n V\u0103n A" },
      { label: "Ch\u1EE9c v\u1EE5", value: "Tr\u01B0\u1EDFng ph\xF2ng" },
      { label: "Ph\xF2ng ban", value: "Nh\xE2n s\u1EF1" },
      { label: "Ng\xE0y v\xE0o l\xE0m", value: "15/03/2021" },
      { label: "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng", value: "Ch\xEDnh th\u1EE9c" },
      { label: "L\u01B0\u01A1ng c\u01A1 b\u1EA3n", value: "25.000.000 \u0111" },
      { label: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp", value: "Tr\u1EA7n Th\u1ECB B" },
      { label: "Tr\u1EA1ng th\xE1i", value: "\u0110ang l\xE0m" }
    ];
    this.vertical = [
      { label: "Email", value: "vana@congty.vn" },
      { label: "\u0110i\u1EC7n tho\u1EA1i", value: "0912 345 678" },
      { label: "Ng\xE0y v\xE0o l\xE0m", value: "15/03/2021" },
      { label: "\u0110\u1ECBa ch\u1EC9 th\u01B0\u1EDDng tr\xFA", value: "S\u1ED1 12, ng\xF5 45, \u0111\u01B0\u1EDDng L\xE1ng, \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i", span: 3 }
    ];
    this.compact = [
      { label: "Ph\xF2ng ban", value: "Nh\xE2n s\u1EF1" },
      { label: "Ng\xE0y v\xE0o l\xE0m", value: "15/03/2021" },
      { label: "L\u01B0\u01A1ng c\u01A1 b\u1EA3n", value: "25.000.000 \u0111" }
    ];
    this.when = [
      "docs.descriptions.when1",
      "docs.descriptions.when2",
      "docs.descriptions.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDescriptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDescriptions)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDescriptions, selectors: [["sg-doc-descriptions"]], decls: 54, vars: 81, consts: [["category", "Table & List", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], [2, "width", "100%", 3, "items", "title", "column"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "360px"], [2, "width", "100%", 3, "items", "title", "column", "bordered"], [2, "width", "100%", "max-width", "640px"], ["layout", "vertical", 2, "width", "100%", 3, "items", "title", "column", "bordered"], [3, "label"], ["size", "small", 2, "width", "100%", 3, "items", "bordered", "column"]], template: function SgDocDescriptions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-descriptions", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "sg-use", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "sg-do");
        \u0275\u0275element(14, "span", 7);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "sg-example", 9);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "div", 10);
        \u0275\u0275element(31, "hrm-descriptions", 11);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "sg-example", 9);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row")(37, "div", 12);
        \u0275\u0275element(38, "hrm-descriptions", 11);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "sg-example", 9);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row")(44, "div", 12);
        \u0275\u0275element(45, "hrm-descriptions", 13);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "sg-example", 9);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "sg-row", 14);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "div", 10);
        \u0275\u0275element(53, "hrm-descriptions", 15);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 37, "docs.descriptions.title"))("desc", \u0275\u0275pipeBind1(2, 39, "docs.descriptions.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.items)("title", \u0275\u0275pipeBind1(6, 41, "docs.descriptions.ovTitle"))("column", 2);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 43, "docs.descriptions.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 45, "docs.descriptions.behavior"))("avoid", \u0275\u0275pipeBind1(11, 47, "docs.descriptions.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 49, "docs.descriptions.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 51, "docs.descriptions.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 53, "docs.descriptions.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 55, "docs.descriptions.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 57, "docs.descriptions.ex1T"))("desc", \u0275\u0275pipeBind1(28, 59, "docs.descriptions.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.basic)("title", \u0275\u0275pipeBind1(32, 61, "docs.descriptions.ex1Title"))("column", 1)("bordered", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 63, "docs.descriptions.ex2T"))("desc", \u0275\u0275pipeBind1(35, 65, "docs.descriptions.ex2D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.full)("title", \u0275\u0275pipeBind1(39, 67, "docs.descriptions.ovTitle"))("column", 3)("bordered", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 69, "docs.descriptions.ex3T"))("desc", \u0275\u0275pipeBind1(42, 71, "docs.descriptions.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.vertical)("title", \u0275\u0275pipeBind1(46, 73, "docs.descriptions.ex3Title"))("column", 3)("bordered", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 75, "docs.descriptions.ex4T"))("desc", \u0275\u0275pipeBind1(49, 77, "docs.descriptions.ex4D"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(51, 79, "docs.descriptions.ex4Row"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.compact)("bordered", false)("column", 1);
      }
    }, dependencies: [TranslateModule, HrmDescriptions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDescriptions, [{
    type: Component,
    args: [{
      selector: "sg-doc-descriptions",
      imports: [TranslateModule, HrmDescriptions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Table & List" [title]="'docs.descriptions.title' | translate" [desc]="'docs.descriptions.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-descriptions [items]="items" [title]="'docs.descriptions.ovTitle' | translate" [column]="2" style="width:100%" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.descriptions.purpose' | translate"
          [when]="when"
          [behavior]="'docs.descriptions.behavior' | translate"
          [avoid]="'docs.descriptions.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.descriptions.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.descriptions.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.descriptions.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.descriptions.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.descriptions.ex1T' | translate"
          [desc]="'docs.descriptions.ex1D' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <hrm-descriptions [items]="basic" [title]="'docs.descriptions.ex1Title' | translate" [column]="1" [bordered]="false" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.descriptions.ex2T' | translate"
          [desc]="'docs.descriptions.ex2D' | translate">
          <sg-row>
            <div style="width:100%;max-width:640px">
              <hrm-descriptions [items]="full" [title]="'docs.descriptions.ovTitle' | translate" [column]="3" [bordered]="true" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.descriptions.ex3T' | translate"
          [desc]="'docs.descriptions.ex3D' | translate">
          <sg-row>
            <div style="width:100%;max-width:640px">
              <hrm-descriptions [items]="vertical" [title]="'docs.descriptions.ex3Title' | translate" layout="vertical" [column]="3" [bordered]="true" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.descriptions.ex4T' | translate"
          [desc]="'docs.descriptions.ex4D' | translate">
          <sg-row [label]="'docs.descriptions.ex4Row' | translate">
            <div style="width:100%;max-width:360px">
              <hrm-descriptions [items]="compact" size="small" [bordered]="false" [column]="1" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDescriptions, { className: "SgDocDescriptions", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/descriptions.ts", lineNumber: 76 });
})();
export {
  SgDocDescriptions
};
//# sourceMappingURL=chunk-NSHR3WNA.js.map
