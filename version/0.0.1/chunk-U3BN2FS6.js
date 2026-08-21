import {
  HrmSparkline
} from "./chunk-H6K466CF.js";
import {
  HrmStatCard
} from "./chunk-7T7OQRVH.js";
import {
  SgDemo,
  SgDo,
  SgDoc,
  SgDont,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import {
  ActivityHeartbeat,
  Calendar,
  ClipboardCheck,
  Clock,
  ClockPlus,
  HeartHandshake,
  Pill,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/stat-card.ts
var SgDocStatCard = class _SgDocStatCard {
  constructor() {
    this.IconUsers = Users;
    this.IconClock = Clock;
    this.IconCalendar = Calendar;
    this.IconOt = ClockPlus;
    this.consult = HeartHandshake;
    this.progress = ActivityHeartbeat;
    this.review = Pill;
    this.done = ClipboardCheck;
    this.trendUp = [212, 218, 215, 224, 231, 238, 244, 248];
    this.trendDown = [182, 176, 178, 168, 160, 155, 148, 132];
    this.when = ["docs.statCard.when1", "docs.statCard.when2", "docs.statCard.when3"];
  }
  static {
    this.\u0275fac = function SgDocStatCard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocStatCard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocStatCard, selectors: [["sg-doc-stat-card"]], decls: 85, vars: 161, consts: [["category", "Widget", 3, "title", "desc"], ["sgOverview", ""], [3, "label"], [1, "kpi-grid"], ["tone", "success", "delta", "+3,2%", "deltaTone", "up", 3, "label", "value", "icon"], ["tone", "warning", "delta", "-8", "deltaTone", "down", 3, "label", "value", "icon"], ["tone", "info", "deltaTone", "neutral", 3, "label", "value", "icon", "delta"], ["tone", "primary", "deltaTone", "up", 3, "label", "value", "icon", "delta"], ["variant", "gradient", "gradient", "purple", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "amber", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "yellow", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "teal", 3, "icon", "value", "label"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [1, "kpi-grid2"], ["tone", "primary", "delta", "+7", "deltaTone", "up", 3, "label", "value", "icon"], ["scChart", "", "variant", "area", 3, "data", "width", "height"], ["tone", "warning", "delta", "-18%", "deltaTone", "down", 3, "label", "value", "icon"], ["scChart", "", "color", "var(--error-base)", 3, "data", "width", "height"], ["variant", "gradient", "gradient", "blue", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "cyan", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "pink", 3, "icon", "value", "label"], ["variant", "gradient", "gradient", "indigo", 3, "icon", "value", "label"], ["variant", "gradient", "orientation", "tall", "gradient", "purple", 3, "icon", "value", "label"], ["variant", "gradient", "orientation", "tall", "gradient", "amber", 3, "icon", "value", "label"], ["variant", "gradient", "orientation", "tall", "gradient", "yellow", 3, "icon", "value", "label"], ["orientation", "tall", "tone", "primary", 3, "icon", "value", "label"], ["orientation", "tall", "tone", "warning", 3, "icon", "value", "label"], ["orientation", "tall", "tone", "success", 3, "icon", "value", "label"]], template: function SgDocStatCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "sg-demo", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275element(7, "hrm-stat-card", 4);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "hrm-stat-card", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275element(11, "hrm-stat-card", 6);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275element(14, "hrm-stat-card", 7);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "sg-demo", 2);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementStart(20, "div", 3);
        \u0275\u0275element(21, "hrm-stat-card", 8);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275element(23, "hrm-stat-card", 9);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275element(25, "hrm-stat-card", 10);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275element(27, "hrm-stat-card", 11);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 12);
        \u0275\u0275element(30, "sg-use", 13);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 14)(35, "sg-do");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "sg-do");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "sg-dont");
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 15)(45, "sg-demo", 2);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementStart(47, "div", 16)(48, "hrm-stat-card", 17);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275element(50, "hrm-sparkline", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "hrm-stat-card", 19);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275element(54, "hrm-sparkline", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "sg-demo", 2);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "div", 3);
        \u0275\u0275element(58, "hrm-stat-card", 21);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275element(60, "hrm-stat-card", 22);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275element(62, "hrm-stat-card", 23);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275element(64, "hrm-stat-card", 24);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "sg-demo", 2);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementStart(69, "div", 3);
        \u0275\u0275element(70, "hrm-stat-card", 25);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275element(72, "hrm-stat-card", 26);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275element(74, "hrm-stat-card", 27);
        \u0275\u0275pipe(75, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "sg-demo", 2);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementStart(78, "div", 3);
        \u0275\u0275element(79, "hrm-stat-card", 28);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275element(81, "hrm-stat-card", 29);
        \u0275\u0275pipe(82, "translate");
        \u0275\u0275element(83, "hrm-stat-card", 30);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 83, "docs.statCard.title"))("desc", \u0275\u0275pipeBind1(2, 85, "docs.statCard.desc"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 87, "docs.statCard.ovDefaultLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 89, "docs.statCard.kOnTime"))("value", "1.248")("icon", ctx.IconUsers);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 91, "docs.statCard.kLate"))("value", 86)("icon", ctx.IconClock);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 93, "docs.statCard.kLeaveToday"))("value", 42)("icon", ctx.IconCalendar)("delta", \u0275\u0275pipeBind1(13, 95, "docs.statCard.dLeavePending"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(15, 97, "docs.statCard.kOtMonth"))("value", \u0275\u0275pipeBind1(16, 99, "docs.statCard.vOtHours"))("icon", ctx.IconOt)("delta", \u0275\u0275pipeBind1(17, 101, "docs.statCard.dOtHours"));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(19, 103, "docs.statCard.ovGradientLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.consult)("value", 1032)("label", \u0275\u0275pipeBind1(22, 105, "docs.statCard.gConsult"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.progress)("value", 132)("label", \u0275\u0275pipeBind1(24, 107, "docs.statCard.gProcessing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.review)("value", 128)("label", \u0275\u0275pipeBind1(26, 109, "docs.statCard.gReview"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.done)("value", 864)("label", \u0275\u0275pipeBind1(28, 111, "docs.statCard.gDone"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(31, 113, "docs.statCard.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(32, 115, "docs.statCard.behavior"))("avoid", \u0275\u0275pipeBind1(33, 117, "docs.statCard.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 119, "docs.statCard.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 121, "docs.statCard.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 123, "docs.statCard.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(46, 125, "docs.statCard.exTrendLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 127, "docs.statCard.sHeadcount"))("value", 248)("icon", ctx.IconUsers);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.trendUp)("width", 72)("height", 34);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(52, 129, "docs.statCard.sOtHours"))("value", \u0275\u0275pipeBind1(53, 131, "docs.statCard.vOtHours2"))("icon", ctx.IconOt);
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.trendDown)("width", 72)("height", 34);
        \u0275\u0275advance();
        \u0275\u0275property("label", \u0275\u0275pipeBind1(56, 133, "docs.statCard.exGradientSetLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.IconUsers)("value", 1596)("label", \u0275\u0275pipeBind1(59, 135, "docs.statCard.gStaff"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.IconCalendar)("value", 42)("label", \u0275\u0275pipeBind1(61, 137, "docs.statCard.gLeave"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.done)("value", 87)("label", \u0275\u0275pipeBind1(63, 139, "docs.statCard.gApproved"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.IconOt)("value", \u0275\u0275pipeBind1(65, 141, "docs.statCard.vOtShort"))("label", \u0275\u0275pipeBind1(66, 143, "docs.statCard.gOt"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(68, 145, "docs.statCard.exGradientTallLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.consult)("value", 1032)("label", \u0275\u0275pipeBind1(71, 147, "docs.statCard.gConsult"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.progress)("value", 132)("label", \u0275\u0275pipeBind1(73, 149, "docs.statCard.gProcessing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.review)("value", 128)("label", \u0275\u0275pipeBind1(75, 151, "docs.statCard.gReview"));
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(77, 153, "docs.statCard.exWhiteTallLabel"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.consult)("value", 1032)("label", \u0275\u0275pipeBind1(80, 155, "docs.statCard.gConsult"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.progress)("value", 132)("label", \u0275\u0275pipeBind1(82, 157, "docs.statCard.gProcessing"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.review)("value", 128)("label", \u0275\u0275pipeBind1(84, 159, "docs.statCard.gReview"));
      }
    }, dependencies: [TranslateModule, HrmStatCard, HrmSparkline, SgDoc, SgDemo, SgUse, SgDo, SgDont, TranslatePipe], styles: ["\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 14px;\n  width: 100%;\n}\n.kpi-grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=stat-card.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocStatCard, [{
    type: Component,
    args: [{ selector: "sg-doc-stat-card", imports: [TranslateModule, HrmStatCard, HrmSparkline, SgDoc, SgDemo, SgUse, SgDo, SgDont], template: `
    <sg-doc category="Widget" [title]="'docs.statCard.title' | translate" [desc]="'docs.statCard.desc' | translate">

      <div sgOverview>
        <sg-demo [label]="'docs.statCard.ovDefaultLabel' | translate">
          <div class="kpi-grid">
            <hrm-stat-card [label]="'docs.statCard.kOnTime' | translate" [value]="'1.248'" [icon]="IconUsers" tone="success" delta="+3,2%" deltaTone="up" />
            <hrm-stat-card [label]="'docs.statCard.kLate' | translate" [value]="86" [icon]="IconClock" tone="warning" delta="-8" deltaTone="down" />
            <hrm-stat-card [label]="'docs.statCard.kLeaveToday' | translate" [value]="42" [icon]="IconCalendar" tone="info" [delta]="'docs.statCard.dLeavePending' | translate" deltaTone="neutral" />
            <hrm-stat-card [label]="'docs.statCard.kOtMonth' | translate" [value]="'docs.statCard.vOtHours' | translate" [icon]="IconOt" tone="primary" [delta]="'docs.statCard.dOtHours' | translate" deltaTone="up" />
          </div>
        </sg-demo>

        <sg-demo [label]="'docs.statCard.ovGradientLabel' | translate">
          <div class="kpi-grid">
            <hrm-stat-card variant="gradient" gradient="purple" [icon]="consult" [value]="1032" [label]="'docs.statCard.gConsult' | translate" />
            <hrm-stat-card variant="gradient" gradient="amber" [icon]="progress" [value]="132" [label]="'docs.statCard.gProcessing' | translate" />
            <hrm-stat-card variant="gradient" gradient="yellow" [icon]="review" [value]="128" [label]="'docs.statCard.gReview' | translate" />
            <hrm-stat-card variant="gradient" gradient="teal" [icon]="done" [value]="864" [label]="'docs.statCard.gDone' | translate" />
          </div>
        </sg-demo>
      </div>

      <div sgUsage>
        <sg-use [purpose]="'docs.statCard.purpose' | translate" [when]="when"
          [behavior]="'docs.statCard.behavior' | translate"
          [avoid]="'docs.statCard.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.statCard.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.statCard.do2' | translate }}</sg-do>
        <sg-dont>{{ 'docs.statCard.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-demo [label]="'docs.statCard.exTrendLabel' | translate">
          <div class="kpi-grid2">
            <hrm-stat-card [label]="'docs.statCard.sHeadcount' | translate" [value]="248" [icon]="IconUsers" tone="primary" delta="+7" deltaTone="up">
              <hrm-sparkline scChart [data]="trendUp" variant="area" [width]="72" [height]="34" />
            </hrm-stat-card>
            <hrm-stat-card [label]="'docs.statCard.sOtHours' | translate" [value]="'docs.statCard.vOtHours2' | translate" [icon]="IconOt" tone="warning" delta="-18%" deltaTone="down">
              <hrm-sparkline scChart [data]="trendDown" [width]="72" [height]="34" color="var(--error-base)" />
            </hrm-stat-card>
          </div>
        </sg-demo>

        <sg-demo [label]="'docs.statCard.exGradientSetLabel' | translate">
          <div class="kpi-grid">
            <hrm-stat-card variant="gradient" gradient="blue" [icon]="IconUsers" [value]="1596" [label]="'docs.statCard.gStaff' | translate" />
            <hrm-stat-card variant="gradient" gradient="cyan" [icon]="IconCalendar" [value]="42" [label]="'docs.statCard.gLeave' | translate" />
            <hrm-stat-card variant="gradient" gradient="pink" [icon]="done" [value]="87" [label]="'docs.statCard.gApproved' | translate" />
            <hrm-stat-card variant="gradient" gradient="indigo" [icon]="IconOt" [value]="'docs.statCard.vOtShort' | translate" [label]="'docs.statCard.gOt' | translate" />
          </div>
        </sg-demo>

        <sg-demo [label]="'docs.statCard.exGradientTallLabel' | translate">
          <div class="kpi-grid">
            <hrm-stat-card variant="gradient" orientation="tall" gradient="purple" [icon]="consult" [value]="1032" [label]="'docs.statCard.gConsult' | translate" />
            <hrm-stat-card variant="gradient" orientation="tall" gradient="amber" [icon]="progress" [value]="132" [label]="'docs.statCard.gProcessing' | translate" />
            <hrm-stat-card variant="gradient" orientation="tall" gradient="yellow" [icon]="review" [value]="128" [label]="'docs.statCard.gReview' | translate" />
          </div>
        </sg-demo>

        <sg-demo [label]="'docs.statCard.exWhiteTallLabel' | translate">
          <div class="kpi-grid">
            <hrm-stat-card orientation="tall" [icon]="consult" tone="primary" [value]="1032" [label]="'docs.statCard.gConsult' | translate" />
            <hrm-stat-card orientation="tall" [icon]="progress" tone="warning" [value]="132" [label]="'docs.statCard.gProcessing' | translate" />
            <hrm-stat-card orientation="tall" [icon]="review" tone="success" [value]="128" [label]="'docs.statCard.gReview' | translate" />
          </div>
        </sg-demo>
      </div>

    </sg-doc>`, styles: ["/* angular:styles/component:css;2ec35f97c62ed4e06f4029c52f29c6c3c88bb22d8467ed8829b3a100796af232;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/stat-card.ts */\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 14px;\n  width: 100%;\n}\n.kpi-grid2 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=stat-card.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocStatCard, { className: "SgDocStatCard", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/stat-card.ts", lineNumber: 93 });
})();
export {
  SgDocStatCard
};
//# sourceMappingURL=chunk-U3BN2FS6.js.map
