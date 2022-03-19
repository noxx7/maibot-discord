client.on('guildMemberAdd', (member) => {

    const member = message.mentions.members.first();

    let welcomeEmbed = new MessageEmbed()
       .setColor("RANDOM")
       .setTitle("WELCOME!")
       .setDescription(`${member.user} telah bergabung ke server!`)
       .setTimestamp();
  
    member.guild.channels.cache.get("949450331052462090").send(welcomeEmbed);
  
    var role = member.guild.roles.cache.find(role => role.name == "membs")
    member.roles.add(role);
  
  });