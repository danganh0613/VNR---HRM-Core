import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/sg-theme.ts
var RADIUS_SCALE = {
  sharp: 0.5,
  default: 1,
  rounded: 1.6
};
var FONT_SIZE_SCALE = {
  sm: 0.875,
  default: 1,
  lg: 1.125
};
var BRAND_PRESETS = [
  { key: "blue", hex: "#2267E8" },
  // default ship
  { key: "indigo", hex: "#4F46E5" },
  { key: "teal", hex: "#0D9488" },
  { key: "green", hex: "#16A34A" },
  { key: "rose", hex: "#E11D48" },
  { key: "orange", hex: "#EA580C" },
  { key: "slate", hex: "#475569" }
];
var FONT_OPTIONS = [
  { key: "roboto", label: "Roboto" },
  { key: "inter", label: "Inter" },
  { key: "bevietnam", label: "Be Vietnam Pro" },
  { key: "sfpro", label: "SF Pro" }
];
var TOKEN_BRAND = "#2267E8";
var DEFAULT_BRAND = "#16A34A";
var DEFAULT_THEME = "dark";
var SgThemeService = class _SgThemeService {
  constructor() {
    this.theme = signal(this.readTheme(), ...ngDevMode ? [{ debugName: "theme" }] : (
      /* istanbul ignore next */
      []
    ));
    this.density = signal(this.readDensity(), ...ngDevMode ? [{ debugName: "density" }] : (
      /* istanbul ignore next */
      []
    ));
    this.brand = signal(this.read("sg.brand") || DEFAULT_BRAND, ...ngDevMode ? [{ debugName: "brand" }] : (
      /* istanbul ignore next */
      []
    ));
    this.neutral = signal(this.read("sg.neutral") === "gray" ? "gray" : "slate", ...ngDevMode ? [{ debugName: "neutral" }] : (
      /* istanbul ignore next */
      []
    ));
    this.font = signal(this.readFont(), ...ngDevMode ? [{ debugName: "font" }] : (
      /* istanbul ignore next */
      []
    ));
    this.radius = signal(this.readRadius(), ...ngDevMode ? [{ debugName: "radius" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fontSize = signal(this.readFontSize(), ...ngDevMode ? [{ debugName: "fontSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cursorFx = signal(this.read("sg.cursorFx") === "on", ...ngDevMode ? [{ debugName: "cursorFx" }] : (
      /* istanbul ignore next */
      []
    ));
    this.applyTheme(this.theme());
    this.applyDensity(this.density());
    this.applyBrand(this.brand());
    this.applyNeutral(this.neutral());
    this.applyFont(this.font());
    this.applyRadius(this.radius());
    this.applyFontSize(this.fontSize());
  }
  setTheme(t) {
    this.theme.set(t);
    this.applyTheme(t);
    this.save("sg.theme", t);
  }
  toggleTheme() {
    this.setTheme(this.theme() === "dark" ? "light" : "dark");
  }
  /** Đổi theme kèm hiệu ứng vòng tròn thu phóng (View Transitions API), tâm = điểm bấm (x,y).
   *  Trình duyệt không hỗ trợ hoặc user giảm chuyển động → đổi thẳng, không animation. */
  setThemeAnimated(t, x, y) {
    const doc = document;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce || t === this.theme()) {
      this.setTheme(t);
      return;
    }
    const cx = x ?? window.innerWidth - 40;
    const cy = y ?? 24;
    const r = Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy));
    const vt = doc.startViewTransition(() => this.setTheme(t));
    vt.ready.then(() => {
      document.documentElement.animate({ clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${r}px at ${cx}px ${cy}px)`] }, { duration: 560, easing: "cubic-bezier(.22,.61,.36,1)", pseudoElement: "::view-transition-new(root)" });
    }).catch(() => {
    });
  }
  setDensity(d) {
    this.density.set(d);
    this.applyDensity(d);
    this.save("sg.density", d);
  }
  setCursorFx(on) {
    this.cursorFx.set(on);
    this.save("sg.cursorFx", on ? "on" : "off");
  }
  setBrand(hex) {
    this.brand.set(hex);
    this.applyBrand(hex);
    this.save("sg.brand", hex);
  }
  setNeutral(n) {
    this.neutral.set(n);
    this.applyNeutral(n);
    this.save("sg.neutral", n);
  }
  setFont(f) {
    this.font.set(f);
    this.applyFont(f);
    this.save("sg.font", f);
  }
  setRadius(r) {
    this.radius.set(r);
    this.applyRadius(r);
    this.save("sg.radius", r);
  }
  setFontSize(s) {
    this.fontSize.set(s);
    this.applyFontSize(s);
    this.save("sg.fontSize", s);
  }
  applyTheme(t) {
    document.documentElement.classList.toggle("dark", t === "dark");
  }
  applyDensity(d) {
    document.documentElement.setAttribute("data-density", d);
  }
  applyBrand(hex) {
    const root = document.documentElement;
    if (hex.toUpperCase() === TOKEN_BRAND)
      root.style.removeProperty("--primary-base");
    else
      root.style.setProperty("--primary-base", hex);
  }
  applyNeutral(n) {
    document.documentElement.setAttribute("data-neutral", n);
  }
  applyFont(f) {
    document.documentElement.style.setProperty("--font-sans", `var(--font-${f})`);
  }
  applyRadius(r) {
    const root = document.documentElement;
    if (r === "default")
      root.style.removeProperty("--radius-scale");
    else
      root.style.setProperty("--radius-scale", String(RADIUS_SCALE[r]));
  }
  applyFontSize(s) {
    const root = document.documentElement;
    if (s === "default")
      root.style.removeProperty("--font-scale");
    else
      root.style.setProperty("--font-scale", String(FONT_SIZE_SCALE[s]));
  }
  readTheme() {
    const v = this.read("sg.theme");
    return v === "light" || v === "dark" ? v : DEFAULT_THEME;
  }
  readDensity() {
    const v = this.read("sg.density");
    if (v === "comfortable" || v === "spacious")
      return "spacious";
    return v === "compact" ? "compact" : "balanced";
  }
  readFont() {
    const v = this.read("sg.font");
    return v === "inter" || v === "bevietnam" || v === "sfpro" ? v : "roboto";
  }
  readRadius() {
    const v = this.read("sg.radius");
    return v === "sharp" || v === "rounded" ? v : "default";
  }
  readFontSize() {
    const v = this.read("sg.fontSize");
    return v === "sm" || v === "lg" ? v : "default";
  }
  read(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  save(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch {
    }
  }
  static {
    this.\u0275fac = function SgThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SgThemeService, factory: _SgThemeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  BRAND_PRESETS,
  FONT_OPTIONS,
  SgThemeService
};
//# sourceMappingURL=chunk-ONBXQHVZ.js.map
