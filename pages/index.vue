<template>
  <v-row>
    <v-col
      sm="8"
      offset-sm="2"
      md="6"
      offset-md="3"
    >
      <v-flex fill-height>
        <v-card>
          <v-card-title>How old am I?</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="setUsername"
              label="please give your name"
            />
          </v-card-text>
          <v-date-picker
            v-model="birthday"
            color="deep-orange accent-2"
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
      </v-flex>
    </v-col>
  </v-row>
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
