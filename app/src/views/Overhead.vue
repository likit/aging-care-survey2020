<template>
    <section class="section">
        <div class="container">
            <b-steps
                    v-model="activeStep"
                    :has-navigation="false"
                    :mobile-mode="compact"
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
                <ServiceFeeForm title="พยาบาลวิชาชีพ"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="ผู้ช่วยพยาบาล"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักกายภาพบำบัด"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักกิจกรรมบำบัด"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักการแพทย์แผนไทย"></ServiceFeeForm>
            </b-message>
            <b-message title="แบบบันทึกข้อมูลค่าวัสดุ" type="is-primary" :closable="false">
                <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์กระตุ้นสมรรถภาพสมอง"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์สาธิตสำหรับผู้ดูแล"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์ฟื้นฟูสมรรถภาพร่างกาย"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์การแพทย์แผนไทย"></EquipmentCostForm>
            </b-message>
            <b-message title="แบบบันทึกข้อมูลค่าลงทุน/ค่าเสื่อมราคา" :closable="false" type="is-primary">
                <b-field label="ห้องบริการดูแลกลางวัน">
                </b-field>
                <b-field label="ประเภท">
                    <b-input type="text" v-model="equipmentType"></b-input>
                </b-field>
                <b-field label="อายุการใช้งาน (ปี)">
                    <b-input type="number" v-model="lifespan"></b-input>
                </b-field>
                <b-field label="ราคาซื้อ (บาท)">
                    <b-input type="number" step="any" v-model="price"></b-input>
                </b-field>
                <b-field label="ปีที่ตรวจรับ (พ.ศ.)">
                    <b-input type="text" v-model="purchasedYear"></b-input>
                </b-field>
                <b-field label="จำนวน">
                    <b-input type="number" v-model="amount"></b-input>
                </b-field>
                <b-field label="ราคารวม (บาท)">
                    <b-input type="number" step="any" v-model="totalCost"></b-input>
                </b-field>
                <b-field label="ค่าเสื่อมราคาต่อปี (บาท)">
                    <b-input type="number" step="any" v-model="depreciationPerYear"></b-input>
                </b-field>
                <b-field label="ต้นทุนต่อปี (บาท)">
                    <b-input type="number" step="any" v-model="capPerYear"></b-input>
                </b-field>
            </b-message>
            <h1 class="subtitle is-size-4">
                3.2 การบริการดูแลสุขภาพที่บ้าน (Home Healthcare)
            </h1>
            <b-message title="แบบบันทึกข้อมูลค่าแรง" :closable="false" type="is-primary">
                <ServiceFeeForm title="พยาบาลวิชาชีพ"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="ผู้ช่วยพยาบาล"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักกายภาพบำบัด"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักกิจกรรมบำบัด"></ServiceFeeForm>
                <br>
                <ServiceFeeForm title="นักการแพทย์แผนไทย"></ServiceFeeForm>
            </b-message>
            <b-message title="แบบบันทึกข้อมูลค่าวัสดุ" type="is-primary" :closable="false">
                <EquipmentCostForm title="กระเป๋าใส่วัสดุและอุปกรณ์"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="แบบบันทึก/แบบประเมินต่าง ๆ"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="สื่อ/แผ่นพับ"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="เครื่องมืออื่น ๆ ตามความจำเป็นของสหสาขาวิชาชีพ"></EquipmentCostForm>
                <br>
                <EquipmentCostForm title="เครื่องมือหรืออุปกรณ์ที่ผู้ป่วยได้รับติดตัวกลับบ้าน"></EquipmentCostForm>
            </b-message>
            <div class="buttons is-centered">
                <a class="button is-medium is-light"
                   href="/patient-capital">
                    ย้อนกลับ
                </a>
                <a class="button is-medium is-primary"
                   href="/EQ-5D-5L">
                    ต่อไป
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import ServiceFeeForm from "../components/ServiceFeeForm";
    import EquipmentCostForm from "../components/EquipmentCostForm";
    export default {
        name: "Overhead",
        components: {
            "ServiceFeeForm": ServiceFeeForm,
            "EquipmentCostForm": EquipmentCostForm,
        },
        data() {
            return {
                equipmentType: null,
                lifespan: null,
                price: null,
                purchasedYear: null,
                amount: null,
                totalCost: null,
                depreciationPerYear: null,
                capPerYear: null,
                activeStep: 1,
            }
        }
    }
</script>

<style scoped>

</style>