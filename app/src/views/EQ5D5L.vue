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
            <h1 class="title">แบบสอบถาม EQ-5D-5L</h1>
            <b-message title="การเคลื่อนไหว" :closable="false" type="is-primary">
                <div class="block">
                        <b-radio size="is-medium" v-model="form.EQ5D5L.walk" native-value="1">
                            ข้าพเจ้าไม่มีปัญหาในการเดิน
                        </b-radio>
                        <b-radio size="is-medium" v-model="form.EQ5D5L.walk" native-value="2">
                            ข้าพเจ้ามีปัญหาในการเดินเล็กน้อย
                        </b-radio>
                        <b-radio size="is-medium" v-model="form.EQ5D5L.walk" native-value="3">
                            ข้าพเจ้ามีปัญหาในการเดินปานกลาง
                        </b-radio>
                        <b-radio size="is-medium" v-model="form.EQ5D5L.walk" native-value="4">
                            ข้าพเจ้ามีปัญหาในการเดินอย่างมาก
                        </b-radio>
                        <b-radio size="is-medium" v-model="form.EQ5D5L.walk" native-value="5">
                            ข้าพเจ้าเดินไม่ได้
                        </b-radio>
                </div>
            </b-message>
            <b-message title="การดูแลตนเอง" :closable="false" type="is-primary">
                    <b-radio size="is-medium" v-model="form.EQ5D5L.selfcare" native-value="1">
                        ข้าพเจ้าไม่มีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตนเอง
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.selfcare" native-value="2">
                        ข้าพเจ้ามีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตนเองเล็กน้อย
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.selfcare" native-value="3">
                        ข้าพเจ้ามีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตนเองปานกลาง
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.selfcare" native-value="4">
                        ข้าพเจ้ามีปัญหาในการอาบน้ำหรือใส่เสื้อผ้าด้วยตนเองอย่างมาก
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.selfcare" native-value="5">
                        ข้าพเจ้าอาบน้ำหรือใส่เสื้อผ้าด้วยตนเองไม่ได้
                    </b-radio>
            </b-message>
            <b-message title="กิจกรรมที่ทำประจำ (เช่นทำงาน, เรียนหนังสือ, ทำงานบ้าน, กิจกรรมในครอบครัวหรือกิจกรรมยามว่าง)" :closable="false" type="is-primary">
                    <b-radio size="is-medium" v-model="form.EQ5D5L.routine" native-value="1">
                        ข้าพเจ้าไม่มีปัญหาในการทำกิจกรรมที่ทำเป็นประจำ
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.routine" native-value="2">
                        ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำเล็กน้อย
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.routine" native-value="3">
                        ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำปานกลาง
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.routine" native-value="4">
                        ข้าพเจ้ามีปัญหาในการทำกิจกรรมที่ทำประจำอย่างมาก
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.routine" native-value="5">
                        ข้าพเจ้าทำกิจกรรมที่ทำประจำไม่ได้
                    </b-radio>
            </b-message>
            <b-message title="อาการเจ็บปวด/อาการไม่สบายตัว" :closable="false" type="is-primary">
                    <b-radio size="is-medium" v-model="form.EQ5D5L.pain" native-value="1">
                        ข้าพเจ้าไม่มีอาการเจ็บปวดหรืออาการไม่สบายตัว
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.pain" native-value="2">
                        ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวเล็กน้อย
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.pain" native-value="3">
                        ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวปานกลาง
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.pain" native-value="4">
                        ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมาก
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.pain" native-value="5">
                        ข้าพเจ้ามีอาการเจ็บปวดหรืออาการไม่สบายตัวอย่างมากที่สุด
                    </b-radio>
            </b-message>
            <b-message title="ความวิตกกังวล/ความซึมเศร้า" :closable="false" type="is-primary">
                    <b-radio size="is-medium" v-model="form.EQ5D5L.depression" native-value="1">
                        ข้าพเจ้าไม่รู้สึกวิตกกังวลหรือซึมเศร้า
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.depression" native-value="2">
                        ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าเล็กน้อย
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.depression" native-value="3">
                        ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าปานกลาง
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.depression" native-value="4">
                        ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าอย่างมาก
                    </b-radio>
                    <b-radio size="is-medium" v-model="form.EQ5D5L.depression" native-value="5">
                        ข้าพเจ้ารู้สึกวิตกกังวลหรือซึมเศร้าอย่างมากที่สุด
                    </b-radio>
            </b-message>
            <div class="label">
                คะแนน {{ totalScore }}
            </div>
            <div class="buttons is-centered">
                <router-link class="button is-medium is-light" :to="{name: 'Overhead'}">
                    ย้อนกลับ
                </router-link>
              <a class="button is-medium is-success" @click="save">
                <b-icon pack="far" icon="save"></b-icon>
                <span>บันทึก</span>
              </a>
              <router-link class="button is-medium is-primary" :to="{name: 'VAS'}">
                    ต่อไป
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
      name: "EQ5D5L",
      data() {
          return {
              activeStep: 2,
          }
      },
      computed: {
          ...mapState(['form']),
          totalScore() {
              return this.form.EQ5D5L.walk + ", "
                  + this.form.EQ5D5L.selfcare + ", "
                  + this.form.EQ5D5L.routine + ", "
                  + this.form.EQ5D5L.pain + ", "
                  + this.form.EQ5D5L.depression;
          }
      },
    methods: {
      save() {
        let self = this
        this.$store.dispatch('saveForm').then(()=>{
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