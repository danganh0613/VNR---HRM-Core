import {
  NgTimeParser,
  format,
  getISOWeek,
  getQuarter,
  parse
} from "./chunk-ZQHLZVTS.js";
import {
  warn
} from "./chunk-D3TBJI5I.js";
import {
  formatDate
} from "./chunk-D2BVEXVI.js";
import {
  BehaviorSubject,
  Injectable,
  InjectionToken,
  NgModule,
  Pipe,
  __spreadValues,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵinject
} from "./chunk-RFPCG6C6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-i18n.mjs
var en_US = {
  locale: "en",
  Pagination: {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  },
  DatePicker: {
    lang: {
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"],
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "Ok",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      yearFormat: "YYYY",
      dateFormat: "M/D/YYYY",
      dayFormat: "D",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    },
    timePickerLocale: {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"]
    }
  },
  TimePicker: {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  },
  Calendar: {
    lang: {
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"],
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "Ok",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      yearFormat: "YYYY",
      dateFormat: "M/D/YYYY",
      dayFormat: "D",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    },
    timePickerLocale: {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"]
    }
  },
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    selectNone: "Clear all data"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Form: {
    optional: "(optional)"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Image: {
    preview: "Preview"
  },
  CronExpression: {
    cronError: "Invalid cron expression",
    second: "second",
    minute: "minute",
    hour: "hour",
    day: "day",
    month: "month",
    week: "week"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  CheckList: {
    checkList: "Check List",
    checkListFinish: "You have successfully completed the list!",
    checkListClose: "Close",
    checkListFooter: "Check list is no longer required",
    checkListCheck: "Do you want to close the list?",
    ok: "OK",
    cancel: "Cancel",
    checkListCheckOther: "No longer required to show"
  }
};
var zh_CN = {
  locale: "zh-cn",
  Pagination: {
    items_per_page: "\u6761/\u9875",
    jump_to: "\u8DF3\u81F3",
    jump_to_confirm: "\u786E\u5B9A",
    page: "\u9875",
    prev_page: "\u4E0A\u4E00\u9875",
    next_page: "\u4E0B\u4E00\u9875",
    prev_5: "\u5411\u524D 5 \u9875",
    next_5: "\u5411\u540E 5 \u9875",
    prev_3: "\u5411\u524D 3 \u9875",
    next_3: "\u5411\u540E 3 \u9875",
    page_size: "\u9875\u7801"
  },
  DatePicker: {
    lang: {
      placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
      yearPlaceholder: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarterPlaceholder: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      monthPlaceholder: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      weekPlaceholder: "\u8BF7\u9009\u62E9\u5468",
      rangePlaceholder: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      rangeYearPlaceholder: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      rangeQuarterPlaceholder: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
      rangeMonthPlaceholder: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      rangeWeekPlaceholder: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      locale: "zh_CN",
      today: "\u4ECA\u5929",
      now: "\u6B64\u523B",
      backToToday: "\u8FD4\u56DE\u4ECA\u5929",
      ok: "\u786E\u5B9A",
      timeSelect: "\u9009\u62E9\u65F6\u95F4",
      dateSelect: "\u9009\u62E9\u65E5\u671F",
      weekSelect: "\u9009\u62E9\u5468",
      clear: "\u6E05\u9664",
      month: "\u6708",
      year: "\u5E74",
      previousMonth: "\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",
      nextMonth: "\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",
      monthSelect: "\u9009\u62E9\u6708\u4EFD",
      yearSelect: "\u9009\u62E9\u5E74\u4EFD",
      decadeSelect: "\u9009\u62E9\u5E74\u4EE3",
      yearFormat: "YYYY\u5E74",
      dayFormat: "D\u65E5",
      dateFormat: "YYYY\u5E74M\u6708D\u65E5",
      dateTimeFormat: "YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",
      previousYear: "\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",
      nextYear: "\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",
      previousDecade: "\u4E0A\u4E00\u5E74\u4EE3",
      nextDecade: "\u4E0B\u4E00\u5E74\u4EE3",
      previousCentury: "\u4E0A\u4E00\u4E16\u7EAA",
      nextCentury: "\u4E0B\u4E00\u4E16\u7EAA"
    },
    timePickerLocale: {
      placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
      rangePlaceholder: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
    }
  },
  TimePicker: {
    placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
    rangePlaceholder: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
  },
  Calendar: {
    lang: {
      placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
      yearPlaceholder: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarterPlaceholder: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
      monthPlaceholder: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      weekPlaceholder: "\u8BF7\u9009\u62E9\u5468",
      rangePlaceholder: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      rangeYearPlaceholder: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      rangeMonthPlaceholder: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      rangeWeekPlaceholder: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      locale: "zh_CN",
      today: "\u4ECA\u5929",
      now: "\u6B64\u523B",
      backToToday: "\u8FD4\u56DE\u4ECA\u5929",
      ok: "\u786E\u5B9A",
      timeSelect: "\u9009\u62E9\u65F6\u95F4",
      dateSelect: "\u9009\u62E9\u65E5\u671F",
      weekSelect: "\u9009\u62E9\u5468",
      clear: "\u6E05\u9664",
      month: "\u6708",
      year: "\u5E74",
      previousMonth: "\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",
      nextMonth: "\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",
      monthSelect: "\u9009\u62E9\u6708\u4EFD",
      yearSelect: "\u9009\u62E9\u5E74\u4EFD",
      decadeSelect: "\u9009\u62E9\u5E74\u4EE3",
      yearFormat: "YYYY\u5E74",
      dayFormat: "D\u65E5",
      dateFormat: "YYYY\u5E74M\u6708D\u65E5",
      dateTimeFormat: "YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",
      previousYear: "\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",
      nextYear: "\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",
      previousDecade: "\u4E0A\u4E00\u5E74\u4EE3",
      nextDecade: "\u4E0B\u4E00\u5E74\u4EE3",
      previousCentury: "\u4E0A\u4E00\u4E16\u7EAA",
      nextCentury: "\u4E0B\u4E00\u4E16\u7EAA"
    },
    timePickerLocale: {
      placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
      rangePlaceholder: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
    }
  },
  global: {
    placeholder: "\u8BF7\u9009\u62E9"
  },
  Table: {
    filterTitle: "\u7B5B\u9009",
    filterConfirm: "\u786E\u5B9A",
    filterReset: "\u91CD\u7F6E",
    filterEmptyText: "\u65E0\u7B5B\u9009\u9879",
    selectAll: "\u5168\u9009\u5F53\u9875",
    selectInvert: "\u53CD\u9009\u5F53\u9875",
    selectionAll: "\u5168\u9009\u6240\u6709",
    sortTitle: "\u6392\u5E8F",
    expand: "\u5C55\u5F00\u884C",
    collapse: "\u5173\u95ED\u884C",
    triggerDesc: "\u70B9\u51FB\u964D\u5E8F",
    triggerAsc: "\u70B9\u51FB\u5347\u5E8F",
    cancelSort: "\u53D6\u6D88\u6392\u5E8F",
    filterCheckall: "\u5168\u9009",
    filterSearchPlaceholder: "\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",
    selectNone: "\u6E05\u7A7A\u6240\u6709"
  },
  Modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    justOkText: "\u77E5\u9053\u4E86"
  },
  Popconfirm: {
    cancelText: "\u53D6\u6D88",
    okText: "\u786E\u5B9A"
  },
  Transfer: {
    searchPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
    itemUnit: "\u9879",
    itemsUnit: "\u9879",
    remove: "\u5220\u9664",
    selectCurrent: "\u5168\u9009\u5F53\u9875",
    removeCurrent: "\u5220\u9664\u5F53\u9875",
    selectAll: "\u5168\u9009\u6240\u6709",
    removeAll: "\u5220\u9664\u5168\u90E8",
    selectInvert: "\u53CD\u9009\u5F53\u9875"
  },
  Upload: {
    uploading: "\u6587\u4EF6\u4E0A\u4F20\u4E2D",
    removeFile: "\u5220\u9664\u6587\u4EF6",
    uploadError: "\u4E0A\u4F20\u9519\u8BEF",
    previewFile: "\u9884\u89C8\u6587\u4EF6",
    downloadFile: "\u4E0B\u8F7D\u6587\u4EF6"
  },
  Empty: {
    description: "\u6682\u65E0\u6570\u636E"
  },
  Form: {
    optional: "(\u53EF\u9009)"
  },
  Icon: {
    icon: "\u56FE\u6807"
  },
  Text: {
    edit: "\u7F16\u8F91",
    copy: "\u590D\u5236",
    copied: "\u590D\u5236\u6210\u529F",
    expand: "\u5C55\u5F00"
  },
  PageHeader: {
    back: "\u8FD4\u56DE"
  },
  Image: {
    preview: "\u9884\u89C8"
  },
  CronExpression: {
    cronError: "cron \u8868\u8FBE\u5F0F\u4E0D\u5408\u6CD5",
    second: "\u79D2",
    minute: "\u5206\u949F",
    hour: "\u5C0F\u65F6",
    day: "\u65E5",
    month: "\u6708",
    week: "\u5468"
  },
  QRCode: {
    expired: "\u4E8C\u7EF4\u7801\u8FC7\u671F",
    refresh: "\u70B9\u51FB\u5237\u65B0",
    scanned: "\u5DF2\u626B\u63CF"
  },
  CheckList: {
    checkList: "\u4EFB\u52A1\u6E05\u5355",
    checkListFinish: "\u4F60\u5DF2\u6210\u529F\u5B8C\u6210\u4EFB\u52A1\u6E05\u5355\uFF01",
    checkListClose: "\u5173\u95ED",
    checkListFooter: "\u4E0D\u9700\u8981\u64CD\u4F5C\u6307\u5F15",
    checkListCheck: "\u4F60\u8981\u5173\u95ED\u64CD\u4F5C\u6E05\u5355\u5417",
    ok: "\u786E\u5B9A",
    cancel: "\u53D6\u6D88",
    checkListCheckOther: "\u4EE5\u540E\u4E0D\u518D\u9700\u8981\u64CD\u4F5C\u6E05\u5355"
  }
};
var NZ_I18N = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-i18n" : "");
function provideNzI18n(config) {
  return makeEnvironmentProviders([typeof config === "function" ? {
    provide: NZ_I18N,
    useFactory: config
  } : {
    provide: NZ_I18N,
    useValue: config
  }]);
}
var NZ_DATE_LOCALE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-date-locale" : "");
var NzI18nService = class _NzI18nService {
  _locale;
  _change = new BehaviorSubject(this._locale);
  dateLocale;
  get localeChange() {
    return this._change.asObservable();
  }
  constructor() {
    this.setLocale(inject(NZ_I18N, {
      optional: true
    }) || zh_CN);
    this.setDateLocale(inject(NZ_DATE_LOCALE, {
      optional: true
    }));
  }
  // [NOTE] Performance issue: this method may called by every change detections
  // TODO: cache more deeply paths for performance
  translate(path, data) {
    let content = this._getObjectPath(this._locale, path);
    if (typeof content === "string") {
      if (data) {
        Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, "g"), data[key]));
      }
      return content;
    }
    return path;
  }
  /**
   * Set/Change current locale globally throughout the WHOLE application
   * NOTE: If called at runtime, rendered interface may not change along with the locale change,
   * because this do not trigger another render schedule.
   *
   * @param locale The translating letters
   */
  setLocale(locale) {
    if (this._locale && this._locale.locale === locale.locale) {
      return;
    }
    this._locale = locale;
    this._change.next(locale);
  }
  getLocale() {
    return this._locale;
  }
  getLocaleId() {
    return this._locale ? this._locale.locale : "";
  }
  setDateLocale(dateLocale) {
    this.dateLocale = dateLocale;
  }
  getDateLocale() {
    return this.dateLocale;
  }
  /**
   * Get locale data
   *
   * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
   * @param defaultValue default value if the result is not "truthy"
   */
  getLocaleData(path, defaultValue) {
    const result = path ? this._getObjectPath(this._locale, path) : this._locale;
    if (!result && !defaultValue) {
      warn(`Missing translations for "${path}" in language "${this._locale.locale}".
You can use "NzI18nService.setLocale" as a temporary fix.
Welcome to submit a pull request to help us optimize the translations!
https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/CONTRIBUTING.md`);
    }
    return result || defaultValue || this._getObjectPath(en_US, path) || {};
  }
  _getObjectPath(obj, path) {
    let res = obj;
    const paths = path.split(".");
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
  static \u0275fac = function NzI18nService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzI18nService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzI18nService,
    factory: _NzI18nService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NzI18nPipe = class _NzI18nPipe {
  _locale = inject(NzI18nService);
  transform(path, keyValue) {
    return this._locale.translate(path, keyValue);
  }
  static \u0275fac = function NzI18nPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzI18nPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "nzI18n",
    type: _NzI18nPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nPipe, [{
    type: Pipe,
    args: [{
      name: "nzI18n"
    }]
  }], null, null);
})();
var NzI18nModule = class _NzI18nModule {
  static \u0275fac = function NzI18nModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzI18nModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzI18nModule,
    imports: [NzI18nPipe],
    exports: [NzI18nPipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzI18nModule, [{
    type: NgModule,
    args: [{
      imports: [NzI18nPipe],
      exports: [NzI18nPipe]
    }]
  }], null, null);
})();
var NZ_DATE_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-date-config" : "");
var NZ_DATE_CONFIG_DEFAULT = {
  firstDayOfWeek: void 0
};
function mergeDateConfig(config) {
  return __spreadValues(__spreadValues({}, NZ_DATE_CONFIG_DEFAULT), config);
}
function DATE_HELPER_SERVICE_FACTORY() {
  const i18n = inject(NzI18nService);
  return i18n.getDateLocale() ? new DateHelperByDateFns(i18n) : new DateHelperByDatePipe(i18n);
}
var DateHelperService = class _DateHelperService {
  i18n;
  config = mergeDateConfig(inject(NZ_DATE_CONFIG, {
    optional: true
  }));
  constructor(i18n) {
    this.i18n = i18n;
  }
  static \u0275fac = function DateHelperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateHelperService)(\u0275\u0275inject(NzI18nService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DateHelperService,
    factory: () => DATE_HELPER_SERVICE_FACTORY(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateHelperService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: DATE_HELPER_SERVICE_FACTORY
    }]
  }], () => [{
    type: NzI18nService
  }], null);
})();
var DateHelperByDateFns = class extends DateHelperService {
  getISOWeek(date) {
    return getISOWeek(date);
  }
  // Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
  // https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
  getFirstDayOfWeek() {
    let defaultWeekStartsOn;
    try {
      defaultWeekStartsOn = this.i18n.getDateLocale().options.weekStartsOn;
    } catch {
      defaultWeekStartsOn = 1;
    }
    return this.config.firstDayOfWeek == null ? defaultWeekStartsOn : this.config.firstDayOfWeek;
  }
  /**
   * Format a date
   *
   * @see https://date-fns.org/docs/format#description
   * @param date Date
   * @param formatStr format string
   */
  format(date, formatStr) {
    return date ? format(date, formatStr, {
      locale: this.i18n.getDateLocale()
    }) : "";
  }
  parseDate(text, formatStr) {
    return parse(text, formatStr, /* @__PURE__ */ new Date(), {
      locale: this.i18n.getDateLocale(),
      weekStartsOn: this.getFirstDayOfWeek()
    });
  }
  parseTime(text, formatStr) {
    return this.parseDate(text, formatStr);
  }
};
var DateHelperByDatePipe = class extends DateHelperService {
  getISOWeek(date) {
    return +this.format(date, "w");
  }
  getFirstDayOfWeek() {
    if (this.config.firstDayOfWeek === void 0) {
      const locale = this.i18n.getLocaleId();
      return locale && ["zh-cn", "zh-tw"].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
    }
    return this.config.firstDayOfWeek;
  }
  format(date, formatStr) {
    return date ? this.replaceQuarter(formatDate(date, formatStr, this.i18n.getLocaleId()), date) : "";
  }
  parseDate(text) {
    return new Date(text);
  }
  parseTime(text, formatStr) {
    const parser = new NgTimeParser(formatStr, this.i18n.getLocaleId());
    return parser.toDate(text);
  }
  replaceQuarter(dateStr, date) {
    const quarter = getQuarter(date).toString();
    const record = {
      Q: quarter,
      QQ: `0${quarter}`,
      QQQ: `Q${quarter}`
    };
    return dateStr.replace(/Q+(?![^[]*])/g, (match) => record[match] ?? quarter).replace(/\[(Q+)]/g, "$1");
  }
};
var vi_VN = {
  locale: "vi",
  Pagination: {
    items_per_page: "/ trang",
    jump_to: "\u0110\u1EBFn",
    jump_to_confirm: "x\xE1c nh\u1EADn",
    page: "Trang",
    prev_page: "Trang Tr\u01B0\u1EDBc",
    next_page: "Trang K\u1EBF",
    prev_5: "V\u1EC1 5 Trang Tr\u01B0\u1EDBc",
    next_5: "\u0110\u1EBFn 5 Trang K\u1EBF",
    prev_3: "V\u1EC1 3 Trang Tr\u01B0\u1EDBc",
    next_3: "\u0110\u1EBFn 3 Trang K\u1EBF",
    page_size: "k\xEDch th\u01B0\u1EDBc trang"
  },
  DatePicker: {
    lang: {
      placeholder: "Ch\u1ECDn th\u1EDDi \u0111i\u1EC3m",
      yearPlaceholder: "Ch\u1ECDn n\u0103m",
      quarterPlaceholder: "Ch\u1ECDn qu\xFD",
      monthPlaceholder: "Ch\u1ECDn th\xE1ng",
      weekPlaceholder: "Ch\u1ECDn tu\u1EA7n",
      rangePlaceholder: ["Ng\xE0y b\u1EAFt \u0111\u1EA7u", "Ng\xE0y k\u1EBFt th\xFAc"],
      rangeYearPlaceholder: ["N\u0103m b\u1EAFt \u0111\u1EA7u", "N\u0103m k\u1EBFt th\xFAc"],
      rangeQuarterPlaceholder: ["Q\xFAy b\u1EAFt \u0111\u1EA7u", "Qu\xFD k\u1EBFt th\xFAc"],
      rangeMonthPlaceholder: ["Th\xE1ng b\u1EAFt \u0111\u1EA7u", "Th\xE1ng k\u1EBFt th\xFAc"],
      rangeWeekPlaceholder: ["Tu\u1EA7n b\u1EAFt \u0111\u1EA7u", "Tu\u1EA7n k\u1EBFt th\xFAc"],
      locale: "vi_VN",
      today: "H\xF4m nay",
      now: "B\xE2y gi\u1EDD",
      backToToday: "Tr\u1EDF v\u1EC1 h\xF4m nay",
      ok: "Ok",
      clear: "X\xF3a",
      month: "Th\xE1ng",
      year: "N\u0103m",
      timeSelect: "Ch\u1ECDn th\u1EDDi gian",
      dateSelect: "Ch\u1ECDn ng\xE0y",
      weekSelect: "Ch\u1ECDn tu\u1EA7n",
      monthSelect: "Ch\u1ECDn th\xE1ng",
      yearSelect: "Ch\u1ECDn n\u0103m",
      decadeSelect: "Ch\u1ECDn th\u1EADp k\u1EF7",
      yearFormat: "YYYY",
      dateFormat: "D/M/YYYY",
      dayFormat: "D",
      dateTimeFormat: "D/M/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Th\xE1ng tr\u01B0\u1EDBc (PageUp)",
      nextMonth: "Th\xE1ng sau (PageDown)",
      previousYear: "N\u0103m tr\u01B0\u1EDBc (Control + left)",
      nextYear: "N\u0103m sau (Control + right)",
      previousDecade: "Th\u1EADp k\u1EF7 tr\u01B0\u1EDBc",
      nextDecade: "Th\u1EADp k\u1EF7 sau",
      previousCentury: "Th\u1EBF k\u1EF7 tr\u01B0\u1EDBc",
      nextCentury: "Th\u1EBF k\u1EF7 sau"
    },
    timePickerLocale: {
      placeholder: "Ch\u1ECDn th\u1EDDi gian"
    }
  },
  TimePicker: {
    placeholder: "Ch\u1ECDn th\u1EDDi gian"
  },
  Calendar: {
    lang: {
      placeholder: "Ch\u1ECDn th\u1EDDi \u0111i\u1EC3m",
      yearPlaceholder: "Ch\u1ECDn n\u0103m",
      quarterPlaceholder: "Ch\u1ECDn qu\xFD",
      monthPlaceholder: "Ch\u1ECDn th\xE1ng",
      weekPlaceholder: "Ch\u1ECDn tu\u1EA7n",
      rangePlaceholder: ["Ng\xE0y b\u1EAFt \u0111\u1EA7u", "Ng\xE0y k\u1EBFt th\xFAc"],
      rangeYearPlaceholder: ["N\u0103m b\u1EAFt \u0111\u1EA7u", "N\u0103m k\u1EBFt th\xFAc"],
      rangeMonthPlaceholder: ["Th\xE1ng b\u1EAFt \u0111\u1EA7u", "Th\xE1ng k\u1EBFt th\xFAc"],
      rangeWeekPlaceholder: ["Tu\u1EA7n b\u1EAFt \u0111\u1EA7u", "Tu\u1EA7n k\u1EBFt th\xFAc"],
      locale: "vi_VN",
      today: "H\xF4m nay",
      now: "B\xE2y gi\u1EDD",
      backToToday: "Tr\u1EDF v\u1EC1 h\xF4m nay",
      ok: "Ok",
      clear: "X\xF3a",
      month: "Th\xE1ng",
      year: "N\u0103m",
      timeSelect: "Ch\u1ECDn th\u1EDDi gian",
      dateSelect: "Ch\u1ECDn ng\xE0y",
      weekSelect: "Ch\u1ECDn tu\u1EA7n",
      monthSelect: "Ch\u1ECDn th\xE1ng",
      yearSelect: "Ch\u1ECDn n\u0103m",
      decadeSelect: "Ch\u1ECDn th\u1EADp k\u1EF7",
      yearFormat: "YYYY",
      dateFormat: "D/M/YYYY",
      dayFormat: "D",
      dateTimeFormat: "D/M/YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Th\xE1ng tr\u01B0\u1EDBc (PageUp)",
      nextMonth: "Th\xE1ng sau (PageDown)",
      previousYear: "N\u0103m tr\u01B0\u1EDBc (Control + left)",
      nextYear: "N\u0103m sau (Control + right)",
      previousDecade: "Th\u1EADp k\u1EF7 tr\u01B0\u1EDBc",
      nextDecade: "Th\u1EADp k\u1EF7 sau",
      previousCentury: "Th\u1EBF k\u1EF7 tr\u01B0\u1EDBc",
      nextCentury: "Th\u1EBF k\u1EF7 sau"
    },
    timePickerLocale: {
      placeholder: "Ch\u1ECDn th\u1EDDi gian"
    }
  },
  Table: {
    filterTitle: "B\u1ED9 ",
    filterConfirm: "OK",
    filterReset: "T\u1EA1o L\u1EA1i",
    selectAll: "Ch\u1ECDn T\u1EA5t C\u1EA3",
    selectInvert: "Ch\u1ECDn Ng\u01B0\u1EE3c L\u1EA1i"
  },
  Modal: {
    okText: "OK",
    cancelText: "Hu\u1EF7",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Hu\u1EF7"
  },
  Transfer: {
    searchPlaceholder: "T\xECm \u1EDF \u0111\xE2y",
    itemUnit: "m\u1EE5c",
    itemsUnit: "m\u1EE5c"
  },
  Upload: {
    uploading: "\u0110ang t\u1EA3i l\xEAn...",
    removeFile: "G\u1EE1 b\u1ECF t\u1EADp tin",
    uploadError: "L\u1ED7i t\u1EA3i l\xEAn",
    previewFile: "Xem th\u1EED t\u1EADp tin",
    downloadFile: "T\u1EA3i t\u1EADp tin"
  },
  Empty: {
    description: "Tr\u1ED1ng"
  },
  Form: {
    optional: "(t\xF9y ch\u1ECDn)"
  }
};

export {
  en_US,
  provideNzI18n,
  NzI18nService,
  NzI18nPipe,
  NzI18nModule,
  DateHelperService,
  vi_VN
};
//# sourceMappingURL=chunk-B5XVGUQ7.js.map
