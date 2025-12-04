# **MoleculeAI – AI-Powered Drug Discovery Platform**  
An end-to-end intelligent system that predicts molecular properties, assists researchers with drug-likeness evaluation, and provides a modern UI for interacting with chemical structures and AI models.

---

##  **Overview**

**MoleculeAI** is a modern AI-driven platform designed to simplify and accelerate early-stage drug discovery.  
It enables users to:

- Input molecular **SMILES** strings  
- Get **AI predictions** (activity/toxicity/logP/etc.)  
- Visualize molecular structures  
- Save molecules for future reference  
- Explore drug-likeness metrics and screening workflows  

This project combines **React + TailwindCSS** for a clean scientific UI and a fully customizable backend of your choice.

---

---








##  **Features**

###  **AI-Based Drug Prediction**
- Predicts molecular activity or property  
- Uses ML/Deep Learning models (e.g., QSAR, ONNX Runtime, TensorFlow.js)

###  **SMILES Input + Molecule Renderer**
- Enter SMILES strings  
- Generate structural visualization in real time  

###  **Molecule Management**
- Save chemical structures  
- Fetch molecules per user  

###  **Modern Scientific UI**
- Built with React + TailwindCSS  
- Fully responsive  
- Clean, elegant color palette  

---

##  **Project Structure**
DrugDiscovery/
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── utils/
│ └── README.md
│
├── backend/
│ ├── models/
│ ├── api/
│ └── utils/
│
└── README.md

---

##  **Tech Stack**

### **Frontend**
- React.js  
- TailwindCSS  
- TypeScript  
- React Router  
- Molecule Visualization Library  

### **Backend (Customizable)**
You can integrate **any backend you prefer**, such as:  
- Node.js + Express  
- Django / Flask  
- Firebase  
- Supabase  
- Custom ONNX Runtime API  
- TensorFlow.js inference API  

### **AI/ML**
- QSAR Models  
- Graph Neural Networks (optional)  
- Fingerprint-based ML  
- ONNX Runtime / TensorFlow.js  

---

##  **How It Works (Step-Wise)**

### **Step 1 — Input Molecule**
User enters a SMILES string into the UI.

### **Step 2 — Render Structure**
Frontend converts SMILES → 2D molecular diagram.

### **Step 3 — Predict Properties**
Frontend sends SMILES to backend → AI model → prediction returns JSON.

### **Step 4 — Analyze Results**
User views:
- Activity score  
- Drug likeness  
- Toxicity warnings  
- Physicochemical properties  

### **Step 5 — Save or Download**
Users can save molecule history for future reference.

---

##  **Installation (Frontend)**

```bash
cd frontend
npm install
npm run dev



## 🔧 Installation (Backend)*
cd backend
npm install
npm start


(Or start your custom backend depending on your setup.)

 API Endpoints (Example)
POST /predict

Request:

{
  "smiles": "CCO"
}


Response:

{
  "prediction": "Active",
  "confidence": 0.92
}
 Future Enhancements

3D molecular visualization

Reinforcement-learning-based molecule generation

Advanced GNN model for property prediction

User dashboard with analytics

