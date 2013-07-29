define(function(require,exports,module){
    var template = require('../lib/artTemplate/template');
    module.exports = {
        methods:{
            _process:function(data,callback){
                var render, html;
                try{
                    render = template(data.template);
                    html = render(data.data);
                }catch(err){
                    callback(err, null);
                    return;
                }
                
                data.wrapper.html(html);
                callback();
            }
        }
    };
});