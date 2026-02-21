package top.aichezhan.lease.web.app.controller.login;


import org.springframework.beans.factory.annotation.Autowired;
import top.aichezhan.lease.common.login.LoginUserHolder;
import top.aichezhan.lease.common.result.Result;
import top.aichezhan.lease.web.app.service.LoginService;
import top.aichezhan.lease.web.app.vo.user.LoginVo;
import top.aichezhan.lease.web.app.vo.user.UserInfoVo;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "登录管理")
@RestController
@RequestMapping("/app/")
public class LoginController {

    @Autowired
    private LoginService service;

    @GetMapping("login/getCode")
    @Operation(summary = "获取短信验证码")
    public Result getCode(@RequestParam String phone) {
        // 1. 调用 service 里的模拟发短信逻辑
        service.getSMSCode(phone);
        return Result.ok();
    }

    @PostMapping("login")
    @Operation(summary = "登录")
    public Result<String> login(@RequestBody LoginVo loginVo) {
        // 2. 调用登录逻辑并返回 Token
        String token = service.login(loginVo);
        return Result.ok(token);
    }

    @GetMapping("info")
    @Operation(summary = "获取登录用户信息")
    public Result<UserInfoVo> info() {
        UserInfoVo info = service.getUserInfoById(LoginUserHolder.getLoginUser().getUserId());
        return Result.ok(info);
    }
}

