<template>
    <div class="hold">
        <p>{{ props.message }}</p>
    </div>
    <p class="bottom"></p>
</template>
<script setup>

const props = defineProps({
    message: {
        required: true
    }
})

</script>
<style scoped lang="scss">
@keyframes border {
    0% {
        width: 100%;
    }
    100% {
        width: 0;
    }
}

.hold {
    background-color: #2e7a4d;
    border-radius: 10px;
    font-weight: bold;
    border-bottom: 3px solid;
    padding: 0 20px;
    transition: border-bottom-width 1s;
    color: white;
    animation: fade-in 1s;
    margin: 0;
    display: flex;
    align-items: center;
}
.bottom {
    background-color:  rgb(238, 197, 15);
    height: 3px;
    margin: 0;
    animation: border 2.5s forwards;
}
.hold:hover {
    border-bottom-width: 0;
}
</style>