import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  ArrowsMaximize,
  ArrowsMoveVertical,
  Briefcase,
  Building,
  ChevronLeft,
  ChevronRight,
  DotsVertical,
  Home,
  LayoutDistributeHorizontal,
  LayoutDistributeVertical,
  Minus,
  Plus,
  Search,
  TablerIconComponent,
  User,
  X,
  ZoomIn,
  ZoomOut
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  DestroyRef,
  Input,
  NgZone,
  Output,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/diagram/hrm-org-chart.ts
var _c0 = ["vp"];
var _c1 = ["toolbar"];
var _forTrack0 = ($index, $item) => $item.node.id;
function HrmOrgChart_Conditional_1_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labels().modeDepartment);
  }
}
function HrmOrgChart_Conditional_1_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labels().modePosition);
  }
}
function HrmOrgChart_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.labels().modeEmployee);
  }
}
function HrmOrgChart_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 20);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMode.set("department"));
    });
    \u0275\u0275element(2, "tabler-icon", 21);
    \u0275\u0275conditionalCreate(3, HrmOrgChart_Conditional_1_Conditional_2_Conditional_3_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMode.set("position"));
    });
    \u0275\u0275element(5, "tabler-icon", 21);
    \u0275\u0275conditionalCreate(6, HrmOrgChart_Conditional_1_Conditional_2_Conditional_6_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 20);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMode.set("employee"));
    });
    \u0275\u0275element(8, "tabler-icon", 21);
    \u0275\u0275conditionalCreate(9, HrmOrgChart_Conditional_1_Conditional_2_Conditional_9_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.viewMode() === "department");
    \u0275\u0275attribute("aria-label", ctx_r1.labels().modeDepartment || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.deptIcon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labels().modeDepartment ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.viewMode() === "position");
    \u0275\u0275attribute("aria-label", ctx_r1.labels().modePosition || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.posIcon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labels().modePosition ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.viewMode() === "employee");
    \u0275\u0275attribute("aria-label", ctx_r1.labels().modeEmployee || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.empIcon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labels().modeEmployee ? 9 : -1);
  }
}
function HrmOrgChart_Conditional_1_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tbOrient_r3 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbOrient_r3);
  }
}
function HrmOrgChart_Conditional_1_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tbTools_r4 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbTools_r4);
  }
}
function HrmOrgChart_Conditional_1_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tbZoom_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbZoom_r5);
  }
}
function HrmOrgChart_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFocus());
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.labels().home || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.homeIcon)("size", 18);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const tbOrient_r3 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbOrient_r3);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const tbTools_r4 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbTools_r4);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const tbZoom_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tbZoom_r5);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275conditionalCreate(1, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_1_Template, 2, 1, "div", 27);
    \u0275\u0275conditionalCreate(2, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_2_Template, 2, 1, "div", 27);
    \u0275\u0275conditionalCreate(3, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Conditional_3_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isHidden("orient") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isHidden("tools") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isHidden("zoom") ? 3 : -1);
  }
}
function HrmOrgChart_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 25);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_7_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMore($event));
    });
    \u0275\u0275element(2, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmOrgChart_Conditional_1_Conditional_7_Conditional_3_Template, 4, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.moreOpen());
    \u0275\u0275attribute("aria-expanded", ctx_r1.moreOpen())("aria-label", ctx_r1.labels().more || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.moreIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.moreOpen() ? 3 : -1);
  }
}
function HrmOrgChart_Conditional_1_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_8_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevMatch());
    });
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_8_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextMatch());
    });
    \u0275\u0275element(5, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_Conditional_8_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275element(7, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.matchIds().length ? ctx_r1.matchIdx() + 1 + "/" + ctx_r1.matchIds().length : "0");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.matchIds().length);
    \u0275\u0275attribute("aria-label", ctx_r1.labels().prevMatch || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.prevIcon)("size", 14);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.matchIds().length);
    \u0275\u0275attribute("aria-label", ctx_r1.labels().nextMatch || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.nextIcon)("size", 14);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.clearIcon)("size", 14);
  }
}
function HrmOrgChart_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "tabler-icon", 28);
    \u0275\u0275elementStart(2, "input", 29);
    \u0275\u0275listener("input", function HrmOrgChart_Conditional_1_Conditional_8_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    })("keydown.enter", function HrmOrgChart_Conditional_1_Conditional_8_Template_input_keydown_enter_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextMatch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HrmOrgChart_Conditional_1_Conditional_8_Conditional_3_Template, 8, 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.searchIcon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.searchQuery());
    \u0275\u0275attribute("placeholder", ctx_r1.labels().search || null)("aria-label", ctx_r1.labels().search || null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchQuery() ? 3 : -1);
  }
}
function HrmOrgChart_Conditional_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.orientation.set("vertical"));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.orientation.set("horizontal"));
    });
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-on", ctx_r1.orientation() === "vertical");
    \u0275\u0275attribute("aria-label", ctx_r1.labels().vertical || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.vIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r1.orientation() === "horizontal");
    \u0275\u0275attribute("aria-label", ctx_r1.labels().horizontal || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.hIcon)("size", 18);
  }
}
function HrmOrgChart_Conditional_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.compact.set(!ctx_r1.compact()));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275element(5, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-on", ctx_r1.compact());
    \u0275\u0275attribute("aria-label", ctx_r1.labels().compact || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.compactIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.labels().expandAll || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.plusIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.labels().collapseAll || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.minusIcon)("size", 18);
  }
}
function HrmOrgChart_Conditional_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.zoomBy(0.9));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fit());
    });
    \u0275\u0275element(3, "tabler-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function HrmOrgChart_Conditional_1_ng_template_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.zoomBy(1.1));
    });
    \u0275\u0275element(5, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r1.labels().zoomOut || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.zoomOutIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.labels().fit || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.fitIcon)("size", 18);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.labels().zoomIn || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.zoomInIcon)("size", 18);
  }
}
function HrmOrgChart_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275conditionalCreate(2, HrmOrgChart_Conditional_1_Conditional_2_Template, 10, 18, "div", 13);
    \u0275\u0275conditionalCreate(3, HrmOrgChart_Conditional_1_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(4, HrmOrgChart_Conditional_1_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275conditionalCreate(5, HrmOrgChart_Conditional_1_Conditional_5_Template, 2, 1, "div", 16);
    \u0275\u0275conditionalCreate(6, HrmOrgChart_Conditional_1_Conditional_6_Template, 2, 3, "button", 17);
    \u0275\u0275conditionalCreate(7, HrmOrgChart_Conditional_1_Conditional_7_Template, 4, 7, "div", 18);
    \u0275\u0275conditionalCreate(8, HrmOrgChart_Conditional_1_Conditional_8_Template, 4, 6, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HrmOrgChart_Conditional_1_ng_template_9_Template, 4, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, HrmOrgChart_Conditional_1_ng_template_11_Template, 6, 11, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, HrmOrgChart_Conditional_1_ng_template_13_Template, 6, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("oc-toolbar--tight", ctx_r1.tight());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showModes() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isHidden("orient") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isHidden("tools") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isHidden("zoom") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.focusable() && ctx_r1.focusId() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hidden().length ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.searchable() ? 8 : -1);
  }
}
function HrmOrgChart_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 34);
    \u0275\u0275element(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275element(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.labels().directLine);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.labels().dottedLine);
  }
}
function HrmOrgChart_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 37);
  }
  if (rf & 2) {
    const e_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-dim", ctx_r1.isEdgeDim(e_r13))("is-lit", ctx_r1.isEdgeLit(e_r13));
    \u0275\u0275attribute("d", e_r13.d);
  }
}
function HrmOrgChart_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 38);
  }
  if (rf & 2) {
    const e_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("d", e_r14.d);
  }
}
function HrmOrgChart_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmOrgChart_For_10_Conditional_0_Template, 1, 1, ":svg:path", 38);
  }
  if (rf & 2) {
    const e_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isDottedLit(e_r14) ? 0 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", n_r16.node.avatar, \u0275\u0275sanitizeUrl);
  }
}
function HrmOrgChart_For_12_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", n_r16.node.initials || ctx_r1.initialsOf(n_r16.node.name), " ");
  }
}
function HrmOrgChart_For_12_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r16.node.title);
  }
}
function HrmOrgChart_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "span", 47);
    \u0275\u0275conditionalCreate(8, HrmOrgChart_For_12_Conditional_1_Conditional_8_Template, 1, 1, "img", 48)(9, HrmOrgChart_For_12_Conditional_1_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 49)(11, "span", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, HrmOrgChart_For_12_Conditional_1_Conditional_13_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r16.node.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.headcountText(n_r16.node));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-hue", n_r16.node.avatar ? null : ctx_r1.avatarHue(n_r16.node.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.avatar ? 8 : 9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r16.node.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.title ? 13 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.breakdownText(n_r16.node), ")");
  }
}
function HrmOrgChart_For_12_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, HrmOrgChart_For_12_Conditional_2_Conditional_4_Conditional_2_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", n_r16.node.filled, "/", n_r16.node.slots ?? n_r16.node.filled, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.breakdownText(n_r16.node) ? 2 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", n_r16.node.hiring, " ", ctx_r1.labels().hiring);
  }
}
function HrmOrgChart_For_12_Conditional_2_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const h_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", h_r17.avatar, \u0275\u0275sanitizeUrl);
  }
}
function HrmOrgChart_For_12_Conditional_2_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const h_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", h_r17.initials || ctx_r1.initialsOf(h_r17.name), " ");
  }
}
function HrmOrgChart_For_12_Conditional_2_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r17.type);
  }
}
function HrmOrgChart_For_12_Conditional_2_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r17.dept);
  }
}
function HrmOrgChart_For_12_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 60);
    \u0275\u0275conditionalCreate(2, HrmOrgChart_For_12_Conditional_2_For_8_Conditional_2_Template, 1, 1, "img", 48)(3, HrmOrgChart_For_12_Conditional_2_For_8_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61)(5, "span", 62)(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HrmOrgChart_For_12_Conditional_2_For_8_Conditional_8_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HrmOrgChart_For_12_Conditional_2_For_8_Conditional_9_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-hue", h_r17.avatar ? null : ctx_r1.avatarHue(h_r17.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(h_r17.avatar ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(h_r17.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(h_r17.type ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(h_r17.dept ? 9 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function HrmOrgChart_For_12_Conditional_2_Conditional_9_Template_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("+", ctx_r1.holdersMore(n_r16.node), " ", ctx_r1.labels().moreHolders);
  }
}
function HrmOrgChart_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, HrmOrgChart_For_12_Conditional_2_Conditional_4_Template, 3, 3, "div", 54);
    \u0275\u0275conditionalCreate(5, HrmOrgChart_For_12_Conditional_2_Conditional_5_Template, 2, 2, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275repeaterCreate(7, HrmOrgChart_For_12_Conditional_2_For_8_Template, 10, 5, "div", 57, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(9, HrmOrgChart_For_12_Conditional_2_Conditional_9_Template, 2, 2, "button", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r16.node.position);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.filled != null ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.hiring ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.holdersShown(n_r16.node));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.holdersMore(n_r16.node) > 0 ? 9 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", n_r16.node.avatar, \u0275\u0275sanitizeUrl);
  }
}
function HrmOrgChart_For_12_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", n_r16.node.initials || ctx_r1.initialsOf(n_r16.node.name), " ");
  }
}
function HrmOrgChart_For_12_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r16.node.title);
  }
}
function HrmOrgChart_For_12_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r16.node.meta);
  }
}
function HrmOrgChart_For_12_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.badgeOf(n_r16));
  }
}
function HrmOrgChart_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275conditionalCreate(1, HrmOrgChart_For_12_Conditional_3_Conditional_1_Template, 1, 1, "img", 48)(2, HrmOrgChart_For_12_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49)(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, HrmOrgChart_For_12_Conditional_3_Conditional_6_Template, 2, 1, "span", 51);
    \u0275\u0275conditionalCreate(7, HrmOrgChart_For_12_Conditional_3_Conditional_7_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HrmOrgChart_For_12_Conditional_3_Conditional_8_Template, 2, 1, "span", 68);
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-hue", n_r16.node.avatar ? null : ctx_r1.avatarHue(n_r16.node.name));
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.avatar ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r16.node.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.title ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r16.node.meta && !ctx_r1.compact() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode() === "employee" && ctx_r1.badgeOf(n_r16) != null ? 8 : -1);
  }
}
function HrmOrgChart_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function HrmOrgChart_For_12_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const n_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.toggle(n_r16.node.id));
    });
    \u0275\u0275element(1, "tabler-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("oc-toggle--h", ctx_r1.orientation() === "horizontal");
    \u0275\u0275attribute("aria-label", (n_r16.open ? ctx_r1.labels().collapseAll : ctx_r1.labels().expandAll) || null);
    \u0275\u0275advance();
    \u0275\u0275property("icon", n_r16.open ? ctx_r1.minusIcon : ctx_r1.plusIcon)("size", 14);
  }
}
function HrmOrgChart_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function HrmOrgChart_For_12_Template_div_click_0_listener() {
      const n_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick(n_r16.node));
    })("dblclick", function HrmOrgChart_For_12_Template_div_dblclick_0_listener() {
      const n_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDblNode(n_r16.node));
    });
    \u0275\u0275conditionalCreate(1, HrmOrgChart_For_12_Conditional_1_Template, 14, 6, "div", 40)(2, HrmOrgChart_For_12_Conditional_2_Template, 10, 4, "div", 41)(3, HrmOrgChart_For_12_Conditional_3_Template, 9, 6);
    \u0275\u0275conditionalCreate(4, HrmOrgChart_For_12_Conditional_4_Template, 2, 5, "button", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("oc-node oc-node--", ctx_r1.viewMode()));
    \u0275\u0275styleProp("left", n_r16.x, "px")("top", n_r16.y, "px")("width", n_r16.w, "px")("height", n_r16.h, "px");
    \u0275\u0275classProp("is-active", n_r16.node.id === ctx_r1.selectedId())("is-match", ctx_r1.isMatch(n_r16.node.id))("is-current", n_r16.node.id === ctx_r1.currentMatchId())("is-dim", ctx_r1.isDim(n_r16.node.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.viewMode() === "department" && n_r16.node.unit ? 1 : ctx_r1.viewMode() === "position" && n_r16.node.position ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(n_r16.hasKids ? 4 : -1);
  }
}
var HrmOrgChart = class _HrmOrgChart {
  isHidden(k) {
    return this.hidden().includes(k);
  }
  toggleMore(e) {
    e.stopPropagation();
    this.moreOpen.update((v) => !v);
  }
  findNode(id) {
    const dfs = (n) => {
      if (n.id === id)
        return n;
      for (const c of n.children ?? []) {
        const r = dfs(c);
        if (r)
          return r;
      }
      return null;
    };
    for (const r of this.fullRoots()) {
      const f = dfs(r);
      if (f)
        return f;
    }
    return null;
  }
  constructor() {
    this.data = input(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.orientation = model("vertical", ...ngDevMode ? [{ debugName: "orientation" }] : (
      /* istanbul ignore next */
      []
    ));
    this.compact = model(false, ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedId = model("", ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showToolbar = input(true, ...ngDevMode ? [{ debugName: "showToolbar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.zoomable = input(true, ...ngDevMode ? [{ debugName: "zoomable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.labels = input({}, ...ngDevMode ? [{ debugName: "labels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.searchable = input(false, ...ngDevMode ? [{ debugName: "searchable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showCounts = input(false, ...ngDevMode ? [{ debugName: "showCounts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.focusable = input(false, ...ngDevMode ? [{ debugName: "focusable" }] : (
      /* istanbul ignore next */
      []
    ));
    this.highlightPath = input(false, ...ngDevMode ? [{ debugName: "highlightPath" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showLegend = input(false, ...ngDevMode ? [{ debugName: "showLegend" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewMode = model("employee", ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showModes = input(false, ...ngDevMode ? [{ debugName: "showModes" }] : (
      /* istanbul ignore next */
      []
    ));
    this.nodeClick = output();
    this.focusChange = output();
    this.vIcon = LayoutDistributeVertical;
    this.hIcon = LayoutDistributeHorizontal;
    this.compactIcon = ArrowsMoveVertical;
    this.plusIcon = Plus;
    this.minusIcon = Minus;
    this.zoomInIcon = ZoomIn;
    this.zoomOutIcon = ZoomOut;
    this.fitIcon = ArrowsMaximize;
    this.searchIcon = Search;
    this.clearIcon = X;
    this.prevIcon = ChevronLeft;
    this.nextIcon = ChevronRight;
    this.homeIcon = Home;
    this.empIcon = User;
    this.posIcon = Briefcase;
    this.deptIcon = Building;
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.matchIdx = signal(0, ...ngDevMode ? [{ debugName: "matchIdx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.focusId = signal("", ...ngDevMode ? [{ debugName: "focusId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dragging = signal(false, ...ngDevMode ? [{ debugName: "dragging" }] : (
      /* istanbul ignore next */
      []
    ));
    this.vp = viewChild("vp", ...ngDevMode ? [{ debugName: "vp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.zoom = signal(1, ...ngDevMode ? [{ debugName: "zoom" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pan = signal({ x: 0, y: 0 }, ...ngDevMode ? [{ debugName: "pan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.drag = null;
    this.movedRecently = false;
    this.toolbarRef = viewChild("toolbar", ...ngDevMode ? [{ debugName: "toolbarRef" }] : (
      /* istanbul ignore next */
      []
    ));
    this.zone = inject(NgZone);
    this.moreIcon = DotsVertical;
    this.hidden = signal([], ...ngDevMode ? [{ debugName: "hidden" }] : (
      /* istanbul ignore next */
      []
    ));
    this.moreOpen = signal(false, ...ngDevMode ? [{ debugName: "moreOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tight = signal(false, ...ngDevMode ? [{ debugName: "tight" }] : (
      /* istanbul ignore next */
      []
    ));
    this.DROP = ["orient", "tools", "zoom"];
    this.grpW = {};
    this.measured = false;
    this.fullRoots = computed(() => {
      const d = this.data();
      return Array.isArray(d) ? d : d ? [d] : [];
    }, ...ngDevMode ? [{ debugName: "fullRoots" }] : (
      /* istanbul ignore next */
      []
    ));
    this.roots = computed(() => {
      const fid = this.focusId();
      if (fid) {
        const n = this.findNode(fid);
        if (n)
          return [n];
      }
      return this.fullRoots();
    }, ...ngDevMode ? [{ debugName: "roots" }] : (
      /* istanbul ignore next */
      []
    ));
    this.parentMap = computed(() => {
      const m = /* @__PURE__ */ new Map();
      const walk = (n, p) => {
        if (p)
          m.set(n.id, p);
        n.children?.forEach((c) => walk(c, n.id));
      };
      this.fullRoots().forEach((r) => walk(r));
      return m;
    }, ...ngDevMode ? [{ debugName: "parentMap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.countMap = computed(() => {
      const m = /* @__PURE__ */ new Map();
      const count = (n) => {
        let c = 0;
        for (const k of n.children ?? [])
          c += 1 + count(k);
        m.set(n.id, c);
        return c;
      };
      this.fullRoots().forEach(count);
      return m;
    }, ...ngDevMode ? [{ debugName: "countMap" }] : (
      /* istanbul ignore next */
      []
    ));
    this.collapsedSet = linkedSignal(() => {
      const s = /* @__PURE__ */ new Set();
      const walk = (n) => {
        if (n.collapsed)
          s.add(n.id);
        n.children?.forEach(walk);
      };
      this.roots().forEach(walk);
      return s;
    }, ...ngDevMode ? [{ debugName: "collapsedSet" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = computed(() => {
      const roots = this.roots();
      const collapsed = this.collapsedSet();
      const counts = this.countMap();
      const horiz = this.orientation() === "horizontal";
      const compact = this.compact();
      const mode = this.viewMode();
      const nw = mode === "position" ? 300 : mode === "department" ? compact ? 196 : 232 : compact ? 168 : 216;
      const gx = mode === "position" ? 30 : compact ? 20 : 34;
      const gy = mode === "position" ? 40 : compact ? 40 : 62;
      const dims = /* @__PURE__ */ new Map();
      const gather = (node, depth) => {
        dims.set(node.id, { depth, h: this.heightOf(node, mode, compact) });
        if (!collapsed.has(node.id))
          this.modeKids(node, mode).forEach((c) => gather(c, depth + 1));
      };
      roots.forEach((r) => gather(r, 0));
      const rowH = [];
      for (const d of dims.values())
        rowH[d.depth] = Math.max(rowH[d.depth] ?? 0, d.h);
      const rowTop = [];
      let acc = 0;
      for (let d = 0; d < rowH.length; d++) {
        rowTop[d] = acc;
        acc += (rowH[d] ?? 0) + gy;
      }
      const laid = /* @__PURE__ */ new Map();
      let cx0 = 0, cy0 = 0;
      const place = (node, depth) => {
        const kids = collapsed.has(node.id) ? [] : this.modeKids(node, mode);
        const h2 = dims.get(node.id).h;
        let center;
        if (!kids.length) {
          if (horiz) {
            center = cy0 + h2 / 2;
            cy0 += h2 + gy;
          } else {
            center = cx0 + nw / 2;
            cx0 += nw + gx;
          }
        } else {
          const cs = kids.map((k) => place(k, depth + 1));
          center = (cs[0] + cs[cs.length - 1]) / 2;
        }
        laid.set(node.id, {
          node,
          x: horiz ? depth * (nw + gx) : center - nw / 2,
          y: horiz ? center - h2 / 2 : rowTop[depth],
          w: nw,
          h: h2,
          depth,
          hasKids: (node.children?.length ?? 0) > 0,
          open: !collapsed.has(node.id),
          count: counts.get(node.id) ?? 0
        });
        return center;
      };
      roots.forEach((r) => place(r, 0));
      const edges = [];
      const dotted = [];
      let w = 0, h = 0;
      for (const ln of laid.values()) {
        w = Math.max(w, ln.x + ln.w);
        h = Math.max(h, ln.y + ln.h);
        if (!collapsed.has(ln.node.id)) {
          for (const k of this.modeKids(ln.node, mode)) {
            const c = laid.get(k.id);
            if (c)
              edges.push({ d: this.elbow(ln, c, horiz), from: ln.node.id, to: c.node.id });
          }
        }
        for (const tid of ln.node.dottedReports ?? []) {
          const t = laid.get(tid);
          if (t)
            dotted.push({ d: this.curve(ln, t), from: ln.node.id, to: tid });
        }
      }
      return { nodes: [...laid.values()], edges, dotted, w, h, nw, nh: 0 };
    }, ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pathSet = computed(() => {
      const s = /* @__PURE__ */ new Set();
      if (!this.highlightPath())
        return s;
      let id = this.selectedId();
      if (!id)
        return s;
      const pm = this.parentMap();
      let guard = 0;
      while (id && guard++ < 200) {
        s.add(id);
        id = pm.get(id) ?? "";
      }
      return s;
    }, ...ngDevMode ? [{ debugName: "pathSet" }] : (
      /* istanbul ignore next */
      []
    ));
    this.matchIds = computed(() => {
      const q = this.norm(this.searchQuery().trim());
      if (!q)
        return [];
      return this.view().nodes.filter((n) => this.norm(n.node.name).includes(q) || this.norm(n.node.title ?? "").includes(q)).map((n) => n.node.id);
    }, ...ngDevMode ? [{ debugName: "matchIds" }] : (
      /* istanbul ignore next */
      []
    ));
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.fit();
      this.reflow();
      const tb = this.toolbarRef()?.nativeElement;
      if (tb && typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => this.zone.run(() => this.reflow()));
        ro.observe(tb);
        destroyRef.onDestroy(() => ro.disconnect());
      }
      const onDoc = (e) => {
        if (this.moreOpen() && tb && !tb.contains(e.target))
          this.moreOpen.set(false);
      };
      document.addEventListener("click", onDoc, true);
      destroyRef.onDestroy(() => document.removeEventListener("click", onDoc, true));
    });
    effect(() => {
      this.showModes();
      this.searchable();
      this.measured = false;
      queueMicrotask(() => this.zone.run(() => this.reflow()));
    });
  }
  /** Đo bề rộng THẬT từng nhóm khi tất cả đang hiện inline (dùng để tính thu gọn). */
  measureAll() {
    const tb = this.toolbarRef()?.nativeElement;
    if (!tb)
      return;
    const q = (s) => tb.querySelector(s)?.offsetWidth ?? 0;
    this.grpW = {
      orient: q('[data-grp="orient"]'),
      tools: q('[data-grp="tools"]'),
      zoom: q('[data-grp="zoom"]'),
      modes: q('[data-grp="modes"]'),
      search: q('[data-grp="search"]'),
      more: 40
    };
    this.measured = true;
  }
  /** Tính nhóm nào phải thu vào "⋮" để thanh công cụ vừa 1 hàng (không rớt dòng). */
  reflow() {
    if (!this.showToolbar())
      return;
    const tb = this.toolbarRef()?.nativeElement;
    if (!tb)
      return;
    const avail = tb.clientWidth;
    if (avail <= 0)
      return;
    if (!this.measured) {
      if (this.hidden().length) {
        this.hidden.set([]);
        this.zone.runOutsideAngular(() => requestAnimationFrame(() => this.zone.run(() => this.reflow())));
        return;
      }
      this.measureAll();
    }
    const GAP = 8, w = this.grpW;
    this.tight.set(this.showModes() && avail < w["modes"] + 150);
    const modesW = this.tight() ? 116 : w["modes"];
    const base = (this.showModes() ? modesW + GAP : 0) + (this.searchable() ? w["search"] + GAP : 0);
    const optional = ["zoom", "tools", "orient"].filter((k) => w[k] > 0);
    const show = new Set(optional);
    const total = () => {
      let t = base;
      for (const k of show)
        t += w[k] + GAP;
      if (show.size < optional.length)
        t += w["more"] + GAP;
      return t;
    };
    for (const k of this.DROP) {
      if (total() <= avail - 2)
        break;
      show.delete(k);
    }
    const next = this.DROP.filter((k) => optional.includes(k) && !show.has(k));
    const cur = this.hidden();
    if (next.length !== cur.length || next.some((k, i) => k !== cur[i]))
      this.hidden.set(next);
    if (!next.length && this.moreOpen())
      this.moreOpen.set(false);
  }
  /** Con hiển thị theo mode: Phòng ban chỉ node có unit, Vị trí chỉ node có position
   *  (ẩn node cá nhân không hợp thẻ mode). Nhân viên = tất cả. */
  modeKids(node, mode) {
    const kids = node.children ?? [];
    if (mode === "department")
      return kids.filter((k) => !!k.unit);
    if (mode === "position")
      return kids.filter((k) => !!k.position);
    return kids;
  }
  /** Chiều cao thẻ theo mode + nội dung. */
  heightOf(node, mode, compact) {
    if (mode === "position" && node.position) {
      const total = node.holders?.length ?? 0;
      const shown = Math.min(total, 5);
      const more = total > 5 ? 1 : 0;
      const hdr = 26 + (node.filled != null ? 18 : 0) + (node.hiring ? 30 : 0);
      return 28 + hdr + 10 + shown * 44 + more * 30;
    }
    if (mode === "department" && node.unit)
      return compact ? 106 : 120;
    return compact ? 60 : 78;
  }
  elbow(p, c, horiz) {
    if (horiz) {
      const px2 = p.x + p.w, py2 = p.y + p.h / 2, cx2 = c.x, cy2 = c.y + c.h / 2, mx = (px2 + cx2) / 2;
      return `M${px2},${py2} L${mx},${py2} L${mx},${cy2} L${cx2},${cy2}`;
    }
    const px = p.x + p.w / 2, py = p.y + p.h, cx = c.x + c.w / 2, cy = c.y, my = (py + cy) / 2;
    return `M${px},${py} L${px},${my} L${cx},${my} L${cx},${cy}`;
  }
  curve(a, b) {
    const ax = a.x + a.w / 2, ay = a.y + a.h / 2, bx = b.x + b.w / 2, by = b.y + b.h / 2;
    const my = Math.min(ay, by) - 44;
    return `M${ax},${ay} Q${(ax + bx) / 2},${my} ${bx},${by}`;
  }
  currentMatchId() {
    return this.matchIds()[this.matchIdx()] ?? "";
  }
  norm(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\u0111]/g, "d");
  }
  initialsOf(name) {
    const n = (name || "").trim();
    if (!n)
      return "";
    const p = n.split(/\s+/);
    return ((p[0][0] ?? "") + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
  }
  /** Hue 0..7 băm từ tên (đồng bộ hrm-avatar) — avatar chữ mỗi người 1 màu ổn định. */
  avatarHue(seed) {
    let h = 0;
    for (let i = 0; i < (seed || "").length; i++)
      h = (h + seed.charCodeAt(i)) % 8;
    return h;
  }
  pick(node) {
    if (this.movedRecently) {
      this.movedRecently = false;
      return;
    }
    this.selectedId.set(this.selectedId() === node.id ? "" : node.id);
    this.nodeClick.emit(node);
  }
  /** "23 nhân viên" — hậu tố từ labels (i18n). */
  headcountText(n) {
    const c = n.headcount ?? 0;
    const suf = this.labels().employees;
    return suf ? `${c} ${suf}` : `${c}`;
  }
  breakdownText(n) {
    return (n.breakdown ?? []).map((b) => `${b.count} ${b.type}`).join(", ");
  }
  holdersShown(n) {
    return (n.holders ?? []).slice(0, 5);
  }
  holdersMore(n) {
    return Math.max(0, (n.holders?.length ?? 0) - 5);
  }
  isDottedLit(e) {
    const s = this.selectedId();
    return !!s && (e.from === s || e.to === s);
  }
  toggle(id) {
    const s = new Set(this.collapsedSet());
    s.has(id) ? s.delete(id) : s.add(id);
    this.collapsedSet.set(s);
  }
  expandAll() {
    this.collapsedSet.set(/* @__PURE__ */ new Set());
  }
  collapseAll() {
    const s = /* @__PURE__ */ new Set();
    const walk = (n) => {
      if (n.children?.length)
        s.add(n.id);
      n.children?.forEach(walk);
    };
    this.roots().forEach(walk);
    this.collapsedSet.set(s);
  }
  /** Badge hiển thị: ưu tiên badge caller, không có thì tổng quân số (nếu showCounts). */
  badgeOf(n) {
    if (n.node.badge != null)
      return n.node.badge;
    if (this.showCounts() && n.count > 0)
      return n.count;
    return null;
  }
  isMatch(id) {
    return this.matchIds().includes(id);
  }
  isDim(id) {
    const ps = this.pathSet();
    return ps.size > 0 && !ps.has(id);
  }
  isEdgeDim(e) {
    const ps = this.pathSet();
    return ps.size > 0 && !(ps.has(e.from) && ps.has(e.to));
  }
  isEdgeLit(e) {
    const ps = this.pathSet();
    return ps.size > 0 && ps.has(e.from) && ps.has(e.to);
  }
  onSearch(e) {
    this.searchQuery.set(e.target.value);
    this.matchIdx.set(0);
    setTimeout(() => this.centerCurrentMatch());
  }
  clearSearch() {
    this.searchQuery.set("");
    this.matchIdx.set(0);
  }
  nextMatch() {
    const n = this.matchIds().length;
    if (!n)
      return;
    this.matchIdx.set((this.matchIdx() + 1) % n);
    this.centerCurrentMatch();
  }
  prevMatch() {
    const n = this.matchIds().length;
    if (!n)
      return;
    this.matchIdx.set((this.matchIdx() - 1 + n) % n);
    this.centerCurrentMatch();
  }
  centerCurrentMatch() {
    const id = this.currentMatchId();
    if (id)
      this.centerOn(id);
  }
  centerOn(id) {
    const vp = this.vp()?.nativeElement;
    if (!vp)
      return;
    const v = this.view();
    const ln = v.nodes.find((n) => n.node.id === id);
    if (!ln)
      return;
    const z = this.zoom();
    this.pan.set({
      x: vp.clientWidth / 2 - (ln.x + ln.w / 2) * z,
      y: vp.clientHeight / 2 - (ln.y + ln.h / 2) * z
    });
  }
  /** Bấm-đúp node có con → focus (xem riêng nhánh). */
  onDblNode(node) {
    if (!this.focusable() || !node.children?.length)
      return;
    this.focusId.set(node.id);
    this.focusChange.emit(node.id);
    setTimeout(() => this.fit());
  }
  resetFocus() {
    this.focusId.set("");
    this.focusChange.emit("");
    setTimeout(() => this.fit());
  }
  /** Nút zoom → phóng quanh tâm khung. */
  zoomBy(f) {
    const vp = this.vp()?.nativeElement;
    if (vp)
      this.zoomAt(f, vp.clientWidth / 2, vp.clientHeight / 2);
    else
      this.zoom.set(Math.min(2, Math.max(0.35, this.zoom() * f)));
  }
  /** Phóng quanh 1 điểm (cx,cy) trong khung nhìn — giữ điểm đó cố định dưới con trỏ. */
  zoomAt(f, cx, cy) {
    const z = this.zoom();
    const z2 = Math.min(2, Math.max(0.35, z * f));
    if (z2 === z)
      return;
    const p = this.pan();
    this.pan.set({ x: cx - (cx - p.x) * (z2 / z), y: cy - (cy - p.y) * (z2 / z) });
    this.zoom.set(z2);
  }
  fit() {
    const vp = this.vp()?.nativeElement;
    if (!vp)
      return;
    const v = this.view();
    const s = Math.min(vp.clientWidth / (v.w || 1), vp.clientHeight / (v.h || 1), 1) * 0.92;
    this.zoom.set(s);
    this.pan.set({ x: Math.max(16, (vp.clientWidth - v.w * s) / 2), y: 20 });
  }
  onDown(e) {
    if (!this.zoomable())
      return;
    this.drag = { x: e.clientX, y: e.clientY, px: this.pan().x, py: this.pan().y, moved: false };
    e.target.setPointerCapture?.(e.pointerId);
  }
  onMove(e) {
    if (!this.drag)
      return;
    const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3)
      this.drag.moved = true;
    if (this.drag.moved && !this.dragging())
      this.dragging.set(true);
    this.pan.set({ x: this.drag.px + dx, y: this.drag.py + dy });
  }
  onUp(_e) {
    this.movedRecently = !!this.drag?.moved;
    this.drag = null;
    this.dragging.set(false);
  }
  onWheel(e) {
    if (!this.zoomable())
      return;
    e.preventDefault();
    const vp = this.vp()?.nativeElement;
    if (!vp)
      return;
    const r = vp.getBoundingClientRect();
    this.zoomAt(e.deltaY < 0 ? 1.05 : 0.952, e.clientX - r.left, e.clientY - r.top);
  }
  static {
    this.\u0275fac = function HrmOrgChart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmOrgChart)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmOrgChart, selectors: [["hrm-org-chart"]], viewQuery: function HrmOrgChart_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.vp, _c0, 5)(ctx.toolbarRef, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, hostAttrs: [1, "hrm-org-chart"], hostBindings: function HrmOrgChart_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function HrmOrgChart_resize_HostBindingHandler() {
          return ctx.reflow();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { data: [1, "data"], orientation: [1, "orientation"], compact: [1, "compact"], selectedId: [1, "selectedId"], showToolbar: [1, "showToolbar"], zoomable: [1, "zoomable"], labels: [1, "labels"], searchable: [1, "searchable"], showCounts: [1, "showCounts"], focusable: [1, "focusable"], highlightPath: [1, "highlightPath"], showLegend: [1, "showLegend"], viewMode: [1, "viewMode"], showModes: [1, "showModes"] }, outputs: { orientation: "orientationChange", compact: "compactChange", selectedId: "selectedIdChange", viewMode: "viewModeChange", nodeClick: "nodeClick", focusChange: "focusChange" }, decls: 13, vars: 14, consts: [["vp", ""], ["toolbar", ""], ["tbOrient", ""], ["tbTools", ""], ["tbZoom", ""], [1, "oc"], [1, "oc-viewport", 3, "pointerdown", "pointermove", "pointerup", "pointerleave", "wheel"], [1, "oc-legend"], [1, "oc-canvas"], [1, "oc-lines"], [1, "oc-edge", 3, "is-dim", "is-lit"], [3, "class", "is-active", "is-match", "is-current", "is-dim", "left", "top", "width", "height"], [1, "oc-toolbar"], ["data-grp", "modes", 1, "oc-tb-grp", "oc-tb-modes"], ["data-grp", "orient", 1, "oc-tb-grp"], ["data-grp", "tools", 1, "oc-tb-grp"], ["data-grp", "zoom", 1, "oc-tb-grp"], ["type", "button", 1, "oc-tb-btn", "oc-tb-solo"], [1, "oc-more"], ["data-grp", "search", 1, "oc-search"], ["type", "button", 1, "oc-tb-btn", "oc-tb-wide", 3, "click"], [3, "icon", "size"], [1, "oc-tb-lbl"], [4, "ngTemplateOutlet"], ["type", "button", 1, "oc-tb-btn", "oc-tb-solo", 3, "click"], ["type", "button", "aria-haspopup", "menu", 1, "oc-tb-btn", "oc-more-btn", 3, "click"], ["role", "menu", 1, "oc-more-menu"], [1, "oc-more-grp"], [1, "oc-search-ic", 3, "icon", "size"], ["type", "text", 1, "oc-search-in", 3, "input", "keydown.enter", "value"], [1, "oc-search-n"], ["type", "button", 1, "oc-search-b", 3, "click", "disabled"], ["type", "button", 1, "oc-search-b", 3, "click"], ["type", "button", 1, "oc-tb-btn", 3, "click"], [1, "oc-lg"], [1, "oc-lg-ln"], [1, "oc-lg-ln", "oc-lg-ln--dot"], [1, "oc-edge"], [1, "oc-edge", "oc-edge--dotted", "is-lit"], [3, "click", "dblclick"], [1, "oc-dept"], [1, "oc-pos"], ["type", "button", 1, "oc-toggle", 3, "oc-toggle--h"], [1, "oc-dept-unit"], [1, "oc-unit-name"], [1, "oc-unit-sub"], [1, "oc-dept-head"], [1, "oc-av"], ["alt", "", 3, "src"], [1, "oc-body"], [1, "oc-name"], [1, "oc-title"], [1, "oc-pos-h"], [1, "oc-pos-title"], [1, "oc-pos-count"], [1, "oc-pos-hire"], [1, "oc-pos-list"], [1, "oc-pos-row"], ["type", "button", 1, "oc-pos-more"], [1, "oc-pos-bd"], [1, "oc-av", "oc-av--sm"], [1, "oc-pos-info"], [1, "oc-pos-hn"], [1, "oc-pos-nm"], [1, "oc-pos-tag"], [1, "oc-pos-hd"], ["type", "button", 1, "oc-pos-more", 3, "click"], [1, "oc-meta"], [1, "oc-badge"], ["type", "button", 1, "oc-toggle", 3, "click"]], template: function HrmOrgChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275conditionalCreate(1, HrmOrgChart_Conditional_1_Template, 15, 9);
        \u0275\u0275elementStart(2, "div", 6, 0);
        \u0275\u0275listener("pointerdown", function HrmOrgChart_Template_div_pointerdown_2_listener($event) {
          return ctx.onDown($event);
        })("pointermove", function HrmOrgChart_Template_div_pointermove_2_listener($event) {
          return ctx.onMove($event);
        })("pointerup", function HrmOrgChart_Template_div_pointerup_2_listener($event) {
          return ctx.onUp($event);
        })("pointerleave", function HrmOrgChart_Template_div_pointerleave_2_listener($event) {
          return ctx.onUp($event);
        })("wheel", function HrmOrgChart_Template_div_wheel_2_listener($event) {
          return ctx.onWheel($event);
        });
        \u0275\u0275conditionalCreate(4, HrmOrgChart_Conditional_4_Template, 7, 2, "div", 7);
        \u0275\u0275elementStart(5, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 9);
        \u0275\u0275repeaterCreate(7, HrmOrgChart_For_8_Template, 1, 5, ":svg:path", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(9, HrmOrgChart_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(11, HrmOrgChart_For_12_Template, 5, 21, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("oc--h", ctx.orientation() === "horizontal");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showToolbar() ? 1 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showLegend() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.view().w, "px")("height", ctx.view().h, "px")("transform", "translate(" + ctx.pan().x + "px," + ctx.pan().y + "px) scale(" + ctx.zoom() + ")")("transition", ctx.dragging() ? "none" : "transform .34s cubic-bezier(.22,.61,.36,1)");
        \u0275\u0275advance();
        \u0275\u0275attribute("width", ctx.view().w)("height", ctx.view().h);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.view().edges);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view().dotted);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.view().nodes);
      }
    }, dependencies: [TablerIconComponent, NgTemplateOutlet], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.oc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-family: var(--font-sans);\n}\n.oc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: nowrap;\n  min-width: 0;\n  padding: 4px;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.oc-tb-grp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0;\n  gap: 2px;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n}\n.oc-tb-grp[_ngcontent-%COMP%]    + .oc-tb-grp[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  padding-left: 6px;\n  border-left: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-tb-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  box-sizing: border-box;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-md);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.oc-tb-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.oc-tb-btn.is-on[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  box-shadow: none;\n}\n.oc-tb-wide[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  gap: 6px;\n  padding: 0 12px;\n  height: 32px;\n}\n.oc-tb-lbl[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.oc-toolbar--tight[_ngcontent-%COMP%]   .oc-tb-wide[_ngcontent-%COMP%] {\n  width: 32px;\n  padding: 0;\n  gap: 0;\n}\n.oc-toolbar--tight[_ngcontent-%COMP%]   .oc-tb-lbl[_ngcontent-%COMP%] {\n  display: none;\n}\n.oc-more[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  flex: none;\n}\n.oc-tb-grp[_ngcontent-%COMP%]    + .oc-more[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  padding-left: 6px;\n  border-left: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-more-btn.is-on[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.oc-more-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-md);\n}\n.oc-more-grp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n}\n.oc-more-grp[_ngcontent-%COMP%]    + .oc-more-grp[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-viewport[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n  cursor: grab;\n  height: var(--org-height, 480px);\n  background: color-mix(in srgb, var(--bg-surface-subtle) 78%, var(--border-strong, var(--border-sub)));\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background-image: radial-gradient(var(--border-strong, var(--border-sub)) 1px, transparent 1px);\n  background-size: 22px 22px;\n}\n.oc-viewport[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.oc-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n}\n.oc-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: visible;\n  pointer-events: none;\n}\n.oc-edge[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--border-strong, var(--border-sub));\n  stroke-width: 1.5;\n}\n.oc-edge--dotted[_ngcontent-%COMP%] {\n  stroke: var(--primary-base);\n  stroke-dasharray: 4 4;\n  opacity: .7;\n}\n.oc-node[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.oc-node[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border, var(--primary-base));\n  box-shadow: var(--shadow-regular-sm);\n}\n.oc-node.is-active[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px var(--primary-bg-subtle);\n}\n.oc-av[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-14);\n  font-weight: 600;\n}\n.oc-av[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.oc-av[data-hue="0"][_ngcontent-%COMP%] {\n  background: var(--blue-600);\n}\n.oc-av[data-hue="1"][_ngcontent-%COMP%] {\n  background: var(--green-600);\n}\n.oc-av[data-hue="2"][_ngcontent-%COMP%] {\n  background: var(--amber-600);\n}\n.oc-av[data-hue="3"][_ngcontent-%COMP%] {\n  background: var(--red-600);\n}\n.oc-av[data-hue="4"][_ngcontent-%COMP%] {\n  background: var(--purple-600);\n}\n.oc-av[data-hue="5"][_ngcontent-%COMP%] {\n  background: var(--teal-600);\n}\n.oc-av[data-hue="6"][_ngcontent-%COMP%] {\n  background: var(--cyan-600);\n}\n.oc-av[data-hue="7"][_ngcontent-%COMP%] {\n  background: var(--pink-600);\n}\n.oc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.oc-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-badge[_ngcontent-%COMP%] {\n  flex: none;\n  align-self: flex-start;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.oc-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: -11px;\n  transform: translateX(-50%);\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  padding: 0;\n  z-index: 2;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: var(--shadow-regular-xs);\n}\n.oc-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.oc-toggle--h[_ngcontent-%COMP%] {\n  left: auto;\n  bottom: auto;\n  right: -11px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.oc-tb-solo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-sub);\n}\n.oc-tb-solo[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.oc-search[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  box-sizing: border-box;\n  flex: 0 1 auto;\n  min-width: 84px;\n  height: 32px;\n  padding: 0 10px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n}\n.oc-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary-base);\n}\n.oc-search-ic[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--text-soft);\n}\n.oc-search-in[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.oc-search-in[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n.oc-search-n[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.oc-search-b[_ngcontent-%COMP%] {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-sm);\n}\n.oc-search-b[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.oc-search-b[_ngcontent-%COMP%]:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.oc-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 4;\n  display: flex;\n  gap: 14px;\n  padding: 6px 10px;\n  background: color-mix(in srgb, var(--bg-surface) 88%, transparent);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-regular-xs);\n  backdrop-filter: blur(4px);\n}\n.oc-lg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.oc-lg-ln[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 0;\n  border-top: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.oc-lg-ln--dot[_ngcontent-%COMP%] {\n  border-top-style: dashed;\n  border-top-color: var(--primary-base);\n}\n.oc-node.is-dim[_ngcontent-%COMP%] {\n  opacity: .32;\n}\n.oc-node.is-match[_ngcontent-%COMP%] {\n  border-color: var(--warning-base, var(--primary-base));\n  box-shadow: 0 0 0 2px var(--warning-bg, var(--primary-bg-subtle));\n}\n.oc-node.is-current[_ngcontent-%COMP%] {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px var(--primary-bg-subtle);\n}\n.oc-edge.is-dim[_ngcontent-%COMP%] {\n  opacity: .12;\n}\n.oc-edge.is-lit[_ngcontent-%COMP%] {\n  stroke: var(--primary-base);\n  stroke-width: 2;\n}\n.oc-edge--dotted.is-lit[_ngcontent-%COMP%] {\n  opacity: 1;\n  stroke-width: 2;\n}\n.oc-node--department[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0;\n  gap: 0;\n}\n.oc-dept[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.oc-dept-unit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 14px 10px;\n}\n.oc-dept-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-height: 0;\n  padding: 10px 14px;\n  border-top: 1px solid var(--border-soft);\n}\n.oc-unit-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-unit-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.oc-node--position[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 12px;\n  gap: 8px;\n}\n.oc-pos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: 100%;\n  min-height: 0;\n}\n.oc-pos-h[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.oc-pos-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.oc-pos-count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.oc-pos-bd[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n.oc-pos-hire[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 3px;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n  background: var(--text-strong);\n  color: var(--bg-surface);\n}\n.oc-pos-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  flex-shrink: 0;\n}\n.oc-av--sm[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: var(--fs-11);\n}\n.oc-pos-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.oc-pos-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.oc-pos-hn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.oc-pos-nm[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.oc-pos-tag[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-10);\n  font-weight: 600;\n  line-height: 1;\n  padding: 2px 5px;\n  border-radius: var(--radius-xs);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  border: 1px solid var(--border-soft);\n}\n.oc-pos-hd[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-pos-more[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 2px;\n  padding: 3px 6px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--primary-base);\n  border-radius: var(--radius-sm);\n}\n.oc-pos-more[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg-subtle);\n}\n/*# sourceMappingURL=hrm-org-chart.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmOrgChart, [{
    type: Component,
    args: [{ selector: "hrm-org-chart", imports: [TablerIconComponent, NgTemplateOutlet], template: `
    <div class="oc" [class.oc--h]="orientation() === 'horizontal'">
      @if (showToolbar()) {
        <div class="oc-toolbar" [class.oc-toolbar--tight]="tight()" #toolbar>
          @if (showModes()) {
            <div class="oc-tb-grp oc-tb-modes" data-grp="modes">
              <button type="button" class="oc-tb-btn oc-tb-wide" [class.is-on]="viewMode() === 'department'"
                (click)="viewMode.set('department')" [attr.aria-label]="labels().modeDepartment || null">
                <tabler-icon [icon]="$any(deptIcon)" [size]="16" />
                @if (labels().modeDepartment) { <span class="oc-tb-lbl">{{ labels().modeDepartment }}</span> }
              </button>
              <button type="button" class="oc-tb-btn oc-tb-wide" [class.is-on]="viewMode() === 'position'"
                (click)="viewMode.set('position')" [attr.aria-label]="labels().modePosition || null">
                <tabler-icon [icon]="$any(posIcon)" [size]="16" />
                @if (labels().modePosition) { <span class="oc-tb-lbl">{{ labels().modePosition }}</span> }
              </button>
              <button type="button" class="oc-tb-btn oc-tb-wide" [class.is-on]="viewMode() === 'employee'"
                (click)="viewMode.set('employee')" [attr.aria-label]="labels().modeEmployee || null">
                <tabler-icon [icon]="$any(empIcon)" [size]="16" />
                @if (labels().modeEmployee) { <span class="oc-tb-lbl">{{ labels().modeEmployee }}</span> }
              </button>
            </div>
          }

          <!-- Nh\xF3m ph\u1EE5 \u2014 thu g\u1ECDn d\u1EA7n v\xE0o "\u22EE" khi h\u1EB9p (th\u1EE9 t\u1EF1 m\u1EA5t: orientation \u2192 c\xF4ng c\u1EE5 \u2192 zoom). -->
          @if (!isHidden('orient')) { <div class="oc-tb-grp" data-grp="orient"><ng-container *ngTemplateOutlet="tbOrient" /></div> }
          @if (!isHidden('tools'))  { <div class="oc-tb-grp" data-grp="tools"><ng-container *ngTemplateOutlet="tbTools" /></div> }
          @if (!isHidden('zoom'))   { <div class="oc-tb-grp" data-grp="zoom"><ng-container *ngTemplateOutlet="tbZoom" /></div> }

          @if (focusable() && focusId()) {
            <button type="button" class="oc-tb-btn oc-tb-solo" (click)="resetFocus()" [attr.aria-label]="labels().home || null">
              <tabler-icon [icon]="$any(homeIcon)" [size]="18" />
            </button>
          }

          <!-- N\xFAt "\u22EE" \u2014 ch\u1EE9a c\xE1c nh\xF3m \u0111\xE3 thu g\u1ECDn (theo \u0111\xFAng th\u1EE9 t\u1EF1). -->
          @if (hidden().length) {
            <div class="oc-more">
              <button type="button" class="oc-tb-btn oc-more-btn" [class.is-on]="moreOpen()"
                (click)="toggleMore($event)" aria-haspopup="menu" [attr.aria-expanded]="moreOpen()"
                [attr.aria-label]="labels().more || null">
                <tabler-icon [icon]="$any(moreIcon)" [size]="18" />
              </button>
              @if (moreOpen()) {
                <div class="oc-more-menu" role="menu">
                  @if (isHidden('orient')) { <div class="oc-more-grp"><ng-container *ngTemplateOutlet="tbOrient" /></div> }
                  @if (isHidden('tools'))  { <div class="oc-more-grp"><ng-container *ngTemplateOutlet="tbTools" /></div> }
                  @if (isHidden('zoom'))   { <div class="oc-more-grp"><ng-container *ngTemplateOutlet="tbZoom" /></div> }
                </div>
              }
            </div>
          }

          @if (searchable()) {
            <div class="oc-search" data-grp="search">
              <tabler-icon class="oc-search-ic" [icon]="$any(searchIcon)" [size]="16" />
              <input class="oc-search-in" type="text" [value]="searchQuery()" (input)="onSearch($event)"
                (keydown.enter)="nextMatch()" [attr.placeholder]="labels().search || null" [attr.aria-label]="labels().search || null" />
              @if (searchQuery()) {
                <span class="oc-search-n">{{ matchIds().length ? (matchIdx() + 1) + '/' + matchIds().length : '0' }}</span>
                <button type="button" class="oc-search-b" (click)="prevMatch()" [disabled]="!matchIds().length" [attr.aria-label]="labels().prevMatch || null">
                  <tabler-icon [icon]="$any(prevIcon)" [size]="14" />
                </button>
                <button type="button" class="oc-search-b" (click)="nextMatch()" [disabled]="!matchIds().length" [attr.aria-label]="labels().nextMatch || null">
                  <tabler-icon [icon]="$any(nextIcon)" [size]="14" />
                </button>
                <button type="button" class="oc-search-b" (click)="clearSearch()"><tabler-icon [icon]="$any(clearIcon)" [size]="14" /></button>
              }
            </div>
          }
        </div>

        <!-- Nh\xF3m n\xFAt d\xF9ng chung: render inline (trong thanh) ho\u1EB7c trong menu "\u22EE". -->
        <ng-template #tbOrient>
          <button type="button" class="oc-tb-btn" [class.is-on]="orientation() === 'vertical'"
            (click)="orientation.set('vertical')" [attr.aria-label]="labels().vertical || null">
            <tabler-icon [icon]="$any(vIcon)" [size]="18" />
          </button>
          <button type="button" class="oc-tb-btn" [class.is-on]="orientation() === 'horizontal'"
            (click)="orientation.set('horizontal')" [attr.aria-label]="labels().horizontal || null">
            <tabler-icon [icon]="$any(hIcon)" [size]="18" />
          </button>
        </ng-template>
        <ng-template #tbTools>
          <button type="button" class="oc-tb-btn" [class.is-on]="compact()"
            (click)="compact.set(!compact())" [attr.aria-label]="labels().compact || null">
            <tabler-icon [icon]="$any(compactIcon)" [size]="18" />
          </button>
          <button type="button" class="oc-tb-btn" (click)="expandAll()" [attr.aria-label]="labels().expandAll || null">
            <tabler-icon [icon]="$any(plusIcon)" [size]="18" />
          </button>
          <button type="button" class="oc-tb-btn" (click)="collapseAll()" [attr.aria-label]="labels().collapseAll || null">
            <tabler-icon [icon]="$any(minusIcon)" [size]="18" />
          </button>
        </ng-template>
        <ng-template #tbZoom>
          <button type="button" class="oc-tb-btn" (click)="zoomBy(0.9)" [attr.aria-label]="labels().zoomOut || null">
            <tabler-icon [icon]="$any(zoomOutIcon)" [size]="18" />
          </button>
          <button type="button" class="oc-tb-btn" (click)="fit()" [attr.aria-label]="labels().fit || null">
            <tabler-icon [icon]="$any(fitIcon)" [size]="18" />
          </button>
          <button type="button" class="oc-tb-btn" (click)="zoomBy(1.1)" [attr.aria-label]="labels().zoomIn || null">
            <tabler-icon [icon]="$any(zoomInIcon)" [size]="18" />
          </button>
        </ng-template>
      }

      <div class="oc-viewport" #vp
        (pointerdown)="onDown($event)" (pointermove)="onMove($event)"
        (pointerup)="onUp($event)" (pointerleave)="onUp($event)" (wheel)="onWheel($event)">
        <!-- Ch\xFA th\xEDch (legend) \u2014 n\u1ED5i g\xF3c TR\xCAN-PH\u1EA2I trong canvas. -->
        @if (showLegend()) {
          <div class="oc-legend">
            <span class="oc-lg"><span class="oc-lg-ln"></span>{{ labels().directLine }}</span>
            <span class="oc-lg"><span class="oc-lg-ln oc-lg-ln--dot"></span>{{ labels().dottedLine }}</span>
          </div>
        }
        <div class="oc-canvas" [style.width.px]="view().w" [style.height.px]="view().h"
          [style.transform]="'translate(' + pan().x + 'px,' + pan().y + 'px) scale(' + zoom() + ')'"
          [style.transition]="dragging() ? 'none' : 'transform .34s cubic-bezier(.22,.61,.36,1)'">

          <svg class="oc-lines" [attr.width]="view().w" [attr.height]="view().h">
            @for (e of view().edges; track $index) {
              <path [attr.d]="e.d" class="oc-edge" [class.is-dim]="isEdgeDim(e)" [class.is-lit]="isEdgeLit(e)" />
            }
            @for (e of view().dotted; track $index) {
              @if (isDottedLit(e)) {
                <path [attr.d]="e.d" class="oc-edge oc-edge--dotted is-lit" />
              }
            }
          </svg>

          @for (n of view().nodes; track n.node.id) {
            <div class="oc-node oc-node--{{ viewMode() }}" [class.is-active]="n.node.id === selectedId()"
              [class.is-match]="isMatch(n.node.id)" [class.is-current]="n.node.id === currentMatchId()"
              [class.is-dim]="isDim(n.node.id)"
              [style.left.px]="n.x" [style.top.px]="n.y" [style.width.px]="n.w" [style.height.px]="n.h"
              (click)="pick(n.node)" (dblclick)="onDblNode(n.node)">

              @if (viewMode() === 'department' && n.node.unit) {
                <div class="oc-dept">
                  <div class="oc-dept-unit">
                    <span class="oc-unit-name">{{ n.node.unit }}</span>
                    <span class="oc-unit-sub">{{ headcountText(n.node) }}</span>
                  </div>
                  <div class="oc-dept-head">
                    <span class="oc-av" [attr.data-hue]="n.node.avatar ? null : avatarHue(n.node.name)">
                      @if (n.node.avatar) { <img [src]="n.node.avatar" alt="" /> }
                      @else { {{ n.node.initials || initialsOf(n.node.name) }} }
                    </span>
                    <span class="oc-body">
                      <span class="oc-name">{{ n.node.name }}</span>
                      @if (n.node.title) { <span class="oc-title">{{ n.node.title }}</span> }
                    </span>
                  </div>
                </div>
              } @else if (viewMode() === 'position' && n.node.position) {
                <div class="oc-pos">
                  <div class="oc-pos-h">
                    <div class="oc-pos-title">{{ n.node.position }}</div>
                    @if (n.node.filled != null) {
                      <div class="oc-pos-count">{{ n.node.filled }}/{{ n.node.slots ?? n.node.filled }}
                        @if (breakdownText(n.node)) { <span class="oc-pos-bd">({{ breakdownText(n.node) }})</span> }
                      </div>
                    }
                    @if (n.node.hiring) { <span class="oc-pos-hire">{{ n.node.hiring }} {{ labels().hiring }}</span> }
                  </div>
                  <div class="oc-pos-list">
                    @for (h of holdersShown(n.node); track $index) {
                      <div class="oc-pos-row">
                        <span class="oc-av oc-av--sm" [attr.data-hue]="h.avatar ? null : avatarHue(h.name)">
                          @if (h.avatar) { <img [src]="h.avatar" alt="" /> } @else { {{ h.initials || initialsOf(h.name) }} }
                        </span>
                        <span class="oc-pos-info">
                          <span class="oc-pos-hn"><span class="oc-pos-nm">{{ h.name }}</span>@if (h.type) { <span class="oc-pos-tag">{{ h.type }}</span> }</span>
                          @if (h.dept) { <span class="oc-pos-hd">{{ h.dept }}</span> }
                        </span>
                      </div>
                    }
                    @if (holdersMore(n.node) > 0) {
                      <button type="button" class="oc-pos-more" (click)="$event.stopPropagation()">+{{ holdersMore(n.node) }} {{ labels().moreHolders }}</button>
                    }
                  </div>
                </div>
              } @else {
                <span class="oc-av" [attr.data-hue]="n.node.avatar ? null : avatarHue(n.node.name)">
                  @if (n.node.avatar) { <img [src]="n.node.avatar" alt="" /> }
                  @else { {{ n.node.initials || initialsOf(n.node.name) }} }
                </span>
                <span class="oc-body">
                  <span class="oc-name">{{ n.node.name }}</span>
                  @if (n.node.title) { <span class="oc-title">{{ n.node.title }}</span> }
                  @if (n.node.meta && !compact()) { <span class="oc-meta">{{ n.node.meta }}</span> }
                </span>
                @if (viewMode() === 'employee' && badgeOf(n) != null) { <span class="oc-badge">{{ badgeOf(n) }}</span> }
              }

              @if (n.hasKids) {
                <button type="button" class="oc-toggle" [class.oc-toggle--h]="orientation() === 'horizontal'"
                  (click)="$event.stopPropagation(); toggle(n.node.id)"
                  [attr.aria-label]="(n.open ? labels().collapseAll : labels().expandAll) || null">
                  <tabler-icon [icon]="$any(n.open ? minusIcon : plusIcon)" [size]="14" />
                </button>
              }
            </div>
          }
        </div>
      </div>
    </div>
  `, host: { class: "hrm-org-chart", "(window:resize)": "reflow()" }, styles: ['/* angular:styles/component:css;d526beb1c6fb0b4577552abc5331e698cb7d64c12ee0da620fa198ee423dcb4f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/diagram/hrm-org-chart.ts */\n:host {\n  display: block;\n}\n.oc {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-family: var(--font-sans);\n}\n.oc-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: nowrap;\n  min-width: 0;\n  padding: 4px;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n}\n.oc-tb-grp {\n  display: inline-flex;\n  padding: 0;\n  gap: 2px;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n}\n.oc-tb-grp + .oc-tb-grp {\n  margin-left: 4px;\n  padding-left: 6px;\n  border-left: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-tb-btn {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  box-sizing: border-box;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-md);\n  transition: background var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.oc-tb-btn:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.oc-tb-btn.is-on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  box-shadow: none;\n}\n.oc-tb-wide {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: auto;\n  gap: 6px;\n  padding: 0 12px;\n  height: 32px;\n}\n.oc-tb-lbl {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.oc-toolbar--tight .oc-tb-wide {\n  width: 32px;\n  padding: 0;\n  gap: 0;\n}\n.oc-toolbar--tight .oc-tb-lbl {\n  display: none;\n}\n.oc-more {\n  position: relative;\n  display: inline-flex;\n  flex: none;\n}\n.oc-tb-grp + .oc-more {\n  margin-left: 4px;\n  padding-left: 6px;\n  border-left: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-more-btn.is-on {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n}\n.oc-more-menu {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  z-index: 30;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-md);\n}\n.oc-more-grp {\n  display: inline-flex;\n  gap: 2px;\n}\n.oc-more-grp + .oc-more-grp {\n  margin-top: 4px;\n  padding-top: 4px;\n  border-top: 1px solid var(--border-soft, var(--border-sub));\n}\n.oc-viewport {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n  cursor: grab;\n  height: var(--org-height, 480px);\n  background: color-mix(in srgb, var(--bg-surface-subtle) 78%, var(--border-strong, var(--border-sub)));\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background-image: radial-gradient(var(--border-strong, var(--border-sub)) 1px, transparent 1px);\n  background-size: 22px 22px;\n}\n.oc-viewport:active {\n  cursor: grabbing;\n}\n.oc-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n}\n.oc-lines {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: visible;\n  pointer-events: none;\n}\n.oc-edge {\n  fill: none;\n  stroke: var(--border-strong, var(--border-sub));\n  stroke-width: 1.5;\n}\n.oc-edge--dotted {\n  stroke: var(--primary-base);\n  stroke-dasharray: 4 4;\n  opacity: .7;\n}\n.oc-node {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-regular-xs);\n  cursor: pointer;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease), box-shadow var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.oc-node:hover {\n  border-color: var(--primary-border, var(--primary-base));\n  box-shadow: var(--shadow-regular-sm);\n}\n.oc-node.is-active {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px var(--primary-bg-subtle);\n}\n.oc-av {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: var(--primary-base);\n  color: var(--text-on-primary, #fff);\n  font-size: var(--fs-14);\n  font-weight: 600;\n}\n.oc-av img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.oc-av[data-hue="0"] {\n  background: var(--blue-600);\n}\n.oc-av[data-hue="1"] {\n  background: var(--green-600);\n}\n.oc-av[data-hue="2"] {\n  background: var(--amber-600);\n}\n.oc-av[data-hue="3"] {\n  background: var(--red-600);\n}\n.oc-av[data-hue="4"] {\n  background: var(--purple-600);\n}\n.oc-av[data-hue="5"] {\n  background: var(--teal-600);\n}\n.oc-av[data-hue="6"] {\n  background: var(--cyan-600);\n}\n.oc-av[data-hue="7"] {\n  background: var(--pink-600);\n}\n.oc-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.oc-name {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-title {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-meta {\n  font-size: var(--fs-11);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-badge {\n  flex: none;\n  align-self: flex-start;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 3px 7px;\n  border-radius: var(--radius-full);\n  background: var(--primary-bg-soft);\n  color: var(--primary-base);\n}\n.oc-toggle {\n  position: absolute;\n  left: 50%;\n  bottom: -11px;\n  transform: translateX(-50%);\n  display: grid;\n  place-items: center;\n  width: 22px;\n  height: 22px;\n  padding: 0;\n  z-index: 2;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  color: var(--text-sub);\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: var(--shadow-regular-xs);\n}\n.oc-toggle:hover {\n  color: var(--primary-base);\n  border-color: var(--primary-base);\n}\n.oc-toggle--h {\n  left: auto;\n  bottom: auto;\n  right: -11px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.oc-tb-solo {\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-sub);\n}\n.oc-tb-solo:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--text-strong);\n}\n.oc-search {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  box-sizing: border-box;\n  flex: 0 1 auto;\n  min-width: 84px;\n  height: 32px;\n  padding: 0 10px;\n  background: var(--bg-surface-subtle);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n}\n.oc-search:focus-within {\n  border-color: var(--primary-base);\n}\n.oc-search-ic {\n  flex: none;\n  color: var(--text-soft);\n}\n.oc-search-in {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font-family: inherit;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.oc-search-in::placeholder {\n  color: var(--text-soft);\n}\n.oc-search-n {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.oc-search-b {\n  flex: none;\n  display: grid;\n  place-items: center;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  border-radius: var(--radius-sm);\n}\n.oc-search-b:hover:not(:disabled) {\n  color: var(--text-strong);\n  background: var(--bg-surface);\n}\n.oc-search-b:disabled {\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n.oc-legend {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 4;\n  display: flex;\n  gap: 14px;\n  padding: 6px 10px;\n  background: color-mix(in srgb, var(--bg-surface) 88%, transparent);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-regular-xs);\n  backdrop-filter: blur(4px);\n}\n.oc-lg {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.oc-lg-ln {\n  width: 22px;\n  height: 0;\n  border-top: 1.5px solid var(--border-strong, var(--border-sub));\n}\n.oc-lg-ln--dot {\n  border-top-style: dashed;\n  border-top-color: var(--primary-base);\n}\n.oc-node.is-dim {\n  opacity: .32;\n}\n.oc-node.is-match {\n  border-color: var(--warning-base, var(--primary-base));\n  box-shadow: 0 0 0 2px var(--warning-bg, var(--primary-bg-subtle));\n}\n.oc-node.is-current {\n  border-color: var(--primary-base);\n  box-shadow: 0 0 0 3px var(--primary-bg-subtle);\n}\n.oc-edge.is-dim {\n  opacity: .12;\n}\n.oc-edge.is-lit {\n  stroke: var(--primary-base);\n  stroke-width: 2;\n}\n.oc-edge--dotted.is-lit {\n  opacity: 1;\n  stroke-width: 2;\n}\n.oc-node--department {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0;\n  gap: 0;\n}\n.oc-dept {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.oc-dept-unit {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 12px 14px 10px;\n}\n.oc-dept-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-height: 0;\n  padding: 10px 14px;\n  border-top: 1px solid var(--border-soft);\n}\n.oc-unit-name {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-unit-sub {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.oc-node--position {\n  flex-direction: column;\n  align-items: stretch;\n  padding: 12px;\n  gap: 8px;\n}\n.oc-pos {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: 100%;\n  min-height: 0;\n}\n.oc-pos-h {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border-soft);\n}\n.oc-pos-title {\n  font-size: var(--fs-15);\n  font-weight: 700;\n  color: var(--text-strong);\n}\n.oc-pos-count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.oc-pos-bd {\n  color: var(--text-soft);\n}\n.oc-pos-hire {\n  align-self: flex-start;\n  margin-top: 3px;\n  font-size: var(--fs-11);\n  font-weight: 600;\n  line-height: 1;\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n  background: var(--text-strong);\n  color: var(--bg-surface);\n}\n.oc-pos-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  flex-shrink: 0;\n}\n.oc-av--sm {\n  width: 28px;\n  height: 28px;\n  font-size: var(--fs-11);\n}\n.oc-pos-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.oc-pos-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.oc-pos-hn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n}\n.oc-pos-nm {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.oc-pos-tag {\n  flex: none;\n  font-size: var(--fs-10);\n  font-weight: 600;\n  line-height: 1;\n  padding: 2px 5px;\n  border-radius: var(--radius-xs);\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n  border: 1px solid var(--border-soft);\n}\n.oc-pos-hd {\n  font-size: var(--fs-11);\n  color: var(--text-soft);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.oc-pos-more {\n  align-self: flex-start;\n  margin-top: 2px;\n  padding: 3px 6px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--primary-base);\n  border-radius: var(--radius-sm);\n}\n.oc-pos-more:hover {\n  background: var(--primary-bg-subtle);\n}\n/*# sourceMappingURL=hrm-org-chart.css.map */\n'] }]
  }], () => [], { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], orientation: [{ type: Input, args: [{ isSignal: true, alias: "orientation", required: false }] }, { type: Output, args: ["orientationChange"] }], compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }, { type: Output, args: ["compactChange"] }], selectedId: [{ type: Input, args: [{ isSignal: true, alias: "selectedId", required: false }] }, { type: Output, args: ["selectedIdChange"] }], showToolbar: [{ type: Input, args: [{ isSignal: true, alias: "showToolbar", required: false }] }], zoomable: [{ type: Input, args: [{ isSignal: true, alias: "zoomable", required: false }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }], searchable: [{ type: Input, args: [{ isSignal: true, alias: "searchable", required: false }] }], showCounts: [{ type: Input, args: [{ isSignal: true, alias: "showCounts", required: false }] }], focusable: [{ type: Input, args: [{ isSignal: true, alias: "focusable", required: false }] }], highlightPath: [{ type: Input, args: [{ isSignal: true, alias: "highlightPath", required: false }] }], showLegend: [{ type: Input, args: [{ isSignal: true, alias: "showLegend", required: false }] }], viewMode: [{ type: Input, args: [{ isSignal: true, alias: "viewMode", required: false }] }, { type: Output, args: ["viewModeChange"] }], showModes: [{ type: Input, args: [{ isSignal: true, alias: "showModes", required: false }] }], nodeClick: [{ type: Output, args: ["nodeClick"] }], focusChange: [{ type: Output, args: ["focusChange"] }], vp: [{ type: ViewChild, args: ["vp", { isSignal: true }] }], toolbarRef: [{ type: ViewChild, args: ["toolbar", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmOrgChart, { className: "HrmOrgChart", filePath: "libs/hrm-ui/src/lib/diagram/hrm-org-chart.ts", lineNumber: 502 });
})();

export {
  HrmOrgChart
};
//# sourceMappingURL=chunk-N3BDDVAA.js.map
