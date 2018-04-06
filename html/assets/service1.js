var session_id = false;
function ws_request(request_data, request_url, cb) {
    var api_url = "https://maps.googleapis.com/maps/api/geocode/json?address=lahore";
    var server_url = "http://localhost:8000";    
    if (!session_id)
    {
        var login_url = '/ws/login';
        console.log('authenticating');
        var credentials = {login:'sami',password:'123'};
        api_url = server_url + login_url;      
        send_request(api_url, credentials, function(data){
            if(!data.error)
            {
                console.log('authorized, now sending your request');
                session_id = data.data.sid;
                ws_request(request_data, request_url, cb);
            }
        });
    }
    else
    {      
        request_data.ws_sid = session_id;    
        api_url = server_url + request_url;
        var break_point = 1;

        send_request(api_url,request_data,function(data){
            if(data.error)
            {
                if (data.error == "unauthorized")
                {
                    session_id = false;
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
    $.ajax({
        url: api_url,
        dataType:'json',
        data : dataToSend,
        beforeSend:function(a, b){
            //console.log(b.url);
        },
        success:function(data){
            console.log(data);
            cb(data);
        },
        error:function(a)
        {
            console.log(a);
        }
    });
}