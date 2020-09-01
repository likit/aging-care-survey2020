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
          <div class="columns">
              <div class="column">
                  <div class="container">
                      <h3 class="title is-size-5 has-text-grey">ส่วนที่ 2 ข้อมูลด้านต้นทุนของผู้ป่วย</h3>
                      <b-message title="ส่วนที่ 2 ข้อมูลด้านต้นทุนของผู้ป่วย" type="is-primary" :closable=false>
                          <b-field label="18. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยมารับบริการดูแลกลางวันแบบไปกลับที่โรงพยาบาลนี้จำนวนเท่ากับ">
                              <b-numberinput v-model="form.patientCapital.noDayCareReceived"></b-numberinput>
                          </b-field>
                          <b-field label="19. ระยะเวลาที่ใช้ในการมารับบริการดูแลกลางวันแบบไปกลับ">
                              <div class="block">
                                  <b-field label="วัน">
                                      <b-numberinput min="0" v-model="form.patientCapital.dayCareDurationDay"></b-numberinput>
                                  </b-field>
                                <b-field label="ชั่วโมง">
                                  <b-numberinput max="23" min="0" v-model="form.patientCapital.dayCareDurationHour"></b-numberinput>
                                </b-field>
                                <b-field label="นาที">
                                      <b-numberinput max="59" min="0" v-model="form.patientCapital.dayCareDurationMinute"></b-numberinput>
                                  </b-field>
                              </div>
                          </b-field>
                          <b-field label="20. การมารับบริการดูแลกลางวันแบบไปกลับ ผู้ป่วยเสียค่าใช้จ่ายด้านที่พักหรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.shelterCost" name="shelterCost" native-value="ไม่มี">ไม่เสียค่าใช้จ่าย</b-radio>
                                  <b-radio v-model="form.patientCapital.shelterCost" name="shelterCost" native-value="มี">มีค่าที่พัก</b-radio>
                              </div>
                          </b-field>
                          <b-field label="คิดค่าที่พักรวมเป็นจำนวนเฉลี่ยเท่ากับ" v-if="form.patientCapital.shelterCost==='มี'">
                              <b-input type="number" step="any" v-model="form.patientCapital.shelterCostTotal"></b-input>
                          </b-field>
                          <b-field label="21. ค่าใช้จ่ายในการเดินทางไปกลับของผู้ป่วย ในการมารับบริการดูแลกลางวันแบบไปกลับ (ระหว่างที่พักและโรงพยาบาล)">
                              <b-input type="number" v-model="form.patientCapital.expense" placeholder="จำนวนบาท"></b-input>
                          </b-field>
                          <b-field label="22. ค่าอาหารที่เพิ่มขึ้นของผู้ป่วยในการมารับบริการ">
                              <b-input type="number" v-model="form.patientCapital.foodExpense" placeholder="จำนวนบาท"></b-input>
                          </b-field>
                          <b-field label="23. ค่ารักษาที่ต้องจ่ายเพิ่มเติมจากสิทธิการรักษา">
                              <b-input type="number" v-model="form.patientCapital.extraExpense" placeholder="จำนวนบาท"></b-input>
                          </b-field>
                          <b-field label="24. การมารับบริการผู้ป่วยต้องมีญาติ/ผู้ดูแลหลักเพื่อพามารับบริการที่โรงพยาบาลหรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.hasCompany" name="hasCompany" native-value="ไม่มี">ไม่มี</b-radio>
                                  <b-radio v-model="form.patientCapital.hasCompany" name="hasCompany" native-value="มี">มี</b-radio>
                              </div>
                          </b-field>
                          <b-field label="จำนวนผู้พามารับบริการ">
                              <b-numberinput min="0" v-model="form.patientCapital.companyNumber"></b-numberinput>
                          </b-field>
                          <CompanyPerson :person="form.patientCapital.companyPersons[0]"
                            @mutate="mutatePerson(0, $event)"></CompanyPerson>
                          <CompanyPerson :person="form.patientCapital.companyPersons[1]"
                            @mutate="mutatePerson(1, $event)"></CompanyPerson>
                          <CompanyPerson :person="form.patientCapital.companyPersons[2]"
                            @mutate="mutatePerson(2, $event)"></CompanyPerson>
                          <b-field label="25. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยได้รับการรักษาจากสถานที่อื่นหรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.otherServiceProvider" size="is-medium" name="otherServiceProvider" native-value="ไม่มี">ไม่ใช่</b-radio>
                                  <b-radio v-model="form.patientCapital.otherServiceProvider" size="is-medium" name="otherServiceProvider" native-value="มี">ใช่</b-radio>
                              </div>
                          </b-field>
                          <b-field label="โปรดระบุรายละเอียด">
                              <div class="block">
                                  <ServiceProvider title="โรงพยาบาลอื่น ๆ"
                                                   :provider="form.patientCapital.serviceProviders[0]"
                                                   @mutate="mutateProvider(0, $event)">
                                  </ServiceProvider>
                                  <ServiceProvider title="คลินิก"
                                                   :provider="form.patientCapital.serviceProviders[1]"
                                                   @mutate="mutateProvider(1, $event)">
                                  </ServiceProvider>
                                  <ServiceProvider title="ศูนย์บริการสาธารณสุข"
                                                   :provider="form.patientCapital.serviceProviders[2]"
                                                   @mutate="mutateProvider(2, $event)">
                                  </ServiceProvider>
                                  <ServiceProvider title="อื่น ๆ"
                                                   :provider="form.patientCapital.serviceProviders[3]"
                                                   @mutate="mutateProvider(3, $event)">
                                  </ServiceProvider>
                              </div>
                          </b-field>
                          <b-field label="26. ในช่วงระยะเวลา 1 ปีที่ผ่านมา (เมษายน 2561-เมษายน 2562) ผู้ป่วยต้องอาศัยญาติในการทำกิจกรรมหลักหรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.needHelpFromFamily" size="is-medium" name="needHelpFromFamily" native-value="ไม่ใช่">ไม่ใช่</b-radio>
                                  <b-radio v-model="form.patientCapital.needHelpFromFamily" size="is-medium" name="needHelpFromFamily" native-value="ใช่">ใช่</b-radio>
                              </div>
                          </b-field>
                          <b-field v-if="form.patientCapital.needHelpFromFamily==='ใช่'">
                              <FamilyHelper :family="form.patientCapital.familyHelper" @mutate="mutateFamily"></FamilyHelper>
                          </b-field>
                          <b-field label="27. ญาติ/ผู้ดูแลหลักของผู้ป่วย พักอยู่บ้านเดียวกับผู้ป่วยหรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.stayWithFamily" size="is-medium" name="stayWithFamily" native-value="มี">ใช่</b-radio>
                                  <b-radio v-model="form.patientCapital.stayWithFamily" size="is-medium" name="stayWithFamily" native-value="ไม่ใช่">ไม่ใช่</b-radio>
                              </div>
                          </b-field>
                          <b-field label="เสียค่าใช้จ่ายในการเดินทางไปกลับบ้านผู้ป่วยเฉลี่ยเท่ากับ" v-if="form.patientCapital.stayWithFamily==='ไม่ใช่'">
                              <b-input type="number" v-model="form.patientCapital.commuteCost" step="any" placeholder="จำนวนบาท"></b-input>
                          </b-field>
                          <b-field label="28. ตั้งแต่ผู้ป่วยได้รับการวินิจฉัยว่าเป็นโรคนี้ ญาติ/ผู้ดูแลหลักมีการจัดหาสิ่งต่อไปนี้หรือไม่">
                              <div class="block">
                                  <b-radio v-model="form.patientCapital.providedStuff" size="is-medium" name="providedStuff" native-value="มี">ใช่</b-radio>
                                  <b-radio v-model="form.patientCapital.providedStuff" size="is-medium" name="providedStuff" native-value="ไม่ใช่">ไม่ใช่</b-radio>
                              </div>
                          </b-field>
                          <b-message title="รายการ" type="is-warning" :closable="false">
                              <div class="block">
                                  <b-field label="ผู้ดูแลผู้ป่วย">
                                      <b-input placeholder="ระบุอัตราจ้างต่อเดือน"
                                               type="number" step="any"
                                               v-model="form.patientCapital.careGiverWage"></b-input>
                                  </b-field>
                                  <b-field label="ผู้ดูแลทำงานบ้านเนื่องจากการเจ็บป่วยของผู้ป่วย ทำให้ไม่สามารถทำเองได้">
                                      <b-input placeholder="ระบุอัตราจ้างต่อเดือน"
                                               type="number" step="any"
                                               v-model="form.patientCapital.maidWage"></b-input>
                                  </b-field>
                                  <b-field label="ผู้ดูแลบุตรหรือบุพการี เนื่องจากการเจ็บป่วยของผู้ป่วย ทำให้ไม่สามารถดูแลได้">
                                      <b-input placeholder="ระบุอัตราจ้างต่อเดือน"
                                               type="number" step="any"
                                               v-model="form.patientCapital.assistantWage"></b-input>
                                  </b-field>
                                  <b-field label="อุปกรณ์ช่วยเหลือต่าง ๆ ของผู้ป่วยเช่น ไม้เท้า รถเข็น ถังออกซิเจน">
                                      <div class="block">
                                          <b-input placeholder="ระบุชนิดอุปกรณ์" v-model="form.patientCapital.equipment"></b-input>
                                          <b-input placeholder="จำนวนเงิน"
                                                   type="number" step="any"
                                                   v-model="form.patientCapital.equipmentCost"></b-input>
                                      </div>
                                  </b-field>
                                  <b-field label="ในปัจจุบันผู้ป่วยได้รับเงินช่วยเหลือจากการเจ็บป่วยหรือไม่">
                                      <div class="block">
                                          <b-radio size="is-medium"
                                                   name="financialSupport"
                                                   v-model="form.patientCapital.financialSupport" native-value="ไม่ได้">ไม่ได้</b-radio>
                                          <b-radio size="is-medium"
                                                   name="financialSupport"
                                                   v-model="form.patientCapital.financialSupport" native-value="ได้">ได้</b-radio>
                                      </div>
                                  </b-field>
                                  <b-field label="ระบุจำนวนคนที่ได้รับต่อเดือน" v-if="form.patientCapital.financialSupport==='ได้'">
                                      <b-numberinput min="0" v-model="form.patientCapital.numPersonReceivingFinancialSupport"></b-numberinput>
                                  </b-field>
                                  <b-field label="ระบุแหล่งที่มา" v-if="form.patientCapital.financialSupport==='ได้'">
                                      <b-input placeholder="โปรดระบุแหล่งที่มา" v-model="form.patientCapital.financialSupportSource"></b-input>
                                  </b-field>
                              </div>
                          </b-message>
                      </b-message>
                      <div class="buttons is-centered">
                          <router-link class="button is-medium is-light" :to="{name: 'HealthRecord'}">
                            <b-icon pack="fas" icon="chevron-left"></b-icon>
                            <span>
                              ย้อนกลับ
                            </span>
                          </router-link>
                        <a class="button is-medium is-success" @click="save">
                          <b-icon pack="far" icon="save"></b-icon>
                          <span>บันทึก</span>
                        </a>
                        <router-link class="button is-medium is-primary" :to="{name: 'Overhead'}">
                          <span>
                              ต่อไป
                          </span>
                          <b-icon pack="fas" icon="chevron-right"></b-icon>
                        </router-link>
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
    import { mapState } from 'vuex'

    export default {
        name: "PatientCapital",
        components: {
            "CompanyPerson": CompanyPerson,
            "ServiceProvider": ServiceProvider,
            "FamilyHelper": FamilyHelper,
        },
        data() {
            return {
                activeStep: 1,
            }
        },
      methods: {
        mutatePerson(idx, e) {
          console.log(idx, e)
          this.form.patientCapital.companyPersons[idx][e[0]] = e[1]
        },
        mutateProvider(idx, e) {
          console.log(idx, e)
          this.form.patientCapital.serviceProviders[idx][e[0]] = e[1]
        },
        mutateFamily(e) {
          console.log(e)
          this.form.patientCapital.familyHelper[e[0]] = e[1]
        },
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
      },
      computed: {
        ...mapState(['form'])
        }
    }
</script>

<style scoped>

</style>