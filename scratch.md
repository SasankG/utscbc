var path = require("path")

app.get("/", funciton(req, res){
     res.sendFile(path.join(__dirname + "/index.html"))
 })


// html form use later
 <form  action ="https://localhost:465/contact" method='post' class='contact-form commentsblock'>
                        <div class="form-group">
                            <label for="name">Name *</label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="Please enter your full name *"
                                required="required"
                                data-error="Name is required."
                                autocorrect="off"
                                   autocapitalize="words"/>

                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email *</label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                class="form-control"
                                placeholder="Please enter your email *"
                                required="required"
                                data-error="Valid email is required."
                                autocorrect="off"
                                autocapitalize="words">
                        

                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject *</label>

                            <select
                                id="subject"
                                name="need"
                                class="form-control"
                                required="required"
                                data-error="Please specify the subject."
                            >
                                <option value=""></option>

                                <option value="Membership Information">Membership Information</option>

                                <option value="Event / ServiceInformation">Event / ServiceInformation</option>

                                <option value="Tournament Sign-up">Tournament Sign-up</option>

                                <option value="Other">Other</option>
                            </select>

                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>

                            <textarea
                                id="message"
                                name="message"
                                class="form-control"
                                placeholder="Message for us *"
                                rows="4"
                                required="required"
                                data-error="Please, leave us a message."
                            ></textarea>

                            <div class="help-block with-errors"></div>
                        </div>

                        <input
                            type="submit"
                            class="btn btn-success btn-send sendbtn"
                            id="bton"
                            value="Send message"
                        />
                
                    </form>




  
  
 


function js(url,req,res){
    fs.readFile( "../main.js", function(err, data) {
  
    
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(data);
  });
}

function css(url, req, res){
    fs.readFile( "../../css/main.css", function(err, data) {
  
    
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data);
  });
     
}
// images
function img (url, req, res){
    fs.readFile("../../images/53.png", function(err,data){
         res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data);
    });
   
}

function imgOne (url, req, res){
    fs.readFile("../../images/received_1548835818558360.jpeg", function(err,data){
         res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data);
    });
   
}

function imgTwo (url, req, res){
    fs.readFile("../../images/UTSCBC Logo.jpeg", function(err,data){
         res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data);
    });
   
}

function imgThree (url, req, res){
    fs.readFile("../../images/e6b832_d872355d3fd540dd96bf357651cf2589_mv2.png", function(err,data){
         res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data);
    });
   
}

function display404(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" + "<p> We've dispatched a team of highly trained monkeys to deal with the situation</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
  