<template>
  <div class="top">
    <p><router-link to="/todo">みんなのToDoを覗いてみる</router-link></p>
    <div v-if="loginFlag">
      <p><router-link to="/mypage">マイページへ</router-link></p>
    </div>
    <div v-else>
      <p><router-link to="/login">login</router-link></p>
      <p><router-link to="/register">register</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import goapi from "goAPI";

export default {
  name: "Top",
  data() {
    return {
      loginFlag: "",
    };
  },
  mounted: function () {
    axios
      .get(goapi.apiUrl + "/adminflag", { withCredentials: true })
      .then((res) => {
        this.loginFlag = res.data.LoginFlag;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  padding-top: 100px;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
