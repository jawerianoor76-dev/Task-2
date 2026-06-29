function nextStep(step){

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";

    document.getElementById("step" + step).style.display = "block";

    updateProgress(step);
}

function prevStep(step){

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";

    document.getElementById("step" + step).style.display = "block";

    updateProgress(step);
}

function updateProgress(step){

    let progressBar = document.getElementById("progressBar");

    if(step === 1){
        progressBar.style.width = "33%";
        progressBar.innerText = "Step 1";
    }

    if(step === 2){
        progressBar.style.width = "66%";
        progressBar.innerText = "Step 2";
    }

    if(step === 3){
        progressBar.style.width = "100%";
        progressBar.innerText = "Step 3";
    }
}

function finishOnboarding(){

    window.location.href = "success.html";

}

