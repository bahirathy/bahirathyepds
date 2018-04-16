import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        add:function(){  
        console.log("115")
        var rice = this.get('Rice');
        console.log(rice);
        var wheat = this.get('Wheat');
        console.log(wheat);
        var kerocene=this.get('Kerocene');
        console.log(kerocene);
        var date=this.get('date');
        console.log(date);
        var state=this.get('tn');
        console.log(state);
        var rices = this.get('RICE');
        console.log(rices);
        var wheats=this.get('WHEAT');
        console.log(wheats);
        var kerocenes=this.get('KEROCENE');
        // if (email != null || email === undefined || email === "" || password === null || password === undefined || password === "") {
            // swal("please fill details for login");
            // swal("Something Went Wrong", "please fill details for login!", "error");
        //} else {
       //console.log(rice);
       //console.log(wheat);
      // console.log(kerocene);
       var dataString = {
       "rice": rice,
       "wheat": wheat,
       "kerocene":kerocene,
       "date":date,
       "state":state,
       "rices":rices,
       "wheats":wheats,
       "kerocenes":kerocenes,
       
    

      
    //    "usertype": usertype,
    };
        console.log(JSON.stringify(dataString));
        console.log(rice);
        console.log(wheat);
        console.log(kerocene);
                return $.ajax({
        url:'http://localhost:8082/central',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(dataString),
        success: function(response) {
        console.log((response));
        var message = response.message
        console.log("message",message)
        
        }
    })
        
            }
          
        
        }
    

    });


