// Example API URL (placeholder API for users)
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Get the card container
const cardContainer = document.getElementById("cardContainer");

// Fetch data from the API
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Use .map() to iterate over the data and create cards
        const cards = data.map((user) => {
            return `
                <div class="card">
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                </div>
            `;
        });

        // Append the cards to the container
        cardContainer.innerHTML = cards.join("");
    })
    .catch((error) => {
        console.error("Error fetching API data:", error);
        cardContainer.innerHTML = "<p>Failed to load data.</p>";
    });
