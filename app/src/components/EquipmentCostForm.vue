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
        props: { 'title': String },
        data() {
            return {
                amount: 0,
                costPerItem: 0,
            }
        },
        computed: {
            total() {
                let amount = this.amount !== null ? parseFloat(this.amount) : 0;
                let costPerItem = this.costPerItem !== null ? parseFloat(this.costPerItem): 0;
                return amount * costPerItem;
            }
        }
    }
</script>

<style scoped>

</style>