<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">{{ time }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      time: Date.now()
    }
  },
  methods: {
    getDate() {}
  },
  created() {}
}
</script>
