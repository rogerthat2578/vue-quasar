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
          <img class="web" src="icons/logo.png" />
          <!-- <label>SCM</label> -->
        </q-toolbar-title>

        <!-- <div class="web">Quasar v{{ $q.version }}</div> -->
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
        />
      </q-list>
      <q-list>
        <q-item-label header class="menu-item-label"> 외주가공 </q-item-label>
        <EssentialLink
          v-for="link in outsourcingMenuList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
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
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const leftDrawerOpen = ref(false);
const purchaseMenuList = purchaseList;
const outsourcingMenuList = outsourcingList;
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
