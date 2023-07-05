<template>
  <div class="layout">
    <header class="page-header">
      <div class="container">
        <a href="/" class="logo" title="Vue-Signature-Simple">
          <img src="@/assets/images/vss.svg" alt="Vue-Signature-Simple"> Vue-Signature-Simple
        </a>
        <ul class="menu fr">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/document">API</router-link></li>
          <li><router-link to="/donate">Donate</router-link></li>
        </ul>
      </div>
    </header>

    <router-view></router-view>
    <div class="footer">
      <div class="container">
        <ul class="footer-row">
          <li>
            <h3>相关链接</h3>
            <ul>
              <li>
                <a href="https://github.com/shinnlu/vue-signature-simple" target="_blank">
                  Github
                  <img src="@/assets/images/github.svg" alt="github" class="icon">
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/vue-signboard" target="_blank">npm</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-header {
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
}
.menu {
  padding: 0;
  li {
    display: inline-block;
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
.logo {
  float: left;
  img {
    margin-right: 10px;
    height: 32px;
    vertical-align: middle;
  }
}
.router-link-exact-active.router-link-active {
  font-weight: bold;
  color: #2e5be2;
}
.icon {
  height: 1em;
  vertical-align: middle;
}
.footer {
  padding: 50px 0;
  background: #F7FBFD;
}
.footer-row {
  display: flex;
  ul {
    margin-top: 15px;
    font-size: 0.9em;
    line-height: 1.8;
  }
  li {
    flex: 1;
    list-style: none;
    color: #666;
  }
  h3 {
    color: #000;
  }
}
</style>
