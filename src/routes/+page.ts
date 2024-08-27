import { config as appConfig } from '../../app.config'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const ssr = false;

export async function load() {
    const res = await fetch(appConfig.API_URL, {
        method: 'GET'
    })

    const json = await res.json()

    return {
        environment_data: json
    }
}
