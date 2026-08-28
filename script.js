// Constants
const DAYS = [
  { key: "SEG", label: "Segunda", labelEn: "Monday" },
  { key: "TER", label: "Terça", labelEn: "Tuesday" },
  { key: "QUA", label: "Quarta", labelEn: "Wednesday" },
  { key: "QUI", label: "Quinta", labelEn: "Thursday" },
  { key: "SEX", label: "Sexta", labelEn: "Friday" },
];

const DISPLAY_SLOTS = [
  { start: "10:00", end: "12:40" },
  { start: "13:00", end: "14:40" },
  { start: "14:55", end: "16:35" },
  { start: "17:00", end: "18:40" },
  { start: "19:00", end: "20:40" },
];

const DAY_MAP = {
  "2a": "SEG",
  "3a": "TER",
  "4a": "QUA",
  "5a": "QUI",
  "6a": "SEX",
};

const HOLIDAYS = [
  "2026-08-15", // Assunção de Nossa Senhora (Feriado Municipal - BH)
  "2026-09-07", // Independência do Brasil
  "2026-10-12", // Nossa Senhora Aparecida
  "2026-11-02", // Finados
  "2026-11-15", // Proclamação da República
  "2026-11-20", // Dia Nacional de Zumbi e da Consciência Negra
  "2026-12-08"  // Imaculada Conceição (Feriado Municipal - BH)
];

const TRANSLATIONS = {
  pt: {
    title: "Grade de Horários",
    subtitle: "Visualização interativa da oferta atualizada de disciplinas do PPGCC",
    disciplines: "disciplinas",
    resultSummary: "de",
    scheduled: "com horário",
    rooms: "salas informadas",
    search: "Buscar disciplina, código, turma, docente ou sala",
    searchHelp: "Busca múltipla: use ponto e vírgula para separar vários termos, por exemplo <strong>DCC001; DCC002</strong>.",
    searchHelpTitle: "Busca múltipla",
    select: "Selecionar",
    selected: "Selecionada",
    details: "Detalhes",
    addToGoogleCalendar: "Selecione disciplinas na grade ou na lista e use o botão de agenda para exportar um arquivo .ics com os eventos recorrentes do semestre inteiro.",
    googleCalendar: "Google Agenda",
    conflictTitle: "Atenção",
    conflictMessage: "Há disciplinas com horários conflitantes na seleção.",
    conflictHelp: "Você não conseguirá adicionar ambas no mesmo horário no Google Agenda.",
    ok: "OK",
    close: "Fechar",
    code: "Código",
    type: "Tipo",
    isolated: "Disciplina isolada",
    all: "Todos",
    optional: "Optativas",
    mandatory: "Obrigatórias",
    yes: "Sim",
    no: "Não",
    clear: "Limpar filtros",
    print: "Baixar PDF",
    exportPDF: "Baixar como PDF",
    exportImage: "Baixar como Imagem",
    exportJSON: "Baixar como JSON",
    importJSON: "Importar JSON",
    semester: "Semestre",
    noResults: "Nenhuma disciplina encontrada com os filtros atuais.",
    schedule: "Grade semanal",
    scheduleDesc: "Os cards exibem disciplina, turma, sala e docente. Clique em um card para ver os detalhes completos.",
    list: "Lista de disciplinas",
    listDesc: "Inclui carga horária, créditos, tipo, docente, sala, início das aulas e possibilidade de disciplina isolada.",
    scheduleMissingTitle: "Horário não informado",
    scheduleMissingMessage: "A disciplina não possui horário informado para criar um evento no Google Agenda.",
    selectionMissingTitle: "Seleção necessária",
    selectionMissingMessage: "Selecione pelo menos uma disciplina para abrir no Google Agenda.",
    selectionConflictTitle: "Conflito de horários",
    selectionConflictMessage: "Há disciplinas com horários conflitantes na seleção.",
    free: "Livre",
    code_label: "Código / turma",
    schedule_label: "Horário",
    teacher_label: "Docente",
    room_label: "Sala",
    workload_label: "Carga horária / créditos",
    isolated_label: "Disciplina isolada",
    elective_label: "Disciplina eletiva",
    plan_label: "Plano de curso",
    language_label: "Idioma",
    notInformed: "Não informado",
    notInformedRoom: "Não informada",
  },
  en: {
    title: "Schedule",
    subtitle: "Interactive view of the updated PPGCC course offerings",
    disciplines: "courses",
    resultSummary: "of",
    scheduled: "with schedule",
    rooms: "rooms informed",
    search: "Search course, code, class, teacher or room",
    searchHelp: "Multiple search: use a semicolon to separate multiple terms, for example <strong>DCC001; DCC002</strong>.",
    searchHelpTitle: "Multiple search",
    select: "Select",
    selected: "Selected",
    details: "Details",
    addToGoogleCalendar: "Select courses in the schedule or list and use the calendar button to export an .ics file with recurring events for the entire semester.",
    googleCalendar: "Google Calendar",
    conflictTitle: "Attention",
    conflictMessage: "There are courses with conflicting schedules in the selection.",
    conflictHelp: "You won't be able to add both in the same time slot on Google Calendar.",
    ok: "OK",
    close: "Close",
    code: "Code",
    type: "Type",
    isolated: "Isolated course",
    all: "All",
    optional: "Electives",
    mandatory: "Mandatory",
    yes: "Yes",
    no: "No",
    clear: "Clear filters",
    print: "Download PDF",
    exportPDF: "Download as PDF",
    exportImage: "Download as Image",
    exportJSON: "Download as JSON",
    importJSON: "Import JSON",
    semester: "Semester",
    noResults: "No courses found with the current filters.",
    schedule: "Weekly schedule",
    scheduleDesc: "Cards display course, class, room and teacher. Click on a card to see full details.",
    list: "Course list",
    listDesc: "Includes workload, credits, type, teacher, room, start date and isolated course option.",
    scheduleMissingTitle: "Schedule missing",
    scheduleMissingMessage: "The course does not have a schedule to create a Google Calendar event.",
    selectionMissingTitle: "Selection required",
    selectionMissingMessage: "Select at least one course to open in Google Calendar.",
    selectionConflictTitle: "Schedule conflict",
    selectionConflictMessage: "There are courses with conflicting schedules in the selection.",
    free: "Free",
    code_label: "Code / class",
    schedule_label: "Schedule",
    teacher_label: "Teacher",
    room_label: "Room",
    workload_label: "Workload / credits",
    isolated_label: "Isolated course",
    elective_label: "Elective course",
    plan_label: "Course plan",
    language_label: "Language",
    notInformed: "Not informed",
    notInformedRoom: "Not informed",
  },
};

