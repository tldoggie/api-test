export default function handleCall(req, res) {
    //let m = "Hello";
    if (req.method == "POST") {
        let body = [];
        req.on('data', buffer => {
            body.push(buffer); 
        });
        req.on('end', () => {
            try {
                //console.log(body);
                //res.end('ok');
                let parsedBody = Buffer.concat(body).toString();
                let message = JSON.parse(parsedBody).message;
                let ret = JSON.stringify({message2: `Hello from Post request. You said ${message}.`})
                
                return res.send(ret);
            } catch (e) {
                return res.send(e);
            }
        });
        
    }
    else return res.status(200).json({message2: "Not a post request"});
}