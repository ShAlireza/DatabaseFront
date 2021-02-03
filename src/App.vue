<template>
 <div>
 <div class="header">
   <h1 class="header_title">Welcome to DB!</h1>
   <v-btn><router-link to="/customer" class="header_link">customer</router-link></v-btn>
   <v-btn><router-link to="/restaurant" class="header_link">restaurant</router-link></v-btn>
   <v-btn><router-link to="/delivery" class="header_link">delivery</router-link></v-btn>
   <v-btn><router-link to="/Admin" class="header_link">Admin</router-link></v-btn>
 </div>
 <router-view></router-view>
 </div>
</template>

<script>
export default {
};
</script>
<style scoped>
.header{
  background-color: aquamarine;
  width: 100%;
  text-align: center;
  padding: 15px;
}
.header_title{
  margin-top:0;
}
.header_link{
  text-decoration: none;
}
</style>