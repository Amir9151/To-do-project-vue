<template>
  <div>
    <div class="add-item">Add New Task</div>
    <div>
      <form @submit.prevent="add">
        <input type="text" v-model="title" name="title" />
        <input type="submit" value="submit" class="btn" />
      </form>
    </div>
  </div>
</template>

<script>
//import {uuid} from "vue-uuid"
import {mapActions} from "vuex"
export default {
  name: "addtask",
  data() {
    return {
      title: "",
    };
  },

  methods: {
    ...mapActions(["addTask"]),
    add() {
     this.addTask(this.title)
      this.title = "";
    },
  
  },
};
</script>

<style scoped>

.add-item {
  padding: 10px;
  font-weight: bolder;
  color: white;
  background-color: rgb(3, 31, 21);
  display: inline-block;
  border-radius: 8px;;
}
.add-item::before {
  content: "+";
  padding: 0 5px;
  font-weight: bolder;
  color:white;;
}

input {
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 8px;
  width: 5%;
  font-size: 15px;
  
}
input[type="text"] {
  width:17%;
}


</style>