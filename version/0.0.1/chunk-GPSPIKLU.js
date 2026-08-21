import {
  HRM_WORKFLOW_ACTIONS,
  HrmStatusCell
} from "./chunk-5QKS2MQ6.js";
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
  TablerIconComponent
} from "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/action/hrm-workflow-actions.ts
var _forTrack0 = ($index, $item) => $item.key;
function HrmWorkflowActions_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 1);
    \u0275\u0275listener("click", function HrmWorkflowActions_For_1_Template_hrm_button_click_0_listener() {
      const a_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.action.emit(a_r2.key));
    });
    \u0275\u0275element(1, "tabler-icon", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("variant", a_r2.tone === "neutral" ? "default" : "primary");
    \u0275\u0275attribute("data-tone", a_r2.tone);
    \u0275\u0275advance();
    \u0275\u0275property("icon", a_r2.icon)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.lang() === "en" ? a_r2.en : a_r2.vi, " ");
  }
}
var HrmWorkflowActions = class _HrmWorkflowActions {
  constructor() {
    this.status = input.required(...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.lang = input("vi", ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    ));
    this.action = output();
    this.actions = computed(() => HRM_WORKFLOW_ACTIONS[this.status()] ?? [], ...ngDevMode ? [{ debugName: "actions" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmWorkflowActions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmWorkflowActions)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmWorkflowActions, selectors: [["hrm-workflow-actions"]], hostAttrs: [1, "hrm-workflow-actions"], inputs: { status: [1, "status"], lang: [1, "lang"] }, outputs: { action: "action" }, decls: 2, vars: 0, consts: [["size", "md", 3, "variant"], ["size", "md", 3, "click", "variant"], [3, "icon", "size"]], template: function HrmWorkflowActions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, HrmWorkflowActions_For_1_Template, 3, 5, "hrm-button", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.actions());
      }
    }, dependencies: [HrmButton, TablerIconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\nhrm-button[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  margin-right: var(--space-0-5);\n}\nhrm-button[_ngcontent-%COMP%]     .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n}\nhrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn:hover {\n  background: var(--error-hover, var(--error-base));\n  border-color: var(--error-hover, var(--error-base));\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\n/*# sourceMappingURL=hrm-workflow-actions.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmWorkflowActions, [{
    type: Component,
    args: [{ selector: "hrm-workflow-actions", imports: [HrmButton, TablerIconComponent], template: `
    @for (a of actions(); track a.key) {
      <hrm-button [variant]="a.tone === 'neutral' ? 'default' : 'primary'" size="md"
        [attr.data-tone]="a.tone" (click)="action.emit(a.key)">
        <tabler-icon [icon]="$any(a.icon)" [size]="15" />
        {{ lang() === 'en' ? a.en : a.vi }}
      </hrm-button>
    }
  `, host: { class: "hrm-workflow-actions" }, styles: ["/* angular:styles/component:css;f828859602c512b85dcf529ebad5d38a4622452a3413c0e0089f066fd9abf4b3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/action/hrm-workflow-actions.ts */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: wrap;\n}\nhrm-button tabler-icon {\n  margin-right: var(--space-0-5);\n}\nhrm-button ::ng-deep .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n}\nhrm-button[data-tone=error] ::ng-deep .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=error] ::ng-deep .ant-btn:hover {\n  background: var(--error-hover, var(--error-base));\n  border-color: var(--error-hover, var(--error-base));\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=warning] ::ng-deep .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=warning] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\nhrm-button[data-tone=violet] ::ng-deep .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\nhrm-button[data-tone=violet] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\n/*# sourceMappingURL=hrm-workflow-actions.css.map */\n"] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], action: [{ type: Output, args: ["action"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmWorkflowActions, { className: "HrmWorkflowActions", filePath: "libs/hrm-ui/src/lib/action/hrm-workflow-actions.ts", lineNumber: 49 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/status-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/tag" });
