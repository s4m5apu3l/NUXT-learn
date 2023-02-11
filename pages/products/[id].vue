<template>
  <div>
    <p>Product detail for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quam et
      distinctio hic, fuga dicta deserunt odio illum repellat atque non sint
      quaerat officiis mollitia excepturi, architecto quo, assumenda rerum?
    </p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  definePageMeta({
    layout: "products",
  });
</script>

<style lang="scss" scoped>
</style>