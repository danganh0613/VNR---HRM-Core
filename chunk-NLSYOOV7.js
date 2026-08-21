import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-7MILWWSJ.js";
import {
  NzI18nService
} from "./chunk-4UXR4KI7.js";
import "./chunk-UATU3F3O.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-BKAPBN54.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import {
  NzInputDirective,
  NzInputModule,
  NzInputPrefixDirective,
  NzInputWrapperComponent
} from "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-KX7AUY7O.js";
import {
  NzWaveDirective
} from "./chunk-LMW5SXOA.js";
import "./chunk-T7NAGNI6.js";
import {
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
  getStatusClassNames,
  toArray
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
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  distinctUntilChanged,
  inject,
  input,
  map,
  merge,
  of,
  output,
  setClassMetadata,
  startWith,
  switchMap,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-transfer.mjs
var _c0 = ["headerCheckbox"];
var _c1 = ["checkboxes"];
var _c2 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  direction: a1,
  disabled: a2,
  onItemSelectAll: a3,
  onItemSelect: a4,
  stat: a5
});
var _c3 = (a0) => ({
  "ant-transfer-list-content-item-disabled": a0
});
var _c4 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.key;
function NzTransferListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 10, 0);
    \u0275\u0275listener("nzCheckedChange", function NzTransferListComponent_Conditional_1_Template_label_nzCheckedChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemSelectAll($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzChecked", ctx_r1.stat.checkAll)("nzIndeterminate", ctx_r1.stat.checkHalf)("nzDisabled", ctx_r1.stat.availableCount === 0 || ctx_r1.disabled);
  }
}
function NzTransferListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.stat.checkCount > 0 ? ctx_r1.stat.checkCount + "/" : "") + ctx_r1.stat.shownCount, " ");
  }
}
function NzTransferListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stat.shownCount, " ");
  }
}
function NzTransferListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.titleText);
  }
}
function NzTransferListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "nz-input-wrapper", 11);
    \u0275\u0275element(2, "nz-icon", 12);
    \u0275\u0275elementStart(3, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function NzTransferListComponent_Conditional_9_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filter, $event) || (ctx_r1.filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzTransferListComponent_Conditional_9_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFilter($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx_r1.searchPlaceholder)("disabled", ctx_r1.disabled);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filter);
  }
}
function NzTransferListComponent_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzTransferListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, NzTransferListComponent_Conditional_10_ng_container_1_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.renderList)("ngTemplateOutletContext", \u0275\u0275pureFunction6(2, _c2, ctx_r1.validData, ctx_r1.direction, ctx_r1.disabled, ctx_r1.onItemSelectAll, ctx_r1.onItemSelect, ctx_r1.stat));
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", item_r5.title, " ");
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 21);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.render)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, item_r5));
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 20, 1);
    \u0275\u0275listener("nzCheckedChange", function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Template_label_nzCheckedChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onItemSelect(item_r5));
    });
    \u0275\u0275conditionalCreate(2, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_2_Template, 1, 1)(3, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Conditional_3_Template, 1, 4, null, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzChecked", item_r5.checked)("nzDisabled", ctx_r1.disabled || item_r5.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.render ? 2 : 3);
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275listener("click", function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_0_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const item_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!(ctx_r1.disabled || item_r5.disabled) ? ctx_r1.deleteItem(item_r5) : null);
    });
    \u0275\u0275element(3, "nz-icon", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction1(3, _c3, ctx_r1.disabled || item_r5.disabled));
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 21);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.render)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, item_r5));
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_0_Template, 4, 5)(1, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Conditional_1_Template, 1, 4, null, 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(!ctx_r1.render ? 0 : 1);
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("click", function NzTransferListComponent_Conditional_11_Conditional_0_For_2_Template_li_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.oneWay ? ctx_r1.onItemSelect(item_r5) : null);
    });
    \u0275\u0275conditionalCreate(1, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_1_Template, 4, 3, "label", 19)(2, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(3, _c3, ctx_r1.disabled || item_r5.disabled));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.oneWay ? 1 : 2);
  }
}
function NzTransferListComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, NzTransferListComponent_Conditional_11_Conditional_0_For_2_Template, 3, 5, "li", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.validData);
  }
}
function NzTransferListComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "nz-embed-empty", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r1.notFoundContent);
  }
}
function NzTransferListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTransferListComponent_Conditional_11_Conditional_0_Template, 3, 0, "ul", 15)(1, NzTransferListComponent_Conditional_11_Conditional_1_Template, 2, 1, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.stat.shownCount > 0 ? 0 : 1);
  }
}
function NzTransferListComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
}
function NzTransferListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, NzTransferListComponent_Conditional_12_ng_template_1_Template, 0, 0, "ng-template", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footer)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, ctx_r1.direction));
  }
}
var _c5 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275listener("click", function NzTransferSearchComponent_Conditional_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._clear());
    });
    \u0275\u0275element(1, "nz-icon", 5);
    \u0275\u0275elementEnd();
  }
}
function NzTransferComponent_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nzOperations[1]);
  }
}
function NzTransferComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function NzTransferComponent_Conditional_1_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToLeft());
    });
    \u0275\u0275element(1, "nz-icon", 6);
    \u0275\u0275conditionalCreate(2, NzTransferComponent_Conditional_1_Conditional_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.nzDisabled || !ctx_r2.leftActive);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nzOperations[1] ? 2 : -1);
  }
}
function NzTransferComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nzOperations[0]);
  }
}
function NzTransferComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, NzTransferComponent_Conditional_1_Conditional_1_Template, 3, 2, "button", 3);
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function NzTransferComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveToRight());
    });
    \u0275\u0275element(3, "nz-icon", 5);
    \u0275\u0275conditionalCreate(4, NzTransferComponent_Conditional_1_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.nzOneWay ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.nzDisabled || !ctx_r2.rightActive);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nzOperations[0] ? 4 : -1);
  }
}
function NzTransferComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nzOperations[0]);
  }
}
function NzTransferComponent_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.nzOperations[1]);
  }
}
function NzTransferComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function NzTransferComponent_Conditional_2_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToLeft());
    });
    \u0275\u0275element(1, "nz-icon", 5);
    \u0275\u0275conditionalCreate(2, NzTransferComponent_Conditional_2_Conditional_4_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.nzDisabled || !ctx_r2.leftActive);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nzOperations[1] ? 2 : -1);
  }
}
function NzTransferComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 4);
    \u0275\u0275listener("click", function NzTransferComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveToRight());
    });
    \u0275\u0275element(2, "nz-icon", 6);
    \u0275\u0275conditionalCreate(3, NzTransferComponent_Conditional_2_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NzTransferComponent_Conditional_2_Conditional_4_Template, 3, 2, "button", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.nzDisabled || !ctx_r2.rightActive);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nzOperations[0] ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.nzOneWay ? 4 : -1);
  }
}
var NzTransferListComponent = class _NzTransferListComponent {
  // #region fields
  cdr = inject(ChangeDetectorRef);
  direction = "left";
  titleText = "";
  showSelectAll = true;
  dataSource = [];
  itemUnit = "";
  itemsUnit = "";
  filter = "";
  oneWay = false;
  disabled = false;
  showSearch;
  searchPlaceholder;
  notFoundContent;
  filterOption;
  renderList = null;
  render = null;
  footer = null;
  // events
  handleSelectAll = new EventEmitter();
  handleSelect = new EventEmitter();
  filterChange = new EventEmitter();
  moveToLeft = new EventEmitter();
  headerCheckbox;
  checkboxes;
  stat = {
    checkAll: false,
    checkHalf: false,
    checkCount: 0,
    shownCount: 0,
    availableCount: 0
  };
  get validData() {
    return this.dataSource.filter((w) => !w.hide);
  }
  get availableData() {
    return this.validData.filter((w) => !w.disabled);
  }
  onItemSelect = (item) => {
    if (this.disabled || item.disabled) {
      return;
    }
    item.checked = !item.checked;
    this.updateCheckStatus();
    this.handleSelect.emit(item);
  };
  onItemSelectAll = (status) => {
    this.dataSource.forEach((item) => {
      if (!item.disabled && !item.hide) {
        item.checked = status;
      }
    });
    this.updateCheckStatus();
    this.handleSelectAll.emit(status);
  };
  updateCheckStatus() {
    const validCount = this.dataSource.filter((w) => !w.disabled).length;
    this.stat.checkCount = this.dataSource.filter((w) => w.checked && !w.disabled).length;
    this.stat.shownCount = this.validData.length;
    this.stat.availableCount = this.availableData.length;
    this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
    this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    this.headerCheckbox && (this.headerCheckbox.nzChecked = this.stat.checkAll);
  }
  // #endregion
  // #region search
  handleFilter(value) {
    this.dataSource.forEach((item) => {
      item.hide = value.length > 0 && !this.matchFilter(value, item);
    });
    this.stat.shownCount = this.validData.length;
    this.stat.availableCount = this.availableData.length;
    this.filterChange.emit({
      direction: this.direction,
      value
    });
  }
  deleteItem(item) {
    item.checked = true;
    this.handleSelect.emit(item);
    this.moveToLeft.emit();
  }
  matchFilter(text, item) {
    if (this.filterOption) {
      return this.filterOption(text, item);
    }
    return item.title.includes(text);
  }
  // #endregion
  markForCheck() {
    this.updateCheckStatus();
    this.cdr.markForCheck();
  }
  ngAfterViewInit() {
    this.checkboxes.changes.pipe(startWith(this.checkboxes), switchMap(() => {
      const checkboxes = this.checkboxes.toArray();
      return merge(...checkboxes.map((checkbox) => fromEventOutsideAngular(checkbox.nativeElement, "click")));
    })).subscribe((event) => {
      event.stopPropagation();
    });
  }
  static \u0275fac = function NzTransferListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransferListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTransferListComponent,
    selectors: [["nz-transfer-list"]],
    viewQuery: function NzTransferListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, NzCheckboxComponent)(_c1, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckbox = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkboxes = _t);
      }
    },
    hostAttrs: [1, "ant-transfer-list"],
    hostVars: 2,
    hostBindings: function NzTransferListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-transfer-list-with-footer", !!ctx.footer);
      }
    },
    inputs: {
      direction: "direction",
      titleText: "titleText",
      showSelectAll: "showSelectAll",
      dataSource: "dataSource",
      itemUnit: "itemUnit",
      itemsUnit: "itemsUnit",
      filter: "filter",
      oneWay: "oneWay",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      showSearch: [2, "showSearch", "showSearch", booleanAttribute],
      searchPlaceholder: "searchPlaceholder",
      notFoundContent: "notFoundContent",
      filterOption: "filterOption",
      renderList: "renderList",
      render: "render",
      footer: "footer"
    },
    outputs: {
      handleSelectAll: "handleSelectAll",
      handleSelect: "handleSelect",
      filterChange: "filterChange",
      moveToLeft: "moveToLeft"
    },
    exportAs: ["nzTransferList"],
    decls: 13,
    vars: 9,
    consts: [["headerCheckbox", ""], ["checkboxes", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzChecked", "nzIndeterminate", "nzDisabled"], [1, "ant-transfer-list-header-selected"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body"], [1, "ant-transfer-list-body-search-wrapper"], [1, "ant-transfer-list-body-customize-wrapper"], [1, "ant-transfer-list-footer"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzCheckedChange", "nzChecked", "nzIndeterminate", "nzDisabled"], ["nzAllowClear", "", 1, "ant-transfer-list-search"], ["nzInputPrefix", "", "nzType", "search"], ["nz-input", "", 3, "ngModelChange", "placeholder", "disabled", "ngModel"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-content"], [1, "ant-transfer-list-body-not-found"], [1, "ant-transfer-list-content-item", 3, "class"], [1, "ant-transfer-list-content-item", 3, "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled"], ["nz-checkbox", "", 3, "nzCheckedChange", "nzChecked", "nzDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-content-item-text"], [1, "ant-transfer-list-content-item-remove", 3, "click"], ["nzType", "delete", "nzTheme", "outline"], ["nzComponentName", "transfer", 3, "specificContent"]],
    template: function NzTransferListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275conditionalCreate(1, NzTransferListComponent_Conditional_1_Template, 2, 3, "label", 3);
        \u0275\u0275elementStart(2, "span", 4)(3, "span");
        \u0275\u0275conditionalCreate(4, NzTransferListComponent_Conditional_4_Template, 1, 1)(5, NzTransferListComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, NzTransferListComponent_Conditional_7_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275conditionalCreate(9, NzTransferListComponent_Conditional_9_Template, 4, 3, "div", 7);
        \u0275\u0275conditionalCreate(10, NzTransferListComponent_Conditional_10_Template, 2, 9, "div", 8)(11, NzTransferListComponent_Conditional_11_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, NzTransferListComponent_Conditional_12_Template, 2, 4, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSelectAll && !ctx.oneWay ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.oneWay ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.validData.length > 1 ? ctx.itemsUnit : ctx.itemUnit, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.titleText ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("ant-transfer-list-body-with-search", ctx.showSearch);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSearch ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.renderList ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.footer ? 12 : -1);
      }
    },
    dependencies: [NzInputModule, NzInputDirective, NzInputWrapperComponent, NzInputPrefixDirective, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzCheckboxModule, NzCheckboxComponent, NgTemplateOutlet, NzEmptyModule, NzEmbedEmptyComponent, NzIconModule, NzIconDirective, NzButtonModule, NzTransitionPatchDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferListComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer-list",
      exportAs: "nzTransferList",
      imports: [NzInputModule, FormsModule, NzCheckboxModule, NgTemplateOutlet, NzEmptyModule, NzIconModule, NzButtonModule],
      template: `
    <div class="ant-transfer-list-header">
      @if (showSelectAll && !oneWay) {
        <label
          class="ant-transfer-list-checkbox"
          nz-checkbox
          #headerCheckbox
          [nzChecked]="stat.checkAll"
          (nzCheckedChange)="onItemSelectAll($event)"
          [nzIndeterminate]="stat.checkHalf"
          [nzDisabled]="stat.availableCount === 0 || disabled"
        ></label>
      }
      <span class="ant-transfer-list-header-selected">
        <span>
          @if (!oneWay) {
            {{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}
          } @else {
            {{ stat.shownCount }}
          }
          {{ validData.length > 1 ? itemsUnit : itemUnit }}
        </span>
      </span>
      @if (titleText) {
        <span class="ant-transfer-list-header-title">{{ titleText }}</span>
      }
    </div>
    <div class="ant-transfer-list-body" [class.ant-transfer-list-body-with-search]="showSearch">
      @if (showSearch) {
        <div class="ant-transfer-list-body-search-wrapper">
          <nz-input-wrapper class="ant-transfer-list-search" nzAllowClear>
            <nz-icon nzInputPrefix nzType="search" />
            <input
              nz-input
              [placeholder]="searchPlaceholder"
              [disabled]="disabled"
              [(ngModel)]="filter"
              (ngModelChange)="handleFilter($event)"
            />
          </nz-input-wrapper>
        </div>
      }
      @if (renderList) {
        <div class="ant-transfer-list-body-customize-wrapper">
          <ng-container
            *ngTemplateOutlet="
              renderList;
              context: {
                $implicit: validData,
                direction: direction,
                disabled: disabled,
                onItemSelectAll: onItemSelectAll,
                onItemSelect: onItemSelect,
                stat: stat
              }
            "
          />
        </div>
      } @else {
        @if (stat.shownCount > 0) {
          <ul class="ant-transfer-list-content">
            @for (item of validData; track item.key) {
              <li
                (click)="!oneWay ? onItemSelect(item) : null"
                class="ant-transfer-list-content-item"
                [class]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
              >
                @if (!oneWay) {
                  <label
                    #checkboxes
                    nz-checkbox
                    [nzChecked]="item.checked"
                    (nzCheckedChange)="onItemSelect(item)"
                    [nzDisabled]="disabled || item.disabled"
                  >
                    @if (!render) {
                      {{ item.title }}
                    } @else {
                      <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: item }" />
                    }
                  </label>
                } @else {
                  @if (!render) {
                    <span class="ant-transfer-list-content-item-text">
                      {{ item.title }}
                    </span>
                    <div
                      class="ant-transfer-list-content-item-remove"
                      [class]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
                      (click)="!(disabled || item.disabled) ? deleteItem(item) : null"
                    >
                      <nz-icon nzType="delete" nzTheme="outline" />
                    </div>
                  } @else {
                    <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: item }" />
                  }
                }
              </li>
            }
          </ul>
        } @else {
          <div class="ant-transfer-list-body-not-found">
            <nz-embed-empty nzComponentName="transfer" [specificContent]="notFoundContent" />
          </div>
        }
      }
    </div>
    @if (footer) {
      <div class="ant-transfer-list-footer">
        <ng-template [ngTemplateOutlet]="footer" [ngTemplateOutletContext]="{ $implicit: direction }" />
      </div>
    }
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-transfer-list",
        "[class.ant-transfer-list-with-footer]": "!!footer"
      }
    }]
  }], null, {
    direction: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }],
    showSelectAll: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    itemUnit: [{
      type: Input
    }],
    itemsUnit: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    oneWay: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchPlaceholder: [{
      type: Input
    }],
    notFoundContent: [{
      type: Input
    }],
    filterOption: [{
      type: Input
    }],
    renderList: [{
      type: Input
    }],
    render: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    handleSelectAll: [{
      type: Output
    }],
    handleSelect: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    moveToLeft: [{
      type: Output
    }],
    headerCheckbox: [{
      type: ViewChild,
      args: ["headerCheckbox", {
        read: NzCheckboxComponent
      }]
    }],
    checkboxes: [{
      type: ViewChildren,
      args: ["checkboxes", {
        read: ElementRef
      }]
    }]
  });
})();
var NzTransferSearchComponent = class _NzTransferSearchComponent {
  // region: fields
  cdr = inject(ChangeDetectorRef);
  placeholder;
  value;
  disabled = false;
  valueChanged = new EventEmitter();
  valueClear = new EventEmitter();
  // endregion
  _handle() {
    this.valueChanged.emit(this.value);
  }
  _clear() {
    if (this.disabled) {
      return;
    }
    this.value = "";
    this.valueClear.emit();
  }
  ngOnChanges() {
    this.cdr.detectChanges();
  }
  static \u0275fac = function NzTransferSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransferSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTransferSearchComponent,
    selectors: [["", "nz-transfer-search", ""]],
    inputs: {
      placeholder: "placeholder",
      value: "value",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      valueChanged: "valueChanged",
      valueClear: "valueClear"
    },
    exportAs: ["nzTransferSearch"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c5,
    decls: 4,
    vars: 6,
    consts: [[1, "ant-input-prefix"], ["nzType", "search"], [1, "ant-input", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "ant-input-suffix"], [1, "ant-input-suffix", 3, "click"], ["nzType", "close-circle", "nzTheme", "fill", 1, "ant-input-clear-icon"]],
    template: function NzTransferSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275element(1, "nz-icon", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "input", 2);
        \u0275\u0275twoWayListener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener() {
          return ctx._handle();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, NzTransferSearchComponent_Conditional_3_Template, 2, 0, "span", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ant-input-disabled", ctx.disabled);
        \u0275\u0275twoWayProperty("ngModel", ctx.value);
        \u0275\u0275property("disabled", ctx.disabled)("placeholder", ctx.placeholder);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value && ctx.value.length > 0 ? 3 : -1);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferSearchComponent, [{
    type: Component,
    args: [{
      selector: "[nz-transfer-search]",
      exportAs: "nzTransferSearch",
      template: `
    <span class="ant-input-prefix">
      <nz-icon nzType="search" />
    </span>
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input"
      [class.ant-input-disabled]="disabled"
    />
    @if (value && value.length > 0) {
      <span class="ant-input-suffix" (click)="_clear()">
        <nz-icon nzType="close-circle" nzTheme="fill" class="ant-input-clear-icon" />
      </span>
    }
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [FormsModule, NzIconModule]
    }]
  }], null, {
    placeholder: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valueChanged: [{
      type: Output
    }],
    valueClear: [{
      type: Output
    }]
  });
})();
var NzTransferComponent = class _NzTransferComponent {
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  i18n = inject(NzI18nService);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  directionality = inject(Directionality);
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  nzFormNoStatusService = inject(NzFormNoStatusService, {
    optional: true
  });
  lists;
  locale;
  leftFilter = "";
  rightFilter = "";
  dir = "ltr";
  // status
  prefixCls = "ant-transfer";
  statusCls = {};
  hasFeedback = false;
  // #region fields
  nzDisabled = false;
  nzDataSource = [];
  nzTitles = ["", ""];
  nzOperations = [];
  nzListStyle = {};
  nzShowSelectAll = true;
  nzItemUnit;
  nzItemsUnit;
  nzCanMove = (arg) => of(arg.list);
  nzRenderList = null;
  nzRender = null;
  nzFooter = null;
  nzShowSearch = false;
  nzFilterOption;
  nzSearchPlaceholder;
  nzNotFoundContent;
  nzTargetKeys = [];
  nzSelectedKeys = [];
  nzStatus = "";
  nzOneWay = false;
  // events
  nzChange = new EventEmitter();
  nzSearchChange = new EventEmitter();
  nzSelectChange = new EventEmitter();
  // #endregion
  // #region process data
  // left
  leftDataSource = [];
  lastLeftCheckedIndex;
  // right
  rightDataSource = [];
  lastRightCheckedIndex;
  isShiftPressed = false;
  onTriggerShiftDown() {
    this.isShiftPressed = true;
  }
  onTriggerShiftUp() {
    this.isShiftPressed = false;
  }
  onTriggerMouseDown(event) {
    const isInsideTransfer = event.target.closest(".ant-transfer-list");
    if (event.shiftKey && isInsideTransfer) {
      event.preventDefault();
    }
  }
  splitDataSource() {
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.nzDataSource.forEach((record) => {
      if (record.direction === "right") {
        record.direction = "right";
        this.rightDataSource.push(record);
      } else {
        record.direction = "left";
        this.leftDataSource.push(record);
      }
    });
  }
  getCheckedData(direction) {
    return this[direction === "left" ? "leftDataSource" : "rightDataSource"].filter((w) => w.checked);
  }
  handleLeftSelectAll = (checked) => this.handleSelect("left", checked);
  handleRightSelectAll = (checked) => this.handleSelect("right", checked);
  handleLeftSelect = (item) => this.handleSelect("left", !!item.checked, item);
  handleRightSelect = (item) => this.handleSelect("right", !!item.checked, item);
  handleSelect(direction, checked, item) {
    if (item) {
      const datasource = direction === "left" ? this.leftDataSource : this.rightDataSource;
      const currentIndex = datasource.findIndex((i) => i.key === item.key);
      const lastCheckedIndex = this[direction === "left" ? "lastLeftCheckedIndex" : "lastRightCheckedIndex"] ?? -1;
      if (this.isShiftPressed && lastCheckedIndex > -1) {
        const start = Math.min(lastCheckedIndex, currentIndex);
        const end = Math.max(lastCheckedIndex, currentIndex);
        for (let i = start; i <= end; i++) {
          const item2 = datasource[i];
          if (!item2.disabled) {
            item2.checked = checked;
          }
        }
        this.markForCheckAllList();
      }
      this[direction === "left" ? "lastLeftCheckedIndex" : "lastRightCheckedIndex"] = currentIndex;
    }
    const list = this.getCheckedData(direction);
    const count = list.filter((i) => !i.disabled).length;
    this.updateOperationStatus(direction, count);
    this.nzSelectChange.emit({
      direction,
      checked,
      list,
      item
    });
  }
  handleFilterChange(ret) {
    this.nzSearchChange.emit(ret);
  }
  // #endregion
  // #region operation
  leftActive = false;
  rightActive = false;
  updateOperationStatus(direction, count) {
    this[direction === "right" ? "leftActive" : "rightActive"] = (typeof count === "undefined" ? this.getCheckedData(direction).filter((w) => !w.disabled).length : count) > 0;
  }
  moveToLeft = () => this.moveTo("left");
  moveToRight = () => this.moveTo("right");
  moveTo(direction) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    this.updateOperationStatus(oppositeDirection, 0);
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const moveList = datasource.filter((item) => item.checked === true && !item.disabled);
    this.nzCanMove({
      direction,
      list: moveList
    }).subscribe({
      next: (newMoveList) => this.truthMoveTo(direction, newMoveList.filter((i) => !!i)),
      error: () => moveList.forEach((i) => i.checked = false)
    });
  }
  truthMoveTo(direction, list) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const targetDatasource = direction === "left" ? this.leftDataSource : this.rightDataSource;
    for (const item of list) {
      item.checked = false;
      item.hide = false;
      item.direction = direction;
      datasource.splice(datasource.indexOf(item), 1);
    }
    targetDatasource.splice(0, 0, ...list);
    this.updateOperationStatus(oppositeDirection);
    this.nzChange.emit({
      from: oppositeDirection,
      to: direction,
      list
    });
    this.markForCheckAllList();
  }
  // #endregion
  markForCheckAllList() {
    if (!this.lists) {
      return;
    }
    this.lists.forEach((i) => i.markForCheck());
  }
  handleNzTargetKeys() {
    const keys = toArray(this.nzTargetKeys);
    const hasOwnKey = (e) => e.hasOwnProperty("key");
    this.leftDataSource.forEach((e) => {
      if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
        e.checked = true;
      }
    });
    this.moveToRight();
  }
  handleNzSelectedKeys() {
    const keys = toArray(this.nzSelectedKeys);
    this.nzDataSource.forEach((e) => {
      if (keys.indexOf(e.key) !== -1) {
        e.checked = true;
      }
    });
    const term = (ld) => ld.disabled === false && ld.checked === true;
    this.rightActive = this.leftDataSource.some(term);
    this.leftActive = this.rightDataSource.some(term);
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => pre.status === cur.status && pre.hasFeedback === cur.hasFeedback), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
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
    this.i18n.localeChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Transfer");
      this.markForCheckAllList();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzDataSource,
      nzTargetKeys,
      nzSelectedKeys
    } = changes;
    if (nzDataSource) {
      this.splitDataSource();
      this.updateOperationStatus("left");
      this.updateOperationStatus("right");
      this.cdr.detectChanges();
      this.markForCheckAllList();
    }
    if (nzTargetKeys) {
      this.handleNzTargetKeys();
    }
    if (nzSelectedKeys) {
      this.handleNzSelectedKeys();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  setStatusStyles(status, hasFeedback) {
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
  static \u0275fac = function NzTransferComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransferComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTransferComponent,
    selectors: [["nz-transfer"]],
    viewQuery: function NzTransferComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(NzTransferListComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lists = _t);
      }
    },
    hostAttrs: [1, "ant-transfer"],
    hostVars: 6,
    hostBindings: function NzTransferComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.shift", function NzTransferComponent_keydown_shift_HostBindingHandler() {
          return ctx.onTriggerShiftDown();
        }, \u0275\u0275resolveWindow)("keyup.shift", function NzTransferComponent_keyup_shift_HostBindingHandler() {
          return ctx.onTriggerShiftUp();
        }, \u0275\u0275resolveWindow)("mousedown", function NzTransferComponent_mousedown_HostBindingHandler($event) {
          return ctx.onTriggerMouseDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-transfer-rtl", ctx.dir === "rtl")("ant-transfer-disabled", ctx.nzDisabled)("ant-transfer-customize-list", ctx.nzRenderList);
      }
    },
    inputs: {
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzDataSource: "nzDataSource",
      nzTitles: "nzTitles",
      nzOperations: "nzOperations",
      nzListStyle: "nzListStyle",
      nzShowSelectAll: [2, "nzShowSelectAll", "nzShowSelectAll", booleanAttribute],
      nzItemUnit: "nzItemUnit",
      nzItemsUnit: "nzItemsUnit",
      nzCanMove: "nzCanMove",
      nzRenderList: "nzRenderList",
      nzRender: "nzRender",
      nzFooter: "nzFooter",
      nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
      nzFilterOption: "nzFilterOption",
      nzSearchPlaceholder: "nzSearchPlaceholder",
      nzNotFoundContent: "nzNotFoundContent",
      nzTargetKeys: "nzTargetKeys",
      nzSelectedKeys: "nzSelectedKeys",
      nzStatus: "nzStatus",
      nzOneWay: [2, "nzOneWay", "nzOneWay", booleanAttribute]
    },
    outputs: {
      nzChange: "nzChange",
      nzSearchChange: "nzSearchChange",
      nzSelectChange: "nzSelectChange"
    },
    exportAs: ["nzTransfer"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 34,
    consts: [["data-direction", "left", "direction", "left", 1, "ant-transfer-list", 3, "filterChange", "handleSelect", "handleSelectAll", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer"], [1, "ant-transfer-operation"], ["data-direction", "right", "direction", "right", 1, "ant-transfer-list", 3, "filterChange", "moveToLeft", "handleSelect", "handleSelectAll", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "oneWay"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "click", "disabled"], ["nzType", "right"], ["nzType", "left"]],
    template: function NzTransferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-transfer-list", 0);
        \u0275\u0275listener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) {
          return ctx.handleFilterChange($event);
        })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) {
          return ctx.handleLeftSelect($event);
        })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) {
          return ctx.handleLeftSelectAll($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(1, NzTransferComponent_Conditional_1_Template, 5, 3, "div", 1)(2, NzTransferComponent_Conditional_2_Template, 5, 3, "div", 1);
        \u0275\u0275elementStart(3, "nz-transfer-list", 2);
        \u0275\u0275listener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_3_listener($event) {
          return ctx.handleFilterChange($event);
        })("moveToLeft", function NzTransferComponent_Template_nz_transfer_list_moveToLeft_3_listener() {
          return ctx.moveToLeft();
        })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_3_listener($event) {
          return ctx.handleRightSelect($event);
        })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_3_listener($event) {
          return ctx.handleRightSelectAll($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.nzListStyle);
        \u0275\u0275property("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.dir !== "rtl" ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(ctx.nzListStyle);
        \u0275\u0275property("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter)("oneWay", ctx.nzOneWay);
      }
    },
    dependencies: [NzTransferListComponent, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer",
      exportAs: "nzTransfer",
      template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [style]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    />
    @if (dir !== 'rtl') {
      <div class="ant-transfer-operation">
        @if (!nzOneWay) {
          <button
            nz-button
            type="button"
            (click)="moveToLeft()"
            [disabled]="nzDisabled || !leftActive"
            nzType="primary"
            nzSize="small"
          >
            <nz-icon nzType="left" />
            @if (nzOperations[1]) {
              <span>{{ nzOperations[1] }}</span>
            }
          </button>
        }
        <button
          nz-button
          type="button"
          (click)="moveToRight()"
          [disabled]="nzDisabled || !rightActive"
          nzType="primary"
          nzSize="small"
        >
          <nz-icon nzType="right" />
          @if (nzOperations[0]) {
            <span>{{ nzOperations[0] }}</span>
          }
        </button>
      </div>
    } @else {
      <div class="ant-transfer-operation">
        <button
          nz-button
          type="button"
          (click)="moveToRight()"
          [disabled]="nzDisabled || !rightActive"
          nzType="primary"
          nzSize="small"
        >
          <nz-icon nzType="left" />
          @if (nzOperations[0]) {
            <span>{{ nzOperations[0] }}</span>
          }
        </button>
        @if (!nzOneWay) {
          <button
            nz-button
            type="button"
            (click)="moveToLeft()"
            [disabled]="nzDisabled || !leftActive"
            nzType="primary"
            nzSize="small"
          >
            <nz-icon nzType="right" />
            @if (nzOperations[1]) {
              <span>{{ nzOperations[1] }}</span>
            }
          </button>
        }
      </div>
    }
    <nz-transfer-list
      class="ant-transfer-list"
      [style]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      [oneWay]="nzOneWay"
      (moveToLeft)="moveToLeft()"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    />
  `,
      host: {
        class: "ant-transfer",
        "[class.ant-transfer-rtl]": `dir === 'rtl'`,
        "[class.ant-transfer-disabled]": `nzDisabled`,
        "[class.ant-transfer-customize-list]": `nzRenderList`,
        "(window:keydown.shift)": "onTriggerShiftDown()",
        "(window:keyup.shift)": "onTriggerShiftUp()",
        "(mousedown)": "onTriggerMouseDown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzTransferListComponent, NzIconModule, NzButtonModule]
    }]
  }], null, {
    lists: [{
      type: ViewChildren,
      args: [NzTransferListComponent]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDataSource: [{
      type: Input
    }],
    nzTitles: [{
      type: Input
    }],
    nzOperations: [{
      type: Input
    }],
    nzListStyle: [{
      type: Input
    }],
    nzShowSelectAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzItemUnit: [{
      type: Input
    }],
    nzItemsUnit: [{
      type: Input
    }],
    nzCanMove: [{
      type: Input
    }],
    nzRenderList: [{
      type: Input
    }],
    nzRender: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzFilterOption: [{
      type: Input
    }],
    nzSearchPlaceholder: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzTargetKeys: [{
      type: Input
    }],
    nzSelectedKeys: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOneWay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzChange: [{
      type: Output
    }],
    nzSearchChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }]
  });
})();
var NzTransferModule = class _NzTransferModule {
  static \u0275fac = function NzTransferModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTransferModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTransferModule,
    imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
    exports: [NzTransferComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
      exports: [NzTransferComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-entry/hrm-transfer.ts
var HrmTransfer = class _HrmTransfer {
  constructor() {
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.titles = input(["Ngu\u1ED3n", "\u0110\xEDch"], ...ngDevMode ? [{ debugName: "titles" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSearch = input(false, ...ngDevMode ? [{ debugName: "showSearch" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.changed = output();
  }
  static {
    this.\u0275fac = function HrmTransfer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTransfer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTransfer, selectors: [["hrm-transfer"]], hostAttrs: [1, "hrm-transfer"], inputs: { data: [1, "data"], titles: [1, "titles"], showSearch: [1, "showSearch"], disabled: [1, "disabled"] }, outputs: { changed: "changed" }, decls: 1, vars: 4, consts: [[3, "nzChange", "nzDataSource", "nzTitles", "nzDisabled", "nzShowSearch"]], template: function HrmTransfer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-transfer", 0);
        \u0275\u0275listener("nzChange", function HrmTransfer_Template_nz_transfer_nzChange_0_listener($event) {
          return ctx.changed.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzDataSource", ctx.data())("nzTitles", ctx.titles())("nzDisabled", ctx.disabled())("nzShowSearch", ctx.showSearch());
      }
    }, dependencies: [NzTransferModule, NzTransferComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTransfer, [{
    type: Component,
    args: [{
      selector: "hrm-transfer",
      imports: [NzTransferModule],
      template: `
    <nz-transfer
      [nzDataSource]="data()"
      [nzTitles]="titles()"
      [nzDisabled]="disabled()"
      [nzShowSearch]="showSearch()"
      (nzChange)="changed.emit($event)"></nz-transfer>
  `,
      host: { class: "hrm-transfer" }
    }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], titles: [{ type: Input, args: [{ isSignal: true, alias: "titles", required: false }] }], showSearch: [{ type: Input, args: [{ isSignal: true, alias: "showSearch", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], changed: [{ type: Output, args: ["changed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTransfer, { className: "HrmTransfer", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-transfer.ts", lineNumber: 18 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/transfer.ts
var _c02 = (a0, a1) => [a0, a1];
var SgDocTransfer = class _SgDocTransfer {
  constructor() {
    this.basic = [
      "Nguy\u1EC5n V\u0103n An",
      "Tr\u1EA7n Th\u1ECB B\xECnh",
      "L\xEA Ho\xE0ng C\u01B0\u1EDDng",
      "Ph\u1EA1m Thu Dung",
      "V\u0169 Minh \u0110\u1EE9c",
      "\u0110\u1ED7 Th\u1ECB H\xE0"
    ].map((n, i) => this.mk(n, i));
    this.searchable = [
      "Nguy\u1EC5n V\u0103n An",
      "Tr\u1EA7n Th\u1ECB B\xECnh",
      "L\xEA Ho\xE0ng C\u01B0\u1EDDng",
      "Ph\u1EA1m Thu Dung",
      "V\u0169 Minh \u0110\u1EE9c",
      "\u0110\u1ED7 Th\u1ECB H\xE0",
      "B\xF9i Quang Huy",
      "Ng\xF4 Th\u1ECB Lan"
    ].map((n, i) => this.mk(n, i));
    this.locked = [
      { key: "0", title: "Nguy\u1EC5n V\u0103n An", direction: "left" },
      { key: "1", title: "Tr\u1EA7n Th\u1ECB B\xECnh", direction: "left" },
      { key: "2", title: "L\xEA Ho\xE0ng C\u01B0\u1EDDng (ch\u1EDD duy\u1EC7t)", direction: "left", disabled: true },
      { key: "3", title: "Ph\u1EA1m Thu Dung", direction: "left" },
      { key: "4", title: "V\u0169 Minh \u0110\u1EE9c (tr\u01B0\u1EDFng nh\xF3m)", direction: "right", disabled: true },
      { key: "5", title: "\u0110\u1ED7 Th\u1ECB H\xE0", direction: "right" }
    ];
    this.when = [
      "docs.transfer.when1",
      "docs.transfer.when2",
      "docs.transfer.when3"
    ];
  }
  mk(name, i) {
    return { key: `${i}`, title: name, direction: i < 4 ? "left" : "right" };
  }
  static {
    this.\u0275fac = function SgDocTransfer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTransfer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTransfer, selectors: [["sg-doc-transfer"]], decls: 54, vars: 99, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [3, "data", "titles"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "data", "titles", "showSearch"], [3, "data", "titles", "disabled"]], template: function SgDocTransfer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275element(4, "hrm-transfer", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "sg-use", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "sg-do");
        \u0275\u0275element(14, "span", 6);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "sg-example", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row");
        \u0275\u0275element(30, "hrm-transfer", 2);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "sg-example", 8);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row");
        \u0275\u0275element(37, "hrm-transfer", 9);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "sg-example", 8);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row");
        \u0275\u0275element(44, "hrm-transfer", 2);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "sg-example", 8);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "sg-row");
        \u0275\u0275element(51, "hrm-transfer", 10);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 30, "docs.transfer.title"))("desc", \u0275\u0275pipeBind1(2, 32, "docs.transfer.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.basic)("titles", \u0275\u0275pureFunction2(84, _c02, \u0275\u0275pipeBind1(5, 34, "docs.transfer.colUnassigned"), \u0275\u0275pipeBind1(6, 36, "docs.transfer.colAssigned")));
        \u0275\u0275advance(4);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 38, "docs.transfer.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 40, "docs.transfer.behavior"))("avoid", \u0275\u0275pipeBind1(11, 42, "docs.transfer.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 44, "docs.transfer.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 46, "docs.transfer.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 48, "docs.transfer.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 50, "docs.transfer.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 52, "docs.transfer.exAssignT"))("desc", \u0275\u0275pipeBind1(28, 54, "docs.transfer.exAssignD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.basic)("titles", \u0275\u0275pureFunction2(87, _c02, \u0275\u0275pipeBind1(31, 56, "docs.transfer.colUnassigned"), \u0275\u0275pipeBind1(32, 58, "docs.transfer.colAssigned")));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 60, "docs.transfer.exSearchT"))("desc", \u0275\u0275pipeBind1(35, 62, "docs.transfer.exSearchD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.searchable)("titles", \u0275\u0275pureFunction2(90, _c02, \u0275\u0275pipeBind1(38, 64, "docs.transfer.colEmployees"), \u0275\u0275pipeBind1(39, 66, "docs.transfer.colMembers")))("showSearch", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 68, "docs.transfer.exLockedT"))("desc", \u0275\u0275pipeBind1(42, 70, "docs.transfer.exLockedD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.locked)("titles", \u0275\u0275pureFunction2(93, _c02, \u0275\u0275pipeBind1(45, 72, "docs.transfer.colUnassigned"), \u0275\u0275pipeBind1(46, 74, "docs.transfer.colAssigned")));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 76, "docs.transfer.exReadonlyT"))("desc", \u0275\u0275pipeBind1(49, 78, "docs.transfer.exReadonlyD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("data", ctx.basic)("titles", \u0275\u0275pureFunction2(96, _c02, \u0275\u0275pipeBind1(52, 80, "docs.transfer.colUnassigned"), \u0275\u0275pipeBind1(53, 82, "docs.transfer.colAssigned")))("disabled", true);
      }
    }, dependencies: [TranslateModule, HrmTransfer, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTransfer, [{
    type: Component,
    args: [{
      selector: "sg-doc-transfer",
      imports: [TranslateModule, HrmTransfer, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.transfer.title' | translate" [desc]="'docs.transfer.desc' | translate">

      <div sgOverview>
        <hrm-transfer [data]="basic" [titles]="[('docs.transfer.colUnassigned' | translate), ('docs.transfer.colAssigned' | translate)]" />
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.transfer.purpose' | translate"
          [when]="when"
          [behavior]="'docs.transfer.behavior' | translate"
          [avoid]="'docs.transfer.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.transfer.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.transfer.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.transfer.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.transfer.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.transfer.exAssignT' | translate"
          [desc]="'docs.transfer.exAssignD' | translate">
          <sg-row>
            <hrm-transfer [data]="basic" [titles]="[('docs.transfer.colUnassigned' | translate), ('docs.transfer.colAssigned' | translate)]" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.transfer.exSearchT' | translate"
          [desc]="'docs.transfer.exSearchD' | translate">
          <sg-row>
            <hrm-transfer [data]="searchable" [titles]="[('docs.transfer.colEmployees' | translate), ('docs.transfer.colMembers' | translate)]" [showSearch]="true" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.transfer.exLockedT' | translate"
          [desc]="'docs.transfer.exLockedD' | translate">
          <sg-row>
            <hrm-transfer [data]="locked" [titles]="[('docs.transfer.colUnassigned' | translate), ('docs.transfer.colAssigned' | translate)]" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.transfer.exReadonlyT' | translate"
          [desc]="'docs.transfer.exReadonlyD' | translate">
          <sg-row>
            <hrm-transfer [data]="basic" [titles]="[('docs.transfer.colUnassigned' | translate), ('docs.transfer.colAssigned' | translate)]" [disabled]="true" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTransfer, { className: "SgDocTransfer", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/transfer.ts", lineNumber: 67 });
})();
export {
  SgDocTransfer
};
//# sourceMappingURL=chunk-NLSYOOV7.js.map
