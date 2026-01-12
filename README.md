#MoleculeAI – AI-Powered Drug Discovery Platform

An end-to-end intelligent system that predicts molecular properties, assists researchers with drug‑likeness evaluation, and provides a modern UI for interacting with chemical structures and AI models.

---

##Overview

**MoleculeAI** is a modern AI-driven platform designed to simplify and accelerate early-stage drug discovery.

It enables users to:

* Input molecular **SMILES** strings
* Authenticate securely (Login / Register)
* Get **AI predictions** (activity, toxicity, logP, etc.)
* Visualize molecular structures in real time
* Save and manage molecules
* Explore drug‑likeness metrics and screening workflows

This project combines **React + TailwindCSS** for a clean scientific UI with a **customizable backend** and AI inference pipeline.

---

## Key Screens & User Flow

### 1. Login / Authentication Page

Secure authentication to personalize molecule history and predictions.

**Features:**

* Email & password login
* User registration
* Session-based or token-based authentication

📸 **Screenshot:**


```
Photos/LoginP.png
```

---

###2. Home Dashboard

Central hub after login where users can quickly access predictions and saved molecules.

**Features:**

* Welcome banner
* Quick SMILES input
* Navigation to prediction and history
* Clean scientific UI

📸 **Screenshot:**

```
Photos/HomePageee.png
```

---

###3. Molecule Prediction Page (SMILES → AI Results)

Users input a SMILES string and instantly receive AI-powered predictions with molecular visualization.

**Features:**

* SMILES input box
* 2D molecular structure renderer
* AI prediction results
* Drug‑likeness & toxicity indicators
* Save molecule option

📸 **Screenshot:**

```
Photos/PredictionP.png
```

---

## Features

### AI-Based Drug Prediction

* Predicts molecular activity and properties
* Supports QSAR, fingerprint-based ML, and DL models
* JSON-based prediction API

### SMILES Input + Molecule Renderer

* Enter SMILES strings
* Real-time 2D structure visualization

###  Molecule Management

* Save predicted molecules
* Fetch molecules per user
* View historical predictions

###  Modern Scientific UI

* React + TailwindCSS
* Fully responsive
* Clean and minimal design

### Authentication

* Login / Register system
* User-specific data storage

---

## Project Structure

```
DrugDiscovery/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Home.tsx
│   │   └── Prediction.tsx
│   ├── utils/
│   ├── screenshots/
│   │   ├── login.png
│   │   ├── home.png
│   │   └── prediction.png
│   └── README.md
│
├── backend/
│   ├── models/
│   ├── api/
│   ├── auth/
│   └── utils/
│
└── README.md
```

---

##  Tech Stack

### Frontend

* React.js
* TypeScript
* TailwindCSS
* React Router
* Molecule Visualization Library (RDKit.js / SmilesDrawer / Ketcher)

### Backend (Customizable)

* Node.js + Express
* Flask / Django
* Firebase / Supabase
* Custom ONNX Runtime API
* TensorFlow.js Inference API

### AI / ML

* QSAR Models
* Fingerprint-based ML
* Graph Neural Networks (optional)
* ONNX Runtime / TensorFlow.js

---

## ⚙️ How It Works (Step‑Wise)

### Step 1 — Login

User logs in to access personalized features.

### Step 2 — Input Molecule

User enters a SMILES string.

### Step 3 — Render Structure

SMILES → 2D molecular visualization.

### Step 4 — Predict Properties

Frontend sends SMILES to backend → AI model → JSON response.

### Step 5 — Analyze Results

User views:

* Activity score
* Drug‑likeness
* Toxicity warnings
* Physicochemical properties

### Step 6 — Save Molecule

Molecule and prediction stored per user.

---

## 💻 Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

*(Or start your custom backend depending on your setup.)*

---

## 🔌 API Endpoints (Example)

### POST /predict

**Request**

```json
{
  "smiles": "CCO"
}
```

**Response**

```json
{
  "prediction": "Active",
  "confidence": 0.92
}
```

---

## Future Enhancements

* 3D molecular visualization
* Reinforcement learning‑based molecule generation
* User dashboard with analytics
* Cloud deployment & CI/CD

---

## Author

Developed as an AI‑driven drug discovery platform project.
If you find this project useful, consider starring the repository!
