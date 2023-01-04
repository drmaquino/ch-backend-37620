const AWS = require('aws-sdk')

if (process.env.NODE_ENV === 'dev') {
    const credentials = new AWS.SharedIniFileCredentials()
    AWS.config.credentials = credentials
}

AWS.config.update({
    region: 'us-east-1',
})

// notificaciones

const sns = new AWS.SNS()

const SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:556207783419:notificaciones'

exports.notify = ({ subject, message }) => {
    const msg = {
        Subject: subject,
        Message: message,
        TopicArn: SNS_TOPIC_ARN,
    }
    return sns.publish(msg).promise()
}

// dynamoDb

exports.dynamodb = new AWS.DynamoDB.DocumentClient()