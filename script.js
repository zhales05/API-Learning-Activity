document.getElementById("emailSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("emailInput").value;
    if (value === "")
      return;
    console.log(value); 

   

     const url = "https://api.agify.io?name=" + value;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let results = "";
        results ="<h2>Results</h2>";
        results += "<p> Your age should be: ";
        results += json.age;
        results += "</p>";
       document.getElementById("output").innerHTML = results;
       document.getElementById("output").style.border = "thick solid #000000";
      });
});