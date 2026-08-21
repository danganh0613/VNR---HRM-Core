import {
  NzDrawerComponent,
  NzDrawerContentDirective,
  NzDrawerModule
} from "./chunk-UZ3ETBYP.js";
import "./chunk-7NOIAAII.js";
import "./chunk-WZF5QFUD.js";
import "./chunk-EV2WHLOQ.js";
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
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  Output,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/overlays/hrm-drawer.ts
var _c0 = ["*"];
function HrmDrawer_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275projection(1);
    \u0275\u0275elementContainerEnd();
  }
}
var HrmDrawer = class _HrmDrawer {
  constructor() {
    this.open = model(false, ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    ));
    this.title = input("", ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    ));
    this.width = input(378, ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placement = input("right", ...ngDevMode ? [{ debugName: "placement" }] : (
      /* istanbul ignore next */
      []
    ));
    this.closable = input(true, ...ngDevMode ? [{ debugName: "closable" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmDrawer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmDrawer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDrawer, selectors: [["hrm-drawer"]], hostAttrs: [1, "hrm-drawer"], inputs: { open: [1, "open"], title: [1, "title"], width: [1, "width"], placement: [1, "placement"], closable: [1, "closable"] }, outputs: { open: "openChange" }, ngContentSelectors: _c0, decls: 2, vars: 5, consts: [[3, "nzOnClose", "nzVisible", "nzTitle", "nzWidth", "nzPlacement", "nzClosable"], [4, "nzDrawerContent"]], template: function HrmDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-drawer", 0);
        \u0275\u0275listener("nzOnClose", function HrmDrawer_Template_nz_drawer_nzOnClose_0_listener() {
          return ctx.open.set(false);
        });
        \u0275\u0275template(1, HrmDrawer_ng_container_1_Template, 2, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzVisible", ctx.open())("nzTitle", ctx.title())("nzWidth", ctx.width())("nzPlacement", ctx.placement())("nzClosable", ctx.closable());
      }
    }, dependencies: [NzDrawerModule, NzDrawerComponent, NzDrawerContentDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDrawer, [{
    type: Component,
    args: [{
      selector: "hrm-drawer",
      imports: [NzDrawerModule],
      template: `
    <nz-drawer
      [nzVisible]="open()"
      [nzTitle]="title()"
      [nzWidth]="width()"
      [nzPlacement]="placement()"
      [nzClosable]="closable()"
      (nzOnClose)="open.set(false)">
      <ng-container *nzDrawerContent><ng-content /></ng-container>
    </nz-drawer>
  `,
      host: { class: "hrm-drawer" }
    }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], placement: [{ type: Input, args: [{ isSignal: true, alias: "placement", required: false }] }], closable: [{ type: Input, args: [{ isSignal: true, alias: "closable", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDrawer, { className: "HrmDrawer", filePath: "libs/hrm-ui/src/lib/overlays/hrm-drawer.ts", lineNumber: 22 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/drawer.ts
var SgDocDrawer = class _SgDocDrawer {
  constructor() {
    this.quick = false;
    this.profile = false;
    this.form = false;
    this.pLeft = false;
    this.pRight = false;
    this.pTop = false;
    this.pBottom = false;
    this.sNarrow = false;
    this.sMedium = false;
    this.sWide = false;
    this.when = [
      "docs.drawer.when1",
      "docs.drawer.when2",
      "docs.drawer.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDrawer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDrawer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDrawer, selectors: [["sg-doc-drawer"]], decls: 150, vars: 193, consts: [["category", "Overlay", 3, "title", "desc"], ["sgOverview", ""], ["variant", "primary", 3, "click"], [3, "openChange", "open", "title"], [3, "innerHTML"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["variant", "default", 3, "click"], ["placement", "right", 3, "openChange", "open", "title", "width"], [2, "color", "var(--text-sub)"], [2, "display", "flex", "gap", "8px", "margin-top", "16px"], [3, "label"], ["placement", "left", 3, "openChange", "open", "title"], ["placement", "right", 3, "openChange", "open", "title"], ["placement", "top", 3, "openChange", "open", "title"], ["placement", "bottom", 3, "openChange", "open", "title"], [3, "openChange", "open", "title", "width"]], template: function SgDocDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_4_listener() {
          return ctx.quick = true;
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "hrm-drawer", 3);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.quick, $event) || (ctx.quick = $event);
          return $event;
        });
        \u0275\u0275element(9, "p", 4);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementStart(11, "p");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 5);
        \u0275\u0275element(21, "sg-use", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 7)(26, "sg-do");
        \u0275\u0275element(27, "span", 4);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-do");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "sg-do");
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "sg-dont");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 8)(39, "sg-example", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row")(43, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_43_listener() {
          return ctx.profile = true;
        });
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "hrm-drawer", 11);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.profile, $event) || (ctx.profile = $event);
          return $event;
        });
        \u0275\u0275element(48, "p", 4);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "p");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "sg-example", 9);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementStart(65, "sg-row")(66, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_66_listener() {
          return ctx.form = true;
        });
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "hrm-drawer", 11);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_69_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.form, $event) || (ctx.form = $event);
          return $event;
        });
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p", 12);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 13)(78, "hrm-button", 2);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_78_listener() {
          return ctx.form = false;
        });
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_81_listener() {
          return ctx.form = false;
        });
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(84, "sg-example", 9);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementStart(87, "sg-row", 14);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementStart(89, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_89_listener() {
          return ctx.pLeft = true;
        });
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_92_listener() {
          return ctx.pRight = true;
        });
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_95_listener() {
          return ctx.pTop = true;
        });
        \u0275\u0275text(96);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_98_listener() {
          return ctx.pBottom = true;
        });
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "hrm-drawer", 15);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_101_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pLeft, $event) || (ctx.pLeft = $event);
          return $event;
        });
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104);
        \u0275\u0275pipe(105, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "hrm-drawer", 16);
        \u0275\u0275pipe(107, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_106_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pRight, $event) || (ctx.pRight = $event);
          return $event;
        });
        \u0275\u0275elementStart(108, "p");
        \u0275\u0275text(109);
        \u0275\u0275pipe(110, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "hrm-drawer", 17);
        \u0275\u0275pipe(112, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_111_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pTop, $event) || (ctx.pTop = $event);
          return $event;
        });
        \u0275\u0275elementStart(113, "p");
        \u0275\u0275text(114);
        \u0275\u0275pipe(115, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "hrm-drawer", 18);
        \u0275\u0275pipe(117, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_116_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.pBottom, $event) || (ctx.pBottom = $event);
          return $event;
        });
        \u0275\u0275elementStart(118, "p");
        \u0275\u0275text(119);
        \u0275\u0275pipe(120, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(121, "sg-example", 9);
        \u0275\u0275pipe(122, "translate");
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275elementStart(124, "sg-row", 14);
        \u0275\u0275pipe(125, "translate");
        \u0275\u0275elementStart(126, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_126_listener() {
          return ctx.sNarrow = true;
        });
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_129_listener() {
          return ctx.sMedium = true;
        });
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "hrm-button", 10);
        \u0275\u0275listener("click", function SgDocDrawer_Template_hrm_button_click_132_listener() {
          return ctx.sWide = true;
        });
        \u0275\u0275text(133);
        \u0275\u0275pipe(134, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "hrm-drawer", 19);
        \u0275\u0275pipe(136, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_135_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sNarrow, $event) || (ctx.sNarrow = $event);
          return $event;
        });
        \u0275\u0275elementStart(137, "p");
        \u0275\u0275text(138);
        \u0275\u0275pipe(139, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "hrm-drawer", 19);
        \u0275\u0275pipe(141, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_140_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sMedium, $event) || (ctx.sMedium = $event);
          return $event;
        });
        \u0275\u0275elementStart(142, "p");
        \u0275\u0275text(143);
        \u0275\u0275pipe(144, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "hrm-drawer", 19);
        \u0275\u0275pipe(146, "translate");
        \u0275\u0275twoWayListener("openChange", function SgDocDrawer_Template_hrm_drawer_openChange_145_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sWide, $event) || (ctx.sWide = $event);
          return $event;
        });
        \u0275\u0275elementStart(147, "p");
        \u0275\u0275text(148);
        \u0275\u0275pipe(149, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 75, "docs.drawer.title"))("desc", \u0275\u0275pipeBind1(2, 77, "docs.drawer.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 79, "docs.drawer.ovLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.quick);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 81, "docs.drawer.ovTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(10, 83, "docs.drawer.ovName"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 85, "docs.drawer.ovDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 87, "docs.drawer.ovRole"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 89, "docs.drawer.ovJoin"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(22, 91, "docs.drawer.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(23, 93, "docs.drawer.behavior"))("avoid", \u0275\u0275pipeBind1(24, 95, "docs.drawer.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(28, 97, "docs.drawer.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 99, "docs.drawer.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 101, "docs.drawer.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 103, "docs.drawer.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 105, "docs.drawer.exProfileT"))("desc", \u0275\u0275pipeBind1(41, 107, "docs.drawer.exProfileD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 109, "docs.drawer.exProfileLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.profile);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 111, "docs.drawer.ovTitle"))("width", 378);
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(49, 113, "docs.drawer.ovName"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 115, "docs.drawer.ovDept"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 117, "docs.drawer.ovRole"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 119, "docs.drawer.profileEmail"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 121, "docs.drawer.ovJoin"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(63, 123, "docs.drawer.exFormT"))("desc", \u0275\u0275pipeBind1(64, 125, "docs.drawer.exFormD"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 127, "docs.drawer.exFormLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.form);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(70, 129, "docs.drawer.formTitle"))("width", 520);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 131, "docs.drawer.formBody"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 133, "docs.drawer.formHint"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 135, "docs.drawer.save"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 137, "docs.drawer.cancel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(85, 139, "docs.drawer.exPlaceT"))("desc", \u0275\u0275pipeBind1(86, 141, "docs.drawer.exPlaceD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(88, 143, "docs.drawer.rowPlace"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 145, "docs.drawer.left"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 147, "docs.drawer.right"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 149, "docs.drawer.top"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 151, "docs.drawer.bottom"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.pLeft);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(102, 153, "docs.drawer.titleLeft"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 155, "docs.drawer.bodyLeft"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.pRight);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(107, 157, "docs.drawer.titleRight"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 159, "docs.drawer.bodyRight"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.pTop);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(112, 161, "docs.drawer.titleTop"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 163, "docs.drawer.bodyTop"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.pBottom);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(117, 165, "docs.drawer.titleBottom"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 167, "docs.drawer.bodyBottom"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(122, 169, "docs.drawer.exSizeT"))("desc", \u0275\u0275pipeBind1(123, 171, "docs.drawer.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(125, 173, "docs.drawer.rowSize"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 175, "docs.drawer.narrow"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 177, "docs.drawer.medium"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 179, "docs.drawer.wide"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.sNarrow);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(136, 181, "docs.drawer.titleNarrow"))("width", 300);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 183, "docs.drawer.bodyNarrow"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.sMedium);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(141, 185, "docs.drawer.titleMedium"))("width", 420);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 187, "docs.drawer.bodyMedium"));
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("open", ctx.sWide);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(146, 189, "docs.drawer.titleWide"))("width", 640);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(149, 191, "docs.drawer.bodyWide"));
      }
    }, dependencies: [TranslateModule, HrmButton, HrmDrawer, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDrawer, [{
    type: Component,
    args: [{
      selector: "sg-doc-drawer",
      imports: [TranslateModule, HrmButton, HrmDrawer, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Overlay" [title]="'docs.drawer.title' | translate" [desc]="'docs.drawer.desc' | translate">

      <div sgOverview>
        <hrm-button variant="primary" (click)="quick = true">{{ 'docs.drawer.ovLabel' | translate }}</hrm-button>
        <hrm-drawer [(open)]="quick" [title]="'docs.drawer.ovTitle' | translate">
          <p [innerHTML]="'docs.drawer.ovName' | translate"></p>
          <p>{{ 'docs.drawer.ovDept' | translate }}</p>
          <p>{{ 'docs.drawer.ovRole' | translate }}</p>
          <p>{{ 'docs.drawer.ovJoin' | translate }}</p>
        </hrm-drawer>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.drawer.purpose' | translate"
          [when]="when"
          [behavior]="'docs.drawer.behavior' | translate"
          [avoid]="'docs.drawer.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.drawer.do1' | translate"></span></sg-do>
        <sg-do>{{ 'docs.drawer.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.drawer.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.drawer.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.drawer.exProfileT' | translate"
          [desc]="'docs.drawer.exProfileD' | translate">
          <sg-row>
            <hrm-button variant="default" (click)="profile = true">{{ 'docs.drawer.exProfileLabel' | translate }}</hrm-button>
            <hrm-drawer [(open)]="profile" [title]="'docs.drawer.ovTitle' | translate" placement="right" [width]="378">
              <p [innerHTML]="'docs.drawer.ovName' | translate"></p>
              <p>{{ 'docs.drawer.ovDept' | translate }}</p>
              <p>{{ 'docs.drawer.ovRole' | translate }}</p>
              <p>{{ 'docs.drawer.profileEmail' | translate }}</p>
              <p>{{ 'docs.drawer.ovJoin' | translate }}</p>
            </hrm-drawer>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.drawer.exFormT' | translate"
          [desc]="'docs.drawer.exFormD' | translate">
          <sg-row>
            <hrm-button variant="primary" (click)="form = true">{{ 'docs.drawer.exFormLabel' | translate }}</hrm-button>
            <hrm-drawer [(open)]="form" [title]="'docs.drawer.formTitle' | translate" placement="right" [width]="520">
              <p>{{ 'docs.drawer.formBody' | translate }}</p>
              <p style="color:var(--text-sub)">{{ 'docs.drawer.formHint' | translate }}</p>
              <div style="display:flex;gap:8px;margin-top:16px">
                <hrm-button variant="primary" (click)="form = false">{{ 'docs.drawer.save' | translate }}</hrm-button>
                <hrm-button variant="default" (click)="form = false">{{ 'docs.drawer.cancel' | translate }}</hrm-button>
              </div>
            </hrm-drawer>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.drawer.exPlaceT' | translate"
          [desc]="'docs.drawer.exPlaceD' | translate">
          <sg-row [label]="'docs.drawer.rowPlace' | translate">
            <hrm-button variant="default" (click)="pLeft = true">{{ 'docs.drawer.left' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="pRight = true">{{ 'docs.drawer.right' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="pTop = true">{{ 'docs.drawer.top' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="pBottom = true">{{ 'docs.drawer.bottom' | translate }}</hrm-button>
            <hrm-drawer [(open)]="pLeft" [title]="'docs.drawer.titleLeft' | translate" placement="left"><p>{{ 'docs.drawer.bodyLeft' | translate }}</p></hrm-drawer>
            <hrm-drawer [(open)]="pRight" [title]="'docs.drawer.titleRight' | translate" placement="right"><p>{{ 'docs.drawer.bodyRight' | translate }}</p></hrm-drawer>
            <hrm-drawer [(open)]="pTop" [title]="'docs.drawer.titleTop' | translate" placement="top"><p>{{ 'docs.drawer.bodyTop' | translate }}</p></hrm-drawer>
            <hrm-drawer [(open)]="pBottom" [title]="'docs.drawer.titleBottom' | translate" placement="bottom"><p>{{ 'docs.drawer.bodyBottom' | translate }}</p></hrm-drawer>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.drawer.exSizeT' | translate"
          [desc]="'docs.drawer.exSizeD' | translate">
          <sg-row [label]="'docs.drawer.rowSize' | translate">
            <hrm-button variant="default" (click)="sNarrow = true">{{ 'docs.drawer.narrow' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="sMedium = true">{{ 'docs.drawer.medium' | translate }}</hrm-button>
            <hrm-button variant="default" (click)="sWide = true">{{ 'docs.drawer.wide' | translate }}</hrm-button>
            <hrm-drawer [(open)]="sNarrow" [title]="'docs.drawer.titleNarrow' | translate" [width]="300"><p>{{ 'docs.drawer.bodyNarrow' | translate }}</p></hrm-drawer>
            <hrm-drawer [(open)]="sMedium" [title]="'docs.drawer.titleMedium' | translate" [width]="420"><p>{{ 'docs.drawer.bodyMedium' | translate }}</p></hrm-drawer>
            <hrm-drawer [(open)]="sWide" [title]="'docs.drawer.titleWide' | translate" [width]="640"><p>{{ 'docs.drawer.bodyWide' | translate }}</p></hrm-drawer>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDrawer, { className: "SgDocDrawer", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/overlays/drawer.ts", lineNumber: 101 });
})();
export {
  SgDocDrawer
};
//# sourceMappingURL=chunk-2BENB37B.js.map
