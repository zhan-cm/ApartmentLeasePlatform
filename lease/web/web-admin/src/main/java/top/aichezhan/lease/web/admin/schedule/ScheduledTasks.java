package top.aichezhan.lease.web.admin.schedule;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import top.aichezhan.lease.model.entity.LeaseAgreement;
import top.aichezhan.lease.model.enums.LeaseStatus;
import top.aichezhan.lease.web.admin.service.LeaseAgreementService;

import java.util.Date;

@Component
public class ScheduledTasks {

    @Autowired
    private LeaseAgreementService leaseAgreementService;

    @Scheduled(cron = "0 0 0 * * *")
    public void checkLeaseStatus() {

        LambdaUpdateWrapper<LeaseAgreement> updateWrapper = new LambdaUpdateWrapper<>();
        Date now = new Date();

        // 1. 设置更新的内容：将状态改为“已到期” (这是你漏掉的关键代码)
        updateWrapper.set(LeaseAgreement::getStatus, LeaseStatus.EXPIRED);

        // 2. 设置过滤条件：
        // 条件 A: 租约结束日期 <= 当前时间
        updateWrapper.le(LeaseAgreement::getLeaseEndDate, now);
        // 条件 B: 当前状态必须是“已签约”或“退租中”
        updateWrapper.in(LeaseAgreement::getStatus, LeaseStatus.SIGNED, LeaseStatus.WITHDRAWING);

        leaseAgreementService.update(updateWrapper);
    }
}