// State
let state = {
  language: localStorage.getItem("language") || "pt",
  // Verifica o localStorage; se estiver vazio, verifica a preferência do sistema
  theme: localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  courses: [],
  semesters: [],
  selectedSemester: "",
  searchTerms: "",
  selectedCode: "all",
  selectedType: "all",
  selectedIsolated: "all",
  selectedCourse: null,
  selectedCourseIds: [],
};

// Utility Functions
function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shortName(name) {
  return name
    .replace(/^(TECC|TES|TCC|PPGCC):\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseMeetings(scheduleText) {
  if (!scheduleText || !scheduleText.includes("-")) return [];
  const [daysPart, hourPart] = scheduleText.split("-").map((part) => part.trim());
  const [start, end] = hourPart.split("/").map((part) => part.trim());
  if (!start || !end) return [];
  const dayTokens = daysPart
    .replace(/\s+e\s+/g, ",")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return dayTokens
    .map((token) => DAY_MAP[token])
    .filter(Boolean)
    .map((day) => ({ day, start, end }));
}

function parseClockToMinutes(timeText) {
  if (!timeText) return 0;
  const [hours, minutes] = String(timeText).split(":").map(Number);
  return (Number.isFinite(hours) ? hours : 0) * 60 + (Number.isFinite(minutes) ? minutes : 0);
}

function parseSemesterIdentifier(value) {
  const cleaned = String(value ?? "").replace(/\.json$/i, "");
  const [year, term] = cleaned.split("-").map((part) => Number(part));
  return {
    year: Number.isFinite(year) ? year : 0,
    term: Number.isFinite(term) ? term : 0,
  };
}

function getMostRecentSemester(semesterFiles) {
  if (!semesterFiles.length) return "";

  const ranked = semesterFiles
    .map((semester) => ({
      filename: String(semester),
      ...parseSemesterIdentifier(semester),
    }))
    .sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.term - a.term;
    });

  return ranked[0]?.filename || "";
}

function getSearchBlob(course) {
  return normalize([
    course.number,
    course.code,
    course.name,
    course.className,
    course.type,
    course.scheduleText,
    course.teacher,
    course.room,
    course.startDate,
    course.isolated,
    course.language,
  ].join(" "));
}

function isCourseSelected(course) {
  return state.selectedCourseIds.includes(course.id);
}

function toggleCourseSelection(course, event) {
  if (!course?.id) return;
  event?.stopPropagation?.();

  const modal = document.getElementById("modal");
  const modalWasOpen = modal && modal.style.display !== "none";
  const id = course.id;
  const hasSelection = state.selectedCourseIds.includes(id);
  state.selectedCourseIds = hasSelection
    ? state.selectedCourseIds.filter((selectedId) => selectedId !== id)
    : [...state.selectedCourseIds, id];

  const conflicts = getSelectedCourseConflicts();
  if (conflicts.length > 0) {
    showConflictNotification(conflicts);
  }

  renderUI();
  if (modalWasOpen && state.selectedCourse) {
    openModal(state.selectedCourse);
  }
}

function getSelectedCourses() {
  return state.courses.filter((course) => isCourseSelected(course));
}

function getCourseNumberValue(course) {
  const numeric = Number.parseInt(String(course.number ?? "0").match(/\d+/)?.[0] ?? "0", 10);
  return Number.isFinite(numeric) ? numeric : 0;
}

function getFilteredCourses() {
  const selectedIds = new Set(state.selectedCourseIds);

  return state.courses
    .filter((course) => {
      const searchBlob = getSearchBlob(course);
      const terms = state.searchTerms.split(";").map((t) => normalize(t)).filter(Boolean);
      const matchesSearch = terms.length === 0 || terms.some((term) => searchBlob.includes(term));
      const matchesCode = state.selectedCode === "all" || course.code === state.selectedCode;
      const matchesType = state.selectedType === "all" || course.type === state.selectedType;
      const matchesIsolated = state.selectedIsolated === "all" || course.isolated === state.selectedIsolated;
      return matchesSearch && matchesCode && matchesType && matchesIsolated;
    })
    .sort((a, b) => {
      const aSelected = selectedIds.has(a.id) ? 1 : 0;
      const bSelected = selectedIds.has(b.id) ? 1 : 0;
      if (aSelected !== bSelected) return bSelected - aSelected;

      const numberDiff = getCourseNumberValue(a) - getCourseNumberValue(b);
      if (numberDiff !== 0) return numberDiff;

      return a.name.localeCompare(b.name, "pt-BR");
    });
}

function coursesForCell(coursesArray, day, slot) {
  return coursesArray
    .filter((course) => course.meetings?.some((meeting) => (
      meeting.day === day && meeting.start === slot.start && meeting.end === slot.end
    )))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

const t = () => TRANSLATIONS[state.language];

// UI Update Functions
function updateTheme() {
  if (state.theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeIcon").textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("themeIcon").textContent = "🌙";
  }
}

function updateLanguage() {
  document.getElementById("langDisplay").textContent = state.language.toUpperCase();
  localStorage.setItem("language", state.language);
  applyStaticTranslations();
  renderUI();
}

function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", state.theme); // Salva apenas quando o usuário clica no botão
  updateTheme();
}

function toggleLanguage() {
  state.language = state.language === "pt" ? "en" : "pt";
  updateLanguage();
}

function clearFilters() {
  state.searchTerms = "";
  state.selectedCode = "all";
  state.selectedType = "all";
  state.selectedIsolated = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("codeFilter").value = "all";
  document.getElementById("typeFilter").value = "all";
  document.getElementById("isolatedFilter").value = "all";
  applyFilters();
}

function applyFilters() {
  state.searchTerms = document.getElementById("searchInput").value;
  state.selectedCode = document.getElementById("codeFilter").value;
  state.selectedType = document.getElementById("typeFilter").value;
  state.selectedIsolated = document.getElementById("isolatedFilter").value;
  renderUI();
}

