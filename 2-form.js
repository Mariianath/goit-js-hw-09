import"./assets/modulepreload-polyfill-ec808ebb.js";import"./index.js";const t=document.querySelector(".feedback-form"),s="feedback-form-state",e={email:"",message:""},l=localStorage.getItem(s);l&&(Object.assign(e,JSON.parse(l)),t.email.value=e.email||"",t.message.value=e.message||"");t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),a.target.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map