fetch("http://localhost:3000/stats")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("API Error:", error);
    });