function updateStats() {
  const filteredCourses = getFilteredCourses();
  const uniqueRooms = new Set(state.courses.map((course) => course.room).filter(Boolean));
  const selectedCourses = getSelectedCourses();

  document.getElementById("totalCourses").textContent = state.courses.length;
  document.getElementById("scheduledCourses").textContent = state.courses.filter((c) => c.meetings && c.meetings.length > 0).length;
  document.getElementById("totalRooms").textContent = uniqueRooms.size;
  document.getElementById("resultCount").textContent = filteredCourses.length;
  document.getElementById("totalCount").textContent = state.courses.length;

  const googleAgendaButton = document.getElementById("googleAgendaBtn");
  if (googleAgendaButton) {
    const selectedCount = selectedCourses.length;
    googleAgendaButton.innerHTML = selectedCount > 0
      ? `📅 ${t().googleCalendar} (${selectedCount})`
      : `📅 ${t().googleCalendar}`;
    googleAgendaButton.disabled = selectedCount === 0;
    googleAgendaButton.style.opacity = selectedCount === 0 ? "0.6" : "1";
    googleAgendaButton.style.cursor = selectedCount === 0 ? "not-allowed" : "pointer";
  }
}

function renderScheduleGrid() {
  const grid = document.getElementById("scheduleGrid");
  grid.innerHTML = "";
  const filteredCourses = getFilteredCourses();
  const conflicts = getSelectedCourseConflicts();
  const conflictIds = getConflictCourseIds(conflicts);

  // Header
  const headerTimeCell = document.createElement("div");
  headerTimeCell.className = "grid-cell grid-head";
  headerTimeCell.textContent = "Horário";
  grid.appendChild(headerTimeCell);

  DAYS.forEach((day) => {
    const headerCell = document.createElement("div");
    headerCell.className = "grid-cell grid-head";
    headerCell.textContent = state.language === "pt" ? day.label : day.labelEn;
    grid.appendChild(headerCell);
  });

  // Time slots
  DISPLAY_SLOTS.forEach((slot) => {
    const timeCell = document.createElement("div");
    timeCell.className = "grid-cell grid-time";
    timeCell.innerHTML = `<span>${slot.start}<br />${slot.end}</span>`;
    grid.appendChild(timeCell);

    DAYS.forEach((day) => {
      const items = coursesForCell(filteredCourses, day.key, slot);
      const cell = document.createElement("div");
      cell.className = `grid-cell ${items.length > 1 ? "grid-cell--multiple" : ""}`;

      if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "cell-empty";
        empty.textContent = t().free;
        cell.appendChild(empty);
      } else {
        const container = document.createElement("div");
        container.className = "course-cards-container";

        items.forEach((course) => {
          const card = document.createElement("div");
          const isSelected = isCourseSelected(course);
          const hasConflict = conflictIds.has(course.id);
          card.className = `course-card course-card--${course.type.toLowerCase()} ${isSelected ? "course-card--selected" : ""} ${hasConflict ? "course-card--conflict" : ""}`;
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.onclick = () => openModal(course);
          card.onkeydown = (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openModal(course);
            }
          };
          card.innerHTML = `
            <div class="course-card__top">
              <span class="course-card__name">${escapeHtml(shortName(course.name))}</span>
              <div class="course-card__actions">
                <button class="course-card__select" type="button" aria-pressed="${isSelected}">
                  ${isSelected ? "✓" : "+"}
                </button>
              </div>
            </div>
            <div class="course-card__meta">
              <strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</strong>
              <span>${escapeHtml(course.room || t().notInformedRoom)}</span>
              <span>${escapeHtml(course.teacher || t().notInformed)}</span>
            </div>
          `;

          const selectButton = card.querySelector(".course-card__select");
          selectButton.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleCourseSelection(course, event);
          });

          container.appendChild(card);
        });

        cell.appendChild(container);
      }

      grid.appendChild(cell);
    });
  });
}

function renderCourseList() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  const filteredCourses = getFilteredCourses();
  const conflicts = getSelectedCourseConflicts();
  const conflictIds = getConflictCourseIds(conflicts);

  if (filteredCourses.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = t().noResults;
    list.appendChild(noResults);
    return;
  }

  filteredCourses.forEach((course) => {
    const item = document.createElement("div");
    const isSelected = isCourseSelected(course);
    const hasConflict = conflictIds.has(course.id);
    item.className = `list-item ${isSelected ? "list-item--selected" : ""} ${hasConflict ? "list-item--conflict" : ""}`;
    item.onclick = () => openModal(course);
    item.innerHTML = `
      <div class="list-item__title">
        <h3>${course.number}. ${escapeHtml(course.name)}</h3>
        <div class="list-item__actions">
          <span class="badge">${course.type}</span>
          <button class="list-item__toggle" type="button" aria-pressed="${isSelected}">${isSelected ? t().selected : t().select}</button>
        </div>
      </div>
      <div class="meta-grid">
        <div><strong>${t().code_label}</strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</div>
        <div><strong>${t().schedule_label}</strong>${escapeHtml(course.scheduleText || t().notInformed)}</div>
        <div><strong>${t().teacher_label}</strong>${escapeHtml(course.teacher || t().notInformed)}</div>
        <div><strong>${t().room_label}</strong>${escapeHtml(course.room || t().notInformedRoom)}</div>
      </div>
    `;

    const toggleButton = item.querySelector(".list-item__toggle");
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCourseSelection(course, event);
    });

    list.appendChild(item);
  });
}

