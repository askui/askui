import  https  from 'https';
import http from 'http';


// npm i hpagent
import { HttpsProxyAgent } from 'hpagent';

describe("hpagent proxy", () => {
    const proxyUrl = "http://localhost:8009"
    
    it("get google", async () => {
        var opts = {
            agent: new HttpsProxyAgent({
                keepAlive: false,
                keepAliveMsecs: 1000,
                maxSockets: 256,
                maxFreeSockets: 256,
                scheduling: 'lifo',
                proxy: proxyUrl
            })
        };
            
        await new Promise<void>((resolve, _reject) => {
            https.get("https://www.google.com", opts, (res: http.IncomingMessage) => {
                    expect(res.statusCode).toBe(200);
                    
                    resolve()
                });
        })
    });

});