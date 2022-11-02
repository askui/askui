import got from 'got';
import { createGlobalProxyAgent } from 'global-agent';
import { buildHttpProxy } from './proxy-utils';
import { Server } from 'http';



export function delay(ms: number) {
return new Promise((resolve) => { setTimeout(resolve, ms); });
}


xdescribe("http-proxy and gloabl-agent", () => {

    const OLD_ENV = process.env;
    let httpProxy: Server;

    beforeEach(async () => {
        jest.resetModules() // Most important - it clears the cache
        process.env = { ...OLD_ENV,GLOBAL_AGENT_HTTP_PROXY: "http://test:test@localhost:8009" }; // Make a copy

        httpProxy = await buildHttpProxy()     
    });

    afterEach(() => {
        process.env = OLD_ENV; // Restore old environment
        httpProxy.close()
    });

    xit('should check soft_sleep proxy server', async () => {      
        const response = await got.get("https://www.google.com", {retry: 0});

        const proxyAgent = createGlobalProxyAgent({forceGlobalAgent: false});
            
        expect(proxyAgent.HTTP_PROXY).toContain("localhost:8009");        
        expect(response.statusCode).toBe(200);        
    });


});