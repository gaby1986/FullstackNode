let http = require('http')
let routes = require('./form')

http
    .createServer(function(request, response){
        
        let method = request.method.toLowerCase()
        let path = request.url.toLowerCase().replace('/','')
        let html = routes[method][path].html

        response.write(html)
        response.end()

       // info@alzvi.com.ar
       //   alzvi/coderhouse-4245 
       console.log(request.url)
        //console.log(request.method)
   /* if(request.method === "GET"){
        if(request.url === "/home"){
                response.write(`<h1>Home</h1>`)
        }else if(request.url === "/contacto"){ 
                response.write(form)
        }
    }else if(request.method === "POST"){
        
        
     } else{
            response.writeHead(404)
        }
        response.end()**/

    })
    .listen(3000)