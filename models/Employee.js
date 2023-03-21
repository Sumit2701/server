const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema  ( {
    EmployeeName:{
        type: String,
        required: true,
    },
    Address:{
        type: String, 
        
   },
   Online:{
    type: Boolean
    
},
    Age:{
    type: String, 
    
    },
    Department:{
    type: String, 
    
    }
    ,
    EmployeeStatus:{
    type: String, 
    
    },
    Latitude:{
        type:String
    },
    Longitude:{
        type:String
    },

Phone:{
    type:String
},
Email:{
    type:String
}

});
const Employee=mongoose.model("EmpData",EmployeeSchema);
module.exports = Employee;