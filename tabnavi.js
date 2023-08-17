function _class(name){
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i = 0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("actives")
    [0].classList.remove("actives");
    tabPanes[i].classList.add("actives");

    _class("tab-indicator")[0].style.top = `calc(72px + ${i*90}px)` ;

    _class("tab-content")[0].getElementsByClassName("actives")
    [0].classList.remove("actives");

    _class("tab-content")[0].getElementsByTagName("div")
    [i].classList.add("actives");
  })
}



/*let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

/*const job1 = document.querySelector('#job1');

function toggleJobDetails(job) {
  job.classList.toggle('active');
  const jobDetails = job.querySelector('.job-details');
  if (job.classList.contains('active')) {
    jobDetails.style.display = 'block';
  } else {
    jobDetails.style.display = 'none';
  }
}

job1.addEventListener('click', function() {
  toggleJobDetails(job1);
});





/*
const job1 = document.querySelector('#job1');
job1.addEventListener('click', function() {
  const jobDesc = job1.querySelector('#experience .job-desc');
  const jobDates = job1.querySelector('#experience .job-dates');
  jobDesc.classList.toggle('#show');
  jobDates.classList.toggle('show');
});








/*const job1 = document.querySelector('#experience ul #job1');
job1.addEventListener('click', function() {
  const jobDescription = 'This is the job description for Workplace 1';
  const dates = 'Dates of employment: 2020-2021';
  job1.innerHTML += `<p>${jobDescription}</p><p>${dates}</p>`;
});

const job2 = document.querySelector('experience ul /#job2');
job2.addEventListener('click', function() {
  const jobDescription = 'This is the job description for Workplace 2';
  const dates = 'Dates of employment: 2018-2020';
  job2.innerHTML += `<p>${jobDescription}</p><p>${dates}</p>`;
});


/*const jobTitles = document.querySelectorAll('#experience ul li .job-title');

jobTitles.forEach((jobTitle) => {
  jobTitle.addEventListener('click', () => {
    const jobDescription = jobTitle.nextElementSibling;
    const jobDate = jobDescription.nextElementSibling;
    
    jobDescription.classList.toggle('show');
    jobDate.classList.toggle('show');
  });
});



const workplaces = {
    workplace1: {
      name: "IT Risk & Governance Consultant",
      description: "♦︎  I worked here as a Software Developer and Software Analyst.",
      date: "2022-2023"
    },
    workplace2: {
      name: "Software Engineering Intern",
      description: "♦︎  I worked here as a Software Developer and Software Analyst.",
      date: "2021-2021"
    },
  };
  
  const experienceSection = document.querySelector(".experience-section");
  const jobDescription = document.querySelector("#job-description");
  const workplaceName = document.querySelector("#workplace-name");
  const jobDescriptionText = document.querySelector("#job-description-text");
  const jobDate = document.querySelector("#job-date");
  
  experienceSection.addEventListener("click", function(event) {
    const workplaceId = event.target.id;
    if (workplaceId) {
      const workplace = workplaces[workplaceId];
      workplaceName.textContent = workplace.name;
      jobDescriptionText.textContent = workplace.description;
      jobDate.textContent = workplace.date;
      jobDescription.style.display = "block";
    }
  });

---------------------
  // Get all job elements
const jobs = document.querySelectorAll('.job');

// Get all job description elements
const jobDescriptions = document.querySelectorAll('.job-description');

// Loop through each job element
jobs.forEach(function(job) {
  // Add click event listener to job element
  job.addEventListener('click', function() {
    // Loop through each job description element
    jobDescriptions.forEach(function(jobDescription) {
      // Hide all job description elements
      jobDescription.classList.remove('show');
    });
    // Get the job description element corresponding to the clicked job element
    const jobDescription = document.querySelector('#job-description' + job.id.slice(3));
    // Show the corresponding job description element
    jobDescription.classList.add('show');
  });
});
*/