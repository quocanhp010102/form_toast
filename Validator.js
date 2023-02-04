function Validator(option){
    //laays ra form
    var formValidator=document.querySelector(option.form)
   
    if(formValidator){
       // tao vong lap qua tung rule
        option.rules.forEach(element => {
            // lấy ra phần tử input của từng mục
         var inputElemnt=formValidator.querySelector(element.select);
           if(inputElemnt){
            
            // lay ra the cha cua the input de lay ra the span
            var formGroup=inputElemnt.parentElement;
            //in thong bap ra man hinh
           
            var ttthongbao;
            
            //su kien onblur
            inputElemnt.onblur=function(){
               
                ttthongbao= element.test(inputElemnt.value);
                var thongbao=formGroup.querySelector(".form-message");
                thongbao.innerHTML=ttthongbao
               if(ttthongbao!=""){
                
                formGroup.classList.add("invalid")
               }else{
                
                formGroup.classList.remove("invalid")
               }
               
            }
           }
        });
        
    }
   
}

Validator.isTaiKhoan=function(select){
       return {
           select:select,
           test:function(value){
                return value ?"":"vui long nhap truong nay"
           }
       }
}
Validator.isEmail=function(select){
    return{
        select:select,
        test:function(email){
            const chekEmail= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
           
            return  chekEmail.test(email.toLowerCase())?"":"email khong hop le"
        }
    }
    
}


Validator.isPassword=function(select){
   return {
      select:select,
      test:function(value){
        
           
            return value.length<=8? "vui long nhap lai mat khau":""
      

      }


   }
}

Validator.isCheckPass=function(select){
    return {
         select:select,
         test:function(value){
            var check=document.querySelector("#password").value
            return value!=check?"mat khau nhap lai khong chinh xac":""
         }
    }
}