<template>
    <div class="ontainer">
        <div class="content">
            <p><span>Project Name:  </span>  {{ props.Name }}</p>
            <p><span>Location:  </span>{{ props.Location }}, {{  props.Subcounty }}</p>
            <p><span>Financial Year:  </span> {{ props.FinancialYear }}</p>
            <p><span>Status: </span> {{ props.Status }}</p>
            <p><span>Remarks: </span> {{ props.Remarks }}</p>
        </div>
        <!-- Your table data goes here -->

        <!-- Task view element -->
        <div  class="task-view">
            <!-- Delete task button -->
            <button @click="deleteTask()" title="Delete the task" class="delete-button">
                <i class="fas fa-trash"></i> Delete
            </button>

            <!-- Mark done button -->
            <button @click="patchTask('done')" title="Mark completed" class="done-button">
                <i class="fas fa-circle-check"></i> Complete
            </button>

            <!-- Set as to do button -->
            <button @click="patchTask('todo')" title="Set the task to todo" class="todo-button">
                <i class="fas fa-tasks"></i> Queue
            </button>

            <!-- Set as in progress button -->
            <button v-if="!inProgress" title="Set the task to in progress" @click="patchTask('in-progress')" class="progress-button">
                <i class="fas fa-circle-play"></i> Start
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const emit = defineEmits(['formSubmitted', 'formFailed'])

const props = defineProps({
    Name: String,
    Location: String,
    Subcounty: String,
    // "Financial Year": String,
    Remarks: String,
    Status: String,
    id: String


});
// Data
const showTaskView = ref(false);
const inProgress = ref(false);

// Methods
const patchTask = async(newStatus) => {
    const token = localStorage.getItem('jwt');
    const res = await axios.patch(`/api/tasks/${props.id}`,{
        status: newStatus,
    },
     {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
    if (res.status === 200) {
        emit('formSubmitted', 'Task updated Succesfully')
    }
    else emit('formFailed', 'Failed to update task')

}

const deleteTask = async() => {
    const token = localStorage.getItem('jwt');
    const res = await axios.delete(`/api/tasks/${props.id}`,
     {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
    if (res.status === 200) {
        emit('formSubmitted', 'Task deleted Succesfully')
    }
    else emit('formFailed', 'Failed to delete task')
    // Implement delete task logic here
};

const markDone = () => {
    // Implement mark done logic here
};

const setToDo = () => {
    // Implement set as to do logic here
};

const setInProgress = () => {
    // Implement set as in progress logic here
};
</script>

<style scoped lang="scss">
.content {
    margin-top: 20px;
    max-height: 350px;
    overflow-y: auto;
    p {
        text-align: left;
        color: white;
        margin-left: 10px;
        span {
            font-weight: bold;
        }
    }
}
.task-view {
 display: flex;
//  width: 60%;
 margin: 0 auto;
 button {
    background-color: transparent;
    border: none;
    color: white;
    i {
        color: white;
        font-size: 1.5rem;
    }
 }
 button:hover {
    color: green;
    i {
        color: green;
    }
 }
 

}

.delete-button,
.done-button,
.todo-button,
.progress-button {
    margin: 1px;
    // Style your buttons here
}
</style>