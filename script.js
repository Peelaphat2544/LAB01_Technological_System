/**
 * LAB01 - ใบงานที่ 1 เรื่อง ระบบทางเทคโนโลยี (Technological System)
 * Exact A4 Paper Layout (3 Pages + Optional Teacher Key Page 4) + Direct PDF Export
 */

const STORAGE_KEY = 'lab01_tech_system_state_v1';

const SYSTEM_SLOTS = [
  { key: 'input', label: 'ตัวป้อน (Input)', css: 'slot-input' },
  { key: 'process', label: 'กระบวนการ (Process)', css: 'slot-process' },
  { key: 'output', label: 'ผลผลิต (Output)', css: 'slot-output' },
  { key: 'feedback', label: 'ข้อมูลย้อนกลับ (Feedback)', css: 'slot-feedback' }
];

const CHOICES_ORDER = ['ก', 'ข', 'ค', 'ง'];

const QUESTIONS = [
  {
    id: 1,
    page: 1,
    title: 'หม้อหุงข้าวไฟฟ้า',
    note: '',
    choices: {
      'ก': 'ข้าวสุก',
      'ข': 'สวิตช์ตัดไฟอัตโนมัติเมื่อน้ำแห้งหรือข้าวสุกแล้ว',
      'ค': 'พลังงานไฟฟ้า, ข้าวสาร, น้ำ',
      'ง': 'การเปลี่ยนพลังงานไฟฟ้าเป็นความร้อนเพื่อทำให้น้ำเดือด'
    },
    answer: { input: 'ค', process: 'ง', output: 'ก', feedback: 'ข' }
  },
  {
    id: 2,
    page: 1,
    title: 'กาน้ำร้อนไฟฟ้า',
    note: '',
    choices: {
      'ก': 'เทอร์โมสแตท (Thermostat) ตัดกระแสไฟฟ้าเมื่อน้ำเดือด',
      'ข': 'น้ำร้อน หรือ น้ำเดือด',
      'ค': 'พลังงานไฟฟ้า, น้ำเปล่า',
      'ง': 'ขดลวดทำความร้อนทำงาน ทำให้อุณหภูมิของน้ำสูงขึ้น'
    },
    answer: { input: 'ค', process: 'ง', output: 'ข', feedback: 'ก' }
  },
  {
    id: 3,
    page: 1,
    title: 'พัดลม',
    note: '(หมายเหตุ: เทคโนโลยีบางชนิดอาจจะไม่มีข้อมูลย้อนกลับแบบอัตโนมัติ)',
    choices: {
      'ก': 'ลมที่พัดออกมาให้ความเย็น',
      'ข': 'ไม่มี (พัดลมทั่วไปไม่มีระบบปรับการทำงานอัตโนมัติ)',
      'ค': 'พลังงานไฟฟ้า, การกดปุ่มเลือกเบอร์พัดลม',
      'ง': 'มอเตอร์ไฟฟ้าทำงาน ทำให้ใบพัดหมุน'
    },
    answer: { input: 'ค', process: 'ง', output: 'ก', feedback: 'ข' }
  },
  {
    id: 4,
    page: 2,
    title: 'คอมพิวเตอร์',
    note: '',
    choices: {
      'ก': 'ซีพียู (CPU) ประมวลผลข้อมูลตามคำสั่งที่ได้รับ',
      'ข': 'ข้อความหรือเสียงแจ้งเตือนบนหน้าจอเมื่อเกิดข้อผิดพลาด',
      'ค': 'ข้อมูลที่แสดงผลออกมาทางหน้าจอ หรือเสียงทางลำโพง',
      'ง': 'พลังงานไฟฟ้า, ข้อมูลที่ป้อนผ่านคีย์บอร์ดและเมาส์'
    },
    answer: { input: 'ง', process: 'ก', output: 'ค', feedback: 'ข' }
  },
  {
    id: 5,
    page: 2,
    title: 'เครื่องปรับอากาศ (แอร์)',
    note: '',
    choices: {
      'ก': 'พลังงานไฟฟ้า, อุณหภูมิที่ตั้งไว้ (เช่น 25 องศาเซลเซียส)',
      'ข': 'เซนเซอร์ตรวจจับอุณหภูมิห้อง สั่งตัดหรือต่อการทำงานของคอมเพรสเซอร์',
      'ค': 'อากาศเย็นที่ถูกปล่อยออกมา',
      'ง': 'คอมเพรสเซอร์ทำงานเพื่อดึงความร้อนออกและทำความเย็น'
    },
    answer: { input: 'ก', process: 'ง', output: 'ค', feedback: 'ข' }
  },
  {
    id: 6,
    page: 2,
    title: 'เครื่องซักผ้าอัตโนมัติ',
    note: '',
    choices: {
      'ก': 'ผ้าที่สะอาดและปั่นหมาด',
      'ข': 'มอเตอร์หมุนถังซักและระบบควบคุมการปล่อยน้ำ',
      'ค': 'พลังงานไฟฟ้า, ผ้าสกปรก, ผงซักฟอก, น้ำ',
      'ง': 'หน้าจอแสดงเวลาที่เหลือ หรือเสียงเตือนเมื่อซักเสร็จ'
    },
    answer: { input: 'ค', process: 'ข', output: 'ก', feedback: 'ง' }
  },
  {
    id: 7,
    page: 2,
    title: 'เตารีดไอน้ำ',
    note: '',
    choices: {
      'ก': 'ความร้อนที่หน้าเตารีดและไอน้ำ',
      'ข': 'พลังงานไฟฟ้า, น้ำ',
      'ค': 'เทอร์โมสแตทตัดกระแสไฟฟ้าเมื่อเตารีดมีความร้อนถึงระดับที่ตั้งไว้',
      'ง': 'การเปลี่ยนพลังงานไฟฟ้าเป็นความร้อนและต้มน้ำให้เป็นไอน้ำ'
    },
    answer: { input: 'ข', process: 'ง', output: 'ก', feedback: 'ค' }
  },
  {
    id: 8,
    page: 3,
    title: 'รถยนต์',
    note: '',
    choices: {
      'ก': 'เครื่องยนต์เผาไหม้เชื้อเพลิงเพื่อส่งกำลังขับเคลื่อนไปยังล้อ',
      'ข': 'หน้าปัดแสดงความเร็ว หรือสัญญาณเตือนเมื่อน้ำมันใกล้หมด',
      'ค': 'การเคลื่อนที่ของรถยนต์ไปยังเป้าหมาย',
      'ง': 'น้ำมันเชื้อเพลิง, การควบคุมพวงมาลัยและคันเร่ง'
    },
    answer: { input: 'ง', process: 'ก', output: 'ค', feedback: 'ข' }
  },
  {
    id: 9,
    page: 3,
    title: 'ตู้เย็น',
    note: '',
    choices: {
      'ก': 'ความเย็นภายในตู้ที่ช่วยถนอมอาหาร',
      'ข': 'เซนเซอร์ตรวจวัดอุณหภูมิ สั่งให้คอมเพรสเซอร์หยุดทำงานเมื่อเย็นเพียงพอ',
      'ค': 'คอมเพรสเซอร์ทำงานเพื่อดึงความร้อนออกจากตู้',
      'ง': 'พลังงานไฟฟ้า, สิ่งของหรืออาหารที่ต้องการแช่เย็น'
    },
    answer: { input: 'ง', process: 'ค', output: 'ก', feedback: 'ข' }
  },
  {
    id: 10,
    page: 3,
    title: 'เตาไมโครเวฟ',
    note: '',
    choices: {
      'ก': 'พลังงานไฟฟ้า, อาหารที่ต้องการอุ่น, ระดับความร้อนและเวลาที่ตั้ง',
      'ข': 'อุปกรณ์สร้างคลื่นไมโครเวฟส่งคลื่นไปทำให้อนุภาคน้ำในอาหารสั่นจนเกิดความร้อน',
      'ค': 'ระบบตัดการทำงานอัตโนมัติและเสียงเตือนเมื่อครบเวลา',
      'ง': 'อาหารที่ร้อนหรือสุกพร้อมรับประทาน'
    },
    answer: { input: 'ก', process: 'ข', output: 'ง', feedback: 'ค' }
  }
];

