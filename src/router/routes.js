const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "MainContents",
        component: () => import("pages/MainContents.vue"),
      },
      {
        path: "OrderInquiry",
        component: () => import("pages/OrderInquiry.vue"),
      },
      {
        path: "OutsourcingOrderInquiry",
        component: () => import("pages/OutsourcingOrderInquiry.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
