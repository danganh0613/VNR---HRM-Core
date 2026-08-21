import {
  HrmActionCell
} from "./chunk-HIAGCYYX.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-W3HXIMCC.js";
import {
  Copy,
  Download,
  Edit,
  Eye,
  Trash
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  inject,
  setClassMetadata,
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/action-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/general/button" });
var _c1 = (a0) => [a0];
var SgDocActionCell = class _SgDocActionCell {
  constructor() {
    this.t = inject(TranslateService);
    this.when = [
      "docs.actionCell.when1",
      "docs.actionCell.when2",
      "docs.actionCell.when3"
    ];
  }
  get rowActions() {
    return [
      { key: "view", icon: Eye, label: this.t.instant("docs.actionCell.actView") },
      { key: "edit", icon: Edit, label: this.t.instant("docs.actionCell.actEdit") },
      { key: "delete", icon: Trash, label: this.t.instant("docs.actionCell.actDelete"), danger: true }
    ];
  }
  get manyActions() {
    return [
      { key: "view", icon: Eye, label: this.t.instant("docs.actionCell.actView") },
      { key: "edit", icon: Edit, label: this.t.instant("docs.actionCell.actEdit") },
      { key: "download", icon: Download, label: this.t.instant("docs.actionCell.actDownload") },
      { key: "copy", icon: Copy, label: this.t.instant("docs.actionCell.actCopy") },
      { key: "delete", icon: Trash, label: this.t.instant("docs.actionCell.actDelete"), danger: true }
    ];
  }
  get lockedActions() {
    return [
      { key: "view", icon: Eye, label: this.t.instant("docs.actionCell.actView") },
      { key: "edit", icon: Edit, label: this.t.instant("docs.actionCell.actEdit") },
      { key: "delete", icon: Trash, label: this.t.instant("docs.actionCell.actDelete"), danger: true, disabled: true }
    ];
  }
  get docActions() {
    return [
      { key: "view", icon: Eye, label: this.t.instant("docs.actionCell.actView") },
      { key: "download", icon: Download, label: this.t.instant("docs.actionCell.actDownload") },
      { key: "copy", icon: Copy, label: this.t.instant("docs.actionCell.actCopy") },
      { key: "delete", icon: Trash, label: this.t.instant("docs.actionCell.actDelete"), danger: true }
    ];
  }
  onAction(key) {
  }
  static {
    this.\u0275fac = function SgDocActionCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocActionCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocActionCell, selectors: [["sg-doc-action-cell"]], decls: 51, vars: 74, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "action", "actions"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "action", "actions", "max", "moreLabel"]], template: function SgDocActionCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row")(6, "hrm-action-cell", 2);
        \u0275\u0275listener("action", function SgDocActionCell_Template_hrm_action_cell_action_6_listener($event) {
          return ctx.onAction($event);
        });
        \u0275\u0275elementEnd()()();
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
        \u0275\u0275elementStart(28, "div", 6)(29, "sg-example", 7);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "hrm-action-cell", 2);
        \u0275\u0275listener("action", function SgDocActionCell_Template_hrm_action_cell_action_33_listener($event) {
          return ctx.onAction($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "sg-example", 7);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementStart(37, "sg-row", 8);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "hrm-action-cell", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275listener("action", function SgDocActionCell_Template_hrm_action_cell_action_39_listener($event) {
          return ctx.onAction($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "sg-example", 7);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementStart(44, "sg-row")(45, "hrm-action-cell", 2);
        \u0275\u0275listener("action", function SgDocActionCell_Template_hrm_action_cell_action_45_listener($event) {
          return ctx.onAction($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "sg-example", 7);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "sg-row")(50, "hrm-action-cell", 2);
        \u0275\u0275listener("action", function SgDocActionCell_Template_hrm_action_cell_action_50_listener($event) {
          return ctx.onAction($event);
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 28, "docs.actionCell.title"))("related", \u0275\u0275pureFunction1(72, _c1, \u0275\u0275pureFunction1(70, _c0, \u0275\u0275pipeBind1(2, 30, "docs.actionCell.relButton"))))("desc", \u0275\u0275pipeBind1(3, 32, "docs.actionCell.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("actions", ctx.rowActions);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 34, "docs.actionCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 36, "docs.actionCell.behavior"))("avoid", \u0275\u0275pipeBind1(11, 38, "docs.actionCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 40, "docs.actionCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 42, "docs.actionCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 44, "docs.actionCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 46, "docs.actionCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 48, "docs.actionCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 50, "docs.actionCell.exStdT"))("desc", \u0275\u0275pipeBind1(31, 52, "docs.actionCell.exStdD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("actions", ctx.rowActions);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 54, "docs.actionCell.exMoreT"))("desc", \u0275\u0275pipeBind1(36, 56, "docs.actionCell.exMoreD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(38, 58, "docs.actionCell.rowMore"));
        \u0275\u0275advance(2);
        \u0275\u0275property("actions", ctx.manyActions)("max", 2)("moreLabel", \u0275\u0275pipeBind1(40, 60, "docs.actionCell.moreLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(42, 62, "docs.actionCell.exDisabledT"))("desc", \u0275\u0275pipeBind1(43, 64, "docs.actionCell.exDisabledD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("actions", ctx.lockedActions);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(47, 66, "docs.actionCell.exDocT"))("desc", \u0275\u0275pipeBind1(48, 68, "docs.actionCell.exDocD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("actions", ctx.docActions);
      }
    }, dependencies: [TranslateModule, HrmActionCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocActionCell, [{
    type: Component,
    args: [{
      selector: "sg-doc-action-cell",
      imports: [TranslateModule, HrmActionCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Table Cells" [title]="'docs.actionCell.title' | translate" [related]="[{label:('docs.actionCell.relButton' | translate), route:'hrm/general/button'}]"
      [desc]="'docs.actionCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-action-cell [actions]="rowActions" (action)="onAction($event)" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.actionCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.actionCell.behavior' | translate"
          [avoid]="'docs.actionCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.actionCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.actionCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.actionCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.actionCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.actionCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.actionCell.exStdT' | translate"
          [desc]="'docs.actionCell.exStdD' | translate">
          <sg-row>
            <hrm-action-cell [actions]="rowActions" (action)="onAction($event)" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.actionCell.exMoreT' | translate"
          [desc]="'docs.actionCell.exMoreD' | translate">
          <sg-row [label]="'docs.actionCell.rowMore' | translate">
            <hrm-action-cell [actions]="manyActions" [max]="2" [moreLabel]="'docs.actionCell.moreLabel' | translate" (action)="onAction($event)" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.actionCell.exDisabledT' | translate"
          [desc]="'docs.actionCell.exDisabledD' | translate">
          <sg-row>
            <hrm-action-cell [actions]="lockedActions" (action)="onAction($event)" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.actionCell.exDocT' | translate"
          [desc]="'docs.actionCell.exDocD' | translate">
          <sg-row>
            <hrm-action-cell [actions]="docActions" (action)="onAction($event)" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocActionCell, { className: "SgDocActionCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/action-cell.ts", lineNumber: 71 });
})();
export {
  SgDocActionCell
};
//# sourceMappingURL=chunk-GJSLIOXK.js.map
