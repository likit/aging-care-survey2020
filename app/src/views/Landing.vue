<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8 is-offset-2 has-text-centered">
          <h1 class="title">แบบฟอร์มบันทึกข้อมูล CASE REPORT FORM</h1>

          <b-notification type="is-light" aria-close-label="Close notification"
            v-if="$store.getters.isUserLoggedIn">
            โปรดกรอกข้อมูลส่วนบุคคลของท่านก่อนกรอกข้อมูลแบบสำรวจ
          </b-notification>
          <b-notification type="is-info is-light" aria-close-label="Close notification" v-else>
            กรุณาลงชื่อเข้าใช้งานระบบด้วยการคลิกที่ปุ่ม log in ด้านล่าง
          </b-notification>
          <Profile v-if="$store.getters.isUserLoggedIn"></Profile>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <router-link :to="{path: '/home'}" class="button is-medium is-primary"
            v-if="$store.getters.isUserLoggedIn">
            <span>ต่อไป</span>
            <b-icon pack="fas" icon="chevron-right"></b-icon>
          </router-link>
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
}

</script>