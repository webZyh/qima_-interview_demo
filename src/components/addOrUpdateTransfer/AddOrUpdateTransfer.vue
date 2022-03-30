<template>
  <div class="container">
    <el-select v-model="valueArr" @change="transfer" multiple placeholder="Select a status">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script src="./AddOrUpdateTransfer.clsss.ts" lang="ts"></script>
