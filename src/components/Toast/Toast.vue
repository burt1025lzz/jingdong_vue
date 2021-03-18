<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  props: ["message"]
};
</script>

<style lang="sass" scoped>
.toast
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  padding: .1rem
  border-radius: .05rem
  color: #FFF
  background: rgba(0, 0, 0, .35)
</style>
