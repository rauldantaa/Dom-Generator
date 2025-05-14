
window.onload = function() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let dom = ['.com', '.es', '.org'];

    for (let i = 0; i < pronoun.length; i++) {
    
      for (let j = 0; j < adj.length; j++) {
        
        for (let k = 0; k < noun.length; k++) {
          
            for (let p = 0; p < dom.length; p++) {
              console.log (pronoun[i]+adj[j]+noun[k]+dom[p])
              
            }
        }
        
      }
      
    }
  }