var _c1 = (a0) => ({ label: a0, route: "hrm/data-display/badge" });
var _c2 = (a0, a1) => [a0, a1];
function SgDocStatusCell_For_48_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "docs.statusCell.wfTerminal"));
  }
}
function SgDocStatusCell_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 31);
    \u0275\u0275element(2, "hrm-status-cell", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "hrm-workflow-actions", 33);
    \u0275\u0275listener("action", function SgDocStatusCell_For_48_Template_hrm_workflow_actions_action_3_listener($event) {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.lastAction = s_r2 + " \u2192 " + $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgDocStatusCell_For_48_Conditional_4_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("preset", s_r2)("dot", true);
    \u0275\u0275advance();
    \u0275\u0275property("status", s_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.actionCount(s_r2) ? 4 : -1);
  }
}
function SgDocStatusCell_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "docs.statusCell.wfClicked"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.lastAction);
  }
}
var SgDocStatusCell = class _SgDocStatusCell {
  constructor() {
    this.sysStatuses = [
      "pending",
      "approved",
      "rejected",
      "pendingCancel",
      "changeRequested",
      "cancelled"
    ];
    this.lastAction = "";
    this.when = [
      "docs.statusCell.when1",
      "docs.statusCell.when2",
      "docs.statusCell.when3"
    ];
  }
  actionCount(s) {
    return { pending: 3, approved: 2, rejected: 1, pendingCancel: 2, changeRequested: 2, cancelled: 0 }[s];
  }
  static {
    this.\u0275fac = function SgDocStatusCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocStatusCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocStatusCell, selectors: [["sg-doc-status-cell"]], decls: 132, vars: 199, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], ["status", "success", "variant", "dot", 3, "label"], ["status", "warning", "variant", "badge", 3, "label"], ["status", "error", "variant", "plain", 3, "label"], ["status", "processing", "variant", "dot", 3, "label"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [1, "wf"], [1, "wf-row"], [1, "wf-log"], [3, "label"], ["status", "success", "variant", "badge", 3, "label"], ["status", "success", "variant", "solid", 3, "label"], ["status", "success", "variant", "plain", 3, "label"], [1, "col"], ["status", "processing", "variant", "badge", 3, "label", "dot"], ["status", "warning", "variant", "badge", 3, "label", "dot"], ["status", "success", "variant", "badge", 3, "label", "dot"], ["status", "error", "variant", "badge", 3, "label", "dot"], ["status", "neutral", "variant", "badge", 3, "label", "dot"], ["status", "warning", "variant", "dot", 3, "label"], ["status", "error", "variant", "dot", 3, "label"], ["status", "neutral", "variant", "dot", 3, "label"], ["status", "processing", "variant", "badge", 3, "label"], ["status", "error", "variant", "badge", 3, "label"], ["status", "info", "variant", "badge", 3, "label"], ["status", "neutral", "variant", "badge", 3, "label"], [1, "wf-st"], ["variant", "badge", 3, "preset", "dot"], [3, "action", "status"], [1, "wf-end"]], template: function SgDocStatusCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementStart(5, "div", 1)(6, "sg-row");
        \u0275\u0275element(7, "hrm-status-cell", 2);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "hrm-status-cell", 3);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275element(11, "hrm-status-cell", 4);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275element(13, "hrm-status-cell", 5);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275element(16, "sg-use", 7);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "sg-do");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-do");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "sg-do");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "sg-do");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "sg-dont");
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
        \u0275\u0275elementStart(42, "div", 9)(43, "sg-example", 10);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "div", 11);
        \u0275\u0275repeaterCreate(47, SgDocStatusCell_For_48_Template, 5, 4, "div", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(49, SgDocStatusCell_Conditional_49_Template, 5, 4, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "sg-example", 10);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementStart(53, "sg-row", 14);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275element(55, "hrm-status-cell", 2);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "hrm-status-cell", 15);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275element(59, "hrm-status-cell", 16);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275element(61, "hrm-status-cell", 17);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "sg-example", 10);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementStart(66, "sg-row")(67, "div", 18);
        \u0275\u0275element(68, "hrm-status-cell", 19);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275element(70, "hrm-status-cell", 20);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275element(72, "hrm-status-cell", 21);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275element(74, "hrm-status-cell", 22);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275element(76, "hrm-status-cell", 23);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "sg-example", 10);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementStart(81, "sg-row")(82, "div", 18);
        \u0275\u0275element(83, "hrm-status-cell", 2);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275element(85, "hrm-status-cell", 24);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275element(87, "hrm-status-cell", 25);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275element(89, "hrm-status-cell", 5);
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275element(91, "hrm-status-cell", 26);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "sg-example", 10);
        \u0275\u0275pipe(94, "translate");
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementStart(96, "sg-row", 14);
        \u0275\u0275pipe(97, "translate");
        \u0275\u0275elementStart(98, "div", 18);
        \u0275\u0275element(99, "hrm-status-cell", 15);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275element(101, "hrm-status-cell", 27);
        \u0275\u0275pipe(102, "translate");
        \u0275\u0275element(103, "hrm-status-cell", 3);
        \u0275\u0275pipe(104, "translate");
        \u0275\u0275element(105, "hrm-status-cell", 28);
        \u0275\u0275pipe(106, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "sg-row", 14);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275element(109, "hrm-status-cell", 21);
        \u0275\u0275pipe(110, "translate");
        \u0275\u0275element(111, "hrm-status-cell", 19);
        \u0275\u0275pipe(112, "translate");
        \u0275\u0275element(113, "hrm-status-cell", 22);
        \u0275\u0275pipe(114, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "sg-example", 10);
        \u0275\u0275pipe(116, "translate");
        \u0275\u0275pipe(117, "translate");
        \u0275\u0275elementStart(118, "sg-row", 14);
        \u0275\u0275pipe(119, "translate");
        \u0275\u0275element(120, "hrm-status-cell", 15);
        \u0275\u0275pipe(121, "translate");
        \u0275\u0275element(122, "hrm-status-cell", 3);
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275element(124, "hrm-status-cell", 28);
        \u0275\u0275pipe(125, "translate");
        \u0275\u0275element(126, "hrm-status-cell", 29);
        \u0275\u0275pipe(127, "translate");
        \u0275\u0275element(128, "hrm-status-cell", 27);
        \u0275\u0275pipe(129, "translate");
        \u0275\u0275element(130, "hrm-status-cell", 30);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 70, "docs.statusCell.title"))("related", \u0275\u0275pureFunction2(196, _c2, \u0275\u0275pureFunction1(192, _c0, \u0275\u0275pipeBind1(2, 72, "docs.statusCell.relTag")), \u0275\u0275pureFunction1(194, _c1, \u0275\u0275pipeBind1(3, 74, "docs.statusCell.relBadge"))))("desc", \u0275\u0275pipeBind1(4, 76, "docs.statusCell.desc"));
        \u0275\u0275advance(7);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 78, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 80, "docs.statusCell.stOnLeave"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 82, "docs.statusCell.stAbsent"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 84, "docs.statusCell.stPending"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(17, 86, "docs.statusCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(18, 88, "docs.statusCell.behavior"))("avoid", \u0275\u0275pipeBind1(19, 90, "docs.statusCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 92, "docs.statusCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 94, "docs.statusCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 96, "docs.statusCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 98, "docs.statusCell.do4"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 100, "docs.statusCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 102, "docs.statusCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 104, "docs.statusCell.dont3"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 106, "docs.statusCell.exSystemT"))("desc", \u0275\u0275pipeBind1(45, 108, "docs.statusCell.exSystemD"));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.sysStatuses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.lastAction ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(51, 110, "docs.statusCell.exVariantsT"))("desc", \u0275\u0275pipeBind1(52, 112, "docs.statusCell.exVariantsD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(54, 114, "docs.statusCell.rowVariants"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 116, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(58, 118, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(60, 120, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(62, 122, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(64, 124, "docs.statusCell.exFlowT"))("desc", \u0275\u0275pipeBind1(65, 126, "docs.statusCell.exFlowD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(69, 128, "docs.statusCell.stPending"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(71, 130, "docs.statusCell.stNeedInfo"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(73, 132, "docs.statusCell.stApproved"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(75, 134, "docs.statusCell.stRejected"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(77, 136, "docs.statusCell.stDraft"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(79, 138, "docs.statusCell.exAttendT"))("desc", \u0275\u0275pipeBind1(80, 140, "docs.statusCell.exAttendD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(84, 142, "docs.statusCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(86, 144, "docs.statusCell.stOnLeave"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(88, 146, "docs.statusCell.stAbsent"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(90, 148, "docs.statusCell.stPending"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(92, 150, "docs.statusCell.stStopped"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(94, 152, "docs.statusCell.exBadgeT"))("desc", \u0275\u0275pipeBind1(95, 154, "docs.statusCell.exBadgeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(97, 156, "docs.statusCell.rowBadgeTint"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(100, 158, "docs.statusCell.stApproved"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(102, 160, "docs.statusCell.stProcessing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(104, 162, "docs.statusCell.stNeedInfo"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(106, 164, "docs.statusCell.stRejected"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(108, 166, "docs.statusCell.rowBadgeDot"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(110, 168, "docs.statusCell.stApproved"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(112, 170, "docs.statusCell.stProcessing"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(114, 172, "docs.statusCell.stRejected"))("dot", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(116, 174, "docs.statusCell.exPaletteT"))("desc", \u0275\u0275pipeBind1(117, 176, "docs.statusCell.exPaletteD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(119, 178, "docs.statusCell.rowPalette"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(121, 180, "docs.statusCell.stDone"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(123, 182, "docs.statusCell.stNotice"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(125, 184, "docs.statusCell.stErrAbsent"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(127, 186, "docs.statusCell.stInfo"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(129, 188, "docs.statusCell.stWaiting"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(131, 190, "docs.statusCell.stStopped"));
      }
    }, dependencies: [TranslateModule, HrmStatusCell, HrmWorkflowActions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n.wf[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.wf-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.wf-st[_ngcontent-%COMP%] {\n  flex: none;\n  width: 160px;\n}\n.wf-end[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-style: italic;\n}\n.wf-log[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.wf-log[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--primary-base);\n  font-weight: 600;\n}\n/*# sourceMappingURL=status-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocStatusCell, [{
    type: Component,
    args: [{ selector: "sg-doc-status-cell", imports: [TranslateModule, HrmStatusCell, HrmWorkflowActions, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.statusCell.title' | translate" [related]="[{label:('docs.statusCell.relTag' | translate), route:'hrm/data-display/tag'},{label:('docs.statusCell.relBadge' | translate), route:'hrm/data-display/badge'}]"
      [desc]="'docs.statusCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="dot" />
          <hrm-status-cell status="warning" [label]="'docs.statusCell.stOnLeave' | translate" variant="badge" />
          <hrm-status-cell status="error" [label]="'docs.statusCell.stAbsent' | translate" variant="plain" />
          <hrm-status-cell status="processing" [label]="'docs.statusCell.stPending' | translate" variant="dot" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.statusCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.statusCell.behavior' | translate"
          [avoid]="'docs.statusCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.statusCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.statusCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.statusCell.do3' | translate }}</sg-do>
        <sg-do>{{ 'docs.statusCell.do4' | translate }}</sg-do>
        <sg-dont>{{ 'docs.statusCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.statusCell.dont2' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.statusCell.dont3' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <!-- TR\u1EA0NG TH\xC1I CH\u1EE6 \u0110\u1EA0O H\u1EC6 TH\u1ED0NG (State Machine): m\u1ED7i tr\u1EA1ng th\xE1i + b\u1ED9 n\xFAt h\xE0nh \u0111\u1ED9ng chu\u1EA9n. -->
        <sg-example [title]="'docs.statusCell.exSystemT' | translate"
          [desc]="'docs.statusCell.exSystemD' | translate">
          <div class="wf">
            @for (s of sysStatuses; track s) {
              <div class="wf-row">
                <div class="wf-st"><hrm-status-cell [preset]="s" variant="badge" [dot]="true" /></div>
                <hrm-workflow-actions [status]="s" (action)="lastAction = s + ' \u2192 ' + $event" />
                @if (!actionCount(s)) { <span class="wf-end">{{ 'docs.statusCell.wfTerminal' | translate }}</span> }
              </div>
            }
          </div>
          @if (lastAction) {
            <div class="wf-log">{{ 'docs.statusCell.wfClicked' | translate }} <code>{{ lastAction }}</code></div>
          }
        </sg-example>

        <sg-example [title]="'docs.statusCell.exVariantsT' | translate"
          [desc]="'docs.statusCell.exVariantsD' | translate">
          <sg-row [label]="'docs.statusCell.rowVariants' | translate">
            <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="dot" />
            <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="badge" />
            <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="solid" />
            <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="plain" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statusCell.exFlowT' | translate"
          [desc]="'docs.statusCell.exFlowD' | translate">
          <sg-row>
            <div class="col">
              <hrm-status-cell status="processing" [label]="'docs.statusCell.stPending' | translate" variant="badge" [dot]="true" />
              <hrm-status-cell status="warning" [label]="'docs.statusCell.stNeedInfo' | translate" variant="badge" [dot]="true" />
              <hrm-status-cell status="success" [label]="'docs.statusCell.stApproved' | translate" variant="badge" [dot]="true" />
              <hrm-status-cell status="error" [label]="'docs.statusCell.stRejected' | translate" variant="badge" [dot]="true" />
              <hrm-status-cell status="neutral" [label]="'docs.statusCell.stDraft' | translate" variant="badge" [dot]="true" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statusCell.exAttendT' | translate"
          [desc]="'docs.statusCell.exAttendD' | translate">
          <sg-row>
            <div class="col">
              <hrm-status-cell status="success" [label]="'docs.statusCell.stWorking' | translate" variant="dot" />
              <hrm-status-cell status="warning" [label]="'docs.statusCell.stOnLeave' | translate" variant="dot" />
              <hrm-status-cell status="error" [label]="'docs.statusCell.stAbsent' | translate" variant="dot" />
              <hrm-status-cell status="processing" [label]="'docs.statusCell.stPending' | translate" variant="dot" />
              <hrm-status-cell status="neutral" [label]="'docs.statusCell.stStopped' | translate" variant="dot" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statusCell.exBadgeT' | translate"
          [desc]="'docs.statusCell.exBadgeD' | translate">
          <sg-row [label]="'docs.statusCell.rowBadgeTint' | translate">
            <div class="col">
              <hrm-status-cell status="success" [label]="'docs.statusCell.stApproved' | translate" variant="badge" />
              <hrm-status-cell status="processing" [label]="'docs.statusCell.stProcessing' | translate" variant="badge" />
              <hrm-status-cell status="warning" [label]="'docs.statusCell.stNeedInfo' | translate" variant="badge" />
              <hrm-status-cell status="error" [label]="'docs.statusCell.stRejected' | translate" variant="badge" />
            </div>
          </sg-row>
          <sg-row [label]="'docs.statusCell.rowBadgeDot' | translate">
            <hrm-status-cell status="success" [label]="'docs.statusCell.stApproved' | translate" variant="badge" [dot]="true" />
            <hrm-status-cell status="processing" [label]="'docs.statusCell.stProcessing' | translate" variant="badge" [dot]="true" />
            <hrm-status-cell status="error" [label]="'docs.statusCell.stRejected' | translate" variant="badge" [dot]="true" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.statusCell.exPaletteT' | translate"
          [desc]="'docs.statusCell.exPaletteD' | translate">
          <sg-row [label]="'docs.statusCell.rowPalette' | translate">
            <hrm-status-cell status="success" [label]="'docs.statusCell.stDone' | translate" variant="badge" />
            <hrm-status-cell status="warning" [label]="'docs.statusCell.stNotice' | translate" variant="badge" />
            <hrm-status-cell status="error" [label]="'docs.statusCell.stErrAbsent' | translate" variant="badge" />
            <hrm-status-cell status="info" [label]="'docs.statusCell.stInfo' | translate" variant="badge" />
            <hrm-status-cell status="processing" [label]="'docs.statusCell.stWaiting' | translate" variant="badge" />
            <hrm-status-cell status="neutral" [label]="'docs.statusCell.stStopped' | translate" variant="badge" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;01eaac399d700278f2bf8d47e7307b13d8dfabf84b2dc54b602f8088b4d6fce1;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/status-cell.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n.wf {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.wf-row {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.wf-st {\n  flex: none;\n  width: 160px;\n}\n.wf-end {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-style: italic;\n}\n.wf-log {\n  margin-top: var(--space-3);\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.wf-log code {\n  color: var(--primary-base);\n  font-weight: 600;\n}\n/*# sourceMappingURL=status-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocStatusCell, { className: "SgDocStatusCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/status-cell.ts", lineNumber: 139 });
})();
export {
  SgDocStatusCell
};
//# sourceMappingURL=chunk-GPSPIKLU.js.map
