<template>
  <div class="ofp-calculator-row">
    <h3 class="ofp-calculator-row__title mt-3">{{ title }}</h3>
    <div class="ofp-calculator-radio-group">
      <RadioButton
        v-for="val in dataButtons"
        type="radio"
        :name="name"
        :aria-label="val"
        :value="val"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String
    },
    name: {
      type: String
    },
    dataButtons: {
      type: Array
    }
  })
</script>

<style>

</style>