// Application State
let state = {
  studentName: '',
  studentRoom: '',
  studentNo: '',
  answers: {}, // { [qId]: { input: '', process: '', output: '', feedback: '' } }
  isChecked: false,
  activeTarget: null, // { qId, slotKey }
  lastSavedAt: null
};

let toastTimer = null;

const IDB_NAME = 'lab01_worksheet_db';
const IDB_STORE = 'drafts';

// Initialize empty answers map
function initEmptyAnswers() {
  const map = {};
  QUESTIONS.forEach((q) => {
    map[q.id] = { input: '', process: '', output: '', feedback: '' };
  });
  return map;
}

function hasAnyStudentWork(targetState = state) {
  if ((targetState.studentName || '').trim()) return true;
  if ((targetState.studentRoom || '').trim()) return true;
  if ((targetState.studentNo || '').trim()) return true;
  return QUESTIONS.some((q) =>
    SYSTEM_SLOTS.some((s) => Boolean(targetState.answers?.[q.id]?.[s.key]))
  );
}

function formatTimeTH(isoOrDate) {
  try {
    const d = isoOrDate ? new Date(isoOrDate) : new Date();
    return d.toLocaleTimeString('th-TH', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  } catch {
    return '';
  }
}

function updateDraftStatusUI(customMessage) {
  const statusWrap = document.getElementById('draftStatus');
  const statusText = document.getElementById('draftStatusText');
  if (!statusWrap || !statusText) return;

  if (customMessage) {
    statusWrap.classList.add('is-saved');
    statusText.textContent = customMessage;
    return;
  }

  if (state.lastSavedAt && hasAnyStudentWork()) {
    statusWrap.classList.add('is-saved');
    statusText.textContent = `บันทึกฉบับร่างอัตโนมัติ (${formatTimeTH(state.lastSavedAt)} น.)`;
  } else {
    statusWrap.classList.remove('is-saved');
    statusText.textContent = 'ระบบบันทึกฉบับร่างอัตโนมัติพร้อมทำงาน';
  }
}

function applyParsedDraft(parsed) {
  if (!parsed || typeof parsed !== 'object') return false;
  if (typeof parsed.studentName === 'string') state.studentName = parsed.studentName;
  if (typeof parsed.studentRoom === 'string') state.studentRoom = parsed.studentRoom;
  if (typeof parsed.studentNo === 'string') state.studentNo = parsed.studentNo;
  if (parsed.lastSavedAt) state.lastSavedAt = parsed.lastSavedAt;
  if (parsed.answers && typeof parsed.answers === 'object') {
    QUESTIONS.forEach((q) => {
      if (parsed.answers[q.id]) {
        SYSTEM_SLOTS.forEach((s) => {
          const val = parsed.answers[q.id][s.key];
          if (CHOICES_ORDER.includes(val)) {
            state.answers[q.id][s.key] = val;
          }
        });
      }
    });
  }
  return hasAnyStudentWork();
}

// IndexedDB backup helper (for browsers restricting file:// localStorage)
function openDraftDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error('IndexedDB not supported'));
    const req = window.indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveDraftToIDB(payload) {
  try {
    const db = await openDraftDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(payload, STORAGE_KEY);
  } catch {
    // Ignore IDB errors silently
  }
}

