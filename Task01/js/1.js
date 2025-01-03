
url = 'http://localhost:3000/users';

function btn1(){
  window.location.href = "page2.html";
}

function fetchUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const userList = document.getElementById("userlist");

      

      userList.innerHTML = data
        .map(
          (user) => `
          <div class="user-card">
            <div>
              ID: ${user.id} <br>
              NAME: ${user.name} <br>
              NUMBER: ${user.mobile} <br>
              EMAIL: ${user.email} <br>
              MARKS: ${user.marks} <br>
              STATUS: ${user.status} <br>
            </div> 
            <br> 
            <form action="">
                <input type="button" id="bt2" onclick="btn2(${user.id})" value="EDIT">
                <input type="button" id="bt3" onclick="btn3(${user.id})" value="DELETE">
            </form>
          </div>
          <br><br>
        `
        )
        .join("");
    })
    .catch((error) => console.error("Error in fetching the data"));
}

fetchUsers();

function btn2(userId) {
  alert('Edit user with ID: ' + userId);
}

// Function to handle Delete button
function btn3(userId) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${url}/${userId}`, {
      method: 'DELETE',
    })
      .then(() => fetchUsers()) // Refresh the user list
      .catch((error) => console.error('Error deleting user:', error));
  }
}