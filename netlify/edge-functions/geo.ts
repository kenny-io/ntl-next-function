import type { Config, Context } from "@netlify/edge-functions";

export default (context: Context) => {
    // Default content to serve if country not matched
    let content = "Welcome to our website!";

    // Attempt to determine the user's country from the request
    const country = context.geo.country?.code || "US";

    // Customize content based on the user's country
    switch (country) {
        case "US":
            content = "Welcome to our website, dear visitor from the USA!";
            break;
        case "FR":
            content = "Bienvenue sur notre site web, cher visiteur de la France!";
            break;
        case "ES":
            content = "Bienvenido a nuestro sitio web, querido visitante de España!";
            break;
        // Add more cases as needed
    }

    return new Response(content, {
        headers: { "Content-Type": "text/plain" },
    });
};

export const config: Config = { path: "/localize-content" };