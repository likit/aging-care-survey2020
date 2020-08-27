<template>
    <b-message title="ผู้ติดตามมที่พามารับบริการ" class="message is-success" :closable="false">
        <b-field label="อายุ">
            <b-input type="number" v-model="age"></b-input>
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
            <b-input v-model="personOther"></b-input>
        </b-field>
        <b-field label="">
            <b-input type="number" v-model="otherCost" placeholder="จำนวนบาท"></b-input>
        </b-field>
    </b-message>
</template>

<script>
    export default {
      name: "CompanyPerson",
      props: ['person'],
      computed: {
        age: {
          get: function() { return this.person.age },
          set: function(val) {
            this.$emit('mutate', ['age', val])
          }
        },
        gender: {
          get: function() { return this.person.gender },
          set: function(val) {
            this.$emit('mutate', ['gender', val])
          }
        },
        timeTaken: {
          get: function() { return this.person.timeTaken },
          set: function(val) {
            this.$emit('mutate', ['timeTaken', val])
          }
        },
        shelterCost: {
          get: function() { return this.person.shelterCost },
          set: function(val) {
            this.$emit('mutate', ['shelterCost', val])
          }
        },
        transportCost: {
          get: function() { return this.person.transportCost },
          set: function(val) {
            this.$emit('mutate', ['transportCost', val])
          }
        },
        foodCost: {
          get: function() { return this.person.foodCost },
          set: function(val) {
            this.$emit('mutate', ['foodCost', val])
          }
        },
        personOther: {
          get: function() { return this.person.personOther },
          set: function(val) {
            this.$emit('mutate', ['personOther', val])
          }
        },
        otherCost: {
          get: function() { return this.person.otherCost },
          set: function(val) {
            this.$emit('mutate', ['otherCost', val])
          }
        },
      }
    }
</script>

<style scoped>

</style>