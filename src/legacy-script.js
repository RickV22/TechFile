
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', function (e) {
  const nav = document.getElementById('navLinks');
  const burger = document.getElementById('burger');
  if (nav && burger && nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

/* TOAST */
let toastTimer;

export function showToast(msg) {
  const toast = document.getElementById('toast');
  if(!toast) return;
  document.getElementById('toastMsg').textContent = msg || 'Descarga iniciada';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* MODAL ARCHIVOS */
export function openFilesModal(cardElement) {
  const fileId = cardElement.dataset.id;
  const cardName = cardElement.querySelector('.card-name').textContent;
  const files = window.filesData ? window.filesData[fileId] : [];

  document.getElementById('modalTitle').textContent = cardName;

  const modalFiles = document.getElementById('modalFiles');
  modalFiles.innerHTML = '';

  if (!files || files.length === 0) {
    modalFiles.innerHTML = '<p style="color: var(--text-sub); text-align: center; padding: 40px 20px;">No hay archivos disponibles</p>';
  } else if (fileId === 'ubuntu-iso') {
    // Tratamiento especial para Linux
    const isoFile = files.find(f => !f.type || f.type !== 'distribution');
    const distributions = files.filter(f => f.type === 'distribution');

    // Agregar archivo ISO de Ubuntu
    if (isoFile) {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.innerHTML = `
        <div class="file-info">
          <div class="file-name">${isoFile.name}</div>
          <div class="file-size">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            ${isoFile.size}
          </div>
        </div>
        <a class="btn-dl-modal" href="${isoFile.url}" target="_blank" onclick="showToast('Descarga iniciada: ${isoFile.name}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      `;
      modalFiles.appendChild(fileItem);
    }

    // Agregar mensaje y botones de distribuciones
    if (distributions.length > 0) {
      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = 'padding: 20px 16px; text-align: center; border-top: 1px solid var(--border);';
      messageDiv.innerHTML = `
        <p style="color: var(--text-sub); font-size: 0.9rem; margin-bottom: 16px; line-height: 1.5;">
          Como hay demaciadas distribuciones disponibles, aquí te dejo los enlaces para que elijas la que más te guste.
        </p>
      `;
      modalFiles.appendChild(messageDiv);

      // Agregar botones de distribuciones
      const buttonsContainer = document.createElement('div');
      buttonsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; padding: 0 16px 16px;';

      distributions.forEach(dist => {
        const btn = document.createElement('a');
        btn.className = 'btn-distro';
        btn.href = dist.url;
        btn.target = '_blank';
        btn.textContent = dist.name;
        btn.style.cssText = `
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          background: var(--accent);
          color: #000;
          border: none;
          border-radius: var(--radius-sm);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
        `;
        btn.onmouseover = function () {
          this.style.opacity = '0.9';
          this.style.boxShadow = '0 0 20px var(--accent)55';
          this.style.transform = 'scale(1.05)';
        };
        btn.onmouseout = function () {
          this.style.opacity = '1';
          this.style.boxShadow = 'none';
          this.style.transform = 'scale(1)';
        };
        buttonsContainer.appendChild(btn);
      });

      modalFiles.appendChild(buttonsContainer);
    }
  } else if (fileId === 'drivers-pack') {
    // Tratamiento especial para Drivers
    const driverPack = files.find(f => !f.type || f.type !== 'manufacturer');
    const manufacturers = files.filter(f => f.type === 'manufacturer');

    // Agregar driver pack
    if (driverPack) {
      const fileItem = document.createElement('div');
      fileItem.className = 'file-item';
      fileItem.innerHTML = `
        <div class="file-info">
          <div class="file-name">${driverPack.name}</div>
          <div class="file-size">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            ${driverPack.size}
          </div>
        </div>
        <a class="btn-dl-modal" href="${driverPack.url}" target="_blank" onclick="showToast('Descarga iniciada: ${driverPack.name}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      `;
      modalFiles.appendChild(fileItem);
    }

    // Agregar mensaje y botones de fabricantes
    if (manufacturers.length > 0) {
      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = 'padding: 20px 16px; text-align: center; border-top: 1px solid var(--border);';
      messageDiv.innerHTML = `
        <p style="color: var(--text-sub); font-size: 0.9rem; margin-bottom: 16px; line-height: 1.5;">
          También puedes descargar drivers directamente del sitio oficial de cada fabricante:
        </p>
      `;
      modalFiles.appendChild(messageDiv);

      // Agregar botones de fabricantes
      const buttonsContainer = document.createElement('div');
      buttonsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; padding: 0 16px 16px;';

      manufacturers.forEach(mfr => {
        const btn = document.createElement('a');
        btn.className = 'btn-mfr';
        btn.href = mfr.url;
        btn.target = '_blank';
        btn.textContent = mfr.name;
        btn.style.cssText = `
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          background: var(--accent);
          color: #000;
          border: none;
          border-radius: var(--radius-sm);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
        `;
        btn.onmouseover = function () {
          this.style.opacity = '0.9';
          this.style.boxShadow = '0 0 20px var(--accent)55';
          this.style.transform = 'scale(1.05)';
        };
        btn.onmouseout = function () {
          this.style.opacity = '1';
          this.style.boxShadow = 'none';
          this.style.transform = 'scale(1)';
        };
        buttonsContainer.appendChild(btn);
      });

      modalFiles.appendChild(buttonsContainer);
    }
  } else {
    // Tratamiento normal para otros archivos
    if (files) {
      files.forEach((file, idx) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
          <div class="file-info">
            <div class="file-name">${file.name}</div>
            <div class="file-size">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              ${file.size}
            </div>
          </div>
          <a class="btn-dl-modal" href="${file.url}" target="_blank" onclick="showToast('Descarga iniciada: ${file.name}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        `;
        modalFiles.appendChild(fileItem);
      });
    }
  }

  document.getElementById('filesModal').classList.add('show');
}

export function closeFilesModal() {
  document.getElementById('filesModal').classList.remove('show');
}

export function openContactModal(e) {
  if (e) e.preventDefault();
  document.getElementById('contactModal').classList.add('show');
}

export function closeContactModal() {
  document.getElementById('contactModal').classList.remove('show');
}

export function sendSuggestion() {
  const name = document.getElementById('suggestName').value.trim();
  const email = document.getElementById('suggestEmail').value.trim();
  const msg = document.getElementById('suggestMsg').value.trim();
  if (!msg) { showToast('Escribe una sugerencia antes de enviar'); return; }

  const to = 'valienter69@gmail.com';
  let body = '';
  if (name) body += `Nombre: ${name}\n`;
  if (email) body += `Correo: ${email}\n`;
  body += `\n${msg}`;

  const mailto = `mailto:${to}?subject=${encodeURIComponent('Sugerencia TechFile')}&body=${encodeURIComponent(body)}`;
  showToast('Abriendo cliente de correo...');
  window.location.href = mailto;
  closeContactModal();
}

// Cierra el modal al presionar ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { closeFilesModal(); closeContactModal(); }
});

/* SEARCH + FILTER */
let currentCat = 'todos';

export function filterCards() {
  const searchInput = document.getElementById('searchInput');
  if(!searchInput) return;
  const query = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.card');
  let visible = 0;

  cards.forEach(card => {
    const name = card.dataset.name || '';
    const cat = card.dataset.cat || '';
    const matchSearch = !query || name.includes(query);
    const matchCat = currentCat === 'todos' || cat === currentCat;

    if (matchSearch && matchCat) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });

  const empty = document.getElementById('emptyState');
  document.getElementById('searchTerm').textContent = query;
  if(empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

export function filterTab(el, cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentCat = cat;
  filterCards();
}

/* SEARCH: Enter key  */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if(searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') filterCards();
    });
  }
});

/* ACTIVE NAV LINK on scroll */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-link');
      }
    });
  }, { passive: true });
});
