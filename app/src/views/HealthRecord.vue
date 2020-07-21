<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="container">
                    <b-steps
                        v-model="activeStep"
                        :has-navigation="false"
                        :mobile-mode="true"
                        >
                        <b-step-item step="1" label="ประวัติสุขภาพ"></b-step-item>
                        <b-step-item step="2" label="ข้อมูลด้านต้นทุนผู้ป่วย"></b-step-item>
                        <b-step-item step="3" label="แบบสอบถาม EQ-5D-5L"></b-step-item>
                        <b-step-item step="4" label="แบบประเมินคุณภาพชีวิต VAS"></b-step-item>
                        <b-step-item step="5" label="MMSE-Thai 2002"></b-step-item>
                    </b-steps>
                    <h1 class="title is-size-3">แบบบันทึกข้อมูลจากเวชระเบียนผู้ป่วย</h1>
                </div>
            </div>
        </div>
        <div class="">
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
                            <b-field label="10. รายได้จากอาชีพปัจจุบัน">
                                <b-input v-model="pntJobWage" placeholder="บาทต่อเดือน"></b-input>
                            </b-field>
                            <b-field label="11. สิทธิการรักษาพยาบาล">
                                <div class="block">
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        ประกันสุขภาพถ้วนหน้า
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        ประกันสังคม
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        ข้าราชการ / รัฐวิสาหกิจ
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        ประกันสุขภาพบริษัทเอกชน
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        ทหารผ่านศึก
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" v-model="pntHealthCoverage">
                                        เงินสด
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="อื่นๆ" v-model="pntHealthCoverage">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntHealthCoverage==='อื่นๆ'">
                                <b-input v-model="pntHealthCoverageNote"></b-input>
                            </b-field>
                            <b-field label="12. ส่งต่อมาจากร.พ.ระดับ">
                                <div class="block">
                                    <b-radio name="pntHospitalTransferFrom" v-model="pntHospitalTransferFrom">
                                        โรงพยาบาลศูนย์
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" v-model="pntHospitalTransferFrom">
                                        โรงพยาบาลทั่วไป
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" v-model="pntHospitalTransferFrom">
                                        โรงพยาบาลชุมชน
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" v-model="pntHospitalTransferFrom">
                                        โรงเรียนแพทย์
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" native-value="อื่นๆ" v-model="pntHospitalTransferFrom">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntHospitalTransferFrom==='อื่นๆ'">
                                <b-input v-model="pntHospitalTransferFromNote"></b-input>
                            </b-field>
                            <b-field label="13.1 การวินิจฉัยโรค">
                                <b-input type="textarea" v-model="pntDiagnosis"></b-input>
                            </b-field>
                            <b-field label="13.2 โรคร่วม (Comorbidity)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntComorbidity"
                                             v-model="pntComorbidity"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntComorbidity"
                                             v-model="pntComorbidity"
                                             native-value="มี"
                                    >มี</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntComorbidity==='มี'">
                                <b-input v-model="pntComorbidityNote"></b-input>
                            </b-field>
                            <b-field label="13.3 โรคแทรกซ้อนอื่นๆ (Complication)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntComplication"
                                             v-model="pntComplication"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntComplication"
                                             v-model="pntComplication"
                                             native-value="มี"
                                    >มี</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntComplication==='มี'">
                                <b-input v-model="pntComplicationNote"></b-input>
                            </b-field>
                            <b-field label="13.4 โรคประจำตัว (Underlying Disease)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="pntUnderlyingDisease"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="pntUnderlyingDisease"
                                             native-value="เบาหวาน"
                                    >เบาหวาน</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="pntUnderlyingDisease"
                                             native-value="ความดันโลหิตสูง"
                                    >ความดันโลหิตสูง</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="pntUnderlyingDisease"
                                             native-value="ไขมันในเลือดสูง"
                                    >ไขมันในเลือดสูง</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             native-value="อื่นๆ"
                                             v-model="pntUnderlyingDisease">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntUnderlyingDisease==='อื่นๆ'">
                                <b-input v-model="pntUnderlyingDiseaseNote"></b-input>
                            </b-field>
                            <b-field label="14.1 วันที่แรกรับ">
                                <b-datepicker v-model="pntAdmittedDate"
                                              icon="calendar-today"
                                              trap-focus
                                              :mobile-native="false"></b-datepicker>
                            </b-field>
                            <b-field label="14.2 วันที่จำหน่าย">
                                <b-datepicker v-model="pntDischargedDate"
                                              icon="calendar-today"
                                              trap-focus
                                              :mobile-native="false"></b-datepicker>
                            </b-field>
                            <b-field label="14.3 ประเภทของการจำหน่าย">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="pntDischargeReason"
                                             native-value="ส่งต่อ"
                                    >ส่งต่อ</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="pntDischargeReason"
                                             native-value="เสียชีวิต"
                                    >เสียชีวิต</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="pntDischargeReason"
                                             native-value="อื่นๆ"
                                    >อื่นๆ</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntDischargeReason==='อื่นๆ'">
                                <b-input v-model="pntDischargeReasonNote"></b-input>
                            </b-field>
                            <b-field label="15. ส่งต่อไปร.พ.ระดับ" v-if="pntDischargeReason==='ส่งต่อ'">
                                <div class="block">
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" v-model="pntHospitalTransferTo">
                                        โรงพยาบาลศูนย์
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" v-model="pntHospitalTransferTo">
                                        โรงพยาบาลทั่วไป
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" v-model="pntHospitalTransferTo">
                                        โรงพยาบาลชุมชน
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" v-model="pntHospitalTransferTo">
                                        โรงเรียนแพทย์
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo"
                                             native-value="อื่นๆ" v-model="pntHospitalTransferTo">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntHospitalTransferTo==='อื่นๆ'">
                                <b-input v-model="pntHospitalTransferToNote"></b-input>
                            </b-field>
                            <b-field label="15.1 ระยะเวลานับจากวินิจฉัยว่าเป็นโรค">
                                <div class="block">
                                    <b-field label="ปี">
                                        <b-numberinput v-model="pntDiagnosisDurationYear"></b-numberinput>
                                    </b-field>
                                    <b-field label="เดือน">
                                        <b-numberinput v-model="pntDiagnosisDurationMonth"></b-numberinput>
                                    </b-field>
                                    <b-field label="วัน">
                                        <b-numberinput v-model="pntDiagnosisDurationDay"></b-numberinput>
                                    </b-field>
                                </div>
                            </b-field>
                            <b-field label="15.2 ระดับความรุนแรงของโรค">
                                <div class="block">
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" v-model="pntDiseaseSeverity">
                                        น้อย (mild)
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" v-model="pntDiseaseSeverity">
                                        ปานกลาง (moderate)
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" v-model="pntDiseaseSeverity">
                                        รุนแรง (severe)
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="16. การรักษาที่ได้รับ">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="pntTreatmentNoPharm">
                                        การรักษาโดยไม่ใช้ยา (Non-pharmacological management)</b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentPharm">
                                        การรักษาโดยใช้ยา (Pharmacological management)</b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="กรณีรักษาโดยไม่ใช้ยา" v-if="pntTreatmentNoPharm">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="pntTreatmentCognition">
                                        การรักษาที่เน้น Cognition (cognition-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentEmotion">
                                        การรักษาที่เน้นเรื่องอารมณ์ Emotion (Emotion-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentStimulation">
                                        การรักษาที่เน้นการกระตุ้น Stimulation (Stimulation-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentBahavior">
                                        การรักษาที่เน้นพฤติกรรม Bahavior (Bahavior-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentCaregiver">
                                        การรักษาที่เน้นผู้ดูแล Caregiver (Caregiver-oriented)
                                    </b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="กรณีรักษาโดยใช้ยา" v-if="pntTreatmentPharm">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="pntTreatmentDonepezil">
                                        Donepezil
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentRivastigmine">
                                        Revastigmine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentGalantamine">
                                        Galantamine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentMemantine">
                                        Memantine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntTreatmentOthers">
                                        อื่น ๆ
                                    </b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="pntTreatmentOthers">
                                <b-input v-model="pntTreatmentOthersNote"></b-input>
                            </b-field>
                            <b-field label="ระยะเวลานับจากได้รับการรักษา">
                                <div class="block">
                                    <b-field label="ปี">
                                        <b-numberinput v-model="pntTreatmentDurationYear"></b-numberinput>
                                    </b-field>
                                    <b-field label="เดือน">
                                        <b-numberinput v-model="pntTreatmentDurationMonth"></b-numberinput>
                                    </b-field>
                                    <b-field label="วัน">
                                        <b-numberinput v-model="pntTreatmentDurationDay"></b-numberinput>
                                    </b-field>
                                </div>
                            </b-field>
                            <b-field label="17 การจัดบริการที่ได้รับ">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="pntHealthServiceDayOnly">
                                        การบริการดูแลกลางวันแบบไปกลับที่โรงพยาบาล
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntHealthServiceHomeOnly">
                                        การบริการดูแลสุขภาพที่บ้าน
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="pntHealthServiceOther">
                                        อื่น ๆ
                                    </b-checkbox>
                                </div>
                            </b-field>
                        </b-message>
                        <div class="buttons is-centered">
                            <a class="button is-medium is-light">
                                ย้อนกลับ
                            </a>
                            <a class="button is-medium is-primary"
                                href="/patient-capital">
                                ต่อไป
                            </a>
                        </div>
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
                pntJobNote: null,
                pntJobWage: null,
                pntEducation: null,
                pntHealthCoverage: null,
                pntHealthCoverageNote: null,
                pntHospitalTransferFrom: null,
                pntHospitalTransferFromNote: null,
                pntDiagnosis: null,
                pntComorbidity: null,
                pntComorbidityNote: null,
                pntComplication: null,
                pntComplicationNote: null,
                pntUnderlyingDisease: null,
                pntUnderlyingDiseaseNote: null,
                pntAdmittedDate: null,
                pntDischargedDate: null,
                pntDischargeReason: null,
                pntDischargeReasonNote: null,
                pntHospitalTransferTo: null,
                pntHospitalTransferToNote: null,
                pntDiagnosisDurationYear: 0,
                pntDiagnosisDurationMonth: 0,
                pntDiagnosisDurationDay: 0,
                pntTreatmentNoPharm: null,
                pntTreatmentPharm: null,
                pntTreatmentCognition: null,
                pntTreatmentEmotion: null,
                pntTreatmentStimulation: null,
                pntTreatmentBahavior: null,
                pntTreatmentCaregiver: null,
                pntTreamentDonepezil: null,
                pntTreamentRivastigmine: null,
                pntTreamentGalantime: null,
                pntTreamentMemantine: null,
                pntTreatmentOthers: null,
                pntTreatmentOthersNote: null,
                pntTreatmentDurationYear: 0,
                pntTreatmentDurationMonth: 0,
                pntTreatmentDurationDay: 0,
                activeStep: 1
            }
        }
    }
</script>