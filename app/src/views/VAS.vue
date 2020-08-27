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
                <a class="button is-medium is-light"
                   href="/EQ-5D-5L">
                    ย้อนกลับ
                </a>
                <a class="button is-medium is-primary"
                   href="/MMSE">
                    ต่อไป
                </a>
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
        }
    }
</script>

<style scoped>

</style>