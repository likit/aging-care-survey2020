<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="container">
                    <h1 class="title is-size-3">แบบบันทึกข้อมูลจากเวชระเบียนผู้ป่วย</h1>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="columns">
                <div class="column">
                    <div class="container">
                        <h3 class="title is-size-5 has-text-grey">ส่วนที่ 1 ข้อมูลทั่วไป</h3>
                        <b-message title="ส่วนที่ 1 ข้อมูลทั่วไป" type="is-primary" :closable=false>
                            <b-field label="1. เลขที่บัตรประชาชน">
                                <b-input v-model="pntPIN" placeholder="เลขที่บัตรประชาชน 13 หลัก"></b-input>
                            </b-field>
                            <b-field label="2. ชื่อ นามสกุล">
                                <b-input v-model="pntName"></b-input>
                            </b-field>
                            <b-field label="3. ที่อยู่">
                                <b-input v-model="pntAddress"></b-input>
                            </b-field>
                            <b-field label="4. เพศ">
                                <div class="block">
                                    <b-radio name="pntGender" v-model="pntGender">
                                        ชาย
                                    </b-radio>
                                    <b-radio name="pntGender" v-model="pntGender">
                                        หญิง
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="5. อายุ (ปี)">
                                <b-input v-model="pntAge"></b-input>
                            </b-field>
                            <b-field label="6. สถานภาพสมรส">
                                <div class="block">
                                    <b-radio name="pntMarital" v-model="pntMarital">
                                        โสด
                                    </b-radio>
                                    <b-radio name="pntMarital" v-model="pntMarital">
                                        สมรส
                                    </b-radio>
                                    <b-radio name="pntMarital" v-model="pntMarital">
                                        หม้าย
                                    </b-radio>
                                    <b-radio name="pntMarital" v-model="pntMarital">
                                        หย่า
                                    </b-radio>
                                    <b-radio name="pntMarital" v-model="pntMarital">
                                        แยกกันอยู่
                                    </b-radio>
                                </div>
                            </b-field>
                        </b-message>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                pntGender: null,
                pntPIN: null,
                pntAge: null,
                pntAddress: '',
                pntName: '',
                pntMarital: null
            }
        }
    }
</script>