


//image Slider

let slideIndex = 0;
runSlides();

function runSlides() {
  let i;
  let slides = document.getElementsByClassName("profile-photo");
  let dots = document.getElementsByClassName("point");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(runSlides, 5000);
}



//charts

const progressPercent = document.querySelectorAll(".progress-percent");
const myskills = document.querySelector(".myprogressbars");

function showProgress() {
	progressPercent.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.width = `${value}%`;
	});
}
function hideProgress() {
	progressPercent.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}
window.addEventListener("scroll", () => {
	const sectionPos = myskills.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;
	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})



//

let SlideIndex = 0;
showSlides(SlideIndex);

function plusSlides(n) {
	showSlides(SlideIndex += n);
}
function currentSlider(n) {
	showSlides(SlideIndex = n);
}
function showSlides(n) {
	let i;
	let x = document.getElementsByClassName("personRecommendations");
	let y = document.getElementsByClassName("slidepoints");
	if (n > x.length) { SlideIndex = 1 }
	if (n < 1) { SlideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[SlideIndex - 1].style.display = "flex";
}




// latest projects
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("sidebar");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//



async function getUsers() {
  try {
    const response = await fetch("http://api.kesho.me/v1/user-test/contact");
    const users = await response.json();
  } catch (e) {
    console.log("Error - ", e);
  }
}

async function createUser(userData) {
  try {
    const response = await fetch("http://api.kesho.me/v1/user-test/contact", {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });

    await response.json();
    await getUsers(); 
  } catch (e) {
    console.log("Error - ", e);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    first_name: yourname.value,
    email: email.value,
    website: website.value,
    massage: massage.value,
  };

  if (yourname.value === "") {
  
    await createUser(userData);
  }

  formcontent.reset();
});




const yourname = document.querySelector(".yourname");
const email = document.querySelector("#emailaddress");
const website = document.querySelector(".yourwebsite");
const massage = document.querySelector("#messagearea");
const submit = document.querySelector(".submit");
const formcontent = document.querySelector(".form-content");

function myalertFunction() {
	alert("Thank you for getting in touch! We appreciate you contacting us.");
}
const modalOpenBtn = document.querySelector('.submit');
modalOpenBtn.addEventListener('click', () => {
   myalertFunction() ;
})



form.addEventListener('submit', e => {
    e.preventDefault();
    try {
      console.log(email.value);
    } catch (e) {
      console.log('catch error', e);
    }
    const isEmailValid = validateEmail();
    if(isEmailValid){
      console.log('Call to backend api');
    }
  });
  
  function validateEmail(){
   
    if(!email.value.includes('@') || !emailInput.value.includes('.')){
      emailInput.classList.add('has-error');
      emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
      return false;
    }
    emailInput.classList.remove('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }