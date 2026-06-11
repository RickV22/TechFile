import { useState, useEffect } from "react";
import "./App.css";

const filesData = {
  'windows-iso': [
    { name: 'Windows 11 varias ediciones', size: '7.6 GB', url: 'https://software.download.prss.microsoft.com/dbazure/Win11_25H2_Spanish_Mexico_x64_v2.iso?t=013b56c1-244d-43c2-80f4-f25716aa04b9&P1=1779654823&P2=602&P3=2&P4=duxUxw1B3hz3Xq7eM%2bBqsn0xGFcxjdL6AdbtU8jcl0F1JUceTAosQPFYg5dkcBzRo67ou83I0XGmQSnMMzq6Hm6Rnlf%2f6iqrxirYA6%2bwCV0VmMJQOyrILk%2b04ROOtjj25TUKEKlbYFMRqz078PxX%2fZHrJCfcSP0IKvzCIhnNmZWQCIjfQ7LCY4qiqSBoco6DCTTkEpSgmSunpNIt3D6MUnLiPviuZZYdqWPXqX9fWDvoXKaR4TTbfUVNiDQOoOUiv6ui5djhs69I22oLaiNlezk3pIlqc6dnLva8S4hjD%2flj9mQxerit6C3EZ7MkotWJYCR7WCaCgwB4LpgGcibwZw%3d%3d' },
    { name: 'Windows 11 enterprise_ltsc_2024_x64', size: '4.8 GB', url: 'https://fafda.to/d/t3wgmn5p49ir?v=c_ckuYnQhDxfSd5KnYNtid8u_HB3Od5ERwj7sJQkkW_Y4J2ZbBYuzKeFFsP8y6Gm19zigQy_EHgr_E7RoMVDZUXLKXqh3OJK0O0Kgydj5qWpUb_lwoveptAEwvFRR7PNnNeiA7Kxx1-vUXLnRumgC20Oema56SdMsSYXN_2NlUoRQirv4tenJLQgGYJmrJWlVUs1fHrLtdPbt_qTBBJpidhYDGLdOyp44PSmdg1lr3XX1oM85ujB-uitiRY820AwrFYUKhsQpQ' },
    { name: 'TomexOS11', size: '2.4 GB', url: 'https://download2391.mediafire.com/3ub0owh623cgQytemVvzsVnS8eWnh_oTTYFfcooRhoTMlfbNAOAleRKPzTjHXW2h8XsY9uFg-5PXxmot5tF8K6EsJAz0lndcv4oicZKfNwFcAiWnYAbxAY9KeVx2jAk-78OYFgjXbarJgJBZFZ3W3Za8ym3I6nB7VgwJfDtAnoBoeQ/it4vvtdlxexi7xz/TomexOS+11+24H2+V1.0.iso' },
    { name: 'Windows 10 varias ediciones', size: '5.4 GB', url: 'https://software.download.prss.microsoft.com/dbazure/Win10_22H2_Spanish_Mexico_x64v1.iso?t=6f9059e4-0c19-459b-ae57-dbb9d6bec5ef&P1=1779651501&P2=602&P3=2&P4=Iwf%2fu5iv8a6J9hKtMATMHrXZmdO0FX9LqFj6xRwRPm4AD0YNZUfRlY0hO5QvUdmRxhqviTA6MxkqXByV8BifcxSimwa%2f4jcDNuwNzVqJb0rFOjuVFIsk4wEzQepjuF9NsPJcsMUV5HWJNYsJlgRG7pDTlarIgsf9S9lhCmG0vdtPalrUu%2ftKsQ0LnRAtQ8sRm7NjIK8DNsegthqCWmL%2bwW6bQAA3ZBWj7VaDJkPFe4GOWEm8S53xdzRWBZVG0KtC11SLdIXQViO2R%2bNJtA6PI1TgWZW3GpM8An6bm0daYTxVoHh6qGXxNCnVPWrael2FuQnkuyCdI%2fT6pc7lZoG0HQ%3d%3d' },
    { name: 'Windows 11 Winter OS Rev.12', size: '4.8 GB', url: 'https://archive.org/download/rev-12v-23-h-2-w-11/Rev12v23H2W11.iso' },
    { name: 'Windows Server 2025 ISO', size: '7.6 GB', url: 'https://go.microsoft.com/fwlink/?linkid=2345734&clcid=0x409&culture=en-us&country=us' }
  ],
  'techtool': [
    { name: 'RDriveImage7.exe', size: '128 MB', url: 'https://www.drive-image.com/downloads/RDriveImage7.exe' },
    { name: 'Rufus', size: '820 MB', url: 'https://github.com/pbatard/rufus/releases/download/v4.14/rufus-4.14.exe' },
    { name: 'Ventoy', size: '15.94 MB', url: 'https://download1474.mediafire.com/lht0u0jrxr5gHl3dXkuqX_X3Z5Zf4UFHVxVhdGSQmPbAfbtNNf7m8atpDxJUgAQMNEPoKHnpu43-4jgy4FVbOvfZt6izH1ajDvY-123Gf4vDzYn3a7Lkifag37FltLUz8NBqreZrnfwKwrRom2qtTq2gowUiCJ_U5EcrOOB85l-NLQ/a6nrsgd0mzfvvyx/ventoy-1.1.12-windows.zip' },
    { name: 'Activador de windows y office', size: '316 B', url: 'https://download1528.mediafire.com/8uvawua5wufgsx-5iWCCtHXa1U-NWVDpmuBolAPqjYLJdJupy1SZY2ftEAvo4cIxwhP3zRePuCPGLl689mDfAG4lzsaPzoJngTfhnKfxNEfeJPeDJqbeQLPXtfO8bnzzspQwEPmtRLNu_ghWD8a7sz3GNcn-sIdP2Ca57-QWCxiTng/g7jh9m2ndz91krh/Activaci%C3%B3n-instalacion_win_office.txt' }
  ],
  'drivers-pack': [
    { name: 'Drivers Pack 2024 Q4', size: '9.2 MB', url: 'https://cdn.pchelpsoft.com/SimpleLink/Driver_Updater_setup.exe?_gl=1*1jviryk*_up*MQ..*_ga*MTE4NzM1NTYwNi4xNzc5NTcxMDI5*_ga_T9M0PYG550*czE3Nzk1NzEwMjgkbzEkZzAkdDE3Nzk1NzEwMjgkajYwJGwwJGgyODU2MTA0NDY.' },
    { type: 'manufacturer', name: 'NVIDIA', url: 'https://www.nvidia.com/es-la/drivers/' },
    { type: 'manufacturer', name: 'AMD Radeon', url: 'https://www.amd.com/es/support/download/drivers.html' },
    { type: 'manufacturer', name: 'Intel', url: 'https://www.intel.la/content/www/xl/es/support/detect.html' },
    { type: 'manufacturer', name: 'Realtek Audio', url: 'https://www.realtek.com/Download/List?cate_id=593&menu_id=298' },
    { type: 'manufacturer', name: 'Realtek Network', url: 'https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet' },
    { type: 'manufacturer', name: 'TP-Link WiFi', url: 'https://www.tp-link.com/us/support/download/#type=Wireless_Adapter' },
    { type: 'manufacturer', name: 'ASUS Support', url: 'https://www.asus.com/support/download-center/' },
    { type: 'manufacturer', name: 'Gigabyte Support', url: 'https://www.gigabyte.com/mx/support/download' },
    { type: 'manufacturer', name: 'MSI Support', url: 'https://www.msi.com/support/download' },
    { type: 'manufacturer', name: 'ASRock Support', url: 'https://www.asrock.com/support/index.asp' },
    { type: 'manufacturer', name: 'Razer Support', url: 'https://support.razer.com/' },
    { type: 'manufacturer', name: 'Logitech Support', url: 'https://www.realtek.com/Download/List?cate_id=593&menu_id=298' }
  ],
  'Herramientas': [
    { name: 'MSI AfterBurner', size: '45 MB', url: 'https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1779693832~acl=/*~hmac=142cb9f24b58207ee8919ddfc37fd2f39c29b7fb20a115d92089160f13a1b291&_gl=1*413qgj*_up*MQ..*_ga*MTYwMTAzMTI0MS4xNzc5NTczMTE2*_ga_2FQZ8W9D09*czE3Nzk1NzMxMTMkbzEkZzAkdDE3Nzk1NzMxMTMkajYwJGwwJGgxMjU3OTIwNTM3' },
    { name: 'CleanMaster 6.0', size: '2.3 MB', url: 'https://download1326.mediafire.com/rlhgksfp0b4gGcQtKqXjOjskmq6djjjTWPK9TrYUgelC9i8ZTsKRMObpPXdQQLVowkNGvOzgUmCe_rpGdlRyLpo5PFZtyElfoRrh46Jh0yrKqvOP8LPftQmI7wCorKYiNKmsz2L0SeB-eydXtXSC43jLlzjtzw_uFkReaxvgaq5IRA/yaabdrezhgpu33e/clean-master-6.0-installer.exe' },
    { name: 'CPU-Z ', size: '3.5 MB', url: 'https://download.cpuid.com/cpu-z/cpu-z_2.20-en.exe' },
    { name: 'GPU-Z v2.69.0', size: '11.3 MB', url: 'https://download1649.mediafire.com/8o0b7x3e1ddgZDbbNwPGj_-PQqo5zO2HDezAxGIbRsFvRXMN7zrR8fubO0vzJB2si4mBvansOC-Vx0gLw41PExA88z7OjYUoQeGIu8Pw0eIGSlUCSjsVCwIPDRuqTBiL4GebYb39tATa6rSM8pBTHeorAdon9SLp3fR6-c42cr_45A/uiu0z7gfoo9irj5/GPU-Z.2.69.0.exe' },
    { name: 'HWMonitor Pro v1.50', size: '2.9 MB', url: 'https://download.cpuid.com/hwmonitor/hwmonitor_1.63.exe' },
    { name: 'CrystalDiskInfo v9.5', size: '5.9 MB', url: 'https://download938.mediafire.com/phx62sci92qg6YP2GleIlFoNlezQnK-BlZuEMY6qio1ljg6cSSo79mReAmXjZhMU0qqsis0V0xEVsCylQo-zO7N9iMu6ozHjAqV1eIPaJI7Taboo2-d7Dnkiik9HB0VBQU3Lf6hQcH77ERYHECaNznmikati3S_j6YqWx0-P3Yma5Q/zm90exu7kfpld4g/CrystalDiskInfo9_9_1.exe' },
    { name: 'CrystalDiskMark v9.0.3', size: '4.31 MB', url: 'https://download1472.mediafire.com/5a0go1x83jtgv9SHJpiiDQRa917e1Gwtu17oZ5V6Ejihjv6-d-cs6o2QC2PX29wS_7Id37bx4Lw8_aD_A9ljNgOD7tnaaAc-lC18nM1VuARc5udNecuLEsFFgXoNa2g24_dV84UyOoJ3Qd8CINyGlMcu__qX4y_UGJbDTqpvzc0hSw/2lu5mrqrwd6b75d/CrystalDiskMark9_0_3.exe' }
  ],
  'cleanmaster': [
    { name: 'MSI AfterBurner', size: '45 MB', url: 'https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1779693832~acl=/*~hmac=142cb9f24b58207ee8919ddfc37fd2f39c29b7fb20a115d92089160f13a1b291&_gl=1*413qgj*_up*MQ..*_ga*MTYwMTAzMTI0MS4xNzc5NTczMTE2*_ga_2FQZ8W9D09*czE3Nzk1NzMxMTMkbzEkZzAkdDE3Nzk1NzMxMTMkajYwJGwwJGgxMjU3OTIwNTM3' },
    { name: 'CleanMaster 6.0', size: '2.3 MB', url: 'https://download1326.mediafire.com/rlhgksfp0b4gGcQtKqXjOjskmq6djjjTWPK9TrYUgelC9i8ZTsKRMObpPXdQQLVowkNGvOzgUmCe_rpGdlRyLpo5PFZtyElfoRrh46Jh0yrKqvOP8LPftQmI7wCorKYiNKmsz2L0SeB-eydXtXSC43jLlzjtzw_uFkReaxvgaq5IRA/yaabdrezhgpu33e/clean-master-6.0-installer.exe' },
    { name: 'CPU-Z ', size: '3.5 MB', url: 'https://download.cpuid.com/cpu-z/cpu-z_2.20-en.exe' },
    { name: 'GPU-Z v2.69.0', size: '11.3 MB', url: 'https://download1649.mediafire.com/8o0b7x3e1ddgZDbbNwPGj_-PQqo5zO2HDezAxGIbRsFvRXMN7zrR8fubO0vzJB2si4mBvansOC-Vx0gLw41PExA88z7OjYUoQeGIu8Pw0eIGSlUCSjsVCwIPDRuqTBiL4GebYb39tATa6rSM8pBTHeorAdon9SLp3fR6-c42cr_45A/uiu0z7gfoo9irj5/GPU-Z.2.69.0.exe' },
    { name: 'HWMonitor Pro v1.50', size: '2.9 MB', url: 'https://download.cpuid.com/hwmonitor/hwmonitor_1.63.exe' },
    { name: 'CrystalDiskInfo v9.5', size: '5.9 MB', url: 'https://download938.mediafire.com/5qc79fr1qrngIy3eALWK9nEwyOaNhylJyKJnCqy8DtJAZxYh0slotLywTBNs5JPak26qjN0iCL0x1cADSLCXQl8KBLTT6OnHcxMTIccLOEzDTqs-sPoMLahIM7j1Y3fGrtGKep93Xt8Le2Gyge6H4kwsNdKLI5Kik2JXC-0xDDLhnQ/zm90exu7kfpld4g/CrystalDiskInfo9_9_1.exe' },
    { name: 'CrystalDiskMark v9.0.3', size: '4.31 MB', url: 'https://download1472.mediafire.com/5a0go1x83jtgv9SHJpiiDQRa917e1Gwtu17oZ5V6Ejihjv6-d-cs6o2QC2PX29wS_7Id37bx4Lw8_aD_A9ljNgOD7tnaaAc-lC18nM1VuARc5udNecuLEsFFgXoNa2g24_dV84UyOoJ3Qd8CINyGlMcu__qX4y_UGJbDTqpvzc0hSw/2lu5mrqrwd6b75d/CrystalDiskMark9_0_3.exe' }
  ],
  'office-suite': [
    { name: 'Microsoft Office 2019  Español -Ingles.rar', size: '4.2 GB', url: 'https://download1474.mediafire.com/ovu7xfwhaorgGielzSyw8D4nLhYZ-fG4N274SECvuGhk7npFy48xd0wAeU6pOkGP2sZmDzgIrOLoZviuMjM5u0H6oAgZq4I90IYOenjtiOAslOz-CoREw2dEpCPhE9lXYryl38BPyxhzp6pT6FfQvQaLWWNIeETuTlZtyt8gmTEgEQ/l4a3zh1kl29984p/Microsoft+Office+2019++Espa%C3%B1ol+-Ingles.rar' }
  ],
  'ubuntu-iso': [
    { name: 'Ubuntu 26.04 desktop-amd64.iso', size: '6.1 GB', url: 'https://releases.ubuntu.com/26.04/ubuntu-26.04-desktop-amd64.iso?_gl=1*efop6s*_gcl_au*Njk2ODkwNTg0LjE3Nzk1Njg3MTA.' },
    { type: 'distribution', name: 'Fedora', url: 'https://getfedora.org/es/workstation/download/' },
    { type: 'distribution', name: 'Debian', url: 'https://www.debian.org/distrib/index.es.html' },
    { type: 'distribution', name: 'Linux Mint', url: 'https://www.linuxmint.com/download.php' },
    { type: 'distribution', name: 'Manjaro', url: 'https://manjaro.org/download/' },
    { type: 'distribution', name: 'Pop!_OS', url: 'https://system76.com/pop/download/' },
    { type: 'distribution', name: 'Zorin OS', url: 'https://zorin.com/os/download/' },
    { type: 'distribution', name: 'Elementary OS', url: 'https://elementary.io/' },
    { type: 'distribution', name: 'Kali Linux', url: 'https://www.kali.org/get-kali/' },
    { type: 'distribution', name: 'MX Linux', url: 'https://mxlinux.org/download/' },
    { type: 'distribution', name: 'Linux Lite', url: 'https://www.linuxliteos.com/download.php' },
    { type: 'distribution', name: 'CentOS', url: 'https://www.centos.org/download/' },
    { type: 'distribution', name: 'AlmaLinux', url: 'https://almalinux.org/es/download/' },
    { type: 'distribution', name: 'Rocky Linux', url: 'https://rockylinux.org/download/' },
    { type: 'distribution', name: 'Arch Linux', url: 'https://archlinux.org/download/' },
    { type: 'distribution', name: 'openSUSE', url: 'https://www.opensuse.org/' },
    { type: 'distribution', name: 'SteamOS', url: 'https://www.steampowered.com/steamos/' },
    { type: 'distribution', name: 'Nobara', url: 'https://nobaraproject.org/' },
    { type: 'distribution', name: 'Garuda Linux', url: 'https://garudalinux.org/' },
    { type: 'distribution', name: 'ChimeraOS', url: 'https://chimeraos.org/' },
    { type: 'distribution', name: 'CachyOS', url: 'https://cachyos.org/' },
    { type: 'distribution', name: 'Bazzite', url: 'https://bazzite.gg/' },
    { type: 'distribution', name: 'PikaOS', url: 'https://wiki.pika-os.com/en/home' }
  ]
};

