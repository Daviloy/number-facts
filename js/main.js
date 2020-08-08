const factForm = document.getElementById('fact-form');
const UInumber = factForm.querySelector('#number');
const UItype = factForm.querySelector('select')

factForm.addEventListener('submit', getFact);

function getFact(event){
    // Prevent default behaviour of form
    event.preventDefault();

    // Get number from the user
    const number = UInumber.value;

    // Get fact type from user
    const type = UItype.value;

    // Validate the input fields
    const validated = validate(number);

    if(validated){
        // Query the Numbers API
        axios.get(`http://numbersapi.com/${number}/${type}`)
        .then(response => {
            let fact = response.data;
            
            let output = `<h2 class="capitalize">${type} Fact for ${number}</h2>`

            output += `<p class="lead">${response.data}</p>`

            document.getElementById('result').innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
    }
}

function validate(number){
    // Validate the input fields
    if(number.length === 0){
        UInumber.style.borderBottomColor = 'red';
        return false;
    }else{
        UInumber.style.borderBottomColor = 'green';
        return true;
    }
}