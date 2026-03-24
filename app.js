document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("app").style.display = "none";
  document.getElementById("finalScreen").style.display = "none";
});

import teams from "./data.js";

// STATE
let currentTeam = 0;
let userName = "";
let selections = [];
let selectedPlayers = [];
let currentFilter = "ALL";
let impactPlayer = null;
let captain = null;
let viceCaptain = null;
let teamData = {};
let isSingleTeamMode = false;

// BUTTONS

function goToBuilder() {
  userName = document.getElementById("username").value;

  if (!userName) {
    showToast("Enter your name");
    return;
  }

  // 🔥 RESET EVERYTHING
  currentTeam = 0;
  teamData = {};
  selections = [];

  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("app").style.display = "block";

  loadTeam();
}





function start() {
  userName = document.getElementById("username").value;

  if (!userName) return showToast("Enter name");

  document.getElementById("nameScreen").style.display = "none";
  document.getElementById("app").style.display = "block";

  loadTeam();
}

function loadTeam() {
  closeSkipModal();

  selectedPlayers = [];
  impactPlayer = null;
  captain = null;
  viceCaptain = null;

  // 🔥 APPLY TEAM CLASS TO MODAL ALSO
  const modal = document.getElementById("captainModal");
  modal.className = ""; // reset safely
  modal.classList.add("captain-modal"); // keep base class if any
  modal.classList.add(teams[currentTeam].name.toLowerCase());

  console.log("CURRENT TEAM INDEX:", currentTeam);

  document.getElementById("bottomBar").style.display = "flex";

  document.getElementById("impactSelect").value = "";

  // ✅ USE APP INSTEAD OF BODY
  const app = document.getElementById("app");

  // reset previous theme
  app.className = "";
  app.style.background = "";

  // apply team class
  app.classList.add(teams[currentTeam].name.toLowerCase());

  console.log("Loading team:", teams[currentTeam].name);
  document.getElementById("teamName").innerText =
    `${teams[currentTeam].name} • ${userName}'s XI`;
  console.log("BG PATH:", teams[currentTeam].bg);

  // 🔥 LOAD SAVED STATE
  let saved = teamData[teams[currentTeam].name];

  if (saved) {
    selectedPlayers = saved.players || [];
    impactPlayer = saved.impact || null;
    captain = saved.captain || null;
  } else {
    selectedPlayers = [];
    impactPlayer = null;
    captain = null;
    viceCaptain = null;
  }

  // ✅ BACKGROUND ON APP (NOT BODY)
  app.style.background = `
    linear-gradient(rgba(2,6,23,0.4), rgba(2,6,23,0.6)),
    url('${teams[currentTeam].bg}')
  `;
  app.style.backgroundSize = "cover";
  app.style.backgroundPosition = "center";

  // 🔥 LOGO ANIMATION
  let logo = document.getElementById("teamLogo");
  if (logo) {
    logo.src = teams[currentTeam].logo || "";

    logo.style.opacity = "0";
    logo.style.transform = "scale(0.8)";

    setTimeout(() => {
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 100);
  }

  renderPlayers();
  renderSelected();
  populateImpactDropdown();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function prevTeam() {
  if (currentTeam === 0) return;

  // ✅ SAVE CURRENT TEAM FIRST
  teamData[teams[currentTeam].name] = {
    players: [...selectedPlayers],
    impact: impactPlayer ? { ...impactPlayer } : null,
    captain
  };
  // ✅ GO BACK
  currentTeam--;

  loadTeam();
}

window.prevTeam = prevTeam;

// 🎯 FILTER
function setFilter(filter, e) {
  currentFilter = filter;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (e) e.target.classList.add("active");

  renderPlayers(); 

}

// 🧠 FILTER LOGIC
function filterPlayers(players) {
  if (currentFilter === "ALL") return players;

  return players.filter(p => {
    if (currentFilter === "BAT") return p.role.includes("Bat");
    if (currentFilter === "BOWL") return p.role.includes("Pacer") || p.role.includes("Spinner");
    if (currentFilter === "AR") return p.role.includes("All");
    if (currentFilter === "WK") return p.role.includes("WK");
  });
}

// 🎨 RENDER LEFT SIDE
function renderPlayers() {
  let team = teams[currentTeam];
  let players = filterPlayers(team.players);

  document.getElementById("teamName").innerText = team.name;

  let html = "";

  players.forEach(p => {
    const isSelected = selectedPlayers.find(sp => sp.name === p.name);

    html += `
      <div class="player-card ${isSelected ? 'selected' : ''}" onclick="togglePlayer('${p.name}')">

        <div style="position:relative;">
          <img src="${p.img}" class="player-img">

          ${p.overseas ? `
            <span style="
              position:absolute;
              top:-6px;
              right:-6px;
              background:#0f172a;
              border-radius:50%;
              padding:2px;
              font-size:10px;
            ">✈️</span>
          ` : ""}
        </div>

        <b>${p.name}</b>
        <small>${p.role}</small>

      </div>
    `;
  });

  document.getElementById("players").innerHTML = html;
}


// ➕ ADD / REMOVE PLAYER
function togglePlayer(name) {

  let index = selectedPlayers.findIndex(p => p.name === name);

  if (index !== -1) {
    selectedPlayers.splice(index, 1);
  } else {
    if (selectedPlayers.length >= 11) {
      showToast("Max 11 players!");
      return;
    }

    let team = teams[currentTeam];
    let player = team.players.find(p => p.name === name);
    // 🚫 CHECK FOREIGN LIMIT
    if ((player.overseas === true) && countOverseas(selectedPlayers) >= 4) {
      showToast("Only 4 overseas players allowed!");
      return;
    }

    selectedPlayers.push(player);
    // ❌ If player becomes part of 11 → remove as impact
    if (impactPlayer && impactPlayer.name === name) {
      impactPlayer = null;
    }

  }

  renderSelected();
  renderPlayers();
  populateImpactDropdown(); // 🔥 IMPORTANT
}
// 🎯 RIGHT PANEL
function renderSelected() {

  let container = document.getElementById("selectedPlayers");

  if (selectedPlayers.length === 0) {
    container.innerHTML = `<p style="color:#64748b;">No players selected</p>`;
    return;
  }

  let html = "";

  selectedPlayers.forEach((p, i) => {
    html += `
      <div class="selected-player">
        <b>
          ${i + 1}. ${p.name}
          ${captain === p.name ? " 🧢" : ""}
        </b>
      </div>
    `;
  });

  // ✅ ADD CAPTAIN + IMPACT HERE (ONLY ON UI)
  html += `
    <div style="margin-top:10px; border-top:1px solid #334155; padding-top:10px;">
      <div><b>🧢 Captain:</b> ${captain || "-"}</div>
      <div><b>💥 Impact:</b> ${impactPlayer?.name || "-"}</div>
    </div>
  `;

  container.innerHTML = html;

  document.querySelector(".right-panel h3").innerText =
    `Your Team (${selectedPlayers.length}/11)`;
}

let dragIndex;

function drag(event, index) {
  dragIndex = index;
}

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    console.error("Toast element missing");
    return;
  }

  toast.innerText = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event, index) {
  let temp = selectedPlayers[dragIndex];
  selectedPlayers[dragIndex] = selectedPlayers[index];
  selectedPlayers[index] = temp;

  renderSelected();
}

