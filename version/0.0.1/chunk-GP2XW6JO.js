import {
  TablerIconComponent
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/attendance/attendance-dashboard/attendance-dashboard.ts
var AttendanceDashboard = class _AttendanceDashboard {
  static {
    this.\u0275fac = function AttendanceDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttendanceDashboard)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceDashboard, selectors: [["app-attendance-dashboard"]], decls: 59, vars: 57, consts: [[1, "flex", "flex-col", "gap-4", "border-b", "border-border/70", "px-6", "py-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-[length:var(--fs-22)]", "font-semibold", "tracking-tight", "text-foreground"], [1, "mt-1", "text-[length:var(--fs-13)]", "text-muted-foreground"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-lg", "border", "border-border/70", "bg-card", "px-3.5", "py-1.5", "text-[length:var(--fs-13)]", "text-foreground/90", "shadow-[0_1px_2px_rgba(0,0,0,0.03)]", "transition-colors", "hover:bg-accent/60"], ["icon", "calendar", 1, "text-muted-foreground", 3, "size"], ["icon", "lock", 1, "text-muted-foreground", 3, "size"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-lg", "bg-primary", "px-3.5", "py-1.5", "text-[length:var(--fs-13)]", "font-medium", "text-primary-foreground", "shadow-[0_1px_2px_rgba(0,0,0,0.08)]", "transition-opacity", "hover:opacity-90"], ["icon", "download", 3, "size"], ["icon", "chevron-down", 1, "opacity-80", 3, "size"], [1, "flex", "flex-wrap", "items-center", "gap-1"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-md", "px-2", "py-1.5", "text-[length:var(--fs-13)]", "text-foreground/85", "transition-colors", "hover:bg-accent/50"], ["icon", "chevron-down", 1, "text-muted-foreground/70", 3, "size"], [1, "h-3.5", "w-px", "bg-border/70"], ["icon", "building", 1, "text-muted-foreground", 3, "size"], ["icon", "map-pin", 1, "text-muted-foreground", 3, "size"], ["icon", "clock", 1, "text-muted-foreground", 3, "size"], [1, "relative", "ml-2"], ["icon", "search", 1, "pointer-events-none", "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "text-muted-foreground/70", 3, "size"], ["type", "text", 1, "w-48", "rounded-md", "border", "border-transparent", "bg-accent/40", "py-1.5", "pl-8", "pr-3", "text-[length:var(--fs-13)]", "text-foreground", "placeholder:text-muted-foreground/80", "transition-colors", "focus:border-border", "focus:bg-card", "focus:outline-none", 3, "placeholder"], ["type", "button", 1, "ml-auto", "flex", "items-center", "gap-1.5", "rounded-md", "px-2", "py-1.5", "text-[length:var(--fs-13)]", "text-foreground/85", "transition-colors", "hover:bg-accent/50"], ["icon", "filter", 1, "text-muted-foreground", 3, "size"]], template: function AttendanceDashboard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "button", 5);
        \u0275\u0275element(11, "tabler-icon", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 5);
        \u0275\u0275element(15, "tabler-icon", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 8);
        \u0275\u0275element(19, "tabler-icon", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275element(22, "tabler-icon", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 11)(24, "button", 12);
        \u0275\u0275element(25, "tabler-icon", 6);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275element(28, "tabler-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "span", 14);
        \u0275\u0275elementStart(30, "button", 12);
        \u0275\u0275element(31, "tabler-icon", 15);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275element(35, "tabler-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "span", 14);
        \u0275\u0275elementStart(37, "button", 12);
        \u0275\u0275element(38, "tabler-icon", 16);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275element(42, "tabler-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "span", 14);
        \u0275\u0275elementStart(44, "button", 12);
        \u0275\u0275element(45, "tabler-icon", 17);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275element(49, "tabler-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 18);
        \u0275\u0275element(51, "tabler-icon", 19)(52, "input", 20);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 21);
        \u0275\u0275element(55, "tabler-icon", 22);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275element(58, "tabler-icon", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 29, "att.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 31, "att.subtitle"));
        \u0275\u0275advance(4);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 33, "att.action.createSchedule"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 35, "att.action.lockAttendance"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 37, "att.action.exportReport"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("size", 13);
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 39, "att.filter.month"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("size", 13);
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(33, 41, "att.filter.department"), ": ", \u0275\u0275pipeBind1(34, 43, "common.all"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 13);
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(40, 45, "att.filter.branch"), ": ", \u0275\u0275pipeBind1(41, 47, "common.all"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 13);
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(47, 49, "att.filter.shift"), ": ", \u0275\u0275pipeBind1(48, 51, "common.all"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 13);
        \u0275\u0275advance(2);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(53, 53, "att.searchPlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275property("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 55, "att.advancedFilter"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("size", 13);
      }
    }, dependencies: [TablerIconComponent, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceDashboard, [{
    type: Component,
    args: [{ selector: "app-attendance-dashboard", imports: [TablerIconComponent, TranslateModule], template: `<div class="flex flex-col gap-4 border-b border-border/70 px-6 py-5">
  <!-- ============================================================
       Header \u2014 title/subtitle left, primary actions right
       ============================================================ -->
  <div class="flex flex-wrap items-start justify-between gap-3">
    <div>
      <h1 class="text-[length:var(--fs-22)] font-semibold tracking-tight text-foreground">{{ 'att.title' | translate }}</h1>
      <p class="mt-1 text-[length:var(--fs-13)] text-muted-foreground">{{ 'att.subtitle' | translate }}</p>
    </div>
    <div class="flex items-center gap-2">
      <button type="button"
        class="flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3.5 py-1.5 text-[length:var(--fs-13)] text-foreground/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors hover:bg-accent/60">
        <tabler-icon icon="calendar" [size]="15" class="text-muted-foreground" />
        {{ 'att.action.createSchedule' | translate }}
      </button>
      <button type="button"
        class="flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3.5 py-1.5 text-[length:var(--fs-13)] text-foreground/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors hover:bg-accent/60">
        <tabler-icon icon="lock" [size]="15" class="text-muted-foreground" />
        {{ 'att.action.lockAttendance' | translate }}
      </button>
      <button type="button"
        class="flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-[length:var(--fs-13)] font-medium text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90">
        <tabler-icon icon="download" [size]="15" />
        {{ 'att.action.exportReport' | translate }}
        <tabler-icon icon="chevron-down" [size]="13" class="opacity-80" />
      </button>
    </div>
  </div>

  <!-- ============================================================
       Filter bar \u2014 month / department / branch / shift / search / advanced
       Borderless, text-first controls \u2014 a hairline divider under the whole
       toolbar (above) gives the separation instead of boxing every chip.
       ============================================================ -->
  <div class="flex flex-wrap items-center gap-1">
    <button type="button"
      class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[length:var(--fs-13)] text-foreground/85 transition-colors hover:bg-accent/50">
      <tabler-icon icon="calendar" [size]="15" class="text-muted-foreground" />
      {{ 'att.filter.month' | translate }}
      <tabler-icon icon="chevron-down" [size]="13" class="text-muted-foreground/70" />
    </button>
    <span class="h-3.5 w-px bg-border/70"></span>
    <button type="button"
      class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[length:var(--fs-13)] text-foreground/85 transition-colors hover:bg-accent/50">
      <tabler-icon icon="building" [size]="15" class="text-muted-foreground" />
      {{ 'att.filter.department' | translate }}: {{ 'common.all' | translate }}
      <tabler-icon icon="chevron-down" [size]="13" class="text-muted-foreground/70" />
    </button>
    <span class="h-3.5 w-px bg-border/70"></span>
    <button type="button"
      class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[length:var(--fs-13)] text-foreground/85 transition-colors hover:bg-accent/50">
      <tabler-icon icon="map-pin" [size]="15" class="text-muted-foreground" />
      {{ 'att.filter.branch' | translate }}: {{ 'common.all' | translate }}
      <tabler-icon icon="chevron-down" [size]="13" class="text-muted-foreground/70" />
    </button>
    <span class="h-3.5 w-px bg-border/70"></span>
    <button type="button"
      class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[length:var(--fs-13)] text-foreground/85 transition-colors hover:bg-accent/50">
      <tabler-icon icon="clock" [size]="15" class="text-muted-foreground" />
      {{ 'att.filter.shift' | translate }}: {{ 'common.all' | translate }}
      <tabler-icon icon="chevron-down" [size]="13" class="text-muted-foreground/70" />
    </button>

    <div class="relative ml-2">
      <tabler-icon icon="search" [size]="15" class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/70" />
      <input type="text" [placeholder]="'att.searchPlaceholder' | translate"
        class="w-48 rounded-md border border-transparent bg-accent/40 py-1.5 pl-8 pr-3 text-[length:var(--fs-13)] text-foreground placeholder:text-muted-foreground/80 transition-colors focus:border-border focus:bg-card focus:outline-none" />
    </div>

    <button type="button"
      class="ml-auto flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[length:var(--fs-13)] text-foreground/85 transition-colors hover:bg-accent/50">
      <tabler-icon icon="filter" [size]="15" class="text-muted-foreground" />
      {{ 'att.advancedFilter' | translate }}
      <tabler-icon icon="chevron-down" [size]="13" class="text-muted-foreground/70" />
    </button>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceDashboard, { className: "AttendanceDashboard", filePath: "apps/ds-demo/src/app/features/attendance/attendance-dashboard/attendance-dashboard.ts", lineNumber: 10 });
})();
export {
  AttendanceDashboard
};
//# sourceMappingURL=chunk-GP2XW6JO.js.map
