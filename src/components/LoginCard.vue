<template>
   <div class="card">
      <div class="header">
         <span v-if="type == 'login'">Accedi</span>
         <span v-if="type == 'signup'">Registrati</span>
      </div>
      <div class="body">
         <form @submit.prevent="login">
            <BaseInputWithIcon
               v-if="type == 'signup'"
               placeholder="Name"
               v-model="credentials.name"
               icon="user-circle"
            ></BaseInputWithIcon>
            <BaseInputWithIcon
               type="text"
               placeholder="Email"
               v-model="credentials.email"
               icon="envelope"
            ></BaseInputWithIcon>
            <BaseInputWithIcon
               type="password"
               placeholder="Password"
               v-model="credentials.password"
               icon="lock"
            ></BaseInputWithIcon>

            <BaseButton
               v-if="type == 'login'"
               buttonClass="secondary"
               type="submit"
            >
               Accedi
            </BaseButton>
            <BaseButton
               v-if="type == 'signup'"
               buttonClass="secondary"
               @click="register"
            >
               Registrati
            </BaseButton>
         </form>
         <div v-if="type == 'login'">
            Non hai un account?
            <router-link :to="{ name: 'signup' }">Registrati</router-link>
         </div>
         <div v-if="type == 'signup'">
            Hai già un account?
            <router-link :to="{ name: 'login' }">Accedi</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import UserService from '@/services/user.service.js'

export default {
   data() {
      return {
         credentials: {
            email: 'ale@gmail.com',
            password: 'password'
         }
      }
   },
   computed: {
      type() {
         return this.$route.path.substring(1)
      }
   },
   methods: {
      register() {
         console.log(this.name, this.email, this.password)
         this.$store.dispatch('register', {
            name: this.name,
            email: this.email,
            password: this.password
         })
      },
      login() {
         console.log('Credenziali:',this.credentials.email, this.credentials.password)
         this.$store.dispatch('login', this.credentials)
         UserService.checkLogin().then(response => {
            console.log(response.data)
         }).catch(error => {
            console.log("That was an error with your test: " + error)
         })
      }
   }
}
</script>

<style lang="sass" scoped>
@import '../assets/global.sass'
.card
    border-radius: 20px
    border: none
    height: 440px
    margin: 0px auto
    width: 440px
    .header
        background-color: map-get($colors, 'primary')
        border-radius: 20px 20px 0px 0px
        color: white
        font-size: 24px
        font-weight: 500
        height: 2.5em
        line-height: 2.5em
    span
        height: 100%
        vertical-align: middle
    .body
        display: flex
        flex-direction: column
        height: 100%
        justify-content: center
        padding: 48px 40px 40px 40px
</style>
