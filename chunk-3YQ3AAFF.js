import {
  HrmAvatarGroup
} from "./chunk-BGQNE4M7.js";
import "./chunk-KS5WOU2W.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KXHKNX77.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
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
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/avatar-group.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/avatar" });
var _c1 = (a0) => [a0];
var SgDocAvatarGroup = class _SgDocAvatarGroup {
  constructor() {
    this.team = [
      { src: "https://i.pravatar.cc/80?img=12", name: "Nguy\u1EC5n V\u0103n An" },
      { name: "Tr\u1EA7n Thu H\xE0" },
      { name: "L\xEA Minh Qu\xE2n" },
      { name: "Ph\u1EA1m Thu Trang" },
      { name: "\u0110\u1ED7 H\u1EA3i Nam" },
      { name: "V\u0169 Qu\u1EF3nh Chi" },
      { name: "B\xF9i Kh\xE1nh Linh" }
    ];
    this.when = [
      "docs.avatarGroup.when1",
      "docs.avatarGroup.when2",
      "docs.avatarGroup.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocAvatarGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAvatarGroup)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAvatarGroup, selectors: [["sg-doc-avatar-group"]], decls: 48, vars: 78, consts: [["category", "Content", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "items", "max"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "items"], [3, "label"], [3, "items", "max", "compact"], [3, "items", "size"]], template: function SgDocAvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-avatar-group", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275element(8, "sg-use", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-dont");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 6)(23, "sg-example", 7);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementStart(26, "sg-row");
        \u0275\u0275element(27, "hrm-avatar-group", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "sg-example", 7);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row", 9);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275element(33, "hrm-avatar-group", 2)(34, "hrm-avatar-group", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "sg-example", 7);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementStart(38, "sg-row");
        \u0275\u0275element(39, "hrm-avatar-group", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "sg-example", 7);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "hrm-avatar-group", 11)(46, "hrm-avatar-group", 11)(47, "hrm-avatar-group", 11);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 36, "docs.avatarGroup.title"))("related", \u0275\u0275pureFunction1(76, _c1, \u0275\u0275pureFunction1(74, _c0, \u0275\u0275pipeBind1(2, 38, "docs.avatarGroup.relAvatar"))))("desc", \u0275\u0275pipeBind1(3, 40, "docs.avatarGroup.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("items", ctx.team)("max", 4);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 42, "docs.avatarGroup.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 44, "docs.avatarGroup.behavior"))("avoid", \u0275\u0275pipeBind1(11, 46, "docs.avatarGroup.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 48, "docs.avatarGroup.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 50, "docs.avatarGroup.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 52, "docs.avatarGroup.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 54, "docs.avatarGroup.exBasicT"))("desc", \u0275\u0275pipeBind1(25, 56, "docs.avatarGroup.exBasicD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.team.slice(0, 3));
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 58, "docs.avatarGroup.exLimitT"))("desc", \u0275\u0275pipeBind1(30, 60, "docs.avatarGroup.exLimitD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(32, 62, "docs.avatarGroup.rowLimit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.team)("max", 3);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.team)("max", 5);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(36, 64, "docs.avatarGroup.exCompactT"))("desc", \u0275\u0275pipeBind1(37, 66, "docs.avatarGroup.exCompactD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.team)("max", 4)("compact", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 68, "docs.avatarGroup.exSizeT"))("desc", \u0275\u0275pipeBind1(42, 70, "docs.avatarGroup.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 72, "docs.avatarGroup.rowSizes"));
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.team.slice(0, 4))("size", 24);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.team.slice(0, 4))("size", 32);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.team.slice(0, 4))("size", 40);
      }
    }, dependencies: [TranslateModule, HrmAvatarGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAvatarGroup, [{
    type: Component,
    args: [{
      selector: "sg-doc-avatar-group",
      imports: [TranslateModule, HrmAvatarGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.avatarGroup.title' | translate" [related]="[{label:('docs.avatarGroup.relAvatar' | translate), route:'hrm/data-display/avatar'}]"
      [desc]="'docs.avatarGroup.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-avatar-group [items]="team" [max]="4" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.avatarGroup.purpose' | translate"
          [when]="when"
          [behavior]="'docs.avatarGroup.behavior' | translate"
          [avoid]="'docs.avatarGroup.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.avatarGroup.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.avatarGroup.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.avatarGroup.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.avatarGroup.exBasicT' | translate"
          [desc]="'docs.avatarGroup.exBasicD' | translate">
          <sg-row>
            <hrm-avatar-group [items]="team.slice(0, 3)" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatarGroup.exLimitT' | translate"
          [desc]="'docs.avatarGroup.exLimitD' | translate">
          <sg-row [label]="'docs.avatarGroup.rowLimit' | translate">
            <hrm-avatar-group [items]="team" [max]="3" />
            <hrm-avatar-group [items]="team" [max]="5" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatarGroup.exCompactT' | translate"
          [desc]="'docs.avatarGroup.exCompactD' | translate">
          <sg-row>
            <hrm-avatar-group [items]="team" [max]="4" [compact]="true" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatarGroup.exSizeT' | translate"
          [desc]="'docs.avatarGroup.exSizeD' | translate">
          <sg-row [label]="'docs.avatarGroup.rowSizes' | translate">
            <hrm-avatar-group [items]="team.slice(0, 4)" [size]="24" />
            <hrm-avatar-group [items]="team.slice(0, 4)" [size]="32" />
            <hrm-avatar-group [items]="team.slice(0, 4)" [size]="40" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAvatarGroup, { className: "SgDocAvatarGroup", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/avatar-group.ts", lineNumber: 71 });
})();
export {
  SgDocAvatarGroup
};
//# sourceMappingURL=chunk-3YQ3AAFF.js.map
