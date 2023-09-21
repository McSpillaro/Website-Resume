const skillsSoftware = [
    "Microsoft Office",
    "Google Suite",
    "Visual Studio Code",
    "GitHub",
    "MATLAB",
    "Python"
]

const skillsInstrumentation = [
    "IR",
    "UV-Vis Spectroscopy",
    "Liquid Chromatography",
    "Centrifuge",
    "Sonicator",
    "Soldering"
]

const skillsLabTech =[
    "Organic Synthesis",
    "Organic Purification",
    "Titration",
    "Distillation",
    "Rotary Evaporation",
    "Filtration",
    "Crystallization",
    "Centrifugation",
]

const contentElement_Software = document.getElementById('info_software_skills')
const contentElement_Instrumentation = document.getElementById('info_instrumentation_skills')
const contentElement_Lab = document.getElementById('info_lab_skills')

function updateSkills() {
    contentElement_Software.innerHTML = "<ul>" + skillsSoftware.map(item => `<li>${item}</li>`).join('') + "</ul>";
    contentElement_Instrumentation.innerHTML = "<ul>" + skillsInstrumentation.map(item => `<li>${item}</li>`).join('') + "</ul>";
    contentElement_Lab.innerHTML = "<ul>" + skillsLabTech.map(item => `<li>${item}</li>`).join('') + "</ul>";
}