<!--
 * @Author: your name
 * @Date: 2021-04-13 21:51:23
 * @LastEditTime: 2021-04-13 22:24:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \girdsome-blog\src\components\Latest.vue
-->
<template>
  <div>
    <div class="latest-journals-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <div class="latest-journals">
      <div class="container">
        <a
          href="/journal/gridsome-forestry-cms/"
          class="journal"
          v-for="latest in $page.latests.edges"
          :key="latest.node.title"
        >
          <h3 class="journal-title">
            {{ latest.node.title }}
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "latest",
};
</script>

<style>
</style>