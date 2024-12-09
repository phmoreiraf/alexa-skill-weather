const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'UsersPreferences';

const getPreferredCity = async (userId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { UserId: userId },
    };
    const result = await dynamoDB.get(params).promise();
    if (!result.Item) {
        throw new Error('Cidade preferida não encontrada.');
    }
    return result.Item.PreferredCity;
};

const setPreferredCity = async (userId, city) => {
    const params = {
        TableName: TABLE_NAME,
        Item: { UserId: userId, PreferredCity: city },
    };
    await dynamoDB.put(params).promise();
};

module.exports = { getPreferredCity, setPreferredCity };
