// apps/ds-demo/src/app/features/styleguide/sg-tokens.ts
var ref = (v, label = v.replace(/^--/, "")) => ({ var: v, label });
function readCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
var TAG_HUES = ["gray", "blue", "cyan", "green", "yellow", "orange", "red", "pink", "purple", "teal"];
var NEUTRAL_STEPS = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var NEUTRAL_RAMPS = [
  { name: "Slate", note: "Neutral m\u1EB7c \u0111\u1ECBnh", steps: NEUTRAL_STEPS.map((s) => ref(`--slate-${s}`, String(s))) },
  { name: "Gray", note: "Classic \u2014 optional (config \u0111\u1ED5i)", steps: NEUTRAL_STEPS.map((s) => ref(`--gray-${s}`, String(s))) }
];
var HUE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var HUE_RAMPS = [
  { name: "Blue", note: "information", steps: HUE_STEPS.map((s) => ref(`--blue-${s}`, String(s))) },
  { name: "Green", note: "success", steps: HUE_STEPS.map((s) => ref(`--green-${s}`, String(s))) },
  { name: "Amber", note: "warning", steps: HUE_STEPS.map((s) => ref(`--amber-${s}`, String(s))) },
  { name: "Red", note: "error", steps: HUE_STEPS.map((s) => ref(`--red-${s}`, String(s))) },
  { name: "Yellow", note: "away", steps: HUE_STEPS.map((s) => ref(`--yellow-${s}`, String(s))) },
  { name: "Purple", note: "feature", steps: HUE_STEPS.map((s) => ref(`--purple-${s}`, String(s))) },
  { name: "Teal", note: "stable", steps: HUE_STEPS.map((s) => ref(`--teal-${s}`, String(s))) },
  { name: "Cyan", note: "highlighted", steps: HUE_STEPS.map((s) => ref(`--cyan-${s}`, String(s))) },
  { name: "Pink", note: "social", steps: HUE_STEPS.map((s) => ref(`--pink-${s}`, String(s))) }
];
var SEMANTIC_GROUPS = [
  {
    label: "Surface \u2014 N\u1EC1n",
    note: "N\u1EC1n app \u2192 surface \u2192 l\u1EDBp n\u1ED5i. \u0110i t\u1EEB nh\u1EA1t (bg-app) t\u1EDBi \u0111\u1EADm (inverse).",
    items: ["--bg-app", "--bg-surface", "--bg-surface-subtle", "--bg-surface-muted", "--bg-surface-elevated", "--bg-inverse"].map((v) => ref(v))
  },
  {
    label: "Text \u2014 Ch\u1EEF",
    note: "Contrast so v\u1EDBi --bg-surface. soft/disabled l\xE0 phi-v\u0103n-b\u1EA3n (placeholder/disabled) \u2192 FAIL l\xE0 ch\u1EE7 \u0111\xEDch.",
    contrastVs: "--bg-surface",
    items: ["--text-strong", "--text-body", "--text-sub", "--text-soft", "--text-disabled", "--text-inverse", "--text-on-primary"].map((v) => ref(v))
  },
  {
    label: "Icon \u2014 Bi\u1EC3u t\u01B0\u1EE3ng",
    note: "M\xE0u icon t\xE1ch ri\xEAng kh\u1ECFi text (ch\u1EC9nh \u0111\u1ED9 \u0111\u1EADm \u0111\u1ED9c l\u1EADp). primary/secondary = icon ch\u1EE9c n\u0103ng; accent = mang brand. T\u1EF1 flip Light/Dark.",
    contrastVs: "--bg-surface",
    items: ["--icon-primary", "--icon-secondary", "--icon-disabled", "--icon-accent", "--icon-on-primary"].map((v) => ref(v))
  },
  {
    label: "Border \u2014 Vi\u1EC1n",
    note: "input/emphasized = vi\u1EC1n ch\u1EE9c n\u0103ng \u22653:1 (checkbox/radio/input). sub/soft = divider trang tr\xED (kh\xF4ng c\u1EA7n 3:1).",
    contrastVs: "--bg-surface",
    items: ["--border-input", "--border-emphasized", "--border-strong", "--border-sub", "--border-soft", "--border-focus"].map((v) => ref(v))
  },
  {
    label: "Brand \u2014 Th\u01B0\u01A1ng hi\u1EC7u",
    note: "\u0110\u1ED5i 1 bi\u1EBFn --primary-base \u2192 hover/pressed/bg/border/ring t\u1EF1 ph\xE1i sinh.",
    items: ["--primary-base", "--primary-hover", "--primary-pressed", "--primary-bg-soft", "--primary-bg-subtle", "--primary-border", "--primary-focus-ring", "--primary-foreground"].map((v) => ref(v))
  }
];
var STATUS_ROWS = [
  { name: "Success \xB7 Th\xE0nh c\xF4ng", swatches: [
    { var: "--success-base", role: "Solid" },
    { var: "--success-bg-light", role: "N\u1EC1n" },
    { var: "--success-border-light", role: "Vi\u1EC1n" },
    { var: "--success-text-light", role: "Ch\u1EEF", contrast: true },
    { var: "--success-on", role: "On" }
  ] },
  { name: "Warning \xB7 C\u1EA3nh b\xE1o", swatches: [
    { var: "--warning-base", role: "Solid" },
    { var: "--warning-bg-light", role: "N\u1EC1n" },
    { var: "--warning-border-light", role: "Vi\u1EC1n" },
    { var: "--warning-text-light", role: "Ch\u1EEF", contrast: true },
    { var: "--warning-on", role: "On" }
  ] },
  { name: "Error \xB7 L\u1ED7i", swatches: [
    { var: "--error-base", role: "Solid" },
    { var: "--error-bg-light", role: "N\u1EC1n" },
    { var: "--error-border-light", role: "Vi\u1EC1n" },
    { var: "--error-text-light", role: "Ch\u1EEF", contrast: true },
    { var: "--error-on", role: "On" }
  ] },
  { name: "Info \xB7 Th\xF4ng tin", swatches: [
    { var: "--info-base", role: "Solid" },
    { var: "--info-bg-light", role: "N\u1EC1n" },
    { var: "--info-border-light", role: "Vi\u1EC1n" },
    { var: "--info-text-light", role: "Ch\u1EEF", contrast: true },
    { var: "--info-on", role: "On" }
  ] },
  { name: "Away \xB7 V\u1EAFng (presence)", swatches: [
    { var: "--away-base", role: "Solid" },
    { var: "--away-bg-light", role: "N\u1EC1n" },
    { var: "--away-border-light", role: "Vi\u1EC1n" },
    { var: "--away-text-light", role: "Ch\u1EEF", contrast: true },
    { var: "--away-on", role: "On" }
  ] }
];
var TAG_ROWS = TAG_HUES.map((h) => ({
  name: h,
  swatches: [
    { var: `--tag-${h}-bg`, role: "N\u1EC1n" },
    { var: `--tag-${h}-border`, role: "Vi\u1EC1n" },
    { var: `--tag-${h}-text`, role: "Ch\u1EEF", contrast: true },
    { var: `--hue-${h}-base`, role: "G\u1ED1c" }
  ]
}));
var DATAVIZ_CATEGORICAL = [...Array(10)].map((_, i) => ref(`--data-${i + 1}`, String(i + 1))).concat(ref("--data-neutral", "neutral"));
var DATAVIZ_SEQ = [
  { name: "Blue", steps: [1, 2, 3, 4, 5].map((i) => ref(`--seq-blue-${i}`, String(i))) },
  { name: "Green", steps: [1, 2, 3, 4, 5].map((i) => ref(`--seq-green-${i}`, String(i))) },
  { name: "Red", steps: [1, 2, 3, 4, 5].map((i) => ref(`--seq-red-${i}`, String(i))) }
];
var UTILITY_TOKENS = {
  label: "Utility \u2014 Ti\u1EC7n \xEDch",
  note: "overlay/scrim, static (c\u1ED1 \u0111\u1ECBnh kh\xF4ng \u0111\u1ED5i theme), skeleton/track, selection.",
  items: ["--overlay", "--overlay-hover", "--overlay-pressed", "--static-white", "--static-black", "--skeleton", "--track", "--selection-bg"].map((v) => ref(v))
};
var TYPE_GROUPS = [
  {
    label: "Title",
    items: [
      { key: "--text-title-h1", label: "title-h1" },
      { key: "--text-title-h2", label: "title-h2" },
      { key: "--text-title-h3", label: "title-h3" },
      { key: "--text-title-h4", label: "title-h4" },
      { key: "--text-title-h5", label: "title-h5" },
      { key: "--text-title-h6", label: "title-h6" }
    ]
  },
  {
    label: "Label",
    items: [
      { key: "--text-label-xl", label: "label-xl" },
      { key: "--text-label-lg", label: "label-lg" },
      { key: "--text-label-md", label: "label-md" },
      { key: "--text-label-sm", label: "label-sm" },
      { key: "--text-label-xs", label: "label-xs" }
    ]
  },
  {
    label: "Paragraph",
    items: [
      { key: "--text-paragraph-xl", label: "paragraph-xl" },
      { key: "--text-paragraph-lg", label: "paragraph-lg" },
      { key: "--text-paragraph-md", label: "paragraph-md" },
      { key: "--text-paragraph-sm", label: "paragraph-sm" },
      { key: "--text-paragraph-xs", label: "paragraph-xs" }
    ]
  },
  {
    label: "Subheading (uppercase)",
    items: [
      { key: "--text-subheading-md", label: "subheading-md" },
      { key: "--text-subheading-sm", label: "subheading-sm" },
      { key: "--text-subheading-xs", label: "subheading-xs" },
      { key: "--text-subheading-2xs", label: "subheading-2xs" }
    ]
  }
];
var SPACING = [
  "--space-0-5",
  "--space-1",
  "--space-1-5",
  "--space-2",
  "--space-2-5",
  "--space-3",
  "--space-3-5",
  "--space-4",
  "--space-5",
  "--space-6",
  "--space-7",
  "--space-8",
  "--space-9",
  "--space-10",
  "--space-11",
  "--space-12",
  "--space-14",
  "--space-16",
  "--space-20",
  "--space-24"
].map((v) => ref(v));
var SIZE_GROUPS = [
  { label: "Icon", items: ["--icon-xs", "--icon-sm", "--icon-md", "--icon-lg", "--icon-xl"].map((v) => ref(v)) },
  { label: "Control height", items: ["--control-height-2xs", "--control-height-xs", "--control-height-sm", "--control-height-md", "--control-height-lg", "--control-height-xl"].map((v) => ref(v)) },
  { label: "Avatar", items: ["--avatar-xs", "--avatar-sm", "--avatar-md", "--avatar-lg", "--avatar-xl", "--avatar-2xl"].map((v) => ref(v)) }
];
var RADIUS = [
  "--radius-2xs",
  "--radius-xs",
  "--radius-sm",
  "--radius-md",
  "--radius-lg",
  "--radius-xl",
  "--radius-2xl",
  "--radius-3xl",
  "--radius-4xl",
  "--radius-5xl",
  "--radius-full"
].map((v) => ref(v));
var SHADOWS = [
  "--shadow-regular-xs",
  "--shadow-regular-sm",
  "--shadow-regular-md",
  "--shadow-regular-lg"
].map((v) => ref(v));
var Z_INDEX = [
  "--z-raised",
  "--z-sticky",
  "--z-header",
  "--z-sidebar",
  "--z-dropdown",
  "--z-popover",
  "--z-drawer",
  "--z-modal",
  "--z-toast",
  "--z-tooltip"
].map((v) => ref(v));
var DURATIONS = [
  "--duration-fast",
  "--duration-normal",
  "--duration-slow",
  "--duration-slower"
].map((v) => ref(v));
var EASINGS = [
  "--ease-out",
  "--ease-in",
  "--ease-in-out",
  "--ease-linear"
].map((v) => ref(v));

export {
  readCssVar,
  NEUTRAL_RAMPS,
  HUE_RAMPS,
  SEMANTIC_GROUPS,
  STATUS_ROWS,
  TAG_ROWS,
  DATAVIZ_CATEGORICAL,
  DATAVIZ_SEQ,
  UTILITY_TOKENS,
  TYPE_GROUPS,
  SPACING,
  SIZE_GROUPS,
  RADIUS,
  SHADOWS,
  Z_INDEX,
  DURATIONS,
  EASINGS
};
//# sourceMappingURL=chunk-KQEAAKHO.js.map
