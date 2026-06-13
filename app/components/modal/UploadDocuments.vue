<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['close'])
const { locale } = useI18n()
const config = useRuntimeConfig()

const fileInput = ref(null)
const files = ref([])
const isDragging = ref(false)
const isUploading = ref(false)
const successVisible = ref(false)
const errorLines = ref([])

const copy = {
  title: {
    uz: 'To‘ldirilgan hujjatlarni yuklash',
    ru: 'Загрузка заполненных документов',
    en: 'Upload completed documents'
  },
  subtitle: {
    uz: 'PDF, XLSX yoki ZIP fayllarni yuklang.',
    ru: 'Загрузите файлы в формате PDF, XLSX или ZIP.',
    en: 'Upload files in PDF, XLSX or ZIP format.'
  },
  dropzone: {
    uz: 'Fayllarni shu yerga tashlang yoki fayllarni tanlang',
    ru: 'Перетащите файлы сюда или выберите файлы',
    en: 'Drag your files here or browse files'
  },
  formats: {
    uz: 'Qo‘llab-quvvatlanadi: PDF, XLSX, ZIP',
    ru: 'Поддерживаются: PDF, XLSX, ZIP',
    en: 'Supported: PDF, XLSX, ZIP'
  },
  send: {
    uz: 'Yuborish',
    ru: 'Отправить',
    en: 'Send'
  },
  sending: {
    uz: 'Yuborilmoqda...',
    ru: 'Отправка...',
    en: 'Sending...'
  },
  success: {
    uz: 'Hujjat muvaffaqiyatli yuborildi',
    ru: 'Документ успешно отправлен',
    en: 'Document sent successfully'
  },
  invalidType: {
    uz: 'Faqat PDF, XLSX va ZIP fayllar qabul qilinadi.',
    ru: 'Принимаются только файлы PDF, XLSX и ZIP.',
    en: 'Only PDF, XLSX and ZIP files are accepted.'
  },
  fileTooLarge: {
    uz: 'Fayl hajmi 25 MB dan oshmasligi kerak.',
    ru: 'Размер файла не должен превышать 25 МБ.',
    en: 'File size must not exceed 25 MB.'
  },
  uploadError: {
    uz: 'Xatolik yuz berdi. Qayta urinib ko‘ring.',
    ru: 'Произошла ошибка. Попробуйте снова.',
    en: 'Something went wrong. Please try again.'
  },
  remove: {
    uz: 'Faylni olib tashlash',
    ru: 'Удалить файл',
    en: 'Remove file'
  },
  close: {
    uz: 'Yopish',
    ru: 'Закрыть',
    en: 'Close'
  }
}

const acceptedExtensions = ['pdf', 'xlsx', 'zip']
const maxFileSizeBytes = 25 * 1024 * 1024 // 25 MB
let successTimer = null
let errorTimer = null

const hasFiles = computed(() => files.value.length > 0)
const currentLocale = computed(() => (['uz', 'ru', 'en'].includes(locale.value) ? locale.value : 'ru'))
const configuredUploadEndpoint = computed(() => config.public?.NUXT_DOCUMENT_UPLOAD_URL || '')
const defaultUploadEndpoint = 'https://6935988eacba7.xvest1.ru/fic_bot_test/sendDocument.php'

function localized(key) {
  return copy[key][currentLocale.value] || copy[key].ru
}

function getLocalUploadEndpoint() {
  if (typeof window === 'undefined') {
    return '/tgbot/sendDocument.php'
  }

  const pathSegments = window.location.pathname.split('/').filter(Boolean)
  const localeIndex = pathSegments.findIndex((segment) => ['uz', 'ru', 'en'].includes(segment))

  let baseSegments = []

  if (localeIndex > -1) {
    baseSegments = pathSegments.slice(0, localeIndex)
  } else if (pathSegments.length > 1) {
    baseSegments = [pathSegments[0]]
  }

  const basePath = baseSegments.length ? `/${baseSegments.join('/')}/` : '/'
  return new URL(`${basePath}tgbot/sendDocument.php`, window.location.origin).toString()
}

function getUploadEndpoints() {
  const endpoints = configuredUploadEndpoint.value
    ? [configuredUploadEndpoint.value, getLocalUploadEndpoint(), defaultUploadEndpoint]
    : [defaultUploadEndpoint, getLocalUploadEndpoint()]

  return [...new Set(endpoints.filter(Boolean))]
}

function openPicker() {
  fileInput.value?.click()
}

function getFileKey(file) {
  return `${file.name}-${file.size}-${file.lastModified}`
}

function isAcceptedFile(file) {
  const extension = file.name.split('.').pop()?.toLowerCase() || ''
  return acceptedExtensions.includes(extension)
}

