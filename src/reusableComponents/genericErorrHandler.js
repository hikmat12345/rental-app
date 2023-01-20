import swal from 'sweetalert';

 function errorHanlder( error, noToastr = false) {
   
   if(error.status){
         return   swal({
                title: "'error')",
                text: "k + ' ' +faild to fetch",
            })
        }
         if (error.status === 400) {
         return swal({
                  title: "'error')",
                  text: "k + ' ' + errors[key][0][k]",
                    })
           
        } else if (error.status === 401) {
         return swal({
            title: "'error')",
            text: 'sessionExpired',
                      })
          
        } else if (error.status === 403) {
         return swal({
            title: "'error')",
            text: 'credentialMatch',
                      })
        } else if (error.status === 404) {
          return swal({
            title: "'error')",
            text: "error.data.text",
                      })
        } else if (error.status === 405) {
          return swal({
            title: "'error')",
            text: 'wrongHttp',
                      })
        } else if (error.status === 406) {
          return swal({
            title: "'error')",
            text: "error.data.text",
                      })
        } else if (error.status === 409) {
          return swal({
            title: "'error')",
            text: "error.data.text",
                      })
        } else if (error.status === 422 ) {
          return swal({
                title: "'error')",
                text: 'serverNotResponding',
                          })
        } else if (error.status >= 500) {
          return swal({
            title: "'error')",
            text: 'serverNotResponding',
                      })
        }
    
  }
  export {errorHanlder}
  