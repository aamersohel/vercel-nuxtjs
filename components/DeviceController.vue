<script setup lang="ts">
const props = defineProps<{
  name: string;
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="form-check form-switch">
    <input
      v-model="computedValue"
      class="form-check-input"
      type="checkbox"
      role="switch"
    />
    <label class="form-check-label">{{ name }}</label>
  </div>
</template>
