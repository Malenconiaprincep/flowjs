define(function(require,exports,module){
    module.exports = {
        methods:{
            _process:function(data,callback){
                Q.http.text2(data.templateURL, {
            		onsuccess: function(xhr, template){
		                callback(null,{template:template});
            		},
            		onfailure: function(xhr, err){
            			callback(err, null);
            		}
            	});
            }
        }
    };
});

