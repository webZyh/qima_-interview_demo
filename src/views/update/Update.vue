<template>
  <el-container>
    <el-main>
      <el-row>
        <el-button type="text" @click="toHome">main page</el-button>
      </el-row>
      <el-row>
        <el-col :span="3">
          <span>Status name: {{ statusName }}</span>
        </el-col>
        <el-col :span="4">
          <el-button type='text' @click="deleteStatus">delete</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          Could be transferred to :
        </el-col>
        <el-col :span="4">
          <el-select v-model="valueArr" multiple placeholder="Select a status">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-button type="primary" size="mini" @click="updateStatus">Update Status</el-button>
    </el-main>
  </el-container>

</template>

<style lang="scss" scoped>
.el-container {
  padding: 0 100px;
  height: 100vh;
  .el-main {
    background-color: #E9EEF3;
    color: #252b3a;
    text-align: left;
    padding: 10px;
    .el-row {
      height: 40px;
      line-height: 40px;
      display: flex;
    }
  }
}
</style>

<script src="./Update.clsss.ts" lang="ts"></script>
