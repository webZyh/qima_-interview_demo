import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import AddOrUpdateTransfer from '@/components/addOrUpdateTransfer/AddOrUpdateTransfer.vue'

@Component({
  components: {
    AddOrUpdateTransfer
  }
})

export default class Update extends Vue {
  public newStatusName = '';
  public transferValueArr: string[] = [];

  @State('statusOptions')
  private options: any;

  private statusName = '';

  public mounted () {
    this.init()
  }

  public init () {
    this.statusName = this.$route.params.id
    // const currentOption: any = this.options?.find((item: any) => {
    //   return item.value === this.statusName
    // })
    // console.log(currentOption)
    // this.transferValueArr = [...currentOption.transferArr]
  }

  public toHome () {
    this.$router.push('/')
  }

  public deleteStatus () {
    this.$store.commit('delete_current_status', this.statusName)
    this.$store.commit('set_current_status')
    this.$router.push('/')
  }

  // 更新可转换的status
  public updateStatus () {
    const { statusName, transferValueArr } = this
    const obj: any = {
      label: statusName,
      value: statusName,
      transferArr: [] // 可以transfer的数组
    }

    if (transferValueArr.length > 0) {
      obj.transferArr = [...transferValueArr]
    }
    // console.log(obj)

    this.$store.commit('update_status_option', obj)
    this.$store.commit('set_current_status', statusName)
    this.$router.push('/')
  }

  public getTransferValueArr (data: string[]) {
    this.transferValueArr = data
  }
}
