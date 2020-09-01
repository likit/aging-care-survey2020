<template>
  <section class="section">
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
      <h1 class="title is-size-3">3. แบบบันทึกข้อมูลต้นทุน</h1>
      <h1 class="subtitle is-size-4">
        3.1 การบริการดูแลกลางวันแบบไปกลับ (Day care)
      </h1>
      <b-message title="แบบบันทึกข้อมูลค่าแรง" type="is-primary" :closable="false">
        <ServiceFeeForm title="พยาบาลวิชาชีพ"
                        @mutate="mutateDayCareServiceFee(0, $event)"
                        :service="form.overheads.dayCareServiceFees[0]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="ผู้ช่วยพยาบาล"
                        @mutate="mutateDayCareServiceFee(1, $event)"
                        :service="form.overheads.dayCareServiceFees[1]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักกายภาพบำบัด"
                        @mutate="mutateDayCareServiceFee(2, $event)"
                        :service="form.overheads.dayCareServiceFees[2]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักกิจกรรมบำบัด"
                        @mutate="mutateDayCareServiceFee(3, $event)"
                        :service="form.overheads.dayCareServiceFees[3]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักการแพทย์แผนไทย"
                        @mutate="mutateDayCareServiceFee(4, $event)"
                        :service="form.overheads.dayCareServiceFees[4]"
        ></ServiceFeeForm>
      </b-message>
      <b-message title="แบบบันทึกข้อมูลค่าวัสดุ" type="is-primary" :closable="false">
        <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์กระตุ้นสมรรถภาพสมอง"
                           :care="form.overheads.dayCareEquipments[0]"
                           @mutate="mutateDayCareEquipments(0, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์สาธิตสำหรับผู้ดูแล"
                           :care="form.overheads.dayCareEquipments[1]"
                           @mutate="mutateDayCareEquipments(1, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์ฟื้นฟูสมรรถภาพร่างกาย"
                           :care="form.overheads.dayCareEquipments[2]"
                           @mutate="mutateDayCareEquipments(2, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์การแพทย์แผนไทย"
                           :care="form.overheads.dayCareEquipments[3]"
                           @mutate="mutateDayCareEquipments(3, $event)"
        ></EquipmentCostForm>
      </b-message>
      <b-message title="แบบบันทึกข้อมูลค่าลงทุน/ค่าเสื่อมราคา" :closable="false" type="is-primary">
        <b-field label="ห้องบริการดูแลกลางวัน">
        </b-field>
        <b-field label="ประเภท">
          <b-input type="text" v-model="form.overheads.equipmentType"></b-input>
        </b-field>
        <b-field label="อายุการใช้งาน (ปี)">
          <b-input type="number" v-model="form.overheads.lifespan"></b-input>
        </b-field>
        <b-field label="ราคาซื้อ (บาท)">
          <b-input type="number" step="any" v-model="form.overheads.price"></b-input>
        </b-field>
        <b-field label="ปีที่ตรวจรับ (พ.ศ.)">
          <b-input type="text" v-model="form.overheads.purchasedYear"></b-input>
        </b-field>
        <b-field label="จำนวน">
          <b-input type="number" v-model="form.overheads.amount"></b-input>
        </b-field>
        <b-field label="ราคารวม (บาท)">
          <b-input type="number" step="any" v-model="form.overheads.totalCost"></b-input>
        </b-field>
        <b-field label="ค่าเสื่อมราคาต่อปี (บาท)">
          <b-input type="number" step="any" v-model="form.overheads.depreciationPerYear"></b-input>
        </b-field>
        <b-field label="ต้นทุนต่อปี (บาท)">
          <b-input type="number" step="any" v-model="form.overheads.capPerYear"></b-input>
        </b-field>
      </b-message>
      <h1 class="subtitle is-size-4">
        3.2 การบริการดูแลสุขภาพที่บ้าน (Home Healthcare)
      </h1>
      <b-message title="แบบบันทึกข้อมูลค่าแรง" :closable="false" type="is-primary">
        <ServiceFeeForm title="พยาบาลวิชาชีพ"
                        @mutate="mutateHomeCareServices(0, $event)"
                        :service="form.overheads.homeCareServiceFees[0]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="ผู้ช่วยพยาบาล"
                        @mutate="mutateHomeCareServices(1, $event)"
                        :service="form.overheads.homeCareServiceFees[1]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักกายภาพบำบัด"
                        @mutate="mutateHomeCareServices(2, $event)"
                        :service="form.overheads.homeCareServiceFees[2]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักกิจกรรมบำบัด"
                        @mutate="mutateHomeCareServices(3, $event)"
                        :service="form.overheads.homeCareServiceFees[3]"
        ></ServiceFeeForm>
        <br>
        <ServiceFeeForm title="นักการแพทย์แผนไทย"
                        @mutate="mutateHomeCareServices(4, $event)"
                        :service="form.overheads.homeCareServiceFees[4]"
        ></ServiceFeeForm>
      </b-message>
      <b-message title="แบบบันทึกข้อมูลค่าวัสดุ" type="is-primary" :closable="false">
        <EquipmentCostForm title="กระเป๋าใส่วัสดุและอุปกรณ์"
                           :care="form.overheads.homeCareEquipments[0]"
                           @mutate="mutateHomeCareEquipments(0, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="แบบบันทึก/แบบประเมินต่าง ๆ"
                           :care="form.overheads.homeCareEquipments[1]"
                           @mutate="mutateHomeCareEquipments(1, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="สื่อ/แผ่นพับ"
                           :care="form.overheads.homeCareEquipments[2]"
                           @mutate="mutateHomeCareEquipments(2, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="เครื่องมืออื่น ๆ ตามความจำเป็นของสหสาขาวิชาชีพ"
                           :care="form.overheads.homeCareEquipments[3]"
                           @mutate="mutateHomeCareEquipments(3, $event)"
        ></EquipmentCostForm>
        <br>
        <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์ที่ผู้ป่วยได้รับติดตัวกลับบ้าน"
                           :care="form.overheads.homeCareEquipments[4]"
                           @mutate="mutateHomeCareEquipments(4, $event)"
        ></EquipmentCostForm>
      </b-message>
      <div class="buttons is-centered">
        <router-link class="button is-medium is-light" :to="{name: 'PatientCapital'}">
          <b-icon pack="fas" icon="chevron-left"></b-icon>
          <span>
            ย้อนกลับ
          </span>
        </router-link>
        <a class="button is-medium is-success" @click="save">
          <b-icon pack="far" icon="save"></b-icon>
          <span>บันทึก</span>
        </a>
        <router-link class="button is-medium is-primary" :to="{name: 'EQ5D5L'}">
          <span>
              ต่อไป
          </span>
          <b-icon pack="fas" icon="chevron-right"></b-icon>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceFeeForm from "../components/ServiceFeeForm"
