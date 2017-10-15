<template>

<v-layout column>
 <v-flex xs6 offset-xs3>
  <div class="white elevation-2">
   <v-toolbar flat dense class="blue darken-4">
    <v-toolbar-title class="reg">Register</v-toolbar-title>
    </v-toolbar>
<div class="pl-4 pr-4 pt-2 pb-2">
  <input 
 type="email" 
 v-model="email"
 name="email"
 placeholder="Email" />
<br>
 <input 
 type="password" 
 v-model="password"
 name="password"
 placeholder="Password" />
 <br>
 <div class="error" v-html ="error" />
 <br>
 <v-btn class="blue" 
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
.error {
  color: red;
}
.reg {
  color: white;
}
</style>
