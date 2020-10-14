function createWebhookResult(value) {
    const username = value.username;
    const message = value.message;
    const path = value.path;
    const slackChannel = value.slackChannel;
    const emoji = value.emoji;
    const slackId = value.slackId

    // test
    const block = {
            "text":message,
            "blocks":[
                {
                    "type":"section",
                    "text":{
                        "type":"mrkdwn",
                        "text":`>*${message}*\n><#link#|View Alert Log>`,
                    }
                },
                {
                    "type":"section",
                    "fields":[{
                        "type":"mrkdwn",
                        "text":"*Path/Module*\n`" + path + "`"
                    },
                    {
                        "type":"mrkdwn",
                        "text":`*PIC*\n${slackId}`
                    }]
                },
                {
                    "type": "divider"
                }
            ],
            "username": username,
            "icon_emoji": emoji
        }

    const minifiedSlackBlock = JSON.stringify(block);
    const finalMessage = `webhook-trigger:POST ${slackChannel}[[${minifiedSlackBlock}]]`

    return String(finalMessage);
}
