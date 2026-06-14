export const mainMenuSections = [
  {
    title: "nav.aboutCouncil",
    items: [
      { label: "nav.home", to: "/" },
      { label: "nav.ficHistory", to: "/maininfo" },
      { label: "nav.association", to: "/association" },
      { label: "nav.management", to: "/foreigninvestors" },
      { label: "nav.secretariat", to: "/secretariat" },
    ],
  },
  {
    title: "nav.councilMembers",
    items: [
      { label: "nav.members", to: "/becomemember" },
      { label: "nav.uzbekSide", to: "/uzbekside" },
      { label: "nav.experts", to: "/experts" },
      { label: "nav.becomeMember", to: "/becomemember/join" },
    ],
  },
  {
    title: "nav.workingGroups",
    items: [
      { label: "nav.overview", to: "/advice" },
      { label: "nav.councilWorkingGroups", to: { path: "/advice", query: { target: "mwg" } } },
      {
        label: "nav.interagencyWorkingGroups",
        to: {
          path: "/advice",
          query: { target: "advice-plenary-working-groups" },
        },
      },
      {
        label: "nav.sessionOutcomes",
        to: { path: "/advice", query: { target: "rops" } },
      },
    ],
  },
  {
    title: "nav.results",
    items: [
      { label: "nav.councilResults", to: "/result" },
      { label: "nav.initiatives", to: "/initiatives" },
      { label: "nav.investments", to: "/investmen" },
      { label: "nav.documents", to: "/reports" },
    ],
  },
  {
    title: "nav.events",
    items: [
      { label: "nav.calendarPlan", to: "/calendarplan" },
      { label: "nav.plenarySessions", to: "/plenarysessions" },
      { label: "nav.interim", to: "/interimsession" },
      { label: "nav.meetings", to: "/weeklyevents/blog" },
      { label: "nav.weeklyResults", to: "/weeklyevents" },
    ],
  },
  {
    title: "nav.media",
    items: [
      { label: "nav.news", to: "/news" },
      { label: "nav.analyticsArticles", to: "/blog" },
      { label: "nav.blitzInterview", to: "/weeklyevents/info" },
      { label: "nav.publications", to: "/publications" },
    ],
  },
];