import EquipmentCostForm from "../components/EquipmentCostForm"
import {mapState} from 'vuex'

export default {
  name: "Overhead",
  components: {
    "ServiceFeeForm": ServiceFeeForm,
    "EquipmentCostForm": EquipmentCostForm,
  },
  computed: {
    ...mapState(['form'])
  },
  methods: {
    mutateDayCareServiceFee(idx, e) {
      console.log(idx, e)
      this.form.overheads.dayCareServiceFees[idx][e[0]] = parseFloat(e[1])
    },
    mutateHomeCareServices(idx, e) {
      console.log(idx, e)
      this.form.overheads.homeCareServiceFees[idx][e[0]] = parseFloat(e[1])
    },
    mutateDayCareEquipments(idx, e) {
      console.log(idx, e)
      this.form.overheads.dayCareEquipments[idx][e[0]] = parseFloat(e[1])
      if (this.form.overheads.dayCareEquipments[idx]['amount'] !== null ||
          this.form.overheads.dayCareEquipments[idx]['costPerItem'] !== null) {
        this.form.overheads.dayCareEquipments[idx]['total'] =
            this.form.overheads.dayCareEquipments[idx]['amount'] *
            this.form.overheads.dayCareEquipments[idx]['costPerItem']
      } else {
        this.form.overheads.dayCareEquipments[idx]['total'] = null
      }
    },
    mutateHomeCareEquipments(idx, e) {
      console.log(idx, e)
      this.form.overheads.homeCareEquipments[idx][e[0]] = parseFloat(e[1])
      if (this.form.overheads.homeCareEquipments[idx]['amount'] !== null ||
          this.form.overheads.homeCareEquipments[idx]['costPerItem'] !== null) {
        this.form.overheads.homeCareEquipments[idx]['total'] =
            this.form.overheads.homeCareEquipments[idx]['amount'] *
            this.form.overheads.homeCareEquipments[idx]['costPerItem']
      } else {
        this.form.overheads.homeCareEquipments[idx]['total'] = null
      }
    },
    save() {
      let self = this
      this.$store.dispatch('saveForm').then(() => {
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
      }).catch(() => {
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
      activeStep: 2
    }
  }
}
</script>

<style scoped>

</style>