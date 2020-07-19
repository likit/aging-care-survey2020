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
                            <b-field label="7. ศาสนา">
                                <div class="block">
                                    <b-radio name="pntReligion" v-model="pntReligion">
                                        พุทธ
                                    </b-radio>
                                    <b-radio name="pntReligion" v-model="pntReligion">
                                        คริสต์
                                    </b-radio>
                                    <b-radio name="pntReligion" v-model="pntReligion">
                                        อิสลาม
                                    </b-radio>
                                    <b-radio name="pntReligion" native-value="อื่นๆ" v-model="pntReligion">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุศาสนา" v-if="pntReligion==='อื่นๆ'">
                                <b-input v-model="pntReligionNote"></b-input>
                            </b-field>
                            <b-field label="8. การศึกษา">
                                <div class="block">
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        ไม่ได้เรียน
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        ไม่จบประถมศึกษา
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        ประถมศึกษา
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        มัธยมศึกษาตอนต้น
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        มัธยมศึกษาตอนปลาย / ปวช.
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        อนุปริญญา / ปวส.
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        ปริญญาตรี
                                    </b-radio>
                                    <b-radio name="pntEducation" v-model="pntEducation">
                                        สูงกว่าปริญญาตรี
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="9. อาชีพ (ปัจจุบัน)">
                                <div class="block">
                                    <b-radio name="pntJob" v-model="pntJob">
                                        ไม่ได้ทำงาน / ทำงานบ้าน
                                    </b-radio>
                                    <b-radio name="pntJob" v-model="pntJob">
                                        เกษตรกรรม
                                    </b-radio>
                                    <b-radio name="pntJob" v-model="pntJob">
                                        รับจ้างแรงงาน / พนักงานบริษัท
                                    </b-radio>
                                    <b-radio name="pntJob" v-model="pntJob">
                                        ค้าขาย / ธุรกิจส่วนตัว
                                    </b-radio>
                                    <b-radio name="pntJob" v-model="pntJob">
                                        รับราชการ / พนักงานของรัฐ
                                    </b-radio>
                                    <b-radio name="pntJob" v-model="pntJob">
                                        พนักงานรัฐวิสาหกิจ
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="อื่นๆ" v-model="pntJob">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntJob==='อื่นๆ'">
                                <b-input v-model="pntJobNote"></b-input>
                            </b-field>
                            <b-field label="8. รายได้จากอาชีพปัจจุบัน">
                                <b-input v-model="pntJobWage" placeholder="บาทต่อเดือน"></b-input>
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
                pntMarital: null,
                pntReligion: null,
                pntReligionNote: null,
                pntJob: null,
                pntJobNote: null
            }
        }
    }
</script>