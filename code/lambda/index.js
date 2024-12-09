const { getWeather } = require('./helpers/weatherHelper');
const { getPreferredCity, setPreferredCity } = require('./database/dynamoHelper');

exports.handler = async (event) => {
    const intentName = event.request.intent.name;

    try {
        switch (intentName) {
            case 'GetWeatherIntent': {
                const city = event.request.intent.slots.CityName.value;
                const response = await getWeather(city);
                return buildResponse(response);
            }
            case 'SetPreferredCityIntent': {
                const city = event.request.intent.slots.CityName.value;
                const userId = event.session.user.userId;
                await setPreferredCity(userId, city);
                return buildResponse(`Cidade ${city} configurada como preferida.`);
            }
            case 'GetPreferredCityWeatherIntent': {
                const userId = event.session.user.userId;
                const city = await getPreferredCity(userId);
                const response = await getWeather(city);
                return buildResponse(response);
            }
            default:
                return buildResponse('Desculpe, não entendi sua solicitação.');
        }
    } catch (error) {
        return buildResponse('Ocorreu um erro. Tente novamente.');
    }
};

const buildResponse = (speechText) => ({
    version: '1.0',
    response: {
        outputSpeech: {
            type: 'PlainText',
            text: speechText,
        },
        shouldEndSession: false,
    },
});
