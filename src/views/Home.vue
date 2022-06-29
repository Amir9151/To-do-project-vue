<template>
  <div id="app">
    <h1 id="h">WEB DEVELOPER</h1>
    <nav>
      <router-link to="/about">About page</router-link>
    </nav>
    <addtask></addtask>
        <filter-task></filter-task>


    <task :header="header"> </task>
  </div>
</template>

<script>

import task from "./../components/task.vue";
import addtask from "./../components/addtask.vue";
import filterTask from "./../components/filter.vue";
export default {
  name: "home",
  components: {
    task,
    addtask,filterTask
  },
  data() {
    return {
      header: "requirment works",
      todo: [],
    };
  },
  methods: {
   
  },
  
};
</script>





<style>
a {
  font-size: 30px;
  color: rgb(17, 16, 16);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 10px;
  background-color: aquamarine;
  opacity: 0.5;
  padding: 6px;
  border-radius: 4px;
}
a:hover {
  opacity: 0.8;
}
</style>
