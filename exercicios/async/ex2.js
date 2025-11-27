const header = document.querySelector("header")
const section = document.querySelector("section")
let xml = new XMLHttpRequest();
xml.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
xml.responseType = "json";
xml.send();

/*
    <h1><!-- squadName --></h1>
    <p>
        Hometown:
        <!-- homeTown -->
        // Formed:
        <!-- formed -->
    </p>

    <article>
        <h2><!-- name --></h2>
        <p>
            Secret identity:
            <!-- secretIdentity -->
        </p>
        <p>
            Age:
            <!-- age -->
        </p>
        <p>Superpowers:</p>
        <ul>
            <li><!-- powers[0] --></li>
            <li><!-- powers[1] --></li>
            <li><!-- powers[2] --></li>
        </ul>
    </article>
*/

xml.addEventListener("load", () => {
    let obx = xml.response

    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    h1.append(obx.squadName)
    p.append("Hometown "+obx.homeTown+" // Formed: "+obx.formed)
    header.append(h1,p)
    
    for (member of obx.members){
        console.log(member);
        let article = document.createElement("article")
        let h2 = document.createElement("h2")
        h2.append(member.name)
        let ps = document.createElement("p")
        ps.append("Secret identity: "+member.secretIndentity)
        let pa = document.createElement("p")
        pa.append("Age: "+member.age)
        let psp = document.createElement("p")
        psp.append("Superpowers:")
        let ul = document.createElement("ul")
        for (power of member.powers){
            let li = document.createElement("li")
            li.append(power)
            ul.append(li)
        }
        article.append(h2, ps, pa, psp, ul)
        section.append(article)
    }

});

