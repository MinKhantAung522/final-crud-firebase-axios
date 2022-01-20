<template>
  <div>
    <div class="d-flex justify-content-between mx-5 mt-3">
      <div>
        <input type="text" placeholder="search by position" v-model="jobPosition">
        <button class="btn btn-primary" @click="search">search</button>
        {{jobPosition}}
      </div>
      <div>
        <p>Total Employee --></p>
      </div>
      <div>
        <button class="btn btn-primary" title="addUser" @click="toAdd">
        <i class="fas fs-3 fa-user-plus"></i>
      </button>
      <button class="btn btn-danger ms-2" title="deleteAll" @click="deleteAll">
        <i class="fas fa-trash-alt me-2"></i>Delete All
      </button>
      </div>
    </div>
    
    <List :employee_list="employee_list" @delete="deletee($event)"></List>

  </div>
</template>

<script>
import List from "../components/List";
import axios from "axios";

export default {
  components: {
    List,
  },
  data() {
    return {
      employee_list: [],
      jobPosition:"",
      page:1
    };
  },
  methods: {
    deleteAll() {
      axios
        .delete("")
        .then(() => {
          this.employee_list = []
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deletee(id) {
      console.log(id);
      this.employee_list = this.employee_list.filter((emp) => {
        return emp.id != id;
      });
    },
    toAdd() {
      this.$router.push("/add");
    },
    search(){
      axios.get("https://testing-api-mock.herokuapp.com/users?jobPosition="+this.jobPosition)
      .then((data)=>{
        console.log(data.data.results);
        this.employee_list = data.data.results
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  watch:{
    
  },
  mounted() {
    axios
      .get("https://testing-api-mock.herokuapp.com/users")
      .then((res) => {
        console.log(res.data.results);
        return res.data.results;
      })
      .then((data) => {
        this.employee_list = data;
      });
  },
};
</script>

<style>
.circle {
  border-radius: 50%;
}
</style>