<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
import TopArea from "@/views/OrderConfirmation/components/TopArea";
import ProductList from "@/views/OrderConfirmation/components/ProductList";
import Order from "@/views/OrderConfirmation/components/Order";

export default {
  name: "OrderConfirmation",
  components: { TopArea, ProductList, Order }
};
</script>

<style lang="sass" scoped>
.wrapper
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: rgb(248, 248, 248)
  overflow-y: scroll
</style>