// NEXT TEAM
function nextTeam() {

  if (selectedPlayers.length !== 11) {
    showToast("Pick 11 players");
    return;
  }

  if (!impactPlayer) {
    showToast("Select impact player");
    return;
  }

  openCaptainModal(); // same for both modes
}



function finishAllTeams() {

  console.log("🔥 FINAL DATA:", teamData);

  // hide builder + home
  document.getElementById("app").style.display = "none";
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("bottomBar").style.display = "none";

  // show final screen
  const final = document.getElementById("finalScreen");
  final.style.display = "block";

  const restartBtn = document.getElementById("restartBtn");

  if (isSingleTeamMode) {
    restartBtn.style.display = "none";
  } else {
    restartBtn.style.display = "inline-block";
  }

  // small delay so transition triggers
  setTimeout(() => {
    final.classList.add("active");
  }, 10);

  const name = userName || "Your";
  document.getElementById("finalTitle").innerText =
    `${userName}'s Final XI 🔥`;

  // optional blur
  document.getElementById("app").classList.add("blur");

  const container = document.getElementById("allTeamsContainer");
  container.innerHTML = "";

  // loop all teams
  const teamsToShow = isSingleTeamMode
    ? [teams.find(t => teamData[t.name])]
    : teams;
  teamsToShow.forEach(team => {

    const data = teamData[team.name];

    let playersHTML = "";

    if (data && data.players) {
      data.players.forEach((p, i) => {
        playersHTML += `<div>${i + 1}. ${p.name}</div>`;
      });
    } else {
      playersHTML = "<div>No players</div>";
    }

    container.innerHTML += `
      <div class="team-card">
        <h3>${team.name}</h3>
        <img src="${team.logo}" width="40">

        ${playersHTML}

        <div style="margin-top:10px;">
          🧢 Captain: <b>${data?.captain || "-"}</b><br>
          💥 Impact: <b>${data?.impact?.name || "-"}</b>
        </div>
      </div>
    `;
  });

}


