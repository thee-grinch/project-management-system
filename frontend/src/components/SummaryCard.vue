<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        // required: true
    },
    total: {
        type: Number,
        // required: true
    }
});
const index = props.index;
console.log(index);
const colors = ['green', 'blue', 'orange']
// const names = ['Done', 'In Progress', 'To Do']
const icons = {
    Done: 'fas fa-check',
    "In Progress": 'fas fa-spinner',
    "To Do": 'fas fa-times'
};

</script>
<template>
<div class="holder">
    <i :class="icons[props.name]" ></i>
    <p class="name">{{ props.name }}</p>
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
        color: #228b22
    }
    .name {
        font-weight: bold;
    }
}
</style>
