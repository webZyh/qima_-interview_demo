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
  private cannotTransfer = false;
  private canTransfer = false;

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
    const { couldTransferredValue } = this
    // todo
    this.showTip = true
    this.cannotTransfer = true
  }

  //  查询如何Transfer
  public howTransferredChange () {
    // todo
  }
}
