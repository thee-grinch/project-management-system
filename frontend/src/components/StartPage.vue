<template>
    <div class="start-page">
        <h1>Welcome to the Project Management System</h1>
        <p>Please enter your login credentials:</p>
        <div class="login-form">
            <label for="username">Username:</label>
            <p>{{ username }}</p>
            <label for="password">Password:</label>
            <p>{{ password }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    mounted() {
        // Fetch login credentials from the database and update the data properties
        // Example:
        // fetchLoginCredentials().then(credentials => {
        //   this.username = credentials.username;
        //   this.password = credentials.password;
        // });
    }
};
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
</template>