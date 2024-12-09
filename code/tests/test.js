const { handler } = require('../lambda/index');
const sampleRequests = require('./intents/sampleRequests.json');

(async () => {
    console.log('Teste: Clima em Belo Horizonte');
    const response1 = await handler(sampleRequests.GetWeatherIntent);
    console.log(JSON.stringify(response1, null, 2));

    console.log('Teste: Configurar Sabará como preferida');
    const response2 = await handler(sampleRequests.SetPreferredCityIntent);
    console.log(JSON.stringify(response2, null, 2));

    console.log('Teste: Clima na cidade preferida');
    const response3 = await handler(sampleRequests.GetPreferredCityWeatherIntent);
    console.log(JSON.stringify(response3, null, 2));
})();
