<template>
    <b-message title="ผู้ติดตามมที่พามารับบริการ" class="message is-success" :closable="false">
        <b-field label="อายุ">
            <b-input type="number"></b-input>
        </b-field>
        <b-field label="เพศ">
            <div class="block">
                <b-radio name="gender" v-model="gender" native-value="ชาย">ชาย</b-radio>
                <b-radio name="gender" v-model="gender" native-value="หญิง">หญิง</b-radio>
            </div>
        </b-field>
        <b-field label="ระยะเวลาทั้งหมดที่ใช้เพื่อพาผู้ป่วยมารับการรักษา">
            <b-input type="number" v-model="timeTaken" placeholder="จำนวนชั่วโมง"></b-input>
        </b-field>
        <b-field label="ค่าที่พัก">
            <b-input type="number" v-model="shelterCost" placeholder="จำนวนบาท"></b-input>
        </b-field>
        <b-field label="ค่าเดินทางไปกลับ">
            <b-input type="number" v-model="transportCost" placeholder="จำนวนบาท"></b-input>
        </b-field>
        <b-field label="ค่าอาหารที่เพิ่มขึ้น">
            <b-input type="number" v-model="foodCost" placeholder="จำนวนบาท"></b-input>
        </b-field>
        <b-field label="อื่น ๆ โปรดระบุ">
            <b-input type="number" v-model="other"></b-input>
        </b-field>
        <b-field label="">
            <b-input type="number" v-model="otherCost" placeholder="จำนวนบาท"></b-input>
        </b-field>
    </b-message>
</template>

<script>
    export default {
        name: "CompanyPerson",
        data() {
            return {
                gender: null,
                age: null,
                timeTaken: null,
                shelterCost: null,
                transportCost: null,
                foodCost: null,
                other: null,
                otherCost: null,
            }
        }
    }
</script>

<style scoped>

</style>