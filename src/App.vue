<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  mounted() {
    console.log("global text call ::: ", this.initTextHellow);
  },
});
</script>
