import {
  HrmUserCell
} from "./chunk-VLFJLHOW.js";
import "./chunk-DY3W2GRF.js";
import "./chunk-O3JQ6YPX.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
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
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/user-cell.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/data-display/avatar" });
var _c1 = (a0) => [a0];
var SgDocUserCell = class _SgDocUserCell {
  constructor() {
    this.photo = "https://i.pravatar.cc/80?img=15";
    this.when = [
      "docs.userCell.when1",
      "docs.userCell.when2",
      "docs.userCell.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocUserCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocUserCell)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocUserCell, selectors: [["sg-doc-user-cell"]], decls: 72, vars: 104, consts: [["category", "Table Cells", 3, "title", "related", "desc"], ["sgOverview", ""], ["name", "Nguy\u1EC5n V\u0103n An", "sub", "an.nguyen@vnr.com.vn", 3, "src"], ["name", "Tr\u1EA7n Thu H\xE0", 3, "sub"], ["name", "L\xEA Minh Qu\xE2n", 3, "avatarSize"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [1, "col"], ["name", "Nguy\u1EC5n V\u0103n An", 3, "src", "avatarSize"], ["name", "Tr\u1EA7n Thu H\xE0", 3, "avatarSize"], ["name", "L\xEA Minh Qu\xE2n", 3, "sub"], ["name", "Ph\u1EA1m Thu Trang", 3, "sub"], ["label", "online \xB7 away \xB7 busy \xB7 offline"], ["sub", "online", "status", "online", 3, "src", "name"], ["sub", "away", "status", "away", 3, "name"], ["sub", "busy", "status", "busy", 3, "name"], ["sub", "offline", "status", "offline", 3, "name"], ["name", "Nguy\u1EC5n V\u0103n An", 3, "src", "sub"]], template: function SgDocUserCell_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-user-cell", 2)(7, "hrm-user-cell", 3);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "hrm-user-cell", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275element(11, "sg-use", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "sg-do");
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
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "sg-example", 9);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row");
        \u0275\u0275element(30, "hrm-user-cell", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "sg-example", 9);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 10);
        \u0275\u0275element(36, "hrm-user-cell", 11)(37, "hrm-user-cell", 12)(38, "hrm-user-cell", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "sg-example", 9);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row");
        \u0275\u0275element(43, "hrm-user-cell", 3);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275element(45, "hrm-user-cell", 13);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275element(47, "hrm-user-cell", 14);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "sg-example", 9);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row", 15);
        \u0275\u0275element(53, "hrm-user-cell", 16);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275element(55, "hrm-user-cell", 17);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275element(57, "hrm-user-cell", 18);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275element(59, "hrm-user-cell", 19);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "sg-example", 9);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row")(65, "div", 10);
        \u0275\u0275element(66, "hrm-user-cell", 20);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275element(68, "hrm-user-cell", 3);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275element(70, "hrm-user-cell", 13);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 40, "docs.userCell.title"))("related", \u0275\u0275pureFunction1(102, _c1, \u0275\u0275pureFunction1(100, _c0, \u0275\u0275pipeBind1(2, 42, "docs.userCell.relAvatar"))))("desc", \u0275\u0275pipeBind1(3, 44, "docs.userCell.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.photo);
        \u0275\u0275advance();
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(8, 46, "docs.userCell.subHrManager"));
        \u0275\u0275advance(2);
        \u0275\u0275property("avatarSize", 28);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 48, "docs.userCell.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 50, "docs.userCell.behavior"))("avoid", \u0275\u0275pipeBind1(14, 52, "docs.userCell.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 54, "docs.userCell.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 56, "docs.userCell.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 58, "docs.userCell.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 60, "docs.userCell.exFullT"))("desc", \u0275\u0275pipeBind1(28, 62, "docs.userCell.exFullD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.photo);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 64, "docs.userCell.exOneT"))("desc", \u0275\u0275pipeBind1(33, 66, "docs.userCell.exOneD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.photo)("avatarSize", 28);
        \u0275\u0275advance();
        \u0275\u0275property("avatarSize", 28);
        \u0275\u0275advance();
        \u0275\u0275property("avatarSize", 28);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 68, "docs.userCell.exInitialsT"))("desc", \u0275\u0275pipeBind1(41, 70, "docs.userCell.exInitialsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(44, 72, "docs.userCell.subChiefAccountant"));
        \u0275\u0275advance(2);
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(46, 74, "docs.userCell.subItStaff"));
        \u0275\u0275advance(2);
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(48, 76, "docs.userCell.subRecruitment"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 78, "docs.userCell.exStatusT"))("desc", \u0275\u0275pipeBind1(51, 80, "docs.userCell.exStatusD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ctx.photo)("name", \u0275\u0275pipeBind1(54, 82, "docs.userCell.stWorking"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(56, 84, "docs.userCell.stAway"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(58, 86, "docs.userCell.stBusy"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", \u0275\u0275pipeBind1(60, 88, "docs.userCell.stOffline"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 90, "docs.userCell.exManyT"))("desc", \u0275\u0275pipeBind1(63, 92, "docs.userCell.exManyD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.photo)("sub", \u0275\u0275pipeBind1(67, 94, "docs.userCell.subSwEngineer"));
        \u0275\u0275advance(2);
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(69, 96, "docs.userCell.subUxDesign"));
        \u0275\u0275advance(2);
        \u0275\u0275property("sub", \u0275\u0275pipeBind1(71, 98, "docs.userCell.subPm"));
      }
    }, dependencies: [TranslateModule, HrmUserCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=user-cell.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocUserCell, [{
    type: Component,
    args: [{ selector: "sg-doc-user-cell", imports: [TranslateModule, HrmUserCell, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Table Cells" [title]="'docs.userCell.title' | translate" [related]="[{label:('docs.userCell.relAvatar' | translate), route:'hrm/data-display/avatar'}]"
      [desc]="'docs.userCell.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-user-cell [src]="photo" name="Nguy\u1EC5n V\u0103n An" sub="an.nguyen@vnr.com.vn" />
          <hrm-user-cell name="Tr\u1EA7n Thu H\xE0" [sub]="'docs.userCell.subHrManager' | translate" />
          <hrm-user-cell name="L\xEA Minh Qu\xE2n" [avatarSize]="28" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.userCell.purpose' | translate"
          [when]="when"
          [behavior]="'docs.userCell.behavior' | translate"
          [avoid]="'docs.userCell.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.userCell.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.userCell.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.userCell.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.userCell.exFullT' | translate"
          [desc]="'docs.userCell.exFullD' | translate">
          <sg-row>
            <hrm-user-cell [src]="photo" name="Nguy\u1EC5n V\u0103n An" sub="an.nguyen@vnr.com.vn" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.userCell.exOneT' | translate"
          [desc]="'docs.userCell.exOneD' | translate">
          <sg-row>
            <div class="col">
              <hrm-user-cell [src]="photo" name="Nguy\u1EC5n V\u0103n An" [avatarSize]="28" />
              <hrm-user-cell name="Tr\u1EA7n Thu H\xE0" [avatarSize]="28" />
              <hrm-user-cell name="L\xEA Minh Qu\xE2n" [avatarSize]="28" />
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.userCell.exInitialsT' | translate"
          [desc]="'docs.userCell.exInitialsD' | translate">
          <sg-row>
            <hrm-user-cell name="Tr\u1EA7n Thu H\xE0" [sub]="'docs.userCell.subChiefAccountant' | translate" />
            <hrm-user-cell name="L\xEA Minh Qu\xE2n" [sub]="'docs.userCell.subItStaff' | translate" />
            <hrm-user-cell name="Ph\u1EA1m Thu Trang" [sub]="'docs.userCell.subRecruitment' | translate" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.userCell.exStatusT' | translate"
          [desc]="'docs.userCell.exStatusD' | translate">
          <sg-row label="online \xB7 away \xB7 busy \xB7 offline">
            <hrm-user-cell [src]="photo" [name]="'docs.userCell.stWorking' | translate" sub="online" status="online" />
            <hrm-user-cell [name]="'docs.userCell.stAway' | translate" sub="away" status="away" />
            <hrm-user-cell [name]="'docs.userCell.stBusy' | translate" sub="busy" status="busy" />
            <hrm-user-cell [name]="'docs.userCell.stOffline' | translate" sub="offline" status="offline" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.userCell.exManyT' | translate"
          [desc]="'docs.userCell.exManyD' | translate">
          <sg-row>
            <div class="col">
              <hrm-user-cell [src]="photo" name="Nguy\u1EC5n V\u0103n An" [sub]="'docs.userCell.subSwEngineer' | translate" />
              <hrm-user-cell name="Tr\u1EA7n Thu H\xE0" [sub]="'docs.userCell.subUxDesign' | translate" />
              <hrm-user-cell name="L\xEA Minh Qu\xE2n" [sub]="'docs.userCell.subPm' | translate" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;64b37c3b65b9958fe7af5ff8565d208752985a1610f992015853471dd0c65207;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/user-cell.ts */\n.col {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=user-cell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocUserCell, { className: "SgDocUserCell", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/table-cells/user-cell.ts", lineNumber: 91 });
})();
export {
  SgDocUserCell
};
//# sourceMappingURL=chunk-Z77YRBLS.js.map
