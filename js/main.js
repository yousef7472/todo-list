let container = document.querySelector(".content");
let Theinput = document.querySelector(".add input");
let addB = document.querySelector(".add .plus");
let noTask = document.querySelector(".no-task");
let count = document.querySelector(".task-count span");
let complete = document.querySelector(".task-complete span");
let maxC = 10;
window.onload = function () {
    Theinput.focus()
}
document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finshed')
    }
});
function OnKeyEnterPressDoThis() {
        if (Theinput.value === '') {
            swal(" enter any work باليز")             
        }
        else if (!isNaN(Theinput.value)) {
            swal("!ياسطا متتعبناش معاك اكتب حاجة منطقية")             
        }
       
        else{
            noTask.remove();
            // create span's
            let mainspan = document.createElement("span");
            let deleteelement = document.createElement("span")
            let text = document.createTextNode(Theinput.value)
            let deleteT = document.createTextNode("×")
            // join elements
            mainspan.appendChild(text)
            mainspan.className = 'task-box'
            deleteelement.appendChild(deleteT)
            deleteelement.className = "delete"
            mainspan.appendChild(deleteelement)
            container.appendChild(mainspan)

            Theinput.value = ''}
};
Theinput.addEventListener("keypress", function(e) {
        //        keycode 13 is an enter press from keyboard
        if (e.keyCode === 13) {
            OnKeyEnterPressDoThis();
        }
});
addB.addEventListener("click", OnKeyEnterPressDoThis);