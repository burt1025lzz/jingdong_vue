<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "Toast",
  props: ["message"]
};

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ""
  });
  const showToast = message => {
    toastData.show = true;
    toastData.toastMessage = message;
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  const { show, toastMessage } = toRefs(toastData);
  return { show, toastMessage, showToast };
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.toast
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  padding: .1rem
  border-radius: .05rem
  color: $bgColor
  background: rgba(0, 0, 0, .35)
  z-index: 999
</style>
