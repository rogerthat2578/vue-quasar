<template>
  <q-item clickable tag="a" :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" size="42px" color="primary" />
      <!-- <q-icon :name="icon" /> -->
      <!-- <q-icon name="img:icons/ic_menu_01.png" size="42px" /> -->
    </q-item-section>

    <q-item-section>
      {{ title }}
      <!-- <q-item-label>{{ title }}</q-item-label> -->
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  to: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
