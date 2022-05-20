import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Hero: ' + req.body.name);

    let hero: any = req.body;

    // set new id if not exists 
    if (!hero.id) {
        hero.id = uuidv4();
    }

    context.bindings.heroOut = hero;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: hero
    };

};

export default httpTrigger;