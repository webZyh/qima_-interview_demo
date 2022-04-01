import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class AddOrUpdateTransfer extends Vue {
  @Prop() readonly options!: any;
  // @Prop() valueArr?: string[];

  public created () {
    // 更新时如果存在可转换的状态，回显
    const currentStatus = this.$route.params.id

    if (currentStatus) {
      const currentOption: any = this.options.find((item: any) => {
        return item.value === currentStatus
      })
      this.valueArr = currentOption.transferArr?.length > 0 ? currentOption.transferArr : []
    }
  }

  public valueArr: string[] = [];

  public transfer () {
    const { valueArr } = this
    this.$emit('transferChange', valueArr)
  }
}
