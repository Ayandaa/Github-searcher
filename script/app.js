//iniatizing github constructor
const github = new Github;

//Initializing ui constructor
const ui = new UI;

//Search Input
const searchUser = document.querySelector('#searchUser');
//Event listener for search user input field
searchUser.addEventListener('keyup', (e)=>{
    //Get text typed in
    const userInput = e.target.value;
    //conditional to check whether input field is blank and execute if it's not
    if(userInput){
        github.getUser(userInput)
        .then( (response) => {
            //Send user alert if entered user is not found
            if(isNaN(response))  {
                //Show profile in the DOM
                ui.showProfile(response.profile);
                //clear error
                ui.clearError();
            }
            else if (response === 404){
                //the second parameter is a bootstrap class
                setTimeout( ()=>ui.showAlert('User not found','alert alert-danger'),3000 );
                ;
                
            }
            else{
                ui.showAlert(`${response}`,'alert alert-danger');
                setTimeout( ()=> ui.clearError(),3000 );
            }
            
        })
        .catch(err => console.log(err))
    }
    else{
        ui.clearProfile();
    }
    
} );
