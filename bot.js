
var cron = require("cron");
const { Client } = require('discord.js');
const { contentType } = require('mime-types');
const client = new Client();
let channel = client.channels.cache.get('777899451914125342');
var d = new Date();
  
let scheduledMessage1 = new cron.CronJob('05 00 09 * * *', () => {
  var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@gr2 8:00, zaczynamy WF!";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@gr2 8:00, zaczynamy WF!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "Dzisiaj lekcji brak :sob:";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage2 = new cron.CronJob('05 50 09 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 8:50, czas na matematykę!";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@everyone 8:50, czas na geografię!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "@gr1 8:50, zaczynamy ABDN!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage3 = new cron.CronJob('05 40 10 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 9:40, czas na PPR!";
    wiadomosc[2] = "@everyone 9:40, zaczynamy chemię!";
    wiadomosc[3] = "@everyone 9:40, @gr1 czas na WF! @gr2, wy macie anigelski!";
    wiadomosc[4] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[5] = "@everyone 9:40, czas na PBD!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage4 = new cron.CronJob('05 30 11 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 10:30, zaczynami informatykę stosowaną!";
    wiadomosc[2] = "@everyone 10:30, @gr1 zapraszam na informatykę! @gr2, zapraszam na angielski!";
    wiadomosc[3] = "@everyone 10:30, przyszedł czas na zajęcia z wychowawcą!";
    wiadomosc[4] = "@everyone 10:30, zaczynamy dzień historią!";
    wiadomosc[5] = "@everyone 10:30, czas na religię!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage5 = new cron.CronJob('05 20 12 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 11:20, druga godzina informatyki stosowanej!";
    wiadomosc[2] = "@everyone 11:20, @gr1 zapraszam na WF! @gr2, czeka was informatyka!";
    wiadomosc[3] = "@everyone 11:20, czas na PBD!";
    wiadomosc[4] = "@everyone 11:20, nadszedł czas na biologię!";
    wiadomosc[5] = "@everyone 11:20, zaczynamy PPR!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage6 = new cron.CronJob('05 20 13 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 12:20, zaczynamy fizykę!";
    wiadomosc[2] = "@everyone 12:20, czas na matematykę!";
    wiadomosc[3] = "@everyone 12:20, @gr1 zapraszam na niemiecki! @gr2 czas poćwiczyć na WF!";
    wiadomosc[4] = "@everyone 12:20, czas na PSI!";
    wiadomosc[5] = "@everyone 12:20, czas na PSI!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage7 = new cron.CronJob('05 10 14 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 13:10, zaczynamy edukację regionalną!";
    wiadomosc[2] = "@everyone 13:10, czas na historię!";
    wiadomosc[3] = "@everyone 13:10, religia się rozpoczyna!";
    wiadomosc[4] = "@everyone 13:10, bądźmy bezpieczni na EDB!";
    wiadomosc[5] = "@everyone 13:10, ulubiona lekcja czyli filozofia!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  let scheduledMessage8 = new cron.CronJob('05 00 15 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "@everyone 14:00, @gr1 rozpoczyna angielski! @gr2 sprechen Sie Deutsch?";
    wiadomosc[2] = "@everyone 14:00, @gr1 rozpoczyna angielski! @gr2 sprechen Sie Deutsch?";
    wiadomosc[3] = "@everyone 14:00, czas na polski!";
    wiadomosc[4] = "@everyone 14:00, matematyka przyszłością!";
    wiadomosc[5] = "@gr1 14:00, tworzymy stroni internetowe!";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

    let scheduledMessage9 = new cron.CronJob('05 50 15 * * *', () => {
      var d = new Date();
        var wiadomosc = new Array(5);
        wiadomosc[1] = "@everyone 14:50, zaczynamy polski!";
        wiadomosc[2] = "@gr1 14:50, niemiecki się zaczyna!";
        wiadomosc[3] = "@everyone 14:50, druga godzina polskiego!";
        wiadomosc[4] = "@everyone 14:50, @gr1 zaczyna WF! @gr2 idzie tworzyć strony internetowe!";
        wiadomosc[5] = "@gr1 14:50, TSI - ostatnia lekcja w tygodniu!";
    var msge = wiadomosc[d.getDay()];
    let channel = client.channels.cache.get('777899451914125342');
            channel.send(msge);
  });

  let scheduledMessage10 = new cron.CronJob('05 40 16 * * *', () => {
    var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@gr2 15:40, zaczynami TSI!";
    wiadomosc[4] = "@gr2 15:40, czas na ABDN!";
    wiadomosc[5] = "Dzisiaj lekcji brak :sob:";
var msge = wiadomosc[d.getDay()];
let channel = client.channels.cache.get('777899451914125342');
        channel.send(msge);
  });

  client.on('message', msg => {
    if (msg.content === 'test') {
      var d = new Date();
    var wiadomosc = new Array(5);
    wiadomosc[1] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[2] = "Dzisiaj lekcji brak :sob:";
    wiadomosc[3] = "@gr2 15:40, zaczynami TSI!";
    wiadomosc[4] = "@gr2 15:40, czas na ABDN!";
    wiadomosc[5] = "Dzisiaj lekcji brak :sob:";
var msge = wiadomosc[d.getDay()];
      msg.reply(msge);
    }
  });

  scheduledMessage1.start()
  scheduledMessage2.start()
  scheduledMessage3.start()
  scheduledMessage4.start()
  scheduledMessage5.start()
  scheduledMessage6.start()
  scheduledMessage7.start()
  scheduledMessage8.start()
  scheduledMessage9.start()
  scheduledMessage10.start()

client.login(process.env.BOT_TOKEN);