function applyStaticTranslations() {
  const currentLanguage = state.language;
  const locale = TRANSLATIONS[currentLanguage] || TRANSLATIONS.pt;
  const searchInput = document.getElementById("searchInput");
  const searchHelp = document.getElementById("searchHelp");
  const codeFilter = document.getElementById("codeFilter");
  const typeFilter = document.getElementById("typeFilter");
  const isolatedFilter = document.getElementById("isolatedFilter");
  const semesterFilter = document.getElementById("semesterFilter");
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const heroPrintButton = document.getElementById("heroPrintButton");
  const heroClearButton = document.getElementById("heroClearButton");
  const exportImageButton = document.getElementById("exportImageButton");
  const exportPdfButton = document.getElementById("exportPdfButton");
  const languageButton = document.getElementById("languageToggleButton");
  const themeButton = document.getElementById("themeToggleButton");
  const scheduleTitle = document.getElementById("scheduleTitle");
  const scheduleDescription = document.getElementById("scheduleDescription");
  const listTitle = document.getElementById("listTitle");
  const listDescription = document.getElementById("listDescription");
  const resultInfoSummary = document.getElementById("resultInfoSummary");
  const resultInfoLabel = document.getElementById("resultInfoLabel");
  const calendarNote = document.getElementById("calendarNote");

  if (searchInput) searchInput.placeholder = locale.search;
  if (searchHelp) {
    searchHelp.innerHTML = locale.searchHelp;
    searchHelp.setAttribute("aria-label", locale.searchHelpTitle);
  }

  if (codeFilter?.options?.length) {
    codeFilter.options[0].textContent = locale.code;
  }
  if (typeFilter?.options?.length) {
    typeFilter.options[0].textContent = locale.type;
    typeFilter.options[1].textContent = locale.optional;
    typeFilter.options[2].textContent = locale.mandatory;
  }
  if (isolatedFilter?.options?.length) {
    isolatedFilter.options[0].textContent = locale.isolated;
    isolatedFilter.options[1].textContent = locale.yes;
    isolatedFilter.options[2].textContent = locale.no;
  }
  if (semesterFilter?.options?.length) {
    semesterFilter.options[0].textContent = locale.semester;
  }

  if (heroTitle) heroTitle.firstChild.textContent = `${locale.title} `;
  if (heroSubtitle) heroSubtitle.textContent = locale.subtitle;
  if (heroPrintButton) {
    heroPrintButton.textContent = locale.print;
    heroPrintButton.setAttribute("aria-label", locale.print);
  }
  if (heroClearButton) {
    heroClearButton.textContent = locale.clear;
    heroClearButton.setAttribute("aria-label", locale.clear);
  }
  if (exportImageButton) {
    exportImageButton.title = locale.exportImage;
    exportImageButton.setAttribute("aria-label", locale.exportImage);
  }
  if (exportPdfButton) {
    exportPdfButton.title = locale.exportPDF;
    exportPdfButton.setAttribute("aria-label", locale.exportPDF);
  }
  if (languageButton) {
    languageButton.setAttribute("title", currentLanguage === "pt" ? "Switch language" : "Alternar idioma");
    languageButton.setAttribute("aria-label", currentLanguage === "pt" ? "Switch language" : "Alternar idioma");
  }
  if (themeButton) {
    themeButton.setAttribute("title", currentLanguage === "pt" ? "Alternar tema" : "Toggle theme");
    themeButton.setAttribute("aria-label", currentLanguage === "pt" ? "Alternar tema" : "Toggle theme");
  }

  if (scheduleTitle) scheduleTitle.textContent = locale.schedule;
  if (scheduleDescription) scheduleDescription.textContent = locale.scheduleDesc;
  if (listTitle) listTitle.textContent = locale.list;
  if (listDescription) listDescription.textContent = locale.listDesc;

  if (resultInfoSummary) resultInfoSummary.textContent = locale.resultSummary;
  if (resultInfoLabel) resultInfoLabel.textContent = locale.disciplines;

  if (calendarNote) {
    calendarNote.innerHTML = `<strong>${locale.googleCalendar}:</strong> ${locale.addToGoogleCalendar}`;
    calendarNote.setAttribute("aria-label", `${locale.googleCalendar}: ${locale.addToGoogleCalendar}`);
  }
}

function renderUI() {
  updateStats();
  renderScheduleGrid();
  renderCourseList();
}

