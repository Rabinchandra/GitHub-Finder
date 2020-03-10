let searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', displayUser)

let github = new Github();
let ui = new UI();

function displayUser() {
    let user = searchInput.value;
    if(user !== '') {
        github.getUser(user)
            .then(userDetails => {
                if(userDetails.profile.message == 'Not Found') {
                    ui.showErrAlert();
                } else {
                    ui.showProfile(userDetails.profile);
                    ui.showRepos(userDetails.repos);
                    ui.offErrAlert();
                }
            });
    } else {
        ui.clearDetails();
    }
}
