<template>
    <div v-if="!alreadyLoggedIn" class="start-page">
        <h1>Welcome to the Project Management System</h1>
        <p>Please enter your login credentials:</p>
        <div class="login-form">
            <label for="username">Username:</label>
            <p>{{ username }}</p>
            <label for="password">Password:</label>
            <p>{{ password }}</p>
        </div>
    </div>
    <div v-else>
        <h1>Welcome to the Project Management System</h1>
        <p>You are already logged in.</p>
        <p>Enter details provided during start up. Thanks</p>
        <p>If you think this is a mistake contack the system administrator</p>
        <p>&COPY; {{ currentYear }}</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onBeforeMount } from 'vue';
const currentYear = new Date().getFullYear();
const username = ref('');
const password = ref('');

const alreadyLoggedIn = ref(false);

const login = async() => {
    console.log('login');
    try {
        const res = await axios.get('/api/start');
        username.value = res.data.username;
        password.value = res.data.password;
        console.log(res);
    }
    catch (error) {
        alreadyLoggedIn.value = true;
        console.log(error);
        console.log('Already logged in');
        
    }
}
onBeforeMount(() => {
    login();
});
</script>

<style scoped>
.start-page {
    text-align: center;
    margin-top: 100px;
}

.login-form {
    display: inline-block;
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

p {
    margin-bottom: 10px;
}
</style>