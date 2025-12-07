function startChat(io) {
    io.on("message", (message) => {
        console.log("Mensagem recebida:"+ message);
        
        io.send("oi");
    });
}
export default startChat;