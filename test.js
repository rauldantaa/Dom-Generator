 window.onload = function() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let dom = ['.com', '.es', '.org'];


    let randompronoum=Math.floor(Math.random()*pronoun.length)
    let randomadj=Math.floor(Math.random()*adj.length)
    let randomnoun=Math.floor(Math.random()*noun.length)
    let randomdom=Math.floor(Math.random()*dom.length)
  
    document.querySelector(".dom").innerHTML=pronoum[randompronoum]+" "+adj[randomadj]+" "+noun[randomnoun]+" "+dom[randomdom]
  }