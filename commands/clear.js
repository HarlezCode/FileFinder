exports.run = (bot,message,args) =>{
    num = message.content.split(" "); 
    message.channel.bulkDelete(num[1]);
}