<template>
  <div>
    <button class="" @click="props.clickFunc ? props.clickFunc : null" :value="props.label">
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Button",
    
    props: {
        label: {
            type: String,
            required: true,
        },
        clickFunc: {
            type: Function,
        }
    },

    setup() {
        
    }
})
</script>

<style>

</style>