import {
  NzSkeletonComponent,
  NzSkeletonModule
} from "./chunk-PRQ7GH7J.js";
import {
  timeUnits
} from "./chunk-ZQHLZVTS.js";
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
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  Platform
} from "./chunk-HV4ZTFQC.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import {
  padStart
} from "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  NgTemplateOutlet,
  NumberSymbol,
  getLocaleNumberSymbol
} from "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Output,
  Pipe,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-pipe.mjs
var NzTimeRangePipe = class _NzTimeRangePipe {
  transform(value, format = "HH:mm:ss") {
    let duration = Number(value || 0);
    return timeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const v = Math.floor(duration / unit);
        duration -= v * unit;
        return current.replace(new RegExp(`${name}+`, "g"), (match) => padStart(v.toString(), match.length, "0"));
      }
      return current;
    }, format);
  }
  static \u0275fac = function NzTimeRangePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimeRangePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "nzTimeRange",
    type: _NzTimeRangePipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimeRangePipe, [{
    type: Pipe,
    args: [{
      name: "nzTimeRange"
    }]
  }], null, null);
})();
var NzPipesModule = class _NzPipesModule {
  static \u0275fac = function NzPipesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPipesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzPipesModule,
    imports: [NzTimeRangePipe],
    exports: [NzTimeRangePipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPipesModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimeRangePipe],
      exports: [NzTimeRangePipe]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-statistic.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzStatisticContentValueComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx_r0.nzValue));
  }
}
function NzStatisticContentValueComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayInt);
  }
}
function NzStatisticContentValueComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayDecimal);
  }
}
function NzStatisticContentValueComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzStatisticContentValueComponent_Conditional_1_Conditional_0_Template, 2, 1, "span", 1);
    \u0275\u0275conditionalCreate(1, NzStatisticContentValueComponent_Conditional_1_Conditional_1_Template, 2, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.displayInt ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.displayDecimal ? 1 : -1);
  }
}
function NzStatisticComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzStatisticComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-skeleton", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("nzParagraph", false);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, NzStatisticComponent_Conditional_3_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzSuffix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275template(1, NzStatisticComponent_Conditional_3_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzSuffix);
  }
}
function NzStatisticComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, NzStatisticComponent_Conditional_3_Conditional_1_Template, 2, 1, "span", 5);
    \u0275\u0275element(2, "nz-statistic-content-value", 6);
    \u0275\u0275conditionalCreate(3, NzStatisticComponent_Conditional_3_Conditional_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.nzValueStyle);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzPrefix ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", ctx_r0.nzValue)("nzValueTemplate", ctx_r0.nzValueTemplate);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzSuffix ? 3 : -1);
  }
}
function NzCountdownComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "nzTimeRange");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, ctx_r0.diff, ctx_r0.nzFormat));
  }
}
var NzStatisticContentValueComponent = class _NzStatisticContentValueComponent {
  nzValue;
  nzValueTemplate;
  displayInt = "";
  displayDecimal = "";
  locale_id = inject(LOCALE_ID);
  ngOnChanges() {
    this.formatNumber();
  }
  formatNumber() {
    const decimalSeparator = typeof this.nzValue === "number" ? "." : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
    const value = String(this.nzValue);
    const [int, decimal] = value.split(decimalSeparator);
    this.displayInt = int;
    this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : "";
  }
  static \u0275fac = function NzStatisticContentValueComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzStatisticContentValueComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzStatisticContentValueComponent,
    selectors: [["nz-statistic-content-value"]],
    hostAttrs: [1, "ant-statistic-content-value"],
    inputs: {
      nzValue: "nzValue",
      nzValueTemplate: "nzValueTemplate"
    },
    exportAs: ["nzStatisticContentValue"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]],
    template: function NzStatisticContentValueComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzStatisticContentValueComponent_Conditional_0_Template, 1, 4, "ng-container", 0)(1, NzStatisticContentValueComponent_Conditional_1_Template, 2, 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzValueTemplate ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticContentValueComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-statistic-content-value",
      exportAs: "nzStatisticContentValue",
      template: `
    @if (nzValueTemplate) {
      <ng-container [ngTemplateOutlet]="nzValueTemplate" [ngTemplateOutletContext]="{ $implicit: nzValue }" />
    } @else {
      @if (displayInt) {
        <span class="ant-statistic-content-value-int">{{ displayInt }}</span>
      }
      @if (displayDecimal) {
        <span class="ant-statistic-content-value-decimal">{{ displayDecimal }}</span>
      }
    }
  `,
      imports: [NgTemplateOutlet],
      host: {
        class: "ant-statistic-content-value"
      }
    }]
  }], null, {
    nzValue: [{
      type: Input
    }],
    nzValueTemplate: [{
      type: Input
    }]
  });
})();
var NzStatisticComponent = class _NzStatisticComponent {
  nzPrefix;
  nzSuffix;
  nzTitle;
  nzValue;
  nzValueStyle = {};
  nzValueTemplate;
  nzLoading = false;
  dir = "ltr";
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  directionality = inject(Directionality);
  ngOnInit() {
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  static \u0275fac = function NzStatisticComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzStatisticComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzStatisticComponent,
    selectors: [["nz-statistic"]],
    hostAttrs: [1, "ant-statistic"],
    hostVars: 2,
    hostBindings: function NzStatisticComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-statistic-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzPrefix: "nzPrefix",
      nzSuffix: "nzSuffix",
      nzTitle: "nzTitle",
      nzValue: "nzValue",
      nzValueStyle: "nzValueStyle",
      nzValueTemplate: "nzValueTemplate",
      nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute]
    },
    exportAs: ["nzStatistic"],
    decls: 4,
    vars: 2,
    consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-skeleton", 3, "nzParagraph"], [1, "ant-statistic-content", 3, "style"], [1, "ant-statistic-content"], [1, "ant-statistic-content-prefix"], [3, "nzValue", "nzValueTemplate"], [1, "ant-statistic-content-suffix"]],
    template: function NzStatisticComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, NzStatisticComponent_Conditional_2_Template, 1, 1, "nz-skeleton", 2)(3, NzStatisticComponent_Conditional_3_Template, 4, 6, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzLoading ? 2 : 3);
      }
    },
    dependencies: [NzSkeletonModule, NzSkeletonComponent, NzStatisticContentValueComponent, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-statistic",
      exportAs: "nzStatistic",
      template: `
    <div class="ant-statistic-title">
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
    </div>
    @if (nzLoading) {
      <nz-skeleton class="ant-statistic-skeleton" [nzParagraph]="false" />
    } @else {
      <div class="ant-statistic-content" [style]="nzValueStyle">
        @if (nzPrefix) {
          <span class="ant-statistic-content-prefix">
            <ng-container *nzStringTemplateOutlet="nzPrefix">{{ nzPrefix }}</ng-container>
          </span>
        }
        <nz-statistic-content-value [nzValue]="nzValue" [nzValueTemplate]="nzValueTemplate" />
        @if (nzSuffix) {
          <span class="ant-statistic-content-suffix">
            <ng-container *nzStringTemplateOutlet="nzSuffix">{{ nzSuffix }}</ng-container>
          </span>
        }
      </div>
    }
  `,
      host: {
        class: "ant-statistic",
        "[class.ant-statistic-rtl]": `dir === 'rtl'`
      },
      imports: [NzSkeletonModule, NzStatisticContentValueComponent, NzOutletModule]
    }]
  }], null, {
    nzPrefix: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzValueStyle: [{
      type: Input
    }],
    nzValueTemplate: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var REFRESH_INTERVAL = 1e3 / 30;
var NzCountdownComponent = class _NzCountdownComponent extends NzStatisticComponent {
  ngZone = inject(NgZone);
  platform = inject(Platform);
  nzFormat = "HH:mm:ss";
  nzCountdownFinish = new EventEmitter();
  diff;
  target = 0;
  intervalId = null;
  constructor() {
    super();
    this.destroyRef.onDestroy(() => {
      this.stopTimer();
    });
  }
  ngOnChanges(changes) {
    const {
      nzValue
    } = changes;
    if (nzValue) {
      this.target = Number(nzValue.currentValue);
      if (!nzValue.isFirstChange()) {
        this.syncTimer();
      }
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.syncTimer();
  }
  syncTimer() {
    if (this.target >= Date.now()) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        this.stopTimer();
        this.intervalId = setInterval(() => {
          this.updateValue();
          this.cdr.detectChanges();
        }, REFRESH_INTERVAL);
      });
    }
  }
  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  /**
   * Update time that should be displayed on the screen.
   */
  updateValue() {
    this.diff = Math.max(this.target - Date.now(), 0);
    if (this.diff === 0) {
      this.stopTimer();
      if (this.nzCountdownFinish.observers.length) {
        this.ngZone.run(() => this.nzCountdownFinish.emit());
      }
    }
  }
  static \u0275fac = function NzCountdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCountdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCountdownComponent,
    selectors: [["nz-countdown"]],
    inputs: {
      nzFormat: "nzFormat"
    },
    outputs: {
      nzCountdownFinish: "nzCountdownFinish"
    },
    exportAs: ["nzCountdown"],
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 3,
    vars: 6,
    consts: [["countDownTpl", ""], [3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"]],
    template: function NzCountdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-statistic", 1);
        \u0275\u0275template(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const countDownTpl_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || countDownTpl_r2)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
      }
    },
    dependencies: [NzStatisticComponent, NzPipesModule, NzTimeRangePipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCountdownComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-countdown",
      exportAs: "nzCountdown",
      template: `
    <nz-statistic
      [nzValue]="diff"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate || countDownTpl"
      [nzTitle]="nzTitle"
      [nzPrefix]="nzPrefix"
      [nzSuffix]="nzSuffix"
    />

    <ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>
  `,
      imports: [NzStatisticComponent, NzPipesModule]
    }]
  }], () => [], {
    nzFormat: [{
      type: Input
    }],
    nzCountdownFinish: [{
      type: Output
    }]
  });
})();
var NzStatisticModule = class _NzStatisticModule {
  static \u0275fac = function NzStatisticModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzStatisticModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzStatisticModule,
    imports: [NzStatisticComponent, NzCountdownComponent, NzStatisticContentValueComponent],
    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticContentValueComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzStatisticComponent, NzCountdownComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticModule, [{
    type: NgModule,
    args: [{
      imports: [NzStatisticComponent, NzCountdownComponent, NzStatisticContentValueComponent],
      exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticContentValueComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-statistic.ts
var _c02 = (a0) => ({ color: a0 });
var _c1 = () => ({});
var HrmStatistic = class _HrmStatistic {
  constructor() {
    this.value = input(0, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.prefix = input("", ...ngDevMode ? [{ debugName: "prefix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.suffix = input("", ...ngDevMode ? [{ debugName: "suffix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.valueColor = input(null, ...ngDevMode ? [{ debugName: "valueColor" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmStatistic_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmStatistic)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmStatistic, selectors: [["hrm-statistic"]], hostAttrs: [1, "hrm-statistic"], inputs: { value: [1, "value"], title: [1, "title"], prefix: [1, "prefix"], suffix: [1, "suffix"], valueColor: [1, "valueColor"] }, decls: 1, vars: 8, consts: [[3, "nzValue", "nzTitle", "nzPrefix", "nzSuffix", "nzValueStyle"]], template: function HrmStatistic_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "nz-statistic", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzValue", ctx.value())("nzTitle", ctx.title())("nzPrefix", ctx.prefix())("nzSuffix", ctx.suffix())("nzValueStyle", ctx.valueColor() ? \u0275\u0275pureFunction1(5, _c02, ctx.valueColor()) : \u0275\u0275pureFunction0(7, _c1));
      }
    }, dependencies: [NzStatisticModule, NzStatisticComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmStatistic, [{
    type: Component,
    args: [{
      selector: "hrm-statistic",
      imports: [NzStatisticModule],
      template: `
    <nz-statistic
      [nzValue]="value()"
      [nzTitle]="title()"
      [nzPrefix]="prefix()"
      [nzSuffix]="suffix()"
      [nzValueStyle]="valueColor() ? { color: valueColor()! } : {}"></nz-statistic>
  `,
      host: { class: "hrm-statistic" }
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], prefix: [{ type: Input, args: [{ isSignal: true, alias: "prefix", required: false }] }], suffix: [{ type: Input, args: [{ isSignal: true, alias: "suffix", required: false }] }], valueColor: [{ type: Input, args: [{ isSignal: true, alias: "valueColor", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmStatistic, { className: "HrmStatistic", filePath: "libs/hrm-ui/src/lib/data-display/hrm-statistic.ts", lineNumber: 18 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/statistic.ts
var _c03 = (a0) => ({ label: a0, route: "hrm/table-cells/amount" });
var _c12 = (a0) => ({ label: a0, route: "hrm/table-cells/trend" });
var _c2 = (a0, a1) => [a0, a1];
var SgDocStatistic = class _SgDocStatistic {
  constructor() {
    this.when = [
      "docs.statistic.when1",
      "docs.statistic.when2",
      "docs.statistic.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocStatistic_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocStatistic)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocStatistic, selectors: [["sg-doc-statistic"]], decls: 80, vars: 115, consts: [["category", "Content", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "title", "desc"], [2, "width", "200px"], [3, "value", "title"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [2, "width", "220px"], ["suffix", "\u20AB", 3, "value", "title"], ["suffix", "%", 3, "value", "title"], ["prefix", "\u25B2", "suffix", "%", "valueColor", "var(--success-base)", 3, "value", "title"], ["prefix", "\u25BC", "suffix", "%", "valueColor", "var(--error-base)", 3, "value", "title"], ["prefix", "+", "valueColor", "var(--success-base)", 3, "value", "title"], ["valueColor", "var(--success-base)", 3, "value", "title"], ["valueColor", "var(--warning-base)", 3, "value", "title"], ["valueColor", "var(--error-base)", 3, "value", "title"]], template: function SgDocStatistic_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "div", 1)(6, "sg-example", 2);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementStart(9, "sg-row")(10, "div", 3);
        \u0275\u0275element(11, "hrm-statistic", 4);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 3);
        \u0275\u0275element(14, "hrm-statistic", 4);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 3);
        \u0275\u0275element(17, "hrm-statistic", 4);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 5);
        \u0275\u0275element(20, "sg-use", 6);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 7)(25, "sg-do");
        \u0275\u0275element(26, "span", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "sg-do");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "sg-do");
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "sg-dont");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "sg-dont");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 9)(41, "sg-example", 2);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row")(45, "div", 10);
        \u0275\u0275element(46, "hrm-statistic", 11);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 10);
        \u0275\u0275element(49, "hrm-statistic", 12);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 10);
        \u0275\u0275element(52, "hrm-statistic", 12);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "sg-example", 2);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "sg-row")(58, "div", 10);
        \u0275\u0275element(59, "hrm-statistic", 13);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 10);
        \u0275\u0275element(62, "hrm-statistic", 14);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 10);
        \u0275\u0275element(65, "hrm-statistic", 15);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "sg-example", 2);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementStart(70, "sg-row")(71, "div", 10);
        \u0275\u0275element(72, "hrm-statistic", 16);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 10);
        \u0275\u0275element(75, "hrm-statistic", 17);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 10);
        \u0275\u0275element(78, "hrm-statistic", 18);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 44, "docs.statistic.title"))("related", \u0275\u0275pureFunction2(112, _c2, \u0275\u0275pureFunction1(108, _c03, \u0275\u0275pipeBind1(2, 46, "docs.statistic.relAmount")), \u0275\u0275pureFunction1(110, _c12, \u0275\u0275pipeBind1(3, 48, "docs.statistic.relTrend"))))("desc", \u0275\u0275pipeBind1(4, 50, "docs.statistic.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(7, 52, "docs.statistic.ovT"))("desc", \u0275\u0275pipeBind1(8, 54, "docs.statistic.ovD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 1128)("title", \u0275\u0275pipeBind1(12, 56, "docs.statistic.totalStaff"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 42)("title", \u0275\u0275pipeBind1(15, 58, "docs.statistic.depts"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 8)("title", \u0275\u0275pipeBind1(18, 60, "docs.statistic.hiring"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(21, 62, "docs.statistic.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(22, 64, "docs.statistic.behavior"))("avoid", \u0275\u0275pipeBind1(23, 66, "docs.statistic.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(27, 68, "docs.statistic.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 70, "docs.statistic.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 72, "docs.statistic.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 74, "docs.statistic.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 76, "docs.statistic.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 78, "docs.statistic.ex1T"))("desc", \u0275\u0275pipeBind1(43, 80, "docs.statistic.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 842e7)("title", \u0275\u0275pipeBind1(47, 82, "docs.statistic.payroll"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 93.5)("title", \u0275\u0275pipeBind1(50, 84, "docs.statistic.attendRate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 7.4)("title", \u0275\u0275pipeBind1(53, 86, "docs.statistic.turnoverRate"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(55, 88, "docs.statistic.ex2T"))("desc", \u0275\u0275pipeBind1(56, 90, "docs.statistic.ex2D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 12.5)("title", \u0275\u0275pipeBind1(60, 92, "docs.statistic.staffGrowth"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 7.4)("title", \u0275\u0275pipeBind1(63, 94, "docs.statistic.turnoverRate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 256)("title", \u0275\u0275pipeBind1(66, 96, "docs.statistic.newHiresQuarter"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(68, 98, "docs.statistic.ex3T"))("desc", \u0275\u0275pipeBind1(69, 100, "docs.statistic.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("value", 1085)("title", \u0275\u0275pipeBind1(73, 102, "docs.statistic.activeStaff"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 12)("title", \u0275\u0275pipeBind1(76, 104, "docs.statistic.pendingReq"));
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 3)("title", \u0275\u0275pipeBind1(79, 106, "docs.statistic.expiringContracts"));
      }
    }, dependencies: [TranslateModule, HrmStatistic, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocStatistic, [{
    type: Component,
    args: [{
      selector: "sg-doc-statistic",
      imports: [TranslateModule, HrmStatistic, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.statistic.title' | translate" [related]="[{label:('docs.statistic.relAmount' | translate), route:'hrm/table-cells/amount'},{label:('docs.statistic.relTrend' | translate), route:'hrm/table-cells/trend'}]" [desc]="'docs.statistic.desc' | translate">

      <div sgOverview>
        <sg-example [title]="'docs.statistic.ovT' | translate"
          [desc]="'docs.statistic.ovD' | translate">
          <sg-row>
            <div style="width:200px"><hrm-statistic [value]="1128" [title]="'docs.statistic.totalStaff' | translate" /></div>
            <div style="width:200px"><hrm-statistic [value]="42" [title]="'docs.statistic.depts' | translate" /></div>
            <div style="width:200px"><hrm-statistic [value]="8" [title]="'docs.statistic.hiring' | translate" /></div>
          </sg-row>
        </sg-example>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.statistic.purpose' | translate"
          [when]="when"
          [behavior]="'docs.statistic.behavior' | translate"
          [avoid]="'docs.statistic.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.statistic.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.statistic.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.statistic.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.statistic.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.statistic.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.statistic.ex1T' | translate"
          [desc]="'docs.statistic.ex1D' | translate">
          <sg-row>
            <div style="width:220px"><hrm-statistic [value]="8420000000" [title]="'docs.statistic.payroll' | translate" suffix="\u20AB" /></div>
            <div style="width:220px"><hrm-statistic [value]="93.5" [title]="'docs.statistic.attendRate' | translate" suffix="%" /></div>
            <div style="width:220px"><hrm-statistic [value]="7.4" [title]="'docs.statistic.turnoverRate' | translate" suffix="%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statistic.ex2T' | translate"
          [desc]="'docs.statistic.ex2D' | translate">
          <sg-row>
            <div style="width:220px"><hrm-statistic [value]="12.5" [title]="'docs.statistic.staffGrowth' | translate" prefix="\u25B2" suffix="%" valueColor="var(--success-base)" /></div>
            <div style="width:220px"><hrm-statistic [value]="7.4" [title]="'docs.statistic.turnoverRate' | translate" prefix="\u25BC" suffix="%" valueColor="var(--error-base)" /></div>
            <div style="width:220px"><hrm-statistic [value]="256" [title]="'docs.statistic.newHiresQuarter' | translate" prefix="+" valueColor="var(--success-base)" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statistic.ex3T' | translate"
          [desc]="'docs.statistic.ex3D' | translate">
          <sg-row>
            <div style="width:220px"><hrm-statistic [value]="1085" [title]="'docs.statistic.activeStaff' | translate" valueColor="var(--success-base)" /></div>
            <div style="width:220px"><hrm-statistic [value]="12" [title]="'docs.statistic.pendingReq' | translate" valueColor="var(--warning-base)" /></div>
            <div style="width:220px"><hrm-statistic [value]="3" [title]="'docs.statistic.expiringContracts' | translate" valueColor="var(--error-base)" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocStatistic, { className: "SgDocStatistic", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/statistic.ts", lineNumber: 73 });
})();
export {
  SgDocStatistic
};
//# sourceMappingURL=chunk-YJ6OHGED.js.map
