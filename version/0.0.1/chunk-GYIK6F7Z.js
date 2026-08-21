import {
  HrmList
} from "./chunk-7RFTKHDO.js";
import "./chunk-MNAWEQD6.js";
import "./chunk-MT7CL62E.js";
import "./chunk-O3JQ6YPX.js";
import "./chunk-6UBYRFB4.js";
import "./chunk-B5XVGUQ7.js";
import "./chunk-ZQHLZVTS.js";
import "./chunk-WLI7HIYI.js";
import "./chunk-ZUH7BZUU.js";
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
import "./chunk-NXJVNWYP.js";
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
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/list.ts
var SgDocList = class _SgDocList {
  constructor() {
    this.staff = [
      { title: "Nguy\u1EC5n V\u0103n A", description: "Tr\u01B0\u1EDFng ph\xF2ng Nh\xE2n s\u1EF1" },
      { title: "Tr\u1EA7n Th\u1ECB B", description: "Nh\xE2n vi\xEAn K\u1EF9 thu\u1EADt" },
      { title: "L\xEA V\u0103n C", description: "Th\u1EF1c t\u1EADp T\xE0i ch\xEDnh" }
    ];
    this.staffAvatar = [
      { avatar: "A", title: "Nguy\u1EC5n V\u0103n A", description: "Tr\u01B0\u1EDFng ph\xF2ng Nh\xE2n s\u1EF1" },
      { avatar: "B", title: "Tr\u1EA7n Th\u1ECB B", description: "Nh\xE2n vi\xEAn K\u1EF9 thu\u1EADt" },
      { avatar: "C", title: "L\xEA V\u0103n C", description: "Th\u1EF1c t\u1EADp T\xE0i ch\xEDnh" }
    ];
    this.activity = [
      { avatar: "A", title: "Nguy\u1EC5n V\u0103n A", description: "Ch\u1EA5m c\xF4ng v\xE0o l\xFAc 08:00", extra: "\u0110ang l\xE0m vi\u1EC7c" },
      { avatar: "B", title: "Tr\u1EA7n Th\u1ECB B", description: "G\u1EEDi \u0111\u01A1n xin ngh\u1EC9 ph\xE9p", extra: "10 ph\xFAt tr\u01B0\u1EDBc" },
      { avatar: "C", title: "L\xEA V\u0103n C", description: "C\u1EADp nh\u1EADt h\u1ED3 s\u01A1 c\xE1 nh\xE2n", extra: "H\xF4m qua" }
    ];
    this.when = [
      "docs.list.when1",
      "docs.list.when2",
      "docs.list.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocList)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocList, selectors: [["sg-doc-list"]], decls: 51, vars: 63, consts: [["category", "Table & List", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], [2, "width", "100%", 3, "items"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", 3, "items", "header", "footer"]], template: function SgDocList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
        \u0275\u0275element(5, "hrm-list", 3);
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
        \u0275\u0275elementStart(18, "sg-dont");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-dont");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 8)(25, "sg-example", 9);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementStart(28, "sg-row")(29, "div", 2);
        \u0275\u0275element(30, "hrm-list", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "sg-example", 9);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementStart(34, "sg-row")(35, "div", 2);
        \u0275\u0275element(36, "hrm-list", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "sg-example", 9);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275elementStart(40, "sg-row")(41, "div", 2);
        \u0275\u0275element(42, "hrm-list", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "sg-example", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row")(47, "div", 2);
        \u0275\u0275element(48, "hrm-list", 10);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 25, "docs.list.title"))("desc", \u0275\u0275pipeBind1(2, 27, "docs.list.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.staff);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(8, 29, "docs.list.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(9, 31, "docs.list.behavior"))("avoid", \u0275\u0275pipeBind1(10, 33, "docs.list.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(14, 35, "docs.list.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 37, "docs.list.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 39, "docs.list.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 41, "docs.list.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 43, "docs.list.ex1T"))("desc", \u0275\u0275pipeBind1(27, 45, "docs.list.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.staff);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 47, "docs.list.ex2T"))("desc", \u0275\u0275pipeBind1(33, 49, "docs.list.ex2D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.staffAvatar);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(38, 51, "docs.list.ex3T"))("desc", \u0275\u0275pipeBind1(39, 53, "docs.list.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.activity);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 55, "docs.list.ex4T"))("desc", \u0275\u0275pipeBind1(45, 57, "docs.list.ex4D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("items", ctx.staff)("header", \u0275\u0275pipeBind1(49, 59, "docs.list.ex4Header"))("footer", \u0275\u0275pipeBind1(50, 61, "docs.list.ex4Footer"));
      }
    }, dependencies: [TranslateModule, HrmList, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocList, [{
    type: Component,
    args: [{
      selector: "sg-doc-list",
      imports: [TranslateModule, HrmList, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Table & List" [title]="'docs.list.title' | translate" [desc]="'docs.list.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-list [items]="staff" style="width:100%" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.list.purpose' | translate"
          [when]="when"
          [behavior]="'docs.list.behavior' | translate"
          [avoid]="'docs.list.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.list.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.list.do2' | translate"></span></sg-do>
        <sg-dont>{{ 'docs.list.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.list.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.list.ex1T' | translate"
          [desc]="'docs.list.ex1D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px"><hrm-list [items]="staff" style="width:100%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.list.ex2T' | translate"
          [desc]="'docs.list.ex2D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px"><hrm-list [items]="staffAvatar" style="width:100%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.list.ex3T' | translate"
          [desc]="'docs.list.ex3D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px"><hrm-list [items]="activity" style="width:100%" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.list.ex4T' | translate"
          [desc]="'docs.list.ex4D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-list [items]="staff" [header]="'docs.list.ex4Header' | translate" [footer]="'docs.list.ex4Footer' | translate" style="width:100%" />
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocList, { className: "SgDocList", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/list.ts", lineNumber: 70 });
})();
export {
  SgDocList
};
//# sourceMappingURL=chunk-GYIK6F7Z.js.map
