import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        Submit:function(){  
        console.log("115")
        var email = this.get('Email');
        console.log(email);
        var password = this.get('Password');
        console.log(password);

        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
            // swal("please fill details for login");
            swal("Something Went Wrong", "please fill details for login!", "error");
        } else {
       console.log(email);
       console.log(password);
       var dataString = {
       "email": email,
       "password": password,
      
    //    "usertype": usertype,
    };
        console.log(JSON.stringify(dataString));
        console.log(email);
        console.log(password);
        return $.ajax({
        url:'http://localhost:4200/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dataString),
        success: function(response) {
        console.log((response));
        var message = response.message
        console.log("message",message)
        
        }
    })
        if(email == "central@gmail.com"){
            this.transitionToRoute('central');
            }
            else if(email == "state@gmail.com"){
                this.transitionToRoute('state'); 
            }
            else if(email == "ration@gmail.com"){
                this.transitionToRoute('central'); 
            }
          
        
        }
    }
}
    });


