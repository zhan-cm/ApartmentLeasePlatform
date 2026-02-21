package top.aichezhan.lease.web.admin.service;

import top.aichezhan.lease.web.admin.vo.login.CaptchaVo;
import top.aichezhan.lease.web.admin.vo.login.LoginVo;
import top.aichezhan.lease.web.admin.vo.system.user.SystemUserInfoVo;

public interface LoginService {

    CaptchaVo getCaptcha();

    String login(LoginVo loginVo);

    SystemUserInfoVo getLoginUserInfo(Long userId);
}
