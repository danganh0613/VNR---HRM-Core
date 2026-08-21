import {
  HrmTooltip
} from "./chunk-ORJB2TMU.js";
import "./chunk-GKLVT5NB.js";
import "./chunk-UDAG7UB6.js";
import "./chunk-F6AHQ5QX.js";
import "./chunk-ODJV4T5O.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
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
  Copy,
  Download,
  Pencil,
  Share,
  TablerIconComponent,
  Trash
} from "./chunk-LRW4ARR4.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/tooltip.ts
var SgDocTooltip = class _SgDocTooltip {
  constructor() {
    this.pencil = Pencil;
    this.copy = Copy;
    this.trash = Trash;
    this.download = Download;
    this.share = Share;
    this.when = [
      "docs.tooltip.when1",
      "docs.tooltip.when2",
      "docs.tooltip.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocTooltip)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocTooltip, selectors: [["sg-doc-tooltip"]], decls: 82, vars: 133, consts: [["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "default", "hrmTooltipPlacement", "top", 3, "hrmTooltip"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["variant", "text", "hrmTooltipPlacement", "top", 3, "iconOnly", "ariaLabel", "hrmTooltip"], [3, "icon", "size"], [2, "font-size", "var(--fs-14)", "color", "var(--text-body)"], ["hrmTooltipPlacement", "top", 2, "border-bottom", "1px dotted var(--text-sub)", "cursor", "help", 3, "hrmTooltip"], [3, "label"], ["variant", "default", "hrmTooltipPlacement", "bottom", 3, "hrmTooltip"], ["variant", "default", "hrmTooltipPlacement", "left", 3, "hrmTooltip"], ["variant", "default", "hrmTooltipPlacement", "right", 3, "hrmTooltip"]], template: function SgDocTooltip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275element(9, "sg-use", 4);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5)(14, "sg-do");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-dont");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "sg-example", 7);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementStart(27, "sg-row")(28, "hrm-button", 8);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275element(31, "tabler-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "hrm-button", 8);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275element(35, "tabler-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "hrm-button", 8);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275element(39, "tabler-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "hrm-button", 8);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275element(43, "tabler-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "hrm-button", 8);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275element(47, "tabler-icon", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "sg-example", 7);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "sg-row")(52, "span", 10);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "span", 11);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "sg-example", 7);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row", 12);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementStart(66, "hrm-button", 2);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "hrm-button", 13);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "hrm-button", 14);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "hrm-button", 15);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 55, "docs.tooltip.title"))("desc", \u0275\u0275pipeBind1(2, 57, "docs.tooltip.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(5, 59, "docs.tooltip.ovTip"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 61, "docs.tooltip.ovLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(10, 63, "docs.tooltip.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(11, 65, "docs.tooltip.behavior"))("avoid", \u0275\u0275pipeBind1(12, 67, "docs.tooltip.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 69, "docs.tooltip.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 71, "docs.tooltip.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 73, "docs.tooltip.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(25, 75, "docs.tooltip.exBarT"))("desc", \u0275\u0275pipeBind1(26, 77, "docs.tooltip.exBarD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(29, 79, "docs.tooltip.tipEdit"))("hrmTooltip", \u0275\u0275pipeBind1(30, 81, "docs.tooltip.tipEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(33, 83, "docs.tooltip.tipCopy"))("hrmTooltip", \u0275\u0275pipeBind1(34, 85, "docs.tooltip.tipCopy"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.copy)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(37, 87, "docs.tooltip.tipDownload"))("hrmTooltip", \u0275\u0275pipeBind1(38, 89, "docs.tooltip.tipDownload"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.download)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(41, 91, "docs.tooltip.tipShare"))("hrmTooltip", \u0275\u0275pipeBind1(42, 93, "docs.tooltip.tipShare"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.share)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(45, 95, "docs.tooltip.tipDelete"))("hrmTooltip", \u0275\u0275pipeBind1(46, 97, "docs.tooltip.tipDelete"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.trash)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(49, 99, "docs.tooltip.exInlineT"))("desc", \u0275\u0275pipeBind1(50, 101, "docs.tooltip.exInlineD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 103, "docs.tooltip.inlinePre"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(56, 105, "docs.tooltip.inlineTip"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 107, "docs.tooltip.inlineTerm"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 109, "docs.tooltip.inlinePost"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 111, "docs.tooltip.exPlaceT"))("desc", \u0275\u0275pipeBind1(63, 113, "docs.tooltip.exPlaceD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(65, 115, "docs.tooltip.rowPlace"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(67, 117, "docs.tooltip.tipTop"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 119, "docs.tooltip.top"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(71, 121, "docs.tooltip.tipBottom"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 123, "docs.tooltip.bottom"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(75, 125, "docs.tooltip.tipLeft"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 127, "docs.tooltip.left"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmTooltip", \u0275\u0275pipeBind1(79, 129, "docs.tooltip.tipRight"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 131, "docs.tooltip.right"));
      }
    }, dependencies: [TablerIconComponent, TranslateModule, HrmButton, HrmTooltip, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocTooltip, [{
    type: Component,
    args: [{
      selector: "sg-doc-tooltip",
      imports: [TablerIconComponent, TranslateModule, HrmButton, HrmTooltip, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.tooltip.title' | translate" [desc]="'docs.tooltip.desc' | translate">

      <div sgOverview>
        <hrm-button variant="default" [hrmTooltip]="'docs.tooltip.ovTip' | translate" hrmTooltipPlacement="top">{{ 'docs.tooltip.ovLabel' | translate }}</hrm-button>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.tooltip.purpose' | translate"
          [when]="when"
          [behavior]="'docs.tooltip.behavior' | translate"
          [avoid]="'docs.tooltip.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.tooltip.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.tooltip.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.tooltip.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.tooltip.exBarT' | translate"
          [desc]="'docs.tooltip.exBarD' | translate">
          <sg-row>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.tooltip.tipEdit' | translate" [hrmTooltip]="'docs.tooltip.tipEdit' | translate" hrmTooltipPlacement="top"><tabler-icon [icon]="$any(pencil)" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.tooltip.tipCopy' | translate" [hrmTooltip]="'docs.tooltip.tipCopy' | translate" hrmTooltipPlacement="top"><tabler-icon [icon]="$any(copy)" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.tooltip.tipDownload' | translate" [hrmTooltip]="'docs.tooltip.tipDownload' | translate" hrmTooltipPlacement="top"><tabler-icon [icon]="$any(download)" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.tooltip.tipShare' | translate" [hrmTooltip]="'docs.tooltip.tipShare' | translate" hrmTooltipPlacement="top"><tabler-icon [icon]="$any(share)" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.tooltip.tipDelete' | translate" [hrmTooltip]="'docs.tooltip.tipDelete' | translate" hrmTooltipPlacement="top"><tabler-icon [icon]="$any(trash)" [size]="18" /></hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tooltip.exInlineT' | translate"
          [desc]="'docs.tooltip.exInlineD' | translate">
          <sg-row>
            <span style="font-size: var(--fs-14);color:var(--text-body)">
              {{ 'docs.tooltip.inlinePre' | translate }}
              <span [hrmTooltip]="'docs.tooltip.inlineTip' | translate" hrmTooltipPlacement="top" style="border-bottom:1px dotted var(--text-sub);cursor:help">{{ 'docs.tooltip.inlineTerm' | translate }}</span>
              {{ 'docs.tooltip.inlinePost' | translate }}
            </span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.tooltip.exPlaceT' | translate"
          [desc]="'docs.tooltip.exPlaceD' | translate">
          <sg-row [label]="'docs.tooltip.rowPlace' | translate">
            <hrm-button variant="default" [hrmTooltip]="'docs.tooltip.tipTop' | translate" hrmTooltipPlacement="top">{{ 'docs.tooltip.top' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmTooltip]="'docs.tooltip.tipBottom' | translate" hrmTooltipPlacement="bottom">{{ 'docs.tooltip.bottom' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmTooltip]="'docs.tooltip.tipLeft' | translate" hrmTooltipPlacement="left">{{ 'docs.tooltip.left' | translate }}</hrm-button>
            <hrm-button variant="default" [hrmTooltip]="'docs.tooltip.tipRight' | translate" hrmTooltipPlacement="right">{{ 'docs.tooltip.right' | translate }}</hrm-button>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocTooltip, { className: "SgDocTooltip", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/tooltip.ts", lineNumber: 72 });
})();
export {
  SgDocTooltip
};
//# sourceMappingURL=chunk-5LHL5NAJ.js.map
