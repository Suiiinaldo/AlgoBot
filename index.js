const searchAlgo = require('./Algos/Searching_Algos/searching');
const quick = require('./Algos/Sorting_Algos/quicksort');
const axios = require('axios');
const sortAlgo = require('./Algos/Sorting_Algos/sorting');
const { Telegraf } = require('telegraf');
require('dotenv').config()
const { list } = require('./Command-Lists/list');
const { list2 } = require('./Command-Lists/projectList'); 
const bot = new Telegraf(process.env.BOT_TOKEN);
try
{
    bot.start((ctx) => ctx.reply('Welcome to Prakhar\'s we_car_bot\ntype /help for the list of Commands'));
    bot.hears('hi',(ctx)=>ctx.reply('Hey there'));
    bot.command('BinarySearch', (ctx) => ctx.reply(searchAlgo.binarySearch));
    bot.command('LinearSearch', (ctx) => ctx.reply(searchAlgo.linear));
    bot.command('BubbleSort', (ctx) => ctx.reply(sortAlgo.bubble));
    bot.command('SelectionSort', (ctx) => ctx.reply(sortAlgo.selection));
    bot.command('InsertionSort', (ctx) => ctx.reply(sortAlgo.insertion));
    bot.command('MergeSort', (ctx) => ctx.reply(sortAlgo.mergesort));
    bot.command('ImplementationCodes',(ctx)=>ctx.reply(list2));
    bot.command('DSU', async (ctx) =>{
        const response = await axios.get('https://raw.githubusercontent.com/Suiiinaldo/CPP-notes/main/Graphs/DSU/Implementation.c%2B%2B');
        ctx.reply(response.data);
    })
    bot.command('Stack', async (ctx) =>{
        const response = await axios.get('https://raw.githubusercontent.com/Suiiinaldo/CPP-notes/main/stacks/stackImplementation.c%2B%2B');
        ctx.reply(response.data);
    })
    bot.command('Queue', async (ctx) =>{
        const response = await axios.get('https://raw.githubusercontent.com/Suiiinaldo/CPP-notes/main/Queue/QueueImplementation.c%2B%2B');
        ctx.reply(response.data);
    })
    bot.command('LinkedList', async (ctx) =>{
        const response = await axios.get('https://raw.githubusercontent.com/Suiiinaldo/CPP-notes/main/LinkedList/FirstImplementation.c%2B%2B');
        ctx.reply(response.data);
    })
    bot.command('QuickSort', (ctx) => ctx.reply(quick.qu));
    bot.help((ctx) => ctx.reply(list))
    bot.on('sticker', (ctx) => ctx.reply('❤️'));
    bot.on('text', (ctx) => {
        if(ctx.update.message.text == 'I love you' || ctx.update.message.text == 'My First')
        {
            ctx.reply('Love you too Bro');
        }
        else{
            ctx.reply('I don\'t understand Humans');
        }
    });
    bot.launch();
}
catch{
    console.log('unexpected command');
}