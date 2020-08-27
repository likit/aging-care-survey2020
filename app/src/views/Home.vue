<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-message
              title="วัตถุประสงค์การวิจัย (ปีที่ 1)"
              type="is-info">
            <ol>
              <li>
                เพื่อศึกษาต้นทุน
                ประสิทธิภาพของการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน
                ระยะหลังการดูแล 1 เดือนและ 3 เดือน
              </li>
              <li>
                เพื่อศึกษาต้นทุนกิจกรรมการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน
                จำแนกระยะการดูแล
              </li>
            </ol>
          </b-message>
        </div>
      </div>
      <pre>{{ hospitals }}</pre>
      <div class="columns">
        <div class="column is-6 is-offset-3 box">
          <b-field label="โรงพยาบาล">
            <b-select v-model="form.hospitalName" placeholder="กรุณาเลือกโรงพยาบาล">
              <option v-for="hos in hospitals"
                      :key="hos.id"
                      :value="hos.name">{{ hos.name }}
              </option>
            </b-select>
          </b-field>
          <b-field label="วันที่บันทึกข้อมูล">
            <b-datepicker
                :mobile-native="false"
                :show-week-number=true
                icon="calendar-today"
                placeholder="Click to select..."
                size="is-medium"
                trap-focus
                v-model="recordedDate">
            </b-datepicker>
          </b-field>
          <b-field label="ผู้ให้ข้อมูล">
            <b-select expanded
                      required
                      size="is-medium"
                      v-model="form.infoProvider.is">
              <option value="ผู้ป่วย">ผู้ป่วย</option>
              <option value="ญาติ">ญาติ</option>
              <option value="ผู้ดูแลที่พัก">ผู้ดูแลที่พัก</option>
            </b-select>
          </b-field>
          <b-field label="มีความสัมพันธ์กับผู้ป่วยโดยเป็น" v-if="form.infoProvider.is==='ญาติ'">
            <b-input size="is-medium" v-model="form.infoProvider.relationship"></b-input>
          </b-field>
          <b-field label="ระยะเวลาในการดูแลผู้ป่วย" v-if="form.infoProvider.is==='ผู้ดูแลที่พัก'">
            <b-numberinput min="0" size="is-medium" v-model="form.infoProvider.duration"></b-numberinput>
          </b-field>
          <b-field>
            <p class="buttons is-centered">
              <a class="button is-medium is-light" @click="back">
                <b-icon pack="fas" icon="chevron-left"></b-icon>
                <span>กลับ</span>
              </a>
              <a class="button is-medium is-success" @click="save">
                <b-icon pack="far" icon="save"></b-icon>
                <span>บันทึก</span>
              </a>
              <a class="button is-medium is-primary" @click="goNext">
                <span>ต่อไป</span>
                <b-icon pack="fas" icon="chevron-right"></b-icon>
              </a>
            </p>
          </b-field>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.user;
    },
    recordedDate: {
      get() {
        return this.$store.state.form.recordedDate;
      },
      set(recordedDate) {
        this.$store.commit('SET_RECORDED_DATE', recordedDate)
      }
    },
    ...mapState(['form', 'hospitals'])
  },
  mounted() {
    if (this.hospitals.length === 0)
      this.$store.dispatch('fetchHospitals')
  },
  methods: {
    goNext() {
      this.$router.push({'name': 'HealthRecord'})
    },
    back() {
      this.$router.push({name: 'Landing'})
    },
    save() {
      let self = this
      this.$store.dispatch('saveForm').then(()=>{
        this.$store.commit('SET_LAST_UPDATE')
        self.$buefy.dialog.alert({
          title: 'Login Successful',
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