function pushFiles(fileList) {
  const nextFiles = Array.from(fileList || [])

  if (!nextFiles.length) {
    return
  }

  const invalidExists = nextFiles.some((file) => !isAcceptedFile(file))
  const tooLargeExists = nextFiles.some((file) => file.size > maxFileSizeBytes)

  if (invalidExists) {
    showError(localized('invalidType'))
  } else if (tooLargeExists) {
    showError(localized('fileTooLarge'))
  }

  const existingKeys = new Set(files.value.map(getFileKey))
  const validUniqueFiles = nextFiles.filter((file) => {
    if (!isAcceptedFile(file)) {
      return false
    }

    if (file.size > maxFileSizeBytes) {
      return false
    }

    const key = getFileKey(file)
    if (existingKeys.has(key)) {
      return false
    }

    existingKeys.add(key)
    return true
  })

  if (validUniqueFiles.length) {
    files.value = [...files.value, ...validUniqueFiles]
    if (!invalidExists) {
      hideError()
    }
  }
}

function onDragOver(event) {
  event.preventDefault()
  isDragging.value = true
}

function onDragLeave(event) {
  if (event.currentTarget === event.target) {
    isDragging.value = false
  }
}

function onDrop(event) {
  event.preventDefault()
  isDragging.value = false
  pushFiles(event.dataTransfer?.files)
}

function onBrowse(event) {
  pushFiles(event.target.files)
  event.target.value = ''
}

function removeFile(index) {
  files.value.splice(index, 1)
  if (!files.value.length) {
    hideError()
  }
}

function formatSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function showError(message) {
  errorLines.value = Array.isArray(message) ? message : [message]
  successVisible.value = false

  if (errorTimer) {
    clearTimeout(errorTimer)
  }

  errorTimer = setTimeout(() => {
    errorLines.value = []
  }, 5000)
}

function hideError() {
  errorLines.value = []
  if (errorTimer) {
    clearTimeout(errorTimer)
    errorTimer = null
  }
}

function showSuccess() {
  successVisible.value = true
  hideError()

  if (successTimer) {
    clearTimeout(successTimer)
  }

  successTimer = setTimeout(() => {
    successVisible.value = false
    emit('close')
  }, 2200)
}

function closeModal() {
  emit('close')
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

function buildFormData() {
  const formData = new FormData()

  files.value.forEach((file) => {
    // PDF fayllarda ayrim serverlar MIME bo'yicha cheklov qo'yishi mumkin.
    // Kengaytma saqlangan holda universal binary sifatida yuborish PHP tomonini sodda qiladi.
    const uploadBlob = new Blob([file], { type: 'application/octet-stream' })
    formData.append('files[]', uploadBlob, file.name)
  })

  return formData
}

async function submit() {
  if (!hasFiles.value || isUploading.value) {
    return
  }

  isUploading.value = true
  successVisible.value = false
  hideError()

  try {
    let lastError = null

    for (const endpoint of getUploadEndpoints()) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: buildFormData()
        })

        let payload = null

        try {
          payload = await response.json()
        } catch {
          payload = { success: false }
        }

        if (response.status === 413) {
          throw new Error(localized('fileTooLarge'))
        }

        if (!response.ok || !payload?.success) {
          throw new Error(payload?.error || `Upload failed via ${endpoint}`)
        }

        files.value = []
        showSuccess()
        return
      } catch (endpointError) {
        lastError = endpointError
        console.error(`Document upload failed via ${endpoint}:`, endpointError)
      }
    }

    throw lastError || new Error('Upload failed')
  } catch (error) {
    console.error('Document upload failed:', error)
    showError(error instanceof Error && error.message ? error.message : localized('uploadError'))
  } finally {
    isUploading.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''

  if (successTimer) {
    clearTimeout(successTimer)
  }

  if (errorTimer) {
    clearTimeout(errorTimer)
  }
})
</script>

