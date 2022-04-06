<template>
  <div>
    <div p15 flex>
      <n-card title="项目" size="small" :segmented="true">
        <template #header-extra>
          <n-button text type="primary">更多</n-button>
        </template>
        <div class="card-list">
          <n-card v-for="i in 10" :key="i" title="Vue Naive Admin" size="small">
            <p op60>一个基于 Vue3.0、Vite、Naive UI 的轻量级后台管理模板</p>
          </n-card>
          <div class="blank"></div>
          <div class="blank"></div>
          <div class="blank"></div>
          <div class="blank"></div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .n-card {
    width: 300px;
    flex-shrink: 0;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;
    }
  }
  .blank {
    width: 300px;
    height: 0;
  }
}
</style>
