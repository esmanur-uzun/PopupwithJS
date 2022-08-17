
const modalOpen = document.querySelector(".msg-btn")
const msgInput = document.querySelector(".msg-input")
const closeModal = document.querySelector("body")
const modalMsg = document.querySelector(".modal-msg")

msgInput.addEventListener("keypress",(e) =>{
    if(e.key === "Enter"){
        openPopup(msgInput.value)
        modalOpen.click()
        msgInput.value = ""
        e.preventDefault()
    }
})

function openPopup(message){
    const msg = document.querySelector("p")
    msg.innerText= message
    modalMsg.style.display = "flex"
}
closeModal.addEventListener("click",(e) =>{
    
    if(e.target.className === "modal-msg text-center" || e.target.className === "btn close-modal" || e.target.className === "fa fa-times"){
         modalMsg.style.display = "none"
    }
   
})
