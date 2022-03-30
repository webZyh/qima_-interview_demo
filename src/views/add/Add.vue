<template>
  <el-container>
    <el-main>
      <el-row>
        <el-button type="text" @click="toHome">main page</el-button>
      </el-row>
      <el-row>
        <el-col :span="3">
          <span>Status name:</span>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="new status name" v-model="newStatusName"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          Could be transferred to :
        </el-col>
        <el-col :span="4">
          <AddOrUpdateTransfer :options="options" @transferChange="getTransferValueArr"></AddOrUpdateTransfer>
        </el-col>
      </el-row>

      <el-button type="primary" size="mini" @click="createStatus">Create Status</el-button>
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

<script src="./Add.clsss.ts" lang="ts"></script>