function openCaptainModal() {
  closeSkipModal();
  let modal = document.getElementById("captainModal");
  let grid = document.getElementById("captainGrid");
  let impactBox = document.getElementById("impactDisplay");

  document.getElementById("bottomBar").style.display = "none";
  document.getElementById("confirmBtn").disabled = true;

  // 🔥 HIDE LOGO
  document.getElementById("teamLogo").style.opacity = "0";

  // 🔥 RESET INLINE STYLE (so CSS works)
  const modalBox = document.querySelector("#captainModal .modal-box");
  modalBox.style.background = "";

  grid.innerHTML = "";
  impactBox.innerHTML = "";

  selectedPlayers.forEach(p => {
    grid.innerHTML += `
      <div class="captain-option player-card" onclick="selectCaptain(event, '${p.name}')">
    
        <div class="captain-img-wrap">
          <img src="${p.img}" class="player-img captain-face">
          <img src="${teams[currentTeam].logo}" class="captain-logo">
        </div>

          <div class="captain-name">
            ${p.name}
            <span class="captain-badge"></span>
          </div>

      </div>
    `;
  });

  // ✅ FIXED BLOCK (inside function)
  if (impactPlayer) {
    impactBox.innerHTML = `
      <div style="
        display:flex;
        align-items:center;
        gap:10px;
        padding:8px 12px;
        background:#1e293b;
        border-radius:10px;
        border:1px solid #334155;
        opacity:0.9;
      ">
      
        <img src="${impactPlayer.img}" style="
          width:35px;
          height:35px;
          object-fit:contain;
        ">

        <div>
          <small style="color:#94a3b8;">Impact Player</small><br>
          <b>${impactPlayer.name}</b>
        </div>

      </div>
    `;
  } else {
    impactBox.innerHTML = `<p style="color:#94a3b8;">No Impact Player</p>`;
  }

  modal.style.display = "flex";
}

