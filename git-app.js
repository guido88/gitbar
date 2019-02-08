//test s
const searchButton = document.querySelector(".git-button");
const inputValue = document.querySelector("#git-user");
const resultList = document.querySelector(".git-search-list");
const information = document.querySelector(".information");

import config from "./config.js";

 
const getUsers = async (user) => {

	const api_call = await fetch(`https://api.github.com/search/users?q=${user}&client_id=${config.client_id}&client_secret=${config.client_secret}`);

	const data = await api_call.json();

	return { data }
};



const showData = () => {

	getUsers(inputValue.value).then((res) =>{
			console.log(res);
	});
};


inputValue.addEventListener("input", _.debounce(() => {
		
	if(inputValue.value.length>1){
		getUsers(inputValue.value).then((res) =>{
			console.log(res);
			resultList.innerHTML="";
			for(const user of res.data.items){

				const div = createDivUser(user);

				div.addEventListener("click", () =>{
					information.innerHTML="";
					information.appendChild(createImg(user.avatar_url));
					information.appendChild(createInfoUser("Username: "+user.login));
					information.appendChild(createInfoUrl(user.html_url));
					information.classList.remove("toggle");
				});

				resultList.appendChild(div);
			}

	}); }

},800));


const createDivUser = (user) => {
	
	let div = document.createElement("div");
	div.classList.add("div-user");
	div.innerHTML = user.login;

	return div;
};

const createInfoUser = (info) => {
	
	let span = document.createElement("span");
	span.innerHTML = info;

	return span;
};


const createInfoUrl = (info) => {
	
	let span = document.createElement("span");
	span.innerHTML="Github URL: ";

	let a = document.createElement("a");
	a.setAttribute("href",info);
	a.innerHTML=info;

	a.setAttribute("target","_blank");

	span.appendChild(a);
	return span;
};

const createImg = (url_img) => {
	
	let img = document.createElement("img");
	img.setAttribute("src",url_img);

	return img;
};


document.addEventListener("click", (e) =>{
		
		if(e.target!=inputValue)
		resultList.innerHTML="";
});
