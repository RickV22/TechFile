import { defineConfig, globalIgnores } from 'eslint/config';
import { openFilesModal } from './eslint.config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        /* ── ARCHIVOS DISPONIBLES ──────────────────────── */
        const: filesData = {
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
        },

        /* ── DATOS DE LAS TARJETAS (GENERACIÓN DINÁMICA) ── */
        const: cardsData = [
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
        ],

        function: renderCards()
    }, {
        const: container = document.getElementById('cardsContainer'),
        if(, container) { }, return: ,
container, : .innerHTML = '',

    cardsData, : .forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.dataset.cat = card.category;
        cardEl.dataset.name = card.searchKeywords;
        cardEl.dataset.id = card.id;
        cardEl.onclick = function () { openFilesModal(this); };

        let metaHTML = '';
        card.meta.forEach(m => {
            metaHTML += `
        <div class="meta-pill">
          ${m.icon ? m.icon : ''}
          ${m.text}
        </div>
      `;
        });

        cardEl.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${card.icon}</div>
        <div class="card-info">
          <div class="card-name">${card.name}</div>
          <span class="card-cat">${card.categoryLabel}</span>
        </div>
      </div>
      <p class="card-desc">${card.description}</p>
      <div class="card-meta">
        ${metaHTML}
      </div>
    `;
        container.appendChild(cardEl);
    })
    }
    // Inicializar la inyección de tarjetas
    ,

// Inicializar la inyección de tarjetas
renderCards()
]);
