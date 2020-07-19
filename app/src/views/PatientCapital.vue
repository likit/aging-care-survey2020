<template>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="container">
                    <h1 class="title is-size-3">แบบบันทึกข้อมูลจากเวชระเบียนผู้ป่วย</h1>
                </div>
            </div>
        </div>
        <div class="">
            <div class="columns">
                <div class="column">
                    <div class="container">
                        <h3 class="title is-size-5 has-text-grey">ส่วนที่ 2 ข้อมูลด้านต้นทุนของผู้ป่วย</h3>
                        <b-message title="ส่วนที่ 2 ข้อมูลด้านต้นทุนของผู้ป่วย" type="is-primary" :closable=false>
                            <b-field label="18. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยมารับบริการดูแลกลางวันแบบไปกลับที่โรงพยาบาลนี้จำนวนเท่ากับ">
                                <b-numberinput v-model="noDayCareReceived"></b-numberinput>
                            </b-field>
                            <b-field label="19. ระยะเวลาที่ใช้ในการมารับบริการดูแลกลางวันแบบไปกลับ">
                                <div class="block">
                                    <b-field label="วัน">
                                        <b-numberinput min="0" v-model="dayCareDurationDay"></b-numberinput>
                                    </b-field>
                                    <b-field label="นาที">
                                        <b-numberinput max="59" min="0" v-model="dayCareDurationMinute"></b-numberinput>
                                    </b-field>
                                    <b-field label="ชั่วโมง">
                                        <b-numberinput max="23" min="0" v-model="dayCareDurationHour"></b-numberinput>
                                    </b-field>
                                </div>
                            </b-field>
                            <b-field label="20. การมารับบริการดูแลกลางวันแบบไปกลับ ผู้ป่วยเสียค่าใช้จ่ายด้านที่พักหรือไม่">
                                <div class="block">
                                    <b-radio v-model="shelterCost" name="shelterCost" native-value="ไม่มี">ไม่เสียค่าใช้จ่าย</b-radio>
                                    <b-radio v-model="shelterCost" name="shelterCost" native-value="มี">มีค่าที่พัก</b-radio>
                                </div>
                            </b-field>
                            <b-field label="คิดค่าที่พักรวมเป็นจำนวนเฉลี่ยเท่ากับ" v-if="shelterCost=='มี'">
                                <b-input type="number" step="any" v-model="shelterCostTotal"></b-input>
                            </b-field>
                            <b-field label="21. ค่าใช้จ่ายในการเดินทางไปกลับของผู้ป่วย ในการมารับบริการดูแลกลางวันแบบไปกลับ (ระหว่างที่พักและโรงพยาบาล)">
                                <b-input type="number" v-model="expense" placeholder="จำนวนบาท"></b-input>
                            </b-field>
                            <b-field label="22. ค่าอาหารที่เพิ่มขึ้นของผู้ป่วยในการมารับบริการ">
                                <b-input type="number" v-model="foodExpense" placeholder="จำนวนบาท"></b-input>
                            </b-field>
                            <b-field label="23. ค่ารักษาที่ต้องจ่ายเพิ่มเติมจากสิทธิการรักษา">
                                <b-input type="number" v-model="extraExpense" placeholder="จำนวนบาท"></b-input>
                            </b-field>
                            <b-field label="24. การมารับบริการผู้ป่วยต้องมีญาติ/ผู้ดูแลหลักเพื่อพามารับบริการที่โรงพยาบาลหรือไม่">
                                <div class="block">
                                    <b-radio v-model="hasCompany" name="hasCompany" native-value="ไม่มี">ไม่มี</b-radio>
                                    <b-radio v-model="hasCompany" name="hasCompany" native-value="มี">มี</b-radio>
                                </div>
                            </b-field>
                            <b-field label="จำนวนผู้พามารับบริการ">
                                <b-numberinput min="0" v-model="companyNumber"></b-numberinput>
                            </b-field>
                            <CompanyPerson></CompanyPerson>
                            <CompanyPerson></CompanyPerson>
                            <CompanyPerson></CompanyPerson>
                            <b-field label="25. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยได้รับการรักษาจากสถานที่อื่นหรือไม่">
                                <div class="block">
                                    <b-radio v-model="otherServiceProvider" size="is-medium" name="otherServiceProvider" native-value="ไม่มี">ไม่ใช่</b-radio>
                                    <b-radio v-model="otherServiceProvider" size="is-medium" name="otherServiceProvider" native-value="มี">ใช่</b-radio>
                                </div>
                            </b-field>
                            <b-field label="โปรดระบุรายละเอียด">
                                <div class="block">
                                    <ServiceProvider title="โรงพยาบาลอื่น ๆ"></ServiceProvider>
                                    <ServiceProvider title="คลินิก"></ServiceProvider>
                                    <ServiceProvider title="ศูนย์บริการสาธารณสุข"></ServiceProvider>
                                    <ServiceProvider title="อื่น ๆ"></ServiceProvider>
                                </div>
                            </b-field>
                            <b-field label="26. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยต้องอาศัยญาติในการทำกิจกรรมหลักหรือไม่">
                                <div class="block">
                                    <b-radio v-model="needHelpFromFamily" size="is-medium" name="needHelpFromFamily" native-value="ไม่มี">ไม่ใช่</b-radio>
                                    <b-radio v-model="needHelpFromFamily" size="is-medium" name="needHelpFromFamily" native-value="มี">ใช่</b-radio>
                                </div>
                            </b-field>
                            <b-field>
                                <FamilyHelper></FamilyHelper>
                            </b-field>
                            <b-field label="26. ญาติ/ผู้ดูแลหลักของผู้ป่วย พักอยู่บ้านเดียวกับผู้ป่วยหรือไม่">
                                <div class="block">
                                    <b-radio v-model="stayWithFamily" size="is-medium" name="stayWithFamily" native-value="มี">ใช่</b-radio>
                                    <b-radio v-model="stayWithFamily" size="is-medium" name="stayWithFamily" native-value="ไม่ใช่">ไม่ใช่</b-radio>
                                </div>
                            </b-field>
                            <b-field label="เสียค่าใช้จ่ายในการเดินทางไปกลับบ้านผู้ป่วยเฉลี่ยเท่ากับ" v-if="stayWithFamily==='ไม่ใช่'">
                                <b-input type="number" v-model="commuteCost" step="any" placeholder="จำนวนบาท"></b-input>
                            </b-field>
                            <b-field label="27. ตั้งแต่ผู้ป่วยได้รับการวินิจฉัยว่าเป็นโรคนี้ ญาติ/ผู้ดูแลหลักมีการจัดหาสิ่งต่อไปนี้หรือไม่">
                                <div class="block">
                                    <b-radio v-model="providedStuff" size="is-medium" name="providedStuff" native-value="มี">ใช่</b-radio>
                                    <b-radio v-model="providedStuff" size="is-medium" name="providedStuff" native-value="ไม่ใช่">ไม่ใช่</b-radio>
                                </div>
                            </b-field>
                            <b-message title="รายการ" type="is-warning" :closable="false">
                                <div class="block">
                                    <b-field label="ผู้ดูแลผู้ป่วย">
                                        <b-input placeholder="ระบุอัตราจ้างต่อเดือน" v-model="careGiverWage"></b-input>
                                    </b-field>
                                    <b-field label="ผู้ดูแลทำงานบ้านเนื่องจากการเจ็บป่วยของผู้ป่วย ทำให้ไม่สามารถทำเองได้">
                                        <b-input placeholder="ระบุอัตราจ้างต่อเดือน" v-model="maidWage"></b-input>
                                    </b-field>
                                    <b-field label="ผู้ดูแลบุตรหรือบุพการี เนื่องจากการเจ็บป่วยของผู้ป่วย ทำให้ไม่สามารถดูแลได้">
                                        <b-input placeholder="ระบุอัตราจ้างต่อเดือน" v-model="assistantWage"></b-input>
                                    </b-field>
                                    <b-field label="อุปกรณ์ช่วยเหลือต่าง ๆ ของผู้ป่วยเช่น ไม้เท้า รถเข็น ถังออกซิเจน">
                                        <div class="block">
                                            <b-input placeholder="ระบุชนิดอุปกรณ์" v-model="equipment"></b-input>
                                            <b-input placeholder="จำนวนเงิน" v-model="equipmentCost"></b-input>
                                        </div>
                                    </b-field>
                                    <b-field label="ในปัจจุบันผู้ป่วยได้รับเงินช่วยเหลือจากการเจ็บป่วยหรือไม่">
                                        <div class="block">
                                            <b-radio size="is-medium"
                                                     name="financialSupport"
                                                     v-model="financialSupport" native-value="ไม่ได้">ไม่ได้</b-radio>
                                            <b-radio size="is-medium"
                                                     name="financialSupport"
                                                     v-model="financialSupport" native-value="ได้">ได้</b-radio>
                                        </div>
                                    </b-field>
                                    <b-field label="ระบุจำนวนคนที่ได้รับต่อเดือน" v-if="financialSupport==='ได้'">
                                        <b-numberinput min="0" v-model="numPersonReceivingFinancialSupport"></b-numberinput>
                                    </b-field>
                                    <b-field label="ระบุแหล่งที่มา" v-if="financialSupport==='ได้'">
                                        <b-input placeholder="โปรดระบุแหล่งที่มา" v-model="financialSupportSource"></b-input>
                                    </b-field>
                                </div>
                            </b-message>
                        </b-message>
                        <div class="buttons is-centered">
                            <a class="button is-medium is-light"
                                href="/health-record">
                                ย้อนกลับ
                            </a>
                            <a class="button is-medium is-primary"
                               href="/overhead">
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
    import CompanyPerson from "../components/CompanyPerson";
    import ServiceProvider from "../components/ServiceProvider";
    import FamilyHelper from "../components/FamilyHelper";
    export default {
        name: "PatientCapital",
        components: {
            "CompanyPerson": CompanyPerson,
            "ServiceProvider": ServiceProvider,
            "FamilyHelper": FamilyHelper,
        },
        data() {
            return {
                noDayCareReceived: null,
                dayCareDurationDay: null,
                dayCareDurationHour: null,
                dayCareDurationMinute: null,
                shelterCost: null,
                shelterCostTotal: null,
                expense: null,
                foodExpense: null,
                extraExpense: null,
                hasCompany: null,
                companyNumber: null,
                otherServiceProvider: null,
                needHelpFromFamily: null,
                stayWithFamily: null,
                commuteCost: null,
                financialSupport: null,
                numPersonReceivingFinancialSupport: null,
                financialSupportSource: null,
                equipment: null,
                equipmentCost: null,
                assistantWage: null,
                maidWage: null,
                careGiverWage: null,
                providedStuff: null,
            }
        }
    }
</script>

<style scoped>

</style>