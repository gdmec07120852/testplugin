cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rensanning.cordova.helloworld/www/hello_world.js",
        "id": "com.rensanning.cordova.helloworld.helloworld",
        "clobbers": [
            "HelloWorld"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rensanning.cordova.helloworld": "0.0.1"
}
// BOTTOM OF METADATA
});