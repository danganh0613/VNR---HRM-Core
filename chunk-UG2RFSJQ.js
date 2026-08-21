import {
  HrmBadge
} from "./chunk-MEB7WEQC.js";
import "./chunk-HD5R6J3K.js";
import {
  DateTableComponent,
  LibPackerModule,
  MonthTableComponent
} from "./chunk-HFOJ6MC3.js";
import "./chunk-7O54XKAF.js";
import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-PSR5ADGK.js";
import "./chunk-JUFZRQMG.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import {
  DateHelperService,
  NzI18nService
} from "./chunk-4UXR4KI7.js";
import {
  CandyDate
} from "./chunk-UATU3F3O.js";
import {
  HrmControl
} from "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import {
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  EventEmitter,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-calendar.mjs
var _forTrack0 = ($index, $item) => $item.value;
function NzCalendarHeaderComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzCustomHeader);
  }
}
function NzCalendarHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzCalendarHeaderComponent_Conditional_0_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzCustomHeader);
  }
}
function NzCalendarHeaderComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 3);
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("nzLabel", year_r3.label)("nzValue", year_r3.value);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 3);
  }
  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    \u0275\u0275property("nzLabel", month_r5.label)("nzValue", month_r5.value);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 8);
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.monthChange.emit($event));
    });
    \u0275\u0275repeaterCreate(1, NzCalendarHeaderComponent_Conditional_1_Conditional_4_For_2_Template, 1, 2, "nz-option", 3, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSize", ctx_r0.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r0.activeMonth);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.months);
  }
}
function NzCalendarHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "nz-select", 2);
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateYear($event));
    });
    \u0275\u0275repeaterCreate(2, NzCalendarHeaderComponent_Conditional_1_For_3_Template, 1, 2, "nz-option", 3, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NzCalendarHeaderComponent_Conditional_1_Conditional_4_Template, 3, 3, "nz-select", 4);
    \u0275\u0275elementStart(5, "nz-radio-group", 5);
    \u0275\u0275twoWayListener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_radio_group_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.mode, $event) || (ctx_r0.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzCalendarHeaderComponent_Conditional_1_Template_nz_radio_group_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.modeChange.emit($event));
    });
    \u0275\u0275elementStart(6, "label", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzSize", ctx_r0.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r0.activeYear);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.years);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.mode === "month" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.mode);
    \u0275\u0275property("nzSize", ctx_r0.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.monthTypeText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.yearTypeText);
  }
}
function NzCalendarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-table", 5);
    \u0275\u0275listener("valueChange", function NzCalendarComponent_Conditional_4_Template_date_table_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("prefixCls", ctx_r1.prefixCls)("value", ctx_r1.activeDate)("activeDate", ctx_r1.activeDate)("cellRender", ctx_r1.dateCell)("fullCellRender", ctx_r1.dateFullCell)("disabledDate", ctx_r1.nzDisabledDate);
  }
}
function NzCalendarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "month-table", 6);
    \u0275\u0275listener("valueChange", function NzCalendarComponent_Conditional_5_Template_month_table_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("prefixCls", ctx_r1.prefixCls)("value", ctx_r1.activeDate)("activeDate", ctx_r1.activeDate)("cellRender", ctx_r1.monthCell)("fullCellRender", ctx_r1.monthFullCell);
  }
}
var NzDateCellDirective = class _NzDateCellDirective {
  static \u0275fac = function NzDateCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDateCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDateCellDirective,
    selectors: [["", "nzDateCell", ""]],
    exportAs: ["nzDateCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateCell]",
      exportAs: "nzDateCell"
    }]
  }], null, null);
})();
var NzMonthCellDirective = class _NzMonthCellDirective {
  static \u0275fac = function NzMonthCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMonthCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMonthCellDirective,
    selectors: [["", "nzMonthCell", ""]],
    exportAs: ["nzMonthCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthCell]",
      exportAs: "nzMonthCell"
    }]
  }], null, null);
})();
var NzDateFullCellDirective = class _NzDateFullCellDirective {
  static \u0275fac = function NzDateFullCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDateFullCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDateFullCellDirective,
    selectors: [["", "nzDateFullCell", ""]],
    exportAs: ["nzDateFullCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDateFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDateFullCell]",
      exportAs: "nzDateFullCell"
    }]
  }], null, null);
})();
var NzMonthFullCellDirective = class _NzMonthFullCellDirective {
  static \u0275fac = function NzMonthFullCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMonthFullCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMonthFullCellDirective,
    selectors: [["", "nzMonthFullCell", ""]],
    exportAs: ["nzMonthFullCell"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthFullCellDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMonthFullCell]",
      exportAs: "nzMonthFullCell"
    }]
  }], null, null);
})();
var NzCalendarHeaderComponent = class _NzCalendarHeaderComponent {
  dateHelper = inject(DateHelperService);
  i18n = inject(NzI18nService);
  mode = "month";
  fullscreen = true;
  activeDate = new CandyDate();
  nzCustomHeader;
  modeChange = new EventEmitter();
  yearChange = new EventEmitter();
  monthChange = new EventEmitter();
  yearOffset = 10;
  yearTotal = 20;
  years = [];
  months = [];
  get activeYear() {
    return this.activeDate.getYear();
  }
  get activeMonth() {
    return this.activeDate.getMonth();
  }
  get size() {
    return this.fullscreen ? "default" : "small";
  }
  get yearTypeText() {
    return this.i18n.getLocale().Calendar.lang.year;
  }
  get monthTypeText() {
    return this.i18n.getLocale().Calendar.lang.month;
  }
  ngOnInit() {
    this.setUpYears();
    this.setUpMonths();
  }
  ngOnChanges(changes) {
    if (changes["activeDate"]) {
      const previousActiveDate = changes["activeDate"].previousValue;
      const currentActiveDate = changes["activeDate"].currentValue;
      if (previousActiveDate?.getYear() !== currentActiveDate?.getYear()) {
        this.setUpYears();
      }
    }
  }
  updateYear(year) {
    this.yearChange.emit(year);
    this.setUpYears(year);
  }
  setUpYears(year) {
    const start = (year || this.activeYear) - this.yearOffset;
    const end = start + this.yearTotal;
    this.years = [];
    for (let i = start; i < end; i++) {
      this.years.push({
        label: `${i}`,
        value: i
      });
    }
  }
  setUpMonths() {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      const dateInMonth = this.activeDate.setMonth(i);
      const monthText = this.dateHelper.format(dateInMonth.nativeDate, "MMM");
      this.months.push({
        label: monthText,
        value: i
      });
    }
  }
  static \u0275fac = function NzCalendarHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCalendarHeaderComponent,
    selectors: [["nz-calendar-header"]],
    hostAttrs: [1, "ant-fullcalendar-header"],
    hostVars: 2,
    hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("display", "block");
      }
    },
    inputs: {
      mode: "mode",
      fullscreen: [2, "fullscreen", "fullscreen", booleanAttribute],
      activeDate: "activeDate",
      nzCustomHeader: "nzCustomHeader"
    },
    outputs: {
      modeChange: "modeChange",
      yearChange: "yearChange",
      monthChange: "monthChange"
    },
    exportAs: ["nzCalendarHeader"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "ant-picker-calendar-header"], [4, "nzStringTemplateOutlet"], [1, "ant-picker-calendar-year-select", 3, "ngModelChange", "nzSize", "nzDropdownMatchSelectWidth", "ngModel"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel"], [1, "ant-picker-calendar-mode-switch", 3, "ngModelChange", "ngModel", "nzSize"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [1, "ant-picker-calendar-month-select", 3, "ngModelChange", "nzSize", "nzDropdownMatchSelectWidth", "ngModel"]],
    template: function NzCalendarHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzCalendarHeaderComponent_Conditional_0_Template, 1, 1, "ng-container")(1, NzCalendarHeaderComponent_Conditional_1_Template, 10, 8, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzCustomHeader ? 0 : 1);
      }
    },
    dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel, NzRadioModule, NzRadioComponent, NzRadioGroupComponent, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar-header",
      exportAs: "nzCalendarHeader",
      template: `
    @if (nzCustomHeader) {
      <ng-container *nzStringTemplateOutlet="nzCustomHeader">{{ nzCustomHeader }}</ng-container>
    } @else {
      <div class="ant-picker-calendar-header">
        <nz-select
          class="ant-picker-calendar-year-select"
          [nzSize]="size"
          [nzDropdownMatchSelectWidth]="false"
          [ngModel]="activeYear"
          (ngModelChange)="updateYear($event)"
        >
          @for (year of years; track year.value) {
            <nz-option [nzLabel]="year.label" [nzValue]="year.value" />
          }
        </nz-select>

        @if (mode === 'month') {
          <nz-select
            class="ant-picker-calendar-month-select"
            [nzSize]="size"
            [nzDropdownMatchSelectWidth]="false"
            [ngModel]="activeMonth"
            (ngModelChange)="monthChange.emit($event)"
          >
            @for (month of months; track month.value) {
              <nz-option [nzLabel]="month.label" [nzValue]="month.value" />
            }
          </nz-select>
        }

        <nz-radio-group
          class="ant-picker-calendar-mode-switch"
          [(ngModel)]="mode"
          (ngModelChange)="modeChange.emit($event)"
          [nzSize]="size"
        >
          <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
          <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
        </nz-radio-group>
      </div>
    }
  `,
      host: {
        class: "ant-fullcalendar-header",
        "[style.display]": `'block'`
      },
      imports: [NzSelectModule, FormsModule, NzRadioModule, NzStringTemplateOutletDirective]
    }]
  }], null, {
    mode: [{
      type: Input
    }],
    fullscreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeDate: [{
      type: Input
    }],
    nzCustomHeader: [{
      type: Input
    }],
    modeChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }]
  });
})();
var NzCalendarComponent = class _NzCalendarComponent {
  cdr = inject(ChangeDetectorRef);
  directionality = inject(Directionality);
  destroyRef = inject(DestroyRef);
  activeDate = new CandyDate();
  prefixCls = "ant-picker-calendar";
  dir = "ltr";
  onChangeFn = () => {
  };
  onTouchFn = () => {
  };
  nzMode = "month";
  nzValue;
  nzDisabledDate;
  nzModeChange = new EventEmitter();
  nzPanelChange = new EventEmitter();
  nzSelectChange = new EventEmitter();
  nzValueChange = new EventEmitter();
  /**
   * Cannot use @Input and @ContentChild on one variable
   * because { static: false } will make @Input property get delayed
   **/
  nzDateCell;
  nzDateCellChild;
  get dateCell() {
    return this.nzDateCell || this.nzDateCellChild;
  }
  nzDateFullCell;
  nzDateFullCellChild;
  get dateFullCell() {
    return this.nzDateFullCell || this.nzDateFullCellChild;
  }
  nzMonthCell;
  nzMonthCellChild;
  get monthCell() {
    return this.nzMonthCell || this.nzMonthCellChild;
  }
  nzMonthFullCell;
  nzMonthFullCellChild;
  get monthFullCell() {
    return this.nzMonthFullCell || this.nzMonthFullCellChild;
  }
  nzCustomHeader;
  nzFullscreen = true;
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.dir = this.directionality.value;
    });
  }
  onModeChange(mode) {
    this.nzModeChange.emit(mode);
    this.nzPanelChange.emit({
      date: this.activeDate.nativeDate,
      mode
    });
  }
  onYearSelect(year) {
    const date = this.activeDate.setYear(year);
    this.updateDate(date);
  }
  onMonthSelect(month) {
    const date = this.activeDate.setMonth(month);
    this.updateDate(date);
  }
  onDateSelect(date) {
    this.updateDate(date);
  }
  writeValue(value) {
    this.updateDate(new CandyDate(value), false);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  updateDate(date, touched = true) {
    this.activeDate = date;
    if (touched) {
      this.onChangeFn(date.nativeDate);
      this.onTouchFn();
      this.nzSelectChange.emit(date.nativeDate);
      this.nzValueChange.emit(date.nativeDate);
    }
  }
  ngOnChanges(changes) {
    if (changes.nzValue) {
      this.updateDate(new CandyDate(this.nzValue), false);
    }
  }
  static \u0275fac = function NzCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCalendarComponent,
    selectors: [["nz-calendar"]],
    contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzDateCellDirective, 5, TemplateRef)(dirIndex, NzDateFullCellDirective, 5, TemplateRef)(dirIndex, NzMonthCellDirective, 5, TemplateRef)(dirIndex, NzMonthFullCellDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzDateCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMonthCellChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker-calendar"],
    hostVars: 6,
    hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzValue: "nzValue",
      nzDisabledDate: "nzDisabledDate",
      nzDateCell: "nzDateCell",
      nzDateFullCell: "nzDateFullCell",
      nzMonthCell: "nzMonthCell",
      nzMonthFullCell: "nzMonthFullCell",
      nzCustomHeader: "nzCustomHeader",
      nzFullscreen: [2, "nzFullscreen", "nzFullscreen", booleanAttribute]
    },
    outputs: {
      nzModeChange: "nzModeChange",
      nzPanelChange: "nzPanelChange",
      nzSelectChange: "nzSelectChange",
      nzValueChange: "nzValueChange"
    },
    exportAs: ["nzCalendar"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzCalendarComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 8,
    consts: [[3, "modeChange", "yearChange", "monthChange", "fullscreen", "activeDate", "nzCustomHeader", "mode"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender"], [3, "valueChange", "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate"], [3, "valueChange", "prefixCls", "value", "activeDate", "cellRender", "fullCellRender"]],
    template: function NzCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-calendar-header", 0);
        \u0275\u0275twoWayListener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nzMode, $event) || (ctx.nzMode = $event);
          return $event;
        });
        \u0275\u0275listener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) {
          return ctx.onModeChange($event);
        })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) {
          return ctx.onYearSelect($event);
        })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) {
          return ctx.onMonthSelect($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "div", 2);
        \u0275\u0275conditionalCreate(4, NzCalendarComponent_Conditional_4_Template, 1, 6, "date-table", 3)(5, NzCalendarComponent_Conditional_5_Template, 1, 5, "month-table", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("nzCustomHeader", ctx.nzCustomHeader);
        \u0275\u0275twoWayProperty("mode", ctx.nzMode);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(\u0275\u0275interpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzMode === "month" ? 4 : 5);
      }
    },
    dependencies: [NzCalendarHeaderComponent, LibPackerModule, DateTableComponent, MonthTableComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-calendar",
      exportAs: "nzCalendar",
      template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [nzCustomHeader]="nzCustomHeader"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    />

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          @if (nzMode === 'month') {
            <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
            <date-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(dateCell)"
              [fullCellRender]="$any(dateFullCell)"
              [disabledDate]="nzDisabledDate"
              (valueChange)="onDateSelect($event)"
            />
          } @else {
            <month-table
              [prefixCls]="prefixCls"
              [value]="activeDate"
              [activeDate]="activeDate"
              [cellRender]="$any(monthCell)"
              [fullCellRender]="$any(monthFullCell)"
              (valueChange)="onDateSelect($event)"
            />
          }
        </div>
      </div>
    </div>
  `,
      host: {
        class: "ant-picker-calendar",
        "[class.ant-picker-calendar-full]": "nzFullscreen",
        "[class.ant-picker-calendar-mini]": "!nzFullscreen",
        "[class.ant-picker-calendar-rtl]": `dir === 'rtl'`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCalendarComponent),
        multi: true
      }],
      imports: [NzCalendarHeaderComponent, LibPackerModule]
    }]
  }], null, {
    nzMode: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzDisabledDate: [{
      type: Input
    }],
    nzModeChange: [{
      type: Output
    }],
    nzPanelChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }],
    nzValueChange: [{
      type: Output
    }],
    nzDateCell: [{
      type: Input
    }],
    nzDateCellChild: [{
      type: ContentChild,
      args: [NzDateCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzDateFullCell: [{
      type: Input
    }],
    nzDateFullCellChild: [{
      type: ContentChild,
      args: [NzDateFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthCell: [{
      type: Input
    }],
    nzMonthCellChild: [{
      type: ContentChild,
      args: [NzMonthCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzMonthFullCell: [{
      type: Input
    }],
    nzMonthFullCellChild: [{
      type: ContentChild,
      args: [NzMonthFullCellDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    nzCustomHeader: [{
      type: Input
    }],
    nzFullscreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzCalendarModule = class _NzCalendarModule {
  static \u0275fac = function NzCalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCalendarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCalendarModule,
    imports: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
    exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCalendarHeaderComponent, NzCalendarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCalendarModule, [{
    type: NgModule,
    args: [{
      imports: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
      exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-calendar.ts
var HrmCalendar = class _HrmCalendar extends HrmControl {
  constructor() {
    super(...arguments);
    this.fullscreen = input(false, ...ngDevMode ? [{ debugName: "fullscreen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("month", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dateCell = input(null, ...ngDevMode ? [{ debugName: "dateCell" }] : (
      /* istanbul ignore next */
      []
    ));
    this.monthCell = input(null, ...ngDevMode ? [{ debugName: "monthCell" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmCalendar_BaseFactory;
      return function HrmCalendar_Factory(__ngFactoryType__) {
        return (\u0275HrmCalendar_BaseFactory || (\u0275HrmCalendar_BaseFactory = \u0275\u0275getInheritedFactory(_HrmCalendar)))(__ngFactoryType__ || _HrmCalendar);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCalendar, selectors: [["hrm-calendar"]], hostAttrs: [1, "hrm-calendar"], inputs: { fullscreen: [1, "fullscreen"], mode: [1, "mode"], dateCell: [1, "dateCell"], monthCell: [1, "monthCell"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmCalendar), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModelChange", "ngModel", "nzMode", "nzFullscreen", "nzDateCell", "nzMonthCell"]], template: function HrmCalendar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-calendar", 0);
        \u0275\u0275listener("ngModelChange", function HrmCalendar_Template_nz_calendar_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzMode", ctx.mode())("nzFullscreen", ctx.fullscreen())("nzDateCell", ctx.dateCell() ?? void 0)("nzMonthCell", ctx.monthCell() ?? void 0);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzCalendarModule, NzCalendarComponent, NzDateCellDirective, NzMonthCellDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCalendar, [{
    type: Component,
    args: [{
      selector: "hrm-calendar",
      imports: [FormsModule, NzCalendarModule],
      template: `
    <nz-calendar
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzMode]="mode()"
      [nzFullscreen]="fullscreen()"
      [nzDateCell]="dateCell() ?? undefined"
      [nzMonthCell]="monthCell() ?? undefined"></nz-calendar>
  `,
      host: { class: "hrm-calendar" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmCalendar), multi: true }]
    }]
  }], null, { fullscreen: [{ type: Input, args: [{ isSignal: true, alias: "fullscreen", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], dateCell: [{ type: Input, args: [{ isSignal: true, alias: "dateCell", required: false }] }], monthCell: [{ type: Input, args: [{ isSignal: true, alias: "monthCell", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCalendar, { className: "HrmCalendar", filePath: "libs/hrm-ui/src/lib/data-display/hrm-calendar.ts", lineNumber: 29 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/calendar.ts
var _forTrack02 = ($index, $item) => $item.text;
function SgDocCalendar_ng_template_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-badge", 15);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 1, "docs.calendar.cellHoliday"));
  }
}
function SgDocCalendar_ng_template_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.calendar.cellWeekend"));
  }
}
function SgDocCalendar_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgDocCalendar_ng_template_37_Conditional_0_Template, 2, 3, "hrm-badge", 15)(1, SgDocCalendar_ng_template_37_Conditional_1_Template, 3, 3, "span", 16);
  }
  if (rf & 2) {
    const date_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.holiday(date_r2) ? 0 : ctx_r2.weekend(date_r2) ? 1 : -1);
  }
}
function SgDocCalendar_ng_template_51_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "hrm-badge", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("status", ev_r4.status)("text", \u0275\u0275pipeBind1(2, 2, ev_r4.text));
  }
}
function SgDocCalendar_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SgDocCalendar_ng_template_51_For_1_Template, 3, 4, "div", 17, _forTrack02);
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.events(date_r5));
  }
}
var SgDocCalendar = class _SgDocCalendar {
  constructor() {
    this.d = new Date(2026, 6, 6);
    this.when = [
      "docs.calendar.when1",
      "docs.calendar.when2",
      "docs.calendar.when3"
    ];
    this.holidays = /* @__PURE__ */ new Set([1, 30]);
    this.eventMap = {
      6: [{ status: "processing", text: "docs.calendar.evMeeting" }],
      12: [{ status: "warning", text: "docs.calendar.evInterview" }],
      20: [
        { status: "processing", text: "docs.calendar.evReview" },
        { status: "error", text: "docs.calendar.evDeadline" }
      ]
    };
  }
  weekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  holiday(date) {
    return this.holidays.has(date.getDate());
  }
  events(date) {
    return this.eventMap[date.getDate()] ?? [];
  }
  static {
    this.\u0275fac = function SgDocCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCalendar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCalendar, selectors: [["sg-doc-calendar"]], decls: 59, vars: 66, consts: [["attCell", ""], ["eventCell", ""], ["category", "Content", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%"], [3, "ngModelChange", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "ngModelChange", "ngModel", "dateCell"], ["mode", "year", 3, "ngModelChange", "ngModel"], [2, "width", "320px"], [3, "ngModelChange", "ngModel", "fullscreen"], ["status", "error", 3, "text"], [2, "font-size", "var(--fs-12)", "color", "var(--text-soft)"], [2, "line-height", "1.6"], [3, "status", "text"]], template: function SgDocCalendar_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "sg-doc", 2);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "hrm-calendar", 5);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCalendar_Template_hrm_calendar_ngModelChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.d, $event) || (ctx.d = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "sg-use", 7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "sg-do");
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
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-dont");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9)(31, "sg-example", 10);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 4)(36, "hrm-calendar", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCalendar_Template_hrm_calendar_ngModelChange_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.d, $event) || (ctx.d = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, SgDocCalendar_ng_template_37_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "sg-example", 10);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row")(43, "div", 4)(44, "hrm-calendar", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCalendar_Template_hrm_calendar_ngModelChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.d, $event) || (ctx.d = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "sg-example", 10);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row")(49, "div", 4)(50, "hrm-calendar", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCalendar_Template_hrm_calendar_ngModelChange_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.d, $event) || (ctx.d = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, SgDocCalendar_ng_template_51_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "sg-example", 10);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementStart(56, "sg-row")(57, "div", 13)(58, "hrm-calendar", 14);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocCalendar_Template_hrm_calendar_ngModelChange_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.d, $event) || (ctx.d = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const attCell_r6 = \u0275\u0275reference(38);
        const eventCell_r7 = \u0275\u0275reference(52);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 28, "docs.calendar.title"))("desc", \u0275\u0275pipeBind1(2, 30, "docs.calendar.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.d);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 32, "docs.calendar.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 34, "docs.calendar.behavior"))("avoid", \u0275\u0275pipeBind1(10, 36, "docs.calendar.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 38, "docs.calendar.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 40, "docs.calendar.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 42, "docs.calendar.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 44, "docs.calendar.do4"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 46, "docs.calendar.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 48, "docs.calendar.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 50, "docs.calendar.exMonthT"))("desc", \u0275\u0275pipeBind1(33, 52, "docs.calendar.exMonthD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.d);
        \u0275\u0275property("dateCell", attCell_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 54, "docs.calendar.exYearT"))("desc", \u0275\u0275pipeBind1(41, 56, "docs.calendar.exYearD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.d);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 58, "docs.calendar.exEventT"))("desc", \u0275\u0275pipeBind1(47, 60, "docs.calendar.exEventD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.d);
        \u0275\u0275property("dateCell", eventCell_r7);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(54, 62, "docs.calendar.exCompactT"))("desc", \u0275\u0275pipeBind1(55, 64, "docs.calendar.exCompactD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.d);
        \u0275\u0275property("fullscreen", false);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmCalendar, HrmBadge, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCalendar, [{
    type: Component,
    args: [{
      selector: "sg-doc-calendar",
      imports: [FormsModule, TranslateModule, HrmCalendar, HrmBadge, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.calendar.title' | translate"
      [desc]="'docs.calendar.desc' | translate">

      <div sgOverview>
        <div style="width:100%"><hrm-calendar [(ngModel)]="d" /></div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.calendar.purpose' | translate"
          [when]="when"
          [behavior]="'docs.calendar.behavior' | translate"
          [avoid]="'docs.calendar.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.calendar.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.calendar.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.calendar.do3' | translate }}</sg-do>
        <sg-do>{{ 'docs.calendar.do4' | translate }}</sg-do>
        <sg-dont>{{ 'docs.calendar.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.calendar.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.calendar.exMonthT' | translate"
          [desc]="'docs.calendar.exMonthD' | translate">
          <sg-row>
            <div style="width:100%">
              <hrm-calendar [(ngModel)]="d" [dateCell]="attCell" />
              <ng-template #attCell let-date>
                @if (holiday(date)) {
                  <hrm-badge status="error" [text]="'docs.calendar.cellHoliday' | translate" />
                } @else if (weekend(date)) {
                  <span style="font-size: var(--fs-12);color:var(--text-soft)">{{ 'docs.calendar.cellWeekend' | translate }}</span>
                }
              </ng-template>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.calendar.exYearT' | translate"
          [desc]="'docs.calendar.exYearD' | translate">
          <sg-row>
            <div style="width:100%"><hrm-calendar [(ngModel)]="d" mode="year" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.calendar.exEventT' | translate"
          [desc]="'docs.calendar.exEventD' | translate">
          <sg-row>
            <div style="width:100%">
              <hrm-calendar [(ngModel)]="d" [dateCell]="eventCell" />
              <ng-template #eventCell let-date>
                @for (ev of events(date); track ev.text) {
                  <div style="line-height:1.6"><hrm-badge [status]="ev.status" [text]="ev.text | translate" /></div>
                }
              </ng-template>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.calendar.exCompactT' | translate"
          [desc]="'docs.calendar.exCompactD' | translate">
          <sg-row>
            <div style="width:320px"><hrm-calendar [(ngModel)]="d" [fullscreen]="false" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCalendar, { className: "SgDocCalendar", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/calendar.ts", lineNumber: 86 });
})();
export {
  SgDocCalendar
};
//# sourceMappingURL=chunk-UG2RFSJQ.js.map
