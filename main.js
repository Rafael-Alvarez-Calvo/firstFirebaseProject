function initDataBase(){

    let firebaseConfig = {
        apiKey: "AIzaSyBAoSCjAPg9lxPNpRo_sSPD81msNKskE0s",
        authDomain: "firstproject-b4e73.firebaseapp.com",
        databaseURL: "https://firstproject-b4e73.firebaseio.com",
        projectId: "firstproject-b4e73",
        storageBucket: "firstproject-b4e73.appspot.com",
        messagingSenderId: "871451071663",
        appId: "1:871451071663:web:b5c83e784d2b9689dfb05a"
      };
      
      firebase.initializeApp(firebaseConfig);

}


function getMessages(){
  let database = firebase.database();
  let messages = database.ref('messages/'); //hacemos referencia al nodo de la base de datos

  // console.log(messages);

  
  messages.on('value', function(snapshot) {
    let messages = snapshot.val();

    messages.map(function(messageObject){
      writeMessage(messageObject.currentDate)
      writeMessage(messageObject.text)
    })
  });
}

function writeMessage(textMessage){

  let textNode = document.createElement("p");
  textNode.innerText = textMessage;
  document.getElementById("messageBox").appendChild(textNode);

}

// function newMessage(textMessage) {
//   let today = new Date();
//   firebase
//     .database()
//     .ref('messages/')
//     .set({ //set sobreescribe todo
//       currentDate: `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`,
//       text: textMessage,
    
//   });
// }

function newMessage(textMessage) {
  let today = new Date();
  let messagesRef = firebase.database().ref('messages/');

    messagesRef.set({ //set sobreescribe todo
      currentDate: `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`,
      text: textMessage,
    
  });
}
initDataBase();
getMessages();

document.getElementById("sendBtn").addEventListener("click",() =>{

  newMessage(document.getElementById("messageInput").value)

})