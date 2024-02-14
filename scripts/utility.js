function hideElementById(eleementId){
    const element = document.getElementById(eleementId)
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}