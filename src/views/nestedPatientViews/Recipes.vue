<template>
  <CoolTitle :title="title" />
</template>

<script>
import CoolTitle from '../../components/CoolTitle.vue'

export default {
  name: 'Recipes', 
  components: {
    CoolTitle
  }, 
  data() {
    return {
      title: "Recipes"
    }
  }
}
</script>

<style>

</style>