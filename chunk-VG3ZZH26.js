import {
  NzMenuDirective,
  NzMenuGroupComponent,
  NzMenuItemComponent,
  NzMenuModule,
  NzSubMenuComponent
} from "./chunk-LIWX2G7Z.js";
import {
  NzAvatarComponent,
  NzAvatarModule
} from "./chunk-KXHKNX77.js";
import {
  NzInputDirective,
  NzInputGroupComponent,
  NzInputGroupWhitSuffixOrPrefixDirective,
  NzInputModule
} from "./chunk-VA24G7CQ.js";
import {
  Search,
  Selector,
  TablerIconComponent,
  X
} from "./chunk-QL2Z65KF.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts
var _c0 = [[["", "snHead", ""]], [["", "snFooter", ""]], [["", "snActions", ""]]];
var _c1 = ["[snHead]", "[snFooter]", "[snActions]"];
var _forTrack0 = ($index, $item) => $item.key;
function HrmSideNav_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.logoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function HrmSideNav_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_1_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.collapsed.set(true));
    });
    \u0275\u0275element(1, "tabler-icon", 16);
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
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_1_Conditional_1_Template, 1, 1, "img", 12);
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275projection(3, 2);
    \u0275\u0275conditionalCreate(4, HrmSideNav_Conditional_1_Conditional_4_Template, 2, 3, "button", 14);
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
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.logoMarkSrc() || ctx_r0.logoSrc(), \u0275\u0275sanitizeUrl);
  }
}
function HrmSideNav_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.collapsed.set(false));
    });
    \u0275\u0275element(1, "tabler-icon", 16);
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
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_2_Conditional_1_Template, 1, 1, "img", 17);
    \u0275\u0275conditionalCreate(2, HrmSideNav_Conditional_2_Conditional_2_Template, 2, 3, "button", 18);
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
function HrmSideNav_Conditional_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r0.searchIcon)("size", 16)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_5_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_5_ng_template_4_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearSearch());
    });
    \u0275\u0275element(1, "tabler-icon", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r0.clearLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.clearIcon)("size", 14)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_Conditional_5_ng_template_4_Conditional_0_Template, 2, 4, "button", 23);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.query() ? 0 : -1);
  }
}
function HrmSideNav_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-input-group", 20)(1, "input", 21);
    \u0275\u0275listener("input", function HrmSideNav_Conditional_5_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearch($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(2, HrmSideNav_Conditional_5_ng_template_2_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, HrmSideNav_Conditional_5_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const snSearchPre_r6 = \u0275\u0275reference(3);
    const snSearchSuf_r7 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzPrefix", snSearchPre_r6)("nzSuffix", snSearchSuf_r7);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.query());
    \u0275\u0275attribute("placeholder", ctx_r0.searchPlaceholder() || null)("aria-label", ctx_r0.searchPlaceholder() || null);
  }
}
function HrmSideNav_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 25);
  }
  if (rf & 2) {
    const sec_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzTitle", sec_r8.header);
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 29);
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", it_r10.icon)("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("icon", ctx_r0.caretIcon())("size", 16)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Conditional_0_Template, 1, 3, "tabler-icon", 29);
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Conditional_3_Template, 1, 3, "tabler-icon", 31);
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(it_r10.icon ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r10.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.collapsed() && ctx_r0.caretIcon() ? 3 : -1);
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.trailing);
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r12.badge);
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 32);
    \u0275\u0275listener("click", function HrmSideNav_For_9_For_2_Conditional_0_For_5_Template_li_click_0_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.pick(c_r12));
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_For_9_For_2_Conditional_0_For_5_Conditional_3_Template, 2, 1, "span", 33);
    \u0275\u0275conditionalCreate(4, HrmSideNav_For_9_For_2_Conditional_0_For_5_Conditional_4_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("nzSelected", c_r12.key === ctx_r0.selectedKey())("nzDisabled", c_r12.disabled ?? false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r12.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r12.trailing ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r12.badge != null ? 4 : -1);
  }
}
function HrmSideNav_For_9_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275listener("nzOpenChange", function HrmSideNav_For_9_For_2_Conditional_0_Template_li_nzOpenChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const it_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setOpen(it_r10.key, $event));
    });
    \u0275\u0275template(1, HrmSideNav_For_9_For_2_Conditional_0_ng_template_1_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, HrmSideNav_For_9_For_2_Conditional_0_For_5_Template, 5, 5, "li", 27, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parentTitle_r13 = \u0275\u0275reference(2);
    const it_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sn-open", ctx_r0.isOpen(it_r10.key));
    \u0275\u0275property("nzOpen", ctx_r0.isOpen(it_r10.key))("nzDisabled", it_r10.disabled ?? false)("nzTitle", parentTitle_r13);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(it_r10.children);
  }
}
function HrmSideNav_For_9_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabler-icon", 29);
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", it_r10.icon)("size", 20)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_For_9_For_2_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r10.trailing);
  }
}
function HrmSideNav_For_9_For_2_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r10.badge);
  }
}
function HrmSideNav_For_9_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 32);
    \u0275\u0275listener("click", function HrmSideNav_For_9_For_2_Conditional_1_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const it_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.pick(it_r10));
    });
    \u0275\u0275conditionalCreate(1, HrmSideNav_For_9_For_2_Conditional_1_Conditional_1_Template, 1, 3, "tabler-icon", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmSideNav_For_9_For_2_Conditional_1_Conditional_4_Template, 2, 1, "span", 33);
    \u0275\u0275conditionalCreate(5, HrmSideNav_For_9_For_2_Conditional_1_Conditional_5_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSelected", it_r10.key === ctx_r0.selectedKey())("nzDisabled", it_r10.disabled ?? false);
    \u0275\u0275attribute("title", ctx_r0.collapsed() ? it_r10.label : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r10.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r10.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r10.trailing ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(it_r10.badge != null ? 5 : -1);
  }
}
function HrmSideNav_For_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_For_9_For_2_Conditional_0_Template, 6, 5, "li", 26)(1, HrmSideNav_For_9_For_2_Conditional_1_Template, 6, 7, "li", 27);
  }
  if (rf & 2) {
    const it_r10 = ctx.$implicit;
    \u0275\u0275conditional((it_r10.children == null ? null : it_r10.children.length) ? 0 : 1);
  }
}
function HrmSideNav_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmSideNav_For_9_Conditional_0_Template, 1, 1, "li", 25);
    \u0275\u0275repeaterCreate(1, HrmSideNav_For_9_For_2_Template, 2, 1, null, null, _forTrack0);
  }
  if (rf & 2) {
    const sec_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(sec_r8.header && !ctx_r0.collapsed() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(sec_r8.items);
  }
}
function HrmSideNav_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.searchEmpty());
  }
}
function HrmSideNav_Conditional_12_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r16 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r16.email);
  }
}
function HrmSideNav_Conditional_12_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_12_Conditional_2_Conditional_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.switchAccount.emit());
    });
    \u0275\u0275element(1, "tabler-icon", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", ctx_r0.switchLabel() || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.switchIcon() ?? ctx_r0.selectorIcon)("size", 18)("stroke", ctx_r0.iconStroke());
  }
}
function HrmSideNav_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmSideNav_Conditional_12_Conditional_2_Conditional_3_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmSideNav_Conditional_12_Conditional_2_Conditional_4_Template, 2, 4, "span", 40);
  }
  if (rf & 2) {
    const u_r16 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r16.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r16.email ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showSwitchAccount() ? 4 : -1);
  }
}
function HrmSideNav_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function HrmSideNav_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userClick.emit());
    });
    \u0275\u0275element(1, "nz-avatar", 36);
    \u0275\u0275conditionalCreate(2, HrmSideNav_Conditional_12_Conditional_2_Template, 5, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r16 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", u_r16.name);
    \u0275\u0275advance();
    \u0275\u0275property("nzSize", 34)("nzSrc", u_r16.avatar)("nzText", u_r16.avatar ? void 0 : u_r16.initials || ctx_r0.initialsOf(u_r16.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.collapsed() ? 2 : -1);
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
  isOpen(key) {
    if (this.searchable() && this.query().trim())
      return true;
    const m = this.manual().get(key);
    return m !== void 0 ? m : this.openInit().has(key);
  }
  /** nz-submenu tự toggle khi bấm tiêu đề; đồng bộ lại vào map manual. */
  setOpen(key, open) {
    const m = new Map(this.manual());
    m.set(key, open);
    this.manual.set(m);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSideNav, selectors: [["hrm-side-nav"]], hostAttrs: [1, "hrm-side-nav"], inputs: { sections: [1, "sections"], selectedKey: [1, "selectedKey"], collapsed: [1, "collapsed"], ariaLabel: [1, "ariaLabel"], caretIcon: [1, "caretIcon"], iconStroke: [1, "iconStroke"], logoSrc: [1, "logoSrc"], logoMarkSrc: [1, "logoMarkSrc"], toggleIcon: [1, "toggleIcon"], expandIcon: [1, "expandIcon"], user: [1, "user"], showSwitchAccount: [1, "showSwitchAccount"], switchLabel: [1, "switchLabel"], switchIcon: [1, "switchIcon"], searchable: [1, "searchable"], searchPlaceholder: [1, "searchPlaceholder"], clearLabel: [1, "clearLabel"], searchEmpty: [1, "searchEmpty"] }, outputs: { collapsed: "collapsedChange", itemClick: "itemClick", userClick: "userClick", switchAccount: "switchAccount" }, ngContentSelectors: _c1, decls: 14, vars: 9, consts: [["snSearchPre", ""], ["snSearchSuf", ""], ["parentTitle", ""], [1, "sn"], [1, "sn-brand"], [1, "sn-brand-mark"], [1, "sn-head"], [1, "sn-scroll"], ["nz-menu", "", "nzMode", "inline", 3, "nzInlineCollapsed", "nzInlineIndent"], [1, "sn-empty"], [1, "sn-foot"], ["type", "button", 1, "sn-user"], ["alt", "logo", 1, "sn-brand-logo", 3, "src"], [1, "sn-brand-act"], ["type", "button", "aria-label", "Thu g\u1ECDn", 1, "sn-iconbtn"], ["type", "button", "aria-label", "Thu g\u1ECDn", 1, "sn-iconbtn", 3, "click"], [3, "icon", "size", "stroke"], ["alt", "logo", 1, "sn-mark-logo", 3, "src"], ["type", "button", "aria-label", "M\u1EDF r\u1ED9ng", 1, "sn-expand"], ["type", "button", "aria-label", "M\u1EDF r\u1ED9ng", 1, "sn-expand", 3, "click"], [1, "sn-search", 3, "nzPrefix", "nzSuffix"], ["nz-input", "", "type", "text", 3, "input", "value"], [1, "sn-search-ic", 3, "icon", "size", "stroke"], ["type", "button", 1, "sn-search-clr"], ["type", "button", 1, "sn-search-clr", 3, "click"], ["nz-menu-group", "", 3, "nzTitle"], ["nz-submenu", "", 3, "nzOpen", "sn-open", "nzDisabled", "nzTitle"], ["nz-menu-item", "", 3, "nzSelected", "nzDisabled"], ["nz-submenu", "", 3, "nzOpenChange", "nzOpen", "nzDisabled", "nzTitle"], [1, "sn-ic", 3, "icon", "size", "stroke"], [1, "sn-label"], [1, "sn-caret", 3, "icon", "size", "stroke"], ["nz-menu-item", "", 3, "click", "nzSelected", "nzDisabled"], [1, "sn-trail"], [1, "sn-badge"], ["type", "button", 1, "sn-user", 3, "click"], [1, "sn-uav", 3, "nzSize", "nzSrc", "nzText"], [1, "sn-uinfo"], [1, "sn-uname"], [1, "sn-umail"], ["role", "button", 1, "sn-switch"], ["role", "button", 1, "sn-switch", 3, "click"]], template: function HrmSideNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "nav", 3);
        \u0275\u0275conditionalCreate(1, HrmSideNav_Conditional_1_Template, 5, 2, "div", 4)(2, HrmSideNav_Conditional_2_Template, 3, 2, "div", 5);
        \u0275\u0275elementStart(3, "div", 6);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmSideNav_Conditional_5_Template, 6, 5);
        \u0275\u0275elementStart(6, "div", 7)(7, "ul", 8);
        \u0275\u0275repeaterCreate(8, HrmSideNav_For_9_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, HrmSideNav_Conditional_10_Template, 2, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275conditionalCreate(12, HrmSideNav_Conditional_12_Template, 3, 5, "button", 11);
        \u0275\u0275projection(13, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275classProp("is-collapsed", ctx.collapsed());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel() || null);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.collapsed() ? 1 : 2);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.searchable() && !ctx.collapsed() ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("nzInlineCollapsed", ctx.collapsed())("nzInlineIndent", 0);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.displaySections());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.searchable() && !ctx.collapsed() && ctx.query().trim() && !ctx.displaySections().length ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_8_0 = ctx.user()) ? 12 : -1, tmp_8_0);
      }
    }, dependencies: [NzMenuModule, NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuGroupComponent, NzAvatarModule, NzAvatarComponent, NzInputModule, NzInputDirective, NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective, TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.sn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 264px;\n  padding: 12px 10px;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  overflow: hidden;\n  min-height: 0;\n  transition: width var(--duration-normal, .22s) var(--ease-out, ease);\n}\n.sn.is-collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n  padding: 12px 8px;\n  align-items: stretch;\n}\n.sn-brand[_ngcontent-%COMP%], \n.sn-brand-mark[_ngcontent-%COMP%], \n.sn-head[_ngcontent-%COMP%], \n.sn-search[_ngcontent-%COMP%], \n.sn-foot[_ngcontent-%COMP%] {\n  flex: none;\n}\n.sn-scroll[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.sn-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px 12px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-brand-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  flex: 1;\n  min-width: 0;\n  object-fit: contain;\n  object-position: left center;\n}\n.sn-brand-act[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n}\n.sn-iconbtn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-iconbtn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-brand-mark[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-mark-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-expand[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 8px 0;\n  margin: auto;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n  box-shadow: var(--shadow-regular-xs);\n}\n.sn-brand-mark[_ngcontent-%COMP%]:hover   .sn-mark-logo[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.sn-brand-mark[_ngcontent-%COMP%]:hover   .sn-expand[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sn-expand[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-head[_ngcontent-%COMP%] {\n  padding: 2px 4px 12px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--border-soft);\n  display: flex;\n}\n.sn-head[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu {\n  background: transparent;\n  border-inline-end: none;\n  font-size: var(--fs-14);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu-inline-collapsed {\n  width: 100%;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-item, \n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title {\n  border-radius: var(--radius-lg);\n  margin-inline: 0;\n  margin-block: 0;\n  width: 100%;\n  height: 37px;\n  line-height: 37px;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu-inline .ant-menu-item:not(:last-child) {\n  margin-bottom: 0;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu-inline .ant-menu-item::after {\n  display: none;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-title-content {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  width: 100%;\n  padding: 0 10px;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 10px;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title > *:first-child {\n  margin-inline-start: 10px;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-sub.ant-menu-inline .ant-menu-item {\n  margin-inline-start: 30px;\n  width: calc(100% - 30px);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-item-disabled), \n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu .ant-menu-submenu-title:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu .ant-menu-item-selected:hover {\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu.ant-menu .ant-menu-item-selected {\n  font-weight: 500;\n}\n.dark[_nghost-%COMP%]   .sn[_ngcontent-%COMP%]     .ant-menu-item-selected, .dark   [_nghost-%COMP%]   .sn[_ngcontent-%COMP%]     .ant-menu-item-selected {\n  color: var(--text-strong);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  color: var(--text-strong);\n  font-weight: 500;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-submenu-selected > .ant-menu-submenu-title .sn-ic {\n  color: var(--primary-base);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-submenu-arrow {\n  display: none;\n}\n.sn-caret[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn[_ngcontent-%COMP%]     .sn-open > .ant-menu-submenu-title .sn-caret {\n  transform: rotate(90deg);\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-item-group {\n  margin-top: 14px;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-item-group:first-child {\n  margin-top: 0;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu-item-group-title {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.sn-ic[_ngcontent-%COMP%] {\n  flex: none;\n}\n.sn-label[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-item .sn-label, \n.sn[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title .sn-label {\n  flex: 1 1 0%;\n  min-width: 0;\n}\n.sn-badge[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn-trail[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.sn-search.ant-input-affix-wrapper.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  margin: 2px 4px 10px;\n  padding: 7px 10px;\n  width: auto;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.sn-search.ant-input-affix-wrapper-focused[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  box-shadow: none;\n}\n.sn-search[_ngcontent-%COMP%]     .ant-input.ant-input {\n  background: transparent;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.sn-search-ic[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n.sn-search-clr[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-soft);\n  border-radius: var(--radius-sm);\n}\n.sn-search-clr[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.sn-empty[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n.sn-iconbtn[_ngcontent-%COMP%]:focus-visible, \n.sn-expand[_ngcontent-%COMP%]:focus-visible, \n.sn-user[_ngcontent-%COMP%]:focus-visible, \n.sn-switch[_ngcontent-%COMP%]:focus-visible, \n.sn-search-clr[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.sn-foot[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px 4px 2px;\n  border-top: 1px solid var(--border-soft);\n}\n.sn-foot[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.sn-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-user[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-uav[_ngcontent-%COMP%]     .ant-avatar {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.sn-uinfo[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-uname[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-umail[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-switch[_ngcontent-%COMP%] {\n  flex: none;\n  display: inline-flex;\n  color: var(--text-soft);\n  padding: 2px;\n  border-radius: var(--radius-sm);\n}\n.sn-switch[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-user[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 6px 0;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-label[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-badge[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-trail[_ngcontent-%COMP%] {\n  display: none;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu-item-group-title {\n  display: none;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu .ant-menu-item, \n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  margin: 0 auto 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu-title-content {\n  flex: none;\n  gap: 0;\n  padding: 0;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title {\n  padding-right: 0;\n  justify-content: center;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]     .ant-menu .ant-menu-submenu-title > *:first-child {\n  margin-inline-start: 0;\n}\n.sn.is-collapsed[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-head[_ngcontent-%COMP%], \n.sn.is-collapsed[_ngcontent-%COMP%]   .sn-foot[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=hrm-side-nav.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSideNav, [{
    type: Component,
    args: [{ selector: "hrm-side-nav", imports: [NzMenuModule, NzAvatarModule, NzInputModule, TablerIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `
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
        <!-- \xD4 t\xECm ki\u1EBFm = nz-input (engine ng-zorro), skin token qua class .sn-search -->
        <nz-input-group class="sn-search" [nzPrefix]="snSearchPre" [nzSuffix]="snSearchSuf">
          <input nz-input type="text" [value]="query()" (input)="onSearch($event)"
            [attr.placeholder]="searchPlaceholder() || null" [attr.aria-label]="searchPlaceholder() || null" />
        </nz-input-group>
        <ng-template #snSearchPre>
          <tabler-icon class="sn-search-ic" [icon]="$any(searchIcon)" [size]="16" [stroke]="iconStroke()" />
        </ng-template>
        <ng-template #snSearchSuf>
          @if (query()) {
            <button type="button" class="sn-search-clr" (click)="clearSearch()" [attr.aria-label]="clearLabel() || null">
              <tabler-icon [icon]="$any(clearIcon)" [size]="14" [stroke]="iconStroke()" />
            </button>
          }
        </ng-template>
      }

      <div class="sn-scroll">
        <!-- Danh s\xE1ch nav = nz-menu. Thu g\u1ECDn: nzInlineCollapsed \u2192 submenu bung popup (overlay ng-zorro).
             Item l\u1EB7p inline trong ul[nz-menu] (kh\xF4ng qua ng-template ngo\xE0i \u2014 directive menu c\u1EA7n DI cha). -->
        <!-- nzInlineIndent=0: th\u1EE5t l\u1EC1 t\u1EF1 qu\u1EA3n b\u1EB1ng CSS (ant b\u01A1m padding-left inline-style theo indent
             \u2192 CSS kh\xF4ng th\u1EAFng \u0111\u01B0\u1EE3c; \u0111\u1EB7t 0 r\u1ED3i pad trong .ant-menu-title-content). -->
        <ul nz-menu nzMode="inline" [nzInlineCollapsed]="collapsed()" [nzInlineIndent]="0">
          @for (sec of displaySections(); track $index) {
            @if (sec.header && !collapsed()) {
              <li nz-menu-group [nzTitle]="sec.header"></li>
            }
            @for (it of sec.items; track it.key) {
              @if (it.children?.length) {
                <li nz-submenu [nzOpen]="isOpen(it.key)" (nzOpenChange)="setOpen(it.key, $event)"
                  [class.sn-open]="isOpen(it.key)"
                  [nzDisabled]="it.disabled ?? false" [nzTitle]="parentTitle">
                  <ng-template #parentTitle>
                    @if (it.icon) { <tabler-icon class="sn-ic" [icon]="$any(it.icon)" [size]="20" [stroke]="iconStroke()" /> }
                    <span class="sn-label">{{ it.label }}</span>
                    @if (!collapsed() && caretIcon()) { <tabler-icon class="sn-caret" [icon]="$any(caretIcon())" [size]="16" [stroke]="iconStroke()" /> }
                  </ng-template>
                  <ul>
                    @for (c of it.children!; track c.key) {
                      <li nz-menu-item [nzSelected]="c.key === selectedKey()" [nzDisabled]="c.disabled ?? false" (click)="pick(c)">
                        <span class="sn-label">{{ c.label }}</span>
                        @if (c.trailing) { <span class="sn-trail">{{ c.trailing }}</span> }
                        @if (c.badge != null) { <span class="sn-badge">{{ c.badge }}</span> }
                      </li>
                    }
                  </ul>
                </li>
              } @else {
                <li nz-menu-item [nzSelected]="it.key === selectedKey()" [nzDisabled]="it.disabled ?? false"
                  [attr.title]="collapsed() ? it.label : null" (click)="pick(it)">
                  @if (it.icon) { <tabler-icon class="sn-ic" [icon]="$any(it.icon)" [size]="20" [stroke]="iconStroke()" /> }
                  <span class="sn-label">{{ it.label }}</span>
                  @if (it.trailing) { <span class="sn-trail">{{ it.trailing }}</span> }
                  @if (it.badge != null) { <span class="sn-badge">{{ it.badge }}</span> }
                </li>
              }
            }
          }
        </ul>

        @if (searchable() && !collapsed() && query().trim() && !displaySections().length) {
          <div class="sn-empty">{{ searchEmpty() }}</div>
        }
      </div>

      <div class="sn-foot">
        @if (user(); as u) {
          <button type="button" class="sn-user" (click)="userClick.emit()" [attr.aria-label]="u.name">
            <nz-avatar class="sn-uav" [nzSize]="34" [nzSrc]="u.avatar" [nzText]="u.avatar ? undefined : (u.initials || initialsOf(u.name))" />
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
  `, host: { class: "hrm-side-nav" }, styles: ["/* angular:styles/component:css;8faf313a87473cb2dd498ae6e25e2f814b0b1c1544a0777ec0915783ffd83688;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts */\n:host {\n  display: block;\n}\n.sn {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 264px;\n  padding: 12px 10px;\n  background: var(--bg-surface);\n  border-right: 1px solid var(--border-sub);\n  font-family: var(--font-sans);\n  overflow: hidden;\n  min-height: 0;\n  transition: width var(--duration-normal, .22s) var(--ease-out, ease);\n}\n.sn.is-collapsed {\n  width: 72px;\n  padding: 12px 8px;\n  align-items: stretch;\n}\n.sn-brand,\n.sn-brand-mark,\n.sn-head,\n.sn-search,\n.sn-foot {\n  flex: none;\n}\n.sn-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n.sn-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 6px 12px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-brand-logo {\n  height: 30px;\n  width: auto;\n  flex: 1;\n  min-width: 0;\n  object-fit: contain;\n  object-position: left center;\n}\n.sn-brand-act {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  flex: none;\n}\n.sn-iconbtn {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.sn-iconbtn:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-brand-mark {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.sn-mark-logo {\n  height: 30px;\n  width: auto;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn-expand {\n  position: absolute;\n  inset: 0 0 8px 0;\n  margin: auto;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n  opacity: 0;\n  transition: opacity var(--duration-fast, .15s) var(--ease-out, ease);\n  box-shadow: var(--shadow-regular-xs);\n}\n.sn-brand-mark:hover .sn-mark-logo {\n  opacity: 0;\n}\n.sn-brand-mark:hover .sn-expand {\n  opacity: 1;\n}\n.sn-expand:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn-head {\n  padding: 2px 4px 12px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--border-soft);\n  display: flex;\n}\n.sn-head:empty {\n  display: none;\n}\n.sn ::ng-deep .ant-menu.ant-menu {\n  background: transparent;\n  border-inline-end: none;\n  font-size: var(--fs-14);\n}\n.sn ::ng-deep .ant-menu.ant-menu-inline-collapsed {\n  width: 100%;\n}\n.sn ::ng-deep .ant-menu .ant-menu-item,\n.sn ::ng-deep .ant-menu .ant-menu-submenu-title {\n  border-radius: var(--radius-lg);\n  margin-inline: 0;\n  margin-block: 0;\n  width: 100%;\n  height: 37px;\n  line-height: 37px;\n}\n.sn ::ng-deep .ant-menu.ant-menu-inline .ant-menu-item:not(:last-child) {\n  margin-bottom: 0;\n}\n.sn ::ng-deep .ant-menu.ant-menu-inline .ant-menu-item::after {\n  display: none;\n}\n.sn ::ng-deep .ant-menu-title-content {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  width: 100%;\n  padding: 0 10px;\n}\n.sn ::ng-deep .ant-menu .ant-menu-submenu-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 10px;\n}\n.sn ::ng-deep .ant-menu .ant-menu-submenu-title > *:first-child {\n  margin-inline-start: 10px;\n}\n.sn ::ng-deep .ant-menu-sub.ant-menu-inline .ant-menu-item {\n  margin-inline-start: 30px;\n  width: calc(100% - 30px);\n}\n.sn ::ng-deep .ant-menu.ant-menu .ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-item-disabled),\n.sn ::ng-deep .ant-menu.ant-menu .ant-menu-submenu-title:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.sn ::ng-deep .ant-menu.ant-menu .ant-menu-item-selected:hover {\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn ::ng-deep .ant-menu.ant-menu .ant-menu-item-selected {\n  font-weight: 500;\n}\n:host-context(.dark) .sn ::ng-deep .ant-menu-item-selected {\n  color: var(--text-strong);\n}\n.sn ::ng-deep .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  color: var(--text-strong);\n  font-weight: 500;\n}\n.sn ::ng-deep .ant-menu-submenu-selected > .ant-menu-submenu-title .sn-ic {\n  color: var(--primary-base);\n}\n.sn ::ng-deep .ant-menu-submenu-arrow {\n  display: none;\n}\n.sn-caret {\n  flex: none;\n  color: var(--text-soft);\n  transition: transform var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.sn ::ng-deep .sn-open > .ant-menu-submenu-title .sn-caret {\n  transform: rotate(90deg);\n}\n.sn ::ng-deep .ant-menu-item-group {\n  margin-top: 14px;\n}\n.sn ::ng-deep .ant-menu-item-group:first-child {\n  margin-top: 0;\n}\n.sn ::ng-deep .ant-menu-item-group-title {\n  font-size: var(--fs-11);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  padding: 10px 10px 4px;\n}\n.sn-ic {\n  flex: none;\n}\n.sn-label {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn ::ng-deep .ant-menu .ant-menu-item .sn-label,\n.sn ::ng-deep .ant-menu .ant-menu-submenu-title .sn-label {\n  flex: 1 1 0%;\n  min-width: 0;\n}\n.sn-badge {\n  flex: none;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.sn-trail {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.sn-search.ant-input-affix-wrapper.ant-input-affix-wrapper {\n  margin: 2px 4px 10px;\n  padding: 7px 10px;\n  width: auto;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.sn-search.ant-input-affix-wrapper-focused {\n  border-color: var(--primary-base);\n  box-shadow: none;\n}\n.sn-search ::ng-deep .ant-input.ant-input {\n  background: transparent;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.sn-search-ic {\n  color: var(--text-soft);\n}\n.sn-search-clr {\n  display: grid;\n  place-items: center;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-soft);\n  border-radius: var(--radius-sm);\n}\n.sn-search-clr:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.sn-empty {\n  padding: 16px 12px;\n  font-size: var(--fs-13);\n  color: var(--text-soft);\n  text-align: center;\n}\n.sn-iconbtn:focus-visible,\n.sn-expand:focus-visible,\n.sn-user:focus-visible,\n.sn-switch:focus-visible,\n.sn-search-clr:focus-visible {\n  outline: 2px solid var(--primary-focus-ring, var(--primary-base));\n  outline-offset: 1px;\n}\n.sn-foot {\n  display: flex;\n  padding: 10px 4px 2px;\n  border-top: 1px solid var(--border-soft);\n}\n.sn-foot:empty {\n  display: none;\n}\n.sn-user {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 6px 8px;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  text-align: left;\n}\n.sn-user:hover {\n  background: var(--bg-surface-subtle);\n}\n.sn-uav ::ng-deep .ant-avatar {\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-13);\n  font-weight: 600;\n}\n.sn-uinfo {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.sn-uname {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-umail {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sn-switch {\n  flex: none;\n  display: inline-flex;\n  color: var(--text-soft);\n  padding: 2px;\n  border-radius: var(--radius-sm);\n}\n.sn-switch:hover {\n  color: var(--text-strong);\n  background: var(--bg-surface-subtle);\n}\n.sn.is-collapsed .sn-user {\n  justify-content: center;\n  padding: 6px 0;\n}\n.sn.is-collapsed .sn-label,\n.sn.is-collapsed .sn-badge,\n.sn.is-collapsed .sn-trail {\n  display: none;\n}\n.sn.is-collapsed ::ng-deep .ant-menu-item-group-title {\n  display: none;\n}\n.sn.is-collapsed ::ng-deep .ant-menu .ant-menu-item,\n.sn.is-collapsed ::ng-deep .ant-menu .ant-menu-submenu-title {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  margin: 0 auto 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sn.is-collapsed ::ng-deep .ant-menu-title-content {\n  flex: none;\n  gap: 0;\n  padding: 0;\n}\n.sn.is-collapsed ::ng-deep .ant-menu .ant-menu-submenu-title {\n  padding-right: 0;\n  justify-content: center;\n}\n.sn.is-collapsed ::ng-deep .ant-menu .ant-menu-submenu-title > *:first-child {\n  margin-inline-start: 0;\n}\n.sn.is-collapsed {\n  overflow: visible;\n}\n.sn.is-collapsed .sn-head,\n.sn.is-collapsed .sn-foot {\n  justify-content: center;\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=hrm-side-nav.css.map */\n"] }]
  }], null, { sections: [{ type: Input, args: [{ isSignal: true, alias: "sections", required: false }] }], selectedKey: [{ type: Input, args: [{ isSignal: true, alias: "selectedKey", required: false }] }], collapsed: [{ type: Input, args: [{ isSignal: true, alias: "collapsed", required: false }] }, { type: Output, args: ["collapsedChange"] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], caretIcon: [{ type: Input, args: [{ isSignal: true, alias: "caretIcon", required: false }] }], iconStroke: [{ type: Input, args: [{ isSignal: true, alias: "iconStroke", required: false }] }], logoSrc: [{ type: Input, args: [{ isSignal: true, alias: "logoSrc", required: false }] }], logoMarkSrc: [{ type: Input, args: [{ isSignal: true, alias: "logoMarkSrc", required: false }] }], toggleIcon: [{ type: Input, args: [{ isSignal: true, alias: "toggleIcon", required: false }] }], expandIcon: [{ type: Input, args: [{ isSignal: true, alias: "expandIcon", required: false }] }], user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], showSwitchAccount: [{ type: Input, args: [{ isSignal: true, alias: "showSwitchAccount", required: false }] }], switchLabel: [{ type: Input, args: [{ isSignal: true, alias: "switchLabel", required: false }] }], switchIcon: [{ type: Input, args: [{ isSignal: true, alias: "switchIcon", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], searchPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "searchPlaceholder", required: false }] }], clearLabel: [{ type: Input, args: [{ isSignal: true, alias: "clearLabel", required: false }] }], searchEmpty: [{ type: Input, args: [{ isSignal: true, alias: "searchEmpty", required: false }] }], itemClick: [{ type: Output, args: ["itemClick"] }], userClick: [{ type: Output, args: ["userClick"] }], switchAccount: [{ type: Output, args: ["switchAccount"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSideNav, { className: "HrmSideNav", filePath: "libs/hrm-ui/src/lib/appshell/hrm-side-nav.ts", lineNumber: 327 });
})();

export {
  HrmSideNav
};
//# sourceMappingURL=chunk-VG3ZZH26.js.map
