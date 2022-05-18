import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, heroes): Promise<void> {
    context.log('Get all Request triggered');
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: heroes
    };

};

export default httpTrigger;