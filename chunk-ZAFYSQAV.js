import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-7MILWWSJ.js";
import "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
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
import {
  DEFAULT_MENTION_BOTTOM_POSITIONS,
  DEFAULT_MENTION_TOP_POSITIONS
} from "./chunk-KACPPJM2.js";
import {
  ConnectionPositionPair,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-44R6GU63.js";
import {
  TemplatePortal
} from "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import {
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  TAB,
  UP_ARROW
} from "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import {
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import {
  NZ_FORM_VARIANT,
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-6YNSEAJZ.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import {
  fromEventOutsideAngular,
  getCaretCoordinates,
  getMentions,
  getStatusClassNames
} from "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  distinctUntilChanged,
  effect,
  forwardRef,
  inject,
  input,
  map,
  merge,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-mention.mjs
var _c0 = ["items"];
var _c1 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzMentionComponent_ng_template_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const suggestion_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.suggestionTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, suggestion_r3));
  }
}
function NzMentionComponent_ng_template_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const suggestion_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzValueWith(suggestion_r3), " ");
  }
}
function NzMentionComponent_ng_template_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8, 1);
    \u0275\u0275listener("click", function NzMentionComponent_ng_template_1_For_3_Template_li_click_0_listener() {
      const suggestion_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSuggestion(suggestion_r3));
    });
    \u0275\u0275conditionalCreate(2, NzMentionComponent_ng_template_1_For_3_Conditional_2_Template, 1, 4, "ng-container")(3, NzMentionComponent_ng_template_1_For_3_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-mentions-dropdown-menu-item-active", $index_r4 === ctx_r0.activeIndex)("ant-mentions-dropdown-menu-item-selected", $index_r4 === ctx_r0.activeIndex);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.suggestionTemplate ? 2 : 3);
  }
}
function NzMentionComponent_ng_template_1_ForEmpty_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "nz-icon", 10);
    \u0275\u0275elementEnd();
  }
}
function NzMentionComponent_ng_template_1_ForEmpty_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "nz-embed-empty", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r0.nzNotFoundContent);
  }
}
function NzMentionComponent_ng_template_1_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7);
    \u0275\u0275conditionalCreate(1, NzMentionComponent_ng_template_1_ForEmpty_4_Conditional_1_Template, 2, 0, "span")(2, NzMentionComponent_ng_template_1_ForEmpty_4_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzLoading ? 1 : 2);
  }
}
function NzMentionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "ul", 5);
    \u0275\u0275repeaterCreate(2, NzMentionComponent_ng_template_1_For_3_Template, 4, 5, "li", 6, \u0275\u0275repeaterTrackByIdentity, false, NzMentionComponent_ng_template_1_ForEmpty_4_Template, 3, 1, "li", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredSuggestions);
  }
}
function NzMentionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r0.status);
  }
}
function NzMentionComponent_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 14);
  }
}
function NzMentionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 3)(1, "button", 12);
    \u0275\u0275listener("click", function NzMentionComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clear());
    });
    \u0275\u0275template(2, NzMentionComponent_Conditional_4_ng_template_2_Template, 1, 0, "ng-template", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzClearIcon);
  }
}
var NzMentionSuggestionDirective = class _NzMentionSuggestionDirective {
  static \u0275fac = function NzMentionSuggestionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMentionSuggestionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMentionSuggestionDirective,
    selectors: [["", "nzMentionSuggestion", ""]],
    exportAs: ["nzMentionSuggestion"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionSuggestionDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMentionSuggestion]",
      exportAs: "nzMentionSuggestion"
    }]
  }], null, null);
})();
var NZ_MENTION_CONFIG = {
  split: " "
};
var NzMentionTriggerDirective = class _NzMentionTriggerDirective {
  elementRef = inject(ElementRef);
  ngZone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onFocusin = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onBlur = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onInput = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onKeydown = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter();
  value = signal("", ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  disabled = signal(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.completeEvents();
    });
    afterNextRender(() => {
      this.setupEventListener("blur", this.onBlur);
      this.setupEventListener("focusin", this.onFocusin);
      this.setupEventListener("input", this.onInput);
      this.setupEventListener("click", this.onClick);
      this.setupEventListener("keydown", this.onKeydown);
    });
  }
  completeEvents() {
    this.onFocusin.complete();
    this.onBlur.complete();
    this.onInput.complete();
    this.onKeydown.complete();
    this.onClick.complete();
  }
  focus(caretPos = null) {
    this.elementRef.nativeElement.focus();
    this.elementRef.nativeElement.setSelectionRange(caretPos, caretPos);
  }
  insertMention(mention) {
    const value = this.elementRef.nativeElement.value;
    const insertValue = `${mention.mention}${NZ_MENTION_CONFIG.split}`;
    const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join("");
    this.elementRef.nativeElement.value = newValue;
    this.focus(mention.startPos + insertValue.length + 1);
    this.onChange(newValue);
    this.value.set(newValue);
  }
  clear() {
    this.value.set("");
    this.elementRef.nativeElement.value = "";
    this.onChange("");
  }
  writeValue(value) {
    const parsedValue = typeof value === "string" ? value : "";
    this.value.set(parsedValue);
    this.elementRef.nativeElement.value = parsedValue;
  }
  onChange = () => {
  };
  onTouched = () => {
  };
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  handleBlur() {
    this.onTouched();
  }
  setupEventListener(eventName, eventEmitter) {
    fromEventOutsideAngular(this.elementRef.nativeElement, eventName).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (eventEmitter.observers.length) {
        this.ngZone.run(() => {
          eventEmitter.emit(event);
          this.cdr.markForCheck();
        });
      }
    });
  }
  static \u0275fac = function NzMentionTriggerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMentionTriggerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMentionTriggerDirective,
    selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]],
    hostAttrs: ["autocomplete", "off"],
    hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() {
          return ctx.handleBlur();
        });
      }
    },
    outputs: {
      onFocusin: "onFocusin",
      onBlur: "onBlur",
      onInput: "onInput",
      onKeydown: "onKeydown",
      onClick: "onClick"
    },
    exportAs: ["nzMentionTrigger"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzMentionTriggerDirective),
      multi: true
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]",
      exportAs: "nzMentionTrigger",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzMentionTriggerDirective),
        multi: true
      }],
      host: {
        autocomplete: "off",
        "(blur)": "handleBlur()"
      }
    }]
  }], () => [], {
    onFocusin: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var NzMentionComponent = class _NzMentionComponent {
  ngZone = inject(NgZone);
  directionality = inject(Directionality);
  cdr = inject(ChangeDetectorRef);
  injector = inject(Injector);
  viewContainerRef = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  nzValueWith = (value) => value;
  nzPrefix = "@";
  nzLoading = false;
  nzNotFoundContent = "\u65E0\u5339\u914D\u7ED3\u679C\uFF0C\u8F7B\u6572\u7A7A\u683C\u5B8C\u6210\u8F93\u5165";
  nzPlacement = "bottom";
  nzSuggestions = [];
  nzStatus = "";
  nzVariant = void 0;
  nzAllowClear = false;
  nzClearIcon = null;
  nzOnSelect = new EventEmitter();
  nzOnSearchChange = new EventEmitter();
  nzOnClear = new EventEmitter();
  suggestionsTemp;
  items;
  set suggestionChild(value) {
    if (value) {
      this.suggestionTemplate = value;
    }
  }
  trigger = contentChild.required(NzMentionTriggerDirective);
  isOpen = false;
  filteredSuggestions = [];
  suggestionTemplate = null;
  activeIndex = -1;
  dir = "ltr";
  // status
  prefixCls = "ant-mentions";
  statusCls = {};
  status = "";
  hasFeedback = false;
  focused = signal(false, ...ngDevMode ? [{
    debugName: "focused"
  }] : []);
  disabled = computed(() => {
    return this.trigger().disabled();
  }, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  hasValue = computed(() => {
    return !!this.trigger()?.value().trim();
  }, ...ngDevMode ? [{
    debugName: "hasValue"
  }] : []);
  previousValue = null;
  cursorMention = null;
  cursorMentionStart;
  cursorMentionEnd;
  overlayRef = null;
  portal;
  positionStrategy;
  overlayOutsideClickSubscription;
  document = inject(DOCUMENT);
  get triggerNativeElement() {
    return this.trigger().elementRef.nativeElement;
  }
  get focusItemElement() {
    const itemArr = this.items?.toArray();
    if (itemArr && itemArr[this.activeIndex]) {
      return itemArr[this.activeIndex].nativeElement;
    }
    return null;
  }
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  nzFormNoStatusService = inject(NzFormNoStatusService, {
    optional: true
  });
  formVariant = inject(NZ_FORM_VARIANT, {
    optional: true
  });
  variant = signal(this.nzVariant, ...ngDevMode ? [{
    debugName: "variant"
  }] : []);
  finalVariant = computed(() => this.variant() || this.formVariant?.() || "outlined", ...ngDevMode ? [{
    debugName: "finalVariant"
  }] : []);
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.closeDropdown();
    });
    effect(() => {
      const trigger = this.trigger();
      if (trigger) {
        this.bindTriggerEvents();
        this.closeDropdown();
        this.overlayRef = null;
      }
    });
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntilDestroyed(this.destroyRef)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      nzSuggestions,
      nzStatus,
      nzVariant
    } = changes;
    if (nzSuggestions) {
      if (this.isOpen) {
        this.previousValue = null;
        this.activeIndex = -1;
        this.resetDropdown(false);
      }
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzVariant) {
      this.variant.set(nzVariant.currentValue);
    }
  }
  ngAfterViewInit() {
    this.items.changes.pipe(startWith(this.items), switchMap(() => {
      const items = this.items.toArray();
      return merge(...items.map((item) => fromEventOutsideAngular(item.nativeElement, "mousedown")));
    })).subscribe((event) => {
      event.preventDefault();
    });
  }
  closeDropdown() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.overlayOutsideClickSubscription.unsubscribe();
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }
  openDropdown() {
    this.attachOverlay();
    this.isOpen = true;
    this.cdr.markForCheck();
  }
  getMentions() {
    return this.trigger() ? getMentions(this.trigger().value(), this.nzPrefix) : [];
  }
  selectSuggestion(suggestion) {
    const value = this.nzValueWith(suggestion);
    this.trigger().insertMention({
      mention: value,
      startPos: this.cursorMentionStart,
      endPos: this.cursorMentionEnd
    });
    this.nzOnSelect.emit(suggestion);
    this.closeDropdown();
    this.activeIndex = -1;
  }
  clear() {
    this.closeDropdown();
    this.trigger().clear();
    this.nzOnClear.emit();
  }
  handleInput(event) {
    const target = event.target;
    this.trigger().onChange(target.value);
    this.trigger().value.set(target.value);
    this.resetDropdown();
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
      this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
      event.preventDefault();
    } else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.resetDropdown();
      event.stopPropagation();
    } else {
      if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
        this.closeDropdown();
        return;
      }
      if (this.isOpen && keyCode === UP_ARROW) {
        this.setPreviousItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
      if (this.isOpen && keyCode === DOWN_ARROW) {
        this.setNextItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
  handleClick() {
    this.resetDropdown(false);
  }
  bindTriggerEvents() {
    this.trigger().onFocusin.subscribe(() => this.focused.set(true));
    this.trigger().onBlur.subscribe(() => this.focused.set(false));
    this.trigger().onInput.subscribe((e) => this.handleInput(e));
    this.trigger().onKeydown.subscribe((e) => this.handleKeydown(e));
    this.trigger().onClick.subscribe(() => this.handleClick());
  }
  suggestionsFilter(value, emit) {
    const suggestions = value.substring(1);
    if (this.previousValue === value && value !== this.cursorMention[0]) {
      return;
    }
    this.previousValue = value;
    if (emit) {
      this.nzOnSearchChange.emit({
        value: this.cursorMention.substring(1),
        prefix: this.cursorMention[0]
      });
    }
    const searchValue = suggestions.toLowerCase();
    this.filteredSuggestions = this.nzSuggestions.filter((suggestion) => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
  }
  resetDropdown(emit = true) {
    this.resetCursorMention();
    if (typeof this.cursorMention !== "string" || !this.canOpen()) {
      this.closeDropdown();
      return;
    }
    this.suggestionsFilter(this.cursorMention, emit);
    const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
    this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
    this.openDropdown();
  }
  setNextItemActive() {
    this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  setPreviousItemActive() {
    this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  scrollToFocusItem() {
    if (this.focusItemElement) {
      this.focusItemElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
  canOpen() {
    const element = this.triggerNativeElement;
    return !element.readOnly && !element.disabled;
  }
  resetCursorMention() {
    const value = this.triggerNativeElement.value.replace(/[\r\n]/g, NZ_MENTION_CONFIG.split) || "";
    const selectionStart = this.triggerNativeElement.selectionStart;
    const prefix = typeof this.nzPrefix === "string" ? [this.nzPrefix] : this.nzPrefix;
    let i = prefix.length;
    while (i >= 0) {
      const startPos = value.lastIndexOf(prefix[i], selectionStart);
      const endPos = value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) > -1 ? value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) : value.length;
      const mention = value.substring(startPos, endPos);
      if (startPos > 0 && value[startPos - 1] !== NZ_MENTION_CONFIG.split || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(NZ_MENTION_CONFIG.split)) {
        this.cursorMention = null;
        this.cursorMentionStart = -1;
        this.cursorMentionEnd = -1;
      } else {
        this.cursorMention = mention;
        this.cursorMentionStart = startPos;
        this.cursorMentionEnd = endPos;
        return;
      }
      i--;
    }
  }
  updatePositions() {
    const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
    const top = coordinates.top - this.triggerNativeElement.getBoundingClientRect().height - this.triggerNativeElement.scrollTop + (this.nzPlacement === "bottom" ? coordinates.height - 6 : -6);
    const left = coordinates.left - this.triggerNativeElement.scrollLeft;
    this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
    if (this.nzPlacement === "bottom") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_BOTTOM_POSITIONS]);
    }
    if (this.nzPlacement === "top") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_TOP_POSITIONS]);
    }
    this.positionStrategy.apply();
  }
  subscribeOverlayOutsideClick() {
    const canCloseDropdown = (event) => {
      const clickTarget = event.target;
      return this.isOpen && clickTarget !== this.triggerNativeElement && !this.overlayRef?.overlayElement.contains(clickTarget);
    };
    const subscription = new Subscription();
    subscription.add(this.overlayRef.outsidePointerEvents().subscribe((event) => canCloseDropdown(event) && this.closeDropdown()));
    subscription.add(fromEventOutsideAngular(this.document, "touchend").subscribe((event) => canCloseDropdown(event) && this.ngZone.run(() => this.closeDropdown())));
    return subscription;
  }
  attachOverlay() {
    if (!this.overlayRef) {
      this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
      this.overlayRef = createOverlayRef(this.injector, {
        positionStrategy: this.getOverlayPosition(),
        scrollStrategy: createRepositionScrollStrategy(this.injector),
        disposeOnNavigation: true
      });
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
    }
    this.updatePositions();
  }
  getOverlayPosition() {
    return this.positionStrategy = createFlexibleConnectedPositionStrategy(this.injector, this.trigger().elementRef).withPositions([new ConnectionPositionPair({
      originX: "start",
      originY: "bottom"
    }, {
      overlayX: "start",
      overlayY: "top"
    }), new ConnectionPositionPair({
      originX: "start",
      originY: "top"
    }, {
      overlayX: "start",
      overlayY: "bottom"
    })]).withFlexibleDimensions(false).withPush(false);
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  static \u0275fac = function NzMentionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMentionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzMentionComponent,
    selectors: [["nz-mention"]],
    contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.trigger, NzMentionTriggerDirective, 5);
        \u0275\u0275contentQuery(dirIndex, NzMentionSuggestionDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.suggestionChild = _t.first);
      }
    },
    viewQuery: function NzMentionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5)(_c0, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.suggestionsTemp = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    },
    hostAttrs: [1, "ant-mentions"],
    hostVars: 12,
    hostBindings: function NzMentionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-mentions-rtl", ctx.dir === "rtl")("ant-mentions-borderless", ctx.finalVariant() === "borderless")("ant-mentions-filled", ctx.finalVariant() === "filled")("ant-mentions-underlined", ctx.finalVariant() === "underlined")("ant-mentions-focused", ctx.focused())("ant-mentions-disabled", ctx.disabled());
      }
    },
    inputs: {
      nzValueWith: "nzValueWith",
      nzPrefix: "nzPrefix",
      nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
      nzNotFoundContent: "nzNotFoundContent",
      nzPlacement: "nzPlacement",
      nzSuggestions: "nzSuggestions",
      nzStatus: "nzStatus",
      nzVariant: "nzVariant",
      nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
      nzClearIcon: "nzClearIcon"
    },
    outputs: {
      nzOnSelect: "nzOnSelect",
      nzOnSearchChange: "nzOnSearchChange",
      nzOnClear: "nzOnClear"
    },
    exportAs: ["nzMention"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [["suggestions", ""], ["items", ""], [1, "ant-mentions-suffix", 3, "status"], [1, "ant-mentions-suffix"], [1, "ant-mentions-dropdown"], ["role", "menu", "tabindex", "0", 1, "ant-mentions-dropdown-menu"], ["role", "menuitem", "tabindex", "-1", 1, "ant-mentions-dropdown-menu-item", 3, "ant-mentions-dropdown-menu-item-active", "ant-mentions-dropdown-menu-item-selected"], [1, "ant-mentions-dropdown-menu-item", "ant-mentions-dropdown-menu-item-disabled"], ["role", "menuitem", "tabindex", "-1", 1, "ant-mentions-dropdown-menu-item", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzType", "loading"], ["nzComponentName", "select", 3, "specificContent"], ["type", "button", "tabindex", "-1", 1, "ant-mentions-clear-icon", 3, "click"], [3, "nzStringTemplateOutlet"], ["nzType", "close-circle", "nzTheme", "fill"]],
    template: function NzMentionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, NzMentionComponent_ng_template_1_Template, 5, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(3, NzMentionComponent_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 2);
        \u0275\u0275conditionalCreate(4, NzMentionComponent_Conditional_4_Template, 3, 1, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.hasFeedback && !!ctx.status ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzAllowClear && ctx.hasValue() ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective, NzEmptyModule, NzEmbedEmptyComponent, NzFormItemFeedbackIconComponent, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionComponent, [{
    type: Component,
    args: [{
      selector: "nz-mention",
      exportAs: "nzMention",
      template: `
    <ng-content />
    <ng-template #suggestions>
      <div class="ant-mentions-dropdown">
        <ul class="ant-mentions-dropdown-menu" role="menu" tabindex="0">
          @for (suggestion of filteredSuggestions; track suggestion) {
            <li
              #items
              class="ant-mentions-dropdown-menu-item"
              role="menuitem"
              tabindex="-1"
              [class.ant-mentions-dropdown-menu-item-active]="$index === activeIndex"
              [class.ant-mentions-dropdown-menu-item-selected]="$index === activeIndex"
              (click)="selectSuggestion(suggestion)"
            >
              @if (suggestionTemplate) {
                <ng-container *ngTemplateOutlet="suggestionTemplate; context: { $implicit: suggestion }" />
              } @else {
                {{ nzValueWith(suggestion) }}
              }
            </li>
          } @empty {
            <li class="ant-mentions-dropdown-menu-item ant-mentions-dropdown-menu-item-disabled">
              @if (nzLoading) {
                <span><nz-icon nzType="loading" /></span>
              } @else {
                <span>
                  <nz-embed-empty nzComponentName="select" [specificContent]="nzNotFoundContent!" />
                </span>
              }
            </li>
          }
        </ul>
      </div>
    </ng-template>
    @if (hasFeedback && !!status) {
      <nz-form-item-feedback-icon class="ant-mentions-suffix" [status]="status" />
    }
    @if (nzAllowClear && hasValue()) {
      <span class="ant-mentions-suffix">
        <button type="button" tabindex="-1" class="ant-mentions-clear-icon" (click)="clear()">
          <ng-template [nzStringTemplateOutlet]="nzClearIcon">
            <nz-icon nzType="close-circle" nzTheme="fill" />
          </ng-template>
        </button>
      </span>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-mentions",
        "[class.ant-mentions-rtl]": `dir === 'rtl'`,
        "[class.ant-mentions-borderless]": `finalVariant() === 'borderless'`,
        "[class.ant-mentions-filled]": `finalVariant() === 'filled'`,
        "[class.ant-mentions-underlined]": `finalVariant() === 'underlined'`,
        "[class.ant-mentions-focused]": `focused()`,
        "[class.ant-mentions-disabled]": `disabled()`
      },
      imports: [NgTemplateOutlet, NzIconModule, NzEmptyModule, NzFormItemFeedbackIconComponent, NzStringTemplateOutletDirective]
    }]
  }], () => [], {
    nzValueWith: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSuggestions: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzVariant: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzClearIcon: [{
      type: Input
    }],
    nzOnSelect: [{
      type: Output
    }],
    nzOnSearchChange: [{
      type: Output
    }],
    nzOnClear: [{
      type: Output
    }],
    suggestionsTemp: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    items: [{
      type: ViewChildren,
      args: ["items", {
        read: ElementRef
      }]
    }],
    suggestionChild: [{
      type: ContentChild,
      args: [NzMentionSuggestionDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    trigger: [{
      type: ContentChild,
      args: [forwardRef(() => NzMentionTriggerDirective), {
        isSignal: true
      }]
    }]
  });
})();
var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
var NzMentionModule = class _NzMentionModule {
  static \u0275fac = function NzMentionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMentionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzMentionModule,
    imports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective],
    exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzMentionComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionModule, [{
    type: NgModule,
    args: [{
      imports: [...COMPONENTS],
      exports: [...COMPONENTS]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-entry/hrm-mentions.ts
var HrmMentions = class _HrmMentions extends HrmControl {
  constructor() {
    super(...arguments);
    this.suggestions = input([], ...ngDevMode ? [{ debugName: "suggestions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.prefix = input("@", ...ngDevMode ? [{ debugName: "prefix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = input(2, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmMentions_BaseFactory;
      return function HrmMentions_Factory(__ngFactoryType__) {
        return (\u0275HrmMentions_BaseFactory || (\u0275HrmMentions_BaseFactory = \u0275\u0275getInheritedFactory(_HrmMentions)))(__ngFactoryType__ || _HrmMentions);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmMentions, selectors: [["hrm-mentions"]], hostAttrs: [1, "hrm-mentions"], inputs: { suggestions: [1, "suggestions"], prefix: [1, "prefix"], placeholder: [1, "placeholder"], rows: [1, "rows"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmMentions), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 6, consts: [[3, "nzSuggestions", "nzPrefix"], ["nz-input", "", "nzMentionTrigger", "", 3, "ngModelChange", "blur", "ngModel", "rows", "placeholder", "disabled"]], template: function HrmMentions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-mention", 0)(1, "textarea", 1);
        \u0275\u0275listener("ngModelChange", function HrmMentions_Template_textarea_ngModelChange_1_listener($event) {
          return ctx.emit($event);
        })("blur", function HrmMentions_Template_textarea_blur_1_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("nzSuggestions", ctx.suggestions())("nzPrefix", ctx.prefix());
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.value())("rows", ctx.rows())("placeholder", ctx.placeholder())("disabled", ctx.disabled());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzInputModule, NzInputDirective, NzMentionModule, NzMentionComponent, NzMentionTriggerDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmMentions, [{
    type: Component,
    args: [{
      selector: "hrm-mentions",
      imports: [FormsModule, NzInputModule, NzMentionModule],
      template: `
    <nz-mention [nzSuggestions]="suggestions()" [nzPrefix]="prefix()">
      <textarea
        nz-input
        nzMentionTrigger
        [ngModel]="value()"
        (ngModelChange)="emit($event)"
        (blur)="markTouched()"
        [rows]="rows()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"></textarea>
    </nz-mention>
  `,
      host: { class: "hrm-mentions" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmMentions), multi: true }]
    }]
  }], null, { suggestions: [{ type: Input, args: [{ isSignal: true, alias: "suggestions", required: false }] }], prefix: [{ type: Input, args: [{ isSignal: true, alias: "prefix", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmMentions, { className: "HrmMentions", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-mentions.ts", lineNumber: 27 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/mentions.ts
var SgDocMentions = class _SgDocMentions {
  constructor() {
    this.note = "";
    this.mixed = "";
    this.people = ["an", "binh", "cuong", "dung", "giang"];
    this.prefixes = ["@", "#"];
    this.peopleAndDepts = ["an", "binh", "cuong", "nhansu", "ketoan", "kinhdoanh"];
    this.when = [
      "docs.mentions.when1",
      "docs.mentions.when2",
      "docs.mentions.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocMentions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMentions)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMentions, selectors: [["sg-doc-mentions"]], decls: 51, vars: 77, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "420px"], [3, "ngModelChange", "suggestions", "placeholder", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "ngModelChange", "prefix", "suggestions", "placeholder", "ngModel"], [3, "suggestions", "rows", "placeholder", "ngModel"], [3, "suggestions", "disabled", "ngModel"]], template: function SgDocMentions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-mentions", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMentions_Template_hrm_mentions_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.note, $event) || (ctx.note = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
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
        \u0275\u0275element(17, "span", 7);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 8)(23, "sg-example", 9);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "sg-row")(27, "div", 2)(28, "hrm-mentions", 3);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMentions_Template_hrm_mentions_ngModelChange_28_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.note, $event) || (ctx.note = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "sg-example", 9);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "sg-row", 10);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementStart(35, "div", 2)(36, "hrm-mentions", 11);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMentions_Template_hrm_mentions_ngModelChange_36_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.mixed, $event) || (ctx.mixed = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "sg-example", 9);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row")(42, "div", 2);
        \u0275\u0275element(43, "hrm-mentions", 12);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "sg-example", 9);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "sg-row")(49, "div", 2);
        \u0275\u0275element(50, "hrm-mentions", 13);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 35, "docs.mentions.title"))("desc", \u0275\u0275pipeBind1(2, 37, "docs.mentions.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("suggestions", ctx.people)("placeholder", \u0275\u0275pipeBind1(6, 39, "docs.mentions.ovPh"));
        \u0275\u0275twoWayProperty("ngModel", ctx.note);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 41, "docs.mentions.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 43, "docs.mentions.behavior"))("avoid", \u0275\u0275pipeBind1(11, 45, "docs.mentions.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 47, "docs.mentions.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 49, "docs.mentions.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 51, "docs.mentions.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 53, "docs.mentions.exBasicT"))("desc", \u0275\u0275pipeBind1(25, 55, "docs.mentions.exBasicD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("suggestions", ctx.people)("placeholder", \u0275\u0275pipeBind1(29, 57, "docs.mentions.basicPh"));
        \u0275\u0275twoWayProperty("ngModel", ctx.note);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(31, 59, "docs.mentions.exMixT"))("desc", \u0275\u0275pipeBind1(32, 61, "docs.mentions.exMixD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(34, 63, "docs.mentions.mixRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("prefix", ctx.prefixes)("suggestions", ctx.peopleAndDepts)("placeholder", \u0275\u0275pipeBind1(37, 65, "docs.mentions.mixPh"));
        \u0275\u0275twoWayProperty("ngModel", ctx.mixed);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 67, "docs.mentions.exLongT"))("desc", \u0275\u0275pipeBind1(40, 69, "docs.mentions.exLongD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("suggestions", ctx.people)("rows", 4)("placeholder", \u0275\u0275pipeBind1(44, 71, "docs.mentions.longPh"))("ngModel", "Nh\u1EDD @binh b\u1ED5 sung s\u1ED1 li\u1EC7u, @cuong x\xE1c nh\u1EADn l\u1EA1i gi\xFAp.");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(46, 73, "docs.mentions.exReadonlyT"))("desc", \u0275\u0275pipeBind1(47, 75, "docs.mentions.exReadonlyD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("suggestions", ctx.people)("disabled", true)("ngModel", "@an \u0111\xE3 duy\u1EC7t \u0111\u01A1n ngh\u1EC9 ph\xE9p ng\xE0y 05/07.");
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmMentions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMentions, [{
    type: Component,
    args: [{
      selector: "sg-doc-mentions",
      imports: [FormsModule, TranslateModule, HrmMentions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.mentions.title' | translate" [desc]="'docs.mentions.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:420px">
          <hrm-mentions [suggestions]="people" [placeholder]="'docs.mentions.ovPh' | translate" [(ngModel)]="note" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.mentions.purpose' | translate"
          [when]="when"
          [behavior]="'docs.mentions.behavior' | translate"
          [avoid]="'docs.mentions.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.mentions.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.mentions.do2' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.mentions.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.mentions.exBasicT' | translate"
          [desc]="'docs.mentions.exBasicD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-mentions [suggestions]="people" [placeholder]="'docs.mentions.basicPh' | translate" [(ngModel)]="note" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mentions.exMixT' | translate"
          [desc]="'docs.mentions.exMixD' | translate">
          <sg-row [label]="'docs.mentions.mixRow' | translate">
            <div style="width:100%;max-width:420px">
              <hrm-mentions [prefix]="prefixes" [suggestions]="peopleAndDepts"
                [placeholder]="'docs.mentions.mixPh' | translate" [(ngModel)]="mixed" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mentions.exLongT' | translate"
          [desc]="'docs.mentions.exLongD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-mentions [suggestions]="people" [rows]="4"
                [placeholder]="'docs.mentions.longPh' | translate" [ngModel]="'Nh\u1EDD @binh b\u1ED5 sung s\u1ED1 li\u1EC7u, @cuong x\xE1c nh\u1EADn l\u1EA1i gi\xFAp.'" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mentions.exReadonlyT' | translate"
          [desc]="'docs.mentions.exReadonlyD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-mentions [suggestions]="people" [disabled]="true" [ngModel]="'@an \u0111\xE3 duy\u1EC7t \u0111\u01A1n ngh\u1EC9 ph\xE9p ng\xE0y 05/07.'" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMentions, { className: "SgDocMentions", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/mentions.ts", lineNumber: 78 });
})();
export {
  SgDocMentions
};
//# sourceMappingURL=chunk-ZAFYSQAV.js.map
