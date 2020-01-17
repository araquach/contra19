<template>
    <section id="contact" class="contact hero is-large">
        <div class="hero-body show columns">
            <div class="column is-7">
                <h1 class="title is-2">Contact Us</h1>
                    <p class="is-size-5">Please fill in the form below and we'll get back to you as soon as we can</p>
                    <form v-if="submitStatus != 'OK'" @submit.prevent="submit">
                        <div class="field">
                            <label class="label">Full Name</label>
                            <div class="control">
                                <input class="input" v-model.trim="$v.name.$model" :class="{ 'is-danger': $v.name.$error }" placeholder="Your Full Name">
                            </div>
                            <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.name.required">
                                Name is required
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mobile Number</label>
                            <div class="control">
                                <input class="input" :class="{ 'is-danger': $v.mobile.$error }" v-model.trim="$v.mobile.$model" placeholder="Your Mobile Number">
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.required">
                                    Mobile Number
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.mobile.numeric">
                                    Valid Mobile Number Required
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email Address</label>
                            <div class="control">
                                <input class="input" :class="{ 'is-danger': $v.email.$error }" v-model.trim="$v.email.$model" placeholder="Your Email Address">
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.required">
                                    Email Address is required
                                </div>
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.email.email">
                                    Valid Email Address is required
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <input class="textarea" :class="{ 'is-danger': $v.message.$error }" v-model.trim="$v.message.$model" placeholder="Your Message">
                                <div class="help is-danger" v-if="submitStatus === 'ERROR' && !$v.message.required">
                                    Message is required
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit" :disabled="submitStatus === 'PENDING'">Send Message</button>
                            </div>
                            <br><br>
                        </div>
                    </form>
                    <div v-if="submitStatus === 'OK'">
                        <p class="is-size-4 has-text-primary">Thanks for messaging Contra! We'll get back to you as soon as we can</p>
                    </div>
                </div>
            </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#contact" @click="switchComponent" class="button">Go Back</a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {required, email, numeric} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                showInfo: false,
                name: '',
                mobile: '',
                email: '',
                message: '',
                submitStatus: null
            }
        },

        validations: {
            name: { required },
            mobile: { required, numeric },
            email: { required, email },
            message: { required }
        },

        methods:{
            switchComponent() {
                this.$emit('switchComponent')
            },

            fullMessage() {
                return `From: ${this.name}
                Mobile Number: ${this.mobile}
                Email Address: ${this.email}
                Message: ${this.message}
                `
            },

            submit() {
                console.log('submit!')
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    axios.post('/api/sendMessage', {
                        name: this.name,
                        mobile: this.mobile,
                        email: this.email,
                        message: this.fullMessage()
                    })
                        .then(response => {
                            this.submitStatus = 'OK'
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                }
            }
        }
    }
</script>