import {
  HrmChart
} from "./chunk-MJMMZ5ZY.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/chart/hrm-kpi-gauge.ts
var HrmKpiGauge = class _HrmKpiGauge {
  constructor() {
    this.value = input(0, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(100, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.label = input("", ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    ));
    this.suffix = input("%", ...ngDevMode ? [{ debugName: "suffix" }] : (
      /* istanbul ignore next */
      []
    ));
    this.height = input(260, ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    ));
    this.option = computed(() => {
      const v = this.value();
      const pct = Math.round(v / this.max() * 100);
      const cs = getComputedStyle(document.documentElement);
      const tk = (n, fb) => cs.getPropertyValue(n).trim() || fb;
      const track = tk("--bg-surface-subtle", "#eef2f6");
      const color = pct < 50 ? tk("--error-base", "#e5484d") : pct < 80 ? tk("--warning-base", "#f5a623") : tk("--success-base", "#16a34a");
      return {
        series: [{
          type: "gauge",
          min: 0,
          max: this.max(),
          startAngle: 210,
          endAngle: -30,
          radius: "96%",
          center: ["50%", "58%"],
          progress: { show: true, width: 14, roundCap: true, itemStyle: { color } },
          axisLine: { lineStyle: { width: 14, color: [[1, track]] } },
          pointer: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          anchor: { show: false },
          title: { show: !!this.label(), offsetCenter: [0, "38%"], fontSize: 14, color: tk("--text-sub", "#64748b") },
          detail: {
            valueAnimation: true,
            offsetCenter: [0, "2%"],
            fontSize: 34,
            fontWeight: "bolder",
            color: tk("--text-strong", "#0f172a"),
            formatter: (x) => `${Math.round(x)}${this.suffix()}`
          },
          data: [{ value: v, name: this.label() }]
        }]
      };
    }, ...ngDevMode ? [{ debugName: "option" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmKpiGauge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmKpiGauge)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmKpiGauge, selectors: [["hrm-kpi-gauge"]], hostAttrs: [1, "hrm-kpi-gauge"], inputs: { value: [1, "value"], max: [1, "max"], label: [1, "label"], suffix: [1, "suffix"], height: [1, "height"] }, decls: 1, vars: 2, consts: [[3, "option", "height"]], template: function HrmKpiGauge_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmKpiGauge, [{
    type: Component,
    args: [{
      selector: "hrm-kpi-gauge",
      imports: [HrmChart],
      template: `<hrm-chart [option]="option()" [height]="height()" />`,
      host: { class: "hrm-kpi-gauge" }
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], suffix: [{ type: Input, args: [{ isSignal: true, alias: "suffix", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmKpiGauge, { className: "HrmKpiGauge", filePath: "libs/hrm-ui/src/lib/chart/hrm-kpi-gauge.ts", lineNumber: 14 });
})();

export {
  HrmKpiGauge
};
//# sourceMappingURL=chunk-E2PSBEUF.js.map