const cardsData = [
  {
    id: 'windows-iso',
    name: 'Windows ISO',
    icon: '🪟',
    category: 'sistema',
    categoryLabel: 'Sistema',
    searchKeywords: 'windows 11 iso',
    description: 'Aqui encontrarás varias imagenes iso de windows. Instalación limpia compatible con UEFI y TPM 2.0.',
    meta: [
      { text: 'Windows 11', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
      { text: '2026', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' }
    ]
  },
  {
    id: 'techtool',
    name: 'TechTool',
    icon: '🛠️',
    category: 'software',
    categoryLabel: 'Software',
    searchKeywords: 'techtool installer',
    description: 'Herramientas de instalación y activación.',
    meta: [
      { text: 'Win', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
      { text: 'v1', icon: '' }
    ]
  },
  {
    id: 'drivers-pack',
    name: 'DriversTool',
    icon: '⚙️',
    category: 'drivers',
    categoryLabel: 'Drivers',
    searchKeywords: 'drivers pack universal',
    description: 'Herramienta para ver controladores que faltan.',
    meta: [
      { text: 'Win / Mac / Linux', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/></svg>' },
      { text: '2026 v1', icon: '' }
    ]
  },
  {
    id: 'Herramientas',
    name: 'Herramientas',
    icon: '🛠️',
    category: 'herramientas',
    categoryLabel: 'Utilidades',
    searchKeywords: 'herramientas',
    description: 'Herramientas esenciales de diagnóstico y mantenimiento.',
    meta: [
      { text: 'Windows', icon: '' },
      { text: 'v1', icon: '' }
    ]
  },
  {
    id: 'office-suite',
    name: 'Microsoft Office',
    icon: '📊',
    category: 'software',
    categoryLabel: 'Software',
    searchKeywords: 'office 2024 suite microsoft',
    description: 'Paquete completo de productividad con Word, Excel, PowerPoint y Outlook.',
    meta: [
      { text: 'Win', icon: '' },
      { text: '2024', icon: '' }
    ]
  },
  {
    id: 'ubuntu-iso',
    name: 'Linux',
    icon: '🐧',
    category: 'sistema',
    categoryLabel: 'Sistema',
    searchKeywords: 'ubuntu linux iso 24.04',
    description: 'Aqui encontraras diversas distribuciones de Linux.',
    meta: [
      { text: 'Linux', icon: '' },
      { text: 'v1', icon: '' }
    ]
  }
];

function App() {
  // ESTADOS DE LA UI 
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  
  // Búsqueda y Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCat, setCurrentCat] = useState('todos');

  // Modales y Toast
  const [toast, setToast] = useState({ show: false, msg: '' });
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [filesModalData, setFilesModalData] = useState({ open: false, title: '', fileId: null });

  // ── LÓGICA DE FILTRADO
  const filteredCards = cardsData.filter(card => {
    // Buscar en searchKeywords en lugar del name
    const matchSearch = card.searchKeywords.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = currentCat === 'todos' || card.category === currentCat;
    return matchSearch && matchCat;
  });

  // ── EFECTOS (Scroll para Menú Activo)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'descargas', 'acerca'];
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // MANEJADORES DE EVENTOS
  const toggleNav = () => setNavOpen(!navOpen);
  
  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const openFilesModal = (card) => {
    setFilesModalData({ open: true, title: card.name, fileId: card.id });
  };
  const closeFilesModal = () => setFilesModalData({ ...filesModalData, open: false });

  const sendSuggestion = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.suggestName.value.trim();
    const email = form.suggestEmail.value.trim();
    const msg = form.suggestMsg.value.trim();

    if (!msg) { showToast('Escribe una sugerencia antes de enviar'); return; }

    const to = 'valienter69@gmail.com';
    let body = '';
    if (name) body += `Nombre: ${name}\n`;
    if (email) body += `Correo: ${email}\n`;
    body += `\n${msg}`;

    const mailto = `mailto:${to}?subject=${encodeURIComponent('Sugerencia TechFile')}&body=${encodeURIComponent(body)}`;
    showToast('Abriendo cliente de correo...');
    window.location.href = mailto;
    setContactModalOpen(false);
  };

  // RENDERIZADO CONDICIONAL DE MODALES 
  const renderModalFiles = () => {
    const { fileId } = filesModalData;
    const files = filesData[fileId] || [];

    if (files.length === 0) {
      return <p style={{ color: "var(--text-sub)", textAlign: "center", padding: "40px 20px" }}>No hay archivos disponibles</p>;
    }

    if (fileId === 'ubuntu-iso') {
      const isoFile = files.find(f => !f.type || f.type !== 'distribution');
      const distributions = files.filter(f => f.type === 'distribution');

      return (
        <>
          {isoFile && (
            <div className="file-item">
              <div className="file-info">
                <div className="file-name">{isoFile.name}</div>
                <div className="file-size">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {isoFile.size}
                </div>
              </div>
              <a className="btn-dl-modal" href={isoFile.url} target="_blank" rel="noreferrer" onClick={() => showToast(`Descarga iniciada: ${isoFile.name}`)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          )}
          {distributions.length > 0 && (
            <>
              <div style={{ padding: "20px 16px", textAlign: "center", borderTop: "1px solid var(--border)" }}>
                <p style={{ color: "var(--text-sub)", fontSize: "0.9rem", marginBottom: "16px", lineHeight: 1.5 }}>
                  Como hay demaciadas distribuciones disponibles, aquí te dejo los enlaces para que elijas la que más te guste.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", padding: "0 16px 16px" }}>
                {distributions.map((dist, idx) => (
                  <a
                    key={idx}
                    className="btn-distro"
                    href={dist.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 16px",
                      background: "var(--accent)",
                      color: "#000",
                      border: "none",
                      borderRadius: "var(--radius-sm)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      transition: "opacity 0.2s, box-shadow 0.2s, transform 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '0.9';
                      e.currentTarget.style.boxShadow = '0 0 20px var(--accent)55';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {dist.name}
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      );
    }

    if (fileId === 'drivers-pack') {
      const driverPack = files.find(f => !f.type || f.type !== 'manufacturer');
      const manufacturers = files.filter(f => f.type === 'manufacturer');

      return (
        <>
          {driverPack && (
            <div className="file-item">
              <div className="file-info">
                <div className="file-name">{driverPack.name}</div>
                <div className="file-size">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {driverPack.size}
                </div>
              </div>
              <a className="btn-dl-modal" href={driverPack.url} target="_blank" rel="noreferrer" onClick={() => showToast(`Descarga iniciada: ${driverPack.name}`)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          )}
          {manufacturers.length > 0 && (
            <>
              <div style={{ padding: "20px 16px", textAlign: "center", borderTop: "1px solid var(--border)" }}>
                <p style={{ color: "var(--text-sub)", fontSize: "0.9rem", marginBottom: "16px", lineHeight: 1.5 }}>
                  También puedes descargar drivers directamente del sitio oficial de cada fabricante:
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px", padding: "0 16px 16px" }}>
                {manufacturers.map((mfr, idx) => (
                  <a
                    key={idx}
                    className="btn-mfr"
                    href={mfr.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 16px",
                      background: "var(--accent)",
                      color: "#000",
                      border: "none",
                      borderRadius: "var(--radius-sm)",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      transition: "opacity 0.2s, box-shadow 0.2s, transform 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '0.9';
                      e.currentTarget.style.boxShadow = '0 0 20px var(--accent)55';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {mfr.name}
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      );
    }

    return files.map((file, idx) => (
      <div className="file-item" key={idx}>
        <div className="file-info">
          <div className="file-name">{file.name}</div>
          {file.size && (
            <div className="file-size">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {file.size}
            </div>
          )}
        </div>
        <a className="btn-dl-modal" href={file.url} target="_blank" rel="noreferrer" onClick={() => showToast(`Descarga iniciada: ${file.name}`)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>
      </div>
    ));
  };

  return (
    <>
      <nav>
        <a className="logo" href="#">
          <span className="logo-dot"></span>
          TechFile
        </a>
        <ul className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#inicio" className={activeSection === 'inicio' ? 'active-link' : ''} onClick={() => setNavOpen(false)}>Inicio</a></li>
          <li><a href="#descargas" className={activeSection === 'descargas' ? 'active-link' : ''} onClick={() => setNavOpen(false)}>Descargas</a></li>
          <li><a href="#acerca" className={activeSection === 'acerca' ? 'active-link' : ''} onClick={() => setNavOpen(false)}>Acerca de</a></li>
          <li><a className="btn-nav" href="#descargas" onClick={() => setNavOpen(false)}>Explorar</a></li>
        </ul>
        <div className="burger" id="burger" onClick={toggleNav}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        <div className="hero-badge">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3" fill="currentColor" />
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity=".4" />
          </svg>
          Portal Activo · v1.1
        </div>

        <h1>Tech<span className="accent">File</span></h1>
        <p className="hero-sub">Centro de descargas rápidas y directas.</p>
        <p className="hero-desc">Encuentra archivos, programas y recursos organizados con enlaces de descarga directa.</p>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">15+</div>
            <div className="stat-label">Archivos</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Directo</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <div className="stat-num">0</div>
            <div className="stat-label">Anuncios</div>
          </div>
        </div>
      </section>

      <div className="search-section" id="descargas">
        <div className="search-wrap">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            className="search-input" 
            type="text" 
            placeholder="Buscar archivos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>

      <div className="strip">
        <div className="strip-item">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
          <div><div className="strip-val">Enlace Directo</div><div className="strip-label">Sin redirects molestos</div></div>
        </div>
        <div className="strip-item">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div><div className="strip-val">Verificados</div><div className="strip-label">Archivos comprobados (por mi)</div></div>
        </div>
        <div className="strip-item">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
            </svg>
          </div>
          <div><div className="strip-val">Alta Velocidad</div><div className="strip-label"></div></div>
        </div>
        <div className="strip-item">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div><div className="strip-val">Multi Plataforma</div><div className="strip-label">Windows · Linux</div></div>
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <div>
            <h2 className="section-title">Archivos <span>Disponibles</span></h2>
            <p className="section-sub">Selecciona y descarga directamente desde Google Drive</p>
          </div>
        </div>

        <div className="filter-tabs">
          {['todos', 'sistema', 'drivers', 'software', 'herramientas'].map(cat => (
            <button 
              key={cat}
              className={`tab ${currentCat === cat ? 'active' : ''}`} 
              onClick={() => setCurrentCat(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="cards">
          {filteredCards.map(card => (
            <div className="card" key={card.id} onClick={() => openFilesModal(card)}>
              <div className="card-top">
                <div className="card-icon">{card.icon}</div>
                <div className="card-info">
                  <div className="card-name">{card.name}</div>
                  <div className="card-cat">{card.categoryLabel}</div>
                </div>
              </div>
              <div className="card-desc">{card.description}</div>
              <div className="card-meta">
                {card.meta.map((m, i) => (
                  <div className="meta-pill" key={i}>
                    {m.icon && <span dangerouslySetInnerHTML={{ __html: m.icon }} />}
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🔍</div>
            <p style={{ color: "var(--text-sub)", fontSize: "0.9rem" }}>
              No se encontraron archivos para "{searchTerm}"
            </p>
          </div>
        )}
      </section>

      <section className="section" id="acerca" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 680, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "40px 36px" }}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>Acerca de <span>TechFile</span></h2>
          <p style={{ color: "var(--text-sub)", fontWeight: 300, lineHeight: 1.75, fontSize: "0.92rem" }}>
            TechFile es un portal de descargas diseñado para ofrecer acceso rápido y directo a archivos, programas y recursos de software. Todos los archivos están hospedados en la nube para garantizar velocidad y disponibilidad. Sin anuncios, sin redirects. Solo descarga directa.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ padding: "8px 16px", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.78rem", color: "var(--text-sub)" }}>✅ Sin anuncios</div>
            <div style={{ padding: "8px 16px", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.78rem", color: "var(--text-sub)" }}>⚡ Descarga directa</div>
            <div style={{ padding: "8px 16px", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", fontSize: "0.78rem", color: "var(--text-sub)" }}>🔒 Archivos verificados</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Tech<span>File</span></div>
        <p className="footer-copy">© TechFile 2026 — Todos los derechos reservados</p>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#descargas">Descargas</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setContactModalOpen(true); }}>Contacto</a>
        </div>
      </footer>

      {/* TOAST */}
      <div className={`toast ${toast.show ? 'show' : ''}`}>
        <div className="toast-dot"></div>
        <span>{toast.msg}</span>
      </div>

      {/* MODAL ARCHIVOS */}
      <div className={`modal ${filesModalData.open ? 'show' : ''}`}>
        <div className="modal-overlay" onClick={closeFilesModal}></div>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{filesModalData.title}</h2>
            <button className="modal-close" onClick={closeFilesModal}>×</button>
          </div>
          <div className="modal-files">
            {renderModalFiles()}
          </div>
        </div>
      </div>

      {/* MODAL CONTACTO */}
      <div className={`modal ${contactModalOpen ? 'show' : ''}`}>
        <div className="modal-overlay" onClick={() => setContactModalOpen(false)}></div>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Contacto / Sugerencia</h2>
            <button className="modal-close" onClick={() => setContactModalOpen(false)}>×</button>
          </div>
          <div className="modal-files" style={{ padding: 16 }}>
            <form onSubmit={sendSuggestion}>
              <p style={{ color: "var(--text-sub)", marginBottom: 12 }}>Envía una sugerencia o comentario al contacto:</p>
              <input name="suggestName" type="text" placeholder="Tu nombre (opcional)" style={{ width: "100%", padding: 10, marginBottom: 10, background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8 }} />
              <input name="suggestEmail" type="email" placeholder="Tu correo (opcional)" style={{ width: "100%", padding: 10, marginBottom: 10, background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8 }} />
              <textarea name="suggestMsg" required placeholder="Escribe tu sugerencia..." style={{ width: "100%", minHeight: 120, padding: 10, background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8 }}></textarea>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <button type="submit" className="btn-dl">Enviar sugerencia</button>
                <button type="button" onClick={() => setContactModalOpen(false)} className="btn-dl" style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text-sub)" }}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
