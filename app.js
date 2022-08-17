// const popup = {
//     btn: document.querySelector(".msg-btn"),
//     msgInput: document.querySelector(".msg-input"),
//     sendMessage(){
//        const newmsg = this.msgInput.value
//         console.log(newmsg)
//     },
//     onSubmit(){
//         this.btn.addEventListener("click",this.sendMessage)
//     }
// }
// popup.onSubmit()

const btn = document.querySelector(".msg-btn")
const msgInput = document.querySelector(".msg-input")

btn.addEventListener("click",sendMessage)

function sendMessage(){
    console.log(msgInput.value)
    msgInput.value= ""
    openPopup(msgInput.value)
}

function openPopup(message){

}