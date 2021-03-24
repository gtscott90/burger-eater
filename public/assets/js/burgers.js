document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }


// Grab the buttons by class to change their eaten status
const changeEatenBtns = document.querySelectorAll('.change-devoured');

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
        devoured: false,
      };
      // Send POST request to create a new quote
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('bgr').value = '';

         // Reload the page so the user can see the new quote
         console.log('Created a new Burger!');
         location.reload();
       });
     });
   }
});

