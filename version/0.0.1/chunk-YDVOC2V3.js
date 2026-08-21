import {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
} from "./chunk-NOOI7YFM.js";
import "./chunk-7NOIAAII.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import {
  NgTemplateOutlet
} from "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
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
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-RFPCG6C6.js";

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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/collapse.ts
var SgDocCollapse = class _SgDocCollapse {
  constructor() {
    this.when = [
      "docs.collapse.when1",
      "docs.collapse.when2",
      "docs.collapse.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocCollapse)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocCollapse, selectors: [["sg-doc-collapse"]], decls: 115, vars: 157, consts: [["category", "Container", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], [2, "display", "block"], [3, "header", "active"], [3, "header"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "display", "block", 3, "accordion"], [2, "display", "block", 3, "bordered"], [3, "header", "disabled"]], template: function SgDocCollapse_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-collapse", 3)(6, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275element(19, "sg-use", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8)(24, "sg-do");
        \u0275\u0275element(25, "span", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-do");
        \u0275\u0275element(28, "span", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-do");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-dont");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "sg-dont");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "sg-dont");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 10)(43, "sg-example", 11);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "div", 2)(48, "hrm-collapse", 12)(49, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "sg-example", 11);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row")(65, "div", 2)(66, "hrm-collapse", 3)(67, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "sg-example", 11);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementStart(82, "sg-row")(83, "div", 2)(84, "hrm-collapse", 13)(85, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275text(95);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(97, "sg-example", 11);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275pipe(99, "translate");
        \u0275\u0275elementStart(100, "sg-row")(101, "div", 2)(102, "hrm-collapse", 3)(103, "hrm-collapse-panel", 4);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "hrm-collapse-panel", 5);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275text(109);
        \u0275\u0275pipe(110, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "hrm-collapse-panel", 14);
        \u0275\u0275pipe(112, "translate");
        \u0275\u0275text(113);
        \u0275\u0275pipe(114, "translate");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 59, "docs.collapse.title"))("desc", \u0275\u0275pipeBind1(2, 61, "docs.collapse.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(7, 63, "docs.collapse.ovPersonalH"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 65, "docs.collapse.ovPersonalB"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(11, 67, "docs.collapse.ovContractH"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 69, "docs.collapse.ovContractB"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(15, 71, "docs.collapse.ovHistoryH"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 73, "docs.collapse.ovHistoryB"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(20, 75, "docs.collapse.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(21, 77, "docs.collapse.behavior"))("avoid", \u0275\u0275pipeBind1(22, 79, "docs.collapse.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 81, "docs.collapse.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(29, 83, "docs.collapse.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 85, "docs.collapse.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 87, "docs.collapse.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 89, "docs.collapse.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 91, "docs.collapse.dont3"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 93, "docs.collapse.exSingleT"))("desc", \u0275\u0275pipeBind1(45, 95, "docs.collapse.exSingleD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("accordion", true);
        \u0275\u0275advance();
        \u0275\u0275property("header", \u0275\u0275pipeBind1(50, 97, "docs.collapse.faq1H"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 99, "docs.collapse.faq1B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(54, 101, "docs.collapse.faq2H"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 103, "docs.collapse.faq2B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(58, 105, "docs.collapse.faq3H"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 107, "docs.collapse.faq3B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 109, "docs.collapse.exMultiT"))("desc", \u0275\u0275pipeBind1(63, 111, "docs.collapse.exMultiD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(68, 113, "docs.collapse.ben1H"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 115, "docs.collapse.ben1B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(72, 117, "docs.collapse.ben2H"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 119, "docs.collapse.ben2B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(76, 121, "docs.collapse.ben3H"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 123, "docs.collapse.ben3B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(80, 125, "docs.collapse.exGhostT"))("desc", \u0275\u0275pipeBind1(81, 127, "docs.collapse.exGhostD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("bordered", false);
        \u0275\u0275advance();
        \u0275\u0275property("header", \u0275\u0275pipeBind1(86, 129, "docs.collapse.addrH"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 131, "docs.collapse.addrB"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(90, 133, "docs.collapse.emgH"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 135, "docs.collapse.emgB"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(94, 137, "docs.collapse.bankH"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 139, "docs.collapse.bankB"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(98, 141, "docs.collapse.exDefaultT"))("desc", \u0275\u0275pipeBind1(99, 143, "docs.collapse.exDefaultD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(104, 145, "docs.collapse.step1H"))("active", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 147, "docs.collapse.step1B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(108, 149, "docs.collapse.step2H"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(110, 151, "docs.collapse.step2B"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("header", \u0275\u0275pipeBind1(112, 153, "docs.collapse.step3H"))("disabled", true);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(114, 155, "docs.collapse.step3B"), " ");
      }
    }, dependencies: [TranslateModule, HrmCollapse, HrmCollapsePanel, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocCollapse, [{
    type: Component,
    args: [{
      selector: "sg-doc-collapse",
      imports: [TranslateModule, HrmCollapse, HrmCollapsePanel, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Container" [title]="'docs.collapse.title' | translate" [desc]="'docs.collapse.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-collapse style="display:block">
            <hrm-collapse-panel [header]="'docs.collapse.ovPersonalH' | translate" [active]="true">
              {{ 'docs.collapse.ovPersonalB' | translate }}
            </hrm-collapse-panel>
            <hrm-collapse-panel [header]="'docs.collapse.ovContractH' | translate">
              {{ 'docs.collapse.ovContractB' | translate }}
            </hrm-collapse-panel>
            <hrm-collapse-panel [header]="'docs.collapse.ovHistoryH' | translate">
              {{ 'docs.collapse.ovHistoryB' | translate }}
            </hrm-collapse-panel>
          </hrm-collapse>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.collapse.purpose' | translate"
          [when]="when"
          [behavior]="'docs.collapse.behavior' | translate"
          [avoid]="'docs.collapse.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.collapse.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.collapse.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.collapse.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.collapse.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.collapse.dont2' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.collapse.dont3' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.collapse.exSingleT' | translate"
          [desc]="'docs.collapse.exSingleD' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-collapse [accordion]="true" style="display:block">
                <hrm-collapse-panel [header]="'docs.collapse.faq1H' | translate" [active]="true">
                  {{ 'docs.collapse.faq1B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.faq2H' | translate">
                  {{ 'docs.collapse.faq2B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.faq3H' | translate">
                  {{ 'docs.collapse.faq3B' | translate }}
                </hrm-collapse-panel>
              </hrm-collapse>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.collapse.exMultiT' | translate"
          [desc]="'docs.collapse.exMultiD' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-collapse style="display:block">
                <hrm-collapse-panel [header]="'docs.collapse.ben1H' | translate" [active]="true">
                  {{ 'docs.collapse.ben1B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.ben2H' | translate" [active]="true">
                  {{ 'docs.collapse.ben2B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.ben3H' | translate">
                  {{ 'docs.collapse.ben3B' | translate }}
                </hrm-collapse-panel>
              </hrm-collapse>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.collapse.exGhostT' | translate"
          [desc]="'docs.collapse.exGhostD' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-collapse [bordered]="false" style="display:block">
                <hrm-collapse-panel [header]="'docs.collapse.addrH' | translate" [active]="true">
                  {{ 'docs.collapse.addrB' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.emgH' | translate">
                  {{ 'docs.collapse.emgB' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.bankH' | translate">
                  {{ 'docs.collapse.bankB' | translate }}
                </hrm-collapse-panel>
              </hrm-collapse>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.collapse.exDefaultT' | translate"
          [desc]="'docs.collapse.exDefaultD' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-collapse style="display:block">
                <hrm-collapse-panel [header]="'docs.collapse.step1H' | translate" [active]="true">
                  {{ 'docs.collapse.step1B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.step2H' | translate">
                  {{ 'docs.collapse.step2B' | translate }}
                </hrm-collapse-panel>
                <hrm-collapse-panel [header]="'docs.collapse.step3H' | translate" [disabled]="true">
                  {{ 'docs.collapse.step3B' | translate }}
                </hrm-collapse-panel>
              </hrm-collapse>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocCollapse, { className: "SgDocCollapse", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/collapse.ts", lineNumber: 128 });
})();
export {
  SgDocCollapse
};
//# sourceMappingURL=chunk-YDVOC2V3.js.map
