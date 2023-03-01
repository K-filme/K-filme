let lang = {
    en:{
        home:"home",
        about:"Talk to us",
        personalbar:"personal information",
        selectlanguage:"select a language",
        Amovies:"Arabic movies",
        Emovies:"English movies",
        english:"En",
        arabic:"Ar",

    },
    ar:{
        home:"الرئيسية",
        about:"تواصل معانا",
        personalbar:"معلومات المالك",
        selectlanguage :"اختار لغة ",
        Amovies:"افلام عربي",
        Emovies:"افلام اجنبى",
        english:"اللغة الانجليزية",
        arabic:"اللغة العربية",

    }
}

let selector = document.getElementById('language-selector');
selector.onchange = updateLanguage();

function updateLanguage(){
    let language = selector.options[selector.selectIndex].value;
    let nodes = document.querySelectorAll('data-lang');

    let i = nodes.length;
    
    while(i--) {
        let key = nodes[i].getAttribute('data-lang');
        nodes[i].innerHTML = lang[language][key];
    }
}

