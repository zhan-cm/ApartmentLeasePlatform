// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/rentHouseAdmin/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/rentHouseAdmin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { viteMockServe } from "file:///E:/rentHouseAdmin/node_modules/vite-plugin-mock/dist/index.js";
import { createSvgIconsPlugin } from "file:///E:/rentHouseAdmin/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import VueSetupExtend from "file:///E:/rentHouseAdmin/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import vueJsx from "file:///E:/rentHouseAdmin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import svgLoader from "file:///E:/rentHouseAdmin/node_modules/vite-svg-loader/index.js";
var __vite_injected_original_dirname = "E:\\rentHouseAdmin";
var vite_config_default = defineConfig((config) => {
  const { command, mode } = config;
  const env = loadEnv(mode, process.cwd());
  return {
    base: "/",
    plugins: [
      vue(),
      viteMockServe({
        // 只在开发阶段开启 mock 服务,mock和后端服务器接口能共存，可以通过配置来区分
        localEnabled: command === "serve"
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      // * vite 可以使用 jsx/tsx 语法
      vueJsx(),
      // * name 可以写在 script 标签上
      VueSetupExtend(),
      // * vite-svg-loader支持，可以直接引入svg图标当作组件使用
      svgLoader()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },
    server: {
      host: "localhost",
      proxy: {
        "/admin": {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxyZW50SG91c2VBZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccmVudEhvdXNlQWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3JlbnRIb3VzZUFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbmZpZykgPT4ge1xuICBjb25zdCB7IGNvbW1hbmQsIG1vZGUgfSA9IGNvbmZpZ1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiAnLycsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgICAgLy8gXHU1M0VBXHU1NzI4XHU1RjAwXHU1M0QxXHU5NjM2XHU2QkI1XHU1RjAwXHU1NDJGIG1vY2sgXHU2NzBEXHU1MkExLG1vY2tcdTU0OENcdTU0MEVcdTdBRUZcdTY3MERcdTUyQTFcdTU2NjhcdTYzQTVcdTUzRTNcdTgwRkRcdTUxNzFcdTVCNThcdUZGMENcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdcdTkxNERcdTdGNkVcdTY3NjVcdTUzM0FcdTUyMDZcbiAgICAgICAgbG9jYWxFbmFibGVkOiBjb21tYW5kID09PSAnc2VydmUnLFxuICAgICAgfSksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgICAgLy8gKiB2aXRlIFx1NTNFRlx1NEVFNVx1NEY3Rlx1NzUyOCBqc3gvdHN4IFx1OEJFRFx1NkNENVxuICAgICAgdnVlSnN4KCksXG4gICAgICAvLyAqIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICAvLyAqIHZpdGUtc3ZnLWxvYWRlclx1NjUyRlx1NjMwMVx1RkYwQ1x1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NUYxNVx1NTE2NXN2Z1x1NTZGRVx1NjgwN1x1NUY1M1x1NEY1Q1x1N0VDNFx1NEVGNlx1NEY3Rlx1NzUyOFxuICAgICAgc3ZnTG9hZGVyKCksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9hZG1pbic6IHtcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9CQVNFX1VSTCxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlPLFNBQVMsY0FBYyxlQUFlO0FBQy9RLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQVB0QixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxXQUFXO0FBQ3RDLFFBQU0sRUFBRSxTQUFTLEtBQUssSUFBSTtBQUMxQixRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBRXZDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLGNBQWM7QUFBQTtBQUFBLFFBRVosY0FBYyxZQUFZO0FBQUEsTUFDNUIsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFFBQzFELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQTtBQUFBLE1BRUQsT0FBTztBQUFBO0FBQUEsTUFFUCxlQUFlO0FBQUE7QUFBQSxNQUVmLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxVQUFVO0FBQUEsVUFDUixRQUFRLElBQUk7QUFBQSxVQUNaLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
