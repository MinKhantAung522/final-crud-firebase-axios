<template>
  <div class="d-flex justify-content-center bg-white pt-5">
    <form @submit.prevent="addUser">
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">FullName:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="first name"
          v-model="user.name"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">PhoneNumber:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="last name"
          v-model="user.phone"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Email:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="last name"
          v-model="user.email"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Age:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="user.age"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">JobPosition:</label>
        <input
          type="text"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="jobposition"
          v-model="user.jobposition"
        />
      </div>
      <button type="submit" class="my-3 btn btn-primary">Edit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
    props:["id"],
  data() {
    return {
      user: {
        name: "",
        phone: "",
        email: "",
        age:'',
        jobposition:''
      },
    };
  },
  methods: {
    addUser() {
        const data = {
            "fullname": this.user.name,
            "phoneNo":this.user.phone,
            "email":this.user.email,
            "age":this.user.age,
            "jobPosition":this.user.jobposition,
            "id":this.id
        }
        
      axios
        .put("https://testing-api-mock.herokuapp.com/users", data)
        .then(() => {
          this.$router.push("/");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
  mounted(){
      axios.get("https://testing-api-mock.herokuapp.com/users/"+this.id)
      .then((res)=>{
          const fetcheduser = res.data;
          console.log(fetcheduser.fullname);
          this.user.name = fetcheduser.fullname;
          this.user.phone = fetcheduser.phoneNo;
          this.user.email = fetcheduser.email;
          this.user.age = fetcheduser.age;
          this.user.jobposition = fetcheduser.jobPosition;
      })
  }
};
</script>

<style>
</style>