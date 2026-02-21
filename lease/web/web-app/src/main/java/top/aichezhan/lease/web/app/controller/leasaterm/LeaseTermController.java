package top.aichezhan.lease.web.app.controller.leasaterm;

import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import top.aichezhan.lease.common.result.Result;
import top.aichezhan.lease.model.entity.LeaseTerm;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import top.aichezhan.lease.web.app.service.LeaseTermService;

import java.util.List;

@RestController
@RequestMapping("/app/term/")
@Tag(name = "租期信息")
public class LeaseTermController {

    @Autowired
    private LeaseTermService service;

    @GetMapping("listByRoomId")
    @Operation(summary = "根据房间id获取可选获取租期列表")
    public Result<List<LeaseTerm>> list(@RequestParam Long id) {
        List<LeaseTerm> list = service.listByRoomId(id);
        return Result.ok(list);
    }
}
