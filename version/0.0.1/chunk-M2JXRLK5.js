import {
  HRM_TAG_HUES,
  HrmTag
} from "./chunk-5U2K2VEK.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/tag.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/table-cells/tags" });
var _c1 = (a0) => ({ label: a0, route: "hrm/table-cells/status" });
var _c2 = (a0, a1) => [a0, a1];
function SgDocTag_For_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    \u0275\u0275property("color", h_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r1);
  }
}
var SgDocTag = class _SgDocTag {
  constructor() {
    this.when = [
      "docs.tag.when1",
      "docs.tag.when2",
      "docs.tag.when3"
    ];
    this.hues = HRM_TAG_HUES;
  }
  static {
    this.\u0275fac = function SgDocTag_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTag)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTag, selectors: [["sg-doc-tag"]], decls: 135, vars: 170, consts: [["category", "Content", 3, "title", "related", "desc"], ["sgOverview", ""], ["color", "blue"], ["color", "success"], ["color", "warning"], [3, "closeable"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["color", "cyan"], ["color", "green"], ["color", "pink"], ["color", "yellow"], ["color", "red"], ["color", "orange"], ["color", "purple"], ["color", "teal"], [3, "color"], ["color", "error"], ["color", "gray"], ["color", "blue", 3, "closeable"], ["color", "teal", 3, "closeable"]], template: function SgDocTag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "div", 1)(6, "sg-row")(7, "hrm-tag", 2);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "hrm-tag", 3);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "hrm-tag", 4);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "hrm-tag", 5);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 6);
        \u0275\u0275element(20, "sg-use", 7);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 8)(25, "sg-do");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "sg-do");
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "sg-do");
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "sg-dont");
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "sg-dont");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 9)(41, "sg-example", 10);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row", 11);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "hrm-tag", 12);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "hrm-tag", 13);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "hrm-tag", 14);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "hrm-tag", 15);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "sg-row", 11);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementStart(60, "hrm-tag", 16);
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "hrm-tag", 17);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "hrm-tag", 2);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "hrm-tag", 18);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "sg-row", 11);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementStart(74, "hrm-tag", 2);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "hrm-tag", 17);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "hrm-tag", 18);
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "hrm-tag", 19);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "sg-example", 10);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementStart(89, "sg-row", 11);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275repeaterCreate(91, SgDocTag_For_92_Template, 2, 2, "hrm-tag", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "sg-example", 10);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementStart(96, "sg-row", 11);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementStart(98, "hrm-tag", 3);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "hrm-tag", 4);
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "hrm-tag", 21);
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "hrm-tag", 22);
        \u0275\u0275text(108);
        \u0275\u0275pipe(109, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "sg-row", 11);
        \u0275\u0275pipe(111, "translate");
        \u0275\u0275elementStart(112, "hrm-tag", 13);
        \u0275\u0275text(113);
        \u0275\u0275pipe(114, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "hrm-tag", 2);
        \u0275\u0275text(116);
        \u0275\u0275pipe(117, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "hrm-tag", 22);
        \u0275\u0275text(119);
        \u0275\u0275pipe(120, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "sg-example", 10);
        \u0275\u0275pipe(122, "translate");
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275elementStart(124, "sg-row", 11);
        \u0275\u0275pipe(125, "translate");
        \u0275\u0275elementStart(126, "hrm-tag", 5);
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "hrm-tag", 23);
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "hrm-tag", 24);
        \u0275\u0275text(133);
        \u0275\u0275pipe(134, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 57, "docs.tag.title"))("related", \u0275\u0275pureFunction2(167, _c2, \u0275\u0275pureFunction1(163, _c0, \u0275\u0275pipeBind1(2, 59, "docs.tag.relTags")), \u0275\u0275pureFunction1(165, _c1, \u0275\u0275pipeBind1(3, 61, "docs.tag.relStatus"))))("desc", \u0275\u0275pipeBind1(4, 63, "docs.tag.desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 65, "docs.tag.ovHr"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 67, "docs.tag.ovApproved"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 69, "docs.tag.ovPending"));
        \u0275\u0275advance(2);
        \u0275\u0275property("closeable", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 71, "docs.tag.ovFilter"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(21, 73, "docs.tag.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(22, 75, "docs.tag.behavior"))("avoid", \u0275\u0275pipeBind1(23, 77, "docs.tag.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 79, "docs.tag.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 81, "docs.tag.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 83, "docs.tag.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 85, "docs.tag.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 87, "docs.tag.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 89, "docs.tag.exColorsT"))("desc", \u0275\u0275pipeBind1(43, 91, "docs.tag.exColorsD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(45, 93, "docs.tag.rowDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 95, "docs.tag.dept1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 97, "docs.tag.dept2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 99, "docs.tag.dept3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 101, "docs.tag.dept4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(59, 103, "docs.tag.rowPriority"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 105, "docs.tag.prio1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 107, "docs.tag.prio2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 109, "docs.tag.prio3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 111, "docs.tag.prio4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(73, 113, "docs.tag.rowLeave"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 115, "docs.tag.leave1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 117, "docs.tag.leave2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 119, "docs.tag.leave3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 121, "docs.tag.leave4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(87, 123, "docs.tag.exPaletteT"))("desc", \u0275\u0275pipeBind1(88, 125, "docs.tag.exPaletteD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(90, 127, "docs.tag.rowHues"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hues);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(94, 129, "docs.tag.exStatusT"))("desc", \u0275\u0275pipeBind1(95, 131, "docs.tag.exStatusD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(97, 133, "docs.tag.rowReqStatus"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 135, "docs.tag.st1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 137, "docs.tag.st2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 139, "docs.tag.st3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 141, "docs.tag.st4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(111, 143, "docs.tag.rowContract"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 145, "docs.tag.ct1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 147, "docs.tag.ct2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 149, "docs.tag.ct3"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(122, 151, "docs.tag.exCloseableT"))("desc", \u0275\u0275pipeBind1(123, 153, "docs.tag.exCloseableD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(125, 155, "docs.tag.rowActiveFilter"));
        \u0275\u0275advance(2);
        \u0275\u0275property("closeable", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 157, "docs.tag.f1"));
        \u0275\u0275advance(2);
        \u0275\u0275property("closeable", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 159, "docs.tag.f2"));
        \u0275\u0275advance(2);
        \u0275\u0275property("closeable", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 161, "docs.tag.f3"));
      }
    }, dependencies: [TranslateModule, HrmTag, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTag, [{
    type: Component,
    args: [{
      selector: "sg-doc-tag",
      imports: [TranslateModule, HrmTag, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.tag.title' | translate" [related]="[{label:('docs.tag.relTags' | translate), route:'hrm/table-cells/tags'},{label:('docs.tag.relStatus' | translate), route:'hrm/table-cells/status'}]" [desc]="'docs.tag.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-tag color="blue">{{ 'docs.tag.ovHr' | translate }}</hrm-tag>
          <hrm-tag color="success">{{ 'docs.tag.ovApproved' | translate }}</hrm-tag>
          <hrm-tag color="warning">{{ 'docs.tag.ovPending' | translate }}</hrm-tag>
          <hrm-tag [closeable]="true">{{ 'docs.tag.ovFilter' | translate }}</hrm-tag>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.tag.purpose' | translate"
          [when]="when"
          [behavior]="'docs.tag.behavior' | translate"
          [avoid]="'docs.tag.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.tag.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.tag.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.tag.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.tag.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.tag.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.tag.exColorsT' | translate"
          [desc]="'docs.tag.exColorsD' | translate">
          <sg-row [label]="'docs.tag.rowDept' | translate">
            <hrm-tag color="cyan">{{ 'docs.tag.dept1' | translate }}</hrm-tag>
            <hrm-tag color="green">{{ 'docs.tag.dept2' | translate }}</hrm-tag>
            <hrm-tag color="pink">{{ 'docs.tag.dept3' | translate }}</hrm-tag>
            <hrm-tag color="yellow">{{ 'docs.tag.dept4' | translate }}</hrm-tag>
          </sg-row>
          <sg-row [label]="'docs.tag.rowPriority' | translate">
            <hrm-tag color="red">{{ 'docs.tag.prio1' | translate }}</hrm-tag>
            <hrm-tag color="orange">{{ 'docs.tag.prio2' | translate }}</hrm-tag>
            <hrm-tag color="blue">{{ 'docs.tag.prio3' | translate }}</hrm-tag>
            <hrm-tag color="purple">{{ 'docs.tag.prio4' | translate }}</hrm-tag>
          </sg-row>
          <sg-row [label]="'docs.tag.rowLeave' | translate">
            <hrm-tag color="blue">{{ 'docs.tag.leave1' | translate }}</hrm-tag>
            <hrm-tag color="orange">{{ 'docs.tag.leave2' | translate }}</hrm-tag>
            <hrm-tag color="purple">{{ 'docs.tag.leave3' | translate }}</hrm-tag>
            <hrm-tag color="teal">{{ 'docs.tag.leave4' | translate }}</hrm-tag>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tag.exPaletteT' | translate"
          [desc]="'docs.tag.exPaletteD' | translate">
          <sg-row [label]="'docs.tag.rowHues' | translate">
            @for (h of hues; track h) { <hrm-tag [color]="h">{{ h }}</hrm-tag> }
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tag.exStatusT' | translate"
          [desc]="'docs.tag.exStatusD' | translate">
          <sg-row [label]="'docs.tag.rowReqStatus' | translate">
            <hrm-tag color="success">{{ 'docs.tag.st1' | translate }}</hrm-tag>
            <hrm-tag color="warning">{{ 'docs.tag.st2' | translate }}</hrm-tag>
            <hrm-tag color="error">{{ 'docs.tag.st3' | translate }}</hrm-tag>
            <hrm-tag color="gray">{{ 'docs.tag.st4' | translate }}</hrm-tag>
          </sg-row>
          <sg-row [label]="'docs.tag.rowContract' | translate">
            <hrm-tag color="green">{{ 'docs.tag.ct1' | translate }}</hrm-tag>
            <hrm-tag color="blue">{{ 'docs.tag.ct2' | translate }}</hrm-tag>
            <hrm-tag color="gray">{{ 'docs.tag.ct3' | translate }}</hrm-tag>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tag.exCloseableT' | translate"
          [desc]="'docs.tag.exCloseableD' | translate">
          <sg-row [label]="'docs.tag.rowActiveFilter' | translate">
            <hrm-tag [closeable]="true">{{ 'docs.tag.f1' | translate }}</hrm-tag>
            <hrm-tag color="blue" [closeable]="true">{{ 'docs.tag.f2' | translate }}</hrm-tag>
            <hrm-tag color="teal" [closeable]="true">{{ 'docs.tag.f3' | translate }}</hrm-tag>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTag, { className: "SgDocTag", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/tag.ts", lineNumber: 99 });
})();
export {
  SgDocTag
};
//# sourceMappingURL=chunk-M2JXRLK5.js.map
