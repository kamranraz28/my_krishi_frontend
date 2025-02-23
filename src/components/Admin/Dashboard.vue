<template>
  <NavBar />
  <AdminHeader />
  <div class="pcoded-main-container">
    <div class="pcoded-content">
      <h2>Dashboard</h2>
      <p v-if="user">Welcome, {{ user.email }}</p>
      <p v-else class="error">User data not found. Please login again.</p>
      <button @click="logout">Logout</button>

      <div class="page-header">
        <div class="page-block">
          <div class="row align-items-center">
            <div class="col-md-12">
              <div class="page-header-title">
                <h5 class="m-b-10">Dashboard Analytics</h5>
              </div>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html"><i class="feather icon-home"></i></a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#!">Dashboard Analytics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/CommonSection/AdminHeader.vue";
import NavBar from "@/components/CommonSection/AdminNavbar.vue";
import loadAssets from "@/utils/loadAssets";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    NavBar,
    AdminHeader,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    loadAssets.load();
    this.fetchUserData();
  },
  beforeUnmount() {
    loadAssets.unload();
  },
  methods: {
    async fetchUserData() {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");
      if (!token) {
        this.$router.push("/log-in");
      }

      const response = await axios.get("http://127.0.0.1:8000/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.user = response.data;
    },
  },
};
</script>


<style>
.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
