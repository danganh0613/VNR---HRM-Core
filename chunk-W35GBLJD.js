import {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
} from "./chunk-QSNE6SUP.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  Component,
  ContentChildren,
  Input,
  ViewChild,
  contentChildren,
  forwardRef,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-display/hrm-collapse.ts
var _c0 = ["tpl"];
var _c1 = ["*"];
function HrmCollapsePanel_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function HrmCollapse_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-collapse-panel", 1);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("nzHeader", p_r1.header())("nzActive", p_r1.active())("nzDisabled", p_r1.disabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", p_r1.tpl());
  }
}
var HrmCollapsePanel = class _HrmCollapsePanel {
  constructor() {
    this.header = input("", ...ngDevMode ? [{ debugName: "header" }] : (
      /* istanbul ignore next */
      []
    ));
    this.active = input(false, ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    ));
    this.disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tpl = viewChild.required("tpl");
  }
  static {
    this.\u0275fac = function HrmCollapsePanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCollapsePanel)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCollapsePanel, selectors: [["hrm-collapse-panel"]], viewQuery: function HrmCollapsePanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.tpl, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { header: [1, "header"], active: [1, "active"], disabled: [1, "disabled"] }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["tpl", ""]], template: function HrmCollapsePanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, HrmCollapsePanel_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCollapsePanel, [{
    type: Component,
    args: [{
      selector: "hrm-collapse-panel",
      template: `<ng-template #tpl><ng-content /></ng-template>`
    }]
  }], null, { header: [{ type: Input, args: [{ isSignal: true, alias: "header", required: false }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], tpl: [{ type: ViewChild, args: ["tpl", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCollapsePanel, { className: "HrmCollapsePanel", filePath: "libs/hrm-ui/src/lib/data-display/hrm-collapse.ts", lineNumber: 10 });
})();
var HrmCollapse = class _HrmCollapse {
  constructor() {
    this.panels = contentChildren(HrmCollapsePanel, ...ngDevMode ? [{ debugName: "panels" }] : (
      /* istanbul ignore next */
      []
    ));
    this.accordion = input(false, ...ngDevMode ? [{ debugName: "accordion" }] : (
      /* istanbul ignore next */
      []
    ));
    this.bordered = input(true, ...ngDevMode ? [{ debugName: "bordered" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCollapse)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCollapse, selectors: [["hrm-collapse"]], contentQueries: function HrmCollapse_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.panels, HrmCollapsePanel, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "hrm-collapse"], inputs: { accordion: [1, "accordion"], bordered: [1, "bordered"] }, decls: 3, vars: 2, consts: [[3, "nzAccordion", "nzBordered"], [3, "nzHeader", "nzActive", "nzDisabled"], [3, "ngTemplateOutlet"]], template: function HrmCollapse_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-collapse", 0);
        \u0275\u0275repeaterCreate(1, HrmCollapse_For_2_Template, 2, 4, "nz-collapse-panel", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzAccordion", ctx.accordion())("nzBordered", ctx.bordered());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.panels());
      }
    }, dependencies: [NzCollapseModule, NzCollapsePanelComponent, NzCollapseComponent, NgTemplateOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCollapse, [{
    type: Component,
    args: [{
      selector: "hrm-collapse",
      imports: [NzCollapseModule, NgTemplateOutlet],
      template: `
    <nz-collapse [nzAccordion]="accordion()" [nzBordered]="bordered()">
      @for (p of panels(); track $index) {
        <nz-collapse-panel [nzHeader]="p.header()" [nzActive]="p.active()" [nzDisabled]="p.disabled()">
          <ng-container [ngTemplateOutlet]="p.tpl()" />
        </nz-collapse-panel>
      }
    </nz-collapse>
  `,
      host: { class: "hrm-collapse" }
    }]
  }], null, { panels: [{ type: ContentChildren, args: [forwardRef(() => HrmCollapsePanel), { isSignal: true }] }], accordion: [{ type: Input, args: [{ isSignal: true, alias: "accordion", required: false }] }], bordered: [{ type: Input, args: [{ isSignal: true, alias: "bordered", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCollapse, { className: "HrmCollapse", filePath: "libs/hrm-ui/src/lib/data-display/hrm-collapse.ts", lineNumber: 33 });
})();

export {
  HrmCollapsePanel,
  HrmCollapse
};
//# sourceMappingURL=chunk-W35GBLJD.js.map
