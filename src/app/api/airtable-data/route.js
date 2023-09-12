const Airtable = require('airtable');
import { NextRequest,NextResponse } from 'next/server';

// Replace with your API Key and Base ID


export async function GET(){

    console.log("Entering the API Key")
    var base = new Airtable({apiKey: 'patOByHfHd9Pb5vvo.3da500ae2c22d7244555c2300d0c177d8018e83b03ed17abd96b44b1918ec155'}).base('apph6xUdmGyK1RABr');

await base('Bounties').select({
    // Selecting the first 3 records in Bounty View:
    maxRecords: 100,
    view: "Bounty View",
    fields:["Bounty Name",'Amount']
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get("Bounty Name","Amount"));
        return NextResponse.json({message:record,success:true})

    });
})

};
