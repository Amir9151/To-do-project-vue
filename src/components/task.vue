<template>
  <div class="task">
    <div class="header">{{ header }}</div>
    
    <div class="item" v-for="task in allTasks" :key="task.id">
      <taskitem :taskitem="task" />
    </div>
  </div>
</template>

<script>
import taskitem from "./taskitem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "task",
  computed: {
    ...mapGetters(["allTasks"]),
  },
  methods: {
    ...mapActions(["fetchTask"]),
  },

  components: {
    taskitem,
  },
  props: ["header"],

  created() {
    this.fetchTask();
  },
};
</script>




<style  scoped>
.task {
  width: 330px;
  background-color: rgb(152, 204, 201);
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: rgb(48, 3, 5);
  padding: 10px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header {
  font-weight: bold;
  font-size: 25px;
  color: rgb(19, 17, 19);
  background-color: rgb(160, 203, 223);
  margin-top: 10px;
}
</style>

