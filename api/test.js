export default function handleCall(req, res) {
    //let m = "Hello";
    if (req.method == "POST") {
        let body = '';
        req.on('data', buffer => {
            console.log(buffer.toString())
            body += buffer.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            try {
                //console.log(body);
                //res.end('ok');
                m = JSON.parse(body);
                return res.status(200).json({message: JSON.parse(body)});
            } catch (e) {
                return res.status(200).json({message: e});
            }
        });
        
    }
    else return res.status(200).json({message: "Not a post request"});
}