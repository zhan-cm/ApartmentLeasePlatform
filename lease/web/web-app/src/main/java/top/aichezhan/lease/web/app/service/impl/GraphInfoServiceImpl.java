package top.aichezhan.lease.web.app.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import top.aichezhan.lease.model.entity.GraphInfo;
import top.aichezhan.lease.web.app.service.GraphInfoService;
import top.aichezhan.lease.web.app.mapper.GraphInfoMapper;
import org.springframework.stereotype.Service;

/**
* @author liubo
* @description 针对表【graph_info(图片信息表)】的数据库操作Service实现
* @createDate 2023-07-26 11:12:39
*/
@Service
public class GraphInfoServiceImpl extends ServiceImpl<GraphInfoMapper, GraphInfo>
    implements GraphInfoService{

}




