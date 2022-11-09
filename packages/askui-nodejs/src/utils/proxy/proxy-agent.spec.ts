import  https  from 'https';
import http from 'http';
import got from 'got';
import { buildHttpProxy } from './proxy-utils';

// DEBUG='https-proxy-agent:agent','https-proxy-agent:parse-proxy-response'
// npm install proxy-agent
import ProxyAgent from 'proxy-agent';

describe("proxy-agent", () => {
    const proxyUrl = "http://localhost:8009"
    
    it("get google", async () => {
        var opts = {
            agent: new ProxyAgent(proxyUrl)
        };
            
        await new Promise<void>((resolve, _reject) => {
            https.get("https://www.google.com", opts, (res: http.IncomingMessage) => {
                    expect(res.statusCode).toBe(200);                    
                    resolve()
                });
        })
    });


    xit('should check soft_sleep proxy server', async () => {
        const httpProxy = await buildHttpProxy()       
        
        const response = await got.get("https://www.google.com", {retry: 0, agent: {
            https: new ProxyAgent(proxyUrl)
        }});
                    
        expect(response.statusCode).toBe(200); 
        httpProxy.close();
        
  
    }, 5000);

});