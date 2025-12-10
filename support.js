document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let issue = document.getElementById("issue").value;
  let message = document.getElementById("message").value;

  let ticket = {
    name,
    email,
    issue,
    message,
    status: "Pending",
    time: new Date().toLocaleString()
  };

  let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  tickets.push(ticket);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  document.getElementById("successMsg").innerText =
    "✅ Your support request has been submitted successfully.";

  document.getElementById("supportForm").reset();
});
