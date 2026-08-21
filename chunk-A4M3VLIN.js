import {
  NzTooltipDirective
} from "./chunk-NGY4ECW2.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-KACPPJM2.js";
import "./chunk-44R6GU63.js";
import "./chunk-LIYCNYOA.js";
import "./chunk-KGTZ2LIT.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-QANRYIV5.js";
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
  DestroyRef,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/data-display/hrm-timestamp.ts
function HrmTimestamp_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.absolute());
  }
}
function HrmTimestamp_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.relative());
  }
}
function HrmTimestamp_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzTooltipTitle", ctx_r0.absolute());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.relative());
  }
}
function hrmRelativeTime(value, locale = "vi-VN", now = /* @__PURE__ */ new Date()) {
  const d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime()))
    return String(value);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const diffSec = Math.round((d.getTime() - now.getTime()) / 1e3);
  const abs = Math.abs(diffSec);
  if (abs < 60)
    return rtf.format(Math.trunc(diffSec), "second");
  if (abs < 3600)
    return rtf.format(Math.trunc(diffSec / 60), "minute");
  if (abs < 86400)
    return rtf.format(Math.trunc(diffSec / 3600), "hour");
  if (abs < 2592e3)
    return rtf.format(Math.trunc(diffSec / 86400), "day");
  if (abs < 31536e3)
    return rtf.format(Math.trunc(diffSec / 2592e3), "month");
  return rtf.format(Math.trunc(diffSec / 31536e3), "year");
}
var HrmTimestamp = class _HrmTimestamp {
  constructor() {
    this.value = input(null, ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    ));
    this.locale = input("vi-VN", ...ngDevMode ? [{ debugName: "locale" }] : (
      /* istanbul ignore next */
      []
    ));
    this.mode = input("both", ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tick = signal(0, ...ngDevMode ? [{ debugName: "tick" }] : (
      /* istanbul ignore next */
      []
    ));
    this.relative = computed(() => {
      this.tick();
      const v = this.value();
      return v == null || v === "" ? "" : hrmRelativeTime(v, this.locale());
    }, ...ngDevMode ? [{ debugName: "relative" }] : (
      /* istanbul ignore next */
      []
    ));
    this.absolute = computed(() => {
      const v = this.value();
      if (v == null || v === "")
        return "";
      const d = v instanceof Date ? v : new Date(v);
      if (isNaN(d.getTime()))
        return String(v);
      return new Intl.DateTimeFormat(this.locale(), {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(d);
    }, ...ngDevMode ? [{ debugName: "absolute" }] : (
      /* istanbul ignore next */
      []
    ));
    const id = setInterval(() => this.tick.update((n) => n + 1), 6e4);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }
  static {
    this.\u0275fac = function HrmTimestamp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmTimestamp)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmTimestamp, selectors: [["hrm-timestamp"]], hostAttrs: [1, "hrm-timestamp"], inputs: { value: [1, "value"], locale: [1, "locale"], mode: [1, "mode"] }, decls: 3, vars: 1, consts: [[1, "ts"], ["nz-tooltip", "", 1, "ts", "ts--tip", 3, "nzTooltipTitle"]], template: function HrmTimestamp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, HrmTimestamp_Conditional_0_Template, 2, 1, "span", 0)(1, HrmTimestamp_Conditional_1_Template, 2, 1, "span", 0)(2, HrmTimestamp_Conditional_2_Template, 2, 2, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.mode() === "absolute" ? 0 : ctx.mode() === "relative" ? 1 : 2);
      }
    }, dependencies: [NzTooltipDirective], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.ts[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  white-space: nowrap;\n}\n.ts--tip[_ngcontent-%COMP%] {\n  cursor: default;\n  text-decoration: underline dotted var(--border-input);\n  text-underline-offset: 3px;\n}\n/*# sourceMappingURL=hrm-timestamp.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmTimestamp, [{
    type: Component,
    args: [{ selector: "hrm-timestamp", imports: [NzTooltipDirective], template: `
    @if (mode() === 'absolute') {
      <span class="ts">{{ absolute() }}</span>
    } @else if (mode() === 'relative') {
      <span class="ts">{{ relative() }}</span>
    } @else {
      <span class="ts ts--tip" nz-tooltip [nzTooltipTitle]="absolute()">{{ relative() }}</span>
    }
  `, host: { class: "hrm-timestamp" }, styles: ["/* angular:styles/component:css;f800a186f475a11f912c986c22bd67aaef505308e02b5961ac7e2aa1e6b7b3fa;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-timestamp.ts */\n:host {\n  display: inline-flex;\n}\n.ts {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  white-space: nowrap;\n}\n.ts--tip {\n  cursor: default;\n  text-decoration: underline dotted var(--border-input);\n  text-underline-offset: 3px;\n}\n/*# sourceMappingURL=hrm-timestamp.css.map */\n"] }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], locale: [{ type: Input, args: [{ isSignal: true, alias: "locale", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmTimestamp, { className: "HrmTimestamp", filePath: "libs/hrm-ui/src/lib/data-display/hrm-timestamp.ts", lineNumber: 42 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/timestamp.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/table-cells/date" });
