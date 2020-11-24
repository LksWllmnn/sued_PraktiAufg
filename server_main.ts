import * as Http from "http";
//import { ParsedUrlQuery } from "querystring";
//import * as Url from "url";
import * as Mongo from "mongodb";

export interface Kunde {
    id: string;
    login: string;
    passwort: string;
}

export interface Verkäufer {
    id: string;
    login: string;
    passwort: string;
}

export namespace praktiAufgabe {

    let databaseUrl: string;
    
    //local oder remote
    //let args: string[] = process.argv.slice(2);
    /*switch (args[0]) {
        case "local": 
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path:" + args[0]);
            break;
        /*case "remote":
            databaseUrl = "mongodb+srv://lukasichlwmann:auJbZYGmsCCePLSm@lukas-gis-cluster-k6xk7.mongodb.net/Formular?retryWrites=true&w=majority";
            console.log("Path:" + args[0]);
            break;
        default: 
            databaseUrl = "mongodb://localhost:27017";
            console.log("Path: default" );
            break;
    }*/

    databaseUrl = "mongodb://localhost:27017";

    export let artikel: Mongo.Collection;
    export let bestellungen: Mongo.Collection;
    export let kunden: Mongo.Collection;
    export let verkäufer: Mongo.Collection;

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
    //sobald zugehrt wird kommen diese kommentage (ohne das jemand auf den server zugreift)
    console.log("Listening");
    //console.log("...still Listening");
    //console.log("...i bims eins konsole log vom 22.06 nachdem ich ne schelle bekommen habe ...lul");

    /*let adresse: string = "http://localhost:8080/default.htm?jahr=2017&monat=february";
    //Adresse parsen (umwandeln):
    let q: Url.UrlWithParsedQuery = Url.parse(adresse, true);

    //Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:
    var qdata: ParsedUrlQuery = q.query;
    console.log(qdata.monat);*/
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    
        console.log("I hear voices!");
        console.log("...i bims eins konsole log vom 22.06 nachdem ich ne schelle bekommen habe ...lul");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
    
        _response.end();
    
  }

}