<template>
  <Teleport to="body">
    <div class="ud-backdrop" @click.self="closeModal">
      <div class="ud-card" role="dialog" aria-modal="true">
        <button class="ud-close" type="button" :aria-label="localized('close')" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="#191C1F" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>

        <div class="ud-heading">
          <h2 class="ud-title">
            <span class="ud-title-line">{{ localized('title') }}</span>
          </h2>
          <p class="ud-subtitle">
            <span class="ud-subtitle-line">{{ localized('subtitle') }}</span>
          </p>
        </div>

        <div
          class="ud-dropzone"
          :class="{ 'ud-dropzone--active': isDragging }"
          @click="openPicker"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @drop="onDrop"
        >
          <input
            ref="fileInput"
            type="file"
            multiple
            accept=".pdf,.xlsx,.zip"
            class="ud-input"
            @change="onBrowse"
          />

          <div class="ud-dropzone-shell">
            <div class="ud-dropzone-icon" aria-hidden="true">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <rect x="6" y="6" width="40" height="40" rx="14" stroke="#191C1F" stroke-width="1.4" stroke-dasharray="4 4" />
                <path d="M26 32V18M26 18l-6 6M26 18l6 6" stroke="#191C1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div class="ud-copy-block ud-copy-block--primary">
              <span class="ud-copy-line">{{ localized('dropzone') }}</span>
            </div>

            <div class="ud-copy-block ud-copy-block--muted">
              <span class="ud-copy-line">{{ localized('formats') }}</span>
            </div>
          </div>
        </div>

        <TransitionGroup name="ud-file" tag="ul" class="ud-files" v-if="hasFiles">
          <li v-for="(file, index) in files" :key="getFileKey(file)" class="ud-file-item">
            <div class="ud-file-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M11 2H5a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V8l-6-6z" stroke="#191C1F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11 2v6h6" stroke="#191C1F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div class="ud-file-info">
              <span class="ud-file-name">{{ file.name }}</span>
              <span class="ud-file-size">{{ formatSize(file.size) }}</span>
            </div>

            <button
              class="ud-file-remove"
              type="button"
              :aria-label="localized('remove')"
              @click.stop="removeFile(index)"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M12 4L4 12M4 4l8 8" stroke="#191C1F" stroke-width="1.4" stroke-linecap="round" />
              </svg>
            </button>
          </li>
        </TransitionGroup>

        <Transition name="ud-alert">
          <div v-if="successVisible" class="ud-alert ud-alert--success">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9l3 3 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="ud-alert-copy">
              <span class="ud-alert-line">{{ localized('success') }}</span>
            </div>
          </div>
        </Transition>

        <Transition name="ud-alert">
          <div v-if="errorLines.length" class="ud-alert ud-alert--error">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 5.25V9.75M9 12.5h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <circle cx="9" cy="9" r="7.25" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <div class="ud-alert-copy">
              <span v-for="line in errorLines" :key="line" class="ud-alert-line">{{ line }}</span>
            </div>
          </div>
        </Transition>

        <Transition name="ud-button">
          <button v-if="hasFiles" class="btn btn-primary ud-submit" type="button" :disabled="isUploading" @click="submit">
            <span v-if="!isUploading">{{ localized('send') }}</span>
            <span v-else>{{ localized('sending') }}</span>
          </button>
        </Transition>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ud-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(25, 28, 31, 0.42);
  backdrop-filter: blur(10px);
}

.ud-card {
  position: relative;
  width: min(100%, 560px);
  border-radius: 24px;
  background: #ffffff;
  padding: 44px;
  box-shadow: 0 28px 80px rgba(25, 28, 31, 0.14);
  animation: ud-card-in 0.24s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes ud-card-in {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.ud-close {
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.06);
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.ud-close:hover {
  background: rgba(25, 28, 31, 0.12);
}

.ud-heading {
  margin-bottom: 28px;
  padding-right: 36px;
}

.ud-title {
  margin: 0 0 10px;
  color: #191c1f;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.1;
}

.ud-title-line,
.ud-subtitle-line,
.ud-copy-line,
.ud-alert-line {
  display: block;
}

.ud-subtitle {
  margin: 0;
  color: #66707a;
  font-size: 14px;
  line-height: 1.5;
}

.ud-dropzone {
  position: relative;
  margin-bottom: 20px;
  min-height: 236px;
  border: 1.5px dashed rgba(25, 28, 31, 0.22);
  border-radius: 18px;
  background: #fafafa;
  cursor: pointer;
  transition: border-color 0.18s ease, background-color 0.18s ease, transform 0.18s ease;
}

.ud-dropzone:hover,
.ud-dropzone--active {
  border-color: #191c1f;
  background: #f5f5f5;
  transform: translateY(-1px);
}

.ud-input {
  display: none;
}

.ud-dropzone-shell {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 28px;
  text-align: center;
}

.ud-dropzone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-inline: auto;
}

.ud-copy-block {
  display: grid;
  gap: 4px;
}

.ud-copy-block--primary {
  color: #191c1f;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
}

.ud-copy-block--muted {
  color: #7d8790;
  font-size: 13px;
  line-height: 1.45;
}

.ud-files {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.ud-file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #f7f7f7;
}

.ud-file-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}

.ud-file-info {
  flex: 1;
  min-width: 0;
}

.ud-file-name {
  display: block;
  color: #191c1f;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ud-file-size {
  display: block;
  margin-top: 2px;
  color: #7d8790;
  font-size: 12px;
}

.ud-file-remove {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 999px;
  background: rgba(25, 28, 31, 0.08);
  cursor: pointer;
  transition: background-color 0.18s ease;
}

.ud-file-remove:hover {
  background: rgba(25, 28, 31, 0.16);
}

.ud-alert {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.45;
}

.ud-alert--success {
  background: #f0fdf4;
  color: #166534;
}

.ud-alert--error {
  background: #fff1f2;
  color: #be123c;
}

.ud-alert-copy {
  display: grid;
  gap: 2px;
}

.ud-submit {
  width: 100%;
}

.ud-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.ud-alert-enter-active,
.ud-alert-leave-active,
.ud-button-enter-active,
.ud-button-leave-active,
.ud-file-enter-active,
.ud-file-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.ud-alert-enter-from,
.ud-alert-leave-to,
.ud-button-enter-from,
.ud-button-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.ud-file-enter-from,
.ud-file-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

@media (max-width: 640px) {
  .ud-card {
    padding: 32px 20px 20px;
    border-radius: 20px;
  }

  .ud-title {
    font-size: 24px;
  }

  .ud-dropzone {
    min-height: 216px;
  }
}
</style>
