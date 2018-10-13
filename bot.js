const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dream Systeam`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
    var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  
  
  
  
  
  
  client.on("message", message => {
    var prefix = "+"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
	
	
	
	
	
	
	client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
	
	
	
	


  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = {};
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
 
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
         
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**:credit_card: | ${mention.username}, معك من الكردت **${credits[mention.id].credits}`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \`${moment().startOf('day').locale('ar-eg').fromNow().replace('منذ', 'بعد')}\` , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
           
 
          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
     
 
      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});


client.on('message',async message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


  
 client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    }); 
	
	client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });

	



client.on('message', async najzx => {
    if(najzx.content.startsWith("+tv")) {
      if(!najzx.member.hasPermission('MANAGE_CHANNELS')) return;
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })
  


client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 

client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**💡 || أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });




client.on("message", async message => {
        if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var FaReSsS = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**Guild Info**`)
          .setDescription(`${guild.name}`)
          .addField(" 🆔   *Guild ID*  ", `${guild.id}`, true)
          .addField(" 🏳   *Guild Region*  ", `${guild.region}`, true)
          .addField(" 🎙   *Guild VoiceChannels*  ", `${voicechannels.size}`, true)
          .addField(" #⃣ *  Guild TextChannels  *", `${textchannels.size}`, true)
          .addField(" 👥  *  Guild Members Count  *", `${members}`, true)
          .addField(" 👤   *Guild Members*  ", `${humans}`, true)
          .addField(" 🚀   *Guild RolesCount*  ", `${guild.roles.size}`, true)
          .addField(" 👑   *CreatedBy*  ", `${guild.owner}`, true)
          .addField(` :watch:   *CreatedAt*   ` , `${guild.createdAt}` , true)
      
       message.channel.send(FaReSsS);
    
      }
    });







  
  client.on('message',message =>{
      var prefix = "+";
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'myinv') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `Invites :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});







client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bcall')){
 if (message.author.id !== '428890200735875073') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '428890200735875073') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "+say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });












client.login(process.env.BOT_TOKEN);
