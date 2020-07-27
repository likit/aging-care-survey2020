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
            <h1 class="title">แบบทดสอบสมรรถภาพเบื้องต้นฉบับภาษาไทย MMSE-Thai 2002</h1>
            <h1 class="subtitle">Mini-Mental State Examination-Thai 2002</h1>
            <b-message title="1. Orientation for time: ทดสอบความรู้เกี่ยวกับเวลาปัจจุบัน (5 คะแนน)">
                <b-field label="1.1 วันนี้วันที่เท่าไหร่">
                    <b-input placeholder="คำตอบ"></b-input>
                </b-field>
                <b-checkbox>ถูกต้อง</b-checkbox>
            </b-message>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MMSE",
        data() {
            return {
                activeStep: 4
            }
        }
    }
</script>

<style scoped>

</style>