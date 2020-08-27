<template>
    <b-message type="is-success" :closable="false">
        <b-field :label="title">
            <b-input v-model="name" placeholder="ระบุชื่อ"></b-input>
        </b-field>
        <b-field label="จำนวนครั้ง">
            <b-numberinput min="0" v-model="times"></b-numberinput>
        </b-field>
        <b-field label="จำนวนเงินโดยเฉลี่ยที่ใช้จ่ายต่อครั้ง">
            <b-input type="number" v-model="totalCost" step="any" placeholder="จำนวนบาท"></b-input>
        </b-field>
    </b-message>
</template>

<script>
    export default {
        name: "ServiceProvider",
        props: {'title': String, 'provider': Object},
        computed: {
            times: {
              get: function() {
                return this.provider.times
              },
              set: function(val) {
                this.$emit('mutate', ['times', val])
              }
            },
            totalCost: {
              get: function() {
                return this.provider.totalCost
              },
              set: function(val) {
                this.$emit('mutate', ['totalCost', val])
              }
            },
            name: {
              get: function() {
                return this.provider.name
              },
              set: function(val) {
                this.$emit('mutate', ['name', val])
              }
            },
        }
    }
</script>

<style scoped>

</style>