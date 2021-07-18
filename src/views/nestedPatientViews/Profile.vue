<template>
  <div>
    <CoolTitle :title="title" />
  </div>
</template>

<script>
import CoolTitle from '../../components/CoolTitle.vue' 
export default {
  name: 'Profile', 
  components: {
    CoolTitle
  }, 
  data() {
    return {
      title: 'Profile'
    }
  }
}
</script>

<style>

</style>