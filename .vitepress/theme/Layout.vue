<template>
  <!-- 登录页：独立布局 -->
  <div v-if="isLoginPage" class="login-page">
    <div class="login-card">
      <div class="login-title">📋 制度库登录</div>
      <div class="login-subtitle">请输入账号信息访问制度库</div>
      <form class="login-form" id="login-form-el">
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" id="login-email" placeholder="请输入邮箱" required />
        </div>
        <div class="form-group">
          <label>密码</label>
          <input type="password" id="login-password" placeholder="请输入密码" required />
        </div>
        <div id="login-error" style="display:none;color:#dc2626;font-size:13px;text-align:center;padding:8px;background:#fef2f2;border-radius:6px;"></div>
        <button type="submit" class="login-btn" id="login-btn">登录</button>
      </form>
      <div class="login-info">内部资料 · 仅供授权人员使用</div>
    </div>
  </div>

  <!-- 其他页面：默认主题 + 认证检查 -->
  <DefaultTheme v-else>
    <template #home-hero-after>
      <div id="auth-status"></div>
    </template>
  </DefaultTheme>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useData } from 'vitepress/client'
import DefaultTheme from 'vitepress/theme'
import { supabase } from '../../supabase.js'
import './login.css'

const router = useRouter()
const { page } = useData()

const isLoginPage = computed(() => page.value.frontmatter.layout === 'login')

onMounted(async () => {
  // 登录页不做认证检查
  if (isLoginPage.value) {
    // 检查是否已登录，已登录则跳转首页
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      window.location.href = '/'
      return
    }
    // 初始化登录表单
    initLoginForm()
    return
  }

  // 非登录页：检查认证
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = '/login'
    return
  }

  // 显示已登录状态
  const authStatus = document.getElementById('auth-status')
  if (authStatus) {
    authStatus.innerHTML = `
      <div style="text-align:center;padding:12px;color:#666;font-size:13px;border-top:1px solid #eee;margin-top:16px;">
        已登录：${session.user.email}
        <button id="logout-btn" style="margin-left:12px;padding:4px 12px;background:#f3f4f6;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;">退出</button>
      </div>
    `
    document.getElementById('logout-btn')?.addEventListener('click', async () => {
      await supabase.auth.signOut()
      window.location.href = '/login'
    })
  }
})

function initLoginForm() {
  setTimeout(() => {
    const form = document.getElementById('login-form-el')
    const btn = document.getElementById('login-btn')
    if (!form || !btn) return

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const emailVal = document.getElementById('login-email').value
      const passwordVal = document.getElementById('login-password').value
      const errorDiv = document.getElementById('login-error')

      btn.disabled = true
      btn.textContent = '登录中...'
      errorDiv.style.display = 'none'

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailVal,
        password: passwordVal
      })

      if (error) {
        errorDiv.textContent = error.message
        errorDiv.style.display = 'block'
        btn.disabled = false
        btn.textContent = '登录'
      } else {
        window.location.href = '/'
      }
    })
  }, 100)
}
</script>
