import"./assets/styles-64221358.js";const o=()=>`
    <form class="feedback-form" autocomplete="off">
        <label>
            Email
            <input type="email" name="email" autofocus />
        </label>
        <label>
            Message
            <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
    </form>`,r=document.querySelector(".task-form");r.innerHTML=o();const e={email:"",message:""},a=document.querySelector(".feedback-form"),m=JSON.parse(localStorage.getItem("feedback-form-state"));m&&(e.email=m.email||"",e.message=m.message||"",a.email.value=e.email,a.message.value=e.message);a.addEventListener("input",t=>{const{name:s,value:l}=t.target;e[s]=l.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.email.value="",a.message.value=""});
//# sourceMappingURL=commonHelpers2.js.map
