<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default
{
  name: "App",
}

</script>

<style>
body {
  font-size: 20px;
  direction: rtl;
  margin: 0px;
  color: rgb(255, 255, 255);
  background: url("./assets/2147270332-origin.jpg");
  background-size: cover;
}

#h {
  font-size: 25px;
  margin: 15px;
}

.btn {
  border: none;
  cursor: pointer;
  background: rgb(102, 100, 100);
  color: white;
}
</style>

