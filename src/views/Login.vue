<template>
  <v-app>
    <v-container>
      <v-layout  wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                  DCAE Portal
                </h3>
                <v-flex>
                  <!-- <v-img alt="DCAE Portal" class="ml-3" contain height="48px" position="center right" src="@/assets/images/logo_ani1-1.gif"></v-img> -->
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-text-field 
                              prepend-icon="mdi-account" 
                              outline
                              label="Username"
                              type="text"
                              v-model="username"></v-text-field>
                <v-text-field
                              prepend-icon="mdi-lock"
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="password"></v-text-field>
                               <!-- <v-text-field prepend-icon="mdi-account" name="Username" label="Username"></v-text-field> -->
            <!-- <v-text-field prepend-icon="mdi-lock" name="Password" label="Password" type="password"></v-text-field> -->
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <!-- <v-btn color="info" flat>
                Forgot password?
              </v-btn> -->
              <v-spacer></v-spacer>
              <v-btn @click="userLogin();" color="info" :large="$vuetify.breakpoint.smAndUp">
                <v-icon left>mdi-lock</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
       <snack-bar :snackbar="snackbar_show" :text="snackbar_text" :color="snackbar_color"></snack-bar>
     <!-- <v-snackbar
        :timeout="snackbar_timeout"
        :top="snackbar_y === 'top'"
        :bottom="snackbar_y === 'bottom'"
        :right="snackbar_x === 'right'"
        :left="snackbar_x === 'left'"
        :multi-line="snackbar_mode === 'multi-line'"
        :vertical="snackbar_mode === 'vertical'"
        :color="snackbar_color" 
        v-model="snackbar_show"
      >
        {{ snackbar_text }}
        <v-btn dark text @click.native="snackbar_show = false">Close</v-btn>
      </v-snackbar> -->
    </v-container>
  </v-app>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';
  import axios from 'axios';

  export default {
    data () {
      return {          
        password: null,
        username: null,
        loading: true,
        errored: false,
        snackbar_show: false,
        snackbar_text :  '',
        snackbar_y: 'top',
        snackbar_x: 'right',
        snackbar_mode: '',
        snackbar_timeout: 6000,
        snackbar_color : "success"
      }
    },
    computed: {
        ...mapState(['user'])
    },
    methods : {
      ...mapMutations({
        setUser: 'setUser'
      }),
      userLogin(){
        let params = {
            "email": this.username,
            "password": this.password,
        }
        axios
          .post('https://reqres.in/api/login',params)
          .then(response => {
            this.snackbar_show = true;
            this.snackbar_color = "success";
            this.snackbar_text = "Logged in successfully.";
            let user = {
              "email" : params.email,
              "token"  : response.data.token
            }
            this.setUser(user);
            setTimeout(() => this.$router.push('dashboard'), 2000);            
          })
          .catch(error => {         
            // let er = JSON.parse(error);
            // console.log(er)
            this.snackbar_show = true;
            this.snackbar_color = "error";
            this.snackbar_text = error;
            this.errored = true
          })
          .finally(() => this.loading = false)  
      }
    },
    components: {
        SnackBar: () => import('../components/SnackBar'),
    }
  }
</script>