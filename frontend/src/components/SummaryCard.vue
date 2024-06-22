<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    index: {
        type: Number,
    }
});
const index = props.index;
const colors = ['green', 'blue', 'orange']

</script>
<template>
<div class="holder">
    <i :class="props.icon" ></i>
    <p>{{ props.name }}</p>
    <p>{{ props.total }}</p>

</div>
</template>
<style scoped lang="scss">
.holder {
    width: 200px;
    height: px;
    background: white;
    i {
        font-size: 2rem;
        padding: 15px;
        color: #334eac
    }
}
</style>
