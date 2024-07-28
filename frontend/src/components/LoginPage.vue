<template>
    <div class="container">
        <div class="login-page">
            <p class="logo">County<span>Projects</span></p>
            <div class="form">
                <h1>Welcome Back!</h1>
                <p>Please enter your details</p>
                <div v-if="response"> welcome sa</div>
                <form >
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="formData.username" placeholder="username" required>
                    <label for="password">Password:</label>
                    <input @click="showResponse=false" type="password" id="password" placeholder="password" v-model="formData.password" required>
                    <button type="submit" @click.prevent="login">Login</button>
                </form>
                <p class="response" v-if="showResponse"> {{ response }}</p>
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
const showResponse = ref(false);
const response = ref(null);
let urlEncodedData = '';
const login = async () => {
    try {
        urlEncodedData = new URLSearchParams(formData.value).toString();
        const res = await axios.post('http://localhost:3000/api/login', urlEncodedData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
        if ((res).status === 200)
        {
            localStorage.setItem('jwt', res.data.jwt);
            console.log((res).data);
            router.push('/');

        }
    } catch (error) {
        response.value = 'Invalid username or password';
        showResponse.value = true;
        setTimeout(() => {
          showResponse.value = false;
         }, 3000);
        console.log(error);
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
                color: #2e7a4d;;
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
                    border: 1px solid #2e7a4d;;
                    border-radius: 0.5rem;
                }
                button {
                    padding: 0.5rem;
                    margin-top: 1rem;
                    background-color: #2e7a4d;;
                    color: #ffff;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }
            }
        }
        
    }
    p.response {
        font-size: 1rem;
        color: red;
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
                background-color: #2e7a4d;;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        }
    }
}
</style>
