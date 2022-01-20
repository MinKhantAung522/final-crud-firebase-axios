<template>
  <div class="d-flex justify-content-center mt-5">
    <form @submit.prevent="signin">
      <div class="mb-3">
        <h4>SignIn</h4>
        <label for="exampleInputEmail1" class="form-label"
          >Email Address :</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          name="password"
          autocomplete="on"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">SignIn</button>
    </form>
  </div>
</template>

<script>
import { app as firebaseApp } from "../firebase/firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((user) => {
         onAuthStateChanged(auth , (user)=>{
           if(user){
             this.$router.push("/manage")
           }
         })
        })
        .catch((error) => {
          const errorCode = error.code;
          alert(errorCode.slice(5))
        });
    },
  },
};
</script>

<style>
</style>