import { boot } from "quasar/wrappers";

// 전역 설정
export default boot(({ app }) => {
  app.config.globalProperties.initTextHellow = "Init text hellow!!";
});
