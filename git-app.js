const searchButton = document.querySelector(".git-button");
const inputValue = document.querySelector("#git-user");


const client_secret = "c3aaf3585174b2f2f9b1c82dae1e0dae539c1d25";
const client_id = "Iv1.e39651f823cce1c7";

const getUsers = async (user) => {

	const api_call = await fetch(`https://api.github.com/search/users?q=${user}&client_id=${client_id}&client_secret=${client_secret}`);

	const data = await api_call.json();

	return { data }
};



const showData = () => {

	getUsers(inputValue.value).then((res) =>{
			console.log(res);
	});
};


searchButton.addEventListener("click", () => {

		showData();

});


// 52cfce67982765ef6235afb88eca9463f6903068