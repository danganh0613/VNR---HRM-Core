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
  Star,
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/general/icon-button.ts
var SgDocIconButton = class _SgDocIconButton {
  constructor() {
    this.pencil = Pencil;
    this.copy = Copy;
    this.download = Download;
    this.share = Share;
    this.trash = Trash;
    this.star = Star;
    this.busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : (
      /* istanbul ignore next */
      []
    ));
    this.when = [
      "docs.iconButton.when1",
      "docs.iconButton.when2",
      "docs.iconButton.when3"
    ];
    this.timer = null;
  }
  run() {
    if (this.busy())
      return;
    this.busy.set(true);
    this.timer = setTimeout(() => this.busy.set(false), 1500);
  }
  static {
    this.\u0275fac = function SgDocIconButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocIconButton)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocIconButton, selectors: [["sg-doc-icon-button"]], decls: 96, vars: 168, consts: [["category", "Action", 3, "title", "desc"], ["sgOverview", ""], [3, "iconOnly", "ariaLabel"], [3, "icon", "size"], [2, "display", "inline-block", "width", "8px"], ["variant", "primary", 3, "iconOnly", "ariaLabel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], ["variant", "text", 3, "iconOnly", "ariaLabel"], ["variant", "text", 3, "iconOnly", "danger", "ariaLabel"], ["variant", "primary", 3, "click", "iconOnly", "loading", "ariaLabel"], [2, "font-size", "var(--fs-13)", "color", "var(--text-sub)", "align-self", "center"], [3, "iconOnly", "hrmTooltip", "ariaLabel"], [3, "label"], ["shape", "round", 3, "iconOnly", "ariaLabel"], ["shape", "circle", 3, "iconOnly", "ariaLabel"], ["label", "sm \xB7 md \xB7 lg"], ["size", "sm", "shape", "circle", 3, "iconOnly", "ariaLabel"], ["size", "md", "shape", "circle", 3, "iconOnly", "ariaLabel"], ["size", "lg", "shape", "circle", 3, "iconOnly", "ariaLabel"]], template: function SgDocIconButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275element(6, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "span", 4);
        \u0275\u0275elementStart(8, "hrm-button", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275element(10, "tabler-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "sg-use", 7);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "sg-do");
        \u0275\u0275element(18, "span", 9);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275element(21, "span", 9);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-dont");
        \u0275\u0275element(24, "span", 9);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 10)(27, "sg-example", 11);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementStart(30, "sg-row")(31, "hrm-button", 12);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275element(33, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "hrm-button", 12);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275element(36, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "hrm-button", 12);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275element(39, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "hrm-button", 12);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275element(42, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "hrm-button", 13);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "tabler-icon", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "sg-example", 11);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row")(50, "hrm-button", 14);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275listener("click", function SgDocIconButton_Template_hrm_button_click_50_listener() {
          return ctx.run();
        });
        \u0275\u0275element(52, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 15);
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "sg-example", 11);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementStart(59, "sg-row")(60, "hrm-button", 16);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275element(63, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "hrm-button", 16);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275element(67, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "hrm-button", 16);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275element(71, "tabler-icon", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "sg-example", 11);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementStart(75, "sg-row", 17);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementStart(77, "hrm-button", 2);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275element(79, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "hrm-button", 18);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275element(82, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "hrm-button", 19);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275element(85, "tabler-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "sg-row", 20)(87, "hrm-button", 21);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275element(89, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "hrm-button", 22);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275element(92, "tabler-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "hrm-button", 23);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275element(95, "tabler-icon", 3);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 92, "docs.iconButton.title"))("desc", \u0275\u0275pipeBind1(2, 94, "docs.iconButton.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(5, 96, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(9, 98, "docs.iconButton.ariaDownload"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(13, 100, "docs.iconButton.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(14, 102, "docs.iconButton.behavior"))("avoid", \u0275\u0275pipeBind1(15, 104, "docs.iconButton.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(19, 106, "docs.iconButton.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(22, 108, "docs.iconButton.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(25, 110, "docs.iconButton.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(28, 112, "docs.iconButton.exBarT"))("desc", \u0275\u0275pipeBind1(29, 114, "docs.iconButton.exBarD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(32, 116, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(35, 118, "docs.iconButton.ariaCopy"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.copy)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(38, 120, "docs.iconButton.ariaDownload"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(41, 122, "docs.iconButton.ariaShare"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.share)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("danger", true)("ariaLabel", \u0275\u0275pipeBind1(44, 124, "docs.iconButton.ariaDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.trash)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 126, "docs.iconButton.exLoadingT"))("desc", \u0275\u0275pipeBind1(48, 128, "docs.iconButton.exLoadingD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("loading", ctx.busy())("ariaLabel", \u0275\u0275pipeBind1(51, 130, "docs.iconButton.ariaDownload"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 132, ctx.busy() ? "docs.iconButton.loadingText" : "docs.iconButton.clickToLoad"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(57, 134, "docs.iconButton.exTooltipT"))("desc", \u0275\u0275pipeBind1(58, 136, "docs.iconButton.exTooltipD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("hrmTooltip", \u0275\u0275pipeBind1(61, 138, "docs.iconButton.tipEdit"))("ariaLabel", \u0275\u0275pipeBind1(62, 140, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("hrmTooltip", \u0275\u0275pipeBind1(65, 142, "docs.iconButton.tipShare"))("ariaLabel", \u0275\u0275pipeBind1(66, 144, "docs.iconButton.ariaShare"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.share)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("hrmTooltip", \u0275\u0275pipeBind1(69, 146, "docs.iconButton.tipFav"))("ariaLabel", \u0275\u0275pipeBind1(70, 148, "docs.iconButton.ariaFav"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.star)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(73, 150, "docs.iconButton.exShapeT"))("desc", \u0275\u0275pipeBind1(74, 152, "docs.iconButton.exShapeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(76, 154, "docs.iconButton.rowShape"));
        \u0275\u0275advance(2);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(78, 156, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(81, 158, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(84, 160, "docs.iconButton.ariaEdit"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.pencil)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(88, 162, "docs.iconButton.ariaLoad"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(91, 164, "docs.iconButton.ariaLoad"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(94, 166, "docs.iconButton.ariaLoad"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.download)("size", 20);
      }
    }, dependencies: [TablerIconComponent, TranslateModule, HrmButton, HrmTooltip, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocIconButton, [{
    type: Component,
    args: [{
      selector: "sg-doc-icon-button",
      imports: [TablerIconComponent, TranslateModule, HrmButton, HrmTooltip, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Action" [title]="'docs.iconButton.title' | translate" [desc]="'docs.iconButton.desc' | translate">

      <div sgOverview>
        <hrm-button [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
        <span style="display:inline-block;width:8px"></span>
        <hrm-button variant="primary" [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaDownload' | translate"><tabler-icon [icon]="download" [size]="18" /></hrm-button>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.iconButton.purpose' | translate" [when]="when"
          [behavior]="'docs.iconButton.behavior' | translate"
          [avoid]="'docs.iconButton.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.iconButton.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.iconButton.do2' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.iconButton.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.iconButton.exBarT' | translate"
          [desc]="'docs.iconButton.exBarD' | translate">
          <sg-row>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaCopy' | translate"><tabler-icon [icon]="copy" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaDownload' | translate"><tabler-icon [icon]="download" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaShare' | translate"><tabler-icon [icon]="share" [size]="18" /></hrm-button>
            <hrm-button variant="text" [iconOnly]="true" [danger]="true" [ariaLabel]="'docs.iconButton.ariaDelete' | translate"><tabler-icon [icon]="trash" [size]="18" /></hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.iconButton.exLoadingT' | translate"
          [desc]="'docs.iconButton.exLoadingD' | translate">
          <sg-row>
            <hrm-button variant="primary" [iconOnly]="true" [loading]="busy()" (click)="run()" [ariaLabel]="'docs.iconButton.ariaDownload' | translate"><tabler-icon [icon]="download" [size]="18" /></hrm-button>
            <span style="font-size: var(--fs-13);color:var(--text-sub);align-self:center">{{ (busy() ? 'docs.iconButton.loadingText' : 'docs.iconButton.clickToLoad') | translate }}</span>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.iconButton.exTooltipT' | translate"
          [desc]="'docs.iconButton.exTooltipD' | translate">
          <sg-row>
            <hrm-button [iconOnly]="true" [hrmTooltip]="'docs.iconButton.tipEdit' | translate" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
            <hrm-button [iconOnly]="true" [hrmTooltip]="'docs.iconButton.tipShare' | translate" [ariaLabel]="'docs.iconButton.ariaShare' | translate"><tabler-icon [icon]="share" [size]="18" /></hrm-button>
            <hrm-button [iconOnly]="true" [hrmTooltip]="'docs.iconButton.tipFav' | translate" [ariaLabel]="'docs.iconButton.ariaFav' | translate"><tabler-icon [icon]="star" [size]="18" /></hrm-button>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.iconButton.exShapeT' | translate"
          [desc]="'docs.iconButton.exShapeD' | translate">
          <sg-row [label]="'docs.iconButton.rowShape' | translate">
            <hrm-button [iconOnly]="true" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
            <hrm-button [iconOnly]="true" shape="round" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
            <hrm-button [iconOnly]="true" shape="circle" [ariaLabel]="'docs.iconButton.ariaEdit' | translate"><tabler-icon [icon]="pencil" [size]="18" /></hrm-button>
          </sg-row>
          <sg-row label="sm \xB7 md \xB7 lg">
            <hrm-button size="sm" [iconOnly]="true" shape="circle" [ariaLabel]="'docs.iconButton.ariaLoad' | translate"><tabler-icon [icon]="download" [size]="16" /></hrm-button>
            <hrm-button size="md" [iconOnly]="true" shape="circle" [ariaLabel]="'docs.iconButton.ariaLoad' | translate"><tabler-icon [icon]="download" [size]="18" /></hrm-button>
            <hrm-button size="lg" [iconOnly]="true" shape="circle" [ariaLabel]="'docs.iconButton.ariaLoad' | translate"><tabler-icon [icon]="download" [size]="20" /></hrm-button>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocIconButton, { className: "SgDocIconButton", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/general/icon-button.ts", lineNumber: 80 });
})();
export {
  SgDocIconButton
};
//# sourceMappingURL=chunk-6XQFBECI.js.map
