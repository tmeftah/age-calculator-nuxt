<template>
  <v-layout row>
    <v-flex fill-height d-flex>
      <v-card>
        <v-card-title>How old am I?</v-card-title>
        <v-card-text>
          <v-text-field label="please give your name" />
        </v-card-text>
        <v-date-picker
          v-model="picker"
          color="deep-orange accent-2"
          full-width
          :type="'date'"
        />
        <v-card-actions>
          <v-btn
            color="deep-orange lighten-1"
          >
            save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
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
