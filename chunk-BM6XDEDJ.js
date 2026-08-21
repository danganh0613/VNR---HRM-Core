import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/table-cells/hrm-tags-cell.ts
function HrmTagsCell_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", t_r1.color || "gray")("variant", ctx_r1.variant());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function HrmTagsCell_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r1.overflow());
  }
}
var HrmTagsCell = class _HrmTagsCell {
  constructor() {
    this.tags = input([], ...ngDevMode ? [{ debugName: "tags" }] : (
      /* istanbul ignore next */
      []
    ));
    this.max = input(3, ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("light", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visible = computed(() => this.tags().slice(0, this.max()), ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.overflow = computed(() => Math.max(0, this.tags().length - this.max()), ...ngDevMode ? [{ debugName: "overflow" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmTagsCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTagsCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTagsCell, selectors: [["hrm-tags-cell"]], hostAttrs: [1, "hrm-tags-cell"], inputs: { tags: [1, "tags"], max: [1, "max"], variant: [1, "variant"] }, decls: 3, vars: 1, consts: [["size", "sm", 3, "color", "variant"], ["color", "gray", "variant", "light", "size", "sm"]], template: function HrmTagsCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmTagsCell_For_1_Template, 2, 3, "hrm-tag", 0, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(2, HrmTagsCell_Conditional_2_Template, 2, 1, "hrm-tag", 1);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.visible());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.overflow() > 0 ? 2 : -1);
      }
    }, dependencies: [HrmTag], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: nowrap;\n  min-width: 0;\n  max-width: 100%;\n}\n[_nghost-%COMP%]     .ant-tag {\n  margin: 0;\n}\n/*# sourceMappingURL=hrm-tags-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTagsCell, [{
    type: Component,
    args: [{ selector: "hrm-tags-cell", imports: [HrmTag], template: `
    @for (t of visible(); track $index) {
      <hrm-tag [color]="t.color || 'gray'" [variant]="variant()" size="sm">{{ t.label }}</hrm-tag>
    }
    @if (overflow() > 0) {
      <hrm-tag color="gray" variant="light" size="sm">+{{ overflow() }}</hrm-tag>
    }
  `, host: { class: "hrm-tags-cell" }, styles: ["/* angular:styles/component:css;8a1579f514cf2db739ab0585e24061e8458c065e568d3152c4efc9858ec8b470;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-tags-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: nowrap;\n  min-width: 0;\n  max-width: 100%;\n}\n:host ::ng-deep .ant-tag {\n  margin: 0;\n}\n/*# sourceMappingURL=hrm-tags-cell.css.map */\n"] }]
  }], null, { tags: [{ type: Input, args: [{ isSignal: true, alias: "tags", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTagsCell, { className: "HrmTagsCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-tags-cell.ts", lineNumber: 30 });
})();

export {
  HrmTagsCell
};
//# sourceMappingURL=chunk-BM6XDEDJ.js.map
