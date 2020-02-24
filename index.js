console.log('Loading function');

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  for (const { messageId, body } of event.Records) {
    const parsed = JSON.parse(body);
    console.log("SQS message %s: Name=%s, Phone=%s, Email=%s",
        messageId, parsed.name, parsed.phone, parsed.email);
    console.log('SQS message %s: %j', messageId, body);
  }
  return `Successfully processed ${event.Records.length} messages.`;
};
