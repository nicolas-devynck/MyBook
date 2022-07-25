/* key */
var key = document.getElementById("key");
var id = key.innerHTML;
key.style.display ="none";
console.log(id);

/* Titre */
var button_h1_edit = document.getElementById("button-h1-edit");
var button_h1_edit_submit = document.getElementById("button-h1-edit-submit");
var h1 = document.getElementsByTagName('h1')[0];
var storage_h1 = localStorage.getItem(id+"-"+"h1");

button_h1_edit_submit.style.display ="none";
if (storage_h1 == null || storage_h1 == "<br>" || storage_h1 == "") {
    localStorage.setItem(id+"-"+"h1","Null");
    h1.innerHTML = "Null";
}
else {
    h1.innerHTML = storage_h1
}

button_h1_edit.addEventListener("click", function() {
    h1.contentEditable=true
    button_h1_edit_submit.style.display ="block";
    button_h1_edit.style.display ="none";
});
button_h1_edit_submit.addEventListener("click", function() {
    h1.contentEditable=false
    button_h1_edit_submit.style.display ="none";
    button_h1_edit.style.display ="block";
    localStorage.setItem(id+"-"+"h1",h1.innerHTML);
});

/* head */
var title = document.getElementsByTagName('title')[0];
if (storage_h1 == null || storage_h1 == "<br>" || storage_h1 == "") {
    localStorage.setItem(id+"-"+"h1","Null");
    title.innerHTML = "Null";
}
else {
    title.innerHTML = storage_h1
}

/* description */
var button_des_edit = document.getElementById("button-des-edit");
var button_des_edit_submit = document.getElementById("button-des-edit-submit");
var des = document.getElementById('des');
var storage_des = localStorage.getItem(id+"-"+"des");

button_des_edit_submit.style.display ="none";
if (storage_des == null || storage_des == "<br>" || storage_des == "") {
    localStorage.setItem(id+"-"+"des","Null");
    des.innerHTML = "Null";
}
else {
    des.innerHTML = storage_des
}

button_des_edit.addEventListener("click", function() {
    des.contentEditable=true
    button_des_edit_submit.style.display ="block";
    button_des_edit.style.display ="none";
});
button_des_edit_submit.addEventListener("click", function() {
    des.contentEditable=false
    button_des_edit_submit.style.display ="none";
    button_des_edit.style.display ="block";
    localStorage.setItem(id+"-"+"des",des.innerHTML);
});

/* Préparation */
var button_process_edit = document.getElementById("button-process-edit");
var button_process_edit_submit = document.getElementById("button-process-edit-submit");
var process = document.getElementById('process');
var storage_process = localStorage.getItem(id+"-"+"process");

button_process_edit_submit.style.display ="none";
if (storage_process == null || storage_process == "<br>" || storage_process == "") {
    localStorage.setItem(id+"-"+"process","Null");
    process.innerHTML = "Null";
}
else {
    process.innerHTML = storage_process
}

button_process_edit.addEventListener("click", function() {
    process.contentEditable=true
    button_process_edit_submit.style.display ="block";
    button_process_edit.style.display ="none";
});
button_process_edit_submit.addEventListener("click", function() {
    process.contentEditable=false
    button_process_edit_submit.style.display ="none";
    button_process_edit.style.display ="block";
    localStorage.setItem(id+"-"+"process",process.innerHTML);
});

