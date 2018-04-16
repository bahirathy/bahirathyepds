import Controller from '@ember/controller';



export default Controller.extend({
    actions:{
        register:function(){  
        console.log("115")
        var email = this.get('email');
        console.log(email);
        var password = this.get('password');
        console.log(password);
        var firstname=this.get('firstname');
        console.log(firstname);
        var lastname=this.get('lastname');
        console.log(lastname);
        var phonenumber=this.get('phonenumber');
        console.log(phonenumber);
        var retypepassword=this.get('retypepassword')
        console.log(retypepassword);



        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
            // swal("please fill details for login");
            // swal("Something Went Wrong", "please fill details for login!", "error");
        } else {
       console.log(email);
       console.log(password);
       var dataString = {
       "email": email,
       "password": password,
       "firstname": firstname,
       "lastname" : lastname,
       "phonenumber": phonenumber,
       "retypepassword":retypepassword,
      
    //    "usertype": usertype,
    };
        console.log(JSON.stringify(dataString));
        console.log(email);
        console.log(password);
        return $.ajax({
        url:'http://10.116.191.223:8082/registerUser',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dataString),
        success: function(response) {
        console.log((response));
        var message = response.message
        console.log("message",message);
        this.transitionToRoute('login') 
        }
    })
        
        
        }
    }
}

});
