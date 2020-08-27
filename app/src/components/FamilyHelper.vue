<template>
  <b-message title="ผู้ดูแล" class="message is-success" :closable="false">
    <b-field label="อายุ">
      <b-input type="number" v-model="age"></b-input>
    </b-field>
    <b-field label="เพศ">
      <div class="block">
        <b-radio name="gender" v-model="gender" native-value="ชาย">ชาย</b-radio>
        <b-radio name="gender" v-model="gender" native-value="หญิง">หญิง</b-radio>
      </div>
    </b-field>
    <b-field label="ความถี่">
      <b-input type="number" v-model="frequency" placeholder="จำนวนครั้ง"></b-input>
    </b-field>
    <b-field label="ระยะเวลาต่อครั้ง (นาที,ชั่วโมง)">
      <b-input v-model="timePerHelp"></b-input>
    </b-field>
    <b-field label="ระยะเวลาต่อเนื่องนาน (นาที, ชั่วโมง)">
      <b-input v-model="duration"></b-input>
    </b-field>
  </b-message>
</template>

<script>
export default {
  name: "FamilyHelper",
  props: ['family'],
  computed: {
    age: {
      get: function () {
        return this.family.age
      },
      set: function (val) {
        this.$emit('mutate', ['age', val])
      }
    },
    gender: {
      get: function () {
        return this.family.gender
      },
      set: function (val) {
        this.$emit('mutate', ['gender', val])
      }
    },
    frequency: {
      get: function () {
        return this.family.frequency
      },
      set: function (val) {
        this.$emit('mutate', ['frequency', val])
      }
    },
    timePerHelp: {
      get: function () {
        return this.family.timePerHelp
      },
      set: function (val) {
        this.$emit('mutate', ['timePerHelp', val])
      }
    },
    duration: {
      get: function () {
        return this.family.duration
      },
      set: function (val) {
        this.$emit('mutate', ['duration', val])
      }
    },
  }
}
</script>

<style scoped>

</style>
