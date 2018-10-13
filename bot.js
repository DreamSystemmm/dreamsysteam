const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

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
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     message.channel.send('**تم ارسال رسالة في الخاص**');




 message.author.sendMessage(`
 **
[❖═════ General Commands ═══════❖]

 #id معلومات عن حسابك الشخصي

 #server معلومات حول السيرفر
 
 #move سحب عضو الى رومك الصوتي

 #clear مسح الرسائل الموجوده في الروم بعدد

 #avatar يعرض اك صورتك الشخصية
 
 #image يعرض لك صورة السيرفر
 
 #credit يوريك كم الكريديت حقتك

 #daily يسوي لك سحب فلوس

 #rep يعطي ريب

 #profile معلومات عامة مع الصورة
 
[❖═════ Administrator Commands ═══════❖]

 #ban حضر عضو من السيرفر
 
 #kick طرد عضو من السيرفر
 
 #mute اعضاء ميوت كتابي لعضو في السيرفر
 
 #unmute فك الميوت عن عضو في السيرفر
 
 #dac حذف جميع رومات السيرفر
 
 #dar حذف جميع رتب السيرفر
 
 #openroom فتح المحادثة في الروم
 
 #closeroom قفل المحادثة في الرةوم

 #role اعطاء رتبه لشخض معين
 
 #role humans اعطاء رتب للبشريين
 
 #role bots اعطاء رتبه للبوتات
 
 #role all اعطاء رتبه للجميع سواء بشر او بوتات
 
[❖═════ Other ═══════❖]

 #support رابط سيرفر الدعم الفني
 
 #invite رابط اضافة البوت

 **`);

    }
});

client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }







client.login(process.env.BOT_TOKEN);
