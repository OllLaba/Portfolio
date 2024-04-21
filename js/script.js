const buttonresume = document.getElementById('buttonresume');
const buttonprojects = document.getElementById('buttonprojects');
const buttoncertificates = document.getElementById('buttoncertificates');
const resume = document.getElementById('resume');
const projects = document.getElementById('projects');
const certificates = document.getElementById('certificates');

// После загрузки страницы изменить в iframe src
  window.onload = () => {  
    setTimeout(() => {
        const iframeP1 = project1.querySelector('#iframeP1');
        iframeP1.src = 'https://olllaba.github.io/Wallpaper/';
    }, 50);
    setTimeout(() => {
        const iframeP2 = project2.querySelector('#iframeP2');
        iframeP2.src = 'https://olllaba.github.io/PetNaturals/';
    }, 500);
    setTimeout(() => {
        const iframeResume = resume.querySelector('iframe');
        iframeResume.src = 'https://drive.google.com/file/d/1bARGu-TUk3O6YrjBmW-R5GbDoMbOa-RX/preview';
    }, 2000);

    setTimeout(() => {
        const iframeC1 = certificates.querySelector('#frameC1');
        const iframeC2 = certificates.querySelector('#frameC2');
        iframeC1.src = 'https://drive.google.com/file/d/1pue16yGfDb29RlFxBdB41cv0A6wdPe7z/preview';
        iframeC2.src = 'https://drive.google.com/file/d/13QDpwvAE6GKalYm7F-LJ5Adu0DtrO6m5/preview';
    }, 3000);
}
// Кнопки
buttonresume.addEventListener('click', () => {
    resume.style.display = 'flex';
    projects.style.display = 'none';
    certificates.style.display = 'none';
    buttonresume.style.backgroundColor = 'white';
    buttonprojects.style.backgroundColor = 'rgb(214, 101, 126)';
    buttoncertificates.style.backgroundColor = 'rgb(214, 101, 126)';
});
buttonprojects.addEventListener('click', () => {
    resume.style.display = 'none';
    projects.style.display = 'flex';
    certificates.style.display = 'none';
    buttonprojects.style.backgroundColor = 'white';
    buttonresume.style.backgroundColor = 'rgb(214, 101, 126)';
    buttoncertificates.style.backgroundColor = 'rgb(214, 101, 126)';
});
buttoncertificates.addEventListener('click', () => {
    resume.style.display = 'none';
    projects.style.display = 'none';
    certificates.style.display = 'flex';
    buttoncertificates.style.backgroundColor = 'white';
    buttonprojects.style.backgroundColor = 'rgb(214, 101, 126)';
    buttonresume.style.backgroundColor = 'rgb(214, 101, 126)';
});

