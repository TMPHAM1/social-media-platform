<template>
  <div class="p-3 border-b hover:bg-gray-100 dark:hover:bg-dim-300 dark:text-white  cursor-pointer"
  :class="wrapperClass">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
    const wrapperClass = computed(() => `${defaultTransition}`);
    const {defaultTransition, twitterBorderColor} = useTailwindConfig();
</script>

<style>

</style>