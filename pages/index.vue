<template>
  <v-layout column justify-center align-center>
    <v-card class="mx-auto mt-12">
      <v-card-title>How old i'am?</v-card-title>
      <v-card-text>
        <v-text-field label="please give your name" />
      </v-card-text>
      <v-date-picker
        v-model="picker"
        color="deep-orange accent-2"
        :landscape="true"
        :type="'date'"
      />
      <v-card-actions>
        <v-btn color="deep-orange lighten-1">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10)

    }
  }
}
</script>
