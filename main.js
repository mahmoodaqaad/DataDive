
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {


// }




let header = document.querySelector("header")
window.onscroll = () => {
    console.log(scrollY)
    if (scrollY >= 100) {
        header.classList.add("b")
    }
    else {

        header.classList.remove("b")
    }

    sections.forEach((sec, i) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active")
                navLinks[i].classList.add("active")

                if (scrollY == 0) {
                    navLinks.forEach(link => {
                        link.classList.remove("active")
                    })
                }
            })
        }
    })
    if (scrollY == 0 || scrollY < 340) {
        navLinks.forEach(link => {
            link.classList.remove("active")
        })
    }
    document.querySelector("header .container .navbar").classList.remove("active")

}






// nav bar in 991 px 

document.querySelector(".menuBar").onclick = () => {
    document.querySelector("header .container .navbar").classList.toggle("active")


}


// start message 


let submit = document.querySelector(".submit")





let inputs = document.querySelectorAll(".contact .container form .box input")
inputs.forEach(input => {
    input.oninput = () => {
        cheaked()
        if (input.value == "") {
            input.parentElement.lastElementChild.style.display = "block"
        }

        else {
            input.parentElement.lastElementChild.style.display = "none"

        }
    }


})

function cheaked() {
    let x = 0
    inputs.forEach(input => {
        if (input.value == "")
            x++;
        submit.classList.add("desable")

    })
    if (x == 0) {
        submit.classList.remove("desable")

    }
}


// End message 
