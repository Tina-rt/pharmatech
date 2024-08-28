<template>
    <div class="status" :class="{'status-0': props.status.status == 0}">{{ props.status.label }}</div>
</template>

<script lang="ts" setup>
import type { Status } from "@/types/status.model";

const props = defineProps<{
    status: Status;
}>();
</script>

<style scoped lang="scss">
.status{
  padding: 0.5rem;
  min-width: 130px;
  width: 130px;
  max-height: fit-content;
  height: fit-content;
  display: grid;
  place-items: center;
  border-radius: 0.4rem;
}

.status-0{
    color: #C03D05;
    background: #FFB570;
}

</style>
