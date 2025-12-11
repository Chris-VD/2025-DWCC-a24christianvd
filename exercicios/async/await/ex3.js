import { Octokit, App } from "https://esm.sh/octokit";

const octokit = new Octokit({
    auth: "",
});

async function obterUsuario(nome) {
    return await octokit.request('GET /users/'+nome, {
        account_id: nome,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
}

obterUsuario("Chris-VD").then((data)=>console.log(data))
obterUsuario("markuus83").then((data)=>console.log(data))