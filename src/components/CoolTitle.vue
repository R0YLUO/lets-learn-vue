<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'CoolTitle', 
  props: {
    title: String
  }
}
</script>

<style>
  h1 {
    color: blueviolet;
  }
</style>