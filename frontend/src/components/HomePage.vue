<script setup>
import { ref, onBeforeMount } from 'vue';
import SummaryCard from './SummaryCard.vue';
import TableForm from './TableForm.vue';
import UserForm from './UserForm.vue'
import TableData from './TableData.vue'
import SuccessPopup from './SuccessPopup.vue';
import FailurePopup from './FailurePopup.vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter();
 

const isLoading = ref(true);
const data = ref({
    date: '',
    taskCount: {},
    username: '',
    role: '',

})
const currentPage = ref(1);
let totalPages = 1;
let tasks = [];
const showInput = ref(false); //show create task form
const showUserInput = ref(false); //show create user form
const showData = ref(false) //show task data after click
const showTasks = ref(true) //toggle between user table and task table

const showSuccessPopup = ref(false);
const showFailurePopup = ref(false);
let displayMessage = "testing";
let failureMessage = "testing";
let admin = ref(false);
let clerk = ref(false);
// const 

const displaySuccessPopup = (message) => {
    console.log("form-submitted",  message)
    displayMessage = message;
    showSuccessPopup.value = true;
    showUserInput.value = false;
    showInput.value = false;
    showData.value = false;
    setTimeout(() => {
        showSuccessPopup.value = false;
    }, 3000);
};
const displayFailurePopup = (message) => {
    console.log("form-submitted",  message)
    displayMessage = message;
    showFailurePopup.value = true;
    showUserInput.value = false;
    showInput.value = false;
    showData.value = false;
    setTimeout(() => {
        showFailurePopup.value = false;
    }, 3000);
};

