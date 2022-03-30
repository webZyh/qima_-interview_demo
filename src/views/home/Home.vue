<template>
  <div class="home">
    <el-container>
      <el-main>
        <!--  -->
        <el-row>
          <el-col :span="4">
            Current status is "<span>{{ currentStatus }}</span>"
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="createStatus">Create Status</el-button>
          </el-col>
        </el-row>
        <!-- Update -->
        <el-row>
          <el-col :span="4">
            Update status:
          </el-col>
          <el-col :span="4">
            <el-select v-model="updateValue" @change="toUpdate" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- Could be transferred to -->
        <el-row>
          <el-col :span="4">
            <span>Could be transferred to:</span>
          </el-col>
          <el-col :span="4">
            <el-select v-model="couldTransferredValue" @change="couldTransferredChange" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <div>
          <span class="tip-text" v-show="showTip && cannotTransfer">No,cannot be transferred to ... </span>
          <span class="tip-text" v-show="showTip && canTransfer">Yes,can be transferred to ... </span>
        </div>
        <!-- How could be transferred to -->
        <el-row>
          <el-col :span="4">
            How could be transferred to:
          </el-col>
          <el-col :span="4">
            <el-select v-model="howTransferredValue" @click="howTransferredChange" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <!-- Transferred to -->
        <el-row>
          <el-col :span="4">
            Transferred to:
          </el-col>
          <el-col :span="4">
            <el-select v-model="transferredValue" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style lang='scss' scoped>
.el-container {
  padding: 0 100px;
  height: 100vh;
}
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
  .tip-text {
    color: red;
    font-size: 12px;
  }
}
</style>
<script src="./Home.clsss.ts" lang="ts"></script>
