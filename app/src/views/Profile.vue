<template>
    <section>
        <div class="container">
            <div class="columns">
                <div class="column has-text-centered">
                    <h1 class="title">ผู้เก็บข้อมูล</h1>
                </div>
            </div>
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <div class="box">
                        <b-field>
                            <b-input placeholder="ชื่อ นามสกุล"></b-input>
                        </b-field>
                        <b-field >
                            <b-input placeholder="ตำแหน่ง"></b-input>
                        </b-field>
                        <b-field>
                            <b-input placeholder="โทรศัพท์"></b-input>
                        </b-field>
                        <b-field>
                            <b-input type="email"
                                placeholder="E-mail"></b-input>
                        </b-field>
                        <div class="buttons is-centered">
                            <button class="button is-success">บันทึก</button>
                            <button class="button is-light">ยกเลิก</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "profile",
        data() {
        }
    }
</script>