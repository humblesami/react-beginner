var ws_config = {
    server_base_url: 'http://localhost:8069',
    login_url:'/ws/login',
    session_id:false
};
function ws_request(request_url,request_data, cb) {
    var api_url = false;
    if(request_url=='test')
    {
        api_url = "https://maps.googleapis.com/maps/api/geocode/json?address=lahore";
        send_request(api_url,request_data,cb);
    }
    else if (!ws_config.session_id && ws_config.server_base_url && ws_config.login_url)
    {        
        console.log('authenticating');
        var credentials = {login:'sami',password:'123'};
        api_url = ws_config.server_base_url + ws_config.login_url;      
        send_request(api_url, credentials, function(data){
            if(!data.error)
            {
                console.log('authorized, now sending your request');
                ws_config.session_id = data.data.sid;
                if(cb)
                {
                    ws_request(request_url,request_data, cb);
                }
            }
        });
    }
    else
    {      
        request_data.ws_sid = ws_config.session_id; 
        if(ws_config.server_base_url)   
        {
            api_url = ws_config.server_base_url + request_url;
        }
        else
        {
            api_url = request_url;
        }
        var break_point = 1;

        send_request(api_url,request_data,function(data){
            if(data.error)
            {
                if (data.error == "unauthorized")
                {
                    ws_config.session_id = false;
                }
            }
            else
            {
                data = data.data;
                cb(data);            
            }
        });
    }
}

function send_request(api_url, dataToSend, cb)
{
    if(api_url=='test')
    {
        api_url = "https://maps.googleapis.com/maps/api/geocode/json?address=lahore";
    }
    $.ajax({
        url: api_url,
        dataType:'json',
        data : dataToSend,
        beforeSend:function(a, b){
            console.log(b.url);
        },
        success:function(data){
            console.log(data);
            if(cb)
            {
                cb(data);
            }
        },
        error:function(a)
        {
            console.log(a);
        }
    });
}
export default ws_request;