const state = document.querySelector('.statetop');
const thanks = document.querySelector('.thanks');

document.querySelector('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputs = document.querySelectorAll("input[name='rating']");

    let rate = 0;
    for(let i=0; i<inputs.length; ++i){
        if(inputs[i].checked){
            rate=+inputs[i].value;
            break;
        }
    }

    const rateElement = document.querySelector('.rate__selected');
    rateElement.innerHTML=rate;

    state.classList.toggle("hidden");
    thanks.classList.toggle("hidden");

});