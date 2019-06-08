import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class User{
    login(loginInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
    logout(){
        return _mm.request({
            type: 'post',
            url: '/user/logout.do'
        });
    }
    checkLoginInfo(loginInfo){
        if(typeof loginInfo.username !== 'string' || loginInfo.username.length === 0){
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        if(typeof loginInfo.password !== 'string' || loginInfo.password.length === 0){
            return {
                status: false,
                msg: '密码不能为空'
            }
        }
        return {
            status: true,
            msg: '验证通过'
        }
    }
    getUserList(pageNum){
        return _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum: pageNum
            }
        });
    }
}

export default User;