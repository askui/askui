import  https  from 'https';
import http from 'http';


// set ROARR_LOG=true
// npm i global-agent
import { bootstrap } from 'global-agent'; 

describe("gloabl-agent proxy", () => {
    const proxyUrl = "http://localhost:8009"
    
    it("get google", async () => {
        bootstrap();
        (global as any).GLOBAL_AGENT.HTTP_PROXY = proxyUrl
        
            
        await new Promise<void>((resolve, _reject) => {
            https.get("https://www.google.com", (res: http.IncomingMessage) => {
                    expect(res.statusCode).toBe(200);
                    
                    resolve()
                });
        })
    });
});