function morphLogoToCaptain(targetElement) {
  const logo = document.getElementById("teamLogo");
  const morph = document.getElementById("logoMorph");

  morph.src = logo.src;

  const logoRect = logo.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // start position
  morph.style.top = logoRect.top + "px";
  morph.style.left = logoRect.left + "px";
  morph.style.width = logoRect.width + "px";
  morph.style.opacity = "1";
  morph.style.transform = "rotate(0deg) scale(1)";

  logo.style.opacity = "0";

  // 🔥 MOVE + ROTATE
  setTimeout(() => {
    morph.style.top = targetRect.top + "px";
    morph.style.left = targetRect.left + "px";
    morph.style.width = "55px";

    morph.style.opacity = "0.9";
    morph.style.transform = "rotate(10deg) scale(0.7)";
  }, 50);

  // 🔥 RESET + FADE OUT
  setTimeout(() => {
    morph.style.opacity = "0";
    morph.style.transform = "rotate(0deg) scale(0.5)";
  }, 500);
}

function selectCaptain(event, name) {
  captain = name;

  document.getElementById("confirmBtn").disabled = false;

  // ❌ remove old temporary selection
  document.querySelectorAll("#captainGrid .captain-option").forEach(el => {
    el.classList.remove("selected");
  });

  // ❌ remove old final highlight (THIS IS YOUR BUG FIX)
  document.querySelectorAll("#captainGrid .captain-option").forEach(el => {
    el.classList.remove("captain-final");
  });

  const el = event.currentTarget;

  // ✅ temporary animation state
  el.classList.add("selected");

  // 🔥 morph animation
  morphLogoToCaptain(el);

  // ✅ after animation → make it final captain
  setTimeout(() => {
    el.classList.remove("selected");
    el.classList.add("captain-final");
  }, 600);

  document.getElementById("confirmBtn").disabled = false;
}

function confirmCaptain() {
  if (!captain) {
    showToast("Select Captain");
    return;
  }

  const teamName = teams[currentTeam].name;

  if (isSingleTeamMode) {

    const teamName = teams[currentTeam].name;

  // 🔥 SAVE DATA FIRST
    teamData[teamName] = {
      players: [...selectedPlayers],
      impact: impactPlayer ? { ...impactPlayer } : null,
      captain: captain,
      skipped: false
    };

    document.getElementById("captainModal").style.display = "none";
    finishAllTeams();
    return;
  }

  // ✅ SAVE FIRST
  teamData[teamName] = {
    players: [...selectedPlayers],
    impact: impactPlayer ? { ...impactPlayer } : null,
    captain: captain,
    skipped: false
  };

  selections.push({
    team: teamName,
    players: selectedPlayers.map(p => p.name),
    impact: impactPlayer.name,
    captain
  });

  document.getElementById("captainModal").style.display = "none";

  // ✅ THEN MOVE
  currentTeam++;

  if (currentTeam < teams.length) {
    loadTeam();
  } else {
    finishAllTeams();
  }

  document.getElementById("bottomBar").style.display = "flex";
}

function closeCaptainModal() {
  document.getElementById("captainModal").style.display = "none";

  if (!isSingleTeamMode) {
    document.getElementById("bottomBar").style.display = "flex";
  }

  // bring logo back
  document.getElementById("teamLogo").style.opacity = "1";
}

function skipTeam() {

  openSkipModal();

}

function openSkipModal() {
  document.getElementById("captainModal").style.display = "none";
  document.getElementById("skipModal").style.display = "flex";
}

function closeSkipModal() {
  document.getElementById("skipModal").style.display = "none";

  
}


window.restartApp = function () {
  currentTeam = 0;
  teamData = {};
  selectedPlayers = [];
  impactPlayer = null;
  captain = null;

  document.getElementById("finalScreen").style.display = "none";
  document.getElementById("app").style.display = "block";

  loadTeam();
};

function confirmSkip() {

  closeSkipModal(); // hide modal first

  // ✅ SAVE EMPTY STATE
  teamData[teams[currentTeam].name] = {
    players: [...selectedPlayers],
    impact: impactPlayer,
    captain: captain,
    skipped: true
  };

  selections.push({
    team: teams[currentTeam].name,
    skipped: true
  });

  currentTeam++;

  if (currentTeam < teams.length) {
    loadTeam();
  } else {
    finishAllTeams();
  }
}


