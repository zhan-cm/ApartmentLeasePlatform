# ApartmentLeasePlatform
### 项目简介
本项目是一款全栈公寓租赁平台，基于 Spring Boot 3 和 Vue 3 开发。项目包名已由个人重构为 top.aichezhan，并在原项目基础上进行了部分优化与功能验证。

系统分为两个端：

用户移动端：为租客提供找房、看房预约、合同管理等便捷服务。

后台管理系统：为公寓运营方提供房源配置、租赁生命周期管理、用户权限管理等核心功能。

### 核心功能
1. 移动端 (App/H5)
精准找房：支持按区域、价格、租赁方式等多维度筛选房源。

看房预约：用户可在线选择时间预约实地看房。

租约管理：支持在线查看合同、发起续约或退租申请。

个人中心：管理浏览历史、预约状态、个人资料等。

2. 后台管理系统 (Admin)
权限管理：基于 JWT 的多级权限控制（管理员、员工）。

房源管理：灵活配置公寓、房间、配套设施及杂费。

租赁管理：管理签约、续约、退租等完整的业务闭环。

系统设置：字典表管理、公寓属性自定义等。

### 技术栈
后端 (Backend)
核心框架：Spring Boot 3.0.x

持久层：MyBatis-Plus (高性能 CRUD)

数据库：MySQL 8.0

缓存：Redis (实现短信验证码、登录 Session 缓存)

对象存储：MinIO (存储房源图片、用户头像)

接口文档：Knife4j (Swagger 增强版)

安全认证：JWT (实现多端状态保持)

前端 (Frontend)
框架：Vue 3

构建工具：Vite

状态管理：Pinia

UI 组件库：Element Plus / Vant UI

### 项目结构
lease/<br>
├── common/          # 公共模块（工具类、配置、常量）<br>
├── model/           # 数据模型模块（实体类、枚举类）<br>
├── web/             # Web模块父工程<br>
│   ├── web-admin/   # 后台管理系统（Mapper、Service、Controller）<br>
│   └── web-app/     # 移动端服务（Mapper、Service、Controller）<br>
rentHouseAdmin/  # 后台管理前端项目（Vue 3）<br>
rentHouseH5/     # 移动端前端项目（Vue 3）<br>
### 快速开始
1. 环境准备
JDK 17+

MySQL 8.0+

Redis 6.0+

MinIO

2. 数据库配置
创建数据库 lease。

执行项目路径下 sql/lease.sql 初始化表结构和数据。

3. 后端启动
修改 application-dev.yml 中的 MySQL、Redis、MinIO 连接地址和密钥。

找到 web-admin 或 web-app 的主类启动。

访问接口文档：http://localhost:8080/doc.html。

4. 前端启动
### 项目预览
<img width="2559" height="1299" alt="屏幕截图 2026-02-20 225606" src="https://github.com/user-attachments/assets/d4f24b19-dede-4938-b9a2-ccbb4c1f06d1" />
<img width="2559" height="1302" alt="屏幕截图 2026-02-20 230333" src="https://github.com/user-attachments/assets/06fd92cd-f085-46da-ad55-61c4fa80b6bd" />



### 开发说明 (必写)
重构说明：本项目在原项目基础上进行了包名重构，全局路径由 com.atguigu 替换为 top.aichezhan。

脱敏处理：上传时已将 application.yml 中的私密 AccessKey 移除，请使用者自行配置。

### 声明
本项目业务逻辑与代码结构参考了 尚硅谷 的《尚庭公寓》教学项目。仅用于个人学习交流，严禁用于任何商业用途。
