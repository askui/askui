import got from 'got';
import { buildHttpProxy } from './proxy-utils';
import { HttpsProxyAgent } from 'hpagent';



describe("http-proxy and hpagent", () => {
    
    xit('should check soft_sleep proxy server', async () => {
        const httpProxy = await buildHttpProxy()            
        const response = await got.get("https://www.google.com", {retry: 0, agent: {
            https:  new HttpsProxyAgent({
                keepAlive: true,
                keepAliveMsecs: 1000,
                maxSockets: 256,
                maxFreeSockets: 256,
                scheduling: 'lifo',
                proxy: 'http://localhost:8009'
            })
        }});
                    
        expect(response.statusCode).toBe(200);        
        httpProxy.close()
    });


});