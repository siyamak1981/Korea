<template>
  <div class="app-wrapper bg-success">
    <div class="app-content pt-3 p-md-3 p-lg-4 mt-5">
      <div class="container-xl">
        <span class="app-profile-title">My Profile</span>
        <div class="row gy-4 mt-3">
          <div class="col-12">
            <div class="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
              <div class="app-card-header p-3 border-bottom-0">
                <div class="row align-items-center gx-3">
                  <div class="col-auto">
                    <h4 class="app-card-title">Profile</h4>
                  </div>
                </div>
              </div>

              <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-12">
                      <div class="item-label">
                        <strong>Name</strong>
                      </div>
                      <input
                        type="text"
                        v-model="userDetails.name"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-12">
                      <div class="item-label">
                        <strong>Email</strong>
                      </div>
                      <div v-for ="userDetail in userDetails" :key="userDetail.id">{{userDetail.email}}
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-12">
                      <div class="item-label">
                        <strong>Publish</strong>
                      </div>
                      <input
                        type="date"
                        v-model="userDetails.created_at"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-12">
                      <div class="item-label">
                        <strong>New Password</strong>
                      </div>
                      <input
                        type="password"
                        v-model="userDetails.password"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="app-card-body px-4 w-100">
                <div class="item border-bottom py-3">
                  <div class="row justify-content-between align-items-center">
                    <div class="col-12">
                      <div class="item-label">
                        <strong>Biografy</strong>
                      </div>
                      <textarea name="message" id cols="10" rows="30" class="form-control"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="app-card-footer p-4 mt-auto">
                <a
                  href="#"
                  class="btn app-btn-secondary"
                  @click.prevent="changeDetails"
                >Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

   <script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Edit",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      userDetails: "user/userDetails",
    }),

    // ...mapActions({
    //   updateProfile: "user/updateProfile",
    // }),
  },

  methods: {
    changeDetails() {
      axios
        .post(
          `/api/profile/update`,
          this.userDetails
        )
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Profile is Updated Successfully !",
          });
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
.app-profile-title {
  color: rgb(0, 0, 0);
  font-size: 1.25rem;
  font-weight: 600;
  vertical-align: middle;
}
</style>










