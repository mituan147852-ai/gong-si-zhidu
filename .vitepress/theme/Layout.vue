<template>
  <!-- 加载状态：白屏，无闪烁 -->
  <div v-if="checking" class="checking-page">
    <div class="checking-text">加载中...</div>
  </div>

  <!-- 未登录：显示登录表单 -->
  <div v-else-if="!isLoggedIn" class="login-page">
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
        <div id="login-error" class="login-error" style="display:none;"></div>
        <button type="submit" class="login-btn" id="login-btn">登录</button>
      </form>
      <div class="login-info">内部资料 · 仅供授权人员使用</div>
    </div>
  </div>

  <!-- 已登录：正常显示页面内容 -->
  <Content v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress/client'
import { Content } from 'vitepress/theme'
import { supabase } from '../../supabase.js'
import './login.css'

const router = useRouter()
const checking = ref(true)
const isLoggedIn = ref(false)
const userEmail = ref('')

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    isLoggedIn.value = true
    userEmail.value = session.user.email
  }

  checking.value = false

  if (!session) {
    initLoginForm()
  }
})

async function logout() {
  await supabase.auth.signOut()
  isLoggedIn.value = false
  userEmail.value = ''
  window.location.reload()
}

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
        window.location.reload()
      }
    })
  }, 100)
}
</script>
