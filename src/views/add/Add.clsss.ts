import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import AddOrUpdateTransfer from '@/components/addOrUpdateTransfer/AddOrUpdateTransfer.vue'

@Component({
  components: {
    AddOrUpdateTransfer
  }
})

export default class Add extends Vue {
  public newStatusName = '';
  public transferValueArr: string[] = [];

  @State('statusOptions')
  private options: any;

  public toHome () {
    this.$router.push('/')
  }

  public createStatus () {
    const { newStatusName, transferValueArr } = this
    if (!newStatusName) {
      this.$message.error('please input new status name!')
      return
    }

    const obj: any = {
      label: newStatusName,
      value: newStatusName,
      transferArr: [] // 可以transfer的数组
    }

    if (transferValueArr.length > 0) {
      obj.transferArr = [...transferValueArr]
    }
    // console.log(obj)

    this.$store.commit('add_status_option', obj)
    this.$store.commit('set_current_status', newStatusName)
    this.$router.push('/')
  }

  // 获取可转换的数组
  public getTransferValueArr (data: string[]) {
    this.transferValueArr = data
    console.log(this.transferValueArr)
  }
}
