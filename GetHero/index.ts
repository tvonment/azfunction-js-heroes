import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, heroIn): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.log(heroIn)
    let hero = heroIn

    
    context.bindings.heroOut = hero;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: hero
    };

};

export default httpTrigger;