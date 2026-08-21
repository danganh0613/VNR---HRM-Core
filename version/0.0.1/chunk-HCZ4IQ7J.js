import {
  HrmChart
} from "./chunk-MJMMZ5ZY.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/chart/hrm-competency-radar.ts
var HrmCompetencyRadar = class _HrmCompetencyRadar {
  constructor() {
    this.competencies = input([], ...ngDevMode ? [{ debugName: "competencies" }] : (
      /* istanbul ignore next */
      []
    ));
    this.current = input([], ...ngDevMode ? [{ debugName: "current" }] : (
      /* istanbul ignore next */
      []
    ));
    this.required = input([], ...ngDevMode ? [{ debugName: "required" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentLabel = input("Hi\u1EC7n t\u1EA1i", ...ngDevMode ? [{ debugName: "currentLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.requiredLabel = input("Y\xEAu c\u1EA7u", ...ngDevMode ? [{ debugName: "requiredLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.maxScale = input(5, ...ngDevMode ? [{ debugName: "maxScale" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(320, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.color = input(null, ...ngDevMode ? [{ debugName: "color" }] : (
      /* istanbul ignore next */
      []
    ));
    this.option = computed(() => {
      const comps = this.competencies();
      const req = this.required();
      const hasReq = req.length > 0;
      const series = [{ value: this.current(), name: this.currentLabel(), areaStyle: { opacity: 0.18 } }];
      if (hasReq)
        series.push({ value: req, name: this.requiredLabel(), areaStyle: { opacity: 0.08 } });
      const c = this.color();
      return __spreadProps(__spreadValues({}, c && c.length ? { color: c } : {}), {
        tooltip: {},
        legend: { bottom: 0 },
        radar: {
          indicator: comps.map((c2) => ({ name: c2.name, max: c2.max ?? this.maxScale() })),
          radius: "66%",
          splitNumber: this.maxScale()
        },
        series: [{ type: "radar", symbolSize: 5, lineStyle: { width: 2 }, data: series }]
      });
    }, ...ngDevMode ? [{ debugName: "option" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmCompetencyRadar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCompetencyRadar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCompetencyRadar, selectors: [["hrm-competency-radar"]], hostAttrs: [1, "hrm-competency-radar"], inputs: { competencies: [1, "competencies"], current: [1, "current"], required: [1, "required"], currentLabel: [1, "currentLabel"], requiredLabel: [1, "requiredLabel"], maxScale: [1, "maxScale"], height: [1, "height"], color: [1, "color"] }, decls: 1, vars: 2, consts: [[3, "option", "height"]], template: function HrmCompetencyRadar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "hrm-chart", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("option", ctx.option())("height", ctx.height());
      }
    }, dependencies: [HrmChart], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCompetencyRadar, [{
    type: Component,
    args: [{
      selector: "hrm-competency-radar",
      imports: [HrmChart],
      template: `<hrm-chart [option]="option()" [height]="height()" />`,
      host: { class: "hrm-competency-radar" }
    }]
  }], null, { competencies: [{ type: Input, args: [{ isSignal: true, alias: "competencies", required: false }] }], current: [{ type: Input, args: [{ isSignal: true, alias: "current", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], currentLabel: [{ type: Input, args: [{ isSignal: true, alias: "currentLabel", required: false }] }], requiredLabel: [{ type: Input, args: [{ isSignal: true, alias: "requiredLabel", required: false }] }], maxScale: [{ type: Input, args: [{ isSignal: true, alias: "maxScale", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCompetencyRadar, { className: "HrmCompetencyRadar", filePath: "libs/hrm-ui/src/lib/chart/hrm-competency-radar.ts", lineNumber: 20 });
})();

export {
  HrmCompetencyRadar
};
//# sourceMappingURL=chunk-HCZ4IQ7J.js.map
