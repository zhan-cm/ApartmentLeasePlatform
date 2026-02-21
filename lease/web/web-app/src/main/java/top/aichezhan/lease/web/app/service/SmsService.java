package top.aichezhan.lease.web.app.service;

public interface SmsService {
    void sendCode(String phone, String verifyCode);
}
