import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
// const globle = namespace('globle')

@Component({
  components: {}
})

export default class Home extends Vue {
  @State('statusOptions')
  private options: any;

  @State('currentStatus') currentStatus!: string;

  private value = '';
  private updateValue = '';
  private couldTransferredValue = '';
  private howTransferredValue = '';
  private transferredValue = '';
  private showTip = false;
  private canTransfer = false; // 是否能转换
  private fromStatus = '';
  private toStatus = '';
  private transferFlag = true;

  public mounted () {
    // console.log(this.options)
  }

  // 跳转新增页
  public createStatus () {
    this.$router.push('/creationPage')
  }

  // 跳转更新页
  public toUpdate () {
    const { updateValue } = this
    // console.log(updateValue)

    this.$router.push({ path: `/updatePage/${updateValue}` })
  }

  // 查询是否能Transfer
  public couldTransferredChange () {
    this.transferFlag = true
    this.transferredValue = ''
    const { couldTransferredValue, currentStatus, options } = this
    this.toStatus = couldTransferredValue
    this.fromStatus = currentStatus
    // 显示总开关
    this.showTip = true
    // 判断是否能从fromStatus转换到toStatus
    console.log(options)
    const newOptionObj = options.find((item: any) => {
      return item.label === currentStatus
    })

    if (newOptionObj.transferArr.includes(this.toStatus)) {
      // 可以转换
      this.canTransfer = true
    } else {
      this.canTransfer = false
    }
    console.log(newOptionObj)
  }

  //  查询如何Transfer
  public howTransferredChange () {
    // todo
  }

  // 转换状态
  public transfer () {
    this.showTip = false
    this.couldTransferredValue = ''
    const { transferredValue, currentStatus, options } = this
    this.toStatus = transferredValue
    const newOptionObj = options.find((item: any) => {
      return item.label === currentStatus
    })
    if (newOptionObj.transferArr.includes(this.toStatus)) {
      this.transferFlag = true
      this.$store.commit('set_current_status', this.toStatus)
      this.$message.success('success!')
    } else {
      this.transferFlag = false
    }
  }
}
