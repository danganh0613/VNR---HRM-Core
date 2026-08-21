import {
  NzColDirective,
  NzGridModule,
  NzRowDirective
} from "./chunk-MNAWEQD6.js";
import "./chunk-ZUH7BZUU.js";
import "./chunk-L5ZKGN3K.js";
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
import "./chunk-C5E47IHV.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/layout/hrm-grid.ts
var _c0 = ["*"];
var HrmRow = class _HrmRow {
  constructor() {
    this.gutter = input(16, ...ngDevMode ? [{ debugName: "gutter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.justify = input("start", ...ngDevMode ? [{ debugName: "justify" }] : (
      /* istanbul ignore next */
      []
    ));
    this.align = input("top", ...ngDevMode ? [{ debugName: "align" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmRow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRow, selectors: [["hrm-row"]], hostAttrs: [1, "hrm-row", 2, "display", "block"], inputs: { gutter: [1, "gutter"], justify: [1, "justify"], align: [1, "align"] }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [["nz-row", "", 3, "nzGutter", "nzJustify", "nzAlign"]], template: function HrmRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzGutter", ctx.gutter())("nzJustify", ctx.justify())("nzAlign", ctx.align());
      }
    }, dependencies: [NzGridModule, NzRowDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRow, [{
    type: Component,
    args: [{
      selector: "hrm-row",
      imports: [NzGridModule],
      template: `<div nz-row [nzGutter]="gutter()" [nzJustify]="justify()" [nzAlign]="align()"><ng-content /></div>`,
      host: { class: "hrm-row", style: "display:block" }
    }]
  }], null, { gutter: [{ type: Input, args: [{ isSignal: true, alias: "gutter", required: false }] }], justify: [{ type: Input, args: [{ isSignal: true, alias: "justify", required: false }] }], align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRow, { className: "HrmRow", filePath: "libs/hrm-ui/src/lib/layout/hrm-grid.ts", lineNumber: 11 });
})();
var HrmCol = class _HrmCol {
  constructor() {
    this.span = input(null, ...ngDevMode ? [{ debugName: "span" }] : (
      /* istanbul ignore next */
      []
    ));
    this.xs = input(null, ...ngDevMode ? [{ debugName: "xs" }] : (
      /* istanbul ignore next */
      []
    ));
    this.md = input(null, ...ngDevMode ? [{ debugName: "md" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lg = input(null, ...ngDevMode ? [{ debugName: "lg" }] : (
      /* istanbul ignore next */
      []
    ));
    this.offset = input(0, ...ngDevMode ? [{ debugName: "offset" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmCol_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCol)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCol, selectors: [["hrm-col"]], hostAttrs: [1, "hrm-col", 2, "display", "block"], inputs: { span: [1, "span"], xs: [1, "xs"], md: [1, "md"], lg: [1, "lg"], offset: [1, "offset"] }, ngContentSelectors: _c0, decls: 2, vars: 5, consts: [["nz-col", "", 3, "nzSpan", "nzXs", "nzMd", "nzLg", "nzOffset"]], template: function HrmCol_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzSpan", ctx.span())("nzXs", ctx.xs())("nzMd", ctx.md())("nzLg", ctx.lg())("nzOffset", ctx.offset());
      }
    }, dependencies: [NzGridModule, NzColDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCol, [{
    type: Component,
    args: [{
      selector: "hrm-col",
      imports: [NzGridModule],
      template: `
    <div nz-col [nzSpan]="span()" [nzXs]="xs()" [nzMd]="md()" [nzLg]="lg()" [nzOffset]="offset()">
      <ng-content />
    </div>
  `,
      host: { class: "hrm-col", style: "display:block" }
    }]
  }], null, { span: [{ type: Input, args: [{ isSignal: true, alias: "span", required: false }] }], xs: [{ type: Input, args: [{ isSignal: true, alias: "xs", required: false }] }], md: [{ type: Input, args: [{ isSignal: true, alias: "md", required: false }] }], lg: [{ type: Input, args: [{ isSignal: true, alias: "lg", required: false }] }], offset: [{ type: Input, args: [{ isSignal: true, alias: "offset", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCol, { className: "HrmCol", filePath: "libs/hrm-ui/src/lib/layout/hrm-grid.ts", lineNumber: 28 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/grid.ts
var SgDocGrid = class _SgDocGrid {
  constructor() {
    this.when = [
      "docs.layoutGrid.when1",
      "docs.layoutGrid.when2",
      "docs.layoutGrid.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocGrid_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocGrid)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocGrid, selectors: [["sg-doc-grid"]], decls: 192, vars: 215, consts: [["category", "Layout", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%"], [3, "gutter"], [3, "span"], [1, "c"], [1, "c", "c-alt"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "xs", "md", "lg"], [3, "span", "offset"]], template: function SgDocGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-row", 3)(6, "hrm-col", 4)(7, "div", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "hrm-col", 4)(11, "div", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275element(15, "sg-use", 8);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 9)(20, "sg-do");
        \u0275\u0275element(21, "span", 10);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-do");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-dont");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 11)(33, "sg-example", 12);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row", 13);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementStart(38, "div", 2)(39, "hrm-row", 3)(40, "hrm-col", 4)(41, "div", 5);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "hrm-col", 4)(45, "div", 5);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 2)(49, "hrm-row", 3)(50, "hrm-col", 4)(51, "div", 5);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "hrm-col", 4)(55, "div", 5);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "hrm-col", 4)(59, "div", 5);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 2)(63, "hrm-row", 3)(64, "hrm-col", 4)(65, "div", 5);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "hrm-col", 4)(69, "div", 5);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "hrm-col", 4)(73, "div", 5);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "hrm-col", 4)(77, "div", 5);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(80, "sg-example", 12);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementStart(83, "sg-row", 13);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementStart(85, "div", 2)(86, "hrm-row", 3)(87, "hrm-col", 4)(88, "div", 5);
        \u0275\u0275text(89);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "hrm-col", 4)(92, "div", 5);
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "hrm-col", 4)(96, "div", 5);
        \u0275\u0275text(97);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(99, "div", 2)(100, "hrm-row", 3)(101, "hrm-col", 4)(102, "div", 5);
        \u0275\u0275text(103);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "hrm-col", 4)(106, "div", 5);
        \u0275\u0275text(107);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "hrm-col", 4)(110, "div", 5);
        \u0275\u0275text(111);
        \u0275\u0275pipe(112, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "div", 2)(114, "hrm-row", 3)(115, "hrm-col", 4)(116, "div", 5);
        \u0275\u0275text(117);
        \u0275\u0275pipe(118, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "hrm-col", 4)(120, "div", 5);
        \u0275\u0275text(121);
        \u0275\u0275pipe(122, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "hrm-col", 4)(124, "div", 5);
        \u0275\u0275text(125);
        \u0275\u0275pipe(126, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(127, "sg-example", 12);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275pipe(129, "translate");
        \u0275\u0275elementStart(130, "sg-row")(131, "div", 2)(132, "hrm-row", 3)(133, "hrm-col", 14)(134, "div", 5);
        \u0275\u0275text(135);
        \u0275\u0275pipe(136, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "hrm-col", 14)(138, "div", 5);
        \u0275\u0275text(139);
        \u0275\u0275pipe(140, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "hrm-col", 14)(142, "div", 5);
        \u0275\u0275text(143);
        \u0275\u0275pipe(144, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "hrm-col", 14)(146, "div", 5);
        \u0275\u0275text(147);
        \u0275\u0275pipe(148, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "hrm-col", 14)(150, "div", 5);
        \u0275\u0275text(151);
        \u0275\u0275pipe(152, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "hrm-col", 14)(154, "div", 5);
        \u0275\u0275text(155);
        \u0275\u0275pipe(156, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(157, "sg-example", 12);
        \u0275\u0275pipe(158, "translate");
        \u0275\u0275pipe(159, "translate");
        \u0275\u0275elementStart(160, "sg-row", 13);
        \u0275\u0275pipe(161, "translate");
        \u0275\u0275elementStart(162, "div", 2)(163, "hrm-row", 3)(164, "hrm-col", 4)(165, "div", 5);
        \u0275\u0275text(166);
        \u0275\u0275pipe(167, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "hrm-col", 4)(169, "div", 6);
        \u0275\u0275text(170);
        \u0275\u0275pipe(171, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(172, "sg-row", 13);
        \u0275\u0275pipe(173, "translate");
        \u0275\u0275elementStart(174, "div", 2)(175, "hrm-row", 3)(176, "hrm-col", 4)(177, "div", 5);
        \u0275\u0275text(178);
        \u0275\u0275pipe(179, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "hrm-col", 15)(181, "div", 5);
        \u0275\u0275text(182);
        \u0275\u0275pipe(183, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(184, "sg-row", 13);
        \u0275\u0275pipe(185, "translate");
        \u0275\u0275elementStart(186, "div", 2)(187, "hrm-row", 3)(188, "hrm-col", 4)(189, "div", 6);
        \u0275\u0275text(190);
        \u0275\u0275pipe(191, "translate");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 109, "docs.layoutGrid.title"))("desc", \u0275\u0275pipeBind1(2, 111, "docs.layoutGrid.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 113, "docs.layoutGrid.ovMain"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 115, "docs.layoutGrid.ovSide"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(16, 117, "docs.layoutGrid.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(17, 119, "docs.layoutGrid.behavior"))("avoid", \u0275\u0275pipeBind1(18, 121, "docs.layoutGrid.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 123, "docs.layoutGrid.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 125, "docs.layoutGrid.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 127, "docs.layoutGrid.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 129, "docs.layoutGrid.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 131, "docs.layoutGrid.exEqualT"))("desc", \u0275\u0275pipeBind1(35, 133, "docs.layoutGrid.exEqualD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(37, 135, "docs.layoutGrid.exEqualRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 12);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 137, "docs.layoutGrid.fullName"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 12);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 139, "docs.layoutGrid.email"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 141, "docs.layoutGrid.dept"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 143, "docs.layoutGrid.role"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 145, "docs.layoutGrid.joinDate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 147, "docs.layoutGrid.totalStaff"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 149, "docs.layoutGrid.present"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 151, "docs.layoutGrid.onLeave"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 153, "docs.layoutGrid.absent"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(81, 155, "docs.layoutGrid.exGutterT"))("desc", \u0275\u0275pipeBind1(82, 157, "docs.layoutGrid.exGutterD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(84, 159, "docs.layoutGrid.exGutterRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 8);
        \u0275\u0275advance();
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 161, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 163, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 165, "docs.layoutGrid.cell"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 167, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 169, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 171, "docs.layoutGrid.cell"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 32);
        \u0275\u0275advance();
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 173, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 175, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 177, "docs.layoutGrid.cell"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(128, 179, "docs.layoutGrid.exResponsiveT"))("desc", \u0275\u0275pipeBind1(129, 181, "docs.layoutGrid.exResponsiveD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 183, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 185, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 187, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 189, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(152, 191, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("xs", 24)("md", 12)("lg", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(156, 193, "docs.layoutGrid.employee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(158, 195, "docs.layoutGrid.exSpanT"))("desc", \u0275\u0275pipeBind1(159, 197, "docs.layoutGrid.exSpanD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(161, 199, "docs.layoutGrid.exSpanLead"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 16);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(167, 201, "docs.layoutGrid.overviewChart"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 8);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 203, "docs.layoutGrid.metric"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(173, 205, "docs.layoutGrid.exSpanOffset"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(179, 207, "docs.layoutGrid.quarter"));
        \u0275\u0275advance(2);
        \u0275\u0275property("span", 6)("offset", 6);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(183, 209, "docs.layoutGrid.quarterOffset"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(185, 211, "docs.layoutGrid.exSpanFull"));
        \u0275\u0275advance(3);
        \u0275\u0275property("gutter", 16);
        \u0275\u0275advance();
        \u0275\u0275property("span", 24);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(191, 213, "docs.layoutGrid.monthSummary"));
      }
    }, dependencies: [TranslateModule, HrmRow, HrmCol, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.c[_ngcontent-%COMP%] {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-md);\n  padding: 16px 12px;\n  text-align: center;\n  font-size: var(--fs-13);\n  font-weight: 500;\n}\n.c-alt[_ngcontent-%COMP%] {\n  background: var(--bg-muted);\n  color: var(--text-body);\n  border-color: var(--border-sub);\n}\n.dark[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=grid.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocGrid, [{
    type: Component,
    args: [{ selector: "sg-doc-grid", imports: [TranslateModule, HrmRow, HrmCol, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Layout" [title]="'docs.layoutGrid.title' | translate" [desc]="'docs.layoutGrid.desc' | translate">

      <div sgOverview>
        <div style="width:100%">
          <hrm-row [gutter]="16">
            <hrm-col [span]="16"><div class="c">{{ 'docs.layoutGrid.ovMain' | translate }}</div></hrm-col>
            <hrm-col [span]="8"><div class="c c-alt">{{ 'docs.layoutGrid.ovSide' | translate }}</div></hrm-col>
          </hrm-row>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.layoutGrid.purpose' | translate"
          [when]="when"
          [behavior]="'docs.layoutGrid.behavior' | translate"
          [avoid]="'docs.layoutGrid.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.layoutGrid.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.layoutGrid.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.layoutGrid.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.layoutGrid.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.layoutGrid.exEqualT' | translate"
          [desc]="'docs.layoutGrid.exEqualD' | translate">
          <sg-row [label]="'docs.layoutGrid.exEqualRow' | translate">
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="12"><div class="c">{{ 'docs.layoutGrid.fullName' | translate }}</div></hrm-col>
                <hrm-col [span]="12"><div class="c">{{ 'docs.layoutGrid.email' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.dept' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.role' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.joinDate' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="6"><div class="c">{{ 'docs.layoutGrid.totalStaff' | translate }}</div></hrm-col>
                <hrm-col [span]="6"><div class="c">{{ 'docs.layoutGrid.present' | translate }}</div></hrm-col>
                <hrm-col [span]="6"><div class="c">{{ 'docs.layoutGrid.onLeave' | translate }}</div></hrm-col>
                <hrm-col [span]="6"><div class="c">{{ 'docs.layoutGrid.absent' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.layoutGrid.exGutterT' | translate"
          [desc]="'docs.layoutGrid.exGutterD' | translate">
          <sg-row [label]="'docs.layoutGrid.exGutterRow' | translate">
            <div style="width:100%">
              <hrm-row [gutter]="8">
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
            <div style="width:100%">
              <hrm-row [gutter]="32">
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c">{{ 'docs.layoutGrid.cell' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.layoutGrid.exResponsiveT' | translate"
          [desc]="'docs.layoutGrid.exResponsiveD' | translate">
          <sg-row>
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
                <hrm-col [xs]="24" [md]="12" [lg]="8"><div class="c">{{ 'docs.layoutGrid.employee' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.layoutGrid.exSpanT' | translate"
          [desc]="'docs.layoutGrid.exSpanD' | translate">
          <sg-row [label]="'docs.layoutGrid.exSpanLead' | translate">
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="16"><div class="c">{{ 'docs.layoutGrid.overviewChart' | translate }}</div></hrm-col>
                <hrm-col [span]="8"><div class="c c-alt">{{ 'docs.layoutGrid.metric' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
          <sg-row [label]="'docs.layoutGrid.exSpanOffset' | translate">
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="6"><div class="c">{{ 'docs.layoutGrid.quarter' | translate }}</div></hrm-col>
                <hrm-col [span]="6" [offset]="6"><div class="c">{{ 'docs.layoutGrid.quarterOffset' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
          <sg-row [label]="'docs.layoutGrid.exSpanFull' | translate">
            <div style="width:100%">
              <hrm-row [gutter]="16">
                <hrm-col [span]="24"><div class="c c-alt">{{ 'docs.layoutGrid.monthSummary' | translate }}</div></hrm-col>
              </hrm-row>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;b6abd6931f48b6bf4b865ba30499aac79c59ce9be339271da2b66cef035e6281;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/grid.ts */\n.c {\n  background: var(--primary-bg-subtle);\n  color: var(--primary-base);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-md);\n  padding: 16px 12px;\n  text-align: center;\n  font-size: var(--fs-13);\n  font-weight: 500;\n}\n.c-alt {\n  background: var(--bg-muted);\n  color: var(--text-body);\n  border-color: var(--border-sub);\n}\n.dark .c {\n  color: var(--text-strong);\n}\n/*# sourceMappingURL=grid.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocGrid, { className: "SgDocGrid", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/layout/grid.ts", lineNumber: 145 });
})();
export {
  SgDocGrid
};
//# sourceMappingURL=chunk-NSAMIU2I.js.map
