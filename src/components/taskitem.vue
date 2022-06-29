<template>
  <div class="item" :class="{ 'is-completed': taskitem.completed }">
    <input type="checkbox" :checked="taskitem.completed" @change="change(taskitem)" />
    {{ taskitem.title | subtract }}

    <button class="del" @click="deletetasks(taskitem.id)">x</button>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "taskItem",
  props: ["taskitem"],
  methods: {
   
    deletetasks(id){
      this.$store.dispatch("deleteTask",id)
    },

    ...mapActions(["edit"]),
    change(taskitem) {
      const edittask={id:taskitem.id,title:taskitem.title,completed:!taskitem.completed};
      this.edit(edittask)
    },
  },
  filters: {
    subtract(txt) {
      return txt.substr(0, 10);
    },
  },
};
</script>

<style scoped>
.item {
  width: 200px;
  padding: 5px;
  margin: 10px 0px;
  font-size: 20px;
  background-color: rgba(163, 235, 49, 0.452);
  box-shadow: -1px 1px 1px rgba(21, 22, 19, 0.452);
  color: black;
}
.is-completed {
  text-decoration: line-through;
  opacity: 0.6;
}
.del {
  background: none;
  color: red;
  float: left;
  border: none;
  cursor: pointer;
  font-size: 1em;
  opacity: 0;
}

.item:hover .del {
  opacity: 1;
}
</style>