var _c1 = (a0) => [a0];
var SgDocTimestamp = class _SgDocTimestamp {
  constructor() {
    this.now = Date.now();
    this.s30 = new Date(this.now - 3e4);
    this.m5 = new Date(this.now - 5 * 6e4);
    this.h3 = new Date(this.now - 3 * 36e5);
    this.d2 = new Date(this.now - 2 * 864e5);
    this.mo3 = new Date(this.now - 92 * 864e5);
    this.when = [
      "docs.timestamp.when1",
      "docs.timestamp.when2",
      "docs.timestamp.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTimestamp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTimestamp)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTimestamp, selectors: [["sg-doc-timestamp"]], decls: 63, vars: 73, consts: [["category", "Content", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "value"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], ["mode", "relative", 3, "value"], ["mode", "absolute", 3, "value"], ["mode", "both", 3, "value"], [1, "col"], [1, "row"], [1, "lbl"]], template: function SgDocTimestamp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-timestamp", 2)(7, "hrm-timestamp", 2)(8, "hrm-timestamp", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275element(10, "sg-use", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 5)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 6)(25, "sg-example", 7);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275element(30, "hrm-timestamp", 9)(31, "hrm-timestamp", 10)(32, "hrm-timestamp", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "sg-example", 7);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row")(37, "div", 12)(38, "div", 13)(39, "span", 14);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "hrm-timestamp", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 13)(44, "span", 14);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "hrm-timestamp", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 13)(49, "span", 14);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "hrm-timestamp", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 13)(54, "span", 14);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "hrm-timestamp", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 13)(59, "span", 14);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "hrm-timestamp", 2);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 31, "docs.timestamp.title"))("related", \u0275\u0275pureFunction1(71, _c1, \u0275\u0275pureFunction1(69, _c0, \u0275\u0275pipeBind1(2, 33, "docs.timestamp.relDate"))))("desc", \u0275\u0275pipeBind1(3, 35, "docs.timestamp.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("value", ctx.m5);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.h3);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.d2);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 37, "docs.timestamp.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 39, "docs.timestamp.behavior"))("avoid", \u0275\u0275pipeBind1(13, 41, "docs.timestamp.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 43, "docs.timestamp.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 45, "docs.timestamp.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 47, "docs.timestamp.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 49, "docs.timestamp.ex1T"))("desc", \u0275\u0275pipeBind1(27, 51, "docs.timestamp.ex1D"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(29, 53, "docs.timestamp.ex1Row"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.h3);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.h3);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.h3);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 55, "docs.timestamp.ex2T"))("desc", \u0275\u0275pipeBind1(35, 57, "docs.timestamp.ex2D"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 59, "docs.timestamp.rowSubmit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.s30);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 61, "docs.timestamp.rowComment"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.m5);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 63, "docs.timestamp.rowApprove"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.h3);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 65, "docs.timestamp.rowUpdate"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.d2);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 67, "docs.timestamp.rowSign"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.mo3);
      }
    }, dependencies: [TranslateModule, HrmTimestamp, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.lbl[_ngcontent-%COMP%] {\n  width: 140px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=timestamp.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTimestamp, [{
    type: Component,
    args: [{ selector: "sg-doc-timestamp", imports: [TranslateModule, HrmTimestamp, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Content" [title]="'docs.timestamp.title' | translate" [related]="[{label:('docs.timestamp.relDate' | translate), route:'hrm/table-cells/date'}]"
      [desc]="'docs.timestamp.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-timestamp [value]="m5" />
          <hrm-timestamp [value]="h3" />
          <hrm-timestamp [value]="d2" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.timestamp.purpose' | translate"
          [when]="when"
          [behavior]="'docs.timestamp.behavior' | translate"
          [avoid]="'docs.timestamp.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.timestamp.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.timestamp.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.timestamp.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.timestamp.ex1T' | translate"
          [desc]="'docs.timestamp.ex1D' | translate">
          <sg-row [label]="'docs.timestamp.ex1Row' | translate">
            <hrm-timestamp [value]="h3" mode="relative" />
            <hrm-timestamp [value]="h3" mode="absolute" />
            <hrm-timestamp [value]="h3" mode="both" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.timestamp.ex2T' | translate"
          [desc]="'docs.timestamp.ex2D' | translate">
          <sg-row>
            <div class="col">
              <div class="row"><span class="lbl">{{ 'docs.timestamp.rowSubmit' | translate }}</span><hrm-timestamp [value]="s30" /></div>
              <div class="row"><span class="lbl">{{ 'docs.timestamp.rowComment' | translate }}</span><hrm-timestamp [value]="m5" /></div>
              <div class="row"><span class="lbl">{{ 'docs.timestamp.rowApprove' | translate }}</span><hrm-timestamp [value]="h3" /></div>
              <div class="row"><span class="lbl">{{ 'docs.timestamp.rowUpdate' | translate }}</span><hrm-timestamp [value]="d2" /></div>
              <div class="row"><span class="lbl">{{ 'docs.timestamp.rowSign' | translate }}</span><hrm-timestamp [value]="mo3" /></div>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;f545b8a89f6579ac8c30d6fa3023f9ec8d3a77d78bc87df92b696ca89d1fe77b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/timestamp.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.lbl {\n  width: 140px;\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=timestamp.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTimestamp, { className: "SgDocTimestamp", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/timestamp.ts", lineNumber: 69 });
})();
export {
  SgDocTimestamp
};
//# sourceMappingURL=chunk-A4M3VLIN.js.map
