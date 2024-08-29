<template>
    <input :type="props.type" :name="props.name" :id="props.id" :placeholder="props.placeholder" class="input input-bordered" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
}>()
</script>

<style></style>
