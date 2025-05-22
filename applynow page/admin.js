const tableBody = document.getElementById("tableBody");

fetch("https://your-backend-url.com/admin") // ← Replace with your backend API URL
  .then((response) => response.json())
  .then((data) => {
    data.forEach((applicant, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${applicant.name}</td>
        <td>${applicant.email}</td>
        <td>${applicant.phone}</td>
        <td><a href="${applicant.resume}" target="_blank">View Resume</a></td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching applicant data:", error);
    tableBody.innerHTML = `<tr><td colspan="5">Error loading data.</td></tr>`;
  });