function validateTeam(players) {
  let wk = 0, bat = 0, ar = 0, bowl = 0;

  players.forEach(p => {
    if (p.role.includes("WK")) wk++;
    else if (p.role.includes("Bat")) bat++;
    else if (p.role.includes("All")) ar++;
    else if (p.role.includes("Pacer") || p.role.includes("Spinner")) bowl++;
  });

  if (wk < 1 || wk > 4) return "Need 1-4 Wicketkeepers";
  if (bat < 3 || bat > 6) return "Need 3-6 Batters";
  if (ar < 1 || ar > 4) return "Need 1-4 Allrounders";
  if (bowl < 3 || bowl > 6) return "Need 3-6 Bowlers";

  return null;
}

function setImpact(name) {
  let team = teams[currentTeam];
  let player = team.players.find(p => p.name === name);

  // count current overseas in XI
  let overseasCount = countOverseas(selectedPlayers);

  // 🚫 block if impact also breaks rule
  if (player.overseas && overseasCount >= 4) {
  showToast("Impact player exceeds overseas limit!");

  // 🔥 RESET DROPDOWN UI
  document.getElementById("impactSelect").value = "";

  console.log("IMPACT CLICKED:", name);

  return;

}

  if (!name) {
    impactPlayer = null;
    return;
  }

  // ❌ BLOCK if already in 11
  if (selectedPlayers.find(p => p.name === name)) {
  showToast("Impact player cannot be in Playing 11");

  document.getElementById("impactSelect").value = "";

  return;
}

  impactPlayer = team.players.find(p => p.name === name);
  renderSelected(); // refresh UI
  console.log("Impact:", impactPlayer);
}

function setCaptain(name) {
  if (viceCaptain === name) {
    showToast("Captain and Vice Captain cannot be same");
    return;
  }

  captain = name;
}


function countOverseas(players) {
  return players.filter(p => p.overseas === true).length;
}

function clearSelection() {
  selectedPlayers = [];
  impactPlayer = null;
  captain = null;
  viceCaptain = null;

  renderPlayers();
  renderSelected();
}

function populateImpactDropdown() {
  let select = document.getElementById("impactSelect");

  select.innerHTML = `<option value="">Select Impact</option>`;

  let team = teams[currentTeam];

  team.players.forEach(p => {

    // ❌ skip players already in XI
    if (selectedPlayers.find(sp => sp.name === p.name)) return;

    select.innerHTML += `
      <option value="${p.name}">
        ${p.name}
      </option>
    `;
  });

  // ✅ keep previous selection (when going back)
  if (impactPlayer) {
    select.value = impactPlayer.name;
  }
}

function downloadTeamImage() {

  if (!captain) {
    showToast("Select captain first!");
    return;
  }

  const element = document.getElementById("downloadCard");

  // ✅ HEADER
  document.getElementById("downloadHeader").innerHTML = `
    <div style="text-align:center; margin-top:20px;">
      <img src="${teams[currentTeam].logo}" style="
      width:60px;
      display:block;
      margin:0 auto 10px auto;
      ">
      <h2 style="margin:0;">${teams[currentTeam].name}</h2>
    </div>
  `;

  // ✅ LIST
  let listHTML = "";

  selectedPlayers.forEach((p, i) => {
    listHTML += `
      <div style="
        background:#1e293b;
        padding:10px;
        border-radius:10px;
        margin-bottom:8px;
      ">
        ${i + 1}. ${p.name} ${p.name === captain ? " 🧢" : ""}
      </div>
    `;
  });

  listHTML += `
    <div style="margin-top:15px; border-top:1px solid #334155; padding-top:10px;">
      <div><b>🧢 Captain:</b> ${captain}</div>
      <div><b>💥 Impact:</b> ${impactPlayer?.name || "-"}</div>
    </div>
  `;

  document.getElementById("downloadList").innerHTML = listHTML;

  setTimeout(() => {
    html2canvas(element, {
      backgroundColor: "#020617",
      scale: 2
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = `${teams[currentTeam].name}_XI.png`;
      link.href = canvas.toDataURL();
      link.click();

      showToast("Downloaded!");
    });
  }, 100);

}

