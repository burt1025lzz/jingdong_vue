<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe613;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe60b;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
        class="banner__img"
        alt="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>
    <div class="icons">
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img
          alt="icons__item__img"
          class="icons__item__img"
          src="http://www.dell-lee.com/imgs/vue3/超市.png"
        />
        <p class="icons__item__desc">超市便利</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe607;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6bc;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe616;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe681;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="sass">
@import "style/viriables"
@import "style/mixins"
.wrapper
  position: absolute
  top: 0
  right: 0
  bottom: .5rem
  left: 0
  padding: 0 .18rem

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

.docker
  display: flex
  box-sizing: border-box
  position: absolute
  padding: 0 .18rem
  left: 0
  bottom: 0
  width: 100%
  height: .49rem
  border-top: .01rem solid $content-bgColor
  color: $content-fontColor

  &__item
    flex: 1
    text-align: center

    .iconfont
      margin: .07rem 0 .02rem 0
      font-size: .18rem

    &--active
      color: #1FA4FC

  &__title
    font-size: .2rem
    transform: scale(.5, .5)
    transform-origin: center top
</style>
