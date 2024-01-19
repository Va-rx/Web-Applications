let formData = new FormData(document.querySelector('form'))

document.getElementById("button").onclick = function(){

    if((document.getElementById("name").checkValidity() && document.getElementById("phone").checkValidity()) == false) {
        return;
    }
    let formData = new FormData(document.querySelector('form'))

    let name = formData.get("name");
    let phone = formData.get("phone");
    phone = phone.replaceAll(' ', '');

    let section = document.createElement("div");
    section.classList.add('contact');

    let section_name = document.createElement('p');
    section_name.classList.add("section-name-info");
    section_name.textContent = name;

    let section_phone = document.createElement('p');
    section_phone.classList.add("section-phone-info");
    section_phone.textContent = phone;

    let section_info = document.createElement('div');
    section_info.classList.add('section-info')

    let section_delete = document.createElement('picture');
    section_delete.classList.add('section-delete');
    section_delete.innerHTML = '<img src ="trash.png" alt ="bin" tag="trash-photo" style="width:50px; height:50px;">'

    section.appendChild(section_info);
    section_info.appendChild(section_name);
    section_info.appendChild(section_phone);
    section.appendChild(section_delete);

    section_delete.addEventListener('click', deleteContact);

    document.getElementById("contacts").appendChild(section);
}

function deleteContact(){
    let parent = document.getElementById("contacts");
    let index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}