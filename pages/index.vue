<template>
  <v-app v-show="show">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card>
              <v-card-text>
                <v-text-field
                  v-model="setUsername"
                  label="please give your name"
                  type="text"
                />
              </v-card-text>
              <v-date-picker
                v-model="birthday"
                full-width
                :max="new Date().toISOString().substr(0, 10)"
                :type="'date'"
                :locale="lang"
              />
              <v-card-actions>
                <v-btn
                  color="success"
                  @click="addUser"
                >
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>
              </v-card-actions>

              <v-simple-table
                fixed-header
                height="150px"
                class="mt-4"
              >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in getUsers"
                      :key="item.name"
                    >
                      <td>
                        {{ item.username }}: {{ $moment(item.birthday).format('d/MM/YYYY') }}<br>

                        <small>{{ item.age.years }} year(s) , {{ item.age.months }} month(s), {{ item.age.days }} day(s)</small>
                      </td>
                      <td>
                        <v-btn
                          color="error"
                          x-small
                          @click="removeUser(item)"
                        >
                          <v-icon small>
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019 Tarek Meftah</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {

  data () {
    return {
      show: false,
      lang: detectAgent()
    }
  },

  computed: {
    birthday: {
      get () { return this.$store.state.birthday },
      set (newValue) { this.$store.commit('setBirthday', newValue) }
    },
    setUsername: {
      get () { return this.$store.state.currentUserName },
      set (newValue) {
        this.$store.commit('setUserName', newValue)
      }

    },
    getUsers () {
      return this.$store.getters.users
    }

  },
  created () {
    if (process.browser) {
      this.show = true
    }
    this.$store.dispatch('startTimer')
  },

  methods: {

    addUser (event) {
      if (this.$store.state.currentUserName) {
        this.$store.commit('addUser')
      }
      event.preventDefault()
    },
    removeUser (user) {
      this.$store.commit('removeUser', user)
    }

  }
}
function detectAgent () {
  if (process.client) {
    return navigator.language
  }
}

</script>
