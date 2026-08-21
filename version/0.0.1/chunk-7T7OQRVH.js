import {
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-display/hrm-stat-card.ts
var _c0 = [[["", "scChart", ""]]];
var _c1 = ["[scChart]"];
function HrmStatCard_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275element(1, "tabler-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon())("size", 120)("stroke", 1.5);
  }
}
function HrmStatCard_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-tone", ctx_r0.tone());
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon())("size", 28);
  }
}
function HrmStatCard_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-tone", ctx_r0.deltaTone());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.delta());
  }
}
var HrmStatCard = class _HrmStatCard {
  constructor() {
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.value = input("", ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icon = input(null, ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tone = input("primary", ...ngDevMode ? [{ debugName: "tone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.delta = input("", ...ngDevMode ? [{ debugName: "delta" }] : (
      /* istanbul ignore next */
      []
    ));
    this.deltaTone = input("neutral", ...ngDevMode ? [{ debugName: "deltaTone" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("default", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.orientation = input("compact", ...ngDevMode ? [{ debugName: "orientation" }] : (
      /* istanbul ignore next */
      []
    ));
    this.gradient = input("purple", ...ngDevMode ? [{ debugName: "gradient" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmStatCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmStatCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmStatCard, selectors: [["hrm-stat-card"]], hostAttrs: [1, "hrm-stat-card"], hostVars: 4, hostBindings: function HrmStatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-variant", ctx.variant())("data-gradient", ctx.gradient())("data-orientation", ctx.orientation())("data-tone", ctx.tone());
      }
    }, inputs: { label: [1, "label"], value: [1, "value"], icon: [1, "icon"], tone: [1, "tone"], delta: [1, "delta"], deltaTone: [1, "deltaTone"], variant: [1, "variant"], orientation: [1, "orientation"], gradient: [1, "gradient"] }, ngContentSelectors: _c1, decls: 11, vars: 5, consts: [["aria-hidden", "true", 1, "sc-bigicon"], [1, "sc-ic"], [1, "sc-body"], [1, "sc-top"], [1, "sc-value"], [1, "sc-delta"], [1, "sc-label"], [1, "sc-chart"], [3, "icon", "size", "stroke"], [3, "icon", "size"]], template: function HrmStatCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275conditionalCreate(0, HrmStatCard_Conditional_0_Template, 2, 3, "span", 0);
        \u0275\u0275conditionalCreate(1, HrmStatCard_Conditional_1_Template, 2, 3, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, HrmStatCard_Conditional_6_Template, 2, 2, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275projection(10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.variant() === "gradient" || ctx.orientation() === "tall") && ctx.icon() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.icon() ? 1 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.value());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.delta() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label());
      }
    }, dependencies: [TablerIconComponent], styles: ['\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  isolation: isolate;\n  height: 96px;\n  padding: 0 20px;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-2xl);\n}\n[data-orientation="tall"][_nghost-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 152px;\n  padding: 18px 20px;\n  gap: 0;\n}\n[data-orientation="tall"][_nghost-%COMP%]   .sc-body[_ngcontent-%COMP%] {\n  flex: none;\n}\n[data-variant="gradient"][_nghost-%COMP%] {\n  border: 0;\n  color: var(--static-white, #fff);\n  background:\n    linear-gradient(\n      150deg,\n      var(--_g1, var(--purple-400)) 0%,\n      var(--_g2, var(--purple-600)) 100%);\n}\n[data-variant="gradient"][_nghost-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: -60px;\n  bottom: -72px;\n  width: 300px;\n  height: 300px;\n  z-index: -1;\n  border-radius: 50%;\n  pointer-events: none;\n  background:\n    repeating-radial-gradient(\n      circle at center,\n      transparent 0 22px,\n      rgba(255, 255, 255, .07) 22px 24px);\n}\n[data-variant="gradient"][data-gradient="blue"][_nghost-%COMP%] {\n  --_g1: var(--blue-400);\n  --_g2: var(--blue-600);\n  --_ic: var(--blue-600);\n}\n[data-variant="gradient"][data-gradient="cyan"][_nghost-%COMP%] {\n  --_g1: var(--cyan-400);\n  --_g2: var(--blue-500);\n  --_ic: var(--cyan-600);\n}\n[data-variant="gradient"][data-gradient="teal"][_nghost-%COMP%] {\n  --_g1: var(--teal-400);\n  --_g2: var(--teal-600);\n  --_ic: var(--teal-600);\n}\n[data-variant="gradient"][data-gradient="green"][_nghost-%COMP%] {\n  --_g1: var(--green-400);\n  --_g2: var(--teal-600);\n  --_ic: var(--green-600);\n}\n[data-variant="gradient"][data-gradient="purple"][_nghost-%COMP%] {\n  --_g1: var(--purple-400);\n  --_g2: var(--purple-600);\n  --_ic: var(--purple-600);\n}\n[data-variant="gradient"][data-gradient="pink"][_nghost-%COMP%] {\n  --_g1: var(--pink-400);\n  --_g2: var(--purple-600);\n  --_ic: var(--pink-600);\n}\n[data-variant="gradient"][data-gradient="amber"][_nghost-%COMP%] {\n  --_g1: var(--amber-400);\n  --_g2: var(--amber-600);\n  --_ic: var(--amber-600);\n}\n[data-variant="gradient"][data-gradient="yellow"][_nghost-%COMP%] {\n  --_g1: var(--yellow-400);\n  --_g2: var(--amber-500);\n  --_ic: var(--amber-600);\n}\n[data-variant="gradient"][data-gradient="indigo"][_nghost-%COMP%] {\n  --_g1: var(--blue-500);\n  --_g2: var(--purple-700);\n  --_ic: var(--blue-700);\n}\n.sc-bigicon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10px;\n  bottom: -14px;\n  z-index: -1;\n  color: rgba(255, 255, 255, .2);\n  line-height: 0;\n}\n[data-variant="default"][_nghost-%COMP%]   .sc-bigicon[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--text-strong) 7%, transparent);\n}\n.sc-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 46px;\n  height: 46px;\n  border-radius: var(--radius-lg);\n  display: grid;\n  place-items: center;\n  color: var(--static-white, #fff);\n}\n.sc-ic[data-tone=primary][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-base) 62%, var(--static-white)),\n      var(--primary-base));\n}\n.sc-ic[data-tone=success][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--green-400),\n      var(--green-600));\n}\n.sc-ic[data-tone=warning][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--amber-400),\n      var(--amber-600));\n}\n.sc-ic[data-tone=info][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--cyan-400),\n      var(--blue-500));\n}\n.sc-ic[data-tone=neutral][_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--text-sub) 60%, var(--static-white)),\n      var(--text-sub));\n}\n[data-variant="gradient"][_nghost-%COMP%]   .sc-ic[_ngcontent-%COMP%] {\n  background: var(--static-white, #fff);\n  color: var(--_ic, var(--primary-base));\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .12);\n}\n.sc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.sc-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-26);\n  font-weight: 700;\n  line-height: 1.15;\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n[data-variant="gradient"][_nghost-%COMP%]   .sc-value[_ngcontent-%COMP%] {\n  color: var(--static-white, #fff);\n}\n.sc-label[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--fs-15);\n  font-weight: 500;\n  color: var(--text-sub);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[data-variant="gradient"][_nghost-%COMP%]   .sc-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .92);\n}\n[data-orientation="tall"][_nghost-%COMP%]   .sc-value[_ngcontent-%COMP%] {\n  font-size: var(--fs-28);\n}\n[data-orientation="tall"][_nghost-%COMP%]   .sc-ic[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n[data-orientation="tall"][_nghost-%COMP%]   .sc-bigicon[_ngcontent-%COMP%] {\n  right: -12px;\n  bottom: -16px;\n}\n[data-orientation="tall"][_nghost-%COMP%]   .sc-bigicon[_ngcontent-%COMP%]     svg {\n  width: 124px;\n  height: 124px;\n}\n.sc-delta[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.sc-delta[data-tone=up][_ngcontent-%COMP%] {\n  color: var(--success-base);\n}\n.sc-delta[data-tone=down][_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n.sc-delta[data-tone=neutral][_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n[data-variant="gradient"][_nghost-%COMP%]   .sc-delta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .9);\n}\n.sc-chart[_ngcontent-%COMP%] {\n  flex: none;\n  align-self: center;\n  display: flex;\n  align-items: center;\n}\n.sc-chart[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n/*# sourceMappingURL=hrm-stat-card.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmStatCard, [{
    type: Component,
    args: [{ selector: "hrm-stat-card", imports: [TablerIconComponent], template: `
    @if ((variant() === 'gradient' || orientation() === 'tall') && icon()) {
      <span class="sc-bigicon" aria-hidden="true"><tabler-icon [icon]="$any(icon())" [size]="120" [stroke]="1.5" /></span>
    }
    @if (icon()) {
      <div class="sc-ic" [attr.data-tone]="tone()"><tabler-icon [icon]="$any(icon())" [size]="28" /></div>
    }
    <div class="sc-body">
      <div class="sc-top">
        <span class="sc-value">{{ value() }}</span>
        @if (delta()) { <span class="sc-delta" [attr.data-tone]="deltaTone()">{{ delta() }}</span> }
      </div>
      <div class="sc-label">{{ label() }}</div>
    </div>
    <div class="sc-chart"><ng-content select="[scChart]" /></div>
  `, host: {
      class: "hrm-stat-card",
      "[attr.data-variant]": "variant()",
      "[attr.data-gradient]": "gradient()",
      "[attr.data-orientation]": "orientation()",
      "[attr.data-tone]": "tone()"
    }, styles: ['/* angular:styles/component:css;b373c9dfc0f37bc8ab780e59889460c050bf8eac3be56798eaf9aeb9b37f6cfb;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-stat-card.ts */\n:host {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  isolation: isolate;\n  height: 96px;\n  padding: 0 20px;\n  overflow: hidden;\n  background: var(--bg-surface);\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-2xl);\n}\n:host([data-orientation="tall"]) {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 152px;\n  padding: 18px 20px;\n  gap: 0;\n}\n:host([data-orientation="tall"]) .sc-body {\n  flex: none;\n}\n:host([data-variant="gradient"]) {\n  border: 0;\n  color: var(--static-white, #fff);\n  background:\n    linear-gradient(\n      150deg,\n      var(--_g1, var(--purple-400)) 0%,\n      var(--_g2, var(--purple-600)) 100%);\n}\n:host([data-variant="gradient"])::before {\n  content: "";\n  position: absolute;\n  right: -60px;\n  bottom: -72px;\n  width: 300px;\n  height: 300px;\n  z-index: -1;\n  border-radius: 50%;\n  pointer-events: none;\n  background:\n    repeating-radial-gradient(\n      circle at center,\n      transparent 0 22px,\n      rgba(255, 255, 255, .07) 22px 24px);\n}\n:host([data-variant="gradient"][data-gradient="blue"]) {\n  --_g1: var(--blue-400);\n  --_g2: var(--blue-600);\n  --_ic: var(--blue-600);\n}\n:host([data-variant="gradient"][data-gradient="cyan"]) {\n  --_g1: var(--cyan-400);\n  --_g2: var(--blue-500);\n  --_ic: var(--cyan-600);\n}\n:host([data-variant="gradient"][data-gradient="teal"]) {\n  --_g1: var(--teal-400);\n  --_g2: var(--teal-600);\n  --_ic: var(--teal-600);\n}\n:host([data-variant="gradient"][data-gradient="green"]) {\n  --_g1: var(--green-400);\n  --_g2: var(--teal-600);\n  --_ic: var(--green-600);\n}\n:host([data-variant="gradient"][data-gradient="purple"]) {\n  --_g1: var(--purple-400);\n  --_g2: var(--purple-600);\n  --_ic: var(--purple-600);\n}\n:host([data-variant="gradient"][data-gradient="pink"]) {\n  --_g1: var(--pink-400);\n  --_g2: var(--purple-600);\n  --_ic: var(--pink-600);\n}\n:host([data-variant="gradient"][data-gradient="amber"]) {\n  --_g1: var(--amber-400);\n  --_g2: var(--amber-600);\n  --_ic: var(--amber-600);\n}\n:host([data-variant="gradient"][data-gradient="yellow"]) {\n  --_g1: var(--yellow-400);\n  --_g2: var(--amber-500);\n  --_ic: var(--amber-600);\n}\n:host([data-variant="gradient"][data-gradient="indigo"]) {\n  --_g1: var(--blue-500);\n  --_g2: var(--purple-700);\n  --_ic: var(--blue-700);\n}\n.sc-bigicon {\n  position: absolute;\n  right: -10px;\n  bottom: -14px;\n  z-index: -1;\n  color: rgba(255, 255, 255, .2);\n  line-height: 0;\n}\n:host([data-variant="default"]) .sc-bigicon {\n  color: color-mix(in srgb, var(--text-strong) 7%, transparent);\n}\n.sc-ic {\n  flex: none;\n  width: 46px;\n  height: 46px;\n  border-radius: var(--radius-lg);\n  display: grid;\n  place-items: center;\n  color: var(--static-white, #fff);\n}\n.sc-ic[data-tone=primary] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-base) 62%, var(--static-white)),\n      var(--primary-base));\n}\n.sc-ic[data-tone=success] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--green-400),\n      var(--green-600));\n}\n.sc-ic[data-tone=warning] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--amber-400),\n      var(--amber-600));\n}\n.sc-ic[data-tone=info] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--cyan-400),\n      var(--blue-500));\n}\n.sc-ic[data-tone=neutral] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--text-sub) 60%, var(--static-white)),\n      var(--text-sub));\n}\n:host([data-variant="gradient"]) .sc-ic {\n  background: var(--static-white, #fff);\n  color: var(--_ic, var(--primary-base));\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .12);\n}\n.sc-body {\n  flex: 1;\n  min-width: 0;\n}\n.sc-top {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.sc-value {\n  font-size: var(--fs-26);\n  font-weight: 700;\n  line-height: 1.15;\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n:host([data-variant="gradient"]) .sc-value {\n  color: var(--static-white, #fff);\n}\n.sc-label {\n  margin-top: 2px;\n  font-size: var(--fs-15);\n  font-weight: 500;\n  color: var(--text-sub);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host([data-variant="gradient"]) .sc-label {\n  color: rgba(255, 255, 255, .92);\n}\n:host([data-orientation="tall"]) .sc-value {\n  font-size: var(--fs-28);\n}\n:host([data-orientation="tall"]) .sc-ic {\n  width: 48px;\n  height: 48px;\n}\n:host([data-orientation="tall"]) .sc-bigicon {\n  right: -12px;\n  bottom: -16px;\n}\n:host([data-orientation="tall"]) .sc-bigicon ::ng-deep svg {\n  width: 124px;\n  height: 124px;\n}\n.sc-delta {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.sc-delta[data-tone=up] {\n  color: var(--success-base);\n}\n.sc-delta[data-tone=down] {\n  color: var(--error-base);\n}\n.sc-delta[data-tone=neutral] {\n  color: var(--text-sub);\n}\n:host([data-variant="gradient"]) .sc-delta {\n  color: rgba(255, 255, 255, .9);\n}\n.sc-chart {\n  flex: none;\n  align-self: center;\n  display: flex;\n  align-items: center;\n}\n.sc-chart:empty {\n  display: none;\n}\n/*# sourceMappingURL=hrm-stat-card.css.map */\n'] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false }] }], delta: [{ type: Input, args: [{ isSignal: true, alias: "delta", required: false }] }], deltaTone: [{ type: Input, args: [{ isSignal: true, alias: "deltaTone", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], orientation: [{ type: Input, args: [{ isSignal: true, alias: "orientation", required: false }] }], gradient: [{ type: Input, args: [{ isSignal: true, alias: "gradient", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmStatCard, { className: "HrmStatCard", filePath: "libs/hrm-ui/src/lib/data-display/hrm-stat-card.ts", lineNumber: 119 });
})();

export {
  HrmStatCard
};
//# sourceMappingURL=chunk-7T7OQRVH.js.map
