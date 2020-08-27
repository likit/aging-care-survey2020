<template>
<section class="section">
  <div class="container">
    <b-table :data="records">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="pntName" label="Patient Name" width="40">
          {{ props.row.pntName }}
        </b-table-column>
      <b-table-column field="createdDate" label="Created Date" width="40">
        {{ new Date(props.row.createdDate).toLocaleString() }}
      </b-table-column>
      <b-table-column field="updatedDate" label="Updated Date" width="40">
        {{ new Date(props.row.updatedDate).toLocaleString() }}
      </b-table-column>
        <b-table-column label="Edit" width="40">
          <div class="buttons">
            <b-button @click="loadForm(props.row.id)" class="is-light">
              <b-icon pack="fas" icon="pencil-alt">
              </b-icon>
            </b-button>
            <b-button @click="confirmDeleteForm(props.row.id)" class="is-danger">
              <b-icon pack="far" icon="trash-alt">
              </b-icon>
            </b-button>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</section>
</template>

<script>
import { forms } from "@/firebase";
export default {
  name: "Record",
  data() {
    return {
      records: []
    }
  },
  methods: {
    loadForm: function(formId) {
      let self = this
      this.$store.dispatch('loadForm', formId).then(()=>{
        self.$router.push({path: '/home'})
      })
    },
    deleteForm: function(formId) {
      this.$store.dispatch('deleteForm', formId).then(()=>{
        let fltRecords = this.records.filter((r)=>{
          return r.id !== formId
        })
        this.records = fltRecords
        this.$buefy.toast.open('Record deleted!')
      })
    },
    confirmDeleteForm: function(formId) {
      let self = this
      this.$buefy.dialog.confirm({
        title: 'Login Successful',
        message: 'คุณแน่ใจว่าจะลบข้อมูลนี้ หากลบแล้วไม่สามารถเรียกคืนได้',
        type: 'is-warning',
        hasIcon: true,
        icon: 'exclamation-circle',
        iconPack: 'fas',
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: ()=>{ self.deleteForm(formId) }
      })
    }
  },
  mounted() {
    let self = this
    forms.where('createdBy', '==', this.$store.state.user.email).get().then(
        (snapshot)=>{
          snapshot.forEach((d)=>{
            let formData = d.data()
            let f = {
              id: d.id,
              createdDate: formData.createdDate.toDate(),
              createdBy: formData.createdBy,
              updatedDate: formData.lastUpdate.toDate(),
              pntName: formData.patientRecord.pntName,
            }
            self.records.push(f)
          })
        }
    )
  }
}
</script>

<style scoped>

</style>