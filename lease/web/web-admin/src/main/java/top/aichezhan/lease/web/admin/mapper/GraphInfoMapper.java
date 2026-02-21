package top.aichezhan.lease.web.admin.mapper;

import top.aichezhan.lease.model.entity.GraphInfo;
import top.aichezhan.lease.model.enums.ItemType;
import top.aichezhan.lease.web.admin.vo.graph.GraphVo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
* @author liubo
* @description 针对表【graph_info(图片信息表)】的数据库操作Mapper
* @createDate 2023-07-24 15:48:00
* @Entity top.aichezhan.lease.model.GraphInfo
*/
public interface GraphInfoMapper extends BaseMapper<GraphInfo> {

    List<GraphVo> selectListByItemTypeAndId(ItemType itemType, Long itemId);
}




