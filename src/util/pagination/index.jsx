import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage  //只有一页，隐藏下面页数查询
                        showQuickJumper   //显示快速跳转到该页
                    />  
                </div>
            </div>
        );
    }
}

export default Pagination;