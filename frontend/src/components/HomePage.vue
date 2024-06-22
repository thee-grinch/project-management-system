<script setup>
import { ref, onBeforeMount } from 'vue';
import SummaryCard from './SummaryCard.vue';
import axios from 'axios'

axios.defaults.withCredentials = true;
const fetchData = async() => {
    const res = await axios.get('http://127.0.0.1:3000/home-page', {withCredentials: true});
    console.log((await res).data)
}
onBeforeMount(() => {
    fetchData();
})
const isLoading = ref(true);
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


const summaryCards = [
    { name: 'Done', total: 10, icon: 'fas fa-check' },
    { name: 'In Progress', total: 5, icon: 'fas fa-spinner' },
    { name: 'To-Do', total: 3, icon: 'fas fa-tasks' }
];
const tableData = [
    { sl: 1, Name: 'Task 1', Location: 'New York', Subcounty: 'Brooklyn', 'Financial Year': '2024-2025', Status: 'Done', Remarks: 'Lorem ipsum dolor sit amet mordecai is the best' },
    { sl: 2, Name: 'Task 2', Location: 'Los Angeles', Subcounty: 'Hollywood', 'Financial Year': '2024-2025', Status: 'In Progress', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 3, Name: 'Task 3', Location: 'Chicago', Subcounty: 'Wrigleyville', 'Financial Year': '2024-2025', Status: 'To-Do', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 4, Name: 'Task 4', Location: 'Houston', Subcounty: 'Montrose', 'Financial Year': '2024-2025', Status: 'Done', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 5, Name: 'Task 5', Location: 'San Francisco', Subcounty: 'Mission District', 'Financial Year': '2024-2025', Status: 'In Progress', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 6, Name: 'Task 6', Location: 'Seattle', Subcounty: 'Capitol Hill', 'Financial Year': '2024-2025', Status: 'To-Do', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 7, Name: 'Task 7', Location: 'Boston', Subcounty: 'Back Bay', 'Financial Year': '2024-2025', Status: 'Done', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 8, Name: 'Task 8', Location: 'Miami', Subcounty: 'South Beach', 'Financial Year': '2024-2025', Status: 'In Progress', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 9, Name: 'Task 9', Location: 'Denver', Subcounty: 'LoDo', 'Financial Year': '2024-2025', Status: 'To-Do', Remarks: 'Lorem ipsum dolor sit amet' },
    { sl: 10, Name: 'Task 10', Location: 'Dallas', Subcounty: 'Deep Ellum', 'Financial Year': '2024-2025', Status: 'Done', Remarks: 'Lorem ipsum dolor sit amet' }
];
let page = 1;
</script>
<template>
<div class="container">

    <div v-if="isLoading" class="skeleton">
        <div class="spinner-icon"><i class="fas fa-spinner"></i></div>
    </div>
    <div v-else>
        <nav>
            <p>Civic<span>Planner</span></p>
            <div class="flex">
                <div class="welcome">
                    <h2>Welcome back, Mordecai</h2>
                    <p>Apr 10, 2024</p>
                </div>
            <div class="last-part">
                <button><i class="fas fa-bell"></i></button>
                <button><i class="fa-solid fa-circle-user"></i> </button>
                <span>
                    <button>+ Create New Task</button>
                </span>
            </div>
            </div>
        </nav>
        <div class="main">
            <aside>
                <ul>
                    <li>Dashboard</li>
                    <li>Tasks</li>
                    <li>Calendar</li>
                    <li>Messages</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <section>
                <div class="tasks-overview">
                    <div class="recently-completed">
                        <p>Recently completed</p>
                        <p class="total">5</p>
                        <button>+ Add More</button>
                        <div class="image">
                        </div>
                    </div>
                    <div class="summary">
                    <SummaryCard v-for="(card, idx) in summaryCards" v-bind="card" :index="idx" :key="idx" ></SummaryCard>
                    </div>

                </div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>sn</th>
                                <th>Name <button><i class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Location <button><i class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Subcounty <button><i class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Financial Year <button><i class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Status <button><i class="fa-solid fa-angle-down"></i> </button></th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, idx) in tableData" :key="idx">
                                <td>{{ row.sl }}</td>
                                <td>{{ row.Name }}</td>
                                <td>{{ row.Location }}</td>
                                <td>{{ row.Subcounty }}</td>
                                <td>{{ row['Financial Year'] }}</td>
                                <td class="status-col"><i :class="classSelector(row.Status)"></i>  {{ row.Status }}</td>
                                <td class="remarks-col">{{ row.Remarks }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pagination">
                    <p><i class="fa-solid fa-circle-left"></i></p>
                    <p>{{ page }}</p>
                    <p><i class="fa-solid fa-circle-right"></i></p>
                </div>
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
    width: 80%;
    height: 90vh;
    margin: auto;
    margin-top: 20px;
    z-index: 999;
    background-color: #cad6d6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    nav {
        display: grid;
        grid-template-columns: 1fr 3fr;
        p {
            font-size: 1.5rem;
            padding: 0;
            margin: 0;
            span {
                color: #334eac;
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
                    color: #334eac;
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
               color: #334eac;
               font-size: 1.5rem;
               background-color: transparent;
            }
            span {
                button {
                    background-color: #334eac;
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
                    border: 2px solid #334eac;
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
                        background-color: #334eac;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        font-size: 1rem;
                    } 
                    .image {
                        background: url('../assets/verify.gif');
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
                    th {
                        background-color: #334eac;
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
                        border-bottom: 1px solid #334eac;
                    }
                    tr:hover {
                        background-color: #41a7f5;
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
            .pagination {
                display: flex;
                // position: absolute;
                margin: auto;
                bottom: 0;
                width: 20%;
            }
        }
    }
}

</style>
