<template>
  <div>
    <v-row align="center" justify="center" >
      <v-col cols="12" sm="6" md="4">
        <v-card style="text-align: center">
          <v-card-title>{{ custom.name }}</v-card-title>
          <div v-for="(label, i) in custom.labels" :key="i">
            <v-text-field
            :label="label.name"
            outlined
            dense
            v-model="label.value"
          ></v-text-field>
          </div>
          <v-btn @click.prevent="submitB" style="margin-bottom:7px">submit</v-btn>
        </v-card>
      </v-col>
    </v-row>
<br>
    <div class="response-box">
      <h3>response:</h3>
    </div>
  </div>
</template>
<script>
import { customers, restaurants, delivery } from "../assets/customer";
import axios from 'axios';
export default {
  props: [],
  data() {
    const path = this.$route.path;
    const id = this.$route.params.id;
    if (path.includes("coustomers")) {
      return {
        custom: customers[id],
      };
    } else if (path.includes("restaurant")) {
      return {
        custom: restaurants[id],
      };
    } else if (path.includes("delivery")) {
      return {
        custom: delivery[id],
      };
    }
    return {
      custom: customers[id],
    };
  },
  methods: {
    submitB() {
      const value = this.custom.labels;
      console.log(value);
      // this.custom.labels.map((value)=>{
      //   value.value='';
      // })
    },
  },
  created() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
.response-box {
  height: 10vw;
  background-color: aquamarine;
}
</style>