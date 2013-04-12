var api_url = 'http://www.da-mall.bg/api/';

var api_routes = {
    offers: {
       url: api_url + 'offers'
    }
}
var app = {
    loadModel: function (model_name) {
        console.log(api_routes[model_name]);
    }
};