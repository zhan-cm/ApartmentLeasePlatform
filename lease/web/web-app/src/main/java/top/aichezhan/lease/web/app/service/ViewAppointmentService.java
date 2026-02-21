package top.aichezhan.lease.web.app.service;

import top.aichezhan.lease.model.entity.ViewAppointment;
import com.baomidou.mybatisplus.extension.service.IService;
import top.aichezhan.lease.web.app.vo.appointment.AppointmentDetailVo;
import top.aichezhan.lease.web.app.vo.appointment.AppointmentItemVo;

import java.util.List;

/**
* @author liubo
* @description 针对表【view_appointment(预约看房信息表)】的数据库操作Service
* @createDate 2023-07-26 11:12:39
*/
public interface ViewAppointmentService extends IService<ViewAppointment> {
    List<AppointmentItemVo> listItemByUserId(Long userId);

    AppointmentDetailVo getDetailById(Long id);
}