function openModal(course) {
  state.selectedCourse = course;
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const isSelected = isCourseSelected(course);

  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = course.name;
  modalBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail">
        <span>${t().code_label}</span>
        <strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)} · ${course.type}</strong>
      </div>
      <div class="detail">
        <span>${t().schedule_label}</span>
        <strong>${escapeHtml(course.scheduleText || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().teacher_label}</span>
        <strong>${escapeHtml(course.teacher || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().room_label}</span>
        <strong>${escapeHtml(course.room || t().notInformedRoom)}</strong>
      </div>
      <div class="detail">
        <span>${t().workload_label}</span>
        <strong>${course.workload}h · ${course.credits} ${state.language === "pt" ? "crédito(s)" : "credit(s)"}</strong>
      </div>
      <div class="detail">
        <span>${t().isolated_label}</span>
        <strong>${escapeHtml(course.isolated || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().language_label}</span>
        <strong>${escapeHtml(course.language || t().notInformed)}</strong>
      </div>
    </div>
    <div class="modal-actions">
      <button class="toolbar-btn" type="button" onclick="toggleCourseSelection(state.selectedCourse)">${isSelected ? t().selected : t().select}</button>
      <button class="toolbar-btn" type="button" onclick="openGoogleCalendarForCourse(state.selectedCourse)">${t().googleCalendar}</button>
    </div>
  `;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

function getSemesterCalendarRange() {
  const semesterInfo = parseSemesterIdentifier(state.selectedSemester || "");
  const year = semesterInfo.year || new Date().getFullYear();
  const term = semesterInfo.term;

  if (term === 1) {
    return {
      start: getFirstWeekdayOfMonth(year, 2, 1),
      end: getFirstWeekdayOfMonth(year, 6, 5),
    };
  }

  return {
    start: getFirstWeekdayOfMonth(year, 7, 1),
    end: getFirstWeekdayOfMonth(year, 11, 5),
  };
}

function getFirstWeekdayOfMonth(year, monthIndex, weekdayIndex) {
  const date = new Date(year, monthIndex, 1);
  const dayOffset = (weekdayIndex - date.getDay() + 7) % 7;
  date.setDate(1 + dayOffset);
  date.setHours(0, 0, 0, 0);
  return date;
}

function formatGoogleOccurrenceDate(date) {
  // Retorna a data no formato local correto (sem forçar UTC)
  return formatIcsDate(date); 
}

function getNextCourseDateForDay(semesterStart, targetDay) {
  const targetIndex = {
    SEG: 1,
    TER: 2,
    QUA: 3,
    QUI: 4,
    SEX: 5,
  }[targetDay] || 1;

  const firstDate = new Date(semesterStart);
  const currentIndex = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
  const offset = (targetIndex - currentIndex + 7) % 7;
  firstDate.setDate(firstDate.getDate() + offset);

  if (firstDate < semesterStart) {
    firstDate.setDate(firstDate.getDate() + 7);
  }

  return firstDate;
}

function formatGoogleDate(date) {
  return formatGoogleOccurrenceDate(date);
}

function buildGoogleCalendarUrl(course) {
  if (!course?.meetings?.length) {
    return "";
  }

  const semesterRange = getSemesterCalendarRange();
  const startOfSemester = semesterRange.start;
  const endOfSemester = semesterRange.end;
  const dayOrder = ["SEG", "TER", "QUA", "QUI", "SEX"];
  const meetingDays = Array.from(new Set(course.meetings.map((meeting) => meeting.day))).sort(
    (left, right) => dayOrder.indexOf(left) - dayOrder.indexOf(right),
  );
  const googleDayMap = {
    SEG: "MO",
    TER: "TU",
    QUA: "WE",
    QUI: "TH",
    SEX: "FR",
  };

  const firstMeeting = course.meetings[0];
  const firstDayDate = getNextCourseDateForDay(startOfSemester, firstMeeting.day);
  const [firstStartHour, firstStartMinute] = String(firstMeeting.start || "00:00").split(":").map(Number);
  const [firstEndHour, firstEndMinute] = String(firstMeeting.end || "00:00").split(":").map(Number);

  const eventStart = new Date(firstDayDate);
  eventStart.setHours(firstStartHour, firstStartMinute, 0, 0);

  const eventEnd = new Date(eventStart);
  eventEnd.setHours(firstEndHour, firstEndMinute, 0, 0);
  if (eventEnd <= eventStart) {
    eventEnd.setDate(eventEnd.getDate() + 1);
  }

  if (eventStart > endOfSemester) {
    return "";
  }

  const untilDate = new Date(endOfSemester);
  untilDate.setHours(23, 59, 59, 999);
  const recurrence = `RRULE:FREQ=WEEKLY;BYDAY=${meetingDays.map((day) => googleDayMap[day]).join(",")};UNTIL=${formatGoogleOccurrenceDate(untilDate)};WKST=SU`;

  const text = `${shortName(course.name)} - ${course.code} (${course.className})`;
  const details = [
    `Disciplina: ${course.name}`,
    `Código / turma: ${course.code} · ${course.className}`,
    `Docente: ${course.teacher || t().notInformed}`,
    `Sala: ${course.room || t().notInformedRoom}`,
    `Tipo: ${course.type}`,
    `Horário: ${course.scheduleText || t().notInformed}`,
  ].join("\n");

  const dates = `${formatGoogleDate(eventStart)}/${formatGoogleDate(eventEnd)}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(course.room || t().notInformedRoom)}&recur=${encodeURIComponent(recurrence)}`;
}

function getMeetingTimeRange(meeting) {
  return {
    start: parseClockToMinutes(meeting.start),
    end: parseClockToMinutes(meeting.end),
  };
}

function meetingsOverlap(firstMeeting, secondMeeting) {
  if (firstMeeting.day !== secondMeeting.day) return false;
  const firstRange = getMeetingTimeRange(firstMeeting);
  const secondRange = getMeetingTimeRange(secondMeeting);
  return firstRange.start < secondRange.end && secondRange.start < firstRange.end;
}

function getSelectedCourseConflicts() {
  const selectedCourses = getSelectedCourses();
  const conflicts = [];
  const seen = new Set();

  for (let index = 0; index < selectedCourses.length; index += 1) {
    const firstCourse = selectedCourses[index];
    for (let compareIndex = index + 1; compareIndex < selectedCourses.length; compareIndex += 1) {
      const secondCourse = selectedCourses[compareIndex];
      const firstMeetings = firstCourse.meetings || [];
      const secondMeetings = secondCourse.meetings || [];

      firstMeetings.forEach((firstMeeting) => {
        secondMeetings.forEach((secondMeeting) => {
          if (meetingsOverlap(firstMeeting, secondMeeting)) {
            const key = `${firstCourse.id}-${secondCourse.id}-${firstMeeting.day}-${firstMeeting.start}-${firstMeeting.end}`;
            if (seen.has(key)) return;
            seen.add(key);
            conflicts.push({
              first: firstCourse,
              second: secondCourse,
              day: firstMeeting.day,
              start: firstMeeting.start,
              end: firstMeeting.end,
            });
          }
        });
      });
    }
  }

  return conflicts;
}

function getConflictCourseIds(conflicts) {
  const conflictIds = new Set();
  conflicts.forEach((conflict) => {
    conflictIds.add(conflict.first.id);
    conflictIds.add(conflict.second.id);
  });
  return conflictIds;
}

function showPageNotification(title, bodyHtml, okLabel) {
  const popup = document.getElementById("pagePopup");
  const titleNode = document.getElementById("pagePopupTitle");
  const bodyNode = document.getElementById("pagePopupBody");
  const okButton = document.getElementById("pagePopupButton");

  titleNode.textContent = title;
  bodyNode.innerHTML = bodyHtml;
  okButton.textContent = okLabel;
  popup.setAttribute("aria-hidden", "false");
  popup.style.display = "flex";
}

function showConflictNotification(conflicts) {
  const conflictSummary = conflicts
    .map((conflict) => `• ${conflict.first.name} × ${conflict.second.name} (${conflict.day}, ${conflict.start}–${conflict.end})`)
    .join("<br />");

  showPageNotification(
    t().conflictTitle,
    `
      <p>${t().conflictMessage}</p>
      <p class="popup-conflict-list">${conflictSummary}</p>
      <p>${t().conflictHelp}</p>
    `,
    t().ok,
  );
}

function closeConflictNotification() {
  const popup = document.getElementById("pagePopup");
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
}

function openGoogleCalendarForCourse(course) {
  const calendarUrl = buildGoogleCalendarUrl(course);
  if (!calendarUrl) {
    showPageNotification(
      t().scheduleMissingTitle,
      `<p>${t().scheduleMissingMessage}</p>`,
      t().ok,
    );
    return;
  }

  window.open(calendarUrl, "_blank", "noopener,noreferrer");
}

function downloadGoogleCalendarIcs(selectedCourses) {
  const semesterRange = getSemesterCalendarRange();
  const startOfSemester = semesterRange.start;
  const endOfSemester = semesterRange.end;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PPGCC UFMG//Horarios//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  selectedCourses.forEach((course, courseIndex) => {
    const courseMeetings = Array.from(
      new Map(
        (course.meetings || []).map((meeting) => [`${meeting.day}-${meeting.start}-${meeting.end}`, meeting]),
      ).values(),
    );

    courseMeetings.forEach((meeting) => {
      const firstDayDate = getNextCourseDateForDay(startOfSemester, meeting.day);
      const [startHour, startMinute] = String(meeting.start || "00:00").split(":").map(Number);
      const [endHour, endMinute] = String(meeting.end || "00:00").split(":").map(Number);
      
      const eventStart = new Date(firstDayDate);
      eventStart.setHours(startHour, startMinute, 0, 0);
      
      const eventEnd = new Date(eventStart);
      eventEnd.setHours(endHour, endMinute, 0, 0);
      
      const recurrenceDays = courseMeetings.flatMap((currentMeeting) => currentMeeting.day).filter(Boolean);
      const byDay = Array.from(new Set(recurrenceDays)).map((day) => ({ SEG: "MO", TER: "TU", QUA: "WE", QUI: "TH", SEX: "FR" }[day])).join(",");
      const untilDate = new Date(endOfSemester);
      untilDate.setHours(23, 59, 59, 999);

      // --- Lógica para calcular os feriados (EXDATE) no mesmo horário da aula ---
      const startHourStr = String(startHour).padStart(2, "0");
      const startMinStr = String(startMinute).padStart(2, "0");
      const exdates = HOLIDAYS.map(holiday => {
        const [hYear, hMonth, hDay] = holiday.split("-");
        return `${hYear}${hMonth}${hDay}T${startHourStr}${startMinStr}00`;
      }).join(",");

      lines.push(
        "BEGIN:VEVENT",
        `UID:${course.id}-${courseIndex}-${meeting.day}-${meeting.start}-${Date.now()}@oferta-ppgcc`,
        // DTSTAMP precisa ser UTC absoluto para manter o arquivo ICS válido perante a norma
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z")}`,
        `DTSTART;TZID=America/Sao_Paulo:${formatIcsDate(eventStart)}`,
        `DTEND;TZID=America/Sao_Paulo:${formatIcsDate(eventEnd)}`,
        `SUMMARY:${String(course.name).replace(/\r?\n/g, " ")}`,
        `DESCRIPTION:${String([`Código / turma: ${course.code} · ${course.className}`, `Docente: ${course.teacher || t().notInformed}`, `Sala: ${course.room || t().notInformedRoom}`, `Tipo: ${course.type}`, `Horário: ${course.scheduleText || t().notInformed}`].join("\\n")).replace(/\r?\n/g, " ")}`,
        `LOCATION:${String(course.room || t().notInformedRoom).replace(/\r?\n/g, " ")}`,
        `RRULE:FREQ=WEEKLY;BYDAY=${byDay};UNTIL=${formatIcsDate(untilDate)};WKST=SU`
      );

      // Insere a linha de exclusão caso existam feriados mapeados
      if (exdates) {
        lines.push(`EXDATE;TZID=America/Sao_Paulo:${exdates}`);
      }

      lines.push("END:VEVENT");
    });
  });

  lines.push("END:VCALENDAR");
  const icsContent = `${lines.join("\r\n")}\r\n`;
  const dataBlob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `disciplinas-selecionadas-${state.selectedSemester || "semestre"}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

function formatIcsDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

function openSelectedGoogleCalendar() {
  const selectedCourses = getSelectedCourses();
  if (selectedCourses.length === 0) {
    showPageNotification(
      t().selectionMissingTitle,
      `<p>${t().selectionMissingMessage}</p>`,
      t().ok,
    );
    return;
  }

  const conflicts = getSelectedCourseConflicts();
  if (conflicts.length > 0) {
    showConflictNotification(conflicts);
    return;
  }

  if (selectedCourses.length === 1) {
    const course = selectedCourses[0];
    const calendarUrl = buildGoogleCalendarUrl(course);
    if (!calendarUrl) {
      showPageNotification(
        t().scheduleMissingTitle,
        `<p>${t().scheduleMissingMessage}</p>`,
        t().ok,
      );
      return;
    }
    window.open(calendarUrl, "_blank", "noopener,noreferrer");
    return;
  }

  downloadGoogleCalendarIcs(selectedCourses);
  window.open("https://calendar.google.com/calendar/u/0/r/settings/export", "_blank", "noopener,noreferrer");
}

// Export Functions
function exportAsJSON() {
  const filtered = getFilteredCourses();
  const dataStr = JSON.stringify(filtered, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `grade-horarios-${new Date().toISOString().split("T")[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function getExportFileName(extension) {
  const semester = state.selectedSemester ? `-${state.selectedSemester}` : "";
  return `grade-horarios${semester}-${new Date().toISOString().split("T")[0]}.${extension}`;
}

async function captureSchedule() {
  const schedule = document.querySelector(".schedule-card");
  const grid = document.getElementById("scheduleGrid");
  if (!schedule || !grid) throw new Error("Grade de horários não encontrada.");
  if (typeof html2canvas === "undefined") throw new Error("html2canvas não está disponível.");

  // Clone removes viewport scrolling constraints without changing visible page.
  const exportWidth = Math.max(1100, grid.scrollWidth + 48);
  const snapshot = schedule.cloneNode(true);
  snapshot.classList.add("schedule-card--export");
  snapshot.style.width = `${exportWidth}px`;
  document.body.appendChild(snapshot);

  try {
    return await html2canvas(snapshot, {
      backgroundColor: state.theme === "dark" ? "#1a1b1e" : "#ffffff",
      scale: Math.max(2, Math.min(3, window.devicePixelRatio || 1)),
      useCORS: true,
      allowTaint: false,
      logging: false,
      width: snapshot.scrollWidth,
      height: snapshot.scrollHeight,
      windowWidth: exportWidth,
      windowHeight: snapshot.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });
  } finally {
    snapshot.remove();
  }
}

async function exportAsImage() {
  try {
    const canvas = await captureSchedule();
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = getExportFileName("png");
    link.click();
  } catch (error) {
    console.error("Erro ao exportar imagem:", error);
    alert("Erro ao exportar imagem. Tente novamente.");
  }
}

async function exportAsPDF() {
  try {
    if (!window.jspdf?.jsPDF) throw new Error("jsPDF não está disponível.");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a3", compress: true });
    const courses = getFilteredCourses();

    drawPdfSchedulePage(pdf, DAYS, courses);
    drawPdfCourseList(pdf, courses);
    pdf.save(getExportFileName("pdf"));
  } catch (error) {
    console.error("Erro ao exportar PDF:", error);
    alert("Erro ao exportar PDF. Tente novamente.");
  }
}

function drawPdfHeader(pdf, title, subtitle) {
  pdf.setFillColor(15, 93, 155);
  pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), 20, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(15);
  pdf.text(title, 10, 9);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8.5);
  pdf.text(subtitle, 10, 15);
  pdf.setTextColor(25, 28, 36);
}