let display = {}
let tableData, userData;
let sortBy = null; //used for query table data
let direction = 1; //used for query table data
let startId = ""; //used for query table data
const createRow = (row) => {
        display = { ...row, 'FinancialYear': row['Financial Year'] };
        delete display['Financial Year']
}
const displayUserForm = () => {
    showUserInput.value = !showUserInput.value;
       
}
const displayForm = () => {
    showInput.value = !showInput.value
}
const deleteUser = async(id) => {
    try {
        const token = localStorage.getItem('jwt');
        const res = await axios.delete(`/api/user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
    } catch(error) {
        displayFailurePopup("Failed to delete user");
        // console.log(error.response.data); 
    }
}

axios.defaults.withCredentials = true;
const fetchData = async() => {
    try {
        const token = localStorage.getItem('jwt');
    const res = await axios.get('/api/home-page', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
    if (res.status === 401) {
        console.log('status', res.status)
        router.push('/login');
    }
    console.log("data", res.data);
    data.value = {...res.data};
    tasks = res.data.taskCounts;
    tableData = res.data.tableData;
    userData = res.data.userData;
    admin.value = res.data.role === 'admin';
    clerk.value = res.data.role === 'clerk';
    console.log("admin", admin.value);
    totalPages = res.data.totalPages;
    console.log(tableData[0]);
    console.log(tasks);
    // console.log(data.value);
    isLoading.value = false;
    } catch {
    router.push('/login');
    }
}
onBeforeMount(() => {
    fetchData();
    
})
const queryTableData =  async() => {
    isLoading.value = true;
    const token = localStorage.getItem('jwt');
    const res = await axios.get('/api/tasks', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            sortBy,
            direction
        },
        withCredentials: true,
    });
    console.log("data", res.data);
    // data.value = {...res.data};
    // tasks = res.data.taskCounts;
    tableData = res.data.tableData;
    // userData = res.data.userData;
    console.log(tableData[0]);
    // console.log(tasks);
    // console.log(data.value);
    isLoading.value = false;
}
const queryPage =  async() => {
    isLoading.value = true;
    const token = localStorage.getItem('jwt');
    const res = await axios.get('/api/tasks', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            startId,
            sortBy,
            direction
        },
        withCredentials: true,
    });
    console.log("data", res.data);
    // data.value = {...res.data};
    // tasks = res.data.taskCounts;
    tableData = res.data.tableData;
    // userData = res.data.userData;
    console.log(tableData[0]);
    // console.log(tasks);
    // console.log(data.value);
    isLoading.value = false;
}

const classSelector = (status) => {
    let iconClass = '';
    switch (status) {
        case 'Done':
            iconClass = 'fa-solid fa-circle-check';
            break;
        case 'In Progress':
            iconClass = 'fas fa-spinner';
            break;
        case 'To-Do':
            iconClass = 'fas fa-tasks';
            break;
        default:
            iconClass = '';
    }
    return iconClass;
}
const logout = () => {
    localStorage.removeItem('jwt');
    // Redirect to login page
    router.push('/login')
    
};


const summaryCards = ref([
    { name: 'Done', total: data.value.taskCount.completed, icon: 'fas fa-check' },
    { name: 'In Progress', total: data.value.taskCount.inProgress, icon: 'fas fa-spinner' },
    { name: 'To-Do', total: data.value.taskCount.todo, icon: 'fas fa-tasks' }
]);
console.log(summaryCards);


</script>
<template>
<div  class="container">
        <div v-if="showSuccessPopup" class="popup">
            <!-- <p>{{ message }}</p> -->
            <SuccessPopup :message="displayMessage" />
        </div>
        <div v-if="showFailurePopup" class="popup">
            <!-- <p>{{ message }}</p> -->
            <FailurePopup :message="displayMessage" />
        </div>
  
    
    <div v-if="isLoading" class="skeleton">
        <div class="spinner-icon"><i class="fas fa-spinner"></i></div>
    </div>
    <div v-else>
        <div class="form-holder" v-if="showInput">
            <button class="cancel" type="button" @click="displayForm">
                <i class="fas fa-times-circle"></i>
            </button>
            <TableForm @form-submitted="(message) => displaySuccessPopup(message)" @form-failed="(message) => displayFailurePopup(message)" @close-form="showInput = false" />
        </div>
        <div class="form-holder" v-if="showUserInput">
            <button class="cancel" type="button" @click="displayUserForm">
                <i class="fas fa-times-circle"></i>
            </button>
            <UserForm @form-failed="(message) => displayFailurePopup(message)" @form-submitted="(message) => displaySuccessPopup(message)"  @close-form="showInput = false" />
        </div>
        <nav>
            <p>County<span>Projects</span></p>
            <div class="flex">
                <div class="welcome">
                    <h2>Welcome back, {{ data.username }}</h2>
                    <p> {{ data.date }}</p>
                </div>
            <div class="last-part">
                <button><i class="fas fa-bell"></i></button>
                <button title="Log Out" @click="logout"><i class="fa-solid fa-circle-user"></i> </button>
                <span>
                    <button :disabled="!admin || !clerk" v-if="showTasks" @click="displayForm">+ Create New Task</button>
                    <button :disabled="!admin || !clerk" v-if="!showTasks" @click="displayUserForm">+ Add New User</button>
                </span>
            </div>
            </div>
        </nav>
        <div class="main">
            <aside>
                <ul>
                    <li @click="showTasks = true" :class="{ 'bg-selected': showTasks}" >County Projects</li>
                    <li @click="showTasks = false" :class="{ 'bg-selected': !showTasks}" v-if="admin">User Management</li>
                </ul>
            </aside>
            <section>
                <div class="tasks-overview">
                    <div class="recently-completed">
                       
                    </div>
                    <div class="summary">
                    <SummaryCard v-for="(card, idx) in tasks" v-bind="card" :index="idx" :key="idx" ></SummaryCard>
                    </div>

                </div>
                <div v-if="showTasks" class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>sn</th>
                                <th>Name <button><i @click="sortBy = 'name'; console.log(sortBy); queryTableData()"   class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Location <button><i @click="sortBy = 'location'; console.log(sortBy); queryTableData()" class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Subcounty <button><i @click="sortBy = 'subcounty'; console.log(sortBy); queryTableData()" class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Financial Year <button><i @click="sortBy = 'Financial Year'; console.log(sortBy); queryTableData()" class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Status <button><i @click="sortBy = 'status'; console.log(sortBy); queryTableData()" class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, idx) in tableData" :key="idx" @click="showData = !showData; createRow(row)">
                                <td>{{ 10*(currentPage -1)+ idx + 1 }}</td>
                                <td>{{ row.Name }}</td>
                                <td>{{ row.Location }}</td>
                                <td>{{ row.Subcounty }}</td>
                                <td>{{ row['Financial Year'] }}</td>
                                <td class="status-col"><i :class="classSelector(row.Status)"></i>  {{ row.Status }}</td>
                                <td class="remarks-col">{{ row.Remarks }}</td>
                            </tr>
                            <div v-if="showData" class="data-holder">
                                <button class="cancel" @click="showData = !showData">
                                      <i class="fas fa-times-circle"></i>
                                </button>
                                <TableData @form-submitted="(message) => displaySuccessPopup(message)"  v-bind="display"/>
                            </div>
                        </tbody>
                    </table>
                </div>
                <div class="user-table" v-if="!showTasks">
                    <table>
                        <thead>
                            <th>sn</th>
                            <th>Username</th>
                            <th>Role</th>
                        </thead>
                        <tbody>
                            <tr v-for="(row, idx) in userData" :key="idx">
                                
                                <td>{{ idx + 1 }}</td>
                                <td>{{ row.username }}</td>
                                <td>{{ row.role }}</td>
                                <td  @click="deleteUser(row.id)" class="delete"><i class="fas fa-trash-alt"></i></td>
                            </tr>
                            <div v-if="showData" class="data-holder">
                                <button class="cancel" @click="showData = !showData">
                                      <i class="fas fa-times-circle"></i>
                                </button>
                                <TableData  v-bind="display"/>
                            </div>
                        </tbody>
                    </table>
                </div>
                <div v-if="showTasks" class="pagination">
                    <!-- <button :disabled="currentPage === 1" @click="startId = tableData[0].id; console.log(startId); direction = -1; queryPage(); currentPage--;"><i class="fa-solid fa-circle-left"></i></button> -->
                    <p> {{ currentPage }} / {{ totalPages }}</p>
                    <button  :disabled="currentPage === totalPages" @click="startId = tableData[tableData.length - 1].id; currentPage++; queryPage()"><i class="fa-solid fa-circle-right"></i></button>
                </div>
                <div v-else></div>
            </section>
        </div>
    </div>

</div>
</template>
<style scoped lang="scss">

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.container {
    // min-width: 1000px;
    width: 80%;
    height: 90vh;
    margin: auto;
    margin-top: 20px;
    z-index: 2;
    background-color:  #b8d8ba;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    .skeleton {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .spinner-icon {
            font-size: 4rem;
            animation: spin 2s linear infinite;
        }
    }
    .popup {
        position: absolute;
        top: 20px;
        right: 50%;
        transform: translateX(50%);
        z-index: 3;
       
    }
    .cancel {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        }
        .cancel:hover {
            color: red;
        }
    .form-holder {
        position:absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        z-index: 9000000;
        background-color: #2e7a4d;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        .cancel {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        }
        .cancel:hover {
            color: red;
        }
    }
    nav {
        display: grid;
        grid-template-columns: 1fr 3fr;
        p {
            font-size: 1.5rem;
            padding: 0;
            margin: 0;
            span {
                color: #2e7a4d;
                font-weight: bold;
            }
        }
        .flex {
            display: flex;
            justify-content: space-between;

            .welcome {
                h2 {
                    font-size: 1.2rem;
                    margin: 0;
                }
                p {
                    color: #2e7a4d;
                    margin: 0;
                    padding: 0;
                    font-size: 0.75rem;
                    text-align: start;
                }
            
            }
        }
        .last-part {
            display: flex;
            align-items: flex-start;
            margin: 5px;
            button {
               border: none;
               color: #2e7a4d;
               font-size: 1.5rem;
               background-color: transparent;
            }
            span {
                button {
                    background-color: #2e7a4d;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 1rem;
                }
            }
        }
    }
    .main {
        position:relative;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 4fr;
        gap: 1rem;
        aside {
            ul {
                list-style: none;
                li {
                    padding: 10px;
                    // border-bottom: 1px solid #334eac;
                    cursor: pointer;
                    border-radius: 10px;
                }
                .bg-selected {
                    background-color: #f5f5f5;
                }
            }
        }
        section {
            margin-right: 25px;
            .tasks-overview {
                display: flex;
                justify-content: space-evenly;
                width: 90%;
                margin: auto;
                .summary {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
                .recently-completed {
                    // background-color: #334eac;
                    border: 2px solid #FFC107;
                    background: url('../assets/county_logo.jpeg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    // background-color: rgba(186, 214, 235, 0.7);
                    height: 150px;
                    width: 150px;
                    position: relative;
                    z-index: 2;
                    border-radius: 5px;
                    p {
                        font-size: 1.2rem;
                        font-weight: bold;
                        text-align: left;
                        padding: 10px;
                        margin: 0;
                        z-index: 10;
                        // background-color: #334eac;
                        // color: white;
                    }
                    .count {
                        margin-left: 15px;
                        font-weight: 500;
                        font-size: 1.25rem;
                    }
                    button {
                        background-color: #276221;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        font-size: 1rem;
                    } 
                    .image {
                        background-position: right;
                        background-size: cover;
                        background-repeat: no-repeat;
                        position: absolute;
                        right: 3px;
                        bottom: 50%;
                        transform: translateY(15%);
                        width: 75px;
                        height: 75px;

                        z-index: -1;
                        
                    }
                }

            }
            .table {
                margin-top: 1rem;
                table {
                    width: 100%;
                    border-collapse: collapse;
                    cursor: pointer;
                    tbody {
                        min-height: 400px;
                        position: relative;
                        .data-holder {
                            background-color: #276221;
                            position: absolute;
                            width: 250px;
                            height: 350px;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 25px;
                            
                        }
                    }
                    th {
                        background-color: #2e7a4d;
                        color: white;
                        padding: 10px;
                        button {
                            padding: 0;
                            border: none;
                            background: none;
                            cursor: pointer;
                        }
                        i {
                            font-weight: bold;
                            color: white;
                        }
                    }
                    td {
                        padding: 10px;
                        border-bottom: 1px solid #2e7a4d;
                    }
                    
                    tr:hover {
                        background-color:  #90EE90;
                    }
                    .remarks-col {
                        overflow: hidden;
                        max-width: 100px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .status-col {
                        text-align: left;
                        i {
                            margin-right: 3px;
                          
                        }
                        .fa-circle-check {
                                color: green;
                            }
                        .fa-spinner {
                            color: #007bff
                        }
                        .fa-tasks {
                            color: #dc3545
                        }
                    }
                }
            }
            .user-table {
                table {
                    width: 50%;
                    border-collapse: collapse;
                    margin: auto;
                    margin-top: 20px;
                    cursor: pointer;
                
                th {
                    background-color:  #2e7a4d;
                        color: white;
                        padding: 10px;
                }
                td {
                    padding: 10px;
                    border-bottom: 1px solid  #2e7a4d;
                }
                tr:hover {
                    td {
                        background-color:  #90EE90;
                    }
                    .delete {
                        background-color: transparent;
                    }
                    // background-color:  #90EE90;
                }
                td.delete {
                        border-bottom: none;
                        i {
                            color: red;
                        }
                    }
                td.delete:hover {
                    i {
                        color: green;
                    }
                }
            }
            }
            .pagination {
                display: flex;
                // position: absolute;
                margin: auto;
                bottom: 0;
                width: 20%;
                i {
                    margin: 0 2px;
                }
                button {
                    background: none;
                    padding: 0;
                    border: none;
                }
            }
        }
    }
}

</style>
