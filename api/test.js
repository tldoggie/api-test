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
                return res.send(parsedBody);
            } catch (e) {
                return res.status(200).json({message: e});
            }
        });
        
    }
    else return res.status(200).json({message: "Not a post request"});
}