<template>
    <b-message title="ผู้ดูแล" class="message is-success" :closable="false">
        <b-field label="อายุ">
            <b-input type="number"></b-input>
        </b-field>
        <b-field label="เพศ">
            <div class="block">
                <b-radio name="gender" v-model="gender" native-value="ชาย">ชาย</b-radio>
                <b-radio name="gender" v-model="gender" native-value="หญิง">หญิง</b-radio>
            </div>
        </b-field>
        <b-field label="ความถี่">
            <b-input type="number" v-model="frequency" placeholder="จำนวนบาท"></b-input>
        </b-field>
        <b-field label="ระยะเวลาต่อครั้ง (นาที,ชั่วโมง)">
            <b-input type="number" v-model="timePerHelp"></b-input>
        </b-field>
        <b-field label="ระยะเวลาต่อเนื่องนาน (นาที, ชั่วโมง)">
            <b-input type="number" v-model="duration"></b-input>
        </b-field>
    </b-message>
</template>

<script>
    export default {
        name: "FamilyHelper",
        data() {
            return {
                gender: null,
                age: null,
                frequency: null,
                timePerHelp: null,
                duration: null,
            }
        }
    }
</script>

<style scoped>

</style>
