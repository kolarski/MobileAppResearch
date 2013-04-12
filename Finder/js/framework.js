var api_url = 'http://www.da-mall.bg/api/mobile/';

var api_routes = {
    offers: {
       url: api_url + 'offers'
    }
}
var app = {
    loadModel: function (model_name, callback) {
        $.ajax({
            url: api_routes[model_name].url + '.php',
            success: function(a,b,c) {
                if (callback) callback(JSON.parse(a),b,c);
            }
        })
    }
};