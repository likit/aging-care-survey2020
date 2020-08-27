<template>
  <section class="section">
    <div class="container box">
      <div class="columns">
        <div class="column is-10 is-offset-1 has-text-centered">
          <img src="../assets/moph.png" width="100">
          <h1 class="title">แบบฟอร์มบันทึกข้อมูล<br>CASE REPORT FORM</h1>
          <h2 class="subtitle">
            โครงการวิจัย เรื่องการวิเคราะห์ต้นทุนประสิทธิผลของรูปแบบการจัดบริการดูแลกลางวันแบบไปกลับและรูปแบบการดูแลสุขภาพที่บ้านสำหรับผู้สูงอายุที่มีข้อจำกัดในการดำเนินชีวิตประจำวัน
          </h2>

          <b-notification type="is-light" aria-close-label="Close notification"
            v-if="$store.getters.isUserLoggedIn">
            โปรดกรอกข้อมูลส่วนบุคคลของท่านก่อนกรอกข้อมูลแบบสำรวจ
          </b-notification>
          <b-notification type="is-info is-light" aria-close-label="Close notification" v-else>
            กรุณาลงชื่อเข้าใช้งานระบบด้วยการคลิกที่ปุ่ม log in ด้านล่าง
          </b-notification>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8 is-offset-2 has-text-centered">
          <Profile v-if="$store.getters.isUserLoggedIn"></Profile>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <button v-if="$store.getters.isUserLoggedIn"
                  class="button is-primary is-medium"
                  @click="addRecord"
          >
            <span>เพิ่มรายการ</span>
            <b-icon pack="fas" icon="plus"></b-icon>
          </button>
          <router-link :to="{path: '/login'}" class="button is-medium is-primary" v-else>
            <span>Log In</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import Profile from "@/views/Profile"

export default {
  name: 'landing',
  components: {Profile},
  methods: {
    addRecord: function() {
      let self = this
      this.$store.dispatch('createNewRecord').then(()=>{
        self.$router.push({name: 'Home'})
      })
    }
  }
}

</script>