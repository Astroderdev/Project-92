function addUser(){
          var user1 = document.getElementById("user1").value;
          var user2 = document.getElementById("user2").value;
          console.log(user1 + " , " + user2);

          localStorage.setItem("player_1", user1);
          localStorage.setItem("player_2", user2);
          window.location = "game.html" ;

}