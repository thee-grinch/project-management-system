<template>
    <div class="form-container">
        <form @submit="" class="animated-form">
            <div v-if="currentStep === 1" class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="username" @keyup.enter="nextStep" required>
            </div>
            <div v-if="currentStep === 2" class="form-group">
                <label for="Password">Password:</label>
                <input type="text" id="Password" v-model="password" @keyup.enter="nextStep" required>
            </div>
           
            <div v-if="currentStep === 3" class="form-group">
                <label>Role:</label>
                <div>
                    <input type="radio" id="status-done" value="admin" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-done">Admin</label>
                </div>
                <div>
                    <input type="radio" id="status-todo" value="clerk" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-todo">Clerk</label>
                </div>
                <div>
                    <input type="radio" id="status-inprogress" value="viewer" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-inprogress">Viewer</label>
                </div>
            </div>
            <div class="button-group">
                <button type="button" @click="previousStep" :disabled="currentStep === 1">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <button type="button" @click="nextStep" :disabled="currentStep === totalSteps">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="progress-bar">
                <p>{{ currentStep }} / {{ totalSteps }}</p>
            </div>
          
            <button class="submit" @click.prevent="submitForm()" :disabled="currentStep !== 3" type="submit">Submit</button>
            <!-- Your form fields here -->
        </form>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const emit = defineEmits(['formSubmitted', 'formFailed'])

let currentStep = ref(1);
let totalSteps = ref(3);
let username = '';
let password = '';
let status = ref('');

const nextStep = () => {
    if (currentStep.value < totalSteps.value) {
        currentStep.value++;
    }
};


const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};


const submitForm = () => {
    console.log('Submitting form');
    const token = localStorage.getItem('jwt');
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const data = {
        username,
        password,
        role: status.value
    };
    // return console.log(data);
    if (username === '' || password === '' || status === '') {
        emit('formFailed', 'Please fill all fields');
    } else if(username.length < 4 || password.length < 4) {
        emit('formFailed', 'Username and password must be atleast 4 characters');
    }
    axios.post('/api/add-user', data, { headers })
        .then(response => {
            console.log(response.data);
             emit('formSubmitted', "User Added succesfully!");

        })
        .catch(error => {
           
            emit('formFailed', 'An error occured');
            // Handle error response here
        });
};

</script>


<style lang="scss">
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 350px;
    
    
    
    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        label {
            color: #fff;
            // font-weight: bold;
            font-size: 2rem;
            margin-bottom: 5px;
        }
        .status-label {
            color: black;
            font-size: 1rem;
        }
        input, textarea {
            padding: 10px;
            border-radius: 5px;
            border: none;
            margin-bottom: 10px;
        }
        input[type="radio"] {
            margin-right: 5px;
        }
    margin-bottom: 20px;
    animation: slideIn 0.5s ease-in-out;
    }  
}

.animated-form {
    animation: slideIn 0.5s ease-in-out;
}


.progress-bar {
    p {
        text-align: center;
        color: white;
    }

}
.button-group {
    width: 70px;
    display: flex;
    justify-content: space-evenly;
    margin: auto;

    button {
        border: none;
    }
}
.submit {
    padding: 10px 20px;
    background-color: #334eac;
    color: white;
    font-weight: bold;
    border-radius: 10px;
}
</style>
