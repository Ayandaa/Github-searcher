class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
    //display profile
    showProfile(user){
        //the classes are bootstrap classes
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
              <div class="row">
                <div class="col-md-3">
                  <img class="img-fluid mb-2" src="${user.avatar_url}">
                  <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">
                      Public repos: ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary">
                      Public Gists: ${user.public_gists}
                    </span>
                    <span class="badge badge-success">
                      Followers: ${user.followers}
                    </span>
                    <span class="badge badge-info">
                      Following: ${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
              </div>
              <h3 class="page-heading mb-3">Latest Repos</h3>
              <div id="repos"></div>
            </div>
        `;
    }
    //show user not found mesage
    showAlert(message, className){
        if (document.querySelector('.alert') ){
            document.querySelector('.alert').innerHTML = message;
        }
        else {
            //create div
            const div = document.createElement('div');
             //adding class to the div
            div.className = className;
             //adding message inside div
             div.appendChild(document.createTextNode(message) );
            //adding it to parent
            const container = document.querySelector('.searchContainer');
            //get search box
             const search = document.querySelector('.search');
            //insert div before searchbox
            container.insertBefore(div,search);
        }
        
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //clear error
    clearError(){
        //first remove error if there's any
        if (document.querySelector('.alert') ){
            document.querySelector('.alert').remove();
        }
    }
}