<template>
  <div class="d-flex justify-content-center mt-5">
    
    <form @submit.prevent="signup">
      <div class="mb-3">
        <h4>SignUp</h4>
        <label for="exampleInputEmail1" class="form-label">Email Address :</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="youremail@gmail.com"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          name="password" autocomplete="on"
          placeholder="password"
          v-model="user.password"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Retype-Password :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          name="password" autocomplete="on"
          placeholder="retype-password"
        />
      </div>
      <button type="submit" class="btn btn-primary">SignUp</button>
    </form>
  </div>
</template>

<script>
import { app as firebaseApp } from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data(){
    return{
      user:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    signup(){
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/signin")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
};
</script>

<style>

</style>