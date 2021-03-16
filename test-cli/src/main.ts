
import { Input } from "https://deno.land/x/cliffy/prompt/mod.ts";
import { Command } from "https://deno.land/x/cliffy/command/mod.ts";
import { Webview } from "https://deno.land/x/webview/mod.ts";

await new Command()
  .name("Search")
  .version("1")
  .description("Search Things up")
  .option("-e, --engine [type:string]", "Select search engine", { default: "bing", })
  .parse(Deno.args);

const { options } = await new Command()
  .option("-e, --engine [type:string]", "Select search engine", { default: "bing", })
  .parse(Deno.args);

const stext: string = await Input.prompt(`What do you want to search?`); 

var http = 'https://';
var search = '.com/search?q=';
var query = stext;

// encode only the query string

var sstext = encodeURIComponent(query);

console.log(http + options.engine + search +sstext);


const webview = new Webview(
  { url: http + options.engine + search + sstext },
);
await webview.run();
