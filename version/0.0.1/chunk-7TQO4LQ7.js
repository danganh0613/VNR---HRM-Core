import {
  HrmDropdown
} from "./chunk-ORJB2TMU.js";
import "./chunk-GKLVT5NB.js";
import "./chunk-UDAG7UB6.js";
import {
  NzDropDownModule,
  NzDropdownMenuComponent
} from "./chunk-F6AHQ5QX.js";
import {
  NzMenuDirective,
  NzMenuDividerDirective,
  NzMenuGroupComponent,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-ODJV4T5O.js";
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
  ChevronDown,
  Copy,
  DotsVertical,
  Download,
  Edit,
  Eye,
  FileText,
  Printer,
  Settings,
  Share,
  TablerIconComponent,
  Trash,
  Users
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
  ɵɵreference,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/dropdown.ts
var SgDocDropdown = class _SgDocDropdown {
  constructor() {
    this.chevron = ChevronDown;
    this.edit = Edit;
    this.copy = Copy;
    this.trash = Trash;
    this.eye = Eye;
    this.download = Download;
    this.share = Share;
    this.printer = Printer;
    this.fileText = FileText;
    this.users = Users;
    this.settings = Settings;
    this.dots = DotsVertical;
    this.when = [
      "docs.dropdown.when1",
      "docs.dropdown.when2",
      "docs.dropdown.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocDropdown)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocDropdown, selectors: [["sg-doc-dropdown"]], decls: 216, vars: 241, consts: [["menuOverview", "nzDropdownMenu"], ["menuActions", "nzDropdownMenu"], ["menuIcons", "nzDropdownMenu"], ["menuOverflow", "nzDropdownMenu"], ["menuSections", "nzDropdownMenu"], ["menuDisabled", "nzDropdownMenu"], ["menuClick", "nzDropdownMenu"], ["menuHover", "nzDropdownMenu"], ["category", "Navigation", 3, "title", "desc"], ["sgOverview", ""], ["variant", "default", 3, "hrmDropdown"], [3, "icon", "size"], ["nz-menu", ""], ["nz-menu-item", ""], ["nz-menu-divider", ""], ["nz-menu-item", "", "nzDanger", ""], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["variant", "text", 3, "iconOnly", "ariaLabel", "hrmDropdown"], ["nz-menu-group", "", 3, "nzTitle"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-menu-item", "", "nzDanger", "", "nzDisabled", ""], [3, "label"], ["variant", "default", "hrmDropdownTrigger", "click", 3, "hrmDropdown"], ["variant", "default", "hrmDropdownTrigger", "hover", 3, "hrmDropdown"]], template: function SgDocDropdown_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 8);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 9)(4, "hrm-button", 10);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275element(7, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "nz-dropdown-menu", null, 0)(10, "ul", 12)(11, "li", 13);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "li", 13);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "li", 14);
        \u0275\u0275elementStart(18, "li", 15);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 16);
        \u0275\u0275element(22, "sg-use", 17);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 18)(27, "sg-do");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-do");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-do");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "sg-dont");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "sg-dont");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19)(43, "sg-example", 20);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "hrm-button", 10);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275element(50, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "nz-dropdown-menu", null, 1)(53, "ul", 12)(54, "li", 13);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li", 13);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(60, "li", 14);
        \u0275\u0275elementStart(61, "li", 15);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(64, "sg-example", 20);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementStart(67, "sg-row")(68, "hrm-button", 10);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275element(71, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "nz-dropdown-menu", null, 2)(74, "ul", 12)(75, "li", 13);
        \u0275\u0275element(76, "tabler-icon", 11);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li", 13);
        \u0275\u0275element(80, "tabler-icon", 11);
        \u0275\u0275text(81);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "li", 13);
        \u0275\u0275element(84, "tabler-icon", 11);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "li", 14);
        \u0275\u0275elementStart(88, "li", 15);
        \u0275\u0275element(89, "tabler-icon", 11);
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(92, "sg-example", 20);
        \u0275\u0275pipe(93, "translate");
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275elementStart(95, "sg-row")(96, "hrm-button", 21);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275element(98, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "nz-dropdown-menu", null, 3)(101, "ul", 12)(102, "li", 13);
        \u0275\u0275element(103, "tabler-icon", 11);
        \u0275\u0275text(104);
        \u0275\u0275pipe(105, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li", 13);
        \u0275\u0275element(107, "tabler-icon", 11);
        \u0275\u0275text(108);
        \u0275\u0275pipe(109, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li", 15);
        \u0275\u0275element(111, "tabler-icon", 11);
        \u0275\u0275text(112);
        \u0275\u0275pipe(113, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(114, "sg-example", 20);
        \u0275\u0275pipe(115, "translate");
        \u0275\u0275pipe(116, "translate");
        \u0275\u0275elementStart(117, "sg-row")(118, "hrm-button", 10);
        \u0275\u0275text(119);
        \u0275\u0275pipe(120, "translate");
        \u0275\u0275element(121, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "nz-dropdown-menu", null, 4)(124, "ul", 12)(125, "li", 22);
        \u0275\u0275pipe(126, "translate");
        \u0275\u0275elementStart(127, "ul")(128, "li", 13);
        \u0275\u0275element(129, "tabler-icon", 11);
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "li", 13);
        \u0275\u0275element(133, "tabler-icon", 11);
        \u0275\u0275text(134);
        \u0275\u0275pipe(135, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "li", 22);
        \u0275\u0275pipe(137, "translate");
        \u0275\u0275elementStart(138, "ul")(139, "li", 13);
        \u0275\u0275element(140, "tabler-icon", 11);
        \u0275\u0275text(141);
        \u0275\u0275pipe(142, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "li", 13);
        \u0275\u0275element(144, "tabler-icon", 11);
        \u0275\u0275text(145);
        \u0275\u0275pipe(146, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "li", 13);
        \u0275\u0275element(148, "tabler-icon", 11);
        \u0275\u0275text(149);
        \u0275\u0275pipe(150, "translate");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(151, "sg-example", 20);
        \u0275\u0275pipe(152, "translate");
        \u0275\u0275pipe(153, "translate");
        \u0275\u0275elementStart(154, "sg-row")(155, "hrm-button", 10);
        \u0275\u0275text(156);
        \u0275\u0275pipe(157, "translate");
        \u0275\u0275element(158, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "nz-dropdown-menu", null, 5)(161, "ul", 12)(162, "li", 13);
        \u0275\u0275element(163, "tabler-icon", 11);
        \u0275\u0275text(164);
        \u0275\u0275pipe(165, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "li", 13);
        \u0275\u0275element(167, "tabler-icon", 11);
        \u0275\u0275text(168);
        \u0275\u0275pipe(169, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li", 23);
        \u0275\u0275element(171, "tabler-icon", 11);
        \u0275\u0275text(172);
        \u0275\u0275pipe(173, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(174, "li", 14);
        \u0275\u0275elementStart(175, "li", 24);
        \u0275\u0275element(176, "tabler-icon", 11);
        \u0275\u0275text(177);
        \u0275\u0275pipe(178, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(179, "sg-example", 20);
        \u0275\u0275pipe(180, "translate");
        \u0275\u0275pipe(181, "translate");
        \u0275\u0275elementStart(182, "sg-row", 25);
        \u0275\u0275pipe(183, "translate");
        \u0275\u0275elementStart(184, "hrm-button", 26);
        \u0275\u0275text(185);
        \u0275\u0275pipe(186, "translate");
        \u0275\u0275element(187, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "nz-dropdown-menu", null, 6)(190, "ul", 12)(191, "li", 13);
        \u0275\u0275text(192);
        \u0275\u0275pipe(193, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "li", 13);
        \u0275\u0275text(195);
        \u0275\u0275pipe(196, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "li", 15);
        \u0275\u0275text(198);
        \u0275\u0275pipe(199, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(200, "hrm-button", 27);
        \u0275\u0275text(201);
        \u0275\u0275pipe(202, "translate");
        \u0275\u0275element(203, "tabler-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "nz-dropdown-menu", null, 7)(206, "ul", 12)(207, "li", 13);
        \u0275\u0275text(208);
        \u0275\u0275pipe(209, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "li", 13);
        \u0275\u0275text(211);
        \u0275\u0275pipe(212, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "li", 15);
        \u0275\u0275text(214);
        \u0275\u0275pipe(215, "translate");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        const menuOverview_r1 = \u0275\u0275reference(9);
        const menuActions_r2 = \u0275\u0275reference(52);
        const menuIcons_r3 = \u0275\u0275reference(73);
        const menuOverflow_r4 = \u0275\u0275reference(100);
        const menuSections_r5 = \u0275\u0275reference(123);
        const menuDisabled_r6 = \u0275\u0275reference(160);
        const menuClick_r7 = \u0275\u0275reference(189);
        const menuHover_r8 = \u0275\u0275reference(205);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 119, "docs.dropdown.title"))("desc", \u0275\u0275pipeBind1(2, 121, "docs.dropdown.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", menuOverview_r1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 123, "docs.dropdown.trigAction"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 125, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 127, "docs.dropdown.itDuplicate"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 129, "docs.dropdown.itDelete"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(23, 131, "docs.dropdown.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(24, 133, "docs.dropdown.behavior"))("avoid", \u0275\u0275pipeBind1(25, 135, "docs.dropdown.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 137, "docs.dropdown.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 139, "docs.dropdown.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 141, "docs.dropdown.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 143, "docs.dropdown.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 145, "docs.dropdown.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 147, "docs.dropdown.exActionsT"))("desc", \u0275\u0275pipeBind1(45, 149, "docs.dropdown.exActionsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", menuActions_r2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 151, "docs.dropdown.trigAction"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 153, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 155, "docs.dropdown.itDuplicate"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 157, "docs.dropdown.itDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(65, 159, "docs.dropdown.exIconT"))("desc", \u0275\u0275pipeBind1(66, 161, "docs.dropdown.exIconD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", menuIcons_r3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 163, "docs.dropdown.trigOptions"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.edit)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 165, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.copy)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 167, "docs.dropdown.itDuplicate"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.download)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 169, "docs.dropdown.itDownload"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.trash)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 171, "docs.dropdown.itDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(93, 173, "docs.dropdown.exOverflowT"))("desc", \u0275\u0275pipeBind1(94, 175, "docs.dropdown.exOverflowD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("iconOnly", true)("ariaLabel", \u0275\u0275pipeBind1(97, 177, "docs.dropdown.trigMore"))("hrmDropdown", menuOverflow_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.dots)("size", 18);
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.eye)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 179, "docs.dropdown.itView"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.edit)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 181, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.trash)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 183, "docs.dropdown.itDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(115, 185, "docs.dropdown.exSectionsT"))("desc", \u0275\u0275pipeBind1(116, 187, "docs.dropdown.exSectionsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", menuSections_r5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(120, 189, "docs.dropdown.trigAction2"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(4);
        \u0275\u0275property("nzTitle", \u0275\u0275pipeBind1(126, 191, "docs.dropdown.grpCreate"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.fileText)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(131, 193, "docs.dropdown.itContract"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.users)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(135, 195, "docs.dropdown.itEmployee"));
        \u0275\u0275advance(2);
        \u0275\u0275property("nzTitle", \u0275\u0275pipeBind1(137, 197, "docs.dropdown.grpManage"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.share)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(142, 199, "docs.dropdown.itShare"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.printer)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(146, 201, "docs.dropdown.itPrint"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.settings)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(150, 203, "docs.dropdown.itSettings"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(152, 205, "docs.dropdown.exDisabledT"))("desc", \u0275\u0275pipeBind1(153, 207, "docs.dropdown.exDisabledD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("hrmDropdown", menuDisabled_r6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(157, 209, "docs.dropdown.trigAction"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", ctx.eye)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 211, "docs.dropdown.itView"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.edit)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(169, 213, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.settings)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(173, 215, "docs.dropdown.itPermission"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.trash)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(178, 217, "docs.dropdown.itDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(180, 219, "docs.dropdown.exTriggerT"))("desc", \u0275\u0275pipeBind1(181, 221, "docs.dropdown.exTriggerD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(183, 223, "docs.dropdown.exTriggerRow"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmDropdown", menuClick_r7);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(186, 225, "docs.dropdown.trigOpenClick"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(193, 227, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(196, 229, "docs.dropdown.itDuplicate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(199, 231, "docs.dropdown.itDelete"));
        \u0275\u0275advance(2);
        \u0275\u0275property("hrmDropdown", menuHover_r8);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(202, 233, "docs.dropdown.trigOpenHover"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chevron)("size", 16);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(209, 235, "docs.dropdown.itEdit"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(212, 237, "docs.dropdown.itDuplicate"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(215, 239, "docs.dropdown.itDelete"));
      }
    }, dependencies: [TranslateModule, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzDropdownMenuComponent, NzMenuModule, TablerIconComponent, HrmButton, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocDropdown, [{
    type: Component,
    args: [{
      selector: "sg-doc-dropdown",
      imports: [TranslateModule, NzDropDownModule, NzMenuModule, TablerIconComponent, HrmButton, HrmDropdown, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Navigation" [title]="'docs.dropdown.title' | translate" [desc]="'docs.dropdown.desc' | translate">

      <div sgOverview>
        <hrm-button variant="default" [hrmDropdown]="menuOverview">
          {{ 'docs.dropdown.trigAction' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
        </hrm-button>
        <nz-dropdown-menu #menuOverview="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>{{ 'docs.dropdown.itEdit' | translate }}</li>
            <li nz-menu-item>{{ 'docs.dropdown.itDuplicate' | translate }}</li>
            <li nz-menu-divider></li>
            <li nz-menu-item nzDanger>{{ 'docs.dropdown.itDelete' | translate }}</li>
          </ul>
        </nz-dropdown-menu>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.dropdown.purpose' | translate"
          [when]="when"
          [behavior]="'docs.dropdown.behavior' | translate"
          [avoid]="'docs.dropdown.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.dropdown.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.dropdown.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.dropdown.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.dropdown.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.dropdown.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.dropdown.exActionsT' | translate"
          [desc]="'docs.dropdown.exActionsD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmDropdown]="menuActions">
              {{ 'docs.dropdown.trigAction' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuActions="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item>{{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item>{{ 'docs.dropdown.itDuplicate' | translate }}</li>
                <li nz-menu-divider></li>
                <li nz-menu-item nzDanger>{{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dropdown.exIconT' | translate"
          [desc]="'docs.dropdown.exIconD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmDropdown]="menuIcons">
              {{ 'docs.dropdown.trigOptions' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuIcons="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item><tabler-icon [icon]="$any(edit)" [size]="16" /> {{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item><tabler-icon [icon]="$any(copy)" [size]="16" /> {{ 'docs.dropdown.itDuplicate' | translate }}</li>
                <li nz-menu-item><tabler-icon [icon]="$any(download)" [size]="16" /> {{ 'docs.dropdown.itDownload' | translate }}</li>
                <li nz-menu-divider></li>
                <li nz-menu-item nzDanger><tabler-icon [icon]="$any(trash)" [size]="16" /> {{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dropdown.exOverflowT' | translate"
          [desc]="'docs.dropdown.exOverflowD' | translate">
          <sg-row>
            <hrm-button variant="text" [iconOnly]="true" [ariaLabel]="'docs.dropdown.trigMore' | translate" [hrmDropdown]="menuOverflow">
              <tabler-icon [icon]="$any(dots)" [size]="18" />
            </hrm-button>
            <nz-dropdown-menu #menuOverflow="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item><tabler-icon [icon]="$any(eye)" [size]="16" /> {{ 'docs.dropdown.itView' | translate }}</li>
                <li nz-menu-item><tabler-icon [icon]="$any(edit)" [size]="16" /> {{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item nzDanger><tabler-icon [icon]="$any(trash)" [size]="16" /> {{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dropdown.exSectionsT' | translate"
          [desc]="'docs.dropdown.exSectionsD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmDropdown]="menuSections">
              {{ 'docs.dropdown.trigAction2' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuSections="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-group [nzTitle]="'docs.dropdown.grpCreate' | translate">
                  <ul>
                    <li nz-menu-item><tabler-icon [icon]="$any(fileText)" [size]="16" /> {{ 'docs.dropdown.itContract' | translate }}</li>
                    <li nz-menu-item><tabler-icon [icon]="$any(users)" [size]="16" /> {{ 'docs.dropdown.itEmployee' | translate }}</li>
                  </ul>
                </li>
                <li nz-menu-group [nzTitle]="'docs.dropdown.grpManage' | translate">
                  <ul>
                    <li nz-menu-item><tabler-icon [icon]="$any(share)" [size]="16" /> {{ 'docs.dropdown.itShare' | translate }}</li>
                    <li nz-menu-item><tabler-icon [icon]="$any(printer)" [size]="16" /> {{ 'docs.dropdown.itPrint' | translate }}</li>
                    <li nz-menu-item><tabler-icon [icon]="$any(settings)" [size]="16" /> {{ 'docs.dropdown.itSettings' | translate }}</li>
                  </ul>
                </li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dropdown.exDisabledT' | translate"
          [desc]="'docs.dropdown.exDisabledD' | translate">
          <sg-row>
            <hrm-button variant="default" [hrmDropdown]="menuDisabled">
              {{ 'docs.dropdown.trigAction' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuDisabled="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item><tabler-icon [icon]="$any(eye)" [size]="16" /> {{ 'docs.dropdown.itView' | translate }}</li>
                <li nz-menu-item><tabler-icon [icon]="$any(edit)" [size]="16" /> {{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item nzDisabled><tabler-icon [icon]="$any(settings)" [size]="16" /> {{ 'docs.dropdown.itPermission' | translate }}</li>
                <li nz-menu-divider></li>
                <li nz-menu-item nzDanger nzDisabled><tabler-icon [icon]="$any(trash)" [size]="16" /> {{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.dropdown.exTriggerT' | translate"
          [desc]="'docs.dropdown.exTriggerD' | translate">
          <sg-row [label]="'docs.dropdown.exTriggerRow' | translate">
            <hrm-button variant="default" hrmDropdownTrigger="click" [hrmDropdown]="menuClick">
              {{ 'docs.dropdown.trigOpenClick' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuClick="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item>{{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item>{{ 'docs.dropdown.itDuplicate' | translate }}</li>
                <li nz-menu-item nzDanger>{{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>

            <hrm-button variant="default" hrmDropdownTrigger="hover" [hrmDropdown]="menuHover">
              {{ 'docs.dropdown.trigOpenHover' | translate }} <tabler-icon [icon]="$any(chevron)" [size]="16" />
            </hrm-button>
            <nz-dropdown-menu #menuHover="nzDropdownMenu">
              <ul nz-menu>
                <li nz-menu-item>{{ 'docs.dropdown.itEdit' | translate }}</li>
                <li nz-menu-item>{{ 'docs.dropdown.itDuplicate' | translate }}</li>
                <li nz-menu-item nzDanger>{{ 'docs.dropdown.itDelete' | translate }}</li>
              </ul>
            </nz-dropdown-menu>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocDropdown, { className: "SgDocDropdown", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/navigation/dropdown.ts", lineNumber: 174 });
})();
export {
  SgDocDropdown
};
//# sourceMappingURL=chunk-7TQO4LQ7.js.map
