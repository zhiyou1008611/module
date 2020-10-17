<template>
  <div class="header">
    <div class="nav-toptar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
      <el-container></el-container>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/product'" target="_blank">
                    <div>
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-mesia/f5l5ab05232ed14ccd78ec67e024495a.png" alt="">
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header"
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.header {
  .nav-toptar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    color: $colorE;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: $colorE;
        margin-right: 15px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png", contain);
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background: $colorA;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 260px;
        padding-left: 260px;
        .item-menu {
          display: inline-block;
          color: $colorB;
          font-weight: bold;
          font-size: $fontI;
          line-height: 112px;
          margin-right: 30px;
          span {
            cursor: pointer;
          }
          &:hover {
          }
        }
      }
      .header-search {
      }
    }
  }
}
</style>