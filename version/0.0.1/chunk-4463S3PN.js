import {
  NzSpinComponent,
  NzSpinModule
} from "./chunk-MT7CL62E.js";
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
import "./chunk-BWIWCH2F.js";
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

// libs/hrm-ui/src/lib/feedback/hrm-spin.ts
var _c0 = ["*"];
var HrmSpin = class _HrmSpin {
  constructor() {
    this.spinning = input(true, ...ngDevMode ? [{ debugName: "spinning" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("default", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.simple = input(false, ...ngDevMode ? [{ debugName: "simple" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tip = input("", ...ngDevMode ? [{ debugName: "tip" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmSpin)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmSpin, selectors: [["hrm-spin"]], hostAttrs: [1, "hrm-spin"], inputs: { spinning: [1, "spinning"], size: [1, "size"], simple: [1, "simple"], tip: [1, "tip"] }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[3, "nzSpinning", "nzSize", "nzSimple", "nzTip"]], template: function HrmSpin_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-spin", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzSpinning", ctx.spinning())("nzSize", ctx.size())("nzSimple", ctx.simple())("nzTip", ctx.tip());
      }
    }, dependencies: [NzSpinModule, NzSpinComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmSpin, [{
    type: Component,
    args: [{
      selector: "hrm-spin",
      imports: [NzSpinModule],
      template: `
    <nz-spin [nzSpinning]="spinning()" [nzSize]="size()" [nzSimple]="simple()" [nzTip]="tip()">
      <ng-content />
    </nz-spin>
  `,
      host: { class: "hrm-spin" }
    }]
  }], null, { spinning: [{ type: Input, args: [{ isSignal: true, alias: "spinning", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], simple: [{ type: Input, args: [{ isSignal: true, alias: "simple", required: false }] }], tip: [{ type: Input, args: [{ isSignal: true, alias: "tip", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmSpin, { className: "HrmSpin", filePath: "libs/hrm-ui/src/lib/feedback/hrm-spin.ts", lineNumber: 15 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/spin.ts
var SgDocSpin = class _SgDocSpin {
  constructor() {
    this.when = [
      "docs.spin.when1",
      "docs.spin.when2",
      "docs.spin.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocSpin)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocSpin, selectors: [["sg-doc-spin"]], decls: 78, vars: 102, consts: [["category", "Feedback & Status", 3, "title", "desc"], ["sgOverview", ""], [2, "text-align", "center", "padding", "20px"], [3, "spinning", "simple"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [2, "padding", "0 12px"], ["size", "small", 3, "spinning", "simple"], ["size", "default", 3, "spinning", "simple"], ["size", "large", 3, "spinning", "simple"], [2, "text-align", "center", "padding", "8px 24px"], [3, "spinning", "simple", "tip"], [2, "padding", "20px 28px", "border-radius", "12px", "background", "var(--bg-surface)", "border", "1px solid var(--border-sub)"], [1, "spin-on-media", 2, "padding", "20px 28px", "border-radius", "12px", "background", "#1f2937"], [2, "width", "100%", "max-width", "360px"], [3, "spinning", "tip"], [2, "padding", "20px", "border", "1px solid var(--border-sub)", "border-radius", "12px", "min-height", "120px", "background", "var(--bg-surface)"], [2, "font-weight", "600", "margin-bottom", "6px"], [2, "color", "var(--text-sub)", "font-size", "var(--fs-13)"], [2, "color", "var(--text-sub)", "font-size", "var(--fs-13)", "margin-top", "4px"]], template: function SgDocSpin_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-spin", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "sg-use", 5);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "sg-do");
        \u0275\u0275element(13, "span", 7);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "sg-do");
        \u0275\u0275element(16, "span", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 7);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "sg-example", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row", 10);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementStart(33, "div", 11);
        \u0275\u0275element(34, "hrm-spin", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 11);
        \u0275\u0275element(36, "hrm-spin", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 11);
        \u0275\u0275element(38, "hrm-spin", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "sg-example", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row", 10);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "div", 15);
        \u0275\u0275element(45, "hrm-spin", 16);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "sg-row", 10);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "div", 15);
        \u0275\u0275element(50, "hrm-spin", 16);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "sg-example", 9);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "sg-row", 10);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "div", 17);
        \u0275\u0275element(58, "hrm-spin", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 18);
        \u0275\u0275element(60, "hrm-spin", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "sg-example", 9);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row")(65, "div", 19)(66, "hrm-spin", 20);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementStart(68, "div", 21)(69, "div", 22);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 23);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 24);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 46, "docs.spin.title"))("desc", \u0275\u0275pipeBind1(2, 48, "docs.spin.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 50, "docs.spin.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 52, "docs.spin.behavior"))("avoid", \u0275\u0275pipeBind1(10, 54, "docs.spin.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(14, 56, "docs.spin.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 58, "docs.spin.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 60, "docs.spin.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 62, "docs.spin.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 64, "docs.spin.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 66, "docs.spin.exSizeT"))("desc", \u0275\u0275pipeBind1(30, 68, "docs.spin.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(32, 70, "docs.spin.rowSize"));
        \u0275\u0275advance(3);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 72, "docs.spin.exLabelT"))("desc", \u0275\u0275pipeBind1(41, 74, "docs.spin.exLabelD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(43, 76, "docs.spin.rowLabelShort"));
        \u0275\u0275advance(3);
        \u0275\u0275property("spinning", true)("simple", true)("tip", \u0275\u0275pipeBind1(46, 78, "docs.spin.tipShort"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(48, 80, "docs.spin.rowLabelLong"));
        \u0275\u0275advance(3);
        \u0275\u0275property("spinning", true)("simple", true)("tip", \u0275\u0275pipeBind1(51, 82, "docs.spin.tipLong"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(53, 84, "docs.spin.exMediaT"))("desc", \u0275\u0275pipeBind1(54, 86, "docs.spin.exMediaD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 88, "docs.spin.rowMedia"));
        \u0275\u0275advance(3);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("spinning", true)("simple", true);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 90, "docs.spin.exOverlayT"))("desc", \u0275\u0275pipeBind1(63, 92, "docs.spin.exOverlayD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("spinning", true)("tip", \u0275\u0275pipeBind1(67, 94, "docs.spin.tipOverlay"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 96, "docs.spin.cardName"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 98, "docs.spin.cardDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 100, "docs.spin.cardJoin"));
      }
    }, dependencies: [TranslateModule, HrmSpin, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.spin-on-media[_ngcontent-%COMP%]     .ant-spin-dot-item {\n  background: #ffffff;\n}\n/*# sourceMappingURL=spin.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocSpin, [{
    type: Component,
    args: [{ selector: "sg-doc-spin", imports: [TranslateModule, HrmSpin, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Feedback & Status" [title]="'docs.spin.title' | translate" [desc]="'docs.spin.desc' | translate">

      <div sgOverview>
        <div style="text-align:center;padding:20px"><hrm-spin [spinning]="true" [simple]="true" /></div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.spin.purpose' | translate"
          [when]="when"
          [behavior]="'docs.spin.behavior' | translate"
          [avoid]="'docs.spin.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.spin.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.spin.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.spin.do3' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.spin.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.spin.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.spin.exSizeT' | translate"
          [desc]="'docs.spin.exSizeD' | translate">
          <sg-row [label]="'docs.spin.rowSize' | translate">
            <div style="padding:0 12px"><hrm-spin [spinning]="true" [simple]="true" size="small" /></div>
            <div style="padding:0 12px"><hrm-spin [spinning]="true" [simple]="true" size="default" /></div>
            <div style="padding:0 12px"><hrm-spin [spinning]="true" [simple]="true" size="large" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.spin.exLabelT' | translate"
          [desc]="'docs.spin.exLabelD' | translate">
          <sg-row [label]="'docs.spin.rowLabelShort' | translate">
            <div style="text-align:center;padding:8px 24px"><hrm-spin [spinning]="true" [simple]="true" [tip]="'docs.spin.tipShort' | translate" /></div>
          </sg-row>
          <sg-row [label]="'docs.spin.rowLabelLong' | translate">
            <div style="text-align:center;padding:8px 24px"><hrm-spin [spinning]="true" [simple]="true" [tip]="'docs.spin.tipLong' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.spin.exMediaT' | translate"
          [desc]="'docs.spin.exMediaD' | translate">
          <sg-row [label]="'docs.spin.rowMedia' | translate">
            <div style="padding:20px 28px;border-radius:12px;background:var(--bg-surface);border:1px solid var(--border-sub)">
              <hrm-spin [spinning]="true" [simple]="true" />
            </div>
            <div class="spin-on-media" style="padding:20px 28px;border-radius:12px;background:#1f2937">
              <hrm-spin [spinning]="true" [simple]="true" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.spin.exOverlayT' | translate"
          [desc]="'docs.spin.exOverlayD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <hrm-spin [spinning]="true" [tip]="'docs.spin.tipOverlay' | translate">
                <div style="padding:20px;border:1px solid var(--border-sub);border-radius:12px;min-height:120px;background:var(--bg-surface)">
                  <div style="font-weight:600;margin-bottom:6px">{{ 'docs.spin.cardName' | translate }}</div>
                  <div style="color:var(--text-sub);font-size: var(--fs-13)">{{ 'docs.spin.cardDept' | translate }}</div>
                  <div style="color:var(--text-sub);font-size: var(--fs-13);margin-top:4px">{{ 'docs.spin.cardJoin' | translate }}</div>
                </div>
              </hrm-spin>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;353a3160aa5152e5adcf2195f9b2425341a9473a170760f095b743d5143f8817;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/spin.ts */\n.spin-on-media ::ng-deep .ant-spin-dot-item {\n  background: #ffffff;\n}\n/*# sourceMappingURL=spin.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocSpin, { className: "SgDocSpin", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/feedback/spin.ts", lineNumber: 89 });
})();
export {
  SgDocSpin
};
//# sourceMappingURL=chunk-4463S3PN.js.map
