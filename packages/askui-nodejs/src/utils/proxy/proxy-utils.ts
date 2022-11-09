import fs from "fs";
import { IncomingMessage } from "http";
import { createServer, Server as HttpServer, Agent } from "http";
import Server from "http-proxy";
import https from "https";
import { join } from "path";
import stream from "stream";
//import dns, { LookupOneOptions } from "dns";
const proxy = require('proxy');



export async function buildHttpProxy(): Promise<HttpServer> {
    return new Promise((resolve, _reject) => {
        const proxy = Server.createProxyServer({agent: new Agent({}),
        ws: true});
        const httpProxy = createServer({}, (req, res) => {
            console.log('req:', req)
            //console.log('req:', req)
            var header = req.headers['proxy-authorization'] || '';       // get the auth header
            var token = header.split(/\s+/).pop() || '';        // and the encoded auth token
            var auth = Buffer.from(token, 'base64').toString(); // convert from base64
            var parts = auth.split(/:/);                        // split on colon
            var username = parts.shift();                       // username is first
            var password = parts.join(':');
            
            
            if(!(username === "test" && password === "test")){
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.end('username is "' + username + '" and password is "' + password + '"');
            }
            
            proxy.web(req, res, { target: req.url})

        })
        httpProxy.on('connection', () => console.log("connection"))
        httpProxy.on('connect', (req: IncomingMessage, _socket: stream.Duplex, _head: Buffer) => {
            console.log("connect")
            console.log(req)

            proxy.ws(req, _socket, {target: "https://www.google.com"})
        })
        httpProxy.on('request', () => console.log("request"))
        httpProxy.on('upgrade', () => console.log("upgrade"))
        httpProxy.on('close', () => console.log("close"))
        httpProxy.on('error', () => console.log("error"))
        httpProxy.listen(8009, () => {
            console.log("Waiting for requests...")
            resolve(httpProxy)
        })

    })
}



/***
 * This file is oriented by the integration tests of hpagent: https://github.com/delvedor/hpagent/blob/main/test/utils.js
 */
export function addBasicAuthentication(httpProxy: HttpServer): HttpServer{
    (httpProxy as any).authenticate = (req: any, fn: any) => {
        var header = req.headers['proxy-authorization'] || '';       // get the auth header
        var token = header.split(/\s+/).pop() || '';        // and the encoded auth token
        var auth = Buffer.from(token, 'base64').toString(); // convert from base64
        var parts = auth.split(/:/);                        // split on colon
        var username = parts.shift();                       // username is first
        var password = parts.join(':');
        
        
        if(!(username === "username" && password === "password")){
            fn(null, false)
            return;
        }
        fn(null, true)
    }
    return httpProxy
}

export async function buildProxy(): Promise<HttpServer> {
    return new Promise<HttpServer>((resolve, _reject) => {
        const httpProxy = proxy(createServer().listen(8009, () => {
            resolve(httpProxy)
        }));
        httpProxy.agent = new Agent()   
    })
}


/**
 * We've manually created self signed certificates for the proxy
 * and for the server, with the following domains (Subject CN)
 * proxy.proxy-unit-test-askui.com
 * server.proxy-unit-test-askui.com
 *
 * This will allow us to properly test the TLS-over-TLS proxy,
 * specifically that the first handshake provides the proxy SNI, not the server SNI.
 *
 * These certs were generated using openssl:
 * openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout key_server.pem -out cert_server.pem
 * openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout key_proxy.pem -out cert_proxy.pem
 * 
 * Additional we generated the a CA to simulate Zscaler deep package inspection for the server certs
 * https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309
 * 
 *
 * The certs are concatenated to the can be passed to Node.JS as trusted certs:
 * $ cat cert_proxy.pem > unit_test.pem
 * $ cat cert_server.pem >> unit_test.pem
 *
 * using `NODE_EXTRA_CA_CERTS` (https://nodejs.org/api/cli.html#node_extra_ca_certsfile)
 *
 * This allows actual verification of the certs w/ hostname instead of ignoring all errors
 */


export  const sslProxy = {
    key: fs.readFileSync(join(__dirname, 'certs/key_proxy.pem')),
    cert: fs.readFileSync(join(__dirname, 'certs/cert_proxy.pem'))
}


export const sslServer = {
    key: fs.readFileSync(join(__dirname, 'certs/key_server.pem')),
    cert: fs.readFileSync(join(__dirname, 'certs/cert_server.pem'))
}

/**
 * We override only the SERVER_HOSTNAME DNS requests from the node process (for unit test) to resolve to
 * 127.0.0.1. This allows us to use the self signed certs we made for the fake
 * domains to be verified, and then the connection made to localhost.
 */
/*
const originalDnsLookup = dns.lookup
dns.lookup = (((hostname: string, options: LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void => {
    if(hostname === SERVER_HOSTNAME || hostname === PROXY_HOSTNAME){
        return callback(null, '127.0.0.1', 4)
    }
    originalDnsLookup(hostname, options, callback)
}) as any)
*/

export async function buildSecureServer(): Promise<https.Server> {
    return new Promise<https.Server>((resolve, _reject) => {
        const secureServer = https.createServer(sslServer).listen(8081, () => {
            resolve(secureServer)
        })
    })    
}


export async function buildSecureProxy(): Promise<https.Server>  {
    return new Promise((resolve, _reject) => {
      const httpProxy = proxy(https.createServer(sslProxy)).listen(8010, () => {
        resolve(httpProxy)
      })
    }) 
}


export const PROXY_HOSTNAME = 'proxy.proxy-unit-test-askui.com'
export const SERVER_HOSTNAME = 'server.proxy-unit-test-askui.com'

