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
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
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
} from "./chunk-X3WVFRKD.js";

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

export {
  HrmTimeline
};
//# sourceMappingURL=chunk-TXCGQXBS.js.map
