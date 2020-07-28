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
                      เพื่อศึกษาต้นทุน ประสิทธิภาพของการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน ระยะหลังการดูแล 1 เดือนและ 3 เดือน
                  </li>
                  <li>
                      เพื่อศึกษาต้นทุนกิจกรรมการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน จำแนกระยะการดูแล
                  </li>
              </ol>
              </b-message>
            </div>
        </div>
        <div class="columns">
            <div class="column is-4 is-offset-4 box">
                <b-field label="วันที่บันทึกข้อมูล">
                    <b-datepicker
                            v-model="recordedDate"
                            size="is-medium"
                            :show-week-number=true
                            placeholder="Click to select..."
                            icon="calendar-today"
                            :mobile-native="false"
                            trap-focus>
                    </b-datepicker>
                </b-field>
                <b-field label="ผู้ให้ข้อมูล">
                    <b-select required
                              v-model="infoProviderIs"
                              expanded
                              size="is-medium">
                        <option value="ผู้ป่วย">ผู้ป่วย</option>
                        <option value="ญาติ">ญาติ</option>
                        <option value="ผู้ดูแลที่พัก">ผู้ดูแลที่พัก</option>
                    </b-select>
                </b-field>
                <b-field label="มีความสัมพันธ์กับผู้ป่วยโดยเป็น" v-if="infoProviderIs==='ญาติ'">
                    <b-input v-model="infoProviderRelationship" size="is-medium"></b-input>
                </b-field>
                <b-field label="ระยะเวลาในการดูแลผู้ป่วย" v-if="infoProviderIs==='ผู้ดูแลที่พัก'">
                    <b-input v-model="infoProviderDuration" size="is-medium"></b-input>
                </b-field>
                <b-field>
                    <p class="control has-text-centered">
                        <a href="/health-record" class="button is-medium is-primary">ต่อไป</a>
                    </p>
                </b-field>
            </div>
        </div>
      <pre>
        {{ this.$store.state.form }}
      </pre>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
    data() {
      return {
          careDuration: null
      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      recordedDate: {
        get() {
          return this.$store.state.form.recordedDate;
        },
        set(value) {
          this.$store.commit('SET_RECORDED_DATE', {value})
        }
      },
      infoProviderIs: {
        get() {
          return this.$store.state.form.infoProvider.is;
        },
        set(value) {
          this.$store.commit("SET_INFO_PROVIDER", {value})
        }
      },
      infoProviderRelationship: {
        get() {
          return this.$store.state.form.infoProvider.relationship;
        },
        set(value) {
          this.$store.commit("SET_INFO_PROVIDER_RELATIONSHIP", {value})
        }
      },
      infoProviderDuration: {
        get() {
          return this.$store.state.form.infoProvider.duration;
        },
        set(value) {
          this.$store.commit("SET_INFO_PROVIDER_DURATION", {value})
        }
      },
    }
}
</script>