function drawPdfSchedulePage(pdf, days, courses) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 8;
  const top = 26;
  const headerHeight = 14;
  const bottom = 8;
  const timeWidth = 30;
  const dayWidth = (pageWidth - margin * 2 - timeWidth) / days.length;
  const availableRowsHeight = pdf.internal.pageSize.getHeight() - top - headerHeight - bottom;
  const semester = state.selectedSemester || "";
  const slotDensities = DISPLAY_SLOTS.map((slot) => Math.max(
    1,
    ...days.map((day) => coursesForCell(courses, day.key, slot).length),
  ));
  const minimumRowHeight = 31;
  const flexibleHeight = Math.max(0, availableRowsHeight - minimumRowHeight * DISPLAY_SLOTS.length);
  const totalDensity = slotDensities.reduce((total, density) => total + density, 0);
  const rowHeights = slotDensities.map((density) => minimumRowHeight + flexibleHeight * density / totalDensity);

  drawPdfHeader(
    pdf,
    `${t().schedule} ${semester}`.trim(),
    `${courses.length} ${t().disciplines} · ${state.language === "pt" ? "Semana completa" : "Full week"}`,
  );

  pdf.setDrawColor(190, 196, 208);
  pdf.setLineWidth(0.25);
  pdf.setFillColor(15, 93, 155);
  pdf.rect(margin, top, timeWidth, headerHeight, "FD");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  pdf.text(t().schedule_label.toUpperCase(), margin + timeWidth / 2, top + 8.7, { align: "center" });

  days.forEach((day, dayIndex) => {
    const x = margin + timeWidth + dayIndex * dayWidth;
    pdf.setFillColor(15, 93, 155);
    pdf.setDrawColor(190, 196, 208);
    pdf.rect(x, top, dayWidth, headerHeight, "FD");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text(getPdfDayLabel(day).toUpperCase(), x + dayWidth / 2, top + 8.7, { align: "center" });
  });

  DISPLAY_SLOTS.forEach((slot, slotIndex) => {
    const rowHeight = rowHeights[slotIndex];
    const previousRowsHeight = rowHeights.slice(0, slotIndex).reduce((total, height) => total + height, 0);
    const y = top + headerHeight + previousRowsHeight;
    pdf.setFillColor(238, 241, 247);
    pdf.setTextColor(25, 28, 36);
    pdf.rect(margin, y, timeWidth, rowHeight, "FD");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8.5);
    pdf.text(`${slot.start}\n${slot.end}`, margin + timeWidth / 2, y + rowHeight / 2 - 1.5, {
      align: "center",
      baseline: "middle",
    });

    days.forEach((day, dayIndex) => {
      const x = margin + timeWidth + dayIndex * dayWidth;
      const items = coursesForCell(courses, day.key, slot);
      pdf.setFillColor(255, 255, 255);
      pdf.rect(x, y, dayWidth, rowHeight, "FD");

      if (items.length === 0) {
        pdf.setTextColor(130, 136, 148);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8);
        pdf.text(t().free, x + dayWidth / 2, y + rowHeight / 2, { align: "center" });
        return;
      }

      const gap = 1.2;
      const itemHeight = (rowHeight - gap * (items.length + 1)) / items.length;
      items.forEach((course, itemIndex) => {
        const itemY = y + gap + itemIndex * (itemHeight + gap);
        drawPdfScheduleCourse(pdf, course, x + 1.5, itemY, dayWidth - 3, itemHeight);
      });
    });
  });
}

