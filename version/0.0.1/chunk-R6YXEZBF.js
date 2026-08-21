import {
  Briefcase,
  CalendarEvent,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  FileText,
  LayoutDashboard,
  Sitemap,
  UserPlus,
  Users,
  Wallet
} from "./chunk-LRW4ARR4.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_template-nav.ts
var DEFAULT_NAV_SECTIONS = [
  { header: "Ch\xEDnh", items: [
    { key: "dashboard", label: "T\u1ED5ng quan", icon: LayoutDashboard },
    { key: "employee", label: "Nh\xE2n s\u1EF1", icon: Users, children: [
      { key: "emp-list", label: "Danh s\xE1ch nh\xE2n vi\xEAn", icon: Users },
      { key: "org", label: "S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c", icon: Sitemap },
      { key: "contract", label: "H\u1EE3p \u0111\u1ED3ng", icon: FileText }
    ] },
    { key: "attendance", label: "Ch\u1EA5m c\xF4ng", icon: Clock, children: [
      { key: "timesheet", label: "B\u1EA3ng ch\u1EA5m c\xF4ng", icon: Clock },
      { key: "shift", label: "X\u1EBFp ca", icon: CalendarEvent }
    ] },
    { key: "requests", label: "\u0110\u01A1n t\u1EEB", icon: ClipboardList },
    { key: "recruit", label: "Tuy\u1EC3n d\u1EE5ng", icon: UserPlus, children: [
      { key: "jobs", label: "Tin tuy\u1EC3n d\u1EE5ng", icon: Briefcase },
      { key: "candidates", label: "\u1EE8ng vi\xEAn", icon: Users }
    ] },
    { key: "evaluation", label: "\u0110\xE1nh gi\xE1", icon: ClipboardCheck },
    { key: "payroll", label: "B\u1EA3ng l\u01B0\u01A1ng", icon: Wallet },
    { key: "catalog", label: "Danh m\u1EE5c", icon: Database }
  ] }
];

export {
  DEFAULT_NAV_SECTIONS
};
//# sourceMappingURL=chunk-R6YXEZBF.js.map
