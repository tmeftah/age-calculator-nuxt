<template>
  <v-app id="inspire">
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
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-orange accent-3"
                dark
                flat
              >
                <v-toolbar-title>How old am I?</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-text-field
                  v-model="setUsername"
                  label="please give your name"
                  type="text"
                  solo
                />
              </v-card-text>
              <v-date-picker
                v-model="birthday"
                color="deep-orange accent-1"
                full-width
                :max="new Date().toISOString().substr(0, 10)"
                :type="'date'"
                :locale="getLocale"
              />
              <v-card-actions>
                <div class="flex-grow-1" />
                <v-btn
                  color="green dark-1"
                  small
                  fab
                  @click="addUser"
                >
                  <v-icon>mdi-content-save</v-icon>
                </v-btn>
              </v-card-actions>
              <hr>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Name
                      </th>
                      <th class="text-left">
                        Birthday
                      </th>
                      <th class="text-left">
                        Age
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in getUsers"
                      :key="item.name"
                    >
                      <td>{{ item.username }}</td>
                      <td>{{ item.birthday }}</td>
                      <td>{{ item.age.years }} year(s) , {{ item.age.months }} month(s), {{ item.age.days }} day(s)</td>
                      <td>
                        <v-btn
                          color="red"
                          x-small
                          fab
                          @click="removeUser(item)"
                        >
                          <v-icon>mdi-delete</v-icon>
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
    },
    getLocale () {
      return this.$store.getters.locale
    }

  },
  // beforeMount () {
  //   this.$store.dispatch('setlang', navigator.language)
  // },

  methods: {

    addUser (event) {
      if (this.$store.state.currentUserName) {
        this.$store.commit('addUser')
        if (this.$store.getters.users.length === 1) {
          this.$store.dispatch('startTimer')
        }
      }
      event.preventDefault()
    },
    removeUser (user) {
      this.$store.commit('removeUser', user)
    }

  }
}
</script>
