<template>
    <div class="form-container">
        <form @submit="submitForm" class="animated-form">
            <div v-if="currentStep === 1" class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" @keyup.enter="nextStep" required>
            </div>
            <div v-if="currentStep === 2" class="form-group">
                <label for="location">Location:</label>
                <input type="text" id="location" v-model="location" @keyup.enter="nextStep" required>
            </div>
            <div v-if="currentStep === 3" class="form-group">
                <label for="subcounty">Subcounty:</label>
                <input type="text" id="subcounty" v-model="subcounty" @keyup.enter="nextStep" required>
            </div>
            <div v-if="currentStep === 4" class="form-group">
                <label for="financial-year">Financial Year:</label>
                <input type="text" id="financial-year" v-model="financialYear" @keyup.enter="nextStep" required>
            </div>
            <div v-if="currentStep === 5" class="form-group">
                <label>Status:</label>
                <div>
                    <input type="radio" id="status-done" value="done" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-done">Done</label>
                </div>
                <div>
                    <input type="radio" id="status-todo" value="todo" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-todo">To do</label>
                </div>
                <div>
                    <input type="radio" id="status-inprogress" value="in-progress" @keyup.enter="nextStep" v-model="status">
                    <label class="status-label"for="status-inprogress">In progress</label>
                </div>
            </div>
            <div v-if="currentStep === 6" @keyup.enter="nextStep" class="form-group">
                <label for="remarks">Remarks:</label>
                <textarea id="remarks" v-model="remarks"></textarea>
            </div>
            <div v-if="currentStep === 7" class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" @keyup.enter="nextStep" v-model="description"></textarea>
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
                <p>{{ currentStep }} / 7</p>
            </div>
            <button class="submit" @click.prevent="submitForm" :disabled="currentStep !== 7" type="submit">Submit</button>
            <!-- Your form fields here -->
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const emit = defineEmits(['formSubmitted', 'formFailed'])

let currentStep = ref(1);
let totalSteps = ref(7);
let name = '';
let location = '';
let subcounty = '';
let financialYear = '';
let status = ref('');
let remarks = '';
let description = '';

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
        name,
        location,
        subcounty,
        financialYear,
        status: status.value,
        remarks,
        description
    };
    // return console.log(data);
    if (name.length < 4) {
        emit('formFailed', 'Name must be at least 4 characters long');
        return;
    }

    if (isNaN(Number(financialYear))) {
        emit('formFailed', 'Financial Year must be a number');
        return;
    }

    if (name === '' || location === '' || subcounty === '' || financialYear === '' || status === '' || remarks === '' || description === '') {
        emit('formFailed', 'Please fill all fields');
        return;
    }
    
    axios.post('/api/add-task', data, { headers })
        .then(response => {
            console.log(response.data);
            emit('formSubmitted', "Project Added Successfully!");
            // Handle success response here
        })
        .catch(error => {
            const errorData = error.response.data
            const errorMessage = error?.response?.data?.message?.[0] || 'Failed to add project';

            console.log(errorData);
            emit('formFailed', errorMessage);
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
