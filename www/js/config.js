$.support.cors = true;

window.$config = {
	env 	: "dev",
	upkeep 	: false, /* Mantenimiento */
	dev : {
	 	baseUrl : "localhost",
	    service : "http://test.altiviaot.com/wp"
	},
	qa : {
	 	baseUrl : "http://test.altiviaot.com/wp-mobile",
	    service : "http://test.altiviaot.com/wp"
	} 
}

var uget = function (params) {
    return $.ajax({
        xhrFields: {
            withCredentials: true
        }, type: (params.type)? params.type : 'GET',
        url: (params.url)? params.url : '',
        data: (params.data)? params.data : {},
        crossDomain: true
    });
};