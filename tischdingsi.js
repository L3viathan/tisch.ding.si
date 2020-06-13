const API_ROOT = "https://apy4i.l3vi.de"
function replace_with_flipped(string) {
    axios.get(API_ROOT + "/flip/" + string)
        .then(function(response) {
            var flipped = response.data;
            var helper = document.querySelector("#helper").innerHTML = flipped;
            var fixed = "(╯°□°）╯︵" + flipped;
            document.querySelector("#tischdings").value = fixed;
            document.title = fixed;
        })
        .catch(function(error) {
            console.log(error);
        });
}
