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
        props: {'title': String, 'service': Object},
        computed: {
            wage: {
              get: function() {
                return this.service.wage || 0
              },
              set: function (val) {
                this.$emit('mutate', ['wage', val])
              }
            },
            positionAllowance: {
              get: function() {
                return this.service.positionAllowance || 0
              },
              set: function (val) {
                this.$emit('mutate', ['positionAllowance', val])
              }
            },
            overTime: {
              get: function() {
                return this.service.overTime || 0
              },
              set: function (val) {
                this.$emit('mutate', ['overTime', val])
              }
            },
            healthCoverage: {
              get: function() {
                return this.service.healthCoverage || 0
              },
              set: function (val) {
                this.$emit('mutate', ['healthCoverage', val])
              }
            },
            otherAllowance: {
              get: function() {
                return this.service.otherAllowance || 0
              },
              set: function (val) {
                this.$emit('mutate', ['otherAllowance', val])
              }
            },
            tip: {
              get: function() {
                return this.service.tip || 0
              },
              set: function (val) {
                this.$emit('mutate', ['tip', val])
              }
            },
            total() {
                return parseFloat(this.wage) +
                    parseFloat(this.tip) + parseFloat(this.positionAllowance) +
                    parseFloat(this.overTime) + parseFloat(this.healthCoverage) +
                    parseFloat(this.otherAllowance);
            }
        }
    }
</script>

<style scoped>

</style>