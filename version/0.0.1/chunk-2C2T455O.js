import {
  HrmAvatarGroup
} from "./chunk-3EG53QFC.js";
import {
  HrmAvatar
} from "./chunk-DY3W2GRF.js";
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

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/avatar.ts
var _c0 = (a0) => ({ label: a0, route: "hrm/table-cells/user" });
var _c1 = (a0) => [a0];
var SgDocAvatar = class _SgDocAvatar {
  constructor() {
    this.photo = "https://i.pravatar.cc/120?img=12";
    this.team = [
      { src: "https://i.pravatar.cc/120?img=12", name: "Nguy\u1EC5n V\u0103n An" },
      { name: "Tr\u1EA7n Thu H\xE0" },
      { name: "L\xEA Minh Qu\xE2n" },
      { name: "Ph\u1EA1m Thu Trang" },
      { name: "\u0110\u1ED7 H\u1EA3i Nam" },
      { name: "V\u0169 Qu\u1EF3nh Chi" },
      { name: "B\xF9i Kh\xE1nh Linh" },
      { name: "Ho\xE0ng Gia B\u1EA3o" }
    ];
    this.when = [
      "docs.avatar.when1",
      "docs.avatar.when2",
      "docs.avatar.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocAvatar)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocAvatar, selectors: [["sg-doc-avatar"]], decls: 83, vars: 128, consts: [["category", "Content", 3, "title", "related", "desc"], ["sgOverview", ""], [3, "src"], ["colorSeed", "Nguy\u1EC5n An", "text", "NA", 3, "colorful"], ["icon", "user"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [3, "label"], [3, "src", "size"], ["colorSeed", "Nguy\u1EC5n V\u0103n A", "text", "NA", 3, "colorful", "size"], ["colorSeed", "Tr\u1EA7n Thu H\xE0", "text", "TH", 3, "colorful", "size"], ["colorSeed", "L\xEA Minh", "text", "LM", 3, "colorful", "size"], ["colorSeed", "Tr\u1EA7n Th\u1ECB B", "text", "TB", 3, "colorful", "size"], ["colorSeed", "L\xEA V\u0103n C", "text", "LC", 3, "colorful", "size"], ["colorSeed", "Ph\u1EA1m Thu D", "text", "PD", 3, "colorful", "size"], ["colorSeed", "\u0110\u1ED7 Minh E", "text", "\u0110E", 3, "colorful", "size"], ["colorSeed", "V\u0169 H\u1EA3i F", "text", "VF", 3, "colorful", "size"], ["colorSeed", "Ho\xE0ng Gia", "text", "HG", 3, "colorful", "size"], ["colorSeed", "B\xF9i Kh\xE1nh", "text", "BK", 3, "colorful", "size"], ["icon", "user", 3, "size"], ["icon", "team", 3, "size"], ["text", "NA", 3, "size"], ["text", "NA", "shape", "circle", 3, "size"], ["shape", "circle", 3, "src", "size"], ["text", "DA", "shape", "square", 3, "size"], ["icon", "team", "shape", "square", 3, "size"], [3, "items", "max", "size"]], template: function SgDocAvatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementStart(4, "div", 1)(5, "sg-row");
        \u0275\u0275element(6, "hrm-avatar", 2)(7, "hrm-avatar", 3)(8, "hrm-avatar", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "sg-use", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "sg-do");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
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
        \u0275\u0275elementStart(27, "div", 8)(28, "sg-example", 9);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row", 10);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275element(33, "hrm-avatar", 11)(34, "hrm-avatar", 11)(35, "hrm-avatar", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "sg-example", 9);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row");
        \u0275\u0275element(40, "hrm-avatar", 12)(41, "hrm-avatar", 13)(42, "hrm-avatar", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "sg-example", 9);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "sg-row");
        \u0275\u0275element(47, "hrm-avatar", 12)(48, "hrm-avatar", 15)(49, "hrm-avatar", 16)(50, "hrm-avatar", 17)(51, "hrm-avatar", 18)(52, "hrm-avatar", 19)(53, "hrm-avatar", 20)(54, "hrm-avatar", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "sg-example", 9);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementStart(58, "sg-row");
        \u0275\u0275element(59, "hrm-avatar", 22)(60, "hrm-avatar", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "sg-example", 9);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementStart(64, "sg-row", 10);
        \u0275\u0275element(65, "hrm-avatar", 24)(66, "hrm-avatar", 24)(67, "hrm-avatar", 24)(68, "hrm-avatar", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "sg-example", 9);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementStart(72, "sg-row", 10);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275element(74, "hrm-avatar", 25)(75, "hrm-avatar", 26)(76, "hrm-avatar", 27)(77, "hrm-avatar", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "sg-example", 9);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementStart(81, "sg-row");
        \u0275\u0275element(82, "hrm-avatar-group", 29);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 72, "docs.avatar.title"))("related", \u0275\u0275pureFunction1(126, _c1, \u0275\u0275pureFunction1(124, _c0, \u0275\u0275pipeBind1(2, 74, "docs.avatar.relUser"))))("desc", \u0275\u0275pipeBind1(3, 76, "docs.avatar.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.photo);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 78, "docs.avatar.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 80, "docs.avatar.behavior"))("avoid", \u0275\u0275pipeBind1(13, 82, "docs.avatar.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 84, "docs.avatar.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 86, "docs.avatar.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 88, "docs.avatar.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 90, "docs.avatar.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 92, "docs.avatar.exPhotoT"))("desc", \u0275\u0275pipeBind1(30, 94, "docs.avatar.exPhotoD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(32, 96, "docs.avatar.rowSizes"));
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.photo)("size", 32);
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.photo)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.photo)("size", 56);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 98, "docs.avatar.exInitialsT"))("desc", \u0275\u0275pipeBind1(38, 100, "docs.avatar.exInitialsD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(44, 102, "docs.avatar.exColorfulT"))("desc", \u0275\u0275pipeBind1(45, 104, "docs.avatar.exColorfulD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("colorful", true)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(56, 106, "docs.avatar.exIconT"))("desc", \u0275\u0275pipeBind1(57, 108, "docs.avatar.exIconD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(62, 110, "docs.avatar.exSizeT"))("desc", \u0275\u0275pipeBind1(63, 112, "docs.avatar.exSizeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", "24 \xB7 32 \xB7 40 \xB7 56");
        \u0275\u0275advance();
        \u0275\u0275property("size", 24);
        \u0275\u0275advance();
        \u0275\u0275property("size", 32);
        \u0275\u0275advance();
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("size", 56);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(70, 114, "docs.avatar.exShapeT"))("desc", \u0275\u0275pipeBind1(71, 116, "docs.avatar.exShapeD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(73, 118, "docs.avatar.rowShapes"));
        \u0275\u0275advance(2);
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.photo)("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("size", 40);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(79, 120, "docs.avatar.exGroupT"))("desc", \u0275\u0275pipeBind1(80, 122, "docs.avatar.exGroupD"));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.team)("max", 3)("size", 40);
      }
    }, dependencies: [TranslateModule, HrmAvatar, HrmAvatarGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocAvatar, [{
    type: Component,
    args: [{
      selector: "sg-doc-avatar",
      imports: [TranslateModule, HrmAvatar, HrmAvatarGroup, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Content" [title]="'docs.avatar.title' | translate" [related]="[{label:('docs.avatar.relUser' | translate), route:'hrm/table-cells/user'}]" [desc]="'docs.avatar.desc' | translate">

      <div sgOverview>
        <sg-row>
          <hrm-avatar [src]="photo" />
          <hrm-avatar [colorful]="true" colorSeed="Nguy\u1EC5n An" text="NA" />
          <hrm-avatar icon="user" />
        </sg-row>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.avatar.purpose' | translate"
          [when]="when"
          [behavior]="'docs.avatar.behavior' | translate"
          [avoid]="'docs.avatar.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.avatar.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.avatar.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.avatar.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.avatar.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.avatar.exPhotoT' | translate"
          [desc]="'docs.avatar.exPhotoD' | translate">
          <sg-row [label]="'docs.avatar.rowSizes' | translate">
            <hrm-avatar [src]="photo" [size]="32" />
            <hrm-avatar [src]="photo" [size]="40" />
            <hrm-avatar [src]="photo" [size]="56" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exInitialsT' | translate"
          [desc]="'docs.avatar.exInitialsD' | translate">
          <sg-row>
            <hrm-avatar [colorful]="true" colorSeed="Nguy\u1EC5n V\u0103n A" text="NA" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="Tr\u1EA7n Thu H\xE0" text="TH" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="L\xEA Minh" text="LM" [size]="40" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exColorfulT' | translate"
          [desc]="'docs.avatar.exColorfulD' | translate">
          <sg-row>
            <hrm-avatar [colorful]="true" colorSeed="Nguy\u1EC5n V\u0103n A" text="NA" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="Tr\u1EA7n Th\u1ECB B" text="TB" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="L\xEA V\u0103n C" text="LC" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="Ph\u1EA1m Thu D" text="PD" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="\u0110\u1ED7 Minh E" text="\u0110E" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="V\u0169 H\u1EA3i F" text="VF" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="Ho\xE0ng Gia" text="HG" [size]="40" />
            <hrm-avatar [colorful]="true" colorSeed="B\xF9i Kh\xE1nh" text="BK" [size]="40" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exIconT' | translate"
          [desc]="'docs.avatar.exIconD' | translate">
          <sg-row>
            <hrm-avatar icon="user" [size]="40" />
            <hrm-avatar icon="team" [size]="40" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exSizeT' | translate"
          [desc]="'docs.avatar.exSizeD' | translate">
          <sg-row [label]="'24 \xB7 32 \xB7 40 \xB7 56'">
            <hrm-avatar text="NA" [size]="24" />
            <hrm-avatar text="NA" [size]="32" />
            <hrm-avatar text="NA" [size]="40" />
            <hrm-avatar text="NA" [size]="56" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exShapeT' | translate"
          [desc]="'docs.avatar.exShapeD' | translate">
          <sg-row [label]="'docs.avatar.rowShapes' | translate">
            <hrm-avatar text="NA" shape="circle" [size]="40" />
            <hrm-avatar [src]="photo" shape="circle" [size]="40" />
            <hrm-avatar text="DA" shape="square" [size]="40" />
            <hrm-avatar icon="team" shape="square" [size]="40" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.avatar.exGroupT' | translate"
          [desc]="'docs.avatar.exGroupD' | translate">
          <sg-row>
            <hrm-avatar-group [items]="team" [max]="3" [size]="40" />
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocAvatar, { className: "SgDocAvatar", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/avatar.ts", lineNumber: 109 });
})();
export {
  SgDocAvatar
};
//# sourceMappingURL=chunk-2C2T455O.js.map
