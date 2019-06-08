class MUtil{
    request(param){
        let _this = this;
        return new Promise(function(resolve, reject){
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if(res.status === 0){
                        // 正确数据
                        resolve(res.data, res.msg)
                    }else if(res.status === 10){
                        //10 重定向到登录页面
                        _this.doLogin();
                    }else{
                        //服务器错误信息
                        reject(res.msg || res.data)
                    }
                    
                },
                error: err => {
                    reject(err.statusText)
                }
            })
        });  
    }
    //跳转登录
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    //获取url参数
    getUrlParam(name){
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp('(^|$)' + name + '=([^$]*)(&|$)'),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
    //错误提示
    errorTips(errMsg){
        alert(errMsg)
    }
    //保存key value到localstorage
    setStorage(name, data){
        if(typeof data === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data));
        }else if(typeof data === 'number' || typeof data === 'string' || typeof data === 'boolean'){
            window.localStorage.setItem(name, data);
        }else{
            alert('该类型不能用于本地存储')
        }
    }
    //取出存储内容
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }else{
            return '';
        }
    }
    //
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
}

export default MUtil;