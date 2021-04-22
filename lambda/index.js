const AWS = require('aws-sdk');
AWS.config.update({region: 'sa-east-1'});
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
    
    let sourceIP = event.requestContext.http.sourceIp;
    let body = JSON.parse(event.body);
    let out = {};
    
    if(!body.team || !body.words || body.words.length != 12){
        out = {status: "invalid"};
    } else{
        if(body.words[0] === process.env.WORD1 && body.words[1] === process.env.WORD2 && body.words[2] === process.env.WORD3
        && body.words[3] === process.env.WORD4 && body.words[4] === process.env.WORD5 && body.words[5] === process.env.WORD6
        && body.words[6] === process.env.WORD7 && body.words[7] === process.env.WORD8 && body.words[8] === process.env.WORD9
        && body.words[9] === process.env.WORD10 && body.words[10] === process.env.WORD11 && body.words[11] === process.env.WORD12 ){
            out = {status: "correct", image: process.env.WIN_IMAGE_URL};
        }else{
            out = {status: "incorrect"};
        }
        
        const params = {
            TableName: 'seed-attempts',
            Item: {
                'ip' : {S: sourceIP},
                'timestamp' : {N: Date.now().toString()},
                'team' : {S: body.team },
                'word1': {S: body.words[0] },
                'word2': {S: body.words[1] },
                'word3': {S: body.words[2] },
                'word4': {S: body.words[3] },
                'word5': {S: body.words[4] },
                'word6': {S: body.words[5] },
                'word7': {S: body.words[6] },
                'word8': {S: body.words[7] },
                'word9': {S: body.words[8] },
                'word10': {S: body.words[9] },
                'word11': {S: body.words[10] },
                'word12': {S: body.words[11] },
            }
        };
    
        const result = await ddb.putItem(params).promise();
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(out),
    };
    return response;
};
