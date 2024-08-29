(function(){"use strict";var e={8953:function(e,t,a){var l=a(5130),n=a(6768),o={__name:"App",setup(e){return(e,t)=>{const a=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(a)}}};const s=o;var u=s,r=a(1387),i=(a(4114),a(144)),c=a(4232);const d={class:"holder"},k={class:"name"};var v={__name:"SummaryCard",props:{name:{type:String},total:{type:Number}},setup(e){const t=e,a=t.index;console.log(a);const l={Done:"fas fa-check","In Progress":"fas fa-spinner","To Do":"fas fa-times"};return(e,a)=>((0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("i",{class:(0,c.C4)(l[t.name])},null,2),(0,n.Lk)("p",k,(0,c.v_)(t.name),1),(0,n.Lk)("p",null,(0,c.v_)(t.total),1)]))}},f=a(1241);const p=(0,f.A)(v,[["__scopeId","data-v-45647f64"]]);var m=p,b=a(4373);const L={class:"form-container"},g={key:0,class:"form-group"},y=(0,n.Lk)("label",{for:"name"},"Name:",-1),h={key:1,class:"form-group"},C=(0,n.Lk)("label",{for:"location"},"Location:",-1),R={key:2,class:"form-group"},_=(0,n.Lk)("label",{for:"subcounty"},"Subcounty:",-1),S={key:3,class:"form-group"},w=(0,n.Lk)("label",{for:"financial-year"},"Financial Year:",-1),F={key:4,class:"form-group"},E=(0,n.Lk)("label",null,"Status:",-1),X=(0,n.Lk)("label",{class:"status-label",for:"status-done"},"Done",-1),j=(0,n.Lk)("label",{class:"status-label",for:"status-todo"},"To do",-1),K=(0,n.Lk)("label",{class:"status-label",for:"status-inprogress"},"In progress",-1),A=(0,n.Lk)("label",{for:"remarks"},"Remarks:",-1),Q={key:6,class:"form-group"},N=(0,n.Lk)("label",{for:"description"},"Description:",-1),P={class:"button-group"},I=["disabled"],U=(0,n.Lk)("i",{class:"fas fa-arrow-left"},null,-1),T=[U],W=["disabled"],x=(0,n.Lk)("i",{class:"fas fa-arrow-right"},null,-1),D=[x],O={class:"progress-bar"},V=["disabled"];var B={__name:"TableForm",emits:["formSubmitted","formFailed"],setup(e,{emit:t}){const a=t;let o=(0,i.KR)(1),s=(0,i.KR)(7),u="",r="",d="",k="",v=(0,i.KR)(""),f="",p="";const m=()=>{o.value<s.value&&o.value++},U=()=>{o.value>1&&o.value--},x=()=>{console.log("Submitting form");const e=localStorage.getItem("jwt"),t={Authorization:`Bearer ${e}`},l={name:u,location:r,subcounty:d,financialYear:k,status:v.value,remarks:f,description:p};u.length<4?a("formFailed","Name must be at least 4 characters long"):isNaN(Number(k))?a("formFailed","Financial Year must be a number"):""!==u&&""!==r&&""!==d&&""!==k&&""!==v&&""!==f&&""!==p?b.A.post("/api/add-task",l,{headers:t}).then((e=>{console.log(e.data),a("formSubmitted","Project Added Successfully!")})).catch((e=>{const t=e.response.data,l=e?.response?.data?.message?.[0]||"Failed to add project";console.log(t),a("formFailed",l)})):a("formFailed","Please fill all fields")};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",L,[(0,n.Lk)("form",{onSubmit:x,class:"animated-form"},[1===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",g,[y,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.i9)(u)?u.value=e:u=e),onKeyup:(0,l.jR)(m,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(u)]])])):(0,n.Q3)("",!0),2===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",h,[C,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"location","onUpdate:modelValue":t[1]||(t[1]=e=>(0,i.i9)(r)?r.value=e:r=e),onKeyup:(0,l.jR)(m,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(r)]])])):(0,n.Q3)("",!0),3===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",R,[_,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"subcounty","onUpdate:modelValue":t[2]||(t[2]=e=>(0,i.i9)(d)?d.value=e:d=e),onKeyup:(0,l.jR)(m,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(d)]])])):(0,n.Q3)("",!0),4===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",S,[w,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"financial-year","onUpdate:modelValue":t[3]||(t[3]=e=>(0,i.i9)(k)?k.value=e:k=e),onKeyup:(0,l.jR)(m,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(k)]])])):(0,n.Q3)("",!0),5===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",F,[E,(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-done",value:"done",onKeyup:(0,l.jR)(m,["enter"]),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,i.i9)(v)?v.value=e:v=e)},null,544),[[l.XL,(0,i.R1)(v)]]),X]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-todo",value:"todo",onKeyup:(0,l.jR)(m,["enter"]),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,i.i9)(v)?v.value=e:v=e)},null,544),[[l.XL,(0,i.R1)(v)]]),j]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-inprogress",value:"in-progress",onKeyup:(0,l.jR)(m,["enter"]),"onUpdate:modelValue":t[6]||(t[6]=e=>(0,i.i9)(v)?v.value=e:v=e)},null,544),[[l.XL,(0,i.R1)(v)]]),K])])):(0,n.Q3)("",!0),6===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",{key:5,onKeyup:(0,l.jR)(m,["enter"]),class:"form-group"},[A,(0,n.bo)((0,n.Lk)("textarea",{id:"remarks","onUpdate:modelValue":t[7]||(t[7]=e=>(0,i.i9)(f)?f.value=e:f=e)},null,512),[[l.Jo,(0,i.R1)(f)]])],32)):(0,n.Q3)("",!0),7===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",Q,[N,(0,n.bo)((0,n.Lk)("textarea",{id:"description",onKeyup:(0,l.jR)(m,["enter"]),"onUpdate:modelValue":t[8]||(t[8]=e=>(0,i.i9)(p)?p.value=e:p=e)},null,544),[[l.Jo,(0,i.R1)(p)]])])):(0,n.Q3)("",!0),(0,n.Lk)("div",P,[(0,n.Lk)("button",{type:"button",onClick:U,disabled:1===(0,i.R1)(o)},T,8,I),(0,n.Lk)("button",{type:"button",onClick:m,disabled:(0,i.R1)(o)===(0,i.R1)(s)},D,8,W)]),(0,n.Lk)("div",O,[(0,n.Lk)("p",null,(0,c.v_)((0,i.R1)(o))+" / 7",1)]),(0,n.Lk)("button",{class:"submit",onClick:(0,l.D$)(x,["prevent"]),disabled:7!==(0,i.R1)(o),type:"submit"},"Submit",8,V)],32)]))}};const $=B;var Y=$;const q={class:"form-container"},z={key:0,class:"form-group"},J=(0,n.Lk)("label",{for:"name"},"Name:",-1),M={key:1,class:"form-group"},H=(0,n.Lk)("label",{for:"Password"},"Password:",-1),G={key:2,class:"form-group"},Z=(0,n.Lk)("label",null,"Role:",-1),ee=(0,n.Lk)("label",{class:"status-label",for:"status-done"},"Admin",-1),te=(0,n.Lk)("label",{class:"status-label",for:"status-todo"},"Clerk",-1),ae=(0,n.Lk)("label",{class:"status-label",for:"status-inprogress"},"Viewer",-1),le={class:"button-group"},ne=["disabled"],oe=(0,n.Lk)("i",{class:"fas fa-arrow-left"},null,-1),se=[oe],ue=["disabled"],re=(0,n.Lk)("i",{class:"fas fa-arrow-right"},null,-1),ie=[re],ce={class:"progress-bar"},de=["disabled"];var ke={__name:"UserForm",emits:["formSubmitted","formFailed"],setup(e,{emit:t}){const a=t;let o=(0,i.KR)(1),s=(0,i.KR)(3),u="",r="",d=(0,i.KR)("");const k=()=>{o.value<s.value&&o.value++},v=()=>{o.value>1&&o.value--},f=()=>{console.log("Submitting form");const e=localStorage.getItem("jwt"),t={Authorization:`Bearer ${e}`},l={username:u,password:r,role:d.value};""===u||""===r||""===d?a("formFailed","Please fill all fields"):(u.length<4||r.length<4)&&a("formFailed","Username and password must be atleast 4 characters"),b.A.post("/api/add-user",l,{headers:t}).then((e=>{console.log(e.data),a("formSubmitted","User Added succesfully!")})).catch((e=>{a("formFailed","An error occured")}))};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",q,[(0,n.Lk)("form",{onSubmit:t[6]||(t[6]=()=>{}),class:"animated-form"},[1===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",z,[J,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.i9)(u)?u.value=e:u=e),onKeyup:(0,l.jR)(k,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(u)]])])):(0,n.Q3)("",!0),2===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",M,[H,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>(0,i.i9)(r)?r.value=e:r=e),onKeyup:(0,l.jR)(k,["enter"]),required:""},null,544),[[l.Jo,(0,i.R1)(r)]])])):(0,n.Q3)("",!0),3===(0,i.R1)(o)?((0,n.uX)(),(0,n.CE)("div",G,[Z,(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-done",value:"admin",onKeyup:(0,l.jR)(k,["enter"]),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,i.i9)(d)?d.value=e:d=e)},null,544),[[l.XL,(0,i.R1)(d)]]),ee]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-todo",value:"clerk",onKeyup:(0,l.jR)(k,["enter"]),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,i.i9)(d)?d.value=e:d=e)},null,544),[[l.XL,(0,i.R1)(d)]]),te]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"status-inprogress",value:"viewer",onKeyup:(0,l.jR)(k,["enter"]),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,i.i9)(d)?d.value=e:d=e)},null,544),[[l.XL,(0,i.R1)(d)]]),ae])])):(0,n.Q3)("",!0),(0,n.Lk)("div",le,[(0,n.Lk)("button",{type:"button",onClick:v,disabled:1===(0,i.R1)(o)},se,8,ne),(0,n.Lk)("button",{type:"button",onClick:k,disabled:(0,i.R1)(o)===(0,i.R1)(s)},ie,8,ue)]),(0,n.Lk)("div",ce,[(0,n.Lk)("p",null,(0,c.v_)((0,i.R1)(o))+" / "+(0,c.v_)((0,i.R1)(s)),1)]),(0,n.Lk)("button",{class:"submit",onClick:t[5]||(t[5]=(0,l.D$)((e=>f()),["prevent"])),disabled:3!==(0,i.R1)(o),type:"submit"},"Submit",8,de)],32)]))}};const ve=ke;var fe=ve;const pe=e=>((0,n.Qi)("data-v-6be688f3"),e=e(),(0,n.jt)(),e),me={class:"ontainer"},be={class:"content"},Le=pe((()=>(0,n.Lk)("span",null,"Project Name: ",-1))),ge=pe((()=>(0,n.Lk)("span",null,"Location: ",-1))),ye=pe((()=>(0,n.Lk)("span",null,"Financial Year: ",-1))),he=pe((()=>(0,n.Lk)("span",null,"Status: ",-1))),Ce=pe((()=>(0,n.Lk)("span",null,"Remarks: ",-1))),Re={class:"task-view"},_e=pe((()=>(0,n.Lk)("i",{class:"fas fa-trash"},null,-1))),Se=pe((()=>(0,n.Lk)("i",{class:"fas fa-circle-check"},null,-1))),we=pe((()=>(0,n.Lk)("i",{class:"fas fa-tasks"},null,-1))),Fe=pe((()=>(0,n.Lk)("i",{class:"fas fa-circle-play"},null,-1)));var Ee={__name:"TableData",props:{Name:String,Location:String,Subcounty:String,Remarks:String,Status:String,id:String},emits:["formSubmitted","formFailed"],setup(e,{emit:t}){const a=t,l=e,o=((0,i.KR)(!1),(0,i.KR)(!1)),s=async e=>{const t=localStorage.getItem("jwt"),n=await b.A.patch(`/api/tasks/${l.id}`,{status:e},{headers:{Authorization:`Bearer ${t}`},withCredentials:!0});200===n.status?a("formSubmitted","Task updated Succesfully"):a("formFailed","Failed to update task")},u=async()=>{const e=localStorage.getItem("jwt"),t=await b.A.delete(`/api/tasks/${l.id}`,{headers:{Authorization:`Bearer ${e}`},withCredentials:!0});200===t.status?a("formSubmitted","Task deleted Succesfully"):a("formFailed","Failed to delete task")};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",me,[(0,n.Lk)("div",be,[(0,n.Lk)("p",null,[Le,(0,n.eW)(" "+(0,c.v_)(l.Name),1)]),(0,n.Lk)("p",null,[ge,(0,n.eW)((0,c.v_)(l.Location)+", "+(0,c.v_)(l.Subcounty),1)]),(0,n.Lk)("p",null,[ye,(0,n.eW)(" "+(0,c.v_)(l.FinancialYear),1)]),(0,n.Lk)("p",null,[he,(0,n.eW)(" "+(0,c.v_)(l.Status),1)]),(0,n.Lk)("p",null,[Ce,(0,n.eW)(" "+(0,c.v_)(l.Remarks),1)])]),(0,n.Lk)("div",Re,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=e=>u()),title:"Delete the task",class:"delete-button"},[_e,(0,n.eW)(" Delete ")]),(0,n.Lk)("button",{onClick:t[1]||(t[1]=e=>s("done")),title:"Mark completed",class:"done-button"},[Se,(0,n.eW)(" Complete ")]),(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>s("todo")),title:"Set the task to todo",class:"todo-button"},[we,(0,n.eW)(" Queue ")]),o.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("button",{key:0,title:"Set the task to in progress",onClick:t[3]||(t[3]=e=>s("in-progress")),class:"progress-button"},[Fe,(0,n.eW)(" Start ")]))])]))}};const Xe=(0,f.A)(Ee,[["__scopeId","data-v-6be688f3"]]);var je=Xe;const Ke=e=>((0,n.Qi)("data-v-14f95680"),e=e(),(0,n.jt)(),e),Ae={class:"hold"},Qe=Ke((()=>(0,n.Lk)("p",{class:"bottom"},null,-1)));var Ne={__name:"SuccessPopup",props:{message:{required:!0}},setup(e){const t=e;return(e,a)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",Ae,[(0,n.Lk)("p",null,(0,c.v_)(t.message),1)]),Qe],64))}};const Pe=(0,f.A)(Ne,[["__scopeId","data-v-14f95680"]]);var Ie=Pe;const Ue=e=>((0,n.Qi)("data-v-67c6ae16"),e=e(),(0,n.jt)(),e),Te={class:"hold"},We=Ue((()=>(0,n.Lk)("p",{class:"bottom"},null,-1)));var xe={__name:"FailurePopup",props:{message:{required:!0}},setup(e){const t=e;return(e,a)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",Te,[(0,n.Lk)("p",null,(0,c.v_)(t.message),1)]),We],64))}};const De=(0,f.A)(xe,[["__scopeId","data-v-67c6ae16"]]);var Oe=De;const Ve=e=>((0,n.Qi)("data-v-779f8b51"),e=e(),(0,n.jt)(),e),Be={class:"container"},$e={key:0,class:"popup"},Ye={key:1,class:"popup"},qe={key:2,class:"skeleton"},ze=Ve((()=>(0,n.Lk)("div",{class:"spinner-icon"},[(0,n.Lk)("i",{class:"fas fa-spinner"})],-1))),Je=[ze],Me={key:3},He={key:0,class:"form-holder"},Ge=Ve((()=>(0,n.Lk)("i",{class:"fas fa-times-circle"},null,-1))),Ze=[Ge],et={key:1,class:"form-holder"},tt=Ve((()=>(0,n.Lk)("i",{class:"fas fa-times-circle"},null,-1))),at=[tt],lt=Ve((()=>(0,n.Lk)("p",null,[(0,n.eW)("County"),(0,n.Lk)("span",null,"Projects")],-1))),nt={class:"flex"},ot={class:"welcome"},st={class:"last-part"},ut=Ve((()=>(0,n.Lk)("button",null,[(0,n.Lk)("i",{class:"fas fa-bell"})],-1))),rt=Ve((()=>(0,n.Lk)("i",{class:"fa-solid fa-circle-user"},null,-1))),it=[rt],ct=["disabled"],dt=["disabled"],kt={class:"main"},vt={class:"tasks-overview"},ft=Ve((()=>(0,n.Lk)("div",{class:"recently-completed"},null,-1))),pt={class:"summary"},mt={key:0,class:"table"},bt=Ve((()=>(0,n.Lk)("th",null,"sn",-1))),Lt=Ve((()=>(0,n.Lk)("th",null,"Remarks",-1))),gt=["onClick"],yt={class:"status-col"},ht={class:"remarks-col"},Ct={key:0,class:"data-holder"},Rt=Ve((()=>(0,n.Lk)("i",{class:"fas fa-times-circle"},null,-1))),_t=[Rt],St={key:1,class:"user-table"},wt=Ve((()=>(0,n.Lk)("thead",null,[(0,n.Lk)("th",null,"sn"),(0,n.Lk)("th",null,"Username"),(0,n.Lk)("th",null,"Role")],-1))),Ft=["onClick"],Et=Ve((()=>(0,n.Lk)("i",{class:"fas fa-trash-alt"},null,-1))),Xt=[Et],jt={key:0,class:"data-holder"},Kt=Ve((()=>(0,n.Lk)("i",{class:"fas fa-times-circle"},null,-1))),At=[Kt],Qt={key:2,class:"pagination"},Nt=["disabled"],Pt=Ve((()=>(0,n.Lk)("i",{class:"fa-solid fa-circle-right"},null,-1))),It=[Pt],Ut={key:3};var Tt={__name:"HomePage",setup(e){const t=(0,r.rd)(),a=(0,i.KR)(!0),l=(0,i.KR)({date:"",taskCount:{},username:"",role:""}),o=(0,i.KR)(1);let s=1,u=[];const d=(0,i.KR)(!1),k=(0,i.KR)(!1),v=(0,i.KR)(!1),f=(0,i.KR)(!0),p=(0,i.KR)(!1),L=(0,i.KR)(!1);let g="testing",y=(0,i.KR)(!1),h=(0,i.KR)(!1);const C=e=>{console.log("form-submitted",e),g=e,p.value=!0,k.value=!1,d.value=!1,v.value=!1,setTimeout((()=>{p.value=!1}),3e3)},R=e=>{console.log("form-submitted",e),g=e,L.value=!0,k.value=!1,d.value=!1,v.value=!1,setTimeout((()=>{L.value=!1}),3e3)};let _,S,w={},F=null,E=1,X="";const j=e=>{w={...e,FinancialYear:e["Financial Year"]},delete w["Financial Year"]},K=()=>{k.value=!k.value},A=()=>{d.value=!d.value},Q=async e=>{try{const t=localStorage.getItem("jwt");await b.A.delete(`/api/user/${e}`,{headers:{Authorization:`Bearer ${t}`},withCredentials:!0})}catch(t){R("Failed to delete user")}};b.A.defaults.withCredentials=!0;const N=async()=>{try{const e=localStorage.getItem("jwt"),n=await b.A.get("/api/home-page",{headers:{Authorization:`Bearer ${e}`},withCredentials:!0});401===n.status&&(console.log("status",n.status),t.push("/login")),console.log("data",n.data),l.value={...n.data},u=n.data.taskCounts,_=n.data.tableData,S=n.data.userData,y.value="admin"===n.data.role,h.value="clerk"===n.data.role,console.log("admin",y.value),s=n.data.totalPages,console.log(_[0]),console.log(u),a.value=!1}catch{t.push("/login")}};(0,n.KC)((()=>{N()}));const P=async()=>{a.value=!0;const e=localStorage.getItem("jwt"),t=await b.A.get("/api/tasks",{headers:{Authorization:`Bearer ${e}`},params:{sortBy:F,direction:E},withCredentials:!0});console.log("data",t.data),_=t.data.tableData,console.log(_[0]),a.value=!1},I=async()=>{a.value=!0;const e=localStorage.getItem("jwt"),t=await b.A.get("/api/tasks",{headers:{Authorization:`Bearer ${e}`},params:{startId:X,sortBy:F,direction:E},withCredentials:!0});console.log("data",t.data),_=t.data.tableData,console.log(_[0]),a.value=!1},U=e=>{let t="";switch(e){case"Done":t="fa-solid fa-circle-check";break;case"In Progress":t="fas fa-spinner";break;case"To-Do":t="fas fa-tasks";break;default:t=""}return t},T=()=>{localStorage.removeItem("jwt"),t.push("/login")},W=(0,i.KR)([{name:"Done",total:l.value.taskCount.completed,icon:"fas fa-check"},{name:"In Progress",total:l.value.taskCount.inProgress,icon:"fas fa-spinner"},{name:"To-Do",total:l.value.taskCount.todo,icon:"fas fa-tasks"}]);return console.log(W),(e,t)=>((0,n.uX)(),(0,n.CE)("div",Be,[p.value?((0,n.uX)(),(0,n.CE)("div",$e,[(0,n.bF)(Ie,{message:(0,i.R1)(g)},null,8,["message"])])):(0,n.Q3)("",!0),L.value?((0,n.uX)(),(0,n.CE)("div",Ye,[(0,n.bF)(Oe,{message:(0,i.R1)(g)},null,8,["message"])])):(0,n.Q3)("",!0),a.value?((0,n.uX)(),(0,n.CE)("div",qe,Je)):((0,n.uX)(),(0,n.CE)("div",Me,[d.value?((0,n.uX)(),(0,n.CE)("div",He,[(0,n.Lk)("button",{class:"cancel",type:"button",onClick:A},Ze),(0,n.bF)(Y,{onFormSubmitted:t[0]||(t[0]=e=>C(e)),onFormFailed:t[1]||(t[1]=e=>R(e)),onCloseForm:t[2]||(t[2]=e=>d.value=!1)})])):(0,n.Q3)("",!0),k.value?((0,n.uX)(),(0,n.CE)("div",et,[(0,n.Lk)("button",{class:"cancel",type:"button",onClick:K},at),(0,n.bF)(fe,{onFormFailed:t[3]||(t[3]=e=>R(e)),onFormSubmitted:t[4]||(t[4]=e=>C(e)),onCloseForm:t[5]||(t[5]=e=>d.value=!1)})])):(0,n.Q3)("",!0),(0,n.Lk)("nav",null,[lt,(0,n.Lk)("div",nt,[(0,n.Lk)("div",ot,[(0,n.Lk)("h2",null,"Welcome back, "+(0,c.v_)(l.value.username),1),(0,n.Lk)("p",null,(0,c.v_)(l.value.date),1)]),(0,n.Lk)("div",st,[ut,(0,n.Lk)("button",{title:"Log Out",onClick:T},it),(0,n.Lk)("span",null,[f.value?((0,n.uX)(),(0,n.CE)("button",{key:0,disabled:!(0,i.R1)(y)||!(0,i.R1)(h),onClick:A},"+ Create New Task",8,ct)):(0,n.Q3)("",!0),f.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("button",{key:1,disabled:!(0,i.R1)(y)||!(0,i.R1)(h),onClick:K},"+ Add New User",8,dt))])])])]),(0,n.Lk)("div",kt,[(0,n.Lk)("aside",null,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",{onClick:t[6]||(t[6]=e=>f.value=!0),class:(0,c.C4)({"bg-selected":f.value})},"County Projects",2),(0,i.R1)(y)?((0,n.uX)(),(0,n.CE)("li",{key:0,onClick:t[7]||(t[7]=e=>f.value=!1),class:(0,c.C4)({"bg-selected":!f.value})},"User Management",2)):(0,n.Q3)("",!0)])]),(0,n.Lk)("section",null,[(0,n.Lk)("div",vt,[ft,(0,n.Lk)("div",pt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,i.R1)(u),((e,t)=>((0,n.uX)(),(0,n.Wv)(m,(0,n.v6)({ref_for:!0},e,{index:t,key:t}),null,16,["index"])))),128))])]),f.value?((0,n.uX)(),(0,n.CE)("div",mt,[(0,n.Lk)("table",null,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[bt,(0,n.Lk)("th",null,[(0,n.eW)("Name "),(0,n.Lk)("button",null,[(0,n.Lk)("i",{onClick:t[8]||(t[8]=e=>{(0,i.i9)(F)?F.value="name":F="name",console.log((0,i.R1)(F)),P()}),class:"fa-solid fa-angle-down"})])]),(0,n.Lk)("th",null,[(0,n.eW)("Location "),(0,n.Lk)("button",null,[(0,n.Lk)("i",{onClick:t[9]||(t[9]=e=>{(0,i.i9)(F)?F.value="location":F="location",console.log((0,i.R1)(F)),P()}),class:"fa-solid fa-angle-down"})])]),(0,n.Lk)("th",null,[(0,n.eW)("Subcounty "),(0,n.Lk)("button",null,[(0,n.Lk)("i",{onClick:t[10]||(t[10]=e=>{(0,i.i9)(F)?F.value="subcounty":F="subcounty",console.log((0,i.R1)(F)),P()}),class:"fa-solid fa-angle-down"})])]),(0,n.Lk)("th",null,[(0,n.eW)("Financial Year "),(0,n.Lk)("button",null,[(0,n.Lk)("i",{onClick:t[11]||(t[11]=e=>{(0,i.i9)(F)?F.value="Financial Year":F="Financial Year",console.log((0,i.R1)(F)),P()}),class:"fa-solid fa-angle-down"})])]),(0,n.Lk)("th",null,[(0,n.eW)("Status "),(0,n.Lk)("button",null,[(0,n.Lk)("i",{onClick:t[12]||(t[12]=e=>{(0,i.i9)(F)?F.value="status":F="status",console.log((0,i.R1)(F)),P()}),class:"fa-solid fa-angle-down"})])]),Lt])]),(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,i.R1)(_),((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t,onClick:t=>{v.value=!v.value,j(e)}},[(0,n.Lk)("td",null,(0,c.v_)(10*(o.value-1)+t+1),1),(0,n.Lk)("td",null,(0,c.v_)(e.Name),1),(0,n.Lk)("td",null,(0,c.v_)(e.Location),1),(0,n.Lk)("td",null,(0,c.v_)(e.Subcounty),1),(0,n.Lk)("td",null,(0,c.v_)(e["Financial Year"]),1),(0,n.Lk)("td",yt,[(0,n.Lk)("i",{class:(0,c.C4)(U(e.Status))},null,2),(0,n.eW)(" "+(0,c.v_)(e.Status),1)]),(0,n.Lk)("td",ht,(0,c.v_)(e.Remarks),1)],8,gt)))),128)),v.value?((0,n.uX)(),(0,n.CE)("div",Ct,[(0,n.Lk)("button",{class:"cancel",onClick:t[13]||(t[13]=e=>v.value=!v.value)},_t),(0,n.bF)(je,(0,n.v6)({onFormSubmitted:t[14]||(t[14]=e=>C(e))},(0,i.R1)(w)),null,16)])):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0),f.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",St,[(0,n.Lk)("table",null,[wt,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,i.R1)(S),((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t},[(0,n.Lk)("td",null,(0,c.v_)(t+1),1),(0,n.Lk)("td",null,(0,c.v_)(e.username),1),(0,n.Lk)("td",null,(0,c.v_)(e.role),1),(0,n.Lk)("td",{onClick:t=>Q(e.id),class:"delete"},Xt,8,Ft)])))),128)),v.value?((0,n.uX)(),(0,n.CE)("div",jt,[(0,n.Lk)("button",{class:"cancel",onClick:t[15]||(t[15]=e=>v.value=!v.value)},At),(0,n.bF)(je,(0,c._B)((0,n.Ng)((0,i.R1)(w))),null,16)])):(0,n.Q3)("",!0)])])])),f.value?((0,n.uX)(),(0,n.CE)("div",Qt,[(0,n.Lk)("p",null,(0,c.v_)(o.value)+" / "+(0,c.v_)((0,i.R1)(s)),1),(0,n.Lk)("button",{disabled:o.value===(0,i.R1)(s),onClick:t[16]||(t[16]=e=>{(0,i.i9)(X)?X.value=(0,i.R1)(_)[(0,i.R1)(_).length-1].id:X=(0,i.R1)(_)[(0,i.R1)(_).length-1].id,o.value++,I()})},It,8,Nt)])):((0,n.uX)(),(0,n.CE)("div",Ut))])])]))]))}};const Wt=(0,f.A)(Tt,[["__scopeId","data-v-779f8b51"]]);var xt=Wt;var Dt={__name:"HomeView",setup(e){return(e,t)=>((0,n.uX)(),(0,n.Wv)(xt))}};const Ot=Dt;var Vt=Ot;const Bt=[{path:"/",name:"home",component:Vt},{path:"/login",name:"/login",component:()=>a.e(594).then(a.bind(a,8758))},{path:"/start",name:"/start",component:()=>a.e(896).then(a.bind(a,2896))}],$t=(0,r.aE)({history:(0,r.LA)("/"),routes:Bt});var Yt=$t;(0,l.Ef)(u).use(Yt).mount("#app")}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var u=!0,r=0;r<l.length;r++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(u=!1,o<s&&(s=o));if(u){e.splice(c--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,l){return a.f[l](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+(594===e?"about":e)+"."+{594:"9c4d8a70",896:"a39bb884"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{594:"990f73ef",896:"92efd0ec"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";a.l=function(l,n,o,s){if(e[l])e[l].push(n);else{var u,r;if(void 0!==o)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(r=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+o),u.src=l),e[l]=[n];var k=function(t,a){u.onerror=u.onload=null,clearTimeout(v);var n=e[l];if(delete e[l],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(k.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=k.bind(null,u.onerror),u.onload=k.bind(null,u.onload),r&&document.head.appendChild(u)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,l,n,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",a.nc&&(s.nonce=a.nc);var u=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var l=a&&a.type,u=a&&a.target&&a.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+u+")");r.name="ChunkLoadError",r.code="CSS_CHUNK_LOAD_FAILED",r.type=l,r.request=u,s.parentNode&&s.parentNode.removeChild(s),o(r)}};return s.onerror=s.onload=u,s.href=t,l?l.parentNode.insertBefore(s,l.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var n=a[l],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){n=s[l],o=n.getAttribute("data-href");if(o===e||o===t)return n}},l=function(l){return new Promise((function(n,o){var s=a.miniCssF(l),u=a.p+s;if(t(s,u))return n();e(l,u,null,n,o)}))},n={524:0};a.f.miniCss=function(e,t){var a={594:1,896:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=l(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={524:0};a.f.j=function(t,l){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)l.push(n[2]);else{var o=new Promise((function(a,l){n=e[t]=[a,l]}));l.push(n[2]=o);var s=a.p+a.u(t),u=new Error,r=function(l){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=l&&("load"===l.type?"missing":l.type),s=l&&l.target&&l.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}};a.l(s,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,o,s=l[0],u=l[1],r=l[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(r)var c=r(a)}for(t&&t(l);i<s.length;i++)o=s[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},l=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(8953)}));l=a.O(l)})();
//# sourceMappingURL=app.8001d0b6.js.map