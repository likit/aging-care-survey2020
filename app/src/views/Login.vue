<template>
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-one-third is-offset-4 has-text-centered">
                <h4 class="title">Sign In</h4>
                <div class="card">
                    <div class="card-content">
                        <b-field label="Email">
                            <b-input v-model="email"></b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input type="password" v-model="password" password-reveal></b-input>
                        </b-field>
                        <div class="field">
                            <div class="buttons is-centered">
                                <button class="button is-link" @click="login">Submit</button>
                                <button class="button is-danger">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { auth } from '../firebase';
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login: function() {
            var self = this;
            auth.signInWithEmailAndPassword(self.email, self.password).then(
                function(data) {
                    console.log(data)
                    self.$store.commit('SET_LOGIN_TRUE')
                    self.$store.commit('SET_CURRENT_USER', self.email)
                    self.$store.dispatch('fetchProfile', self.email)
                    self.$buefy.dialog.alert({
                        title: 'Login Successful',
                        message: 'You have been logged in.',
                        type: 'is-success',
                        hasIcon: true,
                        icon: 'check-circle',
                        iconPack: 'fa',
                        ariaRole: 'alertdialog',
                        ariaModal: true,
                        onConfirm: () => self.$router.push({name: 'Landing'}),
                    })
                }).catch(()=> {
                        //TODO: display Buefy error dialog
                        //TODO: add a button for getting a password via or contact the admin
                        self.$buefy.dialog.alert({
                          title: 'Error!',
                          message: 'โปรแกรมไม่สามารถโหลดข้อมูลผู้ใช้งานได้ โปรดตรวจสอบการเชื่อมต่อเครือข่ายอินเตอร์เน็ตและลองอีกครั้ง',
                          type: 'is-danger',
                          hasIcon: true,
                          icon: 'times-circle',
                          iconPack: 'fa',
                          ariaRole: 'alertdialog',
                          ariaModal: true
                        })
            })
        }
    }
}
</script>