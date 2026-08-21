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
  NzIconDirective,
  NzIconModule
} from "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
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
  Injectable,
  Input,
  NgModule,
  ReplaySubject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-timeline.mjs
var _c0 = ["template"];
var _c1 = ["*"];
function NzTimelineItemComponent_ng_template_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NzTimelineItemComponent_ng_template_0_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzDot);
  }
}
function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1);
    \u0275\u0275conditionalCreate(1, NzTimelineItemComponent_ng_template_0_Conditional_1_Template, 2, 1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275template(4, NzTimelineItemComponent_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-timeline-item-right", (ctx_r0.nzPosition || ctx_r0.position) === "right")("ant-timeline-item-left", (ctx_r0.nzPosition || ctx_r0.position) === "left")("ant-timeline-item-last", ctx_r0.isLast);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzLabel ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", ctx_r0.borderColor);
    \u0275\u0275classProp("ant-timeline-item-head-red", ctx_r0.nzColor === "red")("ant-timeline-item-head-blue", ctx_r0.nzColor === "blue")("ant-timeline-item-head-green", ctx_r0.nzColor === "green")("ant-timeline-item-head-gray", ctx_r0.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r0.nzDot);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzDot);
  }
}
function NzTimelineComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const pendingTemplate_r1 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", pendingTemplate_r1);
  }
}
function NzTimelineComponent_For_3_ng_template_0_Template(rf, ctx) {
}
function NzTimelineComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTimelineComponent_For_3_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngTemplateOutlet", item_r2.template);
  }
}
function NzTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const pendingTemplate_r1 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", pendingTemplate_r1);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 8);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Conditional_2_Template, 1, 0, "nz-icon", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.nzPendingDot, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.nzPendingDot ? 2 : -1);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isPendingBoolean ? "" : ctx_r2.nzPending, " ");
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Template, 3, 2, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275template(5, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r2.nzPendingDot);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r2.nzPending);
  }
}
function NzTimelineComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTimelineComponent_ng_template_5_Conditional_0_Template, 6, 2, "li", 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.nzPending ? 0 : -1);
  }
}
var TimelineService = class _TimelineService {
  check$ = new ReplaySubject(1);
  markForCheck() {
    this.check$.next();
  }
  static \u0275fac = function TimelineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TimelineService,
    factory: _TimelineService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable
  }], null, null);
})();
var TimelineTimeDefaultColors = ["red", "blue", "green", "grey", "gray"];
function isDefaultColor(color) {
  return TimelineTimeDefaultColors.findIndex((i) => i === color) !== -1;
}
var NzTimelineItemComponent = class _NzTimelineItemComponent {
  cdr = inject(ChangeDetectorRef);
  timelineService = inject(TimelineService);
  template;
  nzPosition;
  nzColor = "blue";
  nzDot;
  nzLabel;
  isLast = false;
  borderColor = null;
  position;
  ngOnChanges(changes) {
    this.timelineService.markForCheck();
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.updateCustomColor();
    }
  }
  detectChanges() {
    this.cdr.detectChanges();
  }
  updateCustomColor() {
    this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
  }
  static \u0275fac = function NzTimelineItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimelineItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTimelineItemComponent,
    selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]],
    viewQuery: function NzTimelineItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      nzPosition: "nzPosition",
      nzColor: "nzColor",
      nzDot: "nzDot",
      nzLabel: "nzLabel"
    },
    exportAs: ["nzTimelineItem"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-label"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]],
    template: function NzTimelineItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzTimelineItemComponent_ng_template_0_Template, 7, 20, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-timeline-item, [nz-timeline-item]",
      exportAs: "nzTimelineItem",
      template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        @if (nzLabel) {
          <div class="ant-timeline-item-label">
            <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
          </div>
        }
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content />
        </div>
      </li>
    </ng-template>
  `,
      imports: [NzOutletModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    template: [{
      type: ViewChild,
      args: ["template", {
        static: false
      }]
    }],
    nzPosition: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzTimelineComponent = class _NzTimelineComponent {
  cdr = inject(ChangeDetectorRef);
  timelineService = inject(TimelineService);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  listOfItems;
  nzMode = "left";
  nzPending;
  nzPendingDot;
  nzReverse = false;
  isPendingBoolean = false;
  timelineItems = [];
  dir = "ltr";
  hasLabelItem = false;
  ngOnChanges(changes) {
    const {
      nzMode,
      nzReverse,
      nzPending
    } = changes;
    if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
      this.updateChildren();
    }
    if (nzPending) {
      this.isPendingBoolean = nzPending.currentValue === true;
    }
  }
  ngOnInit() {
    this.timelineService.check$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.updateChildren();
    this.listOfItems.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.updateChildren();
    });
  }
  updateChildren() {
    if (this.listOfItems && this.listOfItems.length) {
      const length = this.listOfItems.length;
      let hasLabelItem = false;
      this.listOfItems.forEach((item, index) => {
        item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
        item.position = getInferredTimelineItemPosition(index, this.nzMode);
        if (!hasLabelItem && item.nzLabel) {
          hasLabelItem = true;
        }
        item.detectChanges();
      });
      this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
      this.hasLabelItem = hasLabelItem;
    } else {
      this.timelineItems = [];
      this.hasLabelItem = false;
    }
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTimelineComponent,
    selectors: [["nz-timeline"]],
    contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzTimelineItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfItems = _t);
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzPending: "nzPending",
      nzPendingDot: "nzPendingDot",
      nzReverse: [2, "nzReverse", "nzReverse", booleanAttribute]
    },
    exportAs: ["nzTimeline"],
    features: [\u0275\u0275ProvidersFeature([TimelineService]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 8,
    vars: 14,
    consts: [["pendingTemplate", ""], [1, "ant-timeline"], [3, "ngTemplateOutlet"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nzType", "loading"]],
    template: function NzTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "ul", 1);
        \u0275\u0275conditionalCreate(1, NzTimelineComponent_Conditional_1_Template, 1, 1, "ng-container", 2);
        \u0275\u0275repeaterCreate(2, NzTimelineComponent_For_3_Template, 1, 1, null, 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(4, NzTimelineComponent_Conditional_4_Template, 1, 1, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, NzTimelineComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275projection(7);
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-timeline-label", ctx.hasLabelItem)("ant-timeline-right", !ctx.hasLabelItem && ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzReverse ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.timelineItems);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.nzReverse ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-timeline",
      providers: [TimelineService],
      exportAs: "nzTimeline",
      template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-label]="hasLabelItem"
      [class.ant-timeline-right]="!hasLabelItem && nzMode === 'right'"
      [class.ant-timeline-alternate]="nzMode === 'alternate' || nzMode === 'custom'"
      [class.ant-timeline-pending]="!!nzPending"
      [class.ant-timeline-reverse]="nzReverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      @if (nzReverse) {
        <ng-container [ngTemplateOutlet]="pendingTemplate" />
      }
      <!-- timeline items -->
      @for (item of timelineItems; track item) {
        <ng-template [ngTemplateOutlet]="item.template" />
      }
      @if (!nzReverse) {
        <ng-container [ngTemplateOutlet]="pendingTemplate" />
      }
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      @if (nzPending) {
        <li class="ant-timeline-item ant-timeline-item-pending">
          <div class="ant-timeline-item-tail"></div>
          <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
            <ng-container *nzStringTemplateOutlet="nzPendingDot">
              {{ nzPendingDot }}
              @if (!nzPendingDot) {
                <nz-icon nzType="loading" />
              }
            </ng-container>
          </div>
          <div class="ant-timeline-item-content">
            <ng-container *nzStringTemplateOutlet="nzPending">
              {{ isPendingBoolean ? '' : nzPending }}
            </ng-container>
          </div>
        </li>
      }
    </ng-template>
    <!-- Grasp items -->
    <ng-content />
  `,
      imports: [NgTemplateOutlet, NzOutletModule, NzIconModule]
    }]
  }], null, {
    listOfItems: [{
      type: ContentChildren,
      args: [NzTimelineItemComponent]
    }],
    nzMode: [{
      type: Input
    }],
    nzPending: [{
      type: Input
    }],
    nzPendingDot: [{
      type: Input
    }],
    nzReverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function simpleChangeActivated(simpleChange) {
  return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
  if (mode === "custom") {
    return void 0;
  } else if (mode === "left" || mode === "right") {
    return mode;
  } else {
    return mode === "alternate" && index % 2 === 0 ? "left" : "right";
  }
}
var NzTimelineModule = class _NzTimelineModule {
  static \u0275fac = function NzTimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimelineModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTimelineModule,
    imports: [NzTimelineItemComponent, NzTimelineComponent],
    exports: [NzTimelineItemComponent, NzTimelineComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTimelineItemComponent, NzTimelineComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimelineItemComponent, NzTimelineComponent],
      exports: [NzTimelineItemComponent, NzTimelineComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-timeline.ts
var _forTrack0 = ($index, $item) => $item.label;
function HrmTimeline_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-timeline-item", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275property("nzColor", it_r1.color || "blue");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r1.label);
  }
}
var HrmTimeline = class _HrmTimeline {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("left", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTimeline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTimeline)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTimeline, selectors: [["hrm-timeline"]], hostAttrs: [1, "hrm-timeline"], inputs: { items: [1, "items"], mode: [1, "mode"] }, decls: 3, vars: 1, consts: [[3, "nzMode"], [3, "nzColor"]], template: function HrmTimeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-timeline", 0);
        \u0275\u0275repeaterCreate(1, HrmTimeline_For_2_Template, 2, 2, "nz-timeline-item", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzMode", ctx.mode());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items());
      }
    }, dependencies: [NzTimelineModule, NzTimelineItemComponent, NzTimelineComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTimeline, [{
    type: Component,
    args: [{
      selector: "hrm-timeline",
      imports: [NzTimelineModule],
      template: `
    <nz-timeline [nzMode]="mode()">
      @for (it of items(); track it.label) {
        <nz-timeline-item [nzColor]="it.color || 'blue'">{{ it.label }}</nz-timeline-item>
      }
    </nz-timeline>
  `,
      host: { class: "hrm-timeline" }
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTimeline, { className: "HrmTimeline", filePath: "libs/hrm-ui/src/lib/data-display/hrm-timeline.ts", lineNumber: 19 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/timeline.ts
var SgDocTimeline = class _SgDocTimeline {
  constructor() {
    this.profile = [
      { label: "N\u1ED9p h\u1ED3 s\u01A1 \u1EE9ng tuy\u1EC3n", color: "green" },
      { label: "Ph\u1ECFng v\u1EA5n", color: "green" },
      { label: "Nh\u1EADn vi\u1EC7c", color: "blue" }
    ];
    this.lifecycle = [
      { label: "\u1EE8ng tuy\u1EC3n \xB7 01/03/2026", color: "green" },
      { label: "Th\u1EED vi\u1EC7c \xB7 15/03/2026", color: "green" },
      { label: "\u0110\xE1nh gi\xE1 th\u1EED vi\u1EC7c \xB7 15/05/2026", color: "blue" },
      { label: "Nh\xE2n vi\xEAn ch\xEDnh th\u1EE9c \xB7 16/05/2026", color: "gray" }
    ];
    this.statuses = [
      { label: "K\xFD h\u1EE3p \u0111\u1ED3ng lao \u0111\u1ED9ng", color: "green" },
      { label: "\u0110ang b\u1ED5 sung h\u1ED3 s\u01A1", color: "blue" },
      { label: "H\u1ED3 s\u01A1 thi\u1EBFu \u2014 b\u1ECB tr\u1EA3 l\u1EA1i", color: "red" }
    ];
    this.approval = [
      { label: "T\u1EA1o \u0111\u01A1n ngh\u1EC9 ph\xE9p", color: "green" },
      { label: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp \u0111\xE3 duy\u1EC7t", color: "green" },
      { label: "Ch\u1EDD Tr\u01B0\u1EDFng ph\xF2ng duy\u1EC7t", color: "gray" }
    ];
    this.when = [
      "docs.timeline.when1",
      "docs.timeline.when2",
      "docs.timeline.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTimeline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTimeline)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTimeline, selectors: [["sg-doc-timeline"]], decls: 53, vars: 63, consts: [["category", "Content", 3, "title", "desc"], ["sgOverview", ""], [2, "max-width", "320px"], [3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "max-width", "340px"], [3, "label"], [2, "max-width", "420px"], ["mode", "alternate", 3, "items"]], template: function SgDocTimeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-timeline", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 7)(28, "sg-example", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "div", 9);
        \u0275\u0275element(33, "hrm-timeline", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 8);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row", 10);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "div", 9);
        \u0275\u0275element(40, "hrm-timeline", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "sg-example", 8);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row")(45, "div", 9);
        \u0275\u0275element(46, "hrm-timeline", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "sg-example", 8);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "sg-row")(51, "div", 11);
        \u0275\u0275element(52, "hrm-timeline", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 25, "docs.timeline.title"))("desc", \u0275\u0275pipeBind1(2, 27, "docs.timeline.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.profile);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 29, "docs.timeline.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 31, "docs.timeline.behavior"))("avoid", \u0275\u0275pipeBind1(10, 33, "docs.timeline.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 35, "docs.timeline.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 37, "docs.timeline.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 39, "docs.timeline.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 41, "docs.timeline.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 43, "docs.timeline.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 45, "docs.timeline.ex1T"))("desc", \u0275\u0275pipeBind1(30, 47, "docs.timeline.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.lifecycle);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 49, "docs.timeline.ex2T"))("desc", \u0275\u0275pipeBind1(36, 51, "docs.timeline.ex2D"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(38, 53, "docs.timeline.ex2Row"));
        \u0275\u0275advance(3);
        \u0275\u0275property("items", ctx.statuses);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 55, "docs.timeline.ex3T"))("desc", \u0275\u0275pipeBind1(43, 57, "docs.timeline.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.approval);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 59, "docs.timeline.ex4T"))("desc", \u0275\u0275pipeBind1(49, 61, "docs.timeline.ex4D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.lifecycle);
      }
    }, dependencies: [TranslateModule, HrmTimeline, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTimeline, [{
    type: Component,
    args: [{
      selector: "sg-doc-timeline",
      imports: [TranslateModule, HrmTimeline, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.timeline.title' | translate" [desc]="'docs.timeline.desc' | translate">

      <div sgOverview>
        <div style="max-width:320px"><hrm-timeline [items]="profile" /></div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.timeline.purpose' | translate"
          [when]="when"
          [behavior]="'docs.timeline.behavior' | translate"
          [avoid]="'docs.timeline.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.timeline.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.timeline.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.timeline.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.timeline.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.timeline.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.timeline.ex1T' | translate"
          [desc]="'docs.timeline.ex1D' | translate">
          <sg-row>
            <div style="max-width:340px"><hrm-timeline [items]="lifecycle" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timeline.ex2T' | translate"
          [desc]="'docs.timeline.ex2D' | translate">
          <sg-row [label]="'docs.timeline.ex2Row' | translate">
            <div style="max-width:340px"><hrm-timeline [items]="statuses" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timeline.ex3T' | translate"
          [desc]="'docs.timeline.ex3D' | translate">
          <sg-row>
            <div style="max-width:340px"><hrm-timeline [items]="approval" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timeline.ex4T' | translate"
          [desc]="'docs.timeline.ex4D' | translate">
          <sg-row>
            <div style="max-width:420px"><hrm-timeline [items]="lifecycle" mode="alternate" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTimeline, { className: "SgDocTimeline", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/timeline.ts", lineNumber: 67 });
})();
export {
  SgDocTimeline
};
//# sourceMappingURL=chunk-FFVBYGWP.js.map
