<template>

<v-layout column>
 <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
   <v-toolbar flat dense class="blue darken-4" dark>
    <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
<div class="pl-4 pr-4 pt-2 pb-2">
<v-text-field
  label="Email"
  v-model="email"
  ></v-text-field>

 <v-text-field
 type="password"
  label="Password"
  v-model="password"
  ></v-text-field>
 
 <div class="error" v-html ="error" />
 
 <v-btn dark class="blue" 
 @click="register">
 Register
 </v-btn> 
    </div>
  </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
