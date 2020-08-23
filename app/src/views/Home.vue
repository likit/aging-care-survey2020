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
      <div class="columns">
        <div class="column is-6 is-offset-3 box">
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
                      v-model="infoProviderIs">
              <option value="ผู้ป่วย">ผู้ป่วย</option>
              <option value="ญาติ">ญาติ</option>
              <option value="ผู้ดูแลที่พัก">ผู้ดูแลที่พัก</option>
            </b-select>
          </b-field>
          <b-field label="มีความสัมพันธ์กับผู้ป่วยโดยเป็น" v-if="infoProviderIs==='ญาติ'">
            <b-input size="is-medium" v-model="infoProviderRelationship"></b-input>
          </b-field>
          <b-field label="ระยะเวลาในการดูแลผู้ป่วย" v-if="infoProviderIs==='ผู้ดูแลที่พัก'">
            <b-numberinput min="0" size="is-medium" v-model="infoProviderDuration"></b-numberinput>
          </b-field>
          <b-field>
            <p class="buttons is-centered">
              <a class="button is-medium is-light" @click="back">
                <b-icon pack="fas" icon="chevron-left"></b-icon>
                <span>Back</span>
              </a>
              <a class="button is-medium is-primary" @click="saveAndNext">
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
        this.$store.commit('SET_RECORDED_DATE', {recordedDate})
      }
    },
    infoProviderIs: {
      get() {
        return this.$store.state.form.infoProvider.is;
      },
      set(is) {
        this.$store.commit("SET_INFO_PROVIDER", {is})
      }
    },
    infoProviderRelationship: {
      get() {
        return this.$store.state.form.infoProvider.relationship;
      },
      set(relationship) {
        this.$store.commit("SET_INFO_PROVIDER_RELATIONSHIP", {relationship})
      }
    },
    infoProviderDuration: {
      get() {
        return this.$store.state.form.infoProvider.duration;
      },
      set(duration) {
        this.$store.commit("SET_INFO_PROVIDER_DURATION", {duration})
      }
    },
  },
  methods: {
    saveAndNext() {
      this.$store.commit('SET_LAST_UPDATE')
      this.$router.push({'name': 'HealthRecord'})
    },
    back() {
      this.$router.back()
    }
  }
}
</script>
