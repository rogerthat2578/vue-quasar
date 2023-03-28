<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="layout-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="toggle-left-drawer"
        />

        <q-toolbar-title class="toolbar-title">
          <img
            class="web"
            src="icons/logo.png"
            @click="toMenu({ title: '메인', to: '/MainContents' })"
          />
          <img
            class="mobile"
            src="icons/favicon-32x32.png"
            @click="toMenu({ title: '메인', to: '/MainContents' })"
          />
          <label>{{ titleName }}</label>
        </q-toolbar-title>

        <!-- <div class="web">Quasar v{{ $q.version }}</div> -->
        <div class="toolbar-user">
          <img src="icons/user.png" alt="유저이미지" />
          <!-- 부서, 이름 추가 -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="menu-drawer"
    >
      <q-list>
        <q-item-label header class="menu-item-label"> 구매 </q-item-label>
        <EssentialLink
          v-for="link in purchaseMenuList"
          :key="link.title"
          v-bind="link"
          @click="toMenu(link)"
        />
      </q-list>
      <q-list>
        <q-item-label header class="menu-item-label"> 외주가공 </q-item-label>
        <EssentialLink
          v-for="link in outsourcingMenuList"
          :key="link.title"
          v-bind="link"
          @click="toMenu(link)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <q-tabs align="left">
        <q-route-tab
          v-for="r in tabList"
          :key="r.to"
          :to="r.to"
          :label="r.label"
          exact
          content-class=""
        >
          <!-- route-tabs-items -->
          <img src="icons/close.png" style="position: absolute" />
        </q-route-tab>
      </q-tabs>
    </q-page-container>
  </q-layout>
</template>

<script>
// 구매 메뉴
const purchaseList = [
  {
    title: "구매 발주 품목 조회",
    caption: "구매 발주 품목 조회",
    // icon: "school",
    icon: "img:icons/ic_menu_01.png",
    to: "/OrderInquiry",
  },
  {
    title: "구매 발주 품목 조회",
    caption: "구매 납품 품목 조회",
    icon: "img:icons/ic_menu_02.png",
    to: "/PurchaseDeliverySearch",
  },
];
// 외주가공 메뉴
const outsourcingList = [
  {
    title: "외주 발주 품목 조회",
    caption: "외주 발주 품목 조회",
    // icon: "school",
    icon: "img:icons/ic_menu_03.png",
    to: "/OutsourcingOrderInquiry",
  },
  {
    title: "외주 납품 품목 조회",
    caption: "외주 납품 품목 조회",
    icon: "img:icons/ic_menu_04.png",
    to: "/OutsourcingPurchaseDeliverySearch",
  },
  {
    title: "의류 생산 진행 정보 입력",
    caption: "의류 생산 진행 정보 입력",
    icon: "img:icons/ic_menu_05.png",
    to: "/ProductionProgressInformation",
  },
];
</script>

<script setup>
import { ref, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";

const leftDrawerOpen = ref(false);
const purchaseMenuList = purchaseList;
const outsourcingMenuList = outsourcingList;
const router = useRouter();
const titleName = ref("");
let tabList = ref([]);
let reloadYN = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toMenu = (obj = {}) => {
  titleName.value = obj.title || "";
  const objTo = obj.to || "";
  if (objTo.indexOf("MainContents") > -1) router.push({ path: objTo });

  // 탭 추가, 같은 탭 추가 방지
  const sameIdx = tabList.value.findIndex((v) => v.to === objTo);
  if (sameIdx > -1) {
    if (tabList.value.filter((v) => v.to === objTo) > 1)
      tabList.value.splice(sameIdx, 1);
  } else {
    obj.label = obj.title || "";
    tabList.value.push(obj);
  }
};

onMounted(() => {
  /**
   * 브라우저 새로고침 수행 후처리 기반 추가
   */
  const entries = performance.getEntriesByType("navigation");
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].type === "reload") {
      reloadYN.value = true;
      break;
    }
  }
  // if (reloadYN.value) router.push({ path: "MainContents" });
});
</script>
