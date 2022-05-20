import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, hero): Promise<void> {
    context.log('Get Hero: ' + hero.name);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: hero
    };
};
export default httpTrigger;