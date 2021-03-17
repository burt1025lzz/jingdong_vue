<template>
  <div className="nearby">
    <h3 className="nearby__title">附近店铺</h3>
    <div v-for="item in nearbyList" :key="item.id" className="nearby__item">
      <img
        className="nearby__item__img"
        alt="nearby__item__img"
        :src="item.imgURL"
      />
      <div className="nearby__content">
        <div className="nearby__content__title">{{ item.title }}</div>
        <div className="nearby__content__tags">
          <span
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            className="nearby__content__tag"
          >
            {{ innerItem }}
          </span>
        </div>
        <p className="nearby__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NearBy",
  setup() {
    const nearbyList = [
      {
        id: 1,
        title: "沃尔玛",
        imgURL: "http://www.dell-lee.com/imgs/vue3/near.png",
        desc: "VIP尊享满89元减4元运费券（每月3张）",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"]
      },
      {
        id: 2,
        title: "沃尔玛",
        imgURL: "http://www.dell-lee.com/imgs/vue3/near.png",
        desc: "VIP尊享满89元减4元运费券（每月3张）",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"]
      },
      {
        id: 3,
        title: "沃尔玛",
        imgURL: "http://www.dell-lee.com/imgs/vue3/near.png",
        desc: "VIP尊享满89元减4元运费券（每月3张）",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"]
      },
      {
        id: 4,
        title: "沃尔玛",
        imgURL: "http://www.dell-lee.com/imgs/vue3/near.png",
        desc: "VIP尊享满89元减4元运费券（每月3张）",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"]
      },
      {
        id: 5,
        title: "沃尔玛",
        imgURL: "http://www.dell-lee.com/imgs/vue3/near.png",
        desc: "VIP尊享满89元减4元运费券（每月3张）",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"]
      }
    ];
    return { nearbyList };
  }
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
.nearby
  &__title
    margin: .16rem 0 .02rem 0
    font-size: .18rem
    font-weight: normal
    color: $content-fontColor

  &__item
    display: flex
    padding-top: .12rem

    &__img
      margin-right: .16rem
      width: .56rem
      height: .56rem

  &__content
    flex: 1
    padding-bottom: .12rem
    border-bottom: 1px solid $content-bgColor


    &__title
      line-height: .22rem
      font-size: .16rem
      color: $content-fontColor

    &__tags
      margin-top: .08rem
      line-height: .18rem
      font-size: .13rem
      color: $content-fontColor

    &__tag
      margin-right: .16rem

    &__highlight
      margin: .08rem 0 0 0
      line-height: .18rem
      font-size: .13rem
      color: #E93B3B
</style>
