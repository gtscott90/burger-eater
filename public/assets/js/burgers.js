


// Grab the buttons by class to change their eaten status
const changeEatenBtns = deocument.querySelectorAll('.change-eaten');

if(changeEatenBtns) {
    changeEatenBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-id");
            const newDevour = event.target.getAttribute("data-newdevour");
            const newDevourStatus = {
                devoured: newDevour,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
    
                body: JSON.stringify(newDevourStatus),
              }).then((response) => {
                
                if (response.ok) {
                  console.log(`changed devoured to: ${newDevour}`);
                  location.reload('/');
                } else {
                  alert('something went wrong!');
                }
              });
        });
    });
}

// Add a new Burger
const createBurgerBtn = document.getElementById("create-form");
if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (event) => {
      event.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById('bgr').value.trim(),
        devoured: false
      };