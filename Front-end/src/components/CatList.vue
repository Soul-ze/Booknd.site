<template>
  <div id="cat-list">
    <div id="cat-group">
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
    </div>
  </div>
</template>

<script>
import Cat from '@/components/Cat'
export default {
  name: 'CatList',
  components: {
    'cat' : Cat
  }
}
</script>

<style>
#cat-group {
  height: max-content;
  width: 896px;
  margin: 0 auto;
}
</style>
