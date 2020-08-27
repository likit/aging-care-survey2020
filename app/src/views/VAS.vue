<template>
    <section class="section">
        <div class="container">
            <b-steps
                    v-model="activeStep"
                    :has-navigation="false"
            >
                <b-step-item step="1" label="ประวัติสุขภาพ"></b-step-item>
                <b-step-item step="2" label="ข้อมูลด้านต้นทุนผู้ป่วย"></b-step-item>
                <b-step-item step="3" label="แบบสอบถาม EQ-5D-5L"></b-step-item>
                <b-step-item step="4" label="แบบประเมินคุณภาพชีวิต VAS"></b-step-item>
                <b-step-item step="5" label="MMSE-Thai 2002"></b-step-item>
            </b-steps>
            <h1 class="title is-size-3">แบบประเมินคุณภาพชีวิต</h1>
            <b-message title="คำชี้แจง" type="is-primary">
                <b-field label="VAS">
                    <b-slider size="is-large" v-model="form.vas" type="is-info" :min="0" :max="100">
                        <template v-for="val in [10,20,30,40,50,60,70,80,90]">
                            <b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>
                        </template>
                    </b-slider>
                </b-field>
            </b-message>
            <div class="buttons is-centered">
                <router-link class="button is-medium is-light" :to="{name: 'EQ5D5L'}">
                  <b-icon pack="fas" icon="chevron-left"></b-icon>
                  <span>
                    ย้อนกลับ
                  </span>
                </router-link>
              <a class="button is-medium is-success" @click="save">
                <b-icon pack="far" icon="save"></b-icon>
                <span>บันทึก</span>
              </a>
              <router-link class="button is-medium is-primary" :to="{name: 'MMSE'}">
                <span>
                    ต่อไป
                </span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "VAS",
      computed: {
          ...mapState(['form'])
      },
        data() {
            return {
                activeStep: 3,
            }
        },
      methods: {
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

<style scoped>

</style>