const button = document.getElementById("generate");
const costumeIdea = document.getElementById("costume");
const imageArea = document.getElementById("imageArea");
if (!button || !costumeIdea) console.error("Oh no");
const prefixes = [
    "Sexy",
    "Horny",
    "Slutty",
    "Spicy",
    "Seductive",
    "Hot",
    "Cuddly",
    "Titillating",
    "Risque",
    "Flirtatious",
    "Racy",
    "Randy",
    "Smutty",
    "Sultry"
];
button.onclick = async ()=>{
    imageArea.src = "./spinner.gif";
    const response = await fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*");
    const data = await response.json();
    const title = data["query"]["random"][0]["title"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    costumeIdea.innerHTML = `<a href="https://en.wikipedia.org/wiki/${title}">${prefix} ${title}</a>`;
    deepai.setApiKey("db75faa2-c245-49bb-81fd-8cc1a61517bf");
    const aiResponse = await deepai.callStandardApi("text2img", {
        text: `${prefix} ${title}`
    });
    imageArea.src = aiResponse["output_url"];
};

//# sourceMappingURL=index.3e2e8325.js.map
