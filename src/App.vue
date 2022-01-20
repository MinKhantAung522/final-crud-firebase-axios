<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/"><i class="fas fa-home"></i>Home</router-link> |
      <router-link to="/manage"><i class="fas fa-cog"></i>Management</router-link> |
      <router-link to="/signin">SignIn</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <button v-if="show" class="btn btn-link mb-1" @click="signout"><i class="fas fa-sign-out-alt"></i>SignOut</button>
      
    </div>
    <router-view/>
  </div>
</template>
<script>
import { app as firebaseApp } from "./firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
export default {
  data(){
    return{
      show:true
    }
  },
  methods:{
    toview(emp){
      this.singleEmp = emp
      console.log(emp);
    },
    signout(){
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  }
}
</script>
<style>

</style>
