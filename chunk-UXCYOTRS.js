import {
  NzDividerComponent,
  NzDividerModule
} from "./chunk-ONEDVTQ4.js";
import {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
} from "./chunk-QSNE6SUP.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-3HHHYBKP.js";
import {
  NzPopoverDirective
} from "./chunk-BJZQPX5Z.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-WX4JWWTZ.js";
import "./chunk-7MILWWSJ.js";
import "./chunk-NGY4ECW2.js";
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
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import {
  NzInputDirective,
  NzInputModule,
  NzInputWrapperComponent
} from "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
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
import {
  NZ_FORM_SIZE
} from "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import {
  TinyColor
} from "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
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
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  __objRest,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  debounceTime,
  distinctUntilChanged,
  filter,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-color-picker.mjs
var _c0 = ["transform"];
var _forTrack0 = ($index, $item) => $item.key || $index;
function NgAntdColorPresetComponent_For_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ng-antd-color-block", 6);
    \u0275\u0275listener("nzOnClick", function NgAntdColorPresetComponent_For_3_For_3_Template_ng_antd_color_block_nzOnClick_0_listener() {
      const color_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPresetColor(color_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.value)("color", ctx_r2.getColorString(color_r5));
  }
}
function NgAntdColorPresetComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-collapse-panel", 3);
    \u0275\u0275listener("nzActiveChange", function NgAntdColorPresetComponent_For_3_Template_nz_collapse_panel_nzActiveChange_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPanelActiveChange($index_r2, $event));
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275repeaterCreate(2, NgAntdColorPresetComponent_For_3_For_3_Template, 1, 2, "ng-antd-color-block", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preset_r6 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzActive", ctx_r2.openPresets.has($index_r2))("nzHeader", preset_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(preset_r6.colors);
  }
}
function NgAntdColorPickerComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NgAntdColorPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgAntdColorPickerComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.panelRenderHeader);
  }
}
function NgAntdColorPickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "color-slider", 9);
    \u0275\u0275listener("nzOnChange", function NgAntdColorPickerComponent_Conditional_7_Template_color_slider_nzOnChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleChange($event, "alpha"));
    })("nzOnChangeComplete", function NgAntdColorPickerComponent_Conditional_7_Template_color_slider_nzOnChangeComplete_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nzOnChangeComplete.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r0.colorValue)("value", ctx_r0.toRgbString)("gradientColors", ctx_r0.gradientColors)("disabled", ctx_r0.disabled);
  }
}
function NgAntdColorPickerComponent_Conditional_9_ng_template_0_Template(rf, ctx) {
}
function NgAntdColorPickerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NgAntdColorPickerComponent_Conditional_9_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.panelRenderFooter);
  }
}
function NgAntdColorPickerComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "nz-divider", 10);
    \u0275\u0275elementStart(1, "ng-antd-color-preset", 11);
    \u0275\u0275listener("presetSelect", function NgAntdColorPickerComponent_Conditional_10_Template_ng_antd_color_preset_presetSelect_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.colorValue)("presets", ctx_r0.presets);
  }
}
function NzColorFormatComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "nz-input-wrapper", 10);
    \u0275\u0275element(2, "input", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.hex);
  }
}
function NzColorFormatComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 12);
    \u0275\u0275element(2, "nz-input-number", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275element(4, "nz-input-number", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275element(6, "nz-input-number", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.hsbH)("nzMin", 0)("nzMax", 360)("nzStep", 1)("nzPrecision", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.hsbS)("nzMin", 0)("nzMax", 100)("nzStep", 1)("nzFormatter", ctx_r0.formatterPercent)("nzParser", ctx_r0.parserPercent);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.hsbB)("nzMin", 0)("nzMax", 100)("nzStep", 1)("nzFormatter", ctx_r0.formatterPercent)("nzParser", ctx_r0.parserPercent);
  }
}
function NzColorFormatComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15);
    \u0275\u0275element(2, "nz-input-number", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275element(4, "nz-input-number", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275element(6, "nz-input-number", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.rgbR)("nzMin", 0)("nzMax", 255)("nzStep", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.rgbG)("nzMin", 0)("nzMax", 255)("nzStep", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.rgbB)("nzMin", 0)("nzMax", 255)("nzStep", 1);
  }
}
function NzColorFormatComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "nz-input-number", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r0.validateForm.controls.roundA)("nzMin", 0)("nzMax", 100)("nzStep", 1)("nzFormatter", ctx_r0.formatterPercent)("nzParser", ctx_r0.parserPercent);
  }
}
function NzColorPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-color-block", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzColor", ctx_r0.blockColor)("nzSize", ctx_r0.finalSize());
  }
}
function NzColorPickerComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzColorPickerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzColorPickerComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzFlipFlop);
  }
}
function NzColorPickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showText, " ");
  }
}
function NzColorPickerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ng-antd-color-picker", 7);
    \u0275\u0275listener("nzOnChange", function NzColorPickerComponent_ng_template_4_Template_ng_antd_color_picker_nzOnChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.colorChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const nzPanelRenderHeader_r3 = \u0275\u0275reference(7);
    const nzPanelRenderFooter_r4 = \u0275\u0275reference(9);
    \u0275\u0275property("value", ctx_r0.blockColor)("defaultValue", ctx_r0.nzDefaultValue)("disabled", ctx_r0.nzDisabled)("panelRenderHeader", nzPanelRenderHeader_r3)("panelRenderFooter", nzPanelRenderFooter_r4)("disabledAlpha", ctx_r0.nzDisabledAlpha)("presets", ctx_r0.nzPresets);
  }
}
function NzColorPickerComponent_ng_template_6_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzColorPickerComponent_ng_template_6_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function NzColorPickerComponent_ng_template_6_Conditional_0_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearColorHandle());
    });
    \u0275\u0275elementEnd();
  }
}
function NzColorPickerComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, NzColorPickerComponent_ng_template_6_Conditional_0_ng_template_2_Template, 1, 1, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NzColorPickerComponent_ng_template_6_Conditional_0_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzTitle);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzAllowClear ? 3 : -1);
  }
}
function NzColorPickerComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzColorPickerComponent_ng_template_6_Conditional_0_Template, 4, 2, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.nzTitle || ctx_r0.nzAllowClear ? 0 : -1);
  }
}
function NzColorPickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-color-format", 13);
    \u0275\u0275listener("formatChange", function NzColorPickerComponent_ng_template_8_Template_nz_color_format_formatChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formatChange($event));
    })("nzOnFormatChange", function NzColorPickerComponent_ng_template_8_Template_nz_color_format_nzOnFormatChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nzOnFormatChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("colorValue", ctx_r0.blockColor)("clearColor", ctx_r0.clearColor)("format", ctx_r0.nzFormat)("nzDisabledAlpha", ctx_r0.nzDisabledAlpha);
  }
}
var getRoundNumber = (value) => Math.round(Number(value || 0));
var convertHsb2Hsv = (color) => {
  if (color && typeof color === "object" && "h" in color && "b" in color) {
    const _a = color, {
      b
    } = _a, resets = __objRest(_a, [
      "b"
    ]);
    return __spreadProps(__spreadValues({}, resets), {
      v: b
    });
  }
  if (typeof color === "string" && /hsb/.test(color)) {
    return color.replace(/hsb/, "hsv");
  }
  return color;
};
var Color = class extends TinyColor {
  constructor(color) {
    super(convertHsb2Hsv(color));
  }
  toHsbString() {
    const hsb = this.toHsb();
    const saturation = getRoundNumber(hsb.s * 100);
    const lightness = getRoundNumber(hsb.b * 100);
    const hue = getRoundNumber(hsb.h);
    const alpha = hsb.a;
    const hsbString = `hsb(${hue}, ${saturation}%, ${lightness}%)`;
    const hsbaString = `hsba(${hue}, ${saturation}%, ${lightness}%, ${alpha.toFixed(alpha === 0 ? 0 : 2)})`;
    return alpha === 1 ? hsbString : hsbaString;
  }
  toHsb() {
    let hsv = this.toHsv();
    if (typeof this.originalInput === "object" && this.originalInput) {
      if ("h" in this.originalInput) {
        hsv = this.originalInput;
      }
    }
    const _a = hsv, {
      v: _
    } = _a, resets = __objRest(_a, [
      "v"
    ]);
    return __spreadProps(__spreadValues({}, resets), {
      b: hsv.v
    });
  }
};
var generateColor = (color) => {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
};
var defaultColor = generateColor("#1677ff");
function calculateColor(offset, containerRef, targetRef, color, type) {
  const {
    width,
    height
  } = containerRef.getBoundingClientRect();
  const {
    width: targetWidth,
    height: targetHeight
  } = targetRef.getBoundingClientRect();
  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;
  const saturation = (offset.x + centerOffsetX) / width;
  const bright = 1 - (offset.y + centerOffsetY) / height;
  const hsb = color?.toHsb() || {
    a: 0,
    h: 0,
    s: 0,
    b: 0
  };
  const alphaOffset = saturation;
  const hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type) {
    switch (type) {
      case "hue":
        return generateColor(__spreadProps(__spreadValues({}, hsb), {
          h: hueOffset <= 0 ? 0 : hueOffset
        }));
      case "alpha":
        return generateColor(__spreadProps(__spreadValues({}, hsb), {
          a: alphaOffset <= 0 ? 0 : alphaOffset
        }));
    }
  }
  return generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
}
var calculateOffset = (containerRef, targetRef, color, type) => {
  const {
    width,
    height
  } = containerRef.getBoundingClientRect();
  const {
    width: targetWidth,
    height: targetHeight
  } = targetRef.getBoundingClientRect();
  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;
  const hsb = color?.toHsb() || {
    a: 0,
    h: 0,
    s: 0,
    b: 0
  };
  if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
    return null;
  }
  if (type) {
    switch (type) {
      case "hue":
        return {
          x: hsb.h / 360 * width - centerOffsetX,
          y: -centerOffsetY / 3
        };
      case "alpha":
        return {
          x: hsb.a * width - centerOffsetX,
          y: -centerOffsetY / 3
        };
    }
  }
  return {
    x: hsb.s * width - centerOffsetX,
    y: (1 - hsb.b) * height - centerOffsetY
  };
};
var NgAntdColorBlockComponent = class _NgAntdColorBlockComponent {
  color = defaultColor.toHsbString();
  value = null;
  nzOnClick = new EventEmitter();
  get isChecked() {
    if (!this.value) {
      return false;
    }
    const current = generateColor(this.value).toHexString();
    const colorPreset = generateColor(this.color).toHexString();
    return current === colorPreset;
  }
  get isBright() {
    const {
      r,
      g,
      b,
      a
    } = generateColor(this.color).toRgb();
    if (a !== void 0 && a <= 0.5) return true;
    const brightness = r * 0.299 + g * 0.587 + b * 0.114;
    return brightness > 192;
  }
  static \u0275fac = function NgAntdColorBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgAntdColorBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NgAntdColorBlockComponent,
    selectors: [["ng-antd-color-block"]],
    hostAttrs: [1, "ant-color-picker-color-block", "ant-color-picker-presets-color"],
    hostVars: 4,
    hostBindings: function NgAntdColorBlockComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NgAntdColorBlockComponent_click_HostBindingHandler() {
          return ctx.nzOnClick.emit();
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-color-picker-presets-color-checked", ctx.isChecked)("ant-color-picker-presets-color-bright", ctx.isBright);
      }
    },
    inputs: {
      color: "color",
      value: "value"
    },
    outputs: {
      nzOnClick: "nzOnClick"
    },
    decls: 1,
    vars: 2,
    consts: [[1, "ant-color-picker-color-block-inner"]],
    template: function NgAntdColorBlockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.color);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAntdColorBlockComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "ng-antd-color-block",
      template: `<div class="ant-color-picker-color-block-inner" [style.background-color]="color"></div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-color-picker-color-block ant-color-picker-presets-color",
        "[class.ant-color-picker-presets-color-checked]": "isChecked",
        "[class.ant-color-picker-presets-color-bright]": "isBright",
        "(click)": "nzOnClick.emit()"
      }
    }]
  }], null, {
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    nzOnClick: [{
      type: Output
    }]
  });
})();
var HandlerDirective = class _HandlerDirective {
  color = null;
  size = "default";
  static \u0275fac = function HandlerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HandlerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HandlerDirective,
    selectors: [["color-handler"]],
    hostAttrs: [1, "ant-color-picker-handler"],
    hostVars: 4,
    hostBindings: function HandlerDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.color);
        \u0275\u0275classProp("ant-color-picker-handler-sm", ctx.size === "small");
      }
    },
    inputs: {
      color: "color",
      size: "size"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HandlerDirective, [{
    type: Directive,
    args: [{
      selector: "color-handler",
      host: {
        class: "ant-color-picker-handler",
        "[style.background-color]": "color",
        "[class.ant-color-picker-handler-sm]": `size === 'small'`
      }
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
function getPosition$1(e) {
  const obj = "touches" in e ? e.touches[0] : e;
  const scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  const scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
var PickerComponent = class _PickerComponent {
  document = inject(DOCUMENT);
  cdr = inject(ChangeDetectorRef);
  containerRef = inject(ElementRef);
  transformRef;
  color = null;
  nzOnChange = new EventEmitter();
  nzOnChangeComplete = new EventEmitter();
  disabled = false;
  offsetValue = {
    x: 0,
    y: 0
  };
  dragRef = false;
  mouseMoveRef = () => null;
  mouseUpRef = () => null;
  toRgbString() {
    return this.color?.toRgbString();
  }
  toHsb() {
    return `hsl(${this.color?.toHsb().h},100%, 50%)`;
  }
  ngOnInit() {
    this.document.removeEventListener("mousemove", this.mouseMoveRef);
    this.document.removeEventListener("mouseup", this.mouseUpRef);
    this.document.removeEventListener("touchmove", this.mouseMoveRef);
    this.document.removeEventListener("touchend", this.mouseUpRef);
    this.mouseMoveRef = () => null;
    this.mouseUpRef = () => null;
  }
  ngOnChanges(changes) {
    const {
      color
    } = changes;
    if (color) {
      if (!this.dragRef && this.containerRef && this.transformRef) {
        const calcOffset = calculateOffset(this.containerRef.nativeElement, this.transformRef.nativeElement, this.color);
        if (calcOffset) {
          this.offsetValue = calcOffset;
          this.cdr.detectChanges();
        }
      }
    }
  }
  ngAfterViewInit() {
    if (!this.dragRef && this.containerRef && this.transformRef) {
      const calcOffset = calculateOffset(this.containerRef.nativeElement, this.transformRef.nativeElement, this.color);
      if (calcOffset) {
        this.offsetValue = calcOffset;
        this.cdr.detectChanges();
      }
    }
  }
  dragStartHandle(e) {
    this.onDragStart(e);
  }
  updateOffset = (e, direction = "y") => {
    const {
      pageX,
      pageY
    } = getPosition$1(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height
    } = this.containerRef?.nativeElement?.getBoundingClientRect() || {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const {
      width: targetWidth,
      height: targetHeight
    } = this.transformRef?.nativeElement?.getBoundingClientRect() || {
      width: 0,
      height: 0
    };
    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;
    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    const calcOffset = {
      x: offsetX,
      y: direction === "x" ? this.offsetValue.y : offsetY
    };
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return;
    }
    this.offsetValue = calcOffset;
    this.nzOnChange.emit(calculateColor(calcOffset, this.containerRef.nativeElement, this.transformRef.nativeElement, this.color));
    this.cdr.detectChanges();
  };
  onDragMove = (e) => {
    e.preventDefault();
    this.updateOffset(e);
  };
  onDragStop = (e) => {
    e.preventDefault();
    this.dragRef = false;
    this.document.removeEventListener("mousemove", this.onDragMove);
    this.document.removeEventListener("mouseup", this.mouseUpRef);
    this.document.removeEventListener("touchmove", this.mouseMoveRef);
    this.document.removeEventListener("touchend", this.mouseUpRef);
    this.mouseMoveRef = () => null;
    this.mouseUpRef = () => null;
    this.nzOnChangeComplete?.emit();
  };
  onDragStart = (e) => {
    if (this.disabled) {
      return;
    }
    this.updateOffset(e);
    this.dragRef = true;
    this.document.addEventListener("mousemove", this.onDragMove);
    this.document.addEventListener("mouseup", this.onDragStop);
    this.document.addEventListener("touchmove", this.onDragMove);
    this.document.addEventListener("touchend", this.onDragStop);
    this.mouseMoveRef = this.onDragMove;
    this.mouseUpRef = this.onDragStop;
    this.cdr.markForCheck();
  };
  static \u0275fac = function PickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function PickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.transformRef = _t.first);
      }
    },
    hostAttrs: [1, "ant-color-picker-select"],
    hostBindings: function PickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function PickerComponent_mousedown_HostBindingHandler($event) {
          return ctx.dragStartHandle($event);
        })("touchstart", function PickerComponent_touchstart_HostBindingHandler($event) {
          return ctx.dragStartHandle($event);
        });
      }
    },
    inputs: {
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      nzOnChange: "nzOnChange",
      nzOnChangeComplete: "nzOnChangeComplete"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 7,
    consts: [["transform", ""], [1, "ant-color-picker-palette"], [1, "ant-color-picker-transform"], [3, "color"], [1, "ant-color-picker-saturation"]],
    template: function PickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0);
        \u0275\u0275element(3, "color-handler", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.offsetValue.x, "px")("top", ctx.offsetValue.y, "px");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", ctx.toRgbString());
        \u0275\u0275advance();
        \u0275\u0275styleProp("background-color", ctx.toHsb());
      }
    },
    dependencies: [HandlerDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "color-picker",
      imports: [HandlerDirective],
      template: `
    <div class="ant-color-picker-palette">
      <div #transform class="ant-color-picker-transform" [style.left.px]="offsetValue.x" [style.top.px]="offsetValue.y">
        <color-handler [color]="toRgbString()" />
      </div>
      <div class="ant-color-picker-saturation" [style.background-color]="toHsb()"></div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-color-picker-select",
        "(mousedown)": "dragStartHandle($event)",
        "(touchstart)": "dragStartHandle($event)"
      }
    }]
  }], null, {
    transformRef: [{
      type: ViewChild,
      args: ["transform", {
        static: true
      }]
    }],
    color: [{
      type: Input
    }],
    nzOnChange: [{
      type: Output
    }],
    nzOnChangeComplete: [{
      type: Output
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var GradientDirective = class _GradientDirective {
  colors = [];
  direction = "to right";
  type = "hue";
  gradientColors = "";
  ngOnInit() {
    this.useMemo();
  }
  ngOnChanges(changes) {
    const {
      colors,
      type
    } = changes;
    if (colors || type) {
      this.useMemo();
    }
  }
  useMemo() {
    this.gradientColors = this.colors.map((color, idx) => {
      const result = generateColor(color);
      if (this.type === "alpha" && idx === this.colors.length - 1) {
        result.setAlpha(1);
      }
      return result.toRgbString();
    }).join(",");
  }
  static \u0275fac = function GradientDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GradientDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _GradientDirective,
    selectors: [["color-gradient"]],
    hostAttrs: [1, "ant-color-picker-gradient"],
    hostVars: 2,
    hostBindings: function GradientDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("background", "linear-gradient(" + ctx.direction + ", " + ctx.gradientColors + ")");
      }
    },
    inputs: {
      colors: "colors",
      direction: "direction",
      type: "type"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradientDirective, [{
    type: Directive,
    args: [{
      selector: "color-gradient",
      host: {
        class: "ant-color-picker-gradient",
        "[style.background]": `'linear-gradient(' + direction + ', ' + gradientColors + ')'`
      }
    }]
  }], null, {
    colors: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
function getPosition(e) {
  const obj = "touches" in e ? e.touches[0] : e;
  const scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  const scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
var SliderComponent = class _SliderComponent {
  document = inject(DOCUMENT);
  cdr = inject(ChangeDetectorRef);
  containerRef = inject(ElementRef);
  transformRef;
  gradientColors = [];
  direction = "to right";
  type = "hue";
  color = null;
  value = null;
  disabled = false;
  nzOnChange = new EventEmitter();
  nzOnChangeComplete = new EventEmitter();
  offsetValue = {
    x: 0,
    y: 0
  };
  dragRef = false;
  mouseMoveRef = () => null;
  mouseUpRef = () => null;
  ngOnInit() {
    this.document.removeEventListener("mousemove", this.mouseMoveRef);
    this.document.removeEventListener("mouseup", this.mouseUpRef);
    this.document.removeEventListener("touchmove", this.mouseMoveRef);
    this.document.removeEventListener("touchend", this.mouseUpRef);
    this.mouseMoveRef = () => null;
    this.mouseUpRef = () => null;
  }
  ngOnChanges(changes) {
    const {
      color
    } = changes;
    if (color) {
      if (!this.dragRef && this.containerRef && this.transformRef) {
        const calcOffset = calculateOffset(this.containerRef.nativeElement, this.transformRef.nativeElement, this.color, this.type);
        if (calcOffset) {
          this.offsetValue = calcOffset;
          this.cdr.detectChanges();
        }
      }
    }
  }
  ngAfterViewInit() {
    if (!this.dragRef && this.containerRef && this.transformRef) {
      const calcOffset = calculateOffset(this.containerRef.nativeElement, this.transformRef.nativeElement, this.color, this.type);
      if (calcOffset) {
        this.offsetValue = calcOffset;
        this.cdr.detectChanges();
      }
    }
  }
  dragStartHandle(e) {
    this.onDragStart(e);
  }
  updateOffset = (e, direction = "x") => {
    const {
      pageX,
      pageY
    } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height
    } = this.containerRef?.nativeElement?.getBoundingClientRect() || {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const {
      width: targetWidth,
      height: targetHeight
    } = this.transformRef?.nativeElement?.getBoundingClientRect() || {
      width: 0,
      height: 0
    };
    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;
    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    const calcOffset = {
      x: offsetX,
      y: direction === "x" ? this.offsetValue.y : offsetY
    };
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return;
    }
    this.offsetValue = calcOffset;
    this.nzOnChange.emit(calculateColor(calcOffset, this.containerRef.nativeElement, this.transformRef.nativeElement, this.color, this.type));
    this.cdr.detectChanges();
  };
  onDragMove = (e) => {
    e.preventDefault();
    this.updateOffset(e);
  };
  onDragStop = (e) => {
    e.preventDefault();
    this.dragRef = false;
    this.document.removeEventListener("mousemove", this.onDragMove);
    this.document.removeEventListener("mouseup", this.mouseUpRef);
    this.document.removeEventListener("touchmove", this.mouseMoveRef);
    this.document.removeEventListener("touchend", this.mouseUpRef);
    this.mouseMoveRef = () => null;
    this.mouseUpRef = () => null;
    this.nzOnChangeComplete?.emit(this.type);
  };
  onDragStart = (e) => {
    if (this.disabled) {
      return;
    }
    this.updateOffset(e);
    this.dragRef = true;
    this.document.addEventListener("mousemove", this.onDragMove);
    this.document.addEventListener("mouseup", this.onDragStop);
    this.document.addEventListener("touchmove", this.onDragMove);
    this.document.addEventListener("touchend", this.onDragStop);
    this.mouseMoveRef = this.onDragMove;
    this.mouseUpRef = this.onDragStop;
    this.cdr.markForCheck();
  };
  static \u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SliderComponent,
    selectors: [["color-slider"]],
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.transformRef = _t.first);
      }
    },
    hostAttrs: [1, "ant-color-picker-slider"],
    hostVars: 2,
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function SliderComponent_mousedown_HostBindingHandler($event) {
          return ctx.dragStartHandle($event);
        })("touchstart", function SliderComponent_touchstart_HostBindingHandler($event) {
          return ctx.dragStartHandle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap("ant-color-picker-slider-" + ctx.type);
      }
    },
    inputs: {
      gradientColors: "gradientColors",
      direction: "direction",
      type: "type",
      color: "color",
      value: "value",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      nzOnChange: "nzOnChange",
      nzOnChangeComplete: "nzOnChangeComplete"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 8,
    consts: [["transform", ""], [1, "ant-color-picker-palette"], [1, "ant-color-picker-transform"], ["size", "small", 3, "color"], [3, "colors", "direction", "type"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0);
        \u0275\u0275element(3, "color-handler", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "color-gradient", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.offsetValue.x, "px")("top", ctx.offsetValue.y, "px");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("colors", ctx.gradientColors)("direction", ctx.direction)("type", ctx.type);
      }
    },
    dependencies: [GradientDirective, HandlerDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "color-slider",
      imports: [GradientDirective, HandlerDirective],
      template: `
    <div class="ant-color-picker-palette">
      <div #transform class="ant-color-picker-transform" [style.left.px]="offsetValue.x" [style.top.px]="offsetValue.y">
        <color-handler size="small" [color]="value" />
      </div>
      <color-gradient [colors]="gradientColors" [direction]="direction" [type]="type" />
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-color-picker-slider",
        "[class]": `'ant-color-picker-slider-' + type`,
        "(mousedown)": `dragStartHandle($event)`,
        "(touchstart)": `dragStartHandle($event)`
      }
    }]
  }], null, {
    transformRef: [{
      type: ViewChild,
      args: ["transform", {
        static: true
      }]
    }],
    gradientColors: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    color: [{
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
    nzOnChange: [{
      type: Output
    }],
    nzOnChangeComplete: [{
      type: Output
    }]
  });
})();
var NgAntdColorPresetComponent = class _NgAntdColorPresetComponent {
  cdr = inject(ChangeDetectorRef);
  openPresets = /* @__PURE__ */ new Set();
  presets = [];
  value = null;
  presetSelect = new EventEmitter();
  ngOnInit() {
    this.presets.forEach((preset, index) => {
      if (preset.defaultOpen) {
        this.openPresets.add(index);
      }
    });
  }
  onPanelActiveChange(index, active) {
    if (active) {
      this.openPresets.add(index);
    } else {
      this.openPresets.delete(index);
    }
    this.cdr.markForCheck();
  }
  selectPresetColor(color) {
    const colorInstance = typeof color === "string" ? generateColor(color) : color;
    this.presetSelect.emit(colorInstance);
  }
  getColorString(color) {
    if (typeof color === "string") {
      return color;
    }
    return color.toRgbString();
  }
  static \u0275fac = function NgAntdColorPresetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgAntdColorPresetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NgAntdColorPresetComponent,
    selectors: [["ng-antd-color-preset"]],
    hostAttrs: [1, "ant-color-picker-presets-wrapper"],
    inputs: {
      presets: "presets",
      value: "value"
    },
    outputs: {
      presetSelect: "presetSelect"
    },
    decls: 4,
    vars: 0,
    consts: [[1, "ant-color-picker-presets"], ["nzGhost", ""], [3, "nzActive", "nzHeader"], [3, "nzActiveChange", "nzActive", "nzHeader"], [1, "ant-color-picker-presets-items"], [3, "value", "color"], [3, "nzOnClick", "value", "color"]],
    template: function NgAntdColorPresetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nz-collapse", 1);
        \u0275\u0275repeaterCreate(2, NgAntdColorPresetComponent_For_3_Template, 4, 2, "nz-collapse-panel", 2, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.presets);
      }
    },
    dependencies: [NzCollapseModule, NzCollapsePanelComponent, NzCollapseComponent, NgAntdColorBlockComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAntdColorPresetComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "ng-antd-color-preset",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzCollapseModule, NgAntdColorBlockComponent],
      template: `
    <div class="ant-color-picker-presets">
      <nz-collapse nzGhost>
        @for (preset of presets; track preset.key || $index) {
          <nz-collapse-panel
            [nzActive]="openPresets.has($index)"
            (nzActiveChange)="onPanelActiveChange($index, $event)"
            [nzHeader]="preset.label"
          >
            <div class="ant-color-picker-presets-items">
              @for (color of preset.colors; track $index) {
                <ng-antd-color-block
                  [value]="value"
                  [color]="getColorString(color)"
                  (nzOnClick)="selectPresetColor(color)"
                />
              }
            </div>
          </nz-collapse-panel>
        }
      </nz-collapse>
    </div>
  `,
      host: {
        class: "ant-color-picker-presets-wrapper"
      }
    }]
  }], null, {
    presets: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    presetSelect: [{
      type: Output
    }]
  });
})();
var NgAntdColorPickerComponent = class _NgAntdColorPickerComponent {
  cdr = inject(ChangeDetectorRef);
  value = "";
  defaultValue;
  nzOnChange = new EventEmitter();
  nzOnChangeComplete = new EventEmitter();
  panelRenderHeader = null;
  panelRenderFooter = null;
  disabledAlpha = false;
  disabled = false;
  presets = null;
  colorValue = null;
  alphaColor = "";
  hueColor = ["rgb(255, 0, 0) 0%", "rgb(255, 255, 0) 17%", "rgb(0, 255, 0) 33%", "rgb(0, 255, 255) 50%", "rgb(0, 0, 255) 67%", "rgb(255, 0, 255) 83%", "rgb(255, 0, 0) 100%"];
  gradientColors = ["rgba(255, 0, 4, 0) 0%", this.alphaColor];
  toRgbString = this.colorValue?.toRgbString() || "";
  ngOnInit() {
    this.setColorValue(this.value);
  }
  ngOnChanges(changes) {
    const {
      value,
      defaultValue
    } = changes;
    if (value || defaultValue) {
      this.setColorValue(this.value);
    }
  }
  hasValue(value) {
    return !!value;
  }
  setColorValue(color) {
    let mergeState;
    if (this.hasValue(color)) {
      mergeState = color;
    } else if (this.hasValue(this.defaultValue)) {
      mergeState = this.defaultValue;
    } else {
      mergeState = defaultColor;
    }
    this.colorValue = generateColor(mergeState);
    this.setAlphaColor(this.colorValue);
    this.toRgbString = this.colorValue?.toRgbString() || "";
    this.cdr.detectChanges();
  }
  setAlphaColor(colorValue) {
    const rgb = generateColor(colorValue.toRgbString());
    this.alphaColor = rgb.toRgbString();
    this.gradientColors = ["rgba(255, 0, 4, 0) 0%", this.alphaColor];
    this.cdr.markForCheck();
  }
  handleChange(color, type) {
    this.setColorValue(color);
    this.nzOnChange.emit({
      color,
      type
    });
  }
  static \u0275fac = function NgAntdColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgAntdColorPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NgAntdColorPickerComponent,
    selectors: [["ng-antd-color-picker"]],
    hostAttrs: [1, "ant-color-picker-inner"],
    inputs: {
      value: "value",
      defaultValue: "defaultValue",
      panelRenderHeader: "panelRenderHeader",
      panelRenderFooter: "panelRenderFooter",
      disabledAlpha: [2, "disabledAlpha", "disabledAlpha", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      presets: "presets"
    },
    outputs: {
      nzOnChange: "nzOnChange",
      nzOnChangeComplete: "nzOnChangeComplete"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 11,
    vars: 15,
    consts: [[1, "ant-color-picker-inner-content"], [1, "ant-color-picker-panel"], [3, "ngTemplateOutlet"], [3, "nzOnChange", "nzOnChangeComplete", "color", "disabled"], [1, "ant-color-picker-slider-container"], [1, "ant-color-picker-slider-group"], [3, "nzOnChange", "nzOnChangeComplete", "color", "value", "gradientColors", "disabled"], ["type", "alpha", 3, "color", "value", "gradientColors", "disabled"], [3, "color"], ["type", "alpha", 3, "nzOnChange", "nzOnChangeComplete", "color", "value", "gradientColors", "disabled"], ["nzSize", "small"], [3, "presetSelect", "value", "presets"]],
    template: function NgAntdColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, NgAntdColorPickerComponent_Conditional_2_Template, 1, 1, null, 2);
        \u0275\u0275elementStart(3, "color-picker", 3);
        \u0275\u0275listener("nzOnChange", function NgAntdColorPickerComponent_Template_color_picker_nzOnChange_3_listener($event) {
          return ctx.handleChange($event);
        })("nzOnChangeComplete", function NgAntdColorPickerComponent_Template_color_picker_nzOnChangeComplete_3_listener($event) {
          return ctx.nzOnChangeComplete.emit($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "color-slider", 6);
        \u0275\u0275listener("nzOnChange", function NgAntdColorPickerComponent_Template_color_slider_nzOnChange_6_listener($event) {
          return ctx.handleChange($event, "hue");
        })("nzOnChangeComplete", function NgAntdColorPickerComponent_Template_color_slider_nzOnChangeComplete_6_listener($event) {
          return ctx.nzOnChangeComplete.emit($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, NgAntdColorPickerComponent_Conditional_7_Template, 1, 4, "color-slider", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "ng-antd-color-block", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, NgAntdColorPickerComponent_Conditional_9_Template, 1, 1, null, 2);
        \u0275\u0275conditionalCreate(10, NgAntdColorPickerComponent_Conditional_10_Template, 2, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance();
        \u0275\u0275classProp("ant-color-picker-panel-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.panelRenderHeader ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", ctx.colorValue)("disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("ant-color-picker-slider-group-disabled-alpha", ctx.disabledAlpha);
        \u0275\u0275advance();
        \u0275\u0275property("color", ctx.colorValue)("value", "hsl(" + (ctx.colorValue == null ? null : (tmp_6_0 = ctx.colorValue.toHsb()) == null ? null : tmp_6_0.h) + ",100%, 50%)")("gradientColors", ctx.hueColor)("disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.disabledAlpha ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", ctx.toRgbString);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.panelRenderFooter ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.presets && ctx.presets.length > 0 ? 10 : -1);
      }
    },
    dependencies: [PickerComponent, SliderComponent, NgAntdColorBlockComponent, NgTemplateOutlet, NgAntdColorPresetComponent, NzDividerModule, NzDividerComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAntdColorPickerComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "ng-antd-color-picker",
      imports: [PickerComponent, SliderComponent, NgAntdColorBlockComponent, NgTemplateOutlet, NgAntdColorPresetComponent, NzDividerModule],
      template: `
    <div class="ant-color-picker-inner-content">
      <div class="ant-color-picker-panel" [class.ant-color-picker-panel-disabled]="disabled">
        @if (panelRenderHeader) {
          <ng-template [ngTemplateOutlet]="panelRenderHeader" />
        }
        <color-picker
          [color]="colorValue"
          (nzOnChange)="handleChange($event)"
          [disabled]="disabled"
          (nzOnChangeComplete)="nzOnChangeComplete.emit($event)"
        />
        <div class="ant-color-picker-slider-container">
          <div
            class="ant-color-picker-slider-group"
            [class.ant-color-picker-slider-group-disabled-alpha]="disabledAlpha"
          >
            <color-slider
              [color]="colorValue"
              [value]="'hsl(' + colorValue?.toHsb()?.h + ',100%, 50%)'"
              [gradientColors]="hueColor"
              (nzOnChange)="handleChange($event, 'hue')"
              [disabled]="disabled"
              (nzOnChangeComplete)="nzOnChangeComplete.emit($event)"
            />
            @if (!disabledAlpha) {
              <color-slider
                type="alpha"
                [color]="colorValue"
                [value]="toRgbString"
                [gradientColors]="gradientColors"
                (nzOnChange)="handleChange($event, 'alpha')"
                [disabled]="disabled"
                (nzOnChangeComplete)="nzOnChangeComplete.emit($event)"
              />
            }
          </div>
          <ng-antd-color-block [color]="toRgbString" />
        </div>
      </div>
      @if (panelRenderFooter) {
        <ng-template [ngTemplateOutlet]="panelRenderFooter" />
      }
      @if (presets && presets.length > 0) {
        <nz-divider nzSize="small" />
        <ng-antd-color-preset [value]="colorValue" [presets]="presets" (presetSelect)="handleChange($event)" />
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-color-picker-inner"
      }
    }]
  }], null, {
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    nzOnChange: [{
      type: Output
    }],
    nzOnChangeComplete: [{
      type: Output
    }],
    panelRenderHeader: [{
      type: Input
    }],
    panelRenderFooter: [{
      type: Input
    }],
    disabledAlpha: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    presets: [{
      type: Input
    }]
  });
})();
var NgAntdColorPickerModule = class _NgAntdColorPickerModule {
  static \u0275fac = function NgAntdColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgAntdColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgAntdColorPickerModule,
    imports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent, NgAntdColorPresetComponent],
    exports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent, NgAntdColorPresetComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NgAntdColorPickerComponent, NgAntdColorPresetComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgAntdColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent, NgAntdColorPresetComponent],
      exports: [NgAntdColorPickerComponent, NgAntdColorBlockComponent, NgAntdColorPresetComponent]
    }]
  }], null, null);
})();
var NzColorBlockComponent = class _NzColorBlockComponent {
  nzColor = defaultColor.toHexString();
  nzSize = "default";
  nzOnClick = new EventEmitter();
  static \u0275fac = function NzColorBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColorBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzColorBlockComponent,
    selectors: [["nz-color-block"]],
    hostAttrs: [1, "ant-color-picker-inline"],
    hostVars: 4,
    hostBindings: function NzColorBlockComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-color-picker-inline-sm", ctx.nzSize === "small")("ant-color-picker-inline-lg", ctx.nzSize === "large");
      }
    },
    inputs: {
      nzColor: "nzColor",
      nzSize: "nzSize"
    },
    outputs: {
      nzOnClick: "nzOnClick"
    },
    exportAs: ["nzColorBlock"],
    decls: 1,
    vars: 1,
    consts: [[3, "nzOnClick", "color"]],
    template: function NzColorBlockComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ng-antd-color-block", 0);
        \u0275\u0275listener("nzOnClick", function NzColorBlockComponent_Template_ng_antd_color_block_nzOnClick_0_listener() {
          return ctx.nzOnClick.emit();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("color", ctx.nzColor);
      }
    },
    dependencies: [NgAntdColorPickerModule, NgAntdColorBlockComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColorBlockComponent, [{
    type: Component,
    args: [{
      selector: "nz-color-block",
      exportAs: "nzColorBlock",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgAntdColorPickerModule],
      template: `<ng-antd-color-block [color]="nzColor" (nzOnClick)="nzOnClick.emit()" />`,
      host: {
        class: "ant-color-picker-inline",
        "[class.ant-color-picker-inline-sm]": `nzSize === 'small'`,
        "[class.ant-color-picker-inline-lg]": `nzSize === 'large'`
      }
    }]
  }], null, {
    nzColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzOnClick: [{
      type: Output
    }]
  });
})();
var NzColorFormatComponent = class _NzColorFormatComponent {
  destroyRef = inject(DestroyRef);
  formBuilder = inject(FormBuilder);
  format = null;
  colorValue = "";
  clearColor = false;
  nzDisabledAlpha = false;
  formatChange = new EventEmitter();
  nzOnFormatChange = new EventEmitter();
  validateForm = this.formBuilder.nonNullable.group({
    isFormat: this.formBuilder.control("hex"),
    hex: this.formBuilder.control("1677FF", hexValidator),
    hsbH: 215,
    hsbS: 91,
    hsbB: 100,
    rgbR: 22,
    rgbG: 119,
    rgbB: 255,
    roundA: 100
  });
  formatterPercent = (value) => `${value} %`;
  parserPercent = (value) => +value.replace(" %", "");
  ngOnInit() {
    this.validateForm.valueChanges.pipe(filter(() => this.validateForm.valid), debounceTime(200), distinctUntilChanged((prev, current) => Object.keys(prev).every((key) => prev[key] === current[key])), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      let color = "";
      switch (value.isFormat) {
        case "hsb":
          color = generateColor({
            h: Number(value.hsbH),
            s: Number(value.hsbS) / 100,
            b: Number(value.hsbB) / 100,
            a: Number(value.roundA) / 100
          }).toHsbString();
          break;
        case "rgb":
          color = generateColor({
            r: Number(value.rgbR),
            g: Number(value.rgbG),
            b: Number(value.rgbB),
            a: Number(value.roundA) / 100
          }).toRgbString();
          break;
        default: {
          const hex = generateColor(value.hex);
          const hexColor = generateColor({
            r: hex.r,
            g: hex.g,
            b: hex.b,
            a: Number(value.roundA) / 100
          });
          color = hexColor.getAlpha() < 1 ? hexColor.toHex8String() : hexColor.toHexString();
          break;
        }
      }
      this.formatChange.emit({
        color,
        format: value.isFormat || this.format || "hex"
      });
    });
    this.validateForm.get("isFormat")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.nzOnFormatChange.emit(value);
    });
  }
  ngOnChanges(changes) {
    const {
      colorValue,
      format,
      clearColor
    } = changes;
    if (colorValue) {
      const colorValue2 = {
        hex: generateColor(this.colorValue).toHex(),
        hsbH: Math.round(generateColor(this.colorValue).toHsb().h),
        hsbS: Math.round(generateColor(this.colorValue).toHsb().s * 100),
        hsbB: Math.round(generateColor(this.colorValue).toHsb().b * 100),
        rgbR: Math.round(generateColor(this.colorValue).r),
        rgbG: Math.round(generateColor(this.colorValue).g),
        rgbB: Math.round(generateColor(this.colorValue).b),
        roundA: Math.round(generateColor(this.colorValue).roundA * 100)
      };
      this.validateForm.patchValue(colorValue2);
    }
    if (format && this.format) {
      this.validateForm.get("isFormat")?.patchValue(this.format);
    }
    if (clearColor && this.clearColor) {
      this.validateForm.get("roundA")?.patchValue(0);
    }
  }
  static \u0275fac = function NzColorFormatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColorFormatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzColorFormatComponent,
    selectors: [["nz-color-format"]],
    hostAttrs: [1, "ant-color-picker-input-container"],
    inputs: {
      format: "format",
      colorValue: "colorValue",
      clearColor: [2, "clearColor", "clearColor", booleanAttribute],
      nzDisabledAlpha: [2, "nzDisabledAlpha", "nzDisabledAlpha", booleanAttribute]
    },
    outputs: {
      formatChange: "formatChange",
      nzOnFormatChange: "nzOnFormatChange"
    },
    exportAs: ["nzColorFormat"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 10,
    vars: 3,
    consts: [[1, "ant-color-picker-format-select"], ["nzVariant", "borderless", "nzSize", "small", 3, "formControl"], ["nzValue", "hex", "nzLabel", "HEX"], ["nzValue", "hsb", "nzLabel", "HSB"], ["nzValue", "rgb", "nzLabel", "RGB"], [1, "ant-color-picker-input"], [1, "ant-color-picker-hex-input"], [1, "ant-color-picker-hsb-input"], [1, "ant-color-picker-rgb-input"], [1, "ant-color-picker-steppers", "ant-color-picker-alpha-input"], ["nzPrefix", "#"], ["nz-input", "", "nzSize", "small", 3, "formControl"], [1, "ant-color-picker-steppers", "ant-color-picker-hsb-input"], ["nzSize", "small", 3, "formControl", "nzMin", "nzMax", "nzStep", "nzPrecision"], ["nzSize", "small", 3, "formControl", "nzMin", "nzMax", "nzStep", "nzFormatter", "nzParser"], [1, "ant-color-picker-steppers", "ant-color-picker-rgb-input"], ["nzSize", "small", 3, "formControl", "nzMin", "nzMax", "nzStep"]],
    template: function NzColorFormatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nz-select", 1);
        \u0275\u0275element(2, "nz-option", 2)(3, "nz-option", 3)(4, "nz-option", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275conditionalCreate(6, NzColorFormatComponent_Case_6_Template, 3, 1, "div", 6)(7, NzColorFormatComponent_Case_7_Template, 7, 17, "div", 7)(8, NzColorFormatComponent_Case_8_Template, 7, 12, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, NzColorFormatComponent_Conditional_9_Template, 2, 6, "div", 9);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.validateForm.controls.isFormat);
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_1_0 = ctx.validateForm.controls.isFormat.value) === "hex" ? 6 : tmp_1_0 === "hsb" ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.nzDisabledAlpha ? 9 : -1);
      }
    },
    dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzInputModule, NzInputDirective, NzInputWrapperComponent, NzInputNumberModule, NzInputNumberComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColorFormatComponent, [{
    type: Component,
    args: [{
      selector: "nz-color-format",
      exportAs: "nzColorFormat",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [ReactiveFormsModule, NzSelectModule, NzInputModule, NzInputNumberModule],
      template: `
    <div class="ant-color-picker-format-select">
      <nz-select [formControl]="validateForm.controls.isFormat" nzVariant="borderless" nzSize="small">
        <nz-option nzValue="hex" nzLabel="HEX" />
        <nz-option nzValue="hsb" nzLabel="HSB" />
        <nz-option nzValue="rgb" nzLabel="RGB" />
      </nz-select>
    </div>

    <div class="ant-color-picker-input">
      @switch (validateForm.controls.isFormat.value) {
        @case ('hex') {
          <div class="ant-color-picker-hex-input">
            <nz-input-wrapper nzPrefix="#">
              <input nz-input nzSize="small" [formControl]="validateForm.controls.hex" />
            </nz-input-wrapper>
          </div>
        }
        @case ('hsb') {
          <div class="ant-color-picker-hsb-input">
            <div class="ant-color-picker-steppers ant-color-picker-hsb-input">
              <nz-input-number
                [formControl]="validateForm.controls.hsbH"
                [nzMin]="0"
                [nzMax]="360"
                [nzStep]="1"
                [nzPrecision]="0"
                nzSize="small"
              />
            </div>
            <div class="ant-color-picker-steppers ant-color-picker-hsb-input">
              <nz-input-number
                [formControl]="validateForm.controls.hsbS"
                [nzMin]="0"
                [nzMax]="100"
                [nzStep]="1"
                [nzFormatter]="formatterPercent"
                [nzParser]="parserPercent"
                nzSize="small"
              />
            </div>
            <div class="ant-color-picker-steppers ant-color-picker-hsb-input">
              <nz-input-number
                [formControl]="validateForm.controls.hsbB"
                [nzMin]="0"
                [nzMax]="100"
                [nzStep]="1"
                [nzFormatter]="formatterPercent"
                [nzParser]="parserPercent"
                nzSize="small"
              />
            </div>
          </div>
        }
        @default {
          <div class="ant-color-picker-rgb-input">
            <div class="ant-color-picker-steppers ant-color-picker-rgb-input">
              <nz-input-number
                [formControl]="validateForm.controls.rgbR"
                [nzMin]="0"
                [nzMax]="255"
                [nzStep]="1"
                nzSize="small"
              />
            </div>
            <div class="ant-color-picker-steppers ant-color-picker-rgb-input">
              <nz-input-number
                [formControl]="validateForm.controls.rgbG"
                [nzMin]="0"
                [nzMax]="255"
                [nzStep]="1"
                nzSize="small"
              />
            </div>
            <div class="ant-color-picker-steppers ant-color-picker-rgb-input">
              <nz-input-number
                [formControl]="validateForm.controls.rgbB"
                [nzMin]="0"
                [nzMax]="255"
                [nzStep]="1"
                nzSize="small"
              />
            </div>
          </div>
        }
      }
    </div>

    @if (!nzDisabledAlpha) {
      <div class="ant-color-picker-steppers ant-color-picker-alpha-input">
        <nz-input-number
          [formControl]="validateForm.controls.roundA"
          [nzMin]="0"
          [nzMax]="100"
          [nzStep]="1"
          [nzFormatter]="formatterPercent"
          [nzParser]="parserPercent"
          nzSize="small"
        />
      </div>
    }
  `,
      host: {
        class: "ant-color-picker-input-container"
      }
    }]
  }], null, {
    format: [{
      type: Input
    }],
    colorValue: [{
      type: Input
    }],
    clearColor: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabledAlpha: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    formatChange: [{
      type: Output
    }],
    nzOnFormatChange: [{
      type: Output
    }]
  });
})();
var hexValidator = (control) => {
  const REGEXP = /^[0-9a-fA-F]{6}$/;
  if (!control.value) {
    return {
      error: true
    };
  } else if (!REGEXP.test(control.value)) {
    return {
      error: true
    };
  }
  return null;
};
var NzColorPickerComponent = class _NzColorPickerComponent {
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  formBuilder = inject(FormBuilder);
  formSize = inject(NZ_FORM_SIZE, {
    optional: true
  });
  nzFormat = null;
  nzValue = "";
  nzSize = "default";
  nzDefaultValue = "";
  nzTrigger = "click";
  nzTitle = "";
  nzFlipFlop = null;
  nzShowText = false;
  nzOpen = false;
  nzAllowClear = false;
  nzDisabled = false;
  nzDisabledAlpha = false;
  nzPresets = null;
  nzOnChange = new EventEmitter();
  nzOnFormatChange = new EventEmitter();
  nzOnClear = new EventEmitter();
  nzOnOpenChange = new EventEmitter();
  isNzDisableFirstChange = true;
  blockColor = "";
  clearColor = false;
  showText = defaultColor.toHexString();
  formControl = this.formBuilder.control("");
  size = signal(this.nzSize, ...ngDevMode ? [{
    debugName: "size"
  }] : []);
  finalSize = computed(() => this.formSize?.() || this.size(), ...ngDevMode ? [{
    debugName: "finalSize"
  }] : []);
  onChange = () => {
  };
  writeValue(value) {
    this.nzValue = value;
    this.getBlockColor();
    this.formControl.patchValue(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched() {
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  ngOnInit() {
    this.getBlockColor();
    this.formControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      if (value) {
        let color = value;
        if (this.nzFormat === "hex") {
          color = generateColor(value).getAlpha() < 1 ? generateColor(value).toHex8String() : generateColor(value).toHexString();
        } else if (this.nzFormat === "hsb") {
          color = generateColor(value).toHsbString();
        } else if (this.nzFormat === "rgb") {
          color = generateColor(value).toRgbString();
        }
        this.showText = color;
        this.onChange(color);
        this.cdr.markForCheck();
      }
    });
  }
  ngOnChanges(changes) {
    const {
      nzValue,
      nzDefaultValue,
      nzSize
    } = changes;
    if (nzValue || nzDefaultValue) {
      this.getBlockColor();
    }
    if (nzSize) {
      this.size.set(nzSize.currentValue);
    }
  }
  clearColorHandle() {
    this.clearColor = true;
    this.nzOnClear.emit(true);
    this.cdr.markForCheck();
  }
  getBlockColor() {
    if (this.nzValue) {
      this.blockColor = generateColor(this.nzValue).toRgbString();
    } else if (this.nzDefaultValue) {
      this.blockColor = generateColor(this.nzDefaultValue).toRgbString();
    } else {
      this.blockColor = defaultColor.toHexString();
    }
  }
  colorChange(value) {
    this.blockColor = value.color.getAlpha() < 1 ? value.color.toHex8String() : value.color.toHexString();
    this.clearColor = false;
    this.nzOnChange.emit({
      color: value.color,
      format: this.nzFormat ?? "hex"
    });
    this.cdr.markForCheck();
  }
  formatChange(value) {
    this.nzValue = value.color;
    this.clearColor = false;
    this.getBlockColor();
    this.nzOnChange.emit({
      color: generateColor(value.color),
      format: value.format
    });
    this.formControl.patchValue(value.color);
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColorPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzColorPickerComponent,
    selectors: [["nz-color-picker"]],
    hostAttrs: [1, "ant-color-picker-inline"],
    hostVars: 2,
    hostBindings: function NzColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-color-picker-disabled", ctx.nzDisabled);
      }
    },
    inputs: {
      nzFormat: "nzFormat",
      nzValue: "nzValue",
      nzSize: "nzSize",
      nzDefaultValue: "nzDefaultValue",
      nzTrigger: "nzTrigger",
      nzTitle: "nzTitle",
      nzFlipFlop: "nzFlipFlop",
      nzShowText: [2, "nzShowText", "nzShowText", booleanAttribute],
      nzOpen: [2, "nzOpen", "nzOpen", booleanAttribute],
      nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzDisabledAlpha: [2, "nzDisabledAlpha", "nzDisabledAlpha", booleanAttribute],
      nzPresets: "nzPresets"
    },
    outputs: {
      nzOnChange: "nzOnChange",
      nzOnFormatChange: "nzOnFormatChange",
      nzOnClear: "nzOnClear",
      nzOnOpenChange: "nzOnOpenChange"
    },
    exportAs: ["nzColorPicker"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzColorPickerComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 10,
    vars: 11,
    consts: [["colorPicker", ""], ["nzPanelRenderHeader", ""], ["nzPanelRenderFooter", ""], ["nz-popover", "", 3, "nzPopoverVisibleChange", "nzPopoverContent", "nzPopoverTrigger", "nzPopoverVisible"], [3, "nzColor", "nzSize"], [3, "ngTemplateOutlet"], [1, "ant-color-picker-trigger-text"], [3, "nzOnChange", "value", "defaultValue", "disabled", "panelRenderHeader", "panelRenderFooter", "disabledAlpha", "presets"], [1, "ant-color-picker-title"], [1, "ant-color-picker-title-content"], [3, "nzStringTemplateOutlet"], [1, "ant-color-picker-clear"], [1, "ant-color-picker-clear", 3, "click"], [3, "formatChange", "nzOnFormatChange", "colorValue", "clearColor", "format", "nzDisabledAlpha"]],
    template: function NzColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("nzPopoverVisibleChange", function NzColorPickerComponent_Template_div_nzPopoverVisibleChange_0_listener($event) {
          return ctx.nzOnOpenChange.emit($event);
        });
        \u0275\u0275conditionalCreate(1, NzColorPickerComponent_Conditional_1_Template, 1, 2, "nz-color-block", 4)(2, NzColorPickerComponent_Conditional_2_Template, 1, 1, null, 5);
        \u0275\u0275conditionalCreate(3, NzColorPickerComponent_Conditional_3_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, NzColorPickerComponent_ng_template_4_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, NzColorPickerComponent_ng_template_6_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, NzColorPickerComponent_ng_template_8_Template, 1, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const colorPicker_r7 = \u0275\u0275reference(5);
        \u0275\u0275classProp("ant-color-picker-trigger", !ctx.nzFlipFlop)("ant-color-picker-sm", ctx.finalSize() === "small")("ant-color-picker-lg", ctx.finalSize() === "large");
        \u0275\u0275property("nzPopoverContent", colorPicker_r7)("nzPopoverTrigger", !ctx.nzDisabled ? ctx.nzTrigger : null)("nzPopoverVisible", ctx.nzOpen);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.nzFlipFlop ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzShowText && !!ctx.showText && !ctx.nzFlipFlop ? 3 : -1);
      }
    },
    dependencies: [NgAntdColorPickerModule, NgAntdColorPickerComponent, NzPopoverDirective, NzColorBlockComponent, NzColorFormatComponent, NgTemplateOutlet, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "nz-color-picker",
      exportAs: "nzColorPicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgAntdColorPickerModule, NzPopoverDirective, NzColorBlockComponent, NzColorFormatComponent, NgTemplateOutlet, NzStringTemplateOutletDirective],
      template: `
    <div
      [class.ant-color-picker-trigger]="!nzFlipFlop"
      [class.ant-color-picker-sm]="finalSize() === 'small'"
      [class.ant-color-picker-lg]="finalSize() === 'large'"
      nz-popover
      [nzPopoverContent]="colorPicker"
      [nzPopoverTrigger]="!nzDisabled ? nzTrigger : null"
      [nzPopoverVisible]="nzOpen"
      (nzPopoverVisibleChange)="nzOnOpenChange.emit($event)"
    >
      @if (!nzFlipFlop) {
        <nz-color-block [nzColor]="blockColor" [nzSize]="finalSize()" />
      } @else {
        <ng-template [ngTemplateOutlet]="nzFlipFlop" />
      }
      @if (nzShowText && !!showText && !nzFlipFlop) {
        <div class="ant-color-picker-trigger-text">
          {{ showText }}
        </div>
      }
    </div>
    <ng-template #colorPicker>
      <ng-antd-color-picker
        [value]="blockColor"
        [defaultValue]="nzDefaultValue"
        [disabled]="nzDisabled"
        [panelRenderHeader]="nzPanelRenderHeader"
        [panelRenderFooter]="nzPanelRenderFooter"
        [disabledAlpha]="nzDisabledAlpha"
        [presets]="nzPresets"
        (nzOnChange)="colorChange($event)"
      />
    </ng-template>
    <ng-template #nzPanelRenderHeader>
      @if (nzTitle || nzAllowClear) {
        <div class="ant-color-picker-title">
          <div class="ant-color-picker-title-content">
            <ng-template [nzStringTemplateOutlet]="nzTitle">{{ nzTitle }}</ng-template>
          </div>
          @if (nzAllowClear) {
            <div class="ant-color-picker-clear" (click)="clearColorHandle()"></div>
          }
        </div>
      }
    </ng-template>
    <ng-template #nzPanelRenderFooter>
      <nz-color-format
        [colorValue]="blockColor"
        [clearColor]="clearColor"
        [format]="nzFormat"
        [nzDisabledAlpha]="nzDisabledAlpha"
        (formatChange)="formatChange($event)"
        (nzOnFormatChange)="nzOnFormatChange.emit($event)"
      />
    </ng-template>
  `,
      host: {
        class: "ant-color-picker-inline",
        "[class.ant-color-picker-disabled]": `nzDisabled`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzColorPickerComponent),
        multi: true
      }]
    }]
  }], null, {
    nzFormat: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzDefaultValue: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzFlipFlop: [{
      type: Input
    }],
    nzShowText: [{
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
    nzAllowClear: [{
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
    nzDisabledAlpha: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPresets: [{
      type: Input
    }],
    nzOnChange: [{
      type: Output
    }],
    nzOnFormatChange: [{
      type: Output
    }],
    nzOnClear: [{
      type: Output
    }],
    nzOnOpenChange: [{
      type: Output
    }]
  });
})();
var NzColorPickerModule = class _NzColorPickerModule {
  static \u0275fac = function NzColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzColorPickerModule,
    imports: [NzColorPickerComponent, NzColorBlockComponent, NzColorFormatComponent],
    exports: [NzColorPickerComponent, NzColorBlockComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzColorPickerComponent, NzColorBlockComponent, NzColorFormatComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzColorPickerComponent, NzColorBlockComponent, NzColorFormatComponent],
      exports: [NzColorPickerComponent, NzColorBlockComponent]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-entry/hrm-color-picker.ts
var HrmColorPicker = class _HrmColorPicker extends HrmControl {
  constructor() {
    super(...arguments);
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showText = input(true, ...ngDevMode ? [{ debugName: "showText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.presets = input([], ...ngDevMode ? [{ debugName: "presets" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmColorPicker_BaseFactory;
      return function HrmColorPicker_Factory(__ngFactoryType__) {
        return (\u0275HrmColorPicker_BaseFactory || (\u0275HrmColorPicker_BaseFactory = \u0275\u0275getInheritedFactory(_HrmColorPicker)))(__ngFactoryType__ || _HrmColorPicker);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmColorPicker, selectors: [["hrm-color-picker"]], hostAttrs: [1, "hrm-color-picker"], inputs: { size: [1, "size"], showText: [1, "showText"], presets: [1, "presets"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmColorPicker), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModelChange", "ngModel", "nzSize", "nzShowText", "nzPresets", "nzDisabled"]], template: function HrmColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-color-picker", 0);
        \u0275\u0275listener("ngModelChange", function HrmColorPicker_Template_nz_color_picker_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzSize", ctx.size() === "sm" ? "small" : ctx.size() === "lg" ? "large" : "default")("nzShowText", ctx.showText())("nzPresets", ctx.presets().length ? ctx.presets() : null)("nzDisabled", ctx.disabled());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzColorPickerModule, NzColorPickerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmColorPicker, [{
    type: Component,
    args: [{
      selector: "hrm-color-picker",
      imports: [FormsModule, NzColorPickerModule],
      template: `
    <nz-color-picker
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzSize]="size() === 'sm' ? 'small' : size() === 'lg' ? 'large' : 'default'"
      [nzShowText]="showText()"
      [nzPresets]="presets().length ? presets() : null"
      [nzDisabled]="disabled()"></nz-color-picker>
  `,
      host: { class: "hrm-color-picker" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmColorPicker), multi: true }]
    }]
  }], null, { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showText: [{ type: Input, args: [{ isSignal: true, alias: "showText", required: false }] }], presets: [{ type: Input, args: [{ isSignal: true, alias: "presets", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmColorPicker, { className: "HrmColorPicker", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-color-picker.ts", lineNumber: 27 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/color-picker.ts
var SgDocColorPicker = class _SgDocColorPicker {
  constructor() {
    this.labelColor = "#2267E8";
    this.teamColor = "#16A34A";
    this.codeColor = "#F59E0B";
    this.sizeColor = "#DC2626";
    this.presets = [
      { label: "M\xE0u g\u1EE3i \xFD", colors: ["#717784", "#2F76EE", "#F59E0B", "#EF4444", "#22C55E", "#EAB308", "#8B5CF6", "#5695F7"] }
    ];
    this.when = [
      "docs.colorPicker.when1",
      "docs.colorPicker.when2",
      "docs.colorPicker.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocColorPicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocColorPicker)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocColorPicker, selectors: [["sg-doc-color-picker"]], decls: 56, vars: 75, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [3, "ngModelChange", "ngModel"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "ngModelChange", "ngModel", "presets"], [3, "label"], [3, "ngModelChange", "ngModel", "showText"], ["label", "sm \xB7 md \xB7 lg"], ["size", "sm", 3, "ngModelChange", "ngModel"], ["size", "md", 3, "ngModelChange", "ngModel"], ["size", "lg", 3, "ngModelChange", "ngModel"]], template: function SgDocColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-color-picker", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.labelColor, $event) || (ctx.labelColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
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
        \u0275\u0275element(17, "span", 7);
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
        \u0275\u0275elementStart(25, "div", 8)(26, "sg-example", 9);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "hrm-color-picker", 2);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.labelColor, $event) || (ctx.labelColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 3);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 9);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row")(38, "hrm-color-picker", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.teamColor, $event) || (ctx.teamColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 3);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "sg-example", 9);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementStart(45, "sg-row", 11);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "hrm-color-picker", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_47_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.codeColor, $event) || (ctx.codeColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "hrm-color-picker", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_48_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.codeColor, $event) || (ctx.codeColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "sg-example", 9);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row", 13)(53, "hrm-color-picker", 14);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sizeColor, $event) || (ctx.sizeColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "hrm-color-picker", 15);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_54_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sizeColor, $event) || (ctx.sizeColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "hrm-color-picker", 16);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocColorPicker_Template_hrm_color_picker_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sizeColor, $event) || (ctx.sizeColor = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 35, "docs.colorPicker.title"))("desc", \u0275\u0275pipeBind1(2, 37, "docs.colorPicker.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.labelColor);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.labelColor);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 39, "docs.colorPicker.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 41, "docs.colorPicker.behavior"))("avoid", \u0275\u0275pipeBind1(11, 43, "docs.colorPicker.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 45, "docs.colorPicker.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 47, "docs.colorPicker.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 49, "docs.colorPicker.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 51, "docs.colorPicker.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 53, "docs.colorPicker.exLabelT"))("desc", \u0275\u0275pipeBind1(28, 55, "docs.colorPicker.exLabelD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.labelColor);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(33, 57, "docs.colorPicker.projectLabel"), " ", ctx.labelColor);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 59, "docs.colorPicker.exPresetT"))("desc", \u0275\u0275pipeBind1(36, 61, "docs.colorPicker.exPresetD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.teamColor);
        \u0275\u0275property("presets", ctx.presets);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(41, 63, "docs.colorPicker.teamLabel"), " ", ctx.teamColor);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 65, "docs.colorPicker.exCodeT"))("desc", \u0275\u0275pipeBind1(44, 67, "docs.colorPicker.exCodeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(46, 69, "docs.colorPicker.codeRow"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.codeColor);
        \u0275\u0275property("showText", true);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.codeColor);
        \u0275\u0275property("showText", false);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 71, "docs.colorPicker.exSizeT"))("desc", \u0275\u0275pipeBind1(51, 73, "docs.colorPicker.exSizeD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.sizeColor);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sizeColor);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sizeColor);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmColorPicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocColorPicker, [{
    type: Component,
    args: [{
      selector: "sg-doc-color-picker",
      imports: [FormsModule, TranslateModule, HrmColorPicker, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.colorPicker.title' | translate" [desc]="'docs.colorPicker.desc' | translate">

      <div sgOverview>
        <hrm-color-picker [(ngModel)]="labelColor" />
        <span style="font-size: var(--fs-13);color:var(--text-sub)">{{ labelColor }}</span>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.colorPicker.purpose' | translate"
          [when]="when"
          [behavior]="'docs.colorPicker.behavior' | translate"
          [avoid]="'docs.colorPicker.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.colorPicker.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.colorPicker.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.colorPicker.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.colorPicker.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.colorPicker.exLabelT' | translate"
          [desc]="'docs.colorPicker.exLabelD' | translate">
          <sg-row>
            <hrm-color-picker [(ngModel)]="labelColor" />
            <span style="font-size: var(--fs-13);color:var(--text-sub)">{{ 'docs.colorPicker.projectLabel' | translate }} {{ labelColor }}</span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.colorPicker.exPresetT' | translate"
          [desc]="'docs.colorPicker.exPresetD' | translate">
          <sg-row>
            <hrm-color-picker [(ngModel)]="teamColor" [presets]="presets" />
            <span style="font-size: var(--fs-13);color:var(--text-sub)">{{ 'docs.colorPicker.teamLabel' | translate }} {{ teamColor }}</span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.colorPicker.exCodeT' | translate"
          [desc]="'docs.colorPicker.exCodeD' | translate">
          <sg-row [label]="'docs.colorPicker.codeRow' | translate">
            <hrm-color-picker [(ngModel)]="codeColor" [showText]="true" />
            <hrm-color-picker [(ngModel)]="codeColor" [showText]="false" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.colorPicker.exSizeT' | translate"
          [desc]="'docs.colorPicker.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <hrm-color-picker size="sm" [(ngModel)]="sizeColor" />
            <hrm-color-picker size="md" [(ngModel)]="sizeColor" />
            <hrm-color-picker size="lg" [(ngModel)]="sizeColor" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocColorPicker, { className: "SgDocColorPicker", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/color-picker.ts", lineNumber: 73 });
})();
export {
  SgDocColorPicker
};
//# sourceMappingURL=chunk-UXCYOTRS.js.map
