<template>
  <div class="d-flex justify-content-center bg-white pt-5">
    <form @submit.prevent="addUser">
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Name:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="Name"
          v-model="user.name"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="phone">Phone:</label>
        <input
          type="tel"
          class="form-control mt-2"
          name="phone"
          placeholder="phone no length must be 10"
          v-model="user.phone"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Email:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput12"
          placeholder="email"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Age:</label>
        <input
          type="number"
          class="form-control mt-2"
          id="exampleFormControlInput15"
          placeholder="age"
          v-model="user.age"
        />
      </div>
      <div class="form-group mb-3">
        <label for="cars">Job Position:</label>
        <select id="cars" name="cars" class="form-control mt-2" v-model="user.jobposition">
          <option value="Tester">Tester</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="HR">HR</option>
        </select>
      </div>
      <button type="submit" class="my-3 btn btn-success">Add Employee</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        phone: "",
        email: "",
        age: "",
        jobposition: "",
      },
    };
  },
  methods: {
    addUser() {
      if(this.user.age >0 && this.user.age<50 && this.user.phone.length>0 && this.user.phone.length<11){
          axios
        .post("https://testing-api-mock.herokuapp.com/users", {
          fullname: this.user.name,
          phoneNo: this.user.phone,
          email: this.user.email,
          age: this.user.age,
          jobPosition: this.user.jobposition,
        })
        .then(() => {
          this.$router.push("/manage");
        })
        .catch((error)=>{
            console.log(error);
            alert("please carefully add employee")
        })
      }else{
          alert("rule:age must be between 10 and 50 and phone no length must be 10")
      }
    },
  },
};
</script>

<style>
</style>