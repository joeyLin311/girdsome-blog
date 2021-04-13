<!--
 * @Author: your name
 * @Date: 2021-04-10 17:44:19
 * @LastEditTime: 2021-04-13 22:24:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \girdsome-blog\src\layouts\Default.vue
-->
<template>
  <div class="layout">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a href="/" class="home-link active--exact active">
            <img
              src="/img/logo.332701b7.svg"
              alt="Nichlas W. Andersen"
              class="logo"
            />
          </a>
        </div>
        <nav class="nav right">
          <a href="/journal" class="nav__link">Journal</a>
          <a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
      </div>
    </header>

    <!-- 子组件出口 -->
    <slot></slot>

    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
