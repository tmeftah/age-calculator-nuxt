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
            <nuxt />
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

}
</script>
