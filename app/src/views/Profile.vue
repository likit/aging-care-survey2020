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
            {{ this.$store.state.userProfile }}
          </pre>
          <pre>
            {{ userProfile }}
          </pre>
          <pre>
            {{ dataLoaded }}
          </pre>
        </div>
        <div class="column is-4 is-offset-4">
          <div class="box" v-if="dataLoaded">
            <b-field label="ชื่อ">
              <b-input placeholder="ชื่อ นามสกุล"></b-input>
            </b-field>
            <b-field label="ตำแหน่ง">
              <b-input placeholder="ตำแหน่ง"></b-input>
            </b-field>
            <b-field label="โทรศัพท์">
              <b-input placeholder="โทรศัพท์"></b-input>
            </b-field>
            <b-field label="E-mail">
              <b-input placeholder="E-mail" type="email" :disabled="true"></b-input>
            </b-field>
            <div class="buttons is-centered">
              <button @click="save()" class="button is-success">บันทึก</button>
              <button class="button is-light">ยกเลิก</button>
            </div>
          </div>
          <div class="box">
            Loading data..
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "profile",
  data() {
    return {
      dataLoaded: false,
    }
  },
  mounted() {
    this.$store.dispatch('fetchProfile', 'preeyanonlk@gmail.com').then(()=>{
      this.dataLoaded = true
      console.log(this.userProfile)
    })
  },
  computed: {
    ...mapGetters(['userProfile'])
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