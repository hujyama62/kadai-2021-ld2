const profile = {
    name: "kikurage",
    age:20,
    hobby: "youtube",
    major: "philosophy",
}

const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻"
}

for (let x of Object.keys(profile)) {
    const naiyou = profile[x]
    const translate = dictionary[x]
    console.log ('私の' + translate + 'は、' + naiyou + 'です。')
}