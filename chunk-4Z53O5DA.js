import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/chart/hrm-sparkline.ts
function HrmSparkline_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "polygon");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("points", ctx_r0.areaPoints())("fill", ctx_r0.fillColor());
  }
}
var HrmSparkline = class _HrmSparkline {
  constructor() {
    this.data = input([], ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("line", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = input(120, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(36, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.color = input("var(--primary-base)", ...ngDevMode ? [{ debugName: "color" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pts = computed(() => {
      const d = this.data();
      if (d.length < 2)
        return [];
      const w = this.width(), h = this.height(), pad = 2;
      const min = Math.min(...d), max = Math.max(...d);
      const span = max - min || 1;
      return d.map((v, i) => {
        const x = pad + i / (d.length - 1) * (w - pad * 2);
        const y = pad + (1 - (v - min) / span) * (h - pad * 2);
        return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
      });
    }, ...ngDevMode ? [{ debugName: "pts" }] : (
      /* istanbul ignore next */
      []
    ));
    this.linePoints = computed(() => this.pts().map(([x, y]) => `${x},${y}`).join(" "), ...ngDevMode ? [{ debugName: "linePoints" }] : (
      /* istanbul ignore next */
      []
    ));
    this.areaPoints = computed(() => {
      const p = this.pts();
      if (!p.length)
        return "";
      const h = this.height();
      const first = p[0], last = p[p.length - 1];
      return `${this.linePoints()} ${last[0]},${h} ${first[0]},${h}`;
    }, ...ngDevMode ? [{ debugName: "areaPoints" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fillColor = computed(() => `color-mix(in srgb, ${this.color()} 15%, transparent)`, ...ngDevMode ? [{ debugName: "fillColor" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmSparkline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSparkline)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSparkline, selectors: [["hrm-sparkline"]], hostAttrs: [1, "hrm-sparkline"], inputs: { data: [1, "data"], variant: [1, "variant"], width: [1, "width"], height: [1, "height"], color: [1, "color"] }, decls: 3, vars: 6, consts: [["fill", "none", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function HrmSparkline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "svg");
        \u0275\u0275conditionalCreate(1, HrmSparkline_Conditional_1_Template, 1, 2, ":svg:polygon");
        \u0275\u0275domElement(2, "polyline", 0);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("width", ctx.width())("height", ctx.height())("viewBox", "0 0 " + ctx.width() + " " + ctx.height());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.variant() === "area" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("points", ctx.linePoints())("stroke", ctx.color());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  line-height: 0;\n}\n/*# sourceMappingURL=hrm-sparkline.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSparkline, [{
    type: Component,
    args: [{ selector: "hrm-sparkline", template: `
    <svg [attr.width]="width()" [attr.height]="height()" [attr.viewBox]="'0 0 ' + width() + ' ' + height()">
      @if (variant() === 'area') {
        <polygon [attr.points]="areaPoints()" [attr.fill]="fillColor()" />
      }
      <polyline
        [attr.points]="linePoints()"
        fill="none"
        [attr.stroke]="color()"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `, host: { class: "hrm-sparkline" }, styles: ["/* angular:styles/component:css;610ef25cd76a8b57092147e5d9127c137e2d0e675a6ff53107133f99baf7d780;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/chart/hrm-sparkline.ts */\n:host {\n  display: inline-flex;\n  line-height: 0;\n}\n/*# sourceMappingURL=hrm-sparkline.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSparkline, { className: "HrmSparkline", filePath: "libs/hrm-ui/src/lib/chart/hrm-sparkline.ts", lineNumber: 26 });
})();

export {
  HrmSparkline
};
//# sourceMappingURL=chunk-4Z53O5DA.js.map
