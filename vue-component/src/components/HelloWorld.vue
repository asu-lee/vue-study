<template>
  <div class="hello">
    <base-input label='姓  名' v-model='name' @blur="blur"></base-input>
    <base-input label='密  码' v-model='password' @blur="blur"></base-input>
  </div>
</template>

<script scoped>
require("./asu-ui.js");
export default {
  name: "hello",
  data() {
    return {
      name: "",
      password:""
    };
  },
  methods: {
    blur() {
      console.log(this.msg)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