async function loadDraftFromIDB() {
  try {
    const db = await openDraftDB();
    return await new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(STORAGE_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function clearDraftFromIDB() {
  try {
    const db = await openDraftDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(STORAGE_KEY);
  } catch {
    // Ignore
  }
}

// Load saved state from localStorage (with IndexedDB fallback)
function loadState() {
  state.answers = initEmptyAnswers();
  let restored = false;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      restored = applyParsedDraft(JSON.parse(raw));
    }
  } catch (err) {
    console.warn('Could not load saved state:', err);
  }
  return restored;
}

function saveState() {
  try {
    // Ensure latest DOM input values are captured
    const nameEl = document.getElementById('studentName');
    const roomEl = document.getElementById('studentRoom');
    const noEl = document.getElementById('studentNo');
    if (nameEl) state.studentName = nameEl.value;
    if (roomEl) state.studentRoom = roomEl.value;
    if (noEl) state.studentNo = noEl.value;

    state.lastSavedAt = new Date().toISOString();
    const payload = {
      studentName: state.studentName,
      studentRoom: state.studentRoom,
      studentNo: state.studentNo,
      answers: state.answers,
      lastSavedAt: state.lastSavedAt
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    saveDraftToIDB(payload);
    updateDraftStatusUI();
  } catch (err) {
    console.warn('Could not save state:', err);
  }
}

// Build Question Card DOM
function createQuestionCard(q) {
  const card = document.createElement('article');
  card.className = 'question-card';
  card.id = `q-card-${q.id}`;
  card.dataset.qid = q.id;

  const slotsHtml = SYSTEM_SLOTS.map(
    (s) => `
      <div class="slot-row ${s.css}" data-qid="${q.id}" data-slot="${s.key}" title="คลิกเพื่อเลือกช่องนี้ แล้วคลิกตัวเลือก ก-ง ด้านขวา">
        <span class="slot-label">
          <span class="slot-dot"></span>
          <span>${s.label}:</span>
        </span>
        <span class="slot-control-wrap">
          <select class="slot-select empty-val" data-qid="${q.id}" data-slot="${s.key}" aria-label="ข้อ ${q.id} ${s.label}">
            <option value="">.......</option>
            ${CHOICES_ORDER.map((ch) => `<option value="${ch}">${ch}</option>`).join('')}
          </select>
          <span class="slot-mark" data-mark-qid="${q.id}" data-mark-slot="${s.key}"></span>
        </span>
      </div>
    `
  ).join('');

  const choicesHtml = CHOICES_ORDER.map(
    (ch) => `
      <div class="choice-item" data-qid="${q.id}" data-choice="${ch}" title="คลิกเพื่อนำ '${ch}' ไปเติมในช่องว่าง">
        <span class="choice-key">${ch}</span>
        <span class="choice-text">${q.choices[ch]}</span>
      </div>
    `
  ).join('');

  card.innerHTML = `
    <div class="q-card-header">
      <div class="q-title-wrap">
        <span class="q-num-badge">${q.id}</span>
        <h3 class="q-title">${q.title}</h3>
        ${q.note ? `<span class="q-note">${q.note}</span>` : ''}
      </div>
      <span class="q-status-badge hidden" id="q-status-${q.id}"></span>
    </div>
    <div class="q-card-body">
      <div class="q-slots-col">
        ${slotsHtml}
      </div>
      <div class="q-choices-col">
        ${choicesHtml}
      </div>
    </div>
  `;

  return card;
}

// Render All Questions across 3 A4 Pages
function renderWorksheet() {
  const p1Container = document.getElementById('questionsPage1');
  const p2Container = document.getElementById('questionsPage2');
  const p3Container = document.getElementById('questionsPage3');

  p1Container.innerHTML = '';
  p2Container.innerHTML = '';
  p3Container.innerHTML = '';

  QUESTIONS.forEach((q) => {
    const card = createQuestionCard(q);
    if (q.page === 1) {
      p1Container.appendChild(card);
    } else if (q.page === 2) {
      p2Container.appendChild(card);
    } else {
      p3Container.appendChild(card);
    }
  });

  // Sync student inputs
  document.getElementById('studentName').value = state.studentName;
  document.getElementById('studentRoom').value = state.studentRoom;
  document.getElementById('studentNo').value = state.studentNo;

  updateAllUI();
}

// Update UI States (Dropdowns, Used Choices, Duplicates, Progress, Grading, Running Header)
function updateAllUI() {
  let completedQuestions = 0;
  let totalCorrectSlots = 0;

  // Update Page 2 & Page 3 Running Student Info
  const runningParts = [];
  if (state.studentName.trim()) runningParts.push(`ชื่อ: ${state.studentName.trim()}`);
  if (state.studentRoom.trim()) runningParts.push(`ชั้น: ม.1/${state.studentRoom.trim()}`);
  if (state.studentNo.trim()) runningParts.push(`เลขที่: ${state.studentNo.trim()}`);
  const runningText = runningParts.join('  |  ');
  document.querySelectorAll('.running-student-info').forEach((el) => {
    el.textContent = runningText;
  });

  // Highlight active slot row
  document.querySelectorAll('.slot-row').forEach((row) => {
    const isTarget =
      state.activeTarget &&
      Number(row.dataset.qid) === state.activeTarget.qId &&
      row.dataset.slot === state.activeTarget.slotKey;
    row.classList.toggle('active-target', Boolean(isTarget));
  });

  QUESTIONS.forEach((q) => {
    const qAns = state.answers[q.id];
    const usedCounts = {};
    let filledCount = 0;
    let qCorrectCount = 0;

    SYSTEM_SLOTS.forEach((s) => {
      const val = qAns[s.key] || '';
      if (val) {
        filledCount++;
        usedCounts[val] = (usedCounts[val] || 0) + 1;
      }
      if (val && val === q.answer[s.key]) {
        qCorrectCount++;
        totalCorrectSlots++;
      }
    });

    if (filledCount === 4) completedQuestions++;
    const hasDuplicates = Object.values(usedCounts).some((c) => c > 1);

    // Update each slot select & check mark
    SYSTEM_SLOTS.forEach((s) => {
      const val = qAns[s.key] || '';
      const selectEl = document.querySelector(`.slot-select[data-qid="${q.id}"][data-slot="${s.key}"]`);
      const markEl = document.querySelector(`.slot-mark[data-mark-qid="${q.id}"][data-mark-slot="${s.key}"]`);

      if (selectEl) {
        selectEl.value = val;
        selectEl.classList.toggle('empty-val', !val);
        selectEl.classList.toggle('dup-val', !state.isChecked && Boolean(val && usedCounts[val] > 1));
        selectEl.classList.toggle('is-correct', state.isChecked && val === q.answer[s.key]);
        selectEl.classList.toggle('is-wrong', state.isChecked && val !== q.answer[s.key]);
      }

      if (markEl) {
        if (state.isChecked) {
          const ok = val === q.answer[s.key];
          markEl.textContent = ok ? '✓' : '✗';
          markEl.className = `slot-mark ${ok ? 'mark-ok' : 'mark-err'}`;
        } else {
          markEl.textContent = '';
          markEl.className = 'slot-mark';
        }
      }
    });

    // Update used choices highlight on the right column
    CHOICES_ORDER.forEach((ch) => {
      const choiceEl = document.querySelector(`.choice-item[data-qid="${q.id}"][data-choice="${ch}"]`);
      if (choiceEl) {
        choiceEl.classList.toggle('choice-used', Boolean(usedCounts[ch]));
      }
    });

    // Update question header status badge
    const statusBadge = document.getElementById(`q-status-${q.id}`);
    if (statusBadge) {
      if (state.isChecked) {
        statusBadge.classList.remove('hidden', 'status-perfect', 'status-partial', 'status-dup');
        if (qCorrectCount === 4) {
          statusBadge.textContent = 'ถูกต้องครบ (1/1)';
          statusBadge.classList.add('status-perfect');
        } else {
          statusBadge.textContent = `ถูก ${qCorrectCount}/4 ช่อง`;
          statusBadge.classList.add('status-partial');
        }
      } else if (hasDuplicates) {
        statusBadge.classList.remove('hidden', 'status-perfect', 'status-partial');
        statusBadge.classList.add('status-dup');
        statusBadge.textContent = 'ตัวอักษรซ้ำกัน';
      } else {
        statusBadge.className = 'q-status-badge hidden';
        statusBadge.textContent = '';
      }
    }
  });

  // Update Progress Bar
  document.getElementById('progressText').textContent = `${completedQuestions} / ${QUESTIONS.length} ข้อ`;
  document.getElementById('progressFill').style.width = `${(completedQuestions / QUESTIONS.length) * 100}%`;

  // Update Score Box & Check Button
  const scoreDisplay = document.getElementById('scoreDisplay');
  const btnCheck = document.getElementById('btnCheck');
  const btnCheckLabel = document.getElementById('btnCheckLabel');

  if (state.isChecked) {
    const rawScore = totalCorrectSlots * 0.25;
    const formattedScore = Number.isInteger(rawScore) ? String(rawScore) : rawScore.toFixed(2).replace(/\.?0+$/, '');
    scoreDisplay.textContent = formattedScore;
    btnCheck.classList.add('active');
    btnCheckLabel.textContent = 'ซ่อนผลตรวจ';
  } else {
    scoreDisplay.textContent = '......';
    btnCheck.classList.remove('active');
    btnCheckLabel.textContent = 'ตรวจคำตอบ';
  }
}

// Show Toast Message
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}

// Update Page Numbers in Footers (3 A4 Pages)
function syncPageNumbers() {
  const totalPages = 3;
  document.querySelectorAll('.page-num').forEach((el) => {
    const p = el.dataset.page;
    el.textContent = `หน้า ${p} / ${totalPages}`;
  });
}

// Sanitize string for safe PDF filename
function sanitizeFilenamePart(str) {
  return str.trim().replace(/[\\/:*?"<>|\s]+/g, '_');
}

function buildPdfFilename() {
  const rawNo = document.getElementById('studentNo')?.value ?? state.studentNo;
  const rawName = document.getElementById('studentName')?.value ?? state.studentName;

  const no = sanitizeFilenamePart(rawNo) || 'เลขที่';
  const name = sanitizeFilenamePart(rawName) || 'ชื่อ_นามสกุล';

  return `${no}_${name}.pdf`;
}

// Direct Client-Side A4 PDF Export (210mm x 297mm Exact A4 Proportion)
async function exportToPDF() {
  const btnExport = document.getElementById('btnExportPdf');
  const btnLabel = document.getElementById('btnExportLabel');

  if (typeof window.html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    showToast('ไม่พบไลบรารี PDF (ออฟไลน์) กำลังเปิดหน้าต่างบันทึกเป็น PDF ของเบราว์เซอร์...');
    setTimeout(() => window.print(), 500);
    return;
  }

  btnExport.disabled = true;
  btnLabel.textContent = 'กำลังสร้าง PDF...';
  showToast('กำลังสร้างไฟล์ PDF ขนาด A4 ความละเอียดสูง กรุณารอสักครู่...', 6000);

  let stage = null;

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    stage = document.createElement('div');
    stage.className = 'pdf-export-stage';
    document.body.appendChild(stage);

    const visibleSheets = Array.from(document.querySelectorAll('#worksheetDocument .a4-sheet:not(.hidden)'));
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    for (let i = 0; i < visibleSheets.length; i++) {
      const originalSheet = visibleSheets[i];
      const cloneSheet = originalSheet.cloneNode(true);

      // Replace <input> with static .pdf-field-span so Thai vowels never clip
      const origInputs = originalSheet.querySelectorAll('input[type="text"]');
      const cloneInputs = cloneSheet.querySelectorAll('input[type="text"]');
      cloneInputs.forEach((cInput, idx) => {
        const val = origInputs[idx] ? origInputs[idx].value.trim() : '';
        const span = document.createElement('span');
        span.className = 'pdf-field-span';
        span.textContent = val || '\u00A0';
        cInput.replaceWith(span);
      });

      // Replace <select> with static .pdf-slot-box for razor-sharp PDF boxes
      const origSelects = originalSheet.querySelectorAll('select.slot-select');
      const cloneSelects = cloneSheet.querySelectorAll('select.slot-select');
      cloneSelects.forEach((cSel, idx) => {
        const origSel = origSelects[idx];
        const val = origSel ? origSel.value : '';
        const box = document.createElement('span');
        box.className = 'pdf-slot-box';
        if (!val) {
          box.classList.add('is-empty');
          box.textContent = '.........';
        } else {
          box.textContent = val;
          if (origSel.classList.contains('is-correct')) box.classList.add('is-correct');
          if (origSel.classList.contains('is-wrong')) box.classList.add('is-wrong');
        }
        cSel.replaceWith(box);
      });

      stage.innerHTML = '';
      stage.appendChild(cloneSheet);

      await new Promise((r) => requestAnimationFrame(r));

      const sheetW = cloneSheet.offsetWidth;
      const sheetH = cloneSheet.offsetHeight;

      const canvas = await window.html2canvas(cloneSheet, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: sheetW,
        height: sheetH,
        windowWidth: 1200,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.96);
      if (i > 0) {
        pdf.addPage('a4', 'portrait');
      }
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    }

    const filename = buildPdfFilename();
    pdf.save(filename);
    showToast(`ดาวน์โหลดไฟล์ "${filename}" เรียบร้อยแล้ว!`);
  } catch (err) {
    console.error('PDF Export Error:', err);
    showToast('เกิดข้อผิดพลาดในการสร้าง PDF ระบบจะเปิดหน้าต่างพิมพ์เป็น PDF แทน');
    setTimeout(() => window.print(), 600);
  } finally {
    if (stage && stage.parentNode) {
      stage.parentNode.removeChild(stage);
    }
    btnExport.disabled = false;
    btnLabel.textContent = 'Export PDF';
  }
}

// Event Listeners Setup
function bindEvents() {
  const studentNameEl = document.getElementById('studentName');
  const studentRoomEl = document.getElementById('studentRoom');
  const studentNoEl = document.getElementById('studentNo');

  studentNameEl.addEventListener('input', (e) => {
    state.studentName = e.target.value;
    saveState();
    updateAllUI();
  });

  studentRoomEl.addEventListener('input', (e) => {
    state.studentRoom = e.target.value;
    saveState();
    updateAllUI();
  });

  studentNoEl.addEventListener('input', (e) => {
    state.studentNo = e.target.value;
    saveState();
    updateAllUI();
  });

  const docEl = document.getElementById('worksheetDocument');

  docEl.addEventListener('change', (e) => {
    const sel = e.target.closest('.slot-select');
    if (!sel) return;
    const qId = Number(sel.dataset.qid);
    const slotKey = sel.dataset.slot;
    state.answers[qId][slotKey] = sel.value;
    if (state.isChecked) state.isChecked = false;

    const nextEmpty = SYSTEM_SLOTS.find((s) => !state.answers[qId][s.key]);
    state.activeTarget = nextEmpty ? { qId, slotKey: nextEmpty.key } : null;

    saveState();
    updateAllUI();
  });

  docEl.addEventListener('click', (e) => {
    if (e.target.closest('select')) return;

    const slotRow = e.target.closest('.slot-row');
    if (slotRow) {
      const qId = Number(slotRow.dataset.qid);
      const slotKey = slotRow.dataset.slot;
      if (state.activeTarget && state.activeTarget.qId === qId && state.activeTarget.slotKey === slotKey) {
        state.activeTarget = null;
      } else {
        state.activeTarget = { qId, slotKey };
      }
      updateAllUI();
      return;
    }

    const choiceItem = e.target.closest('.choice-item');
    if (choiceItem) {
      const qId = Number(choiceItem.dataset.qid);
      const choiceVal = choiceItem.dataset.choice;
      const qAns = state.answers[qId];

      let targetSlotKey = null;

      if (state.activeTarget && state.activeTarget.qId === qId) {
        targetSlotKey = state.activeTarget.slotKey;
      } else {
        const existingSlot = SYSTEM_SLOTS.find((s) => qAns[s.key] === choiceVal);
        if (existingSlot) {
          qAns[existingSlot.key] = '';
          state.activeTarget = { qId, slotKey: existingSlot.key };
          if (state.isChecked) state.isChecked = false;
          saveState();
          updateAllUI();
          return;
        }
        const firstEmpty = SYSTEM_SLOTS.find((s) => !qAns[s.key]);
        targetSlotKey = firstEmpty ? firstEmpty.key : 'input';
      }

      SYSTEM_SLOTS.forEach((s) => {
        if (s.key !== targetSlotKey && qAns[s.key] === choiceVal) {
          qAns[s.key] = '';
        }
      });

      qAns[targetSlotKey] = choiceVal;
      if (state.isChecked) state.isChecked = false;

      const nextEmpty = SYSTEM_SLOTS.find((s) => !qAns[s.key]);
      state.activeTarget = nextEmpty ? { qId, slotKey: nextEmpty.key } : null;

      saveState();
      updateAllUI();
    }
  });

  document.getElementById('btnCheck').addEventListener('click', () => {
    if (state.isChecked) {
      state.isChecked = false;
      updateAllUI();
      return;
    }

    state.isChecked = true;
    state.activeTarget = null;
    updateAllUI();

    const scoreText = document.getElementById('scoreDisplay').textContent;
    showToast(`ตรวจคำตอบเรียบร้อย! คะแนนที่ได้: ${scoreText} / 10 คะแนน`);
  });

  document.getElementById('btnSaveDraft')?.addEventListener('click', () => {
    saveState();
    updateDraftStatusUI(`บันทึกฉบับร่างแล้ว (${formatTimeTH(state.lastSavedAt)} น.)`);
    showToast('บันทึกฉบับร่างเรียบร้อย! หากเผลอปิดเบราว์เซอร์ ข้อมูลจะยังอยู่ครบเมื่อเปิดใหม่');
  });

  // Auto-save immediately if the user switches tabs, minimizes, or closes the browser
  window.addEventListener('pagehide', () => saveState());
  window.addEventListener('beforeunload', () => saveState());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveState();
    }
  });

  document.getElementById('btnReset').addEventListener('click', () => {
    const hasAnyData = hasAnyStudentWork();

    if (hasAnyData && !window.confirm('ต้องการล้างชื่อและคำตอบทั้งหมดให้เป็นใบงานเปล่าใช่หรือไม่?')) {
      return;
    }

    state.studentName = '';
    state.studentRoom = '';
    state.studentNo = '';
    state.answers = initEmptyAnswers();
    state.isChecked = false;
    state.activeTarget = null;
    state.lastSavedAt = null;

    document.getElementById('studentName').value = '';
    document.getElementById('studentRoom').value = '';
    document.getElementById('studentNo').value = '';

    localStorage.removeItem(STORAGE_KEY);
    clearDraftFromIDB();
    updateAllUI();
    updateDraftStatusUI();
    showToast('ล้างข้อมูลเป็นใบงานเปล่าเรียบร้อยแล้ว');
  });

  document.getElementById('btnPrint').addEventListener('click', () => {
    state.activeTarget = null;
    updateAllUI();
    const prevTitle = document.title;
    document.title = buildPdfFilename().replace(/\.pdf$/i, '');
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 1000);
  });

  document.getElementById('btnExportPdf').addEventListener('click', () => {
    state.activeTarget = null;
    updateAllUI();
    exportToPDF();
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  let restored = loadState();
  if (!restored) {
    const idbDraft = await loadDraftFromIDB();
    if (idbDraft) {
      restored = applyParsedDraft(idbDraft);
    }
  }
  renderWorksheet();
  syncPageNumbers();
  bindEvents();
  if (restored) {
    updateDraftStatusUI(
      state.lastSavedAt
        ? `กู้คืนฉบับร่างล่าสุดแล้ว (${formatTimeTH(state.lastSavedAt)} น.)`
        : 'กู้คืนฉบับร่างล่าสุดแล้ว'
    );
    showToast('กู้คืนข้อมูลฉบับร่างล่าสุดของคุณเรียบร้อยแล้ว');
  } else {
    updateDraftStatusUI();
  }
});
