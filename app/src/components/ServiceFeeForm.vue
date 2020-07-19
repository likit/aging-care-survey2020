<template>
    <div>
        <h1 class="title is-size-4">{{ title }}</h1>
        <b-field label="ค่าจ้าง/เงินเดือน">
            <b-input type="number" min="0" step="any" v-model="wage"></b-input>
        </b-field>
        <b-field label="เงินประจำตำแหน่ง">
            <b-input type="number" min="0" step="any" v-model="positionAllowance"></b-input>
        </b-field>
        <b-field label="ค่าล่วงเวลา">
            <b-input type="number" min="0" step="any" v-model="overTime"></b-input>
        </b-field>
        <b-field label="เงินตอบแทนพิเศษ">
            <b-input type="number" min="0" step="any" v-model="tip"></b-input>
        </b-field>
        <b-field label="ค่ารักษาพยาบาล">
            <b-input type="number" min="0" step="any" v-model="healthCoverage"></b-input>
        </b-field>
        <b-field label="สวัสดิการอื่น ๆ">
            <b-input type="number" min="0" step="any" v-model="otherAllowance"></b-input>
        </b-field>
        <strong>รวม {{ total }}</strong>
    </div>
</template>

<script>
    export default {
        name: "ServiceFeeForm",
        props: {'title': String},
        data() {
            return {
                wage: 0,
                positionAllowance: 0,
                overTime: 0,
                healthCoverage: 0,
                otherAllowance: 0,
                tip: 0
            }
        },
        computed: {
            total() {
                let wage = this.wage !== null ? parseFloat(this.wage) : 0;
                let tip = this.tip !== null ? parseFloat(this.tip) : 0;
                let positionAllowance = this.positionAllowance !== null ? parseFloat(this.positionAllowance) : 0;
                let overTime = this.overTime !== null ? parseFloat(this.overTime) : 0;
                let healthCoverage = this.healthCoverage !== null ? parseFloat(this.healthCoverage) : 0;
                let otherAllowance = this.otherAllowance !== null ? parseFloat(this.otherAllowance) : 0;
                return wage + tip + positionAllowance + overTime + healthCoverage + otherAllowance;
            }
        }
    }
</script>

<style scoped>

</style>