window.startAllTeams = function () {

  userName = document.getElementById("username").value.trim();

  if (!userName) {
    showToast("Enter your name first 👀");
    document.getElementById("username").focus();
    return;
  }

  document.getElementById("teamSelector").style.display = "none";

  isSingleTeamMode = false;
  currentTeam = 0;
  teamData = {};

  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("bottomBar").style.display = "flex";

  loadTeam();
};

window.showTeamSelector = function () {
  document.getElementById("teamSelector").style.display = "block";

  const container = document.getElementById("teamList");
  container.innerHTML = "";

  teams.forEach(team => {
    container.innerHTML += `
      <div class="team-pill" onclick="startSingleTeam('${team.name}')">
        <img src="${team.logo}" />
        <span>${team.name}</span>
      </div>
    `;
    
  });
};

window.startSingleTeam = function (teamName) {

  userName = document.getElementById("username").value.trim();

  if (!userName) {
    showToast("Enter your name first 👀");
    document.getElementById("username").focus();
    return;
  }

  document.getElementById("teamSelector").style.display = "none";


  isSingleTeamMode = true;
  currentTeam = teams.findIndex(t => t.name === teamName);

  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("bottomBar").style.display = "flex";

  loadTeam();
};

window.goHome = function () {
  document.getElementById("app").style.display = "none";
  document.getElementById("finalScreen").style.display = "none";
  document.getElementById("homeScreen").style.display = "flex";

  document.getElementById("bottomBar").style.display = "none";
  document.getElementById("teamSelector").style.display = "none";

  // reset state
  currentTeam = 0;
  teamData = {};
  selectedPlayers = [];
  impactPlayer = null;
  captain = null;
  isSingleTeamMode = false;

  // 🔥 scroll reset
  window.scrollTo(0, 0);
  // 🔥 RESET APP BACKGROUND
  const app = document.getElementById("app");
  app.className = "";
  app.style.background = "";
};


function downloadFinalImage() {
  const element = document.getElementById("finalDownloadArea");

  html2canvas(element, {
    backgroundColor: "#020617",
    scale: 2
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "All_Teams_XI.png";
    link.href = canvas.toDataURL();
    link.click();

    showToast("Downloaded All Teams!");
  });
}


const logo = document.querySelector(".app-logo");

if (logo) {
  logo.addEventListener("dblclick", () => {
    showToast("Built by Sriram Rakshith 🚀");
  });
}


window.drag = drag;
window.drop = drop;
window.allowDrop = allowDrop;
window.nextTeam = nextTeam;
window.clearSelection = clearSelection;
window.goToBuilder = goToBuilder;
window.scrollTo({ top: 0, behavior: "smooth" });

window.selectCaptain = selectCaptain;
window.confirmCaptain = confirmCaptain;
window.skipTeam = skipTeam;
window.setFilter = setFilter;
window.togglePlayer = togglePlayer;
window.drag = drag;
window.drop = drop;
window.allowDrop = allowDrop;
window.nextTeam = nextTeam;
window.clearSelection = clearSelection;
window.goToBuilder = goToBuilder;
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("impactSelect").addEventListener("change", (e) => {
    setImpact(e.target.value);
  });

  document.getElementById("bottomBar").style.display = "none";
});
window.closeCaptainModal = closeCaptainModal;
window.showToast = showToast;
window.downloadTeamImage = downloadTeamImage;
window.confirmSkip = confirmSkip;
window.openSkipModal = openSkipModal;
window.closeSkipModal = closeSkipModal;
window.teamData = teamData;
window.downloadFinalImage = downloadFinalImage;