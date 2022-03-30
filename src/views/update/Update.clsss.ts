import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component({
  components: {}
})

export default class Update extends Vue {
  public newStatusName = '';
  public valueArr: string[] = [];

  @State('statusOptions')
  private options: any;

  private statusName = '';

  public mounted () {
    this.statusName = this.$route.params.id
  }

  public toHome () {
    this.$router.push('/')
  }

  public deleteStatus () {
    this.$store.commit('delete_current_status', this.statusName)
    this.$store.commit('set_current_status')
    this.$router.push('/')
  }

  public updateStatus () {
    // todo
    this.$router.push('/')
  }
}