function getPdfDayLabel(day) {
  if (state.language !== "pt") return day.labelEn;
  const labels = {
    SEG: "Segunda-feira",
    TER: "Terça-feira",
    QUA: "Quarta-feira",
    QUI: "Quinta-feira",
    SEX: "Sexta-feira",
  };
  return labels[day.key] || day.label;
}

function drawPdfScheduleCourse(pdf, course, x, y, width, height) {
  const compact = height < 13;
  const accent = course.type === "OP" ? [22, 116, 76] : [15, 93, 155];
  const titleSize = compact ? 6.2 : 8;
  const metaSize = compact ? 5.6 : 7;
  const lineHeight = compact ? 2.15 : 3;
  const innerX = x + 3.2;
  const textWidth = width - 5;
  const maxTitleLines = compact ? 1 : 2;
  const titleLines = pdf.splitTextToSize(shortName(course.name), textWidth).slice(0, maxTitleLines);

  pdf.setFillColor(248, 249, 252);
  pdf.setDrawColor(205, 210, 220);
  pdf.roundedRect(x, y, width, height, 1.5, 1.5, "FD");
  pdf.setFillColor(...accent);
  pdf.roundedRect(x, y, 1.8, height, 0.8, 0.8, "F");

  pdf.setTextColor(25, 28, 36);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(titleSize);
  pdf.text(titleLines, innerX, y + lineHeight + 0.7);

  let cursorY = y + titleLines.length * lineHeight + lineHeight + 0.7;
  pdf.setFontSize(metaSize);
  pdf.text(`${course.code} · ${course.className} · ${course.room || t().notInformedRoom}`, innerX, cursorY);
  cursorY += lineHeight;

  if (cursorY < y + height - 0.8) {
    pdf.setFont("helvetica", "normal");
    const teacher = pdf.splitTextToSize(course.teacher || t().notInformed, textWidth)[0];
    pdf.text(teacher, innerX, cursorY);
  }
}

