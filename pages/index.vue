<template>
  <div class="text-center fill-height d-flex flex-column justify-center align-center">
    <div><logo class="TranqilizerLogo" /></div>
    <div>
      <h1 class="display-1 tr_name">
        tranquilizer
      </h1>
      <div class="headline tr_headline">
        Another look at the todo-app
      </div>
    </div>
    <div class="mt-3">
      <v-btn href="https://github.com/" outlined>
        Documentation
      </v-btn>
      <v-btn href="https://github.com/" outlined>
        GitHub
      </v-btn>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.TranqilizerLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
