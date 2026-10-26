export default function handleCall(req, res) {
    let m = "Hello";
    if (req.method == "POST") {
        let body = '';
        req.on('data', buffer => {
            console.log(buffer.toString())
            body += buffer.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            //console.log(body);
            res.end('ok');
        });
        m = body;
    }
    return res.status(200).json({message: m});
}