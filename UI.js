class UI {
    constructor() {
        this.detailsBox = document.getElementById('user-details-box');
        this.alertBox = document.getElementById('alert');
    }
    showProfile(profile) {
        this.detailsBox.innerHTML = `
        <div class="profile">
        <div class="profile-pic">
            <img src="${profile.avatar_url}"><br>
            <a href="${profile.html_url}"><button>View Profile</button></a>
        </div>
        <div class="profile-details">
            <button class="profile-stats">Public-repos: ${profile.public_repos}</button>
            <button class="profile-stats">Public-gist: ${profile.public_gist}</button>
            <button class="profile-stats">Followers: ${profile.followers}</button>
            <button class="profile-stats">Following: ${profile.following}</button>
            <ul>
                <li>Company: ${profile.company}</li>
                <li>Website: ${profile.blog}</li>
                <li>Location: ${profile.location}</li>
                <li>Joining Date: ${profile.created_at}</li>
            </ul>
        </div>
        </div>
        `;
    }

    showRepos(repos) {
        let reposList = '';
        console.log(repos);
        repos.forEach(re => {
            reposList += `<li>${re.name}</li>`;
        });
        this.detailsBox.innerHTML += `
        <div class="repository">
            <h4>Latest Repositories</h4>
            <ul>${reposList}</ul>
        </div>
        `;
    }

    showErrAlert() {
        this.alertBox.style.display = 'block';
        setTimeout(() => {
          this.alertBox.style.display = 'none';
        }, 3000);
    }

    offErrAlert() {
      this.alertBox.style.display = "none";
    }

    clearDetails() {
        this.detailsBox.innerHTML = '';
    }
}
