const fs = require('fs')

let naiyou = fs.readFileSync('/workspace/kadai-2021-ld2/kadai-06/data.json').toString('utf-8')
let newnaiyou = Object
 
try {

    newnaiyou = JSON.parse(naiyou)

} catch (error) {

    console.log("不正なJSONフォーマットです")
    process.exit(1)

}

newnaiyou.updateAt = Date()

newnaiyou.count = newnaiyou.count + 1

naiyou = JSON.stringify(newnaiyou)

fs.writeFileSync('/workspace/kadai-2021-ld2/kadai-06/data.json', naiyou)

//直接引数にstringfy使える。したがってconstでもよい。いちいちするのも面倒だし。
//obj外に出すと、中で定義できないけれど、コードの内容が間違ってた場合と見分けが付かないのでは？
//まあでも綺麗に見れたり定義が簡単な方がよいか。constでまずは考えること。