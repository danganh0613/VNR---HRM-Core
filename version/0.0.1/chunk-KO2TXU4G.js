import {
  HrmMediaCell
} from "./chunk-AWALIPWS.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  Briefcase,
  Building,
  File,
  Folder
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
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/media-cell.ts
var SgDocMediaCell = class _SgDocMediaCell {
  constructor() {
    this.logo = "https://i.pravatar.cc/80?img=5";
    this.brand = "https://i.pravatar.cc/80?img=12";
    this.IconBuilding = Building;
    this.IconBriefcase = Briefcase;
    this.IconFolder = Folder;
    this.IconFile = File;
    this.when = [
      "docs.mediaCell.when1",
      "docs.mediaCell.when2",
      "docs.mediaCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocMediaCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMediaCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMediaCell, selectors: [["sg-doc-media-cell"]], decls: 87, vars: 155, consts: [["category", "Table Cells", 3, "title", "desc"], ["sgOverview", ""], [3, "src", "label", "sub"], ["shape", "circle", 3, "icon", "label", "sub"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "icon", "label", "sub"], ["shape", "circle", 3, "src", "label", "sub"], [1, "col"]], template: function SgDocMediaCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-row");
        \u0275\u0275element(5, "hrm-media-cell", 2);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275element(8, "hrm-media-cell", 3);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4);
        \u0275\u0275element(12, "sg-use", 5);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 6)(17, "sg-do");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "sg-do");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "sg-do");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "sg-dont");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "sg-dont");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 7)(33, "sg-example", 8);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row");
        \u0275\u0275element(37, "hrm-media-cell", 2);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "sg-example", 8);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "hrm-media-cell", 10);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275element(48, "hrm-media-cell", 10);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275element(51, "hrm-media-cell", 10);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "sg-example", 8);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "sg-row", 9);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275element(59, "hrm-media-cell", 2);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275element(62, "hrm-media-cell", 10);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "sg-row", 9);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275element(67, "hrm-media-cell", 3);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275element(70, "hrm-media-cell", 11);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "sg-example", 8);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementStart(76, "sg-row")(77, "div", 12);
        \u0275\u0275element(78, "hrm-media-cell", 2);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275element(81, "hrm-media-cell", 10);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275element(84, "hrm-media-cell", 10);
        \u0275\u0275pipe(85, "translate");
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 61, "docs.mediaCell.title"))("desc", \u0275\u0275pipeBind1(2, 63, "docs.mediaCell.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.logo)("label", \u0275\u0275pipeBind1(6, 65, "docs.mediaCell.lblOnboarding"))("sub", \u0275\u0275pipeBind1(7, 67, "docs.mediaCell.sub12Members"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconBuilding)("label", \u0275\u0275pipeBind1(9, 69, "docs.mediaCell.lblVinRetail"))("sub", \u0275\u0275pipeBind1(10, 71, "docs.mediaCell.subHqHanoi"));
        \u0275\u0275advance(4);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(13, 73, "docs.mediaCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(14, 75, "docs.mediaCell.behavior"))("avoid", \u0275\u0275pipeBind1(15, 77, "docs.mediaCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 79, "docs.mediaCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 81, "docs.mediaCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 83, "docs.mediaCell.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 85, "docs.mediaCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 87, "docs.mediaCell.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 89, "docs.mediaCell.exLogoT"))("desc", \u0275\u0275pipeBind1(35, 91, "docs.mediaCell.exLogoD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.logo)("label", \u0275\u0275pipeBind1(38, 93, "docs.mediaCell.lblOnboarding"))("sub", \u0275\u0275pipeBind1(39, 95, "docs.mediaCell.sub12Members"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 97, "docs.mediaCell.exIconT"))("desc", \u0275\u0275pipeBind1(42, 99, "docs.mediaCell.exIconD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 101, "docs.mediaCell.rowDeptProjContract"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.IconBuilding)("label", \u0275\u0275pipeBind1(46, 103, "docs.mediaCell.lblHrDept"))("sub", \u0275\u0275pipeBind1(47, 105, "docs.mediaCell.sub24Staff"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconFolder)("label", \u0275\u0275pipeBind1(49, 107, "docs.mediaCell.lblRecruitQ3"))("sub", \u0275\u0275pipeBind1(50, 109, "docs.mediaCell.subRunning"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconFile)("label", \u0275\u0275pipeBind1(52, 111, "docs.mediaCell.lblLaborContract"))("sub", \u0275\u0275pipeBind1(53, 113, "docs.mediaCell.subPdf3Pages"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(55, 115, "docs.mediaCell.exShapeT"))("desc", \u0275\u0275pipeBind1(56, 117, "docs.mediaCell.exShapeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(58, 119, "docs.mediaCell.rowSquare"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.logo)("label", \u0275\u0275pipeBind1(60, 121, "docs.mediaCell.lblOnboarding"))("sub", \u0275\u0275pipeBind1(61, 123, "docs.mediaCell.sub12Members"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconBriefcase)("label", \u0275\u0275pipeBind1(63, 125, "docs.mediaCell.lblDellLaptop"))("sub", \u0275\u0275pipeBind1(64, 127, "docs.mediaCell.subAssigning"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(66, 129, "docs.mediaCell.rowCircle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.IconBuilding)("label", \u0275\u0275pipeBind1(68, 131, "docs.mediaCell.lblVinRetail"))("sub", \u0275\u0275pipeBind1(69, 133, "docs.mediaCell.subHqHanoi"));
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.brand)("label", \u0275\u0275pipeBind1(71, 135, "docs.mediaCell.lblDanangBranch"))("sub", \u0275\u0275pipeBind1(72, 137, "docs.mediaCell.sub86Staff"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(74, 139, "docs.mediaCell.exManyT"))("desc", \u0275\u0275pipeBind1(75, 141, "docs.mediaCell.exManyD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.logo)("label", \u0275\u0275pipeBind1(79, 143, "docs.mediaCell.lblOnboarding"))("sub", \u0275\u0275pipeBind1(80, 145, "docs.mediaCell.sub12Members"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconFolder)("label", \u0275\u0275pipeBind1(82, 147, "docs.mediaCell.lblRecruitQ3"))("sub", \u0275\u0275pipeBind1(83, 149, "docs.mediaCell.sub8Members"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconBuilding)("label", \u0275\u0275pipeBind1(85, 151, "docs.mediaCell.lblAccountingDept"))("sub", \u0275\u0275pipeBind1(86, 153, "docs.mediaCell.sub15Staff"));
      }
    }, dependencies: [TranslateModule, HrmMediaCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=media-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMediaCell, [{
    type: Component,
    args: [{ selector: "sg-doc-media-cell", imports: [TranslateModule, HrmMediaCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.mediaCell.title' | translate"
      [desc]="'docs.mediaCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-media-cell [src]="logo" [label]="'docs.mediaCell.lblOnboarding' | translate" [sub]="'docs.mediaCell.sub12Members' | translate" />
          <hrm-media-cell [icon]="IconBuilding" shape="circle" [label]="'docs.mediaCell.lblVinRetail' | translate" [sub]="'docs.mediaCell.subHqHanoi' | translate" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.mediaCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.mediaCell.behavior' | translate"
          [avoid]="'docs.mediaCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.mediaCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.mediaCell.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.mediaCell.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.mediaCell.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.mediaCell.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.mediaCell.exLogoT' | translate"
          [desc]="'docs.mediaCell.exLogoD' | translate">
          <sg-row>
            <hrm-media-cell [src]="logo" [label]="'docs.mediaCell.lblOnboarding' | translate" [sub]="'docs.mediaCell.sub12Members' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mediaCell.exIconT' | translate"
          [desc]="'docs.mediaCell.exIconD' | translate">
          <sg-row [label]="'docs.mediaCell.rowDeptProjContract' | translate">
            <hrm-media-cell [icon]="IconBuilding" [label]="'docs.mediaCell.lblHrDept' | translate" [sub]="'docs.mediaCell.sub24Staff' | translate" />
            <hrm-media-cell [icon]="IconFolder" [label]="'docs.mediaCell.lblRecruitQ3' | translate" [sub]="'docs.mediaCell.subRunning' | translate" />
            <hrm-media-cell [icon]="IconFile" [label]="'docs.mediaCell.lblLaborContract' | translate" [sub]="'docs.mediaCell.subPdf3Pages' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mediaCell.exShapeT' | translate"
          [desc]="'docs.mediaCell.exShapeD' | translate">
          <sg-row [label]="'docs.mediaCell.rowSquare' | translate">
            <hrm-media-cell [src]="logo" [label]="'docs.mediaCell.lblOnboarding' | translate" [sub]="'docs.mediaCell.sub12Members' | translate" />
            <hrm-media-cell [icon]="IconBriefcase" [label]="'docs.mediaCell.lblDellLaptop' | translate" [sub]="'docs.mediaCell.subAssigning' | translate" />
          </sg-row>
          <sg-row [label]="'docs.mediaCell.rowCircle' | translate">
            <hrm-media-cell [icon]="IconBuilding" shape="circle" [label]="'docs.mediaCell.lblVinRetail' | translate" [sub]="'docs.mediaCell.subHqHanoi' | translate" />
            <hrm-media-cell [src]="brand" shape="circle" [label]="'docs.mediaCell.lblDanangBranch' | translate" [sub]="'docs.mediaCell.sub86Staff' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.mediaCell.exManyT' | translate"
          [desc]="'docs.mediaCell.exManyD' | translate">
          <sg-row>
            <div class="col">
              <hrm-media-cell [src]="logo" [label]="'docs.mediaCell.lblOnboarding' | translate" [sub]="'docs.mediaCell.sub12Members' | translate" />
              <hrm-media-cell [icon]="IconFolder" [label]="'docs.mediaCell.lblRecruitQ3' | translate" [sub]="'docs.mediaCell.sub8Members' | translate" />
              <hrm-media-cell [icon]="IconBuilding" [label]="'docs.mediaCell.lblAccountingDept' | translate" [sub]="'docs.mediaCell.sub15Staff' | translate" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;64b37c3b65b9958fe7af5ff8565d208752985a1610f992015853471dd0c65207;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/media-cell.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=media-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMediaCell, { className: "SgDocMediaCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/media-cell.ts", lineNumber: 84 });
})();
export {
  SgDocMediaCell
};
//# sourceMappingURL=chunk-KO2TXU4G.js.map
