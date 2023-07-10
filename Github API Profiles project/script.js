const apiUrl = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(userName) {
  try {
    const { data } = await axios(apiUrl + userName);
    createUser(data);
    getRepos(userName);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('Learn to spell bro weak ass');
    }
  }
}

async function getRepos(userName) {
  try {
    const { data } = await axios(apiUrl + userName + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('Can not load repos');
    }
  }
}

function createUser(user) {
  const cardHTML = `

  <div class="max-w-xl mx-auto mt-12 ">
      <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center ">
              <img src="${user.avatar_url}" id="avatar" class="w-16 h-16 rounded-full mr-4 ">
              <div>
                  <h2 class="text-xl font-semibold">${user.name}</h2>
                  <p class="text-gray-600 mt-2">
                      ${user.bio}
                  </p>

                  <div class="mt-2  ">
                      <ul class="flex justify-between p-0">
                          <li >${user.followers} <strong>Followers</strong></li>
                          <li >${user.following} <strong>Following</strong></li>
                          <li >${user.public_repos} <strong>Following</strong></li>
                      </ul>
                  </div>

                  <div id="repos">

                  </div>

                  </div>
              </div>
          </div>
      </div>
  </div>

   
     
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
 

  <div class="max-w-xl mx-auto mt-12 ">
  <div class="bg-white shadow-lg rounded-lg p-6">
      <div class="flex items-center ">
          
          <div>
              <h1 class="text-xl font-semibold">${msg}</h1>
        
          </div>
      </div>
  </div>
</div>
    
 </div> 
    
    `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a');

    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});
