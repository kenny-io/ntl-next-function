import type { Config, Context } from "@netlify/edge-functions";

export default (context: Context & { headers: Headers }) => {
    console.log(context);

    return new Response(JSON.stringify({
        device: context.headers.get("sec-ch-ua-platform"),
    }),);
};

export const config: Config = { path: "/device" };