const button = document.getElementById("generate");
const costumeIdea = document.getElementById("costume");
const imageArea = document.getElementById("imageArea");

if (!button || !costumeIdea) {
    console.error("Oh no");
}

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

const apiKeys = [
    "db75faa2-c245-49bb-81fd-8cc1a61517bf",
    "85b4427e-815e-4efd-99e2-de892b8f2d22",
    "63510993-bfb9-4f95-bf1b-4be993b97259",
    "257b469d-4d3f-4cbd-b834-3a98d4df40ae",
    "e6895f90-4ea9-46fb-8938-5c1768425882",
    "0bdcc9d0-3a23-41d9-b012-2d593ec2e04c",
    "3c46a7b1-8121-4941-863a-3c2b1c4e857a",
    "31c3da72-e27e-474c-b2f4-a1b685722611",
    "990cd8d3-5d3c-4b66-a30f-7fbb73c71049",
    "d69babe1-068f-4fbe-bb48-7bcb06c07f14",
    "9db9323b-77d2-434e-b6db-813de7158dc5",
    "bbca70cc-0b6b-420a-b8e9-ada42f9bda10"
]

button.onclick = async () => {
    imageArea.src = "./spinner.gif";

    const response = await fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*");
    const data = await response.json();
    const title = data["query"]["random"][0]["title"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    costumeIdea.innerHTML = `<a href="https://en.wikipedia.org/wiki/${title}">${prefix} ${title}</a>`;

    deepai.setApiKey(apiKeys[Math.floor(Math.random() * apiKeys.length)]);
    const aiResponse = await deepai.callStandardApi("text2img", {
        text: `${prefix} ${title}`,
    });
    imageArea.src = aiResponse["output_url"];
}