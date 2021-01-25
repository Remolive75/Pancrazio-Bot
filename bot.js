const discord=require("discord.js");
const client= new discord.Client();
const config=require("./config.json");

client.on("ready",()=>{
    console.log("Ciao io sono Pancrazio")
})
bot.login(process.env.token);

client.on("message",message=>{
   let preferix="."
   if(message.content===preferix+"chi ami?"){
       message.channel.send("Io amo Silvia e il Pangrattato")
   }
   if(message.content===preferix+"pizza"){
    message.channel.send("Buona!!!")
}
})

client.login(config.token);