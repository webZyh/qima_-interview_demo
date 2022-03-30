import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})

export default class AddOrUpdateTransfer extends Vue {
  @Prop() readonly options!: any;
  // @Prop() valueArr?: string[];

  public valueArr: string[] = [];

  public transfer () {
    const { valueArr } = this
    this.$emit('transferChange', valueArr)
  }
}
