package top.aichezhan.lease.web.app.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import top.aichezhan.lease.model.entity.CityInfo;
import top.aichezhan.lease.web.app.service.CityInfoService;
import top.aichezhan.lease.web.app.mapper.CityInfoMapper;
import org.springframework.stereotype.Service;

/**
* @author liubo
* @description 针对表【city_info】的数据库操作Service实现
* @createDate 2023-07-26 11:12:39
*/
@Service
public class CityInfoServiceImpl extends ServiceImpl<CityInfoMapper, CityInfo>
    implements CityInfoService{

}




