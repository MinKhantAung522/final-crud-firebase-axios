<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-md">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col">Functions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employee_list" :key="employee.id">
            <th>{{ employee.id }}</th>
            <td>{{ employee.fullname }}</td>
            <td>{{ employee.age }}</td>
            <td>{{ employee.phoneNo }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.jobPosition }}</td>
            <td>
              <span class="pointer me-3" @click="edit(employee)">
                <i class="fas fs-4 text-success fa-user-edit" title="edit"></i
              ></span>
              <span class="pointer me-3"
                ><i class="fas fs-4 text-primary fa-eye" title="view"></i
              ></span>
              <span class="pointer me-3" @click="Remove(employee.id)">
                <i class="fas fs-4 text-danger fa-user-slash" title="delete"></i
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["employee_list"],
   methods: {
    edit(emp) {
      this.$router.push("/edit/" + emp.id);
    },
    Remove(id){
      axios.delete("https://testing-api-mock.herokuapp.com/users/"+id)
      .then(()=>{
        this.$emit("delete",id);
      })
      .catch((err)=>{
        console.log(err.message);
      })
    }
   }
};
</script>

<style>
.pointer{
    cursor: pointer;
}
</style>