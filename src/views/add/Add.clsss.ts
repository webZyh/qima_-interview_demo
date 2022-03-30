import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component({
  components: {}
})

export default class Add extends Vue {
  public newStatusName = '';
  public valueArr: string[] = [];

  @State('statusOptions')
  private options: any;

  public toHome () {
    this.$router.push('/')
  }

  public createStatus () {
    const { newStatusName } = this
    if (!newStatusName) {
      this.$message.error('please input new status name!')
      return
    }

    const obj = {
      label: newStatusName,
      value: newStatusName
    }
    this.$store.commit('add_status_option', obj)
    this.$store.commit('set_current_status', newStatusName)
    this.$router.push('/')
  }
}
