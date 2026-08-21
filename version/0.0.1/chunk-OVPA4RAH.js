import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-6UBYRFB4.js";
import {
  NzNoAnimationDirective,
  slideAnimationEnter,
  slideAnimationLeave
} from "./chunk-7NOIAAII.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule,
  POSITION_MAP,
  getPlacementName
} from "./chunk-WZF5QFUD.js";
import {
  CdkConnectedOverlay,
  CdkFixedSizeVirtualScroll,
  CdkOverlayOrigin,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  OverlayModule
} from "./chunk-EV2WHLOQ.js";
import {
  COMPOSITION_BUFFER_MODE,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import {
  FocusMonitor
} from "./chunk-3BG2BWBR.js";
import {
  BACKSPACE,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  SPACE,
  TAB,
  UP_ARROW
} from "./chunk-PKUWSVS6.js";
import {
  cancelAnimationFrame,
  requestAnimationFrame
} from "./chunk-LQM5UC6B.js";
import {
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NzSpaceCompactItemDirective
} from "./chunk-IMWVUFP6.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-NXJVNWYP.js";
import {
  NZ_FORM_SIZE,
  NZ_FORM_VARIANT,
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-HZSB2KG5.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-LHDJXUQP.js";
import {
  Directionality
} from "./chunk-C5E47IHV.js";
import {
  WithConfig,
  onConfigChangeEventForComponent
} from "./chunk-BWIWCH2F.js";
import {
  Platform,
  _getEventTarget
} from "./chunk-HV4ZTFQC.js";
import {
  takeUntilDestroyed
} from "./chunk-F2S6JWCU.js";
import {
  fromEventOutsideAngular,
  getStatusClassNames,
  isNotNil,
  numberAttributeWithInfinityFallback
} from "./chunk-D3TBJI5I.js";
import {
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-D2BVEXVI.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  computed,
  distinctUntilChanged,
  forwardRef,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-select.mjs
var _c0 = ["*"];
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzLabel);
  }
}
function NzOptionItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function NzOptionItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function NzOptionItemComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
}
function NzOptionItemComponent_Conditional_3_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionItemComponent_Conditional_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.icon);
  }
}
function NzOptionItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, NzOptionItemComponent_Conditional_3_Conditional_1_Template, 1, 0, "nz-icon", 3)(2, NzOptionItemComponent_Conditional_3_Conditional_2_Template, 1, 1, null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.icon ? 1 : 2);
  }
}
function NzOptionContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "nz-embed-empty", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r0.notFoundContent);
  }
}
function NzOptionContainerComponent_ng_template_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option-item-group", 5);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzLabel", item_r2.groupLabel ?? null);
  }
}
function NzOptionContainerComponent_ng_template_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-item", 7);
    \u0275\u0275listener("itemHover", function NzOptionContainerComponent_ng_template_3_Case_1_Template_nz_option_item_itemHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemHover($event));
    })("itemClick", function NzOptionContainerComponent_ng_template_3_Case_1_Template_nz_option_item_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.menuItemSelectedIcon)("customContent", item_r2.nzCustomContent)("template", item_r2.template ?? null)("grouped", !!item_r2.groupLabel)("disabled", item_r2.nzDisabled || ctx_r0.isMaxMultipleCountReached && !ctx_r0.listOfSelectedValue.includes(item_r2["nzValue"]))("showState", ctx_r0.mode === "tags" || ctx_r0.mode === "multiple")("title", item_r2.nzTitle)("label", item_r2.nzLabel)("compareWith", ctx_r0.compareWith)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfSelectedValue)("value", item_r2.nzValue);
  }
}
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzOptionContainerComponent_ng_template_3_Case_0_Template, 1, 1, "nz-option-item-group", 5)(1, NzOptionContainerComponent_ng_template_3_Case_1_Template, 1, 12, "nz-option-item", 6);
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional((tmp_2_0 = item_r2.type) === "group" ? 0 : tmp_2_0 === "item" ? 1 : -1);
  }
}
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {
}
function NzOptionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzSelectArrowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.listOfValue.length, " / ", ctx_r0.nzMaxMultipleCount);
  }
}
function NzSelectArrowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 0);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 2);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_0_Template, 1, 0, "nz-icon", 2)(1, NzSelectArrowComponent_Conditional_2_Conditional_0_Conditional_1_Template, 1, 0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.search ? 0 : 1);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_Conditional_2_Conditional_1_ng_container_0_Template, 2, 1, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.suffixIcon);
  }
}
function NzSelectArrowComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzSelectArrowComponent_Conditional_2_Conditional_0_Template, 2, 1)(1, NzSelectArrowComponent_Conditional_2_Conditional_1_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.showArrow && !ctx_r0.suffixIcon ? 0 : 1);
  }
}
function NzSelectArrowComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.feedbackIcon);
  }
}
function NzSelectClearComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzSelectClearComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectClearComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.clearIcon);
  }
}
function NzSelectClearComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 1);
  }
}
function NzSelectItemComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-select-selection-item-content", ctx_r0.deletable);
    \u0275\u0275property("innerHTML", ctx_r0.label, \u0275\u0275sanitizeHtml);
  }
}
function NzSelectItemComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-select-selection-item-content", ctx_r0.deletable);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, NzSelectItemComponent_ng_container_0_Conditional_1_Template, 1, 3, "span", 2)(2, NzSelectItemComponent_ng_container_0_Conditional_2_Template, 2, 3, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.displayLabelInHtml ? 1 : 2);
  }
}
function NzSelectItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 6);
  }
}
function NzSelectItemComponent_Conditional_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzSelectItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectItemComponent_Conditional_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.removeIcon);
  }
}
function NzSelectItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275listener("click", function NzSelectItemComponent_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDelete($event));
    });
    \u0275\u0275conditionalCreate(1, NzSelectItemComponent_Conditional_1_Conditional_1_Template, 1, 0, "nz-icon", 6)(2, NzSelectItemComponent_Conditional_1_Conditional_2_Template, 1, 1, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.removeIcon ? 1 : 2);
  }
}
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.placeholder, " ");
  }
}
var _c1 = ["inputElement"];
var _c2 = ["mirrorElement"];
function NzSelectSearchComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3, 1);
  }
}
var _forTrack0 = ($index, $item) => $item.nzValue;
function NzSelectTopControlComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prefix);
  }
}
function NzSelectTopControlComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, NzSelectTopControlComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.prefix);
  }
}
function NzSelectTopControlComponent_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("removeIcon", ctx_r0.removeIcon)("label", ctx_r0.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r0.customTemplate)("contentTemplateOutletContext", ctx_r0.listOfTopItem[0]);
  }
}
function NzSelectTopControlComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-search", 5);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_Case_2_Template_nz_select_search_isComposingChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_Case_2_Template_nz_select_search_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInputValueChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, NzSelectTopControlComponent_Case_2_Conditional_1_Template, 1, 4, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzId", ctx_r0.nzId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isShowSingleLabel ? 1 : -1);
  }
}
function NzSelectTopControlComponent_Case_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "nz-select-item", 10);
    \u0275\u0275listener("delete", function NzSelectTopControlComponent_Case_3_For_2_Template_nz_select_item_delete_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDeleteItem(item_r5.contentTemplateOutletContext));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("removeIcon", ctx_r0.removeIcon)("label", item_r5.nzLabel)("disabled", item_r5.nzDisabled || ctx_r0.disabled)("contentTemplateOutlet", item_r5.contentTemplateOutlet)("contentTemplateOutletContext", item_r5.contentTemplateOutletContext);
  }
}
function NzSelectTopControlComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, NzSelectTopControlComponent_Case_3_For_2_Template, 2, 5, "div", 7, _forTrack0);
    \u0275\u0275elementStart(3, "div", 8)(4, "nz-select-search", 9);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_Case_3_Template_nz_select_search_isComposingChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_Case_3_Template_nz_select_search_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInputValueChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.listOfSlicedItem);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzId", ctx_r0.nzId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("autofocus", ctx_r0.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r0.open);
  }
}
function NzSelectTopControlComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-placeholder", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r0.placeHolder);
  }
}
function NzSelectComponent_Conditional_2_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("status", ctx_r0.status);
  }
}
function NzSelectComponent_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzSelectComponent_Conditional_2_ng_template_1_Conditional_0_Template, 1, 1, "nz-form-item-feedback-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.hasFeedback && !!ctx_r0.status ? 0 : -1);
  }
}
function NzSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-select-arrow", 3);
    \u0275\u0275template(1, NzSelectComponent_Conditional_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r2 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("showArrow", ctx_r0.nzShowArrow)("loading", ctx_r0.nzLoading)("search", ctx_r0.nzOpen && ctx_r0.nzShowSearch)("suffixIcon", ctx_r0.nzSuffixIcon)("feedbackIcon", feedbackIconTpl_r2)("nzMaxMultipleCount", ctx_r0.nzMaxMultipleCount)("listOfValue", ctx_r0.listOfValue)("isMaxMultipleCountSet", ctx_r0.isMaxMultipleCountSet);
  }
}
function NzSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-clear", 7);
    \u0275\u0275listener("clear", function NzSelectComponent_Conditional_3_Template_nz_select_clear_clear_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClearSelection());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("clearIcon", ctx_r0.nzClearIcon);
  }
}
function NzSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-container", 8);
    \u0275\u0275animateLeave(function NzSelectComponent_ng_template_4_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzSelectComponent_ng_template_4_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectAnimationEnter());
    });
    \u0275\u0275listener("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event));
    })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onItemClick($event));
    })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nzScrollToBottom.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.nzDropdownStyle);
    \u0275\u0275classProp("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropdownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r0.dropdownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r0.dropdownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r0.dropdownPosition === "topRight");
    \u0275\u0275property("itemSize", ctx_r0.nzOptionHeightPx)("maxItemLength", ctx_r0.nzOptionOverflowSize)("matchWidth", ctx_r0.nzDropdownMatchSelectWidth)("nzNoAnimation", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation()))("listOfContainerItem", ctx_r0.listOfContainerItem)("menuItemSelectedIcon", ctx_r0.nzMenuItemSelectedIcon)("notFoundContent", ctx_r0.nzNotFoundContent)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfValue)("dropdownRender", ctx_r0.nzDropdownRender)("compareWith", ctx_r0.compareWith)("mode", ctx_r0.nzMode)("isMaxMultipleCountReached", ctx_r0.isMaxMultipleCountReached);
  }
}
var NzOptionGroupComponent = class _NzOptionGroupComponent {
  nzLabel = null;
  changes = new Subject();
  ngOnChanges() {
    this.changes.next();
  }
  static \u0275fac = function NzOptionGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionGroupComponent,
    selectors: [["nz-option-group"]],
    inputs: {
      nzLabel: "nzLabel"
    },
    exportAs: ["nzOptionGroup"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzOptionGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-group",
      exportAs: "nzOptionGroup",
      template: `<ng-content />`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionItemGroupComponent = class _NzOptionItemGroupComponent {
  nzLabel = null;
  static \u0275fac = function NzOptionItemGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionItemGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionItemGroupComponent,
    selectors: [["nz-option-item-group"]],
    hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
    inputs: {
      nzLabel: "nzLabel"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "nzStringTemplateOutlet"]],
    template: function NzOptionItemGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzLabel);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item-group",
      template: `<ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-select-item ant-select-item-group"
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionItemComponent = class _NzOptionItemComponent {
  el = inject(ElementRef).nativeElement;
  ngZone = inject(NgZone);
  destroyRef = inject(DestroyRef);
  selected = false;
  activated = false;
  grouped = false;
  customContent = false;
  template = null;
  disabled = false;
  showState = false;
  title;
  label = null;
  value = null;
  activatedValue = null;
  listOfSelectedValue = [];
  icon = null;
  compareWith;
  itemClick = new EventEmitter();
  itemHover = new EventEmitter();
  ngOnChanges(changes) {
    const {
      value,
      activatedValue,
      listOfSelectedValue
    } = changes;
    if (value || listOfSelectedValue) {
      this.selected = this.listOfSelectedValue.some((v) => this.compareWith(v, this.value));
    }
    if (value || activatedValue) {
      this.activated = this.compareWith(this.activatedValue, this.value);
    }
  }
  ngOnInit() {
    fromEventOutsideAngular(this.el, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (!this.disabled) {
        this.ngZone.run(() => this.itemClick.emit(this.value));
      }
    });
    fromEventOutsideAngular(this.el, "mouseenter").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (!this.disabled) {
        this.ngZone.run(() => this.itemHover.emit(this.value));
      }
    });
  }
  static \u0275fac = function NzOptionItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionItemComponent,
    selectors: [["nz-option-item"]],
    hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
    hostVars: 9,
    hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.title);
        \u0275\u0275classProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
      }
    },
    inputs: {
      grouped: "grouped",
      customContent: [2, "customContent", "customContent", booleanAttribute],
      template: "template",
      disabled: "disabled",
      showState: "showState",
      title: "title",
      label: "label",
      value: "value",
      activatedValue: "activatedValue",
      listOfSelectedValue: "listOfSelectedValue",
      icon: "icon",
      compareWith: "compareWith"
    },
    outputs: {
      itemClick: "itemClick",
      itemHover: "itemHover"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 2,
    consts: [[1, "ant-select-item-option-content"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state"], ["nzType", "check", 1, "ant-select-selected-icon"]],
    template: function NzOptionItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, NzOptionItemComponent_Conditional_1_Template, 1, 1, null, 1)(2, NzOptionItemComponent_Conditional_2_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, NzOptionItemComponent_Conditional_3_Template, 3, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.customContent ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showState && ctx.selected ? 3 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item",
      template: `
    <div class="ant-select-item-option-content">
      @if (customContent) {
        <ng-template [ngTemplateOutlet]="template" />
      } @else {
        {{ label }}
      }
    </div>
    @if (showState && selected) {
      <div class="ant-select-item-option-state" unselectable="on">
        @if (!icon) {
          <nz-icon nzType="check" class="ant-select-selected-icon" />
        } @else {
          <ng-template [ngTemplateOutlet]="icon" />
        }
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-select-item ant-select-item-option",
        "[attr.title]": "title",
        "[class.ant-select-item-option-grouped]": "grouped",
        "[class.ant-select-item-option-selected]": "selected && !disabled",
        "[class.ant-select-item-option-disabled]": "disabled",
        "[class.ant-select-item-option-active]": "activated && !disabled"
      },
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    grouped: [{
      type: Input
    }],
    customContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    template: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showState: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemHover: [{
      type: Output
    }]
  });
})();
var NzOptionContainerComponent = class _NzOptionContainerComponent {
  ngZone = inject(NgZone);
  platformId = inject(PLATFORM_ID);
  notFoundContent = void 0;
  menuItemSelectedIcon = null;
  dropdownRender = null;
  activatedValue = null;
  listOfSelectedValue = [];
  compareWith;
  mode = "default";
  matchWidth = true;
  itemSize = 32;
  maxItemLength = 8;
  isMaxMultipleCountReached = false;
  listOfContainerItem = [];
  itemClick = new EventEmitter();
  scrollToBottom = new EventEmitter();
  cdkVirtualScrollViewport;
  scrolledIndex = 0;
  onItemClick(value) {
    this.itemClick.emit(value);
  }
  onItemHover(value) {
    this.activatedValue = value;
  }
  trackValue(_index, option) {
    return option.key;
  }
  onScrolledIndexChange(index) {
    const isAtBottom = this.listOfContainerItem.length - index <= this.maxItemLength + 1;
    const wasAtBottom = this.listOfContainerItem.length - this.scrolledIndex <= this.maxItemLength + 1;
    if (isAtBottom && !wasAtBottom) {
      this.scrollToBottom.emit();
    }
    this.scrolledIndex = index;
  }
  scrollToActivatedValue() {
    const index = this.listOfContainerItem.findIndex((item) => this.compareWith(item.key, this.activatedValue));
    if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
      this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
    }
  }
  ngOnChanges(changes) {
    const {
      listOfContainerItem,
      activatedValue
    } = changes;
    if (listOfContainerItem || activatedValue) {
      this.scrollToActivatedValue();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => setTimeout(() => this.scrollToActivatedValue()));
    }
  }
  static \u0275fac = function NzOptionContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionContainerComponent,
    selectors: [["nz-option-container"]],
    viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkVirtualScrollViewport, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-dropdown"],
    inputs: {
      notFoundContent: "notFoundContent",
      menuItemSelectedIcon: "menuItemSelectedIcon",
      dropdownRender: "dropdownRender",
      activatedValue: "activatedValue",
      listOfSelectedValue: "listOfSelectedValue",
      compareWith: "compareWith",
      mode: "mode",
      matchWidth: "matchWidth",
      itemSize: "itemSize",
      maxItemLength: "maxItemLength",
      isMaxMultipleCountReached: "isMaxMultipleCountReached",
      listOfContainerItem: "listOfContainerItem"
    },
    outputs: {
      itemClick: "itemClick",
      scrollToBottom: "scrollToBottom"
    },
    exportAs: ["nzOptionContainer"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 14,
    consts: [[1, "ant-select-item-empty"], [3, "scrolledIndexChange", "itemSize", "maxBufferPx", "minBufferPx"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], ["nzComponentName", "select", 3, "specificContent"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"], [3, "itemHover", "itemClick", "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"]],
    template: function NzOptionContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275conditionalCreate(1, NzOptionContainerComponent_Conditional_1_Template, 2, 1, "div", 0);
        \u0275\u0275elementStart(2, "cdk-virtual-scroll-viewport", 1);
        \u0275\u0275listener("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
          return ctx.onScrolledIndexChange($event);
        });
        \u0275\u0275template(3, NzOptionContainerComponent_ng_template_3_Template, 2, 1, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.listOfContainerItem.length === 0 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
        \u0275\u0275classProp("full-width", !ctx.matchWidth);
        \u0275\u0275property("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
        \u0275\u0275advance();
        \u0275\u0275property("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.dropdownRender);
      }
    },
    dependencies: [NzEmptyModule, NzEmbedEmptyComponent, NzOptionItemGroupComponent, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NzOverlayModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-container",
      exportAs: "nzOptionContainer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <div>
      @if (listOfContainerItem.length === 0) {
        <div class="ant-select-item-empty">
          <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!" />
        </div>
      }
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          @switch (item.type) {
            @case ('group') {
              <nz-option-item-group [nzLabel]="item.groupLabel ?? null" />
            }
            @case ('item') {
              <nz-option-item
                [icon]="menuItemSelectedIcon"
                [customContent]="item.nzCustomContent"
                [template]="item.template ?? null"
                [grouped]="!!item.groupLabel"
                [disabled]="
                  item.nzDisabled || (isMaxMultipleCountReached && !listOfSelectedValue.includes(item['nzValue']))
                "
                [showState]="mode === 'tags' || mode === 'multiple'"
                [title]="item.nzTitle"
                [label]="item.nzLabel"
                [compareWith]="compareWith"
                [activatedValue]="activatedValue"
                [listOfSelectedValue]="listOfSelectedValue"
                [value]="item.nzValue"
                (itemHover)="onItemHover($event)"
                (itemClick)="onItemClick($event)"
              />
            }
          }
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender" />
    </div>
  `,
      host: {
        class: "ant-select-dropdown"
      },
      imports: [NzEmptyModule, NzOptionItemGroupComponent, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, NzOverlayModule]
    }]
  }], null, {
    notFoundContent: [{
      type: Input
    }],
    menuItemSelectedIcon: [{
      type: Input
    }],
    dropdownRender: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    matchWidth: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    maxItemLength: [{
      type: Input
    }],
    isMaxMultipleCountReached: [{
      type: Input
    }],
    listOfContainerItem: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    scrollToBottom: [{
      type: Output
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }]
  });
})();
var NzOptionComponent = class _NzOptionComponent {
  destroyRef = inject(DestroyRef);
  nzOptionGroupComponent = inject(NzOptionGroupComponent, {
    optional: true
  });
  changes = new Subject();
  groupLabel = null;
  template;
  nzTitle;
  nzLabel = null;
  nzValue = null;
  nzKey;
  nzDisabled = false;
  nzHide = false;
  nzCustomContent = false;
  ngOnInit() {
    this.nzOptionGroupComponent?.changes.pipe(startWith(true), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.groupLabel = this.nzOptionGroupComponent?.nzLabel;
    });
  }
  ngOnChanges() {
    this.changes.next();
  }
  static \u0275fac = function NzOptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzOptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzOptionComponent,
    selectors: [["nz-option"]],
    viewQuery: function NzOptionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    inputs: {
      nzTitle: "nzTitle",
      nzLabel: "nzLabel",
      nzValue: "nzValue",
      nzKey: "nzKey",
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzHide: [2, "nzHide", "nzHide", booleanAttribute],
      nzCustomContent: [2, "nzCustomContent", "nzCustomContent", booleanAttribute]
    },
    exportAs: ["nzOption"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-option",
      exportAs: "nzOption",
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
    }],
    nzTitle: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzKey: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCustomContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSelectArrowComponent = class _NzSelectArrowComponent {
  listOfValue = [];
  loading = false;
  search = false;
  showArrow = false;
  isMaxMultipleCountSet = false;
  suffixIcon = null;
  feedbackIcon = null;
  nzMaxMultipleCount = Infinity;
  static \u0275fac = function NzSelectArrowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectArrowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectArrowComponent,
    selectors: [["nz-select-arrow"]],
    hostAttrs: [1, "ant-select-arrow"],
    hostVars: 2,
    hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-select-arrow-loading", ctx.loading);
      }
    },
    inputs: {
      listOfValue: "listOfValue",
      loading: "loading",
      search: "search",
      showArrow: "showArrow",
      isMaxMultipleCountSet: "isMaxMultipleCountSet",
      suffixIcon: "suffixIcon",
      feedbackIcon: "feedbackIcon",
      nzMaxMultipleCount: [2, "nzMaxMultipleCount", "nzMaxMultipleCount", numberAttributeWithInfinityFallback]
    },
    decls: 4,
    vars: 3,
    consts: [["nzType", "loading"], [4, "nzStringTemplateOutlet"], ["nzType", "search"], ["nzType", "down"], [3, "nzType"]],
    template: function NzSelectArrowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzSelectArrowComponent_Conditional_0_Template, 2, 2, "span");
        \u0275\u0275conditionalCreate(1, NzSelectArrowComponent_Conditional_1_Template, 1, 0, "nz-icon", 0)(2, NzSelectArrowComponent_Conditional_2_Template, 2, 1);
        \u0275\u0275template(3, NzSelectArrowComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isMaxMultipleCountSet ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzStringTemplateOutlet", ctx.feedbackIcon);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectArrowComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-arrow",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (isMaxMultipleCountSet) {
      <span>{{ listOfValue.length }} / {{ nzMaxMultipleCount }}</span>
    }
    @if (loading) {
      <nz-icon nzType="loading" />
    } @else {
      @if (showArrow && !suffixIcon) {
        @if (search) {
          <nz-icon nzType="search" />
        } @else {
          <nz-icon nzType="down" />
        }
      } @else {
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <nz-icon [nzType]="suffixIcon" />
        </ng-container>
      }
    }
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
      host: {
        class: "ant-select-arrow",
        "[class.ant-select-arrow-loading]": "loading"
      },
      imports: [NzIconModule, NzOutletModule]
    }]
  }], null, {
    listOfValue: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    isMaxMultipleCountSet: [{
      type: Input
    }],
    suffixIcon: [{
      type: Input
    }],
    feedbackIcon: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input,
      args: [{
        transform: numberAttributeWithInfinityFallback
      }]
    }]
  });
})();
var NzSelectClearComponent = class _NzSelectClearComponent {
  clearIcon = null;
  clear = new EventEmitter();
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clear.emit(e);
  }
  static \u0275fac = function NzSelectClearComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectClearComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectClearComponent,
    selectors: [["nz-select-clear"]],
    hostAttrs: [1, "ant-select-clear"],
    hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      clearIcon: "clearIcon"
    },
    outputs: {
      clear: "clear"
    },
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], ["nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
    template: function NzSelectClearComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzSelectClearComponent_Conditional_0_Template, 1, 1, null, 0)(1, NzSelectClearComponent_Conditional_1_Template, 1, 0, "nz-icon", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.clearIcon ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectClearComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-clear",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (clearIcon) {
      <ng-template [ngTemplateOutlet]="clearIcon" />
    } @else {
      <nz-icon nzType="close-circle" nzTheme="fill" class="ant-select-close-icon" />
    }
  `,
      host: {
        class: "ant-select-clear",
        "(click)": "onClick($event)"
      },
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    clearIcon: [{
      type: Input
    }],
    clear: [{
      type: Output
    }]
  });
})();
var NzSelectItemComponent = class _NzSelectItemComponent {
  disabled = false;
  label = null;
  /**
   * @internal Internally used, please do not use it directly.
   * @description Whether the label is in HTML format.
   */
  displayLabelInHtml = false;
  deletable = false;
  removeIcon = null;
  contentTemplateOutletContext = null;
  contentTemplateOutlet = null;
  delete = new EventEmitter();
  get templateOutletContext() {
    return __spreadValues({
      $implicit: this.contentTemplateOutletContext
    }, this.contentTemplateOutletContext);
  }
  onDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.delete.next(e);
    }
  }
  static \u0275fac = function NzSelectItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectItemComponent,
    selectors: [["nz-select-item"]],
    hostAttrs: [1, "ant-select-selection-item"],
    hostVars: 3,
    hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.label);
        \u0275\u0275classProp("ant-select-selection-item-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      label: "label",
      displayLabelInHtml: [2, "displayLabelInHtml", "displayLabelInHtml", booleanAttribute],
      deletable: [2, "deletable", "deletable", booleanAttribute],
      removeIcon: "removeIcon",
      contentTemplateOutletContext: "contentTemplateOutletContext",
      contentTemplateOutlet: "contentTemplateOutlet"
    },
    outputs: {
      delete: "delete"
    },
    decls: 2,
    vars: 3,
    consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-selection-item-remove"], [3, "ant-select-selection-item-content", "innerHTML"], [3, "ant-select-selection-item-content"], [3, "innerHTML"], [1, "ant-select-selection-item-remove", 3, "click"], ["nzType", "close"], [3, "ngTemplateOutlet"]],
    template: function NzSelectItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectItemComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        \u0275\u0275conditionalCreate(1, NzSelectItemComponent_Conditional_1_Template, 3, 1, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", ctx.templateOutletContext);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.deletable && !ctx.disabled ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-item",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: templateOutletContext">
      @if (displayLabelInHtml) {
        <span [class.ant-select-selection-item-content]="deletable" [innerHTML]="label"></span>
      } @else {
        <span [class.ant-select-selection-item-content]="deletable">{{ label }}</span>
      }
    </ng-container>
    @if (deletable && !disabled) {
      <span class="ant-select-selection-item-remove" (click)="onDelete($event)">
        @if (!removeIcon) {
          <nz-icon nzType="close" />
        } @else {
          <ng-template [ngTemplateOutlet]="removeIcon" />
        }
      </span>
    }
  `,
      host: {
        class: "ant-select-selection-item",
        "[attr.title]": "label",
        "[class.ant-select-selection-item-disabled]": "disabled"
      },
      imports: [NgTemplateOutlet, NzOutletModule, NzIconModule]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    displayLabelInHtml: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    deletable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    contentTemplateOutletContext: [{
      type: Input
    }],
    contentTemplateOutlet: [{
      type: Input
    }],
    delete: [{
      type: Output
    }]
  });
})();
var NzSelectPlaceholderComponent = class _NzSelectPlaceholderComponent {
  placeholder = null;
  static \u0275fac = function NzSelectPlaceholderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectPlaceholderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectPlaceholderComponent,
    selectors: [["nz-select-placeholder"]],
    hostAttrs: [1, "ant-select-selection-placeholder"],
    inputs: {
      placeholder: "placeholder"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "nzStringTemplateOutlet"]],
    template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.placeholder);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectPlaceholderComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-placeholder",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
      host: {
        class: "ant-select-selection-placeholder"
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var NzSelectSearchComponent = class _NzSelectSearchComponent {
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  focusMonitor = inject(FocusMonitor);
  nzId = null;
  disabled = false;
  mirrorSync = false;
  showInput = true;
  focusTrigger = false;
  value = "";
  autofocus = false;
  valueChange = new EventEmitter();
  isComposingChange = new EventEmitter();
  inputElement;
  mirrorElement;
  constructor() {
    afterNextRender(() => {
      if (this.mirrorSync) {
        this.syncMirrorWidth();
      }
      if (this.autofocus) {
        this.focus();
      }
    });
  }
  setCompositionState(isComposing) {
    this.isComposingChange.next(isComposing);
  }
  onValueChange(value) {
    this.value = value;
    this.valueChange.next(value);
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
  }
  clearInputValue() {
    const inputDOM = this.inputElement.nativeElement;
    inputDOM.value = "";
    this.onValueChange("");
  }
  syncMirrorWidth() {
    const mirrorDOM = this.mirrorElement.nativeElement;
    const hostDOM = this.elementRef.nativeElement;
    const inputDOM = this.inputElement.nativeElement;
    this.renderer.removeStyle(hostDOM, "width");
    this.renderer.setProperty(mirrorDOM, "textContent", `${inputDOM.value}\xA0`);
    this.renderer.setStyle(hostDOM, "width", `${mirrorDOM.scrollWidth}px`);
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  ngOnChanges(changes) {
    const inputDOM = this.inputElement.nativeElement;
    const {
      focusTrigger,
      showInput
    } = changes;
    if (showInput) {
      if (this.showInput) {
        this.renderer.removeAttribute(inputDOM, "readonly");
      } else {
        this.renderer.setAttribute(inputDOM, "readonly", "readonly");
      }
    }
    if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
      inputDOM.focus();
    }
  }
  static \u0275fac = function NzSelectSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectSearchComponent,
    selectors: [["nz-select-search"]],
    viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7)(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mirrorElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-selection-search"],
    hostVars: 2,
    hostBindings: function NzSelectSearchComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.mirrorSync ? 0 : null, "px");
      }
    },
    inputs: {
      nzId: "nzId",
      disabled: "disabled",
      mirrorSync: "mirrorSync",
      showInput: "showInput",
      focusTrigger: "focusTrigger",
      value: "value",
      autofocus: "autofocus"
    },
    outputs: {
      valueChange: "valueChange",
      isComposingChange: "isComposingChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 3,
    vars: 7,
    consts: [["inputElement", ""], ["mirrorElement", ""], ["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModelChange", "compositionstart", "compositionend", "ngModel", "disabled"], [1, "ant-select-selection-search-mirror"]],
    template: function NzSelectSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "input", 2, 0);
        \u0275\u0275listener("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
          return ctx.onValueChange($event);
        })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
          return ctx.setCompositionState(true);
        })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
          return ctx.setCompositionState(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, NzSelectSearchComponent_Conditional_2_Template, 2, 0, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("opacity", ctx.showInput ? null : 0);
        \u0275\u0275property("ngModel", ctx.value)("disabled", ctx.disabled);
        \u0275\u0275attribute("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mirrorSync ? 2 : -1);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectSearchComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-search",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    @if (mirrorSync) {
      <span #mirrorElement class="ant-select-selection-search-mirror"></span>
    }
  `,
      host: {
        class: "ant-select-selection-search",
        "[style.width.px]": "mirrorSync ? 0 : null"
      },
      providers: [{
        provide: COMPOSITION_BUFFER_MODE,
        useValue: false
      }],
      imports: [FormsModule]
    }]
  }], () => [], {
    nzId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mirrorSync: [{
      type: Input
    }],
    showInput: [{
      type: Input
    }],
    focusTrigger: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    isComposingChange: [{
      type: Output
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    mirrorElement: [{
      type: ViewChild,
      args: ["mirrorElement", {
        static: false
      }]
    }]
  });
})();
var NzSelectTopControlComponent = class _NzSelectTopControlComponent {
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  ngZone = inject(NgZone);
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  nzId = null;
  showSearch = false;
  placeHolder = null;
  open = false;
  maxTagCount = Infinity;
  autofocus = false;
  disabled = false;
  mode = "default";
  customTemplate = null;
  maxTagPlaceholder = null;
  removeIcon = null;
  listOfTopItem = [];
  tokenSeparators = [];
  prefix = null;
  tokenize = new EventEmitter();
  inputValueChange = new EventEmitter();
  deleteItem = new EventEmitter();
  nzSelectSearchComponent;
  listOfSlicedItem = [];
  isShowPlaceholder = true;
  isShowSingleLabel = false;
  isComposing = false;
  inputValue = null;
  updateTemplateVariable() {
    const isSelectedValueEmpty = this.listOfTopItem.length === 0;
    this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
  }
  isComposingChange(isComposing) {
    this.isComposing = isComposing;
    this.updateTemplateVariable();
  }
  onInputValueChange(value) {
    if (value !== this.inputValue) {
      this.inputValue = value;
      this.updateTemplateVariable();
      this.inputValueChange.emit(value);
      this.tokenSeparate(value, this.tokenSeparators);
    }
  }
  tokenSeparate(inputValue, tokenSeparators) {
    const includesSeparators = (str, separators) => {
      for (let i = 0; i < separators.length; ++i) {
        if (str.lastIndexOf(separators[i]) > 0) {
          return true;
        }
      }
      return false;
    };
    const splitBySeparators = (str, separators) => {
      const reg = new RegExp(`[${separators.join()}]`);
      const array = str.split(reg).filter((token) => token);
      return [...new Set(array)];
    };
    if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== "default" && includesSeparators(inputValue, tokenSeparators)) {
      const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
      this.tokenize.next(listOfLabel);
    }
  }
  clearInputValue() {
    this.nzSelectSearchComponent?.clearInputValue();
  }
  focus() {
    this.nzSelectSearchComponent?.focus();
  }
  blur() {
    this.nzSelectSearchComponent?.blur();
  }
  onDeleteItem(item) {
    if (!this.disabled && !item.nzDisabled) {
      this.deleteItem.next(item);
    }
  }
  ngOnChanges(changes) {
    const {
      listOfTopItem,
      maxTagCount,
      customTemplate,
      maxTagPlaceholder
    } = changes;
    if (listOfTopItem) {
      this.updateTemplateVariable();
    }
    if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
      const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((o) => ({
        nzLabel: o.nzLabel,
        nzValue: o.nzValue,
        nzDisabled: o.nzDisabled,
        contentTemplateOutlet: this.customTemplate,
        contentTemplateOutletContext: o
      }));
      if (this.listOfTopItem.length > this.maxTagCount) {
        const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
        const listOfSelectedValue = this.listOfTopItem.map((item) => item.nzValue);
        const exceededItem = {
          nzLabel: exceededLabel,
          nzValue: "$$__nz_exceeded_item",
          nzDisabled: true,
          contentTemplateOutlet: this.maxTagPlaceholder,
          contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
        };
        listOfSlicedItem.push(exceededItem);
      }
      this.listOfSlicedItem = listOfSlicedItem;
    }
  }
  ngOnInit() {
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
        this.nzSelectSearchComponent.focus();
      }
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "keydown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event.target instanceof HTMLInputElement) {
        const inputValue = event.target.value;
        if (event.keyCode === BACKSPACE && this.mode !== "default" && !inputValue && this.listOfTopItem.length > 0) {
          event.preventDefault();
          this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
        }
      }
    });
  }
  static \u0275fac = function NzSelectTopControlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectTopControlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSelectTopControlComponent,
    selectors: [["nz-select-top-control"]],
    viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(NzSelectSearchComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
      }
    },
    hostAttrs: [1, "ant-select-selector"],
    inputs: {
      nzId: "nzId",
      showSearch: "showSearch",
      placeHolder: "placeHolder",
      open: "open",
      maxTagCount: [2, "maxTagCount", "maxTagCount", numberAttribute],
      autofocus: "autofocus",
      disabled: "disabled",
      mode: "mode",
      customTemplate: "customTemplate",
      maxTagPlaceholder: "maxTagPlaceholder",
      removeIcon: "removeIcon",
      listOfTopItem: "listOfTopItem",
      tokenSeparators: "tokenSeparators",
      prefix: "prefix"
    },
    outputs: {
      tokenize: "tokenize",
      inputValueChange: "inputValueChange",
      deleteItem: "deleteItem"
    },
    exportAs: ["nzSelectTopControl"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 3,
    consts: [[1, "ant-select-prefix"], [1, "ant-select-selection-wrap"], [1, "ant-select-selection-overflow"], [3, "placeholder"], [4, "nzStringTemplateOutlet"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger"], [3, "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [1, "ant-select-selection-overflow-item"], [1, "ant-select-selection-overflow-item", "ant-select-selection-overflow-item-suffix"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger"], ["deletable", "", 3, "delete", "removeIcon", "label", "disabled", "contentTemplateOutlet", "contentTemplateOutletContext"]],
    template: function NzSelectTopControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzSelectTopControlComponent_Conditional_0_Template, 2, 1, "div", 0);
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275conditionalCreate(2, NzSelectTopControlComponent_Case_2_Template, 2, 8)(3, NzSelectTopControlComponent_Case_3_Template, 5, 7, "div", 2);
        \u0275\u0275conditionalCreate(4, NzSelectTopControlComponent_Conditional_4_Template, 1, 1, "nz-select-placeholder", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275conditional(ctx.prefix ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_1_0 = ctx.mode) === "default" ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isShowPlaceholder ? 4 : -1);
      }
    },
    dependencies: [NzSelectSearchComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectTopControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-top-control",
      exportAs: "nzSelectTopControl",
      imports: [NzSelectSearchComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzStringTemplateOutletDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (prefix) {
      <div class="ant-select-prefix">
        <ng-container *nzStringTemplateOutlet="prefix">{{ prefix }}</ng-container>
      </div>
    }
    <span class="ant-select-selection-wrap">
      <!--single mode-->
      @switch (mode) {
        @case ('default') {
          <nz-select-search
            [nzId]="nzId"
            [disabled]="disabled"
            [value]="inputValue!"
            [showInput]="showSearch"
            [mirrorSync]="false"
            [autofocus]="autofocus"
            [focusTrigger]="open"
            (isComposingChange)="isComposingChange($event)"
            (valueChange)="onInputValueChange($event)"
          />
          @if (isShowSingleLabel) {
            <nz-select-item
              [removeIcon]="removeIcon"
              [label]="listOfTopItem[0].nzLabel"
              [contentTemplateOutlet]="customTemplate"
              [contentTemplateOutletContext]="listOfTopItem[0]"
            />
          }
        }
        @default {
          <div class="ant-select-selection-overflow">
            <!--multiple or tags mode-->
            @for (item of listOfSlicedItem; track item.nzValue) {
              <div class="ant-select-selection-overflow-item">
                <nz-select-item
                  [removeIcon]="removeIcon"
                  [label]="item.nzLabel"
                  [disabled]="item.nzDisabled || disabled"
                  [contentTemplateOutlet]="item.contentTemplateOutlet"
                  deletable
                  [contentTemplateOutletContext]="item.contentTemplateOutletContext"
                  (delete)="onDeleteItem(item.contentTemplateOutletContext)"
                />
              </div>
            }
            <div class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix">
              <nz-select-search
                [nzId]="nzId"
                [disabled]="disabled"
                [value]="inputValue!"
                [autofocus]="autofocus"
                [showInput]="true"
                [mirrorSync]="true"
                [focusTrigger]="open"
                (isComposingChange)="isComposingChange($event)"
                (valueChange)="onInputValueChange($event)"
              />
            </div>
          </div>
        }
      }
      @if (isShowPlaceholder) {
        <nz-select-placeholder [placeholder]="placeHolder" />
      }
    </span>
  `,
      host: {
        class: "ant-select-selector"
      }
    }]
  }], null, {
    nzId: [{
      type: Input
    }],
    showSearch: [{
      type: Input
    }],
    placeHolder: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    maxTagCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autofocus: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    maxTagPlaceholder: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    listOfTopItem: [{
      type: Input
    }],
    tokenSeparators: [{
      type: Input
    }],
    prefix: [{
      type: Input
    }],
    tokenize: [{
      type: Output
    }],
    inputValueChange: [{
      type: Output
    }],
    deleteItem: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent]
    }]
  });
})();
var defaultFilterOption = (searchValue, item) => {
  if (item && item.nzLabel) {
    return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  } else {
    return false;
  }
};
var NZ_CONFIG_MODULE_NAME = "select";
var NzSelectComponent = (() => {
  let _nzVariant_decorators;
  let _nzVariant_initializers = [];
  let _nzVariant_extraInitializers = [];
  let _nzOptionHeightPx_decorators;
  let _nzOptionHeightPx_initializers = [];
  let _nzOptionHeightPx_extraInitializers = [];
  let _nzSuffixIcon_decorators;
  let _nzSuffixIcon_initializers = [];
  let _nzSuffixIcon_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzSelectComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzVariant_decorators = [WithConfig()];
      _nzOptionHeightPx_decorators = [WithConfig()];
      _nzSuffixIcon_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzVariant_decorators, {
        kind: "field",
        name: "nzVariant",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzVariant" in obj,
          get: (obj) => obj.nzVariant,
          set: (obj, value) => {
            obj.nzVariant = value;
          }
        },
        metadata: _metadata
      }, _nzVariant_initializers, _nzVariant_extraInitializers);
      __esDecorate(null, null, _nzOptionHeightPx_decorators, {
        kind: "field",
        name: "nzOptionHeightPx",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOptionHeightPx" in obj,
          get: (obj) => obj.nzOptionHeightPx,
          set: (obj, value) => {
            obj.nzOptionHeightPx = value;
          }
        },
        metadata: _metadata
      }, _nzOptionHeightPx_initializers, _nzOptionHeightPx_extraInitializers);
      __esDecorate(null, null, _nzSuffixIcon_decorators, {
        kind: "field",
        name: "nzSuffixIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSuffixIcon" in obj,
          get: (obj) => obj.nzSuffixIcon,
          set: (obj, value) => {
            obj.nzSuffixIcon = value;
          }
        },
        metadata: _metadata
      }, _nzSuffixIcon_initializers, _nzSuffixIcon_extraInitializers);
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    ngZone = inject(NgZone);
    cdr = inject(ChangeDetectorRef);
    host = inject(ElementRef);
    renderer = inject(Renderer2);
    platform = inject(Platform);
    focusMonitor = inject(FocusMonitor);
    destroyRef = inject(DestroyRef);
    noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
    nzId = null;
    nzSize = "default";
    nzStatus = "";
    nzVariant = __runInitializers(this, _nzVariant_initializers, void 0);
    nzOptionHeightPx = (__runInitializers(this, _nzVariant_extraInitializers), __runInitializers(this, _nzOptionHeightPx_initializers, 32));
    nzOptionOverflowSize = (__runInitializers(this, _nzOptionHeightPx_extraInitializers), 8);
    nzDropdownClassName = null;
    nzDropdownMatchSelectWidth = true;
    nzDropdownStyle = null;
    nzNotFoundContent = void 0;
    nzPlaceHolder = null;
    nzPlacement = null;
    nzMaxTagCount = Infinity;
    nzDropdownRender = null;
    nzCustomTemplate = null;
    nzPrefix = null;
    nzSuffixIcon = __runInitializers(this, _nzSuffixIcon_initializers, null);
    nzClearIcon = (__runInitializers(this, _nzSuffixIcon_extraInitializers), null);
    nzRemoveIcon = null;
    nzMenuItemSelectedIcon = null;
    nzTokenSeparators = [];
    nzMaxTagPlaceholder = null;
    nzMaxMultipleCount = Infinity;
    nzMode = "default";
    nzFilterOption = defaultFilterOption;
    compareWith = (o1, o2) => o1 === o2;
    nzAllowClear = false;
    nzShowSearch = false;
    nzLoading = false;
    nzAutoFocus = false;
    nzAutoClearSearchValue = true;
    nzServerSearch = false;
    nzDisabled = false;
    nzOpen = false;
    nzSelectOnTab = false;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzOptions = (__runInitializers(this, _nzBackdrop_extraInitializers), []);
    nzShowArrow = true;
    get showArrow() {
      return this.nzShowArrow || !!this.nzSuffixIcon;
    }
    get isMultiple() {
      return this.nzMode === "multiple" || this.nzMode === "tags";
    }
    get isMaxMultipleCountSet() {
      return this.isMultiple && this.nzMaxMultipleCount !== Infinity;
    }
    get isMaxMultipleCountReached() {
      return this.nzMaxMultipleCount !== Infinity && this.listOfValue.length === this.nzMaxMultipleCount;
    }
    nzOnSearch = new EventEmitter();
    nzScrollToBottom = new EventEmitter();
    nzOpenChange = new EventEmitter();
    nzBlur = new EventEmitter();
    nzFocus = new EventEmitter();
    nzOnClear = output();
    originElement;
    cdkConnectedOverlay;
    nzSelectTopControlComponent;
    listOfNzOptionComponent;
    listOfNzOptionGroupComponent;
    nzOptionGroupComponentElement;
    nzSelectTopControlComponentElement;
    finalSize = computed(() => {
      if (this.formSize?.()) {
        return this.formSize();
      }
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.size();
    }, ...ngDevMode ? [{
      debugName: "finalSize"
    }] : []);
    finalVariant = computed(() => this.variant() || this.formVariant?.() || "outlined", ...ngDevMode ? [{
      debugName: "finalVariant"
    }] : []);
    size = signal(this.nzSize, ...ngDevMode ? [{
      debugName: "size"
    }] : []);
    variant = signal(this.nzVariant, ...ngDevMode ? [{
      debugName: "variant"
    }] : []);
    formSize = inject(NZ_FORM_SIZE, {
      optional: true
    });
    formVariant = inject(NZ_FORM_VARIANT, {
      optional: true
    });
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    listOfValue$ = new BehaviorSubject([]);
    listOfTemplateItem$ = new BehaviorSubject([]);
    listOfTagAndTemplateItem = [];
    searchValue = "";
    isReactiveDriven = false;
    value;
    requestId = -1;
    isNzDisableFirstChange = true;
    onChange = () => {
    };
    onTouched = () => {
    };
    dropdownPosition = "bottomLeft";
    triggerWidth = null;
    listOfContainerItem = [];
    listOfTopItem = [];
    activatedValue = null;
    listOfValue = [];
    focused = false;
    dir = inject(Directionality).valueSignal;
    positions = [];
    selectAnimationEnter = slideAnimationEnter();
    selectAnimationLeave = slideAnimationLeave();
    // status
    prefixCls = "ant-select";
    statusCls = {};
    status = "";
    hasFeedback = false;
    generateTagItem(value) {
      return {
        nzValue: value,
        nzLabel: value,
        type: "item"
      };
    }
    onItemClick(value) {
      this.activatedValue = value;
      if (this.nzMode === "default") {
        if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
          this.updateListOfValue([value]);
        }
        this.setOpenState(false);
      } else {
        const targetIndex = this.listOfValue.findIndex((o) => this.compareWith(o, value));
        if (targetIndex !== -1) {
          const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
          this.updateListOfValue(listOfValueAfterRemoved);
        } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
          const listOfValueAfterAdded = [...this.listOfValue, value];
          this.updateListOfValue(listOfValueAfterAdded);
        }
        this.focus();
        if (this.nzAutoClearSearchValue) {
          this.clearInput();
        }
      }
    }
    onItemDelete(item) {
      const listOfSelectedValue = this.listOfValue.filter((v) => !this.compareWith(v, item.nzValue));
      this.updateListOfValue(listOfSelectedValue);
      this.clearInput();
    }
    updateListOfContainerItem() {
      let listOfContainerItem = this.listOfTagAndTemplateItem.filter((item) => !item.nzHide).filter((item) => {
        if (!this.nzServerSearch && this.searchValue) {
          return this.nzFilterOption(this.searchValue, item);
        } else {
          return true;
        }
      });
      if (this.nzMode === "tags" && this.searchValue) {
        const matchedItem = this.listOfTagAndTemplateItem.find((item) => item.nzLabel === this.searchValue);
        if (!matchedItem) {
          const tagItem = this.generateTagItem(this.searchValue);
          listOfContainerItem = [tagItem, ...listOfContainerItem];
          this.activatedValue = tagItem.nzValue;
        } else {
          this.activatedValue = matchedItem.nzValue;
        }
      }
      const activatedItem = listOfContainerItem.find((item) => item.nzLabel === this.searchValue) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.activatedValue)) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
      this.activatedValue = activatedItem && activatedItem.nzValue || null;
      let listOfGroupLabel = [];
      if (this.isReactiveDriven) {
        listOfGroupLabel = [...new Set(this.nzOptions.filter((o) => o.groupLabel).map((o) => o.groupLabel))];
      } else {
        if (this.listOfNzOptionGroupComponent) {
          listOfGroupLabel = this.listOfNzOptionGroupComponent.map((o) => o.nzLabel);
        }
      }
      listOfGroupLabel.forEach((label) => {
        const index = listOfContainerItem.findIndex((item) => label === item.groupLabel);
        if (index > -1) {
          const groupItem = {
            groupLabel: label,
            type: "group",
            key: label
          };
          listOfContainerItem.splice(index, 0, groupItem);
        }
      });
      this.listOfContainerItem = [...listOfContainerItem];
      this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
      this.nzSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(listOfValue) {
      const covertListToModel = (list, mode) => {
        if (mode === "default") {
          if (list.length > 0) {
            return list[0];
          } else {
            return null;
          }
        } else {
          return list;
        }
      };
      const model = covertListToModel(listOfValue, this.nzMode);
      if (this.value !== model) {
        this.listOfValue = listOfValue;
        this.listOfValue$.next(listOfValue);
        this.value = model;
        this.onChange(this.value);
      }
    }
    onTokenSeparate(listOfLabel) {
      const listOfMatchedValue = this.listOfTagAndTemplateItem.filter((item) => listOfLabel.findIndex((label) => label === item.nzLabel) !== -1).map((item) => item.nzValue).filter((item) => this.listOfValue.findIndex((v) => this.compareWith(v, item)) === -1);
      const limitWithinMaxCount = (value) => this.isMaxMultipleCountSet ? value.slice(0, this.nzMaxMultipleCount) : value;
      if (this.nzMode === "multiple") {
        const updateValue = limitWithinMaxCount([...this.listOfValue, ...listOfMatchedValue]);
        this.updateListOfValue(updateValue);
      } else if (this.nzMode === "tags") {
        const listOfUnMatchedLabel = listOfLabel.filter((label) => this.listOfTagAndTemplateItem.findIndex((item) => item.nzLabel === label) === -1);
        const updateValue = limitWithinMaxCount([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        this.updateListOfValue(updateValue);
      }
      this.clearInput();
    }
    onKeyDown(e) {
      if (this.nzDisabled) {
        return;
      }
      const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((item) => item.type === "item").filter((item) => !item.nzDisabled);
      const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((item) => this.compareWith(item.nzValue, this.activatedValue));
      switch (e.keyCode) {
        case UP_ARROW:
          e.preventDefault();
          if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
            const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
            this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
          }
          break;
        case DOWN_ARROW:
          e.preventDefault();
          if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
            const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
            this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
          } else {
            this.setOpenState(true);
          }
          break;
        case ENTER:
          e.preventDefault();
          if (this.nzOpen) {
            if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
              this.onItemClick(this.activatedValue);
            }
          } else {
            this.setOpenState(true);
          }
          break;
        case SPACE:
          if (!this.nzOpen) {
            this.setOpenState(true);
            e.preventDefault();
          }
          break;
        case TAB:
          if (this.nzSelectOnTab) {
            if (this.nzOpen) {
              e.preventDefault();
              if (isNotNil(this.activatedValue)) {
                this.onItemClick(this.activatedValue);
              }
            }
          } else {
            this.setOpenState(false);
          }
          break;
        case ESCAPE:
          break;
        default:
          if (!this.nzOpen) {
            this.setOpenState(true);
          }
      }
    }
    setOpenState(value) {
      if (this.nzOpen !== value) {
        this.nzOpen = value;
        this.nzOpenChange.emit(value);
        this.onOpenChange();
        this.cdr.markForCheck();
      }
    }
    onOpenChange() {
      this.updateCdkConnectedOverlayStatus();
      if (this.nzAutoClearSearchValue || !this.isMultiple) {
        this.clearInput();
      }
    }
    onInputValueChange(value) {
      this.searchValue = value;
      this.updateListOfContainerItem();
      this.nzOnSearch.emit(value);
      this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
      this.updateListOfValue([]);
      this.nzOnClear.emit();
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.host.nativeElement.contains(target)) {
        this.setOpenState(false);
      }
    }
    focus() {
      this.nzSelectTopControlComponent.focus();
    }
    blur() {
      this.nzSelectTopControlComponent.blur();
    }
    onPositionChange(position) {
      const placement = getPlacementName(position);
      this.dropdownPosition = placement;
    }
    updateCdkConnectedOverlayStatus() {
      if (this.platform.isBrowser && this.originElement.nativeElement) {
        const triggerWidth = this.triggerWidth;
        cancelAnimationFrame(this.requestId);
        this.requestId = requestAnimationFrame(() => {
          this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
          if (triggerWidth !== this.triggerWidth) {
            this.cdr.detectChanges();
          }
        });
      }
    }
    updateCdkConnectedOverlayPositions() {
      requestAnimationFrame(() => {
        this.cdkConnectedOverlay?.overlayRef?.updatePosition();
      });
    }
    constructor() {
      this.destroyRef.onDestroy(() => {
        cancelAnimationFrame(this.requestId);
        this.focusMonitor.stopMonitoring(this.host);
      });
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => {
        this.size.set(this.nzSize);
        this.cdr.markForCheck();
      });
    }
    writeValue(modelValue) {
      if (this.value !== modelValue) {
        this.value = modelValue;
        const covertModelToList = (model, mode) => {
          if (model === null || model === void 0) {
            return [];
          } else if (mode === "default") {
            return [model];
          } else {
            return model;
          }
        };
        const listOfValue = covertModelToList(modelValue, this.nzMode);
        this.listOfValue = listOfValue;
        this.listOfValue$.next(listOfValue);
        this.cdr.markForCheck();
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(disabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
      this.isNzDisableFirstChange = false;
      if (this.nzDisabled) {
        this.setOpenState(false);
      }
      this.cdr.markForCheck();
    }
    ngOnChanges({
      nzOpen,
      nzDisabled,
      nzOptions,
      nzStatus,
      nzPlacement,
      nzSize,
      nzVariant
    }) {
      if (nzOpen) {
        this.onOpenChange();
      }
      if (nzDisabled && this.nzDisabled) {
        this.setOpenState(false);
      }
      if (nzOptions) {
        this.isReactiveDriven = true;
        const listOfOptions = this.nzOptions || [];
        const listOfTransformedItem = listOfOptions.map((item) => {
          return {
            template: item.label instanceof TemplateRef ? item.label : null,
            nzTitle: this.getTitle(item.title, item.label),
            nzLabel: typeof item.label === "string" || typeof item.label === "number" ? item.label : null,
            nzValue: item.value,
            nzDisabled: item.disabled || false,
            nzHide: item.hide || false,
            nzCustomContent: item.label instanceof TemplateRef,
            groupLabel: item.groupLabel || null,
            type: "item",
            key: item.key === void 0 ? item.value : item.key
          };
        });
        this.listOfTemplateItem$.next(listOfTransformedItem);
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzPlacement) {
        const {
          currentValue
        } = nzPlacement;
        this.dropdownPosition = currentValue;
        const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
        if (currentValue && listOfPlacement.includes(currentValue)) {
          this.positions = [POSITION_MAP[currentValue]];
        } else {
          this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
        }
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
      if (nzVariant) {
        this.variant.set(nzVariant.currentValue);
      }
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
      this.focusMonitor.monitor(this.host, true).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((focusOrigin) => {
        if (!focusOrigin) {
          this.focused = false;
          this.cdr.markForCheck();
          this.nzBlur.emit();
          Promise.resolve().then(() => {
            this.onTouched();
          });
        } else {
          this.focused = true;
          this.cdr.markForCheck();
          this.nzFocus.emit();
        }
      });
      combineLatest([this.listOfValue$, this.listOfTemplateItem$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
        const listOfTagItem = listOfSelectedValue.filter(() => this.nzMode === "tags").filter((value) => listOfTemplateItem.findIndex((o) => this.compareWith(o.nzValue, value)) === -1).map((value) => this.listOfTopItem.find((o) => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
        this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
        this.listOfTopItem = this.listOfValue.map((v) => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((item) => this.compareWith(v, item.nzValue))).filter((item) => !!item);
        this.updateListOfContainerItem();
      });
      fromEventOutsideAngular(this.host.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
          return;
        }
        this.ngZone.run(() => this.setOpenState(!this.nzOpen));
      });
      this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        if (event.keyCode === ESCAPE) {
          this.setOpenState(false);
        }
      });
    }
    ngAfterContentInit() {
      if (!this.isReactiveDriven) {
        merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(startWith(true), switchMap(() => merge(...[this.listOfNzOptionComponent.changes, this.listOfNzOptionGroupComponent.changes, ...this.listOfNzOptionComponent.map((option) => option.changes), ...this.listOfNzOptionGroupComponent.map((option) => option.changes)]).pipe(startWith(true))), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
          const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((item) => {
            const {
              template,
              nzLabel,
              nzValue,
              nzKey,
              nzDisabled,
              nzHide,
              nzCustomContent,
              groupLabel
            } = item;
            return {
              template,
              nzLabel,
              nzValue,
              nzDisabled,
              nzHide,
              nzCustomContent,
              groupLabel,
              nzTitle: this.getTitle(item.nzTitle, item.nzLabel),
              type: "item",
              key: nzKey === void 0 ? nzValue : nzKey
            };
          });
          this.listOfTemplateItem$.next(listOfOptionInterface);
          this.cdr.markForCheck();
        });
      }
    }
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.host.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.host.nativeElement, status2);
        }
      });
    }
    getTitle(title, label) {
      let rawTitle = void 0;
      if (title === void 0) {
        if (typeof label === "string" || typeof label === "number") {
          rawTitle = label.toString();
        }
      } else if (typeof title === "string" || typeof title === "number") {
        rawTitle = title.toString();
      }
      return rawTitle;
    }
    static \u0275fac = function NzSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSelectComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzSelectComponent2,
      selectors: [["nz-select"]],
      contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzOptionComponent, 5)(dirIndex, NzOptionGroupComponent, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionComponent = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
        }
      },
      viewQuery: function NzSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkOverlayOrigin, 7, ElementRef)(CdkConnectedOverlay, 7)(NzSelectTopControlComponent, 7)(NzOptionGroupComponent, 7, ElementRef)(NzSelectTopControlComponent, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.originElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzOptionGroupComponentElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponentElement = _t.first);
        }
      },
      hostAttrs: [1, "ant-select"],
      hostVars: 30,
      hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.finalSize() === "large")("ant-select-sm", ctx.finalSize() === "small")("ant-select-show-arrow", ctx.showArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.finalVariant() === "borderless")("ant-select-filled", ctx.finalVariant() === "filled")("ant-select-underlined", ctx.finalVariant() === "underlined")("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir() === "rtl");
        }
      },
      inputs: {
        nzId: "nzId",
        nzSize: "nzSize",
        nzStatus: "nzStatus",
        nzVariant: "nzVariant",
        nzOptionHeightPx: "nzOptionHeightPx",
        nzOptionOverflowSize: "nzOptionOverflowSize",
        nzDropdownClassName: "nzDropdownClassName",
        nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
        nzDropdownStyle: "nzDropdownStyle",
        nzNotFoundContent: "nzNotFoundContent",
        nzPlaceHolder: "nzPlaceHolder",
        nzPlacement: "nzPlacement",
        nzMaxTagCount: "nzMaxTagCount",
        nzDropdownRender: "nzDropdownRender",
        nzCustomTemplate: "nzCustomTemplate",
        nzPrefix: "nzPrefix",
        nzSuffixIcon: "nzSuffixIcon",
        nzClearIcon: "nzClearIcon",
        nzRemoveIcon: "nzRemoveIcon",
        nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
        nzTokenSeparators: "nzTokenSeparators",
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzMaxMultipleCount: [2, "nzMaxMultipleCount", "nzMaxMultipleCount", numberAttributeWithInfinityFallback],
        nzMode: "nzMode",
        nzFilterOption: "nzFilterOption",
        compareWith: "compareWith",
        nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
        nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        nzAutoClearSearchValue: [2, "nzAutoClearSearchValue", "nzAutoClearSearchValue", booleanAttribute],
        nzServerSearch: [2, "nzServerSearch", "nzServerSearch", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
        nzSelectOnTab: [2, "nzSelectOnTab", "nzSelectOnTab", booleanAttribute],
        nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute],
        nzOptions: "nzOptions",
        nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute]
      },
      outputs: {
        nzOnSearch: "nzOnSearch",
        nzScrollToBottom: "nzScrollToBottom",
        nzOpenChange: "nzOpenChange",
        nzBlur: "nzBlur",
        nzFocus: "nzFocus",
        nzOnClear: "nzOnClear"
      },
      exportAs: ["nzSelect"],
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent2),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275NgOnChangesFeature],
      decls: 5,
      vars: 24,
      consts: [["origin", "cdkOverlayOrigin"], ["feedbackIconTpl", ""], ["cdkOverlayOrigin", "", 3, "inputValueChange", "tokenize", "deleteItem", "keydown", "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "prefix"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxMultipleCountSet"], [3, "clearIcon"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions"], [3, "status"], [3, "clear", "clearIcon"], [3, "keydown", "itemClick", "scrollToBottom", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "isMaxMultipleCountReached"]],
      template: function NzSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "nz-select-top-control", 2, 0);
          \u0275\u0275listener("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
            return ctx.onInputValueChange($event);
          })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
            return ctx.onTokenSeparate($event);
          })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
            return ctx.onItemDelete($event);
          })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
            return ctx.onKeyDown($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(2, NzSelectComponent_Conditional_2_Template, 3, 8, "nz-select-arrow", 3);
          \u0275\u0275conditionalCreate(3, NzSelectComponent_Conditional_3_Template, 1, 1, "nz-select-clear", 4);
          \u0275\u0275template(4, NzSelectComponent_ng_template_4_Template, 1, 23, "ng-template", 5);
          \u0275\u0275listener("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
            return ctx.onClickOutside($event);
          })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
            return ctx.setOpenState(false);
          })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
            return ctx.onPositionChange($event);
          });
        }
        if (rf & 2) {
          const origin_r5 = \u0275\u0275reference(1);
          \u0275\u0275property("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation == null ? null : ctx.noAnimation.nzNoAnimation())("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem)("prefix", ctx.nzPrefix);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.showArrow || ctx.hasFeedback && !!ctx.status || ctx.isMaxMultipleCountSet ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", origin_r5)("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayPositions", ctx.positions);
        }
      },
      dependencies: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzOptionContainerComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-select",
      exportAs: "nzSelect",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzId]="nzId"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [nzNoAnimation]="noAnimation?.nzNoAnimation?.()"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      [prefix]="nzPrefix"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    />
    @if (showArrow || (hasFeedback && !!status) || isMaxMultipleCountSet) {
      <nz-select-arrow
        [showArrow]="nzShowArrow"
        [loading]="nzLoading"
        [search]="nzOpen && nzShowSearch"
        [suffixIcon]="nzSuffixIcon"
        [feedbackIcon]="feedbackIconTpl"
        [nzMaxMultipleCount]="nzMaxMultipleCount"
        [listOfValue]="listOfValue"
        [isMaxMultipleCountSet]="isMaxMultipleCountSet"
      >
        <ng-template #feedbackIconTpl>
          @if (hasFeedback && !!status) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </ng-template>
      </nz-select-arrow>
    }

    @if (nzAllowClear && !nzDisabled && listOfValue.length) {
      <nz-select-clear [clearIcon]="nzClearIcon" (clear)="onClearSelection()" />
    }
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      cdkConnectedOverlayTransformOriginOn=".ant-select-dropdown"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <nz-option-container
        [style]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropdownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropdownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropdownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropdownPosition === 'topRight'"
        [animate.enter]="selectAnimationEnter()"
        [animate.leave]="selectAnimationLeave()"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        [isMaxMultipleCountReached]="isMaxMultipleCountReached"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      />
    </ng-template>
  `,
      host: {
        class: "ant-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'finalSize() === "large"',
        "[class.ant-select-sm]": 'finalSize() === "small"',
        "[class.ant-select-show-arrow]": `showArrow`,
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-show-search]": `(nzShowSearch || nzMode !== 'default') && !nzDisabled`,
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-borderless]": `finalVariant() === 'borderless'`,
        "[class.ant-select-filled]": `finalVariant() === 'filled'`,
        "[class.ant-select-underlined]": `finalVariant() === 'underlined'`,
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "[class.ant-select-single]": `nzMode === 'default'`,
        "[class.ant-select-multiple]": `nzMode !== 'default'`,
        "[class.ant-select-rtl]": `dir() === 'rtl'`
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      imports: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzOptionContainerComponent]
    }]
  }], () => [], {
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzVariant: [{
      type: Input
    }],
    nzOptionHeightPx: [{
      type: Input
    }],
    nzOptionOverflowSize: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzDropdownRender: [{
      type: Input
    }],
    nzCustomTemplate: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzClearIcon: [{
      type: Input
    }],
    nzRemoveIcon: [{
      type: Input
    }],
    nzMenuItemSelectedIcon: [{
      type: Input
    }],
    nzTokenSeparators: [{
      type: Input
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input,
      args: [{
        transform: numberAttributeWithInfinityFallback
      }]
    }],
    nzMode: [{
      type: Input
    }],
    nzFilterOption: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowSearch: [{
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
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoClearSearchValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzServerSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOptions: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnSearch: [{
      type: Output
    }],
    nzScrollToBottom: [{
      type: Output
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzBlur: [{
      type: Output
    }],
    nzFocus: [{
      type: Output
    }],
    nzOnClear: [{
      type: Output,
      args: ["nzOnClear"]
    }],
    originElement: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: true
      }]
    }],
    nzSelectTopControlComponent: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true
      }]
    }],
    listOfNzOptionComponent: [{
      type: ContentChildren,
      args: [NzOptionComponent, {
        descendants: true
      }]
    }],
    listOfNzOptionGroupComponent: [{
      type: ContentChildren,
      args: [NzOptionGroupComponent, {
        descendants: true
      }]
    }],
    nzOptionGroupComponentElement: [{
      type: ViewChild,
      args: [NzOptionGroupComponent, {
        static: true,
        read: ElementRef
      }]
    }],
    nzSelectTopControlComponentElement: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NzSelectModule = class _NzSelectModule {
  static \u0275fac = function NzSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzSelectModule,
    imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
    exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSelectComponent, NzOptionContainerComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
      exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
    }]
  }], null, null);
})();

export {
  NzOptionGroupComponent,
  NzOptionComponent,
  NzSelectArrowComponent,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent,
  NzSelectComponent,
  NzSelectModule
};
//# sourceMappingURL=chunk-OVPA4RAH.js.map
