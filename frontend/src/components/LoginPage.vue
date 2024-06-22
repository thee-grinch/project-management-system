<template>
    <div class="container">
        <div class="login-page">
            <p class="logo">Civic<span>Planner</span></p>
            <div class="form">
                <h1>Welcome Back!</h1>
                <p>Please enter your details</p>
                <div v-if="response"> welcome sa</div>
                <form >
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="formData.username" placeholder="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="password" v-model="formData.password" required>
                    <button type="submit" @click.prevent="login">Login</button>
                </form>
            </div>
        </div>
        <div class="image-holder">
            <div class="image"></div>

        </div>
    </div>
</template>
<script setup>
/* eslint-disable */
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const formData = ref({
    username: '',
    password: ''
})
let response = ref(null);
let urlEncodedData = '';
const login = async () => {
    try {
        urlEncodedData = new URLSearchParams(formData.value).toString();
        const res = axios.post('http://127.0.0.1:3000/api/login', urlEncodedData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
        // if ((await res).status === 200)
                // router.push('/');
    } catch (error) {
        console.error(error);
    }
}
        
</script>
<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    height: 80vh;
    margin: auto;
    margin-top: 2rem;
    background-color: #ffff;
    border-radius: 1rem;

    .login-page {
        .logo {
            font-size: 1.25rem;
            font-weight: bold;
            text-align: left;
            padding: 0;
            margin-left: 5px;
            span {
                color: #334eac;
            }
        }
        .form {
            display: flex;
            flex-direction: column;
            justify-content: center; // Add this line
            align-items: center;
            padding: 1rem;
            margin-top: 5rem;
            h1 {
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0;
            }
            p {
                font-size: 1rem;
                margin: 0;
            }
            form {
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
                label {
                    font-size: 1rem;
                    margin-top: 1rem;
                    text-align: left;
                }
                input {
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    border: 1px solid #334eac;
                    border-radius: 0.5rem;
                }
                button {
                    padding: 0.5rem;
                    margin-top: 1rem;
                    background-color: #334eac;
                    color: #ffff;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }
            }
        }
        
    }
    .image-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;

            .image {
                border-radius: 50%;
                width: 200px;
                height: 200px;
                background-color: #334eac;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        }
    }
}
</style>
