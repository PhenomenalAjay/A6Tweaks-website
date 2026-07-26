# A6Tweaks

<p align="center">
  <img src="./assets/A6Tweaks.png" alt="A6Tweaks Logo" width="120"/>
</p>

<p align="center">
  <strong>Windows PC Optimization Tool</strong><br>
  <em>Boost performance, clean up clutter, and tweak your system — all from one desktop app.</em>
</p>

<p align="center">
  <b>Windows 10</b> &nbsp;|&nbsp; <b>Windows 11</b>
</p>

---

## Overview

A6Tweaks is an **Electron.js** desktop application that helps you optimize Windows PCs for better performance. It offers a clean, user-friendly interface to apply system tweaks, delete temporary files, manage power settings, disable background services, and much more.

The app works in **two modes**:
- **Basic mode** — No token required. Covers general, memory, and performance optimizations.
- **Pro Tweaks (Advanced) mode** — Requires a GitHub personal access token. Unlocks advanced registry-based tweaks for deeper system customization.

---

## Features

### 🔧 General Optimization
- Delete temporary files (system `Temp` and user `%temp%` directories)
- Delete user temporary files (`%temp%`)
- Run Disk Cleanup utility (`cleanmgr.exe`)
- Disable Windows Update services *(with caution)*

### 🧠 Memory Optimization
| Feature               | Win 10 | Win 11 |
|-----------------------|:------:|:------:|
| Disable startup apps  | ✅     | ✅     |
| Turn off transparency | ✅     | ✅     |
| Disable background apps | ✅   | ✅     |
| Turn off animations   | ❌     | ✅     |
| Core Isolation / Memory Integrity | ❌ | ✅ |
| Disable Recall        | ❌     | ✅     |

### ⚡ Performance Boost
- Apply **Ultimate Performance** power plan
- Enable **Game Mode**
- Disable **Game Bar** (background recording / overlay)
- Turn off privacy features (advertising ID, tailored experiences)
- Adjust for **best performance** (visual effects)
- Turn off all notifications

### 🛠️ Advanced Tweaks *(Pro mode only)*
Apply registry tweaks to fine-tune your system:

1. **CPU Priority.reg**
2. **FPS Boost.reg**
3. **FPS Optimization.reg**
4. **FreeUp CPU Usage.reg**
5. **Set as HighFps.reg**
6. **Increase FPS in Games.reg**
7. **Increase Responsiveness.reg**
8. **LowEnd PC Optimization.reg**
9. **Response Time.reg**
10. **Run To Make Windows Faster.reg**
11. **Make as OS Fast.reg**

Additional tools:
- Create and restore system restore points
- Select multiple tweaks and apply them all at once
- **Select All** checkbox for bulk application

---

## Modes

| Mode         | Token Required | Accessible Features                                      |
|--------------|:--------------:|----------------------------------------------------------|
| **Basic**    | ❌ No          | General Optimization, Memory Optimization, Performance Boost |
| **Pro Tweaks** | ✅ Yes       | Everything in Basic + **Advanced Tweaks** (registry tweaks) |

> **Note:** The Pro Tweaks mode requires a GitHub personal access token. See [GitHub Token Setup](#github-token-setup) below.

---


## Prerequisites

- **Windows 10** or **Windows 11**
- **Node.js** (for building / development)
- **npm** (comes with Node.js)
- **A GitHub personal access token** (only required for **Pro Tweaks / Advanced** mode)

---

---

## Usage

### Launch Flow

1. **Launch** the application
2. **Splash screen** appears — click **"Enter"**
3. **Choose your mode:**
   - **Basic** — Go straight to the optimizer
   - **Pro Tweaks** — You will be asked for a GitHub token (see [GitHub Token Setup](#github-token-setup))
4. **Select your Windows version** (10 or 11)
5. **Navigate** through the optimization tabs:
   - **General Optimization** — Temp files, Disk Cleanup, Windows Update
   - **Memory Optimization** — Startup apps, transparency, background apps, animations, etc.
   - **Performance Boost** — Power plan, Game Mode, Game Bar, notifications, etc.
   - **Advanced Tweaks** *(Pro mode only)* — Registry tweaks, restore points
6. **Apply** the desired optimizations — each button runs the respective tweak

### Safety Notes
- Some tweaks require **administrator privileges**
- Always **create a restore point** before applying advanced registry tweaks
- Disabling Windows Update can leave your system vulnerable
- The Ultimate Performance power plan may cause **overheating** on some laptops

---

## Project Structure

```
pc-optimization/
├── .gitignore
├── accesstoken.txt          # Store your GitHub token here (for Advanced mode)
├── backend.js               # Core optimization logic (PowerShell, registry, file ops)
├── index.html               # Main app UI (Windows selection + optimization tabs)
├── index.js                 # Electron main process (IPC handlers, window management)
├── package-lock.json
├── package.json
├── preload.js               # Context bridge (exposes APIs to renderer)
├── README.md
├── token.html               # Splash screen + mode selection + token entry
└── assets/
    ├── A6Tweaks.png         # App icon
    ├── grimmjow.png         # Splash screen background
    ├── windows-10.png       # Windows 10 selection image
    └── windows-11.png       # Windows 11 selection image
```

## Technologies Used

- **[Electron.js](https://www.electronjs.org/)** — Desktop application framework
- **Node.js** — Backend runtime
- **HTML / CSS / JavaScript** — UI and logic
- **Windows Registry API** — Registry tweaks (via `regedit`)
- **PowerShell** — Advanced system commands (restore points, service management)

## Dependencies

| Package           | Version   | Purpose                        |
|-------------------|-----------|--------------------------------|
| electron          | ^39.2.7   | Desktop app framework          |
| electron-builder  | ^26.0.12  | Build / package the app        |
| electron-sudo     | ^4.0.12   | Elevate privileges             |
| is-elevated       | ^4.0.0    | Check if running as admin      |
| regedit           | ^5.1.4    | Read/write Windows Registry    |

---

## Contributing

Contributions are welcome! Please feel free to submit a **Pull Request** or open an **Issue** with suggestions, bug reports, or feature requests.

---

## License

This project is licensed under the **ISC License**.

---

## Author

**AjayKumar**

---

## Contact

- **YouTube:** [@a6tweaks](https://youtube.com/@a6tweaks?si=fiP7OWL56-_EKLWq)
- **Discord:** [Join our server](https://discord.gg/XZnnSj2b)

---

## Disclaimer

> Use this application **at your own risk**. While designed to optimize system performance, some tweaks may cause system instability, overheating, or require manual reversion. Always **backup your system** and **create a restore point** before applying changes — especially advanced registry tweaks.

