export default function handleCall(request, response) {
    return response.status(200).json({message: "Hello"});
}