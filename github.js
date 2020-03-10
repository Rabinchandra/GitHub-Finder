class Github {
    constructor() {
        this.client_id = "01601e9237a82a74b6cc";
        this.client_secret = "056ffb500163017d40b485863ee0cf8c9d0554ec";
        this.res_count = 5;
        this.res_sort = 'created: asc';
    }

    async getUser(user) {
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.res_count}&sort=${this.res_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileRes.json();
        const repos = await reposRes.json();
        return {
            profile,
            repos
        };
    }
}