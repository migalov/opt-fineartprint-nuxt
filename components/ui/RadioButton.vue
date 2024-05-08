<template>
  <input
    class="ofp-radio-button"
    type="radio"
    :aria-value="value"
    :name="name"
    :id="id"
    :value="value"
    :checked="checked"
    :disabled="disabled"
  />
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    }
  })

  // const handleClick = (event) => {
  //   defineEmits('update:checkedValue', event.target.checkedValue)
  // }
</script>

<style>
  .ofp-radio-button {
    display: inline-flex;
    align-items: center;
    appearance: none;
    border-radius: 8px;
    background-color: var(--gray-color);
    border: 2px solid transparent;
    height: 2.5em;
    padding: 0 1.5em;
    &::after {
      content: attr(aria-label);
    }
    &:hover {
      background-color: var(--gray-color);
      border: 2px solid var(--primary-color);
    }
    &:checked {
      background-color: var(--white-color);
      border: 2px solid var(--primary-color);
    }
    
  }
</style>