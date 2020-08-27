<template>
    <div>
        <h1 class="title is-size-6">{{ title }}</h1>
        <b-field label="จำนวน (ชิ้น)">
            <b-input type="number" min="0" v-model="amount"></b-input>
        </b-field>
        <b-field label="ราคาต่อหน่วย (บาท)">
            <b-input type="number" min="0" step="any" v-model="costPerItem"></b-input>
        </b-field>
        <b-field label="ราคารวม (บาท)">
            <b-input type="number" min="0" step="any" v-model="total"></b-input>
        </b-field>
    </div>
</template>

<script>
    export default {
        name: "EquipmentCostForm",
        props: { 'title': String, 'care': Object },
        computed: {
          amount: {
            get: function () { return this.care.amount === null ? 0 : this.care.amount },
            set: function(val) {
              this.$emit('mutate', ['amount', val])
            }
          },
          costPerItem: {
            get: function () { return this.care.costPerItem === null ? 0 : this.care.costPerItem },
            set: function(val) {
              this.$emit('mutate', ['costPerItem', val])
            }
          },
          total: {
            get: function() {
              return this.care.total === null ? 0 : this.care.total
            }
          }
        }
    }
</script>

<style scoped>

</style>