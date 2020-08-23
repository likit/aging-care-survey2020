<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title">ผู้เก็บข้อมูล</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <pre>
            {{ user }}
          </pre>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box" v-if="!dataLoading">
            <b-field label="ชื่อ">
              <b-input placeholder="ชื่อ นามสกุล" v-model="userProfile.data.fullname"></b-input>
            </b-field>
            <b-field label="ตำแหน่ง">
              <b-input placeholder="ตำแหน่ง" v-model="userProfile.data.position"></b-input>
            </b-field>
            <b-field label="โทรศัพท์">
              <b-input placeholder="โทรศัพท์" v-model="userProfile.data.phone"></b-input>
            </b-field>
            <b-field label="E-mail">
              <b-input placeholder="E-mail" type="email" :disabled="true" v-model="userProfile.data.email"></b-input>
            </b-field>
            <div class="buttons is-centered">
              <button @click="save()" class="button is-success">บันทึก</button>
              <button class="button is-light">ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "profile",
  data() {
    return {
      dataLoading: true,
    }
  },
  mounted() {
    this.$store.dispatch('fetchProfile', this.$store.state.user.data.email).then(()=>{
      this.dataLoading = false;
    }).catch(()=>{
       this.$buefy.dialog.alert({
        title: 'โปรแกรมมีปัญหาในการโหลดข้อมูล',
        message: 'โปรแกรมไม่สามารถดาวน์โหลดข้อมูลทางอินเตอร์เน็ตได้ กรุณาตรวจสอบการเชื่อมต่อของท่านก่อนลองใช้งานอีกครั้ง',
        type: 'is-danger',
        hasIcon: true,
        icon: 'times-circle',
        iconPack: 'fa',
        ariaRole: 'alertdialog',
        ariaModal: true
      })
    }
    )
  },
  computed: {
    ...mapState(['userProfile', 'user'])
  },
  methods: {
    save: function () {
      this.$store.dispatch('updateUserProfile', this.userProfile).then(()=>{
        this.$buefy.dialog.alert({
          title: 'Profile Saved.',
          message: 'Your profile has been saved.',
        })
      })
    }
  }
}
</script>