function drawPdfCourseList(pdf, courses) {
  const margin = 12;
  const bottom = 12;
  let y = 29;

  const addListPage = () => {
    pdf.addPage("a4", "portrait");
    drawPdfHeader(
      pdf,
      `${t().list} ${state.selectedSemester || ""}`.trim(),
      `${courses.length} ${t().disciplines}`,
    );
    y = 29;
  };

  addListPage();
  if (courses.length === 0) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(t().noResults, margin, y);
    return;
  }

  courses.forEach((course) => {
    const contentWidth = pdf.internal.pageSize.getWidth() - margin * 2 - 6;
    const title = `${course.number}. ${course.name}`;
    const titleLines = pdf.splitTextToSize(title, contentWidth);
    const detailLines = [
      `${t().code_label}: ${course.code} · ${course.className}    ${t().schedule_label}: ${course.scheduleText || t().notInformed}`,
      `${t().teacher_label}: ${course.teacher || t().notInformed}`,
      `${t().room_label}: ${course.room || t().notInformedRoom}    ${t().workload_label}: ${course.workload ?? t().notInformed} h · ${course.credits ?? t().notInformed}`,
      `${t().type}: ${course.type || t().notInformed}    ${t().isolated_label}: ${course.isolated || t().notInformed}    ${t().language_label}: ${course.language || t().notInformed}`,
      `${state.language === "pt" ? "Início das aulas" : "Classes start"}: ${course.startDate || t().notInformed}`,
    ].flatMap((line) => pdf.splitTextToSize(line, contentWidth));
    const cardHeight = 7 + titleLines.length * 4.2 + detailLines.length * 3.7;

    if (y + cardHeight > pdf.internal.pageSize.getHeight() - bottom) addListPage();

    pdf.setFillColor(247, 248, 251);
    pdf.setDrawColor(210, 214, 224);
    pdf.roundedRect(margin, y - 4, pdf.internal.pageSize.getWidth() - margin * 2, cardHeight, 1.5, 1.5, "FD");
    pdf.setTextColor(25, 28, 36);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(titleLines, margin + 3, y + 1);
    let detailY = y + 2 + titleLines.length * 4.2;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.2);
    detailLines.forEach((line) => {
      pdf.text(line, margin + 3, detailY);
      detailY += 3.7;
    });
    y += cardHeight + 3;
  });
}

function importJSON() {
  document.getElementById("fileInput").click();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result);
        console.log("Dados importados:", data);
        showPageNotification("JSON", "<p>JSON importado com sucesso!</p>", t().ok);
      } catch (error) {
        showPageNotification("JSON", "<p>Erro ao importar JSON.</p>", t().ok);
      }
    };
    reader.readAsText(file);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeConflictNotification();
    }
  });
});

// Data Loading
async function loadSemesters() {
  const semesterSelect = document.getElementById("semesterFilter");
  semesterSelect.innerHTML = '<option value="">Semestre</option>';

  let semesterFiles = [];

  try {
    const response = await fetch("semesters/manifest.json");
    if (!response.ok) {
      throw new Error(`Manifesto não encontrado: ${response.status}`);
    }
    const manifest = await response.json();
    semesterFiles = Array.isArray(manifest.semesters) ? manifest.semesters : [];
  } catch (error) {
    console.warn("Não foi possível carregar o manifesto via fetch. Usando fallback local (SEMESTER_DATA).", error);
    // Fallback: Pega as chaves do objeto estático SEMESTER_DATA (definido no semester-data.js)
    if (typeof SEMESTER_DATA !== 'undefined') {
      semesterFiles = Object.keys(SEMESTER_DATA || {});
    }
  }

  const latestSemester = getMostRecentSemester(semesterFiles);
  state.semesters = semesterFiles;

  semesterFiles
    .slice()
    .sort((a, b) => {
      const aInfo = parseSemesterIdentifier(a);
      const bInfo = parseSemesterIdentifier(b);
      if (aInfo.year !== bInfo.year) return bInfo.year - aInfo.year;
      return bInfo.term - aInfo.term;
    })
    .forEach((sem) => {
      const option = document.createElement("option");
      option.value = sem;
      option.textContent = sem.replace(".json", "").replace("-", "/");
      semesterSelect.appendChild(option);
    });

  if (semesterFiles.length > 0) {
    await loadSemesterData(latestSemester || semesterFiles[0]);
  } else {
     console.error("Nenhum dado de semestre encontrado no manifesto ou no fallback local.");
     showPageNotification("Erro", "<p>Não foi possível carregar a lista de disciplinas.</p>", t().ok);
  }
}

async function loadSemesterData(filename) {
  try {
    let data;

    // 1. Primeiro tentamos baixar o JSON dinâmico pela rede
    try {
        const response = await fetch(`semesters/${filename}`);
        if (!response.ok) {
          throw new Error(`Arquivo de semestre não encontrado na rede: ${response.status}`);
        }
        data = await response.json();
    } catch (networkError) {
        console.warn(`Falha ao buscar ${filename} via rede. Tentando fallback local.`, networkError);
        // 2. Se falhar, recorremos aos dados estáticos pré-carregados no fallback
        if (typeof SEMESTER_DATA !== 'undefined' && SEMESTER_DATA[filename]) {
             data = SEMESTER_DATA[filename];
        } else {
             throw new Error(`Dados do semestre ${filename} não encontrados no fallback local.`);
        }
    }

    const coursesSource = Array.isArray(data) ? data : data.courses;
    const semesterLabel = Array.isArray(data) ? filename.replace(".json", "") : data.semester;

    const processedCourses = coursesSource.map((course) => ({
      ...course,
      id: `${course.code.toLowerCase()}-${course.className.toLowerCase()}-${course.number}`.replace(/[^a-z0-9-]/g, "-"),
      meetings: parseMeetings(course.scheduleText),
    }));

    state.courses = processedCourses;
    state.selectedSemester = semesterLabel;
    state.selectedCode = "all";
    state.selectedType = "all";
    state.selectedIsolated = "all";
    state.searchTerms = "";
    state.selectedCourseIds = [];

    // Update UI
    document.getElementById("semesterDisplay").textContent = semesterLabel;
    document.getElementById("semesterTitle").textContent = semesterLabel;
    document.getElementById("searchInput").value = "";
    document.getElementById("codeFilter").value = "all";
    document.getElementById("typeFilter").value = "all";
    document.getElementById("isolatedFilter").value = "all";
    document.getElementById("semesterFilter").value = filename;

    // Update code filter options
    const uniqueCodes = Array.from(new Set(state.courses.map((course) => course.code))).sort();
    const codeFilter = document.getElementById("codeFilter");
    codeFilter.innerHTML = '<option value="all">Código</option>';
    uniqueCodes.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = code;
      codeFilter.appendChild(option);
    });

    renderUI();
  } catch (error) {
    console.error("Erro fatal ao carregar semestre:", error);
    showPageNotification("Erro", `<p>Não foi possível carregar os dados para ${filename.replace('.json', '')}.</p>`, t().ok);
  }
}

// Modal close on overlay click
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTheme();
  updateLanguage();
  loadSemesters();

  // Listener para detectar mudança de tema do sistema operacional em tempo real
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    // Altera o tema automaticamente apenas se o usuário não tiver salvo uma preferência manual
    if (!localStorage.getItem("theme")) {
      state.theme = event.matches ? "dark" : "light";
      updateTheme();
    }
  });
});
