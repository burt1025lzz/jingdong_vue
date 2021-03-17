<template>
  <div className="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <Docker />
</template>

<script>
import StaticPart from "@/views/Home/components/StaticPart";
import NearBy from "@/views/Home/components/NearBy";
import Docker from "@/views/Home/components/Docker";

export default {
  name: "Home",
  components: { StaticPart, NearBy, Docker }
};
</script>

<style lang="sass" scoped>
.wrapper
  overflow-y: auto
  position: absolute
  top: 0
  right: 0
  bottom: .5rem
  left: 0
  padding: 0 .18rem .1rem .18rem
</style>
