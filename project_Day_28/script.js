const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


async function getUser(username) {
    try{
    const { data } = await axios(APIURL + username)

    createuserCard(data);
    getRespos(username)

    }
    catch(e){ 
        if(e.response.status == 404){
             createErrorCard('There is no profile with that username'); 
            }
        }
}

async function getRespos(username) {
    try{
        const { data } = await axios(APIURL + username + '/repos?sort=created') 
    
        addReposToCard(data);
        }
        catch(e){ 
                 createErrorCard('Problem fetching repos'); 
                
            }
}


function createErrorCard(message) {
    const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos){

    const reposElement = document.getElementById('repos')

    repos
    .slice(0, 10)
    .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposElement.appendChild(repoEl)
    })
}

function createuserCard(user) {
    const cardHtml = ` 
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
    
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>

        <div id="repos">
            
        </div>
    
    </div>
</div>`

main.innerHTML = cardHtml
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const user = search.value;

    if(user) {
        getUser(user);

        search.value = ''
    }
})