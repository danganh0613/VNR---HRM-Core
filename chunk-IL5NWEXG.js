import {
  NzSkeletonComponent,
  NzSkeletonModule
} from "./chunk-CQQHL6Z5.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
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
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/feedback/hrm-skeleton.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ rows: a0 });
var HrmSkeleton = class _HrmSkeleton {
  constructor() {
    this.active = input(true, ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = input(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avatar = input(false, ...ngDevMode ? [{ debugName: "avatar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input(true, ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = input(3, ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmSkeleton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSkeleton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSkeleton, selectors: [["hrm-skeleton"]], hostAttrs: [1, "hrm-skeleton"], inputs: { active: [1, "active"], loading: [1, "loading"], avatar: [1, "avatar"], title: [1, "title"], rows: [1, "rows"] }, ngContentSelectors: _c0, decls: 2, vars: 7, consts: [[3, "nzActive", "nzLoading", "nzAvatar", "nzTitle", "nzParagraph"]], template: function HrmSkeleton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-skeleton", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzActive", ctx.active())("nzLoading", ctx.loading())("nzAvatar", ctx.avatar())("nzTitle", ctx.title())("nzParagraph", \u0275\u0275pureFunction1(5, _c1, ctx.rows()));
      }
    }, dependencies: [NzSkeletonModule, NzSkeletonComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSkeleton, [{
    type: Component,
    args: [{
      selector: "hrm-skeleton",
      imports: [NzSkeletonModule],
      template: `
    <nz-skeleton
      [nzActive]="active()"
      [nzLoading]="loading()"
      [nzAvatar]="avatar()"
      [nzTitle]="title()"
      [nzParagraph]="{ rows: rows() }">
      <ng-content />
    </nz-skeleton>
  `,
      host: { class: "hrm-skeleton" }
    }]
  }], null, { active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], avatar: [{ type: Input, args: [{ isSignal: true, alias: "avatar", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSkeleton, { className: "HrmSkeleton", filePath: "libs/hrm-ui/src/lib/feedback/hrm-skeleton.ts", lineNumber: 20 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/skeleton.ts
var SgDocSkeleton = class _SgDocSkeleton {
  constructor() {
    this.when = [
      "docs.skeleton.when1",
      "docs.skeleton.when2",
      "docs.skeleton.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocSkeleton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSkeleton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSkeleton, selectors: [["sg-doc-skeleton"]], decls: 58, vars: 86, consts: [["category", "Feedback & Status", 3, "title", "desc"], ["sgOverview", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "420px"], [3, "rows"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "avatar", "title", "rows"], [2, "width", "100%", "max-width", "420px", "display", "flex", "flex-direction", "column", "gap", "20px"], [2, "width", "100%", "max-width", "480px", "display", "flex", "flex-direction", "column", "gap", "14px"]], template: function SgDocSkeleton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-example", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "sg-row")(8, "div", 3);
        \u0275\u0275element(9, "hrm-skeleton", 4);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "sg-use", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "sg-do");
        \u0275\u0275element(17, "span", 8);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 9)(29, "sg-example", 2);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 3);
        \u0275\u0275element(34, "hrm-skeleton", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "sg-example", 2);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementStart(38, "sg-row")(39, "div", 3);
        \u0275\u0275element(40, "hrm-skeleton", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "sg-example", 2);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row")(45, "div", 11);
        \u0275\u0275element(46, "hrm-skeleton", 10)(47, "hrm-skeleton", 10)(48, "hrm-skeleton", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "sg-example", 2);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row")(53, "div", 12);
        \u0275\u0275element(54, "hrm-skeleton", 10)(55, "hrm-skeleton", 10)(56, "hrm-skeleton", 10)(57, "hrm-skeleton", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 48, "docs.skeleton.title"))("desc", \u0275\u0275pipeBind1(2, 50, "docs.skeleton.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 52, "docs.skeleton.exBasicT"))("desc", \u0275\u0275pipeBind1(6, 54, "docs.skeleton.exBasicD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("rows", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 56, "docs.skeleton.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 58, "docs.skeleton.behavior"))("avoid", \u0275\u0275pipeBind1(14, 60, "docs.skeleton.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 62, "docs.skeleton.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 64, "docs.skeleton.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 66, "docs.skeleton.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 68, "docs.skeleton.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 70, "docs.skeleton.exTextT"))("desc", \u0275\u0275pipeBind1(31, 72, "docs.skeleton.exTextD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("avatar", false)("title", true)("rows", 4);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(36, 74, "docs.skeleton.exCardT"))("desc", \u0275\u0275pipeBind1(37, 76, "docs.skeleton.exCardD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("avatar", true)("title", true)("rows", 2);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 78, "docs.skeleton.exListT"))("desc", \u0275\u0275pipeBind1(43, 80, "docs.skeleton.exListD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("avatar", true)("title", false)("rows", 2);
        \u0275\u0275advance();
        \u0275\u0275property("avatar", true)("title", false)("rows", 2);
        \u0275\u0275advance();
        \u0275\u0275property("avatar", true)("title", false)("rows", 2);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 82, "docs.skeleton.exTableT"))("desc", \u0275\u0275pipeBind1(51, 84, "docs.skeleton.exTableD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("avatar", false)("title", false)("rows", 1);
        \u0275\u0275advance();
        \u0275\u0275property("avatar", false)("title", false)("rows", 1);
        \u0275\u0275advance();
        \u0275\u0275property("avatar", false)("title", false)("rows", 1);
        \u0275\u0275advance();
        \u0275\u0275property("avatar", false)("title", false)("rows", 1);
      }
    }, dependencies: [TranslateModule, HrmSkeleton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSkeleton, [{
    type: Component,
    args: [{
      selector: "sg-doc-skeleton",
      imports: [TranslateModule, HrmSkeleton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Feedback & Status" [title]="'docs.skeleton.title' | translate" [desc]="'docs.skeleton.desc' | translate">

      <div sgOverview>
        <sg-example [title]="'docs.skeleton.exBasicT' | translate"
          [desc]="'docs.skeleton.exBasicD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-skeleton [rows]="3" /></div>
          </sg-row>
        </sg-example>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.skeleton.purpose' | translate"
          [when]="when"
          [behavior]="'docs.skeleton.behavior' | translate"
          [avoid]="'docs.skeleton.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.skeleton.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.skeleton.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.skeleton.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.skeleton.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.skeleton.exTextT' | translate"
          [desc]="'docs.skeleton.exTextD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-skeleton [avatar]="false" [title]="true" [rows]="4" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.skeleton.exCardT' | translate"
          [desc]="'docs.skeleton.exCardD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px"><hrm-skeleton [avatar]="true" [title]="true" [rows]="2" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.skeleton.exListT' | translate"
          [desc]="'docs.skeleton.exListD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px;display:flex;flex-direction:column;gap:20px">
              <hrm-skeleton [avatar]="true" [title]="false" [rows]="2" />
              <hrm-skeleton [avatar]="true" [title]="false" [rows]="2" />
              <hrm-skeleton [avatar]="true" [title]="false" [rows]="2" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.skeleton.exTableT' | translate"
          [desc]="'docs.skeleton.exTableD' | translate">
          <sg-row>
            <div style="width:100%;max-width:480px;display:flex;flex-direction:column;gap:14px">
              <hrm-skeleton [avatar]="false" [title]="false" [rows]="1" />
              <hrm-skeleton [avatar]="false" [title]="false" [rows]="1" />
              <hrm-skeleton [avatar]="false" [title]="false" [rows]="1" />
              <hrm-skeleton [avatar]="false" [title]="false" [rows]="1" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSkeleton, { className: "SgDocSkeleton", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/skeleton.ts", lineNumber: 82 });
})();
export {
  SgDocSkeleton
};
//# sourceMappingURL=chunk-IL5NWEXG.js.map
