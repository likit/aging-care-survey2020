<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-table :data="hospitals">
            <template slot-scope="props">
              <b-table-column field="id" label="ID" width="40">
                {{ props.row.id }}
              </b-table-column>
              <b-table-column field="name" label="Name" width="40">
                {{ props.row.name }}
              </b-table-column>
              <b-table-column field="address" label="Address" width="40">
                {{ props.row.address }}
              </b-table-column>
              <b-table-column label="Action" width="40">
                <button class="button" @click="editHospital(props.row)">Edit</button>
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8 is-offset-2 box">
          <h1 class="title has-text-centered">ข้อมูลโรงพยาบาล</h1>
          <b-field>
            <b-input name="name" v-model="hospitalInfo.name" placeholder="ชื่อโรงพยาบาล"></b-input>
          </b-field>
          <b-field>
            <b-input name="address" type="textarea"
                     placeholder="ที่อยู่"
                     v-model="hospitalInfo.address"></b-input>
          </b-field>
          <b-field>
            <b-input name="phone" v-model="hospitalInfo.phone" placeholder="โทรศัพท์/โทรสาร"></b-input>
          </b-field>
          <b-field>
            <b-select placeholder="ระดับการให้บริการ" v-model="hospitalInfo.level">
              <option value="A">โรงพยาบาลศูนย์ (A)</option>
              <option value="S">โรงพยาบาลทั่วไประดับจังหวัด (S)</option>
              <option value="M2">โรงพยาบาลชุมชนแม่ข่าย (M2)</option>
              <option value="M1">โรงพยาบาลทั่วไปขนาดเล็ก (M1)</option>
              <option value="F3">โรงพยาบาลชุมชนขนาดเล็ก (F3)</option>
              <option value="F2">โรงพยาบาลชุมชนขนาดกลาง (F2)</option>
              <option value="F1">โรงพยาบาลชุมชนขนาดใหญ่ (F1)</option>
            </b-select>
          </b-field>
          <b-field>
            <b-input name="phone" v-model="hospitalInfo.standard" placeholder="มาตรฐานที่รพ.ได้รับ"></b-input>
          </b-field>
          <b-field>
            <div class="buttons is-centered">
              <a class="button is-medium is-success" @click="save">
                <b-icon pack="far" icon="save"></b-icon>
                <span>บันทึก</span>
              </a>
            </div>
          </b-field>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapState} from 'vuex'

export default {
name: "HospitalInfo",
  computed: {
  ...mapState(['hospitalInfo', 'hospitals'])
  },
  mounted() {
    this.$store.dispatch('resetHospitalInfo')
    this.$store.dispatch('fetchHospitals')
  },
  methods: {
    editHospital(info) {
      this.$store.dispatch('setCurrentHospital', info)
    },
    save() {
      let self = this
      this.$store.dispatch('saveHospital').then(()=>{
        self.$buefy.dialog.alert({
          title: 'Data have been saved!',
          message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
          type: 'is-success',
          hasIcon: true,
          icon: 'check-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true,
        })
      }).catch(()=>{
        self.$buefy.dialog.alert({
          title: 'Error!',
          message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      })
    }
  }
}
</script>

<style scoped>

</style>