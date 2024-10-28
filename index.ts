let showInput:boolean = false



const handleClickEvent = (): void =>{
    const inputDisplay = document.querySelectorAll<HTMLElement>(".input-section")
    showInput = !showInput; 
    inputDisplay.forEach((visible)=>(
        visible.style.display = showInput ? "flex" : "none"
    ))
    const toogle = document.querySelector<HTMLButtonElement>('#button')
    toogle.innerText = showInput ? "Hide all sections" : "Show All Sections"
}


const form = document.getElementById('form')?.addEventListener('submit',(e)=>{
    e.preventDefault()

    const name:string = document.getElementById('firstName').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const education = document.getElementById('education').value
    const skills = document.getElementById('skills').value
    const exp = document.getElementById('exp').value
    
    const output = 
    document.getElementById('resumeOutput')
    const resume =
    `
    <div class='resume-container'>
    <h2>Resume</h2>
    <p >Name:${name} </p>
    <p>Email:${email} </p>
    <p>Phone:${number} </p>
    <h3>Education</h3>
    ${education}
    <h3>Skills</h3>
    ${skills}
    <h3>Work Experience</h3>
    ${exp}
    </div>`
    const resumeOutputElement = document.getElementById('resume')
    if(resume){
        resumeOutputElement.innerHTML = resume
    }
})

    