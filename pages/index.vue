<template>
  <v-layout row>
    <v-flex
      fill-height
      d-flex
    >
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
          :type="'date'"
        />
        <v-card-actions>
          <v-btn
            color="deep-orange lighten-1"
            @click="addUser"
          >
            save
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
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-flex>
  </v-layout>
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
    }

  },
  methods: {

    addUser (event) {
      if (this.$store.state.currentUserName) {
        this.$store.commit('addUser')
        if (this.$store.getters.users.length === 1) {
          this.$store.dispatch('startTimer')
        }
      }
      event.preventDefault()
    }

  }
}
</script>
