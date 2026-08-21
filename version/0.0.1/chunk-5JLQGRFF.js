import {
  Search,
  Selector,
  TablerIconComponent,
  X
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  Output,
  __spreadProps,
  __spreadValues,
  computed,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts
var _c0 = [[["", "snHead", ""]], [["", "snFooter", ""]], [["", "snActions", ""]]];
var _c1 = ["[snHead]", "[snFooter]", "[snActions]"];
var _forTrack0 = ($index, $item) => $item.key;
function HrmSideNav_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.logoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function HrmSideNav_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_1_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.collapsed.set(true));
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.toggleIcon())("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_1_Conditional_1_Template, 1, 1, "img", 10);
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275projection(3, 2);
    \u0275\u0275conditionalCreate(4, HrmSideNav_Conditional_1_Conditional_4_Template, 2, 3, "button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.logoSrc() ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.toggleIcon() ? 4 : -1);
  }
}
function HrmSideNav_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.logoMarkSrc() || ctx_r0.logoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function HrmSideNav_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.collapsed.set(false));
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.expandIcon() || ctx_r0.toggleIcon())("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_2_Conditional_1_Template, 1, 1, "img", 15);
    \u0275\u0275conditionalCreate(2, HrmSideNav_Conditional_2_Conditional_2_Template, 2, 3, "button", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.logoMarkSrc() || ctx_r0.logoSrc() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expandIcon() || ctx_r0.toggleIcon() ? 2 : -1);
  }
}
function HrmSideNav_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_5_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r0.clearLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.clearIcon)("size", 14)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "tabler-icon", 18);
    \u0275\u0275elementStart(2, "input", 19);
    \u0275\u0275listener("input", function HrmSideNav_Conditional_5_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearch($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_Conditional_5_Conditional_3_Template, 2, 4, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.searchIcon)("size", 16)("stroke", ctx_r0.iconStroke());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.query());
    \u0275\u0275attribute("placeholder", ctx_r0.searchPlaceholder() || null)("aria-label", ctx_r0.searchPlaceholder() || null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.query() ? 3 : -1);
  }
}
function HrmSideNav_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sec_r6.header);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 27);
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", it_r8.icon)("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("icon", ctx_r0.caretIcon())("size", 16)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.trailing);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.badge);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Template_button_click_0_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.pick(c_r10));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Conditional_3_Template, 2, 1, "span", 34);
    \u0275\u0275conditionalCreate(4, HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Conditional_4_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-active", c_r10.key === ctx_r0.selectedKey());
    \u0275\u0275property("disabled", c_r10.disabled ?? false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r10.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r10.trailing ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r10.badge != null ? 4 : -1);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_For_2_Template, 5, 6, "button", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(it_r8.children);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.badge);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_For_4_Template_button_click_0_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.pick(c_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_For_4_Conditional_2_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-active", c_r12.key === ctx_r0.selectedKey());
    \u0275\u0275property("disabled", c_r12.disabled ?? false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r12.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r12.badge != null ? 2 : -1);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_For_4_Template, 3, 5, "button", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_23_0;
    const it_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", (tmp_22_0 = ctx_r0.flyoutAt()) == null ? null : tmp_22_0.top, "px")("left", (tmp_23_0 = ctx_r0.flyoutAt()) == null ? null : tmp_23_0.left, "px");
    \u0275\u0275attribute("aria-label", it_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r8.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(it_r8.children);
  }
}
function HrmSideNav_For_8_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("mouseenter", function HrmSideNav_For_8_For_3_Conditional_0_Template_div_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.positionFlyout($event));
    });
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275listener("click", function HrmSideNav_For_8_For_3_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const it_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.parentClick(it_r8));
    });
    \u0275\u0275conditionalCreate(2, HrmSideNav_For_8_For_3_Conditional_0_Conditional_2_Template, 1, 3, "tabler-icon", 27);
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, HrmSideNav_For_8_For_3_Conditional_0_Conditional_5_Template, 1, 3, "tabler-icon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrmSideNav_For_8_For_3_Conditional_0_Conditional_6_Template, 3, 0, "div", 30);
    \u0275\u0275conditionalCreate(7, HrmSideNav_For_8_For_3_Conditional_0_Conditional_7_Template, 5, 6, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-open", ctx_r0.isOpen(it_r8.key))("has-active", ctx_r0.parentHasSelected(it_r8));
    \u0275\u0275property("disabled", it_r8.disabled ?? false);
    \u0275\u0275attribute("title", ctx_r0.collapsed() ? it_r8.label : null)("aria-haspopup", ctx_r0.collapsed() ? "menu" : null)("aria-expanded", ctx_r0.collapsed() ? null : ctx_r0.isOpen(it_r8.key));
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r8.icon ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.collapsed() && ctx_r0.caretIcon() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.collapsed() && ctx_r0.isOpen(it_r8.key) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.collapsed() ? 7 : -1);
  }
}
function HrmSideNav_For_8_For_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 27);
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", it_r8.icon)("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r8.trailing);
  }
}
function HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r8.badge);
  }
}
function HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Conditional_0_Template, 2, 1, "span", 34);
    \u0275\u0275conditionalCreate(1, HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Conditional_1_Template, 2, 1, "span", 35);
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275conditional(it_r8.trailing ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r8.badge != null ? 1 : -1);
  }
}
function HrmSideNav_For_8_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function HrmSideNav_For_8_For_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const it_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pick(it_r8));
    });
    \u0275\u0275conditionalCreate(1, HrmSideNav_For_8_For_3_Conditional_1_Conditional_1_Template, 1, 3, "tabler-icon", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmSideNav_For_8_For_3_Conditional_1_Conditional_4_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", it_r8.key === ctx_r0.selectedKey());
    \u0275\u0275property("disabled", it_r8.disabled ?? false);
    \u0275\u0275attribute("title", ctx_r0.collapsed() ? it_r8.label : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r8.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.collapsed() ? 4 : -1);
  }
}
function HrmSideNav_For_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_For_8_For_3_Conditional_0_Template, 8, 13, "div", 23)(1, HrmSideNav_For_8_For_3_Conditional_1_Template, 5, 7, "button", 24);
  }
  if (rf & 2) {
    const it_r8 = ctx.$implicit;
    \u0275\u0275conditional((it_r8.children == null ? null : it_r8.children.length) ? 0 : 1);
  }
}
function HrmSideNav_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, HrmSideNav_For_8_Conditional_1_Template, 2, 1, "div", 22);
    \u0275\u0275repeaterCreate(2, HrmSideNav_For_8_For_3_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(sec_r6.header && !ctx_r0.collapsed() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(sec_r6.items);
  }
}
function HrmSideNav_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.searchEmpty());
  }
}
function HrmSideNav_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const u_r15 = \u0275\u0275nextContext();
    \u0275\u0275property("src", u_r15.avatar, \u0275\u0275sanitizeUrl);
  }
}
function HrmSideNav_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const u_r15 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", u_r15.initials || ctx_r0.initialsOf(u_r15.name), " ");
  }
}
function HrmSideNav_Conditional_11_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r15.email);
  }
}
function HrmSideNav_Conditional_11_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_11_Conditional_4_Conditional_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.switchAccount.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r0.switchLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.switchIcon() ?? ctx_r0.selectorIcon)("size", 18)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_Conditional_11_Conditional_4_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmSideNav_Conditional_11_Conditional_4_Conditional_4_Template, 2, 4, "span", 47);
  }
  if (rf & 2) {
    const u_r15 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r15.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r15.email ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showSwitchAccount() ? 4 : -1);
  }
}
function HrmSideNav_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userClick.emit());
    });
    \u0275\u0275elementStart(1, "span", 42);
    \u0275\u0275conditionalCreate(2, HrmSideNav_Conditional_11_Conditional_2_Template, 1, 1, "img", 43)(3, HrmSideNav_Conditional_11_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmSideNav_Conditional_11_Conditional_4_Template, 5, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r15 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", u_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r15.avatar ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.collapsed() ? 4 : -1);
  }
}
var HrmSideNav = class _HrmSideNav {
  constructor() {
    this.sections = input([], ...ngDevMode ? [{ debugName: "sections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedKey = input("", ...ngDevMode ? [{ debugName: "selectedKey" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsed = model(false, ...ngDevMode ? [{ debugName: "collapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ariaLabel = input("", ...ngDevMode ? [{ debugName: "ariaLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.caretIcon = input(null, ...ngDevMode ? [{ debugName: "caretIcon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.iconStroke = input(void 0, ...ngDevMode ? [{ debugName: "iconStroke" }] : (
      /* istanbul ignore next */
      []
    ));
    this.logoSrc = input("", ...ngDevMode ? [{ debugName: "logoSrc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.logoMarkSrc = input("", ...ngDevMode ? [{ debugName: "logoMarkSrc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toggleIcon = input(null, ...ngDevMode ? [{ debugName: "toggleIcon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.expandIcon = input(null, ...ngDevMode ? [{ debugName: "expandIcon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.user = input(null, ...ngDevMode ? [{ debugName: "user" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showSwitchAccount = input(true, ...ngDevMode ? [{ debugName: "showSwitchAccount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.switchLabel = input("", ...ngDevMode ? [{ debugName: "switchLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.switchIcon = input(null, ...ngDevMode ? [{ debugName: "switchIcon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchable = input(false, ...ngDevMode ? [{ debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchPlaceholder = input("", ...ngDevMode ? [{ debugName: "searchPlaceholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.clearLabel = input("", ...ngDevMode ? [{ debugName: "clearLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchEmpty = input("", ...ngDevMode ? [{ debugName: "searchEmpty" }] : (
      /* istanbul ignore next */
      []
    ));
    this.itemClick = output();
    this.userClick = output();
    this.switchAccount = output();
    this.selectorIcon = Selector;
    this.searchIcon = Search;
    this.clearIcon = X;
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
      /* istanbul ignore next */
      []
    ));
    this.flyoutAt = signal(null, ...ngDevMode ? [{ debugName: "flyoutAt" }] : (
      /* istanbul ignore next */
      []
    ));
    this.displaySections = computed(() => {
      const secs = this.sections();
      if (!this.searchable())
        return secs;
      const raw = this.query().trim();
      if (!raw)
        return secs;
      const q = this.norm(raw);
      const out = [];
      for (const sec of secs) {
        const headerMatch = sec.header ? this.norm(sec.header).includes(q) : false;
        const items = [];
        for (const it of sec.items) {
          if (it.children?.length) {
            if (headerMatch || this.matchItem(it, q)) {
              items.push(it);
            } else {
              const kids = it.children.filter((c) => this.matchItem(c, q));
              if (kids.length)
                items.push(__spreadProps(__spreadValues({}, it), { children: kids }));
            }
          } else if (headerMatch || this.matchItem(it, q)) {
            items.push(it);
          }
        }
        if (items.length)
          out.push(__spreadProps(__spreadValues({}, sec), { items }));
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "displaySections" }] : (
      /* istanbul ignore next */
      []
    ));
    this.manual = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "manual" }] : (
      /* istanbul ignore next */
      []
    ));
    this.openInit = computed(() => {
      const sel = this.selectedKey();
      const s = /* @__PURE__ */ new Set();
      for (const sec of this.sections()) {
        for (const it of sec.items) {
          if (it.children?.some((c) => c.key === sel))
            s.add(it.key);
        }
      }
      return s;
    }, ...ngDevMode ? [{ debugName: "openInit" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  positionFlyout(ev) {
    const r = ev.currentTarget.getBoundingClientRect();
    this.flyoutAt.set({ top: r.top, left: r.right + 8 });
  }
  onSearch(e) {
    this.query.set(e.target.value);
  }
  clearSearch() {
    this.query.set("");
  }
  /** Chuẩn hoá bỏ dấu tiếng Việt để tìm không phân biệt dấu/hoa-thường. */
  norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111]/g, "d");
  }
  matchItem(it, q) {
    if (this.norm(it.label).includes(q))
      return true;
    return it.keywords?.some((k) => this.norm(k).includes(q)) ?? false;
  }
  initialsOf(name) {
    const n = (name || "").trim();
    if (!n)
      return "";
    const p = n.split(/\s+/);
    return ((p[0][0] ?? "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  /** Nhóm cha có chứa mục con đang được chọn? → hiện dấu định vị (collapsed: icon active;
   *  expanded-đóng: chấm bên phải) để không mất dấu trang hiện tại. */
  parentHasSelected(it) {
    const sel = this.selectedKey();
    return it.children?.some((c) => c.key === sel) ?? false;
  }
  isOpen(key) {
    if (this.searchable() && this.query().trim())
      return true;
    const m = this.manual().get(key);
    return m !== void 0 ? m : this.openInit().has(key);
  }
  toggle(key) {
    const m = new Map(this.manual());
    m.set(key, !this.isOpen(key));
    this.manual.set(m);
  }
  /** Bấm mục cha: expand → mở/gập nhóm inline. Collapsed (rail) → KHÔNG làm gì:
   *  flyout con mở bằng HOVER icon cha, chọn con = click item trong flyout (không auto-điều hướng). */
  parentClick(it) {
    if (!this.collapsed())
      this.toggle(it.key);
  }
  pick(it) {
    if (it.disabled)
      return;
    this.itemClick.emit(it);
  }
  static {
    this.\u0275fac = function HrmSideNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSideNav)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSideNav, selectors: [["hrm-side-nav"]], hostAttrs: [1, "hrm-side-nav"], inputs: { sections: [1, "sections"], selectedKey: [1, "selectedKey"], collapsed: [1, "collapsed"], ariaLabel: [1, "ariaLabel"], caretIcon: [1, "caretIcon"], iconStroke: [1, "iconStroke"], logoSrc: [1, "logoSrc"], logoMarkSrc: [1, "logoMarkSrc"], toggleIcon: [1, "toggleIcon"], expandIcon: [1, "expandIcon"], user: [1, "user"], showSwitchAccount: [1, "showSwitchAccount"], switchLabel: [1, "switchLabel"], switchIcon: [1, "switchIcon"], searchable: [1, "searchable"], searchPlaceholder: [1, "searchPlaceholder"], clearLabel: [1, "clearLabel"], searchEmpty: [1, "searchEmpty"] }, outputs: { collapsed: "collapsedChange", itemClick: "itemClick", userClick: "userClick", switchAccount: "switchAccount" }, ngContentSelectors: _c1, decls: 13, vars: 7, consts: [[1, "sn"], [1, "sn-brand"], [1, "sn-brand-mark"], [1, "sn-head"], [1, "sn-search"], [1, "sn-scroll"], [1, "sn-sec"], [1, "sn-empty"], [1, "sn-foot"], ["type", "button", 1, "sn-user"], ["alt", "logo", 1, "sn-brand-logo", 3, "src"], [1, "sn-brand-act"], ["type", "button", "aria-label", "Thu g\u1ECDn", 1, "sn-iconbtn"], ["type", "button", "aria-label", "Thu g\u1ECDn", 1, "sn-iconbtn", 3, "click"], [3, "icon", "size", "stroke"], ["alt", "logo", 1, "sn-mark-logo", 3, "src"], ["type", "button", "aria-label", "M\u1EDF r\u1ED9ng", 1, "sn-expand"], ["type", "button", "aria-label", "M\u1EDF r\u1ED9ng", 1, "sn-expand", 3, "click"], [1, "sn-search-ic", 3, "icon", "size", "stroke"], ["type", "text", 1, "sn-search-in", 3, "input", "value"], ["type", "button", 1, "sn-search-clr"], ["type", "button", 1, "sn-search-clr", 3, "click"], [1, "sn-header"], [1, "sn-group"], ["type", "button", 1, "sn-item", 3, "is-active", "disabled"], [1, "sn-group", 3, "mouseenter"], ["type", "button", 1, "sn-item", "sn-parent", 3, "click", "disabled"], [1, "sn-ic", 3, "icon", "size", "stroke"], [1, "sn-label"], [1, "sn-caret", 3, "icon", "size", "stroke"], [1, "sn-children"], ["role", "menu", 1, "sn-flyout", 3, "top", "left"], ["type", "button", 1, "sn-item", "sn-child", 3, "is-active", "disabled"], ["type", "button", 1, "sn-item", "sn-child", 3, "click", "disabled"], [1, "sn-trail"], [1, "sn-badge"], ["role", "menu", 1, "sn-flyout"], [1, "sn-flyout-h"], ["type", "button", "role", "menuitem", 1, "sn-fly-item", 3, "is-active", "disabled"], ["type", "button", "role", "menuitem", 1, "sn-fly-item", 3, "click", "disabled"], ["type", "button", 1, "sn-item", 3, "click", "disabled"], ["type", "button", 1, "sn-user", 3, "click"], [1, "sn-uav"], ["alt", "", 3, "src"], [1, "sn-uinfo"], [1, "sn-uname"], [1, "sn-umail"], ["role", "button", 1, "sn-switch"], ["role", "button", 1, "sn-switch", 3, "click"]], template: function HrmSideNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_1_Template, 5, 2, "div", 1)(2, HrmSideNav_Conditional_2_Template, 3, 2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmSideNav_Conditional_5_Template, 4, 7, "div", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275repeaterCreate(7, HrmSideNav_For_8_Template, 4, 1, "div", 6, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(9, HrmSideNav_Conditional_9_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275conditionalCreate(11, HrmSideNav_Conditional_11_Template, 5, 3, "button", 9);
        \u0275\u0275projection(12, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275classProp("is-collapsed", ctx.collapsed());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel() || null);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.collapsed() ? 1 : 2);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.searchable() && !ctx.collapsed() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.displaySections());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.searchable() && !ctx.collapsed() && ctx.query().trim() && !ctx.displaySections().length ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_6_0 = ctx.user()) ? 11 : -1, tmp_6_0);
      }
    }, dependencies: [TablerIconComponent], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.sn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 264px;\n  padding: 12px 10px;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  overflow: hidden;\n  min-height: 0;\n  transition: width var(--duration-normal, .22s) var(--ease-out, ease);\n}\n.sn.is-collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n  padding: 12px 8px;\n  align-items: stretch;\n}\n.sn-brand[_ngcontent-%COMP%], \n.sn-brand-mark[_ngcontent-%COMP%], \n.sn-head[_ngcontent-%COMP%], \n.sn-search[_ngcontent-%COMP%], \n.sn-foot[_ngcontent-%COMP%] {\n  flex: none;\n}\n.sn-scroll[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sn-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px 12px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-brand-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  flex: 1;\n  min-width: 0;\n  object-fit: contain;\n  object-position: left center;\n}\n.sn-brand-act[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n}\n.sn-iconbtn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-iconbtn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-brand-mark[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-mark-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-expand[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 8px 0;\n  margin: auto;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n  box-shadow: var(--shadow-regular-xs);\n}\n.sn-brand-mark[_ngcontent-%COMP%]:hover   .sn-mark-logo[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.sn-brand-mark[_ngcontent-%COMP%]:hover   .sn-expand[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sn-expand[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-sec[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sn-sec[_ngcontent-%COMP%]    + .sn-sec[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.sn-header[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.sn-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sn-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-lg);\n  text-align: left;\n  font-size: var(--fs-14);\n  font-weight: 400;\n  color: var(--text-body);\n  font-family: inherit;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-item[_ngcontent-%COMP%]:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.sn-item.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.sn-item.is-active[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.dark[_nghost-%COMP%]   .sn-item.is-active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sn-item.is-active[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n.sn-item[_ngcontent-%COMP%]:focus-visible, \n.sn-fly-item[_ngcontent-%COMP%]:focus-visible, \n.sn-iconbtn[_ngcontent-%COMP%]:focus-visible, \n.sn-expand[_ngcontent-%COMP%]:focus-visible, \n.sn-user[_ngcontent-%COMP%]:focus-visible, \n.sn-switch[_ngcontent-%COMP%]:focus-visible, \n.sn-search-clr[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.sn-parent.has-active[_ngcontent-%COMP%]:not(.is-open) {\n  color: var(--text-strong);\n  font-weight: 500;\n}\n.sn-parent.has-active[_ngcontent-%COMP%]:not(.is-open)   .sn-ic[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n}\n.sn-ic[_ngcontent-%COMP%] {\n  flex: none;\n}\n.sn-label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-caret[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-parent.is-open[_ngcontent-%COMP%]   .sn-caret[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sn-children[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 2px 0 2px 30px;\n}\n.sn-child[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  font-weight: 400;\n}\n.sn-badge[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn-trail[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.sn-head[_ngcontent-%COMP%] {\n  padding: 2px 4px 12px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-head[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.sn-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 2px 4px 10px;\n  padding: 7px 10px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.sn-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary-base);\n}\n.sn-search-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n}\n.sn-search-in[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.sn-search-in[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n.sn-search-clr[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-soft);\n  border-radius: var(--radius-sm);\n}\n.sn-search-clr[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.sn-empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n.sn-flyout[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: calc(100% + 8px);\n  top: 0;\n  z-index: 30;\n  min-width: 190px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n.sn-flyout[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -8px;\n  top: 0;\n  bottom: 0;\n  width: 8px;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-group[_ngcontent-%COMP%]:hover   .sn-flyout[_ngcontent-%COMP%] {\n  display: block;\n}\n.sn-flyout-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 6px 10px 4px;\n}\n.sn-fly-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  font-family: inherit;\n  text-align: left;\n}\n.sn-fly-item[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-fly-item.is-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.sn-fly-item[_ngcontent-%COMP%]   .sn-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.sn-head[_ngcontent-%COMP%], \n.sn-foot[_ngcontent-%COMP%] {\n  display: flex;\n}\n.sn-foot[_ngcontent-%COMP%] {\n  padding: 10px 4px 2px;\n  border-top: 1px solid var(--border-soft);\n}\n.sn-foot[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.sn-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-user[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-uav[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.sn-uav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.sn-uinfo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-uname[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-umail[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-switch[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-flex;\n  color: var(--text-soft);\n  padding: 2px;\n  border-radius: var(--radius-sm);\n}\n.sn-switch[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-user[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 6px 0;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-label[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-badge[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-trail[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-caret[_ngcontent-%COMP%] {\n  display: none;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-item[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 0;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-parent.has-active[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-parent.has-active[_ngcontent-%COMP%]   .sn-ic[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-group[_ngcontent-%COMP%]:has(.sn-parent:disabled):hover   .sn-flyout[_ngcontent-%COMP%] {\n  display: none;\n}\n.sn.is-collapsed[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-flyout[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-head[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-foot[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=hrm-side-nav.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSideNav, [{
    type: Component,
    args: [{ selector: "hrm-side-nav", imports: [TablerIconComponent], template: `
    <nav class="sn" [class.is-collapsed]="collapsed()" [attr.aria-label]="ariaLabel() || null">

      <!-- Header -->
      @if (!collapsed()) {
        <div class="sn-brand">
          @if (logoSrc()) { <img class="sn-brand-logo" [src]="logoSrc()" alt="logo" /> }
          <div class="sn-brand-act">
            <ng-content select="[snActions]" />
            @if (toggleIcon()) {
              <button type="button" class="sn-iconbtn" aria-label="Thu g\u1ECDn" (click)="collapsed.set(true)">
                <tabler-icon [icon]="$any(toggleIcon())" [size]="20" [stroke]="iconStroke()" />
              </button>
            }
          </div>
        </div>
      } @else {
        <div class="sn-brand-mark">
          @if (logoMarkSrc() || logoSrc()) { <img class="sn-mark-logo" [src]="logoMarkSrc() || logoSrc()" alt="logo" /> }
          @if (expandIcon() || toggleIcon()) {
            <button type="button" class="sn-expand" aria-label="M\u1EDF r\u1ED9ng" (click)="collapsed.set(false)">
              <tabler-icon [icon]="$any(expandIcon() || toggleIcon())" [size]="20" [stroke]="iconStroke()" />
            </button>
          }
        </div>
      }

      <div class="sn-head"><ng-content select="[snHead]" /></div>

      @if (searchable() && !collapsed()) {
        <div class="sn-search">
          <tabler-icon class="sn-search-ic" [icon]="$any(searchIcon)" [size]="16" [stroke]="iconStroke()" />
          <input class="sn-search-in" type="text" [value]="query()" (input)="onSearch($event)"
            [attr.placeholder]="searchPlaceholder() || null" [attr.aria-label]="searchPlaceholder() || null" />
          @if (query()) {
            <button type="button" class="sn-search-clr" (click)="clearSearch()" [attr.aria-label]="clearLabel() || null">
              <tabler-icon [icon]="$any(clearIcon)" [size]="14" [stroke]="iconStroke()" />
            </button>
          }
        </div>
      }

      <div class="sn-scroll">
      @for (sec of displaySections(); track $index) {
        <div class="sn-sec">
          @if (sec.header && !collapsed()) { <div class="sn-header">{{ sec.header }}</div> }
          @for (it of sec.items; track it.key) {
            @if (it.children?.length) {
              <div class="sn-group" (mouseenter)="positionFlyout($event)">
                <button type="button" class="sn-item sn-parent" [class.is-open]="isOpen(it.key)"
                  [class.has-active]="parentHasSelected(it)"
                  [disabled]="it.disabled ?? false" [attr.title]="collapsed() ? it.label : null"
                  [attr.aria-haspopup]="collapsed() ? 'menu' : null"
                  [attr.aria-expanded]="collapsed() ? null : isOpen(it.key)"
                  (click)="parentClick(it)">
                  @if (it.icon) { <tabler-icon class="sn-ic" [icon]="$any(it.icon)" [size]="20" [stroke]="iconStroke()" /> }
                  <span class="sn-label">{{ it.label }}</span>
                  @if (!collapsed() && caretIcon()) { <tabler-icon class="sn-caret" [icon]="$any(caretIcon())" [size]="16" [stroke]="iconStroke()" /> }
                </button>
                @if (!collapsed() && isOpen(it.key)) {
                  <div class="sn-children">
                    @for (c of it.children!; track c.key) {
                      <button type="button" class="sn-item sn-child" [class.is-active]="c.key === selectedKey()"
                        [disabled]="c.disabled ?? false" (click)="pick(c)">
                        <span class="sn-label">{{ c.label }}</span>
                        @if (c.trailing) { <span class="sn-trail">{{ c.trailing }}</span> }
                        @if (c.badge != null) { <span class="sn-badge">{{ c.badge }}</span> }
                      </button>
                    }
                  </div>
                }
                @if (collapsed()) {
                  <div class="sn-flyout" role="menu" [attr.aria-label]="it.label"
                    [style.top.px]="flyoutAt()?.top" [style.left.px]="flyoutAt()?.left">
                    <div class="sn-flyout-h">{{ it.label }}</div>
                    @for (c of it.children!; track c.key) {
                      <button type="button" class="sn-fly-item" role="menuitem" [class.is-active]="c.key === selectedKey()"
                        [disabled]="c.disabled ?? false" (click)="pick(c)">
                        {{ c.label }}
                        @if (c.badge != null) { <span class="sn-badge">{{ c.badge }}</span> }
                      </button>
                    }
                  </div>
                }
              </div>
            } @else {
              <button type="button" class="sn-item" [class.is-active]="it.key === selectedKey()"
                [disabled]="it.disabled ?? false" [attr.title]="collapsed() ? it.label : null"
                (click)="pick(it)">
                @if (it.icon) { <tabler-icon class="sn-ic" [icon]="$any(it.icon)" [size]="20" [stroke]="iconStroke()" /> }
                <span class="sn-label">{{ it.label }}</span>
                @if (!collapsed()) {
                  @if (it.trailing) { <span class="sn-trail">{{ it.trailing }}</span> }
                  @if (it.badge != null) { <span class="sn-badge">{{ it.badge }}</span> }
                }
              </button>
            }
          }
        </div>
      }

      @if (searchable() && !collapsed() && query().trim() && !displaySections().length) {
        <div class="sn-empty">{{ searchEmpty() }}</div>
      }
      </div>

      <div class="sn-foot">
        @if (user(); as u) {
          <button type="button" class="sn-user" (click)="userClick.emit()" [attr.aria-label]="u.name">
            <span class="sn-uav">
              @if (u.avatar) { <img [src]="u.avatar" alt="" /> } @else { {{ u.initials || initialsOf(u.name) }} }
            </span>
            @if (!collapsed()) {
              <span class="sn-uinfo">
                <span class="sn-uname">{{ u.name }}</span>
                @if (u.email) { <span class="sn-umail">{{ u.email }}</span> }
              </span>
              @if (showSwitchAccount()) {
                <span class="sn-switch" role="button" [attr.aria-label]="switchLabel() || null"
                  (click)="$event.stopPropagation(); switchAccount.emit()">
                  <tabler-icon [icon]="$any(switchIcon() ?? selectorIcon)" [size]="18" [stroke]="iconStroke()" />
                </span>
              }
            }
          </button>
        }
        <ng-content select="[snFooter]" />
      </div>
    </nav>
  `, host: { class: "hrm-side-nav" }, styles: ['/* angular:styles/component:css;da3871bef4b2179ee74b44ef382299c7b9b7ef496dfd4222e618c4e475ec44b3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts */\n:host {\n  display: block;\n}\n.sn {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 264px;\n  padding: 12px 10px;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  overflow: hidden;\n  min-height: 0;\n  transition: width var(--duration-normal, .22s) var(--ease-out, ease);\n}\n.sn.is-collapsed {\n  width: 72px;\n  padding: 12px 8px;\n  align-items: stretch;\n}\n.sn-brand,\n.sn-brand-mark,\n.sn-head,\n.sn-search,\n.sn-foot {\n  flex: none;\n}\n.sn-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sn-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px 12px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-brand-logo {\n  height: 30px;\n  width: auto;\n  flex: 1;\n  min-width: 0;\n  object-fit: contain;\n  object-position: left center;\n}\n.sn-brand-act {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n}\n.sn-iconbtn {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-iconbtn:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-brand-mark {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-mark-logo {\n  height: 30px;\n  width: auto;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-expand {\n  position: absolute;\n  inset: 0 0 8px 0;\n  margin: auto;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n  box-shadow: var(--shadow-regular-xs);\n}\n.sn-brand-mark:hover .sn-mark-logo {\n  opacity: 0;\n}\n.sn-brand-mark:hover .sn-expand {\n  opacity: 1;\n}\n.sn-expand:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-sec {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sn-sec + .sn-sec {\n  margin-top: 14px;\n}\n.sn-header {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.sn-group {\n  position: relative;\n}\n.sn-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-lg);\n  text-align: left;\n  font-size: var(--fs-14);\n  font-weight: 400;\n  color: var(--text-body);\n  font-family: inherit;\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease), color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-item:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-item:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.sn-item.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  font-weight: 500;\n}\n.sn-item.is-active:hover:not(:disabled) {\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n:host-context(.dark) .sn-item.is-active {\n  color: var(--text-strong);\n}\n.sn-item:focus-visible,\n.sn-fly-item:focus-visible,\n.sn-iconbtn:focus-visible,\n.sn-expand:focus-visible,\n.sn-user:focus-visible,\n.sn-switch:focus-visible,\n.sn-search-clr:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.sn-parent.has-active:not(.is-open) {\n  color: var(--text-strong);\n  font-weight: 500;\n}\n.sn-parent.has-active:not(.is-open) .sn-ic {\n  color: var(--primary-base);\n}\n.sn-ic {\n  flex: none;\n}\n.sn-label {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-caret {\n  flex: none;\n  color: var(--text-soft);\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-parent.is-open .sn-caret {\n  transform: rotate(90deg);\n}\n.sn-children {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin: 2px 0 2px 30px;\n}\n.sn-child {\n  padding: 7px 10px;\n  font-weight: 400;\n}\n.sn-badge {\n  flex: none;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn-trail {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.sn-head {\n  padding: 2px 4px 12px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-head:empty {\n  display: none;\n}\n.sn-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 2px 4px 10px;\n  padding: 7px 10px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.sn-search:focus-within {\n  border-color: var(--primary-base);\n}\n.sn-search-ic {\n  flex: none;\n  color: var(--text-soft);\n}\n.sn-search-in {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.sn-search-in::placeholder {\n  color: var(--text-soft);\n}\n.sn-search-clr {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-soft);\n  border-radius: var(--radius-sm);\n}\n.sn-search-clr:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.sn-empty {\n  padding: 16px 12px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n.sn-flyout {\n  display: none;\n  position: absolute;\n  left: calc(100% + 8px);\n  top: 0;\n  z-index: 30;\n  min-width: 190px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-regular-md);\n}\n.sn-flyout::before {\n  content: "";\n  position: absolute;\n  left: -8px;\n  top: 0;\n  bottom: 0;\n  width: 8px;\n}\n.sn.is-collapsed .sn-group:hover .sn-flyout {\n  display: block;\n}\n.sn-flyout-h {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 6px 10px 4px;\n}\n.sn-fly-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 7px 10px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  border-radius: var(--radius-md);\n  font-size: var(--fs-14);\n  color: var(--text-body);\n  font-family: inherit;\n  text-align: left;\n}\n.sn-fly-item:hover:not(:disabled) {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-fly-item.is-active {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.sn-fly-item .sn-badge {\n  margin-left: auto;\n}\n.sn-head,\n.sn-foot {\n  display: flex;\n}\n.sn-foot {\n  padding: 10px 4px 2px;\n  border-top: 1px solid var(--border-soft);\n}\n.sn-foot:empty {\n  display: none;\n}\n.sn-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-user:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-uav {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.sn-uav img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.sn-uinfo {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-uname {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-umail {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-switch {\n  flex: none;\n  display: inline-flex;\n  color: var(--text-soft);\n  padding: 2px;\n  border-radius: var(--radius-sm);\n}\n.sn-switch:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.sn.is-collapsed .sn-user {\n  justify-content: center;\n  padding: 6px 0;\n}\n.sn.is-collapsed .sn-label,\n.sn.is-collapsed .sn-badge,\n.sn.is-collapsed .sn-trail,\n.sn.is-collapsed .sn-caret {\n  display: none;\n}\n.sn.is-collapsed .sn-item {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  margin: 0 auto;\n  justify-content: center;\n  gap: 0;\n}\n.sn.is-collapsed .sn-parent.has-active {\n  background: var(--primary-bg-subtle);\n}\n.sn.is-collapsed .sn-parent.has-active .sn-ic {\n  color: var(--primary-base);\n}\n.sn.is-collapsed .sn-group:has(.sn-parent:disabled):hover .sn-flyout {\n  display: none;\n}\n.sn.is-collapsed {\n  overflow: visible;\n}\n.sn.is-collapsed .sn-flyout {\n  position: fixed;\n}\n.sn.is-collapsed .sn-head,\n.sn.is-collapsed .sn-foot {\n  justify-content: center;\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=hrm-side-nav.css.map */\n'] }]
  }], null, { sections: [{ type: Input, args: [{ isSignal: true, alias: "sections", required: false }] }], selectedKey: [{ type: Input, args: [{ isSignal: true, alias: "selectedKey", required: false }] }], collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }, { type: Output, args: ["collapsedChange"] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], caretIcon: [{ type: Input, args: [{ isSignal: true, alias: "caretIcon", required: false }] }], iconStroke: [{ type: Input, args: [{ isSignal: true, alias: "iconStroke", required: false }] }], logoSrc: [{ type: Input, args: [{ isSignal: true, alias: "logoSrc", required: false }] }], logoMarkSrc: [{ type: Input, args: [{ isSignal: true, alias: "logoMarkSrc", required: false }] }], toggleIcon: [{ type: Input, args: [{ isSignal: true, alias: "toggleIcon", required: false }] }], expandIcon: [{ type: Input, args: [{ isSignal: true, alias: "expandIcon", required: false }] }], user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], showSwitchAccount: [{ type: Input, args: [{ isSignal: true, alias: "showSwitchAccount", required: false }] }], switchLabel: [{ type: Input, args: [{ isSignal: true, alias: "switchLabel", required: false }] }], switchIcon: [{ type: Input, args: [{ isSignal: true, alias: "switchIcon", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }], searchEmpty: [{ type: Input, args: [{ isSignal: true, alias: "searchEmpty", required: false }] }], itemClick: [{ type: Output, args: ["itemClick"] }], userClick: [{ type: Output, args: ["userClick"] }], switchAccount: [{ type: Output, args: ["switchAccount"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSideNav, { className: "HrmSideNav", filePath: "libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts", lineNumber: 350 });
})();

export {
  HrmSideNav
};
//# sourceMappingURL=chunk-5JLQGRFF.js.map
