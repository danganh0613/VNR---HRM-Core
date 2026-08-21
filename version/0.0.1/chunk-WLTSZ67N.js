import {
  NzPopoverDirective
} from "./chunk-GKLVT5NB.js";
import "./chunk-UDAG7UB6.js";
import {
  HrmAvatar
} from "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
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
import {
  HrmButton
} from "./chunk-R5R3QIRE.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
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
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/overlays/hrm-hover-card.ts
var _c0 = ["*"];
var HrmHoverCard = class _HrmHoverCard {
  constructor() {
    this.content = input(null, ...ngDevMode ? [{ debugName: "content" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placement = input("top", ...ngDevMode ? [{ debugName: "placement" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmHoverCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmHoverCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmHoverCard, selectors: [["hrm-hover-card"]], hostAttrs: [1, "hrm-hover-card"], inputs: { content: [1, "content"], placement: [1, "placement"] }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [["nz-popover", "", "nzPopoverTrigger", "hover", 1, "hc-anchor", 3, "nzPopoverContent", "nzPopoverPlacement", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay"]], template: function HrmHoverCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzPopoverContent", ctx.content() ?? void 0)("nzPopoverPlacement", ctx.placement())("nzPopoverMouseEnterDelay", 0.15)("nzPopoverMouseLeaveDelay", 0.1);
      }
    }, dependencies: [NzPopoverDirective], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n}\n.hc-anchor[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  cursor: default;\n}\n/*# sourceMappingURL=hrm-hover-card.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmHoverCard, [{
    type: Component,
    args: [{ selector: "hrm-hover-card", imports: [NzPopoverDirective], template: `
    <span
      class="hc-anchor"
      nz-popover
      nzPopoverTrigger="hover"
      [nzPopoverContent]="content() ?? undefined"
      [nzPopoverPlacement]="placement()"
      [nzPopoverMouseEnterDelay]="0.15"
      [nzPopoverMouseLeaveDelay]="0.1">
      <ng-content />
    </span>
  `, host: { class: "hrm-hover-card" }, styles: ["/* angular:styles/component:css;f69775557edb5bc915e17a47dd8ed5683c8abc3164812895dfdb4dc8d9b5e32f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/overlays/hrm-hover-card.ts */\n:host {\n  display: inline-flex;\n  min-width: 0;\n}\n.hc-anchor {\n  display: inline-flex;\n  min-width: 0;\n  cursor: default;\n}\n/*# sourceMappingURL=hrm-hover-card.css.map */\n"] }]
  }], null, { content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], placement: [{ type: Input, args: [{ isSignal: true, alias: "placement", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmHoverCard, { className: "HrmHoverCard", filePath: "libs/hrm-ui/src/lib/overlays/hrm-hover-card.ts", lineNumber: 28 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/hover-card.ts
function SgDocHoverCard_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "hrm-avatar", 15);
    \u0275\u0275elementStart(3, "div")(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "hrm-button", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("colorful", true)("size", 44);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "docs.hoverCard.name1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "docs.hoverCard.role1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "docs.hoverCard.meta1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "docs.hoverCard.viewProfile"));
  }
}
function SgDocHoverCard_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "hrm-avatar", 20);
    \u0275\u0275elementStart(3, "div")(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "hrm-button", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("colorful", true)("size", 44);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "docs.hoverCard.name2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "docs.hoverCard.role2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "docs.hoverCard.meta2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "docs.hoverCard.viewProfile"));
  }
}
var SgDocHoverCard = class _SgDocHoverCard {
  constructor() {
    this.when = [
      "docs.hoverCard.when1",
      "docs.hoverCard.when2",
      "docs.hoverCard.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocHoverCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocHoverCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocHoverCard, selectors: [["sg-doc-hover-card"]], decls: 44, vars: 46, consts: [["profile", ""], ["profile2", ""], ["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], [1, "hv-line"], [3, "content"], [1, "hv-name"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["placement", "bottom", 3, "content"], [1, "hv-card"], [1, "hv-top"], ["colorSeed", "Nguy\u1EC5n V\u0103n An", "text", "NA", 3, "colorful", "size"], [1, "hv-t1"], [1, "hv-t2"], [1, "hv-meta"], ["size", "sm", "variant", "primary"], ["colorSeed", "Tr\u1EA7n Thu H\xE0", "text", "TH", 3, "colorful", "size"], ["size", "sm"]], template: function SgDocHoverCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 2);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 3)(4, "sg-row")(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-hover-card", 5)(9, "a", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275element(13, "sg-use", 8);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9)(18, "sg-do");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "sg-example", 11);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "hrm-hover-card", 5)(33, "a", 6);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "hrm-hover-card", 12)(37, "a", 6);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(40, SgDocHoverCard_ng_template_40_Template, 16, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(42, SgDocHoverCard_ng_template_42_Template, 16, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const profile_r1 = \u0275\u0275reference(41);
        const profile2_r2 = \u0275\u0275reference(43);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 18, "docs.hoverCard.title"))("desc", \u0275\u0275pipeBind1(2, 20, "docs.hoverCard.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 22, "docs.hoverCard.ovApprover"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("content", profile_r1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 24, "docs.hoverCard.name1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(14, 26, "docs.hoverCard.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(15, 28, "docs.hoverCard.behavior"))("avoid", \u0275\u0275pipeBind1(16, 30, "docs.hoverCard.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 32, "docs.hoverCard.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 34, "docs.hoverCard.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 36, "docs.hoverCard.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 38, "docs.hoverCard.exProfileT"))("desc", \u0275\u0275pipeBind1(30, 40, "docs.hoverCard.exProfileD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("content", profile_r1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 42, "docs.hoverCard.name1"));
        \u0275\u0275advance(2);
        \u0275\u0275property("content", profile2_r2);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 44, "docs.hoverCard.name2"));
      }
    }, dependencies: [TranslateModule, HrmHoverCard, HrmAvatar, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.hv-line[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.hv-name[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  cursor: pointer;\n  font-weight: 500;\n}\n.hv-name[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.hv-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 240px;\n}\n.hv-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hv-t1[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.hv-t2[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.hv-meta[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hover-card.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocHoverCard, [{
    type: Component,
    args: [{ selector: "sg-doc-hover-card", imports: [TranslateModule, HrmHoverCard, HrmAvatar, HrmButton, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Overlay" [title]="'docs.hoverCard.title' | translate" [desc]="'docs.hoverCard.desc' | translate">

      <div sgOverview>
        <sg-row>
          <span class="hv-line">{{ 'docs.hoverCard.ovApprover' | translate }}
            <hrm-hover-card [content]="profile">
              <a class="hv-name">{{ 'docs.hoverCard.name1' | translate }}</a>
            </hrm-hover-card>
          </span>
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.hoverCard.purpose' | translate"
          [when]="when"
          [behavior]="'docs.hoverCard.behavior' | translate"
          [avoid]="'docs.hoverCard.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.hoverCard.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.hoverCard.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.hoverCard.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.hoverCard.exProfileT' | translate"
          [desc]="'docs.hoverCard.exProfileD' | translate">
          <sg-row>
            <hrm-hover-card [content]="profile">
              <a class="hv-name">{{ 'docs.hoverCard.name1' | translate }}</a>
            </hrm-hover-card>
            <hrm-hover-card [content]="profile2" placement="bottom">
              <a class="hv-name">{{ 'docs.hoverCard.name2' | translate }}</a>
            </hrm-hover-card>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>

    <ng-template #profile>
      <div class="hv-card">
        <div class="hv-top">
          <hrm-avatar [colorful]="true" colorSeed="Nguy\u1EC5n V\u0103n An" text="NA" [size]="44" />
          <div>
            <div class="hv-t1">{{ 'docs.hoverCard.name1' | translate }}</div>
            <div class="hv-t2">{{ 'docs.hoverCard.role1' | translate }}</div>
          </div>
        </div>
        <div class="hv-meta">{{ 'docs.hoverCard.meta1' | translate }}</div>
        <hrm-button size="sm" variant="primary">{{ 'docs.hoverCard.viewProfile' | translate }}</hrm-button>
      </div>
    </ng-template>
    <ng-template #profile2>
      <div class="hv-card">
        <div class="hv-top">
          <hrm-avatar [colorful]="true" colorSeed="Tr\u1EA7n Thu H\xE0" text="TH" [size]="44" />
          <div>
            <div class="hv-t1">{{ 'docs.hoverCard.name2' | translate }}</div>
            <div class="hv-t2">{{ 'docs.hoverCard.role2' | translate }}</div>
          </div>
        </div>
        <div class="hv-meta">{{ 'docs.hoverCard.meta2' | translate }}</div>
        <hrm-button size="sm">{{ 'docs.hoverCard.viewProfile' | translate }}</hrm-button>
      </div>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;c574e92d98db99d6d3538a7bc228282fbead3626066f7f76656ee3c343833818;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/hover-card.ts */\n.hv-line {\n  font-size: var(--fs-14);\n  color: var(--text-body);\n}\n.hv-name {\n  color: var(--primary-base);\n  cursor: pointer;\n  font-weight: 500;\n}\n.hv-name:hover {\n  text-decoration: underline;\n}\n.hv-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 240px;\n}\n.hv-top {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hv-t1 {\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.hv-t2 {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n.hv-meta {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hover-card.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocHoverCard, { className: "SgDocHoverCard", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/hover-card.ts", lineNumber: 92 });
})();
export {
  SgDocHoverCard
};
//# sourceMappingURL=chunk-WLTSZ67N.js.map
