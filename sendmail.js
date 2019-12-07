
    function SendMail() {
      
        var email=document.querySelector('.e-mail')
        var subject=document.querySelector('.subject')
        var body=document.querySelector('.body')  
        var emailt=document.querySelector('.e-mail-text')
        var subjectt=document.querySelector('.subject-text')
        var bodyt=document.querySelector('.body-text') 
     
        var link = "mailto:ahmedmeskine1998@gmail.com"
                     + "?cc=" + escape (email.value)
                     + "&subject=" + escape (subject.value)
                     + "&body=" + escape (body.value)
            ;
            if(email.value==""){
               
                email.style.borderColor="red"
                emailt.innerHTML="ce champ est obligatoire"
        return false;
           
        } 
         if (subject.value==""){
           
            subject.style.borderColor="red"
           subjectt.innerHTML="ce champ est obligatoire"
            return false;
    } if (body.value==""){
           
        body.style.borderColor="red"
        bodyt.innerHTML="ce champ est obligatoire"
         return false;
    }else 
    
        window.open(link,'_blank')

    }
    
        
      

    

