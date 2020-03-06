// grab search element
// display response data from Gitgub api
const searchUser = document.querySelector('.searchUser');
//grab dic that display data
const userCardInfo = document.querySelector('.userInfoCard'); 

// click search
searchUser.addEventListener('click', (e) =>{
	// grab data from text info field
	let usernameInputValue = document.querySelector('.usernamInput').value;
	const xhrRequest = new XMLHttpRequest();

		//use data to grab user for Github api
		xhrRequest.open("GET",'https://api.github.com/users/${usernameInputValue');
		xhrRequest.onreadystatechange - function(){
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				const response = JSON.parse(this.response);
				// display response dat from Github api
		
				userCardInfo.innerHTML =
				<div>
				 <img src ='${response.avatar_url}' height="300"/>
				</div>
				<div class="cardBody">

					<h1>${response.name}</h1>
					<h2>${response.login}</h2>
					<p>${response.bio}</p>
					<div class="card Row itemsSpaceBetween">
						<div class="cardItemInfo">
							<h4>Public Repos</h4>
							<p>${response.public_repos}</p>
						</div>

						<div class="cardItemInfo">
							<h4>Followers</h4>
							<p>${response.followers}</p>
						</div>
					</div>

					<a target="_blank" href="${response.html_url}" class ="btn btnBlue">Visit Profile</a>
				</div>
				
			}
			
		}
		xhrRequest.send();
})