# Deprecated Endpoints

The askui library is sending requests with screenshots and/or instructions
to endpoints of our inference API to get annotations and commands.
We are starting to use our new `inference` endpoint for this kind of requests.
Earlier versions (`v0.3.2` and prior) are using the `predict-comand` and `annotate` endpoint
of the API.
The old endpoints are still working but we are not planning to maintain them.
Both endpoints will be deprecated in the future.

Please upgrade your askui version to use our new endpoint if you are using askui `v0.3.2` and earlier:

```shell
npm update askui
```