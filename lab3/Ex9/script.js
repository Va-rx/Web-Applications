let position = 0;
const employees = document.getElementsByClassName("employee");
const totalEmployees = employees.length;

document.getElementById("rightButton").addEventListener("click", nextSlide);
document.getElementById("leftButton").addEventListener("click", prevSlide);
document.getElementById("button").addEventListener("click", randomSlide);

profiles = document.querySelectorAll('.employee');

function randomSlide() {

    profiles.forEach(profile => {
        profile.style.animation = "slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    })

    let actualPosition = position;

    do {
        position = Math.round(Math.random() * (totalEmployees-1 - 0) + 0);
    } while(position == actualPosition);

    updateSlidePosition();
}

function updateSlidePosition() {

    for(let employee of employees) {
        employee.classList.remove("employee-visible");
        employee.classList.add("employee");
    }

    employees[position].classList.add("employee-visible");
}

function nextSlide() {

    profiles.forEach(profile => {
        profile.style.animation = "slide-in-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    })

    if(position === totalEmployees - 1) {
        position = 0;
    } else {
        position++;
    }
    
    updateSlidePosition();

}

function prevSlide() {

    profiles.forEach(profile => {
        profile.style.animation = "slide-in-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    })

    if(position === 0) {
        position = totalEmployees - 1;
    } else {
        position--;
    }

    updateSlidePosition();
}
