import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const heroes = [
        { id: 1, name: "Iron Man", power: "rich" },
        { id: 2, name: "Hulk", power: "angry" }
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: heroes
    };

};

export default httpTrigger;