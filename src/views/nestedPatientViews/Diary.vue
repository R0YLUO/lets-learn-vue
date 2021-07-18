<template>
  <div>
    <CoolTitle :title="title" />
  </div>
</template>

<script>
import CoolTitle from '../../components/CoolTitle.vue'

export default {
  name: 'Diary', 
  components: {
    CoolTitle, 
  }, 
  data() {
    return { 
      title: 'Diary'
    }
  }
}
</script>

<style>

</style>