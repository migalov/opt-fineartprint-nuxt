<template>
  <div>
    <code>
      {{ paramsCalculator }}
    </code>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
const paramsCalculator = ref([]);
/**/
onMounted(async () => {
  try {
    const data = axios.get(`http://localhost:1337/api/calculators/1?populate[tabs][fields][0]=name&populate[tabs][fields][1]=slug&populate[tabs][populate][buttons]=*`);
    console.log(data);
    
    paramsCalculator.value = data;
  }
  catch (err) {
    console.log(err);
  }
  
})
</script>

<style>

</style>