package top.aichezhan.lease.web.app.service.impl;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import top.aichezhan.lease.web.app.service.SmsService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SmsServiceImplTest {
    @Autowired
    private SmsService smsService;

    @Test
    void sendCode() throws Exception
    {
        smsService.sendCode("13688866028", "1234");
    }


}