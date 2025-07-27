function setuser(user) {
  this.name = user;
  console.log("called");
  
}

function createuser(username,email,password) {
    setuser.call(this, username)
    
    this.mail = email
    this.pass = password
}

const jeet = new createuser("jeetesh", "jeet@fb.com", "123")
console.log(jeet);
