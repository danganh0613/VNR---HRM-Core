import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/chart/hrm-bar-list.ts
var _forTrack0 = ($index, $item) => $item.label;
function HrmBarList_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "div", 2);
    \u0275\u0275domElementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", r_r1.pct, "%")("background", r_r1.bg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.format()(r_r1.value));
  }
}
var HrmBarList = class _HrmBarList {
  constructor() {
    this.items = input([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.format = input((v) => String(v), ...ngDevMode ? [{ debugName: "format" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = computed(() => {
      const items = this.items();
      const max = Math.max(...items.map((i) => i.value), 1);
      return items.map((i) => ({
        label: i.label,
        value: i.value,
        pct: Math.max(0, Math.min(100, i.value / max * 100)),
        // Thanh = màu pha 18% trên nền — chữ đen đọc được trên mọi hue.
        bg: `color-mix(in srgb, ${i.color || "var(--data-1)"} 18%, transparent)`
      }));
    }, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmBarList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmBarList)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmBarList, selectors: [["hrm-bar-list"]], hostAttrs: [1, "hrm-bar-list"], inputs: { items: [1, "items"], format: [1, "format"] }, decls: 2, vars: 0, consts: [[1, "bl-row"], [1, "bl-bar-wrap"], [1, "bl-bar"], [1, "bl-label"], [1, "bl-value"]], template: function HrmBarList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmBarList_For_1_Template, 7, 6, "div", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.rows());
      }
    }, styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.bl-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bl-bar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  height: 30px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.bl-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  border-radius: var(--radius-sm);\n  transition: width var(--duration-normal, .25s) var(--ease-out, ease);\n}\n.bl-label[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  padding: 0 10px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.bl-value[_ngcontent-%COMP%] {\n  flex: none;\n  min-width: 40px;\n  text-align: right;\n  font-size: var(--fs-13);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-bar-list.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmBarList, [{
    type: Component,
    args: [{ selector: "hrm-bar-list", template: `
    @for (r of rows(); track r.label) {
      <div class="bl-row">
        <div class="bl-bar-wrap">
          <div class="bl-bar" [style.width.%]="r.pct" [style.background]="r.bg"></div>
          <span class="bl-label">{{ r.label }}</span>
        </div>
        <span class="bl-value">{{ format()(r.value) }}</span>
      </div>
    }
  `, host: { class: "hrm-bar-list" }, styles: ["/* angular:styles/component:css;16efc8308c5b294178283613e15cac650e38b27a6b59839e17a10f2a03b17ce0;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/chart/hrm-bar-list.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.bl-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bl-bar-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n  height: 30px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n}\n.bl-bar {\n  position: absolute;\n  inset: 0 auto 0 0;\n  border-radius: var(--radius-sm);\n  transition: width var(--duration-normal, .25s) var(--ease-out, ease);\n}\n.bl-label {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  padding: 0 10px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.bl-value {\n  flex: none;\n  min-width: 40px;\n  text-align: right;\n  font-size: var(--fs-13);\n  color: var(--text-strong);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=hrm-bar-list.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmBarList, { className: "HrmBarList", filePath: "libs/hrm-ui/src/lib/chart/hrm-bar-list.ts", lineNumber: 39 });
})();

export {
  HrmBarList
};
//# sourceMappingURL=chunk-AMPLSJY3.js.map
