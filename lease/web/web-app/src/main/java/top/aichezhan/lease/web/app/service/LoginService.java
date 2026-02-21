package top.aichezhan.lease.web.app.service;

import top.aichezhan.lease.web.app.vo.user.LoginVo;
import top.aichezhan.lease.web.app.vo.user.UserInfoVo;

public interface LoginService {
    void getSMSCode(String phone);

    String login(LoginVo loginVo);

    UserInfoVo getUserInfoById(Long userId);
}
