// App version (Semantic Versioning)
const APP_VERSION = '1.4.1';

const medInfoLinks = {
    'Dexamethasone': 'https://www.drugs.com/dexamethasone.html',
    'Pantoprazole': 'https://www.drugs.com/pantoprazole.html',
    'Mycostatin': 'https://www.drugs.com/mtm/nystatin-oral.html',
    'Difflam/Kin': 'https://www.drugs.com/uk/difflam-oral-rinse.html',
    'Loratadine': 'https://www.drugs.com/loratadine.html',
    'Neulasta': 'https://www.drugs.com/neulasta.html',
    'Metoclopramide': 'https://www.drugs.com/metoclopramide.html',
    'Tramadol': 'https://www.drugs.com/tramadol.html',
    'Loperamide': 'https://www.drugs.com/loperamide.html',
    'Movicol': 'https://www.drugs.com/uk/movicol.html'
};

// Base medication schedule template (relative to Day 0)
const scheduleTemplate = {
    '-1': { label: 'Day -1', note: 'Day before chemotherapy', medications: {
        morning: [{ name: 'Dexamethasone', dose: '8 mg', time: '08:00' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        evening: [{ name: 'Dexamethasone', dose: '8 mg', time: '14:30' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
    }},
    '0': { label: 'Day 0', note: 'Chemotherapy day', isChemoDay: true, medications: {
        morning: [{ name: 'Dexamethasone', dose: '8 mg', time: '08:00' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        evening: [{ name: 'Dexamethasone', dose: '8 mg', time: '14:30' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        bedtime: [{ name: 'Mycostatin', dose: '1 ml', time: '22:00' },{ name: 'Difflam/Kin', dose: 'mouthwash', time: '22:00' }]
    }},
    '1': { label: 'Day +1', note: 'Day after chemo • Injection day', isInjectionDay: true, medications: {
        morning: [{ name: 'Dexamethasone', dose: '8 mg', time: '07:30' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        evening: [{ name: 'Dexamethasone', dose: '8 mg', time: '14:00' },{ name: 'Neulasta', dose: '6 mg injection', time: '19:20' },{ name: 'Loratadine', dose: '10 mg (start)', time: '17:30' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
    }},
    '2': { label: 'Day +2', note: 'Steroid taper', medications: {
        morning: [{ name: 'Dexamethasone', dose: '8 mg (AM only)' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        evening: [{ name: 'Loratadine', dose: '10 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
    }},
    '3': { label: 'Day +3', note: 'Steroid taper', medications: {
        morning: [{ name: 'Dexamethasone', dose: '8 mg (AM only)' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        evening: [{ name: 'Loratadine', dose: '10 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
        bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
    }}
};

// Add days 4-12 (with Loratadine)
for (let i = 4; i <= 12; i++) {
    scheduleTemplate[i.toString()] = {
        label: 'Day +' + i, note: i === 12 ? 'Last day of Loratadine' : 'Recovery',
        medications: {
            morning: [{ name: 'Loratadine', dose: '10 mg' },{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            evening: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
        }
    };
}

// Add days 13-19 (without Loratadine)
for (let i = 13; i <= 19; i++) {
    scheduleTemplate[i.toString()] = {
        label: 'Day +' + i, note: i === 19 ? 'End of cycle' : 'Recovery',
        medications: {
            morning: [{ name: 'Pantoprazole', dose: '40 mg' },{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            afternoon: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            evening: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }],
            bedtime: [{ name: 'Mycostatin', dose: '1 ml' },{ name: 'Difflam/Kin', dose: 'mouthwash' }]
        }
    };
}

const prnMedications = [
    { id: 'metoclopramide', name: 'Metoclopramide', dose: '10 mg', purpose: 'nausea', maxDaily: 3, icon: '💊' },
    { id: 'tramadol', name: 'Tramadol', dose: '50 mg', purpose: 'pain (1-2 caps)', maxDaily: 6, icon: '💊' },
    { id: 'loperamide', name: 'Loperamide', dose: '2 mg', purpose: 'diarrhoea', maxDaily: 8, icon: '💊' },
    { id: 'movicol', name: 'Movicol', dose: '1 sachet', purpose: 'constipation', maxDaily: 3, icon: '📦' }
];

const symptomsConfig = [
    { id: 'fatigue', label: 'Fatigue / Energy', icon: '⚡', lowLabel: 'Good energy', highLabel: 'Exhausted', scaleType: 'normal' },
    { id: 'nausea', label: 'Nausea', icon: '🤢', lowLabel: 'None', highLabel: 'Severe', scaleType: 'normal' },
    { id: 'pain', label: 'Pain', icon: '😣', lowLabel: 'None', highLabel: 'Severe', scaleType: 'normal' },
    { id: 'appetite', label: 'Appetite', icon: '🍽️', lowLabel: 'No appetite', highLabel: 'Normal', scaleType: 'reversed' },
    { id: 'mood', label: 'Mood', icon: '🧠', lowLabel: 'Low', highLabel: 'Good', scaleType: 'reversed' },
    { id: 'mouth', label: 'Mouth Sores', icon: '👄', lowLabel: 'None', highLabel: 'Severe', scaleType: 'normal' },
    { id: 'sleep', label: 'Sleep', icon: '😴', lowLabel: 'Very poor', highLabel: 'Slept well', scaleType: 'reversed' },
    { id: 'bowel', label: 'Bowel Function', icon: '🚽', lowLabel: 'Constipated', highLabel: 'Diarrhoea', scaleType: 'neutral' },
    { id: 'concentration', label: 'Concentration', icon: '🎯', lowLabel: 'Poor', highLabel: 'Good', scaleType: 'reversed' }
];

let state = {
    currentView: 'today',
    selectedDate: new Date(),
    selectedCycle: 1,
    takenMeds: {},
    prnTaken: {},
    symptoms: {},
    notes: {},
    food: {},
    wins: {},
    weights: {},
    patientName: '',
    patientEmail: '',
    patientDob: '',
    patientHospitalNumber: '',
    emergencyContacts: {
        oncologyUnit: '',
        outOfHours: '',
        gp: ''
    },
    theme: 'dark',
    accentColour: '#2a9d8f',
    showDailyMessages: true,
    collapsedSections: {},
    medications: [],
    medicationsInitialised: false,
    cycleLength: 21,           // NEW: configurable cycle length in days (default 21)
    numberOfCycles: 6,          // NEW: configurable number of cycles (default 6)
    cycleDates: {
        1: '2025-12-22',
        2: '2026-01-13',
        3: '',
        4: '',
        5: '',
        6: ''
    },
    lastBackupDate: null
};

function generateDefaultMedications() {
    // Convert scheduleTemplate into editable medication list
    const meds = [];
    const medMap = new Map();
    
    Object.entries(scheduleTemplate).forEach(([day, data]) => {
        const dayNum = parseInt(day);
        ['morning', 'afternoon', 'evening', 'bedtime'].forEach(period => {
            (data.medications[period] || []).forEach(med => {
                const key = med.name + '|' + med.dose;
                if (!medMap.has(key)) {
                    medMap.set(key, {
                        id: 'med_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                        name: med.name,
                        dose: med.dose,
                        times: { morning: [], afternoon: [], evening: [], bedtime: [] }
                    });
                }
                const m = medMap.get(key);
                if (!m.times[period].includes(dayNum)) {
                    m.times[period].push(dayNum);
                }
            });
        });
    });
    
    // Convert map to array and calculate day ranges
    medMap.forEach(med => {
        // Find overall start/end for each time period
        const allDays = [];
        Object.values(med.times).forEach(days => allDays.push(...days));
        const uniqueDays = [...new Set(allDays)].sort((a, b) => a - b);
        
        if (uniqueDays.length > 0) {
            med.startDay = Math.min(...uniqueDays);
            med.endDay = Math.max(...uniqueDays);
            
            // Convert times arrays to simpler format - which times are active
            med.timesOfDay = [];
            ['morning', 'afternoon', 'evening', 'bedtime'].forEach(period => {
                if (med.times[period].length > 0) {
                    med.timesOfDay.push(period);
                }
            });
            
            // Store the detailed times for complex schedules
            med.detailedTimes = med.times;
            delete med.times;
            
            meds.push(med);
        }
    });
    
    return meds;
}

function loadState() {
    try {
        const s = localStorage.getItem('chemoTrackerState');
        if (s) state = { ...state, ...JSON.parse(s) };

        // Backward compatibility: add cycleLength and numberOfCycles if missing
        let needsSave = false;
        if (state.cycleLength === undefined) {
            state.cycleLength = 21;
            needsSave = true;
        }
        if (state.numberOfCycles === undefined) {
            state.numberOfCycles = 6;
            needsSave = true;
        }

        // Ensure cycleDates object matches numberOfCycles
        const currentCycleKeys = Object.keys(state.cycleDates || {}).length;
        if (currentCycleKeys !== state.numberOfCycles) {
            const newCycleDates = {};
            for (let i = 1; i <= state.numberOfCycles; i++) {
                newCycleDates[i] = state.cycleDates[i] || '';
            }
            state.cycleDates = newCycleDates;
            needsSave = true;
        }

        // Migrate from old customMedications format
        if (state.customMedications && state.customMedications.length > 0 && !state.medicationsInitialised) {
            state.medications = generateDefaultMedications();
            state.customMedications.forEach(cm => {
                state.medications.push({
                    ...cm,
                    detailedTimes: null
                });
            });
            state.medicationsInitialised = true;
            delete state.customMedications;
            needsSave = true;
        }

        // Initialise medications from template if not done
        if (!state.medicationsInitialised) {
            state.medications = generateDefaultMedications();
            state.medicationsInitialised = true;
            needsSave = true;
        }

        // Migrate from midday to afternoon (v5 to v6)
        if (state.medications && state.medications.length > 0) {
            state.medications.forEach(med => {
                if (med.timesOfDay && med.timesOfDay.includes('midday')) {
                    med.timesOfDay = med.timesOfDay.map(t => t === 'midday' ? 'afternoon' : t);
                    needsSave = true;
                }
                if (med.detailedTimes && med.detailedTimes.midday) {
                    med.detailedTimes.afternoon = med.detailedTimes.midday;
                    delete med.detailedTimes.midday;
                    needsSave = true;
                }
            });
            // Also migrate collapsedSections if needed
            if (state.collapsedSections && state.collapsedSections.midday !== undefined) {
                state.collapsedSections.afternoon = state.collapsedSections.midday;
                delete state.collapsedSections.midday;
                needsSave = true;
            }
        }

        if (needsSave) saveState();

        applyTheme();
    } catch(e) { console.error('loadState error:', e); }
}

function saveState() { 
    try { localStorage.setItem('chemoTrackerState', JSON.stringify(state)); } catch(e) {} 
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('themeColor').content = state.theme === 'light' ? '#f5f5f7' : '#1a1a2e';
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.classList.toggle('active', state.theme === 'light');
    
    // Apply accent colour
    document.documentElement.style.setProperty('--accent-colour', state.accentColour);
    document.querySelectorAll('.colour-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.colour === state.accentColour);
    });
}

function formatDate(d) { return d.toISOString().split('T')[0]; }

function getCycleInfo(date) {
    const dateStr = formatDate(date);
    for (let cycle = 1; cycle <= state.numberOfCycles; cycle++) {
        const chemoDate = state.cycleDates[cycle];
        if (!chemoDate) continue;
        const day0 = new Date(chemoDate);
        const cycleStart = new Date(day0); cycleStart.setDate(cycleStart.getDate() - 1);
        const cycleDaysAfterChemo = state.cycleLength - 2; // -1 for day before, -1 for day 0
        const cycleEnd = new Date(day0); cycleEnd.setDate(cycleEnd.getDate() + cycleDaysAfterChemo);
        if (date >= cycleStart && date <= cycleEnd) {
            const diffDays = Math.floor((date - cycleStart) / (1000*60*60*24)) - 1;
            return { cycle, dayNum: diffDays };
        }
    }
    return null;
}

function getDaySchedule(date) {
    const info = getCycleInfo(date);
    if (!info) return null;
    const template = getEffectiveSchedule(info.dayNum);
    if (!template) return null;
    return { ...template, cycle: info.cycle, dayNum: info.dayNum };
}

function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

function getMedInfoLink(name) { 
    for (const [k, v] of Object.entries(medInfoLinks)) { 
        if (name.includes(k) || k.includes(name.split(' ')[0])) return v; 
    } 
    return null; 
}

function getBaselineWeight() {
    const allWeights = Object.entries(state.weights).filter(([k,v]) => v).sort((a,b) => a[0].localeCompare(b[0]));
    return allWeights.length > 0 ? parseFloat(allWeights[0][1]) : null;
}

function getFirstName() {
    if (!state.patientName) return '';
    return state.patientName.split(' ')[0];
}

function getTimeOfDayGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
}

function getMilestoneMessage(dayNum, cycleLength = 21) {
    const messages = {};

    // Fixed treatment-related milestones (universal for all cycle lengths)
    messages['-1'] = "Tomorrow is treatment day. You're prepared and ready.";
    messages['0'] = "Treatment day. You're stronger than you know.";
    messages['1'] = "You did it. The hardest day is behind you.";
    messages['2'] = "Your body is already beginning to recover.";
    messages['3'] = "Steroids finished. Your body will start to settle.";

    // Dynamic progress-based milestones
    const finalDay = cycleLength - 2;
    const halfwayDay = Math.floor(finalDay / 2);

    messages[halfwayDay.toString()] = "Halfway there. You're doing brilliantly.";

    // Only show "two weeks" message if cycle is long enough and it's not the final day
    if (cycleLength >= 16 && 14 !== finalDay) {
        messages['14'] = "Two weeks done. Look how far you've come.";
    }

    messages[finalDay.toString()] = "Final day of this cycle. Take a moment to recognise what you've achieved.";

    return messages[dayNum.toString()] || null;
}

function renderHeader() {
    const d = state.selectedDate, s = getDaySchedule(d);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('dayName').textContent = days[d.getDay()];
    document.getElementById('dateDisplay').textContent = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    document.getElementById('dayTitle').textContent = s ? s.label : 'No Schedule';
    document.getElementById('daySubtitle').textContent = s ? s.note : 'Outside of cycle';
    document.getElementById('cycleBadge').textContent = s ? 'Cycle ' + s.cycle : 'No Cycle';
    
    const greeting = document.getElementById('patientGreeting');
    const isToday = formatDate(d) === formatDate(new Date());
    
    if (state.patientName) {
        const firstName = getFirstName();
        let greetingText = '';
        if (isToday && s && state.showDailyMessages !== false) {
            const milestone = getMilestoneMessage(s.dayNum, state.cycleLength);
            if (milestone) {
                greetingText = getTimeOfDayGreeting() + ', ' + firstName + '. ' + milestone;
            } else {
                const encouragements = [
                    "You've got this.",
                    "One step at a time.",
                    "One day at a time.",
                    "You're doing great."
                ];
                const dayIndex = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / (1000*60*60*24));
                greetingText = getTimeOfDayGreeting() + ', ' + firstName + '. ' + encouragements[dayIndex % encouragements.length];
            }
        } else if (isToday) {
            greetingText = getTimeOfDayGreeting() + ', ' + firstName + '.';
        } else {
            greetingText = firstName + "'s Cycle Tracker";
        }
        greeting.textContent = greetingText;
        greeting.style.display = 'block';
    } else {
        greeting.style.display = 'none';
    }

    // Show/hide "Back to Today" button
    const backToTodayBtn = document.getElementById('backToTodayBtn');
    if (state.currentView === 'today' && !isToday) {
        backToTodayBtn.style.display = 'flex';
    } else {
        backToTodayBtn.style.display = 'none';
    }

    updateProgress();
}

function updateProgress() {
    const dk = formatDate(state.selectedDate), s = getDaySchedule(state.selectedDate);
    const allDoneCard = document.getElementById('allDoneCard');
    const quoteCard = document.getElementById('quoteCard');
    const isToday = dk === formatDate(new Date());
    
    // Handle quote card visibility based on showDailyMessages setting
    if (quoteCard) {
        quoteCard.style.display = (state.showDailyMessages !== false && isToday) ? 'block' : 'none';
    }
    
    if (!s) { 
        document.getElementById('progressFill').style.width = '0%'; 
        document.getElementById('progressText').textContent = 'No medications'; 
        document.getElementById('progressPercent').textContent = ''; 
        if (allDoneCard) allDoneCard.style.display = 'none';
        return; 
    }
    let total = 0, taken = 0; const tt = state.takenMeds[dk] || {};
    ['morning','afternoon','evening','bedtime'].forEach(p => { (s.medications[p]||[]).forEach((m,i) => { total++; if (tt[p+'-'+i]) taken++; }); });
    const pct = total > 0 ? Math.round((taken/total)*100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = taken + ' of ' + total + ' taken';
    document.getElementById('progressPercent').textContent = pct + '%';
    
    // Show "all done" card when 100% complete and it's today
    if (allDoneCard) {
        const showAllDone = (pct === 100 && total > 0 && isToday);
        allDoneCard.style.display = showAllDone ? 'block' : 'none';
    }
}
function renderMedications() {
    const c = document.getElementById('medicationsContainer'), dk = formatDate(state.selectedDate), s = getDaySchedule(state.selectedDate);
    const isToday = dk === formatDate(new Date());
    const isFuture = state.selectedDate > new Date();
    
    if (!s) { 
        if (isFuture) {
            c.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🌱</div><p>This day is ahead of you.</p><p class="empty-state-sub">Focus on today – you\'ll get here when you\'re ready.</p></div>'; 
        } else {
            c.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📅</div><p>No medications scheduled</p></div>'; 
        }
        return; 
    }
    const tt = state.takenMeds[dk] || {};
    const periods = [{key:'morning',label:'Morning',time:'06:00–12:00'},{key:'afternoon',label:'Afternoon',time:'12:00–18:00'},{key:'evening',label:'Evening',time:'18:00–22:00'},{key:'bedtime',label:'Bedtime',time:'22:00–00:00'}];
    let html = '';
    periods.forEach(p => {
        const meds = s.medications[p.key] || []; if (!meds.length) return;
        html += '<section class="time-section"><div class="time-header"><div class="time-dot '+p.key+'"></div><span class="time-label">'+p.label+'</span><span class="time-period">'+p.time+'</span></div>';
        meds.forEach((m,i) => {
            const mk = p.key+'-'+i, taken = tt[mk], takenTime = taken ? new Date(taken).toLocaleTimeString('en-IE',{hour:'2-digit',minute:'2-digit'}) : null;
            const link = getMedInfoLink(m.name);
            html += '<div class="med-card '+p.key+(taken?' taken':'')+'" data-period="'+p.key+'" data-idx="'+i+'">';
            html += '<div class="med-checkbox"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>';
            html += '<div class="med-info"><div class="med-name">'+m.name;
            if (link) html += ' <a href="'+link+'" target="_blank" rel="noopener" class="med-info-link" onclick="event.stopPropagation()">info</a>';
            html += '</div><div class="med-dose">'+m.dose+'</div></div>';
            html += '<div class="med-time">'+(taken?'<span class="taken-at">✓ '+takenTime+'</span>':(m.time||''))+'</div></div>';
        });
        html += '</section>';
    });
    c.innerHTML = html;
    c.querySelectorAll('.med-card').forEach(card => { card.addEventListener('click', () => toggleMedication(card.dataset.period, parseInt(card.dataset.idx))); });
}

function renderPRN() {
    const c = document.getElementById('prnContainer'), dk = formatDate(state.selectedDate), pt = state.prnTaken[dk] || {};
    let html = '';
    prnMedications.forEach(m => {
        const cnt = pt[m.id] || 0, link = getMedInfoLink(m.name);
        html += '<div class="prn-card"><div class="prn-icon">'+m.icon+'</div><div class="prn-info"><div class="prn-name">'+m.name+' '+m.dose;
        if (link) html += ' <a href="'+link+'" target="_blank" rel="noopener" class="med-info-link" onclick="event.stopPropagation()">info</a>';
        html += '</div><div class="prn-detail">'+m.purpose+' • max '+m.maxDaily+'/day</div></div>';
        html += '<div class="prn-counter"><button class="prn-btn" data-med="'+m.id+'" data-action="decrease"'+(cnt===0?' disabled':'')+'>−</button>';
        html += '<span class="prn-count">'+cnt+'/'+m.maxDaily+'</span>';
        html += '<button class="prn-btn" data-med="'+m.id+'" data-action="increase"'+(cnt>=m.maxDaily?' disabled':'')+'>+</button></div></div>';
    });
    c.innerHTML = html;
    c.querySelectorAll('.prn-btn').forEach(btn => { btn.addEventListener('click', e => { e.stopPropagation(); updatePRN(btn.dataset.med, btn.dataset.action); }); });
}

function renderSymptoms() {
    const c = document.getElementById('symptomsContainer'), dk = formatDate(state.selectedDate), st = state.symptoms[dk] || {};
    const temp = st.temperature || '', tempWarn = temp && parseFloat(temp) >= 38;
    const weight = state.weights[dk] || '';
    const baseline = getBaselineWeight();
    
    let html = '<div class="vitals-row">';
    // Temperature
    html += '<div class="symptom-card"><div class="symptom-label"><span class="icon">🌡️</span>Temp</div>';
    html += '<div class="temp-input-wrapper"><input type="number" class="temp-input" id="tempInput" placeholder="37.0" step="0.1" min="35" max="42" value="'+temp+'">';
    html += '<span class="temp-unit">°C</span></div>';
    html += '<div class="temp-warning'+(tempWarn?' show':'')+'" id="tempWarning">Your temperature is elevated. It\'s a good idea to ring the oncology team – that\'s what they\'re there for.</div></div>';
    
    // Weight
    html += '<div class="symptom-card"><div class="symptom-label"><span class="icon">⚖️</span>Weight</div>';
    html += '<div class="weight-input-wrapper"><input type="number" class="weight-input" id="weightInput" placeholder="70.0" step="0.1" min="30" max="200" value="'+weight+'">';
    html += '<span class="weight-unit">kg</span></div>';
    if (weight && baseline) {
        const diff = (parseFloat(weight) - baseline).toFixed(1);
        const pct = ((parseFloat(weight) - baseline) / baseline * 100).toFixed(1);
        const isLoss = diff < 0;
        html += '<div class="weight-change'+(isLoss?' loss':'')+'">'+( diff > 0 ? '+' : '')+diff+' kg ('+( diff > 0 ? '+' : '')+pct+'%)</div>';
    }
    html += '</div></div>';
    
    // Symptom scales
    symptomsConfig.forEach(s => {
        const val = st[s.id] || 0;
        const scaleType = s.scaleType || 'normal';
        html += '<div class="symptom-card"><div class="symptom-label"><span class="icon">'+s.icon+'</span>'+s.label+'</div>';
        html += '<div class="symptom-scale scale-'+scaleType+'" data-symptom="'+s.id+'">';
        for (let l = 1; l <= 5; l++) html += '<button class="symptom-btn'+(val===l?' selected level-'+l:'')+'" data-level="'+l+'">'+l+'</button>';
        html += '</div><div class="symptom-labels"><span>'+s.lowLabel+'</span><span>'+s.highLabel+'</span></div></div>';
    });
    c.innerHTML = html;
    
    c.querySelectorAll('.symptom-scale').forEach(scale => { 
        scale.querySelectorAll('.symptom-btn').forEach(btn => { 
            btn.addEventListener('click', () => updateSymptom(scale.dataset.symptom, parseInt(btn.dataset.level))); 
        }); 
    });
    
    const ti = document.getElementById('tempInput'); let tt;
    ti.addEventListener('input', () => { clearTimeout(tt); tt = setTimeout(() => updateTemperature(ti.value), 500); });
    
    const wi = document.getElementById('weightInput'); let wt;
    wi.addEventListener('input', () => { clearTimeout(wt); wt = setTimeout(() => updateWeight(wi.value), 500); });
}

function renderCalendar() {
    const chemoDateStr = state.cycleDates[state.selectedCycle];
    const progressCard = document.getElementById('cycleProgressCard');
    const today = new Date();

    // Calculate dynamic cycle boundaries
    const cycleDaysAfterChemo = state.cycleLength - 2; // -1 for day before, -1 for day 0
    const maxDayNum = cycleDaysAfterChemo;

    // Update cycle progress
    if (chemoDateStr) {
        const day0 = new Date(chemoDateStr);
        const cycleStart = new Date(day0); cycleStart.setDate(cycleStart.getDate() - 1);
        const cycleEnd = new Date(day0); cycleEnd.setDate(cycleEnd.getDate() + maxDayNum);

        // Calculate days completed
        let daysCompleted = 0;
        let currentDayNum = -2; // Before cycle

        if (today >= cycleStart) {
            const diffDays = Math.floor((today - cycleStart) / (1000*60*60*24));
            daysCompleted = Math.min(diffDays + 1, state.cycleLength);
            currentDayNum = diffDays - 1; // Convert to cycle day number (-1 to +maxDayNum)
        }
        if (today > cycleEnd) {
            daysCompleted = state.cycleLength;
            currentDayNum = state.cycleLength; // Past cycle
        }

        const pct = Math.round((daysCompleted / state.cycleLength) * 100);
        const currentDayLabel = currentDayNum < -1 ? 'Not started' :
                                currentDayNum > maxDayNum ? 'Complete' :
                                'Day ' + (currentDayNum <= 0 ? currentDayNum : '+' + currentDayNum);

        document.getElementById('cycleProgressText').textContent = currentDayLabel + ' • ' + daysCompleted + ' of ' + state.cycleLength + ' days';
        document.getElementById('cycleProgressFill').style.width = pct + '%';
        document.getElementById('cycleProgressPercent').textContent = pct + '%';
        document.getElementById('cycleProgressStartLabel').textContent = 'Day -1';
        document.getElementById('cycleProgressEndLabel').textContent = 'Day +' + maxDayNum;
        progressCard.style.display = 'block';
    } else {
        progressCard.style.display = 'none';
    }

    // Render cycle selector
    const cs = document.getElementById('cycleSelector');
    let csHtml = '';
    for (let i = 1; i <= state.numberOfCycles; i++) {
        const hasDate = state.cycleDates[i];
        const isFuture = hasDate && new Date(hasDate) > new Date();
        csHtml += '<div class="cycle-pill'+(state.selectedCycle === i ? ' active' : '')+(isFuture && !hasDate ? ' future' : '')+'" data-cycle="'+i+'">Cycle '+i+'</div>';
    }
    cs.innerHTML = csHtml;
    cs.querySelectorAll('.cycle-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const cycle = parseInt(pill.dataset.cycle);
            if (state.cycleDates[cycle]) {
                state.selectedCycle = cycle;
                renderCalendar();
            }
        });
    });

    // Render calendar for selected cycle
    const g = document.getElementById('calendarGrid');
    if (!chemoDateStr) { g.innerHTML = '<div class="empty-state">No date set for this cycle</div>'; return; }

    const day0 = new Date(chemoDateStr);
    const cycleStart = new Date(day0); cycleStart.setDate(cycleStart.getDate() - 1);
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const startDayOfWeek = cycleStart.getDay();

    let html = days.map(d => '<div class="calendar-header">'+d+'</div>').join('');
    for (let i = 0; i < startDayOfWeek; i++) html += '<div class="calendar-day empty"></div>';

    for (let dayNum = -1; dayNum <= maxDayNum; dayNum++) {
        const currentDate = new Date(day0); currentDate.setDate(currentDate.getDate() + dayNum);
        const dk = formatDate(currentDate);
        const sch = scheduleTemplate[dayNum.toString()];
        const isToday = dk === formatDate(today);

        let cls = ['calendar-day'];
        if (isToday) cls.push('today');
        if (sch?.isChemoDay) cls.push('chemo');
        if (sch?.isInjectionDay) cls.push('injection');
        if (currentDate < today) cls.push('completed');

        const cdl = dayNum <= 0 ? dayNum : '+'+dayNum;
        html += '<div class="'+cls.join(' ')+'" data-date="'+dk+'"><span class="day-num">'+currentDate.getDate()+'</span><span class="cycle-day">D'+cdl+'</span></div>';
    }

    g.innerHTML = html;
    g.querySelectorAll('.calendar-day:not(.empty)').forEach(day => {
        day.addEventListener('click', () => {
            if (day.dataset.date) {
                state.selectedDate = new Date(day.dataset.date);
                renderAll();
                switchView('today');
            }
        });
    });

    // Render symptom trend charts
    renderCycleTrends();
}

// Chart color configuration for each symptom
const chartColors = {
    fatigue: '#f97316',
    nausea: '#22c55e',
    pain: '#ef4444',
    appetite: '#eab308',
    mood: '#8b5cf6',
    mouth: '#ec4899',
    sleep: '#6366f1',
    bowel: '#14b8a6',
    concentration: '#06b6d4'
};

// Store chart instances for cleanup
let chartInstances = {};

function renderCycleTrends() {
    const container = document.getElementById('chartsContainer');
    const chemoDateStr = state.cycleDates[state.selectedCycle];
    
    if (!chemoDateStr) {
        container.innerHTML = '<div class="chart-no-data">No cycle data available</div>';
        return;
    }
    
    // Destroy existing charts
    Object.values(chartInstances).forEach(chart => chart.destroy());
    chartInstances = {};
    
    const day0 = new Date(chemoDateStr);
    
    // Collect symptom data for the cycle
    const cycleData = {};
    symptomsConfig.forEach(s => {
        cycleData[s.id] = [];
    });
    
    // Gather data for each day in the cycle
    const cycleDaysAfterChemo = state.cycleLength - 2;
    for (let dayNum = -1; dayNum <= cycleDaysAfterChemo; dayNum++) {
        const currentDate = new Date(day0);
        currentDate.setDate(currentDate.getDate() + dayNum);
        const dk = formatDate(currentDate);
        const daySymptoms = state.symptoms[dk] || {};

        symptomsConfig.forEach(s => {
            cycleData[s.id].push(daySymptoms[s.id] || null);
        });
    }

    // Generate HTML for chart cards
    let html = '';
    const lastDayLabel = 'Day +' + cycleDaysAfterChemo;
    symptomsConfig.forEach(s => {
        html += '<div class="chart-card">';
        html += '<div class="chart-header">';
        html += '<span class="chart-icon">' + s.icon + '</span>';
        html += '<span class="chart-title">' + s.label + '</span>';
        html += '</div>';
        html += '<div class="chart-wrapper"><canvas id="chart-' + s.id + '"></canvas></div>';
        html += '<div class="chart-labels"><span>Day -1</span><span>' + lastDayLabel + '</span></div>';
        html += '</div>';
    });
    container.innerHTML = html;
    
    // Create charts
    const dayLabels = Array.from({length: 21}, (_, i) => {
        const d = i - 1;
        return d <= 0 ? d.toString() : '+' + d;
    });
    
    symptomsConfig.forEach(s => {
        const ctx = document.getElementById('chart-' + s.id);
        if (!ctx) return;
        
        const color = chartColors[s.id] || '#2a9d8f';
        const data = cycleData[s.id];
        
        // Check if there's any data
        const hasData = data.some(v => v !== null);
        
        if (!hasData) {
            ctx.parentElement.innerHTML = '<div class="chart-no-data">No data recorded</div>';
            return;
        }
        
        chartInstances[s.id] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dayLabels,
                datasets: [{
                    data: data,
                    borderColor: color,
                    backgroundColor: color + '20',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointBackgroundColor: color,
                    pointBorderColor: color,
                    spanGaps: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1a1a2e',
                        titleColor: '#f0f0f5',
                        bodyColor: '#9090a8',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            title: (items) => 'Day ' + items[0].label,
                            label: (item) => 'Level: ' + item.raw + '/5'
                        }
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        min: 0,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            color: '#606078',
                            font: { size: 10 }
                        },
                        grid: {
                            color: 'rgba(255,255,255,0.05)'
                        }
                    }
                }
            }
        });
    });
}

function renderNotes() { 
    document.getElementById('notesTextarea').value = state.notes[formatDate(state.selectedDate)] || ''; 
}


function renderFood() {
    document.getElementById('foodTextarea').value =
        state.food[formatDate(state.selectedDate)] || '';
}

function renderWin() {
    document.getElementById('winTextarea').value = state.wins[formatDate(state.selectedDate)] || '';
}

function renderCycleDatesInputs() {
    const container = document.getElementById('cycleDatesContainer');
    if (!container) return;

    let html = '';
    const cyclesPerRow = 2;
    for (let i = 1; i <= state.numberOfCycles; i += cyclesPerRow) {
        html += '<div class="settings-row">';
        for (let j = 0; j < cyclesPerRow && (i + j) <= state.numberOfCycles; j++) {
            const cycleNum = i + j;
            html += '<div><label>Cycle ' + cycleNum + '</label><input type="date" class="settings-input cycle-date-input" id="cycle' + cycleNum + 'Date" value="' + (state.cycleDates[cycleNum] || '') + '"></div>';
        }
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderSettings() {
    document.getElementById('patientNameInput').value = state.patientName || '';
    document.getElementById('patientEmailInput').value = state.patientEmail || '';
    document.getElementById('patientDobInput').value = state.patientDob || '';
    document.getElementById('patientHospitalNumberInput').value = state.patientHospitalNumber || '';
    document.getElementById('oncologyUnitInput').value = state.emergencyContacts.oncologyUnit || '';
    document.getElementById('outOfHoursInput').value = state.emergencyContacts.outOfHours || '';
    document.getElementById('gpInput').value = state.emergencyContacts.gp || '';
    document.getElementById('themeToggle').classList.toggle('active', state.theme === 'light');
    document.getElementById('showMessagesToggle').classList.toggle('active', state.showDailyMessages !== false);

    // Update cycle configuration inputs
    document.getElementById('cycleLengthInput').value = state.cycleLength || 21;
    document.getElementById('numberOfCyclesInput').value = state.numberOfCycles || 6;

    // Render cycle date inputs dynamically
    renderCycleDatesInputs();

    // Update colour picker
    document.querySelectorAll('.colour-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.colour === state.accentColour);
    });

    // Update last backup display
    updateLastBackupDisplay();

    // Render medications list
    renderMedicationsList();
}

function updateLastBackupDisplay() {
    const el = document.getElementById('lastBackupInfo');
    if (!el) return;
    
    if (!state.lastBackupDate) {
        el.textContent = '⚠️ No backup has been created yet';
        el.className = 'last-backup-info warning';
        return;
    }
    
    const backupDate = new Date(state.lastBackupDate);
    const now = new Date();
    const daysSince = Math.floor((now - backupDate) / (1000 * 60 * 60 * 24));
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = backupDate.getDate() + ' ' + months[backupDate.getMonth()] + ' ' + backupDate.getFullYear();
    
    let text = 'Last backup: ' + dateStr;
    
    if (daysSince === 0) {
        text += ' (today)';
        el.className = 'last-backup-info';
    } else if (daysSince === 1) {
        text += ' (yesterday)';
        el.className = 'last-backup-info';
    } else if (daysSince <= 7) {
        text += ' (' + daysSince + ' days ago)';
        el.className = 'last-backup-info';
    } else {
        text += ' (' + daysSince + ' days ago)';
        el.className = 'last-backup-info warning';
    }
    
    el.textContent = text;
}

function renderEmergencyContacts() {
    const card = document.getElementById('emergencyCard');
    const container = document.getElementById('emergencyContacts');
    const contacts = state.emergencyContacts;
    
    // Check if any contacts are set
    const hasContacts = contacts.oncologyUnit || contacts.outOfHours || contacts.gp;
    if (!hasContacts) {
        card.style.display = 'none';
        return;
    }
    
    let html = '';
    if (contacts.oncologyUnit) {
        html += '<div class="emergency-contact"><span class="emergency-contact-label">Oncology Unit</span><a href="tel:'+contacts.oncologyUnit.replace(/\s/g, '')+'" class="emergency-contact-number">'+contacts.oncologyUnit+'</a></div>';
    }
    if (contacts.outOfHours) {
        html += '<div class="emergency-contact"><span class="emergency-contact-label">Out of Hours</span><a href="tel:'+contacts.outOfHours.replace(/\s/g, '')+'" class="emergency-contact-number">'+contacts.outOfHours+'</a></div>';
    }
    if (contacts.gp) {
        html += '<div class="emergency-contact"><span class="emergency-contact-label">GP</span><a href="tel:'+contacts.gp.replace(/\s/g, '')+'" class="emergency-contact-number">'+contacts.gp+'</a></div>';
    }
    
    container.innerHTML = html;
    card.style.display = 'block';
}

function renderAll() { 
    renderHeader(); 
    renderMedications(); 
    renderPRN(); 
    renderSymptoms(); 
    renderCalendar(); 
    renderNotes();
    renderFood();
    renderWin();
    renderSettings();
    renderEmergencyContacts();
}

function toggleMedication(period, idx) {
    const dk = formatDate(state.selectedDate), mk = period+'-'+idx;
    if (!state.takenMeds[dk]) state.takenMeds[dk] = {};
    if (state.takenMeds[dk][mk]) { delete state.takenMeds[dk][mk]; showToast('Marked as not taken'); }
    else { state.takenMeds[dk][mk] = Date.now(); showToast('Marked as taken ✓'); }
    saveState(); renderMedications(); updateProgress();
}

function updatePRN(medId, action) {
    const dk = formatDate(state.selectedDate), med = prnMedications.find(m => m.id === medId);
    if (!state.prnTaken[dk]) state.prnTaken[dk] = {};
    const cur = state.prnTaken[dk][medId] || 0;
    if (action === 'increase' && cur < med.maxDaily) { state.prnTaken[dk][medId] = cur + 1; showToast(med.name + ' logged'); }
    else if (action === 'decrease' && cur > 0) state.prnTaken[dk][medId] = cur - 1;
    saveState(); renderPRN();
}

function updateSymptom(symptomId, level) {
    const dk = formatDate(state.selectedDate);
    if (!state.symptoms[dk]) state.symptoms[dk] = {};
    if (state.symptoms[dk][symptomId] === level) delete state.symptoms[dk][symptomId];
    else state.symptoms[dk][symptomId] = level;
    saveState(); renderSymptoms();
}

function updateTemperature(value) {
    if (value.endsWith(".")) return; // Still typing decimal
    const dk = formatDate(state.selectedDate);
    if (!state.symptoms[dk]) state.symptoms[dk] = {};
    if (value) { 
        state.symptoms[dk].temperature = value; 
        document.getElementById('tempWarning').classList.toggle('show', parseFloat(value) >= 38); 
    }
    else delete state.symptoms[dk].temperature;
    saveState();
}

function updateWeight(value) {
    if (value.endsWith(".")) return; // Still typing decimal
    const dk = formatDate(state.selectedDate);
    if (value) state.weights[dk] = value;
    else delete state.weights[dk];
    saveState();
    // Update weight change display without full re-render
    const baseline = getBaselineWeight();
    if (value && baseline) {
        const diff = (parseFloat(value) - baseline).toFixed(1);
        const pct = ((parseFloat(value) - baseline) / baseline * 100).toFixed(1);
        const changeEl = document.querySelector('.weight-change');
        if (changeEl) {
            changeEl.textContent = (diff > 0 ? '+' : '') + diff + ' kg (' + (diff > 0 ? '+' : '') + pct + '%)';
            changeEl.classList.toggle('loss', diff < 0);
        }
    }
}

function switchView(view) {
    state.currentView = view;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
    document.querySelectorAll('.bottom-nav-item').forEach(t => t.classList.toggle('active', t.dataset.view === view));
    document.getElementById('todayView').classList.toggle('active', view === 'today');
    document.getElementById('calendarView').classList.toggle('active', view === 'calendar');
    document.getElementById('settingsView').classList.toggle('active', view === 'settings');
}

function generateDailySummary() {
    const dk = formatDate(state.selectedDate);
    const s = getDaySchedule(state.selectedDate);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const d = state.selectedDate;
    
    const patientName = state.patientName || 'Patient';
    const dateStr = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    const dayLabel = s ? 'Cycle ' + s.cycle + ' - ' + s.label + ' - ' + s.note : 'No schedule';

    // Format date of birth if present
    let dobStr = '';
    if (state.patientDob) {
        const dobDate = new Date(state.patientDob + 'T00:00:00');
        dobStr = dobDate.getDate() + ' ' + months[dobDate.getMonth()] + ' ' + dobDate.getFullYear();
    }

    let summary = 'DAY BY DAY - DAILY SUMMARY\n';
    summary += '══════════════════════════════\n\n';
    summary += 'Patient: ' + patientName + '\n';
    if (dobStr) summary += 'Date of Birth: ' + dobStr + '\n';
    if (state.patientHospitalNumber) summary += 'Patient / Hospital Number: ' + state.patientHospitalNumber + '\n';
    summary += 'Date: ' + dateStr + '\n';
    summary += 'Cycle Day: ' + dayLabel + '\n\n';
    
    // Vitals
    const st = state.symptoms[dk] || {};
    const weight = state.weights[dk];
    if (st.temperature || weight) {
        summary += '📋 VITALS\n';
        summary += '─────────────────────────────\n';
        if (st.temperature) {
            const tempVal = parseFloat(st.temperature);
            summary += '  🌡️ Temperature: ' + st.temperature + '°C';
            if (tempVal >= 38) summary += ' ⚠️ ELEVATED';
            summary += '\n';
        }
        if (weight) {
            summary += '  ⚖️ Weight: ' + weight + ' kg';
            const baseline = getBaselineWeight();
            if (baseline) {
                const diff = (parseFloat(weight) - baseline).toFixed(1);
                summary += ' (' + (diff > 0 ? '+' : '') + diff + ' kg from baseline)';
            }
            summary += '\n';
        }
        summary += '\n';
    }
    
    summary += '💊 MEDICATIONS\n';
    summary += '─────────────────────────────\n';
    
    if (s) {
        const tt = state.takenMeds[dk] || {};
        let total = 0, taken = 0;
        const periods = ['morning', 'afternoon', 'evening', 'bedtime'];
        
        periods.forEach(p => {
            const meds = s.medications[p] || [];
            if (meds.length > 0) {
                summary += '\n' + p.charAt(0).toUpperCase() + p.slice(1) + ':\n';
                meds.forEach((m, i) => {
                    total++;
                    const mk = p + '-' + i;
                    const wasTaken = tt[mk];
                    if (wasTaken) {
                        taken++;
                        const time = new Date(wasTaken).toLocaleTimeString('en-IE', {hour: '2-digit', minute: '2-digit'});
                        summary += '  ✓ ' + m.name + ' ' + m.dose + ' (taken at ' + time + ')\n';
                    } else {
                        summary += '  ○ ' + m.name + ' ' + m.dose + ' (not taken)\n';
                    }
                });
            }
        });
        
        const pct = total > 0 ? Math.round((taken/total)*100) : 0;
        summary += '\nCompletion: ' + taken + '/' + total + ' (' + pct + '%)\n';
    }
    
    const pt = state.prnTaken[dk] || {};
    const prnUsed = Object.entries(pt).filter(([k, v]) => v > 0);
    if (prnUsed.length > 0) {
        summary += '\n💉 AS-NEEDED MEDICATIONS\n';
        summary += '─────────────────────────────\n';
        prnUsed.forEach(([id, count]) => {
            const med = prnMedications.find(m => m.id === id);
            if (med) summary += '  • ' + med.name + ' ' + med.dose + ': ' + count + ' dose(s)\n';
        });
    }
    
    const symptomEntries = Object.entries(st).filter(([k, v]) => k !== 'temperature');
    if (symptomEntries.length > 0) {
        summary += '\n📊 SYMPTOMS (1=mild, 5=severe)\n';
        summary += '─────────────────────────────\n';
        symptomEntries.forEach(([id, level]) => {
            const sym = symptomsConfig.find(s => s.id === id);
            if (sym) {
                const bar = '█'.repeat(level) + '░'.repeat(5-level);
                summary += '  ' + sym.icon + ' ' + sym.label + ': ' + bar + ' (' + level + '/5)\n';
            }
        });
    }
    
    const notes = state.notes[dk];
    const food = state.food[dk];

    if (notes && notes.trim()) {
        summary += '\n📝 NOTES\n';
        summary += '─────────────────────────────\n';
        summary += notes + '\n';
    }

    if (food && food.trim()) {
        summary += '\n🍽️ FOOD & DRINK\n';
        summary += '─────────────────────────────\n';
        summary += food + '\n';
    }

    const win = state.wins[dk];
    if (win && win.trim()) {
        summary += '\n🌟 TODAY\'S WIN\n';
        summary += '─────────────────────────────\n';
        summary += win + '\n';
    }
    
    summary += '\n══════════════════════════════\n';
    summary += 'Generated by Day by Day\n';
    
    return summary;
}

function sendDailySummary() {
    const email = state.patientEmail;
    if (!email) {
        showToast('Please add an email address in Settings first');
        return;
    }
    
    const summary = generateDailySummary();
    const patientName = state.patientName || 'Patient';
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = state.selectedDate;
    const s = getDaySchedule(d);
    const cycleInfo = s ? 'C' + s.cycle + ' ' : '';
    const dateStr = days[d.getDay()] + ' ' + d.getDate() + '/' + (d.getMonth()+1);
    
    const subject = encodeURIComponent('Day by Day - ' + patientName + ' - ' + cycleInfo + dateStr);
    const body = encodeURIComponent(summary);
    
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    showToast('Opening email...');
}

function exportData() {
    const data = {
        version: 5,
        exportDate: new Date().toISOString(),
        patientName: state.patientName,
        patientEmail: state.patientEmail,
        patientDob: state.patientDob,
        patientHospitalNumber: state.patientHospitalNumber,
        emergencyContacts: state.emergencyContacts,
        theme: state.theme,
        accentColour: state.accentColour,
        showDailyMessages: state.showDailyMessages,
        collapsedSections: state.collapsedSections,
        cycleLength: state.cycleLength,
        numberOfCycles: state.numberOfCycles,
        cycleDates: state.cycleDates,
        medications: state.medications,
        medicationsInitialised: state.medicationsInitialised,
        takenMeds: state.takenMeds,
        prnTaken: state.prnTaken,
        symptoms: state.symptoms,
        weights: state.weights,
        wins: state.wins,
        notes: state.notes,
        food: state.food
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); 
    a.href = URL.createObjectURL(blob); 
    a.download = 'day-by-day-backup-'+formatDate(new Date())+'.json';
    document.body.appendChild(a); 
    a.click(); 
    document.body.removeChild(a);
    
    // Record backup date
    state.lastBackupDate = new Date().toISOString();
    saveState();
    updateLastBackupDisplay();
    
    showToast('Backup downloaded ✓');
}

function importData(file) {
    const r = new FileReader();
    r.onload = e => {
        try {
            const d = JSON.parse(e.target.result);
            if (d.takenMeds) state.takenMeds = d.takenMeds;
            if (d.prnTaken) state.prnTaken = d.prnTaken;
            if (d.symptoms) state.symptoms = d.symptoms;
            if (d.weights) state.weights = d.weights;
            if (d.wins) state.wins = d.wins;
            if (d.notes) state.notes = d.notes;
            if (d.food) state.food = d.food;
            if (d.patientName) state.patientName = d.patientName;
            if (d.patientEmail) state.patientEmail = d.patientEmail;
            if (d.patientDob) state.patientDob = d.patientDob;
            if (d.patientHospitalNumber) state.patientHospitalNumber = d.patientHospitalNumber;
            if (d.emergencyContacts) state.emergencyContacts = { ...state.emergencyContacts, ...d.emergencyContacts };
            if (d.accentColour) state.accentColour = d.accentColour;
            if (d.showDailyMessages !== undefined) state.showDailyMessages = d.showDailyMessages;
            if (d.collapsedSections) state.collapsedSections = d.collapsedSections;
            if (d.cycleLength) state.cycleLength = d.cycleLength;
            if (d.numberOfCycles) state.numberOfCycles = d.numberOfCycles;
            if (d.medications) {
                state.medications = d.medications;
                state.medicationsInitialised = true;
            }
            if (d.cycleDates) state.cycleDates = { ...state.cycleDates, ...d.cycleDates };
            if (d.theme) { state.theme = d.theme; applyTheme(); }
            saveState();
            applyCollapsedSections();
            renderAll();
            showToast('Data restored ✓');
        } catch(err) {
            showToast('Error: Invalid file');
        }
    };
    r.readAsText(file);
}

function clearTrackingData() {
    if (confirm('Clear all tracking data (symptoms, medications taken, weights, notes)? Your personal details and cycle configuration will be kept. This cannot be undone.')) {
        state.takenMeds = {};
        state.prnTaken = {};
        state.symptoms = {};
        state.weights = {};
        state.wins = {};
        state.notes = {};
        state.food = {};
        saveState();
        renderAll();
        showToast('Tracking data cleared');
    }
}

function resetAllData() {
    if (confirm('⚠️ Reset ALL data including personal details, cycle dates, and tracking? This will completely reset the app. This cannot be undone.')) {
        if (confirm('Are you absolutely sure? This will delete EVERYTHING and cannot be recovered.')) {
            // Reset state to defaults
            state.takenMeds = {};
            state.prnTaken = {};
            state.symptoms = {};
            state.weights = {};
            state.wins = {};
            state.notes = {};
            state.food = {};
            state.patientName = '';
            state.patientEmail = '';
            state.patientDob = '';
            state.patientHospitalNumber = '';
            state.emergencyContacts = {
                oncologyUnit: '',
                outOfHours: '',
                gp: ''
            };
            state.cycleDates = {
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: ''
            };
            state.cycleLength = 21;
            state.numberOfCycles = 6;
            state.medications = [];
            state.medicationsInitialised = false;
            state.lastBackupDate = null;
            state.collapsedSections = {};
            // Keep theme and accent colour as user preference
            // Clear daily quote cache
            localStorage.removeItem('dailyQuote');
            saveState();
            renderAll();
            showToast('All data reset');
        }
    }
}

function savePatientDetails() {
    state.patientName = document.getElementById('patientNameInput').value.trim();
    state.patientEmail = document.getElementById('patientEmailInput').value.trim();
    state.patientDob = document.getElementById('patientDobInput').value.trim();
    state.patientHospitalNumber = document.getElementById('patientHospitalNumberInput').value.trim();
    saveState();
    renderHeader();
    showToast('Details saved ✓');
}

function saveEmergencyContacts() {
    state.emergencyContacts.oncologyUnit = document.getElementById('oncologyUnitInput').value.trim();
    state.emergencyContacts.outOfHours = document.getElementById('outOfHoursInput').value.trim();
    state.emergencyContacts.gp = document.getElementById('gpInput').value.trim();
    saveState();
    renderEmergencyContacts();
    showToast('Emergency contacts saved ✓');
}

function saveCycleConfiguration() {
    const newCycleLength = parseInt(document.getElementById('cycleLengthInput').value);
    const newNumberOfCycles = parseInt(document.getElementById('numberOfCyclesInput').value);

    // Validate inputs
    if (newCycleLength < 1 || newCycleLength > 60) {
        showToast('Cycle length must be between 1 and 60 days');
        return;
    }
    if (newNumberOfCycles < 1 || newNumberOfCycles > 12) {
        showToast('Number of cycles must be between 1 and 12');
        return;
    }

    // Update cycle configuration
    state.cycleLength = newCycleLength;
    state.numberOfCycles = newNumberOfCycles;

    // Adjust cycleDates object to match new numberOfCycles
    const newCycleDates = {};
    for (let i = 1; i <= newNumberOfCycles; i++) {
        newCycleDates[i] = state.cycleDates[i] || '';
    }
    state.cycleDates = newCycleDates;

    saveState();
    renderSettings();
    renderCalendar();
    renderHeader();
    showToast('Cycle configuration saved ✓');
}

function saveCycleDates() {
    for (let i = 1; i <= state.numberOfCycles; i++) {
        const input = document.getElementById('cycle'+i+'Date');
        if (input) {
            state.cycleDates[i] = input.value;
        }
    }
    saveState();
    renderCalendar();
    renderHeader();
    showToast('Cycle dates saved ✓');
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveState();
}

function toggleShowMessages() {
    state.showDailyMessages = !state.showDailyMessages;
    document.getElementById('showMessagesToggle').classList.toggle('active', state.showDailyMessages);
    updateProgress(); // This will show/hide the quote card
    renderHeader(); // Re-render greeting
    saveState();
}

function toggleSection(sectionName) {
    state.collapsedSections[sectionName] = !state.collapsedSections[sectionName];
    applyCollapsedSections();
    saveState();
}

function applyCollapsedSections() {
    document.querySelectorAll('.section-header-collapsible').forEach(header => {
        const sectionName = header.dataset.section;
        const section = header.closest('.collapsible-section');
        const content = section.querySelector('.section-content');
        const icon = header.querySelector('.collapse-icon');
        const isCollapsed = state.collapsedSections[sectionName];
        
        if (content) {
            content.style.display = isCollapsed ? 'none' : 'block';
        }
        if (icon) {
            icon.textContent = isCollapsed ? '▶' : '▼';
        }
        section.classList.toggle('collapsed', isCollapsed);
    });
}

function setAccentColour(colour) {
    state.accentColour = colour;
    applyTheme();
    saveState();
    showToast('Accent colour updated');
}

function getEffectiveSchedule(dayNum) {
    // Get base template for labels/notes
    const base = scheduleTemplate[dayNum.toString()];
    if (!base) return null;
    
    // Build schedule from state.medications
    const schedule = {
        label: base.label,
        note: base.note,
        isChemoDay: base.isChemoDay,
        isInjectionDay: base.isInjectionDay,
        medications: {
            morning: [],
            afternoon: [],
            evening: [],
            bedtime: []
        }
    };
    
    // Add medications that apply to this day
    state.medications.forEach(med => {
        if (dayNum < med.startDay || dayNum > med.endDay) return;
        
        // Check if this med applies to this day at each time
        (med.timesOfDay || []).forEach(period => {
            // If detailed times exist, check them
            if (med.detailedTimes && med.detailedTimes[period]) {
                if (med.detailedTimes[period].includes(dayNum)) {
                    schedule.medications[period].push({ name: med.name, dose: med.dose, medId: med.id });
                }
            } else {
                // Simple case - med applies to all days in range for this time
                schedule.medications[period].push({ name: med.name, dose: med.dose, medId: med.id });
            }
        });
    });
    
    return schedule;
}

function renderMedicationsList() {
    const container = document.getElementById('medicationsList');
    
    const periodLabels = { morning: 'Morn', afternoon: 'Aft', evening: 'Eve', bedtime: 'Bed' };
    let html = '';
    
    state.medications.forEach(med => {
        const dayRange = med.startDay === med.endDay 
            ? 'Day ' + (med.startDay <= 0 ? med.startDay : '+' + med.startDay)
            : 'Day ' + (med.startDay <= 0 ? med.startDay : '+' + med.startDay) + ' to +' + med.endDay;
        
        html += '<div class="med-editor-item">';
        html += '<div class="med-editor-header">';
        html += '<div class="med-editor-info" data-id="' + med.id + '">';
        html += '<span class="med-editor-name">' + med.name + '</span>';
        html += '<div class="med-editor-dose">' + med.dose + '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="med-editor-times">';
        ['morning', 'afternoon', 'evening', 'bedtime'].forEach(period => {
            const isActive = (med.timesOfDay || []).includes(period);
            html += '<span class="med-time-checkbox" style="opacity:' + (isActive ? '1' : '0.4') + '">';
            html += '<input type="checkbox" disabled ' + (isActive ? 'checked' : '') + '>';
            html += periodLabels[period] + '</span>';
        });
        html += '</div>';
        html += '<div class="med-editor-footer">';
        html += '<span class="med-editor-details">' + dayRange + '</span>';
        html += '<span class="med-edit-link" data-id="' + med.id + '">Edit</span>';
        html += '<span class="med-delete-link" data-id="' + med.id + '">🗑️ Delete</span>';
        html += '</div>';
        html += '</div>';
    });
    
    if (state.medications.length === 0) {
        html = '<p style="color: var(--text-muted); font-size: 13px; text-align: center; padding: 20px;">No medications configured</p>';
    }
    
    container.innerHTML = html;
    
    // Add click handlers for edit
    container.querySelectorAll('.med-edit-link, .med-editor-info').forEach(el => {
        el.addEventListener('click', () => editMedication(el.dataset.id));
    });
    
    // Add delete handlers
    container.querySelectorAll('.med-delete-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteMedication(btn.dataset.id);
        });
    });
}

let editingMedId = null;

function showMedicationModal(medId = null) {
    const modal = document.getElementById('medModal');
    editingMedId = medId;
    
    if (medId) {
        const med = state.medications.find(m => m.id === medId);
        if (!med) return;
        
        document.getElementById('medModalTitle').textContent = 'Edit Medication';
        document.getElementById('medNameInput').value = med.name;
        document.getElementById('medDoseInput').value = med.dose;
        
        document.getElementById('medTimeMorning').checked = (med.timesOfDay || []).includes('morning');
        document.getElementById('medTimeAfternoon').checked = (med.timesOfDay || []).includes('afternoon');
        document.getElementById('medTimeEvening').checked = (med.timesOfDay || []).includes('evening');
        document.getElementById('medTimeBedtime').checked = (med.timesOfDay || []).includes('bedtime');
        
        // Populate and set day selects
        populateDaySelects();
        document.getElementById('medStartDay').value = med.startDay.toString();
        document.getElementById('medEndDay').value = med.endDay.toString();
    } else {
        document.getElementById('medModalTitle').textContent = 'Add Medication';
        document.getElementById('medNameInput').value = '';
        document.getElementById('medDoseInput').value = '';
        
        document.getElementById('medTimeMorning').checked = false;
        document.getElementById('medTimeAfternoon').checked = false;
        document.getElementById('medTimeEvening').checked = false;
        document.getElementById('medTimeBedtime').checked = false;
        
        populateDaySelects();
        document.getElementById('medStartDay').value = '-1';
        const defaultEndDay = state.cycleLength - 2; // Last day of cycle
        document.getElementById('medEndDay').value = defaultEndDay.toString();
    }
    
    modal.classList.add('show');
}

function populateDaySelects() {
    const startSelect = document.getElementById('medStartDay');
    const endSelect = document.getElementById('medEndDay');
    let options = '';
    const cycleDaysAfterChemo = state.cycleLength - 2;
    for (let d = -1; d <= cycleDaysAfterChemo; d++) {
        const label = d <= 0 ? 'Day ' + d : 'Day +' + d;
        options += '<option value="' + d + '">' + label + '</option>';
    }
    startSelect.innerHTML = options;
    endSelect.innerHTML = options;
}

function editMedication(medId) {
    showMedicationModal(medId);
}

function hideMedicationModal() {
    document.getElementById('medModal').classList.remove('show');
}

function saveMedication() {
    const name = document.getElementById('medNameInput').value.trim();
    const dose = document.getElementById('medDoseInput').value.trim();
    const startDay = parseInt(document.getElementById('medStartDay').value);
    const endDay = parseInt(document.getElementById('medEndDay').value);
    
    // Get selected times
    const timesOfDay = [];
    if (document.getElementById('medTimeMorning').checked) timesOfDay.push('morning');
    if (document.getElementById('medTimeAfternoon').checked) timesOfDay.push('afternoon');
    if (document.getElementById('medTimeEvening').checked) timesOfDay.push('evening');
    if (document.getElementById('medTimeBedtime').checked) timesOfDay.push('bedtime');
    
    if (!name || !dose) {
        showToast('Please enter medication name and dose');
        return;
    }
    
    if (timesOfDay.length === 0) {
        showToast('Please select at least one time of day');
        return;
    }
    
    if (endDay < startDay) {
        showToast('End day must be after start day');
        return;
    }
    
    if (editingMedId) {
        // Update existing medication
        const med = state.medications.find(m => m.id === editingMedId);
        if (med) {
            med.name = name;
            med.dose = dose;
            med.timesOfDay = timesOfDay;
            med.startDay = startDay;
            med.endDay = endDay;
            med.detailedTimes = null; // Clear detailed times when editing
        }
        showToast('Medication updated');
    } else {
        // Add new medication
        const med = {
            id: 'med_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            name,
            dose,
            timesOfDay,
            startDay,
            endDay,
            detailedTimes: null
        };
        state.medications.push(med);
        showToast('Medication added');
    }
    
    saveState();
    hideMedicationModal();
    renderMedicationsList();
    renderMedications(); // Update today view if visible
}

function deleteMedication(id) {
    const med = state.medications.find(m => m.id === id);
    if (!med) return;
    
    if (confirm('Remove ' + med.name + ' from your schedule?')) {
        state.medications = state.medications.filter(m => m.id !== id);
        saveState();
        renderMedicationsList();
        renderMedications(); // Update today view if visible
        showToast('Medication removed');
    }
}

function resetMedications() {
    if (confirm('Reset all medications to the default schedule? This will remove any changes you\'ve made.')) {
        state.medications = generateDefaultMedications();
        saveState();
        renderMedicationsList();
        renderMedications();
        showToast('Medications reset to defaults');
    }
}

function generateCycleSummaryPDF() {
    const chemoDateStr = state.cycleDates[state.selectedCycle];
    if (!chemoDateStr) {
        showToast('No cycle data available');
        return;
    }
    
    showToast('Generating PDF...');
    
    const day0 = new Date(chemoDateStr);
    const cycleStart = new Date(day0);
    cycleStart.setDate(cycleStart.getDate() - 1);
    const cycleDaysAfterChemo = state.cycleLength - 2;
    const cycleEnd = new Date(day0);
    cycleEnd.setDate(cycleEnd.getDate() + cycleDaysAfterChemo);
    const today = new Date();

    const patientName = state.patientName || 'Patient';
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    // Format date of birth if present
    let dobStr = '';
    if (state.patientDob) {
        const dobDate = new Date(state.patientDob + 'T00:00:00');
        dobStr = dobDate.getDate() + ' ' + months[dobDate.getMonth()] + ' ' + dobDate.getFullYear();
    }

    // Calculate date range
    const startDateStr = cycleStart.getDate() + ' ' + months[cycleStart.getMonth()] + ' ' + cycleStart.getFullYear();
    const endDateStr = cycleEnd.getDate() + ' ' + months[cycleEnd.getMonth()] + ' ' + cycleEnd.getFullYear();
    const generatedDate = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();

    // Calculate days completed
    let daysCompleted = 0;
    let currentDayInCycle = -2;
    if (today >= cycleStart) {
        const diffDays = Math.floor((today - cycleStart) / (1000*60*60*24));
        daysCompleted = Math.min(diffDays + 1, state.cycleLength);
        currentDayInCycle = diffDays - 1;
    }
    if (today > cycleEnd) {
        daysCompleted = state.cycleLength;
    }
    
    // Collect all cycle data
    let totalScheduledMeds = 0;
    let totalTakenMeds = 0;
    let elevatedTempDays = [];
    let weights = [];
    let prnUsage = {};
    let symptomTotals = {};
    let symptomCounts = {};
    let allNotes = [];
    let allFood = [];
    let allWins = [];
    
    // Medication adherence by medication
    let medAdherence = {};
    
    prnMedications.forEach(m => {
        prnUsage[m.id] = { name: m.name, dose: m.dose, total: 0, days: [] };
    });
    
    symptomsConfig.forEach(s => {
        symptomTotals[s.id] = 0;
        symptomCounts[s.id] = 0;
    });
    
    // Store daily symptom values for charts
    let symptomDaily = {};
    symptomsConfig.forEach(s => {
        symptomDaily[s.id] = [];
    });
    
    // Iterate through each day
    for (let dayNum = -1; dayNum <= cycleDaysAfterChemo; dayNum++) {
        const currentDate = new Date(day0);
        currentDate.setDate(currentDate.getDate() + dayNum);
        const dk = formatDate(currentDate);
        
        // Only include days up to today
        if (currentDate > today) continue;
        
        const dayLabel = dayNum <= 0 ? 'Day ' + dayNum : 'Day +' + dayNum;
        const schedule = getEffectiveSchedule(dayNum);
        
        // Medication adherence
        if (schedule) {
            const tt = state.takenMeds[dk] || {};
            ['morning', 'afternoon', 'evening', 'bedtime'].forEach(period => {
                (schedule.medications[period] || []).forEach((med, idx) => {
                    const key = med.name + '|' + med.dose;
                    if (!medAdherence[key]) {
                        medAdherence[key] = { name: med.name, dose: med.dose, scheduled: 0, taken: 0 };
                    }
                    medAdherence[key].scheduled++;
                    totalScheduledMeds++;
                    
                    if (tt[period + '-' + idx]) {
                        medAdherence[key].taken++;
                        totalTakenMeds++;
                    }
                });
            });
        }
        
        // PRN usage
        const pt = state.prnTaken[dk] || {};
        Object.entries(pt).forEach(([medId, count]) => {
            if (count > 0 && prnUsage[medId]) {
                prnUsage[medId].total += count;
                prnUsage[medId].days.push(dayLabel);
            }
        });
        
        // Symptoms and vitals
        const daySymptoms = state.symptoms[dk] || {};
        
        if (daySymptoms.temperature) {
            const temp = parseFloat(daySymptoms.temperature);
            if (temp >= 38) {
                elevatedTempDays.push({ day: dayLabel, temp: temp });
            }
        }
        
        symptomsConfig.forEach(s => {
            const val = daySymptoms[s.id] || null;
            symptomDaily[s.id].push(val);
            if (val) {
                symptomTotals[s.id] += val;
                symptomCounts[s.id]++;
            }
        });
        
        // Weight
        if (state.weights[dk]) {
            weights.push({ day: dayLabel, weight: parseFloat(state.weights[dk]) });
        }
        
        // Notes
        if (state.notes[dk] && state.notes[dk].trim()) {
            allNotes.push({ day: dayLabel, content: state.notes[dk].trim() });
        }
        
        // Food
        if (state.food[dk] && state.food[dk].trim()) {
            allFood.push({ day: dayLabel, content: state.food[dk].trim() });
        }
        
        // Wins
        if (state.wins[dk] && state.wins[dk].trim()) {
            allWins.push({ day: dayLabel, content: state.wins[dk].trim() });
        }
    }
    
    // Calculate overall adherence
    const overallAdherence = totalScheduledMeds > 0 ? Math.round((totalTakenMeds / totalScheduledMeds) * 100) : 0;
    
    // Calculate weight change
    let weightChange = null;
    if (weights.length >= 2) {
        const firstWeight = weights[0].weight;
        const lastWeight = weights[weights.length - 1].weight;
        weightChange = {
            start: firstWeight,
            end: lastWeight,
            diff: (lastWeight - firstWeight).toFixed(1),
            pct: ((lastWeight - firstWeight) / firstWeight * 100).toFixed(1)
        };
    }
    
    // Build HTML
    let html = '<div class="pdf-report">';
    
    // Header
    html += '<div class="pdf-report-header">';
    html += '<div class="pdf-report-title">Day by Day – Cycle Summary</div>';
    html += '<div class="pdf-report-subtitle">' + patientName + '</div>';
    if (dobStr || state.patientHospitalNumber) {
        html += '<div class="pdf-report-patient-info">';
        if (dobStr) html += '<span>DOB: ' + dobStr + '</span>';
        if (state.patientHospitalNumber) html += '<span>Patient / Hospital Number: ' + state.patientHospitalNumber + '</span>';
        html += '</div>';
    }
    html += '<div class="pdf-report-meta">';
    html += '<span><strong>Cycle ' + state.selectedCycle + '</strong></span>';
    html += '<span>' + startDateStr + ' – ' + endDateStr + '</span>';
    html += '</div>';
    html += '</div>';
    
    // Overview
    html += '<div class="pdf-section">';
    html += '<div class="pdf-section-title">Overview</div>';
    html += '<div class="pdf-overview-grid">';
    html += '<div class="pdf-stat-card"><div class="pdf-stat-value">' + daysCompleted + ' / 21</div><div class="pdf-stat-label">Days Completed</div></div>';
    html += '<div class="pdf-stat-card"><div class="pdf-stat-value">' + overallAdherence + '%</div><div class="pdf-stat-label">Medication Adherence</div></div>';
    
    if (weightChange) {
        const sign = weightChange.diff > 0 ? '+' : '';
        html += '<div class="pdf-stat-card"><div class="pdf-stat-value">' + sign + weightChange.diff + ' kg</div><div class="pdf-stat-label">Weight Change (' + sign + weightChange.pct + '%)</div></div>';
    }
    
    html += '<div class="pdf-stat-card"><div class="pdf-stat-value">' + elevatedTempDays.length + '</div><div class="pdf-stat-label">Days with Temp ≥38°C</div></div>';
    html += '</div>';
    html += '</div>';
    
    // Temperature warnings
    if (elevatedTempDays.length > 0) {
        html += '<div class="pdf-warning">⚠️ Elevated temperature recorded on: ';
        html += elevatedTempDays.map(d => d.day + ' (' + d.temp + '°C)').join(', ');
        html += '</div>';
    }
    
    // Medication Adherence Table
    html += '<div class="pdf-section">';
    html += '<div class="pdf-section-title">Medication Adherence</div>';
    html += '<table class="pdf-table">';
    html += '<thead><tr><th>Medication</th><th>Dose</th><th>Adherence</th><th></th></tr></thead>';
    html += '<tbody>';

    // Sort medications alphabetically by name
    Object.values(medAdherence).sort((a, b) => a.name.localeCompare(b.name)).forEach(med => {
        const pct = med.scheduled > 0 ? Math.round((med.taken / med.scheduled) * 100) : 0;
        html += '<tr>';
        html += '<td>' + med.name + '</td>';
        html += '<td>' + med.dose + '</td>';
        html += '<td><div class="pdf-adherence-bar"><div class="pdf-adherence-fill" style="width:' + pct + '%"></div></div>' + pct + '%</td>';
        html += '<td>' + med.taken + '/' + med.scheduled + '</td>';
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    html += '</div>';
    
    // PRN Usage
    const usedPRN = Object.values(prnUsage).filter(p => p.total > 0);
    if (usedPRN.length > 0) {
        html += '<div class="pdf-section">';
        html += '<div class="pdf-section-title">As-Needed Medications Used</div>';
        html += '<table class="pdf-table">';
        html += '<thead><tr><th>Medication</th><th>Dose</th><th>Total Doses</th><th>Days Used</th></tr></thead>';
        html += '<tbody>';

        // Sort PRN medications alphabetically by name
        usedPRN.sort((a, b) => a.name.localeCompare(b.name)).forEach(med => {
            html += '<tr>';
            html += '<td>' + med.name + '</td>';
            html += '<td>' + med.dose + '</td>';
            html += '<td>' + med.total + '</td>';
            html += '<td>' + med.days.join(', ') + '</td>';
            html += '</tr>';
        });
        
        html += '</tbody></table>';
        html += '</div>';
    }
    
    // Symptom Trends with Charts
    html += '<div class="pdf-section">';
    html += '<div class="pdf-section-title">Symptom Trends</div>';
    
    // Helper function to generate SVG sparkline
    function generateSparkline(data, color) {
        const width = 200;
        const height = 40;
        const padding = 2;
        
        // Filter out nulls and get valid points
        const validPoints = [];
        data.forEach((val, idx) => {
            if (val !== null) {
                validPoints.push({ x: idx, y: val });
            }
        });
        
        if (validPoints.length < 2) {
            return '<svg width="' + width + '" height="' + height + '"><text x="' + (width/2) + '" y="' + (height/2 + 4) + '" text-anchor="middle" fill="#999" font-size="10">Not enough data</text></svg>';
        }
        
        const xScale = (width - padding * 2) / (data.length - 1);
        const yScale = (height - padding * 2) / 5;
        
        // Build path
        let pathD = '';
        let areaD = '';
        let firstPoint = true;
        let lastX = 0;
        
        validPoints.forEach((point, i) => {
            const x = padding + point.x * xScale;
            const y = height - padding - (point.y * yScale);
            
            if (firstPoint) {
                pathD = 'M ' + x + ' ' + y;
                areaD = 'M ' + x + ' ' + (height - padding) + ' L ' + x + ' ' + y;
                firstPoint = false;
            } else {
                pathD += ' L ' + x + ' ' + y;
                areaD += ' L ' + x + ' ' + y;
            }
            lastX = x;
        });
        
        areaD += ' L ' + lastX + ' ' + (height - padding) + ' Z';
        
        let svg = '<svg width="' + width + '" height="' + height + '" style="vertical-align:middle;">';
        // Grid lines
        for (let i = 1; i <= 5; i++) {
            const y = height - padding - (i * yScale);
            svg += '<line x1="' + padding + '" y1="' + y + '" x2="' + (width - padding) + '" y2="' + y + '" stroke="#f0f0f0" stroke-width="1"/>';
        }
        // Area fill
        svg += '<path d="' + areaD + '" fill="' + color + '" fill-opacity="0.15"/>';
        // Line
        svg += '<path d="' + pathD + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        // Points
        validPoints.forEach(point => {
            const x = padding + point.x * xScale;
            const y = height - padding - (point.y * yScale);
            svg += '<circle cx="' + x + '" cy="' + y + '" r="3" fill="' + color + '"/>';
        });
        svg += '</svg>';
        
        return svg;
    }
    
    symptomsConfig.forEach(s => {
        const avg = symptomCounts[s.id] > 0 ? (symptomTotals[s.id] / symptomCounts[s.id]).toFixed(1) : '–';
        const color = chartColors[s.id] || '#2a9d8f';
        const sparkline = generateSparkline(symptomDaily[s.id], color);
        
        html += '<div class="pdf-symptom-row" style="flex-wrap:wrap;gap:8px;">';
        html += '<div class="pdf-symptom-label" style="min-width:140px;">' + s.icon + ' ' + s.label + ' <span style="color:#5a5a72;">(avg: ' + avg + ')</span></div>';
        html += '<div style="flex:1;min-width:200px;">' + sparkline + '</div>';
        html += '</div>';
    });
    
    html += '</div>';
    
    // Notes
    if (allNotes.length > 0) {
        html += '<div class="pdf-section">';
        html += '<div class="pdf-section-title">Notes</div>';
        allNotes.forEach(note => {
            html += '<div class="pdf-notes-day">';
            html += '<div class="pdf-notes-day-title">' + note.day + '</div>';
            html += '<div class="pdf-notes-content">' + note.content.replace(/\n/g, '<br>') + '</div>';
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Food & Drink
    if (allFood.length > 0) {
        html += '<div class="pdf-section">';
        html += '<div class="pdf-section-title">Food & Drink</div>';
        allFood.forEach(item => {
            html += '<div class="pdf-notes-day">';
            html += '<div class="pdf-notes-day-title">' + item.day + '</div>';
            html += '<div class="pdf-notes-content">' + item.content.replace(/\n/g, '<br>') + '</div>';
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Wins
    if (allWins.length > 0) {
        html += '<div class="pdf-section">';
        html += '<div class="pdf-section-title">Wins & Positive Moments</div>';
        html += '<ul class="pdf-wins-list">';
        allWins.forEach(win => {
            html += '<li><span class="win-day">' + win.day + '</span><span>' + win.content + '</span></li>';
        });
        html += '</ul>';
        html += '</div>';
    }
    
    // Footer
    html += '<div class="pdf-footer">';
    html += 'Generated by Day by Day on ' + generatedDate + '<br>';
    html += 'This report is for informational purposes only and does not constitute medical advice.';
    html += '</div>';
    
    html += '</div>';
    
    // Build full HTML document for print
    let fullHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    fullHtml += '<title>Cycle ' + state.selectedCycle + ' Summary - ' + patientName + '</title>';
    fullHtml += '<style>';
    fullHtml += 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: white; color: #1a1a2e; padding: 20px; max-width: 800px; margin: 0 auto; }';
    fullHtml += '@media print { .no-print { display: none !important; } body { padding: 0; } @page { margin: 15mm; } }';
    fullHtml += '.print-bar { background: #2a9d8f; color: white; padding: 12px 20px; margin: -20px -20px 20px -20px; display: flex; justify-content: space-between; align-items: center; }';
    fullHtml += '.print-bar button { background: white; color: #2a9d8f; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; }';
    fullHtml += '.print-bar button:hover { background: #f0f0f0; }';
    fullHtml += '.pdf-report { font-size: 12px; line-height: 1.5; }';
    fullHtml += '.pdf-report-header { border-bottom: 2px solid #2a9d8f; padding-bottom: 12px; margin-bottom: 16px; }';
    fullHtml += '.pdf-report-title { font-size: 20px; font-weight: 600; margin: 0 0 2px 0; }';
    fullHtml += '.pdf-report-subtitle { font-size: 14px; color: #5a5a72; }';
    fullHtml += '.pdf-report-patient-info { display: flex; gap: 20px; margin-top: 4px; font-size: 11px; color: #5a5a72; }';
    fullHtml += '.pdf-report-meta { display: flex; gap: 20px; margin-top: 8px; font-size: 11px; color: #5a5a72; }';
    fullHtml += '.pdf-section { margin-bottom: 16px; }';
    fullHtml += '.pdf-section-title { font-size: 13px; font-weight: 600; color: #2a9d8f; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #e0e0e0; }';
    fullHtml += '.pdf-overview-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }';
    fullHtml += '.pdf-stat-card { background: #f5f5f7; border-radius: 6px; padding: 8px; }';
    fullHtml += '.pdf-stat-value { font-size: 16px; font-weight: 600; }';
    fullHtml += '.pdf-stat-label { font-size: 9px; color: #5a5a72; text-transform: uppercase; }';
    fullHtml += '.pdf-table { width: 100%; border-collapse: collapse; font-size: 11px; }';
    fullHtml += '.pdf-table th { text-align: left; padding: 6px; background: #f5f5f7; border-bottom: 1px solid #e0e0e0; font-weight: 600; }';
    fullHtml += '.pdf-table td { padding: 6px; border-bottom: 1px solid #f0f0f2; }';
    fullHtml += '.pdf-adherence-bar { display: inline-block; width: 50px; height: 6px; background: #e0e0e0; border-radius: 3px; margin-right: 6px; vertical-align: middle; }';
    fullHtml += '.pdf-adherence-fill { height: 100%; background: #10b981; border-radius: 3px; }';
    fullHtml += '.pdf-symptom-row { display: flex; align-items: center; padding: 4px 0; border-bottom: 1px solid #f0f0f2; }';
    fullHtml += '.pdf-symptom-label { flex: 1; font-size: 11px; }';
    fullHtml += '.pdf-symptom-bar { display: flex; gap: 2px; }';
    fullHtml += '.pdf-symptom-dot { width: 14px; height: 14px; border-radius: 3px; background: #e0e0e0; display: flex; align-items: center; justify-content: center; font-size: 8px; color: white; }';
    fullHtml += '.pdf-symptom-dot.level-1 { background: #10b981; }';
    fullHtml += '.pdf-symptom-dot.level-2 { background: #84cc16; }';
    fullHtml += '.pdf-symptom-dot.level-3 { background: #eab308; }';
    fullHtml += '.pdf-symptom-dot.level-4 { background: #f97316; }';
    fullHtml += '.pdf-symptom-dot.level-5 { background: #ef4444; }';
    fullHtml += '.pdf-notes-day { margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #f0f0f2; }';
    fullHtml += '.pdf-notes-day:last-child { border-bottom: none; }';
    fullHtml += '.pdf-notes-day-title { font-weight: 600; font-size: 11px; color: #2a9d8f; }';
    fullHtml += '.pdf-notes-content { font-size: 11px; }';
    fullHtml += '.pdf-wins-list { list-style: none; padding: 0; margin: 0; }';
    fullHtml += '.pdf-wins-list li { padding: 4px 0; border-bottom: 1px solid #f0f0f2; font-size: 11px; display: flex; gap: 8px; }';
    fullHtml += '.pdf-wins-list li:last-child { border-bottom: none; }';
    fullHtml += '.win-day { color: #2a9d8f; font-weight: 500; min-width: 50px; }';
    fullHtml += '.pdf-warning { background: #fef3c7; border-left: 3px solid #f59e0b; padding: 6px 10px; font-size: 11px; color: #92400e; margin: 8px 0; }';
    fullHtml += '.pdf-footer { margin-top: 16px; padding-top: 12px; border-top: 1px solid #e0e0e0; font-size: 9px; color: #8a8a9a; text-align: center; }';
    fullHtml += '</style></head><body>';
    fullHtml += '<div class="print-bar no-print"><span>Cycle Summary Report</span><button onclick="window.print()">🖨️ Print / Save as PDF</button></div>';
    fullHtml += html;
    fullHtml += '</body></html>';
    
    // Open in new window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(fullHtml);
        printWindow.document.close();
        showToast('Report opened - use Print to save as PDF');
    } else {
        showToast('Please allow popups to view the report');
    }
}

// Fallback quotes in case API fails
const fallbackQuotes = [
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "The human spirit is stronger than anything that can happen to it.", author: "C.C. Scott" },
    { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
    { text: "You never know how strong you are until being strong is the only choice you have.", author: "Bob Marley" },
    { text: "Every day may not be good, but there is something good in every day.", author: "Alice Morse Earle" },
    { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu" },
    { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "The only way out is through.", author: "Robert Frost" },
    { text: "When you come out of the storm, you won't be the same person who walked in.", author: "Haruki Murakami" },
    { text: "You have within you right now, everything you need to deal with whatever the world throws at you.", author: "Brian Tracy" },
    { text: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
    { text: "She stood in the storm, and when the wind did not blow her way, she adjusted her sails.", author: "Elizabeth Edwards" },
    { text: "One day at a time. One step at a time. One moment at a time.", author: "Unknown" },
    { text: "Stars can't shine without darkness.", author: "D.H. Sidebottom" }
];

async function loadDailyQuote() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    
    // Use date as seed for consistent daily quote
    const today = formatDate(new Date());
    const cached = localStorage.getItem('dailyQuote');
    
    if (cached) {
        try {
            const { date, quote } = JSON.parse(cached);
            if (date === today) {
                quoteText.textContent = quote.text;
                quoteAuthor.textContent = quote.author;
                return;
            }
        } catch(e) {}
    }
    
    // Try to fetch from API
    try {
        const response = await fetch('https://api.quotable.io/random?tags=inspirational|motivational|wisdom&maxLength=150');
        if (response.ok) {
            const data = await response.json();
            const quote = { text: data.content, author: data.author };
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author;
            localStorage.setItem('dailyQuote', JSON.stringify({ date: today, quote }));
            return;
        }
    } catch(e) {
        console.log('Quote API unavailable, using fallback');
    }
    
    // Use fallback quote based on date
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000*60*60*24));
    const quote = fallbackQuotes[dayOfYear % fallbackQuotes.length];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    localStorage.setItem('dailyQuote', JSON.stringify({ date: today, quote }));
}

function init() {
    loadState(); 
    state.selectedDate = new Date();
    
    // Auto-select current cycle
    const info = getCycleInfo(state.selectedDate);
    if (info) state.selectedCycle = info.cycle;
    
    renderAll();
    loadDailyQuote();
    
    
    // Check if there's a hash in the URL and switch to that view
    const hash = window.location.hash.replace('#', '');
    if (hash && ['today', 'calendar', 'settings'].includes(hash)) {
        switchView(hash);
    }
    document.querySelectorAll('.nav-tab, .bottom-nav-item').forEach(el => 
        el.addEventListener('click', () => switchView(el.dataset.view))
    );
    
    const nt = document.getElementById('notesTextarea'); 
    let st;
    nt.addEventListener('input', () => { 
        clearTimeout(st); 
        st = setTimeout(() => { 
            state.notes[formatDate(state.selectedDate)] = nt.value; 
            saveState(); 
        }, 500); 
    });
    
    
    const ft = document.getElementById('foodTextarea');
    let fst;
    ft.addEventListener('input', () => {
        clearTimeout(fst);
        fst = setTimeout(() => {
            state.food[formatDate(state.selectedDate)] = ft.value;
            saveState();
        }, 500);
    });

    const wt = document.getElementById('winTextarea');
    let wst;
    wt.addEventListener('input', () => {
        clearTimeout(wst);
        wst = setTimeout(() => {
            state.wins[formatDate(state.selectedDate)] = wt.value;
            saveState();
        }, 500);
    });
    
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('fileInput').click());
    document.getElementById('fileInput').addEventListener('change', e => { 
        if (e.target.files[0]) { 
            importData(e.target.files[0]); 
            e.target.value = ''; 
        } 
    });
    document.getElementById('clearTrackingBtn').addEventListener('click', clearTrackingData);
    document.getElementById('resetAllBtn').addEventListener('click', resetAllData);
    document.getElementById('savePatientBtn').addEventListener('click', savePatientDetails);
    document.getElementById('saveEmergencyBtn').addEventListener('click', saveEmergencyContacts);
    document.getElementById('saveCycleConfigurationBtn').addEventListener('click', saveCycleConfiguration);
    document.getElementById('saveCycleDatesBtn').addEventListener('click', saveCycleDates);
    document.getElementById('sendSummaryBtn').addEventListener('click', sendDailySummary);
    document.getElementById('downloadCyclePdfBtn').addEventListener('click', generateCycleSummaryPDF);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('showMessagesToggle').addEventListener('click', toggleShowMessages);
    
    // Collapsible sections
    document.querySelectorAll('.section-header-collapsible').forEach(header => {
        header.addEventListener('click', () => toggleSection(header.dataset.section));
    });
    applyCollapsedSections();
    
    // Colour picker
    document.querySelectorAll('.colour-option').forEach(opt => {
        opt.addEventListener('click', () => setAccentColour(opt.dataset.colour));
    });
    
    // Medication modal
    document.getElementById('addMedicationBtn').addEventListener('click', () => showMedicationModal());
    document.getElementById('resetMedicationsBtn').addEventListener('click', resetMedications);
    document.getElementById('medModalCancel').addEventListener('click', hideMedicationModal);
    document.getElementById('medModalSave').addEventListener('click', saveMedication);
    document.getElementById('medModal').addEventListener('click', (e) => {
        if (e.target.id === 'medModal') hideMedicationModal();
    });

    // Touch gesture navigation (swipe left/right to navigate days)
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const SWIPE_THRESHOLD = 50; // Minimum distance in pixels for swipe
    const SWIPE_MAX_VERTICAL = 30; // Maximum vertical movement to still count as swipe

    function handleSwipe() {
        const diffX = touchEndX - touchStartX;
        const diffY = Math.abs(touchEndY - touchStartY);

        // Ignore if too much vertical movement (user is scrolling)
        if (diffY > SWIPE_MAX_VERTICAL) return;

        // Ignore if swipe too short
        if (Math.abs(diffX) < SWIPE_THRESHOLD) return;

        if (diffX > 0) {
            // Swipe right - go to previous day
            navigateDays(-1);
        } else {
            // Swipe left - go to next day
            navigateDays(1);
        }
    }

    function navigateDays(direction) {
        const newDate = new Date(state.selectedDate);
        newDate.setDate(newDate.getDate() + direction);

        // Don't navigate beyond reasonable bounds
        const today = new Date();
        const maxFutureDate = new Date(today);
        maxFutureDate.setDate(maxFutureDate.getDate() + 60);

        // Check if the date has an associated cycle
        const info = getCycleInfo(newDate);
        if (!info.cycle || newDate > maxFutureDate) {
            showToast("Can't navigate to that date");
            return;
        }

        state.selectedDate = newDate;
        saveState();
        renderAll();
        updateProgress();

        // Show toast feedback
        const dayInfo = getDaySchedule(newDate);
        const dateStr = newDate.toLocaleDateString('en-IE', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
        showToast(`${dayInfo.label} • ${dateStr}`);
    }

    // Add touch listeners to today view
    const todayView = document.getElementById('todayView');
    todayView.addEventListener('touchstart', (e) => {
        // Don't interfere with text input/selection
        if (e.target.matches('textarea, input, button, a')) return;

        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    todayView.addEventListener('touchend', (e) => {
        // Don't interfere with text input/selection
        if (e.target.matches('textarea, input, button, a')) return;

        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    // Back to Today button
    document.getElementById('backToTodayBtn').addEventListener('click', () => {
        state.selectedDate = new Date();
        saveState();
        renderAll();
        updateProgress();
        showToast('Back to today');
    });
}

document.addEventListener('DOMContentLoaded', init);
