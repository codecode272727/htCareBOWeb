<template>
    <div class="vertical-center">
        <div>
            <div style="text-align:center">
                <div style="margin:5px;font-size:25px;font-weight:bold"><span style="color:blue">ht</span>Care Dental</div>
                <div style="font-size:25px;font-weight:bold">Back Office System</div>
                <br/>
            </div>
            <div class="section-loginform">
                <div class="container">
                    <div>
                        <label class="mt-1">Username: </label>
                    </div>
                    <div>
                        <b-form-input type="text" name="name" v-model="$v.username.$model" @input="$v.username.$touch()" />
                        <div class="error" v-if="$v.username.$error">
                            <div>
                                <div v-if="!$v.username.required">* Username cannot be empty.</div>
                                <div v-if="(!$v.username.alphaNum ||!$v.username.maxLength) & $v.username.required">* Username only support alphanumeric with max length 20</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label  class="mt-1">Password: </label>
                    <div>
                        <b-form-input type="password" name="name" v-model="$v.password.$model" @input="$v.password.$touch()"/>
                        <div class="error" v-if="$v.password.$error">
                            <div>
                                <div v-if="!$v.password.required">* Password cannot be empty.</div>
                                <div v-if="!$v.password.maxLength & $v.password.required">* Password only support alphanumeric and special characters with max length 20</div>
                            </div>
                        </div>
                    </div>

                </div>
                <b-button type="button" variant="primary" @click="login()" v-bind:disabled="$v.$invalid" style="width: 100%;">Login</b-button>
            </div>
           
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { required, maxLength, alphaNum } from 'vuelidate/lib/validators'


    @Component({
        components: {

        },
    })
    export default class Login extends Vue {
        username: string = ''
        password: string = ''
        errMsg: boolean = false
        errMsg1: boolean = false
        errMsg2: boolean = false

        validations() {
            return {
                username: {
                    required,
                    alphaNum,
                    maxLength: maxLength(20),
                },
                password: {
                    required,
                    maxLength: maxLength(20),
                }
            }
        }

        async login() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                console.log("valid here")
                //await AuthModule.Login({ Username: this.username, Password: this.password })
                //    .then(() => {
                //        if (AuthModule.user.IsForceChangePassword) {
                //            this.$router.push('/changePassword')
                //        }
                //        else {
                //            this.$router.push('/')
                //        }

                //    })

            }
        }
    }
</script>
<style scoped>
    .center {
        margin: auto;
        width: 40%;

    }
    .section-loginform {
        background-color: #DCEAFF;
        padding: 30px;
        border-radius: 15px;
        width: 400px;
        margin: auto;
        display:flex;
        flex-direction:column;
    }
    .error {
        color: #FF0000;
        font-size: 12px;
        text-align: left;
    }

    input.form-input-error {
        border: 1px solid #FF0000 !important;
    }

    input {
        outline: none;
    }

        input.form-input-error:focus {
            border: 1px solid #FF0000 !important;
        }

        input.form-input-no-error {
            border: 1px solid black;
        }

    .errMsg {
        display: grid;
        grid-template-columns: 1fr 9fr;
        grid-column-gap: 5px;
    }

    .errorMark {
        color: #FF0000;
        font-size: 12px;
        text-align: right;
    }
    .vertical-center {
        min-height: 100%; /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */
        /* Make it a flex container */
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        /* Align the bootstrap's container vertically */
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        /* Also 'margin: 0 auto' doesn't have any effect on flex items in such web browsers
     hence the bootstrap's container won't be aligned to the center anymore.
  
     Therefore, we should use the following declarations to get it centered again */
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .container {
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap:10px
    }

    .login-btn{

    }
</style>
