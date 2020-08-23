<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title">ผู้เก็บข้อมูล</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
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
              <button class="button is-light" @click="cancel()">ยกเลิก</button>
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
  computed: {
    ...mapState(['userProfile', 'user'])
  },
  methods: {
    cancel: function() {
      this.$router.back()
    },
    save: function () {
      this.$store.dispatch('updateUserProfile', this.userProfile).then(()=>{
        this.$buefy.dialog.alert({
          title: 'Profile Saved',
          message: 'ข้อมูลได้รับการบันทึกเรียบร้อยแล้ว',
        })
      })
    }
  }
}
</script>