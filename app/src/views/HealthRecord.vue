<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="container">
                    <b-steps
                        v-model="activeStep"
                        :has-navigation="false"
                        mobile-mode="compact"
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
            <pre>
              {{ form.patientRecord }}
            </pre>
          </div>
            <div class="columns">
                <div class="column">
                    <div class="container">
                        <h3 class="title is-size-5 has-text-grey">ส่วนที่ 1 ข้อมูลทั่วไป</h3>
                        <b-message title="ส่วนที่ 1 ข้อมูลทั่วไป" type="is-primary" :closable=false>
                            <b-field label="1. เลขที่บัตรประชาชน">
                                <b-input v-model="form.patientRecord.pntPIN" placeholder="เลขที่บัตรประชาชน 13 หลัก"></b-input>
                            </b-field>
                            <b-field label="2. ชื่อ นามสกุล">
                                <b-input v-model="form.patientRecord.pntName"></b-input>
                            </b-field>
                            <b-field label="3. ที่อยู่">
                                <b-input v-model="form.patientRecord.pntAddress"></b-input>
                            </b-field>
                            <b-field label="4. เพศ">
                                <div class="block">
                                    <b-radio name="pntGender" v-model="form.patientRecord.pntGender">
                                        ชาย
                                    </b-radio>
                                    <b-radio name="pntGender" v-model="form.patientRecord.pntGender">
                                        หญิง
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="5. อายุ (ปี)">
                                <b-input v-model="form.patientRecord.pntAge"></b-input>
                            </b-field>
                            <b-field label="6. สถานภาพสมรส">
                                <div class="block">
                                    <b-radio name="pntMarital" native-value="โสด" v-model="form.patientRecord.pntMarital">
                                        โสด
                                    </b-radio>
                                    <b-radio name="pntMarital" native-value="สมรส" v-model="form.patientRecord.pntMarital">
                                        สมรส
                                    </b-radio>
                                    <b-radio name="pntMarital" native-value="หม้าย" v-model="form.patientRecord.pntMarital">
                                        หม้าย
                                    </b-radio>
                                    <b-radio name="pntMarital" native-value="หย่า" v-model="form.patientRecord.pntMarital">
                                        หย่า
                                    </b-radio>
                                    <b-radio name="pntMarital" native-value="แยกกันอยู่" v-model="form.patientRecord.pntMarital">
                                        แยกกันอยู่
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="7. ศาสนา">
                                <div class="block">
                                    <b-radio name="pntReligion" native-value="พุทธ" v-model="form.patientRecord.pntReligion">
                                        พุทธ
                                    </b-radio>
                                    <b-radio name="pntReligion"  native-value="คริสต์" v-model="form.patientRecord.pntReligion">
                                        คริสต์
                                    </b-radio>
                                    <b-radio name="pntReligion" native-value="อิสลาม" v-model="form.patientRecord.pntReligion">
                                        อิสลาม
                                    </b-radio>
                                    <b-radio name="pntReligion" native-value="อื่นๆ" v-model="form.patientRecord.pntReligion">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุศาสนา" v-if="form.patientRecord.pntReligion==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntReligionNote"></b-input>
                            </b-field>
                            <b-field label="8. การศึกษา">
                                <div class="block">
                                    <b-radio name="pntEducation" native-value="ไม่ได้เรียน" v-model="form.patientRecord.pntEducation">
                                        ไม่ได้เรียน
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="ไม่จบประถมศึกษา" v-model="form.patientRecord.pntEducation">
                                        ไม่จบประถมศึกษา
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="ประถมศึกษา" v-model="form.patientRecord.pntEducation">
                                        ประถมศึกษา
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="มัธยมศึกษาตอนต้น" v-model="form.patientRecord.pntEducation">
                                        มัธยมศึกษาตอนต้น
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="มัธยมศึกษาตอนปลาย / ปวช." v-model="form.patientRecord.pntEducation">
                                        มัธยมศึกษาตอนปลาย / ปวช.
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="อนุปริญญา / ปวส." v-model="form.patientRecord.pntEducation">
                                        อนุปริญญา / ปวส.
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="ปริญญาตรี" v-model="form.patientRecord.pntEducation">
                                        ปริญญาตรี
                                    </b-radio>
                                    <b-radio name="pntEducation" native-value="สูงกว่าปริญญาตรี" v-model="form.patientRecord.pntEducation">
                                        สูงกว่าปริญญาตรี
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="9. อาชีพ (ปัจจุบัน)">
                                <div class="block">
                                    <b-radio name="pntJob" native-value="ไม่ได้ทำงาน / ทำงานบ้าน" v-model="form.patientRecord.pntJob">
                                        ไม่ได้ทำงาน / ทำงานบ้าน
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="เกษตรกรรม" v-model="form.patientRecord.pntJob">
                                        เกษตรกรรม
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="รับจ้างแรงงาน / พนักงานบริษัท" v-model="form.patientRecord.pntJob">
                                        รับจ้างแรงงาน / พนักงานบริษัท
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="ค้าขาย / ธุรกิจส่วนตัว" v-model="form.patientRecord.pntJob">
                                        ค้าขาย / ธุรกิจส่วนตัว
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="รับราชการ / พนักงานของรัฐ" v-model="form.patientRecord.pntJob">
                                        รับราชการ / พนักงานของรัฐ
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="พนักงานรัฐวิสาหกิจ" v-model="form.patientRecord.pntJob">
                                        พนักงานรัฐวิสาหกิจ
                                    </b-radio>
                                    <b-radio name="pntJob" native-value="อื่นๆ" v-model="form.patientRecord.pntJob">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntJob==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntJobNote"></b-input>
                            </b-field>
                            <b-field label="10. รายได้จากอาชีพปัจจุบัน">
                                <b-input v-model="form.patientRecord.pntJobWage" placeholder="บาทต่อเดือน"></b-input>
                            </b-field>
                            <b-field label="11. สิทธิการรักษาพยาบาล">
                                <div class="block">
                                    <b-radio name="pntHealthCoverage" native-value="ประกันสุขภาพถ้วนหน้า" v-model="form.patientRecord.pntHealthCoverage">
                                        ประกันสุขภาพถ้วนหน้า
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="ประกันสังคม" v-model="form.patientRecord.pntHealthCoverage">
                                        ประกันสังคม
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="ข้าราชการ / รัฐวิสาหกิจ" v-model="form.patientRecord.pntHealthCoverage">
                                        ข้าราชการ / รัฐวิสาหกิจ
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="ประกันสุขภาพบริษัทเอกชน" v-model="form.patientRecord.pntHealthCoverage">
                                        ประกันสุขภาพบริษัทเอกชน
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="ทหารผ่านศึก" v-model="form.patientRecord.pntHealthCoverage">
                                        ทหารผ่านศึก
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="เงินสด" v-model="form.patientRecord.pntHealthCoverage">
                                        เงินสด
                                    </b-radio>
                                    <b-radio name="pntHealthCoverage" native-value="อื่นๆ" v-model="form.patientRecord.pntHealthCoverage">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntHealthCoverage==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntHealthCoverageNote"></b-input>
                            </b-field>
                            <b-field label="12. ส่งต่อมาจากร.พ.ระดับ">
                                <div class="block">
                                    <b-radio name="pntHospitalTransferFrom" native-value="โรงพยาบาลศูนย์" v-model="form.patientRecord.pntHospitalTransferFrom">
                                        โรงพยาบาลศูนย์
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" native-value="โรงพยาบาลทั่วไป" v-model="form.patientRecord.pntHospitalTransferFrom">
                                        โรงพยาบาลทั่วไป
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" native-value="โรงพยาบาลชุมชน" v-model="form.patientRecord.pntHospitalTransferFrom">
                                        โรงพยาบาลชุมชน
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" native-value="โรงเรียนแพทย์" v-model="form.patientRecord.pntHospitalTransferFrom">
                                        โรงเรียนแพทย์
                                    </b-radio>
                                    <b-radio name="pntHospitalTransferFrom" native-value="อื่นๆ" v-model="form.patientRecord.pntHospitalTransferFrom">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntHospitalTransferFrom==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntHospitalTransferFromNote"></b-input>
                            </b-field>
                            <b-field label="13.1 การวินิจฉัยโรค">
                                <b-input type="textarea" v-model="form.patientRecord.pntDiagnosis"></b-input>
                            </b-field>
                            <b-field label="13.2 โรคร่วม (Comorbidity)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntComorbidity"
                                             v-model="form.patientRecord.pntComorbidity"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntComorbidity"
                                             v-model="form.patientRecord.pntComorbidity"
                                             native-value="มี"
                                    >มี</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntComorbidity==='มี'">
                                <b-input v-model="form.patientRecord.pntComorbidityNote"></b-input>
                            </b-field>
                            <b-field label="13.3 โรคแทรกซ้อนอื่นๆ (Complication)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntComplication"
                                             v-model="form.patientRecord.pntComplication"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntComplication"
                                             v-model="form.patientRecord.pntComplication"
                                             native-value="มี"
                                    >มี</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntComplication==='มี'">
                                <b-input v-model="form.patientRecord.pntComplicationNote"></b-input>
                            </b-field>
                            <b-field label="13.4 โรคประจำตัว (Underlying Disease)">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="form.patientRecord.pntUnderlyingDisease"
                                             native-value="ไม่มี"
                                    >ไม่มี</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="form.patientRecord.pntUnderlyingDisease"
                                             native-value="เบาหวาน"
                                    >เบาหวาน</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="form.patientRecord.pntUnderlyingDisease"
                                             native-value="ความดันโลหิตสูง"
                                    >ความดันโลหิตสูง</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             v-model="form.patientRecord.pntUnderlyingDisease"
                                             native-value="ไขมันในเลือดสูง"
                                    >ไขมันในเลือดสูง</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntUnderlyingDisease"
                                             native-value="อื่นๆ"
                                             v-model="form.patientRecord.pntUnderlyingDisease">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntUnderlyingDisease==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntUnderlyingDiseaseNote"></b-input>
                            </b-field>
                            <b-field label="14.1 วันที่แรกรับ">
                                <b-datepicker v-model="form.patientRecord.pntAdmittedDate"
                                              icon="calendar-today"
                                              trap-focus
                                              :mobile-native="false"></b-datepicker>
                            </b-field>
                            <b-field label="14.2 วันที่จำหน่าย">
                                <b-datepicker v-model="form.patientRecord.pntDischargedDate"
                                              icon="calendar-today"
                                              trap-focus
                                              :mobile-native="false"></b-datepicker>
                            </b-field>
                            <b-field label="14.3 ประเภทของการจำหน่าย">
                                <div class="block">
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="form.patientRecord.pntDischargeReason"
                                             native-value="ส่งต่อ"
                                    >ส่งต่อ</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="form.patientRecord.pntDischargeReason"
                                             native-value="เสียชีวิต"
                                    >เสียชีวิต</b-radio>
                                    <b-radio size="is-medium"
                                             name="pntDischargeReason"
                                             v-model="form.patientRecord.pntDischargeReason"
                                             native-value="อื่นๆ"
                                    >อื่นๆ</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntDischargeReason==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntDischargeReasonNote"></b-input>
                            </b-field>
                            <b-field label="15. ส่งต่อไปร.พ.ระดับ" v-if="form.patientRecord.pntDischargeReason==='ส่งต่อ'">
                                <div class="block">
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" native-value="โรงพยาบาลศูนย์" v-model="form.patientRecord.pntHospitalTransferTo">
                                        โรงพยาบาลศูนย์
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" native-value="โรงพยาบาลทั่วไป" v-model="form.patientRecord.pntHospitalTransferTo">
                                        โรงพยาบาลทั่วไป
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" native-value="โรงพยาบาลชุมชน" v-model="form.patientRecord.pntHospitalTransferTo">
                                        โรงพยาบาลชุมชน
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo" native-value="โรงเรียนแพทย์" v-model="form.patientRecord.pntHospitalTransferTo">
                                        โรงเรียนแพทย์
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntHospitalTransferTo"
                                             native-value="อื่นๆ" v-model="form.patientRecord.pntHospitalTransferTo">
                                        อื่นๆ
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntHospitalTransferTo==='อื่นๆ'">
                                <b-input v-model="form.patientRecord.pntHospitalTransferToNote"></b-input>
                            </b-field>
                            <b-field label="15.1 ระยะเวลานับจากวินิจฉัยว่าเป็นโรค">
                                <div class="block">
                                    <b-field label="ปี">
                                        <b-numberinput v-model="form.patientRecord.pntDiagnosisDurationYear"></b-numberinput>
                                    </b-field>
                                    <b-field label="เดือน">
                                        <b-numberinput v-model="form.patientRecord.pntDiagnosisDurationMonth"></b-numberinput>
                                    </b-field>
                                    <b-field label="วัน">
                                        <b-numberinput v-model="form.patientRecord.pntDiagnosisDurationDay"></b-numberinput>
                                    </b-field>
                                </div>
                            </b-field>
                            <b-field label="15.2 ระดับความรุนแรงของโรค">
                                <div class="block">
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" native-value="น้อย" v-model="form.patientRecord.pntDiseaseSeverity">
                                        น้อย (mild)
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" native-value="ปานกลาง" v-model="form.patientRecord.pntDiseaseSeverity">
                                        ปานกลาง (moderate)
                                    </b-radio>
                                    <b-radio size="is-medium" name="pntDiseaseSeverity" native-value="รุนแรง" v-model="form.patientRecord.pntDiseaseSeverity">
                                        รุนแรง (severe)
                                    </b-radio>
                                </div>
                            </b-field>
                            <b-field label="16. การรักษาที่ได้รับ">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentNoPharm">
                                        การรักษาโดยไม่ใช้ยา (Non-pharmacological management)</b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentPharm">
                                        การรักษาโดยใช้ยา (Pharmacological management)</b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="กรณีรักษาโดยไม่ใช้ยา" v-if="form.patientRecord.pntTreatmentNoPharm">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentCognition">
                                        การรักษาที่เน้น Cognition (cognition-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentEmotion">
                                        การรักษาที่เน้นเรื่องอารมณ์ Emotion (Emotion-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentStimulation">
                                        การรักษาที่เน้นการกระตุ้น Stimulation (Stimulation-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentBahavior">
                                        การรักษาที่เน้นพฤติกรรม Bahavior (Bahavior-oriented)
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentCaregiver">
                                        การรักษาที่เน้นผู้ดูแล Caregiver (Caregiver-oriented)
                                    </b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="กรณีรักษาโดยใช้ยา" v-if="form.patientRecord.pntTreatmentPharm">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentDonepezil">
                                        Donepezil
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentRivastigmine">
                                        Revastigmine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentGalantamine">
                                        Galantamine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentMemantine">
                                        Memantine
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntTreatmentOthers">
                                        อื่น ๆ
                                    </b-checkbox>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุ" v-if="form.patientRecord.pntTreatmentOthers">
                                <b-input v-model="form.patientRecord.pntTreatmentOthersNote"></b-input>
                            </b-field>
                            <b-field label="ระยะเวลานับจากได้รับการรักษา">
                                <div class="block">
                                    <b-field label="ปี">
                                        <b-numberinput v-model="form.patientRecord.pntTreatmentDurationYear"></b-numberinput>
                                    </b-field>
                                    <b-field label="เดือน">
                                        <b-numberinput v-model="form.patientRecord.pntTreatmentDurationMonth"></b-numberinput>
                                    </b-field>
                                    <b-field label="วัน">
                                        <b-numberinput v-model="form.patientRecord.pntTreatmentDurationDay"></b-numberinput>
                                    </b-field>
                                </div>
                            </b-field>
                            <b-field label="17 การจัดบริการที่ได้รับ">
                                <div class="block">
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntHealthServiceDayOnly">
                                        การบริการดูแลกลางวันแบบไปกลับที่โรงพยาบาล
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntHealthServiceHomeOnly">
                                        การบริการดูแลสุขภาพที่บ้าน
                                    </b-checkbox>
                                    <b-checkbox size="is-medium" v-model="form.patientRecord.pntHealthServiceOther">
                                        อื่น ๆ
                                    </b-checkbox>
                                </div>
                            </b-field>
                        </b-message>
                        <div class="buttons is-centered">
                          <a class="button is-medium is-light" @click="goBack">
                            <b-icon pack="fas" icon="chevron-left"></b-icon>
                            <span>กลับ</span>
                          </a>
                          <a class="button is-medium is-success" @click="save">
                            <b-icon pack="far" icon="save"></b-icon>
                            <span>บันทึก</span>
                          </a>
                          <a class="button is-medium is-primary" @click="next">
                            <span>ต่อไป</span>
                            <b-icon pack="fas" icon="chevron-right"></b-icon>
                          </a>
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
        methods: {
          goBack() {
            this.$router.push({'name': 'Home'})
          },
          next() {
            this.$router.push({name: 'PatientCapital'})
          },
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
        },
      data() {
        return {
          activeStep: 1,
            }
        },
      computed: {
          ...mapState(['form'])
      }
    }
</script>