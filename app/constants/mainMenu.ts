export const mainMenuSections = [
  {
    title: "О Совете",
    items: [
      { label: "Главная", to: "/" },
      { label: "История СИИ", to: "/maininfo" },
      { label: "Ассоциация", to: "/association" },
      { label: "Руководство", to: "/foreigninvestors" },
      { label: "Секретариат", to: "/secretariat" },
    ],
  },
  {
    title: "Участники Совета",
    items: [
      { label: "Члены Совета", to: "/becomemember" },
      { label: "Узбекская сторона", to: "/uzbekside" },
      { label: "Эксперты", to: "/experts" },
      { label: "Стать членом", to: "/becomemember?target=membership-form" },
    ],
  },
  {
    title: "Рабочие группы",
    items: [
      { label: "Обзор", to: "/advice" },
      { label: "РГ Совета", to: { path: "/advice", query: { target: "mwg" } } },
      {
        label: "Межведомственные",
        to: {
          path: "/advice",
          query: { target: "advice-plenary-working-groups" },
        },
      },
      {
        label: "По итогам сессий",
        to: { path: "/advice", query: { target: "rops" } },
      },
    ],
  },
  {
    title: "Результаты",
    items: [
      { label: "Результаты Совета", to: "/result" },
      { label: "Инициативы", to: "/initiatives" },
      { label: "Инвестиции", to: "/investmenuzbekistan" },
      { label: "Документы", to: "/reports" },
    ],
  },
  {
    title: "События",
    items: [
      { label: "Календарный план", to: "/calendarplan" },
      { label: "Пленарные сессии", to: "/plenarysessions" },
      { label: "Промежуточные", to: "/interimsession" },
      { label: "Встречи", to: "/weeklyevents/blog" },
      { label: "Итоги недели", to: "/weeklyevents" },
    ],
  },
  {
    title: "Медиа",
    items: [
      { label: "Новости", to: "/news" },
      { label: "Аналитика и статьи", to: "/blog" },
      { label: "Блиц-интервью", to: "/weeklyevents/info" },
      { label: "Публикации", to: "/publications" },
    ],
  },
];
