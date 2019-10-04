
export const state = () => ({
  birthday: new Date().toISOString().substr(0, 10),
  currentUserName: '',
  list: [],
  timer: null
})

export const mutations = {
  setBirthday (state, birthday) {
    state.birthday = birthday
  },
  setUserName (state, username) {
    state.currentUserName = username
  },

  addUser (state) {
    state.list.push({
      username: state.currentUserName,
      birthday: state.birthday,
      age: {
        years: 0,
        months: 0,
        days: 0
      }
    })
  },

  removeUser (state, user) {
    state.list.splice(user, 1)
  },

  updateAge (state) {
    state.list.forEach((element) => {
      const birthday = this.$moment(element.birthday)
      const years = this.$moment().diff(birthday, 'years')
      birthday.add(years, 'years')
      const months = this.$moment().diff(birthday, 'months')
      birthday.add(months, 'months')
      const days = this.$moment().diff(birthday, 'days')

      element.age = {
        years,
        months,
        days
      }
    })
  }
}

export const actions = {
  startTimer ({ commit }) {
    setInterval(() => commit('updateAge'), 1000)
  }
}

export const getters = {
  users: (state) => { return state.list }
}
