import {
  File,
  FileTypeDoc,
  FileTypePdf,
  FileTypePpt,
  FileTypeXls,
  FileTypeZip,
  Photo,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/table-cells/hrm-file-cell.ts
function HrmFileCell_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.size());
  }
}
var HrmFileCell = class _HrmFileCell {
  constructor() {
    this.name = input("", ...ngDevMode ? [{ debugName: "name" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ext = input("", ...ngDevMode ? [{ debugName: "ext" }] : (
      /* istanbul ignore next */
      []
    ));
    this.meta = computed(() => {
      const raw = (this.ext() || this.name().split(".").pop() || "").toLowerCase();
      switch (raw) {
        case "pdf":
          return { icon: FileTypePdf, tone: "red" };
        case "doc":
        case "docx":
          return { icon: FileTypeDoc, tone: "blue" };
        case "xls":
        case "xlsx":
        case "csv":
          return { icon: FileTypeXls, tone: "green" };
        case "ppt":
        case "pptx":
          return { icon: FileTypePpt, tone: "amber" };
        case "zip":
        case "rar":
        case "7z":
        case "gz":
          return { icon: FileTypeZip, tone: "amber" };
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
        case "svg":
        case "webp":
          return { icon: Photo, tone: "purple" };
        default:
          return { icon: File, tone: "neutral" };
      }
    }, ...ngDevMode ? [{ debugName: "meta" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmFileCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmFileCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmFileCell, selectors: [["hrm-file-cell"]], hostAttrs: [1, "hrm-file-cell"], inputs: { name: [1, "name"], size: [1, "size"], ext: [1, "ext"] }, decls: 6, vars: 5, consts: [[1, "fc-ic"], [3, "icon", "size"], [1, "fc-body"], [1, "fc-name"], [1, "fc-size"]], template: function HrmFileCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275element(1, "tabler-icon", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, HrmFileCell_Conditional_5_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-tone", ctx.meta().tone);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.meta().icon)("size", 18);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.name());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.size() ? 5 : -1);
      }
    }, dependencies: [TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.fc-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  display: grid;\n  place-items: center;\n}\n.fc-ic[data-tone=red][_ngcontent-%COMP%] {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.fc-ic[data-tone=blue][_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info-base);\n}\n.fc-ic[data-tone=green][_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success-base);\n}\n.fc-ic[data-tone=amber][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning-base);\n}\n.fc-ic[data-tone=purple][_ngcontent-%COMP%] {\n  background: var(--feature-bg);\n  color: var(--feature-base);\n}\n.fc-ic[data-tone=neutral][_ngcontent-%COMP%] {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.fc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.fc-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fc-size[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=hrm-file-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmFileCell, [{
    type: Component,
    args: [{ selector: "hrm-file-cell", imports: [TablerIconComponent], template: `
    <span class="fc-ic" [attr.data-tone]="meta().tone">
      <tabler-icon [icon]="meta().icon" [size]="18" />
    </span>
    <span class="fc-body">
      <span class="fc-name">{{ name() }}</span>
      @if (size()) { <span class="fc-size">{{ size() }}</span> }
    </span>
  `, host: { class: "hrm-file-cell" }, styles: ["/* angular:styles/component:css;eb09511e3b5f0b7923c739452ccc942bb20d2229ad06875947b338d74a50b7ba;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/table-cells/hrm-file-cell.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  max-width: 100%;\n}\n.fc-ic {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  display: grid;\n  place-items: center;\n}\n.fc-ic[data-tone=red] {\n  background: var(--error-bg);\n  color: var(--error-base);\n}\n.fc-ic[data-tone=blue] {\n  background: var(--info-bg);\n  color: var(--info-base);\n}\n.fc-ic[data-tone=green] {\n  background: var(--success-bg);\n  color: var(--success-base);\n}\n.fc-ic[data-tone=amber] {\n  background: var(--warning-bg);\n  color: var(--warning-base);\n}\n.fc-ic[data-tone=purple] {\n  background: var(--feature-bg);\n  color: var(--feature-base);\n}\n.fc-ic[data-tone=neutral] {\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.fc-body {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.fc-name {\n  font-size: var(--fs-14);\n  color: var(--text-strong);\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fc-size {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=hrm-file-cell.css.map */\n"] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], ext: [{ type: Input, args: [{ isSignal: true, alias: "ext", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmFileCell, { className: "HrmFileCell", filePath: "libs/hrm-ui/src/lib/table-cells/hrm-file-cell.ts", lineNumber: 38 });
})();

export {
  HrmFileCell
};
//# sourceMappingURL=chunk-I5EGM5OV.js.map
