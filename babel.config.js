module.exports = {
    presets:[
        "@babel/env",
        [
            "@babel/react",
            {
                runtime:"automatic"
            }
        ]
    ],
    plugins:[["babel-plugin-module-resolver",
        {
            "alias":{
                "@style":"./src/style"
            }
        }
    ]]
}