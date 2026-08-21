import {
  HrmBadge
} from "./chunk-MEB7WEQC.js";
import "./chunk-HD5R6J3K.js";
import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  Bell,
  Checklist,
  Mail,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/badge.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/table-cells/status" });
var _c1 = (a0) => [a0];
var SgDocBadge = class _SgDocBadge {
  constructor() {
    this.bell = Bell;
    this.mail = Mail;
    this.checklist = Checklist;
    this.when = [
      "docs.badge.when1",
      "docs.badge.when2",
      "docs.badge.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocBadge)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocBadge, selectors: [["sg-doc-badge"]], decls: 119, vars: 155, consts: [["category", "Feedback & Status", 3, "title", "related", "desc"], ["sgOverview", ""], ["color", "blue"], ["color", "green"], [3, "count"], [3, "icon", "size"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["color", "cyan"], ["color", "pink"], ["color", "yellow"], ["color", "red"], ["color", "orange"], ["color", "purple"], [3, "count", "overflowCount"], [3, "dot"], [1, "nav-item"], ["status", "success", 3, "text"], ["status", "processing", 3, "text"], ["status", "warning", 3, "text"], ["status", "error", 3, "text"], ["status", "default", 3, "text"], ["color", "success"], ["color", "warning"], ["color", "error"], ["color", "gray"]], template: function SgDocBadge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row")(6, "hrm-tag", 2);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "hrm-tag", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "hrm-badge", 4);
        \u0275\u0275element(13, "tabler-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275element(15, "sg-use", 7);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8)(20, "sg-do");
        \u0275\u0275text(21);
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
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "sg-dont");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 9)(36, "sg-example", 10);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row", 11);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "hrm-tag", 12);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "hrm-tag", 3);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "hrm-tag", 13);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "hrm-tag", 14);
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "sg-row", 11);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "hrm-tag", 15);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "hrm-tag", 16);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "hrm-tag", 2);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "hrm-tag", 17);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "sg-example", 10);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementStart(70, "sg-row", 11);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementStart(72, "hrm-badge", 4);
        \u0275\u0275element(73, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "hrm-badge", 4);
        \u0275\u0275element(75, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "hrm-badge", 18);
        \u0275\u0275element(77, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "hrm-badge", 19);
        \u0275\u0275element(79, "tabler-icon", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "sg-row", 11);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementStart(82, "span", 20);
        \u0275\u0275text(83);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275element(85, "hrm-badge", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "span", 20);
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275element(89, "hrm-badge", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "sg-example", 10);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementStart(93, "sg-row", 11);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275element(95, "hrm-badge", 21);
        \u0275\u0275pipe(96, "translate");
        \u0275\u0275element(97, "hrm-badge", 22);
        \u0275\u0275pipe(98, "translate");
        \u0275\u0275element(99, "hrm-badge", 23);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275element(101, "hrm-badge", 24);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275element(103, "hrm-badge", 25);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "sg-row", 11);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementStart(107, "hrm-tag", 26);
        \u0275\u0275text(108);
        \u0275\u0275pipe(109, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "hrm-tag", 27);
        \u0275\u0275text(111);
        \u0275\u0275pipe(112, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "hrm-tag", 28);
        \u0275\u0275text(114);
        \u0275\u0275pipe(115, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "hrm-tag", 29);
        \u0275\u0275text(117);
        \u0275\u0275pipe(118, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 63, "docs.badge.title"))("related", \u0275\u0275pureFunction1(153, _c1, \u0275\u0275pureFunction1(151, _c0, \u0275\u0275pipeBind1(2, 65, "docs.badge.relStatus"))))("desc", \u0275\u0275pipeBind1(3, 67, "docs.badge.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 69, "docs.badge.ovHr"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 71, "docs.badge.ovApproved"));
        \u0275\u0275advance(2);
        \u0275\u0275property("count", 5);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.bell)("size", 22);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(16, 73, "docs.badge.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(17, 75, "docs.badge.behavior"))("avoid", \u0275\u0275pipeBind1(18, 77, "docs.badge.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 79, "docs.badge.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 81, "docs.badge.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 83, "docs.badge.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 85, "docs.badge.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 87, "docs.badge.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 89, "docs.badge.exColorsT"))("desc", \u0275\u0275pipeBind1(38, 91, "docs.badge.exColorsD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(40, 93, "docs.badge.rowDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 95, "docs.badge.dept1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 97, "docs.badge.dept2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 99, "docs.badge.dept3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 101, "docs.badge.dept4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(54, 103, "docs.badge.rowPriority"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 105, "docs.badge.prio1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 107, "docs.badge.prio2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 109, "docs.badge.prio3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 111, "docs.badge.prio4"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(68, 113, "docs.badge.exCountT"))("desc", \u0275\u0275pipeBind1(69, 115, "docs.badge.exCountD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(71, 117, "docs.badge.rowOnIcon"));
        \u0275\u0275advance(2);
        \u0275\u0275property("count", 5);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.bell)("size", 22);
        \u0275\u0275advance();
        \u0275\u0275property("count", 12);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.mail)("size", 22);
        \u0275\u0275advance();
        \u0275\u0275property("count", 120)("overflowCount", 99);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.checklist)("size", 22);
        \u0275\u0275advance();
        \u0275\u0275property("dot", true);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.bell)("size", 22);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(81, 119, "docs.badge.rowMenuLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(84, 121, "docs.badge.menuInbox"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("count", 3);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(88, 123, "docs.badge.menuPending"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("count", 8);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(91, 125, "docs.badge.exStatusT"))("desc", \u0275\u0275pipeBind1(92, 127, "docs.badge.exStatusD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(94, 129, "docs.badge.rowDotText"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(96, 131, "docs.badge.sActive"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(98, 133, "docs.badge.sProcessing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(100, 135, "docs.badge.sPending"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(102, 137, "docs.badge.sError"));
        \u0275\u0275advance(2);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(104, 139, "docs.badge.sStopped"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(106, 141, "docs.badge.rowStatusTag"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 143, "docs.badge.st1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 145, "docs.badge.st2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 147, "docs.badge.st3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 149, "docs.badge.st4"));
      }
    }, dependencies: [TranslateModule, HrmBadge, HrmTag, TablerIconComponent, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.nav-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=badge.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocBadge, [{
    type: Component,
    args: [{ selector: "sg-doc-badge", imports: [TranslateModule, HrmBadge, HrmTag, TablerIconComponent, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Feedback & Status" [title]="'docs.badge.title' | translate" [related]="[{label:('docs.badge.relStatus' | translate), route:'hrm/table-cells/status'}]" [desc]="'docs.badge.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-tag color="blue">{{ 'docs.badge.ovHr' | translate }}</hrm-tag>
          <hrm-tag color="green">{{ 'docs.badge.ovApproved' | translate }}</hrm-tag>
          <hrm-badge [count]="5"><tabler-icon [icon]="$any(bell)" [size]="22" /></hrm-badge>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.badge.purpose' | translate"
          [when]="when"
          [behavior]="'docs.badge.behavior' | translate"
          [avoid]="'docs.badge.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.badge.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.badge.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.badge.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.badge.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.badge.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.badge.exColorsT' | translate"
          [desc]="'docs.badge.exColorsD' | translate">
          <sg-row [label]="'docs.badge.rowDept' | translate">
            <hrm-tag color="cyan">{{ 'docs.badge.dept1' | translate }}</hrm-tag>
            <hrm-tag color="green">{{ 'docs.badge.dept2' | translate }}</hrm-tag>
            <hrm-tag color="pink">{{ 'docs.badge.dept3' | translate }}</hrm-tag>
            <hrm-tag color="yellow">{{ 'docs.badge.dept4' | translate }}</hrm-tag>
          </sg-row>
          <sg-row [label]="'docs.badge.rowPriority' | translate">
            <hrm-tag color="red">{{ 'docs.badge.prio1' | translate }}</hrm-tag>
            <hrm-tag color="orange">{{ 'docs.badge.prio2' | translate }}</hrm-tag>
            <hrm-tag color="blue">{{ 'docs.badge.prio3' | translate }}</hrm-tag>
            <hrm-tag color="purple">{{ 'docs.badge.prio4' | translate }}</hrm-tag>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.badge.exCountT' | translate"
          [desc]="'docs.badge.exCountD' | translate">
          <sg-row [label]="'docs.badge.rowOnIcon' | translate">
            <hrm-badge [count]="5"><tabler-icon [icon]="$any(bell)" [size]="22" /></hrm-badge>
            <hrm-badge [count]="12"><tabler-icon [icon]="$any(mail)" [size]="22" /></hrm-badge>
            <hrm-badge [count]="120" [overflowCount]="99"><tabler-icon [icon]="$any(checklist)" [size]="22" /></hrm-badge>
            <hrm-badge [dot]="true"><tabler-icon [icon]="$any(bell)" [size]="22" /></hrm-badge>
          </sg-row>
          <sg-row [label]="'docs.badge.rowMenuLabel' | translate">
            <span class="nav-item">{{ 'docs.badge.menuInbox' | translate }} <hrm-badge [count]="3" /></span>
            <span class="nav-item">{{ 'docs.badge.menuPending' | translate }} <hrm-badge [count]="8" /></span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.badge.exStatusT' | translate"
          [desc]="'docs.badge.exStatusD' | translate">
          <sg-row [label]="'docs.badge.rowDotText' | translate">
            <hrm-badge status="success" [text]="'docs.badge.sActive' | translate" />
            <hrm-badge status="processing" [text]="'docs.badge.sProcessing' | translate" />
            <hrm-badge status="warning" [text]="'docs.badge.sPending' | translate" />
            <hrm-badge status="error" [text]="'docs.badge.sError' | translate" />
            <hrm-badge status="default" [text]="'docs.badge.sStopped' | translate" />
          </sg-row>
          <sg-row [label]="'docs.badge.rowStatusTag' | translate">
            <hrm-tag color="success">{{ 'docs.badge.st1' | translate }}</hrm-tag>
            <hrm-tag color="warning">{{ 'docs.badge.st2' | translate }}</hrm-tag>
            <hrm-tag color="error">{{ 'docs.badge.st3' | translate }}</hrm-tag>
            <hrm-tag color="gray">{{ 'docs.badge.st4' | translate }}</hrm-tag>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;8af5bd4502e8e883d6b7d7d681f5251b975dea98a3a62a19d0f4ddff6f8355e3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/badge.ts */\n.nav-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=badge.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocBadge, { className: "SgDocBadge", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/badge.ts", lineNumber: 94 });
})();
export {
  SgDocBadge
};
//# sourceMappingURL=chunk-NPBI2FHI.js.map
