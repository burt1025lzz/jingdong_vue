<template>
  <div className="position">
    <span className="iconfont position__icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span className="iconfont position__notice">&#xe613;</span>
  </div>
  <div className="search">
    <span className="iconfont">&#xe60b;</span>
    <span className="search__text">山姆会员商店优惠商品</span>
  </div>
  <div className="banner">
    <img
      className="banner__img"
      alt="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div className="icons">
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
    <div className="icons__item">
      <img
        alt="icons__item__img"
        className="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
      />
      <p className="icons__item__desc">超市便利</p>
    </div>
  </div>
  <div className="gap"></div>
</template>

<script>
export default {
  name: "StaticPart"
};
</script>

<style lang="sass" scoped>
@import "~@/style/viriables"
@import "~@/style/mixins"
.position
  position: relative
  padding: .16rem .24rem .16rem 0
  line-height: .22rem
  font-size: .16rem
  color: $content-fontColor
  @include ellipsis

  &__icon
    position: relative
    top: .01rem
    font-size: .2rem

  &__notice
    position: absolute
    top: .17rem
    right: 0
    font-size: .2rem

.search
  margin-bottom: .12rem
  line-height: .32rem
  background: #F5F5F5
  color: #B7B7B7
  border-radius: .16rem

  .iconfont
    position: relative
    top: .02rem
    display: inline-block
    padding: 0 .08rem 0 .16rem
    font-size: .2rem

  &__text
    display: inline-block
    font-size: .14rem

.banner
  height: 0
  overflow: hidden
  padding-bottom: 25.4%

  &__img
    width: 100%

.icons
  display: flex
  flex-wrap: wrap
  margin-top: .16rem

  &__item
    width: 20%

    &__img
      display: block
      width: .4rem
      height: .4rem
      margin: 0 auto

    &__desc
      margin: .06rem 0 .16rem 0
      text-align: center
      color: $content-fontColor

.gap
  margin: 0 -.18rem
  height: .1rem
  background: $content-bgColor
</style>
