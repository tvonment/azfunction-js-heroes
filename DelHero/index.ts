import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, hero): Promise<void> {
    context.log('Delete Hero: ' + hero.name);
    const client = new CosmosClient(process.env.HeroesCore_COSMOSDB);
    const container = client.database("heroes-db").container("Heroes")
    const { resource } = await container.item(hero.id, hero.id).delete()
    context.res = {
        //status: 200,
        body: resource
    };

};
export default httpTrigger;